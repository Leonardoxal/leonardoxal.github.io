// Literatura I — o que é literatura, gêneros e versos, figuras e narrativa, métodos de leitura (etapas 1 a 3 do percurso de Literatura).
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lt1-1', titulo: 'O que é literatura: mimese, ficção e verdade', duracao: '150 min',
  aprendera: ['Explicar a mimese em Aristóteles', 'Explicar por que a poesia é "mais filosófica que a história"', 'Conhecer a fórmula horaciana de deleitar e instruir', 'Relacionar ficção, verdade e formação'],
  prereq: ['Degrau 0: método de estudo', 'Estética (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Romances contam coisas que não aconteceram. Por que, então, tantos dizem que aprenderam mais sobre a vida com Machado de Assis ou Dostoiévski do que com muitos livros de fatos?</p>
<h3>Mimese</h3>
<p>Na Poética, Aristóteles define a poesia — no sentido amplo de criação literária — como imitação (mimese) de ações humanas ${tag('fato')}. Imitar é natural ao homem, e aprendemos e nos alegramos com imitações ${tag('fato')}.</p>
<h3>Mais filosófica que a história</h3>
<p>Aristóteles afirma que a poesia é mais filosófica e mais séria que a história, porque a história diz o que aconteceu e a poesia o que poderia acontecer segundo o verossímil ou o necessário; a poesia fala mais do universal (Poética, cap. 9) ${tag('fato')}.</p>
<h3>Deleitar e instruir</h3>
<p>Horácio, na Arte poética, escreveu que os poetas querem ser úteis ou deleitar, ou ambas as coisas ${tag('fato')}. Essa dupla finalidade orientou a reflexão literária por séculos ${tag('interpretacao')}.</p>
<h3>Ficção e verdade</h3>
<p>A ficção não afirma que os fatos narrados aconteceram, e por isso não mente; pode, porém, revelar verdades sobre o coração humano, o bem e o mal ${tag('argumento')}. João Paulo II, na Carta aos artistas (1999), afirma que a arte pode exprimir algo da verdade do homem e abrir-se ao mistério ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Literatura', 'Arte da palavra que cria obras de valor estético e humano.'],
    ['Mimese', 'Imitação de ações humanas pela arte (Aristóteles).'],
    ['Verossímil', 'O que é crível e coerente no mundo da obra.'],
    ['Ficção', 'Narrativa de eventos inventados, sem pretensão de fato.'],
    ['Prodesse et delectare', 'Ser útil e deleitar (Horácio).'],
  ],
  exemplos: `<p><strong>Brás Cubas e a vaidade:</strong> nenhum Brás Cubas existiu, e no entanto as Memórias póstumas (1881) mostram com precisão a vaidade, o egoísmo e o tédio de uma vida sem propósito. O leitor reconhece nelas tipos e tentações reais. É isso que Aristóteles chama de falar do universal.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Poética foi redescoberta e comentada intensamente no Renascimento ${tag('fato')}. <strong>No Brasil:</strong> Machado de Assis foi o primeiro presidente da Academia Brasileira de Letras, fundada em 1897 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ficção pode ensinar a verdade', tag: 'argumento',
    premissas: ['A ficção apresenta ações e caracteres possíveis, coerentes com a natureza humana.', 'Ao acompanhá-los, o leitor vê causas e consequências das escolhas humanas.', 'Esse conhecimento é universal, não preso a um fato particular.'],
    conclusao: 'Logo, a boa ficção pode ensinar verdades sobre o homem sem afirmar fatos.',
    nota: 'Por isso Jesus ensinou por parábolas, que são narrativas fictícias com sentido verdadeiro.',
  },
  objecoes: [
    { objecao: 'Ler ficção é perda de tempo; melhor ler só fatos e ciência.', tag: 'debate',
      resposta: 'A ciência e a história dão conhecimentos indispensáveis, mas a literatura forma a imaginação moral, a empatia e a compreensão de situações humanas complexas. Muitos santos e pensadores foram grandes leitores de ficção. A questão é o que se lê e como, não ler ou não ler.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique, com dois exemplos de obras que você conhece, a frase de Aristóteles de que a poesia é mais filosófica que a história.</p>`,
  fonte: {
    obra: 'Aristóteles, Poética, caps. 4 e 9; Horácio, Arte poética', link: null,
    orientacao: `<p>No cap. 4, a origem natural da imitação. No cap. 9, a comparação entre poesia e história.</p>`,
  },
  perguntas: [
    { p: 'O que é mimese para Aristóteles?', r: 'A imitação de ações humanas pela arte.' },
    { p: 'Por que a poesia é mais filosófica que a história?', r: 'Porque fala do que poderia acontecer, do universal, e não só do que aconteceu.' },
    { p: 'Qual a dupla finalidade da poesia segundo Horácio?', r: 'Ser útil e deleitar.' },
  ],
  exercicios: [
    mc('"A poesia é mais filosófica que a história" está na Poética, cap.:', ['1', '4', '9', '25'], 2, 'Universal.'),
    mc('A Arte poética é de:', ['Aristóteles', 'Horácio', 'Virgílio', 'Cícero'], 1, 'Roma.'),
    mc('Memórias póstumas de Brás Cubas é de:', ['1857', '1881', '1899', '1922'], 1, 'Machado.'),
    mc('A ficção mente?', ['Sim, sempre', 'Não, pois não afirma que os fatos ocorreram', 'Só em romances', 'Só em poesia'], 1, 'Argumento.'),
    mc('A Academia Brasileira de Letras foi fundada em:', ['1822', '1889', '1897', '1922'], 2, 'Machado.'),
    disc('Explique com dois exemplos a frase de Aristóteles sobre poesia e história.', ['Explicação', 'Exemplo 1', 'Exemplo 2', 'Fidelidade ao texto']),
  ],
  resumo: ['Mimese de ações humanas.', 'Poesia mais filosófica que a história (Poética 9).', 'Horácio: útil e deleitoso.', 'Ficção não mente; revela o universal.', 'Carta aos artistas (1999).'],
  referencias: [
    { texto: 'Aristóteles, Poética.', livro: 'aristoteles-poetica' },
    { texto: 'Horácio, Arte poética.' },
    { texto: 'João Paulo II, Carta aos artistas (1999).', livro: 'jp2-artistas' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação com exemplos', 'Ler as fontes indicadas'],
  revisao: [['Mimese', 'Imitação.'], ['Poética 9', 'Universal.'], ['Horácio', 'Útil e doce.']],
  avancado: {
    texto: `<h3>A catarse</h3>
<p>Aristóteles define a tragédia como imitação de uma ação séria e completa que, suscitando compaixão e temor, realiza a catarse dessas emoções (Poética, cap. 6) ${tag('fato')}. O sentido exato de catarse — purificação, purgação ou clarificação — é discutido pelos intérpretes ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Poética, cap. 6.', livro: 'aristoteles-poetica' }],
    exercicios: [
      mc('A tragédia suscita, segundo Aristóteles:', ['Riso e alegria', 'Compaixão e temor', 'Raiva e ódio', 'Tédio'], 1, 'Cap. 6.'),
      mc('O sentido exato de catarse é:', ['Consenso', 'Discutido', 'Irrelevante', 'Desconhecido totalmente'], 1, 'Debate.'),
      mc('A definição da tragédia está na Poética, cap.:', ['1', '6', '9', '14'], 1, 'Definição.'),
      disc('Explique a catarse com uma tragédia ou filme que você conhece.', ['Obra', 'Compaixão e temor', 'Catarse', 'Interpretação'])],
  },
}),

aula({
  id: 'lt1-2', titulo: 'Gêneros literários e versificação', duracao: '150 min',
  aprendera: ['Distinguir os gêneros épico, lírico e dramático', 'Contar sílabas poéticas', 'Reconhecer redondilha e decassílabo', 'Identificar rima e a forma do soneto'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que um poema "soa" bem? E por que uma epopeia, um soneto e uma peça de teatro nos afetam de modos tão diferentes?</p>
<h3>Gêneros</h3>
<p>A tradição distingue o gênero épico (narra feitos, como Os Lusíadas), o lírico (exprime a interioridade, como um soneto de amor) e o dramático (apresenta ações por personagens em cena, como uma tragédia) ${tag('fato')}. Hoje se fala também em romance, conto e crônica como gêneros narrativos ${tag('fato')}.</p>
<h3>Sílabas poéticas</h3>
<p>Na métrica em português, contam-se as sílabas até a última sílaba tônica do verso, juntando vogais que se encontram entre palavras ${tag('fato')}. "A-mor-é-fo-go-que ar-de-sem-se-ver" tem dez sílabas poéticas: é um decassílabo ${tag('fato')}.</p>
<h3>Redondilha e decassílabo</h3>
<p>A redondilha maior tem sete sílabas e é comum na poesia popular: "Mi-nha-ter-ra-tem-pal-mei(ras)" (Gonçalves Dias) ${tag('fato')}. O decassílabo é o verso clássico de Camões e do soneto ${tag('fato')}.</p>
<h3>Rima e soneto</h3>
<p>Rima é a semelhança de sons no fim dos versos ${tag('fato')}. O soneto tem catorze versos, em dois quartetos e dois tercetos, tradicionalmente decassílabos ${tag('fato')}. Camões, Bocage, Olavo Bilac e Vinicius de Moraes escreveram sonetos célebres ${tag('fato')}.</p>`,
  vocabulario: [
    ['Gênero épico', 'Narração de grandes feitos.'],
    ['Gênero lírico', 'Expressão da interioridade do eu poético.'],
    ['Gênero dramático', 'Ação apresentada por personagens em cena.'],
    ['Escansão', 'Divisão do verso em sílabas poéticas.'],
    ['Soneto', 'Poema de 14 versos em dois quartetos e dois tercetos.'],
  ],
  exemplos: `<p><strong>Escandindo Camões:</strong> "A-mor / é / fo- / go / que ar- / de / sem / se / ver" — 1 a-, 2 -mor, 3 é, 4 fo-, 5 -go, 6 que ar- (as vogais se juntam), 7 -de, 8 sem, 9 se, 10 ver. Para-se na última tônica. Dez sílabas: decassílabo heroico, com tônicas na 6ª e na 10ª.</p>`,
  contexto: `<p><strong>No mundo:</strong> o soneto nasceu na Itália do século XIII e foi consagrado por Petrarca ${tag('fato')}. <strong>No Brasil:</strong> a "Canção do exílio", de Gonçalves Dias (1843), em redondilha maior, é um dos poemas mais conhecidos do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a forma não é enfeite', tag: 'argumento',
    premissas: ['O ritmo, a rima e a estrutura afetam o modo como o sentido é percebido e lembrado.', 'Uma forma fixa, como o soneto, obriga a concisão e a construção de um desfecho.', 'Por isso a forma participa do sentido do poema.'],
    conclusao: 'Logo, analisar um poema exige considerar sua forma, e não só seu "conteúdo".',
    nota: 'É também por isso que poemas com ritmo e rima se memorizam com mais facilidade.',
  },
  objecoes: [
    { objecao: 'Poesia moderna em verso livre prova que a métrica é inútil.', tag: 'debate',
      resposta: 'O verso livre abandona a métrica regular, mas não o ritmo, que continua a ser trabalhado. Muitos modernos, como Drummond e Bandeira, dominavam a métrica tradicional e a usaram quando quiseram. Conhecer a métrica ajuda a perceber o que o verso livre faz.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (primeira parte): escanda três poemas (um soneto, uma redondilha e um verso livre), indicando o número de sílabas, as rimas e a forma.</p>`,
  fonte: {
    obra: 'Luís de Camões, sonetos (por exemplo, "Amor é fogo que arde sem se ver"); Gonçalves Dias, "Canção do exílio" (1843)', link: null,
    orientacao: `<p>Escanda os primeiros versos de cada poema e compare os ritmos.</p>`,
  },
  perguntas: [
    { p: 'Até onde se contam as sílabas poéticas?', r: 'Até a última sílaba tônica do verso.' },
    { p: 'Quantas sílabas tem a redondilha maior?', r: 'Sete.' },
    { p: 'Como é formado o soneto?', r: 'Por catorze versos: dois quartetos e dois tercetos.' },
  ],
  exercicios: [
    mc('Os Lusíadas pertencem ao gênero:', ['Lírico', 'Épico', 'Dramático', 'Crônica'], 1, 'Feitos.'),
    mc('"Amor é fogo que arde sem se ver" tem:', ['7 sílabas', '8 sílabas', '10 sílabas', '12 sílabas'], 2, 'Decassílabo.'),
    mc('A redondilha maior tem:', ['5 sílabas', '7 sílabas', '10 sílabas', '12 sílabas'], 1, 'Popular.'),
    mc('O soneto tem:', ['10 versos', '12 versos', '14 versos', '16 versos'], 2, 'Forma fixa.'),
    mc('A "Canção do exílio" é de:', ['Camões', 'Gonçalves Dias', 'Bilac', 'Drummond'], 1, '1843.'),
    disc('Escanda três poemas indicando sílabas, rimas e forma.', ['Escansão', 'Rimas', 'Forma', 'Comparação']),
  ],
  resumo: ['Épico, lírico, dramático.', 'Sílabas até a última tônica.', 'Redondilha (7) e decassílabo (10).', 'Rima; soneto (14 versos).', 'Forma participa do sentido.'],
  referencias: [
    { texto: 'Luís de Camões, Rimas.' },
    { texto: 'Gonçalves Dias, Primeiros cantos (1846).' },
    { texto: 'Aristóteles, Poética.', livro: 'aristoteles-poetica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a escansão', 'Ler as fontes indicadas'],
  revisao: [['Última tônica', 'Contagem.'], ['7 e 10', 'Redondilha e decassílabo.'], ['14 versos', 'Soneto.']],
  avancado: {
    texto: `<h3>O alexandrino e o parnasianismo</h3>
<p>O verso alexandrino tem doze sílabas, geralmente com cesura (pausa) na sexta ${tag('fato')}. Foi muito usado pelos parnasianos brasileiros, como Olavo Bilac, que valorizavam a perfeição formal ${tag('fato')}. Os modernistas de 1922 reagiram contra esse formalismo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Olavo Bilac, Poesias (1888).' }],
    exercicios: [
      mc('O alexandrino tem:', ['10 sílabas', '12 sílabas', '7 sílabas', '14 sílabas'], 1, 'Verso.'),
      mc('Os parnasianos valorizavam:', ['O verso livre', 'A perfeição formal', 'A oralidade', 'O improviso'], 1, 'Bilac.'),
      mc('Reagiram contra o parnasianismo os:', ['Árcades', 'Modernistas', 'Barrocos', 'Românticos'], 1, '1922.'),
      disc('Escanda um verso alexandrino de Bilac e indique a cesura.', ['Verso', 'Escansão', 'Cesura', 'Efeito'])],
  },
}),

aula({
  id: 'lt1-3', titulo: 'Figuras de linguagem e elementos da narrativa', duracao: '150 min',
  aprendera: ['Reconhecer as principais figuras de linguagem', 'Distinguir tipos de narrador', 'Analisar tempo, espaço, enredo e personagem', 'Reconhecer o narrador não confiável'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"Capitu tinha olhos de ressaca." Por que essa imagem fica na memória? E por que, em Dom Casmurro, não temos certeza do que aconteceu?</p>
<h3>Figuras de linguagem</h3>
<p>Metáfora transfere o sentido de uma coisa a outra por semelhança ("olhos de ressaca"); comparação faz o mesmo com conectivo ("como"); metonímia substitui por relação de contiguidade ("ler Machado" por ler suas obras); hipérbole exagera; antítese opõe ideias; ironia diz o contrário do que significa ${tag('fato')}.</p>
<h3>O narrador</h3>
<p>O narrador em primeira pessoa participa da história; o de terceira pessoa a conta de fora, podendo ser onisciente (conhece pensamentos de todos) ou limitado ${tag('fato')}. O narrador não é o autor ${tag('fato')}.</p>
<h3>Elementos</h3>
<p>Enredo é a sequência organizada dos acontecimentos; personagens podem ser planas ou redondas; tempo pode ser cronológico ou psicológico; espaço é o ambiente da ação ${tag('fato')}.</p>
<h3>Narrador não confiável</h3>
<p>Em Dom Casmurro (1899), Bentinho narra em primeira pessoa e acusa Capitu de traição; como só temos sua versão, ciumenta e interessada, o leitor não pode ter certeza dos fatos ${tag('interpretacao')}. Helen Caldwell, em The Brazilian Othello of Machado de Assis (1960), foi uma das primeiras a defender que a culpa de Capitu não está provada ${tag('fato')}. O debate continua ${tag('debate')}.</p>`,
  vocabulario: [
    ['Metáfora', 'Transferência de sentido por semelhança, sem conectivo.'],
    ['Metonímia', 'Substituição por relação de contiguidade.'],
    ['Narrador onisciente', 'Narrador que conhece pensamentos e fatos de todos.'],
    ['Personagem redonda', 'Personagem complexa, que surpreende e muda.'],
    ['Narrador não confiável', 'Narrador cuja versão o leitor tem razões para duvidar.'],
  ],
  exemplos: `<p><strong>Lendo como detetive:</strong> em Dom Casmurro, Bentinho afirma a semelhança entre seu filho e Escobar como prova da traição. Mas ele mesmo admite memória falha, ciúme desde a juventude e vontade de convencer o leitor. Anotar quem diz o quê, e com que interesse, é parte da leitura atenta.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "narrador não confiável" foi proposta por Wayne Booth em A retórica da ficção (1961) ${tag('fato')}. <strong>No Brasil:</strong> Dom Casmurro é leitura frequente em vestibulares e no ensino médio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que distinguir narrador e autor', tag: 'argumento',
    premissas: ['O autor cria o narrador como cria os personagens.', 'O narrador pode ter opiniões, limites e interesses que o autor não partilha.', 'Confundi-los leva a atribuir ao autor o que é do personagem.'],
    conclusao: 'Logo, a leitura correta distingue o narrador do autor.',
    nota: 'Machado de Assis explorou essa distância com ironia em Brás Cubas e em Dom Casmurro.',
  },
  objecoes: [
    { objecao: 'Interpretar um romance é questão de opinião; não há leitura errada.', tag: 'debate',
      resposta: 'Há várias leituras legítimas de uma grande obra, mas elas precisam apoiar-se no texto. Uma leitura que ignora passagens explícitas ou inventa fatos é errada. A pluralidade de interpretações tem limites dados pelo próprio texto.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (segunda parte): em dois contos, identifique cinco figuras de linguagem e o tipo de narrador, justificando com citações.</p>`,
  fonte: {
    obra: 'Machado de Assis, Dom Casmurro (1899), capítulos XXXII ("Olhos de ressaca") e CXXXV a CXLVIII', link: null,
    orientacao: `<p>Observe as metáforas sobre os olhos de Capitu e as afirmações de Bentinho sobre sua memória e seu ciúme.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre metáfora e comparação?', r: 'A comparação usa conectivo como "como"; a metáfora não.' },
    { p: 'O que é narrador não confiável?', r: 'Um narrador cuja versão o leitor tem razões para duvidar.' },
    { p: 'Quem narra Dom Casmurro?', r: 'Bentinho, em primeira pessoa.' },
  ],
  exercicios: [
    mc('"Olhos de ressaca" é:', ['Comparação', 'Metáfora', 'Hipérbole', 'Ironia'], 1, 'Sem conectivo.'),
    mc('"Ler Machado" por ler suas obras é:', ['Metonímia', 'Metáfora', 'Antítese', 'Ironia'], 0, 'Contiguidade.'),
    mc('Narrador que conhece pensamentos de todos é:', ['Personagem', 'Onisciente', 'Testemunha', 'Não confiável'], 1, 'Terceira pessoa.'),
    mc('A retórica da ficção, de Booth, é de:', ['1899', '1946', '1961', '1981'], 2, 'Narrador.'),
    mc('Helen Caldwell defendeu que a culpa de Capitu:', ['Está provada', 'Não está provada', 'É irrelevante', 'Foi confessada'], 1, '1960.'),
    disc('Identifique cinco figuras de linguagem e o narrador de dois contos, com citações.', ['Figuras', 'Narrador', 'Citações', 'Justificativa']),
  ],
  resumo: ['Metáfora, comparação, metonímia, hipérbole, antítese, ironia.', 'Narrador em 1ª e 3ª pessoa; onisciente.', 'Enredo, personagem, tempo, espaço.', 'Narrador ≠ autor.', 'Dom Casmurro e o narrador não confiável.'],
  referencias: [
    { texto: 'Machado de Assis, Dom Casmurro (1899).' },
    { texto: 'Wayne Booth, A retórica da ficção (1961).' },
    { texto: 'Helen Caldwell, The Brazilian Othello of Machado de Assis (1960).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos contos', 'Ler a fonte indicada'],
  revisao: [['Metáfora', 'Sem como.'], ['Onisciente', 'Sabe tudo.'], ['Bentinho', 'Não confiável.']],
  avancado: {
    texto: `<h3>Tempo da história e tempo do discurso</h3>
<p>Distingue-se a ordem em que os fatos acontecem (história) da ordem em que são contados (discurso) ${tag('fato')}. Dom Casmurro é narrado por um Bentinho velho, que reconstrói a juventude; o recuo (analepse) e a seleção de episódios moldam a impressão do leitor ${tag('interpretacao')}. Gérard Genette sistematizou essas categorias em Discurso da narrativa (1972) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Gérard Genette, Discurso da narrativa (1972).' }],
    exercicios: [
      mc('Contar fatos passados no meio da narrativa é:', ['Analepse', 'Prolepse', 'Metáfora', 'Rima'], 0, 'Recuo.'),
      mc('Discurso da narrativa é de:', ['Genette', 'Booth', 'Auerbach', 'Candido'], 0, '1972.'),
      mc('A ordem em que os fatos são contados é o:', ['Discurso', 'Enredo cronológico', 'Espaço', 'Autor'], 0, 'Narratologia.'),
      disc('Descreva a ordem dos fatos e a ordem da narração num conto que você leu.', ['Fatos', 'Narração', 'Diferenças', 'Efeito'])],
  },
}),

aula({
  id: 'lt1-4', titulo: 'Como ler e analisar: leitura atenta, contexto e edições', duracao: '150 min',
  aprendera: ['Praticar a leitura atenta com anotação', 'Aplicar um roteiro de análise de poema', 'Aplicar um roteiro de análise de narrativa', 'Escolher boas edições e usar o contexto'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Muitos "leem" resumos e comentários, e nunca as obras. Como ler uma obra literária de verdade?</p>
<h3>Leitura atenta</h3>
<p>A leitura atenta lê devagar, relê, sublinha palavras e passagens marcantes, anota perguntas nas margens e volta ao texto para verificar interpretações ${tag('interpretacao')}. Ler em voz alta poemas e trechos de prosa revela ritmo e sentido ${tag('interpretacao')}.</p>
<h3>Roteiro para poema</h3>
<p>1) Ler em voz alta; 2) parafrasear o sentido literal; 3) analisar a forma (verso, rima, estrofe); 4) identificar imagens e figuras; 5) perceber o movimento do poema (como começa e termina); 6) interpretar o sentido, citando versos ${tag('interpretacao')}.</p>
<h3>Roteiro para narrativa</h3>
<p>1) Resumir o enredo; 2) caracterizar narrador e personagens; 3) observar tempo e espaço; 4) identificar conflitos e temas; 5) analisar passagens-chave; 6) interpretar, com citações ${tag('interpretacao')}.</p>
<h3>Contexto e edições</h3>
<p>Conhecer a época, a biografia e as convenções do gênero ilumina a obra, mas não a substitui ${tag('interpretacao')}. Edições críticas estabelecem o texto mais fiel ao autor, com notas; traduções de qualidade indicam o tradutor e seguem o original ${tag('fato')}.</p>`,
  vocabulario: [
    ['Leitura atenta', 'Leitura lenta, anotada e relida.'],
    ['Paráfrase', 'Reformulação do sentido literal com outras palavras.'],
    ['Passagem-chave', 'Trecho decisivo para a interpretação da obra.'],
    ['Edição crítica', 'Edição que estabelece o texto mais fiel, com notas.'],
    ['Fortuna crítica', 'Conjunto de estudos já publicados sobre uma obra.'],
  ],
  exemplos: `<p><strong>Anotando um soneto:</strong> ao lado de cada estrofe, o leitor escreve em uma linha o que ela diz; sublinha antíteses ("fogo"/"não se ver"); marca a virada no primeiro terceto; anota a pergunta que fica ("como pode o amor causar contrários?"). Depois, escreve um parágrafo interpretativo citando versos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a "leitura atenta" (close reading) foi difundida pela Nova Crítica americana no século XX ${tag('fato')}. <strong>No Brasil:</strong> a Biblioteca Nacional e projetos como o Domínio Público oferecem obras clássicas digitalizadas gratuitamente ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ler a obra e não só o resumo', tag: 'argumento',
    premissas: ['O valor literário está na linguagem, na forma e nos detalhes, que o resumo elimina.', 'A interpretação precisa apoiar-se em citações do texto.', 'Quem lê só resumos repete opiniões alheias.'],
    conclusao: 'Logo, a formação literária exige leitura integral e atenta das obras.',
    nota: 'Comentários ajudam depois da leitura, não no lugar dela.',
  },
  objecoes: [
    { objecao: 'Não há tempo para ler obras inteiras; resumos bastam.', tag: 'argumento',
      resposta: 'Ler poucas obras integralmente forma mais que ler muitos resumos. Um romance médio lido 20 minutos por dia termina em poucas semanas. A questão é prioridade e constância.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um poema e um conto com os roteiros da aula, anotando o texto e escrevendo uma interpretação de uma página para cada, com citações.</p>`,
  fonte: {
    obra: 'Biblioteca Nacional e portal Domínio Público — edições digitais de clássicos da literatura brasileira', link: { url: 'https://www.dominiopublico.gov.br', rotulo: 'Domínio Público' },
    orientacao: `<p>Escolha um conto de Machado de Assis e um poema de Gonçalves Dias ou Castro Alves, em edição digital confiável.</p>`,
  },
  perguntas: [
    { p: 'O que é leitura atenta?', r: 'Leitura lenta, anotada e relida.' },
    { p: 'Qual o primeiro passo do roteiro para poema?', r: 'Ler em voz alta.' },
    { p: 'O que é edição crítica?', r: 'Edição que estabelece o texto mais fiel ao autor, com notas.' },
  ],
  exercicios: [
    mc('Reformular o sentido literal com outras palavras é:', ['Paráfrase', 'Escansão', 'Metáfora', 'Edição'], 0, 'Roteiro.'),
    mc('A interpretação deve apoiar-se em:', ['Resumos', 'Citações do texto', 'Opiniões de amigos', 'Nada'], 1, 'Texto.'),
    mc('O conjunto de estudos sobre uma obra é a:', ['Fortuna crítica', 'Edição crítica', 'Paráfrase', 'Antologia'], 0, 'Crítica.'),
    mc('A leitura atenta foi difundida pela:', ['Nova Crítica', 'Escola de Frankfurt', 'Port-Royal', 'Escolástica'], 0, 'Século XX.'),
    mc('Ler em voz alta ajuda a perceber:', ['Ritmo e sentido', 'Só a ortografia', 'Nada', 'O preço do livro'], 0, 'Leitura.'),
    disc('Analise um poema e um conto com os roteiros, com interpretação e citações.', ['Poema', 'Conto', 'Citações', 'Interpretação']),
  ],
  resumo: ['Leitura atenta: lenta, anotada, relida.', 'Roteiro de poema.', 'Roteiro de narrativa.', 'Contexto ilumina, não substitui.', 'Edições críticas e traduções.'],
  referencias: [
    { texto: 'C. S. Lewis, Um experimento na crítica literária (1961).' },
    { texto: 'Antonio Candido, Na sala de aula (1985).' },
    { texto: 'Mortimer Adler e Charles Van Doren, Como ler um livro (1972).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as duas análises', 'Consultar a fonte indicada'],
  revisao: [['Atenta', 'Lenta e anotada.'], ['Citação', 'Base da interpretação.'], ['Edição crítica', 'Texto fiel.']],
  avancado: {
    texto: `<h3>Lewis e o leitor literário</h3>
<p>Em Um experimento na crítica literária (1961), C. S. Lewis propôs julgar os livros pelo modo como são lidos: o leitor literário relê, se deixa transformar e recebe a obra; o não literário a usa como passatempo ou para confirmar o que já pensa ${tag('fato')}. Ele defendia "receber" antes de "usar" a obra ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'C. S. Lewis, Um experimento na crítica literária (1961).' }],
    exercicios: [
      mc('Lewis distingue "receber" e:', ['"Usar" a obra', '"Comprar"', '"Esquecer"', '"Copiar"'], 0, 'Leitor.'),
      mc('O leitor literário costuma:', ['Nunca reler', 'Reler', 'Ler só resumos', 'Ler só capas'], 1, 'Lewis.'),
      mc('A obra é de:', ['1950', '1961', '1972', '1985'], 1, 'Lewis.'),
      disc('Descreva uma obra que você "recebeu" e outra que só "usou", segundo Lewis.', ['Obra recebida', 'Obra usada', 'Diferença', 'Lição'])],
  },
}),

avaliacao('lt1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o conceito de literatura, gêneros, versificação, figuras, narrativa e métodos de leitura, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça escansões.</li><li>Releia suas análises de poema e conto.</li></ul>`,
[
  disc('Analise um soneto com o roteiro da aula: escansão de dois versos, rimas, figuras de linguagem, movimento do poema e interpretação com citações.', ['Escansão e rimas', 'Figuras', 'Movimento', 'Interpretação']),
  disc('Explique, com uma obra narrativa que você leu integralmente, a frase de Aristóteles de que a poesia é mais filosófica que a história, analisando narrador e personagens.', ['Obra', 'Narrador e personagens', 'Universal', 'Citações']),
]),
];
