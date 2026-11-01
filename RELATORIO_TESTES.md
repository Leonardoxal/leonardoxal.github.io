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

## Não testado ainda

- Clique em cada botão de cada tela, um a um; a varredura acima só abre as rotas e verifica erros.
- Os tempos por obra (`MINUTOS_OBRA`) são estimativas declaradas, não medições.
- Sincronização com a conta (Supabase): exige credenciais de um usuário real, que não devem ser usadas.
