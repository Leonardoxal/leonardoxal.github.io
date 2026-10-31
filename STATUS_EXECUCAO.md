# Status de execução

O plano está em `PLANO_EXECUCAO.md`. Atualize este arquivo ao fim de cada fase. Use "concluída" só quando houver conteúdo, interface e testes, e não apenas uma estrutura de dados.

| Fase | Situação | Evidência |
|---|---|---|
| 1. Auditoria e integridade | concluída | `scripts/auditoria.mjs`, `AUDITORIA_PEDAGOGICA.md`, 28 rotas conferidas no navegador |
| 2. Correções pedagógicas | parcial: três fases de formação e teologia expandida; faltam o reforço do m0 (método) e a exibição do degrau ao lado do número do módulo | `core.js` (`FASE_INICIACAO`, `pendenciaDisciplinas`); módulos `tg1`–`tg8` com 32 aulas e 8 avaliações; 45/45 testes; páginas conferidas no navegador; deploys com sucesso |
| 3. Períodos letivos | pendente | — |
| 4. Módulos integradores | pendente | — |
| 5. Biblioteca e mediateca | pendente | — |
| 6. Expansão bibliográfica | pendente | — |
| 7. Simbologia e semiótica | pendente (a disciplina já existe; falta a revisão) | — |
| 8. Integração | pendente | — |
| 9. Testes funcionais | pendente | — |
| 10. Documentação final | pendente | — |

## Números atuais (fonte: `node scripts/auditoria.mjs`)

- Livros: 607, todos os ids originais presentes; 0 duplicatas; 74 "a confirmar".
- Aulas completas: 841 (eram 801 antes da expansão da teologia).
- Módulos: 154 (26 da escada e 128 de disciplinas).
- Fase teológica: 12 módulos (m0, m1, m2, tg1–tg5 no degrau 1; m2b, tg6–tg8 no degrau 2), 67 aulas completas (eram 27) e 65 livros.
  - Temas cobertos: Escritura, Revelação e Tradição, fé e razão, Credo, Trindade, Cristologia, Maria, Criação, ser humano, pecado original, graça, Igreja, sacramentos, moral, espiritualidade, escatologia, liturgia, Patrística, Escolástica, Doutrina Social e História da Igreja até o Vaticano II.
- Disciplinas com percurso: 25.
- Avaliações: 149 (147 com mínimo de 80%; 2 discursivas com exceção justificada).
- Registros de mídia (mediateca): 0.
- Módulos integradores: 0.
