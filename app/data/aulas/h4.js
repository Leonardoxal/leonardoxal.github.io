// História IV — estudos avançados por períodos (etapa 8 do percurso de História).
// Antiguidade, Cristandade medieval, revoluções modernas e formação do Brasil, cada período lido nas
// fontes e com seus debates. Datas convencionais e estimativas vêm indicadas como tais.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'h4-1', titulo: 'Antiguidade: a pólis grega, Roma e a cristianização do Império', duracao: '150 min',
  aprendera: ['Situar as instituições da pólis e da República romana', 'Explicar a passagem da República ao Principado', 'Explicar a cristianização do Império com datas e fontes', 'Avaliar o legado antigo, inclusive no Brasil'],
  prereq: ['História III (módulo H3)', 'Filosofia antiga (Degrau 5)'],
  explicacao: `
<h3>O problema</h3>
<p>Grécia e Roma deixaram instituições, línguas, direito e categorias políticas que ainda usamos. Mas o que sabemos sobre elas depende de fontes escassas e seletivas. Esta aula percorre os marcos principais e treina a leitura de três tipos de fonte antiga: historiadores, inscrições e cartas.</p>

<h3>A pólis</h3>
<p>A pólis era uma comunidade de cidadãos com território, deuses e leis próprios. Em Atenas, as reformas de Clístenes (508/507 a.C.) reorganizaram os cidadãos em tribos territoriais e deram base à democracia ${tag('fato')}. A cidadania era restrita a homens livres nascidos de pais atenienses; mulheres, estrangeiros residentes e escravizados estavam excluídos ${tag('fato')}. Esparta organizou-se de outro modo, com educação militar coletiva e uma população servil, os hilotas ${tag('fato')}. Depois das conquistas de Alexandre (336–323 a.C.), a cultura grega difundiu-se pelo Mediterrâneo oriental e pelo Oriente Próximo: é o período helenístico ${tag('fato')}.</p>

<h3>Roma: da República ao Principado</h3>
<p>Segundo a tradição, a República começou em 509 a.C. ${tag('fato')}. Seus órgãos eram as magistraturas anuais (cônsules), o Senado e as assembleias. As Guerras Púnicas contra Cartago (264–146 a.C.) deram a Roma o domínio do Mediterrâneo ocidental ${tag('fato')}. A expansão concentrou terras e escravizados nas mãos de poucos; as reformas dos Graco (a partir de 133 a.C.) abriram um século de conflitos civis ${tag('fato')}. Júlio César foi assassinado em 44 a.C.; em 27 a.C. Otaviano recebeu o título de Augusto e iniciou o Principado, mantendo a fachada das instituições republicanas ${tag('fato')}. Augusto deixou um balanço de seus feitos, as <em>Res Gestae</em>, conhecido sobretudo pela inscrição de Ancara ${tag('fato')} — fonte primária, mas propaganda de quem a escreveu.</p>

<h3>A cristianização do Império</h3>
<p>Por volta de 112, Plínio, o Jovem, governador da Bitínia, escreveu ao imperador Trajano perguntando como proceder com os cristãos, e descreveu que se reuniam antes do amanhecer para cantar a Cristo "como a um deus" ${tag('fato')}. É testemunho externo, de um não cristão, sobre o culto nascente. As perseguições alternaram períodos de tolerância e violência, até a de Diocleciano (a partir de 303) ${tag('fato')}. Em 313, o acordo de Milão entre Constantino e Licínio garantiu a liberdade de culto aos cristãos ${tag('fato')}. Em 380, o edito de Tessalônica, de Teodósio, fez do cristianismo niceno a religião do Império ${tag('fato')}. Em 395 o Império foi dividido entre os filhos de Teodósio; em 476 foi deposto o último imperador do Ocidente ${tag('fato')}.</p>

<h3>Queda ou transformação?</h3>
<p>Gibbon falou de "declínio e queda"; a historiografia recente da Antiguidade tardia (Peter Brown) enfatiza a transformação gradual e a vitalidade cultural e religiosa dos séculos III a VIII ${tag('interpretacao')}. Outros historiadores, como Bryan Ward-Perkins, insistem nos indícios arqueológicos de colapso material no Ocidente ${tag('debate')}.</p>`,
  vocabulario: [
    ['Pólis', 'Cidade-Estado grega: comunidade de cidadãos com leis e deuses próprios.'],
    ['Helenismo', 'Difusão da cultura grega após Alexandre (323–31 a.C.).'],
    ['Principado', 'Regime de Augusto e sucessores: poder imperial sob forma republicana.'],
    ['Res Gestae', 'Balanço dos feitos de Augusto, conservado em inscrições.'],
    ['Antiguidade tardia', 'Período de transformação do mundo romano (séculos III a VIII).'],
  ],
  exemplos: `<p><strong>Três fontes, três cuidados:</strong> Tácito (historiador senatorial) escreve com hostilidade aos imperadores; as <em>Res Gestae</em> são autopromoção de Augusto; a carta de Plínio é relatório administrativo a um superior. Cada uma exige perguntar quem fala, a quem e para quê.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Mediterrâneo romano unificou administração, estradas e comércio, e foi o espaço da primeira expansão cristã. <strong>No Brasil:</strong> o legado é direto — o português vem do latim, e o direito civil brasileiro pertence à tradição romano-germânica, que estuda o direito romano como fundamento ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a carta de Plínio é fonte valiosa sobre o cristianismo primitivo', tag: 'argumento',
    premissas: ['Um testemunho externo e hostil não tem interesse em favorecer o grupo que descreve.', 'Plínio era governador romano, sem simpatia pelos cristãos, e escrevia ao imperador para pedir orientação.', 'Ele descreve práticas observadas em interrogatórios.'],
    conclusao: 'Logo, o que Plínio confirma sobre o culto (reuniões, hinos a Cristo, refeição comum) tem forte credibilidade, ainda que sua avaliação seja hostil.',
    nota: 'Aplicação direta do critério de independência e de intenção estudado no módulo H1.',
  },
  objecoes: [
    { objecao: 'A democracia ateniense é modelo para a nossa.', tag: 'debate',
      resposta: 'Ela inventou instituições e ideias decisivas, mas era direta, restrita a uma minoria de cidadãos e apoiada no trabalho escravo. Compará-la à democracia representativa moderna exige marcar semelhanças e diferenças, sem anacronismo.' },
  ],
  aplicacao: `<p>Leia a carta de Plínio a Trajano (X,96) e a resposta do imperador (X,97). Registre no Caderno o que se pode afirmar sobre os cristãos da Bitínia, o que é juízo de Plínio e qual era a política romana proposta por Trajano.</p>`,
  fonte: {
    obra: 'Plínio, o Jovem, Cartas X,96–97; Augusto, Res Gestae Divi Augusti', link: null,
    orientacao: `<p>Na carta X,96, separe: procedimentos de Plínio, informações sobre o culto, opinião sobre a "superstição". Nas Res Gestae, liste três afirmações de Augusto e pergunte o que um senador hostil diria de cada uma.</p>`,
  },
  perguntas: [
    { p: 'Qual a importância das reformas de Clístenes?', r: 'Reorganizaram os cidadãos em tribos territoriais e deram base à democracia ateniense (508/507 a.C.).' },
    { p: 'O que mudou em 27 a.C.?', r: 'Otaviano recebeu o título de Augusto; começou o Principado.' },
    { p: 'O que decidiu o edito de Tessalônica (380)?', r: 'Fez do cristianismo niceno a religião do Império.' },
  ],
  exercicios: [
    mc('As reformas de Clístenes, base da democracia ateniense, datam de:', ['776 a.C.', '508/507 a.C.', '431 a.C.', '323 a.C.'], 1, '508/507 a.C.'),
    mc('As Guerras Púnicas foram travadas contra:', ['Persas', 'Cartago', 'Gauleses', 'Partos'], 1, '264–146 a.C.'),
    mc('A carta de Plínio a Trajano sobre os cristãos data de cerca de:', ['33', '70', '112', '313'], 2, 'Cerca de 112.'),
    mc('O acordo de Milão (313):', ['Proibiu o paganismo', 'Garantiu liberdade de culto aos cristãos', 'Dividiu o Império', 'Convocou o Concílio de Niceia'], 1, 'Constantino e Licínio.'),
    mc('Que historiador enfatiza a "transformação" da Antiguidade tardia em vez da "queda"?', ['Gibbon', 'Peter Brown', 'Tácito', 'Ward-Perkins'], 1, 'Ward-Perkins insiste no colapso material.'),
    disc('"Queda" ou "transformação" do Império Romano do Ocidente? Exponha as duas posições, as evidências de cada uma (textuais e arqueológicas) e conclua.', ['Expõe as duas posições', 'Usa evidências de tipos diferentes', 'Distingue regiões e esferas (política, economia, religião)', 'Conclusão fundamentada']),
  ],
  resumo: ['Pólis; Clístenes (508/507 a.C.); cidadania restrita.', 'Roma: República (509), Púnicas (264–146), Augusto (27 a.C.).', 'Plínio a Trajano (c. 112): testemunho externo.', 'Milão (313), Tessalônica (380), divisão (395), 476.', 'Queda ou transformação: debate aberto.'],
  referencias: [
    { texto: 'Plínio, o Jovem, Cartas, X, 96–97.' },
    { texto: 'Augusto, Res Gestae Divi Augusti.' },
    { texto: 'Tácito, Anais.' },
    { texto: 'Peter Brown, O fim do mundo clássico (1971).' },
    { texto: 'Bryan Ward-Perkins, A queda de Roma e o fim da civilização (2005).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler Plínio X,96–97'],
  revisao: [['Clístenes', '508/507 a.C.: base da democracia ateniense.'], ['Augusto', '27 a.C.: início do Principado.'], ['Cristianização', 'Milão 313; Tessalônica 380.']],
  avancado: {
    texto: `<h3>Epigrafia e numismática</h3>
<p>Inscrições e moedas são fontes centrais da Antiguidade: datáveis, numerosas e muitas vezes involuntárias. A epigrafia estuda inscrições (leis, dedicatórias, epitáfios); a numismática, moedas, cujos tipos e legendas mostram a propaganda imperial e as variações do valor do metal ${tag('fato')}. A desvalorização da moeda de prata no século III é estudada pela análise do teor de metal das moedas ${tag('interpretacao')}.</p>
<h3>O direito romano</h3>
<p>O <em>Corpus iuris civilis</em>, compilado sob Justiniano (529–534), transmitiu o direito romano à Idade Média e à tradição jurídica europeia e latino-americana ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mary Beard, SPQR: uma história da Roma antiga (2015).' }, { texto: 'Moses Finley, Democracia antiga e moderna (1973).' }],
    exercicios: [
      mc('A ciência das inscrições chama-se:', ['Numismática', 'Epigrafia', 'Diplomática', 'Paleografia'], 1, 'Epigrafia.'),
      mc('O Corpus iuris civilis foi compilado sob:', ['Augusto', 'Constantino', 'Justiniano', 'Carlos Magno'], 2, '529–534.'),
      mc('A desvalorização da moeda no século III é estudada sobretudo pela:', ['Análise do teor de metal', 'Leitura de poemas', 'Arquitetura', 'Genealogia'], 0, 'Numismática e análise química.'),
      disc('Compare a democracia ateniense e a democracia representativa moderna em três pontos, mostrando semelhanças e diferenças sem anacronismo.', ['Três pontos de comparação', 'Semelhanças', 'Diferenças', 'Evita anacronismo'])],
  },
}),

aula({
  id: 'h4-2', titulo: 'A Cristandade medieval: reinos, Igreja, cidades e universidades', duracao: '150 min',
  aprendera: ['Situar os marcos da formação da Cristandade ocidental', 'Explicar a reforma gregoriana e a questão das investiduras', 'Explicar o surgimento das universidades', 'Relacionar a Idade Média portuguesa à expansão marítima'],
  prereq: ['Aula anterior', 'Filosofia medieval e escolástica (Degrau 7)'],
  explicacao: `
<h3>O problema</h3>
<p>Mil anos não cabem num rótulo. Entre 500 e 1500, a Europa ocidental formou reinos, mosteiros, cidades, universidades e uma Igreja com instituições próprias. Esta aula segue alguns marcos e fontes, e pergunta pelo que há de verdadeiro e de falso na imagem de uma "Idade das Trevas".</p>

<h3>Reinos e império</h3>
<p>Os reinos germânicos substituíram a administração romana no Ocidente; o batismo do rei franco Clóvis, por volta de 500, aliou os francos à Igreja de Roma ${tag('fato')}. Em 800, o papa Leão III coroou Carlos Magno imperador em Roma ${tag('fato')}. A <em>Vida de Carlos Magno</em>, de Eginhardo, é fonte próxima do imperador, escrita por um cortesão admirador ${tag('fato')}. A renovação cultural carolíngia preservou e copiou textos antigos em mosteiros ${tag('fato')}.</p>

<h3>Mosteiros e reforma da Igreja</h3>
<p>A Regra de São Bento organizou a vida monástica ocidental; a abadia de Cluny (910) tornou-se centro de reforma ${tag('fato')}. No século XI, a reforma gregoriana buscou libertar a Igreja da tutela leiga: Gregório VII afirmou a autoridade papal (o <em>Dictatus papae</em>, 1075) e enfrentou o imperador Henrique IV na questão das investiduras ${tag('fato')}. A Concordata de Worms (1122) distinguiu a investidura espiritual, pela Igreja, da temporal, pelo imperador ${tag('fato')}. O cisma entre Roma e Constantinopla data convencionalmente de 1054 ${tag('fato')}.</p>

<h3>Cruzadas, cidades e universidades</h3>
<p>Em 1095, em Clermont, Urbano II convocou a primeira cruzada ${tag('fato')}. Seu sentido — peregrinação armada, guerra de defesa, expansão — é objeto de debate historiográfico ${tag('debate')}. A partir do século XI, cidades e comércio cresceram. As universidades nasceram como corporações de mestres e estudantes: Bolonha (fim do século XI) e Paris (por volta de 1200) estão entre as primeiras ${tag('fato')}. O IV Concílio de Latrão (1215) reorganizou a disciplina eclesiástica e a pastoral ${tag('fato')}.</p>

<h3>Crises do fim da Idade Média</h3>
<p>A Peste Negra (1347–1351) matou parcela muito grande da população europeia — as estimativas variam, muitas vezes entre um terço e metade ${tag('hipotese')}. O Cisma do Ocidente (1378–1417) dividiu a obediência papal até o Concílio de Constança ${tag('fato')}.</p>

<h3>"Idade das Trevas"?</h3>
<p>A expressão nasceu do juízo humanista e iluminista. A historiografia do século XX mostrou a continuidade das escolas, a cópia de textos, a técnica (moinhos, arado pesado), a arquitetura gótica e as universidades ${tag('interpretacao')}. Reconhecer isso não exige idealizar o período, que teve guerras, fomes e violência como qualquer outro ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Cristandade', 'Conjunto dos povos cristãos sob a mesma fé e, em grande parte, a mesma Igreja.'],
    ['Reforma gregoriana', 'Movimento do século XI pela autonomia e disciplina da Igreja.'],
    ['Investidura', 'Entrega do cargo e de seus bens a um bispo ou abade.'],
    ['Universitas', 'Corporação de mestres e estudantes; origem das universidades.'],
    ['Cisma', 'Ruptura da comunhão eclesiástica.'],
  ],
  exemplos: `<p><strong>Lendo Eginhardo:</strong> ele imita a forma das <em>Vidas dos Césares</em> de Suetônio. Saber disso ajuda a separar o que é informação sobre Carlos Magno do que é molde literário clássico — e mostra, ao mesmo tempo, a presença dos autores antigos na corte carolíngia.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Cristandade convive com o Império Bizantino e com o mundo islâmico, por onde passa parte do saber grego. <strong>No Brasil:</strong> a história começa na Idade Média portuguesa. Portugal formou-se na Reconquista; a independência do reino foi reconhecida pelo papa Alexandre III na bula <em>Manifestis probatum</em> (1179) ${tag('fato')}. A Ordem de Cristo, criada em 1319 com bens dos templários, financiou a expansão marítima, e sua cruz aparecia nas velas das caravelas que chegaram ao Brasil ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Concordata de Worms é um marco', tag: 'argumento',
    premissas: ['Antes, reis e imperadores entregavam aos bispos tanto o cargo espiritual quanto os bens e poderes temporais.', 'Worms distinguiu a investidura espiritual (pela Igreja) da temporal (pelo imperador).', 'Distinguir as duas esferas é condição para pensar a autonomia da Igreja diante do poder político.'],
    conclusao: 'Logo, Worms é marco na história da distinção entre poder espiritual e temporal, que influenciou o pensamento político ocidental.',
    nota: 'A distinção medieval não é a separação moderna entre Igreja e Estado; o argumento mostra uma origem, não uma identidade.',
  },
  objecoes: [
    { objecao: 'A Idade Média foi uma época de ignorância imposta pela Igreja.', tag: 'debate',
      resposta: 'As fontes mostram escolas catedrais, mosteiros que copiaram textos antigos e universidades nascidas sob proteção eclesiástica. Houve condenações e conflitos intelectuais (por exemplo, em Paris, 1277), que a história estuda sem reduzir o período a eles.' },
  ],
  aplicacao: `<p>Escolha uma instituição medieval que ainda existe (universidade, ordem religiosa, catedral, paróquia antiga) e registre no Caderno: data e contexto de fundação, função original, transformações e o que dela chegou ao Brasil.</p>`,
  fonte: {
    obra: 'Eginhardo, Vida de Carlos Magno; Gregório VII, Dictatus papae (1075); Concordata de Worms (1122)', link: null,
    orientacao: `<p>Em Eginhardo, identifique dois traços de molde literário e duas informações verificáveis. Compare o Dictatus papae com o texto da Concordata: o que Gregório reivindicava e o que foi acordado meio século depois?</p>`,
  },
  perguntas: [
    { p: 'Quem coroou Carlos Magno imperador em 800?', r: 'O papa Leão III, em Roma.' },
    { p: 'O que a Concordata de Worms distinguiu?', r: 'A investidura espiritual, pela Igreja, da temporal, pelo imperador.' },
    { p: 'Que relação a Ordem de Cristo tem com o Brasil?', r: 'Financiou a expansão marítima portuguesa; sua cruz estava nas velas das caravelas.' },
  ],
  exercicios: [
    mc('Carlos Magno foi coroado imperador em:', ['496', '800', '962', '1054'], 1, 'Natal de 800, por Leão III.'),
    mc('O Dictatus papae é de:', ['Leão III', 'Gregório VII', 'Urbano II', 'Inocêncio III'], 1, '1075.'),
    mc('A primeira cruzada foi convocada em Clermont em:', ['1054', '1095', '1122', '1215'], 1, 'Por Urbano II.'),
    mc('A bula Manifestis probatum (1179) reconheceu:', ['O reino de Portugal', 'A Ordem de Cristo', 'A Universidade de Paris', 'O Império Carolíngio'], 0, 'Alexandre III a D. Afonso Henriques.'),
    mc('O Cisma do Ocidente terminou com o Concílio de:', ['Latrão IV', 'Constança', 'Trento', 'Niceia'], 1, '1414–1418; cisma de 1378 a 1417.'),
    disc('A expressão "Idade das Trevas" se sustenta? Responda com ao menos três evidências de áreas diferentes (instituições, técnica, cultura, economia) e uma crise do período.', ['Usa três evidências de áreas diferentes', 'Inclui uma crise', 'Evita idealização e caricatura', 'Conclusão fundamentada']),
  ],
  resumo: ['Clóvis (c. 500) e Carlos Magno (800).', 'Cluny (910); reforma gregoriana; Worms (1122); cisma de 1054.', 'Cruzadas (1095); universidades (Bolonha, Paris).', 'Peste Negra (1347–1351); Cisma do Ocidente (1378–1417).', 'Portugal medieval: 1179; Ordem de Cristo (1319).'],
  referencias: [
    { texto: 'Eginhardo, Vida de Carlos Magno (c. 830).' },
    { texto: 'Gregório VII, Dictatus papae (1075).' },
    { texto: 'Concordata de Worms (1122).' },
    { texto: 'Jacques Le Goff, A civilização do Ocidente medieval (1964).' },
    { texto: 'Régine Pernoud, Idade Média: o que não nos ensinaram (1977).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Carlos Magno', 'Coroado em 800 por Leão III.'], ['Worms', '1122: investidura espiritual e temporal.'], ['Ordem de Cristo', '1319; financiou a expansão.']],
  avancado: {
    texto: `<h3>Feudalismo: conceito e crítica</h3>
<p>Marc Bloch descreveu a "sociedade feudal" pelos laços de dependência pessoal ${tag('interpretacao')}. Susan Reynolds, em <em>Fiefs and Vassals</em> (1994), questionou o uso do conceito de feudalismo como sistema unificado, mostrando a diversidade das fontes e dos vínculos ${tag('debate')}.</p>
<h3>O mundo islâmico e Bizâncio</h3>
<p>Traduções do árabe para o latim em Toledo e na Sicília (séculos XII–XIII) trouxeram obras de Aristóteles e comentários de Avicena e Averróis, decisivos para a escolástica ${tag('fato')}; o papel de Bizâncio na conservação dos textos gregos foi igualmente central ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Marc Bloch, A sociedade feudal (1939–1940).' }, { texto: 'Susan Reynolds, Fiefs and Vassals (1994).' }],
    exercicios: [
      mc('A crítica ao conceito unificado de feudalismo em Fiefs and Vassals (1994) é de:', ['Susan Reynolds', 'Marc Bloch', 'Georges Duby', 'Le Goff'], 0, 'Susan Reynolds.'),
      mc('Centros de tradução do árabe para o latim nos séculos XII–XIII incluíam:', ['Toledo e Sicília', 'Paris e Londres', 'Lisboa e Sevilha apenas', 'Roma e Milão'], 0, 'Toledo e Sicília.'),
      mc('Em Bloch, a sociedade feudal caracteriza-se sobretudo por:', ['Mercado livre', 'Laços de dependência pessoal', 'Burocracia centralizada', 'Democracia'], 1, 'Vassalagem e senhorio.'),
      disc('O conceito de "feudalismo" ainda é útil? Exponha a crítica de Reynolds e defenda uma posição.', ['Expõe Bloch', 'Expõe Reynolds', 'Posição justificada', 'Usa exemplo'])],
  },
}),

aula({
  id: 'h4-3', titulo: 'Revoluções modernas: Reformas, ciência, política e indústria', duracao: '150 min',
  aprendera: ['Situar as Reformas e o Concílio de Trento', 'Situar a Revolução Científica com obras e datas', 'Comparar as revoluções inglesa, americana e francesa', 'Relacionar as revoluções aos movimentos coloniais brasileiros'],
  prereq: ['Aulas anteriores', 'Filosofia moderna (Degrau 8)'],
  explicacao: `
<h3>O problema</h3>
<p>Entre os séculos XVI e XIX, a palavra "revolução" passou a designar mudanças profundas na religião, no conhecimento, na política e na produção. Mas cada uma tem ritmo e causas próprios, e muitas continuidades. Esta aula separa as revoluções e mostra como chegaram ao Brasil.</p>

<h3>Reformas religiosas</h3>
<p>Em 1517, Martinho Lutero divulgou suas 95 teses contra a pregação das indulgências ${tag('fato')}. A ruptura deu origem às Igrejas protestantes (luterana, reformada, anglicana) ${tag('fato')}. O Concílio de Trento (1545–1563) definiu a doutrina católica sobre Escritura e Tradição, justificação e sacramentos, e reformou a disciplina e a formação do clero (seminários) ${tag('doutrina')}. As ordens novas, como a Companhia de Jesus (aprovada em 1540), foram centrais nas missões, inclusive no Brasil ${tag('fato')}.</p>

<h3>Revolução Científica</h3>
<p>Copérnico publicou <em>Das revoluções das esferas celestes</em> em 1543; Galileu, o <em>Mensageiro sideral</em> em 1610, com observações telescópicas; Newton, os <em>Princípios matemáticos da filosofia natural</em> em 1687 ${tag('fato')}. O processo de Galileu (1633) é episódio real de conflito; a tese de uma guerra permanente entre ciência e religião, porém, é rejeitada pela historiografia da ciência, que mostra muitos cientistas religiosos e instituições eclesiásticas ativas na ciência ${tag('interpretacao')}. Em 1992, João Paulo II reconheceu publicamente os erros dos juízes de Galileu ${tag('fato')}.</p>

<h3>Revoluções políticas</h3>
<ul>
<li><strong>Inglaterra</strong>: guerra civil (1642–1651), execução de Carlos I (1649), Revolução Gloriosa (1688–1689) e Declaração de Direitos (1689), que limitou o poder real ${tag('fato')}.</li>
<li><strong>Estados Unidos</strong>: Declaração de Independência (4 de julho de 1776) e Constituição (1787) ${tag('fato')}.</li>
<li><strong>França</strong>: Estados Gerais e queda da Bastilha (1789), Declaração dos Direitos do Homem e do Cidadão (agosto de 1789), Constituição Civil do Clero (1790), Terror (1793–1794), e depois Napoleão ${tag('fato')}.</li>
</ul>
<p>Edmund Burke, nas <em>Reflexões sobre a Revolução na França</em> (1790), criticou a destruição das instituições herdadas ${tag('interpretacao')}; Tocqueville, em <em>O Antigo Regime e a Revolução</em> (1856), mostrou que a Revolução continuou a centralização administrativa da monarquia ${tag('interpretacao')}.</p>

<h3>Revolução Industrial</h3>
<p>Começou na Grã-Bretanha na segunda metade do século XVIII, com a mecanização têxtil e o aperfeiçoamento da máquina a vapor por James Watt (patente de 1769) ${tag('fato')}. Trouxe crescimento da produção e das cidades e novas condições de trabalho, que motivaram a "questão social" e, mais tarde, a <em>Rerum Novarum</em> (1891) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Reforma', 'Movimento religioso do século XVI que originou as Igrejas protestantes.'],
    ['Concílio de Trento', 'Concílio de 1545–1563 que definiu a doutrina católica e reformou a Igreja.'],
    ['Revolução Científica', 'Transformação do conhecimento da natureza entre Copérnico e Newton.'],
    ['Antigo Regime', 'Ordem social e política anterior à Revolução Francesa.'],
    ['Questão social', 'Problemas de trabalho e pobreza da industrialização.'],
  ],
  exemplos: `<p><strong>Ideias que viajam:</strong> livros franceses proibidos foram encontrados entre os bens de inconfidentes mineiros, segundo os autos da devassa ${tag('fato')}. Isso mostra circulação de ideias, mas não prova que a Inconfidência fosse cópia das revoluções: os motivos fiscais (a derrama) e locais pesaram muito ${tag('interpretacao')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> as revoluções atlânticas (americana, francesa, haitiana de 1791–1804, e as independências da América espanhola) formam um ciclo conectado. <strong>No Brasil:</strong> a Inconfidência Mineira (1789), com a execução de Tiradentes em 1792; a Conjuração Baiana (1798); a vinda da corte portuguesa em 1808, fugindo da invasão napoleônica, com a abertura dos portos; e a Revolução Pernambucana de 1817 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tese do "conflito permanente" entre ciência e religião não se sustenta', tag: 'argumento',
    premissas: ['Para haver conflito permanente, a religião deveria ter-se oposto à ciência de modo geral e constante.', 'Muitos protagonistas da Revolução Científica eram religiosos, e instituições da Igreja mantiveram observatórios e escolas científicas.', 'Casos de conflito (como Galileu) existiram, mas são casos, não a regra.'],
    conclusao: 'Logo, a tese do conflito permanente generaliza indevidamente casos particulares.',
    nota: 'O argumento não nega o caso Galileu: pede que ele seja explicado em seu contexto, e não usado como emblema de toda a história.',
  },
  objecoes: [
    { objecao: 'A Revolução Francesa foi só libertação; criticá-la é defender o absolutismo.', tag: 'debate',
      resposta: 'É possível reconhecer a Declaração de 1789 e criticar o Terror e a perseguição religiosa. Burke e Tocqueville, por razões diferentes, fazem distinções que a frase ignora.' },
  ],
  aplicacao: `<p>Monte um quadro comparando as revoluções inglesa (1688), americana (1776) e francesa (1789) em: causas imediatas, documentos fundadores, papel da religião e resultado político. Acrescente uma linha sobre o reflexo no Brasil.</p>`,
  fonte: {
    obra: 'Declaração dos Direitos do Homem e do Cidadão (1789); Burke, Reflexões sobre a Revolução na França (1790), trechos', link: null,
    orientacao: `<p>Leia os artigos 1 a 6 da Declaração e um trecho de Burke sobre direitos herdados. Compare as duas concepções de direito: abstrato e universal, ou histórico e herdado.</p>`,
  },
  perguntas: [
    { p: 'O que definiu o Concílio de Trento?', r: 'A doutrina católica sobre Escritura e Tradição, justificação e sacramentos, e reformas como os seminários.' },
    { p: 'Em que ordem saíram as obras de Copérnico, Galileu e Newton citadas?', r: '1543, 1610 e 1687.' },
    { p: 'O que Tocqueville mostrou em O Antigo Regime e a Revolução?', r: 'Que a Revolução continuou a centralização administrativa da monarquia.' },
  ],
  exercicios: [
    mc('As 95 teses de Lutero são de:', ['1492', '1517', '1545', '1563'], 1, '1517.'),
    mc('Os Princípios matemáticos da filosofia natural, de Newton, são de:', ['1543', '1610', '1687', '1769'], 2, '1687.'),
    mc('A Declaração de Direitos inglesa (Bill of Rights) é de:', ['1649', '1689', '1776', '1789'], 1, '1689, após a Revolução Gloriosa.'),
    mc('Reflexões sobre a Revolução na França (1790) é de:', ['Tocqueville', 'Burke', 'Rousseau', 'Voltaire'], 1, 'Edmund Burke.'),
    mc('Tiradentes foi executado em:', ['1789', '1792', '1808', '1822'], 1, '21 de abril de 1792.'),
    disc('A Inconfidência Mineira foi "eco" das revoluções atlânticas ou movimento de causas locais? Use os autos da devassa e o contexto fiscal para responder.', ['Expõe a influência das ideias', 'Expõe as causas locais (derrama)', 'Usa as fontes', 'Conclusão equilibrada']),
  ],
  resumo: ['Lutero (1517); Trento (1545–1563); jesuítas (1540).', 'Copérnico (1543), Galileu (1610), Newton (1687).', 'Inglaterra (1689), EUA (1776), França (1789).', 'Burke (1790) e Tocqueville (1856).', 'Brasil: Inconfidência (1789), corte (1808), Pernambuco (1817).'],
  referencias: [
    { texto: 'Concílio de Trento, decretos (1545–1563).' },
    { texto: 'Declaração dos Direitos do Homem e do Cidadão (1789).' },
    { texto: 'Edmund Burke, Reflexões sobre a Revolução na França (1790).', livro: 'burke-reflexoes' },
    { texto: 'Alexis de Tocqueville, O Antigo Regime e a Revolução (1856).' },
    { texto: 'Kenneth Maxwell, A devassa da devassa (1973).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Trento', '1545–1563: doutrina e reforma católica.'], ['Revolução Científica', 'Copérnico 1543, Galileu 1610, Newton 1687.'], ['Brasil', 'Inconfidência 1789; corte 1808.']],
  avancado: {
    texto: `<h3>A Revolução Haitiana</h3>
<p>Em Saint-Domingue (1791–1804), uma revolta de escravizados levou à independência do Haiti, a primeira república governada por ex-escravizados ${tag('fato')}. O medo de "um novo Haiti" pesou nas elites escravistas das Américas, inclusive no Brasil ${tag('interpretacao')}.</p>
<h3>Interpretações da Revolução Francesa</h3>
<p>A leitura social (de matriz marxista, Georges Lefebvre, Albert Soboul) via nela uma revolução burguesa; François Furet, em <em>Pensando a Revolução Francesa</em> (1978), propôs lê-la como fenômeno político e cultural, criticando a leitura de classe ${tag('debate')}.</p>`,
    leituras: [{ texto: 'C. L. R. James, Os jacobinos negros (1938).' }, { texto: 'François Furet, Pensando a Revolução Francesa (1978).' }],
    exercicios: [
      mc('A Revolução Haitiana ocorreu entre:', ['1776 e 1783', '1789 e 1799', '1791 e 1804', '1808 e 1822'], 2, '1791–1804.'),
      mc('Pensando a Revolução Francesa (1978) é de:', ['Soboul', 'Lefebvre', 'Furet', 'Tocqueville'], 2, 'François Furet.'),
      mc('Os jacobinos negros (1938), sobre o Haiti, é de:', ['C. L. R. James', 'Eric Hobsbawm', 'E. P. Thompson', 'Furet'], 0, 'C. L. R. James.'),
      disc('Compare a leitura social (Lefebvre, Soboul) e a política (Furet) da Revolução Francesa. Qual explica melhor o Terror?', ['Expõe as duas leituras', 'Aplica ao Terror', 'Usa evidências', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'h4-4', titulo: 'A formação do Brasil: Colônia e Império (1500–1889)', duracao: '150 min',
  aprendera: ['Situar os marcos da colonização, da Independência e do Império', 'Explicar a centralidade da escravidão e do tráfico atlântico', 'Explicar a relação entre Igreja e Estado no padroado', 'Avaliar a Abolição e a proclamação da República'],
  prereq: ['Aulas anteriores do módulo', 'História III: interpretações do Brasil'],
  explicacao: `
<h3>O problema</h3>
<p>Como uma faixa de feitorias e capitanias se tornou um império unido de dimensões continentais, escravista e católico, e depois uma república? A resposta exige combinar política, economia, sociedade e religião, e conferir as grandes interpretações (módulo H3) com os fatos.</p>

<h3>Colonização</h3>
<p>As capitanias hereditárias (1534) entregaram faixas de terra a donatários; em 1549, com Tomé de Sousa, criou-se o governo-geral em Salvador, e chegaram os primeiros jesuítas, com Manuel da Nóbrega ${tag('fato')}. A economia açucareira do Nordeste usou primeiro o trabalho indígena e, cada vez mais, o de africanos escravizados ${tag('fato')}. O Brasil foi o maior destino do tráfico atlântico: o banco de dados <em>Slave Voyages</em> estima em cerca de 4,8 milhões os africanos desembarcados ${tag('hipotese')}. No fim do século XVII descobriu-se ouro em Minas Gerais, e o centro econômico deslocou-se para o Centro-Sul ${tag('fato')}. O Tratado de Madri (1750) reconheceu boa parte da expansão territorial luso-brasileira ${tag('fato')}. Em 1759, o Marquês de Pombal expulsou os jesuítas de Portugal e de seus domínios ${tag('fato')}.</p>

<h3>Igreja e Estado: o padroado</h3>
<p>Pelo regime do padroado, concedido pelos papas aos reis de Portugal, a Coroa apresentava bispos, sustentava o clero e cobrava dízimos ${tag('fato')}. A Igreja estava em toda a vida social (registros de batismo, casamento e óbito, irmandades, festas) e, ao mesmo tempo, dependente do poder civil ${tag('interpretacao')}. A Constituição de 1824 manteve o catolicismo como religião do Império e o padroado ${tag('fato')}. Na Questão Religiosa (1872–1875), os bispos D. Vital (Olinda) e D. Antônio de Macedo Costa (Pará) foram presos por cumprirem determinações papais contra a maçonaria nas irmandades ${tag('fato')}.</p>

<h3>Independência e Império</h3>
<p>Com a vinda da corte (1808), a abertura dos portos e a elevação a Reino Unido (1815), o Rio de Janeiro tornou-se capital do império português ${tag('fato')}. A Independência foi proclamada em 7 de setembro de 1822 por D. Pedro ${tag('fato')}. A Constituição de 1824 criou o Poder Moderador, exercido pelo imperador ${tag('fato')}. Depois da Regência (1831–1840), marcada por revoltas provinciais, o Segundo Reinado (1840–1889) consolidou a unidade territorial ${tag('fato')}. A Guerra do Paraguai (1864–1870) foi o maior conflito externo do Império ${tag('fato')}.</p>

<h3>Abolição e República</h3>
<p>Sob pressão britânica, a Lei Eusébio de Queirós (1850) proibiu o tráfico ${tag('fato')}. Seguiram-se a Lei do Ventre Livre (1871), a dos Sexagenários (1885) e a Lei Áurea, assinada pela princesa Isabel em 13 de maio de 1888 ${tag('fato')}. Participaram da campanha abolicionista intelectuais, jornalistas, ex-escravizados, católicos e outros grupos; Joaquim Nabuco publicou <em>O abolicionismo</em> em 1883 ${tag('fato')}. A República foi proclamada em 15 de novembro de 1889 por um movimento militar ${tag('fato')}, e o decreto 119-A (janeiro de 1890) separou a Igreja do Estado ${tag('fato')}. O peso relativo da Abolição, da Questão Religiosa e da Questão Militar na queda do Império é debatido ${tag('debate')}.</p>`,
  vocabulario: [
    ['Capitanias hereditárias', 'Divisão do território entre donatários (1534).'],
    ['Governo-geral', 'Administração central da colônia, criada em 1549.'],
    ['Padroado', 'Direito da Coroa de apresentar bispos e sustentar a Igreja.'],
    ['Poder Moderador', 'Quarto poder da Constituição de 1824, exercido pelo imperador.'],
    ['Tráfico atlântico', 'Comércio de africanos escravizados através do Atlântico.'],
  ],
  exemplos: `<p><strong>Um registro de batismo de escravizado</strong> do século XVIII, numa paróquia mineira, informa o nome, a "nação" africana atribuída, o senhor, os padrinhos. É ao mesmo tempo fonte da violência da escravidão (a pessoa registrada como propriedade) e das redes religiosas e sociais que os escravizados construíram (compadrio, irmandades de pretos e pardos).</p>`,
  contexto: `<p><strong>No mundo:</strong> a formação do Brasil faz parte da expansão ibérica, do sistema atlântico e das revoluções do século XIX. <strong>No Brasil:</strong> esta aula é a base de estudo das raízes; a Geografia, a Sociologia e a Economia retomam os mesmos fatos com seus métodos, e as avaliações conjuntas exigem relacioná-los.</p>`,
  argumento: {
    titulo: 'Por que a escravidão é central na formação do Brasil', tag: 'argumento',
    premissas: ['Durante mais de três séculos, a principal força de trabalho da economia exportadora foi escravizada.', 'A escravidão estruturou a propriedade, a hierarquia social, a família e a política do Império.', 'Um fenômeno que estrutura economia, sociedade e política por três séculos é central para explicar a formação de um país.'],
    conclusao: 'Logo, nenhuma interpretação da formação do Brasil pode tratar a escravidão como aspecto secundário.',
    nota: 'O argumento não diz que a escravidão explica tudo: religião, território, Estado e cultura também são centrais, e se relacionam com ela.',
  },
  objecoes: [
    { objecao: 'A Igreja apenas legitimou a escravidão.', tag: 'debate',
      resposta: 'Houve clérigos e ordens proprietários de escravizados e justificações teológicas. Houve também críticas (como sermões de Antônio Vieira contra os abusos, e católicos abolicionistas no século XIX) e as irmandades negras. O historiador expõe as duas faces, com as fontes, sem reduzir a uma só.' },
  ],
  aplicacao: `<p>Monte uma linha do tempo de 1500 a 1889 com quinze marcos políticos, econômicos e religiosos. Marque em cores diferentes cada tipo e escreva três frases sobre relações entre eles (por exemplo, ouro e mudança da capital em 1763).</p>`,
  fonte: {
    obra: 'Constituição Política do Império do Brasil (1824), arts. 5, 98–101; Lei nº 3.353, de 13 de maio de 1888 (Lei Áurea); Joaquim Nabuco, O abolicionismo (1883), cap. 1', link: null,
    orientacao: `<p>Na Constituição de 1824, leia o artigo sobre a religião do Império e os artigos sobre o Poder Moderador. Na Lei Áurea, observe a brevidade do texto e pergunte o que ela não previu. Em Nabuco, identifique a tese central do livro.</p>`,
  },
  perguntas: [
    { p: 'Quando se criou o governo-geral?', r: 'Em 1549, com Tomé de Sousa, em Salvador.' },
    { p: 'O que era o padroado?', r: 'O direito da Coroa de apresentar bispos, sustentar o clero e cobrar dízimos.' },
    { p: 'Que leis precederam a Lei Áurea?', r: 'Eusébio de Queirós (1850), Ventre Livre (1871) e Sexagenários (1885).' },
  ],
  exercicios: [
    mc('O governo-geral foi instituído em:', ['1500', '1534', '1549', '1580'], 2, 'Com Tomé de Sousa.'),
    mc('Pombal expulsou os jesuítas em:', ['1549', '1750', '1759', '1808'], 2, '1759.'),
    mc('O Poder Moderador foi criado pela Constituição de:', ['1822', '1824', '1891', '1934'], 1, '1824.'),
    mc('Na Questão Religiosa, os bispos presos foram:', ['D. Vital e D. Macedo Costa', 'Nóbrega e Anchieta', 'Feijó e Cairu', 'D. Leme e D. Hélder'], 0, '1872–1875.'),
    mc('O decreto que separou a Igreja do Estado é de:', ['1888', 'Janeiro de 1890', '1891', '1934'], 1, 'Decreto 119-A, de 7 de janeiro de 1890.'),
    disc('Por que o Império caiu em 1889? Avalie o peso da Abolição, da Questão Religiosa e da Questão Militar, com fontes e datas, e conclua.', ['Expõe os três fatores', 'Usa fontes e datas', 'Pesa os fatores', 'Conclusão fundamentada']),
  ],
  resumo: ['Capitanias (1534); governo-geral e jesuítas (1549).', 'Açúcar, ouro; tráfico (estimativa de c. 4,8 milhões).', 'Padroado; Questão Religiosa (1872–1875).', 'Corte (1808), Independência (1822), Constituição (1824).', 'Abolição (1850–1888); República (1889); separação (1890).'],
  referencias: [
    { texto: 'Constituição Política do Império do Brasil (1824).' },
    { texto: 'Lei nº 3.353, de 13 de maio de 1888 (Lei Áurea).' },
    { texto: 'Joaquim Nabuco, O abolicionismo (1883).' },
    { texto: 'Slave Voyages: Trans-Atlantic Slave Trade Database (estimativas).' },
    { texto: 'José Murilo de Carvalho, A construção da ordem (1980).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['1549', 'Governo-geral (Tomé de Sousa) e jesuítas (Nóbrega).'], ['Padroado', 'Coroa apresenta bispos e sustenta o clero.'], ['1888', 'Lei Áurea, 13 de maio.']],
  avancado: {
    texto: `<h3>Unidade territorial: por que o Brasil não se fragmentou?</h3>
<p>José Murilo de Carvalho, em <em>A construção da ordem</em> (1980), atribuiu a unidade em boa parte à homogeneidade de formação da elite política imperial, educada em Coimbra e treinada na burocracia ${tag('interpretacao')}. Outras explicações enfatizam o interesse comum na manutenção da escravidão e o papel do Rio de Janeiro como centro ${tag('debate')}.</p>
<h3>Antônio Vieira e a escravidão</h3>
<p>Nos sermões, Vieira denunciou os abusos contra indígenas e africanos e defendeu a liberdade dos indígenas aldeados, sem condenar a escravidão africana como instituição ${tag('interpretacao')} — exemplo de como ler um autor em seu tempo, sem anacronismo e sem absolvição.</p>`,
    leituras: [{ texto: 'José Murilo de Carvalho, A construção da ordem (1980).' }, { texto: 'Padre Antônio Vieira, Sermão XIV do Rosário (1633).' }],
    exercicios: [
      mc('A tese da homogeneidade da elite imperial como fator de unidade é de:', ['Caio Prado', 'José Murilo de Carvalho', 'Faoro', 'Freyre'], 1, 'A construção da ordem (1980).'),
      mc('Vieira, quanto à escravidão:', ['Defendeu a abolição geral', 'Denunciou abusos, mas não condenou a escravidão africana como instituição', 'Nunca tratou do tema', 'Foi senhor de engenho'], 1, 'Leitura sem anacronismo.'),
      mc('A elite política imperial formou-se em grande parte em:', ['Paris', 'Coimbra', 'Salamanca', 'Londres'], 1, 'Universidade de Coimbra.'),
      disc('Por que o Brasil manteve a unidade territorial depois de 1822, ao contrário da América espanhola? Compare duas explicações.', ['Expõe duas explicações', 'Compara com a América espanhola', 'Usa evidências', 'Conclusão'])],
  },
}),

avaliacao('h4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os quatro períodos estudados e duas discursivas que exigem relacionar períodos e usar fontes.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça as linhas do tempo das aulas 3 e 4.</li><li>Releia as fontes de Plínio, da Concordata de Worms e da Constituição de 1824.</li></ul>`,
[
  disc('Trace a relação entre Igreja e poder político em três momentos estudados (Império Romano depois de 313, reforma gregoriana e padroado no Brasil), mostrando continuidades e rupturas com fontes.', ['Três momentos com datas e fontes', 'Continuidades', 'Rupturas', 'Conclusão fundamentada']),
  disc('Escolha um acontecimento brasileiro (Inconfidência, Independência ou Abolição) e mostre como ele se relaciona com um processo mundial estudado (revoluções atlânticas, Revolução Industrial ou outro), distinguindo influência documentada de mera coincidência.', ['Acontecimento e processo bem situados', 'Influência documentada', 'Distingue influência de coincidência', 'Conclusão']),
]),
];
