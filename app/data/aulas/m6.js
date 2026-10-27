// Módulo 6 — Epistemologia e filosofia da ciência: aulas 1 a 8.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm6-1', titulo: 'Crença verdadeira justificada: fontes e estrutura da justificação',
  aprendera: ['As fontes do conhecimento: percepção, memória, introspecção, razão, testemunho', 'Fundacionismo, coerentismo e infinitismo', 'A diferença entre internalismo e externalismo', 'O lugar do testemunho no conhecimento humano'],
  prereq: ['Módulo 3, aula 3: Opinião, crença e conhecimento', 'Módulo 5, aula 12: Ceticismo antigo'],
  explicacao: `
<h3>Retomando</h3>
<p>No Módulo 3 vimos a análise clássica (crença verdadeira justificada) e os casos Gettier. Aqui a pergunta é outra: de onde vem a justificação e como ela se organiza?</p>
<h3>Fontes</h3>
<ul>
<li><strong>Percepção</strong>: vejo a mesa.</li>
<li><strong>Memória</strong>: lembro que tomei café.</li>
<li><strong>Introspecção</strong>: sei que estou com dor.</li>
<li><strong>Razão</strong>: sei que 2 + 3 = 5 e que nada é e não é ao mesmo tempo.</li>
<li><strong>Testemunho</strong>: sei que a Austrália existe porque outros me disseram ${tag('argumento')}.</li>
</ul>
<p>O testemunho é a fonte da maior parte do que sabemos. Thomas Reid (século XVIII) defendeu um "princípio de credulidade": confiar no testemunho é natural e razoável até haver razão em contrário; Hume exigia que a confiança fosse proporcional à experiência da veracidade das testemunhas ${tag('debate')}.</p>
<h3>A estrutura da justificação</h3>
<p>O trilema de Agripa (Módulo 5) pede uma resposta. Três estratégias ${tag('debate')}:</p>
<ul>
<li><strong>Fundacionismo</strong>: há crenças básicas, justificadas sem outras (evidências dos sentidos, primeiros princípios), sobre as quais as demais se apoiam. Versão clássica (Descartes: certeza indubitável) e modesta (crenças básicas falíveis).</li>
<li><strong>Coerentismo</strong>: uma crença é justificada por sua coerência com um sistema de crenças (Laurence BonJour, na fase coerentista; Otto Neurath comparou o conhecimento a um barco que se reconstrói em alto-mar).</li>
<li><strong>Infinitismo</strong>: a cadeia de razões é potencialmente infinita, e isso não é vício (Peter Klein).</li>
</ul>
<p>Susan Haack propôs um "fundaerentismo" (palavras cruzadas: a experiência dá pistas, a coerência entre respostas as confirma) ${tag('interpretacao')}.</p>
<h3>Internalismo e externalismo</h3>
<p>Para o <strong>internalista</strong>, o que justifica uma crença deve ser acessível à reflexão do sujeito; para o <strong>externalista</strong>, basta que a crença seja produzida de modo confiável, ainda que o sujeito não saiba disso ${tag('debate')}.</p>`,
  vocabulario: [['Fundacionismo', 'Há crenças básicas que sustentam as demais.'], ['Coerentismo', 'Justificação pela coerência do sistema.'], ['Infinitismo', 'Cadeia infinita de razões.'], ['Testemunho', 'Conhecimento pela palavra de outros.'], ['Internalismo', 'Justificação acessível à reflexão do sujeito.']],
  exemplos: '<p>Você sabe a data do seu nascimento por testemunho (documentos, família), não por memória. Recusar todo testemunho tornaria impossível a história, a ciência e a vida cotidiana.</p>',
  contexto: `<p>A epistemologia como disciplina autônoma ganha centralidade com Descartes e Locke; o termo "epistemologia" em inglês aparece no século XIX (James F. Ferrier, 1854) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Argumento do regresso a favor do fundacionismo', tag: 'argumento',
    premissas: ['Se toda crença justificada precisasse de outra crença justificada, haveria regresso ao infinito ou círculo.', 'Regresso ao infinito e círculo não justificam.', 'Mas temos crenças justificadas.'],
    conclusao: 'Logo, há crenças justificadas sem depender de outras crenças: crenças básicas.',
    nota: 'O argumento é válido; coerentistas e infinitistas atacam a premissa 2.' },
  objecoes: [{ objecao: 'Nenhuma crença é infalível; logo, não há fundamentos.', tag: 'debate', resposta: 'O fundacionismo modesto aceita fundamentos falíveis: a percepção justifica prima facie, até haver razão contrária. O fundacionismo clássico, que exigia certeza indubitável, é hoje minoritário.' }],
  aplicacao: '<p>Escolha cinco coisas que você sabe e indique a fonte de cada uma. Quantas dependem de testemunho?</p>',
  fonte: { obra: 'Thomas Reid, Investigação sobre a mente humana, cap. VI, seção 24 (testemunho)', link: null, orientacao: '<p>Leia a seção sobre o princípio de veracidade e de credulidade. Compare com a seção X da Investigação de Hume sobre testemunho e milagres.</p>' },
  perguntas: [
    { p: 'Quais as cinco fontes de conhecimento citadas?', r: 'Percepção, memória, introspecção, razão, testemunho.' },
    { p: 'O que afirma o coerentismo?', r: 'Que uma crença é justificada por sua coerência com um sistema de crenças.' },
    { p: 'Qual a diferença entre internalismo e externalismo?', r: 'O internalismo exige justificação acessível à reflexão; o externalismo aceita fatores não acessíveis, como a confiabilidade.' },
  ],
  exercicios: [
    mc('O "barco reconstruído em alto-mar" é imagem do:', ['Fundacionismo', 'Coerentismo', 'Infinitismo', 'Ceticismo'], 1, 'Otto Neurath.'),
    mc('O "princípio de credulidade" sobre testemunho é de:', ['Hume', 'Reid', 'Descartes', 'Locke'], 1, 'Thomas Reid.'),
    mc('O fundacionismo modesto admite fundamentos:', ['Infalíveis', 'Falíveis', 'Coerentes', 'Infinitos'], 1, 'Justificação prima facie.'),
    mc('O infinitismo é associado a:', ['Klein', 'BonJour', 'Haack', 'Reid'], 0, 'Peter Klein.'),
    disc('Qual estrutura da justificação (fundacionismo, coerentismo, infinitismo) responde melhor ao trilema de Agripa? Argumente.', ['Expõe o trilema', 'Expõe a estrutura escolhida', 'Responde a uma objeção', 'Conclusão justificada'])],
  resumo: ['Fontes: percepção, memória, introspecção, razão, testemunho.', 'Fundacionismo, coerentismo, infinitismo.', 'Internalismo × externalismo.', 'Testemunho: Reid × Hume.'],
  referencias: [{ texto: 'Laurence BonJour, The Structure of Empirical Knowledge (1985).' }, { texto: 'Susan Haack, Evidence and Inquiry (1993).' }, { texto: 'Thomas Reid, Investigação sobre a mente humana (1764).' }],
  revisao: [['Fundacionismo', 'Crenças básicas sustentam as demais.'], ['Coerentismo', 'Barco de Neurath.'], ['Reid sobre testemunho', 'Princípio de credulidade.']],
  avancado: {
    texto: `<h3>Epistemologia do testemunho</h3>
<p>C. A. J. Coady (Testimony, 1992) defendeu o antirreducionismo: o testemunho é fonte básica de justificação, não redutível à percepção e à indução, porque nem conseguiríamos verificar indutivamente a confiabilidade das testemunhas sem já depender de testemunho ${tag('argumento')}. Reducionistas (Elizabeth Fricker) pedem que o ouvinte tenha razões positivas para confiar ${tag('debate')}.</p>
<h3>Testemunho e fé</h3>
<p>A analogia entre testemunho humano e fé (CIC §154) ganha precisão aqui: a fé teologal é assentimento à palavra de Deus que revela; a credibilidade da testemunha é avaliada pelos motivos de credibilidade (Módulo 1). Linda Zagzebski (Epistemic Authority, 2012) desenvolveu uma teoria da autoridade epistêmica aplicável à religião ${tag('interpretacao')}.</p>
<h3>Epistemologia social</h3>
<p>Desacordo entre pares (se alguém tão informado quanto você discorda, você deve reduzir sua confiança?) e injustiça epistêmica (Miranda Fricker, 2007) são temas centrais recentes ${tag('debate')}.</p>`,
    leituras: [{ texto: 'C. A. J. Coady, Testimony (1992).' }, { texto: 'Linda Zagzebski, Epistemic Authority (2012).' }],
    exercicios: [
      mc('O antirreducionismo sobre testemunho é defendido por:', ['Coady', 'Hume', 'Fricker (Elizabeth)', 'Descartes'], 0, 'Testimony (1992).'),
      mc('"Epistemic Authority" (2012) é de:', ['Zagzebski', 'Plantinga', 'Sosa', 'Haack'], 0, 'Linda Zagzebski.'),
      mc('O problema do "desacordo entre pares" pergunta se:', ['Devemos ignorar os outros', 'Devemos reduzir a confiança quando um igual discorda', 'Testemunho é inútil', 'Só a ciência vale'], 1, 'Epistemologia social.'),
      disc('A fé religiosa pode ser analisada como conhecimento por testemunho? Use Coady e o CIC §154–156.', ['Expõe a teoria do testemunho', 'Relaciona com a fé', 'Aponta diferenças', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm6-2', titulo: 'Ceticismo e respostas',
  aprendera: ['O ceticismo cartesiano: sonho e gênio maligno', 'O cérebro numa cuba', 'As respostas de Moore, Reid e do contextualismo', 'A resposta semântica de Putnam'],
  prereq: ['Aula 1 deste módulo'],
  explicacao: `
<h3>O ceticismo moderno</h3>
<p>O ceticismo antigo visava a tranquilidade; o moderno, a partir de Descartes, ataca a possibilidade de conhecer o mundo externo ${tag('interpretacao')}.</p>
<h3>Descartes (Meditação I, 1641)</h3>
<ol>
<li><strong>Erro dos sentidos</strong>: às vezes me enganam; não é prudente confiar em quem me enganou uma vez.</li>
<li><strong>Sonho</strong>: não há sinais seguros para distinguir vigília e sonho.</li>
<li><strong>Gênio maligno</strong>: um ser poderoso e enganador poderia fazer-me crer em tudo, até na matemática ${tag('fato')}.</li>
</ol>
<h3>Cérebro numa cuba</h3>
<p>Versão moderna: e se você fosse um cérebro num recipiente, estimulado por um computador que simula todas as experiências? Nada na sua experiência distinguiria essa situação da normal ${tag('argumento')}.</p>
<h3>O argumento cético</h3>
<p>Se sei que tenho mãos, sei que não sou um cérebro numa cuba; não sei que não sou um cérebro numa cuba; logo, não sei que tenho mãos (estrutura por modus tollens) ${tag('argumento')}.</p>
<h3>Respostas</h3>
<ul>
<li><strong>Moore</strong> ("Prova de um mundo externo", 1939): inverte o argumento. Sei que tenho mãos (mais certo que qualquer premissa cética); logo, sei que não sou um cérebro numa cuba ${tag('argumento')}.</li>
<li><strong>Reid</strong>: os princípios do senso comum (existência do mundo, confiabilidade dos sentidos) são primeiros e não precisam de prova; o cético também os usa ${tag('interpretacao')}.</li>
<li><strong>Contextualismo</strong> (Keith DeRose, David Lewis): "saber" é sensível ao contexto; no cotidiano sei que tenho mãos; no seminário cético, o padrão sobe ${tag('debate')}.</li>
<li><strong>Putnam</strong> (Razão, Verdade e História, 1981): se eu fosse um cérebro numa cuba, minhas palavras "cérebro" e "cuba" não se refeririam a cérebros e cubas reais; logo, a frase "sou um cérebro numa cuba" seria falsa ao ser pensada ${tag('argumento')}.</li>
<li><strong>Tomismo</strong>: o realismo é ponto de partida; o intelecto apreende o ser nas coisas sensíveis, e a dúvida universal é artificial (Gilson, O realismo metódico, 1935) ${tag('interpretacao')}.</li>
</ul>`,
  vocabulario: [['Gênio maligno', 'Hipótese cartesiana de um enganador poderoso.'], ['Cérebro numa cuba', 'Versão moderna do ceticismo sobre o mundo externo.'], ['Senso comum (Reid)', 'Princípios primeiros que não precisam de prova.'], ['Contextualismo', '"Saber" varia com o padrão do contexto.'], ['Realismo metódico', 'Partir do real, não do pensamento (Gilson).']],
  exemplos: '<p>Filmes como Matrix popularizaram a hipótese do cérebro numa cuba. O exercício filosófico é perguntar: o que, exatamente, me permite dizer que não estou nessa situação?</p>',
  contexto: `<p>Descartes usa a dúvida como método para chegar a algo indubitável (o cogito, Meditação II), e não como conclusão ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Moore (reconstruído)', tag: 'argumento',
    premissas: ['Aqui está uma mão; aqui está outra.', 'Se há mãos, há objetos externos.', 'Tenho mais certeza da premissa 1 do que de qualquer premissa do argumento cético.'],
    conclusao: 'Logo, existem objetos externos, e o argumento cético tem alguma premissa falsa.',
    nota: 'Críticos acusam petição de princípio; defensores dizem que Moore mostra apenas que a racionalidade não exige aceitar a premissa cética mais fraca contra a mais forte.' },
  objecoes: [{ objecao: 'Moore apenas afirma o que o cético põe em dúvida.', tag: 'debate', resposta: 'É a objeção clássica. Wittgenstein (Da certeza, 1969) propôs que certas proposições "moorianas" não são conhecidas, mas formam o leito do rio de nossos jogos de linguagem: duvidar delas não faz sentido.' }],
  aplicacao: '<p>Escreva o argumento cético do cérebro na cuba em premissas e escolha uma resposta; aplique-a e diga onde ela é mais fraca.</p>',
  fonte: { obra: 'Descartes, Meditações Metafísicas, Meditação I', link: null, orientacao: '<p>Leia a Meditação I (cerca de 6 páginas). Identifique as três etapas da dúvida e o papel de cada uma.</p>' },
  perguntas: [
    { p: 'Quais as etapas da dúvida cartesiana?', r: 'Erros dos sentidos, sonho, gênio maligno.' },
    { p: 'Como Moore responde ao cético?', r: 'Tenho mais certeza de que tenho mãos do que das premissas céticas.' },
    { p: 'Qual a resposta de Putnam?', r: 'Se fosse um cérebro numa cuba, minhas palavras não se refeririam a cérebros e cubas reais; a frase seria falsa ao ser pensada.' },
  ],
  exercicios: [
    mc('O gênio maligno aparece em:', ['Discurso do Método', 'Meditação I', 'Meditação III', 'Princípios'], 1, '1641.'),
    mc('O contextualismo é associado a:', ['DeRose e Lewis', 'Moore e Reid', 'Descartes e Locke', 'Putnam e Quine'], 0, 'Keith DeRose, David Lewis.'),
    mc('"Da certeza" (1969) é de:', ['Moore', 'Wittgenstein', 'Russell', 'Putnam'], 1, 'Obra póstuma.'),
    mc('O "realismo metódico" é de:', ['Descartes', 'Gilson', 'Kant', 'Berkeley'], 1, '1935.'),
    disc('Qual das respostas ao ceticismo lhe parece mais forte? Reconstrua-a e responda à melhor objeção contra ela.', ['Escolha justificada', 'Reconstrução fiel', 'Objeção séria', 'Resposta argumentada'])],
  resumo: ['Dúvida cartesiana em três etapas.', 'Cérebro numa cuba.', 'Moore, Reid, contextualismo, Putnam, realismo tomista.'],
  referencias: [{ texto: 'Descartes, Meditações, I.' }, { texto: 'G. E. Moore, "Proof of an External World" (1939).' }, { texto: 'Hilary Putnam, Razão, Verdade e História (1981), cap. 1.' }],
  revisao: [['Moore', '"Aqui está uma mão" (1939).'], ['Putnam', 'Externalismo semântico contra o cérebro numa cuba.'], ['Contextualismo', '"Saber" varia com o padrão do contexto.']],
  avancado: {
    texto: `<h3>O princípio de fechamento</h3>
<p>O argumento cético usa o "fechamento": se sei que p e sei que p implica q, então sei que q. Fred Dretske (1970) e Robert Nozick (Explicações Filosóficas, 1981) negaram o fechamento: posso saber que tenho mãos sem saber que não sou um cérebro numa cuba ${tag('debate')}. A teoria do "rastreamento" de Nozick: sei p se, caso p fosse falso, eu não creria p.</p>
<h3>Sensibilidade e segurança</h3>
<p>Ernest Sosa propôs substituir a condição de sensibilidade pela de "segurança": minha crença é segura se, em situações próximas, eu não creria p sendo p falso ${tag('debate')}.</p>
<h3>Realismo e tomismo</h3>
<p>Gilson argumentou que quem parte do pensamento (Descartes) nunca chega às coisas; o realismo deve ser ponto de partida, não conclusão. Críticos respondem que isso não refuta o cético, apenas recusa seu jogo ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Robert Nozick, Explicações Filosóficas (1981), cap. 3.' }, { texto: 'Étienne Gilson, O Realismo Metódico (1935).' }],
    exercicios: [
      mc('A negação do princípio de fechamento é associada a:', ['Moore', 'Dretske e Nozick', 'Descartes', 'Reid'], 1, '1970 e 1981.'),
      mc('A condição de "segurança" é proposta por:', ['Sosa', 'Nozick', 'Gettier', 'Putnam'], 0, 'Ernest Sosa.'),
      mc('Para Gilson, o realismo deve ser:', ['Conclusão de uma prova', 'Ponto de partida', 'Abandonado', 'Hipótese científica'], 1, 'Realismo metódico.'),
      disc('Negar o fechamento é um preço aceitável para responder ao cético? Argumente com um exemplo.', ['Explica o fechamento', 'Explica a negação', 'Exemplo', 'Avaliação justificada'])],
  },
}),

aula({
  id: 'm6-3', titulo: 'Percepção e realismo',
  aprendera: ['Realismo direto, representacionismo e idealismo', 'Qualidades primárias e secundárias', 'O argumento da ilusão', 'A teoria tomista da espécie intencional'],
  explicacao: `
<h3>O que vemos quando vemos?</h3>
<p>Vemos as coisas mesmas, ou imagens delas na mente? A resposta define posições ${tag('debate')}:</p>
<ul>
<li><strong>Realismo direto</strong>: percebemos as próprias coisas, ainda que por meio de processos físicos e fisiológicos.</li>
<li><strong>Representacionismo</strong> (realismo indireto): percebemos ideias ou dados dos sentidos que representam as coisas (Locke).</li>
<li><strong>Idealismo</strong>: só existem mentes e suas ideias; ser é ser percebido (<em>esse est percipi</em>, Berkeley, Tratado dos princípios, 1710).</li>
<li><strong>Fenomenalismo</strong>: os objetos são "possibilidades permanentes de sensação" (J. S. Mill).</li>
</ul>
<h3>Qualidades primárias e secundárias</h3>
<p>Locke (Ensaio II, 8) distingue qualidades <strong>primárias</strong> (extensão, figura, movimento, número), que estariam nas coisas como as percebemos, e <strong>secundárias</strong> (cor, som, sabor, calor), que seriam poderes das coisas de produzir sensações em nós ${tag('fato')}. Berkeley objetou que as primárias também dependem do observador, abrindo caminho ao idealismo ${tag('argumento')}.</p>
<h3>O argumento da ilusão</h3>
<p>O remo parece torto na água; o que vejo não é o remo (que é reto); logo, vejo algo mental. Como não há diferença intrínseca entre ilusão e percepção verídica, sempre vejo algo mental ${tag('argumento')}. J. L. Austin (Sentido e sensibilia, 1962) criticou o argumento: o remo parece torto, mas é o remo que vejo, e "parecer" não exige um objeto mental.</p>
<h3>A resposta tomista</h3>
<p>Para Tomás, a forma da coisa é recebida no sentido "intencionalmente", sem a matéria (a <em>species</em>). A espécie não é <strong>aquilo que</strong> se conhece, mas <strong>aquilo pelo qual</strong> se conhece a coisa (Suma I, q. 85, a. 2) ${tag('argumento')}. É uma forma de realismo direto mediado: o conhecimento é identidade intencional entre conhecedor e conhecido.</p>`,
  vocabulario: [['Realismo direto', 'Percebemos as próprias coisas.'], ['Representacionismo', 'Percebemos representações das coisas.'], ['Esse est percipi', 'Ser é ser percebido (Berkeley).'], ['Qualidades secundárias', 'Cor, som, sabor: poderes de produzir sensações.'], ['Species intencional', 'Forma recebida sem matéria, pela qual se conhece.']],
  exemplos: '<p>A cor "vermelho" está na maçã? A física descreve comprimentos de onda; a neurociência, processos no cérebro; a experiência, o vermelho vivido. A pergunta filosófica é como esses três níveis se relacionam.</p>',
  contexto: `<p>A distinção entre qualidades primárias e secundárias já aparece em Galileu (O ensaiador, 1623) e em Descartes, ligada à física matemática ${tag('fato')}.</p>`,
  argumento: { titulo: 'Tomás: a species é "aquilo pelo qual" (Suma I, q. 85, a. 2, reconstruído)', tag: 'argumento',
    premissas: ['Se o objeto do conhecimento fosse a espécie em nós, só conheceríamos nossos próprios estados.', 'Nesse caso as ciências seriam sobre nossas ideias, não sobre as coisas.', 'Além disso, juízos contrários de pessoas diferentes seriam igualmente verdadeiros, cada um sobre suas ideias.'],
    conclusao: 'Logo, a espécie não é aquilo que se conhece, mas aquilo pelo qual se conhece a coisa.',
    nota: 'O argumento antecipa as críticas ao representacionismo moderno.' },
  objecoes: [{ objecao: 'A neurociência mostra que só temos acesso a representações no cérebro.', tag: 'debate', resposta: 'Realistas diretos respondem que processos cerebrais são o meio da percepção, não seu objeto; confundir meio e objeto é o erro que Tomás e Austin denunciam. O debate entre representacionistas e realistas diretos continua na filosofia da mente.' }],
  aplicacao: '<p>Escolha uma experiência perceptiva (ver uma flor) e descreva-a segundo o realismo direto, o representacionismo e o idealismo.</p>',
  fonte: { obra: 'Locke, Ensaio II, 8; Berkeley, Tratado dos princípios §1–10', link: null, orientacao: '<p>Leia os dois textos e reconstrua o argumento de Berkeley contra a distinção de Locke.</p>' },
  perguntas: [
    { p: 'Quais são as qualidades primárias para Locke?', r: 'Extensão, figura, movimento, número, solidez.' },
    { p: 'O que significa "esse est percipi"?', r: 'Ser é ser percebido.' },
    { p: 'O que é a species para Tomás?', r: 'Aquilo pelo qual se conhece a coisa, não aquilo que se conhece.' },
  ],
  exercicios: [
    mc('A cor, para Locke, é qualidade:', ['Primária', 'Secundária', 'Substancial', 'Ilusória'], 1, 'Ensaio II, 8.'),
    mc('O idealismo de Berkeley afirma que:', ['Só existe matéria', 'Ser é ser percebido', 'Percebemos diretamente a matéria', 'Não há mentes'], 1, 'Esse est percipi.'),
    mc('Austin criticou:', ['O realismo direto', 'O argumento da ilusão', 'Tomás', 'Locke apenas'], 1, 'Sentido e sensibilia (1962).'),
    mc('Para Tomás, conhecer é:', ['Copiar imagens', 'Identidade intencional com o conhecido', 'Criar o objeto', 'Ter sensações sem objeto'], 1, 'Recebe-se a forma sem a matéria.'),
    disc('Reconstrua o argumento da ilusão e avalie as respostas de Austin e de Tomás.', ['Reconstrução fiel', 'Expõe Austin', 'Expõe Tomás', 'Avaliação justificada'])],
  resumo: ['Realismo direto, representacionismo, idealismo, fenomenalismo.', 'Primárias e secundárias (Locke).', 'Argumento da ilusão e Austin.', 'Species: aquilo pelo qual se conhece.'],
  referencias: [{ texto: 'John Locke, Ensaio sobre o Entendimento Humano II, 8.' }, { texto: 'George Berkeley, Tratado sobre os Princípios do Conhecimento Humano (1710).' }, { texto: 'Tomás de Aquino, Suma I, q. 84–85.' }],
  revisao: [['Esse est percipi', 'Berkeley.'], ['Qualidades secundárias', 'Cor, som, sabor (Locke).'], ['Species (Tomás)', 'Aquilo pelo qual, não aquilo que se conhece.']],
  avancado: {
    texto: `<h3>Disjuntivismo</h3>
<p>John McDowell e M. G. F. Martin defendem que percepção verídica e alucinação não têm um "fator comum": na percepção, o objeto mesmo é constituinte da experiência ${tag('debate')}. É uma forma contemporânea de realismo direto, próxima, em alguns aspectos, da intuição tomista ${tag('interpretacao')}.</p>
<h3>Intencionalidade</h3>
<p>Franz Brentano (Psicologia do ponto de vista empírico, 1874) retomou a noção escolástica de "inexistência intencional" como marca do mental: todo ato psíquico se refere a um objeto ${tag('fato')}. Daí parte Husserl.</p>
<h3>Problema da percepção e teologia</h3>
<p>Se o representacionismo fosse verdadeiro, a ponte entre mente e mundo exigiria uma garantia externa: Descartes recorre à veracidade divina (Meditação VI), Berkeley a Deus como causa das ideias ${tag('fato')}. O realismo direto dispensa essa garantia.</p>`,
    leituras: [{ texto: 'John McDowell, Mente e Mundo (1994).' }, { texto: 'Franz Brentano, Psicologia do ponto de vista empírico (1874), livro II, cap. 1.' }],
    exercicios: [
      mc('O disjuntivismo nega que percepção e alucinação tenham:', ['Objeto', 'Fator comum', 'Fenomenologia', 'Causa'], 1, 'McDowell, Martin.'),
      mc('A intencionalidade como marca do mental foi retomada por:', ['Brentano', 'Locke', 'Berkeley', 'Mill'], 0, '1874.'),
      mc('Descartes garante a ponte mente-mundo por:', ['Senso comum', 'Veracidade divina', 'Ceticismo', 'Indução'], 1, 'Meditação VI.'),
      disc('Compare o disjuntivismo com a teoria tomista da species. São compatíveis?', ['Expõe o disjuntivismo', 'Expõe a species', 'Compara', 'Conclusão'])],
  },
}),

aula({
  id: 'm6-4', titulo: 'Razão e experiência',
  aprendera: ['As distinções a priori × a posteriori e analítico × sintético', 'Racionalismo e empirismo', 'A pergunta kantiana pelos juízos sintéticos a priori', 'As críticas de Quine e de Kripke'],
  explicacao: `
<h3>Duas distinções</h3>
<ul>
<li><strong>A priori × a posteriori</strong> (como se conhece): conhece-se a priori o que se justifica independentemente da experiência ("todo triângulo tem três ângulos"); a posteriori, o que depende dela ("a água ferve a 100 °C ao nível do mar").</li>
<li><strong>Analítico × sintético</strong> (o que a frase diz): um juízo é analítico quando o predicado está contido no sujeito ("todo solteiro é não casado"); sintético quando acrescenta algo ("este solteiro é alto") (Kant, Crítica da Razão Pura, Introdução) ${tag('fato')}.</li>
</ul>
<h3>Racionalismo e empirismo</h3>
<p>Os racionalistas (Descartes, Spinoza, Leibniz) sustentaram que a razão conhece verdades substanciais sobre a realidade independentemente da experiência; os empiristas (Locke, Berkeley, Hume), que todo conhecimento de fatos vem da experiência. Hume dividiu os objetos da razão em "relações de ideias" (matemática, certas e a priori) e "questões de fato" (a posteriori) — o chamado "garfo de Hume" ${tag('fato')}.</p>
<h3>A pergunta de Kant</h3>
<p>Kant perguntou: como são possíveis juízos <strong>sintéticos a priori</strong> — que ampliam o conhecimento e são necessários? Exemplos: "7 + 5 = 12", "todo evento tem causa". Sua resposta: são possíveis porque o sujeito impõe à experiência formas (espaço e tempo) e categorias (como a causalidade); por isso valem para os fenômenos, mas não para as coisas em si ${tag('interpretacao')}.</p>
<h3>Críticas</h3>
<ul>
<li><strong>Quine</strong> ("Dois dogmas do empirismo", 1951): a distinção analítico/sintético não tem critério claro; nosso saber enfrenta a experiência como um todo ${tag('debate')}.</li>
<li><strong>Kripke</strong> (O nomear e a necessidade, 1970/1980): há verdades necessárias a posteriori ("água é H₂O") e contingentes a priori; necessidade (metafísica) e aprioridade (epistemológica) não coincidem ${tag('debate')}.</li>
</ul>
<h3>A posição aristotélico-tomista</h3>
<p>Todo conhecimento começa pelos sentidos ("nada está no intelecto que não tenha estado antes nos sentidos", adágio escolástico), mas o intelecto apreende essências e princípios necessários a partir da experiência — um "empirismo" que não é empirista ${tag('interpretacao')}.</p>`,
  vocabulario: [['A priori', 'Justificado independentemente da experiência.'], ['Analítico', 'Predicado contido no sujeito.'], ['Sintético a priori', 'Juízo que amplia e é necessário (Kant).'], ['Garfo de Hume', 'Relações de ideias × questões de fato.'], ['Necessário a posteriori', 'Verdade necessária descoberta pela experiência (Kripke).']],
  exemplos: '<p>"Todo efeito tem causa" é analítico (efeito significa algo causado). "Todo evento tem causa" é sintético e, para Kant, a priori. A diferença de uma palavra muda o estatuto do juízo.</p>',
  contexto: `<p>A disputa racionalismo × empirismo atravessa os séculos XVII e XVIII; Kant pretendeu superá-la com a filosofia transcendental (1781) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que "7 + 5 = 12" seria sintético (Kant, reconstruído)', tag: 'argumento',
    premissas: ['No conceito de "soma de 7 e 5" estão só a reunião dos dois números.', 'O conceito de 12 não está contido nesse conceito; é preciso a intuição (contar) para chegar a ele.', 'Mas o juízo é necessário e independente da experiência particular.'],
    conclusao: 'Logo, "7 + 5 = 12" é sintético a priori.',
    nota: 'Frege e o logicismo sustentaram que a aritmética é analítica (redutível à lógica); os teoremas de Gödel complicaram esse programa.' },
  objecoes: [{ objecao: 'Não há juízos sintéticos a priori: tudo é analítico ou empírico.', tag: 'debate', resposta: 'É a posição do empirismo lógico. Kantianos e realistas respondem que princípios como o de causalidade ou o de não contradição aplicado ao ser não são meras definições nem generalizações empíricas.' }],
  aplicacao: '<p>Classifique dez frases (de matemática, física, ética, teologia) em a priori/a posteriori e analíticas/sintéticas. Quais são difíceis de classificar?</p>',
  fonte: { obra: 'Kant, Crítica da Razão Pura, Introdução (B 1–30); Hume, Investigação IV, 1', link: null, orientacao: '<p>Leia a Introdução da segunda edição da Crítica e a seção IV, parte 1, de Hume. Compare o "garfo" com a tabela kantiana.</p>' },
  perguntas: [
    { p: 'O que é um juízo analítico?', r: 'Aquele em que o predicado está contido no sujeito.' },
    { p: 'Qual a pergunta central de Kant?', r: 'Como são possíveis juízos sintéticos a priori?' },
    { p: 'O que mostrou Kripke?', r: 'Que há verdades necessárias a posteriori, como "água é H₂O".' },
  ],
  exercicios: [
    mc('"Todo solteiro é não casado" é:', ['Sintético a posteriori', 'Analítico a priori', 'Sintético a priori', 'Contingente'], 1, 'Predicado contido no sujeito.'),
    mc('O "garfo de Hume" distingue:', ['Ser e dever', 'Relações de ideias e questões de fato', 'Corpo e alma', 'Fé e razão'], 1, 'Investigação IV.'),
    mc('"Dois dogmas do empirismo" critica a distinção:', ['A priori/a posteriori', 'Analítico/sintético', 'Fé/razão', 'Ato/potência'], 1, 'Quine, 1951.'),
    mc('"Água é H₂O" seria, para Kripke:', ['Contingente a priori', 'Necessária a posteriori', 'Analítica', 'Falsa'], 1, 'O nomear e a necessidade.'),
    disc('O princípio "todo evento tem causa" é analítico, sintético a priori ou empírico? Defenda uma posição.', ['Explica as três opções', 'Argumenta', 'Responde a objeção', 'Conclusão justificada'])],
  resumo: ['A priori × a posteriori; analítico × sintético.', 'Racionalismo × empirismo; garfo de Hume.', 'Sintético a priori (Kant).', 'Quine e Kripke.', 'Posição aristotélico-tomista.'],
  referencias: [{ texto: 'Kant, Crítica da Razão Pura, Introdução.' }, { texto: 'W. V. O. Quine, "Dois dogmas do empirismo" (1951).' }, { texto: 'Saul Kripke, O Nomear e a Necessidade (1980).' }],
  revisao: [['Sintético a priori', 'Amplia e é necessário (Kant).'], ['Garfo de Hume', 'Relações de ideias × questões de fato.'], ['Kripke', 'Necessário a posteriori: água é H₂O.']],
  avancado: {
    texto: `<h3>Abstração e intuição intelectual</h3>
<p>Para Tomás, o intelecto agente abstrai a essência do dado sensível, e os primeiros princípios (de não contradição, de identidade) são conhecidos "por si" assim que se entendem seus termos (Suma I-II, q. 94, a. 2) ${tag('argumento')}. Isso não é inatismo (os termos vêm da experiência), nem empirismo humeano (os princípios não são generalizações) ${tag('interpretacao')}.</p>
<h3>O racionalismo contemporâneo</h3>
<p>Laurence BonJour (In Defense of Pure Reason, 1998) defendeu a justificação a priori contra Quine, argumentando que o próprio empirismo radical depende de princípios não empíricos ${tag('debate')}.</p>
<h3>Gödel e o logicismo</h3>
<p>Os teoremas de incompletude de Gödel (1931) mostraram que nenhum sistema formal consistente e suficientemente forte prova todas as verdades aritméticas. Isso complicou o projeto de reduzir a matemática à lógica; o alcance filosófico dos teoremas é debatido ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Laurence BonJour, In Defense of Pure Reason (1998).' }, { texto: 'Tomás de Aquino, Suma I-II, q. 94, a. 2.' }],
    exercicios: [
      mc('Para Tomás, os primeiros princípios são conhecidos:', ['Por indução', 'Por si, ao entender os termos', 'Inatamente', 'Por revelação'], 1, 'Per se nota.'),
      mc('"In Defense of Pure Reason" (1998) é de:', ['BonJour', 'Quine', 'Kripke', 'Kant'], 0, 'Laurence BonJour.'),
      mc('Os teoremas de incompletude são de:', ['Frege', 'Gödel (1931)', 'Russell', 'Hilbert'], 1, '1931.'),
      disc('A posição tomista sobre os primeiros princípios escapa da alternativa racionalismo × empirismo? Argumente.', ['Expõe a posição', 'Compara com as duas escolas', 'Considera objeção', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm6-5', titulo: 'Indução e causalidade',
  aprendera: ['A análise de Hume da causalidade', 'A resposta de Kant', 'Teorias contemporâneas: regularidade, contrafactuais, poderes', 'O princípio de causalidade na tradição aristotélico-tomista'],
  prereq: ['Módulo 4, aula 4: Dedução, indução e abdução'],
  explicacao: `
<h3>Hume: de onde vem a ideia de causa?</h3>
<p>Quando uma bola de bilhar bate em outra, vemos contiguidade, sucessão e, repetidamente, conjunção constante. Não vemos uma "conexão necessária" (Investigação, seção VII) ${tag('fato')}. A ideia de necessidade vem do hábito: após muitas repetições, a mente passa naturalmente de uma impressão à ideia da outra. Hume deu duas definições de causa: um objeto seguido de outro, sendo todos os semelhantes ao primeiro seguidos de semelhantes ao segundo; e um objeto seguido de outro cuja aparição sempre leva o pensamento ao outro ${tag('fato')}.</p>
<h3>Kant</h3>
<p>Kant aceita que a necessidade não vem da experiência, mas conclui que ela vem do entendimento: a causalidade é uma categoria que torna possível a experiência objetiva de uma sucessão de eventos (Segunda Analogia) ${tag('interpretacao')}.</p>
<h3>Teorias contemporâneas</h3>
<ul>
<li><strong>Regularidade</strong> (herdeira de Hume): causalidade é regularidade.</li>
<li><strong>Contrafactual</strong> (David Lewis, 1973): c causa e se, caso c não tivesse ocorrido, e não teria ocorrido.</li>
<li><strong>Probabilística</strong>: c causa e se aumenta a probabilidade de e.</li>
<li><strong>Poderes e disposições</strong> (Stephen Mumford, Rani Anjum, neoaristotélicos): as coisas têm poderes reais (o sal é solúvel); a causalidade é exercício de poderes ${tag('debate')}.</li>
</ul>
<h3>O princípio de causalidade</h3>
<p>Na tradição aristotélico-tomista, o princípio "tudo o que passa da potência ao ato passa por algo em ato" e "o que não existe por si existe por outro" não é generalização empírica, mas evidência metafísica, conhecida a partir da análise do ser contingente ${tag('argumento')}. Hume pergunta: por que não pode algo começar a existir sem causa? A resposta tomista: porque o que começa a existir não tinha em si a razão de existir ${tag('debate')}.</p>`,
  vocabulario: [['Conexão necessária', 'O que Hume não encontra na experiência.'], ['Conjunção constante', 'Repetição regular de A seguido de B.'], ['Contrafactual', 'Se c não tivesse ocorrido, e não ocorreria.'], ['Poder causal', 'Capacidade real de produzir efeitos.'], ['Princípio de causalidade', 'O que começa a ser tem causa.']],
  exemplos: '<p>"Fumar causa câncer" não significa que todo fumante terá câncer: a causalidade em medicina é probabilística e contrafactual (sem o fumo, menos casos). Isso mostra que "causa" tem vários sentidos.</p>',
  contexto: `<p>Hume escreveu o Tratado da Natureza Humana (1739–1740) e a Investigação (1748); Kant disse que Hume o despertou do "sono dogmático" (Prolegômenos, 1783) ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Hume contra a evidência do princípio de causalidade (Tratado I, 3, 3, reconstruído)', tag: 'argumento',
    premissas: ['Tudo o que é distinto é separável na imaginação.', 'As ideias de causa e de efeito são distintas.', 'Logo, posso conceber um efeito sem causa; e o concebível é possível.'],
    conclusao: 'Portanto, "tudo o que começa a existir tem causa" não é necessário nem demonstrável.',
    nota: 'Críticos atacam a passagem do "concebível" ao "possível" e observam que conceber um começo sem causa talvez seja só não pensar na causa.' },
  objecoes: [{ objecao: 'A física quântica mostra eventos sem causa.', tag: 'debate', resposta: 'Alguns intérpretes leem o decaimento radioativo como indeterminado, não como "sem causa": há uma estrutura física que dá as probabilidades. Interpretações deterministas (Bohm) e indeterministas convivem; o tema exige cuidado com o que a física diz e o que se acrescenta filosoficamente.' }],
  aplicacao: '<p>Escolha uma relação causal cotidiana e analise-a pelas quatro teorias (regularidade, contrafactual, probabilística, poderes). Qual descreve melhor?</p>',
  fonte: { obra: 'Hume, Investigação, seção VII', link: null, orientacao: '<p>Leia a seção VII inteira e identifique as duas definições de causa. Pergunta-guia: a segunda definição é psicológica?</p>' },
  perguntas: [
    { p: 'O que Hume não encontra na experiência da causalidade?', r: 'Uma conexão necessária.' },
    { p: 'Qual a teoria contrafactual?', r: 'c causa e se, sem c, e não teria ocorrido.' },
    { p: 'Como a tradição tomista vê o princípio de causalidade?', r: 'Como evidência metafísica, não generalização empírica.' },
  ],
  exercicios: [
    mc('Para Hume, a ideia de necessidade causal vem:', ['Da razão pura', 'Do hábito', 'De Deus', 'Da matemática'], 1, 'Investigação VII.'),
    mc('A teoria contrafactual da causalidade é associada a:', ['David Lewis', 'Mill', 'Kant', 'Mumford'], 0, '1973.'),
    mc('O sal é solúvel mesmo quando não está na água. Isso ilustra:', ['Regularidade', 'Poder ou disposição', 'Hábito', 'Contrafactual'], 1, 'Teoria dos poderes.'),
    mc('Kant situa a causalidade:', ['Nas coisas em si', 'Como categoria do entendimento', 'No hábito', 'Em Deus'], 1, 'Segunda Analogia.'),
    disc('O argumento de Hume da "separabilidade" refuta o princípio de causalidade? Reconstrua e avalie.', ['Reconstrução fiel', 'Identifica a premissa frágil', 'Considera resposta tomista', 'Conclusão justificada'])],
  resumo: ['Hume: conjunção constante e hábito.', 'Kant: categoria do entendimento.', 'Regularidade, contrafactual, probabilística, poderes.', 'Princípio de causalidade tomista.'],
  referencias: [{ texto: 'David Hume, Investigação, seção VII; Tratado I, 3, 3.' }, { texto: 'David Lewis, "Causation" (1973).' }, { texto: 'Stephen Mumford e Rani Lill Anjum, Causation: A Very Short Introduction (2013).' }],
  revisao: [['Duas definições de Hume', 'Regularidade; transição habitual da mente.'], ['Contrafactual', 'David Lewis (1973).'], ['Princípio de causalidade', 'O que começa a existir tem causa.']],
  avancado: {
    texto: `<h3>Anscombe contra Hume</h3>
<p>Elizabeth Anscombe ("Causality and Determination", 1971) argumentou que causalidade é derivação (o efeito vem da causa), não necessidade nem regularidade, e que vemos causas o tempo todo (empurrar, cortar, quebrar) ${tag('argumento')}.</p>
<h3>O "novo Hume"</h3>
<p>Galen Strawson e John Wright propuseram que Hume era realista sobre a causalidade, cético apenas sobre nosso acesso a ela; a leitura é contestada ${tag('debate')}.</p>
<h3>Causalidade e teologia natural</h3>
<p>As vias de Tomás dependem do princípio de causalidade; o kalam, do princípio de que o que começa tem causa. Quem aceita Hume sem reservas tende a rejeitar ambos; quem aceita poderes causais reais (neoaristotélicos) tende a reabrir o argumento ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'G. E. M. Anscombe, "Causality and Determination" (1971).' }, { texto: 'Galen Strawson, The Secret Connexion (1989).' }],
    exercicios: [
      mc('Para Anscombe, causalidade é sobretudo:', ['Regularidade', 'Derivação', 'Hábito', 'Probabilidade'], 1, '1971.'),
      mc('"The Secret Connexion" defende um Hume:', ['Cético radical', 'Realista sobre a causalidade', 'Kantiano', 'Idealista'], 1, 'Galen Strawson.'),
      mc('Quem aceita poderes causais reais tende a:', ['Rejeitar a teologia natural', 'Reabrir argumentos causais sobre Deus', 'Negar a física', 'Aceitar o ceticismo'], 1, 'Neoaristotélicos.'),
      disc('Vemos causas? Compare Hume e Anscombe com um exemplo.', ['Expõe Hume', 'Expõe Anscombe', 'Exemplo', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm6-6', titulo: 'O método científico',
  aprendera: ['Indutivismo, hipotético-dedutivismo e falsificacionismo', 'Paradigmas e revoluções científicas (Kuhn)', 'Programas de pesquisa (Lakatos) e anarquismo metodológico (Feyerabend)', 'Realismo científico e antirrealismo'],
  explicacao: `
<h3>Existe "o" método científico?</h3>
<p>A ciência moderna nasce no século XVII com a combinação de experimento e matemática. Mas filósofos discordam sobre como ela funciona ${tag('debate')}.</p>
<h3>Indutivismo</h3>
<p>Francis Bacon (Novum Organum, 1620) propôs partir de observações cuidadosas e tabelas de casos para chegar a leis gerais, evitando os "ídolos" (preconceitos da tribo, da caverna, do mercado e do teatro) ${tag('fato')}.</p>
<h3>Hipotético-dedutivismo</h3>
<p>Propõe-se uma hipótese, deduzem-se consequências observáveis e testa-se. Carl Hempel formalizou o modelo de explicação "dedutivo-nomológico" (1948, com Oppenheim) ${tag('fato')}.</p>
<h3>Falsificacionismo (Popper)</h3>
<p>Karl Popper (A Lógica da Pesquisa Científica, 1934): teorias não são verificáveis, mas falsificáveis; a ciência avança por conjecturas e refutações. O critério de demarcação entre ciência e não ciência é a falsificabilidade. Popper criticou a psicanálise e o marxismo como infalsificáveis ${tag('fato')}.</p>
<h3>Kuhn e os paradigmas</h3>
<p>Thomas Kuhn (A Estrutura das Revoluções Científicas, 1962) descreveu a "ciência normal" dentro de um paradigma, o acúmulo de anomalias, a crise e a revolução (como a passagem de Ptolomeu a Copérnico). Paradigmas seriam "incomensuráveis" em parte ${tag('interpretacao')}.</p>
<h3>Lakatos e Feyerabend</h3>
<p>Imre Lakatos propôs "programas de pesquisa" com núcleo protegido e cinturão de hipóteses auxiliares, avaliados como progressivos ou degenerativos. Paul Feyerabend (Contra o Método, 1975) defendeu que "tudo vale": nenhuma regra metodológica foi sempre seguida pelos grandes cientistas ${tag('fato')}.</p>
<h3>Realismo científico</h3>
<p>Realistas sustentam que as teorias maduras descrevem, aproximadamente, uma realidade independente (argumento do "milagre": o sucesso da ciência seria inexplicável se ela não fosse verdadeira, Putnam). Antirrealistas, como Bas van Fraassen (A Imagem Científica, 1980), dizem que a ciência visa a adequação empírica, não a verdade sobre inobserváveis ${tag('debate')}.</p>`,
  vocabulario: [['Falsificabilidade', 'Possibilidade de uma teoria ser refutada pela experiência.'], ['Paradigma', 'Conjunto de teorias, métodos e exemplos aceitos por uma comunidade científica.'], ['Ciência normal', 'Resolução de problemas dentro de um paradigma.'], ['Programa de pesquisa', 'Núcleo protegido e cinturão de hipóteses (Lakatos).'], ['Realismo científico', 'As teorias descrevem a realidade, inclusive inobservável.']],
  exemplos: '<p>"Todos os cisnes são brancos" é falsificável (basta um cisne negro, encontrado na Austrália). "Tudo acontece por uma razão" não é falsificável — o que, para Popper, a exclui da ciência, não necessariamente da verdade.</p>',
  contexto: `<p>Pierre Duhem (A Teoria Física, 1906), físico católico, mostrou o caráter holístico dos testes e reabilitou a ciência medieval (Buridan, Oresme) como antecedente da mecânica moderna ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento do "milagre" a favor do realismo científico (Putnam, reconstruído)', tag: 'argumento',
    premissas: ['As teorias científicas maduras fazem previsões novas e surpreendentes que se confirmam.', 'Se essas teorias fossem falsas, esse sucesso seria um milagre.', 'Não devemos aceitar milagres como explicação científica.'],
    conclusao: 'Logo, as teorias maduras são aproximadamente verdadeiras.',
    nota: 'É uma inferência para a melhor explicação. Antirrealistas respondem com a "meta-indução pessimista" (Larry Laudan, 1981): muitas teorias bem-sucedidas do passado eram falsas (éter, flogisto).' },
  objecoes: [{ objecao: 'Se paradigmas são incomensuráveis, a ciência é irracional.', tag: 'debate', resposta: 'Kuhn negou essa leitura e listou valores comuns (precisão, coerência, alcance, simplicidade, fecundidade) que guiam a escolha de teorias. Críticos e defensores ainda discutem o grau de racionalidade das revoluções.' }],
  aplicacao: '<p>Escolha uma teoria científica e mostre como ela seria descrita por Popper, por Kuhn e por Lakatos.</p>',
  fonte: { obra: 'Popper, Conjecturas e Refutações, cap. 1; Kuhn, A Estrutura das Revoluções Científicas, caps. I–IX', link: null, orientacao: '<p>Leia o capítulo 1 de Conjecturas e Refutações (a demarcação) e o posfácio de 1969 da Estrutura. Compare as duas visões do progresso científico.</p>' },
  perguntas: [
    { p: 'Qual o critério de demarcação de Popper?', r: 'A falsificabilidade.' },
    { p: 'O que é ciência normal para Kuhn?', r: 'Resolução de problemas dentro de um paradigma.' },
    { p: 'O que afirma o antirrealismo de van Fraassen?', r: 'Que a ciência visa a adequação empírica, não a verdade sobre inobserváveis.' },
  ],
  exercicios: [
    mc('Os "ídolos" do conhecimento são de:', ['Bacon', 'Popper', 'Kuhn', 'Descartes'], 0, 'Novum Organum (1620).'),
    mc('"Contra o Método" (1975) é de:', ['Lakatos', 'Feyerabend', 'Kuhn', 'Hempel'], 1, 'Anarquismo metodológico.'),
    mc('A meta-indução pessimista é de:', ['Laudan', 'Putnam', 'Popper', 'Duhem'], 0, '1981.'),
    mc('Duhem reabilitou como antecedente da mecânica moderna:', ['A ciência árabe', 'A ciência medieval (Buridan, Oresme)', 'A alquimia', 'O atomismo'], 1, 'Études sur Léonard de Vinci e Le Système du monde.'),
    disc('Popper ou Kuhn descreve melhor a história da ciência? Use um exemplo histórico.', ['Expõe Popper', 'Expõe Kuhn', 'Exemplo histórico', 'Conclusão justificada'])],
  resumo: ['Indutivismo (Bacon).', 'Hipotético-dedutivo (Hempel).', 'Falsificacionismo (Popper).', 'Paradigmas (Kuhn); programas (Lakatos); "tudo vale" (Feyerabend).', 'Realismo × antirrealismo.'],
  referencias: [{ texto: 'Karl Popper, A Lógica da Pesquisa Científica (1934).' }, { texto: 'Thomas Kuhn, A Estrutura das Revoluções Científicas (1962).' }, { texto: 'Bas van Fraassen, A Imagem Científica (1980).' }],
  revisao: [['Popper', 'Falsificabilidade como critério de demarcação.'], ['Kuhn', 'Paradigmas, ciência normal, revoluções (1962).'], ['Argumento do milagre', 'Sucesso da ciência → teorias aproximadamente verdadeiras.']],
  avancado: {
    texto: `<h3>Ciência e fé: a tese do conflito</h3>
<p>No século XIX, John William Draper (1874) e Andrew Dickson White (1896) difundiram a "tese do conflito" entre ciência e religião. Historiadores da ciência (Ronald Numbers, org., Galileu na prisão e outros mitos sobre ciência e religião, 2009) mostraram que muitos episódios citados são mitos ou simplificações ${tag('fato')}. Isso não elimina conflitos reais (o caso Galileu), mas os situa historicamente.</p>
<h3>Duhem e as origens medievais</h3>
<p>A "tese de Duhem" sobre a continuidade entre física medieval e moderna foi discutida e matizada por Alexandre Koyré (que insistiu na ruptura galileana) e por historiadores posteriores ${tag('debate')}.</p>
<h3>Realismo estrutural</h3>
<p>John Worrall (1989) propôs que o que sobrevive às revoluções é a estrutura matemática das teorias, não sua ontologia — tentativa de conciliar o argumento do milagre e a meta-indução pessimista ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ronald Numbers (org.), Galileu na Prisão e Outros Mitos sobre Ciência e Religião (2009).' }, { texto: 'John Worrall, "Structural Realism" (1989).' }],
    exercicios: [
      mc('A "tese do conflito" foi difundida por:', ['Draper e White', 'Duhem e Koyré', 'Kuhn e Popper', 'Numbers e Worrall'], 0, 'Século XIX.'),
      mc('Koyré insistiu, sobre Galileu, na:', ['Continuidade medieval', 'Ruptura', 'Irrelevância', 'Religião'], 1, 'Contra a tese de Duhem.'),
      mc('O realismo estrutural afirma que sobrevive às revoluções:', ['A ontologia', 'A estrutura matemática', 'O paradigma', 'Nada'], 1, 'Worrall, 1989.'),
      disc('Ciência e fé estão em conflito, em independência ou em diálogo? Use dados históricos e Fides et Ratio.', ['Expõe os modelos', 'Usa história', 'Usa FR', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm6-7', titulo: 'Limites do conhecimento',
  aprendera: ['Os limites da razão segundo Kant', 'Limites formais: os teoremas de Gödel', 'O "mistério" na filosofia da mente', 'A douta ignorância e a teologia negativa'],
  explicacao: `
<h3>Saber o que não se sabe</h3>
<p>Sócrates chamou de sabedoria humana reconhecer a própria ignorância. A filosofia moderna e contemporânea investigou de modo preciso onde estão os limites do conhecimento.</p>
<h3>Kant</h3>
<p>Para Kant, conhecemos só os fenômenos (as coisas como nos aparecem), não as coisas em si. A razão, ao pretender conhecer Deus, a alma e o mundo como totalidade, cai em ilusões e antinomias (Dialética Transcendental) ${tag('interpretacao')}. Mas Kant afirma ter limitado o saber "para dar lugar à fé" (Prefácio da 2ª edição, B XXX) ${tag('fato')}.</p>
<h3>Limites formais</h3>
<p>Kurt Gödel (1931) provou que todo sistema formal consistente capaz de expressar a aritmética contém verdades que não pode provar, e não pode provar a própria consistência ${tag('fato')}. Alguns filósofos (J. R. Lucas, Roger Penrose) usaram os teoremas para argumentar que a mente humana não é um computador; outros contestam essa inferência ${tag('debate')}.</p>
<h3>Limites na física</h3>
<p>O princípio de incerteza de Heisenberg (1927) limita a precisão simultânea de posição e momento. Discute-se se isso é um limite do conhecimento ou uma propriedade da realidade ${tag('debate')}.</p>
<h3>O "novo misterianismo"</h3>
<p>Colin McGinn (1989) sugeriu que a relação entre consciência e cérebro pode estar fora do alcance cognitivo humano, como a física está fora do alcance de um cão ${tag('interpretacao')}.</p>
<h3>Douta ignorância e teologia negativa</h3>
<p>Nicolau de Cusa (A douta ignorância, 1440) sustentou que o infinito excede toda proporção com o finito, e que saber isso é uma "ignorância douta". A teologia negativa (Pseudo-Dionísio, Tomás) afirma que de Deus sabemos mais o que não é do que o que é (Suma I, q. 3, prólogo) ${tag('fato')}. Limites do conhecimento não são, para essa tradição, ceticismo, mas reconhecimento da transcendência ${tag('interpretacao')}.</p>`,
  vocabulario: [['Fenômeno × coisa em si', 'O que aparece × o que é independentemente de nós (Kant).'], ['Antinomia', 'Conflito entre teses igualmente demonstráveis.'], ['Incompletude', 'Existência de verdades não demonstráveis num sistema formal (Gödel).'], ['Misterianismo', 'Tese de que certos problemas excedem a capacidade humana.'], ['Douta ignorância', 'Saber consciente dos próprios limites diante do infinito.']],
  exemplos: '<p>Reconhecer que não sabemos tudo sobre o universo não implica que não sabemos nada: sabemos com segurança que a Terra gira em torno do Sol, e também que há perguntas abertas sobre a matéria escura.</p>',
  contexto: `<p>Tomás afirma que a mente humana, nesta vida, conhece Deus pelos efeitos e por analogia, não pela essência (Suma I, q. 12, a. 12) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que reconhecer limites não leva ao ceticismo', tag: 'argumento',
    premissas: ['Para reconhecer um limite, é preciso saber algo sobre os dois lados dele.', 'O cético radical afirma não saber nada.', 'Quem identifica limites precisos (Kant, Gödel) sabe muito.'],
    conclusao: 'Logo, conhecer limites é uma forma de conhecimento, não sua negação.',
    nota: 'Hegel usou argumento semelhante contra Kant: traçar o limite já é ultrapassá-lo em pensamento.' },
  objecoes: [{ objecao: 'Os limites de Kant tornam impossível a metafísica e a teologia natural.', tag: 'debate', resposta: 'Tomistas e realistas contestam a teoria kantiana do conhecimento que gera esses limites; Fides et Ratio pede filosofia com "alcance metafísico" (§83). Kantianos respondem que a razão prática ainda pode afirmar Deus como postulado.' }],
  aplicacao: '<p>Escreva no Caderno três coisas que você julga impossíveis de saber e três que eram consideradas impossíveis e passaram a ser conhecidas. O que distingue os dois grupos?</p>',
  fonte: { obra: 'Kant, Crítica da Razão Pura, Prefácio da 2ª edição; Tomás, Suma I, q. 12, a. 12', link: null, orientacao: '<p>Leia o Prefácio B (sobre a "revolução copernicana") e o artigo de Tomás sobre o conhecimento natural de Deus. Compare os limites que cada um traça.</p>' },
  perguntas: [
    { p: 'O que conhecemos, segundo Kant?', r: 'Só os fenômenos, não as coisas em si.' },
    { p: 'O que provou Gödel em 1931?', r: 'Que sistemas formais consistentes que expressam a aritmética contêm verdades não demonstráveis neles.' },
    { p: 'O que é a douta ignorância?', r: 'Saber consciente dos próprios limites diante do infinito (Nicolau de Cusa).' },
  ],
  exercicios: [
    mc('Kant diz ter limitado o saber para:', ['Destruir a fé', 'Dar lugar à fé', 'Fundar o ceticismo', 'Provar Deus'], 1, 'Prefácio B XXX.'),
    mc('"A douta ignorância" (1440) é de:', ['Tomás', 'Nicolau de Cusa', 'Eckhart', 'Pascal'], 1, 'Cusano.'),
    mc('O "novo misterianismo" sobre a consciência é associado a:', ['McGinn', 'Gödel', 'Heisenberg', 'Kant'], 0, 'Colin McGinn, 1989.'),
    mc('Para Tomás, nesta vida conhecemos Deus:', ['Pela essência', 'Pelos efeitos e por analogia', 'De modo algum', 'Só pela fé'], 1, 'Suma I, q. 12, a. 12.'),
    disc('Compare os limites do conhecimento em Kant e na teologia negativa. Qual deles deixa espaço para a metafísica?', ['Expõe Kant', 'Expõe a teologia negativa', 'Compara', 'Conclusão justificada'])],
  resumo: ['Fenômeno × coisa em si (Kant).', 'Gödel e os limites formais.', 'Heisenberg e o debate sobre a incerteza.', 'Misterianismo.', 'Douta ignorância e teologia negativa.'],
  referencias: [{ texto: 'Kant, Crítica da Razão Pura, Prefácio B.' }, { texto: 'Nicolau de Cusa, A Douta Ignorância (1440).' }, { texto: 'Tomás de Aquino, Suma I, q. 12.' }],
  revisao: [['Kant B XXX', 'Limitar o saber para dar lugar à fé.'], ['Gödel (1931)', 'Incompletude.'], ['Douta ignorância', 'Nicolau de Cusa, 1440.']],
  avancado: {
    texto: `<h3>O argumento de Lucas–Penrose</h3>
<p>J. R. Lucas ("Minds, Machines and Gödel", 1961) e Roger Penrose (A Mente Nova do Rei, 1989) argumentaram que, como podemos "ver" a verdade da sentença de Gödel de um sistema, nossa mente não é equivalente a nenhum sistema formal. Críticos (Hilary Putnam, Solomon Feferman) respondem que não sabemos se somos consistentes, condição exigida pelo argumento ${tag('debate')}.</p>
<h3>Hegel contra Kant</h3>
<p>Hegel (Ciência da Lógica, 1812–1816) objetou que a "coisa em si" incognoscível é uma abstração vazia e que traçar um limite já é ultrapassá-lo ${tag('interpretacao')}.</p>
<h3>Mistério e problema</h3>
<p>Gabriel Marcel distinguiu "problema" (algo diante de mim, que posso resolver) e "mistério" (algo em que estou implicado, como o amor ou o ser) ${tag('interpretacao')} — distinção útil para não confundir limites técnicos com o mistério no sentido religioso.</p>`,
    leituras: [{ texto: 'J. R. Lucas, "Minds, Machines and Gödel" (1961).' }, { texto: 'Gabriel Marcel, Ser e Ter (1935).' }],
    exercicios: [
      mc('O argumento de que Gödel mostra que a mente não é um sistema formal é de:', ['Lucas e Penrose', 'Putnam e Feferman', 'Kant e Hegel', 'McGinn'], 0, '1961 e 1989.'),
      mc('A distinção "problema × mistério" é de:', ['Marcel', 'Kant', 'Cusa', 'Hegel'], 0, 'Gabriel Marcel.'),
      mc('Hegel objetou que traçar um limite:', ['É impossível', 'Já é ultrapassá-lo em pensamento', 'É fé', 'É ceticismo'], 1, 'Contra Kant.'),
      disc('Os teoremas de Gödel têm consequências sobre a natureza da mente? Avalie Lucas-Penrose e a crítica.', ['Expõe Gödel com precisão', 'Expõe o argumento', 'Expõe a crítica', 'Conclusão cautelosa'])],
  },
}),

avaliacao('m6-8', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Fontes e estrutura da justificação, ceticismo, percepção, a priori, causalidade, método científico e limites do conhecimento.</p>`,
[
  disc('Escreva um ensaio de 30 a 50 linhas: "Podemos conhecer a realidade tal como ela é?" Use ao menos três posições estudadas (realismo tomista, representacionismo, Kant, ceticismo) e conclua com justificação.', ['Expõe três posições com fidelidade', 'Reconstrói ao menos um argumento', 'Responde a uma objeção', 'Conclusão justificada', 'Referências corretas']),
  disc('Hume tem razão sobre a causalidade? Compare sua posição com Kant, Anscombe e o princípio de causalidade tomista.', ['Expõe Hume', 'Expõe duas respostas', 'Avalia', 'Conclusão justificada']),
]),
];
