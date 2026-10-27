// Módulo 10 — Filosofia contemporânea: aulas 1 a 6.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm10-1', titulo: 'Hegel e o idealismo alemão',
  aprendera: ['De Kant a Hegel: Fichte e Schelling', 'A dialética e o "trabalho do negativo"', 'A Fenomenologia do Espírito e a dialética senhor–escravo', 'A filosofia da história e o Estado'],
  prereq: ['Módulo 9 concluído'],
  explicacao: `
<h3>Depois de Kant</h3>
<p>Fichte (Doutrina da Ciência, 1794) eliminou a coisa em si e fez do Eu o princípio de tudo; Schelling desenvolveu uma filosofia da natureza e da identidade ${tag('fato')}. G. W. F. Hegel (1770–1831) quis superar ambos num sistema em que o real é a manifestação do Espírito ${tag('interpretacao')}.</p>
<h3>"O verdadeiro é o todo"</h3>
<p>No prefácio da Fenomenologia do Espírito (1807): "o verdadeiro é o todo" e deve ser concebido "não só como substância, mas também como sujeito" ${tag('fato')}. A verdade é um processo que se desenvolve através de contradições.</p>
<h3>Dialética</h3>
<p>O esquema "tese–antítese–síntese" é de Fichte e de divulgadores; Hegel raramente o usa ${tag('fato')}. Para ele, cada figura do pensamento revela sua própria limitação (negação) e é "suprassumida" (<em>Aufhebung</em>): ao mesmo tempo negada, conservada e elevada ${tag('interpretacao')}.</p>
<h3>Senhor e escravo</h3>
<p>Na Fenomenologia (seção "Independência e dependência da consciência de si"), duas consciências lutam por reconhecimento. O vencedor torna-se senhor; o vencido, escravo. Mas o escravo, pelo trabalho, forma o mundo e a si mesmo, enquanto o senhor depende do escravo ${tag('fato')}. A passagem influenciou Marx e Kojève ${tag('interpretacao')}.</p>
<h3>História e Estado</h3>
<p>"A história do mundo é o progresso na consciência da liberdade": no Oriente, um é livre; entre gregos e romanos, alguns; no mundo germânico-cristão, todos (Lições sobre a Filosofia da História) ${tag('fato')}. Na Filosofia do Direito (1820): "o que é racional é efetivo, e o que é efetivo é racional"; o Estado é a efetividade da ideia ética ${tag('fato')}.</p>
<h3>Religião</h3>
<p>Para Hegel, religião e filosofia têm o mesmo conteúdo; a religião o apresenta em "representações", a filosofia em conceitos ${tag('interpretacao')}. Teólogos discutem se isso preserva ou dissolve o cristianismo ${tag('debate')}.</p>`,
  vocabulario: [['Aufhebung', 'Suprassunção: negar, conservar, elevar.'], ['Espírito (Geist)', 'Razão que se realiza na história.'], ['Reconhecimento', 'Afirmação mútua das consciências.'], ['Efetividade', 'Realidade racional desenvolvida.'], ['Idealismo absoluto', 'O real como manifestação do Espírito.']],
  exemplos: '<p>A semente é "negada" pela planta, mas a planta conserva e eleva o que estava na semente: é a imagem orgânica que Hegel usa no prefácio da Fenomenologia (botão, flor, fruto).</p>',
  contexto: `<p>Hegel terminou a Fenomenologia em Jena em 1806, quando Napoleão entrou na cidade; chamou-o "a alma do mundo a cavalo" numa carta ${tag('fato')}.</p>`,
  argumento: { titulo: 'O verdadeiro é o todo (reconstruído)', tag: 'argumento',
    premissas: ['Toda determinação finita é o que é por relação com o que ela não é.', 'Logo, nenhuma determinação finita é plenamente verdadeira isolada.', 'A verdade plena só está na totalidade das relações desenvolvidas.'],
    conclusao: 'Portanto, o verdadeiro é o todo.',
    nota: 'Kierkegaard objetará que o sistema esquece o indivíduo existente; tomistas dirão que confunde a ordem do ser com a do pensar.' },
  objecoes: [{ objecao: 'Popper (A Sociedade Aberta e Seus Inimigos, 1945) acusou Hegel de preparar o totalitarismo pela divinização do Estado.', tag: 'debate', resposta: 'Estudiosos (Avineri, Pinkard) mostram que o Estado de Hegel inclui direitos, sociedade civil e monarquia constitucional. A leitura de Popper é considerada injusta por muitos especialistas.' }],
  aplicacao: '<p>Escolha um conflito histórico ou pessoal e descreva-o como Hegel: qual figura revela seus limites e o que é conservado ao ser superado?</p>',
  fonte: { obra: 'Hegel, Fenomenologia do Espírito, prefácio e seção sobre senhor e escravo', link: null, orientacao: '<p>Leia o prefácio (§§1–20) e a seção IV, A. Resuma o movimento do reconhecimento em cinco passos.</p>' },
  perguntas: [
    { p: 'O que significa Aufhebung?', r: 'Negar, conservar e elevar.' },
    { p: 'Por que o escravo supera o senhor?', r: 'Pelo trabalho, forma o mundo e a si mesmo.' },
    { p: 'O que é a história para Hegel?', r: 'O progresso na consciência da liberdade.' },
  ],
  exercicios: [
    mc('O esquema "tese–antítese–síntese":', ['É a fórmula central de Hegel', 'É de Fichte e divulgadores; Hegel raramente usa', 'É de Marx', 'É de Kant'], 1, 'Atribuição popular.'),
    mc('A Fenomenologia do Espírito é de:', ['1781', '1807', '1820', '1848'], 1, 'Jena.'),
    mc('"O que é racional é efetivo" está na:', ['Fenomenologia', 'Filosofia do Direito', 'Lógica', 'Enciclopédia'], 1, '1820.'),
    mc('Quem leu Hegel como inimigo da sociedade aberta?', ['Avineri', 'Popper', 'Kojève', 'Marx'], 1, '1945.'),
    disc('A dialética senhor–escravo é uma boa descrição do reconhecimento humano? Compare com uma visão cristã da dignidade.', ['Expõe a dialética', 'Expõe a visão cristã', 'Compara', 'Conclusão justificada'])],
  resumo: ['Fichte, Schelling, Hegel.', 'O verdadeiro é o todo.', 'Aufhebung.', 'Senhor e escravo.', 'História como liberdade; Estado.'],
  referencias: [{ texto: 'Hegel, Fenomenologia do Espírito (1807).' }, { texto: 'Hegel, Princípios da Filosofia do Direito (1820).' }, { texto: 'Terry Pinkard, Hegel: A Biography (2000).' }],
  revisao: [['Aufhebung', 'Suprassunção.'], ['Senhor e escravo', 'Fenomenologia IV, A.'], ['O verdadeiro é o todo', 'Prefácio da Fenomenologia.']],
  avancado: {
    texto: `<h3>A Ciência da Lógica</h3>
<p>A Lógica (1812–1816) começa pelo ser puro, que, sem determinação, é idêntico ao nada; a verdade de ambos é o devir ${tag('fato')}. Tomistas notam que esse "ser" é o conceito mais vazio, não o ato de ser (<em>esse</em>) de Tomás, que é o mais pleno ${tag('interpretacao')}.</p>
<h3>Esquerda e direita hegelianas</h3>
<p>Após a morte de Hegel, a "direita" leu o sistema como compatível com o cristianismo e o Estado prussiano; a "esquerda" (Feuerbach, Strauss, Marx) o transformou em crítica da religião ${tag('fato')}. Feuerbach (A Essência do Cristianismo, 1841): Deus é a projeção da essência humana ${tag('fato')}.</p>
<h3>Kojève</h3>
<p>As lições de Alexandre Kojève em Paris (1933–1939) sobre a Fenomenologia marcaram Sartre, Lacan e Fukuyama ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Ludwig Feuerbach, A Essência do Cristianismo (1841).' }, { texto: 'Alexandre Kojève, Introdução à Leitura de Hegel (1947).' }],
    exercicios: [
      mc('Na Lógica, a verdade do ser e do nada é:', ['O devir', 'A essência', 'O conceito', 'Deus'], 0, 'Início da Lógica.'),
      mc('"Deus é a projeção da essência humana" é tese de:', ['Hegel', 'Feuerbach', 'Kierkegaard', 'Schelling'], 1, '1841.'),
      mc('As lições sobre a Fenomenologia em Paris (1933–1939) foram de:', ['Hyppolite', 'Kojève', 'Sartre', 'Wahl'], 1, 'Kojève.'),
      disc('Compare o "ser puro" da Lógica de Hegel com o esse de Tomás.', ['Expõe Hegel', 'Expõe Tomás', 'Compara', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm10-2', titulo: 'Marx e o materialismo histórico',
  aprendera: ['A inversão de Hegel', 'Infraestrutura, superestrutura e luta de classes', 'Alienação e mais-valia', 'A crítica da religião e a resposta da doutrina social da Igreja'],
  prereq: ['Aula anterior: Hegel'],
  explicacao: `
<h3>Hegel "de cabeça para baixo"</h3>
<p>Karl Marx (1818–1883) disse que em Hegel a dialética "está de cabeça para baixo" e é preciso invertê-la (posfácio de O Capital, 2ª ed., 1873) ${tag('fato')}. Não é o espírito que move a história, mas as condições materiais de produção ${tag('interpretacao')}.</p>
<h3>Materialismo histórico</h3>
<p>No prefácio da Contribuição à Crítica da Economia Política (1859): as relações de produção formam a "base real" (infraestrutura), sobre a qual se ergue a superestrutura jurídica, política e ideológica; "não é a consciência que determina o ser, mas o ser social que determina a consciência" ${tag('fato')}.</p>
<h3>Luta de classes</h3>
<p>"A história de todas as sociedades até hoje é a história da luta de classes" (Manifesto Comunista, 1848, com Engels) ${tag('fato')}. No capitalismo, burguesia e proletariado.</p>
<h3>Alienação e mais-valia</h3>
<p>Nos Manuscritos de 1844, o trabalhador é alienado do produto, da atividade, de sua essência genérica e dos outros ${tag('fato')}. Em O Capital (1867), a mais-valia é o valor que o trabalhador produz além do que recebe como salário, apropriado pelo capitalista ${tag('fato')}.</p>
<h3>Religião</h3>
<p>"A religião é o suspiro da criatura oprimida... é o ópio do povo" (Crítica da Filosofia do Direito de Hegel, introdução, 1844) ${tag('fato')}. Para Marx, a crítica da religião é condição de toda crítica.</p>
<h3>A resposta católica</h3>
<p>Leão XIII, na Rerum novarum (1891), rejeitou a luta de classes e a abolição da propriedade privada, mas exigiu salário justo e direito de associação ${tag('doutrina')}. Pio XI (Divini Redemptoris, 1937) condenou o comunismo ateu ${tag('doutrina')}. João Paulo II (Laborem exercens, 1981; Centesimus annus, 1991) afirmou o primado do trabalho sobre o capital e criticou o "erro antropológico" do socialismo ${tag('doutrina')}.</p>`,
  vocabulario: [['Infraestrutura', 'Base econômica: forças e relações de produção.'], ['Superestrutura', 'Direito, política, ideologia.'], ['Alienação', 'Separação do trabalhador de seu produto e essência.'], ['Mais-valia', 'Valor produzido além do salário.'], ['Ideologia', 'Ideias que justificam relações de dominação.']],
  exemplos: '<p>Um operário que monta uma peça de um carro que nunca poderá comprar, sem entender o processo inteiro, ilustra o que Marx chama de alienação do produto e da atividade.</p>',
  contexto: `<p>Marx viveu exilado em Londres a partir de 1849 e escreveu na biblioteca do Museu Britânico ${tag('fato')}.</p>`,
  argumento: { titulo: 'O ser social determina a consciência (Prefácio de 1859, reconstruído)', tag: 'argumento',
    premissas: ['Para viver, os homens precisam produzir seus meios de vida.', 'Os modos de produção estruturam as relações sociais.', 'As ideias dominantes de uma época são as ideias da classe dominante.'],
    conclusao: 'Logo, as formas de consciência devem ser explicadas a partir das condições materiais.',
    nota: 'Se toda ideia é determinada pela base, a própria teoria de Marx também seria — problema de autorreferência apontado por críticos.' },
  objecoes: [{ objecao: 'Weber (A Ética Protestante e o Espírito do Capitalismo, 1904–1905) mostrou que ideias religiosas também moldam a economia.', tag: 'debate', resposta: 'Marxistas posteriores (Gramsci, Escola de Frankfurt) deram mais autonomia à superestrutura. O debate sobre a causalidade entre ideias e economia continua.' }],
  aplicacao: '<p>Compare no Caderno a análise do trabalho em Marx e na Laborem exercens: o que coincide e o que difere?</p>',
  fonte: { obra: 'Marx, Prefácio à Contribuição à Crítica da Economia Política (1859); Manifesto, cap. I', link: null, orientacao: '<p>Leia o prefácio de 1859 (curto) e o capítulo I do Manifesto. Reconstrua o materialismo histórico em cinco teses.</p>' },
  perguntas: [
    { p: 'O que é a infraestrutura?', r: 'A base econômica: forças e relações de produção.' },
    { p: 'O que é a mais-valia?', r: 'O valor produzido além do salário, apropriado pelo capitalista.' },
    { p: 'Como Leão XIII respondeu ao socialismo?', r: 'Rejeitou a luta de classes e a abolição da propriedade, exigindo justiça para os trabalhadores.' },
  ],
  exercicios: [
    mc('O Manifesto Comunista é de:', ['1844', '1848', '1859', '1867'], 1, 'Com Engels.'),
    mc('"Ópio do povo" aparece na:', ['Ideologia Alemã', 'Crítica da Filosofia do Direito de Hegel, introdução', 'O Capital', 'Manifesto'], 1, '1844.'),
    mc('A Rerum novarum é de:', ['Pio IX', 'Leão XIII', 'Pio XI', 'João XXIII'], 1, '1891.'),
    mc('A tese de que a ética protestante moldou o capitalismo é de:', ['Durkheim', 'Weber', 'Gramsci', 'Lukács'], 1, '1904–1905.'),
    disc('O que a doutrina social da Igreja aceita e o que rejeita na análise de Marx? Use a Centesimus annus.', ['Pontos aceitos', 'Pontos rejeitados', 'Usa o documento', 'Conclusão justificada'])],
  resumo: ['Inversão de Hegel.', 'Infraestrutura e superestrutura.', 'Luta de classes.', 'Alienação e mais-valia.', 'Crítica da religião e resposta católica.'],
  referencias: [{ texto: 'Marx e Engels, Manifesto Comunista (1848).' }, { texto: 'Marx, O Capital, livro I (1867).' }, { texto: 'João Paulo II, Centesimus annus (1991), §13.' }],
  revisao: [['Prefácio de 1859', 'O ser social determina a consciência.'], ['Mais-valia', 'O Capital.'], ['Rerum novarum', 'Leão XIII, 1891.']],
  avancado: {
    texto: `<h3>O "erro antropológico"</h3>
<p>Centesimus annus §13: o erro fundamental do socialismo é antropológico — considera o homem um simples elemento do organismo social, subordinando o bem do indivíduo ao mecanismo econômico ${tag('doutrina')}.</p>
<h3>Marxismo ocidental</h3>
<p>Lukács (História e Consciência de Classe, 1923), Gramsci (hegemonia cultural) e a Escola de Frankfurt (Adorno, Horkheimer, Marcuse) deslocaram o foco da economia para a cultura ${tag('fato')}. Leszek Kołakowski, ex-marxista, escreveu Principais Correntes do Marxismo (1976–1978), história crítica do movimento ${tag('fato')}.</p>
<h3>Teologia da libertação</h3>
<p>A Congregação para a Doutrina da Fé publicou a Instrução Libertatis nuntius (1984), criticando o uso acrítico de conceitos marxistas, e a Libertatis conscientia (1986), sobre a liberdade cristã ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Leszek Kołakowski, Principais Correntes do Marxismo (1976–1978).' }, { texto: 'Congregação para a Doutrina da Fé, Libertatis nuntius (1984).' }],
    exercicios: [
      mc('A noção de "hegemonia cultural" é de:', ['Lukács', 'Gramsci', 'Adorno', 'Marcuse'], 1, 'Cadernos do Cárcere.'),
      mc('Libertatis nuntius (1984) critica:', ['O capitalismo', 'O uso acrítico do marxismo na teologia', 'O tomismo', 'O liberalismo'], 1, 'CDF.'),
      mc('Principais Correntes do Marxismo é de:', ['Kołakowski', 'Lukács', 'Aron', 'Popper'], 0, '1976–1978.'),
      disc('Explique o "erro antropológico" do socialismo segundo a Centesimus annus e avalie se atinge também o capitalismo liberal.', ['Expõe o erro', 'Cita §13', 'Avalia o capitalismo', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm10-3', titulo: 'Kierkegaard: fé e existência',
  aprendera: ['A crítica ao sistema hegeliano', 'Os três estádios da existência', 'Abraão e a suspensão teleológica do ético', 'Verdade como subjetividade e o paradoxo da fé'],
  prereq: ['Aula 1 deste módulo'],
  explicacao: `
<h3>O indivíduo contra o sistema</h3>
<p>Søren Kierkegaard (1813–1855), em Copenhague, reagiu ao hegelianismo dominante: o sistema explica tudo, menos o indivíduo concreto que precisa decidir como viver ${tag('interpretacao')}. Publicou muitas obras sob pseudônimos (Johannes de Silentio, Johannes Climacus, Anti-Climacus), o que exige cuidado ao atribuir-lhe teses ${tag('fato')}.</p>
<h3>Três estádios</h3>
<ul>
<li><strong>Estético</strong>: vive para o prazer e o interessante; termina em tédio e desespero (Ou–Ou, 1843, parte I).</li>
<li><strong>Ético</strong>: assume compromissos e deveres universais (o juiz Wilhelm, Ou–Ou, parte II).</li>
<li><strong>Religioso</strong>: relação absoluta com o Absoluto, pela fé ${tag('fato')}.</li>
</ul>
<p>A passagem entre estádios não é dialética necessária, mas "salto" de liberdade ${tag('interpretacao')}.</p>
<h3>Temor e Tremor (1843)</h3>
<p>Abraão, mandado sacrificar Isaac, não pode ser explicado pela ética universal: ou é assassino, ou há uma "suspensão teleológica do ético" e um dever absoluto para com Deus ${tag('fato')}. Johannes de Silentio admira Abraão e confessa não conseguir compreendê-lo ${tag('interpretacao')}.</p>
<h3>Verdade como subjetividade</h3>
<p>No Pós-escrito (1846), Climacus diz que "a subjetividade é a verdade": não que a verdade seja relativa, mas que a verdade religiosa só é possuída numa apropriação apaixonada ${tag('interpretacao')}. O paradoxo absoluto é Deus no tempo — Cristo — escândalo para a razão ${tag('fato')}.</p>
<h3>Desespero</h3>
<p>Em A Doença para a Morte (1849, Anti-Climacus), o desespero é não querer ser si mesmo ou querer sê-lo sem Deus; a fé é o eu que se fundamenta transparentemente no poder que o pôs ${tag('fato')}.</p>`,
  vocabulario: [['Estádios', 'Estético, ético, religioso.'], ['Salto', 'Passagem livre, não dedutiva.'], ['Suspensão teleológica do ético', 'Dever absoluto que transcende o universal.'], ['Paradoxo absoluto', 'Deus no tempo.'], ['Desespero', 'Relação desequilibrada do eu consigo mesmo.']],
  exemplos: '<p>Alguém pode conhecer todas as provas de Deus e não mudar nada na vida; outro pode decidir viver diante de Deus sem saber argumentar. Kierkegaard pergunta: qual dos dois "está na verdade"?</p>',
  contexto: `<p>Kierkegaard atacou nos últimos anos a Igreja estatal dinamarquesa por reduzir o cristianismo a convenção ("a cristandade") ${tag('fato')}.</p>`,
  argumento: { titulo: 'A fé não é conclusão de um argumento (Pós-escrito, reconstruído)', tag: 'argumento',
    premissas: ['O conhecimento histórico e especulativo é sempre aproximação, nunca certeza infinita.', 'A fé exige um compromisso infinito.', 'Um compromisso infinito não pode fundar-se numa aproximação.'],
    conclusao: 'Logo, a fé é decisão e paixão, não resultado de prova.',
    nota: 'A tradição católica (Vaticano I, Dei Filius) afirma que a fé é razoável e que Deus pode ser conhecido pela razão natural; Kierkegaard é frequentemente lido como fideísta, leitura contestada por estudiosos (C. Stephen Evans).' },
  objecoes: [{ objecao: 'A suspensão do ético justificaria qualquer fanático que diga ouvir Deus.', tag: 'debate', resposta: 'Kierkegaard insiste que Abraão age em temor, sem certeza que lhe dê conforto, e que o cavaleiro da fé não pode recrutar seguidores. A objeção mostra o risco do texto; o Catecismo lembra que a fé não contradiz a lei moral.' }],
  aplicacao: '<p>Em que estádio você vive a maior parte do tempo? Descreva com honestidade no Caderno.</p>',
  fonte: { obra: 'Kierkegaard, Temor e Tremor, "Problema I"', link: null, orientacao: '<p>Leia o "Problema I": há uma suspensão teleológica do ético? Reconstrua o dilema de Johannes de Silentio.</p>' },
  perguntas: [
    { p: 'Quais os três estádios?', r: 'Estético, ético e religioso.' },
    { p: 'O que é a suspensão teleológica do ético?', r: 'A ideia de um dever absoluto para com Deus que transcende o ético universal.' },
    { p: 'O que é o paradoxo absoluto?', r: 'Deus no tempo, isto é, Cristo.' },
  ],
  exercicios: [
    mc('Temor e Tremor é assinado por:', ['Johannes Climacus', 'Johannes de Silentio', 'Anti-Climacus', 'Victor Eremita'], 1, 'Pseudônimo.'),
    mc('O juiz Wilhelm representa o estádio:', ['Estético', 'Ético', 'Religioso', 'Demoníaco'], 1, 'Ou–Ou, parte II.'),
    mc('A Doença para a Morte trata do:', ['Pecado original', 'Desespero', 'Tempo', 'Amor'], 1, '1849.'),
    mc('"A subjetividade é a verdade" está no:', ['Ou–Ou', 'Pós-escrito', 'Temor e Tremor', 'Diário do Sedutor'], 1, '1846.'),
    disc('Kierkegaard é fideísta? Compare com a constituição Dei Filius do Vaticano I.', ['Expõe Kierkegaard', 'Expõe Dei Filius', 'Considera leituras não fideístas', 'Conclusão justificada'])],
  resumo: ['O indivíduo contra o sistema.', 'Três estádios.', 'Abraão e a suspensão do ético.', 'Subjetividade e paradoxo.', 'Desespero e fé.'],
  referencias: [{ texto: 'Kierkegaard, Temor e Tremor (1843).' }, { texto: 'Kierkegaard, A Doença para a Morte (1849).' }, { texto: 'C. Stephen Evans, Faith Beyond Reason (1998).' }],
  revisao: [['Três estádios', 'Estético, ético, religioso.'], ['Temor e Tremor', 'Abraão; Johannes de Silentio.'], ['Desespero', 'A Doença para a Morte.']],
  avancado: {
    texto: `<h3>Pseudonímia e comunicação indireta</h3>
<p>Kierkegaard pediu, no "Primeira e última explicação" (anexo ao Pós-escrito), que as frases dos pseudônimos não lhe fossem atribuídas ${tag('fato')}. A "comunicação indireta" visa levar o leitor a decidir por si ${tag('interpretacao')}.</p>
<h3>Influência</h3>
<p>Kierkegaard foi redescoberto no século XX: teologia dialética (Barth), existencialismo (Heidegger, Jaspers, Sartre), e pensadores católicos ${tag('fato')}.</p>
<h3>Obras assinadas</h3>
<p>Os Discursos edificantes e As Obras do Amor (1847), assinados, mostram uma ética cristã do amor ao próximo que equilibra a leitura "individualista" ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Kierkegaard, As Obras do Amor (1847).' }, { texto: 'Kierkegaard, Pós-escrito Final Não Científico (1846), "Primeira e última explicação".' }],
    exercicios: [
      mc('As Obras do Amor são:', ['Pseudônimas', 'Assinadas por Kierkegaard', 'De Hegel', 'Póstumas'], 1, '1847.'),
      mc('Kierkegaard pediu que as frases dos pseudônimos:', ['Fossem atribuídas a ele', 'Não fossem atribuídas a ele', 'Fossem queimadas', 'Fossem traduzidas'], 1, 'Primeira e última explicação.'),
      mc('A teologia dialética que recebeu Kierkegaard é associada a:', ['Barth', 'Tomás', 'Newman', 'Rahner'], 0, 'Século XX.'),
      disc('Como As Obras do Amor modificam a leitura "individualista" de Kierkegaard?', ['Expõe a obra', 'Compara com Temor e Tremor', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm10-4', titulo: 'Nietzsche: genealogia e crítica',
  aprendera: ['A "morte de Deus" e o niilismo', 'A Genealogia da Moral: moral dos senhores e dos escravos', 'Vontade de poder, além-do-homem e eterno retorno', 'Respostas cristãs a Nietzsche'],
  explicacao: `
<h3>"Deus está morto"</h3>
<p>Friedrich Nietzsche (1844–1900), em A Gaia Ciência (1882, §125), põe na boca de um "homem louco": "Deus está morto! E fomos nós que o matamos" ${tag('fato')}. Não é argumento metafísico, mas diagnóstico cultural: a crença perdeu o poder de orientar a vida europeia, e suas consequências (o fim dos valores fundados nela) ainda não foram percebidas ${tag('interpretacao')}.</p>
<h3>Niilismo</h3>
<p>Quando os valores supremos se desvalorizam, sobrevém o niilismo. Nietzsche quer atravessá-lo por uma "transvaloração de todos os valores" ${tag('fato')}.</p>
<h3>Genealogia da Moral (1887)</h3>
<p>A moral nobre chama "bom" ao forte e afirmativo, e "ruim" ao fraco. A moral dos escravos nasce do <em>ressentimento</em>: chama "mau" ao forte e "bom" ao humilde e manso. O cristianismo, para Nietzsche, é a vitória dessa "revolta dos escravos na moral" ${tag('fato')}. O método genealógico investiga a origem histórica e psicológica dos valores ${tag('interpretacao')}.</p>
<h3>Conceitos centrais</h3>
<ul>
<li><strong>Vontade de poder</strong>: impulso de crescimento e superação presente na vida.</li>
<li><strong>Além-do-homem</strong> (<em>Übermensch</em>): o que cria valores após a morte de Deus (Assim Falou Zaratustra, 1883–1885).</li>
<li><strong>Eterno retorno</strong>: querer que cada instante se repita infinitamente — teste de afirmação da vida ${tag('fato')}.</li>
</ul>
<h3>Cuidado com as fontes</h3>
<p>A Vontade de Poder foi uma compilação póstuma de fragmentos organizada pela irmã, Elisabeth Förster-Nietzsche, que manipulou textos e aproximou o irmão do antissemitismo, que ele repudiava ${tag('fato')}. A edição crítica é a de Colli e Montinari ${tag('fato')}.</p>`,
  vocabulario: [['Morte de Deus', 'Perda cultural da fé como fundamento.'], ['Niilismo', 'Desvalorização dos valores supremos.'], ['Ressentimento', 'Vingança imaginária dos fracos.'], ['Vontade de poder', 'Impulso de superação.'], ['Transvaloração', 'Inversão dos valores.']],
  exemplos: '<p>Quando alguém diz "sou humilde" com desprezo secreto por quem tem sucesso, Nietzsche falaria em ressentimento. Max Scheler responderá distinguindo o ressentimento do amor cristão autêntico.</p>',
  contexto: `<p>Nietzsche foi professor de filologia clássica em Basileia aos 24 anos; sofreu colapso mental em Turim em janeiro de 1889 ${tag('fato')}.</p>`,
  argumento: { titulo: 'A crítica genealógica (reconstruída)', tag: 'argumento',
    premissas: ['Valores morais têm origem histórica e psicológica.', 'A moral cristã nasceu do ressentimento dos fracos contra os fortes.', 'O que nasce do ressentimento é expressão de vida declinante.'],
    conclusao: 'Logo, a moral cristã deve ser transvalorada.',
    nota: 'A passagem da origem à validade é a "falácia genética": mostrar a origem de uma crença não decide se é verdadeira. Defensores de Nietzsche dizem que ele avalia valores pelo que fazem com a vida, não pela verdade.' },
  objecoes: [{ objecao: 'Max Scheler (O Ressentimento na Construção das Morais, 1912): o amor cristão não nasce do ressentimento, mas da abundância; ressentimento há no humanitarismo moderno.', tag: 'argumento', resposta: 'Scheler aceita o diagnóstico do ressentimento, mas nega que se aplique ao ágape. Nietzsche poderia replicar com exemplos históricos; o debate é sobre o que é o cristianismo autêntico.' }],
  aplicacao: '<p>Escolha um valor que você defende e faça uma "genealogia" honesta: de onde vem? Isso afeta sua validade?</p>',
  fonte: { obra: 'Nietzsche, A Gaia Ciência §125; Genealogia da Moral, primeira dissertação', link: null, orientacao: '<p>Leia o §125 e a primeira dissertação da Genealogia. Reconstrua a distinção "bom e ruim" × "bom e mau".</p>' },
  perguntas: [
    { p: 'O que significa "Deus está morto"?', r: 'Diagnóstico cultural da perda da fé como fundamento.' },
    { p: 'O que é o ressentimento?', r: 'Vingança imaginária dos fracos que inverte os valores.' },
    { p: 'Por que cuidado com A Vontade de Poder?', r: 'Foi compilação póstuma manipulada pela irmã.' },
  ],
  exercicios: [
    mc('"Deus está morto" aparece em:', ['Zaratustra, prólogo apenas', 'A Gaia Ciência §125', 'Genealogia', 'Ecce Homo'], 1, '1882.'),
    mc('A edição crítica de Nietzsche é de:', ['Förster-Nietzsche', 'Colli e Montinari', 'Heidegger', 'Kaufmann'], 1, 'Kritische Gesamtausgabe.'),
    mc('Scheler respondeu a Nietzsche sobre o:', ['Eterno retorno', 'Ressentimento', 'Além-do-homem', 'Niilismo'], 1, '1912.'),
    mc('Mostrar a origem de uma crença e concluir sua falsidade é:', ['Falácia genética', 'Ad hominem circunstancial apenas', 'Petição de princípio', 'Dedução válida'], 0, 'Módulo 4.'),
    disc('A genealogia de Nietzsche refuta a moral cristã? Avalie com a falácia genética e com Scheler.', ['Reconstrói Nietzsche', 'Aplica a falácia genética', 'Usa Scheler', 'Conclusão justificada'])],
  resumo: ['Morte de Deus e niilismo.', 'Moral dos senhores e dos escravos.', 'Vontade de poder, além-do-homem, eterno retorno.', 'Cuidado com as edições.', 'Respostas: Scheler, falácia genética.'],
  referencias: [{ texto: 'Nietzsche, A Gaia Ciência (1882).' }, { texto: 'Nietzsche, Genealogia da Moral (1887).' }, { texto: 'Max Scheler, Da Reviravolta dos Valores (inclui O Ressentimento, 1912).' }],
  revisao: [['Gaia Ciência §125', 'O homem louco e a morte de Deus.'], ['Ressentimento', 'Genealogia, primeira dissertação.'], ['Colli–Montinari', 'Edição crítica.']],
  avancado: {
    texto: `<h3>Nietzsche e a verdade</h3>
<p>Em "Sobre verdade e mentira no sentido extramoral" (1873), a verdade é "um exército móvel de metáforas" ${tag('fato')}. Mas Nietzsche também elogia a probidade intelectual. Intérpretes debatem se ele é relativista ou perspectivista sofisticado ${tag('debate')}.</p>
<h3>Leituras do século XX</h3>
<p>Heidegger leu Nietzsche como o "último metafísico" (Nietzsche, 1961); Deleuze, como pensador da diferença; Walter Kaufmann o reabilitou no mundo anglófono após o uso nazista ${tag('fato')}.</p>
<h3>O cristianismo segundo Nietzsche</h3>
<p>Em O Anticristo (1888), Nietzsche distingue Jesus ("o único cristão morreu na cruz") e Paulo, a quem atribui a invenção da Igreja ${tag('fato')}. Bento XVI, na Deus caritas est (§3), cita a objeção de que o cristianismo envenenou o eros e responde-lhe ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Nietzsche, O Anticristo (1888).' }, { texto: 'Bento XVI, Deus caritas est (2005), §§3–5.' }],
    exercicios: [
      mc('"Um exército móvel de metáforas" define a verdade em:', ['Sobre verdade e mentira (1873)', 'Genealogia', 'Zaratustra', 'Anticristo'], 0, 'Texto de juventude.'),
      mc('Deus caritas est responde a Nietzsche sobre:', ['O eterno retorno', 'O eros envenenado', 'A vontade de poder', 'A morte de Deus'], 1, '§3.'),
      mc('Quem leu Nietzsche como "último metafísico"?', ['Kaufmann', 'Heidegger', 'Deleuze', 'Scheler'], 1, 'Nietzsche (1961).'),
      disc('Exponha a objeção de Nietzsche ao eros cristão e a resposta da Deus caritas est. Avalie.', ['Objeção fiel', 'Resposta fiel', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm10-5', titulo: 'Fenomenologia',
  aprendera: ['O projeto de Husserl: "voltar às coisas mesmas"', 'Intencionalidade e redução fenomenológica', 'Heidegger: a pergunta pelo ser e o Dasein', 'Fenomenologia e realismo: Edith Stein e Scheler'],
  explicacao: `
<h3>Às coisas mesmas</h3>
<p>Edmund Husserl (1859–1938), nas Investigações Lógicas (1900–1901), combateu o psicologismo (reduzir a lógica a leis psicológicas) e propôs descrever com rigor o que aparece à consciência — "voltar às coisas mesmas" ${tag('fato')}.</p>
<h3>Intencionalidade</h3>
<p>Retomando Brentano (e, por ele, os escolásticos), Husserl afirma que toda consciência é consciência <em>de</em> algo ${tag('fato')}. Perceber, lembrar, imaginar e julgar são modos diferentes de visar objetos.</p>
<h3>Redução (epoché)</h3>
<p>Em Ideias I (1913), Husserl suspende a "atitude natural" (a crença na existência do mundo) para descrever os fenômenos como dados à consciência. A virada "transcendental" afastou muitos discípulos, que viram nela um retorno ao idealismo ${tag('debate')}.</p>
<h3>Heidegger</h3>
<p>Martin Heidegger (1889–1976), em Ser e Tempo (1927), retoma a "pergunta pelo sentido do ser", que diz esquecida desde os gregos ${tag('fato')}. O ente que pergunta pelo ser é o <em>Dasein</em> (o homem), caracterizado como "ser-no-mundo", lançado, preocupado, finito e "ser-para-a-morte". A existência pode ser autêntica ou dispersa no "a gente" (<em>das Man</em>) ${tag('fato')}. Sua adesão ao nazismo (reitorado de 1933) e os Cadernos Negros, publicados a partir de 2014, são objeto de grave debate ${tag('fato')}.</p>
<h3>Fenomenologia realista</h3>
<p>Discípulos de Göttingen (Adolf Reinach, Edith Stein, Dietrich von Hildebrand) e Max Scheler aplicaram a fenomenologia à essência das coisas, dos valores e da pessoa, com orientação realista ${tag('interpretacao')}. Edith Stein (1891–1942), assistente de Husserl, converteu-se ao catolicismo, comparou Husserl e Tomás e morreu em Auschwitz; é santa e copadroeira da Europa ${tag('fato')}. Karol Wojtyła (João Paulo II) escreveu sua tese de habilitação sobre Scheler ${tag('fato')}.</p>`,
  vocabulario: [['Intencionalidade', 'Consciência sempre dirigida a algo.'], ['Epoché', 'Suspensão da crença na existência do mundo.'], ['Psicologismo', 'Redução da lógica à psicologia.'], ['Dasein', 'O homem como ente que compreende o ser.'], ['Ser-para-a-morte', 'Existência ante a própria finitude.']],
  exemplos: '<p>Descreva fenomenologicamente uma xícara: você só vê um lado, mas visa a xícara inteira; ao girá-la, os lados aparecem em perfis sucessivos. É a análise husserliana da percepção.</p>',
  contexto: `<p>Heidegger dedicou Ser e Tempo a Husserl, mas a dedicatória foi retirada de uma edição de 1941 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Contra o psicologismo (Investigações Lógicas, Prolegômenos, reconstruído)', tag: 'argumento',
    premissas: ['Leis psicológicas são empíricas e aproximadas.', 'Leis lógicas são exatas e necessárias.', 'O necessário não pode ser fundado no empírico.'],
    conclusao: 'Logo, a lógica não se reduz à psicologia.',
    nota: 'O argumento aproxima Husserl de Frege e da tradição platônica e aristotélica sobre verdades necessárias.' },
  objecoes: [{ objecao: 'A redução transcendental de Ideias I reduz o mundo a correlato da consciência: idealismo.', tag: 'debate', resposta: 'Husserl negava ser idealista no sentido de Berkeley. Stein e Ingarden discordaram; a questão divide os intérpretes.' }],
  aplicacao: '<p>Faça uma descrição fenomenológica de uma experiência (ouvir música, sentir culpa) sem explicar causas, apenas descrevendo o que aparece.</p>',
  fonte: { obra: 'Husserl, Investigações Lógicas, Prolegômenos; Heidegger, Ser e Tempo, §§1–4', link: null, orientacao: '<p>Leia os §§1–4 de Ser e Tempo. Explique por que Heidegger diz que a pergunta pelo ser foi esquecida.</p>' },
  perguntas: [
    { p: 'O que é intencionalidade?', r: 'A consciência é sempre consciência de algo.' },
    { p: 'O que é o Dasein?', r: 'O homem como ente que compreende o ser.' },
    { p: 'Quem foi Edith Stein?', r: 'Fenomenóloga, assistente de Husserl, convertida, carmelita, morta em Auschwitz, santa.' },
  ],
  exercicios: [
    mc('As Investigações Lógicas combatem o:', ['Realismo', 'Psicologismo', 'Tomismo', 'Positivismo jurídico'], 1, '1900–1901.'),
    mc('Ser e Tempo é de:', ['1913', '1927', '1943', '1960'], 1, 'Heidegger.'),
    mc('Husserl tomou a noção de intencionalidade de:', ['Kant', 'Brentano', 'Hegel', 'Dilthey'], 1, 'Que a remetia aos escolásticos.'),
    mc('A tese de habilitação de Karol Wojtyła foi sobre:', ['Husserl', 'Scheler', 'Heidegger', 'Stein'], 1, 'Ética de valores.'),
    disc('A fenomenologia é compatível com o realismo tomista? Use Edith Stein.', ['Expõe a fenomenologia', 'Expõe Stein', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Às coisas mesmas.', 'Intencionalidade.', 'Epoché e a virada transcendental.', 'Heidegger e o Dasein.', 'Fenomenologia realista: Stein, Scheler, Wojtyła.'],
  referencias: [{ texto: 'Husserl, Investigações Lógicas (1900–1901).' }, { texto: 'Heidegger, Ser e Tempo (1927).' }, { texto: 'Edith Stein, Ser Finito e Ser Eterno (1950, póstumo).' }],
  revisao: [['Intencionalidade', 'Toda consciência é consciência de algo.'], ['Dasein', 'Ser e Tempo.'], ['Edith Stein', 'Fenomenologia e tomismo.']],
  avancado: {
    texto: `<h3>Stein: Husserl e Tomás</h3>
<p>No ensaio "A fenomenologia de Husserl e a filosofia de Santo Tomás" (1929), Stein compara: ambos buscam a filosofia como ciência rigorosa; diferem no ponto de partida (consciência × ser) e no papel da fé ${tag('fato')}.</p>
<h3>A "virada" de Heidegger</h3>
<p>Depois de Ser e Tempo, Heidegger fala da história do ser, da técnica como "armação" (<em>Gestell</em>) e da linguagem como "casa do ser" (Carta sobre o Humanismo, 1946) ${tag('fato')}.</p>
<h3>Fenomenologia e teologia</h3>
<p>Na França, a "virada teológica" da fenomenologia (Levinas, Jean-Luc Marion, Michel Henry) foi criticada por Dominique Janicaud (1991) ${tag('fato')}. Marion (Deus sem o Ser, 1982) critica a "ontoteologia" ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Edith Stein, "A fenomenologia de Husserl e a filosofia de Santo Tomás" (1929).' }, { texto: 'Heidegger, Carta sobre o Humanismo (1946).' }],
    exercicios: [
      mc('"A linguagem é a casa do ser" está em:', ['Ser e Tempo', 'Carta sobre o Humanismo', 'Que é Metafísica?', 'Introdução à Metafísica'], 1, '1946.'),
      mc('A crítica à "virada teológica" da fenomenologia francesa é de:', ['Marion', 'Janicaud', 'Levinas', 'Henry'], 1, '1991.'),
      mc('Deus sem o Ser é de:', ['Marion', 'Levinas', 'Ricoeur', 'Stein'], 0, '1982.'),
      disc('Compare o ponto de partida de Husserl e de Tomás segundo o ensaio de Stein (1929).', ['Expõe Husserl', 'Expõe Tomás', 'Usa Stein', 'Conclusão'])],
  },
}),

aula({
  id: 'm10-6', titulo: 'Existencialismo',
  aprendera: ['"A existência precede a essência" (Sartre)', 'Liberdade, angústia e má-fé', 'O absurdo em Camus', 'O existencialismo cristão: Marcel'],
  prereq: ['Aulas 3 e 5 deste módulo'],
  explicacao: `
<h3>A fórmula</h3>
<p>Na conferência O Existencialismo é um Humanismo (1945, publicada em 1946), Jean-Paul Sartre (1905–1980) define: "a existência precede a essência". Não há natureza humana porque não há Deus para concebê-la; o homem existe primeiro e depois se define pelo que faz ${tag('fato')}.</p>
<h3>Liberdade e angústia</h3>
<p>"O homem está condenado a ser livre": não escolheu nascer, mas é responsável por tudo o que faz ${tag('fato')}. A angústia é a consciência dessa responsabilidade. Ao escolher, escolho uma imagem do homem para todos ${tag('argumento')}.</p>
<h3>Má-fé</h3>
<p>Em O Ser e o Nada (1943), a má-fé é mentir a si mesmo sobre a própria liberdade — como o garçom que representa ser garçom como se fosse uma coisa ${tag('fato')}.</p>
<h3>Camus e o absurdo</h3>
<p>Albert Camus (1913–1960), que recusava o rótulo "existencialista", abre O Mito de Sísifo (1942): "Só existe um problema filosófico realmente sério: o suicídio" ${tag('fato')}. O absurdo nasce do confronto entre o desejo humano de sentido e o silêncio do mundo. A resposta é a revolta lúcida: "é preciso imaginar Sísifo feliz" ${tag('fato')}.</p>
<h3>Existencialismo cristão</h3>
<p>Gabriel Marcel (1889–1973), católico convertido, distinguiu "problema" (objetivável) e "mistério" (em que estou implicado: o amor, a morte, o ser) e falou de fidelidade criadora, esperança e presença ${tag('fato')}. Marcel recusou depois o rótulo "existencialista cristão" ${tag('fato')}.</p>
<h3>Pio XII</h3>
<p>A encíclica Humani generis (1950) criticou o existencialismo ateu e o que despreza as essências imutáveis ${tag('doutrina')}.</p>`,
  vocabulario: [['Existência precede a essência', 'O homem se define pelo que faz.'], ['Má-fé', 'Fuga da própria liberdade.'], ['Absurdo', 'Desejo de sentido × silêncio do mundo.'], ['Mistério (Marcel)', 'Realidade em que estou implicado.'], ['Engajamento', 'Compromisso livre e responsável.']],
  exemplos: '<p>Um estudante de Sartre pediu conselho: ficar com a mãe ou lutar na Resistência? Sartre respondeu: "você é livre, escolha, isto é, invente" — exemplo da conferência de 1945.</p>',
  contexto: `<p>O existencialismo floresceu em Paris no pós-guerra, entre a Ocupação e a Guerra Fria ${tag('fato')}.</p>`,
  argumento: { titulo: 'Sem Deus, não há natureza humana (Sartre, reconstruído)', tag: 'argumento',
    premissas: ['Uma natureza humana suporia um criador que concebe o homem como o artesão concebe o corta-papel.', 'Deus não existe.', 'Logo, não há natureza humana.'],
    conclusao: 'Portanto, o homem é o que ele se faz.',
    nota: 'A premissa 1 é aceita por muitos teístas: a natureza remete a um autor. A premissa 2 não é demonstrada na conferência. Aristotélicos dirão que naturezas não exigem um artesão para serem conhecidas.' },
  objecoes: [{ objecao: 'Se não há natureza, como dizer que a má-fé é ruim ou que escolho "para todos"?', tag: 'argumento', resposta: 'Sartre apela à autenticidade e à universalidade da condição humana — o que parece reintroduzir algo como natureza. Críticos (Heidegger, Carta sobre o Humanismo) disseram que a fórmula apenas inverte a metafísica tradicional.' }],
  aplicacao: '<p>Identifique no Caderno uma situação de "má-fé" em sua vida: onde você se trata como coisa para fugir de uma escolha?</p>',
  fonte: { obra: 'Sartre, O Existencialismo é um Humanismo (1946); Camus, O Mito de Sísifo, cap. 1 e final', link: null, orientacao: '<p>Leia a conferência de Sartre. Reconstrua o argumento e as objeções que ele mesmo responde.</p>' },
  perguntas: [
    { p: 'O que significa "a existência precede a essência"?', r: 'O homem existe antes de se definir; define-se pelo que faz.' },
    { p: 'O que é a má-fé?', r: 'Mentir a si mesmo sobre a própria liberdade.' },
    { p: 'Distinção de Marcel entre problema e mistério?', r: 'Problema é objetivável; mistério me implica.' },
  ],
  exercicios: [
    mc('O Ser e o Nada é de:', ['1938', '1943', '1946', '1960'], 1, 'Sartre.'),
    mc('"Imaginar Sísifo feliz" é de:', ['Sartre', 'Camus', 'Marcel', 'Beauvoir'], 1, 'O Mito de Sísifo.'),
    mc('Camus aceitava o rótulo de existencialista?', ['Sim', 'Não', 'Só no fim', 'Só para O Estrangeiro'], 1, 'Recusava.'),
    mc('A Humani generis criticou o existencialismo em:', ['1907', '1950', '1965', '1998'], 1, 'Pio XII.'),
    disc('O argumento de Sartre contra a natureza humana é válido? É sólido? Avalie as premissas.', ['Reconstrói', 'Avalia validade', 'Avalia premissas', 'Conclusão justificada'])],
  resumo: ['Existência precede a essência.', 'Liberdade e angústia.', 'Má-fé.', 'Camus e o absurdo.', 'Marcel: mistério e esperança.'],
  referencias: [{ texto: 'Sartre, O Existencialismo é um Humanismo (1946).' }, { texto: 'Camus, O Mito de Sísifo (1942).' }, { texto: 'Gabriel Marcel, O Mistério do Ser (1951).' }],
  revisao: [['Existência precede a essência', 'Sartre, 1945.'], ['Absurdo', 'Camus, O Mito de Sísifo.'], ['Problema × mistério', 'Marcel.']],
  avancado: {
    texto: `<h3>Beauvoir</h3>
<p>Simone de Beauvoir (O Segundo Sexo, 1949): "Ninguém nasce mulher: torna-se mulher" — aplicação da tese existencialista à condição feminina ${tag('fato')}.</p>
<h3>Sartre e o marxismo</h3>
<p>Na Crítica da Razão Dialética (1960), Sartre tentou conciliar existencialismo e marxismo, chamando o marxismo de "filosofia insuperável de nosso tempo" ${tag('fato')}. Camus rompeu com Sartre após O Homem Revoltado (1951), que criticava as justificativas revolucionárias do assassinato ${tag('fato')}.</p>
<h3>Existencialismo e tomismo</h3>
<p>Maritain (Breve Tratado da Existência e do Existente, 1947) e Gilson (O Ser e a Essência, 1948) argumentaram que o tomismo é a verdadeira filosofia da existência, por centrar-se no ato de ser ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, Breve Tratado da Existência e do Existente (1947).' }, { texto: 'Albert Camus, O Homem Revoltado (1951).' }],
    exercicios: [
      mc('"Ninguém nasce mulher: torna-se mulher" é de:', ['Sartre', 'Beauvoir', 'Camus', 'Marcel'], 1, '1949.'),
      mc('A ruptura Sartre–Camus foi após:', ['O Estrangeiro', 'O Homem Revoltado', 'A Peste', 'O Mito de Sísifo'], 1, '1951–1952.'),
      mc('Quem defendeu o tomismo como filosofia da existência em 1947?', ['Maritain', 'Marcel', 'Mounier', 'Sertillanges'], 0, 'Breve Tratado.'),
      disc('O tomismo é "existencialismo autêntico"? Avalie a tese de Maritain e Gilson.', ['Expõe a tese', 'Usa o esse', 'Compara com Sartre', 'Conclusão justificada'])],
  },
}),
];
