// História da Arte II — formação histórica e grandes autores (etapas 4 e 5 do percurso de História da Arte).
// Antiguidade e arte cristã medieval; do Renascimento à arte contemporânea; Vitrúvio, Alberti e Vasari;
// Wölfflin, Panofsky, Gombrich, Maritain e Gilson.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ha2-1', titulo: 'Da Antiguidade à catedral gótica', duracao: '150 min',
  aprendera: ['Reconhecer características da arte egípcia, grega e romana', 'Descrever a arte paleocristã e bizantina', 'Distinguir românico e gótico', 'Explicar a teologia da luz no gótico'],
  prereq: ['História da Arte I (módulo HA1)'],
  explicacao: `
<h3>O problema</h3>
<p>Em três mil anos, a arte ocidental passou das pirâmides às catedrais. O que mudou, e o que permaneceu?</p>
<h3>Egito, Grécia e Roma</h3>
<p>A arte egípcia, sobretudo funerária, seguia convenções estáveis: figuras com cabeça e pernas de perfil e tronco de frente; as pirâmides de Gizé datam de cerca de 2500 a.C. ${tag('fato')}. Na Grécia clássica, a escultura buscou a proporção ideal e o contraposto (peso apoiado numa perna), como no Doríforo de Policleto; o Partenon foi construído entre 447 e 432 a.C. ${tag('fato')}. Roma desenvolveu o arco, a abóbada e o concreto — o Panteão, de cerca de 125 d.C., tem uma cúpula de mais de 43 m de diâmetro — e o retrato realista ${tag('fato')}.</p>
<h3>Arte paleocristã e bizantina</h3>
<p>Nas catacumbas, os cristãos pintaram símbolos e cenas como o Bom Pastor ${tag('fato')}. Depois de 313, surgiram as basílicas, com nave longitudinal e abside ${tag('fato')}. Em Constantinopla, Justiniano consagrou a Santa Sofia em 537; em Ravena, os mosaicos de San Vitale (século VI) mostram a arte bizantina em ouro e cor ${tag('fato')}.</p>
<h3>Românico e gótico</h3>
<p>O românico (séculos XI–XII) tem paredes grossas, arcos plenos e tímpanos esculpidos, ligados às rotas de peregrinação ${tag('fato')}. O gótico nasceu com o coro da abadia de Saint-Denis, consagrado em 1144 sob o abade Suger, que via na luz dos vitrais uma imagem da luz divina, inspirado no Pseudo-Dionísio ${tag('fato')}. Chartres, com seus vitrais, é um exemplo maior ${tag('fato')}.</p>`,
  vocabulario: [
    ['Contraposto', 'Postura com o peso numa perna, dando naturalidade à figura.'],
    ['Basílica', 'Edifício de nave longitudinal com abside, adotado pelas igrejas.'],
    ['Mosaico', 'Imagem formada por pequenas peças de pedra ou vidro (tesselas).'],
    ['Tímpano', 'Espaço semicircular sobre o portal, frequentemente esculpido.'],
    ['Vitral', 'Composição de vidros coloridos unidos por chumbo.'],
  ],
  exemplos: `<p><strong>Dois portais:</strong> no românico de Moissac, o Cristo do tímpano é rígido, monumental, rodeado de figuras do Apocalipse, num portal escuro e maciço. No gótico de Chartres, as estátuas-colunas se tornam mais naturais e o interior se abre em luz colorida. A mudança de estrutura acompanha uma mudança de sensibilidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Santa Sofia foi convertida em mesquita em 1453 e é hoje novamente mesquita desde 2020 ${tag('fato')}. <strong>No Brasil:</strong> igrejas neogóticas do século XIX e XX, como a Catedral da Sé de São Paulo, retomaram formas medievais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o gótico é teologia em pedra e luz', tag: 'argumento',
    premissas: ['Suger concebeu a nova arquitetura para que a luz preenchesse a igreja.', 'Ele via a luz material como caminho para a luz divina, segundo o Pseudo-Dionísio.', 'A estrutura gótica (arcobotantes, nervuras) existe para tornar possível essa luz.'],
    conclusao: 'Logo, a forma gótica expressa uma teologia da luz, e não só uma solução técnica.',
    nota: 'Essa interpretação é apoiada nos escritos do próprio Suger.',
  },
  objecoes: [
    { objecao: 'A arte medieval é tosca porque não sabia representar a realidade.', tag: 'debate',
      resposta: 'A arte medieval tinha objetivos diferentes: tornar visível o sagrado e o simbólico, não imitar a aparência. Os mosaicos de Ravena e os vitrais de Chartres revelam grande domínio técnico. Julgar pelo critério renascentista do realismo é anacronismo.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com uma obra por período (Egito, Grécia, Roma, paleocristão, bizantino, românico, gótico), com data, local e característica principal.</p>`,
  fonte: {
    obra: 'Abade Suger, escritos sobre a consagração da igreja de Saint-Denis (c. 1144–1148)', link: null,
    orientacao: `<p>Observe como Suger descreve a luz dos vitrais e o sentido espiritual da beleza material.</p>`,
  },
  perguntas: [
    { p: 'O que é contraposto?', r: 'Postura com o peso numa perna, dando naturalidade à figura.' },
    { p: 'Quando foi consagrada a Santa Sofia de Justiniano?', r: 'Em 537.' },
    { p: 'Onde e quando nasceu o gótico?', r: 'No coro de Saint-Denis, consagrado em 1144.' },
  ],
  exercicios: [
    mc('O Partenon foi construído entre:', ['2500 e 2400 a.C.', '447 e 432 a.C.', '125 e 130 d.C.', '537 e 540'], 1, 'Atenas.'),
    mc('O Panteão romano é famoso por sua:', ['Torre', 'Cúpula', 'Fachada gótica', 'Pirâmide'], 1, 'c. 125 d.C.'),
    mc('Os mosaicos de San Vitale estão em:', ['Roma', 'Ravena', 'Paris', 'Atenas'], 1, 'Bizantino.'),
    mc('Paredes grossas e arcos plenos caracterizam o:', ['Gótico', 'Românico', 'Barroco', 'Renascimento'], 1, 'Séculos XI–XII.'),
    mc('O abade de Saint-Denis era:', ['Suger', 'Bernardo', 'Tomás', 'Bento'], 0, 'Gótico.'),
    disc('Inicie a linha do tempo da Antiguidade ao gótico com uma obra por período.', ['Obras', 'Datas', 'Características', 'Fontes']),
  ],
  resumo: ['Egito: convenção funerária.', 'Grécia: proporção e contraposto.', 'Roma: arco, cúpula, retrato.', 'Paleocristão e bizantino: catacumbas, basílicas, mosaicos.', 'Românico e gótico; Suger e a luz.'],
  referencias: [
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
    { texto: 'Erwin Panofsky, Arquitetura gótica e escolástica (1951).' },
    { texto: 'Vitrúvio, Dez livros de arquitetura.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Contraposto', 'Grécia.'], ['537', 'Santa Sofia.'], ['1144', 'Saint-Denis.']],
  avancado: {
    texto: `<h3>Gótico e escolástica</h3>
<p>Em Arquitetura gótica e escolástica (1951), Panofsky propôs um paralelo entre a organização das catedrais e a das sumas escolásticas: divisão clara, articulação das partes e conciliação de contrários ${tag('interpretacao')}. A tese é sugestiva, mas criticada por estabelecer analogias difíceis de provar documentalmente ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Erwin Panofsky, Arquitetura gótica e escolástica (1951).' }],
    exercicios: [
      mc('Panofsky compara a catedral gótica às:', ['Sumas escolásticas', 'Pirâmides', 'Basílicas romanas', 'Pinturas a óleo'], 0, 'Analogia.'),
      mc('A obra é de:', ['1915', '1939', '1951', '1963'], 2, 'Panofsky.'),
      mc('Uma crítica à tese é a dificuldade de:', ['Prova documental', 'Ver as catedrais', 'Ler Tomás', 'Datar'], 0, 'Debate.'),
      disc('Avalie a analogia de Panofsky entre catedral e suma, com um argumento a favor e um contra.', ['Tese', 'A favor', 'Contra', 'Avaliação'])],
  },
}),

aula({
  id: 'ha2-2', titulo: 'Do Renascimento à arte contemporânea, com o Brasil', duracao: '150 min',
  aprendera: ['Caracterizar o Renascimento e seus mestres', 'Explicar o Barroco e o decreto de Trento sobre as imagens', 'Situar o barroco brasileiro', 'Situar movimentos modernos e o modernismo brasileiro'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Entre Giotto e Brasília há seis séculos. Que rupturas e continuidades marcam a arte moderna?</p>
<h3>Renascimento</h3>
<p>Giotto, nos afrescos da Capela Scrovegni (c. 1305), deu peso e emoção às figuras ${tag('fato')}. No século XV, Masaccio aplicou a perspectiva na Trindade (c. 1427) e Brunelleschi construiu a cúpula de Florença (1420–1436) ${tag('fato')}. Leonardo, Michelangelo (Pietà, 1498–1499; teto da Sistina, 1508–1512) e Rafael (Escola de Atenas, 1509–1511) marcaram o auge ${tag('fato')}.</p>
<h3>Barroco</h3>
<p>O Concílio de Trento, em 1563, reafirmou o culto das imagens e pediu que fossem claras, decorosas e instruíssem os fiéis ${tag('fato')}. O Barroco usou movimento, luz dramática e integração das artes: Caravaggio na pintura, Bernini na escultura e na colunata de São Pedro ${tag('fato')}.</p>
<h3>Barroco no Brasil</h3>
<p>Em Minas Gerais, no século XVIII, Antônio Francisco Lisboa, o Aleijadinho (c. 1738–1814), e Manuel da Costa Ataíde (1762–1830) produziram obras-primas; a igreja de São Francisco de Assis de Ouro Preto é atribuída ao projeto do Aleijadinho, com pintura do forro de Ataíde ${tag('fato')}.</p>
<h3>Moderno e contemporâneo</h3>
<p>O Impressionismo (primeira exposição em 1874) privilegiou a luz e a impressão momentânea; o Cubismo, com Picasso e Braque, fragmentou a forma; a abstração abandonou a figura ${tag('fato')}. No Brasil, a Semana de Arte Moderna de 1922, Tarsila do Amaral (Abaporu, 1928) e Portinari marcaram o modernismo; Brasília, inaugurada em 1960, com Lucio Costa e Oscar Niemeyer, tornou-se símbolo da arquitetura moderna ${tag('fato')}.</p>`,
  vocabulario: [
    ['Renascimento', 'Retomada de modelos antigos e da perspectiva nos séculos XV–XVI.'],
    ['Barroco', 'Estilo de movimento, luz dramática e integração das artes (séculos XVII–XVIII).'],
    ['Retábulo', 'Estrutura decorada atrás do altar.'],
    ['Impressionismo', 'Movimento centrado na luz e na impressão momentânea.'],
    ['Modernismo brasileiro', 'Renovação artística a partir da Semana de 1922.'],
  ],
  exemplos: `<p><strong>Duas Santas Ceias:</strong> a de Leonardo (c. 1495–1498) é equilibrada, com Cristo no centro geométrico. A de Tintoretto (1592–1594) põe a mesa em diagonal, com luz sobrenatural e anjos. A mesma cena, duas sensibilidades: harmonia renascentista e dinamismo barroco.</p>`,
  contexto: `<p><strong>No mundo:</strong> o termo "Renascimento" foi difundido no século XIX por historiadores como Jacob Burckhardt ${tag('fato')}. <strong>No Brasil:</strong> o conjunto de Ouro Preto foi declarado Patrimônio Mundial pela UNESCO em 1980 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o barroco mineiro é original', tag: 'argumento',
    premissas: ['O barroco chegou ao Brasil pelos modelos portugueses.', 'Em Minas, irmandades leigas, artistas mestiços e materiais locais, como a pedra-sabão, produziram soluções próprias.', 'O Aleijadinho e Ataíde criaram obras sem paralelo exato na Europa.'],
    conclusao: 'Logo, o barroco mineiro é uma expressão original, não uma simples cópia.',
    nota: 'Historiadores debatem a extensão dessa originalidade e o peso das fontes europeias.',
  },
  objecoes: [
    { objecao: 'A arte moderna rompeu totalmente com a tradição.', tag: 'debate',
      resposta: 'Houve rupturas profundas, mas muitos modernos dialogaram com a tradição: Picasso estudou os mestres, e o modernismo brasileiro buscou raízes coloniais e populares. Ruptura e continuidade convivem; o juízo sobre cada obra exige exame caso a caso.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com obras do Renascimento ao contemporâneo, incluindo ao menos três obras brasileiras, com data, autor e característica.</p>`,
  fonte: {
    obra: 'Concílio de Trento, sessão XXV (1563), decreto sobre a invocação dos santos e as sagradas imagens', link: null,
    orientacao: `<p>Observe as razões dadas para o culto das imagens e as exigências de decoro e clareza.</p>`,
  },
  perguntas: [
    { p: 'O que pediu o Concílio de Trento sobre as imagens?', r: 'Que fossem claras, decorosas e instruíssem os fiéis.' },
    { p: 'Quem pintou o forro da São Francisco de Ouro Preto?', r: 'Mestre Ataíde.' },
    { p: 'Quando ocorreu a Semana de Arte Moderna?', r: 'Em 1922.' },
  ],
  exercicios: [
    mc('A Capela Scrovegni foi pintada por:', ['Giotto', 'Masaccio', 'Rafael', 'Caravaggio'], 0, 'c. 1305.'),
    mc('A cúpula de Florença é de:', ['Brunelleschi', 'Bernini', 'Michelangelo', 'Alberti'], 0, '1420–1436.'),
    mc('O decreto de Trento sobre imagens é de:', ['1517', '1563', '1648', '1789'], 1, 'Sessão XXV.'),
    mc('O Abaporu é de:', ['Portinari', 'Tarsila do Amaral', 'Anita Malfatti', 'Di Cavalcanti'], 1, '1928.'),
    mc('Brasília foi inaugurada em:', ['1922', '1945', '1960', '1980'], 2, 'Lucio Costa e Niemeyer.'),
    disc('Complete a linha do tempo do Renascimento ao contemporâneo com três obras brasileiras.', ['Obras', 'Datas', 'Características', 'Brasil']),
  ],
  resumo: ['Giotto, Masaccio, Brunelleschi.', 'Leonardo, Michelangelo, Rafael.', 'Trento (1563) e Barroco.', 'Aleijadinho e Ataíde.', 'Impressionismo, Cubismo; 1922; Brasília (1960).'],
  referencias: [
    { texto: 'Giorgio Vasari, Vidas dos mais excelentes pintores, escultores e arquitetos (1550).' },
    { texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' },
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1563', 'Trento.'], ['Ataíde', 'Forro.'], ['1922', 'Semana.']],
  avancado: {
    texto: `<h3>O Concílio de Trento e a arte</h3>
<p>Após o decreto de 1563, bispos e teólogos escreveram tratados sobre imagens, como o do cardeal Gabriele Paleotti (1582), que pedia verdade histórica, decoro e capacidade de mover à devoção ${tag('fato')}. Historiadores discutem até que ponto esses tratados influenciaram de fato os artistas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Concílio de Trento, sessão XXV (1563).' }],
    exercicios: [
      mc('O tratado de Paleotti sobre imagens é de:', ['1517', '1563', '1582', '1648'], 2, 'Cardeal.'),
      mc('Paleotti pedia imagens com:', ['Verdade, decoro e devoção', 'Abstração', 'Ironia', 'Só ornamento'], 0, 'Critérios.'),
      mc('A influência desses tratados sobre os artistas é:', ['Certa e total', 'Debatida', 'Nula', 'Lei'], 1, 'Debate.'),
      disc('Analise uma obra barroca à luz dos critérios de Trento e de Paleotti.', ['Obra', 'Critérios', 'Análise', 'Limites'])],
  },
}),

aula({
  id: 'ha2-3', titulo: 'Vitrúvio, Alberti e Vasari: os primeiros teóricos e historiadores da arte', duracao: '150 min',
  aprendera: ['Conhecer a tríade de Vitrúvio', 'Conhecer a teoria de Alberti', 'Explicar o projeto de Vasari', 'Avaliar a noção de progresso na arte'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quem começou a escrever sobre arte, e com que ideias? Os primeiros textos ainda moldam o que entendemos por arquitetura, pintura e artista.</p>
<h3>Vitrúvio</h3>
<p>Vitrúvio, arquiteto romano do século I a.C., escreveu Dez livros de arquitetura, único tratado antigo do gênero que sobreviveu completo ${tag('fato')}. Ele afirmou que a arquitetura deve ter solidez (firmitas), utilidade (utilitas) e beleza (venustas) ${tag('fato')}. Relacionou as proporções dos templos às do corpo humano, ideia que inspirou o "Homem vitruviano" de Leonardo ${tag('fato')}.</p>
<h3>Alberti</h3>
<p>Leon Battista Alberti escreveu Da pintura (1435), sobre perspectiva e composição, e Da arte de edificar (1452), sobre arquitetura ${tag('fato')}. Para ele, a beleza é a harmonia de todas as partes, de modo que nada se possa acrescentar ou tirar sem piorar o todo ${tag('fato')}.</p>
<h3>Vasari</h3>
<p>Giorgio Vasari publicou em 1550 (segunda edição em 1568) as Vidas dos mais excelentes pintores, escultores e arquitetos, considerada a fundação da história da arte como gênero ${tag('fato')}. Ele narrou um progresso em três idades, de Cimabue e Giotto até o ápice em Michelangelo ${tag('fato')}. Cunhou noções como "rinascita" e desvalorizou o gótico, que chamava de maneira "dos godos" ${tag('interpretacao')}.</p>
<h3>Avaliação</h3>
<p>A narrativa de progresso de Vasari ajudou a valorizar os artistas, mas distorceu a avaliação de outros períodos, como o medieval ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Firmitas, utilitas, venustas', 'Solidez, utilidade e beleza na arquitetura (Vitrúvio).'],
    ['Homem vitruviano', 'Desenho de Leonardo baseado nas proporções descritas por Vitrúvio.'],
    ['Concinnitas', 'Harmonia das partes na teoria de Alberti.'],
    ['Vidas', 'Obra de Vasari sobre os artistas italianos (1550/1568).'],
    ['Gótico (termo)', 'Nome pejorativo dado por renascentistas à arte medieval.'],
  ],
  exemplos: `<p><strong>A tríade num edifício:</strong> uma escola deve ser sólida (resistir ao tempo e às chuvas), útil (salas bem iluminadas, circulação fácil) e bela (proporções, materiais, harmonia com o entorno). Faltando um dos três, falha como arquitetura. A tríade de Vitrúvio continua um critério simples e exigente.</p>`,
  contexto: `<p><strong>No mundo:</strong> o manuscrito de Vitrúvio foi redescoberto no início do século XV e influenciou profundamente os arquitetos do Renascimento ${tag('fato')}. <strong>No Brasil:</strong> tratados de arquitetura de tradição vitruviana circularam entre mestres de obras do período colonial ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a beleza na arquitetura não é luxo', tag: 'argumento',
    premissas: ['Edifícios moldam a vida diária de quem os usa.', 'Ambientes belos e proporcionados favorecem o bem-estar, o respeito e a contemplação.', 'Por isso Vitrúvio põe a beleza ao lado da solidez e da utilidade.'],
    conclusao: 'Logo, a beleza é exigência da boa arquitetura, não ornamento supérfluo.',
    nota: 'A Igreja insiste na dignidade e na beleza dos edifícios de culto (Sacrosanctum Concilium, 122–124).',
  },
  objecoes: [
    { objecao: 'Vasari é só um contador de anedotas, sem valor histórico.', tag: 'debate',
      resposta: 'Vasari tem erros, lendas e preferências (sobretudo por Florença). Mas reuniu informações preciosas sobre artistas e obras, muitas vezes de testemunhas, e criou o gênero da história da arte. Lido com crítica, continua fonte indispensável.' },
  ],
  aplicacao: `<p>Escolha um edifício que você conhece e avalie-o pela tríade de Vitrúvio, e leia uma das Vidas de Vasari (por exemplo, a de Giotto), anotando fatos, lendas e juízos.</p>`,
  fonte: {
    obra: 'Giorgio Vasari, Vidas (1550/1568), vida de Giotto; Vitrúvio, Dez livros de arquitetura, livro I, cap. 3', link: null,
    orientacao: `<p>Em Vasari, distinga dado verificável, anedota e juízo de valor. Em Vitrúvio, a tríade.</p>`,
  },
  perguntas: [
    { p: 'Qual a tríade de Vitrúvio?', r: 'Solidez, utilidade e beleza.' },
    { p: 'Como Alberti define a beleza?', r: 'Como harmonia das partes, em que nada se pode acrescentar ou tirar sem piorar o todo.' },
    { p: 'Quando foram publicadas as Vidas de Vasari?', r: 'Em 1550, com segunda edição em 1568.' },
  ],
  exercicios: [
    mc('Venustas significa:', ['Solidez', 'Utilidade', 'Beleza', 'Custo'], 2, 'Vitrúvio.'),
    mc('Da arte de edificar é de:', ['Vitrúvio', 'Alberti', 'Vasari', 'Palladio'], 1, '1452.'),
    mc('Para Vasari, o ápice da arte é:', ['Giotto', 'Michelangelo', 'Cimabue', 'Brunelleschi'], 1, 'Terceira idade.'),
    mc('O "Homem vitruviano" é de:', ['Leonardo', 'Rafael', 'Dürer', 'Vasari'], 0, 'Proporções.'),
    mc('O termo "gótico" era originalmente:', ['Elogioso', 'Pejorativo', 'Técnico neutro', 'Religioso'], 1, 'Renascimento.'),
    disc('Avalie um edifício pela tríade de Vitrúvio e analise uma Vida de Vasari distinguindo fato, lenda e juízo.', ['Tríade', 'Vasari', 'Distinções', 'Conclusão']),
  ],
  resumo: ['Vitrúvio: firmitas, utilitas, venustas.', 'Alberti: Da pintura (1435), Da arte de edificar (1452).', 'Vasari: Vidas (1550/1568).', 'Progresso em três idades.', 'Ler Vasari com crítica.'],
  referencias: [
    { texto: 'Vitrúvio, Dez livros de arquitetura.' },
    { texto: 'Leon Battista Alberti, Da pintura (1435).' },
    { texto: 'Giorgio Vasari, Vidas (1550/1568).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação e a análise de Vasari', 'Ler as fontes indicadas'],
  revisao: [['Tríade', 'Vitrúvio.'], ['Harmonia', 'Alberti.'], ['1550', 'Vasari.']],
  avancado: {
    texto: `<h3>Winckelmann e o ideal grego</h3>
<p>Johann Joachim Winckelmann, nas Reflexões sobre a imitação das obras gregas (1755) e na História da arte da Antiguidade (1764), exaltou a "nobre simplicidade e serena grandeza" da arte grega ${tag('fato')}. Ele organizou a arte antiga em fases de estilo e influenciou o Neoclassicismo ${tag('fato')}. Sua idealização da Grécia é hoje relativizada pela arqueologia ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Johann Joachim Winckelmann, Reflexões sobre a imitação das obras gregas (1755).' }],
    exercicios: [
      mc('"Nobre simplicidade e serena grandeza" é expressão de:', ['Vasari', 'Winckelmann', 'Alberti', 'Gombrich'], 1, '1755.'),
      mc('Winckelmann influenciou o:', ['Gótico', 'Neoclassicismo', 'Barroco', 'Cubismo'], 1, 'Estilo.'),
      mc('Sua idealização da Grécia hoje é:', ['Intocada', 'Relativizada', 'Proibida', 'Ignorada'], 1, 'Arqueologia.'),
      disc('Compare a narrativa de Vasari e a de Winckelmann sobre o "ápice" da arte.', ['Vasari', 'Winckelmann', 'Comparação', 'Crítica'])],
  },
}),

aula({
  id: 'ha2-4', titulo: 'Wölfflin, Panofsky, Gombrich, Maritain e Gilson', duracao: '150 min',
  aprendera: ['Comparar os métodos de Wölfflin, Panofsky e Gombrich', 'Conhecer a tese de Gombrich sobre representação', 'Expor a filosofia da arte de Maritain', 'Expor a tese de Gilson sobre a pintura'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>No século XX, a história da arte tornou-se disciplina universitária, e filósofos cristãos refletiram sobre o ser da obra. O que cada um ensina?</p>
<h3>Wölfflin e Panofsky</h3>
<p>Wölfflin estudou a evolução das formas (estilo), comparando pares de conceitos ${tag('fato')}. Panofsky enfatizou o significado, com a iconografia e a iconologia ${tag('fato')}. Um olha para como se vê; o outro, para o que se diz ${tag('interpretacao')}.</p>
<h3>Gombrich</h3>
<p>Ernst Gombrich escreveu A história da arte (1950), um dos livros mais lidos sobre o tema, que começa afirmando que não existe propriamente "a Arte", mas os artistas ${tag('fato')}. Em Arte e ilusão (1960), defendeu que os artistas representam o mundo partindo de esquemas aprendidos e corrigindo-os pela observação ("esquema e correção") ${tag('fato')}.</p>
<h3>Maritain</h3>
<p>Em Arte e escolástica (1920) e A intuição criadora na arte e na poesia (1953), Jacques Maritain sustentou que a arte é uma virtude do intelecto prático voltada ao bem da obra, e que a poesia nasce de uma intuição criadora que une o artista e as coisas ${tag('fato')}. A arte, ainda que autônoma em seu domínio, está subordinada à moral no uso que o homem faz dela ${tag('interpretacao')}.</p>
<h3>Gilson</h3>
<p>Em Pintura e realidade (1957), Étienne Gilson argumentou que a pintura não é essencialmente imitação, mas produção de um novo ser — o quadro — com existência própria ${tag('interpretacao')}. A tese aproxima a filosofia do ser da reflexão sobre a arte moderna ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Estilo', 'Conjunto de traços formais característicos de uma época ou artista.'],
    ['Esquema e correção', 'Tese de Gombrich sobre o processo de representação.'],
    ['Intelecto prático', 'Intelecto voltado ao fazer e ao agir.'],
    ['Intuição criadora', 'Conhecimento poético em que nasce a obra (Maritain).'],
    ['Obra como ser', 'Tese de Gilson de que o quadro é uma nova realidade.'],
  ],
  exemplos: `<p><strong>Esquema e correção:</strong> um aluno de desenho desenha olhos como amêndoas — um esquema aprendido. Observando um rosto real, corrige: as pálpebras cobrem parte da íris, a luz cria reflexos. Para Gombrich, toda a história da representação realista é feita desse vaivém entre fórmula e observação.</p>`,
  contexto: `<p><strong>No mundo:</strong> Gilson apresentou as ideias de Pintura e realidade nas A. W. Mellon Lectures, em Washington ${tag('fato')}. <strong>No Brasil:</strong> A história da arte de Gombrich é amplamente usada em cursos e escolas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a arte é uma virtude intelectual', tag: 'argumento',
    premissas: ['A arte exige saber como fazer bem uma obra, e esse saber se aperfeiçoa com o exercício.', 'Uma disposição estável do intelecto adquirida pelo exercício é uma virtude.', 'A arte visa o bem da obra, não diretamente o bem do artista.'],
    conclusao: 'Logo, a arte é uma virtude do intelecto prático, distinta da virtude moral.',
    nota: 'Por isso um grande artista pode ser má pessoa, e uma pessoa santa pode ser mau artista.',
  },
  objecoes: [
    { objecao: 'Se a arte só visa o bem da obra, o artista não tem responsabilidade moral.', tag: 'argumento',
      resposta: 'Maritain distingue: enquanto artista, o homem visa a obra; enquanto homem, responde moralmente pelo que faz e pelo uso da obra. A autonomia da arte em seu domínio não a coloca acima da moral.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de um capítulo de Arte e escolástica, de Maritain, ou de A história da arte, de Gombrich, conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Jacques Maritain, Arte e escolástica (1920); Étienne Gilson, Pintura e realidade (1957)', link: null,
    orientacao: `<p>Em Maritain, a arte como virtude. Em Gilson, a distinção entre pintura e imitação.</p>`,
  },
  perguntas: [
    { p: 'O que é "esquema e correção" em Gombrich?', r: 'O processo de partir de fórmulas aprendidas e corrigi-las pela observação.' },
    { p: 'O que é a arte para Maritain?', r: 'Uma virtude do intelecto prático voltada ao bem da obra.' },
    { p: 'Qual a tese de Gilson em Pintura e realidade?', r: 'Que a pintura produz um novo ser, e não é essencialmente imitação.' },
  ],
  exercicios: [
    mc('A história da arte de Gombrich é de:', ['1915', '1939', '1950', '1960'], 2, 'Manual.'),
    mc('Arte e ilusão é de:', ['Gombrich', 'Panofsky', 'Maritain', 'Gilson'], 0, '1960.'),
    mc('A intuição criadora na arte e na poesia é de:', ['Maritain', 'Gilson', 'Wölfflin', 'Vasari'], 0, '1953.'),
    mc('Pintura e realidade é de:', ['Maritain', 'Gilson', 'Gombrich', 'Hegel'], 1, '1957.'),
    mc('Enfatizar o significado mais que a forma é próprio de:', ['Wölfflin', 'Panofsky', 'Vitrúvio', 'Cennini'], 1, 'Iconologia.'),
    disc('Faça a ficha de leitura de Maritain ou Gombrich.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Wölfflin: forma; Panofsky: significado.', 'Gombrich: A história da arte (1950); esquema e correção (1960).', 'Maritain: arte como virtude do intelecto prático.', 'Gilson: o quadro como novo ser (1957).', 'Arte autônoma, mas sob a moral.'],
  referencias: [
    { texto: 'Ernst H. Gombrich, A história da arte (1950).' },
    { texto: 'Jacques Maritain, Arte e escolástica (1920).', livro: 'maritain-arte' },
    { texto: 'Étienne Gilson, Pintura e realidade (1957).', livro: 'gilson-pintura' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler as fontes indicadas'],
  revisao: [['Esquema e correção', 'Gombrich.'], ['Virtude', 'Maritain.'], ['Novo ser', 'Gilson.']],
  avancado: {
    texto: `<h3>Hegel e o "fim da arte"</h3>
<p>Nos Cursos de estética, Hegel sustentou que a arte foi, em certas épocas, a forma mais alta de expressão do espírito, mas que, na modernidade, essa função passou à religião e à filosofia — tese conhecida como o "fim da arte" ${tag('interpretacao')}. A tese não diz que deixariam de existir obras, mas que a arte perderia o lugar supremo ${tag('interpretacao')}. Ela é muito discutida na filosofia da arte contemporânea ${tag('debate')}.</p>`,
    leituras: [{ texto: 'G. W. F. Hegel, Cursos de estética, introdução.', livro: 'hegel-estetica' }],
    exercicios: [
      mc('A tese do "fim da arte" é associada a:', ['Hegel', 'Vasari', 'Gombrich', 'Alberti'], 0, 'Estética.'),
      mc('A tese diz que:', ['Não haverá mais obras', 'A arte perde o lugar supremo', 'A arte é proibida', 'Só há arte sacra'], 1, 'Interpretação.'),
      mc('Para Hegel, a função suprema passa à:', ['Religião e filosofia', 'Economia', 'Técnica', 'Política'], 0, 'Espírito.'),
      disc('Discuta a tese hegeliana do "fim da arte" à luz da arte do século XX.', ['Tese', 'Exemplos', 'Objeções', 'Avaliação'])],
  },
}),

avaliacao('ha2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os grandes períodos da arte e os principais teóricos, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia sua ficha de leitura.</li></ul>`,
[
  disc('Trace a história da arte ocidental do Egito ao modernismo brasileiro com seis obras datadas, explicando a característica principal de cada período.', ['Obras', 'Datas', 'Características', 'Brasil']),
  disc('Compare a abordagem de um historiador da arte (Wölfflin, Panofsky ou Gombrich) com a de um filósofo cristão (Maritain ou Gilson) aplicando ambas a uma mesma obra.', ['Abordagem histórica', 'Abordagem filosófica', 'Aplicação', 'Comparação']),
]),
];
