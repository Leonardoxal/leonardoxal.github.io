// Módulo 1 — aulas 1 a 3 (conteúdo completo).
import { tag, LINKS } from '../fontes.js';

export const AULAS_M1A = [
{
  id: 'm1-1', titulo: 'O que é teologia?', duracao: '60–90 min',
  aprendera: ['O significado da palavra "teologia" e seus usos', 'A diferença entre teologia natural (filosófica) e teologia revelada', 'A fórmula de Santo Anselmo: "a fé que busca compreender"', 'Por que a teologia exige razão, método e fontes'],
  prereq: ['Nenhum. Esta é a primeira aula do curso.'],
  explicacao: `
<h3>Um problema do cotidiano</h3>
<p>Quase todo mundo já ouviu frases como "Deus quis assim", "isso é pecado" ou "a Igreja ensina que...". Essas frases afirmam algo sobre Deus e sobre como devemos viver. Mas como saber se são verdadeiras? Quem decide o que a Igreja ensina? Uma opinião piedosa vale o mesmo que um dogma? A teologia existe justamente para responder a essas perguntas de forma ordenada, com fontes e com razões, em vez de deixá-las ao sabor do costume ou do sentimento.</p>

<h3>A palavra</h3>
<p>"Teologia" vem do grego <em>theos</em> (Deus) e <em>logos</em> (palavra, discurso, razão). Literalmente: <strong>discurso racional sobre Deus</strong>. A palavra é anterior ao cristianismo. Platão a usa na República para falar das narrativas sobre os deuses, e Aristóteles chama de "ciência teológica" a parte mais alta da filosofia primeira, aquela que estuda o princípio divino ${tag('fato')}. Os cristãos herdaram o termo e lhe deram um sentido novo.</p>

<h3>Duas teologias</h3>
<p>Desde a Idade Média distingue-se:</p>
<ul>
<li><strong>Teologia natural</strong> (ou filosófica): o que a razão humana, sozinha, pode concluir sobre Deus a partir do mundo — por exemplo, que existe uma causa primeira. É parte da filosofia e não pressupõe a fé.</li>
<li><strong>Teologia revelada</strong> (ou sagrada doutrina): parte daquilo que Deus revelou, recebido pela fé, e o investiga com a razão. Suas premissas vêm da Revelação; seu método é racional.</li>
</ul>
<p>Tomás de Aquino abre a Suma Teológica (I, q. 1) perguntando se, além das disciplinas filosóficas, é necessária outra doutrina. Ele responde que sim: algumas verdades sobre Deus excedem a razão, e mesmo as que a razão alcança seriam conhecidas "por poucos, depois de muito tempo e com mistura de erros" se não fossem também reveladas ${tag('argumento')}. A mesma ideia aparece no Catecismo, §37–38 ${tag('doutrina')}.</p>

<h3>"A fé que busca compreender"</h3>
<p>Santo Anselmo (século XI) deu à teologia a fórmula que o Catecismo retoma no §158: <em>fides quaerens intellectum</em>, "a fé que procura compreender" ${tag('doutrina')}. A ideia é simples e exigente. Quem crê não fica parado; quer entender aquilo em que crê, ver como as verdades se ligam, responder às objeções. A teologia não é, portanto, repetir fórmulas, e também não é inventar doutrinas: é <strong>investigar racionalmente um conteúdo recebido</strong>.</p>

<h3>Fontes e autoridade</h3>
<p>Como toda disciplina séria, a teologia tem fontes hierarquizadas. Para a teologia católica, são a <strong>Sagrada Escritura</strong> e a <strong>Tradição</strong>, interpretadas autenticamente pelo <strong>Magistério</strong> (tema da aula 3). Abaixo delas estão os Padres da Igreja, os doutores, os teólogos. Um teólogo pode propor uma interpretação nova; mas essa proposta não tem a mesma autoridade de um dogma ${tag('doutrina')}. Este curso marcará sempre essa diferença com as etiquetas que você verá ao longo do texto.</p>

<h3>Por que isso importa para um curso de filosofia</h3>
<p>Começar pela teologia não significa transformar a filosofia em catequese. Significa conhecer bem o ponto de partida, para depois examiná-lo com rigor. Quem estuda a relação entre fé e razão precisa saber exatamente o que a fé afirma — e o que <em>não</em> afirma. Muitos debates entre crentes e críticos fracassam porque um dos lados ataca ou defende algo que a doutrina não diz.</p>`,
  vocabulario: [
    ['Teologia', 'Discurso racional sobre Deus; no sentido cristão, investigação racional da Revelação.'],
    ['Teologia natural', 'O que a razão, sem a Revelação, pode concluir sobre Deus. É parte da filosofia.'],
    ['Revelação', 'Ato pelo qual Deus se dá a conhecer (ver aula 2).'],
    ['Dogma', 'Verdade proposta pela Igreja como revelada, de modo definitivo.'],
    ['Fides quaerens intellectum', '"A fé que busca compreender": lema de Anselmo, retomado pelo Catecismo §158.'],
    ['Sagrada doutrina', 'Nome usado por Tomás de Aquino para a teologia baseada na Revelação.'],
  ],
  exemplos: `<p><strong>Exemplo 1.</strong> "Deus existe" pode ser objeto das duas teologias: a natural tenta demonstrá-lo pela razão; a revelada o recebe na fé e investiga quem Deus é.</p>
<p><strong>Exemplo 2.</strong> "Deus é uno e trino" só pertence à teologia revelada: a razão sozinha não chegaria à Trindade (CIC §237) ${tag('doutrina')}.</p>
<p><strong>Exemplo 3.</strong> Detalhes imaginativos sobre a vida dos anjos que aparecem em livros devocionais não são dogma. Distinguir opinião teológica, devoção e doutrina é parte do trabalho teológico.</p>`,
  contexto: `<p>No mundo grego, "teologia" designava tanto mitos sobre os deuses quanto a reflexão filosófica sobre o divino. Os primeiros cristãos, como Justino (século II), apresentaram o cristianismo como a "verdadeira filosofia". Na Idade Média, com as universidades, a teologia tornou-se uma disciplina acadêmica, com método próprio (questões, objeções, respostas) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que é conveniente que haja uma teologia revelada (Tomás, Suma I, q. 1, a. 1)', tag: 'argumento',
    premissas: ['O ser humano está ordenado a um fim que excede a razão (a comunhão com Deus).', 'Para ordenar a vida a um fim, é preciso conhecê-lo.', 'O que excede a razão não pode ser conhecido apenas pela razão.'],
    conclusao: 'Logo, é necessário que algumas verdades sejam conhecidas por revelação.',
    nota: 'Observe: a premissa 1 já é teológica. O argumento mostra a coerência interna da posição cristã; não pretende convencer quem rejeita a premissa 1. Tomás acrescenta um segundo argumento: mesmo o que a razão alcança seria conhecido por poucos e com erros.'
  },
  objecoes: [
    { objecao: 'Se a teologia parte da fé, não é ciência: é só crença organizada.', tag: 'debate',
      resposta: 'Tomás responde (Suma I, q. 1, a. 2) que há ciências que partem de princípios recebidos de uma ciência superior (como a música parte da aritmética). A teologia partiria de princípios recebidos de Deus. Críticos replicam que isso só funciona para quem já aceita a fonte. É um debate filosófico real sobre o estatuto científico da teologia.' },
    { objecao: 'Basta a Bíblia; para que teologia?', tag: 'debate',
      resposta: 'A própria Escritura precisa ser lida, interpretada e relacionada consigo mesma. Toda leitura já envolve conceitos. A questão não é se haverá teologia, mas se ela será feita com método ou sem ele.' },
  ],
  aplicacao: `<p>Escolha uma frase religiosa que você ouviu recentemente (em uma homilia, conversa ou rede social). Pergunte: (1) é uma afirmação sobre Deus, sobre o homem ou sobre a moral? (2) Pretende ser doutrina, opinião ou sentimento? (3) Que fonte a sustentaria? Registre a análise no Caderno.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §158 (e, para comparação, §36–38)', link: LINKS.cicFe,
    orientacao: `<p>Leia o §158 inteiro. Identifique: (a) qual frase é atribuída a Santo Anselmo; (b) qual relação o parágrafo estabelece entre compreender e crer — ela vai num só sentido ou nos dois? Depois leia os §36–38 (no capítulo 1 do Catecismo) e anote por que, segundo o texto, a Revelação é necessária mesmo para verdades acessíveis à razão.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre teologia natural e teologia revelada?', r: 'A natural parte só da razão e pertence à filosofia; a revelada parte de premissas recebidas pela Revelação e as investiga racionalmente.' },
    { p: 'O que significa "fides quaerens intellectum"?', r: '"A fé que busca compreender": o crente procura entender racionalmente aquilo em que crê.' },
    { p: 'Por que a opinião de um teólogo não tem a mesma autoridade de um dogma?', r: 'Porque o dogma é proposto pela Igreja como revelado e definitivo; a opinião teológica é uma interpretação particular, sujeita a discussão.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'A palavra "teologia" significa literalmente:', opcoes: ['Amor a Deus', 'Discurso racional sobre Deus', 'Obediência à Igreja', 'Estudo da Bíblia'], correta: 1,
      explicacao: 'Theos (Deus) + logos (discurso, razão). "Amor a Deus" seria outra coisa; o estudo da Bíblia é uma parte da teologia, não sua definição.' },
    { tipo: 'mc', enunciado: 'Qual das afirmações pertence apenas à teologia revelada?', opcoes: ['Existe uma causa primeira do mundo', 'Deus é uno e trino', 'O mundo tem ordem', 'A alma humana pensa'], correta: 1,
      explicacao: 'A Trindade é conhecida apenas pela Revelação (CIC §237). As outras são, ao menos em princípio, objeto da investigação racional.' },
    { tipo: 'mc', enunciado: 'A fórmula "a fé que busca compreender" é associada a:', opcoes: ['Descartes', 'Santo Anselmo', 'Kant', 'Aristóteles'], correta: 1,
      explicacao: 'É de Anselmo de Cantuária (Proslógio, proêmio) e é citada no Catecismo §158.' },
    { tipo: 'mc', enunciado: 'Alguém afirma: "o seu anjo da guarda chora quando você peca". Como classificar essa frase?', opcoes: ['Dogma definido', 'Fato histórico', 'Expressão devocional ou opinião, a verificar nas fontes', 'Argumento filosófico demonstrado'], correta: 2,
      explicacao: 'A existência dos anjos da guarda é ensinada (CIC §336), mas o detalhe sobre seus sentimentos não é doutrina definida. Classificar corretamente exige consultar as fontes.' },
    { tipo: 'disc', enunciado: 'Explique, com suas palavras, por que um curso de filosofia que parte da fé católica precisa distinguir doutrina, opinião teológica e argumento filosófico. Dê um exemplo.',
      criterios: ['Define os três termos corretamente', 'Explica o risco de confundi-los', 'Apresenta um exemplo pertinente', 'O texto é claro e ordenado'] },
  ],
  resumo: ['Teologia = discurso racional sobre Deus.', 'Teologia natural (razão) × teologia revelada (Revelação investigada pela razão).', 'Lema: a fé que busca compreender (Anselmo; CIC §158).', 'A teologia tem fontes hierarquizadas: doutrina ≠ opinião teológica.', 'Conhecer bem a fé é condição para examiná-la com rigor.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §36–38 e §158.', link: LINKS.cicFe },
    { texto: 'Tomás de Aquino, Suma Teológica, I, q. 1 (natureza da sagrada doutrina).' },
    { texto: 'Anselmo de Cantuária, Proslógio, proêmio e cap. 1.' },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Responder à questão discursiva e autoavaliá-la', 'Ler a fonte orientada (CIC §158)'],
  revisao: [['O que significa "teologia"?', 'Discurso racional sobre Deus (theos + logos).'], ['Teologia natural × revelada', 'Natural: só razão, parte da filosofia. Revelada: parte da Revelação e a investiga racionalmente.'], ['Fides quaerens intellectum', 'A fé que busca compreender — Anselmo; CIC §158.']],
},

{
  id: 'm1-2', titulo: 'Fé, Revelação e razão', duracao: '90 min',
  aprendera: ['O que a Igreja entende por Revelação', 'O que é a fé segundo o Catecismo: graça e ato humano', 'Os "motivos de credibilidade"', 'Por que, segundo a doutrina católica, fé e razão não podem se contradizer de verdade'],
  prereq: ['Aula 1: O que é teologia?'],
  explicacao: `
<h3>Ponto de partida</h3>
<p>Muita gente pensa que fé é "acreditar sem razões" e que razão é "acreditar só no que se prova". Se fosse assim, fé e razão seriam inimigas naturais. O Catecismo propõe uma visão diferente, que você precisa conhecer com precisão antes de concordar ou discordar dela.</p>

<h3>Revelação</h3>
<p>Segundo a constituição <em>Dei Verbum</em> do Concílio Vaticano II (§2), Deus, por bondade e sabedoria, quis revelar-se a si mesmo e dar a conhecer o desígnio de sua vontade. Essa revelação acontece por <strong>palavras e obras</strong> intimamente ligadas, ao longo da história da salvação, e atinge sua plenitude em Jesus Cristo ${tag('doutrina')}. O Catecismo desenvolve o tema nos §50–73: Deus se revela por etapas (aos primeiros pais, a Noé, a Abraão, a Moisés e aos profetas) até o Filho ${tag('doutrina')}.</p>
<p>Dois pontos importantes:</p>
<ul>
<li>A Revelação pública <strong>terminou</strong> com os Apóstolos; não se deve esperar nova revelação pública antes da vinda gloriosa de Cristo (CIC §66) ${tag('doutrina')}.</li>
<li>As chamadas <strong>revelações privadas</strong> (aparições reconhecidas, por exemplo) não acrescentam nada ao depósito da fé; ajudam a vivê-lo em certa época (CIC §67) ${tag('doutrina')}.</li>
</ul>

<h3>Fé</h3>
<p>O Catecismo define a fé em duas dimensões (§150): uma <strong>adesão pessoal</strong> do homem a Deus e, inseparavelmente, um <strong>assentimento livre</strong> a toda a verdade que Deus revelou ${tag('doutrina')}. Duas características:</p>
<ul>
<li><strong>É graça</strong> (§153): um dom de Deus, uma virtude sobrenatural.</li>
<li><strong>É ato humano</strong> (§154–155): não viola a liberdade nem a inteligência. A inteligência assente à verdade, movida pela vontade, que por sua vez é movida pela graça. O texto compara com a confiança razoável que damos às palavras de outras pessoas no dia a dia.</li>
</ul>

<h3>Por que crer? Os motivos de credibilidade</h3>
<p>O §156 faz uma distinção fina. O <em>motivo</em> da fé não é que as verdades reveladas nos pareçam evidentes à razão: cremos por causa da autoridade de Deus que revela, que não pode enganar-se nem enganar-nos. Mas Deus quis que houvesse também <strong>sinais exteriores</strong> — milagres, profecias, a propagação e a santidade da Igreja — para que a fé fosse conforme à razão ${tag('doutrina')}. Esses são os motivos de credibilidade: não provam os mistérios, mas mostram que crer não é cego.</p>
<p>Atenção: a avaliação desses sinais (por exemplo, se um evento é de fato milagroso, ou o valor de um argumento histórico) é <strong>objeto de discussão racional</strong>. Céticos como Hume questionaram a possibilidade de provar um milagre por testemunho (Investigação, seção X) — você estudará esse debate no Degrau 7 ${tag('debate')}.</p>

<h3>Fé e razão</h3>
<p>O §159 resume a posição católica: embora a fé esteja acima da razão, não pode haver verdadeira contradição entre elas, porque o mesmo Deus que revela os mistérios deu ao espírito humano a luz da razão ${tag('doutrina')}. Disso se tiram duas consequências práticas:</p>
<ol>
<li>Se uma conclusão científica bem estabelecida parece contradizer a fé, ou a interpretação da fé está errada, ou a conclusão não é tão bem estabelecida quanto parece — o trabalho é investigar qual.</li>
<li>A pesquisa honesta em qualquer área não é ameaça à fé (o mesmo §159).</li>
</ol>
<p>João Paulo II desenvolve o tema na encíclica <em>Fides et Ratio</em> (1998), que abre comparando fé e razão a duas asas pelas quais o espírito humano se eleva à verdade ${tag('doutrina')}.</p>

<h3>O que esta posição <em>não</em> afirma</h3>
<p>Ela não afirma que todo crente raciocina bem, nem que toda objeção à fé é desonesta, nem que a razão demonstra os mistérios (como a Trindade). Afirma que a fé, retamente entendida, é razoável, e que verdade não contradiz verdade.</p>`,
  vocabulario: [
    ['Revelação pública', 'A revelação concluída com os Apóstolos e transmitida pela Igreja (CIC §66).'],
    ['Revelação privada', 'Manifestação posterior que não acrescenta ao depósito da fé (CIC §67).'],
    ['Assentimento', 'Ato da inteligência de aceitar uma proposição como verdadeira.'],
    ['Virtude teologal', 'Virtude que tem Deus por objeto e é dada por Deus: fé, esperança e caridade.'],
    ['Motivos de credibilidade', 'Sinais exteriores (milagres, profecias, vida da Igreja) que mostram que crer é razoável (CIC §156).'],
    ['Mistério', 'Verdade revelada que excede a compreensão plena da razão, sem contradizê-la.'],
  ],
  exemplos: `<p><strong>Confiança cotidiana.</strong> Você aceita que a Austrália existe sem ter ido lá: confia em testemunhos. O §154 usa esse tipo de comparação para mostrar que confiar não é irracional — desde que a testemunha seja digna de crédito.</p>
<p><strong>Fé ≠ credulidade.</strong> Acreditar em qualquer corrente de mensagem com "profecias" não é fé no sentido do Catecismo: falta a autoridade de Deus que revela, e o próprio Catecismo submete revelações privadas ao discernimento da Igreja (§67).</p>`,
  contexto: `<p>O Concílio Vaticano I (constituição <em>Dei Filius</em>, 1870) definiu a relação entre fé e razão contra dois extremos do século XIX: o <strong>racionalismo</strong> (só vale o que a razão prova) e o <strong>fideísmo</strong> (a fé dispensa e até despreza a razão). O Catecismo de 1992 e a Fides et Ratio retomam essas definições ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que fé e razão não podem se contradizer de verdade (CIC §159)', tag: 'argumento',
    premissas: ['Deus é a fonte tanto da Revelação quanto da razão humana.', 'Deus não pode se contradizer nem afirmar o falso.', 'Uma verdade não pode contradizer outra verdade.'],
    conclusao: 'Logo, não pode haver contradição real entre uma verdade revelada e uma verdade conhecida pela razão.',
    nota: 'O argumento é válido: quem aceita as premissas aceita a conclusão. As premissas 1 e 2 são teológicas; a premissa 3 é uma forma do princípio de não contradição, aceito também por quem não crê. Note que a conclusão fala de verdades, não de opiniões ou interpretações.'
  },
  objecoes: [
    { objecao: 'A história mostra conflitos entre Igreja e ciência (o caso Galileu, por exemplo). Logo, há contradição.', tag: 'debate',
      resposta: 'O argumento do §159 distingue verdades de interpretações. No caso Galileu, historiadores discutem até que ponto o conflito envolveu leitura da Escritura, uma teoria ainda não demonstrada na época e fatores políticos e pessoais. João Paulo II reconheceu publicamente, em 1992, erros no tratamento do caso. Um conflito histórico não mostra, por si, contradição entre verdades.' },
    { objecao: 'Se o motivo da fé é a autoridade de Deus, e não a evidência, então a fé é irracional.', tag: 'debate',
      resposta: 'A posição católica responde que crer com base em testemunho digno de crédito é racional, e que os motivos de credibilidade mostram a razoabilidade de confiar. O crítico pode replicar que a credibilidade dos sinais é justamente o que está em questão. Esse é o núcleo do debate, que você reencontrará com Pascal, Hume e Kierkegaard.' },
  ],
  aplicacao: `<p>Escreva no Caderno: uma afirmação que você aceita por testemunho (histórico, científico, pessoal) e as razões pelas quais considera a testemunha confiável. Depois compare com o §156: que tipo de "sinal" o Catecismo apresenta para a fé? Você os considera fortes ou fracos? Justifique — discordar é permitido, desde que com razões.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §150–159', link: LINKS.cicFe,
    orientacao: `<p>Leia os §150–159 em sequência. Faça três colunas no Caderno: <strong>fé como graça</strong>, <strong>fé como ato humano</strong>, <strong>fé e razão</strong>. Distribua cada parágrafo na coluna correta. Depois leia <em>Dei Verbum</em> §2 e compare a definição de Revelação.</p>`,
  },
  perguntas: [
    { p: 'Por que palavras e obras são ambas importantes na Revelação?', r: 'Segundo Dei Verbum 2, as obras manifestam e confirmam o que as palavras ensinam, e as palavras esclarecem o sentido das obras.' },
    { p: 'O que são motivos de credibilidade?', r: 'Sinais exteriores (milagres, profecias, a vida da Igreja) que mostram que a fé é conforme à razão, sem serem o motivo último da fé.' },
    { p: 'Uma revelação privada reconhecida acrescenta algo ao depósito da fé?', r: 'Não. Segundo o CIC §67, ajuda a viver a Revelação, mas não a completa.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'Segundo o Catecismo, o motivo de crer nas verdades reveladas é:', opcoes: ['Elas parecem evidentes à razão', 'A autoridade de Deus que revela', 'A maioria das pessoas crê nelas', 'Os milagres as demonstram'], correta: 1,
      explicacao: '§156: cremos por causa da autoridade de Deus. Os milagres são motivos de credibilidade (mostram que crer é razoável), não a demonstração dos mistérios.' },
    { tipo: 'mc', enunciado: 'A fé, segundo o Catecismo, é:', opcoes: ['Só um sentimento', 'Só um ato humano', 'Graça e, ao mesmo tempo, ato humano livre', 'Uma conclusão científica'], correta: 2,
      explicacao: '§153 (graça) e §154–155 (ato humano que coopera com a graça).' },
    { tipo: 'mc', enunciado: 'O fideísmo afirma que:', opcoes: ['Só vale o que a razão prova', 'A fé dispensa a razão', 'Fé e razão são complementares', 'A ciência substitui a fé'], correta: 1,
      explicacao: 'Fideísmo é o extremo oposto ao racionalismo; ambos foram rejeitados pelo Vaticano I.' },
    { tipo: 'mc', enunciado: 'A premissa "uma verdade não pode contradizer outra verdade" é:', opcoes: ['Um dogma que só crentes aceitam', 'Uma forma do princípio de não contradição', 'Uma hipótese científica', 'Uma opinião de Anselmo'], correta: 1,
      explicacao: 'É lógica básica, aceita por crentes e não crentes. Por isso o argumento do §159 é forte em sua forma, e o debate se concentra nas premissas teológicas.' },
    { tipo: 'disc', enunciado: 'Reconstrua com suas palavras o argumento do §159 e apresente uma objeção séria a ele, com uma possível resposta. Você pode concluir que a objeção é forte.',
      criterios: ['Separa premissas e conclusão', 'Apresenta objeção pertinente (não caricatura)', 'Apresenta resposta coerente com o texto', 'Distingue verdade de interpretação'] },
  ],
  resumo: ['Revelação: Deus se dá a conhecer por palavras e obras, com plenitude em Cristo (DV 2; CIC §50–73).', 'Revelação pública encerrada; revelações privadas não acrescentam ao depósito (CIC §66–67).', 'Fé: adesão pessoal + assentimento livre; graça e ato humano (CIC §150–155).', 'Motivo da fé: autoridade de Deus; motivos de credibilidade mostram a razoabilidade (CIC §156).', 'Fé e razão não se contradizem de verdade (CIC §159; Fides et Ratio).'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §142–184.', link: LINKS.cicFe },
    { texto: 'Catecismo da Igreja Católica, §50–73.', link: LINKS.cicRevelacao },
    { texto: 'Concílio Vaticano II, Dei Verbum, §2–6.', link: LINKS.deiVerbum },
    { texto: 'João Paulo II, Fides et Ratio (1998), Introdução e caps. II–III.', link: LINKS.fidesRatio },
    { texto: 'David Hume, Investigação sobre o Entendimento Humano, seção X ("Dos milagres") — para o Degrau 7.' },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Responder à questão discursiva', 'Ler CIC §150–159'],
  revisao: [['Duas dimensões da fé (CIC §150)', 'Adesão pessoal a Deus + assentimento livre à verdade revelada.'], ['Motivos de credibilidade', 'Sinais (milagres, profecias, vida da Igreja) que mostram a razoabilidade da fé — CIC §156.'], ['Fideísmo × racionalismo', 'Fideísmo: fé sem razão. Racionalismo: só a razão. Ambos rejeitados (Vaticano I).']],
},

{
  id: 'm1-3', titulo: 'Bíblia, Tradição e Magistério', duracao: '90 min',
  aprendera: ['O que a Igreja entende por Sagrada Escritura e inspiração', 'O que é a Tradição apostólica e como difere de "tradições"', 'O que é o Magistério e seus limites', 'Como os três se relacionam (Dei Verbum 9–10)'],
  prereq: ['Aula 2: Fé, Revelação e razão'],
  explicacao: `
<h3>A pergunta</h3>
<p>Se Deus se revelou e a Revelação pública terminou com os Apóstolos, como ela chega até nós, dois mil anos depois, sem se perder ou se deformar? A resposta católica envolve três realidades: Escritura, Tradição e Magistério. Esse ponto é também uma das principais diferenças entre católicos e protestantes, por isso precisa ser entendido com exatidão.</p>

<h3>A Sagrada Escritura</h3>
<p>A Escritura é a Palavra de Deus enquanto escrita sob a inspiração do Espírito Santo (DV 9; CIC §81) ${tag('doutrina')}. "Inspiração" não significa ditado mecânico: Deus escolheu autores humanos, que usaram suas capacidades e escreveram como verdadeiros autores (CIC §106) ${tag('doutrina')}. Por isso, para entender um texto bíblico é preciso considerar o gênero literário, a época e a intenção do autor humano (CIC §109–110) — e também lê-lo no conjunto da Escritura, na Tradição viva e segundo a analogia da fé (CIC §111–114) ${tag('doutrina')}.</p>
<p>O <strong>cânon</strong> é a lista dos livros reconhecidos como inspirados. O cânon católico tem 46 livros no Antigo Testamento e 27 no Novo (CIC §120) ${tag('doutrina')}. As Bíblias protestantes costumam ter 39 no Antigo, porque não incluem os chamados deuterocanônicos (Tobias, Judite, Sabedoria, Eclesiástico, Baruc, 1 e 2 Macabeus, além de partes de Ester e Daniel) ${tag('fato')}.</p>

<h3>A Tradição</h3>
<p>Antes de haver Novo Testamento escrito, havia pregação apostólica. Os Apóstolos transmitiram o que receberam de Cristo pela pregação oral, pelos exemplos e pelas instituições (DV 7; CIC §76) ${tag('doutrina')}. Essa transmissão viva, continuada pelos sucessores dos Apóstolos, é a <strong>Tradição apostólica</strong>.</p>
<p>Distinção essencial (CIC §83): a Tradição apostólica não se confunde com as <strong>tradições</strong> teológicas, disciplinares, litúrgicas ou devocionais surgidas nas Igrejas locais ao longo do tempo. Estas podem ser mantidas, modificadas ou abandonadas sob a orientação do Magistério ${tag('doutrina')}. Exemplo: o celibato sacerdotal obrigatório na Igreja latina é disciplina, não dogma — tanto que as Igrejas católicas orientais admitem a ordenação de homens casados ${tag('fato')}.</p>

<h3>Uma só fonte, dois modos de transmissão</h3>
<p>Segundo DV 9 e CIC §80–82, Escritura e Tradição brotam da mesma fonte divina e tendem ao mesmo fim. Por isso a Igreja não tira a sua certeza sobre todas as coisas reveladas só da Sagrada Escritura, e ambas devem ser recebidas com igual reverência ${tag('doutrina')}. Juntas formam um único depósito sagrado da fé confiado à Igreja (DV 10; CIC §84).</p>

<h3>O Magistério</h3>
<p>Quem interpreta autenticamente esse depósito? Segundo DV 10 e CIC §85, essa tarefa foi confiada apenas ao <strong>Magistério vivo da Igreja</strong>, isto é, aos bispos em comunhão com o sucessor de Pedro, o bispo de Roma ${tag('doutrina')}. E vem logo o limite: o Magistério <strong>não está acima da Palavra de Deus</strong>, mas a serve, ensinando apenas o que foi transmitido (CIC §86) ${tag('doutrina')}. Ele não inventa a fé; guarda-a e a expõe.</p>
<p>O Magistério tem <strong>graus</strong> de autoridade: dogmas definidos (CIC §88–90), ensinamentos propostos de modo definitivo, e um magistério ordinário ao qual se deve religioso obséquio (CIC §892). Nem toda frase de um documento eclesial tem o mesmo peso. Saber identificar o grau de autoridade é uma habilidade que este curso vai treinar ${tag('doutrina')}.</p>

<h3>O tripé</h3>
<p>DV 10 conclui que Escritura, Tradição e Magistério estão de tal modo ligados que nenhum subsiste sem os outros ${tag('doutrina')}. Uma imagem útil: a Escritura é o texto; a Tradição é a vida em que o texto nasceu e continua sendo lido; o Magistério é o ofício que garante a interpretação autêntica.</p>

<h3>Onde está o debate</h3>
<p>A Reforma protestante (século XVI) defendeu o princípio <em>sola Scriptura</em>: a Escritura como única regra infalível de fé ${tag('fato')}. Católicos e protestantes divergem, portanto, sobre a autoridade da Tradição e do Magistério. Entender a posição católica não exige ignorar os argumentos do outro lado; você os encontrará no Módulo 2 ${tag('debate')}.</p>`,
  vocabulario: [
    ['Inspiração', 'Ação do Espírito Santo pela qual os autores humanos escreveram o que Deus quis, como verdadeiros autores (CIC §105–106).'],
    ['Cânon', 'Lista dos livros reconhecidos como inspirados; 73 no cânon católico (CIC §120).'],
    ['Deuterocanônicos', 'Livros do AT presentes no cânon católico e ausentes da maioria das Bíblias protestantes.'],
    ['Tradição apostólica', 'Transmissão viva da Revelação recebida dos Apóstolos (CIC §75–83).'],
    ['Depósito da fé', 'Conjunto da Revelação (Escritura e Tradição) confiado à Igreja (CIC §84).'],
    ['Magistério', 'Ofício de interpretar autenticamente a Palavra de Deus: bispos em comunhão com o Papa (CIC §85).'],
    ['Sola Scriptura', 'Princípio protestante: só a Escritura é regra infalível de fé.'],
  ],
  exemplos: `<p><strong>Disciplina × dogma.</strong> A abstinência de carne às sextas-feiras é norma disciplinar que a Igreja pode regular; a Ressurreição de Cristo é dogma.</p>
<p><strong>Gênero literário.</strong> Ler um salmo como relatório científico é erro de gênero; o Catecismo pede atenção aos gêneros (§110).</p>
<p><strong>Grau de autoridade.</strong> Uma entrevista concedida por um papa não tem a mesma autoridade de uma constituição dogmática de concílio.</p>`,
  contexto: `<p>A lista completa dos livros canônicos foi definida solenemente pelo Concílio de Trento (1546), em resposta à Reforma; listas equivalentes já aparecem em sínodos dos séculos IV e V, como os de Hipona (393) e Cartago (397) ${tag('fato')}. A constituição <em>Dei Verbum</em> (1965) é o principal texto contemporâneo sobre o tema.</p>`,
  argumento: {
    titulo: 'Argumento católico em favor da Tradição (reconstrução didática)', tag: 'argumento',
    premissas: ['A pregação apostólica existiu antes dos escritos do Novo Testamento.', 'O próprio Novo Testamento não traz uma lista de quais livros pertencem a ele.', 'Para identificar o cânon foi necessária uma autoridade e uma tradição anteriores ao cânon fechado.'],
    conclusao: 'Logo, a Escritura não se sustenta sozinha como regra: depende de uma Tradição que a recebeu e a identificou.',
    nota: 'Esta é uma reconstrução de argumento comum na apologética católica, não um texto do Magistério. Teólogos protestantes respondem, por exemplo, que a Igreja reconheceu um cânon que já se impunha por sua autoridade intrínseca, sem com isso tornar-se autoridade igual à Escritura.'
  },
  objecoes: [
    { objecao: 'Se o Magistério interpreta a Escritura, então ele está acima dela.', tag: 'debate',
      resposta: 'A doutrina católica responde que interpretar autenticamente não é estar acima: o Magistério serve à Palavra e só ensina o que foi transmitido (CIC §86). O crítico pode perguntar quem controla se o Magistério cumpre esse limite; a resposta católica apela à assistência do Espírito Santo, o que já supõe a fé.' },
    { objecao: '"Tradição" é só uma forma de justificar costumes humanos.', tag: 'debate',
      resposta: 'O próprio Catecismo distingue a Tradição apostólica das tradições humanas mutáveis (§83). A objeção acerta ao exigir essa distinção; erra se ignora que ela já está no texto.' },
  ],
  aplicacao: `<p>Pegue sua Bíblia católica e confira o índice: encontre os livros deuterocanônicos. Depois, procure no Catecismo (§120) a lista do cânon. Registre no Caderno uma prática da Igreja que você conhece e classifique: Tradição apostólica ou tradição disciplinar/devocional? Indique por quê.</p>`,
  fonte: {
    obra: 'Dei Verbum, §7–10, e Catecismo, §74–100', link: LINKS.deiVerbum,
    orientacao: `<p>Leia DV §9 e §10 devagar. Anote no Caderno a frase que descreve o limite do Magistério. Depois compare com o CIC §85–86 (capítulo 2 do Catecismo). Pergunta-guia: as duas formulações dizem exatamente a mesma coisa? O que o Catecismo acrescenta?</p>`,
  },
  perguntas: [
    { p: 'Inspiração significa ditado palavra por palavra?', r: 'Não. Os autores humanos foram verdadeiros autores, usando suas capacidades (CIC §106).' },
    { p: 'Qual a diferença entre Tradição e tradições?', r: 'A Tradição apostólica transmite a Revelação; as tradições locais, disciplinares ou devocionais são humanas e podem mudar (CIC §83).' },
    { p: 'Qual o limite do Magistério?', r: 'Não está acima da Palavra de Deus; serve-a e ensina apenas o que foi transmitido (DV 10; CIC §86).' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'Quantos livros tem o cânon bíblico católico?', opcoes: ['66', '73', '72', '81'], correta: 1,
      explicacao: '46 do AT + 27 do NT = 73 (CIC §120). 66 é o número usual das Bíblias protestantes.' },
    { tipo: 'mc', enunciado: 'O celibato obrigatório dos padres latinos é:', opcoes: ['Dogma de fé', 'Tradição apostólica imutável', 'Disciplina da Igreja latina', 'Revelação privada'], correta: 2,
      explicacao: 'É disciplina; as Igrejas católicas orientais admitem a ordenação de homens casados. Por isso pertence às "tradições" do §83.' },
    { tipo: 'mc', enunciado: 'Segundo DV 10, a interpretação autêntica da Palavra de Deus cabe:', opcoes: ['A cada fiel individualmente', 'Aos teólogos acadêmicos', 'Ao Magistério vivo da Igreja', 'Aos concílios locais'], correta: 2,
      explicacao: 'DV 10 e CIC §85. Teólogos e fiéis estudam e interpretam, mas a interpretação autêntica (com autoridade) cabe ao Magistério.' },
    { tipo: 'mc', enunciado: 'Qual afirmação é FALSA segundo a doutrina católica?', opcoes: ['Escritura e Tradição vêm da mesma fonte', 'O Magistério está acima da Escritura', 'A Igreja não tira sua certeza só da Escritura', 'Os três estão interligados'], correta: 1,
      explicacao: 'CIC §86: o Magistério não está acima da Palavra, mas a serve.' },
    { tipo: 'disc', enunciado: 'Explique o "tripé" Escritura–Tradição–Magistério para alguém que nunca ouviu falar disso. Depois, apresente com honestidade o principal argumento protestante contra ele.',
      criterios: ['Define cada elemento com precisão', 'Explica a relação entre eles (DV 10)', 'Apresenta o sola Scriptura sem caricatura', 'Usa referências (CIC ou DV)'] },
  ],
  resumo: ['Escritura: Palavra de Deus escrita sob inspiração; autores humanos verdadeiros (CIC §105–106).', 'Cânon católico: 73 livros (CIC §120).', 'Tradição apostólica ≠ tradições mutáveis (CIC §83).', 'Magistério: bispos em comunhão com o Papa; serve à Palavra, não está acima (CIC §85–86).', 'Os três estão interligados (DV 10). Protestantes defendem sola Scriptura.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Dei Verbum, §7–10.', link: LINKS.deiVerbum },
    { texto: 'Catecismo da Igreja Católica, §74–141.', link: LINKS.cicRevelacao },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Responder à questão discursiva', 'Ler DV §9–10'],
  revisao: [['Cânon católico', '73 livros: 46 AT + 27 NT (CIC §120).'], ['Tradição × tradições', 'Apostólica (Revelação) × locais/disciplinares (mutáveis) — CIC §83.'], ['Limite do Magistério', 'Não está acima da Palavra; a serve (DV 10; CIC §86).']],
},
];
