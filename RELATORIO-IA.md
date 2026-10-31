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
