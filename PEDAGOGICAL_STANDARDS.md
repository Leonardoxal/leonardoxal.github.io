# Padrões pedagógicos comuns

Vale para a Academia da Verdade e para a Academia da Verdade Jr. As bases de evidência de cada recurso estão em `FUNDAMENTOS_PEDAGOGICOS.md`; este arquivo diz o que cada peça precisa ter para entrar no sistema. Nada aqui foi validado por especialista externo.

## O ciclo

1. Identificar o que a pessoa já sabe.
2. Escolher a próxima habilidade.
3. Ensinar.
4. Propor a atividade.
5. Receber a evidência.
6. Avaliar com critérios.
7. Identificar a dificuldade.
8. Intervir.
9. Reavaliar.
10. Confirmar o domínio e avançar.

Uma funcionalidade nova deve dizer a qual passo serve. Se não serve a nenhum, não entra.

## Habilidade

Toda habilidade do mapa tem, obrigatoriamente:

| Campo | Conteúdo |
|---|---|
| `id` | fixo para sempre; nunca reaproveitado |
| `nome` | o que a pessoa faz, com verbo observável ("contar até 3 objetos"), não um tema ("contagem") |
| trilha e área | onde ela se encaixa |
| idade de referência | orientação, nunca barreira |
| `prereq` | habilidades que precisam estar dominadas antes; sem ciclos |
| `objetivo` | o que se quer, em uma frase |
| `verificar` | como observar em poucos minutos, com material comum |
| `dominio` | o que precisa ser visto para dizer que há domínio |
| `excelencia` | o que mostra que foi além |
| `intervencao` | o que tentar quando ainda não consegue |

Implementação de referência: `app/infantil/habilidades.js`, no Jr., com os testes que conferem esses campos.

## Domínio

- Uma observação isolada nunca prova domínio.
- Há domínio quando a habilidade foi vista como dominada em **dois dias diferentes**, ou numa **nova verificação** registrada como tal.
- O registro mais recente manda: domínio pode ser perdido e volta a "em andamento".
- Só o domínio dos pré-requisitos libera a habilidade seguinte. Uma habilidade adiantada, já observada, aparece mesmo assim, com o que falta.
- No máximo três frentes por trilha de cada vez.

## Atividade

Disciplina, habilidade (pelo `id`), objetivo, pré-requisitos, nível, instruções, critérios de avaliação, critério de domínio, critério de excelência, orientações ao responsável e intervenções possíveis. Até os 5 anos: brincadeira, fala, material concreto, história, movimento e adulto junto.

## Avaliação

- **Objetiva** (múltipla escolha, classificação): correção automática, com explicação e conceitos a revisar.
- **Discursiva e produção escrita**: sempre por critérios escritos antes. O tamanho do texto não é critério.
- **Por IA**: a IA recebe atividade, objetivo, critérios, resposta, histórico e observações do responsável. Devolve acertos, erros, evidências, habilidades demonstradas e não demonstradas, hipóteses de dificuldade, grau de confiança, intervenção e proposta de reavaliação.
  - É sugestão. Só entra no registro depois de conferida por uma pessoa, e entra marcada como "sugestão da IA, conferida".
  - Não faz diagnóstico clínico, psicológico ou neuropsicológico, nem conclui sobre inteligência ou atenção.
  - A criança vai como "Aluno A", com idade em anos e meses, sem nome nem data de nascimento.
  - O sistema não envia nada sozinho: monta o texto, e o adulto decide levar.
  - A precisão desse fluxo não foi medida. Não afirme que é confiável.

Critérios por área: os de `CRITERIOS` em `app/infantil/prompt.js` (Jr.), que seguem a especificação: matemática (conceito, procedimento, cálculo, raciocínio, justificativa, aplicação), português, história, ciências, inglês e formação católica.

## Registro

Cada registro guarda a origem: observação do responsável, sugestão da IA conferida, ou resultado confirmado em nova verificação. Nunca apague registros para "limpar" o histórico; a situação atual é o registro mais recente.

## Conteúdo

- Distinguir sempre: doutrina católica; fato histórico ou científico; interpretação de autor; hipótese ou questão aberta; posição da Academia; posição cívica ou política.
- Fato escrito de memória por IA é "não verificado" até ter fonte. Aula com fatos não verificados leva essa marca.
- Obra só é obrigatória com ficha completa: contexto, objetivo formativo, pré-requisito, nível, orientação de leitura, questões e relação com outras obras.
- Antes de ampliar um catálogo, complete as fichas do que já está em uso.

## Padrão de excelência acadêmica

Diretriz do responsável, de 12/11/2026. Vale para os dois projetos.

### A meta

Ao fim da educação básica, um aluno com trajetória adequada deve ter condições de enfrentar desafios acadêmicos muito exigentes, inclusive os que passam do currículo escolar. É meta institucional, não promessa de aprovação. As referências de exigência são o ITA e o IME, as olimpíadas científicas (OBM, OBMEP, física, química, biologia, astronomia, informática), a matemática de Singapura, o IB e o Cambridge International e, quando fizer sentido, AP, SAT e ACT.

Essas referências medem rigor e profundidade. Não são conteúdo a antecipar para crianças pequenas.

### Excelência em todas as áreas

Língua portuguesa e escrita, literatura, matemática e demonstração, ciências naturais, história, geografia, filosofia e argumentação, teologia católica, idiomas, artes e música, pesquisa. Quem resolve equações difíceis e não interpreta um texto nem sustenta um argumento não atingiu o padrão. O próprio ITA cobra redação, português e uma lista de leituras obrigatórias na segunda fase.

### As cinco dimensões do domínio

| Dimensão | Pergunta | Como aparece numa habilidade |
|---|---|---|
| Conhecimento | Conhece os conceitos? | `verificar` e `dominio` |
| Compreensão | Explica por que funciona? | o critério de domínio pede explicação a partir dos 6 anos; antes, pede fazer em duas situações diferentes |
| Aplicação | Resolve problemas conhecidos? | `dominio` |
| Transferência | Resolve problemas novos? | `excelencia` |
| Autonomia | Investiga, justifica e acha os próprios erros? | observações do responsável ("fez sozinha", "precisou de ajuda"); a partir dos 9 anos, critério próprio |

Repetir exercícios com acerto não é domínio. Por isso o sistema exige:

- **confirmação**: visto em dois dias diferentes ou em nova verificação;
- **retenção**: uma habilidade dominada há mais de 30 dias volta para ser conferida, sem perder o domínio nem bloquear as seguintes (`DIAS_RETENCAO` em `habilidades.js`);
- **transferência**: o critério de excelência de cada habilidade pede uma situação que não foi treinada.

### Os seis níveis

Fundamentos, consolidação, proficiência, aprofundamento, excelência e desafio avançado. O nível é dado pela complexidade do conceito, pelo raciocínio exigido e pela autonomia, nunca pelo número de questões nem pelo tempo gasto.

Decisão de aplicação: os seis níveis descrevem uma **linha curricular ao longo dos anos** (por exemplo, "número e operações" dos 2 aos 15), não cada habilidade pequena. "Contar até 3 objetos" não tem seis níveis; tem domínio e um sinal de que a criança foi além. Forçar seis degraus em cada habilidade de uma criança de 2 anos produziria níveis inventados. A partir dos 9 anos, quando há problemas não rotineiros, cada habilidade passa a ter atividades marcadas com o nível.

### O que cada etapa busca e que referência vale

| Idade | Foco | Referência de exigência | O que não fazer |
|---|---|---|---|
| 2 a 5 | linguagem, vocabulário, consciência fonológica, senso numérico, curiosidade, coordenação, por brincadeira | BNCC da Educação Infantil; quadro NEL de Singapura (4 a 6 anos); trajetórias de Clements e Sarama | alfabetização formal, contas escritas, qualquer treino de prova |
| 6 a 8 | alfabetização sólida, aritmética com compreensão, observação científica | BNCC; matemática primária de Singapura (concreto, pictórico, abstrato) | velocidade antes de compreensão |
| 9 a 11 | profundidade conceitual, problemas não rotineiros, escrita estruturada | Olimpíada Mirim da OBMEP (2º ao 5º ano); Singapura P4 a P6 | preparação intensiva |
| 12 a 13 | abstração, álgebra, geometria, raciocínio formal, análise de fontes | OBMEP nível 1 (6º e 7º anos) e nível 2 (8º e 9º); OBM | pular a demonstração |
| 14 a 15 | aprofundamento, problemas olímpicos, pesquisa, escrita complexa | OBMEP nível 2 e início do 3; olimpíadas de física, química, astronomia | treino de vestibular |
| 16 a 18 | consolidação para exames rigorosos e universidade | ITA, IME, OBMEP nível 3, IB, Cambridge, SAT | — |

### Limites que a ambição não ultrapassa

Sono, saúde, brincadeira, convivência familiar e desenvolvimento emocional não são sacrificados por desempenho precoce. Nenhum conteúdo avançado entra sem os pré-requisitos. Quem precisa de reforço recebe intervenção, sem rótulo. Limite de tela e ausência de ranking continuam valendo.

### O que foi conferido e o que falta pesquisar

Conferido em 12/11/2026:

- BNCC, Educação Infantil, campo "Espaços, tempos, quantidades, relações e transformações": EI02ET07 (contar oralmente objetos, pessoas, livros etc., em contextos diversos) e EI03ET07 (relacionar números às quantidades e identificar o antes, o depois e o entre numa sequência). A trilha "Número e quantidade" cobre os dois e vai além.
- Singapura: o quadro *Nurturing Early Learners* (MOE, 2022) orienta o ensino de 4 a 6 anos; em numeramento trata de relações e padrões, contagem e senso numérico, formas e noções espaciais, e cita Clements e Sarama (2009), a mesma base da nossa trilha. O programa de matemática primária (MOE, 2021) adota a sequência concreto, pictórico, abstrato.
- OBMEP: nível 1 para 6º e 7º anos, nível 2 para 8º e 9º, nível 3 para o ensino médio; a Olimpíada Mirim atende do 2º ao 5º ano (Mirim 1: 2º e 3º; Mirim 2: 4º e 5º).
- ITA, vestibular 2027: primeira fase com 48 questões objetivas (12 de matemática, 12 de física, 12 de química, 12 de inglês); segunda fase com 10 questões dissertativas de matemática, de física e de química, 15 objetivas de português e redação.

Fontes: BNCC (Ministério da Educação); `nel.moe.edu.sg` (NEL Framework 2022 e *Educators' Guide for Numeracy*); programa de matemática primária de Singapura, 2021; páginas da OBMEP e da Olimpíada Mirim (IMPA); edital e cobertura do vestibular ITA 2027. As informações de olimpíadas e do ITA vieram de reportagens e páginas de terceiros que citam os regulamentos: conferir no regulamento oficial antes de usar em decisão.

Ainda não pesquisado, e portanto sem currículo definido: programas completos do ITA e do IME por disciplina; programas da OBM e das olimpíadas de física, química, biologia, astronomia e informática; IB e Cambridge; BNCC do ensino fundamental, habilidade por habilidade; evidências sobre alfabetização além do que está em `FUNDAMENTOS_PEDAGOGICOS.md`. Cada trilha nova começa por essa comparação, na sua área e na sua idade.

### Onde a realidade está longe da meta

- O Jr. tem uma trilha (2 a 6 anos) e aulas para uma criança de 2 anos. De 6 a 15 não há currículo.
- Dos 16 aos 18 não há nada: o Jr. termina aos 15 e a Academia é formação cultural adulta, com 25 aulas por disciplina. Nenhum dos dois ensina matemática, física e química no nível do ITA. Essa ponte precisa de decisão: terceira etapa do Jr. ou percurso próprio na Academia.
- A diretriz não muda a ordem de trabalho: uma trilha por vez, usada e revista antes da seguinte.

## Privacidade de menores

- Nenhum repositório recebe nome, data de nascimento, foto, tarefa feita ou observação de criança.
- Material público não traz idade com precisão maior que anos e meses, nem combinações que permitam chegar à data de nascimento.
- Fotos de tarefa não mostram o rosto e só saem do aparelho por decisão do adulto.
- Jogos: sem ranking entre crianças, sem recompensa por tempo de uso, com limite de tela.
