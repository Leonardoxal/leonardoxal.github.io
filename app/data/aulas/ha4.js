// História da Arte IV — os grandes campos (etapa 8 do percurso de História da Arte).
// Arquitetura sacra; pintura de Giotto a Caravaggio; escultura de Fídias a Bernini; arte no Brasil.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ha4-1', titulo: 'Arquitetura sacra: da basílica à igreja moderna', duracao: '150 min',
  aprendera: ['Identificar as partes de uma igreja', 'Distinguir plantas longitudinal e central', 'Acompanhar a evolução da arquitetura sacra', 'Avaliar igrejas modernas com critérios litúrgicos'],
  prereq: ['História da Arte III (módulo HA3)'],
  explicacao: `
<h3>O problema</h3>
<p>Uma igreja não é só um prédio grande: sua forma diz algo sobre o culto que acolhe. Como a arquitetura sacra mudou ao longo dos séculos?</p>
<h3>As partes</h3>
<p>Na planta tradicional, o fiel entra pelo nártex, percorre a nave, eventualmente cruza o transepto e se dirige ao presbitério, com o altar, terminado na abside ${tag('fato')}. Muitas igrejas antigas eram orientadas, com a abside voltada para o oriente, símbolo de Cristo que vem ${tag('fato')}.</p>
<h3>Plantas</h3>
<p>A planta longitudinal (basilical) sugere caminho; a planta central (circular, octogonal, cruz grega) sugere reunião em torno de um centro ${tag('interpretacao')}. O Renascimento valorizou a planta central como imagem da perfeição; Bramante projetou a nova São Pedro em cruz grega, e Michelangelo desenhou sua cúpula ${tag('fato')}.</p>
<h3>Evolução</h3>
<p>Da basílica paleocristã ao românico, com abóbadas maciças; do gótico, com luz e verticalidade, ao Barroco, com movimento, curvas e talha dourada ${tag('fato')}. No século XX, Le Corbusier construiu a capela de Ronchamp (1955), e no Brasil Oscar Niemeyer projetou a igreja de São Francisco de Assis da Pampulha (1943) e a Catedral de Brasília (inaugurada em 1970) ${tag('fato')}.</p>
<h3>Critérios</h3>
<p>A Sacrosanctum Concilium pede que as igrejas sejam aptas à celebração e à participação dos fiéis (n. 124) ${tag('doutrina')}. Ratzinger insistiu no simbolismo da orientação e da verticalidade ${tag('interpretacao')}. Avaliar uma igreja moderna exige perguntar se ela serve ao culto e eleva à oração, além da originalidade formal ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Nave', 'Espaço principal onde ficam os fiéis.'],
    ['Transepto', 'Braço transversal que dá à planta a forma de cruz.'],
    ['Presbitério', 'Área do altar, reservada ao clero na celebração.'],
    ['Abside', 'Extremidade semicircular atrás do altar.'],
    ['Planta central', 'Planta organizada em torno de um centro.'],
  ],
  exemplos: `<p><strong>Lendo uma igreja colonial:</strong> fachada com frontão e torres; nave única com altares laterais; arco-cruzeiro separando o presbitério; capela-mor com retábulo dourado e trono para a exposição do Santíssimo. A planta longitudinal conduz o olhar e o passo até o altar.</p>`,
  contexto: `<p><strong>No mundo:</strong> a basílica de São Pedro, em Roma, levou mais de um século para ser construída (1506–1626) ${tag('fato')}. <strong>No Brasil:</strong> a igreja da Pampulha, com painéis de Portinari, só foi consagrada em 1959, após resistência à sua forma inovadora ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a forma de uma igreja não é indiferente', tag: 'argumento',
    premissas: ['O espaço orienta o corpo, a atenção e a percepção de quem entra.', 'A liturgia tem estrutura própria: entrada, escuta, oferta, comunhão, envio.', 'Um espaço coerente com essa estrutura favorece a participação e a oração.'],
    conclusao: 'Logo, a arquitetura sacra deve ser pensada a partir da liturgia, e não só da estética ou do custo.',
    nota: 'A tradição oferece soluções testadas, mas a Igreja não impõe um estilo único (SC 123).',
  },
  objecoes: [
    { objecao: 'Igreja moderna é sempre pior que igreja antiga.', tag: 'debate',
      resposta: 'Há igrejas modernas que servem bem ao culto e elevam à oração, e outras criticadas por parecer salões funcionais. O critério não é a data, mas a adequação litúrgica, a beleza e a capacidade de significar o sagrado. Juízo caso a caso.' },
  ],
  aplicacao: `<p>Desenhe a planta da igreja que você frequenta, identifique suas partes e avalie, com a SC 124 e o critério da orientação, como o espaço serve à liturgia.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Sacrosanctum Concilium (1963), n. 124; Joseph Ratzinger, Introdução ao espírito da liturgia (2000), parte sobre o espaço sagrado', link: null,
    orientacao: `<p>Compare os critérios do Concílio com a reflexão de Ratzinger sobre orientação e verticalidade.</p>`,
  },
  perguntas: [
    { p: 'O que é o transepto?', r: 'O braço transversal que dá à planta a forma de cruz.' },
    { p: 'Que igreja de Niemeyer foi feita em 1943?', r: 'A de São Francisco de Assis da Pampulha.' },
    { p: 'O que pede a SC 124 sobre as igrejas?', r: 'Que sejam aptas à celebração e à participação dos fiéis.' },
  ],
  exercicios: [
    mc('A extremidade semicircular atrás do altar é a:', ['Nave', 'Abside', 'Nártex', 'Torre'], 1, 'Partes.'),
    mc('A capela de Ronchamp é de:', ['Niemeyer', 'Le Corbusier', 'Gaudí', 'Bramante'], 1, '1955.'),
    mc('A Catedral de Brasília foi inaugurada em:', ['1960', '1970', '1980', '1990'], 1, 'Niemeyer.'),
    mc('A nova São Pedro foi projetada inicialmente por:', ['Bramante', 'Bernini', 'Brunelleschi', 'Alberti'], 0, 'Cruz grega.'),
    mc('Igrejas orientadas têm a abside voltada para:', ['O norte', 'O oriente', 'O mar', 'A praça'], 1, 'Simbolismo.'),
    disc('Desenhe a planta da sua igreja e avalie como o espaço serve à liturgia.', ['Planta', 'Partes', 'Critérios', 'Avaliação']),
  ],
  resumo: ['Nártex, nave, transepto, presbitério, abside.', 'Plantas longitudinal e central.', 'Basílica → gótico → barroco → moderno.', 'Ronchamp (1955), Pampulha (1943), Brasília (1970).', 'Critério: liturgia (SC 124).'],
  referencias: [
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000).' },
    { texto: 'Vitrúvio, Dez livros de arquitetura.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a planta e a avaliação', 'Ler as fontes indicadas'],
  revisao: [['Abside', 'Atrás do altar.'], ['Pampulha', '1943.'], ['SC 124', 'Liturgia.']],
  avancado: {
    texto: `<h3>A igreja de ouro da Bahia</h3>
<p>A igreja e convento de São Francisco de Salvador, construída sobretudo na primeira metade do século XVIII, tem interior quase inteiramente recoberto de talha dourada ${tag('fato')}. É um dos exemplos mais exuberantes do barroco luso-brasileiro ${tag('interpretacao')}. A talha dourada expressava a glória do céu e a riqueza oferecida a Deus ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Germain Bazin, A arquitetura religiosa barroca no Brasil.' }],
    exercicios: [
      mc('A "igreja de ouro" fica em:', ['Ouro Preto', 'Salvador', 'Recife', 'Rio de Janeiro'], 1, 'São Francisco.'),
      mc('Seu interior é recoberto de:', ['Mármore', 'Talha dourada', 'Azulejos apenas', 'Concreto'], 1, 'Barroco.'),
      mc('A talha dourada expressava:', ['A glória do céu', 'Pobreza', 'Indiferença', 'Modernidade'], 0, 'Interpretação.'),
      disc('Compare o interior da igreja de São Francisco de Salvador com o de uma igreja moderna.', ['Espaço', 'Materiais', 'Sentido', 'Avaliação'])],
  },
}),

aula({
  id: 'ha4-2', titulo: 'Pintura: de Giotto a Caravaggio', duracao: '150 min',
  aprendera: ['Reconhecer as inovações de Giotto', 'Conhecer a pintura de Fra Angelico', 'Analisar obras de Leonardo e Rafael', 'Analisar a luz e o realismo de Caravaggio'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Em três séculos, a pintura italiana transformou a imagem sagrada. Que mestres marcaram essa transformação?</p>
<h3>Giotto</h3>
<p>Giotto di Bondone deu às figuras volume, peso e emoção, rompendo com a rigidez bizantina; na Capela Scrovegni, em Pádua (c. 1305), o Lamento sobre Cristo morto mostra dor contida e composição dirigida ao rosto de Cristo ${tag('fato')}.</p>
<h3>Fra Angelico</h3>
<p>Fra Angelico, frade dominicano beatificado em 1982, pintou os afrescos do convento de São Marcos, em Florença (c. 1440), com cenas da vida de Cristo nas celas, para a meditação dos frades ${tag('fato')}. Une clareza renascentista e serenidade contemplativa ${tag('interpretacao')}.</p>
<h3>Leonardo e Rafael</h3>
<p>Leonardo da Vinci desenvolveu o sfumato — passagens suaves de luz e sombra sem contornos duros — e a composição da Última Ceia (c. 1495–1498) ${tag('fato')}. Rafael pintou nas Salas do Vaticano a Disputa do Santíssimo Sacramento e a Escola de Atenas (1509–1511), harmonizando fé e filosofia ${tag('fato')}.</p>
<h3>Caravaggio</h3>
<p>Caravaggio, na Vocação de São Mateus (1599–1600), usou luz dirigida e figuras do povo, com Cristo apontando para Mateus num ambiente de taberna ${tag('fato')}. Seu realismo e claro-escuro dramático influenciaram toda a pintura barroca ${tag('fato')}.</p>`,
  vocabulario: [
    ['Sfumato', 'Transição suave de luz e sombra sem contornos duros (Leonardo).'],
    ['Tenebrismo', 'Uso extremo de fundos escuros e luz dirigida (Caravaggio).'],
    ['Lamento', 'Cena do pranto sobre Cristo morto.'],
    ['Salas do Vaticano', 'Salas decoradas por Rafael para o papa Júlio II.'],
    ['Pintura devocional', 'Pintura destinada a favorecer a oração.'],
  ],
  exemplos: `<p><strong>A luz como narração:</strong> na Vocação de São Mateus, a luz entra pela direita, acompanhando o gesto de Cristo, e incide sobre Mateus, que aponta para si como quem pergunta "eu?". A luz pintada é ao mesmo tempo física e teológica: é a graça que chama.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Vocação de São Mateus está na igreja de São Luís dos Franceses, em Roma, em seu lugar original ${tag('fato')}. <strong>No Brasil:</strong> a pintura colonial brasileira recebeu influência de gravuras europeias, que circulavam como modelos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a pintura sacra pode ser teologia', tag: 'argumento',
    premissas: ['A pintura sacra representa mistérios da fé por meio de forma, cor e luz.', 'Escolhas formais (onde está a luz, quem olha para quem) transmitem sentido.', 'Assim, uma pintura pode interpretar e ensinar a fé.'],
    conclusao: 'Logo, a grande pintura sacra é também uma forma de teologia visual.',
    nota: 'Por isso Gregório Magno chamava as imagens de "Bíblia dos iletrados".',
  },
  objecoes: [
    { objecao: 'Caravaggio era um homem violento; sua arte não pode ser sacra.', tag: 'debate',
      resposta: 'Caravaggio teve vida turbulenta, inclusive um homicídio. Mas a qualidade e a adequação de uma obra sacra se julgam pela obra, que foi aceita e encomendada por igrejas. A distinção entre artista e obra, feita por Maritain, ajuda aqui.' },
  ],
  aplicacao: `<p>Escolha uma pintura sacra de um dos mestres estudados e faça uma análise completa: formal (composição, luz, cor), iconográfica (tema e textos) e iconológica (contexto e função).</p>`,
  fonte: {
    obra: 'Giorgio Vasari, Vidas (1550/1568), vidas de Giotto e de Fra Angelico', link: null,
    orientacao: `<p>Observe o que Vasari valoriza em cada um e distinga dado, lenda e juízo.</p>`,
  },
  perguntas: [
    { p: 'O que Giotto trouxe de novo?', r: 'Volume, peso e emoção às figuras.' },
    { p: 'O que é sfumato?', r: 'Transição suave de luz e sombra sem contornos duros.' },
    { p: 'Onde está a Vocação de São Mateus?', r: 'Na igreja de São Luís dos Franceses, em Roma.' },
  ],
  exercicios: [
    mc('A Capela Scrovegni fica em:', ['Florença', 'Pádua', 'Roma', 'Assis'], 1, 'Giotto.'),
    mc('Fra Angelico foi beatificado em:', ['1882', '1950', '1982', '2000'], 2, 'Dominicano.'),
    mc('A Escola de Atenas é de:', ['Leonardo', 'Rafael', 'Michelangelo', 'Caravaggio'], 1, 'Salas do Vaticano.'),
    mc('O tenebrismo é associado a:', ['Caravaggio', 'Giotto', 'Fra Angelico', 'Rafael'], 0, 'Luz dirigida.'),
    mc('"Bíblia dos iletrados" é expressão atribuída a:', ['Gregório Magno', 'Tomás', 'Vasari', 'Alberti'], 0, 'Imagens.'),
    disc('Faça a análise completa de uma pintura sacra de um dos mestres estudados.', ['Formal', 'Iconográfica', 'Iconológica', 'Fontes']),
  ],
  resumo: ['Giotto: volume e emoção (c. 1305).', 'Fra Angelico: São Marcos (c. 1440).', 'Leonardo: sfumato; Rafael: Salas.', 'Caravaggio: Vocação de São Mateus (1599–1600).', 'Pintura sacra como teologia visual.'],
  referencias: [
    { texto: 'Giorgio Vasari, Vidas (1550/1568).' },
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
    { texto: 'Étienne Gilson, Pintura e realidade (1957).', livro: 'gilson-pintura' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise completa', 'Ler a fonte indicada'],
  revisao: [['Giotto', 'Pádua.'], ['Sfumato', 'Leonardo.'], ['Tenebrismo', 'Caravaggio.']],
  avancado: {
    texto: `<h3>A pintura flamenga e o óleo</h3>
<p>Jan van Eyck, com o irmão Hubert, concluiu o Retábulo de Gante (1432), obra-prima da pintura a óleo, com detalhes minuciosos e luz transparente ${tag('fato')}. O painel central, a Adoração do Cordeiro Místico, representa o Apocalipse e a Eucaristia ${tag('fato')}. A técnica flamenga influenciou a Itália ao longo do século XV ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Ernst H. Gombrich, A história da arte (1950), capítulo sobre a pintura flamenga.' }],
    exercicios: [
      mc('O Retábulo de Gante foi concluído em:', ['1305', '1432', '1504', '1600'], 1, 'Van Eyck.'),
      mc('Seu painel central é a:', ['Última Ceia', 'Adoração do Cordeiro Místico', 'Anunciação', 'Crucifixão'], 1, 'Apocalipse.'),
      mc('A técnica característica é o:', ['Afresco', 'Óleo', 'Mosaico', 'Vitral'], 1, 'Flamengos.'),
      disc('Analise a iconografia eucarística do painel do Cordeiro Místico.', ['Elementos', 'Textos', 'Teologia', 'Fontes'])],
  },
}),

aula({
  id: 'ha4-3', titulo: 'Escultura: de Fídias a Bernini e ao Aleijadinho', duracao: '150 min',
  aprendera: ['Reconhecer o ideal clássico na escultura grega', 'Analisar a Pietà e o Davi de Michelangelo', 'Analisar o Êxtase de Santa Teresa de Bernini', 'Analisar os profetas de Congonhas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A escultura dá corpo à forma no espaço real. Como ela exprimiu o ideal humano e o sagrado ao longo dos séculos?</p>
<h3>Grécia</h3>
<p>Fídias dirigiu a decoração escultórica do Partenon (século V a.C.) ${tag('fato')}. Policleto, no Doríforo, fixou um cânone de proporções; a escultura clássica buscou o equilíbrio entre naturalidade e ideal ${tag('fato')}.</p>
<h3>Michelangelo</h3>
<p>Na Pietà de São Pedro (1498–1499), única obra que Michelangelo assinou, a Virgem jovem e serena sustenta o Cristo morto numa composição piramidal ${tag('fato')}. O Davi (1501–1504), em Florença, mostra o herói antes do combate, em tensão concentrada ${tag('fato')}. Michelangelo dizia libertar a figura já contida no bloco de mármore ${tag('interpretacao')}.</p>
<h3>Bernini</h3>
<p>Gian Lorenzo Bernini, no Êxtase de Santa Teresa (1647–1652), na capela Cornaro em Roma, uniu escultura, arquitetura e luz natural para representar a experiência mística descrita por Santa Teresa em sua Vida ${tag('fato')}. É exemplo do Barroco como integração das artes ${tag('interpretacao')}.</p>
<h3>Aleijadinho</h3>
<p>Antônio Francisco Lisboa esculpiu em pedra-sabão os doze profetas do adro do Santuário de Bom Jesus de Matosinhos, em Congonhas (c. 1800–1805), e dirigiu as figuras de madeira dos Passos da Paixão ${tag('fato')}. Suas figuras têm expressividade marcante, com olhos amendoados e gestos teatrais ${tag('interpretacao')}. O conjunto é Patrimônio Mundial da UNESCO desde 1985 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Cânone', 'Sistema de proporções ideais da figura humana.'],
    ['Pietà', 'Representação da Virgem com o Cristo morto.'],
    ['Escultura de vulto', 'Escultura em três dimensões, visível de vários lados.'],
    ['Pedra-sabão', 'Esteatita, pedra macia usada no barroco mineiro.'],
    ['Passos', 'Capelas com cenas da Paixão.'],
  ],
  exemplos: `<p><strong>Três momentos, três sentidos:</strong> o Davi de Donatello (bronze, século XV) é jovem e vitorioso, após o combate; o de Michelangelo, tenso, antes do combate; o de Bernini (1623–1624), em plena ação, girando para lançar a pedra. O mesmo tema mostra três ideias de escultura: repouso, concentração e movimento.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Pietà de São Pedro foi danificada em 1972 por um homem com martelo e restaurada, ficando desde então protegida por vidro ${tag('fato')}. <strong>No Brasil:</strong> os profetas de Congonhas sofrem com a erosão e são objeto de debates sobre conservação ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o Barroco integra as artes', tag: 'argumento',
    premissas: ['O Barroco quis comover e envolver o fiel inteiro, corpo e alma.', 'Para isso, combinou arquitetura, escultura, pintura e luz num único espaço.', 'No Êxtase de Santa Teresa, a luz natural, o mármore e a moldura arquitetônica formam uma só cena.'],
    conclusao: 'Logo, a obra barroca deve ser estudada como conjunto, não como peças isoladas.',
    nota: 'O mesmo vale para os Passos e o adro de Congonhas.',
  },
  objecoes: [
    { objecao: 'O Aleijadinho é uma lenda, e suas obras são de outros.', tag: 'debate',
      resposta: 'Há debate sobre a extensão de sua obra e a participação de oficiais e discípulos, comum nas oficinas da época, e alguns aspectos de sua biografia foram romantizados. Mas documentos, como recibos e registros de irmandades, confirmam sua autoria em obras centrais. Distinguir lenda e documento é o caminho.' },
  ],
  aplicacao: `<p>Analise uma escultura (preferencialmente sacra e brasileira) quanto a material, técnica, composição, tema e função, e compare-a com uma obra europeia de tema semelhante.</p>`,
  fonte: {
    obra: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963); Santa Teresa de Ávila, Livro da Vida, cap. 29 (a transverberação)', link: null,
    orientacao: `<p>Em Bazin, os critérios de atribuição. Em Santa Teresa, o texto que Bernini representou.</p>`,
  },
  perguntas: [
    { p: 'Qual a única obra assinada por Michelangelo?', r: 'A Pietà de São Pedro.' },
    { p: 'Que texto inspirou o Êxtase de Santa Teresa?', r: 'A descrição da própria Santa Teresa em sua Vida.' },
    { p: 'De que material são os profetas de Congonhas?', r: 'Pedra-sabão.' },
  ],
  exercicios: [
    mc('A Pietà de São Pedro é de:', ['1475–1476', '1498–1499', '1501–1504', '1647–1652'], 1, 'Michelangelo.'),
    mc('O Êxtase de Santa Teresa está na:', ['Capela Sistina', 'Capela Cornaro', 'Capela Scrovegni', 'São Marcos'], 1, 'Roma.'),
    mc('Os profetas de Congonhas são:', ['Sete', 'Doze', 'Quatro', 'Vinte'], 1, 'Adro.'),
    mc('O Santuário de Congonhas é Patrimônio Mundial desde:', ['1980', '1985', '1997', '2010'], 1, 'UNESCO.'),
    mc('O Doríforo fixou um cânone de proporções; é de:', ['Fídias', 'Policleto', 'Praxíteles', 'Míron'], 1, 'Grécia.'),
    disc('Analise uma escultura sacra brasileira e compare-a com uma europeia de tema semelhante.', ['Obra brasileira', 'Obra europeia', 'Comparação', 'Fontes']),
  ],
  resumo: ['Fídias e Policleto.', 'Pietà (1498–1499), Davi (1501–1504).', 'Bernini: Êxtase de Santa Teresa (1647–1652).', 'Aleijadinho: profetas (c. 1800–1805).', 'Integração barroca das artes.'],
  referencias: [
    { texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' },
    { texto: 'Giorgio Vasari, Vidas (1568), vida de Michelangelo.' },
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise comparada', 'Ler as fontes indicadas'],
  revisao: [['Pietà', 'Assinada.'], ['Cornaro', 'Bernini.'], ['Congonhas', 'Pedra-sabão.']],
  avancado: {
    texto: `<h3>Os Passos de Congonhas</h3>
<p>As sete capelas dos Passos, no caminho que sobe ao santuário, abrigam 66 figuras de cedro policromado representando cenas da Paixão, esculpidas sob direção do Aleijadinho e pintadas por Ataíde e outros ${tag('fato')}. O percurso conduz o peregrino da Ceia à Crucifixão e culmina no adro com os profetas ${tag('fato')}. É um programa devocional completo, unindo caminho, escultura e paisagem ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' }],
    exercicios: [
      mc('As capelas dos Passos de Congonhas são:', ['Três', 'Sete', 'Doze', 'Catorze'], 1, 'Paixão.'),
      mc('As figuras dos Passos são de:', ['Pedra-sabão', 'Cedro policromado', 'Bronze', 'Mármore'], 1, 'Madeira.'),
      mc('O percurso culmina no:', ['Adro com os profetas', 'Rio', 'Mercado', 'Cemitério'], 0, 'Programa.'),
      disc('Descreva o percurso de Congonhas como programa devocional.', ['Etapas', 'Cenas', 'Sentido', 'Paisagem'])],
  },
}),

aula({
  id: 'ha4-4', titulo: 'Arte no Brasil: do período colonial ao modernismo', duracao: '150 min',
  aprendera: ['Conhecer a arte indígena e as cerâmicas antigas do Brasil', 'Situar o barroco litorâneo e mineiro', 'Conhecer a Missão Artística Francesa e a Academia Imperial', 'Situar o modernismo brasileiro e Portinari'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A arte no Brasil não começou em 1500 nem terminou no barroco. Que capítulos compõem essa história?</p>
<h3>Antes e além da colonização</h3>
<p>Cerâmicas como a marajoara, da ilha de Marajó, produzidas por sociedades indígenas séculos antes da chegada dos europeus, têm decoração geométrica sofisticada ${tag('fato')}. A arte indígena continua viva em pinturas corporais, cestaria e plumária ${tag('fato')}.</p>
<h3>Colônia</h3>
<p>Jesuítas, franciscanos, beneditinos e carmelitas construíram igrejas e colégios; o barroco litorâneo floresceu em Salvador, Recife e Rio de Janeiro ${tag('fato')}. No século XVIII, o ouro de Minas financiou o barroco mineiro, com Aleijadinho e Ataíde ${tag('fato')}.</p>
<h3>Império</h3>
<p>A Missão Artística Francesa, chegada em 1816, trouxe artistas como Jean-Baptiste Debret e Nicolas-Antoine Taunay; a Academia Imperial de Belas Artes foi inaugurada em 1826 ${tag('fato')}. Victor Meirelles pintou A primeira missa no Brasil (1860) e Pedro Américo, Independência ou morte! (1888) ${tag('fato')}.</p>
<h3>Modernismo</h3>
<p>Depois da Semana de 1922, artistas como Tarsila do Amaral, Anita Malfatti e Di Cavalcanti buscaram uma arte brasileira moderna ${tag('fato')}. Candido Portinari pintou a Via Sacra da igreja da Pampulha e os painéis Guerra e Paz para a sede da ONU (1952–1956) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Cerâmica marajoara', 'Cerâmica indígena antiga da ilha de Marajó.'],
    ['Barroco litorâneo', 'Barroco das cidades costeiras (Salvador, Recife, Rio).'],
    ['Missão Artística Francesa', 'Grupo de artistas franceses chegado ao Rio em 1816.'],
    ['Academia Imperial de Belas Artes', 'Instituição de ensino artístico inaugurada em 1826.'],
    ['Pintura histórica', 'Gênero que representa grandes acontecimentos.'],
  ],
  exemplos: `<p><strong>A primeira missa, duas vezes:</strong> Victor Meirelles pintou em 1860 a primeira missa celebrada no Brasil em 1500, baseando-se na carta de Pero Vaz de Caminha. Candido Portinari pintou o mesmo tema em 1948, com linguagem moderna. Comparar as duas mostra como cada época constrói a memória do mesmo acontecimento.</p>`,
  contexto: `<p><strong>No mundo:</strong> os painéis Guerra e Paz de Portinari foram doados pelo Brasil à ONU e ficam em Nova York ${tag('fato')}. <strong>No Brasil:</strong> o Museu Nacional de Belas Artes, no Rio, guarda obras de Meirelles e Pedro Américo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a arte brasileira é síntese', tag: 'argumento',
    premissas: ['O Brasil recebeu modelos europeus, africanos e indígenas.', 'Artistas locais adaptaram esses modelos a materiais, devoções e sensibilidades próprias.', 'O resultado não é cópia, mas síntese original.'],
    conclusao: 'Logo, a arte brasileira deve ser estudada como síntese de tradições, com voz própria.',
    nota: 'O grau de originalidade varia por período e é objeto de debate entre historiadores.',
  },
  objecoes: [
    { objecao: 'A pintura acadêmica do Império é só propaganda oficial sem valor.', tag: 'debate',
      resposta: 'Muitas obras serviam à construção da identidade nacional e ao poder imperial, e isso deve ser analisado criticamente. Mas também mostram grande domínio técnico e são documentos de como o país se via. Julgar só pela função política empobrece a análise.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: estudo comparado de duas obras de períodos diferentes com o mesmo tema (por exemplo, as duas Primeiras Missas, ou uma Pietà colonial e uma moderna), com análise e contexto documentado.</p>`,
  fonte: {
    obra: 'Carta de Pero Vaz de Caminha (1500), passagem da primeira missa', link: null,
    orientacao: `<p>Compare a descrição de Caminha com a pintura de Victor Meirelles: o que o pintor seguiu e o que acrescentou.</p>`,
  },
  perguntas: [
    { p: 'Quando chegou a Missão Artística Francesa?', r: 'Em 1816.' },
    { p: 'Quem pintou A primeira missa no Brasil (1860)?', r: 'Victor Meirelles.' },
    { p: 'Que painéis Portinari fez para a ONU?', r: 'Guerra e Paz.' },
  ],
  exercicios: [
    mc('A cerâmica marajoara vem da ilha de:', ['Marajó', 'Itamaracá', 'Fernando de Noronha', 'Florianópolis'], 0, 'Pará.'),
    mc('A Academia Imperial de Belas Artes foi inaugurada em:', ['1808', '1816', '1826', '1889'], 2, 'Rio de Janeiro.'),
    mc('Independência ou morte! é de:', ['Victor Meirelles', 'Pedro Américo', 'Debret', 'Portinari'], 1, '1888.'),
    mc('Debret veio com a:', ['Missão Artística Francesa', 'Semana de 1922', 'Família real em 1808', 'Bienal'], 0, '1816.'),
    mc('Os painéis Guerra e Paz são de:', ['1922', '1938', '1952–1956', '1970'], 2, 'Portinari.'),
    disc('Compare duas obras brasileiras de períodos diferentes com o mesmo tema.', ['Obras', 'Análise', 'Contexto', 'Comparação']),
  ],
  resumo: ['Cerâmica marajoara; arte indígena viva.', 'Barroco litorâneo e mineiro.', 'Missão Francesa (1816); Academia (1826).', 'Meirelles (1860), Pedro Américo (1888).', 'Modernismo; Portinari.'],
  referencias: [
    { texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' },
    { texto: 'Carta de Pero Vaz de Caminha (1500).' },
    { texto: 'IPHAN, inventários de bens tombados.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o estudo comparado', 'Ler a fonte indicada'],
  revisao: [['1816', 'Missão Francesa.'], ['1860', 'Primeira missa.'], ['Portinari', 'Guerra e Paz.']],
  avancado: {
    texto: `<h3>Debret como documento</h3>
<p>Jean-Baptiste Debret publicou na França a Viagem pitoresca e histórica ao Brasil (1834–1839), com litografias da vida no Rio, inclusive cenas da escravidão ${tag('fato')}. Suas imagens são fontes valiosas, mas exigem crítica: foram feitas por um estrangeiro, com convenções artísticas e escolhas próprias ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jean-Baptiste Debret, Viagem pitoresca e histórica ao Brasil (1834–1839).' }],
    exercicios: [
      mc('A Viagem pitoresca de Debret foi publicada em:', ['1816', '1834–1839', '1860', '1922'], 1, 'França.'),
      mc('Suas litografias mostram inclusive:', ['Cenas da escravidão', 'Brasília', 'A Semana de 1922', 'Indústrias modernas'], 0, 'Rio.'),
      mc('Como fonte histórica, Debret exige:', ['Leitura crítica', 'Aceitação total', 'Rejeição total', 'Nada'], 0, 'Interpretação.'),
      disc('Analise uma litografia de Debret como fonte histórica, com seus limites.', ['Imagem', 'Informações', 'Convenções', 'Limites'])],
  },
}),

avaliacao('ha4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre arquitetura sacra, pintura, escultura e arte no Brasil, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia suas análises de pintura e escultura.</li><li>Releia seu estudo comparado.</li></ul>`,
[
  disc('Faça o estudo comparado de duas obras de períodos diferentes com o mesmo tema, com análise formal, iconográfica e contexto documentado.', ['Obras', 'Análise', 'Contexto', 'Comparação']),
  disc('Descreva a arquitetura e as obras de uma igreja histórica brasileira, situando-a no período e avaliando como serve à liturgia.', ['Arquitetura', 'Obras', 'Período', 'Liturgia']),
]),
];
