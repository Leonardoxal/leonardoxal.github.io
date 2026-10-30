// Cultura II — formação e autores (etapas 4 e 5 do percurso de Cultura).
// Paideia, humanitas e a cultura cristã; humanismo renascentista, Herder e a cultura popular;
// Arnold, Eliot, Huizinga e Pieper; Spengler, Toynbee e Dawson sobre civilizações e religião.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cu2-1', titulo: 'Paideia, humanitas e a cultura cristã: das artes liberais aos mosteiros', duracao: '150 min',
  aprendera: ['Explicar a paideia grega e a humanitas romana', 'Descrever as artes liberais', 'Explicar a atitude de Agostinho e Basílio diante da cultura pagã', 'Situar mosteiros e universidades na transmissão da cultura'],
  prereq: ['Cultura I (módulo CU1)'],
  explicacao: `
<h3>O problema</h3>
<p>Como a ideia de formar o homem pela cultura passou da Grécia a Roma e ao mundo cristão, e o que foi preservado no caminho?</p>
<h3>Paideia e humanitas</h3>
<p>Werner Jaeger, em <em>Paideia</em> (1933–1947), estudou a formação do homem grego como ideal de educação pela poesia, pela ginástica, pela retórica e pela filosofia ${tag('fato')}. Cícero usou <em>humanitas</em> para designar a formação que torna o homem plenamente humano pelas letras, como no discurso <em>Em defesa do poeta Árquias</em> ${tag('fato')}.</p>
<h3>As artes liberais</h3>
<p>A Antiguidade tardia organizou as sete artes liberais: o trívio (gramática, retórica, dialética) e o quadrívio (aritmética, geometria, música, astronomia), sistematizadas por autores como Marciano Capela e Boécio ${tag('fato')}.</p>
<h3>Cristianismo e cultura antiga</h3>
<p>São Basílio, no discurso <em>Aos jovens</em>, recomendou ler os autores pagãos tomando o que é bom, como as abelhas colhem das flores ${tag('fato')}. Santo Agostinho, em <em>A doutrina cristã</em> (II, 40), comparou o uso cristão da cultura pagã ao ouro que os hebreus levaram do Egito ${tag('fato')}.</p>
<h3>Mosteiros e universidades</h3>
<p>Cassiodoro, no século VI, organizou no mosteiro de Vivarium a cópia de textos sagrados e profanos ${tag('fato')}. Os mosteiros beneditinos conservaram e copiaram grande parte da literatura latina que chegou até nós ${tag('fato')}. Nos séculos XII e XIII surgiram as universidades, como as de Bolonha e Paris ${tag('fato')}.</p>`,
  vocabulario: [
    ['Paideia', 'Ideal grego de formação integral do homem.'],
    ['Humanitas', 'Em Cícero, formação pelas letras que torna o homem plenamente humano.'],
    ['Trívio', 'Gramática, retórica e dialética.'],
    ['Quadrívio', 'Aritmética, geometria, música e astronomia.'],
    ['Scriptorium', 'Sala do mosteiro onde se copiavam manuscritos.'],
  ],
  exemplos: `<p><strong>O "ouro dos egípcios":</strong> Agostinho dizia que, assim como os hebreus levaram do Egito objetos de ouro e prata para melhor uso, os cristãos podem tomar da cultura pagã a lógica, a retórica, a matemática e as verdades morais, descartando a idolatria. O critério não é a origem do conhecimento, mas sua verdade e seu uso.</p>`,
  contexto: `<p><strong>No mundo:</strong> muitos textos de Cícero, Virgílio e outros autores latinos chegaram até nós por cópias feitas em mosteiros medievais ${tag('fato')}. <strong>No Brasil:</strong> os colégios jesuítas do período colonial ensinavam latim, retórica e filosofia segundo a <em>Ratio studiorum</em> (1599) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os cristãos não rejeitaram a cultura antiga', tag: 'argumento',
    premissas: ['Para os Padres, toda verdade, onde quer que esteja, vem de Deus.', 'A cultura antiga continha verdades na lógica, na matemática, na ética e na arte.', 'Rejeitá-la inteira seria rejeitar verdades junto com erros.'],
    conclusao: 'Logo, os Padres assimilaram criticamente a cultura antiga, tomando o verdadeiro e descartando o falso.',
    nota: 'Houve vozes de desconfiança, como a pergunta de Tertuliano sobre o que Atenas tem a ver com Jerusalém, mas a linha de Basílio e Agostinho prevaleceu.',
  },
  objecoes: [
    { objecao: 'A Idade Média foi uma "idade das trevas" que destruiu a cultura antiga.', tag: 'debate',
      resposta: 'Houve perdas reais com a queda do Império, mas a transmissão dos textos latinos dependeu em grande medida dos mosteiros, e as universidades medievais desenvolveram a lógica, o direito e a teologia. A historiografia atual rejeita a expressão "idade das trevas" como descrição geral do período.' },
  ],
  aplicacao: `<p>Leia o capítulo II, 40 de A doutrina cristã e explique, com suas palavras, o critério de Agostinho para usar a cultura não cristã; aplique-o a um elemento da cultura atual.</p>`,
  fonte: {
    obra: 'Santo Agostinho, A doutrina cristã, II, 40; São Basílio, Aos jovens, sobre o modo de tirar proveito dos autores pagãos', link: null,
    orientacao: `<p>Em Agostinho, a imagem do ouro do Egito e o critério da verdade. Em Basílio, a imagem das abelhas. Compare as duas metáforas.</p>`,
  },
  perguntas: [
    { p: 'Quais são as artes do trívio?', r: 'Gramática, retórica e dialética.' },
    { p: 'Que imagem Agostinho usa para a cultura pagã?', r: 'O ouro que os hebreus levaram do Egito.' },
    { p: 'O que fez Cassiodoro em Vivarium?', r: 'Organizou a cópia de textos sagrados e profanos.' },
  ],
  exercicios: [
    mc('Paideia (1933–1947) é de:', ['Jaeger', 'Huizinga', 'Dawson', 'Eliot'], 0, 'Formação grega.'),
    mc('A astronomia pertence ao:', ['Trívio', 'Quadrívio', 'Cânon', 'Decálogo'], 1, 'Artes liberais.'),
    mc('A imagem das abelhas para ler os pagãos é de:', ['Basílio', 'Tertuliano', 'Jerônimo', 'Tomás'], 0, 'Aos jovens.'),
    mc('O "ouro dos egípcios" está em:', ['Confissões', 'A doutrina cristã', 'Cidade de Deus', 'Regra'], 1, 'II, 40.'),
    mc('A Ratio studiorum dos jesuítas é de:', ['1549', '1599', '1759', '1827'], 1, 'Plano de estudos.'),
    disc('Explique o critério de Agostinho para usar a cultura não cristã e aplique-o a um elemento da cultura atual.', ['Critério', 'Imagem do ouro', 'Aplicação', 'Clareza']),
  ],
  resumo: ['Paideia (Jaeger) e humanitas (Cícero).', 'Trívio e quadrívio.', 'Basílio: abelhas; Agostinho: ouro do Egito.', 'Cassiodoro e os mosteiros.', 'Universidades; Ratio studiorum.'],
  referencias: [
    { texto: 'Werner Jaeger, Paideia (1933–1947).' },
    { texto: 'Santo Agostinho, A doutrina cristã.', livro: 'agostinho-doutrina-crista' },
    { texto: 'São Basílio, Aos jovens.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a aplicação do critério de Agostinho', 'Ler os textos indicados'],
  revisao: [['Trívio', 'Gramática, retórica, dialética.'], ['Agostinho', 'Ouro do Egito.'], ['Vivarium', 'Cassiodoro.']],
  avancado: {
    texto: `<h3>Isócrates e Platão</h3>
<p>No século IV a.C., Isócrates propôs uma paideia centrada na retórica e na formação do cidadão; Platão, uma paideia centrada na filosofia e na busca da verdade ${tag('fato')}. Jaeger vê nessa disputa a origem de duas tradições da educação ocidental, a retórica e a filosófica ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Werner Jaeger, Paideia, vol. 3.' }],
    exercicios: [
      mc('Isócrates centrou a paideia na:', ['Retórica', 'Ginástica', 'Matemática apenas', 'Guerra'], 0, 'Cidadão.'),
      mc('Platão centrou a paideia na:', ['Retórica', 'Filosofia', 'Comércio', 'Música apenas'], 1, 'Verdade.'),
      mc('Jaeger vê na disputa a origem de:', ['Duas tradições educacionais', 'Duas religiões', 'Dois impérios', 'Duas línguas'], 0, 'Interpretação.'),
      disc('Compare as paideias de Isócrates e de Platão e diga qual predomina na escola brasileira atual.', ['Isócrates', 'Platão', 'Escola atual', 'Avaliação'])],
  },
}),

aula({
  id: 'cu2-2', titulo: 'Humanismo renascentista, Herder e a descoberta da cultura popular', duracao: '150 min',
  aprendera: ['Explicar o humanismo de Petrarca, Pico e Erasmo', 'Explicar a ideia de cultura de Herder', 'Relacionar o romantismo à valorização do folclore', 'Conhecer Anchieta como mediador de culturas no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quando surgiu a ideia de que cada povo tem uma cultura própria e valiosa, e não só os povos "cultos"?</p>
<h3>O humanismo</h3>
<p>Petrarca, no século XIV, promoveu os <em>studia humanitatis</em>: gramática, retórica, poesia, história e filosofia moral, a partir dos clássicos ${tag('fato')}. Giovanni Pico della Mirandola, no <em>Discurso sobre a dignidade do homem</em> (1486), exaltou a liberdade humana de formar a si mesmo ${tag('fato')}. Erasmo de Roterdã uniu o estudo dos clássicos ao das Escrituras e dos Padres ${tag('fato')}.</p>
<h3>Herder</h3>
<p>Johann Gottfried Herder, nas <em>Ideias para a filosofia da história da humanidade</em> (1784–1791), sustentou que cada povo tem um modo próprio de ser, expresso sobretudo em sua língua, poesia e canções ${tag('fato')}. Reuniu canções populares de vários povos (1778–1779) ${tag('fato')}. Herder influenciou a valorização romântica da cultura popular e, depois, também nacionalismos ${tag('interpretacao')}.</p>
<h3>Romantismo e folclore</h3>
<p>Os irmãos Grimm publicaram a partir de 1812 os contos populares alemães recolhidos da tradição oral ${tag('fato')}. O termo <em>folklore</em> foi proposto por William Thoms em 1846 ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>José de Anchieta escreveu a <em>Arte de gramática da língua mais usada na costa do Brasil</em> (1595), sobre o tupi, e autos teatrais em várias línguas para a catequese ${tag('fato')}.</p>`,
  vocabulario: [
    ['Studia humanitatis', 'Estudos humanísticos: gramática, retórica, poesia, história e filosofia moral.'],
    ['Humanismo', 'Movimento de renovação cultural pelo estudo dos clássicos.'],
    ['Espírito de um povo', 'Ideia, associada a Herder, de um modo próprio de ser de cada povo.'],
    ['Folclore', 'Saber tradicional do povo (termo de William Thoms, 1846).'],
    ['Mediação cultural', 'Tradução de sentidos entre culturas diferentes.'],
  ],
  exemplos: `<p><strong>Anchieta como mediador:</strong> para anunciar o Evangelho aos tupis, Anchieta estudou a língua, escreveu sua gramática e compôs autos em tupi, português e castelhano, usando personagens e imagens compreensíveis aos ouvintes. O caso mostra encontro de culturas com tradução, adaptação e também conflito.</p>`,
  contexto: `<p><strong>No mundo:</strong> a invenção da imprensa por Gutenberg, por volta de 1450, multiplicou a circulação dos clássicos editados pelos humanistas ${tag('fato')}. <strong>No Brasil:</strong> Anchieta foi canonizado pelo Papa Francisco em 2014 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a língua é central para a ideia de cultura de Herder', tag: 'argumento',
    premissas: ['A língua é o meio pelo qual um povo pensa, lembra e transmite sua experiência.', 'Cada língua organiza o mundo de modo próprio em vocabulário e expressões.', 'Poesia e canções populares guardam essa experiência de forma condensada.'],
    conclusao: 'Logo, para Herder, conhecer a língua e a poesia de um povo é conhecer sua cultura.',
    nota: 'A ideia ajudou a valorizar línguas e culturas antes desprezadas, mas foi usada também para nacionalismos exclusivistas.',
  },
  objecoes: [
    { objecao: 'O humanismo renascentista era contra a fé.', tag: 'debate',
      resposta: 'Houve humanistas céticos, mas muitos, como Erasmo e Thomas More, eram cristãos que queriam renovar a fé pelo retorno às fontes bíblicas e patrísticas. Pico da Mirandola fundamentava a dignidade do homem na criação. A oposição entre humanismo e fé é simplificação posterior.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte uma linha do tempo da ideia de cultura (da paideia a Herder), com uma obra por marco e um marco brasileiro.</p>`,
  fonte: {
    obra: 'Giovanni Pico della Mirandola, Discurso sobre a dignidade do homem (1486); Johann Gottfried Herder, Ideias para a filosofia da história da humanidade (1784–1791), livro IX', link: null,
    orientacao: `<p>Em Pico, o discurso de Deus a Adão sobre a liberdade de formar-se. Em Herder, a relação entre língua, tradição e povo.</p>`,
  },
  perguntas: [
    { p: 'Quem promoveu os studia humanitatis no século XIV?', r: 'Petrarca.' },
    { p: 'Que obra de Pico exalta a liberdade humana?', r: 'O Discurso sobre a dignidade do homem (1486).' },
    { p: 'O que escreveu Anchieta sobre o tupi?', r: 'A Arte de gramática da língua mais usada na costa do Brasil (1595).' },
  ],
  exercicios: [
    mc('O Discurso sobre a dignidade do homem é de:', ['Erasmo', 'Pico della Mirandola', 'Petrarca', 'Herder'], 1, '1486.'),
    mc('Herder valorizou sobretudo:', ['A técnica', 'Língua e poesia de cada povo', 'O comércio', 'A guerra'], 1, 'Cultura popular.'),
    mc('O termo folklore foi proposto em:', ['1712', '1812', '1846', '1922'], 2, 'William Thoms.'),
    mc('A gramática do tupi de Anchieta é de:', ['1549', '1595', '1654', '1759'], 1, 'Arte de gramática.'),
    mc('Os irmãos Grimm publicaram contos a partir de:', ['1712', '1812', '1912', '1946'], 1, 'Tradição oral.'),
    disc('Apresente a linha do tempo da ideia de cultura com uma obra por marco e um marco brasileiro.', ['Marcos em ordem', 'Obras', 'Marco brasileiro', 'Ideia central']),
  ],
  resumo: ['Petrarca: studia humanitatis.', 'Pico (1486), Erasmo.', 'Herder: língua e poesia dos povos.', 'Grimm (1812), Thoms (1846).', 'Anchieta: gramática tupi (1595).'],
  referencias: [
    { texto: 'Giovanni Pico della Mirandola, Discurso sobre a dignidade do homem (1486).' },
    { texto: 'Johann Gottfried Herder, Ideias para a filosofia da história da humanidade (1784–1791).' },
    { texto: 'José de Anchieta, Arte de gramática da língua mais usada na costa do Brasil (1595).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo', 'Ler os textos indicados'],
  revisao: [['Petrarca', 'Studia humanitatis.'], ['Herder', 'Língua e povo.'], ['Anchieta', 'Tupi, 1595.']],
  avancado: {
    texto: `<h3>Vico e a história das culturas</h3>
<p>Giambattista Vico, na <em>Ciência nova</em> (1725), sustentou que o homem pode conhecer a história porque a fez, e descreveu idades sucessivas — dos deuses, dos heróis e dos homens — com linguagem, direito e costumes próprios ${tag('fato')}. É considerado precursor da filosofia da cultura e da história ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Giambattista Vico, Ciência nova (1725).' }],
    exercicios: [
      mc('A Ciência nova é de:', ['Vico', 'Herder', 'Hegel', 'Pico'], 0, '1725.'),
      mc('Vico distingue as idades dos deuses, dos heróis e dos:', ['Reis', 'Homens', 'Animais', 'Santos'], 1, 'Sucessão.'),
      mc('Para Vico, podemos conhecer a história porque:', ['Deus a revelou', 'Nós a fizemos', 'Está escrita nos astros', 'É matemática'], 1, 'Verum-factum.'),
      disc('Compare a ideia de cultura de Vico com a de Herder.', ['Vico', 'Herder', 'Semelhanças e diferenças', 'Avaliação'])],
  },
}),

aula({
  id: 'cu2-3', titulo: 'Arnold, Eliot, Huizinga e Pieper: tradição, jogo, ócio e o fundamento da cultura', duracao: '150 min',
  aprendera: ['Explicar a ideia de cultura de Matthew Arnold', 'Expor os três sentidos de cultura e a relação com a religião em Eliot', 'Explicar a tese de Huizinga sobre o jogo', 'Explicar a tese de Pieper sobre o ócio e o culto'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Qual é o fundamento da cultura? A melhor tradição, o jogo, o ócio, a religião? Quatro autores dão respostas complementares.</p>
<h3>Arnold</h3>
<p>Matthew Arnold, em <em>Culture and Anarchy</em> (1869), definiu cultura como o conhecimento do melhor que foi pensado e dito no mundo, buscado como meio de aperfeiçoamento, e a resumiu na fórmula "doçura e luz" ${tag('fato')}.</p>
<h3>Eliot</h3>
<p>T. S. Eliot, em <em>Notas para a definição de cultura</em> (1948), distinguiu a cultura do indivíduo, do grupo e da sociedade inteira, e sustentou que nenhuma cultura surgiu ou se desenvolveu a não ser junto com uma religião ${tag('fato')}. Para ele, cultura é o modo de vida de um povo, e a religião, sua fonte mais profunda ${tag('interpretacao')}.</p>
<h3>Huizinga</h3>
<p>Johan Huizinga, em <em>Homo ludens</em> (1938), argumentou que o jogo — atividade livre, com regras, separada da vida comum — está na origem de instituições culturais como o direito, a poesia, a guerra ritual e o culto ${tag('fato')}.</p>
<h3>Pieper</h3>
<p>Josef Pieper, em <em>Muße und Kult</em> (1948), sustentou que a cultura depende do ócio — não a preguiça, mas a capacidade de contemplar — e que o ócio tem sua raiz no culto, no dia de festa subtraído ao trabalho útil ${tag('fato')}. Advertiu contra um "mundo do trabalho total", em que tudo é avaliado pela utilidade ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Doçura e luz', 'Fórmula de Arnold: beleza e inteligência como ideal de cultura.'],
    ['Três níveis de cultura (Eliot)', 'Do indivíduo, do grupo e da sociedade.'],
    ['Homo ludens', 'O homem que joga (Huizinga).'],
    ['Ócio (Pieper)', 'Atitude contemplativa, não mera ausência de trabalho.'],
    ['Trabalho total', 'Em Pieper, mundo em que tudo é medido pela utilidade.'],
  ],
  exemplos: `<p><strong>O domingo segundo Pieper:</strong> um domingo usado só para descansar e voltar a trabalhar melhor ainda pertence ao mundo do trabalho. O domingo como dia do Senhor, com culto, festa, convivência e contemplação, abre um espaço que não serve a nada além de si mesmo, e é desse espaço que nascem a arte, a filosofia e a celebração.</p>`,
  contexto: `<p><strong>No mundo:</strong> Eliot recebeu o Prêmio Nobel de Literatura em 1948, ano das Notas ${tag('fato')}. <strong>No Brasil:</strong> o descanso semanal remunerado, preferencialmente aos domingos, é direito dos trabalhadores (CF, art. 7º, XV) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que, para Pieper, a cultura depende do culto', tag: 'argumento',
    premissas: ['A cultura nasce de atividades feitas por si mesmas, como contemplar, celebrar e criar.', 'Essas atividades exigem tempo subtraído ao trabalho útil.', 'Historicamente, esse tempo foi garantido pelo dia de festa, consagrado ao culto.'],
    conclusao: 'Logo, sem o culto, o ócio tende a desaparecer, e com ele a fonte da cultura.',
    nota: 'É tese filosófica e histórica, não experimento; pode ser discutida com exemplos de sociedades secularizadas.',
  },
  objecoes: [
    { objecao: 'Arnold e Eliot defendem uma cultura de elite que despreza o povo.', tag: 'debate',
      resposta: 'Arnold queria levar o melhor da cultura a todas as classes, e Eliot insistiu em que a cultura de uma sociedade inclui os costumes populares, como as festas e a culinária. Há tensões em seus textos, mas a acusação de puro elitismo simplifica o que escreveram.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de um capítulo de Notas para a definição de cultura (tese, argumentos, conceitos, objeções e aplicação ao Brasil), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'T. S. Eliot, Notas para a definição de cultura (1948), introdução e cap. 1; Josef Pieper, Muße und Kult (1948), parte I', link: null,
    orientacao: `<p>Em Eliot, os três sentidos de cultura e a relação com a religião. Em Pieper, a distinção entre ócio e preguiça. Compare as duas teses sobre o fundamento da cultura.</p>`,
  },
  perguntas: [
    { p: 'Como Arnold definiu cultura?', r: 'Como o conhecimento do melhor que foi pensado e dito no mundo.' },
    { p: 'Qual a tese de Eliot sobre religião e cultura?', r: 'Que nenhuma cultura surgiu ou se desenvolveu sem uma religião.' },
    { p: 'De onde nasce o ócio, segundo Pieper?', r: 'Do culto.' },
  ],
  exercicios: [
    mc('"Doçura e luz" é fórmula de:', ['Eliot', 'Arnold', 'Pieper', 'Huizinga'], 1, 'Culture and Anarchy.'),
    mc('Homo ludens (1938) é de:', ['Huizinga', 'Pieper', 'Dawson', 'Spengler'], 0, 'Jogo.'),
    mc('Eliot distingue a cultura do indivíduo, do grupo e da:', ['Igreja', 'Sociedade', 'Escola', 'Família'], 1, 'Três sentidos.'),
    mc('Para Pieper, ócio é:', ['Preguiça', 'Capacidade de contemplar', 'Férias pagas', 'Desemprego'], 1, 'Muße und Kult.'),
    mc('O descanso semanal está na CF, art. 7º, inciso:', ['I', 'IV', 'XV', 'XXX'], 2, 'Preferencialmente aos domingos.'),
    disc('Entregue a ficha de leitura de um capítulo das Notas de Eliot.', ['Tese', 'Argumentos', 'Conceitos', 'Objeções e aplicação']),
  ],
  resumo: ['Arnold (1869): o melhor pensado e dito.', 'Eliot (1948): três sentidos; religião.', 'Huizinga (1938): jogo.', 'Pieper (1948): ócio e culto.', 'Trabalho total.'],
  referencias: [
    { texto: 'Matthew Arnold, Culture and Anarchy (1869).' },
    { texto: 'T. S. Eliot, Notas para a definição de cultura (1948).' },
    { texto: 'Johan Huizinga, Homo ludens (1938).' },
    { texto: 'Josef Pieper, Muße und Kult (1948).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de Eliot', 'Ler os textos indicados'],
  revisao: [['Arnold', 'Doçura e luz.'], ['Eliot', 'Religião e cultura.'], ['Pieper', 'Ócio e culto.']],
  avancado: {
    texto: `<h3>O ano litúrgico como forma de cultura</h3>
<p>O ano litúrgico organiza o tempo em torno dos mistérios de Cristo — Advento, Natal, Quaresma, Páscoa, Pentecostes — e deu origem a festas, músicas, comidas e costumes populares em muitas culturas ${tag('fato')}. O Catecismo apresenta o domingo como dia do Senhor e da alegria e repouso (CIC 2184–2188) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1163–1173 e 2184–2188.', livro: 'cic' }],
    exercicios: [
      mc('O ano litúrgico organiza o tempo em torno dos:', ['Signos', 'Mistérios de Cristo', 'Estações agrícolas apenas', 'Eclipses'], 1, 'Liturgia.'),
      mc('O domingo como dia de repouso está no CIC:', ['2184–2188', '1883', '337', '159'], 0, 'Dia do Senhor.'),
      mc('Uma festa popular brasileira ligada ao ano litúrgico é:', ['Carnaval antes da Quaresma', 'Dia do Trabalho', 'Proclamação da República', 'Independência'], 0, 'Calendário.'),
      disc('Mostre como uma festa do ano litúrgico gerou costumes populares no Brasil.', ['Festa', 'Costumes', 'Sentido religioso', 'Fontes'])],
  },
}),

aula({
  id: 'cu2-4', titulo: 'Spengler, Toynbee e Dawson: o destino das civilizações e a religião', duracao: '150 min',
  aprendera: ['Expor a morfologia das culturas de Spengler', 'Expor o esquema de desafio e resposta de Toynbee', 'Expor a tese de Dawson sobre religião e cultura', 'Avaliar as três teorias com critérios'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>As civilizações nascem, crescem e morrem como organismos? Ou seu destino depende das respostas que dão aos desafios — e da religião que as anima?</p>
<h3>Spengler</h3>
<p>Oswald Spengler, em <em>A decadência do Ocidente</em> (1918–1922), tratou as grandes culturas como organismos com ciclo de juventude, maturidade e velhice; a fase final, de "civilização", seria marcada por cidades enormes, dinheiro e técnica, e o Ocidente estaria nela ${tag('fato')}. A tese é determinista e foi muito criticada ${tag('debate')}.</p>
<h3>Toynbee</h3>
<p>Arnold Toynbee, em <em>Um estudo da história</em> (12 volumes, 1934–1961), comparou cerca de duas dezenas de civilizações e propôs que elas surgem e crescem respondendo a desafios, conduzidas por minorias criativas, e declinam quando essas minorias se tornam dominantes sem criatividade ${tag('fato')}. Atribuiu às religiões universais papel central ${tag('fato')}.</p>
<h3>Dawson</h3>
<p>Christopher Dawson, em <em>Religion and the Rise of Western Culture</em> (1950), sustentou que a religião é a chave da história cultural e que a cultura ocidental foi formada pela fé cristã, pelos mosteiros e pela Igreja medieval ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Mário Ferreira dos Santos, na <em>Filosofia e história da cultura</em>, discutiu os ciclos culturais em diálogo com Spengler e Toynbee ${tag('fato')}.</p>`,
  vocabulario: [
    ['Morfologia da história', 'Em Spengler, estudo das culturas como formas orgânicas.'],
    ['Civilização (Spengler)', 'Fase final, de declínio, de uma cultura.'],
    ['Desafio e resposta', 'Em Toynbee, dinâmica que explica o crescimento das civilizações.'],
    ['Minoria criativa', 'Em Toynbee, grupo que responde inovadoramente aos desafios.'],
    ['Determinismo histórico', 'Tese de que a história segue um curso necessário.'],
  ],
  exemplos: `<p><strong>Desafio e resposta:</strong> para Toynbee, as enchentes e o deserto do Nilo foram um desafio a que os egípcios responderam com irrigação, administração e calendário, dando origem a uma civilização. Um desafio muito fraco não estimula; um muito forte esmaga. A resposta criativa é o que faz crescer.</p>`,
  contexto: `<p><strong>No mundo:</strong> <em>A decadência do Ocidente</em> foi muito lida na Alemanha após a Primeira Guerra Mundial ${tag('fato')}. <strong>No Brasil:</strong> autores brasileiros debateram se o Brasil seria uma civilização própria ou parte da civilização ocidental ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o determinismo de Spengler é problemático', tag: 'argumento',
    premissas: ['Spengler afirma que toda cultura percorre necessariamente as mesmas fases.', 'As civilizações reais mostram trajetórias muito diversas, com renovações inesperadas.', 'Uma lei que não admite exceções é refutada por casos que não se encaixam.'],
    conclusao: 'Logo, a tese de um ciclo necessário não se sustenta como lei histórica.',
    nota: 'A crítica não anula intuições de Spengler sobre o peso da técnica e do dinheiro em culturas tardias.',
  },
  objecoes: [
    { objecao: 'Teorias das civilizações são especulação sem valor científico.', tag: 'debate',
      resposta: 'São sínteses amplas, difíceis de testar, e os historiadores profissionais criticaram seus usos de dados. Mas ajudam a formular perguntas comparativas e a pensar o lugar da religião e das instituições na história. Devem ser lidas como hipóteses interpretativas, não como leis.' },
  ],
  aplicacao: `<p>Escolha uma das três teorias e aplique-a a um episódio da história do Brasil, indicando o que ela ilumina e o que deixa de fora.</p>`,
  fonte: {
    obra: 'Oswald Spengler, A decadência do Ocidente (1918), introdução; Arnold Toynbee, Um estudo da história, resumo de D. C. Somervell, parte II; Christopher Dawson, Religion and the Rise of Western Culture (1950), cap. 1', link: null,
    orientacao: `<p>Em Spengler, a comparação entre culturas e organismos. Em Toynbee, o capítulo sobre desafio e resposta. Em Dawson, a tese da religião como chave da cultura.</p>`,
  },
  perguntas: [
    { p: 'Como Spengler vê as culturas?', r: 'Como organismos com ciclo de juventude, maturidade e velhice.' },
    { p: 'Qual a dinâmica central em Toynbee?', r: 'Desafio e resposta, conduzida por minorias criativas.' },
    { p: 'Qual a tese de Dawson?', r: 'Que a religião é a chave da história cultural.' },
  ],
  exercicios: [
    mc('A decadência do Ocidente é de:', ['Toynbee', 'Spengler', 'Dawson', 'Eliot'], 1, '1918–1922.'),
    mc('"Desafio e resposta" é conceito de:', ['Spengler', 'Toynbee', 'Huizinga', 'Arnold'], 1, 'Um estudo da história.'),
    mc('Religion and the Rise of Western Culture é de:', ['Dawson', 'Pieper', 'Jaeger', 'Eliot'], 0, '1950.'),
    mc('A tese de Spengler é criticada por ser:', ['Pouco ambiciosa', 'Determinista', 'Religiosa demais', 'Estatística'], 1, 'Ciclo necessário.'),
    mc('Um estudo da história tem:', ['1 volume', '3 volumes', '12 volumes', '50 volumes'], 2, '1934–1961.'),
    disc('Aplique uma das três teorias a um episódio da história do Brasil, com o que ela ilumina e o que deixa de fora.', ['Teoria', 'Episódio', 'O que ilumina', 'O que deixa de fora']),
  ],
  resumo: ['Spengler: culturas como organismos; decadência.', 'Toynbee: desafio e resposta; minorias criativas.', 'Dawson: religião como chave.', 'Críticas ao determinismo.', 'Mário Ferreira dos Santos.'],
  referencias: [
    { texto: 'Oswald Spengler, A decadência do Ocidente (1918–1922).' },
    { texto: 'Arnold Toynbee, Um estudo da história (1934–1961).' },
    { texto: 'Christopher Dawson, Religion and the Rise of Western Culture (1950).' },
    { texto: 'Mário Ferreira dos Santos, Filosofia e história da cultura.', livro: 'mfs-cultura' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a aplicação a um episódio brasileiro', 'Ler os textos indicados'],
  revisao: [['Spengler', 'Organismos.'], ['Toynbee', 'Desafio e resposta.'], ['Dawson', 'Religião.']],
  avancado: {
    texto: `<h3>Huntington e o choque de civilizações</h3>
<p>Samuel Huntington (<em>O choque de civilizações</em>, 1996) sustentou que, após a Guerra Fria, os principais conflitos seriam entre civilizações definidas sobretudo pela religião ${tag('interpretacao')}. A tese foi influente e muito criticada por tratar civilizações como blocos homogêneos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Samuel Huntington, O choque de civilizações (1996).' }],
    exercicios: [
      mc('O choque de civilizações é de:', ['Huntington', 'Toynbee', 'Fukuyama', 'Dawson'], 0, '1996.'),
      mc('Huntington definiu civilizações sobretudo pela:', ['Economia', 'Religião', 'Língua apenas', 'Raça'], 1, 'Tese.'),
      mc('Uma crítica à tese é tratar civilizações como:', ['Plurais', 'Blocos homogêneos', 'Pequenas', 'Recentes'], 1, 'Debate.'),
      disc('Avalie se a tese de Huntington ajuda a entender o lugar do Brasil no mundo.', ['Tese', 'Brasil', 'Críticas', 'Conclusão'])],
  },
}),

avaliacao('cu2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação da ideia de cultura e os grandes pensadores da cultura, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo e a ficha de Eliot.</li><li>Compare as teses sobre o fundamento da cultura.</li></ul>`,
[
  disc('Compare o fundamento da cultura segundo Eliot, Huizinga e Pieper, e diga qual explica melhor uma manifestação cultural brasileira.', ['Eliot', 'Huizinga', 'Pieper', 'Aplicação brasileira']),
  disc('Mostre como Agostinho, Herder e Dawson pensam a relação entre fé e cultura, distinguindo fato histórico, interpretação e doutrina.', ['Agostinho', 'Herder', 'Dawson', 'Distinção dos planos']),
]),
];
