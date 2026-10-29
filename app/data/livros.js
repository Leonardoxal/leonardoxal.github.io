// Biblioteca da trilha. Cada livro pertence a um degrau e tem ordem de leitura dentro dele.
// tipo: 'primaria' (fonte primária), 'secundaria' (estudo/comentário), 'referencia' (consulta).
// nivel: 1 (acessível) a 5 (muito exigente).
// verificacao: 'confirmado' = título/autoria conferidos; 'a confirmar' = dados de edição
// ou existência do título não puderam ser verificados aqui; confira em catálogo antes de comprar.
// Nenhum link aponta para cópia integral de obra protegida; links externos são de fontes oficiais
// ou de domínio público conferidas, e os demais livros recebem apenas busca em catálogo.
// As obras completas dos autores estudados vêm de obras/ e entram na mesma sequência (sequenciar).
import { LINKS } from './fontes.js';
import { OBRAS, sequenciar } from './obras/index.js';
import { PREREQUISITOS } from './prerequisitos.js';

const L = (id, titulo, autor, area, degrau, ordem, extra = {}) => ({
  id, titulo, autor, area, degrau, ordem,
  tipo: 'primaria', nivel: 2, modulo: null, prereq: [], objetivo: '', edicao: '',
  link: null, verificacao: 'confirmado', nota: '',
  ...extra,
});

const EDICAO_LIVRE = 'Escolha uma tradução identificada (tradutor nomeado, com introdução e notas). Registre aqui a edição que usar.';

const BASE = [
  // DEGRAU 0 — aprender a estudar
  L('adler-como-ler', 'Como Ler Livros', 'Mortimer J. Adler e Charles Van Doren', 'Método de estudo', 0, 1, {
    tipo: 'secundaria', nivel: 1, modulo: 'm3', ano: '1940; ed. revista 1972',
    objetivo: 'Aprender leitura ativa: inspecionar, classificar, delimitar a pergunta central, interpretar e só então criticar.',
    edicao: 'Tradução brasileira disponível no mercado; registre a editora da sua edição.' }),
  L('chaui-convite', 'Convite à Filosofia', 'Marilena Chaui', 'Introdução à filosofia', 0, 2, {
    tipo: 'secundaria', nivel: 1, modulo: 'm3', ano: '1994', prereq: ['adler-como-ler'],
    objetivo: 'Panorama dos problemas filosóficos. Estudar como introdução filosófica, não como fonte de doutrina católica; a autora escreve de uma perspectiva própria, não confessional.' }),
  L('japiassu-dicionario', 'Dicionário Básico de Filosofia', 'Hilton Japiassú e Danilo Marcondes', 'Referência', 0, 3, {
    tipo: 'referencia', nivel: 1, modulo: 'm3',
    objetivo: 'Ferramenta permanente para conferir definições de termos técnicos durante todo o curso.' }),

  // DEGRAU 1 — Bíblia e fundamentos da fé
  L('biblia-marcos', 'Evangelho segundo São Marcos', 'Sagrada Escritura', 'Bíblia', 1, 1, {
    nivel: 1, modulo: 'm1', edicao: 'Use uma edição católica com notas (ex.: Bíblia de Jerusalém, Bíblia Ave-Maria, Bíblia da CNBB).',
    objetivo: 'Primeiro contato com a narrativa da vida de Jesus no Evangelho mais breve.' }),
  L('biblia-lucas', 'Evangelho segundo São Lucas', 'Sagrada Escritura', 'Bíblia', 1, 2, {
    nivel: 1, modulo: 'm1', prereq: ['biblia-marcos'], edicao: 'Mesma edição católica escolhida para Marcos.',
    objetivo: 'Narrativa mais extensa, com infância de Jesus e parábolas próprias; prepara Atos, escrito pelo mesmo autor segundo a tradição.' }),
  L('biblia-atos', 'Atos dos Apóstolos', 'Sagrada Escritura', 'Bíblia', 1, 3, {
    nivel: 1, modulo: 'm1', prereq: ['biblia-lucas'],
    objetivo: 'Origem da Igreja, pregação apostólica e encontro do cristianismo com o mundo greco-romano (At 17: Paulo em Atenas).' }),
  L('biblia-joao', 'Evangelho segundo São João', 'Sagrada Escritura', 'Bíblia', 1, 4, {
    nivel: 2, modulo: 'm1', prereq: ['biblia-atos'],
    objetivo: 'O Evangelho mais teológico: o Prólogo (Jo 1,1-18) e o Logos são decisivos para o diálogo entre fé e filosofia.' }),
  L('biblia-genesis-exodo', 'Gênesis 1–3 e passagens do Êxodo', 'Sagrada Escritura', 'Bíblia', 1, 5, {
    nivel: 2, modulo: 'm1', prereq: ['biblia-joao'],
    objetivo: 'Criação, ser humano, queda; no Êxodo, a revelação do Nome (Ex 3) e a Aliança (Ex 19–20).' }),
  L('biblia-salmos', 'Salmos selecionados', 'Sagrada Escritura', 'Bíblia', 1, 6, {
    nivel: 1, modulo: 'm1',
    objetivo: 'Oração bíblica; sugestão: Sl 1, 8, 19, 22, 23, 51, 104, 139.' }),
  L('compendio-cic', 'Compêndio do Catecismo da Igreja Católica', 'Igreja Católica', 'Doutrina', 1, 7, {
    tipo: 'referencia', nivel: 1, modulo: 'm1', ano: '2005', link: LINKS.compendio,
    objetivo: 'Síntese em perguntas e respostas; porta de entrada para o Catecismo completo.' }),
  L('cic', 'Catecismo da Igreja Católica', 'Igreja Católica', 'Doutrina', 1, 8, {
    tipo: 'referencia', nivel: 2, modulo: 'm1', ano: '1992 (edição típica latina 1997)', link: LINKS.cicIndice,
    objetivo: 'Consulta temática e progressiva ao longo de todo o curso; não é preciso memorizá-lo antes da filosofia.' }),
  L('dei-verbum', 'Dei Verbum (Constituição dogmática sobre a Revelação)', 'Concílio Vaticano II', 'Doutrina', 1, 9, {
    tipo: 'primaria', nivel: 2, modulo: 'm1', ano: '1965', link: LINKS.deiVerbum,
    objetivo: 'Documento-base sobre Revelação, Escritura, Tradição e Magistério (especialmente §2, §9, §10).' }),

  // DEGRAU 2 — fé, razão e introdução filosófica
  L('platao-apologia', 'Apologia de Sócrates', 'Platão', 'Filosofia antiga', 2, 1, {
    nivel: 2, modulo: 'm3', edicao: EDICAO_LIVRE,
    objetivo: 'Sócrates diante do tribunal: o exame racional das opiniões e a consciência da própria ignorância.' }),
  L('platao-criton', 'Críton', 'Platão', 'Filosofia antiga', 2, 2, {
    nivel: 2, modulo: 'm3', prereq: ['platao-apologia'], edicao: EDICAO_LIVRE,
    objetivo: 'Obediência às leis, justiça e coerência entre argumento e vida.' }),
  L('platao-eutifron', 'Eutífron', 'Platão', 'Filosofia antiga', 2, 3, {
    nivel: 2, modulo: 'm3', edicao: EDICAO_LIVRE,
    objetivo: 'O que é a piedade? Primeiro exercício de busca por definição; origem do chamado "dilema de Eutífron".' }),
  L('maritain-introducao', 'Introdução Geral à Filosofia', 'Jacques Maritain', 'Introdução à filosofia', 2, 4, {
    tipo: 'secundaria', nivel: 2, modulo: 'm3', ano: '1920 (Éléments de philosophie, I)',
    objetivo: 'Introdução de orientação tomista: natureza da filosofia, suas divisões e relação com a teologia.',
    nota: 'O título varia conforme a edição brasileira ("Introdução Geral à Filosofia" / "Elementos de Filosofia I").' }),
  L('fides-et-ratio', 'Fides et Ratio', 'João Paulo II', 'Doutrina / Fé e razão', 2, 5, {
    nivel: 2, modulo: 'm3', ano: '1998', link: LINKS.fidesRatio,
    objetivo: 'Encíclica sobre a relação entre fé e razão; capítulos II (Credo ut intellegam) e III (Intellego ut credam).' }),

  // DEGRAU 3 — lógica e argumentação
  L('weston-arte', 'A Arte de Argumentar', 'Anthony Weston', 'Lógica', 3, 1, {
    tipo: 'secundaria', nivel: 1, modulo: 'm4', ano: '1987 (A Rulebook for Arguments)',
    objetivo: 'Regras práticas para construir e avaliar argumentos curtos.' }),
  L('copi-logica', 'Introdução à Lógica', 'Irving M. Copi, Carl Cohen e Kenneth McMahon (conforme a edição)', 'Lógica', 3, 2, {
    tipo: 'secundaria', nivel: 3, modulo: 'm4', ano: '1953 (1ª ed.); edições posteriores com coautores', prereq: ['weston-arte'],
    objetivo: 'Manual completo: dedução, indução, silogística, falácias, lógica simbólica básica.',
    nota: 'Confira na folha de rosto quais coautores constam da sua edição.' }),
  L('aristoteles-categorias', 'Categorias', 'Aristóteles', 'Lógica', 3, 3, {
    nivel: 3, modulo: 'm4', prereq: ['weston-arte'], edicao: EDICAO_LIVRE,
    objetivo: 'Substância e acidentes; os modos de dizer o ser. Base de toda a metafísica posterior.' }),
  L('aristoteles-interpretacao', 'Da Interpretação', 'Aristóteles', 'Lógica', 3, 4, {
    nivel: 3, modulo: 'm4', prereq: ['aristoteles-categorias'], edicao: EDICAO_LIVRE,
    objetivo: 'Nome, verbo, proposição; afirmação e negação; o quadrado das oposições.' }),
  L('aristoteles-analiticos', 'Analíticos Anteriores (com orientação)', 'Aristóteles', 'Lógica', 3, 5, {
    nivel: 4, modulo: 'm4', prereq: ['aristoteles-interpretacao', 'copi-logica'], edicao: EDICAO_LIVRE,
    objetivo: 'Teoria do silogismo: figuras, modos, conversão.' }),
  L('aristoteles-topicos', 'Tópicos e Refutações Sofísticas', 'Aristóteles', 'Lógica / Dialética', 3, 6, {
    nivel: 4, modulo: 'm4', prereq: ['aristoteles-analiticos'], edicao: EDICAO_LIVRE,
    objetivo: 'Dialética, lugares-comuns de argumentação e classificação das falácias.' }),

  // DEGRAU 4 — filosofia antiga
  L('platao-menon', 'Mênon', 'Platão', 'Filosofia antiga', 4, 1, { nivel: 3, modulo: 'm5', edicao: EDICAO_LIVRE,
    objetivo: 'A virtude pode ser ensinada? Paradoxo da investigação e teoria da reminiscência.' }),
  L('platao-fedon', 'Fédon', 'Platão', 'Filosofia antiga', 4, 2, { nivel: 3, modulo: 'm5', prereq: ['platao-menon'], edicao: EDICAO_LIVRE,
    objetivo: 'Morte de Sócrates; argumentos sobre a imortalidade da alma; Formas.' }),
  L('platao-republica', 'A República (livros I–X)', 'Platão', 'Filosofia antiga', 4, 3, { nivel: 4, modulo: 'm5', prereq: ['platao-fedon'], edicao: EDICAO_LIVRE,
    objetivo: 'O que é a justiça? A cidade e a alma; a linha dividida e a caverna (livros VI–VII). Comece pelos livros I e II e leia a obra inteira.' }),
  L('aristoteles-etica', 'Ética a Nicômaco', 'Aristóteles', 'Ética', 4, 4, { nivel: 3, modulo: 'm5', prereq: ['platao-republica'], edicao: EDICAO_LIVRE,
    objetivo: 'Felicidade (eudaimonia), virtude como disposição, justo meio, prudência, amizade.' }),
  L('aristoteles-fisica-ii', 'Física, Livro II (com orientação)', 'Aristóteles', 'Filosofia da natureza', 4, 5, { nivel: 4, modulo: 'm5', prereq: ['aristoteles-categorias'], edicao: EDICAO_LIVRE,
    objetivo: 'Natureza, as quatro causas, acaso e finalidade.' }),
  L('aristoteles-metafisica', 'Metafísica (livros I e IV, com orientação)', 'Aristóteles', 'Metafísica', 4, 6, { nivel: 5, modulo: 'm5', prereq: ['aristoteles-fisica-ii'], edicao: EDICAO_LIVRE,
    objetivo: 'Livro I: a sabedoria como ciência das causas; Livro IV: o ser enquanto ser e o princípio de não contradição.' }),
  L('epicuro-meneceu', 'Carta a Meneceu', 'Epicuro', 'Ética helenística', 4, 7, { nivel: 1, modulo: 'm5', edicao: EDICAO_LIVRE,
    objetivo: 'Prazer, ausência de perturbação e o medo da morte.' }),
  L('epicteto-manual', 'Manual (Encheirídion)', 'Epicteto (registrado por Arriano)', 'Ética helenística', 4, 8, { nivel: 1, modulo: 'm5', edicao: EDICAO_LIVRE,
    objetivo: 'Distinção estoica entre o que depende e o que não depende de nós.' }),
  L('marco-aurelio', 'Meditações', 'Marco Aurélio', 'Ética helenística', 4, 9, { nivel: 2, modulo: 'm5', prereq: ['epicteto-manual'], edicao: EDICAO_LIVRE,
    objetivo: 'Estoicismo vivido: exame de consciência, ordem do cosmos, dever.' }),

  // DEGRAU 5 — conhecimento, metafísica e filosofia da religião
  L('platao-parmenides', 'Parmênides', 'Platão', 'Metafísica', 5, 1, { nivel: 5, modulo: 'm7', prereq: ['platao-republica'], edicao: EDICAO_LIVRE,
    objetivo: 'Críticas à teoria das Formas; o problema do Um e do Múltiplo.' }),
  L('tomas-ente-essencia', 'O Ente e a Essência', 'Tomás de Aquino', 'Metafísica', 5, 2, { nivel: 4, modulo: 'm7', prereq: ['aristoteles-metafisica'], ano: 'c. 1252–1256', edicao: EDICAO_LIVRE,
    objetivo: 'Distinção entre essência e ato de ser; vocabulário básico da metafísica tomista.' }),
  L('introducao-epistemologia', 'Uma introdução à epistemologia (manual a escolher)', 'Vários', 'Epistemologia', 5, 3, { tipo: 'secundaria', nivel: 3, modulo: 'm6',
    objetivo: 'Crença, justificação, ceticismo. Escolha um manual universitário introdutório e registre aqui qual usou.', nota: 'Item genérico: o app não indica um título específico para não afirmar recomendação não verificada.' }),
  L('suma-q2-13', 'Suma Teológica, I, q. 2–13 (com orientação)', 'Tomás de Aquino', 'Teologia / Metafísica', 5, 4, { nivel: 5, modulo: 'm7', prereq: ['tomas-ente-essencia'], ano: '1265–1274 (obra inteira)', link: LINKS.sumaQ2,
    objetivo: 'As cinco vias (q. 2, a. 3), simplicidade, perfeição, bondade, infinitude, imutabilidade, eternidade, unidade de Deus e os nomes divinos.' }),

  // DEGRAU 6 — patrística, filosofia cristã, escolástica
  L('agostinho-confissoes', 'Confissões', 'Santo Agostinho', 'Patrística', 6, 1, { nivel: 3, modulo: 'm8', ano: 'c. 397–400', edicao: EDICAO_LIVRE,
    objetivo: 'Itinerário intelectual e espiritual; livro VII (mal), livro X (memória), livro XI (tempo).' }),
  L('agostinho-livre-arbitrio', 'O Livre-Arbítrio', 'Santo Agostinho', 'Patrística', 6, 2, { nivel: 4, modulo: 'm8', prereq: ['agostinho-confissoes'], edicao: EDICAO_LIVRE,
    objetivo: 'Origem do mal moral, liberdade da vontade, presciência divina.' }),
  L('boecio-consolacao', 'A Consolação da Filosofia', 'Boécio', 'Filosofia medieval', 6, 3, { nivel: 3, modulo: 'm8', ano: 'c. 524', edicao: EDICAO_LIVRE,
    objetivo: 'Fortuna, felicidade, providência e eternidade.' }),
  L('anselmo-proslogio', 'Proslógio', 'Santo Anselmo', 'Filosofia medieval', 6, 4, { nivel: 3, modulo: 'm8', prereq: ['aristoteles-interpretacao'], ano: 'c. 1077–1078', edicao: EDICAO_LIVRE,
    objetivo: '"Fé que busca compreender"; o argumento dos capítulos 2–4 (depois chamado "ontológico").' }),
  L('gilson-espirito', 'O Espírito da Filosofia Medieval', 'Étienne Gilson', 'História da filosofia', 6, 5, { tipo: 'secundaria', nivel: 4, modulo: 'm8', ano: '1932',
    objetivo: 'Tese de Gilson sobre a "filosofia cristã" — uma interpretação de autor, discutida por outros historiadores.' }),
  L('suma-i-ii', 'Suma Teológica, I–II (felicidade, atos humanos, lei: seleções)', 'Tomás de Aquino', 'Ética / Teologia moral', 6, 6, { nivel: 5, modulo: 'm8', prereq: ['suma-q2-13', 'aristoteles-etica'],
    objetivo: 'q. 1–5 (fim último e felicidade), q. 6–21 (atos humanos), q. 90–97 (lei, incluindo lei natural q. 94).' }),
  L('suma-contra-gentios', 'Suma contra os Gentios (livros I–IV)', 'Tomás de Aquino', 'Teologia / Filosofia', 6, 7, { nivel: 5, modulo: 'm8', prereq: ['suma-q2-13'], ano: 'c. 1259–1265',
    objetivo: 'Livro I: o que a razão natural pode alcançar sobre Deus e o método de argumentar com quem não aceita a Escritura.' }),

  // DEGRAU 7 — filosofia moderna
  L('descartes-discurso', 'Discurso do Método', 'René Descartes', 'Filosofia moderna', 7, 1, { nivel: 2, modulo: 'm9', ano: '1637', edicao: EDICAO_LIVRE, objetivo: 'As quatro regras do método e o projeto de refundar o saber.' }),
  L('pascal-pensamentos', 'Pensamentos', 'Blaise Pascal', 'Filosofia moderna', 7, 2, { nivel: 3, modulo: 'm9', ano: 'póstumo, 1670', edicao: EDICAO_LIVRE, objetivo: 'Grandeza e miséria do homem, a aposta, as razões do coração.' }),
  L('descartes-meditacoes', 'Meditações Metafísicas', 'René Descartes', 'Filosofia moderna', 7, 3, { nivel: 4, modulo: 'm9', ano: '1641', prereq: ['descartes-discurso'], edicao: EDICAO_LIVRE, objetivo: 'Dúvida metódica, cogito, provas de Deus, distinção alma-corpo.' }),
  L('locke-ensaio', 'Ensaio sobre o Entendimento Humano', 'John Locke', 'Filosofia moderna', 7, 4, { nivel: 3, modulo: 'm9', ano: '1689', edicao: EDICAO_LIVRE, objetivo: 'Crítica às ideias inatas; origem das ideias na experiência.' }),
  L('hume-investigacao', 'Investigação sobre o Entendimento Humano', 'David Hume', 'Filosofia moderna', 7, 5, { nivel: 3, modulo: 'm9', ano: '1748', prereq: ['locke-ensaio'], edicao: EDICAO_LIVRE, objetivo: 'Impressões e ideias, crítica da causalidade, milagres (seção X).' }),
  L('rousseau-contrato', 'Do Contrato Social', 'Jean-Jacques Rousseau', 'Filosofia política', 7, 6, { nivel: 3, modulo: 'm9', ano: '1762', edicao: EDICAO_LIVRE, objetivo: 'Soberania, vontade geral, legitimidade política.' }),
  L('kant-prolegomenos', 'Prolegômenos a Toda Metafísica Futura', 'Immanuel Kant', 'Filosofia moderna', 7, 7, { nivel: 4, modulo: 'm9', ano: '1783', prereq: ['hume-investigacao'], edicao: EDICAO_LIVRE, objetivo: 'Como são possíveis juízos sintéticos a priori? Resposta a Hume.' }),
  L('kant-fundamentacao', 'Fundamentação da Metafísica dos Costumes', 'Immanuel Kant', 'Ética', 7, 8, { nivel: 4, modulo: 'm9', ano: '1785', edicao: EDICAO_LIVRE, objetivo: 'Boa vontade, dever, imperativo categórico, autonomia.' }),
  L('kant-crp', 'Crítica da Razão Pura', 'Immanuel Kant', 'Filosofia moderna', 7, 9, { nivel: 5, modulo: 'm9', ano: '1781; 2ª ed. 1787', prereq: ['kant-prolegomenos'], edicao: EDICAO_LIVRE, objetivo: 'Prefácios, Introdução, Estética Transcendental; crítica às provas de Deus na Dialética.' }),

  // DEGRAU 8 — séculos XIX e XX
  L('kierkegaard-temor', 'Temor e Tremor', 'Søren Kierkegaard', 'Filosofia contemporânea', 8, 1, { nivel: 4, modulo: 'm10', ano: '1843', edicao: EDICAO_LIVRE, objetivo: 'Abraão, fé e ética; a "suspensão teleológica do ético".' }),
  L('marx-manifesto', 'Manifesto do Partido Comunista', 'Karl Marx e Friedrich Engels', 'Filosofia política', 8, 2, { nivel: 2, modulo: 'm10', ano: '1848', edicao: EDICAO_LIVRE, objetivo: 'Luta de classes, materialismo histórico em forma de panfleto político.' }),
  L('nietzsche-genealogia', 'Genealogia da Moral', 'Friedrich Nietzsche', 'Filosofia contemporânea', 8, 3, { nivel: 4, modulo: 'm10', ano: '1887', edicao: EDICAO_LIVRE, objetivo: 'Crítica genealógica dos valores morais e do cristianismo.' }),
  L('sartre-existencialismo', 'O Existencialismo é um Humanismo', 'Jean-Paul Sartre', 'Filosofia contemporânea', 8, 4, { nivel: 2, modulo: 'm10', ano: '1946 (conferência de 1945)', edicao: EDICAO_LIVRE, objetivo: '"A existência precede a essência": liberdade e responsabilidade sem Deus.' }),
  L('popper-logica', 'A Lógica da Pesquisa Científica', 'Karl Popper', 'Filosofia da ciência', 8, 5, { nivel: 4, modulo: 'm10', ano: '1934 (alemão); 1959 (inglês)', prereq: ['hume-investigacao'], edicao: EDICAO_LIVRE, objetivo: 'Problema da indução e falseabilidade como critério de demarcação.' }),
  L('wittgenstein-investigacoes', 'Investigações Filosóficas', 'Ludwig Wittgenstein', 'Filosofia da linguagem', 8, 6, { nivel: 5, modulo: 'm10', ano: '1953 (póstumo)', edicao: EDICAO_LIVRE, objetivo: 'Significado como uso, jogos de linguagem, seguir uma regra.' }),
  L('macintyre-virtude', 'Depois da Virtude', 'Alasdair MacIntyre', 'Ética', 8, 7, { tipo: 'primaria', nivel: 4, modulo: 'm10', ano: '1981', prereq: ['aristoteles-etica', 'nietzsche-genealogia'], objetivo: 'Diagnóstico da moral moderna e retomada da tradição aristotélica das virtudes.' }),
  L('manual-contemporanea', 'Manual de história da filosofia contemporânea (a escolher)', 'Vários', 'História da filosofia', 8, 8, { tipo: 'secundaria', nivel: 3, modulo: 'm10',
    objetivo: 'Acompanhar as leituras com contexto histórico. Registre aqui qual manual escolheu.', nota: 'Item genérico: nenhum título é indicado como "oficial".' }),

  // DEGRAU 9 — Mário Ferreira dos Santos (ordem pedagógica proposta, não ordem de publicação)
  L('olavo-guia-mfs', 'Guia para o estudo da obra de Mário Ferreira dos Santos', 'Olavo de Carvalho (comentário)', 'Mário Ferreira dos Santos', 9, 1, { tipo: 'secundaria', nivel: 3, modulo: 'm11', verificacao: 'a confirmar',
    objetivo: 'Orientação secundária. Tudo o que nele for avaliação da obra é interpretação do comentarista.',
    nota: 'Título, formato (livro, apostila ou aula) e edição não verificados aqui. Confirme em catálogo; se não existir com esse título, substitua por uma introdução identificada.' }),
  L('mfs-cosmovisao', 'Filosofia e Cosmovisão', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 2, { nivel: 3, modulo: 'm11', objetivo: 'Porta de entrada: o que é filosofar e o que é uma cosmovisão.' }),
  L('mfs-logica-dialectica', 'Lógica e Dialéctica', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 3, { nivel: 4, modulo: 'm11', prereq: ['mfs-cosmovisao', 'copi-logica'], objetivo: 'Lógica formal e dialética no vocabulário do autor.' }),
  L('mfs-teoria-conhecimento', 'Teoria do Conhecimento', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 4, { nivel: 4, modulo: 'm11', prereq: ['mfs-logica-dialectica'], objetivo: 'Gnosiologia: possibilidade, origem e valor do conhecimento.' }),
  L('mfs-ontologia', 'Ontologia e Cosmologia', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 5, { nivel: 4, modulo: 'm11', prereq: ['mfs-teoria-conhecimento', 'aristoteles-metafisica'], objetivo: 'Ser, ente, categorias e ordem do cosmos.' }),
  L('mfs-filosofia-concreta', 'Filosofia Concreta (vol. I, II e III)', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 6, { nivel: 5, modulo: 'm11', prereq: ['mfs-ontologia'], objetivo: 'Obra sistemática em teses demonstradas; respeitar a sequência interna das teses.' }),
  L('mfs-metodos', 'Métodos Lógicos e Dialécticos', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 7, { nivel: 5, modulo: 'm11', prereq: ['mfs-filosofia-concreta'], objetivo: 'Aprofundamento metodológico.' }),
  L('mfs-valores', 'Filosofia Concreta dos Valores', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 8, { nivel: 5, modulo: 'm11', prereq: ['mfs-filosofia-concreta'], objetivo: 'Axiologia na perspectiva da filosofia concreta.' }),
  L('mfs-sociologia-etica', 'Sociologia Fundamental e Ética Fundamental', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 9, { nivel: 4, modulo: 'm11', prereq: ['mfs-valores'], objetivo: 'Aplicação à vida social e moral.' }),
  L('mfs-um-multiplo', 'O Um e o Múltiplo em Platão', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 10, { nivel: 5, modulo: 'm11', prereq: ['platao-parmenides'], objetivo: 'Ler em paralelo com o Parmênides de Platão.' }),
  L('mfs-aristoteles-mutacoes', 'Aristóteles e as Mutações', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 11, { nivel: 5, modulo: 'm11', prereq: ['aristoteles-fisica-ii'], objetivo: 'Ler em paralelo com o texto aristotélico correspondente (Da geração e corrupção).' }),
  L('mfs-simbolica', 'Tratado de Simbólica', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 12, { nivel: 4, modulo: 'm11', prereq: ['mfs-ontologia'], objetivo: 'Natureza e interpretação dos símbolos.' }),
  L('mfs-crise', 'Filosofia da Crise', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 13, { nivel: 4, modulo: 'm11', prereq: ['mfs-ontologia'], objetivo: 'O conceito de crise como categoria filosófica.' }),
  L('mfs-infinito', 'O Homem perante o Infinito (Teologia)', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 14, { nivel: 5, modulo: 'm11', prereq: ['mfs-filosofia-concreta', 'suma-q2-13'], objetivo: 'Teologia natural do autor; comparar com Tomás de Aquino.' }),
  L('mfs-noologia', 'Noologia Geral: A Ciência do Espírito', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 15, { nivel: 5, modulo: 'm11', prereq: ['mfs-teoria-conhecimento'], objetivo: 'Estudo do espírito e de suas funções.' }),
  L('mfs-dicionario', 'Dicionário de Filosofia e Ciências Culturais', 'Mário Ferreira dos Santos', 'Referência', 9, 16, { tipo: 'referencia', nivel: 3, modulo: 'm11', objetivo: 'Obra de referência permanente para o vocabulário do autor.' }),

  // DEGRAU 10 — Olavo de Carvalho
  L('olavo-historia-essencial', 'História Essencial da Filosofia', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 1, { tipo: 'secundaria', nivel: 3, modulo: 'm12', verificacao: 'a confirmar',
    objetivo: 'Percurso de orientação. Ler acompanhado de fontes independentes e dos textos originais; é a leitura de um autor, não consenso acadêmico.',
    nota: 'Originalmente um curso em aulas gravadas com transcrições; formato e editora variam. Confirme a edição.' }),
  L('olavo-como-vencer', 'Como Vencer um Debate sem Precisar Ter Razão', 'Arthur Schopenhauer (introdução, notas e comentários de Olavo de Carvalho)', 'Olavo de Carvalho', 10, 2, { tipo: 'primaria', nivel: 2, modulo: 'm12',
    objetivo: 'Os 38 estratagemas da dialética erística: estudar como catálogo de truques a reconhecer, não a usar.',
    nota: 'O texto principal é de Schopenhauer (Dialética erística); a contribuição de Olavo é o aparato de comentário.' }),
  L('olavo-quatro-discursos', 'Aristóteles em Nova Perspectiva: Introdução à Teoria dos Quatro Discursos', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 3, { nivel: 4, modulo: 'm12', ano: '1996', prereq: ['aristoteles-topicos', 'aristoteles-metafisica'],
    objetivo: 'Tese de que poética, retórica, dialética e analítica formam uma ciência unificada do discurso. Interpretação do autor, a confrontar com o corpus aristotélico.' }),
  L('olavo-filosofia-cultura', 'Uma Filosofia Aristotélica da Cultura', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 4, { nivel: 4, modulo: 'm12', prereq: ['olavo-quatro-discursos'], verificacao: 'a confirmar',
    objetivo: 'Desdobramento da teoria dos quatro discursos para a cultura.', nota: 'Dados de edição não verificados aqui.' }),
  L('olavo-inverso', 'A Filosofia e seu Inverso', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 5, { nivel: 3, modulo: 'm12', verificacao: 'a confirmar',
    objetivo: 'Ensaios sobre a vocação filosófica e suas deformações.', nota: 'Coletânea; confira o sumário da edição.' }),
  L('olavo-jardim', 'O Jardim das Aflições', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 6, { nivel: 4, modulo: 'm12', ano: '1995', prereq: ['epicuro-meneceu', 'rousseau-contrato', 'marx-manifesto'],
    objetivo: 'Leitura de história das ideias a partir de Epicuro. Interpretação de autor: verificar fontes citadas e interpretações alternativas.' }),
  L('olavo-dialetica-simbolica', 'A Dialética Simbólica', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 7, { nivel: 5, modulo: 'm12', prereq: ['olavo-quatro-discursos'], objetivo: 'Leitura avançada: ensaios sobre simbolismo e método.' }),
  L('olavo-futuro', 'O Futuro do Pensamento Brasileiro', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 8, { nivel: 3, modulo: 'm12', objetivo: 'Diagnóstico da vida intelectual brasileira; tese do autor, a discutir.' }),
  L('olavo-imbecil', 'O Imbecil Coletivo', 'Olavo de Carvalho', 'Olavo de Carvalho', 10, 9, { nivel: 2, modulo: 'm12', ano: '1996',
    objetivo: 'Ensaios polêmicos de crítica cultural: mostram o autor como polemista. Não substituem o estudo sistemático.' }),
  L('olavo-minimo', 'O Mínimo que Você Precisa Saber para Não Ser um Idiota', 'Olavo de Carvalho (coletânea organizada por Felipe Moura Brasil)', 'Olavo de Carvalho', 10, 10, { nivel: 1, modulo: 'm12', ano: '2013',
    objetivo: 'Coletânea de artigos jornalísticos: o autor como cronista. Não substitui o estudo sistemático.' }),
  ...APOIO(),
];

/**
 * Comentadores, fontes mais difíceis e os melhores adversários de cada posição: levam o estudante
 * de "entender o autor" a "dominar o debate". Fazem parte da mesma sequência de leitura.
 */
function APOIO() {
  const V = (id, titulo, autor, area, degrau, ordem, extra) => L(id, titulo, autor, area, degrau, 100 + ordem, { nivel: 4, edicao: EDICAO_LIVRE, ...extra });
  return [
    V('sertillanges-vida', 'A Vida Intelectual', 'A.-D. Sertillanges', 'Método de estudo', 0, 1, { tipo: 'secundaria', nivel: 2, modulo: 'm3', ano: '1920', objetivo: 'Disciplina, horários, notas e espírito do trabalho intelectual, na tradição tomista.' }),
    V('booth-pesquisa', 'A Arte da Pesquisa', 'Wayne C. Booth, Gregory G. Colomb e Joseph M. Williams', 'Método de estudo', 0, 2, { tipo: 'secundaria', nivel: 2, modulo: 'm3', ano: '1995', objetivo: 'Como transformar um tema em problema, um problema em argumento e um argumento em texto.' }),
    V('ratzinger-introducao', 'Introdução ao Cristianismo', 'Joseph Ratzinger', 'Teologia', 1, 1, { tipo: 'secundaria', modulo: 'm1', ano: '1968', objetivo: 'Comentário ao Símbolo dos Apóstolos com diálogo filosófico; o teólogo escreve como professor, não como papa (interpretação de autor).' }),
    V('denzinger', 'Compêndio dos símbolos, definições e declarações de fé e moral', 'Heinrich Denzinger (ed. Peter Hünermann)', 'Doutrina', 1, 2, { tipo: 'referencia', modulo: 'm1', objetivo: 'Coleção dos textos do Magistério em ordem cronológica; citar pelo número "DH". Ferramenta para identificar a fonte e o peso de cada afirmação.' }),
    V('newman-desenvolvimento', 'Ensaio sobre o Desenvolvimento da Doutrina Cristã', 'John Henry Newman', 'Teologia', 1, 3, { modulo: 'm1', ano: '1845', objetivo: 'Como uma doutrina pode desenvolver-se sem se corromper: as sete "notas" do desenvolvimento genuíno.' }),
    V('pieper-filosofar', 'O que é filosofar?', 'Josef Pieper', 'Introdução à filosofia', 2, 1, { tipo: 'secundaria', nivel: 2, modulo: 'm3', ano: '1948', objetivo: 'Filosofar como contemplação e espanto, contra a redução do saber ao útil.' }),
    V('newman-gramatica', 'Ensaio a favor de uma Gramática do Assentimento', 'John Henry Newman', 'Epistemologia da fé', 2, 2, { modulo: 'm3', ano: '1870', objetivo: 'Assentimento nocional e real, inferência informal e "sentido ilativo": como se chega à certeza em matérias concretas.' }),
    V('maritain-logica', 'Lógica Menor (Elementos de Filosofia II)', 'Jacques Maritain', 'Lógica', 3, 1, { tipo: 'secundaria', modulo: 'm4', ano: '1923', objetivo: 'Lógica aristotélico-tomista completa: termo, proposição, raciocínio, com rigor escolar.' }),
    V('aristoteles-analiticos-post', 'Analíticos Posteriores', 'Aristóteles', 'Lógica / Epistemologia', 3, 2, { nivel: 5, modulo: 'm4', prereq: ['aristoteles-analiticos'], objetivo: 'Teoria da demonstração científica: conhecer pela causa, princípios indemonstráveis, definição.' }),
    V('kreeft-logica', 'Socratic Logic', 'Peter Kreeft', 'Lógica', 3, 3, { tipo: 'secundaria', nivel: 3, modulo: 'm4', ano: '2004', verificacao: 'a confirmar', objetivo: 'Manual extenso de lógica aristotélica com milhares de exercícios.', nota: 'Obra em inglês; não verifiquei tradução brasileira.' }),
    V('jaeger-paideia', 'Paideia: A Formação do Homem Grego', 'Werner Jaeger', 'História da cultura', 4, 1, { tipo: 'secundaria', modulo: 'm5', ano: '1933–1947', objetivo: 'A cultura grega como projeto educativo, de Homero a Platão.' }),
    V('hadot-antiga', 'O que é a Filosofia Antiga?', 'Pierre Hadot', 'História da filosofia', 4, 2, { tipo: 'secundaria', modulo: 'm5', ano: '1995', objetivo: 'Tese de que a filosofia antiga era antes um modo de vida com "exercícios espirituais" (interpretação de autor, influente e discutida).' }),
    V('platao-teeteto', 'Teeteto', 'Platão', 'Epistemologia', 4, 3, { nivel: 5, modulo: 'm5', prereq: ['platao-menon'], objetivo: 'O que é o conhecimento? Refutação de "conhecimento é percepção" e de "crença verdadeira com explicação".' }),
    V('platao-sofista', 'Sofista', 'Platão', 'Metafísica', 4, 4, { nivel: 5, modulo: 'm5', prereq: ['platao-teeteto'], objetivo: 'O não-ser como "outro"; os "gêneros supremos"; o "parricídio" de Parmênides.' }),
    V('aristoteles-alma', 'Da Alma (De Anima)', 'Aristóteles', 'Filosofia da natureza', 4, 5, { nivel: 5, modulo: 'm5', prereq: ['aristoteles-fisica-ii'], objetivo: 'Alma como forma do corpo; sensação; intelecto possível e agente (livro III).' }),
    V('aristoteles-politica', 'Política', 'Aristóteles', 'Filosofia política', 4, 6, { modulo: 'm5', prereq: ['aristoteles-etica'], objetivo: 'O homem como animal político; regimes; cidadania; o melhor regime.' }),
    V('grego-instrumental', 'Grego instrumental (manual a escolher)', 'Vários', 'Línguas', 4, 7, { tipo: 'referencia', nivel: 3, modulo: 'm5', objetivo: 'Ler termos-chave (ousia, eidos, logos, aretē, telos, energeia) e frases curtas com dicionário. Registre aqui o manual que usar.', nota: 'Item genérico: não indico um manual específico.' }),
    V('hume-dialogos', 'Diálogos sobre a Religião Natural', 'David Hume', 'Filosofia da religião', 5, 1, { modulo: 'm7', ano: '1779 (póstumo)', objetivo: 'As objeções clássicas ao argumento do desígnio e ao ser necessário, pela voz de Filão.' }),
    V('mackie-milagre', 'The Miracle of Theism', 'J. L. Mackie', 'Filosofia da religião', 5, 2, { tipo: 'secundaria', modulo: 'm7', ano: '1982', objetivo: 'A mais forte avaliação ateia dos argumentos teístas no século XX: ler o melhor adversário.', nota: 'Obra em inglês.' }),
    V('feser-cinco', 'Five Proofs of the Existence of God', 'Edward Feser', 'Filosofia da religião', 5, 3, { tipo: 'secundaria', modulo: 'm7', ano: '2017', objetivo: 'Defesa contemporânea de argumentos aristotélico, neoplatônico, agostiniano, tomista e racionalista, com respostas a objeções.', nota: 'Obra em inglês.' }),
    V('leibniz-monadologia', 'Monadologia', 'G. W. Leibniz', 'Metafísica', 5, 4, { modulo: 'm7', ano: '1714', objetivo: 'Princípio de razão suficiente e argumento a partir da contingência (§32–39).' }),
    V('garrigou-deus', 'Dieu, son existence et sa nature', 'Réginald Garrigou-Lagrange', 'Teologia natural', 5, 5, { tipo: 'secundaria', nivel: 5, modulo: 'm7', ano: '1915', objetivo: 'Tratado tomista clássico sobre as provas e os atributos divinos.', nota: 'Original em francês; confira traduções disponíveis.' }),
    V('agostinho-cidade', 'A Cidade de Deus', 'Santo Agostinho', 'Patrística', 6, 1, { modulo: 'm8', ano: '413–426', prereq: ['agostinho-confissoes'], objetivo: 'Teologia da história; crítica do paganismo romano; livros VIII–X sobre os platônicos e XIX sobre a paz.' }),
    V('agostinho-trindade', 'A Trindade', 'Santo Agostinho', 'Teologia', 6, 2, { nivel: 5, modulo: 'm8', ano: 'c. 400–420', objetivo: 'Analogias psicológicas da Trindade (memória, inteligência, vontade), livros VIII–XV.' }),
    V('tomas-verdade', 'Questões Disputadas sobre a Verdade', 'Tomás de Aquino', 'Metafísica / Epistemologia', 6, 3, { nivel: 5, modulo: 'm8', ano: '1256–1259', prereq: ['tomas-ente-essencia'], objetivo: 'Questão 1: definição de verdade e os transcendentais.' }),
    V('boaventura-itinerario', 'Itinerário da Mente para Deus', 'São Boaventura', 'Teologia / Mística', 6, 4, { modulo: 'm8', ano: '1259', objetivo: 'A via franciscana e agostiniana, em contraste com Tomás.' }),
    V('gilson-tomismo', 'O Tomismo', 'Étienne Gilson', 'História da filosofia', 6, 5, { tipo: 'secundaria', modulo: 'm8', ano: '1919 (1ª ed.; várias revisões)', objetivo: 'Exposição clássica do pensamento de Tomás, com a leitura "existencial" do ser própria de Gilson.' }),
    V('pieper-tomas', 'Guide to Thomas Aquinas', 'Josef Pieper', 'História da filosofia', 6, 6, { tipo: 'secundaria', nivel: 3, modulo: 'm8', ano: '1958', objetivo: 'Introdução ao contexto e ao espírito de Tomás.', nota: 'Título da tradução inglesa; o original é Hinführung zu Thomas von Aquin.' }),
    V('latim-instrumental', 'Latim instrumental (manual a escolher)', 'Vários', 'Línguas', 6, 7, { tipo: 'referencia', nivel: 3, modulo: 'm8', objetivo: 'Ler um artigo da Suma em latim com tradução ao lado. Registre aqui o manual que usar.', nota: 'Item genérico: não indico um manual específico.' }),
    V('spinoza-etica', 'Ética', 'Baruch Spinoza', 'Filosofia moderna', 7, 1, { nivel: 5, modulo: 'm9', ano: '1677 (póstumo)', objetivo: 'Substância única, necessidade, liberdade como compreensão; a geometria aplicada à metafísica.' }),
    V('kant-crpratica', 'Crítica da Razão Prática', 'Immanuel Kant', 'Ética', 7, 2, { nivel: 5, modulo: 'm9', ano: '1788', prereq: ['kant-fundamentacao'], objetivo: 'Lei moral, liberdade e os postulados de Deus e imortalidade.' }),
    V('gilson-unidade', 'A Unidade da Experiência Filosófica', 'Étienne Gilson', 'História da filosofia', 7, 3, { tipo: 'secundaria', modulo: 'm9', ano: '1937', objetivo: 'Tese de que os sistemas fracassam por padrões recorrentes (logicismo, teologismo, ceticismo); interpretação de autor.' }),
    V('hegel-fenomenologia', 'Fenomenologia do Espírito', 'G. W. F. Hegel', 'Filosofia contemporânea', 8, 1, { nivel: 5, modulo: 'm10', ano: '1807', objetivo: 'O verdadeiro como todo e como sujeito; método dialético.' }),
    V('frege-sentido', 'Sobre o Sentido e a Referência', 'Gottlob Frege', 'Filosofia da linguagem', 8, 2, { modulo: 'm10', ano: '1892', objetivo: 'Artigo fundador da filosofia analítica da linguagem.' }),
    V('husserl-meditacoes', 'Meditações Cartesianas', 'Edmund Husserl', 'Fenomenologia', 8, 3, { nivel: 5, modulo: 'm10', ano: '1931', objetivo: 'A fenomenologia como retomada radical de Descartes; intencionalidade e redução.' }),
    V('heidegger-ser-tempo', 'Ser e Tempo (seleções)', 'Martin Heidegger', 'Filosofia contemporânea', 8, 4, { nivel: 5, modulo: 'm10', ano: '1927', objetivo: 'A pergunta pelo sentido do ser; ser-no-mundo; ser-para-a-morte (Introdução e §§ selecionados).' }),
    V('kuhn-estrutura', 'A Estrutura das Revoluções Científicas', 'Thomas S. Kuhn', 'Filosofia da ciência', 8, 5, { modulo: 'm10', ano: '1962', prereq: ['popper-logica'], objetivo: 'Paradigmas, ciência normal e revoluções; o debate com Popper.' }),
    V('anscombe-mmp', 'Modern Moral Philosophy (artigo)', 'G. E. M. Anscombe', 'Ética', 8, 6, { modulo: 'm10', ano: '1958', objetivo: 'A crítica que relançou a ética das virtudes.' }),
    V('voegelin-nova-ciencia', 'A Nova Ciência da Política', 'Eric Voegelin', 'Filosofia política', 8, 7, { tipo: 'secundaria', modulo: 'm10', ano: '1952', objetivo: 'Representação, ordem e a tese da "gnose" moderna (interpretação de autor, muito discutida).' }),
    V('taylor-era-secular', 'Uma Era Secular', 'Charles Taylor', 'Filosofia da religião', 8, 8, { tipo: 'secundaria', modulo: 'm10', ano: '2007', objetivo: 'Como passamos de uma sociedade em que era difícil não crer a uma em que crer é uma opção entre outras.' }),
    V('mfs-pitagoras', 'Pitágoras e o Tema do Número', 'Mário Ferreira dos Santos', 'Mário Ferreira dos Santos', 9, 1, { nivel: 5, modulo: 'm11', prereq: ['mfs-filosofia-concreta'], objetivo: 'A leitura do autor sobre a tradição pitagórica, central para a filosofia concreta.' }),
    V('voegelin-ordem', 'Ordem e História', 'Eric Voegelin', 'Filosofia da história', 10, 1, { tipo: 'secundaria', nivel: 5, modulo: 'm12', ano: '1956–1987', objetivo: 'Uma das fontes declaradas por Olavo de Carvalho: ler para avaliar o quanto ele a segue ou a transforma.' }),
    V('lavelle-presenca', 'A Presença Total', 'Louis Lavelle', 'Metafísica', 10, 2, { modulo: 'm12', ano: '1934', objetivo: 'Metafísica da participação no ser; outra referência declarada por Olavo de Carvalho.' }),
    V('guenon-crise', 'A Crise do Mundo Moderno', 'René Guénon', 'Crítica da modernidade', 10, 3, { tipo: 'primaria', modulo: 'm12', ano: '1927', objetivo: 'Para comparação: o tradicionalismo perenialista, que Olavo estudou; distinguir onde converge e onde diverge da fé católica.' }),
    V('finnis-lei-natural', 'Lei Natural e Direitos Naturais', 'John Finnis', 'Filosofia do direito', 11, 1, { tipo: 'secundaria', modulo: 'm13', ano: '1980', objetivo: 'A reformulação mais influente da lei natural no século XX ("nova teoria da lei natural", discutida por tomistas clássicos).' }),
    V('strauss-direito-natural', 'Direito Natural e História', 'Leo Strauss', 'Filosofia política', 11, 2, { tipo: 'secundaria', modulo: 'm13', ano: '1953', objetivo: 'Direito natural clássico contra historicismo e positivismo.' }),
    V('rawls-justica', 'Uma Teoria da Justiça', 'John Rawls', 'Filosofia política', 11, 3, { nivel: 5, modulo: 'm13', ano: '1971', objetivo: 'Justiça como equidade, posição original e véu da ignorância: o principal adversário liberal da lei natural clássica.' }),
    V('arendt-condicao', 'A Condição Humana', 'Hannah Arendt', 'Filosofia política', 11, 4, { modulo: 'm13', ano: '1958', objetivo: 'Trabalho, obra e ação; a vida ativa.' }),
    V('burke-reflexoes', 'Reflexões sobre a Revolução na França', 'Edmund Burke', 'Filosofia política', 11, 5, { modulo: 'm13', ano: '1790', objetivo: 'Tradição, prudência e crítica da política abstrata.' }),
    V('tocqueville-democracia', 'A Democracia na América', 'Alexis de Tocqueville', 'Filosofia política', 11, 6, { modulo: 'm13', ano: '1835–1840', objetivo: 'Igualdade, associações, religião e o risco de despotismo brando.' }),
    V('eco-tese', 'Como se faz uma Tese', 'Umberto Eco', 'Método de estudo', 12, 1, { tipo: 'secundaria', nivel: 2, modulo: 'm16', ano: '1977', objetivo: 'Delimitar tema, fichar, citar e redigir um trabalho de pesquisa.' }),
  ];
}

// Pré-requisitos justificados (prerequisitos.js) somados aos registrados em cada livro; `porque` guarda o motivo.
export const LIVROS = sequenciar([...BASE, ...OBRAS]).map((l) => {
  const extra = PREREQUISITOS[l.id] || [];
  return { ...l, prereq: [...new Set([...l.prereq, ...extra.map(([p]) => p)])], porque: Object.fromEntries(extra) };
});
export const livroPorId = Object.fromEntries(LIVROS.map((l) => [l.id, l]));
