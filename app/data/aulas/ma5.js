// Matemática V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Matemática).
// Matemática financeira e cotidiana; modelagem nas ciências; beleza e ordem; investigação de um teorema; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ma5-1', titulo: 'Matemática financeira e cotidiana', duracao: '150 min',
  aprendera: ['Calcular porcentagens e variações', 'Distinguir juros simples e compostos', 'Avaliar parcelamentos e dívidas', 'Ler criticamente números da mídia'],
  prereq: ['Matemática IV (módulo MA4)'],
  explicacao: `
<h3>O problema</h3>
<p>Muitas decisões diárias — comprar a prazo, usar o cartão, poupar — dependem de matemática simples que pouca gente domina. Como não ser enganado?</p>
<h3>Porcentagem</h3>
<p>x% de y é x·y/100 ${tag('fato')}. Um aumento de 10% seguido de desconto de 10% não volta ao valor inicial: 100 → 110 → 99 ${tag('fato')}.</p>
<h3>Juros</h3>
<p>Juros simples: M = C(1 + i·n) ${tag('fato')}. Juros compostos: M = C(1 + i)ⁿ, pois os juros de cada período rendem juros nos seguintes ${tag('fato')}. A 10% ao mês, uma dívida dobra em pouco mais de 7 meses ${tag('fato')}.</p>
<h3>Parcelamento</h3>
<p>Comparar preço à vista e parcelado exige considerar a taxa implícita: "sem juros" pode esconder juros no preço, quando há desconto à vista ${tag('interpretacao')}. O Custo Efetivo Total (CET) reúne juros, tarifas e encargos de uma operação de crédito e deve ser informado ao consumidor ${tag('fato')}.</p>
<h3>Números na mídia</h3>
<p>Distinguir variação absoluta e relativa, pontos percentuais e porcentagem, e média e mediana evita conclusões falsas ${tag('fato')}.</p>
<h3>Usura e justiça</h3>
<p>A tradição moral católica condenou a usura e reflete sobre o justo preço e o crédito ${tag('doutrina')}. A matemática mostra os efeitos dos juros compostos; o juízo sobre o justo é moral ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Porcentagem', 'Razão com denominador 100.'],
    ['Juros compostos', 'Juros calculados sobre o montante acumulado.'],
    ['Montante', 'Capital mais juros.'],
    ['CET', 'Custo Efetivo Total de uma operação de crédito.'],
    ['Ponto percentual', 'Diferença absoluta entre duas porcentagens.'],
  ],
  exemplos: `<p><strong>O cartão de crédito:</strong> uma dívida de R$ 1000 a 12% ao mês, sem pagamentos, vira 1000 × 1,12¹² ≈ R$ 3896 em um ano. A taxa "anual" correspondente não é 144%, mas cerca de 290%. Juros compostos crescem muito mais do que a intuição sugere.</p>`,
  contexto: `<p><strong>No mundo:</strong> a educação financeira é recomendada por organismos internacionais como parte da formação básica ${tag('fato')}. <strong>No Brasil:</strong> a BNCC inclui a educação financeira entre os temas da matemática escolar, e o Banco Central divulga as taxas médias de juros das instituições ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a matemática financeira é exigência de prudência', tag: 'argumento',
    premissas: ['Decisões de crédito afetam o sustento da família por anos.', 'Juros compostos têm efeitos contraintuitivos.', 'A prudência exige conhecer as consequências das próprias escolhas.'],
    conclusao: 'Logo, dominar a matemática financeira básica é parte da prudência na vida econômica.',
    nota: 'A virtude da prudência, na tradição clássica, é a reta razão no agir.',
  },
  objecoes: [
    { objecao: 'Basta confiar no vendedor ou no banco.', tag: 'argumento',
      resposta: 'O vendedor e o banco têm interesses próprios, e a lei exige informar o CET justamente para que o consumidor possa comparar. Confiar sem verificar é renunciar à própria responsabilidade.' },
  ],
  aplicacao: `<p>Escolha uma compra real (eletrodoméstico, celular) com preço à vista e parcelado; calcule a taxa implícita, compare com a poupança e escreva uma recomendação. Depois, analise uma notícia com porcentagens, apontando eventuais confusões.</p>`,
  fonte: {
    obra: 'Banco Central do Brasil, Caderno de Educação Financeira — Gestão de Finanças Pessoais', link: null,
    orientacao: `<p>Leia a parte sobre crédito e juros e confira os exemplos com a fórmula dos juros compostos.</p>`,
  },
  perguntas: [
    { p: 'Por que +10% e −10% não se anulam?', r: 'Porque os 10% incidem sobre bases diferentes.' },
    { p: 'Qual a fórmula dos juros compostos?', r: 'M = C(1 + i)ⁿ.' },
    { p: 'O que é o CET?', r: 'O Custo Efetivo Total, que reúne juros, tarifas e encargos.' },
  ],
  exercicios: [
    mc('100 com +10% e depois −10% dá:', ['100', '99', '101', '90'], 1, 'Bases diferentes.'),
    mc('R$ 1000 a 10% a.m. compostos por 2 meses:', ['1200', '1210', '1100', '1020'], 1, '1000 × 1,21.'),
    mc('De 10% para 12% houve aumento de:', ['2 pontos percentuais', '2%', '12%', '20 pontos'], 0, '(e de 20% relativo).'),
    mc('O CET inclui:', ['Juros, tarifas e encargos', 'Só juros', 'Só tarifas', 'Só o preço'], 0, 'Custo total.'),
    mc('A 10% a.m., uma dívida dobra em cerca de:', ['3 meses', '7 meses', '10 meses', '20 meses'], 1, '1,1⁷ ≈ 1,95.'),
    disc('Faça a análise da compra e da notícia.', ['Taxa implícita', 'Comparação', 'Recomendação', 'Notícia']),
  ],
  resumo: ['Porcentagens e bases.', 'Simples e compostos.', 'Taxa implícita e CET.', 'Absoluto, relativo, pontos.', 'Prudência e justiça.'],
  referencias: [
    { texto: 'Banco Central do Brasil, Caderno de Educação Financeira — Gestão de Finanças Pessoais.' },
    { texto: 'Malba Tahan, O homem que calculava (1938).' },
    { texto: 'Catecismo da Igreja Católica, §§ 2401–2449.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['C(1+i)ⁿ', 'Compostos.'], ['CET', 'Custo total.'], ['p.p.', 'Diferença absoluta.']],
  avancado: {
    texto: `<h3>A regra do 72</h3>
<p>Um capital a juros compostos de r% por período dobra em aproximadamente 72/r períodos ${tag('fato')}. A regra vem de ln 2 ≈ 0,693 e da aproximação ln(1 + i) ≈ i para taxas pequenas; usa-se 72 por ter muitos divisores e corrigir a aproximação ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976), capítulo sobre logaritmos.' }],
    exercicios: [
      mc('A 6% ao ano, o capital dobra em cerca de:', ['6 anos', '12 anos', '18 anos', '72 anos'], 1, '72/6.'),
      mc('A regra do 72 usa:', ['ln 2', 'π', 'φ', '√2'], 0, 'Logaritmo.'),
      mc('A 12% a.m., a dívida dobra em cerca de:', ['6 meses', '12 meses', '2 meses', '24 meses'], 0, '72/12.'),
      disc('Deduza a regra do 72 a partir de (1 + i)ⁿ = 2.', ['Logaritmo', 'Aproximação', 'Resultado', 'Limites'])],
  },
}),

aula({
  id: 'ma5-2', titulo: 'Modelagem matemática nas ciências', duracao: '150 min',
  aprendera: ['Descrever as etapas da modelagem', 'Usar modelos lineares e exponenciais', 'Conhecer o modelo logístico', 'Avaliar os limites de um modelo'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como transformar um fenômeno real — o crescimento de uma população, a propagação de uma doença — em equações úteis?</p>
<h3>Etapas</h3>
<p>Modelar é: identificar as variáveis, formular hipóteses simplificadoras, escrever equações, resolver, comparar com os dados e revisar ${tag('fato')}.</p>
<h3>Modelos simples</h3>
<p>Linear: y = ax + b, variação constante ${tag('fato')}. Exponencial: P(t) = P₀·eᵏᵗ, variação proporcional ao tamanho ${tag('fato')}. Malthus (1798) supôs crescimento populacional geométrico ${tag('fato')}.</p>
<h3>Logístico</h3>
<p>Pierre-François Verhulst (1838) propôs um modelo em que o crescimento desacelera ao se aproximar de uma capacidade máxima K ${tag('fato')}. O gráfico tem forma de S ${tag('fato')}.</p>
<h3>Epidemias</h3>
<p>Modelos SIR dividem a população em suscetíveis, infectados e recuperados; o número básico de reprodução R₀ indica quantos novos casos um infectado gera no início ${tag('fato')}. Se R₀ > 1, a epidemia tende a crescer ${tag('fato')}.</p>
<h3>Limites</h3>
<p>Todo modelo é simplificação: útil se capta o essencial, perigoso se suas hipóteses são esquecidas ${tag('interpretacao')}. "Todos os modelos estão errados, mas alguns são úteis" é frase atribuída ao estatístico George Box ${tag('fato')}.</p>`,
  vocabulario: [
    ['Modelo matemático', 'Representação de um fenômeno por equações.'],
    ['Hipótese simplificadora', 'Suposição que torna o modelo tratável.'],
    ['Crescimento logístico', 'Crescimento que desacelera até uma capacidade máxima.'],
    ['R₀', 'Número básico de reprodução de uma epidemia.'],
    ['Validação', 'Comparação do modelo com dados reais.'],
  ],
  exemplos: `<p><strong>Bactérias:</strong> uma cultura dobra a cada hora. Começando com 100, após 10 horas teria 100 × 2¹⁰ = 102 400. Se o meio comporta no máximo 50 000, o modelo exponencial deixa de valer e o logístico descreve melhor a desaceleração.</p>`,
  contexto: `<p><strong>No mundo:</strong> modelos epidemiológicos orientaram políticas públicas durante a pandemia de covid-19, com acertos e erros debatidos ${tag('fato')}. <strong>No Brasil:</strong> o IBGE produz projeções populacionais usadas no planejamento ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que modelos exigem humildade', tag: 'argumento',
    premissas: ['Um modelo vale sob suas hipóteses.', 'Fenômenos reais frequentemente violam algumas hipóteses.', 'Decisões baseadas em modelos afetam muitas pessoas.'],
    conclusao: 'Logo, quem usa modelos deve explicitar suas hipóteses e incertezas.',
    nota: 'A honestidade intelectual exige distinguir o que o modelo mostra do que se supõe.',
  },
  objecoes: [
    { objecao: 'Se os modelos erram, não servem para nada.', tag: 'debate',
      resposta: 'Modelos não preveem o futuro com certeza, mas organizam o raciocínio, mostram cenários e indicam quais fatores importam. Rejeitá-los inteiramente é tão imprudente quanto segui-los cegamente.' },
  ],
  aplicacao: `<p>Escolha um fenômeno (população de sua cidade, crescimento de uma planta, consumo de energia), colete ou estime dados, ajuste um modelo linear ou exponencial, compare com os dados e discuta as hipóteses.</p>`,
  fonte: {
    obra: 'IBGE, Projeções da população do Brasil e das unidades da federação', link: null,
    orientacao: `<p>Observe as hipóteses de fecundidade, mortalidade e migração usadas nas projeções.</p>`,
  },
  perguntas: [
    { p: 'Quais as etapas da modelagem?', r: 'Variáveis, hipóteses, equações, resolução, comparação com dados e revisão.' },
    { p: 'O que é o crescimento logístico?', r: 'Crescimento que desacelera até uma capacidade máxima.' },
    { p: 'O que indica R₀ > 1?', r: 'Que a epidemia tende a crescer.' },
  ],
  exercicios: [
    mc('Crescimento proporcional ao tamanho é:', ['Linear', 'Exponencial', 'Constante', 'Nulo'], 1, 'Modelo.'),
    mc('O modelo logístico é de:', ['Malthus', 'Verhulst', 'Box', 'Euler'], 1, '1838.'),
    mc('100 × 2¹⁰ =', ['1 000', '20 000', '102 400', '1 024'], 2, 'Dobrar 10 vezes.'),
    mc('No modelo SIR, R significa:', ['Recuperados', 'Riscos', 'Razão', 'Renda'], 0, 'Compartimentos.'),
    mc('O gráfico logístico tem forma de:', ['S', 'U', 'Reta', 'Círculo'], 0, 'Sigmoide.'),
    disc('Faça a modelagem do fenômeno escolhido.', ['Dados', 'Modelo', 'Comparação', 'Hipóteses e limites']),
  ],
  resumo: ['Etapas da modelagem.', 'Linear e exponencial.', 'Logístico (Verhulst).', 'SIR e R₀.', 'Hipóteses e humildade.'],
  referencias: [
    { texto: 'Thomas Malthus, Ensaio sobre o princípio da população (1798).' },
    { texto: 'IBGE, Projeções da população do Brasil.' },
    { texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a modelagem', 'Ler a fonte indicada'],
  revisao: [['Exponencial', 'Proporcional.'], ['Logístico', 'Capacidade K.'], ['R₀', '> 1 cresce.']],
  avancado: {
    texto: `<h3>Equações diferenciais</h3>
<p>Muitos modelos dizem como uma grandeza varia: dP/dt = kP (exponencial), dP/dt = kP(1 − P/K) (logístico) ${tag('fato')}. Resolver a equação é achar a função que satisfaz essa relação ${tag('fato')}. As leis de Newton para o movimento são equações diferenciais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Elon Lages Lima, Curso de análise, vol. 1 (1976).' }],
    exercicios: [
      mc('dP/dt = kP tem solução:', ['P₀eᵏᵗ', 'kt', 'P₀ + kt', 'sen t'], 0, 'Exponencial.'),
      mc('No logístico, quando P = K, dP/dt =', ['0', 'k', 'K', 'Infinito'], 0, 'Estabiliza.'),
      mc('No logístico, o crescimento é mais rápido quando P =', ['K/2', 'K', '0', '2K'], 0, 'Máximo de P(1 − P/K).'),
      disc('Explique o significado de cada termo de dP/dt = kP(1 − P/K).', ['k', 'P', '1 − P/K', 'Comportamento'])],
  },
}),

aula({
  id: 'ma5-3', titulo: 'Matemática, beleza e ordem', duracao: '150 min',
  aprendera: ['Reconhecer critérios de beleza matemática', 'Relacionar matemática e música, arte e arquitetura com cautela', 'Discutir a matemática como caminho para a contemplação', 'Avaliar afirmações populares sobre "proporções divinas"'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Matemáticos falam de demonstrações "belas" e "elegantes". O que isso quer dizer, e que relação há entre matemática, beleza e ordem?</p>
<h3>Beleza matemática</h3>
<p>Hardy dizia que não há lugar permanente no mundo para a matemática feia ${tag('fato')}. Critérios citados: simplicidade, surpresa, generalidade, inevitabilidade ${tag('interpretacao')}. A prova de Euclides da infinitude dos primos é exemplo clássico ${tag('interpretacao')}.</p>
<h3>Música</h3>
<p>A tradição pitagórica associou os intervalos consonantes a razões simples: oitava 2:1, quinta 3:2, quarta 4:3 ${tag('fato')}. Boécio transmitiu essa teoria à Idade Média, e a música integrou o quadrívio ${tag('fato')}.</p>
<h3>Arte e arquitetura</h3>
<p>Geometria e proporção foram usadas na arquitetura e na perspectiva renascentista (Brunelleschi, Alberti, Piero della Francesca) ${tag('fato')}. Muitas afirmações populares sobre a razão áurea em obras e na natureza não têm base documental ${tag('interpretacao')}.</p>
<h3>Ordem e contemplação</h3>
<p>Para Platão, a matemática educa a alma para contemplar o inteligível ${tag('fato')}. Santo Agostinho viu nos números um reflexo da ordem divina (Livre-arbítrio, livro II) ${tag('fato')}. A tradição cristã afirma que a beleza da ordem criada remete ao Criador ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Elegância', 'Qualidade de uma demonstração simples, clara e iluminadora.'],
    ['Consonância', 'Intervalo musical percebido como agradável e estável.'],
    ['Proporção', 'Igualdade de razões.'],
    ['Perspectiva', 'Técnica de representar o espaço em profundidade.'],
    ['Contemplação', 'Olhar intelectual que repousa na verdade.'],
  ],
  exemplos: `<p><strong>A corda vibrante:</strong> uma corda que vibra produz uma nota; a metade dela soa uma oitava acima (2:1); dois terços dela, uma quinta acima (3:2). A experiência, atribuída à escola pitagórica, foi um dos primeiros encontros entre matemática e percepção sensível.</p>`,
  contexto: `<p><strong>No mundo:</strong> a perspectiva linear foi formulada por Alberti em Da pintura (1435) ${tag('fato')}. <strong>No Brasil:</strong> a arquitetura de Oscar Niemeyer explorou curvas e formas geométricas em Brasília ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a beleza matemática não é mero gosto', tag: 'argumento',
    premissas: ['Matemáticos de épocas e culturas diferentes concordam amplamente sobre quais provas são belas.', 'Os critérios citados (simplicidade, profundidade, unidade) estão ligados à inteligibilidade.', 'Uma beleza ligada à inteligibilidade tem fundamento objetivo.'],
    conclusao: 'Logo, a beleza matemática não é só preferência subjetiva.',
    nota: 'Na tradição clássica, o belo é aquilo que agrada ao ser contemplado, ligado à ordem, proporção e clareza.',
  },
  objecoes: [
    { objecao: 'A razão áurea prova que a natureza segue um plano matemático divino.', tag: 'debate',
      resposta: 'Algumas ocorrências (como a filotaxia de certas plantas) têm explicação matemática; muitas outras são exageros. A ordem da natureza é argumento sério, mas deve apoiar-se em fatos verificados, não em lendas sobre proporções.' },
  ],
  aplicacao: `<p>Escolha duas demonstrações que considere belas, explique por quê usando critérios da aula, e verifique uma afirmação popular sobre a razão áurea, distinguindo o que tem e o que não tem fonte.</p>`,
  fonte: {
    obra: 'Santo Agostinho, O livre-arbítrio, livro II (sobre o número e a sabedoria)', link: null,
    orientacao: `<p>Observe como Agostinho usa a imutabilidade das verdades numéricas para elevar-se à Verdade.</p>`,
  },
  perguntas: [
    { p: 'Que critérios de beleza matemática se costumam citar?', r: 'Simplicidade, surpresa, generalidade, inevitabilidade.' },
    { p: 'Qual a razão da quinta?', r: '3:2.' },
    { p: 'Por que ter cautela com a razão áurea?', r: 'Porque muitas afirmações populares não têm base documental.' },
  ],
  exercicios: [
    mc('A oitava corresponde à razão:', ['2:1', '3:2', '4:3', '5:4'], 0, 'Pitagóricos.'),
    mc('Da pintura, de Alberti, é de:', ['1435', '1637', '1854', '1902'], 0, 'Perspectiva.'),
    mc('A música integrava o:', ['Quadrívio', 'Trívio', 'Direito', 'Medicina'], 0, 'Boécio.'),
    mc('Agostinho trata dos números em O livre-arbítrio, livro:', ['II', 'X', 'XIII', 'I apenas'], 0, 'Fonte.'),
    mc('Hardy dizia que a matemática feia:', ['Não tem lugar permanente', 'É a melhor', 'É inevitável', 'É mais útil'], 0, 'Apologia.'),
    disc('Faça a análise das duas demonstrações e da afirmação sobre a razão áurea.', ['Demonstrações', 'Critérios', 'Verificação', 'Fontes']),
  ],
  resumo: ['Beleza: simplicidade, profundidade.', 'Música: 2:1, 3:2, 4:3.', 'Perspectiva renascentista.', 'Cautela com a razão áurea.', 'Ordem e contemplação.'],
  referencias: [
    { texto: 'Santo Agostinho, O livre-arbítrio.', livro: 'agostinho-livre-arbitrio' },
    { texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' },
    { texto: 'G. H. Hardy, Em defesa de um matemático (1940).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['3:2', 'Quinta.'], ['Alberti', 'Perspectiva.'], ['φ', 'Cautela.']],
  avancado: {
    texto: `<h3>A coma pitagórica</h3>
<p>Empilhando doze quintas (3/2)¹² ≈ 129,75, chega-se perto de sete oitavas, 2⁷ = 128, mas não exatamente ${tag('fato')}. A diferença, cerca de 1,4%, é a coma pitagórica ${tag('fato')}. Ela mostra que não se pode afinar um instrumento com todas as quintas puras e todas as oitavas puras, o que levou a vários sistemas de temperamento, como o temperamento igual ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Boécio, A instituição musical.', livro: 'boecio-quadrivio' }],
    exercicios: [
      mc('(3/2)¹² vale aproximadamente:', ['129,75', '128', '64', '256'], 0, 'Cálculo.'),
      mc('Sete oitavas correspondem a:', ['2⁷ = 128', '3⁷', '7²', '12'], 0, 'Oitavas.'),
      mc('A coma mostra que:', ['Quintas e oitavas puras não fecham o ciclo', 'A música é irracional', 'Pitágoras errou a oitava', 'Não há quintas'], 0, 'Temperamento.'),
      disc('Explique o que é o temperamento igual e por que ele resolve a coma pitagórica.', ['Coma', 'Temperamento', 'Razão 2^(1/12)', 'Consequências'])],
  },
}),

aula({
  id: 'ma5-4', titulo: 'Pesquisa: história e demonstração de um teorema clássico', duracao: '180 min',
  aprendera: ['Escolher um teorema adequado', 'Reconstruir sua demonstração passo a passo', 'Documentar sua história com fontes', 'Redigir um relatório matemático'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como passar de aluno que resolve exercícios a estudante que investiga um resultado?</p>
<h3>Escolha</h3>
<p>Escolha um teorema clássico de demonstração acessível: Pitágoras (com duas provas diferentes), infinitude dos primos, irracionalidade de √2, fórmula de Euler para poliedros, soma dos ângulos do triângulo, teorema de Tales, fórmula da soma da progressão geométrica ${tag('interpretacao')}.</p>
<h3>Etapas</h3>
<p>1. Enuncie o teorema com precisão ${tag('interpretacao')}. 2. Reconstrua uma demonstração, justificando cada passo ${tag('interpretacao')}. 3. Procure uma segunda demonstração e compare ${tag('interpretacao')}. 4. Pesquise a história: quem enunciou, em que obra, como foi recebido ${tag('interpretacao')}. 5. Mostre uma aplicação ou consequência ${tag('interpretacao')}.</p>
<h3>Fontes</h3>
<p>Use a obra original quando possível (por exemplo, os Elementos), uma história da matemática e um livro didático rigoroso ${tag('interpretacao')}. Registre as referências completas ${tag('fato')}.</p>
<h3>Relatório</h3>
<p>Estrutura: enunciado; demonstração 1; demonstração 2; comparação; história; aplicação; conclusão; referências ${tag('interpretacao')}. Distinga o que é demonstrado, o que é fato histórico documentado e o que é opinião ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Enunciado', 'Formulação precisa do teorema.'],
    ['Demonstração alternativa', 'Outra prova do mesmo resultado.'],
    ['Fonte primária', 'Texto original do autor.'],
    ['Relatório', 'Texto que apresenta a investigação e seus resultados.'],
    ['Consequência', 'Resultado que decorre do teorema.'],
  ],
  exemplos: `<p><strong>Pitágoras:</strong> um estudante compara a prova de Euclides (I, 47), baseada em áreas de quadrados e triângulos, com a prova por rearranjo dos quatro triângulos. Pesquisa a tábua Plimpton 322 e a atribuição a Pitágoras, distinguindo tradição e documento. Aplica o teorema ao cálculo de distâncias no plano cartesiano.</p>`,
  contexto: `<p><strong>No mundo:</strong> Elisha Loomis reuniu centenas de demonstrações do teorema de Pitágoras em The Pythagorean Proposition ${tag('fato')}. <strong>No Brasil:</strong> a Revista do Professor de Matemática, da SBM, publica artigos acessíveis sobre teoremas clássicos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que estudar duas demonstrações', tag: 'argumento',
    premissas: ['Uma demonstração mostra que o teorema é verdadeiro.', 'Demonstrações diferentes revelam razões diferentes e ligações com outras áreas.', 'Compreender é conhecer as razões, não só o resultado.'],
    conclusao: 'Logo, comparar demonstrações aprofunda a compreensão.',
    nota: 'Aristóteles distingue saber que algo é de saber por que é.',
  },
  objecoes: [
    { objecao: 'A história é irrelevante: só importa a demonstração.', tag: 'debate',
      resposta: 'A validade não depende da história. Mas a história mostra como os problemas surgiram, quais dificuldades houve e por que certas definições foram escolhidas, o que ajuda a entender a própria matemática.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: teorema escolhido, enunciado, demonstrações a estudar, fontes, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Euclides, Elementos (o livro que contém o teorema escolhido, se for o caso)', link: null,
    orientacao: `<p>Leia a proposição original e compare com a formulação moderna.</p>`,
  },
  perguntas: [
    { p: 'Quais as etapas da pesquisa?', r: 'Enunciado, demonstração, segunda demonstração, história e aplicação.' },
    { p: 'Por que estudar duas demonstrações?', r: 'Porque revelam razões diferentes e aprofundam a compreensão.' },
    { p: 'O que o relatório deve distinguir?', r: 'O demonstrado, o fato histórico documentado e a opinião.' },
  ],
  exercicios: [
    mc('O primeiro passo é:', ['Enunciar com precisão', 'Escrever a conclusão', 'Fazer gráficos', 'Escolher a capa'], 0, 'Método.'),
    mc('A validade de um teorema depende:', ['Da demonstração', 'Da história', 'Da fama do autor', 'Da época'], 0, 'Lógica.'),
    mc('Uma fonte primária é:', ['O texto original do autor', 'Um resumo', 'Um vídeo', 'Uma opinião'], 0, 'Definição.'),
    mc('Saber por que é, segundo Aristóteles, é mais que saber:', ['Que é', 'Nada', 'Calcular', 'Decorar'], 0, 'Analíticos posteriores.'),
    mc('Um bom teorema para a pesquisa tem demonstração:', ['Acessível', 'De centenas de páginas', 'Desconhecida', 'Apenas por computador'], 0, 'Escolha.'),
    disc('Apresente o pré-projeto completo.', ['Teorema', 'Demonstrações', 'Fontes', 'Cronograma e rubrica']),
  ],
  resumo: ['Teorema acessível.', 'Enunciado preciso.', 'Duas demonstrações.', 'História documentada.', 'Relatório com distinções.'],
  referencias: [
    { texto: 'Euclides, Elementos.' },
    { texto: 'Carl B. Boyer, História da matemática (1968).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Enunciado', 'Primeiro.'], ['Duas provas', 'Razões.'], ['História', 'Documentada.']],
  avancado: {
    texto: `<h3>Escrever matemática</h3>
<p>Boa escrita matemática define os símbolos antes de usá-los, escreve frases completas em torno das fórmulas, anuncia a estratégia antes dos detalhes e marca o fim da demonstração ${tag('interpretacao')}. Paul Halmos dedicou um ensaio conhecido ao tema, How to Write Mathematics (1970) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Halmos, How to Write Mathematics (1970).' }],
    exercicios: [
      mc('Antes de usar um símbolo, deve-se:', ['Defini-lo', 'Escondê-lo', 'Repeti-lo', 'Nada'], 0, 'Clareza.'),
      mc('Anunciar a estratégia serve para:', ['Orientar o leitor', 'Encher espaço', 'Esconder passos', 'Nada'], 0, 'Clareza.'),
      mc('How to Write Mathematics é de:', ['Halmos', 'Pólya', 'Hardy', 'Euler'], 0, '1970.'),
      disc('Reescreva uma demonstração sua seguindo as recomendações de boa escrita matemática.', ['Símbolos', 'Estratégia', 'Frases', 'Fim marcado'])],
  },
}),

avaliacao('ma5-5', 'Avaliação integradora de Matemática', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Matemática. Reúne questões de todos os módulos (MA1 a MA5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça uma demonstração por absurdo, uma indução, uma derivada e um cálculo de probabilidade.</li><li>Releia a rubrica da pesquisa (ma5-4).</li></ul>`,
[
  disc('Resolva e justifique: (a) demonstre por indução que 2ⁿ > n para todo n ≥ 1; (b) calcule o montante de R$ 2000 a 2% ao mês em 12 meses; (c) calcule a derivada de x⁴ − 3x² e a área sob y = 3x² entre 0 e 2.', ['Indução', 'Juros compostos', 'Derivada', 'Integral']),
  disc('Responda, com base em Euclides, Aristóteles e Wigner, à pergunta: o que é a matemática e por que ela nos ajuda a conhecer o mundo?', ['Euclides', 'Aristóteles', 'Wigner', 'Argumentação']),
]),
];
