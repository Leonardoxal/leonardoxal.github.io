# Arquitetura: formação infantil e formação adulta

Desde novembro de 2026, os dois públicos têm sites separados:

- **Academia da Verdade** (`https://leonardoxal.github.io/`, este repositório): formação adulta.
- **Academia para Verdade Jr.** (`https://leonardoxal.github.io/academia-para-verdade-jr/`, repositório `Leonardoxal/academia-para-verdade-jr`): formação infantil e juvenil, dos 2 aos 15 anos. Tem aulas em PDF, biblioteca da família, jogos, desenho, filmes e séries, cadastro de filhos e registro.

## O que ficou neste repositório

- Só a formação adulta: curso, avaliações, caderno, biblioteca, mediateca, atlas, plano, idiomas e busca.
- O item "Infantil (Jr.)" do menu e todas as rotas infantis antigas (`#infantil`, `#infantil-<aula>`, `#jogos`, `#jogo-<id>`, `#desenhar`, `#assistir`, `#assistir-<obra>`, `#acompanhar-<filho>.<id>`) levam ao Jr., com a mesma rota. Favoritos e links antigos continuam funcionando.
- `supabase-infantil.sql` continua aqui como registro do banco, que o Jr. usa.

## Dados

- Os dois sites usam o mesmo projeto Supabase. A formação adulta grava na tabela `progresso`, por `user_id`. O Jr. grava nas tabelas `aci_*` e na pasta privada `aci-tarefas`, só para quem entrou na família com o código (`aci_na_familia()`).
- A conta (e-mail e senha) é a mesma nos dois sites.
- Os dois sites ficam na mesma origem (`leonardoxal.github.io`). Por isso o que foi salvo no aparelho (localStorage `aci-*` e IndexedDB `aci-tarefas`) e a sessão de login valem nos dois. Não há migração de dados.

## Regras que continuam valendo

1. Recomendação não mistura públicos. A busca e a mediateca da Verdade indexam só o catálogo adulto.
2. Dados de criança nunca entram em nenhum dos dois repositórios.
3. Dados pessoais do adulto ficam só na conta dele.

## Publicação das aulas infantis

O projeto privado `Academia-Catolica-Infantil` publica as aulas no Jr., com `node ferramentas/publicar-site.mjs <pasta do repositório do Jr.>`.

## O que depende de revisão profissional

Está em `FUNDAMENTOS_PEDAGOGICOS.md` e no relatório do Jr.
