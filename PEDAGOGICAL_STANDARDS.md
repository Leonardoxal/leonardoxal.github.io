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

## Privacidade de menores

- Nenhum repositório recebe nome, data de nascimento, foto, tarefa feita ou observação de criança.
- Material público não traz idade com precisão maior que anos e meses, nem combinações que permitam chegar à data de nascimento.
- Fotos de tarefa não mostram o rosto e só saem do aparelho por decisão do adulto.
- Jogos: sem ranking entre crianças, sem recompensa por tempo de uso, com limite de tela.
