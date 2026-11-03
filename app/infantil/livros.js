// Leituras recomendadas da aba Infantil, por etapa. Lista orientadora: só título e autor; a edição em português
// (se existir, se é fiel e se serve à idade) deve ser conferida antes de comprar, e o adulto lê antes de oferecer.
export const FAIXAS = [
  { id: 'bebe', titulo: 'Bebê (0 a 2 anos)', ajuda: 'Os pais leem e mostram. Imagens grandes e simples, voz calma, repetição.' },
  { id: 'etapa1', titulo: 'Etapa 1 (3 a 5 anos)', ajuda: 'Leitura em voz alta todos os dias, com perguntas simples e a releitura do que ela pedir.' },
  { id: 'etapa2', titulo: 'Etapa 2 (6 a 9 anos)', ajuda: 'Primeiras leituras sozinha e leitura em voz alta de histórias mais longas, por capítulos.' },
  { id: 'etapa3', titulo: 'Etapa 3 (10 a 12 anos)', ajuda: 'Aventura e clássicos, e o catecismo estudado com os pais.' },
  { id: 'etapa4', titulo: 'Etapa 4 (13 a 15 anos)', ajuda: 'Romances de fé e obras de formação que preparam a entrada na Academia da Verdade.' },
  { id: 'pais', titulo: 'Para os pais', ajuda: 'A base doutrinária e pedagógica de toda a Academia Infantil.' },
];

const L = (id, faixa, titulo, autor, tema, porque, original = '') => ({ id, faixa, titulo, original, autor, tema, porque });

export const LIVROS_INFANTIL = [
  L('black-on-white', 'bebe', 'Black on White', 'Tana Hoban', 'Contraste', 'Imagens simples em preto e branco, boas para os primeiros meses. Combina com os cartões de contraste do livrinho do bebê.'),
  L('boa-noite-lua', 'bebe', 'Boa noite, Lua', 'Margaret Wise Brown', 'Dormir e rotina', 'Texto rimado e calmo para a hora de dormir. Combina com a oração da noite.', 'Goodnight Moon'),
  L('adivinha-quanto', 'bebe', 'Adivinha quanto eu te amo', 'Sam McBratney', 'Amor e vínculo', 'Um pai e um filho medem o amor: ótimo para ler no colo, devagar.', 'Guess How Much I Love You'),
  L('salmos', 'bebe', 'Os Salmos', 'Sagrada Escritura', 'Louvor e oração', 'Leia em voz baixa um salmo curto, como o Salmo 23 ou o Salmo 8 (confira a numeração na Bíblia da família). A fé entra pelo ritmo e pela voz.'),
  L('lagartinha', 'etapa1', 'A Lagartinha Comilona', 'Eric Carle', 'Contar e dias da semana', 'Contagem de 1 a 5 e os dias da semana, com ilustrações grandes.', 'The Very Hungry Caterpillar'),
  L('brown-bear', 'etapa1', 'Brown Bear, Brown Bear, What Do You See?', 'Bill Martin Jr. e Eric Carle', 'Cores, animais e inglês', 'Frases repetidas e cores: ajuda o inglês de forma natural, sem listas para decorar.'),
  L('pedro-coelho', 'etapa1', 'A História de Pedro Coelho', 'Beatrix Potter', 'Narrativa clássica', 'Uma história curta com começo, meio e fim, e a ideia de obediência e consequência.', 'The Tale of Peter Rabbit'),
  L('ursinho-pooh', 'etapa1', 'O Ursinho Pooh', 'A. A. Milne', 'Amizade e linguagem', 'Capítulos curtos, ótima linguagem para ler em voz alta.', 'Winnie-the-Pooh'),
  L('biblia-criancas', 'etapa1', 'Uma Bíblia ilustrada para crianças', 'Edições diversas', 'Escritura', 'Escolha uma edição aprovada pela sua diocese e confira se é fiel ao texto sagrado. Leia as passagens das aulas (Gênesis 1, Lucas 1).'),
  L('grimm', 'etapa1', 'Contos de Grimm', 'Irmãos Grimm', 'Contos clássicos', 'Contos de fadas tradicionais: o adulto escolhe as versões e lê antes. O bem e o mal ficam claros.', 'Kinder- und Hausmärchen'),
  L('pinoquio', 'etapa2', 'As Aventuras de Pinóquio', 'Carlo Collodi', 'Virtudes e consequências', 'A história de um boneco que aprende a ser verdadeiro. Boa para conversar sobre mentira e obediência.', 'Le avventure di Pinocchio'),
  L('heidi', 'etapa2', 'Heidi', 'Johanna Spyri', 'Natureza e bondade', 'Uma menina nos Alpes: simplicidade, amizade e fé.'),
  L('pollyanna', 'etapa2', 'Pollyanna', 'Eleanor H. Porter', 'Alegria e gratidão', 'O "jogo do contente" combina com a virtude da gratidão.'),
  L('pequeno-principe', 'etapa2', 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Amizade e sentido', 'Conto poético que pede releitura; converse sobre o que é essencial.', 'Le Petit Prince'),
  L('narnia', 'etapa2', 'As Crônicas de Nárnia', 'C. S. Lewis', 'Fantasia e fé cristã', 'Aventura com temas cristãos (o autor era anglicano; o adulto lê junto e esclarece o que for preciso).', 'The Chronicles of Narnia'),
  L('vidas-santos', 'etapa2', 'Vida dos Santos', 'Alban Butler', 'Santos', 'Obra clássica de hagiografia, para o adulto ler em voz alta, um santo por vez, no dia da festa. Confira a edição e distinga o fato histórico da tradição.', 'The Lives of the Saints'),
  L('hobbit', 'etapa3', 'O Hobbit', 'J. R. R. Tolkien', 'Aventura e coragem', 'Aventura de um autor católico, com virtudes como a coragem e a humildade.', 'The Hobbit'),
  L('ilha-tesouro', 'etapa3', 'A Ilha do Tesouro', 'Robert Louis Stevenson', 'Aventura', 'Clássico de aventura que ensina a ler com fôlego.', 'Treasure Island'),
  L('tres-mosqueteiros', 'etapa3', 'Os Três Mosqueteiros', 'Alexandre Dumas', 'Honra e amizade', 'Romance de capa e espada; boa conversa sobre lealdade (o adulto lê antes).', 'Les Trois Mousquetaires'),
  L('catecismo-pio-x', 'etapa3', 'Catecismo de São Pio X', 'São Pio X', 'Doutrina', 'Perguntas e respostas curtas, para estudar em família, uma pergunta por dia.'),
  L('fabiola', 'etapa4', 'Fabíola ou a Igreja das Catacumbas', 'Cardeal Nicholas Wiseman', 'Mártires romanos', 'Romance católico sobre a Igreja nas perseguições.', 'Fabiola; or, The Church of the Catacombs'),
  L('quo-vadis', 'etapa4', 'Quo Vadis', 'Henryk Sienkiewicz', 'Roma de Nero', 'Romance sobre os cristãos sob Nero (o adulto confere a adequação à idade).'),
  L('ben-hur', 'etapa4', 'Ben-Hur', 'Lew Wallace', 'Fé e história', 'Romance de aventura com o pano de fundo da vida de Cristo.', 'Ben-Hur: A Tale of the Christ'),
  L('senhor-aneis', 'etapa4', 'O Senhor dos Anéis', 'J. R. R. Tolkien', 'Fantasia épica', 'Uma obra longa para treinar a leitura de fôlego.', 'The Lord of the Rings'),
  L('imitacao', 'etapa4', 'Imitação de Cristo', 'Tomás de Kempis', 'Vida espiritual', 'Clássico de piedade para ler em pequenas doses, um capítulo curto por dia.'),
  L('vida-devota', 'etapa4', 'Introdução à Vida Devota', 'São Francisco de Sales', 'Vida espiritual', 'Orientação simples para viver a fé no dia a dia, em meio ao mundo.'),
  L('catecismo-igreja', 'pais', 'Catecismo da Igreja Católica', 'Igreja Católica', 'Doutrina', 'Exposição completa da fé: as referências doutrinárias dos manuais saem daqui.'),
  L('compendio', 'pais', 'Compêndio do Catecismo da Igreja Católica', 'Igreja Católica', 'Doutrina', 'Versão em perguntas e respostas, mais curta, para consultar rápido.'),
  L('catecismo-romano', 'pais', 'Catecismo Romano (Catecismo do Concílio de Trento)', 'Concílio de Trento', 'Doutrina', 'Base clássica de formulação firme e clara para quem ensina.'),
  L('mente-absorvente', 'pais', 'A Mente Absorvente', 'Maria Montessori', 'Pedagogia', 'Como a criança pequena aprende, para entender o método dos manuais.', 'La mente del bambino'),
  L('sistema-preventivo', 'pais', 'O Sistema Preventivo na Educação da Juventude', 'São João Bosco', 'Educar com amor', 'Texto curto sobre educar com razão, religião e amorevolezza.'),
  L('divini-illius', 'pais', 'Divini Illius Magistri', 'Papa Pio XI', 'Educação cristã', 'Encíclica sobre a educação cristã da juventude: o fim e os direitos da família.'),
  L('como-ler', 'pais', 'Como Ler Livros', 'Mortimer J. Adler e Charles Van Doren', 'Leitura', 'Já faz parte do curso da Academia da Verdade; vale ler antes, para ensinar a ler bem.', 'How to Read a Book'),
];

export const livrosDaFaixa = (faixa) => LIVROS_INFANTIL.filter((l) => l.faixa === faixa);
