# Estado dos dois projetos

Auditoria de 12/11/2026 sobre o código real dos dois repositórios, o banco em produção (só esquema, contagens e alertas; nenhum dado de criança foi lido) e o site Jr. aberto num navegador. Este arquivo cobre os dois projetos e vale como ponto de partida de qualquer sessão nova.

Arquivos irmãos: `ROADMAP.md` (o que fazer e em que ordem), `PEDAGOGICAL_STANDARDS.md` (o padrão que toda habilidade, atividade e avaliação deve cumprir) e `ARCHITECTURE.md` (modelo comum e contratos de dados). O histórico detalhado da Academia adulta continua em `STATUS_EXECUCAO.md`, `PLANO_EXECUCAO.md`, `AUDITORIA_PEDAGOGICA.md` e `FUNDAMENTOS_PEDAGOGICOS.md`; o do Jr., em `RELATORIOS_ETAPAS.md` no repositório dele. Não duplique o conteúdo desses arquivos aqui.

Classificação usada: **funcional** (existe e foi verificado), **incompleto**, **planejado**, **ausente**, **duplicado**, **obsoleto**, **não verificado**.

## Como conferir de novo

| O quê | Comando | Resultado em 12/11/2026 |
|---|---|---|
| Testes da Academia | `node --test app/tests/core.test.mjs` | 62 passam, 0 falham |
| Auditoria de dados da Academia | `node scripts/auditoria.mjs` | 12 apontamentos, todos já documentados como intencionais |
| Testes do Jr. | `node --test app/tests/infantil.test.mjs` | 43 passam, 0 falham (40 antes do mapa de habilidades) |
| Publicação | GitHub Actions, "Publicar site" | últimas execuções dos dois repositórios com sucesso |

## Academia da Verdade (adultos)

| Requisito | Estado | Evidência | Problema | Prioridade |
|---|---|---|---|---|
| Percurso que começa pela teologia, com fases e pré-requisitos | funcional | `app/core.js` (`FASE_TEOLOGICA`, `FASE_INICIACAO`, `degrauConcluivel`); testes | — | — |
| Currículo amplo com sequência | funcional na estrutura | 155 módulos, 841 aulas completas, 25 disciplinas, 9 semestres (`app/data/`) | O conteúdo das aulas foi escrito por IA; datas, números de leis e parágrafos de documentos estão registrados como **não verificados** em `RELATORIO-IA.md` | alta |
| Biblioteca e mediateca | incompleto | 5.547 registros em `app/data/mediateca.js` | Dos 4.733 importados, **nenhum** tem contexto, nível, pré-requisito ou justificativa preenchidos; 946 obras sem autor; 191 grupos de possíveis duplicatas; há autor mal separado (por exemplo "3 Volumes – Richard P. Feynman") | alta |
| Obras ligadas ao currículo | incompleto, com efeito nocivo | `obrasObrigatorias` em `mediateca.js` e `degrauConcluivel` em `core.js` | Toda obra importada ligada a um módulo virou **obrigatória**. Concluir o degrau 1 exige 161 obras além dos 12 livros; o degrau 3, 120; um módulo de literatura (`lt2`), 1.098. A formação fica impossível de concluir | **crítica** |
| Comprovação de leitura | incompleto | `MIN_ANALISE_OBRA = 150` em `core.js`; `views/mediateca.js` | A obra é dada por concluída com uma análise de 150 caracteres. O critério mede tamanho, não compreensão | alta |
| Avaliação objetiva | funcional | 149 avaliações, mínimo de 80%, conceitos a revisar | — | — |
| Avaliação discursiva e produção intelectual | incompleto | `views/quiz.js` (caixas de autoavaliação) | Quem escreve é quem marca os critérios como cumpridos. Não há leitor, nem humano nem IA, nem distinção entre sugerido e confirmado. É o ponto mais fraco diante do objetivo de formar quem argumenta | alta |
| Texto para IA externa com rubrica | ausente | só existe no Jr. (`app/infantil/prompt.js`) | A solução sem custo já testada no Jr. não foi levada ao adulto | alta |
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

## Os dez problemas mais graves

Ordenados pelo dano à formação. P = pedagógico, T = técnico, I = institucional.

1. **Obras obrigatórias por importação automática (P, I).** Centenas de obras sem ficha são exigidas para concluir um degrau. Contradiz o princípio de não confundir quantidade com qualidade e torna o curso inconcluível. Foi decisão do responsável; recomendo revê-la (ver `ROADMAP.md`).
2. **O Jr. nunca foi usado de ponta a ponta (P, I).** Zero registros na nuvem. Tudo o que se construiu sobre avaliação está sem prova de uso.
3. **Materiais públicos das aulas com dois ajustes pendentes no gerador (I).** Regra geral em `PEDAGOGICAL_STANDARDS.md`.
4. **Produção escrita do adulto sem leitor (P).** Autoavaliação por caixas de marcar e mínimo de 150 caracteres.
5. **Conteúdo de aulas não verificado (P, I).** Uma instituição chamada Academia da Verdade publica 841 aulas com fatos que o próprio relatório marca como não conferidos.
6. **Currículo do Jr. sem dados de habilidade (P).** Fora da trilha nova, não há sequência; de 4 a 15 anos não há aulas.
7. **Catálogo importado sem profundidade (P).** 4.733 registros sem contexto, nível nem justificativa.
8. **Modelo de uma só família (T, I).** Impede crescer sem refazer o acesso.
9. **Dois vocabulários pedagógicos (T).** A Academia fala em aula, módulo e degrau; o Jr., em habilidade e situação. Não há contrato comum (`ARCHITECTURE.md` propõe um).
10. **Documentação espalhada (T).** Onze relatórios na raiz deste repositório, parte deles histórica. Este arquivo passa a ser a entrada única.

## Pendências que dependem do responsável

- Decidir sobre o item 1 (obras obrigatórias).
- Corrigir no projeto privado que gera os PDFs os dois pontos informados na conversa de 12/11/2026 e publicar de novo as aulas.
- Entrar na família no Jr. com a conta e o código, cadastrar as crianças e usar a trilha por duas semanas.
- Ligar no painel do Supabase a proteção contra senhas vazadas (Authentication → Passwords).
- Aprovar ou recusar os dois pedidos de mudança abertos em 12/11/2026 (um em cada repositório).

## Registro de entregas

| Data | Entrega | Onde | Testes |
|---|---|---|---|
| 12/11/2026 | Auditoria dos dois projetos; quatro arquivos persistentes; correção do fluxo de publicação | este repositório, ramo `claude/auditoria-e-fundacao` | 62/62 |
| 12/11/2026 | Mapa de habilidades (trilha Número e quantidade), regra de domínio, painel "O que fazer agora", sugestões no formulário de registro | Jr., ramo `claude/mapa-de-habilidades` | 43/43; painel conferido no navegador a 390 px, sem erro de JavaScript nem rolagem lateral |
