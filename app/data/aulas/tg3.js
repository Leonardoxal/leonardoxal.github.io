// Teologia III — Igreja e sacramentos (fase teológica, degrau 1).
// A Igreja como mistério e instituição; os sacramentos em geral; a Eucaristia; cura e serviço.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg3-1', titulo: 'A Igreja: mistério, notas e estrutura', duracao: '150 min',
  aprendera: ['Explicar a Igreja como mistério e sacramento de salvação', 'Explicar as quatro notas da Igreja', 'Distinguir hierarquia, leigos e vida consagrada', 'Conhecer o sentido da infalibilidade'],
  prereq: ['Teologia II (módulo T2)'],
  explicacao: `
<h3>O problema</h3>
<p>A Igreja é uma instituição humana, uma comunidade espiritual invisível ou as duas coisas?</p>
<h3>Mistério e sacramento</h3>
<p>O Concílio Vaticano II apresentou a Igreja como "sacramento, ou sinal e instrumento, da íntima união com Deus e da unidade de todo o gênero humano" (Lumen gentium 1) ${tag('doutrina')}. Ela é ao mesmo tempo visível e espiritual, sociedade hierárquica e Corpo místico de Cristo (CIC 771) ${tag('doutrina')}.</p>
<h3>As quatro notas</h3>
<p>O Credo professa a Igreja una, santa, católica e apostólica (CIC 811) ${tag('doutrina')}. A Lumen gentium 8 afirma que a Igreja de Cristo "subsiste na" Igreja Católica, embora fora de sua estrutura visível se encontrem elementos de santificação e verdade ${tag('doutrina')}. O sentido exato de "subsiste em" foi tema de discussão teológica e de esclarecimentos da Congregação para a Doutrina da Fé ${tag('debate')}.</p>
<h3>Estrutura</h3>
<p>Cristo instituiu os Doze com Pedro à frente; os bispos sucedem os apóstolos, e o bispo de Roma sucede Pedro (CIC 880–882) ${tag('doutrina')}. Os fiéis leigos participam do múnus sacerdotal, profético e régio de Cristo no mundo (CIC 897–913) ${tag('doutrina')}.</p>
<h3>Infalibilidade</h3>
<p>O Concílio Vaticano I (1870), na constituição Pastor aeternus, definiu que o papa é infalível quando, como pastor de todos os fiéis, define em caráter definitivo uma doutrina de fé ou moral ${tag('fato')}. A infalibilidade não significa impecabilidade nem acerto em toda opinião pessoal ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Notas da Igreja', 'Una, santa, católica e apostólica.'],
    ['Sucessão apostólica', 'Transmissão do ministério dos apóstolos aos bispos.'],
    ['Infalibilidade', 'Preservação do erro em definições de fé e moral.'],
    ['Leigos', 'Fiéis batizados que não receberam a ordem nem a vida consagrada.'],
    ['Subsistit in', '"Subsiste em": expressão de Lumen gentium 8.'],
  ],
  exemplos: `<p><strong>Um dogma definido ex cathedra:</strong> as definições da Imaculada Conceição (1854) e da Assunção (1950) são os exemplos mais citados de definições papais solenes. A maior parte do ensino do papa e dos bispos é magistério ordinário, que pede adesão religiosa, mas não tem a forma de definição solene.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Igreja Católica tem mais de um bilhão de fiéis batizados, segundo o Anuário Pontifício ${tag('fato')}. <strong>No Brasil:</strong> a Conferência Nacional dos Bispos do Brasil (CNBB) foi fundada em 1952, com participação de dom Helder Camara ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Igreja é visível e espiritual ao mesmo tempo', tag: 'argumento',
    premissas: ['O Verbo assumiu uma natureza humana visível para salvar.', 'A Igreja prolonga a missão do Verbo encarnado.', 'Logo, convém que a Igreja tenha corpo visível e vida invisível da graça.'],
    conclusao: 'Logo, separar Igreja "espiritual" e Igreja "institucional" contraria a lógica da Encarnação.',
    nota: 'Lumen gentium 8 usa essa analogia com o mistério do Verbo encarnado.',
  },
  objecoes: [
    { objecao: 'Os pecados de membros da Igreja provam que ela não é santa.', tag: 'debate',
      resposta: 'A Igreja é santa por Cristo, seus sacramentos e seus santos, mas reúne pecadores e está sempre necessitada de purificação (Lumen gentium 8; CIC 827). Os pecados de seus membros são reais e devem ser reconhecidos, como fez João Paulo II nos pedidos de perdão do ano 2000.' },
  ],
  aplicacao: `<p>Leia Lumen gentium 1–8 e explique, em uma página, as imagens bíblicas da Igreja e o sentido de "subsiste em".</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Lumen gentium, nn. 1–8', link: null,
    orientacao: `<p>Observe as imagens da Igreja (rebanho, campo, edifício, esposa) e a analogia com o Verbo encarnado (n. 8).</p>`,
  },
  perguntas: [
    { p: 'Quais as quatro notas da Igreja?', r: 'Una, santa, católica e apostólica.' },
    { p: 'O que definiu o Vaticano I?', r: 'A infalibilidade papal em definições de fé e moral.' },
    { p: 'O que diz Lumen gentium 8?', r: 'Que a Igreja de Cristo subsiste na Igreja Católica.' },
  ],
  exercicios: [
    mc('A Pastor aeternus é do:', ['Vaticano I (1870)', 'Vaticano II', 'Trento', 'Latrão IV'], 0, 'Infalibilidade.'),
    mc('Infalibilidade significa:', ['Preservação do erro em definições', 'Impecabilidade', 'Acerto em tudo', 'Poder político'], 0, 'Limites.'),
    mc('Os bispos sucedem:', ['Os apóstolos', 'Os profetas', 'Os reis', 'Os levitas'], 0, 'CIC 880.'),
    mc('A CNBB foi fundada em:', ['1952', '1889', '1964', '1988'], 0, 'Brasil.'),
    mc('Lumen gentium chama a Igreja de:', ['Sacramento de salvação', 'Partido', 'Escola', 'Estado'], 0, 'LG 1.'),
    disc('Explique as imagens da Igreja e o "subsiste em".', ['Imagens', 'Subsistit', 'Fonte', 'Clareza']),
  ],
  resumo: ['Igreja: sacramento de salvação.', 'Visível e espiritual.', 'Una, santa, católica, apostólica.', 'Sucessão apostólica.', 'Infalibilidade (1870).'],
  referencias: [
    { texto: 'Concílio Vaticano II, Lumen gentium (1964).' },
    { texto: 'Catecismo da Igreja Católica, §§ 748–975.', livro: 'cic' },
    { texto: 'Joseph Ratzinger, Introdução ao Cristianismo.', livro: 'ratzinger-introducao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto', 'Ler a fonte indicada'],
  revisao: [['Notas', 'Quatro.'], ['1870', 'Infalibilidade.'], ['LG 8', 'Subsiste em.']],
  avancado: {
    texto: `<h3>Os graus do Magistério</h3>
<p>A teologia distingue o magistério extraordinário (definições solenes), o ordinário e universal, e o ordinário não definitivo ${tag('fato')}. A Congregação para a Doutrina da Fé, na nota doutrinal de 1998 que acompanha o motu proprio Ad tuendam fidem, explicou os graus de adesão correspondentes ${tag('fato')}. Saber o grau de um ensinamento evita tanto o descaso quanto o exagero ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 888–892.', livro: 'cic' }],
    exercicios: [
      mc('Definições solenes pertencem ao magistério:', ['Extraordinário', 'Ordinário não definitivo', 'Pessoal', 'Civil'], 0, 'Graus.'),
      mc('A nota sobre os graus de adesão é de:', ['1998', '1870', '1215', '1965'], 0, 'Ad tuendam fidem.'),
      mc('Saber o grau evita:', ['Descaso e exagero', 'A leitura', 'A oração', 'A fé'], 0, 'Prudência.'),
      disc('Explique os graus do Magistério e a adesão devida a cada um.', ['Graus', 'Adesão', 'Exemplo', 'Clareza'])],
  },
}),

aula({
  id: 'tg3-2', titulo: 'Os sacramentos em geral; Batismo e Confirmação', duracao: '150 min',
  aprendera: ['Definir sacramento', 'Explicar matéria, forma e ministro', 'Explicar o sentido de ex opere operato', 'Explicar os efeitos do Batismo e da Confirmação'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como gestos e palavras humanas podem comunicar a graça de Deus?</p>
<h3>O que é sacramento</h3>
<p>Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, pelos quais nos é dada a vida divina (CIC 1131) ${tag('doutrina')}. O Concílio de Trento, na sessão VII (1547), definiu que são sete ${tag('fato')}.</p>
<h3>Ex opere operato</h3>
<p>O sacramento age "pelo próprio fato de a ação ser realizada", em virtude da obra de Cristo, e não da santidade do ministro (CIC 1128) ${tag('doutrina')}. Os frutos dependem também das disposições de quem recebe ${tag('doutrina')}. Agostinho já defendera, contra os donatistas, que o batismo dado por um ministro indigno é válido ${tag('fato')}.</p>
<h3>Matéria e forma</h3>
<p>A teologia escolástica distingue matéria (o elemento ou gesto) e forma (as palavras) ${tag('fato')}. No Batismo, a matéria é a água e a forma é "Eu te batizo em nome do Pai e do Filho e do Espírito Santo" (CIC 1239–1240) ${tag('doutrina')}.</p>
<h3>Batismo e Confirmação</h3>
<p>O Batismo perdoa o pecado original e os pecados pessoais, faz renascer como filho de Deus e incorpora à Igreja; imprime um caráter indelével (CIC 1263–1274) ${tag('doutrina')}. A Confirmação aperfeiçoa a graça batismal e dá o Espírito Santo para testemunhar a fé (CIC 1285, 1303) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Sacramento', 'Sinal eficaz da graça instituído por Cristo.'],
    ['Ex opere operato', 'Pela própria realização do rito, em virtude de Cristo.'],
    ['Matéria e forma', 'Elemento sensível e palavras do sacramento.'],
    ['Caráter', 'Marca espiritual indelével de Batismo, Confirmação e Ordem.'],
    ['Donatismo', 'Heresia que fazia a validade depender da santidade do ministro.'],
  ],
  exemplos: `<p><strong>Batismo em emergência:</strong> em perigo de morte, qualquer pessoa, mesmo não batizada, pode batizar validamente, se tiver a intenção de fazer o que a Igreja faz e usar a fórmula trinitária com água (CIC 1256). Isso mostra que o sacramento não depende da santidade do ministro.</p>`,
  contexto: `<p><strong>No mundo:</strong> a classificação dos sete sacramentos aparece em Pedro Lombardo, no século XII ${tag('fato')}. <strong>No Brasil:</strong> o batismo de crianças é amplamente praticado, e as dioceses costumam exigir preparação dos pais e padrinhos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os sacramentos convêm à natureza humana', tag: 'argumento',
    premissas: ['O ser humano conhece por meio dos sentidos.', 'Deus age conforme a natureza das criaturas.', 'Logo, convém que a graça seja comunicada por sinais sensíveis.'],
    conclusao: 'Logo, os sacramentos são adequados à natureza humana, unidade de corpo e alma.',
    nota: 'Santo Tomás, Suma Teológica III, q. 61, a. 1.',
  },
  objecoes: [
    { objecao: 'Ex opere operato transforma o sacramento em magia.', tag: 'debate',
      resposta: 'A magia pretende submeter forças divinas à vontade humana; no sacramento, é Cristo quem age, e o fruto depende da fé e das disposições de quem recebe. O ex opere operato garante que a eficácia não dependa do mérito do ministro, não que dispense a fé.' },
  ],
  aplicacao: `<p>Monte uma tabela dos sete sacramentos com matéria, forma, ministro ordinário e efeitos, usando o Catecismo ou o Compêndio.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1113–1134 e 1213–1321', link: null,
    orientacao: `<p>Observe a divisão em sacramentos de iniciação, de cura e de serviço (CIC 1211).</p>`,
  },
  perguntas: [
    { p: 'O que é um sacramento?', r: 'Sinal eficaz da graça instituído por Cristo e confiado à Igreja.' },
    { p: 'O que significa ex opere operato?', r: 'Que o sacramento age pela realização do rito, em virtude de Cristo.' },
    { p: 'Quais sacramentos imprimem caráter?', r: 'Batismo, Confirmação e Ordem.' },
  ],
  exercicios: [
    mc('Trento definiu os sete sacramentos na sessão:', ['VII', 'V', 'XIII', 'XXIV'], 0, '1547.'),
    mc('A matéria do Batismo é:', ['Água', 'Óleo', 'Pão', 'Imposição das mãos'], 0, 'CIC 1239.'),
    mc('Contra os donatistas escreveu:', ['Agostinho', 'Tomás', 'Lutero', 'Ário'], 0, 'Validade.'),
    mc('Em perigo de morte pode batizar:', ['Qualquer pessoa com a intenção da Igreja', 'Só o bispo', 'Só o padre', 'Ninguém'], 0, 'CIC 1256.'),
    mc('A Confirmação:', ['Aperfeiçoa a graça batismal', 'Perdoa o pecado original', 'Ordena padres', 'É repetível'], 0, 'CIC 1285.'),
    disc('Apresente a tabela dos sete sacramentos.', ['Matéria e forma', 'Ministro', 'Efeitos', 'Fontes']),
  ],
  resumo: ['Sinais eficazes da graça.', 'Sete (Trento VII).', 'Ex opere operato.', 'Matéria e forma.', 'Batismo e Confirmação: caráter.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1113–1321.', livro: 'cic' },
    { texto: 'Compêndio do Catecismo da Igreja Católica.', livro: 'compendio-cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, III, q. 60–72.', livro: 'suma-iii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a tabela', 'Ler a fonte indicada'],
  revisao: [['Sacramento', 'Sinal eficaz.'], ['Ex opere operato', 'Por Cristo.'], ['Caráter', 'Três sacramentos.']],
  avancado: {
    texto: `<h3>O batismo de desejo e de sangue</h3>
<p>A Igreja ensina que os catecúmenos que morrem antes do batismo, e os que morrem pela fé, recebem a salvação pelo desejo ou pelo martírio (CIC 1258–1259) ${tag('doutrina')}. O Catecismo também afirma que Deus não está preso aos sacramentos, embora nós estejamos (CIC 1257) ${tag('doutrina')}. A situação das crianças mortas sem batismo é confiada à misericórdia de Deus (CIC 1261) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1257–1261.', livro: 'cic' }],
    exercicios: [
      mc('O martírio antes do batismo é chamado batismo de:', ['Sangue', 'Água', 'Fogo', 'Desejo'], 0, 'CIC 1258.'),
      mc('Deus está preso aos sacramentos?', ['Não, mas nós estamos', 'Sim', 'Só no Batismo', 'Depende'], 0, 'CIC 1257.'),
      mc('Crianças mortas sem batismo são confiadas:', ['À misericórdia de Deus', 'Ao limbo definido como dogma', 'Ao inferno', 'Ao esquecimento'], 0, 'CIC 1261.'),
      disc('Explique o batismo de desejo e de sangue e o princípio de CIC 1257.', ['Desejo', 'Sangue', 'Princípio', 'Citações'])],
  },
}),

aula({
  id: 'tg3-3', titulo: 'A Eucaristia: presença real, sacrifício e comunhão', duracao: '150 min',
  aprendera: ['Explicar a presença real e a transubstanciação', 'Explicar a Missa como sacrifício', 'Situar a Eucaristia como fonte e ápice da vida cristã', 'Conhecer as fontes bíblicas da Eucaristia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O que os católicos querem dizer ao afirmar que o pão e o vinho se tornam o Corpo e o Sangue de Cristo?</p>
<h3>Fontes bíblicas</h3>
<p>Os relatos da instituição (Mt 26, Mc 14, Lc 22, 1Cor 11) e o discurso do pão da vida (Jo 6) são as principais fontes ${tag('fato')}.</p>
<h3>Presença real e transubstanciação</h3>
<p>A Igreja ensina que Cristo está presente verdadeira, real e substancialmente na Eucaristia (CIC 1374) ${tag('doutrina')}. O Concílio de Trento, na sessão XIII (1551), chamou de transubstanciação a conversão de toda a substância do pão e do vinho no Corpo e Sangue de Cristo, permanecendo as espécies (aparências) ${tag('fato')}. O termo já aparecia no IV Concílio de Latrão (1215) ${tag('fato')}.</p>
<h3>Sacrifício</h3>
<p>A Missa torna presente o único sacrifício da cruz, sem repeti-lo: é o mesmo sacrifício oferecido de modo incruento (CIC 1366–1367) ${tag('doutrina')}.</p>
<h3>Fonte e ápice</h3>
<p>A Lumen gentium 11 chama a Eucaristia de "fonte e ápice de toda a vida cristã" ${tag('doutrina')}. A comunhão une a Cristo, separa do pecado e faz a unidade da Igreja (CIC 1391–1398) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Transubstanciação', 'Conversão da substância do pão e do vinho no Corpo e Sangue de Cristo.'],
    ['Espécies', 'As aparências do pão e do vinho que permanecem.'],
    ['Presença real', 'Presença verdadeira e substancial de Cristo.'],
    ['Sacrifício incruento', 'O sacrifício da cruz tornado presente sem derramamento de sangue.'],
    ['Adoração eucarística', 'Culto de latria a Cristo presente no Santíssimo.'],
  ],
  exemplos: `<p><strong>Por que a hóstia consagrada é guardada no sacrário:</strong> se a presença de Cristo durasse só durante a Missa, não haveria sentido em reservar as hóstias. A prática antiga de levar a comunhão aos doentes e a adoração eucarística supõem que a presença permanece enquanto permanecem as espécies (CIC 1377–1379).</p>`,
  contexto: `<p><strong>No mundo:</strong> a solenidade de Corpus Christi foi estendida à Igreja universal por Urbano IV em 1264 ${tag('fato')}. <strong>No Brasil:</strong> os tapetes de Corpus Christi, feitos nas ruas de cidades como Ouro Preto, Santana de Parnaíba e Castelo, são tradição popular ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a transubstanciação não contradiz os sentidos', tag: 'argumento',
    premissas: ['Os sentidos captam acidentes: cor, sabor, forma.', 'A transubstanciação afirma mudança da substância, não dos acidentes.', 'Logo, os sentidos não são enganados naquilo que captam.'],
    conclusao: 'Logo, a doutrina não contradiz a experiência sensível; ela afirma algo que os sentidos não alcançam.',
    nota: 'Santo Tomás, Suma Teológica III, q. 75–76, e o hino Adoro te devote.',
  },
  objecoes: [
    { objecao: 'A transubstanciação depende da física aristotélica, já superada.', tag: 'debate',
      resposta: 'A Igreja usa a distinção entre o que uma coisa é e como ela aparece, que é mais básica do que qualquer teoria física. Paulo VI, na encíclica Mysterium fidei (1965), insistiu em manter a doutrina e a linguagem de Trento. Teólogos discutem como explicá-la em categorias atuais.' },
  ],
  aplicacao: `<p>Leia João 6 e CIC 1322–1419. Escreva uma explicação da presença real para alguém que não é católico, sem caricaturas e com as fontes.</p>`,
  fonte: {
    obra: 'Evangelho de João, capítulo 6; Catecismo, §§ 1322–1419', link: null,
    orientacao: `<p>Observe a reação dos ouvintes em Jo 6,60–66 e a resposta de Pedro.</p>`,
  },
  perguntas: [
    { p: 'O que é transubstanciação?', r: 'A conversão de toda a substância do pão e do vinho no Corpo e Sangue de Cristo.' },
    { p: 'A Missa repete o sacrifício da cruz?', r: 'Não; torna presente o único sacrifício, de modo incruento.' },
    { p: 'Como a Lumen gentium 11 chama a Eucaristia?', r: 'Fonte e ápice de toda a vida cristã.' },
  ],
  exercicios: [
    mc('Trento tratou da Eucaristia na sessão:', ['XIII', 'V', 'VI', 'VII'], 0, '1551.'),
    mc('Permanecem, após a consagração, as:', ['Espécies', 'Substâncias', 'Almas', 'Nenhuma aparência'], 0, 'Aparências.'),
    mc('Corpus Christi foi estendida à Igreja por:', ['Urbano IV', 'Pio X', 'Gregório Magno', 'Bento XVI'], 0, '1264.'),
    mc('O discurso do pão da vida está em:', ['João 6', 'Mateus 5', 'Lucas 15', 'Atos 2'], 0, 'Escritura.'),
    mc('A Mysterium fidei é de:', ['Paulo VI', 'Pio XII', 'João XXIII', 'Leão XIII'], 0, '1965.'),
    disc('Explique a presença real para um não católico.', ['Fontes', 'Precisão', 'Sem caricaturas', 'Clareza']),
  ],
  resumo: ['Presença real e substancial.', 'Transubstanciação (Latrão IV, Trento XIII).', 'Sacrifício tornado presente.', 'Fonte e ápice (LG 11).', 'Comunhão faz a Igreja.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1322–1419.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, III, q. 73–83.', livro: 'suma-iii' },
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação', 'Ler a fonte indicada'],
  revisao: [['Transubstanciação', 'Substância.'], ['Sacrifício', 'Incruento.'], ['LG 11', 'Fonte e ápice.']],
  avancado: {
    texto: `<h3>Os hinos eucarísticos de Santo Tomás</h3>
<p>Para a festa de Corpus Christi, Tomás compôs o ofício litúrgico, com hinos como o Pange lingua (cujas estrofes finais formam o Tantum ergo) e o Lauda Sion ${tag('fato')}. Os hinos condensam a doutrina em poesia e mostram a união entre teologia e oração ${tag('interpretacao')}. A autoria do Adoro te devote é atribuída a Tomás pela tradição, e alguns estudiosos a discutem ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Ofício de Corpus Christi (textos litúrgicos).', livro: 'tomas-liturgia' }],
    exercicios: [
      mc('O Tantum ergo é parte do:', ['Pange lingua', 'Te Deum', 'Magnificat', 'Glória'], 0, 'Hino.'),
      mc('Tomás compôs o ofício de:', ['Corpus Christi', 'Natal', 'Páscoa', 'Pentecostes'], 0, 'Liturgia.'),
      mc('A autoria do Adoro te devote é:', ['Tradicional, com discussão', 'Certamente de Agostinho', 'Desconhecida sem atribuição', 'De Lutero'], 0, 'Debate.'),
      disc('Analise uma estrofe de um hino eucarístico de Tomás e a doutrina que ela expressa.', ['Texto', 'Doutrina', 'Forma poética', 'Juízo'])],
  },
}),

aula({
  id: 'tg3-4', titulo: 'Sacramentos de cura e de serviço', duracao: '150 min',
  aprendera: ['Explicar a Penitência e seus atos', 'Explicar a Unção dos Enfermos', 'Explicar os três graus da Ordem', 'Explicar as propriedades do Matrimônio'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a Igreja tem sacramentos para os pecados, para a doença, para o ministério e para a vida conjugal?</p>
<h3>Penitência</h3>
<p>A Penitência perdoa os pecados cometidos após o batismo e reconcilia com Deus e com a Igreja (CIC 1422) ${tag('doutrina')}. Os atos do penitente são contrição, confissão e satisfação; o sacerdote dá a absolvição (CIC 1450–1460) ${tag('doutrina')}. O sigilo sacramental é absoluto (CIC 1467) ${tag('doutrina')}.</p>
<h3>Unção dos Enfermos</h3>
<p>Destinada a quem começa a estar em perigo por doença ou velhice, une o doente à Paixão de Cristo e dá conforto, perdão e, se convier à salvação, a saúde (CIC 1514–1532) ${tag('doutrina')}. A fonte bíblica é Tg 5,14–15 ${tag('fato')}.</p>
<h3>Ordem</h3>
<p>Tem três graus: episcopado, presbiterado e diaconato (CIC 1536, 1554) ${tag('doutrina')}. O padre age "na pessoa de Cristo cabeça" ao celebrar os sacramentos (CIC 1548) ${tag('doutrina')}.</p>
<h3>Matrimônio</h3>
<p>A aliança pela qual homem e mulher constituem entre si a comunhão de toda a vida, ordenada ao bem dos cônjuges e à geração e educação dos filhos (CIC 1601) ${tag('doutrina')}. Suas propriedades essenciais são a unidade e a indissolubilidade (CIC 1644–1645; Mt 19,6) ${tag('doutrina')}. A declaração de nulidade não é divórcio: reconhece que o vínculo não chegou a existir ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Contrição', 'Dor da alma e detestação do pecado, com propósito de não pecar mais.'],
    ['Sigilo sacramental', 'Proibição absoluta de revelar o que se ouviu em confissão.'],
    ['In persona Christi', 'O ministro age na pessoa de Cristo.'],
    ['Indissolubilidade', 'O vínculo matrimonial válido e consumado não pode ser dissolvido.'],
    ['Nulidade', 'Declaração de que o matrimônio não existiu validamente.'],
  ],
  exemplos: `<p><strong>Nulidade não é divórcio católico:</strong> o tribunal eclesiástico não desfaz um casamento válido; investiga se houve, por exemplo, falta de liberdade ou incapacidade grave no momento do consentimento. Se o vínculo existiu, a Igreja não o dissolve, por mais doloroso que seja o caso.</p>`,
  contexto: `<p><strong>No mundo:</strong> o papa Francisco simplificou os processos de nulidade com o motu proprio Mitis Iudex Dominus Iesus (2015) ${tag('fato')}. <strong>No Brasil:</strong> o casamento religioso pode ter efeitos civis quando registrado, conforme o Código Civil (arts. 1.515–1.516) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a confissão é feita a um sacerdote', tag: 'argumento',
    premissas: ['O pecado fere a relação com Deus e com a Igreja.', 'Cristo deu aos apóstolos o poder de perdoar pecados (Jo 20,22–23).', 'O sacerdote age em nome de Cristo e da Igreja.'],
    conclusao: 'Logo, a reconciliação sacramental passa pelo ministro, que perdoa em nome de Cristo e reconcilia com a Igreja.',
    nota: 'CIC 1441–1445.',
  },
  objecoes: [
    { objecao: 'Basta confessar-se diretamente a Deus.', tag: 'debate',
      resposta: 'A contrição perfeita, movida pelo amor de Deus, perdoa os pecados graves quando inclui o propósito de recorrer à confissão sacramental logo que possível (CIC 1452). A Igreja não nega a oração direta a Deus, mas ensina que Cristo instituiu um caminho ordinário de reconciliação com dimensão eclesial.' },
  ],
  aplicacao: `<p>Escolha um dos quatro sacramentos desta aula e escreva uma explicação para um catequizando adulto, com fontes bíblicas e números do Catecismo.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1420–1666', link: null,
    orientacao: `<p>Observe a divisão entre sacramentos de cura (Penitência, Unção) e de serviço da comunhão (Ordem, Matrimônio).</p>`,
  },
  perguntas: [
    { p: 'Quais os atos do penitente?', r: 'Contrição, confissão e satisfação.' },
    { p: 'Quais os graus da Ordem?', r: 'Episcopado, presbiterado e diaconato.' },
    { p: 'Quais as propriedades do Matrimônio?', r: 'Unidade e indissolubilidade.' },
  ],
  exercicios: [
    mc('A fonte bíblica da Unção é:', ['Tg 5,14–15', 'Jo 3,5', 'Mt 16,18', 'Rm 5,12'], 0, 'Tiago.'),
    mc('O sigilo sacramental é:', ['Absoluto', 'Relativo', 'Dispensável', 'Opcional'], 0, 'CIC 1467.'),
    mc('Jo 20,22–23 fundamenta:', ['O perdão dos pecados', 'O Matrimônio', 'A Unção', 'A Confirmação'], 0, 'Penitência.'),
    mc('A nulidade declara que:', ['O vínculo não existiu', 'O vínculo foi dissolvido', 'Houve divórcio', 'O casamento foi bom'], 0, 'Diferença.'),
    mc('A Mitis Iudex é de:', ['2015', '1983', '1917', '1965'], 0, 'Francisco.'),
    disc('Explique um sacramento de cura ou de serviço para um catequizando adulto.', ['Fontes bíblicas', 'Catecismo', 'Efeitos', 'Clareza']),
  ],
  resumo: ['Penitência: contrição, confissão, satisfação.', 'Unção: Tg 5.', 'Ordem: três graus.', 'Matrimônio: unidade e indissolubilidade.', 'Nulidade não é divórcio.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1420–1666.', livro: 'cic' },
    { texto: 'Compêndio do Catecismo da Igreja Católica.', livro: 'compendio-cic' },
    { texto: 'João Paulo II, Teologia do Corpo.', livro: 'jp2-teologia-corpo' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação', 'Ler a fonte indicada'],
  revisao: [['Contrição', 'Dor e propósito.'], ['Ordem', 'Três graus.'], ['Nulidade', 'Não existiu.']],
  avancado: {
    texto: `<h3>As indulgências</h3>
<p>A indulgência é a remissão da pena temporal devida pelos pecados já perdoados quanto à culpa (CIC 1471) ${tag('doutrina')}. Abusos na pregação das indulgências no século XVI foram ocasião das 95 teses de Lutero (1517) ${tag('fato')}. O Concílio de Trento manteve a doutrina e proibiu os abusos, e Paulo VI a reformou na constituição Indulgentiarum doctrina (1967) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1471–1479.', livro: 'cic' }],
    exercicios: [
      mc('A indulgência remite a:', ['Pena temporal', 'Culpa grave', 'Pecado futuro', 'Obrigação de confessar'], 0, 'CIC 1471.'),
      mc('As 95 teses são de:', ['1517', '1545', '1215', '1870'], 0, 'Lutero.'),
      mc('A Indulgentiarum doctrina é de:', ['Paulo VI', 'Pio V', 'Leão X', 'Francisco'], 0, '1967.'),
      disc('Explique a doutrina das indulgências e a diferença entre doutrina e abuso.', ['Definição', 'História', 'Reforma', 'Juízo'])],
  },
}),

avaliacao('tg3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a Igreja e os sete sacramentos, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Revise sua tabela dos sete sacramentos.</li></ul>`,
[
  disc('Explique a Igreja como mistério e instituição, as quatro notas e o sentido da infalibilidade, respondendo a uma objeção.', ['Mistério e instituição', 'Notas', 'Infalibilidade', 'Objeção e resposta']),
  disc('Explique a doutrina da Eucaristia (presença real, sacrifício e comunhão) e sua relação com a Igreja.', ['Presença real', 'Sacrifício', 'Comunhão', 'Fontes']),
]),
];
