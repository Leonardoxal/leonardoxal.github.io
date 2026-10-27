-- Academia da Verdade — tabela de progresso por usuário.
-- Rode uma vez no Supabase: SQL Editor → New query → cole tudo → Run.

create table if not exists public.progresso (
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  parte      text        not null check (parte in ('nucleo', 'notas', 'sessoes', 'revisoes', 'respostas')),
  dados      jsonb       not null,
  atualizado timestamptz not null default now(),
  primary key (user_id, parte)
);

-- Cada usuário só enxerga e altera as próprias linhas.
alter table public.progresso enable row level security;

drop policy if exists "ler o próprio progresso" on public.progresso;
create policy "ler o próprio progresso" on public.progresso
  for select to authenticated using (user_id = auth.uid());

drop policy if exists "criar o próprio progresso" on public.progresso;
create policy "criar o próprio progresso" on public.progresso
  for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "alterar o próprio progresso" on public.progresso;
create policy "alterar o próprio progresso" on public.progresso
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "apagar o próprio progresso" on public.progresso;
create policy "apagar o próprio progresso" on public.progresso
  for delete to authenticated using (user_id = auth.uid());
