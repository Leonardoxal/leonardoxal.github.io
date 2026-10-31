// Teologia I — Trindade, Cristologia e Maria (fase teológica, degrau 1).
// Deus Uno e Trino; processões e Pessoas divinas; o mistério da Encarnação e da Redenção; Maria na história da salvação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg1-1', titulo: 'Deus Uno e Trino: o mistério central da fé', duracao: '150 min',
  aprendera: ['Enunciar o dogma trinitário com precisão', 'Distinguir o que a razão alcança sobre Deus do que só a Revelação ensina', 'Situar a doutrina na Escritura e nos concílios', 'Evitar as heresias trinitárias clássicas'],
  prereq: ['Fundamentos da teologia católica (módulo M1)'],
  explicacao: `
<h3>O problema</h3>
<p>Os cristãos professam um só Deus, mas confessam o Pai, o Filho e o Espírito Santo. Como isso não é contradição?</p>
<h3>O dogma</h3>
<p>A Igreja crê em um só Deus em três Pessoas distintas, consubstanciais, iguais em dignidade, cada uma sendo inteiramente Deus (CIC 253–256) ${tag('doutrina')}. O Catecismo chama a Trindade de "mistério central da fé e da vida cristã" (CIC 234) ${tag('doutrina')}.</p>
<h3>Razão e Revelação</h3>
<p>A razão pode chegar à existência de Deus e a alguns de seus atributos, mas a Trindade é conhecida apenas pela Revelação (CIC 237) ${tag('doutrina')}. A teologia não demonstra a Trindade; mostra que ela não é contraditória e ilumina seu sentido ${tag('interpretacao')}.</p>
<h3>Escritura e concílios</h3>
<p>O Novo Testamento apresenta o Pai, o Filho e o Espírito em fórmulas como a do batismo (Mt 28,19) ${tag('fato')}. O Concílio de Niceia (325) afirmou o Filho "consubstancial ao Pai", contra Ário; o de Constantinopla (381) afirmou a divindade do Espírito Santo ${tag('fato')}.</p>
<h3>Erros a evitar</h3>
<p>O modalismo reduz as Pessoas a modos de um único Deus; o arianismo faz do Filho uma criatura; o triteísmo fala de três deuses ${tag('fato')}. Todos foram rejeitados pela Igreja ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Pessoa (divina)', 'Sujeito distinto na Trindade, constituído pela relação de origem.'],
    ['Natureza (essência)', 'Aquilo que Deus é, uma só e a mesma nas três Pessoas.'],
    ['Consubstancial', 'Da mesma substância (homoousios), termo de Niceia.'],
    ['Modalismo', 'Heresia que reduz as Pessoas a modos de manifestação.'],
    ['Arianismo', 'Heresia que faz do Filho uma criatura.'],
  ],
  exemplos: `<p><strong>Rezar o Glória:</strong> "Glória ao Pai, ao Filho e ao Espírito Santo" coloca as três Pessoas no mesmo nível de louvor, e o sinal da cruz é feito "em nome" (no singular) do Pai, do Filho e do Espírito Santo. A oração cotidiana já contém a fórmula trinitária: um só nome, três Pessoas.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Credo niceno-constantinopolitano é professado por católicos, ortodoxos e muitas comunidades protestantes ${tag('fato')}. <strong>No Brasil:</strong> a festa da Santíssima Trindade é celebrada no domingo depois de Pentecostes, e muitas paróquias e cidades brasileiras levam o nome da Trindade ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Trindade não é contradição', tag: 'argumento',
    premissas: ['Haveria contradição se Deus fosse uno e trino sob o mesmo aspecto.', 'A Igreja afirma que Deus é uno quanto à natureza e trino quanto às Pessoas.', 'Natureza e pessoa não são o mesmo aspecto.'],
    conclusao: 'Logo, a doutrina trinitária não é contraditória, embora seja mistério que excede a razão.',
    nota: 'É o tipo de raciocínio que Santo Tomás usa em Suma Teológica I, q. 27–43.',
  },
  objecoes: [
    { objecao: 'A palavra "Trindade" não aparece na Bíblia; logo, a doutrina é invenção posterior.', tag: 'debate',
      resposta: 'A palavra é posterior, mas o conteúdo está nas fórmulas e na prática do Novo Testamento. Os concílios precisaram de termos técnicos (pessoa, substância) para defender esse conteúdo contra interpretações que o negavam. O desenvolvimento da linguagem não é invenção do conteúdo, como mostra Newman.' },
  ],
  aplicacao: `<p>Leia CIC 232–267 e escreva uma síntese de uma página: o dogma, as fontes bíblicas, os concílios e as três heresias, com os números do Catecismo citados.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 232–267', link: null,
    orientacao: `<p>Observe a distinção entre a Trindade "imanente" (o que Deus é) e as missões (o Filho e o Espírito enviados).</p>`,
  },
  perguntas: [
    { p: 'Como o Catecismo chama a Trindade?', r: 'Mistério central da fé e da vida cristã (CIC 234).' },
    { p: 'O que afirmou Niceia?', r: 'Que o Filho é consubstancial ao Pai.' },
    { p: 'O que é o modalismo?', r: 'A redução das Pessoas a modos de manifestação de um único Deus.' },
  ],
  exercicios: [
    mc('Deus é uno quanto à:', ['Natureza', 'Pessoa', 'Missão', 'Relação'], 0, 'Distinção.'),
    mc('O Concílio de Niceia foi em:', ['325', '381', '431', '451'], 0, 'Ário.'),
    mc('A divindade do Espírito Santo foi afirmada em:', ['Constantinopla (381)', 'Trento', 'Vaticano I', 'Éfeso'], 0, 'Concílio.'),
    mc('Fazer do Filho uma criatura é:', ['Arianismo', 'Modalismo', 'Triteísmo', 'Pelagianismo'], 0, 'Heresia.'),
    mc('A Trindade é conhecida:', ['Só pela Revelação', 'Pela razão sozinha', 'Pela ciência', 'Por intuição'], 0, 'CIC 237.'),
    disc('Escreva a síntese de CIC 232–267 com as citações.', ['Dogma', 'Escritura', 'Concílios', 'Heresias']),
  ],
  resumo: ['Um Deus em três Pessoas.', 'Mistério central (CIC 234).', 'Só pela Revelação (CIC 237).', 'Niceia (325) e Constantinopla (381).', 'Modalismo, arianismo, triteísmo.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 232–267.', livro: 'cic' },
    { texto: 'Santo Agostinho, A Trindade.', livro: 'agostinho-trindade' },
    { texto: 'Joseph Ratzinger, Introdução ao Cristianismo.', livro: 'ratzinger-introducao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a síntese', 'Ler a fonte indicada'],
  revisao: [['Natureza', 'Una.'], ['Pessoas', 'Três.'], ['Niceia', 'Consubstancial.']],
  avancado: {
    texto: `<h3>O Filioque</h3>
<p>O Credo latino diz que o Espírito Santo procede "do Pai e do Filho" (Filioque), acréscimo difundido no Ocidente e contestado pelo Oriente ortodoxo ${tag('fato')}. O Catecismo apresenta as duas tradições como complementares quando bem entendidas, pois o Espírito procede do Pai como princípio sem princípio e "pelo Filho" (CIC 246–248) ${tag('doutrina')}. A questão ainda é tema do diálogo ecumênico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 243–248.', livro: 'cic' }],
    exercicios: [
      mc('Filioque significa:', ['"E do Filho"', '"Pelo Pai"', '"Uma substância"', '"Três pessoas"'], 0, 'Latim.'),
      mc('O Filioque foi contestado pelo:', ['Oriente ortodoxo', 'Concílio de Trento', 'Papa Leão XIII', 'Agostinho'], 0, 'História.'),
      mc('O Catecismo trata do tema em:', ['CIC 246–248', 'CIC 1213', 'CIC 2309', 'CIC 1735'], 0, 'Fonte.'),
      disc('Explique a questão do Filioque e a posição do Catecismo.', ['Questão', 'Oriente', 'Catecismo', 'Ecumenismo'])],
  },
}),

aula({
  id: 'tg1-2', titulo: 'Processões, relações e missões: a teologia trinitária de Agostinho e Tomás', duracao: '150 min',
  aprendera: ['Explicar as processões do Filho e do Espírito', 'Explicar a noção de relação subsistente', 'Conhecer a analogia psicológica de Agostinho', 'Distinguir processões eternas e missões temporais'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Se as três Pessoas têm a mesma natureza, o que as distingue?</p>
<h3>Processões</h3>
<p>O Filho procede do Pai por geração; o Espírito Santo procede do Pai e do Filho como amor ${tag('doutrina')}. Santo Tomás relaciona a geração do Verbo ao conhecimento e a processão do Espírito à vontade e ao amor (Suma Teológica I, q. 27) ${tag('fato')}.</p>
<h3>Relações</h3>
<p>Em Deus, as Pessoas se distinguem apenas pelas relações de origem: paternidade, filiação, espiração ${tag('doutrina')}. Tomás define a Pessoa divina como "relação subsistente" (I, q. 29, a. 4) ${tag('fato')}.</p>
<h3>Agostinho</h3>
<p>Em A Trindade, Agostinho busca na alma humana, imagem de Deus, uma analogia: memória, inteligência e vontade são uma só mente e três atos distintos ${tag('fato')}. Ele insiste que a analogia é imperfeita e serve para crer melhor, não para compreender plenamente ${tag('interpretacao')}.</p>
<h3>Missões</h3>
<p>O envio do Filho na Encarnação e do Espírito em Pentecostes manifesta no tempo as processões eternas ${tag('doutrina')}. As obras de Deus no mundo são comuns às três Pessoas, embora certas obras sejam "apropriadas" a uma delas ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Processão', 'Origem de uma Pessoa divina a partir de outra.'],
    ['Geração', 'Processão do Filho a partir do Pai.'],
    ['Relação subsistente', 'Definição tomista da Pessoa divina.'],
    ['Missão', 'Envio de uma Pessoa divina no tempo.'],
    ['Apropriação', 'Atribuição de uma obra comum a uma Pessoa por afinidade.'],
  ],
  exemplos: `<p><strong>A analogia da mente:</strong> quando você se lembra de algo, compreende-o e o ama, há uma só mente e três atos distintos, cada um envolvendo os outros. Agostinho usa essa experiência para iluminar, de longe, como em Deus pode haver unidade de ser e distinção real, sem pretender explicá-la por completo.</p>`,
  contexto: `<p><strong>No mundo:</strong> A Trindade de Agostinho é uma das obras mais influentes da teologia latina ${tag('fato')}. <strong>No Brasil:</strong> traduções de Agostinho e de Tomás estão disponíveis em português em várias editoras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que só as relações distinguem as Pessoas', tag: 'argumento',
    premissas: ['Tudo o que é absoluto em Deus pertence à única natureza divina.', 'O que pertence à natureza é comum às três Pessoas.', 'O que não é comum só pode ser relativo, isto é, as relações de origem.'],
    conclusao: 'Logo, as Pessoas divinas se distinguem apenas pelas relações de origem.',
    nota: 'Formulação clássica do Concílio de Florença (1442): em Deus tudo é uno onde não há oposição de relação.',
  },
  objecoes: [
    { objecao: 'A analogia psicológica transforma Deus numa mente humana ampliada.', tag: 'debate',
      resposta: 'Agostinho e Tomás insistem que toda analogia guarda uma dessemelhança maior que a semelhança (como dirá o IV Concílio de Latrão em 1215). A analogia orienta o pensamento sem reduzir Deus à criatura.' },
  ],
  aplicacao: `<p>Leia Agostinho, A Trindade, livro IX (ou X), e explique com suas palavras a analogia da mente, indicando seus limites.</p>`,
  fonte: {
    obra: 'Santo Agostinho, A Trindade, livros IX e X', link: null,
    orientacao: `<p>Observe a tríade mente, conhecimento e amor (IX) e memória, inteligência e vontade (X).</p>`,
  },
  perguntas: [
    { p: 'Como procede o Filho?', r: 'Por geração do Pai.' },
    { p: 'Como Tomás define a Pessoa divina?', r: 'Como relação subsistente.' },
    { p: 'O que é uma missão?', r: 'O envio de uma Pessoa divina no tempo.' },
  ],
  exercicios: [
    mc('As Pessoas se distinguem pelas:', ['Relações de origem', 'Naturezas', 'Obras no mundo', 'Atributos'], 0, 'Doutrina.'),
    mc('A analogia memória–inteligência–vontade é de:', ['Agostinho', 'Ário', 'Calvino', 'Kant'], 0, 'A Trindade.'),
    mc('O tratado trinitário da Suma começa em:', ['I, q. 27', 'I, q. 2', 'III, q. 1', 'II-II, q. 1'], 0, 'Fonte.'),
    mc('A criação é obra:', ['Comum às três Pessoas', 'Só do Pai', 'Só do Filho', 'Só do Espírito'], 0, 'Obras ad extra.'),
    mc('Pentecostes manifesta a missão do:', ['Espírito Santo', 'Pai', 'Filho apenas', 'Anjos'], 0, 'Missão.'),
    disc('Explique a analogia da mente em Agostinho e seus limites.', ['Analogia', 'Texto', 'Limites', 'Clareza']),
  ],
  resumo: ['Geração e processão.', 'Relações de origem.', 'Relação subsistente (Tomás).', 'Analogia da mente (Agostinho).', 'Missões e apropriações.'],
  referencias: [
    { texto: 'Santo Agostinho, A Trindade.', livro: 'agostinho-trindade' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 27–43.', livro: 'suma-i' },
    { texto: 'Boécio, Tratados teológicos (Opuscula sacra).', livro: 'boecio-opuscula' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação', 'Ler a fonte indicada'],
  revisao: [['Geração', 'Filho.'], ['Relação', 'Distingue.'], ['Missão', 'No tempo.']],
  avancado: {
    texto: `<h3>Boécio e a definição de pessoa</h3>
<p>Boécio definiu pessoa como "substância individual de natureza racional" (Contra Êutiques e Nestório) ${tag('fato')}. A definição foi muito usada na teologia e na filosofia, e Tomás a discute e adapta ao caso divino, onde não há individuação por matéria ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Boécio, Tratados teológicos (Opuscula sacra).', livro: 'boecio-opuscula' }],
    exercicios: [
      mc('Boécio define pessoa como substância individual de natureza:', ['Racional', 'Material', 'Animal', 'Divina apenas'], 0, 'Definição.'),
      mc('A definição está no tratado:', ['Contra Êutiques e Nestório', 'Consolação', 'Instituição aritmética', 'Comentário às Categorias'], 0, 'Obra.'),
      mc('Tomás adapta a definição porque em Deus não há:', ['Individuação por matéria', 'Racionalidade', 'Substância', 'Ser'], 0, 'Adaptação.'),
      disc('Explique por que a definição de Boécio precisa ser adaptada para as Pessoas divinas.', ['Definição', 'Problema', 'Adaptação', 'Conclusão'])],
  },
}),

aula({
  id: 'tg1-3', titulo: 'Encarnação e Redenção: o mistério de Cristo', duracao: '150 min',
  aprendera: ['Explicar a união hipostática', 'Explicar por que a Igreja confessa duas vontades em Cristo', 'Conhecer o sentido da Redenção', 'Relacionar os mistérios da vida de Cristo com a fé'],
  prereq: ['Aulas anteriores do módulo; Calcedônia e a cristologia (aula m2-6)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o Filho de Deus se fez homem, e como Deus e homem estão unidos em Jesus Cristo?</p>
<h3>União hipostática</h3>
<p>Em Cristo há uma só Pessoa, o Verbo, em duas naturezas, divina e humana, sem confusão, sem mudança, sem divisão e sem separação (Calcedônia, 451) ${tag('doutrina')}. O III Concílio de Constantinopla (681) afirmou duas vontades em Cristo, a humana submissa à divina ${tag('fato')}.</p>
<h3>Por que a Encarnação</h3>
<p>O Credo responde: "por nós, homens, e para nossa salvação" ${tag('doutrina')}. O Catecismo enumera: para nos reconciliar com Deus, para que conhecêssemos o amor de Deus, para ser nosso modelo de santidade e para nos tornar participantes da natureza divina (CIC 457–460) ${tag('doutrina')}.</p>
<h3>Redenção</h3>
<p>Santo Anselmo, em Por que Deus se fez homem, explicou a Redenção como satisfação oferecida pelo Deus-homem pela ofensa do pecado ${tag('fato')}. A Igreja ensina que Cristo morreu por todos e que seu sacrifício é a fonte da salvação (CIC 599–623) ${tag('doutrina')}.</p>
<h3>Mistérios da vida de Cristo</h3>
<p>A infância, a vida oculta, o batismo, as tentações, a Transfiguração, a Paixão, a Ressurreição e a Ascensão são mistérios: revelam o Pai e realizam a salvação (CIC 512–570) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['União hipostática', 'União das duas naturezas na única Pessoa do Verbo.'],
    ['Monotelismo', 'Heresia que afirmava uma só vontade em Cristo.'],
    ['Redenção', 'Libertação do pecado e reconciliação com Deus por Cristo.'],
    ['Satisfação', 'Reparação oferecida pela ofensa, em Anselmo.'],
    ['Mistério', 'Realidade divina revelada que excede a compreensão humana.'],
  ],
  exemplos: `<p><strong>Getsêmani:</strong> "Não seja feita a minha vontade, mas a tua" (Lc 22,42). A oração mostra uma vontade humana real em Cristo, que se submete livremente à vontade do Pai. Por isso a Igreja rejeitou o monotelismo: se não houvesse vontade humana, essa oração não teria sentido.</p>`,
  contexto: `<p><strong>No mundo:</strong> a fórmula de Calcedônia é aceita pela Igreja Católica, pelas Igrejas ortodoxas e por grande parte do protestantismo ${tag('fato')}. <strong>No Brasil:</strong> a Semana Santa, com procissões como as de Ouro Preto e Goiás, celebra os mistérios da Paixão e da Ressurreição ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Cristo precisa ser verdadeiro Deus e verdadeiro homem', tag: 'argumento',
    premissas: ['Só Deus pode salvar e divinizar o homem.', 'O que não foi assumido não foi redimido (Gregório Nazianzeno).', 'Logo, o Salvador deve ser Deus e assumir a natureza humana completa.'],
    conclusao: 'Logo, a fé na salvação exige confessar Cristo verdadeiro Deus e verdadeiro homem.',
    nota: 'O argumento está por trás das decisões de Niceia, Éfeso e Calcedônia.',
  },
  objecoes: [
    { objecao: 'A teoria da satisfação apresenta Deus como credor vingativo.', tag: 'debate',
      resposta: 'Anselmo fala da ordem da justiça e da honra de Deus, não de vingança; e a Igreja não canonizou uma única teoria da Redenção. O Catecismo insiste que a Paixão é obra de amor do Pai e do Filho (CIC 604–609). Teólogos discutem as metáforas mais adequadas.' },
  ],
  aplicacao: `<p>Escolha três mistérios da vida de Cristo, leia os números correspondentes do Catecismo e escreva, para cada um, o que revela e o que realiza.</p>`,
  fonte: {
    obra: 'Santo Anselmo, Por que Deus se fez homem, livro I, caps. 1–10', link: null,
    orientacao: `<p>Observe o método: Anselmo discute "como se Cristo não existisse", para mostrar a conveniência racional da Encarnação.</p>`,
  },
  perguntas: [
    { p: 'O que é a união hipostática?', r: 'A união das duas naturezas na única Pessoa do Verbo.' },
    { p: 'O que afirmou o III Concílio de Constantinopla?', r: 'Duas vontades em Cristo, a humana submissa à divina.' },
    { p: 'Como Anselmo explica a Redenção?', r: 'Como satisfação oferecida pelo Deus-homem pela ofensa do pecado.' },
  ],
  exercicios: [
    mc('Calcedônia foi em:', ['451', '325', '681', '1054'], 0, 'Duas naturezas.'),
    mc('O monotelismo afirmava:', ['Uma só vontade em Cristo', 'Duas pessoas', 'Nenhuma natureza humana', 'Três deuses'], 0, 'Heresia.'),
    mc('Por que Deus se fez homem é de:', ['Anselmo', 'Agostinho', 'Tomás', 'Boaventura'], 0, 'Cur Deus homo.'),
    mc('"O que não foi assumido não foi redimido" é de:', ['Gregório Nazianzeno', 'Ário', 'Lutero', 'Kant'], 0, 'Padre.'),
    mc('Os mistérios da vida de Cristo estão em:', ['CIC 512–570', 'CIC 232–267', 'CIC 2558', 'CIC 1213'], 0, 'Fonte.'),
    disc('Escreva sobre três mistérios da vida de Cristo.', ['Mistérios', 'Revelação', 'Salvação', 'Citações']),
  ],
  resumo: ['Uma Pessoa, duas naturezas.', 'Duas vontades (681).', 'Por nós e para nossa salvação.', 'Anselmo: satisfação.', 'Mistérios da vida de Cristo.'],
  referencias: [
    { texto: 'Santo Anselmo, Por que Deus se fez homem.', livro: 'anselmo-cur-deus' },
    { texto: 'Catecismo da Igreja Católica, §§ 456–682.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, III.', livro: 'suma-iii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o trabalho sobre os mistérios', 'Ler a fonte indicada'],
  revisao: [['Hipostática', 'Uma Pessoa.'], ['681', 'Duas vontades.'], ['Anselmo', 'Satisfação.']],
  avancado: {
    texto: `<h3>A ciência de Cristo</h3>
<p>A teologia discute o conhecimento humano de Cristo: ele cresceu "em sabedoria" (Lc 2,52) e, ao mesmo tempo, conhecia o Pai e os desígnios que veio revelar ${tag('fato')}. O Catecismo afirma que a alma humana de Cristo teve conhecimento verdadeiramente humano e, unida ao Verbo, conhecia o que convinha à sua missão (CIC 471–474) ${tag('doutrina')}. Os modos de explicar isso são debatidos entre teólogos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 471–474.', livro: 'cic' }],
    exercicios: [
      mc('Lc 2,52 diz que Jesus crescia em:', ['Sabedoria', 'Riqueza', 'Poder político', 'Fama'], 0, 'Escritura.'),
      mc('O tema está em:', ['CIC 471–474', 'CIC 1066', 'CIC 2309', 'CIC 302'], 0, 'Fonte.'),
      mc('Os modos de explicar a ciência de Cristo são:', ['Debatidos', 'Definidos em todos os detalhes', 'Irrelevantes', 'Proibidos'], 0, 'Teologia.'),
      disc('Explique a afirmação do Catecismo sobre o conhecimento humano de Cristo.', ['Texto', 'Humano', 'Missão', 'Debate'])],
  },
}),

aula({
  id: 'tg1-4', titulo: 'Maria na história da salvação', duracao: '150 min',
  aprendera: ['Conhecer os quatro dogmas marianos', 'Relacionar a mariologia com a cristologia', 'Distinguir culto de veneração e de adoração', 'Ler com critério as devoções marianas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a Igreja dá tanta importância à mãe de Jesus, e o que exatamente ela ensina sobre Maria?</p>
<h3>Os dogmas</h3>
<p>Maternidade divina: Maria é Mãe de Deus (Theotokos), definida no Concílio de Éfeso (431) ${tag('doutrina')}. Virgindade perpétua: antes, durante e depois do parto ${tag('doutrina')}. Imaculada Conceição: preservada do pecado original desde a concepção, definida por Pio IX em 1854 (Ineffabilis Deus) ${tag('doutrina')}. Assunção: elevada em corpo e alma à glória celeste, definida por Pio XII em 1950 (Munificentissimus Deus) ${tag('doutrina')}.</p>
<h3>Maria e Cristo</h3>
<p>Os dogmas marianos protegem verdades cristológicas: chamar Maria de Mãe de Deus afirma que quem dela nasceu é uma só Pessoa divina ${tag('interpretacao')}. O Concílio Vaticano II apresentou Maria no capítulo VIII da Lumen gentium, dentro do mistério de Cristo e da Igreja ${tag('fato')}.</p>
<h3>Culto</h3>
<p>A teologia distingue a adoração (latria), devida só a Deus, da veneração aos santos (dulia) e da veneração especial a Maria (hiperdulia) ${tag('doutrina')}. As devoções marianas são boas quando conduzem a Cristo ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Theotokos', 'Mãe de Deus, título definido em Éfeso.'],
    ['Imaculada Conceição', 'Preservação de Maria do pecado original desde a concepção.'],
    ['Assunção', 'Elevação de Maria em corpo e alma à glória celeste.'],
    ['Latria', 'Adoração devida somente a Deus.'],
    ['Hiperdulia', 'Veneração especial devida a Maria.'],
  ],
  exemplos: `<p><strong>A Imaculada e o pecado original:</strong> a Imaculada Conceição não significa que Maria não precisou de salvação, mas que foi salva de modo antecipado, "em vista dos méritos de Jesus Cristo", como diz a bula de 1854. O dogma depende da Redenção de Cristo, não a dispensa.</p>`,
  contexto: `<p><strong>No mundo:</strong> santuários marianos como Guadalupe, Lourdes e Fátima recebem milhões de peregrinos ${tag('fato')}. <strong>No Brasil:</strong> Nossa Senhora da Conceição Aparecida é a padroeira do Brasil, e o Santuário Nacional de Aparecida está entre os maiores templos católicos do mundo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a mariologia protege a cristologia', tag: 'argumento',
    premissas: ['Uma mãe é mãe da pessoa que gera, não apenas de uma natureza.', 'Quem nasceu de Maria é a Pessoa divina do Verbo.', 'Logo, Maria é verdadeiramente Mãe de Deus.'],
    conclusao: 'Logo, negar o título Theotokos implicaria dividir Cristo em duas pessoas.',
    nota: 'Foi exatamente o ponto em disputa com Nestório em Éfeso.',
  },
  objecoes: [
    { objecao: 'Os católicos adoram Maria.', tag: 'debate',
      resposta: 'A doutrina católica distingue claramente a adoração, devida só a Deus, da veneração a Maria. Excessos de devoção podem ocorrer e são corrigidos pela própria Igreja, que pede que toda devoção mariana conduza a Cristo (Lumen gentium 66–67).' },
  ],
  aplicacao: `<p>Leia o capítulo VIII da Lumen gentium (nn. 52–69) e escreva uma síntese relacionando cada dogma mariano a uma verdade sobre Cristo.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Lumen gentium, capítulo VIII (nn. 52–69)', link: null,
    orientacao: `<p>Observe como Maria é apresentada dentro do mistério de Cristo e da Igreja, e a advertência contra exageros e minimizações (n. 67).</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro dogmas marianos?', r: 'Maternidade divina, virgindade perpétua, Imaculada Conceição e Assunção.' },
    { p: 'Quando foi definida a Assunção?', r: 'Em 1950, por Pio XII.' },
    { p: 'Qual a diferença entre latria e hiperdulia?', r: 'Latria é adoração devida a Deus; hiperdulia é a veneração especial a Maria.' },
  ],
  exercicios: [
    mc('O título Theotokos foi definido em:', ['Éfeso (431)', 'Niceia (325)', 'Trento', 'Vaticano II'], 0, 'Concílio.'),
    mc('A Imaculada Conceição foi definida em:', ['1854', '1950', '431', '1870'], 0, 'Pio IX.'),
    mc('A Assunção foi definida por:', ['Pio XII', 'Pio IX', 'João Paulo II', 'Leão XIII'], 0, '1950.'),
    mc('A adoração devida só a Deus chama-se:', ['Latria', 'Dulia', 'Hiperdulia', 'Liturgia'], 0, 'Culto.'),
    mc('Maria é tratada na Lumen gentium no capítulo:', ['VIII', 'I', 'III', 'V'], 0, 'Concílio.'),
    disc('Relacione cada dogma mariano a uma verdade sobre Cristo.', ['Quatro dogmas', 'Cristologia', 'Fontes', 'Clareza']),
  ],
  resumo: ['Theotokos (431).', 'Virgindade perpétua.', 'Imaculada (1854).', 'Assunção (1950).', 'Latria, dulia, hiperdulia.'],
  referencias: [
    { texto: 'Concílio Vaticano II, Lumen gentium (1964), cap. VIII.' },
    { texto: 'Catecismo da Igreja Católica, §§ 484–511 e 963–975.', livro: 'cic' },
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a síntese', 'Ler a fonte indicada'],
  revisao: [['Theotokos', 'Éfeso.'], ['1854', 'Imaculada.'], ['1950', 'Assunção.']],
  avancado: {
    texto: `<h3>O desenvolvimento do dogma da Imaculada</h3>
<p>Na Idade Média, grandes teólogos, inclusive São Bernardo e Santo Tomás, tinham dificuldade em conciliar a Imaculada Conceição com a universalidade da Redenção ${tag('fato')}. O franciscano Duns Escoto propôs a "redenção preservativa": Maria foi redimida de modo mais perfeito, sendo preservada do pecado ${tag('fato')}. O caso é exemplo de desenvolvimento da doutrina, no sentido de Newman ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'John Henry Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã.', livro: 'newman-desenvolvimento' }],
    exercicios: [
      mc('A "redenção preservativa" foi proposta por:', ['Duns Escoto', 'Lutero', 'Ário', 'Pelágio'], 0, 'Franciscano.'),
      mc('A dificuldade medieval era conciliar a Imaculada com a:', ['Universalidade da Redenção', 'Trindade', 'Criação', 'Eucaristia'], 0, 'Problema.'),
      mc('O caso ilustra o:', ['Desenvolvimento da doutrina', 'Fim da teologia', 'Abandono da Escritura', 'Nada'], 0, 'Newman.'),
      disc('Explique como a solução de Escoto resolveu a dificuldade medieval.', ['Dificuldade', 'Solução', 'Definição de 1854', 'Desenvolvimento'])],
  },
}),

avaliacao('tg1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a Trindade, a Encarnação, a Redenção e Maria, e duas discursivas que pedem juízo próprio fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia CIC 232–267 e 456–478.</li><li>Releia sua síntese da Lumen gentium VIII.</li></ul>`,
[
  disc('Explique por que a doutrina da Trindade não é contraditória e por que as Pessoas se distinguem apenas pelas relações, usando Agostinho ou Tomás e o Catecismo.', ['Não contradição', 'Relações', 'Fontes', 'Clareza']),
  disc('Mostre, com Calcedônia e Éfeso, como a cristologia e a mariologia se iluminam mutuamente, e responda a uma objeção comum a uma delas.', ['Calcedônia', 'Éfeso', 'Relação', 'Objeção e resposta']),
]),
];
