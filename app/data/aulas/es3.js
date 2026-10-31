// Estatística III — interpretações da probabilidade e grandes debates (etapas 6 e 7 do percurso de Estatística).
// Probabilidade clássica, frequentista e subjetiva; inferência frequentista e bayesiana;
// valores-p e crise de replicação; causalidade, paradoxo de Simpson e manipulação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'es3-1', titulo: 'O que é probabilidade? Interpretações clássica, frequentista e subjetiva', duracao: '150 min',
  aprendera: ['Distinguir as interpretações da probabilidade', 'Aplicar cada uma a exemplos', 'Reconhecer os limites de cada interpretação', 'Relacionar probabilidade e conhecimento'],
  prereq: ['Estatística II (módulo ES2)'],
  explicacao: `
<h3>O problema</h3>
<p>"A chance de chover amanhã é 70%." "A probabilidade de cara é 1/2." "Há 90% de probabilidade de que o réu seja culpado." A palavra é a mesma, mas significa a mesma coisa?</p>
<h3>Clássica</h3>
<p>Para Laplace, probabilidade é a razão entre casos favoráveis e casos possíveis igualmente prováveis ${tag('fato')}. Funciona para dados e moedas, mas pressupõe saber quais casos são igualmente prováveis ${tag('argumento')}.</p>
<h3>Frequentista</h3>
<p>Na interpretação frequentista, desenvolvida por autores como John Venn e Richard von Mises, probabilidade é o limite da frequência relativa em repetições indefinidas ${tag('fato')}. Aplica-se bem a fenômenos repetíveis, mas tem dificuldade com eventos únicos, como "a probabilidade de que um certo candidato vença esta eleição" ${tag('interpretacao')}.</p>
<h3>Subjetiva ou bayesiana</h3>
<p>Para Frank Ramsey e Bruno de Finetti, probabilidade é o grau de crença racional de alguém, coerente com as regras do cálculo e atualizado pelas evidências ${tag('fato')}. Aplica-se a eventos únicos, mas é criticada por depender de crenças iniciais ${tag('debate')}.</p>
<h3>Propensão</h3>
<p>Karl Popper propôs a probabilidade como propensão física de um sistema a produzir certos resultados ${tag('fato')}.</p>
<h3>Probabilidade e conhecimento</h3>
<p>A tradição filosófica já distinguia o certo do provável: Aristóteles admitia, em matérias contingentes, o que acontece "na maioria dos casos" ${tag('fato')}. As interpretações modernas podem ser vistas como respostas complementares a usos diferentes da palavra ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Probabilidade clássica', 'Casos favoráveis sobre possíveis igualmente prováveis.'],
    ['Probabilidade frequentista', 'Limite da frequência relativa em repetições.'],
    ['Probabilidade subjetiva', 'Grau de crença racional e coerente.'],
    ['Propensão', 'Tendência física de um sistema a produzir resultados.'],
    ['Coerência', 'Exigência de que as crenças obedeçam às regras da probabilidade.'],
  ],
  exemplos: `<p><strong>Três perguntas:</strong> "qual a probabilidade de sair 6 num dado?" — clássica: 1/6. "Qual a probabilidade de um recém-nascido ser menino?" — frequentista: cerca de 0,51, observada em milhões de nascimentos. "Qual a probabilidade de existir água em certo planeta?" — subjetiva: um grau de crença baseado nas evidências disponíveis, que muda com novas observações.</p>`,
  contexto: `<p><strong>No mundo:</strong> previsões meteorológicas, seguros e apostas usam interpretações diferentes da probabilidade ${tag('fato')}. <strong>No Brasil:</strong> o INMET divulga previsões com probabilidade de chuva ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nenhuma interpretação cobre todos os usos', tag: 'argumento',
    premissas: ['Alguns eventos têm simetria conhecida (dados), outros são repetíveis (nascimentos), outros são únicos (uma eleição).', 'A interpretação clássica exige simetria; a frequentista, repetição; a subjetiva serve a eventos únicos, mas depende de crenças.', 'Cada uma se ajusta melhor a um tipo de uso.'],
    conclusao: 'Logo, é prudente identificar qual interpretação está em jogo em cada afirmação probabilística.',
    nota: 'Todas obedecem às mesmas regras matemáticas; diferem no significado.',
  },
  objecoes: [
    { objecao: 'Probabilidade subjetiva é só opinião, sem valor científico.', tag: 'debate',
      resposta: 'A probabilidade subjetiva não é opinião arbitrária: exige coerência com as regras do cálculo e atualização pelas evidências. Com muitos dados, crenças iniciais diferentes tendem a convergir. Críticos, porém, apontam o peso das crenças iniciais quando os dados são poucos.' },
  ],
  aplicacao: `<p>Recolha cinco afirmações com probabilidade (previsão do tempo, seguro, medicina, esporte, jurídica) e classifique a interpretação mais adequada a cada uma, justificando.</p>`,
  fonte: {
    obra: 'Ian Hacking, An Introduction to Probability and Inductive Logic (2001), capítulos sobre as interpretações', link: null,
    orientacao: `<p>Observe como Hacking distingue probabilidade de frequência e de crença.</p>`,
  },
  perguntas: [
    { p: 'Qual a interpretação frequentista da probabilidade?', r: 'O limite da frequência relativa em repetições indefinidas.' },
    { p: 'Que autores associamos à probabilidade subjetiva?', r: 'Ramsey e de Finetti.' },
    { p: 'Qual a dificuldade da interpretação frequentista?', r: 'Aplicar-se a eventos únicos.' },
  ],
  exercicios: [
    mc('"1/6 de chance de sair 6" é interpretação:', ['Clássica', 'Subjetiva', 'Propensão', 'Nenhuma'], 0, 'Simetria.'),
    mc('Probabilidade como limite de frequência é a interpretação:', ['Clássica', 'Frequentista', 'Subjetiva', 'Jurídica'], 1, 'Venn, von Mises.'),
    mc('A propensão é associada a:', ['Popper', 'Laplace', 'Graunt', 'Fisher'], 0, 'Física.'),
    mc('A interpretação adequada a eventos únicos é a:', ['Frequentista', 'Subjetiva', 'Clássica', 'Nenhuma'], 1, 'Crença.'),
    mc('Todas as interpretações obedecem às mesmas:', ['Opiniões', 'Regras matemáticas', 'Leis', 'Crenças'], 1, 'Cálculo.'),
    disc('Classifique a interpretação de cinco afirmações probabilísticas, justificando.', ['Afirmações', 'Classificação', 'Justificativa', 'Limites']),
  ],
  resumo: ['Clássica: simetria.', 'Frequentista: repetição.', 'Subjetiva: crença coerente.', 'Propensão: Popper.', 'Mesmo cálculo, significados diferentes.'],
  referencias: [
    { texto: 'Ian Hacking, An Introduction to Probability and Inductive Logic (2001).' },
    { texto: 'Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814).' },
    { texto: 'Aristóteles, Física, livro II (acaso e o que ocorre na maioria dos casos).', livro: 'aristoteles-fisica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação das afirmações', 'Ler a fonte indicada'],
  revisao: [['Clássica', 'Simetria.'], ['Frequentista', 'Repetição.'], ['Subjetiva', 'Crença.']],
  avancado: {
    texto: `<h3>O argumento do livro holandês</h3>
<p>Ramsey e de Finetti mostraram que, se os graus de crença de alguém violam as regras da probabilidade, é possível montar um conjunto de apostas que essa pessoa aceitaria e em que perderia com certeza — um "livro holandês" ${tag('fato')}. O argumento justifica a exigência de coerência ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ian Hacking, An Introduction to Probability and Inductive Logic (2001).' }],
    exercicios: [
      mc('O livro holandês mostra a necessidade de:', ['Coerência', 'Sorte', 'Riqueza', 'Repetição'], 0, 'Apostas.'),
      mc('Crer 60% em A e 60% em não-A é:', ['Coerente', 'Incoerente', 'Frequentista', 'Clássico'], 1, 'Soma 120%.'),
      mc('O argumento é associado a:', ['Ramsey e de Finetti', 'Graunt e Petty', 'Galton e Pearson', 'Pascal e Fermat'], 0, 'Subjetivistas.'),
      disc('Monte um exemplo de livro holandês contra crenças incoerentes e explique-o.', ['Crenças', 'Apostas', 'Perda certa', 'Lição'])],
  },
}),

aula({
  id: 'es3-2', titulo: 'Inferência frequentista e bayesiana: o teorema de Bayes na prática', duracao: '150 min',
  aprendera: ['Aplicar o teorema de Bayes', 'Explicar a negligência da taxa-base', 'Distinguir intervalo de confiança e intervalo de credibilidade', 'Comparar as duas escolas de inferência'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Um teste para uma doença dá positivo. Qual a chance de a pessoa estar doente? Quase todos respondem errado.</p>
<h3>O teorema de Bayes</h3>
<p>O teorema de Bayes atualiza a probabilidade de uma hipótese à luz de uma evidência: a probabilidade final é proporcional à probabilidade inicial multiplicada pela probabilidade da evidência se a hipótese for verdadeira ${tag('fato')}.</p>
<h3>Um cálculo</h3>
<p>Suponha uma doença com prevalência de 1%, um teste que detecta 90% dos doentes (sensibilidade) e dá negativo em 95% dos sãos (especificidade) ${tag('fato')}. Em 10.000 pessoas: 100 doentes, dos quais 90 testam positivo; 9.900 sãos, dos quais 495 testam positivo ${tag('fato')}. Dos 585 positivos, só 90 estão doentes: cerca de 15% ${tag('fato')}. A intuição esquece a taxa-base, a raridade da doença — é a "negligência da taxa-base" ${tag('fato')}.</p>
<h3>As duas escolas</h3>
<p>Na inferência frequentista, o parâmetro é fixo e desconhecido; probabilidades descrevem procedimentos em repetições ${tag('fato')}. Um intervalo de 95% de confiança significa que o método produz intervalos que contêm o parâmetro em 95% das amostras ${tag('fato')}. Na inferência bayesiana, atribui-se ao parâmetro uma distribuição inicial, atualizada pelos dados; um intervalo de credibilidade de 95% diz que, dados o modelo e a distribuição inicial, há 95% de probabilidade de o parâmetro estar nele ${tag('fato')}.</p>
<h3>Qual usar?</h3>
<p>Frequentistas valorizam a objetividade dos procedimentos; bayesianos, a incorporação explícita do conhecimento prévio ${tag('debate')}. Muitos estatísticos usam ambas conforme o problema ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Teorema de Bayes', 'Regra para atualizar a probabilidade de uma hipótese com evidências.'],
    ['Prevalência (taxa-base)', 'Proporção da condição na população.'],
    ['Sensibilidade', 'Proporção de doentes que o teste detecta.'],
    ['Especificidade', 'Proporção de sãos com teste negativo.'],
    ['Intervalo de credibilidade', 'Intervalo bayesiano com probabilidade dada de conter o parâmetro.'],
  ],
  exemplos: `<p><strong>Tabela de 10.000 pessoas:</strong> doentes e positivos: 90; doentes e negativos: 10; sãos e positivos: 495; sãos e negativos: 9.405. Lendo a coluna dos positivos: 90 ÷ (90 + 495) ≈ 15%. Montar a tabela com números inteiros é o modo mais seguro de aplicar Bayes sem fórmulas.</p>`,
  contexto: `<p><strong>No mundo:</strong> estudos mostraram que muitos médicos superestimam a probabilidade de doença após um teste positivo quando a doença é rara ${tag('fato')}. <strong>No Brasil:</strong> programas de rastreamento do Ministério da Saúde discutem falsos positivos e critérios de idade ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que um teste positivo pode significar pouco', tag: 'argumento',
    premissas: ['Quando a doença é rara, os sãos são muitíssimo mais numerosos que os doentes.', 'Mesmo uma pequena taxa de falsos positivos entre muitos sãos gera muitos positivos falsos.', 'Esses podem superar os positivos verdadeiros.'],
    conclusao: 'Logo, a probabilidade de doença após teste positivo depende fortemente da prevalência.',
    nota: 'Por isso se confirmam resultados com um segundo teste e se rastreiam grupos de maior risco.',
  },
  objecoes: [
    { objecao: 'Se o teste acerta 90% e 95%, um positivo deve significar 90% de chance de doença.', tag: 'argumento',
      resposta: 'Essa confusão troca "probabilidade de positivo dado doente" por "probabilidade de doente dado positivo". São perguntas diferentes, e só a segunda interessa ao paciente; ela depende da prevalência, como a tabela mostra.' },
  ],
  aplicacao: `<p>Resolva com a tabela de 10.000 pessoas o mesmo problema com prevalência de 10%, compare com o caso de 1% e escreva um parágrafo explicando a diferença a um paciente.</p>`,
  fonte: {
    obra: 'Thomas Bayes, Ensaio para resolver um problema na doutrina das probabilidades (1763), com a introdução de Richard Price', link: null,
    orientacao: `<p>Observe como Price apresenta o problema: inferir a probabilidade de um evento a partir das vezes em que ocorreu.</p>`,
  },
  perguntas: [
    { p: 'Com prevalência de 1%, sensibilidade 90% e especificidade 95%, qual a chance de doença após positivo?', r: 'Cerca de 15%.' },
    { p: 'O que é a negligência da taxa-base?', r: 'Ignorar a raridade da condição ao interpretar uma evidência.' },
    { p: 'O que significa um intervalo de 95% de confiança?', r: 'Que o método produz intervalos que contêm o parâmetro em 95% das amostras.' },
  ],
  exercicios: [
    mc('Em 10.000 pessoas com prevalência de 1%, há quantos doentes?', ['10', '100', '1.000', '9.900'], 1, '1%.'),
    mc('Com especificidade de 95%, entre 9.900 sãos, quantos falsos positivos?', ['95', '495', '990', '9.405'], 1, '5% de 9.900.'),
    mc('A proporção de doentes entre os positivos no exemplo é cerca de:', ['90%', '50%', '15%', '1%'], 2, '90 ÷ 585.'),
    mc('Na inferência bayesiana, o parâmetro recebe:', ['Valor fixo sem probabilidade', 'Distribuição inicial', 'Nada', 'Um teste'], 1, 'Atualização.'),
    mc('Proporção de doentes que o teste detecta é a:', ['Especificidade', 'Sensibilidade', 'Prevalência', 'Confiança'], 1, 'Definição.'),
    disc('Resolva o problema do teste com prevalência de 10%, compare com 1% e explique a um paciente.', ['Tabela', 'Cálculo', 'Comparação', 'Explicação']),
  ],
  resumo: ['Bayes: inicial × verossimilhança.', 'Prevalência 1%: positivo ≈ 15%.', 'Negligência da taxa-base.', 'Confiança × credibilidade.', 'Duas escolas, usos complementares.'],
  referencias: [
    { texto: 'Thomas Bayes, Ensaio para resolver um problema na doutrina das probabilidades (1763).' },
    { texto: 'Gerd Gigerenzer, Calculated Risks (2002).' },
    { texto: 'Ian Hacking, An Introduction to Probability and Inductive Logic (2001).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o problema resolvido', 'Ler a fonte indicada'],
  revisao: [['15%', 'Positivo com doença rara.'], ['Taxa-base', 'Não esquecer.'], ['Credibilidade', 'Bayesiana.']],
  avancado: {
    texto: `<h3>A falácia do promotor</h3>
<p>Num julgamento, confundir "a probabilidade desta evidência se o réu for inocente" com "a probabilidade de o réu ser inocente dada esta evidência" é a falácia do promotor ${tag('fato')}. No caso de Sally Clark, no Reino Unido, uma estatística mal usada sobre mortes súbitas de bebês contribuiu para uma condenação depois anulada (2003) ${tag('fato')}. A Royal Statistical Society criticou publicamente o uso do número ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Gerd Gigerenzer, Calculated Risks (2002).' }],
    exercicios: [
      mc('A falácia do promotor troca:', ['P(evidência | inocente) por P(inocente | evidência)', 'Média por mediana', 'Amostra por população', 'Nada'], 0, 'Inversão.'),
      mc('A condenação de Sally Clark foi:', ['Mantida', 'Anulada', 'Ampliada', 'Nunca julgada'], 1, '2003.'),
      mc('Quem criticou o uso da estatística no caso foi a:', ['Royal Statistical Society', 'OCDE', 'ONU', 'IBGE'], 0, 'Sociedade científica.'),
      disc('Explique a falácia do promotor com um exemplo hipotético e mostre o cálculo correto.', ['Exemplo', 'Erro', 'Cálculo correto', 'Lição'])],
  },
}),

aula({
  id: 'es3-3', titulo: 'Valores-p, significância e a crise de replicação', duracao: '150 min',
  aprendera: ['Definir corretamente o valor-p', 'Reconhecer interpretações erradas', 'Explicar a crise de replicação e o p-hacking', 'Conhecer as recomendações da ASA (2016)'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"O resultado foi estatisticamente significativo (p < 0,05)." O que isso quer dizer — e o que não quer?</p>
<h3>Definição</h3>
<p>O valor-p é a probabilidade de obter um resultado tão extremo quanto o observado, ou mais, supondo que a hipótese nula seja verdadeira ${tag('fato')}. Um p pequeno indica que os dados seriam surpreendentes se a nula fosse verdadeira ${tag('fato')}.</p>
<h3>O que o valor-p não é</h3>
<p>Não é a probabilidade de a hipótese nula ser verdadeira; não mede o tamanho nem a importância do efeito; e p < 0,05 não é linha mágica entre verdadeiro e falso ${tag('fato')}. Em 2016, a American Statistical Association publicou uma declaração com esses princípios e recomendou não basear conclusões apenas em limiares de significância ${tag('fato')}.</p>
<h3>A crise de replicação</h3>
<p>Em 2015, um grande projeto colaborativo tentou replicar 100 estudos de psicologia publicados e obteve resultados significativos em cerca de 36% das replicações, contra cerca de 97% dos originais ${tag('fato')}. John Ioannidis argumentou em 2005 que, por vieses e baixo poder estatístico, muitos achados publicados seriam falsos ${tag('fato')}.</p>
<h3>Causas e remédios</h3>
<p>O "p-hacking" consiste em testar muitas análises e relatar só as significativas; o viés de publicação favorece resultados positivos ${tag('fato')}. Remédios propostos: pré-registro de hipóteses e análises, amostras maiores, publicação de resultados nulos, relatar tamanhos de efeito e intervalos ${tag('fato')}. Honestidade intelectual é virtude científica e moral ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Valor-p', 'Probabilidade de resultado tão ou mais extremo, supondo a nula verdadeira.'],
    ['Significância estatística', 'Valor-p abaixo de um limiar convencionado.'],
    ['P-hacking', 'Testar muitas análises e relatar só as significativas.'],
    ['Viés de publicação', 'Tendência a publicar mais resultados positivos.'],
    ['Pré-registro', 'Registro público prévio das hipóteses e análises.'],
  ],
  exemplos: `<p><strong>Vinte testes:</strong> um pesquisador testa se 20 alimentos diferentes estão associados a dor de cabeça, sem nenhum efeito real. Com limiar de 5%, espera-se em média 1 resultado "significativo" por puro acaso. Se ele publica só esse, a manchete "alimento X causa dor de cabeça" nasce de um falso positivo.</p>`,
  contexto: `<p><strong>No mundo:</strong> revistas e agências passaram a exigir pré-registro de ensaios clínicos ${tag('fato')}. <strong>No Brasil:</strong> o Registro Brasileiro de Ensaios Clínicos (ReBEC) registra estudos clínicos realizados no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que muitos testes geram falsos positivos', tag: 'argumento',
    premissas: ['Cada teste com limiar de 5% tem 5% de chance de falso positivo quando não há efeito.', 'Com muitos testes, a chance de ao menos um falso positivo cresce rapidamente.', 'Relatar só os positivos esconde os muitos testes feitos.'],
    conclusao: 'Logo, conclusões confiáveis exigem declarar todas as análises feitas ou corrigir para comparações múltiplas.',
    nota: 'Com 20 testes independentes sem efeito, a chance de ao menos um p < 0,05 é cerca de 64%.',
  },
  objecoes: [
    { objecao: 'A crise de replicação prova que a ciência não é confiável.', tag: 'debate',
      resposta: 'A crise foi descoberta pela própria ciência, por meio de replicações — sinal de que ela se corrige. Ela mostra que estudos isolados, pequenos e não replicados merecem cautela, e que boas práticas aumentam a confiabilidade. Desconfiar de tudo é tão errado quanto confiar em tudo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio sobre o que um valor-p significa e o que não significa, analisando um caso real de má interpretação noticiado na imprensa.</p>`,
  fonte: {
    obra: 'Ronald L. Wasserstein e Nicole A. Lazar, "The ASA Statement on p-Values: Context, Process, and Purpose", The American Statistician (2016)', link: null,
    orientacao: `<p>Leia os seis princípios e reescreva cada um com suas palavras e um exemplo.</p>`,
  },
  perguntas: [
    { p: 'O que é o valor-p?', r: 'A probabilidade de resultado tão ou mais extremo, supondo a hipótese nula verdadeira.' },
    { p: 'O valor-p é a probabilidade de a nula ser verdadeira?', r: 'Não.' },
    { p: 'Que porcentagem das replicações do projeto de 2015 foi significativa?', r: 'Cerca de 36%.' },
  ],
  exercicios: [
    mc('Um valor-p pequeno indica que os dados seriam:', ['Impossíveis', 'Surpreendentes se a nula fosse verdadeira', 'A prova da alternativa', 'Irrelevantes'], 1, 'Definição.'),
    mc('A declaração da ASA sobre valores-p é de:', ['1925', '1933', '2005', '2016'], 3, 'Princípios.'),
    mc('Testar muitas análises e relatar só as significativas é:', ['Pré-registro', 'P-hacking', 'Replicação', 'Amostragem'], 1, 'Má prática.'),
    mc('O artigo de Ioannidis é de:', ['1990', '2005', '2015', '2020'], 1, 'Achados falsos.'),
    mc('O valor-p mede o tamanho do efeito?', ['Sim', 'Não', 'Só em amostras grandes', 'Só em medicina'], 1, 'ASA.'),
    disc('Escreva um ensaio sobre o que o valor-p significa e não significa, com um caso real.', ['Definição', 'Erros', 'Caso', 'Lição']),
  ],
  resumo: ['Valor-p: dados extremos sob a nula.', 'Não é P(nula verdadeira).', 'ASA (2016).', 'Replicação (2015): ~36%.', 'P-hacking; pré-registro.'],
  referencias: [
    { texto: 'Ronald L. Wasserstein e Nicole A. Lazar, "The ASA Statement on p-Values" (2016).' },
    { texto: 'Open Science Collaboration, "Estimating the reproducibility of psychological science", Science (2015).' },
    { texto: 'John P. A. Ioannidis, "Why most published research findings are false", PLoS Medicine (2005).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['Valor-p', 'Sob a nula.'], ['P-hacking', 'Muitos testes.'], ['Pré-registro', 'Remédio.']],
  avancado: {
    texto: `<h3>Poder estatístico</h3>
<p>Poder é a probabilidade de detectar um efeito quando ele existe; depende do tamanho do efeito, do tamanho da amostra e do limiar ${tag('fato')}. Estudos com baixo poder não só perdem efeitos reais como, quando encontram significância, tendem a exagerar o tamanho do efeito ${tag('fato')}. Calcular o tamanho da amostra antes de coletar dados é boa prática ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John P. A. Ioannidis, "Why most published research findings are false" (2005).' }],
    exercicios: [
      mc('Poder é a probabilidade de:', ['Errar sempre', 'Detectar um efeito existente', 'Rejeitar a nula verdadeira', 'Publicar'], 1, 'Definição.'),
      mc('Aumentar a amostra tende a:', ['Diminuir o poder', 'Aumentar o poder', 'Não mudar nada', 'Eliminar o efeito'], 1, 'Tamanho.'),
      mc('Estudos de baixo poder significativos tendem a:', ['Subestimar o efeito', 'Exagerar o efeito', 'Acertar sempre', 'Não publicar'], 1, 'Exagero.'),
      disc('Explique por que calcular o tamanho da amostra antes da coleta melhora a pesquisa.', ['Poder', 'Tamanho', 'Riscos', 'Boa prática'])],
  },
}),

aula({
  id: 'es3-4', titulo: 'Causalidade, paradoxo de Simpson e uso político das estatísticas', duracao: '150 min',
  aprendera: ['Explicar o paradoxo de Simpson', 'Aplicar os critérios de Bradford Hill', 'Reconhecer manipulações estatísticas no debate público', 'Usar estatísticas com honestidade'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Um tratamento é melhor em cada grupo de pacientes, mas pior no total. Como é possível? E como saber se algo causa outra coisa sem experimento?</p>
<h3>O paradoxo de Simpson</h3>
<p>Num estudo sobre cálculos renais (1986), o tratamento A teve sucesso em 93% dos cálculos pequenos (81 de 87) e 73% dos grandes (192 de 263); o B, em 87% dos pequenos (234 de 270) e 69% dos grandes (55 de 80) ${tag('fato')}. A foi melhor nos dois grupos, mas no total A teve 78% (273 de 350) e B 83% (289 de 350), porque A foi usado mais nos casos graves ${tag('fato')}. Agregar grupos diferentes pode inverter a conclusão ${tag('argumento')}.</p>
<h3>Causalidade sem experimento</h3>
<p>Para fumo e câncer de pulmão, não era ético fazer experimentos em pessoas. Richard Doll e Austin Bradford Hill acumularam estudos observacionais, e Hill propôs em 1965 critérios para julgar causalidade: força da associação, consistência, especificidade, temporalidade, gradiente dose-resposta, plausibilidade, coerência, evidência experimental e analogia ${tag('fato')}. Não são regras automáticas, mas pontos de juízo ${tag('interpretacao')}.</p>
<h3>Uso político</h3>
<p>Manipulações comuns: escolher o período que favorece a tese, comparar números absolutos quando a população mudou, apresentar risco relativo sem o absoluto, mudar a definição do indicador, mostrar só a média ${tag('fato')}. Contra isso: perguntar pela fonte, pela definição, pela série completa e pela comparação adequada ${tag('interpretacao')}.</p>
<h3>Verdade</h3>
<p>O Catecismo ensina que a mentira consiste em dizer o falso com intenção de enganar, e que a verdade deve guiar a comunicação pública (CIC 2482–2492) ${tag('doutrina')}. Enganar com números verdadeiros mal apresentados também fere a veracidade ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Paradoxo de Simpson', 'Inversão de uma associação ao agregar grupos diferentes.'],
    ['Critérios de Bradford Hill', 'Pontos para julgar causalidade a partir de estudos observacionais (1965).'],
    ['Gradiente dose-resposta', 'Efeito que cresce com a intensidade da exposição.'],
    ['Risco relativo', 'Razão entre riscos de dois grupos.'],
    ['Risco absoluto', 'Probabilidade do evento num grupo.'],
  ],
  exemplos: `<p><strong>Risco relativo e absoluto:</strong> "Remédio reduz em 50% o risco de infarto." Se o risco passou de 2 em 1.000 para 1 em 1.000, a redução absoluta é de 1 em 1.000: é preciso tratar 1.000 pessoas para evitar um infarto. A mesma verdade, apresentada de dois modos, causa impressões muito diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> os estudos de Doll e Hill sobre médicos britânicos fumantes começaram nos anos 1950 ${tag('fato')}. <strong>No Brasil:</strong> as advertências sanitárias nos maços de cigarro baseiam-se nessa evidência acumulada ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que agregar pode enganar', tag: 'argumento',
    premissas: ['Grupos diferem em fatores que afetam o resultado (gravidade, idade, renda).', 'Se esses fatores se distribuem desigualmente entre os tratamentos, o total mistura efeito do tratamento e efeito do fator.', 'Analisar por grupo controla esse fator.'],
    conclusao: 'Logo, antes de comparar totais, é preciso verificar se os grupos são comparáveis.',
    nota: 'Nem sempre o desagregado é a resposta certa: depende da estrutura causal do problema.',
  },
  objecoes: [
    { objecao: 'Sem experimento nunca se pode afirmar causalidade.', tag: 'debate',
      resposta: 'O caso do fumo mostra que evidências observacionais convergentes, fortes, consistentes e com gradiente podem justificar conclusões causais quando experimentos são impossíveis ou antiéticos. O cuidado é não tirar conclusões causais de uma única correlação.' },
  ],
  aplicacao: `<p>Encontre no debate público uma estatística usada de modo enganoso (período escolhido, risco relativo sem absoluto, definição alterada) e reescreva a informação de modo honesto, indicando a fonte.</p>`,
  fonte: {
    obra: 'Austin Bradford Hill, "The environment and disease: association or causation?", Proceedings of the Royal Society of Medicine (1965)', link: null,
    orientacao: `<p>Liste os nove pontos de Hill e aplique-os ao caso do fumo e câncer.</p>`,
  },
  perguntas: [
    { p: 'O que é o paradoxo de Simpson?', r: 'A inversão de uma associação quando se agregam grupos diferentes.' },
    { p: 'Cite três critérios de Bradford Hill.', r: 'Por exemplo: força, consistência e temporalidade.' },
    { p: 'Por que informar o risco absoluto?', r: 'Porque o relativo isolado pode exagerar a impressão do efeito.' },
  ],
  exercicios: [
    mc('No estudo dos cálculos renais, o tratamento A no total teve:', ['93%', '78%', '83%', '73%'], 1, '273 ÷ 350.'),
    mc('Os critérios de causalidade de Hill são de:', ['1925', '1950', '1965', '1986'], 2, 'Artigo.'),
    mc('O efeito que cresce com a exposição é o:', ['Gradiente dose-resposta', 'Viés de seleção', 'Valor-p', 'Paradoxo'], 0, 'Critério.'),
    mc('Risco de 2 para 1 em 1.000: redução absoluta de:', ['50%', '1 em 1.000', '2 em 1.000', '1%'], 1, 'Absoluto.'),
    mc('A veracidade na comunicação é tratada no CIC:', ['2482–2492', '1883', '2229', '2402'], 0, 'Mentira.'),
    disc('Reescreva de modo honesto uma estatística usada de modo enganoso no debate público.', ['Original', 'Truque', 'Versão honesta', 'Fonte']),
  ],
  resumo: ['Paradoxo de Simpson (cálculos renais, 1986).', 'Doll e Hill; critérios de Hill (1965).', 'Risco relativo × absoluto.', 'Manipulações comuns.', 'Veracidade (CIC 2482–2492).'],
  referencias: [
    { texto: 'Austin Bradford Hill, "The environment and disease: association or causation?" (1965).' },
    { texto: 'Darrell Huff, Como mentir com estatística (1954).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2482–2492.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a estatística reescrita', 'Ler a fonte indicada'],
  revisao: [['Simpson', 'Inversão.'], ['Hill', 'Causalidade.'], ['Absoluto', 'Sempre informar.']],
  avancado: {
    texto: `<h3>Diagramas causais</h3>
<p>Judea Pearl e outros desenvolveram diagramas causais, em que setas representam relações de causa, para decidir quais variáveis controlar numa análise ${tag('fato')}. Controlar uma causa comum (confundidor) ajuda; controlar uma consequência do tratamento pode introduzir viés ${tag('fato')}. Essa abordagem explica quando desagregar resolve o paradoxo de Simpson e quando não ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Judea Pearl e Dana Mackenzie, O livro do porquê (2018).' }],
    exercicios: [
      mc('Nos diagramas causais, setas representam:', ['Correlações', 'Relações de causa', 'Médias', 'Datas'], 1, 'Pearl.'),
      mc('Controlar um confundidor:', ['Ajuda', 'Sempre atrapalha', 'É proibido', 'Não muda nada'], 0, 'Causa comum.'),
      mc('Controlar uma consequência do tratamento pode:', ['Introduzir viés', 'Eliminar todo viés', 'Ser obrigatório', 'Nada'], 0, 'Cuidado.'),
      disc('Desenhe um diagrama causal para o caso dos cálculos renais e explique qual análise é correta.', ['Variáveis', 'Setas', 'Análise', 'Conclusão'])],
  },
}),

avaliacao('es3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as interpretações da probabilidade, o teorema de Bayes, valores-p e causalidade, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça a tabela do teste diagnóstico.</li><li>Releia seu ensaio sobre o valor-p.</li></ul>`,
[
  disc('Resolva um problema de teste diagnóstico com Bayes (prevalência, sensibilidade e especificidade dadas) e resolva o mesmo problema de forma frequentista, comparando as interpretações.', ['Cálculo bayesiano', 'Leitura frequentista', 'Comparação', 'Clareza']),
  disc('O que um valor-p significa e o que não significa? Responda com a declaração da ASA, um caso de má interpretação e uma proposta de boa prática.', ['Definição', 'Erros', 'Caso', 'Boa prática']),
]),
];
