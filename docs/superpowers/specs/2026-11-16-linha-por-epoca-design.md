# Linha de estudo por época

Data: 16/11/2026. Estado: aguardando aprovação do responsável.

## Intenção

Hoje, depois da teologia e da iniciação, cada semestre junta um degrau de filosofia com duas ou três disciplinas escolhidas só por pré-requisito (`app/data/periodos.js`). O estudante vê, lado a lado, assuntos de épocas diferentes e precisa reconstruir o contexto histórico a cada disciplina.

O responsável quer que, depois de aprender a ler obras e da teologia, o estudo siga o tempo: em cada época, tudo o que ajuda a entender aquele momento vivido (filosofia, história, geografia, arte, música, literatura, direito, política e as obras da biblioteca) é estudado junto. As matérias que não dependem de época (matemática, química, biologia e as demais) correm ao lado, sem esperar. O objetivo é digerir melhor as aulas e terminar o curso mais depressa.

## Metas

- A Linha de estudo (`#estudar`) e o botão "Agora" seguem as épocas na fase 3.
- Cada época mostra, em ordem, as aulas de todas as disciplinas e as obras da biblioteca daquele momento.
- Uma trilha paralela, visível na mesma tela, traz as aulas sem época.
- Toda aula publicada da fase 3 aparece em exatamente um lugar: uma época ou a trilha paralela.

## Fora do escopo (projetos seguintes, nesta ordem)

1. Módulo dos estados do Brasil (26 estados e o Distrito Federal), que entrará na época "Brasil".
2. Contexto e aula própria para as obras da biblioteca. Medido em 16/11/2026: 5.255 obras, nenhuma com contexto escrito, 1.330 ligadas a uma aula, 1.085 com data. Escrever uma aula por obra é o maior trabalho dos três e pede recorte próprio.

## O que não pode acontecer

- Perder ou invalidar o progresso de quem já estuda. Os identificadores de aulas, módulos, provas e obras não mudam.
- Mudar as regras de aprovação (nota mínima, prova por módulo, conclusão de degrau).
- Colocar uma aula numa época por suposição. Aula sem época clara vai para a trilha paralela.
- Afirmar data ou período de uma obra que o catálogo não informa.

## Restrições

- Site estático, JavaScript puro, sem etapa de build. Dados em `app/data/`, telas em `app/views/`.
- Testes em `app/tests/core.test.mjs` (`node --test`). A publicação pelo GitHub Pages depende deles.
- Commit e publicação só com confirmação explícita do responsável.

## Caminhos considerados

- **A. Refazer os semestres por época.** Fiel ao desenho, mas um módulo se espalharia por várias épocas e a aprovação por prova de módulo deixaria de fazer sentido. Risco alto para o progresso existente. Descartado.
- **B. Linha de estudo por época.** Só a ordem sugerida muda; módulos, provas e progresso ficam como estão. **Escolhido pelo responsável.**
- **C. Só um bloco "no mesmo período" em cada aula.** O menor, mas a ordem de estudo não muda, que é o pedido. Descartado.

## Desenho

### Dados: `app/data/epocas.js` (novo)

Uma lista ordenada de épocas. Cada época tem `id`, `titulo`, `anos` (texto, por exemplo "séc. V a XV"), uma frase de apresentação e a lista ordenada das aulas que se estudam nela.

Decisão do responsável: o lugar de uma aula é **onde ela é mais bem aproveitada**, não necessariamente a data em que o autor viveu. A regra geral é o contexto histórico; a exceção é declarada na própria entrada, com uma linha de motivo (por exemplo, Aristóteles relido junto com a escolástica).

Proposta de épocas (decisão minha, a corrigir): Egito e Mesopotâmia; Grécia Antiga; Roma; Cristianismo primitivo e patrística; Europa medieval e Islã; Renascimento; Revolução Científica; Iluminismo e revoluções; Século XIX; Século XX; Mundo contemporâneo; Brasil. Elas reaproveitam os módulos integradores que já existem (`app/data/integradores.js`), que hoje ligam aulas a épocas e civilizações.

Divisão das 28 matérias, confirmada pelo responsável:

- **Trilha paralela (10)**: Matemática, Lógica formal, Estatística, Física, Química, Biologia, Astronomia, Ciências da Terra, Ciências Ambientais, Demografia. Seguem a própria sequência; só as aulas de história da matéria (módulo II) entram nas épocas, como pontes.
- **Linha histórica (18)**: Teologia, Filosofia, História, Geografia, História da Arte, Literatura, Música, Cultura, Linguística, Simbologia, Educação, Direito, Ciência Política, Economia, Sociologia, Antropologia, Psicologia, Relações Internacionais.

Decisão do responsável: a composição de cada época é **dinâmica**. Uma matéria aparece na época em que pesa e some quando deixa de pesar: a astronomia dos antigos (com a astrologia como fato histórico) está na Grécia e na Revolução Científica, não no mundo contemporâneo; a sociologia só aparece a partir do século XIX. Não há grade fixa de matérias repetida em todas as épocas, e época sem aula de uma matéria não é lacuna.

Aula que atravessa várias épocas (por exemplo, "Da Antiguidade à catedral gótica") fica na primeira época que cobre e reaparece como revisão, sem nova exigência, nas seguintes.

A classificação é **por aula, não por disciplina**. Qualquer disciplina entra na época quando a aula tem contexto daquele momento: na Grécia, por exemplo, entram também as aulas de linguística sobre os estudos gregos da linguagem e as de astronomia sobre o céu dos antigos (a astrologia aparece aí como fato histórico, dentro da história da astronomia; o curso não tem disciplina de astrologia). Nenhuma disciplina fica inteira na trilha paralela por definição.

A trilha paralela recebe só as aulas sem época: conceitos, método e conteúdo técnico (por exemplo, estequiometria, cálculo, tabelas de verdade). Fica em `epocas.js`, agrupada por disciplina.

Condição do responsável: isso vale "se não estragar o percurso". Uma aula só entra numa época se os pré-requisitos dela já tiverem sido estudados antes, em época anterior ou na trilha paralela. Quando a aula de época pede uma aula de método da mesma disciplina, a de método é adiantada para antes dela. Se o encaixe não for possível sem quebrar a sequência da disciplina, a aula fica na trilha paralela.

As obras não entram na época de forma automática. A conferência de 16/11/2026 mostrou que a ligação gerada entre obra e aula tem erros (um estudo sobre a moral de Kant na aula de Sócrates; "História do Império", do Brasil, na aula de Antiguidade) e que a data do catálogo é a da edição, não a do assunto. Nesta entrega, cada época mostra só as obras conferidas uma a uma, listadas em `epocas.js`; as demais continuam na mediateca, por disciplina. A conferência das 1.330 obras já ligadas a aulas pertence ao projeto das obras.

### Ordem geral

Decisão minha, a corrigir: as fases 1 (teologia) e 2 (iniciação: introdução à filosofia e lógica, 21 aulas) continuam como estão, porque ensinam a ler e a argumentar. As épocas e a trilha paralela substituem a ordem por semestre na fase 3. A página Semestres continua disponível como calendário por disciplina, sem alteração.

### Tela

Em `#estudar`, na fase 3:

```
Agora — Aula h4-1: Antiguidade (Grécia Antiga · 3 de 22)

Época atual: Grécia Antiga (séc. VIII a IV a.C.)        Trilha paralela
  1. História — ...                 concluída             Matemática I — aula 2
  2. Filosofia antiga — ...         agora                 Química I — aula 1
  3. História da Arte — ...                               Biologia I — aula 1
  Obras desta época (4)

Épocas: Egito ✓ · Grécia (3/22) · Roma · Cristianismo primitivo · ...
```

Cada época tem página própria (`#epoca-<id>`) com a lista completa, o progresso e as obras. Na página da aula, uma linha diz em que época ela está e liga para a página da época.

### Divisão do tempo

A semana alterna: a maior parte para a época atual, uma parte fixa para a trilha paralela, e a revisão. Proporção inicial, parâmetro declarado em `epocas.js`: 55% época, 30% paralela, 15% revisão.

### Testes

Um teste novo em `core.test.mjs`: toda aula publicada da fase 3 aparece em exatamente uma época ou grupo paralelo; nenhum id inexistente; nenhuma aula antes de um pré-requisito seu.

## Deixado para quem implementa

- A classificação das cerca de 700 aulas da fase 3, lendo o título e o campo `contexto` de cada uma. Em caso de dúvida, trilha paralela, e a lista de duvidosas vai ao responsável.
- Como `proximaAtividade` (`app/views/grade.js`) passa a escolher a próxima aula na fase 3.
- Se há bloqueio de aulas por semestre no código atual; se houver, a época não pode travar o que hoje está liberado.
- Onde encaixar os degraus de filosofia sem época (6, 12 e 13) e os de autor (10 e 11): proposta, 6 na trilha paralela, 10 e 11 em Brasil e Século XX, 12 e 13 ao final.
