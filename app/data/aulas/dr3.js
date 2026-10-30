// Direito III — escolas e debates (etapas 6 e 7 do percurso de Direito).
// Jusnaturalismo e positivismo (Kelsen, Hart); realismo, sociologia jurídica e pós-positivismo (Dworkin, Alexy);
// lei injusta e objeção de consciência; ativismo judicial e fundamento dos direitos humanos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dr3-1', titulo: 'Jusnaturalismo e positivismo jurídico: Kelsen e Hart', duracao: '150 min',
  aprendera: ['Expor a tese central do jusnaturalismo clássico', 'Explicar a teoria pura do direito de Kelsen', 'Explicar regras primárias, secundárias e regra de reconhecimento em Hart', 'Comparar as duas escolas diante da lei injusta'],
  prereq: ['Direito II (módulo DR2)'],
  explicacao: `
<h3>O problema</h3>
<p>O que faz uma norma ser direito: ser justa ou ter sido criada pelo procedimento correto?</p>
<h3>Jusnaturalismo clássico</h3>
<p>Para a tradição de Aristóteles, Cícero e Tomás, o direito positivo deve concretizar a justiça natural; uma lei gravemente injusta é defeituosa como lei ${tag('fato')}.</p>
<h3>Kelsen</h3>
<p>Hans Kelsen, na <em>Teoria pura do direito</em> (1934; 2ª ed. 1960), quis estudar o direito sem misturá-lo com moral, política ou sociologia ${tag('fato')}. Cada norma vale porque foi criada conforme uma norma superior; no topo, supõe-se uma "norma fundamental" que dá validade à constituição ${tag('fato')}. Para Kelsen, qualquer conteúdo pode ser direito, desde que posto validamente ${tag('fato')}.</p>
<h3>Hart</h3>
<p>H. L. A. Hart, em <em>O conceito de direito</em> (1961), descreveu o direito como união de regras primárias (que impõem deveres) e secundárias (que dizem como criar, mudar e aplicar regras), e destacou a "regra de reconhecimento", que identifica o que conta como direito num sistema ${tag('fato')}. Admitiu um "conteúdo mínimo de direito natural" ligado à sobrevivência humana ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Os positivistas separam a pergunta "isto é direito?" da pergunta "isto é justo?"; os jusnaturalistas consideram que as duas estão ligadas ${tag('interpretacao')}. Ambos admitem que leis injustas existem; divergem sobre o que isso implica ${tag('debate')}.</p>`,
  vocabulario: [
    ['Jusnaturalismo', 'Escola que liga a validade do direito à justiça natural.'],
    ['Positivismo jurídico', 'Escola que separa a validade do direito de sua justiça.'],
    ['Norma fundamental', 'Em Kelsen, norma pressuposta que dá validade à constituição.'],
    ['Regra de reconhecimento', 'Em Hart, critério que identifica o direito num sistema.'],
    ['Conteúdo mínimo de direito natural', 'Em Hart, regras exigidas pela sobrevivência humana.'],
  ],
  exemplos: `<p><strong>Uma lei de segregação racial:</strong> para um positivista estrito, se foi aprovada pelo procedimento previsto, é direito válido, ainda que injusto; deve ser criticada e revogada. Para um jusnaturalista, sua injustiça grave a torna defeituosa como lei e afeta o dever de obedecê-la. Os dois condenam a lei; divergem sobre o seu estatuto jurídico.</p>`,
  contexto: `<p><strong>No mundo:</strong> Kelsen foi um dos autores da Constituição austríaca de 1920, que criou um tribunal constitucional ${tag('fato')}. <strong>No Brasil:</strong> a teoria de Kelsen influenciou fortemente o ensino jurídico brasileiro no século XX ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a separação positivista entre direito e moral tem limites', tag: 'argumento',
    premissas: ['O positivismo quer descrever o direito sem avaliar sua justiça.', 'Mas os próprios sistemas jurídicos incorporam princípios morais, como a dignidade da pessoa (CF, art. 1º, III).', 'Aplicar esses princípios exige raciocínio moral.'],
    conclusao: 'Logo, nos sistemas atuais, a separação estrita entre direito e moral é difícil de manter.',
    nota: 'Positivistas "inclusivos" admitem que o direito pode incorporar critérios morais; o debate continua.',
  },
  objecoes: [
    { objecao: 'O positivismo foi culpado pelo nazismo, porque ensinou a obedecer qualquer lei.', tag: 'debate',
      resposta: 'A acusação foi feita depois da guerra, por Radbruch entre outros, mas é discutida: os positivistas, como Hart, sempre afirmaram que uma lei válida pode ser moralmente inaceitável e que não se deve obedecê-la por isso. O regime nazista também invocou ideias que não eram positivistas. A questão é complexa e merece análise histórica.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um quadro comparativo das escolas (jusnaturalismo, positivismo de Kelsen e Hart, realismo, pós-positivismo), indicando como cada uma define o direito e responde à lei injusta.</p>`,
  fonte: {
    obra: 'Hans Kelsen, Teoria pura do direito (1960), cap. 5; H. L. A. Hart, O conceito de direito (1961), caps. 5–6 e 9', link: null,
    orientacao: `<p>Em Kelsen, a estrutura escalonada e a norma fundamental. Em Hart, regras primárias e secundárias, a regra de reconhecimento e o conteúdo mínimo de direito natural.</p>`,
  },
  perguntas: [
    { p: 'O que é a norma fundamental em Kelsen?', r: 'Norma pressuposta que dá validade à constituição.' },
    { p: 'O que é a regra de reconhecimento em Hart?', r: 'O critério que identifica o que conta como direito num sistema.' },
    { p: 'Qual a diferença central entre positivismo e jusnaturalismo?', r: 'O positivismo separa validade e justiça; o jusnaturalismo as liga.' },
  ],
  exercicios: [
    mc('A Teoria pura do direito é de:', ['Hart', 'Kelsen', 'Dworkin', 'Alexy'], 1, '1934.'),
    mc('O conceito de direito é de:', ['Hart', 'Kelsen', 'Holmes', 'Radbruch'], 0, '1961.'),
    mc('Regras que dizem como criar e mudar regras são, em Hart:', ['Primárias', 'Secundárias', 'Morais', 'Costumeiras'], 1, 'União de regras.'),
    mc('Kelsen participou da Constituição de:', ['Weimar', 'Áustria (1920)', 'EUA', 'Brasil'], 1, 'Tribunal constitucional.'),
    mc('A dignidade da pessoa como fundamento está na CF, art.:', ['1º, III', '5º, III', '60', '226'], 0, 'Princípio.'),
    disc('Apresente o quadro comparativo das escolas com a definição de direito e a resposta à lei injusta.', ['Escolas', 'Definição', 'Lei injusta', 'Autores']),
  ],
  resumo: ['Jusnaturalismo clássico.', 'Kelsen: validade escalonada; norma fundamental.', 'Hart: regras primárias e secundárias; reconhecimento.', 'Conteúdo mínimo de direito natural.', 'Limites da separação direito/moral.'],
  referencias: [
    { texto: 'Hans Kelsen, Teoria pura do direito (1934; 1960).' },
    { texto: 'H. L. A. Hart, O conceito de direito (1961).' },
    { texto: 'John Finnis, Lei natural e direitos naturais (1980).', livro: 'finnis-lei-natural' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os textos indicados'],
  revisao: [['Kelsen', 'Norma fundamental.'], ['Hart', 'Regra de reconhecimento.'], ['Finnis', 'Lei natural.']],
  avancado: {
    texto: `<h3>O debate Hart–Fuller</h3>
<p>Em 1958, Hart e Lon Fuller debateram na <em>Harvard Law Review</em> a separação entre direito e moral, a partir de casos do pós-guerra alemão ${tag('fato')}. Fuller sustentou que o direito tem uma "moralidade interna" — leis gerais, públicas, não retroativas, claras, coerentes, possíveis de cumprir, estáveis e aplicadas conforme anunciadas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lon Fuller, The Morality of Law (1964).' }],
    exercicios: [
      mc('O debate Hart–Fuller ocorreu em:', ['1934', '1958', '1977', '1985'], 1, 'Harvard Law Review.'),
      mc('Fuller falou de uma moralidade:', ['Externa', 'Interna do direito', 'Religiosa apenas', 'Nenhuma'], 1, 'Requisitos formais.'),
      mc('Um requisito de Fuller é que as leis sejam:', ['Secretas', 'Públicas', 'Retroativas', 'Contraditórias'], 1, 'Moralidade interna.'),
      disc('Explique a moralidade interna do direito de Fuller e avalie se ela basta para garantir leis justas.', ['Requisitos', 'Exemplos', 'Limites', 'Conclusão'])],
  },
}),

aula({
  id: 'dr3-2', titulo: 'Realismo, sociologia do direito e pós-positivismo: Holmes, Dworkin e Alexy', duracao: '150 min',
  aprendera: ['Explicar o realismo jurídico de Holmes', 'Conhecer a sociologia do direito', 'Explicar a distinção entre regras e princípios em Dworkin', 'Explicar a ponderação de Alexy e seus riscos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O direito é o que está nas leis, o que os juízes fazem ou um conjunto de princípios que exige interpretação moral?</p>
<h3>Realismo</h3>
<p>Oliver Wendell Holmes Jr., em "The Path of the Law" (1897), escreveu que o direito são as profecias do que os tribunais farão de fato ${tag('fato')}. O realismo jurídico enfatizou os fatores psicológicos, sociais e econômicos das decisões ${tag('fato')}.</p>
<h3>Sociologia do direito</h3>
<p>Eugen Ehrlich (1913) falou do "direito vivo", as regras efetivamente seguidas na sociedade, que podem diferir das leis escritas ${tag('fato')}.</p>
<h3>Dworkin</h3>
<p>Ronald Dworkin, em <em>Levando os direitos a sério</em> (1977), criticou Hart: além das regras, o direito contém princípios, que têm peso e orientam decisões em casos difíceis ${tag('fato')}. Usou o caso <em>Riggs v. Palmer</em> (Nova York, 1889), em que o tribunal negou a herança a um neto que matara o avô, com base no princípio de que ninguém pode se beneficiar do próprio crime ${tag('fato')}.</p>
<h3>Alexy</h3>
<p>Robert Alexy, na <em>Teoria dos direitos fundamentais</em> (1985), tratou os princípios como mandados de otimização e propôs a ponderação, com a regra da proporcionalidade, para resolver colisões entre eles ${tag('fato')}. No Brasil, a ponderação é muito usada pelos tribunais; críticos apontam o risco de decisões imprevisíveis e subjetivas ${tag('debate')}.</p>`,
  vocabulario: [
    ['Realismo jurídico', 'Escola que define o direito pelo que os tribunais efetivamente fazem.'],
    ['Direito vivo', 'Regras efetivamente seguidas na sociedade (Ehrlich).'],
    ['Princípio (Dworkin)', 'Padrão com peso, que orienta sem determinar mecanicamente.'],
    ['Ponderação', 'Sopesamento de princípios em colisão (Alexy).'],
    ['Proporcionalidade', 'Exame de adequação, necessidade e proporcionalidade em sentido estrito.'],
  ],
  exemplos: `<p><strong>Regra e princípio:</strong> "a velocidade máxima é 80 km/h" é regra: ou se cumpre ou não. "Ninguém pode se beneficiar do próprio crime" é princípio: tem peso e precisa ser equilibrado com outros. Em <em>Riggs v. Palmer</em>, a regra do testamento mandava dar a herança ao neto; o princípio levou o tribunal a negá-la.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Tribunal Constitucional alemão desenvolveu o exame de proporcionalidade, depois difundido em muitos países ${tag('fato')}. <strong>No Brasil:</strong> o STF usa com frequência a ponderação de princípios em casos de direitos fundamentais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ponderação precisa de critérios para não virar arbítrio', tag: 'argumento',
    premissas: ['A ponderação dá ao juiz margem para pesar princípios em cada caso.', 'Sem critérios explícitos, a decisão pode refletir só as preferências do julgador.', 'Critérios como a proporcionalidade e a coerência com precedentes limitam essa margem.'],
    conclusao: 'Logo, a ponderação só é legítima se seguir critérios explícitos e controláveis.',
    nota: 'Críticos brasileiros, como Lenio Streck, insistem nesse risco de discricionariedade.',
  },
  objecoes: [
    { objecao: 'Se o direito é o que os juízes decidem, não há direito certo.', tag: 'debate',
      resposta: 'O realismo mostrou fatores reais das decisões, mas, levado ao extremo, não distingue decisão certa de errada nem explica por que os juízes buscam fundamentar. Dworkin respondeu que há respostas melhores e piores, segundo a coerência com os princípios do sistema. A crítica ao formalismo não precisa levar ao ceticismo.' },
  ],
  aplicacao: `<p>Escolha uma decisão do STF que pondere princípios e analise: princípios em colisão, exame de proporcionalidade e se a decisão é coerente com precedentes.</p>`,
  fonte: {
    obra: 'Oliver Wendell Holmes Jr., "The Path of the Law" (1897); Ronald Dworkin, Levando os direitos a sério (1977), cap. 2; Robert Alexy, Teoria dos direitos fundamentais (1985), cap. 3', link: { url: 'https://portal.stf.jus.br', rotulo: 'Supremo Tribunal Federal' },
    orientacao: `<p>Em Holmes, a definição do direito como profecia. Em Dworkin, a distinção entre regras e princípios e o caso Riggs. Em Alexy, a lei da ponderação.</p>`,
  },
  perguntas: [
    { p: 'Como Holmes definiu o direito?', r: 'Como as profecias do que os tribunais farão de fato.' },
    { p: 'O que decidiu o caso Riggs v. Palmer?', r: 'Negou a herança ao neto que matou o avô, pelo princípio de que ninguém se beneficia do próprio crime.' },
    { p: 'O que são princípios para Alexy?', r: 'Mandados de otimização, sujeitos à ponderação.' },
  ],
  exercicios: [
    mc('"The Path of the Law" é de:', ['Holmes', 'Dworkin', 'Hart', 'Ehrlich'], 0, '1897.'),
    mc('O "direito vivo" é conceito de:', ['Ehrlich', 'Kelsen', 'Alexy', 'Fuller'], 0, '1913.'),
    mc('Levando os direitos a sério é de:', ['Dworkin', 'Rawls', 'Hart', 'Holmes'], 0, '1977.'),
    mc('A Teoria dos direitos fundamentais é de:', ['Alexy', 'Habermas', 'Kelsen', 'Radbruch'], 0, '1985.'),
    mc('Um risco apontado na ponderação é:', ['Excesso de previsibilidade', 'Subjetividade e imprevisibilidade', 'Falta de princípios', 'Nenhum'], 1, 'Debate.'),
    disc('Analise uma decisão do STF que pondere princípios, com o exame de proporcionalidade.', ['Decisão', 'Princípios', 'Proporcionalidade', 'Coerência']),
  ],
  resumo: ['Holmes: profecias dos tribunais.', 'Ehrlich: direito vivo.', 'Dworkin: princípios; Riggs v. Palmer.', 'Alexy: ponderação e proporcionalidade.', 'Riscos de discricionariedade.'],
  referencias: [
    { texto: 'Oliver Wendell Holmes Jr., "The Path of the Law" (1897).' },
    { texto: 'Ronald Dworkin, Levando os direitos a sério (1977).' },
    { texto: 'Robert Alexy, Teoria dos direitos fundamentais (1985).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da decisão', 'Ler os textos indicados'],
  revisao: [['Holmes', 'Profecias.'], ['Dworkin', 'Princípios.'], ['Alexy', 'Ponderação.']],
  avancado: {
    texto: `<h3>O juiz Hércules</h3>
<p>Dworkin imaginou um juiz ideal, "Hércules", capaz de encontrar a melhor interpretação do direito como integridade, articulando todos os princípios e precedentes do sistema numa teoria coerente ${tag('fato')}. A figura é um ideal regulador, e críticos lembram que juízes reais têm limites de tempo e de conhecimento ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ronald Dworkin, O império do direito (1986).' }],
    exercicios: [
      mc('O juiz Hércules é figura de:', ['Dworkin', 'Hart', 'Kelsen', 'Holmes'], 0, 'Integridade.'),
      mc('O direito como integridade busca:', ['Arbítrio', 'Coerência de princípios e precedentes', 'Só a letra da lei', 'Só a vontade do legislador'], 1, 'Teoria.'),
      mc('Hércules é:', ['Juiz real', 'Ideal regulador', 'Personagem mitológico apenas', 'Advogado'], 1, 'Ideal.'),
      disc('Avalie se o ideal de integridade de Dworkin ajuda a julgar decisões dos tribunais brasileiros.', ['Ideal', 'Aplicação', 'Limites', 'Conclusão'])],
  },
}),

aula({
  id: 'dr3-3', titulo: 'Lei injusta e objeção de consciência', duracao: '150 min',
  aprendera: ['Expor o ensino de Tomás sobre a obrigação das leis injustas', 'Conhecer a objeção de consciência no Catecismo e na Constituição', 'Analisar casos históricos de desobediência à lei injusta', 'Distinguir objeção de consciência, desobediência civil e resistência'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Uma lei injusta obriga? E o que pode fazer quem é obrigado por lei a algo contrário à consciência?</p>
<h3>Tomás</h3>
<p>Tomás ensina que leis injustas, por contrariarem o bem humano, não obrigam em consciência, salvo talvez para evitar escândalo ou desordem; e as que contrariam o bem divino nunca devem ser cumpridas (I-II, q. 96, a. 4) ${tag('doutrina')}.</p>
<h3>Casos</h3>
<p>Na tragédia de Sófocles, Antígona desobedece ao decreto de Creonte em nome das "leis não escritas" dos deuses ${tag('fato')}. Martin Luther King Jr., na <em>Carta da prisão de Birmingham</em> (1963), citou Agostinho — uma lei injusta não é lei — e Tomás para justificar a desobediência às leis de segregação ${tag('fato')}.</p>
<h3>Objeção de consciência</h3>
<p>O Catecismo ensina que o cidadão está obrigado em consciência a não seguir as prescrições das autoridades civis contrárias às exigências da ordem moral, aos direitos fundamentais ou aos ensinamentos do Evangelho (CIC 2242) ${tag('doutrina')}. A <em>Evangelium vitae</em> (n. 73) afirma que leis que autorizam o aborto ou a eutanásia não obrigam e que há grave obrigação de se opor a elas mediante objeção de consciência ${tag('doutrina')}. A Constituição de 1988 assegura que ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa (art. 5º, VIII) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Lei injusta', 'Norma contrária ao bem comum, à justiça ou à lei divina.'],
    ['Objeção de consciência', 'Recusa individual de cumprir norma por motivo de consciência.'],
    ['Desobediência civil', 'Descumprimento público de lei para provocar sua mudança.'],
    ['Escusa de consciência', 'Previsão constitucional de recusa com prestação alternativa.'],
    ['Leis não escritas', 'Em Antígona, leis divinas superiores ao decreto humano.'],
  ],
  exemplos: `<p><strong>Três atitudes:</strong> um médico se recusa individualmente a participar de um procedimento que considera homicídio (objeção de consciência); manifestantes descumprem publicamente uma lei de segregação, aceitando a pena, para mostrar sua injustiça (desobediência civil); um povo se levanta contra uma tirania grave e prolongada (resistência, sujeita às condições do CIC 2243). São formas diferentes, com justificações diferentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a objeção de consciência ao serviço militar é reconhecida em muitos países ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 8.239/1991 regulamenta a prestação de serviço alternativo ao serviço militar obrigatório ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lei injusta não obriga em consciência', tag: 'argumento',
    premissas: ['A obrigação moral de obedecer à lei vem de sua ordenação ao bem comum.', 'Uma lei que contraria gravemente o bem comum ou a lei divina perde esse fundamento.', 'Sem fundamento, falta-lhe a força de obrigar em consciência.'],
    conclusao: 'Logo, a lei gravemente injusta não obriga em consciência, embora a prudência possa aconselhar evitar desordens.',
    nota: 'O juízo exige formação da consciência e cuidado para não confundir discordância com injustiça grave.',
  },
  objecoes: [
    { objecao: 'Se cada um pode desobedecer à lei que julga injusta, a ordem jurídica acaba.', tag: 'debate',
      resposta: 'O ensino tradicional exige injustiça grave, consciência bem formada e prudência para evitar males maiores; não autoriza desobedecer por mera discordância. A objeção de consciência é individual e frequentemente prevista em lei, com prestação alternativa. Uma ordem jurídica que respeita a consciência é mais estável, não menos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio respondendo "uma lei injusta obriga?", com Tomás, um autor positivista e a doutrina da Igreja, e um caso concreto.</p>`,
  fonte: {
    obra: 'Santo Tomás, Suma Teológica I-II, q. 96, a. 4; Martin Luther King Jr., Carta da prisão de Birmingham (1963); Catecismo, § 2242; Evangelium vitae (1995), n. 73', link: null,
    orientacao: `<p>Em Tomás, os dois tipos de lei injusta. Em King, o uso de Agostinho e Tomás. No Catecismo e na Evangelium vitae, o dever de objeção.</p>`,
  },
  perguntas: [
    { p: 'O que diz Tomás sobre as leis contrárias ao bem divino?', r: 'Que nunca devem ser cumpridas.' },
    { p: 'Quem citou "uma lei injusta não é lei" na Carta de Birmingham?', r: 'Martin Luther King Jr., citando Agostinho.' },
    { p: 'O que garante o art. 5º, VIII, da Constituição?', r: 'Que ninguém é privado de direitos por convicção, salvo se recusar obrigação legal geral e prestação alternativa.' },
  ],
  exercicios: [
    mc('A obrigação das leis injustas é tratada por Tomás em:', ['I, q. 2', 'I-II, q. 96, a. 4', 'II-II, q. 1', 'III, q. 60'], 1, 'Tratado da lei.'),
    mc('A Carta da prisão de Birmingham é de:', ['1945', '1963', '1968', '1989'], 1, 'Martin Luther King.'),
    mc('O dever de não seguir prescrições contrárias à ordem moral está no CIC:', ['2242', '1883', '2372', '159'], 0, 'Objeção.'),
    mc('O serviço alternativo ao militar é regulado pela Lei:', ['8.239/1991', '9.099/1995', '8.906/1994', '13.140/2015'], 0, 'Objeção de consciência.'),
    mc('Descumprir publicamente uma lei, aceitando a pena, para mudá-la é:', ['Objeção de consciência', 'Desobediência civil', 'Crime organizado', 'Mediação'], 1, 'Distinção.'),
    disc('Escreva o ensaio "uma lei injusta obriga?", com Tomás, um positivista, a doutrina e um caso.', ['Tomás', 'Positivista', 'Doutrina', 'Caso concreto']),
  ],
  resumo: ['Tomás I-II q. 96 a. 4.', 'Antígona; King (1963).', 'CIC 2242; EV 73.', 'CF art. 5º, VIII; Lei 8.239/1991.', 'Objeção, desobediência, resistência.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica I-II, q. 96.' },
    { texto: 'Martin Luther King Jr., Carta da prisão de Birmingham (1963).' },
    { texto: 'São João Paulo II, Evangelium vitae (1995), n. 73.', livro: 'jp2-evangelium' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler os textos indicados'],
  revisao: [['q. 96 a. 4', 'Lei injusta.'], ['CIC 2242', 'Objeção.'], ['Art. 5º, VIII', 'Escusa de consciência.']],
  avancado: {
    texto: `<h3>Thomas More</h3>
<p>São Thomas More, chanceler da Inglaterra, recusou-se a prestar o juramento que reconhecia o rei como chefe da Igreja na Inglaterra e foi executado em 1535 ${tag('fato')}. São João Paulo II o proclamou padroeiro dos governantes e dos políticos em 2000 ${tag('fato')}. É exemplo clássico de objeção de consciência levada ao martírio ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'São João Paulo II, motu proprio proclamando São Thomas More padroeiro dos governantes e dos políticos (2000).' }],
    exercicios: [
      mc('Thomas More foi executado em:', ['1435', '1535', '1635', '1735'], 1, 'Henrique VIII.'),
      mc('More recusou o juramento que reconhecia o rei como:', ['Rei da França', 'Chefe da Igreja na Inglaterra', 'Imperador', 'Papa'], 1, 'Supremacia.'),
      mc('Thomas More é padroeiro dos:', ['Médicos', 'Governantes e políticos', 'Marinheiros', 'Estudantes'], 1, '2000.'),
      disc('Analise a recusa de Thomas More à luz do CIC 2242.', ['Caso', 'Doutrina', 'Consciência', 'Lição atual'])],
  },
}),

aula({
  id: 'dr3-4', titulo: 'Ativismo judicial, separação dos Poderes e fundamento dos direitos humanos', duracao: '150 min',
  aprendera: ['Distinguir ativismo judicial e autocontenção', 'Avaliar o papel do Judiciário na separação dos Poderes', 'Conhecer a Declaração Universal de 1948 e a Pacem in terris', 'Discutir o fundamento dos direitos humanos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Até onde os juízes podem ir ao proteger direitos? E de onde vêm os direitos humanos?</p>
<h3>Ativismo e autocontenção</h3>
<p>Fala-se em ativismo judicial quando o Judiciário decide questões amplas de política pública ou cria normas onde o legislador não as criou; em autocontenção, quando deixa essas escolhas aos Poderes eleitos ${tag('fato')}. No Brasil, o STF decidiu temas de grande repercussão moral e política, e a extensão de sua atuação é objeto de intenso debate ${tag('debate')}.</p>
<h3>Direitos humanos</h3>
<p>A Declaração Universal dos Direitos Humanos foi adotada pela Assembleia Geral da ONU em 10 de dezembro de 1948 ${tag('fato')}. Seu preâmbulo funda os direitos no reconhecimento da dignidade inerente a todos os membros da família humana ${tag('fato')}.</p>
<h3>Fundamento</h3>
<p>São João XXIII, na <em>Pacem in terris</em> (1963), enumerou direitos e deveres da pessoa e fundou-os na natureza humana, inteligente e livre, criada por Deus ${tag('doutrina')}. O Catecismo ensina que o respeito à pessoa humana implica o de seus direitos, que são anteriores à sociedade e se impõem a ela (CIC 1930) ${tag('doutrina')}. Críticos apontam a "inflação de direitos", em que desejos são apresentados como direitos sem fundamento comum ${tag('debate')}.</p>`,
  vocabulario: [
    ['Ativismo judicial', 'Atuação ampla do Judiciário em escolhas de política pública.'],
    ['Autocontenção', 'Deferência do Judiciário às escolhas dos Poderes eleitos.'],
    ['Direitos humanos', 'Direitos inerentes à pessoa pela sua dignidade.'],
    ['Pacem in terris', 'Encíclica de São João XXIII sobre a paz e os direitos (1963).'],
    ['Inflação de direitos', 'Multiplicação de pretensões apresentadas como direitos.'],
  ],
  exemplos: `<p><strong>Dois tipos de decisão:</strong> um tribunal que anula uma lei por violar claramente um direito constitucional exerce o controle de constitucionalidade previsto. Um tribunal que, sem base clara no texto, define uma política pública detalhada que caberia ao legislador é acusado de ativismo. A fronteira entre os dois é o centro do debate.</p>`,
  contexto: `<p><strong>No mundo:</strong> Jacques Maritain relatou que, nas consultas da UNESCO para a Declaração de 1948, pessoas de convicções opostas concordavam sobre os direitos com a condição de não lhes perguntarem por quê ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 tem extenso rol de direitos fundamentais no art. 5º ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os direitos humanos precisam de fundamento', tag: 'argumento',
    premissas: ['Se os direitos dependessem só do consenso ou da lei, poderiam ser retirados por novo consenso ou nova lei.', 'A Declaração de 1948 os funda na dignidade inerente a todos.', 'Uma dignidade inerente não depende de concessão do Estado nem da maioria.'],
    conclusao: 'Logo, os direitos humanos exigem um fundamento na dignidade da pessoa, anterior ao poder.',
    nota: 'A doutrina da Igreja situa esse fundamento na criação do ser humano à imagem de Deus.',
  },
  objecoes: [
    { objecao: 'O Judiciário deve decidir tudo o que o Legislativo não decide.', tag: 'debate',
      resposta: 'O Judiciário deve proteger direitos e a Constituição, mas a separação dos Poderes reserva aos representantes eleitos as grandes escolhas de política pública. Quando juízes não eleitos assumem essas escolhas, cresce o risco de déficit democrático. O equilíbrio é tema de debate legítimo, sem resposta simples.' },
  ],
  aplicacao: `<p>Escolha uma decisão de grande repercussão do STF e avalie se ela representa controle de constitucionalidade necessário ou ativismo, com argumentos dos dois lados.</p>`,
  fonte: {
    obra: 'Declaração Universal dos Direitos Humanos (1948), preâmbulo; São João XXIII, Pacem in terris (1963), nn. 8–34; Catecismo, § 1930', link: { url: 'https://www.vatican.va/content/john-xxiii/pt/encyclicals/documents/hf_j-xxiii_enc_11041963_pacem.html', rotulo: 'vatican.va' },
    orientacao: `<p>Na Declaração, o fundamento na dignidade. Na Pacem in terris, a lista de direitos e deveres. No Catecismo, a anterioridade dos direitos à sociedade.</p>`,
  },
  perguntas: [
    { p: 'Quando foi adotada a Declaração Universal dos Direitos Humanos?', r: 'Em 10 de dezembro de 1948.' },
    { p: 'Em que se fundam os direitos na Pacem in terris?', r: 'Na natureza humana, inteligente e livre, criada por Deus.' },
    { p: 'O que é ativismo judicial?', r: 'A atuação ampla do Judiciário em escolhas de política pública ou criação de normas.' },
  ],
  exercicios: [
    mc('A Declaração Universal é de:', ['1919', '1945', '1948', '1966'], 2, 'ONU.'),
    mc('A Pacem in terris é de:', ['1931', '1963', '1981', '1991'], 1, 'João XXIII.'),
    mc('Os direitos anteriores à sociedade estão no CIC:', ['1930', '2242', '337', '1883'], 0, 'Pessoa.'),
    mc('Deferência às escolhas dos Poderes eleitos é:', ['Ativismo', 'Autocontenção', 'Usurpação', 'Mediação'], 1, 'Conceito.'),
    mc('O rol de direitos fundamentais da CF está sobretudo no art.:', ['1º', '5º', '60', '102'], 1, 'Direitos e garantias.'),
    disc('Avalie uma decisão de grande repercussão do STF como controle necessário ou ativismo, com os dois lados.', ['Decisão', 'Argumentos a favor', 'Argumentos contra', 'Conclusão']),
  ],
  resumo: ['Ativismo e autocontenção.', 'Declaração Universal (1948): dignidade.', 'Pacem in terris (1963).', 'CIC 1930.', 'Inflação de direitos; debate sobre o STF.'],
  referencias: [
    { texto: 'Declaração Universal dos Direitos Humanos (1948).' },
    { texto: 'São João XXIII, Pacem in terris (1963).', link: { url: 'https://www.vatican.va/content/john-xxiii/pt/encyclicals/documents/hf_j-xxiii_enc_11041963_pacem.html', rotulo: 'vatican.va' } },
    { texto: 'Jacques Maritain, O homem e o Estado (1951).', livro: 'maritain-homem-estado' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação da decisão', 'Ler os textos indicados'],
  revisao: [['1948', 'Declaração.'], ['PT', 'Direitos e deveres.'], ['CIC 1930', 'Anteriores à sociedade.']],
  avancado: {
    texto: `<h3>Direitos e deveres</h3>
<p>A <em>Pacem in terris</em> insiste em que a cada direito corresponde um dever, no mesmo sujeito e nos outros (n. 28–30) ${tag('doutrina')}. A Declaração Americana dos Direitos e Deveres do Homem, de 1948, também enumera deveres ${tag('fato')}. A ênfase só nos direitos, sem deveres, é criticada por autores de várias tradições ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'São João XXIII, Pacem in terris (1963), nn. 28–30.' }],
    exercicios: [
      mc('A Pacem in terris liga cada direito a um:', ['Privilégio', 'Dever', 'Imposto', 'Tribunal'], 1, 'Correlação.'),
      mc('A Declaração Americana de 1948 inclui:', ['Só direitos', 'Direitos e deveres', 'Só deveres', 'Nada'], 1, 'Deveres.'),
      mc('A crítica à ênfase só em direitos vem:', ['Só da Igreja', 'De autores de várias tradições', 'De ninguém', 'Só da ONU'], 1, 'Interpretação.'),
      disc('Relacione três direitos fundamentais da Constituição a deveres correspondentes.', ['Direitos', 'Deveres', 'Justificativa', 'Fontes'])],
  },
}),

avaliacao('dr3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas do pensamento jurídico e os debates do módulo, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo e o ensaio sobre a lei injusta.</li><li>Revise as distinções entre objeção, desobediência e resistência.</li></ul>`,
[
  disc('Compare como Kelsen, Dworkin e Tomás resolveriam um caso em que a aplicação literal da lei produz grave injustiça.', ['Kelsen', 'Dworkin', 'Tomás', 'Comparação']),
  disc('Defenda uma posição sobre o fundamento dos direitos humanos e responda à melhor objeção, distinguindo argumento jurídico, filosófico e doutrinal.', ['Posição', 'Objeção', 'Resposta', 'Distinção dos planos']),
]),
];
