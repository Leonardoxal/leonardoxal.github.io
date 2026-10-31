// História da Arte I — o que é arte, vocabulário visual, técnicas e métodos (etapas 1 a 3 do percurso de História da Arte).
// Arte, belo e contexto; linha, cor, composição e perspectiva; técnicas e arquitetura; análise formal, iconografia e fontes.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ha1-1', titulo: 'O que é arte e o que estuda a história da arte', duracao: '150 min',
  aprendera: ['Explicar a arte como fazer bem feito segundo a tradição', 'Conhecer as condições do belo em Tomás de Aquino', 'Distinguir obra, artista, encomenda e contexto', 'Distinguir arte sacra e arte profana'],
  prereq: ['Degrau 0: método de estudo', 'Estética (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Uma catedral, um retrato, um vaso grego, uma instalação contemporânea: por que todos são chamados "arte"? E o que se estuda quando se estuda sua história?</p>
<h3>Arte como fazer</h3>
<p>Na tradição clássica, arte (<em>ars</em>, <em>techne</em>) é a reta razão no fazer: o saber que orienta a produção de uma obra bem feita ${tag('fato')}. Tomás de Aquino a define como "a reta razão das coisas a fazer" (recta ratio factibilium) ${tag('fato')}. Maritain retomou essa noção em Arte e escolástica (1920), lembrando que o artista, como artista, visa o bem da obra ${tag('interpretacao')}.</p>
<h3>O belo</h3>
<p>Tomás aponta três condições do belo: integridade (inteireza), proporção (harmonia) e clareza (esplendor da forma) (Suma Teológica I, q. 39, a. 8) ${tag('doutrina')}. Belo é o que agrada ao ser contemplado ${tag('fato')}.</p>
<h3>O que estuda a história da arte</h3>
<p>A história da arte estuda obras em seu tempo: quem as fez, para quem, com que técnica, com que função e com que significado ${tag('fato')}. A maior parte das obras antes da época moderna foi feita por encomenda — de igrejas, mosteiros, príncipes, confrarias — para usos definidos ${tag('fato')}.</p>
<h3>Sagrado e profano</h3>
<p>A arte sacra é destinada ao culto e à oração; a arte religiosa trata de temas religiosos fora do culto; a profana, de temas seculares ${tag('interpretacao')}. O Concílio Vaticano II chamou a arte sacra de ápice da arte religiosa (Sacrosanctum Concilium, 122) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Arte', 'Reta razão no fazer; saber que orienta a produção de uma obra.'],
    ['Belo', 'O que agrada ao ser contemplado; integridade, proporção e clareza.'],
    ['Encomenda', 'Pedido de uma obra por um patrono, com finalidade definida.'],
    ['Arte sacra', 'Arte destinada ao culto e à oração.'],
    ['Patrono', 'Pessoa ou instituição que encomenda e financia a obra.'],
  ],
  exemplos: `<p><strong>Um retábulo:</strong> o retábulo do altar de uma igreja colonial foi encomendado por uma irmandade, executado por entalhadores e douradores, pago em parcelas registradas em livros de despesas, e servia para emoldurar a celebração da Missa. Estudar sua história é reconstruir tudo isso — e não só dizer se é bonito.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra "artista" no sentido moderno, distinto de "artesão", consolidou-se a partir do Renascimento ${tag('interpretacao')}. <strong>No Brasil:</strong> irmandades leigas foram grandes encomendantes de arte no período colonial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o contexto é indispensável para entender uma obra', tag: 'argumento',
    premissas: ['Uma obra foi feita para uma função, um lugar e um público.', 'Fora desse contexto, elementos essenciais perdem sentido (um gesto litúrgico, um símbolo, uma posição no edifício).', 'O museu muitas vezes retira a obra de seu lugar original.'],
    conclusao: 'Logo, compreender uma obra exige reconstruir seu contexto original.',
    nota: 'A experiência estética direta continua importante: contexto e contemplação se completam.',
  },
  objecoes: [
    { objecao: 'Arte é questão de gosto; não há o que estudar.', tag: 'debate',
      resposta: 'O gosto pessoal existe, mas obras têm propriedades observáveis (composição, técnica, iconografia) e histórias documentadas. Pode-se discutir com razões por que uma obra é bem feita. A tradição sustenta que o belo tem fundamento no objeto, não só no sujeito.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva uma obra de arte de sua cidade (pintura, escultura, edifício) identificando obra, autor, data, encomenda e função, separando o que é fato documentado do que é opinião.</p>`,
  fonte: {
    obra: 'Jacques Maritain, Arte e escolástica (1920), caps. 4 e 5; João Paulo II, Carta aos artistas (1999)', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Em Maritain, a definição de arte e o bem da obra. Na Carta, a relação entre beleza e vocação do artista.</p>`,
  },
  perguntas: [
    { p: 'Como Tomás define a arte?', r: 'Como a reta razão das coisas a fazer.' },
    { p: 'Quais as três condições do belo segundo Tomás?', r: 'Integridade, proporção e clareza.' },
    { p: 'O que é arte sacra?', r: 'Arte destinada ao culto e à oração.' },
  ],
  exercicios: [
    mc('"Recta ratio factibilium" é definição de:', ['Prudência', 'Arte', 'Ciência', 'Fé'], 1, 'Tomás.'),
    mc('As condições do belo estão na Suma I, q.:', ['2', '39', '90', '113'], 1, 'Art. 8.'),
    mc('Arte e escolástica é de:', ['Gilson', 'Maritain', 'Gombrich', 'Vasari'], 1, '1920.'),
    mc('A arte sacra como ápice da arte religiosa está na:', ['Sacrosanctum Concilium, 122', 'Lumen gentium', 'Rerum novarum', 'Dei Verbum'], 0, 'Concílio.'),
    mc('Grandes encomendantes de arte no Brasil colonial:', ['Irmandades leigas', 'Bancos', 'Partidos', 'Universidades'], 0, 'Patronos.'),
    disc('Descreva uma obra de sua cidade com obra, autor, data, encomenda e função, separando fato e opinião.', ['Dados', 'Função', 'Fato e opinião', 'Fontes']),
  ],
  resumo: ['Arte: reta razão no fazer.', 'Belo: integridade, proporção, clareza.', 'Obra, artista, encomenda, contexto.', 'Arte sacra, religiosa, profana.', 'SC 122.'],
  referencias: [
    { texto: 'Jacques Maritain, Arte e escolástica (1920).', livro: 'maritain-arte' },
    { texto: 'João Paulo II, Carta aos artistas (1999).', livro: 'jp2-artistas' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I, q. 39, a. 8.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição da obra', 'Ler as fontes indicadas'],
  revisao: [['Recta ratio', 'Arte.'], ['Três condições', 'Belo.'], ['Encomenda', 'Contexto.']],
  avancado: {
    texto: `<h3>Beleza e transcendentais</h3>
<p>Na tradição escolástica, o ser, o uno, o verdadeiro e o bom são transcendentais, propriedades de todo ente; muitos tomistas incluem também o belo, como esplendor conjunto do verdadeiro e do bom ${tag('debate')}. João Paulo II, na Carta aos artistas, retoma a ideia de que a beleza é de certo modo a expressão visível do bem ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Carta aos artistas (1999), n. 3.', livro: 'jp2-artistas' }],
    exercicios: [
      mc('Os transcendentais clássicos incluem:', ['Ser, uno, verdadeiro e bom', 'Cor, linha e forma', 'Fé, esperança e caridade', 'Tempo e espaço'], 0, 'Escolástica.'),
      mc('A inclusão do belo entre os transcendentais é:', ['Consenso absoluto', 'Debatida entre tomistas', 'Rejeitada por todos', 'Dogma'], 1, 'Debate.'),
      mc('Para a Carta aos artistas, a beleza exprime visivelmente o:', ['Bem', 'Lucro', 'Poder', 'Acaso'], 0, 'N. 3.'),
      disc('Discuta se o belo é um transcendental, com um argumento a favor e um contra.', ['Tese', 'A favor', 'Contra', 'Avaliação'])],
  },
}),

aula({
  id: 'ha1-2', titulo: 'Vocabulário visual: linha, cor, luz, composição e perspectiva', duracao: '150 min',
  aprendera: ['Descrever uma imagem com vocabulário preciso', 'Distinguir cores primárias, complementares, quentes e frias', 'Reconhecer a perspectiva linear e o claro-escuro', 'Analisar a composição de uma obra'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Diante de um quadro, muita gente só consegue dizer "gostei" ou "não gostei". Um vocabulário preciso permite ver mais e dizer o que se vê.</p>
<h3>Linha e forma</h3>
<p>A linha pode ser contorno, direção ou movimento; linhas verticais sugerem estabilidade e elevação, diagonais sugerem movimento ${tag('interpretacao')}. Formas podem ser geométricas ou orgânicas, planas ou modeladas em volume ${tag('fato')}.</p>
<h3>Cor</h3>
<p>Na tradição dos pintores, as cores primárias de pigmento são vermelho, amarelo e azul; complementares são as opostas no círculo cromático (vermelho e verde, azul e laranja) ${tag('fato')}. Cores quentes (vermelhos, laranjas) parecem avançar; frias (azuis, verdes) parecem recuar ${tag('interpretacao')}.</p>
<h3>Luz</h3>
<p>O claro-escuro (chiaroscuro) modela volumes pelo contraste de luz e sombra; Caravaggio levou-o ao extremo, com fundos escuros e luz dirigida ${tag('fato')}.</p>
<h3>Perspectiva</h3>
<p>A perspectiva linear, com linhas convergindo para um ponto de fuga, foi demonstrada por Filippo Brunelleschi em Florença, por volta de 1415–1420, e exposta por Leon Battista Alberti em Da pintura (1435) ${tag('fato')}. A perspectiva atmosférica representa a distância por cores mais pálidas e azuladas ${tag('fato')}.</p>
<h3>Composição</h3>
<p>Composição é a organização dos elementos no espaço: eixos, simetria, triângulos, diagonais, centro de interesse ${tag('fato')}. Muitas pinturas do Renascimento organizam as figuras em composição piramidal ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ponto de fuga', 'Ponto para onde convergem as linhas paralelas na perspectiva.'],
    ['Claro-escuro', 'Modelagem do volume pelo contraste de luz e sombra.'],
    ['Cores complementares', 'Cores opostas no círculo cromático.'],
    ['Composição', 'Organização dos elementos na superfície ou no espaço.'],
    ['Perspectiva atmosférica', 'Representação da distância por cores mais pálidas.'],
  ],
  exemplos: `<p><strong>A Última Ceia de Leonardo:</strong> as linhas do teto e das paredes convergem para a cabeça de Cristo, ponto de fuga e centro da composição; a janela atrás dele forma uma espécie de auréola de luz; os apóstolos em grupos de três criam ritmo. A forma conduz o olhar ao sentido.</p>`,
  contexto: `<p><strong>No mundo:</strong> a perspectiva linear transformou a pintura europeia a partir do século XV ${tag('fato')}. <strong>No Brasil:</strong> forros de igrejas barrocas, como o de Mestre Ataíde na igreja de São Francisco de Assis em Ouro Preto, usam perspectiva ilusionista ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nomear é ver melhor', tag: 'argumento',
    premissas: ['Percebemos melhor aquilo para o qual temos conceitos.', 'O vocabulário visual chama a atenção para linha, cor, luz e composição.', 'Quem descreve com precisão observa mais e pode justificar seu juízo.'],
    conclusao: 'Logo, aprender o vocabulário da arte educa o olhar.',
    nota: 'É a aplicação, nas artes, do princípio de que a linguagem orienta a atenção.',
  },
  objecoes: [
    { objecao: 'Analisar a forma esfria a emoção diante da arte.', tag: 'argumento',
      resposta: 'A análise pode tornar a emoção mais profunda, porque mostra por que a obra comove. Quem entende a composição de uma Pietà não a sente menos. Análise e contemplação se alimentam mutuamente.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário ilustrado de 20 termos de arte e arquitetura, com definição e um exemplo de obra para cada um.</p>`,
  fonte: {
    obra: 'Leon Battista Alberti, Da pintura (1435), livro I', link: null,
    orientacao: `<p>Observe como Alberti descreve a pintura como uma janela e explica a construção da perspectiva.</p>`,
  },
  perguntas: [
    { p: 'Quem demonstrou a perspectiva linear em Florença?', r: 'Filippo Brunelleschi.' },
    { p: 'O que é claro-escuro?', r: 'Modelagem do volume pelo contraste de luz e sombra.' },
    { p: 'Quais são complementares do vermelho e do azul?', r: 'Verde e laranja.' },
  ],
  exercicios: [
    mc('Da pintura, de Alberti, é de:', ['1335', '1435', '1550', '1915'], 1, 'Perspectiva.'),
    mc('O pintor famoso pelo claro-escuro dramático é:', ['Caravaggio', 'Fra Angelico', 'Giotto', 'Monet'], 0, 'Luz dirigida.'),
    mc('Linhas paralelas na perspectiva convergem para o:', ['Centro geométrico', 'Ponto de fuga', 'Horizonte inferior', 'Canto'], 1, 'Definição.'),
    mc('Cores que parecem recuar:', ['Quentes', 'Frias', 'Primárias', 'Neutras'], 1, 'Interpretação.'),
    mc('O forro da São Francisco de Assis de Ouro Preto é de:', ['Mestre Ataíde', 'Portinari', 'Debret', 'Tarsila'], 0, 'Barroco mineiro.'),
    disc('Monte o glossário ilustrado de 20 termos com definição e exemplo.', ['Termos', 'Definições', 'Exemplos', 'Precisão']),
  ],
  resumo: ['Linha, forma, cor, luz, composição.', 'Complementares; quentes e frias.', 'Claro-escuro (Caravaggio).', 'Perspectiva: Brunelleschi, Alberti (1435).', 'Composição piramidal.'],
  referencias: [
    { texto: 'Leon Battista Alberti, Da pintura (1435).' },
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
    { texto: 'Cennino Cennini, O livro da arte (c. 1400).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler a fonte indicada'],
  revisao: [['Ponto de fuga', 'Perspectiva.'], ['Chiaroscuro', 'Luz e sombra.'], ['Pirâmide', 'Composição.']],
  avancado: {
    texto: `<h3>Perspectiva e verdade</h3>
<p>Erwin Panofsky, em A perspectiva como forma simbólica (1927), sustentou que a perspectiva linear não é simplesmente a visão natural, mas uma construção cultural ligada a uma concepção do espaço ${tag('interpretacao')}. Outros autores insistem em sua base óptica e geométrica ${tag('debate')}. Ícones bizantinos usam outra lógica espacial, por vezes chamada "perspectiva inversa" ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Erwin Panofsky, A perspectiva como forma simbólica (1927).' }],
    exercicios: [
      mc('A perspectiva como forma simbólica é de:', ['Panofsky', 'Alberti', 'Vasari', 'Gombrich'], 0, '1927.'),
      mc('Para Panofsky, a perspectiva é também:', ['Construção cultural', 'Erro', 'Ilusão sem regra', 'Invenção grega'], 0, 'Interpretação.'),
      mc('Ícones bizantinos usam por vezes:', ['Perspectiva inversa', 'Fotografia', 'Ponto de fuga único', 'Cubismo'], 0, 'Outra lógica.'),
      disc('Compare o espaço de um ícone bizantino e o de uma pintura renascentista.', ['Ícone', 'Renascimento', 'Diferenças', 'Sentido'])],
  },
}),

aula({
  id: 'ha1-3', titulo: 'Técnicas e materiais: pintura, escultura e arquitetura', duracao: '150 min',
  aprendera: ['Distinguir afresco, têmpera e óleo', 'Conhecer técnicas de escultura', 'Identificar elementos arquitetônicos', 'Reconhecer as ordens clássicas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que certas pinturas medievais brilham em dourado e as do Renascimento tardio têm transições suaves? Por que as catedrais góticas podem ter paredes de vidro? A técnica explica muito da forma.</p>
<h3>Pintura</h3>
<p>No afresco, o pigmento é aplicado sobre reboco úmido e se fixa ao secar, exigindo trabalho rápido por áreas (as "jornadas") ${tag('fato')}. Na têmpera, o pigmento é misturado a um aglutinante como a gema de ovo; seca rápido e permite detalhes finos ${tag('fato')}. A pintura a óleo, desenvolvida e difundida nos Países Baixos no século XV, permite camadas transparentes (veladuras) e transições suaves ${tag('fato')}.</p>
<h3>Escultura</h3>
<p>A escultura pode ser por subtração (talhar pedra ou madeira) ou por adição e fundição (modelar em barro e fundir em bronze) ${tag('fato')}. O relevo é preso a um fundo; a escultura de vulto é vista de vários lados ${tag('fato')}. No Brasil colonial, a imaginária em madeira policromada e a pedra-sabão foram muito usadas ${tag('fato')}.</p>
<h3>Arquitetura</h3>
<p>O arco distribui o peso para os lados; a abóbada é um arco prolongado; a cúpula, um arco girado ${tag('fato')}. No gótico, o arco ogival, a abóbada de nervuras e os arcobotantes levam o peso para fora, permitindo paredes altas e grandes vitrais ${tag('fato')}.</p>
<h3>Ordens clássicas</h3>
<p>As ordens gregas são a dórica (capitel simples), a jônica (volutas) e a coríntia (folhas de acanto) ${tag('fato')}. Vitrúvio as descreveu em Dez livros de arquitetura ${tag('fato')}.</p>`,
  vocabulario: [
    ['Afresco', 'Pintura sobre reboco úmido.'],
    ['Têmpera', 'Pintura com pigmento aglutinado em gema de ovo.'],
    ['Veladura', 'Camada fina e transparente de tinta a óleo.'],
    ['Arcobotante', 'Arco externo que transmite o empuxo da abóbada a um contraforte.'],
    ['Capitel', 'Parte superior da coluna, que distingue as ordens.'],
  ],
  exemplos: `<p><strong>Identificando uma coluna:</strong> capitel liso em forma de almofada — dórica; com duas volutas em espiral — jônica; com folhas de acanto — coríntia. Prédios públicos brasileiros do século XIX e XX, como teatros e tribunais, usam frequentemente essas ordens.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Capela Sistina tem afrescos de Michelangelo no teto (1508–1512) ${tag('fato')}. <strong>No Brasil:</strong> o Aleijadinho esculpiu os profetas de pedra-sabão do adro do Santuário de Bom Jesus de Matosinhos, em Congonhas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a técnica condiciona a forma', tag: 'argumento',
    premissas: ['Cada material e técnica tem possibilidades e limites (secagem, peso, transparência).', 'O artista trabalha dentro desses limites e tira partido deles.', 'Por isso estilos de época acompanham inovações técnicas.'],
    conclusao: 'Logo, conhecer a técnica é condição para entender a forma de uma obra.',
    nota: 'O gótico é exemplo claro: a estrutura de arcobotantes torna possíveis os vitrais.',
  },
  objecoes: [
    { objecao: 'A técnica é coisa de artesão; o que importa é a ideia do artista.', tag: 'argumento',
      resposta: 'Na tradição, arte é justamente o saber fazer: a ideia só existe na obra através da técnica. Separar ideia e execução é uma visão moderna e parcial. Os grandes mestres eram também grandes técnicos.' },
  ],
  aplicacao: `<p>Visite (ou estude por fotos) um edifício histórico de sua região e identifique três elementos arquitetônicos e a técnica de uma obra de pintura ou escultura que ele contém.</p>`,
  fonte: {
    obra: 'Vitrúvio, Dez livros de arquitetura, livros III e IV; Cennino Cennini, O livro da arte (c. 1400)', link: null,
    orientacao: `<p>Em Vitrúvio, a descrição das ordens. Em Cennini, as receitas da têmpera e do afresco.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre afresco e têmpera?', r: 'O afresco é pintado sobre reboco úmido; a têmpera usa pigmento com gema de ovo sobre suporte seco.' },
    { p: 'Para que servem os arcobotantes?', r: 'Para levar o peso da abóbada para fora, permitindo paredes altas e vitrais.' },
    { p: 'Como se reconhece a ordem coríntia?', r: 'Pelo capitel com folhas de acanto.' },
  ],
  exercicios: [
    mc('Pintar sobre reboco úmido é:', ['Têmpera', 'Afresco', 'Óleo', 'Aquarela'], 1, 'Técnica.'),
    mc('O aglutinante da têmpera tradicional é:', ['Óleo de linhaça', 'Gema de ovo', 'Água pura', 'Cera'], 1, 'Cennini.'),
    mc('Capitel com volutas:', ['Dórico', 'Jônico', 'Coríntio', 'Toscano'], 1, 'Ordens.'),
    mc('O teto da Capela Sistina foi pintado em:', ['1408–1412', '1508–1512', '1608–1612', '1708–1712'], 1, 'Michelangelo.'),
    mc('Os profetas de Congonhas são de:', ['Mármore', 'Pedra-sabão', 'Bronze', 'Madeira'], 1, 'Aleijadinho.'),
    disc('Identifique três elementos arquitetônicos e a técnica de uma obra num edifício histórico de sua região.', ['Edifício', 'Elementos', 'Técnica', 'Fontes']),
  ],
  resumo: ['Afresco, têmpera, óleo.', 'Escultura: talhe e fundição; relevo e vulto.', 'Arco, abóbada, cúpula, arcobotante.', 'Ordens dórica, jônica, coríntia.', 'Técnica condiciona forma.'],
  referencias: [
    { texto: 'Vitrúvio, Dez livros de arquitetura.' },
    { texto: 'Cennino Cennini, O livro da arte (c. 1400).' },
    { texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do edifício', 'Ler as fontes indicadas'],
  revisao: [['Afresco', 'Reboco úmido.'], ['Arcobotante', 'Gótico.'], ['Acanto', 'Coríntio.']],
  avancado: {
    texto: `<h3>Exames científicos de obras</h3>
<p>Radiografias e reflectografia infravermelha revelam desenhos preparatórios e alterações sob a camada pictórica (os "arrependimentos") ${tag('fato')}. A análise de pigmentos e a dendrocronologia de painéis de madeira ajudam a datar e autenticar obras ${tag('fato')}. Esses exames complementam, mas não substituem, a análise histórica e documental ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ernst H. Gombrich, A história da arte (1950).' }],
    exercicios: [
      mc('Alterações sob a pintura são chamadas:', ['Arrependimentos', 'Veladuras', 'Jornadas', 'Capitéis'], 0, 'Pentimenti.'),
      mc('A dendrocronologia data:', ['Pigmentos', 'Madeira', 'Pedra', 'Bronze'], 1, 'Anéis.'),
      mc('Os exames científicos:', ['Substituem a história', 'Complementam a análise documental', 'São inúteis', 'Só servem a falsários'], 1, 'Interpretação.'),
      disc('Explique como exames científicos podem ajudar a atribuir uma obra.', ['Exames', 'O que revelam', 'Limites', 'Exemplo'])],
  },
}),

aula({
  id: 'ha1-4', titulo: 'Como se estuda uma obra: análise formal, iconografia, iconologia e fontes', duracao: '150 min',
  aprendera: ['Aplicar a análise formal', 'Aplicar os três níveis de Panofsky', 'Usar fontes documentais para atribuir e datar', 'Separar descrição e interpretação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como sair do "gostei" para uma leitura fundamentada de uma obra?</p>
<h3>Análise formal</h3>
<p>A análise formal descreve como a obra está feita: composição, linha, cor, luz, espaço, técnica ${tag('fato')}. Heinrich Wölfflin, em Conceitos fundamentais da história da arte (1915), comparou Renascimento e Barroco por pares de conceitos, como linear e pictórico, plano e profundidade ${tag('fato')}.</p>
<h3>Os três níveis de Panofsky</h3>
<p>Erwin Panofsky, em Estudos de iconologia (1939), distinguiu: o nível pré-iconográfico (o que se vê: um homem, uma mesa, pão); o iconográfico (o tema, identificado por textos: a Última Ceia); e o iconológico (o significado na cultura da época) ${tag('fato')}. Cada nível exige fontes próprias: a experiência visual, os textos (Bíblia, vidas de santos, Legenda Áurea) e os documentos da época ${tag('fato')}.</p>
<h3>Fontes documentais</h3>
<p>Contratos de encomenda, recibos, inventários, cartas e descrições de época permitem atribuir e datar obras ${tag('fato')}. No Brasil, livros de irmandades e processos do IPHAN são fontes importantes ${tag('fato')}.</p>
<h3>Descrição e interpretação</h3>
<p>Um bom estudo separa o que se vê, o que se identifica com base em textos e o que se interpreta com base em contexto, citando as fontes de cada passo ${tag('argumento')}. Atribuir significados sem documento é especulação ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Análise formal', 'Descrição de como a obra está feita.'],
    ['Pré-iconográfico', 'Nível do que se vê, sem identificar o tema.'],
    ['Iconografia', 'Identificação do tema pelas fontes textuais.'],
    ['Iconologia', 'Interpretação do significado na cultura da época.'],
    ['Atribuição', 'Identificação do autor de uma obra.'],
  ],
  exemplos: `<p><strong>Uma mulher com uma roda:</strong> nível pré-iconográfico: mulher jovem com coroa, palma e uma roda quebrada. Iconográfico: pela Legenda Áurea, é Santa Catarina de Alexandria, mártir, com a roda de seu suplício. Iconológico: a devoção a ela entre estudantes e filósofos, por sua sabedoria na tradição. Cada passo com sua fonte.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Legenda Áurea, de Jacopo de Varazze (século XIII), foi fonte central para a iconografia dos santos ${tag('fato')}. <strong>No Brasil:</strong> a pesquisa em arquivos de irmandades permitiu atribuir obras do barroco mineiro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a iconografia exige textos', tag: 'argumento',
    premissas: ['Um atributo (roda, chave, leão) só identifica um santo se conhecemos a história a que se refere.', 'Essas histórias estão em textos: Bíblia, vidas de santos, liturgia.', 'Sem os textos, a imagem fica muda ou é mal interpretada.'],
    conclusao: 'Logo, a iconografia é inseparável do conhecimento das fontes textuais.',
    nota: 'Por isso a história da arte cristã exige familiaridade com a Escritura e a tradição.',
  },
  objecoes: [
    { objecao: 'Cada pessoa pode interpretar a obra como quiser.', tag: 'debate',
      resposta: 'O espectador pode ter impressões pessoais, mas o significado histórico de uma obra se estabelece com fontes. Dizer que a roda é "símbolo da liberdade" quando os textos mostram que é instrumento de martírio é erro, não interpretação alternativa.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise uma obra (pintura ou escultura sacra) nos três níveis de Panofsky, indicando as fontes de cada nível.</p>`,
  fonte: {
    obra: 'Erwin Panofsky, Estudos de iconologia (1939), introdução', link: null,
    orientacao: `<p>Leia a explicação dos três níveis e o exemplo do cumprimento com o chapéu.</p>`,
  },
  perguntas: [
    { p: 'Quais os três níveis de Panofsky?', r: 'Pré-iconográfico, iconográfico e iconológico.' },
    { p: 'Que fonte medieval é central para a iconografia dos santos?', r: 'A Legenda Áurea.' },
    { p: 'Por que separar descrição e interpretação?', r: 'Para que cada afirmação tenha sua fonte e não se confunda especulação com fato.' },
  ],
  exercicios: [
    mc('Conceitos fundamentais da história da arte é de:', ['Wölfflin', 'Panofsky', 'Vasari', 'Alberti'], 0, '1915.'),
    mc('Identificar que a cena é a Última Ceia é nível:', ['Pré-iconográfico', 'Iconográfico', 'Iconológico', 'Formal'], 1, 'Tema.'),
    mc('Os Estudos de iconologia são de:', ['1915', '1927', '1939', '1950'], 2, 'Panofsky.'),
    mc('A Legenda Áurea é de:', ['Jacopo de Varazze', 'Vasari', 'Tomás', 'Agostinho'], 0, 'Século XIII.'),
    mc('Contratos de encomenda servem para:', ['Atribuir e datar', 'Pintar', 'Restaurar', 'Nada'], 0, 'Fontes.'),
    disc('Analise uma obra sacra nos três níveis de Panofsky, com as fontes de cada nível.', ['Pré-iconográfico', 'Iconográfico', 'Iconológico', 'Fontes']),
  ],
  resumo: ['Análise formal; Wölfflin (1915).', 'Panofsky (1939): três níveis.', 'Legenda Áurea e textos.', 'Fontes: contratos, inventários, IPHAN.', 'Descrição ≠ interpretação.'],
  referencias: [
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
    { texto: 'Heinrich Wölfflin, Conceitos fundamentais da história da arte (1915).' },
    { texto: 'Jacopo de Varazze, Legenda Áurea (século XIII).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise em três níveis', 'Ler a fonte indicada'],
  revisao: [['Três níveis', 'Panofsky.'], ['Legenda Áurea', 'Santos.'], ['Fontes', 'Atribuição.']],
  avancado: {
    texto: `<h3>Os pares de Wölfflin</h3>
<p>Wölfflin propôs cinco pares: linear e pictórico, plano e profundidade, forma fechada e aberta, multiplicidade e unidade, clareza absoluta e relativa, para contrastar o Renascimento clássico e o Barroco ${tag('fato')}. Seu método foi criticado por tratar estilos como evolução autônoma das formas, sem considerar encomendantes e funções ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Heinrich Wölfflin, Conceitos fundamentais da história da arte (1915).' }],
    exercicios: [
      mc('Um dos pares de Wölfflin é:', ['Linear e pictórico', 'Rico e pobre', 'Sagrado e profano', 'Antigo e novo'], 0, 'Formal.'),
      mc('Wölfflin contrasta principalmente:', ['Renascimento e Barroco', 'Egito e Grécia', 'Gótico e Românico', 'Modernismo e Pop'], 0, 'Estilos.'),
      mc('Uma crítica ao método é ignorar:', ['As formas', 'Encomendantes e funções', 'As cores', 'As datas'], 1, 'Debate.'),
      disc('Aplique dois pares de Wölfflin a uma obra renascentista e uma barroca.', ['Obras', 'Pares', 'Comparação', 'Limites'])],
  },
}),

avaliacao('ha1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o conceito de arte, o vocabulário visual, técnicas e métodos de análise, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário ilustrado.</li><li>Releia sua análise em três níveis.</li></ul>`,
[
  disc('Analise uma obra nos três níveis de Panofsky, incluindo uma análise formal (composição, cor, luz, técnica), e indique as fontes de cada afirmação.', ['Análise formal', 'Iconografia', 'Iconologia', 'Fontes']),
  disc('Explique o que é arte e o belo segundo a tradição (Tomás, Maritain), e mostre como isso orienta o estudo de uma obra concreta.', ['Arte', 'Belo', 'Obra concreta', 'Distinções']),
]),
];
