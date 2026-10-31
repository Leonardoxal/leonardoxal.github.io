// Matemática I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Matemática).
// O que é a matemática; números e conceitos básicos; demonstração direta e por absurdo; indução e resolução de problemas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ma1-1', titulo: 'O que é a matemática: quantidade, forma e demonstração', duracao: '150 min',
  aprendera: ['Definir o objeto da matemática', 'Distinguir quantidade discreta e contínua', 'Distinguir definição, axioma, teorema e conjectura', 'Explicar o que é uma demonstração'],
  prereq: ['Lógica (módulo M4)'],
  explicacao: `
<h3>O problema</h3>
<p>Contamos, medimos e calculamos todos os dias. Mas o que estuda, afinal, a matemática, e por que seus resultados parecem tão certos?</p>
<h3>Quantidade e forma</h3>
<p>Na tradição aristotélica, a matemática estuda a quantidade abstraída da matéria sensível ${tag('doutrina')}. A quantidade é discreta (o número, objeto da aritmética) ou contínua (a grandeza, objeto da geometria) ${tag('fato')}. O quadrívio medieval somava aritmética, geometria, música e astronomia ${tag('fato')}. Hoje se diz frequentemente que a matemática estuda estruturas e padrões ${tag('interpretacao')}.</p>
<h3>Definição, axioma, teorema</h3>
<p>A definição fixa o sentido de um termo; o axioma (ou postulado) é aceito sem demonstração como ponto de partida; o teorema é demonstrado a partir de definições, axiomas e teoremas anteriores ${tag('fato')}. A conjectura é uma afirmação que se supõe verdadeira, mas ainda não foi demonstrada ${tag('fato')}.</p>
<h3>Demonstração</h3>
<p>A demonstração é uma cadeia de inferências válidas que leva dos pontos de partida ao teorema ${tag('fato')}. Por isso um teorema demonstrado não depende de experimentos: vale enquanto valem as premissas ${tag('fato')}. Os Elementos de Euclides (c. 300 a.C.) são o modelo clássico desse método ${tag('fato')}.</p>
<h3>Cálculo</h3>
<p>Calcular é aplicar regras para obter um resultado; demonstrar é mostrar por que o resultado vale sempre ${tag('interpretacao')}. Ambos são parte da matemática, mas a demonstração é o que lhe dá a certeza característica ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Quantidade discreta', 'Quantidade formada por unidades separadas: o número.'],
    ['Quantidade contínua', 'Grandeza divisível indefinidamente: comprimento, área, tempo.'],
    ['Axioma', 'Proposição aceita sem demonstração como ponto de partida.'],
    ['Teorema', 'Proposição demonstrada.'],
    ['Conjectura', 'Proposição suposta verdadeira, ainda não demonstrada.'],
  ],
  exemplos: `<p><strong>Conjectura de Goldbach:</strong> "todo número par maior que 2 é soma de dois primos" (4 = 2 + 2, 10 = 3 + 7, 28 = 11 + 17). Foi verificada por computador para números enormes, mas continua conjectura: nenhuma verificação de casos substitui uma demonstração para todos os números.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Olimpíada Internacional de Matemática reúne estudantes desde 1959 ${tag('fato')}. <strong>No Brasil:</strong> a Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP), criada em 2005, envolve milhões de estudantes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a matemática alcança certeza', tag: 'argumento',
    premissas: ['Um teorema é obtido por inferências válidas a partir de definições e axiomas.', 'A inferência válida conserva a verdade das premissas.', 'Logo, se os axiomas são verdadeiros, o teorema também é, sem depender de novos experimentos.'],
    conclusao: 'Logo, a demonstração dá à matemática uma certeza própria.',
    nota: 'A certeza é condicional aos axiomas; que axiomas aceitar é questão discutida na filosofia da matemática (etapa de escolas).',
  },
  objecoes: [
    { objecao: 'A matemática é só invenção humana, sem relação com a realidade.', tag: 'debate',
      resposta: 'Há quem defenda que a matemática é construção humana; outros, que descobre estruturas reais. Mesmo quem a vê como construção reconhece que ela se aplica à natureza de modo surpreendente. Na tradição aristotélica, ela se funda na quantidade real dos corpos, abstraída pela inteligência.' },
  ],
  aplicacao: `<p>Classifique dez enunciados (por exemplo: "um triângulo é um polígono de três lados"; "por dois pontos passa uma reta"; "a soma dos ângulos de um triângulo é 180°"; "há infinitos primos gêmeos") como definição, axioma, teorema ou conjectura, justificando.</p>`,
  fonte: {
    obra: 'Euclides, Elementos, livro I: definições, postulados e noções comuns', link: null,
    orientacao: `<p>Observe a ordem: primeiro definições, depois postulados e noções comuns, só então as proposições demonstradas.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre quantidade discreta e contínua?', r: 'A discreta é formada por unidades (número); a contínua é divisível indefinidamente (grandeza).' },
    { p: 'O que é um teorema?', r: 'Proposição demonstrada a partir de definições, axiomas e teoremas anteriores.' },
    { p: 'Por que verificar muitos casos não basta?', r: 'Porque a demonstração precisa valer para todos os casos, inclusive os não verificados.' },
  ],
  exercicios: [
    mc('A conjectura de Goldbach é:', ['Um teorema', 'Uma conjectura', 'Um axioma', 'Uma definição'], 1, 'Não demonstrada.'),
    mc('O objeto da aritmética é a quantidade:', ['Contínua', 'Discreta', 'Imaginária', 'Física'], 1, 'Número.'),
    mc('O quadrívio incluía:', ['Gramática e retórica', 'Aritmética, geometria, música e astronomia', 'Física e química', 'Lógica e ética'], 1, 'Quatro artes.'),
    mc('Um axioma é:', ['Demonstrado', 'Aceito sem demonstração', 'Sempre falso', 'Uma conjectura'], 1, 'Ponto de partida.'),
    mc('A OBMEP foi criada em:', ['1959', '1979', '2005', '2014'], 2, 'Brasil.'),
    disc('Classifique os dez enunciados da aplicação, justificando cada um.', ['Classificação', 'Justificativa', 'Exemplos', 'Clareza']),
  ],
  resumo: ['Matemática: quantidade e estrutura.', 'Discreta e contínua.', 'Definição, axioma, teorema, conjectura.', 'Demonstração dá certeza.', 'Euclides como modelo.'],
  referencias: [
    { texto: 'Euclides, Elementos (c. 300 a.C.).' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
    { texto: 'Boécio, A instituição aritmética.', livro: 'boecio-quadrivio' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação', 'Ler a fonte indicada'],
  revisao: [['Discreta', 'Número.'], ['Contínua', 'Grandeza.'], ['Teorema', 'Demonstrado.']],
  avancado: {
    texto: `<h3>Abstração matemática em Aristóteles e Tomás</h3>
<p>Aristóteles distingue a física, que considera as coisas com sua matéria sensível, da matemática, que considera a quantidade separada pela mente dessa matéria, embora não exista separada na realidade ${tag('fato')}. Santo Tomás, no Comentário ao De Trinitate de Boécio (q. 5), retoma essa divisão em três graus de abstração: física, matemática e metafísica ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Comentário ao De Trinitate de Boécio, q. 5.' }],
    exercicios: [
      mc('Para Aristóteles, a matemática considera a quantidade:', ['Com a matéria sensível', 'Separada pela mente da matéria sensível', 'Como substância separada real', 'Como ilusão'], 1, 'Abstração.'),
      mc('Os três graus de abstração são:', ['Física, matemática, metafísica', 'Lógica, ética, política', 'Aritmética, geometria, música', 'Nenhum'], 0, 'Tomás.'),
      mc('O texto de Tomás é o comentário ao:', ['De Trinitate de Boécio', 'Timeu', 'Mênon', 'Elementos'], 0, 'q. 5.'),
      disc('Explique por que, para Aristóteles, os objetos matemáticos não existem separados mas também não são ficções.', ['Abstração', 'Fundamento real', 'Separação mental', 'Conclusão'])],
  },
}),

aula({
  id: 'ma1-2', titulo: 'Números, variáveis, equações e funções', duracao: '150 min',
  aprendera: ['Distinguir naturais, inteiros, racionais e reais', 'Usar variáveis e expressões', 'Resolver equações de primeiro e segundo grau', 'Definir função e ler seu gráfico'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quais são os números com que trabalhamos, e que linguagem usamos para falar deles em geral?</p>
<h3>Conjuntos numéricos</h3>
<p>ℕ = {0, 1, 2, ...} (naturais); ℤ acrescenta os negativos (inteiros); ℚ são as frações a/b com b ≠ 0 (racionais); ℝ acrescenta os irracionais, como √2 e π (reais) ${tag('fato')}. Cada ampliação permite operações antes impossíveis: subtrair sempre (ℤ), dividir por número não nulo (ℚ), medir toda grandeza (ℝ) ${tag('fato')}. Há convenções diferentes sobre incluir 0 em ℕ ${tag('fato')}.</p>
<h3>Variáveis e equações</h3>
<p>Uma variável (x, y) representa um número qualquer de um conjunto ${tag('fato')}. Uma equação afirma a igualdade de duas expressões; resolvê-la é achar os valores que a tornam verdadeira ${tag('fato')}. A equação ax² + bx + c = 0 (a ≠ 0) tem raízes x = (−b ± √Δ)/2a, com Δ = b² − 4ac ${tag('fato')}. No Brasil essa fórmula é chamada "de Bhaskara", denominação praticamente restrita ao país ${tag('fato')}.</p>
<h3>Funções</h3>
<p>Uma função f: A → B associa a cada elemento de A exatamente um elemento de B ${tag('fato')}. Exemplos: f(x) = 2x + 1 (afim, gráfico reta); g(x) = x² (quadrática, gráfico parábola) ${tag('fato')}.</p>
<h3>Operações</h3>
<p>Adição e multiplicação têm propriedades comutativa, associativa e distributiva, que justificam as manipulações algébricas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Número racional', 'Número da forma a/b, com a e b inteiros e b ≠ 0.'],
    ['Número irracional', 'Número real que não é racional, como √2.'],
    ['Variável', 'Símbolo que representa um elemento qualquer de um conjunto.'],
    ['Equação', 'Igualdade entre expressões com incógnitas.'],
    ['Função', 'Regra que associa a cada elemento do domínio exatamente uma imagem.'],
  ],
  exemplos: `<p><strong>Equação do segundo grau:</strong> x² − 5x + 6 = 0. Δ = 25 − 24 = 1; x = (5 ± 1)/2, ou seja, x = 3 ou x = 2. Verificação: 9 − 15 + 6 = 0 e 4 − 10 + 6 = 0. Verificar a solução é parte do método.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra "álgebra" vem do título de um tratado de al-Khwarizmi (século IX) ${tag('fato')}. <strong>No Brasil:</strong> as equações do segundo grau fazem parte do currículo do ensino fundamental, conforme a BNCC ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ampliar os conjuntos numéricos', tag: 'argumento',
    premissas: ['Em ℕ, 3 − 5 não tem resposta; em ℤ, 1 ÷ 3 não tem resposta; em ℚ, a diagonal do quadrado de lado 1 não tem medida.', 'Cada ampliação resolve uma dessas impossibilidades conservando as propriedades das operações.', 'A matemática busca operar e medir sem lacunas.'],
    conclusao: 'Logo, as ampliações de ℕ a ℝ respondem a necessidades internas da própria matemática.',
    nota: 'A ampliação seguinte, os complexos, resolve x² + 1 = 0.',
  },
  objecoes: [
    { objecao: 'Números negativos não existem, pois não se pode ter "menos três maçãs".', tag: 'debate',
      resposta: 'Por séculos houve resistência aos negativos. Mas eles representam bem dívidas, temperaturas abaixo de zero e deslocamentos em sentido oposto. Sua legitimidade vem da coerência das regras e da utilidade, não de contar objetos.' },
  ],
  aplicacao: `<p>Resolva uma lista com cinco equações do primeiro grau e cinco do segundo, verificando as soluções, e esboce os gráficos de f(x) = 2x + 1 e g(x) = x² − 4.</p>`,
  fonte: {
    obra: 'Richard Courant e Herbert Robbins, O que é matemática?, capítulo I (os números naturais)', link: null,
    orientacao: `<p>Observe como os autores apresentam as leis da aritmética e o papel da notação.</p>`,
  },
  perguntas: [
    { p: 'O que é um número racional?', r: 'Um número da forma a/b, com a e b inteiros e b ≠ 0.' },
    { p: 'Qual a fórmula das raízes de ax² + bx + c = 0?', r: 'x = (−b ± √Δ)/2a, com Δ = b² − 4ac.' },
    { p: 'O que é uma função?', r: 'Regra que associa a cada elemento do domínio exatamente uma imagem.' },
  ],
  exercicios: [
    mc('√2 é:', ['Natural', 'Inteiro', 'Racional', 'Irracional'], 3, 'Não é fração.'),
    mc('As raízes de x² − 5x + 6 = 0 são:', ['1 e 6', '2 e 3', '−2 e −3', '5 e 6'], 1, 'Δ = 1.'),
    mc('O gráfico de f(x) = 2x + 1 é:', ['Uma reta', 'Uma parábola', 'Um círculo', 'Uma hipérbole'], 0, 'Afim.'),
    mc('Se Δ < 0, a equação do segundo grau tem, nos reais:', ['Duas raízes', 'Uma raiz', 'Nenhuma raiz', 'Infinitas'], 2, 'Raiz de negativo.'),
    mc('"Álgebra" vem de um tratado de:', ['Euclides', 'al-Khwarizmi', 'Descartes', 'Bhaskara'], 1, 'Século IX.'),
    disc('Resolva a lista e esboce os dois gráficos.', ['Primeiro grau', 'Segundo grau', 'Verificação', 'Gráficos']),
  ],
  resumo: ['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.', 'Variáveis e equações.', 'Fórmula do segundo grau.', 'Função: uma imagem por elemento.', 'Propriedades das operações.'],
  referencias: [
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
    { texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976).' },
    { texto: 'Euclides, Elementos (c. 300 a.C.).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a lista', 'Ler a fonte indicada'],
  revisao: [['ℚ', 'a/b.'], ['Δ', 'b² − 4ac.'], ['Função', 'Uma imagem.']],
  avancado: {
    texto: `<h3>Os números complexos</h3>
<p>Para resolver x² + 1 = 0, introduz-se i com i² = −1 ${tag('fato')}. Os complexos a + bi surgiram no século XVI, com Cardano e Bombelli, ao resolver equações cúbicas ${tag('fato')}. O teorema fundamental da álgebra afirma que todo polinômio não constante com coeficientes complexos tem pelo menos uma raiz complexa ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941), capítulo sobre números complexos.' }],
    exercicios: [
      mc('i² vale:', ['1', '−1', '0', 'i'], 1, 'Definição.'),
      mc('Os complexos surgiram ao resolver equações:', ['Cúbicas', 'Lineares', 'Diferenciais', 'Exponenciais'], 0, 'Cardano.'),
      mc('As raízes de x² + 4 = 0 são:', ['±2', '±2i', '±4i', 'Não há'], 1, '√(−4) = 2i.'),
      disc('Resolva x² + 2x + 5 = 0 nos complexos e verifique.', ['Δ', 'Raízes', 'Verificação', 'Explicação'])],
  },
}),

aula({
  id: 'ma1-3', titulo: 'Demonstrar: prova direta e redução ao absurdo', duracao: '150 min',
  aprendera: ['Escrever uma demonstração direta', 'Demonstrar por redução ao absurdo', 'Demonstrar a irracionalidade de √2', 'Demonstrar que há infinitos primos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como se escreve, na prática, uma demonstração matemática?</p>
<h3>Prova direta</h3>
<p>Parte-se das hipóteses e, por passos justificados, chega-se à tese ${tag('fato')}. Exemplo: "a soma de dois pares é par". Sejam a = 2m e b = 2n; então a + b = 2(m + n), que é par ${tag('fato')}.</p>
<h3>Redução ao absurdo</h3>
<p>Supõe-se a negação da tese e deduz-se uma contradição; logo, a tese é verdadeira ${tag('fato')}. É a regra estudada na lógica formal ${tag('fato')}.</p>
<h3>√2 é irracional</h3>
<p>Suponha √2 = a/b, fração irredutível. Então a² = 2b², logo a² é par e a é par: a = 2k. Daí 4k² = 2b², b² = 2k², e b também é par. Mas então a fração não era irredutível: contradição ${tag('fato')}. A descoberta de grandezas incomensuráveis é atribuída à escola pitagórica ${tag('fato')}.</p>
<h3>Há infinitos primos</h3>
<p>Euclides (Elementos IX, 20) mostrou que os primos são mais numerosos que qualquer quantidade dada ${tag('fato')}. Dada uma lista finita p₁, ..., pₙ, o número N = p₁·...·pₙ + 1 deixa resto 1 na divisão por cada pᵢ; logo, algum fator primo de N está fora da lista ${tag('fato')}.</p>
<h3>Escrever bem</h3>
<p>Uma boa demonstração diz o que supõe, o que quer provar, justifica cada passo e marca o fim ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hipótese', 'O que se supõe no enunciado.'],
    ['Tese', 'O que se quer demonstrar.'],
    ['Prova direta', 'Das hipóteses à tese por passos justificados.'],
    ['Redução ao absurdo', 'Supor a negação da tese e chegar a contradição.'],
    ['Número primo', 'Natural maior que 1 cujos únicos divisores positivos são 1 e ele mesmo.'],
  ],
  exemplos: `<p><strong>Um erro comum:</strong> "provar" que todo n² + n + 41 é primo testando n = 0, 1, ..., 39 (todos dão primos). Para n = 40, obtém-se 40² + 40 + 41 = 41², que não é primo. Casos não substituem demonstração.</p>`,
  contexto: `<p><strong>No mundo:</strong> os maiores primos conhecidos são primos de Mersenne (da forma 2ⁿ − 1), encontrados por computação distribuída ${tag('fato')}. <strong>No Brasil:</strong> a Sociedade Brasileira de Matemática (SBM) publica material de apoio sobre demonstração para professores ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a redução ao absurdo é legítima', tag: 'argumento',
    premissas: ['Se a negação da tese implica uma contradição, a negação não pode ser verdadeira.', 'Pelo princípio de não contradição, contradições não são verdadeiras.', 'Pelo terceiro excluído, se a negação da tese é falsa, a tese é verdadeira.'],
    conclusao: 'Logo, a redução ao absurdo prova a tese na lógica clássica.',
    nota: 'Os intuicionistas aceitam a redução ao absurdo para provar negações, mas não para provar existência sem construção.',
  },
  objecoes: [
    { objecao: 'Uma prova por absurdo não explica por que a tese é verdadeira.', tag: 'debate',
      resposta: 'É uma observação antiga: provas diretas costumam iluminar mais. Mas a prova por absurdo é correta, e muitas vezes é o único caminho conhecido. Os matemáticos valorizam ter as duas quando possível.' },
  ],
  aplicacao: `<p>Demonstre: (1) o produto de dois ímpares é ímpar (direta); (2) √3 é irracional (absurdo); (3) se n² é par, n é par (contraposição); e reescreva a prova de Euclides com suas palavras.</p>`,
  fonte: {
    obra: 'Euclides, Elementos, livro IX, proposição 20', link: null,
    orientacao: `<p>Compare a formulação de Euclides ("os números primos são mais numerosos que qualquer quantidade proposta") com a versão moderna.</p>`,
  },
  perguntas: [
    { p: 'Como se faz uma redução ao absurdo?', r: 'Supõe-se a negação da tese e deduz-se uma contradição.' },
    { p: 'Por que N = p₁·...·pₙ + 1 não é divisível por nenhum pᵢ?', r: 'Porque deixa resto 1 na divisão por cada um.' },
    { p: 'Qual o passo central da prova de √2?', r: 'Mostrar que a e b seriam ambos pares, contra a irredutibilidade.' },
  ],
  exercicios: [
    mc('A soma de dois pares é:', ['Ímpar', 'Par', 'Primo', 'Depende'], 1, '2(m + n).'),
    mc('A infinitude dos primos está em:', ['Elementos IX, 20', 'Mênon', 'Principia', 'A geometria'], 0, 'Euclides.'),
    mc('n² + n + 41 para n = 40 é:', ['Primo', '41²', 'Par', 'Zero'], 1, 'Contraexemplo.'),
    mc('Na redução ao absurdo supõe-se:', ['A tese', 'A negação da tese', 'Um axioma novo', 'Nada'], 1, 'Método.'),
    mc('A irracionalidade de grandezas é atribuída aos:', ['Pitagóricos', 'Romanos', 'Árabes', 'Modernos'], 0, 'Incomensuráveis.'),
    disc('Faça as quatro demonstrações da aplicação.', ['Direta', 'Absurdo', 'Contraposição', 'Euclides']),
  ],
  resumo: ['Hipótese e tese.', 'Prova direta.', 'Redução ao absurdo.', '√2 irracional.', 'Infinitude dos primos (Euclides).'],
  referencias: [
    { texto: 'Euclides, Elementos (c. 300 a.C.), livro IX.' },
    { texto: 'George Pólya, A arte de resolver problemas (1945).' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as demonstrações', 'Ler a fonte indicada'],
  revisao: [['Absurdo', 'Negação ⇒ contradição.'], ['√2', 'Irracional.'], ['Primos', 'Infinitos.']],
  avancado: {
    texto: `<h3>O teorema fundamental da aritmética</h3>
<p>Todo inteiro maior que 1 se escreve como produto de primos, e essa decomposição é única a menos da ordem dos fatores ${tag('fato')}. A existência se prova por indução; a unicidade usa o lema de Euclides: se um primo divide um produto, divide um dos fatores ${tag('fato')}. A prova de que √2 é irracional pode ser refeita a partir desse teorema, comparando os expoentes de 2 em a² e em 2b² ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Euclides, Elementos, livro VII (lema de Euclides).' }],
    exercicios: [
      mc('360 decompõe-se como:', ['2³·3²·5', '2²·3³·5', '2·3·5·12', '6²·10'], 0, '8·9·5.'),
      mc('O lema de Euclides diz que um primo que divide um produto:', ['Divide um dos fatores', 'Divide ambos sempre', 'Não divide nenhum', 'É 2'], 0, 'Lema.'),
      mc('Em a² o expoente de 2 é:', ['Par', 'Ímpar', 'Sempre 1', 'Zero sempre'], 0, 'Dobro.'),
      disc('Demonstre a irracionalidade de √2 usando a unicidade da fatoração.', ['Expoentes', 'Paridade', 'Contradição', 'Conclusão'])],
  },
}),

aula({
  id: 'ma1-4', titulo: 'Indução matemática e a arte de resolver problemas', duracao: '150 min',
  aprendera: ['Demonstrar por indução matemática', 'Aplicar as quatro fases de Pólya', 'Usar estratégias de resolução', 'Reconhecer o papel da verificação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como provar algo para todos os naturais, que são infinitos? E como atacar um problema novo quando não se sabe por onde começar?</p>
<h3>Indução matemática</h3>
<p>Para provar P(n) para todo n ≥ n₀: (1) base: provar P(n₀); (2) passo: supondo P(k) (hipótese de indução), provar P(k + 1) ${tag('fato')}. É como uma fila de dominós: o primeiro cai, e cada um derruba o seguinte ${tag('interpretacao')}. Pascal usou um raciocínio desse tipo no Tratado do triângulo aritmético (1654) ${tag('fato')}.</p>
<h3>Exemplo</h3>
<p>1 + 2 + ... + n = n(n + 1)/2. Base: n = 1, 1 = 1·2/2. Passo: se vale para k, então 1 + ... + k + (k + 1) = k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2 ${tag('fato')}.</p>
<h3>Pólya</h3>
<p>George Pólya, em A arte de resolver problemas (1945), propôs quatro fases: compreender o problema, estabelecer um plano, executar o plano e fazer o retrospecto ${tag('fato')}. Estratégias: resolver um caso particular, procurar um problema semelhante, desenhar uma figura, trabalhar de trás para frente, generalizar ${tag('fato')}.</p>
<h3>Retrospecto</h3>
<p>Verificar o resultado, procurar outro caminho e perguntar se o método serve para outros problemas transforma um exercício resolvido em aprendizagem ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Base da indução', 'Prova do primeiro caso.'],
    ['Passo indutivo', 'Prova de que o caso k implica o caso k + 1.'],
    ['Hipótese de indução', 'Suposição de que P(k) vale.'],
    ['Heurística', 'Estratégia para descobrir soluções.'],
    ['Retrospecto', 'Revisão crítica da solução obtida.'],
  ],
  exemplos: `<p><strong>Gauss e a soma:</strong> conta-se que o jovem Gauss somou 1 a 100 agrupando 1 + 100, 2 + 99, ..., 50 + 51: cinquenta pares de 101, total 5050. A história é anedótica, mas a ideia (emparelhar termos) é exatamente a fórmula n(n + 1)/2, que a indução demonstra para todo n.</p>`,
  contexto: `<p><strong>No mundo:</strong> o livro de Pólya foi traduzido para dezenas de línguas e influenciou o ensino de matemática ${tag('fato')}. <strong>No Brasil:</strong> o livro foi publicado em português pela editora Interciência ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a indução prova para infinitos casos', tag: 'argumento',
    premissas: ['A base garante P(n₀).', 'O passo garante que, de cada caso, segue o seguinte.', 'Todo natural maior que n₀ é alcançado a partir de n₀ por sucessivos acréscimos de 1.'],
    conclusao: 'Logo, P(n) vale para todo n ≥ n₀.',
    nota: 'Nos fundamentos, o princípio de indução é um dos axiomas de Peano para os naturais.',
  },
  objecoes: [
    { objecao: 'A indução matemática é como a indução das ciências: só dá probabilidade.', tag: 'argumento',
      resposta: 'Não. A indução das ciências generaliza a partir de casos observados e pode falhar. A indução matemática é dedutiva: base e passo são demonstrados, e a conclusão é certa. Só o nome é parecido.' },
  ],
  aplicacao: `<p>Demonstre por indução: 1 + 3 + 5 + ... + (2n − 1) = n²; 2ⁿ ≥ n + 1 para n ≥ 0. Depois resolva dois problemas abertos registrando explicitamente as quatro fases de Pólya.</p>`,
  fonte: {
    obra: 'George Pólya, A arte de resolver problemas (1945), primeira parte', link: null,
    orientacao: `<p>Observe a lista de perguntas que Pólya propõe para cada fase.</p>`,
  },
  perguntas: [
    { p: 'Quais as duas partes de uma prova por indução?', r: 'Base e passo indutivo.' },
    { p: 'Quais as quatro fases de Pólya?', r: 'Compreender, planejar, executar e fazer o retrospecto.' },
    { p: 'A indução matemática dá certeza?', r: 'Sim: é dedutiva, diferente da indução das ciências.' },
  ],
  exercicios: [
    mc('1 + 2 + ... + 100 vale:', ['5000', '5050', '10100', '4950'], 1, 'n(n+1)/2.'),
    mc('No passo indutivo supõe-se:', ['P(k)', 'P(k + 1)', 'A tese para todo n', 'Nada'], 0, 'Hipótese de indução.'),
    mc('1 + 3 + 5 + 7 vale:', ['16', '15', '12', '9'], 0, 'n².'),
    mc('A primeira fase de Pólya é:', ['Compreender o problema', 'Executar', 'Retrospecto', 'Calcular'], 0, 'Ordem.'),
    mc('A indução matemática é:', ['Dedutiva', 'Probabilística', 'Experimental', 'Retórica'], 0, 'Certeza.'),
    disc('Faça as duas induções e os dois problemas com as fases de Pólya.', ['Induções', 'Fases', 'Estratégias', 'Retrospecto']),
  ],
  resumo: ['Base e passo.', 'Hipótese de indução.', 'Soma 1..n = n(n+1)/2.', 'Pólya: quatro fases.', 'Retrospecto.'],
  referencias: [
    { texto: 'George Pólya, A arte de resolver problemas (1945).' },
    { texto: 'Blaise Pascal, Tratado do triângulo aritmético (1654).', livro: 'pascal-triangulo' },
    { texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar induções e problemas', 'Ler a fonte indicada'],
  revisao: [['Base', 'Primeiro caso.'], ['Passo', 'k ⇒ k + 1.'], ['Pólya', 'Quatro fases.']],
  avancado: {
    texto: `<h3>O triângulo de Pascal</h3>
<p>No triângulo aritmético, cada número é a soma dos dois acima dele; a linha n traz os coeficientes de (a + b)ⁿ ${tag('fato')}. O triângulo era conhecido antes de Pascal, por exemplo na China e no mundo islâmico, mas o tratado de Pascal estudou sistematicamente suas propriedades ${tag('fato')}. A soma da linha n é 2ⁿ, o que se prova por indução ou contando subconjuntos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Blaise Pascal, Tratado do triângulo aritmético (1654).', livro: 'pascal-triangulo' }],
    exercicios: [
      mc('A linha 4 do triângulo é:', ['1 4 6 4 1', '1 3 3 1', '1 5 10 10 5 1', '1 4 4 1'], 0, 'Coeficientes.'),
      mc('A soma da linha n é:', ['n²', '2ⁿ', 'n!', 'n'], 1, 'Subconjuntos.'),
      mc('(a + b)² tem coeficientes:', ['1 2 1', '1 1', '1 3 3 1', '2 2'], 0, 'Linha 2.'),
      disc('Demonstre por indução que a soma da linha n do triângulo de Pascal é 2ⁿ.', ['Base', 'Passo', 'Regra da soma', 'Conclusão'])],
  },
}),

avaliacao('ma1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o objeto da matemática, os números, as equações e os métodos de demonstração, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça a prova de √2 e a de Euclides.</li><li>Refaça uma indução.</li></ul>`,
[
  disc('Demonstre que √5 é irracional e que 1² + 2² + ... + n² = n(n + 1)(2n + 1)/6, indicando o método usado em cada caso.', ['Absurdo', 'Indução', 'Justificação', 'Clareza']),
  disc('Explique a diferença entre definição, axioma, teorema e conjectura, e por que a demonstração dá à matemática uma certeza que a verificação de casos não dá.', ['Distinções', 'Exemplos', 'Demonstração', 'Síntese']),
]),
];
