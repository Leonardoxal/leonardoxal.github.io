// Mapa curricular: degraus da escada e módulos do curso.
// As aulas completas ficam em data/aulas/*.js; aqui só a estrutura (títulos, ordem, pré-requisitos).
import { LIVROS } from './livros.js';
import { INTRODUCOES } from './obras/index.js';

const COMPETENCIAS_AVANCADAS = COMPETENCIAS_AVANCADAS_();
const livrosDoDegrau = (n) =>
  LIVROS.filter((l) => l.degrau === n).sort((a, b) => a.ordem - b.ordem).map((l) => l.id);

// Escada de 14 degraus. Cada degrau exige o anterior; cada aula pertence a um único degrau (degrauDaAula).
const D = (n, nome, objetivo, competencias, extra = {}) => ({ n, nome, objetivo, competencias, prereq: n ? [n - 1] : [], ...extra });
const DEGRAUS_BASE = [
  D(0, 'Preparação intelectual e método de estudo', 'Ler um texto, identificar a questão central, resumir as ideias e registrar dúvidas antes de enfrentar grandes obras.',
    ['Resumir um capítulo com fidelidade', 'Definir os termos importantes de um texto', 'Identificar a pergunta central de um texto']),
  D(1, 'Fundamentos da teologia católica', 'Compreender o vocabulário essencial do cristianismo e saber localizar os ensinamentos nas fontes (Escritura, Catecismo, Magistério).',
    ['Explicar os artigos fundamentais do Credo', 'Distinguir Escritura, Tradição e Magistério segundo a doutrina católica', 'Usar o Catecismo por referência cruzada']),
  D(2, 'Introdução à filosofia e à busca da verdade', 'Distinguir uma afirmação, uma opinião, um argumento e uma conclusão fundamentada.',
    ['Identificar a pergunta filosófica de um diálogo', 'Apresentar as razões de cada posição com clareza', 'Distinguir compreender uma tese de aceitá-la']),
  D(3, 'Lógica e argumentação', 'Examinar argumentos antes de estudar sistemas complexos: definições, proposições, silogismos, falácias, dialética e retórica.',
    ['Reconstruir um argumento simples em premissas e conclusão', 'Avaliar validade independentemente da verdade', 'Identificar ao menos cinco falácias em exemplos concretos']),
  D(4, 'Filosofia antiga', 'Pré-socráticos, Sócrates, Platão, Aristóteles e escolas helenísticas, em ordem de dificuldade conceitual.',
    ['Comparar Platão e Aristóteles sobre conhecimento', 'Comparar Platão e Aristóteles sobre realidade', 'Comparar Platão e Aristóteles sobre a vida boa, com argumentos de ambos']),
  D(5, 'Patrística e filosofia cristã antiga', 'Padres da Igreja, contexto dos primeiros concílios e Santo Agostinho: a base para compreender as obras cristãs medievais.',
    ['Explicar como os Padres receberam e transformaram a filosofia grega', 'Reconstruir a resposta de Agostinho ao problema do mal', 'Explicar a noção agostiniana de tempo e de interioridade']),
  D(6, 'Conhecimento, metafísica e filosofia da religião', 'Conhecimento, ceticismo, ser, essência, substância, ato e potência, causalidade e argumentos sobre Deus, como preparação para a escolástica.',
    ['Explicar os principais termos metafísicos', 'Reconstruir dois argumentos sobre a existência de Deus', 'Apresentar as objeções a esses argumentos e seus limites']),
  D(7, 'Filosofia medieval e escolástica', 'Anselmo, universais, razão e Revelação, Tomás de Aquino: essência e existência, cinco vias, virtudes, lei natural e bem comum.',
    ['Explicar o problema filosófico de cada obra estudada', 'Distinguir o argumento do autor da doutrina oficial da Igreja', 'Ler um artigo da Suma identificando objeções, sed contra, resposta e réplicas']),
  D(8, 'Filosofia moderna', 'Descartes, Pascal, Locke, Hume, Rousseau e Kant, ligados pelos problemas que compartilham: certeza, experiência, causalidade e limites do conhecimento.',
    ['Comparar Descartes, Hume e Kant sobre o conhecimento', 'Explicar o problema que cada um procura resolver']),
  D(9, 'Filosofia contemporânea', 'Idealismo alemão, Marx, Kierkegaard, Nietzsche, fenomenologia, existencialismo, filosofia analítica, da ciência e da linguagem.',
    ['Explicar as teses centrais de ao menos quatro correntes', 'Compará-las com a tradição clássica']),
  D(10, 'Mário Ferreira dos Santos', 'Estudar seu sistema filosófico com lógica, filosofia antiga, teoria do conhecimento e metafísica já adquiridas.',
    ['Reconstruir teses da Filosofia Concreta com suas demonstrações', 'Comparar conceitos do autor com Platão, Aristóteles e Tomás'],
    { nota: 'Ordem por dependência entre os tratados; não é a ordem de publicação da coleção.' }),
  D(11, 'Olavo de Carvalho', 'Conhecer método, interpretações históricas, teoria dos discursos e crítica cultural do autor, sem confundir sua perspectiva com consenso acadêmico.',
    ['Expor uma tese do autor com o argumento que a sustenta', 'Indicar fontes primárias, interpretações alternativas e objeções', 'Classificar elementos como confirmados, controversos ou insuficientemente fundamentados']),
  D(12, 'Ética, política, direito, cultura e tradições comparadas', 'Virtudes, lei natural, justiça, autoridade, direito, mente, linguagem, estética e tradições judaicas, islâmicas, indianas e chinesas.',
    ['Produzir trabalho comparando ao menos três autores', 'Examinar objeções e justificar a conclusão mais bem sustentada'],
    { retomar: ['aristoteles-etica', 'suma-i-ii', 'rousseau-contrato', 'marx-manifesto', 'macintyre-virtude'] }),
  D(13, 'Síntese e investigação independente', 'Formular uma questão filosófica, investigar fontes primárias, comparar autores e defender uma conclusão fundamentada.',
    ['Formular a pergunta e definir os conceitos', 'Reconstruir três argumentos a partir de fontes primárias', 'Apresentar objeções, comparar autores e concluir com bibliografia verificável']),
];

/** Nível avançado: o que distingue quem domina o debate de quem apenas entende o autor. */
function COMPETENCIAS_AVANCADAS_() {
  return {
    0: ['Fazer a leitura analítica completa de um livro de mais de 200 páginas, com ficha por capítulo', 'Desenhar o mapa de argumentos de um capítulo difícil'],
    1: ['Situar uma afirmação doutrinal em seu grau de autoridade, com a fonte (CIC e Denzinger)', 'Explicar a teoria do desenvolvimento da doutrina de Newman e aplicá-la a um caso'],
    2: ['Comparar evidencialismo (Clifford), epistemologia reformada (Plantinga) e a posição do Vaticano I sobre a racionalidade da fé', 'Explicar o "sentido ilativo" de Newman e avaliá-lo'],
    3: ['Testar a validade de silogismos pelas regras e pela redução à primeira figura', 'Formalizar argumentos em lógica proposicional e de predicados simples', 'Distinguir demonstração "quia" e "propter quid" (Analíticos Posteriores)'],
    4: ['Ler um passo de Platão ou de Aristóteles identificando os termos-chave em grego', 'Reconstruir a refutação de "conhecimento é percepção" no Teeteto'],
    5: ['Comparar a noção de tempo em Aristóteles (número do movimento) e em Agostinho (distensão da alma)', 'Expor a controvérsia de Agostinho com Pelágio sobre graça e liberdade, com os argumentos de ambos'],
    6: ['Formular a versão mais forte (steelman) de uma objeção de Hume ou Mackie e respondê-la', 'Distinguir séries causais ordenadas "per se" e "per accidens" e explicar por que isso importa para as vias'],
    7: ['Ler um artigo da Suma em latim com auxílio de tradução', 'Explicar a distinção real entre essência e ser e as posições de Escoto e Suárez'],
    8: ['Comparar Spinoza e Leibniz sobre necessidade e liberdade', 'Expor a ideia central da dedução transcendental e uma crítica a ela'],
    9: ['Expor a crítica de Anscombe à filosofia moral moderna', 'Comparar Popper e Kuhn sobre o que torna a ciência racional'],
    10: ['Confrontar uma tese da Filosofia Concreta com uma objeção da lógica ou da metafísica contemporânea'],
    11: ['Rastrear as fontes de uma tese de Olavo de Carvalho (Aristóteles, Voegelin, Lavelle, tradicionalistas) e avaliar o que é próprio do autor'],
    12: ['Comparar Finnis, Strauss e Rawls sobre o fundamento da justiça', 'Aplicar as três posições a um caso jurídico concreto'],
    13: ['Defender o projeto oralmente diante de objeções (debate simulado, gravado ou com um interlocutor)', 'Avaliar um ensaio alheio pela rubrica e justificar a avaliação'],
  };
}

const A = (titulos) => titulos.map((t, i) => ({ n: i + 1, titulo: t }));
/** Aulas que mudaram de módulo e conservam o id original (o progresso salvo é guardado pelo id). */
const AI = (pares) => pares.map(([id, t], i) => ({ n: i + 1, titulo: t, id }));

export const MODULOS = [
  { id: 'm0', n: 0, titulo: 'Preparação intelectual e método de estudo', semanas: '1–2', degrau: 0, prereq: [],
    descricao: 'Leitura ativa, fichamento e organização do estudo: as ferramentas que todas as disciplinas pressupõem, antes de qualquer conteúdo de teologia ou filosofia.',
    objetivos: ['Fazer leitura inspecional e analítica', 'Preencher uma ficha de leitura', 'Organizar um plano semanal de estudo'],
    aulas: AI([['m3-1', 'Como ler textos filosóficos: leitura ativa']]),
    criterios: ['Aula concluída', 'Ficha de leitura preenchida'] },
  { id: 'm1', n: 1, titulo: 'Fundamentos da teologia católica', semanas: '6–8', degrau: 1, prereq: [],
    descricao: 'O vocabulário e a estrutura da fé católica: o que é teologia, como Deus se revela, como a Revelação é transmitida e como o Credo organiza a fé.',
    objetivos: ['Definir teologia e distingui-la da filosofia', 'Explicar Revelação, fé e razão segundo o Catecismo', 'Distinguir Escritura, Tradição e Magistério', 'Usar o Catecismo e o Compêndio com referências', 'Explicar os artigos do Credo'],
    aulas: A(['O que é teologia?', 'Fé, Revelação e razão', 'Bíblia, Tradição e Magistério', 'Como ler o Catecismo', 'O Credo e os fundamentos da fé', 'Deus e o conhecimento natural', 'Jesus Cristo e a Revelação cristã', 'Criação, ser humano, pecado e graça', 'Igreja e sacramentos', 'Moral cristã e vida eterna', 'Revisão geral', 'Avaliação do módulo']),
    criterios: ['Concluir as aulas com nota mínima de 80% nos questionários', 'Responder às questões discursivas', 'Aprovação na prova do módulo (mínimo 80%)'] },
  { id: 'm2', n: 2, titulo: 'Bíblia e história da Igreja antiga', semanas: '5–6', degrau: 1, prereq: ['m1'],
    descricao: 'A Escritura em seu contexto, a formação do cânon, a Igreja nascente e os primeiros concílios. Os Padres da Igreja são estudados no Módulo 2B, depois da filosofia antiga.',
    objetivos: ['Situar os livros bíblicos no tempo', 'Explicar a formação do cânon e dos primeiros credos', 'Explicar as fórmulas de Niceia e Calcedônia'],
    aulas: AI([['m2-1', 'Como ler a Escritura: sentidos e gêneros literários'], ['m2-2', 'O contexto histórico de Israel e do Novo Testamento'], ['m2-3', 'A formação do cânon'], ['m2-4', 'A Igreja nascente e as perseguições'], ['m2-5', 'Os primeiros concílios: Niceia e Constantinopla'], ['m2-6', 'Calcedônia e a cristologia'], ['m2-11', 'Avaliação do módulo']]),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm3', n: 3, titulo: 'Introdução à filosofia', semanas: '6–8', degrau: 2, prereq: ['m0', 'm1'],
    descricao: 'A origem da filosofia, opinião e conhecimento, verdade e os primeiros diálogos de Platão. Pressupõe o método de leitura do Módulo 0 e os fundamentos de teologia do Módulo 1.',
    objetivos: ['Distinguir opinião, crença e conhecimento', 'Identificar problemas filosóficos', 'Ler Apologia, Críton e Eutífron com método'],
    aulas: AI([['m3-2', 'O que é filosofia?'], ['m3-3', 'Opinião, crença e conhecimento'], ['m3-4', 'O que é a verdade?'], ['m3-5', 'Sócrates e a Apologia'], ['m3-6', 'Críton: justiça e leis'], ['m3-7', 'Eutífron: em busca de uma definição'], ['m3-8', 'Fé e razão: Fides et Ratio'], ['m3-9', 'Escolas e métodos filosóficos'], ['m3-10', 'Avaliação do módulo']]),
    criterios: ['Aulas concluídas', 'Resumo comentado de um diálogo', 'Prova do módulo'] },
  { id: 'm4', n: 4, titulo: 'Lógica e argumentação', semanas: '8–10', degrau: 3, prereq: ['m3'],
    descricao: 'Conceitos, proposições, inferência, silogismos, validade, falácias, dialética e retórica.',
    objetivos: ['Reconstruir argumentos', 'Distinguir validade e verdade', 'Usar a silogística aristotélica', 'Reconhecer falácias'],
    aulas: A(['Premissas e conclusões', 'Conceitos, termos e definições', 'Proposições e o quadrado das oposições', 'Dedução, indução e abdução', 'Validade, verdade e solidez', 'O silogismo categórico', 'Figuras e modos do silogismo', 'Lógica proposicional básica', 'Falácias formais', 'Falácias informais', 'Dialética e retórica', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Exercícios de reconstrução', 'Prova do módulo'] },
  { id: 'm5', n: 5, titulo: 'Filosofia antiga', semanas: '10–12', degrau: 4, prereq: ['m4'],
    descricao: 'Pré-socráticos, Sócrates, Platão, Aristóteles e escolas helenísticas.',
    objetivos: ['Expor os problemas dos pré-socráticos', 'Explicar a teoria platônica das Formas', 'Explicar causas, substância e virtude em Aristóteles', 'Comparar estoicismo e epicurismo'],
    aulas: A(['Os pré-socráticos e a pergunta pela physis', 'Parmênides e Heráclito', 'Os sofistas e Sócrates', 'Mênon: a virtude pode ser ensinada?', 'Fédon e a alma', 'República: justiça e a caverna', 'Aristóteles: as quatro causas', 'Aristóteles: substância e Metafísica', 'Ética a Nicômaco: felicidade e virtude', 'Epicurismo', 'Estoicismo', 'Ceticismo antigo', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Ensaio comparativo Platão × Aristóteles', 'Prova do módulo'] },
  { id: 'm2b', n: '2B', titulo: 'Patrística e filosofia cristã antiga', semanas: '6–8', degrau: 5, prereq: ['m2', 'm5'],
    descricao: 'Padres apostólicos e apologistas, o diálogo dos Padres com a filosofia grega, Santo Agostinho e Boécio. Vem depois da filosofia antiga porque usa seu vocabulário (Formas, alma, causa, eternidade).',
    objetivos: ['Apresentar os Padres e seu uso crítico da filosofia grega', 'Explicar a conversão e as teses centrais de Agostinho sobre o mal, a liberdade e o tempo', 'Explicar a distinção entre eternidade e tempo infinito em Boécio'],
    aulas: AI([['m2-7', 'Padres apostólicos e apologistas'], ['m2-8', 'Os Padres e a filosofia grega'], ['m2-9', 'Santo Agostinho: vida e conversão'], ['m2-10', 'Agostinho: liberdade, mal e interioridade'], ['m8-1', 'Confissões: o mal e o tempo'], ['m8-2', 'O livre-arbítrio'], ['m8-3', 'Boécio: providência e eternidade']]),
    criterios: ['Aulas concluídas, com 80% nos questionários', 'Leituras do degrau 5 com comprovação'] },
  { id: 'm6', n: 6, titulo: 'Epistemologia e filosofia da ciência', semanas: '6–8', degrau: 6, prereq: ['m5'],
    descricao: 'Crença, conhecimento, justificação, ceticismo, percepção, indução e método científico.',
    objetivos: ['Definir conhecimento e justificação', 'Avaliar argumentos céticos', 'Explicar o problema da indução'],
    aulas: A(['Crença verdadeira justificada', 'Ceticismo e respostas', 'Percepção e realismo', 'Razão e experiência', 'Indução e causalidade', 'Método científico', 'Limites do conhecimento', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm7', n: 7, titulo: 'Metafísica e filosofia da religião', semanas: '8–10', degrau: 6, prereq: ['m5'],
    descricao: 'Ser, essência, substância, ato e potência, causalidade, argumentos sobre Deus e problema do mal.',
    objetivos: ['Explicar o vocabulário metafísico', 'Reconstruir argumentos cosmológico, ontológico e teleológico', 'Avaliar objeções e o problema do mal'],
    aulas: A(['O que é metafísica?', 'Ser, ente e existência', 'Essência e existência em Tomás', 'Substância e acidente', 'Ato e potência', 'Causalidade', 'As cinco vias', 'O argumento ontológico e suas críticas', 'O argumento teleológico', 'O problema do mal', 'Críticas filosóficas à religião', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Reconstrução de dois argumentos com objeções', 'Prova do módulo'] },
  { id: 'm8', n: 8, titulo: 'Filosofia medieval e escolástica', semanas: '10–12', degrau: 7, prereq: ['m7'],
    descricao: 'Anselmo, método escolástico, universais, Tomás de Aquino, lei natural e virtudes. Agostinho e Boécio são estudados antes, no Módulo 2B.',
    objetivos: ['Explicar a síntese medieval entre fé e razão', 'Ler artigos da Suma com seu método', 'Explicar a lei natural'],
    aulas: AI([['m8-4', 'Anselmo: fé que busca compreender'], ['m8-5', 'O método escolástico'], ['m8-6', 'A querela dos universais'], ['m8-7', 'Como ler um artigo da Suma'], ['m8-8', 'Tomás: Deus e os nomes divinos'], ['m8-9', 'Felicidade e atos humanos'], ['m8-10', 'Lei e lei natural'], ['m8-11', 'Virtudes'], ['m8-12', 'Avaliação do módulo']]),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm9', n: 9, titulo: 'Filosofia moderna', semanas: '10–12', degrau: 8, prereq: ['m8'],
    descricao: 'Descartes, Pascal, Locke, Hume, Rousseau e Kant.',
    objetivos: ['Distinguir racionalismo e empirismo', 'Explicar a crítica de Hume', 'Explicar a resposta de Kant'],
    aulas: A(['Descartes: o método', 'Descartes: as Meditações', 'Pascal', 'Locke e a origem das ideias', 'Hume: impressões, ideias e causalidade', 'Rousseau e o contrato social', 'Kant: o problema crítico', 'Kant: a moral do dever', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm10', n: 10, titulo: 'Filosofia contemporânea', semanas: '10–12', degrau: 9, prereq: ['m9'],
    descricao: 'Hegel, Marx, Kierkegaard, Nietzsche, existencialismo, fenomenologia, positivismo, filosofia analítica.',
    objetivos: ['Expor as teses centrais de cada corrente', 'Comparar com a tradição clássica'],
    aulas: A(['Hegel e o idealismo alemão', 'Marx e o materialismo histórico', 'Kierkegaard: fé e existência', 'Nietzsche: genealogia e crítica', 'Fenomenologia', 'Existencialismo', 'Positivismo', 'Popper e a filosofia da ciência', 'Wittgenstein e a linguagem', 'MacIntyre e a ética das virtudes', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm11', n: 11, titulo: 'Mário Ferreira dos Santos', semanas: '12–16', degrau: 10, prereq: ['m4', 'm5', 'm7'],
    descricao: 'Filosofia concreta, lógica, conhecimento, ontologia, cosmologia, dialética e filosofia dos valores.',
    objetivos: ['Reconstruir teses da Filosofia Concreta', 'Comparar com Platão, Aristóteles e Tomás'],
    aulas: A(['Vida, obra e contexto', 'Filosofia e cosmovisão', 'Lógica e dialéctica', 'Teoria do conhecimento', 'Ontologia e cosmologia', 'Filosofia Concreta: método das teses', 'Filosofia Concreta: teses fundamentais', 'Filosofia dos valores', 'O Um e o Múltiplo', 'Simbólica e crise', 'Teologia e noologia', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Roteiro de leitura de cada livro', 'Prova do módulo'] },
  { id: 'm12', n: 12, titulo: 'Olavo de Carvalho', semanas: '10–12', degrau: 11, prereq: ['m4', 'm5'],
    descricao: 'Método filosófico, história das ideias, teoria dos quatro discursos, interpretação cultural e retórica, sempre com tese, argumento, fontes, alternativas e objeções.',
    objetivos: ['Expor teses do autor com seus argumentos', 'Confrontá-las com fontes primárias e leituras alternativas', 'Classificar afirmações por grau de fundamentação'],
    aulas: A(['Vida, obra e contexto', 'O método de estudo proposto pelo autor', 'Retórica e erística: Schopenhauer comentado', 'A teoria dos quatro discursos', 'Filosofia da cultura', 'A filosofia e seu inverso', 'O Jardim das Aflições: tese e fontes', 'Dialética simbólica', 'Pensamento brasileiro', 'Comparação com os autores estudados', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Análise crítica de uma tese', 'Prova do módulo'] },
  { id: 'm13', n: 13, titulo: 'Ética, política, direito e cultura', semanas: '8–10', degrau: 12, prereq: ['m10'],
    descricao: 'Virtudes, felicidade, lei natural, justiça, liberdade, Estado, autoridade, bem comum.',
    objetivos: ['Aplicar teorias éticas a casos', 'Comparar teorias de justiça e autoridade'],
    aulas: A(['Felicidade e virtude revisitadas', 'Lei natural', 'Justiça', 'Liberdade e autoridade', 'Estado e bem comum', 'Direito e moral', 'Cultura e responsabilidade', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Trabalho comparativo (três autores)'] },
  { id: 'm14', n: 14, titulo: 'Tradições filosóficas comparadas', semanas: '6–8', degrau: 12, prereq: ['m8'],
    descricao: 'Introdução às tradições indianas, chinesas, judaicas e islâmicas, reconhecendo sua diversidade interna.',
    objetivos: ['Apresentar perguntas fundamentais de cada tradição sem generalizações', 'Relacionar falsafa e filosofia judaica medieval com a escolástica'],
    aulas: A(['Por que comparar tradições?', 'Tradições indianas: um panorama plural', 'Tradições chinesas: confucionismo e daoísmo', 'Filosofia judaica: Maimônides', 'Falsafa: Avicena e Averróis', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm15', n: 15, titulo: 'Filosofia da mente, linguagem, estética e síntese', semanas: '6–8', degrau: 12, prereq: ['m10'],
    descricao: 'Consciência, mente e corpo, linguagem, interpretação, arte e experiência estética.',
    objetivos: ['Expor o problema mente-corpo', 'Explicar teorias do significado', 'Discutir o belo'],
    aulas: A(['O problema mente-corpo', 'Consciência', 'Linguagem e significado', 'Interpretação', 'O belo e a arte', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm16', n: 16, titulo: 'Projeto de formação intelectual', semanas: '8–12', degrau: 13, prereq: ['m13'],
    descricao: 'Revisão, leitura de fontes originais, ensaio final sobre uma grande questão e plano de estudos avançados.',
    objetivos: ['Formular uma pergunta filosófica', 'Reconstruir três argumentos de fontes primárias', 'Concluir com justificação'],
    aulas: A(['Escolher a pergunta', 'Definir conceitos e contexto', 'Fontes primárias', 'Reconstruir argumentos', 'Objeções e comparação', 'Redação do ensaio', 'Avaliação final', 'Plano de estudos avançados']),
    criterios: ['Projeto final completo conforme a rubrica'] },
].map((m) => ({ ...m, aulas: m.aulas.map((a) => ({ ...a, id: a.id || `${m.id}-${a.n}` })) }));

export const moduloPorId = Object.fromEntries(MODULOS.map((m) => [m.id, m]));

export const todasAulas = MODULOS.flatMap((m) => m.aulas.map((a) => ({ ...a, modulo: m.id, degrau: m.degrau })));

export const DEGRAUS = DEGRAUS_BASE.map((d) => {
  const aulas = todasAulas.filter((a) => a.degrau === d.n);
  return {
    ...d,
    aulas,
    modulos: [...new Set(aulas.map((a) => a.modulo))],
    leituras: livrosDoDegrau(d.n),
    competenciasAvancadas: COMPETENCIAS_AVANCADAS[d.n],
  };
});

const INTRODUTORIAS = new Set(Object.values(INTRODUCOES).flatMap((d) => Object.values(d).flat()));

/**
 * Sequência de estudo de um degrau, como o Mapa a mostra: aulas introdutórias, cada uma antes da
 * obra que prepara; depois os livros; por fim as demais aulas dos módulos do degrau.
 * @returns {{ tipo: 'aula'|'livro', id: string }[]}
 */
export function sequenciaDegrau(d) {
  const intro = INTRODUCOES[d.n] || {};
  const aula = (id) => ({ tipo: 'aula', id });
  const itens = [...(intro['^'] || []).map(aula)];
  const usados = new Set();
  for (const id of d.leituras) {
    const l = LIVROS.find((x) => x.id === id);
    for (const ancora of [id, `@${l.obraDe}`]) {
      if (intro[ancora] && !usados.has(ancora)) { usados.add(ancora); itens.push(...intro[ancora].map(aula)); }
    }
    itens.push({ tipo: 'livro', id });
  }
  const demais = d.aulas.filter((a) => !INTRODUTORIAS.has(a.id));
  return [...itens, ...demais.map((a) => aula(a.id))];
}
