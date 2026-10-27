// Módulo 1 — aulas 4 a 6 (conteúdo completo).
import { tag, LINKS } from '../fontes.js';

export const AULAS_M1B = [
{
  id: 'm1-4', titulo: 'Como ler o Catecismo', duracao: '60–90 min',
  aprendera: ['A estrutura do Catecismo em quatro partes', 'Como usar referências cruzadas, resumos e índices', 'A relação entre Catecismo e Compêndio', 'Como identificar o peso de autoridade de uma afirmação'],
  prereq: ['Aula 3: Bíblia, Tradição e Magistério'],
  explicacao: `
<h3>Por que aprender a ler um catecismo</h3>
<p>O Catecismo da Igreja Católica tem 2865 parágrafos numerados. Lido do começo ao fim, sem método, ele cansa e se esquece. Usado como ferramenta — com perguntas, referências e comparação de fontes —, torna-se o mapa mais confiável da doutrina católica. Esta aula ensina a usá-lo assim, e é a primeira aplicação prática do método de leitura ativa que você verá no Degrau 0.</p>

<h3>O que é e de onde vem</h3>
<p>O Catecismo foi promulgado por João Paulo II em 11 de outubro de 1992, pela constituição apostólica <em>Fidei Depositum</em>; a edição típica latina, que serve de referência para as traduções, saiu em 1997 ${tag('fato')}. Na <em>Fidei Depositum</em>, o Papa o apresenta como norma segura para o ensino da fé ${tag('doutrina')}. Em 2005 foi publicado o <strong>Compêndio</strong>, com 598 perguntas e respostas, que resume o Catecismo e remete aos seus parágrafos ${tag('fato')}.</p>

<h3>As quatro partes</h3>
<p>Depois do Prólogo (§1–25), o Catecismo se divide em quatro partes, que correspondem a quatro dimensões da vida cristã:</p>
<ol>
<li><strong>A profissão da fé</strong> (§26–1065): o que se crê, seguindo o Credo.</li>
<li><strong>A celebração do mistério cristão</strong> (§1066–1690): a liturgia e os sete sacramentos.</li>
<li><strong>A vida em Cristo</strong> (§1691–2557): a moral, a lei, a graça e os dez mandamentos.</li>
<li><strong>A oração cristã</strong> (§2558–2865): a oração, com comentário ao Pai-Nosso.</li>
</ol>
<p>Uma forma de memorizar: <em>crer, celebrar, viver, rezar</em>. O próprio Prólogo explica esse plano (§13–17) ${tag('doutrina')}.</p>

<h3>Ferramentas internas</h3>
<ul>
<li><strong>Números de parágrafo.</strong> Cite sempre "CIC §150", não a página — as páginas mudam entre edições; os números, não.</li>
<li><strong>Referências cruzadas.</strong> Nas edições impressas, números à margem remetem a outros parágrafos sobre o mesmo tema. Siga-os: é assim que se vê a unidade da doutrina.</li>
<li><strong>"Resumindo".</strong> Cada seção termina com frases breves, úteis para revisão (por exemplo, §44–49 resumem o capítulo sobre o conhecimento de Deus).</li>
<li><strong>Letra miúda.</strong> Trechos em corpo menor trazem observações históricas, explicações ou citações de Padres e santos.</li>
<li><strong>Notas de rodapé.</strong> Indicam as fontes de cada afirmação: Escritura, concílios, documentos papais. É ali que se verifica o peso de autoridade.</li>
</ul>

<h3>Autoridade: o Catecismo não muda o peso de cada doutrina</h3>
<p>O Catecismo reúne doutrinas de pesos diferentes: dogmas definidos, ensinamentos definitivos, orientações pastorais. É comum entre teólogos a observação de que o fato de uma afirmação estar no Catecismo não lhe dá, por si, um grau de autoridade maior do que ela já tinha em sua fonte; por isso as notas de rodapé importam ${tag('interpretacao')}. Exemplo concreto: em 2018, o Papa Francisco aprovou nova redação do §2267, sobre a pena de morte ${tag('fato')}. Isso mostra que formulações sobre aplicação moral podem ser revistas; não se revê, por exemplo, o artigo sobre a Ressurreição.</p>

<h3>Um método em quatro passos</h3>
<ol>
<li><strong>Pergunta.</strong> Comece com uma pergunta precisa: "O que a Igreja ensina sobre a alma?"</li>
<li><strong>Localização.</strong> Use o índice analítico ou o Compêndio para achar os parágrafos (para a alma: CIC §362–368).</li>
<li><strong>Leitura com fontes.</strong> Leia os parágrafos, siga as referências cruzadas e confira as notas.</li>
<li><strong>Síntese.</strong> Escreva no Caderno, em três ou quatro frases, a resposta com os números dos parágrafos. Marque o que é dogma, o que é ensinamento e o que é explicação.</li>
</ol>`,
  vocabulario: [
    ['Constituição apostólica', 'Documento papal solene; a Fidei Depositum promulgou o Catecismo (1992).'],
    ['Edição típica', 'Texto latino oficial de referência (1997) a partir do qual se fazem as traduções.'],
    ['Compêndio', 'Síntese do Catecismo em 598 perguntas e respostas (2005).'],
    ['Referência cruzada', 'Remissão a outros parágrafos sobre o mesmo tema.'],
    ['"Resumindo"', 'Frases-síntese ao fim de cada seção do Catecismo.'],
  ],
  exemplos: `<p><strong>Pergunta:</strong> "A fé é contrária à ciência?" <strong>Localização:</strong> índice → "fé e ciência" → §159. <strong>Leitura:</strong> §159 remete a Gaudium et Spes 36 e ao Vaticano I. <strong>Síntese:</strong> "Segundo o CIC §159, fé e razão não podem se contradizer de verdade porque têm o mesmo autor; a pesquisa honesta não se opõe à fé (doutrina)."</p>`,
  contexto: `<p>Catecismos existem desde a Antiguidade (as catequeses de Cirilo de Jerusalém, no século IV). Após o Concílio de Trento foi publicado o Catecismo Romano (1566), destinado aos párocos. O atual foi pedido pelo Sínodo extraordinário dos Bispos de 1985 e redigido por uma comissão presidida pelo cardeal Joseph Ratzinger ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que citar o parágrafo e a fonte, e não só "o Catecismo diz"', tag: 'argumento',
    premissas: ['Afirmações do Catecismo têm pesos de autoridade diferentes, que dependem de suas fontes.', 'O peso de uma afirmação importa para saber se ela é de fé, ensinamento definitivo ou orientação.', 'Esse peso só se identifica pelo parágrafo e por suas notas.'],
    conclusao: 'Logo, para usar o Catecismo com rigor é preciso citar o parágrafo e conferir suas fontes.',
    nota: 'Argumento metodológico, válido e de premissas verificáveis. Aplica-se também a qualquer obra de referência.'
  },
  objecoes: [
    { objecao: 'O Catecismo é um resumo; quem quer rigor deveria ir direto às fontes.', tag: 'debate',
      resposta: 'Para o iniciante, o Catecismo funciona como mapa: indica quais fontes ler. Ir às fontes é o passo seguinte, que o próprio método desta aula exige pelas notas de rodapé.' },
  ],
  aplicacao: `<p>Escolha uma pergunta (sugestões: "O que é a graça?", "Quantos são os sacramentos?", "O que é a consciência?"). Aplique os quatro passos e registre no Caderno a resposta com os números dos parágrafos. Dica: graça → §1996–2005; sacramentos → §1113; consciência → §1776–1802.</p>`,
  fonte: {
    obra: 'Catecismo, Prólogo §1–25 (especialmente §11–17)', link: LINKS.cicPrologo,
    orientacao: `<p>Leia os §11–17 e anote: (a) a quem o Catecismo se destina; (b) qual o plano das quatro partes; (c) por que o texto fala em "pilares". Depois abra o Compêndio e compare as perguntas 1–10 com os §27–73 do Catecismo.</p>`,
  },
  perguntas: [
    { p: 'Quais são as quatro partes do Catecismo?', r: 'Profissão da fé, celebração do mistério cristão, vida em Cristo e oração cristã.' },
    { p: 'Por que citar o parágrafo e não a página?', r: 'Os números de parágrafo são iguais em todas as edições; as páginas não.' },
    { p: 'O que indicam as notas de rodapé?', r: 'As fontes da afirmação (Escritura, concílios, documentos), que permitem avaliar seu peso.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'A moral cristã e os dez mandamentos estão em qual parte do Catecismo?', opcoes: ['Primeira', 'Segunda', 'Terceira', 'Quarta'], correta: 2,
      explicacao: 'A terceira parte, "A vida em Cristo" (§1691–2557).' },
    { tipo: 'mc', enunciado: 'O Catecismo foi promulgado em:', opcoes: ['1965', '1992', '2005', '1870'], correta: 1,
      explicacao: '1992, pela Fidei Depositum. 1965 é o fim do Vaticano II; 2005, o Compêndio; 1870, o Vaticano I.' },
    { tipo: 'mc', enunciado: 'Qual o primeiro passo do método de consulta proposto?', opcoes: ['Ler o Catecismo inteiro', 'Formular uma pergunta precisa', 'Decorar os "Resumindo"', 'Procurar em sites de opinião'], correta: 1,
      explicacao: 'Sem pergunta, a consulta vira leitura dispersa. A pergunta orienta a busca.' },
    { tipo: 'mc', enunciado: 'A revisão do §2267 (2018) mostra que:', opcoes: ['Dogmas mudam', 'Formulações sobre aplicação moral podem ser revistas', 'O Catecismo não tem autoridade', 'O Compêndio substitui o Catecismo'], correta: 1,
      explicacao: 'O caso mostra a diferença de peso entre doutrinas: a revisão atingiu um juízo sobre aplicação moral, não um dogma.' },
    { tipo: 'disc', enunciado: 'Aplique o método dos quatro passos a uma pergunta à sua escolha e apresente a síntese final com os números de parágrafo, indicando o grau de autoridade de cada afirmação, quando possível.',
      criterios: ['Pergunta precisa', 'Parágrafos corretos', 'Síntese fiel ao texto', 'Distingue graus de autoridade ou explica por que não conseguiu'] },
  ],
  resumo: ['Catecismo: 1992 (Fidei Depositum); edição típica latina 1997; Compêndio 2005 (598 perguntas).', 'Quatro partes: crer, celebrar, viver, rezar.', 'Cite sempre o número do parágrafo.', 'Notas de rodapé indicam fontes e peso de autoridade.', 'Método: pergunta → localização → leitura com fontes → síntese.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, Prólogo, §1–25.', link: LINKS.cicPrologo },
    { texto: 'Compêndio do Catecismo da Igreja Católica (2005).', link: LINKS.compendio },
    { texto: 'Índice do Catecismo em português (vatican.va).', link: LINKS.cicIndice },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Fazer o exercício do método', 'Ler o Prólogo §11–17'],
  revisao: [['Quatro partes do Catecismo', 'Profissão da fé; celebração; vida em Cristo; oração (crer, celebrar, viver, rezar).'], ['Método de consulta', 'Pergunta → localização → leitura com fontes → síntese com §.'], ['Compêndio', '2005, 598 perguntas e respostas.']],
},

{
  id: 'm1-5', titulo: 'O Credo e os fundamentos da fé', duracao: '90–120 min',
  aprendera: ['O que é um "símbolo da fé"', 'A diferença entre o Símbolo dos Apóstolos e o Niceno-Constantinopolitano', 'A estrutura trinitária do Credo', 'O vocabulário básico: Trindade, criação, encarnação, redenção, graça, sacramentos, escatologia'],
  prereq: ['Aula 4: Como ler o Catecismo'],
  explicacao: `
<h3>Um texto para reconhecer-se</h3>
<p>Todo domingo, católicos do mundo inteiro recitam o mesmo texto. Ele condensa, em poucas linhas, o essencial da fé. Por isso a primeira parte do Catecismo é organizada em torno dele. Compreender o Credo é ter o índice de toda a teologia.</p>

<h3>"Símbolo"</h3>
<p>O Catecismo explica (§188) que a palavra grega <em>symbolon</em> designava a metade de um objeto partido, apresentada como sinal de reconhecimento: as duas metades se encaixavam e confirmavam a identidade. O Credo é assim: o sinal pelo qual os fiéis se reconhecem na mesma fé ${tag('doutrina')}. Também se chama "profissão de fé" e "Credo", da primeira palavra latina: <em>Credo</em>, "creio".</p>

<h3>Dois credos principais</h3>
<ul>
<li><strong>Símbolo dos Apóstolos</strong>: o antigo símbolo batismal da Igreja de Roma; é considerado o resumo fiel da fé dos Apóstolos (CIC §194) ${tag('doutrina')}. A lenda de que cada apóstolo teria composto um artigo é tardia; os historiadores situam sua forma atual no início da Idade Média, a partir do símbolo romano mais antigo ${tag('fato')}.</li>
<li><strong>Símbolo Niceno-Constantinopolitano</strong>: proveniente dos dois primeiros concílios ecumênicos, Niceia (325) e Constantinopla (381); comum, ainda hoje, às Igrejas do Oriente e do Ocidente (CIC §195) ${tag('doutrina')}. É mais longo porque responde a controvérsias da época sobre a divindade do Filho e do Espírito Santo ${tag('fato')}.</li>
</ul>

<h3>A estrutura trinitária</h3>
<p>O Credo divide-se em três partes (CIC §190): a primeira fala do <strong>Pai</strong> e da obra da criação; a segunda, do <strong>Filho</strong> e do mistério da redenção; a terceira, do <strong>Espírito Santo</strong>, fonte da santificação ${tag('doutrina')}. A tradição conta doze artigos no Símbolo dos Apóstolos (CIC §191) ${tag('doutrina')}.</p>

<h3>O vocabulário que você precisa dominar</h3>
<p>Cada termo abaixo é explicado de forma simples e com o lugar exato no Catecismo. Você os aprofundará nas aulas 6 a 10.</p>
<ul>
<li><strong>Trindade</strong> (§232–267): um só Deus em três Pessoas distintas — Pai, Filho e Espírito Santo. Não três deuses, nem um Deus com três "máscaras": as Pessoas são realmente distintas entre si e são um só Deus (§253–255) ${tag('doutrina')}. É mistério em sentido estrito (§237).</li>
<li><strong>Criação</strong> (§279–324): Deus cria tudo do nada (<em>ex nihilo</em>), livremente, não por necessidade (§295–298) ${tag('doutrina')}. Note: isso não é uma tese sobre o mecanismo físico das origens, campo da ciência (§283–284).</li>
<li><strong>Encarnação</strong> (§456–483): o Filho eterno de Deus assumiu a natureza humana; Jesus Cristo é verdadeiro Deus e verdadeiro homem, uma só Pessoa em duas naturezas (§464–469; Concílio de Calcedônia, 451) ${tag('doutrina')}.</li>
<li><strong>Redenção</strong> (§571–682): pela sua morte e ressurreição, Cristo liberta do pecado e reconcilia com Deus ${tag('doutrina')}.</li>
<li><strong>Graça</strong> (§1996–2005): favor e auxílio gratuito de Deus; participação na vida divina ${tag('doutrina')}.</li>
<li><strong>Igreja e sacramentos</strong> (§748–975; §1113): a Igreja é una, santa, católica e apostólica; os sacramentos são sete ${tag('doutrina')}.</li>
<li><strong>Escatologia</strong> (§988–1060): do grego <em>eschata</em>, "as últimas coisas": ressurreição da carne, juízo, vida eterna ${tag('doutrina')}.</li>
</ul>

<h3>Como ler cada artigo</h3>
<p>Para cada artigo, pergunte: (1) o que afirma? (2) contra que erro foi formulado? (3) onde está no Catecismo? A segunda pergunta é decisiva: muitas fórmulas do Credo só se entendem quando se conhece a controvérsia que resolveram. Por exemplo, a expressão "consubstancial ao Pai" foi adotada em Niceia contra a tese de Ário, segundo a qual o Filho seria uma criatura ${tag('fato')}.</p>`,
  vocabulario: [
    ['Símbolo', 'Sinal de reconhecimento; o Credo enquanto expressão comum da fé (CIC §188).'],
    ['Pessoa (na Trindade)', 'Cada um dos três — Pai, Filho, Espírito — realmente distintos pelas relações de origem, sendo um só Deus.'],
    ['Consubstancial', '"Da mesma substância": o Filho tem a mesma natureza divina do Pai (Niceia, 325).'],
    ['Encarnação', 'O Filho de Deus assume a natureza humana.'],
    ['Ex nihilo', '"A partir do nada": criação sem matéria preexistente.'],
    ['Escatologia', 'Doutrina das últimas coisas.'],
    ['Arianismo', 'Tese de Ário (séc. IV): o Filho seria criatura; rejeitada em Niceia.'],
  ],
  exemplos: `<p><strong>Erro comum 1:</strong> "O Espírito Santo é uma força de Deus." O Credo o confessa como "Senhor que dá a vida", adorado e glorificado com o Pai e o Filho — uma Pessoa, não uma força.</p>
<p><strong>Erro comum 2:</strong> "Jesus é metade Deus, metade homem." Calcedônia ensina: verdadeiro Deus e verdadeiro homem, sem confusão nem divisão das naturezas.</p>`,
  contexto: `<p>Século IV: a controvérsia ariana dividiu o Império. Niceia (325) declarou o Filho "consubstancial" ao Pai; Constantinopla (381) desenvolveu o artigo sobre o Espírito Santo. A expressão "e do Filho" (<em>Filioque</em>), acrescentada no Ocidente, tornou-se depois ponto de divergência com as Igrejas ortodoxas (CIC §246–248 trata da questão) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Raciocínio de Niceia: se o Filho salva, não pode ser criatura (reconstrução histórica)', tag: 'argumento',
    premissas: ['A salvação consiste em ser unido a Deus.', 'Só Deus pode unir a criatura a Deus.', 'Quem salva é o Filho.'],
    conclusao: 'Logo, o Filho é Deus, e não criatura.',
    nota: 'Reconstrução simplificada de uma linha de raciocínio associada a Atanásio de Alexandria. Serve para mostrar que os dogmas foram formulados com argumentos, e não como afirmações arbitrárias. A premissa 1 é teológica.'
  },
  objecoes: [
    { objecao: 'A Trindade é contraditória: três não pode ser um.', tag: 'debate',
      resposta: 'A doutrina não afirma "três deuses são um deus" nem "três pessoas são uma pessoa", o que seria contradição. Afirma uma natureza e três pessoas: o "um" e o "três" referem-se a aspectos diferentes. Filósofos discutem até hoje como formular isso com precisão lógica; a Igreja ensina que o mistério excede a razão sem contradizê-la.' },
    { objecao: 'Os credos são invenções políticas do Império Romano.', tag: 'debate',
      resposta: 'Houve participação imperial na convocação dos concílios — isso é fato histórico. Mas os documentos mostram longos debates teológicos baseados na Escritura e na tradição anterior. A historiografia discute o peso relativo dos fatores; reduzir tudo à política é uma tese que precisa ser demonstrada, não suposta.' },
  ],
  aplicacao: `<p>Escreva o Credo Niceno-Constantinopolitano no Caderno (você o encontra em qualquer missal ou no Catecismo). Ao lado de cada frase, anote: a Pessoa à qual se refere e o parágrafo do Catecismo correspondente. Use o índice da Primeira Parte.</p>`,
  fonte: {
    obra: 'Catecismo, §185–197 (os símbolos da fé)', link: LINKS.cicSimbolos,
    orientacao: `<p>Leia os §185–197. Responda no Caderno: (a) por que o Credo se chama "símbolo"? (b) Qual a diferença de origem entre os dois símbolos principais? (c) O que significa, segundo o §197, recitar o Credo com fé? Depois abra o índice da Primeira Parte e veja como os capítulos seguem as três partes do Credo.</p>`,
  },
  perguntas: [
    { p: 'Por que o Credo se chama "símbolo"?', r: 'Porque, como o symbolon grego, é sinal de reconhecimento entre os que partilham a mesma fé (CIC §188).' },
    { p: 'Quais as três partes do Credo?', r: 'Pai e criação; Filho e redenção; Espírito Santo e santificação (CIC §190).' },
    { p: 'O que Calcedônia ensinou sobre Cristo?', r: 'Uma só Pessoa em duas naturezas, divina e humana, sem confusão nem separação.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'O Símbolo Niceno-Constantinopolitano provém de:', opcoes: ['Trento e Vaticano I', 'Niceia (325) e Constantinopla (381)', 'Os doze Apóstolos', 'Calcedônia (451)'], correta: 1,
      explicacao: 'CIC §195. Calcedônia definiu as duas naturezas de Cristo, mas o Credo recitado vem de Niceia e Constantinopla.' },
    { tipo: 'mc', enunciado: 'Afirmar que "Pai, Filho e Espírito são três modos de um mesmo Deus aparecer" é:', opcoes: ['A doutrina católica', 'Uma heresia (modalismo)', 'O que diz Calcedônia', 'Uma opinião aceita'], correta: 1,
      explicacao: 'É o modalismo, rejeitado: as Pessoas são realmente distintas (CIC §254).' },
    { tipo: 'mc', enunciado: '"Criação do nada" significa:', opcoes: ['Que o universo surgiu sem causa', 'Que Deus cria sem matéria preexistente', 'Uma teoria física sobre o Big Bang', 'Que o mundo é eterno'], correta: 1,
      explicacao: 'Ex nihilo: Deus não usa matéria anterior. É tese metafísico-teológica, não um modelo físico (CIC §296–297).' },
    { tipo: 'mc', enunciado: 'Escatologia estuda:', opcoes: ['A origem do mundo', 'As últimas coisas', 'Os sacramentos', 'Os pecados'], correta: 1,
      explicacao: 'Eschata = últimas coisas: morte, juízo, ressurreição, vida eterna.' },
    { tipo: 'mc', enunciado: 'A expressão "consubstancial ao Pai" foi adotada contra:', opcoes: ['O pelagianismo', 'O arianismo', 'O protestantismo', 'O ateísmo'], correta: 1,
      explicacao: 'Ário afirmava que o Filho era criatura; Niceia respondeu com o termo homoousios (consubstancial).' },
    { tipo: 'disc', enunciado: 'Explique a doutrina da Trindade a um amigo que acha que ela é contraditória. Mostre o que a doutrina afirma, o que ela nega e por que, segundo seus defensores, não é contradição.',
      criterios: ['Distingue natureza e pessoa', 'Rejeita triteísmo e modalismo', 'Cita o Catecismo', 'Reconhece o caráter de mistério sem fugir da objeção'] },
  ],
  resumo: ['Símbolo = sinal de reconhecimento (CIC §188).', 'Símbolo dos Apóstolos (batismal romano) e Niceno-Constantinopolitano (325/381).', 'Estrutura trinitária: Pai-criação, Filho-redenção, Espírito-santificação (CIC §190).', 'Trindade: uma natureza, três Pessoas (CIC §253–255).', 'Cristo: verdadeiro Deus e verdadeiro homem (Calcedônia).', 'Os dogmas surgiram de debates argumentados.'],
  referencias: [
    { texto: 'Catecismo, §185–197.', link: LINKS.cicSimbolos },
    { texto: 'Catecismo, §198–421 (Deus Pai, Trindade, criação, homem, queda).', link: LINKS.cicPai },
    { texto: 'Catecismo, §422–682 (Jesus Cristo).', link: LINKS.cicCristo },
    { texto: 'Catecismo, §683–1065 (Espírito Santo, Igreja, vida eterna).', link: LINKS.cicEspirito },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Responder à questão discursiva', 'Ler CIC §185–197'],
  revisao: [['Estrutura do Credo (CIC §190)', 'Pai-criação; Filho-redenção; Espírito Santo-santificação.'], ['Trindade', 'Um só Deus, uma natureza, três Pessoas realmente distintas.'], ['Calcedônia (451)', 'Cristo: uma Pessoa, duas naturezas.'], ['Niceia (325)', 'Filho consubstancial ao Pai, contra Ário.']],
},

{
  id: 'm1-6', titulo: 'Deus e o conhecimento natural', duracao: '90–120 min',
  aprendera: ['O que a Igreja ensina sobre o conhecimento de Deus pela razão', 'Os "caminhos" a partir do mundo e a partir da pessoa humana (CIC §31–35)', 'A estrutura de um argumento a partir da contingência', 'As principais objeções filosóficas e o que elas exigem do estudante'],
  prereq: ['Aula 2: Fé, Revelação e razão'],
  explicacao: `
<h3>A pergunta</h3>
<p>É possível saber que Deus existe sem a Bíblia? Muitos respondem "não, é questão de fé"; outros dizem "sim, é evidente". A posição católica é mais precisa do que ambas e precisa ser entendida antes de ser avaliada. Esta aula é a ponte entre a teologia do Módulo 1 e a filosofia que virá nos Degraus 5 e 6.</p>

<h3>O que a Igreja ensina</h3>
<p>O Catecismo (§36), retomando o Concílio Vaticano I, ensina que Deus, princípio e fim de todas as coisas, pode ser conhecido com certeza pela luz natural da razão humana a partir das coisas criadas ${tag('doutrina')}. Três observações:</p>
<ul>
<li>Fala-se de <strong>possibilidade</strong>: a razão <em>pode</em> conhecer. Não se afirma que todos de fato conhecem, nem que é fácil.</li>
<li>O ponto de partida são as <strong>coisas criadas</strong>, não uma intuição direta de Deus.</li>
<li>O §37 acrescenta que, nas condições históricas reais, o ser humano encontra muitas dificuldades para usar essa razão, por isso a Revelação é necessária também para essas verdades ${tag('doutrina')}.</li>
</ul>
<p>Base bíblica citada pela tradição: Sabedoria 13,1–9 e Romanos 1,19–20, onde Paulo diz que as perfeições invisíveis de Deus se tornam visíveis à inteligência por meio das obras ${tag('doutrina')}.</p>

<h3>Dois caminhos</h3>
<p>O Catecismo chama esses percursos de "caminhos" ou "vias", e esclarece que não são provas no sentido das ciências naturais, e sim argumentos convergentes e convincentes que permitem chegar a verdadeiras certezas (§31) ${tag('doutrina')}.</p>
<ol>
<li><strong>A partir do mundo</strong> (§32): o movimento, o devir, a contingência, a ordem e a beleza do mundo levam a reconhecer uma origem e um fim.</li>
<li><strong>A partir da pessoa humana</strong> (§33): a abertura à verdade e à beleza, o senso moral, a liberdade, a voz da consciência e a aspiração ao infinito.</li>
</ol>
<p>Os §34–35 concluem: o mundo e o homem não têm em si mesmos nem seu primeiro princípio nem seu fim último; essas capacidades preparam para a fé, mostrando que ela não se opõe à razão.</p>

<h3>O que é "contingente"</h3>
<p>Uma coisa é <strong>contingente</strong> quando existe, mas poderia não existir: você, esta mesa, o Sol. Ela não traz em si a razão de existir. Já algo <strong>necessário</strong> não poderia não existir. Essa distinção é a chave de vários argumentos clássicos, incluindo a terceira das cinco vias de Tomás (Suma I, q. 2, a. 3), que você estudará no Degrau 5.</p>

<h3>Atenção ao que a aula não diz</h3>
<p>Esta aula apresenta o ensinamento da Igreja e um argumento simplificado. Ela <strong>não</strong> afirma que os argumentos sobre Deus sejam aceitos por todos os filósofos — não são ${tag('debate')}. A tarefa do estudante, nos degraus seguintes, será reconstruí-los com rigor, conhecer as objeções de Hume, Kant e autores contemporâneos, e formar um juízo justificado.</p>`,
  vocabulario: [
    ['Luz natural da razão', 'A capacidade humana de conhecer sem recurso à Revelação.'],
    ['Contingente', 'O que existe, mas poderia não existir.'],
    ['Necessário', 'O que não pode não existir.'],
    ['Via / caminho', 'Argumento que parte de um aspecto do mundo e conclui por Deus (CIC §31).'],
    ['Teologia natural', 'Parte da filosofia que estuda Deus pela razão (ver aula 1).'],
    ['Regresso ao infinito', 'Série de explicações sem primeiro termo; tema central nos argumentos cosmológicos.'],
  ],
  exemplos: `<p><strong>Contingência no cotidiano.</strong> Uma lâmpada acesa: sua luz depende da corrente, que depende da usina, que depende de combustível... Perguntar "e o que explica toda a cadeia?" é o tipo de pergunta que move o argumento a partir da contingência.</p>
<p><strong>A pessoa humana.</strong> Perceber que um dever moral se impõe mesmo contra o próprio interesse é o tipo de experiência que o §33 menciona como ponto de partida.</p>`,
  contexto: `<p>Atos 17,16–34 narra o discurso de Paulo no Areópago de Atenas, onde ele dialoga com filósofos epicuristas e estoicos e cita um poeta grego ${tag('fato')}. A cena é emblemática do encontro entre fé cristã e filosofia grega. O Concílio Vaticano I (1870) definiu a possibilidade do conhecimento natural de Deus contra correntes que a negavam ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Argumento a partir da contingência (versão didática simplificada)', tag: 'argumento',
    premissas: ['Existem coisas contingentes (que poderiam não existir).', 'O que é contingente não tem em si a razão de sua existência; depende de outro.', 'Uma série apenas de seres contingentes, ainda que infinita, não explica por que existe algo contingente em vez de nada.', 'Para que haja explicação, é preciso algo que exista por necessidade de sua própria natureza.'],
    conclusao: 'Logo, existe ao menos um ser necessário — que a tradição identifica com Deus.',
    nota: 'Versão inspirada na terceira via de Tomás e em formulações de Leibniz, não uma tradução de nenhum deles. As premissas 3 e 4 são as mais discutidas. E observe: mesmo aceito, o argumento conclui por um ser necessário; identificá-lo com o Deus pessoal da fé exige argumentos adicionais (Tomás os desenvolve nas q. 3–13).'
  },
  objecoes: [
    { objecao: 'Hume: não temos experiência de causas para o universo como um todo; inferir uma causa do todo extrapola o que a experiência permite.', tag: 'debate',
      resposta: 'Defensores respondem que o argumento não depende de observar a causa, mas de um princípio de razão (o contingente pede explicação). O crítico pergunta por que esse princípio valeria para o todo. É o centro do debate, a estudar no Degrau 7.' },
    { objecao: 'Kant: os argumentos cosmológicos dependeriam, no fundo, do argumento ontológico, que ele considerava inválido.', tag: 'debate',
      resposta: 'Tomistas negam essa dependência, porque a via parte da existência de coisas reais, não de um conceito. Há literatura extensa dos dois lados.' },
    { objecao: 'Por que o ser necessário não poderia ser o próprio universo?', tag: 'debate',
      resposta: 'A resposta clássica é que o universo é composto de partes contingentes e muda, o que seria incompatível com a necessidade. Críticos questionam essa inferência das partes para o todo.' },
  ],
  aplicacao: `<p>Escolha um objeto da sua casa e escreva a cadeia de dependências que o explica (do que é feito, quem o fez, do que dependem esses fatores). Pare quando chegar a uma pergunta que a cadeia não responde. Registre no Caderno e anote qual premissa do argumento sua cadeia ilustra.</p>`,
  fonte: {
    obra: 'Catecismo, §27–49 (o homem é capaz de Deus)', link: LINKS.cicCapaz,
    orientacao: `<p>Leia os §31–38. Para cada parágrafo, escreva uma frase-resumo. Pergunta-guia: qual a diferença entre "provas das ciências naturais" e "argumentos convergentes" (§31)? Leitura opcional avançada: Suma Teológica I, q. 2, a. 3 (as cinco vias), em tradução — apenas para um primeiro contato.</p>`,
  },
  perguntas: [
    { p: 'O CIC §36 afirma que todos conhecem Deus pela razão?', r: 'Não. Afirma que a razão pode conhecê-lo com certeza a partir das criaturas; o §37 reconhece as dificuldades reais.' },
    { p: 'Quais os dois pontos de partida dos "caminhos"?', r: 'O mundo (movimento, contingência, ordem, beleza) e a pessoa humana (verdade, moral, liberdade, consciência).' },
    { p: 'O que é um ser contingente?', r: 'O que existe, mas poderia não existir; não tem em si a razão de existir.' },
  ],
  exercicios: [
    { tipo: 'mc', enunciado: 'Segundo o CIC §31, os "caminhos" para Deus são:', opcoes: ['Provas como as da física', 'Argumentos convergentes que permitem certeza', 'Sentimentos religiosos', 'Revelações privadas'], correta: 1,
      explicacao: 'O texto distingue expressamente esses argumentos das provas das ciências naturais.' },
    { tipo: 'mc', enunciado: 'Qual destes é exemplo de ser contingente?', opcoes: ['O ser necessário', 'Um triângulo como conceito matemático', 'Uma árvore do seu bairro', 'O princípio de não contradição'], correta: 2,
      explicacao: 'A árvore existe, mas poderia não existir. Conceitos e princípios lógicos são outro tipo de objeto, e o ser necessário é, por definição, não contingente.' },
    { tipo: 'mc', enunciado: 'Mesmo aceitando o argumento da contingência, falta ainda mostrar que:', opcoes: ['Existem coisas contingentes', 'O ser necessário tem os atributos do Deus da fé', 'A lógica é válida', 'O mundo existe'], correta: 1,
      explicacao: 'O argumento chega a um ser necessário; mostrar que ele é uno, inteligente, pessoal etc. exige passos adicionais.' },
    { tipo: 'mc', enunciado: 'Quem disse, segundo Atos 17, que Deus "não está longe de cada um de nós" no Areópago?', opcoes: ['Pedro', 'Paulo', 'João', 'Estêvão'], correta: 1,
      explicacao: 'Paulo, no discurso do Areópago (At 17,27).' },
    { tipo: 'disc', enunciado: 'Reconstrua o argumento da contingência com suas palavras, indique a premissa que você considera mais frágil e explique por quê. Depois apresente a melhor resposta que conseguir a essa fragilidade.',
      criterios: ['Reconstrução fiel em premissas e conclusão', 'Identificação justificada de uma premissa frágil', 'Resposta honesta, sem caricatura', 'Reconhece o que o argumento não prova'] },
  ],
  resumo: ['CIC §36: a razão pode conhecer Deus com certeza a partir das criaturas (Vaticano I).', 'CIC §37: dificuldades reais tornam a Revelação necessária também para isso.', 'Dois caminhos: o mundo e a pessoa humana (CIC §31–35).', 'Contingente = pode não existir; argumento conclui por um ser necessário.', 'Há objeções sérias (Hume, Kant); o debate continua.'],
  referencias: [
    { texto: 'Catecismo, §27–49.', link: LINKS.cicCapaz },
    { texto: 'Tomás de Aquino, Suma Teológica, I, q. 2.', link: LINKS.sumaQ2 },
    { texto: 'Sabedoria 13,1–9; Romanos 1,19–20; Atos 17,16–34.' },
    { texto: 'Hume, Diálogos sobre a Religião Natural; Kant, Crítica da Razão Pura, Dialética Transcendental — para os Degraus 5 e 7.' },
  ],
  criterios: ['Acertar pelo menos 70% do questionário', 'Responder à questão discursiva', 'Ler CIC §31–38'],
  revisao: [['CIC §36', 'Deus pode ser conhecido com certeza pela luz natural da razão a partir das criaturas (Vaticano I).'], ['Contingente × necessário', 'Pode não existir × não pode não existir.'], ['Dois caminhos (CIC §32–33)', 'A partir do mundo e a partir da pessoa humana.']],
},
];
