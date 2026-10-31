// Lógica formal IV — estudos avançados (etapa 8 do percurso de Lógica formal).
// Predicados e quantificadores; dedução com quantificadores; conjuntos; metalógica.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lf4-1', titulo: 'Predicados e quantificadores: formalizar com ∀ e ∃', duracao: '150 min',
  aprendera: ['Formalizar frases com predicados, constantes e quantificadores', 'Distinguir variáveis livres e ligadas', 'Negar frases quantificadas', 'Perceber o efeito da ordem dos quantificadores'],
  prereq: ['Lógica formal III (módulo LF3)'],
  explicacao: `
<h3>O problema</h3>
<p>A lógica proposicional não capta a validade de "todo homem é mortal; Sócrates é homem; logo, Sócrates é mortal", pois as três frases são proposições diferentes. Como entrar na estrutura interna das frases?</p>
<h3>Predicados e constantes</h3>
<p>Na lógica de predicados, "Sócrates é homem" se escreve Hs: H é um predicado ("é homem") e s uma constante (Sócrates) ${tag('fato')}. Relações têm mais de um lugar: "Pedro ama Maria" é Apm ${tag('fato')}.</p>
<h3>Quantificadores</h3>
<p>∀x (para todo x) e ∃x (existe pelo menos um x) ligam variáveis ${tag('fato')}. Padrões: "todo S é P" = ∀x(Sx → Px); "algum S é P" = ∃x(Sx ∧ Px); "nenhum S é P" = ∀x(Sx → ¬Px); "algum S não é P" = ∃x(Sx ∧ ¬Px) ${tag('fato')}. Erro comum: escrever ∀x(Sx ∧ Px) para "todo S é P", que diz que tudo é S e P ${tag('fato')}.</p>
<h3>Variáveis livres e ligadas</h3>
<p>Uma variável é ligada quando está no escopo de um quantificador sobre ela; caso contrário, é livre ${tag('fato')}. Fórmulas sem variáveis livres são sentenças, que têm valor de verdade numa interpretação ${tag('fato')}.</p>
<h3>Negação e ordem</h3>
<p>¬∀x Fx equivale a ∃x ¬Fx; ¬∃x Fx equivale a ∀x ¬Fx ${tag('fato')}. A ordem importa: ∀x∃y Axy ("todos amam alguém") não equivale a ∃y∀x Axy ("há alguém amado por todos") ${tag('fato')}.</p>`,
  vocabulario: [
    ['Predicado', 'Propriedade ou relação atribuída (H: é homem).'],
    ['Constante', 'Nome de um indivíduo determinado (s: Sócrates).'],
    ['Quantificador universal', '∀: para todo.'],
    ['Quantificador existencial', '∃: existe pelo menos um.'],
    ['Escopo', 'Parte da fórmula sobre a qual o quantificador atua.'],
  ],
  exemplos: `<p><strong>A ordem:</strong> "todo número tem um sucessor" é ∀x∃y Sxy, verdadeira nos naturais. "Existe um número que é sucessor de todos" é ∃y∀x Sxy, falsa. Trocar a ordem dos quantificadores mudou a verdade da frase.</p>`,
  contexto: `<p><strong>No mundo:</strong> a lógica de predicados é a linguagem padrão da matemática e de muitas linguagens de consulta a bancos de dados ${tag('fato')}. <strong>No Brasil:</strong> é conteúdo de disciplinas de lógica nos cursos de filosofia, matemática e computação ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lógica de predicados supera a silogística', tag: 'argumento',
    premissas: ['A silogística só trata proposições de forma sujeito–predicado com um quantificador.', 'Muitos raciocínios envolvem relações e quantificadores encaixados ("todo número tem um sucessor").', 'A lógica de predicados formaliza relações e quantificadores múltiplos.'],
    conclusao: 'Logo, a lógica de predicados capta raciocínios que a silogística não alcança.',
    nota: 'A silogística permanece como fragmento correto e didático (LF2).',
  },
  objecoes: [
    { objecao: 'Formalizar com ∀ e ∃ empobrece o sentido das frases.', tag: 'debate',
      resposta: 'A formalização abstrai do conteúdo para mostrar a forma. Perde-se nuance, mas ganha-se precisão para avaliar a validade. O ideal é ir e voltar entre a frase natural e a fórmula.' },
  ],
  aplicacao: `<p>Formalize dez frases (quatro com os padrões A, E, I, O, quatro com relações e duas com quantificadores encaixados), indicando o dicionário de predicados e constantes.</p>`,
  fonte: {
    obra: 'Irving Copi, Introdução à lógica, capítulo sobre a teoria da quantificação', link: null,
    orientacao: `<p>Observe os exemplos de formalização e os erros mais comuns.</p>`,
  },
  perguntas: [
    { p: 'Como se formaliza "todo S é P"?', r: '∀x(Sx → Px).' },
    { p: 'A que equivale ¬∀x Fx?', r: 'A ∃x ¬Fx.' },
    { p: 'O que é uma sentença?', r: 'Fórmula sem variáveis livres.' },
  ],
  exercicios: [
    mc('"Algum S é P" formaliza-se como:', ['∃x(Sx ∧ Px)', '∃x(Sx → Px)', '∀x(Sx ∧ Px)', '∀x(Sx → Px)'], 0, 'Conjunção com ∃.'),
    mc('"Nenhum S é P":', ['∀x(Sx → ¬Px)', '∃x(Sx ∧ Px)', '¬∀x Sx', '∀x ¬Sx'], 0, 'Padrão E.'),
    mc('¬∃x Fx equivale a:', ['∀x ¬Fx', '∃x ¬Fx', '∀x Fx', 'Fa'], 0, 'Negação.'),
    mc('"Pedro ama Maria" usa um predicado de:', ['Um lugar', 'Dois lugares', 'Zero lugares', 'Três lugares'], 1, 'Relação.'),
    mc('∀x∃y Axy e ∃y∀x Axy:', ['São equivalentes', 'Não são equivalentes', 'São ambas falsas sempre', 'São tautologias'], 1, 'Ordem.'),
    disc('Formalize as dez frases com dicionário.', ['Padrões A, E, I, O', 'Relações', 'Encaixados', 'Dicionário']),
  ],
  resumo: ['Predicados e constantes.', '∀ e ∃.', 'Padrões A, E, I, O.', 'Livres e ligadas.', 'Negação e ordem dos quantificadores.'],
  referencias: [
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Gottlob Frege, Conceitografia (1879).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as formalizações', 'Ler a fonte indicada'],
  revisao: [['∀x(Sx → Px)', 'Todo S é P.'], ['∃x(Sx ∧ Px)', 'Algum S é P.'], ['Ordem', 'Importa.']],
  avancado: {
    texto: `<h3>Identidade e descrições</h3>
<p>Com o predicado de identidade (=) pode-se dizer "há exatamente um F": ∃x(Fx ∧ ∀y(Fy → y = x)) ${tag('fato')}. É assim que a teoria das descrições de Russell (LF2) formaliza "o F é G": ∃x(Fx ∧ ∀y(Fy → y = x) ∧ Gx) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Cezar A. Mortari, Introdução à lógica (2001), capítulo sobre identidade.' }],
    exercicios: [
      mc('"Há pelo menos dois F" exige:', ['Identidade e negação', 'Só ∀', 'Só conectivos', 'Lógica modal'], 0, '∃x∃y(Fx ∧ Fy ∧ x ≠ y).'),
      mc('A fórmula de Russell para "o F é G" afirma:', ['Existência, unicidade e G', 'Só G', 'Só existência', 'Nada'], 0, 'Descrições.'),
      mc('x ≠ y abrevia:', ['¬(x = y)', 'x = y', 'x → y', 'x ∧ y'], 0, 'Notação.'),
      disc('Formalize "o atual rei da França é calvo" pela teoria de Russell e explique por que é falsa.', ['Fórmula', 'Existência', 'Unicidade', 'Valor de verdade'])],
  },
}),

aula({
  id: 'lf4-2', titulo: 'Dedução com quantificadores e contraexemplos', duracao: '150 min',
  aprendera: ['Aplicar as quatro regras de quantificadores', 'Respeitar as restrições das regras', 'Provar argumentos de lógica de predicados', 'Mostrar invalidade por interpretação'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como provar, passo a passo, que um argumento com quantificadores é válido — ou mostrar que não é?</p>
<h3>As quatro regras</h3>
<p>Instanciação universal (IU): de ∀x Fx, inferir Fa para qualquer constante ${tag('fato')}. Generalização existencial (GE): de Fa, inferir ∃x Fx ${tag('fato')}. Instanciação existencial (IE): de ∃x Fx, inferir Fa, desde que a seja uma constante nova, ainda não usada ${tag('fato')}. Generalização universal (GU): de Fa, inferir ∀x Fx, desde que a seja arbitrária (não ocorra em premissas nem tenha vindo de IE) ${tag('fato')}.</p>
<h3>Exemplo</h3>
<p>1. ∀x(Hx → Mx) (premissa); 2. Hs (premissa); 3. Hs → Ms (IU 1); 4. Ms (MP 3, 2) ${tag('fato')}. É o silogismo de Sócrates provado ${tag('fato')}.</p>
<h3>Restrições</h3>
<p>Sem a restrição de IE, de "existe alguém rico" e "existe alguém pobre" se poderia concluir que alguém é rico e pobre ${tag('fato')}. Sem a restrição de GU, de "Pedro é brasileiro" se concluiria "todos são brasileiros" ${tag('fato')}.</p>
<h3>Contraexemplo</h3>
<p>Para mostrar invalidade, dá-se uma interpretação (um domínio e significados para os predicados) em que as premissas são verdadeiras e a conclusão falsa ${tag('fato')}. Por exemplo, ∃x Fx, ∃x Gx ⊬ ∃x(Fx ∧ Gx): domínio {1, 2}, F = {1}, G = {2} ${tag('fato')}.</p>`,
  vocabulario: [
    ['IU', 'Instanciação universal.'],
    ['GE', 'Generalização existencial.'],
    ['IE', 'Instanciação existencial, com constante nova.'],
    ['GU', 'Generalização universal, a partir de constante arbitrária.'],
    ['Interpretação', 'Domínio e significados que tornam fórmulas verdadeiras ou falsas.'],
  ],
  exemplos: `<p><strong>Prova com IE e GE:</strong> premissas ∀x(Fx → Gx) e ∃x Fx; conclusão ∃x Gx. 3. Fa (IE 2, a nova); 4. Fa → Ga (IU 1); 5. Ga (MP 4, 3); 6. ∃x Gx (GE 5). Note que IE foi feita antes de IU, para que a fosse nova.</p>`,
  contexto: `<p><strong>No mundo:</strong> provadores automáticos de teoremas implementam regras semelhantes ${tag('fato')}. <strong>No Brasil:</strong> manuais como o de Cezar Mortari apresentam essas regras em português ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as restrições são necessárias', tag: 'argumento',
    premissas: ['Uma regra de inferência deve preservar a verdade em toda interpretação.', 'Sem restrições, IE e GU permitiriam passar de premissas verdadeiras a conclusões falsas, como os contraexemplos mostram.', 'Com as restrições, as regras preservam a verdade.'],
    conclusao: 'Logo, as restrições não são burocracia: garantem a correção do sistema.',
    nota: 'A correção do sistema é estudada na metalógica (aula 4).',
  },
  objecoes: [
    { objecao: 'Basta o bom senso para ver se um argumento é válido.', tag: 'debate',
      resposta: 'Em argumentos simples, sim. Em argumentos com quantificadores encaixados, o bom senso erra com frequência, como mostram os erros sobre a ordem dos quantificadores. As regras tornam a verificação segura.' },
  ],
  aplicacao: `<p>Resolva uma lista de seis exercícios: quatro provas (duas com IE) e dois contraexemplos por interpretação.</p>`,
  fonte: {
    obra: 'Cezar A. Mortari, Introdução à lógica, capítulos sobre dedução na lógica de predicados', link: null,
    orientacao: `<p>Observe a formulação das restrições e os exemplos de erros que elas impedem.</p>`,
  },
  perguntas: [
    { p: 'Qual a restrição da IE?', r: 'A constante introduzida deve ser nova.' },
    { p: 'Qual a restrição da GU?', r: 'A constante deve ser arbitrária: não ocorrer em premissas nem vir de IE.' },
    { p: 'Como se mostra invalidade?', r: 'Por interpretação com premissas verdadeiras e conclusão falsa.' },
  ],
  exercicios: [
    mc('De ∀x Fx infere-se Fa por:', ['IU', 'GU', 'IE', 'GE'], 0, 'Instanciação universal.'),
    mc('De Fa infere-se ∃x Fx por:', ['GE', 'IE', 'IU', 'MP'], 0, 'Generalização existencial.'),
    mc('Em IE a constante deve ser:', ['Nova', 'Já usada', 'Qualquer', 'Numérica'], 0, 'Restrição.'),
    mc('∃x Fx, ∃x Gx ⊢ ∃x(Fx ∧ Gx) é:', ['Válido', 'Inválido', 'Tautologia', 'Contradição'], 1, 'Contraexemplo.'),
    mc('Um contraexemplo exige premissas:', ['Verdadeiras e conclusão falsa', 'Falsas', 'Verdadeiras e conclusão verdadeira', 'Contraditórias'], 0, 'Invalidade.'),
    disc('Resolva a lista: quatro provas e dois contraexemplos.', ['Provas', 'Restrições', 'Contraexemplos', 'Justificativas']),
  ],
  resumo: ['IU, GE, IE, GU.', 'IE: constante nova.', 'GU: constante arbitrária.', 'Provas passo a passo.', 'Invalidade por interpretação.'],
  referencias: [
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Gottlob Frege, Conceitografia (1879).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a lista', 'Ler a fonte indicada'],
  revisao: [['IE', 'Constante nova.'], ['GU', 'Arbitrária.'], ['Contraexemplo', 'Interpretação.']],
  avancado: {
    texto: `<h3>Domínios infinitos</h3>
<p>Alguns argumentos inválidos só têm contraexemplos em domínios infinitos ${tag('fato')}. Por exemplo, as premissas "toda coisa tem algo maior que ela", "maior é transitivo" e "nada é maior que si mesmo" são satisfeitas nos números naturais com a relação "maior que", mas não em nenhum domínio finito ${tag('fato')}. Por isso não há um teste mecânico geral de invalidade por domínios finitos, o que se relaciona à indecidibilidade (aula 4) ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'George Boolos, John Burgess e Richard Jeffrey, Computabilidade e lógica.' }],
    exercicios: [
      mc('As três premissas do texto são satisfeitas em:', ['Algum domínio finito', 'Só domínios infinitos', 'Nenhum domínio', 'Domínio vazio'], 1, 'Naturais.'),
      mc('Nos naturais a relação usada é:', ['"Maior que" com sucessores', 'Igualdade', 'Divisibilidade', 'Nenhuma'], 0, 'Sempre há maior.'),
      mc('Isso se relaciona à:', ['Indecidibilidade', 'Silogística', 'Bivalência', 'Lógica modal'], 0, 'Aula 4.'),
      disc('Explique por que, num domínio finito, uma relação transitiva e irreflexiva não pode dar a toda coisa algo maior.', ['Cadeia', 'Finitude', 'Repetição', 'Contradição'])],
  },
}),

aula({
  id: 'lf4-3', titulo: 'Conjuntos, relações e funções', duracao: '150 min',
  aprendera: ['Usar a linguagem básica de conjuntos', 'Operar união, interseção, diferença e complemento', 'Definir relações e funções como conjuntos', 'Conhecer o teorema de Cantor'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A teoria dos conjuntos tornou-se a linguagem comum da matemática. Quais são suas noções básicas?</p>
<h3>Noções básicas</h3>
<p>a ∈ A: a pertence a A; A ⊆ B: todo elemento de A está em B; ∅: o conjunto vazio ${tag('fato')}. Dois conjuntos são iguais se têm os mesmos elementos (extensionalidade) ${tag('fato')}.</p>
<h3>Operações</h3>
<p>A ∪ B (união: está em A ou em B), A ∩ B (interseção: em ambos), A − B (diferença: em A e não em B) ${tag('fato')}. As operações correspondem aos conectivos: ∪ ao "ou", ∩ ao "e", complemento ao "não" ${tag('fato')}. John Venn popularizou os diagramas que levam seu nome em 1880 ${tag('fato')}.</p>
<h3>Relações e funções</h3>
<p>O par ordenado (a, b) distingue a ordem; o produto A × B é o conjunto dos pares ${tag('fato')}. Uma relação é um subconjunto de A × B; uma função é uma relação em que cada elemento do domínio tem exatamente uma imagem ${tag('fato')}.</p>
<h3>Cantor</h3>
<p>Georg Cantor criou a teoria dos conjuntos no fim do século XIX ${tag('fato')}. Mostrou que os reais não podem ser postos em correspondência com os naturais e, pelo argumento diagonal (1891), que o conjunto das partes de A é sempre maior que A ${tag('fato')}. Há, portanto, infinitos de tamanhos diferentes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Pertinência', 'a ∈ A.'],
    ['Inclusão', 'A ⊆ B.'],
    ['Conjunto das partes', 'P(A): conjunto de todos os subconjuntos de A.'],
    ['Função', 'Relação que associa a cada elemento do domínio exatamente uma imagem.'],
    ['Cardinalidade', 'Tamanho de um conjunto, também infinito.'],
  ],
  exemplos: `<p><strong>Partes:</strong> se A = {1, 2}, P(A) = {∅, {1}, {2}, {1, 2}}: 4 elementos. Em geral, se A tem n elementos, P(A) tem 2<sup>n</sup>. Cantor mostrou que essa desigualdade (P(A) maior que A) vale também para conjuntos infinitos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria ZFC (Zermelo–Fraenkel com o axioma da escolha) é o fundamento usual da matemática ${tag('fato')}. <strong>No Brasil:</strong> a linguagem de conjuntos entrou no ensino escolar com o movimento da matemática moderna, nas décadas de 1960 e 1970 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que há infinitos de tamanhos diferentes', tag: 'argumento',
    premissas: ['Suponha uma função f que associe a cada elemento de A um subconjunto de A.', 'Considere D = {x ∈ A : x ∉ f(x)}.', 'Se D = f(d) para algum d, então d ∈ D se e só se d ∉ D, contradição; logo, nenhuma f atinge todos os subconjuntos.'],
    conclusao: 'Logo, P(A) é sempre maior que A, também para A infinito.',
    nota: 'É o argumento diagonal de Cantor; sua estrutura lembra o paradoxo de Russell.',
  },
  objecoes: [
    { objecao: 'Infinitos de tamanhos diferentes são absurdos.', tag: 'debate',
      resposta: 'Galileu já notara paradoxos do infinito. Cantor mostrou que, com a definição de tamanho por correspondência um a um, os resultados são coerentes. Houve resistência (Kronecker, intuicionistas), mas a teoria tornou-se padrão na matemática.' },
  ],
  aplicacao: `<p>Resolva uma lista de operações com conjuntos (com diagramas de Venn), classifique três relações como função ou não e reconstrua o argumento diagonal com suas palavras.</p>`,
  fonte: {
    obra: 'Paul Halmos, Teoria ingênua dos conjuntos (1960), primeiros capítulos', link: null,
    orientacao: `<p>Observe a apresentação dos axiomas da extensão e da especificação.</p>`,
  },
  perguntas: [
    { p: 'O que é A ∩ B?', r: 'O conjunto dos elementos que estão em A e em B.' },
    { p: 'O que é uma função?', r: 'Relação que associa a cada elemento do domínio exatamente uma imagem.' },
    { p: 'O que mostrou o argumento diagonal?', r: 'Que P(A) é sempre maior que A.' },
  ],
  exercicios: [
    mc('A ∪ B corresponde ao conectivo:', ['"E"', '"Ou"', '"Não"', '"Se"'], 1, 'União.'),
    mc('Se A tem 3 elementos, P(A) tem:', ['3', '6', '8', '9'], 2, '2³.'),
    mc('O argumento diagonal é de:', ['1879', '1891', '1908', '1931'], 1, 'Cantor.'),
    mc('Os diagramas de Venn foram popularizados em:', ['1854', '1880', '1902', '1931'], 1, 'Venn.'),
    mc('Dois conjuntos com os mesmos elementos são:', ['Iguais', 'Disjuntos', 'Diferentes', 'Vazios'], 0, 'Extensionalidade.'),
    disc('Resolva a lista e reconstrua o argumento diagonal.', ['Operações', 'Funções', 'Diagonal', 'Clareza']),
  ],
  resumo: ['∈, ⊆, ∅.', '∪, ∩, −.', 'Relações e funções como conjuntos.', 'Cantor: diagonal (1891).', 'Infinitos de tamanhos diferentes.'],
  referencias: [
    { texto: 'Paul Halmos, Teoria ingênua dos conjuntos (1960).' },
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Georg Cantor, Contribuições à fundamentação da teoria dos números transfinitos (1895–1897).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a lista', 'Ler a fonte indicada'],
  revisao: [['∪', 'Ou.'], ['P(A)', '2ⁿ.'], ['Diagonal', 'Cantor.']],
  avancado: {
    texto: `<h3>A hipótese do contínuo</h3>
<p>Cantor conjecturou que não há conjunto de tamanho estritamente entre o dos naturais e o dos reais (hipótese do contínuo) ${tag('fato')}. Gödel (1940) mostrou que ela não pode ser refutada em ZFC, e Paul Cohen (1963) que não pode ser provada: é independente desses axiomas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Halmos, Teoria ingênua dos conjuntos (1960).' }],
    exercicios: [
      mc('A hipótese do contínuo é:', ['Independente de ZFC', 'Provada em ZFC', 'Refutada em ZFC', 'Contraditória'], 0, 'Gödel e Cohen.'),
      mc('Cohen mostrou a independência em:', ['1931', '1940', '1963', '1987'], 2, 'Forcing.'),
      mc('Gödel mostrou em 1940 que a hipótese:', ['Não pode ser refutada em ZFC', 'É falsa', 'É provável', 'É trivial'], 0, 'Consistência.'),
      disc('Explique o que significa uma proposição ser independente de um sistema de axiomas.', ['Definição', 'Exemplo', 'Gödel e Cohen', 'Consequência'])],
  },
}),

aula({
  id: 'lf4-4', titulo: 'Metalógica: correção, completude e decidibilidade', duracao: '150 min',
  aprendera: ['Distinguir consequência sintática e semântica', 'Explicar correção e completude', 'Explicar decidibilidade e o resultado de Church e Turing', 'Conhecer compacidade e Löwenheim–Skolem'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Nossas regras de dedução provam tudo o que é válido, e só o que é válido? Há um método mecânico para decidir a validade?</p>
<h3>Sintaxe e semântica</h3>
<p>Γ ⊢ φ: φ é demonstrável a partir de Γ pelas regras (sintaxe) ${tag('fato')}. Γ ⊨ φ: φ é verdadeira em toda interpretação que torna Γ verdadeiro (semântica) ${tag('fato')}.</p>
<h3>Correção e completude</h3>
<p>Correção: se Γ ⊢ φ, então Γ ⊨ φ — as regras só provam o que é válido ${tag('fato')}. Completude: se Γ ⊨ φ, então Γ ⊢ φ — as regras provam tudo o que é válido ${tag('fato')}. Gödel provou a completude da lógica de predicados de primeira ordem em sua tese de 1929 (publicada em 1930) ${tag('fato')}. Não confundir com a incompletude (1931), que se refere a teorias aritméticas ${tag('fato')}.</p>
<h3>Decidibilidade</h3>
<p>A lógica proposicional é decidível: as tabelas-verdade decidem mecanicamente a validade ${tag('fato')}. Church e Turing mostraram, em 1936, que a lógica de predicados de primeira ordem não é decidível ${tag('fato')}.</p>
<h3>Compacidade e Löwenheim–Skolem</h3>
<p>Compacidade: se todo subconjunto finito de Γ tem modelo, Γ tem modelo ${tag('fato')}. Löwenheim–Skolem: uma teoria de primeira ordem com modelo infinito tem modelos infinitos de outros tamanhos, inclusive enumeráveis ${tag('fato')}.</p>`,
  vocabulario: [
    ['⊢', 'Consequência sintática (demonstrabilidade).'],
    ['⊨', 'Consequência semântica (validade).'],
    ['Correção', 'Tudo o que se prova é válido.'],
    ['Completude', 'Tudo o que é válido se prova.'],
    ['Decidibilidade', 'Existência de método mecânico que sempre responde sim ou não.'],
  ],
  exemplos: `<p><strong>Completude e incompletude:</strong> a completude (1929) diz que as regras da lógica de primeira ordem captam toda consequência lógica. A incompletude (1931) diz que nenhum sistema de axiomas para a aritmética capta todas as verdades aritméticas. Não há contradição: uma fala da lógica, a outra de uma teoria matemática.</p>`,
  contexto: `<p><strong>No mundo:</strong> a indecidibilidade da lógica de predicados respondeu negativamente ao "problema da decisão" (Entscheidungsproblem) de Hilbert ${tag('fato')}. <strong>No Brasil:</strong> a teoria da computação é disciplina obrigatória nos cursos de ciência da computação ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que correção e completude importam', tag: 'argumento',
    premissas: ['Um sistema dedutivo pretende captar a consequência lógica.', 'Se fosse incorreto, provaria conclusões inválidas; se fosse incompleto, deixaria de provar algumas válidas.', 'A lógica de predicados de primeira ordem é correta e completa.'],
    conclusao: 'Logo, nela demonstrabilidade e validade coincidem.',
    nota: 'Isso não vale para lógicas de segunda ordem com semântica padrão.',
  },
  objecoes: [
    { objecao: 'Se a lógica de predicados é indecidível, ela é inútil.', tag: 'debate',
      resposta: 'Indecidível significa que não há método que sempre responda; mas, se o argumento é válido, uma busca sistemática encontra a prova (semidecidibilidade). Além disso, muitos fragmentos são decidíveis, e provadores automáticos são muito usados.' },
  ],
  aplicacao: `<p>Escreva um glossário comentado de metalógica com dez termos (⊢, ⊨, correção, completude, decidibilidade, compacidade etc.), cada um com definição e exemplo.</p>`,
  fonte: {
    obra: 'George Boolos, John Burgess e Richard Jeffrey, Computabilidade e lógica, capítulos sobre completude', link: null,
    orientacao: `<p>Observe a distinção entre os resultados sobre a lógica e os resultados sobre teorias.</p>`,
  },
  perguntas: [
    { p: 'O que é correção?', r: 'Se Γ ⊢ φ, então Γ ⊨ φ.' },
    { p: 'O que provou Gödel em 1929?', r: 'A completude da lógica de predicados de primeira ordem.' },
    { p: 'A lógica de predicados é decidível?', r: 'Não: Church e Turing (1936).' },
  ],
  exercicios: [
    mc('Completude: se Γ ⊨ φ, então:', ['Γ ⊢ φ', 'Γ ⊢ ¬φ', 'φ é falsa', 'Γ é vazio'], 0, 'Definição.'),
    mc('A lógica proposicional é:', ['Decidível', 'Indecidível', 'Incompleta', 'Incorreta'], 0, 'Tabelas.'),
    mc('A indecidibilidade da primeira ordem é de:', ['1929', '1931', '1936', '1963'], 2, 'Church e Turing.'),
    mc('A compacidade diz que se todo subconjunto finito tem modelo:', ['O conjunto tem modelo', 'Não tem', 'É contraditório', 'É vazio'], 0, 'Definição.'),
    mc('⊨ indica consequência:', ['Semântica', 'Sintática', 'Retórica', 'Modal'], 0, 'Validade.'),
    disc('Escreva o glossário comentado de dez termos de metalógica.', ['Termos', 'Definições', 'Exemplos', 'Precisão']),
  ],
  resumo: ['⊢ e ⊨.', 'Correção e completude (Gödel, 1929).', 'Proposicional decidível.', 'Primeira ordem indecidível (1936).', 'Compacidade e Löwenheim–Skolem.'],
  referencias: [
    { texto: 'George Boolos, John Burgess e Richard Jeffrey, Computabilidade e lógica.' },
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Ernest Nagel e James R. Newman, A prova de Gödel (1958).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler a fonte indicada'],
  revisao: [['Correção', '⊢ ⇒ ⊨.'], ['Completude', '⊨ ⇒ ⊢.'], ['1936', 'Indecidível.']],
  avancado: {
    texto: `<h3>O paradoxo de Skolem</h3>
<p>A teoria dos conjuntos prova que há conjuntos não enumeráveis; mas, pelo teorema de Löwenheim–Skolem, se tem modelo, tem um modelo enumerável ${tag('fato')}. A tensão se desfaz notando que "não enumerável" dentro do modelo significa que o modelo não contém a função de enumeração, embora ela exista "de fora" ${tag('fato')}. Skolem viu nisso uma relatividade das noções de conjuntos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'George Boolos, John Burgess e Richard Jeffrey, Computabilidade e lógica.' }],
    exercicios: [
      mc('O paradoxo de Skolem envolve modelos:', ['Enumeráveis da teoria dos conjuntos', 'Finitos da aritmética', 'Modais', 'Vazios'], 0, 'Löwenheim–Skolem.'),
      mc('A solução usual diz que a função de enumeração:', ['Não está no modelo', 'Não existe em lugar nenhum', 'É contraditória', 'É finita'], 0, 'Dentro e fora.'),
      mc('Skolem viu nisso uma:', ['Relatividade das noções de conjuntos', 'Prova de Deus', 'Refutação da lógica', 'Prova da hipótese do contínuo'], 0, 'Interpretação.'),
      disc('Explique por que o paradoxo de Skolem não é uma contradição.', ['Teorema', 'Modelo', 'Dentro e fora', 'Conclusão'])],
  },
}),

avaliacao('lf4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre lógica de predicados, conjuntos e metalógica, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça duas provas com quantificadores.</li><li>Releia seu glossário.</li></ul>`,
[
  disc('Formalize um argumento com quantificadores encaixados, prove-o por dedução natural e apresente um argumento parecido que seja inválido, com contraexemplo.', ['Formalização', 'Prova', 'Contraexemplo', 'Restrições']),
  disc('Explique a diferença entre completude da lógica (1929) e incompletude da aritmética (1931), e o que significa a indecidibilidade da lógica de predicados.', ['Completude', 'Incompletude', 'Decidibilidade', 'Síntese']),
]),
];
