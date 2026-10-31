# Plano de execução — reestruturação pedagógica da Academia da Verdade

Base: ordem geral de 31/10/2026 e diagnóstico de `AUDITORIA_PEDAGOGICA.md`. O andamento de cada fase está em `STATUS_EXECUCAO.md`, e os testes executados estão em `RELATORIO_TESTES.md`.

## Princípios que orientam todas as fases

1. **Três estruturas combinadas, nenhuma sozinha:**
   - **Vertical:** cada disciplina tem sua própria sequência (percurso de 11 etapas e 5 módulos; a filosofia segue a escada de degraus).
   - **Horizontal:** os períodos letivos (semestres) reúnem disciplinas que podem ser estudadas juntas, com carga semanal calculada.
   - **Integradora:** os módulos integradores aproximam conteúdos que compartilham época, país, autor ou problema. Eles **não** substituem aulas nem avaliações individuais.
2. **Finalidade:** formar alguém capaz de compreender, argumentar e julgar por conta própria, não alguém que apenas terminou uma lista de leituras. Por isso:
   - toda unidade termina com exercício de argumentação ou juízo (discursiva com critérios);
   - as avaliações indicam os conceitos a revisar;
   - os projetos pedem conclusão própria e fundamentada.
3. **Preservação:**
   - os 607 livros e seus ids ficam intactos;
   - ids de aulas e módulos nunca mudam;
   - o estado do estudante só ganha campos novos, tolerados por `normalizarEstado`; nada é apagado;
   - a identidade visual católica gótica é mantida.
4. **Honestidade:**
   - nada de inventar obras, links, metadados ou resultados de teste;
   - o que não puder ser verificado é marcado como tal.

## As três fases da formação

| Fase | Conteúdo | Regra de passagem |
|---|---|---|
| 1. Teologia católica (exclusiva) | Degraus 0 a 2: método de estudo, fundamentos, Escritura, dogmática, sacramentos, moral, espiritualidade, escatologia, patrística, escolástica teológica, doutrina social, história da Igreja | Concluir todos os módulos da fase, com 80% e a avaliação de síntese |
| 2. Iniciação intelectual e filosófica | Degraus 3 e 4 (introdução à filosofia e lógica), mais o módulo de iniciação intelectual: leitura de textos complexos, fichamento, resumo crítico, fontes, citação e panorama da história da filosofia | Concluir os degraus 3 e 4 |
| 3. Formação multidisciplinar | Disciplinas simultâneas, cada uma com seus pré-requisitos; a filosofia continua pela escada (degrau 5 em diante) | Por disciplina e por módulo |

Regras gerais das fases:
- Conteúdo futuro continua **consultável**. A fase bloqueia apenas **concluir** e registrar progresso.
- Não há "compensação" entre disciplinas: cada uma exige 80% nas suas próprias avaliações.

## Fases de execução

1. **Auditoria e integridade:** script `scripts/auditoria.mjs` e os quatro documentos.
2. **Correções pedagógicas:**
   - expandir a fase teológica com novos módulos (prefixo `tg`), cobrindo as lacunas da auditoria;
   - ampliar o módulo de método m0;
   - criar a fase 2 no código (`core.js`), liberando as disciplinas só após os degraus 3 e 4;
   - exibir o degrau junto do número do módulo;
   - testes.
3. **Períodos letivos:**
   - `data/periodos.js` calcula a carga real (aulas, leitura, exercícios, revisões, trabalhos e avaliações) e monta semestres de 16 semanas mais 2 de fechamento;
   - modelo de 3 disciplinas simultâneas, até 4;
   - avaliação intermediária na semana 8 e final na semana 17;
   - recuperação na semana 18;
   - visão de calendário semanal com carga estimada.
   - Exceções de ritmo ficam registradas.
4. **Módulos integradores:** `data/integradores.js`.
   - Módulos por época, civilização, autor, problema, movimento, acontecimento e tema, ligando aulas e livros reais.
   - Cada relação é classificada como pré-requisito, contexto, paralelo ou aprofundamento.
   - Só o pré-requisito bloqueia progresso.
5. **Biblioteca e mediateca:** `data/mediateca.js`.
   - As 27 categorias de mídia.
   - O registro completo de cada obra (os campos da ordem geral).
   - Deduplicação por chave normalizada, com várias fontes por registro.
   - Visão `#mediateca` com filtros.
   - Os 607 livros continuam na biblioteca e aparecem também na busca unificada.
6. **Expansão bibliográfica:**
   - extração das duas fontes indicadas (contraosacademicos.com.br/lista e a compilação de livros mencionados por Olavo de Carvalho);
   - inclusão de acervos institucionais de acesso legal;
   - fontes indisponíveis ficam registradas.
7. **Simbologia e semiótica:** a disciplina independente já existe (`simbologia`, 12 módulos de trilha própria). Revisar a separação entre semiótica, simbologia, simbolismo, iconografia, iconologia e simbolismo cristão, e os autores exigidos (Peirce, Saussure, Eco, Cassirer, Panofsky, Mário Ferreira dos Santos).
8. **Integração:**
   - relações aula ↔ livro ↔ mídia ↔ conceito;
   - registro de análise de filmes e de outras mídias no caderno;
   - compositor → composições → gravações;
   - "próxima atividade" respeitando calendário e pré-requisitos;
   - busca global estendida a todas as entidades.
9. **Testes funcionais:**
   - testes automatizados em `app/tests/core.test.mjs`;
   - roteiro manual no navegador, registrado em `RELATORIO_TESTES.md`.
10. **Documentação:**
    - atualizar estes documentos, `PROMPT-CONTINUACAO.md` e `RELATORIO-IA.md`;
    - relatório final com números reais.

## Decisões tomadas sem consulta (registradas para revisão)

- **Iniciação intelectual:**
  - a fase 2 será formada pelos degraus 3 e 4 existentes mais um módulo novo;
  - a filosofia antiga (degrau 5) e os seguintes passam a correr em paralelo com as disciplinas;
  - motivo: a ordem geral diz que não é preciso terminar toda a filosofia.
- **Estudantes que já concluíram a fase teológica antiga:**
  - os módulos teológicos novos ficam como pendências do degrau correspondente;
  - o progresso registrado não é apagado nem revertido;
  - os registros de "degrau concluído" já salvos continuam valendo, para não punir quem avançou antes da mudança.
