// Música IV — estudos avançados (etapa 8 do percurso de Música).
// Harmonia e contraponto; formas musicais; acústica e afinação; análise de uma obra.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'mu4-1', titulo: 'Harmonia e contraponto', duracao: '150 min',
  aprendera: ['Usar as funções tônica, subdominante e dominante', 'Reconhecer cadências', 'Aplicar regras básicas de condução de vozes', 'Conhecer as espécies do contraponto de Fux'],
  prereq: ['Música III (módulo MU3)'],
  explicacao: `
<h3>O problema</h3>
<p>Como as notas simultâneas se encadeiam bem? Harmonia olha para os acordes; contraponto, para as linhas. As duas perspectivas se completam.</p>
<h3>Funções</h3>
<p>Na tonalidade, o acorde do I grau é a tônica (repouso), o do IV a subdominante (afastamento) e o do V a dominante (tensão que pede resolução) ${tag('fato')}. O acorde de sétima da dominante (em dó: sol–si–ré–fá) reforça a tensão ${tag('fato')}.</p>
<h3>Cadências</h3>
<p>Perfeita (V–I): conclusão forte; plagal (IV–I): o "Amém" de muitos hinos; meia cadência (termina no V): suspensão; de engano (V–vi): surpresa ${tag('fato')}.</p>
<h3>Condução de vozes</h3>
<p>Na escrita a quatro vozes (soprano, contralto, tenor, baixo), evitam-se quintas e oitavas paralelas, prefere-se mover as vozes por graus conjuntos e resolve-se a sensível na tônica ${tag('fato')}.</p>
<h3>Contraponto</h3>
<p>Fux, no Gradus ad Parnassum (1725), ensinou o contraponto em cinco espécies: nota contra nota, duas notas contra uma, quatro contra uma, síncopas e contraponto florido ${tag('fato')}. Movimentos entre vozes: direto, contrário e oblíquo; o contrário favorece a independência ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tônica', 'Acorde de repouso, sobre o I grau.'],
    ['Dominante', 'Acorde de tensão, sobre o V grau.'],
    ['Cadência perfeita', 'Encadeamento V–I.'],
    ['Sensível', 'VII grau, meio tom abaixo da tônica.'],
    ['Movimento contrário', 'Duas vozes que se movem em direções opostas.'],
  ],
  exemplos: `<p><strong>"Amém" plagal:</strong> no fim de muitos hinos cantados na igreja, o "A-mém" vai do acorde de fá maior ao de dó maior (IV–I em dó). É uma cadência suave, sem a tensão da sensível, que soa como assentimento tranquilo.</p>`,
  contexto: `<p><strong>No mundo:</strong> os corais de Bach são usados há gerações para ensinar harmonia a quatro vozes ${tag('fato')}. <strong>No Brasil:</strong> o violão popular usa intensamente cadências e acordes de sétima, ensinados em cifras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que estudar regras que os grandes às vezes quebram', tag: 'argumento',
    premissas: ['As regras de condução resumem o que soa claro e equilibrado num estilo.', 'Os grandes compositores dominavam as regras antes de quebrá-las conscientemente.', 'Quebrar uma regra só tem efeito expressivo para quem a conhece.'],
    conclusao: 'Logo, as regras são escola de liberdade, não prisão.',
    nota: 'É a mesma lógica da gramática na escrita literária.',
  },
  objecoes: [
    { objecao: 'Harmonia tradicional não serve para a música popular.', tag: 'debate',
      resposta: 'A música popular usa funções, cadências e condução de vozes, muitas vezes com acordes enriquecidos. A harmonia tradicional é base comum; a popular acrescenta práticas próprias, como na bossa nova.' },
  ],
  aplicacao: `<p>Harmonize uma melodia simples de oito compassos em dó maior com I, IV e V, terminando com cadência perfeita, e escreva um contraponto de primeira espécie sobre um cantus firmus de oito notas.</p>`,
  fonte: {
    obra: 'Johann Joseph Fux, Gradus ad Parnassum (1725), primeira espécie', link: null,
    orientacao: `<p>Observe a forma de diálogo entre mestre e discípulo e as regras sobre consonâncias e movimentos.</p>`,
  },
  perguntas: [
    { p: 'Quais as três funções básicas?', r: 'Tônica, subdominante e dominante.' },
    { p: 'O que é cadência plagal?', r: 'O encadeamento IV–I.' },
    { p: 'Quais as cinco espécies de Fux?', r: 'Nota contra nota, duas contra uma, quatro contra uma, síncopas e florido.' },
  ],
  exercicios: [
    mc('V–I é cadência:', ['Perfeita', 'Plagal', 'De engano', 'Meia'], 0, 'Conclusiva.'),
    mc('V–vi é cadência:', ['De engano', 'Perfeita', 'Plagal', 'Meia'], 0, 'Surpresa.'),
    mc('A sétima da dominante em dó é:', ['Sol–si–ré–fá', 'Dó–mi–sol–si', 'Fá–lá–dó–mi', 'Ré–fá–lá–dó'], 0, 'V7.'),
    mc('Na condução de vozes evitam-se:', ['Quintas e oitavas paralelas', 'Terças paralelas', 'Movimento contrário', 'Graus conjuntos'], 0, 'Regra.'),
    mc('O movimento que favorece a independência é o:', ['Contrário', 'Paralelo', 'Nenhum', 'Uníssono'], 0, 'Contraponto.'),
    disc('Faça a harmonização e o contraponto de primeira espécie.', ['Funções', 'Cadência', 'Condução', 'Contraponto']),
  ],
  resumo: ['T, S, D.', 'Cadências: perfeita, plagal, meia, de engano.', 'V7.', 'Condução de vozes.', 'Fux: cinco espécies.'],
  referencias: [
    { texto: 'Arnold Schoenberg, Harmonia (1911).' },
    { texto: 'Johann Joseph Fux, Gradus ad Parnassum (1725).' },
    { texto: 'Jean-Philippe Rameau, Tratado de harmonia (1722).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a harmonização e o contraponto', 'Ler a fonte indicada'],
  revisao: [['V–I', 'Perfeita.'], ['IV–I', 'Plagal.'], ['Fux', 'Espécies.']],
  avancado: {
    texto: `<h3>A fuga</h3>
<p>Numa fuga, o sujeito (tema) é apresentado por uma voz; a segunda voz o responde na dominante (resposta), enquanto a primeira faz o contrassujeito ${tag('fato')}. Após a exposição, episódios alternam com novas entradas do sujeito em outras tonalidades; o stretto sobrepõe entradas próximas ${tag('fato')}. A Arte da fuga, de Bach, explora esses recursos ao máximo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Johann Joseph Fux, Gradus ad Parnassum (1725), parte sobre a fuga.' }],
    exercicios: [
      mc('A resposta da fuga aparece normalmente na:', ['Dominante', 'Subdominante', 'Relativa menor', 'Mesma altura'], 0, 'Exposição.'),
      mc('O stretto:', ['Sobrepõe entradas próximas', 'Encerra sem tema', 'É um instrumento', 'É uma pausa'], 0, 'Definição.'),
      mc('A Arte da fuga é de:', ['Bach', 'Mozart', 'Fux', 'Palestrina'], 0, 'Obra.'),
      disc('Identifique sujeito, resposta e contrassujeito numa fuga do Cravo bem temperado.', ['Sujeito', 'Resposta', 'Contrassujeito', 'Episódios'])],
  },
}),

aula({
  id: 'mu4-2', titulo: 'As formas musicais: da missa à sinfonia', duracao: '150 min',
  aprendera: ['Reconhecer formas vocais sacras', 'Reconhecer formas instrumentais', 'Conhecer a ópera e o lied', 'Relacionar forma e função'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Missa, moteto, suíte, concerto, sinfonia, ópera: que formas são essas, e por que surgiram?</p>
<h3>Formas vocais sacras</h3>
<p>A missa musica o ordinário (Kyrie, Gloria, Credo, Sanctus, Agnus Dei) ${tag('fato')}. O moteto é peça polifônica sobre texto sacro ${tag('fato')}. O oratório é obra dramática sacra não encenada, como o Messias de Händel (1742) ${tag('fato')}. A cantata une coro, solistas e instrumentos ${tag('fato')}.</p>
<h3>Formas instrumentais</h3>
<p>A suíte barroca reúne danças (allemande, courante, sarabande, gigue) ${tag('fato')}. O concerto opõe solista e orquestra, geralmente em três movimentos (rápido–lento–rápido) ${tag('fato')}. A sinfonia clássica tem em geral quatro movimentos, o primeiro em forma sonata ${tag('fato')}.</p>
<h3>Formas vocais profanas</h3>
<p>A ópera une música, drama e cena; o recitativo avança a ação e a ária expressa sentimentos ${tag('fato')}. O lied (canção artística alemã) une poesia e piano, com Schubert como mestre ${tag('fato')}.</p>
<h3>Forma e função</h3>
<p>Muitas formas nasceram de funções: a missa da liturgia, a suíte da dança, a ópera do teatro ${tag('interpretacao')}. Conhecer a função ajuda a ouvir a forma ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Moteto', 'Peça polifônica sobre texto sacro.'],
    ['Oratório', 'Obra dramática sacra não encenada.'],
    ['Suíte', 'Sequência de danças instrumentais.'],
    ['Recitativo', 'Canto próximo da fala, que avança a ação na ópera.'],
    ['Lied', 'Canção artística alemã para voz e piano.'],
  ],
  exemplos: `<p><strong>As quatro estações de Vivaldi:</strong> cada estação é um concerto para violino em três movimentos (rápido–lento–rápido). Os sonetos que acompanham a partitura descrevem as cenas, mas a forma do concerto permanece: o solista dialoga com a orquestra, que retorna com o ritornelo.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Messias de Händel é tradicionalmente executado no Advento e na Páscoa em muitos países ${tag('fato')}. <strong>No Brasil:</strong> O Guarani, de Carlos Gomes, é a ópera brasileira mais conhecida, e sua protofonia tornou-se popular como abertura do programa radiofônico A Voz do Brasil ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conhecer as formas enriquece a escuta', tag: 'argumento',
    premissas: ['Cada forma cria expectativas sobre o que vem depois.', 'O compositor joga com essas expectativas, cumprindo-as ou surpreendendo.', 'Só quem conhece as expectativas percebe o jogo.'],
    conclusao: 'Logo, conhecer as formas permite apreciar a inventividade de uma obra.',
    nota: 'O mesmo vale para gêneros literários.',
  },
  objecoes: [
    { objecao: 'Formas fixas limitam a criatividade.', tag: 'debate',
      resposta: 'As formas são moldes flexíveis, não fôrmas rígidas. Bach, Mozart e Beethoven criaram obras muito diferentes dentro das mesmas formas. A forma oferece estrutura ao ouvinte e desafio ao compositor.' },
  ],
  aplicacao: `<p>Ouça um exemplo de cada forma (missa, moteto, suíte, concerto, sinfonia, ária de ópera, lied) e monte um quadro com função, estrutura, época e exemplo.</p>`,
  fonte: {
    obra: 'Donald J. Grout e Claude V. Palisca, História da música ocidental, capítulos sobre o Barroco e o Classicismo', link: null,
    orientacao: `<p>Observe como as formas instrumentais nascem e se transformam.</p>`,
  },
  perguntas: [
    { p: 'Que partes musica a missa polifônica?', r: 'O ordinário: Kyrie, Gloria, Credo, Sanctus e Agnus Dei.' },
    { p: 'Quantos movimentos tem a sinfonia clássica?', r: 'Em geral quatro.' },
    { p: 'Qual a diferença entre recitativo e ária?', r: 'O recitativo avança a ação; a ária expressa sentimentos.' },
  ],
  exercicios: [
    mc('O Messias de Händel é:', ['Oratório', 'Ópera', 'Missa', 'Suíte'], 0, '1742.'),
    mc('A sarabande é uma:', ['Dança da suíte', 'Ária', 'Missa', 'Fuga'], 0, 'Barroco.'),
    mc('O concerto clássico tem em geral:', ['Três movimentos', 'Um movimento', 'Quatro movimentos', 'Doze movimentos'], 0, 'R–L–R.'),
    mc('O mestre do lied é:', ['Schubert', 'Vivaldi', 'Palestrina', 'Händel'], 0, 'Canção.'),
    mc('O Guarani é de:', ['Carlos Gomes', 'Villa-Lobos', 'José Maurício', 'Pixinguinha'], 0, 'Ópera.'),
    disc('Monte o quadro das sete formas com audições.', ['Funções', 'Estruturas', 'Épocas', 'Exemplos']),
  ],
  resumo: ['Missa, moteto, oratório, cantata.', 'Suíte e concerto.', 'Sinfonia.', 'Ópera e lied.', 'Forma e função.'],
  referencias: [
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Vasco Mariz, História da música no Brasil (1981).' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Missa', 'Ordinário.'], ['Sinfonia', 'Quatro movimentos.'], ['Lied', 'Schubert.']],
  avancado: {
    texto: `<h3>O ritornelo barroco</h3>
<p>No concerto barroco, o tutti apresenta um ritornelo que volta, inteiro ou em fragmentos, em várias tonalidades, alternando com episódios do solista ${tag('fato')}. Vivaldi fixou esse modelo, estudado e transcrito por Bach ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre o concerto.' }],
    exercicios: [
      mc('No concerto barroco, o ritornelo é tocado pelo:', ['Tutti', 'Solista sozinho', 'Coro', 'Órgão apenas'], 0, 'Orquestra.'),
      mc('O ritornelo volta em:', ['Várias tonalidades', 'Só na tônica', 'Nunca', 'Só no fim'], 0, 'Estrutura.'),
      mc('Quem transcreveu concertos de Vivaldi?', ['Bach', 'Mozart', 'Beethoven', 'Schubert'], 0, 'Estudo.'),
      disc('Mapeie as entradas do ritornelo no primeiro movimento de A primavera de Vivaldi.', ['Entradas', 'Episódios', 'Tonalidades', 'Minutagem'])],
  },
}),

aula({
  id: 'mu4-3', titulo: 'Acústica e afinação', duracao: '150 min',
  aprendera: ['Relacionar frequência, amplitude e timbre', 'Comparar afinação pitagórica, justa e temperada', 'Calcular a razão do semitom temperado', 'Conhecer a acústica dos instrumentos e das igrejas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que um piano não pode ter todas as quintas perfeitamente puras? E por que a mesma voz soa diferente numa sala e numa catedral?</p>
<h3>Som</h3>
<p>O som é onda de pressão ${tag('fato')}. A frequência (em hertz) determina a altura; a amplitude, a intensidade (medida em decibéis); a composição de harmônicos, o timbre ${tag('fato')}. Marin Mersenne, na Harmonie universelle (1636), formulou leis da corda vibrante ${tag('fato')}.</p>
<h3>Sistemas de afinação</h3>
<p>Pitagórica: construída por quintas puras (3:2), com terças maiores muito largas ${tag('fato')}. Justa: usa terças puras (5:4) e quintas puras, mas só funciona bem em poucas tonalidades ${tag('fato')}. Temperamento igual: divide a oitava em doze semitons iguais, de razão 2^(1/12) ≈ 1,0595, permitindo tocar em todas as tonalidades com pequenas impurezas ${tag('fato')}.</p>
<h3>Instrumentos</h3>
<p>Cordas, sopros e percussão produzem som de modos diferentes: corda vibrante, coluna de ar, membrana ou corpo sólido ${tag('fato')}.</p>
<h3>Acústica dos espaços</h3>
<p>Em espaços grandes, o som reflete nas paredes e demora a se extinguir (reverberação) ${tag('fato')}. O canto gregoriano e a polifonia renascentista soam bem em igrejas de grande reverberação, que favorecem linhas sustentadas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hertz', 'Unidade de frequência: vibrações por segundo.'],
    ['Decibel', 'Unidade logarítmica de intensidade sonora.'],
    ['Afinação justa', 'Sistema com intervalos de razões simples (3:2, 5:4).'],
    ['Temperamento igual', 'Divisão da oitava em doze semitons iguais.'],
    ['Reverberação', 'Persistência do som por reflexões num ambiente.'],
  ],
  exemplos: `<p><strong>A terça do piano:</strong> a terça maior pura vale 5:4 = 1,25. No temperamento igual, quatro semitons dão 2^(4/12) ≈ 1,2599. A diferença é pequena, mas um ouvido treinado, ou um coro a cappella, percebe que a terça do piano é um pouco larga.</p>`,
  contexto: `<p><strong>No mundo:</strong> a acústica de salas de concerto é projetada com cálculos de reverberação, a partir dos trabalhos de Wallace Sabine no início do século XX ${tag('fato')}. <strong>No Brasil:</strong> a Sala São Paulo, sede da Osesp, foi adaptada de um antigo saguão ferroviário e tem forro móvel para ajustar a acústica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que todo sistema de afinação é um compromisso', tag: 'argumento',
    premissas: ['Doze quintas puras ultrapassam sete oitavas (coma pitagórica).', 'Terças puras e quintas puras não fecham juntas um ciclo de doze notas.', 'Logo, nenhum teclado de doze notas por oitava pode ter todos os intervalos puros.'],
    conclusao: 'Logo, toda afinação de teclado é um compromisso entre pureza e liberdade de modular.',
    nota: 'Vozes e cordas sem trastes podem ajustar a afinação em tempo real.',
  },
  objecoes: [
    { objecao: 'O temperamento igual é "desafinado" e deveria ser abandonado.', tag: 'debate',
      resposta: 'Ele sacrifica a pureza de alguns intervalos em troca da liberdade de tocar em todas as tonalidades. Para muito repertório antigo, temperamentos históricos soam melhor; para o moderno, o igual é adequado. A escolha depende do repertório.' },
  ],
  aplicacao: `<p>Calcule as frequências das notas lá–dó♯–mi a partir de lá = 220 Hz em afinação justa (5:4, 3:2) e em temperamento igual, compare-as e ouça (com aplicativo de afinação) a diferença.</p>`,
  fonte: {
    obra: 'Boécio, A instituição musical, livros II e III (razões dos intervalos)', link: null,
    orientacao: `<p>Observe como as consonâncias são definidas por razões e o tratamento do tom e do semitom.</p>`,
  },
  perguntas: [
    { p: 'O que determina a altura do som?', r: 'A frequência.' },
    { p: 'Qual a razão do semitom temperado?', r: '2^(1/12) ≈ 1,0595.' },
    { p: 'Por que nenhum teclado tem todos os intervalos puros?', r: 'Porque quintas e terças puras não fecham o ciclo com as oitavas.' },
  ],
  exercicios: [
    mc('A terça maior justa vale:', ['5:4', '3:2', '2:1', '4:3'], 0, 'Razão.'),
    mc('Lá = 220 Hz; a quinta justa acima é:', ['330 Hz', '440 Hz', '275 Hz', '293 Hz'], 0, '220 × 1,5.'),
    mc('A Harmonie universelle é de:', ['Mersenne', 'Rameau', 'Boécio', 'Zarlino'], 0, '1636.'),
    mc('A intensidade mede-se em:', ['Decibéis', 'Hertz', 'Metros', 'Segundos'], 0, 'Unidade.'),
    mc('Reverberação longa favorece:', ['Linhas sustentadas', 'Fala rápida', 'Percussão seca', 'Nada'], 0, 'Igrejas.'),
    disc('Faça os cálculos da aplicação e comente a diferença ouvida.', ['Justa', 'Temperada', 'Comparação', 'Escuta']),
  ],
  resumo: ['Frequência, amplitude, timbre.', 'Pitagórica, justa, temperada.', '2^(1/12).', 'Instrumentos.', 'Reverberação.'],
  referencias: [
    { texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' },
    { texto: 'Marin Mersenne, Harmonie universelle (1636).' },
    { texto: 'Jean-Philippe Rameau, Tratado de harmonia (1722).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos', 'Ler a fonte indicada'],
  revisao: [['5:4', 'Terça justa.'], ['2^(1/12)', 'Semitom.'], ['Coma', 'Compromisso.']],
  avancado: {
    texto: `<h3>O temperamento mesotônico</h3>
<p>Nos séculos XVI e XVII, usou-se o temperamento mesotônico, que estreita as quintas para obter terças maiores puras ${tag('fato')}. Funciona bem em tonalidades com poucas alterações, mas produz uma quinta muito desafinada (a "quinta do lobo") ${tag('fato')}. Os temperamentos "bons" do século XVIII buscaram compromissos intermediários ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Marin Mersenne, Harmonie universelle (1636).' }],
    exercicios: [
      mc('O mesotônico privilegia:', ['Terças puras', 'Quintas puras', 'Oitavas largas', 'Nada'], 0, 'Objetivo.'),
      mc('A "quinta do lobo" é:', ['Muito desafinada', 'Pura', 'Uma oitava', 'Um instrumento'], 0, 'Efeito.'),
      mc('Os temperamentos "bons" são do século:', ['XVIII', 'XIII', 'XX', 'V'], 0, 'Barroco tardio.'),
      disc('Compare temperamento mesotônico, "bom" e igual quanto a terças, quintas e modulação.', ['Mesotônico', 'Bom', 'Igual', 'Comparação'])],
  },
}),

aula({
  id: 'mu4-4', titulo: 'Análise de uma obra: o Ave verum corpus de Mozart', duracao: '150 min',
  aprendera: ['Integrar texto, forma, harmonia e textura numa análise', 'Relacionar música e texto sacro', 'Escrever uma análise fundamentada', 'Apreciar uma obra-prima de dimensões pequenas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como reunir tudo o que se estudou para compreender uma obra concreta?</p>
<h3>A obra</h3>
<p>O moteto Ave verum corpus (K. 618) foi composto por Mozart em junho de 1791, para a festa de Corpus Christi em Baden, poucos meses antes de sua morte ${tag('fato')}. Tem cerca de 46 compassos, para coro a quatro vozes, cordas e órgão, em ré maior, com a indicação sotto voce ${tag('fato')}.</p>
<h3>O texto</h3>
<p>O hino eucarístico medieval saúda o verdadeiro Corpo de Cristo, nascido de Maria, que sofreu e foi imolado na cruz, e pede que seja antegozo na hora da morte ${tag('fato')}. A Igreja ensina a presença real de Cristo na Eucaristia ${tag('doutrina')}.</p>
<h3>Roteiro de análise</h3>
<p>1. Texto e divisão em frases ${tag('interpretacao')}. 2. Forma: como as frases musicais seguem o texto ${tag('interpretacao')}. 3. Harmonia: tonalidade inicial, passagens por outras tonalidades, cadências ${tag('interpretacao')}. 4. Textura: coro homofônico e momentos de imitação ${tag('interpretacao')}. 5. Relação texto–música: como a passagem sobre a cruz e a morte é tratada ${tag('interpretacao')}.</p>
<h3>Simplicidade</h3>
<p>A obra mostra que grandeza não depende de extensão: com meios simples, Mozart alcança profunda expressão de adoração ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Moteto', 'Peça polifônica sobre texto sacro.'],
    ['Sotto voce', 'Indicação de canto a meia voz.'],
    ['Homofonia', 'Textura em que as vozes se movem juntas em acordes.'],
    ['Imitação', 'Repetição de um motivo por outra voz.'],
    ['Modulação', 'Passagem de uma tonalidade a outra.'],
  ],
  exemplos: `<p><strong>Ouvir com o texto:</strong> antes da escuta, leia o texto latino e a tradução. Durante a primeira audição, siga apenas o texto; na segunda, marque onde a música muda de tonalidade; na terceira, observe a passagem em que as vozes entram em imitação. Cada escuta revela uma camada.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Ave verum corpus é das obras sacras mais cantadas por coros em todo o mundo ${tag('fato')}. <strong>No Brasil:</strong> coros paroquiais e universitários incluem frequentemente a peça em celebrações e concertos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma obra breve pode ser obra-prima', tag: 'argumento',
    premissas: ['O valor de uma obra depende da perfeição com que realiza o que pretende.', 'O Ave verum realiza com plena adequação o texto de adoração eucarística.', 'Extensão e complexidade não são critérios suficientes de valor.'],
    conclusao: 'Logo, uma obra breve como o Ave verum pode ser obra-prima.',
    nota: 'O mesmo se diz de poemas curtos na literatura.',
  },
  objecoes: [
    { objecao: 'Mozart não era religioso; sua música sacra é só trabalho profissional.', tag: 'debate',
      resposta: 'Mozart era católico, com a fé e as contradições de sua época, e escreveu cartas com expressões religiosas. Avaliar a interioridade de alguém é difícil. De todo modo, o valor da obra se julga por ela mesma, e o Ave verum é amplamente reconhecido como expressão de recolhimento.' },
  ],
  aplicacao: `<p>Escreva a análise completa do Ave verum corpus seguindo o roteiro de cinco pontos, com minutagem de uma gravação e, se possível, a partitura (disponível em domínio público).</p>`,
  fonte: {
    obra: 'Hino Ave verum corpus (texto latino medieval) e partitura de Mozart, K. 618 (1791)', link: null,
    orientacao: `<p>Leia o texto e a tradução, e acompanhe a partitura durante a escuta.</p>`,
  },
  perguntas: [
    { p: 'Quando e para que festa foi composto o Ave verum?', r: 'Em junho de 1791, para Corpus Christi em Baden.' },
    { p: 'Que indicação de interpretação traz a obra?', r: 'Sotto voce, a meia voz.' },
    { p: 'Qual o tema do texto?', r: 'A adoração do verdadeiro Corpo de Cristo na Eucaristia.' },
  ],
  exercicios: [
    mc('O Ave verum é de:', ['Mozart', 'Bach', 'Palestrina', 'Beethoven'], 0, 'K. 618.'),
    mc('Foi composto em:', ['1791', '1727', '1824', '1567'], 0, 'Ano da morte.'),
    mc('A tonalidade principal é:', ['Ré maior', 'Dó menor', 'Sol maior', 'Fá menor'], 0, 'Obra.'),
    mc('Sotto voce significa:', ['A meia voz', 'Muito forte', 'Rápido', 'Sem voz'], 0, 'Indicação.'),
    mc('Homofonia é textura em que as vozes:', ['Movem-se juntas em acordes', 'São independentes', 'Cantam em uníssono sempre', 'Improvisam'], 0, 'Textura.'),
    disc('Escreva a análise do Ave verum segundo o roteiro.', ['Texto e forma', 'Harmonia', 'Textura', 'Relação texto–música']),
  ],
  resumo: ['K. 618, junho de 1791.', 'Coro, cordas, órgão; ré maior.', 'Texto eucarístico.', 'Roteiro de cinco pontos.', 'Grandeza na simplicidade.'],
  referencias: [
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Catecismo da Igreja Católica, §§ 1373–1381.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['1791', 'Ave verum.'], ['Sotto voce', 'Meia voz.'], ['Roteiro', 'Cinco pontos.']],
  avancado: {
    texto: `<h3>Comparar versões</h3>
<p>O mesmo texto Ave verum corpus foi musicado por William Byrd (publicado em 1605) e por Mozart ${tag('fato')}. A versão de Byrd é polifônica renascentista; a de Mozart, clássica, com acompanhamento de cordas ${tag('fato')}. Comparar as duas mostra como épocas diferentes servem ao mesmo texto ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre a música inglesa.' }],
    exercicios: [
      mc('Byrd musicou o Ave verum no estilo:', ['Polifônico renascentista', 'Romântico', 'Dodecafônico', 'Minimalista'], 0, 'Época.'),
      mc('A versão de Byrd foi publicada em:', ['1605', '1791', '1903', '1567'], 0, 'Gradualia.'),
      mc('A versão de Mozart tem acompanhamento de:', ['Cordas e órgão', 'Só piano', 'Banda', 'Nada'], 0, 'Instrumentação.'),
      disc('Compare as versões de Byrd e Mozart do Ave verum quanto a textura, harmonia e tratamento do texto.', ['Textura', 'Harmonia', 'Texto', 'Juízo'])],
  },
}),

avaliacao('mu4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas de harmonia, contraponto, formas e acústica, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça uma harmonização e um contraponto.</li><li>Ouça de novo o Ave verum com a sua análise.</li></ul>`,
[
  disc('Harmonize uma melodia de oito compassos em sol maior com I, IV e V (incluindo uma cadência plagal e uma perfeita) e justifique a condução de vozes.', ['Funções', 'Cadências', 'Condução', 'Justificação']),
  disc('Analise uma obra sacra curta à sua escolha (forma, harmonia, textura e relação com o texto) e explique como a acústica do espaço litúrgico influencia sua execução.', ['Forma', 'Harmonia e textura', 'Texto', 'Acústica']),
]),
];
