// Filmes, séries, animações e animes da formação infantil e juvenil, com ficha pedagógica.
// Cada ficha separa: o que está explicitamente na obra (obra), a leitura pedagógica da Academia (academia) e os
// cuidados. A idade é avaliação própria da Academia, não a classificação oficial; a oficial fica "a conferir" na
// ClassInd (Ministério da Justiça) até ser conferida. Videogames não entram aqui: os jogos têm aba própria.
// Escala de adequação: 0 nenhum, 1 leve, 2 moderado, 3 forte. Nada de episódio, cronologia ou filler é inventado:
// a estrutura de episódios do acompanhamento é informada pela família a partir da fonte oficial.

export const TIPOS_MIDIA = { filme: 'Filme', serie: 'Série animada', anime: 'Anime', animacao: 'Animação' };
export const ASPECTOS = {
  violencia: 'Violência física', psicologica: 'Violência psicológica', sexual: 'Sexualização', linguagem: 'Linguagem',
  terror: 'Terror e sustos', emocional: 'Peso emocional', moral: 'Complexidade moral',
};
export const NIVEL_ASPECTO = ['nenhum', 'leve', 'moderado', 'forte'];
export const PERCURSOS = {
  heroi: 'Herói que persevera', crescimento: 'Cresce e amadurece', redencao: 'Arrependimento e reparação mostrados na história',
  ambiguo: 'Muda de lado, sem arrependimento mostrado', 'sem-arrependimento': 'Não se arrepende',
};
const OFICIAL = 'A conferir na ClassInd (Ministério da Justiça).';
const FONTES = 'Ficha escrita pela Academia a partir da obra. Confira ano, criadores e classificação oficial na ClassInd e na distribuidora.';

export const MIDIA_INFANTIL = [
  {
    id: 'bluey', titulo: 'Bluey', tipo: 'serie', criador: 'Joe Brumm (Ludo Studio, Austrália)', ano: '2018', idade: 2, acompanhar: true,
    adequacao: { violencia: 0, psicologica: 0, sexual: 0, linguagem: 0, terror: 0, emocional: 1, moral: 1 },
    obra: 'Episódios curtos sobre uma família de cães: duas irmãs brincam de faz de conta com o pai e a mãe, que entram na brincadeira.',
    temas: ['brincadeira imaginativa', 'vida em família', 'frustração e paciência', 'regras do jogo'],
    personagens: [{ nome: 'Bluey', percurso: 'crescimento', texto: 'Aprende a perder, a esperar a vez e a lidar com a frustração dentro da brincadeira.' }],
    academia: 'Bom modelo de pais presentes, que brincam e dão limites com carinho. Serve de ponte para brincadeiras reais: depois do episódio, brinque do mesmo jeito longe da tela.',
    cuidados: 'Episódios curtos ajudam a limitar a tela. Alguns tratam de assuntos de adulto de modo indireto; veja antes quando puder.',
    perguntas: ['O que ela fez quando perdeu no jogo?', 'Que brincadeira do episódio a gente pode fazer agora, de verdade?'],
    disciplinas: ['Linguagem', 'Formação moral'],
  },
  {
    id: 'totoro', titulo: 'Meu Amigo Totoro', original: 'Tonari no Totoro', tipo: 'filme', criador: 'Hayao Miyazaki (Studio Ghibli)', ano: '1988', idade: 3,
    adequacao: { violencia: 0, psicologica: 0, sexual: 0, linguagem: 0, terror: 1, emocional: 1, moral: 0 },
    obra: 'Duas irmãs se mudam para o campo com o pai enquanto a mãe está internada. Encontram criaturas fantásticas da floresta. A irmã menor se perde e todos a procuram.',
    temas: ['irmãs', 'natureza', 'doença na família', 'esperança', 'imaginação'],
    personagens: [{ nome: 'Satsuki', percurso: 'crescimento', texto: 'Cuida da irmã menor e carrega a preocupação com a mãe; mostra responsabilidade e também medo.' }],
    academia: 'Bela para contemplar a natureza criada e o cuidado entre irmãos. As criaturas vêm do folclore japonês: são fantasia, e vale dizer à criança que não são anjos nem santos.',
    cuidados: 'A cena da menina perdida pode angustiar os pequenos; assista junto.',
    perguntas: ['Como a irmã mais velha cuidou da menor?', 'O que a família fez quando a mãe estava doente?'],
    disciplinas: ['Ciências (natureza)', 'Formação moral'],
  },
  {
    id: 'toy-story', titulo: 'Toy Story', tipo: 'filme', criador: 'John Lasseter (Pixar)', ano: '1995', idade: 4,
    adequacao: { violencia: 1, psicologica: 1, sexual: 0, linguagem: 1, terror: 1, emocional: 1, moral: 1 },
    obra: 'Um boneco de caubói, o brinquedo preferido de um menino, sente ciúme quando chega um boneco astronauta novo. A disputa os coloca em perigo, e eles precisam se ajudar para voltar para casa.',
    temas: ['inveja', 'ciúme', 'amizade', 'humildade', 'trabalho em equipe'],
    personagens: [
      { nome: 'Woody', percurso: 'redencao', texto: 'Age por inveja e causa o problema; reconhece o erro e arrisca-se para salvar o rival.' },
      { nome: 'Buzz', percurso: 'crescimento', texto: 'Pensa que é um herói de verdade e precisa aceitar com humildade o que é.' },
    ],
    academia: 'Mostra a inveja como vício que cega e a reconciliação como fruto de reconhecer o erro e reparar o mal feito.',
    cuidados: 'Os brinquedos desmontados do vizinho podem assustar os pequenos.',
    perguntas: ['Por que Woody ficou com raiva do Buzz?', 'O que ele fez para consertar o que fez de errado?'],
    disciplinas: ['Formação moral', 'Linguagem'],
  },
  {
    id: 'marcelino', titulo: 'Marcelino Pão e Vinho', original: 'Marcelino pan y vino', tipo: 'filme', criador: 'Ladislao Vajda (Espanha)', ano: '1955', idade: 7,
    adequacao: { violencia: 0, psicologica: 0, sexual: 0, linguagem: 0, terror: 1, emocional: 2, moral: 1 },
    obra: 'Um menino órfão é criado por frades num convento. No sótão, encontra um crucifixo e conversa com Jesus, a quem leva pão e vinho.',
    temas: ['caridade', 'vida religiosa', 'desejo da mãe', 'céu'],
    personagens: [{ nome: 'Marcelino', percurso: 'crescimento', texto: 'Travesso e generoso; aprende a partilhar o pouco que tem.' }],
    academia: 'A história é ficção piedosa, não um milagre reconhecido pela Igreja; diga isso à criança. Ajuda a falar da presença de Jesus, da Eucaristia e do céu.',
    cuidados: 'O final trata da morte do menino; veja antes e converse com calma, sem pressa.',
    perguntas: ['O que Marcelino levou para Jesus?', 'Como os frades cuidavam dele?'],
    disciplinas: ['Formação católica', 'História'],
  },
  {
    id: 'rei-leao', titulo: 'O Rei Leão', original: 'The Lion King', tipo: 'filme', criador: 'Roger Allers e Rob Minkoff (Disney)', ano: '1994', idade: 6,
    adequacao: { violencia: 2, psicologica: 2, sexual: 0, linguagem: 0, terror: 1, emocional: 2, moral: 2 },
    obra: 'O tio mata o rei e faz o filho dele, ainda filhote, acreditar que a culpa foi sua. O filhote foge e vive sem responsabilidades, até ser chamado a voltar e assumir o lugar do pai.',
    temas: ['responsabilidade', 'culpa', 'fuga do dever', 'inveja', 'paternidade'],
    personagens: [
      { nome: 'Simba', percurso: 'crescimento', texto: 'Foge da culpa e do dever; volta, encara a verdade e assume a responsabilidade.' },
      { nome: 'Scar', percurso: 'sem-arrependimento', texto: 'Movido pela inveja e pela ambição; mente e manipula até o fim.' },
    ],
    academia: '"Sem preocupações" é apresentado como fuga, não como sabedoria: bom para conversar sobre dever e coragem. A ideia de que os mortos vivem nas estrelas é imagem do filme, não a fé católica sobre o céu.',
    cuidados: 'A morte do pai é forte para crianças pequenas.',
    perguntas: ['Por que Simba fugiu?', 'O que ele precisou ter coragem de fazer?', 'Scar alguma vez pediu perdão?'],
    disciplinas: ['Formação moral', 'Ciências (animais)'],
  },
  {
    id: 'chihiro', titulo: 'A Viagem de Chihiro', original: 'Sen to Chihiro no Kamikakushi', tipo: 'filme', criador: 'Hayao Miyazaki (Studio Ghibli)', ano: '2001', idade: 8,
    adequacao: { violencia: 1, psicologica: 1, sexual: 0, linguagem: 0, terror: 2, emocional: 2, moral: 2 },
    obra: 'Uma menina entra num mundo de espíritos. Os pais comem sem pedir e viram porcos. Ela precisa trabalhar numa casa de banhos, sem esquecer o próprio nome, para salvá-los.',
    temas: ['gula', 'ganância', 'trabalho', 'coragem', 'identidade', 'gratidão'],
    personagens: [
      { nome: 'Chihiro', percurso: 'crescimento', texto: 'Começa medrosa e mimada; torna-se trabalhadora, leal e corajosa.' },
      { nome: 'Sem-Rosto', percurso: 'crescimento', texto: 'Tenta comprar afeto com ouro e se torna voraz; acalma-se quando é tratado com bondade.' },
    ],
    academia: 'Os vícios aparecem com consequências visíveis (gula, ganância). Os espíritos vêm da religião tradicional japonesa: são fantasia, e é bom distinguir da fé.',
    cuidados: 'Criaturas e transformações podem assustar crianças sensíveis.',
    perguntas: ['O que aconteceu com os pais por causa da gula?', 'Por que era importante não esquecer o nome?'],
    disciplinas: ['Formação moral', 'Geografia (Japão)'],
  },
  {
    id: 'avatar', titulo: 'Avatar: A Lenda de Aang', original: 'Avatar: The Last Airbender', tipo: 'serie', criador: 'Michael Dante DiMartino e Bryan Konietzko (Nickelodeon)', ano: '2005-2008', idade: 9, acompanhar: true,
    adequacao: { violencia: 2, psicologica: 1, sexual: 0, linguagem: 0, terror: 1, emocional: 2, moral: 2 },
    obra: 'Num mundo dividido em quatro nações, um menino que fugiu da própria missão precisa aprender a dominar os elementos para pôr fim a uma guerra. Um príncipe banido o persegue para recuperar a honra.',
    temas: ['responsabilidade', 'guerra e paz', 'misericórdia', 'honra', 'família', 'perdão'],
    personagens: [
      { nome: 'Aang', percurso: 'heroi', texto: 'Erra ao fugir do dever, assume a missão e procura vencer sem tirar a vida do inimigo.' },
      { nome: 'Zuko', percurso: 'redencao', texto: 'Busca honra no lugar errado; reconhece o mal que fez, pede perdão e repara com obras. Exemplo claro de conversão mostrada na história.' },
      { nome: 'Azula', percurso: 'sem-arrependimento', texto: 'Domina pelo medo e não se arrepende.' },
      { nome: 'Iroh', percurso: 'heroi', texto: 'Tio paciente e sábio, que espera a mudança do sobrinho sem desistir dele.' },
    ],
    academia: 'Ótima para estudar arrependimento verdadeiro (Zuko) e a diferença entre ele e a simples mudança de lado. A espiritualidade da série (reencarnação, espíritos) é ficção inspirada em religiões orientais e difere da fé católica: vale explicar.',
    cuidados: 'Há batalhas e guerra, sem sangue explícito.',
    perguntas: ['O que mudou de verdade em Zuko?', 'Pedir perdão basta, ou é preciso reparar?', 'Por que Aang não quis matar o inimigo?'],
    disciplinas: ['Formação moral', 'História (guerra e paz)', 'Geografia'],
  },
  {
    id: 'naruto', titulo: 'Naruto', tipo: 'anime', criador: 'Masashi Kishimoto (mangá); anime do Studio Pierrot', ano: 'mangá 1999-2014', idade: 12, acompanhar: true,
    adequacao: { violencia: 3, psicologica: 2, sexual: 2, linguagem: 1, terror: 2, emocional: 2, moral: 3 },
    obra: 'Um órfão, rejeitado na aldeia por carregar dentro de si uma raposa demoníaca, quer ser reconhecido e tornar-se o líder da vila. Treina como ninja, faz amigos e enfrenta inimigos poderosos.',
    temas: ['perseverança', 'amizade', 'rejeição', 'vingança', 'sacrifício', 'proteção dos outros'],
    personagens: [
      { nome: 'Naruto', percurso: 'heroi', texto: 'Persevera apesar da rejeição; é leal aos amigos e transforma a solidão em desejo de proteger.' },
      { nome: 'Gaara', percurso: 'redencao', texto: 'Isolado e violento por causa da mesma rejeição; depois de enfrentar Naruto muda de vida, passa a proteger a própria vila e assume essa responsabilidade.' },
      { nome: 'Orochimaru', percurso: 'ambiguo', texto: 'Busca o poder e a imortalidade, faz experimentos com pessoas e ataca a vila. Mais tarde ajuda os antigos inimigos, mas a história não mostra arrependimento nem reparação.' },
    ],
    academia: 'Bom para comparar três caminhos: perseverar no bem (Naruto), converter-se e reparar (Gaara) e mudar de lado por conveniência, sem arrependimento (Orochimaru). Compreender um personagem não é aprovar o que ele faz.',
    cuidados: 'Lutas com sangue, mortes e cenas de tortura; piadas com nudez (técnica de transformação e um mestre que espia mulheres). O anime tem episódios que não adaptam o mangá (fillers): confira em lista confiável antes de marcar no acompanhamento. A continuação (Shippuden) é mais pesada.',
    perguntas: ['Por que Gaara e Naruto, que sofreram parecido, escolheram caminhos diferentes?', 'Orochimaru se arrependeu? O que mostra que sim ou que não?', 'A vingança resolve alguma coisa na história?'],
    disciplinas: ['Formação moral', 'Literatura (narrativa)', 'Geografia (Japão)'],
  },
  {
    id: 'fma-brotherhood', titulo: 'Fullmetal Alchemist: Brotherhood', tipo: 'anime', criador: 'Hiromu Arakawa (mangá); anime do estúdio Bones', ano: '2009-2010', idade: 14, acompanhar: true,
    adequacao: { violencia: 3, psicologica: 3, sexual: 1, linguagem: 1, terror: 3, emocional: 3, moral: 3 },
    obra: 'Dois irmãos tentam trazer a mãe morta de volta pela alquimia e pagam caro: um perde partes do corpo, o outro o corpo inteiro. Buscam um meio de reparar o erro e descobrem uma conspiração no próprio país.',
    temas: ['limites da ciência', 'soberba', 'sacrifício', 'culpa e reparação', 'guerra', 'os sete pecados capitais'],
    personagens: [
      { nome: 'Edward Elric', percurso: 'crescimento', texto: 'Paga pela soberba de querer vencer a morte; aprende a humildade e a aceitar limites.' },
      { nome: 'Scar', percurso: 'redencao', texto: 'Movido pela vingança de um massacre; reconhece o mal da vingança e passa a lutar para impedir um mal maior.' },
    ],
    academia: 'Os vilões se chamam como os sete pecados capitais (Luxúria, Gula, Inveja, Ganância, Preguiça, Ira e Orgulho): boa porta para estudar os vícios na tradição cristã. Bom para discutir até onde a ciência pode ir.',
    cuidados: 'Violência forte, um massacre de guerra e uma cena de experimento com uma criança, muito perturbadora. Para adolescentes, com conversa.',
    perguntas: ['Qual foi o erro dos irmãos no começo?', 'Que vício cada vilão representa, e como ele aparece nas ações?', 'Qual a diferença entre justiça e vingança na história de Scar?'],
    disciplinas: ['Formação moral', 'Filosofia', 'Química (como imagem)', 'História (guerra)'],
  },
].map((m) => ({ publico: m.idade >= 12 ? 'juvenil' : 'infantil', oficial: OFICIAL, fontes: FONTES, original: '', acompanhar: false, ...m }));

export const midiaPorId = Object.fromEntries(MIDIA_INFANTIL.map((m) => [m.id, m]));

/** Obras adequadas à idade (anos completos), da mais nova para a mais velha; sem idade, todas. */
export const midiaParaIdade = (anos) => MIDIA_INFANTIL.filter((m) => anos === null || anos === undefined || m.idade <= anos).sort((a, b) => a.idade - b.idade);
