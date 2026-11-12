// Aulas introdutórias de latim e grego antigo da aba Idiomas, voltadas à leitura.
// Cobrem o nível "Leitura inicial" de cada língua; daí em diante o estudante segue com os cursos indicados nas
// referências (Ørberg ou Wheelock; Athenaze ou Reading Greek). Os textos de exercício vêm das orações tradicionais
// da Igreja, da Vulgata e do Novo Testamento grego, com a passagem indicada; as traduções são literais e da Academia.
// Pronúncia do latim: a eclesiástica (romana), a da liturgia. Pronúncia do grego: a erasmiana, a dos cursos acadêmicos.

const T = (cab, ...linhas) => ({ cab, linhas });

export const AULAS_IDIOMAS = {
  latim: [
    {
      titulo: 'Pronúncia e primeiras palavras',
      objetivo: 'Ler em voz alta qualquer texto latino com a pronúncia eclesiástica.',
      texto: [
        'O alfabeto latino é o nosso, sem J nem W (o J das edições antigas é um I). Pronuncia-se quase tudo como se escreve.',
        'Na pronúncia eclesiástica: C e G antes de E, I, AE e OE soam como em "tchê" e "dji" (caelum = "tchélum", regina = "redjína"); antes de A, O, U são duros (cor = "cor"). AE e OE soam "é". GN soa "nh" (agnus = "ánhus"). TI antes de vogal soa "tsi" (gratia = "grátsia"). H é mudo ou muito leve. V soa como o nosso V.',
        'Acento: em palavras de duas sílabas, sempre na primeira (Deus, terra). Nas maiores, na penúltima se ela for longa; senão, na antepenúltima (Dóminus, María). As boas edições litúrgicas marcam o acento.',
      ],
      vocab: [['Deus', 'Deus'], ['Pater', 'Pai'], ['Filius', 'Filho'], ['Spiritus Sanctus', 'Espírito Santo'], ['nomen', 'nome'], ['in', 'em'], ['et', 'e'], ['Amen', 'Amém (assim seja)']],
      exercicios: [
        ['Leia em voz alta e traduza: In nomine Patris et Filii et Spiritus Sancti. Amen.', 'Em nome do Pai e do Filho e do Espírito Santo. Amém. (Leitura: "In nómine Pátris et Fílii et Spíritus Sáncti".)'],
        ['Como se lê "caelum", "agnus" e "gratia"?', '"tchélum", "ánhus", "grátsia".'],
      ],
    },
    {
      titulo: 'Os casos e a 1ª declinação',
      objetivo: 'Entender o que são os casos e declinar os substantivos em -a.',
      texto: [
        'Em latim, a função da palavra na frase aparece na terminação, não na ordem. Cada forma é um "caso": nominativo (sujeito), genitivo (de quem, "de"), dativo (para quem), acusativo (objeto direto e depois de algumas preposições), ablativo (com, por, em, depois de algumas preposições) e vocativo (chamamento).',
        'A 1ª declinação reúne palavras quase sempre femininas terminadas em -a. O dicionário as dá pelo nominativo e pelo genitivo: rosa, -ae.',
      ],
      tabela: T(['Caso', 'Singular', 'Plural'], ['Nominativo', 'rosa', 'rosae'], ['Genitivo', 'rosae', 'rosarum'], ['Dativo', 'rosae', 'rosis'], ['Acusativo', 'rosam', 'rosas'], ['Ablativo', 'rosā', 'rosis'], ['Vocativo', 'rosa', 'rosae']),
      vocab: [['terra, -ae (f.)', 'terra'], ['vita, -ae (f.)', 'vida'], ['gloria, -ae (f.)', 'glória'], ['ecclesia, -ae (f.)', 'igreja'], ['anima, -ae (f.)', 'alma'], ['via, -ae (f.)', 'caminho'], ['gratia, -ae (f.)', 'graça'], ['plena (adj.)', 'cheia'], ['ave', 'salve (saudação)']],
      exercicios: [
        ['Em "Ave Maria, gratia plena", em que caso está "Maria"? E "gratia"?', '"Maria" está no vocativo (chamamento). "Gratia" é ablativo (gratiā, "de graça"): "cheia de graça".'],
        ['Decline "via" no singular.', 'via, viae, viae, viam, viā, via.'],
        ['Traduza: gloria ecclesiae.', 'A glória da Igreja ("ecclesiae" no genitivo).'],
      ],
    },
    {
      titulo: 'O verbo ser (esse)',
      objetivo: 'Conjugar o presente de "esse" e ler frases nominais.',
      texto: [
        'O verbo "esse" (ser, estar, existir) é irregular e o mais frequente da língua. Como em português, o sujeito pode ficar oculto, porque a terminação já o indica.',
        'Com "esse", o predicativo fica no nominativo, como o sujeito: Deus caritas est, "Deus é amor".',
      ],
      tabela: T(['Pessoa', 'Presente', 'Tradução'], ['1ª sing.', 'sum', 'eu sou'], ['2ª sing.', 'es', 'tu és'], ['3ª sing.', 'est', 'ele é'], ['1ª pl.', 'sumus', 'nós somos'], ['2ª pl.', 'estis', 'vós sois'], ['3ª pl.', 'sunt', 'eles são']),
      vocab: [['ego', 'eu'], ['tu', 'tu'], ['caritas', 'amor, caridade'], ['veritas', 'verdade'], ['via', 'caminho'], ['qui', 'que, o qual'], ['in caelis', 'nos céus']],
      exercicios: [
        ['Traduza: Deus caritas est. (1Jo 4,8)', 'Deus é amor.'],
        ['Traduza: Ego sum via, et veritas, et vita. (Jo 14,6)', 'Eu sou o caminho, e a verdade, e a vida.'],
        ['Traduza: Pater noster, qui es in caelis.', 'Pai nosso, que estás nos céus.'],
      ],
    },
    {
      titulo: 'A 2ª declinação',
      objetivo: 'Declinar os masculinos em -us e os neutros em -um.',
      texto: [
        'A 2ª declinação tem masculinos em -us (dominus, -i) e neutros em -um (verbum, -i). Nos neutros, o nominativo e o acusativo são sempre iguais, e no plural terminam em -a.',
        'O vocativo de -us termina em -e: Domine, "Senhor!".',
      ],
      tabela: T(['Caso', 'dominus (sing.)', 'dominus (pl.)', 'verbum (sing.)', 'verbum (pl.)'], ['Nominativo', 'dominus', 'domini', 'verbum', 'verba'], ['Genitivo', 'domini', 'dominorum', 'verbi', 'verborum'], ['Dativo', 'domino', 'dominis', 'verbo', 'verbis'], ['Acusativo', 'dominum', 'dominos', 'verbum', 'verba'], ['Ablativo', 'domino', 'dominis', 'verbo', 'verbis'], ['Vocativo', 'domine', 'domini', 'verbum', 'verba']),
      vocab: [['Dominus, -i (m.)', 'Senhor'], ['Filius, -i (m.)', 'Filho'], ['verbum, -i (n.)', 'palavra, Verbo'], ['caelum, -i (n.)', 'céu'], ['principium, -i (n.)', 'princípio'], ['erat', 'era (passado de "est")'], ['apud', 'junto de (com acusativo)'], ['vobiscum', 'convosco (cum vobis)']],
      exercicios: [
        ['Traduza: Dominus vobiscum.', 'O Senhor esteja convosco (literalmente: "o Senhor convosco").'],
        ['Traduza: In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. (Jo 1,1)', 'No princípio era o Verbo, e o Verbo estava junto de Deus, e o Verbo era Deus.'],
        ['Em "et Deus erat Verbum", "Deus" e "Verbum" estão ambos no nominativo. Qual é o sujeito?', '"Verbum", que vem sendo o assunto da frase desde o começo do versículo; "Deus" é o predicativo, posto antes para dar ênfase. O texto grego deixa isso claro, porque só "ὁ λόγος" tem artigo. Por isso se traduz "o Verbo era Deus".'],
      ],
    },
    {
      titulo: 'Presente da 1ª e da 2ª conjugação',
      objetivo: 'Conjugar no presente os verbos em -are e em -ere (longo).',
      texto: [
        'Os verbos se agrupam em quatro conjugações. O dicionário dá quatro formas (amo, amare, amavi, amatum); por enquanto, basta o infinitivo para saber a conjugação: -are (1ª) e -ēre (2ª).',
        'As terminações pessoais do presente são -o/-m, -s, -t, -mus, -tis, -nt.',
      ],
      tabela: T(['Pessoa', 'amare (amar)', 'videre (ver)'], ['1ª sing.', 'amo', 'video'], ['2ª sing.', 'amas', 'vides'], ['3ª sing.', 'amat', 'videt'], ['1ª pl.', 'amamus', 'videmus'], ['2ª pl.', 'amatis', 'videtis'], ['3ª pl.', 'amant', 'vident']),
      vocab: [['laudare', 'louvar'], ['adorare', 'adorar'], ['orare', 'rezar, pedir'], ['habere', 'ter'], ['te', 'a ti (acusativo de "tu")']],
      exercicios: [
        ['Traduza: Te Deum laudamus.', 'A ti, ó Deus, louvamos.'],
        ['Traduza: Adoramus te, Christe.', 'Nós te adoramos, ó Cristo.'],
        ['Conjugue "orare" no presente.', 'oro, oras, orat, oramus, oratis, orant.'],
      ],
    },
    {
      titulo: 'Adjetivos e concordância',
      objetivo: 'Fazer concordar o adjetivo com o substantivo em gênero, número e caso.',
      texto: [
        'Os adjetivos da 1ª classe seguem a 1ª declinação no feminino e a 2ª no masculino e no neutro: bonus, bona, bonum.',
        'O adjetivo concorda com o substantivo em gênero, número e caso, mas nem sempre tem a mesma terminação: Pater noster (Pater é da 3ª declinação; noster segue o modelo do adjetivo).',
      ],
      tabela: T(['Caso', 'Masculino', 'Feminino', 'Neutro'], ['Nominativo', 'sanctus', 'sancta', 'sanctum'], ['Genitivo', 'sancti', 'sanctae', 'sancti'], ['Dativo', 'sancto', 'sanctae', 'sancto'], ['Acusativo', 'sanctum', 'sanctam', 'sanctum'], ['Ablativo', 'sancto', 'sanctā', 'sancto']),
      vocab: [['bonus, -a, -um', 'bom'], ['sanctus, -a, -um', 'santo'], ['magnus, -a, -um', 'grande'], ['aeternus, -a, -um', 'eterno'], ['noster, nostra, nostrum', 'nosso'], ['mater', 'mãe']],
      exercicios: [
        ['Traduza: Sancta Maria, Mater Dei.', 'Santa Maria, Mãe de Deus.'],
        ['Por que "Sancta" e não "Sanctus" em "Sancta Maria"?', 'Porque concorda com "Maria", feminino.'],
        ['Traduza: vita aeterna.', 'A vida eterna.'],
      ],
    },
    {
      titulo: 'A 3ª declinação',
      objetivo: 'Reconhecer a 3ª declinação pelo genitivo em -is.',
      texto: [
        'A 3ª declinação é a mais variada: o nominativo muda muito (rex, pater, nomen, caritas), mas o genitivo termina sempre em -is, e é dele que se tira o radical: rex, regis (radical reg-); nomen, nominis (radical nomin-).',
        'Por isso, decore sempre o nominativo junto com o genitivo.',
      ],
      tabela: T(['Caso', 'rex (sing.)', 'rex (pl.)', 'nomen (sing.)', 'nomen (pl.)'], ['Nominativo', 'rex', 'reges', 'nomen', 'nomina'], ['Genitivo', 'regis', 'regum', 'nominis', 'nominum'], ['Dativo', 'regi', 'regibus', 'nomini', 'nominibus'], ['Acusativo', 'regem', 'reges', 'nomen', 'nomina'], ['Ablativo', 'rege', 'regibus', 'nomine', 'nominibus']),
      vocab: [['rex, regis (m.)', 'rei'], ['pater, patris (m.)', 'pai'], ['mater, matris (f.)', 'mãe'], ['nomen, nominis (n.)', 'nome'], ['caritas, caritatis (f.)', 'caridade'], ['veritas, veritatis (f.)', 'verdade'], ['lux, lucis (f.)', 'luz'], ['homo, hominis (m.)', 'homem, ser humano']],
      exercicios: [
        ['Traduza: in nomine Patris.', 'Em nome do Pai ("nomine" no ablativo depois de "in"; "Patris" no genitivo).'],
        ['Traduza: sanctificetur nomen tuum.', 'Santificado seja o teu nome.'],
        ['Qual é o radical de "lux, lucis"?', 'luc-.'],
      ],
    },
    {
      titulo: 'Presente da 3ª e da 4ª conjugação; o imperativo',
      objetivo: 'Conjugar "legere" e "audire" e formar o imperativo.',
      texto: [
        'A 3ª conjugação tem o infinitivo em -ĕre breve (legere); a 4ª, em -ire (audire).',
        'O imperativo singular é o radical do presente (ora!, vide!, lege!, audi!); o plural acrescenta -te (orate!, videte!, legite!, audite!).',
      ],
      tabela: T(['Pessoa', 'legere (ler)', 'audire (ouvir)'], ['1ª sing.', 'lego', 'audio'], ['2ª sing.', 'legis', 'audis'], ['3ª sing.', 'legit', 'audit'], ['1ª pl.', 'legimus', 'audimus'], ['2ª pl.', 'legitis', 'auditis'], ['3ª pl.', 'legunt', 'audiunt']),
      vocab: [['credere', 'crer'], ['dicere', 'dizer'], ['venire', 'vir'], ['pro', 'por, em favor de (com ablativo)'], ['nobis', 'nós (dativo e ablativo)'], ['Credo', 'creio']],
      exercicios: [
        ['Traduza: Sancta Maria, ora pro nobis.', 'Santa Maria, rogai por nós ("ora", imperativo de "orare").'],
        ['Traduza: Credo in unum Deum.', 'Creio em um só Deus.'],
        ['Forme o imperativo plural de "audire".', 'audite! (ouvi!)'],
      ],
    },
    {
      titulo: 'Pronomes pessoais e possessivos',
      objetivo: 'Reconhecer os pronomes das orações e da Escritura.',
      texto: [
        'Os pronomes pessoais se declinam: ego (eu), mihi (a mim), me (me); tu, tibi, te; nos, nobis; vos, vobis.',
        'Os possessivos são adjetivos e concordam com a coisa possuída: meus, tuus, suus, noster, vester.',
      ],
      tabela: T(['Caso', 'ego', 'tu', 'nos', 'vos'], ['Nominativo', 'ego', 'tu', 'nos', 'vos'], ['Dativo', 'mihi', 'tibi', 'nobis', 'vobis'], ['Acusativo', 'me', 'te', 'nos', 'vos'], ['Ablativo', 'me', 'te', 'nobis', 'vobis']),
      vocab: [['meus, -a, -um', 'meu'], ['tuus, -a, -um', 'teu'], ['regnum, -i (n.)', 'reino'], ['voluntas, voluntatis (f.)', 'vontade'], ['adveniat', 'venha'], ['fiat', 'seja feita'], ['sicut', 'assim como']],
      exercicios: [
        ['Traduza: Adveniat regnum tuum. Fiat voluntas tua.', 'Venha o teu reino. Seja feita a tua vontade.'],
        ['Por que "tuum" e depois "tua"?', '"Tuum" concorda com "regnum" (neutro); "tua", com "voluntas" (feminino).'],
        ['Traduza: Dominus tecum.', 'O Senhor é contigo ("tecum" = cum te).'],
      ],
    },
    {
      titulo: 'A 4ª e a 5ª declinação',
      objetivo: 'Completar as cinco declinações.',
      texto: [
        'A 4ª declinação tem o genitivo em -us (spiritus, -us; manus, -us). A 5ª, em -ei (dies, diei; fides, fidei; res, rei).',
        'São declinações com poucas palavras, mas palavras importantes: spiritus, fides, spes, res, dies.',
      ],
      tabela: T(['Caso', 'spiritus (sing.)', 'spiritus (pl.)', 'dies (sing.)', 'dies (pl.)'], ['Nominativo', 'spiritus', 'spiritus', 'dies', 'dies'], ['Genitivo', 'spiritus', 'spirituum', 'diei', 'dierum'], ['Dativo', 'spiritui', 'spiritibus', 'diei', 'diebus'], ['Acusativo', 'spiritum', 'spiritus', 'diem', 'dies'], ['Ablativo', 'spiritu', 'spiritibus', 'die', 'diebus']),
      vocab: [['spiritus, -us (m.)', 'espírito'], ['manus, -us (f.)', 'mão'], ['fides, fidei (f.)', 'fé'], ['spes, spei (f.)', 'esperança'], ['res, rei (f.)', 'coisa'], ['dies, diei (m.)', 'dia']],
      exercicios: [
        ['Traduza: Gloria Patri et Filio et Spiritui Sancto.', 'Glória ao Pai e ao Filho e ao Espírito Santo (os três no dativo).'],
        ['Traduza: et cum spiritu tuo.', 'E com o teu espírito ("spiritu" no ablativo depois de "cum").'],
        ['Em que declinação está "fides"?', 'Na 5ª (fides, fidei).'],
      ],
    },
    {
      titulo: 'Imperfeito e futuro',
      objetivo: 'Reconhecer o passado contínuo e o futuro.',
      texto: [
        'O imperfeito indica ação contínua ou habitual no passado: na 1ª e na 2ª conjugação, -ba- entre o radical e a terminação (amabam, videbam). De "esse": eram, eras, erat, eramus, eratis, erant.',
        'O futuro da 1ª e da 2ª conjugação usa -b- (amabo, amabis, amabit, amabimus, amabitis, amabunt); o da 3ª e da 4ª, -a- e -e- (legam, leges, leget...). De "esse": ero, eris, erit, erimus, eritis, erunt.',
      ],
      tabela: T(['Pessoa', 'esse: imperfeito', 'esse: futuro', 'amare: futuro'], ['1ª sing.', 'eram', 'ero', 'amabo'], ['2ª sing.', 'eras', 'eris', 'amabis'], ['3ª sing.', 'erat', 'erit', 'amabit'], ['1ª pl.', 'eramus', 'erimus', 'amabimus'], ['2ª pl.', 'eratis', 'eritis', 'amabitis'], ['3ª pl.', 'erant', 'erunt', 'amabunt']),
      vocab: [['liberare', 'libertar'], ['cognoscere', 'conhecer'], ['vos', 'vós (acusativo)'], ['nunc', 'agora'], ['semper', 'sempre'], ['in saecula saeculorum', 'pelos séculos dos séculos']],
      exercicios: [
        ['Traduza: Et cognoscetis veritatem, et veritas liberabit vos. (Jo 8,32)', 'E conhecereis a verdade, e a verdade vos libertará.'],
        ['"Liberabit" é presente ou futuro?', 'Futuro (3ª pessoa do singular de "liberare").'],
        ['Traduza: Sicut erat in principio, et nunc, et semper, et in saecula saeculorum.', 'Assim como era no princípio, agora e sempre, e pelos séculos dos séculos.'],
      ],
    },
    {
      titulo: 'O perfeito e a leitura do Pai-Nosso',
      objetivo: 'Reconhecer o perfeito e ler sozinho uma oração inteira.',
      texto: [
        'O perfeito indica ação concluída. É a terceira forma do dicionário (amo, amare, amavi): ao radical do perfeito juntam-se -i, -isti, -it, -imus, -istis, -erunt (amavi, amavisti, amavit...).',
        'O perfeito passivo usa o particípio com "esse": factum est, "foi feito". Assim se lê Jo 1,14: Et Verbum caro factum est, "E o Verbo se fez carne".',
        'Leia agora o Pai-Nosso da liturgia, palavra por palavra, identificando o caso de cada substantivo e a pessoa de cada verbo: Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.',
      ],
      vocab: [['panis, panis (m.)', 'pão'], ['quotidianus, -a, -um', 'de cada dia'], ['da', 'dá (imperativo de "dare")'], ['hodie', 'hoje'], ['dimittere', 'perdoar'], ['debitum, -i (n.)', 'dívida, ofensa'], ['debitor, debitoris (m.)', 'devedor'], ['inducere', 'conduzir, deixar cair'], ['tentatio, tentationis (f.)', 'tentação'], ['libera', 'livra (imperativo)'], ['malum, -i (n.)', 'mal']],
      exercicios: [
        ['Traduza: Panem nostrum quotidianum da nobis hodie.', 'O pão nosso de cada dia dá-nos hoje.'],
        ['Em "dimittimus debitoribus nostris", em que caso está "debitoribus"?', 'Dativo plural: "perdoamos aos nossos devedores".'],
        ['Traduza: Et Verbum caro factum est. (Jo 1,14)', 'E o Verbo se fez carne.'],
      ],
    },
  ],
  grego: [
    {
      titulo: 'O alfabeto',
      objetivo: 'Ler as letras gregas e transliterá-las.',
      texto: [
        'São 24 letras: Α α (a), Β β (b), Γ γ (g), Δ δ (d), Ε ε (e breve), Ζ ζ (dz), Η η (e longo), Θ θ (th), Ι ι (i), Κ κ (k), Λ λ (l), Μ μ (m), Ν ν (n), Ξ ξ (ks), Ο ο (o breve), Π π (p), Ρ ρ (r), Σ σ ς (s; ς só no fim da palavra), Τ τ (t), Υ υ (y, como o "u" francês), Φ φ (ph), Χ χ (kh), Ψ ψ (ps), Ω ω (o longo).',
        'Γ antes de γ, κ, χ soa "n": ἄγγελος = "ánguelos". Ditongos frequentes: αι, ει, οι, ου (soa "u"), αυ, ευ.',
        'Toda palavra que começa por vogal leva um espírito: o brando (ἀ) não soa; o áspero (ἁ) soa como "h". Os acentos (agudo, grave, circunflexo) marcam a sílaba tônica.',
      ],
      vocab: [['λόγος', 'logos: palavra, razão'], ['θεός', 'theós: deus'], ['ἄγγελος', 'ángelos: mensageiro, anjo'], ['Χριστός', 'Khristós: Cristo, ungido'], ['ψυχή', 'psykhé: alma'], ['ἀρχή', 'arkhé: princípio']],
      exercicios: [
        ['Translitere: ἀλήθεια, φιλοσοφία, ἐκκλησία.', 'alétheia (verdade), philosophía (filosofia), ekklesía (assembleia, Igreja).'],
        ['Por que ἁμαρτία começa com "h" na transliteração?', 'Porque leva espírito áspero: hamartía (pecado).'],
      ],
    },
    {
      titulo: 'O artigo definido',
      objetivo: 'Reconhecer o artigo em todos os gêneros, números e casos.',
      texto: [
        'O grego tem cinco casos: nominativo, genitivo, dativo, acusativo e vocativo (as funções do ablativo latino se dividem entre o genitivo e o dativo).',
        'O artigo é a chave da leitura: indica o gênero, o número e o caso do substantivo que o acompanha. Decore-o primeiro.',
      ],
      tabela: T(['Caso', 'Masc. sing.', 'Fem. sing.', 'Neutro sing.', 'Masc. pl.', 'Fem. pl.', 'Neutro pl.'], ['Nominativo', 'ὁ', 'ἡ', 'τό', 'οἱ', 'αἱ', 'τά'], ['Genitivo', 'τοῦ', 'τῆς', 'τοῦ', 'τῶν', 'τῶν', 'τῶν'], ['Dativo', 'τῷ', 'τῇ', 'τῷ', 'τοῖς', 'ταῖς', 'τοῖς'], ['Acusativo', 'τόν', 'τήν', 'τό', 'τούς', 'τάς', 'τά']),
      vocab: [['ὁ κόσμος', 'o mundo'], ['ἡ ζωή', 'a vida'], ['τὸ φῶς', 'a luz'], ['ὁ ἄνθρωπος', 'o homem'], ['καί', 'e']],
      exercicios: [
        ['Que caso e gênero indica "τῆς"?', 'Genitivo feminino singular.'],
        ['Traduza: τὸ φῶς τοῦ κόσμου.', 'A luz do mundo.'],
      ],
    },
    {
      titulo: 'A 2ª declinação',
      objetivo: 'Declinar os masculinos em -ος e os neutros em -ον.',
      texto: [
        'Como no latim, os masculinos da 2ª declinação terminam em -ος (λόγος) e os neutros em -ον (ἔργον). O iota subscrito (ῳ) marca o dativo singular.',
      ],
      tabela: T(['Caso', 'λόγος (sing.)', 'λόγος (pl.)', 'ἔργον (sing.)', 'ἔργον (pl.)'], ['Nominativo', 'λόγος', 'λόγοι', 'ἔργον', 'ἔργα'], ['Genitivo', 'λόγου', 'λόγων', 'ἔργου', 'ἔργων'], ['Dativo', 'λόγῳ', 'λόγοις', 'ἔργῳ', 'ἔργοις'], ['Acusativo', 'λόγον', 'λόγους', 'ἔργον', 'ἔργα'], ['Vocativo', 'λόγε', 'λόγοι', 'ἔργον', 'ἔργα']),
      vocab: [['ὁ θεός', 'Deus'], ['ὁ κύριος', 'o Senhor'], ['ὁ υἱός', 'o filho'], ['τὸ ἔργον', 'a obra'], ['ἐν', 'em (com dativo)'], ['πρός', 'junto de, para (com acusativo)'], ['ἦν', 'era, estava']],
      exercicios: [
        ['Traduza: Ἐν ἀρχῇ ἦν ὁ λόγος. (Jo 1,1)', 'No princípio era o Verbo.'],
        ['Traduza: καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.', 'E o Verbo estava junto de Deus ("τὸν θεόν" no acusativo, depois de "πρός").'],
        ['Traduza: Κύριε ἐλέησον.', 'Senhor, tem piedade ("Κύριε" é o vocativo de "κύριος").'],
      ],
    },
    {
      titulo: 'A 1ª declinação',
      objetivo: 'Declinar os femininos em -η e em -α.',
      texto: [
        'A 1ª declinação reúne sobretudo femininos em -η (ἀρχή) e em -α (ἡμέρα, ἀλήθεια). No genitivo plural, todas terminam em -ῶν.',
      ],
      tabela: T(['Caso', 'ἀρχή (sing.)', 'ἀρχή (pl.)', 'ἡμέρα (sing.)', 'ἡμέρα (pl.)'], ['Nominativo', 'ἀρχή', 'ἀρχαί', 'ἡμέρα', 'ἡμέραι'], ['Genitivo', 'ἀρχῆς', 'ἀρχῶν', 'ἡμέρας', 'ἡμερῶν'], ['Dativo', 'ἀρχῇ', 'ἀρχαῖς', 'ἡμέρᾳ', 'ἡμέραις'], ['Acusativo', 'ἀρχήν', 'ἀρχάς', 'ἡμέραν', 'ἡμέρας']),
      vocab: [['ἡ ἀρχή', 'o princípio'], ['ἡ ἡμέρα', 'o dia'], ['ἡ ἀλήθεια', 'a verdade'], ['ἡ ζωή', 'a vida'], ['ἡ ὁδός', 'o caminho (feminino da 2ª declinação)'], ['ἡ ἀγάπη', 'o amor, a caridade']],
      exercicios: [
        ['Em que caso está "ἀρχῇ" em "Ἐν ἀρχῇ"?', 'Dativo singular, depois de "ἐν".'],
        ['Traduza: ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή.', 'O caminho, e a verdade, e a vida.'],
      ],
    },
    {
      titulo: 'O verbo ser (εἰμί)',
      objetivo: 'Conjugar o presente de εἰμί.',
      texto: [
        'Como "esse" em latim, εἰμί liga sujeito e predicativo, ambos no nominativo. O pronome sujeito (ἐγώ, σύ) só aparece quando há ênfase: ἐγώ εἰμι, "eu (e não outro) sou".',
      ],
      tabela: T(['Pessoa', 'Presente', 'Tradução'], ['1ª sing.', 'εἰμί', 'eu sou'], ['2ª sing.', 'εἶ', 'tu és'], ['3ª sing.', 'ἐστί(ν)', 'ele é'], ['1ª pl.', 'ἐσμέν', 'nós somos'], ['2ª pl.', 'ἐστέ', 'vós sois'], ['3ª pl.', 'εἰσί(ν)', 'eles são']),
      vocab: [['ἐγώ', 'eu'], ['σύ', 'tu'], ['ἀγάπη', 'amor'], ['τὸ φῶς', 'a luz'], ['ὁ κόσμος', 'o mundo']],
      exercicios: [
        ['Traduza: ὁ θεὸς ἀγάπη ἐστίν. (1Jo 4,8)', 'Deus é amor.'],
        ['Traduza: ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή. (Jo 14,6)', 'Eu sou o caminho, e a verdade, e a vida.'],
        ['Traduza: ἐγώ εἰμι τὸ φῶς τοῦ κόσμου. (Jo 8,12)', 'Eu sou a luz do mundo.'],
      ],
    },
    {
      titulo: 'O presente dos verbos em -ω',
      objetivo: 'Conjugar o presente do verbo regular.',
      texto: [
        'O verbo regular segue o modelo de λύω (soltar). As terminações indicam a pessoa, como em latim.',
      ],
      tabela: T(['Pessoa', 'λύω (soltar)', 'πιστεύω (crer)'], ['1ª sing.', 'λύω', 'πιστεύω'], ['2ª sing.', 'λύεις', 'πιστεύεις'], ['3ª sing.', 'λύει', 'πιστεύει'], ['1ª pl.', 'λύομεν', 'πιστεύομεν'], ['2ª pl.', 'λύετε', 'πιστεύετε'], ['3ª pl.', 'λύουσι(ν)', 'πιστεύουσι(ν)']),
      vocab: [['πιστεύω', 'creio'], ['γινώσκω', 'conheço'], ['λέγω', 'digo'], ['ἔχω', 'tenho'], ['εἰς', 'em, para (com acusativo)'], ['οὐ (οὐκ, οὐχ)', 'não']],
      exercicios: [
        ['Traduza: πιστεύω εἰς τὸν θεόν.', 'Creio em Deus.'],
        ['Conjugue "λέγω" no presente.', 'λέγω, λέγεις, λέγει, λέγομεν, λέγετε, λέγουσι(ν).'],
      ],
    },
    {
      titulo: 'Adjetivos',
      objetivo: 'Fazer concordar o adjetivo e entender a posição do artigo.',
      texto: [
        'Os adjetivos da 1ª classe seguem a 2ª declinação no masculino e no neutro e a 1ª no feminino: ἀγαθός, ἀγαθή, ἀγαθόν.',
        'Posição atributiva: o adjetivo fica depois do artigo (ὁ ἀγαθὸς ἄνθρωπος, "o homem bom"). Posição predicativa: fora do artigo (ὁ ἄνθρωπος ἀγαθός, "o homem é bom").',
      ],
      tabela: T(['Caso', 'Masculino', 'Feminino', 'Neutro'], ['Nominativo', 'ἅγιος', 'ἁγία', 'ἅγιον'], ['Genitivo', 'ἁγίου', 'ἁγίας', 'ἁγίου'], ['Dativo', 'ἁγίῳ', 'ἁγίᾳ', 'ἁγίῳ'], ['Acusativo', 'ἅγιον', 'ἁγίαν', 'ἅγιον']),
      vocab: [['ἀγαθός, -ή, -όν', 'bom'], ['καλός, -ή, -όν', 'belo, bom'], ['ἅγιος, -α, -ον', 'santo'], ['πιστός, -ή, -όν', 'fiel'], ['αἰώνιος', 'eterno']],
      exercicios: [
        ['Traduza: τὸ πνεῦμα τὸ ἅγιον.', 'O Espírito Santo (o adjetivo repete o artigo: posição atributiva).'],
        ['Qual a diferença entre "ὁ καλὸς λόγος" e "ὁ λόγος καλός"?', 'O primeiro é "a palavra bela"; o segundo, "a palavra é bela".'],
      ],
    },
    {
      titulo: 'A 3ª declinação',
      objetivo: 'Reconhecer a 3ª declinação pelo genitivo em -ος.',
      texto: [
        'Como na 3ª declinação latina, o nominativo varia e o radical sai do genitivo, que termina em -ος: σάρξ, σαρκός (radical σαρκ-); πνεῦμα, πνεύματος (radical πνευματ-).',
      ],
      tabela: T(['Caso', 'σάρξ (sing.)', 'σάρξ (pl.)', 'πνεῦμα (sing.)', 'πνεῦμα (pl.)'], ['Nominativo', 'σάρξ', 'σάρκες', 'πνεῦμα', 'πνεύματα'], ['Genitivo', 'σαρκός', 'σαρκῶν', 'πνεύματος', 'πνευμάτων'], ['Dativo', 'σαρκί', 'σαρξί(ν)', 'πνεύματι', 'πνεύμασι(ν)'], ['Acusativo', 'σάρκα', 'σάρκας', 'πνεῦμα', 'πνεύματα']),
      vocab: [['ἡ σάρξ, σαρκός', 'a carne'], ['τὸ πνεῦμα, πνεύματος', 'o espírito'], ['ἡ χάρις, χάριτος', 'a graça'], ['ὁ πατήρ, πατρός', 'o pai'], ['ἐγένετο', 'veio a ser, se fez']],
      exercicios: [
        ['Traduza: Καὶ ὁ λόγος σὰρξ ἐγένετο. (Jo 1,14)', 'E o Verbo se fez carne.'],
        ['Qual é o radical de "χάρις, χάριτος"?', 'χαριτ-.'],
      ],
    },
    {
      titulo: 'Pronomes pessoais',
      objetivo: 'Reconhecer os pronomes e ler o começo do Pai-Nosso.',
      texto: [
        'Os pronomes pessoais têm formas tônicas e átonas (μου, μοι, με; σου, σοι, σε). Αὐτός, -ή, -ό serve de pronome de 3ª pessoa ("ele, ela") nos casos oblíquos.',
      ],
      tabela: T(['Caso', 'ἐγώ', 'σύ', 'ἡμεῖς', 'ὑμεῖς'], ['Nominativo', 'ἐγώ', 'σύ', 'ἡμεῖς', 'ὑμεῖς'], ['Genitivo', 'ἐμοῦ / μου', 'σοῦ / σου', 'ἡμῶν', 'ὑμῶν'], ['Dativo', 'ἐμοί / μοι', 'σοί / σοι', 'ἡμῖν', 'ὑμῖν'], ['Acusativo', 'ἐμέ / με', 'σέ / σε', 'ἡμᾶς', 'ὑμᾶς']),
      vocab: [['ὁ οὐρανός', 'o céu'], ['τὸ ὄνομα, ὀνόματος', 'o nome'], ['ἡ βασιλεία', 'o reino'], ['ἐλευθερώσει', 'libertará']],
      exercicios: [
        ['Traduza: Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς. (Mt 6,9)', 'Pai nosso, que estás nos céus (literalmente: "Pai de nós, o que nos céus").'],
        ['Traduza: ἡ ἀλήθεια ἐλευθερώσει ὑμᾶς. (Jo 8,32)', 'A verdade vos libertará.'],
      ],
    },
    {
      titulo: 'Leitura: o prólogo de São João (Jo 1,1-5)',
      objetivo: 'Ler um texto contínuo do Novo Testamento.',
      texto: [
        'Leia em voz alta e traduza, identificando o caso de cada substantivo e a forma de cada verbo:',
        'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν. πάντα δι᾽ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν. ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν.',
      ],
      vocab: [['οὗτος', 'este'], ['πάντα', 'todas as coisas'], ['διά (com genitivo)', 'por meio de'], ['χωρίς (com genitivo)', 'sem'], ['οὐδὲ ἕν', 'nem uma só coisa'], ['ὅ', 'o que'], ['γέγονεν', 'foi feito'], ['ἡ σκοτία', 'a treva'], ['φαίνει', 'brilha'], ['κατέλαβεν', 'compreendeu, venceu']],
      exercicios: [
        ['Traduza o texto inteiro.', 'No princípio era o Verbo, e o Verbo estava junto de Deus, e o Verbo era Deus. Ele estava no princípio junto de Deus. Todas as coisas foram feitas por meio dele, e sem ele nada foi feito do que foi feito. Nele estava a vida, e a vida era a luz dos homens; e a luz brilha nas trevas, e as trevas não a compreenderam (ou: não a venceram).'],
        ['Por que "κατέλαβεν" admite duas traduções?', 'O verbo significa tanto "apreender, compreender" quanto "dominar, vencer"; as duas leituras são antigas.'],
      ],
    },
  ],
};
