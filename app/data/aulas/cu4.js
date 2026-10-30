// Cultura IV — a cultura brasileira e os desafios atuais (etapa 8 do percurso de Cultura).
// Intérpretes da cultura brasileira; cultura popular e folclore; religião e cultura no Brasil;
// cultura digital e redes.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cu4-1', titulo: 'Intérpretes da cultura brasileira: Freyre, Sérgio Buarque, Darcy Ribeiro e Antonio Candido', duracao: '150 min',
  aprendera: ['Expor a interpretação de Gilberto Freyre e suas críticas', 'Situar Sérgio Buarque de Holanda e Darcy Ribeiro', 'Explicar a ideia de formação em Antonio Candido', 'Comparar interpretações com trechos das obras'],
  prereq: ['Cultura III (módulo CU3)'],
  explicacao: `
<h3>O problema</h3>
<p>O que é a cultura brasileira? Uma síntese harmoniosa, uma herança ibérica, um povo novo? Os grandes intérpretes deram respostas diferentes.</p>
<h3>Gilberto Freyre</h3>
<p>Em <em>Casa-grande & senzala</em> (1933), Freyre estudou a formação da sociedade patriarcal açucareira e valorizou a contribuição de indígenas e africanos, ao lado dos portugueses, na cultura brasileira — alimentação, língua, religiosidade, costumes ${tag('fato')}. Críticos posteriores apontaram que a obra suavizou a violência da escravidão e contribuiu para o mito de uma "democracia racial" ${tag('debate')}.</p>
<h3>Sérgio Buarque de Holanda</h3>
<p>Em <em>Raízes do Brasil</em> (1936), Sérgio Buarque analisou a herança ibérica, a personalidade, o "homem cordial" e a dificuldade de separar o público do privado ${tag('fato')}.</p>
<h3>Darcy Ribeiro</h3>
<p>Em <em>O povo brasileiro</em> (1995), Darcy Ribeiro descreveu o Brasil como um "povo novo", formado pela fusão de matrizes indígena, africana e europeia, com várias configurações regionais ${tag('fato')}.</p>
<h3>Antonio Candido</h3>
<p>Em <em>Formação da literatura brasileira</em> (1959), Antonio Candido estudou como, entre o Arcadismo e o Romantismo, se formou um sistema literário — autores, obras e público — que deu à literatura brasileira continuidade própria ${tag('fato')}.</p>`,
  vocabulario: [
    ['Patriarcado (Freyre)', 'Organização social centrada no senhor de engenho e sua família.'],
    ['Democracia racial', 'Ideia, depois criticada, de convivência racial harmoniosa no Brasil.'],
    ['Herança ibérica', 'Traços culturais vindos de Portugal e Espanha.'],
    ['Povo novo (Darcy)', 'Povo formado pela fusão de matrizes diversas.'],
    ['Sistema literário (Candido)', 'Conjunto articulado de autores, obras e público.'],
  ],
  exemplos: `<p><strong>Um mesmo fato, duas leituras:</strong> a culinária brasileira mistura mandioca indígena, azeite de dendê africano e técnicas portuguesas. Freyre leria nisso a riqueza de uma síntese; um crítico lembraria que essa mistura se deu sob a escravidão e a violência. As duas observações são compatíveis: a síntese cultural e a injustiça social coexistiram.</p>`,
  contexto: `<p><strong>No mundo:</strong> Freyre foi lido internacionalmente, e sua obra influenciou debates sobre mestiçagem em outros países ${tag('interpretacao')}. <strong>No Brasil:</strong> nos anos 1950, pesquisas apoiadas pela UNESCO, com Florestan Fernandes e Roger Bastide, documentaram o preconceito racial e contestaram a ideia de democracia racial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nenhuma interpretação única esgota a cultura brasileira', tag: 'argumento',
    premissas: ['A cultura brasileira formou-se de matrizes diversas, em regiões e épocas diferentes.', 'Cada intérprete privilegiou certos materiais: o Nordeste açucareiro, a herança ibérica, a literatura, a etnografia.', 'Generalizar a partir de uma parte deixa de fora outras.'],
    conclusao: 'Logo, as interpretações devem ser lidas como perspectivas parciais, que se completam e se corrigem.',
    nota: 'Comparar intérpretes com as próprias fontes que usaram é o melhor modo de avaliá-los.',
  },
  objecoes: [
    { objecao: 'Freyre é racista e não deve ser lido.', tag: 'debate',
      resposta: 'Freyre tem passagens e tendências criticáveis, e a crítica à "democracia racial" é justa. Mas sua obra rompeu com o racismo científico da época ao valorizar indígenas e africanos, e documentou aspectos da vida cotidiana que outros ignoravam. Ler criticamente é melhor do que deixar de ler.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: compare duas interpretações da cultura brasileira com trechos das obras, expondo as teses com fidelidade e indicando o que cada uma ilumina e omite.</p>`,
  fonte: {
    obra: 'Gilberto Freyre, Casa-grande & senzala (1933), prefácio e cap. 1; Darcy Ribeiro, O povo brasileiro (1995), introdução', link: null,
    orientacao: `<p>Em Freyre, a tese da contribuição das três matrizes. Em Darcy, a ideia de povo novo. Compare as duas sínteses e as críticas que cada uma recebeu.</p>`,
  },
  perguntas: [
    { p: 'Qual a principal crítica a Casa-grande & senzala?', r: 'Ter suavizado a violência da escravidão e contribuído para o mito da democracia racial.' },
    { p: 'O que é o "povo novo" de Darcy Ribeiro?', r: 'O povo formado pela fusão das matrizes indígena, africana e europeia.' },
    { p: 'O que estudou Antonio Candido na Formação?', r: 'A formação de um sistema literário brasileiro entre o Arcadismo e o Romantismo.' },
  ],
  exercicios: [
    mc('Casa-grande & senzala é de:', ['1922', '1933', '1959', '1995'], 1, 'Gilberto Freyre.'),
    mc('O povo brasileiro é de:', ['Darcy Ribeiro', 'Freyre', 'Candido', 'Florestan'], 0, '1995.'),
    mc('Formação da literatura brasileira é de:', ['Candido', 'Sérgio Buarque', 'Mário de Andrade', 'Alceu'], 0, '1959.'),
    mc('As pesquisas da UNESCO nos anos 1950 contestaram:', ['A miscigenação', 'A democracia racial', 'A literatura', 'A independência'], 1, 'Florestan e Bastide.'),
    mc('O "homem cordial" é conceito de:', ['Freyre', 'Sérgio Buarque', 'Darcy', 'Candido'], 1, 'Raízes do Brasil.'),
    disc('Compare duas interpretações da cultura brasileira com trechos das obras.', ['Teses expostas', 'Trechos', 'O que iluminam', 'O que omitem']),
  ],
  resumo: ['Freyre (1933): três matrizes; crítica da democracia racial.', 'Sérgio Buarque (1936).', 'Darcy Ribeiro (1995): povo novo.', 'Candido (1959): sistema literário.', 'Pesquisas da UNESCO.'],
  referencias: [
    { texto: 'Gilberto Freyre, Casa-grande & senzala (1933).' },
    { texto: 'Darcy Ribeiro, O povo brasileiro (1995).' },
    { texto: 'Antonio Candido, Formação da literatura brasileira (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler os textos indicados'],
  revisao: [['Freyre', 'Três matrizes.'], ['Darcy', 'Povo novo.'], ['Candido', 'Sistema literário.']],
  avancado: {
    texto: `<h3>O Modernismo e a antropofagia</h3>
<p>O <em>Manifesto antropófago</em> (1928), de Oswald de Andrade, propôs "devorar" as influências estrangeiras e transformá-las em algo próprio ${tag('fato')}. A Semana de Arte Moderna de 1922 marcou a busca de uma expressão artística brasileira ${tag('fato')}. A antropofagia é lida ora como afirmação criativa, ora como fórmula ambígua de identidade ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Oswald de Andrade, Manifesto antropófago (1928).' }],
    exercicios: [
      mc('O Manifesto antropófago é de:', ['Mário de Andrade', 'Oswald de Andrade', 'Tarsila', 'Villa-Lobos'], 1, '1928.'),
      mc('A Semana de Arte Moderna foi em:', ['1900', '1922', '1945', '1964'], 1, 'São Paulo.'),
      mc('A antropofagia propõe:', ['Rejeitar tudo o estrangeiro', 'Devorar e transformar as influências', 'Copiar a Europa', 'Isolar o Brasil'], 1, 'Metáfora.'),
      disc('Avalie a antropofagia como modelo de relação entre a cultura brasileira e as estrangeiras.', ['Proposta', 'Exemplos', 'Críticas', 'Conclusão'])],
  },
}),

aula({
  id: 'cu4-2', titulo: 'Cultura popular e folclore no Brasil: Mário de Andrade, Câmara Cascudo e o patrimônio imaterial', duracao: '150 min',
  aprendera: ['Conhecer a Missão de Pesquisas Folclóricas de Mário de Andrade', 'Conhecer a obra de Câmara Cascudo', 'Identificar manifestações populares registradas como patrimônio', 'Analisar uma manifestação popular com fontes'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Bumba-meu-boi, frevo, capoeira, cordel: como estudar e proteger a cultura popular sem congelá-la nem transformá-la em espetáculo?</p>
<h3>Mário de Andrade</h3>
<p>Mário de Andrade viajou pelo Norte e Nordeste nos anos 1920 recolhendo músicas e danças e, como diretor do Departamento de Cultura de São Paulo, organizou em 1938 a Missão de Pesquisas Folclóricas, que gravou e documentou manifestações populares no Nordeste e no Norte ${tag('fato')}.</p>
<h3>Câmara Cascudo</h3>
<p>Luís da Câmara Cascudo, de Natal, dedicou a vida ao estudo da cultura popular e publicou o <em>Dicionário do folclore brasileiro</em> (1954) e a <em>História da alimentação no Brasil</em> (1967–1968) ${tag('fato')}.</p>
<h3>O movimento folclórico</h3>
<p>O I Congresso Brasileiro de Folclore aprovou a Carta do Folclore Brasileiro em 1951 ${tag('fato')}.</p>
<h3>Patrimônio imaterial</h3>
<p>O IPHAN registrou, entre outros, o samba de roda do Recôncavo Baiano (2004), o frevo (2007), a roda de capoeira e o ofício dos mestres de capoeira (2008), o complexo cultural do bumba-meu-boi do Maranhão (2011) e a literatura de cordel (2018) ${tag('fato')}. Vários desses bens foram também reconhecidos pela UNESCO ${tag('fato')}.</p>`,
  vocabulario: [
    ['Folclore', 'Saber e expressão tradicional do povo.'],
    ['Missão de Pesquisas Folclóricas', 'Expedição de 1938 organizada por Mário de Andrade.'],
    ['Cordel', 'Literatura popular em versos, impressa em folhetos.'],
    ['Bumba-meu-boi', 'Folguedo com dança, música e teatro em torno de um boi.'],
    ['Salvaguarda', 'Conjunto de ações para manter vivo um bem imaterial.'],
  ],
  exemplos: `<p><strong>O cordel como objeto de estudo:</strong> um folheto tem autor, xilogravura de capa, métrica (em geral sextilhas ou septilhas), tema (histórias, notícias, religião, humor) e circuito de venda em feiras. Estudá-lo exige ler o texto, conhecer o autor e os leitores e perceber as mudanças, como os folhetos digitais.</p>`,
  contexto: `<p><strong>No mundo:</strong> a UNESCO mantém uma lista representativa do patrimônio cultural imaterial da humanidade ${tag('fato')}. <strong>No Brasil:</strong> o acervo da Missão de Pesquisas Folclóricas é guardado pelo Centro Cultural São Paulo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a salvaguarda não deve congelar a cultura popular', tag: 'argumento',
    premissas: ['A cultura popular vive enquanto é praticada e transmitida pelas pessoas.', 'Toda prática viva muda com o tempo, incorporando e abandonando elementos.', 'Fixar uma forma "autêntica" e proibir mudanças transforma a prática em peça de museu.'],
    conclusao: 'Logo, a salvaguarda deve apoiar quem pratica e transmite, não impor uma forma fixa.',
    nota: 'Por isso o registro do IPHAN é revalidado periodicamente e acompanhado de planos de salvaguarda com as comunidades.',
  },
  objecoes: [
    { objecao: 'O folclore é coisa do passado; a cultura popular hoje é a da internet.', tag: 'debate',
      resposta: 'A cultura popular tradicional continua viva em festas, ofícios e expressões em todo o país, e muitas delas se apropriaram da internet para circular. A cultura digital não substitui as tradições, mas convive e se mistura com elas. O estudo precisa olhar as duas.' },
  ],
  aplicacao: `<p>Escolha um bem imaterial registrado pelo IPHAN e apresente: origem, como é praticado e transmitido, quem o pratica, ameaças e ações de salvaguarda, com fontes.</p>`,
  fonte: {
    obra: 'Luís da Câmara Cascudo, Dicionário do folclore brasileiro (1954); IPHAN, dossiês de registro dos bens imateriais', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>No Dicionário, o verbete do bem escolhido. No dossiê do IPHAN, a descrição, os detentores e o plano de salvaguarda.</p>`,
  },
  perguntas: [
    { p: 'O que foi a Missão de Pesquisas Folclóricas?', r: 'A expedição de 1938 organizada por Mário de Andrade para documentar a cultura popular.' },
    { p: 'Que dicionário publicou Câmara Cascudo?', r: 'O Dicionário do folclore brasileiro (1954).' },
    { p: 'Quando a literatura de cordel foi registrada pelo IPHAN?', r: 'Em 2018.' },
  ],
  exercicios: [
    mc('A Missão de Pesquisas Folclóricas foi em:', ['1922', '1938', '1951', '1968'], 1, 'Mário de Andrade.'),
    mc('Câmara Cascudo era de:', ['Recife', 'Natal', 'Salvador', 'São Paulo'], 1, 'Rio Grande do Norte.'),
    mc('A Carta do Folclore Brasileiro é de:', ['1938', '1951', '1988', '2000'], 1, 'I Congresso.'),
    mc('O frevo foi registrado pelo IPHAN em:', ['2004', '2007', '2011', '2018'], 1, 'Formas de Expressão.'),
    mc('A salvaguarda deve sobretudo:', ['Congelar a forma', 'Apoiar quem pratica e transmite', 'Proibir mudanças', 'Transformar em espetáculo'], 1, 'Argumento.'),
    disc('Apresente um bem imaterial registrado: origem, prática, detentores, ameaças e salvaguarda, com fontes.', ['Origem', 'Prática e transmissão', 'Ameaças', 'Salvaguarda e fontes']),
  ],
  resumo: ['Mário de Andrade: Missão de 1938.', 'Câmara Cascudo: Dicionário (1954).', 'Carta do Folclore (1951).', 'Registros: samba de roda, frevo, capoeira, bumba-meu-boi, cordel.', 'Salvaguarda sem congelamento.'],
  referencias: [
    { texto: 'Luís da Câmara Cascudo, Dicionário do folclore brasileiro (1954).' },
    { texto: 'Mário de Andrade, Missão de Pesquisas Folclóricas (1938), acervo.' },
    { texto: 'IPHAN, bens registrados.', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a apresentação do bem', 'Consultar o dossiê do IPHAN'],
  revisao: [['1938', 'Missão.'], ['Cascudo', 'Dicionário.'], ['Salvaguarda', 'Apoiar os detentores.']],
  avancado: {
    texto: `<h3>Cultura popular e indústria</h3>
<p>Manifestações populares como o samba e o forró passaram, no século XX, a circular pelo rádio e pelo disco, ganhando público nacional e sofrendo pressões comerciais ${tag('fato')}. Hermano Vianna, em <em>O mistério do samba</em> (1995), estudou como o samba se tornou símbolo nacional pela interação entre grupos sociais diversos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Hermano Vianna, O mistério do samba (1995).' }],
    exercicios: [
      mc('O mistério do samba é de:', ['Hermano Vianna', 'Câmara Cascudo', 'Mário de Andrade', 'Freyre'], 0, '1995.'),
      mc('No século XX, o samba passou a circular sobretudo pelo:', ['Cordel', 'Rádio e disco', 'Teatro grego', 'Jornal apenas'], 1, 'Indústria.'),
      mc('A tese de Vianna é sobre o samba como:', ['Música estrangeira', 'Símbolo nacional construído por interação social', 'Música proibida', 'Música erudita'], 1, 'Interpretação.'),
      disc('Analise como uma manifestação popular brasileira mudou ao entrar na indústria cultural.', ['Manifestação', 'Mudanças', 'Ganhos e perdas', 'Fontes'])],
  },
}),

aula({
  id: 'cu4-3', titulo: 'Religião e cultura no Brasil: catolicismo popular, barroco, irmandades e pluralismo', duracao: '150 min',
  aprendera: ['Caracterizar o catolicismo popular brasileiro', 'Relacionar o barroco mineiro à religiosidade', 'Conhecer o papel das irmandades leigas', 'Analisar o pluralismo religioso atual com cautela'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Festas de padroeiro, romarias, procissões, igrejas barrocas: a religião moldou a cultura brasileira. Como, e o que muda com o pluralismo atual?</p>
<h3>Catolicismo popular</h3>
<p>O catolicismo popular brasileiro desenvolveu-se em torno de santos padroeiros, promessas, romarias, festas do Divino e oratórios domésticos, muitas vezes com pouca presença de clero ${tag('fato')}. A imagem de Nossa Senhora da Conceição Aparecida foi encontrada no rio Paraíba do Sul em 1717 por pescadores ${tag('fato')}.</p>
<h3>Barroco mineiro</h3>
<p>O ouro de Minas financiou, no século XVIII, igrejas como as de Ouro Preto, Mariana e Congonhas; Antônio Francisco Lisboa, o Aleijadinho, esculpiu os doze profetas do santuário do Bom Jesus de Matosinhos, em Congonhas ${tag('fato')}.</p>
<h3>Irmandades</h3>
<p>Irmandades e ordens terceiras de leigos construíram igrejas, organizaram festas e assistiram os associados; irmandades de pretos, como as de Nossa Senhora do Rosário, foram espaço de organização de africanos e afrodescendentes, escravizados e libertos ${tag('fato')}.</p>
<h3>Pluralismo</h3>
<p>Desde o fim do século XX, o crescimento das igrejas evangélicas, sobretudo pentecostais, e a diversidade religiosa mudaram a paisagem religiosa do país ${tag('fato')}. Interpretar essas mudanças exige dados do censo e cautela com generalizações ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Catolicismo popular', 'Vivência da fé centrada em santos, promessas e festas, com protagonismo leigo.'],
    ['Romaria', 'Peregrinação a um santuário.'],
    ['Festa do Divino', 'Festa do Espírito Santo, com coroação de imperador e partilha.'],
    ['Irmandade', 'Associação de leigos para culto e assistência mútua.'],
    ['Barroco', 'Estilo artístico dos séculos XVII e XVIII, marcado por movimento e dramaticidade.'],
  ],
  exemplos: `<p><strong>A igreja do Rosário dos Pretos:</strong> em várias cidades coloniais, irmandades de homens pretos construíram suas próprias igrejas, elegiam reis e rainhas de Congo nas festas e ajudavam associados a comprar a alforria ou a ter sepultura digna. O caso mostra fé, organização comunitária e resistência sob a escravidão.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Brasil é um dos países com maior número de católicos do mundo ${tag('fato')}. <strong>No Brasil:</strong> o Santuário Nacional de Aparecida recebe milhões de romeiros por ano ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o catolicismo popular é chave para entender a cultura brasileira', tag: 'argumento',
    premissas: ['Durante séculos, a vida social de vilas e cidades organizou-se em torno das festas religiosas e das irmandades.', 'Essas festas geraram músicas, danças, comidas, arquitetura e calendário.', 'Muitas expressões culturais populares atuais derivam delas.'],
    conclusao: 'Logo, não se entende a cultura brasileira sem o catolicismo popular.',
    nota: 'Reconhecer esse papel não exige ignorar outras matrizes religiosas, indígenas e africanas.',
  },
  objecoes: [
    { objecao: 'O catolicismo popular é superstição que a Igreja deveria eliminar.', tag: 'debate',
      resposta: 'O Diretório sobre a piedade popular e a liturgia (2001) e o documento de Aparecida (2007) reconhecem na piedade popular um verdadeiro tesouro do povo de Deus, que deve ser evangelizado e purificado, não desprezado. A distinção é entre piedade autêntica e desvios, que se corrigem pela catequese.' },
  ],
  aplicacao: `<p>Analise uma festa religiosa popular da sua região: origem, organização (irmandade, paróquia, comunidade), ritos, música, comida, mudanças recentes e sentido para os participantes, com fontes e entrevista.</p>`,
  fonte: {
    obra: 'Congregação para o Culto Divino, Diretório sobre a piedade popular e a liturgia (2001); V Conferência do CELAM, Documento de Aparecida (2007), nn. 258–265', link: null,
    orientacao: `<p>No Diretório, os princípios de relação entre piedade popular e liturgia. Em Aparecida, a valorização da piedade popular como espiritualidade do povo.</p>`,
  },
  perguntas: [
    { p: 'Quando foi encontrada a imagem de Aparecida?', r: 'Em 1717, no rio Paraíba do Sul.' },
    { p: 'Que obra o Aleijadinho fez em Congonhas?', r: 'Os doze profetas do santuário do Bom Jesus de Matosinhos.' },
    { p: 'Que papel tiveram as irmandades de pretos?', r: 'Foram espaço de culto, organização e assistência para africanos e afrodescendentes.' },
  ],
  exercicios: [
    mc('A imagem de Aparecida foi encontrada em:', ['1500', '1717', '1822', '1931'], 1, 'Rio Paraíba do Sul.'),
    mc('Os doze profetas do Aleijadinho estão em:', ['Ouro Preto', 'Congonhas', 'Mariana', 'Salvador'], 1, 'Bom Jesus de Matosinhos.'),
    mc('Irmandades eram associações de:', ['Clérigos apenas', 'Leigos', 'Militares', 'Comerciantes estrangeiros'], 1, 'Culto e assistência.'),
    mc('O Documento de Aparecida é de:', ['1979', '1992', '2007', '2020'], 2, 'V Conferência do CELAM.'),
    mc('Interpretar o pluralismo religioso exige:', ['Generalizações', 'Dados do censo e cautela', 'Só opinião', 'Ignorar números'], 1, 'Método.'),
    disc('Analise uma festa religiosa popular da sua região com fontes e entrevista.', ['Origem e organização', 'Ritos e expressões', 'Mudanças', 'Sentido para os participantes']),
  ],
  resumo: ['Catolicismo popular: santos, promessas, festas.', 'Aparecida (1717).', 'Barroco mineiro; Aleijadinho.', 'Irmandades, inclusive de pretos.', 'Pluralismo; Diretório (2001), Aparecida (2007).'],
  referencias: [
    { texto: 'Congregação para o Culto Divino, Diretório sobre a piedade popular e a liturgia (2001).' },
    { texto: 'V Conferência do CELAM, Documento de Aparecida (2007).' },
    { texto: 'Germain Bazin, O Aleijadinho e a escultura barroca no Brasil (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da festa', 'Ler os textos indicados'],
  revisao: [['1717', 'Aparecida.'], ['Aleijadinho', 'Congonhas.'], ['Irmandades', 'Leigos.']],
  avancado: {
    texto: `<h3>Sincretismo e dupla pertença</h3>
<p>No Brasil, práticas de religiões de matriz africana associaram orixás a santos católicos, o que estudiosos interpretam ora como estratégia de sobrevivência sob a repressão, ora como fusão de crenças ${tag('interpretacao')}. Desde o fim do século XX, lideranças do candomblé reivindicaram a separação das duas tradições ${tag('fato')}. A Igreja ensina o respeito às pessoas de outras religiões e o diálogo, sem confundir as crenças (Nostra aetate, 2) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Concílio Vaticano II, Nostra aetate (1965).' }],
    exercicios: [
      mc('A associação de orixás e santos é interpretada como:', ['Uma só explicação aceita', 'Estratégia de sobrevivência ou fusão de crenças', 'Invenção recente', 'Doutrina da Igreja'], 1, 'Interpretações.'),
      mc('Lideranças do candomblé reivindicaram:', ['Mais sincretismo', 'A separação das tradições', 'Fim do candomblé', 'Nada'], 1, 'Fim do século XX.'),
      mc('A Nostra aetate trata do:', ['Diálogo com outras religiões', 'Ano litúrgico', 'Direito canônico', 'Celibato'], 0, '1965.'),
      disc('Distinga diálogo inter-religioso e sincretismo com um exemplo brasileiro.', ['Diálogo', 'Sincretismo', 'Exemplo', 'Doutrina'])],
  },
}),

aula({
  id: 'cu4-4', titulo: 'Cultura digital: redes, algoritmos, atenção e presença', duracao: '150 min',
  aprendera: ['Caracterizar a cultura digital', 'Explicar como algoritmos moldam o que vemos', 'Conhecer o Marco Civil da Internet', 'Conhecer o ensino recente da Igreja sobre a presença nas redes'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Grande parte da vida cultural hoje acontece em telas. A cultura digital é uma nova cultura, uma ferramenta ou as duas coisas?</p>
<h3>Características</h3>
<p>A cultura digital combina produção por muitos (qualquer pessoa publica), circulação rápida, mistura de formatos e permanência dos registros ${tag('fato')}. Plataformas usam algoritmos de recomendação que selecionam o conteúdo com base no comportamento do usuário ${tag('fato')}.</p>
<h3>Atenção</h3>
<p>Modelos de negócio baseados em publicidade competem pela atenção, o que tende a favorecer conteúdos que provocam reação rápida ${tag('interpretacao')}. Efeitos sobre concentração, polarização e saúde mental, sobretudo de jovens, são pesquisados e debatidos ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, como a neutralidade da rede e a proteção da privacidade ${tag('fato')}. A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) regula o tratamento de dados pessoais ${tag('fato')}.</p>
<h3>A Igreja</h3>
<p>O Dicastério para a Comunicação publicou em 2023 a reflexão pastoral <em>Rumo a uma presença plena</em>, sobre o envolvimento nas redes sociais ${tag('fato')}. As mensagens para o Dia Mundial das Comunicações Sociais tratam da cultura digital desde o início do século XXI ${tag('fato')}.</p>`,
  vocabulario: [
    ['Cultura digital', 'Formas de produzir, circular e viver a cultura mediadas por redes e dispositivos.'],
    ['Algoritmo de recomendação', 'Programa que seleciona conteúdos para cada usuário.'],
    ['Economia da atenção', 'Modelo em que a atenção do usuário é o recurso disputado.'],
    ['Bolha', 'Ambiente em que o usuário vê sobretudo o que confirma suas preferências.'],
    ['Marco Civil da Internet', 'Lei nº 12.965/2014.'],
  ],
  exemplos: `<p><strong>Um dia na rede:</strong> o algoritmo nota que você assistiu a três vídeos sobre um tema e passa a mostrar mais do mesmo, com títulos cada vez mais chamativos. Em poucos dias, sua visão do assunto pode ficar estreita sem que você perceba. Buscar ativamente fontes diversas e limitar o tempo de rolagem são formas de recuperar a escolha.</p>`,
  contexto: `<p><strong>No mundo:</strong> vários países debatem a regulação das plataformas digitais e a proteção de crianças e adolescentes online ${tag('fato')}. <strong>No Brasil:</strong> o Comitê Gestor da Internet (CGI.br) publica pesquisas sobre o uso da internet no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a técnica digital não é culturalmente neutra', tag: 'argumento',
    premissas: ['As plataformas são desenhadas com objetivos, como maximizar o tempo de uso.', 'O desenho favorece certos comportamentos, como a rolagem contínua e a reação imediata.', 'Comportamentos repetidos tornam-se hábitos, e hábitos formam cultura.'],
    conclusao: 'Logo, o desenho das plataformas molda a cultura, e não é neutro.',
    nota: 'Isso não torna a técnica má; exige discernimento sobre o desenho e o uso, como insiste a Laudato si\' sobre o paradigma tecnocrático (n. 106–114).',
  },
  objecoes: [
    { objecao: 'A internet democratizou a cultura; criticá-la é nostalgia.', tag: 'debate',
      resposta: 'A internet ampliou o acesso a obras, cursos e vozes antes excluídas, e isso é ganho real. Mas acesso não é formação: a mesma rede pode favorecer superficialidade, desinformação e dependência. Reconhecer ganhos e riscos, e aprender a usá-la bem, é melhor que celebração ou rejeição sem critério.' },
  ],
  aplicacao: `<p>Registre durante uma semana o seu uso de redes: tempo, tipos de conteúdo, o que buscou e o que lhe foi recomendado. Analise com os conceitos da aula e proponha três mudanças de hábito.</p>`,
  fonte: {
    obra: 'Lei nº 12.965/2014 (Marco Civil da Internet), arts. 2º e 3º; Dicastério para a Comunicação, Rumo a uma presença plena (2023)', link: { url: 'https://www.vatican.va', rotulo: 'vatican.va' },
    orientacao: `<p>No Marco Civil, os fundamentos e princípios. Na reflexão do Dicastério, as propostas sobre escuta, encontro e presença nas redes.</p>`,
  },
  perguntas: [
    { p: 'O que faz um algoritmo de recomendação?', r: 'Seleciona conteúdos para cada usuário com base em seu comportamento.' },
    { p: 'Que lei estabelece princípios para o uso da internet no Brasil?', r: 'O Marco Civil da Internet (Lei nº 12.965/2014).' },
    { p: 'Que documento da Santa Sé de 2023 trata das redes?', r: 'Rumo a uma presença plena, do Dicastério para a Comunicação.' },
  ],
  exercicios: [
    mc('O Marco Civil da Internet é de:', ['2009', '2014', '2018', '2023'], 1, 'Lei 12.965.'),
    mc('A LGPD é de:', ['2014', '2018', '2020', '2011'], 1, 'Lei 13.709.'),
    mc('A economia da atenção disputa:', ['Matéria-prima', 'A atenção dos usuários', 'Terras', 'Energia'], 1, 'Modelo de negócio.'),
    mc('Rumo a uma presença plena é de:', ['2013', '2019', '2023', '2025'], 2, 'Dicastério para a Comunicação.'),
    mc('O desenho das plataformas é:', ['Neutro', 'Formador de hábitos e cultura', 'Irrelevante', 'Ilegal'], 1, 'Argumento.'),
    disc('Apresente o registro de uma semana de uso de redes, a análise e três mudanças de hábito.', ['Registro', 'Análise com conceitos', 'Três mudanças', 'Clareza']),
  ],
  resumo: ['Cultura digital: muitos produzem, tudo circula.', 'Algoritmos e atenção.', 'Efeitos debatidos.', 'Marco Civil (2014); LGPD (2018).', 'Rumo a uma presença plena (2023).'],
  referencias: [
    { texto: 'Lei nº 12.965, de 2014 (Marco Civil da Internet).' },
    { texto: 'Dicastério para a Comunicação, Rumo a uma presença plena (2023).' },
    { texto: 'Comitê Gestor da Internet no Brasil, pesquisas TIC.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o registro e a análise', 'Ler os textos indicados'],
  revisao: [['Algoritmo', 'Recomendação.'], ['Marco Civil', '2014.'], ['Presença plena', '2023.']],
  avancado: {
    texto: `<h3>McLuhan: o meio é a mensagem</h3>
<p>Marshall McLuhan (<em>Os meios de comunicação como extensões do homem</em>, 1964) afirmou que "o meio é a mensagem": cada meio muda a percepção e a vida social independentemente do conteúdo que transmite ${tag('fato')}. A tese é usada para pensar a internet e é criticada por determinismo tecnológico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Marshall McLuhan, Os meios de comunicação como extensões do homem (1964).' }],
    exercicios: [
      mc('"O meio é a mensagem" é de:', ['McLuhan', 'Postman', 'Adorno', 'Benjamin'], 0, '1964.'),
      mc('A tese afirma que o meio muda a percepção:', ['Só pelo conteúdo', 'Independentemente do conteúdo', 'Nunca', 'Só na televisão'], 1, 'Extensões do homem.'),
      mc('Uma crítica a McLuhan é o:', ['Determinismo tecnológico', 'Excesso de dados', 'Moralismo', 'Silêncio'], 0, 'Debate.'),
      disc('Aplique "o meio é a mensagem" a uma rede social atual e avalie a tese.', ['Tese', 'Rede escolhida', 'Aplicação', 'Avaliação'])],
  },
}),

avaliacao('cu4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os intérpretes da cultura brasileira, a cultura popular, religião e cultura no Brasil e a cultura digital, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a comparação de intérpretes e a análise da festa religiosa.</li><li>Revise os bens imateriais registrados.</li></ul>`,
[
  disc('Analise uma manifestação da cultura brasileira com um intérprete clássico (Freyre, Sérgio Buarque, Darcy ou Candido), indicando o que a interpretação ilumina e o que omite.', ['Manifestação', 'Intérprete', 'O que ilumina', 'O que omite']),
  disc('Mostre como religião, cultura popular e cultura digital se encontram numa festa ou devoção brasileira atual.', ['Religião', 'Cultura popular', 'Cultura digital', 'Fontes']),
]),
];
