// Teologia VII — Doutrina Social da Igreja (fase teológica, degrau 2).
// Origem e princípios; trabalho, propriedade e economia; política e paz; família, vida e ecologia integral.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg7-1', titulo: 'Origem e princípios da Doutrina Social', duracao: '150 min',
  aprendera: ['Situar a Rerum novarum e as grandes encíclicas sociais', 'Enunciar os princípios permanentes da Doutrina Social', 'Explicar o bem comum e a subsidiariedade', 'Distinguir princípios, critérios de juízo e diretrizes de ação'],
  prereq: ['Teologia VI (módulo T6)'],
  explicacao: `
<h3>O problema</h3>
<p>A Igreja deve falar de economia e política, ou isso extrapola sua missão?</p>
<h3>Origem</h3>
<p>A Rerum novarum, de Leão XIII (1891), tratou da "questão operária" da Revolução Industrial, defendendo o salário justo, o direito de associação e a propriedade privada contra o socialismo ${tag('fato')}. Seguiram-se Quadragesimo anno (Pio XI, 1931), Mater et magistra (1961) e Pacem in terris (1963) de João XXIII, Populorum progressio (Paulo VI, 1967), Laborem exercens (1981), Sollicitudo rei socialis (1987) e Centesimus annus (1991) de João Paulo II, Caritas in veritate (Bento XVI, 2009), Laudato si' (2015) e Fratelli tutti (2020) de Francisco ${tag('fato')}.</p>
<h3>Princípios</h3>
<p>O Compêndio da Doutrina Social da Igreja (2004) apresenta como princípios permanentes a dignidade da pessoa humana, o bem comum, o destino universal dos bens, a subsidiariedade, a participação e a solidariedade ${tag('fato')}. O bem comum é "o conjunto das condições da vida social que permitem aos grupos e a cada membro alcançar mais plena e facilmente a própria perfeição" (Gaudium et spes 26; CIC 1906) ${tag('doutrina')}.</p>
<h3>Subsidiariedade</h3>
<p>Pio XI formulou: uma sociedade de ordem superior não deve interferir na vida interna de uma de ordem inferior, privando-a de suas competências, mas deve apoiá-la em caso de necessidade (Quadragesimo anno 79; CIC 1883) ${tag('doutrina')}.</p>
<h3>Natureza</h3>
<p>A Doutrina Social pertence ao campo da teologia moral; não é uma "terceira via" entre capitalismo e socialismo (Sollicitudo rei socialis 41) ${tag('doutrina')}. Ela oferece princípios de reflexão, critérios de juízo e diretrizes de ação; a aplicação concreta cabe muitas vezes ao juízo prudencial dos leigos ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Bem comum', 'Condições sociais que permitem a todos alcançar sua perfeição.'],
    ['Subsidiariedade', 'O nível superior não substitui o inferior, mas o apoia.'],
    ['Solidariedade', 'Determinação firme de empenhar-se pelo bem comum.'],
    ['Destino universal dos bens', 'Os bens da criação destinam-se a todos.'],
    ['Juízo prudencial', 'Aplicação concreta dos princípios a situações particulares.'],
  ],
  exemplos: `<p><strong>Subsidiariedade na escola:</strong> o Estado pode financiar a educação, mas a subsidiariedade pede que respeite o direito primário dos pais de educar os filhos e a liberdade de iniciativas educativas da sociedade. O princípio limita tanto o abandono quanto a absorção.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Compêndio foi publicado pelo Pontifício Conselho Justiça e Paz em 2004 ${tag('fato')}. <strong>No Brasil:</strong> a CNBB promove anualmente a Campanha da Fraternidade, de alcance nacional desde 1964, frequentemente com temas sociais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Igreja fala de questões sociais', tag: 'argumento',
    premissas: ['A Igreja tem a missão de anunciar o Evangelho e a verdade sobre o homem.', 'A vida social, econômica e política afeta a dignidade humana e a salvação das pessoas.', 'O juízo moral sobre essas realidades pertence à moral cristã.'],
    conclusao: 'Logo, a Doutrina Social é parte da missão evangelizadora, sem que a Igreja proponha soluções técnicas próprias.',
    nota: 'Centesimus annus 5 e 54; Compêndio da DSI 60–71.',
  },
  objecoes: [
    { objecao: 'A Doutrina Social é de esquerda (ou de direita).', tag: 'debate',
      resposta: 'Ela critica tanto o coletivismo que nega a propriedade e a iniciativa quanto o individualismo que ignora a solidariedade e o destino universal dos bens. Grupos políticos costumam citar apenas a parte que lhes convém. Ler as encíclicas inteiras é o melhor antídoto.' },
  ],
  aplicacao: `<p>Leia a Rerum novarum, nn. 1–20, e faça uma ficha: problema, diagnóstico, princípios afirmados e propostas.</p>`,
  fonte: {
    obra: 'Leão XIII, Rerum novarum (1891), nn. 1–20',
    link: { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'Texto no site da Santa Sé' },
    orientacao: `<p>Observe como Leão XIII critica ao mesmo tempo o socialismo e a exploração dos operários.</p>`,
  },
  perguntas: [
    { p: 'De quando é a Rerum novarum?', r: '1891, de Leão XIII.' },
    { p: 'O que é subsidiariedade?', r: 'O nível superior não substitui o inferior, mas o apoia em caso de necessidade.' },
    { p: 'A DSI é uma terceira via?', r: 'Não; pertence à teologia moral.' },
  ],
  exercicios: [
    mc('A subsidiariedade foi formulada na:', ['Quadragesimo anno', 'Rerum novarum', 'Laudato si\'', 'Pacem in terris'], 0, 'Pio XI, 1931.'),
    mc('O Compêndio da DSI é de:', ['2004', '1891', '1991', '2015'], 0, 'Justiça e Paz.'),
    mc('A definição de bem comum está em:', ['Gaudium et spes 26', 'Dei Verbum 10', 'Lumen gentium 8', 'Sacrosanctum Concilium 10'], 0, 'CIC 1906.'),
    mc('A Laborem exercens é de:', ['João Paulo II', 'Leão XIII', 'Paulo VI', 'Francisco'], 0, '1981.'),
    mc('A aplicação concreta cabe muitas vezes:', ['Ao juízo prudencial dos leigos', 'Só ao papa', 'Ao Estado', 'A ninguém'], 0, 'Prudência.'),
    disc('Entregue a ficha da Rerum novarum, nn. 1–20.', ['Problema', 'Diagnóstico', 'Princípios', 'Propostas']),
  ],
  resumo: ['Rerum novarum (1891).', 'Seis princípios.', 'Bem comum (GS 26).', 'Subsidiariedade (QA 79).', 'Teologia moral, não terceira via.'],
  referencias: [
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004).' },
    { texto: 'João Paulo II, Centesimus annus (1991).', livro: 'jp2-centesimus' },
    { texto: 'Catecismo da Igreja Católica, §§ 1877–1948 e 2419–2449.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['1891', 'Rerum novarum.'], ['QA 79', 'Subsidiariedade.'], ['GS 26', 'Bem comum.']],
  avancado: {
    texto: `<h3>As raízes tomistas</h3>
<p>Leão XIII, que já havia recomendado Tomás na Aeterni Patris (1879), apoiou-se na tradição tomista: a propriedade é legítima, mas o uso dos bens deve servir também aos outros (Suma Teológica II-II, q. 66, a. 2) ${tag('fato')}. Tomás chega a afirmar que, em necessidade extrema, todas as coisas são comuns (II-II, q. 66, a. 7) ${tag('fato')}. A Doutrina Social desenvolve essa tradição em contexto industrial ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 66.', livro: 'suma-ii-ii' }],
    exercicios: [
      mc('Tomás trata da propriedade em:', ['II-II, q. 66', 'I, q. 2', 'III, q. 75', 'I-II, q. 109'], 0, 'Fonte.'),
      mc('Em necessidade extrema, todas as coisas são:', ['Comuns', 'Do Estado', 'Do rei', 'Proibidas'], 0, 'a. 7.'),
      mc('O uso dos bens deve servir:', ['Também aos outros', 'Só ao dono', 'Só ao Estado', 'A ninguém'], 0, 'a. 2.'),
      disc('Explique a doutrina tomista da propriedade e sua retomada na Rerum novarum.', ['Tomás', 'Leão XIII', 'Continuidade', 'Juízo'])],
  },
}),

aula({
  id: 'tg7-2', titulo: 'Trabalho, propriedade e economia', duracao: '150 min',
  aprendera: ['Explicar a dignidade do trabalho segundo a Laborem exercens', 'Explicar a propriedade privada e sua "hipoteca social"', 'Explicar o juízo da Centesimus annus sobre o mercado', 'Aplicar a Doutrina Social a problemas econômicos brasileiros'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O mercado é bom ou mau? O que é um salário justo?</p>
<h3>O trabalho</h3>
<p>A Laborem exercens (1981) afirma que o trabalho é para o homem, e não o homem para o trabalho, e ensina a prioridade do trabalho sobre o capital ${tag('doutrina')}. O sujeito do trabalho é a pessoa, e por isso o trabalho tem dignidade própria ${tag('doutrina')}.</p>
<h3>Propriedade</h3>
<p>A Igreja defende a propriedade privada como garantia da liberdade e da autonomia pessoal (CIC 2401–2406) ${tag('doutrina')}. João Paulo II falou de uma "hipoteca social" sobre a propriedade (Sollicitudo rei socialis 42) ${tag('fato')}.</p>
<h3>Mercado</h3>
<p>A Centesimus annus (1991) reconhece o mercado livre como instrumento eficaz para colocar recursos e responder às necessidades, desde que enquadrado num sólido contexto jurídico que o ponha a serviço da liberdade humana integral (CA 34 e 42) ${tag('doutrina')}. Ela critica também o "Estado assistencial" que substitui a sociedade (CA 48) ${tag('doutrina')}.</p>
<h3>Salário justo</h3>
<p>O salário justo deve permitir ao trabalhador e à sua família uma vida digna (CIC 2434) ${tag('doutrina')}. A Caritas in veritate (2009) propôs a "lógica do dom" e a gratuidade também na atividade econômica ${tag('fato')}.</p>`,
  vocabulario: [
    ['Prioridade do trabalho', 'O trabalho, ação da pessoa, tem precedência sobre o capital.'],
    ['Hipoteca social', 'Função social que pesa sobre a propriedade privada.'],
    ['Salário justo', 'Remuneração que permite vida digna ao trabalhador e à família.'],
    ['Estado assistencial', 'Estado que substitui a sociedade em vez de apoiá-la.'],
    ['Lógica do dom', 'Gratuidade como dimensão da vida econômica.'],
  ],
  exemplos: `<p><strong>Função social da propriedade no Brasil:</strong> a Constituição de 1988 afirma que a propriedade atenderá a sua função social (art. 5º, XXIII). A ideia tem paralelo com a doutrina da "hipoteca social", embora o direito constitucional tenha fontes e interpretações próprias.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Centesimus annus foi publicada no centenário da Rerum novarum, após a queda dos regimes comunistas do Leste europeu ${tag('fato')}. <strong>No Brasil:</strong> o salário mínimo foi instituído no governo Vargas, em 1940 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o trabalho tem prioridade sobre o capital', tag: 'argumento',
    premissas: ['O capital é um conjunto de meios de produção.', 'Os meios existem para servir às pessoas.', 'O trabalho é ação da pessoa.'],
    conclusao: 'Logo, o trabalho tem prioridade sobre o capital, que é instrumento.',
    nota: 'Laborem exercens 12.',
  },
  objecoes: [
    { objecao: 'Defender o mercado contradiz a opção pelos pobres.', tag: 'debate',
      resposta: 'A Centesimus annus reconhece a eficácia do mercado e, ao mesmo tempo, lembra que existem necessidades humanas que não encontram lugar nele (CA 34). A questão é enquadrar o mercado juridicamente e moralmente. Economistas católicos divergem sobre o grau de intervenção, e essa divergência é legítima.' },
  ],
  aplicacao: `<p>Escolha um problema econômico brasileiro (informalidade, desemprego, tributação, concentração de terra) e analise-o com dois princípios da Doutrina Social e dados de fonte oficial (IBGE, IPEA).</p>`,
  fonte: {
    obra: 'João Paulo II, Centesimus annus (1991), capítulo IV (nn. 30–43)', link: null,
    orientacao: `<p>Observe a distinção entre o mercado como instrumento e uma visão que o absolutiza.</p>`,
  },
  perguntas: [
    { p: 'O que ensina a Laborem exercens?', r: 'A prioridade do trabalho sobre o capital.' },
    { p: 'O que é a hipoteca social?', r: 'A função social que pesa sobre a propriedade privada.' },
    { p: 'Como a Centesimus annus avalia o mercado?', r: 'Como instrumento eficaz, enquadrado num contexto jurídico e moral.' },
  ],
  exercicios: [
    mc('"Hipoteca social" aparece na:', ['Sollicitudo rei socialis', 'Rerum novarum', 'Dei Verbum', 'Humanae vitae'], 0, 'SRS 42.'),
    mc('A Centesimus annus é de:', ['1991', '1981', '2009', '1931'], 0, 'Centenário.'),
    mc('A função social da propriedade está na Constituição, art. 5º, inciso:', ['XXIII', 'VI', 'XLVII', 'I'], 0, 'Brasil.'),
    mc('O salário mínimo no Brasil foi instituído em:', ['1940', '1988', '1964', '1889'], 0, 'Vargas.'),
    mc('A "lógica do dom" está na:', ['Caritas in veritate', 'Rerum novarum', 'Pacem in terris', 'Laborem exercens'], 0, '2009.'),
    disc('Analise um problema econômico brasileiro com dois princípios e dados oficiais.', ['Problema', 'Princípios', 'Dados com fonte', 'Juízo']),
  ],
  resumo: ['Trabalho para o homem.', 'Prioridade sobre o capital.', 'Propriedade com hipoteca social.', 'Mercado enquadrado.', 'Salário justo.'],
  referencias: [
    { texto: 'João Paulo II, Centesimus annus (1991).', livro: 'jp2-centesimus' },
    { texto: 'Santo Tomás de Aquino, Sobre a compra e a venda.', livro: 'tomas-compra-venda' },
    { texto: 'Catecismo da Igreja Católica, §§ 2401–2449.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['LE', 'Trabalho.'], ['SRS 42', 'Hipoteca social.'], ['CA', 'Mercado.']],
  avancado: {
    texto: `<h3>O preço justo na escolástica</h3>
<p>Tomás tratou da justiça nas trocas, condenando vender acima do justo valor por fraude (Suma Teológica II-II, q. 77) ${tag('fato')}. Os teólogos de Salamanca, como Luis de Molina e Domingo de Soto, analisaram preços, moeda e câmbio no século XVI ${tag('fato')}. Alguns historiadores do pensamento econômico, como Joseph Schumpeter, reconheceram nessas análises precursores da economia moderna ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Sobre a compra e a venda.', livro: 'tomas-compra-venda' }],
    exercicios: [
      mc('Tomás trata da fraude na compra e venda em:', ['II-II, q. 77', 'I, q. 1', 'III, q. 1', 'I-II, q. 94'], 0, 'Fonte.'),
      mc('Analistas de preços e moeda em Salamanca:', ['Molina e Soto', 'Ockham e Escoto', 'Lutero e Calvino', 'Smith e Ricardo'], 0, 'Século XVI.'),
      mc('Reconheceu os escolásticos como precursores:', ['Schumpeter', 'Marx', 'Keynes', 'Friedman'], 0, 'História do pensamento.'),
      disc('Explique a doutrina do preço justo e sua relevância hoje.', ['Tomás', 'Salamanca', 'Hoje', 'Juízo'])],
  },
}),

aula({
  id: 'tg7-3', titulo: 'Política, Estado e paz', duracao: '150 min',
  aprendera: ['Explicar a origem e os limites da autoridade política', 'Explicar a relação entre Igreja e comunidade política', 'Conhecer as condições da legítima defesa (guerra justa)', 'Explicar a contribuição da Pacem in terris'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Qual a relação entre fé e política, Igreja e Estado?</p>
<h3>Autoridade</h3>
<p>A autoridade é exigida pela ordem moral e vem de Deus, mas a escolha do regime e dos governantes é deixada à livre vontade dos cidadãos (CIC 1897–1901; GS 74) ${tag('doutrina')}. A autoridade só se exerce legitimamente quando busca o bem comum por meios moralmente lícitos; leis injustas não obrigam em consciência (CIC 1902–1903) ${tag('doutrina')}.</p>
<h3>Igreja e Estado</h3>
<p>A comunidade política e a Igreja são independentes e autônomas, cada uma em seu campo, mas ambas servem à vocação das mesmas pessoas (GS 76) ${tag('doutrina')}. O Vaticano II, na Dignitatis humanae (1965), afirmou o direito à liberdade religiosa ${tag('fato')}.</p>
<h3>Guerra e paz</h3>
<p>O Catecismo enumera condições rigorosas para a legítima defesa pela força militar: dano grave, duradouro e certo; ineficácia dos outros meios; probabilidade séria de êxito; não provocar males maiores do que o mal a eliminar (CIC 2309) ${tag('doutrina')}. A avaliação dessas condições cabe ao juízo prudencial dos responsáveis pelo bem comum ${tag('doutrina')}.</p>
<h3>Pacem in terris</h3>
<p>João XXIII, em 1963, dirigiu a encíclica "a todos os homens de boa vontade" e fundou a paz nos direitos e deveres da pessoa ${tag('fato')}.</p>`,
  vocabulario: [
    ['Autoridade', 'Poder legítimo de mandar em vista do bem comum.'],
    ['Lei injusta', 'Lei contrária à ordem moral, que não obriga em consciência.'],
    ['Liberdade religiosa', 'Imunidade de coação em matéria religiosa (Dignitatis humanae).'],
    ['Guerra justa', 'Tradição que estabelece condições para o uso legítimo da força.'],
    ['Laicidade', 'Distinção entre a esfera política e a religiosa.'],
  ],
  exemplos: `<p><strong>Voto e consciência:</strong> a Doutrina Social não indica partidos, mas oferece critérios para avaliar programas. A Congregação para a Doutrina da Fé, na nota de 2002 sobre a participação dos católicos na vida política, lembrou que certas questões, como a defesa da vida, são exigências éticas fundamentais.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Pacem in terris foi publicada em abril de 1963, meses depois da crise dos mísseis de Cuba ${tag('fato')}. <strong>No Brasil:</strong> a separação entre Igreja e Estado foi estabelecida após a Proclamação da República, pelo decreto 119-A de 1890 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lei injusta não obriga', tag: 'argumento',
    premissas: ['A lei é ordenação da razão para o bem comum.', 'Uma "lei" contrária ao bem moral não é ordenação da razão.', 'Logo, ela tem aparência de lei, mas não força de lei moral.'],
    conclusao: 'Logo, a lei injusta não obriga em consciência, embora a desobediência exija prudência.',
    nota: 'Santo Tomás, Suma Teológica I-II, q. 96, a. 4; Agostinho: "lei injusta não parece ser lei".',
  },
  objecoes: [
    { objecao: 'A religião deve ficar fora da política num Estado laico.', tag: 'debate',
      resposta: 'O Estado laico não professa religião oficial, mas os cidadãos religiosos têm o mesmo direito de argumentar no espaço público. A Igreja propõe argumentos que pretende acessíveis à razão de todos. O equilíbrio entre laicidade e liberdade religiosa é tema de debate jurídico e filosófico.' },
  ],
  aplicacao: `<p>Leia Gaudium et spes 73–76 e escreva uma página sobre o papel do católico leigo na política brasileira, sem indicar partidos.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Gaudium et spes, nn. 73–76', link: null,
    orientacao: `<p>Observe a distinção entre a ação dos cristãos como cidadãos e a ação da Igreja como tal (n. 76).</p>`,
  },
  perguntas: [
    { p: 'De onde vem a autoridade política?', r: 'É exigida pela ordem moral e vem de Deus; o regime é escolhido pelos cidadãos.' },
    { p: 'Qual documento afirmou a liberdade religiosa?', r: 'A Dignitatis humanae (1965).' },
    { p: 'Onde estão as condições da legítima defesa militar?', r: 'No CIC 2309.' },
  ],
  exercicios: [
    mc('A Pacem in terris é de:', ['1963', '1891', '1991', '2020'], 0, 'João XXIII.'),
    mc('Leis injustas:', ['Não obrigam em consciência', 'Obrigam sempre', 'Só obrigam os fiéis', 'São irrelevantes'], 0, 'CIC 1903.'),
    mc('A separação Igreja-Estado no Brasil veio em:', ['1890', '1824', '1934', '1988'], 0, 'Decreto 119-A.'),
    mc('Uma das condições do CIC 2309:', ['Probabilidade séria de êxito', 'Vitória certa', 'Aprovação popular', 'Lucro'], 0, 'Guerra.'),
    mc('Igreja e comunidade política são:', ['Independentes e autônomas', 'Idênticas', 'Inimigas', 'Subordinadas uma à outra'], 0, 'GS 76.'),
    disc('Escreva sobre o papel do leigo na política brasileira.', ['GS 73–76', 'Princípios', 'Sem partidarismo', 'Juízo']),
  ],
  resumo: ['Autoridade para o bem comum.', 'Lei injusta não obriga.', 'Igreja e Estado autônomos.', 'Liberdade religiosa.', 'Condições do CIC 2309.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965) e Dignitatis humanae (1965).' },
    { texto: 'Santo Agostinho, A Cidade de Deus.', livro: 'agostinho-cidade' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 90–96.', livro: 'suma-i-ii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto', 'Ler a fonte indicada'],
  revisao: [['Autoridade', 'Bem comum.'], ['DH', 'Liberdade religiosa.'], ['CIC 2309', 'Legítima defesa.']],
  avancado: {
    texto: `<h3>A guerra justa em Tomás</h3>
<p>Tomás exige três condições para a guerra justa: autoridade do príncipe, causa justa e intenção reta (Suma Teológica II-II, q. 40, a. 1) ${tag('fato')}. A tradição posterior, com Vitória e Suárez, acrescentou critérios como a proporcionalidade e a conduta na guerra ${tag('fato')}. Os papas recentes insistiram cada vez mais na dificuldade de aplicar esses critérios às armas modernas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 40.', livro: 'suma-ii-ii' }],
    exercicios: [
      mc('As três condições de Tomás são autoridade, causa justa e:', ['Intenção reta', 'Vitória certa', 'Lucro', 'Aprovação do povo'], 0, 'II-II, q. 40.'),
      mc('Desenvolveram a tradição no século XVI:', ['Vitória e Suárez', 'Ockham e Escoto', 'Hobbes e Locke', 'Marx e Engels'], 0, 'Salamanca.'),
      mc('Os papas recentes insistem na:', ['Dificuldade de aplicar os critérios hoje', 'Facilidade', 'Obsolescência total', 'Guerra santa'], 0, 'Armas modernas.'),
      disc('Aplique as condições da guerra justa a um conflito histórico.', ['Condições', 'Caso', 'Aplicação', 'Juízo'])],
  },
}),

aula({
  id: 'tg7-4', titulo: 'Família, vida e ecologia integral', duracao: '150 min',
  aprendera: ['Explicar a família como célula da sociedade', 'Explicar a defesa da vida na Doutrina Social', 'Explicar a ecologia integral da Laudato si\'', 'Relacionar os temas pela dignidade da pessoa'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Família, defesa da vida e meio ambiente são causas separadas ou partes de uma mesma visão?</p>
<h3>Família</h3>
<p>A família é a célula original da vida social (CIC 2207) ${tag('doutrina')}. O princípio de subsidiariedade pede que o Estado apoie a família sem substituí-la (CIC 2209–2211) ${tag('doutrina')}. A Familiaris consortio (1981) e a Amoris laetitia (2016) são documentos centrais sobre a família ${tag('fato')}.</p>
<h3>Vida</h3>
<p>A Evangelium vitae (1995), de João Paulo II, afirmou o valor inviolável da vida humana, do concebimento à morte natural ${tag('fato')}. A defesa da vida é apresentada como fundamento dos outros direitos ${tag('doutrina')}.</p>
<h3>Ecologia integral</h3>
<p>A Laudato si' (2015), de Francisco, propõe a "ecologia integral": a crise ambiental e a crise social são uma só crise socioambiental (LS 139) ${tag('doutrina')}. O papa critica o "paradigma tecnocrático" e uma cultura do descarte que atinge coisas e pessoas ${tag('fato')}. Ele afirma que "tudo está interligado" ${tag('fato')}.</p>
<h3>Unidade</h3>
<p>A Laudato si' liga a defesa do ambiente à defesa do embrião humano (LS 120) ${tag('fato')}. A dignidade da pessoa é o fio que une família, vida e criação ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Célula da sociedade', 'A família como primeira comunidade natural.'],
    ['Cultura do descarte', 'Atitude que trata coisas e pessoas como descartáveis.'],
    ['Ecologia integral', 'Visão que une ambiente, sociedade, economia e cultura.'],
    ['Paradigma tecnocrático', 'Primado da técnica e do domínio sobre a natureza e o homem.'],
    ['Cultura da vida', 'Expressão da Evangelium vitae.'],
  ],
  exemplos: `<p><strong>Desperdício de alimentos e fome:</strong> a Laudato si' observa que o desperdício de alimentos é como roubá-los da mesa do pobre (LS 50, citando uma audiência de Francisco). Um mesmo problema é ambiental, econômico e moral, e mostra a ideia de ecologia integral.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Laudato si' foi publicada em maio de 2015, antes da Conferência do Clima de Paris ${tag('fato')}. <strong>No Brasil:</strong> o Sínodo para a Amazônia (2019) e a exortação Querida Amazonia (2020) trataram da região e de seus povos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que tudo está interligado', tag: 'argumento',
    premissas: ['O ser humano é parte da criação e depende dela.', 'As decisões econômicas e técnicas afetam a criação e as pessoas, sobretudo os pobres.', 'A dignidade humana inclui condições ambientais e sociais de vida.'],
    conclusao: 'Logo, a proteção do ambiente, a justiça social e a defesa da vida são inseparáveis.',
    nota: 'Laudato si\' 137–162.',
  },
  objecoes: [
    { objecao: 'A Igreja não tem competência para falar de clima.', tag: 'debate',
      resposta: 'A Laudato si\' declara que a Igreja não pretende resolver questões científicas e que reconhece o debate entre especialistas (LS 61, 188). Ela se apoia no consenso científico de sua época e oferece critérios morais. A discussão sobre políticas concretas é legítima e permanece aberta.' },
  ],
  aplicacao: `<p>Leia o capítulo IV da Laudato si' (nn. 137–162). Escolha uma realidade brasileira (uma cidade, um bioma, um problema urbano) e analise-a com a categoria de ecologia integral.</p>`,
  fonte: {
    obra: 'Francisco, Laudato si\' (2015), capítulo IV', link: null,
    orientacao: `<p>Observe as dimensões da ecologia integral: ambiental, econômica, social, cultural e da vida cotidiana.</p>`,
  },
  perguntas: [
    { p: 'O que é a família segundo o CIC 2207?', r: 'A célula original da vida social.' },
    { p: 'De quando é a Evangelium vitae?', r: '1995.' },
    { p: 'O que é ecologia integral?', r: 'Visão que une ambiente e sociedade numa só crise socioambiental.' },
  ],
  exercicios: [
    mc('A Laudato si\' é de:', ['2015', '1991', '2009', '2020'], 0, 'Francisco.'),
    mc('"Tudo está interligado" é ideia da:', ['Laudato si\'', 'Rerum novarum', 'Humanae vitae', 'Dei Verbum'], 0, 'Ecologia integral.'),
    mc('A Familiaris consortio é de:', ['1981', '2016', '1965', '1931'], 0, 'João Paulo II.'),
    mc('O Sínodo para a Amazônia foi em:', ['2019', '2015', '2007', '1992'], 0, 'Querida Amazonia.'),
    mc('A Laudato si\' liga a ecologia à defesa do:', ['Embrião humano', 'Mercado livre', 'Estado mínimo', 'Lucro'], 0, 'LS 120.'),
    disc('Analise uma realidade brasileira com a categoria de ecologia integral.', ['Realidade', 'Dimensões', 'Fontes', 'Juízo']),
  ],
  resumo: ['Família: célula da sociedade.', 'Evangelium vitae (1995).', 'Laudato si\' (2015).', 'Ecologia integral.', 'Dignidade une tudo.'],
  referencias: [
    { texto: 'Francisco, Laudato si\' (2015).' },
    { texto: 'João Paulo II, Evangelium vitae (1995).' },
    { texto: 'Catecismo da Igreja Católica, §§ 2201–2233 e 2415–2418.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['CIC 2207', 'Célula.'], ['1995', 'Evangelium vitae.'], ['2015', 'Laudato si\'.']],
  avancado: {
    texto: `<h3>Fratelli tutti</h3>
<p>Na Fratelli tutti (2020), Francisco trata da fraternidade e da amizade social, usando a parábola do bom samaritano como chave ${tag('fato')}. A encíclica retoma a crítica ao populismo e ao liberalismo individualista, e reafirma a inadmissibilidade da pena de morte ${tag('fato')}. Ela foi recebida com elogios e críticas, sobretudo sobre seu juízo a respeito da guerra justa ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1939–1942 (solidariedade).', livro: 'cic' }],
    exercicios: [
      mc('A Fratelli tutti é de:', ['2020', '2015', '2013', '2009'], 0, 'Francisco.'),
      mc('A parábola-chave é a do:', ['Bom samaritano', 'Filho pródigo', 'Semeador', 'Talento'], 0, 'Lc 10.'),
      mc('A recepção da encíclica foi:', ['Com elogios e críticas', 'Unânime', 'Nula', 'Proibida'], 0, 'Debate.'),
      disc('Explique a proposta de amizade social da Fratelli tutti e um ponto controverso.', ['Proposta', 'Bom samaritano', 'Controvérsia', 'Juízo'])],
  },
}),

avaliacao('tg7-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os documentos e princípios da Doutrina Social, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Revise a lista cronológica das encíclicas sociais.</li></ul>`,
[
  disc('Aplique os princípios de bem comum, subsidiariedade e solidariedade a um problema brasileiro concreto, com dados de fonte oficial.', ['Princípios', 'Problema', 'Dados', 'Juízo prudencial']),
  disc('Mostre como a Doutrina Social critica tanto o coletivismo quanto o individualismo, com citações das encíclicas.', ['Coletivismo', 'Individualismo', 'Citações', 'Equilíbrio']),
]),
];
