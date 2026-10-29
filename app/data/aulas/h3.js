// História III — teorias e escolas, debates e críticas (etapas 6 e 7 do percurso de História).
// Cada escola é exposta pelos próprios textos e depois criticada; as interpretações do Brasil são
// apresentadas como interpretações, confrontadas entre si e com as fontes.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'h3-1', titulo: 'Positivismo, escola metódica e materialismo histórico', duracao: '120 min',
  aprendera: ['Distinguir o positivismo de Comte da "escola metódica" francesa', 'Expor as teses centrais do materialismo histórico com os textos de Marx', 'Avaliar a historiografia marxista e suas críticas', 'Reconhecer essas correntes na história e na historiografia do Brasil'],
  prereq: ['História II (módulo H2)', 'Filosofia contemporânea (Degrau 9): Hegel e Marx'],
  explicacao: `
<h3>O problema</h3>
<p>No século XIX, várias correntes prometeram tornar a história uma ciência: umas pela precisão do método, outras por leis do desenvolvimento social. Para lê-las bem é preciso separar três coisas que costumam ser confundidas: um <em>método de pesquisa</em>, uma <em>teoria da sociedade</em> e uma <em>filosofia da história</em>.</p>

<h3>O positivismo de Comte</h3>
<p>Auguste Comte, no <em>Curso de filosofia positiva</em> (1830–1842), formulou a "lei dos três estados": o espírito humano passaria do estado teológico ao metafísico e deste ao positivo, em que se buscam apenas leis dos fenômenos observáveis ${tag('fato')}. É uma filosofia da história, não um método de arquivo ${tag('interpretacao')}. A lei dos três estados não foi confirmada pelos estudos históricos, que mostram convivência e retorno das formas de pensamento ${tag('debate')}.</p>

<h3>A "escola metódica"</h3>
<p>Na França do fim do século XIX, historiadores como Gabriel Monod, fundador da <em>Revue historique</em> (1876), e Langlois e Seignobos, autores da <em>Introdução aos estudos históricos</em> (1898), sistematizaram a crítica documental ${tag('fato')}. Os Annales os chamaram de "positivistas", rótulo que a historiografia posterior considera impreciso: eram metódicos no trato das fontes, não discípulos de Comte ${tag('interpretacao')}.</p>

<h3>O materialismo histórico</h3>
<p>No prefácio de <em>Contribuição à crítica da economia política</em> (1859), Marx resumiu sua concepção: na produção da vida, os homens entram em relações de produção que correspondem a um grau de desenvolvimento das forças produtivas; o conjunto dessas relações é a base real sobre a qual se ergue uma superestrutura jurídica e política, e "não é a consciência dos homens que determina o seu ser, mas o seu ser social que determina a sua consciência" ${tag('fato')}. No <em>Manifesto comunista</em> (1848), com Engels, afirmou que a história de toda sociedade até então era a história da luta de classes ${tag('fato')}.</p>
<p>Distinga: como <strong>programa de pesquisa</strong>, a atenção à economia, ao trabalho e aos conflitos sociais enriqueceu a historiografia (Hobsbawm, Thompson) ${tag('interpretacao')}. Como <strong>filosofia da história</strong> com sentido necessário (rumo a uma sociedade sem classes), é tese discutível, criticada por Popper como não refutável e pela tradição católica por reduzir a pessoa e a religião às condições materiais ${tag('debate')}. A Igreja rejeitou o materialismo e a luta de classes como princípio, desde a <em>Rerum Novarum</em> (1891), sem negar a existência de conflitos sociais e o dever de justiça ${tag('doutrina')}.</p>

<h3>No Brasil</h3>
<p>O positivismo teve influência política singular no Brasil: a Igreja Positivista foi organizada por Miguel Lemos e Raimundo Teixeira Mendes (1881), Benjamin Constant o difundiu na Escola Militar, e o lema "Ordem e Progresso" da bandeira de 1889 vem de Comte ${tag('fato')}. Na historiografia, Caio Prado Júnior, em <em>Formação do Brasil contemporâneo</em> (1942), interpretou a colonização a partir de seu "sentido": uma empresa comercial voltada ao mercado externo — leitura de inspiração marxista que marcou a historiografia econômica ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Lei dos três estados', 'Teológico, metafísico e positivo (Comte).'],
    ['Escola metódica', 'Historiadores franceses do fim do século XIX que sistematizaram a crítica documental.'],
    ['Forças produtivas', 'Meios e capacidades de produção de uma sociedade (Marx).'],
    ['Relações de produção', 'Relações entre as pessoas na produção, como propriedade e trabalho.'],
    ['Base e superestrutura', 'Economia e, sobre ela, instituições jurídicas, políticas e ideias, segundo Marx.'],
    ['Sentido da colonização', 'Tese de Caio Prado Júnior: empresa comercial voltada ao exterior.'],
  ],
  exemplos: `<p><strong>Três leituras da Abolição (1888):</strong> uma leitura metódica reconstitui a cronologia legislativa (1850, 1871, 1885, 1888) com documentos; uma leitura marxista pergunta pela transição do trabalho escravo ao livre e pelos interesses econômicos; uma leitura que dá peso às ideias e à religião estuda a campanha abolicionista, a imprensa e a ação de eclesiásticos e leigos. As três podem dialogar; o erro é tomar uma por todas.</p>`,
  contexto: `<p><strong>No mundo:</strong> industrialização, nacionalismos e movimentos operários formam o contexto dessas correntes. <strong>No Brasil:</strong> o positivismo influenciou a geração militar da República; o marxismo chegou à historiografia sobretudo a partir dos anos 1930, com Caio Prado Júnior ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que método, teoria e filosofia da história devem ser separados', tag: 'argumento',
    premissas: ['Um método de crítica de fontes vale independentemente da teoria social de quem o usa.', 'Uma teoria social pode orientar perguntas fecundas sem que sua filosofia da história seja verdadeira.', 'Avaliar em bloco o que é separável leva a rejeitar ou aceitar coisas por associação.'],
    conclusao: 'Logo, o estudante deve avaliar separadamente o método, a teoria e a filosofia da história de cada escola.',
    nota: 'Permite, por exemplo, usar dados de um historiador marxista sobre salários sem aceitar a necessidade histórica da sociedade sem classes.',
  },
  objecoes: [
    { objecao: 'Toda história é de classe; não há conhecimento neutro.', tag: 'debate',
      resposta: 'A posição social influencia as perguntas, mas as respostas podem ser verificadas nas fontes por pesquisadores de posições diferentes. Se nenhuma verificação valesse, a própria tese marxista não poderia ser provada.' },
    { objecao: 'O positivismo foi derrotado; não interessa estudá-lo.', tag: 'debate',
      resposta: 'Ele marcou instituições e símbolos brasileiros, e sua confiança nas leis sociais reaparece em outras formas. Conhecê-lo é necessário para entender a República e para reconhecê-lo quando volta com outro nome.' },
  ],
  aplicacao: `<p>Escolha um acontecimento da história do Brasil e escreva três parágrafos curtos: como o estudaria um historiador metódico, um marxista e um historiador atento às ideias e à religião. Indique as fontes que cada um privilegiaria.</p>`,
  fonte: {
    obra: 'Marx, prefácio de Contribuição à crítica da economia política (1859); Caio Prado Júnior, Formação do Brasil contemporâneo, cap. "Sentido da colonização"', link: null,
    orientacao: `<p>No prefácio de Marx, sublinhe as frases sobre base, superestrutura e consciência. Em Caio Prado, identifique a tese do "sentido" e os dados que ele usa. Pergunte: a tese depende da filosofia da história de Marx ou se sustenta pelos dados?</p>`,
  },
  perguntas: [
    { p: 'O que diz a lei dos três estados?', r: 'Que o pensamento passa do estado teológico ao metafísico e ao positivo.' },
    { p: 'Por que chamar a escola metódica de "positivista" é impreciso?', r: 'Eram metódicos no trato das fontes, não seguidores da filosofia de Comte.' },
    { p: 'Qual a tese de Caio Prado Júnior sobre o sentido da colonização?', r: 'A colonização foi uma empresa comercial voltada ao mercado externo.' },
  ],
  exercicios: [
    mc('A lei dos três estados é de:', ['Marx', 'Comte', 'Ranke', 'Seignobos'], 1, 'Curso de filosofia positiva (1830–1842).'),
    mc('A Revue historique (1876) foi fundada por:', ['Gabriel Monod', 'Marc Bloch', 'Lucien Febvre', 'Auguste Comte'], 0, 'Gabriel Monod.'),
    mc('A frase "não é a consciência que determina o ser, mas o ser social que determina a consciência" está:', ['No Manifesto comunista', 'No prefácio de 1859', 'Em O capital, livro III', 'Na Rerum Novarum'], 1, 'Prefácio de Contribuição à crítica da economia política.'),
    mc('O lema "Ordem e Progresso" da bandeira brasileira vem de:', ['Marx', 'Comte', 'Rousseau', 'Montesquieu'], 1, 'Da fórmula positivista de Comte.'),
    mc('Formação do Brasil contemporâneo (1942) é de:', ['Gilberto Freyre', 'Sérgio Buarque de Holanda', 'Caio Prado Júnior', 'Raymundo Faoro'], 2, 'Caio Prado Júnior.'),
    disc('Separe, no materialismo histórico, o programa de pesquisa da filosofia da história. Mostre o que um historiador pode aproveitar do primeiro sem aceitar a segunda, com um exemplo.', ['Distingue programa e filosofia da história', 'Expõe as teses com os textos', 'Dá exemplo concreto', 'Apresenta crítica fundamentada']),
  ],
  resumo: ['Comte: lei dos três estados (filosofia da história).', 'Escola metódica: Monod, Langlois e Seignobos (crítica documental).', 'Marx: base e superestrutura (1859); luta de classes (1848).', 'Separar método, teoria e filosofia da história.', 'Brasil: positivismo na República; Caio Prado e o sentido da colonização.'],
  referencias: [
    { texto: 'Auguste Comte, Curso de filosofia positiva (1830–1842), lição 1.' },
    { texto: 'Karl Marx, prefácio a Contribuição à crítica da economia política (1859).' },
    { texto: 'Karl Marx e Friedrich Engels, Manifesto do Partido Comunista (1848).' },
    { texto: 'Leão XIII, Rerum Novarum (1891).', link: { url: 'https://www.vatican.va/content/leo-xiii/pt/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', rotulo: 'Rerum Novarum (vatican.va)' } },
    { texto: 'Caio Prado Júnior, Formação do Brasil contemporâneo (1942).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos indicados'],
  revisao: [['Comte', 'Lei dos três estados.'], ['Marx (1859)', 'Base, superestrutura, ser social e consciência.'], ['Caio Prado', 'Sentido da colonização: empresa comercial.']],
  avancado: {
    texto: `<h3>Weber contra o determinismo econômico</h3>
<p>Max Weber, em <em>A ética protestante e o "espírito" do capitalismo</em> (1904–1905), sustentou que certas ideias religiosas (a ascese intramundana de grupos calvinistas e puritanos) contribuíram para formar a mentalidade capitalista, sem pretender substituir uma explicação econômica por uma explicação religiosa única ${tag('interpretacao')}. A tese foi muito discutida: críticos apontaram capitalismo comercial anterior em regiões católicas, como as cidades italianas ${tag('debate')}.</p>
<h3>O marxismo ocidental e Gramsci</h3>
<p>Antonio Gramsci, nos <em>Cadernos do cárcere</em>, deslocou a atenção para a hegemonia cultural e o papel dos intelectuais ${tag('interpretacao')} — tema estudado no Degrau 11 (Olavo de Carvalho), que o critica.</p>`,
    leituras: [{ texto: 'Max Weber, A ética protestante e o "espírito" do capitalismo (1904–1905).' }, { texto: 'Eric Hobsbawm, Sobre história (1997).' }],
    exercicios: [
      mc('Para Weber, a ética protestante:', ['Causou sozinha o capitalismo', 'Contribuiu para formar a mentalidade capitalista', 'Nada teve a ver com a economia', 'Foi efeito da luta de classes'], 1, 'Afinidade entre ideias religiosas e conduta econômica.'),
      mc('Uma crítica frequente à tese de Weber aponta:', ['A ausência de comércio na Idade Média', 'Capitalismo comercial anterior em regiões católicas', 'Que Calvino era católico', 'Que Weber era marxista'], 1, 'As cidades italianas medievais, por exemplo.'),
      mc('O conceito de hegemonia cultural é associado a:', ['Gramsci', 'Comte', 'Ranke', 'Seignobos'], 0, 'Cadernos do cárcere.'),
      disc('Compare Marx e Weber sobre a relação entre economia e religião na formação do capitalismo. Qual explicação dá conta de mais evidências?', ['Expõe Marx', 'Expõe Weber', 'Usa evidências históricas', 'Conclusão fundamentada'])],
  },
}),

aula({
  id: 'h3-2', titulo: 'Mentalidades, história cultural, micro-história e nova história política', duracao: '120 min',
  aprendera: ['Explicar o que estudam a história das mentalidades e a história cultural', 'Explicar a mudança de escala da micro-história', 'Explicar a renovação da história política', 'Conhecer obras brasileiras dessas correntes'],
  prereq: ['Aula anterior', 'Os Annales (aula h2-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Depois das grandes estruturas econômicas, a historiografia da segunda metade do século XX voltou-se para crenças, sentimentos, práticas culturais, pequenos grupos e, também, para a política — agora com novas perguntas. Que ganhos e riscos trouxe essa mudança?</p>

<h3>História das mentalidades</h3>
<p>Philippe Ariès estudou a infância (<em>A criança e a vida familiar no Antigo Regime</em>, 1960) e as atitudes diante da morte (<em>O homem diante da morte</em>, 1977) ${tag('fato')}. Georges Duby e Michel Vovelle trabalharam imaginários e sensibilidades coletivas ${tag('fato')}. O risco apontado: atribuir a "mentalidade de uma época" a todos os seus membros, apagando diferenças sociais ${tag('debate')}.</p>

<h3>História cultural</h3>
<p>Roger Chartier propôs estudar <strong>práticas e representações</strong>: como os grupos dão sentido ao mundo e como os textos circulam e são lidos — a história do livro e da leitura ${tag('interpretacao')}. Peter Burke sistematizou a história cultural em obras de síntese ${tag('fato')}.</p>

<h3>Micro-história</h3>
<p>Historiadores italianos (Carlo Ginzburg, Giovanni Levi) reduziram a escala de observação: uma aldeia, uma família, um indivíduo estudados intensivamente para revelar relações que a visão de conjunto não mostra ${tag('interpretacao')}. Em <em>A herança imaterial</em> (1985), Levi reconstruiu a trajetória de um exorcista piemontês do século XVII e as estratégias de uma comunidade rural ${tag('fato')}. A micro-história não é "história de pequenas coisas": é método de mudar a escala para testar generalizações ${tag('interpretacao')}.</p>

<h3>A volta da política</h3>
<p>René Rémond, em <em>Por uma história política</em> (1988), defendeu uma história política renovada, que estuda partidos, eleições, opinião, cultura política e longas durações, e não só a sucessão de governantes ${tag('fato')}.</p>

<h3>No Brasil</h3>
<p>Laura de Mello e Souza, em <em>O diabo e a Terra de Santa Cruz</em> (1986), estudou feitiçaria e religiosidade popular na colônia a partir de processos inquisitoriais e visitações ${tag('fato')}. Ronaldo Vainfas, em <em>Trópico dos pecados</em> (1989), analisou moral, sexualidade e Inquisição no Brasil colonial ${tag('fato')}. As duas obras usam as fontes da Inquisição "a contrapelo", como Ginzburg ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Mentalidades', 'Modos coletivos de sentir e pensar.'],
    ['Representações', 'Formas pelas quais um grupo dá sentido ao mundo (Chartier).'],
    ['Escala de observação', 'Grau de aproximação do objeto; a micro-história a reduz.'],
    ['Cultura política', 'Conjunto de valores, práticas e referências políticas de um grupo.'],
    ['Visitação', 'Inspeção da Inquisição a uma região, com denúncias e confissões registradas.'],
  ],
  exemplos: `<p><strong>Mudar a escala:</strong> uma estatística regional pode mostrar que a maioria dos lavradores de uma capitania era pobre. Um estudo micro-histórico de uma família, com testamentos e inventários, pode mostrar como essa pobreza convivia com redes de crédito e compadrio que a estatística não capta. As duas escalas se corrigem mutuamente.</p>`,
  contexto: `<p><strong>No mundo:</strong> essas correntes florescem entre os anos 1960 e 1990, em diálogo com a antropologia. <strong>No Brasil:</strong> a abertura dos arquivos da Inquisição de Lisboa a pesquisadores e a criação de programas de pós-graduação ampliaram esses estudos a partir dos anos 1980 ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a micro-história pode testar generalizações', tag: 'argumento',
    premissas: ['Uma generalização histórica afirma que algo vale para um conjunto de casos.', 'Um caso bem documentado que a contradiga obriga a reformulá-la ou a delimitá-la.', 'O estudo intensivo de um caso revela detalhes que a visão de conjunto não mostra.'],
    conclusao: 'Logo, a micro-história, ao examinar casos em profundidade, pode confirmar, corrigir ou delimitar generalizações.',
    nota: 'O limite: um caso não basta para generalizar no sentido inverso; a micro-história precisa da macro-história e vice-versa.',
  },
  objecoes: [
    { objecao: 'Estudar um moleiro ou uma aldeia é curiosidade sem importância.', tag: 'debate',
      resposta: 'A importância está na pergunta: o caso de Menocchio interessa porque testa o que se dizia sobre cultura popular e erudita no século XVI.' },
  ],
  aplicacao: `<p>Escolha um documento pessoal de um antepassado (certidão, carta, testamento) e escreva uma página no estilo micro-histórico: que relações sociais, crenças e práticas aparecem nele, e que pergunta maior ele ajuda a responder.</p>`,
  fonte: {
    obra: 'Laura de Mello e Souza, O diabo e a Terra de Santa Cruz, introdução; Carlo Ginzburg, O queijo e os vermes, prefácio', link: null,
    orientacao: `<p>Compare as duas introduções: que fontes usam, que perguntas fazem, que cuidados declaram ao ler documentos produzidos por inquisidores.</p>`,
  },
  perguntas: [
    { p: 'O que estuda a história das mentalidades?', r: 'Modos coletivos de sentir e pensar, como atitudes diante da infância e da morte.' },
    { p: 'O que é mudar a escala de observação?', r: 'Estudar intensivamente um caso pequeno para revelar relações invisíveis na visão de conjunto.' },
    { p: 'Que fontes usa O diabo e a Terra de Santa Cruz?', r: 'Processos inquisitoriais e visitações do Santo Ofício.' },
  ],
  exercicios: [
    mc('O homem diante da morte (1977) é de:', ['Ariès', 'Chartier', 'Levi', 'Rémond'], 0, 'Philippe Ariès.'),
    mc('"Práticas e representações" são conceitos de:', ['Roger Chartier', 'Fernand Braudel', 'Auguste Comte', 'René Rémond'], 0, 'História cultural.'),
    mc('A herança imaterial (1985) é de:', ['Ginzburg', 'Giovanni Levi', 'Duby', 'Vovelle'], 1, 'Giovanni Levi.'),
    mc('Por uma história política (1988) é obra organizada por:', ['René Rémond', 'Lucien Febvre', 'Jacques Le Goff', 'Peter Burke'], 0, 'René Rémond.'),
    mc('Trópico dos pecados (1989), sobre moral e Inquisição no Brasil colonial, é de:', ['Laura de Mello e Souza', 'Ronaldo Vainfas', 'Gilberto Freyre', 'Boris Fausto'], 1, 'Ronaldo Vainfas.'),
    disc('Explique por que fontes inquisitoriais são ao mesmo tempo valiosas e perigosas para estudar a religiosidade popular colonial, e como o historiador deve lê-las.', ['Explica o valor das fontes', 'Explica os riscos (intenção dos inquisidores, pressão sobre réus)', 'Propõe procedimentos de leitura', 'Usa exemplo']),
  ],
  resumo: ['Mentalidades: Ariès, Duby, Vovelle.', 'História cultural: práticas e representações (Chartier).', 'Micro-história: mudar a escala (Ginzburg, Levi).', 'Nova história política (Rémond).', 'Brasil: Laura de Mello e Souza (1986), Vainfas (1989).'],
  referencias: [
    { texto: 'Philippe Ariès, O homem diante da morte (1977).' },
    { texto: 'Roger Chartier, A história cultural: entre práticas e representações (1990).' },
    { texto: 'Giovanni Levi, A herança imaterial (1985).' },
    { texto: 'René Rémond (org.), Por uma história política (1988).' },
    { texto: 'Laura de Mello e Souza, O diabo e a Terra de Santa Cruz (1986).' },
    { texto: 'Ronaldo Vainfas, Trópico dos pecados (1989).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as introduções indicadas'],
  revisao: [['Micro-história', 'Mudar a escala para testar generalizações.'], ['Chartier', 'Práticas e representações.'], ['Laura de Mello e Souza', 'O diabo e a Terra de Santa Cruz (1986).']],
  avancado: {
    texto: `<h3>História conceitual</h3>
<p>Reinhart Koselleck e colaboradores, no dicionário <em>Geschichtliche Grundbegriffe</em>, estudaram a mudança de sentido de conceitos políticos e sociais ("Estado", "revolução", "progresso") entre 1750 e 1850, período que Koselleck chamou de <em>Sattelzeit</em> ${tag('interpretacao')}. Na Inglaterra, Quentin Skinner propôs ler os textos políticos em seu contexto de linguagem e intenção ${tag('interpretacao')}.</p>
<h3>História global</h3>
<p>Desde os anos 1990, a história global estuda conexões e comparações entre sociedades distantes, contra a narrativa centrada só na Europa ${tag('interpretacao')}; críticos alertam para generalizações apressadas quando falta domínio das línguas e fontes de cada região ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Reinhart Koselleck, Futuro passado (1979).' }, { texto: 'Quentin Skinner, As fundações do pensamento político moderno (1978).' }],
    exercicios: [
      mc('O termo Sattelzeit (1750–1850) é de:', ['Koselleck', 'Skinner', 'Chartier', 'Ariès'], 0, 'Período de transformação dos conceitos.'),
      mc('As fundações do pensamento político moderno (1978) é de:', ['Quentin Skinner', 'René Rémond', 'Lawrence Stone', 'Giovanni Levi'], 0, 'Quentin Skinner.'),
      mc('Uma crítica à história global aponta:', ['Excesso de arquivos', 'Generalizações sem domínio das línguas e fontes', 'Falta de interesse pela Europa', 'Uso de estatística'], 1, 'Risco de superficialidade.'),
      disc('Escolha um conceito político usado no Brasil do século XIX (por exemplo, "liberdade", "cidadão" ou "povo") e explique como estudá-lo à maneira da história conceitual.', ['Escolhe o conceito', 'Indica fontes', 'Mostra mudança de sentido possível', 'Evita anacronismo'])],
  },
}),

aula({
  id: 'h3-3', titulo: 'Verdade e objetividade na história: Carr, Elton e o desafio pós-moderno', duracao: '120 min',
  aprendera: ['Expor o debate entre Carr e Elton', 'Avaliar a crítica pós-moderna e suas respostas', 'Distinguir interpretação legítima de negacionismo', 'Relacionar história, memória e instituições públicas no Brasil'],
  prereq: ['Aulas anteriores', 'Epistemologia (Degrau 6): verdade e justificação'],
  explicacao: `
<h3>O problema</h3>
<p>Se o historiador escolhe as perguntas, seleciona as fontes e escreve uma narrativa, em que sentido o que ele afirma é verdadeiro? E se não houvesse verdade histórica, como distinguir uma pesquisa séria de uma falsificação?</p>

<h3>Carr e Elton</h3>
<p>Edward Hallett Carr, em <em>Que é história?</em> (1961), afirmou que os fatos não são como peixes na banca do peixeiro, prontos para o historiador levar: ele os pesca segundo o lugar e o anzol que escolhe ${tag('fato')}. Definiu a história como um "diálogo sem fim entre o presente e o passado" ${tag('fato')}. Geoffrey Elton, em <em>The Practice of History</em> (1967), respondeu que essa ênfase arrisca subordinar o passado às preocupações do presente, e defendeu a disciplina do arquivo e a independência dos fatos em relação ao historiador ${tag('interpretacao')}.</p>

<h3>O desafio pós-moderno</h3>
<p>Nos anos 1970–1990, autores como Hayden White e outros sustentaram que a narrativa histórica é uma construção linguística, sem acesso privilegiado a uma realidade passada ${tag('interpretacao')}. Respostas: Carlo Ginzburg defendeu que as provas, e não só a retórica, são o centro do ofício; Richard Evans, em <em>Em defesa da história</em> (1997), argumentou que reconhecer a interpretação não implica renunciar à verdade dos fatos verificáveis ${tag('interpretacao')}.</p>

<h3>Interpretação não é negacionismo</h3>
<p>No processo <em>Irving contra Penguin Books e Lipstadt</em> (Londres, 2000), o historiador David Irving processou Deborah Lipstadt por tê-lo chamado de negador do Holocausto; o tribunal concluiu que Irving havia distorcido deliberadamente as evidências históricas ${tag('fato')}. Richard Evans foi perito no caso e examinou, fonte por fonte, as citações de Irving ${tag('fato')}. O caso mostra a diferença: uma interpretação legítima pode ser discutida pelas fontes; uma falsificação é demonstrável pelas fontes.</p>

<h3>Critérios práticos de verdade histórica</h3>
<ul>
<li><strong>Correspondência com as fontes</strong>: o que se afirma pode ser verificado nos documentos citados.</li>
<li><strong>Coerência</strong>: a explicação não contradiz outros fatos bem estabelecidos.</li>
<li><strong>Abrangência</strong>: explica mais evidências que as alternativas.</li>
<li><strong>Transparência</strong>: as fontes estão indicadas, para que outros possam conferir.</li>
</ul>
<p>Esses critérios aplicam-se a todas as posições — inclusive às do próprio estudante e às de autores católicos — com o mesmo rigor ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Objetividade', 'Ideal de que as afirmações sejam controláveis pelas fontes, por qualquer pesquisador.'],
    ['Relativismo', 'Tese de que não há verdade independente do ponto de vista.'],
    ['Negacionismo', 'Recusa de fatos bem estabelecidos por distorção ou omissão das evidências.'],
    ['Perícia histórica', 'Exame técnico de fontes e citações, como no caso Irving.'],
    ['Pós-modernismo', 'Corrente que enfatiza o caráter construído e linguístico das narrativas.'],
  ],
  exemplos: `<p><strong>Interpretação ou distorção?</strong> Dois historiadores discordam sobre o peso da Igreja na abolição da escravidão no Brasil: é debate legítimo, que se decide examinando documentos episcopais, a ação de leigos e de ordens religiosas, e a imprensa. Um texto que omite deliberadamente as fontes contrárias para sustentar sua tese, seja qual for, deixa de ser interpretação e passa a ser distorção.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate cresceu com os genocídios do século XX e com as disputas de memória nacional. <strong>No Brasil:</strong> a Comissão Nacional da Verdade, criada pela Lei nº 12.528 de 2011, entregou seu relatório final em dezembro de 2014, sobre graves violações de direitos humanos entre 1946 e 1988 ${tag('fato')}. Seu trabalho e as controvérsias que gerou ilustram a relação, e a diferença, entre pesquisa histórica, memória e decisões do Estado ${tag('debate')}.</p>`,
  argumento: {
    titulo: 'Por que reconhecer a interpretação não implica abandonar a verdade', tag: 'argumento',
    premissas: ['Interpretações diferentes discutem o significado e as causas de fatos.', 'Para que discutam o mesmo objeto, precisam reconhecer ao menos alguns fatos comuns, verificáveis nas fontes.', 'Se nenhum fato fosse verificável, não haveria como distinguir pesquisa séria de falsificação.'],
    conclusao: 'Logo, a pluralidade de interpretações pressupõe, e não destrói, a verdade dos fatos verificáveis.',
    nota: 'O caso Irving mostra o argumento em prática: a falsificação foi provada pelas fontes.',
  },
  objecoes: [
    { objecao: 'A verdade histórica é sempre a versão dos vencedores.', tag: 'debate',
      resposta: 'Os vencedores controlam muitas fontes, e por isso a crítica busca testemunhos involuntários e de outros grupos. Mas a frase, se fosse absoluta, impediria também a correção das versões dos vencedores — que a historiografia faz constantemente com provas.' },
  ],
  aplicacao: `<p>Escolha uma afirmação histórica controversa que circule no debate público. Aplique os quatro critérios práticos (correspondência, coerência, abrangência, transparência) e registre no Caderno se ela é interpretação discutível, fato bem estabelecido ou distorção.</p>`,
  fonte: {
    obra: 'E. H. Carr, Que é história?, cap. 1; Richard Evans, Em defesa da história, conclusão', link: null,
    orientacao: `<p>Em Carr, localize a imagem dos peixes e a definição de história como diálogo. Em Evans, localize a resposta ao relativismo. Monte um quadro com a tese de cada um e o ponto em que concordam.</p>`,
  },
  perguntas: [
    { p: 'Como Carr define a história?', r: 'Como diálogo sem fim entre o presente e o passado.' },
    { p: 'O que o tribunal concluiu no caso Irving (2000)?', r: 'Que Irving havia distorcido deliberadamente as evidências históricas.' },
    { p: 'Quais os quatro critérios práticos da aula?', r: 'Correspondência com as fontes, coerência, abrangência e transparência.' },
  ],
  exercicios: [
    mc('Que é história? (1961) é de:', ['Geoffrey Elton', 'E. H. Carr', 'Richard Evans', 'Hayden White'], 1, 'E. H. Carr.'),
    mc('A resposta de Elton a Carr está em:', ['The Practice of History (1967)', 'Meta-história (1973)', 'Em defesa da história (1997)', 'O queijo e os vermes (1976)'], 0, 'Geoffrey Elton.'),
    mc('No caso Irving contra Lipstadt (2000), Richard Evans atuou como:', ['Réu', 'Juiz', 'Perito', 'Advogado de Irving'], 2, 'Examinou as citações de Irving fonte por fonte.'),
    mc('A Comissão Nacional da Verdade entregou o relatório final em:', ['1988', '2011', '2014', '2019'], 2, 'Dezembro de 2014; criada pela Lei 12.528/2011.'),
    mc('Distinguir interpretação de negacionismo depende principalmente:', ['Da opinião majoritária', 'Do exame das fontes e da honestidade com as evidências', 'Da nacionalidade do autor', 'Do tom do texto'], 1, 'Interpretação discute as fontes; distorção as omite ou adultera.'),
    disc('Carr ou Elton? Exponha as duas posições e defenda uma síntese, mostrando o que cada um acerta e com que limite.', ['Expõe Carr', 'Expõe Elton', 'Propõe síntese', 'Usa exemplo']),
  ],
  resumo: ['Carr: o historiador escolhe e interpreta; diálogo presente–passado.', 'Elton: disciplina do arquivo.', 'Pós-modernismo e respostas (Ginzburg, Evans).', 'Caso Irving (2000): falsificação provada pelas fontes.', 'Critérios: correspondência, coerência, abrangência, transparência.'],
  referencias: [
    { texto: 'Edward Hallett Carr, Que é história? (1961).' },
    { texto: 'Geoffrey Elton, The Practice of History (1967).' },
    { texto: 'Richard Evans, Em defesa da história (1997).' },
    { texto: 'Carlo Ginzburg, Relações de força: história, retórica, prova (2000).' },
    { texto: 'Lei nº 12.528, de 18 de novembro de 2011 (Comissão Nacional da Verdade).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos indicados'],
  revisao: [['Carr', 'Diálogo sem fim entre presente e passado.'], ['Caso Irving', '2000: distorção provada; Evans como perito.'], ['Critérios de verdade', 'Correspondência, coerência, abrangência, transparência.']],
  avancado: {
    texto: `<h3>Verdade, testemunho e confiança</h3>
<p>Paul Ricoeur, em <em>A memória, a história, o esquecimento</em> (2000), descreveu a operação historiográfica em três fases — documental, explicativa e representativa — e defendeu que a história responde à memória com o rigor da prova, sem anulá-la ${tag('interpretacao')}. A epistemologia do testemunho, na filosofia analítica, discute quando é racional crer no que outros relatam — questão central para a história, que depende de testemunhos ${tag('interpretacao')}.</p>
<h3>Lei e memória</h3>
<p>Alguns países criminalizaram a negação de certos genocídios; historiadores debatem se leis sobre a memória protegem a verdade ou limitam a pesquisa ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Paul Ricoeur, A memória, a história, o esquecimento (2000).' }, { texto: 'Pierre Vidal-Naquet, Os assassinos da memória (1987).' }],
    exercicios: [
      mc('A memória, a história, o esquecimento (2000) é de:', ['Ricoeur', 'Nora', 'Carr', 'Evans'], 0, 'Paul Ricoeur.'),
      mc('As três fases da operação historiográfica em Ricoeur são:', ['Coleta, venda, publicação', 'Documental, explicativa, representativa', 'Tese, antítese, síntese', 'Fato, mito, lenda'], 1, 'Arquivo, explicação e escrita.'),
      mc('Os assassinos da memória (1987), contra o negacionismo, é de:', ['Vidal-Naquet', 'Irving', 'White', 'Elton'], 0, 'Pierre Vidal-Naquet.'),
      disc('Leis que proíbem negar genocídios protegem a verdade histórica ou limitam a pesquisa? Exponha os argumentos dos dois lados e conclua.', ['Argumentos a favor', 'Argumentos contra', 'Distingue pesquisa e propaganda', 'Conclusão fundamentada'])],
  },
}),

aula({
  id: 'h3-4', titulo: 'As interpretações do Brasil: Freyre, Buarque de Holanda, Caio Prado e Faoro', duracao: '150 min',
  aprendera: ['Expor as teses centrais de quatro intérpretes do Brasil', 'Identificar as fontes e o método de cada um', 'Conhecer as principais críticas a cada interpretação', 'Comparar as interpretações sem reduzi-las a slogans'],
  prereq: ['Aulas anteriores do módulo', 'História I: crítica das fontes'],
  explicacao: `
<h3>O problema</h3>
<p>Entre 1933 e 1958, quatro livros propuseram explicar o que é o Brasil e por que é como é. Eles formaram o vocabulário com que até hoje se discute o país: miscigenação, homem cordial, sentido da colonização, patrimonialismo. Estudá-los exige ler cada um em seus próprios termos e depois confrontá-los com as fontes e entre si.</p>

<h3>Gilberto Freyre: Casa-grande & senzala (1933)</h3>
<p>Freyre estudou a formação da família patriarcal no Nordeste açucareiro e o papel da casa-grande como centro econômico, social e religioso ${tag('fato')}. Usou fontes então pouco exploradas (diários, cartas, anúncios de jornal, receitas, relatos de viajantes) e a antropologia cultural de Franz Boas, distinguindo raça e cultura ${tag('fato')}. Sustentou que a colonização portuguesa produziu intensa miscigenação biológica e cultural ${tag('interpretacao')}. Crítica central: ao destacar a intimidade entre senhores e escravizados, teria suavizado a violência da escravidão e alimentado a ideia de uma "democracia racial" ${tag('debate')}.</p>

<h3>Sérgio Buarque de Holanda: Raízes do Brasil (1936)</h3>
<p>Buarque usou tipos ideais, à maneira de Weber: o aventureiro e o trabalhador, o ladrilhador espanhol e o semeador português ${tag('interpretacao')}. Chamou de "homem cordial" — expressão tomada de Ribeiro Couto — o brasileiro que leva para a vida pública as relações pessoais e afetivas da família, em prejuízo de regras impessoais ${tag('fato')}. "Cordial" vem de coração e não significa apenas gentil: inclui a inimizade ${tag('interpretacao')}. Crítica: o tipo ideal pode virar estereótipo nacional se lido como descrição de todos os brasileiros ${tag('debate')}.</p>

<h3>Caio Prado Júnior: Formação do Brasil contemporâneo (1942)</h3>
<p>Para Caio Prado, a colonização teve um "sentido": fornecer produtos tropicais e metais ao mercado europeu, com grande propriedade, monocultura e trabalho escravo ${tag('interpretacao')}. Sua obra apoia-se em ampla documentação econômica e geográfica ${tag('fato')}. Crítica: historiadores posteriores mostraram a importância do mercado interno, da produção de alimentos e da acumulação dentro da colônia, que a ênfase na exportação deixava em segundo plano ${tag('debate')}.</p>

<h3>Raymundo Faoro: Os donos do poder (1958)</h3>
<p>Faoro, jurista, interpretou a história política luso-brasileira pelo conceito weberiano de patrimonialismo: um "estamento burocrático" que confunde o público e o privado e governa o país desde a formação do Estado português ${tag('interpretacao')}. Crítica: a tese da continuidade de séculos subestima rupturas e a diversidade das elites e dos grupos sociais ${tag('debate')}.</p>

<h3>Um contraponto: a crítica à democracia racial</h3>
<p>Florestan Fernandes, em <em>A integração do negro na sociedade de classes</em> (1964), estudou com pesquisa sociológica a situação da população negra em São Paulo depois da Abolição e criticou a ideia de democracia racial como mito ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Casa-grande', 'Residência senhorial e centro da vida no engenho (Freyre).'],
    ['Homem cordial', 'Tipo que leva o afeto e o pessoal à esfera pública (Buarque, a partir de Ribeiro Couto).'],
    ['Tipo ideal', 'Construção conceitual que acentua traços para comparar casos (Weber).'],
    ['Sentido da colonização', 'Orientação da colônia para o mercado externo (Caio Prado).'],
    ['Patrimonialismo', 'Confusão entre o público e o privado no exercício do poder (Weber, Faoro).'],
    ['Democracia racial', 'Ideia de convivência harmoniosa entre grupos raciais, criticada como mito.'],
  ],
  exemplos: `<p><strong>Uma mesma fonte, quatro leituras:</strong> um inventário de engenho do século XVIII lista terras, escravizados, gado, objetos religiosos e dívidas. Freyre olharia a vida doméstica e a religião da casa; Caio Prado, a produção e o destino do açúcar; Buarque, as relações pessoais entre credores e devedores; Faoro, a relação do senhor com a Coroa. Confrontar as leituras com o mesmo documento é o melhor modo de compará-las.</p>`,
  contexto: `<p><strong>No mundo:</strong> são obras da geração que, entre as guerras mundiais, buscou explicar a identidade e o atraso das nações periféricas com as ciências sociais nascentes. <strong>No Brasil:</strong> a Revolução de 1930 e o Estado Novo formam o pano de fundo das três primeiras; Faoro escreve no período democrático de 1946–1964 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar as interpretações pelas fontes, não por simpatia', tag: 'argumento',
    premissas: ['Cada interpretação do Brasil seleciona fontes e aspectos diferentes.', 'Uma interpretação é melhor que outra, sobre um ponto, quando explica mais evidências desse ponto.', 'Simpatia política ou estilo literário não aumentam o número de evidências explicadas.'],
    conclusao: 'Logo, as interpretações devem ser comparadas ponto a ponto, pelas evidências que explicam — e cada uma pode ser forte em um ponto e fraca em outro.',
    nota: 'Isso evita a leitura em bloco: aceitar ou rejeitar um autor inteiro por sua imagem pública.',
  },
  objecoes: [
    { objecao: 'São livros antigos e superados; basta ler os historiadores atuais.', tag: 'debate',
      resposta: 'São superados em pontos específicos, mas formaram os conceitos que os atuais discutem. Sem eles, não se entende o debate; e muitas de suas perguntas continuam abertas.' },
    { objecao: 'Freyre era racista / Freyre provou que não há racismo no Brasil.', tag: 'debate',
      resposta: 'As duas frases simplificam. Freyre rompeu com o racismo científico ao distinguir raça e cultura, e ao mesmo tempo sua obra foi usada para negar a discriminação. Ler o texto e as críticas permite um juízo mais exato.' },
  ],
  aplicacao: `<p>Escolha um problema brasileiro atual (por exemplo, a relação entre favores pessoais e regras na administração pública) e escreva uma página mostrando o que diriam Buarque e Faoro, e que evidência atual apoiaria ou contestaria cada leitura.</p>`,
  fonte: {
    obra: 'Freyre, Casa-grande & senzala, prefácio à 1ª ed.; Buarque de Holanda, Raízes do Brasil, cap. 5 ("O homem cordial"); Caio Prado, Formação, "Sentido da colonização"; Faoro, Os donos do poder, conclusão', link: null,
    orientacao: `<p>Leia os quatro trechos. Para cada um, registre: tese, conceito central, tipo de fonte usada e uma crítica estudada. Depois, aplique os quatro ao mesmo documento (o inventário do exemplo ou outro).</p>`,
  },
  perguntas: [
    { p: 'De quem Buarque tomou a expressão "homem cordial"?', r: 'De Ribeiro Couto.' },
    { p: 'Qual a principal crítica a Casa-grande & senzala?', r: 'Ter suavizado a violência da escravidão e favorecido a ideia de democracia racial.' },
    { p: 'O que é o estamento burocrático em Faoro?', r: 'Grupo que controla o Estado e confunde o público e o privado, numa continuidade desde Portugal.' },
  ],
  exercicios: [
    mc('Casa-grande & senzala foi publicado em:', ['1922', '1933', '1942', '1958'], 1, '1933.'),
    mc('O "homem cordial" é conceito de:', ['Freyre', 'Sérgio Buarque de Holanda', 'Caio Prado Júnior', 'Faoro'], 1, 'Raízes do Brasil (1936), cap. 5.'),
    mc('Em Raízes do Brasil, "cordial":', ['Significa apenas gentil', 'Vem de coração e inclui afeto e inimizade', 'Designa a cortesia diplomática', 'É elogio ao brasileiro'], 1, 'Pessoal e afetivo, em oposição ao impessoal.'),
    mc('O conceito de patrimonialismo que Faoro aplica ao Brasil vem de:', ['Marx', 'Weber', 'Comte', 'Durkheim'], 1, 'Max Weber.'),
    mc('A crítica à "democracia racial" como mito, com pesquisa sociológica sobre a população negra em São Paulo, é de:', ['Florestan Fernandes', 'Oliveira Vianna', 'Gilberto Freyre', 'Capistrano de Abreu'], 0, 'A integração do negro na sociedade de classes (1964).'),
    disc('Compare duas das quatro interpretações do Brasil: tese, conceito central, fontes, uma crítica a cada uma e o ponto em que uma explica melhor as evidências que a outra.', ['Expõe as duas teses com precisão', 'Indica conceitos e fontes', 'Apresenta crítica a cada uma', 'Compara pelas evidências', 'Conclusão fundamentada']),
  ],
  resumo: ['Freyre (1933): casa-grande, miscigenação; crítica: democracia racial.', 'Buarque (1936): homem cordial, tipos ideais.', 'Caio Prado (1942): sentido da colonização; crítica: mercado interno.', 'Faoro (1958): patrimonialismo, estamento burocrático; crítica: continuidade excessiva.', 'Florestan (1964): crítica do mito da democracia racial.'],
  referencias: [
    { texto: 'Gilberto Freyre, Casa-grande & senzala (1933).' },
    { texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936).' },
    { texto: 'Caio Prado Júnior, Formação do Brasil contemporâneo (1942).' },
    { texto: 'Raymundo Faoro, Os donos do poder (1958).' },
    { texto: 'Florestan Fernandes, A integração do negro na sociedade de classes (1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os quatro trechos indicados'],
  revisao: [['Freyre', 'Casa-grande & senzala (1933).'], ['Buarque', 'Homem cordial (1936).'], ['Faoro', 'Patrimonialismo e estamento burocrático (1958).']],
  avancado: {
    texto: `<h3>Outras interpretações</h3>
<p>Oliveira Vianna (<em>Populações meridionais do Brasil</em>, 1920) defendeu um Estado forte e centralizador diante do "espírito de clã" das elites rurais; parte de sua obra se apoiou em teorias raciais hoje rejeitadas ${tag('debate')}. Celso Furtado (<em>Formação econômica do Brasil</em>, 1959) analisou os ciclos econômicos e a formação do mercado interno com instrumentos de teoria econômica ${tag('interpretacao')}. Darcy Ribeiro (<em>O povo brasileiro</em>, 1995) propôs uma síntese antropológica da formação étnica ${tag('interpretacao')}.</p>
<h3>Revisões historiográficas</h3>
<p>A partir dos anos 1970–1990, pesquisas em arquivos regionais (inventários, registros paroquiais, cartórios) revisaram várias teses gerais, mostrando, por exemplo, a importância do mercado interno e da agricultura de alimentos, e a diversidade das formas de posse de escravizados ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Oliveira Vianna, Populações meridionais do Brasil (1920).' }, { texto: 'Celso Furtado, Formação econômica do Brasil (1959).' }, { texto: 'Darcy Ribeiro, O povo brasileiro (1995).' }],
    exercicios: [
      mc('Formação econômica do Brasil (1959) é de:', ['Celso Furtado', 'Caio Prado Júnior', 'Roberto Campos', 'Faoro'], 0, 'Celso Furtado.'),
      mc('Populações meridionais do Brasil (1920) é de:', ['Darcy Ribeiro', 'Oliveira Vianna', 'Gilberto Freyre', 'Florestan Fernandes'], 1, 'Oliveira Vianna.'),
      mc('As revisões a partir de arquivos regionais destacaram:', ['A ausência de mercado interno', 'A importância do mercado interno e da agricultura de alimentos', 'Que não houve escravidão no Sul', 'Que todo senhor tinha centenas de escravizados'], 1, 'Diversidade das estruturas econômicas.'),
      disc('Escolha uma tese geral sobre o Brasil colonial e mostre como pesquisas com fontes regionais (inventários, registros paroquiais) poderiam confirmá-la ou revisá-la.', ['Escolhe a tese', 'Indica fontes regionais', 'Explica como testariam a tese', 'Conclusão'])],
  },
}),

avaliacao('h3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas historiográficas, o debate sobre a verdade na história e as interpretações do Brasil, e duas discursivas de comparação crítica.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o quadro comparativo das quatro interpretações do Brasil.</li><li>Releia os critérios práticos de verdade histórica (aula 3).</li></ul>`,
[
  disc('Escolha uma escola historiográfica estudada e avalie-a separando método, teoria e filosofia da história. O que ela acrescentou à disciplina e onde está seu limite?', ['Identifica a escola com autores e obras', 'Separa método, teoria e filosofia da história', 'Aponta contribuição e limite', 'Conclusão fundamentada']),
  disc('Compare duas interpretações do Brasil pelos critérios de correspondência com as fontes, coerência e abrangência. Qual explica melhor um ponto específico que você escolher?', ['Expõe as duas interpretações', 'Aplica os critérios', 'Escolhe um ponto específico', 'Conclusão fundamentada', 'Evita leitura em bloco']),
]),
];
