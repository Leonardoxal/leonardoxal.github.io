# Prompt de continuação — Academia da Verdade

Cole este texto inteiro para a próxima IA.

---

Você vai continuar o trabalho no site **Academia da Verdade**: um site estático em JavaScript puro (módulos ES, sem framework).
- Repositório: `Leonardoxal/leonardoxal.github.io`, branch `main`.
- Cada push em `main` publica o site pelo GitHub Actions (workflow "Publicar site").
- Responda ao usuário em português do Brasil, de forma curta. Código, commits e documentação vão em prosa normal e completa.

## Objetivo

Terminar **todas as disciplinas pendentes**, uma por vez, em ordem alfabética.
- Cada disciplina tem um **percurso** (11 etapas e bibliografia) e **5 módulos** de 5 aulas cada.
- Publique módulo por módulo.
- **Não pare entre disciplinas e não peça confirmação.** O usuário disse: "continue nao precisa para so siga a ordem".
- Depois, o usuário vai mandar mais fontes e talvez mudar datas. Primeiro termine todas as matérias.

## Estado atual (31/10/2026)

**Concluídas:** antropologia, astronomia, biologia, ciência política, ciências ambientais, ciências da Terra, cultura, demografia, direito, economia, educação, estatística, física, geografia, história, história da arte, linguística, literatura, lógica formal, simbologia e sociologia.

**Matemática:** o percurso já está publicado em `app/data/disciplinas.js`, com `aulasPublicadas: false` e sem o campo `aulas`. Faltam os módulos MA1 a MA5 (prefixo `ma`).

**Faltam depois disso, nesta ordem, cada uma com percurso e 5 módulos:**

| Disciplina | Prefixo |
|---|---|
| Música | `mu` |
| Psicologia | `ps` |
| Química | `qu` |
| Relações Internacionais | `ri` |

`DISCIPLINAS_PENDENTES` (no fim de disciplinas.js) hoje vale `['psicologia', 'relacoes-internacionais', 'quimica', 'musica']`.

Antes de usar um prefixo, confira que ele está livre: faça um Glob por `app/data/aulas/<prefixo>*.js`.

## Regras obrigatórias

- **Fontes:** não invente livros, atribuições, citações, dados, páginas, links ou edições. Na dúvida, omita. Em `fonte.link`, use `null`, a menos que tenha certeza absoluta.
- **Etiquetas:** marque cada afirmação com `${tag('fato'|'doutrina'|'argumento'|'interpretacao'|'hipotese'|'debate')}`.
- **Obras e dados do usuário:**
  - Os 607 títulos originais continuam obrigatórios.
  - Não apague anotações, leituras, avaliações, histórico, favoritos, tempo de estudo nem dados sincronizados.
- **Verificação:**
  - Não declare um teste aprovado sem executá-lo.
  - Não declare uma disciplina concluída enquanto ela tiver só o percurso.
- **Segurança e custos:**
  - Não use a chave `service_role` do Supabase nem senhas.
  - Não crie contas.
  - Não adicione serviços pagos nem dependências.
- **Commits:**
  - Autor: `git -c user.name="Leonardo Almeida" -c user.email="leonardoalmeidaxa@gmail.com"`.
  - Mensagens no padrão `feat: ...`.
  - Sem linhas de coautoria ou atribuição.
- **Hook GateGuard:** antes de criar ou editar um arquivo pela primeira vez, faça um Glob ou Grep. Depois, declare três coisas: quem importa o arquivo, que nenhum outro arquivo já faz isso, e a instrução do usuário citada literalmente. Prefira a ferramenta Edit a substituições em massa pelo shell.

## Modelo de aula

Copie a estrutura de um arquivo pronto, por exemplo `app/data/aulas/lf1.js` a `lf5.js` ou `lt5.js`.

**Cabeçalho:**
```js
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';
export const AULAS = [ aula({...}), ..., avaliacao(id, titulo, htmlIntro, [disc(...), disc(...)]) ];
```

**Campos de `aula({...})`:**
- `id`, `titulo`, `duracao`, `aprendera[]`, `prereq[]`, `explicacao` (HTML)
- `vocabulario[[termo, def]]`, `exemplos` (HTML)
- `contexto` (HTML; precisa conter "Brasil")
- `argumento{titulo, tag, premissas[], conclusao, nota}`
- `objecoes[{objecao, tag, resposta}]`
- `aplicacao`, `fonte{obra, link|null, orientacao}`, `perguntas[{p, r}]`
- `exercicios`: 5 `mc(p, opcoes, idxCorreto, expl)` + 1 `disc(p, criterios)`
- `resumo[]`
- `referencias[{texto, livro?}]`: no mínimo 3; use `livro` só com id que já exista em `app/data/obras/`
- `criterios[]`, `revisao[[a, b]]`
- `avancado{texto, leituras[], exercicios}`: 3 `mc` + 1 `disc`

Escape apóstrofos em strings com aspas simples: `O\'Connor`.

**Ids de livros:** confira com Grep em `app/data/obras`. Alguns úteis:
- Matemática: `platao-menon`, `boecio-quadrivio`, `descartes-ensaios`, `pascal-triangulo`, `pascal-espirito-geometrico`
- Música: `agostinho-musica`, `rousseau-musica`
- Psicologia: `mfs-psicologia`, `descartes-paixoes`, `sartre-emocoes`, `wittgenstein-psicologia`
- Relações Internacionais: `kant-paz`, `olavo-dugin`

## Módulos e etapas

| Módulo | Aulas | Etapas do percurso |
|---|---|---|
| x1 | x1-1 a x1-4 + avaliação x1-5 | fundamentos x1-1; vocabulario x1-2; metodos x1-3, x1-4, x1-5 |
| x2 | x2-1 a x2-4 + avaliação x2-5 | formacao x2-1, x2-2; autores x2-3, x2-4, x2-5 |
| x3 | x3-1 a x3-4 + avaliação x3-5 | escolas x3-1, x3-2; debates x3-3, x3-4, x3-5 |
| x4 | x4-1 a x4-4 + avaliação x4-5 | avancado x4-1 a x4-5 |
| x5 | ver abaixo | aplicacoes x5-1 a x5-3; pesquisa x5-4; avaliacao x5-5 |

No x5: x5-1 a x5-3 são aplicações; x5-4 é a pesquisa de quatro semanas; x5-5 é a avaliação integradora, com o título "Avaliação integradora de <Disciplina>".

## Para cada módulo novo (exemplo: `ma1`)

1. Crie `app/data/aulas/ma1.js`.
2. Em `app/data/aulas/index.js`:
   - adicione `import { AULAS as MA1 } from './ma1.js';` depois do último import de disciplina, antes de `E1`;
   - adicione `...MA1,` antes de `...E1,` no array.
3. Em `app/data/curriculo.js`, insira a entrada logo depois da entrada do módulo anterior, antes de `{ id: 'e1',`:
   - Campos: `{ id, n: 'MA1', titulo, semanas, degrau: null, disciplina: 'matematica', prereq, descricao, objetivos, aulas: A([5 títulos]), criterios }`.
   - `semanas` por módulo: `'4–6'`, `'7–9'`, `'10–12'`, `'13–15'`, `'16–19'`.
   - `prereq`: `['m4']` no primeiro módulo; nos outros, o id do módulo anterior.
4. Em `app/data/arvore.js`, inclua o id em `modulos: [...]` no nó da disciplina. Se o nó não tiver `modulos`, crie a chave.
5. Em `app/data/disciplinas.js`, acrescente as aulas do módulo ao mapa `aulas` da disciplina, conforme a tabela acima. Se o mapa não existir, crie-o.
6. Rode os testes (PowerShell):
   ```
   $o = node --test app/tests/core.test.mjs; $o | Select-String "^ℹ (pass|fail)"
   ```
   Hoje são 45 testes, todos devem passar.
7. Confira no navegador:
   - Inicie o servidor `academia` de `.claude/launch.json` (`node servir.mjs`, porta 5179).
   - Visite `#mod-ma1`, `#aula-ma1-1` a `#aula-ma1-5` e `#disciplina-matematica`.
   - Em cada página, procure o texto "em preparação" e recursos com status ≥ 400.
   - Na página da disciplina, "em preparação" é esperado até o último módulo.
8. Faça commit, push e acompanhe o deploy:
   ```
   git add app; git -c user.name="Leonardo Almeida" -c user.email="leonardoalmeidaxa@gmail.com" commit -qm "feat: ..."; git push -q origin main; gh run watch --exit-status (gh run list --limit 1 --json databaseId --jq '.[0].databaseId'); gh run list --limit 1
   ```

## Ao terminar uma disciplina (no módulo x5)

- Em `disciplinas.js`, mude `aulasPublicadas` para `true`.
- Em `arvore.js`, troque `P(` por `N(` no nó da disciplina.
- Em `app/data/avaliacoes.js`, acrescente `ma5: ['ma1', 'ma2', 'ma3', 'ma4']` ao objeto `INTEGRADORAS`. Hoje ele termina em `lf5: [...] };`.

## Ao começar uma disciplina nova

1. Em `disciplinas.js`, insira o bloco do percurso antes do `];` que fecha `DISCIPLINAS`. Hoje ele vem depois do bloco de matemática.
   - Campos: `{ id, no, nome, aulasPublicadas: false, metodo, prereq, etapas: [11 × E(...)], bibliografia: [B(...)] }`.
   - As etapas, na ordem: fundamentos, vocabulario, metodos, formacao, autores, escolas, debates, avancado, aplicacoes, avaliacao, pesquisa.
   - Use os blocos de `logica-formal` e `matematica` como modelo.
   - A bibliografia deve ter obras mundiais e brasileiras (`{ brasil: true }`).
   - O `prereq` não pode formar ciclo. Por exemplo, `logica-formal` depende de `matematica`, então `matematica` não pode depender de `logica-formal`.
2. Remova o id de `DISCIPLINAS_PENDENTES`.
3. Inclua o id, em ordem alfabética, na lista de `app/tests/core.test.mjs`: é o teste 'disciplinas: História, Geografia...', que contém `assert.deepEqual(DISCIPLINAS.map((d) => d.id).sort(), [...])`.

## Quando o seu limite de uso estiver acabando

Antes de parar:
1. Deixe o repositório **consistente**: testes passando e nenhuma referência a módulos que ainda não existem.
2. Faça commit e push do que estiver pronto.
3. **Atualize este arquivo** (`PROMPT-CONTINUACAO.md`) com o novo estado: o que foi concluído, o que falta e qualquer mudança de convenção.
4. Mantenha esta mesma instrução no arquivo, para que a próxima IA faça o mesmo quando o limite dela acabar.
5. Diga ao usuário onde está o prompt atualizado.
