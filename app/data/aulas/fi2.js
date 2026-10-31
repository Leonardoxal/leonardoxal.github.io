// Física II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Física).
// Física de Aristóteles e física medieval; revolução científica e física dos séculos XIX e XX;
// Arquimedes, Galileu e Kepler; Newton, Pascal, Maxwell, Einstein, Planck e Lemaître.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'fi2-1', titulo: 'Da física de Aristóteles à física medieval: lugares naturais, ímpeto e cinemática', duracao: '150 min',
  aprendera: ['Expor a física de Aristóteles', 'Conhecer as críticas de Filopono e a teoria do ímpeto', 'Explicar a regra de Merton e os gráficos de Oresme', 'Avaliar a tese da continuidade entre física medieval e moderna'],
  prereq: ['Física I (módulo FI1)'],
  explicacao: `
<h3>O problema</h3>
<p>Costuma-se dizer que a física começou com Galileu. Mas por quase dois mil anos se pensou com rigor sobre o movimento. O que se pensava, e o que mudou?</p>
<h3>Aristóteles</h3>
<p>Para Aristóteles, cada elemento tem um lugar natural: a terra embaixo, o fogo em cima; o movimento natural leva o corpo a seu lugar, e o movimento violento exige um motor ${tag('fato')}. O céu é feito de um quinto elemento, o éter, com movimento circular perpétuo ${tag('fato')}. Ele afirmou que corpos mais pesados caem mais depressa e que o movimento violento cessa quando cessa o motor ${tag('fato')}. Sua física é uma filosofia da natureza, que busca as causas, mais do que uma ciência de medida ${tag('interpretacao')}.</p>
<h3>Filopono e o ímpeto</h3>
<p>João Filopono, no século VI, criticou a explicação aristotélica do projétil e propôs que o lançador imprime ao corpo uma força ${tag('fato')}. No século XIV, Jean Buridan desenvolveu a teoria do ímpeto: uma qualidade impressa no projétil que o mantém em movimento até ser vencida pela resistência e pelo peso ${tag('fato')}.</p>
<h3>Merton e Oresme</h3>
<p>Os "calculadores" do Merton College, em Oxford, enunciaram no século XIV a regra da velocidade média: um corpo uniformemente acelerado percorre a mesma distância que outro com velocidade constante igual à média ${tag('fato')}. Nicolau Oresme representou essas variações em diagramas geométricos, antecipando os gráficos ${tag('fato')}.</p>
<h3>Continuidade ou ruptura?</h3>
<p>Pierre Duhem defendeu que a física moderna tem raízes na escolástica medieval; outros historiadores enfatizam a ruptura do século XVII ${tag('debate')}. Hoje se reconhecem contribuições medievais importantes sem negar a novidade de Galileu e Newton ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Lugar natural', 'Lugar para onde cada elemento tende, segundo Aristóteles.'],
    ['Movimento violento', 'Movimento contrário à natureza do corpo, que exige um motor.'],
    ['Éter', 'Quinto elemento, de que seriam feitos os céus.'],
    ['Ímpeto', 'Qualidade impressa no projétil que o mantém em movimento (Buridan).'],
    ['Regra de Merton', 'Teorema da velocidade média no movimento uniformemente acelerado.'],
  ],
  exemplos: `<p><strong>A regra de Merton em números:</strong> um carro acelera uniformemente de 0 a 20 m/s em 10 s. A velocidade média é 10 m/s; a distância é 10 × 10 = 100 m — a mesma que percorreria a 10 m/s constantes. É o resultado que Galileu usaria para a queda dos corpos, e que hoje se lê como a área de um triângulo no gráfico v × t.</p>`,
  contexto: `<p><strong>No mundo:</strong> as universidades medievais ensinavam a física de Aristóteles comentada, como no comentário de Tomás de Aquino à Física ${tag('fato')}. <strong>No Brasil:</strong> os colégios jesuítas coloniais ensinavam filosofia natural aristotélica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a física de Aristóteles não era tola', tag: 'argumento',
    premissas: ['Na experiência comum, corpos pesados caem mais depressa que penas, e objetos param quando não são empurrados.', 'Aristóteles generalizou a partir dessa experiência, sem os instrumentos de medida e o vácuo de laboratório.', 'Suas explicações eram coerentes e buscavam causas.'],
    conclusao: 'Logo, a física aristotélica foi uma teoria racional, superada por métodos de medida e idealização, não por ser absurda.',
    nota: 'Muitos alunos de hoje têm intuições "aristotélicas" sobre o movimento.',
  },
  objecoes: [
    { objecao: 'A Idade Média não fez ciência, só repetiu Aristóteles.', tag: 'debate',
      resposta: 'Filopono, Buridan, Oresme e os calculadores de Merton criticaram e desenvolveram Aristóteles, criando conceitos e ferramentas usados depois. Historiadores divergem sobre o peso dessas contribuições, mas a imagem de mera repetição não se sustenta.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com os marcos de Aristóteles a Oresme, com data, autor e ideia central, e anote uma intuição aristotélica que você mesmo tinha sobre o movimento.</p>`,
  fonte: {
    obra: 'Aristóteles, Física, livro IV, caps. 8 (sobre o vazio e a velocidade); Santo Tomás, Comentário à Física', link: null,
    orientacao: `<p>Observe o argumento de Aristóteles contra o vazio e a relação entre velocidade, peso e meio.</p>`,
  },
  perguntas: [
    { p: 'O que é lugar natural para Aristóteles?', r: 'O lugar para onde cada elemento tende por natureza.' },
    { p: 'O que é o ímpeto de Buridan?', r: 'Uma qualidade impressa no projétil que o mantém em movimento.' },
    { p: 'O que diz a regra de Merton?', r: 'Que um corpo uniformemente acelerado percorre a mesma distância que outro com velocidade constante igual à média.' },
  ],
  exercicios: [
    mc('O céu, para Aristóteles, é feito de:', ['Terra', 'Fogo', 'Éter', 'Ar'], 2, 'Quinto elemento.'),
    mc('A teoria do ímpeto foi desenvolvida por:', ['Aristóteles', 'Buridan', 'Newton', 'Kepler'], 1, 'Século XIV.'),
    mc('Os diagramas geométricos de variações são de:', ['Oresme', 'Platão', 'Galileu', 'Euclides'], 0, 'Antecipação dos gráficos.'),
    mc('De 0 a 20 m/s em 10 s, uniformemente: distância de:', ['50 m', '100 m', '200 m', '20 m'], 1, 'Velocidade média.'),
    mc('Quem criticou no século VI a explicação aristotélica do projétil:', ['Filopono', 'Agostinho', 'Boécio', 'Tomás'], 0, 'Força impressa.'),
    disc('Inicie a linha do tempo de Aristóteles a Oresme e anote uma intuição aristotélica sua.', ['Marcos', 'Datas', 'Ideias', 'Intuição']),
  ],
  resumo: ['Aristóteles: lugares naturais, éter, motor.', 'Filopono (séc. VI).', 'Buridan: ímpeto (séc. XIV).', 'Merton e Oresme: velocidade média e gráficos.', 'Continuidade × ruptura.'],
  referencias: [
    { texto: 'Aristóteles, Física.', livro: 'aristoteles-fisica' },
    { texto: 'Santo Tomás de Aquino, Comentário à Física de Aristóteles.', livro: 'tomas-com-fisica' },
    { texto: 'Edward Grant, Os fundamentos da ciência moderna na Idade Média (1996).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Lugar natural', 'Aristóteles.'], ['Ímpeto', 'Buridan.'], ['Merton', 'Velocidade média.']],
  avancado: {
    texto: `<h3>As condenações de 1277</h3>
<p>Em 1277, o bispo de Paris, Étienne Tempier, condenou uma lista de teses, algumas das quais limitavam o poder de Deus pelo que Aristóteles julgava impossível, como a existência do vazio ou de outros mundos ${tag('fato')}. Duhem viu aí o nascimento da ciência moderna, por libertar a imaginação de hipóteses não aristotélicas; muitos historiadores consideram essa tese exagerada ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Edward Grant, Os fundamentos da ciência moderna na Idade Média (1996).' }],
    exercicios: [
      mc('As condenações de Paris são de:', ['1177', '1277', '1377', '1543'], 1, 'Tempier.'),
      mc('Duhem via nelas:', ['O fim da ciência', 'Um estímulo a hipóteses não aristotélicas', 'Nada de relevante', 'Uma lei física'], 1, 'Tese.'),
      mc('A tese de Duhem sobre 1277 é hoje:', ['Consenso', 'Considerada exagerada por muitos', 'Lei', 'Esquecida'], 1, 'Debate.'),
      disc('Discuta se uma condenação teológica pode estimular o pensamento científico.', ['Fato', 'Tese de Duhem', 'Críticas', 'Avaliação'])],
  },
}),

aula({
  id: 'fi2-2', titulo: 'A revolução científica e a física dos séculos XIX e XX', duracao: '150 min',
  aprendera: ['Situar Copérnico, Kepler, Galileu e Newton', 'Conhecer as grandes sínteses do século XIX', 'Situar o nascimento da relatividade e da mecânica quântica', 'Conhecer marcos brasileiros da física'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Em pouco mais de um século e meio, a imagem do cosmo mudou: a Terra deixou de ser o centro, e as mesmas leis passaram a valer no céu e na Terra. Depois, nos séculos XIX e XX, a física unificou fenômenos e descobriu limites de suas próprias teorias.</p>
<h3>A revolução científica</h3>
<p>Nicolau Copérnico publicou em 1543 Das revoluções das esferas celestes, propondo o Sol no centro; a obra foi dedicada ao papa Paulo III ${tag('fato')}. Johannes Kepler enunciou que as órbitas planetárias são elipses (1609) e relacionou períodos e distâncias (1619) ${tag('fato')}. Galileu, com o telescópio (1609–1610), observou luas de Júpiter e, depois, as fases de Vênus ${tag('fato')}. Isaac Newton, nos Principia (1687), formulou as leis do movimento e a gravitação universal ${tag('fato')}.</p>
<h3>Século XIX</h3>
<p>A termodinâmica estabeleceu a conservação da energia e a tendência ao aumento da entropia ${tag('fato')}. James Clerk Maxwell unificou eletricidade, magnetismo e luz em suas equações (anos 1860) ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>Max Planck introduziu o quantum de energia (1900); Albert Einstein publicou a relatividade restrita (1905) e a geral (1915) ${tag('fato')}. A mecânica quântica foi formulada entre 1925 e 1927 por Heisenberg, Schrödinger, Born e outros ${tag('fato')}. Georges Lemaître, padre belga, propôs em 1927 um universo em expansão e, em 1931, a hipótese do "átomo primordial", origem da teoria do Big Bang ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Em 1919, observações de um eclipse em Sobral (CE) ajudaram a confirmar a deflexão da luz prevista pela relatividade geral ${tag('fato')}. Em 1947, César Lattes participou da detecção do méson pi ${tag('fato')}. O CBPF foi fundado em 1949, com participação de Lattes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Heliocentrismo', 'Modelo com o Sol no centro do sistema planetário.'],
    ['Gravitação universal', 'Lei de Newton segundo a qual toda massa atrai toda massa.'],
    ['Entropia', 'Grandeza ligada à irreversibilidade dos processos.'],
    ['Quantum', 'Quantidade mínima de energia trocada em certos processos.'],
    ['Átomo primordial', 'Hipótese de Lemaître sobre a origem do universo em expansão.'],
  ],
  exemplos: `<p><strong>A maçã e a Lua:</strong> Newton perguntou se a força que faz a maçã cair é a mesma que mantém a Lua em órbita. Comparando a aceleração na superfície da Terra com a aceleração centrípeta da Lua, a cerca de 60 raios terrestres, encontrou uma razão próxima de 1/60² — compatível com uma força que diminui com o quadrado da distância.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "revolução científica" para os séculos XVI e XVII consagrou-se no século XX ${tag('fato')}. <strong>No Brasil:</strong> o Laboratório Nacional de Luz Síncrotron, em Campinas, opera o acelerador Sirius ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Newton unificou céu e Terra', tag: 'argumento',
    premissas: ['Para Aristóteles, céu e Terra seguiam leis diferentes.', 'Newton mostrou que a mesma lei explica a queda da maçã e a órbita da Lua.', 'Uma única lei para fenômenos antes separados é sinal de compreensão mais profunda.'],
    conclusao: 'Logo, a gravitação universal foi uma unificação decisiva na história da física.',
    nota: 'Maxwell fez algo semelhante com eletricidade, magnetismo e luz.',
  },
  objecoes: [
    { objecao: 'A revolução científica foi uma luta da ciência contra a religião.', tag: 'debate',
      resposta: 'Copérnico era cônego, Kepler luterano devoto, Newton profundamente religioso, Lemaître padre. Houve conflitos, como o caso Galileu, mas também apoio de instituições eclesiásticas. Historiadores da ciência rejeitam a narrativa de conflito permanente como simplificação.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com os marcos de Copérnico a Lemaître e os marcos brasileiros (Sobral, Lattes, CBPF), com data, autor e ideia central.</p>`,
  fonte: {
    obra: 'Nicolau Copérnico, Das revoluções das esferas celestes (1543), dedicatória ao papa Paulo III', link: null,
    orientacao: `<p>Observe os motivos que Copérnico apresenta para propor o novo sistema e como se dirige ao papa.</p>`,
  },
  perguntas: [
    { p: 'Que ideia Lemaître propôs em 1931?', r: 'A hipótese do átomo primordial, origem da teoria do Big Bang.' },
    { p: 'O que Maxwell unificou?', r: 'Eletricidade, magnetismo e luz.' },
    { p: 'O que se observou em Sobral em 1919?', r: 'Um eclipse que ajudou a confirmar a deflexão da luz prevista pela relatividade geral.' },
  ],
  exercicios: [
    mc('Das revoluções das esferas celestes é de:', ['1453', '1543', '1609', '1687'], 1, 'Copérnico.'),
    mc('Os Principia de Newton são de:', ['1610', '1687', '1789', '1905'], 1, 'Gravitação.'),
    mc('A relatividade restrita é de:', ['1900', '1905', '1915', '1927'], 1, 'Einstein.'),
    mc('Lemaître era:', ['Rabino', 'Padre católico', 'Pastor', 'Ateu militante'], 1, 'Belga.'),
    mc('César Lattes participou da detecção do:', ['Elétron', 'Méson pi', 'Nêutron', 'Fóton'], 1, '1947.'),
    disc('Complete a linha do tempo de Copérnico a Lemaître, com os marcos brasileiros.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  ],
  resumo: ['Copérnico (1543), Kepler (1609/1619), Galileu (1610), Newton (1687).', 'Termodinâmica; Maxwell.', 'Planck (1900), Einstein (1905/1915), quântica (1925–27).', 'Lemaître (1927/1931).', 'Brasil: Sobral 1919, Lattes 1947, CBPF 1949.'],
  referencias: [
    { texto: 'Nicolau Copérnico, Das revoluções das esferas celestes (1543).' },
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
    { texto: 'Stanley L. Jaki, The Road of Science and the Ways to God (1978).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1543', 'Copérnico.'], ['1687', 'Newton.'], ['1919', 'Sobral.']],
  avancado: {
    texto: `<h3>Ciência e cristianismo segundo Jaki</h3>
<p>Stanley Jaki, padre e físico, defendeu que a crença cristã num Criador racional e num mundo criado, contingente e inteligível favoreceu o nascimento da ciência na Europa ${tag('interpretacao')}. Críticos apontam outras condições históricas — universidades, comércio, imprensa — e contribuições de outras civilizações ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Stanley L. Jaki, The Road of Science and the Ways to God (1978).' }],
    exercicios: [
      mc('Jaki era:', ['Padre e físico', 'Rei', 'Matemático grego', 'Médico'], 0, 'Autor.'),
      mc('Jaki associa a ciência à crença num mundo:', ['Caótico', 'Criado, contingente e inteligível', 'Eterno e necessário', 'Ilusório'], 1, 'Tese.'),
      mc('Críticos apontam também condições como:', ['Universidades, comércio, imprensa', 'Nenhuma', 'Só o clima', 'Só a guerra'], 0, 'Debate.'),
      disc('Avalie a tese de Jaki sobre as raízes cristãs da ciência, com um argumento a favor e um contra.', ['Tese', 'A favor', 'Contra', 'Avaliação'])],
  },
}),

aula({
  id: 'fi2-3', titulo: 'Arquimedes, Galileu e Kepler: empuxo, queda e órbitas', duracao: '150 min',
  aprendera: ['Aplicar o princípio de Arquimedes', 'Explicar as contribuições de Galileu à mecânica', 'Enunciar as leis de Kepler', 'Usar a terceira lei de Kepler'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que um navio de aço flutua? Por que todos os corpos caem com a mesma aceleração no vácuo? Por que os planetas mais distantes demoram mais a girar?</p>
<h3>Arquimedes</h3>
<p>Arquimedes de Siracusa (século III a.C.) enunciou que um corpo imerso num fluido recebe um empuxo igual ao peso do fluido deslocado ${tag('fato')}. Um bloco de 1 litro totalmente imerso em água desloca 1 kg de água e recebe empuxo de cerca de 9,8 N ${tag('fato')}. Estudou também a alavanca e o equilíbrio ${tag('fato')}.</p>
<h3>Galileu</h3>
<p>Galileu estudou a queda com planos inclinados, que "diluem" a gravidade e permitem medir tempos, e concluiu que, sem resistência do ar, todos os corpos caem com a mesma aceleração ${tag('fato')}. Formulou uma forma do princípio de inércia e a relatividade do movimento: num navio em movimento uniforme, os fenômenos ocorrem como num navio parado ${tag('fato')}.</p>
<h3>Kepler</h3>
<p>Kepler, usando as observações de Tycho Brahe, enunciou três leis: as órbitas são elipses com o Sol num foco; a linha Sol–planeta varre áreas iguais em tempos iguais; o quadrado do período é proporcional ao cubo do semieixo maior ${tag('fato')}. Marte, a cerca de 1,52 unidade astronômica, tem período de cerca de 1,52<sup>1,5</sup> ≈ 1,88 ano ${tag('fato')}.</p>
<h3>Fé e ciência</h3>
<p>Kepler via na harmonia matemática do cosmo um reflexo da sabedoria do Criador ${tag('fato')}.</p>`,
  vocabulario: [
    ['Empuxo', 'Força para cima exercida por um fluido sobre um corpo imerso.'],
    ['Plano inclinado', 'Superfície inclinada usada por Galileu para estudar a queda.'],
    ['Inércia', 'Tendência de um corpo a manter seu estado de movimento.'],
    ['Elipse', 'Curva fechada com dois focos; forma das órbitas planetárias.'],
    ['Unidade astronômica', 'Distância média Terra–Sol, cerca de 150 milhões de km.'],
  ],
  exemplos: `<p><strong>Por que o navio flutua:</strong> o casco de aço é oco e desloca um grande volume de água. O empuxo, igual ao peso da água deslocada, iguala o peso do navio antes que ele afunde. Uma bola maciça de aço do mesmo peso, com volume muito menor, desloca pouca água e afunda.</p>`,
  contexto: `<p><strong>No mundo:</strong> a lenda do "Eureka!" de Arquimedes no banho é narrada por Vitrúvio, séculos depois ${tag('fato')}. <strong>No Brasil:</strong> a Olimpíada Brasileira de Astronomia e Astronáutica aborda as leis de Kepler ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que todos os corpos caem igual no vácuo', tag: 'argumento',
    premissas: ['Galileu imaginou um corpo pesado amarrado a um leve.', 'Se o pesado caísse mais rápido, o leve o frearia e o conjunto cairia mais devagar; mas o conjunto é mais pesado e deveria cair mais rápido.', 'Essa contradição mostra que a velocidade de queda não depende do peso.'],
    conclusao: 'Logo, sem resistência do ar, todos os corpos caem com a mesma aceleração.',
    nota: 'É um experimento de pensamento, em Duas novas ciências; a confirmação experimental veio depois.',
  },
  objecoes: [
    { objecao: 'Galileu provou tudo soltando bolas da torre de Pisa.', tag: 'debate',
      resposta: 'O episódio da torre é narrado por um biógrafo e sua realização é duvidosa entre historiadores. Os resultados de Galileu vieram sobretudo de planos inclinados e de raciocínios como o experimento de pensamento dos corpos amarrados.' },
  ],
  aplicacao: `<p>Calcule o empuxo sobre um objeto de casa imerso em água (medindo o volume deslocado num recipiente graduado) e, com a terceira lei de Kepler, estime o período de Júpiter (cerca de 5,2 UA).</p>`,
  fonte: {
    obra: 'Galileu Galilei, Duas novas ciências (1638), Primeira Jornada (corpos de pesos diferentes)', link: null,
    orientacao: `<p>Reconstrua o experimento de pensamento dos dois corpos amarrados e avalie sua força lógica.</p>`,
  },
  perguntas: [
    { p: 'O que diz o princípio de Arquimedes?', r: 'Que um corpo imerso recebe empuxo igual ao peso do fluido deslocado.' },
    { p: 'Quais são as três leis de Kepler?', r: 'Órbitas elípticas; áreas iguais em tempos iguais; T² proporcional a a³.' },
    { p: 'Qual o período aproximado de Marte?', r: 'Cerca de 1,88 ano.' },
  ],
  exercicios: [
    mc('Bloco de 2 litros imerso em água: empuxo de cerca de:', ['9,8 N', '19,6 N', '2 N', '98 N'], 1, '2 kg de água.'),
    mc('As órbitas planetárias são:', ['Círculos perfeitos', 'Elipses', 'Retas', 'Parábolas'], 1, 'Primeira lei.'),
    mc('Pela terceira lei, T² é proporcional a:', ['a', 'a²', 'a³', '√a'], 2, 'Kepler.'),
    mc('Galileu estudou a queda principalmente com:', ['Torre de Pisa', 'Planos inclinados', 'Pêndulos apenas', 'Telescópios'], 1, 'Medidas.'),
    mc('As observações usadas por Kepler eram de:', ['Galileu', 'Tycho Brahe', 'Ptolomeu', 'Newton'], 1, 'Dados.'),
    disc('Calcule o empuxo sobre um objeto de casa e estime o período de Júpiter.', ['Empuxo', 'Medidas', 'Kepler', 'Resultado']),
  ],
  resumo: ['Arquimedes: empuxo = peso do fluido deslocado.', 'Galileu: planos inclinados, queda igual, inércia, relatividade.', 'Kepler: elipses, áreas, T² ∝ a³.', 'Experimento de pensamento.', 'Harmonia do cosmo.'],
  referencias: [
    { texto: 'Galileu Galilei, Duas novas ciências (1638).' },
    { texto: 'Johannes Kepler, Astronomia nova (1609).' },
    { texto: 'Arquimedes, Sobre os corpos flutuantes.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos', 'Ler a fonte indicada'],
  revisao: [['Empuxo', 'Peso deslocado.'], ['T² ∝ a³', 'Kepler.'], ['Queda', 'Igual no vácuo.']],
  avancado: {
    texto: `<h3>A pena e o martelo na Lua</h3>
<p>Em 1971, na missão Apollo 15, o astronauta David Scott soltou ao mesmo tempo um martelo e uma pena na superfície da Lua, sem ar; os dois chegaram juntos ao solo ${tag('fato')}. A cena confirmou de modo visual a conclusão de Galileu ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Galileu Galilei, Duas novas ciências (1638).' }],
    exercicios: [
      mc('O experimento da pena e do martelo ocorreu na:', ['Terra', 'Lua', 'Marte', 'Estação espacial'], 1, 'Apollo 15.'),
      mc('Os dois caíram juntos porque na Lua:', ['Não há gravidade', 'Não há ar', 'A pena é pesada', 'O martelo é leve'], 1, 'Sem resistência.'),
      mc('A missão foi em:', ['1969', '1971', '1986', '2000'], 1, 'Apollo 15.'),
      disc('Proponha um experimento caseiro que mostre o efeito da resistência do ar na queda.', ['Montagem', 'Previsão', 'Resultado', 'Explicação'])],
  },
}),

aula({
  id: 'fi2-4', titulo: 'Newton, Pascal, Maxwell, Einstein, Planck e Lemaître', duracao: '150 min',
  aprendera: ['Enunciar as leis de Newton e a gravitação universal', 'Explicar o experimento de Pascal sobre a pressão atmosférica', 'Explicar a unificação de Maxwell', 'Situar Einstein, Planck e Lemaître'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que ideias dos grandes físicos modernos ainda estruturam a física, e como eles pensavam a relação entre ciência e fé?</p>
<h3>Newton</h3>
<p>Nos Principia, Newton enunciou três leis: a inércia; a força igual à massa vezes a aceleração; e a ação e reação ${tag('fato')}. A gravitação universal diz que dois corpos se atraem com força proporcional ao produto das massas e inversamente proporcional ao quadrado da distância ${tag('fato')}. No Escólio geral, Newton atribui a ordem do sistema do mundo a um Ser inteligente e poderoso ${tag('fato')}.</p>
<h3>Pascal</h3>
<p>Em 1648, por iniciativa de Blaise Pascal, seu cunhado Florin Périer mediu a altura do mercúrio num barômetro ao pé e no alto do Puy-de-Dôme e encontrou valor menor no alto, mostrando que a pressão atmosférica diminui com a altitude ${tag('fato')}. Pascal também formulou o princípio de que a pressão aplicada a um fluido em repouso se transmite igualmente a todas as partes ${tag('fato')}.</p>
<h3>Maxwell</h3>
<p>Maxwell mostrou que campos elétricos e magnéticos variáveis se propagam como ondas com a velocidade da luz, concluindo que a luz é uma onda eletromagnética ${tag('fato')}.</p>
<h3>Planck, Einstein e Lemaître</h3>
<p>Planck propôs em 1900 que a energia da radiação é trocada em quanta, E = h·f ${tag('fato')}. Einstein explicou o efeito fotoelétrico com quanta de luz (1905), formulou a relatividade restrita, com E = mc², e a geral, em que a gravidade é curvatura do espaço-tempo ${tag('fato')}. Lemaître uniu relatividade e observações para propor o universo em expansão, e insistiu em distinguir a hipótese científica do início do universo da doutrina teológica da criação ${tag('fato')}.</p>`,
  vocabulario: [
    ['Segunda lei de Newton', 'Força resultante = massa × aceleração (F = m·a).'],
    ['Gravitação universal', 'F = G·m₁·m₂ ÷ r².'],
    ['Pressão atmosférica', 'Pressão exercida pelo ar, que diminui com a altitude.'],
    ['Onda eletromagnética', 'Propagação de campos elétricos e magnéticos; a luz é uma delas.'],
    ['Constante de Planck', 'Constante h que relaciona energia e frequência: E = h·f.'],
  ],
  exemplos: `<p><strong>F = m·a:</strong> para acelerar um carro de 1.000 kg a 2 m/s², é preciso uma força resultante de 2.000 N. Se a força dobra, a aceleração dobra; se a massa dobra com a mesma força, a aceleração cai à metade. A lei vale para a pedra, o carro e a Lua.</p>`,
  contexto: `<p><strong>No mundo:</strong> a unidade de pressão do SI chama-se pascal, em homenagem a Pascal ${tag('fato')}. <strong>No Brasil:</strong> Einstein visitou o Rio de Janeiro em 1925 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a hipótese do início do universo não é a doutrina da criação', tag: 'argumento',
    premissas: ['A física descreve estados do universo e sua evolução a partir de dados.', 'A doutrina da criação afirma que tudo depende de Deus para existir, em qualquer tempo.', 'Mesmo um universo sem início temporal dependeria de Deus para existir, como notou Tomás de Aquino.'],
    conclusao: 'Logo, a cosmologia do Big Bang não prova nem refuta a criação, embora possa ser compatível com ela.',
    nota: 'Lemaître pediu a Pio XII prudência ao usar a teoria em discursos (1951–1952).',
  },
  objecoes: [
    { objecao: 'Newton e Einstein eram ateus, prova de que a ciência leva ao ateísmo.', tag: 'argumento',
      resposta: 'Newton era profundamente religioso, ainda que heterodoxo; Einstein rejeitava um Deus pessoal, mas não se dizia ateu e falava de uma religiosidade cósmica. As crenças de grandes cientistas são variadas e não determinam a relação lógica entre ciência e fé.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura da Primeira Jornada de Duas novas ciências, de Galileu, ou de um trecho dos Principia (por exemplo, as leis do movimento e o Escólio geral), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687), leis do movimento e Escólio geral', link: null,
    orientacao: `<p>Observe como Newton enuncia as leis e o que afirma sobre a causa da gravidade e sobre Deus no Escólio geral.</p>`,
  },
  perguntas: [
    { p: 'Qual a segunda lei de Newton?', r: 'A força resultante é igual à massa vezes a aceleração.' },
    { p: 'O que mostrou o experimento do Puy-de-Dôme?', r: 'Que a pressão atmosférica diminui com a altitude.' },
    { p: 'O que Maxwell concluiu sobre a luz?', r: 'Que é uma onda eletromagnética.' },
  ],
  exercicios: [
    mc('Força para acelerar 1.000 kg a 2 m/s²:', ['500 N', '1.000 N', '2.000 N', '2 N'], 2, 'F = m·a.'),
    mc('Se a distância entre dois corpos dobra, a força gravitacional:', ['Dobra', 'Cai à metade', 'Cai a um quarto', 'Não muda'], 2, 'Inverso do quadrado.'),
    mc('O experimento do Puy-de-Dôme é de:', ['1638', '1648', '1687', '1900'], 1, 'Périer.'),
    mc('E = h·f é relação de:', ['Newton', 'Planck', 'Maxwell', 'Pascal'], 1, 'Quantum.'),
    mc('A gravidade como curvatura do espaço-tempo é da:', ['Mecânica newtoniana', 'Relatividade geral', 'Termodinâmica', 'Óptica'], 1, 'Einstein, 1915.'),
    disc('Faça a ficha de leitura de Galileu (Duas novas ciências) ou de Newton (Principia).', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Newton: três leis e gravitação.', 'Pascal: pressão atmosférica (1648).', 'Maxwell: luz eletromagnética.', 'Planck (1900), Einstein (1905/1915).', 'Lemaître: expansão e distinção da teologia.'],
  referencias: [
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
    { texto: 'Blaise Pascal, Tratados sobre o vácuo e o equilíbrio dos líquidos.', livro: 'pascal-vacuo' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I, q. 46 (sobre o início do mundo).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['F = m·a', 'Newton.'], ['1648', 'Pascal.'], ['E = h·f', 'Planck.']],
  avancado: {
    texto: `<h3>Tomás e a eternidade do mundo</h3>
<p>Santo Tomás sustentou que a razão filosófica não pode demonstrar que o mundo teve um início no tempo nem que não teve; o início temporal é conhecido pela fé (Suma Teológica I, q. 46) ${tag('doutrina')}. Para ele, a dependência do mundo em relação a Deus não depende de um início temporal ${tag('interpretacao')}. Essa distinção ajuda a ler a cosmologia moderna sem confundir planos ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Sobre a eternidade do mundo.', livro: 'tomas-eternidade' }],
    exercicios: [
      mc('Para Tomás, o início temporal do mundo é conhecido pela:', ['Física', 'Fé', 'Matemática', 'Experiência sensível'], 1, 'q. 46.'),
      mc('A dependência do mundo em relação a Deus depende de um início temporal?', ['Sim', 'Não', 'Só na física', 'Só na Bíblia'], 1, 'Distinção.'),
      mc('A questão está na Suma Teológica I, q.:', ['2', '46', '90', '120'], 1, 'Criação.'),
      disc('Explique por que a cosmologia do Big Bang não substitui a doutrina da criação.', ['Cosmologia', 'Criação', 'Distinção', 'Tomás'])],
  },
}),

avaliacao('fi2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da física e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de empuxo, Kepler e F = m·a.</li><li>Releia sua linha do tempo e sua ficha de leitura.</li></ul>`,
[
  disc('Trace a passagem da física de Aristóteles à de Newton, com cinco marcos datados e o que cada um mudou na compreensão do movimento.', ['Marcos', 'Datas', 'Mudanças conceituais', 'Continuidades']),
  disc('Mostre como três físicos estudados (por exemplo, Kepler, Newton e Lemaître) relacionaram seu trabalho científico com a fé, distinguindo o que é física e o que é interpretação filosófica ou teológica.', ['Autores', 'Relação com a fé', 'Distinções', 'Fontes']),
]),
];
