// Pré-requisitos obrigatórios com justificativa, somados aos que cada livro já registra (prereq).
// Só entra uma dependência quando a obra depende da outra para ser entendida: responde a ela, a comenta,
// a continua ou usa seus conceitos centrais sem explicá-los. Afinidade temática não basta.
// Formato: id do livro → [[id do pré-requisito, por que é necessário], ...]. Os testes exigem que o
// pré-requisito exista e venha antes na trilha.

export const PREREQUISITOS = {
  // ---------- Degrau 4: filosofia antiga ----------
  'platao-fedro': [['platao-banquete', 'Retoma o tema do amor e da beleza discutido no Banquete.']],
  'platao-politico': [['platao-sofista', 'Continuação dramática do Sofista, com o mesmo Estrangeiro de Eleia e o mesmo método de divisão.']],
  'platao-timeu': [['platao-republica', 'Abre com o resumo da conversa sobre a cidade justa da República.']],
  'platao-critias': [['platao-timeu', 'É a continuação do Timeu, anunciada no próprio Timeu.']],
  'platao-leis': [['platao-republica', 'Retoma o projeto de cidade da República como a "segunda melhor" constituição.']],
  'platao-epinomis': [['platao-leis', 'Apêndice às Leis, como indica o título.']],
  'aristoteles-fisica': [['aristoteles-fisica-ii', 'O livro II, já lido com orientação, traz as quatro causas que estruturam os demais livros.']],
  'aristoteles-ceu': [['aristoteles-fisica', 'Aplica ao universo a teoria do movimento e do lugar da Física.']],
  'aristoteles-geracao': [['aristoteles-fisica', 'Pressupõe as noções de mudança, matéria e forma da Física.']],
  'aristoteles-meteorologicos': [['aristoteles-geracao', 'Começa remetendo aos tratados Do Céu e Da Geração, que dá por lidos.']],
  'aristoteles-parva-naturalia': [['aristoteles-alma', 'Continua o Da Alma: sensação, memória, sono e sonho como funções da alma.']],
  'aristoteles-partes-animais': [['aristoteles-historia-animais', 'Explica pelas causas o que a História dos Animais descreve.']],
  'aristoteles-geracao-animais': [['aristoteles-partes-animais', 'Completa o estudo causal dos animais iniciado em Das Partes dos Animais.']],
  'aristoteles-retorica': [['aristoteles-topicos', 'A retórica é, na primeira frase, "contraparte da dialética" e usa os lugares dos Tópicos.']],

  // ---------- Degrau 5: patrística ----------
  'agostinho-imortalidade': [['agostinho-soliloquios', 'Retoma o argumento sobre a imortalidade que o livro II dos Solilóquios deixara inacabado.']],
  'agostinho-natureza-graca': [['agostinho-espirito-letra', 'Mesma controvérsia contra Pelágio; usa a distinção entre a lei e a graça de O Espírito e a Letra.']],
  'agostinho-juliano': [['agostinho-graca-cristo', 'Defende contra Juliano a doutrina do pecado original exposta contra Pelágio.']],
  'agostinho-graca-tardia': [['agostinho-livre-arbitrio', 'Retoma e precisa o que escrevera em O Livre-Arbítrio, como explica nas Retratações.']],
  'boecio-isagoge': [['aristoteles-categorias', 'A Isagoge de Porfírio é uma introdução às Categorias.']],
  'boecio-categorias': [['aristoteles-categorias', 'Comentário ao texto das Categorias.']],
  'boecio-interpretacao': [['aristoteles-interpretacao', 'Comentário ao texto do Da Interpretação.']],
  'boecio-logicos': [['aristoteles-analiticos', 'Os tratados sobre o silogismo expõem a silogística dos Analíticos Anteriores.']],
  'boecio-opuscula': [['agostinho-trindade', 'No prólogo de A Trindade, Boécio declara seguir as sementes lançadas por Agostinho.']],

  // ---------- Degrau 6: conhecimento, metafísica e filosofia da religião ----------
  'aristoteles-metafisica-completa': [
    ['aristoteles-metafisica', 'Os livros I e IV, lidos com orientação no degrau 4, apresentam a ciência do ente enquanto ente que o tratado inteiro desenvolve.'],
    ['aristoteles-categorias', 'Substância e acidente, das Categorias, são o ponto de partida dos livros VII e VIII.'],
  ],
  'tomas-principios-natureza': [['aristoteles-fisica-ii', 'O opúsculo resume para estudantes matéria, forma, privação e as quatro causas da Física II.']],
  'tomas-ente-essencia': [['tomas-principios-natureza', 'A distinção entre essência das substâncias compostas e das simples pressupõe matéria e forma.']],
  'leibniz-monadologia': [['aristoteles-metafisica-completa', 'A substância como princípio de atividade retoma a forma substancial aristotélica que Leibniz quer reabilitar.']],
  'garrigou-deus': [['suma-q2-13', 'É um comentário escolástico às provas e aos atributos divinos da Suma I, q. 2–13.']],
  'feser-cinco': [
    ['suma-q2-13', 'Defende versões das cinco vias: é preciso conhecer o texto original.'],
    ['aristoteles-metafisica-completa', 'O argumento aristotélico do livro parte de ato e potência.'],
  ],
  'mackie-milagre': [
    ['hume-dialogos', 'Mackie desenvolve as objeções de Hume ao argumento do desígnio.'],
    ['suma-q2-13', 'Critica os argumentos cosmológicos de tipo tomista.'],
  ],

  // ---------- Degrau 7: filosofia medieval e escolástica ----------
  'anselmo-proslogio': [['anselmo-monologio', 'No proêmio, Anselmo diz que buscou um argumento único que dispensasse a longa cadeia do Monológio.']],
  'anselmo-gaunilo': [['anselmo-proslogio', 'É a objeção de Gaunilo ao argumento do Proslógio e a resposta de Anselmo.']],
  'anselmo-concordia': [['anselmo-liberdade', 'Usa a definição de liberdade estabelecida em A Liberdade do Arbítrio.']],
  'gilson-boaventura': [['boaventura-itinerario', 'Estudo da filosofia de Boaventura; o Itinerário é o texto que ele mais analisa.']],
  'tomas-trindade-boecio': [['boecio-opuscula', 'Comenta o tratado A Trindade, dos Opuscula sacra de Boécio.']],
  'tomas-hebdomadas': [['boecio-opuscula', 'Comenta As Hebdômadas, dos Opuscula sacra de Boécio.']],
  'suma-i': [['suma-q2-13', 'A Primeira Parte integral amplia as questões 2–13, já estudadas.']],
  'suma-i-ii-integral': [
    ['suma-i-ii', 'As seleções da I–II já lidas são o núcleo da Primeira Seção da Segunda Parte.'],
    ['suma-i', 'O tratado do homem (I, q. 75–102) é pressuposto pela teoria dos atos humanos.'],
  ],
  'suma-ii-ii': [['suma-i-ii-integral', 'As virtudes em particular pressupõem o tratado geral dos hábitos e das virtudes da I–II.']],
  'suma-iii': [
    ['suma-i', 'Cristologia e sacramentos usam a doutrina de Deus e da criação da Primeira Parte.'],
    ['suma-ii-ii', 'A Terceira Parte fecha o plano da Suma: Deus, o retorno do homem a Deus e Cristo como caminho.'],
  ],
  'tomas-potencia': [['suma-i', 'Retoma em forma de questão disputada a potência divina e a criação da Primeira Parte.']],
  'tomas-mal': [['suma-i-ii-integral', 'Pecado e vício são tratados antes na I–II.']],
  'tomas-alma': [['suma-i', 'As questões 75–89 da Primeira Parte sobre a alma são a versão breve desta disputa.']],
  'tomas-virtudes': [['suma-i-ii-integral', 'Pressupõe o tratado geral das virtudes da I–II.']],
  'tomas-com-interpretacao': [['aristoteles-interpretacao', 'Comentário linha a linha ao Da Interpretação.']],
  'tomas-com-analiticos': [['aristoteles-analiticos-post', 'Comentário linha a linha aos Analíticos Posteriores.']],
  'tomas-com-fisica': [['aristoteles-fisica', 'Comentário linha a linha à Física.']],
  'tomas-com-alma': [['aristoteles-alma', 'Comentário linha a linha ao Da Alma.']],
  'tomas-com-etica': [['aristoteles-etica', 'Comentário linha a linha à Ética a Nicômaco.']],
  'tomas-com-politica': [['aristoteles-politica', 'Comentário à Política, até o livro III.']],
  'tomas-com-metafisica': [['aristoteles-metafisica-completa', 'Comentário linha a linha à Metafísica inteira.']],
  'tomas-unidade-intelecto': [['tomas-com-alma', 'Interpreta Da Alma III contra Averróis com a leitura que Tomás fez no seu comentário.']],
  'tomas-substancias-separadas': [['tomas-ente-essencia', 'Usa a composição de essência e ser nas criaturas espirituais, exposta em O Ente e a Essência.']],
  'gilson-escoto': [['tomas-ente-essencia', 'Compara Escoto com a distinção tomista entre essência e ser.']],
  'gilson-ser-essencia': [['tomas-ente-essencia', 'Faz a história da relação entre ser e essência a partir da tese de Tomás.']],
  'gilson-realismo-tomista': [['gilson-realismo-metodico', 'Desenvolve a tese de O Realismo Metódico contra o ponto de partida crítico.']],

  // ---------- Degrau 8: filosofia moderna ----------
  'descartes-objecoes': [['descartes-meditacoes', 'São as objeções às Meditações e as respostas de Descartes.']],
  'descartes-principios': [['descartes-meditacoes', 'A primeira parte resume a metafísica das Meditações antes da física.']],
  'descartes-paixoes': [['descartes-cartas-elisabeth', 'Nasce da correspondência com Elisabeth sobre a união da alma e do corpo.']],
  'gilson-estudos-cartesianos': [
    ['descartes-meditacoes', 'Compara as provas de Deus das Meditações com as escolásticas.'],
    ['suma-i', 'A comparação pressupõe conhecer as provas e a doutrina de Deus em Tomás.'],
  ],
  'spinoza-etica': [['descartes-principios', 'Spinoza expôs os Princípios de Descartes "em ordem geométrica" antes de escrever a Ética, que parte da noção cartesiana de substância.']],
  'pascal-pensamentos': [
    ['pascal-sacy', 'Epicteto e Montaigne, os dois polos da Conversa com o Sr. de Sacy, estruturam a apologia.'],
    ['descartes-meditacoes', 'Pascal opõe o Deus de Abraão ao "Deus dos filósofos" e critica Descartes.'],
  ],
  'locke-ensaio': [['descartes-meditacoes', 'O livro I combate as ideias inatas da tradição cartesiana.']],
  'locke-dois-tratados': [['locke-lei-natureza', 'A lei natural, tema dos Ensaios, fundamenta o estado de natureza do Segundo Tratado.']],
  'hume-tratado': [['locke-ensaio', 'Desenvolve a teoria das ideias de Locke até suas consequências céticas.']],
  'rousseau-contrato': [
    ['rousseau-desigualdade', 'O estado de natureza do segundo Discurso é o ponto de partida do Contrato.'],
    ['locke-dois-tratados', 'Contrato e soberania são pensados contra e a partir de Hobbes e Locke.'],
  ],
  'kant-crp': [
    ['kant-dissertacao', 'A distinção entre sensibilidade e entendimento da Dissertação de 1770 é a base da Estética e da Analítica.'],
    ['descartes-meditacoes', 'A refutação do idealismo e os paralogismos discutem diretamente Descartes.'],
  ],
  'kant-fundamentacao': [['hume-moral', 'Kant busca um princípio moral a priori, contra a fundamentação no sentimento de Hume.']],
  'kant-crpratica': [['kant-crp', 'A liberdade como ideia da razão vem da terceira antinomia da primeira Crítica.']],
  'kant-juizo': [
    ['kant-crp', 'Quer unir o domínio da natureza, da primeira Crítica, ao da liberdade.'],
    ['kant-crpratica', 'O domínio da liberdade é o da segunda Crítica.'],
  ],
  'kant-religiao': [['kant-crpratica', 'A religião "nos limites da razão" parte dos postulados da razão prática.']],
  'kant-metafisica-costumes': [['kant-fundamentacao', 'Aplica ao direito e à virtude o princípio estabelecido na Fundamentação.']],

  // ---------- Degrau 9: filosofia contemporânea ----------
  'hegel-fenomenologia': [['kant-crp', 'A Introdução critica a ideia kantiana de examinar o conhecimento antes de conhecer.']],
  'hegel-logica': [['hegel-fenomenologia', 'Para Hegel, a Fenomenologia é a introdução à Lógica.']],
  'hegel-enciclopedia': [['hegel-logica', 'A primeira parte da Enciclopédia é a versão breve da Ciência da Lógica.']],
  'hegel-direito': [
    ['hegel-enciclopedia', 'Desenvolve o "espírito objetivo" da Enciclopédia.'],
    ['kant-metafisica-costumes', 'A crítica da moralidade abstrata dirige-se a Kant.'],
  ],
  'hegel-religiao': [['hegel-fenomenologia', 'Retoma o capítulo sobre a religião da Fenomenologia.']],
  'kierkegaard-temor': [['biblia-genesis-exodo', 'Medita sobre o sacrifício de Isaac (Gênesis 22).']],
  'kierkegaard-posescrito': [['kierkegaard-migalhas', 'É, pelo próprio título, o pós-escrito às Migalhas Filosóficas.']],
  'kierkegaard-ironia': [['platao-apologia', 'A tese é sobre o Sócrates de Platão e de Xenofonte.']],
  'marx-critica-hegel': [['hegel-direito', 'Comenta parágrafos da Filosofia do Direito de Hegel.']],
  'marx-manuscritos': [['hegel-fenomenologia', 'O último manuscrito é uma crítica da dialética da Fenomenologia.']],
  'marx-ideologia': [['marx-teses-feuerbach', 'As Teses são o esboço do acerto de contas com Feuerbach desenvolvido na Ideologia.']],
  'marx-capital-i': [['marx-contribuicao', 'O Capital retoma e reformula a teoria do valor da Contribuição (1859).']],
  'marx-capital-ii-iii': [['marx-capital-i', 'Os livros II e III continuam o livro I.']],
  'nietzsche-genealogia': [['nietzsche-alem', 'A folha de rosto a apresenta como complemento de Além do Bem e do Mal.']],
  'frege-sentido': [['copi-logica', 'Pressupõe a lógica de predicados, nome e predicado, identidade.']],
  'husserl-meditacoes': [['descartes-meditacoes', 'Retoma o método cartesiano como "nova introdução à fenomenologia".']],
  'heidegger-ser-tempo': [
    ['husserl-meditacoes', 'Usa e transforma o método fenomenológico de Husserl, a quem a obra é dedicada.'],
    ['aristoteles-metafisica-completa', 'A pergunta pelo sentido do ser parte da ontologia grega.'],
  ],
  'wittgenstein-tractatus': [['frege-sentido', 'O prefácio nomeia Frege e Russell como interlocutores.']],
  'wittgenstein-investigacoes': [['wittgenstein-tractatus', 'O prefácio pede que os novos pensamentos sejam lidos contra o fundo do Tractatus.']],
  'wittgenstein-certeza': [['wittgenstein-investigacoes', 'Aplica a análise dos jogos de linguagem à certeza e à dúvida.']],
  'popper-posescrito': [['popper-logica', 'É o pós-escrito à Lógica da Pesquisa Científica.']],
  'popper-conhecimento-objetivo': [['popper-logica', 'Parte do falseacionismo exposto na Lógica da Pesquisa.']],
  'sartre-ser-nada': [
    ['husserl-meditacoes', 'O método é a fenomenologia de Husserl.'],
    ['heidegger-ser-tempo', 'Dialoga com a analítica da existência de Ser e Tempo.'],
  ],
  'sartre-metodo': [['marx-ideologia', 'Discute o materialismo histórico como "filosofia insuperável" do seu tempo.']],
  'sartre-critica': [
    ['sartre-ser-nada', 'Reformula a liberdade de O Ser e o Nada em termos de práxis.'],
    ['sartre-metodo', 'Questão de Método é a introdução da Crítica.'],
  ],
  'maritain-graus': [['suma-i', 'Expõe a teoria tomista do conhecimento, da Primeira Parte, em confronto com a ciência moderna.']],
  'maritain-sete-licoes': [['aristoteles-metafisica-completa', 'Lições sobre a noção de ser da metafísica aristotélico-tomista.']],
  'maritain-breve-tratado': [['tomas-ente-essencia', 'Parte da distinção entre essência e existência.']],
  'anscombe-mmp': [
    ['kant-fundamentacao', 'Critica a moral do dever e da lei sem legislador.'],
    ['hume-moral', 'Discute a passagem do "é" ao "deve" em Hume.'],
  ],
  'macintyre-virtude': [['anscombe-mmp', 'Retoma a tese de Anscombe sobre o vocabulário moral moderno como fragmento de uma tradição perdida.']],
  'macintyre-justica': [['macintyre-virtude', 'Continuação declarada de Depois da Virtude.']],
  'macintyre-tres-versoes': [['macintyre-justica', 'Completa a trilogia iniciada em Depois da Virtude.']],

  // ---------- Degrau 10: Mário Ferreira dos Santos ----------
  'mfs-sabedoria': [['mfs-filosofia-concreta', 'A Mathesis Megisthe desenvolve os princípios demonstrados na Filosofia Concreta.']],
  'mfs-marxismo': [
    ['marx-manifesto', 'A análise pressupõe conhecer as teses de Marx em fonte primária.'],
    ['mfs-logica-dialectica', 'Aplica ao marxismo a dialética do autor, exposta em Lógica e Dialéctica.'],
  ],
  'mfs-logistica': [['copi-logica', 'Critica a lógica simbólica ("logística"); é preciso conhecer suas noções básicas.']],
  'mfs-traducoes': [['nietzsche-zaratustra', 'Inclui a tradução comentada do Zaratustra.']],

  // ---------- Degrau 11: Olavo de Carvalho ----------
  'olavo-como-vencer': [['aristoteles-topicos', 'Comenta a Dialética Erística de Schopenhauer, cujos estratagemas pressupõem a dialética dos Tópicos.']],
  'olavo-tradicionalistas': [['guenon-crise', 'Escritos da fase em que estudou os perenialistas; Guénon é a referência central.']],
  'voegelin-ordem': [['voegelin-nova-ciencia', 'A Nova Ciência da Política apresenta a teoria da representação e da ordem que Ordem e História desenvolve.']],
  'olavo-descartes': [['descartes-meditacoes', 'Interpreta as Meditações, do gênio maligno à veracidade divina.']],
  'olavo-husserl': [['husserl-meditacoes', 'Pressupõe conhecer o método fenomenológico de Husserl.']],

  // ---------- Degrau 12: ética, política, direito, cultura ----------
  'jp2-pessoa-acao': [
    ['jp2-scheler', 'A ética de Scheler, avaliada na tese, é retrabalhada na antropologia de Pessoa e Ação.'],
    ['husserl-meditacoes', 'Usa o método fenomenológico para descrever a experiência da ação.'],
  ],
  'jp2-teologia-corpo': [['jp2-amor-responsabilidade', 'Desenvolve em chave bíblica e teológica a ética do amor de Amor e Responsabilidade.']],
  'jp2-dives': [['jp2-redemptor', 'Segunda encíclica da trilogia trinitária iniciada com Redemptor hominis.']],
  'jp2-dominum': [['jp2-dives', 'Fecha a trilogia trinitária (Filho, Pai, Espírito Santo).']],
  'jp2-veritatis': [['suma-i-ii', 'Fundamenta a moral na lei natural e na teoria dos atos humanos de Tomás.']],
  'jp2-evangelium': [['jp2-veritatis', 'Aplica à vida humana os princípios morais de Veritatis splendor, que cita.']],
  'finnis-lei-natural': [['suma-i-ii', 'Releitura analítica da lei natural de Tomás (I–II, q. 94).']],
  'strauss-direito-natural': [
    ['aristoteles-politica', 'Contrapõe o direito natural clássico ao moderno; a Política é a referência do clássico.'],
    ['locke-dois-tratados', 'Locke é um dos autores modernos analisados.'],
  ],
  'rawls-justica': [
    ['rousseau-contrato', 'Declara retomar a tradição do contrato social de Locke, Rousseau e Kant.'],
    ['kant-fundamentacao', 'Propõe uma interpretação kantiana da justiça como equidade.'],
  ],
  'arendt-condicao': [
    ['aristoteles-politica', 'A distinção entre vida ativa e vida na pólis parte de Aristóteles.'],
    ['marx-capital-i', 'Discute longamente a teoria do trabalho de Marx.'],
  ],
  'burke-reflexoes': [['rousseau-contrato', 'Responde aos princípios abstratos de direito que inspiraram a Revolução.']],
};
