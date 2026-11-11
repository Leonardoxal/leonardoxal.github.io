# Arquitetura: formação infantil e formação adulta

A Academia da Verdade atende dois públicos no mesmo site: a formação infantil e juvenil (2 a 15 anos) e a formação adulta. Hoje eles ficam no mesmo site, mas já separados por código, por dados e por catálogo. Assim, a separação em dois sites, se um dia vier, não exige reconstruir nada.

## Onde fica cada coisa

| Camada | Formação adulta | Formação infantil e juvenil |
|---|---|---|
| Telas | `app/views/` (painel, curso, biblioteca, mediateca, avaliações…) | `app/views/infantil.js`, `jogos.js`, `assistir.js` |
| Lógica | `app/core.js`, `app/data/` | `app/infantil/` (jogos, histórico, registro, séries, prompt, mídia) |
| Catálogo | `data/livros.js` (acervo), `data/mediateca.js` (obras) | `infantil/livros.js`, `infantil/midia.js`, `infantil/aulas.js` |
| Dados pessoais | tabela `progresso` (uma linha por membro e parte, RLS por `user_id`) | tabelas `aci_*` (por família, RLS por `aci_na_familia()`) e pasta privada `aci-tarefas` |
| Sem login | `localStorage` (`academia-verdade-*`) | IndexedDB `aci-tarefas` e `localStorage` (`aci-*`) |

Rotas infantis: `#infantil`, `#infantil-<aula>`, `#jogos`, `#jogo-<id>`, `#assistir`, `#assistir-<obra>`, `#acompanhar-<filho>.<id>`. As demais rotas são da formação adulta.

## Regras que mantêm a separação

1. Recomendação não mistura públicos. A busca global e a mediateca indexam só o catálogo adulto. Os livros, filmes e jogos infantis aparecem só nas telas infantis, filtrados pela idade do filho.
2. Cada item infantil declara a sua faixa:
   - jogos: `idade: [min, max]`;
   - filmes e séries: `idade` e `publico: 'infantil' | 'juvenil'`;
   - livros: a faixa de idade.

   A idade é indicação; o nível dos jogos acompanha o desempenho.
3. Dados de criança nunca entram no repositório. Nome e nascimento ficam no aparelho ou nas tabelas `aci_*`. Os textos para IA externa usam "Aluno A".
4. Dados pessoais do adulto ficam só na conta dele: progresso, notas e biblioteca pessoal (`estado.pessoais`). Os PDFs abertos no leitor não saem do aparelho.

## Banco de dados (Supabase)

Todas as mudanças desta etapa foram aditivas, sem apagar nem alterar dado existente:

- `aci_filho.interesses`: interesses observados (figuras dos jogos, recomendações).
- `aci_jogo`: partidas dos jogos (nível inicial, final e máximo, acertos, erros). O recorde pessoal é o maior nível máximo.
- `aci_registro`: aprendizagem confirmada pelo responsável. Guarda área, habilidade, situação, a origem da informação (observação, IA conferida ou confirmado), dificuldade, intervenção e data de reavaliação.
- `aci_serie`: acompanhamento de séries por filho. A estrutura de episódios é informada pela família.

Todas as tabelas `aci_*` usam a mesma regra: só quem entrou na família com o código lê e grava. O script completo está em `supabase-infantil.sql`.

## Para separar em dois sites no futuro

1. Copiar `app/views/{infantil,jogos,assistir}.js`, `app/infantil/` e os estilos `.inf-*`, `.jg-*` e `.as-*` para um novo app. A casca e o roteador de `app.js` podem ser reaproveitados.
2. Apontar o novo app para o mesmo projeto Supabase. As tabelas `aci_*` não dependem de `progresso`.
3. Tirar do `app.js` adulto as rotas infantis e o item "Infantil" e "Jogos" do menu.

Nenhuma migração de dados é necessária: os dois públicos já gravam em tabelas diferentes.

## O que depende de revisão profissional

Em que se apoia cada recurso, e com que força, está em `FUNDAMENTOS_PEDAGOGICOS.md`.

- A sequência dos jogos, as fichas de filmes e séries, os critérios por área e os textos para IA são propostas da Academia. Não foram validados por pedagogos, psicólogos ou especialistas. Recomenda-se essa revisão antes de uso institucional.
- A classificação oficial das obras (ClassInd) está marcada "a conferir" em cada ficha.
- A estrutura de episódios e a marcação de fillers vêm da família, conferidas na fonte oficial. O site não inventa episódios.
