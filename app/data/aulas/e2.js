// Economia II — formação do pensamento econômico e autores fundamentais (etapas 4 e 5 do percurso).
// Dos gregos e escolásticos a Keynes e Hayek, lidos nas fontes; cada escola com seus argumentos e críticas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

const RERUM = { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'Rerum Novarum (vatican.va)' };
const QA = { url: 'https://www.vatican.va/content/pius-xi/pt/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html', rotulo: 'Quadragesimo Anno (vatican.va)' };

export const AULAS = [
aula({
  id: 'e2-1', titulo: 'Antes de Smith: Aristóteles, escolástica, Salamanca, mercantilismo e fisiocracia', duracao: '120 min',
  aprendera: ['Expor a distinção aristotélica entre economia e crematística', 'Explicar as doutrinas escolásticas do preço justo e da usura', 'Situar a Escola de Salamanca e a teoria quantitativa da moeda', 'Comparar mercantilismo e fisiocracia, com o caso português e brasileiro'],
  prereq: ['Economia I (módulo E1)', 'Filosofia antiga e medieval (Degraus 5 e 7)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de existir a "ciência econômica", filósofos, teólogos, comerciantes e ministros pensaram sobre trocas, preços, moeda e riqueza. Muitas ideias atuais têm aí sua origem — e muitos debates morais sobre a economia também.</p>
<h3>Aristóteles</h3>
<p>Na <em>Política</em> (livro I), Aristóteles distinguiu a <em>economia</em>, administração da casa para prover o necessário, da <em>crematística</em>, arte de adquirir riqueza, que se torna ilimitada quando o dinheiro passa a ser fim ${tag('fato')}. Na <em>Ética a Nicômaco</em> (livro V) tratou da justiça nas trocas e da moeda como medida comum que torna os bens comensuráveis ${tag('fato')}.</p>
<h3>A escolástica</h3>
<p>Santo Tomás discutiu o preço justo e a fraude nas vendas (<em>Suma Teológica</em> II-II, q. 77) e condenou a usura — cobrar pelo uso do dinheiro emprestado — como venda do que não existe (q. 78) ${tag('fato')}. Teólogos posteriores admitiram títulos legítimos de compensação (lucro cessante, dano emergente, risco), num debate que acompanhou o desenvolvimento do crédito ${tag('interpretacao')}.</p>
<h3>A Escola de Salamanca</h3>
<p>No século XVI, teólogos espanhóis como Martín de Azpilcueta e Luis de Molina analisaram os efeitos da chegada de ouro e prata da América. Azpilcueta, em 1556, observou que o dinheiro vale menos onde é abundante — formulação precoce da teoria quantitativa da moeda ${tag('fato')}. Joseph Schumpeter, na <em>História da análise econômica</em> (1954), valorizou esses autores como precursores da análise econômica ${tag('interpretacao')}.</p>
<h3>Mercantilismo</h3>
<p>Entre os séculos XVI e XVIII, políticas mercantilistas buscaram acumular metais preciosos, obter balança comercial favorável, proteger manufaturas e usar colônias como fornecedoras e mercados ${tag('fato')}. Thomas Mun, em <em>England's Treasure by Forraign Trade</em> (publicado postumamente em 1664), defendeu que a riqueza vinha de exportar mais do que importar ${tag('fato')}.</p>
<h3>Fisiocracia</h3>
<p>Na França do século XVIII, François Quesnay, com o <em>Quadro econômico</em> (1758), representou a circulação da riqueza entre classes e sustentou que só a terra gera um "produto líquido" ${tag('fato')}. Os fisiocratas defenderam a liberdade de comércio de grãos, associada à fórmula <em>laissez-faire</em> ${tag('fato')}.</p>`,
  vocabulario: [
    ['Crematística', 'Arte de adquirir riqueza; ilimitada quando o dinheiro vira fim (Aristóteles).'],
    ['Usura', 'Cobrança pelo uso do dinheiro emprestado, condenada pela escolástica.'],
    ['Teoria quantitativa da moeda', 'Relação entre quantidade de moeda e nível de preços.'],
    ['Mercantilismo', 'Políticas de acumulação de metais, balança favorável e proteção.'],
    ['Pacto colonial', 'Exclusividade comercial da metrópole sobre a colônia.'],
    ['Fisiocracia', 'Doutrina de que só a terra gera produto líquido (Quesnay).'],
  ],
  exemplos: `<p><strong>A inflação do século XVI:</strong> a chegada de grandes quantidades de prata americana à Espanha coincidiu com uma alta prolongada de preços na Europa, a "revolução dos preços". Azpilcueta relacionou abundância de moeda e preços; historiadores posteriores discutem o peso desse fator ao lado do crescimento populacional ${tag('debate')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expansão marítima, o afluxo de metais americanos e a formação dos Estados modernos são o pano de fundo dessas doutrinas. <strong>No Brasil:</strong> o pacto colonial português reservava à metrópole o comércio da colônia; no século XVIII, Pombal criou companhias privilegiadas de comércio, como a do Grão-Pará e Maranhão (1755) ${tag('fato')} — exemplo direto de política mercantilista aplicada ao Brasil.</p>`,
  argumento: {
    titulo: 'A crítica de Aristóteles à acumulação ilimitada', tag: 'argumento',
    premissas: ['A economia doméstica busca os bens necessários à vida boa, que têm medida.', 'Quando o dinheiro passa a ser fim em si, a aquisição perde a medida dada pela necessidade.', 'Uma atividade sem medida não se ordena à vida boa.'],
    conclusao: 'Logo, para Aristóteles, a crematística que busca riqueza ilimitada desvia-se do fim da economia.',
    nota: 'É argumento normativo; não afirma nada sobre como os mercados de fato funcionam. Ecoa na Doutrina Social da Igreja sobre o fim dos bens.',
  },
  objecoes: [
    { objecao: 'A condenação da usura mostra que a Igreja era contra o desenvolvimento econômico.', tag: 'debate',
      resposta: 'A doutrina evoluiu com a distinção entre empréstimo de consumo e investimento, e os escolásticos tardios analisaram câmbio, crédito e preços com sofisticação reconhecida por Schumpeter. A condenação da exploração do necessitado permanece no ensino moral.' },
  ],
  aplicacao: `<p>Escolha uma política comercial brasileira atual (tarifas, incentivos à exportação) e identifique nela traços que lembram o mercantilismo e traços que o contrariam.</p>`,
  fonte: {
    obra: 'Aristóteles, Política I, 8–10; Tomás de Aquino, Suma Teológica II-II, q. 77–78', link: null,
    orientacao: `<p>Em Aristóteles, localize a distinção entre economia e crematística. Em Tomás, liste as condições em que uma venda é injusta e o argumento contra a usura. Distinga, nos dois, o que é descrição e o que é juízo moral.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre economia e crematística em Aristóteles?', r: 'Economia provê o necessário com medida; crematística busca riqueza e se torna ilimitada quando o dinheiro vira fim.' },
    { p: 'O que observou Azpilcueta em 1556?', r: 'Que o dinheiro vale menos onde é abundante: precursora da teoria quantitativa da moeda.' },
    { p: 'O que é o Quadro econômico de Quesnay?', r: 'Representação da circulação da riqueza entre classes (1758), base da fisiocracia.' },
  ],
  exercicios: [
    mc('A distinção entre economia e crematística está em:', ['Platão, República', 'Aristóteles, Política I', 'Tomás, Suma', 'Smith, Riqueza das nações'], 1, 'Política, livro I.'),
    mc('Tomás de Aquino trata da usura na Suma Teológica em:', ['I, q. 2', 'II-II, q. 78', 'III, q. 1', 'I-II, q. 90'], 1, 'II-II, q. 78; a q. 77 trata da fraude nas vendas.'),
    mc('A formulação precoce da teoria quantitativa da moeda (1556) é de:', ['Azpilcueta', 'Quesnay', 'Thomas Mun', 'Colbert'], 0, 'Escola de Salamanca.'),
    mc('Para os fisiocratas, o produto líquido vinha:', ['Do comércio exterior', 'Da indústria', 'Da terra', 'Do ouro'], 2, 'Quesnay, Quadro econômico (1758).'),
    mc('A Companhia Geral do Grão-Pará e Maranhão (1755) foi criada por:', ['D. João VI', 'Pombal', 'Cairu', 'Mauá'], 1, 'Política mercantilista pombalina.'),
    disc('Compare a crítica de Aristóteles à crematística com a condenação escolástica da usura: que princípio comum as sustenta e em que diferem?', ['Expõe Aristóteles', 'Expõe a escolástica', 'Identifica o princípio comum', 'Aponta diferenças']),
  ],
  resumo: ['Aristóteles: economia x crematística; justiça nas trocas.', 'Tomás: preço justo (q. 77) e usura (q. 78).', 'Salamanca: Azpilcueta (1556) e a teoria quantitativa.', 'Mercantilismo (Mun, 1664) e pacto colonial; Pombal.', 'Fisiocracia: Quesnay (1758) e laissez-faire.'],
  referencias: [
    { texto: 'Aristóteles, Política, livro I; Ética a Nicômaco, livro V.' },
    { texto: 'Tomás de Aquino, Suma Teológica, II-II, q. 77–78.' },
    { texto: 'Joseph Schumpeter, História da análise econômica (1954), parte II.' },
    { texto: 'Thomas Mun, England’s Treasure by Forraign Trade (1664).' },
    { texto: 'François Quesnay, Quadro econômico (1758).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Crematística', 'Aquisição ilimitada de riqueza (Aristóteles).'], ['Azpilcueta', '1556: dinheiro vale menos onde é abundante.'], ['Quesnay', 'Quadro econômico (1758).']],
  avancado: {
    texto: `<h3>Oresme e a moeda</h3>
<p>Nicolau Oresme, no <em>Tratado sobre a moeda</em> (c. 1360), sustentou que a moeda pertence à comunidade e não ao príncipe, e criticou as desvalorizações como forma de tributação injusta ${tag('interpretacao')}.</p>
<h3>A lei de Gresham</h3>
<p>A observação de que a "moeda má expulsa a boa" — quando duas moedas de mesmo valor legal têm valores metálicos diferentes, a de mais metal é entesourada e a outra circula — é atribuída a Thomas Gresham (século XVI), embora apareça antes em Oresme e Copérnico ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Nicolau Oresme, Tratado sobre a moeda (c. 1360).' }, { texto: 'Raymond de Roover, "The Concept of the Just Price" (1958).' }],
    exercicios: [
      mc('Para Oresme, a moeda pertence:', ['Ao príncipe', 'À comunidade', 'Aos banqueiros', 'À Igreja'], 1, 'Tratado sobre a moeda.'),
      mc('A lei de Gresham afirma que:', ['A moeda boa expulsa a má', 'A moeda má expulsa a boa', 'O ouro vale mais que a prata', 'A moeda não afeta preços'], 1, 'A de mais metal é entesourada.'),
      mc('A observação da lei de Gresham aparece antes em:', ['Smith e Ricardo', 'Oresme e Copérnico', 'Keynes e Hayek', 'Marx e Engels'], 1, 'Atribuída a Gresham, mas anterior.'),
      disc('A crítica de Oresme às desvalorizações tem paralelo com a inflação moderna? Argumente com um exemplo brasileiro.', ['Expõe Oresme', 'Relaciona com inflação', 'Exemplo brasileiro', 'Distingue contextos'])],
  },
}),

aula({
  id: 'e2-2', titulo: 'A economia clássica: Smith, Ricardo, Malthus, Say e Mill — e a crítica de Marx', duracao: '150 min',
  aprendera: ['Expor as teses centrais de Smith, incluindo a "mão invisível" no contexto', 'Explicar a renda da terra e a vantagem comparativa de Ricardo', 'Explicar Malthus, a lei de Say e Mill', 'Expor a crítica de Marx à economia política clássica'],
  prereq: ['Aula anterior', 'Filosofia moderna (Degrau 8)'],
  explicacao: `
<h3>O problema</h3>
<p>Entre 1776 e meados do século XIX, a "economia política" tornou-se disciplina sistemática, explicando a riqueza pelo trabalho, pela divisão do trabalho e pela troca. Suas teses e seus limites formam a base de todo o debate posterior.</p>
<h3>Adam Smith</h3>
<p>Smith publicou a <em>Teoria dos sentimentos morais</em> em 1759 e <em>A riqueza das nações</em> em 1776 ${tag('fato')}. Na segunda, explicou a riqueza pela divisão do trabalho, limitada pela extensão do mercado, e criticou o mercantilismo ${tag('fato')}. A expressão "mão invisível" aparece apenas uma vez na <em>Riqueza</em> (livro IV, cap. 2), ao falar de quem prefere investir no próprio país e, buscando seu interesse, promove um fim que não fazia parte de sua intenção ${tag('fato')}. Ler Smith como defensor de um mercado sem moral ignora a <em>Teoria dos sentimentos morais</em> e suas críticas aos monopólios e aos conluios de comerciantes ${tag('interpretacao')}.</p>
<h3>Ricardo e Malthus</h3>
<p>David Ricardo, nos <em>Princípios de economia política e tributação</em> (1817), formulou a teoria da renda da terra e a vantagem comparativa ${tag('fato')}. Thomas Malthus, no <em>Ensaio sobre o princípio da população</em> (1798), sustentou que a população tende a crescer mais depressa que os meios de subsistência ${tag('fato')}; as previsões catastróficas não se confirmaram nos países que aumentaram a produtividade agrícola ${tag('interpretacao')}.</p>
<h3>Say e Mill</h3>
<p>Jean-Baptiste Say, no <em>Tratado de economia política</em> (1803), formulou a "lei de Say": a produção cria os meios para a demanda de outros produtos, de modo que não haveria superprodução geral duradoura ${tag('interpretacao')} — tese que Keynes atacará. John Stuart Mill, nos <em>Princípios de economia política</em> (1848), sintetizou a escola clássica e distinguiu as leis da produção das da distribuição, que dependeriam das instituições ${tag('fato')}.</p>
<h3>A crítica de Marx</h3>
<p>Em <em>O capital</em> (livro I, 1867), Marx partiu da teoria do valor-trabalho dos clássicos para formular a teoria da mais-valia: o trabalhador produziria mais valor do que recebe em salário, e a diferença seria apropriada pelo capitalista ${tag('interpretacao')}. A teoria do valor-trabalho foi abandonada pela economia posterior, a partir da revolução marginalista, mas a análise de Marx sobre crises e concentração continua discutida ${tag('debate')}. A Igreja, na <em>Rerum Novarum</em> (1891), rejeitou a solução socialista e a luta de classes e afirmou a propriedade privada, ordenada ao bem comum, e o salário justo ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Economia política', 'Nome da disciplina entre os clássicos.'],
    ['Mão invisível', 'Expressão de Smith (Riqueza IV,2) para consequências não intencionais da busca do interesse próprio.'],
    ['Renda da terra', 'Pagamento pelo uso da terra, explicado por Ricardo pelas diferenças de fertilidade.'],
    ['Lei de Say', 'A oferta cria a própria demanda; não haveria superprodução geral.'],
    ['Valor-trabalho', 'Teoria de que o valor depende do trabalho incorporado.'],
    ['Mais-valia', 'Para Marx, valor produzido pelo trabalhador além do salário.'],
  ],
  exemplos: `<p><strong>A citação mais deturpada:</strong> é comum atribuir a Smith frases como "o mercado se regula sozinho". Ele não escreveu isso. Escreveu, por exemplo, que pessoas do mesmo ofício raramente se reúnem sem que a conversa termine numa conspiração contra o público (Riqueza I,10) — o que mostra sua desconfiança dos interesses organizados.</p>`,
  contexto: `<p><strong>No mundo:</strong> a escola clássica acompanha a Revolução Industrial britânica e o liberalismo. <strong>No Brasil:</strong> José da Silva Lisboa, futuro Visconde de Cairu, publicou em 1804 os <em>Princípios de economia política</em>, considerado o primeiro livro de economia em português, e defendeu a abertura dos portos de 1808 inspirado em Smith ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'A vantagem comparativa de Ricardo', tag: 'argumento',
    premissas: ['Cada país tem custos de oportunidade diferentes para produzir cada bem.', 'Especializar-se no bem de menor custo de oportunidade aumenta a produção total.', 'A troca permite a cada país consumir combinações que não alcançaria sozinho.'],
    conclusao: 'Logo, dois países podem ganhar com o comércio mesmo que um deles seja mais eficiente em tudo.',
    nota: 'O argumento é sobre ganhos agregados; não diz como os ganhos se distribuem dentro de cada país, tema dos debates sobre comércio.',
  },
  objecoes: [
    { objecao: 'A teoria do valor-trabalho prova que todo lucro é exploração.', tag: 'debate',
      resposta: 'A conclusão depende da teoria do valor-trabalho, que a economia abandonou ao explicar o valor pela utilidade marginal e pela escassez. O juízo moral sobre salários e lucros é questão normativa, que a Rerum Novarum trata pelo critério do salário justo.' },
  ],
  aplicacao: `<p>Leia o capítulo de Smith sobre a mão invisível (Riqueza IV,2) e escreva no Caderno o que a frase diz no contexto, o que não diz e como é usada hoje em debates públicos.</p>`,
  fonte: {
    obra: 'Adam Smith, A riqueza das nações, IV,2 e I,10; Leão XIII, Rerum Novarum (1891)', link: RERUM,
    orientacao: `<p>Em Smith, localize a "mão invisível" e a frase sobre os comerciantes. Na Rerum Novarum, identifique a crítica ao socialismo e o critério do salário justo. Compare o tipo de afirmação: análise ou ensino moral.</p>`,
  },
  perguntas: [
    { p: 'Quantas vezes aparece "mão invisível" na Riqueza das nações?', r: 'Uma vez, no livro IV, capítulo 2.' },
    { p: 'O que é a lei de Say?', r: 'A tese de que a produção cria a demanda, sem superprodução geral duradoura.' },
    { p: 'Qual o primeiro livro de economia em português?', r: 'Os Princípios de economia política, de José da Silva Lisboa (Cairu), 1804.' },
  ],
  exercicios: [
    mc('A Teoria dos sentimentos morais (1759) é de:', ['Ricardo', 'Smith', 'Mill', 'Malthus'], 1, 'Adam Smith.'),
    mc('A teoria da renda da terra e a vantagem comparativa são de:', ['Malthus', 'Ricardo', 'Say', 'Quesnay'], 1, 'Princípios (1817).'),
    mc('O Ensaio sobre o princípio da população (1798) é de:', ['Malthus', 'Mill', 'Marx', 'Smith'], 0, 'Thomas Malthus.'),
    mc('O livro I de O capital foi publicado em:', ['1848', '1859', '1867', '1891'], 2, '1867.'),
    mc('A Rerum Novarum (1891) afirmou:', ['A abolição da propriedade', 'A propriedade privada e o salário justo, contra a luta de classes', 'O laissez-faire absoluto', 'A teoria do valor-trabalho'], 1, 'Leão XIII.'),
    disc('Compare Smith, Marx e a Rerum Novarum sobre trabalho e salário: o que cada um afirma, de que tipo é cada afirmação (análise ou norma) e onde divergem.', ['Expõe os três', 'Classifica as afirmações', 'Identifica divergências', 'Conclusão fundamentada']),
  ],
  resumo: ['Smith: divisão do trabalho; mão invisível (IV,2) no contexto.', 'Ricardo (1817): renda da terra e vantagem comparativa.', 'Malthus (1798); Say (1803); Mill (1848).', 'Marx (1867): mais-valia; valor-trabalho abandonado depois.', 'Rerum Novarum (1891); Cairu (1804) no Brasil.'],
  referencias: [
    { texto: 'Adam Smith, Teoria dos sentimentos morais (1759); A riqueza das nações (1776).' },
    { texto: 'David Ricardo, Princípios de economia política e tributação (1817).' },
    { texto: 'Thomas Malthus, Ensaio sobre o princípio da população (1798).' },
    { texto: 'Karl Marx, O capital, livro I (1867).' },
    { texto: 'José da Silva Lisboa, Princípios de economia política (1804).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler Smith IV,2 no contexto'],
  revisao: [['Mão invisível', 'Uma vez, Riqueza IV,2.'], ['Ricardo', 'Vantagem comparativa (1817).'], ['Cairu', 'Princípios de economia política (1804).']],
  avancado: {
    texto: `<h3>O "problema de Adam Smith"</h3>
<p>Estudiosos alemães do século XIX falaram de uma suposta contradição entre a simpatia da <em>Teoria dos sentimentos morais</em> e o interesse próprio da <em>Riqueza</em>. A maioria dos intérpretes atuais considera que as duas obras se complementam ${tag('interpretacao')}.</p>
<h3>A controvérsia das Leis dos Cereais</h3>
<p>Ricardo opôs-se às Corn Laws, que protegiam os grãos britânicos; Malthus as defendeu em parte. Foram revogadas em 1846 ${tag('fato')}, marco do livre-comércio britânico.</p>`,
    leituras: [{ texto: 'Emma Rothschild, Sentimentos econômicos (2001).' }, { texto: 'Robert Heilbroner, Os filósofos mundanos (1953).' }],
    exercicios: [
      mc('As Corn Laws britânicas foram revogadas em:', ['1776', '1817', '1846', '1867'], 2, '1846.'),
      mc('O "problema de Adam Smith" refere-se:', ['À inflação', 'À relação entre suas duas obras', 'Ao comércio com a França', 'À teoria da renda'], 1, 'Simpatia x interesse próprio.'),
      mc('Ricardo, sobre as Corn Laws:', ['Defendeu-as', 'Opôs-se a elas', 'Não tratou do tema', 'Propôs ampliá-las'], 1, 'Livre-comércio de grãos.'),
      disc('A simpatia (Teoria dos sentimentos morais) e o interesse próprio (Riqueza) são incompatíveis em Smith? Argumente com as duas obras.', ['Expõe as duas noções', 'Usa as obras', 'Posição justificada', 'Conclusão'])],
  },
}),

aula({
  id: 'e2-3', titulo: 'A revolução marginalista, os neoclássicos e a Escola Austríaca', duracao: '120 min',
  aprendera: ['Explicar a utilidade marginal e o paradoxo da água e do diamante', 'Situar Jevons, Menger e Walras', 'Explicar o equilíbrio geral e a eficiência de Pareto', 'Expor o problema do cálculo econômico de Mises e a controvérsia Gudin–Simonsen no Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a água, indispensável à vida, é barata, e o diamante, supérfluo, é caro? Os clássicos não resolveram bem esse "paradoxo do valor". Nos anos 1870, uma nova teoria o resolveu e mudou a economia.</p>
<h3>A revolução marginalista</h3>
<p>Quase ao mesmo tempo, William Stanley Jevons (<em>Teoria da economia política</em>, 1871), Carl Menger (<em>Princípios de economia política</em>, 1871) e Léon Walras (<em>Elementos de economia política pura</em>, 1874) propuseram que o valor depende da <strong>utilidade marginal</strong> — a utilidade da última unidade disponível — e não do trabalho incorporado ${tag('fato')}. A água é abundante: a última unidade tem pouca utilidade. O diamante é raro: a última unidade tem utilidade alta ${tag('argumento')}.</p>
<h3>Neoclássicos</h3>
<p>Walras formalizou o <strong>equilíbrio geral</strong>: todos os mercados ajustando-se simultaneamente ${tag('fato')}. Vilfredo Pareto definiu a situação em que não é possível melhorar a posição de alguém sem piorar a de outro — a "eficiência de Pareto" ${tag('fato')}. Marshall uniu oferta (custos) e demanda (utilidade) na análise de equilíbrio parcial ${tag('fato')}. Atenção: eficiência de Pareto não é justiça; uma distribuição muito desigual pode ser eficiente nesse sentido ${tag('argumento')}.</p>
<h3>A Escola Austríaca</h3>
<p>De Menger nasceu a Escola Austríaca: Eugen von Böhm-Bawerk, Ludwig von Mises, Friedrich Hayek ${tag('fato')}. Em 1920, Mises argumentou que, sem propriedade privada dos meios de produção e sem preços de mercado, uma economia socialista não teria como calcular racionalmente custos e escolher entre usos alternativos dos recursos — o "problema do cálculo econômico" ${tag('interpretacao')}. Economistas socialistas como Oskar Lange responderam com modelos de socialismo de mercado ${tag('debate')}.</p>
<h3>No Brasil: a controvérsia do planejamento</h3>
<p>Em 1944–1945, o industrial Roberto Simonsen defendeu o planejamento estatal da industrialização, e o economista Eugênio Gudin respondeu defendendo a livre iniciativa e a produtividade, numa troca de pareceres conhecida como "controvérsia do planejamento" ${tag('fato')}. O debate antecipa questões que atravessaram a economia brasileira no século XX ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Utilidade marginal', 'Utilidade da última unidade consumida ou disponível.'],
    ['Paradoxo do valor', 'Por que bens úteis podem ser baratos e supérfluos, caros.'],
    ['Equilíbrio geral', 'Ajuste simultâneo de todos os mercados (Walras).'],
    ['Eficiência de Pareto', 'Ninguém melhora sem que outro piore.'],
    ['Cálculo econômico', 'Problema de avaliar custos sem preços de mercado (Mises, 1920).'],
  ],
  exemplos: `<p><strong>Utilidade marginal decrescente:</strong> o primeiro copo de água depois de uma caminhada no sertão vale muito; o quinto, pouco. O preço que alguém paga reflete a utilidade da unidade adicional, não a utilidade total da água em sua vida.</p>`,
  contexto: `<p><strong>No mundo:</strong> a revolução marginalista acompanha a matematização das ciências e a formação da economia como disciplina universitária. <strong>No Brasil:</strong> o ensino superior de economia institucionalizou-se nos anos 1940, com faculdades de ciências econômicas como a da Universidade de São Paulo (1946) ${tag('fato')}, no mesmo período da controvérsia Gudin–Simonsen.</p>`,
  argumento: {
    titulo: 'Como a utilidade marginal resolve o paradoxo do valor', tag: 'argumento',
    premissas: ['O preço de um bem reflete o valor da unidade adicional para quem compra.', 'O valor da unidade adicional diminui à medida que se tem mais do bem.', 'A água é abundante e os diamantes, raros.'],
    conclusao: 'Logo, a unidade adicional de água vale pouco e a de diamante vale muito, embora a água tenha maior utilidade total.',
    nota: 'O argumento distingue utilidade total e marginal, que os clássicos confundiam.',
  },
  objecoes: [
    { objecao: 'A eficiência de Pareto mostra que o mercado é justo.', tag: 'debate',
      resposta: 'Eficiência de Pareto é critério técnico e não diz nada sobre a justiça da distribuição inicial. A avaliação da justiça é normativa e exige outros critérios, como os da justiça distributiva e da destinação universal dos bens.' },
  ],
  aplicacao: `<p>Escolha um bem cujo preço lhe parece "absurdo" (alto ou baixo) e explique-o pela utilidade marginal e pela escassez. Depois, separe o que seria uma crítica moral legítima a esse preço.</p>`,
  fonte: {
    obra: 'Carl Menger, Princípios de economia política (1871), cap. 3; Ludwig von Mises, "O cálculo econômico na comunidade socialista" (1920)', link: null,
    orientacao: `<p>Em Menger, localize a explicação do valor pelas necessidades e pela quantidade disponível. Em Mises, reconstrua o argumento central em premissas e conclusão.</p>`,
  },
  perguntas: [
    { p: 'Quem são os três autores da revolução marginalista?', r: 'Jevons e Menger (1871) e Walras (1874).' },
    { p: 'O que é eficiência de Pareto?', r: 'Situação em que ninguém pode melhorar sem que outro piore.' },
    { p: 'O que foi a controvérsia do planejamento?', r: 'Debate entre Roberto Simonsen (planejamento) e Eugênio Gudin (livre iniciativa) em 1944–1945.' },
  ],
  exercicios: [
    mc('A teoria de que o valor depende da utilidade marginal surgiu nos anos:', ['1770', '1817', '1870', '1930'], 2, 'Jevons e Menger (1871), Walras (1874).'),
    mc('O equilíbrio geral foi formalizado por:', ['Marshall', 'Walras', 'Pareto', 'Mises'], 1, 'Elementos (1874).'),
    mc('O problema do cálculo econômico no socialismo foi formulado por:', ['Keynes', 'Mises', 'Lange', 'Marx'], 1, '1920.'),
    mc('Uma situação Pareto-eficiente:', ['É sempre justa', 'Não permite melhorar alguém sem piorar outro', 'Tem igualdade de renda', 'Não tem preços'], 1, 'Critério técnico.'),
    mc('Na controvérsia do planejamento (1944–1945), o planejamento estatal foi defendido por:', ['Eugênio Gudin', 'Roberto Simonsen', 'Celso Furtado', 'Roberto Campos'], 1, 'Gudin respondeu defendendo a livre iniciativa.'),
    disc('Reconstrua o argumento de Mises sobre o cálculo econômico, apresente a resposta de Lange e avalie quem está mais bem fundamentado à luz de evidências históricas.', ['Reconstrói Mises', 'Expõe Lange', 'Usa evidências históricas', 'Conclusão fundamentada']),
  ],
  resumo: ['Utilidade marginal resolve o paradoxo do valor.', 'Jevons, Menger (1871), Walras (1874).', 'Equilíbrio geral; eficiência de Pareto (não é justiça).', 'Escola Austríaca; Mises (1920) e o cálculo econômico.', 'Brasil: controvérsia Gudin–Simonsen (1944–1945).'],
  referencias: [
    { texto: 'Carl Menger, Princípios de economia política (1871).' },
    { texto: 'Léon Walras, Elementos de economia política pura (1874).' },
    { texto: 'Ludwig von Mises, "O cálculo econômico na comunidade socialista" (1920).' },
    { texto: 'Roberto Simonsen e Eugênio Gudin, A controvérsia do planejamento na economia brasileira (pareceres de 1944–1945).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Utilidade marginal', 'Valor da última unidade.'], ['Pareto', 'Eficiência não é justiça.'], ['Gudin x Simonsen', 'Controvérsia do planejamento, 1944–1945.']],
  avancado: {
    texto: `<h3>Teoremas do bem-estar</h3>
<p>O primeiro teorema do bem-estar afirma que, sob certas condições (concorrência perfeita, ausência de externalidades, informação completa), o equilíbrio competitivo é Pareto-eficiente; o segundo, que qualquer alocação eficiente pode ser alcançada com redistribuição adequada das dotações iniciais ${tag('fato')}. As condições raramente se verificam inteiramente, o que abre espaço para a análise de falhas de mercado ${tag('interpretacao')}.</p>
<h3>Capital e tempo</h3>
<p>Böhm-Bawerk explicou os juros pela preferência temporal (bens presentes valem mais que futuros) e pela produtividade dos métodos indiretos de produção ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Eugen von Böhm-Bawerk, Capital e juros (1884–1889).' }, { texto: 'Oskar Lange, "Sobre a teoria econômica do socialismo" (1936–1937).' }],
    exercicios: [
      mc('O primeiro teorema do bem-estar depende de:', ['Monopólio', 'Concorrência perfeita, sem externalidades', 'Planejamento central', 'Inflação'], 1, 'Condições restritivas.'),
      mc('Para Böhm-Bawerk, os juros se explicam em parte pela:', ['Ganância', 'Preferência temporal', 'Lei de Say', 'Mais-valia'], 1, 'Bens presentes valem mais que futuros.'),
      mc('O segundo teorema do bem-estar trata de:', ['Redistribuição das dotações para alcançar alocações eficientes', 'Inflação', 'Comércio internacional', 'Moeda'], 0, 'Separação entre eficiência e distribuição.'),
      disc('O que os teoremas do bem-estar provam e o que não provam sobre o mercado? Responda distinguindo eficiência e justiça.', ['Expõe os teoremas', 'Indica condições', 'Distingue eficiência e justiça', 'Conclusão'])],
  },
}),

aula({
  id: 'e2-4', titulo: 'Keynes e Hayek: a Grande Depressão e o grande debate do século XX', duracao: '150 min',
  aprendera: ['Explicar a Grande Depressão e a crítica de Keynes à lei de Say', 'Explicar a demanda efetiva e o papel da política fiscal em Keynes', 'Expor a teoria do conhecimento disperso e a crítica ao planejamento de Hayek', 'Relacionar o debate à Doutrina Social e ao Brasil (CEPAL, Bretton Woods)'],
  prereq: ['Aulas anteriores do módulo', 'Economia I: PIB, juros e desemprego'],
  explicacao: `
<h3>O problema</h3>
<p>Depois da quebra da Bolsa de Nova York em 1929, o desemprego chegou a cerca de um quarto da força de trabalho nos Estados Unidos no início dos anos 1930 ${tag('fato')}. A economia clássica previa que os mercados se ajustariam. Por que não se ajustaram? Duas respostas opostas marcaram o século.</p>
<h3>Keynes</h3>
<p>John Maynard Keynes, na <em>Teoria geral do emprego, do juro e da moeda</em> (1936), sustentou que a economia pode permanecer longamente com desemprego por insuficiência de <strong>demanda efetiva</strong>: se empresas e famílias reduzem gastos ao mesmo tempo, a produção e o emprego caem ${tag('interpretacao')}. Rejeitou a lei de Say e defendeu que o Estado sustente a demanda em recessões, inclusive com gasto público ${tag('interpretacao')}. A frase "no longo prazo estaremos todos mortos" é de um livro anterior, <em>A Tract on Monetary Reform</em> (1923) ${tag('fato')}. Keynes participou da conferência de Bretton Woods (1944), que criou o FMI e o Banco Mundial ${tag('fato')}.</p>
<h3>Hayek</h3>
<p>Friedrich Hayek, em <em>Preços e produção</em> (1931), atribuiu as crises a distorções causadas por crédito e juros artificialmente baixos ${tag('interpretacao')}. Em "O uso do conhecimento na sociedade" (1945), argumentou que o conhecimento econômico está disperso entre milhões de pessoas e que os preços transmitem essa informação de um modo que nenhum planejador central conseguiria reproduzir ${tag('interpretacao')}. Em <em>O caminho da servidão</em> (1944), sustentou que o planejamento central tende a concentrar poder e ameaçar as liberdades ${tag('interpretacao')}. Hayek recebeu o Nobel de Economia em 1974 ${tag('fato')}.</p>
<h3>Avaliar o debate</h3>
<p>As duas teses respondem a perguntas parcialmente diferentes: Keynes, à recessão e ao desemprego de curto prazo; Hayek, ao conhecimento, à coordenação e aos riscos do planejamento. A experiência posterior (estagflação dos anos 1970, crises financeiras) foi usada pelos dois lados ${tag('debate')}.</p>
<h3>A Doutrina Social</h3>
<p>Pio XI, na <em>Quadragesimo Anno</em> (1931), formulou o princípio de <strong>subsidiariedade</strong>: o que os indivíduos e as comunidades menores podem fazer não deve ser absorvido pela instância superior, que deve ajudá-los ${tag('doutrina')}. O princípio não coincide com nenhuma das duas escolas; serve como critério normativo para avaliar o papel do Estado ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Demanda efetiva', 'Demanda agregada que determina produção e emprego (Keynes).'],
    ['Política fiscal', 'Uso de gastos e impostos pelo governo.'],
    ['Conhecimento disperso', 'Informação espalhada entre indivíduos, transmitida pelos preços (Hayek).'],
    ['Estagflação', 'Inflação alta com estagnação e desemprego (anos 1970).'],
    ['Subsidiariedade', 'Princípio da Quadragesimo Anno sobre as competências do Estado e das comunidades menores.'],
  ],
  exemplos: `<p><strong>O paradoxo da poupança:</strong> se uma família poupa mais numa crise, protege-se; se todas fazem isso ao mesmo tempo, as vendas caem, empresas demitem e a renda total pode diminuir — argumento keynesiano. Hayek responderia que a poupança financia o investimento futuro e que o problema está nas distorções anteriores do crédito.</p>`,
  contexto: `<p><strong>No mundo:</strong> o keynesianismo dominou as políticas do pós-guerra até os anos 1970; as ideias de Hayek ganharam influência a partir de então. <strong>No Brasil:</strong> a CEPAL, criada pela ONU em 1948, e o texto de Raúl Prebisch de 1949 sobre a deterioração dos termos de troca inspiraram Celso Furtado e o desenvolvimentismo ${tag('fato')}; o Brasil participou de Bretton Woods com delegação da qual fez parte Eugênio Gudin ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'O argumento de Hayek sobre o conhecimento disperso', tag: 'argumento',
    premissas: ['Decisões econômicas eficientes exigem conhecimento de circunstâncias particulares de tempo e lugar.', 'Esse conhecimento está disperso entre milhões de pessoas e muda constantemente.', 'Nenhuma autoridade central pode reunir e processar todo esse conhecimento a tempo.'],
    conclusao: 'Logo, um sistema de preços descentralizado coordena a economia melhor que o planejamento central.',
    nota: 'A objeção keynesiana não nega o argumento: afirma que mesmo com preços a demanda agregada pode falhar, exigindo ação do Estado em recessões.',
  },
  objecoes: [
    { objecao: 'Keynes e Hayek são apenas bandeiras de esquerda e de direita.', tag: 'debate',
      resposta: 'Seus argumentos são técnicos e podem ser avaliados pela lógica e pelos dados, independentemente de quem os usa politicamente. Reduzi-los a bandeiras é falácia de associação.' },
  ],
  aplicacao: `<p>Escolha uma crise econômica brasileira (por exemplo, a recessão de 2015–2016) e escreva duas explicações curtas: uma keynesiana e uma hayekiana. Indique que dados ajudariam a decidir entre elas.</p>`,
  fonte: {
    obra: 'Keynes, Teoria geral (1936), cap. 3; Hayek, "O uso do conhecimento na sociedade" (1945); Pio XI, Quadragesimo Anno (1931)', link: QA,
    orientacao: `<p>Em Keynes, localize o princípio da demanda efetiva. Em Hayek, o exemplo do estanho que se torna escasso. Na Quadragesimo Anno, o enunciado da subsidiariedade. Classifique cada um: análise positiva ou princípio normativo.</p>`,
  },
  perguntas: [
    { p: 'O que é demanda efetiva em Keynes?', r: 'A demanda agregada que determina a produção e o emprego.' },
    { p: 'Qual o argumento central de "O uso do conhecimento na sociedade"?', r: 'O conhecimento está disperso e os preços o transmitem melhor que qualquer planejador.' },
    { p: 'O que diz o princípio de subsidiariedade?', r: 'O que comunidades menores podem fazer não deve ser absorvido pela instância superior, que deve ajudá-las.' },
  ],
  exercicios: [
    mc('A Teoria geral do emprego, do juro e da moeda é de:', ['1929', '1936', '1944', '1974'], 1, '1936.'),
    mc('"No longo prazo estaremos todos mortos" está em:', ['Teoria geral (1936)', 'A Tract on Monetary Reform (1923)', 'O caminho da servidão', 'Rerum Novarum'], 1, 'Livro anterior de Keynes.'),
    mc('O caminho da servidão (1944) é de:', ['Keynes', 'Hayek', 'Mises', 'Friedman'], 1, 'Hayek.'),
    mc('O princípio de subsidiariedade foi formulado na:', ['Rerum Novarum (1891)', 'Quadragesimo Anno (1931)', 'Centesimus Annus (1991)', 'Laudato Si’ (2015)'], 1, 'Pio XI, 1931.'),
    mc('A CEPAL foi criada em:', ['1944', '1948', '1964', '1974'], 1, 'Pela ONU, em 1948.'),
    disc('Keynes ou Hayek explicam melhor uma crise econômica brasileira que você escolher? Use dados e conclua indicando o grau de confiança.', ['Escolhe e data a crise', 'Aplica as duas teorias', 'Usa dados com fonte', 'Conclusão com grau de confiança']),
  ],
  resumo: ['1929 e a Grande Depressão.', 'Keynes (1936): demanda efetiva, contra a lei de Say; Bretton Woods (1944).', 'Hayek: conhecimento disperso (1945), O caminho da servidão (1944); Nobel 1974.', 'Subsidiariedade (Quadragesimo Anno, 1931).', 'Brasil: CEPAL (1948), Prebisch (1949), Gudin em Bretton Woods.'],
  referencias: [
    { texto: 'John Maynard Keynes, Teoria geral do emprego, do juro e da moeda (1936).' },
    { texto: 'Friedrich A. Hayek, "O uso do conhecimento na sociedade" (1945); O caminho da servidão (1944).' },
    { texto: 'Pio XI, Quadragesimo Anno (1931).', link: QA },
    { texto: 'Nicholas Wapshott, Keynes x Hayek (2011).' },
    { texto: 'Raúl Prebisch, O desenvolvimento econômico da América Latina e seus principais problemas (1949).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Keynes', 'Demanda efetiva (1936).'], ['Hayek', 'Conhecimento disperso (1945).'], ['Subsidiariedade', 'Quadragesimo Anno (1931).']],
  avancado: {
    texto: `<h3>Friedman e o monetarismo</h3>
<p>Milton Friedman e Anna Schwartz, em <em>A Monetary History of the United States</em> (1963), atribuíram a gravidade da Grande Depressão à contração monetária ${tag('interpretacao')}. O monetarismo enfatizou o controle da oferta de moeda e criticou a ideia de uma troca estável entre inflação e desemprego (curva de Phillips) ${tag('interpretacao')}.</p>
<h3>Expectativas racionais</h3>
<p>Robert Lucas e outros sustentaram, nos anos 1970, que agentes formam expectativas usando a informação disponível, o que limita a eficácia de políticas que tentam "enganar" o público ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Milton Friedman e Anna Schwartz, A Monetary History of the United States (1963).' }, { texto: 'Robert Skidelsky, Keynes: a volta do mestre (2009).' }],
    exercicios: [
      mc('A Monetary History of the United States (1963) é de:', ['Keynes', 'Friedman e Schwartz', 'Hayek', 'Lucas'], 1, 'Friedman e Schwartz.'),
      mc('Para Friedman e Schwartz, a Depressão foi agravada por:', ['Excesso de gasto público', 'Contração monetária', 'Imigração', 'Tarifas'], 1, 'Tese monetarista.'),
      mc('A teoria das expectativas racionais é associada a:', ['Robert Lucas', 'Prebisch', 'Quesnay', 'Say'], 0, 'Anos 1970.'),
      disc('A estagflação dos anos 1970 refutou o keynesianismo? Exponha os argumentos de keynesianos e monetaristas.', ['Explica a estagflação', 'Expõe as duas posições', 'Usa evidências', 'Conclusão'])],
  },
}),

avaliacao('e2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história do pensamento econômico, de Aristóteles a Keynes e Hayek, e duas discursivas de comparação entre autores.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça a linha do tempo dos autores e obras.</li><li>Releia os trechos de Smith (IV,2), Keynes (cap. 3) e Hayek (1945).</li></ul>`,
[
  disc('Trace a evolução da teoria do valor de Aristóteles aos marginalistas, passando por Tomás, Smith, Ricardo e Marx. O que muda em cada etapa e por quê?', ['Inclui os autores com obras e datas', 'Explica cada teoria do valor', 'Mostra o que motivou cada mudança', 'Conclusão fundamentada']),
  disc('Avalie o papel do Estado na economia segundo Smith, Keynes, Hayek e o princípio de subsidiariedade. Onde concordam, onde divergem e que critério você usaria para decidir um caso brasileiro?', ['Expõe as quatro posições', 'Identifica concordâncias e divergências', 'Aplica a um caso brasileiro', 'Separa positivo e normativo']),
]),
];
