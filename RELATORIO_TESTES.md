# Relatório de testes

Aqui ficam registrados apenas testes realmente executados, com data, comando e resultado.

## 31/10/2026 — Fase 1 (auditoria)

| Teste | Como | Resultado |
|---|---|---|
| Suíte automatizada | `node --test app/tests/core.test.mjs` | 45 pass / 0 fail |
| Auditoria de dados | `node scripts/auditoria.mjs` | 12 apontamentos: 11 divergências id/degrau (intencionais, documentadas) e 2 avaliações com mínimo 0 (exceção justificada); 0 erros de integridade |
| Rotas sem erro | Navegador, servidor local (`node servir.mjs`); 28 rotas percorridas com captura de `error` e `unhandledrejection` | 0 erros de JavaScript |
| Responsividade | Viewport de 375×812; 11 rotas; `scrollWidth` do documento comparado à largura da janela | Nenhuma rolagem horizontal da página; mapa, tabela do plano e linha do tempo rolam dentro dos contêineres |

## Não testado ainda

- Clique em cada botão de cada tela (fase 9).
- Sincronização com a conta (Supabase): exige credenciais de um usuário real, que não devem ser usadas.
