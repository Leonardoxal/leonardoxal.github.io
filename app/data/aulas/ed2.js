// Educação II — da paideia à escola moderna e os grandes autores (etapas 4 e 5 do percurso de Educação).
// Paideia grega, educação romana e artes liberais; escolas medievais, universidades, Ratio Studiorum e escola moderna;
// autores antigos e medievais; autores modernos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ed2-1', titulo: 'A paideia grega, a educação romana e as artes liberais', duracao: '150 min',
  aprendera: ['Explicar o ideal grego de paideia', 'Conhecer as escolas de Isócrates, Platão e Aristóteles', 'Descrever a educação romana e Quintiliano', 'Distinguir trivium e quadrivium'],
  prereq: ['Educação I (módulo ED1)'],
  explicacao: `
<h3>O problema</h3>
<p>Muito do que chamamos escola — mestre, alunos, currículo, retórica, matemática — nasceu na Grécia e em Roma. Que ideal de homem essas escolas buscavam?</p>
<h3>A paideia</h3>
<p>Os gregos chamavam <em>paideia</em> a formação do homem livre: ginástica para o corpo, música e poesia para a alma, e mais tarde retórica e filosofia ${tag('fato')}. Homero era o grande livro escolar ${tag('fato')}.</p>
<h3>As escolas</h3>
<p>No século IV a.C., Isócrates abriu em Atenas uma escola de retórica voltada à vida pública; Platão fundou a Academia, por volta de 387 a.C.; e Aristóteles, o Liceu, em 335 a.C. ${tag('fato')}. Isócrates e Platão divergiam: para o primeiro, a eloquência formava o cidadão; para o segundo, só a filosofia levava à verdade ${tag('interpretacao')}.</p>
<h3>Roma e Quintiliano</h3>
<p>A educação romana passava do <em>litterator</em> (primeiras letras) ao <em>grammaticus</em> (língua e poetas) e ao <em>rhetor</em> (eloquência) ${tag('fato')}. Na Instituição oratória (c. 95), Quintiliano descreveu a formação do orador desde a infância, retomou a definição de Catão do orador como homem de bem perito em falar e defendeu a escola em comum diante do ensino só doméstico (livro I) ${tag('fato')}.</p>
<h3>As artes liberais</h3>
<p>Na Antiguidade tardia fixaram-se as sete artes liberais, divididas depois em trivium — gramática, retórica e dialética — e quadrivium — aritmética, geometria, música e astronomia ${tag('fato')}. Marciano Capela (séc. V), Boécio e Cassiodoro (séc. VI) as transmitiram à Idade Média ${tag('fato')}. "Liberais" porque próprias do homem livre, em contraste com as artes servis ${tag('fato')}.</p>`,
  vocabulario: [
    ['Paideia', 'Formação integral do homem livre na Grécia.'],
    ['Academia e Liceu', 'Escolas de Platão e de Aristóteles em Atenas.'],
    ['Grammaticus', 'Mestre romano de língua e literatura.'],
    ['Trivium', 'Gramática, retórica e dialética.'],
    ['Quadrivium', 'Aritmética, geometria, música e astronomia.'],
  ],
  exemplos: `<p><strong>O trivium hoje:</strong> ao estudar um texto, você primeiro entende as palavras e a construção (gramática), depois verifica se o raciocínio é válido (dialética) e por fim expõe o que entendeu de modo claro e persuasivo (retórica). As três artes continuam sendo a base de qualquer estudo sério.</p>`,
  contexto: `<p><strong>No mundo:</strong> a obra de Werner Jaeger, Paideia (1933–1947), tornou-se referência para o estudo da formação grega ${tag('fato')}. <strong>No Brasil:</strong> escolas de educação clássica que retomam o trivium têm surgido nas últimas décadas, sobretudo em meios cristãos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as artes liberais formam o homem livre', tag: 'argumento',
    premissas: ['Ser livre exige julgar por si, e não só obedecer ou repetir.', 'Julgar bem exige entender a linguagem, raciocinar corretamente e conhecer a ordem do mundo.', 'É isso que o trivium e o quadrivium cultivam.'],
    conclusao: 'Logo, as artes liberais são formação própria de quem deve viver como homem livre.',
    nota: 'Hoje "livre" inclui todos: a democratização da educação estende esse ideal a cada pessoa.',
  },
  objecoes: [
    { objecao: 'A paideia era para poucos homens livres, sustentada por escravos; não serve de modelo.', tag: 'debate',
      resposta: 'É fato que a educação antiga era excludente. Mas o ideal de formação integral pode ser separado de sua condição histórica injusta e estendido a todos. O cristianismo e a escola moderna fizeram justamente isso, ainda que de modos diferentes.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa: registre os marcos da educação antiga (Homero, Isócrates, Academia, Liceu, Quintiliano, artes liberais), com data, instituição ou obra e ideia central.</p>`,
  fonte: {
    obra: 'Quintiliano, Instituição oratória, livro I, caps. 1–2', link: null,
    orientacao: `<p>Observe os conselhos sobre a primeira infância e os argumentos a favor da escola em comum.</p>`,
  },
  perguntas: [
    { p: 'O que é paideia?', r: 'A formação integral do homem livre na Grécia.' },
    { p: 'Quais são as artes do trivium?', r: 'Gramática, retórica e dialética.' },
    { p: 'Que tipo de ensino Quintiliano defendeu no livro I?', r: 'A escola em comum, diante do ensino só doméstico.' },
  ],
  exercicios: [
    mc('A Academia foi fundada por:', ['Isócrates', 'Platão', 'Aristóteles', 'Quintiliano'], 1, 'c. 387 a.C.'),
    mc('O quadrivium inclui:', ['Gramática e retórica', 'Aritmética e astronomia', 'Direito e medicina', 'Teologia e filosofia'], 1, 'Artes matemáticas.'),
    mc('A Instituição oratória é de:', ['Cícero', 'Sêneca', 'Quintiliano', 'Boécio'], 2, 'c. 95.'),
    mc('O mestre romano de língua e poetas era o:', ['Litterator', 'Grammaticus', 'Rhetor', 'Paedagogus'], 1, 'Segundo grau.'),
    mc('"Liberais" porque próprias do homem:', ['Rico', 'Livre', 'Religioso', 'Velho'], 1, 'Oposto de servis.'),
    disc('Registre os marcos da educação antiga com data, instituição ou obra e ideia central.', ['Marcos', 'Datas', 'Ideias', 'Fontes']),
  ],
  resumo: ['Paideia: formação integral.', 'Isócrates, Academia, Liceu.', 'Roma: litterator, grammaticus, rhetor.', 'Quintiliano (c. 95).', 'Trivium e quadrivium.'],
  referencias: [
    { texto: 'Quintiliano, Instituição oratória (c. 95).' },
    { texto: 'Werner Jaeger, Paideia: a formação do homem grego (1933–1947).' },
    { texto: 'Henri-Irénée Marrou, História da educação na Antiguidade (1948).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Paideia', 'Formação integral.'], ['Trivium', 'Gramática, retórica, dialética.'], ['Quintiliano', 'Escola em comum.']],
  avancado: {
    texto: `<h3>Marrou e a educação antiga</h3>
<p>Henri-Irénée Marrou, historiador católico, mostrou em sua História da educação na Antiguidade (1948) que os cristãos dos primeiros séculos frequentavam as escolas clássicas e não criaram de início escolas próprias para as letras, reservando à família e à Igreja a formação na fé ${tag('interpretacao')}. Só mais tarde as escolas monásticas e episcopais assumiriam também o ensino das letras ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Henri-Irénée Marrou, História da educação na Antiguidade (1948).' }],
    exercicios: [
      mc('Marrou foi:', ['Filósofo grego', 'Historiador católico francês', 'Imperador romano', 'Reformador protestante'], 1, 'Historiador.'),
      mc('Segundo Marrou, os primeiros cristãos estudavam letras:', ['Só em casa', 'Nas escolas clássicas', 'Em universidades', 'Não estudavam'], 1, 'Interpretação.'),
      mc('A formação na fé ficava com:', ['O grammaticus', 'A família e a Igreja', 'O Estado', 'O rhetor'], 1, 'Distinção.'),
      disc('Discuta o que os cristãos podiam aproveitar e o que deviam recusar da escola clássica.', ['Aproveitar', 'Recusar', 'Fonte', 'Avaliação'])],
  },
}),

aula({
  id: 'ed2-2', titulo: 'Das escolas monásticas à escola moderna: universidades, Ratio Studiorum e o Brasil', duracao: '150 min',
  aprendera: ['Descrever escolas monásticas e catedralícias', 'Explicar o nascimento das universidades', 'Conhecer a Ratio Studiorum', 'Situar marcos da educação brasileira'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A escola e a universidade, como as conhecemos, nasceram na Europa cristã. Como se passou dos mosteiros às universidades e destas à escola pública obrigatória?</p>
<h3>Mosteiros e catedrais</h3>
<p>Os mosteiros copiaram e conservaram textos antigos e ensinaram a ler para a liturgia e a lectio divina ${tag('fato')}. Carlos Magno, assessorado por Alcuíno de York, determinou na Admonitio generalis (789) que mosteiros e catedrais mantivessem escolas ${tag('fato')}. O III Concílio de Latrão (1179) mandou que cada catedral tivesse um mestre para ensinar gratuitamente os clérigos e os alunos pobres ${tag('fato')}.</p>
<h3>Universidades</h3>
<p>Entre os séculos XII e XIII, corporações de mestres e estudantes deram origem às universidades, como Bolonha, Paris e Oxford, com faculdades de artes, direito, medicina e teologia ${tag('fato')}. O método escolástico da lição e da disputa marcou o ensino ${tag('fato')}.</p>
<h3>Época moderna</h3>
<p>A Companhia de Jesus publicou em 1599 a Ratio Studiorum, plano de estudos de seus colégios, com progressão de classes, exercícios e emulação ${tag('fato')}. São João Batista de La Salle fundou no fim do século XVII os Irmãos das Escolas Cristãs, com escolas gratuitas para pobres, ensino na língua vernácula e ensino simultâneo de classes ${tag('fato')}. Na Prússia, um regulamento de 1763 estabeleceu a obrigatoriedade escolar, e no século XIX a escola estatal obrigatória se difundiu ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Os jesuítas chegaram em 1549 com Manuel da Nóbrega e fundaram os primeiros colégios ${tag('fato')}. Em 1759, a reforma pombalina expulsou os jesuítas e criou as aulas régias ${tag('fato')}. A lei de 15 de outubro de 1827 mandou criar escolas de primeiras letras — origem do Dia do Professor — e o Colégio Pedro II foi fundado em 1837 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Escola catedralícia', 'Escola mantida junto à catedral.'],
    ['Universidade', 'Corporação de mestres e estudantes, nascida nos séculos XII–XIII.'],
    ['Disputa', 'Exercício escolástico de discussão de uma questão com objeções e respostas.'],
    ['Ratio Studiorum', 'Plano de estudos dos colégios jesuítas (1599).'],
    ['Aulas régias', 'Aulas avulsas criadas pela reforma pombalina.'],
  ],
  exemplos: `<p><strong>Uma questão disputada:</strong> o mestre propõe "se o mestre pode ensinar". Apresentam-se argumentos contrários, um argumento em sentido oposto, a resposta do mestre e a solução de cada objeção. É a forma das Questões disputadas de Tomás — e um excelente exercício de pensar com justiça às objeções.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra <em>universitas</em> designava inicialmente qualquer corporação, e não um conjunto de saberes ${tag('fato')}. <strong>No Brasil:</strong> não houve universidade no período colonial; as primeiras faculdades vieram no século XIX ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Igreja deu origem à escola europeia', tag: 'argumento',
    premissas: ['O cristianismo é religião de um livro e de uma liturgia, que exigem leitura.', 'A fé busca entender (fides quaerens intellectum).', 'A caridade levou a ensinar gratuitamente os pobres.'],
    conclusao: 'Logo, mosteiros, catedrais e ordens religiosas tornaram-se os grandes promotores da escola na Europa.',
    nota: 'Isso não significa que todo ensino fosse eclesiástico nem que não houvesse limites e conflitos.',
  },
  objecoes: [
    { objecao: 'A Idade Média foi uma "idade das trevas" para a educação.', tag: 'debate',
      resposta: 'Os historiadores do período rejeitam essa caricatura: a Idade Média criou as universidades, preservou os textos antigos e formou o método escolástico. Houve, sim, analfabetismo amplo e desigualdades, como em quase todas as sociedades pré-modernas. O juízo justo considera ambos.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com os marcos medievais, modernos e brasileiros, com data, instituição ou obra e ideia central.</p>`,
  fonte: {
    obra: 'Companhia de Jesus, Ratio Studiorum (1599), regras do professor', link: null,
    orientacao: `<p>Observe a preleção, a repetição, os exercícios escritos e a emulação; compare com uma aula de hoje.</p>`,
  },
  perguntas: [
    { p: 'O que determinou o III Concílio de Latrão sobre escolas?', r: 'Que cada catedral tivesse um mestre para ensinar gratuitamente clérigos e alunos pobres.' },
    { p: 'Quando foi publicada a Ratio Studiorum?', r: 'Em 1599.' },
    { p: 'O que lembra o Dia do Professor no Brasil?', r: 'A lei de 15 de outubro de 1827, que mandou criar escolas de primeiras letras.' },
  ],
  exercicios: [
    mc('A Admonitio generalis é de:', ['529', '789', '1179', '1599'], 1, 'Carlos Magno.'),
    mc('Os Irmãos das Escolas Cristãs foram fundados por:', ['Inácio de Loyola', 'João Batista de La Salle', 'Dom Bosco', 'Comênio'], 1, 'Escolas gratuitas.'),
    mc('A reforma pombalina expulsou os jesuítas em:', ['1549', '1759', '1827', '1837'], 1, 'Aulas régias.'),
    mc('O Colégio Pedro II foi fundado em:', ['1808', '1827', '1837', '1889'], 2, 'Rio de Janeiro.'),
    mc('Universitas designava inicialmente:', ['Um prédio', 'Uma corporação', 'Um curso', 'Um livro'], 1, 'Corporação.'),
    disc('Complete a linha do tempo com marcos medievais, modernos e brasileiros.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  ],
  resumo: ['Mosteiros e catedrais (789; 1179).', 'Universidades (séculos XII–XIII).', 'Ratio Studiorum (1599); La Salle.', 'Obrigatoriedade escolar (Prússia, 1763).', 'Brasil: 1549, 1759, 1827, 1837.'],
  referencias: [
    { texto: 'Companhia de Jesus, Ratio Studiorum (1599).' },
    { texto: 'Hugo de São Vítor, Didascálicon (c. 1127).' },
    { texto: 'Lei de 15 de outubro de 1827 (escolas de primeiras letras).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo completa', 'Ler a fonte indicada'],
  revisao: [['1179', 'Latrão III.'], ['1599', 'Ratio Studiorum.'], ['1827', 'Primeiras letras.']],
  avancado: {
    texto: `<h3>O Didascálicon</h3>
<p>Hugo de São Vítor escreveu o Didascálicon (c. 1127) como guia para os estudantes da escola de São Vítor, em Paris: ordena as artes e as Escrituras e propõe a leitura metódica ${tag('fato')}. Ele aconselha aprender tudo, pois depois se verá que nada é supérfluo, e une o estudo à humildade e à disciplina ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Hugo de São Vítor, Didascálicon (c. 1127).' }],
    exercicios: [
      mc('O Didascálicon foi escrito por:', ['Alcuíno', 'Hugo de São Vítor', 'Tomás', 'Abelardo'], 1, 'São Vítor.'),
      mc('O Didascálicon é de cerca de:', ['789', '1127', '1270', '1599'], 1, 'Século XII.'),
      mc('Hugo une o estudo à:', ['Ambição', 'Humildade e disciplina', 'Riqueza', 'Política'], 1, 'Interpretação.'),
      disc('Compare os conselhos de estudo de Hugo com o método do Degrau 0.', ['Conselhos', 'Semelhanças', 'Diferenças', 'Aplicação'])],
  },
}),

aula({
  id: 'ed2-3', titulo: 'Autores antigos e medievais: Platão, Aristóteles, Agostinho e Tomás', duracao: '150 min',
  aprendera: ['Explicar a reminiscência no Mênon e a conversão do olhar na República', 'Explicar a formação da virtude pelo hábito em Aristóteles', 'Expor a tese do mestre interior em Agostinho', 'Expor a resposta de Tomás sobre se o homem pode ensinar'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Pode alguém ensinar a outro? Se sim, como? Quatro grandes autores responderam de modos que ainda orientam a reflexão educacional.</p>
<h3>Platão</h3>
<p>No Mênon, Sócrates conduz um jovem escravo, só por perguntas, a descobrir como duplicar a área de um quadrado, e sugere que aprender é recordar (reminiscência) ${tag('fato')}. Na República (livro VII), após a alegoria da caverna, afirma que a educação não põe a visão em olhos cegos, mas volta a alma inteira para o que deve ver ${tag('fato')}.</p>
<h3>Aristóteles</h3>
<p>Na Ética a Nicômaco (livro II), a virtude moral nasce do hábito: tornamo-nos justos praticando atos justos ${tag('fato')}. Na Política (livro VIII), defende que a educação seja cuidado do legislador e comum a todos os cidadãos, e discute leitura e escrita, ginástica, música e desenho ${tag('fato')}.</p>
<h3>Agostinho</h3>
<p>Em O Mestre (389), diálogo com seu filho Adeodato, Agostinho conclui que as palavras apenas nos advertem a procurar; quem ensina de verdade é Cristo, a Verdade que habita no interior ${tag('fato')}.</p>
<h3>Tomás</h3>
<p>Nas Questões disputadas sobre a verdade (q. 11), Tomás responde que o homem pode verdadeiramente ensinar: como o médico ajuda a natureza a produzir a saúde, o mestre ajuda a razão do aluno a chegar ao conhecimento, partindo do que ele já sabe ${tag('fato')}. Deus é o mestre principal, que dá a luz da razão; o mestre humano é causa real, mas auxiliar ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Reminiscência', 'Tese platônica de que aprender é recordar.'],
    ['Conversão (periagogé)', 'Voltar a alma para a verdade, na República VII.'],
    ['Hábito', 'Disposição estável adquirida pela repetição de atos.'],
    ['Mestre interior', 'Cristo, que ensina interiormente, segundo Agostinho.'],
    ['Causa auxiliar', 'Agente que ajuda a natureza a produzir seu efeito, como o médico e o mestre.'],
  ],
  exemplos: `<p><strong>Ensinar como Tomás:</strong> para ensinar frações, o professor parte do que o aluno já sabe — dividir uma pizza —, propõe exemplos graduados e deixa o aluno raciocinar. Não "despeja" o conhecimento: ajuda a razão do aluno a chegar a ele, como o médico ajuda o corpo a sarar.</p>`,
  contexto: `<p><strong>No mundo:</strong> o "método socrático" de perguntas é usado ainda hoje em faculdades de direito e em escolas ${tag('fato')}. <strong>No Brasil:</strong> as obras de Agostinho e Tomás estão traduzidas, e O Mestre tem edições acessíveis ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o aluno é agente principal da própria aprendizagem', tag: 'argumento',
    premissas: ['Conhecer é um ato da inteligência de quem conhece.', 'Ninguém pode entender no lugar de outro.', 'O mestre pode propor sinais, ordem e exemplos, mas o ato de entender é do aluno.'],
    conclusao: 'Logo, o mestre é causa real mas auxiliar, e o aluno é o agente principal do aprender.',
    nota: 'Tomás e Agostinho convergem em ver no conhecimento um dom de Deus, que dá a luz da razão.',
  },
  objecoes: [
    { objecao: 'Se o aluno é o agente principal, o professor é dispensável.', tag: 'argumento',
      resposta: 'Tomás afirma justamente o contrário: o mestre é causa verdadeira, como o médico. Sem ele o aluno pode aprender, mas mais devagar e com mais erros. Ser auxiliar não é ser inútil, e sim servir à natureza do aluno.' },
  ],
  aplicacao: `<p>Faça a ficha de leitura de O Mestre, de Santo Agostinho, conforme o método do Degrau 0: tese, argumentos, conceitos, objeções e sua avaliação.</p>`,
  fonte: {
    obra: 'Santo Agostinho, O Mestre (389), caps. 10–14; Santo Tomás, Questões disputadas sobre a verdade, q. 11, a. 1', link: null,
    orientacao: `<p>Em Agostinho, observe o argumento de que as palavras só advertem. Em Tomás, a analogia do médico e a resposta às objeções tiradas de Agostinho.</p>`,
  },
  perguntas: [
    { p: 'O que Sócrates mostra com o escravo no Mênon?', r: 'Que, por perguntas, ele chega a descobrir uma verdade geométrica; Platão sugere que aprender é recordar.' },
    { p: 'Como se adquire a virtude moral segundo Aristóteles?', r: 'Pelo hábito, praticando atos virtuosos.' },
    { p: 'Que analogia Tomás usa para o mestre?', r: 'A do médico, que ajuda a natureza a produzir a saúde.' },
  ],
  exercicios: [
    mc('O problema geométrico do Mênon é:', ['Medir um círculo', 'Duplicar a área de um quadrado', 'Calcular um triângulo', 'Medir a Terra'], 1, 'Escravo.'),
    mc('"A educação não põe a visão em olhos cegos" está na República, livro:', ['I', 'IV', 'VII', 'X'], 2, 'Após a caverna.'),
    mc('O Mestre de Agostinho é um diálogo com:', ['Mônica', 'Adeodato', 'Ambrósio', 'Alípio'], 1, 'Seu filho.'),
    mc('Para Tomás, o mestre humano é causa:', ['Nenhuma', 'Real, mas auxiliar', 'Única', 'Principal'], 1, 'Analogia do médico.'),
    mc('A educação comum a todos os cidadãos é defendida na Política, livro:', ['I', 'III', 'VIII', 'V'], 2, 'Aristóteles.'),
    disc('Faça a ficha de leitura de O Mestre, de Santo Agostinho.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Mênon: reminiscência.', 'República VII: conversão do olhar.', 'Aristóteles: virtude pelo hábito; educação comum.', 'Agostinho: o mestre interior.', 'Tomás: o mestre como o médico.'],
  referencias: [
    { texto: 'Platão, Mênon.', livro: 'platao-menon' },
    { texto: 'Santo Agostinho, O Mestre (389).', livro: 'agostinho-mestre' },
    { texto: 'Santo Tomás de Aquino, Questões disputadas sobre a verdade, q. 11.', livro: 'tomas-verdade' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de O Mestre', 'Ler as fontes indicadas'],
  revisao: [['Mênon', 'Reminiscência.'], ['Ética II', 'Hábito.'], ['De magistro', 'Médico.']],
  avancado: {
    texto: `<h3>A educação musical em Aristóteles</h3>
<p>Na Política VIII, Aristóteles pergunta por que ensinar música: para o descanso, para a formação do caráter ou para o ócio nobre ${tag('fato')}. Responde que a música imita os estados de alma e por isso forma o caráter, e que deve ser ensinada para que os jovens saibam julgar, não para se tornarem profissionais ${tag('fato')}. O tema reaparece no debate sobre arte e formação moral ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Política, livro VIII.', livro: 'aristoteles-politica' }],
    exercicios: [
      mc('Para Aristóteles, a música forma o caráter porque:', ['É barata', 'Imita os estados de alma', 'É obrigatória', 'Cansa'], 1, 'Imitação.'),
      mc('A música deve ser ensinada para que os jovens:', ['Virem profissionais', 'Saibam julgar', 'Ganhem prêmios', 'Não estudem'], 1, 'Juízo.'),
      mc('A discussão está na Política, livro:', ['II', 'V', 'VIII', 'I'], 2, 'Educação.'),
      disc('Avalie a tese de que a música forma o caráter, com um exemplo atual.', ['Tese', 'Exemplo', 'Objeção', 'Avaliação'])],
  },
}),

aula({
  id: 'ed2-4', titulo: 'Autores modernos: Comênio, Locke, Rousseau, Newman, Montessori e Dewey', duracao: '150 min',
  aprendera: ['Conhecer a proposta de Comênio', 'Comparar Locke e Rousseau', 'Explicar o ideal de Newman', 'Conhecer o método Montessori e a pedagogia de Dewey'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A época moderna multiplicou as propostas pedagógicas. Que visão de homem está por trás de cada uma?</p>
<h3>Comênio</h3>
<p>João Amós Comênio, bispo dos Irmãos Morávios, propôs na Didática magna (1657) ensinar tudo a todos, com ordem gradual e escolas para meninos e meninas de todas as condições ${tag('fato')}. Seu Orbis pictus (1658) é considerado um dos primeiros livros escolares ilustrados ${tag('fato')}.</p>
<h3>Locke e Rousseau</h3>
<p>Em Alguns pensamentos sobre a educação (1693), Locke dá ênfase ao hábito, à virtude e à saúde do corpo, e prefere para o filho do cavalheiro um tutor em casa ${tag('fato')}. Rousseau, no Emílio (1762), propõe uma educação "negativa" nos primeiros anos, que proteja a bondade natural da criança da corrupção social; o livro foi condenado em Paris e em Genebra no ano de sua publicação ${tag('fato')}. Pio XI criticou o "naturalismo pedagógico" que nega o pecado original e a necessidade da graça (Divini illius Magistri) ${tag('doutrina')}.</p>
<h3>Newman</h3>
<p>Em A ideia de uma universidade (1852), John Henry Newman defendeu o conhecimento liberal como bem em si e a formação de um intelecto amplo, capaz de ver as relações entre os saberes, com a teologia entre eles ${tag('fato')}.</p>
<h3>Montessori e Dewey</h3>
<p>Maria Montessori, médica italiana e católica, abriu em Roma a primeira Casa dei Bambini (1907) e desenvolveu um método baseado no ambiente preparado e na atividade livre da criança com materiais próprios ${tag('fato')}. John Dewey, filósofo pragmatista americano, criou uma escola-laboratório em Chicago (1896) e, em Democracia e educação (1916), concebeu a escola como comunidade em que se aprende pela experiência e pela resolução de problemas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Didática magna', 'Obra de Comênio que propõe ensinar tudo a todos (1657).'],
    ['Educação negativa', 'Proposta de Rousseau de proteger a criança em vez de instruí-la cedo.'],
    ['Conhecimento liberal', 'Saber buscado como bem em si, segundo Newman.'],
    ['Ambiente preparado', 'Espaço organizado para a atividade autônoma da criança (Montessori).'],
    ['Pragmatismo', 'Filosofia que avalia ideias por suas consequências práticas (Dewey).'],
  ],
  exemplos: `<p><strong>Uma mesma criança, quatro propostas:</strong> com Comênio, ela segue uma série graduada de lições ilustradas; com Locke, ganha bons hábitos sob um tutor; com Rousseau, aprende pelas coisas, longe dos livros, até a adolescência; com Montessori, escolhe materiais num ambiente preparado; com Dewey, investiga um problema da comunidade escolar. Cada caminho pressupõe uma ideia de criança.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Emílio influenciou fortemente a pedagogia contemporânea, inclusive a Escola Nova ${tag('interpretacao')}. <strong>No Brasil:</strong> Anísio Teixeira, que estudou com Dewey nos Estados Unidos, foi um dos difusores de suas ideias ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que toda pedagogia supõe uma antropologia', tag: 'argumento',
    premissas: ['Educar é conduzir alguém a ser o que deve ser.', 'O que alguém deve ser depende do que ele é: natureza, fim, liberdade, feridas.', 'Por isso cada pedagogia traz, explícita ou implícita, uma visão do homem.'],
    conclusao: 'Logo, avaliar uma pedagogia exige avaliar a antropologia que a sustenta.',
    nota: 'Rousseau supõe a bondade natural; a tradição cristã afirma a bondade da natureza e a ferida do pecado.',
  },
  objecoes: [
    { objecao: 'Montessori e Dewey são incompatíveis com uma educação católica.', tag: 'debate',
      resposta: 'Montessori era católica e escreveu sobre a educação religiosa da criança; Dewey tinha uma filosofia naturalista. Elementos de ambos — atividade do aluno, ambiente bem organizado, aprendizagem por problemas — podem ser integrados com discernimento, desde que não se aceite a antropologia que contradiga a fé.' },
  ],
  aplicacao: `<p>Monte um quadro comparando Comênio, Locke, Rousseau, Newman, Montessori e Dewey: visão da criança, papel do professor, conteúdo e fim da educação.</p>`,
  fonte: {
    obra: 'Jean-Jacques Rousseau, Emílio (1762), livro I; John Locke, Alguns pensamentos sobre a educação (1693), §§ 1–10', link: null,
    orientacao: `<p>Compare o início das duas obras: o que cada autor diz sobre a natureza da criança e o papel do educador.</p>`,
  },
  perguntas: [
    { p: 'O que é a educação negativa de Rousseau?', r: 'Proteger a bondade natural da criança da corrupção social, sem instruí-la cedo.' },
    { p: 'Onde Montessori abriu a primeira Casa dei Bambini?', r: 'Em Roma, em 1907.' },
    { p: 'O que Newman defende em A ideia de uma universidade?', r: 'O conhecimento liberal como bem em si e um intelecto amplo, com a teologia entre os saberes.' },
  ],
  exercicios: [
    mc('O Orbis pictus é de:', ['Locke', 'Comênio', 'Rousseau', 'Dewey'], 1, '1658.'),
    mc('O Emílio foi condenado em:', ['Roma e Viena', 'Paris e Genebra', 'Londres', 'Nenhum lugar'], 1, '1762.'),
    mc('Locke preferia para o filho do cavalheiro:', ['A escola pública', 'Um tutor em casa', 'O mosteiro', 'A universidade'], 1, 'Pensamentos.'),
    mc('Democracia e educação é de:', ['Dewey', 'Newman', 'Montessori', 'Maritain'], 0, '1916.'),
    mc('Pio XI criticou o:', ['Método escolástico', 'Naturalismo pedagógico', 'Ensino do latim', 'Ensino gratuito'], 1, 'Divini illius Magistri.'),
    disc('Monte o quadro comparativo dos seis autores modernos.', ['Criança', 'Professor', 'Conteúdo', 'Fim']),
  ],
  resumo: ['Comênio: ensinar tudo a todos (1657).', 'Locke (1693): hábito e virtude.', 'Rousseau (1762): educação negativa.', 'Newman (1852): conhecimento liberal.', 'Montessori (1907) e Dewey (1916).'],
  referencias: [
    { texto: 'Jean-Jacques Rousseau, Emílio ou Da educação (1762).', livro: 'rousseau-emilio' },
    { texto: 'John Locke, Alguns pensamentos sobre a educação (1693).', livro: 'locke-educacao' },
    { texto: 'Jacques Maritain, Rumos da educação (1943).', livro: 'maritain-educacao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['Comênio', 'Tudo a todos.'], ['Rousseau', 'Educação negativa.'], ['Newman', 'Saber liberal.']],
  avancado: {
    texto: `<h3>Maritain diante de Dewey</h3>
<p>Em Rumos da educação, Maritain reconhece méritos da pedagogia ativa, como o respeito à atividade do aluno, mas critica o pragmatismo por reduzir a verdade ao que funciona e a educação à adaptação social ${tag('interpretacao')}. Para ele, a educação deve libertar a inteligência para a verdade e formar a pessoa para a sabedoria ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, Rumos da educação (1943).', livro: 'maritain-educacao' }],
    exercicios: [
      mc('Maritain reconhece em Dewey o mérito de:', ['Negar a verdade', 'Respeitar a atividade do aluno', 'Abolir a escola', 'Ensinar latim'], 1, 'Mérito.'),
      mc('Maritain critica no pragmatismo a redução da verdade ao:', ['Que funciona', 'Dogma', 'Livro', 'Estado'], 0, 'Crítica.'),
      mc('Para Maritain, a educação forma para a:', ['Adaptação', 'Sabedoria', 'Riqueza', 'Técnica apenas'], 1, 'Fim.'),
      disc('Exponha a crítica de Maritain a Dewey e avalie-a.', ['Méritos', 'Crítica', 'Avaliação', 'Fonte'])],
  },
}),

avaliacao('ed2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da educação e os grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo e sua ficha de O Mestre.</li><li>Revise o quadro comparativo dos autores modernos.</li></ul>`,
[
  disc('Trace a passagem das escolas monásticas às universidades e à escola moderna, com cinco marcos datados, incluindo dois brasileiros.', ['Marcos', 'Datas', 'Brasil', 'Continuidades e rupturas']),
  disc('Compare a resposta de Tomás à pergunta "pode o homem ensinar?" com a educação negativa de Rousseau, mostrando a antropologia de cada um.', ['Tomás', 'Rousseau', 'Antropologias', 'Avaliação']),
]),
];
