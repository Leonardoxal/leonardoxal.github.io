# Relatório final da reestruturação pedagógica

Data: 01/11/2026. Os números vêm de `node scripts/auditoria.mjs`, do `STATUS_EXECUCAO.md` e da suíte de testes. Nada foi estimado sem aviso.

## 1. O que foi implementado

- **Três fases de formação**: teologia (degraus 0 a 2), iniciação intelectual (degraus 3 e 4) e fase multidisciplinar por semestres.
- **Teologia expandida**: módulos `tg1` a `tg8` (32 aulas e 8 avaliações). A fase teológica tem 12 módulos e 67 aulas completas.
- **Semestres**: 9 períodos de 18 semanas (16 de estudo, intermediária na 8, projeto na 16, final na 17, recuperação na 18), com carga calculada por semana e matérias aprovadas sem compensação.
- **Módulos integradores**: 27, com 306 ligações a aulas e livros reais; 5 deles com cobertura limitada declarada.
- **Mediateca única**: 27 categorias, 5.547 registros, incluindo os 607 livros originais sem alteração. Cada obra tem módulo, função e, quando há base, aula.
- **Obras obrigatórias**: concluir degraus e matérias exige todas as obras dos módulos, com análise escrita de ao menos 150 caracteres. Quem já concluiu mantém.
- **Fontes externas**: Contra os Acadêmicos (63 listas, 4.980 itens) e compilação do COF (397 livros citados em aula). Resultado: 4.733 registros.
- **Simbologia**: módulo `sb2b` (Eco, Cassirer, Panofsky e método de cinco perguntas), 3 símbolos novos.
- **Integração**: busca global, ficha única de obra, botão "Próxima atividade", "Conceitos a revisar" após prova, obras relacionadas em conceitos e autores, links por tipo de mídia, tempo das obras por semestre.

## 2. O que foi corrigido

- As 319 obras das bibliografias das disciplinas estavam sem módulo; agora entram no módulo da etapa em que a disciplina as lista.
- Filtros de importação que descartavam itens indevidos ("complementar", "Observations").
- Lista de Reale atribuída por volume, não toda a um módulo.
- Textos de `sb2b.js` revisados (alegação sobre Bolonha removida, capítulos de Cassirer, grafias).

## 3. Números reais

| Item | Valor |
|---|---|
| Livros originais preservados | 607 (0 ausentes, 0 duplicatas) |
| Registros externos incorporados | 4.733 (4.459 livros, 195 filmes, 74 compositores, 5 cursos) |
| Itens descartados na extração | 490 (notas, remissões e tópicos de ementa) |
| Registros que reúnem várias fontes | 178 externos; 93 entre acervo e bibliografias |
| Registros da mediateca | 5.547 |
| Obras do externo com atribuição provisória | cerca de 413 (sinalizadas na ficha) |
| Aulas completas | 849 |
| Módulos | 155 |
| Avaliações | 159 |
| Testes automatizados | 54 aprovados, 0 falhas |
| Páginas percorridas no navegador | 2.342, sem problema real; 74 delas também em 375 px |
| Questões verificadas | 7.641 objetivas e 1.710 discursivas, sem inconsistência |

## 4. Carga dos semestres

- Aulas, revisão, provas, leitura de filosofia e projeto: de 204 h a 302 h por semestre (11,4 h a 16,8 h por semana em média; a semana mais pesada chega a 22,3 h).
- As obras obrigatórias não entram nesse calendário. A página de cada semestre mostra o tempo delas à parte; o 2º semestre, por exemplo, pede cerca de 623 h 30 min, o que no plano padrão de 6 h por semana soma cerca de 104 semanas. Os tempos por obra (`MINUTOS_OBRA`) são estimativas declaradas.
- Conclusão honesta: com todas as obras obrigatórias, o curso não cabe em 18 semanas por semestre.

## 5. Pendências e decisões humanas

1. **Obrigatoriedade total das obras**: decidida pelo usuário em 01/11/2026 ("Todas são obrigatórias"). Os semestres se alongam: `semanasNoRitmo` soma o tempo das obras ao do semestre, e a página de cada semestre informa as semanas reais no ritmo do aluno.
2. **Semestres e linha de estudo**: a nova aba **Estudar** mostra a fila de cada fase e, na fase 3, a semana do semestre com aulas, provas e obras. O usuário precisa avaliar se essa experiência é prática o bastante; o estudo semana a semana depende de uso real.
3. Revisar por amostragem as ~413 atribuições provisórias de módulo e função.
4. Conferir os fatos das aulas novas escritos de memória (listados em `RELATORIO-IA.md`): datas de obras de Eco e Cassirer, exemplo de Panofsky, relatos sobre Constantino, lei da bandeira do Reich de 1935, Código Penal alemão, Lei 7.716/1989.
5. 293 títulos do COF permanecem com autor e título juntos, como na fonte.
6. Acervos institucionais (bibliotecas, museus, cinematecas) não foram pesquisados; categorias sem fonte (pintura, escultura etc.) ficam vazias.
7. Fatos das aulas novas do `m0` escritos de memória e a conferir: números das normas ABNT NBR 6023 e NBR 10520 e o art. 46, III, da Lei 9.610/1998.
8. **Defeito corrigido nesta rodada**: `curso.js` e `disciplina.js` tinham os acentos corrompidos (mojibake) e a página Curso mostrava "MÃ³dulo". Foram corrigidos e um teste novo impede a volta.
9. **Abas reorganizadas**: Painel, Estudar, Curso, Mapa, Biblioteca, Avaliações, Caderno, Atlas, Plano e Busca. Ideias e Símbolos passaram a sub-abas do Atlas (Conceitos, Autores, Ideias, Símbolos).
10. Cinco integradores têm cobertura limitada por falta de aulas próprias (Egito e Mesopotâmia, Islã, Portugal, Revolução Francesa, Independências).

## 6. Não testado

- Clique em cada botão de cada tela, um a um.
- Sincronização com a conta (Supabase), que exige credenciais reais.
