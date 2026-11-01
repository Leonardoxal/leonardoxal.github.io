# Relatório das IAs que trabalharam no site

Cada IA acrescenta suas entradas ao fim deste arquivo, sem apagar as anteriores. O formato está em `PROMPT-CONTINUACAO.md`, na seção "Relatório de retorno".

## 2026-10-31 — Claude (sessão original): Lógica formal, Matemática, Música e Psicologia

- Commits e deploys: todos os deploys do workflow "Publicar site" terminaram com sucesso. O último foi `7db640e`, Psicologia V, na execução 41231394188.
- Testes: 45 pass / 0 fail, rodados após cada módulo.
- Módulos publicados nesta sessão:
  - Lógica formal: LF2, LF3, LF4 e LF5. A disciplina está concluída.
  - Matemática: percurso e MA1 a MA5. A disciplina está concluída.
  - Música: percurso e MU1 a MU5. A disciplina está concluída.
  - Psicologia: percurso e PS1 a PS5. A disciplina está concluída.
- Conferido no navegador: sim. Foram abertas, em cada módulo, as páginas `#mod-x`, `#aula-x-1` a `#aula-x-5` e `#disciplina-<id>`. Nenhuma ficou "em preparação" depois do último módulo, e não houve recursos com status ≥ 400.
- Fatos escritos de memória e não verificados: datas, números de leis e resoluções, anos de publicação e números de parágrafos de documentos. Os links ficaram `null`, exceto o do SciELO.
- Problemas e decisões:
  - Os testes exigem que o percurso e o módulo x1 entrem juntos.
  - O prereq de Psicologia evita `educacao`, porque Educação já depende de Psicologia.
- Pendentes: Química (prefixo `qu`) e Relações Internacionais (prefixo `ri`).

## 2026-10-31 — Claude (sessão original): Química completa

- Commits: percurso e QU1 a QU5, um commit por módulo, todos com deploy bem-sucedido.
- Testes: 45 pass / 0 fail após cada módulo.
- Arquivos: `app/data/aulas/qu1.js` a `qu5.js`; registros em `index.js`, `curriculo.js`, `arvore.js`, `disciplinas.js`, `avaliacoes.js` e `core.test.mjs`.
- Conferido no navegador: sim, em todas as páginas dos cinco módulos e na página da disciplina, sem "em preparação".
- Fatos escritos de memória e não verificados:
  - números de leis (9.787/1999, 12.305/2010, 14.026/2020);
  - o telefone do Disque-Intoxicação (0800 722 6001);
  - datas de descobertas.
- Decisões:
  - prereq de Química = matemática e física, porque biologia, ciências ambientais e ciências da Terra dependem de Química;
  - nó da árvore com os livros `aristoteles-geracao` e `tomas-opusculos-naturais`.
- Pendente: Relações Internacionais (prefixo `ri`).

## 2026-10-31 — Claude (sessão original): Relações Internacionais completa; todas as disciplinas concluídas

- Commits: percurso e RI1 a RI5, um commit por módulo, todos com deploy bem-sucedido.
- Testes: 45 pass / 0 fail após cada módulo.
- Arquivos:
  - `app/data/aulas/ri1.js` a `ri5.js`;
  - registros em `index.js`, `curriculo.js`, `arvore.js`, `disciplinas.js`, `avaliacoes.js` e `core.test.mjs`;
  - `DISCIPLINAS_PENDENTES` agora vale `[]`.
- Conferido no navegador: sim, nas páginas dos cinco módulos, na página da disciplina e na árvore, sem "em preparação" e sem recursos com erro. Nenhum nó `P(` restante em `arvore.js`.
- Fatos escritos de memória e não verificados:
  - números de leis (9.474/1997, 13.445/2017, 12.527/2011, EC 45/2004);
  - artigos da Constituição (4º, 5º § 3º, 21 XXIII a, 49 I);
  - datas de tratados e eventos (Petrópolis 1903, Beagle 1984, Acordo Brasil–Santa Sé 2008/2010, Minustah 2004–2017);
  - números de parágrafos de documentos (CIC 2241 e 2309, FT 258, CV 67, PT 140–141).
- Decisões:
  - prereq de RI = ciência política e geografia;
  - título da obra de Vitória registrado como "Relectiones sobre os índios e sobre o direito de guerra".
- Pendente: nada no plano de disciplinas. Aguardar as novas fontes e datas do usuário.

## 2026-10-31 — Claude (sessão original): fase 3, períodos letivos

**Feito:**
- `app/data/periodos.js`:
  - distribui as 25 disciplinas em 9 semestres, respeitando os pré-requisitos (disciplinas e degraus de filosofia);
  - a filosofia avança um degrau por semestre (do 5 ao 13);
  - cada semestre tem 16 semanas de estudo e 2 de fechamento: intermediária na semana 8, projeto na 16, final na 17 e recuperação na 18;
  - calcula a carga semana a semana;
  - registra exceções;
  - dá a situação de cada matéria (aprovada, em curso ou recuperação), sem compensação entre provas ou entre matérias.
- `app/views/periodos.js`: lista de semestres e calendário semanal de cada um.
- A grade da fase 3 passou a mostrar só o semestre atual, em vez das 25 disciplinas.
- Quem já tinha marcado todas as etapas de uma disciplina, ou concluído o degrau de filosofia, continua com a matéria aprovada.

**Erro encontrado pelo teste e corrigido:** o módulo m16 não tem `prova-m16`; a avaliação dele é a `final`. A prova de cada módulo agora é buscada em `AVALIACOES`.

**Testes:** 46 de 46 passaram. As rotas `#periodos` e `#periodo-1`, `-5` e `-9` foram conferidas no navegador, sem erros no console e sem rolagem horizontal em 375 px. O deploy deu certo.

**Estimativas declaradas, não medidas** (estão em `CARGA`): 15 min de revisão por aula, 90 min por prova, 2 h por semana de leitura do degrau de filosofia e 6 h de projeto.

**Pendente:** as fases 4 a 10 do `PLANO_EXECUCAO.md`, e o resto da fase 2 (m0 e o degrau ao lado do número do módulo).

## 2026-10-31 — Claude (sessão original): fase 4, módulos integradores

**Feito:**
- `app/data/integradores.js` tem 27 módulos:
  - épocas e civilizações;
  - Portugal e Brasil;
  - Agostinho e Tomás;
  - temas: verdade, justiça, liberdade, Estado, conhecimento científico, civilização e religiões.
- São 306 ligações a aulas e livros que já existiam, cada uma com um tipo: pré-requisito, contexto, paralelo ou aprofundamento. Só os pré-requisitos bloqueiam a síntese final, que pede juízo próprio e tem critérios comuns.
- Visões novas: `#integradores` e `#integrador-<id>`.
- A página de cada aula mostra os integradores em que ela aparece.
- O cabeçalho do Curso foi atualizado (o número de módulos é calculado) e os módulos de disciplina aparecem como "Fase 3".
- Os semestres (fase 3) ficaram em aberto, a pedido do usuário.

**Sem invenção:** cinco temas com pouca aula no acervo foram marcados como "cobertura limitada", em vez de receberem ligações forçadas.

**Testes:** 47 de 47 passaram. O teste novo confere que toda aula ligada existe e tem conteúdo, que todo livro existe, que cada relação é válida e que todo módulo integra pelo menos dois módulos. O navegador não mostrou erros nem rolagem horizontal em 375 px.

**Pendente:** as fases 5 a 10, a revisão dos semestres e o resto da fase 2 (m0).
