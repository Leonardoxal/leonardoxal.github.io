// Astronomia III — modelos do cosmo e debates (etapas 6 e 7 do percurso de Astronomia).
// Comparação dos modelos, da gravitação newtoniana à relatividade, o caso Galileu, e Big Bang,
// criação e vida fora da Terra. Distingue início físico do universo e criação como dependência no ser.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'as3-1', titulo: 'Os modelos do cosmo comparados: Ptolomeu, Copérnico, Tycho e Newton', duracao: '120 min',
  aprendera: ['Comparar os modelos pelo que explicavam e pelos dados que usavam', 'Explicar por que cada modelo foi superado', 'Distinguir equivalência observacional e verdade física', 'Montar o quadro comparativo da etapa'],
  prereq: ['Astronomia II (módulo AS2)'],
  explicacao: `
<h3>O problema</h3>
<p>Modelos diferentes podem prever as mesmas observações. Como escolher entre eles, e o que significa dizer que um é "verdadeiro"?</p>
<h3>Quatro modelos</h3>
<ul>
<li><strong>Ptolomeu</strong>: Terra imóvel no centro; epiciclos e equante; boa previsão a olho nu ${tag('fato')}.</li>
<li><strong>Copérnico</strong>: Sol perto do centro; explicação natural do retrógrado; ainda com círculos e epiciclos ${tag('fato')}.</li>
<li><strong>Tycho</strong>: planetas em torno do Sol, Sol em torno da Terra; compatível com as fases de Vênus ${tag('fato')}.</li>
<li><strong>Kepler e Newton</strong>: órbitas elípticas explicadas pela gravitação universal; previsões novas, como a de Netuno (1846) ${tag('fato')}.</li>
</ul>
<h3>Equivalência e escolha</h3>
<p>Copérnico e Tycho eram geometricamente quase equivalentes para as observações de então ${tag('interpretacao')}. A decisão veio da física: a gravitação de Newton explica por que os planetas giram em torno do Sol, muito mais massivo, e não o contrário; e novas observações (aberração, paralaxe) confirmaram o movimento da Terra ${tag('argumento')}.</p>
<h3>Critérios</h3>
<p>Na escolha entre teorias pesam a adequação aos dados, a simplicidade, a coerência com o resto da física e a fecundidade em previsões novas ${tag('interpretacao')}. Thomas Kuhn, em <em>A revolução copernicana</em> (1957), mostrou que essas escolhas envolvem também fatores filosóficos e culturais ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Modelo', 'Representação simplificada que explica e prevê fenômenos.'],
    ['Equivalência observacional', 'Situação em que dois modelos preveem as mesmas observações.'],
    ['Fecundidade', 'Capacidade de uma teoria de gerar previsões novas confirmadas.'],
    ['Simplicidade', 'Uso de menos suposições para explicar os mesmos dados.'],
    ['Previsão nova', 'Previsão de fenômeno ainda não observado.'],
  ],
  exemplos: `<p><strong>Quadro (amostra de linha):</strong> modelo de Tycho — o que explicava: retrógrado, fases de Vênus, ausência de paralaxe; dados usados: observações a olho nu de alta precisão; por que foi superado: a gravitação de Newton torna fisicamente absurdo o Sol, muito mais massivo, girar em torno da Terra; aberração (1729) e paralaxe (1838).</p>`,
  contexto: `<p><strong>No mundo:</strong> a comparação dos modelos do cosmo é exemplo clássico em filosofia da ciência. <strong>No Brasil:</strong> o ensino de astronomia na educação básica é previsto na Base Nacional Comum Curricular, que inclui o sistema solar e os movimentos da Terra ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a física decidiu entre Copérnico e Tycho', tag: 'argumento',
    premissas: ['Os dois sistemas previam quase as mesmas posições aparentes.', 'Pela gravitação de Newton, dois corpos giram em torno do centro de massa comum, que no caso Sol–Terra fica dentro do Sol.', 'Logo, é a Terra que gira em torno do Sol, e não o contrário.'],
    conclusao: 'Logo, a decisão entre modelos geometricamente equivalentes veio da física e de novas observações.',
    nota: 'A aberração (1729) e a paralaxe (1838) confirmaram depois o movimento da Terra.',
  },
  objecoes: [
    { objecao: 'Se os modelos eram equivalentes, a escolha foi só questão de gosto.', tag: 'debate',
      resposta: 'A equivalência era aproximada e valia só para certos dados. Com a física de Newton e novas observações, as teorias deixaram de ser equivalentes. Critérios como coerência física e previsões novas não são gosto, são razões.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo dos modelos de Ptolomeu, Copérnico, Tycho e Kepler-Newton — o que cada um explicava, que dados usava e por que foi superado.</p>`,
  fonte: {
    obra: 'Thomas Kuhn, A revolução copernicana (1957), caps. 5 e 6', link: null,
    orientacao: `<p>Leia os capítulos sobre Copérnico e sobre a recepção do sistema. Identifique os argumentos técnicos e os não técnicos que pesaram na escolha. Use no quadro.</p>`,
  },
  perguntas: [
    { p: 'O que é equivalência observacional?', r: 'Situação em que dois modelos preveem as mesmas observações.' },
    { p: 'O que decidiu entre Copérnico e Tycho?', r: 'A física de Newton e novas observações (aberração e paralaxe).' },
    { p: 'Que critérios pesam na escolha entre teorias?', r: 'Adequação aos dados, simplicidade, coerência e fecundidade.' },
  ],
  exercicios: [
    mc('O modelo compatível com as fases de Vênus e com a Terra imóvel era o de:', ['Ptolomeu', 'Tycho', 'Aristóteles', 'Nenhum'], 1, 'Sistema misto.'),
    mc('A previsão de Netuno (1846) mostrou a fecundidade de:', ['Ptolomeu', 'Copérnico', 'Newton', 'Tycho'], 2, 'Gravitação.'),
    mc('A revolução copernicana (1957) é de:', ['Koyré', 'Kuhn', 'Duhem', 'Popper'], 1, 'Filosofia da ciência.'),
    mc('O centro de massa do sistema Sol–Terra fica:', ['No meio do caminho', 'Dentro do Sol', 'Na Terra', 'Na Lua'], 1, 'Sol muito mais massivo.'),
    mc('Explicar os mesmos dados com menos suposições é critério de:', ['Fecundidade', 'Simplicidade', 'Autoridade', 'Tradição'], 1, 'Navalha.'),
    disc('Entregue o quadro comparativo dos quatro modelos com o que explicavam, dados usados e razão da superação.', ['Quatro modelos', 'Explicações corretas', 'Dados', 'Razões da superação']),
  ],
  resumo: ['Ptolomeu, Copérnico, Tycho, Kepler-Newton.', 'Equivalência aproximada entre Copérnico e Tycho.', 'A física de Newton decidiu.', 'Critérios: dados, simplicidade, coerência, fecundidade.', 'Kuhn (1957).'],
  referencias: [
    { texto: 'Thomas Kuhn, A revolução copernicana (1957).' },
    { texto: 'Pierre Duhem, Salvar os fenômenos (1908).' },
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os capítulos de Kuhn'],
  revisao: [['Tycho', 'Equivalente a Copérnico na geometria.'], ['Newton', 'Decidiu pela física.'], ['Fecundidade', 'Previsões novas.']],
  avancado: {
    texto: `<h3>Paradigmas</h3>
<p>Em <em>A estrutura das revoluções científicas</em> (1962), Kuhn chamou de "paradigmas" os modelos que orientam uma comunidade científica e de "revoluções" as trocas de paradigma ${tag('fato')}. A tese de que paradigmas são "incomensuráveis" é muito debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Thomas Kuhn, A estrutura das revoluções científicas (1962).' }],
    exercicios: [
      mc('A estrutura das revoluções científicas é de:', ['1957', '1962', '1970', '1987'], 1, 'Kuhn.'),
      mc('Para Kuhn, a troca de paradigma é uma:', ['Revolução científica', 'Ciência normal', 'Falsificação', 'Indução'], 0, 'Mudança de modelo.'),
      mc('A incomensurabilidade dos paradigmas é tese:', ['Consensual', 'Debatida', 'Doutrina', 'Lei'], 1, 'Filosofia da ciência.'),
      disc('Avalie se a revolução copernicana se encaixa no modelo de Kuhn, com dois argumentos a favor e um contra.', ['Modelo de Kuhn', 'Dois a favor', 'Um contra', 'Conclusão'])],
  },
}),

aula({
  id: 'as3-2', titulo: 'Da gravitação de Newton à relatividade: Mercúrio, Sobral e as ondas gravitacionais', duracao: '150 min',
  aprendera: ['Explicar a anomalia do periélio de Mercúrio', 'Expor a ideia central da relatividade geral', 'Explicar o papel do eclipse de Sobral (1919)', 'Relacionar a relatividade a aplicações e observações recentes'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A gravitação de Newton funcionou por mais de dois séculos. Por que foi preciso uma nova teoria, e como ela foi testada?</p>
<h3>Mercúrio</h3>
<p>Le Verrier notou, em 1859, que o periélio da órbita de Mercúrio avançava um pouco mais do que a física de Newton previa — cerca de 43 segundos de arco por século ${tag('fato')}. Procurou-se um planeta escondido ("Vulcano"), que não existia ${tag('fato')}.</p>
<h3>Relatividade geral</h3>
<p>Em 1915, Albert Einstein propôs a relatividade geral: a gravitação é efeito da curvatura do espaço-tempo produzida pela massa e pela energia ${tag('fato')}. A teoria explicou exatamente o avanço do periélio de Mercúrio e previu que a luz das estrelas seria desviada ao passar perto do Sol ${tag('fato')}.</p>
<h3>Sobral, 1919</h3>
<p>No eclipse total de 29 de maio de 1919, expedições britânicas em Sobral (Ceará) e na ilha do Príncipe (África) mediram o desvio da luz de estrelas perto do Sol; os resultados foram apresentados como confirmação da previsão de Einstein ${tag('fato')}. As placas de Sobral foram as de melhor qualidade ${tag('interpretacao')}.</p>
<h3>Hoje</h3>
<p>O GPS precisa de correções relativísticas para funcionar ${tag('fato')}. Em 2015, os detectores LIGO registraram ondas gravitacionais de dois buracos negros em fusão (anúncio em 2016) ${tag('fato')}. Em 2019, o Event Horizon Telescope divulgou a primeira imagem da sombra de um buraco negro, na galáxia M87 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Periélio', 'Ponto da órbita mais próximo do Sol.'],
    ['Espaço-tempo', 'União das três dimensões do espaço com o tempo (relatividade).'],
    ['Curvatura', 'Deformação do espaço-tempo produzida por massa e energia.'],
    ['Desvio da luz', 'Mudança de trajetória da luz ao passar perto de grandes massas.'],
    ['Ondas gravitacionais', 'Ondulações do espaço-tempo produzidas por massas aceleradas.'],
  ],
  exemplos: `<p><strong>GPS e relatividade:</strong> os relógios dos satélites GPS, por estarem em movimento e mais longe da Terra, marcam o tempo de modo ligeiramente diferente dos relógios no solo. Sem a correção relativística, os erros de posição se acumulariam em vários quilômetros por dia ${tag('fato')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a relatividade geral é base da cosmologia moderna. <strong>No Brasil:</strong> o eclipse de Sobral é lembrado no Museu do Eclipse, em Sobral; Einstein visitou o Rio de Janeiro em 1925 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Mercúrio refutou Newton e confirmou Einstein', tag: 'argumento',
    premissas: ['A física de Newton, com todos os planetas conhecidos, previa um avanço do periélio menor que o observado.', 'Não se encontrou planeta que explicasse a diferença.', 'A relatividade geral, sem ajustes ad hoc, previu exatamente o avanço observado.'],
    conclusao: 'Logo, o periélio de Mercúrio foi evidência contra a física de Newton em regime de gravidade forte e a favor da relatividade.',
    nota: 'Newton continua excelente aproximação na maioria das situações.',
  },
  objecoes: [
    { objecao: 'Se Newton foi superado, a ciência nunca chega à verdade.', tag: 'debate',
      resposta: 'A física de Newton não foi descartada: é um caso limite da relatividade, válido com enorme precisão em condições comuns. A ciência avança por aproximações cada vez melhores; superar uma teoria não é mostrar que ela era inteiramente falsa.' },
  ],
  aplicacao: `<p>Pesquise o eclipse de Sobral de 1919: quem foram os astrônomos, que equipamentos usaram, o que mediram e que resultado obtiveram. Distinga o que foi medido do que foi interpretado na época.</p>`,
  fonte: {
    obra: 'F. W. Dyson, A. S. Eddington e C. Davidson, "A Determination of the Deflection of Light by the Sun\'s Gravitational Field" (1920); Albert Einstein, A teoria da relatividade especial e geral (1917)', link: null,
    orientacao: `<p>No relatório de 1920, localize os valores medidos em Sobral e no Príncipe. No livro de Einstein, a explicação acessível da curvatura. Compare previsão e medida.</p>`,
  },
  perguntas: [
    { p: 'Que anomalia tinha a órbita de Mercúrio?', r: 'Um avanço do periélio de cerca de 43 segundos de arco por século além do previsto por Newton.' },
    { p: 'Quando ocorreu o eclipse de Sobral?', r: 'Em 29 de maio de 1919.' },
    { p: 'O que o LIGO detectou em 2015?', r: 'Ondas gravitacionais da fusão de dois buracos negros.' },
  ],
  exercicios: [
    mc('A relatividade geral foi proposta em:', ['1905', '1915', '1919', '1925'], 1, 'Einstein.'),
    mc('O eclipse que testou a relatividade foi observado em Sobral e em:', ['Lisboa', 'Ilha do Príncipe', 'Greenwich', 'Havaí'], 1, '1919.'),
    mc('A primeira imagem da sombra de um buraco negro (M87) foi divulgada em:', ['2015', '2016', '2019', '2022'], 2, 'Event Horizon Telescope.'),
    mc('O planeta hipotético para explicar Mercúrio chamava-se:', ['Netuno', 'Vulcano', 'Plutão', 'Nibiru'], 1, 'Não existia.'),
    mc('O GPS precisa de correções:', ['Religiosas', 'Relativísticas', 'Nenhuma', 'Só geográficas'], 1, 'Relógios dos satélites.'),
    disc('Explique o eclipse de Sobral: o que se mediu, o que se previa e o que se concluiu, separando medida e interpretação.', ['Previsão', 'Medida', 'Conclusão', 'Separação']),
  ],
  resumo: ['Mercúrio: ~43″/século a mais (Le Verrier, 1859).', 'Einstein (1915): curvatura do espaço-tempo.', 'Sobral e Príncipe (29/5/1919).', 'GPS; LIGO (2015); EHT (2019).', 'Newton como caso limite.'],
  referencias: [
    { texto: 'Albert Einstein, A teoria da relatividade especial e geral (1917).' },
    { texto: 'F. W. Dyson, A. S. Eddington e C. Davidson, relatório sobre o eclipse de 1919 (1920).' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Pesquisar o eclipse de Sobral'],
  revisao: [['Mercúrio', '43″/século.'], ['Sobral', '1919.'], ['LIGO', '2015.']],
  avancado: {
    texto: `<h3>Lentes gravitacionais</h3>
<p>Galáxias e aglomerados desviam a luz de objetos mais distantes, produzindo arcos e imagens múltiplas — as lentes gravitacionais —, usadas hoje para estudar a matéria escura ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre relatividade.' }],
    exercicios: [
      mc('Lentes gravitacionais resultam do:', ['Efeito Doppler', 'Desvio da luz por massas', 'Brilho das estrelas', 'Movimento retrógrado'], 1, 'Relatividade.'),
      mc('Lentes gravitacionais ajudam a estudar a:', ['Matéria escura', 'Fase da Lua', 'Precessão', 'Maré'], 0, 'Massa invisível.'),
      mc('Uma lente gravitacional pode produzir:', ['Arcos e imagens múltiplas', 'Eclipses', 'Auroras', 'Cometas'], 0, 'Distorção.'),
      disc('Explique como uma lente gravitacional permite "pesar" um aglomerado de galáxias.', ['Mecanismo', 'Medida', 'Conclusão', 'Limites'])],
  },
}),

aula({
  id: 'as3-3', titulo: 'O caso Galileu: história, documentos e mitos', duracao: '150 min',
  aprendera: ['Reconstituir a cronologia do caso Galileu com documentos', 'Expor as posições de Galileu e de Belarmino', 'Distinguir fatos e mitos sobre o caso', 'Expor o reconhecimento de erros por João Paulo II'],
  prereq: ['Aulas anteriores do módulo', 'Astronomia II: Galileu (as2-4)'],
  explicacao: `
<h3>O problema</h3>
<p>O caso Galileu é citado como prova de que fé e ciência são inimigas. O que dizem os documentos?</p>
<h3>Cronologia</h3>
<ul>
<li>1615: Galileu escreve a <em>Carta à grã-duquesa Cristina de Lorena</em>, defendendo que a Bíblia não ensina astronomia, e cita a frase atribuída ao cardeal Barônio: o Espírito Santo quis ensinar "como se vai ao céu, e não como vai o céu" ${tag('fato')}.</li>
<li>1615: o cardeal Roberto Belarmino escreve ao padre Foscarini que, se houvesse demonstração verdadeira do movimento da Terra, seria preciso reinterpretar as passagens bíblicas com cuidado; enquanto não houvesse, devia-se tratar o sistema como hipótese ${tag('fato')}.</li>
<li>1616: decreto da Congregação do Índice suspende o livro de Copérnico "até que seja corrigido"; Galileu é admoestado a não sustentar a doutrina ${tag('fato')}.</li>
<li>1632: Galileu publica o <em>Diálogo sobre os dois máximos sistemas do mundo</em> ${tag('fato')}.</li>
<li>1633: é julgado pelo Santo Ofício, abjura e é condenado à prisão, cumprida em residência, por fim em sua casa de Arcetri, onde morreu em 1642 ${tag('fato')}.</li>
</ul>
<h3>Mitos</h3>
<p>Galileu não foi torturado nem queimado ${tag('fato')}. A frase "Eppur si muove" ("e no entanto se move") não aparece nos documentos do processo e é considerada lenda posterior ${tag('fato')}. Também é mito que a Igreja se opusesse à ciência em geral: muitos astrônomos eram clérigos, e os jesuítas do Colégio Romano confirmaram observações de Galileu em 1611 ${tag('fato')}.</p>
<h3>Reconhecimento</h3>
<p>João Paulo II criou em 1979 uma comissão para estudar o caso e, em discurso à Pontifícia Academia das Ciências em 31 de outubro de 1992, reconheceu os erros dos teólogos da época, que não souberam distinguir a fé de uma cosmologia ${tag('fato')}. O Concílio Vaticano II já lamentara atitudes que opunham fé e ciência (<em>Gaudium et Spes</em>, 36) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Santo Ofício', 'Congregação romana responsável pela doutrina da fé (hoje Dicastério para a Doutrina da Fé).'],
    ['Índice', 'Lista de livros proibidos ou suspensos até correção.'],
    ['Abjuração', 'Renúncia formal a uma tese considerada errônea.'],
    ['Donec corrigatur', '"Até que seja corrigido", termo do decreto de 1616.'],
    ['Diálogo dos dois máximos sistemas', 'Obra de Galileu (1632) que comparava Ptolomeu e Copérnico.'],
  ],
  exemplos: `<p><strong>Fato x mito:</strong> fato — Galileu foi condenado em 1633 e viveu em prisão domiciliar até 1642. Mito — foi torturado ou queimado. Fato documentado — o decreto de 1616 suspendeu Copérnico "até correção". Mito — a Igreja proibia toda astronomia. Cada afirmação deve ser verificada nos documentos.</p>`,
  contexto: `<p><strong>No mundo:</strong> o caso é tema de livros, peças (Brecht) e debates sobre ciência e religião. <strong>No Brasil:</strong> o caso aparece em livros didáticos, muitas vezes com simplificações que vale a pena confrontar com os documentos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'A posição de Belarmino em premissas', tag: 'argumento',
    premissas: ['A Escritura, entendida segundo os Padres, parecia afirmar a imobilidade da Terra.', 'Se houvesse demonstração verdadeira do contrário, seria preciso reinterpretar a Escritura.', 'Na época, não havia tal demonstração (a paralaxe só seria medida em 1838).'],
    conclusao: 'Logo, para Belarmino, o heliocentrismo devia ser tratado como hipótese até haver demonstração.',
    nota: 'A posição tinha lógica; o erro foi tratar uma questão científica como doutrinal e condenar Galileu.',
  },
  objecoes: [
    { objecao: 'O caso Galileu prova que fé e ciência são inimigas.', tag: 'debate',
      resposta: 'O caso mostra um erro grave de autoridades eclesiásticas, reconhecido em 1992. Mas não prova incompatibilidade: Galileu era católico e defendia que a Bíblia e a natureza vêm do mesmo Deus; muitos cientistas eram clérigos; e a Igreja ensina que fé e razão não podem contradizer-se (Dei Filius, 1870; Fides et Ratio, 1998).' },
  ],
  aplicacao: `<p>Monte uma linha do tempo do caso Galileu com sete datas, cada uma com o documento correspondente, e uma tabela "fato / mito" com cinco afirmações frequentes, verificadas nas fontes.</p>`,
  fonte: {
    obra: 'Galileu Galilei, Carta à grã-duquesa Cristina de Lorena (1615); Roberto Belarmino, Carta ao padre Foscarini (1615); São João Paulo II, discurso à Pontifícia Academia das Ciências (31/10/1992)', link: null,
    orientacao: `<p>Na carta de Galileu, localize a citação atribuída a Barônio. Na carta de Belarmino, a condição da demonstração. No discurso de 1992, o reconhecimento dos erros. Compare as três posições.</p>`,
  },
  perguntas: [
    { p: 'O que dizia Belarmino a Foscarini em 1615?', r: 'Que, havendo demonstração verdadeira do movimento da Terra, seria preciso reinterpretar a Escritura; sem ela, devia-se tratar o sistema como hipótese.' },
    { p: 'Galileu foi torturado?', r: 'Não.' },
    { p: 'Quando João Paulo II reconheceu os erros no caso?', r: 'Em discurso de 31 de outubro de 1992.' },
  ],
  exercicios: [
    mc('O Diálogo dos dois máximos sistemas é de:', ['1610', '1616', '1632', '1642'], 2, 'Galileu.'),
    mc('O processo de Galileu foi em:', ['1616', '1633', '1642', '1992'], 1, 'Santo Ofício.'),
    mc('"Eppur si muove" é:', ['Frase dos autos', 'Lenda posterior', 'Título de livro', 'Decreto'], 1, 'Não documentada.'),
    mc('O decreto de 1616 suspendeu Copérnico:', ['Para sempre', 'Até ser corrigido', 'Só na Espanha', 'Por um mês'], 1, 'Donec corrigatur.'),
    mc('"Como se vai ao céu, e não como vai o céu" é frase atribuída a:', ['Galileu', 'Belarmino', 'Barônio', 'Urbano VIII'], 2, 'Citada por Galileu.'),
    disc('Entregue a linha do tempo do caso Galileu com documentos e a tabela fato/mito com cinco afirmações verificadas.', ['Sete datas com documentos', 'Cinco afirmações', 'Verificação nas fontes', 'Conclusão equilibrada']),
  ],
  resumo: ['Carta a Cristina e carta de Belarmino (1615).', 'Decreto de 1616; Diálogo (1632); processo (1633).', 'Prisão domiciliar; morte em Arcetri (1642).', 'Mitos: tortura, "Eppur si muove".', 'João Paulo II (1992): reconhecimento.'],
  referencias: [
    { texto: 'Galileu Galilei, Carta à grã-duquesa Cristina de Lorena (1615).' },
    { texto: 'Roberto Belarmino, Carta ao padre Foscarini (1615).' },
    { texto: 'São João Paulo II, discurso à Pontifícia Academia das Ciências (31 de outubro de 1992).' },
    { texto: 'Annibale Fantoli, Galileu: pelo copernicanismo e pela Igreja (1993).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo e a tabela', 'Ler as duas cartas de 1615'],
  revisao: [['1633', 'Processo.'], ['Belarmino', 'Hipótese até demonstração.'], ['1992', 'Reconhecimento.']],
  avancado: {
    texto: `<h3>O argumento das marés</h3>
<p>Galileu considerava as marés a prova principal do movimento da Terra; sua explicação estava errada — as marés se devem sobretudo à atração da Lua, como Kepler intuíra e Newton explicou ${tag('fato')}. O episódio mostra que mesmo um grande cientista pode defender uma conclusão verdadeira com um argumento falso ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Annibale Fantoli, Galileu: pelo copernicanismo e pela Igreja (1993).' }],
    exercicios: [
      mc('Galileu explicava as marés pelo:', ['Movimento da Terra', 'Atração da Lua', 'Vento', 'Calor do Sol'], 0, 'Explicação errada.'),
      mc('As marés se devem sobretudo à:', ['Rotação apenas', 'Atração da Lua', 'Salinidade', 'Precessão'], 1, 'Newton.'),
      mc('O episódio das marés mostra que:', ['Galileu nunca errou', 'Conclusão verdadeira pode ter argumento falso', 'A Lua não influi', 'Kepler errou'], 1, 'Lógica.'),
      disc('Analise o argumento das marés de Galileu: premissas, erro e por que a conclusão (Terra em movimento) era ainda assim verdadeira.', ['Premissas', 'Erro', 'Conclusão verdadeira', 'Lição de lógica'])],
  },
}),

aula({
  id: 'as3-4', titulo: 'Big Bang, Lemaître e a criação; vida fora da Terra', duracao: '150 min',
  aprendera: ['Expor a origem da teoria do Big Bang com Lemaître e Hubble', 'Distinguir início físico do universo e criação como dependência no ser', 'Expor a posição de Santo Tomás sobre o início do mundo', 'Avaliar a questão da vida fora da Terra à luz da fé'],
  prereq: ['Aulas anteriores do módulo', 'Fase teológica: criação'],
  explicacao: `
<h3>O problema</h3>
<p>O universo teve um começo? Se a ciência mostrar que sim, prova a criação? Se mostrar que não, a nega?</p>
<h3>Lemaître e Hubble</h3>
<p>O padre e físico belga Georges Lemaître publicou em 1927 um modelo de universo em expansão, com uma relação entre distância e velocidade das galáxias ${tag('fato')}. Em 1929, Edwin Hubble apresentou dados observacionais dessa relação ${tag('fato')}. Em 1931, Lemaître propôs que o universo começou de um "átomo primordial" — origem da ideia do Big Bang ${tag('fato')}. A radiação cósmica de fundo, detectada por Penzias e Wilson em 1965, foi forte confirmação ${tag('fato')}.</p>
<h3>Ciência e criação</h3>
<p>Em 1951, Pio XII, em discurso à Pontifícia Academia das Ciências, viu na cosmologia recente um testemunho do início do mundo ${tag('fato')}. Lemaître preferiu manter a distinção entre o início físico e a doutrina da criação, para não fazer a fé depender de uma teoria científica ${tag('interpretacao')}.</p>
<p>Santo Tomás ensina que a criação é a dependência total do ser de todas as coisas em relação a Deus (<em>Suma Teológica</em> I, q. 45) e que o fato de o mundo ter começado no tempo é conhecido pela fé, não demonstrado pela razão (I, q. 46, a. 2) ${tag('doutrina')}. Assim, um universo com ou sem início físico continuaria dependendo de Deus para existir ${tag('argumento')}.</p>
<h3>Vida fora da Terra</h3>
<p>Ainda não há evidência de vida fora da Terra ${tag('fato')}. Astrônomos do Observatório Vaticano, refundado por Leão XIII em 1891, afirmaram que a eventual descoberta de vida inteligente não contradiria a fé na criação ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Big Bang', 'Modelo em que o universo evoluiu de um estado muito quente e denso.'],
    ['Expansão do universo', 'Aumento das distâncias entre galáxias ao longo do tempo.'],
    ['Radiação cósmica de fundo', 'Radiação remanescente do universo primitivo (detectada em 1965).'],
    ['Criação', 'Dependência total do ser de todas as coisas em relação a Deus (ST I, q. 45).'],
    ['Observatório Vaticano', 'Instituição astronômica da Santa Sé, refundada em 1891.'],
  ],
  exemplos: `<p><strong>Duas perguntas diferentes:</strong> "como era o universo há 13,8 bilhões de anos?" é pergunta da cosmologia, respondida com dados e modelos ${tag('interpretacao')}. "Por que existe algo em vez de nada?" é pergunta da metafísica, que a cosmologia supõe e não responde. Confundir as duas leva tanto ao "Big Bang prova Deus" quanto ao "Big Bang dispensa Deus".</p>`,
  contexto: `<p><strong>No mundo:</strong> o Observatório Vaticano mantém um telescópio no Arizona e pesquisadores em vários campos da astronomia ${tag('fato')}. <strong>No Brasil:</strong> a pesquisa em cosmologia inclui a participação em levantamentos internacionais e o radiotelescópio BINGO, em construção no sertão da Paraíba ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a criação não depende de o universo ter começado no tempo', tag: 'argumento',
    premissas: ['Criar é dar o ser, não apenas iniciar um processo.', 'Um universo sem começo no tempo continuaria recebendo o ser a cada instante, se não existe por si.', 'A física estuda transformações do que já existe; não explica por que algo existe.'],
    conclusao: 'Logo, a doutrina da criação não depende do Big Bang, nem seria refutada por um universo sem início.',
    nota: 'É a posição de Santo Tomás em ST I, q. 46, a. 2.',
  },
  objecoes: [
    { objecao: 'O Big Bang prova cientificamente a existência de Deus.', tag: 'debate',
      resposta: 'O Big Bang descreve a evolução do universo a partir de um estado muito denso; não prova que esse estado veio do nada nem identifica sua causa. As provas da existência de Deus pertencem à filosofia (as cinco vias), não à cosmologia física. Lemaître insistia nessa distinção.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio — o que a cosmologia do Big Bang pode e o que não pode dizer sobre a criação? Use Lemaître, Pio XII (1951) e Santo Tomás (ST I, q. 45–46), distinguindo início físico e dependência no ser.</p>`,
  fonte: {
    obra: 'Georges Lemaître, "The Beginning of the World from the Point of View of Quantum Theory" (1931); Pio XII, discurso à Pontifícia Academia das Ciências (1951); Santo Tomás, Suma Teológica I, q. 45, a. 1 e q. 46, a. 2', link: null,
    orientacao: `<p>Em Lemaître, a proposta do átomo primordial. Em Pio XII, a relação entre cosmologia e criação. Em Santo Tomás, a definição de criação e a resposta sobre o início do mundo. Compare as três posições.</p>`,
  },
  perguntas: [
    { p: 'Quem propôs primeiro o universo em expansão com relação distância–velocidade?', r: 'Georges Lemaître, em 1927.' },
    { p: 'O que é criação para Santo Tomás?', r: 'A dependência total do ser de todas as coisas em relação a Deus.' },
    { p: 'O início do mundo no tempo é demonstrável pela razão segundo Santo Tomás?', r: 'Não; é conhecido pela fé (ST I, q. 46, a. 2).' },
  ],
  exercicios: [
    mc('O "átomo primordial" é proposta de:', ['Hubble', 'Lemaître', 'Einstein', 'Penzias'], 1, '1931.'),
    mc('A radiação cósmica de fundo foi detectada em:', ['1927', '1929', '1951', '1965'], 3, 'Penzias e Wilson.'),
    mc('O Observatório Vaticano foi refundado por Leão XIII em:', ['1582', '1891', '1951', '1992'], 1, 'Specola Vaticana.'),
    mc('Para Santo Tomás, que o mundo começou no tempo é conhecido:', ['Pela física', 'Pela fé', 'Pela astrologia', 'Por ninguém'], 1, 'ST I, q. 46, a. 2.'),
    mc('"O Big Bang prova Deus" confunde:', ['Física e química', 'Início físico e criação metafísica', 'Hubble e Lemaître', 'Nada'], 1, 'Dois planos.'),
    disc('Entregue o ensaio da etapa sobre o que a cosmologia pode e não pode dizer sobre a criação, com Lemaître, Pio XII e Santo Tomás.', ['Três posições expostas', 'Distinção dos planos', 'Argumento claro', 'Conclusão proporcional']),
  ],
  resumo: ['Lemaître (1927, 1931); Hubble (1929).', 'Radiação de fundo (1965).', 'Pio XII (1951); cautela de Lemaître.', 'Criação = dependência no ser (ST I, q. 45); início pela fé (q. 46).', 'Vida fora da Terra: sem evidência; não contradiz a fé.'],
  referencias: [
    { texto: 'Georges Lemaître, "The Beginning of the World from the Point of View of Quantum Theory" (1931).' },
    { texto: 'Pio XII, discurso à Pontifícia Academia das Ciências (1951).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I, q. 45–46.' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre cosmologia.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio da etapa', 'Ler ST I, q. 45–46'],
  revisao: [['Lemaître', 'Expansão (1927).'], ['Criação', 'Dependência no ser.'], ['ST I, q. 46', 'Início pela fé.']],
  avancado: {
    texto: `<h3>A equação de Drake</h3>
<p>Frank Drake propôs em 1961 uma equação para estimar o número de civilizações comunicativas na galáxia, multiplicando fatores como a taxa de formação de estrelas e a fração de planetas habitáveis ${tag('fato')}. Vários fatores são hoje desconhecidos, e as estimativas variam enormemente ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Guy Consolmagno e Paul Mueller, Você batizaria um extraterrestre? (2014).' }],
    exercicios: [
      mc('A equação de Drake é de:', ['1927', '1961', '1995', '2014'], 1, 'Frank Drake.'),
      mc('Os resultados da equação de Drake são:', ['Precisos', 'Muito incertos', 'Doutrina', 'Proibidos'], 1, 'Fatores desconhecidos.'),
      mc('Você batizaria um extraterrestre? é de astrônomos do:', ['MIT', 'Observatório Vaticano', 'INPE', 'LIGO'], 1, 'Consolmagno e Mueller.'),
      disc('Analise a equação de Drake: que fatores são conhecidos, quais são hipotéticos e o que se pode concluir.', ['Fatores', 'Conhecidos x hipotéticos', 'Conclusão', 'Grau de confiança'])],
  },
}),

avaliacao('as3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os modelos do cosmo, a relatividade, o caso Galileu e a relação entre cosmologia e criação, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro dos modelos e a linha do tempo do caso Galileu.</li><li>Releia seu ensaio sobre o Big Bang e a criação.</li></ul>`,
[
  disc('Responda a quem diz que "a história da astronomia prova a guerra entre ciência e religião", com o caso Galileu, Copérnico, Lemaître e o Observatório Vaticano, separando fatos e mitos.', ['Afirmação exposta com justiça', 'Quatro exemplos', 'Fatos x mitos', 'Conclusão equilibrada']),
  disc('Explique como uma teoria física é testada, com o exemplo do periélio de Mercúrio e do eclipse de Sobral, e por que Newton continua útil.', ['Previsão e teste', 'Mercúrio', 'Sobral', 'Newton como caso limite']),
]),
];
