// Música I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Música).
// O que é a música; som, intervalos, escalas e acordes; notação e leitura; escuta ativa e análise de forma.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'mu1-1', titulo: 'O que é a música: arte, ciência e oração', duracao: '150 min',
  aprendera: ['Definir música e seus elementos', 'Distinguir a música como arte e como ciência', 'Reconhecer a relação entre música e palavra', 'Situar a música na liturgia'],
  prereq: ['Lógica (módulo M4)'],
  explicacao: `
<h3>O problema</h3>
<p>Todos os povos fazem música. Mas o que é, exatamente, a música, e por que ela nos move tanto?</p>
<h3>Elementos</h3>
<p>A música organiza sons e silêncios no tempo ${tag('fato')}. Seus elementos básicos são o ritmo (organização das durações), a melodia (sucessão de alturas), a harmonia (simultaneidade de alturas) e o timbre (cor do som) ${tag('fato')}. A forma é a organização do todo ${tag('fato')}.</p>
<h3>Arte e ciência</h3>
<p>Santo Agostinho definiu a música como "ciência de modular bem" (scientia bene modulandi), no livro I de A música ${tag('fato')}. Boécio distinguiu a música mundana (harmonia do cosmos), a humana (harmonia da alma e do corpo) e a instrumental (sons produzidos) ${tag('fato')}. Na Idade Média, a música pertencia ao quadrívio, como ciência das proporções ${tag('fato')}; hoje é vista sobretudo como arte, mas a teoria e a acústica continuam ciência ${tag('interpretacao')}.</p>
<h3>Palavra e oração</h3>
<p>Grande parte da música ocidental nasceu ligada ao texto cantado, especialmente na liturgia ${tag('fato')}. Santo Agostinho conta nas Confissões (livro IX) que chorou ao ouvir os hinos e cânticos da Igreja ${tag('fato')}. O Concílio Vaticano II afirma que a tradição musical da Igreja é um tesouro de valor inestimável e que o canto sacro unido às palavras é parte necessária ou integrante da liturgia solene (Sacrosanctum Concilium, 112) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Ritmo', 'Organização das durações no tempo.'],
    ['Melodia', 'Sucessão de sons de alturas diferentes.'],
    ['Harmonia', 'Combinação simultânea de sons.'],
    ['Timbre', 'Qualidade que distingue sons de mesma altura (voz, violino, flauta).'],
    ['Forma', 'Organização das partes de uma peça.'],
  ],
  exemplos: `<p><strong>Três peças:</strong> no canto gregoriano Salve Regina, há melodia sem harmonia e ritmo livre ligado ao texto. Na Ária das Bachianas brasileiras nº 5 de Villa-Lobos, uma melodia vocal longa se apoia na harmonia dos violoncelos. Num samba, o ritmo sincopado da percussão é elemento central. Os mesmos elementos aparecem com pesos diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a música está presente em todas as culturas conhecidas ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 11.769/2008 tornou o conteúdo de música obrigatório no ensino de arte na educação básica, depois incorporado à legislação de 2016 sobre as linguagens artísticas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a música é mais que entretenimento', tag: 'argumento',
    premissas: ['A música organiza sons segundo proporções inteligíveis.', 'Ela afeta as emoções e as disposições do ouvinte.', 'O que é inteligível e forma disposições participa da vida racional e moral.'],
    conclusao: 'Logo, a música toca a inteligência e o caráter, não só o prazer.',
    nota: 'É a tese clássica de Platão, Aristóteles e Agostinho, retomada pela tradição cristã.',
  },
  objecoes: [
    { objecao: 'Gosto musical é pessoal; não há música melhor ou pior.', tag: 'debate',
      resposta: 'Preferências variam, e muitos estilos são legítimos. Mas há critérios para avaliar uma obra: domínio técnico, coerência da forma, adequação ao texto e ao contexto. Admitir critérios não exige desprezar o gosto de ninguém.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva três peças (uma sacra, uma erudita e uma popular brasileira) quanto a ritmo, melodia, harmonia, timbre e forma.</p>`,
  fonte: {
    obra: 'Santo Agostinho, A música, livro I, caps. 1–4', link: null,
    orientacao: `<p>Observe a definição de música e a distinção entre a ciência da música e a habilidade do executante.</p>`,
  },
  perguntas: [
    { p: 'Quais os elementos básicos da música?', r: 'Ritmo, melodia, harmonia, timbre e forma.' },
    { p: 'Como Agostinho define a música?', r: 'Como ciência de modular bem (scientia bene modulandi).' },
    { p: 'Que tríplice música distingue Boécio?', r: 'Mundana, humana e instrumental.' },
  ],
  exercicios: [
    mc('A sucessão de alturas é a:', ['Melodia', 'Harmonia', 'Forma', 'Dinâmica'], 0, 'Definição.'),
    mc('O canto gregoriano é essencialmente:', ['Melodia sem harmonia', 'Harmonia sem melodia', 'Só percussão', 'Instrumental'], 0, 'Monodia.'),
    mc('Na Idade Média, a música pertencia ao:', ['Quadrívio', 'Trívio', 'Direito', 'Medicina'], 0, 'Boécio.'),
    mc('A tradição musical da Igreja é chamada tesouro em:', ['Sacrosanctum Concilium', 'Rerum novarum', 'Laudato si\'', 'Dei Verbum'], 0, 'SC 112.'),
    mc('O timbre distingue:', ['Sons de mesma altura e fontes diferentes', 'Notas agudas e graves', 'Durações', 'Compassos'], 0, 'Cor do som.'),
    disc('Descreva as três peças conforme a aplicação.', ['Ritmo e melodia', 'Harmonia e timbre', 'Forma', 'Vocabulário']),
  ],
  resumo: ['Sons e silêncios no tempo.', 'Ritmo, melodia, harmonia, timbre, forma.', 'Agostinho: ciência de modular bem.', 'Boécio: três músicas.', 'Música e liturgia.'],
  referencias: [
    { texto: 'Santo Agostinho, A música.', livro: 'agostinho-musica' },
    { texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963), cap. VI.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as descrições', 'Ler a fonte indicada'],
  revisao: [['Melodia', 'Sucessão.'], ['Harmonia', 'Simultaneidade.'], ['Agostinho', 'Modular bem.']],
  avancado: {
    texto: `<h3>O livro VI de A música</h3>
<p>Os cinco primeiros livros de A música tratam do ritmo e da métrica ${tag('fato')}. No livro VI, Agostinho sobe dos números sonoros aos números da percepção, da memória e do juízo, até os números eternos da Verdade imutável ${tag('fato')}. A música torna-se caminho de ascensão do sensível ao inteligível ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Agostinho, A música, livro VI.', livro: 'agostinho-musica' }],
    exercicios: [
      mc('Os livros I a V de A música tratam de:', ['Ritmo e métrica', 'Harmonia', 'Instrumentos', 'Liturgia'], 0, 'Estrutura.'),
      mc('O livro VI sobe até:', ['Os números eternos', 'Os instrumentos', 'A dança', 'A política'], 0, 'Ascensão.'),
      mc('A música, no livro VI, é caminho do:', ['Sensível ao inteligível', 'Inteligível ao sensível', 'Corpo à matéria', 'Nada'], 0, 'Interpretação.'),
      disc('Explique a ascensão dos números no livro VI de A música.', ['Números sonoros', 'Percepção e memória', 'Juízo', 'Verdade'])],
  },
}),

aula({
  id: 'mu1-2', titulo: 'O som e a teoria: intervalos, escalas e acordes', duracao: '150 min',
  aprendera: ['Descrever os quatro parâmetros do som', 'Nomear intervalos', 'Construir escalas maiores e menores', 'Formar acordes de três sons'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que certas combinações de notas soam estáveis e outras tensas? Como se organiza o material sonoro da música?</p>
<h3>Parâmetros do som</h3>
<p>Altura (grave ou agudo, ligada à frequência), duração, intensidade (forte ou fraco) e timbre ${tag('fato')}. O lá usado como referência de afinação vibra hoje, por convenção internacional, a 440 Hz ${tag('fato')}.</p>
<h3>Intervalos</h3>
<p>Intervalo é a distância entre duas notas ${tag('fato')}. Do dó ao ré há uma segunda; ao mi, uma terça; ao fá, uma quarta; ao sol, uma quinta; ao dó seguinte, uma oitava ${tag('fato')}. O semitom é o menor intervalo do sistema ocidental usual; o tom vale dois semitons ${tag('fato')}.</p>
<h3>Escalas</h3>
<p>A escala maior segue o padrão tom–tom–semitom–tom–tom–tom–semitom: dó, ré, mi, fá, sol, lá, si, dó ${tag('fato')}. A escala menor natural segue tom–semitom–tom–tom–semitom–tom–tom: lá, si, dó, ré, mi, fá, sol, lá ${tag('fato')}.</p>
<h3>Acordes</h3>
<p>A tríade maior empilha uma terça maior e uma terça menor (dó–mi–sol); a menor, terça menor e maior (lá–dó–mi) ${tag('fato')}. Os acordes sobre o I, IV e V graus (tônica, subdominante, dominante) sustentam boa parte da música tonal ${tag('fato')}.</p>
<h3>Nomes das notas</h3>
<p>Os nomes ut (depois dó), ré, mi, fá, sol, lá vêm das sílabas iniciais dos versos do hino a São João Batista Ut queant laxis, usado por Guido d'Arezzo no século XI ${tag('fato')}.</p>`,
  vocabulario: [
    ['Altura', 'Qualidade do som grave ou agudo, ligada à frequência.'],
    ['Intervalo', 'Distância entre duas notas.'],
    ['Semitom', 'Menor intervalo do sistema ocidental usual.'],
    ['Escala', 'Sequência ordenada de notas segundo um padrão de intervalos.'],
    ['Tríade', 'Acorde de três sons sobrepostos em terças.'],
  ],
  exemplos: `<p><strong>Sol maior:</strong> aplicando o padrão T–T–S–T–T–T–S a partir de sol: sol, lá, si, dó, ré, mi, fá♯, sol. O fá precisa de sustenido para que entre mi e fá haja um tom e entre fá e sol um semitom. É por isso que sol maior tem um sustenido na armadura.</p>`,
  contexto: `<p><strong>No mundo:</strong> a referência lá = 440 Hz foi recomendada por uma conferência internacional em 1939 e depois por norma ISO ${tag('fato')}. <strong>No Brasil:</strong> a música popular brasileira, como a bossa nova, usa amplamente acordes com sétimas e nonas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a teoria ajuda a ouvir', tag: 'argumento',
    premissas: ['Percebemos melhor o que sabemos nomear e distinguir.', 'A teoria dá nomes e relações para o que ouvimos (intervalos, acordes, funções).', 'Logo, ela educa a escuta.'],
    conclusao: 'Logo, estudar teoria não substitui ouvir, mas aprofunda a audição.',
    nota: 'A teoria descreve práticas; não é regra imposta de fora à música.',
  },
  objecoes: [
    { objecao: 'Grandes músicos populares não estudaram teoria; ela é inútil.', tag: 'debate',
      resposta: 'Muitos aprenderam de ouvido, e isso é real conhecimento musical. Mas a teoria permite comunicar, registrar, ensinar e compreender o que se faz. Os dois caminhos se completam.' },
  ],
  aplicacao: `<p>Escreva as escalas de dó maior, sol maior, fá maior e lá menor; identifique dez intervalos; forme as tríades de I, IV e V em dó maior.</p>`,
  fonte: {
    obra: 'Guido d\'Arezzo, carta ao monge Miguel (Epistola de ignoto cantu), sobre o hino Ut queant laxis', link: null,
    orientacao: `<p>Observe o método proposto para aprender cantos desconhecidos a partir de uma melodia memorizada.</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro parâmetros do som?', r: 'Altura, duração, intensidade e timbre.' },
    { p: 'Qual o padrão da escala maior?', r: 'T–T–S–T–T–T–S.' },
    { p: 'Como se forma a tríade maior?', r: 'Terça maior e terça menor sobrepostas (ex.: dó–mi–sol).' },
  ],
  exercicios: [
    mc('De dó a sol há uma:', ['Terça', 'Quarta', 'Quinta', 'Sexta'], 2, 'Contagem.'),
    mc('Sol maior tem na armadura:', ['Fá♯', 'Si♭', 'Dó♯', 'Nada'], 0, 'Padrão.'),
    mc('A tríade de lá menor é:', ['Lá–dó–mi', 'Lá–dó♯–mi', 'Lá–ré–fá', 'Lá–si–dó'], 0, 'Terça menor.'),
    mc('O tom vale:', ['Dois semitons', 'Um semitom', 'Três semitons', 'Meio semitom'], 0, 'Definição.'),
    mc('Os nomes das notas vêm do hino:', ['Ut queant laxis', 'Te Deum', 'Salve Regina', 'Veni Creator'], 0, 'Guido.'),
    disc('Faça as escalas, intervalos e tríades da aplicação.', ['Escalas', 'Intervalos', 'Tríades', 'Correção']),
  ],
  resumo: ['Altura, duração, intensidade, timbre.', 'Intervalos e semitom.', 'Escala maior e menor.', 'Tríades e funções I, IV, V.', 'Ut queant laxis.'],
  referencias: [
    { texto: 'Guido d\'Arezzo, Micrologus (c. 1026).' },
    { texto: 'Arnold Schoenberg, Harmonia (1911).' },
    { texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os exercícios', 'Ler a fonte indicada'],
  revisao: [['T–T–S–T–T–T–S', 'Maior.'], ['Dó–mi–sol', 'Tríade maior.'], ['440 Hz', 'Lá.']],
  avancado: {
    texto: `<h3>Série harmônica</h3>
<p>Uma corda ou coluna de ar vibra não só na frequência fundamental, mas também em múltiplos dela (2f, 3f, 4f...), os harmônicos ${tag('fato')}. Os primeiros harmônicos formam oitava (2:1), quinta (3:2) e quarta (4:3) acima, as razões dos pitagóricos ${tag('fato')}. A mistura de harmônicos de cada instrumento contribui para seu timbre ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jean-Philippe Rameau, Tratado de harmonia (1722).' }],
    exercicios: [
      mc('O segundo harmônico vibra a:', ['2f', 'f/2', '3f', 'f'], 0, 'Múltiplo.'),
      mc('Entre o 2º e o 3º harmônicos há uma:', ['Quinta', 'Oitava', 'Terça', 'Segunda'], 0, '3:2.'),
      mc('A mistura de harmônicos contribui para o:', ['Timbre', 'Ritmo', 'Compasso', 'Andamento'], 0, 'Cor.'),
      disc('Calcule os cinco primeiros harmônicos de uma nota de 110 Hz e nomeie os intervalos entre eles.', ['Frequências', 'Razões', 'Intervalos', 'Comentário'])],
  },
}),

aula({
  id: 'mu1-3', titulo: 'Ler e escrever música: pauta, figuras e compassos', duracao: '150 min',
  aprendera: ['Ler notas nas claves de sol e de fá', 'Reconhecer figuras de duração', 'Entender compasso e andamento', 'Escrever uma melodia simples'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como registrar a música para que outros a executem sem tê-la ouvido?</p>
<h3>Pauta e claves</h3>
<p>A pauta tem cinco linhas e quatro espaços ${tag('fato')}. A clave de sol na segunda linha indica que nela está o sol acima do dó central; a clave de fá na quarta linha indica o fá abaixo dele ${tag('fato')}. Guido d'Arezzo é associado ao uso sistemático de linhas para fixar alturas ${tag('fato')}.</p>
<h3>Figuras</h3>
<p>Semibreve (4 tempos em compasso de semínima), mínima (2), semínima (1), colcheia (1/2), semicolcheia (1/4) ${tag('fato')}. Cada figura tem a pausa correspondente ${tag('fato')}. O ponto de aumento acrescenta metade do valor ${tag('fato')}.</p>
<h3>Compasso</h3>
<p>O compasso agrupa os tempos: 2/4 (binário), 3/4 (ternário, como a valsa), 4/4 (quaternário) ${tag('fato')}. O número de cima indica quantos tempos; o de baixo, a figura que vale um tempo ${tag('fato')}.</p>
<h3>Andamento e dinâmica</h3>
<p>Termos italianos indicam o andamento (largo, adagio, andante, allegro, presto) e a dinâmica (piano, forte, crescendo) ${tag('fato')}. O metrônomo indica batidas por minuto ${tag('fato')}.</p>`,
  vocabulario: [
    ['Pauta', 'Conjunto de cinco linhas e quatro espaços.'],
    ['Clave', 'Sinal que fixa o nome das notas na pauta.'],
    ['Semínima', 'Figura que vale um tempo em compassos de denominador 4.'],
    ['Compasso', 'Agrupamento regular de tempos.'],
    ['Andamento', 'Velocidade da música.'],
  ],
  exemplos: `<p><strong>Parabéns a você:</strong> a melodia começa em anacruse (antes do primeiro tempo forte) e está em compasso ternário. Batendo palmas, percebe-se o tempo forte a cada três. Escrever a melodia exige decidir tonalidade, compasso e figuras de cada nota.</p>`,
  contexto: `<p><strong>No mundo:</strong> a notação moderna resulta de uma evolução de séculos, dos neumas medievais à partitura atual ${tag('fato')}. <strong>No Brasil:</strong> conservatórios e escolas de música ensinam a leitura musical, e bandas de música mantêm tradição de formação no interior do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a notação libertou a música', tag: 'argumento',
    premissas: ['Sem notação, a música depende da memória e da transmissão direta.', 'A notação permite registrar obras longas e complexas e executá-las em outros lugares e épocas.', 'A polifonia elaborada depende de coordenar várias vozes por escrito.'],
    conclusao: 'Logo, a notação tornou possível a grande música escrita do Ocidente.',
    nota: 'Tradições orais continuam ricas e legítimas; a notação é um meio, não o único.',
  },
  objecoes: [
    { objecao: 'A partitura não é a música; aprender a ler atrapalha o ouvido.', tag: 'debate',
      resposta: 'A partitura é registro, não a obra soando. Lida sem ouvir, empobrece; unida à escuta e ao canto, educa o ouvido. O ideal é ler cantando.' },
  ],
  aplicacao: `<p>Leia e cante (ou toque) três melodias simples em clave de sol; escreva uma melodia de oito compassos em 4/4, em dó maior, terminando na tônica.</p>`,
  fonte: {
    obra: 'Guido d\'Arezzo, Micrologus, sobre a disposição das notas', link: null,
    orientacao: `<p>Observe a preocupação pedagógica de Guido em tornar a leitura mais rápida para os cantores.</p>`,
  },
  perguntas: [
    { p: 'Quantas linhas tem a pauta?', r: 'Cinco.' },
    { p: 'O que indica 3/4?', r: 'Três tempos por compasso, com a semínima valendo um tempo.' },
    { p: 'O que faz o ponto de aumento?', r: 'Acrescenta metade do valor da figura.' },
  ],
  exercicios: [
    mc('Em 4/4, a mínima vale:', ['1 tempo', '2 tempos', '4 tempos', '1/2 tempo'], 1, 'Figuras.'),
    mc('A semínima pontuada vale:', ['1,5 tempo', '2 tempos', '1 tempo', '3 tempos'], 0, 'Ponto.'),
    mc('A valsa é em compasso:', ['Binário', 'Ternário', 'Quaternário', 'Livre'], 1, '3/4.'),
    mc('Allegro indica andamento:', ['Lento', 'Rápido', 'Muito lento', 'Variável'], 1, 'Italiano.'),
    mc('A clave de sol fica na:', ['Segunda linha', 'Quarta linha', 'Primeira linha', 'Terceira linha'], 0, 'Clave.'),
    disc('Leia as três melodias e escreva a sua melodia de oito compassos.', ['Leitura', 'Compasso', 'Figuras', 'Conclusão na tônica']),
  ],
  resumo: ['Pauta e claves.', 'Figuras e pausas.', 'Ponto de aumento.', 'Compassos.', 'Andamento e dinâmica.'],
  referencias: [
    { texto: 'Guido d\'Arezzo, Micrologus (c. 1026).' },
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a leitura e a melodia', 'Ler a fonte indicada'],
  revisao: [['5 linhas', 'Pauta.'], ['3/4', 'Ternário.'], ['Ponto', '+ metade.']],
  avancado: {
    texto: `<h3>Os neumas</h3>
<p>Os primeiros manuscritos de canto gregoriano usavam neumas, sinais sobre o texto que indicavam o movimento da melodia, mas não alturas exatas ${tag('fato')}. As linhas de pauta permitiram fixar as alturas ${tag('fato')}. A notação quadrada, ainda usada nos livros de canto gregoriano, usa uma pauta de quatro linhas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre o canto gregoriano.' }],
    exercicios: [
      mc('Os neumas indicavam:', ['O movimento da melodia', 'Alturas exatas', 'Acordes', 'Andamento metronômico'], 0, 'Notação antiga.'),
      mc('A pauta do canto gregoriano tem:', ['Quatro linhas', 'Cinco linhas', 'Seis linhas', 'Duas linhas'], 0, 'Notação quadrada.'),
      mc('As linhas de pauta permitiram fixar:', ['Alturas', 'Timbres', 'Dinâmicas', 'Textos'], 0, 'Guido.'),
      disc('Compare a notação gregoriana e a moderna num mesmo trecho de canto.', ['Pauta', 'Sinais', 'Ritmo', 'Leitura'])],
  },
}),

aula({
  id: 'mu1-4', titulo: 'Escuta ativa e análise de forma', duracao: '150 min',
  aprendera: ['Praticar a escuta ativa com roteiro', 'Reconhecer formas binária, ternária e rondó', 'Reconhecer tema e variações', 'Registrar uma análise com minutagem'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Ouvir música enquanto se faz outra coisa é diferente de escutá-la. Como escutar de modo atento e compreender a construção de uma peça?</p>
<h3>Escuta ativa</h3>
<p>Escutar ativamente é ouvir várias vezes com perguntas: que instrumentos? que andamento e compasso? onde começam e terminam as seções? o que se repete? o que contrasta? ${tag('interpretacao')}</p>
<h3>Formas</h3>
<p>Binária (A–B): duas seções contrastantes, comum em danças barrocas ${tag('fato')}. Ternária (A–B–A): exposição, contraste e retorno ${tag('fato')}. Rondó (A–B–A–C–A...): um refrão que volta entre episódios ${tag('fato')}. Tema e variações: um tema seguido de versões modificadas ${tag('fato')}.</p>
<h3>Recursos</h3>
<p>Repetição, contraste e variação são os princípios básicos da forma ${tag('interpretacao')}. Cadências funcionam como pontuação musical, marcando finais de frases ${tag('fato')}.</p>
<h3>Registro</h3>
<p>Uma análise registra a minutagem de cada seção, os elementos que a caracterizam e as relações entre elas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Escuta ativa', 'Escuta atenta guiada por perguntas.'],
    ['Forma ternária', 'Estrutura A–B–A.'],
    ['Rondó', 'Forma com refrão recorrente entre episódios.'],
    ['Variação', 'Versão modificada de um tema.'],
    ['Cadência', 'Fórmula que conclui uma frase musical.'],
  ],
  exemplos: `<p><strong>Mozart, Ah, vous dirai-je, maman (K. 265):</strong> o tema conhecido no Brasil como "Brilha, brilha, estrelinha" é seguido de doze variações. Na escuta, o tema permanece reconhecível enquanto mudam o ritmo, a ornamentação, o modo (há uma variação em menor) e o andamento.</p>`,
  contexto: `<p><strong>No mundo:</strong> rádios e plataformas de música erudita oferecem guias de escuta comentada ${tag('fato')}. <strong>No Brasil:</strong> orquestras como a Osesp mantêm programas educacionais de concertos didáticos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a forma importa para a escuta', tag: 'argumento',
    premissas: ['Uma peça se desenrola no tempo, e só a memória une seus momentos.', 'Reconhecer a forma organiza a memória da escuta.', 'Uma escuta organizada percebe relações que a escuta distraída perde.'],
    conclusao: 'Logo, conhecer a forma enriquece a experiência musical.',
    nota: 'Agostinho já notava, nas Confissões (XI), que recitar um canto envolve memória, atenção e expectativa.',
  },
  objecoes: [
    { objecao: 'Analisar a música mata a emoção.', tag: 'debate',
      resposta: 'Uma análise fria pode distanciar, mas a experiência comum de músicos é a oposta: compreender a construção aumenta o encanto. A análise é um momento; a escuta integral volta depois, mais rica.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise a forma de três peças (uma binária ou ternária, um rondó e um tema com variações) com roteiro de escuta e minutagem.</p>`,
  fonte: {
    obra: 'Santo Agostinho, Confissões, livro XI, cap. 28 (recitar um salmo: memória, atenção e expectativa)', link: null,
    orientacao: `<p>Observe como Agostinho descreve a experiência de um canto que se desenrola no tempo.</p>`,
  },
  perguntas: [
    { p: 'O que é escuta ativa?', r: 'Escuta atenta guiada por perguntas, repetida várias vezes.' },
    { p: 'Qual a estrutura do rondó?', r: 'Refrão recorrente entre episódios (A–B–A–C–A...).' },
    { p: 'Quais os princípios básicos da forma?', r: 'Repetição, contraste e variação.' },
  ],
  exercicios: [
    mc('A–B–A é forma:', ['Binária', 'Ternária', 'Rondó', 'Livre'], 1, 'Retorno.'),
    mc('O tema de K. 265 de Mozart é conhecido no Brasil como:', ['Brilha, brilha, estrelinha', 'Parabéns a você', 'Atirei o pau no gato', 'Ciranda cirandinha'], 0, 'Variações.'),
    mc('A cadência funciona como:', ['Pontuação', 'Timbre', 'Andamento', 'Clave'], 0, 'Final de frase.'),
    mc('No rondó, o que volta é o:', ['Refrão', 'Episódio', 'Andamento', 'Instrumento'], 0, 'A.'),
    mc('Agostinho analisa a escuta no livro:', ['XI das Confissões', 'I de A música', 'XIX da Cidade de Deus', 'II do Livre-arbítrio'], 0, 'Tempo.'),
    disc('Analise as três peças com roteiro e minutagem.', ['Seções', 'Minutagem', 'Elementos', 'Forma']),
  ],
  resumo: ['Escuta ativa.', 'Binária, ternária, rondó.', 'Tema e variações.', 'Repetição, contraste, variação.', 'Registro com minutagem.'],
  referencias: [
    { texto: 'Santo Agostinho, Confissões, livro XI.', livro: 'agostinho-confissoes' },
    { texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960).' },
    { texto: 'Arnold Schoenberg, Harmonia (1911).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as três análises', 'Ler a fonte indicada'],
  revisao: [['A–B–A', 'Ternária.'], ['Rondó', 'Refrão.'], ['Cadência', 'Pontuação.']],
  avancado: {
    texto: `<h3>A forma sonata</h3>
<p>A forma sonata, típica dos primeiros movimentos de sinfonias e sonatas clássicas, tem exposição (dois temas em tonalidades diferentes), desenvolvimento (elaboração e modulações) e reexposição (os temas voltam na tonalidade principal) ${tag('fato')}. Pode ter introdução e coda ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Donald J. Grout e Claude V. Palisca, História da música ocidental (1960), capítulo sobre o Classicismo.' }],
    exercicios: [
      mc('As três partes da forma sonata são:', ['Exposição, desenvolvimento, reexposição', 'A, B, A', 'Tema e variações', 'Introdução, refrão, coda'], 0, 'Estrutura.'),
      mc('Na reexposição, os temas voltam na tonalidade:', ['Principal', 'Da dominante', 'Relativa', 'Qualquer'], 0, 'Retorno.'),
      mc('O desenvolvimento costuma ter:', ['Modulações', 'Silêncio', 'Só o primeiro tema exato', 'Nada'], 0, 'Elaboração.'),
      disc('Analise o primeiro movimento da Pequena serenata noturna (K. 525) de Mozart segundo a forma sonata.', ['Exposição', 'Desenvolvimento', 'Reexposição', 'Minutagem'])],
  },
}),

avaliacao('mu1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os elementos da música, a teoria básica, a notação e as formas, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Escreva de memória as escalas de dó, sol e fá maior.</li><li>Ouça de novo uma das peças analisadas.</li></ul>`,
[
  disc('Escreva a escala de ré maior, forme as tríades de I, IV e V, e escreva uma frase de quatro compassos em 3/4 que termine na tônica.', ['Escala', 'Tríades', 'Compasso', 'Cadência']),
  disc('Analise a forma de uma peça à sua escolha com minutagem e relacione a experiência da escuta com a descrição de Agostinho no livro XI das Confissões.', ['Forma', 'Minutagem', 'Agostinho', 'Síntese']),
]),
];
