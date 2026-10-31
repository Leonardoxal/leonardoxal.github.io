// Matemática II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Matemática).
// Da Antiguidade à Idade Média; da Revolução científica ao século XX; Euclides, Descartes e Pascal; Euler, Gauss, Cantor, Hilbert e Poincaré.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ma2-1', titulo: 'Da Antiguidade à Idade Média: Egito, Grécia, Índia e o mundo islâmico', duracao: '150 min',
  aprendera: ['Situar a matemática egípcia e babilônica', 'Explicar a novidade grega da demonstração', 'Conhecer a origem do zero e dos numerais indo-arábicos', 'Situar o quadrívio e a matemática medieval'],
  prereq: ['Matemática I (módulo MA1)'],
  explicacao: `
<h3>O problema</h3>
<p>De onde vêm os números que escrevemos, as fórmulas que usamos e a própria ideia de demonstrar?</p>
<h3>Egito e Mesopotâmia</h3>
<p>O papiro de Rhind (c. 1650 a.C.) traz problemas de aritmética e geometria práticas ${tag('fato')}. Os babilônios usavam um sistema de base 60, herdado em nossa contagem de minutos e graus, e tábuas como a Plimpton 322 trazem ternos ligados ao que chamamos teorema de Pitágoras ${tag('fato')}.</p>
<h3>Grécia</h3>
<p>Os gregos passaram de regras práticas a demonstrações ${tag('interpretacao')}. Tales e Pitágoras são figuras fundadoras, embora pouco se saiba com segurança sobre suas obras ${tag('fato')}. Euclides (c. 300 a.C.) organizou os Elementos; Arquimedes (c. 287–212 a.C.) calculou áreas e volumes por métodos que antecipam o cálculo; Apolônio estudou as cônicas; Diofanto, problemas aritméticos ${tag('fato')}.</p>
<h3>Índia e mundo islâmico</h3>
<p>Na Índia desenvolveu-se a numeração posicional decimal com o zero; Brahmagupta (628) deu regras de cálculo com zero e negativos ${tag('fato')}. Al-Khwarizmi (século IX), em Bagdá, escreveu tratados de álgebra e de aritmética indiana; de seu nome vem "algoritmo" ${tag('fato')}.</p>
<h3>Idade Média latina</h3>
<p>Boécio transmitiu a aritmética pitagórica no quadrívio ${tag('fato')}. Leonardo de Pisa (Fibonacci), no Liber abaci (1202), difundiu os numerais indo-arábicos na Europa ${tag('fato')}. Nicole Oresme (século XIV) representou graficamente qualidades variáveis, antecipando gráficos de funções ${tag('fato')}.</p>`,
  vocabulario: [
    ['Base 60', 'Sistema sexagesimal babilônico.'],
    ['Numeração posicional', 'Sistema em que o valor do algarismo depende da posição.'],
    ['Quadrívio', 'Aritmética, geometria, música e astronomia no ensino medieval.'],
    ['Algoritmo', 'Procedimento passo a passo; palavra derivada de al-Khwarizmi.'],
    ['Método de exaustão', 'Técnica grega de aproximar áreas por figuras inscritas.'],
  ],
  exemplos: `<p><strong>Arquimedes e o círculo:</strong> inscrevendo e circunscrevendo polígonos de até 96 lados, Arquimedes mostrou que π está entre 3 10/71 e 3 1/7 (cerca de 3,1408 e 3,1429). É um exemplo de aproximação rigorosa: os limites são demonstrados, não estimados.</p>`,
  contexto: `<p><strong>No mundo:</strong> o papiro de Rhind está no Museu Britânico ${tag('fato')}. <strong>No Brasil:</strong> a etnomatemática, desenvolvida por Ubiratan D'Ambrosio, estuda as práticas matemáticas de diferentes culturas, inclusive indígenas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a demonstração grega foi uma revolução', tag: 'interpretacao',
    premissas: ['Egípcios e babilônios tinham regras corretas para muitos problemas.', 'Os gregos passaram a perguntar por que as regras valem e a deduzi-las de princípios.', 'Essa passagem transformou a matemática em ciência demonstrativa.'],
    conclusao: 'Logo, a demonstração grega marca uma mudança qualitativa na história da matemática.',
    nota: 'Historiadores discutem quanto os gregos deveram aos egípcios e babilônios.',
  },
  objecoes: [
    { objecao: 'A Idade Média nada contribuiu para a matemática.', tag: 'debate',
      resposta: 'A Idade Média latina preservou e ensinou o quadrívio, recebeu a matemática árabe e produziu contribuições como as de Fibonacci e Oresme. Os mundos islâmico e indiano, no mesmo período, foram muito criativos. A imagem de uma "idade das trevas" matemática não resiste aos fatos.' },
  ],
  aplicacao: `<p>Comece a linha do tempo da etapa com oito marcos da Antiguidade e da Idade Média, cada um com data, autor ou obra e contribuição.</p>`,
  fonte: {
    obra: 'Boécio, A instituição aritmética, livro I, caps. 1–2', link: null,
    orientacao: `<p>Observe como Boécio justifica o estudo do quadrívio e o lugar da aritmética entre as quatro artes.</p>`,
  },
  perguntas: [
    { p: 'O que herdamos da base 60 babilônica?', r: 'A divisão de horas em minutos e segundos e dos graus.' },
    { p: 'Onde se desenvolveu a numeração posicional com zero?', r: 'Na Índia.' },
    { p: 'Que obra difundiu os numerais indo-arábicos na Europa?', r: 'O Liber abaci de Fibonacci (1202).' },
  ],
  exercicios: [
    mc('O papiro de Rhind é de cerca de:', ['3000 a.C.', '1650 a.C.', '300 a.C.', '628 d.C.'], 1, 'Egito.'),
    mc('"Algoritmo" deriva do nome de:', ['Euclides', 'al-Khwarizmi', 'Brahmagupta', 'Boécio'], 1, 'Bagdá.'),
    mc('Arquimedes situou π entre:', ['3 e 4', '3 10/71 e 3 1/7', '3,2 e 3,3', '2 e 3'], 1, 'Polígonos.'),
    mc('O Liber abaci é de:', ['628', '820', '1202', '1350'], 2, 'Fibonacci.'),
    mc('A etnomatemática foi desenvolvida por:', ['Ubiratan D\'Ambrosio', 'Malba Tahan', 'Artur Avila', 'Elon Lages Lima'], 0, 'Brasil.'),
    disc('Monte a linha do tempo com oito marcos.', ['Marcos', 'Datas', 'Contribuições', 'Ordem']),
  ],
  resumo: ['Egito e Babilônia: regras práticas.', 'Grécia: demonstração.', 'Índia: zero e posição.', 'Islã: álgebra.', 'Idade Média: quadrívio, Fibonacci, Oresme.'],
  referencias: [
    { texto: 'Boécio, A instituição aritmética.', livro: 'boecio-quadrivio' },
    { texto: 'Carl B. Boyer, História da matemática (1968).' },
    { texto: 'Ubiratan D\'Ambrosio, Etnomatemática (2001).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Base 60', 'Babilônia.'], ['Zero', 'Índia.'], ['1202', 'Fibonacci.']],
  avancado: {
    texto: `<h3>A sequência de Fibonacci</h3>
<p>No Liber abaci aparece o problema dos coelhos, que gera 1, 1, 2, 3, 5, 8, 13, ..., em que cada termo é a soma dos dois anteriores ${tag('fato')}. A razão entre termos consecutivos tende a φ = (1 + √5)/2 ≈ 1,618, a razão áurea ${tag('fato')}. Muitas afirmações populares sobre a razão áurea na arte e na natureza são exageradas ou sem fundamento ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Carl B. Boyer, História da matemática (1968), capítulo sobre a Europa medieval.' }],
    exercicios: [
      mc('O termo seguinte de 1, 1, 2, 3, 5, 8 é:', ['11', '13', '12', '15'], 1, '5 + 8.'),
      mc('φ vale aproximadamente:', ['1,414', '1,618', '3,1416', '2,718'], 1, 'Razão áurea.'),
      mc('A razão entre termos consecutivos de Fibonacci tende a:', ['φ', 'π', 'e', '2'], 0, 'Limite.'),
      disc('Mostre que φ satisfaz x² = x + 1 e explique a ligação com a regra de Fibonacci.', ['Equação', 'Verificação', 'Ligação', 'Cautela'])],
  },
}),

aula({
  id: 'ma2-2', titulo: 'Da Revolução científica ao século XX: cálculo, rigor e abstração', duracao: '150 min',
  aprendera: ['Situar a geometria analítica e o cálculo', 'Conhecer a origem da probabilidade', 'Explicar a busca de rigor no século XIX', 'Situar as geometrias não euclidianas e a matemática no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a matemática se tornou a linguagem da física moderna e, depois, uma ciência de estruturas abstratas?</p>
<h3>Século XVII</h3>
<p>Descartes, na Geometria (1637), e Fermat ligaram álgebra e geometria por coordenadas ${tag('fato')}. A correspondência de Pascal e Fermat (1654) sobre jogos de azar fundou o cálculo de probabilidades ${tag('fato')}. Newton e Leibniz desenvolveram o cálculo diferencial e integral de modo independente; Leibniz publicou primeiro (1684), e houve longa disputa de prioridade ${tag('fato')}.</p>
<h3>Século XVIII</h3>
<p>Euler foi o matemático mais produtivo do século, com contribuições em análise, teoria dos números e mecânica ${tag('fato')}.</p>
<h3>Século XIX: rigor</h3>
<p>Gauss publicou as Disquisitiones arithmeticae (1801) ${tag('fato')}. Cauchy e Weierstrass deram definições rigorosas de limite e continuidade ${tag('fato')}. Lobachevsky e Bolyai, por volta de 1830, construíram geometrias em que o quinto postulado de Euclides não vale; Riemann (1854) generalizou a noção de espaço ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>Cantor e a teoria dos conjuntos, a crise dos fundamentos, Gödel e Turing (estudados em Lógica formal) marcaram o século ${tag('fato')}. O grupo Bourbaki, a partir de 1935, reescreveu a matemática em termos de estruturas ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>O Instituto de Matemática Pura e Aplicada (IMPA) foi criado em 1952 ${tag('fato')}. Artur Avila recebeu a Medalha Fields em 2014, o primeiro latino-americano a recebê-la ${tag('fato')}.</p>`,
  vocabulario: [
    ['Geometria analítica', 'Estudo de figuras por meio de coordenadas e equações.'],
    ['Cálculo', 'Estudo das taxas de variação (derivadas) e acumulações (integrais).'],
    ['Rigor', 'Exigência de definições precisas e demonstrações completas.'],
    ['Geometria não euclidiana', 'Geometria em que o quinto postulado de Euclides não vale.'],
    ['Medalha Fields', 'Prêmio internacional para matemáticos com até 40 anos.'],
  ],
  exemplos: `<p><strong>O problema das partidas:</strong> dois jogadores interrompem um jogo antes do fim; como dividir o prêmio de modo justo? Pascal e Fermat resolveram calculando as chances de cada um vencer se o jogo continuasse. A justiça da divisão levou ao conceito de probabilidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Medalha Fields é concedida a cada quatro anos no Congresso Internacional de Matemáticos ${tag('fato')}. <strong>No Brasil:</strong> o Rio de Janeiro sediou o Congresso Internacional de Matemáticos em 2018 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o século XIX buscou rigor', tag: 'argumento',
    premissas: ['O cálculo de Newton e Leibniz usava infinitésimos de modo intuitivo e às vezes contraditório.', 'Isso gerou resultados duvidosos com séries e funções estranhas.', 'Definições precisas de limite e continuidade resolveram as dificuldades.'],
    conclusao: 'Logo, a busca de rigor respondeu a problemas reais da própria matemática.',
    nota: 'O bispo George Berkeley criticou os infinitésimos em O analista (1734).',
  },
  objecoes: [
    { objecao: 'As geometrias não euclidianas mostram que Euclides estava errado.', tag: 'debate',
      resposta: 'Elas mostram que o quinto postulado não é consequência dos outros e que há geometrias coerentes sem ele. A geometria euclidiana continua correta como sistema e adequada para espaços pequenos; a relatividade geral usa geometria não euclidiana para o espaço-tempo.' },
  ],
  aplicacao: `<p>Complete a linha do tempo com oito marcos de Descartes ao século XX, incluindo dois marcos brasileiros.</p>`,
  fonte: {
    obra: 'Blaise Pascal, Tratado do triângulo aritmético e correspondência com Fermat (1654)', link: null,
    orientacao: `<p>Observe como o problema das partidas é resolvido e como o triângulo aritmético entra na solução.</p>`,
  },
  perguntas: [
    { p: 'Quem fundou a geometria analítica?', r: 'Descartes e Fermat.' },
    { p: 'Onde nasceu o cálculo de probabilidades?', r: 'Na correspondência de Pascal e Fermat (1654).' },
    { p: 'O que é uma geometria não euclidiana?', r: 'Uma geometria em que o quinto postulado de Euclides não vale.' },
  ],
  exercicios: [
    mc('A Geometria de Descartes é de:', ['1637', '1654', '1684', '1801'], 0, 'Discurso.'),
    mc('Leibniz publicou o cálculo em:', ['1637', '1684', '1687', '1734'], 1, 'Prioridade.'),
    mc('As Disquisitiones arithmeticae são de:', ['Euler', 'Gauss', 'Cauchy', 'Riemann'], 1, '1801.'),
    mc('O IMPA foi criado em:', ['1934', '1952', '1985', '2014'], 1, 'Brasil.'),
    mc('Artur Avila recebeu a Medalha Fields em:', ['2010', '2014', '2018', '2022'], 1, 'Primeiro latino-americano.'),
    disc('Complete a linha do tempo com oito marcos e dois marcos brasileiros.', ['Marcos', 'Datas', 'Brasil', 'Contribuições']),
  ],
  resumo: ['Descartes e Fermat: coordenadas.', 'Pascal e Fermat: probabilidade.', 'Newton e Leibniz: cálculo.', 'Século XIX: rigor e não euclidianas.', 'IMPA (1952); Avila (2014).'],
  referencias: [
    { texto: 'René Descartes, A geometria (1637).', livro: 'descartes-ensaios' },
    { texto: 'Blaise Pascal, Tratado do triângulo aritmético (1654).', livro: 'pascal-triangulo' },
    { texto: 'Carl B. Boyer, História da matemática (1968).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1637', 'Geometria analítica.'], ['1654', 'Probabilidade.'], ['1952', 'IMPA.']],
  avancado: {
    texto: `<h3>A crítica de Berkeley</h3>
<p>Em O analista (1734), Berkeley observou que Newton tratava as quantidades evanescentes ora como não nulas (para dividir por elas) ora como nulas (para desprezá-las), chamando-as de "fantasmas de quantidades que partiram" ${tag('fato')}. A crítica era logicamente justa ${tag('interpretacao')}. A resposta definitiva veio com a definição de limite por ε e δ no século XIX ${tag('fato')}.</p>`,
    leituras: [{ texto: 'George Berkeley, O analista (1734).' }],
    exercicios: [
      mc('Berkeley criticou o uso de:', ['Infinitésimos', 'Números negativos', 'Coordenadas', 'Primos'], 0, 'Fantasmas.'),
      mc('O analista é de:', ['1687', '1734', '1801', '1854'], 1, 'Berkeley.'),
      mc('A resposta veio com a definição de limite por:', ['ε e δ', 'Exaustão', 'Silogismo', 'Indução'], 0, 'Século XIX.'),
      disc('Explique a objeção de Berkeley com um exemplo de derivada calculada com infinitésimos.', ['Exemplo', 'Ambiguidade', 'Objeção', 'Solução moderna'])],
  },
}),

aula({
  id: 'ma2-3', titulo: 'Euclides, Descartes e Pascal: método e espírito geométrico', duracao: '150 min',
  aprendera: ['Expor a estrutura dos Elementos', 'Explicar o quinto postulado', 'Explicar a ideia da Geometria de Descartes', 'Expor as reflexões de Pascal sobre o método geométrico'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Três autores pensaram não só resultados, mas o próprio método da matemática. O que eles ensinam?</p>
<h3>Euclides</h3>
<p>Os Elementos têm treze livros: geometria plana, proporções, aritmética e geometria espacial ${tag('fato')}. O livro I parte de 23 definições, 5 postulados e noções comuns, e termina com o teorema de Pitágoras (I, 47) e sua recíproca (I, 48) ${tag('fato')}. O quinto postulado (das paralelas) é mais complexo que os outros, e por séculos tentou-se demonstrá-lo ${tag('fato')}.</p>
<h3>Descartes</h3>
<p>Na Geometria (1637), Descartes associou curvas a equações, permitindo resolver problemas geométricos por álgebra ${tag('fato')}. No Discurso do método, a matemática aparece como modelo de certeza para o método ${tag('fato')}.</p>
<h3>Pascal</h3>
<p>Em Do espírito geométrico, Pascal observa que seria ideal definir todos os termos e provar todas as proposições, mas isso é impossível: há termos primitivos e princípios que se conhecem por luz natural ${tag('fato')}. Nos Pensamentos distingue o "espírito de geometria" do "espírito de fineza" ${tag('fato')}.</p>
<h3>Lição comum</h3>
<p>O método demonstrativo é poderoso, mas repousa em princípios não demonstrados; a inteligência que os apreende vai além do cálculo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Postulado', 'Princípio pedido como ponto de partida.'],
    ['Noção comum', 'Princípio geral, como "o todo é maior que a parte".'],
    ['Quinto postulado', 'Postulado das paralelas de Euclides.'],
    ['Termo primitivo', 'Termo aceito sem definição.'],
    ['Espírito de fineza', 'Capacidade de captar muitos princípios sutis de uma só vez (Pascal).'],
  ],
  exemplos: `<p><strong>Coordenadas:</strong> a circunferência de centro (0, 0) e raio 5 é x² + y² = 25. Para saber se a reta y = 3 a corta, basta resolver x² + 9 = 25: x = ±4. Um problema geométrico virou um cálculo, como queria Descartes.</p>`,
  contexto: `<p><strong>No mundo:</strong> os Elementos estão entre os livros com mais edições da história ${tag('fato')}. <strong>No Brasil:</strong> há traduções brasileiras completas dos Elementos, como a de Irineu Bicudo (2009) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nem tudo pode ser demonstrado', tag: 'argumento',
    premissas: ['Toda demonstração parte de proposições anteriores.', 'Se toda proposição exigisse demonstração, haveria regresso infinito ou círculo.', 'Nenhum dos dois produz conhecimento.'],
    conclusao: 'Logo, há princípios conhecidos sem demonstração.',
    nota: 'É a tese de Aristóteles nos Analíticos posteriores, retomada por Pascal.',
  },
  objecoes: [
    { objecao: 'Se os princípios não são demonstrados, a matemática é arbitrária.', tag: 'debate',
      resposta: 'Para Aristóteles e Pascal, os primeiros princípios são conhecidos por evidência, não escolhidos arbitrariamente. Na visão formalista moderna, os axiomas são escolhidos, mas não arbitrariamente: devem ser consistentes e fecundos. Em nenhum dos casos a matemática é arbitrária.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura do livro I dos Elementos (definições, postulados, noções comuns e as proposições 1, 4 e 47), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Euclides, Elementos, livro I; Blaise Pascal, Do espírito geométrico', link: null,
    orientacao: `<p>Em Euclides, observe a proposição 1 (construir um triângulo equilátero). Em Pascal, a impossibilidade de definir e provar tudo.</p>`,
  },
  perguntas: [
    { p: 'Como termina o livro I dos Elementos?', r: 'Com o teorema de Pitágoras (I, 47) e sua recíproca (I, 48).' },
    { p: 'O que fez Descartes na Geometria?', r: 'Associou curvas a equações, resolvendo problemas geométricos por álgebra.' },
    { p: 'Por que, para Pascal, não se pode definir tudo?', r: 'Porque haveria regresso infinito; há termos primitivos.' },
  ],
  exercicios: [
    mc('Os Elementos têm:', ['5 livros', '13 livros', '23 livros', '47 livros'], 1, 'Estrutura.'),
    mc('O teorema de Pitágoras é a proposição:', ['I, 1', 'I, 47', 'IX, 20', 'V, 5'], 1, 'Livro I.'),
    mc('O postulado das paralelas é o:', ['Primeiro', 'Terceiro', 'Quinto', 'Décimo'], 2, 'Euclides.'),
    mc('O espírito de fineza é de:', ['Descartes', 'Pascal', 'Euclides', 'Gauss'], 1, 'Pensamentos.'),
    mc('A reta y = 3 corta x² + y² = 25 em x =', ['±3', '±4', '±5', '0'], 1, 'x² = 16.'),
    disc('Faça a ficha de leitura do livro I dos Elementos.', ['Definições', 'Postulados', 'Proposições', 'Avaliação']),
  ],
  resumo: ['Elementos: 13 livros.', 'Quinto postulado.', 'Descartes: curvas e equações.', 'Pascal: termos primitivos.', 'Princípios não demonstrados.'],
  referencias: [
    { texto: 'Euclides, Elementos, trad. Irineu Bicudo (2009).' },
    { texto: 'Blaise Pascal, Do espírito geométrico.', livro: 'pascal-espirito-geometrico' },
    { texto: 'René Descartes, A geometria (1637).', livro: 'descartes-ensaios' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler as fontes indicadas'],
  revisao: [['I, 47', 'Pitágoras.'], ['Quinto', 'Paralelas.'], ['Pascal', 'Primitivos.']],
  avancado: {
    texto: `<h3>Hilbert e as lacunas de Euclides</h3>
<p>Na proposição I, 1, Euclides supõe que dois círculos se cortam, sem que um postulado o garanta ${tag('fato')}. Hilbert, nos Fundamentos da geometria (1899), deu um sistema completo de axiomas, incluindo axiomas de ordem e continuidade, que preenche essas lacunas ${tag('fato')}. O exemplo mostra que o rigor pode crescer sem que os resultados antigos se percam ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'David Hilbert, Fundamentos da geometria (1899).' }],
    exercicios: [
      mc('A lacuna de I, 1 é supor que:', ['Dois círculos se cortam', 'Há retas', 'Os ângulos somam 180°', 'Há primos'], 0, 'Interseção.'),
      mc('Os Fundamentos da geometria são de:', ['1854', '1899', '1931', '1637'], 1, 'Hilbert.'),
      mc('Hilbert acrescentou axiomas de:', ['Ordem e continuidade', 'Probabilidade', 'Moral', 'Conjuntos apenas'], 0, 'Sistema.'),
      disc('Explique por que a lacuna em Euclides não torna falso o teorema da proposição I, 1.', ['Lacuna', 'Axiomas novos', 'Validade', 'Conclusão'])],
  },
}),

aula({
  id: 'ma2-4', titulo: 'Euler, Gauss, Cantor, Hilbert e Poincaré', duracao: '150 min',
  aprendera: ['Conhecer contribuições de Euler e Gauss', 'Expor as ideias centrais de Cantor', 'Explicar o papel dos problemas de Hilbert', 'Expor a visão de Poincaré sobre intuição e convenção'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quem são os autores que deram forma à matemática moderna, e o que pensavam sobre ela?</p>
<h3>Euler</h3>
<p>Leonhard Euler (1707–1783) resolveu o problema das pontes de Königsberg (1736), origem da teoria dos grafos, e popularizou as notações e, π, i e f(x) ${tag('fato')}. A identidade e^{iπ} + 1 = 0 relaciona cinco constantes fundamentais ${tag('fato')}.</p>
<h3>Gauss</h3>
<p>Carl Friedrich Gauss (1777–1855) mostrou, em 1796, que o polígono regular de 17 lados é construtível com régua e compasso ${tag('fato')}. As Disquisitiones arithmeticae (1801) organizaram a teoria dos números ${tag('fato')}.</p>
<h3>Cantor</h3>
<p>Georg Cantor (1845–1918) criou a teoria dos conjuntos e mostrou que há infinitos de tamanhos diferentes ${tag('fato')}. Enfrentou forte oposição; Hilbert diria que ninguém nos expulsará do paraíso que Cantor criou ${tag('fato')}.</p>
<h3>Hilbert</h3>
<p>David Hilbert (1862–1943) apresentou em 1900 uma lista de 23 problemas que orientou boa parte da pesquisa do século XX ${tag('fato')}.</p>
<h3>Poincaré</h3>
<p>Henri Poincaré (1854–1912), em A ciência e a hipótese (1902), defendeu que certos axiomas da geometria são convenções escolhidas por comodidade, e valorizou a intuição na descoberta ${tag('fato')}. A conjectura de Poincaré sobre esferas tridimensionais foi demonstrada por Grigori Perelman em trabalhos de 2002–2003 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Grafo', 'Conjunto de vértices ligados por arestas.'],
    ['Construtível', 'Que pode ser construído com régua e compasso.'],
    ['Teoria dos números', 'Estudo das propriedades dos inteiros.'],
    ['Convencionalismo', 'Tese de que certos axiomas são convenções úteis.'],
    ['Conjectura de Poincaré', 'Caracterização da esfera tridimensional, demonstrada por Perelman.'],
  ],
  exemplos: `<p><strong>As pontes de Königsberg:</strong> era possível passear pela cidade cruzando cada uma das sete pontes exatamente uma vez? Euler reduziu a cidade a um grafo e mostrou que não: um tal passeio exige que no máximo dois vértices tenham número ímpar de arestas, e em Königsberg os quatro tinham.</p>`,
  contexto: `<p><strong>No mundo:</strong> sete Problemas do Milênio foram propostos pelo Instituto Clay em 2000; a conjectura de Poincaré é o único resolvido até hoje ${tag('fato')}. <strong>No Brasil:</strong> a teoria dos grafos é usada em logística, redes e planejamento urbano ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que problemas bem formulados fazem avançar a ciência', tag: 'argumento',
    premissas: ['Um problema bem formulado delimita o que se sabe e o que falta saber.', 'Os problemas de Hilbert concentraram esforços de gerações de matemáticos.', 'Muitas teorias novas nasceram da tentativa de resolvê-los.'],
    conclusao: 'Logo, formular bons problemas é parte essencial do trabalho científico.',
    nota: 'O décimo problema de Hilbert foi resolvido negativamente em 1970 (Matiyasevich).',
  },
  objecoes: [
    { objecao: 'Se os axiomas são convenções, a matemática não diz nada verdadeiro.', tag: 'debate',
      resposta: 'Poincaré não disse que toda a matemática é convenção: considerava a aritmética e a indução fundadas na intuição. E mesmo convenções são escolhidas por razões, como a simplicidade e a adequação à experiência. A tese é discutida até hoje.' },
  ],
  aplicacao: `<p>Faça uma ficha biográfica e intelectual de dois dos cinco autores: datas, obras principais, resultado mais conhecido e uma tese sobre a natureza da matemática.</p>`,
  fonte: {
    obra: 'Henri Poincaré, A ciência e a hipótese (1902), parte II (o espaço)', link: null,
    orientacao: `<p>Observe o argumento de que a experiência não decide sozinha entre geometrias.</p>`,
  },
  perguntas: [
    { p: 'Que problema deu origem à teoria dos grafos?', r: 'O das pontes de Königsberg (Euler, 1736).' },
    { p: 'Que polígono Gauss mostrou construtível em 1796?', r: 'O de 17 lados.' },
    { p: 'Quem demonstrou a conjectura de Poincaré?', r: 'Grigori Perelman (2002–2003).' },
  ],
  exercicios: [
    mc('e^{iπ} + 1 =', ['0', '1', 'i', 'π'], 0, 'Identidade de Euler.'),
    mc('Os 23 problemas de Hilbert são de:', ['1801', '1900', '1931', '2000'], 1, 'Paris.'),
    mc('A ciência e a hipótese é de:', ['Cantor', 'Poincaré', 'Hilbert', 'Gauss'], 1, '1902.'),
    mc('Em Königsberg, o passeio é impossível porque:', ['Há mais de dois vértices de grau ímpar', 'Há pontes demais', 'O rio é largo', 'Há só uma ilha'], 0, 'Euler.'),
    mc('O único Problema do Milênio resolvido é:', ['P vs NP', 'Hipótese de Riemann', 'Conjectura de Poincaré', 'Navier–Stokes'], 2, 'Perelman.'),
    disc('Faça as fichas de dois autores.', ['Datas e obras', 'Resultado', 'Tese', 'Fontes']),
  ],
  resumo: ['Euler: grafos, notações.', 'Gauss: 17-ágono, Disquisitiones.', 'Cantor: infinitos.', 'Hilbert: 23 problemas.', 'Poincaré: convenção e intuição.'],
  referencias: [
    { texto: 'Henri Poincaré, A ciência e a hipótese (1902).' },
    { texto: 'Georg Cantor, Contribuições à fundamentação da teoria dos números transfinitos (1895–1897).' },
    { texto: 'Carl B. Boyer, História da matemática (1968).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as fichas', 'Ler a fonte indicada'],
  revisao: [['1736', 'Königsberg.'], ['1900', 'Hilbert.'], ['Perelman', 'Poincaré.']],
  avancado: {
    texto: `<h3>A fórmula de Euler para poliedros</h3>
<p>Para todo poliedro convexo, V − A + F = 2, em que V é o número de vértices, A o de arestas e F o de faces ${tag('fato')}. O cubo tem 8 − 12 + 6 = 2 ${tag('fato')}. A história das demonstrações e contraexemplos dessa fórmula é o tema de Provas e refutações (1976), de Imre Lakatos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Imre Lakatos, Provas e refutações (1976).' }],
    exercicios: [
      mc('Para o tetraedro (4 vértices, 6 arestas, 4 faces), V − A + F =', ['0', '2', '4', '6'], 1, 'Euler.'),
      mc('Um prisma triangular tem V = 6, F = 5; então A =', ['9', '8', '11', '7'], 0, '6 − A + 5 = 2.'),
      mc('Provas e refutações é de:', ['Lakatos', 'Pólya', 'Hilbert', 'Euler'], 0, '1976.'),
      disc('Verifique a fórmula de Euler em três poliedros e explique o que acontece com um poliedro com "buraco".', ['Verificações', 'Contraexemplo', 'Condição de convexidade', 'Conclusão'])],
  },
}),

avaliacao('ma2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da matemática e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia a ficha dos Elementos.</li></ul>`,
[
  disc('Trace a história da matemática em oito marcos, da Babilônia ao século XX, incluindo um marco brasileiro, explicando a contribuição de cada um.', ['Marcos', 'Datas', 'Contribuições', 'Brasil']),
  disc('Compare Euclides, Pascal e Poincaré sobre o estatuto dos primeiros princípios da matemática.', ['Euclides', 'Pascal', 'Poincaré', 'Síntese']),
]),
];
