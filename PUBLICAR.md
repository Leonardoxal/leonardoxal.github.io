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
