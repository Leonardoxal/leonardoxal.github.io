# Status de execução

O plano está em `PLANO_EXECUCAO.md`. Atualize este arquivo ao fim de cada fase. Use "concluída" só quando houver conteúdo, interface e testes, e não apenas uma estrutura de dados.

| Fase | Situação | Evidência |
|---|---|---|
| 1. Auditoria e integridade | concluída | `scripts/auditoria.mjs`, `AUDITORIA_PEDAGOGICA.md`, 28 rotas conferidas no navegador |
| 2. Correções pedagógicas | parcial: três fases de formação e teologia expandida; faltam o reforço do m0 (método) e a exibição do degrau ao lado do número do módulo | `core.js` (`FASE_INICIACAO`, `pendenciaDisciplinas`); módulos `tg1`–`tg8` com 32 aulas e 8 avaliações; 45/45 testes; páginas conferidas no navegador; deploys com sucesso |
| 3. Períodos letivos | estrutura feita, **em aberto**: o usuário a considera a parte mais fraca (ainda não há uma forma prática de estudar). Voltar a ela depois das fases 4 a 10 | `app/data/periodos.js` e `app/views/periodos.js` (`#periodos`, `#periodo-N`); a grade da fase 3 mostra só o semestre atual; teste "períodos letivos" (46/46); conferido no navegador, inclusive em 375 px |
| 4. Módulos integradores | concluída | `app/data/integradores.js`: 27 módulos, 306 ligações a aulas e livros reais, classificadas como pré-requisito, contexto, paralelo ou aprofundamento. 5 deles estão marcados com cobertura limitada: Egito e Mesopotâmia, Islã, Portugal, Revolução Francesa e Independências. Visões `#integradores` e `#integrador-<id>`; a página da aula mostra "Também em". Teste "módulos integradores" (47/47); conferido no navegador |
| 5. Biblioteca e mediateca | concluída (estrutura e registros internos); as categorias não textuais dependem da fase 6 | `app/data/mediateca.js`: 27 categorias e 919 registros, entre eles os 607 livros sem alteração; 93 registros deduplicados reúnem mais de uma fonte. Visões `#mediateca` (filtros por mídia, disciplina e texto) e `#obra-<id>` (todos os campos, fontes, aulas que citam a obra e relações); a busca global inclui as obras e os integradores. Teste "mediateca" (48/48); conferido no navegador |
| 6. Expansão bibliográfica | concluída para as duas fontes indicadas; acervos institucionais ainda não pesquisados. **Obras unificadas e obrigatórias** (decisão do usuário): cada obra tem módulo, função e, quando há base, aula (`scripts/atribuir-obras.mjs` gera `app/data/atribuicoes.js`); concluir degraus e matérias exige todas as obras dos módulos, com análise escrita; quem já concluiu mantém | O conteúdo das páginas foi lido no navegador do app; um acesso pelo terminal foi recusado (406), e não houve contorno. Dados brutos em `dados-brutos/`; o tratamento está em `scripts/importar-fontes.mjs`, que gera `app/data/externos.js`. São 4.733 registros, cada um com destino numa disciplina ou num módulo; as aulas, os módulos e as disciplinas mostram as "Leituras recomendadas das listas de referência". Teste "fontes externas" (49/49); conferido no navegador |
| 7. Simbologia e semiótica | concluída | Módulo novo SB2B (`sb2b.js`): 4 aulas e uma avaliação sobre Eco, Cassirer, Panofsky e o método de cinco perguntas para símbolos religiosos, históricos, políticos e culturais; 3 símbolos novos no Laboratório de Signos, cada sentido com fonte; bibliografia ampliada; a prova integradora de SB3 cobre SB2B. Teste (50/50); conferido no navegador |
| 8. Integração | parcial | Feito: busca global (aulas, livros, obras, conceitos, autores, símbolos, disciplinas, integradores); ficha única de obra com análise; botão "Próxima atividade" (`proximaAtividade` em `grade.js`), que respeita a fase, o semestre e os pré-requisitos e inclui as obras obrigatórias; "Conceitos a revisar" ao errar questões de prova. Falta: obras relacionadas nas páginas de conceito, autor e compositor; o mapa abrir as obras reais por tipo. Teste "próxima atividade" (51/51) |
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
- Fontes externas (extraídas em 01/11/2026):
  - Contra os Acadêmicos: 63 listas e 4.980 itens.
  - Compilação do COF: 397 livros citados em aula. Em 104 deles o autor pôde ser separado do título; nos demais, título e autor ficam juntos, como na fonte.
  - Resultado: 4.733 registros, sendo 4.459 livros, 195 filmes, 74 compositores e 5 cursos. 178 registros reúnem várias fontes.
  - Descartados: 490 itens (notas, remissões a outras listas e tópicos de ementa).
- Mediateca: 5.540 registros, contando os externos. Os números abaixo são de antes da importação.
- Mediateca antes da importação: 919 registros.
  - Por categoria: 873 livros e tratados (os 607 do acervo e 266 das bibliografias), 15 documentos históricos, 3 discursos e 28 acervos digitais.
  - 93 registros reúnem várias fontes.
  - 23 categorias ainda não têm registros (cinema, música, artes etc.). Elas dependem da extração das fontes externas (fase 6); nada foi inventado para preenchê-las.
- Módulos integradores: 27, com 306 ligações.
  - Os temas da ordem geral estão todos presentes, com Agostinho e Tomás como módulos de autor.
  - 5 têm cobertura limitada porque faltam aulas próprias: Egito e Mesopotâmia, Islã, Portugal, Revolução Francesa e Independências americanas.
