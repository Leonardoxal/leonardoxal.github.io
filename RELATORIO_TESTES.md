# Relatório de testes

Aqui ficam registrados apenas testes realmente executados, com data, comando e resultado.

## 31/10/2026 — Fase 1 (auditoria)

| Teste | Como | Resultado |
|---|---|---|
| Suíte automatizada | `node --test app/tests/core.test.mjs` | 45 pass / 0 fail |
| Auditoria de dados | `node scripts/auditoria.mjs` | 12 apontamentos: 11 divergências id/degrau (intencionais, documentadas) e 2 avaliações com mínimo 0 (exceção justificada); 0 erros de integridade |
| Rotas sem erro | Navegador, servidor local (`node servir.mjs`); 28 rotas percorridas com captura de `error` e `unhandledrejection` | 0 erros de JavaScript |
| Responsividade | Viewport de 375×812; 11 rotas; `scrollWidth` do documento comparado à largura da janela | Nenhuma rolagem horizontal da página; mapa, tabela do plano e linha do tempo rolam dentro dos contêineres |

## 01/11/2026 — Fases 2 a 9

| Teste | Como | Resultado |
|---|---|---|
| Suíte automatizada | `node --test app/tests/core.test.mjs` | 52 pass / 0 fail (cobre teologia, períodos, integradores, mediateca, obras obrigatórias, fontes externas, próxima atividade, obras relacionadas) |
| Varredura de rotas em 375×812 | Navegador, servidor local; 74 rotas (fixas, 8 conceitos, 9 semestres, 6 integradores, obras amostradas, aulas amostradas, 6 disciplinas), com captura de `error` e `unhandledrejection` | 0 erros de JavaScript; nenhuma página vazia; nenhum "NaN", "undefined" ou "[object"; nenhuma rolagem horizontal da página |
| Obras relacionadas | Navegador: `#conceito-verdade`, `#autores` | Bloco "Obras relacionadas" presente |
| Obras por tipo | Navegador: `#escada` (links por tipo) e `#mediateca-t-cinema` | Filtro de tipo aplicado (`cinema`), 60 itens na primeira página |
| Carga das obras no semestre | Navegador: `#periodo-2` | Texto com horas estimadas e semanas adicionais, sem valores inválidos |
| Provas | Erro proposital em prova | Mostrou aulas e conceitos a revisar |
| Deploys | GitHub Actions | Sucesso nos deploys anteriores a esta rodada |

## 01/11/2026 — Funcionamento (cliques e fluxos)

Servidor local, navegador do app; o estado de teste fica só nesse navegador, não na conta do usuário.

| Teste | Como | Resultado |
|---|---|---|
| Cliques em controles | 26 rotas; até 40 botões, resumos, seletores e caixas por tela, excluindo os que apagam, saem ou importam dados; captura de `error` e `unhandledrejection` | 0 erros de JavaScript. Os nós SVG de `mapa`, `autores` e `area-teologia` (157 controles) foram clicados por evento: 0 erros; 26, 37 e 3 reagiram com mudança de página ou de conteúdo |
| Links internos | 85 destinos únicos coletados em 21 telas e visitados | Nenhum vazio, "não encontrado", "NaN", "undefined" ou acento corrompido (a 1ª passagem acusou 37 por causa de um regex mal escrito; reconferidas com padrões exatos, 0 reais) |
| Concluir obra | Ficha de obra: marcar "Concluído" sem análise, depois com análise de 211 caracteres, depois recarregar | Sem análise: mantém "Lendo". Com análise: salva e persiste após recarregar |
| Concluir aula | `m0-2`: botão desabilitado (aula anterior, discursiva e fonte pendentes). `m3-1`: 4/4 e 3/3 nos questionários, discursivas, critérios e fonte marcados | Botão habilitado só com tudo cumprido; concluiu "em 01/11/2026, melhor nota 100%" |
| Questionário | `m0-2`: uma resposta errada (4/5) e depois todas certas (5/5) | 80% aprovado; 100% aprovado; feedback por questão |
| Próxima atividade | `#estudar` e `#painel` depois de concluir `m3-1` | Passaram a apontar `m0-2` |
| Busca | "Panofsky" e "verdade" | Aulas, livros e obras relevantes (sb2b-3, "Estudos de iconologia"); 40 links para "verdade" |
| Nota | Criar nota pela aula `m0-3`, escrever, abrir o caderno | Nota criada, salva e listada |
| Plano | Botões presentes | "Salvar e recalcular" e "Exportar backup (JSON)" (a importação não foi exercitada) |

## Não testado ainda

- Importação de backup, entrada e saída da conta e demais botões destrutivos, excluídos de propósito.
- Cronômetro e geração de cartões de revisão: os botões foram clicados na varredura sem erro, mas o resultado não foi conferido.
- Os tempos por obra (`MINUTOS_OBRA`) são estimativas declaradas, não medições.
- Sincronização com a conta (Supabase): exige credenciais de um usuário real, que não devem ser usadas.
