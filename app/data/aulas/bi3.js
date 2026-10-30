// Biologia III — sínteses teóricas e debates (etapas 6 e 7 do percurso de Biologia).
// Teoria celular, mecanicismo e vitalismo; síntese moderna e biologia molecular; evolução e criação;
// singularidade humana e bioética. Distingue explicação biológica, filosofia da natureza e doutrina.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'bi3-1', titulo: 'Teoria celular, mecanicismo e vitalismo', duracao: '150 min',
  aprendera: ['Enunciar a teoria celular e seus autores', 'Distinguir mecanicismo e vitalismo', 'Explicar o significado da síntese da ureia', 'Situar a filosofia da natureza aristotélico-tomista no debate'],
  prereq: ['Biologia II (módulo BI2)'],
  explicacao: `
<h3>O problema</h3>
<p>Os seres vivos são máquinas complicadas ou têm algo que a física e a química não explicam? E de que unidade básica são feitos?</p>
<h3>Teoria celular</h3>
<p>Matthias Schleiden (1838) para as plantas e Theodor Schwann (1839) para os animais sustentaram que todos os seres vivos são formados por células ${tag('fato')}. Rudolf Virchow acrescentou, em 1855, que toda célula provém de outra célula (<em>omnis cellula e cellula</em>) ${tag('fato')}.</p>
<h3>Mecanicismo</h3>
<p>Descartes descreveu os animais como máquinas e o corpo humano como mecanismo, separando-o da alma pensante ${tag('fato')}. O mecanicismo inspirou a fisiologia experimental ${tag('interpretacao')}.</p>
<h3>Vitalismo</h3>
<p>Vitalistas sustentaram que os seres vivos têm uma "força vital" irredutível à química; Hans Driesch, no início do século XX, defendeu um princípio vital a partir de experimentos com embriões de ouriço-do-mar ${tag('fato')}. A síntese da ureia por Friedrich Wöhler (1828), a partir de substâncias inorgânicas, enfraqueceu a ideia de que compostos orgânicos exigiam força vital ${tag('fato')}.</p>
<h3>Uma terceira via</h3>
<p>A filosofia da natureza aristotélico-tomista entende o ser vivo como unidade de matéria e forma: não há uma "força" acrescentada à química, mas a vida é um modo de ser em que o todo organiza as partes para fins próprios ${tag('interpretacao')}. Essa leitura é compatível com a explicação química e física dos mecanismos, sem reduzir o organismo a eles ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Teoria celular', 'Todos os seres vivos são formados por células, e toda célula vem de outra.'],
    ['Mecanicismo', 'Explicação dos seres vivos como máquinas.'],
    ['Vitalismo', 'Tese de uma força vital irredutível à física e à química.'],
    ['Síntese da ureia', 'Produção de composto orgânico a partir de inorgânicos (Wöhler, 1828).'],
    ['Hilemorfismo', 'Teoria da unidade de matéria e forma (Aristóteles, Santo Tomás).'],
  ],
  exemplos: `<p><strong>O coração em três leituras:</strong> mecanicista — uma bomba de músculo e válvulas; vitalista — um órgão animado por força vital; aristotélico-tomista — uma parte organizada pelo organismo vivo para a função de circular o sangue, cujo mecanismo a fisiologia descreve. A terceira inclui o mecanismo e acrescenta a perspectiva do todo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria celular é um dos pilares da biologia, ao lado da evolução e da genética. <strong>No Brasil:</strong> a microscopia e a biologia celular se desenvolveram em instituições como o Instituto Oswaldo Cruz, fundado em 1900 como Instituto Soroterápico Federal ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a síntese da ureia não refutou toda a ideia de vida como algo próprio', tag: 'argumento',
    premissas: ['A síntese da ureia mostrou que uma molécula orgânica pode ser produzida sem ser vivo.', 'Isso refuta a tese de que moléculas orgânicas exigem força vital.', 'Não mostra que um organismo seja apenas uma soma de moléculas sem organização própria.'],
    conclusao: 'Logo, a síntese da ureia refutou o vitalismo químico, mas não decide a questão filosófica sobre a unidade do ser vivo.',
    nota: 'Distingue o que um experimento refuta e o que ele deixa em aberto.',
  },
  objecoes: [
    { objecao: 'Se tudo no organismo é química, falar de "forma" ou "finalidade" é superstição.', tag: 'debate',
      resposta: 'A biologia usa constantemente noções funcionais ("para que serve") e de organização. A questão é como interpretá-las: como abreviações de mecanismos ou como traços reais do ser vivo. É um debate filosófico legítimo, não superstição.' },
  ],
  aplicacao: `<p>Escolha um órgão (pulmão, olho, folha) e descreva-o de três maneiras — mecanicista, vitalista e aristotélico-tomista —, indicando o que cada uma explica e o que deixa de fora.</p>`,
  fonte: {
    obra: 'Rudolf Virchow, A patologia celular (1858), lição I; René Descartes, Tratado do homem (publicado em 1662)', link: null,
    orientacao: `<p>Em Virchow, localize o princípio omnis cellula e cellula. Em Descartes, a comparação do corpo com uma máquina. Compare as duas perspectivas.</p>`,
  },
  perguntas: [
    { p: 'Quem formulou a teoria celular?', r: 'Schleiden (1838) e Schwann (1839), com o acréscimo de Virchow (1855).' },
    { p: 'O que mostrou a síntese da ureia?', r: 'Que um composto orgânico pode ser produzido a partir de substâncias inorgânicas.' },
    { p: 'Como a filosofia tomista entende o ser vivo?', r: 'Como unidade de matéria e forma, em que o todo organiza as partes.' },
  ],
  exercicios: [
    mc('"Omnis cellula e cellula" é de:', ['Schwann', 'Virchow', 'Hooke', 'Pasteur'], 1, '1855.'),
    mc('A síntese da ureia é de:', ['1828', '1838', '1855', '1900'], 0, 'Wöhler.'),
    mc('A teoria celular para os animais é de:', ['Schleiden', 'Schwann', 'Driesch', 'Descartes'], 1, '1839.'),
    mc('Descartes descreveu os animais como:', ['Almas puras', 'Máquinas', 'Plantas', 'Deuses'], 1, 'Mecanicismo.'),
    mc('O Instituto Oswaldo Cruz foi fundado em:', ['1808', '1900', '1934', '1953'], 1, 'Instituto Soroterápico Federal.'),
    disc('Descreva um órgão de três maneiras (mecanicista, vitalista, aristotélico-tomista) e indique o que cada uma explica e deixa de fora.', ['Três descrições', 'O que explicam', 'O que deixam de fora', 'Conclusão']),
  ],
  resumo: ['Teoria celular: Schleiden (1838), Schwann (1839), Virchow (1855).', 'Mecanicismo (Descartes).', 'Vitalismo (Driesch); ureia (Wöhler, 1828).', 'Hilemorfismo como terceira via.', 'Instituto Oswaldo Cruz (1900).'],
  referencias: [
    { texto: 'Rudolf Virchow, A patologia celular (1858).' },
    { texto: 'René Descartes, Tratado do homem (1662).' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
    { texto: 'Étienne Gilson, De Aristóteles a Darwin (e volta) (1971).', livro: 'gilson-darwin' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os textos indicados'],
  revisao: [['Virchow', 'Célula vem de célula.'], ['Wöhler', 'Ureia, 1828.'], ['Hilemorfismo', 'Matéria e forma.']],
  avancado: {
    texto: `<h3>Emergência</h3>
<p>Filósofos da biologia discutem a "emergência": propriedades de um sistema que não aparecem nas partes isoladas, como a vida de uma célula em relação às suas moléculas ${tag('interpretacao')}. Há versões fracas (compatíveis com redução) e fortes (que negam a redução), em debate ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Étienne Gilson, De Aristóteles a Darwin (e volta) (1971).', livro: 'gilson-darwin' }],
    exercicios: [
      mc('Emergência refere-se a propriedades:', ['Das partes isoladas', 'Do sistema que não aparecem nas partes', 'Só químicas', 'Imaginárias'], 1, 'Filosofia da biologia.'),
      mc('O debate sobre emergência forte é:', ['Encerrado', 'Aberto', 'Doutrina', 'Proibido'], 1, 'Discussão filosófica.'),
      mc('Um exemplo de emergência proposto é:', ['A vida da célula', 'O peso de uma pedra', 'A cor do céu', 'A soma de números'], 0, 'Em relação às moléculas.'),
      disc('Compare a ideia de emergência e o hilemorfismo tomista: semelhanças e diferenças.', ['Emergência', 'Hilemorfismo', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'bi3-2', titulo: 'A síntese moderna da evolução e a biologia molecular', duracao: '150 min',
  aprendera: ['Explicar a síntese moderna da evolução', 'Expor a genética de populações em termos simples', 'Explicar o dogma central da biologia molecular', 'Situar debates atuais (epigenética, síntese estendida)'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>No início do século XX, darwinistas e mendelianos pareciam em conflito. Como as duas teorias se uniram, e o que a biologia molecular acrescentou?</p>
<h3>Síntese moderna</h3>
<p>Entre 1918 e os anos 1940, Ronald Fisher, J. B. S. Haldane e Sewall Wright mostraram matematicamente que a herança mendeliana e a seleção natural são compatíveis — a genética de populações ${tag('fato')}. Theodosius Dobzhansky (<em>Genética e a origem das espécies</em>, 1937), Ernst Mayr (1942) e Julian Huxley (<em>Evolução: a síntese moderna</em>, 1942) integraram genética, sistemática e paleontologia ${tag('fato')}.</p>
<h3>Mecanismos</h3>
<p>A evolução das populações resulta de mutação, seleção natural, deriva genética (mudanças ao acaso, fortes em populações pequenas) e fluxo gênico ${tag('fato')}.</p>
<h3>Biologia molecular</h3>
<p>Francis Crick formulou em 1958 o "dogma central": a informação passa do DNA ao RNA e do RNA à proteína ${tag('fato')}. Exceções, como a transcrição reversa dos retrovírus, foram descobertas depois ${tag('fato')}.</p>
<h3>Debates atuais</h3>
<p>A epigenética estuda mudanças na expressão dos genes sem mudança na sequência do DNA ${tag('fato')}. Alguns biólogos propõem uma "síntese estendida" para incorporar epigenética, desenvolvimento e construção de nicho; outros consideram que a síntese moderna já os abrange ${tag('debate')}.</p>`,
  vocabulario: [
    ['Síntese moderna', 'União da seleção natural e da genética (anos 1918–1940).'],
    ['Genética de populações', 'Estudo matemático das frequências de genes nas populações.'],
    ['Deriva genética', 'Mudança ao acaso das frequências de genes.'],
    ['Dogma central', 'Fluxo de informação DNA → RNA → proteína (Crick, 1958).'],
    ['Epigenética', 'Mudanças na expressão dos genes sem mudança na sequência do DNA.'],
  ],
  exemplos: `<p><strong>Deriva genética:</strong> numa ilha colonizada por poucos indivíduos de uma espécie, a frequência de um alelo raro pode aumentar ou sumir por acaso, sem que ele seja vantajoso. É o "efeito fundador", que explica algumas doenças genéticas mais frequentes em populações isoladas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a síntese moderna é o arcabouço da biologia evolutiva do século XX. <strong>No Brasil:</strong> Dobzhansky trabalhou com drosófilas brasileiras e colaborou com geneticistas da Universidade de São Paulo nos anos 1940 e 1950 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Mendel e Darwin pareciam em conflito e não estavam', tag: 'argumento',
    premissas: ['Darwin precisava de variação contínua e gradual; Mendel descrevia fatores discretos.', 'Muitos genes de pequeno efeito, somados, produzem variação contínua.', 'A genética de populações mostrou que a seleção altera gradualmente as frequências desses genes.'],
    conclusao: 'Logo, a herança mendeliana fornece exatamente a variação de que a seleção natural precisa.',
    nota: 'É o núcleo da síntese moderna.',
  },
  objecoes: [
    { objecao: 'A epigenética prova que Lamarck estava certo e Darwin errado.', tag: 'debate',
      resposta: 'Alguns efeitos epigenéticos passam a gerações seguintes, o que lembra Lamarck; mas a maioria é reversível e limitada, e a seleção natural continua sendo mecanismo central. O debate é sobre ampliar a teoria, não substituí-la.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo das sínteses (teoria celular, síntese moderna, biologia molecular) — o que cada uma explicou, autores principais e que problema deixou aberto.</p>`,
  fonte: {
    obra: 'Theodosius Dobzhansky, Genética e a origem das espécies (1937), cap. 1; Francis Crick, "On Protein Synthesis" (1958)', link: null,
    orientacao: `<p>Em Dobzhansky, localize a definição de evolução como mudança na composição genética das populações. Em Crick, o enunciado do dogma central. Use ambos no quadro.</p>`,
  },
  perguntas: [
    { p: 'Quais os mecanismos da evolução das populações?', r: 'Mutação, seleção natural, deriva genética e fluxo gênico.' },
    { p: 'O que é o dogma central?', r: 'O fluxo de informação do DNA ao RNA e do RNA à proteína.' },
    { p: 'O que estuda a epigenética?', r: 'Mudanças na expressão dos genes sem mudança na sequência do DNA.' },
  ],
  exercicios: [
    mc('Genética e a origem das espécies (1937) é de:', ['Mayr', 'Dobzhansky', 'Huxley', 'Fisher'], 1, 'Síntese moderna.'),
    mc('O dogma central foi formulado em:', ['1937', '1953', '1958', '1970'], 2, 'Crick.'),
    mc('Mudança ao acaso das frequências de genes é:', ['Seleção', 'Deriva genética', 'Mutação', 'Fluxo gênico'], 1, 'Forte em populações pequenas.'),
    mc('A transcrição reversa é exceção que ocorre em:', ['Bactérias comuns', 'Retrovírus', 'Plantas', 'Fungos'], 1, 'RNA → DNA.'),
    mc('A proposta de "síntese estendida" é:', ['Consenso', 'Debatida', 'Doutrina', 'Abandonada'], 1, 'Debate atual.'),
    disc('Entregue o quadro das sínteses (teoria celular, síntese moderna, biologia molecular) com o que explicaram, autores e problemas abertos.', ['Três sínteses', 'Explicações corretas', 'Autores', 'Problemas abertos']),
  ],
  resumo: ['Fisher, Haldane, Wright: genética de populações.', 'Dobzhansky (1937), Mayr (1942), Huxley (1942).', 'Mutação, seleção, deriva, fluxo gênico.', 'Dogma central (Crick, 1958); exceções.', 'Epigenética e síntese estendida (debate).'],
  referencias: [
    { texto: 'Theodosius Dobzhansky, Genética e a origem das espécies (1937).' },
    { texto: 'Julian Huxley, Evolução: a síntese moderna (1942).' },
    { texto: 'Francis Crick, "On Protein Synthesis" (1958).' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro das sínteses', 'Ler os textos indicados'],
  revisao: [['Síntese moderna', 'Mendel + Darwin.'], ['Deriva', 'Acaso.'], ['Dogma central', 'DNA → RNA → proteína.']],
  avancado: {
    texto: `<h3>Equilíbrio de Hardy-Weinberg</h3>
<p>Numa população grande, sem seleção, mutação, migração e com cruzamentos ao acaso, as frequências dos alelos se mantêm constantes: p² + 2pq + q² = 1 ${tag('fato')}. O modelo serve de referência para detectar quando a evolução está ocorrendo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' }],
    exercicios: [
      mc('Se q = 0,1 para um alelo recessivo, a frequência de homozigotos recessivos é:', ['0,1', '0,01', '0,2', '0,5'], 1, 'q² = 0,01.'),
      mc('Hardy-Weinberg supõe população:', ['Pequena com seleção', 'Grande sem seleção', 'Isolada com mutação', 'Qualquer'], 1, 'Condições ideais.'),
      mc('Desvios de Hardy-Weinberg indicam:', ['Que a evolução está ocorrendo', 'Erro de cálculo sempre', 'Nada', 'Fim da espécie'], 0, 'Referência.'),
      disc('Calcule as frequências esperadas de genótipos para p = 0,7 e explique o que indicaria um desvio.', ['Cálculo', 'Interpretação', 'Desvio', 'Causas possíveis'])],
  },
}),

aula({
  id: 'bi3-3', titulo: 'Evolução e criação: o que a ciência e a fé afirmam', duracao: '150 min',
  aprendera: ['Expor o ensino da Igreja sobre evolução (Humani Generis, João Paulo II)', 'Distinguir evolução biológica, evolucionismo filosófico e criação', 'Expor a leitura patrística do Gênesis', 'Escrever o ensaio da etapa'],
  prereq: ['Aulas anteriores do módulo', 'Fase teológica: criação e sentidos da Escritura'],
  explicacao: `
<h3>O problema</h3>
<p>A teoria da evolução contradiz a fé na criação? A pergunta exige distinguir três coisas que costumam ser confundidas.</p>
<h3>Três níveis</h3>
<ul>
<li><strong>Evolução biológica</strong>: teoria científica sobre a descendência com modificação e seus mecanismos ${tag('fato')}.</li>
<li><strong>Evolucionismo materialista</strong>: tese filosófica de que a evolução dispensa qualquer causa além da matéria e do acaso ${tag('interpretacao')}.</li>
<li><strong>Criação</strong>: doutrina de que tudo depende de Deus para existir, em qualquer processo pelo qual venha a ser ${tag('doutrina')}.</li>
</ul>
<h3>O ensino da Igreja</h3>
<p>Pio XII, na <em>Humani Generis</em> (1950), admitiu que a origem do corpo humano a partir de matéria viva preexistente fosse objeto de pesquisa, afirmando que as almas são criadas imediatamente por Deus ${tag('doutrina')}. João Paulo II, em mensagem à Pontifícia Academia das Ciências (1996), afirmou que novos conhecimentos levam a reconhecer na teoria da evolução "mais do que uma hipótese" e rejeitou as teorias que consideram o espírito como emergente da matéria ${tag('doutrina')}. O Catecismo ensina que a criação tem sua bondade e perfeição próprias, mas não saiu completamente acabada das mãos do Criador, em estado de caminhada (CIC 302) ${tag('doutrina')}.</p>
<h3>Leitura do Gênesis</h3>
<p>Santo Agostinho, em <em>Sobre o Gênesis ao pé da letra</em>, advertiu contra interpretar a Escritura de modo que contradiga o que se conhece com certeza da natureza, para não expor a fé ao ridículo ${tag('fato')}. A Igreja ensina que os primeiros capítulos do Gênesis exprimem verdades religiosas em linguagem própria (CIC 337, 390) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Evolução biológica', 'Teoria científica da descendência com modificação.'],
    ['Evolucionismo materialista', 'Tese filosófica de que matéria e acaso explicam tudo.'],
    ['Criação', 'Dependência de todas as coisas em relação a Deus para existir.'],
    ['Humani Generis', 'Encíclica de Pio XII (1950).'],
    ['Alma criada imediatamente', 'Doutrina de que cada alma humana é criada diretamente por Deus.'],
  ],
  exemplos: `<p><strong>Distinguindo os níveis:</strong> "as baleias descendem de mamíferos terrestres" é afirmação biológica, avaliada por fósseis e genética. "Tudo resulta só do acaso, sem sentido" é afirmação filosófica, que nenhum fóssil prova. "Deus é a causa do ser de tudo, inclusive dos processos evolutivos" é afirmação teológica e metafísica. Cada uma se avalia com critérios próprios.</p>`,
  contexto: `<p><strong>No mundo:</strong> há debates públicos sobre o ensino da evolução, sobretudo nos Estados Unidos. <strong>No Brasil:</strong> a evolução é conteúdo da Base Nacional Comum Curricular, e o diálogo entre fé e ciência aparece em escolas confessionais e públicas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a evolução biológica não contradiz a criação', tag: 'argumento',
    premissas: ['A criação afirma que tudo depende de Deus para existir, não um modo específico de produção dos seres.', 'A evolução descreve como as espécies se transformam ao longo do tempo por causas naturais.', 'Causas naturais operando no tempo dependem, elas mesmas, de Deus para existir e agir (causas segundas).'],
    conclusao: 'Logo, a evolução biológica, como teoria científica, não contradiz a doutrina da criação; o que a contradiz é o evolucionismo materialista, que é tese filosófica.',
    nota: 'Santo Tomás distingue a causa primeira (Deus) das causas segundas (naturais), que agem verdadeiramente.',
  },
  objecoes: [
    { objecao: 'Se a evolução é verdadeira, o Gênesis é falso.', tag: 'debate',
      resposta: 'A objeção supõe que o Gênesis seja um relato científico. Desde os Padres, a Igreja reconhece gêneros literários próprios; o Gênesis ensina verdades sobre Deus criador, a bondade da criação e a dignidade e queda do homem, não a cronologia biológica (CIC 337, 390; Dei Verbum, 12).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio — o que a teoria da evolução pode e o que não pode afirmar sobre a origem do homem? Use Humani Generis, a mensagem de João Paulo II (1996), o Catecismo e Santo Agostinho, distinguindo os três níveis.</p>`,
  fonte: {
    obra: 'Pio XII, Humani Generis (1950), n. 36–37; São João Paulo II, mensagem à Pontifícia Academia das Ciências (22/10/1996); Santo Agostinho, Sobre o Gênesis ao pé da letra, livro I, cap. 19', link: null,
    orientacao: `<p>Na Humani Generis, localize o que se admite e o que se exige. Na mensagem de 1996, a frase sobre a evolução e a rejeição do materialismo. Em Agostinho, a advertência sobre a interpretação. Use os três no ensaio.</p>`,
  },
  perguntas: [
    { p: 'O que admitiu a Humani Generis sobre a evolução?', r: 'Que a origem do corpo humano a partir de matéria viva preexistente seja objeto de pesquisa, afirmando que as almas são criadas imediatamente por Deus.' },
    { p: 'O que disse João Paulo II em 1996?', r: 'Que a teoria da evolução é "mais do que uma hipótese", rejeitando as teorias que fazem o espírito emergir da matéria.' },
    { p: 'Qual a diferença entre evolução biológica e evolucionismo materialista?', r: 'A primeira é teoria científica; o segundo, tese filosófica.' },
  ],
  exercicios: [
    mc('Humani Generis é de:', ['1891', '1950', '1965', '1996'], 1, 'Pio XII.'),
    mc('A mensagem de João Paulo II sobre a evolução é de:', ['1979', '1992', '1996', '2005'], 2, 'Pontifícia Academia.'),
    mc('Segundo a Igreja, a alma humana é:', ['Produto da evolução', 'Criada imediatamente por Deus', 'Inexistente', 'Herdada dos pais'], 1, 'Humani Generis.'),
    mc('"Tudo resulta só do acaso, sem sentido" é afirmação:', ['Biológica', 'Filosófica', 'Estatística', 'Doutrinal'], 1, 'Evolucionismo materialista.'),
    mc('Santo Agostinho advertiu contra interpretações da Escritura que:', ['Fossem alegóricas', 'Contradissessem o que se conhece com certeza da natureza', 'Fossem morais', 'Citassem os Padres'], 1, 'Gênesis ao pé da letra.'),
    disc('Entregue o ensaio sobre o que a evolução pode e não pode afirmar sobre a origem do homem, com os documentos e os três níveis.', ['Três níveis distinguidos', 'Documentos citados', 'Argumento claro', 'Conclusão proporcional']),
  ],
  resumo: ['Três níveis: evolução, evolucionismo materialista, criação.', 'Humani Generis (1950): corpo pesquisável; alma criada.', 'João Paulo II (1996): "mais do que uma hipótese".', 'CIC 302: criação em caminhada.', 'Agostinho e os gêneros literários.'],
  referencias: [
    { texto: 'Pio XII, Humani Generis (1950).' },
    { texto: 'São João Paulo II, mensagem à Pontifícia Academia das Ciências sobre a evolução (1996).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 282–308, 337, 362–366, 390.', livro: 'cic' },
    { texto: 'Santo Agostinho, Sobre o Gênesis ao pé da letra.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio da etapa', 'Ler os documentos indicados'],
  revisao: [['Humani Generis', '1950.'], ['1996', '"Mais do que uma hipótese".'], ['Três níveis', 'Ciência, filosofia, doutrina.']],
  avancado: {
    texto: `<h3>Desenho inteligente</h3>
<p>O movimento do "desenho inteligente", surgido nos Estados Unidos nos anos 1990, sustenta que certas estruturas biológicas não poderiam ter surgido por evolução ${tag('fato')}. A maioria dos biólogos rejeita a proposta como ciência; filósofos tomistas também a criticam por tratar Deus como uma causa entre outras, no mesmo plano das causas naturais ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Étienne Gilson, De Aristóteles a Darwin (e volta) (1971).', livro: 'gilson-darwin' }],
    exercicios: [
      mc('O desenho inteligente surgiu nos:', ['Anos 1850', 'Anos 1950', 'Anos 1990', 'Anos 2010'], 2, 'Estados Unidos.'),
      mc('Filósofos tomistas criticam o desenho inteligente por:', ['Negar Deus', 'Tratar Deus como causa no plano das causas naturais', 'Defender a evolução', 'Usar estatística'], 1, 'Causa primeira x segundas.'),
      mc('A maioria dos biólogos considera o desenho inteligente:', ['Ciência estabelecida', 'Não científico', 'Doutrina da Igreja', 'Lei'], 1, 'Debate.'),
      disc('Compare desenho inteligente, evolução teísta e a posição tomista sobre causa primeira e causas segundas.', ['Três posições', 'Diferenças', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'bi3-4', titulo: 'A singularidade humana e a bioética: embriões, edição genética e fim da vida', duracao: '150 min',
  aprendera: ['Discutir o que a biologia diz e o que não diz sobre a singularidade humana', 'Expor o ensino da Igreja sobre o embrião', 'Explicar a edição genética e seus dilemas', 'Analisar a legislação brasileira de biossegurança'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Compartilhamos grande parte do DNA com outros animais. Somos apenas mais uma espécie? E até onde podemos intervir na vida humana?</p>
<h3>Semelhança e singularidade</h3>
<p>O genoma humano é muito semelhante ao do chimpanzé — cerca de 98% a 99% em sequências comparáveis, conforme o método de cálculo ${tag('fato')}. A semelhança biológica não decide a questão da singularidade: linguagem simbólica, razão abstrata, moral, arte e religião distinguem o ser humano ${tag('interpretacao')}. A Igreja ensina que o homem, unidade de corpo e alma espiritual, é a única criatura que Deus quis por si mesma (<em>Gaudium et Spes</em>, 24; CIC 356) ${tag('doutrina')}.</p>
<h3>O embrião</h3>
<p>Biologicamente, a fecundação inicia o desenvolvimento de um novo organismo humano com genoma próprio ${tag('fato')}. A Igreja ensina que o ser humano deve ser respeitado e tratado como pessoa desde a concepção (<em>Donum Vitae</em>, 1987; <em>Dignitas Personae</em>, 2008) ${tag('doutrina')}. No Brasil, a Lei de Biossegurança (Lei nº 11.105, de 2005) permitiu o uso de embriões congelados em pesquisas com células-tronco, e o STF considerou a norma constitucional em 2008 ${tag('fato')}.</p>
<h3>Edição genética</h3>
<p>A técnica CRISPR-Cas9, que valeu o Nobel de Química de 2020 a Jennifer Doudna e Emmanuelle Charpentier, permite editar o DNA com precisão ${tag('fato')}. Em 2018, o anúncio de bebês com genoma editado na China provocou condenação internacional ${tag('fato')}. A distinção entre terapia (curar doenças) e "melhoramento", e entre células somáticas e germinativas, é central no debate ${tag('debate')}.</p>
<h3>Fim da vida</h3>
<p>A Igreja rejeita a eutanásia e a obstinação terapêutica e defende os cuidados paliativos (<em>Samaritanus Bonus</em>, 2020; CIC 2276–2279) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Singularidade humana', 'O que distingue o ser humano dos demais seres vivos.'],
    ['Embrião', 'Organismo nas primeiras fases do desenvolvimento.'],
    ['Células-tronco', 'Células capazes de originar diferentes tipos celulares.'],
    ['CRISPR-Cas9', 'Técnica de edição precisa do DNA.'],
    ['Células germinativas', 'Células cuja alteração passa aos descendentes.'],
    ['Cuidados paliativos', 'Cuidado integral de quem tem doença grave, aliviando sofrimento.'],
  ],
  exemplos: `<p><strong>Terapia somática x germinativa:</strong> corrigir com CRISPR as células do sangue de um paciente com anemia falciforme afeta só ele (somática); editar um embrião altera todas as suas células e seus descendentes (germinativa). A segunda levanta problemas de segurança, consentimento das gerações futuras e de tratamento do embrião como objeto.</p>`,
  contexto: `<p><strong>No mundo:</strong> terapias baseadas em CRISPR para doenças do sangue começaram a ser aprovadas em alguns países a partir de 2023 ${tag('fato')}. <strong>No Brasil:</strong> a Lei 11.105/2005 e a Comissão Técnica Nacional de Biossegurança (CTNBio) regulam organismos geneticamente modificados e pesquisas com células-tronco ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'O argumento da continuidade do desenvolvimento', tag: 'argumento',
    premissas: ['Desde a fecundação há um organismo humano novo, com genoma próprio, que se desenvolve de modo contínuo e autônomo.', 'Qualquer linha traçada depois (implantação, coração, nascimento) é marco do desenvolvimento do mesmo organismo, não início de outro.', 'O que é devido ao ser humano não deveria depender de estágio de desenvolvimento.'],
    conclusao: 'Logo, o embrião humano deve ser respeitado como ser humano desde a concepção.',
    nota: 'A primeira premissa é biológica; a terceira, filosófica e moral. Distinguir os planos é exigência do debate.',
  },
  objecoes: [
    { objecao: 'O embrião é só um aglomerado de células, como qualquer tecido.', tag: 'debate',
      resposta: 'Um tecido é parte de um organismo; o embrião é um organismo inteiro em desenvolvimento, que, em condições adequadas, se desenvolve por si mesmo. A diferença é biológica, não só religiosa. O juízo moral sobre o que lhe é devido é o ponto em debate.' },
  ],
  aplicacao: `<p>Analise um caso de bioética (pesquisa com embriões, edição genética ou fim da vida): o que diz a biologia, o que diz a lei brasileira, o que ensina a Igreja e quais argumentos dos dois lados, separando os três planos.</p>`,
  fonte: {
    obra: 'Congregação para a Doutrina da Fé, Dignitas Personae (2008), parte I; Lei nº 11.105, de 24 de março de 2005 (Lei de Biossegurança)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Em Dignitas Personae, localize o princípio do respeito ao embrião. Na Lei 11.105, o artigo sobre células-tronco embrionárias. Compare os critérios.</p>`,
  },
  perguntas: [
    { p: 'Quanto do genoma humano é semelhante ao do chimpanzé?', r: 'Cerca de 98% a 99% em sequências comparáveis, conforme o método.' },
    { p: 'Quem recebeu o Nobel pela técnica CRISPR?', r: 'Jennifer Doudna e Emmanuelle Charpentier, em 2020.' },
    { p: 'Que lei brasileira trata de células-tronco embrionárias?', r: 'A Lei de Biossegurança, nº 11.105, de 2005.' },
  ],
  exercicios: [
    mc('Dignitas Personae é de:', ['1987', '1995', '2008', '2020'], 2, 'Bioética.'),
    mc('O Nobel de Química pela CRISPR foi em:', ['2012', '2018', '2020', '2023'], 2, 'Doudna e Charpentier.'),
    mc('O STF julgou constitucional a pesquisa com células-tronco embrionárias em:', ['2005', '2008', '2012', '2018'], 1, 'ADI 3510.'),
    mc('Editar um embrião é intervenção:', ['Somática', 'Germinativa', 'Paliativa', 'Epigenética'], 1, 'Passa aos descendentes.'),
    mc('Samaritanus Bonus (2020) trata de:', ['Edição genética', 'Cuidado no fim da vida', 'Economia', 'Ecologia'], 1, 'Eutanásia e paliativos.'),
    disc('Analise um caso de bioética separando biologia, lei brasileira e ensino da Igreja, e expondo argumentos dos dois lados.', ['Plano biológico', 'Plano legal', 'Plano doutrinal', 'Argumentos dos dois lados']),
  ],
  resumo: ['~98–99% de semelhança genética com o chimpanzé; singularidade humana.', 'GS 24; CIC 356.', 'Embrião: Donum Vitae (1987), Dignitas Personae (2008); Lei 11.105/2005; STF (2008).', 'CRISPR (Nobel 2020); bebês editados (2018).', 'Fim da vida: Samaritanus Bonus (2020).'],
  referencias: [
    { texto: 'Congregação para a Doutrina da Fé, Dignitas Personae (2008).' },
    { texto: 'Congregação para a Doutrina da Fé, Donum Vitae (1987).' },
    { texto: 'Lei nº 11.105, de 2005 (Lei de Biossegurança).' },
    { texto: 'Congregação para a Doutrina da Fé, Samaritanus Bonus (2020).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os documentos indicados'],
  revisao: [['Dignitas Personae', '2008.'], ['CRISPR', 'Nobel 2020.'], ['Lei 11.105', 'Biossegurança.']],
  avancado: {
    texto: `<h3>Células-tronco adultas e reprogramadas</h3>
<p>Em 2006, Shinya Yamanaka mostrou que células adultas podem ser reprogramadas em células-tronco pluripotentes (iPS), sem uso de embriões; recebeu o Nobel de Medicina de 2012 ${tag('fato')}. A descoberta abriu caminhos de pesquisa que evitam a destruição de embriões ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Kazutoshi Takahashi e Shinya Yamanaka, artigo sobre células iPS (2006).' }],
    exercicios: [
      mc('As células iPS foram obtidas por:', ['Doudna', 'Yamanaka', 'Watson', 'Mendel'], 1, '2006.'),
      mc('As células iPS são obtidas a partir de:', ['Embriões', 'Células adultas reprogramadas', 'Vírus', 'Plantas'], 1, 'Sem embriões.'),
      mc('Yamanaka recebeu o Nobel em:', ['2006', '2012', '2020', '2023'], 1, 'Medicina.'),
      disc('Avalie a importância ética das células iPS para o debate sobre pesquisa com embriões.', ['Descoberta', 'Importância ética', 'Limites', 'Conclusão'])],
  },
}),

avaliacao('bi3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as sínteses da biologia, a relação entre evolução e criação e a bioética, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro das sínteses.</li><li>Releia seu ensaio sobre evolução e origem do homem.</li></ul>`,
[
  disc('Responda a quem diz que "a biologia moderna prova que o homem é só um animal", distinguindo o que a biologia mostra, o que é tese filosófica e o que a Igreja ensina.', ['Afirmação exposta com justiça', 'Dados biológicos', 'Tese filosófica identificada', 'Doutrina citada']),
  disc('Avalie um dilema de bioética atual com dados biológicos, legislação brasileira e o ensino da Igreja, separando os planos e expondo os dois lados.', ['Dilema delimitado', 'Três planos', 'Dois lados', 'Conclusão fundamentada']),
]),
];
