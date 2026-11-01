// Simbologia II-B — Eco, Cassirer, Panofsky e a análise de símbolos com contexto e fonte.
// Completa a trilha com os autores que faltavam (Eco, Cassirer, Panofsky) e com um método que nunca atribui
// significado universal a um símbolo sem contexto e fonte.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'sb2b-1', titulo: 'Umberto Eco: a semiótica, o leitor e os limites da interpretação', duracao: '150 min',
  aprendera: ['Expor a definição de semiótica e a divisão do Tratado geral de semiótica', 'Explicar "obra aberta" sem confundi-la com "qualquer leitura vale"', 'Distinguir intenção do autor, da obra e do leitor', 'Relacionar Eco a Peirce e à tradição tomista'],
  prereq: ['Simbologia I (módulo SB1), em especial Peirce e Saussure'],
  explicacao: `
<h3>O problema</h3>
<p>Se todo texto, imagem ou gesto pode ser lido de vários modos, existe algum limite para a interpretação?</p>
<h3>Quem foi Eco</h3>
<p>Umberto Eco (1932–2016), italiano, começou como medievalista: sua tese e seu primeiro livro tratam do problema estético em Tomás de Aquino (1956) ${tag('fato')}. Tornou-se o mais conhecido semiótico europeu do século XX e também romancista, autor de O nome da rosa (1980) ${tag('fato')}.</p>
<h3>O Tratado geral de semiótica</h3>
<p>No Tratado geral de semiótica (1975), Eco define a semiótica, em princípio, como a disciplina que estuda tudo o que pode ser usado para mentir, porque só o que serve para dizer o falso serve também para dizer o verdadeiro ${tag('fato')}. A obra tem duas partes: uma teoria dos códigos, que trata de como signos e significados se associam por convenção, e uma teoria da produção de signos, que trata de como os signos são realmente usados e interpretados ${tag('fato')}. Eco recebe de Peirce a ideia de que o signo é interpretado por outro signo, numa cadeia a que Peirce chamou semiose ${tag('fato')}.</p>
<h3>Obra aberta e limites</h3>
<p>Em Obra aberta (1962), Eco estudou obras, sobretudo de arte e música contemporâneas, que deixam parte da forma ao intérprete ${tag('fato')}. Anos depois, em Os limites da interpretação (1990) e nas conferências de Cambridge publicadas em Interpretação e superinterpretação (1992), esclareceu que "aberta" não significa que todas as leituras sejam igualmente boas: a obra tem uma intenção própria (intentio operis) que restringe as leituras legítimas ${tag('fato')}. Distingue a intenção do autor, a da obra e a do leitor ${tag('fato')}.</p>
<h3>Critério de controle</h3>
<p>Para Eco, uma interpretação pode ser rejeitada quando contradiz o conjunto do texto: o texto funciona como parâmetro, mesmo sem determinar uma única leitura ${tag('interpretacao')}. A posição é discutida por quem defende maior liberdade do leitor e por quem exige mais peso à intenção do autor ${tag('debate')}.</p>`,
  vocabulario: [
    ['Semiótica', 'Estudo dos signos e dos processos de significação e comunicação.'],
    ['Código', 'Regra convencional que associa signos e significados.'],
    ['Semiose', 'Processo em que um signo é interpretado por outro signo.'],
    ['Obra aberta', 'Obra que admite várias leituras dentro de limites que ela mesma impõe.'],
    ['Intentio operis', 'A intenção do texto, que limita as interpretações aceitáveis.'],
  ],
  exemplos: `<p><strong>Uma leitura que o texto não permite:</strong> afirmar que, em Dom Casmurro, Capitu é descrita como uma santa é uma leitura que contradiz o conjunto do texto. Já a discussão sobre se Capitu traiu Bentinho continua em aberto, porque o romance a deixa aberta. É o contraste de Eco entre interpretação limitada e superinterpretação.</p>`,
  contexto: `<p><strong>No mundo:</strong> Eco foi professor de semiótica na Universidade de Bolonha ${tag('fato')}. <strong>No Brasil:</strong> a pesquisadora Lucia Santaella, da PUC-SP, é uma das principais estudiosas de Peirce e escreveu O que é semiótica, introdução muito lida em cursos de comunicação e letras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma obra aberta não admite qualquer leitura', tag: 'argumento',
    premissas: ['Interpretar é atribuir sentido a algo que tem uma forma própria.', 'A forma da obra exclui certos sentidos, como o contexto exclui certos usos de uma palavra.', 'Uma leitura que contradiz o conjunto do texto não responde ao texto, mas a outra coisa.'],
    conclusao: 'Logo, a abertura da obra convive com limites: há leituras melhores e piores, e algumas são impossíveis.',
    nota: 'Eco, Os limites da interpretação (1990); Interpretação e superinterpretação (1992).',
  },
  objecoes: [
    { objecao: 'Se o leitor é livre, não há como dizer que uma leitura é errada.', tag: 'debate',
      resposta: 'Eco responde que a liberdade do leitor é a de cooperar com o texto, não a de ignorá-lo. O critério é a coerência com o conjunto do texto e com os códigos da cultura em que foi escrito. Em casos limite o debate continua, e o próprio Eco admite zonas de indecisão.' },
  ],
  aplicacao: `<p>Escolha um poema curto ou um parágrafo de romance. Escreva duas leituras diferentes, ambas defensáveis, e uma leitura que o texto não permite, justificando a rejeição com passagens do próprio texto.</p>`,
  fonte: {
    obra: 'Umberto Eco, Interpretação e superinterpretação (1992), primeira conferência', link: null,
    orientacao: `<p>Observe como Eco distingue interpretar e usar um texto: usar é fazer dele pretexto para outra coisa.</p>`,
  },
  perguntas: [
    { p: 'Como Eco define a semiótica no Tratado?', r: 'Como a disciplina que estuda tudo o que pode ser usado para mentir.' },
    { p: 'Obra aberta significa qualquer leitura?', r: 'Não: a obra impõe limites (intentio operis).' },
    { p: 'Quais as duas partes do Tratado?', r: 'Teoria dos códigos e teoria da produção de signos.' },
  ],
  exercicios: [
    mc('O Tratado geral de semiótica é de:', ['1975', '1962', '1990', '1980'], 0, 'Eco.'),
    mc('Obra aberta, para Eco:', ['Admite leituras dentro de limites', 'Admite qualquer leitura', 'Tem um único sentido', 'Não tem sentido'], 0, 'Limites.'),
    mc('A tese de Eco sobre Tomás de Aquino trata do problema:', ['Estético', 'Político', 'Econômico', 'Cosmológico'], 0, '1956.'),
    mc('Intentio operis é a intenção:', ['Da obra', 'Do autor', 'Do leitor', 'Do editor'], 0, 'Três intenções.'),
    mc('Uma pesquisadora brasileira de Peirce é:', ['Lucia Santaella', 'Cecília Meireles', 'Clarice Lispector', 'Nise da Silveira'], 0, 'PUC-SP.'),
    disc('Entregue as duas leituras defensáveis e a leitura rejeitada, com as passagens do texto.', ['Duas leituras', 'Leitura rejeitada', 'Passagens', 'Critério']),
  ],
  resumo: ['Eco medievalista e semiótico.', 'Semiótica: tudo o que pode mentir.', 'Códigos e produção de signos.', 'Obra aberta tem limites.', 'Três intenções.'],
  referencias: [
    { texto: 'Umberto Eco, Tratado geral de semiótica (1975).' },
    { texto: 'Umberto Eco, Os limites da interpretação (1990).' },
    { texto: 'Umberto Eco, Interpretação e superinterpretação (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as leituras', 'Ler a fonte indicada'],
  revisao: [['Semiótica', 'Tudo o que pode mentir.'], ['Obra aberta', 'Com limites.'], ['Intentio operis', 'Intenção da obra.']],
  avancado: {
    texto: `<h3>Eco e Tomás de Aquino</h3>
<p>No livro sobre o problema estético em Tomás, Eco examina as noções de proporção, integridade e claridade da beleza (Suma Teológica I, q. 39, a. 8) ${tag('fato')}. A volta ao medievo reaparece nos romances e nos ensaios sobre a Idade Média ${tag('fato')}. Uma leitura frequente liga o gosto de Eco pelos limites da interpretação à lógica escolástica de buscar a leitura mais bem apoiada nos textos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 39, a. 8.', livro: 'suma-i' }],
    exercicios: [
      mc('Beleza, em Tomás, envolve proporção, integridade e:', ['Claridade', 'Riqueza', 'Novidade', 'Utilidade'], 0, 'I, q. 39, a. 8.'),
      mc('A passagem está na:', ['Suma Teológica I', 'Suma Teológica III', 'Confissões', 'Poética'], 0, 'Fonte.'),
      mc('A ligação entre Eco e a escolástica é:', ['Uma interpretação', 'Um dogma', 'Uma lei', 'Um fato jurídico'], 0, 'Leitura.'),
      disc('Explique a relação entre o interesse de Eco por Tomás e a sua teoria da interpretação.', ['Tomás', 'Eco', 'Relação', 'Juízo'])],
  },
}),

aula({
  id: 'sb2b-2', titulo: 'Ernst Cassirer: o homem como animal simbólico e as formas simbólicas', duracao: '150 min',
  aprendera: ['Explicar a tese de que o homem vive em um universo simbólico', 'Distinguir signal e símbolo', 'Descrever as formas simbólicas (linguagem, mito, religião, arte, ciência)', 'Relacionar Cassirer a Panofsky e à simbólica de Mário Ferreira dos Santos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O que distingue o ser humano dos outros animais, se todos reagem ao ambiente?</p>
<h3>Quem foi Cassirer</h3>
<p>Ernst Cassirer (1874–1945), filósofo alemão ligado à escola neokantiana de Marburgo, escreveu A filosofia das formas simbólicas (três volumes: 1923, 1925, 1929) e o Ensaio sobre o homem (1944) ${tag('fato')}. Deixou a Alemanha em 1933, depois do início do regime nazista, e ensinou na Suécia e nos Estados Unidos ${tag('fato')}. Em 1929, discutiu com Martin Heidegger em Davos ${tag('fato')}.</p>
<h3>Animal symbolicum</h3>
<p>No Ensaio sobre o homem, Cassirer propõe definir o ser humano não como animal racional, mas como animal simbólico: ele vive não só num universo físico, mas num universo simbólico, feito de linguagem, mito, arte e religião ${tag('fato')}. Distingue sinais, que fazem parte do mundo físico e provocam reações, e símbolos, que pertencem ao mundo humano do sentido ${tag('fato')}.</p>
<h3>As formas simbólicas</h3>
<p>Cassirer chama de formas simbólicas os modos pelos quais o espírito dá forma à experiência: a linguagem, o pensamento mítico, a religião, a arte e a ciência ${tag('fato')}. Cada forma tem sua própria lógica, e nenhuma se reduz às outras ${tag('interpretacao')}. Por isso o mito, para ele, não é um erro da ciência, mas uma forma de compreender o mundo com princípios próprios ${tag('interpretacao')}.</p>
<h3>Relações</h3>
<p>Erwin Panofsky, que trabalhou em Hamburgo na órbita de Cassirer e da biblioteca de Aby Warburg, escreveu A perspectiva como forma simbólica (1927) ${tag('fato')}. Mário Ferreira dos Santos, no Tratado de simbólica (1956), propõe outra teoria do símbolo, de base metafísica; Cassirer parte do sujeito que simboliza, e Mário, do que o símbolo participa do simbolizado ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Animal symbolicum', 'Definição de Cassirer do ser humano como animal que vive em símbolos.'],
    ['Sinal', 'Elemento do mundo físico que provoca uma reação.'],
    ['Símbolo', 'Elemento do mundo humano que carrega sentido.'],
    ['Forma simbólica', 'Modo de organizar a experiência: linguagem, mito, religião, arte, ciência.'],
    ['Neokantismo', 'Corrente que retoma Kant, com centro em Marburgo.'],
  ],
  exemplos: `<p><strong>Sinal e símbolo:</strong> o cachorro treinado reage à campainha do jantar, que funciona como sinal. A criança que aprende que a palavra "água" nomeia a água, mesmo sem sede, entra no mundo dos símbolos. Cassirer cita o caso de Helen Keller, que, ao perceber que a água na mão tinha nome, passou a aprender a linguagem.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Instituto Warburg, criado a partir da biblioteca de Aby Warburg em Hamburgo, foi transferido para Londres em 1933 ${tag('fato')}. <strong>No Brasil:</strong> há tradução brasileira do Ensaio sobre o homem e da Filosofia das formas simbólicas, publicadas pela Martins Fontes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o símbolo distingue o ser humano', tag: 'argumento',
    premissas: ['Os animais respondem a sinais do ambiente.', 'Os seres humanos também usam símbolos, que referem coisas ausentes, passadas, futuras e possíveis.', 'O uso de símbolos permite linguagem, mito, arte, religião e ciência.'],
    conclusao: 'Logo, o símbolo é um traço central do mundo humano, e o ser humano pode ser definido como animal simbólico.',
    nota: 'Cassirer, Ensaio sobre o homem, caps. 2 e 3; a tese é discutida em relação à tradição do "animal racional".',
  },
  objecoes: [
    { objecao: 'Definir o homem como animal simbólico abandona a definição clássica de animal racional.', tag: 'debate',
      resposta: 'O próprio Cassirer diz que a razão é um termo estreito para a variedade das formas culturais, e propõe o símbolo como mais abrangente. Críticos tomistas observam que o uso do símbolo supõe a razão como capacidade de abstrair e universalizar; assim, as duas definições podem ser lidas como complementares. A questão segue em debate.' },
  ],
  aplicacao: `<p>Leia os capítulos 2 e 3 do Ensaio sobre o homem. Escolha duas das formas simbólicas e descreva, para cada uma, um exemplo brasileiro e a lógica própria dela.</p>`,
  fonte: {
    obra: 'Ernst Cassirer, Ensaio sobre o homem, capítulos 2 e 3', link: null,
    orientacao: `<p>Observe a distinção entre sinais e símbolos e o exemplo de Helen Keller.</p>`,
  },
  perguntas: [
    { p: 'Como Cassirer define o homem?', r: 'Como animal simbólico.' },
    { p: 'Qual a diferença entre sinal e símbolo?', r: 'O sinal provoca reação; o símbolo carrega sentido.' },
    { p: 'Quais as formas simbólicas?', r: 'Linguagem, mito, religião, arte e ciência.' },
  ],
  exercicios: [
    mc('Cassirer pertenceu à escola de:', ['Marburgo', 'Frankfurt', 'Viena', 'Paris'], 0, 'Neokantismo.'),
    mc('O Ensaio sobre o homem é de:', ['1944', '1923', '1929', '1956'], 0, 'Data.'),
    mc('Cassirer debateu com Heidegger em:', ['Davos, 1929', 'Berlim, 1933', 'Paris, 1945', 'Viena, 1920'], 0, 'Encontro.'),
    mc('Panofsky escreveu sobre:', ['A perspectiva como forma simbólica', 'A cidade de Deus', 'O contrato social', 'A república'], 0, '1927.'),
    mc('Para Cassirer, o mito é:', ['Uma forma simbólica com lógica própria', 'Um erro da ciência', 'Uma doença', 'Um jogo'], 0, 'Interpretação.'),
    disc('Entregue a descrição das duas formas simbólicas com exemplos brasileiros.', ['Duas formas', 'Exemplos brasileiros', 'Lógica própria', 'Fonte']),
  ],
  resumo: ['Animal simbólico.', 'Sinal e símbolo.', 'Formas simbólicas.', 'Hamburgo e Warburg.', 'Cassirer e Mário Ferreira: dois caminhos.'],
  referencias: [
    { texto: 'Ernst Cassirer, Ensaio sobre o homem (1944).' },
    { texto: 'Ernst Cassirer, A filosofia das formas simbólicas (1923–1929).' },
    { texto: 'Mário Ferreira dos Santos, Tratado de simbólica.', livro: 'mfs-simbolica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição das formas', 'Ler a fonte indicada'],
  revisao: [['Animal simbólico', 'Cassirer.'], ['Sinal', 'Provoca reação.'], ['Símbolo', 'Carrega sentido.']],
  avancado: {
    texto: `<h3>Davos, 1929</h3>
<p>No encontro de Davos, Cassirer e Heidegger discutiram a leitura de Kant e a questão da finitude humana ${tag('fato')}. Cassirer defendia a validade objetiva das formas da cultura; Heidegger, o primado da finitude e da angústia ${tag('interpretacao')}. O debate é frequentemente lido como o ponto de separação entre a filosofia da cultura de matriz neokantiana e a fenomenologia existencial ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ernst Cassirer, A filosofia das formas simbólicas, vol. 1 (introdução).' }],
    exercicios: [
      mc('Em Davos discutiram Cassirer e:', ['Heidegger', 'Husserl', 'Peirce', 'Saussure'], 0, '1929.'),
      mc('Heidegger destacava a:', ['Finitude', 'Objetividade das formas', 'Dedução transcendental', 'Lógica simbólica'], 0, 'Posição.'),
      mc('O debate é lido como:', ['Separação entre duas correntes', 'Fim da filosofia', 'Acordo total', 'Nada'], 0, 'Debate.'),
      disc('Compare as posições de Cassirer e Heidegger em Davos.', ['Cassirer', 'Heidegger', 'Diferença', 'Juízo'])],
  },
}),

aula({
  id: 'sb2b-3', titulo: 'Erwin Panofsky: iconografia e iconologia', duracao: '150 min',
  aprendera: ['Distinguir iconografia e iconologia', 'Aplicar os três níveis de interpretação de Panofsky', 'Usar os controles de interpretação (fontes literárias, história dos tipos, história dos sintomas culturais)', 'Discutir os limites do método'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como passar do que vemos numa imagem ao que ela significa, sem projetar o que queremos ver?</p>
<h3>Quem foi Panofsky</h3>
<p>Erwin Panofsky (1892–1968), historiador da arte alemão, ensinou em Hamburgo, deixou a Alemanha em 1933 e fixou-se nos Estados Unidos, no Instituto de Estudos Avançados de Princeton ${tag('fato')}. Seus livros incluem Estudos de iconologia (1939), Significado nas artes visuais (1955) e Arquitetura gótica e escolástica (1951) ${tag('fato')}.</p>
<h3>Iconografia e iconologia</h3>
<p>A iconografia descreve e classifica as imagens, seus temas e histórias; a iconologia as interpreta como sintomas da cultura que as produziu ${tag('fato')}. Panofsky propõe três níveis ${tag('fato')}:</p>
<ol><li>pré-iconográfico: a descrição do que se vê, formas, cores, gestos, expressões;</li>
<li>iconográfico: o reconhecimento do tema convencional (uma figura com uma roda e uma espada é Santa Catarina; um grupo à mesa, a Última Ceia);</li>
<li>iconológico: a interpretação do significado intrínseco, que revela a postura de uma época, de uma classe ou de uma religião.</li></ol>
<h3>O exemplo do chapéu</h3>
<p>Panofsky explica o método com um gesto: um conhecido nos cumprimenta na rua tirando o chapéu. No primeiro nível, vemos uma mudança de linhas, cores e volumes; no segundo, reconhecemos um cumprimento, convenção da cultura ocidental; no terceiro, o gesto revela a cortesia e uma ideia de relação social, de um tempo e de um lugar ${tag('fato')}.</p>
<h3>Controles</h3>
<p>Para evitar o arbítrio, Panofsky pede que cada nível seja corrigido por um controle: o conhecimento das fontes literárias, a história dos tipos e a história dos sintomas culturais ${tag('fato')}. Aby Warburg (1866–1929) e Émile Mâle, autor de A arte religiosa do século XIII na França (1898), são antecessores diretos ${tag('fato')}.</p>
<h3>Críticas</h3>
<p>Ernst Gombrich criticou a tendência de ver significados ocultos demais, e a tese de Panofsky sobre a relação entre a catedral gótica e a escolástica é discutida por historiadores ${tag('debate')}.</p>`,
  vocabulario: [
    ['Iconografia', 'Descrição e classificação de temas e imagens.'],
    ['Iconologia', 'Interpretação do significado intrínseco de uma imagem como sintoma de uma cultura.'],
    ['Nível pré-iconográfico', 'Descrição do que se vê.'],
    ['Nível iconográfico', 'Reconhecimento do tema convencional.'],
    ['Significado intrínseco', 'O que a obra revela de uma época, de uma classe ou de uma crença.'],
  ],
  exemplos: `<p><strong>Melencolia I, de Dürer (1514):</strong> no nível pré-iconográfico, vemos uma figura alada sentada, com a cabeça apoiada na mão, rodeada de instrumentos de medida, um cão, um polígono, uma ampulheta, um sino. No iconográfico, o título e a tradição reconhecem a melancolia, um dos quatro temperamentos. No iconológico, o estudo de Panofsky e de seus colegas relaciona a gravura às ideias renascentistas sobre melancolia e gênio. Panofsky e Fritz Saxl publicaram esse estudo em 1923, e ele foi retomado em Saturno e melancolia (1964), com Raymond Klibansky.</p>`,
  contexto: `<p><strong>No mundo:</strong> a metodologia de Panofsky tornou-se padrão em história da arte no século XX ${tag('fato')}. <strong>No Brasil:</strong> os doze profetas esculpidos por Aleijadinho em Congonhas, entre 1800 e 1805, são estudados com iconografia e iconologia; Significado nas artes visuais tem edição brasileira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a iconologia precisa de controles', tag: 'argumento',
    premissas: ['Uma imagem pode ser lida de muitas maneiras.', 'Sem fontes e sem história, o intérprete projeta suas próprias ideias.', 'Os controles ligam cada nível a evidências externas à imagem.'],
    conclusao: 'Logo, uma interpretação iconológica só é confiável quando apoiada nas fontes literárias, na história dos tipos e na história da cultura.',
    nota: 'Panofsky, Significado nas artes visuais, introdução.',
  },
  objecoes: [
    { objecao: 'A iconologia sempre acha o que procura: qualquer imagem pode ser lida como símbolo de qualquer coisa.', tag: 'debate',
      resposta: 'É a crítica de Gombrich, em parte justa: a iconologia sem fontes vira especulação. Por isso o método impõe os controles e a prova de que o símbolo era conhecido da época. Onde não há fonte, a leitura deve ser apresentada como hipótese.' },
  ],
  aplicacao: `<p>Escolha uma obra (pintura, escultura ou igreja do seu entorno). Descreva-a nos três níveis, indicando para cada nível a fonte ou o conhecimento que o controla. Onde não houver fonte, escreva "hipótese".</p>`,
  fonte: {
    obra: 'Erwin Panofsky, Significado nas artes visuais, "Iconografia e iconologia: uma introdução ao estudo da arte da Renascença"', link: null,
    orientacao: `<p>Observe o quadro dos três níveis, com o objeto da interpretação, o ato interpretativo e o princípio corretivo de cada um.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre iconografia e iconologia?', r: 'A iconografia descreve e classifica temas; a iconologia interpreta o significado intrínseco.' },
    { p: 'Quais os três níveis?', r: 'Pré-iconográfico, iconográfico e iconológico.' },
    { p: 'Qual o exemplo de Panofsky?', r: 'Um conhecido que nos cumprimenta tirando o chapéu.' },
  ],
  exercicios: [
    mc('Estudos de iconologia é de:', ['1939', '1927', '1955', '1898'], 0, 'Panofsky.'),
    mc('Reconhecer a Última Ceia é nível:', ['Iconográfico', 'Pré-iconográfico', 'Iconológico', 'Técnico'], 0, 'Tema convencional.'),
    mc('Autor de A arte religiosa do século XIII na França:', ['Émile Mâle', 'Panofsky', 'Gombrich', 'Wölfflin'], 0, '1898.'),
    mc('Críticos da iconologia como especulação incluem:', ['Gombrich', 'Cassirer', 'Eco', 'Mâle'], 0, 'Debate.'),
    mc('Os doze profetas de Congonhas são de:', ['Aleijadinho', 'Portinari', 'Di Cavalcanti', 'Victor Meirelles'], 0, '1800–1805.'),
    disc('Entregue a análise da obra nos três níveis, com os controles.', ['Três níveis', 'Controles', 'Hipóteses marcadas', 'Clareza']),
  ],
  resumo: ['Iconografia descreve; iconologia interpreta.', 'Três níveis.', 'Três controles.', 'Warburg e Mâle antes.', 'Críticas de Gombrich.'],
  referencias: [
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
    { texto: 'Erwin Panofsky, Significado nas artes visuais (1955).' },
    { texto: 'Émile Mâle, A arte religiosa do século XIII na França (1898).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Iconografia', 'Descreve.'], ['Iconologia', 'Interpreta.'], ['Três níveis', 'Pré, ico, iconológico.']],
  avancado: {
    texto: `<h3>Arquitetura gótica e escolástica</h3>
<p>Em Arquitetura gótica e escolástica (1951), Panofsky sustentou que a catedral gótica e a suma escolástica compartilham um mesmo princípio de ordenação: a clareza (manifestatio), expressa na divisão em partes e subpartes ${tag('fato')}. A tese liga a arte à mentalidade da época ${tag('interpretacao')}. Historiadores discutem o alcance e o mecanismo dessa ligação, que ele explica pela formação escolar dos construtores e pela proximidade de Paris ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Erwin Panofsky, Arquitetura gótica e escolástica (1951).' }],
    exercicios: [
      mc('A tese liga a catedral gótica à:', ['Escolástica', 'Reforma', 'Revolução Francesa', 'Arte barroca'], 0, '1951.'),
      mc('O princípio comum é a:', ['Clareza (manifestatio)', 'Riqueza', 'Altura', 'Pobreza'], 0, 'Ordenação.'),
      mc('A tese é:', ['Discutida por historiadores', 'Unânime', 'Proibida', 'Dogma'], 0, 'Debate.'),
      disc('Avalie a tese de Panofsky sobre a catedral e a escolástica.', ['Tese', 'Argumento', 'Críticas', 'Juízo'])],
  },
}),

aula({
  id: 'sb2b-4', titulo: 'Analisar símbolos religiosos, históricos, políticos e culturais: contexto e fonte', duracao: '150 min',
  aprendera: ['Aplicar um método de cinco perguntas a qualquer símbolo', 'Mostrar como o sentido de um símbolo muda com o contexto', 'Distinguir fonte primária, tradição e interpretação moderna', 'Recusar significados universais sem prova'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dicionários de símbolos dizem que a coruja significa sabedoria e que o vermelho significa paixão. Isso vale sempre, em toda cultura?</p>
<h3>O método</h3>
<p>Antes de afirmar o que um símbolo significa, responda cinco perguntas ${tag('interpretacao')}:</p>
<ol><li>Quem o usa? (um grupo, uma instituição, um autor.)</li>
<li>Quando e onde? (data e lugar.)</li>
<li>Que fonte diz isso? (texto, documento, imagem datada, e não só "dizem que".)</li>
<li>Como o sentido mudou com o tempo?</li>
<li>Que outra leitura as fontes permitem?</li></ol>
<p>Sem as respostas, o que se tem é hipótese, não resultado.</p>
<h3>Caso religioso: o signo de Constantino</h3>
<p>O imperador Constantino venceu Maxêncio na batalha da Ponte Mílvia, em 312 ${tag('fato')}. As fontes antigas divergem sobre o sinal que o teria guiado: Lactâncio descreve um sonho com um sinal de Cristo nos escudos; Eusébio de Cesareia, na Vida de Constantino, fala de uma visão no céu e do estandarte chamado lábaro, com as letras gregas Chi e Rô, as duas primeiras de "Cristo" ${tag('fato')}. As divergências mostram por que a data e o autor da fonte importam ${tag('interpretacao')}.</p>
<h3>Caso político: os fasces</h3>
<p>Os fasces eram um feixe de varas com um machado, carregado pelos litores diante dos magistrados romanos, como sinal da autoridade para punir ${tag('fato')}. O movimento fascista italiano, fundado por Mussolini em 1919, tomou o nome e o emblema ${tag('fato')}. Mas o mesmo feixe aparece também em edifícios da república dos Estados Unidos, como no Memorial de Lincoln, com o sentido de união e autoridade republicana ${tag('fato')}. O símbolo é o mesmo; o contexto muda o sentido ${tag('interpretacao')}.</p>
<h3>Caso cultural: a suástica</h3>
<p>A suástica é um símbolo muito antigo, presente em tradições da Índia, em que o nome vem do sânscrito svasti, "bem-estar" ${tag('fato')}. O partido nazista a adotou em 1920, e ela foi bandeira nacional alemã a partir de 1935 ${tag('fato')}. Hoje, na Europa e na América, o sentido dominante é o do nazismo; na Índia, em contextos religiosos, mantém o sentido tradicional ${tag('fato')}. A mesma forma tem sentidos opostos conforme o contexto ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Fonte primária', 'Documento ou imagem do próprio período estudado.'],
    ['Contexto', 'Quem usa, quando, onde e para quê.'],
    ['Lábaro', 'Estandarte com o monograma de Cristo (Chi-Rô), associado a Constantino.'],
    ['Fasces', 'Feixe de varas com machado, símbolo de autoridade na Roma antiga.'],
    ['Apropriação', 'Uso de um símbolo por um grupo diferente daquele de origem.'],
  ],
  exemplos: `<p><strong>A bandeira do Brasil:</strong> o lema "Ordem e Progresso" vem do positivismo, e a bandeira foi adotada pelo decreto nº 4, de 19 de novembro de 1889; a Lei nº 5.700, de 1971, estabelece que cada estrela corresponde a um estado ${tag('fato')}. A fonte para cada afirmação é um documento, e não uma tradição oral.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Alemanha proíbe, no Código Penal, o uso de símbolos de organizações nazistas (§ 86a) com exceções para fins educativos ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 7.716/1989, em seu art. 20, § 1º, pune a fabricação e a divulgação da cruz suástica com a finalidade de propaganda do nazismo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que não há significado universal de símbolo sem prova', tag: 'argumento',
    premissas: ['Um símbolo só significa para quem o interpreta numa cultura e em um tempo.', 'Culturas e tempos diferentes podem atribuir sentidos diferentes, e até opostos, à mesma forma.', 'Afirmar um sentido universal exigiria prová-lo em todas as culturas e épocas.'],
    conclusao: 'Logo, afirmações universais sobre símbolos precisam de prova; sem ela, o sentido deve ser sempre situado.',
    nota: 'O método segue Panofsky (controles) e Eco (limites da interpretação).',
  },
  objecoes: [
    { objecao: 'Existem símbolos universais: a luz e a água aparecem em quase todas as culturas.', tag: 'debate',
      resposta: 'Há recorrências de imagens, e estudiosos como Eliade as destacam. Mas o sentido que cada tradição dá à luz ou à água varia, e a recorrência de uma imagem não prova identidade de sentido. O método pede mostrar, caso a caso, o texto que dá o sentido.' },
  ],
  aplicacao: `<p>Escolha um símbolo religioso, um político e um cultural que apareçam na sua cidade. Para cada um, responda as cinco perguntas, citando ao menos uma fonte datada, e marque como "hipótese" o que não tiver fonte.</p>`,
  fonte: {
    obra: 'Eusébio de Cesareia, Vida de Constantino, livro I, caps. 28 a 31', link: null,
    orientacao: `<p>Compare com o relato de Lactâncio, Sobre a morte dos perseguidores, cap. 44: observe o que muda entre as duas fontes e o que cada uma pretende.</p>`,
  },
  perguntas: [
    { p: 'Quais as cinco perguntas do método?', r: 'Quem usa, quando e onde, que fonte, como mudou, que outra leitura.' },
    { p: 'Em que ano o partido nazista adotou a suástica?', r: '1920.' },
    { p: 'O que são os fasces?', r: 'Feixe de varas com machado, símbolo de autoridade romana.' },
  ],
  exercicios: [
    mc('A batalha da Ponte Mílvia foi em:', ['312', '476', '800', '1054'], 0, 'Constantino.'),
    mc('A palavra suástica vem do sânscrito svasti, que significa:', ['Bem-estar', 'Guerra', 'Fogo', 'Poder'], 0, 'Origem.'),
    mc('O lábaro tem as letras:', ['Chi e Rô', 'Alfa e Ômega', 'I e H S', 'Tau'], 0, 'Monograma.'),
    mc('Os fasces aparecem também no Memorial de Lincoln com sentido de:', ['União e autoridade republicana', 'Fascismo', 'Guerra', 'Realeza'], 0, 'Contexto.'),
    mc('O decreto da bandeira do Brasil é o nº:', ['4, de 19/11/1889', '1, de 1822', '5.700', '7.716'], 0, 'Fonte.'),
    disc('Entregue a análise dos três símbolos pelas cinco perguntas, com fontes e hipóteses marcadas.', ['Cinco perguntas', 'Fontes', 'Hipóteses', 'Clareza']),
  ],
  resumo: ['Cinco perguntas.', 'O mesmo símbolo, sentidos diferentes.', 'Fontes divergem.', 'Sem significado universal sem prova.', 'Hipótese marcada.'],
  referencias: [
    { texto: 'Eusébio de Cesareia, Vida de Constantino.' },
    { texto: 'Mircea Eliade, Imagens e símbolos (1952).' },
    { texto: 'Governo Provisório da República, Decreto nº 4, de 19 de novembro de 1889.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos três símbolos', 'Ler a fonte indicada'],
  revisao: [['Cinco perguntas', 'Quem, quando, fonte, mudança, alternativa.'], ['Suástica', '1920, nazismo.'], ['Fasces', 'Autoridade romana.']],
  avancado: {
    texto: `<h3>A invenção das tradições</h3>
<p>Eric Hobsbawm e Terence Ranger, em A invenção das tradições (1983), mostram que muitos símbolos tidos por antigos foram criados ou reformulados em época recente ${tag('fato')}. O exemplo mais citado é o dos tartãs (padrões xadrez) associados a cada clã escocês, sistematizados no século XIX ${tag('fato')}. O livro pede cautela com a afirmação de que um símbolo é "imemorial" ${tag('interpretacao')}. Ele é discutido por quem acha que o termo "invenção" exagera a descontinuidade ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Eric Hobsbawm e Terence Ranger (orgs.), A invenção das tradições (1983).' }],
    exercicios: [
      mc('A invenção das tradições é de:', ['1983', '1952', '1887', '1971'], 0, 'Hobsbawm e Ranger.'),
      mc('Os tartãs associados aos clãs escoceses foram sistematizados no século:', ['XIX', 'XII', 'V', 'XXI'], 0, 'Exemplo.'),
      mc('O livro pede cautela com o que é:', ['Imemorial', 'Escrito', 'Datado', 'Citado'], 0, 'Crítica.'),
      disc('Aplique a tese de Hobsbawm e Ranger a um símbolo que parece antigo.', ['Símbolo', 'Fontes', 'Datação', 'Juízo'])],
  },
}),

avaliacao('sb2b-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre Eco, Cassirer, Panofsky e o método de análise de símbolos, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua análise dos três símbolos pelas cinco perguntas.</li></ul>`,
[
  disc('Compare Peirce, Saussure, Eco e Cassirer: o que cada um entende por signo e por símbolo, e o que cada um acrescenta aos outros.', ['Os quatro autores', 'Signo e símbolo', 'Comparação', 'Fontes']),
  disc('Escolha um símbolo e mostre, com as cinco perguntas e os níveis de Panofsky, como o sentido muda conforme o contexto, marcando como hipótese o que não tem fonte.', ['Cinco perguntas', 'Níveis de Panofsky', 'Contexto', 'Hipóteses marcadas']),
]),
];
