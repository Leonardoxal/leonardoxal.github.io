// Literatura V — aplicações, investigação e avaliação integradora (etapas 9 a 11 do percurso de Literatura).
// Leitura em voz alta e memorização; clubes de leitura; formação literária de crianças e jovens;
// investigação de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lt5-1', titulo: 'Ler em voz alta e memorizar poemas', duracao: '150 min',
  aprendera: ['Preparar a leitura em voz alta de um texto', 'Aplicar técnicas de memorização de poemas', 'Explicar o valor formativo da recitação', 'Conduzir um momento de leitura em família ou grupo'],
  prereq: ['Literatura IV (módulo LT4)'],
  explicacao: `
<h3>O problema</h3>
<p>Durante séculos, poemas foram aprendidos de cor e recitados. Hoje quase ninguém sabe um poema inteiro. Perdemos algo?</p>
<h3>Ler em voz alta</h3>
<p>Ler em voz alta obriga a perceber ritmo, pausas e entonação, e revela sentidos que a leitura silenciosa apressada perde ${tag('interpretacao')}. Prepara-se a leitura lendo antes, marcando pausas e palavras difíceis, e ajustando o tom ao texto ${tag('interpretacao')}.</p>
<h3>Memorizar</h3>
<p>Poemas com ritmo e rima memorizam-se com mais facilidade ${tag('fato')}. Técnicas eficazes: dividir em estrofes, repetir em voz alta, recitar sem olhar (prática de recuperação) e revisar em dias espaçados ${tag('interpretacao')}. São as mesmas estratégias de memória estudadas em Educação ${tag('interpretacao')}.</p>
<h3>Valor formativo</h3>
<p>Saber poemas de cor dá à pessoa um repertório de linguagem bela e de sentidos para os momentos da vida ${tag('interpretacao')}. A Igreja sempre memorizou orações e salmos, e a liturgia é em grande parte poesia rezada ${tag('fato')}.</p>
<h3>Em família e em grupo</h3>
<p>Momentos de leitura em voz alta — um capítulo à noite, um poema no domingo — criam hábito e vínculo, e formam leitores ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Leitura em voz alta', 'Leitura oral que dá corpo ao ritmo e ao sentido.'],
    ['Recitação', 'Dizer um texto de memória.'],
    ['Entonação', 'Variação da altura e da intensidade da voz.'],
    ['Pausa', 'Interrupção breve que marca o sentido e o ritmo.'],
    ['Repertório', 'Conjunto de textos que alguém conhece de memória.'],
  ],
  exemplos: `<p><strong>Um soneto em uma semana:</strong> segunda, ler em voz alta três vezes e aprender o primeiro quarteto; terça, o segundo; quarta, os tercetos; quinta, recitar tudo sem olhar e corrigir; domingo, recitar para a família. Uma semana depois, revisar. Um soneto por mês dá doze poemas por ano.</p>`,
  contexto: `<p><strong>No mundo:</strong> concursos de recitação de poesia são promovidos em escolas de vários países ${tag('fato')}. <strong>No Brasil:</strong> saraus literários têm se multiplicado em escolas, bibliotecas e periferias urbanas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que vale a pena saber poemas de cor', tag: 'argumento',
    premissas: ['O que sabemos de cor nos acompanha sem depender de livros ou telas.', 'Poemas concentram linguagem precisa e sentidos profundos.', 'Recitá-los em diferentes momentos da vida os faz ganhar novos sentidos.'],
    conclusao: 'Logo, memorizar poemas enriquece a linguagem e a vida interior.',
    nota: 'A memória não substitui a compreensão: aprende-se de cor o que se compreendeu.',
  },
  objecoes: [
    { objecao: 'Decorar é coisa ultrapassada; basta procurar o poema na internet.', tag: 'argumento',
      resposta: 'Procurar um poema dá acesso ao texto, mas não o torna parte de nós. O poema sabido de cor está disponível na fila, no hospital, na oração. A ciência da memória mostra também que o conhecimento memorizado libera a mente para compreender.' },
  ],
  aplicacao: `<p>Escolha um poema de pelo menos catorze versos, prepare sua leitura em voz alta (marcando pausas e ênfases), memorize-o em uma semana e recite-o para alguém, registrando o processo.</p>`,
  fonte: {
    obra: 'Antologia de poemas em língua portuguesa em domínio público (Camões, Gonçalves Dias, Castro Alves, Olavo Bilac)', link: { url: 'https://www.dominiopublico.gov.br', rotulo: 'Domínio Público' },
    orientacao: `<p>Escolha um poema com ritmo regular para começar.</p>`,
  },
  perguntas: [
    { p: 'Que técnica de memória é recitar sem olhar?', r: 'A prática de recuperação.' },
    { p: 'Por que ler em voz alta?', r: 'Para perceber ritmo, pausas e entonação, e sentidos que a leitura apressada perde.' },
    { p: 'Que poemas se memorizam mais facilmente?', r: 'Os que têm ritmo e rima.' },
  ],
  exercicios: [
    mc('Dizer um texto de memória é:', ['Recitação', 'Paráfrase', 'Escansão', 'Tradução'], 0, 'Definição.'),
    mc('Revisar em dias espaçados aplica o:', ['Espaçamento', 'Grifo', 'Resumo', 'Ditado'], 0, 'Memória.'),
    mc('A liturgia é em grande parte:', ['Prosa técnica', 'Poesia rezada', 'Lei', 'Narrativa histórica apenas'], 1, 'Salmos e hinos.'),
    mc('Saraus são:', ['Encontros de leitura e recitação', 'Provas escolares', 'Leilões', 'Jogos'], 0, 'Cultura.'),
    mc('Memorizar sem compreender é:', ['Ideal', 'Insuficiente', 'Proibido', 'Impossível'], 1, 'Nota.'),
    disc('Prepare, memorize e recite um poema, registrando o processo.', ['Preparação', 'Memorização', 'Recitação', 'Reflexão']),
  ],
  resumo: ['Leitura em voz alta: ritmo e sentido.', 'Memorizar: dividir, repetir, recuperar, espaçar.', 'Repertório interior.', 'Liturgia como poesia rezada.', 'Leitura em família.'],
  referencias: [
    { texto: 'Luís de Camões, Rimas.' },
    { texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' },
    { texto: 'Bíblia, Livro dos Salmos.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Recitar o poema memorizado', 'Consultar a fonte indicada'],
  revisao: [['Recitar', 'De memória.'], ['Recuperar', 'Sem olhar.'], ['Espaçar', 'Revisar.']],
  avancado: {
    texto: `<h3>A tradição oral</h3>
<p>Antes da escrita difundida, epopeias como as de Homero eram transmitidas oralmente por aedos, com fórmulas e epítetos repetidos que ajudavam a memória ("Aquiles de pés velozes") ${tag('fato')}. Milman Parry e Albert Lord estudaram, no século XX, cantores épicos orais dos Bálcãs para entender esse processo ${tag('fato')}. No Brasil, repentistas e cantadores mantêm tradições orais de improviso ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Albert Lord, The Singer of Tales (1960).' }],
    exercicios: [
      mc('Os cantores da poesia homérica eram os:', ['Aedos', 'Trovadores', 'Jograis', 'Bardos celtas'], 0, 'Grécia.'),
      mc('Parry e Lord estudaram cantores dos:', ['Bálcãs', 'Andes', 'Alpes', 'Pireneus'], 0, 'Oralidade.'),
      mc('No Brasil, tradição oral de improviso:', ['Repente', 'Soneto', 'Ópera', 'Romance'], 0, 'Nordeste.'),
      disc('Compare a técnica dos aedos com a dos repentistas brasileiros.', ['Aedos', 'Repentistas', 'Fórmulas', 'Memória'])],
  },
}),

aula({
  id: 'lt5-2', titulo: 'Clubes de leitura: escolher, perguntar e conversar', duracao: '150 min',
  aprendera: ['Escolher obras para um clube de leitura', 'Elaborar perguntas de discussão em níveis', 'Conduzir uma conversa respeitosa e fundamentada', 'Equilibrar livros antigos e novos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Ler sozinho é bom; conversar sobre o que se leu multiplica a compreensão. Como organizar um clube de leitura que funcione?</p>
<h3>Escolher</h3>
<p>Escolhem-se obras de valor, de extensão compatível com o tempo do grupo e com potencial de conversa ${tag('interpretacao')}. C. S. Lewis aconselhou ler um livro antigo a cada três novos, ou ao menos um antigo entre dois novos, para corrigir os preconceitos da própria época ${tag('fato')}.</p>
<h3>Perguntar</h3>
<p>Boas perguntas percorrem níveis: o que acontece (compreensão); como o texto faz isso (forma); por que os personagens agem assim (interpretação); o que isso revela sobre o homem e sobre nós (avaliação e aplicação) ${tag('interpretacao')}. Mortimer Adler, em Como ler um livro (com Charles Van Doren, 1972), propôs perguntas semelhantes para a leitura analítica ${tag('fato')}.</p>
<h3>Conduzir</h3>
<p>O moderador lança perguntas, pede que as respostas se apoiem no texto ("onde está isso?"), garante que todos falem e evita que a conversa se perca ${tag('interpretacao')}. Discordâncias são bem-vindas quando argumentadas ${tag('argumento')}.</p>
<h3>Em paróquias e escolas</h3>
<p>Clubes de leitura podem unir formação literária e espiritual, lendo romances, poemas e obras de autores cristãos ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Clube de leitura', 'Grupo que lê e discute obras periodicamente.'],
    ['Moderador', 'Pessoa que conduz a conversa.'],
    ['Pergunta de interpretação', 'Pergunta sobre o porquê e o sentido.'],
    ['Leitura analítica', 'Leitura que examina estrutura, tese e argumentos (Adler).'],
    ['Livro antigo', 'Obra de outra época, que corrige preconceitos da nossa.'],
  ],
  exemplos: `<p><strong>Roteiro para "Missa do galo":</strong> 1) O que acontece naquela noite? 2) Quem narra e quando? 3) Que detalhes da conversa com Conceição chamam a atenção? 4) Por que o narrador diz não entender a conversa? 5) O que o conto mostra sobre desejo, memória e silêncio? Cada resposta deve apontar uma passagem.</p>`,
  contexto: `<p><strong>No mundo:</strong> o movimento dos "Grandes Livros", nos Estados Unidos, organizou grupos de leitura de clássicos no século XX ${tag('fato')}. <strong>No Brasil:</strong> bibliotecas públicas e livrarias mantêm clubes de leitura abertos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conversar sobre livros aprofunda a leitura', tag: 'argumento',
    premissas: ['Cada leitor percebe aspectos diferentes de uma obra.', 'Ao confrontar leituras com o texto, corrigem-se erros e descobrem-se sentidos.', 'A exigência de fundamentar no texto disciplina a interpretação.'],
    conclusao: 'Logo, a conversa fundamentada sobre livros aprofunda a compreensão de todos.',
    nota: 'É a aplicação, à literatura, do método da disputa: objeções e respostas.',
  },
  objecoes: [
    { objecao: 'Em clube de leitura, cada um tem sua opinião e pronto.', tag: 'argumento',
      resposta: 'Opiniões diferentes enriquecem, mas se apoiam ou não no texto. Uma leitura que contradiz passagens explícitas pode ser corrigida. O respeito às pessoas não exige considerar iguais todas as interpretações.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: organize e conduza um encontro de clube de leitura (presencial ou online) sobre um conto ou poema, com roteiro de perguntas em níveis, e registre o que aprendeu.</p>`,
  fonte: {
    obra: 'Mortimer Adler e Charles Van Doren, Como ler um livro (1972); C. S. Lewis, introdução a A encarnação do Verbo, de Santo Atanásio (1944)', link: null,
    orientacao: `<p>Em Adler, as perguntas da leitura analítica. Em Lewis, o conselho sobre livros antigos.</p>`,
  },
  perguntas: [
    { p: 'Que conselho Lewis deu sobre livros antigos?', r: 'Ler um livro antigo a cada três novos, ou ao menos um entre dois.' },
    { p: 'Que níveis devem ter as perguntas?', r: 'Compreensão, forma, interpretação e avaliação.' },
    { p: 'O que o moderador deve pedir nas respostas?', r: 'Que se apoiem no texto.' },
  ],
  exercicios: [
    mc('Como ler um livro é de:', ['Adler e Van Doren', 'Lewis', 'Calvino', 'Bloom'], 0, '1972.'),
    mc('"Por que o personagem age assim?" é pergunta de:', ['Compreensão', 'Interpretação', 'Ortografia', 'Biografia'], 1, 'Nível.'),
    mc('O conselho sobre livros antigos está na introdução de Lewis a:', ['A encarnação do Verbo', 'Confissões', 'Divina Comédia', 'Mimesis'], 0, 'Atanásio.'),
    mc('Discordâncias no clube são:', ['Proibidas', 'Bem-vindas quando argumentadas', 'Inúteis', 'Sempre ofensivas'], 1, 'Conversa.'),
    mc('O movimento dos "Grandes Livros" surgiu nos:', ['Estados Unidos', 'Brasil', 'Japão', 'Egito'], 0, 'Século XX.'),
    disc('Organize e conduza um encontro de clube de leitura com roteiro em níveis.', ['Obra', 'Roteiro', 'Condução', 'Aprendizados']),
  ],
  resumo: ['Escolher obras de valor e extensão adequada.', 'Lewis: livros antigos.', 'Perguntas em níveis (Adler).', 'Apoiar-se no texto.', 'Formação literária e espiritual.'],
  referencias: [
    { texto: 'Mortimer Adler e Charles Van Doren, Como ler um livro (1972).' },
    { texto: 'C. S. Lewis, Um experimento na crítica literária (1961).' },
    { texto: 'Italo Calvino, Por que ler os clássicos (1991).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Conduzir o encontro', 'Ler as fontes indicadas'],
  revisao: [['Livro antigo', 'Lewis.'], ['Níveis', 'Perguntas.'], ['Texto', 'Fundamento.']],
  avancado: {
    texto: `<h3>Os quatro níveis de leitura de Adler</h3>
<p>Adler distinguiu a leitura elementar (decodificar), a inspecional (folhear com método), a analítica (compreender a fundo um livro) e a sintópica (comparar vários livros sobre o mesmo assunto) ${tag('fato')}. A leitura sintópica é a base de uma boa pesquisa ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Mortimer Adler e Charles Van Doren, Como ler um livro (1972).' }],
    exercicios: [
      mc('Comparar vários livros sobre o mesmo assunto é leitura:', ['Elementar', 'Inspecional', 'Analítica', 'Sintópica'], 3, 'Adler.'),
      mc('Folhear com método é leitura:', ['Inspecional', 'Analítica', 'Sintópica', 'Elementar'], 0, 'Níveis.'),
      mc('A leitura sintópica é base da:', ['Pesquisa', 'Alfabetização', 'Recitação', 'Ortografia'], 0, 'Interpretação.'),
      disc('Faça uma leitura inspecional de um livro e descreva o que descobriu em 20 minutos.', ['Livro', 'Estrutura', 'Tese provável', 'Plano de leitura'])],
  },
}),

aula({
  id: 'lt5-3', titulo: 'Formação literária de crianças e jovens', duracao: '150 min',
  aprendera: ['Conhecer o valor dos contos de fadas e populares', 'Conhecer a literatura infantil brasileira', 'Escolher livros adequados à idade', 'Planejar a formação de leitores em casa e na escola'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como formar leitores numa época de telas? Que livros oferecer a crianças e jovens, e como?</p>
<h3>Contos de fadas e populares</h3>
<p>Os irmãos Grimm reuniram contos populares alemães a partir de 1812 ${tag('fato')}. No Brasil, Luís da Câmara Cascudo publicou Contos tradicionais do Brasil (1946) ${tag('fato')}. Chesterton escreveu que os contos de fadas não ensinam às crianças que dragões existem, pois elas já sabem disso; ensinam que dragões podem ser vencidos — formulação a ele atribuída a partir de um ensaio em Tremendous Trifles (1909) ${tag('interpretacao')}.</p>
<h3>Literatura infantil brasileira</h3>
<p>Monteiro Lobato criou o Sítio do Picapau Amarelo, a partir de Reinações de Narizinho (1931), marco da literatura infantil brasileira ${tag('fato')}. Autores como Cecília Meireles (Ou isto ou aquilo, 1964), Ruth Rocha e Ana Maria Machado enriqueceram o gênero ${tag('fato')}.</p>
<h3>Adequação</h3>
<p>Livros adequados à idade respeitam a capacidade de leitura e a maturidade emocional e moral; acompanhar e conversar sobre as leituras é mais formador que proibir sem explicar ${tag('interpretacao')}. Ler para a criança antes que ela leia sozinha desenvolve vocabulário e gosto ${tag('fato')}.</p>
<h3>Escola e bibliotecas</h3>
<p>Programas públicos distribuem livros literários às escolas, e bibliotecas públicas e escolares são lugares centrais de formação de leitores ${tag('fato')}.</p>`,
  vocabulario: [
    ['Conto de fadas', 'Narrativa maravilhosa de tradição popular.'],
    ['Conto popular', 'Narrativa transmitida oralmente por gerações.'],
    ['Literatura infantil', 'Literatura destinada a crianças.'],
    ['Leitor em formação', 'Criança ou jovem que desenvolve o hábito e a competência de leitura.'],
    ['Adequação à idade', 'Correspondência entre a obra e a maturidade do leitor.'],
  ],
  exemplos: `<p><strong>Um percurso de leituras:</strong> aos 4 anos, contos de fadas lidos em voz alta; aos 7, histórias curtas e poemas de Cecília Meireles; aos 10, o Sítio do Picapau Amarelo e As crônicas de Nárnia; aos 13, contos de Machado e O Senhor dos Anéis; aos 16, Dom Casmurro e Os Lusíadas comentados. Cada etapa prepara a seguinte.</p>`,
  contexto: `<p><strong>No mundo:</strong> As crônicas de Nárnia, de C. S. Lewis (1950–1956), estão entre os livros infantis mais lidos do século XX ${tag('fato')}. <strong>No Brasil:</strong> a obra de Monteiro Lobato passou a ser discutida por trechos com estereótipos raciais, o que exige leitura crítica e contextualizada ${tag('debate')}.</p>`,
  argumento: {
    titulo: 'Por que os contos de fadas formam', tag: 'argumento',
    premissas: ['Os contos de fadas apresentam o bem e o mal de forma clara, com perigo real e coragem.', 'As crianças vivem medos reais e precisam de imagens de esperança e vitória do bem.', 'Os contos oferecem essas imagens numa forma que a imaginação infantil acolhe.'],
    conclusao: 'Logo, os contos de fadas são alimento moral e imaginativo valioso para crianças.',
    nota: 'Tolkien e Lewis defenderam a literatura de fantasia com argumentos semelhantes.',
  },
  objecoes: [
    { objecao: 'Contos de fadas são violentos e assustadores demais para crianças.', tag: 'debate',
      resposta: 'Alguns contos têm passagens fortes, e cabe ao adulto escolher e mediar. Mas o medo representado e vencido numa história ajuda a criança a lidar com medos reais. O problema não é o mal no conto, mas o mal sem esperança ou glorificado.' },
  ],
  aplicacao: `<p>Monte um plano de leitura de um ano para uma criança ou um jovem de idade definida: doze obras, critérios de escolha, momentos de leitura e formas de conversar sobre elas.</p>`,
  fonte: {
    obra: 'Luís da Câmara Cascudo, Contos tradicionais do Brasil (1946); Monteiro Lobato, Reinações de Narizinho (1931); J. R. R. Tolkien, "Sobre histórias de fadas" (1947)', link: null,
    orientacao: `<p>Compare um conto popular brasileiro com um conto dos Grimm e leia o argumento de Tolkien sobre a fantasia.</p>`,
  },
  perguntas: [
    { p: 'Quem publicou Contos tradicionais do Brasil?', r: 'Luís da Câmara Cascudo.' },
    { p: 'Que obra inaugura o Sítio do Picapau Amarelo?', r: 'Reinações de Narizinho (1931).' },
    { p: 'Por que ler para a criança antes que ela leia sozinha?', r: 'Para desenvolver vocabulário e gosto pela leitura.' },
  ],
  exercicios: [
    mc('Os irmãos Grimm publicaram contos a partir de:', ['1612', '1812', '1912', '1946'], 1, 'Alemanha.'),
    mc('Ou isto ou aquilo é de:', ['Cecília Meireles', 'Ruth Rocha', 'Ana Maria Machado', 'Lobato'], 0, '1964.'),
    mc('As crônicas de Nárnia são de:', ['Tolkien', 'Lewis', 'Chesterton', 'Grimm'], 1, '1950–1956.'),
    mc('Contos tradicionais do Brasil é de:', ['1931', '1946', '1964', '1812'], 1, 'Cascudo.'),
    mc('Diante de trechos com estereótipos em obras antigas, recomenda-se:', ['Leitura crítica e contextualizada', 'Leitura sem comentário', 'Ignorar', 'Reescrever o original'], 0, 'Debate.'),
    disc('Monte um plano de leitura de um ano para uma criança ou jovem.', ['Obras', 'Critérios', 'Momentos', 'Conversas']),
  ],
  resumo: ['Grimm (1812); Cascudo (1946).', 'Lobato (1931); Cecília Meireles (1964).', 'Contos de fadas: o bem vence.', 'Adequação e mediação.', 'Bibliotecas e escola.'],
  referencias: [
    { texto: 'Luís da Câmara Cascudo, Contos tradicionais do Brasil (1946).' },
    { texto: 'J. R. R. Tolkien, "Sobre histórias de fadas" (1947).' },
    { texto: 'G. K. Chesterton, Ortodoxia (1908), cap. "A ética da terra dos elfos".' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de leitura', 'Ler as fontes indicadas'],
  revisao: [['Cascudo', 'Contos populares.'], ['Lobato', 'Sítio.'], ['Fadas', 'O bem vence.']],
  avancado: {
    texto: `<h3>A ética da terra dos elfos</h3>
<p>No capítulo "A ética da terra dos elfos" de Ortodoxia (1908), Chesterton afirma que aprendeu nos contos de fadas lições que o acompanharam: o mundo como dom surpreendente e a felicidade condicionada a uma regra ("podes ter tudo, menos isto") ${tag('fato')}. Ele relaciona essa visão à doutrina cristã da criação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'G. K. Chesterton, Ortodoxia (1908).' }],
    exercicios: [
      mc('"A ética da terra dos elfos" é capítulo de:', ['Ortodoxia', 'O homem eterno', 'Hereges', 'Nárnia'], 0, 'Chesterton.'),
      mc('Ortodoxia é de:', ['1908', '1925', '1950', '1964'], 0, 'Chesterton.'),
      mc('Chesterton relaciona os contos à doutrina da:', ['Criação', 'Economia', 'Política', 'Física'], 0, 'Interpretação.'),
      disc('Explique a "felicidade condicional" dos contos de fadas com um exemplo.', ['Conceito', 'Exemplo', 'Relação com a fé', 'Avaliação'])],
  },
}),

aula({
  id: 'lt5-4', titulo: 'Investigação de quatro semanas: uma obra ou autor', duracao: '180 min',
  aprendera: ['Escolher uma obra ou autor investigável', 'Ler integralmente e anotar', 'Levantar a fortuna crítica', 'Redigir um ensaio interpretativo com fontes'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como passar de leitor a estudioso de uma obra? Uma pequena investigação de quatro semanas é o primeiro passo.</p>
<h3>Escolha</h3>
<p>Escolha uma obra de extensão viável (um livro de contos, um romance curto, um conjunto de poemas) ou um autor, de preferência regional ou pouco estudado ${tag('interpretacao')}. Formule uma pergunta: como o narrador constrói a ambiguidade? Que imagem domina os poemas? Como a obra representa a fé, a cidade, o sertão? ${tag('interpretacao')}</p>
<h3>Leitura</h3>
<p>Leia integralmente, anotando passagens relevantes para a pergunta ${tag('interpretacao')}. Releia as passagens-chave ${tag('interpretacao')}.</p>
<h3>Fortuna crítica</h3>
<p>Procure estudos sobre a obra: livros, artigos em revistas acadêmicas (no Portal de Periódicos da CAPES e no SciELO), prefácios e resenhas de época na Hemeroteca Digital ${tag('fato')}. Registre as referências completas ${tag('fato')}.</p>
<h3>Ensaio</h3>
<p>Estrutura: pergunta e obra; contexto breve; análise com citações; diálogo com a crítica (concordando ou discordando com razões); conclusão proporcional; referências ${tag('interpretacao')}. Distinga o que o texto diz, o que a crítica interpreta e o seu juízo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Pergunta de pesquisa', 'Questão delimitada que guia a investigação.'],
    ['Fortuna crítica', 'Conjunto de estudos sobre uma obra.'],
    ['Ensaio', 'Texto argumentativo de interpretação.'],
    ['Citação', 'Reprodução literal de trecho, com indicação da fonte.'],
    ['SciELO', 'Biblioteca eletrônica de periódicos científicos.'],
  ],
  exemplos: `<p><strong>Um autor regional:</strong> um estudante de Minas escolhe os contos de um escritor da sua cidade, pouco estudado. Pergunta: como aparece a religiosidade popular? Lê os contos, anota doze passagens, encontra dois artigos e uma resenha de 1950 na Hemeroteca, e escreve um ensaio de oito páginas. A pesquisa ajuda a preservar a memória literária local.</p>`,
  contexto: `<p><strong>No mundo:</strong> edições críticas e bases digitais facilitaram o estudo de obras antes inacessíveis ${tag('fato')}. <strong>No Brasil:</strong> academias estaduais e municipais de letras guardam acervos de autores regionais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que dialogar com a crítica', tag: 'argumento',
    premissas: ['Outros leitores já estudaram muitas obras e perceberam aspectos que podemos não ver.', 'Conhecer a crítica evita repetir o já dito e permite contribuir.', 'Discordar da crítica com razões é parte do trabalho intelectual.'],
    conclusao: 'Logo, um bom ensaio dialoga com a fortuna crítica, sem se submeter cegamente a ela.',
    nota: 'O texto da obra continua sendo o juiz das interpretações.',
  },
  objecoes: [
    { objecao: 'Ler a crítica antes de ler a obra é mais eficiente.', tag: 'argumento',
      resposta: 'Ler a crítica antes pode condicionar a leitura e impedir a experiência própria da obra. O ideal é ler primeiro a obra, formar uma impressão anotada e depois confrontá-la com a crítica.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: obra ou autor, pergunta, plano de leitura, fontes da fortuna crítica a consultar, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Portal de Periódicos da CAPES; SciELO; Biblioteca Nacional — Hemeroteca Digital Brasileira', link: { url: 'https://www.scielo.br', rotulo: 'SciELO Brasil' },
    orientacao: `<p>Procure artigos sobre a obra escolhida e registre as referências completas.</p>`,
  },
  perguntas: [
    { p: 'O que é fortuna crítica?', r: 'O conjunto de estudos sobre uma obra.' },
    { p: 'Em que ordem ler obra e crítica?', r: 'Primeiro a obra, depois a crítica.' },
    { p: 'Onde encontrar artigos acadêmicos brasileiros?', r: 'No SciELO e no Portal de Periódicos da CAPES.' },
  ],
  exercicios: [
    mc('O ensaio deve distinguir:', ['Texto, crítica e juízo próprio', 'Só opiniões', 'Só citações', 'Nada'], 0, 'Distinções.'),
    mc('Resenhas de época podem ser encontradas na:', ['Hemeroteca Digital', 'Receita Federal', 'IBGE', 'ANEEL'], 0, 'Jornais.'),
    mc('Discordar da crítica é:', ['Proibido', 'Legítimo com razões', 'Sempre errado', 'Irrelevante'], 1, 'Diálogo.'),
    mc('A obra deve ser lida:', ['Só em resumo', 'Integralmente', 'Só a introdução', 'Só na crítica'], 1, 'Método.'),
    mc('O juiz das interpretações é:', ['O crítico mais famoso', 'O texto da obra', 'A maioria', 'O professor'], 1, 'Argumento.'),
    disc('Apresente o pré-projeto com obra, pergunta, plano, fontes, cronograma e rubrica.', ['Obra e pergunta', 'Plano de leitura', 'Fortuna crítica', 'Cronograma e rubrica']),
  ],
  resumo: ['Obra viável e pergunta clara.', 'Leitura integral e anotada.', 'Fortuna crítica: CAPES, SciELO, Hemeroteca.', 'Ensaio com citações e diálogo.', 'O texto julga as leituras.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Mortimer Adler e Charles Van Doren, Como ler um livro (1972).' },
    { texto: 'Antonio Candido, Formação da literatura brasileira (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a investigação em quatro semanas'],
  revisao: [['Fortuna crítica', 'Estudos.'], ['Obra primeiro', 'Depois crítica.'], ['Texto', 'Juiz.']],
  avancado: {
    texto: `<h3>Citar com honestidade</h3>
<p>Toda citação deve ser literal, entre aspas, com indicação da fonte e da página ou capítulo ${tag('fato')}. Paráfrases também exigem indicação da fonte ${tag('fato')}. Apresentar ideias alheias como próprias é plágio, falta grave contra a verdade e a justiça intelectual ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se faz uma tese, capítulo sobre citações.', livro: 'eco-tese' }],
    exercicios: [
      mc('Paráfrases exigem:', ['Nada', 'Indicação da fonte', 'Aspas obrigatórias', 'Tradução'], 1, 'Honestidade.'),
      mc('Apresentar ideias alheias como próprias é:', ['Plágio', 'Paráfrase', 'Resumo', 'Citação'], 0, 'Falta.'),
      mc('Uma citação literal deve vir:', ['Sem fonte', 'Entre aspas e com fonte', 'Em negrito', 'Sem aspas'], 1, 'Regra.'),
      disc('Mostre como citar, parafrasear e referenciar corretamente um trecho de uma obra crítica.', ['Citação', 'Paráfrase', 'Referência', 'Exemplo'])],
  },
}),

avaliacao('lt5-5', 'Avaliação integradora de Literatura', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Literatura. Reúne questões de todos os módulos (LT1 a LT5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça uma escansão e uma análise de narrador.</li><li>Releia a rubrica da investigação (lt5-4).</li></ul>`,
[
  disc('Analise um poema e um trecho narrativo não estudados no percurso: forma, figuras, narrador ou eu lírico, situação no período e interpretação com citações.', ['Poema', 'Trecho narrativo', 'Período', 'Interpretação']),
  disc('Responda, com base em Aristóteles, num crítico moderno e numa obra brasileira lida integralmente, à pergunta: o que a literatura nos ensina que outras formas de conhecimento não ensinam?', ['Aristóteles', 'Crítico moderno', 'Obra brasileira', 'Argumentação']),
]),
];
