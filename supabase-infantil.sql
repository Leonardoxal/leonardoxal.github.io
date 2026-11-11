-- Aba Infantil (Academia Católica Infantil): sincronização da família.
-- Rode uma vez no SQL Editor do projeto Supabase da Academia da Verdade, depois do supabase.sql.
-- Tudo leva o prefixo aci_ (tabelas, funções, regras e a pasta de arquivos) e não toca na tabela "progresso".
--
-- Modelo: cada pessoa da família entra com o próprio login da Verdade e digita o CÓDIGO DA FAMÍLIA uma vez.
-- Quem entra na família enxerga e grava as mesmas aulas, observações e tarefas. Qualquer outra conta do projeto
-- não enxerga nada. O código nunca fica no banco: só o hash dele, em aci_config. Trocar o código impede novas
-- entradas; quem já entrou continua até sair (aci_sair_da_familia) ou ser removido de aci_familia.

create table if not exists public.aci_config (
  id          boolean primary key default true check (id),
  codigo_hash text not null
);
alter table public.aci_config enable row level security; -- sem regras: ninguém lê nem grava direto
-- Defina o código uma vez (troque SEU-CODIGO por 16 ou mais caracteres aleatórios e guarde-o em lugar seguro):
-- insert into public.aci_config (codigo_hash) values (encode(sha256(convert_to('SEU-CODIGO', 'UTF8')), 'hex'))
--   on conflict (id) do update set codigo_hash = excluded.codigo_hash;

create table if not exists public.aci_familia (
  user_id   uuid primary key references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now()
);
alter table public.aci_familia enable row level security; -- sem regras: ninguém lê nem grava direto

create or replace function public.aci_na_familia() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.aci_familia where user_id = auth.uid());
$$;

-- Chamada pelo site depois do login. Entra na família quem mandar o código certo; devolve true se a conta é da família.
create or replace function public.aci_reivindicar(codigo text default '') returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return false; end if;
  if public.aci_na_familia() then return true; end if;
  if exists (select 1 from public.aci_config where codigo_hash = encode(sha256(convert_to(coalesce(codigo, ''), 'UTF8')), 'hex')) then
    insert into public.aci_familia (user_id) values (auth.uid()) on conflict do nothing;
  end if;
  return public.aci_na_familia();
end $$;

-- Sair da família (só remove a própria conta da lista; não apaga tarefas).
create or replace function public.aci_sair_da_familia() returns void
language sql security definer set search_path = public as $$
  delete from public.aci_familia where user_id = auth.uid();
$$;

revoke all on function public.aci_na_familia() from public, anon;
revoke all on function public.aci_reivindicar(text) from public, anon;
revoke all on function public.aci_sair_da_familia() from public, anon;
grant execute on function public.aci_na_familia() to authenticated;
grant execute on function public.aci_reivindicar(text) to authenticated;
grant execute on function public.aci_sair_da_familia() to authenticated;

-- Cadastro dos filhos: nome e nascimento só aqui (nunca no repositório). O id é o código fixo da aula (f1, f2…).
create table if not exists public.aci_filho (
  id         text primary key check (id ~ '^[a-z0-9-]{1,30}$'),
  nome       text not null check (length(nome) between 1 and 60),
  nascimento date,
  perfil     text check (perfil in ('menina', 'menino')),
  atualizado timestamptz not null default now()
);

-- "Aula feita" e observações, por filho (filho = '' quando não se indica quem fez).
create table if not exists public.aci_aula (
  aula       text        not null check (aula ~ '^\d{4}-\d{2}-\d{2}(-f\d{1,3})?$'),
  filho      text        not null default '' check (filho = '' or filho ~ '^[a-z0-9-]{1,30}$'),
  feita      boolean     not null default false,
  nota       text        not null default '' check (length(nota) <= 5000),
  atualizado timestamptz not null default now(),
  primary key (aula, filho)
);

create table if not exists public.aci_anexo (
  id        uuid primary key,
  aula      text    not null check (aula ~ '^\d{4}-\d{2}-\d{2}(-f\d{1,3})?$'),
  filho     text    not null default '' check (filho = '' or filho ~ '^[a-z0-9-]{1,30}$'), -- quem fez a tarefa
  nome      text    not null check (length(nome) between 1 and 200),
  tipo      text    not null check (tipo = 'application/pdf' or tipo ~ '^image/(jpeg|png|webp|gif|heic|heif)$'),
  tamanho   integer not null check (tamanho between 1 and 26214400),
  caminho   text    not null unique,
  criado_em timestamptz not null default now()
);
create index if not exists aci_anexo_aula on public.aci_anexo (aula);

-- "Já lemos" da biblioteca: uma linha por livro lido, por filho (filho = 'familia' quando não se escolhe o filho).
create table if not exists public.aci_livro (
  filho     text not null check (filho ~ '^[a-z0-9-]{1,30}$'),
  livro     text not null check (livro ~ '^[a-z0-9-]{1,80}$'),
  criado_em timestamptz not null default now(),
  primary key (filho, livro)
);
alter table public.aci_livro enable row level security;
drop policy if exists "familia usa livros" on public.aci_livro;
create policy "familia usa livros" on public.aci_livro
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

alter table public.aci_filho enable row level security;
alter table public.aci_aula  enable row level security;
alter table public.aci_anexo enable row level security;

drop policy if exists "familia usa filhos" on public.aci_filho;
create policy "familia usa filhos" on public.aci_filho
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

drop policy if exists "familia usa aulas" on public.aci_aula;
create policy "familia usa aulas" on public.aci_aula
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

drop policy if exists "familia usa anexos" on public.aci_anexo;
create policy "familia usa anexos" on public.aci_anexo
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

-- Interesses de cada filho (porta de entrada dos jogos e das recomendações; gosto é tendência, não limite).
alter table public.aci_filho add column if not exists interesses text[] not null default '{}';
alter table public.aci_filho drop constraint if exists aci_filho_interesses_validos;
alter table public.aci_filho add constraint aci_filho_interesses_validos
  check (interesses <@ array['animais','veiculos','ceu','natureza','musica','historias']::text[]);

-- Partidas dos jogos, por filho: nível, acertos e erros (o recorde pessoal é o maior nivel_max). Sem ranking.
create table if not exists public.aci_jogo (
  id            uuid primary key,
  filho         text not null check (filho ~ '^[a-z0-9-]{1,30}$'),
  jogo          text not null check (jogo ~ '^[a-z0-9-]{1,30}$'),
  inicio        timestamptz not null,
  fim           timestamptz not null,
  nivel_inicial integer not null check (nivel_inicial between 1 and 10000),
  nivel_final   integer not null check (nivel_final between 1 and 10000),
  nivel_max     integer not null check (nivel_max between 1 and 10000),
  acertos       integer not null default 0 check (acertos between 0 and 100000),
  erros         integer not null default 0 check (erros between 0 and 100000),
  atualizado    timestamptz not null default now()
);
create index if not exists aci_jogo_filho on public.aci_jogo (filho, inicio desc);
alter table public.aci_jogo enable row level security;
drop policy if exists "familia usa jogos" on public.aci_jogo;
create policy "familia usa jogos" on public.aci_jogo
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

-- Registro de aprendizagem confirmado pelo responsável (a análise da IA só entra aqui depois de conferida).
create table if not exists public.aci_registro (
  id          uuid primary key,
  filho       text not null check (filho ~ '^[a-z0-9-]{1,30}$'),
  aula        text check (aula is null or aula ~ '^\d{4}-\d{2}-\d{2}(-f\d{1,3})?$'),
  area        text not null check (length(area) between 1 and 60),
  habilidade  text not null check (length(habilidade) between 1 and 160),
  situacao    text not null check (situacao in ('nao-iniciado','em-desenvolvimento','parcial','dominado','revisar')),
  origem      text not null check (origem in ('observacao','ia-conferida','confirmado')),
  dificuldade text not null default '' check (length(dificuldade) <= 1000),
  intervencao text not null default '' check (length(intervencao) <= 2000),
  reavaliar   date,
  criado_em   timestamptz not null default now()
);
create index if not exists aci_registro_filho on public.aci_registro (filho, criado_em desc);
alter table public.aci_registro enable row level security;
drop policy if exists "familia usa registros" on public.aci_registro;
create policy "familia usa registros" on public.aci_registro
  for all to authenticated using (public.aci_na_familia()) with check (public.aci_na_familia());

-- Pasta privada dos arquivos das tarefas (fotos e PDFs, até 25 MB cada).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('aci-tarefas', 'aci-tarefas', false, 26214400,
        array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "aci ler tarefas" on storage.objects;
create policy "aci ler tarefas" on storage.objects
  for select to authenticated using (bucket_id = 'aci-tarefas' and public.aci_na_familia());

drop policy if exists "aci enviar tarefas" on storage.objects;
create policy "aci enviar tarefas" on storage.objects
  for insert to authenticated with check (bucket_id = 'aci-tarefas' and public.aci_na_familia());

drop policy if exists "aci apagar tarefas" on storage.objects;
create policy "aci apagar tarefas" on storage.objects
  for delete to authenticated using (bucket_id = 'aci-tarefas' and public.aci_na_familia());
