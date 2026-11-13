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

### A trajetória-alvo: tudo até os 15

Decisão do responsável em 12/11/2026: o Jr., do nascimento aos 15 anos, é a preparação completa. Ao fim dele o aluno deve ter o conteúdo de toda a educação básica, ensino médio incluído, em todas as matérias, no nível que permite prestar aos 16 qualquer vestibular exigente, com o ITA como referência. Não há etapa separada dos 16 aos 18.

O que isso significa, sem atenuar:

- No percurso escolar comum, o ensino médio termina por volta dos 17 anos. Terminar o conteúdo aos 15 é adiantar cerca de dois anos **e**, além disso, ir mais fundo do que a escola vai. É a trajetória de poucos alunos.
- Por isso é trajetória-alvo, não calendário. O que move o aluno é o domínio demonstrado. Quem anda mais devagar segue no próprio ritmo, sem rótulo, e chega mais tarde ao mesmo lugar.
- O adiantamento vem de não perder tempo (ensino por domínio, sem repetir o que já se sabe, bases muito sólidas até os 8 anos), nunca de mais horas de estudo à custa de sono e brincadeira.

| Idade | Conteúdo-alvo | Referência de exigência | O que não fazer |
|---|---|---|---|
| 0 a 5 | linguagem, vocabulário, consciência fonológica, senso numérico, curiosidade, coordenação, por brincadeira | BNCC da Educação Infantil; quadro NEL de Singapura (4 a 6 anos); trajetórias de Clements e Sarama | alfabetização formal, contas escritas, qualquer treino de prova |
| 6 a 8 | alfabetização sólida e o essencial dos anos iniciais do fundamental (1º ao 5º), com aritmética compreendida | BNCC; matemática primária de Singapura (concreto, pictórico, abstrato); Olimpíada Mirim | velocidade antes de compreensão |
| 9 a 11 | anos finais do fundamental (6º ao 9º): álgebra inicial, geometria, escrita estruturada, ciências por investigação, problemas não rotineiros | OBMEP níveis 1 e 2; Singapura P5 e P6 e secundário inicial | preparação intensiva; pular demonstração |
| 12 a 15 | ensino médio completo e aprofundamento: matemática, física e química no nível de problemas olímpicos e do ITA; redação argumentativa; literatura; história, geografia, filosofia, biologia, inglês | OBMEP nível 3, OBM, olimpíadas de física e química; programas do ITA e do IME; IB, Cambridge, SAT | treino de prova no lugar de compreensão |
| 16 | exame | ITA, IME ou outro vestibular, no Brasil ou fora | — |

As faixas de 6 a 15 são proposta inicial, a rever quando os programas oficiais forem pesquisados (item E6 do plano) e, principalmente, quando houver alunos reais nelas.

### A barreira que não é pedagógica: o certificado

Saber o conteúdo aos 15 não basta para se matricular. Conferido em 12/11/2026:

- O ITA não tem idade mínima, mas exige o ensino médio concluído ou em conclusão no ano do concurso, com certificado. Quem não cumpre a escolaridade faz a prova só como treineiro, sem direito à vaga.
- O Encceja, exame que certifica o ensino médio fora da escola, exige 18 anos completos; a emancipação não muda isso.
- A educação domiciliar continua sem lei federal. O projeto que a regulamenta (PL 1338/2022) foi aprovado na Câmara em 2022 e segue no Senado; em 2018 o STF reconheceu a opção das famílias, mas condicionou a prática a uma lei.

Consequência: para prestar o ITA aos 16 valendo vaga, o aluno precisa de uma **escola que certifique** a conclusão do ensino médio nessa idade. A LDB permite à escola avançar o aluno por verificação de aprendizado, mas isso depende de cada escola e do sistema de ensino. É assunto para tratar com a escola e, se preciso, com um advogado, anos antes. A Academia ensina; ela não emite certificado.

### Limites que a ambição não ultrapassa

Sono, saúde, brincadeira, convivência familiar e desenvolvimento emocional não são sacrificados por desempenho precoce. Nenhum conteúdo avançado entra sem os pré-requisitos. Quem precisa de reforço recebe intervenção, sem rótulo. Limite de tela e ausência de ranking continuam valendo.

### O que foi conferido e o que falta pesquisar

Conferido em 12/11/2026:

- BNCC, Educação Infantil, campo "Espaços, tempos, quantidades, relações e transformações": EI02ET07 (contar oralmente objetos, pessoas, livros etc., em contextos diversos) e EI03ET07 (relacionar números às quantidades e identificar o antes, o depois e o entre numa sequência). A trilha "Número e quantidade" cobre os dois e vai além.
- Singapura: o quadro *Nurturing Early Learners* (MOE, 2022) orienta o ensino de 4 a 6 anos; em numeramento trata de relações e padrões, contagem e senso numérico, formas e noções espaciais, e cita Clements e Sarama (2009), a mesma base da nossa trilha. O programa de matemática primária (MOE, 2021) adota a sequência concreto, pictórico, abstrato.
- OBMEP: nível 1 para 6º e 7º anos, nível 2 para 8º e 9º, nível 3 para o ensino médio; a Olimpíada Mirim atende do 2º ao 5º ano (Mirim 1: 2º e 3º; Mirim 2: 4º e 5º).
- ITA, vestibular 2027 (requisitos: brasileiro nato, ensino médio concluído ou em conclusão no ano, não completar 25 anos até o fim do ano da matrícula): primeira fase com 48 questões objetivas (12 de matemática, 12 de física, 12 de química, 12 de inglês); segunda fase com 10 questões dissertativas de matemática, de física e de química, 15 objetivas de português e redação.

Fontes: BNCC (Ministério da Educação); `nel.moe.edu.sg` (NEL Framework 2022 e *Educators' Guide for Numeracy*); programa de matemática primária de Singapura, 2021; páginas da OBMEP e da Olimpíada Mirim (IMPA); edital e cobertura do vestibular ITA 2027. As informações de olimpíadas e do ITA vieram de reportagens e páginas de terceiros que citam os regulamentos: conferir no regulamento oficial antes de usar em decisão.

Ainda não pesquisado, e portanto sem currículo definido: programas completos do ITA e do IME por disciplina; programas da OBM e das olimpíadas de física, química, biologia, astronomia e informática; IB e Cambridge; BNCC do ensino fundamental, habilidade por habilidade; evidências sobre alfabetização além do que está em `FUNDAMENTOS_PEDAGOGICOS.md`. Cada trilha nova começa por essa comparação, na sua área e na sua idade.

### Onde a realidade está longe da meta

- O Jr. tem uma trilha (2 a 6 anos) e aulas para uma criança de 2 anos. De 6 a 15 não há currículo.
- Dos 6 aos 15, onde deve caber todo o fundamental e o médio em nível de ITA, não existe nada: nem trilhas, nem aulas, nem banco de problemas. É a maior parte do trabalho do projeto.
- A Academia adulta (25 aulas por disciplina) é formação cultural e não serve de apoio para matemática, física e química nesse nível.
- A diretriz não muda a ordem de trabalho: uma trilha por vez, usada e revista antes da seguinte.

## Privacidade de menores

- Nenhum repositório recebe nome, data de nascimento, foto, tarefa feita ou observação de criança.
- Material público não traz idade com precisão maior que anos e meses, nem combinações que permitam chegar à data de nascimento.
- Fotos de tarefa não mostram o rosto e só saem do aparelho por decisão do adulto.
- Jogos: sem ranking entre crianças, sem recompensa por tempo de uso, com limite de tela.
