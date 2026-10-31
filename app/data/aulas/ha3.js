// História da Arte III — abordagens e grandes debates (etapas 6 e 7 do percurso de História da Arte).
// Formalismo, iconologia e história social da arte; teologia da imagem; iconoclasmo e beleza na arte moderna;
// arte sacra depois do Vaticano II, patrimônio e restauro.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ha3-1', titulo: 'Formalismo, iconologia e história social da arte', duracao: '150 min',
  aprendera: ['Distinguir as três grandes abordagens da história da arte', 'Conhecer a história social da arte (Hauser, Baxandall)', 'Aplicar duas abordagens a uma mesma obra', 'Reconhecer limites de cada abordagem'],
  prereq: ['História da Arte II (módulo HA2)'],
  explicacao: `
<h3>O problema</h3>
<p>Diante da mesma obra, um historiador fala de linhas e cores, outro de símbolos, outro de dinheiro e classes sociais. Quem tem razão?</p>
<h3>Formalismo</h3>
<p>O formalismo concentra-se nas qualidades visíveis — forma, composição, estilo — e em sua evolução, como em Wölfflin ${tag('fato')}. Valoriza o olhar treinado, mas pode ignorar função e significado ${tag('interpretacao')}.</p>
<h3>Iconologia</h3>
<p>A iconologia, com Panofsky, busca o significado das imagens à luz de textos e da cultura da época ${tag('fato')}. Revela sentidos profundos, mas pode cair em interpretações eruditas pouco documentadas ${tag('interpretacao')}.</p>
<h3>História social da arte</h3>
<p>A história social da arte estuda as condições de produção e recepção: patronos, mercado, instituições, público ${tag('fato')}. Arnold Hauser, em História social da arte e da literatura (1951), adotou uma perspectiva de inspiração marxista ${tag('fato')}. Michael Baxandall, em O olhar renascente (Painting and Experience in Fifteenth-Century Italy, 1972), analisou contratos de encomenda e o "olho de época" — as habilidades visuais que o público trazia da vida cotidiana ${tag('fato')}.</p>
<h3>Integração</h3>
<p>Muitos historiadores combinam as abordagens: a forma, o significado e as condições sociais são aspectos da mesma obra ${tag('interpretacao')}. O risco é reduzir a obra a um só aspecto — só forma, só símbolo ou só dinheiro ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Formalismo', 'Abordagem centrada nas qualidades visíveis e no estilo.'],
    ['Iconologia', 'Abordagem centrada no significado cultural das imagens.'],
    ['História social da arte', 'Abordagem centrada nas condições de produção e recepção.'],
    ['Olho de época', 'Habilidades visuais de um público numa época (Baxandall).'],
    ['Recepção', 'Modo como a obra é vista, usada e interpretada pelo público.'],
  ],
  exemplos: `<p><strong>Uma Anunciação do século XV:</strong> o formalista analisa a perspectiva e a luz; o iconólogo, o lírio (pureza), o livro (profecia) e a pomba (Espírito Santo); o historiador social, o contrato que especificava a quantidade de ouro e azul ultramarino, e a confraria que pagou. As três leituras se completam.</p>`,
  contexto: `<p><strong>No mundo:</strong> a partir dos anos 1970, a história social e outras abordagens se multiplicaram nas universidades ${tag('fato')}. <strong>No Brasil:</strong> estudos sobre irmandades mineiras mostraram o papel de leigos negros e pardos como encomendantes e artistas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nenhuma abordagem esgota a obra', tag: 'argumento',
    premissas: ['Uma obra é ao mesmo tempo objeto visível, portadora de sentido e produto de condições sociais.', 'Cada abordagem ilumina um desses aspectos.', 'Reduzir a obra a um aspecto empobrece sua compreensão.'],
    conclusao: 'Logo, uma compreensão adequada integra forma, significado e contexto.',
    nota: 'A integração deve respeitar as fontes de cada nível.',
  },
  objecoes: [
    { objecao: 'A arte é só reflexo das relações econômicas.', tag: 'debate',
      resposta: 'As condições econômicas influenciam a arte, como mostra a história social. Mas reduzir a obra a reflexo econômico ignora a intenção do artista, a tradição formal e o conteúdo religioso. Hauser foi criticado justamente por esse reducionismo.' },
  ],
  aplicacao: `<p>Inicie o quadro comparativo da etapa: analise uma mesma obra segundo duas abordagens (por exemplo, formal e social) e compare o que cada uma revela e o que deixa de fora.</p>`,
  fonte: {
    obra: 'Michael Baxandall, O olhar renascente (1972), parte I (contratos e condições do comércio de pinturas)', link: null,
    orientacao: `<p>Observe como os contratos especificam materiais, cores e prazos, e o que isso revela sobre o valor atribuído às obras.</p>`,
  },
  perguntas: [
    { p: 'O que estuda a história social da arte?', r: 'As condições de produção e recepção das obras.' },
    { p: 'O que é o "olho de época"?', r: 'As habilidades visuais que o público de uma época trazia da vida cotidiana.' },
    { p: 'Qual o risco de cada abordagem isolada?', r: 'Reduzir a obra a um só aspecto.' },
  ],
  exercicios: [
    mc('História social da arte e da literatura é de:', ['Hauser', 'Panofsky', 'Wölfflin', 'Gombrich'], 0, '1951.'),
    mc('O olhar renascente é de:', ['Baxandall', 'Vasari', 'Alberti', 'Hauser'], 0, '1972.'),
    mc('Analisar o lírio como símbolo da pureza é abordagem:', ['Formal', 'Iconológica', 'Social', 'Técnica'], 1, 'Significado.'),
    mc('Estudar o contrato de encomenda é abordagem:', ['Formal', 'Iconológica', 'Social', 'Estética'], 2, 'Condições.'),
    mc('Hauser foi criticado por:', ['Reducionismo', 'Excesso de fé', 'Formalismo', 'Ignorar a economia'], 0, 'Debate.'),
    disc('Analise uma obra com duas abordagens e compare o que cada uma revela e deixa de fora.', ['Abordagem 1', 'Abordagem 2', 'Comparação', 'Integração']),
  ],
  resumo: ['Formalismo: forma e estilo.', 'Iconologia: significado.', 'História social: produção e recepção.', 'Hauser (1951); Baxandall (1972).', 'Integrar sem reduzir.'],
  referencias: [
    { texto: 'Michael Baxandall, O olhar renascente (1972).' },
    { texto: 'Arnold Hauser, História social da arte e da literatura (1951).' },
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar o quadro comparativo', 'Ler a fonte indicada'],
  revisao: [['Formal', 'Ver.'], ['Iconologia', 'Significar.'], ['Social', 'Produzir.']],
  avancado: {
    texto: `<h3>O ultramarino e o valor</h3>
<p>Baxandall mostrou que contratos do século XV especificavam o uso de azul ultramarino, pigmento caro feito de lápis-lazúli, frequentemente reservado ao manto da Virgem ${tag('fato')}. O custo do material era sinal de honra ao tema sagrado; com o tempo, os contratos passaram a valorizar mais a habilidade do mestre do que os materiais ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Michael Baxandall, O olhar renascente (1972).' }],
    exercicios: [
      mc('O azul ultramarino era feito de:', ['Lápis-lazúli', 'Cobre', 'Índigo', 'Carvão'], 0, 'Pigmento caro.'),
      mc('Era frequentemente reservado ao:', ['Manto da Virgem', 'Céu de fundo', 'Diabo', 'Chão'], 0, 'Honra.'),
      mc('Com o tempo, os contratos valorizaram mais:', ['O ouro', 'A habilidade do mestre', 'O tamanho', 'A moldura'], 1, 'Interpretação.'),
      disc('Explique o que a escolha de materiais revela sobre o valor dado a um tema numa obra sacra.', ['Material', 'Custo', 'Tema', 'Interpretação'])],
  },
}),

aula({
  id: 'ha3-2', titulo: 'Teologia da imagem: ícone, encarnação e veneração', duracao: '150 min',
  aprendera: ['Expor o argumento de São João Damasceno pela Encarnação', 'Conhecer a definição de Niceia II (787)', 'Distinguir veneração e adoração', 'Compreender a teologia do ícone'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O Decálogo proíbe fazer imagens para adorá-las (Ex 20,4–5). Por que, então, a Igreja tem imagens de Cristo e dos santos?</p>
<h3>São João Damasceno</h3>
<p>No século VIII, São João Damasceno argumentou que, antes da Encarnação, Deus invisível não podia ser representado; mas, ao se fazer homem visível, Cristo pode ser pintado ${tag('doutrina')}. Ele afirmou não venerar a matéria, mas o Criador da matéria, que se fez matéria por nós ${tag('fato')}.</p>
<h3>Niceia II</h3>
<p>O II Concílio de Niceia (787) definiu que se podem expor imagens de Cristo, da Virgem, dos anjos e dos santos, e que se lhes deve veneração honrosa, não a adoração que só a Deus pertence; "a honra prestada à imagem passa ao protótipo" ${tag('doutrina')}. O Catecismo resume essa doutrina (CIC 1159–1162 e 2129–2132) ${tag('doutrina')}.</p>
<h3>Veneração e adoração</h3>
<p>A teologia distingue a adoração (latria), devida só a Deus, da veneração (dulia) aos santos e da hiperdulia à Virgem Maria ${tag('doutrina')}. A imagem não é ídolo, porque remete a quem representa ${tag('argumento')}.</p>
<h3>O ícone</h3>
<p>Na tradição bizantina, o ícone é "escrito" segundo cânones, com fundo dourado, perspectiva não naturalista e rostos serenos, para tornar presente o mundo transfigurado ${tag('interpretacao')}. Joseph Ratzinger, em Introdução ao espírito da liturgia (2000), defendeu a importância do ícone para a arte sacra ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ícone', 'Imagem sagrada da tradição bizantina, feita segundo cânones.'],
    ['Protótipo', 'A pessoa representada pela imagem.'],
    ['Latria', 'Adoração devida só a Deus.'],
    ['Dulia', 'Veneração aos santos.'],
    ['Hiperdulia', 'Veneração especial à Virgem Maria.'],
  ],
  exemplos: `<p><strong>Beijar uma foto:</strong> quem beija a foto da mãe falecida não ama o papel, mas a mãe. Do mesmo modo, quem venera um ícone de Cristo dirige a honra a Cristo. O argumento de Niceia II é que a honra "passa ao protótipo" — e a analogia ajuda a entender por que veneração não é idolatria.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Igreja Ortodoxa celebra o "Triunfo da Ortodoxia" em memória da restauração das imagens em 843 ${tag('fato')}. <strong>No Brasil:</strong> a devoção popular a imagens, como a de Nossa Senhora Aparecida, é central na religiosidade do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Encarnação justifica as imagens', tag: 'argumento',
    premissas: ['A proibição do Antigo Testamento visava impedir representar e adorar o Deus invisível como um ídolo.', 'Em Cristo, o Deus invisível tornou-se visível em carne humana.', 'O que se tornou visível pode ser representado, e a honra à imagem passa à pessoa.'],
    conclusao: 'Logo, as imagens de Cristo e dos santos são legítimas e coerentes com a fé na Encarnação.',
    nota: 'É o argumento de São João Damasceno, acolhido por Niceia II.',
  },
  objecoes: [
    { objecao: 'Venerar imagens é idolatria proibida pelo Decálogo.', tag: 'debate',
      resposta: 'A Igreja distingue a adoração, só a Deus, da veneração, que passa ao protótipo. O próprio Antigo Testamento mandou fazer imagens (querubins da arca, serpente de bronze) sem idolatria. Comunidades protestantes divergem sobre o uso de imagens; o debate é antigo e merece ser tratado com justiça.' },
  ],
  aplicacao: `<p>Analise um ícone ou uma imagem sacra de sua paróquia explicando, com Niceia II e o Catecismo, por que ela é venerada e não adorada, e descreva seus elementos iconográficos.</p>`,
  fonte: {
    obra: 'São João Damasceno, Discursos contra os que caluniam as santas imagens (c. 730); II Concílio de Niceia (787), definição; Catecismo, §§ 1159–1162 e 2129–2132', link: null,
    orientacao: `<p>Em Damasceno, o argumento da Encarnação. Em Niceia II, a distinção entre veneração e adoração. No Catecismo, a síntese.</p>`,
  },
  perguntas: [
    { p: 'Qual o argumento de São João Damasceno?', r: 'Que, ao se fazer homem visível, Cristo pode ser representado.' },
    { p: 'O que significa "a honra passa ao protótipo"?', r: 'Que a honra dada à imagem se dirige à pessoa representada.' },
    { p: 'Qual a diferença entre latria e dulia?', r: 'Latria é adoração, só a Deus; dulia é veneração aos santos.' },
  ],
  exercicios: [
    mc('O II Concílio de Niceia é de:', ['325', '451', '787', '1563'], 2, 'Imagens.'),
    mc('A adoração devida só a Deus é:', ['Dulia', 'Hiperdulia', 'Latria', 'Iconografia'], 2, 'Distinção.'),
    mc('A restauração definitiva das imagens em Bizâncio foi em:', ['726', '787', '843', '1054'], 2, 'Triunfo da Ortodoxia.'),
    mc('Introdução ao espírito da liturgia é de:', ['João Paulo II', 'Ratzinger', 'Maritain', 'Gilson'], 1, '2000.'),
    mc('O argumento da Encarnação para as imagens é de:', ['João Damasceno', 'Leão III', 'Calvino', 'Vasari'], 0, 'Século VIII.'),
    disc('Analise uma imagem sacra de sua paróquia com Niceia II e o Catecismo.', ['Imagem', 'Iconografia', 'Doutrina', 'Distinção']),
  ],
  resumo: ['Damasceno: Encarnação e imagem.', 'Niceia II (787): veneração, não adoração.', 'Honra passa ao protótipo.', 'Latria, dulia, hiperdulia.', 'Ícone; Ratzinger (2000).'],
  referencias: [
    { texto: 'São João Damasceno, Discursos contra os que caluniam as santas imagens (c. 730).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1159–1162 e 2129–2132.', livro: 'cic' },
    { texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da imagem', 'Ler as fontes indicadas'],
  revisao: [['787', 'Niceia II.'], ['Protótipo', 'Destino da honra.'], ['Latria', 'Só a Deus.']],
  avancado: {
    texto: `<h3>A Trindade de Rublev</h3>
<p>O ícone da Trindade de Andrei Rublev (início do século XV) representa os três anjos que visitaram Abraão (Gn 18) como figura da Trindade ${tag('fato')}. O Concílio dos Cem Capítulos (Moscou, 1551) tomou-o como modelo para representar a Trindade ${tag('fato')}. É frequentemente citado como ápice da iconografia russa ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000), parte sobre a imagem.' }],
    exercicios: [
      mc('A Trindade de Rublev representa a visita a:', ['Moisés', 'Abraão', 'Davi', 'Elias'], 1, 'Gn 18.'),
      mc('O Concílio dos Cem Capítulos é de:', ['787', '1054', '1551', '1563'], 2, 'Moscou.'),
      mc('Rublev viveu no:', ['Século VIII', 'Século XV', 'Século XVIII', 'Século XX'], 1, 'Início do século XV.'),
      disc('Faça a leitura iconográfica da Trindade de Rublev, com os textos de apoio.', ['Elementos', 'Texto bíblico', 'Teologia', 'Fontes'])],
  },
}),

aula({
  id: 'ha3-3', titulo: 'Iconoclasmos e o problema da beleza na arte moderna', duracao: '150 min',
  aprendera: ['Conhecer as crises iconoclastas bizantina e da Reforma', 'Distinguir as posições protestantes sobre as imagens', 'Discutir a crise da beleza na arte moderna', 'Avaliar juízos sobre arte moderna com justiça'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Imagens foram destruídas em nome da fé; em outros momentos, a própria beleza foi posta em questão em nome da arte. O que esses episódios ensinam?</p>
<h3>Iconoclasmo bizantino</h3>
<p>A partir de 726–730, o imperador Leão III promoveu a remoção de imagens; Niceia II (787) as restaurou; houve nova fase iconoclasta de 815 a 843, quando foram definitivamente restauradas ${tag('fato')}.</p>
<h3>Reforma</h3>
<p>Na Reforma, houve destruição de imagens em Wittenberg (1522, com Karlstadt), em Zurique (Zwinglio, 1524) e nos Países Baixos (1566) ${tag('fato')}. Lutero foi mais moderado e admitiu imagens não cultuais; Calvino as rejeitou nas igrejas ${tag('fato')}. O Concílio de Trento reafirmou o culto das imagens em 1563 ${tag('fato')}.</p>
<h3>A beleza na arte moderna</h3>
<p>Muitos movimentos modernos e contemporâneos abandonaram a beleza como objetivo, em favor da expressão, da provocação ou do conceito ${tag('interpretacao')}. Marcel Duchamp expôs um urinol como obra ("Fonte", 1917), questionando a própria definição de arte ${tag('fato')}. Críticos como Roger Scruton defenderam a recuperação da beleza como valor ${tag('interpretacao')}.</p>
<h3>Juízo justo</h3>
<p>É preciso evitar dois extremos: rejeitar toda arte moderna em bloco e aceitar toda novidade como valiosa ${tag('argumento')}. Há obras modernas de grande qualidade e espiritualidade, e obras cujo valor é discutível ${tag('debate')}.</p>`,
  vocabulario: [
    ['Iconoclasmo', 'Rejeição e destruição de imagens.'],
    ['Iconódulo', 'Defensor do culto das imagens.'],
    ['Beeldenstorm', 'Onda iconoclasta nos Países Baixos em 1566.'],
    ['Readymade', 'Objeto comum apresentado como obra de arte (Duchamp).'],
    ['Arte conceitual', 'Arte em que a ideia predomina sobre o objeto.'],
  ],
  exemplos: `<p><strong>Cicatrizes do iconoclasmo:</strong> em catedrais da Inglaterra e dos Países Baixos ainda se veem estátuas sem cabeça e nichos vazios, testemunhos da destruição do século XVI. A história da arte estuda também o que foi perdido, a partir de inventários e descrições anteriores.</p>`,
  contexto: `<p><strong>No mundo:</strong> destruições de patrimônio por grupos armados no século XXI, como em Palmira, reacenderam o debate sobre iconoclasmo ${tag('fato')}. <strong>No Brasil:</strong> a Semana de 1922 provocou forte reação de críticos, como Monteiro Lobato diante de Anita Malfatti (1917) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a beleza continua a importar', tag: 'argumento',
    premissas: ['O belo é aquilo que agrada à contemplação e eleva o espírito.', 'Uma arte que renuncia à beleza perde uma de suas finalidades mais profundas.', 'A tradição cristã vê na beleza um caminho para Deus (via pulchritudinis).'],
    conclusao: 'Logo, a beleza não é critério ultrapassado, mas exigência permanente da arte, sobretudo da sacra.',
    nota: 'Beleza não é mera "bonitice": pode ser austera, dramática e até dolorosa, como no Crucificado.',
  },
  objecoes: [
    { objecao: 'Toda arte moderna é decadente.', tag: 'debate',
      resposta: 'Há na arte moderna obras de grande valor, inclusive sacras — como os vitrais de Chagall ou a capela de Matisse em Vence. Rejeitar em bloco é tão injusto quanto aceitar tudo. O juízo deve ser feito obra a obra, com critérios.' },
  ],
  aplicacao: `<p>Escolha uma obra moderna ou contemporânea, apresente o argumento de quem a defende e o de quem a critica, e dê seu juízo fundamentado em critérios explícitos (técnica, sentido, beleza, adequação).</p>`,
  fonte: {
    obra: 'II Concílio de Niceia (787), definição; Concílio de Trento, sessão XXV (1563); Roger Scruton, Beleza (2009)', link: null,
    orientacao: `<p>Compare as razões dos concílios para as imagens e os argumentos de Scruton sobre a perda da beleza.</p>`,
  },
  perguntas: [
    { p: 'Quando terminou o iconoclasmo bizantino?', r: 'Em 843.' },
    { p: 'Como diferiam Lutero e Calvino quanto às imagens?', r: 'Lutero admitia imagens não cultuais; Calvino as rejeitava nas igrejas.' },
    { p: 'O que questionou a "Fonte" de Duchamp?', r: 'A própria definição de arte.' },
  ],
  exercicios: [
    mc('O primeiro iconoclasmo bizantino começou com:', ['Justiniano', 'Leão III', 'Constantino', 'Carlos Magno'], 1, '726–730.'),
    mc('A onda iconoclasta dos Países Baixos foi em:', ['1522', '1524', '1566', '1648'], 2, 'Beeldenstorm.'),
    mc('A "Fonte" de Duchamp é de:', ['1874', '1917', '1922', '1960'], 1, 'Readymade.'),
    mc('Beleza (2009) é de:', ['Scruton', 'Gombrich', 'Maritain', 'Hauser'], 0, 'Defesa da beleza.'),
    mc('O juízo justo sobre a arte moderna deve ser feito:', ['Em bloco', 'Obra a obra', 'Pelo preço', 'Pela moda'], 1, 'Critérios.'),
    disc('Apresente defesa e crítica de uma obra moderna e dê seu juízo com critérios explícitos.', ['Defesa', 'Crítica', 'Critérios', 'Juízo']),
  ],
  resumo: ['Iconoclasmo bizantino: 726–787, 815–843.', 'Reforma: Karlstadt, Zwinglio, Calvino; Trento.', 'Duchamp (1917).', 'Beleza em debate; Scruton.', 'Juízo obra a obra.'],
  referencias: [
    { texto: 'Roger Scruton, Beleza (2009).' },
    { texto: 'Concílio de Trento, sessão XXV (1563).' },
    { texto: 'João Paulo II, Carta aos artistas (1999).', livro: 'jp2-artistas' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da obra moderna', 'Ler as fontes indicadas'],
  revisao: [['843', 'Fim do iconoclasmo.'], ['1566', 'Países Baixos.'], ['Obra a obra', 'Juízo.']],
  avancado: {
    texto: `<h3>A via da beleza</h3>
<p>Documentos recentes da Igreja falam da via pulchritudinis, o caminho da beleza para a evangelização e o encontro com Deus ${tag('doutrina')}. Bento XVI, no encontro com artistas na Capela Sistina (2009), disse que a beleza autêntica abre o coração humano à saudade do infinito ${tag('fato')}. A proposta é dialogar com os artistas, não só criticá-los ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Bento XVI, discurso aos artistas na Capela Sistina (21 de novembro de 2009).' }],
    exercicios: [
      mc('Via pulchritudinis significa:', ['Caminho da beleza', 'Caminho da verdade', 'Via-sacra', 'Via láctea'], 0, 'Latim.'),
      mc('O encontro de Bento XVI com artistas foi em:', ['1964', '1999', '2009', '2015'], 2, 'Capela Sistina.'),
      mc('A proposta é principalmente:', ['Dialogar com os artistas', 'Proibir a arte moderna', 'Só restaurar', 'Nada'], 0, 'Interpretação.'),
      disc('Mostre como uma obra concreta pode ser "via da beleza" para alguém que não crê.', ['Obra', 'Beleza', 'Abertura', 'Limites'])],
  },
}),

aula({
  id: 'ha3-4', titulo: 'Arte sacra depois do Vaticano II; patrimônio, restauro e restituição', duracao: '150 min',
  aprendera: ['Conhecer o ensino da Sacrosanctum Concilium sobre arte sacra', 'Discutir a arte sacra contemporânea', 'Conhecer os princípios da Carta de Veneza', 'Discutir o patrimônio brasileiro e a restituição de obras'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que arte convém às igrejas de hoje? E como cuidar das obras que herdamos?</p>
<h3>Sacrosanctum Concilium</h3>
<p>O capítulo VII da constituição sobre a liturgia (1963) afirma que a Igreja não adotou nenhum estilo artístico como próprio e acolhe a arte de todos os tempos, desde que sirva com reverência aos edifícios e ritos sagrados (n. 123) ${tag('doutrina')}. Pede que se busque mais a nobre beleza que a mera suntuosidade (n. 124) e que se mantenha o uso das imagens, com moderação e ordem (n. 125) ${tag('doutrina')}.</p>
<h3>Depois do Concílio</h3>
<p>Paulo VI reuniu artistas na Capela Sistina em 1964 e lamentou o divórcio entre a Igreja e a arte moderna ${tag('fato')}. Houve igrejas novas de grande qualidade e também reformas que retiraram altares e imagens de modo criticado ${tag('debate')}. O debate sobre a arte sacra contemporânea continua ${tag('debate')}.</p>
<h3>Patrimônio e restauro</h3>
<p>A Carta de Veneza (1964) estabeleceu princípios de conservação: respeitar a autenticidade, documentar as intervenções e tornar distinguíveis os acréscimos ${tag('fato')}. No Brasil, o Decreto-Lei nº 25/1937 instituiu o tombamento e o IPHAN protege bens de valor histórico e artístico ${tag('fato')}. O incêndio do Museu Nacional, no Rio de Janeiro (2018), destruiu grande parte de seu acervo ${tag('fato')}.</p>
<h3>Restituição</h3>
<p>Debate-se a devolução de obras levadas em contextos coloniais ou de guerra a seus lugares de origem ${tag('debate')}. A questão envolve justiça, conservação e acesso ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Sacrosanctum Concilium', 'Constituição do Vaticano II sobre a liturgia (1963).'],
    ['Nobre beleza', 'Critério da SC 124 em contraste com a mera suntuosidade.'],
    ['Carta de Veneza', 'Documento de 1964 sobre conservação e restauro.'],
    ['Tombamento', 'Ato de proteção legal de um bem cultural.'],
    ['Restituição', 'Devolução de bens culturais a seu lugar ou povo de origem.'],
  ],
  exemplos: `<p><strong>Um restauro bem feito:</strong> ao restaurar um retábulo, o restaurador limpa sujidades, consolida a madeira, preenche lacunas com técnica reconhecível de perto e documenta tudo em relatório com fotos. Não "repinta" com cores novas nem inventa partes perdidas — assim respeita a autenticidade, como pede a Carta de Veneza.</p>`,
  contexto: `<p><strong>No mundo:</strong> a catedral de Notre-Dame de Paris, atingida por incêndio em 2019, foi reaberta em dezembro de 2024 após restauro ${tag('fato')}. <strong>No Brasil:</strong> o IPHAN foi criado em 1937 com participação de intelectuais como Mário de Andrade e Rodrigo Melo Franco de Andrade ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conservar o patrimônio é dever de justiça', tag: 'argumento',
    premissas: ['O patrimônio é herança recebida das gerações passadas.', 'Ele pertence também às gerações futuras.', 'Destruí-lo ou deixá-lo arruinar priva os outros de um bem comum.'],
    conclusao: 'Logo, conservar o patrimônio é dever de justiça entre gerações.',
    nota: 'A Igreja pede o cuidado de seus bens culturais como testemunho da fé.',
  },
  objecoes: [
    { objecao: 'O dinheiro gasto em restauro devia ir para os pobres.', tag: 'debate',
      resposta: 'A objeção lembra a de Judas sobre o perfume (Jo 12,4–8), e a resposta de Jesus mostra que gestos de beleza e honra também têm valor. Ao mesmo tempo, a caridade com os pobres é exigência grave. A prudência busca equilíbrio, não exclusão de um dos bens.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa: o que torna uma obra adequada ao culto? Responda com Niceia II, a Sacrosanctum Concilium e um exemplo concreto de sua região.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Sacrosanctum Concilium (1963), nn. 122–130; Carta de Veneza (1964)', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Na SC, os critérios para a arte sacra. Na Carta de Veneza, os princípios do restauro.</p>`,
  },
  perguntas: [
    { p: 'A Igreja adotou um estilo artístico próprio?', r: 'Não; acolhe a arte de todos os tempos, desde que sirva com reverência ao culto (SC 123).' },
    { p: 'O que pede a SC 124?', r: 'Que se busque mais a nobre beleza que a mera suntuosidade.' },
    { p: 'O que exige a Carta de Veneza?', r: 'Respeitar a autenticidade, documentar e tornar distinguíveis os acréscimos.' },
  ],
  exercicios: [
    mc('A Sacrosanctum Concilium é de:', ['1945', '1963', '1978', '1992'], 1, 'Vaticano II.'),
    mc('A Carta de Veneza é de:', ['1937', '1964', '1980', '2018'], 1, 'Restauro.'),
    mc('O tombamento federal foi instituído pelo Decreto-Lei:', ['25/1937', '9.394/1996', '8.078/1990', '13.105/2015'], 0, 'IPHAN.'),
    mc('O incêndio do Museu Nacional foi em:', ['2015', '2018', '2019', '2021'], 1, 'Rio de Janeiro.'),
    mc('Notre-Dame foi reaberta em:', ['2020', '2022', '2024', '2026'], 2, 'Dezembro.'),
    disc('Escreva o ensaio sobre o que torna uma obra adequada ao culto, com Niceia II, SC e um exemplo.', ['Niceia II', 'SC', 'Exemplo', 'Critérios']),
  ],
  resumo: ['SC 122–130: sem estilo próprio; nobre beleza; imagens com moderação.', 'Paulo VI e os artistas (1964).', 'Carta de Veneza (1964).', 'DL 25/1937; IPHAN; Museu Nacional (2018).', 'Restituição em debate.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Decreto-Lei nº 25, de 1937.' },
    { texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler as fontes indicadas'],
  revisao: [['SC 123', 'Sem estilo próprio.'], ['Veneza', 'Autenticidade.'], ['DL 25', 'Tombamento.']],
  avancado: {
    texto: `<h3>Bens culturais da Igreja</h3>
<p>A Santa Sé criou em 1988 uma comissão para os bens culturais da Igreja, depois integrada a outros dicastérios, e publicou orientações sobre inventário, conservação e uso pastoral desses bens ${tag('fato')}. No Brasil, muitas igrejas tombadas pertencem a dioceses, o que exige cooperação entre Igreja e poder público ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963), cap. VII.' }],
    exercicios: [
      mc('A comissão para os bens culturais da Igreja foi criada em:', ['1963', '1988', '2000', '2018'], 1, 'Santa Sé.'),
      mc('Igrejas tombadas exigem cooperação entre:', ['Igreja e poder público', 'Só bancos', 'Só turistas', 'Ninguém'], 0, 'Gestão.'),
      mc('Inventariar bens serve para:', ['Conhecer e proteger', 'Vender', 'Esconder', 'Nada'], 0, 'Finalidade.'),
      disc('Proponha um plano simples de cuidado dos bens artísticos de uma paróquia.', ['Inventário', 'Conservação', 'Uso pastoral', 'Responsáveis'])],
  },
}),

avaliacao('ha3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as abordagens da história da arte, a teologia da imagem, os iconoclasmos, a arte moderna e sacra e o patrimônio, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo de abordagens.</li><li>Releia seu ensaio sobre a arte adequada ao culto.</li></ul>`,
[
  disc('Analise uma mesma obra segundo duas abordagens (formal, iconológica ou social) e mostre o que cada uma revela e o que deixa de fora.', ['Abordagem 1', 'Abordagem 2', 'Comparação', 'Fontes']),
  disc('O que torna uma obra adequada ao culto? Responda com Niceia II, a Sacrosanctum Concilium e um exemplo, distinguindo doutrina, critério estético e gosto pessoal.', ['Doutrina', 'Critério estético', 'Exemplo', 'Distinções']),
]),
];
