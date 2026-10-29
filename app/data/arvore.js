// Árvore do conhecimento (aba Mapa). Representa a orientação pedagógica do curso — a formação parte da
// Teologia Católica e tem a Filosofia como eixo de investigação — e as relações entre os campos.
// NÃO afirma que as demais ciências derivem metodologicamente da Teologia ou da Filosofia: cada área
// tem objeto e método próprios (a descrição de cada ramo o diz).
//
// Nó: { id, nome, pai, grupo, desc, percurso, livros, areas, autores, modulos, aulas, degraus }
//   livros/areas/autores/modulos/aulas ligam o nó ao conteúdo real do curso (para progresso e links);
//   percurso: false marca disciplina cujo percurso próprio ainda não foi escrito ("em preparação").
// Relação: { de, para, tipo, porque } com tipo em TIPOS_RELACAO; a hierarquia vem de `pai`.

export const GRUPOS = {
  teologia: 'Teologia Católica',
  filosofia: 'Filosofia',
  humanas: 'Ciências Humanas e Sociais',
  formais: 'Ciências Formais',
  naturais: 'Ciências Naturais',
  simbolos: 'Simbologia, Semiótica e Simbolismo',
  artes: 'Artes e Humanidades',
};

export const TIPOS_RELACAO = {
  hierarquia: 'Hierarquia (ramo e sub-ramo)',
  prerequisito: 'Pré-requisito de aprendizagem',
  historica: 'Relação histórica',
  conceitual: 'Relação conceitual',
  interdisciplinar: 'Conexão interdisciplinar',
};

const N = (id, nome, pai, grupo, desc, ligado = {}) => ({ id, nome, pai, grupo, desc, percurso: true, livros: [], areas: [], autores: [], modulos: [], aulas: [], degraus: [], ...ligado });
const P = (id, nome, pai, grupo, desc, ligado = {}) => ({ ...N(id, nome, pai, grupo, desc, ligado), percurso: false });

export const NOS = [
  // ---------- Raiz e Teologia ----------
  N('teologia', 'Teologia Católica', null, 'teologia', 'Origem formativa do curso: a fé da Igreja, recebida na Escritura e na Tradição e interpretada pelo Magistério, estudada com método próprio.', { degraus: [1], modulos: ['m1'] }),
  N('preparacao', 'Preparação intelectual', 'teologia', 'filosofia', 'Leitura ativa, fichamento, vocabulário e pesquisa: as ferramentas que todas as áreas pressupõem.', { degraus: [0], areas: ['Método de estudo', 'Referência'], aulas: ['m3-1'] }),
  N('escritura', 'Sagrada Escritura', 'teologia', 'teologia', 'Os livros bíblicos, seus gêneros literários e o contexto histórico de Israel e da Igreja nascente.', { areas: ['Bíblia', 'Comentário bíblico'], aulas: ['m2-1', 'm2-2', 'm2-3'] }),
  N('revelacao', 'Revelação', 'teologia', 'teologia', 'Como Deus se dá a conhecer, e como a Revelação se transmite pela Escritura e pela Tradição.', { livros: ['dei-verbum'], aulas: ['m1-2', 'm1-3'] }),
  N('teol-fundamental', 'Teologia fundamental', 'teologia', 'teologia', 'O que é a teologia, a credibilidade da fé e o desenvolvimento da doutrina.', { livros: ['ratzinger-introducao', 'newman-desenvolvimento'], aulas: ['m1-1'] }),
  N('credo', 'Credo', 'teologia', 'teologia', 'Os artigos da fé professados pela Igreja.', { livros: ['compendio-cic', 'cic'], aulas: ['m1-4', 'm1-5'] }),
  N('teol-dogmatica', 'Teologia dogmática', 'teologia', 'teologia', 'O conjunto ordenado das verdades da fé e seus graus de autoridade.', { livros: ['denzinger', 'suma-i'], areas: ['Doutrina', 'Teologia'] }),
  N('trindade', 'Santíssima Trindade', 'teol-dogmatica', 'teologia', 'Um só Deus em três Pessoas: a doutrina e sua elaboração pelos Padres e escolásticos.', { livros: ['agostinho-trindade', 'boecio-opuscula'] }),
  N('cristologia', 'Cristologia', 'teol-dogmatica', 'teologia', 'Jesus Cristo, verdadeiro Deus e verdadeiro homem, e a obra da redenção.', { livros: ['anselmo-cur-deus', 'suma-iii'], aulas: ['m1-7', 'm2-6'] }),
  N('eclesiologia', 'Eclesiologia', 'teol-dogmatica', 'teologia', 'A Igreja: natureza, missão e estrutura.', { aulas: ['m1-9'] }),
  N('sacramentos', 'Sacramentos', 'teol-dogmatica', 'teologia', 'Os sete sacramentos e a vida litúrgica.', { aulas: ['m1-9'] }),
  N('escatologia', 'Escatologia', 'teol-dogmatica', 'teologia', 'A vida eterna e o fim da história.', { aulas: ['m1-10'] }),
  N('teol-moral', 'Teologia moral', 'teologia', 'teologia', 'A vida em Cristo: lei, graça, virtudes e consciência.', { livros: ['suma-ii-ii', 'jp2-veritatis'], areas: ['Doutrina / Ética', 'Ética / Teologia moral'], aulas: ['m1-8', 'm1-10'] }),
  N('patristica', 'Patrística', 'teologia', 'teologia', 'Os Padres da Igreja e a formação do pensamento cristão, em diálogo com a filosofia grega.', { degraus: [2], modulos: ['m2b'], areas: ['Patrística'], autores: ['agostinho', 'boecio'] }),
  N('historia-igreja', 'História da Igreja', 'teologia', 'teologia', 'Da Igreja nascente aos concílios, com crítica das fontes históricas.', { aulas: ['m2-4', 'm2-5', 'm2-6'] }),
  N('fe-razao', 'Fé e razão', 'teologia', 'teologia', 'A relação entre o que se crê e o que a razão pode alcançar.', { livros: ['fides-et-ratio'], areas: ['Doutrina / Fé e razão', 'Epistemologia da fé'], aulas: ['m1-2', 'm3-8'] }),

  // ---------- Filosofia ----------
  N('filosofia', 'Filosofia', 'teologia', 'filosofia', 'Eixo de investigação do curso: busca racional das causas e princípios, com método próprio e autônomo em seu domínio. Começa na fase multidisciplinar, depois da fase teológica.', { modulos: ['m3'], degraus: [3] }),
  N('intro-filosofia', 'Introdução à Filosofia', 'filosofia', 'filosofia', 'O que é filosofia, a verdade, o conhecimento e os primeiros diálogos socráticos.', { degraus: [3], areas: ['Introdução à filosofia'], autores: ['socrates'] }),
  N('historia-filosofia', 'História da Filosofia', 'filosofia', 'filosofia', 'Os grandes períodos do pensamento filosófico, lidos nas fontes.', { areas: ['História da filosofia'] }),
  N('filo-antiga', 'Filosofia antiga', 'historia-filosofia', 'filosofia', 'Pré-socráticos, Sócrates, Platão, Aristóteles e as escolas helenísticas.', { degraus: [5], modulos: ['m5'], areas: ['Filosofia antiga', 'Ética helenística'] }),
  N('filo-medieval', 'Filosofia medieval e escolástica', 'historia-filosofia', 'filosofia', 'Anselmo, os universais, Tomás de Aquino e a síntese escolástica.', { degraus: [7], modulos: ['m8'], areas: ['Filosofia medieval', 'Filosofia medieval / Teologia', 'Comentário a Aristóteles', 'Tomismo do século XX'] }),
  N('filo-moderna', 'Filosofia moderna', 'historia-filosofia', 'filosofia', 'Descartes, Pascal, Locke, Hume, Rousseau e Kant.', { degraus: [8], modulos: ['m9'], areas: ['Filosofia moderna'] }),
  N('filo-contemporanea', 'Filosofia contemporânea', 'historia-filosofia', 'filosofia', 'Hegel, Marx, Kierkegaard, Nietzsche, fenomenologia, existencialismo e filosofia analítica.', { degraus: [9], modulos: ['m10'], areas: ['Filosofia contemporânea', 'Fenomenologia'] }),
  N('logica', 'Lógica', 'filosofia', 'filosofia', 'Conceitos, proposições, silogismo, falácias, dialética e retórica.', { degraus: [4], modulos: ['m4'], areas: ['Lógica', 'Lógica / Dialética', 'Lógica / Epistemologia'] }),
  N('epistemologia', 'Epistemologia', 'filosofia', 'filosofia', 'Conhecimento, justificação, ceticismo e limites do saber.', { modulos: ['m6'], areas: ['Epistemologia', 'Metafísica / Epistemologia'] }),
  N('metafisica', 'Metafísica e ontologia', 'filosofia', 'filosofia', 'Ser, essência, substância, ato e potência, causalidade.', { degraus: [6], areas: ['Metafísica', 'Teologia / Metafísica'], aulas: ['m7-1', 'm7-2', 'm7-3', 'm7-4', 'm7-5', 'm7-6'] }),
  N('filo-natureza', 'Filosofia da natureza', 'filosofia', 'filosofia', 'Mudança, matéria e forma, tempo e finalidade na natureza.', { livros: ['aristoteles-fisica', 'aristoteles-fisica-ii', 'tomas-principios-natureza'], areas: ['Filosofia da natureza'] }),
  N('filo-ciencia', 'Filosofia da ciência', 'filosofia', 'filosofia', 'Indução, método científico, demarcação e revoluções científicas.', { areas: ['Filosofia da ciência'], aulas: ['m6-5', 'm6-6', 'm6-7', 'm10-8'] }),
  N('filo-religiao', 'Filosofia da religião', 'filosofia', 'filosofia', 'Argumentos sobre Deus, o problema do mal e as críticas à religião.', { areas: ['Filosofia da religião', 'Teologia natural'], aulas: ['m7-7', 'm7-8', 'm7-9', 'm7-10', 'm7-11'] }),
  N('antropologia-filosofica', 'Antropologia filosófica', 'filosofia', 'filosofia', 'A pessoa humana: alma, corpo, inteligência e liberdade.', { livros: ['aristoteles-alma', 'tomas-alma', 'jp2-pessoa-acao'] }),
  N('etica', 'Ética', 'filosofia', 'filosofia', 'Felicidade, virtudes, lei natural e a ação humana.', { degraus: [12], modulos: ['m13'], areas: ['Ética'] }),
  N('filo-politica', 'Filosofia política', 'filosofia', 'filosofia', 'Justiça, autoridade, Estado e bem comum.', { areas: ['Filosofia política'], aulas: ['m13-3', 'm13-4', 'm13-5'] }),
  N('filo-direito', 'Filosofia do direito', 'filosofia', 'filosofia', 'Direito natural e positivo, lei injusta e fundamento do direito.', { livros: ['finnis-lei-natural', 'strauss-direito-natural'], areas: ['Filosofia do direito'], aulas: ['m13-6'] }),
  N('estetica', 'Estética', 'filosofia', 'filosofia', 'O belo, a arte e a experiência estética.', { areas: ['Estética'], aulas: ['m15-5'] }),
  N('filo-linguagem', 'Filosofia da linguagem', 'filosofia', 'filosofia', 'Significado, referência, uso e interpretação.', { areas: ['Filosofia da linguagem'], aulas: ['m15-3', 'm15-4'] }),
  N('filo-mente', 'Filosofia da mente', 'filosofia', 'filosofia', 'O problema mente-corpo e a consciência.', { aulas: ['m15-1', 'm15-2'] }),
  N('filo-brasileira', 'Filosofia brasileira', 'filosofia', 'filosofia', 'Pensadores brasileiros estudados depois dos clássicos e das grandes correntes.', {}),
  N('mfs', 'Mário Ferreira dos Santos', 'filo-brasileira', 'filosofia', 'Filosofia concreta, lógica e dialética, ontologia, valores, simbólica e noologia.', { degraus: [10], modulos: ['m11'], autores: ['mfs'] }),
  N('olavo', 'Olavo de Carvalho', 'filo-brasileira', 'filosofia', 'Método, teoria dos quatro discursos, filosofia da cultura e crítica intelectual, lidos com distinção entre tese, fato e interpretação.', { degraus: [11], modulos: ['m12'], autores: ['olavo'] }),
  N('tradicoes-comparadas', 'Tradições comparadas', 'filosofia', 'filosofia', 'Tradições judaica, islâmica, indiana e chinesa, com contexto histórico.', { modulos: ['m14'] }),
  N('sintese', 'Síntese e investigação', 'filosofia', 'filosofia', 'Formular uma questão, investigar fontes primárias e defender uma conclusão fundamentada.', { degraus: [13], modulos: ['m16'] }),

  // ---------- Ciências Humanas e Sociais ----------
  N('humanas', 'Ciências Humanas e Sociais', 'filosofia', 'humanas', 'Estudam a ação humana, a sociedade e a história com métodos próprios: crítica de fontes, pesquisa empírica, modelos e dados.', {}),
  N('historia', 'História', 'humanas', 'humanas', 'Fontes e crítica documental, historiografia e as grandes épocas, com a formação do Brasil no contexto mundial.', { modulos: ['h1', 'h2', 'h3', 'h4', 'h5'], livros: ['tocqueville-democracia', 'hegel-historia', 'voegelin-ordem', 'agostinho-cidade', 'hume-historia', 'aristoteles-constituicao-atenas'], areas: ['História da cultura', 'Filosofia da história'] }),
  P('geografia', 'Geografia', 'humanas', 'humanas', 'Pensamento geográfico, cartografia, geografia física e humana, território e regiões, do mundo ao Brasil.', { modulos: ['g1', 'g2'] }),
  P('sociologia', 'Sociologia', 'humanas', 'humanas', 'Conceitos e teorias da vida social (Marx, Durkheim, Weber), métodos e a formação social brasileira.', { livros: ['mfs-sociologia-etica', 'mfs-temas-sociais'] }),
  N('economia', 'Economia', 'humanas', 'humanas', 'Escassez, mercados, moeda, crescimento e história do pensamento econômico, com dados e modelos.', { modulos: ['e1', 'e2', 'e3', 'e4', 'e5'], livros: ['marx-capital-i', 'marx-grundrisse', 'mfs-economia', 'locke-outros', 'tomas-compra-venda', 'jp2-centesimus'] }),
  P('ciencia-politica', 'Ciência Política', 'humanas', 'humanas', 'Estado, poder, instituições e formas de governo, estudados empírica e comparativamente.', { livros: ['aristoteles-politica', 'tocqueville-democracia', 'arendt-condicao', 'burke-reflexoes', 'maritain-homem-estado'] }),
  P('direito', 'Direito', 'humanas', 'humanas', 'Direito positivo, constitucionalismo e o sistema jurídico brasileiro, com fontes oficiais atualizadas.', { livros: ['kant-metafisica-costumes', 'hegel-direito'] }),
  P('antropologia', 'Antropologia', 'humanas', 'humanas', 'Cultura, parentesco, religião e método etnográfico.', {}),
  P('psicologia', 'Psicologia', 'humanas', 'humanas', 'Processos mentais, comportamento e desenvolvimento, com método científico.', { livros: ['mfs-psicologia', 'descartes-paixoes', 'sartre-emocoes', 'wittgenstein-psicologia'] }),
  P('demografia', 'Demografia', 'humanas', 'humanas', 'População, natalidade, mortalidade e migrações.', {}),
  P('relacoes-internacionais', 'Relações Internacionais', 'humanas', 'humanas', 'Política internacional, geopolítica e a posição do Brasil no mundo.', { livros: ['kant-paz', 'olavo-dugin'] }),
  P('educacao', 'Educação', 'humanas', 'humanas', 'Teorias e história da educação.', { livros: ['rousseau-emilio', 'locke-educacao', 'maritain-educacao', 'agostinho-mestre'] }),

  // ---------- Ciências Formais e Naturais ----------
  N('formais', 'Ciências Formais', 'filosofia', 'formais', 'Matemática, lógica formal e estatística: conhecimento por demonstração e cálculo, a partir de definições e axiomas.', {}),
  P('matematica', 'Matemática', 'formais', 'formais', 'Álgebra, geometria, funções, cálculo e probabilidade.', { livros: ['boecio-quadrivio', 'pascal-triangulo'] }),
  P('logica-formal', 'Lógica formal', 'formais', 'formais', 'Lógica proposicional e de predicados, formalização e metalógica.', { livros: ['copi-logica', 'frege-sentido', 'wittgenstein-tractatus'], aulas: ['m4-8'] }),
  P('estatistica', 'Estatística', 'formais', 'formais', 'Estatística descritiva, inferência e métodos quantitativos.', {}),
  N('naturais', 'Ciências Naturais', 'filosofia', 'naturais', 'Física, química, biologia, astronomia e ciências da Terra: conhecimento por observação, experimento e medida. A filosofia da natureza não substitui seus métodos.', {}),
  P('fisica', 'Física', 'naturais', 'naturais', 'Mecânica, termodinâmica, eletromagnetismo e física moderna, com método experimental.', { livros: ['descartes-ensaios', 'aristoteles-ceu', 'kant-historia-ceu', 'kant-principios-metafisicos'] }),
  P('quimica', 'Química', 'naturais', 'naturais', 'Estrutura da matéria, ligações e reações.', {}),
  P('biologia', 'Biologia', 'naturais', 'naturais', 'Células, genética, evolução, fisiologia e ecologia.', { livros: ['aristoteles-historia-animais', 'aristoteles-partes-animais', 'aristoteles-geracao-animais', 'gilson-darwin'] }),
  P('astronomia', 'Astronomia', 'naturais', 'naturais', 'O sistema solar e o universo.', { livros: ['aristoteles-ceu'] }),
  P('ciencias-terra', 'Ciências da Terra', 'naturais', 'naturais', 'Geologia, clima e processos terrestres.', { livros: ['aristoteles-meteorologicos'] }),
  P('ciencias-ambientais', 'Ciências ambientais', 'naturais', 'naturais', 'Ecossistemas, biomas e problemas ambientais, inclusive brasileiros.', {}),

  // ---------- Artes e Humanidades ----------
  P('simbologia', 'Simbologia, Semiótica e Simbolismo', 'filosofia', 'simbolos', 'Signos e significação (semiótica), símbolos em seus contextos (simbologia), seu uso na expressão (simbolismo), e a análise de imagens (iconografia e iconologia). Ver também o Laboratório de Signos e Símbolos.', { livros: ['mfs-simbolica', 'agostinho-doutrina-crista'] }),
  N('artes', 'Artes e Humanidades', 'filosofia', 'artes', 'Linguagem, literatura, artes e cultura, com métodos de análise e interpretação próprios.', {}),
  P('linguistica', 'Linguística', 'artes', 'artes', 'Estrutura e história das línguas.', { livros: ['gilson-linguistica', 'rousseau-linguas'], areas: ['Línguas'] }),
  P('literatura', 'Literatura', 'artes', 'artes', 'Obras literárias, gêneros e crítica.', { areas: ['Literatura'], livros: ['sartre-literatura'] }),
  P('historia-arte', 'História da Arte', 'artes', 'artes', 'Arquitetura, pintura e escultura na história.', { livros: ['gilson-pintura', 'maritain-arte', 'hegel-estetica'] }),
  P('musica', 'Música', 'artes', 'artes', 'Teoria e história da música.', { livros: ['agostinho-musica', 'rousseau-musica'] }),
  P('cultura', 'Cultura', 'artes', 'artes', 'Filosofia e história da cultura.', { livros: ['mfs-cultura', 'olavo-filosofia-cultura'] }),
  N('retorica', 'Retórica', 'artes', 'artes', 'A arte do discurso persuasivo e suas relações com a dialética.', { livros: ['aristoteles-retorica', 'mfs-oratoria', 'olavo-como-vencer'], aulas: ['m4-11'] }),
  N('historia-intelectual', 'História intelectual', 'artes', 'artes', 'Como as ideias nascem, se transmitem e se transformam (ver a aba Ideias).', { areas: ['Crítica da modernidade'] }),
];

/** Relações não hierárquicas, cada uma com a razão de existir. A trilha de pré-requisitos dos degraus é acrescentada em TRILHA_RELACOES. */
const RELACOES_EXPLICITAS = [
  { de: 'teologia', para: 'filo-religiao', tipo: 'conceitual', porque: 'A teologia natural e as provas de Deus são estudadas pela filosofia da religião com argumentos de razão, sem pressupor a fé.' },
  { de: 'historia-igreja', para: 'historia', tipo: 'interdisciplinar', porque: 'A história da Igreja usa os métodos da história: fontes, crítica documental e historiografia.' },
  { de: 'patristica', para: 'filo-antiga', tipo: 'historica', porque: 'Os Padres receberam e transformaram conceitos de Platão, Aristóteles e dos estoicos.' },
  { de: 'filo-natureza', para: 'fisica', tipo: 'historica', porque: 'A física moderna nasce da filosofia da natureza, mas se separa dela pelo método matemático e experimental.' },
  { de: 'filo-ciencia', para: 'fisica', tipo: 'conceitual', porque: 'A filosofia da ciência examina o que a física faz: indução, explicação, teoria e prova.' },
  { de: 'filo-politica', para: 'ciencia-politica', tipo: 'interdisciplinar', porque: 'A filosofia pergunta o que é o governo justo; a ciência política estuda empiricamente como os governos funcionam.' },
  { de: 'etica', para: 'economia', tipo: 'conceitual', porque: 'A ética econômica avalia trocas, preços justos, trabalho e bem comum; a economia descreve e modela as escolhas.' },
  { de: 'etica', para: 'direito', tipo: 'conceitual', porque: 'A relação entre moral e direito e a questão da lei injusta ligam os dois campos.' },
  { de: 'historia', para: 'geografia', tipo: 'interdisciplinar', porque: 'Os processos históricos ocorrem num espaço; a formação territorial exige as duas disciplinas.' },
  { de: 'historia', para: 'economia', tipo: 'interdisciplinar', porque: 'A história econômica estuda produção, comércio e moeda ao longo do tempo.' },
  { de: 'sociologia', para: 'antropologia', tipo: 'interdisciplinar', porque: 'Ambas estudam a vida social; a antropologia com ênfase em cultura e etnografia.' },
  { de: 'economia', para: 'estatistica', tipo: 'interdisciplinar', porque: 'A análise econômica empírica depende de inferência estatística.' },
  { de: 'geografia', para: 'relacoes-internacionais', tipo: 'interdisciplinar', porque: 'A geopolítica relaciona espaço, recursos e poder entre Estados.' },
  { de: 'filo-linguagem', para: 'linguistica', tipo: 'interdisciplinar', porque: 'Significado e referência interessam a ambas; a linguística estuda as línguas empiricamente.' },
  { de: 'logica', para: 'logica-formal', tipo: 'prerequisito', porque: 'A lógica aristotélica e a argumentação preparam a formalização da lógica proposicional e de predicados.' },
  { de: 'logica-formal', para: 'matematica', tipo: 'conceitual', porque: 'A demonstração matemática usa a lógica formal.' },
  { de: 'logica', para: 'retorica', tipo: 'conceitual', porque: 'Os Tópicos e as Refutações ligam dialética e retórica; Aristóteles chama a retórica de "contraparte da dialética".' },
  { de: 'antropologia-filosofica', para: 'psicologia', tipo: 'historica', porque: 'O estudo da alma (Da Alma, de Aristóteles) antecede a psicologia científica, que dele se separa pelo método experimental.' },
  { de: 'estetica', para: 'historia-arte', tipo: 'conceitual', porque: 'A teoria do belo e da arte orienta a leitura das obras estudadas na história da arte.' },
  { de: 'simbologia', para: 'linguistica', tipo: 'interdisciplinar', porque: 'Saussure fundou a semiologia a partir da linguística: o signo linguístico é o modelo da teoria geral dos signos.' },
  { de: 'simbologia', para: 'historia-arte', tipo: 'interdisciplinar', porque: 'A iconografia e a iconologia (Panofsky) são métodos da história da arte para identificar e interpretar o que as imagens representam.' },
  { de: 'sacramentos', para: 'simbologia', tipo: 'conceitual', porque: 'A liturgia celebra por sinais e símbolos (água, óleo, pão, vinho, luz), cujo sentido o Catecismo expõe (CIC 1145–1152).' },
  { de: 'escritura', para: 'simbologia', tipo: 'conceitual', porque: 'A tradição católica distingue o sentido literal e os sentidos espirituais da Escritura (alegórico, moral, anagógico), CIC 115–119.' },
  { de: 'patristica', para: 'simbologia', tipo: 'historica', porque: 'Agostinho, em A Doutrina Cristã, formulou uma das primeiras teorias do signo (signos naturais e convencionais).' },
  { de: 'filo-medieval', para: 'teol-dogmatica', tipo: 'historica', porque: 'A escolástica elaborou com conceitos filosóficos as doutrinas da Trindade, da criação e de Cristo.' },
];

/** A escada curricular, nó a nó: cada degrau exige o anterior. Liga a árvore à progressão. */
export const TRILHA = ['preparacao', 'teologia', 'patristica', 'intro-filosofia', 'logica', 'filo-antiga', 'metafisica', 'filo-medieval', 'filo-moderna', 'filo-contemporanea', 'mfs', 'olavo', 'etica', 'sintese'];
const TRILHA_RELACOES = TRILHA.slice(1).map((id, i) => ({ de: TRILHA[i], para: id, tipo: 'prerequisito', trilha: true, porque: `Na escada curricular, o degrau ${i + 1} vem depois do degrau ${i}: ${NOS.find((n) => n.id === TRILHA[i]).nome} prepara ${NOS.find((n) => n.id === id).nome}.` }));

export const RELACOES = [...RELACOES_EXPLICITAS, ...TRILHA_RELACOES];
export const noPorId = Object.fromEntries(NOS.map((n) => [n.id, n]));
