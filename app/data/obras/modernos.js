// Obras completas de Descartes, Pascal, Locke, Hume, Rousseau e Kant, em ordem de leitura.
import { autor } from './_obra.js';

const base = { area: 'Filosofia moderna', degrau: 7, modulo: 'm9' };
const descartes = autor({ ...base, chave: 'descartes', autor: 'René Descartes' });
const pascal = autor({ ...base, chave: 'pascal', autor: 'Blaise Pascal' });
const locke = autor({ ...base, chave: 'locke', autor: 'John Locke' });
const hume = autor({ ...base, chave: 'hume', autor: 'David Hume' });
const rousseau = autor({ ...base, chave: 'rousseau', autor: 'Jean-Jacques Rousseau' });
const kant = autor({ ...base, chave: 'kant', autor: 'Immanuel Kant', nivel: 4 });
const K = kant.O;

export const MODERNOS = [
  { chave: 'descartes', itens: [
    descartes.ref('descartes-discurso'),
    descartes.O('descartes-ensaios', 'Ensaios do Discurso: Dióptrica, Meteoros e Geometria', '1637', 'Por que aqui: os três ensaios científicos que o Discurso prefaciava. Observe: a Geometria e as coordenadas. Pergunta: como o método se prova na ciência?', { nivel: 4 }),
    descartes.O('descartes-regras', 'Regras para a Direção do Espírito', 'c. 1628 (póstumo, 1701)', 'Por que aqui: a primeira formulação do método. Observe: intuição e dedução. Pergunta: o que muda entre as Regras e o Discurso?'),
    descartes.O('descartes-mundo', 'O Mundo (Tratado da Luz) e Tratado do Homem', 'c. 1630–1633 (póstumos)', 'Por que aqui: a física mecanicista que Descartes não publicou após a condenação de Galileu. Observe: o corpo como máquina. Pergunta: o que sobra para a alma num corpo-máquina?'),
    descartes.ref('descartes-meditacoes'),
    descartes.O('descartes-objecoes', 'Objeções e Respostas às Meditações', '1641–1642', 'Por que aqui: o debate com Hobbes, Arnauld, Gassendi e Mersenne. Observe: o círculo cartesiano (Quartas Objeções). Pergunta: qual objeção é a mais forte?', { nivel: 5 }),
    descartes.O('descartes-principios', 'Princípios da Filosofia', '1644; trad. francesa 1647', 'Por que aqui: o sistema em forma de manual, com a "árvore do saber" no prefácio. Observe: livro II, a física da extensão. Pergunta: por que o vazio é impossível para Descartes?', { nivel: 4 }),
    descartes.O('descartes-cartas-elisabeth', 'Correspondência com Elisabeth da Boêmia', '1643–1649', 'Por que aqui: o problema da interação alma-corpo e a moral. Observe: a carta de 21 de maio de 1643. Pergunta: Descartes responde bem à princesa?'),
    descartes.O('descartes-paixoes', 'As Paixões da Alma', '1649', 'Por que aqui: a moral e a psicologia finais. Observe: a glândula pineal e a generosidade. Pergunta: como dominar as paixões?'),
    descartes.O('descartes-busca-verdade', 'A Busca da Verdade pela Luz Natural', 'póstumo', 'Por que aqui: diálogo inacabado que dramatiza a dúvida. Observe: Eudoxo, Poliandro e Epistêmon. Pergunta: por que o diálogo para no cogito?', { nivel: 2 }),
    descartes.O('descartes-outros', 'Escritos menores (Compêndio de Música, Notas contra um Programa, Carta a Voetius, Entrevista com Burman) e Correspondência geral', '1618–1650', 'Por que aqui: completam a obra. Observe: a Entrevista com Burman sobre as Meditações. Pergunta: o que as cartas a Mersenne mostram do método em ação?', { nivel: 3 }),
  ] },

  { chave: 'pascal', itens: [
    pascal.O('pascal-vacuo', 'Escritos sobre o vácuo (Experiências Novas, Prefácio para o Tratado do Vácuo)', '1647–1651', 'Por que aqui: o cientista antes do apologista. Observe: autoridade nas ciências da fé e experiência nas da natureza. Pergunta: onde vale a autoridade e onde a experiência?', { nivel: 2 }),
    pascal.O('pascal-triangulo', 'Tratado do Triângulo Aritmético e correspondência com Fermat', '1654', 'Por que aqui: a origem do cálculo de probabilidades, base da aposta. Observe: o problema das partidas. Pergunta: como a matemática do jogo prepara a aposta?', { nivel: 4 }),
    pascal.O('pascal-memorial', 'Memorial', '23 de novembro de 1654', 'Por que aqui: a experiência que muda sua vida. Observe: "Deus de Abraão... não dos filósofos". Pergunta: como esse texto ilumina os Pensamentos?', { nivel: 1 }),
    pascal.O('pascal-sacy', 'Conversa com o Sr. de Sacy sobre Epicteto e Montaigne', '1655', 'Por que aqui: a chave de leitura dos Pensamentos. Observe: grandeza sem miséria e miséria sem grandeza. Pergunta: por que só o cristianismo unifica ambas?', { nivel: 2 }),
    pascal.O('pascal-espirito-geometrico', 'Do Espírito Geométrico e Da Arte de Persuadir', 'c. 1657–1658', 'Por que aqui: lógica e retórica pascalianas. Observe: definir e demonstrar tudo é impossível. Pergunta: onde termina o método geométrico?', { nivel: 3 }),
    pascal.O('pascal-provinciais', 'As Provinciais', '1656–1657', 'Por que aqui: a polêmica contra a casuística laxista. Observe: a ironia e o probabilismo. Pergunta: quais críticas são justas e quais são polêmicas?'),
    pascal.O('pascal-graca', 'Escritos sobre a Graça', 'c. 1656–1658', 'Por que aqui: a teologia de Port-Royal. Observe: posição entre calvinistas e molinistas. Pergunta: como julgar esses textos à luz das condenações do jansenismo?', { nivel: 4 }),
    pascal.ref('pascal-pensamentos'),
    pascal.O('pascal-grandes', 'Três Discursos sobre a Condição dos Grandes; Oração para Pedir a Deus o Bom Uso das Doenças; Cartas', '1647–1660', 'Por que aqui: moral prática e espiritualidade do último Pascal. Observe: grandezas de estabelecimento e naturais. Pergunta: que respeito se deve ao poder?', { nivel: 2 }),
  ] },

  { chave: 'locke', itens: [
    locke.O('locke-tratados-governo-1660', 'Dois Opúsculos sobre o Governo', '1660–1662 (póstumos)', 'Por que aqui: o jovem Locke autoritário, ponto de partida para medir sua evolução. Observe: o magistrado e as coisas indiferentes. Pergunta: o que o fez mudar?', { verificacao: 'a confirmar', nota: 'Título português não verificado (Two Tracts on Government).' }),
    locke.O('locke-lei-natureza', 'Ensaios sobre a Lei da Natureza', 'c. 1663–1664 (póstumos)', 'Por que aqui: a lei natural antes do Ensaio, em diálogo com a escolástica. Observe: conhecimento da lei pela razão e pelos sentidos. Pergunta: Locke é herdeiro de Tomás aqui?', { verificacao: 'a confirmar', nota: 'Título português não verificado (Essays on the Law of Nature).' }),
    locke.O('locke-ensaio-tolerancia', 'Ensaio sobre a Tolerância', '1667', 'Por que aqui: primeira formulação da tolerância. Observe: limites do poder civil. Pergunta: o que já está aqui da Carta de 1689?', { verificacao: 'a confirmar' }),
    locke.ref('locke-ensaio'),
    locke.O('locke-carta-tolerancia', 'Carta sobre a Tolerância (e Segunda e Terceira Cartas)', '1689–1692', 'Por que aqui: separação entre Igreja e Estado. Observe: as exceções (ateus e católicos). Pergunta: os argumentos justificam as exceções?'),
    locke.O('locke-dois-tratados', 'Dois Tratados sobre o Governo', '1689', 'Por que aqui: o primeiro refuta Filmer; o segundo funda o governo no consentimento. Observe: propriedade (II, cap. V) e resistência. Pergunta: o consentimento basta para a legitimidade?'),
    locke.O('locke-educacao', 'Alguns Pensamentos sobre a Educação', '1693', 'Por que aqui: a pedagogia que deriva do Ensaio. Observe: hábito e virtude. Pergunta: compare com o Emílio de Rousseau.', { nivel: 2 }),
    locke.O('locke-razoabilidade', 'A Razoabilidade do Cristianismo', '1695', 'Por que aqui: o cristianismo mínimo e razoável. Observe: "Jesus é o Messias" como artigo central. Pergunta: o que se perde numa fé reduzida ao mínimo?'),
    locke.O('locke-conduta', 'Da Conduta do Entendimento', 'póstumo, 1706', 'Por que aqui: o método de pensar bem, apêndice do Ensaio. Observe: os vícios do raciocínio. Pergunta: que hábitos intelectuais Locke recomenda?', { nivel: 2 }),
    locke.O('locke-outros', 'Escritos econômicos (Considerações sobre juros e moeda) e Paráfrase das Epístolas de Paulo', '1691–1707', 'Por que aqui: completam a obra. Observe: economia política nascente. Pergunta: como Locke une exegese e razão?', { verificacao: 'a confirmar', nota: 'Traduções portuguesas não verificadas.' }),
  ] },

  { chave: 'hume', itens: [
    hume.O('hume-tratado', 'Tratado da Natureza Humana (livros I–III) e Sinopse', '1739–1740', 'Por que aqui: a obra de juventude, mais radical que a Investigação. Observe: identidade pessoal (I, IV, 6), paixões (II), "é" e "deve" (III, I, 1). Pergunta: por que Hume a renegou em parte?', { nivel: 5 }),
    hume.O('hume-carta-cavalheiro', 'Carta de um Cavalheiro a seu Amigo em Edimburgo', '1745', 'Por que aqui: Hume se defende da acusação de ateísmo. Observe: como ele resume o Tratado. Pergunta: a defesa é convincente?', { nivel: 2 }),
    hume.ref('hume-investigacao'),
    hume.O('hume-moral', 'Investigação sobre os Princípios da Moral', '1751', 'Por que aqui: a obra que Hume considerava a melhor. Observe: utilidade e simpatia. Pergunta: a moral se funda no sentimento?'),
    hume.O('hume-ensaios', 'Ensaios Morais, Políticos e Literários', '1741–1777', 'Por que aqui: o ensaísta político e crítico. Observe: "Do padrão do gosto", "Do contrato original". Pergunta: por que Hume rejeita o contrato social?'),
    hume.O('hume-historia', 'História da Inglaterra', '1754–1762', 'Por que aqui: a obra que o tornou famoso em vida. Observe: o historiador cético diante do fanatismo. Pergunta: como a filosofia aparece na história?', { nivel: 3 }),
    hume.O('hume-dissertacoes', 'Quatro Dissertações (História Natural da Religião; Das Paixões; Da Tragédia; Do Padrão do Gosto)', '1757', 'Por que aqui: religião e estética. Observe: a origem da religião no medo e na esperança. Pergunta: explicar a origem refuta a verdade?'),
    hume.ref('hume-dialogos'),
    hume.O('hume-postumos', 'Minha Própria Vida; Do Suicídio; Da Imortalidade da Alma', '1776–1777 (póstumos)', 'Por que aqui: os últimos textos. Observe: a defesa do suicídio e a crítica à imortalidade. Pergunta: como responder com Tomás (ST II-II, q. 64, a. 5)?', { nivel: 2 }),
  ] },

  { chave: 'rousseau', itens: [
    rousseau.O('rousseau-ciencias-artes', 'Discurso sobre as Ciências e as Artes', '1750', 'Por que aqui: o primeiro discurso e o paradoxo do progresso. Observe: virtude contra civilização. Pergunta: o progresso corrompe?', { nivel: 2 }),
    rousseau.O('rousseau-desigualdade', 'Discurso sobre a Origem e os Fundamentos da Desigualdade', '1755', 'Por que aqui: o estado de natureza e a propriedade. Observe: amor de si e amor-próprio. Pergunta: a desigualdade é natural?'),
    rousseau.O('rousseau-economia-politica', 'Discurso sobre a Economia Política', '1755', 'Por que aqui: primeira aparição da "vontade geral". Observe: o artigo da Enciclopédia. Pergunta: o que prepara do Contrato?'),
    rousseau.O('rousseau-linguas', 'Ensaio sobre a Origem das Línguas', 'póstumo, 1781', 'Por que aqui: linguagem, paixão e música. Observe: as línguas nascem das paixões. Pergunta: compare com o Crátilo de Platão.'),
    rousseau.O('rousseau-dalembert', 'Carta a d’Alembert sobre os Espetáculos', '1758', 'Por que aqui: teatro e costumes. Observe: a defesa de Genebra contra o teatro. Pergunta: a arte forma ou deforma os costumes?'),
    rousseau.O('rousseau-voltaire', 'Carta a Voltaire sobre a Providência', '1756', 'Por que aqui: resposta ao poema sobre o terremoto de Lisboa. Observe: o mal causado pelo homem. Pergunta: quem tem razão, Voltaire ou Rousseau?', { nivel: 2 }),
    rousseau.O('rousseau-heloisa', 'Júlia ou a Nova Heloísa', '1761', 'Por que aqui: o romance mais lido do século, sobre virtude e paixão. Observe: a comunidade de Clarens. Pergunta: que moral o romance propõe?', { nivel: 2, area: 'Literatura' }),
    rousseau.O('rousseau-emilio', 'Emílio ou Da Educação', '1762', 'Por que aqui: a educação natural e a profissão de fé do vigário saboiano (livro IV). Observe: educação negativa. Pergunta: por que o livro foi condenado?'),
    rousseau.ref('rousseau-contrato'),
    rousseau.O('rousseau-beaumont', 'Carta a Christophe de Beaumont e Cartas Escritas da Montanha', '1763–1764', 'Por que aqui: defesa do Emílio e do Contrato contra as condenações. Observe: bondade natural contra pecado original. Pergunta: onde está a divergência decisiva com a fé católica?'),
    rousseau.O('rousseau-corsega-polonia', 'Projeto de Constituição para a Córsega; Considerações sobre o Governo da Polônia', '1765; 1772', 'Por que aqui: a teoria aplicada a povos reais. Observe: costumes, educação cívica. Pergunta: o Contrato é realizável?'),
    rousseau.O('rousseau-confissoes', 'Confissões', 'póstumo, 1782–1789', 'Por que aqui: a autobiografia moderna, em contraste com Agostinho. Observe: o eu diante de si, não de Deus. Pergunta: compare as duas Confissões.', { nivel: 2 }),
    rousseau.O('rousseau-dialogos', 'Rousseau Juiz de Jean-Jacques (Diálogos)', 'póstumo, 1782', 'Por que aqui: a autodefesa do último Rousseau. Observe: o tema da perseguição. Pergunta: o que o texto revela do autor?', { nivel: 2 }),
    rousseau.O('rousseau-devaneios', 'Os Devaneios do Caminhante Solitário', 'póstumo, 1782', 'Por que aqui: o fim da obra; felicidade na contemplação da natureza. Observe: o quinto passeio. Pergunta: que felicidade Rousseau encontra?', { nivel: 2 }),
    rousseau.O('rousseau-musica', 'Escritos sobre música (Carta sobre a Música Francesa; Dicionário de Música)', '1753; 1768', 'Por que aqui: completam a obra. Observe: melodia e expressão. Pergunta: como a música se liga à antropologia de Rousseau?', { nivel: 2, area: 'Estética' }),
  ] },

  { chave: 'kant', itens: [
    K('kant-forcas-vivas', 'Pensamentos sobre a Verdadeira Estimação das Forças Vivas', '1747', 'Por que aqui: a primeira obra, entre Leibniz e Descartes. Observe: o jovem Kant físico. Pergunta: que problema científico o move?', { nivel: 3 }),
    K('kant-historia-ceu', 'História Geral da Natureza e Teoria do Céu', '1755', 'Por que aqui: a hipótese nebular. Observe: ordem natural e Criador. Pergunta: como Kant une física e teologia aqui?', { nivel: 3 }),
    K('kant-nova-dilucidatio', 'Nova Elucidação dos Primeiros Princípios do Conhecimento Metafísico', '1755', 'Por que aqui: o Kant racionalista. Observe: princípio de razão determinante. Pergunta: o que ele critica em Wolff?', { nivel: 5 }),
    K('kant-monadologia-fisica', 'Monadologia Física', '1756', 'Por que aqui: espaço e mônadas. Observe: o problema da divisibilidade. Pergunta: como antecipa a segunda antinomia?', { nivel: 4 }),
    K('kant-otimismo', 'Ensaio de Algumas Considerações sobre o Otimismo', '1759', 'Por que aqui: o melhor dos mundos possíveis. Observe: defesa de Leibniz que Kant depois renegou. Pergunta: por que mudou?', { nivel: 2 }),
    K('kant-figuras', 'A Falsa Sutileza das Quatro Figuras Silogísticas', '1762', 'Por que aqui: Kant lógico, ligação com o Módulo 4. Observe: redução à primeira figura. Pergunta: a crítica procede?', { nivel: 3 }),
    K('kant-unico-argumento', 'O Único Argumento Possível para uma Demonstração da Existência de Deus', '1763', 'Por que aqui: já "ser não é predicado". Observe: o argumento pela possibilidade. Pergunta: como antecipa a Crítica?', { nivel: 4 }),
    K('kant-grandezas-negativas', 'Ensaio para Introduzir na Filosofia o Conceito de Grandezas Negativas', '1763', 'Por que aqui: oposição lógica e real. Observe: o problema da causa. Pergunta: como Kant chega ao problema de Hume?', { nivel: 4 }),
    K('kant-belo-sublime', 'Observações sobre o Sentimento do Belo e do Sublime', '1764', 'Por que aqui: o Kant ensaísta e moralista. Observe: influência de Rousseau. Pergunta: compare com a Crítica do Juízo.', { nivel: 2 }),
    K('kant-evidencia', 'Investigação sobre a Evidência dos Princípios da Teologia Natural e da Moral', '1764', 'Por que aqui: método da metafísica contra o da matemática. Observe: análise contra construção. Pergunta: a metafísica pode ser certa como a matemática?', { nivel: 4 }),
    K('kant-sonhos', 'Sonhos de um Visionário Explicados pelos Sonhos da Metafísica', '1766', 'Por que aqui: ironia contra Swedenborg e contra a metafísica dogmática. Observe: os limites da razão. Pergunta: quem é o visionário?', { nivel: 3 }),
    K('kant-regioes', 'Do Primeiro Fundamento da Distinção das Regiões no Espaço', '1768', 'Por que aqui: as contrapartes incongruentes (mãos). Observe: espaço absoluto. Pergunta: por que esse problema leva à Estética?', { nivel: 4 }),
    K('kant-dissertacao', 'Dissertação de 1770 (Da Forma e dos Princípios do Mundo Sensível e Inteligível)', '1770', 'Por que aqui: a porta da filosofia crítica. Observe: espaço e tempo como formas da sensibilidade. Pergunta: o que falta para a Crítica?', { nivel: 5 }),
    kant.ref('kant-prolegomenos'),
    kant.ref('kant-crp'),
    K('kant-historia-universal', 'Ideia de uma História Universal com Propósito Cosmopolita', '1784', 'Por que aqui: a filosofia da história. Observe: a "insociável sociabilidade". Pergunta: a história tem um sentido?', { nivel: 2 }),
    K('kant-esclarecimento', 'Resposta à Pergunta: Que é o Esclarecimento?', '1784', 'Por que aqui: o manifesto do Iluminismo. Observe: "ousa saber" e uso público da razão. Pergunta: o que é a "menoridade"?', { nivel: 1 }),
    kant.ref('kant-fundamentacao'),
    K('kant-principios-metafisicos', 'Princípios Metafísicos da Ciência da Natureza', '1786', 'Por que aqui: a Crítica aplicada à física de Newton. Observe: a matéria como força. Pergunta: o que é a física a priori?', { nivel: 5 }),
    K('kant-orientar', 'Que Significa Orientar-se no Pensamento?', '1786', 'Por que aqui: razão e fé na polêmica do panteísmo. Observe: a necessidade da razão. Pergunta: crer é uma exigência racional?', { nivel: 3 }),
    K('kant-comeco-historia', 'Começo Conjectural da História Humana', '1786', 'Por que aqui: leitura filosófica de Gênesis 2–6. Observe: a liberdade como queda e progresso. Pergunta: compare com a leitura católica de Gênesis 3.', { nivel: 2 }),
    kant.ref('kant-crpratica'),
    K('kant-juizo', 'Crítica da Faculdade de Julgar', '1790', 'Por que aqui: a terceira Crítica: belo, sublime e finalidade natural. Observe: juízo reflexionante. Pergunta: a finalidade na natureza é real?', { nivel: 5 }),
    K('kant-teodiceia', 'Sobre o Fracasso de Todas as Tentativas Filosóficas na Teodiceia', '1791', 'Por que aqui: o mal e a razão. Observe: Jó como modelo. Pergunta: a teodiceia é impossível?', { nivel: 3 }),
    K('kant-religiao', 'A Religião nos Limites da Simples Razão', '1793', 'Por que aqui: o mal radical e a religião moral. Observe: Cristo como ideal moral. Pergunta: o que se perde do cristianismo?', { nivel: 4 }),
    K('kant-teoria-pratica', 'Sobre a Expressão Corrente: Isto Pode Ser Correto na Teoria, mas Nada Vale na Prática', '1793', 'Por que aqui: moral, direito e política. Observe: contra Garve, Hobbes e Mendelssohn. Pergunta: a teoria vale na prática?', { nivel: 3 }),
    K('kant-fim-coisas', 'O Fim de Todas as Coisas', '1794', 'Por que aqui: escatologia na razão. Observe: o fim moral. Pergunta: o que a razão pode dizer do fim?', { nivel: 2 }),
    K('kant-paz', 'À Paz Perpétua', '1795', 'Por que aqui: a política internacional. Observe: os artigos definitivos. Pergunta: a paz perpétua é ideal ou programa?', { nivel: 2 }),
    K('kant-metafisica-costumes', 'Metafísica dos Costumes (Doutrina do Direito e Doutrina da Virtude)', '1797', 'Por que aqui: a aplicação da Fundamentação. Observe: deveres para consigo e para com os outros. Pergunta: como direito e virtude se distinguem?', { nivel: 4 }),
    K('kant-mentir', 'Sobre um Suposto Direito de Mentir por Amor à Humanidade', '1797', 'Por que aqui: resposta a Benjamin Constant (aula 9-8). Observe: o assassino à porta. Pergunta: compare com Agostinho (A Mentira) e Tomás.', { nivel: 2 }),
    K('kant-conflito', 'O Conflito das Faculdades', '1798', 'Por que aqui: filosofia, teologia, direito e medicina na universidade. Observe: a liberdade da faculdade de filosofia. Pergunta: qual o lugar da filosofia diante da teologia?', { nivel: 3 }),
    K('kant-antropologia', 'Antropologia de um Ponto de Vista Pragmático', '1798', 'Por que aqui: o que o homem faz de si. Observe: caráter e temperamentos. Pergunta: que antropologia a moral supõe?', { nivel: 2 }),
    K('kant-licoes', 'Lições publicadas: Lógica (Jäsche), Pedagogia, Lições de Ética e de Metafísica (notas de alunos)', '1800–1803; outras póstumas', 'Por que aqui: o professor Kant. Observe: as quatro perguntas (Lógica: que posso saber, fazer, esperar; que é o homem). Pergunta: por que tudo se reduz à última?', { nivel: 3 }),
    K('kant-opus-postumum', 'Opus postumum', '1796–1803 (póstumo)', 'Por que aqui: o último projeto inacabado. Observe: passagem da metafísica à física. Pergunta: Kant estava revendo a Crítica?', { nivel: 5, verificacao: 'a confirmar', nota: 'Tradução portuguesa completa não verificada.' }),
  ] },
];
