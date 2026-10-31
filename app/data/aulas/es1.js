// Estatística I — o que é estatística, medidas, gráficos e coleta de dados (etapas 1 a 3 do percurso de Estatística).
// Variabilidade, população e amostra; variáveis e medidas de posição; dispersão e gráficos; amostragem e desenho de estudos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'es1-1', titulo: 'O que é estatística: variabilidade, população e amostra', duracao: '150 min',
  aprendera: ['Explicar por que a variabilidade exige estatística', 'Distinguir população, amostra, parâmetro e estatística', 'Distinguir estatística descritiva e inferencial', 'Reconhecer números em notícias como estimativas'],
  prereq: ['Degrau 0: método de estudo', 'Aritmética básica'],
  explicacao: `
<h3>O problema</h3>
<p>Se todas as pessoas tivessem a mesma altura e todos os remédios funcionassem igual em todos, não precisaríamos de estatística. Ela existe porque as coisas variam e porque raramente observamos tudo.</p>
<h3>Variabilidade e incerteza</h3>
<p>Estatística é a ciência de coletar, organizar, resumir e interpretar dados que variam, e de tirar conclusões sob incerteza ${tag('fato')}. A variabilidade não é defeito dos dados: é o próprio objeto de estudo ${tag('argumento')}.</p>
<h3>População e amostra</h3>
<p>População é o conjunto inteiro que interessa (todos os eleitores, todas as lâmpadas fabricadas); amostra é a parte efetivamente observada ${tag('fato')}. Um número que descreve a população é um parâmetro; o número calculado na amostra é uma estatística, usada para estimá-lo ${tag('fato')}.</p>
<h3>Descritiva e inferencial</h3>
<p>A estatística descritiva resume os dados observados com tabelas, gráficos e medidas; a inferencial usa a amostra para concluir algo sobre a população, com uma medida da incerteza ${tag('fato')}. A probabilidade é a linguagem que permite quantificar essa incerteza ${tag('fato')}.</p>
<h3>Estatística e verdade</h3>
<p>Números não falam sozinhos: dependem de como foram coletados, do que medem e de quem os interpreta ${tag('argumento')}. A estatística bem usada é instrumento da verdade — ajuda a ver o que a impressão pessoal não mostra; mal usada, pode enganar com aparência de precisão ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Variabilidade', 'Diferença entre os valores observados de uma mesma característica.'],
    ['População', 'Conjunto inteiro de elementos que interessa ao estudo.'],
    ['Amostra', 'Parte da população efetivamente observada.'],
    ['Parâmetro', 'Medida que descreve a população (geralmente desconhecida).'],
    ['Estatística (medida)', 'Medida calculada na amostra, usada para estimar o parâmetro.'],
  ],
  exemplos: `<p><strong>Uma notícia:</strong> "Pesquisa indica que 38% dos eleitores pretendem votar no candidato A". A população são todos os eleitores; a amostra, os 2 mil entrevistados; 38% é uma estatística, que estima o parâmetro desconhecido — a proporção real entre todos os eleitores. Por isso vem acompanhada de margem de erro.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra "estatística" vem do estudo dos dados do Estado, desenvolvido nos séculos XVII e XVIII ${tag('fato')}. <strong>No Brasil:</strong> o IBGE, criado em 1936, é o principal produtor de estatísticas oficiais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a impressão pessoal não basta', tag: 'argumento',
    premissas: ['Cada pessoa observa uma parte pequena e não aleatória da realidade.', 'Casos marcantes ficam na memória mais que os comuns.', 'Sem contagem sistemática, a impressão generaliza a partir de exemplos enviesados.'],
    conclusao: 'Logo, para conhecer fenômenos que variam, precisamos de dados coletados e resumidos com método.',
    nota: 'A estatística não substitui o juízo: ela o informa.',
  },
  objecoes: [
    { objecao: 'Estatística é só uma forma de mentir com números.', tag: 'argumento',
      resposta: 'É possível enganar com números, como com palavras. Mas a resposta é aprender a ler e a produzir estatísticas corretamente, não abandoná-las. Quem não entende estatística é mais facilmente enganado por ela.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: em cinco notícias com números, identifique população, amostra, variável e se o número é parâmetro ou estatística.</p>`,
  fonte: {
    obra: 'IBGE, página de apresentação de uma pesquisa (por exemplo, a PNAD Contínua) e sua nota metodológica', link: { url: 'https://www.ibge.gov.br', rotulo: 'Portal do IBGE' },
    orientacao: `<p>Identifique a população de interesse, o tamanho da amostra e o que a pesquisa estima.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre parâmetro e estatística?', r: 'Parâmetro descreve a população; estatística é calculada na amostra para estimá-lo.' },
    { p: 'O que faz a estatística inferencial?', r: 'Usa a amostra para concluir algo sobre a população, medindo a incerteza.' },
    { p: 'Por que a variabilidade exige estatística?', r: 'Porque, se tudo fosse igual, bastaria observar um caso.' },
  ],
  exercicios: [
    mc('Numa pesquisa com 2 mil eleitores, a amostra é:', ['Todos os eleitores', 'Os 2 mil entrevistados', 'O candidato', 'A margem de erro'], 1, 'Parte observada.'),
    mc('A proporção real de votos entre todos os eleitores é:', ['Uma estatística', 'Um parâmetro', 'Uma amostra', 'Um gráfico'], 1, 'População.'),
    mc('Resumir dados com tabelas e médias é estatística:', ['Inferencial', 'Descritiva', 'Bayesiana', 'Experimental'], 1, 'Resumo.'),
    mc('O IBGE foi criado em:', ['1872', '1936', '1988', '2000'], 1, 'Estatísticas oficiais.'),
    mc('A linguagem que quantifica a incerteza é a:', ['Geometria', 'Probabilidade', 'Retórica', 'Contabilidade'], 1, 'Inferência.'),
    disc('Em cinco notícias, identifique população, amostra, variável e se o número é parâmetro ou estatística.', ['População', 'Amostra', 'Variável', 'Classificação']),
  ],
  resumo: ['Estatística: dados que variam, conclusões sob incerteza.', 'População × amostra.', 'Parâmetro × estatística.', 'Descritiva × inferencial.', 'Números exigem interpretação.'],
  referencias: [
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
    { texto: 'Darrell Huff, Como mentir com estatística (1954).' },
    { texto: 'IBGE, notas metodológicas das pesquisas.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise das notícias', 'Consultar a fonte indicada'],
  revisao: [['Amostra', 'Parte observada.'], ['Parâmetro', 'Da população.'], ['Inferencial', 'Da amostra à população.']],
  avancado: {
    texto: `<h3>Censo ou amostra?</h3>
<p>Um censo observa toda a população; uma amostra, só uma parte ${tag('fato')}. Censos são caros e lentos, e mesmo eles têm erros de cobertura; amostras bem planejadas podem ser mais precisas em certas perguntas, porque permitem entrevistas mais cuidadosas ${tag('interpretacao')}. O Brasil realiza censos demográficos aproximadamente a cada dez anos e pesquisas amostrais contínuas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, metodologia do Censo Demográfico e da PNAD Contínua.' }],
    exercicios: [
      mc('Um censo observa:', ['Parte da população', 'Toda a população', 'Só os eleitores', 'Nada'], 1, 'Definição.'),
      mc('Uma vantagem de amostras é:', ['Custo e cuidado maiores por entrevista', 'Ausência de erro', 'Não precisar de método', 'Ser ilegal'], 0, 'Interpretação.'),
      mc('Censos também têm:', ['Erros de cobertura', 'Margem de erro amostral', 'Nenhum erro', 'Sorteio'], 0, 'Limites.'),
      disc('Compare as vantagens e limites de um censo e de uma amostra para medir o desemprego.', ['Censo', 'Amostra', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'es1-2', titulo: 'Variáveis, tabelas de frequência e medidas de posição', duracao: '150 min',
  aprendera: ['Classificar variáveis', 'Montar tabelas de frequência', 'Calcular média, mediana e moda', 'Escolher a medida adequada a cada situação'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Uma lista de cem números não diz nada à primeira vista. Como resumi-la sem perder o essencial?</p>
<h3>Variáveis</h3>
<p>Variáveis qualitativas classificam (cor, religião, escolaridade); podem ser nominais, sem ordem, ou ordinais, com ordem ${tag('fato')}. Variáveis quantitativas medem ou contam: discretas (número de filhos) ou contínuas (altura, renda) ${tag('fato')}.</p>
<h3>Tabelas de frequência</h3>
<p>A frequência absoluta conta quantas vezes cada valor ocorre; a relativa divide pelo total, geralmente em porcentagem ${tag('fato')}.</p>
<h3>Medidas de posição</h3>
<p>A média é a soma dos valores dividida pelo número de valores; a mediana é o valor do meio quando os dados estão ordenados; a moda é o valor mais frequente ${tag('fato')}. Nos dados 2, 4, 4, 4, 5, 5, 7, 9: a média é 40 ÷ 8 = 5; a mediana é a média dos dois valores centrais, (4 + 5) ÷ 2 = 4,5; a moda é 4 ${tag('fato')}.</p>
<h3>Qual usar?</h3>
<p>A média é sensível a valores extremos; a mediana, não ${tag('fato')}. Se nove pessoas ganham R$ 2.000 e uma ganha R$ 50.000, a média é R$ 6.800, mas a mediana é R$ 2.000 — esta descreve melhor o salário típico ${tag('fato')}. Por isso rendas e preços de imóveis costumam ser resumidos pela mediana ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Variável qualitativa', 'Variável que classifica em categorias.'],
    ['Variável quantitativa', 'Variável que mede ou conta.'],
    ['Frequência relativa', 'Proporção de vezes que um valor ocorre.'],
    ['Média', 'Soma dos valores dividida pelo número de valores.'],
    ['Mediana', 'Valor central dos dados ordenados.'],
  ],
  exemplos: `<p><strong>Notas de uma turma:</strong> 3, 5, 6, 6, 7, 8, 10. Média: 45 ÷ 7 ≈ 6,4. Mediana: o quarto valor, 6. Moda: 6. As três medidas estão próximas, sinal de que não há valores extremos fortes. Se um aluno tivesse tirado 0 em vez de 3, a média cairia para 6,0 e a mediana continuaria 6.</p>`,
  contexto: `<p><strong>No mundo:</strong> relatórios de renda de muitos países usam a mediana como medida típica ${tag('fato')}. <strong>No Brasil:</strong> o IBGE divulga rendimento médio e outras medidas de distribuição de renda ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a média pode enganar', tag: 'argumento',
    premissas: ['A média usa o valor de cada observação.', 'Um único valor extremo pode deslocá-la muito.', 'Então a média pode ficar longe da maioria dos valores.'],
    conclusao: 'Logo, em dados com valores extremos, a mediana descreve melhor o caso típico.',
    nota: 'Bom costume: informar média e mediana juntas, e ver se diferem muito.',
  },
  objecoes: [
    { objecao: 'A média é sempre a melhor medida porque usa todos os dados.', tag: 'argumento',
      resposta: 'Usar todos os dados é uma vantagem quando a distribuição é simétrica. Com valores extremos, essa mesma sensibilidade vira defeito. A escolha depende da forma dos dados e da pergunta.' },
  ],
  aplicacao: `<p>Colete as idades de 15 pessoas (família, turma, paróquia), classifique a variável, monte a tabela de frequências por faixas e calcule média, mediana e moda, comentando qual descreve melhor o grupo.</p>`,
  fonte: {
    obra: 'IBGE, tabelas de rendimento da PNAD Contínua', link: { url: 'https://www.ibge.gov.br', rotulo: 'Portal do IBGE' },
    orientacao: `<p>Observe se a pesquisa informa média, mediana ou ambas, e por quê.</p>`,
  },
  perguntas: [
    { p: 'Número de filhos é variável de que tipo?', r: 'Quantitativa discreta.' },
    { p: 'Qual a mediana de 2, 4, 4, 4, 5, 5, 7, 9?', r: '4,5.' },
    { p: 'Por que usar a mediana para rendas?', r: 'Porque é menos sensível a valores extremos.' },
  ],
  exercicios: [
    mc('Escolaridade (fundamental, médio, superior) é variável:', ['Quantitativa contínua', 'Qualitativa ordinal', 'Qualitativa nominal', 'Quantitativa discreta'], 1, 'Tem ordem.'),
    mc('A média de 2, 4, 6 é:', ['3', '4', '5', '6'], 1, '12 ÷ 3.'),
    mc('A moda de 1, 3, 3, 5, 7 é:', ['1', '3', '5', '7'], 1, 'Mais frequente.'),
    mc('Nove ganham R$ 2.000 e um ganha R$ 50.000: a média é:', ['R$ 2.000', 'R$ 5.000', 'R$ 6.800', 'R$ 50.000'], 2, '68.000 ÷ 10.'),
    mc('A medida menos sensível a valores extremos é a:', ['Média', 'Mediana', 'Soma', 'Amplitude'], 1, 'Robustez.'),
    disc('Com as idades de 15 pessoas, monte a tabela e calcule média, mediana e moda, comentando-as.', ['Classificação', 'Tabela', 'Cálculos', 'Interpretação']),
  ],
  resumo: ['Qualitativas (nominais, ordinais) e quantitativas (discretas, contínuas).', 'Frequência absoluta e relativa.', 'Média, mediana, moda.', 'Média sensível a extremos.', 'Renda: mediana.'],
  referencias: [
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
    { texto: 'IBGE, PNAD Contínua: rendimento de todas as fontes.' },
    { texto: 'Darrell Huff, Como mentir com estatística (1954), cap. 2.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a tabela e os cálculos', 'Consultar a fonte indicada'],
  revisao: [['Mediana', 'Valor central.'], ['Moda', 'Mais frequente.'], ['Extremos', 'Puxam a média.']],
  avancado: {
    texto: `<h3>Média ponderada</h3>
<p>Na média ponderada, cada valor é multiplicado por um peso antes da soma, e divide-se pela soma dos pesos ${tag('fato')}. Se uma prova vale peso 2 e um trabalho peso 1, notas 6 e 9 dão (6 × 2 + 9 × 1) ÷ 3 = 7 ${tag('fato')}. Índices de preços, como o IPCA, são médias ponderadas pelos pesos dos itens no orçamento das famílias ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, metodologia do IPCA.' }],
    exercicios: [
      mc('Prova 6 (peso 2) e trabalho 9 (peso 1): média ponderada:', ['7', '7,5', '8', '6'], 0, '21 ÷ 3.'),
      mc('O IPCA é uma média:', ['Simples', 'Ponderada', 'Geométrica sem pesos', 'Mediana'], 1, 'Pesos do orçamento.'),
      mc('Na média ponderada divide-se pela soma dos:', ['Valores', 'Pesos', 'Extremos', 'Itens'], 1, 'Definição.'),
      disc('Calcule a média ponderada das suas notas num período com pesos definidos e compare com a média simples.', ['Pesos', 'Cálculo', 'Comparação', 'Interpretação'])],
  },
}),

aula({
  id: 'es1-3', titulo: 'Dispersão e gráficos: desvio-padrão, histogramas e gráficos enganosos', duracao: '150 min',
  aprendera: ['Calcular amplitude, variância e desvio-padrão', 'Interpretar o desvio-padrão', 'Construir e ler histogramas e diagramas de caixa', 'Reconhecer gráficos enganosos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Duas turmas têm média 6. Numa, todos tiraram entre 5 e 7; na outra, metade tirou 2 e metade 10. A média esconde essa diferença.</p>
<h3>Dispersão</h3>
<p>A amplitude é a diferença entre o maior e o menor valor ${tag('fato')}. A variância é a média dos quadrados dos desvios em relação à média; o desvio-padrão é sua raiz quadrada, na mesma unidade dos dados ${tag('fato')}. Nos dados 2, 4, 4, 4, 5, 5, 7, 9 (média 5), os desvios ao quadrado são 9, 1, 1, 1, 0, 0, 4, 16, somando 32; a variância é 32 ÷ 8 = 4 e o desvio-padrão, 2 ${tag('fato')}. Quando se estima a variância de uma população a partir de amostra, divide-se por n − 1 em vez de n ${tag('fato')}.</p>
<h3>Gráficos</h3>
<p>Gráficos de barras e de setores mostram variáveis qualitativas; histogramas mostram a distribuição de variáveis quantitativas por faixas ${tag('fato')}. O diagrama de caixa (boxplot) mostra mediana, quartis e valores extremos ${tag('fato')}.</p>
<h3>Gráficos enganosos</h3>
<p>Eixo vertical que não começa em zero pode exagerar diferenças em gráficos de barras; escalas diferentes, figuras com área desproporcional e recortes de período escolhidos a dedo distorcem a leitura ${tag('fato')}. Darrell Huff popularizou esses truques em Como mentir com estatística (1954) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Amplitude', 'Diferença entre o maior e o menor valor.'],
    ['Variância', 'Média dos quadrados dos desvios em relação à média.'],
    ['Desvio-padrão', 'Raiz quadrada da variância; dispersão na unidade dos dados.'],
    ['Histograma', 'Gráfico de barras contíguas que mostra a distribuição por faixas.'],
    ['Quartis', 'Valores que dividem os dados ordenados em quatro partes iguais.'],
  ],
  exemplos: `<p><strong>Eixo truncado:</strong> um gráfico mostra o candidato A com 41% e B com 39%, com o eixo começando em 38%. A barra de A parece três vezes maior que a de B. Com o eixo começando em zero, as barras ficam quase iguais — e, considerando a margem de erro, a diferença pode nem ser real.</p>`,
  contexto: `<p><strong>No mundo:</strong> Florence Nightingale usou diagramas para mostrar que a maioria das mortes de soldados na Guerra da Crimeia vinha de doenças evitáveis ${tag('fato')}. <strong>No Brasil:</strong> o IBGE publica gráficos e mapas interativos de suas pesquisas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que média sem dispersão é informação incompleta', tag: 'argumento',
    premissas: ['Conjuntos muito diferentes podem ter a mesma média.', 'Decisões dependem também de quão dispersos são os valores (risco, desigualdade, qualidade).', 'O desvio-padrão mede essa dispersão.'],
    conclusao: 'Logo, uma descrição honesta dos dados informa uma medida de posição e uma de dispersão.',
    nota: 'Melhor ainda: mostrar a distribuição num gráfico.',
  },
  objecoes: [
    { objecao: 'Gráficos são apenas ilustração; o que importa são os números.', tag: 'argumento',
      resposta: 'Gráficos revelam padrões — assimetria, valores extremos, grupos — que tabelas escondem, e por isso são instrumento de análise. Mas também podem enganar; por isso é preciso aprender a construí-los e lê-los com critério.' },
  ],
  aplicacao: `<p>Calcule à mão a amplitude, a variância e o desvio-padrão das idades coletadas na aula anterior, construa um histograma e encontre na imprensa um gráfico enganoso, explicando o truque e redesenhando-o corretamente.</p>`,
  fonte: {
    obra: 'Darrell Huff, Como mentir com estatística (1954), caps. 5 e 6', link: null,
    orientacao: `<p>Anote os truques gráficos descritos e procure um exemplo atual de cada um.</p>`,
  },
  perguntas: [
    { p: 'Qual o desvio-padrão de 2, 4, 4, 4, 5, 5, 7, 9?', r: '2.' },
    { p: 'O que mostra um boxplot?', r: 'Mediana, quartis e valores extremos.' },
    { p: 'Por que o eixo truncado engana em gráficos de barras?', r: 'Porque exagera visualmente diferenças pequenas.' },
  ],
  exercicios: [
    mc('A amplitude de 3, 8, 10, 15 é:', ['10', '12', '15', '9'], 1, '15 − 3.'),
    mc('Se a variância é 9, o desvio-padrão é:', ['3', '9', '81', '4,5'], 0, 'Raiz quadrada.'),
    mc('Para mostrar a distribuição de alturas usa-se:', ['Gráfico de setores', 'Histograma', 'Mapa político', 'Organograma'], 1, 'Quantitativa.'),
    mc('Ao estimar a variância populacional por amostra, divide-se por:', ['n', 'n − 1', 'n + 1', '2n'], 1, 'Correção.'),
    mc('Como mentir com estatística é de:', ['Huff', 'Fisher', 'Graunt', 'Laplace'], 0, '1954.'),
    disc('Calcule a dispersão das idades, faça um histograma e analise um gráfico enganoso.', ['Cálculos', 'Histograma', 'Gráfico enganoso', 'Redesenho']),
  ],
  resumo: ['Amplitude, variância, desvio-padrão.', 'n − 1 para amostras.', 'Barras, setores, histograma, boxplot.', 'Eixo truncado e outros truques.', 'Posição + dispersão + gráfico.'],
  referencias: [
    { texto: 'Darrell Huff, Como mentir com estatística (1954).' },
    { texto: 'Edward R. Tufte, The Visual Display of Quantitative Information (1983).' },
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos, o histograma e a análise do gráfico', 'Ler a fonte indicada'],
  revisao: [['Desvio-padrão', 'Raiz da variância.'], ['Histograma', 'Distribuição.'], ['Eixo truncado', 'Exagera.']],
  avancado: {
    texto: `<h3>Coeficiente de variação</h3>
<p>O coeficiente de variação é o desvio-padrão dividido pela média, geralmente em porcentagem ${tag('fato')}. Permite comparar a dispersão de grandezas com médias ou unidades diferentes: um desvio-padrão de 2 kg é grande para bebês e pequeno para adultos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics.' }],
    exercicios: [
      mc('Média 50 e desvio-padrão 5: coeficiente de variação:', ['5%', '10%', '50%', '20%'], 1, '5 ÷ 50.'),
      mc('O coeficiente de variação serve para comparar dispersões com:', ['Médias diferentes', 'Mesma média apenas', 'Nada', 'Só porcentagens'], 0, 'Comparação.'),
      mc('2 kg de desvio é relativamente maior em:', ['Adultos', 'Bebês', 'Iguais', 'Nenhum'], 1, 'Relativo.'),
      disc('Compare a dispersão de dois conjuntos de dados com médias diferentes usando o coeficiente de variação.', ['Dados', 'Cálculos', 'Comparação', 'Interpretação'])],
  },
}),

aula({
  id: 'es1-4', titulo: 'Coleta de dados: amostragem, viés e desenho de estudos', duracao: '150 min',
  aprendera: ['Explicar a amostragem aleatória', 'Reconhecer viés de seleção e de resposta', 'Distinguir estudo observacional e experimento', 'Avaliar uma pesquisa divulgada'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como uma amostra de 2 mil pessoas pode dizer algo sobre milhões? E por que uma amostra enorme pode errar feio?</p>
<h3>Amostragem aleatória</h3>
<p>Na amostra aleatória simples, todos os elementos da população têm a mesma chance de ser escolhidos ${tag('fato')}. É o sorteio que permite calcular a margem de erro, porque torna a amostra representativa em média ${tag('fato')}. Na prática, usam-se planos estratificados (por região, sexo, idade) e por conglomerados ${tag('fato')}.</p>
<h3>Viés</h3>
<p>Viés de seleção ocorre quando o modo de escolher a amostra favorece certos grupos; viés de resposta, quando as perguntas ou o contexto distorcem as respostas ${tag('fato')}. Em 1936, a revista Literary Digest previu a derrota de Roosevelt com cerca de 2 milhões de respostas, tiradas sobretudo de listas de assinantes e donos de telefones e carros; George Gallup acertou com uma amostra muito menor e mais bem planejada ${tag('fato')}. Tamanho não compensa viés ${tag('argumento')}.</p>
<h3>Observação e experimento</h3>
<p>Num estudo observacional, o pesquisador registra o que acontece; num experimento, atribui tratamentos, de preferência por sorteio ${tag('fato')}. Só o experimento aleatorizado controla, em média, as variáveis de confusão ${tag('fato')}. Ronald Fisher sistematizou o planejamento de experimentos (1935) ${tag('fato')}.</p>
<h3>Ler uma pesquisa</h3>
<p>Pergunte: quem foi ouvido, como foi escolhido, quantos, quais as perguntas exatas, quando, quem pagou e qual a margem de erro ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Amostra aleatória simples', 'Amostra em que todos têm a mesma chance de ser escolhidos.'],
    ['Amostragem estratificada', 'Sorteio dentro de grupos (estratos) definidos previamente.'],
    ['Viés de seleção', 'Distorção pelo modo de escolher a amostra.'],
    ['Viés de resposta', 'Distorção pelas perguntas ou pelo contexto das respostas.'],
    ['Experimento aleatorizado', 'Estudo em que os tratamentos são atribuídos por sorteio.'],
  ],
  exemplos: `<p><strong>Enquete na internet:</strong> um site pergunta "você aprova o prefeito?" e recebe 50 mil votos. Mesmo enorme, a enquete não representa a cidade: responde quem visita o site, quem se interessa pelo tema, e pode haver votos repetidos. Uma pesquisa com 800 pessoas sorteadas por bairro é muito mais confiável.</p>`,
  contexto: `<p><strong>No mundo:</strong> o fracasso do Literary Digest em 1936 tornou-se exemplo clássico de viés de seleção ${tag('fato')}. <strong>No Brasil:</strong> pesquisas eleitorais devem ser registradas na Justiça Eleitoral, com informações sobre metodologia, amostra e contratante ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o sorteio é tão importante', tag: 'argumento',
    premissas: ['Quem escolhe a amostra por conveniência introduz, mesmo sem querer, preferências.', 'O sorteio não tem preferências: dá a cada elemento a mesma chance.', 'Por isso as diferenças entre amostra e população tornam-se aleatórias e calculáveis.'],
    conclusao: 'Logo, o sorteio é o que permite medir o erro de uma amostra.',
    nota: 'O sorteio não elimina o erro: torna-o mensurável.',
  },
  objecoes: [
    { objecao: 'Ninguém me perguntou, então as pesquisas não valem.', tag: 'argumento',
      resposta: 'Uma amostra bem sorteada de 2 mil pessoas estima a população com margem de erro conhecida, mesmo sem ouvir cada um — como uma colher de sopa bem mexida informa o sabor da panela. As pesquisas podem errar por viés ou mudança de opinião, mas não por deixarem de ouvir todos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: avalie uma pesquisa divulgada na imprensa quanto a população, amostra, método de seleção, perguntas, margem de erro e gráficos.</p>`,
  fonte: {
    obra: 'Ronald A. Fisher, O planejamento de experimentos (1935), cap. II (a senhora que provava chá)', link: null,
    orientacao: `<p>Observe como Fisher usa o sorteio da ordem das xícaras para testar a afirmação da senhora.</p>`,
  },
  perguntas: [
    { p: 'Por que o Literary Digest errou em 1936?', r: 'Por viés de seleção: sua amostra enorme representava sobretudo grupos mais ricos.' },
    { p: 'Qual a vantagem do experimento aleatorizado?', r: 'Controla, em média, as variáveis de confusão.' },
    { p: 'O que o sorteio permite?', r: 'Medir o erro da amostra.' },
  ],
  exercicios: [
    mc('Uma enquete aberta na internet sofre principalmente de:', ['Viés de seleção', 'Falta de gráficos', 'Excesso de sorteio', 'Nada'], 0, 'Autosseleção.'),
    mc('Sortear dentro de regiões é amostragem:', ['Por conveniência', 'Estratificada', 'Bola de neve', 'Censitária'], 1, 'Estratos.'),
    mc('O planejamento de experimentos foi sistematizado por:', ['Fisher', 'Huff', 'Graunt', 'Quetelet'], 0, '1935.'),
    mc('Tamanho grande de amostra:', ['Compensa o viés', 'Não compensa o viés', 'Dispensa sorteio', 'Elimina todo erro'], 1, 'Literary Digest.'),
    mc('Perguntas tendenciosas causam viés de:', ['Seleção', 'Resposta', 'Amostragem aleatória', 'Medida'], 1, 'Contexto.'),
    disc('Avalie uma pesquisa divulgada: população, amostra, seleção, perguntas, margem e gráficos.', ['Amostra', 'Seleção', 'Perguntas', 'Margem e gráficos']),
  ],
  resumo: ['Amostra aleatória; estratificação.', 'Viés de seleção e de resposta.', 'Literary Digest (1936) e Gallup.', 'Observação × experimento aleatorizado.', 'Fisher (1935).'],
  referencias: [
    { texto: 'Ronald A. Fisher, O planejamento de experimentos (1935).' },
    { texto: 'David Freedman, Robert Pisani e Roger Purves, Statistics, parte sobre amostragem.' },
    { texto: 'Darrell Huff, Como mentir com estatística (1954), cap. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação da pesquisa', 'Ler a fonte indicada'],
  revisao: [['Sorteio', 'Erro mensurável.'], ['1936', 'Viés de seleção.'], ['Experimento', 'Controla confusão.']],
  avancado: {
    texto: `<h3>A senhora que provava chá</h3>
<p>Fisher conta o caso de uma senhora que dizia distinguir se o leite fora posto antes ou depois do chá ${tag('fato')}. Ele propõe oito xícaras, quatro de cada tipo, em ordem sorteada; há 70 maneiras de escolher quatro xícaras entre oito, de modo que acertar todas por acaso tem probabilidade 1/70 ${tag('fato')}. É o embrião do raciocínio dos testes de hipóteses ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ronald A. Fisher, O planejamento de experimentos (1935), cap. II.' }],
    exercicios: [
      mc('Quantas maneiras de escolher 4 xícaras entre 8?', ['16', '32', '70', '256'], 2, 'Combinação 8 escolhe 4.'),
      mc('A chance de acertar tudo por acaso é:', ['1/8', '1/16', '1/70', '1/2'], 2, 'Uma entre 70.'),
      mc('O sorteio da ordem das xícaras serve para:', ['Enganar a senhora', 'Evitar padrões que permitam adivinhar', 'Acelerar', 'Nada'], 1, 'Aleatorização.'),
      disc('Planeje um pequeno experimento para testar uma afirmação do cotidiano, com sorteio e critério de decisão.', ['Afirmação', 'Desenho', 'Sorteio', 'Critério'])],
  },
}),

avaliacao('es1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre conceitos básicos, medidas de posição e dispersão, gráficos e coleta de dados, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça à mão os cálculos de média, mediana e desvio-padrão.</li><li>Releia sua avaliação de pesquisa divulgada.</li></ul>`,
[
  disc('Dado um pequeno conjunto de dados (por exemplo, 3, 5, 5, 6, 8, 9, 20), calcule média, mediana, moda, amplitude e desvio-padrão, e explique qual medida de posição descreve melhor os dados.', ['Cálculos', 'Escolha da medida', 'Justificativa', 'Clareza']),
  disc('Avalie uma pesquisa de opinião ou um estudo divulgado: população, amostra, método de seleção, possíveis vieses e se a conclusão anunciada é sustentada.', ['Amostra', 'Vieses', 'Conclusão', 'Distinção entre dado e inferência']),
]),
];
