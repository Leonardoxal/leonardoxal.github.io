// Música III — escolas e debates (etapas 6 e 7 do percurso de Música).
// Ethos e harmonia; tonalidade, alternativas e os campos sacro, erudito e popular; música e emoção; música, moral e liturgia.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'mu3-1', titulo: 'Ethos e harmonia: das teorias antigas a Rameau', duracao: '150 min',
  aprendera: ['Expor a doutrina do ethos em Platão e Aristóteles', 'Distinguir a escola pitagórica e a de Aristóxeno', 'Conhecer as teorias da harmonia de Zarlino e Rameau', 'Avaliar a relação entre razão e ouvido'],
  prereq: ['Música II (módulo MU2)'],
  explicacao: `
<h3>O problema</h3>
<p>A música deve ser julgada pela razão (proporções) ou pelo ouvido (percepção)? E que efeito ela tem sobre a alma?</p>
<h3>Platão</h3>
<p>Na República (livro III), Platão admite na cidade ideal os modos dórico e frígio, que formariam coragem e moderação, e exclui modos considerados lânguidos ou lamentosos ${tag('fato')}. A música, diz, penetra no íntimo da alma ${tag('fato')}.</p>
<h3>Aristóteles</h3>
<p>Na Política (livro VIII), Aristóteles atribui à música três fins: recreação, formação do caráter e cultivo do ócio digno ${tag('fato')}. Menciona também a catarse, uma purificação das emoções pela música ${tag('fato')}.</p>
<h3>Razão e ouvido</h3>
<p>Os pitagóricos fundavam a música em razões numéricas; Aristóxeno de Tarento (século IV a.C.) defendeu que o ouvido é juiz dos intervalos ${tag('fato')}. Boécio transmitiu sobretudo a linha pitagórica ${tag('fato')}.</p>
<h3>Teoria moderna da harmonia</h3>
<p>Gioseffo Zarlino, nas Instituições harmônicas (1558), justificou as terças e sextas como consonâncias ${tag('fato')}. Jean-Philippe Rameau, no Tratado de harmonia (1722), fundou a harmonia na série harmônica e no "baixo fundamental", base da teoria funcional ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ethos', 'Caráter moral atribuído a modos e ritmos.'],
    ['Catarse', 'Purificação das emoções, em Aristóteles.'],
    ['Aristóxeno', 'Teórico grego que fez do ouvido o juiz da música.'],
    ['Consonância', 'Intervalo percebido como estável.'],
    ['Baixo fundamental', 'Conceito de Rameau para a nota-raiz dos acordes.'],
  ],
  exemplos: `<p><strong>A mesma melodia em dois modos:</strong> cante "Parabéns a você" como se conhece (em maior) e depois trocando as terças e sextas por intervalos menores (em menor). A mudança de modo altera o caráter percebido, o que ajuda a entender, com cautela, a intuição grega do ethos.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas em psicologia da música investigam como modos e andamentos influenciam a percepção emocional ${tag('fato')}. <strong>No Brasil:</strong> a música nordestina usa com frequência o modo mixolídio e escalas com a quarta aumentada ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que razão e ouvido se completam', tag: 'argumento',
    premissas: ['As razões numéricas explicam por que certos intervalos soam consonantes.', 'O ouvido percebe sutilezas e contextos que as razões simples não captam.', 'A música é feita para ser ouvida, mas é inteligível.'],
    conclusao: 'Logo, uma teoria completa da música une razão e percepção.',
    nota: 'Boécio dava primazia à razão; músicos práticos, ao ouvido. A tradição posterior buscou equilíbrio.',
  },
  objecoes: [
    { objecao: 'A doutrina do ethos é superstição antiga.', tag: 'debate',
      resposta: 'Os efeitos específicos que Platão atribuía a cada modo grego são difíceis de verificar, até porque não sabemos exatamente como soavam. Mas a ideia geral de que a música influencia o estado de ânimo e, pelo hábito, as disposições é amplamente aceita.' },
  ],
  aplicacao: `<p>Monte o quadro comparativo da etapa com três concepções (pitagórica, aristoxênica e moderna de Rameau): princípio, autor, obra e exemplo musical.</p>`,
  fonte: {
    obra: 'Aristóteles, Política, livro VIII, caps. 5–7', link: null,
    orientacao: `<p>Observe os fins da música, a discussão sobre os modos e a menção à catarse.</p>`,
  },
  perguntas: [
    { p: 'Que modos Platão admite?', r: 'O dórico e o frígio.' },
    { p: 'Quais os três fins da música para Aristóteles?', r: 'Recreação, formação do caráter e cultivo do ócio digno.' },
    { p: 'O que defendeu Aristóxeno?', r: 'Que o ouvido é juiz dos intervalos.' },
  ],
  exercicios: [
    mc('O Tratado de harmonia é de:', ['Rameau', 'Zarlino', 'Boécio', 'Fux'], 0, '1722.'),
    mc('Zarlino justificou como consonâncias:', ['Terças e sextas', 'Segundas', 'Trítonos', 'Sétimas'], 0, '1558.'),
    mc('A catarse musical aparece em:', ['Política VIII', 'República X', 'Ética I', 'Física III'], 0, 'Aristóteles.'),
    mc('A linha pitagórica funda a música em:', ['Razões numéricas', 'Emoções', 'Costumes', 'Instrumentos'], 0, 'Números.'),
    mc('Rameau introduziu o conceito de:', ['Baixo fundamental', 'Neuma', 'Série dodecafônica', 'Hexacorde'], 0, 'Teoria funcional.'),
    disc('Monte o quadro comparativo das três concepções.', ['Princípios', 'Autores e obras', 'Exemplos', 'Comparação']),
  ],
  resumo: ['Platão: modos e caráter.', 'Aristóteles: três fins; catarse.', 'Pitagóricos e Aristóxeno.', 'Zarlino (1558).', 'Rameau (1722).'],
  referencias: [
    { texto: 'Aristóteles, Política, livro VIII.', livro: 'aristoteles-politica' },
    { texto: 'Platão, A República, livro III.', livro: 'platao-republica' },
    { texto: 'Jean-Philippe Rameau, Tratado de harmonia (1722).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Ethos', 'Caráter.'], ['Aristóxeno', 'Ouvido.'], ['Rameau', 'Baixo fundamental.']],
  avancado: {
    texto: `<h3>A música na educação, segundo Aristóteles</h3>
<p>Aristóteles pergunta se os jovens devem aprender a tocar ou apenas ouvir, e responde que devem tocar o suficiente para julgar bem, sem buscar virtuosismo profissional ${tag('fato')}. Exclui o aulos (instrumento de sopro) da educação, por excitar demais e impedir o uso da palavra ${tag('fato')}. A tese de que fazer música forma o juízo musical continua relevante para a educação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Política, livro VIII, cap. 6.', livro: 'aristoteles-politica' }],
    exercicios: [
      mc('Aristóteles quer que os jovens toquem para:', ['Julgar bem', 'Ser profissionais', 'Ganhar concursos', 'Nada'], 0, 'Educação.'),
      mc('O instrumento excluído é o:', ['Aulos', 'Lira', 'Voz', 'Tambor'], 0, 'Excita demais.'),
      mc('O virtuosismo profissional, para Aristóteles, é:', ['Desnecessário na educação livre', 'Obrigatório', 'O fim da música', 'Irrelevante sempre'], 0, 'Tese.'),
      disc('Avalie a tese de Aristóteles à luz da educação musical brasileira hoje.', ['Tese', 'Contexto', 'Avaliação', 'Proposta'])],
  },
}),

aula({
  id: 'mu3-2', titulo: 'Tonalidade, suas alternativas e os campos sacro, erudito e popular', duracao: '150 min',
  aprendera: ['Explicar a tonalidade funcional', 'Conhecer o atonalismo e o dodecafonismo', 'Conhecer o minimalismo e o tintinnabuli', 'Distinguir música sacra, erudita e popular'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A tonalidade dominou a música ocidental por cerca de três séculos. Por que foi questionada, e o que veio depois?</p>
<h3>Tonalidade</h3>
<p>Na tonalidade funcional, os acordes se organizam em torno de uma tônica, com tensão na dominante e repouso na tônica ${tag('fato')}. O cromatismo crescente do século XIX, como no Tristão e Isolda de Wagner (1865), enfraqueceu essa hierarquia ${tag('fato')}.</p>
<h3>Alternativas</h3>
<p>Schoenberg abandonou a tonalidade (atonalismo) e criou o método dodecafônico, em que as doze notas são ordenadas numa série ${tag('fato')}. Na segunda metade do século XX, o minimalismo (Steve Reich, Philip Glass) trabalhou com repetição e processos graduais ${tag('fato')}. Arvo Pärt criou o estilo tintinnabuli, de grande simplicidade, ligado à sua fé ortodoxa ${tag('fato')}.</p>
<h3>Sacra, erudita e popular</h3>
<p>Música sacra é a composta para o culto ou com tema religioso ${tag('fato')}. Erudita (ou de concerto) é a música de tradição escrita e elaborada; popular é a de difusão ampla, frequentemente oral ou mediática ${tag('fato')}. As fronteiras são porosas: Villa-Lobos usou o choro, e a bossa nova incorporou harmonias sofisticadas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Tonalidade funcional', 'Organização dos acordes em torno de uma tônica.'],
    ['Cromatismo', 'Uso frequente de semitons fora da escala.'],
    ['Atonalismo', 'Música sem centro tonal.'],
    ['Minimalismo', 'Estilo baseado em repetição e processos graduais.'],
    ['Tintinnabuli', 'Estilo de Arvo Pärt, com tríade e linha melódica simples.'],
  ],
  exemplos: `<p><strong>Três respostas ao século XX:</strong> o Pierrot lunaire de Schoenberg (1912) soa tenso e sem repouso tonal; Music for 18 Musicians de Reich hipnotiza pela repetição; o Spiegel im Spiegel de Pärt (1978) repousa numa simplicidade quase silenciosa. São caminhos muito diferentes depois da crise tonal.</p>`,
  contexto: `<p><strong>No mundo:</strong> a música de Arvo Pärt é das mais executadas entre compositores vivos de música de concerto ${tag('fato')}. <strong>No Brasil:</strong> o grupo Música Viva, liderado por Hans-Joachim Koellreutter a partir de 1939, difundiu o dodecafonismo no país e gerou polêmica com os nacionalistas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tonalidade continua viva', tag: 'argumento',
    premissas: ['A tonalidade se apoia em relações da série harmônica percebidas pelo ouvido.', 'Grande parte da música popular e sacra atual continua tonal.', 'Compositores do século XX e XXI voltaram a formas tonais ou modais.'],
    conclusao: 'Logo, a tonalidade não foi superada, mas é uma linguagem entre outras, com base perceptiva sólida.',
    nota: 'Schoenberg via a tonalidade como esgotada; a história posterior mostrou um quadro mais plural.',
  },
  objecoes: [
    { objecao: 'A música atonal é só ruído sem valor.', tag: 'debate',
      resposta: 'É linguagem difícil para quem não a conhece, e muitos ouvintes a rejeitam. Mas obras atonais têm construção rigorosa e expressividade, especialmente para emoções de angústia e tensão. Pode-se preferir outras linguagens sem negar o valor de todas as obras atonais.' },
  ],
  aplicacao: `<p>Ouça uma obra tonal, uma atonal e uma minimalista ou tintinnabuli; descreva centro tonal, repetição e expressividade de cada uma; e classifique cinco peças como sacra, erudita ou popular, justificando os casos de fronteira.</p>`,
  fonte: {
    obra: 'Arnold Schoenberg, Harmonia (1911), capítulos finais', link: null,
    orientacao: `<p>Observe como Schoenberg justifica a "emancipação da dissonância".</p>`,
  },
  perguntas: [
    { p: 'O que é a tonalidade funcional?', r: 'A organização dos acordes em torno de uma tônica, com tensão e repouso.' },
    { p: 'O que é o dodecafonismo?', r: 'O método de Schoenberg que ordena as doze notas numa série.' },
    { p: 'Quem liderou o Música Viva no Brasil?', r: 'Hans-Joachim Koellreutter.' },
  ],
  exercicios: [
    mc('O Tristão e Isolda é de:', ['Wagner', 'Verdi', 'Mozart', 'Schoenberg'], 0, '1865.'),
    mc('O tintinnabuli é de:', ['Arvo Pärt', 'Philip Glass', 'Steve Reich', 'Stravinsky'], 0, 'Estilo.'),
    mc('O minimalismo usa sobretudo:', ['Repetição', 'Séries de doze notas', 'Canto gregoriano', 'Improvisação livre'], 0, 'Reich, Glass.'),
    mc('O grupo Música Viva começou em:', ['1939', '1922', '1958', '1889'], 0, 'Koellreutter.'),
    mc('Pierrot lunaire é de:', ['Schoenberg', 'Pärt', 'Debussy', 'Villa-Lobos'], 0, '1912.'),
    disc('Faça as audições comparadas e a classificação das cinco peças.', ['Audições', 'Descrições', 'Classificação', 'Casos de fronteira']),
  ],
  resumo: ['Tonalidade: tônica e dominante.', 'Cromatismo e crise.', 'Atonalismo e dodecafonismo.', 'Minimalismo e tintinnabuli.', 'Sacra, erudita, popular.'],
  referencias: [
    { texto: 'Arnold Schoenberg, Harmonia (1911).' },
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Vasco Mariz, História da música no Brasil (1981).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar audições e classificação', 'Ler a fonte indicada'],
  revisao: [['Tônica', 'Repouso.'], ['Série', 'Dodecafonismo.'], ['Pärt', 'Tintinnabuli.']],
  avancado: {
    texto: `<h3>A série dodecafônica</h3>
<p>Uma série ordena as doze notas cromáticas sem repetição ${tag('fato')}. Ela pode ser usada na forma original, retrógrada (de trás para frente), inversa (intervalos invertidos) e retrógrada da inversa, e transposta para qualquer altura ${tag('fato')}. Isso dá 48 formas da série ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Arnold Schoenberg, Harmonia (1911).' }],
    exercicios: [
      mc('Uma série dodecafônica tem:', ['12 notas sem repetição', '7 notas', '5 notas', '24 notas'], 0, 'Cromática.'),
      mc('A retrógrada lê a série:', ['De trás para frente', 'Invertida', 'Transposta', 'Igual'], 0, 'Forma.'),
      mc('As formas da série somam:', ['48', '12', '4', '24'], 0, '4 × 12.'),
      disc('Crie uma série dodecafônica e escreva sua forma retrógrada e sua inversa.', ['Série', 'Retrógrada', 'Inversa', 'Verificação'])],
  },
}),

aula({
  id: 'mu3-3', titulo: 'A música expressa emoções?', duracao: '150 min',
  aprendera: ['Formular o problema da expressão musical', 'Expor o formalismo de Hanslick', 'Expor teorias da expressão e do contorno', 'Avaliar as posições com exemplos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dizemos que uma peça é "triste" ou "alegre". Mas como sons, que não sentem nada, podem ser tristes?</p>
<h3>Expressão</h3>
<p>Muitos autores, de Rousseau aos românticos, viram a música como expressão das emoções; Rousseau ligou a melodia à imitação das inflexões da voz apaixonada ${tag('fato')}.</p>
<h3>Formalismo</h3>
<p>Eduard Hanslick, em Do belo musical (1854), sustentou que o conteúdo da música são "formas sonoras em movimento" e que a beleza musical é especificamente musical, não a representação de sentimentos ${tag('fato')}.</p>
<h3>Teoria do contorno</h3>
<p>Peter Kivy, em The Corded Shell (1980), propôs que a música é expressiva porque seu "contorno" se assemelha ao comportamento humano expressivo (andamento lento e linhas descendentes lembram a postura da tristeza) ${tag('fato')}.</p>
<h3>Excitação</h3>
<p>Outra teoria diz que a música é triste porque desperta tristeza no ouvinte ${tag('fato')}. Objeção: podemos reconhecer a tristeza de uma peça sem ficarmos tristes ${tag('argumento')}.</p>
<h3>Uma síntese</h3>
<p>Na tradição clássica, a música imita os movimentos da alma, e por isso pode formá-los ${tag('interpretacao')}. Essa ideia une a percepção do caráter expressivo e o efeito formativo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Expressão', 'Manifestação de emoção em algo perceptível.'],
    ['Formalismo', 'Tese de que o valor da música está em suas formas.'],
    ['Teoria do contorno', 'Tese de que a música se assemelha ao comportamento expressivo.'],
    ['Teoria da excitação', 'Tese de que a música é expressiva por despertar emoções.'],
    ['Imitação', 'Para os clássicos, representação de algo por semelhança.'],
  ],
  exemplos: `<p><strong>O Adagio de Barber:</strong> o Adagio para cordas de Samuel Barber, com andamento lento e linhas que sobem com esforço e descem, é ouvido por quase todos como triste. O formalista descreve as formas; o teórico do contorno nota a semelhança com o gesto humano de luto; o teórico da excitação, a tristeza do ouvinte.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Adagio de Barber foi tocado em funerais de Estado e cerimônias de luto ${tag('fato')}. <strong>No Brasil:</strong> o samba-canção e a seresta exploram há décadas a expressão da saudade e da melancolia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Contra a teoria da excitação', tag: 'argumento',
    premissas: ['Se a música fosse triste só por entristecer o ouvinte, quem não fica triste não poderia reconhecê-la como triste.', 'Reconhecemos peças tristes sem ficar tristes, e às vezes com prazer.', 'Logo, a tristeza da música não se reduz ao efeito no ouvinte.'],
    conclusao: 'Logo, a expressividade é, ao menos em parte, propriedade percebida na própria música.',
    nota: 'Não se nega que a música desperte emoções; nega-se que isso esgote a expressividade.',
  },
  objecoes: [
    { objecao: 'Hanslick reduz a música a um jogo frio de formas.', tag: 'debate',
      resposta: 'Hanslick não nega que a música comova; nega que seu conteúdo seja um sentimento determinado. Para ele, a emoção vem da contemplação da beleza das formas. A crítica de frieza simplifica sua posição.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 1): escolha três peças de caráter diferente e analise sua expressividade segundo as três teorias (expressão, contorno, excitação), dizendo qual explica melhor cada caso.</p>`,
  fonte: {
    obra: 'Eduard Hanslick, Do belo musical (1854), cap. 3', link: null,
    orientacao: `<p>Observe a fórmula "formas sonoras em movimento" e a comparação com o arabesco.</p>`,
  },
  perguntas: [
    { p: 'O que é a música, para Hanslick?', r: 'Formas sonoras em movimento.' },
    { p: 'O que propõe a teoria do contorno?', r: 'Que a música se assemelha ao comportamento expressivo humano.' },
    { p: 'Qual a objeção à teoria da excitação?', r: 'Reconhecemos peças tristes sem ficar tristes.' },
  ],
  exercicios: [
    mc('Do belo musical é de:', ['Hanslick', 'Kivy', 'Rousseau', 'Rameau'], 0, '1854.'),
    mc('The Corded Shell é de:', ['Peter Kivy', 'Roger Scruton', 'Hanslick', 'Adorno'], 0, '1980.'),
    mc('Rousseau ligou a melodia à:', ['Voz apaixonada', 'Matemática', 'Harmonia', 'Dança apenas'], 0, 'Expressão.'),
    mc('Andamento lento e linhas descendentes sugerem:', ['Tristeza', 'Euforia', 'Raiva', 'Nada'], 0, 'Contorno.'),
    mc('Para os clássicos, a música:', ['Imita os movimentos da alma', 'Não tem relação com a alma', 'É só número', 'É só ruído'], 0, 'Imitação.'),
    disc('Analise três peças segundo as três teorias.', ['Peças', 'Três teorias', 'Comparação', 'Conclusão']),
  ],
  resumo: ['Expressão (Rousseau, românticos).', 'Formalismo (Hanslick).', 'Contorno (Kivy).', 'Excitação e objeção.', 'Imitação dos movimentos da alma.'],
  referencias: [
    { texto: 'Eduard Hanslick, Do belo musical (1854).' },
    { texto: 'Jean-Jacques Rousseau, Escritos sobre música.', livro: 'rousseau-musica' },
    { texto: 'Peter Kivy, The Corded Shell (1980).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Hanslick', 'Formas.'], ['Kivy', 'Contorno.'], ['Excitação', 'Objeção.']],
  avancado: {
    texto: `<h3>Scruton e a música como ação imaginada</h3>
<p>Roger Scruton, em The Aesthetics of Music (1997), sustentou que ouvimos os sons como música quando percebemos neles movimento, espaço e gesto, por uma espécie de percepção imaginativa ${tag('fato')}. Defendeu também que o gosto musical tem dimensão moral, pois a música forma modos de sentir em comum ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Roger Scruton, The Aesthetics of Music (1997).' }],
    exercicios: [
      mc('The Aesthetics of Music é de:', ['Scruton', 'Kivy', 'Hanslick', 'Adorno'], 0, '1997.'),
      mc('Scruton fala de percepção:', ['Imaginativa', 'Puramente física', 'Matemática', 'Inexistente'], 0, 'Movimento ouvido.'),
      mc('Para Scruton, o gosto musical tem dimensão:', ['Moral', 'Nenhuma', 'Só técnica', 'Só econômica'], 0, 'Tese.'),
      disc('Explique por que ouvimos "movimento" na música, se nada se move de lugar.', ['Fenômeno', 'Scruton', 'Exemplo', 'Avaliação'])],
  },
}),

aula({
  id: 'mu3-4', titulo: 'Música, moral e liturgia', duracao: '150 min',
  aprendera: ['Discutir a influência moral da música', 'Expor as qualidades da música sacra segundo Pio X', 'Conhecer o capítulo VI da Sacrosanctum Concilium', 'Discutir critérios para a música na missa'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Toda música serve para a liturgia? Que critérios a Igreja propõe, e com que fundamento?</p>
<h3>Música e moral</h3>
<p>De Platão a Boécio, sustentou-se que a música forma hábitos afetivos ${tag('fato')}. Na tradição cristã, isso se traduz na preocupação com a música que acompanha a oração ${tag('doutrina')}.</p>
<h3>Pio X</h3>
<p>No motu proprio Tra le sollecitudini (1903), São Pio X afirmou que a música sacra deve ter santidade, bondade de forma (ser arte verdadeira) e universalidade ${tag('doutrina')}. Apontou o canto gregoriano como modelo e a polifonia clássica como próxima dele ${tag('doutrina')}.</p>
<h3>Vaticano II</h3>
<p>A Sacrosanctum Concilium (1963) dedica o capítulo VI à música sacra ${tag('fato')}. Afirma que a Igreja reconhece o canto gregoriano como próprio da liturgia romana, devendo ocupar o lugar principal em igualdade de circunstâncias (n. 116) ${tag('doutrina')}. Pede a participação ativa dos fiéis no canto (n. 118) e tem em grande apreço o órgão de tubos (n. 120) ${tag('doutrina')}. Admite outros gêneros e instrumentos adequados ao uso sacro (n. 116 e 120) ${tag('doutrina')}.</p>
<h3>Ratzinger</h3>
<p>Joseph Ratzinger, em Introdução ao espírito da liturgia (2000), defendeu que a música litúrgica deve estar ordenada ao Logos, elevando os sentidos ao espírito ${tag('fato')}. A aplicação desses critérios às músicas concretas é objeto de debate pastoral ${tag('debate')}.</p>`,
  vocabulario: [
    ['Música sacra', 'Música composta para o culto divino.'],
    ['Santidade', 'Qualidade de ordenar-se ao culto, excluindo o profano.'],
    ['Bondade de forma', 'Qualidade de ser verdadeira arte.'],
    ['Universalidade', 'Capacidade de ser acolhida em diferentes culturas.'],
    ['Participação ativa', 'Envolvimento dos fiéis na liturgia, inclusive pelo canto.'],
  ],
  exemplos: `<p><strong>Escolher um canto de entrada:</strong> num domingo do Advento, um grupo escolhe entre o intróito gregoriano Ad te levavi, um canto em português que parafraseia o mesmo salmo e uma canção popular sem relação com o tempo litúrgico. Os critérios de santidade, forma e adequação ao tempo ajudam a decidir.</p>`,
  contexto: `<p><strong>No mundo:</strong> a instrução Musicam sacram (1967) aplicou os princípios conciliares ${tag('fato')}. <strong>No Brasil:</strong> a CNBB publicou documentos e hinários para orientar a música litúrgica no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a música litúrgica tem critérios próprios', tag: 'argumento',
    premissas: ['A liturgia é culto a Deus, não espetáculo nem simples encontro social.', 'A música litúrgica é parte da liturgia, não fundo sonoro.', 'O que é parte do culto deve ser ordenado ao culto.'],
    conclusao: 'Logo, a música litúrgica deve obedecer a critérios próprios, distintos dos do entretenimento.',
    nota: 'Isso não exclui a diversidade de estilos que a Igreja admite; exige discernimento.',
  },
  objecoes: [
    { objecao: 'O que importa é que o povo goste e cante; critérios afastam as pessoas.', tag: 'debate',
      resposta: 'A participação do povo é pedida pelo próprio Concílio. Mas participação não é só gostar: é unir-se à oração da Igreja. Músicas de qualidade e adequadas podem ser cantadas pelo povo. O desafio pastoral é unir participação e dignidade.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 2): ensaio "a música forma o caráter?", com Platão, Aristóteles e um autor moderno; e avalie o repertório de uma missa de que participou segundo os critérios de Pio X e da Sacrosanctum Concilium.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Sacrosanctum Concilium, nn. 112–121', link: null,
    orientacao: `<p>Leia o capítulo VI inteiro e marque o que é afirmado como princípio e o que é deixado à adaptação.</p>`,
  },
  perguntas: [
    { p: 'Quais as três qualidades da música sacra segundo Pio X?', r: 'Santidade, bondade de forma e universalidade.' },
    { p: 'Que lugar a SC 116 dá ao gregoriano?', r: 'O lugar principal, em igualdade de circunstâncias.' },
    { p: 'Que instrumento a SC 120 tem em grande apreço?', r: 'O órgão de tubos.' },
  ],
  exercicios: [
    mc('Tra le sollecitudini é de:', ['1903', '1963', '1967', '2000'], 0, 'Pio X.'),
    mc('O capítulo VI da SC trata da:', ['Música sacra', 'Arte sacra apenas', 'Eucaristia', 'Ano litúrgico'], 0, 'nn. 112–121.'),
    mc('Musicam sacram é de:', ['1967', '1903', '1963', '1992'], 0, 'Instrução.'),
    mc('Introdução ao espírito da liturgia é de:', ['Joseph Ratzinger', 'Pio X', 'Agostinho', 'Hanslick'], 0, '2000.'),
    mc('A SC pede dos fiéis no canto:', ['Participação ativa', 'Silêncio total', 'Só ouvir', 'Nada'], 0, 'n. 118.'),
    disc('Escreva o ensaio e a avaliação do repertório.', ['Platão e Aristóteles', 'Autor moderno', 'Critérios da Igreja', 'Avaliação concreta']),
  ],
  resumo: ['Música forma hábitos afetivos.', 'Pio X: santidade, forma, universalidade.', 'SC 116: gregoriano.', 'SC 118 e 120: participação e órgão.', 'Ratzinger: ordenação ao Logos.'],
  referencias: [
    { texto: 'São Pio X, Tra le sollecitudini (1903).' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio e a avaliação', 'Ler a fonte indicada'],
  revisao: [['Pio X', 'Três qualidades.'], ['SC 116', 'Gregoriano.'], ['SC 120', 'Órgão.']],
  avancado: {
    texto: `<h3>O próprio da missa</h3>
<p>Os cantos do próprio (intróito, gradual, aleluia, ofertório, comunhão) mudam a cada celebração e vêm em grande parte dos salmos ${tag('fato')}. Os do ordinário (Kyrie, Gloria, Credo, Sanctus, Agnus Dei) são fixos ${tag('fato')}. As missas polifônicas musicam geralmente o ordinário ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000), parte sobre a música.' }],
    exercicios: [
      mc('O Kyrie pertence ao:', ['Ordinário', 'Próprio', 'Ofício', 'Ritual'], 0, 'Fixo.'),
      mc('O intróito pertence ao:', ['Próprio', 'Ordinário', 'Credo', 'Agnus'], 0, 'Varia.'),
      mc('As missas polifônicas musicam geralmente o:', ['Ordinário', 'Próprio', 'Lecionário', 'Martirológio'], 0, 'Kyrie a Agnus.'),
      disc('Monte a lista dos cantos do próprio e do ordinário de um domingo do tempo comum, indicando os textos.', ['Próprio', 'Ordinário', 'Textos', 'Fontes'])],
  },
}),

avaliacao('mu3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as concepções da música e seus debates, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o capítulo VI da Sacrosanctum Concilium.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Compare a doutrina do ethos (Platão, Aristóteles) com o formalismo de Hanslick e a teoria do contorno, e diga qual explica melhor a experiência musical.', ['Ethos', 'Formalismo', 'Contorno', 'Avaliação']),
  disc('Exponha os critérios da Igreja para a música litúrgica (Pio X, Sacrosanctum Concilium, Ratzinger) e aplique-os a um caso concreto.', ['Critérios', 'Fontes', 'Caso', 'Juízo']),
]),
];
