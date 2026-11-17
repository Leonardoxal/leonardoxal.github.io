# Estado dos dois projetos

Auditoria de 12/11/2026 sobre o código real dos dois repositórios, o banco em produção (só esquema, contagens e alertas; nenhum dado de criança foi lido) e o site Jr. aberto num navegador. Este arquivo cobre os dois projetos e vale como ponto de partida de qualquer sessão nova.

Arquivos irmãos: `ROADMAP.md` (o que fazer e em que ordem), `PEDAGOGICAL_STANDARDS.md` (o padrão que toda habilidade, atividade e avaliação deve cumprir) e `ARCHITECTURE.md` (modelo comum e contratos de dados). O histórico detalhado da Academia adulta continua em `STATUS_EXECUCAO.md`, `PLANO_EXECUCAO.md`, `AUDITORIA_PEDAGOGICA.md` e `FUNDAMENTOS_PEDAGOGICOS.md`; o do Jr., em `RELATORIOS_ETAPAS.md` no repositório dele. Não duplique o conteúdo desses arquivos aqui.

Classificação usada: **funcional** (existe e foi verificado), **incompleto**, **planejado**, **ausente**, **duplicado**, **obsoleto**, **não verificado**.

## Como conferir de novo

| O quê | Comando | Resultado em 12/11/2026 |
|---|---|---|
| Testes da Academia | `node --test app/tests/core.test.mjs` | 64 passam, 0 falham |
| Auditoria de dados da Academia | `node scripts/auditoria.mjs` | 12 apontamentos, todos já documentados como intencionais |
| Testes do Jr. | `node --test app/tests/infantil.test.mjs` | 43 passam, 0 falham (40 antes do mapa de habilidades) |
| Publicação | GitHub Actions, "Publicar site" | últimas execuções dos dois repositórios com sucesso |

## Academia da Verdade (adultos)

| Requisito | Estado | Evidência | Problema | Prioridade |
|---|---|---|---|---|
| Percurso que começa pela teologia, com fases e pré-requisitos | funcional | `app/core.js` (`FASE_TEOLOGICA`, `FASE_INICIACAO`, `degrauConcluivel`); testes | — | — |
| Currículo amplo com sequência | funcional na estrutura | 155 módulos, 841 aulas completas, 25 disciplinas, 9 semestres (`app/data/`) | O conteúdo das aulas foi escrito por IA; datas, números de leis e parágrafos de documentos estão registrados como **não verificados** em `RELATORIO-IA.md` | alta |
| Biblioteca e mediateca | incompleto; catálogo unificado em 12/11/2026 | `app/data/unificacoes.js` (gerado por `scripts/unificar-obras.mjs`), `app/views/mediateca.js`, `app/views/edicoes.js`; testes | A aba Biblioteca abre o catálogo único, no desenho da Biblioteca; a sequência dos 607 livros fica em `#trilha`. 5.547 registros viraram 5.255 obras: 292 registros (outra grafia, tradução ou volume) foram para dentro de 205 obras, e a página da obra mostra edições, traduções e volumes. Limites: as listas de origem quase não trazem editora nem tradutor (só 4 traduções identificadas); edição recomendada só existe para os livros do acervo; 111 grupos de mesmo título continuam para revisão humana; 27 registros com subtítulo diferente não foram unidos; dos importados, nenhum tem contexto, nível ou justificativa; 946 registros sem autor | alta |
| Obras ligadas ao currículo | incompleto; regra corrigida em 12/11/2026 | `obraPronta`, `obrasObrigatorias` e `obrasEmPreparacao` em `mediateca.js`; `app/data/fichas-obras.js`; testes | Decisão do responsável: toda obra terá a sua aula e o seu contexto. Enquanto não tem, fica em preparação e não bloqueia. **0 de 4.940 obras prontas.** Antes da correção, concluir o degrau 1 exigia 161 obras sem ficha, e o módulo `lt2`, 1.098. Parte das atribuições automáticas está errada: o degrau 0 (método de estudo) recebeu Russell, Santayana e o *Dicionário Filosófico* de Voltaire | alta |
| Comprovação de leitura | incompleto | `MIN_ANALISE_OBRA = 150` em `core.js`; `views/mediateca.js` | A obra é dada por concluída com uma análise de 150 caracteres. O critério mede tamanho, não compreensão | alta |
| Avaliação objetiva | funcional | 149 avaliações, mínimo de 80%, conceitos a revisar | — | — |
| Avaliação discursiva e produção intelectual | incompleto; melhorado em 16/11/2026 | `views/quiz.js`, `app/correcao-ia.js` | Cada discursiva guarda em separado a resposta, a sugestão colada da IA, os critérios conferidos e a confirmação, e mostra a situação. A conclusão da aula ainda exige só a resposta escrita (decisão pendente: exigir confirmação?). A análise de obra e a comprovação de leitura têm a correção opcional, mas a conclusão ainda depende só do mínimo de caracteres | alta |
| Texto para IA externa com rubrica | **funcional** nas discursivas, na comprovação de leitura dos livros e na análise de obra (16/11/2026) | `textoCorrecaoIA` em `app/correcao-ia.js`; bloco `views/correcao.js` (chaves `livro-<id>-correcao` e `livro-<id>-analise-correcao`); teste; conferido no navegador | Sem nome nem dados da conta. Confiabilidade da IA nunca medida | média |
| Registro pedagógico por habilidade | ausente | o estado guarda aulas, notas e livros, não habilidades | Não há como dizer "argumenta bem" ou "lê texto difícil", só "concluiu" | média |
| Nivelamento para o adulto que entra direto | ausente | — | Previsto na especificação, sem código | média |
| Materiais pessoais privados | funcional | tabela `progresso` com regra por usuário (`supabase.sql`); conferido no banco | — | — |
| Sincronização | funcional | 5 linhas em `progresso`, 1 conta | Só o autor usa; nunca foi testado com outra pessoa | baixa |
| Publicação | funcional, com resto obsoleto | `.github/workflows/pages.yml` | O fluxo ainda mandava rodar `app/tests/infantil.test.mjs`, que saiu deste repositório (corrigido nesta entrega) | baixa |

## Academia da Verdade Jr. (2 a 15 anos)

| Requisito | Estado | Evidência | Problema | Prioridade |
|---|---|---|---|---|
| Seis estágios com guia para os pais | funcional | `app/infantil/etapas.js` | É orientação em texto, não currículo | — |
| Aulas com material da criança e do responsável | funcional, mas estreito | 17 aulas em PDF, todas para duas crianças (uma de 2 anos e um bebê) | Não há nenhuma aula de 4 a 15 anos. As aulas vêm de um projeto privado, fora deste repositório | alta |
| Atividade com disciplina, habilidade, objetivo, pré-requisito, critérios | incompleto | o manual em PDF traz objetivos por disciplina; `aulas.js` só tem título, tema, virtude e resumo | Os critérios existem no PDF, mas não como dado: o sistema não sabe que habilidade cada aula trabalha | alta |
| Mapa de habilidades com pré-requisitos e critério de domínio | **funcional para uma trilha** (nesta entrega) | `app/infantil/habilidades.js`; 3 testes novos; conferido no navegador | Só "Número e quantidade", 2 a 6 anos. As demais áreas estão ausentes de propósito, até esta ser usada | alta |
| Avaliação por IA sem custo | funcional | `app/infantil/prompt.js`: texto anônimo ("Aluno A") com critérios, histórico, grau de confiança e proibição de diagnóstico | A resposta da IA volta como texto livre e é redigitada à mão; a confiabilidade nunca foi medida | média |
| Registro distinguindo observação, sugestão da IA e resultado confirmado | funcional | `app/infantil/registro.js` (`ORIGENS`), tabela `aci_registro` | — | — |
| Reavaliação e reforço | funcional | `proximosPassos`, `textoReforcoIA` | — | — |
| Domínio confirmado antes de avançar | **funcional** (nesta entrega) | `estadoDaHabilidade`: dois dias diferentes ou nova verificação | Vale só para habilidades do mapa | — |
| Registro do responsável (independência, ajuda, cansaço) | funcional | `OBSERVACOES` em `prompt.js` | As marcações entram no texto para a IA, mas não ficam guardadas de forma estruturada | média |
| Jogos com finalidade pedagógica | funcional | 15 jogos com área, idade e habilidades; nível por domínio; sem ranking; limite de tela (`jogos.js`, `historico.js`) | As habilidades dos jogos são texto solto; 8 das 10 habilidades do mapa já apontam para o jogo que as treina | média |
| Biblioteca e mídia infantil | funcional | 417 livros, 68 fichas de filmes e séries | Mesma dúvida da Academia: volume antes de profundidade. Não auditado obra a obra (**não verificado**) | média |
| Privacidade no banco | funcional | regras por família em todas as tabelas `aci_*`; pasta de tarefas privada; conferido no banco | Alertas menores: proteção contra senha vazada desligada | média |
| Materiais públicos das aulas | **incompleto** | PDFs em `app/infantil/aulas/` | Dois ajustes pendentes no gerador privado (ver pendências) | **crítica** |
| Uso real | **não iniciado** | no banco: 0 contas na família, 0 filhos, 0 aulas, 0 registros, 0 tarefas | O ciclo de aprendizagem nunca rodou com dados reais na nuvem. O que existir está só num aparelho, sem cópia | **crítica** |
| Modelo de acesso | incompleto | `supabase-infantil.sql`: um código, uma família, tabelas sem coluna de família | Serve a uma família. Uma segunda família veria os dados da primeira. Bloqueia qualquer uso institucional | alta (antes de abrir a terceiros) |

## Prompt mestre de 16/11/2026: estado de cada parte

Conferido em 16/11/2026 com `node --test app/tests/core.test.mjs` (82/82), `node scripts/auditoria.mjs` e `node scripts/auditoria-profundidade.mjs`, e no navegador (1280 e 390 px). "Funcional" = implementado, testado e conferido; "pendente" = não feito.

| Parte | Estado | O que existe | O que falta |
|---|---|---|---|
| 0, II Método e preservação | funcional | ids, rotas, progresso e registros preservados; nenhuma rota mudou | — |
| III Auditoria | funcional | `scripts/auditoria.mjs` (dados) e `scripts/auditoria-profundidade.mjs` (18 itens, 25 campos, obras) | rodar a cada entrega |
| IV, V Identidade e santos | funcional (anterior) | sistema visual gótico; santo por aba | — |
| VI Entrada e navegação | funcional | "Continuar estudando", "O que ainda não domino", revisões, seis itens + "Mais", modos guiado e livre | plano semanal e histórico no painel já existem; nada pendente |
| VII Sala de aula | funcional | sumário lateral/recolhível, notas ao lado, modo foco, fonte, tema, retomar leitura | — |
| VIII, IX Interdisciplinaridade | funcional em parte | ligações na aula; 248 ligações com filtros (tipo, área, relação, estado, busca) e mapa visual em `#integradores` | só 183 de 849 aulas estão em algum integrador; filtros por obra e conceito como dado (hoje só por busca); linha do tempo interativa |
| X Programas internacionais | registrado | `PEDAGOGICAL_STANDARDS.md` | aplicar às aulas (depende de XI) |
| XI Profundidade | **pendente (conteúdo)** | medida automática em cada aula; pilotos `m1-1` e `m1-2` expandidos (a segunda no ramo de trabalho, não publicada; inspeção estrutural, sem teste Node/navegador) | demais aulas pendentes; recalcular total com `scripts/auditoria-profundidade.mjs` antes de informar percentuais |
| XII Teologia | **pendente (conteúdo)** | cobertura dos 25 campos medida | campos sem aula: Angelologia, Ascética e Mística, História da Teologia; com uma só: Trinitária, Mariologia, Antropologia Teológica, Justificação, Espiritualidade, Doutrina Social |
| XIII Obras | funcional em parte | 4 estados de verificação em toda obra (607 confirmadas, 4.258 prováveis, 387 provisórias, 3 em revisão); só obra pronta é exigida | **0 de 5.255 fichas completas**; revisar as 4.258 prováveis |
| XIV Consumo das obras | funcional em parte | comprovação de leitura com critérios e correção por IA | roteiro "antes, durante, depois" por obra depende das fichas (XIII) |
| XV Avaliação e domínio | funcional | 7 níveis de evidência por aula (acessada → domínio confirmado em nova prova 30 dias depois); discursiva sem autoavaliação como única evidência | rubricas por disciplina além dos critérios de cada questão |
| XVI Correção por IA sem custo | funcional | texto com rubrica; resposta, sugestão, conferência e confirmação separadas | medir a confiabilidade da IA |
| XVII Retenção | funcional | cartões espaçados; testes de retenção vencidos no painel | — |
| XVIII Ponto Brasil | não auditado nesta entrega | — | auditar por disciplina |
| XX Testes | funcional | 82 testes; navegação e telas conferidas no navegador | leitor de tela não testado |

**Por que XI a XIV ficam pendentes:** são redação acadêmica com fonte conferida (aulas de 1.200 palavras ou mais, 25 campos teológicos, milhares de fichas). O próprio prompt proíbe inventar e declarar conclusão parcial como total. A auditoria de profundidade dá a lista exata, aula por aula (`--aulas`), para o trabalho seguir em partes verificáveis: começar pela fase teológica (m1, m2, m2b, tg1 a tg8, 52 aulas) e pelos campos sem aula.

## Os dez problemas mais graves

Ordenados pelo dano à formação. P = pedagógico, T = técnico, I = institucional.

1. **4.940 obras sem aula nem contexto próprios (P, I).** A exigência automática foi retirada em 12/11/2026 (só obra pronta é obrigatória), mas o trabalho de escrever e conferir as fichas, e de corrigir atribuições erradas, está todo por fazer.
2. **O Jr. nunca foi usado de ponta a ponta (P, I).** Zero registros na nuvem. Tudo o que se construiu sobre avaliação está sem prova de uso.
3. **Materiais públicos das aulas com dois ajustes pendentes no gerador (I).** Regra geral em `PEDAGOGICAL_STANDARDS.md`.
4. **Produção escrita do adulto sem leitor (P).** Autoavaliação por caixas de marcar e mínimo de 150 caracteres.
5. **Conteúdo de aulas não verificado (P, I).** Uma instituição chamada Academia da Verdade publica 841 aulas com fatos que o próprio relatório marca como não conferidos.
6. **Currículo do Jr. sem dados de habilidade (P).** Fora da trilha nova, não há sequência; de 4 a 15 anos não há aulas.
7. **Catálogo importado sem profundidade (P).** Sem contexto, nível nem justificativa; quase sem dados de editora e tradutor, de modo que "edições disponíveis" hoje são só o que as listas de origem citam.
8. **Modelo de uma só família (T, I).** Impede crescer sem refazer o acesso.
9. **Dois vocabulários pedagógicos (T).** A Academia fala em aula, módulo e degrau; o Jr., em habilidade e situação. Não há contrato comum (`ARCHITECTURE.md` propõe um).
10. **Documentação espalhada (T).** Onze relatórios na raiz deste repositório, parte deles histórica. Este arquivo passa a ser a entrada única.

## Pendências que dependem do responsável

- Conferir, degrau por degrau, as fichas de obra à medida que forem escritas (começando pelos degraus 0 e 1).
- Corrigir no projeto privado que gera os PDFs os dois pontos informados na conversa de 12/11/2026 e publicar de novo as aulas.
- Entrar na família no Jr. com a conta e o código, cadastrar as crianças e usar a trilha por duas semanas.
- Ligar no painel do Supabase a proteção contra senhas vazadas (Authentication → Passwords).
- Aprovar ou recusar os dois pedidos de mudança abertos em 12/11/2026 (um em cada repositório).

## Registro de entregas

| Data | Entrega | Onde | Testes |
|---|---|---|---|
| 16/11/2026 | Expansão da aula `m1-3` — Bíblia, Tradição e Magistério; explicação 1.610 palavras, contexto 164, exemplos 143, aplicação 131; duas objeções e três referências; preservados ID, exercícios e estrutura das demais aulas. Conferência editorial detalhada das fontes ainda pendente. | ramo `academia/revisao-teologica-20261116`, commit `b08c101` (**não publicado**) | Arquivo gravado relido, IDs e mínimos de extensão conferidos; **testes Node, auditorias e navegador 1280/390 não executados** |
| 16/11/2026 | Expansão da aula `m1-2` (Fé, Revelação e razão): explicação de aproximadamente 576 para 1.764 palavras, contexto 164, exemplos 149, aplicação 139; preservados os objetivos, exercícios, objeções, referências, ID e demais aulas. Fontes primárias indicadas: `Dei Verbum` 2–6, 12 e CIC 50–73, 142–160; conferência editorial de cada formulação ainda pendente. | ramo `academia/revisao-teologica-20261116`, commit `9cc0401` (**não publicado**) | Inspeção estrutural por leitura do arquivo gravado: 3 identificadores preservados, 12 campos encontrados, limites de extensão atendidos; **testes Node, auditorias e navegador 1280/390 ainda não executados** |
| 12/11/2026 | Auditoria dos dois projetos; quatro arquivos persistentes; correção do fluxo de publicação | este repositório, ramo `claude/auditoria-e-fundacao` | 62/62 |
| 12/11/2026 | Só obra pronta (contexto e aula) é obrigatória; as demais aparecem como "em preparação"; arquivo de fichas com validação | este repositório, mesmo ramo | 63/63; `#escada` conferida no navegador |
| 12/11/2026 | Mapa de habilidades (trilha Número e quantidade), regra de domínio, painel "O que fazer agora", sugestões no formulário de registro | Jr., ramo `claude/mapa-de-habilidades` | 43/43; painel conferido no navegador a 390 px, sem erro de JavaScript nem rolagem lateral |
| 12/11/2026 | Catálogo único: uma obra, um registro; edições, traduções e volumes dentro da obra; aba Biblioteca abre o catálogo no desenho da Biblioteca | este repositório, mesmo ramo | 64/64; catálogo, busca por tradutor, página de obra, de livro e trilha conferidos no navegador a 390 px, sem erro de JavaScript |
| 16/11/2026 | Mandarim e coreano na aba Idiomas | `main`, commit `055faf0` (publicado) | 64/64 |
| 16/11/2026 | Discursivas: texto para IA externa com rubrica; resposta, sugestão da IA, conferência e confirmação guardadas em separado (item 7 do roadmap, só nas discursivas) | `main`, commit `d0b673a` (publicado) | 74/74; fluxo completo, recarga e 390 px conferidos no navegador local, sem erro de JavaScript nem rolagem lateral |
| 16/11/2026 | Mesma correção por IA na comprovação de leitura dos livros e na análise de obra da mediateca | `main`, commit `a7146f4` (publicado) | 74/74; os dois fluxos conferidos no navegador local (montar texto, colar, confirmar, salvar e redesenhar), sem erro de JavaScript |
| 16/11/2026 | Interdisciplinaridade visível na aula: seção "Ligações com outras disciplinas", com a pergunta do módulo integrador, a relação de cada aula ligada (pré-requisito, contexto, paralelo, aprofundamento), a área e o estado; vale para as 183 aulas que estão em algum dos 27 integradores (23 das 70 da fase teológica) | `main`, commit `7280302` (publicado) | 75/75; conferido no navegador a 390 px, sem erro de JavaScript nem rolagem lateral |
| 16/11/2026 | Painel responde "o que ainda não domino": avaliações feitas e abaixo de 80% (melhor nota), aulas que a última tentativa mandou revisar e discursivas sem resultado confirmado, só com base no que o estudante fez (`lacunas` em `core.js`) | `main`, commit `035069f` (publicado) | 77/77; conferido no navegador com estado de teste, depois restaurado |
| 16/11/2026 | Leitura da aula: modo foco (esconde o topo, a navegação e o aviso; sai pelo botão fixo ou por Esc), tamanho do texto em cinco passos e "Retomar onde parei" por aula; preferências guardadas só no aparelho, como o tema | `main`, commit `03f8c0f` (publicado) | 77/77; conferido no navegador: fonte, foco, Esc, saída da aula, posição preservada ao reabrir (defeito achado e corrigido no teste) e 390 px sem rolagem lateral |
| 16/11/2026 | Sumário da aula: coluna lateral fixa a partir de 1100 px, recolhível no celular, com a seção atual marcada; as seções e o sumário param abaixo do topo fixo, que muda de altura (antes o topo cobria o título da seção ao saltar) | `main`, commit `6f49280` (publicado) | 77/77; conferido a 1280 px e a 390 px, e na página de prova (sem mudança), sem erro de JavaScript |
| 16/11/2026 | Notas ao lado do texto: quadro "Minhas notas desta aula" na coluna do sumário, com as notas já feitas e uma nota rápida que vai para o Caderno ligada à aula, sem sair nem redesenhar a aula. Com isso a Parte VII do prompt mestre (sumário lateral, notas, progresso, modo foco, fonte, tema, retomada) fica atendida na aula | `main`, commit `1a581a8` (publicado) | 77/77; nota criada, listada, contada e vista no Caderno; 1280 e 390 px sem rolagem lateral; nota de teste apagada |
| 16/11/2026 | Navegação principal com seis itens (Início, Estudar, Meu percurso, Biblioteca, Avaliações, Caderno) e o resto no menu "Mais" (Curso completo, Mapa do conhecimento, Atlas, Plano e conta, Idiomas, Busca, Infantil); rotas e links antigos inalterados; "Meu percurso" abre a escada da formação. O topo a 1280 px caiu de 139 para 97 px | `main`, commit `a470cd2` (publicado) | 77/77; conferido a 1280 e 390 px: abrir, fechar fora e ao navegar, marca da página atual (inclusive dentro do "Mais"), santos das abas preservados |
| 16/11/2026 | Dois modos de estudo (Parte VI): no guiado, abrir a aula a põe no percurso, como antes; na exploração livre, abrir não registra andamento nem muda o "Continuar estudando", e "Concluir" fica bloqueado; exercícios e notas continuam salvos. Seletor no painel, aviso na aula; preferência do aparelho, padrão guiado. O leitor de livros continua gravando páginas lidas nos dois modos | `main`, commit `75bc253` (publicado) | 78/78; no navegador: aula nova aberta no modo livre ficou sem registro, "atual" não mudou, concluir bloqueado; no guiado o registro voltou a acontecer |
| 16/11/2026 | Parte IX, alternativa em lista: em `#integradores`, todas as 248 ligações aula–época/tema, cada uma com área, relação, estado e o porquê (a pergunta do módulo), com filtros por tipo, área, relação, estado e busca (autor, época, conceito no texto); a página entra no menu "Mais" como "Ligações entre disciplinas". O grafo visual com os mesmos filtros continua pendente | `main`, commit `d56afa9` (publicado) | 79/79; filtros combinados conferidos no navegador; 390 px sem rolagem lateral |
| 16/11/2026 | Fechamento técnico do prompt mestre: auditoria de profundidade (`app/profundidade.js`, `scripts/auditoria-profundidade.mjs`) e o diagnóstico em cada aula; 7 níveis de evidência por aula e testes de retenção no painel; 4 estados de verificação das obras (3 atribuições erradas do degrau 0 em revisão); mapa visual das ligações com os filtros, desenhado até 60 ligações | `main`, commit `50b28d6` (publicado) | 82/82; aula, obra, painel e `#integradores` conferidos a 1280 e 390 px, sem erro de JavaScript |
| 16/11/2026 | Aula-piloto de Teologia no padrão novo: `m1-1` "O que é teologia?" com 18/18 itens (explicação 1.424 palavras; contexto 218; exemplos 231; aplicação 128; 4 objeções; 9 referências). Acrescentados: as três teologias antigas (Platão, Rep. 379a; Aristóteles, Met. VI, 1; Varrão em Agostinho, Cid. Deus VI, 5); a teologia como ciência subalternada e o método argumentativo (Suma I, q. 1, a. 2, a. 4, a. 8); Anselmo, Proslógio e Agostinho, Sermão 43; Dei Filius cap. 2; Dei Verbum 9, 10, 24; CIC §90; Donum Veritatis; Fides et Ratio. Conteúdo antigo preservado. A conferir: numeração de Evágrio, Sobre a oração | `main`, não publicado | 82/82; auditoria: 1 de 695 aulas no padrão; aula conferida no navegador |
| 12/11/2026 | Padrão de excelência acadêmica registrado em `PEDAGOGICAL_STANDARDS.md`, com referências conferidas e lacunas; no Jr., revisão de retenção depois de 30 dias, objetivos da BNCC na trilha e critério "foi além" no painel | este repositório e Jr., ramos `claude/padrao-de-excelencia` | Jr.: 44/44 |
