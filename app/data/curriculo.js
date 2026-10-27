// Mapa curricular: degraus da escada e módulos do curso.
// As aulas completas ficam em data/aulas/*.js; aqui só a estrutura (títulos, ordem, pré-requisitos).
import { LIVROS } from './livros.js';
import { INTRODUCOES } from './obras/index.js';

const COMPETENCIAS_AVANCADAS = COMPETENCIAS_AVANCADAS_();
const livrosDoDegrau = (n) =>
  LIVROS.filter((l) => l.degrau === n).sort((a, b) => a.ordem - b.ordem).map((l) => l.id);

export const DEGRAUS = [
  { n: 0, nome: 'Aprender a estudar', objetivo: 'Criar hábitos de leitura ativa, definir termos e registrar argumentos.',
    modulos: ['m3'], prereq: [],
    competencias: ['Resumir um capítulo com fidelidade', 'Definir os termos importantes de um texto', 'Identificar a pergunta central de um texto'] },
  { n: 1, nome: 'Bíblia e fundamentos da fé católica', objetivo: 'Conhecer a base religiosa do curso e o vocabulário teológico essencial.',
    modulos: ['m1', 'm2'], prereq: [0],
    competencias: ['Explicar os artigos fundamentais do Credo', 'Distinguir Escritura, Tradição e Magistério segundo a doutrina católica', 'Usar o Catecismo por referência cruzada'] },
  { n: 2, nome: 'Fé, razão e introdução filosófica', objetivo: 'Entender a relação entre a base teológica e o pensamento filosófico.',
    modulos: ['m3'], prereq: [1],
    competencias: ['Identificar a pergunta filosófica de um diálogo', 'Apresentar as razões de cada posição com clareza', 'Distinguir compreender uma tese de aceitá-la'] },
  { n: 3, nome: 'Lógica e argumentação', objetivo: 'Examinar argumentos antes de estudar sistemas complexos.',
    modulos: ['m4'], prereq: [2],
    competencias: ['Reconstruir um argumento simples em premissas e conclusão', 'Avaliar validade independentemente da verdade', 'Identificar ao menos cinco falácias em exemplos concretos'] },
  { n: 4, nome: 'Filosofia antiga', objetivo: 'Entrar nos grandes problemas da tradição clássica.',
    modulos: ['m5'], prereq: [3],
    competencias: ['Comparar Platão e Aristóteles sobre conhecimento', 'Comparar Platão e Aristóteles sobre realidade', 'Comparar Platão e Aristóteles sobre a vida boa, com argumentos de ambos'] },
  { n: 5, nome: 'Conhecimento, metafísica e filosofia da religião', objetivo: 'Aprofundar as perguntas sobre o que existe e como podemos conhecê-lo.',
    modulos: ['m6', 'm7'], prereq: [4],
    competencias: ['Explicar os principais termos metafísicos', 'Reconstruir dois argumentos sobre a existência de Deus', 'Apresentar as objeções a esses argumentos e seus limites'] },
  { n: 6, nome: 'Patrística, filosofia cristã e escolástica', objetivo: 'Conhecer como os pensadores cristãos articularam fé e razão.',
    modulos: ['m8'], prereq: [5],
    competencias: ['Explicar o problema filosófico de cada obra estudada', 'Distinguir o argumento do autor da doutrina oficial da Igreja'] },
  { n: 7, nome: 'Filosofia moderna', objetivo: 'Compreender as transformações da filosofia na modernidade.',
    modulos: ['m9'], prereq: [6],
    competencias: ['Comparar Descartes, Hume e Kant sobre o conhecimento', 'Explicar o problema que cada um procura resolver'] },
  { n: 8, nome: 'Filosofia dos séculos XIX e XX', objetivo: 'Compreender correntes que modificaram filosofia, política, religião e cultura.',
    modulos: ['m10'], prereq: [7],
    competencias: ['Explicar as teses centrais de ao menos quatro correntes', 'Compará-las com a tradição clássica'] },
  { n: 9, nome: 'Mário Ferreira dos Santos', objetivo: 'Estudar sua filosofia sistemática com as ferramentas necessárias.',
    modulos: ['m11'], prereq: [3, 4, 5],
    nota: 'Ordem pedagógica recomendada para um iniciante já preparado; não é a única ordem possível nem a ordem de publicação da coleção.',
    competencias: ['Reconstruir teses da Filosofia Concreta com suas demonstrações', 'Comparar conceitos do autor com Platão, Aristóteles e Tomás'] },
  { n: 10, nome: 'Olavo de Carvalho', objetivo: 'Conhecer método, interpretações históricas e teses do autor sem confundir sua perspectiva com consenso acadêmico.',
    modulos: ['m12'], prereq: [3, 4],
    competencias: ['Expor uma tese do autor com o argumento que a sustenta', 'Indicar fontes primárias, interpretações alternativas e objeções', 'Classificar elementos como confirmados, controversos ou insuficientemente fundamentados'] },
  { n: 11, nome: 'Ética, política e síntese filosófica', objetivo: 'Aplicar o conhecimento adquirido a problemas humanos concretos.',
    modulos: ['m13', 'm14', 'm15'], prereq: [8],
    retomar: ['aristoteles-etica', 'suma-i-ii', 'rousseau-contrato', 'marx-manifesto', 'macintyre-virtude'],
    competencias: ['Produzir trabalho comparando ao menos três autores', 'Examinar objeções e justificar a conclusão mais bem sustentada'] },
  { n: 12, nome: 'Projeto de conclusão', objetivo: 'Investigar uma grande questão filosófica e produzir uma conclusão fundamentada.',
    modulos: ['m16'], prereq: [11],
    competencias: ['Formular a pergunta e definir os conceitos', 'Reconstruir três argumentos a partir de fontes primárias', 'Apresentar objeções, comparar autores e concluir com bibliografia verificável'] },
].map((d) => ({
  ...d,
  leituras: livrosDoDegrau(d.n),
  competenciasAvancadas: COMPETENCIAS_AVANCADAS[d.n],
}));

/** Nível avançado: o que distingue quem domina o debate de quem apenas entende o autor. */
function COMPETENCIAS_AVANCADAS_() {
  return {
    0: ['Fazer a leitura analítica completa de um livro de mais de 200 páginas, com ficha por capítulo', 'Desenhar o mapa de argumentos de um capítulo difícil'],
    1: ['Situar uma afirmação doutrinal em seu grau de autoridade, com a fonte (CIC e Denzinger)', 'Explicar a teoria do desenvolvimento da doutrina de Newman e aplicá-la a um caso'],
    2: ['Comparar evidencialismo (Clifford), epistemologia reformada (Plantinga) e a posição do Vaticano I sobre a racionalidade da fé', 'Explicar o "sentido ilativo" de Newman e avaliá-lo'],
    3: ['Testar a validade de silogismos pelas regras e pela redução à primeira figura', 'Formalizar argumentos em lógica proposicional e de predicados simples', 'Distinguir demonstração "quia" e "propter quid" (Analíticos Posteriores)'],
    4: ['Ler um passo de Platão ou de Aristóteles identificando os termos-chave em grego', 'Reconstruir a refutação de "conhecimento é percepção" no Teeteto'],
    5: ['Formular a versão mais forte (steelman) de uma objeção de Hume ou Mackie e respondê-la', 'Distinguir séries causais ordenadas "per se" e "per accidens" e explicar por que isso importa para as vias'],
    6: ['Ler um artigo da Suma em latim com auxílio de tradução', 'Explicar a distinção real entre essência e ser e as posições de Escoto e Suárez'],
    7: ['Comparar Spinoza e Leibniz sobre necessidade e liberdade', 'Expor a ideia central da dedução transcendental e uma crítica a ela'],
    8: ['Expor a crítica de Anscombe à filosofia moral moderna', 'Comparar Popper e Kuhn sobre o que torna a ciência racional'],
    9: ['Confrontar uma tese da Filosofia Concreta com uma objeção da lógica ou da metafísica contemporânea'],
    10: ['Rastrear as fontes de uma tese de Olavo de Carvalho (Aristóteles, Voegelin, Lavelle, tradicionalistas) e avaliar o que é próprio do autor'],
    11: ['Comparar Finnis, Strauss e Rawls sobre o fundamento da justiça', 'Aplicar as três posições a um caso jurídico concreto'],
    12: ['Defender o projeto oralmente diante de objeções (debate simulado, gravado ou com um interlocutor)', 'Avaliar um ensaio alheio pela rubrica e justificar a avaliação'],
  };
}

const A = (titulos) => titulos.map((t, i) => ({ n: i + 1, titulo: t }));

export const MODULOS = [
  { id: 'm1', n: 1, titulo: 'Fundamentos da teologia católica', semanas: '6–8', degrau: 1, prereq: [],
    descricao: 'O vocabulário e a estrutura da fé católica: o que é teologia, como Deus se revela, como a Revelação é transmitida e como o Credo organiza a fé.',
    objetivos: ['Definir teologia e distingui-la da filosofia', 'Explicar Revelação, fé e razão segundo o Catecismo', 'Distinguir Escritura, Tradição e Magistério', 'Usar o Catecismo e o Compêndio com referências', 'Explicar os artigos do Credo'],
    aulas: A(['O que é teologia?', 'Fé, Revelação e razão', 'Bíblia, Tradição e Magistério', 'Como ler o Catecismo', 'O Credo e os fundamentos da fé', 'Deus e o conhecimento natural', 'Jesus Cristo e a Revelação cristã', 'Criação, ser humano, pecado e graça', 'Igreja e sacramentos', 'Moral cristã e vida eterna', 'Revisão geral', 'Avaliação do módulo']),
    criterios: ['Concluir as aulas com nota mínima de 70% nos questionários', 'Responder às questões discursivas', 'Aprovação na prova do módulo (mínimo 70%)'] },
  { id: 'm2', n: 2, titulo: 'Bíblia, história cristã e pensamento patrístico', semanas: '6–8', degrau: 1, prereq: ['m1'],
    descricao: 'A Escritura em seu contexto, a formação da doutrina, os primeiros concílios e os Padres da Igreja até Agostinho.',
    objetivos: ['Situar os livros bíblicos no tempo', 'Explicar a formação do cânon e dos primeiros credos', 'Apresentar os Padres da Igreja e seu diálogo com o pensamento grego'],
    aulas: A(['Como ler a Escritura: sentidos e gêneros literários', 'O contexto histórico de Israel e do Novo Testamento', 'A formação do cânon', 'A Igreja nascente e as perseguições', 'Os primeiros concílios: Niceia e Constantinopla', 'Calcedônia e a cristologia', 'Padres apostólicos e apologistas', 'Os Padres e a filosofia grega', 'Santo Agostinho: vida e conversão', 'Agostinho: liberdade, mal e interioridade', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm3', n: 3, titulo: 'Introdução à filosofia', semanas: '6–8', degrau: 2, prereq: [],
    descricao: 'Como ler textos difíceis, a origem da filosofia, opinião e conhecimento, verdade e os primeiros diálogos de Platão.',
    objetivos: ['Praticar leitura ativa', 'Distinguir opinião, crença e conhecimento', 'Identificar problemas filosóficos', 'Ler Apologia, Críton e Eutífron com método'],
    aulas: A(['Como ler textos filosóficos: leitura ativa', 'O que é filosofia?', 'Opinião, crença e conhecimento', 'O que é a verdade?', 'Sócrates e a Apologia', 'Críton: justiça e leis', 'Eutífron: em busca de uma definição', 'Fé e razão: Fides et Ratio', 'Escolas e métodos filosóficos', 'Avaliação do módulo']),
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
  { id: 'm6', n: 6, titulo: 'Epistemologia e filosofia da ciência', semanas: '6–8', degrau: 5, prereq: ['m5'],
    descricao: 'Crença, conhecimento, justificação, ceticismo, percepção, indução e método científico.',
    objetivos: ['Definir conhecimento e justificação', 'Avaliar argumentos céticos', 'Explicar o problema da indução'],
    aulas: A(['Crença verdadeira justificada', 'Ceticismo e respostas', 'Percepção e realismo', 'Razão e experiência', 'Indução e causalidade', 'Método científico', 'Limites do conhecimento', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm7', n: 7, titulo: 'Metafísica e filosofia da religião', semanas: '8–10', degrau: 5, prereq: ['m5'],
    descricao: 'Ser, essência, substância, ato e potência, causalidade, argumentos sobre Deus e problema do mal.',
    objetivos: ['Explicar o vocabulário metafísico', 'Reconstruir argumentos cosmológico, ontológico e teleológico', 'Avaliar objeções e o problema do mal'],
    aulas: A(['O que é metafísica?', 'Ser, ente e existência', 'Essência e existência em Tomás', 'Substância e acidente', 'Ato e potência', 'Causalidade', 'As cinco vias', 'O argumento ontológico e suas críticas', 'O argumento teleológico', 'O problema do mal', 'Críticas filosóficas à religião', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Reconstrução de dois argumentos com objeções', 'Prova do módulo'] },
  { id: 'm8', n: 8, titulo: 'Filosofia medieval e escolástica', semanas: '10–12', degrau: 6, prereq: ['m7'],
    descricao: 'Agostinho, Boécio, Anselmo, Tomás de Aquino, universais, lei natural e virtudes.',
    objetivos: ['Explicar a síntese medieval entre fé e razão', 'Ler artigos da Suma com seu método', 'Explicar a lei natural'],
    aulas: A(['Confissões: o mal e o tempo', 'O livre-arbítrio', 'Boécio: providência e eternidade', 'Anselmo: fé que busca compreender', 'O método escolástico', 'A querela dos universais', 'Como ler um artigo da Suma', 'Tomás: Deus e os nomes divinos', 'Felicidade e atos humanos', 'Lei e lei natural', 'Virtudes', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm9', n: 9, titulo: 'Filosofia moderna', semanas: '10–12', degrau: 7, prereq: ['m8'],
    descricao: 'Descartes, Pascal, Locke, Hume, Rousseau e Kant.',
    objetivos: ['Distinguir racionalismo e empirismo', 'Explicar a crítica de Hume', 'Explicar a resposta de Kant'],
    aulas: A(['Descartes: o método', 'Descartes: as Meditações', 'Pascal', 'Locke e a origem das ideias', 'Hume: impressões, ideias e causalidade', 'Rousseau e o contrato social', 'Kant: o problema crítico', 'Kant: a moral do dever', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm10', n: 10, titulo: 'Filosofia contemporânea', semanas: '10–12', degrau: 8, prereq: ['m9'],
    descricao: 'Hegel, Marx, Kierkegaard, Nietzsche, existencialismo, fenomenologia, positivismo, filosofia analítica.',
    objetivos: ['Expor as teses centrais de cada corrente', 'Comparar com a tradição clássica'],
    aulas: A(['Hegel e o idealismo alemão', 'Marx e o materialismo histórico', 'Kierkegaard: fé e existência', 'Nietzsche: genealogia e crítica', 'Fenomenologia', 'Existencialismo', 'Positivismo', 'Popper e a filosofia da ciência', 'Wittgenstein e a linguagem', 'MacIntyre e a ética das virtudes', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm11', n: 11, titulo: 'Mário Ferreira dos Santos', semanas: '12–16', degrau: 9, prereq: ['m4', 'm5', 'm7'],
    descricao: 'Filosofia concreta, lógica, conhecimento, ontologia, cosmologia, dialética e filosofia dos valores.',
    objetivos: ['Reconstruir teses da Filosofia Concreta', 'Comparar com Platão, Aristóteles e Tomás'],
    aulas: A(['Vida, obra e contexto', 'Filosofia e cosmovisão', 'Lógica e dialéctica', 'Teoria do conhecimento', 'Ontologia e cosmologia', 'Filosofia Concreta: método das teses', 'Filosofia Concreta: teses fundamentais', 'Filosofia dos valores', 'O Um e o Múltiplo', 'Simbólica e crise', 'Teologia e noologia', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Roteiro de leitura de cada livro', 'Prova do módulo'] },
  { id: 'm12', n: 12, titulo: 'Olavo de Carvalho', semanas: '10–12', degrau: 10, prereq: ['m4', 'm5'],
    descricao: 'Método filosófico, história das ideias, teoria dos quatro discursos, interpretação cultural e retórica, sempre com tese, argumento, fontes, alternativas e objeções.',
    objetivos: ['Expor teses do autor com seus argumentos', 'Confrontá-las com fontes primárias e leituras alternativas', 'Classificar afirmações por grau de fundamentação'],
    aulas: A(['Vida, obra e contexto', 'O método de estudo proposto pelo autor', 'Retórica e erística: Schopenhauer comentado', 'A teoria dos quatro discursos', 'Filosofia da cultura', 'A filosofia e seu inverso', 'O Jardim das Aflições: tese e fontes', 'Dialética simbólica', 'Pensamento brasileiro', 'Comparação com os autores estudados', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Análise crítica de uma tese', 'Prova do módulo'] },
  { id: 'm13', n: 13, titulo: 'Ética, política, direito e cultura', semanas: '8–10', degrau: 11, prereq: ['m10'],
    descricao: 'Virtudes, felicidade, lei natural, justiça, liberdade, Estado, autoridade, bem comum.',
    objetivos: ['Aplicar teorias éticas a casos', 'Comparar teorias de justiça e autoridade'],
    aulas: A(['Felicidade e virtude revisitadas', 'Lei natural', 'Justiça', 'Liberdade e autoridade', 'Estado e bem comum', 'Direito e moral', 'Cultura e responsabilidade', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Trabalho comparativo (três autores)'] },
  { id: 'm14', n: 14, titulo: 'Tradições filosóficas comparadas', semanas: '6–8', degrau: 11, prereq: ['m8'],
    descricao: 'Introdução às tradições indianas, chinesas, judaicas e islâmicas, reconhecendo sua diversidade interna.',
    objetivos: ['Apresentar perguntas fundamentais de cada tradição sem generalizações', 'Relacionar falsafa e filosofia judaica medieval com a escolástica'],
    aulas: A(['Por que comparar tradições?', 'Tradições indianas: um panorama plural', 'Tradições chinesas: confucionismo e daoísmo', 'Filosofia judaica: Maimônides', 'Falsafa: Avicena e Averróis', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm15', n: 15, titulo: 'Filosofia da mente, linguagem, estética e síntese', semanas: '6–8', degrau: 11, prereq: ['m10'],
    descricao: 'Consciência, mente e corpo, linguagem, interpretação, arte e experiência estética.',
    objetivos: ['Expor o problema mente-corpo', 'Explicar teorias do significado', 'Discutir o belo'],
    aulas: A(['O problema mente-corpo', 'Consciência', 'Linguagem e significado', 'Interpretação', 'O belo e a arte', 'Avaliação do módulo']),
    criterios: ['Aulas concluídas', 'Prova do módulo'] },
  { id: 'm16', n: 16, titulo: 'Projeto de formação intelectual', semanas: '8–12', degrau: 12, prereq: ['m13'],
    descricao: 'Revisão, leitura de fontes originais, ensaio final sobre uma grande questão e plano de estudos avançados.',
    objetivos: ['Formular uma pergunta filosófica', 'Reconstruir três argumentos de fontes primárias', 'Concluir com justificação'],
    aulas: A(['Escolher a pergunta', 'Definir conceitos e contexto', 'Fontes primárias', 'Reconstruir argumentos', 'Objeções e comparação', 'Redação do ensaio', 'Avaliação final', 'Plano de estudos avançados']),
    criterios: ['Projeto final completo conforme a rubrica'] },
].map((m) => ({ ...m, aulas: m.aulas.map((a) => ({ ...a, id: `${m.id}-${a.n}` })) }));

export const moduloPorId = Object.fromEntries(MODULOS.map((m) => [m.id, m]));
export const todasAulas = MODULOS.flatMap((m) => m.aulas.map((a) => ({ ...a, modulo: m.id })));

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
  const demais = MODULOS.filter((m) => m.degrau === d.n).flatMap((m) => m.aulas).filter((a) => !INTRODUTORIAS.has(a.id));
  return [...itens, ...demais.map((a) => aula(a.id))];
}
