// Obras de Mário Ferreira dos Santos e de Olavo de Carvalho. A bibliografia de ambos tem edições irregulares
// (e, no caso de Olavo, muito material em aulas transcritas); por isso quase tudo aqui é "a confirmar".
import { autor } from './_obra.js';

const mfs = autor({ chave: 'mfs', autor: 'Mário Ferreira dos Santos', area: 'Mário Ferreira dos Santos', degrau: 9, modulo: 'm11', nivel: 4 });
const olavo = autor({ chave: 'olavo', autor: 'Olavo de Carvalho', area: 'Olavo de Carvalho', degrau: 10, modulo: 'm12' });
const CONF = { verificacao: 'a confirmar', nota: 'Título, data e edição não verificados aqui; confira em catálogo e na edição que usar.' };
const F = (id, titulo, ano, objetivo, extra = {}) => mfs.O(id, titulo, ano, objetivo, { ...CONF, ...extra });
const Ol = (id, titulo, ano, objetivo, extra = {}) => olavo.O(id, titulo, ano, objetivo, { ...CONF, ...extra });

export const BRASILEIROS = [
  { chave: 'mfs', itens: [
    F('mfs-convites', 'Convite à Filosofia; Convite à Estética; Convite à Psicologia Prática', 'década de 1950', 'Por que aqui: as introduções populares do autor, antes da Enciclopédia. Observe: o estilo didático. Pergunta: como Mário apresenta a filosofia a leigos?', { nivel: 2 }),
    mfs.ref('mfs-cosmovisao'),
    mfs.ref('mfs-logica-dialectica'),
    F('mfs-psicologia', 'Psicologia (Enciclopédia de Ciências Filosóficas e Sociais)', 'década de 1950', 'Por que aqui: o volume psicológico da Enciclopédia, entre lógica e conhecimento. Observe: a relação com a noologia. Pergunta: como Mário distingue psicologia e filosofia do espírito?'),
    mfs.ref('mfs-teoria-conhecimento'),
    mfs.ref('mfs-ontologia'),
    mfs.ref('mfs-pitagoras'),
    mfs.ref('mfs-um-multiplo'),
    mfs.ref('mfs-aristoteles-mutacoes'),
    mfs.ref('mfs-filosofia-concreta'),
    mfs.ref('mfs-metodos'),
    F('mfs-esquematologia', 'Tratado de Esquematologia', 'década de 1950', 'Por que aqui: a teoria dos esquemas, base da gnosiologia do autor. Observe: esquema, assimilação, acomodação. Pergunta: compare com Kant e com Piaget.'),
    F('mfs-tensoes', 'Teoria Geral das Tensões', 'década de 1950', 'Por que aqui: a "tensão" como categoria da filosofia concreta. Observe: totalidade e estrutura. Pergunta: o que é uma tensão em sentido ontológico?', { nivel: 5 }),
    F('mfs-afirmacao-negacao', 'Filosofias da Afirmação e da Negação', 'década de 1960', 'Por que aqui: a classificação das filosofias pelo que afirmam ou negam (ligação com a "atitude positiva", aula 11-2). Observe: os critérios. Pergunta: toda filosofia negativa se autorrefuta?'),
    F('mfs-grandes-erros', 'Origem dos Grandes Erros Filosóficos', 'década de 1960', 'Por que aqui: diagnóstico dos erros por abstração e absolutização. Observe: os exemplos históricos. Pergunta: compare com A Unidade da Experiência Filosófica de Gilson.'),
    F('mfs-erros-natureza', 'Erros na Filosofia da Natureza', 'década de 1960', 'Por que aqui: aplica o diagnóstico à cosmologia. Observe: mecanicismo e materialismo. Pergunta: que erro Mário vê na física moderna?'),
    F('mfs-logistica', 'Grandezas e Misérias da Logística', 'década de 1960', 'Por que aqui: avaliação da lógica simbólica. Observe: limites da formalização. Pergunta: a crítica atinge a lógica contemporânea (Frege, Russell)?', { nivel: 5 }),
    F('mfs-sabedoria', 'Mathesis Megisthe: A Sabedoria dos Princípios; A Sabedoria da Unidade; A Sabedoria do Ser e do Nada; A Sabedoria das Leis Eternas', 'décadas de 1960 (algumas póstumas)', 'Por que aqui: o coroamento pitagórico-platônico do sistema. Observe: a "suprema instrução". Pergunta: o que se acrescenta à Filosofia Concreta?', { nivel: 5 }),
    mfs.ref('mfs-valores'),
    mfs.ref('mfs-sociologia-etica'),
    mfs.ref('mfs-simbolica'),
    mfs.ref('mfs-crise'),
    mfs.ref('mfs-noologia'),
    mfs.ref('mfs-infinito'),
    F('mfs-cultura', 'Filosofia e História da Cultura', 'década de 1960', 'Por que aqui: a filosofia aplicada às culturas. Observe: ciclos culturais. Pergunta: compare com Spengler e Toynbee.'),
    F('mfs-temas-sociais', 'Análise de Temas Sociais; O Problema Social; Temática e Problemática das Ciências Sociais', 'década de 1960', 'Por que aqui: a sociologia do autor, depois da Sociologia Fundamental. Observe: crítica ao coletivismo. Pergunta: que ordem social Mário propõe?'),
    F('mfs-economia', 'Tratado de Economia', 'década de 1960', 'Por que aqui: a economia vista pela filosofia concreta. Observe: valor econômico e valor ético. Pergunta: como se relacionam?', { nivel: 3 }),
    F('mfs-marxismo', 'Análise Dialéctica do Marxismo', 'década de 1950', 'Por que aqui: a crítica de Mário a Marx, depois da aula 10-2. Observe: uso da decadialética. Pergunta: a crítica atinge o núcleo do marxismo?'),
    F('mfs-invasao', 'Invasão Vertical dos Bárbaros', '1967', 'Por que aqui: o diagnóstico cultural tardio (aula 11-10). Observe: a barbárie que sobe de baixo. Pergunta: que evidência sustenta o diagnóstico?', { nivel: 2 }),
    F('mfs-oratoria', 'Curso de Oratória e Retórica; Técnica do Discurso Moderno', 'décadas de 1940–1950', 'Por que aqui: o professor de retórica (ligação com a aula 12-3). Observe: retórica como arte do discurso persuasivo. Pergunta: compare com a Retórica de Aristóteles.', { nivel: 2 }),
    F('mfs-traducoes', 'Traduções e comentários (Nietzsche: Assim Falava Zaratustra e Vontade de Potência; Pitágoras; outros)', 'décadas de 1940–1960', 'Por que aqui: o leitor de Nietzsche na juventude (aula 11-1). Observe: o aparato de comentários. Pergunta: o que Mário conserva de Nietzsche?', { nivel: 3 }),
    F('mfs-paginas', 'Páginas Várias e escritos dispersos', 'várias datas', 'Por que aqui: completam a obra. Observe: os temas fora da Enciclopédia. Pergunta: que interesses não sistemáticos aparecem?', { nivel: 2 }),
    mfs.ref('mfs-dicionario'),
  ] },

  { chave: 'olavo', itens: [
    olavo.ref('olavo-guia-mfs'),
    Ol('olavo-tradicionalistas', 'Escritos da fase tradicionalista (Universalidade e Abstração; Astros e Símbolos; Fronteiras da Tradição)', 'década de 1980', 'Por que aqui: o ponto de partida, antes do afastamento do tradicionalismo (aula 12-1). Observe: a influência de Guénon e Schuon. Pergunta: o que o autor depois rejeitou?', { nivel: 3 }),
    olavo.ref('olavo-historia-essencial'),
    olavo.ref('olavo-como-vencer'),
    olavo.ref('olavo-quatro-discursos'),
    olavo.ref('olavo-filosofia-cultura'),
    Ol('olavo-silencio', 'Símbolos e Mitos no Filme "O Silêncio dos Inocentes"', '1993', 'Por que aqui: a interpretação simbólica aplicada a uma obra popular. Observe: o método da dialética simbólica. Pergunta: que critérios controlam a interpretação?', { nivel: 2 }),
    olavo.ref('olavo-dialetica-simbolica'),
    Ol('olavo-nova-era', 'A Nova Era e a Revolução Cultural: Fritjof Capra & Antonio Gramsci', '1994', 'Por que aqui: a tese da revolução cultural (aula 12-5). Observe: Nova Era e gramscismo. Pergunta: versão forte ou fraca da tese?', { verificacao: 'confirmado', nota: '' }),
    olavo.ref('olavo-jardim'),
    olavo.ref('olavo-imbecil'),
    olavo.ref('olavo-futuro'),
    Ol('olavo-vaca-brejo', 'A Longa Marcha da Vaca para o Brejo e outras coletâneas de artigos', 'década de 1990–2000', 'Por que aqui: o cronista político, separado da obra filosófica (aula 12-1). Observe: o tom polêmico. Pergunta: que teses filosóficas sustentam as crônicas?', { nivel: 1 }),
    Ol('olavo-maquiavel', 'Maquiavel ou A Confusão Demoníaca', '2011', 'Por que aqui: leitura de Maquiavel com o diagnóstico de paralaxe (aula 12-2). Observe: as fontes citadas. Pergunta: confira as passagens de O Príncipe.'),
    olavo.ref('olavo-inverso'),
    Ol('olavo-dugin', 'Os EUA e a Nova Ordem Mundial (debate com Alexandr Dugin)', '2012', 'Por que aqui: debate público com um adversário intelectual. Observe: como cada um apresenta o outro. Pergunta: houve steelman de ambos os lados?', { nivel: 2 }),
    olavo.ref('olavo-minimo'),
    Ol('olavo-descartes', 'Visões de Descartes: Entre o Gênio Mau e o Espírito da Verdade', '2013', 'Por que aqui: leitura de Descartes (aula 9-2) pelo autor. Observe: o sonho de Descartes. Pergunta: compare com Maritain (O Sonho de Descartes) e Gilson.'),
    Ol('olavo-husserl', 'Edmund Husserl contra o Psicologismo (aulas transcritas)', 'transcrições de aulas', 'Por que aqui: leitura das Investigações Lógicas (aula 10-5). Observe: o argumento contra o psicologismo. Pergunta: a leitura é fiel a Husserl?', { nivel: 4 }),
    Ol('olavo-seminario', 'Seminário de Filosofia (aulas gravadas e transcrições)', '2009–2022', 'Por que aqui: o grosso do ensino do autor está em aulas. Observe: distinguir aula transcrita e livro revisado. Pergunta: como citar uma aula com rigor?', { nivel: 3 }),
    Ol('olavo-tardios', 'Coletâneas tardias (A Fórmula para Enlouquecer o Mundo; O Dever de Insultar e outras)', '2014–2022', 'Por que aqui: completam a obra publicada. Observe: a mistura de ensaio filosófico e polêmica. Pergunta: que teses novas aparecem?', { nivel: 2 }),
  ] },
];
