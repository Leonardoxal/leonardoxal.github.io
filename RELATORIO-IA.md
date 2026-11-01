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

## 2026-11-01 — Claude (sessão original): fase 5, biblioteca e mediateca

**Feito:**
- `app/data/mediateca.js`:
  - 27 categorias de mídia (as da ordem geral) e tipos de relação entre obras: gravação, adaptação, tradução, edição, volume, parte e estudo sobre;
  - registro único com todos os campos pedidos;
  - deduplicação por chave normalizada, que guarda todas as fontes. Partes ou volumes diferentes continuam como registros separados;
  - aulas que citam cada livro.
- Números: 919 registros. São os 607 livros (sem alteração), mais 312 obras vindas de 425 entradas de bibliografia; 93 registros têm várias fontes.
- Visões novas: `#mediateca`, com filtros e paginação, e `#obra-<id>`. A Biblioteca tem um link para a mediateca.
- A busca global passou a incluir as obras e os integradores.

**Sem invenção:** campos desconhecidos aparecem como "não informado". As 23 categorias sem registros (cinema, música, artes etc.) aparecem vazias, com contagem 0, até a fase 6.

**Testes:** 48 de 48 passaram. Os filtros, a busca e as páginas de obra foram conferidos no navegador, sem rolagem horizontal em 375 px.

**Pendente:**
- A fase 6 (extração das duas fontes externas), que preenche as outras mídias.
- As anotações de análise de filmes e obras (fase 8).
- As fases 7 a 10 e a revisão dos semestres.

## 2026-11-01 — Claude (sessão original): fase 6, expansão bibliográfica

**Feito:**
- **Leitura das fontes:** as páginas foram lidas no navegador do app. O acesso pelo terminal foi recusado (406) e não houve contorno.
  - Contra os Acadêmicos: 63 listas, 4.980 itens.
  - Compilação do COF (fiatjaf): 397 livros.
- **Instrução do usuário:** só os títulos das obras; os da compilação do COF são livros citados em aula; as obras das listas devem estar incorporadas às aulas.
- **Tratamento:** `scripts/importar-fontes.mjs` gera `app/data/externos.js` a partir de `dados-brutos/`.
  - A orientação "Autor – Título" de cada lista foi conferida em amostras.
  - Os filmes foram separados com diretor e ano. Os compositores vêm com datas e a página do livro de Carpeaux.
  - Notas, remissões a outras listas e tópicos de ementa foram descartados.
  - A deduplicação funde com os 607 livros e com as bibliografias pela mesma chave.
- **Números:** 4.733 registros externos (4.459 livros, 195 filmes, 74 compositores, 5 cursos); 178 têm várias fontes. A mediateca passou a 5.540 registros.
- **Ligação ao curso:** cada lista tem destino (tabela `DESTINO`). As aulas, os módulos e as disciplinas mostram as leituras recomendadas, com link para `#mediateca-m-<módulo>` ou `#mediateca-d-<disciplina>`.

**Erros encontrados e corrigidos:**
- O filtro de "ementa" casava com "complementar" e descartava seções inteiras; Matemática caía de 79 para 1 obra.
- O filtro de "Obs" descartava "Observations…".
- Itens com várias obras separadas por ";" eram tomados por prosa.

**Limitações:**
- Na compilação do COF, 293 títulos ficaram com o autor junto do título, como estão na fonte.
- Em listas com ordem ambígua, o autor ficou vazio.
- Os comentários das fontes não foram copiados; ficaram só as referências às aulas (ex.: "COF 01 – Áudio 08").

**Testes:** 49 de 49 passaram. As páginas de aula, módulo, disciplina e mediateca filtrada foram conferidas no navegador, inclusive em 375 px. O deploy deu certo.

**Pendente:** acervos institucionais (bibliotecas, museus, cinematecas), as fases 7 a 10 e a revisão dos semestres.

## 2026-11-01 — Claude (sessão original): atribuição obra por obra (opção B do usuário)

**Decisões do usuário:** todas as obras são obrigatórias, numa só biblioteca, e cada módulo pode ter todo tipo de obra. Ele escolheu a opção B: eu atribuo todas as obras das listas, lista por lista; ele revisa por amostragem.

**Feito:**
- `scripts/atribuir-obras.mjs` gera `app/data/atribuicoes.js`: para cada obra importada, um módulo, uma aula (quando há base), a função e a confiança.
  - **Aula:** 1.511 obras ficaram ligadas a uma aula específica, porque o título ou o autor aparece no título, na fonte ou nas referências da aula.
  - **Regra:** 2.804 foram decididas por regra sobre a lista ou a seção (tabelas `REGRAS` e `REGRAS_LISTA`).
  - **Provisória:** 418 (9%) não tinham base e ficaram no módulo introdutório da disciplina, marcadas "provisória".
- Funções usadas: obra do autor (fonte primária), estudo sobre o autor, obra literária, filme para assistir, compositor para ouvir, obra de consulta, introdução e manual de base, leitura básica ou de aprofundamento da disciplina, curso para acompanhar e obra citada no COF.
- Os livros do acervo também ganharam função, pelo tipo (primária, secundária, referência).
- Site: a ficha da obra mostra módulo, aula e função, e avisa quando a atribuição é provisória. A página da aula mostra "Obras desta aula", e a do módulo mostra "Obras deste módulo", com a função de cada uma.
- Teste: cada obra tem um módulo que existe; a aula pertence a esse módulo; provisórias abaixo de 15%.

**Erro corrigido:** a lista de Giovanni Reale inteira ia para o m5; agora o volume de Patrística e Escolástica vai para o m8, o de Idade Moderna para o m9 e o de Contemporânea para o m10.

**Limitações:**
- Como o módulo é decidido por palavras e por regras, parte das atribuições pode ser discutível. Há uma amostragem visível nas páginas dos módulos.
- O módulo lt2 concentra 1.093 obras (as listas de literatura), porque a lista é por autor e não por tema.
- A obrigatoriedade ainda NÃO foi aplicada: concluir um degrau continua exigindo só os livros originais. Ligá-la exige uma decisão sobre como tratar quem já concluiu degraus e módulos com centenas de obras (m12 tem 429 e m10, 416).
- Os semestres seguem em aberto.

**Testes:** 49 de 49. Conferido no navegador, inclusive em 375 px.
