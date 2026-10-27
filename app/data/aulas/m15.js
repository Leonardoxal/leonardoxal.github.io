// Módulo 15 — Filosofia da mente, linguagem, estética e síntese.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm15-1', titulo: 'O problema mente-corpo',
  aprendera: ['As principais posições: dualismo, fisicalismo, funcionalismo, hilemorfismo', 'O argumento do conhecimento (Mary) e o dos zumbis', 'O hilemorfismo tomista como alternativa', 'A doutrina católica sobre a alma'],
  prereq: ['Módulo 9, aula 2: Descartes'],
  explicacao: `
<h3>O problema</h3>
<p>Como se relacionam o mental (pensar, sentir, querer) e o físico (cérebro, corpo)? ${tag('fato')}</p>
<h3>Posições</h3>
<ul>
<li><strong>Dualismo de substâncias</strong> (Descartes): mente e corpo são substâncias distintas.</li>
<li><strong>Fisicalismo/identidade</strong> (Smart, Place, anos 1950): estados mentais são estados cerebrais.</li>
<li><strong>Funcionalismo</strong> (Putnam, anos 1960): estados mentais são papéis funcionais, realizáveis em vários suportes.</li>
<li><strong>Eliminativismo</strong> (Churchland): a "psicologia popular" é teoria falsa a ser eliminada.</li>
<li><strong>Hilemorfismo</strong> (Aristóteles, Tomás): a alma é a forma do corpo; o homem é uma substância, não duas ${tag('fato')}.</li>
</ul>
<h3>Argumentos contra o fisicalismo</h3>
<p>Frank Jackson ("Epiphenomenal Qualia", 1982): Mary, cientista que sabe tudo sobre a física da cor mas viveu num quarto preto e branco, aprende algo novo ao ver vermelho; logo, nem todo conhecimento é físico ${tag('argumento')}. David Chalmers: zumbis filosóficos (físicamente idênticos a nós, sem consciência) são concebíveis; logo, a consciência não é física ${tag('argumento')}.</p>
<h3>Hilemorfismo</h3>
<p>Para Tomás, a alma intelectiva é forma substancial do corpo e, por ter operação intelectual não corporal, é subsistente e incorruptível (ST I, q. 75–76) ${tag('fato')}. O hilemorfismo evita o problema da interação cartesiano, porque não há duas substâncias ${tag('interpretacao')}.</p>
<h3>Doutrina</h3>
<p>A Igreja ensina que a alma é forma do corpo (Concílio de Vienne, 1312) e que cada alma é criada imediatamente por Deus e é imortal (Catecismo §365–366) ${tag('doutrina')}.</p>`,
  vocabulario: [['Dualismo', 'Mente e corpo como substâncias distintas.'], ['Fisicalismo', 'Tudo é físico.'], ['Funcionalismo', 'Mente como organização funcional.'], ['Qualia', 'Aspectos qualitativos da experiência.'], ['Hilemorfismo', 'Matéria e forma; alma como forma do corpo.']],
  exemplos: '<p>Um computador executa o mesmo programa em chips diferentes: o funcionalismo diz que a mente é como o programa. O hilemorfista pergunta: um programa entende o que calcula?</p>',
  contexto: `<p>A filosofia da mente se tornou campo central da filosofia analítica a partir dos anos 1950 ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento do conhecimento (Jackson, reconstruído)', tag: 'argumento',
    premissas: ['Mary sabe todos os fatos físicos sobre a visão de cores.', 'Ao ver vermelho pela primeira vez, Mary aprende algo novo.', 'Se aprende algo novo, havia fatos que ela não sabia.'],
    conclusao: 'Logo, nem todos os fatos são físicos.',
    nota: 'Respostas fisicalistas: Mary adquire uma habilidade (Lewis, Nemirow) ou um novo modo de conhecer o mesmo fato. Jackson mais tarde abandonou o argumento.' },
  objecoes: [{ objecao: 'A neurociência mostra dependência total do mental em relação ao cérebro.', tag: 'debate', resposta: 'Dependência não é identidade: o hilemorfismo também afirma dependência das operações sensíveis em relação ao corpo. O intelecto, segundo Tomás, usa imagens cerebrais, mas sua operação não é corporal.' }],
  aplicacao: '<p>Escreva no Caderno qual posição você considera mais plausível e a objeção que mais o incomoda.</p>',
  fonte: { obra: 'Tomás, ST I, q. 75, aa. 1–2 e q. 76, a. 1; Frank Jackson, "Epiphenomenal Qualia" (1982)', link: null, orientacao: '<p>Leia os artigos de Tomás e o artigo de Jackson. Compare os dois argumentos para algo não físico no homem.</p>' },
  perguntas: [
    { p: 'O que é o hilemorfismo?', r: 'A alma é forma do corpo; o homem é uma substância.' },
    { p: 'O que mostra o caso de Mary?', r: 'Que nem todo conhecimento seria conhecimento físico.' },
    { p: 'O que o Concílio de Vienne afirmou?', r: 'Que a alma é forma do corpo.' },
  ],
  exercicios: [
    mc('Funcionalismo é associado a:', ['Descartes', 'Putnam', 'Tomás', 'Jackson'], 1, 'Anos 1960.'),
    mc('Zumbis filosóficos são argumento de:', ['Chalmers', 'Churchland', 'Dennett', 'Smart'], 0, 'Concebibilidade.'),
    mc('O Concílio de Vienne é de:', ['1215', '1312', '1545', '1870'], 1, 'Alma forma do corpo.'),
    mc('Jackson posteriormente:', ['Reforçou o argumento', 'Abandonou o argumento', 'Tornou-se dualista cartesiano', 'Tornou-se tomista'], 1, 'Virou fisicalista.'),
    disc('O hilemorfismo resolve o problema mente-corpo melhor que o dualismo e o fisicalismo? Argumente.', ['Expõe três posições', 'Argumentos', 'Objeções', 'Conclusão justificada'])],
  resumo: ['Dualismo, fisicalismo, funcionalismo, eliminativismo, hilemorfismo.', 'Mary e zumbis.', 'Alma forma do corpo.', 'Vienne e CIC §365–366.', 'Dependência não é identidade.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I, qq. 75–76.' }, { texto: 'Frank Jackson, "Epiphenomenal Qualia" (1982).' }, { texto: 'David Chalmers, The Conscious Mind (1996).' }],
  revisao: [['Hilemorfismo', 'Alma forma do corpo.'], ['Mary', 'Argumento do conhecimento.'], ['CIC §365', 'Unidade alma e corpo.']],
  avancado: {
    texto: `<h3>Hilemorfismo contemporâneo</h3>
<p>Autores como Eleonore Stump, David Oderberg e William Jaworski desenvolvem versões contemporâneas do hilemorfismo ${tag('fato')}.</p>
<h3>O intelecto e a imaterialidade</h3>
<p>James Ross ("Immaterial Aspects of Thought", 1992) argumentou que o pensamento formal (seguir uma função determinada) não pode ser físico, pois processos físicos são indeterminados quanto à função que realizam ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'James Ross, "Immaterial Aspects of Thought" (1992).' }, { texto: 'David Oderberg, Real Essentialism (2007).' }],
    exercicios: [
      mc('"Immaterial Aspects of Thought" é de:', ['Ross', 'Stump', 'Oderberg', 'Feser'], 0, '1992.'),
      mc('Real Essentialism é de:', ['Oderberg', 'Jaworski', 'Ross', 'Chalmers'], 0, '2007.'),
      mc('O argumento de Ross usa a indeterminação de:', ['Qualia', 'Funções realizadas por processos físicos', 'Memória', 'Emoções'], 1, 'Pensamento formal.'),
      disc('Reconstrua o argumento de Ross e avalie-o.', ['Premissas', 'Objeção', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'm15-2', titulo: 'Consciência',
  aprendera: ['O "problema difícil" da consciência', '"Como é ser um morcego?" (Nagel)', 'Respostas: ilusionismo (Dennett), panpsiquismo, emergência', 'A intencionalidade como marca do mental'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Problema difícil</h3>
<p>David Chalmers (1995) distinguiu os "problemas fáceis" (explicar funções: atenção, relato, discriminação) do "problema difícil": por que há experiência subjetiva, um "como é" ter esses estados? ${tag('fato')}</p>
<h3>Nagel</h3>
<p>Thomas Nagel ("What Is It Like to Be a Bat?", 1974): um organismo tem estados conscientes se há algo que é como ser esse organismo; a descrição objetiva da ecolocalização não captura como é ser morcego ${tag('fato')}.</p>
<h3>Respostas</h3>
<ul>
<li><strong>Ilusionismo</strong> (Dennett, Frankish): a consciência fenomenal, como a imaginamos, é ilusão ${tag('fato')}.</li>
<li><strong>Panpsiquismo</strong> (Goff, Strawson): a consciência é traço fundamental da matéria ${tag('fato')}.</li>
<li><strong>Emergentismo</strong>: a consciência emerge de sistemas complexos ${tag('fato')}.</li>
<li><strong>Teorias científicas</strong>: espaço de trabalho global (Baars, Dehaene), informação integrada (Tononi) ${tag('fato')}.</li>
</ul>
<h3>Intencionalidade</h3>
<p>Brentano (Psicologia do Ponto de Vista Empírico, 1874) propôs a intencionalidade (ser sobre algo) como marca do mental ${tag('fato')}. A tradição tomista vê na intencionalidade (a forma recebida "intencionalmente", sem a matéria) um sinal da imaterialidade do conhecer ${tag('interpretacao')}.</p>`,
  vocabulario: [['Problema difícil', 'Por que há experiência subjetiva.'], ['Como é ser', 'Caráter subjetivo da experiência (Nagel).'], ['Ilusionismo', 'A consciência fenomenal seria ilusão.'], ['Panpsiquismo', 'Consciência como traço fundamental.'], ['Intencionalidade', 'Ser sobre algo.']],
  exemplos: '<p>Um termostato "detecta" a temperatura, mas não sente calor. Por que você sente? Essa é a pergunta difícil.</p>',
  contexto: `<p>Chalmers apresentou o problema difícil na conferência de Tucson (1994) e no Journal of Consciousness Studies (1995) ${tag('fato')}.</p>`,
  argumento: { titulo: 'A objetividade não captura o subjetivo (Nagel, reconstruído)', tag: 'argumento',
    premissas: ['Todo estado consciente tem um caráter subjetivo, acessível de um ponto de vista.', 'Descrições físicas são objetivas, independentes de ponto de vista.', 'Uma descrição que abstrai do ponto de vista omite o que só aparece de um ponto de vista.'],
    conclusao: 'Logo, a descrição física completa deixa de fora o caráter subjetivo da consciência.',
    nota: 'Nagel não conclui pelo dualismo; conclui que nossa concepção atual de física é incompleta (Mind and Cosmos, 2012).' },
  objecoes: [{ objecao: 'Dennett: a "experiência subjetiva" é uma construção do cérebro; não há nada a mais a explicar.', tag: 'debate', resposta: 'Críticos dizem que o ilusionismo nega o dado mais evidente: até a ilusão é uma experiência. Defensores replicam que a ilusão é de representação, não de experiência.' }],
  aplicacao: '<p>Descreva no Caderno uma experiência (sabor de café) de modo físico e de modo vivido. O que falta na primeira?</p>',
  fonte: { obra: 'Thomas Nagel, "What Is It Like to Be a Bat?" (1974)', link: null, orientacao: '<p>Leia o artigo inteiro (é curto). Reconstrua o argumento e a conclusão de Nagel.</p>' },
  perguntas: [
    { p: 'O que é o problema difícil?', r: 'Por que há experiência subjetiva.' },
    { p: 'Qual a tese de Nagel?', r: 'A descrição objetiva não captura como é ser um organismo.' },
    { p: 'O que é intencionalidade?', r: 'Ser sobre algo.' },
  ],
  exercicios: [
    mc('"What Is It Like to Be a Bat?" é de:', ['Chalmers', 'Nagel', 'Dennett', 'Searle'], 1, '1974.'),
    mc('Ilusionismo é associado a:', ['Dennett e Frankish', 'Goff', 'Tononi', 'Nagel'], 0, 'Consciência como ilusão.'),
    mc('Informação integrada é teoria de:', ['Baars', 'Tononi', 'Dehaene', 'Chalmers'], 1, 'IIT.'),
    mc('Brentano propôs a intencionalidade em:', ['1874', '1900', '1927', '1974'], 0, 'Psicologia do Ponto de Vista Empírico.'),
    disc('A consciência é explicável fisicamente? Avalie Nagel, Dennett e a posição tomista.', ['Três posições', 'Argumentos', 'Avaliação', 'Conclusão justificada'])],
  resumo: ['Problema difícil.', 'Nagel e o morcego.', 'Ilusionismo, panpsiquismo, emergência.', 'Teorias científicas.', 'Intencionalidade.'],
  referencias: [{ texto: 'Thomas Nagel, "What Is It Like to Be a Bat?" (1974).' }, { texto: 'David Chalmers, "Facing Up to the Problem of Consciousness" (1995).' }, { texto: 'Daniel Dennett, Consciousness Explained (1991).' }],
  revisao: [['Problema difícil', 'Chalmers, 1995.'], ['Morcego', 'Nagel, 1974.'], ['Intencionalidade', 'Brentano, 1874.']],
  avancado: {
    texto: `<h3>Searle e o quarto chinês</h3>
<p>John Searle ("Minds, Brains, and Programs", 1980): alguém que manipula símbolos chineses por regras, sem entender chinês, mostra que sintaxe não basta para semântica ${tag('argumento')}. O argumento é central no debate sobre inteligência artificial ${tag('debate')}.</p>
<h3>Mind and Cosmos</h3>
<p>Nagel (Mind and Cosmos, 2012) argumentou que a concepção neodarwinista materialista da natureza é "quase certamente falsa" por não explicar consciência, cognição e valor ${tag('fato')}.</p>`,
    leituras: [{ texto: 'John Searle, "Minds, Brains, and Programs" (1980).' }, { texto: 'Thomas Nagel, Mind and Cosmos (2012).' }],
    exercicios: [
      mc('O quarto chinês é de:', ['Searle', 'Nagel', 'Dennett', 'Turing'], 0, '1980.'),
      mc('O quarto chinês mostra que:', ['Sintaxe basta para semântica', 'Sintaxe não basta para semântica', 'Computadores pensam', 'Chinês é difícil'], 1, 'Searle.'),
      mc('Mind and Cosmos é de:', ['2002', '2012', '1994', '1980'], 1, 'Nagel.'),
      disc('Modelos de linguagem atuais "entendem"? Aplique o quarto chinês e uma objeção.', ['Expõe Searle', 'Aplica', 'Objeção (resposta do sistema)', 'Conclusão'])],
  },
}),

aula({
  id: 'm15-3', titulo: 'Linguagem e significado',
  aprendera: ['Sentido e referência em Frege', 'Descrições definidas em Russell', 'Kripke e os designadores rígidos', 'Teorias do significado e a tradição medieval dos signos'],
  prereq: ['Módulo 10, aula 9: Wittgenstein'],
  explicacao: `
<h3>Frege</h3>
<p>Gottlob Frege ("Sobre o sentido e a referência", 1892): "a estrela da manhã" e "a estrela da tarde" têm a mesma referência (Vênus) e sentidos diferentes; por isso "a estrela da manhã é a estrela da tarde" é informativo ${tag('fato')}.</p>
<h3>Russell</h3>
<p>Bertrand Russell ("On Denoting", 1905) analisou "o atual rei da França é calvo" como afirmação de que existe um e só um rei da França e ele é calvo — falsa, não sem sentido ${tag('fato')}.</p>
<h3>Kripke</h3>
<p>Saul Kripke (Naming and Necessity, conferências de 1970, livro 1980) argumentou que nomes próprios são "designadores rígidos" (referem o mesmo indivíduo em todos os mundos possíveis) e não abreviam descrições; e que há verdades necessárias conhecidas a posteriori ("água é H₂O") ${tag('fato')}.</p>
<h3>Tradição medieval</h3>
<p>Agostinho (De doctrina christiana II, 1) define signo como o que, além de sua forma sensível, faz vir à mente algo distinto ${tag('fato')}. Os medievais desenvolveram a teoria da <em>suppositio</em> (o que um termo representa numa proposição) ${tag('fato')}. Para Tomás, as palavras significam conceitos, e os conceitos, as coisas (ST I, q. 13, a. 1, seguindo Aristóteles, Da Interpretação 1) ${tag('fato')}.</p>`,
  vocabulario: [['Sentido (Sinn)', 'Modo de apresentação.'], ['Referência (Bedeutung)', 'Objeto designado.'], ['Descrição definida', 'Expressão "o tal e tal".'], ['Designador rígido', 'Refere o mesmo em todos os mundos possíveis.'], ['Suppositio', 'Teoria medieval da referência dos termos.']],
  exemplos: '<p>"Superman é Clark Kent": Lois Lane pode crer que Superman voa sem crer que Clark Kent voa. O sentido diferente explica a diferença de crença.</p>',
  contexto: `<p>A "virada linguística" fez da linguagem tema central da filosofia do século XX ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que precisamos de sentido além de referência (Frege, reconstruído)', tag: 'argumento',
    premissas: ['"a = a" é trivial; "a = b" pode ser informativo.', 'Se só a referência importasse, e a = b, as duas frases diriam o mesmo.', 'Mas não dizem o mesmo.'],
    conclusao: 'Logo, além da referência, as expressões têm sentido.',
    nota: 'Kripke aceita o enigma, mas nega que o sentido de um nome seja uma descrição.' },
  objecoes: [{ objecao: 'Teorias descritivistas não explicam como nomes funcionam quando erramos as descrições (Gödel/Schmidt, Kripke).', tag: 'argumento', resposta: 'Kripke propôs uma teoria causal: o nome é transmitido de falante a falante desde um "batismo" inicial. Críticos discutem como explicar nomes vazios.' }],
  aplicacao: '<p>Analise no Caderno a frase "O autor da Suma Teológica é Tomás de Aquino" com Frege e Kripke.</p>',
  fonte: { obra: 'Frege, "Sobre o sentido e a referência" (1892)', link: null, orientacao: '<p>Leia o artigo e reconstrua o enigma da identidade e a solução de Frege.</p>' },
  perguntas: [
    { p: 'Diferença entre sentido e referência?', r: 'Modo de apresentação × objeto designado.' },
    { p: 'O que é um designador rígido?', r: 'Expressão que refere o mesmo indivíduo em todos os mundos possíveis.' },
    { p: 'Como Agostinho define signo?', r: 'O que faz vir à mente algo distinto de sua forma sensível.' },
  ],
  exercicios: [
    mc('"On Denoting" (1905) é de:', ['Frege', 'Russell', 'Kripke', 'Wittgenstein'], 1, 'Descrições.'),
    mc('"Água é H₂O" é, para Kripke:', ['Contingente a priori', 'Necessária a posteriori', 'Analítica', 'Falsa'], 1, 'Naming and Necessity.'),
    mc('A teoria da suppositio é:', ['Moderna', 'Medieval', 'Fregeana', 'Wittgensteiniana'], 1, 'Lógica terminista.'),
    mc('Estrela da manhã e da tarde: mesma referência, diferente:', ['Objeto', 'Sentido', 'Planeta', 'Verdade'], 1, 'Frege.'),
    disc('Compare a teoria do significado de Tomás (palavra–conceito–coisa) com Frege e Kripke.', ['Expõe Tomás', 'Expõe Frege', 'Expõe Kripke', 'Conclusão justificada'])],
  resumo: ['Frege: sentido e referência.', 'Russell: descrições.', 'Kripke: designadores rígidos.', 'Agostinho e o signo.', 'Suppositio medieval.'],
  referencias: [{ texto: 'Gottlob Frege, "Sobre o sentido e a referência" (1892).' }, { texto: 'Saul Kripke, Naming and Necessity (1980).' }, { texto: 'Agostinho, A Doutrina Cristã II.' }],
  revisao: [['Sinn e Bedeutung', 'Frege.'], ['Designador rígido', 'Kripke.'], ['Signo', 'Agostinho, De doctrina christiana II, 1.']],
  avancado: {
    texto: `<h3>Essencialismo</h3>
<p>Kripke reabilitou noções de necessidade metafísica e essência, o que aproximou parte da filosofia analítica do aristotelismo ${tag('interpretacao')}.</p>
<h3>Atos de fala</h3>
<p>J. L. Austin (Quando Dizer é Fazer, 1962) distinguiu atos locucionários, ilocucionários e perlocucionários; enunciados "performativos" (prometo, batizo) fazem o que dizem ${tag('fato')}. A teologia sacramental usa a noção ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'J. L. Austin, Quando Dizer é Fazer (1962).' }],
    exercicios: [
      mc('Quando Dizer é Fazer é de:', ['Searle', 'Austin', 'Grice', 'Kripke'], 1, '1962.'),
      mc('"Eu te batizo" é enunciado:', ['Constativo', 'Performativo', 'Descritivo', 'Falso'], 1, 'Austin.'),
      mc('Kripke reabilitou noções de:', ['Verificação', 'Necessidade metafísica e essência', 'Emotivismo', 'Uso'], 1, 'Essencialismo.'),
      disc('A teoria dos atos de fala ajuda a entender a fórmula sacramental? Argumente.', ['Expõe Austin', 'Aplica', 'Limites', 'Conclusão'])],
  },
}),

aula({
  id: 'm15-4', titulo: 'Interpretação',
  aprendera: ['Hermenêutica de Schleiermacher a Gadamer', 'O círculo hermenêutico e a "fusão de horizontes"', 'Ricoeur: explicar e compreender', 'Hermenêutica bíblica católica (Dei Verbum, Bento XVI)'],
  explicacao: `
<h3>Origem</h3>
<p>Friedrich Schleiermacher (início do século XIX) fez da hermenêutica uma teoria geral da compreensão, não só regras para textos sagrados ${tag('fato')}. Dilthey distinguiu explicar (ciências naturais) e compreender (ciências do espírito) ${tag('fato')}.</p>
<h3>Gadamer</h3>
<p>Hans-Georg Gadamer (Verdade e Método, 1960): toda compreensão parte de pré-compreensões (preconceitos, no sentido de juízos prévios); compreender é uma "fusão de horizontes" entre o leitor e o texto ${tag('fato')}. A tradição não é obstáculo, mas condição da compreensão ${tag('interpretacao')}.</p>
<h3>Círculo hermenêutico</h3>
<p>Compreende-se o todo pelas partes e as partes pelo todo ${tag('fato')}. Não é círculo vicioso, mas espiral que se corrige ${tag('interpretacao')}.</p>
<h3>Ricoeur</h3>
<p>Paul Ricoeur integrou explicação (estrutura do texto) e compreensão (apropriação); propôs a "hermenêutica da suspeita" (Marx, Nietzsche, Freud) e uma "segunda ingenuidade" ${tag('fato')}.</p>
<h3>Hermenêutica bíblica</h3>
<p>Dei Verbum §12 pede atenção à intenção dos autores sagrados, aos gêneros literários, à unidade da Escritura, à Tradição viva e à analogia da fé ${tag('doutrina')}. Bento XVI (Verbum Domini, 2010) pediu unir método histórico-crítico e leitura teológica ${tag('doutrina')}.</p>`,
  vocabulario: [['Hermenêutica', 'Teoria da interpretação.'], ['Círculo hermenêutico', 'Partes pelo todo, todo pelas partes.'], ['Fusão de horizontes', 'Encontro entre leitor e texto (Gadamer).'], ['Hermenêutica da suspeita', 'Interpretação que busca motivos ocultos.'], ['Analogia da fé', 'Coerência das verdades da fé entre si.']],
  exemplos: '<p>Ao ler a parábola do bom samaritano, você precisa saber quem eram os samaritanos (contexto), como a parábola funciona (estrutura) e o que ela pede de você hoje (apropriação).</p>',
  contexto: `<p>Gadamer foi aluno de Heidegger ${tag('fato')}.</p>`,
  argumento: { titulo: 'Preconceitos como condição (Gadamer, reconstruído)', tag: 'argumento',
    premissas: ['Ninguém lê sem expectativas sobre o sentido do texto.', 'Essas expectativas vêm de uma tradição.', 'Sem expectativas, nenhum sentido poderia aparecer.'],
    conclusao: 'Logo, pré-compreensões são condição da compreensão, e não só obstáculo.',
    nota: 'Habermas criticou Gadamer por não oferecer critério para criticar tradições distorcidas; Betti e Hirsch defenderam a intenção do autor como critério.' },
  objecoes: [{ objecao: 'Se toda leitura é fusão de horizontes, não há interpretação correta.', tag: 'debate', resposta: 'E. D. Hirsch (Validade na Interpretação, 1967) defendeu a intenção do autor como critério. Gadamer responde que há interpretações melhores e piores, mas nenhuma definitiva.' }],
  aplicacao: '<p>Escolha uma passagem bíblica e interprete-a seguindo os critérios de Dei Verbum §12.</p>',
  fonte: { obra: 'Dei Verbum §12; Gadamer, Verdade e Método, parte II', link: null, orientacao: '<p>Leia Dei Verbum §12 e a seção de Gadamer sobre preconceitos. Compare os critérios.</p>' },
  perguntas: [
    { p: 'O que é o círculo hermenêutico?', r: 'Compreender o todo pelas partes e as partes pelo todo.' },
    { p: 'O que é fusão de horizontes?', r: 'Encontro entre o horizonte do leitor e o do texto.' },
    { p: 'Quais critérios Dei Verbum §12 propõe?', r: 'Intenção dos autores, gêneros, unidade da Escritura, Tradição, analogia da fé.' },
  ],
  exercicios: [
    mc('Verdade e Método é de:', ['Ricoeur', 'Gadamer', 'Dilthey', 'Heidegger'], 1, '1960.'),
    mc('"Hermenêutica da suspeita" é expressão de:', ['Gadamer', 'Ricoeur', 'Hirsch', 'Betti'], 1, 'Marx, Nietzsche, Freud.'),
    mc('Hirsch defendeu como critério:', ['O leitor', 'A intenção do autor', 'A tradição', 'O acaso'], 1, '1967.'),
    mc('Verbum Domini é de:', ['Paulo VI', 'Bento XVI', 'João Paulo II', 'Francisco'], 1, '2010.'),
    disc('Gadamer e Hirsch: qual critério de interpretação é melhor para a Escritura? Use Dei Verbum.', ['Expõe os dois', 'Usa Dei Verbum', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Schleiermacher e Dilthey.', 'Gadamer: preconceitos e fusão.', 'Círculo hermenêutico.', 'Ricoeur.', 'Dei Verbum §12.'],
  referencias: [{ texto: 'Hans-Georg Gadamer, Verdade e Método (1960).' }, { texto: 'Concílio Vaticano II, Dei Verbum (1965), §12.' }, { texto: 'Bento XVI, Verbum Domini (2010).' }],
  revisao: [['Fusão de horizontes', 'Gadamer.'], ['DV §12', 'Critérios de interpretação.'], ['Hermenêutica da suspeita', 'Ricoeur.']],
  avancado: {
    texto: `<h3>Ratzinger e o método histórico-crítico</h3>
<p>Na conferência "Interpretação bíblica em crise" (Nova York, 1988), Joseph Ratzinger pediu uma "crítica da crítica" do método histórico-crítico ${tag('fato')}. A Pontifícia Comissão Bíblica publicou A Interpretação da Bíblia na Igreja (1993) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Pontifícia Comissão Bíblica, A Interpretação da Bíblia na Igreja (1993).' }, { texto: 'Joseph Ratzinger, "Interpretação bíblica em crise" (1988).' }],
    exercicios: [
      mc('A Interpretação da Bíblia na Igreja é de:', ['1965', '1988', '1993', '2010'], 2, 'Pontifícia Comissão Bíblica.'),
      mc('"Crítica da crítica" foi pedida por:', ['Ratzinger', 'Bultmann', 'Gadamer', 'Ricoeur'], 0, '1988.'),
      mc('O método histórico-crítico, para a Igreja, é:', ['Proibido', 'Indispensável mas insuficiente', 'Suficiente', 'Irrelevante'], 1, 'PCB 1993.'),
      disc('Que limites o método histórico-crítico tem segundo Ratzinger? Avalie.', ['Expõe limites', 'Exemplo', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm15-5', titulo: 'O belo e a arte',
  aprendera: ['O belo como transcendental na tradição clássica', 'Kant: o juízo de gosto', 'Definições contemporâneas de arte', 'Beleza e fé: a via pulchritudinis'],
  explicacao: `
<h3>Clássicos</h3>
<p>Platão (Banquete 210a–212a) descreve a ascensão do belo dos corpos ao Belo em si ${tag('fato')}. Plotino (Enéadas I, 6) vê a beleza como forma que unifica ${tag('fato')}. Tomás: belo é "o que agrada quando visto" (<em>quod visum placet</em>, ST I, q. 5, a. 4, ad 1); requer integridade, proporção e claridade (ST I, q. 39, a. 8) ${tag('fato')}. Discute-se se o belo é transcendental em Tomás ${tag('debate')}.</p>
<h3>Kant</h3>
<p>Na Crítica da Faculdade de Julgar (1790), o juízo de gosto é desinteressado, universal sem conceito e expressa "finalidade sem fim"; distingue belo e sublime ${tag('fato')}.</p>
<h3>Arte contemporânea</h3>
<p>Depois da Fonte de Duchamp (1917), filósofos perguntam o que torna algo arte: Arthur Danto (o "mundo da arte", 1964), George Dickie (teoria institucional) ${tag('fato')}. Roger Scruton (Beleza, 2009) defendeu a beleza como valor real contra o "culto da feiura" ${tag('interpretacao')}.</p>
<h3>Via da beleza</h3>
<p>João Paulo II escreveu a Carta aos Artistas (1999); Bento XVI falou da "via pulchritudinis" como caminho para Deus; Dostoiévski: "a beleza salvará o mundo" (O Idiota) ${tag('fato')}.</p>`,
  vocabulario: [['Quod visum placet', 'O que agrada quando visto.'], ['Integridade, proporção, claridade', 'Condições do belo em Tomás.'], ['Finalidade sem fim', 'Forma do juízo de gosto (Kant).'], ['Sublime', 'Experiência do que excede a medida.'], ['Mundo da arte', 'Contexto teórico que faz algo ser arte (Danto).']],
  exemplos: '<p>Uma catedral gótica tem proporção (geometria), integridade (unidade do conjunto) e claridade (luz dos vitrais): exemplo das três condições tomistas.</p>',
  contexto: `<p>A "estética" como disciplina foi nomeada por Baumgarten (1750) ${tag('fato')}.</p>`,
  argumento: { titulo: 'O belo não é só subjetivo (reconstruído)', tag: 'argumento',
    premissas: ['Discutimos sobre a beleza com razões (proporção, unidade, expressão).', 'Não discutimos com razões sobre puras preferências de paladar.', 'Logo, o juízo de beleza pretende validade além da preferência.'],
    conclusao: 'Portanto, o belo tem algum fundamento no objeto.',
    nota: 'Kant concorda com a pretensão de universalidade, mas a funda na estrutura do sujeito, não no objeto.' },
  objecoes: [{ objecao: '"Gosto não se discute": culturas e épocas divergem sobre o belo.', tag: 'debate', resposta: 'Hume (Do Padrão do Gosto, 1757) admite um padrão formado por críticos experientes. A divergência também existe na ciência sem provar que não haja verdade.' }],
  aplicacao: '<p>Escolha uma obra (música, pintura, edifício) e avalie-a pelas três condições de Tomás.</p>',
  fonte: { obra: 'Tomás, ST I, q. 39, a. 8; Kant, Crítica da Faculdade de Julgar, §§1–9', link: null, orientacao: '<p>Leia o artigo de Tomás e os primeiros parágrafos de Kant. Compare as definições de belo.</p>' },
  perguntas: [
    { p: 'Quais as condições do belo em Tomás?', r: 'Integridade, proporção, claridade.' },
    { p: 'O que é a "finalidade sem fim"?', r: 'A forma de algo que parece ordenado a um fim sem que conceba um fim (Kant).' },
    { p: 'Quem escreveu a Carta aos Artistas?', r: 'João Paulo II (1999).' },
  ],
  exercicios: [
    mc('"Quod visum placet" é de:', ['Platão', 'Tomás', 'Kant', 'Plotino'], 1, 'ST I, q. 5, a. 4, ad 1.'),
    mc('A Crítica da Faculdade de Julgar é de:', ['1781', '1788', '1790', '1797'], 2, 'Kant.'),
    mc('"O mundo da arte" (1964) é de:', ['Dickie', 'Danto', 'Scruton', 'Goodman'], 1, 'Artworld.'),
    mc('"A beleza salvará o mundo" está em:', ['Os Irmãos Karamázov', 'O Idiota', 'Crime e Castigo', 'Os Demônios'], 1, 'Dostoiévski.'),
    disc('O belo é objetivo? Compare Tomás, Kant e Hume.', ['Três posições', 'Argumentos', 'Objeções', 'Conclusão justificada'])],
  resumo: ['Platão e Plotino.', 'Tomás: três condições.', 'Kant: juízo de gosto.', 'Arte contemporânea.', 'Via da beleza.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I, q. 39, a. 8.' }, { texto: 'Kant, Crítica da Faculdade de Julgar (1790).' }, { texto: 'Roger Scruton, Beleza (2009).' }],
  revisao: [['Integridade, proporção, claridade', 'Tomás.'], ['Finalidade sem fim', 'Kant.'], ['Via pulchritudinis', 'Caminho da beleza.']],
  avancado: {
    texto: `<h3>Maritain e Eco</h3>
<p>Maritain (Arte e Escolástica, 1920) desenvolveu uma estética tomista; Umberto Eco escreveu sua tese sobre o problema estético em Tomás (1956) ${tag('fato')}.</p>
<h3>Von Balthasar</h3>
<p>Hans Urs von Balthasar (Glória, 1961–1969) construiu uma "estética teológica": a revelação como forma que se mostra ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, Arte e Escolástica (1920).' }, { texto: 'Hans Urs von Balthasar, Glória: Uma Estética Teológica, vol. 1 (1961).' }],
    exercicios: [
      mc('Arte e Escolástica é de:', ['Gilson', 'Maritain', 'Eco', 'Balthasar'], 1, '1920.'),
      mc('Umberto Eco escreveu tese sobre a estética de:', ['Kant', 'Tomás', 'Platão', 'Croce'], 1, '1956.'),
      mc('"Estética teológica" é projeto de:', ['Balthasar', 'Rahner', 'De Lubac', 'Ratzinger'], 0, 'Glória.'),
      disc('A beleza pode ser caminho para Deus? Avalie com Balthasar e uma objeção.', ['Expõe Balthasar', 'Objeção', 'Avalia', 'Conclusão'])],
  },
}),

avaliacao('m15-6', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>O problema mente-corpo e a consciência, as teorias do significado e da interpretação, e a filosofia do belo.</p>
<h3>Critério do Degrau 11</h3>
<p>Com os módulos 13 e 14, este conclui o degrau de síntese: você deve expor problemas contemporâneos e compará-los com a tradição clássica. A primeira discursiva treina isso.</p>`,
[
  disc('Exponha o problema mente-corpo, três posições e o hilemorfismo. Qual responde melhor ao argumento do conhecimento e ao problema difícil?', ['Três posições fiéis', 'Hilemorfismo', 'Argumentos de Jackson e Chalmers', 'Conclusão justificada']),
  disc('Compare Frege, Kripke e Tomás sobre o significado de um nome, com exemplos.', ['Três teorias', 'Exemplos', 'Comparação', 'Clareza']),
  disc('O belo é objetivo? Responda com Tomás e Kant e aplique a uma obra concreta.', ['Duas posições', 'Obra concreta', 'Avaliação', 'Conclusão']),
]),
];
