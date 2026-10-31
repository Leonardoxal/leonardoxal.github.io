# Status de execução

O plano está em `PLANO_EXECUCAO.md`. Atualize este arquivo ao fim de cada fase. Use "concluída" só quando houver conteúdo, interface e testes, e não apenas uma estrutura de dados.

| Fase | Situação | Evidência |
|---|---|---|
| 1. Auditoria e integridade | concluída | `scripts/auditoria.mjs`, `AUDITORIA_PEDAGOGICA.md`, 28 rotas conferidas no navegador |
| 2. Correções pedagógicas | parcial: três fases de formação e teologia expandida; faltam o reforço do m0 (método) e a exibição do degrau ao lado do número do módulo | `core.js` (`FASE_INICIACAO`, `pendenciaDisciplinas`); módulos `tg1`–`tg8` com 32 aulas e 8 avaliações; 45/45 testes; páginas conferidas no navegador; deploys com sucesso |
| 3. Períodos letivos | concluída | `app/data/periodos.js` e `app/views/periodos.js` (`#periodos`, `#periodo-N`); a grade da fase 3 mostra só o semestre atual; teste "períodos letivos" (46/46); conferido no navegador, inclusive em 375 px |
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
- Semestres da fase multidisciplinar: 9.
  - Cada um tem 18 semanas: 16 de estudo, a avaliação intermediária na semana 8, o projeto na 16, a final na 17 e a recuperação na 18.
  - O 1º semestre tem 3 matérias (filosofia e 2 disciplinas); os demais têm 4 (filosofia e 3 disciplinas).
  - Carga estimada por semestre: de 204 h a 302 h, ou de 11,4 h a 16,8 h por semana em média; a semana mais pesada chega a 22,3 h.
  - Com o plano padrão de 6 h por semana, cada semestre se estende. A página mostra quantas semanas ele leva nesse ritmo.
  - Exceções registradas: nos degraus 5 e 7 a 12, a leitura integral dos livros não cabe em um semestre e continua no plano de leitura.
- Registros de mídia (mediateca): 0.
- Módulos integradores: 0.
