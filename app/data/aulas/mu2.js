// Música II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Música).
// Da Grécia à polifonia medieval; do Renascimento ao século XX e a música no Brasil; Agostinho, Boécio, Palestrina e Bach; Mozart, Beethoven e Villa-Lobos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'mu2-1', titulo: 'Da Grécia ao canto gregoriano e à polifonia medieval', duracao: '150 min',
  aprendera: ['Conhecer a teoria musical grega', 'Situar o canto gregoriano', 'Explicar o nascimento da polifonia', 'Reconhecer a Ars nova'],
  prereq: ['Música I (módulo MU1)'],
  explicacao: `
<h3>O problema</h3>
<p>Como a música do Ocidente passou de uma única linha melódica a várias vozes simultâneas?</p>
<h3>Grécia</h3>
<p>A tradição pitagórica ligou os intervalos a razões numéricas ${tag('fato')}. Platão e Aristóteles atribuíram aos modos musicais efeitos sobre o caráter (doutrina do ethos) ${tag('fato')}. Pouquíssimas melodias gregas sobreviveram; o Epitáfio de Seikilos é uma delas ${tag('fato')}.</p>
<h3>Canto gregoriano</h3>
<p>O canto gregoriano é o canto litúrgico monódico em latim da Igreja romana ${tag('fato')}. A tradição o atribui ao papa Gregório Magno (590–604), mas os historiadores situam sua forma conhecida na síntese romano-franca dos séculos VIII e IX ${tag('fato')}. Organiza-se nos oito modos eclesiásticos ${tag('fato')}.</p>
<h3>Polifonia</h3>
<p>O organum acrescentou uma segunda voz ao canto ${tag('fato')}. Na escola de Notre-Dame de Paris, por volta de 1200, Léonin e Pérotin compuseram organa a duas, três e quatro vozes ${tag('fato')}.</p>
<h3>Ars nova</h3>
<p>No século XIV, a Ars nova (Philippe de Vitry) refinou a notação rítmica ${tag('fato')}. Guillaume de Machaut compôs a Missa de Notre-Dame, uma das primeiras missas polifônicas completas de um único autor ${tag('fato')}.</p>`,
  vocabulario: [
    ['Monodia', 'Música de uma só linha melódica.'],
    ['Modos eclesiásticos', 'Oito escalas modais do canto gregoriano.'],
    ['Organum', 'Primeira forma de polifonia, acrescentando voz ao canto.'],
    ['Polifonia', 'Várias linhas melódicas simultâneas e independentes.'],
    ['Ethos', 'Doutrina grega dos efeitos morais da música.'],
  ],
  exemplos: `<p><strong>Pérotin, Viderunt omnes:</strong> sobre notas longas do canto gregoriano do Natal, três vozes superiores tecem ritmos repetidos. A obra mostra como a polifonia nasceu como ornamento solene do canto litúrgico, não como ruptura com ele.</p>`,
  contexto: `<p><strong>No mundo:</strong> os monges de Solesmes, desde o século XIX, restauraram o canto gregoriano a partir de manuscritos antigos ${tag('fato')}. <strong>No Brasil:</strong> mosteiros beneditinos, como o de São Bento em São Paulo, mantêm a tradição do canto gregoriano ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a polifonia nasceu da liturgia', tag: 'interpretacao',
    premissas: ['A liturgia exigia solenidade crescente nas grandes festas.', 'Acrescentar vozes ao canto era um modo de ornar a celebração.', 'Os primeiros grandes repertórios polifônicos são litúrgicos.'],
    conclusao: 'Logo, a polifonia ocidental tem raiz litúrgica.',
    nota: 'Houve também polifonia profana, mas o desenvolvimento inicial documentado é sobretudo eclesiástico.',
  },
  objecoes: [
    { objecao: 'A música medieval é primitiva comparada à moderna.', tag: 'debate',
      resposta: 'A música medieval tem outra linguagem: modos, ritmos e funções diferentes. Peças como as de Pérotin e Machaut são de grande complexidade. Julgar com critérios de outra época é anacronismo.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com seis marcos (dos pitagóricos à Ars nova), ouvindo um exemplo de cada: Epitáfio de Seikilos, um canto gregoriano, um organum de Pérotin e o Kyrie da Missa de Machaut.</p>`,
  fonte: {
    obra: 'Boécio, A instituição musical, livro I, caps. 1–2', link: null,
    orientacao: `<p>Observe como Boécio justifica a influência da música sobre os costumes.</p>`,
  },
  perguntas: [
    { p: 'O que é o canto gregoriano?', r: 'O canto litúrgico monódico em latim da Igreja romana.' },
    { p: 'Quem foram Léonin e Pérotin?', r: 'Compositores de organa da escola de Notre-Dame, por volta de 1200.' },
    { p: 'O que foi a Ars nova?', r: 'Movimento do século XIV que refinou a notação rítmica.' },
  ],
  exercicios: [
    mc('O canto gregoriano é:', ['Monódico', 'Polifônico a quatro vozes', 'Instrumental', 'Tonal'], 0, 'Uma linha.'),
    mc('A escola de Notre-Dame floresceu por volta de:', ['800', '1200', '1600', '1750'], 1, 'Pérotin.'),
    mc('A Missa de Notre-Dame é de:', ['Machaut', 'Palestrina', 'Bach', 'Pérotin'], 0, 'Século XIV.'),
    mc('A doutrina do ethos trata:', ['Dos efeitos morais da música', 'Da notação', 'Dos instrumentos', 'Da acústica'], 0, 'Grécia.'),
    mc('O canto gregoriano organiza-se em:', ['Oito modos', 'Doze tons', 'Duas escalas', 'Séries'], 0, 'Modos eclesiásticos.'),
    disc('Monte a linha do tempo com seis marcos e comente as audições.', ['Marcos', 'Datas', 'Audições', 'Características']),
  ],
  resumo: ['Pitágoras e o ethos.', 'Canto gregoriano: monodia, oito modos.', 'Organum.', 'Notre-Dame: Léonin e Pérotin.', 'Ars nova e Machaut.'],
  referencias: [
    { texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' },
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Platão, A República, livro III.', livro: 'platao-republica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Gregoriano', 'Monodia.'], ['Pérotin', 'c. 1200.'], ['Machaut', 'Missa.']],
  avancado: {
    texto: `<h3>Os modos eclesiásticos</h3>
<p>Os oito modos dividem-se em autênticos (dórico, frígio, lídio, mixolídio) e plagais, conforme a extensão em relação à nota final ${tag('fato')}. No piano, o dórico corresponde às teclas brancas de ré a ré; o frígio, de mi a mi ${tag('fato')}. Cada modo tem sonoridade própria, explorada também na música popular ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre a teoria medieval.' }],
    exercicios: [
      mc('O dórico, nas teclas brancas, vai de:', ['Ré a ré', 'Dó a dó', 'Mi a mi', 'Lá a lá'], 0, 'Modos.'),
      mc('Os modos se dividem em:', ['Autênticos e plagais', 'Maiores e menores', 'Puros e mistos', 'Altos e baixos'], 0, 'Classificação.'),
      mc('O frígio vai de:', ['Mi a mi', 'Fá a fá', 'Sol a sol', 'Si a si'], 0, 'Teclas brancas.'),
      disc('Toque ou cante a escala dórica e compare com a menor natural.', ['Escala', 'Diferença', 'Sonoridade', 'Exemplo'])],
  },
}),

aula({
  id: 'mu2-2', titulo: 'Do Renascimento ao século XX, e a música no Brasil', duracao: '150 min',
  aprendera: ['Situar o Renascimento e o Barroco', 'Situar o Classicismo e o Romantismo', 'Conhecer rupturas do século XX', 'Conhecer marcos da música no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a música ocidental mudou do século XV ao XX, e onde entra a música feita no Brasil?</p>
<h3>Renascimento e Barroco</h3>
<p>No Renascimento, a polifonia vocal atingiu equilíbrio e clareza (Josquin, Palestrina, Victoria, Lasso) ${tag('fato')}. No Barroco (c. 1600–1750) surgiram a ópera (L'Orfeo de Monteverdi, 1607), o baixo contínuo e a tonalidade; seus grandes nomes incluem Bach, Händel e Vivaldi ${tag('fato')}.</p>
<h3>Classicismo e Romantismo</h3>
<p>O Classicismo (Haydn, Mozart, Beethoven) consolidou a sinfonia, o quarteto e a forma sonata ${tag('fato')}. O Romantismo (Schubert, Chopin, Verdi, Wagner, Brahms) valorizou a expressão individual e o nacionalismo musical ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>Debussy explorou novas sonoridades; A sagração da primavera de Stravinsky (1913) causou escândalo; Schoenberg criou o dodecafonismo nos anos 1920 ${tag('fato')}. Gravação e rádio transformaram a difusão da música ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Em Minas Gerais floresceu no século XVIII uma música sacra de compositores como Lobo de Mesquita ${tag('fato')}. O padre José Maurício Nunes Garcia (1767–1830) foi mestre de capela no Rio de Janeiro ${tag('fato')}. Carlos Gomes estreou O Guarani no Teatro alla Scala de Milão em 1870 ${tag('fato')}. Villa-Lobos (1887–1959) participou da Semana de Arte Moderna de 1922 ${tag('fato')}. Chiquinha Gonzaga, Pixinguinha e a bossa nova marcam a música popular ${tag('fato')}.</p>`,
  vocabulario: [
    ['Baixo contínuo', 'Linha de baixo com harmonia improvisada, típica do Barroco.'],
    ['Tonalidade', 'Sistema de hierarquia em torno de uma tônica.'],
    ['Sinfonia', 'Obra orquestral em vários movimentos.'],
    ['Dodecafonismo', 'Técnica de Schoenberg com as doze notas em série.'],
    ['Mestre de capela', 'Responsável pela música de uma igreja ou corte.'],
  ],
  exemplos: `<p><strong>Duas missas:</strong> a Missa Papae Marcelli de Palestrina (publicada em 1567) busca clareza do texto na polifonia. O Réquiem de José Maurício (1816) mostra a música sacra brasileira dialogando com o estilo clássico europeu. A comparação mostra continuidade e adaptação.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Semana de Arte Moderna de 1922 integrou o modernismo internacional ${tag('fato')}. <strong>No Brasil:</strong> o acervo de música colonial mineira vem sendo recuperado e gravado desde meados do século XX, com papel pioneiro de Francisco Curt Lange ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conhecer a música brasileira de concerto', tag: 'argumento',
    premissas: ['O Brasil produziu música sacra e de concerto de qualidade desde o período colonial.', 'Esse repertório é pouco conhecido mesmo entre brasileiros.', 'Conhecer a própria tradição é condição para preservá-la e continuá-la.'],
    conclusao: 'Logo, o estudo da música brasileira de concerto é dever cultural.',
    nota: 'O argumento não diminui a música popular, também estudada no percurso.',
  },
  objecoes: [
    { objecao: 'A música colonial brasileira é só cópia da europeia.', tag: 'debate',
      resposta: 'Ela usa a linguagem europeia do seu tempo, como toda música do Ocidente usava. Mas foi composta aqui, por músicos em grande parte mestiços, para as necessidades locais, com traços próprios. Dependência de linguagem não é cópia.' },
  ],
  aplicacao: `<p>Complete a linha do tempo com oito marcos do Renascimento ao século XX, incluindo três marcos brasileiros, ouvindo um exemplo de cada.</p>`,
  fonte: {
    obra: 'Mário de Andrade, Ensaio sobre a música brasileira (1928), primeira parte', link: null,
    orientacao: `<p>Observe a proposta de uma música nacional a partir das fontes populares.</p>`,
  },
  perguntas: [
    { p: 'Qual a primeira grande ópera conhecida?', r: 'L\'Orfeo de Monteverdi (1607).' },
    { p: 'Quem estreou O Guarani em Milão?', r: 'Carlos Gomes, em 1870.' },
    { p: 'O que criou Schoenberg?', r: 'O dodecafonismo.' },
  ],
  exercicios: [
    mc('O Barroco vai aproximadamente de:', ['1400 a 1600', '1600 a 1750', '1750 a 1820', '1820 a 1900'], 1, 'Períodos.'),
    mc('A sagração da primavera é de:', ['1607', '1870', '1913', '1922'], 2, 'Stravinsky.'),
    mc('O padre José Maurício foi:', ['Mestre de capela no Rio', 'Compositor de bossa nova', 'Maestro em Viena', 'Organista em Lisboa'], 0, 'Brasil.'),
    mc('Villa-Lobos participou da Semana de:', ['1922', '1930', '1889', '1958'], 0, 'Modernismo.'),
    mc('A Missa Papae Marcelli é de:', ['Palestrina', 'Bach', 'Mozart', 'Machaut'], 0, 'Renascimento.'),
    disc('Complete a linha do tempo com oito marcos e três brasileiros.', ['Marcos', 'Brasil', 'Audições', 'Características']),
  ],
  resumo: ['Renascimento: polifonia equilibrada.', 'Barroco: ópera e contínuo.', 'Classicismo e Romantismo.', 'Século XX: rupturas.', 'Brasil: Minas, José Maurício, Carlos Gomes, Villa-Lobos.'],
  referencias: [
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' },
    { texto: 'Vasco Mariz, História da música no Brasil (1981).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1607', 'L\'Orfeo.'], ['1870', 'O Guarani.'], ['1922', 'Semana.']],
  avancado: {
    texto: `<h3>Trento e a música sacra</h3>
<p>O Concílio de Trento (1545–1563) pediu que a música sacra fosse digna e que o texto fosse inteligível, afastando elementos profanos ${tag('fato')}. Uma lenda difundida diz que a Missa Papae Marcelli de Palestrina "salvou" a polifonia da proibição; os historiadores tratam o relato como exagero sem base documental direta ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre a Contrarreforma.' }],
    exercicios: [
      mc('Trento pediu que o texto fosse:', ['Inteligível', 'Oculto', 'Em vernáculo', 'Improvisado'], 0, 'Clareza.'),
      mc('A história de que Palestrina "salvou" a polifonia é:', ['Lenda exagerada', 'Fato documentado', 'Decreto do Concílio', 'Invenção do século XXI'], 0, 'Historiografia.'),
      mc('O Concílio de Trento foi de:', ['1545–1563', '1869–1870', '1962–1965', '1215'], 0, 'Datas.'),
      disc('Distinga, sobre Palestrina e Trento, o que é fato documentado e o que é lenda.', ['Fato', 'Lenda', 'Fontes', 'Conclusão'])],
  },
}),

aula({
  id: 'mu2-3', titulo: 'Agostinho, Boécio, Palestrina e Bach', duracao: '150 min',
  aprendera: ['Expor a teoria musical de Agostinho e Boécio', 'Reconhecer o estilo de Palestrina', 'Conhecer as obras centrais de Bach', 'Relacionar música e fé nesses autores'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dois teóricos antigos e dois compositores marcaram a música sacra do Ocidente. O que cada um ensina?</p>
<h3>Agostinho e Boécio</h3>
<p>Agostinho, em A música, trata do ritmo e eleva-se dos números sensíveis aos eternos ${tag('fato')}. Nas Confissões (X, 33), confessa o receio de se deixar levar mais pelo canto que pelas palavras, mas reconhece a utilidade do canto na igreja ${tag('fato')}. Boécio transmitiu a teoria grega e a tríplice divisão da música ${tag('fato')}.</p>
<h3>Palestrina</h3>
<p>Giovanni Pierluigi da Palestrina (c. 1525–1594) tornou-se modelo da polifonia sacra: vozes equilibradas, dissonâncias controladas, texto claro ${tag('fato')}. Seu estilo foi codificado no tratado Gradus ad Parnassum de Johann Joseph Fux (1725), usado no ensino de contraponto ${tag('fato')}.</p>
<h3>Bach</h3>
<p>Johann Sebastian Bach (1685–1750) foi cantor de São Tomás em Leipzig ${tag('fato')}. Compôs cantatas, a Paixão segundo São Mateus (1727), a Missa em si menor e O cravo bem temperado ${tag('fato')}. Assinava muitas partituras com "S. D. G." (Soli Deo Gloria) ${tag('fato')}. Luterano, sua música é amada também por católicos e por não crentes ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Contraponto', 'Arte de combinar linhas melódicas independentes.'],
    ['Cantata', 'Obra vocal com coro, solistas e instrumentos, frequentemente litúrgica.'],
    ['Paixão', 'Obra que musica o relato da Paixão de Cristo.'],
    ['Fuga', 'Forma contrapontística baseada na imitação de um tema.'],
    ['Soli Deo Gloria', '"Só a Deus a glória", fórmula usada por Bach.'],
  ],
  exemplos: `<p><strong>Uma fuga de Bach:</strong> no Cravo bem temperado, cada fuga apresenta um tema numa voz; outra voz o imita em outra altura, enquanto a primeira continua com um contratema. A escuta atenta acompanha o tema entrando em cada voz.</p>`,
  contexto: `<p><strong>No mundo:</strong> a redescoberta de Bach no século XIX tem marco na execução da Paixão segundo São Mateus regida por Mendelssohn em 1829 ${tag('fato')}. <strong>No Brasil:</strong> Villa-Lobos homenageou Bach nas Bachianas brasileiras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a música sacra pede ordem e clareza', tag: 'argumento',
    premissas: ['A música litúrgica serve à oração e ao texto sagrado.', 'Ordem e clareza permitem que o texto seja compreendido e a alma se eleve.', 'Palestrina e Bach exemplificam essa ordem.'],
    conclusao: 'Logo, a ordem e a clareza são virtudes da música sacra.',
    nota: 'Agostinho já pedia que o canto servisse às palavras, não as encobrisse.',
  },
  objecoes: [
    { objecao: 'A música de Bach é luterana e não serve a católicos.', tag: 'debate',
      resposta: 'Bach escreveu para a liturgia luterana, mas compôs também a Missa em si menor sobre o texto latino da missa, e sua música expressa verdades cristãs comuns. Seu valor artístico e espiritual é reconhecido amplamente; o uso litúrgico católico segue as normas próprias.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura do livro VI de A música, de Agostinho, ou audição comentada do coro inicial da Paixão segundo São Mateus de Bach.</p>`,
  fonte: {
    obra: 'Santo Agostinho, Confissões, livro X, cap. 33 (os prazeres do ouvido)', link: null,
    orientacao: `<p>Observe a tensão entre o deleite do canto e a primazia das palavras, e como Agostinho a resolve.</p>`,
  },
  perguntas: [
    { p: 'Que receio Agostinho confessa em X, 33?', r: 'De se deixar levar mais pelo canto que pelas palavras.' },
    { p: 'Que tratado codificou o estilo de Palestrina?', r: 'O Gradus ad Parnassum de Fux (1725).' },
    { p: 'O que significa S. D. G.?', r: 'Soli Deo Gloria, só a Deus a glória.' },
  ],
  exercicios: [
    mc('Bach foi cantor de São Tomás em:', ['Leipzig', 'Viena', 'Roma', 'Paris'], 0, 'Biografia.'),
    mc('A Paixão segundo São Mateus é de:', ['1727', '1607', '1829', '1750'], 0, 'Bach.'),
    mc('Palestrina viveu no século:', ['XIV', 'XVI', 'XVIII', 'XIX'], 1, 'c. 1525–1594.'),
    mc('Gradus ad Parnassum é de:', ['Fux', 'Bach', 'Boécio', 'Rameau'], 0, '1725.'),
    mc('A redescoberta de Bach tem marco em 1829 com:', ['Mendelssohn', 'Mozart', 'Beethoven', 'Wagner'], 0, 'Paixão.'),
    disc('Faça a ficha de leitura ou a audição comentada.', ['Conteúdo', 'Estrutura', 'Interpretação', 'Avaliação']),
  ],
  resumo: ['Agostinho: números e palavras.', 'Boécio: tradição grega.', 'Palestrina: equilíbrio e clareza.', 'Fux (1725).', 'Bach: cantatas, Paixões, fugas, S. D. G.'],
  referencias: [
    { texto: 'Santo Agostinho, Confissões.', livro: 'agostinho-confissoes' },
    { texto: 'Santo Agostinho, A música.', livro: 'agostinho-musica' },
    { texto: 'Johann Joseph Fux, Gradus ad Parnassum (1725).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha ou audição', 'Ler a fonte indicada'],
  revisao: [['X, 33', 'Canto e palavras.'], ['Fux', 'Contraponto.'], ['S. D. G.', 'Bach.']],
  avancado: {
    texto: `<h3>O cravo bem temperado</h3>
<p>O cravo bem temperado tem dois livros (o primeiro de 1722), cada um com 24 prelúdios e fugas em todas as tonalidades maiores e menores ${tag('fato')}. A obra mostrava que um sistema de afinação temperado permitia tocar em todas as tonalidades ${tag('fato')}. Discute-se se Bach visava o temperamento igual ou outro temperamento "bom" ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre Bach.' }],
    exercicios: [
      mc('Cada livro do Cravo bem temperado tem:', ['24 prelúdios e fugas', '12 sonatas', '6 suítes', '48 cantatas'], 0, 'Estrutura.'),
      mc('O primeiro livro é de:', ['1722', '1750', '1607', '1829'], 0, 'Data.'),
      mc('O tipo exato de temperamento visado por Bach é:', ['Debatido', 'Certamente o igual', 'Pitagórico puro', 'Irrelevante'], 0, 'Debate.'),
      disc('Ouça um prelúdio e fuga e descreva as entradas do tema na fuga.', ['Prelúdio', 'Tema', 'Entradas', 'Comentário'])],
  },
}),

aula({
  id: 'mu2-4', titulo: 'Mozart, Beethoven e Villa-Lobos', duracao: '150 min',
  aprendera: ['Conhecer obras centrais de Mozart', 'Explicar a transformação trazida por Beethoven', 'Conhecer a obra de Villa-Lobos', 'Relacionar música nacional e universal'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Três compositores de épocas e lugares diferentes. O que cada um trouxe à música, e o que o terceiro significa para o Brasil?</p>
<h3>Mozart</h3>
<p>Wolfgang Amadeus Mozart (1756–1791) compôs em todos os gêneros de seu tempo: sinfonias, concertos, óperas (As bodas de Fígaro, Don Giovanni, A flauta mágica), música sacra ${tag('fato')}. Morreu deixando incompleto o Réquiem, terminado por seu aluno Süssmayr ${tag('fato')}.</p>
<h3>Beethoven</h3>
<p>Ludwig van Beethoven (1770–1827) ampliou a sinfonia e a sonata e deu à música instrumental força dramática nova ${tag('fato')}. Perdeu progressivamente a audição; o Testamento de Heiligenstadt (1802) registra seu desespero e decisão de continuar ${tag('fato')}. A Nona Sinfonia (1824) introduziu coro e solistas no último movimento, com a Ode à alegria de Schiller ${tag('fato')}. Compôs a Missa solemnis ${tag('fato')}.</p>
<h3>Villa-Lobos</h3>
<p>Heitor Villa-Lobos (1887–1959) uniu elementos da música popular e indígena brasileira à linguagem de concerto ${tag('fato')}. Escreveu os Choros e as nove Bachianas brasileiras ${tag('fato')}. Dirigiu programas de canto orfeônico nas escolas nos anos 1930 e 1940 ${tag('fato')}.</p>
<h3>Nacional e universal</h3>
<p>Villa-Lobos mostra que é possível ser profundamente nacional e falar a ouvintes de todo o mundo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Concerto', 'Obra para solista e orquestra.'],
    ['Ópera', 'Drama cantado com orquestra.'],
    ['Réquiem', 'Missa pelos defuntos.'],
    ['Choros', 'Série de obras de Villa-Lobos inspiradas no choro e em outras fontes brasileiras.'],
    ['Canto orfeônico', 'Canto coral escolar organizado por Villa-Lobos.'],
  ],
  exemplos: `<p><strong>Bachianas brasileiras nº 2, "O trenzinho do caipira":</strong> a orquestra imita uma locomotiva do interior, com ritmos de máquina e uma melodia cantável. Villa-Lobos funde técnica europeia e imaginário brasileiro numa página que o público reconhece de imediato.</p>`,
  contexto: `<p><strong>No mundo:</strong> o tema da Ode à alegria da Nona de Beethoven foi adotado como hino da União Europeia ${tag('fato')}. <strong>No Brasil:</strong> o Museu Villa-Lobos, no Rio de Janeiro, guarda o acervo do compositor ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a dor de Beethoven importa para entender sua música', tag: 'interpretacao',
    premissas: ['Beethoven compôs suas maiores obras já surdo ou quase surdo.', 'O Testamento de Heiligenstadt mostra a escolha de viver pela arte apesar da dor.', 'Muitas de suas obras passam da luta à vitória ou à serenidade.'],
    conclusao: 'Logo, a biografia ilumina, sem esgotar, o sentido de sua música.',
    nota: 'Explicar toda obra pela biografia é erro; ignorar a biografia também empobrece.',
  },
  objecoes: [
    { objecao: 'Villa-Lobos é menor que os europeus, por ser de um país periférico.', tag: 'debate',
      resposta: 'O valor de uma obra não depende do país de origem. Villa-Lobos é executado e gravado internacionalmente, e sua obra tem originalidade reconhecida. Comparações de "tamanho" entre compositores são sempre discutíveis.' },
  ],
  aplicacao: `<p>Faça audições comentadas de três obras: um movimento de sinfonia de Mozart, o primeiro movimento da Quinta Sinfonia de Beethoven e uma das Bachianas brasileiras, comparando-as.</p>`,
  fonte: {
    obra: 'Ludwig van Beethoven, Testamento de Heiligenstadt (1802)', link: null,
    orientacao: `<p>Observe a descrição da surdez, a tentação do desespero e as razões para continuar.</p>`,
  },
  perguntas: [
    { p: 'Quem completou o Réquiem de Mozart?', r: 'Seu aluno Süssmayr.' },
    { p: 'Que novidade traz a Nona de Beethoven?', r: 'Coro e solistas no último movimento, com a Ode à alegria.' },
    { p: 'O que são as Bachianas brasileiras?', r: 'Nove obras de Villa-Lobos que unem Bach e a música brasileira.' },
  ],
  exercicios: [
    mc('A Nona Sinfonia é de:', ['1802', '1824', '1791', '1870'], 1, 'Beethoven.'),
    mc('O Testamento de Heiligenstadt é de:', ['1802', '1827', '1770', '1824'], 0, 'Surdez.'),
    mc('A flauta mágica é de:', ['Mozart', 'Beethoven', 'Bach', 'Villa-Lobos'], 0, 'Ópera.'),
    mc('As Bachianas brasileiras são:', ['Nove', 'Doze', 'Cinco', 'Vinte'], 0, 'Villa-Lobos.'),
    mc('"O trenzinho do caipira" está na Bachiana nº:', ['2', '5', '9', '1'], 0, 'Tocata.'),
    disc('Faça as três audições comentadas e compare-as.', ['Mozart', 'Beethoven', 'Villa-Lobos', 'Comparação']),
  ],
  resumo: ['Mozart: todos os gêneros; Réquiem.', 'Beethoven: força dramática, surdez, Nona.', 'Heiligenstadt (1802).', 'Villa-Lobos: Choros, Bachianas.', 'Nacional e universal.'],
  referencias: [
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Vasco Mariz, Heitor Villa-Lobos, compositor brasileiro (1949).' },
    { texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as audições comentadas', 'Ler a fonte indicada'],
  revisao: [['1824', 'Nona.'], ['Süssmayr', 'Réquiem.'], ['Bachianas', 'Villa-Lobos.']],
  avancado: {
    texto: `<h3>O motivo da Quinta</h3>
<p>A Quinta Sinfonia de Beethoven (1808) começa com um motivo de quatro notas (três curtas e uma longa) que reaparece transformado ao longo dos movimentos ${tag('fato')}. A obra vai do dó menor inicial ao dó maior triunfal do final ${tag('fato')}. É exemplo de unidade construída a partir de material mínimo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre Beethoven.' }],
    exercicios: [
      mc('O motivo da Quinta tem:', ['Três notas curtas e uma longa', 'Duas longas', 'Doze notas', 'Uma nota'], 0, 'Ritmo.'),
      mc('A Quinta vai de dó menor a:', ['Dó maior', 'Sol maior', 'Lá menor', 'Fá maior'], 0, 'Triunfo.'),
      mc('A Quinta é de:', ['1808', '1824', '1791', '1802'], 0, 'Data.'),
      disc('Acompanhe o motivo da Quinta nos quatro movimentos e descreva suas transformações.', ['Motivo', 'Movimentos', 'Transformações', 'Unidade'])],
  },
}),

avaliacao('mu2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da música e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Ouça de novo uma obra de cada autor estudado.</li></ul>`,
[
  disc('Trace a história da música ocidental em oito marcos, do canto gregoriano ao século XX, incluindo dois marcos brasileiros, com uma obra de cada.', ['Marcos', 'Obras', 'Brasil', 'Características']),
  disc('Compare a concepção da música sacra em Agostinho, Palestrina e Bach, e explique o que Villa-Lobos acrescentou à tradição a partir do Brasil.', ['Agostinho', 'Palestrina e Bach', 'Villa-Lobos', 'Síntese']),
]),
];
