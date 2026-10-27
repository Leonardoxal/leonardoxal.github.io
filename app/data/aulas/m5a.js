// Módulo 5 — Filosofia antiga: aulas 1 a 6.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm5-1', titulo: 'Os pré-socráticos e a pergunta pela physis',
  aprendera: ['Quem foram os primeiros filósofos e o que perguntavam', 'As respostas de Tales, Anaximandro e Anaxímenes', 'O pitagorismo e a crítica de Xenófanes', 'Como conhecemos esses autores: fragmentos e doxografia'],
  prereq: ['Módulo 3: Introdução à filosofia'],
  explicacao: `
<h3>Uma nova pergunta</h3>
<p>No século VI a.C., em Mileto (Jônia), alguns pensadores passaram a perguntar pela <em>arché</em> — o princípio de onde tudo vem — e pela <em>physis</em> — a natureza das coisas —, buscando respostas em causas naturais e não em genealogias de deuses ${tag('fato')}. Aristóteles os chamou de "fisiólogos" (estudiosos da natureza) e os situa no início da filosofia (Metafísica I, 3).</p>
<h3>Os milésios</h3>
<ul>
<li><strong>Tales</strong> (c. 624–546 a.C.): o princípio é a água. Aristóteles conjectura que ele observou que o alimento e as sementes são úmidos ${tag('interpretacao')}.</li>
<li><strong>Anaximandro</strong> (c. 610–546 a.C.): o princípio é o <em>ápeiron</em>, o ilimitado ou indeterminado, de onde surgem os contrários. Seu único fragmento fala das coisas que "pagam a pena" umas às outras segundo a ordem do tempo (DK 12 B1) — uma ideia de justiça cósmica ${tag('fato')}.</li>
<li><strong>Anaxímenes</strong> (c. 585–528 a.C.): o princípio é o ar, que se transforma por condensação e rarefação — primeira tentativa de explicar a diversidade por um processo quantitativo ${tag('interpretacao')}.</li>
</ul>
<h3>Pitágoras e os pitagóricos</h3>
<p>Em Crotona, no sul da Itália, Pitágoras (c. 570–495 a.C.) fundou uma comunidade de vida e estudo. Para os pitagóricos, os números e suas proporções são o princípio das coisas: as consonâncias musicais correspondem a razões simples entre comprimentos de cordas (1:2, 2:3, 3:4) ${tag('fato')}. É difícil separar o que é de Pitágoras do que é de seus seguidores ${tag('debate')}.</p>
<h3>Xenófanes</h3>
<p>Xenófanes de Cólofon criticou os deuses de Homero e Hesíodo, a quem se atribuíam roubos e adultérios, e observou que, se bois e cavalos tivessem mãos, desenhariam deuses com formas de bois e cavalos (DK 21 B15) ${tag('fato')}. Propôs um deus único, que tudo vê e pensa, não semelhante aos mortais.</p>
<h3>Como os conhecemos</h3>
<p>Não temos obras completas desses autores, só <strong>fragmentos</strong> (citações literais em autores posteriores) e <strong>testemunhos</strong> (resumos de doutrinas, a "doxografia", que remonta a Teofrasto). A edição de referência é a de Hermann Diels e Walther Kranz (DK), cuja numeração usamos ${tag('fato')}.</p>`,
  vocabulario: [['Arché', 'Princípio, origem.'], ['Physis', 'Natureza.'], ['Ápeiron', 'O ilimitado de Anaximandro.'], ['Doxografia', 'Coleção de opiniões dos filósofos, feita por autores posteriores.'], ['DK', 'Edição Diels-Kranz dos pré-socráticos; ex.: DK 22 B30.']],
  exemplos: '<p>Quando perguntamos hoje "do que é feita a matéria?", repetimos, com outros métodos, a pergunta de Tales. A química e a física de partículas herdam esse impulso de explicar o múltiplo pelo simples.</p>',
  contexto: `<p>Mileto era cidade comercial em contato com Egito e Mesopotâmia (veja a aba "Ideias") ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que buscar um único princípio (reconstrução do raciocínio milésio)', tag: 'argumento',
    premissas: ['As coisas se transformam umas nas outras (a água vira vapor, o alimento vira carne).', 'Se se transformam, algo permanece através da mudança.', 'O que permanece é o princípio comum de todas as coisas.'],
    conclusao: 'Logo, há um princípio único de onde tudo vem e para onde tudo volta.',
    nota: 'A premissa 2 será discutida por Parmênides e Aristóteles (aulas 2 e 8).' },
  objecoes: [{ objecao: 'As respostas dos milésios eram simplesmente erradas: tudo não é água.', tag: 'argumento', resposta: 'O mérito não está na resposta, mas na pergunta e no método: explicar a natureza por princípios naturais e submeter as explicações a crítica racional. Anaximandro critica Tales, Anaxímenes critica Anaximandro: nasce a tradição crítica.' }],
  aplicacao: '<p>Escolha uma pergunta atual da ciência ("do que é feito o universo?") e mostre em que ela continua e em que difere da pergunta dos milésios.</p>',
  fonte: { obra: 'Aristóteles, Metafísica I, 3–5; fragmentos em Os Pré-Socráticos (coleção Os Pensadores ou edição similar)', link: null, orientacao: '<p>Leia Metafísica I, 3 e identifique como Aristóteles interpreta os primeiros filósofos segundo sua própria teoria das causas. Depois leia os fragmentos de Anaximandro e Xenófanes.</p>' },
  perguntas: [
    { p: 'Qual era o princípio para Anaximandro?', r: 'O ápeiron, o ilimitado.' },
    { p: 'O que os pitagóricos descobriram na música?', r: 'Que as consonâncias correspondem a razões numéricas simples.' },
    { p: 'O que é um fragmento DK?', r: 'Citação literal de um pré-socrático, numerada na edição Diels-Kranz.' },
  ],
  exercicios: [
    mc('Para Anaxímenes, o princípio é:', ['Água', 'Ar', 'Fogo', 'Número'], 1, 'Por condensação e rarefação.'),
    mc('Xenófanes criticou:', ['O atomismo', 'Os deuses antropomórficos de Homero e Hesíodo', 'Os sofistas', 'Platão'], 1, 'Bois desenhariam deuses bois (B15).'),
    mc('Conhecemos os pré-socráticos principalmente por:', ['Obras completas', 'Fragmentos e testemunhos', 'Inscrições', 'Diálogos de Platão apenas'], 1, 'Doxografia.'),
    mc('Os primeiros filósofos são chamados por Aristóteles de:', ['Sofistas', 'Fisiólogos', 'Céticos', 'Teólogos'], 1, 'Estudiosos da physis.'),
    disc('Qual a diferença entre explicar a origem do mundo por um mito (Hesíodo) e por um princípio natural (Tales)? Há algo que o mito faz e a filosofia não faz?', ['Distingue as duas explicações', 'Usa exemplos', 'Considera o valor do mito', 'Conclusão justificada'])],
  resumo: ['Pergunta pela arché e pela physis.', 'Tales: água; Anaximandro: ápeiron; Anaxímenes: ar.', 'Pitagóricos: número.', 'Xenófanes: crítica dos deuses antropomórficos.', 'Fragmentos e doxografia (DK).'],
  referencias: [{ texto: 'Aristóteles, Metafísica I, 3–5.' }, { texto: 'G. S. Kirk, J. E. Raven e M. Schofield, Os Filósofos Pré-Socráticos.' }],
  revisao: [['Ápeiron', 'Ilimitado: princípio de Anaximandro.'], ['DK', 'Diels-Kranz: edição dos pré-socráticos.'], ['Xenófanes B15', 'Bois desenhariam deuses com forma de bois.']],
  avancado: {
    texto: `<h3>Leitura crítica da doxografia</h3>
<p>Harold Cherniss (Aristotle\'s Criticism of Presocratic Philosophy, 1935) mostrou que Aristóteles lê os pré-socráticos pela lente de sua própria teoria das causas, o que distorce em parte o que eles pensavam ${tag('interpretacao')}. Como Teofrasto segue Aristóteles, boa parte da doxografia herda esse filtro.</p>
<h3>Do mito ao logos?</h3>
<p>A fórmula "do mito ao logos" (Wilhelm Nestle, 1940) foi criticada por simplificar: os primeiros filósofos ainda falam de deuses e de justiça cósmica, e o mito continuou presente em Platão ${tag('debate')}. Jean-Pierre Vernant ligou o nascimento da filosofia à pólis e ao espaço público do debate ${tag('interpretacao')}.</p>
<h3>O teorema de Pitágoras</h3>
<p>A relação a² + b² = c² era conhecida na prática por babilônios séculos antes; a atribuição de uma demonstração a Pitágoras é tardia e incerta ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Jean-Pierre Vernant, As Origens do Pensamento Grego (1962).' }, { texto: 'Kirk, Raven e Schofield, Os Filósofos Pré-Socráticos, caps. sobre os milésios.' }],
    exercicios: [
      mc('Cherniss mostrou que Aristóteles:', ['Inventou os pré-socráticos', 'Leu-os pela lente da sua teoria das causas', 'Não os conhecia', 'Era pitagórico'], 1, 'Aristotle\'s Criticism of Presocratic Philosophy (1935).'),
      mc('Vernant ligou o nascimento da filosofia:', ['Ao Egito', 'À pólis e ao debate público', 'Ao cristianismo', 'À Índia'], 1, 'As Origens do Pensamento Grego.'),
      mc('A relação do "teorema de Pitágoras" era conhecida na prática por:', ['Ninguém antes dele', 'Babilônios', 'Romanos', 'Chineses do século XV'], 1, 'Séculos antes de Pitágoras.'),
      disc('Avalie a fórmula "do mito ao logos" com exemplos dos fragmentos estudados.', ['Explica a fórmula', 'Usa fragmentos', 'Apresenta a crítica', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-2', titulo: 'Parmênides e Heráclito',
  aprendera: ['O Logos e o fluxo em Heráclito', 'O poema de Parmênides: via da verdade e via da opinião', 'Os paradoxos de Zenão', 'As respostas pluralistas: Empédocles, Anaxágoras e os atomistas'],
  prereq: ['Aula 1: Os pré-socráticos'],
  explicacao: `
<h3>Heráclito de Éfeso (fl. c. 500 a.C.)</h3>
<p>Heráclito escreveu de modo enigmático — os antigos o chamavam "o obscuro" ${tag('fato')}. Temas centrais:</p>
<ul>
<li><strong>O Logos</strong>: uma razão comum que governa tudo; devemos ouvir não a ele, mas ao Logos (DK 22 B50).</li>
<li><strong>Fluxo</strong>: nos mesmos rios entramos, e outras águas correm (B12); Platão e Aristóteles resumiram sua doutrina como "tudo flui".</li>
<li><strong>Unidade dos contrários</strong>: o caminho para cima e para baixo é um só (B60); a guerra é pai de todas as coisas (B53).</li>
<li>O mundo é um fogo sempre vivo, que se acende e se apaga com medida (B30).</li>
</ul>
<h3>Parmênides de Eleia (c. 515–450 a.C.)</h3>
<p>Num poema, uma deusa revela dois caminhos ${tag('fato')}: o da <strong>verdade</strong> — "é, e não é possível não ser" — e o da <strong>opinião</strong> dos mortais, que confundem ser e não-ser (B2, B6). O não-ser não pode ser pensado nem dito; pensar e ser são o mesmo (B3). Daí, no fragmento B8, os atributos do ser: ingênito, imperecível, uno, contínuo, imóvel, completo ${tag('argumento')}. A mudança e a multiplicidade seriam aparência.</p>
<h3>Zenão</h3>
<p>Zenão de Eleia, discípulo de Parmênides, formulou paradoxos contra o movimento e a pluralidade ${tag('fato')}: Aquiles nunca alcança a tartaruga (deve sempre chegar primeiro onde ela estava); a flecha em voo está parada a cada instante. Os paradoxos obrigaram a pensar o infinito e o contínuo.</p>
<h3>Os pluralistas</h3>
<p>Para salvar a mudança sem violar Parmênides (nada vem do nada), os sucessores multiplicaram os princípios ${tag('interpretacao')}: <strong>Empédocles</strong> (quatro raízes — terra, água, ar, fogo — movidas por Amor e Ódio); <strong>Anaxágoras</strong> (infinitas sementes ordenadas por um Intelecto, <em>Nous</em>); <strong>Leucipo e Demócrito</strong> (átomos indivisíveis e o vazio).</p>`,
  vocabulario: [['Logos', 'Razão, discurso, medida comum (Heráclito).'], ['Unidade dos contrários', 'Os opostos formam uma unidade em tensão.'], ['Via da verdade', 'O caminho do "é" (Parmênides).'], ['Paradoxo de Zenão', 'Argumento contra o movimento ou a pluralidade.'], ['Nous', 'Intelecto ordenador (Anaxágoras).']],
  exemplos: `<p>O paradoxo de Aquiles: para alcançar a tartaruga, Aquiles precisa percorrer infinitos trechos (metade, metade da metade...). A matemática moderna mostra que uma soma infinita pode ter valor finito (1/2 + 1/4 + 1/8 + ... = 1), mas filósofos ainda discutem se isso resolve o problema conceitual ${tag('debate')}.</p>`,
  contexto: `<p>Eleia ficava no sul da Itália, região de influência pitagórica. Platão dedicou ao encontro de Parmênides e do jovem Sócrates o diálogo Parmênides (Degrau 5) ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Parmênides contra o vir a ser (B8, reconstruído)', tag: 'argumento',
    premissas: ['Se algo vem a ser, vem do ser ou do não-ser.', 'Não vem do ser, pois já seria.', 'Não vem do não-ser, pois do nada nada vem e o não-ser não pode ser pensado.'],
    conclusao: 'Logo, nada vem a ser: o ser é ingênito.',
    nota: 'Aristóteles responderá distinguindo o ser em ato e o ser em potência: algo vem a ser do que é em potência (aula 8).' },
  objecoes: [{ objecao: 'Os sentidos mostram claramente que as coisas mudam.', tag: 'argumento', resposta: 'Parmênides responde que os sentidos enganam e só a razão julga. A objeção dos sentidos não basta: é preciso mostrar onde o argumento erra, como fará Aristóteles com a distinção entre ato e potência.' }],
  aplicacao: '<p>Escreva o paradoxo da flecha com suas palavras e proponha uma resposta. Depois compare com a resposta de Aristóteles (Física VI, 9).</p>',
  fonte: { obra: 'Fragmentos de Heráclito (B1, B12, B30, B50, B53, B60) e Parmênides (B2, B3, B6, B8)', link: null, orientacao: '<p>Leia os fragmentos indicados numa edição dos pré-socráticos. Para cada um, escreva uma frase de interpretação e indique se ela é certa ou discutível.</p>' },
  perguntas: [
    { p: 'O que é o Logos em Heráclito?', r: 'A razão comum que governa todas as coisas.' },
    { p: 'Quais são os dois caminhos do poema de Parmênides?', r: 'O da verdade ("é") e o da opinião.' },
    { p: 'O que os atomistas propuseram?', r: 'Átomos indivisíveis e o vazio.' },
  ],
  exercicios: [
    mc('"Pensar e ser são o mesmo" é fragmento de:', ['Heráclito', 'Parmênides', 'Zenão', 'Demócrito'], 1, 'DK 28 B3.'),
    mc('O paradoxo de Aquiles e a tartaruga é de:', ['Parmênides', 'Zenão', 'Heráclito', 'Empédocles'], 1, 'Zenão de Eleia.'),
    mc('Para Empédocles, as coisas são formadas por:', ['Átomos', 'Quatro raízes movidas por Amor e Ódio', 'Números', 'Água'], 1, 'Terra, água, ar, fogo.'),
    mc('O argumento de Parmênides conclui que:', ['Tudo flui', 'Nada vem a ser', 'Há átomos', 'O Nous ordena tudo'], 1, 'O ser é ingênito.'),
    disc('Heráclito e Parmênides representam duas atitudes diante da mudança. Reconstrua a posição de cada um e diga qual problema cada uma deixa para a filosofia posterior.', ['Expõe Heráclito', 'Expõe Parmênides', 'Identifica o problema herdado', 'Clareza'])],
  resumo: ['Heráclito: Logos, fluxo, contrários.', 'Parmênides: "é"; o ser ingênito, uno, imóvel.', 'Zenão: paradoxos.', 'Pluralistas: Empédocles, Anaxágoras, atomistas.'],
  referencias: [{ texto: 'Fragmentos de Heráclito e Parmênides (DK 22 e 28).' }, { texto: 'Aristóteles, Física I, 2–3 e VI, 9.' }, { texto: 'Kirk, Raven e Schofield, Os Filósofos Pré-Socráticos.' }],
  revisao: [['Parmênides B3', 'Pensar e ser são o mesmo.'], ['Heráclito B50', 'Ouvir não a mim, mas ao Logos.'], ['Zenão', 'Aquiles e a tartaruga; a flecha.']],
  avancado: {
    texto: `<h3>Interpretações do "é"</h3>
<p>O que Parmênides quer dizer com "é" (<em>esti</em>)? Leituras: existencial ("existe"), predicativa ("é algo"), veritativa ("é verdade"), ou uma fusão de sentidos (Charles Kahn) ${tag('debate')}. A escolha muda o argumento.</p>
<h3>Heráclito e o Logos cristão</h3>
<p>O Prólogo de João fala do Logos; Justino afirma que Heráclito viveu "segundo o Logos". Historiadores discutem quanto do conceito joanino vem da filosofia grega, do judaísmo (a Sabedoria, a Palavra criadora) ou de ambos ${tag('debate')}.</p>
<h3>Zenão e a matemática</h3>
<p>Bertrand Russell considerou os paradoxos de Zenão profundos e via na análise moderna do contínuo (Cantor, Weierstrass) a primeira resposta satisfatória ${tag('interpretacao')}. Outros (como Wesley Salmon) organizaram os debates contemporâneos sobre os paradoxos.</p>`,
    leituras: [{ texto: 'Charles Kahn, Essays on Being (2009).' }, { texto: 'Wesley Salmon (org.), Zeno\'s Paradoxes (1970).' }],
    exercicios: [
      mc('A leitura "veritativa" do esti significa:', ['Existe', 'É verdade', 'É algo', 'Muda'], 1, 'Uma das interpretações.'),
      mc('Justino afirmou que Heráclito viveu:', ['Segundo o Logos', 'Contra os deuses', 'Como cético', 'Como atomista'], 0, 'Apologia.'),
      mc('A análise moderna do contínuo associada à resposta a Zenão envolve:', ['Cantor e Weierstrass', 'Kant e Hegel', 'Tomás e Escoto', 'Bacon e Locke'], 0, 'Século XIX.'),
      disc('A soma infinita convergente resolve o paradoxo de Aquiles? Defenda uma posição.', ['Explica o paradoxo', 'Explica a solução matemática', 'Discute o resíduo conceitual', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-3', titulo: 'Os sofistas e Sócrates',
  aprendera: ['Quem foram os sofistas e o que ensinavam', 'As teses de Protágoras e Górgias', 'A oposição entre natureza (physis) e convenção (nomos)', 'Em que Sócrates se distingue dos sofistas'],
  explicacao: `
<h3>Professores da pólis</h3>
<p>No século V a.C., com a democracia ateniense, cresceu a demanda por saber falar em assembleias e tribunais. Os <strong>sofistas</strong> ("especialistas em saber") eram professores itinerantes que cobravam para ensinar retórica e "excelência" política ${tag('fato')}. A má fama que o termo ganhou deve-se em boa parte a Platão ${tag('interpretacao')}.</p>
<h3>Protágoras</h3>
<p>Protágoras de Abdera afirmou que o homem é a medida de todas as coisas, das que são, que são, e das que não são, que não são (DK 80 B1) ${tag('fato')}. Sobre os deuses, disse não poder saber se existem ou não, pela obscuridade do assunto e brevidade da vida (B4) — um agnosticismo antigo. No Teeteto, Platão interpreta B1 como relativismo: o que parece a cada um é verdadeiro para ele (aula 4 do Módulo 3).</p>
<h3>Górgias</h3>
<p>Górgias de Leontinos, mestre da retórica, num tratado Sobre o não-ser, defendeu três teses provocadoras: nada existe; se existisse, não seria cognoscível; se fosse cognoscível, não seria comunicável ${tag('fato')}. No Elogio de Helena, apresenta a palavra (<em>logos</em>) como "grande soberano" que age sobre a alma como os remédios sobre o corpo.</p>
<h3>Natureza e convenção</h3>
<p>Os sofistas discutiram se as leis e a moral existem por natureza (<em>physis</em>) ou por convenção (<em>nomos</em>). Antifonte opôs a natureza às leis; Trasímaco (República I) afirma que a justiça é o interesse do mais forte; Cálicles (Górgias) diz que, por natureza, o forte deve ter mais ${tag('fato')}. Essa discussão é a origem do debate sobre lei natural (Módulo 13).</p>
<h3>Sócrates não é um sofista</h3>
<p>Sócrates também discutia em público, mas ${tag('interpretacao')}: não cobrava; não dizia ensinar, mas examinar; buscava definições verdadeiras, não a vitória; e afirmava que há um bem que não depende da convenção. Aristófanes, nas Nuvens, o retratou como sofista — prova de que os atenienses os confundiam.</p>`,
  vocabulario: [['Sofista', 'Professor de retórica e excelência política no século V a.C.'], ['Homo mensura', '"O homem é a medida" (Protágoras).'], ['Physis × nomos', 'Natureza × convenção.'], ['Agnosticismo', 'Afirmação de não saber se os deuses existem.'], ['Eristica', 'Arte de vencer na discussão.']],
  exemplos: '<p>"A moral é só uma construção social" é uma tese do tipo nomos; "há coisas que são injustas em qualquer sociedade" é do tipo physis. Esse debate de 2500 anos continua em questões de direitos humanos.</p>',
  contexto: `<p>Atenas, no tempo de Péricles (c. 461–429 a.C.), era o centro político e cultural do mundo grego; a Guerra do Peloponeso (431–404) abalou suas certezas morais, como mostra Tucídides ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Trasímaco e a resposta de Sócrates (República I, 338c–342e, reconstruído)', tag: 'argumento',
    premissas: ['Trasímaco: a justiça é o interesse do mais forte, pois os governantes fazem leis em seu proveito.', 'Sócrates: os governantes às vezes erram sobre o próprio interesse.', 'Se a justiça é obedecer às leis, às vezes será justo fazer o que não é do interesse do mais forte.'],
    conclusao: 'Logo, a definição de Trasímaco é incoerente com a sua própria premissa.',
    nota: 'Trasímaco responde que o governante "em sentido estrito", como o médico, não erra. Sócrates então argumenta que toda arte visa o bem de seu objeto, não de quem a exerce.' },
  objecoes: [{ objecao: 'Os sofistas eram pensadores sérios e Platão os caricaturou.', tag: 'debate', resposta: 'Historiadores como G. B. Kerferd (O movimento sofista, 1981) reabilitaram os sofistas como pensadores originais. É razoável ler Platão como adversário e procurar reconstruir as melhores versões das posições sofistas.' }],
  aplicacao: '<p>Escolha uma regra moral e discuta: ela existe por natureza ou por convenção? Use argumentos dos dois lados.</p>',
  fonte: { obra: 'Platão, República I, 336b–354c; Górgias 482c–486d', link: null, orientacao: '<p>Leia o debate com Trasímaco no livro I da República. Reconstrua a tese dele e as três refutações de Sócrates. Avalie se Trasímaco foi realmente refutado.</p>' },
  perguntas: [
    { p: 'O que afirmou Protágoras sobre o homem?', r: 'Que é a medida de todas as coisas (B1).' },
    { p: 'Quais as três teses de Górgias?', r: 'Nada existe; se existisse, não seria cognoscível; se fosse, não seria comunicável.' },
    { p: 'Como Trasímaco define a justiça?', r: 'Como o interesse do mais forte.' },
  ],
  exercicios: [
    mc('A oposição physis × nomos significa:', ['Corpo × alma', 'Natureza × convenção', 'Ser × não-ser', 'Ato × potência'], 1, 'Debate sofista.'),
    mc('"Não posso saber se os deuses existem" é atitude de:', ['Górgias', 'Protágoras', 'Trasímaco', 'Sócrates'], 1, 'B4.'),
    mc('A diferença entre Sócrates e os sofistas inclui:', ['Sócrates cobrava mais', 'Sócrates buscava definições verdadeiras, não a vitória', 'Sócrates ensinava retórica', 'Não havia diferença'], 1, 'Elenchos × erística.'),
    mc('A comédia que confunde Sócrates com um sofista é:', ['As Rãs', 'As Nuvens', 'Os Cavaleiros', 'As Vespas'], 1, 'Aristófanes.'),
    disc('Escreva o steelman da tese de Trasímaco e avalie se as respostas de Sócrates no livro I a refutam.', ['Steelman fiel e forte', 'Reconstrói as respostas', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Sofistas: professores de retórica.', 'Protágoras: homem-medida; agnosticismo.', 'Górgias: três teses; poder do logos.', 'Physis × nomos; Trasímaco e Cálicles.', 'Sócrates: exame em busca da verdade.'],
  referencias: [{ texto: 'Platão, Protágoras; República I; Górgias.' }, { texto: 'G. B. Kerferd, O Movimento Sofista (1981).' }],
  revisao: [['Protágoras B1', 'O homem é a medida de todas as coisas.'], ['Trasímaco', 'Justiça é o interesse do mais forte (República I).'], ['Physis × nomos', 'Natureza × convenção.']],
  avancado: {
    texto: `<h3>A reabilitação dos sofistas</h3>
<p>Hegel já via nos sofistas o momento da subjetividade; George Grote (História da Grécia, século XIX) os defendeu como educadores; Kerferd e Jacqueline de Romilly (Os grandes sofistas na Atenas de Péricles, 1988) mostraram seu papel na formação da racionalidade política ${tag('interpretacao')}.</p>
<h3>Relativismo de Protágoras: leituras</h3>
<p>B1 pode ser lida como relativismo perceptivo (o vento é frio para quem sente frio), relativismo de valores (o justo é o que cada cidade julga justo) ou relativismo radical da verdade. O Teeteto parte da primeira e chega à terceira; estudiosos discutem se Platão é fiel a Protágoras ${tag('debate')}.</p>
<h3>O Grande Discurso do Protágoras</h3>
<p>No diálogo Protágoras (320c–328d), o sofista narra um mito: Zeus deu a todos os homens o pudor e a justiça, por isso a virtude política pode ser ensinada a todos. É uma defesa da democracia que Platão apresenta com respeito ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Platão, Protágoras 320c–328d.' }, { texto: 'Jacqueline de Romilly, Os Grandes Sofistas na Atenas de Péricles (1988).' }],
    exercicios: [
      mc('O "Grande Discurso" de Protágoras defende que:', ['Só os ricos têm virtude', 'A virtude política pode ser ensinada a todos', 'Os deuses não existem', 'Nada existe'], 1, 'Mito de Prometeu e Zeus.'),
      mc('"Os grandes sofistas na Atenas de Péricles" é de:', ['Kerferd', 'Romilly', 'Grote', 'Vernant'], 1, 'Jacqueline de Romilly (1988).'),
      mc('A leitura de B1 como "o vento é frio para quem sente frio" é relativismo:', ['De valores', 'Perceptivo', 'Radical', 'Teológico'], 1, 'Ponto de partida do Teeteto.'),
      disc('Compare as três leituras do relativismo de Protágoras e diga qual delas é refutada pela autorrefutação do Teeteto.', ['Expõe as três leituras', 'Aplica a autorrefutação', 'Distingue o que é atingido', 'Conclusão'])],
  },
}),

aula({
  id: 'm5-4', titulo: 'Mênon: a virtude pode ser ensinada?',
  aprendera: ['A pergunta e a estrutura do Mênon', 'O paradoxo da investigação', 'A teoria da reminiscência e a lição de geometria', 'A conclusão do diálogo sobre a virtude'],
  prereq: ['Módulo 3: aulas de Sócrates e de opinião e conhecimento'],
  explicacao: `
<h3>A pergunta</h3>
<p>Mênon, jovem tessálio, abre o diálogo perguntando se a virtude se ensina, se se adquire pela prática, se vem por natureza ou de outro modo (70a). Sócrates responde que não sabe sequer o que é a virtude — e antes de saber se ela se ensina é preciso saber o que ela é ${tag('fato')}.</p>
<h3>Tentativas de definição</h3>
<p>Mênon dá uma lista de virtudes (do homem, da mulher, da criança) — um "enxame", diz Sócrates, quando se pedia a unidade; depois, "capacidade de governar" e "desejar o belo e ser capaz de obtê-lo". Todas falham ${tag('fato')}.</p>
<h3>O paradoxo da investigação</h3>
<p>Irritado, Mênon propõe um paradoxo (80d–e) ${tag('argumento')}: como procurar o que não se sabe? Se não sei o que procuro, não o reconhecerei ao encontrá-lo; se já sei, não preciso procurar. Logo, a investigação é impossível.</p>
<h3>A reminiscência</h3>
<p>Sócrates responde com um relato de sacerdotes: a alma é imortal, já conheceu todas as coisas, e aprender é recordar (<em>anamnesis</em>) (81a–d). Para mostrar, interroga um escravo de Mênon sobre como duplicar a área de um quadrado (82b–85b): o escravo erra, entra em aporia e, por perguntas, chega à resposta — o lado do novo quadrado é a diagonal do antigo ${tag('fato')}. Sócrates conclui que ele "tirou de si" o conhecimento.</p>
<h3>Conclusão</h3>
<p>Pelo método das hipóteses, o diálogo examina: se a virtude é conhecimento, ensina-se. Mas não há mestres de virtude (políticos virtuosos não conseguem ensiná-la aos filhos). A virtude dos grandes homens seria então opinião verdadeira, dada por um favor divino (99e–100b) — conclusão provisória, pois falta saber o que a virtude é ${tag('interpretacao')}.</p>`,
  vocabulario: [['Anamnesis', 'Reminiscência: aprender como recordar.'], ['Paradoxo de Mênon', 'Argumento de que a investigação é impossível.'], ['Método das hipóteses', 'Examinar consequências de uma suposição.'], ['Aporia', 'Impasse produtivo.']],
  exemplos: '<p>Quando um professor faz perguntas até o aluno descobrir sozinho uma solução matemática, usa o "método socrático" do Mênon, ainda que não aceite a teoria da reminiscência.</p>',
  contexto: `<p>Ânito, que aparece no diálogo defendendo os políticos atenienses e advertindo Sócrates, será um dos acusadores no processo de 399 a.C. ${tag('fato')}.</p>`,
  argumento: { titulo: 'O paradoxo da investigação (80e, reconstruído)', tag: 'argumento',
    premissas: ['Ou se sabe o que se procura, ou não se sabe.', 'Se se sabe, não é preciso procurar.', 'Se não se sabe, não se pode procurar, pois não se saberia o que procurar nem se reconheceria ao encontrar.'],
    conclusao: 'Logo, a investigação é impossível ou inútil.',
    nota: 'O dilema depende de um "saber" tudo ou nada. Respostas: a reminiscência (Platão), o conhecimento parcial e o conhecimento implícito (Aristóteles, Analíticos Posteriores I, 1).' },
  objecoes: [{ objecao: 'O escravo apenas seguiu as perguntas sugestivas de Sócrates.', tag: 'debate', resposta: 'A crítica é antiga. Defensores observam que Sócrates não afirma a resposta e que o escravo reconhece os próprios erros. Mesmo sem a reminiscência, o episódio mostra que a razão pode reconhecer verdades necessárias por si.' }],
  aplicacao: '<p>Faça com alguém (ou consigo mesmo) o experimento do quadrado: como obter um quadrado com o dobro da área? Registre os erros e o caminho até a resposta.</p>',
  fonte: { obra: 'Platão, Mênon', link: null, orientacao: '<p>Leia o diálogo inteiro (cerca de 40 páginas). Desenhe as figuras da lição de geometria (82b–85b) e acompanhe as respostas do escravo.</p>' },
  perguntas: [
    { p: 'Qual é a pergunta inicial de Mênon?', r: 'Se a virtude pode ser ensinada.' },
    { p: 'O que é a reminiscência?', r: 'A tese de que aprender é recordar o que a alma já conheceu.' },
    { p: 'Qual a resposta do problema do quadrado?', r: 'O lado do quadrado de área dupla é a diagonal do original.' },
  ],
  exercicios: [
    mc('O paradoxo de Mênon conclui que:', ['A virtude é conhecimento', 'A investigação é impossível', 'A alma é mortal', 'Tudo flui'], 1, 'Dilema do saber e não saber.'),
    mc('A lição de geometria é dada:', ['A Mênon', 'A um escravo de Mênon', 'A Ânito', 'A Teeteto'], 1, '82b–85b.'),
    mc('A conclusão provisória sobre a virtude dos grandes homens é que ela vem:', ['Do ensino', 'Da natureza', 'De um favor divino, como opinião verdadeira', 'Dos sofistas'], 2, '99e–100b.'),
    mc('Ânito, no diálogo, será depois:', ['Discípulo de Platão', 'Acusador de Sócrates', 'Sofista', 'Pitagórico'], 1, 'Processo de 399 a.C.'),
    disc('A reminiscência é a única resposta ao paradoxo de Mênon? Proponha outra e compare.', ['Reconstrói o paradoxo', 'Expõe a reminiscência', 'Propõe alternativa (ex.: Aristóteles)', 'Comparação justificada'])],
  resumo: ['O que é a virtude antes de se ela se ensina.', 'Paradoxo da investigação.', 'Reminiscência e lição de geometria.', 'Virtude como opinião verdadeira dada pelos deuses (provisório).'],
  referencias: [{ texto: 'Platão, Mênon.' }, { texto: 'Aristóteles, Analíticos Posteriores I, 1 (resposta ao paradoxo).' }],
  revisao: [['Paradoxo de Mênon', '80d–e: como procurar o que não se sabe?'], ['Anamnesis', 'Aprender é recordar.'], ['Lição do quadrado', 'O lado do quadrado duplo é a diagonal.']],
  avancado: {
    texto: `<h3>Inatismo depois de Platão</h3>
<p>Agostinho trocou a reminiscência pela iluminação divina; Descartes e Leibniz defenderam ideias inatas; Locke as criticou (Ensaio, livro I); Noam Chomsky (século XX) falou de uma "gramática universal" inata, invocando expressamente Platão ("o problema de Platão") ${tag('fato')}. Tomás de Aquino rejeita as ideias inatas: o intelecto agente abstrai as formas a partir dos sentidos (Suma I, q. 84) ${tag('argumento')}.</p>
<h3>A resposta de Aristóteles</h3>
<p>Nos Analíticos Posteriores (I, 1), Aristóteles responde ao paradoxo: podemos saber algo universalmente e não saber em particular; por exemplo, sabemos que todo triângulo tem ângulos iguais a dois retos e reconhecemos que esta figura também tem, ao perceber que é triângulo ${tag('argumento')}.</p>
<h3>Hipóteses e geometria</h3>
<p>O método das hipóteses (86e–87b) é emprestado dos geômetras: em vez de responder diretamente, pergunta-se sob que condição a tese seria verdadeira. É antecedente da análise geométrica e do método hipotético-dedutivo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Suma I, q. 84, a. 3 (contra as ideias inatas).' }, { texto: 'Gail Fine, "Inquiry in the Meno" (1992).' }],
    exercicios: [
      mc('Tomás de Aquino explica o conhecimento intelectual por:', ['Reminiscência', 'Abstração pelo intelecto agente', 'Ideias inatas', 'Iluminação direta'], 1, 'Suma I, q. 84–85.'),
      mc('O "problema de Platão" na linguística é associado a:', ['Chomsky', 'Saussure', 'Wittgenstein', 'Frege'], 0, 'Aquisição da linguagem.'),
      mc('A resposta de Aristóteles ao paradoxo distingue:', ['Ato e potência na alma', 'Saber universalmente e saber em particular', 'Ser e não-ser', 'Fé e razão'], 1, 'Analíticos Posteriores I, 1.'),
      disc('Compare reminiscência (Platão), iluminação (Agostinho) e abstração (Tomás) como respostas ao paradoxo de Mênon.', ['Expõe as três', 'Relaciona com o paradoxo', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-5', titulo: 'Fédon e a alma',
  aprendera: ['A cena e o tema do Fédon', 'A filosofia como preparação para a morte', 'Os argumentos pela imortalidade da alma', 'As objeções de Símias e Cebes'],
  prereq: ['Aula 4: Mênon'],
  explicacao: `
<h3>O último dia de Sócrates</h3>
<p>Fédon narra a Equécrates as últimas horas de Sócrates na prisão, as conversas sobre a alma e a morte, e o momento em que ele bebe a cicuta ${tag('fato')}. Platão diz que não estava presente por doença (59b).</p>
<h3>Filosofia e morte</h3>
<p>Sócrates diz que os verdadeiros filósofos se exercitam para morrer (64a; 67e): se a morte é separação da alma e do corpo, e o filósofo busca a verdade pela alma, libertando-se das distrações do corpo, sua vida é uma preparação para a morte ${tag('argumento')}.</p>
<h3>Os argumentos</h3>
<ol>
<li><strong>Cíclico</strong> (70c–72e): os contrários vêm dos contrários; o vivo vem do morto e o morto do vivo; logo, as almas existem depois da morte para retornar.</li>
<li><strong>Da reminiscência</strong> (72e–77a): conhecemos o "Igual em si" que nenhum objeto sensível realiza perfeitamente; logo, a alma o conheceu antes do nascimento.</li>
<li><strong>Da afinidade</strong> (78b–84b): a alma se parece com o invisível, imutável e divino; o corpo, com o visível e mutável; logo, a alma é indissolúvel ou quase.</li>
<li><strong>Final</strong> (102a–107b): a alma traz a vida a tudo o que ocupa; uma Forma não admite seu contrário; logo, a alma não admite a morte.</li>
</ol>
<h3>As objeções</h3>
<p>Símias: a alma poderia ser como a harmonia de uma lira, invisível e bela, mas que desaparece quando a lira se quebra. Cebes: a alma poderia durar mais que muitos corpos, como um tecelão que gasta muitos mantos, e ainda assim um dia perecer ${tag('argumento')}. As objeções motivam o argumento final, que pressupõe a teoria das Formas.</p>
<h3>A morte</h3>
<p>As últimas palavras de Sócrates pedem a Críton que pague um galo a Asclépio (118a), o deus da cura. Desde a Antiguidade se discute o sentido: gratidão por uma "cura" da vida? ironia? piedade simples? ${tag('debate')}</p>`,
  vocabulario: [['Psyché', 'Alma, princípio de vida e de pensamento.'], ['Forma (eidos)', 'Realidade inteligível e imutável (o Igual em si).'], ['Argumento da afinidade', 'A alma se assemelha ao divino e imutável.'], ['Harmonia', 'Objeção de Símias: a alma como afinação do corpo.']],
  exemplos: '<p>A objeção de Símias é a ancestral de uma visão moderna: a mente como propriedade do cérebro, que deixa de existir quando o cérebro morre.</p>',
  contexto: `<p>Fédon de Élis, ex-escravo, tornou-se discípulo de Sócrates e fundou uma escola em Élis ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento final (102a–107b, reconstruído)', tag: 'argumento',
    premissas: ['A alma é aquilo que traz vida ao corpo.', 'O que traz essencialmente uma Forma não pode admitir a Forma contrária (como o fogo, que traz o calor, não admite o frio).', 'A morte é o contrário da vida.'],
    conclusao: 'Logo, a alma não admite a morte: é imortal.',
    nota: 'Cebes aceita; críticos modernos observam que o argumento mostra que a alma não pode estar morta, mas não que não possa deixar de existir (como a neve, que não admite o calor, mas derrete).' },
  objecoes: [{ objecao: 'Se a alma é a harmonia do corpo, ela morre com ele.', tag: 'debate', resposta: 'Sócrates responde (91c–95a): a harmonia depende de seus componentes, mas a alma governa e se opõe ao corpo; e uma harmonia não pode ser mais ou menos harmonia, enquanto as almas são mais ou menos virtuosas. O debate continua na filosofia da mente.' }],
  aplicacao: '<p>Escolha um dos quatro argumentos e escreva-o em premissas. Depois, escreva a objeção moderna mais forte que você conhece e uma resposta possível.</p>',
  fonte: { obra: 'Platão, Fédon', link: null, orientacao: '<p>Leia o diálogo inteiro. Faça uma tabela com os quatro argumentos, sua premissa decisiva e a objeção que o atinge.</p>' },
  perguntas: [
    { p: 'Por que, para Sócrates, a filosofia é preparação para a morte?', r: 'Porque o filósofo busca a verdade pela alma, libertando-se do corpo, e a morte é separação de alma e corpo.' },
    { p: 'Qual a objeção de Símias?', r: 'A alma seria como a harmonia de uma lira, que desaparece quando a lira se quebra.' },
    { p: 'Quais foram as últimas palavras de Sócrates?', r: 'Que se devia um galo a Asclépio (118a).' },
  ],
  exercicios: [
    mc('O argumento da reminiscência no Fédon usa o exemplo do:', ['Fogo', 'Igual em si', 'Tecelão', 'Escravo'], 1, '74a–75d.'),
    mc('A objeção do tecelão e dos mantos é de:', ['Símias', 'Cebes', 'Críton', 'Fédon'], 1, '87b–88b.'),
    mc('O argumento final depende da:', ['Teoria das Formas', 'Física atomista', 'Retórica', 'Lógica estoica'], 0, 'Uma Forma não admite o contrário.'),
    mc('Platão, segundo o diálogo, durante a morte de Sócrates:', ['Estava presente', 'Estava doente e ausente', 'Era o narrador', 'Ofereceu a cicuta'], 1, '59b.'),
    disc('Qual dos argumentos do Fédon é o mais forte? Defenda sua escolha e responda à objeção mais séria contra ele.', ['Escolha justificada', 'Reconstrução fiel', 'Objeção séria', 'Resposta argumentada'])],
  resumo: ['Filosofia como preparação para a morte.', 'Quatro argumentos: cíclico, reminiscência, afinidade, final.', 'Objeções de Símias (harmonia) e Cebes (tecelão).', 'Morte de Sócrates; o galo a Asclépio.'],
  referencias: [{ texto: 'Platão, Fédon.' }, { texto: 'Catecismo, §362–368 (para comparar com a doutrina cristã da alma).' }],
  revisao: [['Fédon 64a', 'Filosofar é exercitar-se para morrer.'], ['Objeção de Símias', 'Alma como harmonia da lira.'], ['Argumento final', 'A alma traz a vida e não admite a morte.']],
  avancado: {
    texto: `<h3>Platonismo e cristianismo sobre a alma</h3>
<p>A doutrina cristã aceita a imortalidade da alma, mas difere de Platão em pontos essenciais ${tag('doutrina')}: a alma é criada (não preexiste), é forma do corpo (não prisioneira dele) e o destino final inclui a ressurreição do corpo. Tomás (Suma I, q. 75–76) defende a imortalidade com argumentos aristotélicos, não platônicos ${tag('argumento')}.</p>
<h3>"Imortalidade da alma ou ressurreição dos mortos?"</h3>
<p>O teólogo protestante Oscar Cullmann (1956) opôs a morte serena de Sócrates à angústia de Jesus no Getsêmani para sustentar que a esperança cristã é a ressurreição, não a imortalidade grega. Ratzinger (Escatologia, 1977) respondeu defendendo a necessidade de afirmar ambas ${tag('debate')}.</p>
<h3>O galo a Asclépio</h3>
<p>Nietzsche (Crepúsculo dos Ídolos, "O problema de Sócrates") leu as últimas palavras como confissão de que a vida é uma doença ${tag('interpretacao')}; Georges Dumézil (O moinho de Hamlet e outros ensaios) propôs outra leitura. É exemplo de como um detalhe textual sustenta interpretações opostas.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Suma I, q. 75, a. 6 (incorruptibilidade da alma).' }, { texto: 'Oscar Cullmann, Imortalidade da alma ou ressurreição dos mortos? (1956).' }],
    exercicios: [
      mc('Diferentemente de Platão, a doutrina cristã ensina que a alma:', ['Preexiste', 'É criada e é forma do corpo', 'É harmonia', 'Reencarna'], 1, 'CIC §365–366.'),
      mc('Cullmann opôs a imortalidade grega à:', ['Reencarnação', 'Ressurreição dos mortos', 'Aniquilação', 'Iluminação'], 1, '1956.'),
      mc('Para Nietzsche, o galo a Asclépio revelaria:', ['Gratidão aos deuses', 'Que Sócrates via a vida como doença', 'Uma piada', 'Fé cristã'], 1, 'Crepúsculo dos Ídolos.'),
      disc('Compare a doutrina da alma no Fédon com a de Tomás (Suma I, q. 75–76). Onde há continuidade e onde há ruptura?', ['Expõe Platão', 'Expõe Tomás', 'Identifica continuidades e rupturas', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-6', titulo: 'República: justiça e a caverna',
  aprendera: ['A pergunta da República e o desafio de Gláucon', 'A analogia entre cidade e alma', 'A definição platônica de justiça', 'As imagens do Sol, da linha dividida e da caverna'],
  prereq: ['Aula 3: Os sofistas e Sócrates'],
  explicacao: `
<h3>A pergunta</h3>
<p>O que é a justiça, e o justo é mais feliz que o injusto? O livro I refuta definições comuns (dizer a verdade e devolver o que se deve; fazer bem aos amigos e mal aos inimigos) e enfrenta Trasímaco (aula 3) ${tag('fato')}.</p>
<h3>O desafio de Gláucon (livro II)</h3>
<p>Gláucon conta o mito do <strong>anel de Giges</strong>, que tornava invisível quem o usasse: qualquer um, com esse anel, cometeria injustiças impunemente; logo, ninguém é justo voluntariamente, mas por medo (359c–360d) ${tag('fato')}. Desafia Sócrates a mostrar que a justiça é boa por si mesma, e não só por suas consequências.</p>
<h3>Cidade e alma</h3>
<p>Para ver a justiça "em letras grandes", Sócrates constrói uma cidade ideal com três classes: governantes, guardiões auxiliares e produtores. A alma tem três partes correspondentes: <strong>razão</strong> (logistikon), <strong>ânimo</strong> (thymoeides) e <strong>apetite</strong> (epithymetikon) (livro IV) ${tag('argumento')}.</p>
<h3>A definição</h3>
<p>Justiça é cada parte fazer o que lhe cabe: a razão governar, o ânimo apoiá-la e o apetite obedecer. A alma justa é ordenada e harmoniosa; a injusta, em guerra civil. Por isso o justo é mais feliz (livros IV e IX) ${tag('argumento')}.</p>
<h3>O rei-filósofo e o Bem</h3>
<p>Só haverá fim dos males quando os filósofos governarem ou os governantes filosofarem (473c–d). O filósofo conhece o Bem, que Sócrates compara ao Sol: assim como o Sol torna as coisas visíveis e as faz crescer, o Bem torna as Formas inteligíveis e lhes dá o ser, estando "além da essência" em dignidade e poder (509b) ${tag('fato')}.</p>
<h3>A linha e a caverna</h3>
<p>A <strong>linha dividida</strong> (509d–511e) distingue quatro graus: imaginação (imagens), crença (objetos sensíveis), pensamento discursivo (matemática) e intelecção (Formas). A <strong>caverna</strong> (514a–521b) mostra prisioneiros que veem sombras na parede e as tomam por realidade; um deles é libertado, sobe com dor até a luz, vê o Sol e, ao voltar para libertar os outros, é ridicularizado e ameaçado ${tag('fato')} — alusão evidente à morte de Sócrates.</p>`,
  vocabulario: [['Anel de Giges', 'Mito de Gláucon sobre a injustiça impune.'], ['Tripartição da alma', 'Razão, ânimo, apetite.'], ['Rei-filósofo', 'Governante que conhece o Bem.'], ['Ideia do Bem', 'Princípio supremo, comparado ao Sol.'], ['Alegoria da caverna', 'Imagem da educação como conversão para a luz.']],
  exemplos: '<p>Pense no anel de Giges hoje: o anonimato na internet. Quem se comporta de modo diferente quando não é visto ilustra o desafio de Gláucon.</p>',
  contexto: `<p>A República foi escrita provavelmente na década de 370 a.C., após a experiência frustrada de Platão com a política em Siracusa (narrada na Carta VII, de autenticidade discutida) ${tag('debate')}.</p>`,
  argumento: { titulo: 'Por que o justo é mais feliz (livros IV e IX, reconstruído)', tag: 'argumento',
    premissas: ['A felicidade da alma depende de sua saúde, assim como a do corpo.', 'A saúde de um todo é a ordem natural de suas partes.', 'A justiça é a ordem natural das partes da alma (razão governando).', 'A injustiça é desordem: a alma dividida contra si.'],
    conclusao: 'Logo, o justo é mais feliz que o injusto, mesmo sem recompensas externas.',
    nota: 'Críticos (David Sachs, 1963) objetaram que a "justiça interior" de Platão não coincide necessariamente com a justiça comum (não roubar, não mentir): seria preciso mostrar que a alma ordenada não comete injustiças.' },
  objecoes: [{ objecao: 'A cidade ideal é autoritária: censura, propriedade comum dos guardiões, governo de poucos.', tag: 'debate', resposta: 'Karl Popper (A Sociedade Aberta e seus Inimigos, 1945) viu em Platão um precursor do totalitarismo. Outros leem a cidade como imagem da alma, não como programa político literal. A leitura política e a leitura psicológica disputam o sentido do livro.' }],
  aplicacao: '<p>Escreva uma versão atual da alegoria da caverna: o que seriam hoje as sombras, a parede, a subida e o retorno?</p>',
  fonte: { obra: 'Platão, República, livros I–II e VII (514a–521b)', link: null, orientacao: '<p>Leia os livros I e II inteiros e o começo do livro VII. Reconstrua o desafio de Gláucon e interprete cada elemento da caverna com base na linha dividida.</p>' },
  perguntas: [
    { p: 'O que mostra o mito do anel de Giges?', r: 'Que, segundo Gláucon, ninguém seria justo se pudesse cometer injustiça impunemente.' },
    { p: 'Quais as três partes da alma?', r: 'Razão, ânimo e apetite.' },
    { p: 'O que representa o Sol na República?', r: 'A ideia do Bem, que torna as Formas inteligíveis e lhes dá o ser.' },
  ],
  exercicios: [
    mc('A justiça, na República, é:', ['O interesse do mais forte', 'Cada parte fazer o que lhe cabe', 'Devolver o que se deve', 'Fazer bem aos amigos'], 1, 'Livro IV.'),
    mc('O grau mais alto da linha dividida é:', ['Crença', 'Imaginação', 'Pensamento discursivo', 'Intelecção'], 3, 'Conhecimento das Formas.'),
    mc('O desafio do livro II é lançado por:', ['Trasímaco', 'Gláucon', 'Céfalo', 'Polemarco'], 1, 'Com o anel de Giges.'),
    mc('A crítica de Platão como precursor do totalitarismo é de:', ['Popper', 'Strauss', 'Hegel', 'Arendt'], 0, 'A Sociedade Aberta e seus Inimigos (1945).'),
    disc('Platão responde ao desafio de Gláucon? Reconstrua o desafio, a resposta e a objeção de Sachs.', ['Desafio fiel', 'Resposta reconstruída', 'Objeção de Sachs', 'Avaliação justificada'])],
  resumo: ['O que é a justiça e se ela compensa.', 'Anel de Giges.', 'Cidade e alma: três partes.', 'Justiça como ordem.', 'Sol, linha, caverna.'],
  referencias: [{ texto: 'Platão, República.' }, { texto: 'Karl Popper, A Sociedade Aberta e seus Inimigos, vol. I (1945).' }, { texto: 'Julia Annas, An Introduction to Plato\'s Republic (1981).' }],
  revisao: [['Anel de Giges', 'República II, 359c–360d.'], ['Caverna', 'República VII, 514a.'], ['Bem além da essência', 'República VI, 509b.']],
  avancado: {
    texto: `<h3>A "falácia" de Sachs e as respostas</h3>
<p>David Sachs ("A Fallacy in Plato\'s Republic", 1963) acusou Platão de mudar o sentido de "justiça" entre o livro I (justiça comum) e o IV (ordem da alma). Respostas (Gregory Vlastos, Richard Kraut) argumentam que a alma ordenada, que ama o Bem, não terá motivos para as injustiças comuns ${tag('debate')}.</p>
<h3>O Bem além da essência</h3>
<p>A frase de 509b alimentou o neoplatonismo (o Uno além do ser) e, por meio de Dionísio, a teologia negativa cristã. Discute-se se Platão pensava num princípio "além do ser" no sentido de Plotino ou apenas superior às Formas ${tag('debate')}.</p>
<h3>Leo Strauss e a leitura irônica</h3>
<p>Leo Strauss (A Cidade e o Homem, 1964) leu a República como demonstração dos limites da política: a cidade ideal seria impossível, e Platão o saberia ${tag('interpretacao')}. Essa leitura se opõe tanto à de Popper quanto à leitura literal.</p>`,
    leituras: [{ texto: 'David Sachs, "A Fallacy in Plato\'s Republic", Philosophical Review (1963).' }, { texto: 'Leo Strauss, A Cidade e o Homem (1964), cap. II.' }],
    exercicios: [
      mc('Sachs acusou Platão de:', ['Plagiar Sócrates', 'Mudar o sentido de justiça entre os livros I e IV', 'Negar as Formas', 'Defender a democracia'], 1, '1963.'),
      mc('A leitura da República como demonstração dos limites da política é de:', ['Popper', 'Strauss', 'Annas', 'Vlastos'], 1, 'A Cidade e o Homem.'),
      mc('A tese do "Bem além da essência" influenciou diretamente:', ['O atomismo', 'O neoplatonismo', 'O epicurismo', 'O positivismo'], 1, 'O Uno de Plotino.'),
      disc('Compare as leituras de Popper, Strauss e a leitura psicológica da República. Qual se ajusta melhor ao texto?', ['Expõe as três leituras', 'Usa passagens do texto', 'Compara', 'Conclusão justificada'])],
  },
}),
];
