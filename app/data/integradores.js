// Módulos integradores (estrutura integradora do currículo): reúnem aulas e livros já existentes que
// compartilham uma época, uma civilização, um país, um autor, um movimento, um acontecimento ou um problema.
// Não substituem aulas nem avaliações. Cada ligação tem um tipo; só o pré-requisito bloqueia a síntese final.
// Todos os ids apontam para aulas e livros reais do acervo (o teste "módulos integradores" confere).

export const TIPOS_INTEGRADOR = {
  epoca: 'Época', civilizacao: 'Civilização', pais: 'País', autor: 'Autor', movimento: 'Movimento',
  acontecimento: 'Acontecimento', problema: 'Problema', tema: 'Tema',
};

export const RELACOES_INTEGRADOR = {
  prerequisito: { nome: 'Pré-requisito obrigatório', desc: 'Precisa ser concluído antes da síntese do módulo.' },
  contexto: { nome: 'Contexto relacionado', desc: 'Situa o tema no tempo, no espaço ou na sociedade.' },
  paralelo: { nome: 'Paralelo interdisciplinar', desc: 'O mesmo objeto visto pelo método de outra disciplina.' },
  aprofundamento: { nome: 'Aprofundamento opcional', desc: 'Para ir além; não é exigido.' },
};

/** Critérios comuns da síntese: o módulo termina com juízo próprio, não com resumo. */
export const CRITERIOS_SINTESE = [
  'Responde à pergunta do módulo com uma tese própria, enunciada no início',
  'Usa ao menos três das aulas ligadas, de pelo menos duas disciplinas diferentes',
  'Distingue fatos, interpretações e juízos, citando as fontes',
  'Apresenta a objeção mais forte à própria tese e responde a ela',
];

const I = (id, tipo, titulo, pergunta, descricao, { pre = [], ctx = [], par = [], apr = [], livros = [], limitada = '' }) => ({
  id, tipo, titulo, pergunta, descricao, limitada,
  itens: [
    ...pre.map((a) => ({ aula: a, relacao: 'prerequisito' })),
    ...ctx.map((a) => ({ aula: a, relacao: 'contexto' })),
    ...par.map((a) => ({ aula: a, relacao: 'paralelo' })),
    ...apr.map((a) => ({ aula: a, relacao: 'aprofundamento' })),
    ...livros.map((l) => ({ livro: l, relacao: 'aprofundamento' })),
  ],
});

export const INTEGRADORES = [
  // Épocas e civilizações
  I('grecia', 'civilizacao', 'Grécia Antiga', 'O que a Grécia antiga legou de permanente ao pensamento, e o que a tradição cristã precisou corrigir ou completar nesse legado?',
    'A pólis, a investigação histórica, a filosofia e a educação gregas vistas juntas: da história e da filosofia à astronomia, à matemática, à música e à arte.',
    { pre: ['h4-1', 'm5-1'], ctx: ['h2-1', 'ed2-1'], par: ['m5-3', 'm5-6', 'm5-7', 'as2-1', 'ma3-3', 'mu2-1', 'ha2-1', 'lf2-3'], apr: ['m5-9', 'm3-5'], livros: ['platao-apologia', 'platao-republica', 'jaeger-paideia', 'aristoteles-metafisica'] }),
  I('egito-mesopotamia', 'civilizacao', 'Egito e Mesopotâmia', 'O que podemos saber das primeiras civilizações, e com que tipo de fonte?',
    'As primeiras civilizações aparecem no acervo pelas suas contribuições à medida do tempo, à matemática e à astronomia.',
    { pre: ['h1-2'], ctx: ['h4-1'], par: ['ma2-1', 'as2-1'], limitada: 'O acervo ainda não tem aulas dedicadas ao Egito e à Mesopotâmia; o módulo reúne apenas as passagens existentes.' }),
  I('roma', 'civilizacao', 'Roma', 'Por que o direito, a língua e as instituições de Roma continuaram a formar a Europa depois da queda do Império?',
    'Roma pela história, pelo direito, pela educação, pela língua latina e pela política, com a cristianização do Império.',
    { pre: ['h4-1'], ctx: ['m2-4'], par: ['dr2-1', 'ed2-1', 'li5-2', 'cp2-1'], apr: ['h2-2'], livros: ['agostinho-cidade'] }),
  I('cristianismo-primitivo', 'movimento', 'Cristianismo primitivo', 'Como uma comunidade perseguida, sem poder político, transformou a cultura do mundo antigo?',
    'A Igreja nascente, os primeiros concílios e os Padres em diálogo com a filosofia grega, com o cálculo da Páscoa e a história cristã.',
    { pre: ['m2-4'], ctx: ['m2-2', 'h4-1'], par: ['m2-5', 'm2-7', 'm2-8', 'as5-1', 'h2-2'], apr: ['m2-9'], livros: ['biblia-atos', 'ratzinger-introducao'] }),
  I('europa-medieval', 'epoca', 'Europa medieval', 'A Idade Média foi uma época de trevas ou o berço da universidade, da ciência e do direito europeus?',
    'Cristandade, universidades, escolástica, catedrais e música, e as ciências e artes medievais em cada disciplina.',
    { pre: ['h4-2'], ctx: ['tg8-1'], par: ['m8-5', 'ha2-1', 'mu2-1', 'ed2-2', 'fi2-1', 'lf2-1', 'as2-2', 'li2-1', 'e2-1'], apr: ['tg6-2', 'm8-6'], livros: ['gilson-filosofia-idade-media', 'boecio-quadrivio', 'macintyre-deus-universidades'] }),
  I('isla', 'civilizacao', 'Islã', 'Como a filosofia islâmica medieval recebeu Aristóteles, e por que os escolásticos latinos precisaram responder a ela?',
    'A falsafa de Avicena e Averróis, a matemática transmitida pelo mundo árabe e o contexto das Cruzadas.',
    { pre: ['h4-2'], ctx: ['tg8-1'], par: ['m14-5', 'ma2-1'], livros: ['tomas-unidade-intelecto', 'gilson-razao-revelacao'], limitada: 'O acervo trata o Islã sobretudo pela filosofia; ainda não há aulas sobre a história e a religião islâmicas em si.' }),
  I('renascimento', 'movimento', 'Renascimento', 'O Renascimento foi uma ruptura com a Idade Média ou uma continuação dela por outros meios?',
    'Humanismo, arte, música, literatura e política renascentistas, com a erudição dos humanistas e o nascimento do Estado moderno.',
    { pre: ['h4-3'], ctx: ['h2-3'], par: ['ha2-2', 'mu2-2', 'lt2-2', 'cp2-2', 'cu2-2', 'ri2-3'], apr: ['m9-1'], livros: ['maritain-humanismo', 'olavo-maquiavel'] }),
  I('revolucao-cientifica', 'acontecimento', 'Revolução Científica', 'O que mudou de fato na Revolução Científica: o conhecimento da natureza, o método, ou a ideia do que conta como conhecimento?',
    'De Copérnico a Newton, pela astronomia, pela física, pela matemática e pela biologia, com o caso Galileu examinado pelas fontes.',
    { pre: ['h4-3', 'm6-6'], ctx: ['as3-3', 'fi3-3'], par: ['as2-3', 'as2-4', 'fi2-2', 'fi2-3', 'ma2-2', 'bi2-1'], apr: ['m9-1', 'm10-8'], livros: ['descartes-discurso', 'kuhn-estrutura'] }),
  I('iluminismo', 'movimento', 'Iluminismo', 'A razão iluminista libertou o homem ou o separou das fontes que davam sentido à razão?',
    'Locke, Hume, Rousseau, Kant e Montesquieu na filosofia, na política, no direito, na educação e nas relações internacionais.',
    { pre: ['h4-3', 'm9-4'], ctx: ['so2-1'], par: ['m9-5', 'm9-6', 'm9-7', 'cp2-3', 'dr2-4', 'ed2-4', 'ri2-3'], apr: ['m9-8'], livros: ['rousseau-contrato', 'kant-fundamentacao', 'locke-dois-tratados'] }),
  I('revolucao-francesa', 'acontecimento', 'Revolução Francesa', 'A Revolução Francesa realizou ou traiu os ideais que proclamava?',
    'As revoluções modernas, a Igreja diante da Revolução e as leituras de Tocqueville e dos teóricos da república.',
    { pre: ['h4-3'], ctx: ['m9-6'], par: ['tg8-3', 'so2-1', 'cp2-4'], apr: ['dr2-4'], livros: ['tocqueville-democracia'], limitada: 'Ainda não há uma aula dedicada só à Revolução Francesa; o módulo reúne as passagens em que ela é tratada.' }),
  I('revolucao-industrial', 'acontecimento', 'Revolução Industrial', 'O que a industrialização fez com o trabalho humano, e que respostas foram dadas a isso?',
    'A economia clássica, os clássicos da sociologia, Marx e a resposta da Doutrina Social da Igreja.',
    { pre: ['h4-3'], par: ['e2-2', 'so2-4', 'm10-2', 'tg7-1', 'tg7-2'], apr: ['e2-4'], livros: ['jp2-laborem', 'marx-manifesto'] }),
  I('independencias-americanas', 'acontecimento', 'Independências americanas', 'Que ideia de liberdade política orientou as independências das Américas, e o caso brasileiro foi diferente?',
    'A independência dos Estados Unidos lida pelo Federalista e por Tocqueville, e a do Brasil na formação do Império.',
    { pre: ['h4-3'], ctx: ['ri2-2'], par: ['cp2-4', 'h4-4'], apr: ['cp2-3'], livros: ['maritain-america'], limitada: 'O acervo trata as independências da América espanhola apenas de passagem.' }),
  I('estado-moderno', 'epoca', 'Estados modernos', 'De onde vem a soberania do Estado moderno, e quais são os seus limites?',
    'Maquiavel, Hobbes, Locke e Rousseau, a soberania e a ordem internacional, e o debate entre Estado e mercado.',
    { pre: ['cp1-2'], ctx: ['h4-3'], par: ['cp2-2', 'm9-6', 'cp2-3', 'ri1-1', 'ri3-4', 'tg7-3', 'e3-3'], apr: ['m13-5'], livros: ['rousseau-contrato', 'hegel-direito', 'maritain-homem-estado'] }),
  I('seculo-xx', 'epoca', 'Século XX', 'Como os totalitarismos do século XX foram possíveis, e o que eles revelam sobre as ideias que os prepararam?',
    'Guerras mundiais, totalitarismos e Guerra Fria, a diplomacia, o grande debate econômico e a resposta da Igreja.',
    { pre: ['h5-1'], ctx: ['h5-2'], par: ['ri2-2', 'e2-4', 'tg8-3', 'tg8-4', 'cu3-2'], apr: ['m10-6'], livros: ['popper-sociedade-aberta', 'jp2-memoria-identidade'] }),
  I('contemporaneo', 'epoca', 'Mundo contemporâneo', 'O mundo de hoje é mais secular, mais plural ou apenas mais confuso sobre a verdade?',
    'Secularização, relativismo, a Igreja depois do Concílio, a ética das virtudes e o debate sobre mente e cérebro.',
    { pre: ['h5-1'], ctx: ['h5-3'], par: ['so3-3', 'cu3-3', 'tg8-4', 'm10-10', 'ps3-3'], apr: ['m15-1'] }),
  I('globalizacao', 'problema', 'Globalização', 'A globalização aproxima os povos ou dissolve as comunidades que dão forma à vida humana?',
    'Território e desenvolvimento, comércio e câmbio, economia política internacional, direito internacional e migrações.',
    { pre: ['g3-4'], ctx: ['ri5-1'], par: ['e4-3', 'ri4-2', 'dm4-3', 'ri5-2', 'ri4-1'], apr: ['tg7-4'], livros: ['kant-paz'] }),
  // Países
  I('portugal', 'pais', 'Portugal', 'O que o Brasil herdou de Portugal, além da língua?',
    'As Grandes Navegações, a missão jesuítica, a Carta de Pero Vaz de Caminha como fonte e a formação colonial.',
    { pre: ['h4-4'], ctx: ['g2-1', 'tg8-2'], par: ['h1-4', 'as5-2', 'li4-1'], limitada: 'O acervo ainda não tem aulas sobre a história de Portugal em si; o módulo parte do que o liga ao Brasil.' }),
  I('brasil', 'pais', 'Brasil', 'O que é o Brasil: uma nação formada por mistura, por conflito ou por uma tradição comum?',
    'O Brasil visto por todas as disciplinas: história, intérpretes, território, política, sociedade, povos indígenas e afro-brasileiros, religião, ciência e ambiente.',
    { pre: ['h4-4', 'h5-2'], ctx: ['h3-4', 'cu4-1'], par: ['g4-4', 'cp4-4', 'so4-3', 'an4-1', 'an4-2', 'cu4-3', 'so5-3', 'bi4-4', 'ca4-4', 'ct4-4'], apr: ['m12-9', 'sb3-2'], livros: ['olavo-futuro'] }),
  // Autores
  I('agostinho', 'autor', 'Santo Agostinho', 'Qual é a ideia central que une a filosofia, a teologia e a teoria da história de Agostinho?',
    'Agostinho na patrística, na filosofia, na teologia trinitária, na história, na política e na educação.',
    { pre: ['m2-9'], par: ['m2-10', 'm8-1', 'm8-2', 'h2-2', 'cp2-1', 'ed2-3', 'tg1-2'], apr: ['tg5-1'], livros: ['agostinho-cidade', 'agostinho-livre-arbitrio', 'agostinho-trindade'] }),
  I('tomas', 'autor', 'Santo Tomás de Aquino', 'Por que Tomás pode ser lido ao mesmo tempo como teólogo, filósofo e lógico, sem contradição?',
    'Tomás na teologia, na metafísica, na ética, na lógica e na psicologia.',
    { pre: ['m8-7'], par: ['tg6-2', 'm7-3', 'm7-7', 'm8-8', 'm8-9', 'm8-10', 'm8-11', 'lf2-3', 'ps2-3'], apr: ['tg4-2'], livros: ['suma-i', 'suma-i-ii', 'suma-ii-ii'] }),
  // Temas e problemas
  I('verdade', 'tema', 'A verdade', 'É possível conhecer a verdade? Responda considerando a lógica, a história, a ciência e a literatura.',
    'A verdade na filosofia, na lógica, na história, nas ciências, na cultura e na literatura.',
    { pre: ['m3-4', 'm4-5'], par: ['m6-1', 'm6-2', 'h3-3', 'cu3-3', 'lt1-1', 'lf3-4', 'fi1-3'], apr: ['m5-12', 'tg6-2'], livros: ['tomas-verdade', 'agostinho-academicos', 'platao-teeteto', 'newman-gramatica'] }),
  I('justica', 'tema', 'A justiça', 'A justiça é uma convenção da sociedade ou algo que a razão descobre?',
    'A justiça na filosofia antiga, na lei natural, no direito, na antropologia, na Doutrina Social e nas questões ambientais.',
    { pre: ['m3-6', 'm5-6'], ctx: ['dr5-3'], par: ['m13-3', 'm13-2', 'dr1-1', 'an3-3', 'tg4-2', 'tg7-1', 'ca3-4'], apr: ['m8-10'], livros: ['platao-republica', 'finnis-lei-natural', 'rawls-justica', 'macintyre-justica', 'strauss-direito-natural'] }),
  I('liberdade', 'tema', 'A liberdade', 'Se a ciência explica as causas do comportamento, ainda somos livres? E para que serve a liberdade?',
    'O livre-arbítrio na teologia e na filosofia, a autoridade, a mente e o cérebro, a física, a educação e a literatura.',
    { pre: ['m8-2'], par: ['tg4-1', 'm2-10', 'm13-4', 'ps3-3', 'fi3-4', 'ed3-3', 'lt3-4'], apr: ['tg2-4'], livros: ['agostinho-livre-arbitrio', 'kant-crpratica', 'sartre-existencialismo'] }),
  I('estado', 'problema', 'O Estado', 'Qual é a finalidade do Estado, e o que acontece quando ele a esquece?',
    'O Estado na filosofia política, na ciência política, na economia, no direito, na cultura e na ordem internacional.',
    { pre: ['m13-5'], par: ['tg7-3', 'cp1-2', 'cp3-4', 'e3-3', 'cu5-3', 'ri1-1', 'dr1-1'], apr: ['m9-6'], livros: ['maritain-homem-estado', 'rousseau-contrato'] }),
  I('conhecimento-cientifico', 'problema', 'O conhecimento científico', 'O que torna um conhecimento científico, e o que a ciência não pode decidir?',
    'Os métodos de cada ciência comparados: experimento, observação, estatística, etnografia, comparação e crítica de fontes.',
    { pre: ['m4-4', 'm6-6'], ctx: ['m6-5'], par: ['bi1-3', 'so1-3', 'so1-4', 'an1-3', 'cp1-3', 'ca1-3', 'as1-3', 'h1-3'], apr: ['m10-8', 'bi3-3'], livros: ['popper-logica', 'kuhn-estrutura', 'aristoteles-analiticos-post'] }),
  I('civilizacao', 'tema', 'A civilização', 'O que faz uma civilização nascer, florescer e decair?',
    'O vocabulário da cultura, as teorias das civilizações e os exemplos antigo e medieval.',
    { pre: ['cu1-2'], par: ['cu2-4', 'h4-1', 'h4-2', 'an1-2', 'cu1-3'], apr: ['m12-5'], livros: ['rousseau-ciencias-artes', 'mfs-invasao'] }),
  I('religioes', 'tema', 'As religiões', 'Como comparar religiões com justiça, sem reduzi-las umas às outras e sem renunciar à pergunta pela verdade?',
    'As tradições indianas, chinesas, judaica e islâmica, os símbolos e mitos, a religião no Brasil e a crítica filosófica da religião.',
    { pre: ['m14-1'], ctx: ['m7-11'], par: ['m14-2', 'm14-3', 'm14-4', 'm14-5', 'sb3-1', 'so5-3', 'cu4-3', 'an4-4'], apr: ['tg8-4'], livros: ['agostinho-verdadeira-religiao', 'maritain-religiao-cultura', 'wittgenstein-ramo-dourado'] }),
];

export const integradorPorId = Object.fromEntries(INTEGRADORES.map((m) => [m.id, m]));

/** Integradores em que uma aula aparece, com a relação (para a página da aula). */
export const integradoresDaAula = (aula) => INTEGRADORES.flatMap((m) => m.itens.filter((i) => i.aula === aula).map((i) => ({ modulo: m, relacao: i.relacao })));

/** Pré-requisitos ainda não concluídos: são os únicos que bloqueiam a síntese do módulo. */
export const prereqsPendentes = (m, concluida) => m.itens.filter((i) => i.relacao === 'prerequisito' && !concluida(i.aula));
