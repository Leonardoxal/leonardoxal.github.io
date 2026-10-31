// Matemática IV — estudos avançados (etapa 8 do percurso de Matemática).
// Álgebra e estruturas; geometria euclidiana e não euclidianas; funções, limites e cálculo; probabilidade.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ma4-1', titulo: 'Álgebra: sistemas, polinômios e estruturas', duracao: '150 min',
  aprendera: ['Resolver sistemas lineares', 'Operar com polinômios', 'Definir grupo e reconhecer exemplos', 'Situar Abel e Galois'],
  prereq: ['Matemática III (módulo MA3)'],
  explicacao: `
<h3>O problema</h3>
<p>A álgebra começou resolvendo equações. Como chegou a estudar estruturas abstratas, como os grupos?</p>
<h3>Sistemas lineares</h3>
<p>Um sistema como x + y = 10, x − y = 2 se resolve por adição (2x = 12, x = 6, y = 4) ou por substituição ${tag('fato')}. Um sistema linear pode ter uma solução, nenhuma ou infinitas ${tag('fato')}.</p>
<h3>Polinômios</h3>
<p>Polinômios se somam, multiplicam e dividem ${tag('fato')}. Se r é raiz de p(x), então p(x) é divisível por (x − r) ${tag('fato')}. Há fórmulas por radicais para as equações de grau 2, 3 e 4; as de grau 3 e 4 foram publicadas por Cardano na Ars magna (1545) ${tag('fato')}.</p>
<h3>Abel e Galois</h3>
<p>Niels Abel mostrou (1824) que não há fórmula geral por radicais para a equação de grau 5 ${tag('fato')}. Évariste Galois, morto em 1832 aos 20 anos, relacionou a solubilidade de uma equação a um grupo de permutações de suas raízes ${tag('fato')}.</p>
<h3>Grupos</h3>
<p>Um grupo é um conjunto com uma operação associativa, um elemento neutro e inversos para todos os elementos ${tag('fato')}. Exemplos: os inteiros com a adição; as rotações de um quadrado; as simetrias de uma figura ${tag('fato')}. A álgebra moderna estuda estruturas (grupos, anéis, corpos) que aparecem em muitos contextos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Sistema linear', 'Conjunto de equações de primeiro grau com várias incógnitas.'],
    ['Polinômio', 'Expressão como aₙxⁿ + ... + a₁x + a₀.'],
    ['Resolução por radicais', 'Fórmula com operações básicas e raízes.'],
    ['Grupo', 'Conjunto com operação associativa, neutro e inversos.'],
    ['Simetria', 'Transformação que deixa uma figura invariante.'],
  ],
  exemplos: `<p><strong>O grupo das rotações do quadrado:</strong> rotações de 0°, 90°, 180° e 270°. Compor duas rotações dá outra rotação do conjunto; 0° é o neutro; o inverso de 90° é 270°. São quatro elementos com uma operação que satisfaz as leis de grupo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria dos grupos é usada em cristalografia e na física de partículas ${tag('fato')}. <strong>No Brasil:</strong> sistemas lineares aparecem no ensino médio e em problemas de engenharia e economia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que abstrair estruturas', tag: 'argumento',
    premissas: ['Os inteiros com a adição, as rotações do quadrado e as permutações obedecem às mesmas leis.', 'Um teorema provado só com essas leis vale para todos os exemplos.', 'Logo, estudar a estrutura economiza trabalho e revela unidade.'],
    conclusao: 'Logo, a abstração algébrica é um ganho de conhecimento, não só de generalidade.',
    nota: 'É o espírito da álgebra moderna, consolidado no século XX.',
  },
  objecoes: [
    { objecao: 'A álgebra abstrata é um jogo sem relação com problemas reais.', tag: 'debate',
      resposta: 'A teoria de Galois nasceu de um problema concreto (resolver equações), e os grupos descrevem simetrias de cristais e moléculas. A abstração vem de problemas e volta a eles.' },
  ],
  aplicacao: `<p>Resolva três sistemas lineares (um com solução única, um sem solução, um com infinitas) e verifique se as rotações de um triângulo equilátero formam um grupo, escrevendo a tabela da operação.</p>`,
  fonte: {
    obra: 'Richard Courant e Herbert Robbins, O que é matemática?, capítulo sobre construções e números algébricos', link: null,
    orientacao: `<p>Observe como a pergunta "o que se pode construir?" se torna uma pergunta algébrica.</p>`,
  },
  perguntas: [
    { p: 'Quantas soluções pode ter um sistema linear?', r: 'Uma, nenhuma ou infinitas.' },
    { p: 'O que Abel provou em 1824?', r: 'Que não há fórmula geral por radicais para a equação de grau 5.' },
    { p: 'O que é um grupo?', r: 'Conjunto com operação associativa, elemento neutro e inversos.' },
  ],
  exercicios: [
    mc('x + y = 10 e x − y = 2 dão:', ['x = 6, y = 4', 'x = 4, y = 6', 'x = 5, y = 5', 'x = 8, y = 2'], 0, 'Adição.'),
    mc('Se 2 é raiz de p(x), p(x) é divisível por:', ['x + 2', 'x − 2', 'x²', '2x'], 1, 'Fator.'),
    mc('A Ars magna é de:', ['1545', '1637', '1824', '1832'], 0, 'Cardano.'),
    mc('O inverso da rotação de 90° no quadrado é:', ['90°', '180°', '270°', '0°'], 2, '90 + 270 = 360.'),
    mc('Os inteiros com a multiplicação:', ['Formam grupo', 'Não formam grupo (faltam inversos)', 'Não têm neutro', 'Não são associativos'], 1, '2 não tem inverso inteiro.'),
    disc('Resolva os três sistemas e verifique o grupo do triângulo.', ['Sistemas', 'Classificação', 'Tabela', 'Leis de grupo']),
  ],
  resumo: ['Sistemas: 1, 0 ou ∞ soluções.', 'Polinômios e raízes.', 'Cardano (1545).', 'Abel (1824) e Galois.', 'Grupos e simetrias.'],
  referencias: [
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
    { texto: 'Carl B. Boyer, História da matemática (1968).' },
    { texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a lista', 'Ler a fonte indicada'],
  revisao: [['Abel', 'Grau 5.'], ['Galois', 'Grupos.'], ['Grupo', 'Neutro e inversos.']],
  avancado: {
    texto: `<h3>Os problemas clássicos de construção</h3>
<p>Os gregos não conseguiram, com régua e compasso, duplicar o cubo, trissectar um ângulo qualquer nem quadrar o círculo ${tag('fato')}. No século XIX provou-se que essas construções são impossíveis: as duas primeiras por razões algébricas (Wantzel, 1837), a terceira porque π é transcendente (Lindemann, 1882) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941), capítulo III.' }],
    exercicios: [
      mc('A impossibilidade de quadrar o círculo decorre de π ser:', ['Transcendente', 'Racional', 'Inteiro', 'Primo'], 0, 'Lindemann.'),
      mc('Wantzel provou a impossibilidade em:', ['1837', '1882', '1545', '1900'], 0, 'Duplicação e trissecção.'),
      mc('Duplicar o cubo exige construir:', ['∛2', '√2', 'π', '2'], 0, 'Lado.'),
      disc('Explique por que "impossível" em matemática é um resultado demonstrado, não uma falta de engenho.', ['Problemas', 'Provas', 'Sentido de impossível', 'Conclusão'])],
  },
}),

aula({
  id: 'ma4-2', titulo: 'Geometria: Euclides, trigonometria e geometrias não euclidianas', duracao: '150 min',
  aprendera: ['Demonstrar o teorema de Pitágoras', 'Usar seno, cosseno e tangente', 'Explicar a soma dos ângulos do triângulo', 'Comparar geometrias euclidiana, esférica e hiperbólica'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A geometria de Euclides é a única possível? E como medir o que não podemos alcançar?</p>
<h3>Pitágoras</h3>
<p>Num triângulo retângulo, a² + b² = c² ${tag('fato')}. Uma prova: num quadrado de lado a + b, quatro triângulos de catetos a, b deixam livre um quadrado de lado c; logo (a + b)² = 4·ab/2 + c², e daí a² + b² = c² ${tag('fato')}.</p>
<h3>Soma dos ângulos</h3>
<p>Na geometria euclidiana, os ângulos internos de um triângulo somam 180°; a prova usa o quinto postulado (paralelas) ${tag('fato')}.</p>
<h3>Trigonometria</h3>
<p>No triângulo retângulo: sen θ = oposto/hipotenusa, cos θ = adjacente/hipotenusa, tg θ = oposto/adjacente ${tag('fato')}. Eratóstenes (século III a.C.) estimou a circunferência da Terra comparando as sombras em Siena e Alexandria ${tag('fato')}.</p>
<h3>Não euclidianas</h3>
<p>Na geometria esférica (sobre a superfície de uma esfera), os "retas" são grandes círculos, não há paralelas, e os ângulos de um triângulo somam mais de 180° ${tag('fato')}. Na geometria hiperbólica (Lobachevsky, Bolyai), por um ponto passam infinitas paralelas, e a soma é menor que 180° ${tag('fato')}. A relatividade geral de Einstein (1915) descreve o espaço-tempo com geometria curva ${tag('fato')}.</p>`,
  vocabulario: [
    ['Hipotenusa', 'Lado oposto ao ângulo reto.'],
    ['Seno', 'Razão entre cateto oposto e hipotenusa.'],
    ['Geometria esférica', 'Geometria na superfície da esfera, sem paralelas.'],
    ['Geometria hiperbólica', 'Geometria com infinitas paralelas por um ponto.'],
    ['Curvatura', 'Medida de quanto um espaço se afasta do plano euclidiano.'],
  ],
  exemplos: `<p><strong>Um triângulo na Terra:</strong> parta do polo Norte, desça até o Equador, ande um quarto da volta ao longo do Equador e suba de volta ao polo. Os três ângulos são retos: a soma é 270°. Na superfície curva da Terra, a geometria não é euclidiana.</p>`,
  contexto: `<p><strong>No mundo:</strong> o GPS precisa de correções da relatividade para funcionar com precisão ${tag('fato')}. <strong>No Brasil:</strong> a trigonometria é usada em topografia, agrimensura e na demarcação de terras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a geometria euclidiana continua válida', tag: 'argumento',
    premissas: ['A geometria euclidiana é um sistema consistente, se a aritmética o é.', 'Em regiões pequenas, espaços curvos são aproximadamente planos.', 'A engenharia e a vida cotidiana operam nessas escalas.'],
    conclusao: 'Logo, a geometria euclidiana permanece correta como sistema e útil como aproximação.',
    nota: 'Qual geometria descreve o espaço físico em grande escala é questão empírica.',
  },
  objecoes: [
    { objecao: 'Se há várias geometrias, nenhuma é verdadeira.', tag: 'debate',
      resposta: 'Cada geometria é verdadeira de seus modelos: a esférica descreve a superfície da esfera, a euclidiana o plano. Qual descreve o espaço físico é questão para a física. A pluralidade de sistemas não elimina a verdade; exige precisar sobre o que se fala.' },
  ],
  aplicacao: `<p>Demonstre o teorema de Pitágoras pela figura dos quatro triângulos; calcule a altura de uma árvore a 20 m de distância vista sob ângulo de 30° (tg 30° ≈ 0,577); e desenhe um triângulo esférico com soma maior que 180°.</p>`,
  fonte: {
    obra: 'Euclides, Elementos, livro I, proposições 29, 32 e 47', link: null,
    orientacao: `<p>Observe que a proposição 32 (soma dos ângulos) depende da 29, que usa o quinto postulado.</p>`,
  },
  perguntas: [
    { p: 'Qual o enunciado de Pitágoras?', r: 'Num triângulo retângulo, a² + b² = c².' },
    { p: 'Quanto somam os ângulos de um triângulo esférico?', r: 'Mais de 180°.' },
    { p: 'Que postulado a soma de 180° exige?', r: 'O quinto postulado (das paralelas).' },
  ],
  exercicios: [
    mc('Catetos 3 e 4 dão hipotenusa:', ['5', '6', '7', '12'], 0, '9 + 16 = 25.'),
    mc('sen θ =', ['Oposto/hipotenusa', 'Adjacente/hipotenusa', 'Oposto/adjacente', 'Hipotenusa/oposto'], 0, 'Definição.'),
    mc('Na geometria hiperbólica, a soma dos ângulos é:', ['Maior que 180°', 'Menor que 180°', 'Igual a 180°', '360°'], 1, 'Lobachevsky.'),
    mc('Altura da árvore a 20 m sob 30° (tg ≈ 0,577):', ['≈ 11,5 m', '≈ 20 m', '≈ 34,6 m', '≈ 5,8 m'], 0, '20 × 0,577.'),
    mc('Eratóstenes estimou:', ['A circunferência da Terra', 'π', 'A distância à Lua apenas', 'A idade da Terra'], 0, 'Sombras.'),
    disc('Faça a demonstração, o cálculo e o desenho da aplicação.', ['Pitágoras', 'Trigonometria', 'Triângulo esférico', 'Explicações']),
  ],
  resumo: ['Pitágoras demonstrado.', 'Soma 180° usa o quinto postulado.', 'Seno, cosseno, tangente.', 'Esférica: > 180°.', 'Hiperbólica: < 180°.'],
  referencias: [
    { texto: 'Euclides, Elementos, livro I.' },
    { texto: 'David Hilbert, Fundamentos da geometria (1899).' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a aplicação', 'Ler a fonte indicada'],
  revisao: [['a² + b² = c²', 'Pitágoras.'], ['Esférica', '> 180°.'], ['Hiperbólica', '< 180°.']],
  avancado: {
    texto: `<h3>Área e excesso esférico</h3>
<p>Numa esfera de raio R, a área de um triângulo esférico é R² vezes o excesso (a soma dos ângulos, em radianos, menos π) ${tag('fato')}. Assim, quanto maior o triângulo, maior o excesso ${tag('fato')}. No triângulo polo–Equador–Equador do exemplo, o excesso é π/2, e a área é πR²/2, um oitavo da superfície da esfera ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941), capítulo sobre geometria não euclidiana.' }],
    exercicios: [
      mc('A área da esfera é:', ['4πR²', 'πR²', '2πR', 'R³'], 0, 'Fórmula.'),
      mc('O triângulo de três ângulos retos ocupa da esfera:', ['1/8', '1/4', '1/2', '1/16'], 0, 'πR²/2 ÷ 4πR².'),
      mc('Triângulos esféricos muito pequenos têm soma:', ['Próxima de 180°', 'Próxima de 360°', 'Exatamente 270°', 'Zero'], 0, 'Quase planos.'),
      disc('Calcule a área de um triângulo esférico com ângulos de 90°, 90° e 60° numa esfera de raio 1.', ['Excesso', 'Radianos', 'Área', 'Verificação'])],
  },
}),

aula({
  id: 'ma4-3', titulo: 'Funções, limites e cálculo', duracao: '150 min',
  aprendera: ['Entender a noção de limite', 'Calcular derivadas simples', 'Interpretar a integral como área', 'Enunciar o teorema fundamental do cálculo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como medir a velocidade num instante, se a velocidade é distância dividida por tempo e num instante não passa tempo nenhum?</p>
<h3>Limite</h3>
<p>Dizemos que f(x) tende a L quando x tende a a se f(x) fica tão perto de L quanto quisermos, tomando x suficientemente perto de a ${tag('fato')}. Cauchy e Weierstrass tornaram essa ideia rigorosa com ε e δ ${tag('fato')}.</p>
<h3>Derivada</h3>
<p>A derivada f′(a) é o limite de [f(a + h) − f(a)]/h quando h → 0: a taxa instantânea de variação, ou a inclinação da tangente ${tag('fato')}. Para f(x) = x²: [(a + h)² − a²]/h = 2a + h, que tende a 2a ${tag('fato')}. Regra geral: a derivada de xⁿ é nxⁿ⁻¹ ${tag('fato')}.</p>
<h3>Integral</h3>
<p>A integral de f entre a e b é a área sob o gráfico, obtida como limite de somas de retângulos ${tag('fato')}. A área sob y = x² entre 0 e 1 é 1/3, resultado já obtido por Arquimedes para a parábola por outro método ${tag('fato')}.</p>
<h3>Teorema fundamental</h3>
<p>Derivar e integrar são operações inversas: se F′ = f, então a integral de f de a até b é F(b) − F(a) ${tag('fato')}. É o centro do cálculo de Newton e Leibniz ${tag('fato')}.</p>`,
  vocabulario: [
    ['Limite', 'Valor do qual f(x) se aproxima quando x se aproxima de a.'],
    ['Derivada', 'Taxa instantânea de variação.'],
    ['Tangente', 'Reta que toca a curva num ponto com a mesma inclinação.'],
    ['Integral', 'Área sob o gráfico, como limite de somas.'],
    ['Primitiva', 'Função F cuja derivada é f.'],
  ],
  exemplos: `<p><strong>Queda livre:</strong> um corpo cai d(t) = 5t² metros em t segundos (aproximação com g ≈ 10 m/s²). A velocidade é a derivada: v(t) = 10t. Em t = 3 s, v = 30 m/s. A derivada responde à pergunta do problema inicial.</p>`,
  contexto: `<p><strong>No mundo:</strong> o cálculo é a base da física, da engenharia e da economia modernas ${tag('fato')}. <strong>No Brasil:</strong> cálculo diferencial e integral é disciplina básica de praticamente todos os cursos de exatas, e o livro de Elon Lages Lima é referência na análise ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o teorema fundamental é fundamental', tag: 'argumento',
    premissas: ['Calcular áreas por somas infinitas é, em geral, muito difícil.', 'Achar uma primitiva costuma ser bem mais fácil.', 'O teorema fundamental troca o primeiro problema pelo segundo.'],
    conclusao: 'Logo, o teorema fundamental transformou problemas de área, volume e acumulação em cálculos acessíveis.',
    nota: 'Antes dele, cada área exigia um engenho particular, como o de Arquimedes.',
  },
  objecoes: [
    { objecao: 'O cálculo é só uma técnica; não diz nada sobre a natureza.', tag: 'debate',
      resposta: 'O cálculo é técnica, mas sua adequação às leis do movimento (Newton) mostra que a variação contínua tem estrutura matemática. Que isso revele algo da natureza ou apenas do nosso modo de descrevê-la é questão filosófica discutida em MA3.' },
  ],
  aplicacao: `<p>Calcule as derivadas de x³, 5x² + 3x e 7; calcule a área sob y = 2x entre 0 e 3 pela fórmula e pela figura (triângulo); e explique com palavras o teorema fundamental.</p>`,
  fonte: {
    obra: 'Elon Lages Lima, Curso de análise, vol. 1, capítulos sobre limites e derivadas', link: null,
    orientacao: `<p>Observe a definição de limite por ε e δ e compare com a ideia intuitiva.</p>`,
  },
  perguntas: [
    { p: 'O que é a derivada?', r: 'A taxa instantânea de variação, limite do quociente das diferenças.' },
    { p: 'Qual a derivada de xⁿ?', r: 'nxⁿ⁻¹.' },
    { p: 'O que diz o teorema fundamental?', r: 'Que a integral de f de a a b é F(b) − F(a), se F′ = f.' },
  ],
  exercicios: [
    mc('A derivada de x³ é:', ['3x²', 'x²', '3x', 'x⁴/4'], 0, 'nxⁿ⁻¹.'),
    mc('A derivada de uma constante é:', ['0', '1', 'A constante', 'Infinita'], 0, 'Não varia.'),
    mc('A área sob y = x² de 0 a 1 é:', ['1/2', '1/3', '1', '2'], 1, 'x³/3.'),
    mc('Se d(t) = 5t², v(3) =', ['15', '30', '45', '10'], 1, 'v = 10t.'),
    mc('A área sob y = 2x de 0 a 3 é:', ['6', '9', '3', '18'], 1, 'Triângulo 3 × 6 / 2.'),
    disc('Faça os cálculos da aplicação e explique o teorema fundamental.', ['Derivadas', 'Área', 'Duas formas', 'Explicação']),
  ],
  resumo: ['Limite.', 'Derivada: taxa instantânea.', 'xⁿ ↦ nxⁿ⁻¹.', 'Integral: área.', 'Teorema fundamental.'],
  referencias: [
    { texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976).' },
    { texto: 'Isaac Newton, Princípios matemáticos da filosofia natural (1687).' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a aplicação', 'Ler a fonte indicada'],
  revisao: [['f′', 'Taxa.'], ['∫', 'Área.'], ['TFC', 'F(b) − F(a).']],
  avancado: {
    texto: `<h3>O número e</h3>
<p>O número e ≈ 2,718 é o limite de (1 + 1/n)ⁿ quando n cresce ${tag('fato')}. A função eˣ é a única (a menos de constante) igual à própria derivada ${tag('fato')}. Por isso aparece em crescimento populacional, juros compostos contínuos e decaimento radioativo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976), capítulo sobre a função exponencial.' }],
    exercicios: [
      mc('A derivada de eˣ é:', ['eˣ', 'xeˣ⁻¹', '1', 'ln x'], 0, 'Propriedade.'),
      mc('(1 + 1/n)ⁿ tende a:', ['e', '1', '∞', '2'], 0, 'Limite.'),
      mc('e vale aproximadamente:', ['2,718', '3,142', '1,618', '1,414'], 0, 'Euler.'),
      disc('Explique por que juros compostos com capitalização cada vez mais frequente levam ao número e.', ['Juros', 'Limite', 'e', 'Exemplo'])],
  },
}),

aula({
  id: 'ma4-4', titulo: 'Probabilidade: contar, condicionar e decidir', duracao: '150 min',
  aprendera: ['Calcular probabilidades em espaços equiprováveis', 'Usar combinações', 'Calcular probabilidade condicional e aplicar Bayes', 'Conhecer a lei dos grandes números'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como raciocinar com rigor sobre o incerto?</p>
<h3>Definição clássica</h3>
<p>Num espaço com casos igualmente prováveis, P(A) = casos favoráveis / casos possíveis ${tag('fato')}. Num dado, P(par) = 3/6 = 1/2 ${tag('fato')}.</p>
<h3>Contagem</h3>
<p>Regra do produto: com m escolhas e depois n, há m·n resultados ${tag('fato')}. O número de modos de escolher k entre n, sem ordem, é C(n, k) = n!/(k!(n − k)!), e aparece no triângulo de Pascal ${tag('fato')}.</p>
<h3>Condicional e Bayes</h3>
<p>P(A | B) = P(A ∩ B)/P(B): a probabilidade de A sabendo que B ocorreu ${tag('fato')}. O teorema de Bayes permite inverter condicionais: P(A | B) = P(B | A)·P(A)/P(B) ${tag('fato')}. É essencial para interpretar exames médicos ${tag('fato')}.</p>
<h3>Lei dos grandes números</h3>
<p>Jakob Bernoulli, na Ars conjectandi (1713), mostrou que a frequência relativa de um evento tende à sua probabilidade quando o número de repetições cresce ${tag('fato')}. Isso não significa que resultados passados "compensem" os futuros: a moeda não tem memória ${tag('fato')}.</p>`,
  vocabulario: [
    ['Espaço amostral', 'Conjunto de todos os resultados possíveis.'],
    ['Evento', 'Subconjunto do espaço amostral.'],
    ['Combinação', 'Escolha de k elementos entre n, sem ordem.'],
    ['Probabilidade condicional', 'Probabilidade de A sabendo que B ocorreu.'],
    ['Lei dos grandes números', 'A frequência tende à probabilidade com muitas repetições.'],
  ],
  exemplos: `<p><strong>O exame raro:</strong> uma doença atinge 1 em 1000 pessoas; um exame acerta 99% dos doentes e dá falso positivo em 1% dos sadios. De 100 000 pessoas, 100 doentes (99 positivos) e 99 900 sadios (999 positivos). Entre 1098 positivos, só 99 estão doentes: cerca de 9%. Sem Bayes, muitos diriam 99%.</p>`,
  contexto: `<p><strong>No mundo:</strong> a probabilidade fundamenta seguros, estatística e inteligência artificial ${tag('fato')}. <strong>No Brasil:</strong> a probabilidade de acertar as seis dezenas da Mega-Sena com uma aposta simples é 1 em 50 063 860, que é C(60, 6) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a falácia do jogador é falácia', tag: 'argumento',
    premissas: ['Lançamentos de uma moeda honesta são independentes.', 'Eventos independentes não são afetados por resultados anteriores.', 'Logo, depois de cinco caras, a probabilidade de coroa continua 1/2.'],
    conclusao: 'Logo, esperar "compensação" é erro de raciocínio.',
    nota: 'A lei dos grandes números fala de frequências em longo prazo, não de compensação no curto prazo.',
  },
  objecoes: [
    { objecao: 'A probabilidade é só ignorância nossa; no mundo tudo é determinado.', tag: 'debate',
      resposta: 'Há interpretações diferentes: probabilidade como frequência, como grau de crença racional, como propensão física. Na física quântica há debate sobre indeterminismo real. O cálculo de probabilidades funciona em todas essas leituras, que diferem sobre o que ele significa.' },
  ],
  aplicacao: `<p>Calcule: (1) a probabilidade de soma 7 com dois dados; (2) C(10, 3); (3) o exemplo do exame com prevalência de 1 em 100; e explique por que a Mega-Sena tem C(60, 6) resultados possíveis.</p>`,
  fonte: {
    obra: 'Blaise Pascal, Tratado do triângulo aritmético (1654), uso do triângulo para as partidas', link: null,
    orientacao: `<p>Observe como as combinações do triângulo resolvem a divisão das apostas.</p>`,
  },
  perguntas: [
    { p: 'Qual a definição clássica de probabilidade?', r: 'Casos favoráveis divididos por casos possíveis, se igualmente prováveis.' },
    { p: 'Para que serve o teorema de Bayes?', r: 'Para inverter probabilidades condicionais, como interpretar um exame positivo.' },
    { p: 'O que diz a lei dos grandes números?', r: 'Que a frequência relativa tende à probabilidade com muitas repetições.' },
  ],
  exercicios: [
    mc('P(soma 7) com dois dados:', ['1/6', '1/12', '7/36', '1/36'], 0, '6 de 36.'),
    mc('C(5, 2) =', ['10', '20', '5', '25'], 0, '5·4/2.'),
    mc('Após cinco caras, P(coroa) com moeda honesta:', ['1/2', 'Maior que 1/2', 'Menor que 1/2', '1'], 0, 'Independência.'),
    mc('A Ars conjectandi é de:', ['Pascal', 'Jakob Bernoulli', 'Fermat', 'Laplace'], 1, '1713.'),
    mc('No exemplo do exame raro, P(doente | positivo) ≈', ['99%', '9%', '50%', '1%'], 1, 'Bayes.'),
    disc('Faça os cálculos da aplicação.', ['Dados', 'Combinação', 'Bayes', 'Mega-Sena']),
  ],
  resumo: ['Favoráveis/possíveis.', 'Regra do produto; C(n, k).', 'Condicional.', 'Bayes.', 'Lei dos grandes números (1713).'],
  referencias: [
    { texto: 'Blaise Pascal, Tratado do triângulo aritmético (1654).', livro: 'pascal-triangulo' },
    { texto: 'Jakob Bernoulli, Ars conjectandi (1713).' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver a aplicação', 'Ler a fonte indicada'],
  revisao: [['C(n,k)', 'n!/(k!(n−k)!).'], ['Bayes', 'Inverte.'], ['Jogador', 'Sem memória.']],
  avancado: {
    texto: `<h3>A aposta de Pascal</h3>
<p>Nos Pensamentos, Pascal argumenta que, diante da incerteza sobre Deus, apostar que Ele existe tem expectativa infinitamente maior, pois o ganho possível é infinito e a perda finita ${tag('fato')}. O argumento usa a noção de esperança matemática (probabilidade vezes ganho) ${tag('fato')}. Críticos discutem a escolha entre muitas divindades possíveis e o valor de uma crença "apostada"; Pascal o apresenta a quem já busca e como passo para disposições ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Blaise Pascal, Pensamentos, fragmento "Infinito–nada".' }],
    exercicios: [
      mc('A esperança matemática é:', ['Probabilidade vezes ganho', 'Só a probabilidade', 'Só o ganho', 'A média dos dados'], 0, 'Definição.'),
      mc('Na aposta, o ganho possível é considerado:', ['Infinito', 'Nulo', 'Igual à perda', 'Negativo'], 0, 'Pascal.'),
      mc('Uma crítica clássica à aposta é:', ['A multiplicidade de divindades possíveis', 'Erro de aritmética', 'Que Pascal não sabia probabilidade', 'Nenhuma'], 0, 'Debate.'),
      disc('Reconstrua a aposta de Pascal como cálculo de esperança e discuta uma objeção.', ['Reconstrução', 'Cálculo', 'Objeção', 'Resposta'])],
  },
}),

avaliacao('ma4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas de álgebra, geometria, cálculo e probabilidade, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça um sistema, uma derivada e um cálculo de Bayes.</li><li>Refaça a prova de Pitágoras.</li></ul>`,
[
  disc('Resolva: (a) um sistema linear 2 × 2; (b) a derivada de 4x³ − 2x; (c) a área sob y = x² entre 0 e 2; (d) a probabilidade de tirar dois ases seguidos de um baralho de 52 cartas sem reposição. Justifique cada passo.', ['Álgebra', 'Derivada', 'Integral', 'Probabilidade']),
  disc('Demonstre o teorema de Pitágoras e explique por que a soma dos ângulos de um triângulo depende do quinto postulado, dando exemplos de geometrias não euclidianas.', ['Demonstração', 'Quinto postulado', 'Não euclidianas', 'Clareza']),
]),
];
