// Lógica formal I — validade, linguagem proposicional, tabelas-verdade e dedução natural (etapas 1 a 3 do percurso de Lógica formal).
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lf1-1', titulo: 'O que é lógica formal: validade, verdade e forma', duracao: '150 min',
  aprendera: ['Distinguir validade e verdade', 'Reconhecer a forma lógica de um argumento', 'Distinguir dedução e indução', 'Situar a lógica formal na tradição da lógica'],
  prereq: ['Lógica (curso de filosofia, recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>"Todos os gatos voam; Mimi é um gato; logo, Mimi voa." O argumento é absurdo — ou é perfeitamente correto? Depende do que se pergunta.</p>
<h3>Validade e verdade</h3>
<p>Um argumento é válido quando é impossível que as premissas sejam verdadeiras e a conclusão falsa ${tag('fato')}. A verdade se diz das proposições; a validade, da ligação entre premissas e conclusão ${tag('fato')}. O argumento dos gatos é válido, mas tem premissa falsa; um argumento sólido é válido e tem premissas verdadeiras ${tag('fato')}.</p>
<h3>Forma lógica</h3>
<p>A validade depende da forma, não do assunto: "Todo A é B; x é A; logo, x é B" é válido para quaisquer A, B e x ${tag('fato')}. A lógica formal estuda essas formas com linguagens simbólicas ${tag('fato')}.</p>
<h3>Dedução e indução</h3>
<p>Na dedução válida, a conclusão segue necessariamente das premissas; na indução, as premissas tornam a conclusão provável, sem garanti-la ${tag('fato')}. A lógica formal clássica trata sobretudo da dedução ${tag('fato')}.</p>
<h3>Tradição</h3>
<p>Aristóteles fundou a lógica como estudo das formas de raciocínio nos Analíticos ${tag('fato')}. Tomás de Aquino a define como arte que dirige o próprio ato da razão, para que proceda com ordem, facilidade e sem erro (Comentário aos Analíticos posteriores, proêmio) ${tag('fato')}. A lógica formal moderna amplia e torna mais rigorosa essa tradição ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Argumento', 'Conjunto de premissas e uma conclusão que delas se pretende seguir.'],
    ['Validade', 'Impossibilidade de premissas verdadeiras com conclusão falsa.'],
    ['Solidez', 'Validade com premissas verdadeiras.'],
    ['Forma lógica', 'Estrutura do argumento independente do assunto.'],
    ['Indução', 'Raciocínio cuja conclusão é provável, não necessária.'],
  ],
  exemplos: `<p><strong>Quatro combinações:</strong> 1) válido com premissas verdadeiras: sólido ("Todo homem é mortal; Sócrates é homem; logo, é mortal"). 2) válido com premissa falsa: o dos gatos. 3) inválido com conclusão verdadeira: "Se chove, a rua molha; a rua está molhada; logo, choveu" (pode ter sido a mangueira). 4) inválido com tudo falso. Só a combinação válida + premissas verdadeiras garante a verdade da conclusão.</p>`,
  contexto: `<p><strong>No mundo:</strong> o termo "lógica formal" consolidou-se nos séculos XIX e XX com a matematização da lógica ${tag('fato')}. <strong>No Brasil:</strong> a Sociedade Brasileira de Lógica reúne pesquisadores da área ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a validade depende só da forma', tag: 'argumento',
    premissas: ['Se trocarmos os termos de um argumento válido por outros quaisquer, mantendo a estrutura, ele continua válido.', 'Isso mostra que a validade não depende do conteúdo.', 'Logo, depende da estrutura, isto é, da forma.'],
    conclusao: 'Logo, a validade é propriedade formal, estudável por linguagens simbólicas.',
    nota: 'A verdade das premissas, ao contrário, depende do conteúdo e do mundo.',
  },
  objecoes: [
    { objecao: 'A lógica formal é um jogo de símbolos sem relação com o pensamento real.', tag: 'debate',
      resposta: 'Os símbolos abstraem a forma dos raciocínios que fazemos em linguagem natural, para testá-la com rigor. Tomás via a lógica como arte do raciocínio; a lógica formal é instrumento dessa arte. O risco é esquecer a interpretação dos símbolos, não usá-los.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: classifique dez argumentos (de jornais, conversas ou textos clássicos) quanto à validade e à verdade das premissas, justificando.</p>`,
  fonte: {
    obra: 'Irving Copi, Introdução à lógica, capítulo 1; Santo Tomás, Comentário aos Analíticos posteriores, proêmio', link: null,
    orientacao: `<p>Em Copi, a distinção entre validade e verdade. Em Tomás, a definição da lógica como arte da razão.</p>`,
  },
  perguntas: [
    { p: 'Quando um argumento é válido?', r: 'Quando é impossível que as premissas sejam verdadeiras e a conclusão falsa.' },
    { p: 'O que é um argumento sólido?', r: 'Um argumento válido com premissas verdadeiras.' },
    { p: 'Como Tomás define a lógica?', r: 'Como arte que dirige o ato da razão para que proceda com ordem, facilidade e sem erro.' },
  ],
  exercicios: [
    mc('"Todos os gatos voam; Mimi é gato; logo, Mimi voa" é:', ['Válido e sólido', 'Válido, não sólido', 'Inválido', 'Indutivo'], 1, 'Premissa falsa.'),
    mc('"Se chove, molha; molhou; logo, choveu" é:', ['Válido', 'Inválido', 'Sólido', 'Tautologia'], 1, 'Afirmação do consequente.'),
    mc('A validade depende:', ['Do assunto', 'Da forma', 'Do autor', 'Da opinião'], 1, 'Formal.'),
    mc('Raciocínio cuja conclusão é só provável é:', ['Dedução', 'Indução', 'Tautologia', 'Silogismo'], 1, 'Tipos.'),
    mc('Um argumento válido pode ter conclusão falsa?', ['Sim, se alguma premissa for falsa', 'Nunca', 'Sempre', 'Só em indução'], 0, 'Definição.'),
    disc('Classifique dez argumentos quanto à validade e à verdade das premissas.', ['Argumentos', 'Validade', 'Verdade', 'Justificativa']),
  ],
  resumo: ['Validade ≠ verdade.', 'Sólido = válido + premissas verdadeiras.', 'Forma lógica.', 'Dedução × indução.', 'Aristóteles; Tomás: arte da razão.'],
  referencias: [
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Aristóteles, Primeiros analíticos.', livro: 'aristoteles-analiticos' },
    { texto: 'Santo Tomás de Aquino, Comentário aos Analíticos posteriores.', livro: 'tomas-com-analiticos' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler as fontes indicadas'],
  revisao: [['Válido', 'Forma.'], ['Sólido', 'Válido + verdadeiro.'], ['Indução', 'Provável.']],
  avancado: {
    texto: `<h3>Consequência lógica</h3>
<p>Alfred Tarski precisou em 1936 a noção de consequência lógica: uma conclusão é consequência das premissas quando toda interpretação que torna as premissas verdadeiras torna também a conclusão verdadeira ${tag('fato')}. Essa definição semântica é a base da noção moderna de validade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Alfred Tarski, "Sobre o conceito de consequência lógica" (1936).' }],
    exercicios: [
      mc('A definição moderna de consequência lógica é de:', ['Tarski', 'Aristóteles', 'Boole', 'Copi'], 0, '1936.'),
      mc('Consequência lógica envolve todas as:', ['Interpretações', 'Opiniões', 'Línguas', 'Provas empíricas'], 0, 'Semântica.'),
      mc('Se uma interpretação torna as premissas verdadeiras e a conclusão falsa, o argumento é:', ['Válido', 'Inválido', 'Sólido', 'Indutivo'], 1, 'Contraexemplo.'),
      disc('Construa um contraexemplo (interpretação) que mostre a invalidade da afirmação do consequente.', ['Forma', 'Interpretação', 'Valores', 'Conclusão'])],
  },
}),

aula({
  id: 'lf1-2', titulo: 'A linguagem proposicional: conectivos e formalização', duracao: '150 min',
  aprendera: ['Usar os conectivos ¬, ∧, ∨, → e ↔', 'Formalizar frases do português', 'Tratar "só se", "a menos que" e "nem... nem"', 'Reconhecer fórmulas bem formadas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"Irei à festa só se você for." "Não sairei a menos que pare de chover." Frases assim confundem até bons leitores. A linguagem proposicional as torna exatas.</p>
<h3>Proposições e conectivos</h3>
<p>Proposições simples são representadas por letras (p, q, r) ${tag('fato')}. Os conectivos são: negação ¬ ("não"), conjunção ∧ ("e"), disjunção ∨ ("ou", inclusivo), condicional → ("se... então") e bicondicional ↔ ("se e somente se") ${tag('fato')}.</p>
<h3>Formalizar</h3>
<p>Com legenda p: "chove", q: "a rua molha": "se chove, a rua molha" é p → q ${tag('fato')}. "A rua molha se chove" também é p → q ${tag('fato')}. "Chove só se a rua molha" é p → q: o "só se" introduz a condição necessária, que vai para o consequente ${tag('fato')}. "Não saio a menos que pare de chover" equivale a "se não para de chover, não saio" ${tag('fato')}. "Nem p nem q" é ¬p ∧ ¬q ${tag('fato')}.</p>
<h3>Fórmulas bem formadas</h3>
<p>As regras de formação dizem o que é fórmula: letras são fórmulas; se A e B são fórmulas, ¬A, (A ∧ B), (A ∨ B), (A → B) e (A ↔ B) também são ${tag('fato')}. Parênteses evitam ambiguidade: (p ∧ q) → r é diferente de p ∧ (q → r) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Proposição', 'Enunciado que pode ser verdadeiro ou falso.'],
    ['Conectivo', 'Operador que forma proposições compostas.'],
    ['Antecedente', 'Parte "se" do condicional.'],
    ['Consequente', 'Parte "então" do condicional.'],
    ['Fórmula bem formada', 'Expressão construída segundo as regras de formação.'],
  ],
  exemplos: `<p><strong>"Só se" na prática:</strong> o regulamento diz "o aluno é aprovado só se tiver 75% de frequência". Com a: "é aprovado" e f: "tem 75% de frequência", temos a → f. Isso não diz que quem tem 75% é aprovado (pode reprovar por nota); diz que sem 75% não há aprovação. Confundir com f → a é erro comum.</p>`,
  contexto: `<p><strong>No mundo:</strong> a notação simbólica moderna desenvolveu-se com Boole, Frege, Peano e Russell ${tag('fato')}. <strong>No Brasil:</strong> exames de raciocínio lógico em concursos públicos cobram formalização e equivalências ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que formalizar evita erros', tag: 'argumento',
    premissas: ['A linguagem natural tem ambiguidades ("ou" inclusivo ou exclusivo, "só se").', 'A linguagem formal fixa um único sentido para cada conectivo.', 'Assim, a estrutura do raciocínio fica explícita e testável.'],
    conclusao: 'Logo, formalizar ajuda a evitar erros de raciocínio.',
    nota: 'A formalização exige cuidado: traduzir mal é errar antes de começar.',
  },
  objecoes: [
    { objecao: 'O condicional material (→) não corresponde ao "se... então" do português.', tag: 'debate',
      resposta: 'É verdade que o condicional material é verdadeiro sempre que o antecedente é falso, o que soa estranho em português. Os lógicos o usam porque preserva a validade dos argumentos usuais; outros sistemas (condicionais estritos, relevantes) tentam captar melhor o sentido comum. É escolha de sistema, com vantagens e limites.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: formalize vinte frases do português na linguagem proposicional, com legenda clara, incluindo casos de "só se", "a menos que" e "nem... nem".</p>`,
  fonte: {
    obra: 'Irving Copi, Introdução à lógica, capítulos sobre lógica simbólica', link: null,
    orientacao: `<p>Observe a tradução de frases com condicionais e as convenções de parênteses.</p>`,
  },
  perguntas: [
    { p: 'Como se formaliza "p só se q"?', r: 'p → q.' },
    { p: 'Como se formaliza "nem p nem q"?', r: '¬p ∧ ¬q.' },
    { p: 'Que conectivo representa "se e somente se"?', r: 'O bicondicional ↔.' },
  ],
  exercicios: [
    mc('"Se estudo, passo" é:', ['p ∧ q', 'p → q', 'q → p', 'p ∨ q'], 1, 'Condicional.'),
    mc('"Passo só se estudo" (p: passo; q: estudo):', ['p → q', 'q → p', 'p ∧ q', 'p ↔ q'], 0, 'Condição necessária.'),
    mc('"Nem chove nem venta":', ['¬(p ∧ q)', '¬p ∧ ¬q', '¬p ∨ ¬q', 'p → ¬q'], 1, 'Nem... nem.'),
    mc('O "ou" da lógica clássica é:', ['Exclusivo', 'Inclusivo', 'Indefinido', 'Condicional'], 1, 'Disjunção.'),
    mc('Os parênteses servem para:', ['Enfeitar', 'Evitar ambiguidade', 'Negar', 'Nada'], 1, 'Formação.'),
    disc('Formalize vinte frases do português com legenda, incluindo "só se" e "a menos que".', ['Legenda', 'Formalizações', 'Casos difíceis', 'Precisão']),
  ],
  resumo: ['¬, ∧, ∨, →, ↔.', '"Se p, q" e "q se p": p → q.', '"p só se q": p → q.', '"Nem p nem q": ¬p ∧ ¬q.', 'Regras de formação e parênteses.'],
  referencias: [
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Gottlob Frege, Conceitografia (1879).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as formalizações', 'Ler a fonte indicada'],
  revisao: [['Só se', 'Consequente.'], ['Nem... nem', '¬p ∧ ¬q.'], ['∨', 'Inclusivo.']],
  avancado: {
    texto: `<h3>Condição necessária e suficiente</h3>
<p>Em p → q, p é condição suficiente de q e q é condição necessária de p ${tag('fato')}. "Ser quadrado é suficiente para ser retângulo" e "ser retângulo é necessário para ser quadrado" dizem o mesmo ${tag('fato')}. Confundir condição necessária e suficiente é fonte frequente de erros em debates ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Cezar A. Mortari, Introdução à lógica (2001).' }],
    exercicios: [
      mc('Em p → q, p é condição:', ['Necessária de q', 'Suficiente de q', 'Contraditória', 'Nenhuma'], 1, 'Suficiência.'),
      mc('Ser retângulo para ser quadrado é condição:', ['Suficiente', 'Necessária', 'Nenhuma', 'Contraditória'], 1, 'Necessidade.'),
      mc('"Oxigênio é necessário para o fogo" formaliza-se (f: fogo; o: oxigênio):', ['o → f', 'f → o', 'f ∧ o', 'o ↔ f'], 1, 'Necessária no consequente.'),
      disc('Encontre num debate público uma confusão entre condição necessária e suficiente e explique.', ['Debate', 'Formalização', 'Confusão', 'Correção'])],
  },
}),

aula({
  id: 'lf1-3', titulo: 'Tabelas-verdade: tautologias e validade', duracao: '150 min',
  aprendera: ['Construir tabelas-verdade', 'Classificar fórmulas em tautologia, contradição e contingência', 'Testar a validade por tabela', 'Reconhecer formas válidas e falácias formais'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber, sem depender de intuição, se um argumento proposicional é válido? A tabela-verdade é um método mecânico e infalível para isso.</p>
<h3>Tabelas dos conectivos</h3>
<p>¬p é verdadeira quando p é falsa; p ∧ q só é verdadeira quando ambas o são; p ∨ q só é falsa quando ambas são falsas; p → q só é falsa quando p é verdadeira e q falsa; p ↔ q é verdadeira quando p e q têm o mesmo valor ${tag('fato')}.</p>
<h3>Construir</h3>
<p>Com n letras, a tabela tem 2<sup>n</sup> linhas: 2 letras, 4 linhas; 3 letras, 8 linhas ${tag('fato')}. Calcula-se o valor da fórmula em cada linha, das partes ao todo ${tag('fato')}.</p>
<h3>Classificar</h3>
<p>Tautologia é verdadeira em todas as linhas (p ∨ ¬p); contradição, falsa em todas (p ∧ ¬p); contingência, verdadeira em algumas e falsa em outras ${tag('fato')}.</p>
<h3>Testar a validade</h3>
<p>Um argumento é válido se não há linha com todas as premissas verdadeiras e a conclusão falsa ${tag('fato')}. O modus ponens (p → q, p ∴ q) é válido; a afirmação do consequente (p → q, q ∴ p) é inválida: na linha p falso, q verdadeiro, as premissas são verdadeiras e a conclusão falsa ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tabela-verdade', 'Tabela com os valores de uma fórmula em todas as combinações.'],
    ['Tautologia', 'Fórmula verdadeira em todas as linhas.'],
    ['Contradição', 'Fórmula falsa em todas as linhas.'],
    ['Contingência', 'Fórmula verdadeira em algumas linhas e falsa em outras.'],
    ['Falácia formal', 'Forma de argumento inválida que parece válida.'],
  ],
  exemplos: `<p><strong>Testando o modus tollens (p → q, ¬q ∴ ¬p):</strong> nas quatro linhas, procura-se uma em que p → q e ¬q sejam verdadeiras e ¬p falsa. Para ¬q ser verdadeira, q é falsa; para p → q ser verdadeira com q falsa, p tem de ser falsa; então ¬p é verdadeira. Não há linha problemática: o argumento é válido.</p>`,
  contexto: `<p><strong>No mundo:</strong> Wittgenstein e Emil Post difundiram as tabelas-verdade por volta de 1921 ${tag('fato')}. <strong>No Brasil:</strong> tabelas-verdade são conteúdo frequente em vestibulares e concursos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a tabela-verdade é um método de decisão', tag: 'argumento',
    premissas: ['Uma fórmula proposicional tem número finito de letras.', 'Logo, tem número finito de combinações de valores (2ⁿ).', 'Examinando todas, decide-se com certeza se é tautologia ou se um argumento é válido.'],
    conclusao: 'Logo, a lógica proposicional é decidível pelo método das tabelas.',
    nota: 'Na lógica de predicados, isso não vale em geral (Church e Turing, 1936).',
  },
  objecoes: [
    { objecao: 'Tabelas-verdade são inúteis porque ninguém raciocina assim.', tag: 'argumento',
      resposta: 'No dia a dia não fazemos tabelas, mas elas mostram com certeza quais formas são válidas, e treinam a percepção de falácias como a afirmação do consequente. São instrumento de verificação e de formação do juízo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (primeira parte): teste cinco argumentos por tabela-verdade, incluindo modus ponens, modus tollens, afirmação do consequente, negação do antecedente e silogismo disjuntivo.</p>`,
  fonte: {
    obra: 'Ludwig Wittgenstein, Tractatus logico-philosophicus (1921), proposições 4.31 e seguintes', link: null,
    orientacao: `<p>Observe a apresentação das combinações de valores de verdade e da tautologia.</p>`,
  },
  perguntas: [
    { p: 'Quantas linhas tem a tabela de uma fórmula com 3 letras?', r: '8.' },
    { p: 'Quando p → q é falsa?', r: 'Quando p é verdadeira e q falsa.' },
    { p: 'Por que a afirmação do consequente é inválida?', r: 'Porque há uma linha com premissas verdadeiras e conclusão falsa (p falso, q verdadeiro).' },
  ],
  exercicios: [
    mc('p ∨ ¬p é:', ['Contradição', 'Tautologia', 'Contingência', 'Inválida'], 1, 'Terceiro excluído.'),
    mc('Uma fórmula com 4 letras tem quantas linhas?', ['8', '12', '16', '32'], 2, '2⁴.'),
    mc('p → q, ¬p ∴ ¬q é:', ['Válido', 'Inválido (negação do antecedente)', 'Tautologia', 'Modus tollens'], 1, 'Falácia.'),
    mc('p ∨ q, ¬p ∴ q é:', ['Silogismo disjuntivo válido', 'Inválido', 'Contradição', 'Afirmação do consequente'], 0, 'Válido.'),
    mc('p ∧ q é verdadeira quando:', ['Uma é verdadeira', 'Ambas são verdadeiras', 'Ambas falsas', 'Sempre'], 1, 'Conjunção.'),
    disc('Teste cinco argumentos por tabela-verdade, identificando válidos e falácias.', ['Tabelas', 'Linhas críticas', 'Classificação', 'Explicação']),
  ],
  resumo: ['Tabelas dos cinco conectivos.', '2ⁿ linhas.', 'Tautologia, contradição, contingência.', 'Validade: nenhuma linha V... V/F.', 'Modus ponens e tollens; falácias.'],
  referencias: [
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Ludwig Wittgenstein, Tractatus logico-philosophicus (1921).', livro: 'wittgenstein-tractatus' },
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as tabelas', 'Ler a fonte indicada'],
  revisao: [['2ⁿ', 'Linhas.'], ['p → q', 'Falsa só V/F.'], ['Afirmação do consequente', 'Inválida.']],
  avancado: {
    texto: `<h3>Leis de De Morgan</h3>
<p>As leis de De Morgan afirmam que ¬(p ∧ q) equivale a ¬p ∨ ¬q, e ¬(p ∨ q) equivale a ¬p ∧ ¬q ${tag('fato')}. Na prática: negar "fui à missa e ao mercado" é dizer "não fui à missa ou não fui ao mercado" ${tag('fato')}. Essas equivalências podem ser verificadas por tabela-verdade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' }],
    exercicios: [
      mc('¬(p ∧ q) equivale a:', ['¬p ∧ ¬q', '¬p ∨ ¬q', 'p ∨ q', 'p → q'], 1, 'De Morgan.'),
      mc('¬(p ∨ q) equivale a:', ['¬p ∧ ¬q', '¬p ∨ ¬q', 'p ∧ q', 'p ↔ q'], 0, 'De Morgan.'),
      mc('Negar "chove e faz frio" é:', ['Não chove e não faz frio', 'Não chove ou não faz frio', 'Chove ou faz frio', 'Nada'], 1, 'Aplicação.'),
      disc('Verifique por tabela-verdade as duas leis de De Morgan.', ['Tabela 1', 'Tabela 2', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'lf1-4', titulo: 'Dedução natural: provar passo a passo', duracao: '150 min',
  aprendera: ['Aplicar regras de inferência básicas', 'Construir provas justificadas linha a linha', 'Usar a prova condicional e a redução ao absurdo', 'Comparar provas e tabelas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Com muitas letras, tabelas ficam enormes (10 letras, 1.024 linhas). Precisamos de um método que imite o raciocínio passo a passo: a dedução natural.</p>
<h3>Regras básicas</h3>
<p>Modus ponens: de p → q e p, conclui-se q. Modus tollens: de p → q e ¬q, conclui-se ¬p. Silogismo hipotético: de p → q e q → r, conclui-se p → r. Silogismo disjuntivo: de p ∨ q e ¬p, conclui-se q. Conjunção: de p e q, conclui-se p ∧ q. Simplificação: de p ∧ q, conclui-se p. Adição: de p, conclui-se p ∨ q ${tag('fato')}.</p>
<h3>Uma prova</h3>
<p>Premissas: 1) p → q; 2) q → r; 3) p. Provar r. 4) q (1, 3, modus ponens). 5) r (2, 4, modus ponens) ${tag('fato')}. Cada linha cita as linhas usadas e a regra ${tag('fato')}.</p>
<h3>Prova condicional e absurdo</h3>
<p>Na prova condicional, para provar p → q, supõe-se p e deriva-se q; então descarta-se a suposição e conclui-se p → q ${tag('fato')}. Na redução ao absurdo, para provar ¬p, supõe-se p e deriva-se uma contradição ${tag('fato')}.</p>
<h3>Correção</h3>
<p>As regras da dedução natural são corretas: só permitem concluir o que é consequência das premissas; e, para a lógica proposicional, são completas: permitem provar toda consequência ${tag('fato')}.</p>`,
  vocabulario: [
    ['Regra de inferência', 'Padrão válido que autoriza passar de premissas a conclusão.'],
    ['Modus tollens', 'De p → q e ¬q, concluir ¬p.'],
    ['Prova condicional', 'Provar p → q supondo p e derivando q.'],
    ['Redução ao absurdo', 'Provar ¬p mostrando que p leva a contradição.'],
    ['Completude', 'Propriedade de um sistema que prova toda consequência.'],
  ],
  exemplos: `<p><strong>Um argumento do cotidiano:</strong> "Se a reunião é hoje, o padre vem; se o padre vem, há missa; não há missa. Logo, a reunião não é hoje." Com r, p, m: 1) r → p; 2) p → m; 3) ¬m. 4) r → m (1, 2, silogismo hipotético). 5) ¬r (4, 3, modus tollens). Dois passos bastam.</p>`,
  contexto: `<p><strong>No mundo:</strong> a dedução natural foi formulada por Gerhard Gentzen e Stanisław Jaśkowski em 1934 ${tag('fato')}. <strong>No Brasil:</strong> manuais de lógica em português, como o de Mortari, ensinam dedução natural ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a redução ao absurdo é válida', tag: 'argumento',
    premissas: ['Uma contradição não pode ser verdadeira.', 'Se de p, junto com premissas aceitas, se deriva uma contradição, então p não pode ser verdadeira com elas.', 'Logo, aceitas as premissas, ¬p deve ser verdadeira.'],
    conclusao: 'Logo, a redução ao absurdo é método válido de prova.',
    nota: 'Aristóteles e Euclides já a usavam; a lógica intuicionista restringe certas formas dela.',
  },
  objecoes: [
    { objecao: 'Se a tabela-verdade decide tudo, provas são desnecessárias.', tag: 'argumento',
      resposta: 'Na lógica proposicional, a tabela decide, mas fica impraticável com muitas letras e não mostra o caminho do raciocínio. Na lógica de predicados, não há tabela que decida em geral. Provas são o método universal e mais próximo do raciocínio humano.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (segunda parte): prove por dedução natural três argumentos, um deles usando prova condicional ou redução ao absurdo, justificando cada linha.</p>`,
  fonte: {
    obra: 'Cezar A. Mortari, Introdução à lógica (2001), capítulos sobre dedução natural', link: null,
    orientacao: `<p>Observe a apresentação das regras e a notação das hipóteses descartadas.</p>`,
  },
  perguntas: [
    { p: 'O que diz o modus tollens?', r: 'De p → q e ¬q, conclui-se ¬p.' },
    { p: 'Como se prova p → q por prova condicional?', r: 'Supondo p e derivando q, depois descartando a suposição.' },
    { p: 'Quem formulou a dedução natural em 1934?', r: 'Gentzen e Jaśkowski.' },
  ],
  exercicios: [
    mc('De p ∧ q, conclui-se p por:', ['Adição', 'Simplificação', 'Conjunção', 'Modus ponens'], 1, 'Regra.'),
    mc('De p → q e q → r, conclui-se:', ['r → p', 'p → r', 'p ∧ r', 'q'], 1, 'Silogismo hipotético.'),
    mc('Para provar ¬p, supõe-se p e deriva-se:', ['p', 'Uma contradição', 'q', 'Nada'], 1, 'Absurdo.'),
    mc('Um sistema que só prova consequências é:', ['Completo', 'Correto', 'Inconsistente', 'Decidível'], 1, 'Correção.'),
    mc('De p, conclui-se p ∨ q por:', ['Adição', 'Simplificação', 'Modus tollens', 'Conjunção'], 0, 'Regra.'),
    disc('Prove três argumentos por dedução natural, justificando cada linha.', ['Prova 1', 'Prova 2', 'Prova 3', 'Justificativas']),
  ],
  resumo: ['MP, MT, SH, SD, conjunção, simplificação, adição.', 'Linhas justificadas.', 'Prova condicional.', 'Redução ao absurdo.', 'Correção e completude.'],
  referencias: [
    { texto: 'Cezar A. Mortari, Introdução à lógica (2001).' },
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
    { texto: 'Aristóteles, Primeiros analíticos.', livro: 'aristoteles-analiticos' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as provas', 'Ler a fonte indicada'],
  revisao: [['MT', 'p → q, ¬q ∴ ¬p.'], ['PC', 'Supor p.'], ['Absurdo', 'Contradição.']],
  avancado: {
    texto: `<h3>Árvores de refutação</h3>
<p>No método das árvores (tableaux), para testar um argumento, supõem-se as premissas verdadeiras e a conclusão falsa, e decompõem-se as fórmulas em ramos ${tag('fato')}. Se todos os ramos se fecham em contradição, o argumento é válido; um ramo aberto fornece um contraexemplo ${tag('fato')}. O método foi desenvolvido por Evert Beth e Raymond Smullyan ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Cezar A. Mortari, Introdução à lógica (2001), capítulo sobre tablôs.' }],
    exercicios: [
      mc('Nas árvores, supõe-se a conclusão:', ['Verdadeira', 'Falsa', 'Indeterminada', 'Nada'], 1, 'Refutação.'),
      mc('Todos os ramos fechados indicam argumento:', ['Válido', 'Inválido', 'Contingente', 'Indutivo'], 0, 'Método.'),
      mc('Um ramo aberto fornece um:', ['Contraexemplo', 'Teorema', 'Axioma', 'Silogismo'], 0, 'Invalidade.'),
      disc('Teste a afirmação do consequente por árvore de refutação.', ['Montagem', 'Decomposição', 'Ramos', 'Conclusão'])],
  },
}),

avaliacao('lf1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre validade, formalização, tabelas-verdade e dedução natural, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça tabelas e provas.</li><li>Revise os casos de "só se" e "a menos que".</li></ul>`,
[
  disc('Formalize o argumento "Se a Igreja está aberta, o sacristão chegou; o sacristão só chega se o padre avisar; o padre não avisou; logo, a Igreja não está aberta", teste-o por tabela-verdade e prove-o por dedução natural.', ['Formalização', 'Tabela', 'Prova', 'Conclusão']),
  disc('Explique a diferença entre validade e verdade com quatro exemplos (combinações de validade e verdade das premissas) e relacione com a definição de lógica de Tomás de Aquino.', ['Exemplos', 'Distinção', 'Tomás', 'Clareza']),
]),
];
