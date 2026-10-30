// Astronomia II — história da astronomia e fundadores da astronomia moderna (etapas 4 e 5 do percurso).
// Babilônios e gregos, Ptolomeu e a astronomia medieval, Copérnico, Tycho e Kepler, Galileu e Newton.
// Sem anacronismo: cada modelo é avaliado pelos dados e problemas de sua época.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'as2-1', titulo: 'Astronomia antiga: babilônios, Aristóteles, Aristarco e Hiparco', duracao: '150 min',
  aprendera: ['Descrever a astronomia de registros dos babilônios', 'Expor o cosmo de Aristóteles e seus argumentos pela esfericidade da Terra', 'Explicar a proposta heliocêntrica de Aristarco', 'Explicar as contribuições de Hiparco'],
  prereq: ['Astronomia I (módulo AS1)'],
  explicacao: `
<h3>O problema</h3>
<p>Muito antes dos telescópios, povos antigos mediram o céu com precisão. Como chegaram a seus resultados, e que modelos propuseram?</p>
<h3>Babilônios</h3>
<p>Escribas babilônios registraram por séculos posições de planetas e eclipses em tabuinhas de argila, e usaram métodos aritméticos para prever fenômenos ${tag('fato')}. O ciclo de Saros, de cerca de 18 anos, permite prever a repetição de eclipses ${tag('fato')}.</p>
<h3>Aristóteles</h3>
<p>Em <em>Do céu</em>, Aristóteles descreveu um cosmo esférico, com a Terra imóvel no centro e os céus feitos de um quinto elemento, o éter ${tag('fato')}. Argumentou que a Terra é esférica porque sua sombra nos eclipses lunares é sempre circular e porque estrelas diferentes aparecem ao viajar para o norte ou para o sul ${tag('fato')}.</p>
<h3>Aristarco</h3>
<p>Aristarco de Samos (século III a.C.) propôs que a Terra gira em torno do Sol, segundo o relato de Arquimedes ${tag('fato')}. Sua proposta não prevaleceu na Antiguidade, em parte porque não se observava paralaxe estelar (as1-3) ${tag('interpretacao')}.</p>
<h3>Hiparco</h3>
<p>Hiparco (século II a.C.) elaborou um catálogo de estrelas com magnitudes e descobriu a precessão dos equinócios ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ciclo de Saros', 'Período de cerca de 18 anos após o qual os eclipses se repetem.'],
    ['Éter', 'Quinto elemento, de que seriam feitos os céus em Aristóteles.'],
    ['Geocentrismo', 'Modelo com a Terra no centro do cosmo.'],
    ['Heliocentrismo', 'Modelo com o Sol no centro.'],
    ['Catálogo estelar', 'Lista de estrelas com posições e brilhos.'],
  ],
  exemplos: `<p><strong>O argumento do eclipse:</strong> se a sombra da Terra na Lua é sempre circular, em qualquer posição, a Terra deve ser esférica — só a esfera projeta sombra circular em todas as orientações. É um argumento de Aristóteles que qualquer pessoa pode verificar observando um eclipse lunar.</p>`,
  contexto: `<p><strong>No mundo:</strong> a astronomia babilônica e grega foi transmitida e desenvolvida por astrônomos de língua árabe e, depois, pelo Ocidente latino. <strong>No Brasil:</strong> os conhecimentos astronômicos de povos indígenas, como as constelações guarani, mostram outras tradições de observação do céu ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que os antigos sabiam que a Terra é esférica', tag: 'argumento',
    premissas: ['A sombra da Terra nos eclipses lunares é sempre circular.', 'Viajando para o sul, aparecem estrelas que não se viam no norte.', 'Navios que se afastam desaparecem primeiro pelo casco.'],
    conclusao: 'Logo, a Terra é esférica — conclusão aceita pelos estudiosos desde a Antiguidade.',
    nota: 'O mito de que na Idade Média se acreditava numa Terra plana foi discutido em g2-1.',
  },
  objecoes: [
    { objecao: 'Os antigos rejeitaram o heliocentrismo por ignorância.', tag: 'debate',
      resposta: 'Havia razões: a falta de paralaxe estelar visível e a ausência de efeitos perceptíveis do movimento da Terra (como ventos constantes). Essas objeções só foram respondidas com a física e os instrumentos dos séculos XVII a XIX.' },
  ],
  aplicacao: `<p>Observe um eclipse lunar (consulte as efemérides do Observatório Nacional) ou fotos de um eclipse e verifique o argumento de Aristóteles. Redija o argumento em premissas e conclusão.</p>`,
  fonte: {
    obra: 'Aristóteles, Do céu, livro II, caps. 13–14; Arquimedes, O contador de areia (relato sobre Aristarco)', link: null,
    orientacao: `<p>Em Do céu II, 14, localize os argumentos pela esfericidade da Terra. No Contador de areia, a passagem sobre Aristarco. Compare as duas visões do cosmo.</p>`,
  },
  perguntas: [
    { p: 'Que argumentos Aristóteles deu pela esfericidade da Terra?', r: 'A sombra circular nos eclipses lunares e a mudança das estrelas visíveis ao viajar para norte ou sul.' },
    { p: 'Quem propôs o heliocentrismo na Antiguidade?', r: 'Aristarco de Samos, no século III a.C.' },
    { p: 'O que descobriu Hiparco?', r: 'A precessão dos equinócios, além de fazer um catálogo de estrelas.' },
  ],
  exercicios: [
    mc('O ciclo de Saros dura cerca de:', ['1 ano', '18 anos', '100 anos', '26 mil anos'], 1, 'Repetição de eclipses.'),
    mc('O quinto elemento dos céus em Aristóteles é o:', ['Fogo', 'Éter', 'Ar', 'Água'], 1, 'Quintessência.'),
    mc('O relato sobre o heliocentrismo de Aristarco vem de:', ['Ptolomeu', 'Arquimedes', 'Platão', 'Plínio'], 1, 'O contador de areia.'),
    mc('Hiparco viveu no século:', ['V a.C.', 'II a.C.', 'II d.C.', 'XV'], 1, 'Catálogo e precessão.'),
    mc('Uma razão antiga contra o heliocentrismo era:', ['A cor do Sol', 'A falta de paralaxe estelar visível', 'O tamanho da Lua', 'O calendário'], 1, 'Objeção real.'),
    disc('Exponha o argumento de Aristóteles pela esfericidade da Terra em premissas e conclusão e avalie-o com uma observação sua ou fotográfica.', ['Premissas', 'Conclusão', 'Observação', 'Avaliação']),
  ],
  resumo: ['Babilônios: registros e Saros.', 'Aristóteles: cosmo esférico; Terra esférica.', 'Aristarco: heliocentrismo (séc. III a.C.).', 'Hiparco: catálogo e precessão.', 'Objeções reais ao heliocentrismo.'],
  referencias: [
    { texto: 'Aristóteles, Do céu.', livro: 'aristoteles-ceu' },
    { texto: 'Arquimedes, O contador de areia.' },
    { texto: 'Thomas Kuhn, A revolução copernicana (1957).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler Do céu II, 13–14'],
  revisao: [['Aristóteles', 'Terra esférica.'], ['Aristarco', 'Heliocentrismo antigo.'], ['Hiparco', 'Precessão.']],
  avancado: {
    texto: `<h3>O mecanismo de Anticítera</h3>
<p>O mecanismo de Anticítera, encontrado num naufrágio grego, é um dispositivo de engrenagens dos séculos II–I a.C. que calculava posições do Sol e da Lua e previa eclipses ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Derek de Solla Price, Gears from the Greeks (1974).' }],
    exercicios: [
      mc('O mecanismo de Anticítera é:', ['Um relógio de sol', 'Um dispositivo de engrenagens para cálculos astronômicos', 'Um telescópio', 'Um mapa'], 1, 'Grécia antiga.'),
      mc('Ele previa:', ['Terremotos', 'Eclipses', 'Chuvas', 'Marés'], 1, 'Ciclos.'),
      mc('O mecanismo foi achado:', ['Num templo', 'Num naufrágio', 'Numa biblioteca', 'Num túmulo egípcio'], 1, 'Anticítera.'),
      disc('Explique o que o mecanismo de Anticítera revela sobre a astronomia e a técnica gregas.', ['Descrição', 'Funções', 'Significado', 'Fontes'])],
  },
}),

aula({
  id: 'as2-2', titulo: 'Ptolomeu e a astronomia medieval: salvar os fenômenos', duracao: '150 min',
  aprendera: ['Explicar epiciclos, deferentes e equante', 'Expor a ideia de "salvar os fenômenos"', 'Descrever contribuições da astronomia islâmica', 'Situar a astronomia na universidade medieval'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Os planetas às vezes parecem andar para trás (movimento retrógrado). Como explicar isso com círculos e a Terra no centro?</p>
<h3>O Almagesto</h3>
<p>Cláudio Ptolomeu, no <em>Almagesto</em> (século II), explicou o movimento dos planetas com <strong>epiciclos</strong> (círculos menores) que giram sobre <strong>deferentes</strong> (círculos maiores), e com o <strong>equante</strong>, ponto a partir do qual o movimento parece uniforme ${tag('fato')}. O modelo previa posições com boa precisão para a época ${tag('fato')}.</p>
<h3>Salvar os fenômenos</h3>
<p>Pierre Duhem, em <em>Salvar os fenômenos</em> (1908), mostrou que muitos astrônomos antigos e medievais entendiam os modelos como instrumentos de cálculo para "salvar as aparências", não necessariamente como descrição física ${tag('interpretacao')}.</p>
<h3>Astronomia islâmica</h3>
<p>Al-Battani aperfeiçoou medidas do ano e da precessão; al-Sufi publicou o <em>Livro das estrelas fixas</em> (c. 964), com a mais antiga descrição registrada da galáxia de Andrômeda ${tag('fato')}. No observatório de Maragha (fundado em 1259), Nasir al-Din al-Tusi propôs o "par de Tusi", recurso geométrico depois encontrado em Copérnico ${tag('fato')}.</p>
<h3>Idade Média latina</h3>
<p>O tratado <em>Da esfera</em>, de João de Sacrobosco (século XIII), foi manual universitário por séculos ${tag('fato')}. No século XIV, Jean Buridan e Nicolau Oresme discutiram a possibilidade da rotação da Terra ${tag('fato')}. A Igreja promoveu a astronomia também por causa do calendário e do cálculo da Páscoa ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Movimento retrógrado', 'Recuo aparente de um planeta em relação às estrelas.'],
    ['Epiciclo', 'Círculo menor cujo centro percorre o deferente.'],
    ['Deferente', 'Círculo maior em torno da Terra no modelo de Ptolomeu.'],
    ['Equante', 'Ponto a partir do qual o movimento parece uniforme.'],
    ['Salvar os fenômenos', 'Construir modelos que reproduzam as aparências observadas.'],
  ],
  exemplos: `<p><strong>Retrógrado de Marte:</strong> quando a Terra "ultrapassa" Marte em suas órbitas, Marte parece recuar no céu por algumas semanas. Ptolomeu explicava o recuo com o epiciclo; Copérnico, com a diferença de velocidades orbitais. Os dois modelos "salvam o fenômeno"; as observações posteriores decidiram entre eles.</p>`,
  contexto: `<p><strong>No mundo:</strong> muitos nomes de estrelas usados hoje vêm do árabe, como Aldebarã e Betelgeuse ${tag('fato')}. <strong>No Brasil:</strong> no século XVI, a navegação portuguesa usava tabelas astronômicas herdadas da tradição medieval e islâmica para determinar a latitude no mar ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o modelo de Ptolomeu durou 14 séculos', tag: 'argumento',
    premissas: ['O modelo previa posições planetárias com precisão adequada às observações a olho nu.', 'Era coerente com a física aristotélica então aceita.', 'Não havia dados que o refutassem claramente antes do telescópio e das medidas de Tycho.'],
    conclusao: 'Logo, a longevidade do modelo de Ptolomeu se explica por sua eficácia e coerência, não apenas por autoridade.',
    nota: 'Evita o anacronismo de julgar o modelo pelos dados que só vieram depois.',
  },
  objecoes: [
    { objecao: 'A Idade Média foi um período sem ciência.', tag: 'debate',
      resposta: 'Universidades medievais ensinavam astronomia como parte do quadrivium; Buridan, Oresme e outros discutiram teses físicas importantes; e a astronomia islâmica fez grandes avanços. A tese das "trevas" é hoje rejeitada pelos historiadores da ciência.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique, com um desenho, como o modelo de Ptolomeu "salvava" o movimento retrógrado de Marte com epiciclo e deferente.</p>`,
  fonte: {
    obra: 'Cláudio Ptolomeu, Almagesto, livro I; Pierre Duhem, Salvar os fenômenos (1908), introdução; João de Sacrobosco, Da esfera', link: null,
    orientacao: `<p>No livro I do Almagesto, localize as hipóteses gerais. Em Duhem, a tese sobre o sentido dos modelos. Em Sacrobosco, como o cosmo era ensinado nas universidades.</p>`,
  },
  perguntas: [
    { p: 'Como Ptolomeu explicava o movimento retrógrado?', r: 'Com epiciclos que giram sobre deferentes.' },
    { p: 'O que significa "salvar os fenômenos"?', r: 'Construir modelos que reproduzam as aparências observadas.' },
    { p: 'O que é o par de Tusi?', r: 'Recurso geométrico de al-Tusi, depois encontrado em Copérnico.' },
  ],
  exercicios: [
    mc('O Almagesto é do século:', ['IV a.C.', 'II', 'X', 'XIII'], 1, 'Ptolomeu.'),
    mc('Salvar os fenômenos (1908) é de:', ['Kuhn', 'Duhem', 'Koyré', 'Popper'], 1, 'Pierre Duhem.'),
    mc('O observatório de Maragha foi fundado em:', ['964', '1259', '1543', '1609'], 1, 'Al-Tusi.'),
    mc('Da esfera, manual universitário medieval, é de:', ['Sacrobosco', 'Oresme', 'Buridan', 'Tomás de Aquino'], 0, 'Século XIII.'),
    mc('O ponto de movimento aparentemente uniforme em Ptolomeu é o:', ['Epiciclo', 'Deferente', 'Equante', 'Polo'], 2, 'Equante.'),
    disc('Explique com desenho como Ptolomeu salvava o movimento retrógrado de Marte e por que o modelo durou tanto.', ['Desenho correto', 'Epiciclo e deferente', 'Razões da longevidade', 'Sem anacronismo']),
  ],
  resumo: ['Ptolomeu: epiciclos, deferentes, equante.', 'Duhem (1908): salvar os fenômenos.', 'Islã: al-Battani, al-Sufi (c. 964), Maragha (1259), al-Tusi.', 'Sacrobosco; Buridan e Oresme.', 'Longevidade por eficácia e coerência.'],
  referencias: [
    { texto: 'Cláudio Ptolomeu, Almagesto (século II).' },
    { texto: 'Pierre Duhem, Salvar os fenômenos (1908).' },
    { texto: 'Thomas Kuhn, A revolução copernicana (1957).' },
    { texto: 'Edward Grant, Os fundamentos da ciência moderna na Idade Média (1996).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação com desenho', 'Ler os textos indicados'],
  revisao: [['Epiciclo', 'Ptolomeu.'], ['Duhem', 'Salvar os fenômenos.'], ['Maragha', '1259.']],
  avancado: {
    texto: `<h3>Oresme e a rotação da Terra</h3>
<p>Em seu <em>Livro do céu e do mundo</em> (1377), Nicolau Oresme examinou argumentos a favor e contra a rotação diária da Terra e concluiu que nenhuma observação a refutava, embora tenha mantido a posição tradicional por razões que considerou mais fortes ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Edward Grant, Os fundamentos da ciência moderna na Idade Média (1996).' }],
    exercicios: [
      mc('O Livro do céu e do mundo é de:', ['Buridan', 'Oresme', 'Sacrobosco', 'Copérnico'], 1, '1377.'),
      mc('Oresme concluiu que a rotação da Terra:', ['Era impossível', 'Não era refutada pelas observações', 'Era provada', 'Era heresia'], 1, 'Análise de argumentos.'),
      mc('O livro de Edward Grant trata da:', ['Ciência na Idade Média', 'Física quântica', 'Astronomia indígena', 'Navegação'], 0, '1996.'),
      disc('Exponha os argumentos de Oresme sobre a rotação da Terra e compare-os com os de Copérnico.', ['Argumentos de Oresme', 'Copérnico', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'as2-3', titulo: 'Copérnico, Tycho Brahe e Kepler: do heliocentrismo às órbitas elípticas', duracao: '150 min',
  aprendera: ['Expor a proposta de Das revoluções das esferas celestes', 'Explicar a contribuição observacional de Tycho Brahe', 'Enunciar as três leis de Kepler', 'Avaliar a revolução copernicana sem anacronismo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como o Sol passou ao centro, e por que isso levou mais de um século para ser aceito?</p>
<h3>Copérnico</h3>
<p>Nicolau Copérnico (1473–1543), cônego da catedral de Frauenburg, publicou <em>Das revoluções das esferas celestes</em> em 1543 ${tag('fato')}. Colocou o Sol perto do centro e explicou o movimento retrógrado pelas diferentes velocidades da Terra e dos planetas, mas manteve órbitas circulares e epiciclos ${tag('fato')}. O livro foi dedicado ao papa Paulo III; um prefácio não assinado, de Andreas Osiander, apresentava o sistema como hipótese de cálculo ${tag('fato')}.</p>
<h3>Tycho Brahe</h3>
<p>Tycho Brahe (1546–1601) fez as observações a olho nu mais precisas da época, em seu observatório de Uraniborg ${tag('fato')}. Propôs um sistema misto: os planetas giram em torno do Sol, e o Sol em torno da Terra ${tag('fato')}.</p>
<h3>Kepler</h3>
<p>Johannes Kepler (1571–1630), usando os dados de Tycho sobre Marte, publicou na <em>Astronomia nova</em> (1609) as duas primeiras leis: órbitas elípticas com o Sol num dos focos; o raio vetor varre áreas iguais em tempos iguais ${tag('fato')}. Em <em>Harmonias do mundo</em> (1619), a terceira lei, P² = a³ ${tag('fato')}. Kepler via na ordem matemática do cosmo um reflexo da mente do Criador ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Revolução copernicana', 'Passagem do geocentrismo ao heliocentrismo.'],
    ['Sistema tychônico', 'Planetas em torno do Sol e Sol em torno da Terra (Tycho).'],
    ['Elipse', 'Curva fechada com dois focos; órbitas planetárias (Kepler).'],
    ['Lei das áreas', 'Segunda lei de Kepler: áreas iguais em tempos iguais.'],
    ['Foco', 'Ponto da elipse onde está o Sol, na primeira lei de Kepler.'],
  ],
  exemplos: `<p><strong>A lei das áreas:</strong> um planeta anda mais depressa perto do Sol e mais devagar longe dele. A Terra, mais próxima do Sol em janeiro, anda um pouco mais rápido nessa época; por isso o verão do hemisfério sul (dezembro a março) é alguns dias mais curto que o do norte ${tag('fato')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a revolução copernicana é exemplo clássico de mudança de paradigma na história da ciência (Kuhn, 1957). <strong>No Brasil:</strong> as ideias de Copérnico e Kepler chegaram ao ensino colonial com atraso, ligado ao currículo dos colégios jesuítas e às reformas pombalinas do século XVIII ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que os dados de Tycho levaram Kepler à elipse', tag: 'argumento',
    premissas: ['As observações de Tycho sobre Marte tinham precisão de cerca de 2 minutos de arco.', 'O melhor modelo circular de Kepler errava cerca de 8 minutos de arco.', 'Kepler confiou nos dados mais do que no círculo.'],
    conclusao: 'Logo, a precisão das observações obrigou o abandono do círculo e levou à órbita elíptica.',
    nota: 'Exemplo de dados que decidem entre modelos.',
  },
  objecoes: [
    { objecao: 'Copérnico provou o heliocentrismo.', tag: 'debate',
      resposta: 'Copérnico propôs um modelo mais harmônico, mas não tinha provas decisivas; seu sistema com círculos não era mais preciso que o de Ptolomeu. As provas vieram depois: fases de Vênus (Galileu), elipses (Kepler), gravitação (Newton), aberração da luz (1729) e paralaxe (1838).' },
  ],
  aplicacao: `<p>Desenhe uma elipse com dois alfinetes e um barbante, marque o Sol num foco e ilustre a lei das áreas com dois setores de áreas iguais. Explique por que o planeta anda mais rápido perto do Sol.</p>`,
  fonte: {
    obra: 'Nicolau Copérnico, Das revoluções das esferas celestes (1543), livro I, caps. 9–10; Johannes Kepler, Astronomia nova (1609), introdução', link: null,
    orientacao: `<p>Em Copérnico, localize a ordem dos planetas e o argumento da harmonia. Em Kepler, a passagem sobre os 8 minutos de arco. Compare os dois métodos.</p>`,
  },
  perguntas: [
    { p: 'Quando foi publicado Das revoluções?', r: 'Em 1543.' },
    { p: 'Qual o sistema de Tycho Brahe?', r: 'Planetas em torno do Sol e Sol em torno da Terra.' },
    { p: 'Quais as três leis de Kepler?', r: 'Órbitas elípticas com o Sol num foco; áreas iguais em tempos iguais; P² = a³.' },
  ],
  exercicios: [
    mc('Copérnico era:', ['Leigo sem vínculo eclesiástico', 'Cônego da catedral de Frauenburg', 'Bispo', 'Jesuíta'], 1, 'Clérigo.'),
    mc('O prefácio que apresentava o sistema como hipótese é de:', ['Copérnico', 'Osiander', 'Kepler', 'Galileu'], 1, 'Não assinado.'),
    mc('As duas primeiras leis de Kepler foram publicadas em:', ['1543', '1609', '1619', '1687'], 1, 'Astronomia nova.'),
    mc('O observatório de Tycho chamava-se:', ['Maragha', 'Uraniborg', 'Greenwich', 'Pico dos Dias'], 1, 'Dinamarca.'),
    mc('Pela lei das áreas, o planeta anda mais rápido:', ['Longe do Sol', 'Perto do Sol', 'Sempre igual', 'Só em janeiro'], 1, 'Segunda lei.'),
    disc('Explique por que Copérnico não provou o heliocentrismo e quais evidências posteriores o confirmaram.', ['Limites de Copérnico', 'Evidências posteriores', 'Ordem histórica', 'Sem anacronismo']),
  ],
  resumo: ['Copérnico (1543): heliocentrismo com círculos.', 'Osiander: prefácio de hipótese.', 'Tycho: dados precisos; sistema misto.', 'Kepler (1609, 1619): três leis.', 'Os 8 minutos de arco.'],
  referencias: [
    { texto: 'Nicolau Copérnico, Das revoluções das esferas celestes (1543).' },
    { texto: 'Johannes Kepler, Astronomia nova (1609).' },
    { texto: 'Thomas Kuhn, A revolução copernicana (1957).' },
    { texto: 'Arthur Koestler, Os sonâmbulos (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Desenhar a elipse e a lei das áreas'],
  revisao: [['Copérnico', '1543.'], ['Tycho', 'Sistema misto.'], ['Kepler', 'Três leis.']],
  avancado: {
    texto: `<h3>Aberração da luz</h3>
<p>Em 1729, James Bradley explicou um pequeno deslocamento anual das estrelas — a aberração da luz — pelo movimento da Terra combinado com a velocidade finita da luz, primeira evidência direta do movimento orbital da Terra ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Arthur Koestler, Os sonâmbulos (1959).' }],
    exercicios: [
      mc('A aberração da luz foi explicada por:', ['Bessel', 'Bradley', 'Kepler', 'Newton'], 1, '1729.'),
      mc('A aberração é evidência de:', ['Rotação da Lua', 'Movimento orbital da Terra', 'Expansão do universo', 'Gravitação'], 1, 'Combinada com a velocidade da luz.'),
      mc('A aberração (1729) veio antes da paralaxe de:', ['1543', '1609', '1838', '1919'], 2, 'Bessel.'),
      disc('Coloque em ordem cronológica e explique cinco evidências do movimento da Terra, de Galileu a Bessel.', ['Cinco evidências', 'Ordem correta', 'Explicação', 'Conclusão'])],
  },
}),

aula({
  id: 'as2-4', titulo: 'Galileu e Newton: o telescópio e a gravitação universal', duracao: '180 min',
  aprendera: ['Fazer a ficha de leitura de O mensageiro das estrelas', 'Explicar por que as fases de Vênus refutam Ptolomeu', 'Expor a gravitação universal dos Principia', 'Mostrar como Newton derivou as leis de Kepler'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O telescópio mostrou um céu novo, e a física de Newton explicou por que os planetas obedecem às leis de Kepler.</p>
<h3>O mensageiro das estrelas</h3>
<p>Em <em>O mensageiro das estrelas</em> (1610), Galileu relatou: montanhas e crateras na Lua; inúmeras estrelas invisíveis a olho nu, inclusive na Via Láctea; e quatro satélites girando em torno de Júpiter ${tag('fato')}. Os satélites mostravam que nem tudo gira em torno da Terra ${tag('argumento')}.</p>
<h3>As fases de Vênus</h3>
<p>Em 1610, Galileu observou que Vênus apresenta um ciclo completo de fases, como a Lua ${tag('fato')}. No modelo de Ptolomeu, Vênus nunca mostraria fase cheia; o ciclo completo é compatível com Vênus girando em torno do Sol — o que refuta Ptolomeu, mas não o sistema de Tycho ${tag('argumento')}.</p>
<h3>Newton</h3>
<p>Isaac Newton, nos <em>Princípios matemáticos da filosofia natural</em> (1687), formulou as leis do movimento e a gravitação universal: dois corpos se atraem com força proporcional ao produto das massas e inversamente proporcional ao quadrado da distância ${tag('fato')}. Mostrou que as leis de Kepler decorrem dessa lei e que a mesma força faz a maçã cair e a Lua girar ${tag('fato')}. No "Escólio geral", Newton afirmou que o sistema do Sol, planetas e cometas só poderia proceder do conselho e domínio de um Ser inteligente e poderoso ${tag('fato')}.</p>`,
  vocabulario: [
    ['Satélites galileanos', 'Io, Europa, Ganimedes e Calisto, luas de Júpiter vistas em 1610.'],
    ['Fases de Vênus', 'Ciclo de iluminação de Vênus observado por Galileu.'],
    ['Gravitação universal', 'Atração entre massas, proporcional às massas e ao inverso do quadrado da distância.'],
    ['Principia', 'Princípios matemáticos da filosofia natural (Newton, 1687).'],
    ['Escólio geral', 'Texto final dos Principia, com reflexões filosóficas e teológicas.'],
  ],
  exemplos: `<p><strong>A Lua cai:</strong> Newton comparou a aceleração da Lua em sua órbita com a de uma maçã na Terra. A Lua está a cerca de 60 raios terrestres; pela lei do inverso do quadrado, sua aceleração deve ser 60² = 3.600 vezes menor que a da maçã — e é isso que se observa. A mesma lei vale na Terra e no céu.</p>`,
  contexto: `<p><strong>No mundo:</strong> a física de Newton unificou céu e Terra e dominou a ciência até a relatividade. <strong>No Brasil:</strong> as luas de Júpiter e as fases de Vênus são observáveis com binóculos e pequenas lunetas em qualquer cidade brasileira com céu razoavelmente escuro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as fases de Vênus refutam Ptolomeu, mas não Tycho', tag: 'argumento',
    premissas: ['No modelo de Ptolomeu, Vênus fica sempre entre a Terra e o Sol e nunca mostraria fase cheia.', 'Galileu observou o ciclo completo de fases, inclusive a cheia.', 'No sistema de Tycho, Vênus gira em torno do Sol, como no de Copérnico, e mostraria todas as fases.'],
    conclusao: 'Logo, as fases de Vênus refutam Ptolomeu, mas não decidem entre Tycho e Copérnico.',
    nota: 'Mostra a necessidade de cuidado lógico ao usar uma observação como prova.',
  },
  objecoes: [
    { objecao: 'Galileu provou que a Terra gira em torno do Sol.', tag: 'debate',
      resposta: 'Galileu reuniu fortes indícios contra Ptolomeu, mas não refutou o sistema de Tycho, e seu argumento das marés estava errado. A prova veio do conjunto: Kepler, Newton, Bradley (1729) e Bessel (1838). Isso é importante para julgar com justiça o caso Galileu (etapa 7).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de O mensageiro das estrelas — referência, contexto, as três descobertas principais, o método de observação, o que cada descoberta provava e o que não provava, e uma citação curta localizada.</p>`,
  fonte: {
    obra: 'Galileu Galilei, O mensageiro das estrelas (1610); Isaac Newton, Princípios matemáticos da filosofia natural (1687), livro III e Escólio geral', link: null,
    orientacao: `<p>No Mensageiro, siga as observações da Lua e dos satélites de Júpiter, com as datas. No livro III dos Principia, a "regra" de unificar causas. No Escólio geral, a passagem sobre o Criador.</p>`,
  },
  perguntas: [
    { p: 'Que descobertas relatou O mensageiro das estrelas?', r: 'Montanhas na Lua, muitas estrelas invisíveis a olho nu e quatro satélites de Júpiter.' },
    { p: 'Por que as fases de Vênus refutam Ptolomeu?', r: 'Porque no modelo ptolomaico Vênus nunca mostraria fase cheia.' },
    { p: 'Que diz a lei da gravitação universal?', r: 'A atração é proporcional ao produto das massas e inversamente proporcional ao quadrado da distância.' },
  ],
  exercicios: [
    mc('O mensageiro das estrelas é de:', ['1543', '1609', '1610', '1687'], 2, 'Galileu.'),
    mc('Os Principia de Newton são de:', ['1610', '1668', '1687', '1729'], 2, 'Gravitação.'),
    mc('Se a distância dobra, a força gravitacional fica:', ['Duas vezes menor', 'Quatro vezes menor', 'Igual', 'Duas vezes maior'], 1, 'Inverso do quadrado.'),
    mc('As fases de Vênus são compatíveis com:', ['Só Ptolomeu', 'Copérnico e Tycho', 'Só Aristóteles', 'Nenhum modelo'], 1, 'Vênus em torno do Sol.'),
    mc('As luas de Júpiter mostravam que:', ['Tudo gira em torno da Terra', 'Nem tudo gira em torno da Terra', 'Júpiter é uma estrela', 'A Lua é plana'], 1, 'Centros múltiplos.'),
    disc('Entregue a ficha de leitura de O mensageiro das estrelas, indicando o que cada descoberta provava e o que não provava.', ['Três descobertas', 'O que provava', 'O que não provava', 'Citação localizada']),
  ],
  resumo: ['Galileu (1610): Lua, estrelas, luas de Júpiter.', 'Fases de Vênus: contra Ptolomeu, não contra Tycho.', 'Newton (1687): gravitação universal.', 'Kepler derivado de Newton; a Lua "cai".', 'Escólio geral: o Criador.'],
  referencias: [
    { texto: 'Galileu Galilei, O mensageiro das estrelas (1610).' },
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
    { texto: 'Alexandre Koyré, Do mundo fechado ao universo infinito (1957).' },
    { texto: 'Thomas Kuhn, A revolução copernicana (1957).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha do Mensageiro', 'Ler os textos indicados'],
  revisao: [['Galileu', '1610.'], ['Vênus', 'Refuta Ptolomeu.'], ['Newton', '1687, inverso do quadrado.']],
  avancado: {
    texto: `<h3>A descoberta de Netuno</h3>
<p>Em 1846, Urbain Le Verrier calculou, a partir de perturbações na órbita de Urano, a posição de um planeta desconhecido; Johann Galle o observou no mesmo ano perto do local previsto — Netuno ${tag('fato')}. Foi um triunfo da gravitação newtoniana ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Alexandre Koyré, Do mundo fechado ao universo infinito (1957).' }],
    exercicios: [
      mc('Netuno foi descoberto em:', ['1781', '1846', '1930', '2006'], 1, 'Le Verrier e Galle.'),
      mc('Netuno foi previsto a partir de perturbações na órbita de:', ['Saturno', 'Urano', 'Júpiter', 'Plutão'], 1, 'Cálculo newtoniano.'),
      mc('Quem fez o cálculo foi:', ['Galle', 'Le Verrier', 'Herschel', 'Bessel'], 1, '1846.'),
      disc('Explique por que a descoberta de Netuno foi uma confirmação forte da teoria de Newton.', ['Previsão', 'Observação', 'Força da confirmação', 'Limites'])],
  },
}),

avaliacao('as2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da astronomia, de Babilônia a Newton, e duas discursivas de análise histórica sem anacronismo.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a ficha de O mensageiro das estrelas.</li><li>Revise as leis de Kepler e a gravitação.</li></ul>`,
[
  disc('Conte a passagem do geocentrismo ao heliocentrismo em cinco etapas, indicando em cada uma o dado ou o argumento decisivo e o que ainda faltava provar.', ['Cinco etapas', 'Dados e argumentos', 'O que faltava', 'Sem anacronismo']),
  disc('Avalie a frase "a Igreja impediu a ciência na Idade Média" com exemplos de astronomia medieval latina e islâmica e do papel dos clérigos.', ['Frase exposta', 'Exemplos', 'Avaliação', 'Conclusão proporcional']),
]),
];
