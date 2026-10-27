// Módulo 7 — Metafísica e filosofia da religião: aulas 1 a 6.
import { tag, LINKS } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm7-1', titulo: 'O que é metafísica?',
  aprendera: ['O objeto da metafísica segundo Aristóteles e Tomás', 'As críticas de Hume, Kant e do positivismo lógico', 'O retorno da metafísica na filosofia analítica', 'Por que é impossível evitar toda metafísica'],
  prereq: ['Módulo 5, aula 8: Substância e a Metafísica'],
  explicacao: `
<h3>A ciência do ser enquanto ser</h3>
<p>Aristóteles descreve uma ciência que estuda "o ser enquanto ser" e o que lhe pertence por si (Metafísica IV, 1), e que é também ciência das causas primeiras e da substância divina (I, 2; XII) ${tag('fato')}. Tomás, no proêmio ao comentário da Metafísica, reúne os três nomes: <em>metafísica</em> (por tratar do ente em geral e do que transcende o físico), <em>filosofia primeira</em> (por tratar das causas primeiras) e <em>teologia</em> (por tratar das substâncias separadas e de Deus) ${tag('interpretacao')}.</p>
<h3>Os grandes temas</h3>
<p>O que é existir? O que é uma coisa (substância)? O que permanece na mudança? Há universais? O que é causa? Há um primeiro princípio de tudo? Que relação há entre mente e matéria? ${tag('argumento')}</p>
<h3>Críticas</h3>
<ul>
<li><strong>Hume</strong>: um livro de "metafísica escolástica" que não contenha raciocínio abstrato sobre quantidade ou número, nem raciocínio experimental sobre questões de fato, deve ser lançado às chamas, pois só contém sofismas e ilusão (Investigação, seção XII, final) ${tag('fato')}.</li>
<li><strong>Kant</strong>: a metafísica tradicional ultrapassa os limites da experiência possível; só uma metafísica crítica é legítima ${tag('interpretacao')}.</li>
<li><strong>Positivismo lógico</strong>: Rudolf Carnap ("A superação da metafísica pela análise lógica da linguagem", 1932) e A. J. Ayer (Linguagem, verdade e lógica, 1936) afirmaram que proposições metafísicas não são falsas, mas sem sentido, por não serem verificáveis ${tag('fato')}.</li>
</ul>
<h3>O retorno</h3>
<p>O critério de verificação foi abandonado porque não se verificava a si mesmo ${tag('argumento')}. P. F. Strawson (Indivíduos, 1959) propôs uma "metafísica descritiva"; Kripke, David Lewis e outros reabriram questões de necessidade, identidade e mundos possíveis. A metafísica é hoje um campo ativo da filosofia analítica ${tag('fato')}.</p>
<h3>Não há como fugir</h3>
<p>Afirmar "só existe a matéria" ou "só vale o que a ciência prova" já é uma tese metafísica. A escolha não é entre ter ou não ter metafísica, mas entre uma examinada e outra não examinada ${tag('argumento')}.</p>`,
  vocabulario: [['Ser enquanto ser', 'O ente considerado só como ente, não como físico ou matemático.'], ['Filosofia primeira', 'Ciência dos primeiros princípios e causas.'], ['Verificacionismo', 'Só tem sentido o que é verificável empiricamente.'], ['Metafísica descritiva', 'Descrição da estrutura real do nosso pensamento sobre o mundo (Strawson).'], ['Ontologia', 'Parte da metafísica sobre o que existe.']],
  exemplos: '<p>"A mente é só o cérebro" (fisicalismo), "o futuro já existe" (eternalismo), "números existem" (platonismo matemático): todas são teses metafísicas, discutidas hoje em universidades.</p>',
  contexto: `<p>O Círculo de Viena (c. 1924–1936) reunia filósofos e cientistas que buscavam uma "concepção científica do mundo" e rejeitavam a metafísica ${tag('fato')}.</p>`,
  argumento: { titulo: 'O verificacionismo se refuta (reconstrução)', tag: 'argumento',
    premissas: ['O verificacionismo afirma: só tem sentido a proposição verificável empiricamente ou analítica.', 'Essa afirmação não é verificável empiricamente nem analítica.', 'Logo, segundo o próprio critério, ela não tem sentido.'],
    conclusao: 'Portanto, o verificacionismo não pode ser afirmado com sentido.',
    nota: 'Mesma estrutura do argumento contra o cientificismo (Módulo 3, aula 8). Os próprios positivistas reconheceram o problema e propuseram o critério como "recomendação".' },
  objecoes: [{ objecao: 'A metafísica não progride; é só disputa de palavras.', tag: 'debate', resposta: 'Defensores apontam progressos: distinções conceituais mais finas, eliminação de posições incoerentes, contribuições à lógica e à física. Críticos mantêm o ceticismo. Note que a própria objeção pressupõe uma tese sobre o que conta como progresso.' }],
  aplicacao: '<p>Liste no Caderno cinco crenças metafísicas que você tem (sobre o tempo, a alma, Deus, a liberdade, as leis da natureza). Para cada uma, indique se já a examinou.</p>',
  fonte: { obra: 'Aristóteles, Metafísica IV, 1–2; Hume, Investigação XII, parte 3', link: null, orientacao: '<p>Compare o início de Metafísica IV com o final da Investigação de Hume. Reconstrua o argumento de Hume e diga se ele mesmo passa no próprio teste.</p>' },
  perguntas: [
    { p: 'Quais os três nomes da ciência descrita por Aristóteles, segundo Tomás?', r: 'Metafísica, filosofia primeira e teologia.' },
    { p: 'O que afirmava o positivismo lógico sobre a metafísica?', r: 'Que suas proposições são sem sentido, por não serem verificáveis.' },
    { p: 'Por que o verificacionismo se refuta?', r: 'Porque o próprio critério não é verificável nem analítico.' },
  ],
  exercicios: [
    mc('"Lançá-lo às chamas" é conselho de Hume sobre livros de:', ['Física', 'Metafísica escolástica', 'Matemática', 'História'], 1, 'Investigação XII.'),
    mc('"Linguagem, verdade e lógica" (1936) é de:', ['Carnap', 'Ayer', 'Strawson', 'Kripke'], 1, 'A. J. Ayer.'),
    mc('A "metafísica descritiva" é de:', ['Strawson', 'Lewis', 'Carnap', 'Heidegger'], 0, 'Indivíduos (1959).'),
    mc('"Só existe a matéria" é uma tese:', ['Científica', 'Metafísica', 'Lógica', 'Teológica'], 1, 'Não é resultado de experimento.'),
    disc('É possível viver ou fazer ciência sem nenhuma tese metafísica? Argumente com exemplos.', ['Define metafísica', 'Exemplos de pressupostos metafísicos', 'Considera a objeção positivista', 'Conclusão justificada'])],
  resumo: ['Ciência do ser enquanto ser e das causas primeiras.', 'Críticas: Hume, Kant, positivismo lógico.', 'Verificacionismo se refuta.', 'Retorno analítico.', 'Toda posição tem metafísica, examinada ou não.'],
  referencias: [{ texto: 'Aristóteles, Metafísica IV, 1–2.' }, { texto: 'Tomás de Aquino, Proêmio ao Comentário à Metafísica.' }, { texto: 'A. J. Ayer, Linguagem, Verdade e Lógica (1936).' }],
  revisao: [['Metafísica (Aristóteles)', 'Ciência do ser enquanto ser (Met. IV, 1).'], ['Verificacionismo', 'Positivismo lógico: só tem sentido o verificável.'], ['Retorno da metafísica', 'Strawson, Kripke, Lewis.']],
  avancado: {
    texto: `<h3>Heidegger e a pergunta pelo ser</h3>
<p>Heidegger (Que é metafísica?, 1929; Ser e Tempo, 1927) acusou a metafísica ocidental de "esquecimento do ser": pensou os entes e o ente supremo, mas não o ser mesmo — a chamada "onto-teo-logia" ${tag('interpretacao')}. Tomistas (Gilson, Cornelio Fabro) responderam que Tomás, ao pensar o ser como ato (esse), escapa a essa acusação ${tag('debate')}.</p>
<h3>Metaontologia</h3>
<p>Debates recentes perguntam se as questões ontológicas são substantivas ou verbais (Eli Hirsch) e se há "estrutura" real no mundo (Ted Sider, Writing the Book of the World, 2011) ${tag('debate')}.</p>
<h3>Quine e o compromisso ontológico</h3>
<p>Quine ("Sobre o que há", 1948): uma teoria está comprometida com as entidades que precisam estar entre os valores de suas variáveis para que ela seja verdadeira ${tag('fato')} — critério que tornou a ontologia de novo respeitável no ambiente analítico.</p>`,
    leituras: [{ texto: 'Martin Heidegger, Que é Metafísica? (1929).' }, { texto: 'W. V. O. Quine, "Sobre o que há" (1948).' }],
    exercicios: [
      mc('"Esquecimento do ser" é acusação de:', ['Kant', 'Heidegger', 'Quine', 'Carnap'], 1, 'Contra a metafísica ocidental.'),
      mc('Para Quine, ser é:', ['Ser percebido', 'Ser valor de uma variável', 'Ser substância', 'Ser pensado'], 1, '"Sobre o que há" (1948).'),
      mc('Os tomistas responderam a Heidegger apoiando-se no:', ['Esse como ato', 'Nominalismo', 'Kantismo', 'Atomismo'], 0, 'Gilson, Fabro.'),
      disc('A acusação de "esquecimento do ser" atinge Tomás? Argumente.', ['Expõe Heidegger', 'Expõe a resposta tomista', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-2', titulo: 'Ser, ente e existência',
  aprendera: ['A diferença entre ente, essência e ser', 'A pergunta "por que há algo em vez de nada?"', 'A analogia do ser', 'O debate sobre a existência como predicado'],
  prereq: ['Aula 1 deste módulo'],
  explicacao: `
<h3>Três palavras</h3>
<ul>
<li><strong>Ente</strong> (<em>ens</em>): aquilo que é — esta árvore, este número, Deus.</li>
<li><strong>Essência</strong> (<em>essentia</em>): o que algo é — ser árvore.</li>
<li><strong>Ser</strong> (<em>esse</em>): o ato pelo qual algo é — o "existir" da árvore ${tag('argumento')}.</li>
</ul>
<p>Em português, "ser" pode significar tanto o ente ("um ser vivo") quanto o ato de ser ("o ser da árvore"). Distinguir os sentidos é condição para ler Tomás.</p>
<h3>A pergunta fundamental</h3>
<p>Leibniz (Princípios da Natureza e da Graça, §7, 1714): por que há algo em vez de nada? Pois o nada é mais simples e mais fácil que algo ${tag('fato')}. Heidegger a chamou de pergunta fundamental da metafísica. Respostas: Deus como ser necessário (Leibniz, Tomás); o universo como fato bruto (Russell); a pergunta seria mal formulada (alguns positivistas) ${tag('debate')}.</p>
<h3>Analogia do ser</h3>
<p>"Ser" se diz de muitos modos (Aristóteles): da substância e dos acidentes, de Deus e das criaturas. Para Tomás, não de modo unívoco (como se Deus e criaturas fossem do mesmo tipo) nem equívoco (como se nada tivessem em comum), mas análogo ${tag('argumento')}. Escoto defendeu um conceito unívoco mínimo de ser (Módulo 4, aula 2) ${tag('debate')}.</p>
<h3>A existência é um predicado?</h3>
<p>Kant: dizer "Deus existe" não acrescenta uma propriedade ao conceito de Deus; afirma que algo corresponde ao conceito. Cem táleres reais não contêm mais que cem táleres possíveis (Crítica da Razão Pura, A 599/B 627) ${tag('fato')}. Frege e Russell formalizaram: existência é um quantificador ("há x tal que..."), não uma propriedade dos indivíduos ${tag('interpretacao')}. Tomistas aceitam que a existência não é uma nota da essência, mas sustentam que o ato de ser é o mais real de tudo ${tag('debate')}.</p>`,
  vocabulario: [['Ens', 'Ente: aquilo que é.'], ['Esse', 'Ato de ser.'], ['Essentia', 'O que algo é.'], ['Fato bruto', 'Fato sem explicação.'], ['Quantificador existencial', '"Há pelo menos um x tal que..."']],
  exemplos: '<p>Um unicórnio tem essência (cavalo com um chifre), mas não tem ato de ser real; Pégaso é ente de razão. O "ser" do unicórnio é só ser pensado.</p>',
  contexto: `<p>O termo latino esse como ato de ser foi elaborado por Tomás a partir de Boécio, Avicena e do Livro das Causas ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Por que há algo em vez de nada (Leibniz, reconstruído)', tag: 'argumento',
    premissas: ['Nada acontece sem razão suficiente.', 'A série de coisas contingentes, mesmo infinita, não contém em si a razão de sua existência.', 'Logo, a razão deve estar fora da série, num ser que tenha em si a razão de existir: um ser necessário.'],
    conclusao: 'Portanto, há algo porque existe um ser necessário, que chamamos Deus.',
    nota: 'A premissa 1 (princípio de razão suficiente) é o centro do debate. Críticos dizem que ela leva ao necessitarismo (tudo seria necessário).' },
  objecoes: [{ objecao: 'Russell (debate com Copleston, 1948): o universo simplesmente existe; não há razão para que tenha razão.', tag: 'debate', resposta: 'Defensores respondem que aceitar fatos brutos na base da realidade é renunciar à inteligibilidade que a própria ciência pressupõe. Críticos dizem que exigir razão para o todo é extrapolar.' }],
  aplicacao: '<p>Escreva no Caderno sua resposta pessoal à pergunta de Leibniz e a melhor objeção contra ela.</p>',
  fonte: { obra: 'Leibniz, Princípios da Natureza e da Graça §7–8; Kant, Crítica da Razão Pura A 592–602/B 620–630', link: null, orientacao: '<p>Leia os dois parágrafos de Leibniz e o trecho de Kant sobre a impossibilidade da prova ontológica, com o exemplo dos cem táleres.</p>' },
  perguntas: [
    { p: 'Qual a diferença entre essência e ser?', r: 'Essência é o que algo é; ser é o ato pelo qual algo é.' },
    { p: 'Quem formulou a pergunta "por que há algo em vez de nada?"', r: 'Leibniz (Princípios da Natureza e da Graça, §7).' },
    { p: 'O que diz Kant sobre a existência?', r: 'Que não é predicado real; não acrescenta nada ao conceito.' },
  ],
  exercicios: [
    mc('"Ser árvore" refere-se à:', ['Essência', 'Existência', 'Ente de razão', 'Causa'], 0, 'O que algo é.'),
    mc('O exemplo dos cem táleres é de:', ['Leibniz', 'Kant', 'Anselmo', 'Tomás'], 1, 'Contra a prova ontológica.'),
    mc('Para Tomás, "ser" se diz de Deus e das criaturas:', ['Univocamente', 'Equivocamente', 'Analogicamente', 'De modo algum'], 2, 'Analogia do ser.'),
    mc('"O universo é um fato bruto" foi a posição de:', ['Copleston', 'Russell', 'Leibniz', 'Tomás'], 1, 'Debate de 1948.'),
    disc('A existência é um predicado? Compare Kant, Frege/Russell e a posição tomista.', ['Expõe Kant', 'Expõe Frege/Russell', 'Expõe Tomás', 'Conclusão justificada'])],
  resumo: ['Ente, essência, ser.', 'Por que há algo em vez de nada?', 'Analogia do ser.', 'Existência como predicado: Kant, Frege, Russell, Tomás.'],
  referencias: [{ texto: 'Leibniz, Princípios da Natureza e da Graça (1714).' }, { texto: 'Kant, Crítica da Razão Pura, A 592–602.' }, { texto: 'Tomás de Aquino, O Ente e a Essência.' }],
  revisao: [['Esse', 'Ato de ser.'], ['Leibniz §7', 'Por que há algo em vez de nada?'], ['Kant sobre existência', 'Não é predicado real (cem táleres).']],
  avancado: {
    texto: `<h3>O "existencialismo" tomista</h3>
<p>Gilson (O Ser e a Essência, 1948) e Jacques Maritain (Breve tratado da existência e do existente, 1947) leram Tomás como filósofo do <em>esse</em>, contra o "essencialismo" atribuído a Suárez e à escolástica tardia ${tag('interpretacao')}. Cornelio Fabro enfatizou a noção de participação ${tag('interpretacao')}.</p>
<h3>Meinong e os objetos inexistentes</h3>
<p>Alexius Meinong defendeu que há objetos que não existem (a montanha de ouro), com propriedades. Russell ("Sobre a denotação", 1905) respondeu com a teoria das descrições, evitando comprometer-se com eles ${tag('fato')}.</p>
<h3>O nada</h3>
<p>Heidegger ("Que é metafísica?") falou do nada que "nadifica"; Carnap usou essa frase como exemplo de pseudoproposição ${tag('fato')}. O confronto mostra duas concepções opostas de filosofia.</p>`,
    leituras: [{ texto: 'Étienne Gilson, O Ser e a Essência (1948).' }, { texto: 'Bertrand Russell, "Sobre a denotação" (1905).' }],
    exercicios: [
      mc('"O Ser e a Essência" (1948) é de:', ['Maritain', 'Gilson', 'Fabro', 'Suárez'], 1, 'Gilson.'),
      mc('A teoria das descrições responde a:', ['Kant', 'Meinong', 'Tomás', 'Heidegger'], 1, 'Russell, 1905.'),
      mc('Carnap usou como exemplo de pseudoproposição uma frase de:', ['Hegel', 'Heidegger', 'Tomás', 'Kant'], 1, '"O nada nadifica".'),
      disc('A crítica de Carnap a Heidegger é justa? Argumente com o que você aprendeu sobre o verificacionismo.', ['Expõe a crítica', 'Expõe Heidegger', 'Usa a autorrefutação', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-3', titulo: 'Essência e existência em Tomás de Aquino',
  aprendera: ['A estrutura do opúsculo O Ente e a Essência', 'A distinção real entre essência e ser nas criaturas', 'Deus como o próprio ser subsistente', 'O debate escolástico sobre a distinção real'],
  prereq: ['Aula 2: Ser, ente e existência'],
  explicacao: `
<h3>Um texto de juventude</h3>
<p>O Ente e a Essência (<em>De ente et essentia</em>, c. 1252–1256) foi escrito por Tomás, jovem bacharel em Paris, "a seus irmãos e companheiros" ${tag('fato')}. Em poucas páginas, fixa o vocabulário de sua metafísica.</p>
<h3>Ente e essência</h3>
<p>"Ente" se diz em dois sentidos: o que se divide nas dez categorias (ente real) e o que significa a verdade de uma proposição (ente de razão, como "a cegueira é") (cap. 1) ${tag('fato')}. A essência é aquilo pelo qual e no qual a coisa tem o ser; nos compostos, inclui matéria e forma (o homem é alma e corpo, não só alma) (cap. 2).</p>
<h3>A distinção real</h3>
<p>No capítulo 4, Tomás argumenta: posso entender o que é um homem ou uma fênix sem saber se existem; logo, o ser (<em>esse</em>) é diferente da essência, a menos que haja uma coisa cuja essência seja o próprio ser ${tag('argumento')}. Essa coisa só pode ser uma e primeira — Deus. Em todas as outras, o ser é recebido de outro: as criaturas são compostas de essência (como potência) e ser (como ato) ${tag('argumento')}.</p>
<h3>Deus: ipsum esse subsistens</h3>
<p>Em Deus não há distinção entre essência e ser: Ele é o próprio ser subsistente (Suma I, q. 3, a. 4; q. 4) ${tag('argumento')}. Tomás liga isso a Êxodo 3,14 ("Eu sou aquele que é"), que considera o nome mais próprio de Deus (Suma I, q. 13, a. 11) ${tag('interpretacao')}.</p>
<h3>Consequências</h3>
<ul>
<li>Toda criatura depende continuamente de Deus para existir, não só para começar.</li>
<li>Até os anjos (formas sem matéria) são compostos: de essência e ser.</li>
<li>A criação não é mudança de uma matéria preexistente, mas comunicação do ser.</li>
</ul>`,
  vocabulario: [['Ente de razão', 'Ente que existe só no pensamento ou na proposição.'], ['Distinção real', 'Diferença entre essência e ser nas criaturas, não só no pensamento.'], ['Ipsum esse subsistens', 'O próprio ser subsistente: Deus.'], ['Participação', 'As criaturas têm o ser recebido de Deus.'], ['Quididade', 'O "o que" de uma coisa: sua essência.']],
  exemplos: '<p>Entendo o que é um dinossauro sem saber, pela definição, se existe hoje algum. Isso mostra que "o que é" e "que é" são diferentes — ponto de partida do argumento do capítulo 4.</p>',
  contexto: `<p>Tomás se apoia em Avicena, que distinguira a essência considerada em si da existência, e em Boécio (De hebdomadibus: "o ser e o que é são diversos") ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento do intelecto e da essência (O Ente e a Essência, cap. 4, reconstruído)', tag: 'argumento',
    premissas: ['Tudo o que não pertence ao conceito da essência vem de fora e se compõe com ela.', 'Posso entender a essência de algo (homem, fênix) sem saber se existe.', 'Logo, o ser não pertence ao conceito da essência dessas coisas.', 'Só pode haver uma coisa cuja essência seja o próprio ser, e ela é primeira.'],
    conclusao: 'Portanto, em todas as outras coisas, o ser é distinto da essência e recebido de outro.',
    nota: 'Críticos (como Anthony Kenny, Aquinas on Being, 2002) acham que o primeiro passo prova só uma distinção de conceitos, não real. Defensores dizem que Tomás completa o argumento com a impossibilidade de muitos seres cuja essência é ser.' },
  objecoes: [{ objecao: 'A distinção é só de razão: na coisa real, essência e existência são o mesmo (Suárez).', tag: 'debate', resposta: 'Francisco Suárez (Disputas Metafísicas, 1597, disp. 31) defendeu a distinção de razão. Tomistas como Caetano e, no século XX, Gilson e Fabro sustentam que só a distinção real preserva a contingência radical das criaturas.' }],
  aplicacao: '<p>Explique a um amigo, em cinco frases, por que, segundo Tomás, uma pedra depende de Deus agora, e não só no começo do mundo.</p>',
  fonte: { obra: 'Tomás de Aquino, O Ente e a Essência, prólogo e caps. 1–4', link: null, orientacao: '<p>Leia o opúsculo inteiro (cerca de 30 páginas). Faça uma ficha por capítulo e reconstrua o argumento do capítulo 4.</p>' },
  perguntas: [
    { p: 'Quais os dois sentidos de "ente"?', r: 'O real (dividido nas categorias) e o de razão (a verdade de uma proposição).' },
    { p: 'O que é a distinção real?', r: 'Nas criaturas, essência e ser são realmente distintos: a essência recebe o ser.' },
    { p: 'Como Tomás chama Deus?', r: 'Ipsum esse subsistens, o próprio ser subsistente.' },
  ],
  exercicios: [
    mc('"A cegueira é" exemplifica:', ['Ente real', 'Ente de razão', 'Substância', 'Ato puro'], 1, 'Verdade da proposição, não ente real.'),
    mc('Nos anjos, segundo Tomás, há composição de:', ['Matéria e forma', 'Essência e ser', 'Nenhuma', 'Acidentes apenas'], 1, 'Não têm matéria, mas não são o próprio ser.'),
    mc('A distinção de razão entre essência e existência foi defendida por:', ['Tomás', 'Suárez', 'Caetano', 'Gilson'], 1, 'Disputas Metafísicas, disp. 31.'),
    mc('O nome que Tomás considera mais próprio de Deus é:', ['Bom', '"Aquele que é"', 'Uno', 'Criador'], 1, 'Suma I, q. 13, a. 11; Ex 3,14.'),
    disc('Reconstrua o argumento do capítulo 4 e avalie a objeção de Kenny de que ele prova só uma distinção conceitual.', ['Reconstrução fiel', 'Expõe Kenny', 'Considera a resposta tomista', 'Conclusão justificada'])],
  resumo: ['Ente real e de razão.', 'Essência nos compostos: matéria e forma.', 'Distinção real nas criaturas.', 'Deus: ipsum esse subsistens.', 'Dependência contínua das criaturas.'],
  referencias: [{ texto: 'Tomás de Aquino, O Ente e a Essência.' }, { texto: 'Tomás de Aquino, Suma I, q. 3–4.', link: LINKS.sumaQ2 }, { texto: 'Anthony Kenny, Aquinas on Being (2002).' }],
  revisao: [['Ipsum esse subsistens', 'Deus: o próprio ser subsistente.'], ['Distinção real', 'Essência ≠ ser nas criaturas.'], ['De ente et essentia', 'Tomás, c. 1252–1256.']],
  avancado: {
    texto: `<h3>A controvérsia medieval</h3>
<p>Depois de Tomás, Egídio Romano defendeu a distinção real como entre duas "coisas"; Henrique de Gand e Godofredo de Fontaines a criticaram ${tag('fato')}. Os tomistas posteriores distinguiram entre a distinção real "como entre coisa e coisa" e "como entre princípios" (ato e potência no mesmo ente) ${tag('interpretacao')}.</p>
<h3>Participação</h3>
<p>Cornelio Fabro (A noção metafísica de participação segundo Tomás de Aquino, 1939) mostrou o peso platônico da noção: as criaturas participam do ser que Deus é por essência ${tag('interpretacao')}. Isso relativiza a imagem de um Tomás puramente aristotélico.</p>
<h3>Leitura analítica</h3>
<p>Barry Miller e Gyula Klima reconstruíram a doutrina do esse com instrumentos da lógica contemporânea, em diálogo com a crítica de Kenny ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Cornelio Fabro, La nozione metafisica di partecipazione (1939).' }, { texto: 'John F. Wippel, The Metaphysical Thought of Thomas Aquinas (2000).' }],
    exercicios: [
      mc('Egídio Romano defendeu a distinção real:', ['Como entre duas coisas', 'Como de razão', 'Nenhuma', 'Como de linguagem'], 0, 'Versão forte.'),
      mc('Fabro enfatizou em Tomás a noção de:', ['Univocidade', 'Participação', 'Ocasionalismo', 'Atomismo'], 1, '1939.'),
      mc('"The Metaphysical Thought of Thomas Aquinas" (2000) é de:', ['Wippel', 'Kenny', 'Klima', 'Gilson'], 0, 'John Wippel.'),
      disc('A distinção real é "entre coisas" ou "entre princípios"? Qual leitura preserva melhor a doutrina e evita objeções?', ['Distingue as leituras', 'Avalia vantagens', 'Responde a objeção', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-4', titulo: 'Substância e acidente',
  aprendera: ['As funções da substância: sujeito, permanência, unidade', 'As críticas de Locke e de Hume', 'A teoria do feixe e a do substrato', 'A identidade ao longo do tempo: o navio de Teseu'],
  prereq: ['Módulo 5, aula 8'],
  explicacao: `
<h3>Por que precisamos de substâncias</h3>
<p>A noção de substância responde a três perguntas ${tag('argumento')}:</p>
<ol><li><strong>Sujeito</strong>: o que sustenta as qualidades? (O branco é branco de algo.)</li><li><strong>Permanência</strong>: o que permanece quando algo muda? (Sócrates pálido e depois bronzeado.)</li><li><strong>Unidade</strong>: o que faz de um conjunto de partes uma única coisa? (Um cão, não um amontoado de células.)</li></ol>
<h3>Aristóteles e Tomás</h3>
<p>A substância é o que existe em si e não em outro; os acidentes existem na substância. A substância de um ser vivo é composta de matéria e forma substancial: a alma é a forma que dá unidade ao organismo ${tag('argumento')}.</p>
<h3>As críticas modernas</h3>
<ul>
<li><strong>Locke</strong> (Ensaio II, 23): a ideia de substância é a de "um não sei quê" que suporta as qualidades; não temos ideia clara dele ${tag('fato')}.</li>
<li><strong>Hume</strong> (Tratado I, 1, 6; I, 4, 6): não há impressão de substância; uma coisa é um feixe de qualidades; o eu é "um feixe ou coleção de diferentes percepções" ${tag('fato')}.</li>
</ul>
<h3>Teorias contemporâneas</h3>
<ul>
<li><strong>Teoria do feixe</strong>: um objeto é um feixe de propriedades (ou de tropos, propriedades particulares).</li>
<li><strong>Teoria do substrato</strong>: há um portador "nu" das propriedades.</li>
<li><strong>Neoaristotelismo</strong> (David Wiggins, E. J. Lowe): substâncias são indivíduos de um tipo (sortais), com critérios de identidade próprios ${tag('debate')}.</li>
</ul>
<h3>O navio de Teseu</h3>
<p>Plutarco relata que os atenienses conservaram o navio de Teseu trocando as tábuas podres por novas; os filósofos discutiam se era o mesmo navio. Hobbes acrescentou: e se alguém juntar as tábuas velhas e montar outro navio? Qual é o de Teseu? ${tag('fato')} O caso testa critérios de identidade: continuidade da forma, da matéria ou da história.</p>`,
  vocabulario: [['Substância', 'O que existe em si e não em outro.'], ['Acidente', 'O que existe em outro (qualidade, quantidade...).'], ['Teoria do feixe', 'Objeto como feixe de propriedades.'], ['Substrato nu', 'Portador sem propriedades próprias.'], ['Sortal', 'Conceito que diz que tipo de coisa algo é.']],
  exemplos: '<p>Todas as células do seu corpo se renovam em ritmos diferentes; você é o mesmo de dez anos atrás? Para o hilemorfismo, sim, porque a forma (a alma) permanece; para a teoria do feixe, a resposta é mais difícil.</p>',
  contexto: `<p>A noção de substância é central também na teologia (transubstanciação, Módulo 1) e na antropologia (alma, Módulo 15) ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Contra a teoria do feixe (argumento clássico, reconstruído)', tag: 'argumento',
    premissas: ['Se um objeto fosse apenas um feixe de propriedades, dois objetos com as mesmas propriedades seriam o mesmo objeto (identidade dos indiscerníveis).', 'É possível haver dois objetos com as mesmas propriedades qualitativas (duas esferas idênticas num universo simétrico, exemplo de Max Black, 1952).', 'Logo, a teoria do feixe, ao menos na versão qualitativa, falha.'],
    conclusao: 'Portanto, há algo além das propriedades que individualiza os objetos.',
    nota: 'Defensores do feixe respondem com propriedades relacionais ou com tropos (propriedades particulares). Para o tomismo, o princípio de individuação é a matéria quantificada.' },
  objecoes: [{ objecao: 'A física fala de campos e partículas, não de substâncias.', tag: 'debate', resposta: 'Neoaristotélicos respondem que a física descreve propriedades e estruturas, mas não elimina a pergunta pelos portadores e pela unidade dos organismos. Outros defendem uma "metafísica de processos" (Whitehead) ou um realismo estrutural.' }],
  aplicacao: '<p>Resolva o navio de Teseu segundo três critérios (forma, matéria, história) e diga qual lhe parece correto.</p>',
  fonte: { obra: 'Locke, Ensaio II, 23 e 27; Hume, Tratado I, 4, 6', link: null, orientacao: '<p>Leia o capítulo de Locke sobre identidade pessoal (II, 27) e a seção de Hume sobre identidade pessoal. Compare os dois critérios.</p>' },
  perguntas: [
    { p: 'Quais as três funções da substância?', r: 'Sujeito, permanência e unidade.' },
    { p: 'Como Hume descreve o eu?', r: 'Como um feixe de percepções.' },
    { p: 'O que pergunta o navio de Teseu?', r: 'Se algo continua o mesmo quando todas as partes são trocadas.' },
  ],
  exercicios: [
    mc('O "não sei quê" que suporta as qualidades é expressão de:', ['Hume', 'Locke', 'Aristóteles', 'Berkeley'], 1, 'Ensaio II, 23.'),
    mc('As duas esferas idênticas são exemplo de:', ['Max Black', 'Leibniz', 'Hume', 'Wiggins'], 0, '1952.'),
    mc('Para o tomismo, o princípio de individuação é:', ['A forma', 'A matéria quantificada', 'O acidente', 'A essência'], 1, 'Materia signata quantitate.'),
    mc('Quem acrescentou ao navio de Teseu o navio feito das tábuas velhas?', ['Plutarco', 'Hobbes', 'Locke', 'Hume'], 1, 'De Corpore.'),
    disc('A teoria do feixe consegue explicar a unidade de um organismo vivo? Compare com o hilemorfismo.', ['Expõe a teoria do feixe', 'Expõe o hilemorfismo', 'Usa o exemplo do organismo', 'Conclusão justificada'])],
  resumo: ['Substância: sujeito, permanência, unidade.', 'Críticas de Locke e Hume.', 'Feixe, substrato, neoaristotelismo.', 'Navio de Teseu.'],
  referencias: [{ texto: 'John Locke, Ensaio II, 23 e 27.' }, { texto: 'David Hume, Tratado I, 4, 6.' }, { texto: 'E. J. Lowe, The Four-Category Ontology (2006).' }],
  revisao: [['Hume sobre o eu', 'Feixe de percepções.'], ['Locke sobre substância', '"Um não sei quê".'], ['Navio de Teseu', 'Plutarco; variante de Hobbes.']],
  avancado: {
    texto: `<h3>Identidade dos indiscerníveis</h3>
<p>Leibniz sustentou que não há duas coisas exatamente iguais (Monadologia §9). Max Black ("The Identity of Indiscernibles", 1952) imaginou um universo com só duas esferas idênticas, como contraexemplo ${tag('debate')}.</p>
<h3>Quadridimensionalismo</h3>
<p>Alguns metafísicos (Theodore Sider, Four-Dimensionalism, 2001) sustentam que objetos são "vermes" espaço-temporais com partes temporais; outros (endurantistas) defendem que estão inteiramente presentes em cada momento ${tag('debate')}. O debate afeta a identidade pessoal e a responsabilidade moral.</p>
<h3>Hilemorfismo contemporâneo</h3>
<p>Kathrin Koslicki, Robert Koons e William Jaworski reabilitaram o hilemorfismo na filosofia analítica, como teoria da estrutura dos objetos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Max Black, "The Identity of Indiscernibles" (1952).' }, { texto: 'William Jaworski, Structure and the Metaphysics of Mind (2016).' }],
    exercicios: [
      mc('"Não há duas coisas exatamente iguais" é tese de:', ['Leibniz', 'Black', 'Hume', 'Locke'], 0, 'Monadologia §9.'),
      mc('O quadridimensionalismo afirma que objetos têm:', ['Só partes espaciais', 'Partes temporais', 'Nenhuma parte', 'Alma'], 1, 'Sider.'),
      mc('Um defensor contemporâneo do hilemorfismo é:', ['Jaworski', 'Ayer', 'Carnap', 'Hume'], 0, 'William Jaworski.'),
      disc('Endurantismo ou perdurantismo: qual explica melhor a responsabilidade por atos passados?', ['Expõe as duas teorias', 'Aplica à responsabilidade', 'Considera objeção', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-5', titulo: 'Ato e potência',
  aprendera: ['Tipos de potência: ativa e passiva', 'Ato primeiro e ato segundo', 'Aplicações: mudança, vida, conhecimento', 'Deus como ato puro e as disposições na metafísica atual'],
  prereq: ['Módulo 5, aulas 7–8'],
  explicacao: `
<h3>Revisão</h3>
<p>Potência é a capacidade real de ser ou de agir; ato é sua realização. A semente é carvalho em potência; o carvalho crescido, em ato (Módulo 5) ${tag('argumento')}.</p>
<h3>Distinções</h3>
<ul>
<li><strong>Potência passiva</strong>: capacidade de receber (a cera de ser moldada).</li>
<li><strong>Potência ativa</strong>: capacidade de agir (o fogo de aquecer).</li>
<li><strong>Ato primeiro</strong>: a posse de uma forma ou capacidade (saber geometria).</li>
<li><strong>Ato segundo</strong>: seu exercício (resolver agora um problema de geometria) ${tag('fato')}.</li>
</ul>
<h3>Três aplicações</h3>
<ol>
<li><strong>Mudança</strong>: "o ato do que está em potência, enquanto está em potência" (Física III, 1) — definição aristotélica do movimento ${tag('fato')}.</li>
<li><strong>Vida</strong>: a alma é "ato primeiro de um corpo natural que tem vida em potência" (Da Alma II, 1) ${tag('fato')}.</li>
<li><strong>Conhecimento</strong>: o intelecto, em potência para todas as formas, torna-se em ato o que conhece; na atualidade do conhecimento, intelecto e inteligível são um (Da Alma III, 4–5) ${tag('argumento')}.</li>
</ol>
<h3>Ato puro</h3>
<p>Se toda passagem da potência ao ato exige algo em ato, e se não pode haver regresso infinito numa série essencial, deve haver um ser que é só ato, sem potência alguma — o "ato puro" (<em>actus purus</em>) ${tag('argumento')}. Daí Tomás deduz atributos: imutável (não pode mudar, pois não tem potência), simples, perfeito, eterno (Suma I, q. 3–10).</p>
<h3>Disposições hoje</h3>
<p>Na metafísica analítica, "disposições" ou "poderes" (fragilidade, solubilidade, carga elétrica) voltaram ao centro: muitas propriedades fundamentais da física parecem disposicionais ${tag('debate')}. Filósofos como George Molnar (Powers, 2003) e Alexander Bird defendem que as leis da natureza decorrem desses poderes — tese próxima, em parte, da potência aristotélica ${tag('interpretacao')}.</p>`,
  vocabulario: [['Potência passiva', 'Capacidade de receber.'], ['Potência ativa', 'Capacidade de agir.'], ['Ato primeiro', 'Posse de uma forma ou capacidade.'], ['Ato segundo', 'Exercício dessa capacidade.'], ['Actus purus', 'Ato puro, sem potência: Deus.'], ['Disposição', 'Propriedade de tender a algo em certas condições.']],
  exemplos: '<p>Uma pianista dormindo tem a arte em ato primeiro; tocando, em ato segundo. Um bebê tem a capacidade de aprender piano em potência remota. A gradação potência–ato primeiro–ato segundo explica a diferença.</p>',
  contexto: `<p>Ato e potência são o par mais fecundo da metafísica aristotélica e a base de quase toda a teologia natural de Tomás ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Do ato puro à imutabilidade (Suma I, q. 9, a. 1, reconstruído)', tag: 'argumento',
    premissas: ['Tudo o que muda passa da potência ao ato em algum aspecto.', 'O ato puro não tem potência alguma.', 'Logo, o ato puro não pode mudar.'],
    conclusao: 'Portanto, Deus, sendo ato puro, é imutável.',
    nota: 'Teólogos contemporâneos (teístas "abertos", teologia do processo) contestam a imutabilidade em nome da relação viva de Deus com o mundo; defensores clássicos respondem que imutabilidade não é inércia, mas plenitude.' },
  objecoes: [{ objecao: 'Um Deus imutável não pode amar nem responder às orações.', tag: 'debate', resposta: 'A resposta clássica é que Deus quer eternamente tanto as orações quanto aquilo que concede por meio delas; o amor de Deus é ato, não paixão. Críticos acham que isso esvazia a relação pessoal.' }],
  aplicacao: '<p>Escolha uma habilidade sua e descreva-a em potência, ato primeiro e ato segundo. Depois aplique a distinção à fé (hábito × ato de crer).</p>',
  fonte: { obra: 'Aristóteles, Metafísica IX (Θ), 1–8; Física III, 1', link: null, orientacao: '<p>Leia Metafísica IX, 6 (ato e potência por analogia) e 8 (anterioridade do ato). Faça uma tabela de exemplos.</p>' },
  perguntas: [
    { p: 'Qual a definição aristotélica de movimento?', r: 'O ato do que está em potência, enquanto está em potência.' },
    { p: 'O que é ato primeiro e ato segundo?', r: 'Posse de uma capacidade e seu exercício.' },
    { p: 'Por que o ato puro é imutável?', r: 'Porque não tem potência e mudar é passar da potência ao ato.' },
  ],
  exercicios: [
    mc('A cera que pode ser moldada tem potência:', ['Ativa', 'Passiva', 'Nenhuma', 'Pura'], 1, 'Capacidade de receber.'),
    mc('Saber geometria sem estar usando é:', ['Potência pura', 'Ato primeiro', 'Ato segundo', 'Privação'], 1, 'Posse da capacidade.'),
    mc('"Ato primeiro de um corpo natural que tem vida em potência" é definição de:', ['Movimento', 'Alma', 'Matéria', 'Deus'], 1, 'Da Alma II, 1.'),
    mc('O livro de Molnar sobre poderes chama-se:', ['Powers', 'Dispositions', 'Laws', 'Being'], 0, '2003.'),
    disc('A imutabilidade de Deus é compatível com um Deus que ama e responde? Apresente a objeção e a resposta clássica.', ['Explica o argumento', 'Expõe a objeção', 'Expõe a resposta', 'Conclusão justificada'])],
  resumo: ['Potência ativa e passiva.', 'Ato primeiro e segundo.', 'Mudança, vida, conhecimento.', 'Ato puro e atributos.', 'Disposições na metafísica atual.'],
  referencias: [{ texto: 'Aristóteles, Metafísica IX; Física III, 1; Da Alma II, 1.' }, { texto: 'Tomás de Aquino, Suma I, q. 3–10.' }, { texto: 'George Molnar, Powers (2003).' }],
  revisao: [['Movimento (Física III, 1)', 'Ato do que está em potência enquanto em potência.'], ['Ato primeiro × segundo', 'Posse × exercício.'], ['Actus purus', 'Deus: ato sem potência.']],
  avancado: {
    texto: `<h3>Teísmo clássico × teísmo personalista</h3>
<p>Teístas clássicos (Brian Davies, Edward Feser) defendem simplicidade, imutabilidade e impassibilidade divinas; teístas "personalistas" ou "neoclássicos" (Richard Swinburne, William Hasker, os teístas abertos) aceitam mudança em Deus ou conhecimento do futuro limitado ${tag('debate')}. O debate é central na filosofia da religião atual.</p>
<h3>Simplicidade divina</h3>
<p>Alvin Plantinga (Does God Have a Nature?, 1980) objetou que, se Deus é idêntico a seus atributos, Deus seria uma propriedade. Defensores (Eleonore Stump, Norman Kretzmann) responderam com a noção de Deus como ato de ser, não propriedade ${tag('debate')}.</p>
<h3>Processo</h3>
<p>Alfred North Whitehead (Processo e Realidade, 1929) e Charles Hartshorne propuseram um Deus que muda com o mundo — a teologia do processo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Brian Davies, An Introduction to the Philosophy of Religion, cap. sobre simplicidade.' }, { texto: 'Alvin Plantinga, Does God Have a Nature? (1980).' }],
    exercicios: [
      mc('"Does God Have a Nature?" (1980) critica:', ['A imutabilidade', 'A simplicidade divina', 'O argumento ontológico', 'O problema do mal'], 1, 'Plantinga.'),
      mc('A teologia do processo é associada a:', ['Whitehead e Hartshorne', 'Tomás e Caetano', 'Davies e Feser', 'Stump e Kretzmann'], 0, 'Processo e Realidade (1929).'),
      mc('Teístas abertos tendem a:', ['Afirmar a imutabilidade estrita', 'Limitar o conhecimento divino do futuro livre', 'Negar Deus', 'Aceitar o deísmo'], 1, 'Open theism.'),
      disc('Responda à objeção de Plantinga contra a simplicidade divina.', ['Expõe a objeção', 'Expõe a resposta de Stump e Kretzmann', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-6', titulo: 'Causalidade metafísica: causa primeira e causas segundas',
  aprendera: ['Séries causais essenciais e acidentais', 'A relação entre causa primeira e causas segundas', 'O ocasionalismo e sua crítica', 'O princípio de razão suficiente'],
  prereq: ['Aula 5: Ato e potência', 'Módulo 6, aula 5: Indução e causalidade'],
  explicacao: `
<h3>Duas séries</h3>
<p>Na série <strong>acidentalmente ordenada</strong> (avô → pai → filho), cada membro pode agir sem que o anterior continue agindo: o pai gera mesmo se o avô já morreu. Na série <strong>essencialmente ordenada</strong> (mão → bastão → pedra), cada membro só causa enquanto é causado agora (Módulo 1, aula 6) ${tag('argumento')}. Tomás admite que uma série acidental possa ser infinita; nega isso para a essencial (Suma I, q. 46, a. 2, ad 7) ${tag('fato')}.</p>
<h3>Causa primeira e causas segundas</h3>
<p>Para Tomás, Deus é causa primeira que dá o ser e a capacidade de agir às criaturas; as criaturas são causas segundas verdadeiras, que produzem efeitos reais. O fogo realmente aquece, embora dependa de Deus para existir e agir. As duas causas não concorrem como dois cavalos puxando um barco: estão em níveis diferentes (Suma I, q. 105, a. 5) ${tag('argumento')}.</p>
<h3>Ocasionalismo</h3>
<p>Al-Ghazali (A incoerência dos filósofos, c. 1095) e, no século XVII, Nicolas Malebranche sustentaram que só Deus causa de verdade; as criaturas são apenas "ocasiões" para a ação divina ${tag('fato')}. Tomás critica essa posição: tiraria às criaturas sua dignidade de causas e tornaria inútil a ciência da natureza (Suma Contra os Gentios III, 69) ${tag('argumento')}.</p>
<h3>Razão suficiente</h3>
<p>Leibniz: nenhum fato é verdadeiro sem uma razão suficiente para que seja assim e não de outro modo (Monadologia §32) ${tag('fato')}. Críticas: levaria ao necessitarismo (se tudo tem razão suficiente, tudo seria necessário), segundo Peter van Inwagen; defensores (Alexander Pruss, The Principle of Sufficient Reason, 2006) respondem que razões podem explicar sem necessitar ${tag('debate')}.</p>`,
  vocabulario: [['Série essencial', 'Cada membro causa enquanto é causado agora.'], ['Causa primeira', 'Deus, que dá o ser e a capacidade de agir.'], ['Causas segundas', 'Criaturas que causam de verdade, dependendo da primeira.'], ['Ocasionalismo', 'Só Deus causa; criaturas são ocasiões.'], ['Princípio de razão suficiente', 'Todo fato tem razão de ser assim.']],
  exemplos: '<p>Um texto é escrito pela mão e pelo escritor: os dois são causa do texto inteiro, em níveis diferentes. A analogia (de Tomás) ajuda a entender causa primeira e segundas.</p>',
  contexto: `<p>O debate entre al-Ghazali e Averróis (A incoerência da incoerência) é um dos grandes debates sobre causalidade na filosofia árabe (veja a aba Ideias: kalam e falsafa) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Contra o ocasionalismo (Suma Contra os Gentios III, 69, reconstruído)', tag: 'argumento',
    premissas: ['Deus comunica às criaturas o ser e sua bondade.', 'Comunicar a bondade inclui comunicar a capacidade de ser causa de outros.', 'Negar às criaturas a ação própria seria diminuir a bondade de Deus e tornar inútil a ordem da natureza.'],
    conclusao: 'Logo, as criaturas são causas verdadeiras, embora segundas.',
    nota: 'O argumento pressupõe a teologia da criação, mas também protege a ciência natural: as causas segundas são seu objeto.' },
  objecoes: [{ objecao: 'Se Deus causa tudo, sobra algo para as criaturas causarem?', tag: 'debate', resposta: 'Tomás responde que os efeitos vêm inteiros de ambos, em níveis diferentes, como o texto vem inteiro da mão e do escritor. Críticos consideram a solução obscura; outros a veem como modelo de não competição entre Deus e criatura.' }],
  aplicacao: '<p>Escolha um processo natural (a chuva, o crescimento de uma árvore) e descreva as causas segundas e a causa primeira, sem confundir os níveis.</p>',
  fonte: { obra: 'Tomás, Suma Contra os Gentios III, 69–70; Suma I, q. 105, a. 5', link: null, orientacao: '<p>Leia o capítulo 69 do livro III e reconstrua os argumentos de Tomás contra os ocasionalistas.</p>' },
  perguntas: [
    { p: 'Qual a diferença entre série essencial e acidental?', r: 'Na essencial, cada membro só causa enquanto é causado agora.' },
    { p: 'O que é o ocasionalismo?', r: 'A tese de que só Deus causa, e as criaturas são ocasiões.' },
    { p: 'O que diz o princípio de razão suficiente?', r: 'Que todo fato tem razão suficiente para ser assim e não de outro modo.' },
  ],
  exercicios: [
    mc('"Avô → pai → filho" é série:', ['Essencial', 'Acidental', 'Circular', 'Nenhuma'], 1, 'O pai gera mesmo sem o avô vivo.'),
    mc('Um ocasionalista do século XVII foi:', ['Malebranche', 'Tomás', 'Leibniz', 'Locke'], 0, 'Nicolas Malebranche.'),
    mc('Tomás critica o ocasionalismo porque:', ['Nega Deus', 'Tira das criaturas sua causalidade e torna inútil a ciência natural', 'É ateu', 'Aceita o acaso'], 1, 'Contra os Gentios III, 69.'),
    mc('"The Principle of Sufficient Reason" (2006) é de:', ['Pruss', 'Van Inwagen', 'Leibniz', 'Russell'], 0, 'Alexander Pruss.'),
    disc('O princípio de razão suficiente leva ao necessitarismo? Exponha o argumento de van Inwagen e uma resposta.', ['Expõe o princípio', 'Expõe o argumento', 'Expõe resposta (Pruss)', 'Conclusão justificada'])],
  resumo: ['Séries essenciais × acidentais.', 'Causa primeira e segundas em níveis diferentes.', 'Ocasionalismo e sua crítica.', 'Princípio de razão suficiente e o necessitarismo.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Contra os Gentios III, 64–70.' }, { texto: 'Al-Ghazali, A Incoerência dos Filósofos, questão 17.' }, { texto: 'Alexander Pruss, The Principle of Sufficient Reason (2006).' }],
  revisao: [['Causa primeira e segundas', 'Níveis diferentes, não concorrentes.'], ['Ocasionalismo', 'Al-Ghazali, Malebranche.'], ['Razão suficiente', 'Leibniz, Monadologia §32.']],
  avancado: {
    texto: `<h3>Al-Ghazali e Averróis</h3>
<p>Na 17ª discussão de A incoerência dos filósofos, al-Ghazali nega a conexão necessária entre o fogo e a queima do algodão: Deus cria a queima na ocasião do contato ${tag('fato')}. Averróis responde em A incoerência da incoerência que negar as causas é negar a ciência e a própria razão ${tag('fato')}. O debate antecipa Hume em sete séculos ${tag('interpretacao')}.</p>
<h3>Concurso divino</h3>
<p>A escolástica tardia discutiu como Deus "concorre" com as ações das criaturas, ligando-se à controvérsia de auxiliis (Módulo 1, aula 8) ${tag('fato')}.</p>
<h3>Ação divina e física</h3>
<p>O projeto "Divine Action" (Observatório do Vaticano e Center for Theology and the Natural Sciences, 1988–2003) discutiu como Deus age num mundo regido por leis — por indeterminações quânticas, por condições iniciais, ou como causa primeira transcendente ${tag('fato')}. Tomistas preferem a última opção ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Averróis, A Incoerência da Incoerência, discussão 17.' }, { texto: 'Tomás de Aquino, De potentia, q. 3, a. 7.' }],
    exercicios: [
      mc('A 17ª discussão de al-Ghazali trata de:', ['A eternidade do mundo', 'A causalidade natural', 'A ressurreição', 'Os atributos divinos'], 1, 'Fogo e algodão.'),
      mc('A resposta "A incoerência da incoerência" é de:', ['Avicena', 'Averróis', 'Maimônides', 'Al-Farabi'], 1, 'Ibn Rushd.'),
      mc('Tomistas tendem a explicar a ação divina como:', ['Intervenção em lacunas quânticas', 'Causa primeira transcendente', 'Ocasionalismo', 'Deísmo'], 1, 'Níveis diferentes.'),
      disc('Compare al-Ghazali e Hume sobre a conexão necessária. Por que chegam a conclusões teológicas opostas?', ['Expõe al-Ghazali', 'Expõe Hume', 'Compara', 'Conclusão justificada'])],
  },
}),
];
