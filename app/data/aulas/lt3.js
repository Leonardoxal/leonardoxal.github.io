// Literatura III — correntes críticas e grandes debates (etapas 6 e 7 do percurso de Literatura).
// Crítica histórica, formalismo e Nova Crítica; crítica sociológica e humanista; cânone, autor e leitor; literatura e moral.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lt3-1', titulo: 'Crítica histórica, formalismo e Nova Crítica', duracao: '150 min',
  aprendera: ['Caracterizar a crítica histórico-biográfica', 'Explicar o estranhamento do formalismo russo', 'Explicar a "falácia intencional" da Nova Crítica', 'Avaliar contribuições e limites dessas correntes'],
  prereq: ['Literatura II (módulo LT2)'],
  explicacao: `
<h3>O problema</h3>
<p>Para entender um poema, devemos estudar a vida do poeta, a sociedade de seu tempo ou apenas o texto? As correntes críticas dão respostas diferentes.</p>
<h3>Crítica histórico-biográfica</h3>
<p>No século XIX, críticos como Sainte-Beuve explicavam a obra pela vida do autor, e Hippolyte Taine pela raça, pelo meio e pelo momento ${tag('fato')}. Essa crítica trouxe informação preciosa, mas arriscava reduzir a obra a documento biográfico ${tag('interpretacao')}.</p>
<h3>Formalismo russo</h3>
<p>Os formalistas russos, no início do século XX, concentraram-se no que torna um texto literário: a "literariedade" ${tag('fato')}. Viktor Chklóvski, em "A arte como procedimento" (1917), afirmou que a arte produz estranhamento: desautomatiza a percepção e faz ver as coisas de novo ${tag('fato')}.</p>
<h3>Nova Crítica</h3>
<p>A Nova Crítica anglo-americana propôs a leitura atenta do texto como objeto autônomo ${tag('fato')}. W. K. Wimsatt e Monroe Beardsley chamaram de "falácia intencional" (1946) o erro de julgar o poema pela intenção do autor, em vez do que o texto efetivamente realiza ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Essas correntes ensinaram a ler com precisão a forma; seus críticos apontam que isolar o texto do contexto e do autor também empobrece a leitura ${tag('debate')}.</p>`,
  vocabulario: [
    ['Crítica biográfica', 'Interpretação da obra pela vida do autor.'],
    ['Literariedade', 'O que torna um texto literário (formalismo russo).'],
    ['Estranhamento', 'Desautomatização da percepção pela arte (Chklóvski).'],
    ['Nova Crítica', 'Corrente de leitura atenta do texto como objeto autônomo.'],
    ['Falácia intencional', 'Erro de julgar a obra pela intenção declarada do autor.'],
  ],
  exemplos: `<p><strong>Estranhamento em Guimarães Rosa:</strong> ao escrever "nonada" ou inventar palavras como "desinfeliz", Rosa faz o leitor parar e perceber a língua como se fosse nova. É exatamente o que Chklóvski chamava de estranhamento: a arte que tira as coisas do automatismo.</p>`,
  contexto: `<p><strong>No mundo:</strong> o formalismo russo influenciou o estruturalismo e a narratologia ${tag('fato')}. <strong>No Brasil:</strong> a leitura atenta do texto influenciou o ensino de literatura nas universidades a partir dos anos 1950 e 1960 ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o texto tem primazia na interpretação', tag: 'argumento',
    premissas: ['A obra existe como texto, acessível ao leitor.', 'A intenção do autor nem sempre é conhecida e pode não ter sido realizada.', 'O que o texto efetivamente diz é o critério público para avaliar interpretações.'],
    conclusao: 'Logo, a interpretação deve apoiar-se primeiro no texto.',
    nota: 'Isso não exclui o contexto e a biografia, que ajudam a entender o texto.',
  },
  objecoes: [
    { objecao: 'A biografia do autor é irrelevante para entender a obra.', tag: 'debate',
      resposta: 'O texto tem primazia, mas a biografia e o contexto podem esclarecer referências, ironias e sentidos que o leitor de outra época não perceberia. O erro é reduzir a obra à vida, não usar a vida para iluminar a obra.' },
  ],
  aplicacao: `<p>Inicie o quadro comparativo da etapa: leia um poema segundo a crítica biográfica e segundo a Nova Crítica, e compare o que cada leitura revela.</p>`,
  fonte: {
    obra: 'Viktor Chklóvski, "A arte como procedimento" (1917); W. K. Wimsatt e M. Beardsley, "A falácia intencional" (1946)', link: null,
    orientacao: `<p>Em Chklóvski, a noção de estranhamento. Em Wimsatt e Beardsley, o argumento contra a intenção como critério.</p>`,
  },
  perguntas: [
    { p: 'O que é estranhamento para Chklóvski?', r: 'A desautomatização da percepção pela arte.' },
    { p: 'O que é falácia intencional?', r: 'Julgar a obra pela intenção do autor em vez do que o texto realiza.' },
    { p: 'Que fatores Taine usava para explicar a obra?', r: 'Raça, meio e momento.' },
  ],
  exercicios: [
    mc('"A arte como procedimento" é de:', ['Chklóvski', 'Taine', 'Wimsatt', 'Candido'], 0, '1917.'),
    mc('A falácia intencional foi formulada em:', ['1917', '1946', '1967', '1994'], 1, 'Nova Crítica.'),
    mc('Explicar a obra pela vida do autor é crítica:', ['Formalista', 'Biográfica', 'Sociológica', 'Estruturalista'], 1, 'Sainte-Beuve.'),
    mc('O que torna um texto literário é a:', ['Literariedade', 'Biografia', 'Venda', 'Tradução'], 0, 'Formalismo.'),
    mc('Uma crítica à Nova Crítica é isolar o texto do:', ['Contexto', 'Leitor apenas', 'Papel', 'Título'], 0, 'Debate.'),
    disc('Leia um poema pela crítica biográfica e pela Nova Crítica e compare.', ['Leitura biográfica', 'Leitura textual', 'Comparação', 'Citações']),
  ],
  resumo: ['Sainte-Beuve e Taine.', 'Formalismo russo: literariedade, estranhamento (1917).', 'Nova Crítica: leitura atenta.', 'Falácia intencional (1946).', 'Texto em primeiro lugar, sem excluir contexto.'],
  referencias: [
    { texto: 'Viktor Chklóvski, "A arte como procedimento" (1917).' },
    { texto: 'W. K. Wimsatt e Monroe Beardsley, "A falácia intencional" (1946).' },
    { texto: 'C. S. Lewis, Um experimento na crítica literária (1961).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['Estranhamento', 'Chklóvski.'], ['Falácia intencional', '1946.'], ['Taine', 'Raça, meio, momento.']],
  avancado: {
    texto: `<h3>A morte do autor</h3>
<p>Roland Barthes, em "A morte do autor" (1967), propôs que o sentido de um texto nasce na leitura, e não na intenção do autor ${tag('fato')}. A tese foi influente e muito criticada; autores como E. D. Hirsch defenderam a intenção autoral como critério de validade da interpretação ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Roland Barthes, "A morte do autor" (1967).' }],
    exercicios: [
      mc('"A morte do autor" é de:', ['Barthes', 'Chklóvski', 'Lewis', 'Candido'], 0, '1967.'),
      mc('Para Barthes, o sentido nasce na:', ['Intenção do autor', 'Leitura', 'Biografia', 'Gramática'], 1, 'Tese.'),
      mc('Defendeu a intenção autoral como critério:', ['E. D. Hirsch', 'Barthes', 'Taine', 'Chklóvski'], 0, 'Debate.'),
      disc('Avalie a tese da morte do autor com um exemplo de obra.', ['Tese', 'Exemplo', 'Objeções', 'Avaliação'])],
  },
}),

aula({
  id: 'lt3-2', titulo: 'Crítica sociológica e crítica humanista e cristã', duracao: '150 min',
  aprendera: ['Caracterizar a crítica sociológica', 'Conhecer a crítica de Antonio Candido', 'Conhecer a interpretação figural de Auerbach', 'Conhecer a crítica humanista e cristã'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A literatura reflete a sociedade? Ou revela algo do homem que ultrapassa qualquer sociedade? Duas famílias de crítica respondem de modos diferentes.</p>
<h3>Crítica sociológica</h3>
<p>A crítica sociológica estuda a relação entre a obra e a sociedade: classes, instituições, público ${tag('fato')}. Georg Lukács, de orientação marxista, analisou o romance como forma da sociedade burguesa ${tag('fato')}.</p>
<h3>Antonio Candido</h3>
<p>Antonio Candido, em Literatura e sociedade (1965), defendeu que os fatores sociais devem ser estudados como elementos internos da estrutura da obra, e não como simples causa externa ${tag('fato')}. Em "Dialética da malandragem" (1970), leu as Memórias de um sargento de milícias à luz da sociedade brasileira ${tag('fato')}.</p>
<h3>Auerbach</h3>
<p>Erich Auerbach, em Mimesis (1946), estudou a representação da realidade de Homero a Virginia Woolf e mostrou como o relato bíblico e a interpretação figural cristã — em que um fato prefigura outro, como Isaac e Cristo — transformaram a literatura ocidental ${tag('fato')}.</p>
<h3>Crítica humanista e cristã</h3>
<p>Autores como Maritain, C. S. Lewis, T. S. Eliot e, no Brasil, Alceu Amoroso Lima leram a literatura atentos ao que ela revela sobre a pessoa, o bem e a graça ${tag('fato')}. Essa crítica valoriza a forma e o contexto, mas pergunta também pela verdade humana e espiritual da obra ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Crítica sociológica', 'Estudo da relação entre obra e sociedade.'],
    ['Fator social interno', 'Aspecto social que se torna parte da estrutura da obra (Candido).'],
    ['Interpretação figural', 'Leitura em que um fato prefigura outro (Auerbach).'],
    ['Crítica humanista', 'Crítica atenta ao que a obra revela sobre a pessoa.'],
    ['Malandragem', 'Tipo social analisado por Candido na literatura brasileira.'],
  ],
  exemplos: `<p><strong>Uma cicatriz de Ulisses:</strong> Auerbach abre Mimesis comparando a cena em que a ama reconhece Ulisses pela cicatriz, em que tudo é explicado em primeiro plano, com o sacrifício de Isaac, em que quase tudo fica em silêncio, "carregado de fundo". Duas maneiras de narrar, duas visões da realidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> Mimesis foi escrito por Auerbach no exílio em Istambul, durante a guerra ${tag('fato')}. <strong>No Brasil:</strong> Antonio Candido formou gerações de críticos na Universidade de São Paulo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a obra não é mero reflexo da sociedade', tag: 'argumento',
    premissas: ['Obras da mesma sociedade e época diferem enormemente em valor e sentido.', 'Grandes obras falam a leitores de sociedades muito diferentes.', 'Logo, há na obra algo que não se reduz às condições sociais.'],
    conclusao: 'Logo, a sociedade condiciona a obra, mas não a explica totalmente.',
    nota: 'Candido formulou isso ao tratar o social como elemento interno, não como causa total.',
  },
  objecoes: [
    { objecao: 'A crítica cristã é só propaganda religiosa.', tag: 'debate',
      resposta: 'Há crítica de baixo nível em qualquer corrente. Mas Auerbach, Lewis ou Eliot fizeram crítica rigorosa, atenta à forma e ao contexto, e iluminaram obras que leitores de qualquer crença reconhecem. Perguntar pela verdade espiritual de uma obra é legítimo, desde que com rigor.' },
  ],
  aplicacao: `<p>Complete o quadro comparativo da etapa: leia o mesmo poema ou conto segundo a crítica sociológica e segundo a crítica humanista e cristã, comparando os resultados.</p>`,
  fonte: {
    obra: 'Erich Auerbach, Mimesis (1946), cap. 1 ("A cicatriz de Ulisses"); Antonio Candido, Literatura e sociedade (1965), cap. 1', link: null,
    orientacao: `<p>Em Auerbach, a comparação entre Homero e a Bíblia. Em Candido, a relação entre fator social e estrutura.</p>`,
  },
  perguntas: [
    { p: 'O que propõe Candido sobre os fatores sociais?', r: 'Que sejam estudados como elementos internos da estrutura da obra.' },
    { p: 'O que é interpretação figural?', r: 'Leitura em que um fato prefigura outro.' },
    { p: 'Que cenas Auerbach compara no início de Mimesis?', r: 'A cicatriz de Ulisses e o sacrifício de Isaac.' },
  ],
  exercicios: [
    mc('Literatura e sociedade é de:', ['Candido', 'Lukács', 'Auerbach', 'Alceu'], 0, '1965.'),
    mc('Mimesis é de:', ['1939', '1946', '1961', '1970'], 1, 'Auerbach.'),
    mc('"Dialética da malandragem" analisa:', ['Memórias de um sargento de milícias', 'Dom Casmurro', 'Iracema', 'Os Lusíadas'], 0, 'Candido.'),
    mc('Lukács tinha orientação:', ['Marxista', 'Tomista', 'Formalista', 'Romântica'], 0, 'Sociológica.'),
    mc('A interpretação figural vê Isaac como figura de:', ['Moisés', 'Cristo', 'Davi', 'Ulisses'], 1, 'Prefiguração.'),
    disc('Leia uma obra pela crítica sociológica e pela crítica humanista e cristã e compare.', ['Leitura sociológica', 'Leitura humanista', 'Comparação', 'Citações']),
  ],
  resumo: ['Crítica sociológica; Lukács.', 'Candido: social como elemento interno (1965).', 'Auerbach: Mimesis (1946); interpretação figural.', 'Crítica humanista e cristã.', 'Obra condicionada, não reduzida.'],
  referencias: [
    { texto: 'Antonio Candido, Literatura e sociedade (1965).' },
    { texto: 'Erich Auerbach, Mimesis (1946).' },
    { texto: 'Jacques Maritain, Arte e escolástica (1920).', livro: 'maritain-arte' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['Candido', 'Social interno.'], ['Auerbach', 'Figural.'], ['Humanista', 'Pessoa e verdade.']],
  avancado: {
    texto: `<h3>Os quatro sentidos da Escritura e a literatura</h3>
<p>A tradição medieval distinguia na Escritura o sentido literal e três espirituais — alegórico, moral e anagógico (CIC 115–118) ${tag('doutrina')}. Dante, na Carta a Cangrande (atribuída a ele), aplica esses sentidos à leitura da Comédia ${tag('fato')}. Essa hermenêutica influenciou a leitura simbólica da literatura ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica (1992), §§ 115–119.', livro: 'cic' }],
    exercicios: [
      mc('Os sentidos espirituais são:', ['Alegórico, moral e anagógico', 'Literal e figurado', 'Histórico e político', 'Só um'], 0, 'CIC 117.'),
      mc('A Carta a Cangrande é atribuída a:', ['Dante', 'Petrarca', 'Tomás', 'Agostinho'], 0, 'Comédia.'),
      mc('O sentido anagógico refere-se:', ['À moral', 'Às realidades eternas', 'À gramática', 'À história'], 1, 'Escatologia.'),
      disc('Aplique os quatro sentidos a um episódio da Divina Comédia.', ['Literal', 'Alegórico', 'Moral', 'Anagógico'])],
  },
}),

aula({
  id: 'lt3-3', titulo: 'O cânone literário; autor, obra e leitor', duracao: '150 min',
  aprendera: ['Explicar o que é o cânone literário', 'Expor o debate sobre o cânone', 'Conhecer a estética da recepção', 'Equilibrar os papéis de autor, texto e leitor'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que estudamos Camões e Machado e não outros autores? Quem decide o que é "clássico"? E quem dá o sentido a uma obra: o autor, o texto ou o leitor?</p>
<h3>O cânone</h3>
<p>Cânone literário é o conjunto de obras consideradas de valor exemplar, ensinadas e relidas ao longo do tempo ${tag('fato')}. Harold Bloom, em O cânone ocidental (1994), defendeu o critério estético como base do cânone e criticou leituras que subordinam a literatura a agendas políticas ${tag('fato')}.</p>
<h3>Críticas ao cânone</h3>
<p>Críticos apontam que o cânone excluiu historicamente mulheres, minorias e literaturas não europeias, e propõem ampliá-lo ${tag('fato')}. Outros respondem que ampliar é legítimo, mas que o critério deve continuar sendo a qualidade e não a representatividade ${tag('debate')}.</p>
<h3>Estética da recepção</h3>
<p>Hans Robert Jauss (1967) propôs estudar a história da literatura a partir da recepção das obras pelos leitores e de seu "horizonte de expectativas" ${tag('fato')}. Wolfgang Iser estudou os "vazios" do texto, que o leitor preenche ${tag('fato')}.</p>
<h3>Equilíbrio</h3>
<p>O autor cria, o texto fixa e o leitor atualiza o sentido; uma interpretação adequada respeita o texto e o contexto do autor, e se enriquece com a experiência do leitor ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Cânone', 'Conjunto de obras consideradas exemplares.'],
    ['Clássico', 'Obra que continua a ser relida e a falar a novas gerações.'],
    ['Estética da recepção', 'Estudo da literatura a partir dos leitores.'],
    ['Horizonte de expectativas', 'Conjunto de pressupostos com que o público lê uma obra (Jauss).'],
    ['Vazios do texto', 'Lacunas que o leitor preenche (Iser).'],
  ],
  exemplos: `<p><strong>Maria Firmina dos Reis:</strong> seu romance Úrsula (1859), uma das primeiras obras abolicionistas brasileiras escritas por mulher negra, ficou esquecido por muito tempo e foi redescoberto no século XX. O caso mostra como o cânone pode ser revisto — e que a revisão se sustenta melhor quando a obra tem valor próprio, além de importância histórica.</p>`,
  contexto: `<p><strong>No mundo:</strong> listas de leituras obrigatórias em universidades são objeto de debate frequente ${tag('fato')}. <strong>No Brasil:</strong> vestibulares publicam listas de obras de leitura obrigatória ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o cânone se justifica pela qualidade', tag: 'argumento',
    premissas: ['O tempo de leitura é limitado.', 'Algumas obras sustentam releituras, formam leitores e dialogam com as seguintes de modo excepcional.', 'Essas obras merecem prioridade na formação.'],
    conclusao: 'Logo, um cânone baseado na qualidade é útil, ainda que deva ser revisto com justiça.',
    nota: 'A revisão do cânone é parte de sua vida, não sua negação.',
  },
  objecoes: [
    { objecao: 'O cânone é só a imposição do gosto de uma elite.', tag: 'debate',
      resposta: 'Fatores sociais influenciaram a formação do cânone, e exclusões injustas existiram. Mas muitas obras canônicas foram reconhecidas por leitores de todas as classes e culturas ao longo de séculos. O desafio é corrigir exclusões sem abandonar critérios de qualidade.' },
  ],
  aplicacao: `<p>Proponha uma lista de dez obras para um curso básico de literatura em língua portuguesa, justificando cada escolha por critérios explícitos (qualidade, influência, representatividade de períodos).</p>`,
  fonte: {
    obra: 'Harold Bloom, O cânone ocidental (1994), cap. 1; Hans Robert Jauss, "A história da literatura como provocação à teoria literária" (1967)', link: null,
    orientacao: `<p>Compare o critério estético de Bloom com a perspectiva da recepção de Jauss.</p>`,
  },
  perguntas: [
    { p: 'O que é o cânone literário?', r: 'O conjunto de obras consideradas exemplares.' },
    { p: 'O que é horizonte de expectativas?', r: 'O conjunto de pressupostos com que o público lê uma obra.' },
    { p: 'O que defendeu Bloom em 1994?', r: 'O critério estético como base do cânone.' },
  ],
  exercicios: [
    mc('O cânone ocidental é de:', ['Bloom', 'Jauss', 'Iser', 'Candido'], 0, '1994.'),
    mc('A estética da recepção é associada a:', ['Jauss', 'Taine', 'Chklóvski', 'Dante'], 0, '1967.'),
    mc('Os "vazios do texto" são conceito de:', ['Iser', 'Bloom', 'Lewis', 'Auerbach'], 0, 'Leitura.'),
    mc('Úrsula, de Maria Firmina dos Reis, é de:', ['1859', '1881', '1922', '1956'], 0, 'Redescoberta.'),
    mc('Uma interpretação adequada respeita:', ['Só o leitor', 'Texto, contexto e experiência do leitor', 'Só o autor', 'Nada'], 1, 'Equilíbrio.'),
    disc('Proponha dez obras para um curso de literatura em língua portuguesa, com critérios.', ['Lista', 'Critérios', 'Justificativas', 'Equilíbrio']),
  ],
  resumo: ['Cânone e clássico.', 'Bloom (1994): critério estético.', 'Críticas e revisões do cânone.', 'Jauss e Iser: recepção.', 'Autor, texto, leitor.'],
  referencias: [
    { texto: 'Harold Bloom, O cânone ocidental (1994).' },
    { texto: 'Hans Robert Jauss, "A história da literatura como provocação à teoria literária" (1967).' },
    { texto: 'Italo Calvino, Por que ler os clássicos (1991).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a lista justificada', 'Ler as fontes indicadas'],
  revisao: [['Bloom', 'Estético.'], ['Jauss', 'Recepção.'], ['Clássico', 'Sempre relido.']],
  avancado: {
    texto: `<h3>Por que ler os clássicos</h3>
<p>Italo Calvino, no ensaio que dá título ao livro Por que ler os clássicos (1991), propôs várias definições, entre elas a de que um clássico é um livro que nunca terminou de dizer aquilo que tinha para dizer ${tag('fato')}. Ele insistia que os clássicos se leem por prazer e por necessidade pessoal, não por dever ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Italo Calvino, Por que ler os clássicos (1991).' }],
    exercicios: [
      mc('Por que ler os clássicos é de:', ['Calvino', 'Bloom', 'Lewis', 'Eco'], 0, '1991.'),
      mc('Para Calvino, um clássico nunca terminou de:', ['Ser vendido', 'Dizer o que tinha para dizer', 'Ser traduzido', 'Ser escrito'], 1, 'Definição.'),
      mc('Calvino defendia ler clássicos por:', ['Dever escolar apenas', 'Prazer e necessidade pessoal', 'Prestígio', 'Nada'], 1, 'Interpretação.'),
      disc('Escolha uma obra que seja um "clássico" para você e justifique com as definições de Calvino.', ['Obra', 'Definições', 'Justificativa', 'Experiência'])],
  },
}),

aula({
  id: 'lt3-4', titulo: 'Literatura e moral: liberdade, formação e juízo', duracao: '150 min',
  aprendera: ['Conhecer a crítica de Platão aos poetas e a resposta de Aristóteles', 'Conhecer episódios de censura e de defesa da literatura', 'Distinguir juízo estético e juízo moral', 'Formular critérios para a formação literária de jovens'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Uma obra-prima pode ser moralmente perigosa? Deve-se proibir livros? E como formar leitores sem censura nem permissividade?</p>
<h3>Platão e Aristóteles</h3>
<p>Na República, Platão critica os poetas por apresentarem os deuses de modo indigno e por excitarem paixões, e propõe excluir da cidade ideal a poesia imitativa que não sirva ao bem (livros II, III e X) ${tag('fato')}. Aristóteles, na Poética, valoriza a imitação como fonte de conhecimento e prazer e fala da catarse ${tag('fato')}.</p>
<h3>Censura e liberdade</h3>
<p>A Igreja manteve o Índice dos livros proibidos a partir de 1559; ele deixou de ter força de lei eclesiástica em 1966, permanecendo seu valor moral como orientação ${tag('fato')}. Em 1857, Flaubert foi processado na França por Madame Bovary e absolvido ${tag('fato')}. A Constituição brasileira garante a livre expressão da atividade intelectual e artística, independentemente de censura (art. 5º, IX) ${tag('fato')}.</p>
<h3>Distinções</h3>
<p>O juízo estético avalia se a obra é bem feita; o juízo moral, o bem ou mal que ela apresenta e promove ${tag('argumento')}. Uma obra pode representar o mal sem aprová-lo — Dante e Dostoiévski o fazem ${tag('argumento')}. Maritain distingue a autonomia da arte em seu domínio e sua subordinação à moral no uso humano ${tag('interpretacao')}.</p>
<h3>Formação</h3>
<p>A prudência pede obras adequadas à idade e à maturidade, acompanhamento e conversa, mais que proibições sem explicação ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Poesia imitativa', 'Poesia que representa ações e caracteres (criticada por Platão).'],
    ['Índice dos livros proibidos', 'Lista eclesiástica de livros proibidos (1559–1966).'],
    ['Juízo estético', 'Avaliação da qualidade artística da obra.'],
    ['Juízo moral', 'Avaliação do bem ou mal que a obra apresenta e promove.'],
    ['Representar e aprovar', 'Distinção entre mostrar o mal e defendê-lo.'],
  ],
  exemplos: `<p><strong>Crime e castigo:</strong> o romance de Dostoiévski mostra um assassinato por dentro, com a lógica do assassino. Não é apologia do crime: acompanha a culpa, o sofrimento e a conversão de Raskólnikov. Representar o mal com verdade pode ser profundamente moral. Já uma obra que torna o mal sedutor sem consequência é outra coisa.</p>`,
  contexto: `<p><strong>No mundo:</strong> Flannery O'Connor, escritora católica americana, defendeu retratar a violência e o grotesco para tornar visível a graça ${tag('interpretacao')}. <strong>No Brasil:</strong> durante o regime militar houve censura prévia a livros, peças e canções ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que representar o mal não é aprová-lo', tag: 'argumento',
    premissas: ['A literatura imita ações humanas, e entre elas estão as más.', 'Mostrar o mal com suas causas e consequências ajuda a compreendê-lo e rejeitá-lo.', 'A aprovação depende do modo como a obra apresenta o mal, não de sua presença.'],
    conclusao: 'Logo, uma obra pode representar o mal e ser moralmente valiosa.',
    nota: 'O critério é o olhar da obra sobre o mal, e não a ausência dele.',
  },
  objecoes: [
    { objecao: 'A arte não tem nada a ver com moral.', tag: 'debate',
      resposta: 'A arte tem autonomia em seu domínio técnico, mas obras afetam a imaginação e os afetos dos leitores, e o homem que as produz e lê é um sujeito moral. Separar totalmente arte e moral ignora isso; confundi-las ignora a especificidade da arte. A distinção de Maritain ajuda.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa: a literatura deve ser julgada também por critérios morais? Responda com Platão, Aristóteles e um crítico moderno, distinguindo juízo estético, moral e gosto pessoal.</p>`,
  fonte: {
    obra: 'Platão, A República, livros II, III e X; Aristóteles, Poética, cap. 4; Constituição de 1988, art. 5º, IX', link: null,
    orientacao: `<p>Compare a crítica de Platão à poesia com a valorização da imitação por Aristóteles, e leia a garantia constitucional.</p>`,
  },
  perguntas: [
    { p: 'Por que Platão critica os poetas?', r: 'Por apresentarem os deuses de modo indigno e excitarem paixões.' },
    { p: 'Até quando o Índice teve força de lei eclesiástica?', r: 'Até 1966.' },
    { p: 'Qual a diferença entre juízo estético e moral?', r: 'O estético avalia a qualidade artística; o moral, o bem ou mal apresentado e promovido.' },
  ],
  exercicios: [
    mc('A crítica aos poetas está na República, livros:', ['I e IV', 'II, III e X', 'V e VI', 'VII e VIII'], 1, 'Platão.'),
    mc('O Índice dos livros proibidos começou em:', ['1517', '1559', '1857', '1966'], 1, 'Igreja.'),
    mc('Flaubert foi processado por:', ['Madame Bovary', 'Salammbô', 'Educação sentimental', 'Bouvard'], 0, '1857.'),
    mc('A livre expressão artística está na CF, art. 5º, inciso:', ['IV', 'IX', 'XXXV', 'LVII'], 1, 'Liberdade.'),
    mc('Representar o mal:', ['É sempre aprová-lo', 'Pode ser moralmente valioso', 'É proibido', 'É irrelevante'], 1, 'Argumento.'),
    disc('Escreva o ensaio sobre literatura e moral com Platão, Aristóteles e um crítico moderno.', ['Platão', 'Aristóteles', 'Crítico moderno', 'Distinções']),
  ],
  resumo: ['Platão contra os poetas; Aristóteles e a imitação.', 'Índice (1559–1966); Flaubert (1857).', 'CF art. 5º, IX.', 'Juízo estético × moral.', 'Representar ≠ aprovar.'],
  referencias: [
    { texto: 'Platão, A República.', livro: 'platao-republica' },
    { texto: 'Aristóteles, Poética.', livro: 'aristoteles-poetica' },
    { texto: 'Jacques Maritain, Arte e escolástica (1920).', livro: 'maritain-arte' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler as fontes indicadas'],
  revisao: [['República X', 'Poetas.'], ['1966', 'Fim do Índice.'], ['Representar', 'Não é aprovar.']],
  avancado: {
    texto: `<h3>Tolkien e a fantasia</h3>
<p>No ensaio "Sobre histórias de fadas" (1947), J. R. R. Tolkien defendeu a fantasia como "subcriação" humana, que imita o ato criador de Deus, e falou da "eucatástrofe", a reviravolta feliz que dá um vislumbre da alegria do Evangelho ${tag('fato')}. A noção ajuda a pensar a literatura de imaginação na perspectiva cristã ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'J. R. R. Tolkien, "Sobre histórias de fadas" (1947).' }],
    exercicios: [
      mc('"Sobre histórias de fadas" é de:', ['Lewis', 'Tolkien', 'Chesterton', 'Calvino'], 1, '1947.'),
      mc('Para Tolkien, a fantasia é:', ['Fuga inútil', 'Subcriação', 'Mentira', 'Propaganda'], 1, 'Criação.'),
      mc('A reviravolta feliz chama-se:', ['Catarse', 'Eucatástrofe', 'Peripécia', 'Hamartia'], 1, 'Tolkien.'),
      disc('Identifique uma eucatástrofe numa obra e explique seu sentido segundo Tolkien.', ['Obra', 'Cena', 'Eucatástrofe', 'Sentido'])],
  },
}),

avaliacao('lt3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes críticas e os grandes debates literários, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo de correntes críticas.</li><li>Releia seu ensaio sobre literatura e moral.</li></ul>`,
[
  disc('Leia um mesmo poema ou conto segundo duas correntes críticas estudadas e compare o que cada leitura revela e deixa de fora.', ['Corrente 1', 'Corrente 2', 'Comparação', 'Citações']),
  disc('A literatura deve ser julgada também por critérios morais? Responda com Platão, Aristóteles, Maritain e um exemplo, distinguindo juízo estético, moral e gosto pessoal.', ['Platão e Aristóteles', 'Maritain', 'Exemplo', 'Distinções']),
]),
];
