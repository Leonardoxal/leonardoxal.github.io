// Teologia VI — Escolástica teológica (fase teológica, degrau 2).
// Anselmo; Tomás e a sacra doctrina; Boaventura e a tradição franciscana; Escoto, Ockham e Salamanca.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg6-1', titulo: 'Santo Anselmo: a fé que busca entender', duracao: '150 min',
  aprendera: ['Explicar o lema "fides quaerens intellectum"', 'Reconstruir o argumento do Proslógio', 'Conhecer a objeção de Gaunilo e a crítica de Tomás', 'Situar Anselmo como "pai da escolástica"'],
  prereq: ['Teologia V (módulo T5)'],
  explicacao: `
<h3>O problema</h3>
<p>Se a fé recebe a verdade por autoridade, que papel resta à razão?</p>
<h3>Anselmo</h3>
<p>Anselmo (1033–1109), monge da abadia de Bec e depois arcebispo de Cantuária, é frequentemente chamado de pai da escolástica ${tag('fato')}. O título original do Proslógio era "fides quaerens intellectum", a fé que busca compreender ${tag('fato')}. Ele escreve: "Não busco compreender para crer, mas creio para compreender" ${tag('fato')}.</p>
<h3>O argumento do Proslógio</h3>
<p>Deus é "aquilo de que nada maior se pode pensar". Mesmo o insensato que nega Deus entende essa expressão, e portanto Deus existe no intelecto. Mas o que existe também na realidade é maior do que o que existe só no intelecto. Logo, aquilo de que nada maior se pode pensar existe também na realidade (Proslógio, caps. 2–3) ${tag('argumento')}.</p>
<h3>Objeções</h3>
<p>O monge Gaunilo respondeu, em Em defesa do insensato, com o exemplo de uma ilha perfeitíssima ${tag('fato')}. Tomás de Aquino recusou o argumento, observando que nem todos entendem "Deus" desse modo e que do conceito não se passa à existência real (Suma Teológica I, q. 2, a. 1, ad 2) ${tag('fato')}. Kant chamou esse tipo de prova de "ontológica" e a criticou ${tag('fato')}. Descartes, Leibniz e, no século XX, Plantinga e Gödel propuseram versões ${tag('fato')}.</p>`,
  vocabulario: [
    ['Fides quaerens intellectum', 'A fé que busca compreender.'],
    ['Argumento ontológico', 'Prova da existência de Deus a partir do conceito de Deus.'],
    ['Insensato', 'O que diz no coração "Deus não existe" (Sl 14,1).'],
    ['Escolástica', 'Método teológico e filosófico das escolas medievais.'],
    ['Razões necessárias', 'Argumentos que Anselmo busca para mostrar a conveniência da fé.'],
  ],
  exemplos: `<p><strong>O método do Cur Deus homo:</strong> Anselmo propõe discutir a Encarnação "como se nada se soubesse de Cristo", para mostrar por razões que ela convinha. Não pretende substituir a fé, mas mostrar a quem não crê que a fé não é irracional.</p>`,
  contexto: `<p><strong>No mundo:</strong> Anselmo foi declarado Doutor da Igreja em 1720 ${tag('fato')}. <strong>No Brasil:</strong> o argumento ontológico aparece em programas de filosofia da religião nas universidades e nos seminários ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'O argumento do Proslógio', tag: 'argumento',
    premissas: ['Deus é aquilo de que nada maior se pode pensar.', 'Aquilo de que nada maior se pode pensar existe ao menos no intelecto.', 'Existir na realidade é maior do que existir só no intelecto.'],
    conclusao: 'Logo, aquilo de que nada maior se pode pensar existe também na realidade.',
    nota: 'A premissa 3 é a mais discutida: Kant objeta que existir não é um predicado que aumenta o conceito.',
  },
  objecoes: [
    { objecao: 'Pelo mesmo raciocínio, provaríamos a existência de uma ilha perfeitíssima (Gaunilo).', tag: 'debate',
      resposta: 'Anselmo respondeu que o argumento só vale para aquilo de que nada maior se pode pensar, e não para algo que é apenas o maior de um tipo. A ilha perfeita sempre pode ser pensada como não existente sem contradição. O debate sobre se a resposta funciona continua.' },
  ],
  aplicacao: `<p>Leia os capítulos 2 a 4 do Proslógio e a resposta de Gaunilo. Escreva um diálogo entre os dois e termine com seu próprio juízo.</p>`,
  fonte: {
    obra: 'Santo Anselmo, Proslógio, capítulos 2 a 4', link: null,
    orientacao: `<p>Observe que o argumento está dentro de uma oração dirigida a Deus (cap. 1).</p>`,
  },
  perguntas: [
    { p: 'O que significa fides quaerens intellectum?', r: 'A fé que busca compreender.' },
    { p: 'Como Anselmo define Deus no Proslógio?', r: 'Aquilo de que nada maior se pode pensar.' },
    { p: 'Qual o exemplo de Gaunilo?', r: 'A ilha perfeitíssima.' },
  ],
  exercicios: [
    mc('Anselmo foi arcebispo de:', ['Cantuária', 'Paris', 'Milão', 'Colônia'], 0, 'Inglaterra.'),
    mc('O nome "argumento ontológico" vem de:', ['Kant', 'Tomás', 'Gaunilo', 'Agostinho'], 0, 'Crítica.'),
    mc('Tomás:', ['Recusou o argumento', 'Adotou-o', 'Ignorou-o', 'Inventou-o'], 0, 'I, q. 2, a. 1.'),
    mc('"Creio para compreender" é de:', ['Anselmo', 'Tertuliano', 'Pascal', 'Lutero'], 0, 'Proslógio.'),
    mc('Anselmo foi declarado Doutor da Igreja em:', ['1720', '1567', '1871', '1932'], 0, 'Data.'),
    disc('Escreva o diálogo entre Anselmo e Gaunilo e seu juízo.', ['Argumento', 'Objeção', 'Resposta', 'Juízo']),
  ],
  resumo: ['Fé que busca entender.', 'Nada maior se pode pensar.', 'Gaunilo: a ilha.', 'Tomás e Kant: críticas.', 'Pai da escolástica.'],
  referencias: [
    { texto: 'Santo Anselmo, Proslógio.' },
    { texto: 'Santo Anselmo, Por que Deus se fez homem.', livro: 'anselmo-cur-deus' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 2.', livro: 'suma-i' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o diálogo', 'Ler a fonte indicada'],
  revisao: [['Fides quaerens', 'Compreender.'], ['Gaunilo', 'Ilha.'], ['Kant', 'Ontológico.']],
  avancado: {
    texto: `<h3>O Monológio</h3>
<p>Antes do Proslógio, Anselmo escreveu o Monológio, uma cadeia de argumentos sobre Deus a partir dos graus de bondade e de ser nas coisas ${tag('fato')}. Insatisfeito com a complexidade, buscou um argumento único, o do Proslógio ${tag('fato')}. A passagem mostra a busca escolástica de rigor e simplicidade ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Anselmo, A concepção virginal e o pecado original.', livro: 'anselmo-concepcao' }],
    exercicios: [
      mc('O Monológio argumenta a partir dos:', ['Graus de bondade', 'Milagres', 'Profecias', 'Sonhos'], 0, 'Método.'),
      mc('O Proslógio busca um argumento:', ['Único', 'Empírico', 'Histórico', 'Estatístico'], 0, 'Prefácio.'),
      mc('O Monológio é:', ['Anterior ao Proslógio', 'Posterior', 'De Tomás', 'Perdido'], 0, 'Ordem.'),
      disc('Compare o método do Monológio e do Proslógio.', ['Monológio', 'Proslógio', 'Diferença', 'Juízo'])],
  },
}),

aula({
  id: 'tg6-2', titulo: 'Santo Tomás e a sacra doctrina', duracao: '150 min',
  aprendera: ['Explicar por que a teologia é ciência segundo Tomás', 'Explicar a relação entre graça e natureza', 'Conhecer a estrutura da Suma Teológica', 'Situar as cinco vias'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A teologia é uma ciência ou apenas piedade organizada?</p>
<h3>A sacra doctrina</h3>
<p>Na primeira questão da Suma Teológica, Tomás pergunta se, além das disciplinas filosóficas, é necessária outra doutrina; responde que sim, porque o homem é ordenado a um fim que excede a razão (I, q. 1, a. 1) ${tag('fato')}. A sacra doctrina é ciência porque procede de princípios conhecidos à luz de uma ciência superior, a de Deus e dos bem-aventurados, como a música procede de princípios da aritmética (a. 2) ${tag('fato')}.</p>
<h3>Graça e natureza</h3>
<p>Tomás afirma que "a graça não destrói a natureza, mas a aperfeiçoa" (I, q. 1, a. 8, ad 2) ${tag('fato')}. Por isso a teologia usa a filosofia como serva, não como rival ${tag('interpretacao')}.</p>
<h3>A Suma</h3>
<p>A Suma Teológica tem três partes: Deus e a criação (I); o movimento da criatura racional para Deus (II, dividida em I-II e II-II); Cristo, caminho para Deus (III) ${tag('fato')}. Cada artigo segue o método da questão disputada: objeções, sed contra, resposta e respostas às objeções ${tag('fato')}.</p>
<h3>As cinco vias</h3>
<p>Na questão 2, artigo 3, Tomás apresenta cinco vias para mostrar que Deus existe: pelo movimento, pela causa eficiente, pelo contingente e necessário, pelos graus de perfeição e pelo governo das coisas ${tag('fato')}. Leão XIII, na encíclica Aeterni Patris (1879), recomendou o estudo de Tomás ${tag('fato')}.</p>`,
  vocabulario: [
    ['Sacra doctrina', 'A doutrina sagrada fundada na Revelação.'],
    ['Ciência subalternada', 'Ciência que recebe seus princípios de outra superior.'],
    ['Artigo', 'Unidade da Suma: questão, objeções, sed contra, resposta, soluções.'],
    ['Sed contra', 'Argumento de autoridade contrário às objeções.'],
    ['Cinco vias', 'Argumentos de Tomás para a existência de Deus (I, q. 2, a. 3).'],
  ],
  exemplos: `<p><strong>Ler um artigo da Suma:</strong> no artigo sobre a existência de Deus, Tomás começa com duas objeções fortes: o problema do mal e a suficiência das causas naturais. Só depois responde. Um bom estudante aprende com isso a enunciar a posição contrária com a máxima força antes de refutá-la.</p>`,
  contexto: `<p><strong>No mundo:</strong> Tomás (1225–1274) foi canonizado em 1323 e declarado Doutor da Igreja em 1567 ${tag('fato')}. <strong>No Brasil:</strong> a Suma Teológica foi traduzida integralmente ao português, em edições publicadas por editoras como a Loyola ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a teologia é ciência (Tomás)', tag: 'argumento',
    premissas: ['Uma ciência procede de princípios evidentes em si ou recebidos de uma ciência superior.', 'A teologia procede de princípios revelados, conhecidos na ciência de Deus.', 'Assim como a música recebe princípios da aritmética, a teologia recebe os seus de Deus.'],
    conclusao: 'Logo, a teologia é ciência subalternada à ciência de Deus.',
    nota: 'Suma Teológica I, q. 1, a. 2.',
  },
  objecoes: [
    { objecao: 'Uma ciência que parte de princípios aceitos pela fé não é ciência, porque não os demonstra.', tag: 'debate',
      resposta: 'Tomás admite que a teologia não demonstra seus princípios, assim como nenhuma ciência demonstra os seus; ela argumenta a partir deles e defende-os contra objeções (I, q. 1, a. 8). A discussão sobre o estatuto científico da teologia continua na filosofia da ciência e na universidade moderna.' },
  ],
  aplicacao: `<p>Leia a Suma Teológica I, q. 1, a. 1–2 e a. 8. Faça um esquema de cada artigo: pergunta, objeções, sed contra, resposta e soluções.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica, I, q. 1', link: null,
    orientacao: `<p>Observe o artigo 8 sobre a argumentação na teologia e o uso da filosofia.</p>`,
  },
  perguntas: [
    { p: 'Por que é necessária uma doutrina revelada?', r: 'Porque o homem é ordenado a um fim que excede a razão.' },
    { p: 'Qual a relação entre graça e natureza?', r: 'A graça não destrói a natureza, mas a aperfeiçoa.' },
    { p: 'Onde estão as cinco vias?', r: 'Na Suma Teológica I, q. 2, a. 3.' },
  ],
  exercicios: [
    mc('A teologia é ciência subalternada à ciência:', ['De Deus', 'Da física', 'Da história', 'Da lógica'], 0, 'I, q. 1, a. 2.'),
    mc('O exemplo de ciência subalternada é a:', ['Música', 'Medicina', 'Astronomia', 'Retórica'], 0, 'Aritmética.'),
    mc('A Aeterni Patris é de:', ['1879', '1891', '1965', '1323'], 0, 'Leão XIII.'),
    mc('A parte da Suma sobre Cristo é a:', ['III', 'I', 'I-II', 'II-II'], 0, 'Estrutura.'),
    mc('Tomás foi canonizado em:', ['1323', '1274', '1567', '1879'], 0, 'Data.'),
    disc('Apresente os esquemas dos artigos 1, 2 e 8.', ['Estrutura', 'Precisão', 'Síntese', 'Clareza']),
  ],
  resumo: ['Doutrina revelada necessária.', 'Ciência subalternada.', 'Graça aperfeiçoa natureza.', 'Três partes da Suma.', 'Cinco vias.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 1–2.', livro: 'suma-i' },
    { texto: 'Santo Tomás de Aquino, Compêndio de Teologia.', livro: 'tomas-compendio' },
    { texto: 'João Paulo II, Fides et ratio (1998).', livro: 'fides-et-ratio' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os esquemas', 'Ler a fonte indicada'],
  revisao: [['I, q. 1', 'Sacra doctrina.'], ['Graça', 'Aperfeiçoa.'], ['I, q. 2, a. 3', 'Cinco vias.']],
  avancado: {
    texto: `<h3>Fides et ratio</h3>
<p>João Paulo II, na encíclica Fides et ratio (1998), começa dizendo que a fé e a razão são como duas asas pelas quais o espírito humano se eleva para a contemplação da verdade ${tag('fato')}. A encíclica apresenta Tomás como modelo de harmonia entre fé e razão, sem impor uma filosofia oficial ${tag('fato')}. Ela critica tanto o fideísmo quanto o racionalismo ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Fides et ratio.', livro: 'fides-et-ratio' }],
    exercicios: [
      mc('Fé e razão são comparadas a:', ['Duas asas', 'Duas rodas', 'Dois olhos', 'Duas mãos'], 0, 'Abertura.'),
      mc('A encíclica impõe uma filosofia oficial?', ['Não', 'Sim, o tomismo', 'Sim, o agostinismo', 'Sim, a fenomenologia'], 0, 'Fides et ratio.'),
      mc('Critica o fideísmo e o:', ['Racionalismo', 'Tomismo', 'Realismo', 'Personalismo'], 0, 'Extremos.'),
      disc('Explique a posição da Fides et ratio sobre a relação entre fé e razão.', ['Tese', 'Tomás', 'Extremos', 'Juízo'])],
  },
}),

aula({
  id: 'tg6-3', titulo: 'São Boaventura e a tradição franciscana', duracao: '150 min',
  aprendera: ['Conhecer a vida e a obra de Boaventura', 'Explicar o Itinerário da mente para Deus', 'Comparar Boaventura e Tomás', 'Explicar a primazia do amor na teologia franciscana'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O conhecimento de Deus é sobretudo questão de inteligência ou de amor?</p>
<h3>Boaventura</h3>
<p>Boaventura (c. 1217–1274), franciscano, foi mestre em Paris, ministro geral da Ordem e cardeal ${tag('fato')}. É chamado Doutor Seráfico ${tag('fato')}. Morreu durante o II Concílio de Lyon, no mesmo ano que Tomás ${tag('fato')}.</p>
<h3>O Itinerário</h3>
<p>Em 1259, no monte Alverne, onde Francisco recebera os estigmas, Boaventura escreveu o Itinerário da mente para Deus ${tag('fato')}. A obra descreve seis degraus de ascensão: Deus contemplado pelos vestígios no mundo sensível, pela imagem na alma e pela luz acima da mente, até o êxtase em que cessa a atividade intelectual ${tag('fato')}.</p>
<h3>Comparação com Tomás</h3>
<p>Boaventura segue mais de perto Agostinho e insiste na iluminação divina e no amor; Tomás integra mais amplamente Aristóteles e a autonomia da filosofia ${tag('interpretacao')}. Ambos são Doutores da Igreja e mostram que a escolástica não era uniforme ${tag('fato')}.</p>
<h3>A tradição franciscana</h3>
<p>A teologia franciscana valoriza a pobreza, a humanidade de Cristo e a primazia da vontade e do amor ${tag('interpretacao')}. Bento XVI dedicou sua tese de habilitação à teologia da história em Boaventura ${tag('fato')}.</p>`,
  vocabulario: [
    ['Doutor Seráfico', 'Título de Boaventura.'],
    ['Itinerário', 'Caminho de ascensão da mente a Deus.'],
    ['Vestígio', 'Marca de Deus nas criaturas sensíveis.'],
    ['Iluminação', 'Ação de Deus que torna possível o conhecimento certo, segundo a tradição agostiniana.'],
    ['Êxtase', 'Ápice da ascensão, em que a mente passa a Deus pelo amor.'],
  ],
  exemplos: `<p><strong>O Cântico das Criaturas:</strong> o louvor de Francisco pelo "irmão sol" e pela "irmã água" é um exemplo vivido do primeiro degrau do Itinerário: ver nas criaturas vestígios do Criador. Boaventura dá forma teológica à experiência de Francisco.</p>`,
  contexto: `<p><strong>No mundo:</strong> Boaventura escreveu a Legenda maior, biografia oficial de São Francisco ${tag('fato')}. <strong>No Brasil:</strong> os franciscanos chegaram com os portugueses; frei Henrique de Coimbra celebrou a primeira Missa no Brasil em 1500 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o amor completa o conhecimento (Boaventura)', tag: 'argumento',
    premissas: ['Deus é o Bem supremo, não só a Verdade a ser conhecida.', 'O bem é alcançado pela vontade que ama.', 'Logo, a união com Deus culmina no amor, que ultrapassa o conceito.'],
    conclusao: 'Logo, a teologia deve conduzir do estudo à sabedoria amorosa.',
    nota: 'Itinerário, cap. 7; prólogo, com a advertência contra a leitura sem unção.',
  },
  objecoes: [
    { objecao: 'A primazia do amor leva ao anti-intelectualismo.', tag: 'debate',
      resposta: 'Boaventura foi mestre universitário e escreveu comentários técnicos às Sentenças. Para ele o amor não dispensa o estudo, mas o orienta e o completa. O risco de anti-intelectualismo existe em leituras unilaterais, não no próprio autor.' },
  ],
  aplicacao: `<p>Leia o prólogo e o capítulo 1 do Itinerário. Escreva uma comparação entre o método de Boaventura e o de Tomás na Suma I, q. 1.</p>`,
  fonte: {
    obra: 'São Boaventura, Itinerário da mente para Deus, prólogo e cap. 1', link: null,
    orientacao: `<p>Observe a advertência do prólogo: não basta a leitura sem unção, a especulação sem devoção.</p>`,
  },
  perguntas: [
    { p: 'Onde e quando foi escrito o Itinerário?', r: 'No monte Alverne, em 1259.' },
    { p: 'Qual o título de Boaventura?', r: 'Doutor Seráfico.' },
    { p: 'Quem celebrou a primeira Missa no Brasil?', r: 'Frei Henrique de Coimbra, franciscano.' },
  ],
  exercicios: [
    mc('Boaventura foi ministro geral dos:', ['Franciscanos', 'Dominicanos', 'Jesuítas', 'Beneditinos'], 0, 'Ordem.'),
    mc('O Itinerário tem quantos degraus?', ['Seis', 'Três', 'Sete', 'Dez'], 0, 'Estrutura.'),
    mc('Boaventura segue mais de perto:', ['Agostinho', 'Averróis', 'Ockham', 'Kant'], 0, 'Tradição.'),
    mc('Bento XVI estudou em Boaventura a teologia da:', ['História', 'Liturgia', 'Moral', 'Arte'], 0, 'Habilitação.'),
    mc('Boaventura morreu em:', ['1274', '1225', '1309', '1259'], 0, 'Lyon II.'),
    disc('Compare o método de Boaventura e o de Tomás.', ['Boaventura', 'Tomás', 'Semelhanças e diferenças', 'Juízo']),
  ],
  resumo: ['Doutor Seráfico.', 'Itinerário (1259).', 'Seis degraus.', 'Agostinho e o amor.', 'Escolástica plural.'],
  referencias: [
    { texto: 'São Boaventura, Itinerário da mente para Deus.', livro: 'boaventura-itinerario' },
    { texto: 'Joseph Ratzinger, Introdução ao Cristianismo.', livro: 'ratzinger-introducao' },
    { texto: 'A.-D. Sertillanges, A vida intelectual.', livro: 'sertillanges-vida' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler a fonte indicada'],
  revisao: [['Seráfico', 'Boaventura.'], ['1259', 'Itinerário.'], ['Seis', 'Degraus.']],
  avancado: {
    texto: `<h3>A controvérsia dos mendicantes</h3>
<p>Em Paris, nos anos 1250, mestres seculares como Guilherme de Saint-Amour atacaram a presença das ordens mendicantes na universidade ${tag('fato')}. Boaventura e Tomás defenderam a legitimidade da vida religiosa pobre e do ensino dos frades ${tag('fato')}. A disputa mostra que a teologia escolástica estava ligada a conflitos institucionais reais ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, A perfeição da vida espiritual.', livro: 'tomas-perfeicao' }],
    exercicios: [
      mc('Atacou os mendicantes:', ['Guilherme de Saint-Amour', 'Alberto Magno', 'Pedro Lombardo', 'Abelardo'], 0, 'Paris.'),
      mc('A disputa ocorreu nos anos:', ['1250', '1150', '1350', '1450'], 0, 'Data.'),
      mc('Defenderam os mendicantes:', ['Boaventura e Tomás', 'Ockham e Escoto', 'Lutero e Calvino', 'Anselmo e Abelardo'], 0, 'Defesa.'),
      disc('Explique a controvérsia dos mendicantes e o que ela mostra sobre a universidade medieval.', ['Fatos', 'Posições', 'Instituição', 'Juízo'])],
  },
}),

aula({
  id: 'tg6-4', titulo: 'Escoto, Ockham e a segunda escolástica', duracao: '150 min',
  aprendera: ['Conhecer as teses centrais de Duns Escoto', 'Explicar o nominalismo de Ockham e suas consequências', 'Conhecer a Escola de Salamanca', 'Avaliar a tese da "crise" da escolástica tardia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O que aconteceu com a teologia escolástica depois de Tomás e Boaventura?</p>
<h3>Duns Escoto</h3>
<p>João Duns Escoto (c. 1266–1308), franciscano, defendeu a univocidade do conceito de ente e a primazia da vontade ${tag('fato')}. Defendeu também a Imaculada Conceição com a ideia de redenção preservativa ${tag('fato')}. É chamado Doutor Sutil e foi beatificado em 1993 ${tag('fato')}.</p>
<h3>Ockham</h3>
<p>Guilherme de Ockham (c. 1287–1347), franciscano inglês, sustentou que só existem indivíduos e que os universais são nomes ou conceitos: é o nominalismo ${tag('fato')}. O princípio de não multiplicar entidades sem necessidade ficou conhecido como "navalha de Ockham" ${tag('fato')}. Historiadores discutem até que ponto o nominalismo preparou a separação moderna entre fé e razão ${tag('debate')}.</p>
<h3>A segunda escolástica</h3>
<p>No século XVI, a Escola de Salamanca renovou a teologia com Francisco de Vitória (c. 1483–1546), que discutiu os direitos dos povos indígenas da América e as bases do direito internacional ${tag('fato')}. Francisco Suárez (1548–1617), jesuíta, publicou as Disputationes metaphysicae (1597), muito lidas nas universidades europeias ${tag('fato')}.</p>
<h3>Trento</h3>
<p>Teólogos formados nessa tradição participaram do Concílio de Trento (1545–1563), que respondeu à Reforma com decretos sobre Escritura e Tradição, justificação e sacramentos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Univocidade do ente', 'Tese de Escoto: "ente" tem o mesmo sentido aplicado a Deus e às criaturas.'],
    ['Nominalismo', 'Tese de que os universais são só nomes ou conceitos.'],
    ['Navalha de Ockham', 'Não multiplicar entidades sem necessidade.'],
    ['Segunda escolástica', 'Renovação escolástica dos séculos XVI e XVII.'],
    ['Direito das gentes', 'Direito comum aos povos, discutido por Vitória.'],
  ],
  exemplos: `<p><strong>Vitória e a conquista da América:</strong> nas Relectiones sobre os índios (1539), Vitória argumentou que os povos indígenas tinham verdadeiro domínio sobre suas terras antes da chegada dos espanhóis e criticou títulos de conquista. É um exemplo de teologia escolástica aplicada a um problema político real.</p>`,
  contexto: `<p><strong>No mundo:</strong> Vitória é lembrado como um dos fundadores do direito internacional ${tag('fato')}. <strong>No Brasil:</strong> o jesuíta Antônio Vieira, formado na tradição escolástica portuguesa, defendeu os indígenas nos sermões do século XVII ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a navalha de Ockham é um princípio de método', tag: 'argumento',
    premissas: ['Uma explicação é melhor quando dá conta dos fatos com menos suposições.', 'Supor entidades desnecessárias não acrescenta poder explicativo.', 'Logo, não se devem multiplicar entidades sem necessidade.'],
    conclusao: 'Logo, a navalha é regra de economia explicativa, não prova de que algo não existe.',
    nota: 'A formulação famosa é posterior a Ockham, embora expresse seu princípio.',
  },
  objecoes: [
    { objecao: 'A escolástica tardia foi só decadência, discussão estéril de sutilezas.', tag: 'debate',
      resposta: 'Essa imagem, comum desde o Renascimento, foi revista por historiadores. Escoto, Ockham, Vitória e Suárez trouxeram contribuições originais em metafísica, lógica e direito. Há debates sobre os efeitos de certas teses, mas não sobre a vitalidade intelectual do período.' },
  ],
  aplicacao: `<p>Escolha um dos quatro autores desta aula e escreva uma ficha de duas páginas: vida, obras principais, uma tese central reconstruída como argumento e uma avaliação crítica.</p>`,
  fonte: {
    obra: 'Francisco de Vitória, Relectiones sobre os índios (1539), primeira parte', link: null,
    orientacao: `<p>Observe a estrutura escolástica (questão, argumentos, conclusões) aplicada a um problema político.</p>`,
  },
  perguntas: [
    { p: 'O que é o nominalismo?', r: 'A tese de que os universais são só nomes ou conceitos.' },
    { p: 'Por que Vitória é lembrado?', r: 'Como um dos fundadores do direito internacional.' },
    { p: 'Qual a obra metafísica de Suárez?', r: 'Disputationes metaphysicae (1597).' },
  ],
  exercicios: [
    mc('Doutor Sutil é:', ['Escoto', 'Tomás', 'Boaventura', 'Ockham'], 0, 'Título.'),
    mc('A navalha é associada a:', ['Ockham', 'Escoto', 'Suárez', 'Vitória'], 0, 'Princípio.'),
    mc('Vitória pertencia à Escola de:', ['Salamanca', 'Paris', 'Oxford', 'Coimbra apenas'], 0, 'Segunda escolástica.'),
    mc('Suárez era:', ['Jesuíta', 'Franciscano', 'Dominicano', 'Beneditino'], 0, 'Ordem.'),
    mc('Trento durou de:', ['1545 a 1563', '1517 a 1530', '1869 a 1870', '1962 a 1965'], 0, 'Datas.'),
    disc('Entregue a ficha sobre o autor escolhido.', ['Vida e obras', 'Argumento', 'Avaliação', 'Fontes']),
  ],
  resumo: ['Escoto: univocidade, Imaculada.', 'Ockham: nominalismo, navalha.', 'Salamanca: Vitória.', 'Suárez: Disputationes.', 'Escolástica tardia viva.'],
  referencias: [
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
    { texto: 'João Paulo II, Fides et ratio (1998).', livro: 'fides-et-ratio' },
    { texto: 'Francisco de Vitória, Relectiones.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['Escoto', 'Univocidade.'], ['Ockham', 'Nominalismo.'], ['Vitória', 'Direito das gentes.']],
  avancado: {
    texto: `<h3>A controvérsia de Valladolid</h3>
<p>Em 1550–1551, em Valladolid, Bartolomeu de las Casas e Juan Ginés de Sepúlveda debateram diante de uma junta de juristas e teólogos sobre a legitimidade da guerra contra os povos indígenas ${tag('fato')}. Las Casas defendia a evangelização pacífica; Sepúlveda usava a tese aristotélica da escravidão natural ${tag('fato')}. A junta não chegou a uma decisão formal ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' }],
    exercicios: [
      mc('A controvérsia de Valladolid foi em:', ['1550–1551', '1492', '1600', '1789'], 0, 'Data.'),
      mc('Defendia a evangelização pacífica:', ['Las Casas', 'Sepúlveda', 'Cortés', 'Pizarro'], 0, 'Posição.'),
      mc('Sepúlveda usava a tese da:', ['Escravidão natural', 'Lei natural igualitária', 'Graça', 'Predestinação'], 0, 'Aristóteles.'),
      disc('Reconstrua os argumentos de Las Casas e Sepúlveda e avalie-os.', ['Las Casas', 'Sepúlveda', 'Avaliação', 'Fontes'])],
  },
}),

avaliacao('tg6-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre Anselmo, Tomás, Boaventura e a escolástica tardia, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seus esquemas da Suma I, q. 1.</li></ul>`,
[
  disc('Compare as concepções de teologia de Anselmo, Tomás e Boaventura, mostrando o que cada uma acentua.', ['Anselmo', 'Tomás', 'Boaventura', 'Comparação']),
  disc('Avalie o argumento ontológico de Anselmo à luz das críticas de Gaunilo e de Tomás, e dê seu juízo próprio.', ['Argumento', 'Críticas', 'Juízo próprio', 'Rigor']),
]),
];
