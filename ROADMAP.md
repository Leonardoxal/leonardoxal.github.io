# Plano de execução dos dois projetos

Vem da auditoria registrada em `PROJECT_STATUS.md`. Cada item tem um veredito: **IMPLEMENTAR**, **IMPLEMENTAR COM AJUSTES**, **ADIAR** ou **NÃO RECOMENDO**. Ao concluir um item, registre em `PROJECT_STATUS.md` com a evidência e o teste; um commit não conta como conclusão.

## Regra de ordem

Nada de catálogo, jogo ou disciplina nova enquanto o ciclo de aprendizagem não tiver rodado com uma criança real e com um adulto real. O que falta hoje não é conteúdo: é prova de que o que existe ensina.

## Imediato (até duas semanas)

| # | Item | Projeto | Veredito | Como saber que funcionou |
|---|---|---|---|---|
| 1 | Fichas das obras: contexto e aula de cada obra, escritos e conferidos, em `app/data/fichas-obras.js`. Ordem: degrau 0, depois 1, e assim por diante. Antes de escrever, corrigir a atribuição quando a obra está no módulo errado | Academia | IMPLEMENTAR (decisão do responsável em 12/11/2026). A regra que só exige obra pronta já está feita | `node scripts/auditoria.mjs` mostra as obras prontas de cada degrau; o teste "fichas das obras" passa |
| 1b | Rever `app/data/unificacoes.js` (205 obras unidas) e os 111 grupos de possíveis duplicatas que restam na tela; registrar edições e traduções recomendadas junto com a ficha de cada obra | Academia | IMPLEMENTAR, junto com o item 1 | Grupo errado apagado do arquivo e posto em `MANTER_SEPARADOS` no script; a seção "Edições, traduções e volumes" mostra a recomendação |
| 2 | Corrigir os materiais públicos das aulas (ver pendências) | Jr. (projeto privado) | IMPLEMENTAR | Nova leitura dos PDFs publicados |
| 3 | Usar a trilha "Número e quantidade" por duas semanas, registrando na nuvem | Jr. | IMPLEMENTAR | Registros em `aci_registro`; o painel "O que fazer agora" muda conforme os registros |
| 4 | Revisão da trilha por quem a usou: o que estava errado na ordem, no critério, no texto | Jr. | IMPLEMENTAR | Ajustes em `habilidades.js` com o motivo no commit |
| 5 | Ligar a proteção contra senhas vazadas | Supabase | IMPLEMENTAR | Alerta some do verificador de segurança |

## Próximo ciclo (um a dois meses)

| # | Item | Projeto | Veredito | Observação |
|---|---|---|---|---|
| 6 | Ligar cada aula às habilidades que ela trabalha (campo `habilidades` gerado pelo projeto privado) | Jr. | IMPLEMENTAR | Sem isso a aula e o registro não se falam |
| 7 | Texto para IA externa com rubrica, para as discursivas e análises de obra do adulto, com o retorno guardado como "sugestão" até o estudante conferir | Academia | IMPLEMENTAR | Reaproveita o desenho de `prompt.js` do Jr. Substitui o mínimo de 150 caracteres por critérios |
| 8 | Retorno estruturado da IA no Jr.: o texto pede um bloco final em formato fixo, e a tela o lê e pré-preenche o registro para o responsável conferir | Jr. | IMPLEMENTAR COM AJUSTES | Só depois do item 3. Nunca gravar sem confirmação humana |
| 9 | Segunda trilha do mapa: linguagem oral e consciência fonológica (2 a 6 anos) | Jr. | IMPLEMENTAR, depois do item 4 | Uma trilha por vez |
| 10 | Verificação de fatos das aulas da fase teológica (degraus 0 a 2), com fonte por afirmação | Academia | IMPLEMENTAR | Começar por onde todo estudante começa; marcar cada aula como conferida ou não |
| 11 | Guardar de forma estruturada as observações do responsável (independência, ajuda, cansaço) | Jr. | IMPLEMENTAR COM AJUSTES | Exige coluna nova em `aci_aula`; fazer junto com o item 12 |
| 12 | Separar os dados por família (coluna de família em todas as tabelas `aci_*`) | Jr. | IMPLEMENTAR antes de abrir a qualquer outra família; ADIAR enquanto for uma só | Mudança de banco com migração; ver `ARCHITECTURE.md` |

## Padrão de excelência (diretriz de 12/11/2026)

| # | Item | Veredito | Observação |
|---|---|---|---|
| E1 | Cada trilha nova nasce da comparação com BNCC, Singapura e a olimpíada da idade, registrada em `PEDAGOGICAL_STANDARDS.md` | IMPLEMENTAR | Feito para "Número e quantidade" |
| E2 | Retenção: habilidade dominada volta para conferência depois de 30 dias | IMPLEMENTAR | Feito no Jr. em 12/11/2026 |
| E3 | Linha "número e operações" dos 6 aos 11 anos, com os seis níveis e problemas não rotineiros (referência: Singapura P1 a P6 e Olimpíada Mirim) | IMPLEMENTAR, depois de a trilha de 2 a 6 ser usada | Primeira linha em que os seis níveis fazem sentido |
| E4 | Linha de linguagem (oral, consciência fonológica, leitura, escrita) com o mesmo rigor da matemática | IMPLEMENTAR | Sem ela a excelência fica só em exatas |
| E5 | Decidir quem cobre os 16 a 18 anos (ITA, IME, olimpíadas de nível 3) | DECISÃO DO RESPONSÁVEL | Hoje ninguém cobre |
| E6 | Pesquisar os programas oficiais do ITA, do IME e das olimpíadas e traçar, de trás para frente, os pré-requisitos por idade | IMPLEMENTAR antes de E3 chegar aos 12 anos | Não antecipar conteúdo: usar só para saber aonde a linha precisa chegar |
| E7 | Simulados e treino de prova para menores de 14 anos | NÃO RECOMENDO | Contraria a própria diretriz |

## Longo prazo

| # | Item | Veredito | Motivo |
|---|---|---|---|
| 13 | Fichas das obras dos degraus 5 em diante e das disciplinas (a maior parte das 4.940) | IMPLEMENTAR | Continuação do item 1. No ritmo de um degrau por vez, com conferência; não há atalho honesto para escrever milhares de contextos de uma vez |
| 14 | Nivelamento do adulto e passagem do Jr. para a Academia por domínio | IMPLEMENTAR | Depende de habilidades registradas dos dois lados |
| 15 | Trilhas do mapa para 6 a 15 anos e aulas dessas idades | IMPLEMENTAR | Depois de as trilhas iniciais estarem em uso |
| 16 | Jogos ligados às habilidades do mapa por identificador | IMPLEMENTAR COM AJUSTES | Hoje a ligação é só um link para o jogo |
| 17 | Modelo local (Ollama) para avaliação | ADIAR | Sem medida de qualidade do fluxo atual, não há com que comparar |
| 18 | Backend comum ou banco unificado | ADIAR | Os dois sites já usam o mesmo projeto Supabase; falta contrato, não infraestrutura |
| 19 | Revisão do conjunto por pedagogo e, para a formação religiosa, por alguém com formação teológica | IMPLEMENTAR | Já recomendado em `FUNDAMENTOS_PEDAGOGICOS.md`; continua sem ser feito |

## Não recomendo

- **Ampliar catálogos agora** (mais livros, filmes, listas importadas). O acervo já passa do que se consegue fichar.
- **Avaliação automática que grava direto no registro.** A especificação pede recomendação revisável; gravar sem conferência transforma hipótese em histórico.
- **Ranking, pontos ou sequências diárias nos jogos.** Já estão fora e devem continuar.
- **Novos relatórios soltos na raiz.** Use os quatro arquivos persistentes.
