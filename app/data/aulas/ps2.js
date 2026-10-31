// Psicologia II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Psicologia).
// Da psyché grega a Descartes e aos empiristas; de Wundt à neurociência e a psicologia no Brasil; Aristóteles, Tomás e James; Freud, Jung e Frankl.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ps2-1', titulo: 'Da psyché grega a Descartes e aos empiristas', duracao: '150 min',
  aprendera: ['Situar a psicologia antiga e medieval', 'Conhecer a teoria dos temperamentos', 'Expor o dualismo cartesiano', 'Conhecer o associacionismo empirista'],
  prereq: ['Psicologia I (módulo PS1)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de laboratórios e testes, como os pensadores estudaram a vida psíquica?</p>
<h3>Antiguidade</h3>
<p>Aristóteles, em Sobre a alma, analisou sensação, imaginação, memória, intelecto e desejo ${tag('fato')}. A medicina hipocrática e Galeno associaram o caráter ao equilíbrio de quatro humores, origem dos nomes sanguíneo, colérico, melancólico e fleumático ${tag('fato')}. A teoria dos humores foi abandonada pela medicina, mas os nomes dos temperamentos sobreviveram ${tag('fato')}.</p>
<h3>Idade Média</h3>
<p>Santo Agostinho explorou a interioridade, a memória e a vontade nas Confissões (livro X) e em A Trindade ${tag('fato')}. Avicena e Santo Tomás sistematizaram a psicologia das potências e dos sentidos internos ${tag('fato')}.</p>
<h3>Descartes</h3>
<p>Descartes distinguiu a substância pensante da extensa e propôs que interagem na glândula pineal ${tag('fato')}. Em As paixões da alma (1649), estudou as emoções e seu domínio pela vontade ${tag('fato')}. O dualismo cartesiano tornou difícil explicar a unidade da pessoa ${tag('interpretacao')}.</p>
<h3>Empiristas</h3>
<p>John Locke, no Ensaio sobre o entendimento humano (1690), descreveu a mente como inicialmente sem ideias, que vêm da experiência ${tag('fato')}. Hume e outros explicaram a vida mental por associação de ideias ${tag('fato')}. Christian Wolff difundiu no século XVIII os termos "psicologia empírica" e "psicologia racional" ${tag('fato')}.</p>`,
  vocabulario: [
    ['Temperamento', 'Disposição afetiva de base, antigamente ligada aos humores.'],
    ['Interioridade', 'Atenção à vida interior, marcante em Agostinho.'],
    ['Dualismo', 'Tese de que mente e corpo são substâncias distintas.'],
    ['Associacionismo', 'Explicação da vida mental pela associação de ideias.'],
    ['Psicologia racional', 'Estudo filosófico da alma, em contraste com a empírica.'],
  ],
  exemplos: `<p><strong>Agostinho e a memória:</strong> no livro X das Confissões, Agostinho se espanta com os "vastos palácios da memória", onde guarda imagens, conhecimentos e até afetos passados que lembra sem sentir de novo. É uma análise introspectiva que antecipa distinções da psicologia moderna da memória.</p>`,
  contexto: `<p><strong>No mundo:</strong> a classificação dos quatro temperamentos ainda é usada em obras de formação e espiritualidade ${tag('fato')}. <strong>No Brasil:</strong> obras de psicologia escolástica circularam em seminários e faculdades de filosofia católicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o dualismo cartesiano criou um problema', tag: 'argumento',
    premissas: ['Se mente e corpo são substâncias completamente distintas, uma pensante e outra extensa, é preciso explicar como interagem.', 'Descartes propôs a glândula pineal, mas isso localiza a interação sem explicá-la.', 'A experiência mostra a pessoa como unidade.'],
    conclusao: 'Logo, o dualismo cartesiano deixou aberto o problema da unidade da pessoa.',
    nota: 'O hilemorfismo aristotélico-tomista evita o problema ao ver a alma como forma do corpo.',
  },
  objecoes: [
    { objecao: 'A psicologia antiga e medieval é só especulação sem valor.', tag: 'debate',
      resposta: 'Ela não tinha métodos experimentais, mas fez análises conceituais e introspectivas finas, como as de Aristóteles e Agostinho, que ainda inspiram pesquisadores. Seu valor está na clareza conceitual, não em dados quantitativos.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com seis marcos (Aristóteles, Galeno, Agostinho, Tomás, Descartes, Locke), com obra e ideia central de cada um.</p>`,
  fonte: {
    obra: 'Santo Agostinho, Confissões, livro X, caps. 8–17 (a memória)', link: null,
    orientacao: `<p>Observe as imagens com que Agostinho descreve a memória e os tipos de conteúdo que ela guarda.</p>`,
  },
  perguntas: [
    { p: 'De onde vêm os nomes dos temperamentos?', r: 'Da teoria dos quatro humores da medicina antiga.' },
    { p: 'Onde Descartes situou a interação mente–corpo?', r: 'Na glândula pineal.' },
    { p: 'De onde vêm as ideias, para Locke?', r: 'Da experiência.' },
  ],
  exercicios: [
    mc('As paixões da alma é de:', ['Descartes', 'Locke', 'Agostinho', 'Galeno'], 0, '1649.'),
    mc('O Ensaio sobre o entendimento humano é de:', ['1690', '1649', '1879', '1732'], 0, 'Locke.'),
    mc('O temperamento "melancólico" deriva da teoria dos:', ['Humores', 'Arquétipos', 'Traços', 'Reflexos'], 0, 'Galeno.'),
    mc('Os "palácios da memória" estão em:', ['Confissões X', 'Sobre a alma II', 'Meditações I', 'Ensaio II'], 0, 'Agostinho.'),
    mc('Os termos "psicologia empírica" e "racional" foram difundidos por:', ['Wolff', 'Wundt', 'Freud', 'James'], 0, 'Século XVIII.'),
    disc('Monte a linha do tempo com seis marcos.', ['Marcos', 'Obras', 'Ideias', 'Ordem']),
  ],
  resumo: ['Aristóteles: potências.', 'Galeno: temperamentos.', 'Agostinho: interioridade e memória.', 'Descartes: dualismo.', 'Locke e o associacionismo.'],
  referencias: [
    { texto: 'Santo Agostinho, Confissões.', livro: 'agostinho-confissoes' },
    { texto: 'René Descartes, As paixões da alma (1649).', livro: 'descartes-paixoes' },
    { texto: 'John Locke, Ensaio sobre o entendimento humano (1690).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Humores', 'Temperamentos.'], ['Pineal', 'Descartes.'], ['Locke', 'Experiência.']],
  avancado: {
    texto: `<h3>As paixões em Tomás</h3>
<p>Santo Tomás, na Suma Teológica (I-II, qq. 22–48), trata das paixões da alma: onze paixões fundamentais, divididas entre o apetite concupiscível (amor, ódio, desejo, aversão, alegria, tristeza) e o irascível (esperança, desespero, temor, audácia, ira) ${tag('fato')}. Para Tomás, as paixões não são más em si; tornam-se boas ou más conforme sejam ordenadas pela razão ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, qq. 22–48.' }],
    exercicios: [
      mc('Quantas paixões fundamentais Tomás enumera?', ['Onze', 'Quatro', 'Sete', 'Doze'], 0, 'Tratado.'),
      mc('A ira pertence ao apetite:', ['Irascível', 'Concupiscível', 'Intelectual', 'Vegetativo'], 0, 'Divisão.'),
      mc('Para Tomás, as paixões em si são:', ['Moralmente neutras, ordenáveis pela razão', 'Sempre más', 'Sempre boas', 'Ilusões'], 0, 'Doutrina.'),
      disc('Compare as paixões em Tomás e em Descartes.', ['Tomás', 'Descartes', 'Semelhanças', 'Diferenças'])],
  },
}),

aula({
  id: 'ps2-2', titulo: 'De Wundt à neurociência, e a psicologia no Brasil', duracao: '150 min',
  aprendera: ['Situar o nascimento da psicologia científica', 'Conhecer as escolas do século XX', 'Situar a revolução cognitiva e a neurociência', 'Conhecer marcos da psicologia no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a psicologia se tornou ciência experimental e se dividiu em escolas, e como chegou ao Brasil?</p>
<h3>Fundação</h3>
<p>Wundt (Leipzig, 1879) estudou a experiência consciente por introspecção controlada ${tag('fato')}. William James publicou os Princípios de psicologia (1890), marco do funcionalismo americano ${tag('fato')}. Ebbinghaus estudou a memória experimentalmente (1885) ${tag('fato')}.</p>
<h3>Escolas</h3>
<p>Pavlov estudou reflexos condicionados e recebeu o Nobel de Medicina em 1904 por pesquisas sobre a digestão ${tag('fato')}. Watson lançou o behaviorismo (1913) ${tag('fato')}. A Gestalt (Wertheimer, Köhler, Koffka) estudou a percepção de totalidades ${tag('fato')}. Freud fundou a psicanálise ${tag('fato')}. Piaget estudou o desenvolvimento cognitivo da criança ${tag('fato')}.</p>
<h3>Cognição e cérebro</h3>
<p>Nos anos 1950–1960, a "revolução cognitiva" voltou a estudar processos mentais internos, com o artigo de George Miller sobre o "número mágico sete" (1956) como marco ${tag('fato')}. A neurociência cognitiva, com técnicas como a ressonância magnética funcional (a partir dos anos 1990), relaciona funções psíquicas e atividade cerebral ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Helena Antipoff, psicóloga russa, chegou a Minas Gerais em 1929 e fundou a Sociedade Pestalozzi, dedicada à educação de crianças com deficiência ${tag('fato')}. Nise da Silveira criou no Rio de Janeiro o Museu de Imagens do Inconsciente (1952) e opôs-se a tratamentos psiquiátricos agressivos da época ${tag('fato')}. A Lei nº 4.119/1962 regulamentou a profissão; a Lei nº 10.216/2001 reorientou a assistência em saúde mental ${tag('fato')}.</p>`,
  vocabulario: [
    ['Funcionalismo', 'Escola que estuda a mente por suas funções adaptativas.'],
    ['Behaviorismo', 'Escola que restringe a psicologia ao comportamento observável.'],
    ['Gestalt', 'Escola que estuda a percepção de totalidades organizadas.'],
    ['Revolução cognitiva', 'Retorno ao estudo de processos mentais internos.'],
    ['Neurociência cognitiva', 'Estudo das bases cerebrais das funções psíquicas.'],
  ],
  exemplos: `<p><strong>Gestalt no cotidiano:</strong> vemos um rosto em três pontos e uma curva, ou ouvimos uma melodia como a mesma em outra tonalidade. A percepção organiza totalidades, e "o todo é diferente da soma das partes", tese central da Gestalt.</p>`,
  contexto: `<p><strong>No mundo:</strong> a American Psychological Association foi fundada em 1892 ${tag('fato')}. <strong>No Brasil:</strong> o Museu de Imagens do Inconsciente, no Rio de Janeiro, guarda centenas de milhares de obras de pacientes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a psicologia é plural', tag: 'interpretacao',
    premissas: ['A vida psíquica tem níveis diversos: comportamento, cognição, emoção, inconsciente, sentido.', 'Cada escola privilegiou um nível e um método.', 'Nenhuma escola esgota a pessoa.'],
    conclusao: 'Logo, a pluralidade de escolas reflete a riqueza do objeto, embora exija discernimento.',
    nota: 'Pluralidade não significa que todas as teorias valham o mesmo; evidências e coerência decidem.',
  },
  objecoes: [
    { objecao: 'A neurociência tornou obsoletas as outras abordagens.', tag: 'debate',
      resposta: 'A neurociência acrescentou um nível de explicação importante, mas não substitui o estudo do comportamento, da cognição, das relações e do sentido. Saber qual área cerebral se ativa não diz, por si, o que a pessoa pensa ou por que age.' },
  ],
  aplicacao: `<p>Complete a linha do tempo com oito marcos de Wundt à neurociência, incluindo três marcos brasileiros (Antipoff, Nise da Silveira, Lei 4.119).</p>`,
  fonte: {
    obra: 'Nise da Silveira, Imagens do inconsciente (1981), introdução', link: null,
    orientacao: `<p>Observe como a autora descreve o trabalho com pintura e modelagem e o respeito pelos pacientes.</p>`,
  },
  perguntas: [
    { p: 'Que escola Watson fundou?', r: 'O behaviorismo.' },
    { p: 'O que estudou a Gestalt?', r: 'A percepção de totalidades organizadas.' },
    { p: 'O que fundou Helena Antipoff?', r: 'A Sociedade Pestalozzi em Minas Gerais.' },
  ],
  exercicios: [
    mc('Os Princípios de psicologia de James são de:', ['1890', '1879', '1913', '1956'], 0, 'Funcionalismo.'),
    mc('O "número mágico sete" é de:', ['George Miller', 'Wundt', 'Pavlov', 'Freud'], 0, '1956.'),
    mc('O Museu de Imagens do Inconsciente foi criado por:', ['Nise da Silveira', 'Helena Antipoff', 'Freud', 'Jung'], 0, '1952.'),
    mc('A Lei 10.216/2001 trata da:', ['Assistência em saúde mental', 'Profissão de psicólogo', 'Educação', 'Música'], 0, 'Reforma psiquiátrica.'),
    mc('Pavlov recebeu o Nobel em:', ['1904', '1913', '1879', '1929'], 0, 'Digestão.'),
    disc('Complete a linha do tempo com oito marcos e três brasileiros.', ['Marcos', 'Brasil', 'Datas', 'Ideias']),
  ],
  resumo: ['Wundt e James.', 'Behaviorismo, Gestalt, psicanálise, Piaget.', 'Revolução cognitiva (1956).', 'Neurociência cognitiva.', 'Brasil: Antipoff, Nise, leis.'],
  referencias: [
    { texto: 'William James, Princípios de psicologia (1890).' },
    { texto: 'Nise da Silveira, Imagens do inconsciente (1981).' },
    { texto: 'John B. Watson, "A psicologia como o behaviorista a vê" (1913).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1879', 'Wundt.'], ['1913', 'Watson.'], ['1952', 'Nise.']],
  avancado: {
    texto: `<h3>Piaget e os estágios</h3>
<p>Jean Piaget descreveu estágios do desenvolvimento cognitivo: sensório-motor, pré-operatório, operatório concreto e operatório formal ${tag('fato')}. A ideia de que a criança constrói ativamente seu conhecimento influenciou muito a educação ${tag('fato')}. Pesquisas posteriores mostraram que as idades e a rigidez dos estágios devem ser relativizadas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jean Piaget, O nascimento da inteligência na criança (1936).' }],
    exercicios: [
      mc('O primeiro estágio de Piaget é o:', ['Sensório-motor', 'Operatório formal', 'Pré-operatório', 'Concreto'], 0, 'Ordem.'),
      mc('O raciocínio hipotético-dedutivo aparece no estágio:', ['Operatório formal', 'Sensório-motor', 'Pré-operatório', 'Nenhum'], 0, 'Adolescência.'),
      mc('Pesquisas posteriores pedem relativizar:', ['Idades e rigidez dos estágios', 'A existência de crianças', 'Toda a obra', 'Nada'], 0, 'Crítica.'),
      disc('Descreva os quatro estágios com um exemplo de comportamento de cada.', ['Estágios', 'Exemplos', 'Idades aproximadas', 'Crítica'])],
  },
}),

aula({
  id: 'ps2-3', titulo: 'Aristóteles, Santo Tomás e William James', duracao: '150 min',
  aprendera: ['Expor a definição aristotélica da alma', 'Expor a tese tomista da unidade substancial', 'Conhecer o fluxo de consciência e o hábito em James', 'Comparar as três abordagens'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dois filósofos clássicos e um pioneiro da psicologia científica: o que cada um ensina sobre a vida psíquica?</p>
<h3>Aristóteles</h3>
<p>A alma é o "ato primeiro de um corpo natural organizado" (Sobre a alma, II, 1) ${tag('fato')}. Há almas vegetativa, sensitiva e intelectiva; a humana inclui as três funções ${tag('fato')}. O intelecto conhece as formas das coisas sem a matéria ${tag('fato')}.</p>
<h3>Santo Tomás</h3>
<p>Tomás sustenta que há uma única alma no homem, forma substancial do corpo, e que o intelecto não é ato de órgão corporal, o que fundamenta a imortalidade da alma ${tag('doutrina')}. Nas Questões disputadas sobre a alma (q. 1), pergunta como a alma pode ser forma do corpo e, ao mesmo tempo, subsistir ${tag('fato')}.</p>
<h3>William James</h3>
<p>James (1842–1910) descreveu a consciência como um "fluxo" contínuo, não uma soma de elementos ${tag('fato')}. No capítulo sobre o hábito, mostrou como a repetição grava caminhos no sistema nervoso e deu conselhos práticos para formar bons hábitos ${tag('fato')}. Em As variedades da experiência religiosa (1902), estudou a religião a partir de relatos pessoais ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Aristóteles e Tomás oferecem uma metafísica da alma; James, uma descrição fina da experiência consciente; ambos os enfoques podem dialogar ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Ato primeiro', 'Para Aristóteles, a perfeição que faz algo ser o que é.'],
    ['Unidade substancial', 'Tese de que corpo e alma formam uma só substância.'],
    ['Subsistente', 'Que existe por si, não só como parte.'],
    ['Fluxo de consciência', 'Expressão de James para a continuidade da vida mental.'],
    ['Hábito', 'Disposição adquirida por repetição.'],
  ],
  exemplos: `<p><strong>James e o hábito:</strong> James aconselha começar uma nova resolução com o máximo de firmeza possível, nunca permitir uma exceção até que o hábito esteja enraizado e agir na primeira oportunidade. São conselhos que ecoam a doutrina clássica da virtude como hábito.</p>`,
  contexto: `<p><strong>No mundo:</strong> As variedades da experiência religiosa nasceu das Gifford Lectures, proferidas por James em Edimburgo ${tag('fato')}. <strong>No Brasil:</strong> a antropologia tomista é estudada em cursos de filosofia de faculdades católicas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o intelecto indica algo mais que o corpo, segundo Tomás', tag: 'doutrina',
    premissas: ['O intelecto pode conhecer as naturezas de todos os corpos.', 'O que conhece todos os corpos não pode ter, em sua operação própria, a natureza determinada de um corpo, que o limitaria.', 'Logo, a operação intelectual não é ato de órgão corporal.'],
    conclusao: 'Logo, a alma intelectiva tem uma operação própria e é subsistente.',
    nota: 'É o argumento da Suma Teológica, I, q. 75, a. 2; é discutido na filosofia da mente atual.',
  },
  objecoes: [
    { objecao: 'A neurociência mostra que lesões cerebrais afetam o pensamento; logo, o intelecto é o cérebro.', tag: 'debate',
      resposta: 'Tomás admite que o intelecto depende dos sentidos e da imaginação, que são corporais; por isso lesões afetam o pensar. Para ele, a dependência é extrínseca (dos materiais do pensamento), não intrínseca (do ato mesmo de entender). O debate é filosófico e continua.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura da questão 1 das Questões disputadas sobre a alma, de Santo Tomás, ou do capítulo sobre o hábito dos Princípios de psicologia, de James.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Questões disputadas sobre a alma, q. 1', link: null,
    orientacao: `<p>Observe as objeções, a solução e o modo como Tomás une forma e subsistência.</p>`,
  },
  perguntas: [
    { p: 'Como Aristóteles define a alma?', r: 'Como ato primeiro de um corpo natural organizado.' },
    { p: 'Por que, para Tomás, a alma é subsistente?', r: 'Porque o intelecto tem uma operação que não é ato de órgão corporal.' },
    { p: 'O que é o fluxo de consciência?', r: 'A descrição de James da vida mental como contínua.' },
  ],
  exercicios: [
    mc('As variedades da experiência religiosa é de:', ['1902', '1890', '1879', '1946'], 0, 'James.'),
    mc('A alma humana, para Aristóteles, inclui funções:', ['Vegetativas, sensitivas e intelectivas', 'Só intelectivas', 'Só sensitivas', 'Nenhuma'], 0, 'Três.'),
    mc('O argumento de Tomás está em:', ['Suma Teológica I, q. 75, a. 2', 'Sobre a alma I', 'Confissões X', 'Ensaio II'], 0, 'Fonte.'),
    mc('James foi pioneiro do:', ['Funcionalismo', 'Behaviorismo', 'Estruturalismo alemão', 'Dodecafonismo'], 0, 'Escola.'),
    mc('Para Tomás, o intelecto depende do corpo de modo:', ['Extrínseco', 'Intrínseco', 'Nenhum', 'Total'], 0, 'Distinção.'),
    disc('Faça a ficha de leitura de Tomás ou de James.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Aristóteles: ato primeiro.', 'Tomás: unidade e subsistência.', 'James: fluxo de consciência.', 'Hábito.', 'Variedades (1902).'],
  referencias: [
    { texto: 'Aristóteles, Sobre a alma.', livro: 'aristoteles-alma' },
    { texto: 'Santo Tomás de Aquino, Questões disputadas sobre a alma.', livro: 'tomas-alma' },
    { texto: 'William James, Princípios de psicologia (1890).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['Ato primeiro', 'Aristóteles.'], ['Subsistente', 'Tomás.'], ['Fluxo', 'James.']],
  avancado: {
    texto: `<h3>Intelecto agente e possível</h3>
<p>Aristóteles distingue, em Sobre a alma (III, 5), um intelecto que "se torna todas as coisas" e outro que "as faz todas", como a luz ${tag('fato')}. Averróis interpretou o intelecto como único para toda a humanidade; Tomás, no tratado A unidade do intelecto contra os averroístas (1270), defendeu que cada homem tem seu intelecto ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Comentário ao Da Alma.', livro: 'tomas-com-alma' }],
    exercicios: [
      mc('O intelecto que "faz todas as coisas" é o:', ['Agente', 'Possível', 'Passivo', 'Sensível'], 0, 'Luz.'),
      mc('Averróis defendeu o intelecto:', ['Único para todos', 'Individual', 'Inexistente', 'Corporal'], 0, 'Interpretação.'),
      mc('A unidade do intelecto é de:', ['1270', '1879', '1649', '400'], 0, 'Tomás.'),
      disc('Explique por que Tomás considera essencial que cada homem tenha seu intelecto.', ['Averróis', 'Tomás', 'Responsabilidade pessoal', 'Conclusão'])],
  },
}),

aula({
  id: 'ps2-4', titulo: 'Freud, Jung e Viktor Frankl', duracao: '150 min',
  aprendera: ['Expor os conceitos centrais da psicanálise', 'Conhecer a psicologia analítica de Jung', 'Expor a logoterapia de Frankl', 'Avaliar criticamente as três abordagens'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dois vienenses, Freud e Frankl, e um suíço, Jung, investigaram o que há de profundo na pessoa. O que propuseram?</p>
<h3>Freud</h3>
<p>Sigmund Freud (1856–1939) fundou a psicanálise ${tag('fato')}. Em A interpretação dos sonhos (1900), tratou o sonho como realização disfarçada de desejos ${tag('fato')}. Propôs o inconsciente dinâmico e, em O ego e o id (1923), as instâncias id, ego e superego ${tag('fato')}. Via a religião como ilusão (O futuro de uma ilusão, 1927) ${tag('fato')}.</p>
<h3>Jung</h3>
<p>Carl Gustav Jung (1875–1961) rompeu com Freud por volta de 1913 ${tag('fato')}. Propôs o inconsciente coletivo, com arquétipos, e valorizou a dimensão religiosa da psique ${tag('fato')}.</p>
<h3>Frankl</h3>
<p>Viktor Frankl (1905–1997), sobrevivente de campos de concentração nazistas, fundou a logoterapia ${tag('fato')}. Em Em busca de sentido (1946), sustentou que a motivação fundamental é a "vontade de sentido" e que, mesmo em condições extremas, resta a liberdade de escolher a atitude ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>A psicanálise influenciou enormemente a cultura, mas muitas de suas teses são de difícil verificação empírica ${tag('debate')}. A visão de Frankl, que reconhece liberdade, responsabilidade e sentido, é próxima da antropologia cristã ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Inconsciente', 'Conteúdos psíquicos fora da consciência, com efeitos sobre ela.'],
    ['Id, ego, superego', 'Instâncias do aparelho psíquico em Freud.'],
    ['Arquétipo', 'Para Jung, padrão universal do inconsciente coletivo.'],
    ['Logoterapia', 'Abordagem de Frankl centrada na busca de sentido.'],
    ['Vontade de sentido', 'Para Frankl, a motivação humana fundamental.'],
  ],
  exemplos: `<p><strong>Frankl no campo:</strong> Frankl relata que prisioneiros que mantinham algo pelo que viver (reencontrar alguém, terminar uma obra) resistiam melhor às condições extremas. Ele mesmo reconstruía mentalmente seu manuscrito perdido. A tese de que o sentido sustenta a vida nasce dessa experiência.</p>`,
  contexto: `<p><strong>No mundo:</strong> Em busca de sentido vendeu milhões de exemplares em muitas línguas ${tag('fato')}. <strong>No Brasil:</strong> há associações de logoterapia e cursos de formação na abordagem de Frankl ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a liberdade de atitude resiste às condições extremas', tag: 'argumento',
    premissas: ['Frankl observou pessoas que, em condições idênticas de sofrimento, assumiram atitudes muito diferentes.', 'Se as condições determinassem tudo, as atitudes seriam iguais.', 'Logo, há um espaço de liberdade na atitude diante das condições.'],
    conclusao: 'Logo, a pessoa conserva, mesmo no extremo, a liberdade de escolher sua atitude.',
    nota: 'Frankl não nega as influências; afirma que não esgotam a pessoa.',
  },
  objecoes: [
    { objecao: 'A psicanálise é ciência comprovada.', tag: 'debate',
      resposta: 'Algumas ideias amplas (processos fora da consciência, defesas psicológicas) têm apoio empírico de outras formas. Mas teses específicas de Freud, como o complexo de Édipo universal, são difíceis de testar. Karl Popper criticou a psicanálise como não falseável. O tema é debatido.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (alternativa): ficha de leitura de um capítulo de Em busca de sentido, de Frankl, conforme o método do Degrau 0, comparando-o com uma tese de Freud.</p>`,
  fonte: {
    obra: 'Viktor Frankl, Em busca de sentido (1946), segunda parte (conceitos básicos de logoterapia)', link: null,
    orientacao: `<p>Observe as três vias do sentido: realizar uma obra, viver um encontro e assumir o sofrimento inevitável.</p>`,
  },
  perguntas: [
    { p: 'Quais as instâncias do aparelho psíquico em Freud?', r: 'Id, ego e superego.' },
    { p: 'O que é o inconsciente coletivo para Jung?', r: 'Camada comum da psique, com arquétipos universais.' },
    { p: 'Qual a motivação fundamental para Frankl?', r: 'A vontade de sentido.' },
  ],
  exercicios: [
    mc('A interpretação dos sonhos é de:', ['1900', '1923', '1946', '1913'], 0, 'Freud.'),
    mc('Jung rompeu com Freud por volta de:', ['1913', '1900', '1939', '1946'], 0, 'Ruptura.'),
    mc('Frankl fundou a:', ['Logoterapia', 'Psicanálise', 'Gestalt', 'Psicologia analítica'], 0, 'Abordagem.'),
    mc('O futuro de uma ilusão trata da:', ['Religião', 'Memória', 'Percepção', 'Infância apenas'], 0, 'Freud, 1927.'),
    mc('Popper criticou a psicanálise como:', ['Não falseável', 'Experimental demais', 'Matemática', 'Religiosa'], 0, 'Epistemologia.'),
    disc('Faça a ficha de leitura de Frankl comparando-o com Freud.', ['Tese de Frankl', 'Tese de Freud', 'Comparação', 'Avaliação']),
  ],
  resumo: ['Freud: inconsciente, id, ego, superego.', 'Jung: inconsciente coletivo.', 'Frankl: vontade de sentido.', 'Três vias do sentido.', 'Crítica: falseabilidade.'],
  referencias: [
    { texto: 'Viktor Frankl, Em busca de sentido (1946).' },
    { texto: 'Sigmund Freud, A interpretação dos sonhos (1900).' },
    { texto: 'Carl Gustav Jung, O homem e seus símbolos (1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha', 'Ler a fonte indicada'],
  revisao: [['Freud', 'Inconsciente.'], ['Jung', 'Arquétipos.'], ['Frankl', 'Sentido.']],
  avancado: {
    texto: `<h3>As três vias do sentido</h3>
<p>Frankl afirma que se encontra sentido realizando uma obra ou ação, vivendo algo ou amando alguém, e assumindo com dignidade um sofrimento inevitável ${tag('fato')}. A terceira via não glorifica o sofrimento evitável; trata do que não pode ser mudado ${tag('fato')}. Essa visão dialoga com a doutrina cristã do sofrimento redentor, sem se confundir com ela ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Viktor Frankl, Em busca de sentido (1946).' }],
    exercicios: [
      mc('As três vias do sentido são:', ['Obra, encontro e atitude diante do sofrimento', 'Dinheiro, poder e prazer', 'Id, ego e superego', 'Fé, esperança e caridade'], 0, 'Frankl.'),
      mc('A terceira via trata do sofrimento:', ['Inevitável', 'Evitável', 'Imaginário', 'Alheio'], 0, 'Distinção.'),
      mc('Frankl glorifica o sofrimento evitável?', ['Não', 'Sim', 'Às vezes', 'Não trata disso'], 0, 'Cuidado.'),
      disc('Aplique as três vias do sentido a uma situação concreta de vida, com respeito e sem simplificações.', ['Situação', 'Três vias', 'Cuidados', 'Reflexão'])],
  },
}),

avaliacao('ps2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da psicologia e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia suas fichas de leitura.</li></ul>`,
[
  disc('Trace a história da psicologia em oito marcos, de Aristóteles à neurociência, incluindo dois marcos brasileiros, com a ideia central de cada um.', ['Marcos', 'Ideias', 'Brasil', 'Ordem']),
  disc('Compare a concepção de pessoa em Santo Tomás, Freud e Frankl, especialmente quanto à liberdade.', ['Tomás', 'Freud', 'Frankl', 'Liberdade']),
]),
];
