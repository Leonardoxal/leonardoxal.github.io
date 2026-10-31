// Lógica formal III — escolas e debates (etapas 6 e 7 do percurso de Lógica formal).
// Lógica clássica, não clássicas e modal; logicismo, formalismo e intuicionismo; paradoxos; Gödel; lógica, verdade e realidade.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lf3-1', titulo: 'Lógica clássica, lógicas não clássicas e lógica modal', duracao: '150 min',
  aprendera: ['Caracterizar a lógica clássica', 'Conhecer lógicas polivalentes, intuicionista e paraconsistente', 'Usar os operadores modais de necessidade e possibilidade', 'Avaliar o que significa haver "várias lógicas"'],
  prereq: ['Lógica formal II (módulo LF2)'],
  explicacao: `
<h3>O problema</h3>
<p>Se a lógica estabelece as regras do raciocínio correto, como pode haver várias lógicas?</p>
<h3>Lógica clássica</h3>
<p>A lógica clássica é a estudada no LF1: bivalente (toda proposição é verdadeira ou falsa), com os princípios de não contradição e do terceiro excluído valendo como teoremas ${tag('fato')}.</p>
<h3>Lógicas não clássicas</h3>
<p>Jan Łukasiewicz propôs por volta de 1920 uma lógica de três valores (verdadeiro, falso, indeterminado) ${tag('fato')}. Lotfi Zadeh introduziu os conjuntos difusos (fuzzy) em 1965, com graus de pertença entre 0 e 1 ${tag('fato')}. A lógica intuicionista, formalizada por Arend Heyting em 1930, rejeita o terceiro excluído como lei geral ${tag('fato')}. As lógicas paraconsistentes, como as de Newton da Costa, impedem que uma contradição torne tudo demonstrável ${tag('fato')}.</p>
<h3>Lógica modal</h3>
<p>A lógica modal acrescenta os operadores □ (é necessário que) e ◇ (é possível que), com ◇p equivalente a ¬□¬p ${tag('fato')}. C. I. Lewis desenvolveu a implicação estrita no início do século XX, e Saul Kripke propôs, por volta de 1959–1963, uma semântica de mundos possíveis ${tag('fato')}.</p>
<h3>Rivais ou complementares?</h3>
<p>Alguns lógicos sustentam que só uma lógica é correta; outros, que diferentes lógicas servem a diferentes domínios (pluralismo lógico) ${tag('debate')}. Na tradição aristotélica, o princípio de não contradição é o primeiro princípio do ser e do pensar, e as lógicas não clássicas são vistas como cálculos formais úteis, não como negação desse princípio ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Bivalência', 'Princípio de que toda proposição é verdadeira ou falsa.'],
    ['Lógica polivalente', 'Lógica com mais de dois valores de verdade.'],
    ['Lógica intuicionista', 'Lógica que exige construção da prova e rejeita o terceiro excluído como lei geral.'],
    ['Operador modal', '□ (necessário) e ◇ (possível).'],
    ['Mundo possível', 'Situação alternativa usada na semântica modal.'],
  ],
  exemplos: `<p><strong>Necessidade:</strong> "2 + 2 = 4" é verdadeira em todos os mundos possíveis: □(2 + 2 = 4). "Choveu em Recife ontem" pode ser verdadeira, mas poderia ter sido falsa: é contingente. Já "é possível que exista vida em outro planeta" diz ◇p: há um mundo possível em que p é verdadeira.</p>`,
  contexto: `<p><strong>No mundo:</strong> lógica difusa é usada em sistemas de controle de eletrodomésticos e veículos ${tag('fato')}. <strong>No Brasil:</strong> a escola de lógica paraconsistente de Newton da Costa tornou-se referência internacional ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as lógicas não clássicas não negam a não contradição', tag: 'interpretacao',
    premissas: ['Para construir e estudar qualquer lógica, usamos uma metalinguagem em que distinguimos o que vale do que não vale.', 'Essa distinção supõe que uma coisa não pode valer e não valer ao mesmo tempo e no mesmo sentido.', 'Logo, o princípio de não contradição opera mesmo onde se estudam cálculos que o restringem.'],
    conclusao: 'Logo, as lógicas não clássicas são instrumentos formais que não refutam o primeiro princípio.',
    nota: 'É a leitura aristotélico-tomista; defensores do dialeteísmo, como Graham Priest, a contestam.',
  },
  objecoes: [
    { objecao: 'Se há várias lógicas, a lógica é convenção arbitrária.', tag: 'debate',
      resposta: 'Cada sistema é escolhido por razões: o domínio, o que se quer preservar, as consequências. A escolha não é arbitrária, e há debate racional sobre qual lógica é adequada a cada uso.' },
  ],
  aplicacao: `<p>Monte um quadro comparativo das lógicas clássica, polivalente, intuicionista, paraconsistente e modal: o que acrescentam ou retiram, autor, data e um exemplo de uso.</p>`,
  fonte: {
    obra: 'Aristóteles, Metafísica, livro IV (Γ), cap. 3', link: null,
    orientacao: `<p>Observe como Aristóteles formula o princípio de não contradição e por que diz que ele não pode ser demonstrado diretamente.</p>`,
  },
  perguntas: [
    { p: 'O que caracteriza a lógica clássica?', r: 'Bivalência, não contradição e terceiro excluído.' },
    { p: 'O que rejeita a lógica intuicionista?', r: 'O terceiro excluído como lei geral.' },
    { p: 'Como se define ◇p a partir de □?', r: '¬□¬p.' },
  ],
  exercicios: [
    mc('A lógica de três valores foi proposta por:', ['Łukasiewicz', 'Frege', 'Kripke', 'Boole'], 0, 'Por volta de 1920.'),
    mc('Os conjuntos difusos são de:', ['1920', '1930', '1965', '1987'], 2, 'Zadeh.'),
    mc('□p significa:', ['p é possível', 'p é necessário', 'p é falso', 'p é provável'], 1, 'Modal.'),
    mc('A semântica de mundos possíveis é associada a:', ['Kripke', 'Boole', 'Peano', 'Pedro Hispano'], 0, 'Lógica modal.'),
    mc('A lógica paraconsistente impede que uma contradição:', ['Seja escrita', 'Torne tudo demonstrável', 'Seja falsa', 'Seja verdadeira'], 1, 'Trivialização.'),
    disc('Monte o quadro comparativo das cinco lógicas.', ['Lógicas', 'Diferenças', 'Autores e datas', 'Usos']),
  ],
  resumo: ['Clássica: bivalente.', 'Polivalente (Łukasiewicz) e difusa (Zadeh).', 'Intuicionista (Heyting, 1930).', 'Paraconsistente (Newton da Costa).', 'Modal: □ e ◇; Kripke.'],
  referencias: [
    { texto: 'Aristóteles, Metafísica, livro IV.', livro: 'aristoteles-metafisica' },
    { texto: 'Susan Haack, Filosofia das lógicas (1978).' },
    { texto: 'Newton da Costa, Ensaio sobre os fundamentos da lógica (1980).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler a fonte indicada'],
  revisao: [['Bivalência', 'V ou F.'], ['□', 'Necessário.'], ['Paraconsistente', 'Sem trivialização.']],
  avancado: {
    texto: `<h3>Os sistemas modais</h3>
<p>Os sistemas modais mais conhecidos (K, T, S4, S5) diferem pelos axiomas aceitos ${tag('fato')}. T acrescenta □p → p (o necessário é verdadeiro); S4 acrescenta □p → □□p; S5 acrescenta ◇p → □◇p ${tag('fato')}. Na semântica de Kripke, essas diferenças correspondem a propriedades da relação de acessibilidade entre mundos (reflexiva, transitiva, de equivalência) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Susan Haack, Filosofia das lógicas (1978), capítulo sobre lógica modal.' }],
    exercicios: [
      mc('O axioma □p → p caracteriza o sistema:', ['K', 'T', 'Só S5', 'Nenhum'], 1, 'Reflexividade.'),
      mc('S4 acrescenta:', ['□p → □□p', '◇p → p', 'p → □p', '¬p'], 0, 'Transitividade.'),
      mc('Em S5 a acessibilidade é:', ['De equivalência', 'Vazia', 'Só simétrica', 'Aleatória'], 0, 'Kripke.'),
      disc('Explique por que □p → p é plausível e p → □p não é.', ['Axioma T', 'Contraexemplo', 'Explicação', 'Conclusão'])],
  },
}),

aula({
  id: 'lf3-2', titulo: 'Logicismo, formalismo e intuicionismo', duracao: '150 min',
  aprendera: ['Expor as três grandes escolas de fundamentos da matemática', 'Explicar o programa de Hilbert', 'Explicar a crítica intuicionista de Brouwer', 'Avaliar as consequências dos teoremas de Gödel para essas escolas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Depois dos paradoxos dos conjuntos, como garantir que a matemática está bem fundada?</p>
<h3>Logicismo</h3>
<p>Frege, Russell e Whitehead sustentaram que a matemática se reduz à lógica: os números e suas leis se definiriam e provariam a partir de noções puramente lógicas ${tag('fato')}. O paradoxo de Russell e a necessidade de axiomas como o do infinito enfraqueceram o projeto ${tag('interpretacao')}.</p>
<h3>Formalismo</h3>
<p>David Hilbert propôs, nos anos 1920, formalizar a matemática em sistemas axiomáticos e provar, por métodos finitários seguros, que esses sistemas são consistentes ${tag('fato')}. É o "programa de Hilbert" ${tag('fato')}.</p>
<h3>Intuicionismo</h3>
<p>L. E. J. Brouwer, a partir de sua tese de 1907, sustentou que a matemática é construção mental e que só existe o que se pode construir ${tag('fato')}. Por isso rejeitou provas de existência por redução ao absurdo que não exibem o objeto e o uso irrestrito do terceiro excluído em domínios infinitos ${tag('fato')}.</p>
<h3>Gödel</h3>
<p>O segundo teorema da incompletude mostrou que um sistema consistente suficientemente forte não prova a própria consistência, o que impede a realização do programa de Hilbert na forma original ${tag('fato')}. As três escolas continuam com herdeiros, e há também o platonismo (realismo) matemático, defendido pelo próprio Gödel ${tag('fato')}.</p>`,
  vocabulario: [
    ['Logicismo', 'Tese de que a matemática se reduz à lógica.'],
    ['Formalismo', 'Tese de que a matemática é estudo de sistemas formais; programa de Hilbert.'],
    ['Intuicionismo', 'Tese de que a matemática é construção mental (Brouwer).'],
    ['Métodos finitários', 'Raciocínios sobre objetos finitos e concretos, considerados seguros por Hilbert.'],
    ['Platonismo matemático', 'Tese de que os objetos matemáticos existem independentemente da mente.'],
  ],
  exemplos: `<p><strong>Prova não construtiva:</strong> "existem números irracionais a e b tais que a<sup>b</sup> é racional". Prova clássica: se √2<sup>√2</sup> é racional, tome a = b = √2; se não, tome a = √2<sup>√2</sup> e b = √2, pois então a<sup>b</sup> = 2. A prova não diz qual caso vale — por isso o intuicionista não a aceita como prova de existência.</p>`,
  contexto: `<p><strong>No mundo:</strong> Hilbert apresentou em 1900 uma famosa lista de 23 problemas matemáticos ${tag('fato')}. <strong>No Brasil:</strong> a filosofia da matemática é estudada em centros como a Unicamp, ligada ao Centro de Lógica, Epistemologia e História da Ciência (CLE) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Gödel atingiu o programa de Hilbert', tag: 'argumento',
    premissas: ['Hilbert queria provar a consistência da matemática dentro de um sistema seguro.', 'O segundo teorema de Gödel mostra que um sistema consistente suficientemente forte não prova a própria consistência.', 'Os métodos finitários são, presumivelmente, representáveis dentro desses sistemas.'],
    conclusao: 'Logo, o programa de Hilbert, na forma original, não pode ser cumprido.',
    nota: 'Versões modificadas do programa continuam sendo estudadas (teoria da prova).',
  },
  objecoes: [
    { objecao: 'O intuicionismo é só uma excentricidade filosófica.', tag: 'debate',
      resposta: 'A lógica intuicionista tem aplicações importantes, por exemplo em computação: provas construtivas correspondem a programas. Pode-se discordar da filosofia de Brouwer e reconhecer a fecundidade técnica do intuicionismo.' },
  ],
  aplicacao: `<p>Escreva um quadro das três escolas (tese, autores, dificuldade principal) e acrescente o platonismo matemático como quarta posição.</p>`,
  fonte: {
    obra: 'Bertrand Russell, Introdução à filosofia matemática (1919), cap. 1 e 2', link: null,
    orientacao: `<p>Observe como Russell define número a partir de classes e o que pretende mostrar com isso.</p>`,
  },
  perguntas: [
    { p: 'O que sustenta o logicismo?', r: 'Que a matemática se reduz à lógica.' },
    { p: 'Qual era o programa de Hilbert?', r: 'Formalizar a matemática e provar sua consistência por métodos finitários.' },
    { p: 'O que rejeita o intuicionismo?', r: 'Provas de existência não construtivas e o terceiro excluído irrestrito em domínios infinitos.' },
  ],
  exercicios: [
    mc('Brouwer é ligado ao:', ['Logicismo', 'Formalismo', 'Intuicionismo', 'Platonismo'], 2, '1907.'),
    mc('O programa de consistência é de:', ['Frege', 'Hilbert', 'Brouwer', 'Russell'], 1, 'Anos 1920.'),
    mc('Gödel defendeu o:', ['Platonismo matemático', 'Intuicionismo', 'Nominalismo', 'Ceticismo'], 0, 'Realismo.'),
    mc('O teorema que atinge Hilbert é o:', ['Primeiro de Gödel', 'Segundo de Gödel', 'De Tarski', 'De Pitágoras'], 1, 'Consistência.'),
    mc('A lista de 23 problemas de Hilbert é de:', ['1879', '1900', '1931', '1936'], 1, 'Congresso.'),
    disc('Monte o quadro das quatro posições sobre os fundamentos da matemática.', ['Teses', 'Autores', 'Dificuldades', 'Avaliação']),
  ],
  resumo: ['Logicismo: Frege, Russell.', 'Formalismo: Hilbert.', 'Intuicionismo: Brouwer.', 'Gödel limita o programa de Hilbert.', 'Platonismo: Gödel.'],
  referencias: [
    { texto: 'Bertrand Russell, Introdução à filosofia matemática (1919).' },
    { texto: 'Stephen Barker, Filosofia da matemática (1964).' },
    { texto: 'Ernest Nagel e James R. Newman, A prova de Gödel (1958).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Logicismo', 'Matemática = lógica.'], ['Hilbert', 'Consistência.'], ['Brouwer', 'Construção.']],
  avancado: {
    texto: `<h3>Provas como programas</h3>
<p>A correspondência de Curry–Howard estabelece um paralelo entre provas na lógica intuicionista e programas tipados: uma proposição corresponde a um tipo, e uma prova a um programa desse tipo ${tag('fato')}. Assistentes de prova como Coq (hoje Rocq) e Lean exploram essa ideia para verificar provas matemáticas por computador ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Morten Sørensen e Paweł Urzyczyn, Lectures on the Curry–Howard Isomorphism (2006).' }],
    exercicios: [
      mc('Na correspondência de Curry–Howard, uma proposição corresponde a um:', ['Tipo', 'Número', 'Circuito', 'Conjunto vazio'], 0, 'Tipos.'),
      mc('Uma prova corresponde a um:', ['Programa', 'Axioma', 'Paradoxo', 'Mundo'], 0, 'Programas.'),
      mc('Lean é um:', ['Assistente de prova', 'Silogismo', 'Paradoxo', 'Sistema modal'], 0, 'Verificação.'),
      disc('Explique por que a lógica intuicionista se ajusta bem à computação.', ['Construção', 'Programas', 'Exemplo', 'Limites'])],
  },
}),

aula({
  id: 'lf3-3', titulo: 'Paradoxos: o mentiroso, o sorites e Russell', duracao: '150 min',
  aprendera: ['Formular os paradoxos clássicos', 'Distinguir paradoxos semânticos e de conjuntos', 'Conhecer soluções propostas', 'Avaliar o que os paradoxos ensinam'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Um paradoxo parte de premissas aparentemente aceitáveis e, por raciocínio aparentemente válido, chega a uma conclusão inaceitável. Onde está o erro?</p>
<h3>O mentiroso</h3>
<p>Atribuído a Eubulides de Mileto (século IV a.C.): "esta frase é falsa" é verdadeira se e só se é falsa ${tag('fato')}. Tarski propôs separar linguagem-objeto e metalinguagem; Kripke (1975) propôs uma teoria em que certas frases ficam sem valor de verdade ${tag('fato')}.</p>
<h3>O sorites</h3>
<p>Também atribuído a Eubulides: um grão de areia não é um monte; acrescentar um grão a algo que não é um monte não faz um monte; logo, nenhuma quantidade de grãos é um monte ${tag('fato')}. O paradoxo mostra o problema dos termos vagos ${tag('interpretacao')}. Propostas incluem lógicas de graus, o supervaloracionismo e o epistemicismo (há um limite preciso, mas não o conhecemos) ${tag('debate')}.</p>
<h3>Russell</h3>
<p>O paradoxo de Russell (LF2) levou a soluções como a teoria dos tipos de Russell e a teoria axiomática dos conjuntos de Zermelo (1908), depois Zermelo–Fraenkel, que restringe a formação de conjuntos ${tag('fato')}.</p>
<h3>O que ensinam</h3>
<p>Os paradoxos não mostram que a razão é incoerente; mostram que certas noções (verdade, conjunto, termos vagos) exigem cuidado, e foram motor de grandes avanços ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Paradoxo', 'Raciocínio aparentemente correto que chega a conclusão inaceitável.'],
    ['Paradoxo semântico', 'Paradoxo que envolve verdade, referência ou significado.'],
    ['Termo vago', 'Termo sem fronteira precisa de aplicação (monte, calvo, alto).'],
    ['Teoria dos tipos', 'Hierarquia que impede um conjunto de conter a si mesmo.'],
    ['ZF', 'Teoria axiomática dos conjuntos de Zermelo–Fraenkel.'],
  ],
  exemplos: `<p><strong>O calvo:</strong> quem tem 100 000 fios de cabelo não é calvo; perder um fio não torna ninguém calvo; logo, quem tem zero fios não é calvo. É o sorites aplicado a "calvo". Para resolvê-lo é preciso rever a segunda premissa, que parece inocente.</p>`,
  contexto: `<p><strong>No mundo:</strong> o mentiroso foi discutido pelos medievais sob o nome de "insolubilia" ${tag('fato')}. <strong>No Brasil:</strong> lógicas paraconsistentes foram propostas também como tratamento de paradoxos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os paradoxos não destroem a lógica', tag: 'argumento',
    premissas: ['Um paradoxo mostra que um conjunto de premissas leva a algo inaceitável.', 'Logo, ao menos uma premissa ou regra usada deve ser revista.', 'Identificar e corrigir essa premissa é progresso do conhecimento, não sua ruína.'],
    conclusao: 'Logo, os paradoxos são ocasião de aprofundamento, não prova de que a lógica falha.',
    nota: 'A história de Russell, Zermelo e Tarski ilustra isso.',
  },
  objecoes: [
    { objecao: 'O sorites prova que não existem montes nem calvos.', tag: 'debate',
      resposta: 'Essa conclusão (niilismo sobre termos vagos) foi defendida por poucos. A maioria prefere rever a premissa indutiva ou a lógica clássica para termos vagos. Que há montes e calvos é mais certo do que qualquer premissa do argumento.' },
  ],
  aplicacao: `<p>Escolha dois paradoxos, formule-os em premissas numeradas e apresente, para cada um, uma solução proposta e uma objeção a ela.</p>`,
  fonte: {
    obra: 'R. M. Sainsbury, Paradoxos (1988), capítulos sobre o sorites e o mentiroso', link: null,
    orientacao: `<p>Observe como Sainsbury apresenta cada paradoxo e compara as soluções.</p>`,
  },
  perguntas: [
    { p: 'O que é um paradoxo?', r: 'Raciocínio aparentemente correto que chega a conclusão inaceitável.' },
    { p: 'Qual problema mostra o sorites?', r: 'O dos termos vagos.' },
    { p: 'Que solução deu Zermelo ao paradoxo de Russell?', r: 'Uma teoria axiomática que restringe a formação de conjuntos.' },
  ],
  exercicios: [
    mc('O mentiroso é paradoxo:', ['Semântico', 'De conjuntos', 'Moral', 'Físico'], 0, 'Verdade.'),
    mc('O sorites envolve termos:', ['Vagos', 'Lógicos', 'Numéricos exatos', 'Próprios'], 0, 'Monte.'),
    mc('A teoria axiomática de Zermelo é de:', ['1879', '1902', '1908', '1931'], 2, 'Conjuntos.'),
    mc('Os medievais chamavam o mentiroso de:', ['Insolubilia', 'Sophismata naturalia', 'Barbara', 'Suppositio'], 0, 'Tradição.'),
    mc('O epistemicismo diz que há um limite preciso:', ['Que conhecemos', 'Que não conhecemos', 'Inexistente', 'Convencional'], 1, 'Sorites.'),
    disc('Formule dois paradoxos com uma solução e uma objeção para cada um.', ['Formulação', 'Soluções', 'Objeções', 'Avaliação']),
  ],
  resumo: ['Paradoxo: premissas boas, conclusão má.', 'Mentiroso: Tarski, Kripke.', 'Sorites: termos vagos.', 'Russell: tipos e ZF.', 'Motor de avanços.'],
  referencias: [
    { texto: 'R. M. Sainsbury, Paradoxos (1988).' },
    { texto: 'Alfred Tarski, "A concepção semântica da verdade" (1944).' },
    { texto: 'Susan Haack, Filosofia das lógicas (1978).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos paradoxos', 'Ler a fonte indicada'],
  revisao: [['Mentiroso', '"Esta frase é falsa".'], ['Sorites', 'Monte.'], ['ZF', 'Conjuntos.']],
  avancado: {
    texto: `<h3>O paradoxo de Curry</h3>
<p>Considere a frase C: "se C é verdadeira, então a Lua é de queijo". Supondo C, por modus ponens obtém-se que a Lua é de queijo; logo, por prova condicional, C é verdadeira; e então, de novo por modus ponens, a Lua é de queijo ${tag('fato')}. O paradoxo de Curry não usa negação, o que mostra que soluções que só restringem a negação não bastam ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'R. M. Sainsbury, Paradoxos (1988), capítulo sobre o mentiroso e paradoxos aparentados.' }],
    exercicios: [
      mc('O paradoxo de Curry usa:', ['Negação', 'Só condicional e regras básicas', 'Quantificadores modais', 'Probabilidade'], 1, 'Sem negação.'),
      mc('A conclusão de Curry pode ser:', ['Qualquer frase', 'Só frases verdadeiras', 'Só negações', 'Nenhuma'], 0, 'Trivialização.'),
      mc('As regras usadas incluem:', ['Modus ponens e prova condicional', 'Só silogismo', 'Só indução', 'Nenhuma'], 0, 'LF1.'),
      disc('Explique por que o paradoxo de Curry é importante para quem propõe lógicas paraconsistentes.', ['Curry', 'Paraconsistência', 'Problema', 'Resposta'])],
  },
}),

aula({
  id: 'lf3-4', titulo: 'Gödel, verdade e realidade: o alcance da lógica', duracao: '150 min',
  aprendera: ['Avaliar interpretações filosóficas dos teoremas de Gödel', 'Discutir o argumento sobre mente e máquina', 'Relacionar lógica, verdade e ser', 'Defender o lugar da lógica no conhecimento'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A lógica é só um jogo de símbolos, ou diz algo sobre a realidade? E o que os resultados de Gödel dizem sobre a mente humana?</p>
<h3>Interpretações de Gödel</h3>
<p>Os teoremas de Gödel são resultados matemáticos precisos ${tag('fato')}. Seu uso fora da matemática — para dizer que "tudo é relativo" ou que "a verdade é inalcançável" — é em geral abusivo ${tag('interpretacao')}. Torkel Franzén, em Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse (2005), catalogou esses abusos ${tag('fato')}.</p>
<h3>Mente e máquina</h3>
<p>J. R. Lucas (1961) e Roger Penrose (1989) argumentaram que, como reconhecemos a verdade da fórmula de Gödel de qualquer sistema consistente, a mente humana não é um sistema formal ${tag('fato')}. Críticos respondem que não sabemos se nosso sistema é consistente, e o debate continua ${tag('debate')}.</p>
<h3>Lógica e ser</h3>
<p>Para Aristóteles, o princípio de não contradição é lei do ser antes de ser lei do pensamento: é impossível que o mesmo pertença e não pertença ao mesmo, ao mesmo tempo e no mesmo sentido (Metafísica IV, 3) ${tag('fato')}. Na tradição tomista, a lógica estuda os entes de razão, mas esses se fundam no real que a inteligência conhece ${tag('doutrina')}.</p>
<h3>Lógica e fé</h3>
<p>A tradição católica afirma que a fé não contradiz a razão, pois o mesmo Deus é autor de ambas ${tag('doutrina')}. A lógica é, nessa visão, serva da verdade, e a coerência é exigência da razão também no estudo da fé ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Abuso de Gödel', 'Uso dos teoremas fora de seu alcance preciso.'],
    ['Argumento de Lucas–Penrose', 'Argumento de que a mente não é um sistema formal.'],
    ['Lei do ser', 'Princípio que vale para a realidade, não só para o pensamento.'],
    ['Realismo lógico', 'Tese de que as leis lógicas se fundam no ser.'],
    ['Coerência', 'Ausência de contradição num conjunto de afirmações.'],
  ],
  exemplos: `<p><strong>Um abuso:</strong> "Gödel provou que nenhum sistema pode ser completo; logo, a Constituição brasileira é incompleta e tudo é interpretação." Os teoremas valem para sistemas formais com aritmética, não para textos jurídicos. Que a Constituição tenha lacunas pode ser verdade, mas não se segue de Gödel.</p>`,
  contexto: `<p><strong>No mundo:</strong> A mente nova do rei, de Penrose (1989), popularizou o argumento contra a inteligência artificial forte ${tag('fato')}. <strong>No Brasil:</strong> o debate sobre mente e máquina ganhou novo interesse com os sistemas de inteligência artificial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o princípio de não contradição é inegável', tag: 'argumento',
    premissas: ['Quem nega o princípio de não contradição pretende dizer algo determinado.', 'Dizer algo determinado é excluir o seu contrário.', 'Logo, quem nega o princípio o usa ao negá-lo.'],
    conclusao: 'Logo, o princípio de não contradição não pode ser negado com coerência.',
    nota: 'É a defesa "elênctica" (por refutação) de Aristóteles em Metafísica IV.',
  },
  objecoes: [
    { objecao: 'Os dialeteístas mostram que algumas contradições são verdadeiras.', tag: 'debate',
      resposta: 'Graham Priest e outros defendem que frases como o mentiroso são verdadeiras e falsas. Críticos respondem que essa posição ainda distingue aceitar e rejeitar, e que a defesa aristotélica se aplica a esse nível. O debate é técnico e permanece aberto entre especialistas.' },
  ],
  aplicacao: `<p>Escreva um ensaio curto (uma página) respondendo: "A lógica diz algo sobre a realidade?", usando Aristóteles, Tarski e um argumento contrário.</p>`,
  fonte: {
    obra: 'Aristóteles, Metafísica, livro IV (Γ), caps. 3–4', link: null,
    orientacao: `<p>Observe a defesa por refutação do princípio de não contradição e a exigência de que o adversário "diga algo".</p>`,
  },
  perguntas: [
    { p: 'O que é um abuso de Gödel?', r: 'Usar os teoremas fora de seu alcance, como em textos não formais.' },
    { p: 'O que sustentam Lucas e Penrose?', r: 'Que a mente humana não é um sistema formal.' },
    { p: 'Como Aristóteles defende a não contradição?', r: 'Por refutação: quem a nega a usa ao negá-la.' },
  ],
  exercicios: [
    mc('O argumento de Lucas é de:', ['1931', '1961', '1989', '2005'], 1, 'Mente e máquina.'),
    mc('Para Aristóteles, a não contradição é lei:', ['Só do pensamento', 'Do ser e do pensamento', 'Convencional', 'Gramatical'], 1, 'Metafísica IV.'),
    mc('O livro de Franzén trata de:', ['Usos e abusos de Gödel', 'Silogística', 'Lógica modal', 'Boole'], 0, '2005.'),
    mc('A defesa elênctica é feita por:', ['Refutação', 'Indução', 'Experimento', 'Autoridade'], 0, 'Aristóteles.'),
    mc('Dialeteísmo é a tese de que:', ['Há contradições verdadeiras', 'Não há verdade', 'Tudo é necessário', 'Só há dois valores'], 0, 'Priest.'),
    disc('Escreva o ensaio "A lógica diz algo sobre a realidade?".', ['Tese', 'Aristóteles', 'Tarski', 'Objeção e resposta']),
  ],
  resumo: ['Gödel: resultado preciso; cuidado com abusos.', 'Lucas–Penrose: debate aberto.', 'Não contradição: lei do ser.', 'Defesa por refutação.', 'Fé e razão não se contradizem.'],
  referencias: [
    { texto: 'Aristóteles, Metafísica, livro IV.', livro: 'aristoteles-metafisica' },
    { texto: 'Torkel Franzén, Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse (2005).' },
    { texto: 'Roger Penrose, A mente nova do rei (1989).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['Abuso', 'Fora do alcance.'], ['Lucas–Penrose', 'Mente ≠ sistema formal.'], ['Elêntica', 'Por refutação.']],
  avancado: {
    texto: `<h3>Verdade e demonstrabilidade</h3>
<p>Gödel mostrou que, para sistemas do tipo considerado, a verdade aritmética não coincide com a demonstrabilidade no sistema ${tag('fato')}. Tarski mostrou que a verdade aritmética não é definível na própria aritmética ${tag('fato')}. Juntos, esses resultados indicam que a noção de verdade ultrapassa qualquer formalização fixa — o que muitos leram como apoio ao realismo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Torkel Franzén, Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse (2005).' }],
    exercicios: [
      mc('Para sistemas do tipo de Gödel, verdade e demonstrabilidade:', ['Coincidem', 'Não coincidem', 'São a mesma noção', 'Não se aplicam'], 1, 'Incompletude.'),
      mc('Tarski mostrou que a verdade aritmética não é:', ['Definível na própria aritmética', 'Existente', 'Útil', 'Bivalente'], 0, 'Indefinibilidade.'),
      mc('Muitos leram esses resultados como apoio ao:', ['Realismo', 'Ceticismo radical', 'Convencionalismo', 'Nominalismo'], 0, 'Interpretação.'),
      disc('Explique por que "verdadeiro" e "demonstrável" não são sinônimos.', ['Definições', 'Gödel', 'Tarski', 'Consequência'])],
  },
}),

avaliacao('lf3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas e os debates da lógica, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seus quadros comparativos.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Compare a lógica clássica com duas lógicas não clássicas e com o intuicionismo de Brouwer, indicando o que cada uma aceita ou rejeita e por quê.', ['Clássica', 'Não clássicas', 'Intuicionismo', 'Avaliação']),
  disc('Formule um paradoxo, discuta duas soluções e conclua, com Aristóteles, sobre a relação entre lógica e realidade.', ['Paradoxo', 'Soluções', 'Aristóteles', 'Conclusão']),
]),
];
