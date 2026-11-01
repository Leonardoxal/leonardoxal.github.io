// Laboratório de Signos e Símbolos: cada símbolo com origem, contexto e significados DOCUMENTADOS.
// Cada significado declara o tipo de fonte, para que o estudante distinga:
//   escritura   — texto bíblico            doutrina — Catecismo ou documento da Igreja
//   historia    — fato histórico com fonte interpretacao — leitura de um autor ou escola
//   hipotese    — sentido proposto, sem documento que o fixe (não é doutrina nem consenso)
// Nenhum sentido "universal" é atribuído: o que não tem fonte é marcado como hipótese.

export const TIPOS_SENTIDO = {
  escritura: 'Sagrada Escritura', doutrina: 'Doutrina da Igreja', historia: 'Fato histórico',
  interpretacao: 'Interpretação de autor', hipotese: 'Hipótese (sem documento que a fixe)',
};

export const TRADICOES = { catolica: 'Tradição católica', brasileira: 'Símbolos nacionais do Brasil', arquitetura: 'Arquitetura sacra', politica: 'Símbolos políticos e históricos', cultural: 'Símbolos culturais e comparados' };

const S = (id, nome, tradicao, periodo, contexto, significados, extra = {}) => ({ id, nome, tradicao, periodo, contexto, significados, livros: [], aulas: [], comparacao: '', ...extra });
const G = (tipo, texto, fonte) => ({ tipo, texto, fonte });

export const SIMBOLOS = [
  S('agua', 'Água', 'catolica', 'Antigo e Novo Testamento; liturgia batismal', 'Presente na criação, no dilúvio, na travessia do Mar Vermelho e no Batismo de Jesus no Jordão.', [
    G('escritura', 'Água viva dada por Cristo.', 'Jo 4,14'),
    G('doutrina', 'Símbolo da ação do Espírito Santo no Batismo.', 'CIC 694'),
    G('doutrina', 'A liturgia da Vigília Pascal lê a criação, o dilúvio e o Êxodo como prefigurações do Batismo.', 'CIC 1217–1222'),
    G('interpretacao', 'Tertuliano dedica um tratado ao sentido da água batismal.', 'Tertuliano, O Batismo (c. 200)'),
  ], { livros: ['cic', 'biblia-joao', 'biblia-genesis-exodo'], aulas: ['m1-9'], comparacao: 'Ritos de purificação com água existem em outras religiões; a doutrina católica liga o Batismo à morte e ressurreição de Cristo (Rm 6,3–4), não apenas à limpeza.' }),
  S('fogo', 'Fogo', 'catolica', 'Êxodo; Pentecostes', 'A sarça ardente diante de Moisés e as línguas de fogo sobre os apóstolos.', [
    G('escritura', 'Deus fala a Moisés da sarça que arde sem se consumir.', 'Ex 3,2'),
    G('escritura', 'Línguas como de fogo pousam sobre os discípulos em Pentecostes.', 'At 2,3–4'),
    G('doutrina', 'Símbolo da energia transformante do Espírito Santo.', 'CIC 696'),
  ], { livros: ['cic', 'biblia-atos', 'biblia-genesis-exodo'], aulas: ['m1-9'] }),
  S('uncao', 'Óleo e unção', 'catolica', 'Reis e profetas de Israel; sacramentos', 'Reis eram ungidos em Israel; "Messias" (hebraico) e "Cristo" (grego) significam "Ungido".', [
    G('escritura', 'Samuel unge Davi, e o Espírito do Senhor vem sobre ele.', '1Sm 16,13'),
    G('doutrina', 'A unção é símbolo do Espírito Santo; Cristo é o Ungido por excelência.', 'CIC 695'),
    G('doutrina', 'Sentidos do óleo na Confirmação: alegria, purificação, consagração.', 'CIC 1293–1294'),
  ], { livros: ['cic'], aulas: ['m1-9', 'm1-7'] }),
  S('pomba', 'Pomba', 'catolica', 'Dilúvio; Batismo de Jesus', 'A pomba que volta à arca com o ramo de oliveira e a que desce sobre Jesus no Jordão.', [
    G('escritura', 'A pomba volta à arca com um ramo de oliveira.', 'Gn 8,8–12'),
    G('escritura', 'O Espírito desce sobre Jesus como uma pomba.', 'Mt 3,16'),
    G('doutrina', 'Símbolo do Espírito Santo.', 'CIC 701'),
  ], { livros: ['cic', 'biblia-marcos'], aulas: ['m1-7'] }),
  S('luz', 'Luz e nuvem', 'catolica', 'Criação; Êxodo; Evangelho de João', 'A luz criada no primeiro dia, a coluna de nuvem e fogo do Êxodo, Cristo "luz do mundo".', [
    G('escritura', '"Eu sou a luz do mundo."', 'Jo 8,12'),
    G('doutrina', 'A nuvem e a luz revelam e ao mesmo tempo velam a presença de Deus.', 'CIC 697'),
    G('historia', 'Na Vigília Pascal, o círio aceso é levado à igreja escura com a aclamação "Lumen Christi".', 'Missal Romano, Vigília Pascal'),
  ], { livros: ['cic', 'biblia-joao'], aulas: ['m1-7'] }),
  S('pao-vinho', 'Pão e vinho', 'catolica', 'Melquisedec; Última Ceia', 'Oferecidos por Melquisedec e tomados por Cristo na Última Ceia.', [
    G('escritura', 'Melquisedec oferece pão e vinho.', 'Gn 14,18'),
    G('escritura', '"Isto é o meu corpo… isto é o meu sangue."', 'Mt 26,26–28'),
    G('doutrina', 'Pão e vinho tornam-se, pela consagração, o Corpo e o Sangue de Cristo.', 'CIC 1333–1336'),
  ], { livros: ['cic', 'biblia-lucas'], aulas: ['m1-9'], comparacao: 'Aqui o sinal não é apenas símbolo: a doutrina católica afirma a presença real (CIC 1374). Distinguir esse ensinamento de leituras simbolistas é parte do exercício.' }),
  S('cordeiro', 'Cordeiro de Deus', 'catolica', 'Páscoa judaica; Evangelho de João; Apocalipse', 'O cordeiro pascal do Êxodo, o servo "levado como cordeiro" de Isaías e o Cordeiro do Apocalipse.', [
    G('escritura', 'O cordeiro pascal e seu sangue nas portas.', 'Ex 12'),
    G('escritura', '"Eis o Cordeiro de Deus, que tira o pecado do mundo."', 'Jo 1,29'),
    G('doutrina', 'Jesus é o Cordeiro que se oferece pelo pecado do mundo.', 'CIC 608'),
  ], { livros: ['cic', 'biblia-joao', 'biblia-genesis-exodo'], aulas: ['m1-7'] }),
  S('pastor', 'Bom Pastor', 'catolica', 'Salmos; Evangelho de João; arte paleocristã', 'Imagem de Deus que guia o povo e de Cristo que dá a vida pelas ovelhas.', [
    G('escritura', '"O Senhor é meu pastor."', 'Sl 23'),
    G('escritura', '"Eu sou o bom pastor."', 'Jo 10,11'),
    G('historia', 'O Bom Pastor é um dos temas mais antigos da arte cristã, pintado nas catacumbas romanas desde o século III.', 'Estudos de arte paleocristã (iconografia das catacumbas)'),
  ], { livros: ['biblia-salmos', 'biblia-joao'], aulas: ['m2-4'] }),
  S('videira', 'Videira', 'catolica', 'Profetas; Evangelho de João', 'Israel como vinha do Senhor; Cristo como videira e os discípulos como ramos.', [
    G('escritura', 'O canto da vinha.', 'Is 5,1–7'),
    G('escritura', '"Eu sou a videira, vós os ramos."', 'Jo 15,1–5'),
    G('doutrina', 'A Igreja é descrita como vinha cultivada por Deus.', 'CIC 755'),
  ], { livros: ['biblia-joao', 'cic'], aulas: ['m1-9'] }),
  S('alfa-omega', 'Alfa e Ômega', 'catolica', 'Apocalipse; liturgia pascal', 'Primeira e última letras do alfabeto grego.', [
    G('escritura', '"Eu sou o Alfa e o Ômega", princípio e fim.', 'Ap 1,8; 21,6; 22,13'),
    G('historia', 'As duas letras e o ano corrente são gravados no círio pascal na Vigília Pascal.', 'Missal Romano, Vigília Pascal'),
  ], { livros: ['cic'], aulas: ['m1-10'] }),
  S('cruz', 'Cruz', 'catolica', 'Paixão de Cristo; Antiguidade tardia', 'Instrumento romano de execução que se tornou o sinal principal do cristianismo.', [
    G('escritura', '"A linguagem da cruz é… poder de Deus."', '1Cor 1,18'),
    G('escritura', 'Paulo só se gloria na cruz de Cristo.', 'Gl 6,14'),
    G('doutrina', 'Pela paixão na cruz Cristo mereceu a justificação.', 'CIC 617'),
    G('historia', 'Antes da batalha da Ponte Mílvia (312), Constantino adotou um sinal cristão para suas tropas, segundo Lactâncio e Eusébio, que relatam o episódio de modos diferentes.', 'Lactâncio, Sobre a morte dos perseguidores 44; Eusébio, Vida de Constantino I,28–31'),
  ], { livros: ['cic'], aulas: ['m1-7', 'm2-5'], comparacao: 'Fato histórico (a execução romana), doutrina (o sentido salvífico) e relato antigo (Constantino, com versões divergentes) são três coisas diferentes: o exercício é não misturá-las.' }),
  S('ichthys', 'Peixe (ΙΧΘΥΣ)', 'catolica', 'Cristianismo antigo', 'A palavra grega para "peixe" forma o acróstico Iēsoûs Christòs Theoû Hyiòs Sōtḗr: Jesus Cristo, Filho de Deus, Salvador.', [
    G('historia', 'Agostinho explica o acróstico ΙΧΘΥΣ ao comentar versos atribuídos à Sibila.', 'Agostinho, A Cidade de Deus XVIII,23'),
    G('hipotese', 'O uso do peixe como "senha" secreta dos cristãos perseguidos é muito repetido, mas não tem documentação antiga clara.', '—'),
  ], { livros: ['agostinho-cidade'], aulas: ['m2-4'] }),
  S('rosacea', 'Rosácea', 'arquitetura', 'Arquitetura gótica (séculos XII–XIII)', 'Grande janela circular com vitrais, típica das fachadas e transeptos das catedrais góticas (Saint-Denis, Chartres, Notre-Dame de Paris).', [
    G('historia', 'O abade Suger, ao reconstruir Saint-Denis, descreveu a luz dos vitrais como caminho do material ao imaterial.', 'Suger, Sobre a administração (c. 1145)'),
    G('interpretacao', 'Panofsky relacionou a teologia da luz de Suger à arquitetura gótica.', 'Erwin Panofsky, edição comentada dos escritos de Suger (1946)'),
    G('hipotese', 'A leitura da rosácea como símbolo mariano (a "rosa") é difundida, mas não há documento medieval que a fixe para todas as rosáceas.', '—'),
  ], { comparacao: 'Bom caso para distinguir fato (a forma e a técnica), interpretação documentada (Suger, Panofsky) e associação devocional posterior.' }),
  S('bandeira-brasil', 'Bandeira do Brasil', 'brasileira', 'República (desde 1889)', 'Adotada quatro dias depois da proclamação da República.', [
    G('historia', 'Instituída pelo Decreto nº 4, de 19 de novembro de 1889.', 'Decreto nº 4, de 19/11/1889'),
    G('historia', 'O lema "Ordem e Progresso" vem da fórmula positivista de Auguste Comte; o círculo representa o céu do Rio de Janeiro na manhã de 15 de novembro de 1889.', 'Decreto nº 4 (1889); Lei nº 5.700 (1971)'),
    G('historia', 'Forma, cores e apresentação dos símbolos nacionais são reguladas pela Lei nº 5.700, de 1º de setembro de 1971.', 'Lei nº 5.700/1971'),
    G('interpretacao', 'José Murilo de Carvalho analisa a disputa entre positivistas e outros republicanos em torno dos símbolos da República.', 'A formação das almas (1990)'),
  ], { comparacao: 'Compare com a bandeira do Império (1822): o que foi mantido (o retângulo verde e o losango amarelo) e o que mudou, segundo os documentos.' }),
  // Símbolos de análise contextual (aula sb2b-4): a mesma forma com sentidos diferentes conforme o contexto e a fonte.
  S('labaro', 'Lábaro de Constantino (Chi-Rô)', 'catolica', 'Século IV (batalha da Ponte Mílvia, 312)', 'Monograma formado pelas duas primeiras letras gregas de "Cristo", associado ao imperador Constantino.', [
    G('historia', 'Constantino venceu Maxêncio na batalha da Ponte Mílvia, em 312.', 'Eusébio de Cesareia, Vida de Constantino I, 28–31'),
    G('historia', 'Eusébio descreve uma visão no céu e o estandarte com as letras Chi e Rô, chamado lábaro.', 'Eusébio de Cesareia, Vida de Constantino I, 28–31'),
    G('historia', 'Lactâncio, em outra fonte, descreve um sonho em que Constantino recebe a ordem de pôr o sinal de Cristo nos escudos.', 'Lactâncio, Sobre a morte dos perseguidores, 44'),
    G('interpretacao', 'As duas fontes divergem em data, natureza e detalhes do sinal; quem as lê deve dizer qual usa e por quê.', 'Comparação das duas fontes'),
  ], { aulas: ['sb2b-4'], comparacao: 'Compare os relatos de Eusébio e de Lactâncio: o que cada um afirma, quando escreveu e para quem.' }),
  S('fasces', 'Fasces (feixe de varas com machado)', 'politica', 'Roma antiga; Estados Unidos; Itália fascista (1919)', 'Emblema de autoridade que muda de sentido conforme quem o usa.', [
    G('historia', 'Os litores levavam os fasces diante dos magistrados romanos, como sinal de autoridade para punir.', 'Tito Lívio, Desde a fundação da cidade, I, 8'),
    G('historia', 'O movimento fundado por Mussolini em 1919 tomou o nome (fascio) e o emblema dos fasces.', 'Fasci italiani di combattimento (1919)'),
    G('historia', 'Nos Estados Unidos, os fasces aparecem em moedas e monumentos com sentido republicano de união e autoridade.', 'Moeda de dez centavos "Mercury" (1916–1945), verso; Memorial de Lincoln'),
  ], { aulas: ['sb2b-4'], comparacao: 'Compare os três usos (romano, republicano americano e fascista): o que permaneceu da forma e o que mudou do sentido.' }),
  S('suastica', 'Suástica (cruz gamada)', 'cultural', 'Antiguidade na Índia; Alemanha nazista (1920–1945)', 'A mesma forma, com sentidos opostos conforme a tradição e o contexto.', [
    G('historia', 'O nome vem do sânscrito svastika, derivado de svasti, "bem-estar"; o símbolo é usado em tradições religiosas da Índia.', 'Monier-Williams, Sanskrit-English Dictionary, verbete svastika'),
    G('historia', 'Hitler descreve a criação da bandeira com a suástica em 1920, e a bandeira nacional alemã passou a ser a do partido em 1935.', 'Hitler, Mein Kampf, vol. 2, cap. 7; Lei da Bandeira do Reich (15/09/1935)'),
    G('historia', 'No Brasil, fabricar ou divulgar a cruz suástica para propaganda do nazismo é crime.', 'Lei nº 7.716/1989, art. 20, § 1º'),
  ], { aulas: ['sb2b-4'], comparacao: 'Compare o uso religioso na Índia e o uso nazista: o que a forma tem em comum e por que o sentido dominante depende do contexto.' }),
];

export const simboloPorId = Object.fromEntries(SIMBOLOS.map((s) => [s.id, s]));
