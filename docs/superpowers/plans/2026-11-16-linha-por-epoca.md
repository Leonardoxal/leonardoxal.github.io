# Linha de estudo por época: plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Na fase 3, a Linha de estudo e o botão "Agora" passam a seguir épocas históricas, com uma trilha paralela para as aulas sem época.

**Architecture:** Um arquivo de dados novo (`app/data/epocas.js`) diz a época das aulas que têm época clara; o resto é derivado por código (herança dentro da disciplina, trilha paralela, lugar das avaliações de módulo). As telas existentes (`estudar.js`, `grade.js`, `curso.js`) passam a ler esse arquivo na fase 3. Módulos, provas, notas e identificadores não mudam.

**Tech Stack:** JavaScript puro em módulos ES, sem build. Testes com `node --test app/tests/core.test.mjs`.

**Spec:** `docs/superpowers/specs/2026-11-16-linha-por-epoca-design.md`

## Global Constraints

- Nenhum identificador de aula, módulo, prova ou obra muda.
- As regras de aprovação não mudam (`NOTA_MINIMA`, prova por módulo, `degrauConcluivel`).
- As fases 1 e 2 (degraus 0 a 4) ficam como estão; só a fase 3 muda.
- Aula sem época clara não recebe época por suposição.
- Obras só aparecem numa época se listadas à mão em `epocas.js` depois de conferidas.
- A página Semestres (`#periodos`) continua funcionando sem alteração.
- Commit só com confirmação explícita do responsável; nenhum push.
- Texto de interface em português do Brasil, redação completa.

## Review Focus

1. Estudante com progresso antigo de semestre (aulas concluídas fora de ordem): a época atual é a primeira com aula pendente, e aulas já concluídas aparecem como concluídas, sem exigir refazer.
2. Aula "em preparação" (sem conteúdo em `aulaPorId`): não entra em época nem na trilha, e não trava a época.
3. Época em que todas as aulas estão concluídas mas uma prova de módulo não: a prova aparece como próxima atividade antes de a época seguinte abrir.
4. Todas as épocas concluídas e trilha paralela pendente (ou o contrário): o botão "Agora" aponta para o que resta, não fica vazio.
5. `#epoca-<id>` com id inexistente: mensagem "Época não encontrada", sem erro na tela.

---

### Task 1: Dados e regras das épocas

**Files:**
- Create: `app/data/epocas.js`
- Test: `app/tests/core.test.mjs` (novo bloco `describe('épocas')` no fim)

**Interfaces:**
- Consumes: `MODULOS`, `todasAulas` de `app/data/curriculo.js`; `aulaPorId` de `app/data/aulas/index.js`; `aulaConcluida`, `melhorNota`, `NOTA_MINIMA` de `app/core.js`; `AVALIACOES` de `app/data/avaliacoes.js`; `DISCIPLINAS` de `app/data/disciplinas.js`.
- Produces:
  - `EPOCAS: Array<{ id, titulo, anos, apresentacao, obras: string[] }>`, nesta ordem e com estes ids: `egito-mesopotamia`, `grecia`, `roma`, `cristianismo-primitivo`, `medieval`, `renascimento`, `revolucao-cientifica`, `iluminismo`, `seculo-xix`, `seculo-xx`, `contemporaneo`, `brasil`.
  - `PARALELAS: string[]` = `['matematica', 'logica-formal', 'estatistica', 'fisica', 'quimica', 'biologia', 'astronomia', 'ciencias-terra', 'ciencias-ambientais', 'demografia']`.
  - `EPOCA_DA_AULA: Record<aulaId, epocaId | { epoca, motivo?, revisao?: epocaId[] }>`: só as aulas com época clara.
  - `PARTES_SEMANA = { epoca: 0.55, paralela: 0.30, revisao: 0.15 }`.
  - `epocaDaAula(aulaId): epocaId | null` (já com a herança aplicada).
  - `aulasDaEpoca(epocaId): string[]` (ids em ordem de estudo, avaliações de módulo incluídas).
  - `revisoesDaEpoca(epocaId): string[]`.
  - `trilhaParalela(): string[]`.
  - `epocaAtual(estado): epoca | null`.
  - `proximaDaEpoca(estado): { href, rotulo } | null` e `proximaParalela(estado): { href, rotulo } | null`.

Regras de derivação (o que a assinatura e os testes não determinam):

1. Só entram aulas publicadas (`aulaPorId[id]`) de módulos da fase 3: `m.degrau === null` ou `m.degrau >= 5`.
2. Aula listada em `EPOCA_DA_AULA` fica na época indicada.
3. Aula de avaliação de módulo (`tipo === 'avaliacao'`) nunca é listada: fica logo depois da última aula de conteúdo do mesmo módulo, na ordem global (épocas em sequência, depois a trilha).
4. Aula não listada de disciplina fora de `PARALELAS` (e da escada, degraus 5 a 13) herda a época da próxima aula listada da mesma disciplina, na ordem do currículo; se não houver próxima, a da anterior. Assim o módulo de método entra na época em que a matéria aparece pela primeira vez.
5. Aula não listada de disciplina em `PARALELAS` vai para a trilha paralela.
6. Ordem dentro da época: História, Filosofia (escada), Geografia, depois as demais disciplinas na ordem de `DISCIPLINAS`; dentro da disciplina, a ordem do currículo.
7. Ordem da trilha paralela: por número do módulo dentro da disciplina (todos os módulos I, depois os III, IV, V) e, no empate, a ordem de `PARALELAS`.
8. `epocaAtual`: a primeira época com aula não concluída ou com prova de módulo abaixo de `NOTA_MINIMA` cujas aulas de conteúdo estejam todas naquela época ou em anteriores.

- [ ] **Step 1: Escrever os testes que falham**

```js
describe('épocas', () => {
  test('toda aula publicada da fase 3 está em uma época ou na trilha, nunca nas duas', () => {
    const fase3 = MODULOS.filter((m) => m.degrau === null || m.degrau >= 5).flatMap((m) => m.aulas.map((a) => a.id)).filter((id) => aulaPorId[id]);
    const emEpocas = EPOCAS.flatMap((e) => aulasDaEpoca(e.id));
    const todas = [...emEpocas, ...trilhaParalela()];
    assert.equal(new Set(todas).size, todas.length);
    assert.deepEqual([...todas].sort(), [...fase3].sort());
  });
  test('EPOCA_DA_AULA só cita aulas e épocas que existem', () => {
    const ids = new Set(EPOCAS.map((e) => e.id));
    for (const [aula, v] of Object.entries(EPOCA_DA_AULA)) {
      assert.ok(aulaPorId[aula], aula);
      assert.ok(ids.has(v.epoca || v), `${aula}: ${v.epoca || v}`);
      for (const r of v.revisao || []) assert.ok(ids.has(r), `${aula}: ${r}`);
    }
  });
  test('aulas de um mesmo módulo mantêm a ordem do currículo na sequência global', () => {
    const seq = [...EPOCAS.flatMap((e) => aulasDaEpoca(e.id)), ...trilhaParalela()];
    const pos = Object.fromEntries(seq.map((id, i) => [id, i]));
    for (const m of MODULOS) {
      const p = m.aulas.map((a) => pos[a.id]).filter((x) => x !== undefined);
      assert.deepEqual(p, [...p].sort((a, b) => a - b), m.id);
    }
  });
  test('a avaliação do módulo vem depois de todas as aulas de conteúdo dele', () => {
    const seq = [...EPOCAS.flatMap((e) => aulasDaEpoca(e.id)), ...trilhaParalela()];
    assert.ok(seq.indexOf('h2-5') > Math.max(...['h2-1', 'h2-2', 'h2-3', 'h2-4'].map((id) => seq.indexOf(id))));
  });
  test('Grécia: aulas históricas e pontes da trilha paralela', () => {
    const g = aulasDaEpoca('grecia');
    for (const id of ['h2-1', 'm5-1', 'ed2-1', 'as2-1', 'bi2-1', 'lf2-1']) assert.ok(g.includes(id), id);
    assert.equal(epocaDaAula('ma1-1'), null);
    assert.ok(trilhaParalela().includes('ma1-1'));
  });
  test('nenhuma disciplina paralela herda época: só as aulas listadas entram', () => {
    assert.ok(trilhaParalela().includes('qu1-1'));
    assert.ok(trilhaParalela().includes('ma4-3'));
  });
  test('época atual é a primeira com aula pendente; concluídas fora de ordem não travam', () => {
    const feitas = Object.fromEntries(aulasDaEpoca('egito-mesopotamia').map((id) => [id, { concluida: true, fim: 1 }]));
    const e = epocaAtual(estadoCom({ aulas: feitas, provasAprovadas: true }));
    assert.equal(e.id, 'grecia');
  });
  test('com todas as épocas concluídas, a próxima atividade vem da trilha paralela', () => {
    const feitas = Object.fromEntries(EPOCAS.flatMap((e) => aulasDaEpoca(e.id)).map((id) => [id, { concluida: true, fim: 1 }]));
    const est = estadoCom({ aulas: feitas, provasAprovadas: true });
    assert.equal(epocaAtual(est), null);
    assert.ok(proximaParalela(est));
  });
});
```

`estadoCom` é um auxiliar local do bloco: parte do estado inicial que os outros testes do arquivo já usam, marca os degraus 0 a 4 como concluídos, aplica `aulas` e, com `provasAprovadas`, grava nota 100 em todas as avaliações de `AVALIACOES`. Use o formato de aula concluída e de nota que `aulaConcluida` e `melhorNota` leem em `core.js`; ajuste o literal `{ concluida: true, fim: 1 }` a ele.

- [ ] **Step 2: Rodar e ver falhar**

Run: `node --test app/tests/core.test.mjs`
Expected: FAIL nos testes de `épocas` (módulo `epocas.js` não existe).

- [ ] **Step 3: Criar `app/data/epocas.js`** com as exportações do bloco Interfaces e as oito regras acima. Nesta tarefa `EPOCA_DA_AULA` traz só a semente necessária aos testes (Egito e Mesopotâmia e Grécia, a partir dos integradores `grecia` e `egito-mesopotamia` de `integradores.js`, conferindo cada título). `obras` de cada época fica `[]`, exceto Grécia, com os livros da trilha já ligados pelo integrador: `platao-apologia`, `platao-republica`, `jaeger-paideia`, `aristoteles-metafisica`.

- [ ] **Step 4: Rodar e ver passar**

Run: `node --test app/tests/core.test.mjs`
Expected: PASS em todo o arquivo (os testes antigos continuam passando).

- [ ] **Step 5: Commit** (só com o sim do responsável)

```bash
git add app/data/epocas.js app/tests/core.test.mjs
git commit -m "feat: épocas e trilha paralela como dados da fase 3"
```

### Task 2: Classificar as aulas da fase 3

**Files:**
- Modify: `app/data/epocas.js` (`EPOCA_DA_AULA`)
- Create: `docs/superpowers/specs/2026-11-16-aulas-duvidosas.md`
- Test: `app/tests/core.test.mjs`

**Interfaces:**
- Consumes: Task 1.
- Produces: `EPOCA_DA_AULA` completo.

- [ ] **Step 1: Escrever o teste que falha**

```js
test('toda disciplina histórica tem ao menos uma aula com época declarada', () => {
  const historicas = DISCIPLINAS.filter((d) => !PARALELAS.includes(d.id));
  for (const d of historicas) {
    const aulas = MODULOS.filter((m) => m.disciplina === d.id).flatMap((m) => m.aulas.map((a) => a.id));
    assert.ok(aulas.some((id) => EPOCA_DA_AULA[id]), d.id);
  }
});
test('cada disciplina paralela tem as pontes do módulo II distribuídas em épocas', () => {
  for (const d of PARALELAS) {
    const m2 = MODULOS.filter((m) => m.disciplina === d)[1];
    assert.ok(m2.aulas.some((a) => EPOCA_DA_AULA[a.id]), d);
  }
});
```

- [ ] **Step 2: Rodar e ver falhar** — `node --test app/tests/core.test.mjs`, FAIL nos dois testes novos.

- [ ] **Step 3: Classificar.** Para cada aula publicada da fase 3, ler o título e os campos `contexto` e `aprendera` no arquivo `app/data/aulas/<módulo>.js` e decidir:
  - época clara: entra em `EPOCA_DA_AULA`;
  - atravessa épocas: primeira época coberta, com `revisao` nas seguintes;
  - colocada fora da data do autor por aproveitamento: `{ epoca, motivo }` com uma linha;
  - sem época: não listar (a regra 4 ou 5 da Task 1 decide);
  - dúvida real: não listar e registrar em `2026-11-16-aulas-duvidosas.md` com id, título e as duas opções.

  Ordem de trabalho: escada (degraus 5 a 13), História, depois as demais históricas, por fim os módulos II das paralelas. Aulas sobre o Brasil vão para `brasil`.

- [ ] **Step 4: Rodar e ver passar** — todos os testes de `épocas`, incluindo os da Task 1.

- [ ] **Step 5: Conferir a distribuição**

Run: `node -e "import('./app/data/epocas.js').then(m=>{for(const e of m.EPOCAS)console.log(e.id,m.aulasDaEpoca(e.id).length);console.log('paralela',m.trilhaParalela().length)})"`
Expected: nenhuma época com zero aulas; a soma é o total de aulas publicadas da fase 3.

- [ ] **Step 6: Commit** (só com o sim do responsável)

```bash
git add app/data/epocas.js app/tests/core.test.mjs docs/superpowers/specs/2026-11-16-aulas-duvidosas.md
git commit -m "feat: classificação das aulas da fase 3 por época"
```

### Task 3: Telas

**Files:**
- Create: `app/views/epocas.js`
- Modify: `app/views/grade.js` (fase 3 de `linhasGrade`, texto de `gradeHTML`), `app/views/estudar.js` (ramo da fase 3), `app/views/curso.js` (linha de época na página da aula), `app/app.js` (rotas `epocas` e `epoca-`, `SECAO`, `INDICE`), `app/index.html` (estilos, se as classes existentes não bastarem)
- Test: `app/tests/core.test.mjs`

**Interfaces:**
- Consumes: Task 1 e 2.
- Produces: `epocas(ctx)` e `epoca(ctx, id)` em `views/epocas.js`; `linhasGrade(estado)` devolve, na fase 3, até duas linhas: `{ disciplina: 'Época: <título>', href: 'epoca-<id>', etapa: '<feitas> de <total> aulas', acao, proximo, minutos, bloqueio: [] }` e `{ disciplina: 'Trilha paralela', href: 'epocas', ... }`, com `minutos` segundo `PARTES_SEMANA`.

- [ ] **Step 1: Escrever os testes que falham**

```js
test('na fase 3 a grade tem a época atual e a trilha paralela, e a próxima atividade vem da época', () => {
  const est = estadoCom({ aulas: {} });
  const linhas = linhasGrade(est);
  assert.equal(linhas.length, 2);
  assert.match(linhas[0].disciplina, /^Época: /);
  assert.equal(linhas[1].disciplina, 'Trilha paralela');
  assert.equal(proximaAtividade(est).href, `aula-${aulasDaEpoca(epocaAtual(est).id)[0]}`);
});
test('prova de módulo pendente segura a época antes da seguinte', () => {
  const feitas = Object.fromEntries(aulasDaEpoca('egito-mesopotamia').map((id) => [id, { concluida: true, fim: 1 }]));
  const est = estadoCom({ aulas: feitas, provasAprovadas: false });
  assert.match(proximaAtividade(est).href, /^(aula|aval)-/);
});
test('página de época inexistente não quebra', () => {
  assert.match(epoca({ estado: estadoCom({ aulas: {} }) }, 'nao-existe'), /Época não encontrada/);
});
```

Os testes antigos de `linhasGrade` e `proximaAtividade` que afirmam matérias de semestre na fase 3 passam a afirmar as duas linhas acima; os das fases 1 e 2 não mudam.

- [ ] **Step 2: Rodar e ver falhar** — `node --test app/tests/core.test.mjs`.

- [ ] **Step 3: Implementar.**
  - `linhasGrade`: trocar só o ramo da fase 3. Sem época atual e sem trilha pendente, manter a linha "Formação multidisciplinar" já existente.
  - `gradeHTML`: o parágrafo da fase multidisciplinar passa a dizer que o estudo segue as épocas, com a trilha paralela ao lado, e liga para `#epocas` e `#periodos`.
  - `estudar.js`, fase 3: cabeçalho com "Agora"; seção da época atual (título, anos, apresentação, as 6 primeiras aulas pendentes, obras da época, link "ver a época inteira"); seção da trilha paralela (3 primeiras pendentes); faixa com todas as épocas e o progresso de cada uma; divisão das horas por `PARTES_SEMANA`.
  - `views/epocas.js`: `#epocas` lista as épocas com barra de progresso (`barra` de `ui.js`) e a trilha paralela; `#epoca-<id>` mostra apresentação, aulas em ordem com o estado de cada uma, revisões (`revisoesDaEpoca`) e obras.
  - `curso.js`: na página da aula, uma linha "Época: <título>" com link, ou "Trilha paralela", e o `motivo` quando houver.
  - `app.js`: `ROTAS.epocas`, `PREFIXOS['epoca-']`, `SECAO` apontando para `estudar`, e as épocas no `INDICE` da busca.

- [ ] **Step 4: Rodar e ver passar** — `node --test app/tests/core.test.mjs`, PASS em tudo.

- [ ] **Step 5: Conferir no navegador.** Rodar `node servir.mjs` em segundo plano e abrir `#estudar`, `#epocas`, `#epoca-grecia`, `#aula-h2-1`, `#aula-ma1-1`, `#epoca-nao-existe` e `#periodos`. Como a fase 3 só aparece com os degraus 0 a 4 concluídos, conferir também com um estado de teste nessa condição. Verificar em largura de celular. Parar o servidor.

- [ ] **Step 6: Commit** (só com o sim do responsável)

```bash
git add app/views/epocas.js app/views/grade.js app/views/estudar.js app/views/curso.js app/app.js app/index.html app/tests/core.test.mjs
git commit -m "feat: linha de estudo por época na fase 3"
```
