// Obras completas dos autores antigos, em ordem de leitura. Datas antigas são aproximadas.
import { autor } from './_obra.js';

const socrates = autor({ chave: 'socrates', autor: 'Sócrates (testemunhos)', area: 'Filosofia antiga', degrau: 2, modulo: 'm3', nivel: 2 });
const platao = autor({ chave: 'platao', autor: 'Platão', area: 'Filosofia antiga', degrau: 4, modulo: 'm5' });
const aristoteles = autor({ chave: 'aristoteles', autor: 'Aristóteles', area: 'Filosofia antiga', degrau: 4, modulo: 'm5', nivel: 4 });
const epicuro = autor({ chave: 'epicuro', autor: 'Epicuro', area: 'Ética helenística', degrau: 4, modulo: 'm5', nivel: 2 });
const epicteto = autor({ chave: 'epicteto', autor: 'Epicteto (registrado por Arriano)', area: 'Ética helenística', degrau: 4, modulo: 'm5', nivel: 2 });
const marco = autor({ chave: 'marco-aurelio', autor: 'Marco Aurélio', area: 'Ética helenística', degrau: 4, modulo: 'm5', nivel: 2 });

const P = platao.O;
const A = aristoteles.O;

export const ANTIGOS = [
  { chave: 'socrates', itens: [
    socrates.O('aristofanes-nuvens', 'As Nuvens', '423 a.C.', 'Por que aqui: é o único retrato de Sócrates escrito em vida dele, em forma de comédia. Observe: a confusão entre Sócrates, os sofistas e os físicos, que a Apologia vai rebater. Pergunta: que acusações da peça reaparecem no processo de 399 a.C.?', { autor: 'Aristófanes (testemunho sobre Sócrates)' }),
    socrates.ref('platao-apologia'),
    socrates.ref('platao-criton'),
    socrates.ref('platao-eutifron'),
    socrates.O('xenofonte-apologia', 'Apologia de Sócrates', 'c. 390–360 a.C.', 'Por que aqui: segunda versão da defesa, para comparar com a de Platão. Observe: o tom mais prático e menos irônico. Pergunta: o que muda no Sócrates de Xenofonte em relação ao de Platão?', { autor: 'Xenofonte (testemunho sobre Sócrates)' }),
    socrates.O('xenofonte-memoraveis', 'Memoráveis (Ditos e Feitos Memoráveis de Sócrates)', 'c. 371 a.C. ou depois', 'Por que aqui: a maior coleção de conversas socráticas fora de Platão. Observe: os temas de piedade, autodomínio e utilidade. Pergunta: há um "problema socrático" — qual retrato é mais fiel?', { autor: 'Xenofonte (testemunho sobre Sócrates)' }),
    socrates.O('xenofonte-banquete', 'Banquete', 'c. 380 a.C. ou depois', 'Por que aqui: contraponto ao Banquete de Platão. Observe: o amor tratado de modo mais convivial e moral. Pergunta: o que o confronto com Platão revela do método socrático?', { autor: 'Xenofonte (testemunho sobre Sócrates)' }),
    socrates.O('xenofonte-economico', 'Econômico', 'c. 362 a.C. ou depois', 'Por que aqui: Sócrates sobre a administração da casa. Observe: virtude aplicada à vida doméstica e ao trabalho. Pergunta: que ideia de sabedoria prática aparece aqui?', { autor: 'Xenofonte (testemunho sobre Sócrates)' }),
  ] },

  { chave: 'platao', itens: [
    platao.ref('platao-apologia'),
    platao.ref('platao-criton'),
    platao.ref('platao-eutifron'),
    P('platao-laques', 'Laques', 'c. 399–390 a.C.', 'Por que aqui: primeiro diálogo da série de definições de virtudes. Observe: coragem como firmeza ou como saber. Pergunta: por que as definições fracassam e o que isso ensina?'),
    P('platao-carmides', 'Cármides', 'c. 399–390 a.C.', 'Por que aqui: segue o Laques com a temperança. Observe: a "ciência da ciência" e o conhecimento de si. Pergunta: é possível saber o que se sabe e o que não se sabe?'),
    P('platao-lisis', 'Lísis', 'c. 399–390 a.C.', 'Por que aqui: a amizade, tema que volta no Banquete e em Aristóteles. Observe: o "primeiro amigo" por causa do qual amamos o resto. Pergunta: amamos os amigos por eles mesmos ou por outra coisa?'),
    P('platao-hipias-menor', 'Hípias Menor', 'c. 399–390 a.C.', 'Por que aqui: paradoxo provocador sobre o erro voluntário. Observe: a tese de que ninguém erra de propósito. Pergunta: quem mente sabendo é melhor que quem mente sem saber?'),
    P('platao-ion', 'Íon', 'c. 399–390 a.C.', 'Por que aqui: primeira discussão platônica sobre poesia. Observe: inspiração divina contra técnica. Pergunta: o poeta sabe o que diz?'),
    P('platao-hipias-maior', 'Hípias Maior', 'c. 390 a.C.', 'Por que aqui: a busca da definição do belo. Observe: os sucessivos fracassos e a ironia. Pergunta: o belo é o útil, o conveniente ou o prazeroso?', { nota: 'Autenticidade discutida por alguns estudiosos.' }),
    P('platao-alcibiades-i', 'Alcibíades I', 'c. 390 a.C. (se autêntico)', 'Por que aqui: introdução clássica ao "conhece-te a ti mesmo", usada pelos neoplatônicos como primeiro diálogo. Observe: o homem como alma. Pergunta: cuidar de si é cuidar da alma?', { nota: 'Autenticidade debatida.' }),
    P('platao-protagoras', 'Protágoras', 'c. 390 a.C.', 'Por que aqui: grande confronto com um sofista. Observe: unidade das virtudes e virtude como ciência. Pergunta: a virtude pode ser ensinada?'),
    P('platao-gorgias', 'Górgias', 'c. 387 a.C.', 'Por que aqui: retórica contra filosofia, prepara a República. Observe: Cálicles e o direito do mais forte. Pergunta: é pior cometer ou sofrer injustiça?'),
    P('platao-menexeno', 'Menexeno', 'c. 386 a.C.', 'Por que aqui: paródia de discurso fúnebre, comentário à retórica política. Observe: o tom irônico. Pergunta: o que Platão critica nos elogios públicos?'),
    P('platao-eutidemo', 'Eutidemo', 'c. 384 a.C.', 'Por que aqui: catálogo vivo de sofismas, ligado ao Módulo 4. Observe: erística contra dialética. Pergunta: como distinguir argumento e truque?'),
    platao.ref('platao-menon'),
    P('platao-cratilo', 'Crátilo', 'c. 386–380 a.C.', 'Por que aqui: primeira filosofia da linguagem. Observe: nomes por natureza ou por convenção. Pergunta: as palavras revelam as coisas?'),
    platao.ref('platao-fedon'),
    P('platao-banquete', 'O Banquete', 'c. 385–370 a.C.', 'Por que aqui: o amor como ascensão ao Belo, depois do Fédon. Observe: o discurso de Diotima (201d–212a). Pergunta: o que é amar segundo Diotima?'),
    platao.ref('platao-republica'),
    P('platao-fedro', 'Fedro', 'c. 370 a.C.', 'Por que aqui: amor, alma e retórica verdadeira. Observe: o mito da parelha alada e a crítica da escrita. Pergunta: por que Platão desconfia do texto escrito?'),
    platao.ref('platao-parmenides'),
    platao.ref('platao-teeteto'),
    platao.ref('platao-sofista'),
    P('platao-politico', 'Político', 'c. 360 a.C.', 'Por que aqui: continua o Sofista com o método de divisão. Observe: a arte régia e o papel das leis. Pergunta: o governante sábio deve estar acima das leis?', { nivel: 4 }),
    P('platao-filebo', 'Filebo', 'c. 350 a.C.', 'Por que aqui: o bem humano entre prazer e saber. Observe: limite e ilimitado, a vida mista. Pergunta: qual é o lugar do prazer na vida boa?', { nivel: 5 }),
    P('platao-timeu', 'Timeu', 'c. 360 a.C.', 'Por que aqui: a cosmologia mais lida na Antiguidade e na Idade Média. Observe: o Demiurgo, o receptáculo, a alma do mundo. Pergunta: como comparar o Demiurgo com a criação bíblica?', { nivel: 5 }),
    P('platao-critias', 'Crítias', 'c. 360 a.C.', 'Por que aqui: continuação inacabada do Timeu. Observe: o mito da Atlântida. Pergunta: qual a função política desse mito?'),
    P('platao-leis', 'As Leis', 'c. 350 a.C.', 'Por que aqui: a última e mais longa obra; a cidade possível. Observe: livro X, a primeira prova filosófica da existência dos deuses pelo movimento. Pergunta: o que muda em relação à República?', { nivel: 4 }),
    P('platao-epinomis', 'Epínomis', 'c. 347 a.C.', 'Por que aqui: apêndice das Leis sobre a sabedoria. Observe: astronomia e teologia. Pergunta: que sabedoria o conselho noturno deve ter?', { nota: 'Atribuída por muitos a Filipe de Opunte.' }),
    P('platao-cartas', 'Cartas (especialmente a Carta VII)', 'século IV a.C.', 'Por que aqui: depois dos diálogos, a voz de Platão em primeira pessoa (se autêntica). Observe: a experiência de Siracusa e a "digressão filosófica" da Carta VII. Pergunta: por que o essencial não se escreve?', { nota: 'Autenticidade das cartas discutida, sobretudo das demais além da VII.' }),
    P('platao-duvidosos', 'Diálogos duvidosos e espúrios (Alcibíades II, Hiparco, Os Rivais, Teages, Clitofonte, Minos, Definições e outros)', 'séculos IV–III a.C.', 'Por que aqui: completam o corpus transmitido nas tetralogias de Trasilo. Observe: o que distingue esses textos dos autênticos. Pergunta: que critérios os estudiosos usam para decidir a autoria?', { nivel: 2, nota: 'Autoria platônica rejeitada ou duvidosa na maioria dos casos.' }),
  ] },

  { chave: 'aristoteles', itens: [
    aristoteles.ref('aristoteles-categorias'),
    aristoteles.ref('aristoteles-interpretacao'),
    aristoteles.ref('aristoteles-analiticos'),
    aristoteles.ref('aristoteles-analiticos-post'),
    aristoteles.ref('aristoteles-topicos'),
    A('aristoteles-protreptico', 'Protréptico (fragmentos)', 'c. 350 a.C.', 'Por que aqui: exortação juvenil à filosofia, porta de entrada da obra física e ética. Observe: a vida contemplativa como fim. Pergunta: por que filosofar mesmo para quem acha que não deve?', { nivel: 2, nota: 'Reconstruído a partir de citações (sobretudo Jâmblico).' }),
    aristoteles.ref('aristoteles-fisica-ii'),
    A('aristoteles-fisica', 'Física (livros I–VIII)', 'c. 350–330 a.C.', 'Por que aqui: depois do livro II, a obra inteira. Observe: princípios (I), movimento e infinito (III), lugar e tempo (IV), primeiro motor (VII–VIII). Pergunta: por que o movimento exige um primeiro motor imóvel?', { nivel: 5 }),
    A('aristoteles-ceu', 'Do Céu', 'c. 350–330 a.C.', 'Por que aqui: a cosmologia que acompanha a Física. Observe: o éter e o movimento circular. Pergunta: o que permanece filosoficamente válido numa física superada?'),
    A('aristoteles-geracao', 'Da Geração e da Corrupção', 'c. 350–330 a.C.', 'Por que aqui: mudança substancial e elementos. Observe: geração, alteração e mistura. Pergunta: o que é um ser surgir ou deixar de ser?'),
    A('aristoteles-meteorologicos', 'Meteorológicos', 'c. 340 a.C.', 'Por que aqui: completa a filosofia da natureza inorgânica. Observe: o método de observação. Pergunta: como Aristóteles combina dados e princípios?', { nivel: 3 }),
    aristoteles.ref('aristoteles-alma'),
    A('aristoteles-parva-naturalia', 'Pequenos Tratados de História Natural (Parva Naturalia)', 'c. 340 a.C.', 'Por que aqui: aplicações do De Anima: sentido e sensível, memória e reminiscência, sono, sonhos, adivinhação pelos sonhos, longevidade, juventude e velhice, respiração. Observe: memória e reminiscência (central para Tomás). Pergunta: como a memória difere da imaginação?'),
    A('aristoteles-historia-animais', 'História dos Animais', 'c. 340 a.C.', 'Por que aqui: a base empírica da biologia aristotélica. Observe: classificação e descrição. Pergunta: por que coletar fatos antes de explicar causas?', { nivel: 3 }),
    A('aristoteles-partes-animais', 'Das Partes dos Animais', 'c. 340 a.C.', 'Por que aqui: a explicação final (teleológica) dos órgãos. Observe: livro I, a defesa do estudo dos seres vivos. Pergunta: "a natureza não faz nada em vão" — o que significa?'),
    A('aristoteles-movimento-animais', 'Do Movimento dos Animais e Da Marcha dos Animais', 'c. 340 a.C.', 'Por que aqui: ligação entre física, alma e ação. Observe: o "silogismo prático" (Do Movimento 7). Pergunta: como o desejo move o corpo?'),
    A('aristoteles-geracao-animais', 'Da Geração dos Animais', 'c. 340 a.C.', 'Por que aqui: forma e matéria na reprodução. Observe: as causas aplicadas à embriologia. Pergunta: o que esta obra mostra sobre a relação forma–matéria?'),
    aristoteles.ref('aristoteles-etica'),
    A('aristoteles-eudemo', 'Ética a Eudemo', 'c. 350 a.C.', 'Por que aqui: a outra ética, com livros comuns à Nicomaqueia. Observe: diferenças sobre felicidade e amizade. Pergunta: qual das duas éticas é anterior e o que isso muda?'),
    A('aristoteles-magna-moralia', 'Grande Moral (Magna Moralia)', 'século IV a.C.', 'Por que aqui: resumo ético atribuído a Aristóteles. Observe: as diferenças com as duas éticas. Pergunta: é obra de Aristóteles ou de um discípulo?', { nivel: 3, nota: 'Autenticidade debatida.' }),
    aristoteles.ref('aristoteles-politica'),
    A('aristoteles-constituicao-atenas', 'Constituição dos Atenienses', 'c. 330 a.C.', 'Por que aqui: o único estudo constitucional que sobreviveu dos 158 recolhidos pela escola. Observe: a história institucional de Atenas. Pergunta: como esses dados sustentam a Política?', { nivel: 3, nota: 'Autoria aristotélica ou da escola discutida.' }),
    A('aristoteles-retorica', 'Retórica', 'c. 350–330 a.C.', 'Por que aqui: a arte da persuasão como "antístrofe" da dialética. Observe: ethos, pathos, logos; o entimema. Pergunta: persuadir é compatível com buscar a verdade?'),
    A('aristoteles-poetica', 'Poética', 'c. 335 a.C.', 'Por que aqui: depois da Retórica, a teoria da tragédia. Observe: mímesis, catarse, enredo. Pergunta: por que a poesia é "mais filosófica" que a história?'),
    aristoteles.ref('aristoteles-metafisica'),
    A('aristoteles-pseudo', 'Obras pseudo-aristotélicas (Problemas, Do Mundo, Econômicos, Das Virtudes e dos Vícios e outras)', 'séculos IV a.C.–I d.C.', 'Por que aqui: completam o corpus transmitido sob o nome de Aristóteles. Observe: diferenças de estilo e doutrina. Pergunta: por que esses textos circularam como aristotélicos?', { nivel: 2, nota: 'Autoria não aristotélica segundo a maioria dos estudiosos.' }),
    A('aristoteles-metafisica-completa', 'Metafísica (livros I–XIV)', 'c. 350–320 a.C.', 'Por que aqui: com o vocabulário metafísico do Degrau 5, a obra inteira. Observe: substância (VII–IX), ato e potência (IX), o primeiro motor (XII). Pergunta: o que é a substância e como o livro XII leva a Deus?', { degrau: 5, modulo: 'm7', nivel: 5 }),
  ] },

  { chave: 'epicuro', itens: [
    epicuro.ref('epicuro-meneceu'),
    epicuro.O('epicuro-maximas', 'Máximas Principais', 'século III a.C.', 'Por que aqui: o resumo da ética em 40 sentenças. Observe: o "quádruplo remédio". Pergunta: a ausência de dor basta para a felicidade?'),
    epicuro.O('epicuro-herodoto', 'Carta a Heródoto', 'século III a.C.', 'Por que aqui: resumo da física atomista, fundamento da ética. Observe: átomos, vazio, desvio. Pergunta: por que a física serve à tranquilidade?', { nivel: 3 }),
    epicuro.O('epicuro-pitocles', 'Carta a Pítocles', 'século III a.C.', 'Por que aqui: os fenômenos celestes sem deuses intervenientes. Observe: a pluralidade de explicações. Pergunta: por que aceitar várias causas possíveis?'),
    epicuro.O('epicuro-vaticanas', 'Sentenças Vaticanas', 'século III a.C.', 'Por que aqui: sentenças descobertas num manuscrito do Vaticano (1888). Observe: amizade e autossuficiência. Pergunta: que lugar a amizade tem no epicurismo?'),
    epicuro.O('epicuro-fragmentos', 'Fragmentos e testemunhos (Diógenes Laércio X; Sobre a Natureza em Herculano)', 'século III a.C.', 'Por que aqui: completa o pouco que resta de uma obra imensa. Observe: a vida de Epicuro e a escola do Jardim. Pergunta: o que perdemos e como reconstruímos o pensamento de um autor quase perdido?'),
  ] },

  { chave: 'epicteto', itens: [
    epicteto.ref('epicteto-manual'),
    epicteto.O('epicteto-diatribes', 'Diatribes (Discursos), livros I–IV', 'c. 108 d.C.', 'Por que aqui: o ensino completo de que o Manual é resumo. Observe: o uso das impressões e a liberdade interior. Pergunta: o que realmente depende de nós?'),
    epicteto.O('epicteto-fragmentos', 'Fragmentos', 'século II d.C.', 'Por que aqui: completa o corpus. Observe: os ditos transmitidos por Estobeu e outros. Pergunta: que temas não aparecem nas Diatribes?'),
  ] },

  { chave: 'marco-aurelio', itens: [
    marco.ref('marco-aurelio'),
    marco.O('marco-aurelio-fronto', 'Correspondência com Frontão', 'c. 139–166 d.C.', 'Por que aqui: o homem antes do filósofo; cartas com seu mestre de retórica. Observe: a passagem da retórica à filosofia. Pergunta: o que as cartas acrescentam às Meditações?', { verificacao: 'a confirmar', nota: 'Tradução portuguesa completa não verificada.' }),
  ] },
];
