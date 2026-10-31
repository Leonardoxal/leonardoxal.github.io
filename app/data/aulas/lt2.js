// Literatura II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Literatura).
// Da epopeia grega a Dante; do Renascimento ao Modernismo, com a literatura brasileira;
// Aristóteles e Dante; Cervantes, Shakespeare e Machado de Assis.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lt2-1', titulo: 'Da epopeia grega à Divina Comédia', duracao: '150 min',
  aprendera: ['Situar Homero e a tragédia grega', 'Conhecer a Eneida e a literatura latina', 'Situar as Confissões e a literatura medieval', 'Conhecer a estrutura da Divina Comédia'],
  prereq: ['Literatura I (módulo LT1)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que obras de mais de dois mil anos continuam a ser lidas? O que fundaram para toda a literatura ocidental?</p>
<h3>Grécia</h3>
<p>A Ilíada e a Odisseia, atribuídas a Homero, narram a guerra de Troia e o retorno de Ulisses; foram o livro de formação dos gregos ${tag('fato')}. No século V a.C., Ésquilo, Sófocles e Eurípides compuseram as grandes tragédias; o Édipo Rei de Sófocles foi para Aristóteles o modelo da tragédia ${tag('fato')}.</p>
<h3>Roma</h3>
<p>Virgílio escreveu a Eneida (c. 29–19 a.C.), epopeia da fundação de Roma; Horácio e Ovídio marcaram a poesia latina ${tag('fato')}.</p>
<h3>Antiguidade cristã e Idade Média</h3>
<p>As Confissões de Santo Agostinho (397–400) inauguram a autobiografia interior, narrada como oração a Deus ${tag('fato')}. Na Idade Média, surgiram hinos litúrgicos, canções de gesta como a Canção de Rolando (séc. XI) e a lírica trovadoresca; em galego-português, Afonso X compôs as Cantigas de Santa Maria (século XIII) ${tag('fato')}.</p>
<h3>Dante</h3>
<p>A Divina Comédia de Dante Alighieri (c. 1308–1321) narra a viagem do poeta pelo Inferno, Purgatório e Paraíso, guiado por Virgílio e depois por Beatriz; tem cem cantos em tercetos encadeados (terza rima) ${tag('fato')}. É uma síntese da teologia, da filosofia e da história medievais em forma poética ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Epopeia', 'Longo poema narrativo de feitos heroicos.'],
    ['Tragédia', 'Drama de ação séria que suscita compaixão e temor.'],
    ['Canção de gesta', 'Poema épico medieval sobre feitos de cavaleiros.'],
    ['Cantigas', 'Poemas líricos trovadorescos, muitas vezes musicados.'],
    ['Terza rima', 'Tercetos encadeados pela rima (aba, bcb...), usados por Dante.'],
  ],
  exemplos: `<p><strong>A porta do Inferno:</strong> no canto III do Inferno, Dante lê sobre a porta uma inscrição que termina com o célebre "Deixai toda esperança, vós que entrais". A cena condensa a teologia do inferno como perda definitiva de Deus, e a arte de Dante em transformar doutrina em imagem que não se esquece.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Divina Comédia ajudou a fixar o italiano literário ${tag('fato')}. <strong>No Brasil:</strong> a Divina Comédia tem traduções em português, como a de Vasco Graça Moura (Portugal) e a de Italo Eugenio Mauro (Brasil) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os clássicos continuam formando', tag: 'argumento',
    premissas: ['Os clássicos tratam de questões humanas permanentes: amor, morte, justiça, pecado, salvação.', 'Fazem-no com uma forma que concentra e ilumina essas questões.', 'Por isso continuam a falar a leitores de épocas muito diferentes.'],
    conclusao: 'Logo, ler os clássicos é entrar numa conversa formadora que atravessa os séculos.',
    nota: 'Italo Calvino definiu clássico como livro que nunca terminou de dizer o que tinha para dizer.',
  },
  objecoes: [
    { objecao: 'Obras antigas são distantes demais e não dizem nada a quem vive hoje.', tag: 'debate',
      resposta: 'A distância exige esforço — notas, contexto, boa tradução —, mas as questões permanecem: Antígona entre a lei do Estado e a lei divina, Ulisses saudoso de casa, Agostinho inquieto. Muitos leitores de hoje se reconhecem nessas obras.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com uma obra por período, de Homero a Dante, com data, autor e característica, e leia o canto I do Inferno.</p>`,
  fonte: {
    obra: 'Dante Alighieri, Divina Comédia, Inferno, cantos I a III', link: null,
    orientacao: `<p>Observe a selva escura, as três feras, o encontro com Virgílio e a porta do Inferno.</p>`,
  },
  perguntas: [
    { p: 'Que tragédia era o modelo de Aristóteles?', r: 'O Édipo Rei, de Sófocles.' },
    { p: 'Quem guia Dante no Inferno e no Purgatório?', r: 'Virgílio.' },
    { p: 'Quantos cantos tem a Divina Comédia?', r: 'Cem.' },
  ],
  exercicios: [
    mc('A Eneida é de:', ['Homero', 'Virgílio', 'Ovídio', 'Horácio'], 1, 'Roma.'),
    mc('As Confissões foram escritas em:', ['397–400', '1308–1321', '29–19 a.C.', 'Século XI'], 0, 'Agostinho.'),
    mc('As Cantigas de Santa Maria são de:', ['Afonso X', 'Dante', 'Camões', 'Agostinho'], 0, 'Galego-português.'),
    mc('A terza rima é forma da:', ['Ilíada', 'Divina Comédia', 'Eneida', 'Canção de Rolando'], 1, 'Dante.'),
    mc('A Canção de Rolando é do século:', ['V a.C.', 'XI', 'XIV', 'XVI'], 1, 'Gesta.'),
    disc('Inicie a linha do tempo de Homero a Dante e comente o canto I do Inferno.', ['Marcos', 'Datas', 'Características', 'Canto I']),
  ],
  resumo: ['Homero; tragédia grega.', 'Virgílio: Eneida.', 'Agostinho: Confissões.', 'Gesta, trovadorismo, Cantigas de Santa Maria.', 'Dante: Divina Comédia.'],
  referencias: [
    { texto: 'Dante Alighieri, Divina Comédia (c. 1308–1321).' },
    { texto: 'Étienne Gilson, Dante e a filosofia (1939).', livro: 'gilson-dante' },
    { texto: 'Erich Auerbach, Mimesis (1946).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Édipo Rei', 'Modelo trágico.'], ['Virgílio', 'Guia.'], ['100 cantos', 'Comédia.']],
  avancado: {
    texto: `<h3>Antígona</h3>
<p>Na Antígona de Sófocles, a heroína desobedece ao decreto do rei Creonte para sepultar o irmão, invocando leis não escritas dos deuses ${tag('fato')}. A tragédia é citada em debates sobre lei natural e lei positiva desde a Antiguidade; Aristóteles a menciona na Retórica ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Retórica, livro I.', livro: 'aristoteles-retorica' }],
    exercicios: [
      mc('Antígona desobedece a:', ['Édipo', 'Creonte', 'Zeus', 'Tirésias'], 1, 'Decreto.'),
      mc('Ela invoca leis:', ['Escritas da cidade', 'Não escritas dos deuses', 'Do mercado', 'Militares'], 1, 'Lei natural.'),
      mc('Aristóteles menciona Antígona na:', ['Física', 'Retórica', 'Metafísica', 'Categorias'], 1, 'Lei comum.'),
      disc('Relacione Antígona ao debate sobre a lei injusta estudado em Direito.', ['Tragédia', 'Lei natural', 'Lei positiva', 'Avaliação'])],
  },
}),

aula({
  id: 'lt2-2', titulo: 'Do Renascimento ao Modernismo, com a literatura brasileira', duracao: '150 min',
  aprendera: ['Situar Camões, Cervantes, Shakespeare e Vieira', 'Conhecer o Barroco e o Arcadismo no Brasil', 'Situar o Romantismo e o Realismo brasileiros', 'Situar o Modernismo e seus grandes autores'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a literatura moderna se formou, e como nasceu uma literatura brasileira com voz própria?</p>
<h3>Renascimento e Barroco</h3>
<p>Camões publicou Os Lusíadas em 1572; Cervantes, Dom Quixote (1605 e 1615); Shakespeare escreveu Hamlet por volta de 1600 ${tag('fato')}. O padre Antônio Vieira, jesuíta, pregou no Brasil e em Portugal sermões que são obras-primas da prosa barroca, como o Sermão da Sexagésima (1655) ${tag('fato')}. Gregório de Matos escreveu poesia satírica e religiosa na Bahia ${tag('fato')}.</p>
<h3>Arcadismo e Romantismo</h3>
<p>Tomás Antônio Gonzaga publicou Marília de Dirceu (1792), ligado ao ambiente da Inconfidência Mineira ${tag('fato')}. O Romantismo buscou uma identidade nacional: Gonçalves Dias ("Canção do exílio"), José de Alencar (Iracema, 1865), Castro Alves ("O navio negreiro") ${tag('fato')}.</p>
<h3>Realismo</h3>
<p>Machado de Assis, com Memórias póstumas de Brás Cubas (1881) e Dom Casmurro (1899), elevou a prosa brasileira a nível universal ${tag('interpretacao')}.</p>
<h3>Modernismo</h3>
<p>A partir da Semana de 1922, Mário de Andrade (Macunaíma, 1928), Manuel Bandeira, Carlos Drummond de Andrade, Graciliano Ramos (Vidas secas, 1938), João Cabral de Melo Neto (Morte e vida severina, 1955), Guimarães Rosa (Grande sertão: veredas, 1956) e Clarice Lispector renovaram a literatura brasileira ${tag('fato')}. Ariano Suassuna, no Auto da Compadecida (1955), uniu cultura popular nordestina e tradição católica ${tag('fato')}.</p>`,
  vocabulario: [
    ['Barroco', 'Estilo de contrastes, jogos de ideias e sentimento religioso intenso.'],
    ['Arcadismo', 'Estilo do século XVIII de simplicidade pastoral e razão.'],
    ['Romantismo', 'Movimento de subjetividade, natureza e identidade nacional.'],
    ['Realismo', 'Movimento de observação crítica da sociedade e do homem.'],
    ['Modernismo', 'Renovação artística a partir de 1922 no Brasil.'],
  ],
  exemplos: `<p><strong>Vieira e a semente:</strong> no Sermão da Sexagésima, Vieira pergunta por que a palavra de Deus pregada dá tão pouco fruto, e examina o semeador, a semente e o terreno, para concluir que a culpa está muitas vezes nos pregadores. A argumentação engenhosa e as antíteses são marcas do Barroco.</p>`,
  contexto: `<p><strong>No mundo:</strong> Fernando Pessoa chamou Vieira de "imperador da língua portuguesa" ${tag('fato')}. <strong>No Brasil:</strong> Morte e vida severina tornou-se peça teatral encenada em todo o país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a literatura brasileira dialoga com a fé', tag: 'argumento',
    premissas: ['A formação cultural do Brasil foi profundamente marcada pelo catolicismo.', 'Autores de várias épocas — Vieira, Gregório de Matos, Alphonsus de Guimaraens, Jorge de Lima, Suassuna, Adélia Prado — trataram de temas religiosos.', 'Mesmo autores não crentes dialogam com essa herança.'],
    conclusao: 'Logo, ler a literatura brasileira exige conhecer a tradição cristã que a atravessa.',
    nota: 'Isso não significa que toda obra seja religiosa, mas que a herança é parte do contexto.',
  },
  objecoes: [
    { objecao: 'O Modernismo rompeu totalmente com o passado literário.', tag: 'debate',
      resposta: 'O Modernismo combateu o academismo parnasiano, mas também redescobriu o Barroco, a cultura popular e os cronistas coloniais. Drummond e Bandeira dominavam as formas tradicionais. Ruptura e continuidade convivem.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com obras do Renascimento ao Modernismo, incluindo ao menos seis obras brasileiras, com data, autor e característica do período.</p>`,
  fonte: {
    obra: 'Antônio Vieira, Sermão da Sexagésima (1655); Antonio Candido, Formação da literatura brasileira (1959), introdução', link: null,
    orientacao: `<p>Em Vieira, a estrutura argumentativa. Em Candido, a ideia de sistema literário.</p>`,
  },
  perguntas: [
    { p: 'Quando foram publicados Os Lusíadas?', r: 'Em 1572.' },
    { p: 'Quem escreveu Marília de Dirceu?', r: 'Tomás Antônio Gonzaga.' },
    { p: 'Quando foi publicado Grande sertão: veredas?', r: 'Em 1956.' },
  ],
  exercicios: [
    mc('O Sermão da Sexagésima é de:', ['Gregório de Matos', 'Antônio Vieira', 'Anchieta', 'Bilac'], 1, '1655.'),
    mc('Iracema é de:', ['Machado', 'Alencar', 'Castro Alves', 'Gonçalves Dias'], 1, '1865.'),
    mc('Vidas secas é de:', ['Graciliano Ramos', 'Jorge Amado', 'Rachel de Queiroz', 'Rosa'], 0, '1938.'),
    mc('Macunaíma é de:', ['Oswald de Andrade', 'Mário de Andrade', 'Drummond', 'Bandeira'], 1, '1928.'),
    mc('O Auto da Compadecida é de:', ['Suassuna', 'João Cabral', 'Nelson Rodrigues', 'Clarice'], 0, '1955.'),
    disc('Complete a linha do tempo do Renascimento ao Modernismo com seis obras brasileiras.', ['Obras', 'Datas', 'Características', 'Brasil']),
  ],
  resumo: ['Camões (1572), Cervantes, Shakespeare.', 'Vieira e Gregório de Matos.', 'Arcadismo (1792) e Romantismo.', 'Machado de Assis.', 'Modernismo: Mário, Drummond, Graciliano, Rosa, Clarice, João Cabral, Suassuna.'],
  referencias: [
    { texto: 'Antonio Candido, Formação da literatura brasileira (1959).' },
    { texto: 'Antônio Vieira, Sermões.' },
    { texto: 'Alfredo Bosi, História concisa da literatura brasileira (1970).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler as fontes indicadas'],
  revisao: [['1572', 'Lusíadas.'], ['1655', 'Sexagésima.'], ['1956', 'Grande sertão.']],
  avancado: {
    texto: `<h3>Alceu Amoroso Lima e a crítica católica</h3>
<p>Alceu Amoroso Lima, que assinava Tristão de Athayde, foi crítico do Modernismo e converteu-se ao catolicismo em 1928, tornando-se líder do laicato católico brasileiro ${tag('fato')}. Sua crítica buscou unir juízo estético e visão cristã do homem ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Alceu Amoroso Lima (Tristão de Athayde), Estudos (série de crítica literária).' }],
    exercicios: [
      mc('Alceu Amoroso Lima assinava:', ['Tristão de Athayde', 'Jackson de Figueiredo', 'Mário de Andrade', 'Gustavo Corção'], 0, 'Pseudônimo.'),
      mc('Ele se converteu ao catolicismo em:', ['1922', '1928', '1945', '1962'], 1, 'Laicato.'),
      mc('Sua crítica buscava unir:', ['Juízo estético e visão cristã', 'Só política', 'Só técnica', 'Nada'], 0, 'Interpretação.'),
      disc('Compare a crítica de Alceu Amoroso Lima com a de Antonio Candido.', ['Alceu', 'Candido', 'Comparação', 'Avaliação'])],
  },
}),

aula({
  id: 'lt2-3', titulo: 'Aristóteles e Dante: a Poética e a Divina Comédia', duracao: '150 min',
  aprendera: ['Expor os elementos da tragédia segundo a Poética', 'Explicar unidade de ação, peripécia e reconhecimento', 'Analisar a estrutura moral da Divina Comédia', 'Relacionar a Comédia com a teologia e a filosofia de Tomás'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A Poética é o primeiro tratado de teoria literária; a Divina Comédia, talvez o maior poema cristão. O que cada um ensina sobre a arte de narrar e sobre o homem?</p>
<h3>A Poética</h3>
<p>Aristóteles distingue seis partes da tragédia: enredo, caracteres, pensamento, elocução, espetáculo e canto; o enredo é a mais importante, "a alma da tragédia" ${tag('fato')}. O enredo deve ter unidade de ação, com começo, meio e fim ${tag('fato')}. Os melhores enredos têm peripécia (inversão da situação) e reconhecimento (passagem da ignorância ao conhecimento), como no Édipo Rei ${tag('fato')}.</p>
<h3>O herói trágico</h3>
<p>O herói ideal não é totalmente bom nem mau, e cai por um erro (hamartia), não por maldade ${tag('fato')}.</p>
<h3>A Divina Comédia</h3>
<p>O Inferno organiza os pecados em círculos, conforme a gravidade; o Purgatório, segundo os sete pecados capitais, purificados pelo amor ordenado; o Paraíso sobe pelas esferas até a visão de Deus, "o amor que move o sol e as outras estrelas" ${tag('fato')}. A estrutura moral segue em grande parte a ética de Aristóteles e de Tomás de Aquino, que aparece no Paraíso ${tag('interpretacao')}.</p>
<h3>Gilson</h3>
<p>Étienne Gilson, em Dante e a filosofia (1939), mostrou que Dante não é simples versificador de Tomás, e que sua visão tem traços próprios, como a separação entre o fim temporal e o espiritual do homem ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Enredo', 'Estrutura das ações; a "alma da tragédia" para Aristóteles.'],
    ['Peripécia', 'Inversão da situação no enredo.'],
    ['Reconhecimento', 'Passagem da ignorância ao conhecimento.'],
    ['Hamartia', 'Erro do herói trágico que causa sua queda.'],
    ['Contrapasso', 'Lei de Dante pela qual a pena corresponde ao pecado.'],
  ],
  exemplos: `<p><strong>Paolo e Francesca:</strong> no canto V do Inferno, os amantes adúlteros são arrastados para sempre por um vento, como em vida se deixaram arrastar pela paixão. É o contrapasso: a pena espelha o pecado. Dante desmaia de compaixão, mas o poema mantém a justiça. A cena é ao mesmo tempo humana e teológica.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Poética foi a base das teorias do drama clássico, como as "três unidades" do classicismo francês ${tag('fato')}. <strong>No Brasil:</strong> Machado de Assis citou Dante em várias obras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o enredo é a alma da narrativa', tag: 'argumento',
    premissas: ['A literatura imita ações humanas.', 'As ações ganham sentido pela ordem causal que as liga (começo, meio e fim).', 'O caráter se revela nas escolhas que movem o enredo.'],
    conclusao: 'Logo, o enredo bem construído é o princípio da obra narrativa e dramática.',
    nota: 'Romances modernos às vezes priorizam a interioridade, mas mesmo neles a sequência de escolhas importa.',
  },
  objecoes: [
    { objecao: 'A Divina Comédia é cruel por condenar pessoas ao inferno.', tag: 'debate',
      resposta: 'O poema representa a doutrina da justiça divina e da liberdade humana: os condenados escolheram afastar-se de Deus. Dante mostra compaixão por eles, mas não nega a gravidade do mal. O leitor pode discordar, mas deve compreender a lógica moral da obra.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de um canto do Inferno (sugestão: canto V ou XXVI) conforme o método do Degrau 0, com análise do contrapasso.</p>`,
  fonte: {
    obra: 'Aristóteles, Poética, caps. 6 a 14; Dante Alighieri, Inferno, cantos V e XXVI', link: null,
    orientacao: `<p>Na Poética, as partes da tragédia e o herói. Em Dante, Francesca e Ulisses.</p>`,
  },
  perguntas: [
    { p: 'Qual a parte mais importante da tragédia para Aristóteles?', r: 'O enredo.' },
    { p: 'O que é peripécia?', r: 'A inversão da situação no enredo.' },
    { p: 'O que é o contrapasso?', r: 'A correspondência entre pena e pecado na Divina Comédia.' },
  ],
  exercicios: [
    mc('A "alma da tragédia" é o:', ['Espetáculo', 'Enredo', 'Canto', 'Cenário'], 1, 'Poética.'),
    mc('Hamartia significa:', ['Virtude', 'Erro', 'Coro', 'Final feliz'], 1, 'Herói trágico.'),
    mc('Paolo e Francesca estão no canto:', ['I', 'V', 'XXXIV', 'XXXIII'], 1, 'Inferno.'),
    mc('O Purgatório se organiza segundo os:', ['Dez mandamentos', 'Sete pecados capitais', 'Doze apóstolos', 'Planetas'], 1, 'Purificação.'),
    mc('Dante e a filosofia é de:', ['Maritain', 'Gilson', 'Auerbach', 'Candido'], 1, '1939.'),
    disc('Faça a ficha de leitura de um canto do Inferno com análise do contrapasso.', ['Canto', 'Personagens', 'Contrapasso', 'Avaliação']),
  ],
  resumo: ['Seis partes da tragédia; enredo como alma.', 'Unidade de ação; peripécia; reconhecimento.', 'Hamartia.', 'Comédia: Inferno, Purgatório, Paraíso; contrapasso.', 'Gilson (1939).'],
  referencias: [
    { texto: 'Aristóteles, Poética.', livro: 'aristoteles-poetica' },
    { texto: 'Dante Alighieri, Divina Comédia.' },
    { texto: 'Étienne Gilson, Dante e a filosofia (1939).', livro: 'gilson-dante' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha do canto', 'Ler as fontes indicadas'],
  revisao: [['Enredo', 'Alma.'], ['Peripécia', 'Inversão.'], ['Contrapasso', 'Dante.']],
  avancado: {
    texto: `<h3>O Ulisses de Dante</h3>
<p>No canto XXVI do Inferno, Ulisses narra sua última viagem além das colunas de Hércules, em busca de conhecimento, e o naufrágio diante da montanha do Purgatório ${tag('fato')}. Muitos leitores veem nele a grandeza e o limite da busca humana de saber sem a graça ${tag('interpretacao')}. Primo Levi recordou esse canto em É isto um homem? ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Dante Alighieri, Inferno, canto XXVI.' }],
    exercicios: [
      mc('O Ulisses de Dante aparece no canto:', ['V', 'XXVI', 'XXXIII', 'I'], 1, 'Inferno.'),
      mc('Ulisses naufraga diante da montanha do:', ['Paraíso', 'Purgatório', 'Olimpo', 'Sinai'], 1, 'Viagem.'),
      mc('Primo Levi recordou o canto em:', ['É isto um homem?', 'A trégua', 'Os afogados', 'O sistema periódico'], 0, 'Auschwitz.'),
      disc('Interprete o Ulisses de Dante à luz da relação entre razão e graça.', ['Narrativa', 'Busca', 'Limite', 'Interpretação'])],
  },
}),

aula({
  id: 'lt2-4', titulo: 'Cervantes, Shakespeare e Machado de Assis', duracao: '150 min',
  aprendera: ['Analisar o Dom Quixote como romance moderno', 'Conhecer temas centrais de Shakespeare', 'Analisar a ironia de Machado de Assis', 'Comparar os três autores'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Três autores criaram personagens que parecem mais vivos que muitas pessoas reais: Dom Quixote, Hamlet, Brás Cubas. Como conseguiram?</p>
<h3>Cervantes</h3>
<p>Dom Quixote (1605 e 1615) narra um fidalgo que, de tanto ler romances de cavalaria, decide tornar-se cavaleiro andante, acompanhado de Sancho Pança ${tag('fato')}. É frequentemente considerado o primeiro romance moderno, pela tensão entre ilusão e realidade e pela complexidade dos personagens ${tag('interpretacao')}.</p>
<h3>Shakespeare</h3>
<p>Shakespeare (1564–1616) escreveu tragédias como Hamlet, Macbeth e Rei Lear, comédias e dramas históricos ${tag('fato')}. Seus personagens deliberam em monólogos sobre ação, culpa, poder e morte; Macbeth mostra a corrupção da consciência pela ambição ${tag('interpretacao')}.</p>
<h3>Machado de Assis</h3>
<p>Machado de Assis (1839–1908), neto de escravos libertos, tornou-se o maior escritor brasileiro do século XIX ${tag('interpretacao')}. Em Memórias póstumas de Brás Cubas (1881), um defunto narra a própria vida com ironia, digressões e capítulos curtíssimos, dialogando com Laurence Sterne ${tag('fato')}. Sua ironia expõe a vaidade, o egoísmo e a hipocrisia da sociedade ${tag('interpretacao')}.</p>
<h3>Comparação</h3>
<p>Os três exploram a distância entre o que os personagens pensam de si e o que realmente são ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Romance de cavalaria', 'Gênero medieval e renascentista de aventuras de cavaleiros.'],
    ['Monólogo', 'Fala de um personagem sozinho, revelando seus pensamentos.'],
    ['Ironia', 'Dizer algo de modo que se entenda outra coisa.'],
    ['Digressão', 'Desvio do fio narrativo para comentários.'],
    ['Defunto autor', 'Narrador morto de Brás Cubas.'],
  ],
  exemplos: `<p><strong>Os moinhos de vento:</strong> Dom Quixote ataca moinhos acreditando que são gigantes, apesar dos avisos de Sancho. A cena é cômica, mas também mostra a força de uma visão de mundo que transforma o real. Ao longo do livro, o leitor passa a admirar a nobreza do cavaleiro, mesmo rindo dele.</p>`,
  contexto: `<p><strong>No mundo:</strong> Cervantes e Shakespeare morreram em 1616, com poucos dias de diferença no calendário de cada país ${tag('fato')}. <strong>No Brasil:</strong> as obras de Machado de Assis estão em domínio público e disponíveis gratuitamente ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ironia de Machado é moral', tag: 'argumento',
    premissas: ['Brás Cubas expõe com franqueza cínica sua vaidade e sua indiferença.', 'O leitor percebe a miséria moral que o narrador não reconhece.', 'Essa distância provoca juízo e autoconhecimento no leitor.'],
    conclusao: 'Logo, a ironia de Machado é um instrumento de lucidez moral, e não só um jogo de estilo.',
    nota: 'Há debate sobre o pessimismo de Machado e sua relação com a fé.',
  },
  objecoes: [
    { objecao: 'Machado é pessimista e cético; não serve para formar.', tag: 'debate',
      resposta: 'Machado é cético em muitos pontos e mostra o mal com crueza. Mas ver com clareza a vaidade e o egoísmo é parte da formação moral, e muitos leitores cristãos encontram nele um retrato verdadeiro da condição humana ferida. Formar não é ler só obras edificantes.' },
  ],
  aplicacao: `<p>Leia capítulos selecionados de Memórias póstumas de Brás Cubas (por exemplo, os capítulos iniciais e o final, "Das negativas") e analise a ironia do narrador, comparando-o com Dom Quixote ou com um personagem de Shakespeare.</p>`,
  fonte: {
    obra: 'Machado de Assis, Memórias póstumas de Brás Cubas (1881), capítulos I a VII e CLX', link: { url: 'https://www.dominiopublico.gov.br', rotulo: 'Domínio Público' },
    orientacao: `<p>Observe a dedicatória ao verme, o "defunto autor" e o balanço final das "negativas".</p>`,
  },
  perguntas: [
    { p: 'Por que Dom Quixote é considerado o primeiro romance moderno?', r: 'Pela tensão entre ilusão e realidade e pela complexidade dos personagens.' },
    { p: 'O que mostra Macbeth?', r: 'A corrupção da consciência pela ambição.' },
    { p: 'Quem narra Memórias póstumas de Brás Cubas?', r: 'O próprio Brás Cubas, já morto.' },
  ],
  exercicios: [
    mc('A segunda parte do Dom Quixote é de:', ['1605', '1615', '1616', '1572'], 1, 'Cervantes.'),
    mc('O escudeiro de Dom Quixote é:', ['Sancho Pança', 'Rocinante', 'Dulcineia', 'Horácio'], 0, 'Companheiro.'),
    mc('Hamlet foi escrito por volta de:', ['1500', '1600', '1700', '1800'], 1, 'Shakespeare.'),
    mc('Machado de Assis nasceu em:', ['1808', '1839', '1881', '1897'], 1, 'Rio de Janeiro.'),
    mc('O capítulo final de Brás Cubas chama-se:', ['"Das negativas"', '"O delírio"', '"O verme"', '"Óbito"'], 0, 'Balanço.'),
    disc('Analise a ironia de Brás Cubas e compare-o com Dom Quixote ou um personagem de Shakespeare.', ['Ironia', 'Citações', 'Comparação', 'Interpretação']),
  ],
  resumo: ['Dom Quixote (1605/1615): ilusão e realidade.', 'Shakespeare: Hamlet, Macbeth, Lear.', 'Machado: Brás Cubas (1881), ironia.', 'Distância entre ser e parecer.', 'Formação pela lucidez.'],
  referencias: [
    { texto: 'Miguel de Cervantes, Dom Quixote (1605–1615).' },
    { texto: 'Machado de Assis, Memórias póstumas de Brás Cubas (1881).' },
    { texto: 'Erich Auerbach, Mimesis (1946).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise comparada', 'Ler a fonte indicada'],
  revisao: [['Moinhos', 'Quixote.'], ['Macbeth', 'Ambição.'], ['Defunto autor', 'Brás Cubas.']],
  avancado: {
    texto: `<h3>O "to be or not to be"</h3>
<p>No monólogo mais famoso de Hamlet (ato III), o príncipe pondera se é mais nobre sofrer ou agir, e se a morte seria um sono; o medo do que vem depois da morte o detém ${tag('fato')}. O monólogo é lido como meditação sobre ação, consciência e eternidade ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'William Shakespeare, Hamlet, ato III, cena 1.' }],
    exercicios: [
      mc('O monólogo "ser ou não ser" está no ato:', ['I', 'III', 'V', 'II'], 1, 'Hamlet.'),
      mc('O que detém Hamlet no monólogo?', ['O medo do que vem após a morte', 'O amor por Ofélia', 'O pai', 'A guerra'], 0, 'Consciência.'),
      mc('O monólogo trata de:', ['Ação, consciência e morte', 'Comércio', 'Viagens', 'Culinária'], 0, 'Temas.'),
      disc('Analise o monólogo de Hamlet como meditação sobre ação e eternidade.', ['Estrutura', 'Temas', 'Citações', 'Interpretação'])],
  },
}),

avaliacao('lt2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história da literatura e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia sua ficha do canto de Dante e sua análise de Machado.</li></ul>`,
[
  disc('Trace a história da literatura de Homero ao Modernismo brasileiro com oito obras datadas, explicando a característica principal de cada período.', ['Obras', 'Datas', 'Características', 'Brasil']),
  disc('Compare a Poética de Aristóteles com um romance moderno (Dom Quixote ou uma obra de Machado de Assis), mostrando o que as categorias aristotélicas iluminam e o que deixam de lado.', ['Categorias', 'Obra', 'Comparação', 'Citações']),
]),
];
