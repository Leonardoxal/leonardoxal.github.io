// Economia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Economia).
// Método próprio: modelos testados contra dados. Distingue sempre economia positiva (o que acontece)
// de normativa (o que deveria ser); a ética econômica, inclusive a Doutrina Social da Igreja, entra na segunda.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'e1-1', titulo: 'Escassez, escolha e custo de oportunidade', duracao: '90 min',
  aprendera: ['Definir o objeto da economia a partir da escassez', 'Calcular e reconhecer custos de oportunidade', 'Explicar incentivos e divisão do trabalho', 'Distinguir afirmações positivas e normativas'],
  prereq: ['Lógica e argumentação (Degrau 4)', 'Matemática básica: porcentagem e proporção'],
  explicacao: `
<h3>O problema</h3>
<p>Tempo, dinheiro, terra e trabalho são limitados; os desejos e fins humanos, não. Por isso toda pessoa, família, empresa e governo escolhe — e cada escolha implica renúncia. A economia estuda essas escolhas e suas consequências.</p>

<h3>De "administração da casa" a ciência</h3>
<p>A palavra vem do grego <em>oikonomia</em>, administração da casa, título de um diálogo de Xenofonte ${tag('fato')}. Lionel Robbins, em <em>Ensaio sobre a natureza e a significação da ciência econômica</em> (1932), definiu a economia como a ciência que estuda o comportamento humano como relação entre fins e meios escassos que têm usos alternativos ${tag('fato')}. A definição é influente, mas não única: outras tradições enfatizam a produção, a distribuição ou as instituições ${tag('interpretacao')}.</p>

<h3>Custo de oportunidade</h3>
<p>O custo de uma escolha é o valor da melhor alternativa abandonada. Uma hora de estudo custa a hora de trabalho, descanso ou convívio que se deixou de ter. Um terreno usado para soja custa o milho ou o pasto que ali poderia estar ${tag('argumento')}. O custo de oportunidade nem sempre aparece em dinheiro, mas existe em toda decisão.</p>

<h3>Incentivos e divisão do trabalho</h3>
<p>Pessoas respondem a incentivos: mudanças nos custos e benefícios alteram comportamentos, às vezes de forma não prevista ${tag('argumento')}. Adam Smith abriu <em>A riqueza das nações</em> (1776) com o exemplo da fábrica de alfinetes: divididas as tarefas, poucos trabalhadores produziam muito mais do que cada um sozinho ${tag('fato')}. A especialização aumenta a produtividade e torna necessária a troca.</p>

<h3>Positiva e normativa</h3>
<p>"Se o preço do pão subir, as pessoas comprarão menos pão" é afirmação <strong>positiva</strong>: pode ser testada com dados. "O pão deve ser barato para todos" é <strong>normativa</strong>: exprime um juízo de valor. A distinção foi formulada por John Neville Keynes (1891) e retomada por Milton Friedman em "A metodologia da economia positiva" (1953) ${tag('fato')}. As duas são legítimas, mas misturá-las sem aviso é erro: não se refuta um dado com um valor, nem se demonstra um valor com um dado ${tag('argumento')}.</p>
<p>No campo normativo, a Doutrina Social da Igreja ensina a destinação universal dos bens e o dever de buscar o bem comum ${tag('doutrina')}. A economia positiva ajuda a avaliar <em>quais meios</em> realizam esses fins, sem substituir o juízo moral sobre eles.</p>`,
  vocabulario: [
    ['Escassez', 'Recursos limitados diante de fins ilimitados.'],
    ['Custo de oportunidade', 'Valor da melhor alternativa abandonada.'],
    ['Incentivo', 'Mudança em custos ou benefícios que altera comportamentos.'],
    ['Divisão do trabalho', 'Especialização de tarefas que aumenta a produtividade.'],
    ['Economia positiva', 'Descrição e explicação do que acontece; testável.'],
    ['Economia normativa', 'Juízos sobre o que deveria acontecer.'],
  ],
  exemplos: `<p><strong>Custo de oportunidade público:</strong> no Brasil, o orçamento federal é aprovado pelo Congresso na Lei Orçamentária Anual ${tag('fato')}. Cada real destinado a uma rubrica (por exemplo, pavimentação) deixa de ir para outra (por exemplo, saneamento). Discutir prioridades orçamentárias é discutir custos de oportunidade — e, ao mesmo tempo, valores.</p>`,
  contexto: `<p><strong>No mundo:</strong> a economia tornou-se disciplina própria a partir do século XVIII, com os fisiocratas e Adam Smith. <strong>No Brasil:</strong> as escolhas entre exportação e mercado interno, entre investimento e consumo, atravessam a história econômica do país, estudada nas etapas seguintes ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que toda escolha tem custo', tag: 'argumento',
    premissas: ['Escolher é destinar um recurso escasso a um uso.', 'Recursos escassos têm usos alternativos.', 'Destinar o recurso a um uso impede, ao menos em parte, os outros.'],
    conclusao: 'Logo, toda escolha implica renunciar a alternativas: tem custo de oportunidade, ainda que não monetário.',
    nota: 'Mesmo bens "gratuitos" para quem os recebe têm custo para alguém: o argumento vale para serviços públicos e doações.',
  },
  objecoes: [
    { objecao: 'A economia reduz o ser humano a um calculador egoísta.', tag: 'debate',
      resposta: 'O conceito de escolha sob escassez não exige egoísmo: vale para quem doa, para uma ordem religiosa que administra seus bens ou para um governo que busca o bem comum. Modelos simplificam motivos humanos; a crítica legítima está em esquecer que são simplificações.' },
  ],
  aplicacao: `<p>Anote durante uma semana três escolhas que você fez e o custo de oportunidade de cada uma (em tempo ou dinheiro). Classifique três frases de uma notícia econômica como positivas ou normativas.</p>`,
  fonte: {
    obra: 'Adam Smith, A riqueza das nações (1776), livro I, cap. 1; Lionel Robbins, Ensaio sobre a natureza e a significação da ciência econômica (1932), cap. 1', link: null,
    orientacao: `<p>Em Smith, reconstitua o exemplo da fábrica de alfinetes e identifique as três causas do aumento de produtividade que ele aponta. Em Robbins, localize a definição de economia e reescreva-a com suas palavras.</p>`,
  },
  perguntas: [
    { p: 'O que é custo de oportunidade?', r: 'O valor da melhor alternativa abandonada numa escolha.' },
    { p: 'Como Robbins definiu a economia?', r: 'Como o estudo do comportamento humano como relação entre fins e meios escassos com usos alternativos.' },
    { p: 'Qual a diferença entre afirmação positiva e normativa?', r: 'A positiva descreve e pode ser testada; a normativa exprime juízo de valor.' },
  ],
  exercicios: [
    mc('"Economia" vem do grego oikonomia, que significa:', ['Ciência dos preços', 'Administração da casa', 'Comércio internacional', 'Riqueza do rei'], 1, 'Título de um diálogo de Xenofonte.'),
    mc('Você deixa um trabalho de R$ 100 por dia para fazer um curso gratuito de um dia. O custo de oportunidade do curso é:', ['Zero', 'R$ 100', 'O preço do curso', 'Impossível de calcular'], 1, 'O valor da melhor alternativa abandonada.'),
    mc('O exemplo da fábrica de alfinetes ilustra:', ['A inflação', 'A divisão do trabalho', 'O desemprego', 'O custo de oportunidade'], 1, 'Smith, livro I, cap. 1.'),
    mc('"O governo deve reduzir impostos sobre alimentos" é afirmação:', ['Positiva', 'Normativa', 'Estatística', 'Contábil'], 1, 'Exprime juízo sobre o que deveria ser.'),
    mc('A distinção entre economia positiva e normativa foi retomada em 1953 por:', ['Robbins', 'Milton Friedman', 'Adam Smith', 'Keynes'], 1, '"A metodologia da economia positiva".'),
    disc('Escolha uma política pública brasileira e separe: (a) afirmações positivas sobre seus efeitos, com o tipo de dado que as testaria; (b) afirmações normativas sobre ela, com o valor que as fundamenta.', ['Escolhe a política', 'Lista afirmações positivas e dados', 'Lista afirmações normativas e valores', 'Não confunde os dois planos']),
  ],
  resumo: ['Escassez obriga a escolher.', 'Custo de oportunidade: a melhor alternativa abandonada.', 'Incentivos e divisão do trabalho (Smith).', 'Positiva x normativa (J. N. Keynes, Friedman).', 'DSI no plano normativo; economia positiva avalia meios.'],
  referencias: [
    { texto: 'Adam Smith, A riqueza das nações (1776).' },
    { texto: 'Lionel Robbins, Ensaio sobre a natureza e a significação da ciência econômica (1932).' },
    { texto: 'Milton Friedman, "A metodologia da economia positiva" (1953).' },
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004), cap. 4.', link: { url: 'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_po.html', rotulo: 'Compêndio da DSI (vatican.va)' } },
    { texto: 'N. Gregory Mankiw, Introdução à economia, cap. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos indicados'],
  revisao: [['Custo de oportunidade', 'Melhor alternativa abandonada.'], ['Robbins (1932)', 'Fins e meios escassos com usos alternativos.'], ['Positiva x normativa', 'O que é x o que deveria ser.']],
  avancado: {
    texto: `<h3>Fronteira de possibilidades de produção</h3>
<p>O gráfico da fronteira de possibilidades de produção mostra as combinações máximas de dois bens que uma economia pode produzir com seus recursos e técnicas ${tag('fato')}. Pontos dentro da curva indicam recursos ociosos; fora dela, combinações inalcançáveis; seu formato curvado exprime custos de oportunidade crescentes ${tag('fato')}.</p>
<h3>Vantagem comparativa</h3>
<p>David Ricardo (1817) mostrou que dois países ganham com a troca mesmo quando um é mais eficiente em tudo, desde que cada um se especialize naquilo em que tem menor custo de oportunidade ${tag('fato')}. O exemplo clássico usa vinho e tecido entre Portugal e Inglaterra ${tag('fato')}.</p>`,
    leituras: [{ texto: 'David Ricardo, Princípios de economia política e tributação (1817), cap. 7.' }],
    exercicios: [
      mc('Um ponto dentro da fronteira de possibilidades de produção indica:', ['Produção impossível', 'Recursos ociosos', 'Eficiência máxima', 'Inflação'], 1, 'A economia poderia produzir mais.'),
      mc('O exemplo de Ricardo sobre vantagem comparativa envolve:', ['Brasil e Argentina', 'Portugal e Inglaterra', 'França e Espanha', 'EUA e China'], 1, 'Vinho e tecido.'),
      mc('Vantagem comparativa depende de:', ['Custos absolutos', 'Custos de oportunidade relativos', 'Tamanho do país', 'Moeda'], 1, 'Menor custo de oportunidade.'),
      disc('País A produz 10 de café ou 5 de aço por trabalhador; país B, 4 de café ou 4 de aço. Quem tem vantagem comparativa em quê? Mostre os custos de oportunidade.', ['Calcula custos de oportunidade', 'Identifica a vantagem de cada um', 'Explica o ganho com a troca', 'Raciocínio claro'])],
  },
}),

aula({
  id: 'e1-2', titulo: 'Mercados: oferta, demanda e preços', duracao: '120 min',
  aprendera: ['Explicar as leis da oferta e da demanda', 'Distinguir movimento ao longo da curva e deslocamento da curva', 'Determinar o equilíbrio e analisar choques', 'Avaliar os efeitos do controle de preços'],
  prereq: ['Aula anterior', 'Leitura de gráficos cartesianos'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o tomate fica caro depois de uma geada? Por que ingressos de um jogo decisivo se esgotam? O modelo de oferta e demanda, um dos mais usados da economia, explica como preços e quantidades se ajustam nos mercados.</p>

<h3>Demanda</h3>
<p>A <strong>lei da demanda</strong> afirma que, mantidos constantes os demais fatores (<em>ceteris paribus</em>), quanto maior o preço, menor a quantidade demandada ${tag('fato')}. A curva de demanda desloca-se quando mudam outros fatores: renda, preços de bens substitutos e complementares, gostos, expectativas, número de compradores.</p>

<h3>Oferta</h3>
<p>A <strong>lei da oferta</strong>: quanto maior o preço, maior a quantidade que os produtores desejam vender ${tag('fato')}. A curva desloca-se com mudanças nos custos, na tecnologia, no clima (na agricultura), nos impostos e nas expectativas.</p>

<h3>Equilíbrio</h3>
<p>No preço de equilíbrio, a quantidade demandada iguala a ofertada. Acima dele há excedente; abaixo, escassez — e as pressões tendem a levar o preço ao equilíbrio ${tag('argumento')}. Alfred Marshall, nos <em>Princípios de economia</em> (1890), comparou oferta e demanda às duas lâminas de uma tesoura: ambas cortam ${tag('fato')}.</p>
<p><strong>Atenção ao erro mais comum:</strong> "o preço subiu, então a demanda caiu" confunde movimento ao longo da curva (quantidade demandada) com deslocamento da curva (demanda). Uma geada desloca a <em>oferta</em> para a esquerda; o preço sobe e a <em>quantidade demandada</em> cai, sem que a demanda tenha mudado ${tag('argumento')}.</p>

<h3>Elasticidade</h3>
<p>Elasticidade-preço da demanda mede o quanto a quantidade reage ao preço. Bens essenciais sem substitutos (remédios, sal) tendem a ser inelásticos; bens com muitos substitutos, elásticos ${tag('fato')}.</p>

<h3>Controle de preços</h3>
<p>Um preço máximo abaixo do equilíbrio tende a gerar escassez, filas e mercado paralelo ${tag('argumento')}. No Brasil, o Plano Cruzado (1986) congelou preços; depois de alguns meses multiplicaram-se o desabastecimento e a cobrança de "ágio" ${tag('fato')}. Avaliar se e quando controlar preços é questão normativa, mas os efeitos previstos pelo modelo são positivos e testáveis.</p>

<h3>Preço justo</h3>
<p>A escolástica discutiu o preço justo: Santo Tomás, na <em>Suma Teológica</em> (II-II, q. 77), condenou vender uma coisa acima de seu justo valor por fraude e admitiu que o preço varia com a abundância e a escassez de cada lugar e tempo ${tag('fato')}. É reflexão moral sobre a troca, que convive com a análise positiva do mercado ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Ceteris paribus', '"Mantidas as demais coisas constantes": hipótese dos modelos.'],
    ['Demanda', 'Relação entre preço e quantidade que os compradores desejam adquirir.'],
    ['Oferta', 'Relação entre preço e quantidade que os vendedores desejam vender.'],
    ['Equilíbrio', 'Preço em que quantidade demandada iguala a ofertada.'],
    ['Elasticidade-preço', 'Sensibilidade da quantidade a variações de preço.'],
    ['Preço máximo', 'Limite legal superior ao preço de um bem.'],
  ],
  exemplos: `<p><strong>Choque de oferta:</strong> uma seca nas regiões produtoras de café reduz a colheita; a curva de oferta desloca-se para a esquerda, o preço sobe e a quantidade comprada cai. <strong>Choque de demanda:</strong> uma campanha mostrando benefícios do café aumenta a demanda; o preço e a quantidade sobem. Os efeitos sobre a quantidade são opostos — por isso é preciso identificar qual curva se moveu.</p>`,
  contexto: `<p><strong>No mundo:</strong> o modelo foi formalizado no fim do século XIX pelos marginalistas e por Marshall. <strong>No Brasil:</strong> commodities agrícolas (soja, café, milho) e combustíveis têm preços muito sensíveis a choques de oferta internacionais e ao câmbio, o que torna o modelo útil para entender a inflação de alimentos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que um preço máximo abaixo do equilíbrio gera escassez', tag: 'argumento',
    premissas: ['A um preço mais baixo, os compradores desejam comprar mais (lei da demanda).', 'A um preço mais baixo, os vendedores desejam vender menos (lei da oferta).', 'Se o preço é fixado abaixo do equilíbrio, a quantidade desejada pelos compradores supera a oferecida.'],
    conclusao: 'Logo, um preço máximo abaixo do equilíbrio gera escassez, salvo se a oferta for ampliada por outro meio.',
    nota: 'O "salvo se" importa: subsídios, estoques públicos ou importação podem compensar — com seus próprios custos.',
  },
  objecoes: [
    { objecao: 'O modelo de oferta e demanda não vale porque os mercados reais não são perfeitos.', tag: 'debate',
      resposta: 'Nenhum modelo descreve tudo; ele isola mecanismos. Em mercados com poucos vendedores, informação imperfeita ou regulação, o modelo é ajustado (estruturas de mercado, etapa avançada), mas as leis gerais continuam úteis como primeira aproximação testável.' },
  ],
  aplicacao: `<p>Escolha um produto cujo preço mudou muito recentemente. Pesquise a causa e desenhe o gráfico: que curva se deslocou, para que lado, e o que aconteceu com preço e quantidade.</p>`,
  fonte: {
    obra: 'Alfred Marshall, Princípios de economia (1890), livro V, cap. 3; Tomás de Aquino, Suma Teológica II-II, q. 77, a. 1 e 3', link: null,
    orientacao: `<p>Em Marshall, localize a imagem da tesoura. Em Tomás, identifique o que torna uma venda injusta e o que pode legitimamente fazer o preço variar. Compare a pergunta de cada autor: um descreve, o outro avalia moralmente.</p>`,
  },
  perguntas: [
    { p: 'O que diz a lei da demanda?', r: 'Mantidos os demais fatores, quanto maior o preço, menor a quantidade demandada.' },
    { p: 'Uma geada desloca qual curva?', r: 'A da oferta, para a esquerda.' },
    { p: 'O que tende a acontecer com um preço máximo abaixo do equilíbrio?', r: 'Escassez, filas e mercado paralelo.' },
  ],
  exercicios: [
    mc('Se a renda aumenta e o bem é normal, a curva de demanda:', ['Desloca-se para a direita', 'Desloca-se para a esquerda', 'Não se move', 'Torna-se vertical'], 0, 'Mais compradores dispostos a cada preço.'),
    mc('Uma nova tecnologia que reduz custos de produção:', ['Desloca a oferta para a direita', 'Desloca a demanda para a esquerda', 'Aumenta o preço', 'Reduz a quantidade'], 0, 'Mais oferta a cada preço; preço cai e quantidade sobe.'),
    mc('A imagem da tesoura para oferta e demanda é de:', ['Adam Smith', 'Alfred Marshall', 'Keynes', 'Ricardo'], 1, 'Princípios de economia (1890).'),
    mc('O Plano Cruzado (1986) congelou preços e, depois de alguns meses, houve:', ['Excedente de produtos', 'Desabastecimento e cobrança de ágio', 'Queda da demanda', 'Deflação permanente'], 1, 'Efeito previsto pelo modelo.'),
    mc('Um bem essencial sem substitutos tende a ter demanda:', ['Elástica', 'Inelástica', 'Nula', 'Infinita'], 1, 'A quantidade reage pouco ao preço.'),
    disc('Analise o mercado de aluguéis de uma cidade brasileira: que fatores deslocam a oferta e a demanda, o que aconteceria com um teto de aluguel abaixo do equilíbrio e que alternativas teriam efeitos diferentes.', ['Identifica fatores de oferta e demanda', 'Analisa o teto com o modelo', 'Propõe alternativas', 'Distingue positivo e normativo']),
  ],
  resumo: ['Leis da demanda e da oferta (ceteris paribus).', 'Movimento na curva x deslocamento da curva.', 'Equilíbrio; tesoura de Marshall (1890).', 'Elasticidade-preço.', 'Preço máximo gera escassez (Plano Cruzado, 1986); preço justo em Tomás (II-II, q. 77).'],
  referencias: [
    { texto: 'Alfred Marshall, Princípios de economia (1890).' },
    { texto: 'Tomás de Aquino, Suma Teológica, II-II, q. 77.' },
    { texto: 'N. Gregory Mankiw, Introdução à economia, caps. 4–6.' },
    { texto: 'Boris Fausto, História do Brasil (1994), capítulo sobre a Nova República e os planos de estabilização.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Desenhar o gráfico do exercício de aplicação'],
  revisao: [['Lei da demanda', 'Preço maior, quantidade demandada menor.'], ['Deslocamento', 'Muda a curva inteira (renda, custos, clima).'], ['Preço máximo', 'Abaixo do equilíbrio: escassez.']],
  avancado: {
    texto: `<h3>Excedente do consumidor e do produtor</h3>
<p>O excedente do consumidor é a diferença entre o que ele estaria disposto a pagar e o que paga; o do produtor, entre o preço recebido e o custo mínimo pelo qual venderia ${tag('fato')}. Impostos e controles de preço reduzem a soma dos excedentes, criando "peso morto" ${tag('fato')}.</p>
<h3>Quem paga o imposto?</h3>
<p>A incidência econômica de um imposto não depende de quem o recolhe legalmente, mas das elasticidades: o lado menos elástico do mercado arca com a maior parte ${tag('fato')}.</p>`,
    leituras: [{ texto: 'N. Gregory Mankiw, Introdução à economia, caps. 7–8.' }],
    exercicios: [
      mc('O excedente do consumidor é:', ['O preço pago', 'A diferença entre o que estaria disposto a pagar e o que paga', 'O lucro da empresa', 'O imposto'], 1, 'Disposição a pagar menos preço.'),
      mc('"Peso morto" de um imposto é:', ['A arrecadação', 'A perda de excedente total que ninguém recebe', 'O custo de cobrança', 'A inflação'], 1, 'Perda de eficiência.'),
      mc('A incidência de um imposto recai mais sobre:', ['Quem recolhe ao governo', 'O lado menos elástico do mercado', 'Sempre o consumidor', 'Sempre o produtor'], 1, 'Depende das elasticidades.'),
      disc('Um imposto sobre cigarros recai mais sobre fumantes ou fabricantes? Use o conceito de elasticidade e discuta também o aspecto normativo do imposto.', ['Usa elasticidade', 'Conclui sobre a incidência', 'Separa o normativo', 'Raciocínio claro'])],
  },
}),

aula({
  id: 'e1-3', titulo: 'Medir a economia: PIB, inflação, juros e desemprego', duracao: '120 min',
  aprendera: ['Explicar o que mede o PIB e seus limites', 'Distinguir PIB nominal, real e per capita', 'Explicar inflação, IPCA e o regime de metas', 'Interpretar a taxa Selic e a taxa de desocupação'],
  prereq: ['Aulas anteriores', 'Porcentagem e variação percentual'],
  explicacao: `
<h3>O problema</h3>
<p>"A economia cresceu 3%", "a inflação passou da meta", "o desemprego caiu". Esses números orientam decisões de governos, empresas e famílias. Entender como são construídos é a condição para não ser enganado por eles.</p>

<h3>PIB</h3>
<p>O Produto Interno Bruto é o valor de mercado de todos os bens e serviços finais produzidos num território num período ${tag('fato')}. Pode ser calculado por três óticas, que devem coincidir: produção (valor adicionado), renda (salários, lucros, juros, aluguéis) e despesa (consumo + investimento + gastos do governo + exportações − importações) ${tag('fato')}. As contas nacionais modernas foram desenvolvidas nos anos 1930, com contribuição decisiva de Simon Kuznets ${tag('fato')}. No Brasil, o IBGE calcula o PIB trimestral e anualmente ${tag('fato')}.</p>
<ul>
<li><strong>Nominal</strong>: a preços correntes. <strong>Real</strong>: descontada a inflação; é o que mede o crescimento.</li>
<li><strong>Per capita</strong>: dividido pela população; não mostra como a renda se distribui.</li>
<li><strong>Limites</strong>: não inclui o trabalho doméstico não pago nem o voluntariado; não mede a distribuição, a qualidade de vida nem a depleção de recursos naturais ${tag('interpretacao')}. Kuznets alertou que o bem-estar de uma nação dificilmente se infere de uma medida da renda nacional ${tag('fato')}.</li>
</ul>

<h3>Inflação</h3>
<p>Inflação é o aumento generalizado e persistente dos preços. No Brasil, o índice oficial para as metas é o IPCA, calculado pelo IBGE ${tag('fato')}. O país conviveu com inflação muito alta nos anos 1980 e início dos 1990 — acima de 2.000% em 1993 — até o Plano Real (1994) ${tag('fato')}. Desde 1999 vigora o regime de metas de inflação: o Conselho Monetário Nacional fixa a meta, e o Banco Central atua para cumpri-la ${tag('fato')}.</p>

<h3>Juros</h3>
<p>A taxa Selic é a taxa básica de juros da economia, definida pelo Comitê de Política Monetária (Copom) do Banco Central ${tag('fato')}. Juros mais altos tendem a reduzir o crédito e o consumo e a conter a inflação, com custo sobre a atividade ${tag('interpretacao')}. Juro <strong>real</strong> é o juro nominal descontada a inflação.</p>

<h3>Desemprego</h3>
<p>A taxa de desocupação, medida pela PNAD Contínua do IBGE, é a proporção de pessoas na força de trabalho que procuraram emprego e não encontraram ${tag('fato')}. Quem desistiu de procurar não entra como desocupado — por isso se olham também a subutilização e o desalento ${tag('fato')}.</p>`,
  vocabulario: [
    ['PIB', 'Valor de mercado dos bens e serviços finais produzidos num território e período.'],
    ['PIB real', 'PIB descontada a variação de preços.'],
    ['IPCA', 'Índice de preços oficial do regime de metas, calculado pelo IBGE.'],
    ['Regime de metas', 'Política em que o Banco Central busca uma meta de inflação fixada pelo CMN (desde 1999).'],
    ['Selic', 'Taxa básica de juros definida pelo Copom.'],
    ['Taxa de desocupação', 'Desocupados ÷ força de trabalho (PNAD Contínua).'],
  ],
  exemplos: `<p><strong>Nominal x real:</strong> se o PIB nominal cresceu 8% e os preços subiram 5%, o crescimento real foi de aproximadamente 3% (mais exatamente, 1,08 ÷ 1,05 − 1 ≈ 2,9%). Anunciar os 8% como "crescimento" seria enganoso.</p>`,
  contexto: `<p><strong>No mundo:</strong> PIB, inflação e desemprego são medidos por metodologias internacionais harmonizadas (Sistema de Contas Nacionais da ONU, conceitos da OIT). <strong>No Brasil:</strong> IBGE e Banco Central produzem as séries oficiais, públicas e consultáveis; a memória da hiperinflação explica a importância política da estabilidade de preços no país ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o crescimento se mede pelo PIB real', tag: 'argumento',
    premissas: ['O PIB nominal aumenta quando aumentam as quantidades produzidas ou os preços.', 'O aumento de preços sem aumento de quantidades não torna o país mais produtivo.', 'Crescimento econômico significa produzir mais bens e serviços.'],
    conclusao: 'Logo, o crescimento deve ser medido pelo PIB real, que retira o efeito dos preços.',
    nota: 'Mesmo o PIB real não mede bem-estar nem distribuição: é medida de produção.',
  },
  objecoes: [
    { objecao: 'Se o PIB tem tantos limites, deveríamos abandoná-lo.', tag: 'debate',
      resposta: 'É uma medida de produção útil e comparável; o erro é tratá-la como medida de bem-estar. Indicadores complementares (IDH, distribuição de renda, indicadores ambientais) acrescentam o que ela não mostra.' },
  ],
  aplicacao: `<p>Consulte o último resultado do PIB trimestral (IBGE), o IPCA acumulado em 12 meses e a Selic vigente (Banco Central). Registre os três números com data e fonte, e escreva uma frase positiva e uma normativa sobre eles.</p>`,
  fonte: {
    obra: 'IBGE, notas metodológicas do Sistema de Contas Nacionais e do IPCA; Banco Central do Brasil, página do Copom e do regime de metas', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' },
    orientacao: `<p>Identifique na nota do IPCA que famílias e cidades o índice cobre. Na página do Banco Central, localize a meta de inflação vigente e o intervalo de tolerância.</p>`,
  },
  perguntas: [
    { p: 'Quais as três óticas de cálculo do PIB?', r: 'Produção, renda e despesa.' },
    { p: 'Desde quando vigora o regime de metas de inflação no Brasil?', r: 'Desde 1999.' },
    { p: 'Quem define a Selic?', r: 'O Copom, do Banco Central.' },
  ],
  exercicios: [
    mc('O PIB mede:', ['A riqueza acumulada do país', 'O valor dos bens e serviços finais produzidos num período', 'O bem-estar da população', 'A arrecadação do governo'], 1, 'É fluxo de produção, não estoque de riqueza.'),
    mc('PIB nominal cresceu 10% e os preços, 6%. O crescimento real foi de aproximadamente:', ['16%', '10%', '4%', '6%'], 2, '1,10 ÷ 1,06 − 1 ≈ 3,8%.'),
    mc('O índice oficial do regime de metas de inflação no Brasil é o:', ['IGP-M', 'IPCA', 'INCC', 'IPC-Fipe'], 1, 'Calculado pelo IBGE.'),
    mc('A taxa Selic é definida pelo:', ['Ministério da Fazenda', 'Copom', 'IBGE', 'Congresso'], 1, 'Comitê de Política Monetária do Banco Central.'),
    mc('Quem desistiu de procurar emprego, na PNAD Contínua:', ['Conta como desocupado', 'Não conta como desocupado (desalento)', 'Conta como ocupado', 'Não é pesquisado'], 1, 'Por isso se acompanha a subutilização.'),
    disc('Explique por que o PIB per capita de um país pode crescer enquanto a renda da maioria da população fica estagnada, e que indicadores complementares você usaria.', ['Explica média e distribuição', 'Dá exemplo', 'Propõe indicadores complementares', 'Raciocínio claro']),
  ],
  resumo: ['PIB: três óticas; nominal, real, per capita; limites (Kuznets).', 'Inflação: IPCA; hiperinflação até 1994.', 'Regime de metas desde 1999 (CMN e Banco Central).', 'Selic definida pelo Copom; juro real.', 'Desocupação (PNAD Contínua) e desalento.'],
  referencias: [
    { texto: 'IBGE, Sistema de Contas Nacionais: notas metodológicas.' },
    { texto: 'IBGE, IPCA: notas metodológicas.' },
    { texto: 'Banco Central do Brasil, Relatório de Política Monetária.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
    { texto: 'Simon Kuznets, National Income, 1929–1932 (1934), relatório ao Senado dos EUA.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar os três indicadores oficiais'],
  revisao: [['PIB real', 'Descontada a inflação.'], ['Regime de metas', 'Desde 1999.'], ['Selic', 'Definida pelo Copom.']],
  avancado: {
    texto: `<h3>Deflator e índices de preços</h3>
<p>O deflator implícito do PIB mede a variação de preços de tudo o que é produzido; índices ao consumidor medem uma cesta de consumo das famílias ${tag('fato')}. Por isso podem divergir: uma alta no preço de bens exportados afeta o deflator mais que o IPCA ${tag('fato')}.</p>
<h3>Paridade do poder de compra</h3>
<p>Para comparar PIBs de países, converter pelo câmbio de mercado distorce, porque os preços locais diferem; a paridade do poder de compra (PPC) ajusta pelos preços de uma cesta comum ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, Contas Nacionais: notas sobre deflatores.' }],
    exercicios: [
      mc('O deflator do PIB mede preços:', ['Só de alimentos', 'De tudo o que é produzido no país', 'Só de importados', 'Da cesta básica'], 1, 'Abrange toda a produção.'),
      mc('Para comparar o nível de vida entre países, usa-se preferencialmente:', ['Câmbio de mercado', 'Paridade do poder de compra', 'PIB nominal', 'Selic'], 1, 'PPC ajusta pelos preços locais.'),
      mc('Uma alta nos preços de bens exportados afeta mais:', ['O IPCA', 'O deflator do PIB', 'A taxa de desocupação', 'A Selic'], 1, 'O deflator inclui exportações.'),
      disc('Compare o PIB per capita do Brasil e de outro país em dólares correntes e em PPC, com fonte, e explique a diferença.', ['Dados com fonte e ano', 'Duas medidas', 'Explica a diferença', 'Conclusão'])],
  },
}),

aula({
  id: 'e1-4', titulo: 'Modelos, dados e causalidade: números-índice, juros reais e evidência', duracao: '120 min',
  aprendera: ['Calcular inflação acumulada e variação real', 'Calcular juros reais pela equação de Fisher', 'Explicar o papel dos modelos e da hipótese ceteris paribus', 'Distinguir correlação e causalidade e conhecer métodos de identificação'],
  prereq: ['Aulas anteriores do módulo', 'Estatística básica: média e proporção'],
  explicacao: `
<h3>O problema</h3>
<p>A economia usa modelos simplificados e dados imperfeitos para responder perguntas sobre causas: o aumento do salário mínimo reduz empregos? a escolaridade aumenta a renda? Esta aula ensina os cálculos básicos e o cuidado com a causalidade.</p>

<h3>Números-índice e variação acumulada</h3>
<p>Um índice compara um valor com uma base (base = 100). A variação acumulada de vários períodos não é a soma das variações, mas o produto: (1 + i₁) × (1 + i₂) × … − 1 ${tag('fato')}. Três meses de 1% resultam em 3,03%, não 3%. Em inflação alta, a diferença é enorme.</p>

<h3>Juros reais</h3>
<p>Pela equação de Fisher, (1 + r) = (1 + i) ÷ (1 + π), em que i é o juro nominal, π a inflação e r o juro real ${tag('fato')}. Se a aplicação rendeu 12% e a inflação foi 5%, o ganho real foi 1,12 ÷ 1,05 − 1 ≈ 6,7%, e não 7%.</p>

<h3>Modelos</h3>
<p>Um modelo econômico é uma simplificação que isola um mecanismo, sob hipóteses explícitas, e gera previsões testáveis ${tag('fato')}. A hipótese <em>ceteris paribus</em> permite examinar um efeito de cada vez, mas no mundo real tudo varia junto. Friedman (1953) sustentou que um modelo deve ser julgado pelas previsões, não pelo realismo das hipóteses; críticos responderam que hipóteses irrealistas podem produzir previsões certas pelas razões erradas ${tag('debate')}.</p>

<h3>Correlação não é causalidade</h3>
<p>Duas variáveis podem andar juntas porque uma causa a outra, porque uma terceira causa ambas, ou por acaso. Para identificar causas, economistas usam experimentos aleatorizados, experimentos naturais e métodos estatísticos como diferenças em diferenças e variáveis instrumentais ${tag('fato')}. David Card, Joshua Angrist e Guido Imbens receberam o Nobel de Economia de 2021 por contribuições a essa "revolução da credibilidade" ${tag('fato')}. O estudo de Card e Krueger sobre salário mínimo em restaurantes de Nova Jersey e da Pensilvânia (1994) tornou-se um exemplo clássico, e seus resultados foram muito debatidos ${tag('debate')}.</p>

<h3>Onde buscar dados</h3>
<p>No Brasil: IBGE (contas nacionais, preços, emprego, censos), Banco Central (Sistema Gerenciador de Séries Temporais) e IPEADATA ${tag('fato')}. Todo dado citado deve ter fonte, série e data de consulta.</p>`,
  vocabulario: [
    ['Número-índice', 'Valor relativo a uma base igual a 100.'],
    ['Variação acumulada', 'Produto das variações sucessivas, não a soma.'],
    ['Equação de Fisher', '(1 + r) = (1 + i) ÷ (1 + π).'],
    ['Modelo', 'Simplificação com hipóteses explícitas que gera previsões testáveis.'],
    ['Variável de confusão', 'Terceira variável que causa as duas observadas.'],
    ['Experimento natural', 'Situação real que separa grupos de modo quase aleatório.'],
  ],
  exemplos: `<p><strong>Correlação enganosa:</strong> cidades com mais hospitais têm mais mortes. Os hospitais não causam mortes: cidades maiores têm mais hospitais e mais habitantes, e portanto mais óbitos. A população é a variável de confusão; comparar taxas por habitante já corrige parte do erro.</p>`,
  contexto: `<p><strong>No mundo:</strong> a econometria e os métodos de avaliação de impacto transformaram a pesquisa econômica e a avaliação de políticas públicas. <strong>No Brasil:</strong> programas como o Bolsa Família foram objeto de muitas avaliações de impacto, com resultados e debates publicados em instituições como o Ipea ${tag('fato')} — campo em que dados públicos permitem pesquisa séria.</p>`,
  argumento: {
    titulo: 'Por que a inflação acumulada não é a soma das mensais', tag: 'argumento',
    premissas: ['Cada variação mensal incide sobre o preço já reajustado no mês anterior.', 'Aplicar uma porcentagem sobre uma base maior produz um aumento absoluto maior.', 'Somar as porcentagens ignora esse efeito sobre a base.'],
    conclusao: 'Logo, a variação acumulada é composta: multiplica-se (1 + i) de cada período e subtrai-se 1.',
    nota: 'É o mesmo raciocínio dos juros compostos, que aparecem na Economia aplicada (etapa 9).',
  },
  objecoes: [
    { objecao: 'Se correlação não prova causa, a economia não prova nada.', tag: 'debate',
      resposta: 'Correlação sozinha não prova, mas desenhos de pesquisa (experimentos, experimentos naturais, comparações cuidadosas) permitem inferências causais com grau de confiança declarado. A conclusão honesta indica esse grau.' },
  ],
  aplicacao: `<p>No Sistema de Séries Temporais do Banco Central ou no IPEADATA, obtenha a variação mensal do IPCA dos últimos 12 meses e calcule a inflação acumulada. Depois calcule o juro real de uma aplicação que rendeu a Selic média do período.</p>`,
  fonte: {
    obra: 'Milton Friedman, "A metodologia da economia positiva" (1953); Joshua Angrist e Jörn-Steffen Pischke, Mostly Harmless Econometrics (2009), cap. 1', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' },
    orientacao: `<p>Em Friedman, localize a tese sobre o realismo das hipóteses. Em Angrist e Pischke, a pergunta "qual é o experimento ideal?". Aplique os dois a uma afirmação causal de uma notícia econômica.</p>`,
  },
  perguntas: [
    { p: 'Três meses de inflação de 2% resultam em quanto acumulado?', r: '1,02³ − 1 ≈ 6,12%.' },
    { p: 'Como se calcula o juro real?', r: 'Pela equação de Fisher: (1 + i) ÷ (1 + π) − 1.' },
    { p: 'Por que o Nobel de 2021 foi para Card, Angrist e Imbens?', r: 'Por contribuições à identificação de causalidade com experimentos naturais e métodos de avaliação.' },
  ],
  exercicios: [
    mc('Inflação de 10% num ano e 10% no seguinte acumula:', ['20%', '21%', '19%', '100%'], 1, '1,1 × 1,1 − 1 = 21%.'),
    mc('Rendimento nominal de 8% com inflação de 8% dá juro real de:', ['16%', '8%', '0%', '−8%'], 2, '1,08 ÷ 1,08 − 1 = 0.'),
    mc('Ceteris paribus significa:', ['Tudo varia junto', 'Mantidas constantes as demais coisas', 'Preço de equilíbrio', 'Correlação perfeita'], 1, 'Isola um efeito de cada vez.'),
    mc('O Nobel de Economia de 2021 premiou estudos de:', ['Inflação alemã', 'Identificação causal e experimentos naturais', 'Comércio internacional', 'Contas nacionais'], 1, 'Card, Angrist e Imbens.'),
    mc('Cidades com mais sorveterias têm mais afogamentos. A explicação mais provável é:', ['Sorvete causa afogamento', 'Uma variável de confusão, como o calor', 'Afogamentos causam sorveterias', 'Coincidência impossível de explicar'], 1, 'O verão aumenta as duas.'),
    disc('Escolha uma afirmação causal sobre a economia brasileira publicada na imprensa e avalie-a: que correlação ela usa, que variáveis de confusão poderiam existir e que desenho de pesquisa a testaria.', ['Identifica a afirmação e a correlação', 'Aponta variáveis de confusão', 'Propõe desenho de pesquisa', 'Conclusão sobre o grau de confiança']),
  ],
  resumo: ['Variação acumulada é composta.', 'Juro real pela equação de Fisher.', 'Modelos simplificam; ceteris paribus; debate sobre Friedman (1953).', 'Correlação não é causa; experimentos e experimentos naturais (Nobel 2021).', 'Dados: IBGE, Banco Central (SGS), IPEADATA.'],
  referencias: [
    { texto: 'Milton Friedman, "A metodologia da economia positiva" (1953).' },
    { texto: 'Joshua Angrist e Jörn-Steffen Pischke, Mostly Harmless Econometrics (2009).' },
    { texto: 'David Card e Alan Krueger, "Minimum Wages and Employment" (1994).' },
    { texto: 'Banco Central do Brasil, Sistema Gerenciador de Séries Temporais.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
    { texto: 'IPEADATA.', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Calcular inflação acumulada e juro real com dados oficiais'],
  revisao: [['Acumulado', 'Produto de (1 + i) menos 1.'], ['Fisher', '(1 + r) = (1 + i) ÷ (1 + π).'], ['Correlação', 'Não é causalidade.']],
  avancado: {
    texto: `<h3>Regressão linear</h3>
<p>A regressão estima como uma variável muda, em média, quando outra muda, controlando por terceiras variáveis observadas ${tag('fato')}. O coeficiente só tem interpretação causal se não houver variáveis de confusão não observadas — hipótese que precisa ser defendida, não suposta ${tag('argumento')}.</p>
<h3>Diferenças em diferenças</h3>
<p>Compara a mudança ao longo do tempo num grupo afetado por uma política com a mudança num grupo não afetado; a hipótese central é que, sem a política, os dois grupos teriam seguido tendências paralelas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joshua Angrist e Jörn-Steffen Pischke, Mastering ’Metrics (2014).' }],
    exercicios: [
      mc('Em diferenças em diferenças, a hipótese central é:', ['Os grupos são idênticos', 'Tendências paralelas sem a política', 'Não há dados', 'A política é aleatória'], 1, 'Tendências paralelas.'),
      mc('Um coeficiente de regressão tem interpretação causal quando:', ['É grande', 'Não há confusão não observada', 'Os dados são muitos', 'O R² é alto'], 1, 'Hipótese de identificação.'),
      mc('Controlar por variáveis observadas resolve:', ['Toda confusão', 'Apenas a confusão por essas variáveis', 'Nenhuma confusão', 'O problema da inflação'], 1, 'Não observadas continuam um risco.'),
      disc('Desenhe uma avaliação de diferenças em diferenças para uma política municipal brasileira: grupos, período, dados e como testaria a hipótese de tendências paralelas.', ['Define grupos e período', 'Indica dados', 'Explica o teste de tendências', 'Aponta limites'])],
  },
}),

avaliacao('e1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre escassez, mercados, indicadores e métodos, incluindo cálculos, e duas discursivas de análise. Tenha calculadora.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de variação acumulada, PIB real e juro real.</li><li>Releia a distinção entre afirmações positivas e normativas.</li></ul>`,
[
  disc('Escolha uma notícia econômica brasileira recente e analise-a: identifique os indicadores usados (com fonte), os cálculos implícitos, as afirmações positivas e normativas e uma possível confusão entre correlação e causa.', ['Indicadores com fonte', 'Cálculos conferidos', 'Separa positivo e normativo', 'Aponta questão causal', 'Conclusão fundamentada']),
  disc('Use o modelo de oferta e demanda para explicar a variação recente de preço de um alimento no Brasil, com dados do IPCA, e discuta uma política possível, separando seus efeitos previstos e o juízo moral sobre ela.', ['Identifica a curva deslocada', 'Usa dados do IPCA', 'Prevê efeitos da política', 'Separa o juízo moral']),
]),
];
