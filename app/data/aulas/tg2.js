// Teologia II — Criação, pecado original e graça (fase teológica, degrau 1).
// A criação a partir do nada e a providência; o ser humano e a queda; a graça e a justificação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg2-1', titulo: 'Criação a partir do nada e providência', duracao: '150 min',
  aprendera: ['Explicar o que significa criação "a partir do nada"', 'Distinguir criação de fabricação e de emanação', 'Explicar a providência e o problema do mal', 'Relacionar a doutrina da criação com as ciências naturais'],
  prereq: ['Teologia I (módulo T1)'],
  explicacao: `
<h3>O problema</h3>
<p>Se Deus é bom e todo-poderoso, por que criou, e como explicar o mal no mundo que criou?</p>
<h3>A doutrina</h3>
<p>Deus criou livremente todas as coisas a partir do nada (ex nihilo), não por necessidade nem a partir de uma matéria preexistente (CIC 296–298) ${tag('doutrina')}. O IV Concílio de Latrão (1215) professou Deus criador "de todas as coisas visíveis e invisíveis" a partir do nada ${tag('fato')}.</p>
<h3>Criação não é fabricação</h3>
<p>O artesão transforma o que já existe; o Criador dá o próprio ser ${tag('interpretacao')}. Por isso Santo Tomás diz que a criação não é uma mudança, mas a dependência contínua do ser criado em relação a Deus (Suma Teológica I, q. 45) ${tag('fato')}. A emanação necessária, típica do neoplatonismo, é rejeitada: Deus cria por liberdade e amor ${tag('doutrina')}.</p>
<h3>Providência e mal</h3>
<p>Deus conduz a criação ao seu fim, respeitando as causas segundas e a liberdade das criaturas (CIC 302–308) ${tag('doutrina')}. O Catecismo afirma que nenhum traço da mensagem cristã deixa de ser, em parte, resposta ao problema do mal, e que Deus não é de modo algum causa do mal moral (CIC 309–311) ${tag('doutrina')}.</p>
<h3>Criação e ciência</h3>
<p>A doutrina da criação responde por que existe algo e qual o seu sentido; as ciências estudam como a natureza se desenvolve ${tag('interpretacao')}. Pio XII, em Humani generis (1950), admitiu a investigação sobre a origem evolutiva do corpo humano, mantendo que as almas são criadas imediatamente por Deus ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ex nihilo', 'A partir do nada: sem matéria preexistente.'],
    ['Emanação', 'Saída necessária das coisas a partir do Uno, sem liberdade.'],
    ['Providência', 'Governo de Deus que conduz as criaturas ao seu fim.'],
    ['Causas segundas', 'Criaturas que agem realmente, sob a causalidade primeira de Deus.'],
    ['Conservação', 'Ação contínua de Deus que mantém as criaturas no ser.'],
  ],
  exemplos: `<p><strong>A luz e o sol:</strong> Tomás compara a dependência da criatura à luz no ar, que dura só enquanto o sol ilumina. A criação não é algo que aconteceu uma vez e acabou: o mundo existe agora porque recebe agora o ser. Por isso a pergunta "o que havia antes do Big Bang?" não esgota a pergunta "por que existe algo?".</p>`,
  contexto: `<p><strong>No mundo:</strong> o padre e cosmólogo belga Georges Lemaître propôs nos anos 1920 a hipótese que deu origem ao modelo do Big Bang ${tag('fato')}. <strong>No Brasil:</strong> o tema da criação aparece na liturgia, por exemplo na Campanha da Fraternidade, que já tratou de ecologia em vários anos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a criação não depende de o universo ter começado', tag: 'argumento',
    premissas: ['Criar é dar o ser, não iniciar uma mudança no tempo.', 'Mesmo um universo sem início precisaria receber o ser para existir.', 'Logo, a dependência do ser é independente da questão do início temporal.'],
    conclusao: 'Logo, a doutrina da criação não depende de um modelo cosmológico; o início no tempo é afirmado pela fé, não demonstrado pela razão, segundo Tomás.',
    nota: 'Santo Tomás, De aeternitate mundi e Suma Teológica I, q. 46.',
  },
  objecoes: [
    { objecao: 'A teoria da evolução torna inútil a ideia de criação.', tag: 'debate',
      resposta: 'A evolução descreve processos naturais; a criação diz respeito ao ser de tudo, inclusive dos processos. A Igreja não condena a evolução enquanto teoria científica, mas rejeita leituras materialistas que pretendem explicar o espírito humano apenas pela matéria (Humani generis; mensagem de João Paulo II à Pontifícia Academia das Ciências, 1996).' },
  ],
  aplicacao: `<p>Leia CIC 279–324 e responda, com citações: (1) o que é criar; (2) por que Deus criou; (3) como a providência se relaciona com a liberdade humana.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 279–324', link: null,
    orientacao: `<p>Observe a afirmação de que o mundo foi criado "para a glória de Deus" (CIC 293) e como isso se relaciona com a bondade das criaturas.</p>`,
  },
  perguntas: [
    { p: 'O que significa ex nihilo?', r: 'A partir do nada, sem matéria preexistente.' },
    { p: 'Por que a criação não é emanação?', r: 'Porque Deus cria livremente, não por necessidade.' },
    { p: 'O que admitiu a Humani generis?', r: 'A investigação sobre a origem evolutiva do corpo humano, mantendo a criação imediata das almas.' },
  ],
  exercicios: [
    mc('O IV Concílio de Latrão foi em:', ['1215', '1545', '1870', '325'], 0, 'Data.'),
    mc('Para Tomás, a criação é:', ['Dependência no ser', 'Uma mudança material', 'Uma emanação necessária', 'Uma ilusão'], 0, 'I, q. 45.'),
    mc('A Humani generis é de:', ['Pio XII', 'Leão XIII', 'Pio IX', 'Paulo VI'], 0, '1950.'),
    mc('Deus é causa do mal moral?', ['De modo algum', 'Sim, diretamente', 'Às vezes', 'Só no Antigo Testamento'], 0, 'CIC 311.'),
    mc('O modelo do Big Bang tem origem em hipótese de:', ['Georges Lemaître', 'Darwin', 'Galileu', 'Newton'], 0, 'Padre cosmólogo.'),
    disc('Responda às três perguntas sobre CIC 279–324.', ['Criação', 'Finalidade', 'Providência', 'Citações']),
  ],
  resumo: ['Criação ex nihilo, livre.', 'Criar é dar o ser.', 'Providência e causas segundas.', 'Deus não causa o mal moral.', 'Criação e ciência não competem.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 279–324.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 44–46.', livro: 'suma-i' },
    { texto: 'Santo Agostinho, Enchiridion.', livro: 'agostinho-enchiridion' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as respostas', 'Ler a fonte indicada'],
  revisao: [['Ex nihilo', 'Do nada.'], ['Providência', 'Governo.'], ['1950', 'Humani generis.']],
  avancado: {
    texto: `<h3>A eternidade do mundo</h3>
<p>No século XIII, discutiu-se se a razão pode provar que o mundo começou. Boaventura sustentava que sim; Tomás, no opúsculo De aeternitate mundi, defendeu que o início temporal é conhecido pela fé e que um mundo criado desde sempre não seria contraditório ${tag('fato')}. A discussão mostra a distinção entre o que a razão demonstra e o que a fé ensina ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 46.', livro: 'suma-i' }],
    exercicios: [
      mc('Quem sustentava que a razão prova o início do mundo?', ['Boaventura', 'Tomás', 'Aristóteles', 'Boécio'], 0, 'Debate.'),
      mc('Para Tomás, o início temporal do mundo é conhecido:', ['Pela fé', 'Pela física', 'Pela matemática', 'Por intuição'], 0, 'De aeternitate mundi.'),
      mc('O debate ocorreu no século:', ['XIII', 'V', 'XVII', 'XX'], 0, 'Escolástica.'),
      disc('Compare as posições de Boaventura e Tomás sobre a eternidade do mundo.', ['Boaventura', 'Tomás', 'Fé e razão', 'Juízo'])],
  },
}),

aula({
  id: 'tg2-2', titulo: 'O ser humano: imagem de Deus, corpo e alma', duracao: '150 min',
  aprendera: ['Explicar o homem como imagem de Deus', 'Explicar a unidade de corpo e alma', 'Distinguir a visão católica do dualismo e do materialismo', 'Relacionar dignidade humana e criação'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O que é o ser humano: um animal mais complexo, um espírito preso num corpo, ou outra coisa?</p>
<h3>Imagem de Deus</h3>
<p>O Gênesis afirma que Deus criou o homem "à sua imagem" (Gn 1,27) ${tag('fato')}. O Catecismo explica que, por ser imagem de Deus, o indivíduo humano tem a dignidade de pessoa: é alguém, não algo (CIC 357) ${tag('doutrina')}.</p>
<h3>Corpo e alma</h3>
<p>A Igreja ensina que a alma é a "forma" do corpo: corpo e alma não são duas naturezas unidas, mas formam uma única natureza (CIC 365) ${tag('doutrina')}. O Concílio de Viena (1311–1312) usou essa linguagem ${tag('fato')}. Cada alma espiritual é criada imediatamente por Deus e é imortal (CIC 366) ${tag('doutrina')}.</p>
<h3>Dois erros</h3>
<p>O dualismo radical despreza o corpo, como no maniqueísmo que Agostinho abandonou ${tag('fato')}; o materialismo reduz o homem ao corpo ${tag('interpretacao')}. A ressurreição da carne mostra que o corpo pertence à pessoa ${tag('doutrina')}.</p>
<h3>Homem e mulher</h3>
<p>A criação do ser humano como homem e mulher, com igual dignidade, é tema da teologia do corpo de João Paulo II ${tag('fato')}.</p>`,
  vocabulario: [
    ['Imago Dei', 'O ser humano como imagem de Deus.'],
    ['Alma forma do corpo', 'A alma como princípio que faz do corpo um corpo humano vivo.'],
    ['Dualismo', 'Concepção do homem como dois seres justapostos.'],
    ['Materialismo', 'Redução do ser humano à matéria.'],
    ['Pessoa', 'Alguém, não algo: sujeito de dignidade.'],
  ],
  exemplos: `<p><strong>Um cadáver:</strong> tem os mesmos órgãos que o corpo vivo, mas já não é propriamente um corpo humano. O que mudou não foi a matéria, mas a presença do princípio de vida e unidade. É esse princípio que a tradição chama de alma.</p>`,
  contexto: `<p><strong>No mundo:</strong> as catequeses de João Paulo II sobre a teologia do corpo foram dadas entre 1979 e 1984 ${tag('fato')}. <strong>No Brasil:</strong> o princípio da dignidade da pessoa humana está no artigo 1º, III, da Constituição de 1988 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a dignidade não depende das capacidades', tag: 'argumento',
    premissas: ['A dignidade humana vem de ser pessoa, imagem de Deus.', 'Ser pessoa pertence à natureza, não ao exercício atual das capacidades.', 'Uma criança, um doente em coma ou um idoso com demência têm natureza humana.'],
    conclusao: 'Logo, todos têm igual dignidade, independentemente das capacidades exercidas.',
    nota: 'O argumento sustenta a defesa da vida do embrião e dos doentes graves.',
  },
  objecoes: [
    { objecao: 'A neurociência mostrou que a mente é só o cérebro.', tag: 'debate',
      resposta: 'A neurociência mostra que o pensamento humano depende do cérebro, o que a visão de corpo e alma unidos já admite. Que o pensamento se reduza ao cérebro é uma tese filosófica, discutida por cientistas e filósofos, não um resultado experimental.' },
  ],
  aplicacao: `<p>Leia CIC 355–384 e escreva uma página explicando como a fé católica evita tanto o dualismo quanto o materialismo.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 355–384', link: null,
    orientacao: `<p>Observe a expressão "unidade de corpo e alma" (CIC 362–368).</p>`,
  },
  perguntas: [
    { p: 'O que significa ser imagem de Deus?', r: 'Ter a dignidade de pessoa, capaz de conhecer e amar.' },
    { p: 'O que a Igreja ensina sobre corpo e alma?', r: 'Que formam uma única natureza; a alma é forma do corpo.' },
    { p: 'De onde vem cada alma?', r: 'É criada imediatamente por Deus.' },
  ],
  exercicios: [
    mc('Gn 1,27 diz que o homem foi criado:', ['À imagem de Deus', 'Do nada sem corpo', 'Como anjo', 'Sem liberdade'], 0, 'Escritura.'),
    mc('A alma como forma do corpo foi linguagem do Concílio de:', ['Viena', 'Niceia', 'Trento', 'Éfeso'], 0, '1311–1312.'),
    mc('O maniqueísmo é um:', ['Dualismo radical', 'Materialismo', 'Tomismo', 'Ceticismo'], 0, 'Agostinho.'),
    mc('A teologia do corpo é de:', ['João Paulo II', 'Pio XII', 'Bento XVI', 'Leão XIII'], 0, 'Catequeses.'),
    mc('A dignidade humana na Constituição está no art.:', ['1º, III', '5º, X', '196', '225'], 0, 'Brasil.'),
    disc('Explique como a fé evita dualismo e materialismo.', ['Dualismo', 'Materialismo', 'Unidade', 'Citações']),
  ],
  resumo: ['Imagem de Deus.', 'Pessoa: alguém.', 'Alma forma do corpo.', 'Alma criada e imortal.', 'Nem dualismo nem materialismo.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 355–384.', livro: 'cic' },
    { texto: 'João Paulo II, Teologia do Corpo.', livro: 'jp2-teologia-corpo' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 75–76.', livro: 'suma-i' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto', 'Ler a fonte indicada'],
  revisao: [['Imago Dei', 'Pessoa.'], ['Alma', 'Forma do corpo.'], ['Viena', '1311–1312.']],
  avancado: {
    texto: `<h3>Tomás e a alma subsistente</h3>
<p>Santo Tomás sustenta que a alma humana é forma do corpo e, ao mesmo tempo, subsistente, porque o intelecto opera sem órgão corporal (Suma Teológica I, q. 75, a. 2) ${tag('fato')}. Daí ele deduz que a alma não se corrompe com o corpo ${tag('argumento')}. O argumento é discutido na filosofia da mente contemporânea ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 75.', livro: 'suma-i' }],
    exercicios: [
      mc('Para Tomás, a alma humana é:', ['Forma do corpo e subsistente', 'Só forma corruptível', 'Um corpo sutil', 'Uma ilusão'], 0, 'I, q. 75.'),
      mc('O argumento parte da operação do:', ['Intelecto', 'Estômago', 'Olho', 'Coração'], 0, 'Operação.'),
      mc('Da subsistência, Tomás deduz que a alma é:', ['Incorruptível', 'Material', 'Divina', 'Plural'], 0, 'Imortalidade.'),
      disc('Reconstrua o argumento de Tomás sobre a subsistência da alma.', ['Premissas', 'Conclusão', 'Objeção', 'Juízo'])],
  },
}),

aula({
  id: 'tg2-3', titulo: 'Queda e pecado original', duracao: '150 min',
  aprendera: ['Ler Gênesis 3 segundo o Catecismo', 'Explicar o que é e o que não é o pecado original', 'Conhecer a controvérsia pelagiana e Trento', 'Relacionar pecado original e Redenção'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como pode alguém nascer com um pecado que não cometeu?</p>
<h3>A narrativa</h3>
<p>O Catecismo afirma que Gênesis 3 usa uma linguagem figurada, mas narra um acontecimento primordial, ocorrido no início da história humana (CIC 390) ${tag('doutrina')}.</p>
<h3>O que é o pecado original</h3>
<p>É a privação da santidade e da justiça originais, transmitida com a natureza humana; é "contraído", não "cometido" (CIC 404–405) ${tag('doutrina')}. A natureza humana não é totalmente corrompida, mas ferida: sujeita à ignorância, ao sofrimento, à morte e à inclinação ao pecado, chamada concupiscência (CIC 405) ${tag('doutrina')}.</p>
<h3>A controvérsia</h3>
<p>Pelágio sustentava que o homem pode evitar o pecado só pelas próprias forças; Agostinho o combateu, e o Concílio de Cartago (418) condenou o pelagianismo ${tag('fato')}. O Concílio de Trento, na sessão V (1546), definiu a doutrina do pecado original contra interpretações protestantes que identificavam a concupiscência com o próprio pecado ${tag('fato')}.</p>
<h3>Felix culpa</h3>
<p>O Exsultet da Vigília Pascal canta a "feliz culpa" que mereceu tal Redentor: o pecado original só se entende à luz de Cristo (CIC 388–389) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Pecado original', 'Privação da santidade e justiça originais, contraída com a natureza.'],
    ['Concupiscência', 'Inclinação ao pecado que permanece após o batismo.'],
    ['Justiça original', 'Estado de harmonia do homem com Deus, consigo e com a criação.'],
    ['Pelagianismo', 'Tese de que o homem se salva pelas próprias forças.'],
    ['Felix culpa', '"Feliz culpa": expressão do Exsultet.'],
  ],
  exemplos: `<p><strong>A herança de uma família:</strong> quem nasce numa família que perdeu um patrimônio não é culpado da perda, mas nasce sem ele. A analogia é imperfeita, como o Catecismo admite ao chamar o pecado original de "mistério" (CIC 404), mas ajuda a ver por que se fala em pecado "contraído" e não "cometido".</p>`,
  contexto: `<p><strong>No mundo:</strong> a doutrina do pecado original marca a antropologia ocidental, de Pascal a Kierkegaard ${tag('interpretacao')}. <strong>No Brasil:</strong> a Vigília Pascal, com o canto do Exsultet, é celebrada em todas as paróquias no Sábado Santo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o pecado original não é culpa pessoal', tag: 'argumento',
    premissas: ['Culpa pessoal supõe um ato livre do próprio sujeito.', 'O recém-nascido não praticou nenhum ato livre.', 'A Igreja ensina que o pecado original é contraído, não cometido.'],
    conclusao: 'Logo, o pecado original é "pecado" em sentido analógico: um estado, não um ato pessoal.',
    nota: 'CIC 404 fala de pecado "em sentido analógico".',
  },
  objecoes: [
    { objecao: 'A doutrina do pecado original é pessimista sobre a natureza humana.', tag: 'debate',
      resposta: 'A doutrina católica afirma que a natureza ficou ferida, não totalmente corrompida, e que o homem continua capaz de conhecer a verdade e fazer o bem, embora precise da graça para a salvação. Ela é realista sobre o mal e otimista sobre a Redenção.' },
  ],
  aplicacao: `<p>Leia CIC 385–421 e escreva uma síntese distinguindo a posição católica do pelagianismo e da tese da corrupção total.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 385–421', link: null,
    orientacao: `<p>Observe a afirmação de que não se pode mexer na revelação do pecado original sem atentar contra o mistério de Cristo (CIC 389).</p>`,
  },
  perguntas: [
    { p: 'O pecado original é cometido ou contraído?', r: 'Contraído.' },
    { p: 'O que é a concupiscência?', r: 'A inclinação ao pecado que permanece após o batismo.' },
    { p: 'Quem condenou o pelagianismo em 418?', r: 'O Concílio de Cartago.' },
  ],
  exercicios: [
    mc('A natureza humana após a queda está:', ['Ferida', 'Totalmente corrompida', 'Intacta', 'Destruída'], 0, 'CIC 405.'),
    mc('Trento definiu o pecado original na sessão:', ['V', 'XIII', 'XXV', 'I'], 0, '1546.'),
    mc('Pelágio dizia que o homem se salva:', ['Pelas próprias forças', 'Só pela graça', 'Pelos sacramentos', 'Pela fé apenas'], 0, 'Heresia.'),
    mc('"Feliz culpa" é expressão do:', ['Exsultet', 'Credo', 'Pai-Nosso', 'Te Deum'], 0, 'Vigília Pascal.'),
    mc('Gn 3, segundo o CIC, usa linguagem:', ['Figurada sobre fato primordial', 'Puramente mítica', 'Científica', 'Jurídica'], 0, 'CIC 390.'),
    disc('Distinga a posição católica do pelagianismo e da corrupção total.', ['Pelagianismo', 'Corrupção total', 'Posição católica', 'Citações']),
  ],
  resumo: ['Fato primordial em linguagem figurada.', 'Contraído, não cometido.', 'Natureza ferida.', 'Cartago (418) e Trento (1546).', 'Felix culpa.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 385–421.', livro: 'cic' },
    { texto: 'Santo Agostinho, A natureza e a graça.', livro: 'agostinho-natureza-graca' },
    { texto: 'Denzinger, Compêndio dos símbolos, definições e declarações.', livro: 'denzinger' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a síntese', 'Ler a fonte indicada'],
  revisao: [['Contraído', 'Não cometido.'], ['Concupiscência', 'Inclinação.'], ['418', 'Cartago.']],
  avancado: {
    texto: `<h3>Monogenismo e ciência</h3>
<p>A Humani generis (1950) considerou que não se via como conciliar o poligenismo com a doutrina do pecado original ${tag('fato')}. Teólogos posteriores discutem como relacionar a genética de populações com a doutrina; o Catecismo mantém o pecado original como fato do início da história humana sem decidir questões científicas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 390 e 404.', livro: 'cic' }],
    exercicios: [
      mc('A Humani generis tratou do:', ['Poligenismo', 'Heliocentrismo', 'Big Bang', 'DNA'], 0, '1950.'),
      mc('O tema da relação com a genética é:', ['Discutido por teólogos', 'Definido como dogma', 'Proibido', 'Irrelevante'], 0, 'Debate.'),
      mc('O CIC afirma o pecado original como:', ['Fato do início da história', 'Mito', 'Lenda tardia', 'Metáfora apenas'], 0, 'CIC 390.'),
      disc('Exponha o problema da relação entre pecado original e genética de populações.', ['Problema', 'Humani generis', 'Posições', 'Juízo'])],
  },
}),

aula({
  id: 'tg2-4', titulo: 'Graça e justificação', duracao: '150 min',
  aprendera: ['Definir graça santificante e graça atual', 'Explicar a justificação segundo Trento', 'Explicar o mérito na doutrina católica', 'Conhecer a Declaração Conjunta de 1999'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se nos salvamos pela graça, o que fazemos conta? E se conta, a salvação não depende de nós?</p>
<h3>A graça</h3>
<p>Graça é o favor, o socorro gratuito que Deus nos dá para responder ao seu chamado e participar da vida divina (CIC 1996–1997) ${tag('doutrina')}. A graça santificante é um dom habitual, estável; as graças atuais são intervenções de Deus em momentos determinados (CIC 2000) ${tag('doutrina')}.</p>
<h3>Justificação</h3>
<p>O Concílio de Trento, na sessão VI (1547), ensinou que a justificação não é só perdão dos pecados, mas santificação e renovação interior do homem ${tag('fato')}. O início da justificação é pura graça; o homem coopera livremente, movido pela própria graça (CIC 1993) ${tag('doutrina')}.</p>
<h3>Mérito</h3>
<p>O homem não tem mérito diante de Deus por direito próprio; o mérito das boas obras vem da graça de Cristo. Como diz uma oração citada pelo Catecismo, ao coroar nossos méritos Deus coroa os seus dons (CIC 2006–2011) ${tag('doutrina')}.</p>
<h3>Diálogo ecumênico</h3>
<p>Em 1999, a Igreja Católica e a Federação Luterana Mundial assinaram a Declaração Conjunta sobre a Doutrina da Justificação, afirmando um consenso em verdades básicas ${tag('fato')}. Diferenças permanecem em outros pontos ${tag('debate')}.</p>`,
  vocabulario: [
    ['Graça santificante', 'Dom habitual que torna a alma participante da vida divina.'],
    ['Graça atual', 'Socorro de Deus em atos determinados.'],
    ['Justificação', 'Passagem do estado de pecado ao estado de graça.'],
    ['Mérito', 'Recompensa devida às boas obras feitas na graça.'],
    ['Semipelagianismo', 'Tese de que o início da fé vem do homem.'],
  ],
  exemplos: `<p><strong>A criança que dá um presente ao pai:</strong> o pai deu o dinheiro com que a criança comprou o presente, e mesmo assim se alegra de verdade com o gesto. A imagem ajuda a entender o mérito: tudo é dom, e a cooperação livre é real.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Conjunta foi assinada em Augsburgo em 31 de outubro de 1999 ${tag('fato')}. <strong>No Brasil:</strong> o diálogo entre católicos e luteranos tem uma comissão nacional, ligada à CNBB e à Igreja Evangélica de Confissão Luterana no Brasil (IECLB) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que graça e liberdade não competem', tag: 'argumento',
    premissas: ['Deus é causa primeira, não uma causa ao lado das criaturas.', 'A causa primeira dá às causas segundas o próprio agir livre.', 'Logo, quanto mais Deus age, mais a criatura é livre, e não menos.'],
    conclusao: 'Logo, a graça não anula a liberdade; ela a cura e eleva.',
    nota: 'Santo Tomás, Suma Teológica I-II, q. 109–114, sobre a graça.',
  },
  objecoes: [
    { objecao: 'Se as obras têm mérito, os católicos pretendem comprar a salvação.', tag: 'debate',
      resposta: 'Trento afirma que ninguém merece a primeira graça e que o mérito das obras é ele mesmo dom de Deus. A Declaração Conjunta de 1999 registrou que católicos e luteranos concordam que a justificação é obra da graça, não das obras humanas.' },
  ],
  aplicacao: `<p>Leia CIC 1987–2029 e escreva um diálogo curto entre um católico e um luterano sobre a justificação, fiel aos textos.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1987–2029', link: null,
    orientacao: `<p>Observe as três seções: justificação, graça e mérito.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre graça santificante e atual?', r: 'A santificante é habitual; a atual é socorro em atos determinados.' },
    { p: 'O que Trento ensinou sobre a justificação?', r: 'Que é perdão e também santificação e renovação interior.' },
    { p: 'O que é a Declaração Conjunta de 1999?', r: 'Consenso entre católicos e luteranos em verdades básicas da justificação.' },
  ],
  exercicios: [
    mc('Trento tratou da justificação na sessão:', ['VI', 'V', 'XIII', 'XXII'], 0, '1547.'),
    mc('A graça habitual é a:', ['Santificante', 'Atual', 'Sacramental apenas', 'Carismática'], 0, 'CIC 2000.'),
    mc('O início da fé vir do homem é:', ['Semipelagianismo', 'Tomismo', 'Doutrina católica', 'Calvinismo'], 0, 'Erro.'),
    mc('A Declaração Conjunta foi assinada em:', ['1999', '1517', '1965', '2017'], 0, 'Augsburgo.'),
    mc('Ao coroar nossos méritos, Deus coroa:', ['Seus dons', 'Nossa força', 'A lei', 'Nada'], 0, 'CIC 2006.'),
    disc('Escreva o diálogo sobre a justificação.', ['Fidelidade aos textos', 'Graça', 'Mérito', 'Consenso e diferenças']),
  ],
  resumo: ['Graça: dom gratuito.', 'Santificante e atual.', 'Trento VI (1547).', 'Mérito é dom.', 'Declaração Conjunta (1999).'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1987–2029.', livro: 'cic' },
    { texto: 'Santo Agostinho, A graça de Cristo e o pecado original.', livro: 'agostinho-graca-cristo' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 109–114.', livro: 'suma-i-ii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o diálogo', 'Ler a fonte indicada'],
  revisao: [['Santificante', 'Habitual.'], ['Trento VI', 'Justificação.'], ['1999', 'Declaração Conjunta.']],
  avancado: {
    texto: `<h3>A controvérsia De auxiliis</h3>
<p>No fim do século XVI, dominicanos (Báñez) e jesuítas (Molina) debateram como a graça eficaz se concilia com a liberdade ${tag('fato')}. O papa Paulo V encerrou a discussão em 1607 sem condenar nenhuma das partes, proibindo que se acusassem mutuamente de heresia ${tag('fato')}. O caso mostra os limites do que a Igreja define ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 111.', livro: 'suma-i-ii' }],
    exercicios: [
      mc('A controvérsia De auxiliis opôs:', ['Dominicanos e jesuítas', 'Católicos e ortodoxos', 'Franciscanos e cistercienses', 'Luteranos e calvinistas'], 0, 'Báñez e Molina.'),
      mc('O papa que encerrou a discussão foi:', ['Paulo V', 'Pio V', 'Leão XIII', 'Gregório XIII'], 0, '1607.'),
      mc('A decisão foi:', ['Não condenar nenhuma parte', 'Condenar os jesuítas', 'Condenar os dominicanos', 'Convocar um concílio'], 0, 'Limites.'),
      disc('Explique o problema da De auxiliis e o que a decisão de 1607 ensina sobre o Magistério.', ['Problema', 'Posições', 'Decisão', 'Juízo'])],
  },
}),

avaliacao('tg2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre criação, ser humano, pecado original e graça, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia CIC 385–421 e 1987–2029.</li></ul>`,
[
  disc('Explique por que a criação não é fabricação nem emanação, e como a providência se concilia com a liberdade e com a existência do mal.', ['Criação', 'Providência', 'Mal', 'Fontes']),
  disc('Mostre como as doutrinas do pecado original e da graça se iluminam mutuamente, situando Pelágio, Agostinho e Trento.', ['Pecado original', 'Graça', 'História', 'Clareza']),
]),
];
