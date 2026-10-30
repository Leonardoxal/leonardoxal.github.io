// Biologia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Biologia).
// O que é a vida e a biogênese; conceitos básicos; microscopia, experimento controlado e classificação;
// ética no uso de animais e de seres humanos em pesquisa. Exemplos da biodiversidade brasileira.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'bi1-1', titulo: 'O que é a vida: características dos seres vivos, níveis de organização e biogênese', duracao: '120 min',
  aprendera: ['Enumerar as características dos seres vivos', 'Ordenar os níveis de organização da vida', 'Explicar os experimentos de Redi e Pasteur', 'Distinguir a descrição biológica da vida e a noção filosófica de alma'],
  prereq: ['Degrau de lógica', 'Química básica (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Uma pedra, um cristal que cresce e um cogumelo: o que distingue o vivo do não vivo? A biologia responde com um conjunto de características, não com uma única.</p>
<h3>Características da vida</h3>
<p>Os seres vivos são formados por células; têm metabolismo (transformam matéria e energia); mantêm o meio interno estável (homeostase); crescem e se desenvolvem; reagem a estímulos; reproduzem-se e transmitem informação hereditária; e as populações evoluem ao longo das gerações ${tag('fato')}. Os vírus têm material genético, mas só se reproduzem dentro de células, e por isso sua classificação como seres vivos é debatida ${tag('debate')}.</p>
<h3>Níveis de organização</h3>
<p>Molécula, célula, tecido, órgão, sistema, organismo, população, comunidade, ecossistema e biosfera ${tag('fato')}. Cada nível tem propriedades que não aparecem nos anteriores ${tag('interpretacao')}.</p>
<h3>Biogênese</h3>
<p>Francesco Redi mostrou, em 1668, que larvas não surgem da carne podre se os frascos forem cobertos, impedindo as moscas ${tag('fato')}. Louis Pasteur, com frascos de "pescoço de cisne" (por volta de 1860), mostrou que caldos fervidos não geram micro-organismos se a poeira do ar não os alcança ${tag('fato')}. A conclusão "todo ser vivo vem de outro ser vivo" (biogênese) refutou a geração espontânea nas condições atuais ${tag('fato')}.</p>
<h3>Vida e alma</h3>
<p>Aristóteles chamou de "alma" o princípio da vida, forma do corpo vivo, com funções vegetativas, sensitivas e, no homem, intelectuais (<em>Da alma</em>) ${tag('interpretacao')}. A Igreja ensina que a alma humana é espiritual e criada diretamente por Deus (CIC 366) ${tag('doutrina')}. A biologia descreve as funções da vida; a pergunta sobre o princípio da vida é filosófica ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Metabolismo', 'Conjunto das transformações químicas de um ser vivo.'],
    ['Homeostase', 'Manutenção do meio interno estável.'],
    ['Nível de organização', 'Grau de complexidade, da molécula à biosfera.'],
    ['Biogênese', 'Princípio de que todo ser vivo vem de outro ser vivo.'],
    ['Geração espontânea', 'Tese refutada de que a vida surge de matéria não viva nas condições comuns.'],
  ],
  exemplos: `<p><strong>As características num ser brasileiro:</strong> o ipê-amarelo é formado por células; faz fotossíntese (metabolismo); regula a perda de água pelos estômatos (homeostase); cresce; floresce em resposta à seca do inverno (estímulo); produz sementes (reprodução e hereditariedade); e suas populações variam e evoluem.</p>`,
  contexto: `<p><strong>No mundo:</strong> a origem da vida a partir de moléculas, há bilhões de anos, é campo de pesquisa com hipóteses diversas ${tag('hipotese')}. <strong>No Brasil:</strong> o país abriga parte importante da biodiversidade conhecida do planeta; estimativas frequentes situam essa parte entre 15% e 20% das espécies descritas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o experimento de Pasteur refutou a geração espontânea', tag: 'argumento',
    premissas: ['Se a vida surgisse espontaneamente do caldo, surgiria com ou sem contato com a poeira do ar.', 'Nos frascos de pescoço de cisne, o ar entrava, mas a poeira ficava retida na curva, e nada crescia.', 'Quando o pescoço era quebrado e a poeira chegava ao caldo, os micro-organismos apareciam.'],
    conclusao: 'Logo, os micro-organismos vinham de outros micro-organismos trazidos pela poeira, e não do caldo.',
    nota: 'O frasco aberto ao ar, mas protegido da poeira, respondia à objeção de que faltaria "ar vital".',
  },
  objecoes: [
    { objecao: 'Se a vida não surge espontaneamente, a origem da vida é inexplicável pela ciência.', tag: 'debate',
      resposta: 'Pasteur refutou a geração espontânea nas condições atuais e em escalas de dias; a origem da vida há bilhões de anos, em condições muito diferentes, é outra questão, estudada por hipóteses científicas ainda não confirmadas. Distinguir as duas evita conclusões apressadas em qualquer sentido.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva três seres vivos do seu entorno (uma planta, um animal, um fungo ou micro-organismo) e mostre como cada um apresenta as características da vida e em que níveis de organização pode ser estudado.</p>`,
  fonte: {
    obra: 'Louis Pasteur, "Sobre os corpúsculos organizados que existem na atmosfera" (1861); Aristóteles, Da alma, livro II, caps. 1–2', link: null,
    orientacao: `<p>Em Pasteur, siga a descrição dos frascos e dos controles. Em Aristóteles, a definição de alma como forma do corpo vivo e os graus de vida. Compare a pergunta científica e a filosófica.</p>`,
  },
  perguntas: [
    { p: 'Quais as características dos seres vivos?', r: 'Organização celular, metabolismo, homeostase, crescimento, resposta a estímulos, reprodução e hereditariedade, evolução.' },
    { p: 'O que mostrou Redi em 1668?', r: 'Que larvas não surgem da carne se as moscas forem impedidas de alcançá-la.' },
    { p: 'O que ensina a Igreja sobre a alma humana?', r: 'Que é espiritual e criada diretamente por Deus (CIC 366).' },
  ],
  exercicios: [
    mc('O experimento das larvas e da carne é de:', ['Pasteur', 'Redi', 'Darwin', 'Mendel'], 1, '1668.'),
    mc('Os frascos de pescoço de cisne são de:', ['Redi', 'Pasteur', 'Hooke', 'Lineu'], 1, 'Cerca de 1860.'),
    mc('Manter estável o meio interno é:', ['Metabolismo', 'Homeostase', 'Reprodução', 'Evolução'], 1, 'Característica da vida.'),
    mc('O nível logo acima de "tecido" é:', ['Célula', 'Órgão', 'População', 'Molécula'], 1, 'Níveis de organização.'),
    mc('A classificação dos vírus como seres vivos é:', ['Consensual', 'Debatida', 'Doutrina', 'Irrelevante'], 1, 'Dependem de células.'),
    disc('Entregue a descrição de três seres vivos com as características da vida e os níveis de organização em que podem ser estudados.', ['Três seres', 'Características identificadas', 'Níveis corretos', 'Clareza']),
  ],
  resumo: ['Características da vida.', 'Níveis: da molécula à biosfera.', 'Redi (1668) e Pasteur (~1860): biogênese.', 'Vírus: debate.', 'Alma (Aristóteles; CIC 366): questão filosófica.'],
  referencias: [
    { texto: 'Louis Pasteur, "Sobre os corpúsculos organizados que existem na atmosfera" (1861).' },
    { texto: 'Aristóteles, Da alma.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 362–368.', livro: 'cic' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição dos três seres vivos', 'Ler os textos indicados'],
  revisao: [['Biogênese', 'Vivo vem de vivo.'], ['Pasteur', 'Pescoço de cisne.'], ['Homeostase', 'Meio interno estável.']],
  avancado: {
    texto: `<h3>O experimento de Miller-Urey</h3>
<p>Em 1953, Stanley Miller e Harold Urey simularam em laboratório uma atmosfera primitiva e obtiveram aminoácidos a partir de moléculas simples e descargas elétricas ${tag('fato')}. O experimento mostrou que componentes da vida podem formar-se espontaneamente; a passagem dessas moléculas a células vivas continua sem explicação confirmada ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' }],
    exercicios: [
      mc('O experimento de Miller-Urey é de:', ['1859', '1953', '1977', '2000'], 1, 'Aminoácidos.'),
      mc('O experimento produziu:', ['Células vivas', 'Aminoácidos', 'DNA completo', 'Bactérias'], 1, 'Componentes.'),
      mc('A passagem de moléculas a células é:', ['Explicada e confirmada', 'Ainda hipotética', 'Impossível', 'Doutrina'], 1, 'Pesquisa aberta.'),
      disc('Exponha o que o experimento de Miller-Urey mostrou e o que não mostrou sobre a origem da vida.', ['O que mostrou', 'O que não mostrou', 'Hipóteses atuais', 'Grau de confiança'])],
  },
}),

aula({
  id: 'bi1-2', titulo: 'Vocabulário biológico: célula, gene, espécie, ecossistema, metabolismo e homeostase', duracao: '150 min',
  aprendera: ['Distinguir células procariontes e eucariontes', 'Definir gene, genoma e espécie', 'Explicar metabolismo e homeostase', 'Distinguir população, comunidade e ecossistema'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Termos como "gene", "espécie" e "ecossistema" circulam no dia a dia com sentidos frouxos. Esta aula fixa os conceitos usados em todo o percurso.</p>
<h3>Célula</h3>
<p>As células <strong>procariontes</strong> (bactérias e arqueias) não têm núcleo delimitado por membrana; as <strong>eucariontes</strong> (protistas, fungos, plantas e animais) têm núcleo e organelas, como mitocôndrias ${tag('fato')}. Células formam tecidos; tecidos formam órgãos; órgãos formam sistemas ${tag('fato')}.</p>
<h3>Gene e genoma</h3>
<p>O <strong>DNA</strong> guarda a informação hereditária; um <strong>gene</strong> é um trecho de DNA que contém a informação para um produto funcional, geralmente uma proteína; o <strong>genoma</strong> é o conjunto de todo o material genético de um organismo ${tag('fato')}.</p>
<h3>Espécie</h3>
<p>Pelo conceito biológico de espécie, formulado por Ernst Mayr (1942), espécies são grupos de populações que se cruzam entre si e estão isoladas reprodutivamente de outros grupos ${tag('fato')}. O conceito tem limites (seres que se reproduzem sem sexo, fósseis), e outros conceitos são usados ${tag('debate')}.</p>
<h3>Metabolismo e homeostase</h3>
<p>Metabolismo inclui a construção de moléculas (anabolismo) e sua quebra para obter energia (catabolismo) ${tag('fato')}. Claude Bernard, no século XIX, falou da constância do "meio interno"; Walter Cannon cunhou o termo "homeostase" ${tag('fato')}.</p>
<h3>Ecologia</h3>
<p><strong>População</strong>: indivíduos da mesma espécie num lugar. <strong>Comunidade</strong>: populações de espécies diferentes. <strong>Ecossistema</strong>: comunidade e ambiente físico em interação ${tag('fato')}.</p>`,
  vocabulario: [
    ['Procarionte', 'Célula sem núcleo delimitado por membrana.'],
    ['Eucarionte', 'Célula com núcleo e organelas.'],
    ['Gene', 'Trecho de DNA com informação para um produto funcional.'],
    ['Genoma', 'Todo o material genético de um organismo.'],
    ['Espécie (conceito biológico)', 'Populações intercruzantes isoladas reprodutivamente (Mayr).'],
    ['Ecossistema', 'Comunidade e ambiente físico em interação.'],
  ],
  exemplos: `<p><strong>Do gene ao ecossistema no Pantanal:</strong> o gene da pigmentação influi na cor da onça-pintada (Panthera onca); as onças de uma região formam uma população; com jacarés, capivaras e plantas, uma comunidade; com a água, o solo e o clima do Pantanal, um ecossistema.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Projeto Genoma Humano concluiu em 2003 o sequenciamento de referência do genoma humano ${tag('fato')}. <strong>No Brasil:</strong> em 2000, pesquisadores brasileiros sequenciaram o genoma da bactéria Xylella fastidiosa, que ataca laranjais — o primeiro genoma de um patógeno de plantas publicado ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que um gene não "determina" sozinho uma característica', tag: 'argumento',
    premissas: ['Um gene fornece informação para um produto, como uma proteína.', 'A característica final depende de muitos genes, de sua regulação e do ambiente.', 'Organismos com os mesmos genes podem diferir por condições ambientais (por exemplo, nutrição).'],
    conclusao: 'Logo, dizer que um gene "determina" uma característica complexa é simplificação; a característica resulta de genes, regulação e ambiente.',
    nota: 'Evita o determinismo genético, comum na divulgação.',
  },
  objecoes: [
    { objecao: 'Se espécies são difíceis de definir, elas não existem de verdade.', tag: 'debate',
      resposta: 'Há casos de fronteira, mas na maioria dos casos os grupos são bem distintos e reconhecíveis (onça e capivara). A dificuldade de definir casos-limite não anula a realidade dos casos claros.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de 20 termos (célula, procarionte, eucarionte, organela, tecido, órgão, sistema, DNA, gene, genoma, espécie, população, comunidade, ecossistema, biosfera, metabolismo, anabolismo, catabolismo, homeostase, hereditariedade), cada um com definição e exemplo de um ser vivo brasileiro.</p>`,
  fonte: {
    obra: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982), capítulo sobre o conceito de espécie; Claude Bernard, Introdução ao estudo da medicina experimental (1865)', link: null,
    orientacao: `<p>Em Mayr, localize o conceito biológico de espécie e seus limites. Em Bernard, a noção de meio interno. Use ambos no glossário.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre procarionte e eucarionte?', r: 'O procarionte não tem núcleo delimitado por membrana; o eucarionte tem núcleo e organelas.' },
    { p: 'O que é um gene?', r: 'Um trecho de DNA com informação para um produto funcional, geralmente uma proteína.' },
    { p: 'Qual o conceito biológico de espécie?', r: 'Grupos de populações que se cruzam entre si e estão isolados reprodutivamente de outros.' },
  ],
  exercicios: [
    mc('Bactérias são células:', ['Eucariontes', 'Procariontes', 'Vegetais', 'Animais'], 1, 'Sem núcleo.'),
    mc('O conjunto de todo o material genético é o:', ['Gene', 'Genoma', 'Cromossomo', 'Nucleotídeo'], 1, 'Genoma.'),
    mc('O conceito biológico de espécie é de:', ['Lineu', 'Mayr', 'Darwin', 'Mendel'], 1, '1942.'),
    mc('Comunidade e ambiente físico em interação formam:', ['População', 'Ecossistema', 'Espécie', 'Tecido'], 1, 'Ecologia.'),
    mc('O genoma da Xylella fastidiosa foi publicado por brasileiros em:', ['1990', '2000', '2003', '2010'], 1, 'Patógeno de laranjais.'),
    disc('Entregue o glossário de 20 termos com definição e exemplo de um ser vivo brasileiro.', ['20 termos', 'Definições corretas', 'Exemplos brasileiros', 'Clareza']),
  ],
  resumo: ['Procariontes x eucariontes.', 'DNA, gene, genoma.', 'Espécie: Mayr (1942), com limites.', 'Metabolismo; homeostase (Bernard, Cannon).', 'População, comunidade, ecossistema.'],
  referencias: [
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
    { texto: 'Claude Bernard, Introdução ao estudo da medicina experimental (1865).' },
    { texto: 'Bruce Alberts e outros, Biologia molecular da célula (manual).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os textos indicados'],
  revisao: [['Eucarionte', 'Núcleo e organelas.'], ['Gene', 'Trecho de DNA.'], ['Mayr', 'Espécie biológica.']],
  avancado: {
    texto: `<h3>Mitocôndrias e endossimbiose</h3>
<p>Lynn Margulis defendeu, a partir de 1967, que mitocôndrias e cloroplastos se originaram de bactérias que passaram a viver dentro de outras células — a teoria endossimbiótica, hoje amplamente aceita por evidências como o DNA próprio dessas organelas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lynn Margulis, "On the Origin of Mitosing Cells" (1967).' }],
    exercicios: [
      mc('A teoria endossimbiótica explica a origem de:', ['Núcleo', 'Mitocôndrias e cloroplastos', 'Vírus', 'Ribossomos apenas'], 1, 'Bactérias internas.'),
      mc('Uma evidência da endossimbiose é:', ['DNA próprio das organelas', 'Cor das folhas', 'Tamanho das células', 'Clima'], 0, 'Genoma próprio.'),
      mc('A teoria foi defendida por:', ['Mayr', 'Margulis', 'Watson', 'Mendel'], 1, 'A partir de 1967.'),
      disc('Exponha três evidências da teoria endossimbiótica e avalie sua força.', ['Três evidências', 'Explicação', 'Avaliação', 'Conclusão'])],
  },
}),

aula({
  id: 'bi1-3', titulo: 'Métodos da biologia: microscopia, experimento controlado e classificação', duracao: '150 min',
  aprendera: ['Explicar a contribuição de Hooke e Leeuwenhoek e da microscopia eletrônica', 'Planejar um experimento controlado', 'Usar a nomenclatura binomial de Lineu', 'Distinguir classificação lineana e cladística'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como ver o invisível, testar uma hipótese e organizar milhões de espécies? A biologia desenvolveu instrumentos, desenhos experimentais e sistemas de classificação.</p>
<h3>Microscopia</h3>
<p>Robert Hooke, em <em>Micrographia</em> (1665), observou a cortiça e chamou de "células" as pequenas cavidades que viu ${tag('fato')}. Antonie van Leeuwenhoek, com microscópios simples de grande aumento, descreveu micro-organismos nos anos 1670 ${tag('fato')}. O microscópio eletrônico, desenvolvido a partir dos anos 1930, permitiu ver estruturas internas das células e vírus ${tag('fato')}.</p>
<h3>Experimento controlado</h3>
<p>Testa-se o efeito de uma <strong>variável independente</strong> (o que se muda) sobre uma <strong>variável dependente</strong> (o que se mede), mantendo as demais constantes, com um <strong>grupo de controle</strong> e repetições ${tag('fato')}. Em pesquisas com seres humanos, o duplo-cego evita que expectativas influenciem o resultado ${tag('fato')}.</p>
<h3>Classificação</h3>
<p>Carlos Lineu, no <em>Systema Naturae</em> (1ª edição em 1735), organizou os seres em categorias hierárquicas e consolidou a nomenclatura binomial (gênero e espécie), aplicada às plantas em <em>Species Plantarum</em> (1753) e aos animais na 10ª edição do <em>Systema</em> (1758) ${tag('fato')}. Exemplo: <em>Panthera onca</em>, a onça-pintada ${tag('fato')}. A cladística, proposta por Willi Hennig (1950), agrupa os seres pela ancestralidade comum indicada por características derivadas compartilhadas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Variável independente', 'O que o pesquisador muda no experimento.'],
    ['Variável dependente', 'O que se mede como efeito.'],
    ['Grupo de controle', 'Grupo que não recebe o tratamento, para comparação.'],
    ['Nomenclatura binomial', 'Nome científico com gênero e espécie (Lineu).'],
    ['Cladística', 'Classificação por ancestralidade comum (Hennig).'],
  ],
  exemplos: `<p><strong>Experimento de germinação:</strong> pergunta — a luz influi na germinação do feijão? Variável independente: luz ou escuro; dependente: número de sementes germinadas em 7 dias; constantes: tipo de semente, água, temperatura, recipiente; controle: grupo com luz natural; repetições: três potes de 10 sementes em cada condição.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Código Internacional de Nomenclatura Zoológica e o de nomenclatura botânica regulam os nomes científicos. <strong>No Brasil:</strong> novas espécies continuam a ser descritas todos os anos, sobretudo na Amazônia e na Mata Atlântica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o grupo de controle é indispensável', tag: 'argumento',
    premissas: ['Um resultado pode ter muitas causas além do tratamento testado.', 'O grupo de controle passa por tudo, menos pelo tratamento.', 'A diferença entre os grupos isola o efeito do tratamento.'],
    conclusao: 'Logo, sem grupo de controle não se sabe se o efeito observado se deve ao tratamento.',
    nota: 'É o mesmo raciocínio do contrafactual em economia (e5-2).',
  },
  objecoes: [
    { objecao: 'A classificação de Lineu está ultrapassada e não serve mais.', tag: 'debate',
      resposta: 'A nomenclatura binomial continua em uso universal. O que mudou é o critério de agrupamento, hoje baseado na ancestralidade comum (cladística e dados genéticos). Lineu forneceu a linguagem; a evolução e a genética reorganizaram parte do conteúdo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: planeje um experimento de germinação de sementes com pergunta, hipótese, variável independente, variável dependente, constantes, grupo de controle, repetições e forma de registrar os dados.</p>`,
  fonte: {
    obra: 'Robert Hooke, Micrographia (1665), observação XVIII (a cortiça); Carlos Lineu, Systema Naturae (1735), introdução', link: null,
    orientacao: `<p>Em Hooke, leia a descrição da cortiça e o uso do termo "células". Em Lineu, a ordem hierárquica das categorias. Relacione os dois métodos: ver e classificar.</p>`,
  },
  perguntas: [
    { p: 'Quem usou primeiro o termo "células" para estruturas vistas ao microscópio?', r: 'Robert Hooke, em Micrographia (1665).' },
    { p: 'O que é variável independente?', r: 'O que o pesquisador muda no experimento.' },
    { p: 'O que é nomenclatura binomial?', r: 'Nome científico formado por gênero e espécie.' },
  ],
  exercicios: [
    mc('Micrographia é de:', ['Leeuwenhoek', 'Hooke', 'Lineu', 'Harvey'], 1, '1665.'),
    mc('A primeira edição do Systema Naturae é de:', ['1665', '1735', '1859', '1953'], 1, 'Lineu.'),
    mc('Em "Panthera onca", onca é o:', ['Gênero', 'Epíteto específico', 'Família', 'Reino'], 1, 'Espécie.'),
    mc('A cladística é de:', ['Lineu', 'Hennig', 'Mayr', 'Darwin'], 1, '1950.'),
    mc('O grupo que não recebe o tratamento é o:', ['Experimental', 'De controle', 'Cego', 'Dependente'], 1, 'Comparação.'),
    disc('Entregue o planejamento do experimento de germinação com todos os elementos do desenho experimental.', ['Pergunta e hipótese', 'Variáveis', 'Controle e repetições', 'Registro']),
  ],
  resumo: ['Hooke (1665), Leeuwenhoek (anos 1670), microscópio eletrônico (anos 1930).', 'Experimento: variáveis, controle, repetição, duplo-cego.', 'Lineu: Systema Naturae (1735); binomial (1753, 1758).', 'Cladística (Hennig, 1950).', 'Novas espécies descritas no Brasil.'],
  referencias: [
    { texto: 'Robert Hooke, Micrographia (1665).' },
    { texto: 'Carlos Lineu, Systema Naturae (1735).' },
    { texto: 'Ernst Mayr, O desenvolvimento do pensamento biológico (1982).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o planejamento do experimento', 'Ler os trechos indicados'],
  revisao: [['Hooke', 'Células, 1665.'], ['Lineu', 'Binomial.'], ['Controle', 'Isola o efeito.']],
  avancado: {
    texto: `<h3>Taxonomia molecular</h3>
<p>Carl Woese, comparando sequências de RNA ribossômico (1977), propôs dividir os seres vivos em três domínios: Bacteria, Archaea e Eukarya ${tag('fato')}. A descoberta mostrou que as arqueias, antes confundidas com bactérias, formam um grupo distinto ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Carl Woese e George Fox, "Phylogenetic structure of the prokaryotic domain" (1977).' }],
    exercicios: [
      mc('Os três domínios foram propostos por:', ['Lineu', 'Woese', 'Hennig', 'Mayr'], 1, '1977.'),
      mc('Os três domínios são:', ['Planta, animal, fungo', 'Bacteria, Archaea, Eukarya', 'Vírus, bactéria, célula', 'Mar, terra, ar'], 1, 'RNA ribossômico.'),
      mc('Woese usou sequências de:', ['Proteínas do sangue', 'RNA ribossômico', 'Ossos', 'Folhas'], 1, 'Molécula universal.'),
      disc('Explique por que comparar moléculas mudou a classificação dos seres vivos, com o exemplo das arqueias.', ['Método', 'Exemplo', 'Consequência', 'Limites'])],
  },
}),

aula({
  id: 'bi1-4', titulo: 'Ética na pesquisa biológica: animais, seres humanos e o critério da dignidade', duracao: '120 min',
  aprendera: ['Explicar a regulação do uso de animais em pesquisa no Brasil', 'Aplicar o princípio dos 3Rs', 'Expor os princípios da ética em pesquisa com seres humanos', 'Expor o ensino da Igreja sobre os animais e a experimentação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A biologia avança com experimentos em animais e, na medicina, em seres humanos. Que limites a razão e a fé impõem?</p>
<h3>Animais</h3>
<p>No Brasil, a Lei nº 11.794, de 2008 (Lei Arouca), regulamenta o uso científico de animais, criou o Conselho Nacional de Controle de Experimentação Animal (Concea) e exige Comissões de Ética no Uso de Animais (CEUAs) nas instituições ${tag('fato')}. William Russell e Rex Burch propuseram em 1959 o princípio dos <strong>3Rs</strong>: substituir (replacement), reduzir (reduction) e refinar (refinement) ${tag('fato')}.</p>
<h3>Seres humanos</h3>
<p>Depois dos crimes de médicos nazistas, o Código de Nuremberg (1947) e a Declaração de Helsinque (1964) estabeleceram o consentimento livre e informado e a avaliação de riscos e benefícios ${tag('fato')}. No Brasil, a Resolução CNS nº 466, de 2012, regula a pesquisa com seres humanos na área da saúde ${tag('fato')}.</p>
<h3>Ensino da Igreja</h3>
<p>O Catecismo ensina que os animais são criaturas de Deus, confiados à administração do homem; a experimentação médica e científica com animais é moralmente aceitável se permanecer dentro de limites razoáveis e contribuir para curar ou salvar vidas humanas; é contrário à dignidade humana fazer os animais sofrerem inutilmente (CIC 2416–2418) ${tag('doutrina')}. Em relação ao ser humano, a pesquisa deve respeitar sua dignidade desde a concepção (<em>Donum Vitae</em>, 1987) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Lei Arouca', 'Lei nº 11.794/2008, sobre uso científico de animais.'],
    ['Concea', 'Conselho Nacional de Controle de Experimentação Animal.'],
    ['CEUA', 'Comissão de Ética no Uso de Animais.'],
    ['3Rs', 'Substituir, reduzir e refinar o uso de animais (Russell e Burch, 1959).'],
    ['Consentimento informado', 'Concordância livre de quem participa da pesquisa, após explicação.'],
  ],
  exemplos: `<p><strong>Aplicando os 3Rs:</strong> substituir — testes de irritação com tecidos cultivados em vez de animais, quando possível; reduzir — desenho estatístico que use o menor número de animais suficiente para a conclusão; refinar — anestesia e cuidados que diminuam dor e estresse. Cada R é exigência técnica e ética ao mesmo tempo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ética em pesquisa nasceu em grande parte da reação aos abusos do século XX. <strong>No Brasil:</strong> as pesquisas com seres humanos passam pelos Comitês de Ética em Pesquisa e pela Conep, e o uso de animais pelas CEUAs, conforme a legislação ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que é errado fazer os animais sofrerem inutilmente', tag: 'argumento',
    premissas: ['Os animais são capazes de sentir dor.', 'Causar dor sem razão proporcional é crueldade, que degrada quem a pratica.', 'O homem recebeu os animais como criaturas confiadas à sua administração, não como objetos de capricho.'],
    conclusao: 'Logo, é contrário à dignidade humana fazer os animais sofrerem inutilmente, embora a experimentação razoável seja lícita.',
    nota: 'Resume o ensino de CIC 2416–2418.',
  },
  objecoes: [
    { objecao: 'Se os animais sentem dor, toda experimentação com eles é imoral.', tag: 'debate',
      resposta: 'A dor dos animais é real e impõe limites; mas a vida humana tem dignidade própria, e pesquisas que salvam vidas humanas podem justificar o uso razoável de animais, com os 3Rs. O Catecismo rejeita tanto o sofrimento inútil quanto a equiparação entre animais e pessoas.' },
  ],
  aplicacao: `<p>Escolha um tipo de pesquisa biomédica (por exemplo, teste de vacina). Descreva as etapas com animais e com seres humanos, as exigências éticas e legais de cada uma no Brasil e como os 3Rs se aplicam.</p>`,
  fonte: {
    obra: 'Lei nº 11.794, de 8 de outubro de 2008; Catecismo da Igreja Católica, §§ 2416–2418; Declaração de Helsinque (1964)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Lei 11.794, localize as atribuições do Concea e das CEUAs. No Catecismo, os parágrafos sobre os animais. Na Declaração de Helsinque, o consentimento informado. Compare os três critérios.</p>`,
  },
  perguntas: [
    { p: 'Que lei regula o uso científico de animais no Brasil?', r: 'A Lei nº 11.794, de 2008 (Lei Arouca).' },
    { p: 'O que significam os 3Rs?', r: 'Substituir, reduzir e refinar o uso de animais.' },
    { p: 'O que ensina o Catecismo sobre a experimentação com animais?', r: 'É aceitável dentro de limites razoáveis, se contribuir para curar ou salvar vidas; é contrário à dignidade humana fazê-los sofrer inutilmente.' },
  ],
  exercicios: [
    mc('Os 3Rs foram propostos em:', ['1947', '1959', '1964', '2008'], 1, 'Russell e Burch.'),
    mc('O Código de Nuremberg é de:', ['1945', '1947', '1964', '2012'], 1, 'Após os crimes nazistas.'),
    mc('A Resolução CNS 466 é de:', ['1996', '2008', '2012', '2016'], 2, 'Pesquisa com seres humanos.'),
    mc('Usar o menor número de animais suficiente é o R de:', ['Substituir', 'Reduzir', 'Refinar', 'Repetir'], 1, '3Rs.'),
    mc('Donum Vitae (1987) trata da:', ['Ecologia', 'Dignidade da vida humana nascente', 'Liturgia', 'Economia'], 1, 'Bioética.'),
    disc('Descreva as etapas éticas e legais de um teste de vacina no Brasil, com animais e seres humanos, aplicando os 3Rs e o ensino da Igreja.', ['Etapas com animais', 'Etapas com humanos', 'Normas citadas', 'Critério moral']),
  ],
  resumo: ['Lei 11.794/2008: Concea e CEUAs.', '3Rs (1959).', 'Nuremberg (1947), Helsinque (1964), CNS 466/2012.', 'CIC 2416–2418: animais confiados; sem sofrimento inútil.', 'Donum Vitae (1987).'],
  referencias: [
    { texto: 'Lei nº 11.794, de 2008 (Lei Arouca).' },
    { texto: 'William Russell e Rex Burch, The Principles of Humane Experimental Technique (1959).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2416–2418.', livro: 'cic' },
    { texto: 'Associação Médica Mundial, Declaração de Helsinque (1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os documentos indicados'],
  revisao: [['Lei Arouca', '11.794/2008.'], ['3Rs', 'Substituir, reduzir, refinar.'], ['CIC 2418', 'Sem sofrimento inútil.']],
  avancado: {
    texto: `<h3>Métodos alternativos</h3>
<p>O Brasil reconhece métodos alternativos ao uso de animais validados internacionalmente, por meio de resoluções do Concea, como testes com culturas de células e modelos computacionais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Concea, resoluções sobre métodos alternativos (consultar o site do Ministério da Ciência, Tecnologia e Inovação).' }],
    exercicios: [
      mc('Métodos alternativos ao uso de animais incluem:', ['Culturas de células e modelos computacionais', 'Testes em humanos sem consentimento', 'Nada', 'Só animais maiores'], 0, 'Substituição.'),
      mc('O reconhecimento de métodos alternativos no Brasil é feito pelo:', ['IBGE', 'Concea', 'INPE', 'Iphan'], 1, 'Resoluções.'),
      mc('Usar métodos alternativos aplica o R de:', ['Reduzir', 'Substituir', 'Refinar', 'Repetir'], 1, 'Replacement.'),
      disc('Avalie as vantagens e os limites dos métodos alternativos ao uso de animais em um tipo de pesquisa.', ['Vantagens', 'Limites', 'Exemplo', 'Conclusão'])],
  },
}),

avaliacao('bi1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as características da vida, conceitos básicos, métodos e ética da pesquisa, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e o planejamento do experimento.</li><li>Revise os 3Rs e o ensino do Catecismo sobre os animais.</li></ul>`,
[
  disc('Planeje um experimento simples para testar uma hipótese sobre um ser vivo brasileiro, com todos os elementos do desenho e os cuidados éticos aplicáveis.', ['Hipótese', 'Variáveis e controle', 'Repetições e registro', 'Cuidados éticos']),
  disc('Explique, com o experimento de Pasteur, o que significa provar algo em biologia e o que o experimento provou e não provou.', ['Experimento descrito', 'O que provou', 'O que não provou', 'Conclusão sobre método']),
]),
];
