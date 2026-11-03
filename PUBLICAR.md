# Publicar a Academia da Verdade fora do claude.ai

O site é estático (pasta `app/`) e fica no GitHub Pages, de graça. O login e a sincronização entre aparelhos usam o Supabase, também no plano gratuito. Sem o Supabase configurado, o site funciona e guarda o progresso só no navegador de cada aparelho.

## 1. Supabase (contas e progresso)

1. Crie uma conta em <https://supabase.com> e um projeto novo (plano Free). Guarde a senha do banco num lugar seguro.
2. No projeto, abra **SQL Editor → New query**, cole o conteúdo de `supabase.sql` e clique em **Run**.
3. Em **Project Settings → API**, copie:
   - **Project URL** (ex.: `https://abcdefgh.supabase.co`);
   - a chave **anon public**.
4. Cole os dois valores em `app/config.js`. A chave *anon* é pública por definição; quem protege os dados são as regras do `supabase.sql`. Nunca use a chave **service_role** no site.
5. Em **Authentication → URL Configuration**, defina **Site URL** como o endereço do GitHub Pages (passo 2), neste projeto `https://leonardoxal.github.io/`.
6. Opcional, para uso próprio: em **Authentication → Providers → Email**, desligue **Confirm email** para entrar sem precisar confirmar o e-mail. Deixe ligado se outras pessoas forem usar.

Observação do plano gratuito: um projeto sem uso por uma semana é pausado. Os dados continuam lá; basta reativá-lo no painel do Supabase.

## 2. GitHub Pages (o site)

1. Crie uma conta em <https://github.com> e entre no terminal com:

   ```bash
   gh auth login
   ```

2. Na pasta do projeto, crie o repositório e envie o código. O nome `SEU-USUARIO.github.io` faz o site ficar na raiz do endereço:

   ```bash
   gh repo create SEU-USUARIO.github.io --public --source . --push
   ```

3. No GitHub, abra **Settings → Pages** e escolha **Source: GitHub Actions**. O workflow `.github/workflows/pages.yml` roda os testes e publica a pasta `app/` a cada envio.
4. O endereço aparece em **Settings → Pages** em um ou dois minutos.

## 3. Usar

Abra o endereço no PC e no celular, vá em **Plano → Conta e sincronização**, crie a conta uma vez e entre com ela nos outros aparelhos. No celular, use "Adicionar à tela inicial" do navegador para abrir como app.

Se você já tinha progresso no claude.ai, exporte o backup lá (**Plano → Exportar backup**) e importe no novo site depois de entrar na conta.

## 4. Aba Infantil (Academia Católica Infantil)

A aba **Infantil** é a introdução à Academia da Verdade: aulas em PDF para a criança (de 3 a 15 anos) e as tarefas já feitas, anexadas pela família. Ela usa o mesmo login da Verdade.

- **Sem conta:** as tarefas (fotos ou PDFs), a marcação "aula feita" e as observações ficam só no navegador do aparelho, com backup em arquivo.
- **Com conta e código da família:** as tarefas sincronizam entre todos que entraram na família, em qualquer aparelho. Cada pessoa usa o próprio login e digita o código uma vez.

**Filhos.** Cada aula é para um filho: o `meta` da aula (no projeto privado) declara `filho` (código fixo, f1, f2…) e `para` (rótulo impresso nos PDFs, por exemplo "Filha 1"). Dentro da aba, a seção **Filhos** deixa cadastrar e atualizar o nome, o nascimento e o perfil de cada código; com isso as aulas mostram "Para: Maria", a idade é calculada, e cada tarefa e cada "aula feita" ficam ligadas ao filho escolhido em "Quem fez esta aula?". Nome e nascimento ficam só no navegador ou no banco privado, nunca no repositório. Para um filho novo, gere aulas com o código dele (f2) e cadastre-o na aba.

Para ativar a sincronização:

1. No SQL Editor do mesmo projeto Supabase, rode `supabase-infantil.sql` (depois do `supabase.sql`). Tudo leva o prefixo `aci_` e não toca na tabela `progresso`.
2. Defina o código da família, uma vez: descomente e rode o `insert into public.aci_config` do próprio arquivo, trocando `SEU-CODIGO` por 16 ou mais caracteres aleatórios. Guarde o código fora do repositório; no banco fica só o hash.
3. Passe o código só a quem for da família. Para impedir novas entradas, troque o código; quem já entrou continua até sair da família.
4. Em `app/infantil/config.js`, troque `FAMILIA_ATIVA` para `true` e publique (estado atual: `true`). Com `false`, a aba não pede o código e as tarefas ficam só no aparelho.

Para publicar uma aula nova na aba, no projeto privado da Academia Católica Infantil (que gera os PDFs): `node ferramentas/publicar-site.mjs <pasta deste repositório>`. Isso copia os PDFs para `app/infantil/aulas/` e reescreve `app/infantil/aulas.js`. Os testes (`node --test app/tests/core.test.mjs app/tests/infantil.test.mjs`) conferem se os PDFs existem.

Atenção: o repositório é público, então os PDFs das aulas ficam públicos. Nenhum nome, foto ou tarefa de criança entra aqui; as tarefas ficam só no navegador ou na pasta privada `aci-tarefas` do Supabase.
