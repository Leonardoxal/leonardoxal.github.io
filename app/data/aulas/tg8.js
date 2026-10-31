// Teologia VIII — História da Igreja, da Idade Média ao Vaticano II (fase teológica, degrau 2).
// Igreja medieval; crise, Reforma e Reforma católica; Igreja e modernidade; o Concílio Vaticano II e depois.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg8-1', titulo: 'A Igreja medieval: reforma, cisma e cristandade', duracao: '150 min',
  aprendera: ['Situar os grandes marcos da Igreja medieval', 'Explicar a reforma gregoriana e a querela das investiduras', 'Explicar o Cisma do Oriente de 1054', 'Avaliar as Cruzadas e a Inquisição com crítica das fontes'],
  prereq: ['Teologia VII (módulo T7)'],
  explicacao: `
<h3>O problema</h3>
<p>A "Idade Média cristã" foi uma era de fé luminosa ou de trevas? A pergunta já está mal posta: é preciso ir aos fatos.</p>
<h3>Marcos</h3>
<p>Gregório Magno (papa de 590 a 604) organizou a Igreja e enviou missionários à Inglaterra ${tag('fato')}. Carlos Magno foi coroado imperador pelo papa Leão III no Natal de 800 ${tag('fato')}.</p>
<h3>Reforma gregoriana</h3>
<p>No século XI, Gregório VII combateu a simonia e a investidura de bispos por leigos ${tag('fato')}. O conflito com o imperador Henrique IV levou ao episódio de Canossa (1077) e terminou na Concordata de Worms (1122) ${tag('fato')}. A reforma buscou a liberdade da Igreja diante do poder secular ${tag('interpretacao')}.</p>
<h3>Cisma do Oriente</h3>
<p>Em 1054, o legado papal Humberto e o patriarca Miguel Cerulário trocaram excomunhões em Constantinopla ${tag('fato')}. A separação entre Igrejas latina e grega amadureceu ao longo de séculos, agravada pelo saque de Constantinopla na Quarta Cruzada (1204) ${tag('fato')}. As excomunhões de 1054 foram levantadas por Paulo VI e Atenágoras em 1965 ${tag('fato')}.</p>
<h3>Cruzadas, mendicantes e universidades</h3>
<p>Urbano II pregou a Primeira Cruzada em Clermont (1095) ${tag('fato')}. No século XIII surgiram as ordens mendicantes, de Francisco e Domingos, e as universidades de Paris e Oxford ${tag('fato')}. A Inquisição papal foi organizada a partir de 1231, com Gregório IX ${tag('fato')}. Historiadores revisaram tanto a lenda negra quanto a apologia acrítica desses temas ${tag('debate')}.</p>`,
  vocabulario: [
    ['Simonia', 'Compra e venda de bens espirituais ou cargos eclesiásticos.'],
    ['Investidura leiga', 'Nomeação de bispos por governantes leigos.'],
    ['Cisma', 'Ruptura da comunhão eclesial.'],
    ['Ordens mendicantes', 'Ordens religiosas que viviam de esmolas, como franciscanos e dominicanos.'],
    ['Cristandade', 'Ordem social em que Igreja e poder político estavam entrelaçados.'],
  ],
  exemplos: `<p><strong>Canossa como expressão:</strong> "ir a Canossa" passou a significar humilhar-se diante de um adversário. Bismarck usou a expressão no século XIX, no conflito com a Igreja, para dizer que não iria a Canossa. Um episódio de 1077 continuou a moldar a linguagem política.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Igreja Ortodoxa e a Católica mantêm diálogo teológico oficial desde 1980 ${tag('fato')}. <strong>No Brasil:</strong> as ordens mendicantes chegaram com a colonização; franciscanos, carmelitas e beneditinos fundaram conventos nos primeiros séculos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a reforma gregoriana defendeu a liberdade da Igreja', tag: 'argumento',
    premissas: ['Se governantes leigos nomeiam bispos, os cargos tendem a servir a interesses políticos.', 'A missão da Igreja exige pastores escolhidos por critérios espirituais.', 'A investidura leiga submetia a escolha aos interesses do poder.'],
    conclusao: 'Logo, a luta contra a investidura leiga foi uma luta pela liberdade da Igreja.',
    nota: 'O argumento não justifica todos os meios usados no conflito, que historiadores avaliam criticamente.',
  },
  objecoes: [
    { objecao: 'A Inquisição matou milhões de pessoas.', tag: 'debate',
      resposta: 'Pesquisas nos arquivos, inclusive no arquivo do antigo Santo Ofício aberto em 1998, indicam números muito menores do que os da propaganda posterior, embora as execuções e a tortura tenham sido reais e graves. João Paulo II pediu perdão, no ano 2000, pelos métodos de intolerância usados a serviço da verdade. A crítica histórica exige números documentados, não slogans.' },
  ],
  aplicacao: `<p>Escolha um dos temas (Canossa, 1054, Primeira Cruzada ou Inquisição) e escreva uma ficha com: fatos datados, duas interpretações historiográficas diferentes e seu juízo fundamentado.</p>`,
  fonte: {
    obra: 'Fontes primárias sobre a reforma gregoriana: o Dictatus papae (1075)', link: null,
    orientacao: `<p>Leia o documento como fonte: quem escreveu, para quê, e que poder reivindica. Não o leia como se fosse dogma.</p>`,
  },
  perguntas: [
    { p: 'Quando Carlos Magno foi coroado?', r: 'No Natal de 800.' },
    { p: 'Como terminou a querela das investiduras?', r: 'Na Concordata de Worms (1122).' },
    { p: 'Quando foram levantadas as excomunhões de 1054?', r: 'Em 1965, por Paulo VI e Atenágoras.' },
  ],
  exercicios: [
    mc('Canossa foi em:', ['1077', '1054', '1122', '1095'], 0, 'Henrique IV.'),
    mc('A Primeira Cruzada foi pregada em:', ['Clermont (1095)', 'Roma (800)', 'Worms (1122)', 'Trento (1545)'], 0, 'Urbano II.'),
    mc('O saque de Constantinopla ocorreu na:', ['Quarta Cruzada', 'Primeira Cruzada', 'Guerra dos Cem Anos', 'Reforma'], 0, '1204.'),
    mc('A Inquisição papal foi organizada a partir de:', ['1231', '1054', '1478', '1542'], 0, 'Gregório IX.'),
    mc('Gregório Magno foi papa de:', ['590 a 604', '800 a 814', '1073 a 1085', '1198 a 1216'], 0, 'Datas.'),
    disc('Entregue a ficha sobre o tema escolhido.', ['Fatos datados', 'Duas interpretações', 'Juízo', 'Fontes']),
  ],
  resumo: ['Gregório Magno e Carlos Magno.', 'Reforma gregoriana.', '1054 e 1965.', 'Cruzadas e Inquisição: crítica das fontes.', 'Mendicantes e universidades.'],
  referencias: [
    { texto: 'Santo Agostinho, A Cidade de Deus.', livro: 'agostinho-cidade' },
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
    { texto: 'João Paulo II, Memória e reconciliação: a Igreja e as culpas do passado (Comissão Teológica Internacional, 2000).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['800', 'Carlos Magno.'], ['1077', 'Canossa.'], ['1054', 'Cisma.']],
  avancado: {
    texto: `<h3>O IV Concílio de Latrão</h3>
<p>Convocado por Inocêncio III, o IV Concílio de Latrão (1215) foi o ponto alto da reforma medieval ${tag('fato')}. Ele usou o termo transubstanciação, determinou a confissão e a comunhão anuais e regulamentou a formação do clero ${tag('fato')}. Também aprovou medidas discriminatórias contra judeus, como sinais distintivos nas vestes, que hoje a Igreja reconhece como injustas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' }],
    exercicios: [
      mc('O IV Concílio de Latrão foi convocado por:', ['Inocêncio III', 'Gregório VII', 'Urbano II', 'Bonifácio VIII'], 0, '1215.'),
      mc('Latrão IV determinou a confissão:', ['Anual', 'Semanal', 'Mensal', 'Opcional'], 0, 'Cânon 21.'),
      mc('As medidas contra judeus são hoje reconhecidas como:', ['Injustas', 'Exemplares', 'Dogmáticas', 'Irrelevantes'], 0, 'Juízo.'),
      disc('Avalie o IV Concílio de Latrão, distinguindo suas decisões doutrinais e disciplinares.', ['Doutrina', 'Disciplina', 'Crítica', 'Juízo'])],
  },
}),

aula({
  id: 'tg8-2', titulo: 'Crise, Reforma e Reforma católica', duracao: '150 min',
  aprendera: ['Explicar a crise da Igreja no fim da Idade Média', 'Explicar as causas e teses da Reforma protestante', 'Explicar o Concílio de Trento e a Reforma católica', 'Situar as missões e a chegada da Igreja ao Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a cristandade ocidental se dividiu no século XVI?</p>
<h3>A crise</h3>
<p>O papado residiu em Avinhão de 1309 a 1377 ${tag('fato')}. Seguiu-se o Grande Cisma do Ocidente (1378–1417), com dois e depois três pretendentes ao papado, resolvido no Concílio de Constança ${tag('fato')}. A corrupção de parte do clero e a mundanidade da corte papal renascentista feriram a credibilidade da Igreja ${tag('interpretacao')}.</p>
<h3>A Reforma</h3>
<p>Em 1517, Martinho Lutero publicou as 95 teses contra os abusos na pregação das indulgências ${tag('fato')}. Suas teses centrais foram a justificação só pela fé, a Escritura como única regra e o sacerdócio comum dos fiéis ${tag('fato')}. Seguiram-se Zuínglio, Calvino e a ruptura anglicana com Henrique VIII (Ato de Supremacia, 1534) ${tag('fato')}.</p>
<h3>Trento e a Reforma católica</h3>
<p>O Concílio de Trento (1545–1563) definiu a doutrina sobre Escritura e Tradição, justificação e sacramentos, e criou os seminários ${tag('fato')}. Paulo III aprovou a Companhia de Jesus em 1540 ${tag('fato')}. Teresa de Ávila, João da Cruz e Carlos Borromeu são figuras da renovação ${tag('fato')}.</p>
<h3>Missões e Brasil</h3>
<p>Os primeiros jesuítas chegaram ao Brasil em 1549, com Manuel da Nóbrega, na armada de Tomé de Sousa ${tag('fato')}. José de Anchieta, que chegou em 1553, escreveu uma gramática do tupi e foi canonizado em 2014 ${tag('fato')}. A ação missionária esteve ligada à colonização, com defesa dos indígenas e também com cumplicidades que a historiografia examina ${tag('debate')}.</p>`,
  vocabulario: [
    ['Cativeiro de Avinhão', 'Período em que os papas residiram em Avinhão (1309–1377).'],
    ['Grande Cisma do Ocidente', 'Divisão com papas rivais (1378–1417).'],
    ['Sola fide', 'Tese da justificação só pela fé.'],
    ['Sola scriptura', 'Tese da Escritura como única regra de fé.'],
    ['Reforma católica', 'Renovação da Igreja nos séculos XVI e XVII.'],
  ],
  exemplos: `<p><strong>Dois nomes para o mesmo período:</strong> "Contrarreforma" acentua a reação ao protestantismo; "Reforma católica" acentua a renovação interna, que começara antes de Lutero em alguns lugares. Historiadores usam os dois termos, e a escolha já revela uma interpretação.</p>`,
  contexto: `<p><strong>No mundo:</strong> católicos e luteranos abriram juntos a memória dos 500 anos da Reforma numa celebração em Lund, na Suécia, com o papa Francisco, em outubro de 2016 ${tag('fato')}. <strong>No Brasil:</strong> São Paulo nasceu de um colégio jesuíta fundado em 1554 por Nóbrega e Anchieta ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Trento uniu doutrina e disciplina', tag: 'argumento',
    premissas: ['A crise tinha causas doutrinais (contestação da fé) e morais (abusos).', 'Responder só à doutrina deixaria os abusos; responder só aos abusos deixaria a confusão doutrinal.', 'Trento emitiu decretos de doutrina e decretos de reforma.'],
    conclusao: 'Logo, Trento respondeu às duas dimensões da crise.',
    nota: 'Os decretos de reforma incluem a obrigação de residência dos bispos e a criação de seminários.',
  },
  objecoes: [
    { objecao: 'Lutero só queria reformar abusos; a Igreja o expulsou sem ouvi-lo.', tag: 'debate',
      resposta: 'Lutero começou contestando abusos, mas logo questionou doutrinas centrais, como o sacrifício da Missa e a autoridade dos concílios. Houve tentativas de diálogo, como em Augsburgo e Ratisbona, que fracassaram. A historiografia atual, católica e luterana, reconhece culpas de ambos os lados e a complexidade do processo.' },
  ],
  aplicacao: `<p>Leia as 95 teses (ao menos as 30 primeiras) e o decreto de Trento sobre a justificação (sessão VI, capítulos 1–9). Compare as duas posições em uma página.</p>`,
  fonte: {
    obra: 'Concílio de Trento, sessão VI (1547), decreto sobre a justificação', link: null,
    orientacao: `<p>Observe que os capítulos expõem a doutrina e os cânones condenam posições específicas.</p>`,
  },
  perguntas: [
    { p: 'Quanto tempo os papas residiram em Avinhão?', r: 'De 1309 a 1377.' },
    { p: 'O que foi decidido em Constança?', r: 'O fim do Grande Cisma do Ocidente.' },
    { p: 'Quando chegaram os jesuítas ao Brasil?', r: 'Em 1549, com Nóbrega.' },
  ],
  exercicios: [
    mc('As 95 teses são de:', ['1517', '1545', '1534', '1378'], 0, 'Lutero.'),
    mc('A Companhia de Jesus foi aprovada em:', ['1540', '1517', '1563', '1549'], 0, 'Paulo III.'),
    mc('O Ato de Supremacia é de:', ['1534', '1517', '1563', '1609'], 0, 'Henrique VIII.'),
    mc('Anchieta foi canonizado em:', ['2014', '1980', '1622', '2000'], 0, 'Francisco.'),
    mc('Trento criou os:', ['Seminários', 'Patriarcados', 'Sínodos', 'Cardeais'], 0, 'Reforma.'),
    disc('Compare as 95 teses e o decreto tridentino sobre a justificação.', ['Lutero', 'Trento', 'Diferenças', 'Juízo']),
  ],
  resumo: ['Avinhão e Grande Cisma.', 'Lutero (1517).', 'Trento (1545–1563).', 'Jesuítas (1540).', 'Brasil: 1549.'],
  referencias: [
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
    { texto: 'John Henry Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã.', livro: 'newman-desenvolvimento' },
    { texto: 'Catecismo da Igreja Católica, §§ 1987–2029.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler a fonte indicada'],
  revisao: [['1309–1377', 'Avinhão.'], ['1517', 'Lutero.'], ['1549', 'Jesuítas no Brasil.']],
  avancado: {
    texto: `<h3>Os mártires da Reforma</h3>
<p>A divisão produziu mártires de vários lados: católicos como Thomas More e John Fisher (1535) na Inglaterra, e protestantes executados em países católicos ${tag('fato')}. A memória comum dos mártires tornou-se tema do diálogo ecumênico ${tag('fato')}. Ler as fontes de cada lado ajuda a evitar a hagiografia unilateral ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John Henry Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã.', livro: 'newman-desenvolvimento' }],
    exercicios: [
      mc('Thomas More e John Fisher morreram em:', ['1535', '1517', '1563', '1605'], 0, 'Inglaterra.'),
      mc('A memória dos mártires é tema do:', ['Diálogo ecumênico', 'Direito civil', 'Cálculo', 'Turismo'], 0, 'Ecumenismo.'),
      mc('Evitar a hagiografia unilateral exige:', ['Ler fontes de cada lado', 'Ler só um lado', 'Não ler', 'Inventar'], 0, 'Método.'),
      disc('Compare o martírio de um católico e de um protestante do século XVI, com fontes.', ['Fatos', 'Fontes', 'Comparação', 'Juízo'])],
  },
}),

aula({
  id: 'tg8-3', titulo: 'A Igreja diante da modernidade', duracao: '150 min',
  aprendera: ['Explicar o impacto da Revolução Francesa sobre a Igreja', 'Situar o pontificado de Pio IX e o Vaticano I', 'Explicar a crise modernista', 'Conhecer a Questão Religiosa no Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como a Igreja respondeu à revolução política, científica e cultural dos séculos XVIII a XX?</p>
<h3>Revolução</h3>
<p>A Revolução Francesa confiscou os bens da Igreja e impôs a Constituição Civil do Clero (1790), que dividiu o clero entre juramentados e refratários ${tag('fato')}. Napoleão firmou uma concordata com Pio VII em 1801 ${tag('fato')}.</p>
<h3>Pio IX e o Vaticano I</h3>
<p>Pio IX (1846–1878) definiu a Imaculada Conceição (1854) e publicou o Syllabus de erros (1864) ${tag('fato')}. O Concílio Vaticano I (1869–1870) aprovou a Dei Filius, sobre fé e razão, e a Pastor aeternus, sobre o primado e a infalibilidade ${tag('fato')}. Em 1870, Roma foi tomada pelas tropas italianas, e os Estados Pontifícios acabaram ${tag('fato')}. A questão romana só foi resolvida pelos Pactos de Latrão (1929), que criaram o Estado da Cidade do Vaticano ${tag('fato')}.</p>
<h3>Leão XIII e o modernismo</h3>
<p>Leão XIII (1878–1903) relançou o tomismo e a Doutrina Social ${tag('fato')}. Pio X condenou o modernismo na encíclica Pascendi (1907) ${tag('fato')}. Pio XI condenou o nazismo na Mit brennender Sorge e o comunismo na Divini Redemptoris, ambas de 1937 ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Na Questão Religiosa (1872–1875), os bispos dom Vital, de Olinda, e dom Macedo Costa, de Belém, foram condenados e presos por aplicar medidas da Santa Sé contra a maçonaria nas irmandades ${tag('fato')}. O episódio contribuiu para o desgaste entre a Igreja e o Império ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Constituição Civil do Clero', 'Lei revolucionária de 1790 que submeteu o clero ao Estado.'],
    ['Syllabus', 'Lista de 80 proposições condenadas por Pio IX (1864).'],
    ['Questão romana', 'Conflito entre a Santa Sé e o Estado italiano após 1870.'],
    ['Modernismo', 'Corrente que reduzia o dogma à experiência religiosa e à evolução histórica.'],
    ['Padroado', 'Regime em que o Estado tinha prerrogativas sobre a Igreja.'],
  ],
  exemplos: `<p><strong>Ler o Syllabus no contexto:</strong> a proposição condenada de número 80 diz que o papa pode e deve reconciliar-se com o progresso, o liberalismo e a civilização moderna. Lida isoladamente, parece rejeitar toda a modernidade; lida com as fontes indicadas pelo próprio Syllabus, refere-se a ataques concretos à Igreja na Itália da época.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Estado da Cidade do Vaticano tem cerca de 44 hectares ${tag('fato')}. <strong>No Brasil:</strong> durante o Império, vigorou o padroado, pelo qual o imperador apresentava bispos e controlava documentos papais (o beneplácito) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a perda dos Estados Pontifícios não enfraqueceu o papado espiritualmente', tag: 'argumento',
    premissas: ['A missão do papa é espiritual: confirmar os irmãos na fé.', 'O poder temporal envolvia o papa em conflitos políticos e militares.', 'Após 1870, a autoridade moral do papado cresceu, como mostra a recepção da Rerum novarum.'],
    conclusao: 'Logo, a perda do poder temporal libertou o papado para sua missão espiritual.',
    nota: 'A tese é interpretação histórica; alguns autores a discutem.',
  },
  objecoes: [
    { objecao: 'A Igreja foi simplesmente inimiga da ciência e da liberdade modernas.', tag: 'debate',
      resposta: 'Houve condenações e erros, como no caso Galileu, que João Paulo II reconheceu. Mas houve também cientistas católicos, como Mendel e Lemaître, e a Igreja defendeu liberdades contra Estados totalitários. A historiografia atual rejeita a tese de um conflito permanente entre ciência e religião como simplificação.' },
  ],
  aplicacao: `<p>Escolha um episódio (Constituição Civil do Clero, Vaticano I, Pascendi ou Questão Religiosa) e escreva uma ficha com contexto, fontes primárias, atores, consequências e uma avaliação equilibrada.</p>`,
  fonte: {
    obra: 'Concílio Vaticano I, constituição Dei Filius (1870)', link: null,
    orientacao: `<p>Observe o capítulo 4 sobre fé e razão: não pode haver verdadeira oposição entre elas.</p>`,
  },
  perguntas: [
    { p: 'Que documentos aprovou o Vaticano I?', r: 'A Dei Filius e a Pastor aeternus.' },
    { p: 'O que criaram os Pactos de Latrão?', r: 'O Estado da Cidade do Vaticano.' },
    { p: 'O que foi a Questão Religiosa?', r: 'O conflito de 1872–1875 em que dois bispos foram presos por medidas contra a maçonaria.' },
  ],
  exercicios: [
    mc('A Constituição Civil do Clero é de:', ['1790', '1801', '1789', '1870'], 0, 'Revolução.'),
    mc('O Syllabus é de:', ['1864', '1854', '1870', '1907'], 0, 'Pio IX.'),
    mc('A Pascendi condenou o:', ['Modernismo', 'Nazismo', 'Comunismo', 'Jansenismo'], 0, 'Pio X.'),
    mc('Os Pactos de Latrão são de:', ['1929', '1870', '1937', '1965'], 0, 'Vaticano.'),
    mc('Dom Vital era bispo de:', ['Olinda', 'Belém', 'Salvador', 'Rio de Janeiro'], 0, 'Questão Religiosa.'),
    disc('Entregue a ficha do episódio escolhido.', ['Contexto', 'Fontes', 'Consequências', 'Equilíbrio']),
  ],
  resumo: ['Revolução e Concordata.', 'Pio IX, Syllabus, Vaticano I.', 'Fim dos Estados Pontifícios.', 'Leão XIII, Pio X, Pio XI.', 'Questão Religiosa no Brasil.'],
  referencias: [
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
    { texto: 'John Henry Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã.', livro: 'newman-desenvolvimento' },
    { texto: 'João Paulo II, Fides et ratio (1998).', livro: 'fides-et-ratio' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['1864', 'Syllabus.'], ['1870', 'Vaticano I.'], ['1929', 'Latrão.']],
  avancado: {
    texto: `<h3>Newman e a modernidade</h3>
<p>John Henry Newman (1801–1890), convertido do anglicanismo em 1845, enfrentou a modernidade com o Ensaio sobre o desenvolvimento da doutrina e a defesa da consciência ${tag('fato')}. Foi criado cardeal por Leão XIII em 1879 e canonizado em 2019 ${tag('fato')}. Muitos o veem como precursor de temas do Vaticano II ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John Henry Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã.', livro: 'newman-desenvolvimento' }],
    exercicios: [
      mc('Newman converteu-se ao catolicismo em:', ['1845', '1879', '1801', '1890'], 0, 'Data.'),
      mc('Foi canonizado em:', ['2019', '2010', '1990', '2005'], 0, 'Francisco.'),
      mc('Foi criado cardeal por:', ['Leão XIII', 'Pio IX', 'Pio X', 'Bento XV'], 0, '1879.'),
      disc('Explique por que Newman é considerado precursor de temas do Vaticano II.', ['Desenvolvimento', 'Consciência', 'Vaticano II', 'Juízo'])],
  },
}),

aula({
  id: 'tg8-4', titulo: 'O Concílio Vaticano II e a Igreja contemporânea', duracao: '150 min',
  aprendera: ['Situar o Vaticano II e seus documentos', 'Explicar as quatro constituições conciliares', 'Conhecer o debate sobre a hermenêutica do Concílio', 'Situar a Igreja na América Latina e no Brasil pós-conciliar'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O Vaticano II foi uma ruptura com o passado ou uma renovação na continuidade?</p>
<h3>O Concílio</h3>
<p>João XXIII anunciou o Concílio em 1959 e abriu-o em 11 de outubro de 1962; Paulo VI encerrou-o em 8 de dezembro de 1965 ${tag('fato')}. O Concílio produziu 16 documentos: 4 constituições, 9 decretos e 3 declarações ${tag('fato')}.</p>
<h3>As constituições</h3>
<p>Sacrosanctum Concilium, sobre a liturgia; Lumen gentium, sobre a Igreja; Dei Verbum, sobre a Revelação; Gaudium et spes, sobre a Igreja no mundo de hoje ${tag('fato')}. Entre as declarações estão a Dignitatis humanae, sobre a liberdade religiosa, e a Nostra aetate, sobre as religiões não cristãs ${tag('fato')}.</p>
<h3>Hermenêutica</h3>
<p>Em 22 de dezembro de 2005, Bento XVI contrapôs uma "hermenêutica da descontinuidade e da ruptura" a uma "hermenêutica da reforma", da renovação na continuidade do único sujeito-Igreja ${tag('fato')}. A interpretação do Concílio continua debatida entre teólogos e historiadores ${tag('debate')}.</p>
<h3>América Latina e Brasil</h3>
<p>As conferências do episcopado latino-americano em Medellín (1968), Puebla (1979), Santo Domingo (1992) e Aparecida (2007) aplicaram o Concílio ao continente ${tag('fato')}. O então cardeal Jorge Mario Bergoglio, eleito papa em 2013, presidiu a comissão de redação do documento de Aparecida ${tag('fato')}. A Congregação para a Doutrina da Fé publicou instruções sobre a teologia da libertação em 1984 e 1986 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Constituição conciliar', 'Documento de maior peso doutrinal de um concílio.'],
    ['Aggiornamento', 'Atualização: palavra associada a João XXIII.'],
    ['Hermenêutica da reforma', 'Leitura do Concílio como renovação na continuidade.'],
    ['CELAM', 'Conselho Episcopal Latino-Americano.'],
    ['Nostra aetate', 'Declaração sobre as religiões não cristãs (1965).'],
  ],
  exemplos: `<p><strong>Ler o texto, não o "espírito":</strong> muitas polêmicas sobre o Concílio invocam um suposto "espírito do Concílio" sem citar os documentos. Ler a Sacrosanctum Concilium, que pede o uso do latim e o lugar principal do canto gregoriano (SC 36 e 116) ao lado do vernáculo, corrige leituras de ambos os extremos.</p>`,
  contexto: `<p><strong>No mundo:</strong> João Paulo II (1978–2005) e Bento XVI (2005–2013) dedicaram seus pontificados em grande parte à recepção do Concílio ${tag('interpretacao')}. <strong>No Brasil:</strong> dom Helder Camara participou ativamente do Concílio e da articulação dos bispos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ler o Concílio na continuidade', tag: 'argumento',
    premissas: ['Um concílio ecumênico é ato do mesmo sujeito, a Igreja, que realizou os anteriores.', 'Os documentos do Vaticano II citam abundantemente a Escritura, os Padres e os concílios anteriores.', 'Uma ruptura doutrinal contradiria a pretensão do próprio Concílio.'],
    conclusao: 'Logo, a interpretação mais fiel aos textos é a da reforma na continuidade, que admite descontinuidades em níveis não doutrinais.',
    nota: 'Bento XVI, discurso à Cúria Romana, 22 de dezembro de 2005.',
  },
  objecoes: [
    { objecao: 'A crise de vocações e de prática religiosa depois de 1965 prova que o Concílio fracassou.', tag: 'debate',
      resposta: 'Uma sucessão no tempo não prova causa: a secularização afetou também Igrejas que não tiveram concílio, e as causas sociais dos anos 1960 foram amplas. Ao mesmo tempo, abusos na aplicação do Concílio são reconhecidos por papas e historiadores. O juízo exige separar textos, aplicações e contexto.' },
  ],
  aplicacao: `<p>Escolha uma das quatro constituições e leia o proêmio e o primeiro capítulo. Escreva uma ficha: tema, estrutura, três citações de fontes anteriores que o texto usa e uma tese principal.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Dei Verbum (1965), capítulos I e II', link: null,
    orientacao: `<p>Observe a relação entre Escritura, Tradição e Magistério (DV 10), e as citações de Trento e do Vaticano I.</p>`,
  },
  perguntas: [
    { p: 'Quando o Vaticano II foi aberto e encerrado?', r: 'Aberto em 11/10/1962 e encerrado em 8/12/1965.' },
    { p: 'Quantos documentos produziu?', r: 'Dezesseis: 4 constituições, 9 decretos e 3 declarações.' },
    { p: 'Quem presidiu a comissão de redação do documento de Aparecida?', r: 'O cardeal Jorge Mario Bergoglio.' },
  ],
  exercicios: [
    mc('A constituição sobre a Revelação é a:', ['Dei Verbum', 'Lumen gentium', 'Gaudium et spes', 'Nostra aetate'], 0, '1965.'),
    mc('A hermenêutica da reforma foi proposta por:', ['Bento XVI', 'Paulo VI', 'João XXIII', 'Francisco'], 0, '2005.'),
    mc('A conferência de Medellín foi em:', ['1968', '1979', '1992', '2007'], 0, 'CELAM.'),
    mc('A Nostra aetate trata das:', ['Religiões não cristãs', 'Liturgia', 'Missões', 'Comunicações'], 0, 'Declaração.'),
    mc('Quantas constituições teve o Vaticano II?', ['Quatro', 'Três', 'Nove', 'Dezesseis'], 0, 'Documentos.'),
    disc('Entregue a ficha da constituição escolhida.', ['Tema', 'Estrutura', 'Fontes citadas', 'Tese']),
  ],
  resumo: ['1962–1965.', '16 documentos.', 'Quatro constituições.', 'Hermenêutica da reforma.', 'Medellín a Aparecida.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Dei Verbum (1965).', livro: 'dei-verbum' },
    { texto: 'Catecismo da Igreja Católica (1992), fruto do Concílio.', livro: 'cic' },
    { texto: 'Joseph Ratzinger, Introdução ao Cristianismo.', livro: 'ratzinger-introducao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['1962', 'Abertura.'], ['16', 'Documentos.'], ['2005', 'Hermenêutica.']],
  avancado: {
    texto: `<h3>O Catecismo de 1992</h3>
<p>O Sínodo dos Bispos de 1985, vinte anos após o Concílio, pediu um catecismo de toda a doutrina católica ${tag('fato')}. João Paulo II promulgou o Catecismo da Igreja Católica em 1992, com a constituição apostólica Fidei depositum, e a edição típica latina em 1997 ${tag('fato')}. O Catecismo é apresentado como texto de referência para a recepção do Concílio ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, constituição Fidei depositum.', livro: 'cic' }],
    exercicios: [
      mc('O Sínodo que pediu o Catecismo foi em:', ['1985', '1965', '1992', '1978'], 0, 'Vinte anos depois.'),
      mc('A constituição de promulgação é a:', ['Fidei depositum', 'Pastor aeternus', 'Dei Verbum', 'Ad tuendam fidem'], 0, '1992.'),
      mc('A edição típica latina é de:', ['1997', '1992', '2005', '1985'], 0, 'Data.'),
      disc('Explique a relação entre o Catecismo de 1992 e o Concílio Vaticano II.', ['Origem', 'Promulgação', 'Função', 'Juízo'])],
  },
}),

avaliacao('tg8-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da Igreja da Idade Média ao Vaticano II, e duas discursivas que pedem juízo histórico fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Monte uma linha do tempo com 20 datas do módulo.</li></ul>`,
[
  disc('Escolha uma crise da história da Igreja (1054, século XVI ou 1789–1870) e explique causas, respostas e consequências, distinguindo fato, interpretação e juízo.', ['Fatos', 'Interpretações', 'Juízo', 'Fontes']),
  disc('Avalie as duas hermenêuticas do Vaticano II com base nos textos conciliares e responda a uma objeção.', ['Textos', 'Hermenêuticas', 'Objeção', 'Juízo próprio']),
]),
];
