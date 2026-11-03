// Biblioteca da família na aba Infantil: catálogo comum aos filhos, por idade e por seção, com a trilha de cada filho.
// Só título e autor (e notas de leitura). A edição em português, a tradução e a adequação devem ser conferidas
// pelos pais antes da compra; o adulto lê antes de oferecer. Obras não verificadas ficam fora (ver NAO_VERIFICADOS).

export const FAIXAS = [
  { id: '0-1', titulo: 'De 2 meses a 1 ano', de: 0, ate: 1, ajuda: 'Voz dos pais, sons, imagens e o ritmo da linguagem. Os pais leem e mostram; nada de estudo.' },
  { id: '1-3', titulo: 'De 1 a 3 anos', de: 1, ate: 3, ajuda: 'Leitura em voz alta curta e repetida, com figuras grandes e frases que voltam.' },
  { id: '3-5', titulo: 'De 3 a 5 anos', de: 3, ate: 6, ajuda: 'Contos, fábulas e poesia lidos pelos pais todos os dias; a criança reconta.' },
  { id: '6-8', titulo: 'De 6 a 8 anos', de: 6, ate: 9, ajuda: 'Clássicos infantis por capítulos e as primeiras leituras sozinha.' },
  { id: '9-11', titulo: 'De 9 a 11 anos', de: 9, ate: 12, ajuda: 'Aventuras e romances clássicos, com leitura de fôlego.' },
  { id: '12-13', titulo: 'De 12 a 13 anos', de: 12, ate: 14, ajuda: 'Epopeias, grandes romances e as primeiras obras de formação, com conversa orientada.' },
  { id: '14-15', titulo: 'De 14 a 15 anos', de: 14, ate: 16, ajuda: 'A aproximação exigente dos clássicos antes do curso da Academia da Verdade, que começa aos 16. Os livros que o curso já pede ficam para ele e não entram aqui. A idade é referência, não obrigação.' },
];

export const SECOES = { comum: 'Literatura comum', feminina: 'Formação feminina', masculina: 'Formação masculina' };

const slug = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const L = (faixa, secao, titulo, autor, extra = {}) => ({ id: slug(titulo), faixa, secao, titulo, autor, ...extra });
const EM_INGLES = 'Original em inglês; ótimo para o inglês americano.';
const AVANCADA = 'Leitura avançada e opcional, só com maturidade: o adulto lê antes.';

export const LIVROS_INFANTIL = [
  // 0 a 1
  L('0-1', 'comum', 'Black on White', 'Tana Hoban', { nota: 'Alto contraste para os primeiros meses.' }),
  L('0-1', 'comum', 'White on Black', 'Tana Hoban', { nota: 'Par do anterior: figuras brancas sobre fundo preto.' }),
  L('0-1', 'comum', 'Boa noite, Lua', 'Margaret Wise Brown', { original: 'Goodnight Moon', nota: 'Para a hora de dormir.' }),
  L('0-1', 'comum', 'Adivinha quanto eu te amo', 'Sam McBratney', { original: 'Guess How Much I Love You' }),
  L('0-1', 'comum', 'Brown Bear, Brown Bear, What Do You See?', 'Bill Martin Jr. (ilustrações de Eric Carle)', { nota: EM_INGLES }),
  L('0-1', 'comum', 'Dear Zoo', 'Rod Campbell', { nota: `Livro de abas. ${EM_INGLES}` }),
  L('0-1', 'comum', "Where's Spot?", 'Eric Hill', { nota: `Livro de abas. ${EM_INGLES}` }),
  L('0-1', 'comum', 'Pat the Bunny', 'Dorothy Kunhardt', { nota: 'Livro de tocar. Em inglês.' }),
  L('0-1', 'comum', 'The Snowy Day', 'Ezra Jack Keats', { nota: EM_INGLES }),
  L('0-1', 'comum', 'Each Peach Pear Plum', 'Janet e Allan Ahlberg', { nota: `Rimas e personagens de contos. ${EM_INGLES}` }),
  // 1 a 3
  L('1-3', 'comum', 'A Lagartinha Comilona', 'Eric Carle', { original: 'The Very Hungry Caterpillar', nota: 'Contar e os dias da semana.' }),
  L('1-3', 'comum', 'O Grúfalo', 'Julia Donaldson', { original: 'The Gruffalo' }),
  L('1-3', 'comum', "The Gruffalo's Child", 'Julia Donaldson', { nota: 'Continuação de O Grúfalo.' }),
  L('1-3', 'comum', 'A História de Pedro Coelho', 'Beatrix Potter', { original: 'The Tale of Peter Rabbit' }),
  L('1-3', 'comum', 'The Tale of Benjamin Bunny', 'Beatrix Potter', { nota: 'Continuação de Pedro Coelho.' }),
  L('1-3', 'comum', 'O Ursinho Pooh', 'A. A. Milne', { original: 'Winnie-the-Pooh', nota: 'Capítulos curtos para ler em voz alta.' }),
  L('1-3', 'comum', 'The Cat in the Hat', 'Dr. Seuss', { nota: EM_INGLES }),
  L('1-3', 'comum', 'Green Eggs and Ham', 'Dr. Seuss', { nota: EM_INGLES }),
  L('1-3', 'comum', 'The Little Engine That Could', 'Watty Piper', { nota: `Perseverança. ${EM_INGLES}` }),
  // 3 a 5
  L('3-5', 'comum', 'Fábulas', 'Esopo', { nota: 'Uma fábula por dia, com a moral conversada.' }),
  L('3-5', 'comum', 'Contos de Grimm', 'Irmãos Grimm', { nota: 'Os pais escolhem as versões; a edição integral fica para os 6 a 8 anos.' }),
  L('3-5', 'comum', 'Contos de Andersen', 'Hans Christian Andersen', { nota: 'Comece por O Patinho Feio e O Rouxinol.' }),
  L('3-5', 'comum', 'Contos de Perrault', 'Charles Perrault', { nota: 'O Pequeno Polegar e O Gato de Botas, entre outros.' }),
  L('3-5', 'comum', 'A Bela e a Fera', 'Jeanne-Marie Leprince de Beaumont'),
  L('3-5', 'comum', 'Corduroy', 'Don Freeman', { nota: EM_INGLES }),
  L('3-5', 'comum', 'Curious George', 'H. A. Rey', { nota: EM_INGLES }),
  L('3-5', 'comum', 'Frog and Toad Are Friends', 'Arnold Lobel', { nota: `Amizade, em capítulos curtos. ${EM_INGLES}` }),
  L('3-5', 'comum', 'A História de Babar', 'Jean de Brunhoff', { alerta: 'A mãe de Babar morre no começo da história: leia antes e converse.' }),
  L('3-5', 'comum', 'Ou Isto ou Aquilo', 'Cecília Meireles', { nota: 'Poesia brasileira para ler e decorar.' }),
  L('3-5', 'comum', 'A Arca de Noé', 'Vinicius de Moraes', { nota: 'Poemas sobre os bichos.' }),
  L('3-5', 'comum', 'Poemas para Brincar', 'José Paulo Paes'),
  L('3-5', 'feminina', 'Madeline', 'Ludwig Bemelmans', { nota: EM_INGLES }),
  // 6 a 8
  L('6-8', 'comum', 'As Aventuras de Pinóquio', 'Carlo Collodi', { nota: 'Em adaptação infantil desde os 4; integral a partir dos 6.' }),
  L('6-8', 'comum', 'Heidi', 'Johanna Spyri', { nota: 'Em adaptação ilustrada desde os 4.' }),
  L('6-8', 'comum', 'Pollyanna', 'Eleanor H. Porter'),
  L('6-8', 'comum', 'O Jardim Secreto', 'Frances Hodgson Burnett'),
  L('6-8', 'comum', 'Alice no País das Maravilhas', 'Lewis Carroll'),
  L('6-8', 'comum', 'O Mágico de Oz', 'L. Frank Baum', { alerta: 'Há bruxas boas e más: converse sobre fantasia e realidade.' }),
  L('6-8', 'comum', 'O Vento nos Salgueiros', 'Kenneth Grahame'),
  L('6-8', 'comum', 'A Teia de Charlotte', 'E. B. White', { alerta: 'A morte de uma personagem querida: leia junto.' }),
  L('6-8', 'comum', 'Stuart Little', 'E. B. White'),
  L('6-8', 'comum', 'As Crônicas de Nárnia', 'C. S. Lewis', { alerta: 'O autor era anglicano; o adulto lê junto e esclarece o que for preciso.' }),
  L('6-8', 'comum', 'O Livro da Selva', 'Rudyard Kipling'),
  L('6-8', 'comum', 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', { nota: 'Com leitura acompanhada.' }),
  L('6-8', 'comum', 'O Menino do Dedo Verde', 'Maurice Druon'),
  L('6-8', 'comum', 'A Menina do Narizinho Arrebitado', 'Monteiro Lobato', { nota: 'E outras histórias do Sítio, com seleção dos pais.', alerta: 'Algumas obras de Lobato têm passagens racistas: os pais escolhem e comentam.' }),
  L('6-8', 'comum', 'Vida dos Santos', 'Alban Butler', { original: 'The Lives of the Saints', nota: 'Para os pais lerem em voz alta, um santo por vez, no dia da festa.' }),
  L('6-8', 'feminina', 'A Princesinha', 'Frances Hodgson Burnett'),
  L('6-8', 'feminina', 'Santa Teresinha: no coração da Igreja, serei o amor', 'Coline Dupuy', { nota: 'História em quadrinhos (Paulus, 2025; tradução de Tiago José Risi Leme).' }),
  // 9 a 11
  L('9-11', 'comum', 'O Hobbit', 'J. R. R. Tolkien', { nota: 'De um autor católico.' }),
  L('9-11', 'comum', 'A Ilha do Tesouro', 'Robert Louis Stevenson', { nota: 'Em adaptação desde os 6.' }),
  L('9-11', 'comum', 'Robinson Crusoé', 'Daniel Defoe', { nota: 'Em adaptação desde os 6.' }),
  L('9-11', 'comum', 'Viagem ao Centro da Terra', 'Júlio Verne'),
  L('9-11', 'comum', 'Vinte Mil Léguas Submarinas', 'Júlio Verne'),
  L('9-11', 'comum', 'A Volta ao Mundo em 80 Dias', 'Júlio Verne'),
  L('9-11', 'comum', 'O Último dos Moicanos', 'James Fenimore Cooper', { alerta: 'Cenas de guerra e violência: escolha edição apropriada.' }),
  L('9-11', 'comum', 'O Príncipe e o Mendigo', 'Mark Twain'),
  L('9-11', 'comum', 'O Chamado da Floresta', 'Jack London', { alerta: 'Violência contra animais.' }),
  L('9-11', 'comum', 'Caninos Brancos', 'Jack London', { alerta: 'Violência contra animais.' }),
  L('9-11', 'comum', 'O Meu Pé de Laranja Lima', 'José Mauro de Vasconcelos', { alerta: 'Maus-tratos a uma criança e morte: leia junto.' }),
  L('9-11', 'comum', 'A Bolsa Amarela', 'Lygia Bojunga', { alerta: 'A protagonista deseja ser menino, entre outras vontades: leia antes e converse.' }),
  L('9-11', 'feminina', 'Anne de Green Gables', 'L. M. Montgomery'),
  L('9-11', 'feminina', 'Mulherzinhas', 'Louisa May Alcott'),
  L('9-11', 'masculina', 'As Aventuras de Tom Sawyer', 'Mark Twain', { nota: 'Em adaptação desde os 6.' }),
  // 12 a 13
  L('12-13', 'comum', 'Ilíada', 'Homero', { nota: 'Comece por uma boa tradução em prosa.' }),
  L('12-13', 'comum', 'Odisseia', 'Homero', { nota: 'Comece por uma boa tradução em prosa.' }),
  L('12-13', 'comum', 'Eneida', 'Virgílio'),
  L('12-13', 'comum', 'Dom Quixote', 'Miguel de Cervantes'),
  L('12-13', 'comum', 'Os Miseráveis', 'Victor Hugo', { nota: 'Integral ou adaptada, conforme a maturidade.', alerta: 'O autor tinha posições anticlericais: leia com mediação.' }),
  L('12-13', 'comum', 'O Conde de Monte Cristo', 'Alexandre Dumas', { nota: 'Em adaptação desde os 9.', alerta: 'Tema central da vingança: converse sobre o perdão.' }),
  L('12-13', 'comum', 'Os Três Mosqueteiros', 'Alexandre Dumas', { nota: 'Em adaptação desde os 9.', alerta: 'Intrigas e adultério na trama: o adulto lê antes.' }),
  L('12-13', 'comum', 'Ivanhoé', 'Walter Scott'),
  L('12-13', 'comum', 'A Máquina do Tempo', 'H. G. Wells'),
  L('12-13', 'comum', 'A Guerra dos Mundos', 'H. G. Wells'),
  L('12-13', 'comum', 'O Senhor dos Anéis', 'J. R. R. Tolkien', { nota: 'Leitura de fôlego de um autor católico.' }),
  L('12-13', 'comum', 'A Revolução dos Bichos', 'George Orwell', { nota: 'Com discussão orientada.' }),
  L('12-13', 'comum', 'As Viagens de Gulliver', 'Jonathan Swift', { alerta: 'Há trechos grosseiros: escolha edição apropriada.' }),
  L('12-13', 'comum', 'O Escaravelho do Diabo', 'Lúcia Machado de Almeida', { alerta: 'Suspense com assassinatos.' }),
  L('12-13', 'comum', 'Fabíola ou a Igreja das Catacumbas', 'Cardeal Nicholas Wiseman', { nota: 'Romance católico sobre os mártires de Roma.' }),
  L('12-13', 'comum', 'Ben-Hur', 'Lew Wallace', { original: 'Ben-Hur: A Tale of the Christ' }),
  L('12-13', 'feminina', 'Orgulho e Preconceito', 'Jane Austen'),
  L('12-13', 'feminina', 'Razão e Sensibilidade', 'Jane Austen'),
  L('12-13', 'feminina', 'O Diário de Anne Frank', 'Anne Frank', { alerta: 'A edição definitiva traz passagens sobre sexualidade: escolha a edição e leia antes.' }),
  L('12-13', 'masculina', 'As Aventuras de Huckleberry Finn', 'Mark Twain', { alerta: 'Linguagem racista da época: leia com mediação e contexto.' }),
  // 14 a 15
  L('14-15', 'comum', 'A Divina Comédia', 'Dante Alighieri', { nota: 'Em edição comentada, começando por cantos selecionados.' }),
  L('14-15', 'comum', 'Hamlet', 'William Shakespeare'),
  L('14-15', 'comum', 'Macbeth', 'William Shakespeare'),
  L('14-15', 'comum', 'Rei Lear', 'William Shakespeare', { alerta: 'Cenas de violência.' }),
  L('14-15', 'comum', 'Os Lusíadas', 'Luís de Camões'),
  L('14-15', 'comum', 'Dom Casmurro', 'Machado de Assis'),
  L('14-15', 'comum', 'Memórias Póstumas de Brás Cubas', 'Machado de Assis', { alerta: 'Narrador cético e irônico com a fé: converse.' }),
  L('14-15', 'comum', 'Vidas Secas', 'Graciliano Ramos'),
  L('14-15', 'comum', 'Frankenstein', 'Mary Shelley'),
  L('14-15', 'comum', 'Quo Vadis', 'Henryk Sienkiewicz', { alerta: 'Violência do martírio e excessos da corte de Nero.' }),
  L('14-15', 'comum', 'O Senhor das Moscas', 'William Golding', { alerta: 'Violência entre crianças: só com maturidade e conversa.' }),
  L('14-15', 'comum', '1984', 'George Orwell', { alerta: 'Tortura e cenas de sexo: o adulto lê antes.' }),
  L('14-15', 'comum', 'Imitação de Cristo', 'Tomás de Kempis', { nota: 'Um capítulo curto por dia.' }),
  L('14-15', 'comum', 'Introdução à Vida Devota', 'São Francisco de Sales'),
  // Leituras avançadas que o curso da Verdade não pede: entram aqui para quem quiser fechar o ciclo até os 15.
  L('14-15', 'comum', 'Os Irmãos Karamázov', 'Fiódor Dostoiévski', { alerta: AVANCADA }),
  L('14-15', 'comum', 'Crime e Castigo', 'Fiódor Dostoiévski', { alerta: `${AVANCADA} Há um assassinato no centro da trama.` }),
  L('14-15', 'comum', 'Os Demônios', 'Fiódor Dostoiévski', { alerta: AVANCADA }),
  L('14-15', 'comum', 'Guerra e Paz', 'Liev Tolstói', { alerta: AVANCADA }),
  L('14-15', 'comum', 'Anna Kariênina', 'Liev Tolstói', { alerta: `${AVANCADA} Adultério e suicídio na trama.` }),
  L('14-15', 'comum', 'Fausto', 'Johann Wolfgang von Goethe', { alerta: `${AVANCADA} Pacto com o demônio e sedução.` }),
  L('14-15', 'comum', 'Grande Sertão: Veredas', 'João Guimarães Rosa', { alerta: AVANCADA }),
  L('14-15', 'comum', 'A Montanha Mágica', 'Thomas Mann', { alerta: AVANCADA }),
  L('14-15', 'comum', 'O Processo', 'Franz Kafka', { alerta: AVANCADA }),
  L('14-15', 'comum', 'Admirável Mundo Novo', 'Aldous Huxley', { alerta: `${AVANCADA} Sexo e drogas fazem parte da sociedade descrita.` }),
  L('14-15', 'comum', 'Middlemarch', 'George Eliot', { alerta: AVANCADA }),
  L('14-15', 'comum', 'A Menina que Roubava Livros', 'Markus Zusak', { alerta: `${AVANCADA} Narrado pela Morte, em meio à guerra.` }),
  L('14-15', 'feminina', 'Emma', 'Jane Austen'),
  L('14-15', 'feminina', 'Persuasão', 'Jane Austen'),
  L('14-15', 'feminina', 'Jane Eyre', 'Charlotte Brontë'),
  L('14-15', 'masculina', 'Vida de São Bento (Diálogos, livro II)', 'São Gregório Magno'),
  L('14-15', 'masculina', 'Vida de São Francisco (Legenda Maior)', 'São Boaventura'),
  L('14-15', 'masculina', 'Memórias do Oratório', 'São João Bosco'),
];

/** Santos para procurar em livros ilustrados ou biografias da faixa (o livro em si a família escolhe e confere). */
export const SANTOS = {
  '0-1': { feminina: ['Nossa Senhora', 'Santa Teresinha do Menino Jesus'], masculina: ['São José', 'São Francisco de Assis', 'São Miguel Arcanjo'] },
  '1-3': { feminina: ['Santa Teresinha', 'Santa Clara de Assis'], masculina: ['São Francisco de Assis', 'São Domingos Sávio', 'São Tarcísio', 'São José'] },
  '3-5': { feminina: ['Santa Teresinha', 'Santa Catarina de Sena', 'Santa Bernadette Soubirous', 'Santa Joana d\'Arc'], masculina: ['São Bento', 'São Martinho de Tours', 'São Nicolau', 'São Jorge (o dragão é lenda; o martírio é tradição antiga)'] },
  '6-8': { feminina: ['Santa Joana d\'Arc', 'Santa Teresa de Ávila', 'Santa Catarina Labouré', 'Santa Edith Stein'], masculina: ['São Domingos Sávio', 'São João Bosco', 'São Maximiliano Kolbe', 'São Carlo Acutis'] },
  '9-11': { feminina: ['Santa Teresa de Calcutá', 'Santa Gianna Beretta Molla', 'Santa Catarina de Sena', 'Santa Joana d\'Arc', 'Santa Maria Goretti'], masculina: ['São Tomás de Aquino', 'São Francisco de Assis', 'São João Paulo II', 'São Padre Pio', 'São Bento'] },
  '12-13': { feminina: ['Santa Hildegarda de Bingen', 'Santa Teresa de Ávila', 'Santa Catarina de Sena', 'Santa Edith Stein', 'Santa Isabel da Hungria'], masculina: ['Santo Agostinho', 'São Tomás de Aquino', 'São Bento', 'São João Bosco', 'São Maximiliano Kolbe'] },
  '14-15': { feminina: ['Santa Teresa Benedita da Cruz (Edith Stein)', 'Santa Catarina de Sena', 'Santa Hildegarda de Bingen', 'Santa Joana d\'Arc', 'Santa Teresa de Calcutá', 'Santa Gianna Beretta Molla'], masculina: ['Santo Antônio', 'São Tomás de Aquino', 'São Maximiliano Kolbe', 'São João Paulo II', 'São Carlo Acutis'] },
};

export const HISTORIAS_BIBLICAS = [
  ['2 a 3 anos', 'Criação, Adão e Eva, Noé, nascimento de Jesus, visita dos pastores, Jesus abençoa as crianças'],
  ['3 a 5 anos', 'Abraão, José do Egito, Moisés, Davi e Golias, Daniel, Jonas, Anunciação, nascimento de Jesus, o bom samaritano'],
  ['6 a 8 anos', 'Êxodo, os Dez Mandamentos, Rute, Samuel, Elias, Ester, vocação dos apóstolos, parábolas, milagres de Jesus, Ressurreição'],
  ['9 a 11 anos', 'Patriarcas, juízes e reis, profetas, exílio, Evangelhos, Atos dos Apóstolos, primeiras comunidades cristãs'],
  ['12 a 13 anos', 'Alianças, profecias messiânicas, Sermão da Montanha, parábolas, Paixão, Ressurreição, Pentecostes, viagens de São Paulo'],
  ['14 a 15 anos', 'Leitura orientada dos Evangelhos, Atos, Gênesis, Êxodo, Salmos, Sabedoria, Eclesiástico, Romanos e demais cartas apostólicas'],
];
export const PERSONAGENS_BIBLICOS = {
  feminina: ['Eva', 'Sara', 'Rebeca', 'Rute', 'Ester', 'Judite', 'Ana', 'Maria', 'Isabel', 'Maria Madalena', 'Marta e Maria de Betânia'],
  masculina: ['Adão', 'Noé', 'Abraão', 'Isaac', 'Jacó', 'José do Egito', 'Moisés', 'Josué', 'Samuel', 'Davi', 'Elias', 'Daniel', 'São José', 'São Pedro', 'São Paulo', 'São João'],
};

export const BIBLIA = {
  titulo: 'A Bíblia para Crianças: A Grande História de Deus',
  autor: 'Emily Stimpson Chapman (ilustrações de Diana Renzina)',
  original: 'The Story of All Stories: A Story Bible for Young Catholics (Word on Fire)',
  editora: 'Minha Biblioteca Católica, selo Bibliotequinha',
  notas: [
    'Percorre a história da salvação, com ilustrações e comentários, e serve por vários anos, com os pais acompanhando.',
    'É uma Bíblia narrativa, com seleção de passagens, não a Sagrada Escritura integral. Quando os filhos tiverem maturidade, a família passa para uma Bíblia católica completa.',
    'Idade: a edição brasileira sugere leitura acompanhada a partir dos 4 anos; a original indica de 7 a 13. Comece com os pais lendo e explicando.',
    'Imprimatur: a conferir na própria edição antes da compra.',
  ],
  fontes: ['https://www.gazetadopovo.com.br/cultura/biblia-para-criancas-a-maior-historia-da-humanidade-apresentada-aos-pequenos-leitores/', 'https://www.osvnews.com/the-story-of-all-stories-childrens-bible-vividly-conveys-salvation-history/'],
};

export const CATEQUESE = [
  L('catequese', 'comum', 'YOUCAT para Crianças', 'Fundação YOUCAT', { nota: 'Catecismo católico para pais e filhos, em perguntas e respostas (Paulus).' }),
  L('catequese', 'comum', 'Catecismo de São Pio X', 'São Pio X', { nota: 'Para estudo acompanhado, uma pergunta por dia, a partir dos 10 anos.' }),
  L('catequese', 'comum', 'Compêndio do Catecismo da Igreja Católica', 'Igreja Católica', { nota: 'Para aprofundamento gradual, em perguntas e respostas.' }),
  L('catequese', 'comum', 'Catecismo da Igreja Católica', 'Igreja Católica', { nota: 'Edição integral, para os pais.' }),
  L('catequese', 'comum', 'Catecismo Romano (do Concílio de Trento)', 'Concílio de Trento', { nota: 'Base clássica para quem ensina.' }),
];

export const PAIS = [
  L('pais', 'comum', 'A Mente Absorvente', 'Maria Montessori', { nota: 'Como a criança pequena aprende.' }),
  L('pais', 'comum', 'O Sistema Preventivo na Educação da Juventude', 'São João Bosco', { nota: 'Educar com razão, religião e amor.' }),
  L('pais', 'comum', 'Divini Illius Magistri', 'Papa Pio XI', { nota: 'Encíclica sobre a educação cristã da juventude.' }),
  L('pais', 'comum', 'Como Ler Livros', 'Mortimer J. Adler e Charles Van Doren', { nota: 'Também abre o curso da Academia da Verdade.' }),
];

/** Indicados na pesquisa, mas não encontrados com autor e título confirmados: ficam fora da lista até alguém conferir. */
export const NAO_VERIFICADOS = [
  'Aprendendo a Viver a Santa Missa (autoria "Fátima Nogueira" não confirmada; há um livreto de "Nogueira", editora New Song)',
  'Via-Sacra para as Crianças, de Fernanda Silva (não encontrado; existe uma "Via-sacra para crianças" da Paulus, organizada pelo Pe. Sílvio Ribas)',
  'A Vida dos Santos para Crianças, de Marcela Curti (não encontrado)',
  'Fazendo o Bem Sobre a Terra, de Tiago José Risi Leme (não encontrado; ele traduziu a história em quadrinhos de Santa Teresinha, já na lista)',
  'My First Book of Feminine Saints (não identificado; virou "santos para procurar")',
];

export const livrosDaFaixa = (faixa) => LIVROS_INFANTIL.filter((l) => l.faixa === faixa);

/** Faixa da biblioteca para uma data de nascimento (AAAA-MM-DD); null se não houver data ou passar dos 15 anos. */
export function faixaPara(nascimento, hoje = new Date()) {
  if (!nascimento) return null;
  const [a, m, d] = nascimento.split('-').map(Number);
  let anos = hoje.getFullYear() - a;
  if (hoje.getMonth() + 1 < m || (hoje.getMonth() + 1 === m && hoje.getDate() < d)) anos--;
  return FAIXAS.find((f) => anos >= f.de && anos < f.ate)?.id ?? null;
}
