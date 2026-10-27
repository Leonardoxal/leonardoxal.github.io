// Módulo 3 — aulas 7 a 10.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm3-7', titulo: 'Eutífron: em busca de uma definição',
  aprendera: ['O que é uma boa definição', 'As tentativas de definir a piedade no Eutífron', 'O "dilema de Eutífron"', 'As respostas teístas ao dilema'],
  explicacao: `
<h3>A cena</h3>
<p>Diante do tribunal, pouco antes de seu processo, Sócrates encontra Eutífron, que vai acusar o próprio pai de homicídio por ter deixado morrer um trabalhador. Eutífron se diz especialista em piedade; Sócrates lhe pede que ensine o que ela é ${tag('fato')}.</p>
<h3>O que Sócrates quer</h3>
<p>Não um exemplo ("processar quem faz o mal"), mas a <strong>forma</strong> (<em>eidos</em>) comum a todos os atos pios, aquilo pelo qual todos são pios (6d–e) ${tag('fato')}. Aqui nasce a exigência de definição: dizer o que algo é, e não apenas apontar casos.</p>
<h3>As tentativas</h3>
<ol>
<li>"Piedade é o que faço agora" — um exemplo, não uma definição.</li>
<li>"Piedade é o que é caro aos deuses" — mas os deuses discordam entre si (na mitologia grega), e o mesmo ato seria pio e ímpio.</li>
<li>"Piedade é o que todos os deuses amam" — leva ao dilema.</li>
<li>"Piedade é a parte da justiça que cuida dos deuses" — mas os deuses não precisam de cuidado; a definição volta em círculo.</li>
</ol>
<h3>O dilema (10a)</h3>
<p>"O pio é amado pelos deuses porque é pio, ou é pio porque é amado?" ${tag('argumento')}. Se é pio porque é amado, a piedade parece arbitrária; se é amado porque é pio, a piedade tem um fundamento independente do amor divino. Transposto para o monoteísmo: o bem é bom porque Deus o quer, ou Deus o quer porque é bom?</p>
<h3>Regras de uma boa definição</h3>
<p>Do diálogo e da tradição lógica posterior se extraem regras ${tag('argumento')}: a definição deve convir a todo o definido e só a ele; não ser circular; dizer a essência, não um acidente; não ser negativa quando pode ser positiva; e não usar termos mais obscuros que o definido.</p>`,
  vocabulario: [['Definição', 'Enunciado que diz o que uma coisa é.'], ['Eidos', 'Forma, aspecto comum: aquilo pelo qual algo é o que é.'], ['Dilema de Eutífron', 'O pio é amado porque é pio ou é pio porque é amado?'], ['Voluntarismo', 'Tese de que o bem depende da vontade de Deus.'], ['Definição circular', 'Que usa o próprio definido.']],
  exemplos: '<p>"Justiça é dar a cada um o seu" (definição antiga, retomada pelo direito romano) passa no teste do diálogo? Vale para todos os casos de justiça? O que significa "o seu"? Aplicar o método do Eutífron a essa definição é ótimo exercício.</p>',
  contexto: `<p>O diálogo se passa perto do Pórtico do Rei, onde se registravam acusações de impiedade — justamente a acusação contra Sócrates ${tag('fato')}.</p>`,
  argumento: { titulo: 'Refutação da definição "pio é o que os deuses amam" (10a–11b, reconstruído)', tag: 'argumento',
    premissas: ['Eutífron admite que os deuses amam o pio porque ele é pio.', 'Se fosse pio porque é amado, então o amor dos deuses seria a causa da piedade.', 'Não pode ser ambos: o amor dos deuses seria causa e efeito da mesma coisa.'],
    conclusao: 'Logo, "ser amado pelos deuses" é uma propriedade do pio (um acidente), não sua essência.',
    nota: 'O argumento distingue essência e propriedade, distinção que Aristóteles sistematizará.' },
  objecoes: [{ objecao: 'O dilema mostra que a moral não pode depender de Deus.', tag: 'debate', resposta: 'Tomistas respondem com uma terceira via: o bem não é anterior a Deus nem arbitrário, porque se funda na própria natureza de Deus, que é o Bem; e as normas morais se fundam na natureza humana criada. Voluntaristas (como certa leitura de Ockham) aceitam o primeiro lado. Teóricos do mandamento divino modificado (Robert Adams, 1979) propõem outras saídas.' }],
  aplicacao: '<p>Escolha um conceito (amizade, coragem, liberdade) e aplique as cinco regras de definição. Escreva três tentativas e refute as duas primeiras.</p>',
  fonte: { obra: 'Platão, Eutífron', link: null, orientacao: '<p>Leia o diálogo inteiro (cerca de 20 páginas). Numere as definições propostas e, para cada uma, escreva a objeção de Sócrates.</p>' },
  perguntas: [
    { p: 'O que Sócrates pede a Eutífron?', r: 'A forma comum a todos os atos pios, não um exemplo.' },
    { p: 'Qual é o dilema de Eutífron?', r: 'O pio é amado pelos deuses porque é pio, ou é pio porque é amado?' },
    { p: 'Qual a resposta tomista ao dilema?', r: 'O bem se funda na natureza de Deus, que é o próprio Bem.' },
  ],
  exercicios: [
    mc('"Piedade é processar quem faz o mal" é:', ['Uma definição correta', 'Um exemplo, não uma definição', 'Uma definição circular', 'Um dilema'], 1, 'Sócrates pede a forma comum.'),
    mc('O voluntarismo moral sustenta que:', ['O bem é bom porque Deus o quer', 'Deus quer o bem porque é bom independentemente dele', 'Não há bem', 'O bem é convenção'], 0, 'Um dos lados do dilema.'),
    mc('Uma boa definição deve:', ['Convir a todo o definido e só a ele', 'Usar termos obscuros', 'Ser circular', 'Citar exemplos'], 0, 'Primeira regra.'),
    mc('Ser amado pelos deuses é, no argumento de Sócrates:', ['A essência do pio', 'Uma propriedade do pio', 'O contrário do pio', 'Irrelevante'], 1, 'Distinção entre essência e propriedade.'),
    disc('Reconstrua o dilema de Eutífron em forma monoteísta e avalie a terceira via tomista. Ela realmente escapa do dilema?', ['Formula o dilema', 'Expõe a terceira via', 'Apresenta objeção', 'Conclusão justificada'])],
  resumo: ['Pedir a forma, não o exemplo.', 'Quatro tentativas de definir a piedade.', 'Dilema de Eutífron (10a).', 'Regras da boa definição.', 'Respostas: voluntarismo, terceira via, mandamento divino modificado.'],
  referencias: [{ texto: 'Platão, Eutífron.' }, { texto: 'Tomás de Aquino, Suma I, q. 6 (a bondade de Deus).' }, { texto: 'Robert M. Adams, "Divine Command Metaethics Modified Again" (1979).' }],
  revisao: [['Dilema de Eutífron', 'O pio é amado porque é pio ou é pio porque é amado? (10a)'], ['Regra da definição', 'Convir a todo o definido e só a ele; não ser circular.'], ['Terceira via', 'O bem se funda na natureza de Deus.']],
  avancado: {
    texto: `<h3>Definição aristotélica</h3>
<p>Aristóteles (Tópicos I, 5; Analíticos Posteriores II) sistematiza: a definição é o enunciado que significa a essência, composto de <strong>gênero próximo</strong> e <strong>diferença específica</strong> ("homem é animal racional"). Distingue ainda os "predicáveis": gênero, espécie, diferença, próprio e acidente — lista que Porfírio fixará na Isagoge ${tag('fato')}.</p>
<h3>Mandamento divino hoje</h3>
<p>A teoria do mandamento divino foi renovada por Robert Adams (Finite and Infinite Goods, 1999): a bondade é semelhança com Deus, o Bem; a obrigação moral é constituída por mandamentos de um Deus bom ${tag('debate')}. Críticos perguntam se essa teoria não reintroduz o dilema no nível da bondade de Deus.</p>
<h3>Definição e Formas</h3>
<p>O Eutífron fala de <em>eidos</em> e <em>idea</em> no sentido de "aspecto comum" (5d, 6d–e). Discute-se se aqui já está a teoria das Formas separadas dos diálogos médios ou apenas a exigência lógica de um universal ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Tópicos I, 4–8.' }, { texto: 'Porfírio, Isagoge.' }, { texto: 'Robert M. Adams, Finite and Infinite Goods (1999), cap. 11.' }],
    exercicios: [
      mc('Definição por gênero próximo e diferença específica é de:', ['Platão', 'Aristóteles', 'Ockham', 'Kant'], 1, '"Homem é animal racional".'),
      mc('A lista dos cinco predicáveis foi fixada por:', ['Porfírio', 'Plotino', 'Agostinho', 'Boécio'], 0, 'Isagoge.'),
      mc('Para Adams, a bondade é:', ['Convenção', 'Semelhança com Deus, o Bem', 'Utilidade', 'Prazer'], 1, 'Finite and Infinite Goods.'),
      disc('Defina "coragem" por gênero e diferença e teste a definição contra três exemplos difíceis (coragem moral, temeridade, coragem de um criminoso).', ['Definição em forma correta', 'Testa os três casos', 'Ajusta a definição', 'Conclusão'])],
  },
}),

aula({
  id: 'm3-8', titulo: 'Fé e razão: Fides et Ratio',
  aprendera: ['A estrutura e a tese central da encíclica Fides et Ratio', 'Os lemas "creio para compreender" e "compreendo para crer"', 'Os erros que a encíclica critica', 'O debate sobre a "filosofia cristã"'],
  prereq: ['Módulo 1, aula 2: Fé, Revelação e razão'],
  explicacao: `
<h3>Uma encíclica sobre filosofia</h3>
<p>João Paulo II publicou a Fides et Ratio em 14 de setembro de 1998 ${tag('fato')}. É um documento raro: um papa trata diretamente do valor da filosofia. A imagem de abertura apresenta fé e razão como duas asas com que o espírito humano se eleva à contemplação da verdade ${tag('doutrina')}.</p>
<h3>Estrutura</h3>
<ul>
<li><strong>Introdução</strong>: "Conhece-te a ti mesmo"; as perguntas que todo ser humano faz (quem sou? de onde venho? para onde vou?).</li>
<li><strong>I. A Revelação da sabedoria de Deus</strong>.</li>
<li><strong>II. Credo ut intellegam</strong> ("creio para compreender"): a fé abre a razão.</li>
<li><strong>III. Intellego ut credam</strong> ("compreendo para crer"): a razão prepara a fé.</li>
<li><strong>IV. A relação entre fé e razão</strong> na história (Padres, Tomás) e o drama da separação moderna.</li>
<li><strong>V. Intervenções do Magistério</strong> em matéria filosófica.</li>
<li><strong>VI. Interação entre teologia e filosofia</strong>.</li>
<li><strong>VII. Exigências e tarefas atuais</strong>.</li>
</ul>
<h3>Tese central</h3>
<p>A razão humana é capaz de alcançar verdades, inclusive metafísicas; a fé não a substitui, mas a purifica e eleva; a separação entre ambas empobrece as duas ${tag('doutrina')}. A Igreja não tem filosofia própria nem canoniza uma em particular (§49), embora recomende Tomás como modelo (§43–44) ${tag('doutrina')}.</p>
<h3>Erros criticados</h3>
<p>A encíclica critica o fideísmo e o "biblicismo", o racionalismo, o cientificismo (só vale o conhecimento científico), o pragmatismo, o historicismo, o ecletismo e o niilismo (§52–55, §86–91) ${tag('doutrina')}.</p>
<h3>Três exigências</h3>
<p>Para que a filosofia esteja em harmonia com a Palavra de Deus, deve recuperar sua dimensão sapiencial (busca do sentido último), confiar na capacidade de conhecer a verdade e ter alcance metafísico, passando do fenômeno ao fundamento (§81–83) ${tag('doutrina')}.</p>`,
  vocabulario: [['Credo ut intellegam', '"Creio para compreender" (Agostinho, Anselmo).'], ['Intellego ut credam', '"Compreendo para crer".'], ['Cientificismo', 'Tese de que só o conhecimento científico é válido.'], ['Niilismo', 'Negação de todo sentido e verdade.'], ['Dimensão sapiencial', 'Busca do sentido último da vida.']],
  exemplos: '<p>Um cientista que diz "só existe o que posso medir" não faz uma afirmação científica (ela não é mensurável), mas filosófica — e cientificista. A encíclica pede que essa tese seja examinada como tese filosófica.</p>',
  contexto: `<p>A encíclica surge após o "fim das grandes narrativas" proclamado pelo pós-modernismo (Lyotard, 1979) e em diálogo implícito com ele ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Por que o cientificismo se refuta (FR §88, reconstrução)', tag: 'argumento',
    premissas: ['O cientificismo afirma: só é conhecimento válido o que é verificado pelas ciências positivas.', 'Essa afirmação não é verificada pelas ciências positivas; é uma tese filosófica.', 'Logo, segundo o próprio critério, ela não seria conhecimento válido.'],
    conclusao: 'Portanto, o cientificismo é autorrefutante.',
    nota: 'Mesma estrutura que a refutação do relativismo na aula 4. A encíclica acrescenta críticas éticas: reduzir valores a emoções.' },
  objecoes: [{ objecao: 'Um papa não deveria dizer o que a filosofia deve ser.', tag: 'debate', resposta: 'A encíclica afirma respeitar a autonomia da filosofia e não impor uma escola (§49); propõe exigências que considera ligadas à própria natureza da razão. Críticos veem nisso, ainda assim, uma tutela; defensores, uma defesa da razão contra o ceticismo.' }],
  aplicacao: '<p>Escolha um dos erros criticados (cientificismo, relativismo, niilismo) e encontre um exemplo dele em algo que você leu ou ouviu nesta semana. Analise-o no Caderno.</p>',
  fonte: { obra: 'João Paulo II, Fides et Ratio, Introdução, caps. II–III e VII', link: LINKS.fidesRatio, orientacao: '<p>Leia a Introdução (§1–6) e os capítulos II–III (§16–35). Depois leia §81–83. Faça uma ficha: tese central, três exigências e dois erros criticados, com os números dos parágrafos.</p>' },
  perguntas: [
    { p: 'Qual a imagem de abertura da encíclica?', r: 'Fé e razão como duas asas para elevar-se à verdade.' },
    { p: 'A Igreja tem uma filosofia oficial?', r: 'Não; não canoniza uma escola (§49), embora recomende Tomás como modelo.' },
    { p: 'Quais são as três exigências do §81–83?', r: 'Dimensão sapiencial, capacidade de conhecer a verdade, alcance metafísico.' },
  ],
  exercicios: [
    mc('Fides et Ratio foi publicada em:', ['1965', '1979', '1998', '2005'], 2, '14 de setembro de 1998.'),
    mc('"Credo ut intellegam" é o título do capítulo:', ['I', 'II', 'III', 'VII'], 1, 'Creio para compreender.'),
    mc('O cientificismo é criticado por:', ['Valorizar a ciência', 'Afirmar que só vale o conhecimento científico', 'Usar matemática', 'Negar Deus'], 1, 'Tese filosófica que se apresenta como científica.'),
    mc('A encíclica, sobre escolas filosóficas, afirma que a Igreja:', ['Impõe o tomismo', 'Não canoniza nenhuma', 'Proíbe a filosofia moderna', 'Rejeita Tomás'], 1, '§49.'),
    disc('Resuma a tese da Fides et Ratio e avalie a objeção de que ela tutela a filosofia. Use pelo menos três parágrafos citados.', ['Resumo fiel', 'Cita três parágrafos', 'Expõe a objeção', 'Avaliação justificada'])],
  resumo: ['Fé e razão: duas asas.', 'Creio para compreender; compreendo para crer.', 'Sem filosofia oficial, Tomás como modelo.', 'Erros: fideísmo, racionalismo, cientificismo, niilismo.', 'Três exigências: sapiencial, verdade, metafísica.'],
  referencias: [{ texto: 'João Paulo II, Fides et Ratio (1998).', link: LINKS.fidesRatio }, { texto: 'Concílio Vaticano I, Dei Filius (1870).' }],
  revisao: [['Fides et Ratio', 'João Paulo II, 1998.'], ['FR §49', 'A Igreja não tem filosofia própria nem canoniza uma.'], ['FR §81–83', 'Exigências: dimensão sapiencial, verdade, metafísica.']],
  avancado: {
    texto: `<h3>O debate sobre a "filosofia cristã" (1931)</h3>
<p>Em 1931, na Sociedade Francesa de Filosofia, Émile Bréhier sustentou que "filosofia cristã" é tão contraditória quanto "matemática cristã": a filosofia é obra da razão, e a fé lhe é estranha ${tag('fato')}. Étienne Gilson respondeu que a Revelação, de fato, introduziu na história noções que a razão depois reconheceu como racionais (criação, pessoa, ser como ato), e que a filosofia medieval é cristã nesse sentido histórico; Jacques Maritain distinguiu a "natureza" da filosofia (sempre racional) do seu "estado" (cristão ou não) ${tag('interpretacao')}. Fides et Ratio retoma esse debate nos §75–77 ${tag('doutrina')}.</p>
<h3>Heidegger e o "círculo quadrado"</h3>
<p>Heidegger (Introdução à Metafísica, 1935) chamou "filosofia cristã" de "ferro de madeira", isto é, contradição: quem tem a resposta da fé não pode fazer a pergunta filosófica radical ${tag('fato')}. É a objeção mais forte ao projeto deste curso, e por isso deve ser estudada.</p>
<h3>Três estados da filosofia</h3>
<p>FR §75–77 distingue a filosofia totalmente independente da Revelação, a filosofia "cristã" (praticada em ligação vital com a fé) e a filosofia como instrumento da teologia ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Étienne Gilson, O Espírito da Filosofia Medieval (1932), caps. 1–2.' }, { texto: 'Martin Heidegger, Introdução à Metafísica (1935), cap. 1.' }, { texto: 'Fides et Ratio, §75–77.', link: LINKS.fidesRatio }],
    exercicios: [
      mc('Quem comparou "filosofia cristã" a "matemática cristã"?', ['Gilson', 'Bréhier', 'Maritain', 'Heidegger'], 1, 'Debate de 1931.'),
      mc('Maritain distinguiu:', ['Fé e razão', 'Natureza e estado da filosofia', 'Platão e Aristóteles', 'Sujeito e objeto'], 1, 'A natureza é racional; o estado pode ser cristão.'),
      mc('"Ferro de madeira" para filosofia cristã é expressão de:', ['Heidegger', 'Kant', 'Nietzsche', 'Russell'], 0, 'Introdução à Metafísica (1935).'),
      disc('Responda à objeção de Heidegger: quem tem fé pode fazer filosofia radical? Use Gilson, Maritain e Fides et Ratio.', ['Expõe a objeção', 'Usa os três autores', 'Argumenta', 'Conclusão honesta'])],
  },
}),

aula({
  id: 'm3-9', titulo: 'Escolas e métodos filosóficos',
  aprendera: ['Os principais métodos da história da filosofia', 'Como cada método produz um tipo de resultado', 'Como identificar o método de um autor', 'Como usar a aba "Ideias" para situar escolas'],
  explicacao: `
<h3>Por que estudar métodos</h3>
<p>Dois filósofos podem discordar não só nas conclusões, mas no próprio modo de investigar. Reconhecer o método de um autor é o primeiro passo para avaliá-lo com justiça.</p>
<h3>Oito métodos</h3>
<ol>
<li><strong>Dialético socrático</strong>: perguntas e refutações em busca de definições (aulas 5–7).</li>
<li><strong>Demonstrativo aristotélico</strong>: silogismos a partir de princípios evidentes; ciência como conhecimento pelas causas (Módulo 4).</li>
<li><strong>Escolástico</strong>: a <em>quaestio</em> — pergunta, objeções ("parece que..."), argumento em contrário ("em sentido contrário..."), resposta ("respondo dizendo...") e solução das objeções (Módulo 8) ${tag('fato')}.</li>
<li><strong>Cartesiano</strong>: dúvida metódica e regras de evidência, análise, síntese e enumeração (Discurso do Método, 1637).</li>
<li><strong>Empirista</strong>: partir da experiência sensível e da indução (Bacon, Locke, Hume).</li>
<li><strong>Transcendental</strong> (Kant): perguntar pelas condições de possibilidade do conhecimento.</li>
<li><strong>Fenomenológico</strong> (Husserl): descrever as coisas tal como aparecem à consciência, suspendendo pressupostos.</li>
<li><strong>Analítico</strong>: esclarecer conceitos pela análise lógica da linguagem (Frege, Russell, Wittgenstein).</li>
</ol>
<p>Acrescentam-se o <strong>hermenêutico</strong> (interpretação, Gadamer) e o <strong>dialético hegeliano</strong> (a verdade como processo de contradições superadas) ${tag('interpretacao')}.</p>
<h3>Escolas</h3>
<p>Uma "escola" é um conjunto de autores que partilham teses e método: platonismo, aristotelismo, estoicismo, tomismo, empirismo, idealismo, fenomenologia, analítica. Use a aba <strong>Ideias</strong> para ver quando nasceu cada uma, de quem bebeu e com quem conviveu.</p>`,
  vocabulario: [['Método', 'Caminho ordenado de investigação.'], ['Quaestio', 'Forma escolástica de discutir uma pergunta.'], ['Condições de possibilidade', 'O que deve ser o caso para que algo seja possível (Kant).'], ['Epoché', 'Suspensão do juízo (céticos; Husserl).'], ['Hermenêutica', 'Teoria e arte da interpretação.']],
  exemplos: '<p>A pergunta "existe liberdade?" seria tratada: por Sócrates, pedindo uma definição de liberdade; por Tomás, numa quaestio com objeções; por Descartes, pela evidência interior da escolha; por Hume, analisando a ideia de necessidade causal; por Kant, como condição da moralidade; por um analítico, examinando o uso de "poderia ter feito de outro modo".</p>',
  contexto: `<p>A sucessão dos métodos reflete a história: o método escolástico nasce nas universidades medievais; o cartesiano, com a revolução científica; o fenomenológico, como resposta à crise dos fundamentos no início do século XX ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Por que avaliar um autor pelo seu próprio método primeiro', tag: 'argumento',
    premissas: ['Uma crítica justa atinge a tese tal como o autor a defende.', 'A tese de um autor depende do método pelo qual foi obtida.', 'Criticar com outro método, sem perceber, pode atingir uma tese que o autor não defende.'],
    conclusao: 'Logo, é preciso primeiro compreender o método do autor e só depois avaliá-lo, inclusive pelo método rival.',
    nota: 'Aplicação da regra de ouro da aula 1 (compreender antes de criticar) ao nível do método.' },
  objecoes: [{ objecao: 'Se cada método produz seu resultado, a filosofia é relativa ao método escolhido.', tag: 'debate', resposta: 'Nem todo método é igualmente adequado a todo objeto; e os métodos podem ser comparados por critérios comuns (coerência, alcance, fidelidade aos fenômenos). Gilson (A Unidade da Experiência Filosófica) argumenta que os fracassos dos sistemas mostram limites reais de certos métodos.' }],
  aplicacao: '<p>Escolha uma pergunta filosófica e escreva como ela seria tratada por três métodos diferentes desta aula.</p>',
  fonte: { obra: 'Descartes, Discurso do Método, parte II; Tomás, Suma I, q. 2, a. 3 (forma da quaestio)', link: LINKS.sumaQ2, orientacao: '<p>Compare a estrutura de um artigo da Suma com as quatro regras de Descartes. Que diferenças de método você percebe?</p>' },
  perguntas: [
    { p: 'Quais as partes de uma quaestio escolástica?', r: 'Objeções, argumento em contrário, resposta e solução das objeções.' },
    { p: 'O que pergunta o método transcendental?', r: 'Pelas condições de possibilidade do conhecimento.' },
    { p: 'O que faz o método fenomenológico?', r: 'Descreve as coisas como aparecem à consciência, suspendendo pressupostos.' },
  ],
  exercicios: [
    mc('A dúvida metódica é característica do método:', ['Escolástico', 'Cartesiano', 'Empirista', 'Socrático'], 1, 'Discurso do Método (1637).'),
    mc('"Parece que... Em sentido contrário... Respondo..." é a forma:', ['Do diálogo socrático', 'Da quaestio escolástica', 'Do ensaio moderno', 'Do aforismo'], 1, 'Método das universidades medievais.'),
    mc('Perguntar pelas "condições de possibilidade" é próprio de:', ['Hume', 'Kant', 'Platão', 'Tomás'], 1, 'Método transcendental.'),
    mc('A análise lógica da linguagem caracteriza a filosofia:', ['Fenomenológica', 'Analítica', 'Hermenêutica', 'Escolástica'], 1, 'Frege, Russell, Wittgenstein.'),
    disc('Escolha dois métodos e mostre como ambos tratariam a pergunta "a alma existe?". Qual lhe parece mais adequado a essa pergunta e por quê?', ['Expõe os dois métodos', 'Aplica à pergunta', 'Compara', 'Conclusão justificada'])],
  resumo: ['Socrático, aristotélico, escolástico, cartesiano, empirista, transcendental, fenomenológico, analítico.', 'Hermenêutico e dialético hegeliano.', 'Compreender o método antes de criticar.'],
  referencias: [{ texto: 'Descartes, Discurso do Método (1637).' }, { texto: 'Étienne Gilson, A Unidade da Experiência Filosófica (1937).' }],
  revisao: [['Quaestio', 'Objeções → em sentido contrário → respondo → solução das objeções.'], ['Método transcendental', 'Condições de possibilidade (Kant).'], ['Método fenomenológico', 'Descrever o que aparece, suspendendo pressupostos (Husserl).']],
  avancado: {
    texto: `<h3>Metafilosofia</h3>
<p>A filosofia que estuda a própria filosofia é chamada metafilosofia. Timothy Williamson (The Philosophy of Philosophy, 2007) defende que a filosofia é contínua com as ciências no uso de argumentos e exemplos; Richard Rorty (A Filosofia e o Espelho da Natureza, 1979) atacou a pretensão da filosofia de "espelhar" a realidade ${tag('debate')}.</p>
<h3>O método dos experimentos mentais</h3>
<p>Muitos argumentos filosóficos usam casos imaginários (o anel de Giges na República II, o gênio maligno de Descartes, os casos Gettier, o "quarto chinês" de Searle). Discute-se o valor de intuições sobre esses casos e se variam entre culturas (filosofia experimental) ${tag('debate')}.</p>
<h3>Gilson e os ciclos</h3>
<p>Em A Unidade da Experiência Filosófica, Gilson sustenta que quando a filosofia toma como modelo outra disciplina (lógica, teologia, física, matemática), acaba em ceticismo, e que a história da filosofia mostra esse padrão repetidamente ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Étienne Gilson, A Unidade da Experiência Filosófica (1937), parte IV.' }, { texto: 'Timothy Williamson, The Philosophy of Philosophy (2007), introdução.' }],
    exercicios: [
      mc('"A Filosofia e o Espelho da Natureza" (1979) é de:', ['Rorty', 'Williamson', 'Gilson', 'Husserl'], 0, 'Richard Rorty.'),
      mc('O anel de Giges é um experimento mental de:', ['Descartes', 'Platão (República II)', 'Searle', 'Gettier'], 1, 'República II, 359c–360d.'),
      mc('Para Gilson, quando a filosofia imita outra disciplina, tende a terminar em:', ['Dogmatismo', 'Ceticismo', 'Teologia', 'Física'], 1, 'Tese de A Unidade da Experiência Filosófica.'),
      disc('Os experimentos mentais são um método confiável em filosofia? Use dois exemplos e a objeção da filosofia experimental.', ['Explica o método', 'Usa dois exemplos', 'Expõe a objeção', 'Conclusão justificada'])],
  },
}),

avaliacao('m3-10', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>A capacidade de ler textos filosóficos, distinguir opinião e conhecimento, discutir a verdade e reconstruir os argumentos de Sócrates nos três diálogos estudados.</p>
<h3>Antes de começar</h3>
<ul><li>Tenha à mão as fichas de leitura da Apologia, do Críton e do Eutífron.</li><li>Revise os cartões do módulo.</li></ul>`,
[
  disc('Escolha um dos três diálogos (Apologia, Críton, Eutífron) e escreva um ensaio de 30 a 50 linhas: pergunta central, termos, tese, reconstrução do argumento principal em premissas, uma objeção e sua avaliação.', ['Pergunta central correta', 'Termos definidos conforme o uso de Platão', 'Argumento reconstruído com fidelidade', 'Objeção séria e avaliação justificada', 'Citações com localização (Stephanus)']),
  disc('A filosofia e a fé podem conviver sem que uma absorva a outra? Responda com Fides et Ratio e com a objeção de Heidegger ou de Bréhier.', ['Expõe a tese da encíclica', 'Expõe a objeção com força', 'Argumenta', 'Conclusão justificada']),
]),
];
