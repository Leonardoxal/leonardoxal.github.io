// Santos de referência de cada aba e de cada grande área da árvore do conhecimento.
// A associação NÃO altera conteúdos, critérios de avaliação nem pré-requisitos: é identidade e exemplo.
//
// natureza da associação:
//   patronagem — padroeiro declarado em documento da Sé Apostólica (o documento está em `documento`)
//   tematica   — escolha editorial deste curso, justificada pela vida ou pela obra do santo
//   devocao    — devoção popular difundida, sem documento oficial verificado
// Fontes: catequeses de Bento XVI sobre os Padres e doutores (vatican.va), documentos pontifícios e a
// Catholic Encyclopedia (1907–1913, newadvent.org). Cada endereço foi aberto e conferido em 29/10/2026.
// Imagens: Wikimedia Commons (retrato indicado no Wikidata), com a licença registrada no Commons.

const AUD = (ano, data) => `https://www.vatican.va/content/benedict-xvi/pt/audiences/${ano}/documents/hf_ben-xvi_aud_${data}.html`;
const CE = (c) => `https://www.newadvent.org/cathen/${c}.htm`;
const PATRIS_CORDE = 'https://www.vatican.va/content/francesco/pt/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html';
const MORE_2000 = 'https://www.vatican.va/content/john-paul-ii/pt/motu_proprio/documents/hf_jp-ii_motu-proprio_20001031_thomas-more.html';

export const NATUREZAS = {
  patronagem: 'Padroeiro declarado pela Igreja',
  tematica: 'Inspiração temática (escolha do curso)',
  devocao: 'Devoção popular (sem documento oficial verificado)',
};

/** imagem: nome do arquivo no Wikimedia Commons; licenca: como registrada no Commons. */
export const SANTOS = {
  'tomas-aquino': {
    nome: 'São Tomás de Aquino', datas: 'c. 1225–1274', imagem: 'St-thomas-aquinasFXD.jpg', licenca: 'Domínio público',
    resumo: 'Frade dominicano, mestre em Paris, autor da Suma Teológica e da Suma contra os Gentios. Canonizado em 1323 e proclamado Doutor da Igreja em 1567.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 2 de junho de 2010', url: AUD(2010, '20100602') },
    documento: { rotulo: 'Leão XIII, breve de 4 de agosto de 1880: padroeiro das universidades, colégios e escolas católicas (Catholic Encyclopedia, "St. Thomas Aquinas")', url: CE('14663b') },
    autor: 'tomas',
  },
  boaventura: {
    nome: 'São Boaventura', datas: '1221–1274', imagem: 'François, Claude (dit Frère Luc) - Saint Bonaventure.jpg', licenca: 'Domínio público',
    resumo: 'Franciscano, mestre em Paris, ministro-geral da Ordem e cardeal. No Itinerário da mente para Deus descreve o conhecimento como subida ordenada, das criaturas ao Criador.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 3 de março de 2010', url: AUD(2010, '20100303') },
    livros: ['boaventura-itinerario'],
  },
  'joao-climaco': {
    nome: 'São João Clímaco', datas: 'século VII', imagem: 'Lestvichnik.jpg', licenca: 'Domínio público',
    resumo: 'Monge e abade do Sinai. Sua obra, A Escada (Klímax), descreve a vida espiritual como uma subida em trinta degraus, cada um apoiado no anterior.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 11 de fevereiro de 2009', url: AUD(2009, '20090211') },
  },
  'la-salle': {
    nome: 'São João Batista de La Salle', datas: '1651–1719', imagem: 'DeLasalle Leger.jpg', licenca: 'Domínio público',
    resumo: 'Sacerdote francês, fundador dos Irmãos das Escolas Cristãs. Abriu escolas gratuitas e dedicou-se à formação de professores e ao método de ensino.',
    fonte: { rotulo: 'Catholic Encyclopedia, "St. John Baptist de la Salle"', url: CE('08444a') },
  },
  jeronimo: {
    nome: 'São Jerônimo', datas: 'c. 347–420', imagem: 'Francisco de Zurbarán 041.jpg', licenca: 'CC0',
    resumo: 'Doutor da Igreja, estudioso das línguas bíblicas. Em Belém traduziu a Escritura para o latim (a Vulgata) e comentou quase todos os livros bíblicos.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 7 de novembro de 2007', url: AUD(2007, '20071107') },
  },
  bento: {
    nome: 'São Bento de Núrsia', datas: 'c. 480–547', imagem: 'Frari (Venice) - Sacristy - triptych by Giovanni Bellini - Saint Benedict of Nursia and Saint Mark.jpg', licenca: 'CC BY-SA 4.0 (fotografia)',
    resumo: 'Fundador do mosteiro de Monte Cassino. Sua Regra ordena o dia entre oração, leitura e trabalho, em horários fixos. Paulo VI o proclamou padroeiro da Europa em 1964.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 9 de abril de 2008', url: AUD(2008, '20080409') },
  },
  agostinho: {
    nome: 'Santo Agostinho', datas: '354–430', imagem: 'Saint Augustine by Philippe de Champaigne.jpg', licenca: 'Domínio público',
    resumo: 'Bispo de Hipona e Doutor da Igreja. Nas Confissões examina a própria vida e, no livro X, a memória; escreveu também A Cidade de Deus e A Trindade.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 9 de janeiro de 2008', url: AUD(2008, '20080109') },
    autor: 'agostinho',
  },
  'jose-cupertino': {
    nome: 'São José de Cupertino', datas: '1603–1663', imagem: 'San Giuseppe di Copertino 18th century engraving.jpg', licenca: 'Domínio público',
    resumo: 'Frade franciscano conventual que enfrentou grandes dificuldades nos estudos antes de ser ordenado sacerdote. Canonizado em 1767.',
    fonte: { rotulo: 'Catholic Encyclopedia, "St. Joseph of Cupertino"', url: CE('08520b') },
  },
  isidoro: {
    nome: 'Santo Isidoro de Sevilha', datas: 'c. 560–636', imagem: 'Isidore de Séville.jpg', licenca: 'Domínio público',
    resumo: 'Bispo de Sevilha e Doutor da Igreja. Nas Etimologias reuniu e ordenou o saber da Antiguidade por temas, obra de referência durante toda a Idade Média.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 18 de junho de 2008', url: AUD(2008, '20080618') },
  },
  beda: {
    nome: 'São Beda, o Venerável', datas: 'c. 673–735', imagem: 'The Venerable Bede translates John 1902.jpg', licenca: 'Domínio público',
    resumo: 'Monge de Jarrow e Doutor da Igreja. Escreveu a História eclesiástica do povo inglês (731), com cuidado na citação de documentos e na cronologia.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 18 de fevereiro de 2009', url: AUD(2009, '20090218') },
  },
  'joao-bosco': {
    nome: 'São João Bosco', datas: '1815–1888', imagem: 'San Giovanni Bosco.jpg', licenca: 'Domínio público',
    resumo: 'Sacerdote de Turim, educador de jovens pobres e fundador dos Salesianos. Seu "sistema preventivo" une razão, religião e acompanhamento pessoal.',
    fonte: { rotulo: 'João Paulo II, carta Iuvenum Patris (1988)', url: 'https://www.vatican.va/content/john-paul-ii/pt/letters/1988/documents/hf_jp-ii_let_19880131_iuvenum-patris.html' },
  },
  'antonio-padua': {
    nome: 'Santo Antônio de Pádua', datas: '1195–1231', imagem: "(Venice) Sant'Antonio da Padova by Alvise Vivarini - Correr Museum.jpg", licenca: 'Domínio público',
    resumo: 'Nascido em Lisboa, franciscano, pregador e Doutor da Igreja. A devoção popular o invoca para encontrar o que se perdeu.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 10 de fevereiro de 2010', url: AUD(2010, '20100210') },
  },
  justino: {
    nome: 'São Justino', datas: 'c. 100–165', imagem: 'Justin filozof.jpg', licenca: 'Domínio público',
    resumo: 'Filósofo que se converteu ao cristianismo, autor das Apologias e do Diálogo com Trifão, martirizado em Roma. Via na filosofia grega "sementes do Verbo".',
    fonte: { rotulo: 'Bento XVI, audiência geral de 21 de março de 2007', url: AUD(2007, '20070321') },
  },
  'francisco-xavier': {
    nome: 'São Francisco Xavier', datas: '1506–1552', imagem: 'Franciscus de Xabier.jpg', licenca: 'Domínio público',
    resumo: 'Jesuíta, um dos primeiros companheiros de Inácio de Loyola. Missionário na Índia, nas Molucas e no Japão; morreu às portas da China.',
    fonte: { rotulo: 'Catholic Encyclopedia, "St. Francis Xavier"', url: CE('06233b') },
  },
  'vicente-paulo': {
    nome: 'São Vicente de Paulo', datas: '1581–1660', imagem: 'Saint Vincent de Paul.jpg', licenca: 'CC BY-SA 3.0 (fotografia)',
    resumo: 'Sacerdote francês, fundador da Congregação da Missão e, com Luísa de Marillac, das Filhas da Caridade: organizou a assistência aos pobres de modo estável.',
    fonte: { rotulo: 'Catholic Encyclopedia, "St. Vincent de Paul"', url: CE('15434c') },
  },
  jose: {
    nome: 'São José', datas: 'século I', imagem: 'Guido Reni - St Joseph with the Infant Jesus - WGA19304.jpg', licenca: 'Domínio público',
    resumo: 'Esposo de Maria e pai adotivo de Jesus, trabalhador (Mt 13,55). Pio IX o declarou padroeiro da Igreja; Pio XII o apresentou como padroeiro dos operários.',
    fonte: { rotulo: 'Francisco, carta apostólica Patris Corde (2020), n. 6: "Pai trabalhador"', url: PATRIS_CORDE },
    documento: { rotulo: 'Patris Corde, introdução: Pio XII apresentou-o como padroeiro dos operários', url: PATRIS_CORDE },
  },
  'alberto-magno': {
    nome: 'Santo Alberto Magno', datas: 'c. 1200–1280', imagem: 'AlbertusMagnus.jpg', licenca: 'Domínio público',
    resumo: 'Dominicano, mestre de Tomás de Aquino e Doutor da Igreja. Escreveu sobre física, astronomia, mineralogia, botânica e zoologia, com observação própria.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 24 de março de 2010', url: AUD(2010, '20100324') },
    documento: { rotulo: 'Pio XII o nomeou padroeiro dos cultores das ciências naturais (citado na mesma audiência)', url: AUD(2010, '20100324') },
  },
  'francisco-sales': {
    nome: 'São Francisco de Sales', datas: '1567–1622', imagem: 'Château de Bussy-Rabutin - Saint François de Sales, évêque de Genève (bgw19 0375) (cropped).jpg', licenca: 'Domínio público',
    resumo: 'Bispo de Genebra e Doutor da Igreja, autor da Introdução à vida devota e do Tratado do amor de Deus, escritos com clareza para leitores leigos.',
    fonte: { rotulo: 'Bento XVI, audiência geral de 2 de março de 2011', url: AUD(2011, '20110302') },
    documento: { rotulo: 'Pio XI, encíclica Rerum omnium perturbationem (1923): padroeiro dos escritores católicos', url: 'https://www.vatican.va/content/pius-xi/it/encyclicals/documents/hf_p-xi_enc_26011923_rerum-omnium-perturbationem.html' },
  },
  'tomas-more': {
    nome: 'São Tomás More', datas: '1478–1535', imagem: 'Hans Holbein, the Younger - Sir Thomas More - Google Art Project.jpg', licenca: 'Domínio público',
    resumo: 'Jurista, autor de Utopia (1516) e chanceler da Inglaterra. Executado por não aceitar, em consciência, a supremacia do rei sobre a Igreja. Canonizado em 1935.',
    fonte: { rotulo: 'João Paulo II, motu proprio de 31 de outubro de 2000', url: MORE_2000 },
    documento: { rotulo: 'João Paulo II (2000): padroeiro dos governantes e dos políticos', url: MORE_2000 },
  },
};

/** Santo de cada aba: chave = rota (ou seção) do app. `motivo` explica a relação com a finalidade da aba. */
export const SANTOS_DAS_ABAS = {
  painel: [{ santo: 'tomas-aquino', natureza: 'patronagem', motivo: 'O painel organiza a formação inteira; Tomás é padroeiro das escolas católicas e modelo de estudo sistemático que une fé e razão.' }],
  mapa: [{ santo: 'boaventura', natureza: 'tematica', motivo: 'O Itinerário da mente para Deus apresenta o saber como caminho ordenado de um grau a outro, como os ramos desta árvore.' }],
  escada: [{ santo: 'joao-climaco', natureza: 'tematica', motivo: 'A Escada descreve uma subida em degraus, cada um apoiado no anterior — a mesma lógica da escada da formação.' }],
  curso: [{ santo: 'la-salle', natureza: 'tematica', motivo: 'Dedicou a vida ao ensino e à formação de professores: o modelo das aulas, com objetivos, método e verificação.' }],
  biblioteca: [{ santo: 'jeronimo', natureza: 'tematica', motivo: 'Erudito, tradutor e leitor incansável de textos antigos: a atitude que a biblioteca pede diante de cada obra.' }],
  genealogia: [{ santo: 'beda', natureza: 'tematica', motivo: 'Historiador atento às fontes e à cronologia: as relações entre ideias aqui só valem quando documentadas.' }],
  caderno: [{ santo: 'agostinho', natureza: 'tematica', motivo: 'As Confissões são um registro do próprio pensamento e da memória: o caderno serve para escrever o que se compreendeu.' }],
  avaliacoes: [{ santo: 'jose-cupertino', natureza: 'devocao', motivo: 'A devoção popular o invoca por estudantes em provas, por suas próprias dificuldades nos estudos. Não há documento oficial dessa patronagem.' }],
  atlas: [{ santo: 'isidoro', natureza: 'tematica', motivo: 'As Etimologias ordenaram por temas o vocabulário e o saber da Antiguidade — o que o atlas faz com os conceitos do curso.' }],
  plano: [
    { santo: 'joao-bosco', natureza: 'tematica', motivo: 'Educador que acompanhava cada jovem de perto: o plano mede o percurso real e indica o próximo passo.' },
    { santo: 'bento', natureza: 'tematica', motivo: 'A Regra dá ao dia horários fixos de oração, leitura e trabalho: o cronômetro e as sessões registram esse ritmo de estudo.' },
  ],
  busca: [{ santo: 'antonio-padua', natureza: 'devocao', motivo: 'A devoção popular o invoca para encontrar o que se perdeu; a busca encontra aulas, livros, conceitos e autores.' }],
};

/** Santo de cada grande área na árvore do conhecimento (id do nó → referência). */
export const SANTOS_DAS_AREAS = {
  teologia: { santo: 'tomas-aquino', natureza: 'tematica', motivo: 'A Suma Teológica é o modelo de teologia sistemática estudado no curso. (Tomás aparece também no painel: a repetição é deliberada, pela centralidade de sua obra.)' },
  filosofia: { santo: 'justino', natureza: 'tematica', motivo: 'Primeiro grande filósofo cristão: buscou a verdade nas escolas gregas e via nelas "sementes do Verbo".' },
  historia: { santo: 'beda', natureza: 'tematica', motivo: 'A História eclesiástica é exemplo de crítica de documentos e de cronologia. (Repetido na aba Ideias, pelo mesmo motivo.)' },
  geografia: { santo: 'francisco-xavier', natureza: 'tematica', motivo: 'Percorreu a Índia, as Molucas e o Japão, descrevendo regiões, povos e culturas em suas cartas.' },
  sociologia: { santo: 'vicente-paulo', natureza: 'tematica', motivo: 'Organizou a caridade de forma estável, a partir do conhecimento das necessidades concretas da sociedade.' },
  economia: { santo: 'jose', natureza: 'tematica', motivo: 'Trabalhador que sustentou a família: o trabalho e sua dignidade estão no centro da economia. (Padroeiro dos operários; não da economia como ciência.)' },
  formais: { santo: 'alberto-magno', natureza: 'patronagem', motivo: 'Padroeiro dos cultores das ciências naturais, que estudou com observação e experiência.' },
  artes: { santo: 'francisco-sales', natureza: 'patronagem', motivo: 'Padroeiro dos escritores católicos: clareza de linguagem a serviço da formação.' },
  'ciencia-politica': { santo: 'tomas-more', natureza: 'patronagem', motivo: 'Padroeiro dos governantes e dos políticos: responsabilidade pública guiada pela consciência.' },
  direito: { santo: 'tomas-more', natureza: 'tematica', motivo: 'Jurista e chanceler que não aceitou uma lei contrária à consciência: o problema da lei injusta. (Mesmo santo de Ciência Política, pelo vínculo entre os dois campos.)' },
};
