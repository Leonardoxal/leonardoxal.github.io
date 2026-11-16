// Contexto de estudo de cada obra da mediateca: a época em que ela é estudada, a trilha paralela ou a fase inicial
// (teologia e iniciação). O critério é o das aulas: a obra fica onde é mais bem aproveitada, não na data da edição.
// Ordem das regras, da mais forte para a mais fraca (a `base` devolvida diz qual valeu):
//   'curadoria' — livro escolhido à mão para a época (EPOCAS[].obras);
//   'fase'      — o módulo da obra é da teologia ou da iniciação (degraus 0 a 4): ela fica ali, antes das épocas;
//   'assunto'   — o título nomeia um autor ou um período anterior (estudo sobre Platão vai para a Grécia);
//   'autor'     — época do autor (os brasileiros ficam em Brasil);
//   'aula'      — época da aula a que a obra está ligada;
//   'módulo'    — época predominante das aulas do módulo, ou trilha paralela nas matérias sem época.
// É uma proposta declarada, não um juízo sobre cada obra lida: as bases 'aula' e 'módulo' são as mais fracas e
// aparecem na interface como "a conferir". Para corrigir um caso, acrescente o autor em AUTORES ou em ESTUDIOSOS.
import { EPOCAS, PARALELAS, EPOCA_DA_AULA, epocaDaAula, naFase3 } from './epocas.js';
import { MODULOS, todasAulas } from './curriculo.js';
import { OBRAS } from './mediateca.js';
import { normalizar } from '../core.js';

export const PARALELA = 'paralela';
export const FASE_INICIAL = 'fase-inicial';
export const BASES_FRACAS = ['aula', 'módulo'];

// Época de cada autor. Nome de uma palavra vale como sobrenome; com "=" na frente, só quando é o criador inteiro
// (nomes que também são prenomes comuns). Os nomes ficam com acento: a comparação tira acentos e pontuação.
const AUTORES = {
  'egito-mesopotamia': 'jean vercoutter;françoise dunand;gordon childe;leroi-gourhan;grahame clark;robert braidwood;w ceram',
  grecia: 'homero;hesíodo;ésquilo;sófocles;eurípides;eurípedes;aristófanes;píndaro;safo de mitilene;heródoto;tucídides;xenofonte;platão;aristóteles;sócrates;epicuro;=euclides;arquimedes;apolônio de perga;hipócrates;parmênides;heráclito;demóstenes;diógenes laércio;dionísio trácio',
  roma: 'cícero;virgílio;horácio;ovídio;tito lívio;=lívio;tácito;suetônio;sêneca;lucrécio;catulo;tibulo;propércio;plauto;terêncio;petrônio;apuleio;=marcial;=lucano;=luciano;pérsio;sílio itálico;salústio;veleio patérculo;publílio siro;catão;varrão;plínio;quintiliano;vitrúvio;=gaio;=gaius;ulpiano;justiniano;prisciano;arriano;epicteto;epícteto;marco aurélio;plutarco;plotino;porfírio;galeno;ptolomeu;nicômaco de gerasa',
  'cristianismo-primitivo': 'santo agostinho;agostinho de hipona;boécio;eusébio de cesareia;hilário de poitiers;joão damasceno;beda;concílio de niceia;orígenes;tertuliano;são jerônimo;joão crisóstomo',
  medieval: 'tomás de aquino;santo anselmo;anselmo de cantuária;boaventura;duns scotus;abelardo;hugo de são vitor;hugo de são vítor;bernardo claraval;bernardo de claraval;pedro hispano;ramon lull;dante alighieri;dante;chaucer;villon;christine de pisan;froissart;joinville;villehardouin;comines;tomás de kempis;guido d arezzo;machaut;averróis;avicena;maimônides',
  renascimento: 'camões;rabelais;montaigne;erasmo de rotterdam;erasmo;thomas more;maquiavel;shakespeare;marlowe;edmund spenser;cervantes;ronsard;du bellay;de baïf;belleau;pontus de tyard;jodelle;thomas kyd;sackville;thomas norton;lutero;calvino;leonardo da vinci;alberti;vasari;zarlino;palestrina;lassus;william byrd;jacobus gallus;la boetie;francisco de vitória;inácio de loyola;teresa d ávila;tereza d ávila;tereza d ávilla;antônio ferreira;cennino cennini',
  'revolucao-cientifica': 'galileu;kepler;copérnico;newton;descartes;pascal;francis bacon;hobbes;spinoza;espinosa;leibniz;william harvey;robert boyle;robert hooke;huygens;william gilbert;steno;john graunt;william petty;jacob bernoulli;grócio;francisco suárez;comênio;arnauld;belarmino;francisco de sales;joão eudes;olier;molière;moliere;racine;john milton;bunyan;dryden;john donne;thomas browne;john webster;john fletcher;etherege;wycherley;congreve;vanbrugh;aphra behn;fontenelle;pierre bayle;monteverde;monteverdi;heinrich schütz;purcell;couperin;alessandro scarlatti;companhia de jesus',
  iluminismo: 'kant;hume;rousseau;voltaire;diderot;montesquieu;locke;berkeley;adam smith;edmund burke;beccaria;bentham;turgot;quesnay;malthus;lavoisier;laplace;euler;thomas bayes;lineu;james hutton;herder;wilhelm von humboldt;vico;jonathan swift;defoe;alexander pope;fielding;samuel richardson;sterne;samuel johnson;boswell;addison;john gay;james thomson;prévost;marivaux;laclos;chénier;goethe;wollstonecraft;william godwin;james madison;de maistre;afonso de ligório;afonso maria de ligório;montfort;swedenborg;thomas reid;johann sebastian bach;handel;vivaldi;domenico scarlatti;rameau;gluck;haydn;mozart;lorenzo da ponte;cherubini',
  'seculo-xix': 'hegel;schelling;schopenhauer;nietzsche;kierkegaard;karl marx;marx;engels;auguste comte;comte;stuart mill;tocqueville;proudhon;bakunin;kropotkin;darwin;mendel;lyell;maxwell;faraday;john dalton;mendeleiev;fourier;cantor;george boole;frege;peirce;quetelet;clausewitz;benjamin constant;guizot;thiers;thierry;michelet;taine;renan;burkhardt;burckhardt;dilthey;john henry newman;newman;bastiat;jean-baptiste say;david ricardo;carl menger;walras;jevons;bohm bawerk;alfred marshall;john austin;thoreau;emerson;matthew arnold;ratzel;alexander von humboldt;george perkins marsh;tylor;lebon;le bon;hanslick;balmes;leão xiii;joão bosco;teresa do menino jesus;emmerich;william james;dickens;oliver twist;balzac;stendhal;flaubert;victor hugo;zola;maupassant;alexandre dumas;george sand;musset;lamartine;nodier;mérimée;gautier;baudelaire;rimbaud;verlaine;mallarmé;laforgue;corbière;charles cros;isidore ducasse;lautréamont;sainte-beuve;béranger;chateaubriand;goncourt;irmãos edmond;sully prudhomme;de heredia;anatole france;pierre loti;dujardin;de régnier;gourmont;dostoiévski;tolstói;gogol;gógol;púchkin;turguêniev;leskov;jane austen;brontë;george eliot;thackeray;trollope;thomas hardy;tennyson;browning;byron;keats;wordsworth;coleridge;mary shelley;polidori;edward lear;lewis carroll;oscar wilde;kipling;conan doyle;mark twain;melville;hawthorne;henry james;ibsen;büchner;kleist;manzoni;herculano;beethoven;schubert;schumann;chopin;liszt;mendelssohn;berlioz;wagner;verdi;brahms;bruckner;tchaikovsky;mussorgsky;rimsky-korsakov;borodin;glinka;smetana;dvorak;grieg;bizet;offenbach;rossini;von weber;saint-saëns;fauré;duparc;hugo wolf;johann strauss;mascagni;puccini;mahler',
  'seculo-xx': 'husserl;heidegger;edith stein;wittgenstein;sartre;camus;hannah arendt;arendt;voegelin;popper;ortega y gasset;zubiri;lavelle;maritain;bergson;whitehead;bertrand russell;santayana;benedetto croce;croce;cassirer;jung;freud;frankl;piaget;skinner;john b watson;carl rogers;karen horney;szondi;rudolf allers;rollo may;erich neumann;paul diel;foucault;lévi-strauss;max weber;durkheim;marcel mauss;malinowski;franz boas;ruth benedict;evans-pritchard;geertz;victor turner;sapir;saussure;hjelmslev;chomsky;j l austin;bühler;bakhtin;barthes;umberto eco;keynes;hayek;mises;schumpeter;milton friedman;samuelson;kalecki;sraffa;joan robinson;rothbard;kirzner;leontief;kelsen;l a hart;radbruch;lon l fuller;michel villey;leo strauss;raymond aron;raymond aaron;jouvenel;talmon;bobbio;morgenthau;edward carr;edward hallett carr;kenneth waltz;hedley bull;norman angell;mackinder;vidal de la blache;toynbee;spengler;collingwood;koselleck;hayden white;kuhn;einstein;max planck;heisenberg;fermi;feynman;gödel;tarski;hilbert;poincaré;marie curie;pauling;wegener;lemaître;ronald a fisher;guénon;eliade;lonergan;chesterton;clive staples lewis;c s lewis;tolkien;bernanos;mauriac;claudel;evelyn waugh;t s eliot;orwell;huxley;james joyce;proust;kafka;thomas mann;hermann hesse;musil;hermann broch;wassermann;andré gide;valéry;apollinaire;aragon;=colette;giono;giraudoux;jules romains;martin du gard;romain rolland;dorgelès;julien benda;maurois;cocteau;ionesco;beckett;pirandello;d h lawrence;joseph conrad;bernard shaw;h g wells;nabokov;pasternak;bulgákov;búnin;maiakóvski;soljenitsin;soljenítsin;soljenitzin;chalámov;rupert brooke;isaac rosenberg;ballard;agatha christie;fernando pessoa;dorothy l sayers;northrop frye;auerbach;panofsky;wölfflin;gombrich;debussy;ravel;satie;stravinsky;schoenberg;schönberg;webern;alan berg;bartók;shostakovitch;prokofiev;sibelius;janáček;richard strauss;max reger;hindemith;honegger;carl orff;messiaen;frank martin;john cage;boulez;ligeti;albeniz;pio x;pio xi;pio xii;joão xxiii;paulo vi;concílio vaticano ii;joão paulo ii;fulton sheen;lênin;rosa luxemburgo;emma goldman;malatesta;adorno;john dewey;rosenstock-huessy;hartmann;tillich;jankélevitch;anscombe;geach;quine;putnam;habermas;john rawls;nozick;kripke;searle;romano guardini;eric weil;éric weil;kenneth minogue;carroll quigley;russell kirk;josef pieper;sertillanges;garrigou-lagrange;mortimer adler;julián marias;simone weil;gabriel marcel;max scheler;karl jaspers;carl schmitt;antonio gramsci;gramsci;trotski;stalin',
  contemporaneo: 'scruton;dalrymple;jordan peterson;macintyre;john finnis;joseph raz;dworkin;jeremy waldron;scott j shapiro;jules l coleman;matthew kramer;john gardner;andrei marmor;himma;waluchow;brian leiter;julie dickson;frederick schauer;richard posner;tom campbell;neil maccormick;mark c murphy;robert p george;hoppe;huerta de soto;jonathan haidt;edward feser;e michael jones;pascal bernardin;lee penn;plantinga;charles taylor;mary eberstadt;suzanne venker;jared diamond;carlo rovelli;anna lembke;gary wilson;hartmut rosa;mearsheimer;alexander wendt;bento xvi;ratzinger;papa francisco;aleksiévitch;david walsh;amartya sen;elinor ostrom;ipcc',
  brasil: 'adélia prado;alcântara machado;alceu amoroso lima;alphonsus de guimaraens;aluísio de azedo;aluísio azevedo;álvares de azevedo;álvaro lins;annibal m machado;antônio callado;antonio candido;antonio paim;ariano suassuna;arnaldo jabor;gonçalves de azevedo;augusto dos anjos;augusto meyer;aziz ab sáber;basílio da gama;bento teixeira;boris fausto;bruno barreto;bruno tolentino;caio prado;capistrano de abreu;carlos chagas;carlos diegues;drummond de andrade;carlos gomes;magalhães de azeredo;casimiro de abreu;cassiano ricardo;castro alves;cecilia meireles;celso furtado;ciro dos anjos;clarice lispector;cláudio manoel da costa;coelho neto;coelho netto;cruz e souza;cruz e sousa;curt nimuendajú;darcy ribeiro;darcy azambuja;bandeira de melo;érico veríssimo;euclides da cunha;eugênio gudin;fagundes varella;félix pacheco;fernando azevedo;fernando de azevedo;ferreira gullar;florestan fernandes;monte-alverne;francisco otaviano;xavier ferreira marques;franklin távora;santa rita durão;vicente do salvador;fritz müller;gerardo de melo mourão;gilberto freyre;glauber rocha;gonçalves de magalhães;gonçalves dias;graciliano ramos;gregório de matos;guel arraes;guimarães rosa;gustavo corção;gustavo franco;villa-lobos;lima vaz;herberto sales;jacob gorender;meira penna;joão cabral de melo neto;joão camilo;pandiá calógeras;simões lopes neto;joaquim nabuco;joaquim pedro de andrade;jorge amado;jorge andrade;jorge caldeira;jorge de lima;josé américo de almeida;josé bonifácio;josé de alencar;josé de anchieta;anchieta;josé geraldo vieira;merquior;josé honório rodrigues;josé j veiga;josé lins do rego;josé maria dos santos;josé murilo carvalho;josé murilo de carvalho;josé padilha;galvão de sousa;graça aranha;josué de castro;júlia lopes de almeida;laurentino gomes;leon hirzman;lilia moritz schwarcz;lima barreto;câmara cascudo;luís delfino;luís martins;lygia fagundes telles;machado de assis;malba tahan;manuel antônio de almeida;manuel bandeira;batista cepelos;botelho de oliveira;oliveira paiva;marques rebelo;mario de andrade;mário de andrade;mário ferreira dos santos;mário quintana;miguel reale;milton santos;monteiro lobato;nelson rodrigues;nestor vítor;nise da silveira;octávio de faria;olavo bilac;olavo de carvalho;oliveira lima;oliveira vianna;osman lins;oswald de andrade;otto lara resende;otto maria carpeaux;carpeaux;paulo freire;paulo mercadante;paulo prado;pedro calmon;pedro kilkerry;pedro nava;vaz de caminha;rachel de queiroz;raimundo correia;raul bopp;raul pompeia;raymundo faoro;roberto campos;roberto damatta;roberto c simonsen;rubem braga;rubens ricupero;rui barbosa;ruy barbosa;sérgio buarque;sergio milliet;suzana amaral;teixeira e souza;tomás antonio gonzaga;vianna moog;vicente de carvalho;vicente ferreira da silva;vicente tapajós;victor nunes leal;vinícius de moraes;walter salles;wilson martins;viveiros de castro;herbert baldus;cardoso de oliveira;tarquínio de sousa;melo morais;joão armitage;varnhagen;mangabeira unger;percival puggina;ana caroline campagnolo;brilhante ustra;tobias barreto;napoleão mendes de almeida;napoleao mendes de almeida;ibge;inpe;iphan;embrapa;fiocruz;ipea;inep;congresso nacional;supremo tribunal federal;tribunal superior eleitoral;arquivo nacional;banco central do brasil;fundação biblioteca nacional;governo federal;governo provisório da república;assembleia nacional constituinte;ministério da saúde;mapbiomas;observatório nacional;serviço geológico do brasil;diretoria geral de estatística;sociedade brasileira de química',
};

// Autores e obras que aparecem no catálogo sem criador separado (o nome vem dentro do título) e outros acréscimos.
const MAIS = {
  grecia: 'bíblia grega',
  roma: 'sêneca o jovem',
  'cristianismo-primitivo': 'isidoro de sevilha;s agostinho',
  medieval: 'canção de rolando;nibelungos;morte de arthur;marco polo;beowulf;cantiga da ribeirinha;cantigas de santa maria;carmina burana;chrétien de troyes;convívio;geoffrey of monmouth;marie de france;legenda aurea;mabinogion;eddas;volsungos;tirante o branco;gododdin;henrique suso;ibn khaldun;alberto magno;alexandre de hales;suhrawardi;duns scot',
  renascimento: 'gil vicente;sá de miranda;fernão mendes pinto;lusíadas;maurice scève;bartolomeu dos mártires;richard hooker;boccaccio;baccaccio;decamerão',
  'revolucao-cientifica': 'andrew marvell;fenélon;telemachus;john poinsot',
  iluminismo: 'bocage;curvo semedo;josé agostinho de macedo;casanova',
  'seculo-xix': 'eça de queirós;cidade e as serras;camilo castelo branco;almeida garrett;viagens na minha terra;folhas caídas;flores sem fruto;frei luís de souza;frei luís de sousa;antero de quental;antônio nobre;cesário verde;júlio dinis;fidalgos da casa mourisca;uma família inglesa;eurico o presbítero;comédia humana;tchekhov;leconte de lisle;oliveira martins;oliveiras martins;ihering;strindberg;léon bloy;bulfinch;menendez y pelayo;hippolyte taine;origins of contemporary france;madame de staël;eugênio de castro;kalevala',
  'seculo-xx': 'camilo pessanha;mário de sá-carneiro;confissão de lúcio;livro do desassossego;aquilino ribeiro;em busca do tempo perdido;caminho de swann;raparigas em flor;caminho de guermantes;sodoma e gomorra;tempo redescoberto;ferreira de castro;ferrater mora;koestler;martin buber;feyerabend;mannheim;wright mills;riesman;malaparte;e m forster;salinger;hasek;queneau;julien green;f r leavis;lionel trilling;barzun;gilbert highet;besançon;henry corbin;gilbert durand;raymond abellio;schuon;martin lings;susanne k langer;worringer;élie faure;jellinek;meinecke;von hildebrand;rougemont;alan bloom;allan bloom;saul alinsky;zinovyev;mitrokhin;constantin noica;constantin noïka;kurt lewin',
  contemporaneo: 'wolfgang smith;chantal delsol;peter hitchens;gladwell;sheldrake;renaud camus;alain soral;bernard lugan;roger kimball;russell jacoby',
  brasil: 'zélia gattai;antônio vieira;manuel da nóbrega;murilo mendes;alberto da cunha melo;josué montello;carlos lacerda;josé maria bello;sylvio frota;rodrigo gurgel;renato lessa;emil farhat;camillo de oliveira torres;raimundo faoro;silva lacaz;jardim das aflições',
};
for (const [epoca, nomes] of Object.entries(MAIS)) AUTORES[epoca] += `;${nomes}`;

// Estudiosos: escrevem sobre uma época que não é a deles. Vale primeiro o assunto do título; sem ele, o campo de estudo.
const ESTUDIOSOS = {
  grecia: 'werner jaeger;giovanni reale;pierre hadot;claude mosse;thomas m robinson;heinrich schliemann;fustel de coulanges;bruno snell',
  roma: 'theodor mommsen;mary beard;edward gibbon;indro montanelli;maria luiza corassin;robert etienne',
  'cristianismo-primitivo': 'henri-irénée marrou;daniel rops',
  medieval: 'étienne gilson;gilson;le goff;legoff;régine pernoud;georges duby;marc bloch;huizinga;copleston;grabmann;demurger;malcolm barber;barbara frale;peter partner;franco cardini;edward peters;jean dumont;ricardo da costa;costa nunes;émile mâle;kantorowics;kantorowicz;bede jarrett;albert c shannon;christopher dawson;de wulf;alois dempf',
  renascimento: 'jean delumeau;henry kamen;frances a yates;frances yates;paolo rossi;denifle',
  'revolucao-cientifica': 'alexandre koyré;pierre duhem;christopher hill',
  iluminismo: 'george lefebvre;paul guyer;herbert james paton;paul hazard;gaxotte;robert darnton;jonathan i israel',
  'seculo-xix': 'eric hobsbawm',
  'seculo-xx': 'richard j evans;fernand braudel;norbert elias;peter burke;will durant;glenn hughes;paul caringella;michael franz;eugene webb',
};

// Palavras do título que nomeiam um período ou uma corrente; a primeira lista que casar vale.
const PERIODOS = [
  ['brasil', /\b(brasil|brasileir\w*|brasilia|tupi\w*|bandeirant\w*|republica velha|getulio|vargas|dom pedro|d pedro)\b/],
  ['egito-mesopotamia', /\b(egito|egipci\w*|farao\w*|mesopotam\w*|sumeri\w*|babilon\w*|pre historia|pre historic\w*|paleolitic\w*|neolitic\w*)\b/],
  ['grecia', /\b(grecia|greg[oa]s?|helenis\w*|atenas|atenien\w*|esparta\w*|pre socratic\w*|sofistas?|socratic\w*|platoni\w*|aristotelic\w*|aristotelis\w*|epicuris\w*)\b/],
  ['roma', /\b(roma|imperio romano|roman[oa]s?|latim|estoic\w*)\b/],
  ['cristianismo-primitivo', /\b(patristica|padres da igreja|padres apostolic\w*|cristianismo primitivo|primeiros cristaos|agostinian\w*)\b/],
  ['medieval', /\b(medieval|medievais|idade media|medievo|escolastic\w*|tomis\w*|tomasian\w*|cruzadas?|templari\w*|inquisi\w*|feudal\w*|bizan\w*|cavalaria|catedra(l|is)|gotic\w*|middle ages|moyen age|edad media|medievale|islam\w*)\b/],
  ['renascimento', /\b(renascimento|renascentis\w*|renaissance|reforma protestante|descobrimentos)\b/],
  ['revolucao-cientifica', /\b(revolucao cientifica|barroc\w*|seculo xvii|cartesian\w*)\b/],
  ['iluminismo', /\b(iluminis\w*|revolucao francesa|revolution francaise|french revolution|seculo xviii|kantian\w*|antigo regime|old regime|jacobin\w*)\b/],
  ['seculo-xix', /\b(seculo xix|romantismo|napoleonic\w*|marxis\w*|hegelian\w*|positivismo|revolucao industrial|vitorian\w*)\b/],
  ['seculo-xx', /\b(seculo xx|guerra mundial|nazis\w*|hitler|stalinis\w*|sovietic\w*|soviet|kgb|leninisme|communis\w*|comunismo|fascis\w*|guerra fria|holocausto|totalitar\w*|fenomenolog\w*|existencialis\w*|logoterapia|psicanal\w*)\b/],
  ['contemporaneo', /\b(seculo xxi|globaliza\w*|nova ordem mundial|pos modern\w*)\b/],
];

// Autores cujas obras costumam ser comentário de épocas anteriores: neles o assunto do título pesa mais que a data.
const TARDIAS = new Set(['seculo-xx', 'contemporaneo', 'brasil']);
// Nomes curtos aceitos como assunto num título (os demais precisam de 6 letras para não casar com palavra comum).
const CURTOS = new Set(['kant', 'marx', 'hegel', 'jung', 'hume', 'freud', 'dante', 'locke', 'vico']);

const limpar = (s) => normalizar(s ?? '').replace(/[^a-z0-9]+/g, ' ').trim();
const palavras = (s) => limpar(s).split(' ').filter(Boolean);

// índice das chaves pela primeira palavra; as chaves mais longas vêm primeiro ("euclides da cunha" antes de "euclides")
const INDICE = new Map();
for (const [tabela, estudioso] of [[AUTORES, false], [ESTUDIOSOS, true]]) {
  for (const [epoca, nomes] of Object.entries(tabela)) {
    for (const bruto of nomes.split(';')) {
      const inteiro = bruto.startsWith('=');
      const p = palavras(inteiro ? bruto.slice(1) : bruto);
      INDICE.set(p[0], [...(INDICE.get(p[0]) ?? []), { p, epoca, estudioso, inteiro }].sort((a, b) => b.p.length - a.p.length));
    }
  }
}

/** Chaves encontradas numa sequência de palavras, com a posição de cada uma. */
function achar(ps) {
  const achados = [];
  for (let i = 0; i < ps.length; i++) {
    const c = (INDICE.get(ps[i]) ?? []).find((k) => k.p.every((x, j) => ps[i + j] === x));
    if (c) { achados.push({ ...c, i }); i += c.p.length - 1; }
  }
  return achados;
}

/** O criador é um autor conhecido? Nome de uma palavra vale como criador inteiro, como sobrenome ou, se for longo, em qualquer lugar. */
function doCriador(criador) {
  const ps = palavras(criador);
  return achar(ps).find((c) => (c.inteiro ? ps.length === 1 : c.p.length > 1 || ps.length === 1 || c.i === ps.length - 1 || c.p[0].length >= 7)) ?? null;
}

/** Época nomeada no título: um autor (que não seja o próprio criador) ou um período. Vários autores de épocas diferentes: vale o primeiro. */
function doTitulo(titulo, autor) {
  const nomes = achar(palavras(titulo)).filter((c) => !c.inteiro && (c.p.length > 1 || c.p[0].length >= 6 || CURTOS.has(c.p[0])) && c.epoca !== autor?.epoca);
  if (nomes.length) return new Set(nomes.map((c) => c.epoca)).size > 1 && autor ? null : nomes[0].epoca;
  const t = limpar(titulo);
  return PERIODOS.find(([, re]) => re.test(t))?.[0] ?? null;
}

const aulasDoModulo = {};
for (const a of todasAulas) (aulasDoModulo[a.modulo] ||= []).push(a.id);
const moduloPorId = Object.fromEntries(MODULOS.map((m) => [m.id, m]));
const CURADAS = Object.fromEntries(EPOCAS.flatMap((e) => e.obras.map((l) => [l, e.id])));
const PARTE_MINIMA = 0.6; // parte das aulas do módulo numa mesma época para ela valer para as obras dele

/** Contexto de um módulo: fase inicial, trilha paralela, a época predominante das aulas, ou null quando ele se espalha. */
function doModulo(id) {
  const aulas = aulasDoModulo[id] ?? [];
  if (aulas.length && !aulas.some(naFase3)) return FASE_INICIAL;
  if (PARALELAS.includes(moduloPorId[id]?.disciplina)) return PARALELA;
  // só contam as aulas com época declarada: a época herdada (o método que entra onde a matéria aparece) não diz nada das obras
  const contagem = Object.entries(Object.groupBy(aulas.filter((a) => a in EPOCA_DA_AULA).map(epocaDaAula).filter(Boolean), (e) => e)).map(([e, xs]) => [e, xs.length]).sort((a, b) => b[1] - a[1]);
  return contagem.length && contagem[0][1] / aulas.length >= PARTE_MINIMA ? contagem[0][0] : null;
}
const CONTEXTO_DO_MODULO = Object.fromEntries(MODULOS.map((m) => [m.id, doModulo(m.id)]));

/** Contexto de uma obra: { contexto, base }. `contexto` é a id de uma época, PARALELA, FASE_INICIAL ou null (sem base). */
export function contextoDaObra(o) {
  if (o.livro && CURADAS[o.livro]) return { contexto: CURADAS[o.livro], base: 'curadoria' };
  const modulo = CONTEXTO_DO_MODULO[o.modulos[0]] ?? null;
  if (modulo === FASE_INICIAL) return { contexto: FASE_INICIAL, base: 'fase' };
  const autor = doCriador(o.criador);
  // nas matérias da trilha paralela só a fonte histórica (Euclides, Newton, Darwin) tem época; o manual segue a trilha
  if (modulo === PARALELA) return autor && !autor.estudioso ? { contexto: autor.epoca, base: 'autor' } : { contexto: PARALELA, base: 'módulo' };
  if (o.categoria === 'cinema' && !autor) return { contexto: modulo === 'brasil' ? 'brasil' : 'seculo-xx', base: 'autor' };
  if (!autor || autor.estudioso || TARDIAS.has(autor.epoca)) {
    const assunto = doTitulo(o.titulo, autor);
    if (assunto) return { contexto: assunto, base: 'assunto' };
  }
  if (autor) return { contexto: autor.epoca, base: 'autor' };
  if (o.aula in EPOCA_DA_AULA && epocaDaAula(o.aula)) return { contexto: epocaDaAula(o.aula), base: 'aula' };
  return { contexto: modulo, base: 'módulo' };
}

const CONTEXTOS = Object.fromEntries(OBRAS.map((o) => [o.id, contextoDaObra(o)]));
const POR_CONTEXTO = Object.groupBy(OBRAS, (o) => CONTEXTOS[o.id].contexto ?? 'sem-contexto');
/** Contexto já calculado de uma obra do catálogo, pela id. */
export const contextoPorObra = (id) => CONTEXTOS[id] ?? null;
/** Obras de um contexto: id de época, PARALELA, FASE_INICIAL ou 'sem-contexto'. */
export const obrasDoContexto = (contexto) => POR_CONTEXTO[contexto] ?? [];
