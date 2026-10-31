// Lógica formal II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Lógica formal).
// Silogística, estoicos e lógica medieval; de Leibniz a Gödel; Aristóteles e Tomás; Frege, Russell, Wittgenstein, Gödel e Tarski.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lf2-1', titulo: 'Silogística, estoicos e lógica medieval', duracao: '150 min',
  aprendera: ['Reconhecer os modos silogísticos principais', 'Usar o quadrado das oposições', 'Conhecer a lógica proposicional estoica', 'Conhecer contribuições da lógica medieval'],
  prereq: ['Lógica formal I (módulo LF1)'],
  explicacao: `
<h3>O problema</h3>
<p>A lógica formal moderna não nasceu do nada: retomou e transformou mais de dois mil anos de reflexão. O que os antigos e medievais descobriram?</p>
<h3>Silogística</h3>
<p>Aristóteles, nos Primeiros analíticos, estudou o silogismo categórico, com proposições do tipo A (todo S é P), E (nenhum S é P), I (algum S é P) e O (algum S não é P) ${tag('fato')}. Os medievais nomearam os modos válidos: Barbara (todo M é P; todo S é M; logo, todo S é P), Celarent, Darii e Ferio, na primeira figura ${tag('fato')}.</p>
<h3>Quadrado das oposições</h3>
<p>A e O são contraditórias, assim como E e I: uma é verdadeira se e só se a outra é falsa ${tag('fato')}. A e E são contrárias: não podem ser ambas verdadeiras ${tag('fato')}. I e O são subcontrárias: não podem ser ambas falsas ${tag('fato')}.</p>
<h3>Estoicos</h3>
<p>Os estoicos, sobretudo Crisipo (século III a.C.), desenvolveram uma lógica de proposições com "indemonstráveis" equivalentes ao modus ponens, ao modus tollens e ao silogismo disjuntivo ${tag('fato')}.</p>
<h3>Idade Média</h3>
<p>Boécio transmitiu a lógica aristotélica ao Ocidente latino; Abelardo, Pedro Hispano (Tratados, século XIII), Guilherme de Ockham e outros desenvolveram as teorias da suposição (a que uma palavra se refere numa frase) e das consequências ${tag('fato')}. A Lógica de Port-Royal (1662) sistematizou a lógica para o ensino ${tag('fato')}.</p>`,
  vocabulario: [
    ['Silogismo categórico', 'Argumento com duas premissas e uma conclusão do tipo A, E, I ou O.'],
    ['Termo médio', 'Termo comum às premissas que não aparece na conclusão.'],
    ['Contraditórias', 'Proposições de valores sempre opostos (A–O, E–I).'],
    ['Indemonstráveis', 'Esquemas básicos da lógica estoica.'],
    ['Suposição', 'Teoria medieval sobre a referência dos termos na frase.'],
  ],
  exemplos: `<p><strong>Barbara:</strong> "Todo animal é mortal; todo homem é animal; logo, todo homem é mortal." M = animal, P = mortal, S = homem. Formalizado em lógica de predicados: ∀x(Ax → Mx), ∀x(Hx → Ax) ⊢ ∀x(Hx → Mx). A forma medieval e a moderna dizem o mesmo.</p>`,
  contexto: `<p><strong>No mundo:</strong> os nomes Barbara, Celarent etc. eram versos mnemônicos usados no ensino medieval ${tag('fato')}. <strong>No Brasil:</strong> a lógica aristotélica foi ensinada nos colégios jesuítas coloniais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a silogística continua útil', tag: 'argumento',
    premissas: ['Muitos raciocínios cotidianos e filosóficos têm a forma de silogismo categórico.', 'A silogística permite testá-los rapidamente pelas regras dos termos.', 'Ela é um fragmento correto da lógica de predicados.'],
    conclusao: 'Logo, a silogística continua útil, embora a lógica moderna seja mais ampla.',
    nota: 'A lógica de predicados trata relações ("maior que") que a silogística não capta.',
  },
  objecoes: [
    { objecao: 'A lógica medieval foi pura sutileza estéril.', tag: 'debate',
      resposta: 'Historiadores da lógica mostraram que os medievais anteciparam temas modernos: semântica da referência, consequência lógica, paradoxos. Houve excessos escolares, mas a contribuição foi real e é hoje reconhecida.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com os marcos de Aristóteles a Port-Royal, e analise três silogismos (dois válidos e um inválido), indicando termo médio, figura e modo.</p>`,
  fonte: {
    obra: 'Aristóteles, Primeiros analíticos, livro I, caps. 1–7', link: null,
    orientacao: `<p>Observe a definição de silogismo e as figuras.</p>`,
  },
  perguntas: [
    { p: 'Qual a forma de Barbara?', r: 'Todo M é P; todo S é M; logo, todo S é P.' },
    { p: 'Que proposições são contraditórias no quadrado?', r: 'A e O; E e I.' },
    { p: 'Que estoico desenvolveu a lógica proposicional?', r: 'Crisipo.' },
  ],
  exercicios: [
    mc('"Algum S não é P" é proposição do tipo:', ['A', 'E', 'I', 'O'], 3, 'Particular negativa.'),
    mc('A e E são:', ['Contraditórias', 'Contrárias', 'Subcontrárias', 'Equivalentes'], 1, 'Quadrado.'),
    mc('O termo comum às premissas é o:', ['Maior', 'Menor', 'Médio', 'Sujeito'], 2, 'Silogismo.'),
    mc('A Lógica de Port-Royal é de:', ['1079', '1279', '1662', '1879'], 2, 'Ensino.'),
    mc('Os indemonstráveis estoicos incluem o:', ['Modus ponens', 'Barbara', 'Quadrado', 'Teorema de Gödel'], 0, 'Proposicional.'),
    disc('Analise três silogismos (dois válidos, um inválido) com termo médio, figura e modo.', ['Silogismos', 'Termo médio', 'Figura e modo', 'Validade']),
  ],
  resumo: ['Proposições A, E, I, O.', 'Barbara, Celarent, Darii, Ferio.', 'Quadrado das oposições.', 'Estoicos: Crisipo.', 'Medievais: suposição e consequências; Port-Royal (1662).'],
  referencias: [
    { texto: 'Aristóteles, Primeiros analíticos.', livro: 'aristoteles-analiticos' },
    { texto: 'Pedro Hispano, Tratados (século XIII).' },
    { texto: 'Jacques Maritain, Lógica menor (1923).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Barbara', 'A-A-A.'], ['A–O', 'Contraditórias.'], ['Crisipo', 'Estoicos.']],
  avancado: {
    texto: `<h3>Importação existencial</h3>
<p>Na silogística tradicional, de "todo S é P" se infere "algum S é P" (subalternação), o que supõe que existam S ${tag('fato')}. Na lógica moderna, ∀x(Sx → Px) é verdadeira mesmo que não exista nenhum S, e a subalternação falha ${tag('fato')}. A diferença explica por que alguns modos tradicionais (como Darapti) exigem premissa existencial explícita ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Irving Copi, Introdução à lógica, capítulo sobre o quadrado moderno.', livro: 'copi-logica' }],
    exercicios: [
      mc('A subalternação supõe que:', ['Existam S', 'Não existam S', 'P seja falso', 'Nada'], 0, 'Importação existencial.'),
      mc('Na lógica moderna, "todo unicórnio é branco" é:', ['Falsa', 'Verdadeira (vacuamente)', 'Sem sentido', 'Contraditória'], 1, 'Universal vazia.'),
      mc('Darapti exige premissa:', ['Existencial', 'Negativa', 'Disjuntiva', 'Nenhuma'], 0, 'Modo.'),
      disc('Explique a diferença entre o quadrado tradicional e o moderno com um exemplo.', ['Tradicional', 'Moderno', 'Exemplo', 'Consequência'])],
  },
}),

aula({
  id: 'lf2-2', titulo: 'De Leibniz a Gödel: a lógica torna-se matemática', duracao: '150 min',
  aprendera: ['Conhecer o projeto de Leibniz', 'Explicar a contribuição de Boole e de Frege', 'Conhecer o paradoxo de Russell e os Principia', 'Situar Gödel, Turing e a lógica no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a lógica de Aristóteles se tornou a base da matemática e da computação?</p>
<h3>Leibniz e Boole</h3>
<p>Leibniz sonhou com uma língua universal (characteristica universalis) e um cálculo do raciocínio, de modo que disputas pudessem ser resolvidas calculando ${tag('fato')}. George Boole, em A análise matemática da lógica (1847) e As leis do pensamento (1854), tratou a lógica como álgebra ${tag('fato')}.</p>
<h3>Frege</h3>
<p>Gottlob Frege, na Conceitografia (1879), criou a lógica de predicados com quantificadores, base da lógica moderna ${tag('fato')}. Quis fundar a aritmética na lógica (logicismo) ${tag('fato')}.</p>
<h3>Russell</h3>
<p>Em 1902, Bertrand Russell escreveu a Frege mostrando um paradoxo em seu sistema: o conjunto de todos os conjuntos que não pertencem a si mesmos pertence ou não a si mesmo? ${tag('fato')}. Russell e Whitehead escreveram os Principia Mathematica (1910–1913) para reconstruir a matemática em bases lógicas sem paradoxos ${tag('fato')}.</p>
<h3>Gödel e Turing</h3>
<p>Kurt Gödel provou em 1931 que todo sistema formal consistente, capaz de exprimir a aritmética elementar, contém proposições verdadeiras que não pode provar ${tag('fato')}. Alan Turing (1936) definiu a máquina abstrata que fundou a teoria da computação e mostrou que certos problemas não têm solução algorítmica ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Newton da Costa desenvolveu, a partir de 1963, as lógicas paraconsistentes, que admitem contradições sem que tudo se torne demonstrável ${tag('fato')}.</p>`,
  vocabulario: [
    ['Characteristica universalis', 'Língua universal sonhada por Leibniz.'],
    ['Álgebra de Boole', 'Tratamento algébrico da lógica.'],
    ['Quantificador', 'Operador "para todo" (∀) ou "existe" (∃).'],
    ['Paradoxo de Russell', 'Contradição do conjunto dos conjuntos que não se pertencem.'],
    ['Lógica paraconsistente', 'Lógica que admite contradições sem trivialização.'],
  ],
  exemplos: `<p><strong>O barbeiro:</strong> uma versão popular do paradoxo de Russell: numa aldeia, o barbeiro barbeia todos os que não se barbeiam a si mesmos, e só esses. Quem barbeia o barbeiro? Se ele se barbeia, não deveria; se não se barbeia, deveria. A conclusão é que tal barbeiro não pode existir — e, na teoria dos conjuntos, que certas coleções não podem ser conjuntos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a álgebra de Boole é a base dos circuitos digitais ${tag('fato')}. <strong>No Brasil:</strong> Newton da Costa trabalhou na Universidade de São Paulo e na UFSC, entre outras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lógica fundou a computação', tag: 'argumento',
    premissas: ['Boole mostrou que operações lógicas podem ser cálculos com 0 e 1.', 'Turing definiu o cálculo mecânico em termos lógicos precisos.', 'Os computadores implementam fisicamente essas operações em circuitos.'],
    conclusao: 'Logo, a computação moderna é aplicação direta da lógica formal.',
    nota: 'Claude Shannon mostrou em 1937 que circuitos de relés podem realizar a álgebra de Boole.',
  },
  objecoes: [
    { objecao: 'Gödel provou que a matemática é incerta e arbitrária.', tag: 'debate',
      resposta: 'Gödel provou um limite dos sistemas formais: nenhum sistema consistente e suficientemente forte prova todas as verdades aritméticas. Isso não torna a matemática arbitrária; mostra que a verdade matemática ultrapassa a demonstrabilidade num sistema fixo. Muitos, inclusive o próprio Gödel, viram nisso um argumento a favor do realismo matemático.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com os marcos de Leibniz a Newton da Costa, com data, autor e ideia central.</p>`,
  fonte: {
    obra: 'Carta de Bertrand Russell a Gottlob Frege (1902) e resposta de Frege', link: null,
    orientacao: `<p>Observe como Russell formula o paradoxo e como Frege reage, reconhecendo o golpe ao seu sistema.</p>`,
  },
  perguntas: [
    { p: 'O que criou Frege na Conceitografia?', r: 'A lógica de predicados com quantificadores.' },
    { p: 'O que diz o paradoxo de Russell?', r: 'O conjunto dos conjuntos que não pertencem a si mesmos pertence a si mesmo se e só se não pertence.' },
    { p: 'O que são lógicas paraconsistentes?', r: 'Lógicas que admitem contradições sem que tudo se torne demonstrável.' },
  ],
  exercicios: [
    mc('As leis do pensamento, de Boole, é de:', ['1679', '1854', '1879', '1931'], 1, 'Álgebra.'),
    mc('A Conceitografia é de:', ['1847', '1879', '1902', '1910'], 1, 'Frege.'),
    mc('Os teoremas da incompletude são de:', ['1902', '1913', '1931', '1936'], 2, 'Gödel.'),
    mc('A máquina abstrata de Turing é de:', ['1931', '1936', '1950', '1963'], 1, 'Computação.'),
    mc('Pioneiro brasileiro da lógica paraconsistente:', ['Newton da Costa', 'Mattoso Câmara', 'Anísio Teixeira', 'César Lattes'], 0, '1963.'),
    disc('Complete a linha do tempo de Leibniz a Newton da Costa.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  ],
  resumo: ['Leibniz: cálculo do raciocínio.', 'Boole (1847/1854).', 'Frege (1879): quantificadores.', 'Russell (1902); Principia (1910–13).', 'Gödel (1931), Turing (1936), Newton da Costa (1963).'],
  referencias: [
    { texto: 'Gottlob Frege, Conceitografia (1879).' },
    { texto: 'Bertrand Russell e Alfred N. Whitehead, Principia Mathematica (1910–1913).' },
    { texto: 'Newton da Costa, Ensaio sobre os fundamentos da lógica (1980).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1879', 'Frege.'], ['1902', 'Russell.'], ['1931', 'Gödel.']],
  avancado: {
    texto: `<h3>Shannon e os circuitos</h3>
<p>Na dissertação de mestrado de 1937, Claude Shannon mostrou que circuitos de interruptores e relés realizam as operações da álgebra de Boole: interruptores em série fazem "e", em paralelo fazem "ou" ${tag('fato')}. Esse trabalho é considerado fundamento do projeto de circuitos digitais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Claude Shannon, A Symbolic Analysis of Relay and Switching Circuits (1937).' }],
    exercicios: [
      mc('Interruptores em série realizam:', ['"E"', '"Ou"', '"Não"', '"Se"'], 0, 'Conjunção.'),
      mc('Interruptores em paralelo realizam:', ['"E"', '"Ou"', '"Não"', '"Se e só se"'], 1, 'Disjunção.'),
      mc('O trabalho de Shannon é de:', ['1854', '1937', '1950', '1963'], 1, 'Circuitos.'),
      disc('Desenhe um circuito com dois interruptores e uma lâmpada para p ∧ q e outro para p ∨ q.', ['Circuito ∧', 'Circuito ∨', 'Tabelas', 'Explicação'])],
  },
}),

aula({
  id: 'lf2-3', titulo: 'Aristóteles e Tomás: o silogismo e a lógica como arte da razão', duracao: '150 min',
  aprendera: ['Expor a definição aristotélica de silogismo', 'Distinguir silogismo demonstrativo, dialético e erístico', 'Conhecer a concepção tomista do objeto da lógica', 'Relacionar lógica clássica e lógica formal moderna'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Para Aristóteles e Tomás, o que é a lógica e para que serve? E como essa concepção se relaciona com a lógica simbólica?</p>
<h3>O silogismo</h3>
<p>Aristóteles define o silogismo como um discurso em que, postas certas coisas, algo diferente delas resulta necessariamente pelo simples fato de elas serem postas (Primeiros analíticos I, 1) ${tag('fato')}. É a definição de dedução válida ${tag('interpretacao')}.</p>
<h3>Tipos</h3>
<p>Aristóteles distingue o silogismo demonstrativo, que parte de premissas verdadeiras e primeiras e produz ciência (Analíticos posteriores); o dialético, que parte de opiniões aceitas (Tópicos); e o erístico, que apenas parece concluir (Refutações sofísticas) ${tag('fato')}.</p>
<h3>Tomás de Aquino</h3>
<p>Tomás define a lógica como arte que dirige o ato da razão ${tag('fato')}. Para os tomistas, a lógica estuda os "entes de razão" — as relações que a mente estabelece entre os conceitos ao conhecer, como sujeito, predicado, gênero e espécie ${tag('interpretacao')}. Divide-se a lógica segundo as três operações do intelecto: apreensão (conceito), juízo (proposição) e raciocínio (argumento) ${tag('fato')}.</p>
<h3>Clássica e moderna</h3>
<p>A lógica formal moderna amplia muito o alcance técnico da silogística; a tradição clássica oferece uma reflexão sobre o lugar da lógica no conhecimento da verdade ${tag('interpretacao')}. Maritain, em sua Lógica menor (1923), apresentou a lógica tomista para o ensino ${tag('fato')}.</p>`,
  vocabulario: [
    ['Silogismo', 'Discurso em que algo resulta necessariamente das premissas postas.'],
    ['Silogismo demonstrativo', 'Silogismo que produz ciência a partir de premissas verdadeiras e primeiras.'],
    ['Silogismo dialético', 'Silogismo a partir de opiniões aceitas.'],
    ['Ente de razão', 'Relação que existe na mente ao conhecer, objeto da lógica para os tomistas.'],
    ['Três operações', 'Apreensão, juízo e raciocínio.'],
  ],
  exemplos: `<p><strong>As três operações:</strong> apreendo o que é "homem" (conceito); julgo que "o homem é mortal" (proposição); raciocino: "todo homem é mortal; Pedro é homem; logo, Pedro é mortal" (argumento). A lógica clássica estuda essas três operações para que a razão as realize bem.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Órganon, conjunto dos escritos lógicos de Aristóteles, foi a base do ensino de lógica por quase dois mil anos ${tag('fato')}. <strong>No Brasil:</strong> manuais de lógica tomista circularam em seminários e faculdades católicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lógica serve à verdade', tag: 'argumento',
    premissas: ['A razão humana busca conhecer a verdade, mas pode errar no raciocínio.', 'A lógica estabelece as regras para que o raciocínio conserve a verdade das premissas.', 'Logo, ela é instrumento do conhecimento da verdade.'],
    conclusao: 'Logo, a lógica serve à verdade, e não é fim em si mesma.',
    nota: 'Por isso Aristóteles a chamou de "órganon", instrumento.',
  },
  objecoes: [
    { objecao: 'A lógica tomista está superada pela lógica matemática.', tag: 'debate',
      resposta: 'Tecnicamente, a lógica matemática é muito mais poderosa. Mas a reflexão tomista sobre conceito, juízo e raciocínio e sobre o lugar da lógica no conhecimento não foi substituída. Muitos autores integram as duas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de capítulos dos Primeiros analíticos (livro I, caps. 1–7) conforme o método do Degrau 0, com a formalização moderna de dois silogismos.</p>`,
  fonte: {
    obra: 'Aristóteles, Primeiros analíticos, livro I; Santo Tomás, Comentário aos Analíticos posteriores, proêmio', link: null,
    orientacao: `<p>Em Aristóteles, a definição e as figuras. Em Tomás, a definição da lógica e sua divisão.</p>`,
  },
  perguntas: [
    { p: 'Como Aristóteles define o silogismo?', r: 'Como discurso em que, postas certas coisas, algo diferente resulta necessariamente.' },
    { p: 'Quais as três operações do intelecto?', r: 'Apreensão, juízo e raciocínio.' },
    { p: 'O que é o silogismo dialético?', r: 'O que parte de opiniões aceitas.' },
  ],
  exercicios: [
    mc('O silogismo que produz ciência é o:', ['Dialético', 'Demonstrativo', 'Erístico', 'Retórico'], 1, 'Analíticos posteriores.'),
    mc('O silogismo que só parece concluir é o:', ['Demonstrativo', 'Dialético', 'Erístico', 'Categórico'], 2, 'Refutações sofísticas.'),
    mc('O juízo produz uma:', ['Proposição', 'Conceito', 'Argumento', 'Imagem'], 0, 'Operações.'),
    mc('"Órganon" significa:', ['Ciência', 'Instrumento', 'Verdade', 'Linguagem'], 1, 'Grego.'),
    mc('A Lógica menor de Maritain é de:', ['1879', '1923', '1953', '1963'], 1, 'Ensino.'),
    disc('Faça a ficha de leitura dos Primeiros analíticos com formalização de dois silogismos.', ['Tese', 'Definições', 'Formalização', 'Avaliação']),
  ],
  resumo: ['Silogismo: necessidade da conclusão.', 'Demonstrativo, dialético, erístico.', 'Tomás: arte da razão.', 'Entes de razão; três operações.', 'Clássica e moderna integradas.'],
  referencias: [
    { texto: 'Aristóteles, Primeiros analíticos.', livro: 'aristoteles-analiticos' },
    { texto: 'Santo Tomás de Aquino, Comentário aos Analíticos posteriores.', livro: 'tomas-com-analiticos' },
    { texto: 'Jacques Maritain, Lógica menor (1923).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler as fontes indicadas'],
  revisao: [['Silogismo', 'Necessidade.'], ['Três operações', 'Apreensão, juízo, raciocínio.'], ['Órganon', 'Instrumento.']],
  avancado: {
    texto: `<h3>As falácias de Aristóteles</h3>
<p>Nas Refutações sofísticas, Aristóteles classificou falácias em dois grupos: as que dependem da linguagem (equivocidade, anfibologia, composição, divisão, acentuação, forma da expressão) e as que não dependem (acidente, petição de princípio, falsa causa, consequente, entre outras) ${tag('fato')}. A "falácia do consequente" corresponde à afirmação do consequente estudada no LF1 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Refutações sofísticas.' }],
    exercicios: [
      mc('A equivocidade é falácia que depende da:', ['Linguagem', 'Matéria', 'Experiência', 'Emoção'], 0, 'Classificação.'),
      mc('A petição de princípio:', ['Supõe o que se quer provar', 'Muda de assunto', 'Ataca a pessoa', 'Generaliza'], 0, 'Definição.'),
      mc('A falácia do consequente corresponde à:', ['Afirmação do consequente', 'Modus ponens', 'Contraposição', 'Simplificação'], 0, 'LF1.'),
      disc('Identifique três falácias aristotélicas em textos atuais e classifique-as.', ['Exemplos', 'Classificação', 'Explicação', 'Fontes'])],
  },
}),

aula({
  id: 'lf2-4', titulo: 'Frege, Russell, Wittgenstein, Gödel e Tarski', duracao: '150 min',
  aprendera: ['Expor a distinção de Frege entre sentido e referência', 'Conhecer a teoria das descrições de Russell', 'Conhecer a concepção de lógica do Tractatus', 'Explicar em termos gerais os teoremas de Gödel e a definição de verdade de Tarski'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Os fundadores da lógica moderna foram também filósofos. Que ideias deixaram sobre linguagem, verdade e limites do conhecimento formal?</p>
<h3>Frege</h3>
<p>Em "Sobre o sentido e a referência" (1892), Frege distinguiu o sentido (modo de apresentação) e a referência (objeto) de uma expressão, para explicar como "a estrela da manhã é a estrela da tarde" pode ser informativa ${tag('fato')}.</p>
<h3>Russell</h3>
<p>Na teoria das descrições ("Sobre o denotar", 1905), Russell analisou frases como "o atual rei da França é calvo": dizem que existe um e só um rei da França e que ele é calvo; como não existe, a frase é falsa ${tag('fato')}.</p>
<h3>Wittgenstein</h3>
<p>No Tractatus (1921), Wittgenstein sustentou que as proposições lógicas são tautologias, que nada dizem sobre o mundo, e que a forma lógica se mostra, não se diz ${tag('fato')}. Termina com a frase de que se deve calar sobre aquilo de que não se pode falar ${tag('fato')}.</p>
<h3>Gödel</h3>
<p>O primeiro teorema da incompletude (1931) diz que todo sistema formal consistente, recursivamente axiomatizável e capaz de exprimir a aritmética elementar contém proposições que não pode provar nem refutar; o segundo, que tal sistema não pode provar a própria consistência ${tag('fato')}.</p>
<h3>Tarski</h3>
<p>Tarski (1933) deu uma definição rigorosa de verdade para linguagens formais, exigindo que "a neve é branca" seja verdadeira se e somente se a neve é branca, e mostrou que a verdade de uma linguagem não se define dentro dela mesma (deve-se usar uma metalinguagem) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Sentido e referência', 'Modo de apresentação e objeto designado (Frege).'],
    ['Descrição definida', 'Expressão "o tal e tal", analisada por Russell.'],
    ['Tautologia lógica', 'Para Wittgenstein, proposição lógica que nada diz do mundo.'],
    ['Incompletude', 'Existência de proposições indecidíveis num sistema formal.'],
    ['Metalinguagem', 'Linguagem usada para falar de outra linguagem.'],
  ],
  exemplos: `<p><strong>A convenção T:</strong> "'Chove' é verdadeira se e somente se chove." Parece trivial, mas exige distinguir a frase mencionada (entre aspas, na linguagem-objeto) e o fato descrito (na metalinguagem). Essa distinção evita paradoxos como o do mentiroso ("esta frase é falsa").</p>`,
  contexto: `<p><strong>No mundo:</strong> Gödel e Einstein foram amigos em Princeton ${tag('fato')}. <strong>No Brasil:</strong> obras de Frege e de Wittgenstein estão traduzidas para o português ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a verdade não se define dentro da própria linguagem', tag: 'argumento',
    premissas: ['Se uma linguagem contivesse seu próprio predicado "verdadeiro" e pudesse falar de suas frases, poderíamos formar "esta frase é falsa".', 'Essa frase seria verdadeira se e só se falsa: contradição.', 'Para evitar a contradição, a verdade de uma linguagem é definida numa metalinguagem.'],
    conclusao: 'Logo, a verdade de uma linguagem formal não se define dentro dela mesma.',
    nota: 'É o teorema da indefinibilidade de Tarski, ligado aos resultados de Gödel.',
  },
  objecoes: [
    { objecao: 'O Tractatus prova que não se pode falar de Deus.', tag: 'debate',
      resposta: 'O Tractatus traça os limites do que se pode dizer em proposições sobre fatos, e o próprio Wittgenstein afirmou que o mais importante é o que fica fora desses limites, o "místico". O livro não prova o ateísmo; suas consequências para a teologia são debatidas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (alternativa): ficha de leitura de "Sobre o sentido e a referência", de Frege, conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Gottlob Frege, "Sobre o sentido e a referência" (1892)', link: null,
    orientacao: `<p>Observe o exemplo da estrela da manhã e da estrela da tarde e a aplicação da distinção às frases inteiras.</p>`,
  },
  perguntas: [
    { p: 'Qual a distinção central de Frege em 1892?', r: 'Entre sentido e referência.' },
    { p: 'Como Russell analisa "o atual rei da França é calvo"?', r: 'Existe um e só um rei da França e ele é calvo; como não existe, a frase é falsa.' },
    { p: 'O que diz o segundo teorema de Gödel?', r: 'Que um sistema consistente desse tipo não pode provar a própria consistência.' },
  ],
  exercicios: [
    mc('"Sobre o denotar" é de:', ['Frege', 'Russell', 'Tarski', 'Gödel'], 1, '1905.'),
    mc('O Tractatus é de:', ['1892', '1905', '1921', '1931'], 2, 'Wittgenstein.'),
    mc('A definição de verdade de Tarski é de:', ['1921', '1931', '1933', '1950'], 2, 'Convenção T.'),
    mc('Para Wittgenstein, as proposições lógicas são:', ['Contingentes', 'Tautologias', 'Falsas', 'Empíricas'], 1, 'Tractatus.'),
    mc('Para falar da verdade de uma linguagem usa-se uma:', ['Metalinguagem', 'Tradução', 'Gramática', 'Retórica'], 0, 'Tarski.'),
    disc('Faça a ficha de leitura de "Sobre o sentido e a referência".', ['Tese', 'Exemplos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Frege (1892): sentido e referência.', 'Russell (1905): descrições.', 'Wittgenstein (1921): tautologias, mostrar e dizer.', 'Gödel (1931): incompletude.', 'Tarski (1933): verdade e metalinguagem.'],
  referencias: [
    { texto: 'Gottlob Frege, "Sobre o sentido e a referência" (1892).', livro: 'frege-sentido' },
    { texto: 'Ludwig Wittgenstein, Tractatus logico-philosophicus (1921).', livro: 'wittgenstein-tractatus' },
    { texto: 'Ernest Nagel e James R. Newman, A prova de Gödel (1958).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['Frege', 'Sentido e referência.'], ['Gödel', 'Incompletude.'], ['Tarski', 'Metalinguagem.']],
  avancado: {
    texto: `<h3>A ideia da prova de Gödel</h3>
<p>Gödel associou números a fórmulas e provas (numeração de Gödel), de modo que afirmações sobre provas se tornassem afirmações aritméticas ${tag('fato')}. Construiu então uma fórmula que, interpretada, diz "eu não sou demonstrável neste sistema": se o sistema é consistente, ela não é demonstrável e, portanto, é verdadeira ${tag('fato')}. A construção lembra o paradoxo do mentiroso, mas troca "falso" por "não demonstrável" ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ernest Nagel e James R. Newman, A prova de Gödel (1958).' }],
    exercicios: [
      mc('A numeração de Gödel associa números a:', ['Fórmulas e provas', 'Pessoas', 'Livros', 'Planetas'], 0, 'Aritmetização.'),
      mc('A fórmula de Gödel diz, interpretada:', ['"Sou falsa"', '"Não sou demonstrável"', '"Sou demonstrável"', '"Sou contraditória"'], 1, 'Construção.'),
      mc('A prova de Gödel, de Nagel e Newman, é de:', ['1931', '1958', '1979', '2000'], 1, 'Divulgação.'),
      disc('Explique a diferença entre o paradoxo do mentiroso e a fórmula de Gödel.', ['Mentiroso', 'Gödel', 'Diferença', 'Consequência'])],
  },
}),

avaliacao('lf2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da lógica e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Refaça a análise de silogismos.</li></ul>`,
[
  disc('Trace a história da lógica de Aristóteles a Gödel com seis marcos datados, incluindo um marco brasileiro, explicando a contribuição de cada um.', ['Marcos', 'Datas', 'Contribuições', 'Brasil']),
  disc('Formalize dois silogismos aristotélicos (um válido e um inválido) em lógica de predicados e explique, com Aristóteles e Tomás, o que é a lógica e para que serve.', ['Formalização', 'Validade', 'Aristóteles e Tomás', 'Síntese']),
]),
];
