// Módulo 2 — Bíblia, história cristã e pensamento patrístico: aulas 1 a 5.
import { tag, LINKS } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm2-1', titulo: 'Como ler a Escritura: sentidos e gêneros literários',
  aprendera: ['Os sentidos literal e espiritual da Escritura', 'A importância dos gêneros literários', 'Os três critérios de interpretação de Dei Verbum 12', 'O lugar do método histórico-crítico'],
  prereq: ['Módulo 1, aula 3: Bíblia, Tradição e Magistério'],
  explicacao: `
<h3>Ler bem é a primeira tarefa</h3>
<p>A Bíblia não é um livro, mas uma biblioteca escrita ao longo de cerca de mil anos, em hebraico, aramaico e grego, por autores de culturas diferentes. Quem a lê como se fosse um manual moderno, escrito de uma vez, comete erros graves. A Igreja propõe regras de leitura que combinam rigor histórico e leitura de fé.</p>
<h3>Procurar a intenção do autor</h3>
<p>Segundo Dei Verbum 12, para descobrir o que Deus quis comunicar é preciso investigar o que os autores sagrados quiseram dizer, atendendo aos <strong>gêneros literários</strong>: a verdade se exprime de modo diferente em textos históricos, proféticos, poéticos ou de outros gêneros ${tag('doutrina')}. Um salmo de lamento, uma parábola, uma genealogia e uma carta pedem leituras diferentes.</p>
<h3>Três critérios de leitura de fé</h3>
<p>A mesma constituição, retomada pelo Catecismo (§111–114), pede ainda que se leia ${tag('doutrina')}:</p>
<ol><li>atendendo ao <strong>conteúdo e à unidade de toda a Escritura</strong>;</li><li>na <strong>Tradição viva</strong> de toda a Igreja;</li><li>segundo a <strong>analogia da fé</strong>, a coerência das verdades entre si.</li></ol>
<h3>Os sentidos da Escritura</h3>
<p>A tradição distingue (CIC §115–119) ${tag('doutrina')}:</p>
<ul>
<li><strong>Sentido literal</strong>: o que as palavras significam, descoberto pela exegese segundo as regras da boa interpretação. Todos os outros sentidos se fundam nele (Tomás, Suma I, q. 1, a. 10).</li>
<li><strong>Sentido espiritual</strong>, em três modos: <em>alegórico</em> (os acontecimentos significam Cristo — a travessia do Mar Vermelho como sinal do batismo), <em>moral</em> (o texto orienta o agir) e <em>anagógico</em> (aponta para a vida eterna).</li>
</ul>
<p>O Catecismo cita um dístico medieval que resume os quatro sentidos: a letra ensina os fatos; a alegoria, o que crer; o sentido moral, o que fazer; a anagogia, para onde tender (§118).</p>
<h3>O método histórico-crítico</h3>
<p>Desde o século XIX, exegetas estudam as fontes, a formação e o contexto dos textos (crítica textual, das formas, da redação). A Pontifícia Comissão Bíblica, no documento A interpretação da Bíblia na Igreja (1993), considerou esse método indispensável, mas insuficiente sozinho, e criticou leituras fundamentalistas que ignoram a dimensão humana dos textos ${tag('doutrina')}.</p>`,
  vocabulario: [['Exegese', 'Interpretação científica de um texto.'], ['Gênero literário', 'Tipo de texto com convenções próprias (narrativa, lei, poesia, profecia, apocalíptica, carta).'], ['Sentido literal', 'O que as palavras significam segundo a intenção do autor.'], ['Tipologia', 'Leitura de pessoas e fatos do AT como figuras de Cristo.'], ['Fundamentalismo bíblico', 'Leitura literalista que ignora gêneros e contexto.']],
  exemplos: `<p><strong>Jonas</strong>: muitos exegetas católicos leem o livro como narrativa didática, e não como relato histórico; sua mensagem — a misericórdia de Deus para com os pagãos — não depende disso ${tag('interpretacao')}. <strong>Gênesis 1</strong>: a estrutura em seis dias de obra e um de repouso tem caráter litúrgico e teológico, não de cronologia científica (CIC §337).</p>`,
  contexto: `<p>Orígenes (século III) desenvolveu a teoria dos sentidos da Escritura no livro IV de Sobre os Princípios. Na Idade Média consolidou-se a doutrina dos quatro sentidos. O método histórico-crítico nasce sobretudo em ambiente protestante alemão; Pio XII, na encíclica Divino Afflante Spiritu (1943), incentivou os exegetas católicos a estudar línguas, gêneros e contexto ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que o sentido literal vem primeiro (Tomás, Suma I, q. 1, a. 10)', tag: 'argumento',
    premissas: ['Um argumento só pode partir do que o texto de fato diz.', 'O sentido espiritual se funda em realidades significadas pelo sentido literal.', 'Se o espiritual não se apoiasse no literal, qualquer leitura seria possível.'],
    conclusao: 'Logo, só o sentido literal serve de base para argumentar, e todos os outros nele se fundam.',
    nota: 'Para Tomás, o sentido literal inclui as figuras de linguagem: o "braço de Deus" significa literalmente o poder de Deus.' },
  objecoes: [
    { objecao: 'Se o Gênesis não é cronologia científica, a Bíblia erra.', tag: 'debate', resposta: 'A doutrina afirma que a Escritura ensina sem erro a verdade que Deus quis consignar "para a nossa salvação" (DV 11). Ler um texto segundo seu gênero não é negar sua verdade, mas identificar o que ele afirma.' },
    { objecao: 'O método histórico-crítico destrói a fé.', tag: 'debate', resposta: 'O documento de 1993 o considera indispensável, mas critica pressupostos filosóficos que alguns praticantes trazem (por exemplo, a exclusão prévia de toda ação divina). O problema estaria nos pressupostos, não no método.' },
  ],
  aplicacao: '<p>Escolha Lucas 15,11–32 (o filho pródigo). Identifique o gênero, o sentido literal, um sentido moral e um anagógico. Registre no Caderno.</p>',
  fonte: { obra: 'Dei Verbum §11–13; Catecismo §109–119', link: LINKS.deiVerbum, orientacao: '<p>Leia DV 11–13. Identifique a frase que descreve a verdade ensinada "para a nossa salvação" e discuta o que ela significa. Depois leia os §115–119 do Catecismo.</p>' },
  perguntas: [
    { p: 'Quais são os quatro sentidos da Escritura?', r: 'Literal, alegórico, moral e anagógico.' },
    { p: 'Por que os gêneros literários importam?', r: 'Porque a verdade se exprime de modos diferentes em gêneros diferentes (DV 12).' },
    { p: 'Como o documento de 1993 avalia o método histórico-crítico?', r: 'Indispensável, mas insuficiente sozinho.' },
  ],
  exercicios: [
    mc('Ler a travessia do Mar Vermelho como figura do batismo é sentido:', ['Literal', 'Alegórico', 'Moral', 'Anagógico'], 1, 'O fato significa Cristo e os sacramentos.'),
    mc('Qual sentido serve de base para os demais?', ['Anagógico', 'Moral', 'Literal', 'Alegórico'], 2, 'Tomás, Suma I, q. 1, a. 10; CIC §116.'),
    mc('A encíclica que incentivou o estudo dos gêneros pelos exegetas católicos (1943) é:', ['Rerum Novarum', 'Divino Afflante Spiritu', 'Humani Generis', 'Fides et Ratio'], 1, 'Pio XII, 1943.'),
    mc('O fundamentalismo bíblico é criticado por:', ['Ler a Bíblia com fé', 'Ignorar os gêneros e o contexto humano dos textos', 'Usar o sentido literal', 'Ler na Tradição'], 1, 'Documento da Pontifícia Comissão Bíblica, 1993.'),
    disc('Interprete um texto bíblico à sua escolha usando os três critérios de DV 12 e os quatro sentidos. Mostre onde a leitura poderia errar sem esses critérios.', ['Identifica gênero e sentido literal', 'Aplica os três critérios', 'Distingue os sentidos espirituais', 'Aponta o erro de leitura evitado'])],
  resumo: ['Buscar a intenção do autor e o gênero (DV 12).', 'Ler na unidade da Escritura, na Tradição e na analogia da fé.', 'Sentido literal e espiritual (alegórico, moral, anagógico).', 'Método histórico-crítico: indispensável, não suficiente.'],
  referencias: [{ texto: 'Dei Verbum, §11–13.', link: LINKS.deiVerbum }, { texto: 'Catecismo, §101–141.', link: LINKS.cicRevelacao }, { texto: 'Pontifícia Comissão Bíblica, A interpretação da Bíblia na Igreja (1993).' }],
  revisao: [['Quatro sentidos', 'Literal; espiritual: alegórico, moral, anagógico (CIC §115–117).'], ['Três critérios de DV 12', 'Unidade da Escritura; Tradição viva; analogia da fé.'], ['Divino Afflante Spiritu', 'Pio XII (1943): estudo dos gêneros e das línguas.']],
  avancado: {
    texto: `<h3>A "crise da exegese"</h3>
<p>Em conferência de 1988 em Nova York, Joseph Ratzinger criticou o uso do método histórico-crítico quando adota, sem exame, pressupostos filosóficos que excluem a ação de Deus na história, e pediu uma "crítica da crítica" ${tag('interpretacao')}. Na exortação Verbum Domini (2010), Bento XVI propôs integrar exegese histórica e teológica ${tag('doutrina')}.</p>
<h3>Hermenêutica patrística</h3>
<p>Orígenes (Sobre os Princípios IV) compara a Escritura ao ser humano: corpo (sentido literal), alma (moral) e espírito (místico). Antioquenos como Teodoro de Mopsuéstia criticaram excessos alegóricos alexandrinos e insistiram na história ${tag('fato')}. A tensão entre "Alexandria" e "Antioquia" é chave para entender a história da exegese.</p>
<h3>Inerrância: o debate</h3>
<p>A expressão de DV 11 sobre a verdade consignada "para a nossa salvação" foi lida de dois modos: como restrição do alcance da inerrância às verdades salvíficas, ou como indicação da finalidade de toda a Escritura, sem restrição material ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Orígenes, Sobre os Princípios, livro IV.' }, { texto: 'Bento XVI, Verbum Domini (2010), §29–49.' }, { texto: 'Pontifícia Comissão Bíblica, A interpretação da Bíblia na Igreja (1993), cap. I.' }],
    exercicios: [
      mc('A comparação da Escritura com corpo, alma e espírito é de:', ['Orígenes', 'Lutero', 'Tomás', 'Jerônimo'], 0, 'Sobre os Princípios IV.'),
      mc('A escola de Antioquia tendia a enfatizar:', ['A alegoria livre', 'O sentido histórico', 'A gnose', 'O sentido anagógico'], 1, 'Reação a excessos alegóricos.'),
      mc('Verbum Domini (2010) propõe:', ['Abandonar a exegese histórica', 'Integrar exegese histórica e teológica', 'Ler só a Vulgata', 'Ler só o sentido moral'], 1, 'Exortação de Bento XVI.'),
      disc('A expressão "para a nossa salvação" (DV 11) restringe a inerrância? Apresente as duas leituras e avalie qual se ajusta melhor ao texto e ao contexto do Concílio.', ['Expõe as duas leituras', 'Usa o texto de DV 11', 'Considera o contexto histórico', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm2-2', titulo: 'O contexto histórico de Israel e do Novo Testamento',
  aprendera: ['As grandes etapas da história de Israel', 'O exílio e o período do Segundo Templo', 'O mundo judaico e romano do século I', 'Como a arqueologia dialoga com o texto bíblico'],
  explicacao: `
<h3>Por que a história importa</h3>
<p>A fé judaica e cristã é histórica: afirma que Deus agiu em acontecimentos. Conhecer a cronologia, os impérios e os grupos sociais ajuda a entender o que os textos dizem — e o que não dizem.</p>
<h3>Grandes etapas (datas aproximadas)</h3>
<ul>
<li><strong>Patriarcas e Êxodo</strong>: tradições sobre Abraão, Isaac, Jacó e a saída do Egito. A datação e a historicidade desses relatos são intensamente debatidas ${tag('debate')}.</li>
<li><strong>Monarquia</strong> (c. 1000–587 a.C.): Saul, Davi, Salomão; divisão em reino do Norte (Israel, destruído pela Assíria em 722 a.C.) e do Sul (Judá) ${tag('fato')}.</li>
<li><strong>Exílio na Babilônia</strong>: destruição de Jerusalém e do Primeiro Templo (587/586 a.C.); retorno após o édito de Ciro (538 a.C.) ${tag('fato')}. O exílio foi decisivo para a redação de grande parte do Antigo Testamento.</li>
<li><strong>Período persa e helenístico</strong>: reconstrução do Templo; depois de Alexandre (332 a.C.), helenização; revolta dos Macabeus contra Antíoco IV (c. 167–164 a.C.) ${tag('fato')}.</li>
<li><strong>Domínio romano</strong>: Pompeu toma Jerusalém (63 a.C.); Herodes, o Grande, reina de 37 a 4 a.C.; Jesus nasce provavelmente pouco antes de 4 a.C.; o Segundo Templo é destruído por Tito (70 d.C.) ${tag('fato')}.</li>
</ul>
<h3>O mundo judaico do século I</h3>
<p>Flávio Josefo descreve "escolas" judaicas ${tag('fato')}: <strong>fariseus</strong> (tradição oral, ressurreição), <strong>saduceus</strong> (aristocracia sacerdotal, sem ressurreição), <strong>essênios</strong> (comunidades separadas; muitos associam a eles os manuscritos de Qumran, descobertos a partir de 1947) e um movimento de resistência armada. Jesus falava aramaico; o grego era a língua franca do Mediterrâneo oriental.</p>
<h3>O Novo Testamento no mundo romano</h3>
<p>As viagens de Paulo usam as estradas e cidades do Império; suas cartas (c. 50–60 d.C.) são os textos cristãos mais antigos. Os Evangelhos são geralmente datados entre c. 65–70 (Marcos) e c. 90–100 (João) ${tag('debate')}.</p>`,
  vocabulario: [['Segundo Templo', 'Templo reconstruído após o exílio, destruído em 70 d.C.'], ['Diáspora', 'Comunidades judaicas fora da terra de Israel.'], ['Qumran', 'Sítio junto ao Mar Morto onde se acharam manuscritos antigos (1947).'], ['Helenização', 'Difusão da cultura grega após Alexandre.'], ['Septuaginta', 'Tradução grega do AT (séculos III–I a.C.).']],
  exemplos: '<p>Quando o Evangelho diz que os saduceus "negam a ressurreição" (Mc 12,18), saber quem eles eram explica o sentido da pergunta capciosa que fazem a Jesus.</p>',
  contexto: `<p>Os manuscritos de Qumran incluem as cópias mais antigas conhecidas de livros do AT, cerca de mil anos anteriores aos manuscritos medievais completos usados antes de 1947 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a datação dos textos importa para interpretá-los', tag: 'argumento',
    premissas: ['O sentido de um texto depende das perguntas e das circunstâncias a que responde.', 'As circunstâncias mudam com a época (antes, durante ou depois do exílio, por exemplo).', 'Situar um texto no tempo muda o modo de ler suas ênfases.'],
    conclusao: 'Logo, a história é instrumento da interpretação, não ameaça a ela.',
    nota: 'O argumento não diz que a data decide a verdade do texto; diz que ajuda a entender o que ele afirma.' },
  objecoes: [{ objecao: 'Se a arqueologia não confirma o Êxodo, a fé fica sem base.', tag: 'debate', resposta: 'A ausência de vestígios de um grupo nômade antigo é difícil de interpretar, e os historiadores divergem bastante. A fé cristã não depende de cada detalhe narrativo, mas a pergunta histórica é legítima e deve ser estudada sem medo.' }],
  aplicacao: '<p>Faça no Caderno uma linha do tempo de 1000 a.C. a 100 d.C. com dez marcos e associe a cada um um livro bíblico ligado a ele.</p>',
  fonte: { obra: 'Esdras 1; 1 Macabeus 1; Lucas 2,1–7', link: null, orientacao: '<p>Leia os três textos na sua Bíblia. Para cada um, identifique o império dominante, o governante citado e o problema histórico enfrentado. Use a aba "Ideias" para ver o que acontecia no mundo grego no mesmo período.</p>' },
  perguntas: [
    { p: 'Quando ocorreu o exílio na Babilônia?', r: 'A partir da destruição de Jerusalém em 587/586 a.C.; retorno após 538 a.C.' },
    { p: 'Quem eram os saduceus?', r: 'A aristocracia sacerdotal que negava a ressurreição.' },
    { p: 'Quais são os textos cristãos mais antigos?', r: 'As cartas de Paulo (c. 50–60 d.C.).' },
  ],
  exercicios: [
    mc('O Segundo Templo foi destruído em:', ['587 a.C.', '70 d.C.', '135 d.C.', '313 d.C.'], 1, 'Por Tito, durante a guerra judaica.'),
    mc('A revolta dos Macabeus foi contra:', ['Nabucodonosor', 'Antíoco IV', 'Pilatos', 'Ciro'], 1, 'C. 167–164 a.C.'),
    mc('O édito que permitiu o retorno do exílio é atribuído a:', ['Alexandre', 'Ciro', 'Augusto', 'Herodes'], 1, '538 a.C.'),
    mc('Josefo descreve como grupo que negava a ressurreição os:', ['Fariseus', 'Essênios', 'Saduceus', 'Samaritanos'], 2, 'Ver também Mc 12,18.'),
    disc('Mostre como o conhecimento do exílio babilônico ajuda a entender um texto bíblico à sua escolha (por exemplo, o Salmo 137 ou Isaías 40).', ['Situa o texto historicamente', 'Explica a ligação com o exílio', 'Mostra o ganho interpretativo', 'Usa fontes'])],
  resumo: ['Monarquia c. 1000–587 a.C.; exílio 587–538 a.C.', 'Helenização e Macabeus.', 'Domínio romano; Herodes; Templo destruído em 70.', 'Fariseus, saduceus, essênios.'],
  referencias: [{ texto: 'Flávio Josefo, Antiguidades Judaicas XVIII, 11–25 (as escolas judaicas).' }, { texto: 'Catecismo, §54–64 (as etapas da Revelação).', link: LINKS.cicRevelacao }],
  revisao: [['Exílio babilônico', '587/586 a.C.; retorno após o édito de Ciro, 538 a.C.'], ['Destruição do Segundo Templo', '70 d.C., por Tito.'], ['Qumran', 'Manuscritos do Mar Morto, descobertos a partir de 1947.']],
  avancado: {
    texto: `<h3>Arqueologia e Bíblia: maximalistas e minimalistas</h3>
<p>Na arqueologia do antigo Israel há posições "maximalistas" (que confiam mais no relato bíblico como fonte histórica) e "minimalistas" (associadas à chamada escola de Copenhague, que consideram tardia boa parte das narrativas). Israel Finkelstein e Neil Silberman (The Bible Unearthed, 2001) defenderam uma reconstrução mais crítica; outros arqueólogos, como William Dever, adotaram posições intermediárias ${tag('debate')}.</p>
<h3>Achados importantes</h3>
<p>A estela de Tel Dan (descoberta em 1993–1994, século IX a.C.) menciona a "casa de Davi", leitura majoritária como referência à dinastia davídica; a estela de Mesa (século IX a.C.) menciona o rei Omri de Israel ${tag('fato')}. Esses achados não "provam a Bíblia", mas mostram que certos personagens e reinos têm atestação fora dela.</p>
<h3>O judaísmo do Segundo Templo</h3>
<p>A pesquisa recente fala em "judaísmos", no plural, dada a variedade de grupos e literaturas (apocalíptica, sapiencial, de Qumran). Isso afeta a leitura do Novo Testamento, que deve ser situado dentro desse mundo, e não contra ele ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Israel Finkelstein e Neil A. Silberman, The Bible Unearthed (2001).' }, { texto: 'William G. Dever, What Did the Biblical Writers Know and When Did They Know It? (2001).' }],
    exercicios: [
      mc('A estela de Tel Dan é importante porque:', ['Prova o Êxodo', 'Menciona a "casa de Davi"', 'Data do século I', 'Contém o Gênesis'], 1, 'Atestação fora da Bíblia da dinastia davídica (leitura majoritária).'),
      mc('A "escola de Copenhague" é associada a posições:', ['Maximalistas', 'Minimalistas', 'Fundamentalistas', 'Patrísticas'], 1, 'Considera tardia boa parte das narrativas.'),
      mc('Falar em "judaísmos" no plural indica:', ['Desprezo pelo judaísmo', 'A variedade de grupos e literaturas do Segundo Templo', 'Que não havia Templo', 'Que Jesus não era judeu'], 1, 'Tendência da pesquisa recente.'),
      disc('Que tipo de evidência arqueológica seria relevante para avaliar um relato bíblico de sua escolha? Que limites tem essa evidência?', ['Escolhe relato pertinente', 'Indica tipos de evidência', 'Discute limites (silêncio arqueológico, datação)', 'Conclusão equilibrada'])],
  },
}),

aula({
  id: 'm2-3', titulo: 'A formação do cânon',
  aprendera: ['Como se formou a lista dos livros bíblicos', 'A diferença entre o cânon hebraico e a Septuaginta', 'Os critérios usados para reconhecer os livros do Novo Testamento', 'Os marcos: Marcião, Atanásio, sínodos africanos, Trento'],
  explicacao: `
<h3>Um processo, não um decreto</h3>
<p>Nenhum livro bíblico traz a lista completa dos livros inspirados. O cânon formou-se ao longo de séculos, pelo uso litúrgico, pelo discernimento das comunidades e pelo juízo dos pastores, até ser definido solenemente ${tag('fato')}.</p>
<h3>O Antigo Testamento</h3>
<p>Os judeus da Palestina usavam livros em hebraico agrupados em Lei, Profetas e Escritos; os da diáspora usavam também a Septuaginta, tradução grega que incluía livros como Sabedoria, Eclesiástico, Tobias, Judite, Baruc e Macabeus ${tag('fato')}. A Igreja antiga usou amplamente a Septuaginta. A ideia de que um "concílio de Jâmnia" (c. 90 d.C.) teria fechado o cânon hebraico é hoje muito questionada pelos historiadores ${tag('debate')}. Jerônimo (século IV) preferia o cânon hebraico, mas traduziu também os deuterocanônicos; Agostinho defendia o uso eclesial mais amplo ${tag('fato')}.</p>
<h3>O Novo Testamento</h3>
<p>Já no século II os quatro Evangelhos e as cartas de Paulo circulavam como Escritura. Marcião (c. 140) rejeitou o Antigo Testamento e propôs um cânon reduzido (uma versão de Lucas e dez cartas de Paulo); sua iniciativa estimulou a Igreja a definir melhor seus livros ${tag('fato')}. Ireneu (c. 180) defende que os Evangelhos são quatro, nem mais nem menos. A primeira lista conhecida que coincide exatamente com os 27 livros atuais é a Carta Festal 39 de Atanásio (367) ${tag('fato')}.</p>
<h3>Critérios</h3>
<p>Historiadores identificam critérios usados na Antiguidade ${tag('interpretacao')}: <strong>apostolicidade</strong> (origem apostólica ou ligação com um apóstolo), <strong>ortodoxia</strong> (conformidade com a regra de fé), <strong>catolicidade</strong> (uso amplo nas Igrejas) e uso litúrgico.</p>
<h3>Definições</h3>
<p>Os sínodos de Hipona (393) e Cartago (397) apresentaram listas iguais à atual; o Concílio de Florença (1442) e, de modo solene, Trento (1546) definiram o cânon católico de 73 livros ${tag('fato')}.</p>`,
  vocabulario: [['Cânon', 'Do grego "régua": lista dos livros reconhecidos como inspirados.'], ['Protocanônicos', 'Livros aceitos em toda parte desde cedo.'], ['Deuterocanônicos', 'Livros cuja canonicidade foi discutida em algumas regiões.'], ['Apócrifos', 'Escritos antigos não recebidos no cânon (ex.: Evangelho de Tomé).'], ['Marcionismo', 'Rejeição do AT e cânon reduzido, de Marcião.']],
  exemplos: '<p>O Evangelho de Tomé, conhecido integralmente pelos códices de Nag Hammadi (1945), é um texto antigo, mas não foi recebido no cânon: não tinha uso amplo nas Igrejas e apresenta traços gnósticos. Isso ilustra os critérios de catolicidade e ortodoxia.</p>',
  contexto: `<p>No século IV, com a liberdade de culto, multiplicaram-se as cópias oficiais da Bíblia; segundo Eusébio, Constantino lhe encomendou cinquenta códices ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que Marcião acelerou a definição do cânon (reconstrução historiográfica)', tag: 'argumento',
    premissas: ['Uma comunidade só precisa fixar limites quando eles são contestados.', 'Marcião contestou publicamente quais livros eram Escritura.', 'A resposta exigia dizer quais livros as Igrejas recebiam.'],
    conclusao: 'Logo, a crise marcionita estimulou a explicitação do cânon.',
    nota: 'Tese difundida por Adolf von Harnack e discutida por historiadores posteriores, que lembram que o processo já estava em curso.' },
  objecoes: [{ objecao: 'Se a Igreja definiu o cânon, a Bíblia depende da Igreja e não de Deus.', tag: 'debate', resposta: 'A posição católica distingue reconhecer e criar: a Igreja reconheceu livros que considera inspirados por Deus, sem conferir-lhes a inspiração. Protestantes concordam que a Igreja reconheceu, mas negam que esse reconhecimento lhe dê autoridade igual à da Escritura.' }],
  aplicacao: '<p>Compare o índice de uma Bíblia católica com o de uma Bíblia protestante e liste no Caderno os livros e partes que diferem.</p>',
  fonte: { obra: 'Catecismo §120–130; Atanásio, Carta Festal 39 (367)', link: LINKS.cicRevelacao, orientacao: '<p>Leia os §120–130 do Catecismo. Depois procure a Carta Festal 39 de Atanásio em uma coletânea patrística e compare a lista do NT com a da sua Bíblia.</p>' },
  perguntas: [
    { p: 'Qual é a primeira lista conhecida idêntica aos 27 livros do NT?', r: 'A Carta Festal 39 de Atanásio (367).' },
    { p: 'O que propôs Marcião?', r: 'Rejeitar o AT e adotar um cânon reduzido (versão de Lucas e dez cartas de Paulo).' },
    { p: 'Que critérios os historiadores identificam?', r: 'Apostolicidade, ortodoxia, catolicidade e uso litúrgico.' },
  ],
  exercicios: [
    mc('"Cânon" significa originalmente:', ['Livro', 'Régua, norma', 'Concílio', 'Tradução'], 1, 'Do grego kanōn.'),
    mc('A tese de um "concílio de Jâmnia" que fechou o cânon hebraico hoje é:', ['Consenso absoluto', 'Muito questionada', 'Dogma', 'Provada por documentos'], 1, 'Historiadores duvidam de que tenha havido tal decisão formal.'),
    mc('O Evangelho de Tomé não entrou no cânon principalmente por:', ['Ser escrito em latim', 'Falta de uso amplo e traços gnósticos', 'Ser muito curto', 'Ter sido escrito por Paulo'], 1, 'Critérios de catolicidade e ortodoxia.'),
    mc('O cânon de 73 livros foi definido solenemente em:', ['Niceia (325)', 'Trento (1546)', 'Vaticano I (1870)', 'Calcedônia (451)'], 1, 'Antes já em Florença (1442).'),
    disc('A Igreja "criou" ou "reconheceu" o cânon? Apresente a posição católica, a protestante e sua avaliação.', ['Distingue criar e reconhecer', 'Expõe as duas posições com fidelidade', 'Usa dados históricos corretos', 'Conclusão justificada'])],
  resumo: ['Cânon formado ao longo de séculos.', 'A Septuaginta inclui os deuterocanônicos.', 'Marcião (c. 140) estimulou a definição; Atanásio (367) lista os 27.', 'Hipona, Cartago, Florença, Trento.'],
  referencias: [{ texto: 'Catecismo, §120–130.', link: LINKS.cicRevelacao }, { texto: 'Ireneu, Contra as Heresias III, 11.' }, { texto: 'Bruce M. Metzger, The Canon of the New Testament (1987).' }],
  revisao: [['Carta Festal 39', 'Atanásio, 367: primeira lista idêntica aos 27 livros do NT.'], ['Marcião', 'C. 140: rejeitou o AT; cânon reduzido.'], ['Critérios do cânon', 'Apostolicidade, ortodoxia, catolicidade, uso litúrgico.']],
  avancado: {
    texto: `<h3>O Fragmento Muratoriano</h3>
<p>Lista latina de livros do NT descoberta por Ludovico Muratori no século XVIII. A datação tradicional é o fim do século II; alguns estudiosos (Albert Sundberg, Geoffrey Hahneman) propuseram o século IV, o que mudaria a cronologia do cânon ${tag('debate')}.</p>
<h3>Um "cânon dentro do cânon"?</h3>
<p>Alguns teólogos protestantes falam de um "cânon dentro do cânon": Lutero, por exemplo, privilegiou Romanos e Gálatas e chamou Tiago de "epístola de palha" no prefácio ao Novo Testamento de 1522. As posições católica e ortodoxa recusam essa hierarquização dos livros canônicos ${tag('fato')}.</p>
<h3>As Igrejas orientais</h3>
<p>As Igrejas ortodoxas recebem a Septuaginta e, em várias tradições, alguns livros a mais (como 3 Macabeus); a Igreja etíope tem um cânon ainda mais amplo ${tag('fato')}. O cânon não é idêntico em todas as tradições cristãs.</p>`,
    leituras: [{ texto: 'Bruce M. Metzger, The Canon of the New Testament (1987), caps. 8–10.' }, { texto: 'Lee M. McDonald, The Biblical Canon (2007).' }],
    exercicios: [
      mc('A datação do Fragmento Muratoriano é:', ['Indiscutível', 'Debatida entre o fim do século II e o século IV', 'Do século XVIII', 'Do século I'], 1, 'Sundberg e Hahneman propuseram o século IV.'),
      mc('Lutero chamou de "epístola de palha":', ['Romanos', 'Tiago', 'Hebreus', 'Apocalipse'], 1, 'Prefácio de 1522.'),
      mc('As Igrejas ortodoxas tendem a receber:', ['Só o cânon hebraico', 'A Septuaginta, às vezes com livros a mais', 'Só o NT', 'O cânon de Marcião'], 1, 'Há variações entre tradições.'),
      disc('Um "cânon dentro do cânon" é defensável? Avalie à luz do critério da unidade da Escritura (DV 12).', ['Explica a ideia', 'Usa o critério da unidade', 'Considera um exemplo concreto', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm2-4', titulo: 'A Igreja nascente e as perseguições',
  aprendera: ['Como o cristianismo se expandiu nos primeiros séculos', 'Os principais episódios de perseguição', 'O testemunho dos mártires e o que ele significa', 'O fim das perseguições e suas consequências'],
  explicacao: `
<h3>De Jerusalém a Roma</h3>
<p>Em poucas décadas, o anúncio cristão chegou às grandes cidades do Mediterrâneo, apoiado na rede de sinagogas da diáspora, nas estradas romanas e na língua grega comum ${tag('fato')}. As comunidades se organizavam com bispos, presbíteros e diáconos — Inácio de Antioquia, a caminho do martírio em Roma (c. 107–110), já descreve essa estrutura em suas cartas ${tag('fato')}.</p>
<h3>As perseguições</h3>
<p>As perseguições não foram contínuas nem iguais em todo o Império ${tag('fato')}:</p>
<ul>
<li><strong>Nero</strong> (64): após o incêndio de Roma, culpou os cristãos (Tácito, Anais XV, 44); a tradição situa nesse período o martírio de Pedro e Paulo.</li>
<li><strong>Trajano</strong> (c. 112): na resposta a Plínio, o Jovem, determina que os cristãos não sejam procurados, mas punidos se denunciados e se não renegarem.</li>
<li><strong>Décio</strong> (250): exigência de sacrifício aos deuses, com certificado (<em>libellus</em>); primeira perseguição sistemática em todo o Império.</li>
<li><strong>Diocleciano</strong> (a partir de 303): a "grande perseguição", com destruição de igrejas e livros.</li>
</ul>
<h3>Por que perseguir?</h3>
<p>Para os romanos, a religião cívica garantia a paz com os deuses (<em>pax deorum</em>); recusar o culto era tido como ateísmo e deslealdade. Os cristãos também eram alvo de boatos (incesto, canibalismo, por má compreensão da Eucaristia) ${tag('fato')}.</p>
<h3>Os mártires</h3>
<p>"Mártir" significa testemunha. Atas e relatos, como o Martírio de Policarpo (c. 155) e a Paixão de Perpétua e Felicidade (Cartago, 203), registram o testemunho ${tag('fato')}. Tertuliano escreveu que o sangue dos cristãos é semente (Apologético 50).</p>
<h3>313 e depois</h3>
<p>O chamado Edito de Milão (313), acordo entre Constantino e Licínio, concedeu liberdade de culto. Em 380, pelo édito de Tessalônica, Teodósio fez do cristianismo niceno a religião do Império ${tag('fato')}. Historiadores debatem os ganhos e os riscos dessa aliança entre Igreja e poder ${tag('debate')}.</p>`,
  vocabulario: [['Mártir', 'Testemunha; quem morre pela fé.'], ['Libellus', 'Certificado de sacrifício exigido sob Décio.'], ['Lapsi', 'Cristãos que cederam na perseguição.'], ['Pax deorum', 'Paz com os deuses, base da religião cívica romana.'], ['Didaqué', 'Manual cristão antigo (fim do século I ou início do II).']],
  exemplos: '<p>A questão dos <em>lapsi</em> depois de Décio dividiu a Igreja: deveriam ser readmitidos? Cipriano de Cartago defendeu a readmissão após penitência; Novaciano, em Roma, a rigidez. Problemas práticos geraram teologia sobre a penitência e a Igreja.</p>',
  contexto: `<p>Plínio, o Jovem, governador da Bitínia, relata a Trajano (Cartas X, 96) que os cristãos se reuniam antes do amanhecer, cantavam um hino a Cristo "como a um deus" e se comprometiam a não cometer crimes ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento dos mártires (apologética antiga, reconstruída)', tag: 'argumento',
    premissas: ['As primeiras testemunhas afirmavam ter visto Cristo ressuscitado.', 'Muitas delas preferiram morrer a negar o que afirmavam.', 'Ninguém costuma morrer por aquilo que sabe ser falso.'],
    conclusao: 'Logo, elas ao menos acreditavam sinceramente no que testemunhavam.',
    nota: 'O argumento prova a sinceridade, não a verdade: pessoas morrem por crenças falsas que julgam verdadeiras. Por isso pesa o fato de as testemunhas originais afirmarem ter visto, e não apenas acreditado.' },
  objecoes: [{ objecao: 'Os números de mártires foram exagerados pela tradição cristã.', tag: 'debate', resposta: 'Historiadores concordam que houve exageros em relatos tardios, mas as perseguições de Décio e de Diocleciano são bem documentadas. Candida Moss (The Myth of Persecution, 2013) defende uma revisão radical, contestada por outros especialistas.' }],
  aplicacao: '<p>Leia a carta de Plínio a Trajano e a resposta do imperador (Cartas X, 96–97). Reconstrua, em premissas, o raciocínio jurídico de Trajano.</p>',
  fonte: { obra: 'Plínio, o Jovem, Cartas X, 96–97; Martírio de Policarpo', link: null, orientacao: '<p>Os textos estão em coletâneas de documentos da Igreja antiga. Identifique como os romanos viam os cristãos e de que os acusavam concretamente.</p>' },
  perguntas: [
    { p: 'Qual foi a primeira perseguição sistemática em todo o Império?', r: 'A de Décio (250).' },
    { p: 'O que significa "mártir"?', r: 'Testemunha.' },
    { p: 'O que foi o Edito de Milão?', r: 'Acordo de 313 que concedeu liberdade de culto.' },
  ],
  exercicios: [
    mc('A perseguição após o incêndio de Roma (64) ocorreu sob:', ['Décio', 'Nero', 'Diocleciano', 'Trajano'], 1, 'Tácito, Anais XV, 44.'),
    mc('Na resposta a Plínio, Trajano determina que os cristãos:', ['Sejam procurados ativamente', 'Não sejam procurados, mas punidos se denunciados e não renegarem', 'Sejam todos libertados', 'Sejam exilados'], 1, 'Cartas X, 97.'),
    mc('"Lapsi" eram:', ['Os mártires', 'Os que cederam na perseguição', 'Os bispos', 'Os catecúmenos'], 1, 'Sua readmissão gerou debates.'),
    mc('O argumento dos mártires prova, no máximo:', ['A verdade do cristianismo', 'A sinceridade das testemunhas', 'A existência de Deus', 'A inerrância bíblica'], 1, 'Sinceridade não é o mesmo que verdade.'),
    disc('Avalie o argumento dos mártires: o que ele prova e o que não prova? Que premissa adicional o tornaria mais forte?', ['Reconstrói o argumento', 'Distingue sinceridade e verdade', 'Propõe premissa adicional pertinente', 'Avalia honestamente'])],
  resumo: ['Expansão rápida pelas cidades do Império.', 'Perseguições: Nero, Trajano, Décio, Diocleciano.', 'Mártir = testemunha.', '313: liberdade de culto; 380: religião do Império.'],
  referencias: [{ texto: 'Tácito, Anais XV, 44; Plínio, o Jovem, Cartas X, 96–97.' }, { texto: 'Eusébio de Cesareia, História Eclesiástica.' }, { texto: 'Inácio de Antioquia, Cartas.' }],
  revisao: [['Perseguição de Décio', '250: certificado de sacrifício (libellus) em todo o Império.'], ['Edito de Milão', '313: liberdade de culto.'], ['Mártir', 'Testemunha.']],
  avancado: {
    texto: `<h3>O crescimento do cristianismo</h3>
<p>O sociólogo Rodney Stark (The Rise of Christianity, 1996) estimou um crescimento de cerca de 40% por década, sem necessidade de conversões em massa, e atribuiu parte do sucesso a redes familiares, ao cuidado dos doentes nas epidemias e à posição das mulheres nas comunidades. Seus números são estimativas discutidas ${tag('debate')}.</p>
<h3>Revisões da história das perseguições</h3>
<p>Candida Moss (The Myth of Persecution, 2013) argumenta que a perseguição sistemática durou poucos anos e que a memória cristã ampliou os episódios. Críticos respondem que, mesmo breves, as perseguições foram reais e decisivas para a identidade cristã ${tag('debate')}.</p>
<h3>Teologia do martírio</h3>
<p>Inácio de Antioquia (Carta aos Romanos) apresenta o martírio como imitação de Cristo e pede que os romanos não o impeçam. A Igreja antiga distinguia o martírio verdadeiro da busca temerária da morte e desaconselhava a apresentação voluntária às autoridades ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Inácio de Antioquia, Carta aos Romanos.' }, { texto: 'Rodney Stark, The Rise of Christianity (1996).' }, { texto: 'Candida Moss, The Myth of Persecution (2013).' }],
    exercicios: [
      mc('Stark atribui o crescimento cristão em parte a:', ['Conversões forçadas', 'Redes familiares e cuidado nas epidemias', 'Apoio imperial desde o início', 'Riqueza das comunidades'], 1, 'The Rise of Christianity (1996).'),
      mc('A tese de Moss é que:', ['Não houve cristãos', 'A perseguição sistemática foi breve e a memória a ampliou', 'Nero era cristão', 'O Edito de Milão é falso'], 1, 'Tese contestada.'),
      mc('A Igreja antiga, sobre buscar o martírio voluntariamente:', ['Incentivava', 'Desaconselhava', 'Exigia', 'Ignorava'], 1, 'Distinguia martírio de temeridade.'),
      disc('Compare as teses de Stark e de Moss com os dados das fontes antigas (Tácito, Plínio, Eusébio). O que as fontes permitem afirmar com segurança?', ['Usa fontes antigas', 'Expõe as duas teses', 'Distingue dado e estimativa', 'Conclusão cautelosa'])],
  },
}),

aula({
  id: 'm2-5', titulo: 'Os primeiros concílios: Niceia e Constantinopla',
  aprendera: ['A controvérsia ariana e o que estava em jogo', 'O significado de "homoousios"', 'O papel de Atanásio e dos Capadócios', 'O que Constantinopla (381) acrescentou'],
  prereq: ['Módulo 1, aula 5: O Credo e os fundamentos da fé'],
  explicacao: `
<h3>Uma pergunta decisiva</h3>
<p>Por volta de 318, Ário, presbítero de Alexandria, ensinou que o Filho, embora a mais elevada das criaturas, teve começo: "houve um tempo em que ele não era" ${tag('fato')}. Se isso fosse verdade, Cristo não seria Deus, e a salvação não seria união com Deus. O bispo Alexandre o condenou, e a disputa se espalhou pelo Oriente.</p>
<h3>Niceia (325)</h3>
<p>Constantino convocou o primeiro concílio ecumênico em Niceia. O concílio afirmou que o Filho é "gerado, não criado", "da substância do Pai" e <strong>homoousios</strong> (consubstancial) ao Pai ${tag('doutrina')}. O termo, não bíblico, foi escolhido porque fórmulas bíblicas podiam ser lidas em sentido ariano ${tag('fato')}.</p>
<h3>Meio século de crise</h3>
<p>Depois de Niceia, a disputa continuou. Atanásio, bispo de Alexandria, foi exilado cinco vezes ${tag('fato')}. Surgiram posições intermediárias: <em>homoiousios</em> ("de substância semelhante") e <em>homoios</em> ("semelhante", sem falar de substância), apoiadas por imperadores. Jerônimo escreveu que o mundo inteiro gemeu e se espantou de se ver ariano ${tag('fato')}.</p>
<h3>Os Capadócios e Constantinopla (381)</h3>
<p>Basílio de Cesareia, Gregório de Nazianzo e Gregório de Nissa distinguiram <em>ousia</em> (o que é comum: a essência) e <em>hypostasis</em> (o que é próprio: a pessoa), o que permitiu afirmar uma essência e três hipóstases ${tag('fato')}. O Concílio de Constantinopla (381) reafirmou Niceia e desenvolveu o artigo sobre o Espírito Santo, "Senhor que dá a vida", adorado e glorificado com o Pai e o Filho ${tag('doutrina')}, contra os que negavam sua divindade (os "pneumatômacos").</p>`,
  vocabulario: [['Arianismo', 'Tese de que o Filho é criatura.'], ['Homoousios', 'Consubstancial: da mesma substância.'], ['Homoiousios', 'De substância semelhante.'], ['Concílio ecumênico', 'Assembleia dos bispos de toda a Igreja.'], ['Pneumatômacos', '"Combatentes do Espírito": negavam a divindade do Espírito Santo.']],
  exemplos: '<p>Ário dizia que "houve um tempo em que ele não era". A resposta nicena: o Filho é gerado eternamente, como a luz que procede da luz sem que haja tempo em que a fonte exista sem o brilho — imagem que está no Credo ("luz da luz").</p>',
  contexto: `<p>Constantino queria a unidade religiosa do Império; sua intervenção deu força ao concílio, mas também abriu caminho para que imperadores posteriores apoiassem os arianos ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento soteriológico de Atanásio (A Encarnação do Verbo, reconstruído)', tag: 'argumento',
    premissas: ['O fim da salvação é a participação na vida divina.', 'Uma criatura não pode comunicar o que não possui: a divindade.', 'Cristo é quem nos comunica a vida divina.'],
    conclusao: 'Logo, Cristo não é criatura, mas Deus.',
    nota: 'A força do argumento está em ligar a doutrina sobre Cristo à experiência da salvação. A premissa 1 é cristã; um ariano poderia contestar a 3, entendendo a salvação de outro modo.' },
  objecoes: [{ objecao: '"Homoousios" é termo filosófico estranho à Bíblia; Niceia helenizou a fé.', tag: 'debate', resposta: 'Os padres nicenos responderam que o termo foi usado para preservar o sentido bíblico contra a leitura ariana. A tese da "helenização" (Harnack) será estudada na aula 8.' }],
  aplicacao: '<p>Escreva o Credo Niceno-Constantinopolitano e sublinhe as expressões antiarianas e as relativas ao Espírito Santo.</p>',
  fonte: { obra: 'Atanásio, A Encarnação do Verbo; Credo de Niceia (DH 125–126)', link: null, orientacao: '<p>Leia os capítulos 1–10 de A Encarnação do Verbo e reconstrua o argumento sobre por que o Verbo se fez homem. Compare com o texto do Credo de Niceia.</p>' },
  perguntas: [
    { p: 'O que afirmava Ário?', r: 'Que o Filho é criatura e teve começo.' },
    { p: 'Por que Niceia usou um termo não bíblico?', r: 'Porque fórmulas bíblicas podiam ser lidas em sentido ariano.' },
    { p: 'O que Constantinopla (381) acrescentou?', r: 'O desenvolvimento do artigo sobre o Espírito Santo.' },
  ],
  exercicios: [
    mc('"Homoousios" significa:', ['De substância semelhante', 'Consubstancial', 'Criado', 'Semelhante'], 1, 'Da mesma substância.'),
    mc('Quem foi exilado cinco vezes na defesa de Niceia?', ['Ário', 'Atanásio', 'Constantino', 'Basílio'], 1, 'Atanásio de Alexandria.'),
    mc('A distinção entre ousia e hypostasis é obra principalmente:', ['Dos arianos', 'Dos Capadócios', 'De Tertuliano', 'De Agostinho'], 1, 'Basílio e os dois Gregórios.'),
    mc('Os "pneumatômacos" negavam:', ['A divindade do Filho', 'A divindade do Espírito Santo', 'A humanidade de Cristo', 'A Trindade inteira'], 1, 'Combatidos em 381.'),
    disc('Reconstrua o argumento de Atanásio e avalie: ele depende de premissas que um ariano aceitaria? Qual seria a melhor resposta ariana?', ['Reconstrução fiel', 'Identifica premissas compartilhadas e não compartilhadas', 'Formula resposta ariana plausível', 'Avaliação justificada'])],
  resumo: ['Ário: o Filho é criatura.', 'Niceia (325): homoousios.', 'Crise pós-nicena; Atanásio.', 'Capadócios: ousia e hypostasis.', 'Constantinopla (381): o Espírito Santo.'],
  referencias: [{ texto: 'Atanásio, A Encarnação do Verbo.' }, { texto: 'Catecismo, §242–248 e §465.', link: LINKS.cicPai }, { texto: 'Gregório de Nazianzo, Discursos teológicos (27–31).' }],
  revisao: [['Niceia', '325: Filho homoousios (consubstancial) ao Pai.'], ['Constantinopla I', '381: divindade do Espírito Santo.'], ['Capadócios', 'Basílio, Gregório de Nazianzo, Gregório de Nissa: ousia × hypostasis.']],
  avancado: {
    texto: `<h3>Releituras recentes do século IV</h3>
<p>Historiadores como R. P. C. Hanson (The Search for the Christian Doctrine of God, 1988) e Lewis Ayres (Nicaea and its Legacy, 2004) mostraram que "arianismo" é um rótulo polêmico que agrupava posições diversas, e que o próprio termo homoousios só se tornou bandeira décadas depois de 325 ${tag('interpretacao')}. Essas obras não negam a importância de Niceia, mas descrevem o século IV como busca prolongada de vocabulário.</p>
<h3>O "iota" de Gibbon</h3>
<p>Edward Gibbon zombou de que a cristandade se dividisse por um "iota" (a diferença entre homoousios e homoiousios) ${tag('fato')}. A resposta teológica é que a letra marca a diferença entre identidade de natureza e mera semelhança, isto é, entre Cristo ser Deus ou não.</p>
<h3>Gregório de Nissa e a incompreensibilidade de Deus</h3>
<p>Em Contra Eunômio, Gregório defende a infinitude de Deus e a incompreensibilidade da essência divina: conhecemos Deus pelas operações, não pela essência ${tag('argumento')}. Essa tese influenciou toda a teologia negativa posterior.</p>`,
    leituras: [{ texto: 'Lewis Ayres, Nicaea and its Legacy (2004), introdução e caps. 1–4.' }, { texto: 'Gregório de Nazianzo, Discurso teológico 3 (Discurso 29).' }],
    exercicios: [
      mc('Segundo Ayres e Hanson, "arianismo" é:', ['Uma escola única e coesa', 'Rótulo polêmico que agrupava posições diversas', 'Invenção do século XIX', 'Sinônimo de gnosticismo'], 1, 'Interpretação influente da historiografia recente.'),
      mc('A zombaria sobre o "iota" é de:', ['Voltaire', 'Gibbon', 'Hume', 'Harnack'], 1, 'Edward Gibbon.'),
      mc('Para Gregório de Nissa, conhecemos Deus:', ['Pela essência', 'Pelas operações', 'Só pela razão', 'Pela matemática'], 1, 'A essência permanece incompreensível.'),
      disc('A diferença entre homoousios e homoiousios é "só uma palavra"? Argumente.', ['Explica os dois termos', 'Mostra a consequência teológica', 'Responde à zombaria de Gibbon', 'Conclusão justificada'])],
  },
}),
];
