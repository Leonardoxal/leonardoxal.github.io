// Módulo 2 — aulas 6 a 11.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm2-6', titulo: 'Calcedônia e a cristologia',
  aprendera: ['As controvérsias cristológicas dos séculos IV e V', 'O que Éfeso (431) e Calcedônia (451) definiram', 'Por que algumas Igrejas não aceitaram Calcedônia', 'O princípio "o que não é assumido não é salvo"'],
  prereq: ['Aula 5: Niceia e Constantinopla'],
  explicacao: `
<h3>Depois de Niceia, uma nova pergunta</h3>
<p>Resolvido que o Filho é Deus, surgia outra questão: como Deus e homem estão unidos em Jesus? As respostas extremas negavam ou a plenitude da humanidade, ou a unidade da pessoa.</p>
<h3>Apolinário</h3>
<p>Apolinário de Laodiceia (século IV) ensinou que em Cristo o Verbo ocupava o lugar da alma racional humana. Gregório de Nazianzo respondeu, na Carta 101, que o que não foi assumido não foi curado: se Cristo não tivesse mente humana, a mente humana não seria salva ${tag('fato')}. Constantinopla (381) condenou o apolinarismo.</p>
<h3>Nestório e Éfeso (431)</h3>
<p>Nestório, patriarca de Constantinopla, recusou chamar Maria de <em>Theotokos</em> ("Mãe de Deus"), preferindo "Mãe de Cristo". Cirilo de Alexandria viu nisso a divisão de Cristo em duas pessoas. O Concílio de Éfeso (431) confirmou o título Theotokos: Maria é mãe da Pessoa do Verbo segundo a carne ${tag('doutrina')}. Historiadores discutem se Nestório defendia de fato "duas pessoas" ou se foi mal compreendido ${tag('debate')}.</p>
<h3>Eutiques e Calcedônia (451)</h3>
<p>O monge Eutiques afirmou que após a união havia uma só natureza em Cristo, a humana absorvida pela divina (monofisismo radical). O Papa Leão Magno escreveu o Tomo a Flaviano (449), e o Concílio de Calcedônia (451) definiu: um só e mesmo Cristo, reconhecido em duas naturezas "sem confusão, sem mudança, sem divisão, sem separação", unidas numa só pessoa e hipóstase ${tag('doutrina')}.</p>
<h3>Uma ruptura duradoura</h3>
<p>As Igrejas copta, siríaca ocidental, armênia e etíope não aceitaram a fórmula de Calcedônia, preferindo a linguagem de Cirilo, "uma só natureza encarnada do Verbo" (posição hoje chamada <em>miafisita</em>) ${tag('fato')}. No século XX, declarações cristológicas comuns entre Roma e essas Igrejas (por exemplo, Paulo VI e o papa copta Shenouda III, 1973) reconheceram que, em grande parte, a divergência era de vocabulário ${tag('fato')}.</p>`,
  vocabulario: [['Theotokos', '"Mãe de Deus": título confirmado em Éfeso (431).'], ['União hipostática', 'União das duas naturezas na única pessoa do Verbo.'], ['Monofisismo', 'Tese de uma só natureza em Cristo após a união.'], ['Miafisismo', 'Fórmula de Cirilo, "uma natureza encarnada do Verbo", usada pelas Igrejas não calcedonianas.'], ['Comunicação dos idiomas', 'Atribuir à única pessoa o que é próprio de cada natureza ("Deus morreu na cruz").']],
  exemplos: '<p>"O Filho de Deus sofreu" é uma frase correta pela comunicação dos idiomas: quem sofre é a pessoa do Filho, na natureza humana. "A natureza divina sofreu" seria incorreto.</p>',
  contexto: `<p>As disputas tinham também dimensão política e eclesiástica: rivalidade entre as sés de Alexandria, Antioquia e Constantinopla, e intervenção dos imperadores ${tag('fato')}.</p>`,
  argumento: { titulo: '"O que não é assumido não é curado" (Gregório de Nazianzo, Carta 101)', tag: 'argumento',
    premissas: ['Cristo salva a natureza humana ao assumi-la.', 'O que não é assumido não é curado.', 'A mente humana precisa de cura.'],
    conclusao: 'Logo, Cristo assumiu uma mente humana completa.',
    nota: 'O mesmo princípio fundamenta, no século VII, a afirmação de que Cristo tem também vontade humana (Constantinopla III, 681).' },
  objecoes: [{ objecao: 'Duas naturezas numa pessoa é contraditório.', tag: 'debate', resposta: 'Seria contraditório se "natureza" e "pessoa" significassem o mesmo. A cristologia distingue o "que" (natureza) do "quem" (pessoa). Filósofos discutem se essa distinção é coerente; Tomás a desenvolve na Suma III, q. 2.' }],
  aplicacao: '<p>Classifique no Caderno cinco frases sobre Cristo como corretas ou incorretas pela comunicação dos idiomas (ex.: "Maria é mãe de Deus", "a divindade nasceu de Maria", "Deus morreu").</p>',
  fonte: { obra: 'Definição de Calcedônia (DH 300–303); Catecismo §464–469', link: LINKS.cicCristo, orientacao: '<p>Leia os §464–469 do Catecismo e localize, no texto da definição, as quatro negações. Para cada uma, indique o erro que exclui.</p>' },
  perguntas: [
    { p: 'O que significa Theotokos?', r: 'Mãe de Deus.' },
    { p: 'O que Calcedônia definiu?', r: 'Uma pessoa em duas naturezas, sem confusão, mudança, divisão ou separação.' },
    { p: 'Quais Igrejas não aceitaram Calcedônia?', r: 'Copta, siríaca ocidental, armênia, etíope (miafisitas).' },
  ],
  exercicios: [
    mc('Apolinário negava em Cristo:', ['A divindade', 'A alma racional humana', 'O corpo', 'A pessoa'], 1, 'O Verbo ocuparia o lugar da mente humana.'),
    mc('Éfeso (431) confirmou o título:', ['Theotokos', 'Christotokos', 'Kyrios', 'Logos'], 0, 'Contra Nestório.'),
    mc('O Tomo a Flaviano é de:', ['Cirilo', 'Leão Magno', 'Nestório', 'Eutiques'], 1, '449, base de Calcedônia.'),
    mc('"Deus morreu na cruz" é correto porque:', ['A natureza divina morreu', 'A pessoa do Filho morreu na natureza humana', 'É só metáfora', 'Não é correto'], 1, 'Comunicação dos idiomas.'),
    disc('Explique a fórmula de Calcedônia e mostre por que ela evita tanto o nestorianismo quanto o monofisismo. Avalie a afirmação de que a divergência com os miafisitas é "só de vocabulário".', ['Explica a fórmula', 'Relaciona negações e erros', 'Usa as declarações do século XX', 'Avaliação justificada'])],
  resumo: ['Apolinário: sem mente humana; Gregório: o não assumido não é curado.', 'Éfeso (431): Theotokos.', 'Calcedônia (451): duas naturezas, uma pessoa.', 'Igrejas miafisitas e as declarações comuns.'],
  referencias: [{ texto: 'Catecismo, §464–483.', link: LINKS.cicCristo }, { texto: 'Leão Magno, Tomo a Flaviano (449).' }, { texto: 'Gregório de Nazianzo, Carta 101.' }],
  revisao: [['Calcedônia (451)', 'Uma pessoa, duas naturezas: sem confusão, mudança, divisão, separação.'], ['Theotokos', 'Mãe de Deus (Éfeso, 431).'], ['Princípio de Gregório', 'O que não é assumido não é curado.']],
  avancado: {
    texto: `<h3>Duas vontades: Constantinopla III (681)</h3>
<p>No século VII, o monotelismo afirmou uma só vontade em Cristo, como compromisso com os miafisitas. Máximo, o Confessor, defendeu que vontade pertence à natureza, e portanto há em Cristo vontade divina e vontade humana, esta sempre submetida àquela; a oração no Getsêmani ("não a minha vontade, mas a tua") seria o exemplo ${tag('argumento')}. O III Concílio de Constantinopla (681) definiu as duas vontades ${tag('doutrina')}.</p>
<h3>A consciência de Cristo</h3>
<p>Uma questão moderna: como uma mente humana finita se relaciona com a ciência divina do Verbo? Teólogos discutem a "ciência de visão" atribuída por Tomás à alma de Cristo e propostas mais recentes que acentuam o crescimento humano de Jesus (Lc 2,52) ${tag('debate')}.</p>
<h3>Leitura de fontes</h3>
<p>O "Duodécimo anatematismo" de Cirilo e o Tomo de Leão mostram duas sensibilidades: Alexandria insiste na unidade, Antioquia e Roma na distinção das naturezas. Ler ambos ajuda a entender por que Calcedônia foi recebida de modos diferentes ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Máximo, o Confessor, Disputa com Pirro.' }, { texto: 'Tomás de Aquino, Suma III, q. 2 (a união) e q. 18 (as vontades de Cristo).' }, { texto: 'Aloys Grillmeier, Christ in Christian Tradition, vol. 1.' }],
    exercicios: [
      mc('O monotelismo afirmava em Cristo:', ['Duas pessoas', 'Uma só vontade', 'Nenhuma vontade humana nem divina', 'Três naturezas'], 1, 'Condenado em 681.'),
      mc('Para Máximo, a vontade pertence:', ['À pessoa', 'À natureza', 'Ao corpo', 'À Igreja'], 1, 'Por isso há duas vontades.'),
      mc('O III Concílio de Constantinopla ocorreu em:', ['451', '553', '681', '787'], 2, '681.'),
      disc('A tese das duas vontades em Cristo é consequência necessária de Calcedônia? Reconstrua o argumento de Máximo e avalie-o.', ['Reconstrói o argumento', 'Liga a Calcedônia', 'Considera objeção monotelita', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm2-7', titulo: 'Padres apostólicos e apologistas',
  aprendera: ['Quem são os Padres apostólicos e o que escreveram', 'A missão dos apologistas do século II', 'A ideia de "sementes do Verbo" em Justino', 'A "regra de fé" e a sucessão em Ireneu'],
  explicacao: `
<h3>A geração depois dos Apóstolos</h3>
<p>"Padres apostólicos" é o nome dado a escritos cristãos do fim do século I e início do II, próximos da geração apostólica ${tag('fato')}: a Carta de Clemente de Roma aos Coríntios (c. 96), as sete cartas de Inácio de Antioquia (c. 107–110), a carta de Policarpo de Esmirna, a Didaqué e outros. Eles mostram uma Igreja com liturgia (batismo, Eucaristia aos domingos), ministros e preocupação com a unidade.</p>
<h3>Os apologistas</h3>
<p>No século II, autores cristãos escreveram defesas (<em>apologias</em>) dirigidas a imperadores e intelectuais pagãos ${tag('fato')}. Seu objetivo era refutar calúnias, mostrar que os cristãos eram bons cidadãos e apresentar o cristianismo como razoável. O principal é <strong>Justino Mártir</strong> (c. 100–165), filósofo convertido, autor de duas Apologias e do Diálogo com Trifão.</p>
<h3>As "sementes do Verbo"</h3>
<p>Justino ensinou que o Logos, o Verbo divino, semeou fragmentos de verdade em todos os seres humanos; por isso filósofos como Sócrates participaram parcialmente da verdade, que se manifesta plenamente em Cristo (II Apologia 10 e 13) ${tag('interpretacao')}. Essa ideia, retomada pelo Vaticano II (Ad Gentes 11), fundamenta uma atitude de diálogo com a filosofia ${tag('doutrina')}.</p>
<h3>Ireneu de Lyon</h3>
<p>Ireneu (c. 130–202), em Contra as Heresias (c. 180), combate os gnósticos com dois critérios: a <strong>regra de fé</strong> (o conteúdo essencial recebido, semelhante a um Credo) e a <strong>sucessão dos bispos</strong> desde os Apóstolos, especialmente em Roma ${tag('fato')}. Contra a gnose secreta, a verdade é pública e transmitida.</p>
<h3>Tertuliano</h3>
<p>Tertuliano de Cartago (c. 160–220), primeiro grande autor cristão em latim, criou vocabulário teológico (como <em>trinitas</em> e <em>persona</em>) e desconfiava da filosofia: perguntou o que Atenas teria a ver com Jerusalém (Prescrição contra os hereges, 7) ${tag('fato')}.</p>`,
  vocabulario: [['Padres apostólicos', 'Escritores cristãos próximos da geração dos Apóstolos.'], ['Apologia', 'Defesa racional da fé.'], ['Logos spermatikos', '"Verbo seminal": fragmentos de verdade em todos (Justino).'], ['Regra de fé', 'Conteúdo essencial da fé recebida (Ireneu).'], ['Didaqué', '"Ensinamento": manual cristão antigo sobre moral e liturgia.']],
  exemplos: '<p>A Didaqué (cap. 14) manda reunir-se no "dia do Senhor" para partir o pão — testemunho antigo da Eucaristia dominical.</p>',
  contexto: `<p>O século II é o do confronto com o gnosticismo, com Marcião e com a crítica pagã (Celso escreve o Discurso verdadeiro c. 178, conhecido pela resposta de Orígenes) ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento da sucessão de Ireneu (Contra as Heresias III, 3, reconstruído)', tag: 'argumento',
    premissas: ['Se os Apóstolos conhecessem mistérios secretos, os teriam transmitido aos que deixaram à frente das Igrejas.', 'As listas de sucessão dos bispos são públicas e conhecidas.', 'Nenhum desses sucessores ensina a doutrina secreta dos gnósticos.'],
    conclusao: 'Logo, a doutrina gnóstica não vem dos Apóstolos.',
    nota: 'Argumento histórico-teológico forte contra a gnose. Historiadores discutem a exatidão das listas de sucessão mais antigas.' },
  objecoes: [{ objecao: 'Os apologistas apenas adaptaram o cristianismo à filosofia grega para torná-lo aceitável.', tag: 'debate', resposta: 'Justino de fato usa conceitos platônicos e estoicos, mas também critica doutrinas filosóficas (por exemplo, sobre a alma). A pergunta sobre o quanto a filosofia transformou a fé é tema da próxima aula.' }],
  aplicacao: '<p>Leia o capítulo 14 da Didaqué e o capítulo 67 da I Apologia de Justino. Compare as duas descrições da reunião dominical.</p>',
  fonte: { obra: 'Justino, I Apologia 65–67; Ireneu, Contra as Heresias III, 3', link: null, orientacao: '<p>Os textos estão em coletâneas da Patrística (há edição brasileira na coleção Patrística). Identifique os elementos da celebração descritos por Justino e o argumento de Ireneu.</p>' },
  perguntas: [
    { p: 'Quem são os Padres apostólicos?', r: 'Autores do fim do século I e início do II, como Clemente, Inácio e Policarpo.' },
    { p: 'O que são as "sementes do Verbo"?', r: 'Fragmentos de verdade semeados pelo Logos em todos os seres humanos (Justino).' },
    { p: 'Quais os critérios de Ireneu contra os gnósticos?', r: 'Regra de fé e sucessão apostólica.' },
  ],
  exercicios: [
    mc('A carta de Clemente aos Coríntios é datada de cerca de:', ['50', '96', '180', '313'], 1, 'Fim do século I.'),
    mc('O autor do Diálogo com Trifão é:', ['Ireneu', 'Justino', 'Inácio', 'Tertuliano'], 1, 'Justino Mártir.'),
    mc('"O que Atenas tem a ver com Jerusalém?" é pergunta de:', ['Justino', 'Clemente', 'Tertuliano', 'Orígenes'], 2, 'Prescrição contra os hereges, 7.'),
    mc('Ireneu combate principalmente:', ['O arianismo', 'O gnosticismo', 'O pelagianismo', 'O islamismo'], 1, 'Contra as Heresias, c. 180.'),
    disc('Compare a atitude de Justino e a de Tertuliano diante da filosofia. Qual lhe parece mais adequada para um cristão que estuda filosofia? Justifique.', ['Expõe as duas atitudes com precisão', 'Usa textos', 'Considera riscos de cada uma', 'Conclusão justificada'])],
  resumo: ['Padres apostólicos: Clemente, Inácio, Policarpo, Didaqué.', 'Apologistas: defesa racional da fé; Justino.', 'Sementes do Verbo.', 'Ireneu: regra de fé e sucessão.', 'Tertuliano: vocabulário latino e desconfiança da filosofia.'],
  referencias: [{ texto: 'Justino, I e II Apologias; Diálogo com Trifão.' }, { texto: 'Ireneu, Contra as Heresias, livros I e III.' }, { texto: 'Concílio Vaticano II, Ad Gentes, §11.' }],
  revisao: [['Justino', 'Apologista; "sementes do Verbo" (Logos spermatikos).'], ['Ireneu', 'Contra as Heresias (c. 180): regra de fé e sucessão.'], ['Inácio de Antioquia', 'Sete cartas a caminho do martírio (c. 107–110).']],
  avancado: {
    texto: `<h3>O episcopado monárquico</h3>
<p>Inácio de Antioquia descreve cada Igreja com um bispo, presbíteros e diáconos. Historiadores debatem quando esse modelo se generalizou: em Roma, a Carta de Clemente fala de "presbíteros" e "bispos" sem distinção clara, e alguns estudiosos situam o bispo único em Roma só em meados do século II ${tag('debate')}. A doutrina católica afirma a sucessão apostólica; a forma histórica de sua organização é objeto de pesquisa ${tag('interpretacao')}.</p>
<h3>Celso e a crítica pagã</h3>
<p>O filósofo Celso (Discurso verdadeiro, c. 178) acusou os cristãos de irracionalidade e de recrutar ignorantes. Conhecemos seu texto pela longa refutação de Orígenes (Contra Celso, c. 248), um dos primeiros grandes debates entre cristianismo e filosofia pagã ${tag('fato')}.</p>
<h3>Recapitulação</h3>
<p>Ireneu desenvolve a ideia de <em>anakephalaiōsis</em> (recapitulação): Cristo retoma e restaura toda a história humana desde Adão (Ef 1,10) ${tag('argumento')}. É uma teologia da história que antecipa temas de Agostinho.</p>`,
    leituras: [{ texto: 'Orígenes, Contra Celso, livro I.' }, { texto: 'Inácio de Antioquia, Carta aos Esmirniotas 8.' }],
    exercicios: [
      mc('Conhecemos o Discurso verdadeiro de Celso principalmente por:', ['Cópias completas', 'A refutação de Orígenes', 'Inscrições', 'Tertuliano'], 1, 'Contra Celso, c. 248.'),
      mc('"Recapitulação" é conceito central de:', ['Ireneu', 'Tertuliano', 'Inácio', 'Clemente'], 0, 'Baseado em Ef 1,10.'),
      mc('O debate sobre o episcopado monárquico em Roma diz respeito a:', ['A existência de Roma', 'Quando se generalizou o bispo único', 'O número de sacramentos', 'A data da Páscoa'], 1, 'Questão historiográfica.'),
      disc('Escolha três objeções de Celso (conforme citadas por Orígenes) e avalie as respostas de Orígenes.', ['Identifica objeções', 'Expõe respostas', 'Avalia a força de cada uma', 'Usa o texto'])],
  },
}),

aula({
  id: 'm2-8', titulo: 'Os Padres e a filosofia grega',
  aprendera: ['Como Clemente, Orígenes e os Capadócios usaram a filosofia', 'A imagem de "despojar os egípcios"', 'A tese da "helenização do cristianismo" e suas críticas', 'O discurso de Regensburg (2006)'],
  explicacao: `
<h3>Usar sem se perder</h3>
<p>Os Padres viveram num mundo formado pela filosofia grega. A questão não era se usá-la, mas como: como ferramenta, sem trocar a fé por um sistema filosófico.</p>
<h3>Alexandria</h3>
<p><strong>Clemente de Alexandria</strong> (c. 150–215), nos Stromata, sustenta que a filosofia foi para os gregos uma preparação para Cristo, como a Lei para os judeus ${tag('interpretacao')}. <strong>Orígenes</strong> (c. 185–254) construiu o primeiro grande sistema teológico (Sobre os Princípios), com forte influência platônica; algumas de suas teses (como a preexistência das almas) foram condenadas séculos depois, no contexto do II Concílio de Constantinopla (553) ${tag('fato')}.</p>
<h3>Os Capadócios</h3>
<p>Basílio escreveu uma Exortação aos jovens sobre como tirar proveito da literatura grega: como as abelhas, colher o útil e deixar o resto ${tag('fato')}. Gregório de Nissa usou categorias platônicas para pensar a infinitude de Deus e o progresso sem fim da alma (<em>epéktasis</em>).</p>
<h3>Despojar os egípcios</h3>
<p>Agostinho (A Doutrina Cristã II, 40) compara o uso cristão da filosofia aos hebreus que, ao sair do Egito, levaram o ouro e a prata dos egípcios: o que os filósofos disseram de verdadeiro pertence à verdade e pode ser usado ${tag('argumento')}.</p>
<h3>A tese da helenização</h3>
<p>Adolf von Harnack (História do Dogma, 1886–1890) sustentou que o dogma cristão é obra do espírito grego sobre o solo do Evangelho, e que a teologia deveria voltar à mensagem simples de Jesus ${tag('interpretacao')}. Críticos responderam que os Padres também transformaram a filosofia (por exemplo, com a criação do nada e a ideia de pessoa) e que o próprio Novo Testamento já está em diálogo com o mundo grego ${tag('debate')}.</p>
<h3>Regensburg</h3>
<p>No discurso da Universidade de Regensburg (2006), Bento XVI defendeu que o encontro entre fé bíblica e filosofia grega não foi acidente, e criticou três "ondas de des-helenização": a Reforma, a teologia liberal (Harnack) e o multiculturalismo contemporâneo ${tag('fato')}.</p>`,
  vocabulario: [['Stromata', '"Tapeçarias": obra de Clemente de Alexandria.'], ['Despojar os egípcios', 'Imagem de Agostinho para o uso cristão da filosofia.'], ['Helenização', 'Tese de que o dogma resultou da filosofia grega (Harnack).'], ['Epéktasis', 'Progresso infinito da alma em Deus (Gregório de Nissa).'], ['Creatio ex nihilo', 'Criação do nada, ideia ausente da filosofia grega clássica.']],
  exemplos: '<p>A criação a partir do nada é exemplo de transformação da filosofia: para Platão (Timeu), o demiurgo ordena algo preexistente; para os Padres, Deus cria toda a realidade, inclusive a matéria.</p>',
  contexto: `<p>A Escola catequética de Alexandria foi um centro de formação cristã de alto nível; Orígenes depois ensinou em Cesareia ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Agostinho sobre o uso da filosofia (A Doutrina Cristã II, 40)', tag: 'argumento',
    premissas: ['Toda verdade, onde quer que se encontre, pertence a Deus.', 'Os filósofos disseram algumas verdades.', 'O que pertence a Deus pode ser usado por quem o serve.'],
    conclusao: 'Logo, o cristão pode usar as verdades ditas pelos filósofos.',
    nota: 'O argumento legitima o uso, mas exige discernimento: só o que é verdadeiro pode ser tomado.' },
  objecoes: [{ objecao: 'Harnack: o dogma substituiu a fé simples por metafísica grega.', tag: 'debate', resposta: 'Defensores da continuidade respondem que os conceitos filosóficos foram usados para proteger o conteúdo bíblico (como em Niceia) e que foram transformados no processo. A discussão é viva na teologia e na história das ideias.' }],
  aplicacao: '<p>Escolha uma ideia filosófica grega (Logos, alma, virtude) e escreva como um Padre a usou e o que mudou nela.</p>',
  fonte: { obra: 'Agostinho, A Doutrina Cristã II, 40; Bento XVI, Discurso em Regensburg (2006)', link: null, orientacao: '<p>Leia o parágrafo de Agostinho e o discurso de Regensburg (disponível no site do Vaticano). Identifique as três "ondas de des-helenização" e avalie o argumento.</p>' },
  perguntas: [
    { p: 'O que significa "despojar os egípcios"?', r: 'Usar as verdades dos filósofos como os hebreus levaram o ouro do Egito (Agostinho).' },
    { p: 'O que defendeu Harnack?', r: 'Que o dogma é obra do espírito grego sobre o Evangelho.' },
    { p: 'Que ideia cristã transforma a filosofia grega?', r: 'Por exemplo, a criação do nada.' },
  ],
  exercicios: [
    mc('A filosofia como "preparação" dos gregos para Cristo é ideia de:', ['Tertuliano', 'Clemente de Alexandria', 'Harnack', 'Lutero'], 1, 'Stromata.'),
    mc('Algumas teses de Orígenes foram condenadas no contexto de:', ['Niceia (325)', 'Constantinopla II (553)', 'Trento', 'Vaticano I'], 1, 'Século VI.'),
    mc('As três "ondas de des-helenização" foram descritas por:', ['Harnack', 'Bento XVI em Regensburg', 'Agostinho', 'Basílio'], 1, '2006.'),
    mc('A imagem das abelhas que colhem o útil é de:', ['Basílio', 'Orígenes', 'Justino', 'Jerônimo'], 0, 'Exortação aos jovens.'),
    disc('Avalie a tese de Harnack à luz de um exemplo concreto (Niceia ou a criação do nada). Foi helenização do cristianismo ou cristianização da filosofia?', ['Expõe Harnack com fidelidade', 'Usa exemplo concreto', 'Apresenta a crítica', 'Conclusão justificada'])],
  resumo: ['Clemente: filosofia como preparação.', 'Orígenes: sistema com influência platônica.', 'Basílio: colher o útil.', 'Agostinho: despojar os egípcios.', 'Harnack e Regensburg.'],
  referencias: [{ texto: 'Agostinho, A Doutrina Cristã II, 40.' }, { texto: 'Basílio de Cesareia, Exortação aos jovens.' }, { texto: 'Bento XVI, Discurso na Universidade de Regensburg (12/09/2006).' }],
  revisao: [['Despojar os egípcios', 'Agostinho, A Doutrina Cristã II, 40.'], ['Harnack', 'História do Dogma: tese da helenização.'], ['Regensburg (2006)', 'Bento XVI: três ondas de des-helenização.']],
  avancado: {
    texto: `<h3>Pelikan e a "metamorfose" da teologia natural</h3>
<p>Jaroslav Pelikan (Christianity and Classical Culture, 1993) estudou os Capadócios e mostrou como eles reelaboraram a teologia natural grega a serviço da fé, num processo que ele descreve como transformação mútua ${tag('interpretacao')}.</p>
<h3>Platonismo cristão</h3>
<p>Historiadores falam de "platonismo cristão" para Orígenes, Gregório de Nissa e Agostinho, mas lembram diferenças essenciais: a criação livre, a encarnação e a ressurreição da carne são estranhas ao platonismo. Porfírio, discípulo de Plotino, escreveu Contra os cristãos, e Agostinho discutiu com ele em A Cidade de Deus X ${tag('fato')}.</p>
<h3>A noção de pessoa</h3>
<p>Muitos estudiosos sustentam que a noção de pessoa como realidade única e relacional nasce dos debates trinitários e cristológicos, e não da filosofia grega clássica ${tag('debate')}. É exemplo de contribuição cristã à filosofia.</p>`,
    leituras: [{ texto: 'Jaroslav Pelikan, Christianity and Classical Culture (1993).' }, { texto: 'Agostinho, A Cidade de Deus, livros VIII–X.' }],
    exercicios: [
      mc('Contra os cristãos foi escrito por:', ['Plotino', 'Porfírio', 'Celso', 'Juliano'], 1, 'Discípulo de Plotino.'),
      mc('Qual doutrina é estranha ao platonismo?', ['A imortalidade da alma', 'A ressurreição da carne', 'O mundo inteligível', 'O Bem'], 1, 'Os platônicos a rejeitavam.'),
      mc('Pelikan descreve a relação entre Capadócios e cultura grega como:', ['Rejeição total', 'Transformação mútua', 'Cópia', 'Indiferença'], 1, 'Christianity and Classical Culture.'),
      disc('A noção de pessoa é uma contribuição cristã à filosofia? Argumente com exemplos da aula 6 e desta aula.', ['Define pessoa', 'Usa exemplos históricos', 'Considera objeção', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm2-9', titulo: 'Santo Agostinho: vida e conversão',
  aprendera: ['As etapas da vida de Agostinho', 'O papel do maniqueísmo, do ceticismo e dos platônicos', 'A cena do jardim de Milão (386)', 'Como ler as Confissões'],
  explicacao: `
<h3>Uma vida que é itinerário intelectual</h3>
<p>Agostinho (354–430) nasceu em Tagaste, norte da África, filho de Patrício (pagão) e Mônica (cristã) ${tag('fato')}. Sua vida é um percurso de busca da verdade, narrado nas Confissões (c. 397–400), primeira grande autobiografia interior do Ocidente.</p>
<h3>Etapas</h3>
<ul>
<li><strong>Cícero</strong>: aos 19 anos, a leitura do Hortênsio (diálogo hoje perdido) despertou nele o amor pela sabedoria (Confissões III, 4) ${tag('fato')}.</li>
<li><strong>Maniqueísmo</strong>: durante cerca de nove anos foi "ouvinte" dessa religião dualista, que explicava o mal como princípio substancial oposto ao bem ${tag('fato')}.</li>
<li><strong>Ceticismo</strong>: decepcionado (o bispo maniqueu Fausto não respondeu às suas perguntas), aproximou-se dos acadêmicos céticos.</li>
<li><strong>Milão e Ambrósio</strong>: como professor de retórica em Milão (384), ouviu os sermões do bispo Ambrósio, que lhe mostrou uma leitura espiritual do Antigo Testamento.</li>
<li><strong>Os "livros dos platônicos"</strong>: provavelmente textos de Plotino e Porfírio em tradução latina; ensinaram-lhe a pensar Deus como realidade espiritual e o mal como privação (Confissões VII) ${tag('fato')}.</li>
<li><strong>O jardim</strong> (386): ouvindo uma voz de criança que dizia "toma e lê", abriu as cartas de Paulo em Romanos 13,13–14 e decidiu converter-se (Confissões VIII, 12) ${tag('fato')}.</li>
<li>Batizado por Ambrósio na Páscoa de 387; Mônica morre em Óstia pouco depois; volta à África, é ordenado e torna-se bispo de Hipona (395/396); morre em 430, durante o cerco dos vândalos ${tag('fato')}.</li>
</ul>
<h3>Como ler as Confissões</h3>
<p>O livro é dirigido a Deus em forma de oração; "confessar" significa tanto reconhecer os pecados quanto louvar. Os livros I–IX narram a vida; o X trata da memória; XI–XIII comentam o início do Gênesis (tempo, criação). Ler só a parte narrativa é perder metade da obra ${tag('interpretacao')}.</p>`,
  vocabulario: [['Maniqueísmo', 'Religião dualista fundada por Mani (século III): dois princípios, bem e mal.'], ['Acadêmicos', 'Filósofos céticos da Nova Academia.'], ['Confissões', 'Obra de Agostinho: confissão dos pecados e louvor a Deus.'], ['Tolle lege', '"Toma e lê": voz no jardim de Milão.'], ['Neoplatonismo', 'Filosofia de Plotino e seguidores.']],
  exemplos: '<p>O roubo das peras (Confissões II, 4) mostra o estilo de Agostinho: um pequeno episódio da adolescência é analisado para revelar a estrutura do pecado — fazer o mal pelo prazer da transgressão.</p>',
  contexto: `<p>O norte da África romana era rico e culto; havia forte presença maniqueia e o cisma donatista. Agostinho viveu a queda de Roma (410) e a chegada dos vândalos ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que o mal não é substância (contra os maniqueus, Confissões VII, reconstruído)', tag: 'argumento',
    premissas: ['Tudo o que existe, enquanto existe, é bom (pois vem de Deus, que é bom).', 'Se o mal fosse uma substância, seria algo existente.', 'Logo, seria bom, o que é contraditório.'],
    conclusao: 'Portanto, o mal não é substância, mas privação de um bem devido.',
    nota: 'Argumento central da filosofia de Agostinho, retomado por Tomás. Será examinado com objeções na próxima aula e no Módulo 7.' },
  objecoes: [{ objecao: 'As Confissões são uma reconstrução literária, não um relato fiel.', tag: 'debate', resposta: 'Pierre Courcelle (1950) mostrou elementos literários e simbólicos na cena do jardim; outros historiadores mantêm seu núcleo histórico. Ler a obra exige atenção ao gênero: é teologia narrativa, não diário.' }],
  aplicacao: '<p>Faça uma linha do tempo da vida de Agostinho com as datas desta aula e, ao lado de cada etapa, a pergunta filosófica que ele buscava responder.</p>',
  fonte: { obra: 'Agostinho, Confissões, livros III, VII e VIII', link: null, orientacao: '<p>Leia III, 4 (o Hortênsio), VII, 9–12 (os platônicos e o mal) e VIII, 12 (o jardim). Anote no Caderno o que Agostinho diz ter recebido dos platônicos e o que diz não ter encontrado neles (VII, 9).</p>' },
  perguntas: [
    { p: 'Que livro despertou em Agostinho o amor pela sabedoria?', r: 'O Hortênsio, de Cícero.' },
    { p: 'O que ele aprendeu com os platônicos?', r: 'Pensar Deus como realidade espiritual e o mal como privação.' },
    { p: 'Qual texto bíblico leu no jardim?', r: 'Romanos 13,13–14.' },
  ],
  exercicios: [
    mc('Agostinho foi seguidor de qual religião por cerca de nove anos?', ['Mitraísmo', 'Maniqueísmo', 'Judaísmo', 'Estoicismo'], 1, 'Como "ouvinte".'),
    mc('Quem batizou Agostinho?', ['Mônica', 'Ambrósio', 'Jerônimo', 'Fausto'], 1, 'Em Milão, Páscoa de 387.'),
    mc('Os livros X a XIII das Confissões tratam de:', ['Política', 'Memória, tempo e criação', 'Os sacramentos', 'A vida de Mônica'], 1, 'Parte filosófico-exegética.'),
    mc('Para os maniqueus, o mal era:', ['Privação', 'Princípio substancial', 'Ilusão', 'Castigo divino'], 1, 'Dualismo.'),
    disc('Segundo Confissões VII, 9, o que Agostinho encontrou nos platônicos e o que não encontrou? O que isso revela sobre a relação entre filosofia e fé nele?', ['Usa o texto', 'Distingue o que encontrou e o que faltou', 'Relaciona com fé e razão', 'Texto claro'])],
  resumo: ['354 Tagaste – 430 Hipona.', 'Cícero, maniqueísmo, ceticismo, platônicos.', 'Conversão em Milão (386), batismo (387).', 'Confissões: oração, memória, tempo.'],
  referencias: [{ texto: 'Agostinho, Confissões.' }, { texto: 'Peter Brown, Santo Agostinho: uma biografia (1967).' }],
  revisao: [['Hortênsio', 'Diálogo de Cícero que despertou Agostinho para a sabedoria.'], ['Tolle lege', 'Jardim de Milão, 386: Rm 13,13–14.'], ['Agostinho', '354–430; bispo de Hipona desde 395/396.']],
  avancado: {
    texto: `<h3>Courcelle e a historicidade das Confissões</h3>
<p>Pierre Courcelle (Recherches sur les Confessions de saint Augustin, 1950) mostrou paralelos literários na cena do jardim (a figueira, a voz) e propôs lê-la em chave simbólica; a polêmica que se seguiu discutiu até que ponto Agostinho estiliza fatos ${tag('debate')}. Os diálogos de Cassicíaco (386–387), escritos logo depois da conversão, apresentam um Agostinho mais "filosófico"; críticos usaram isso para opor uma "conversão ao neoplatonismo" a uma conversão cristã, tese hoje em geral matizada ${tag('debate')}.</p>
<h3>Peter Brown</h3>
<p>A biografia de Peter Brown (1967; edição ampliada em 2000, com novas cartas descobertas por Johannes Divjak em 1975) é referência. Brown mostra o Agostinho bispo, administrador e polemista, além do pensador ${tag('fato')}.</p>
<h3>Os diálogos de Cassicíaco</h3>
<p>Contra os acadêmicos, A vida feliz, A ordem e os Solilóquios mostram o programa de Agostinho logo após a conversão: refutar o ceticismo, buscar a felicidade no conhecimento de Deus e da alma ("quero conhecer Deus e a alma. Nada mais? Absolutamente nada", Solilóquios I, 2, 7) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Agostinho, Contra os Acadêmicos e Solilóquios.' }, { texto: 'Peter Brown, Santo Agostinho: uma biografia, caps. 1–10.' }],
    exercicios: [
      mc('Courcelle propôs ler a cena do jardim em chave:', ['Puramente histórica', 'Simbólica e literária', 'Política', 'Maniqueia'], 1, 'Recherches sur les Confessions (1950).'),
      mc('Os diálogos de Cassicíaco foram escritos:', ['Antes da conversão', 'Logo após a conversão (386–387)', 'Em Hipona, no fim da vida', 'Por Ambrósio'], 1, 'No retiro de Cassicíaco.'),
      mc('As cartas descobertas em 1975 são chamadas de:', ['Cartas de Divjak', 'Cartas de Milão', 'Cartas de Óstia', 'Cartas de Cícero'], 0, 'Descobertas por Johannes Divjak.'),
      disc('Agostinho converteu-se ao neoplatonismo ou ao cristianismo? Use as Confissões e os diálogos de Cassicíaco.', ['Expõe a tese da "conversão ao neoplatonismo"', 'Usa fontes', 'Considera a crítica', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm2-10', titulo: 'Agostinho: liberdade, mal e interioridade',
  aprendera: ['O mal como privação e a origem do mal moral', 'A noção agostiniana de liberdade', 'O caminho da interioridade e a iluminação', 'A teoria do tempo e as duas cidades'],
  prereq: ['Aula 9: Santo Agostinho: vida e conversão'],
  explicacao: `
<h3>De onde vem o mal?</h3>
<p>Essa pergunta atormentou Agostinho por anos (Confissões VII, 5). Sua resposta tem duas partes ${tag('argumento')}:</p>
<ol><li><strong>Metafísica</strong>: o mal não é substância, mas privação de um bem devido (cegueira é ausência da visão que o olho deveria ter).</li>
<li><strong>Moral</strong>: o mal moral nasce da vontade livre que se desvia do bem maior para bens menores. Em O Livre-Arbítrio, a causa do pecado é a própria vontade; perguntar pela causa da vontade má seria pedir uma causa para uma deficiência (Cidade de Deus XII, 7).</li></ol>
<h3>Liberdade</h3>
<p>Agostinho distingue o <em>liberum arbitrium</em> (capacidade de escolher) e a <em>libertas</em> (liberdade plena de fazer o bem, restaurada pela graça). Após a queda, a vontade escolhe, mas está ferida; a graça a liberta ${tag('interpretacao')}. Na polêmica contra Pelágio, Agostinho insistiu cada vez mais na primazia da graça.</p>
<h3>Interioridade</h3>
<p>Em A Verdadeira Religião (39, 72), Agostinho exorta a não sair para fora, mas voltar a si mesmo, porque a verdade habita no homem interior; e, se a alma se achar mutável, transcender-se também ${tag('fato')}. O caminho vai do exterior ao interior e do interior ao superior.</p>
<h3>Iluminação</h3>
<p>Como conhecemos verdades eternas e necessárias (como as da matemática) se nossa mente é mutável? Agostinho responde que a mente é iluminada por Deus, Verdade imutável — a teoria da iluminação divina ${tag('argumento')}. Tomás de Aquino reinterpretará essa ideia pelo intelecto agente.</p>
<h3>O tempo</h3>
<p>"Que é, pois, o tempo? Se ninguém me pergunta, eu sei" (Confissões XI, 14). Agostinho conclui que o tempo é uma "distensão da alma": passado como memória, presente como atenção, futuro como expectativa ${tag('interpretacao')}.</p>
<h3>As duas cidades</h3>
<p>Em A Cidade de Deus (413–426), escrita após o saque de Roma, Agostinho distingue duas cidades formadas por dois amores: o amor de si até o desprezo de Deus e o amor de Deus até o desprezo de si (XIV, 28) ${tag('fato')}. Não se confundem com Igreja e Estado, mas atravessam a história.</p>`,
  vocabulario: [['Privação', 'Ausência de um bem que deveria estar presente.'], ['Liberum arbitrium', 'Capacidade de escolher.'], ['Libertas', 'Liberdade plena para o bem.'], ['Iluminação', 'Ação de Deus que torna possível conhecer verdades eternas.'], ['Distensio animi', 'Distensão da alma: definição agostiniana do tempo.']],
  exemplos: '<p>A pergunta "por que Deus criou o tempo num momento e não antes?" é respondida por Agostinho: não havia "antes", pois o tempo foi criado com o mundo (Confissões XI, 13).</p>',
  contexto: `<p>O saque de Roma por Alarico (410) levou pagãos a culpar o abandono dos deuses; A Cidade de Deus responde a essa acusação ${tag('fato')}.</p>`,
  argumento: { titulo: '"Se me engano, existo" (Cidade de Deus XI, 26)', tag: 'argumento',
    premissas: ['Quem não existe não pode enganar-se.', 'Se me engano, então existo.', 'Logo, mesmo o cético que diz que me engano admite que existo.'],
    conclusao: 'Portanto, tenho certeza de que existo.',
    nota: 'Antecipa o cogito de Descartes (Degrau 7). Arnauld apontou o paralelo nas Objeções às Meditações (1641).' },
  objecoes: [{ objecao: 'A teoria da privação não explica o sofrimento real: a dor é positiva, não ausência.', tag: 'debate', resposta: 'Defensores respondem que a dor é real como sensação, mas é mal enquanto priva o corpo de sua integridade. O debate é central no problema do mal (Módulo 7).' }],
  aplicacao: '<p>Escolha uma experiência de mal (doença, injustiça) e analise no Caderno: o que é a privação? Qual o bem devido ausente? A explicação convence você?</p>',
  fonte: { obra: 'Agostinho, Confissões VII e XI; A Cidade de Deus XI, 26 e XIV, 28', link: null, orientacao: '<p>Leia Confissões XI, 14–28 sobre o tempo. Reconstrua o argumento pelo qual o passado e o futuro "não existem" e como Agostinho os localiza na alma.</p>' },
  perguntas: [
    { p: 'Qual a definição agostiniana do mal?', r: 'Privação de um bem devido.' },
    { p: 'O que é o tempo para Agostinho?', r: 'Uma distensão da alma: memória, atenção, expectativa.' },
    { p: 'O que define as duas cidades?', r: 'Dois amores: de si até o desprezo de Deus; de Deus até o desprezo de si.' },
  ],
  exercicios: [
    mc('"Se me engano, existo" está em:', ['Confissões I', 'A Cidade de Deus XI, 26', 'O Livre-Arbítrio', 'Solilóquios'], 1, 'Antecipa Descartes.'),
    mc('A teoria da iluminação explica:', ['A origem do mal', 'Como conhecemos verdades imutáveis', 'A Trindade', 'O tempo'], 1, 'Deus ilumina a mente.'),
    mc('Libertas, em Agostinho, é:', ['Simples capacidade de escolha', 'Liberdade plena para o bem', 'Liberdade política', 'Indiferença'], 1, 'Restaurada pela graça.'),
    mc('A Cidade de Deus foi motivada por:', ['O Concílio de Niceia', 'O saque de Roma (410)', 'A morte de Mônica', 'A conversão de Constantino'], 1, 'Resposta aos pagãos.'),
    disc('Reconstrua a teoria do mal como privação e avalie a objeção de que ela não dá conta do sofrimento. Você a considera satisfatória?', ['Reconstrução correta', 'Objeção séria', 'Resposta argumentada', 'Avaliação pessoal justificada'])],
  resumo: ['Mal: privação; mal moral: desvio da vontade.', 'Liberum arbitrium × libertas.', 'Interioridade e iluminação.', 'Tempo como distensão da alma.', 'Duas cidades, dois amores.'],
  referencias: [{ texto: 'Agostinho, Confissões VII e XI.' }, { texto: 'Agostinho, O Livre-Arbítrio.' }, { texto: 'Agostinho, A Cidade de Deus XI, XII, XIV e XIX.' }],
  revisao: [['Mal (Agostinho)', 'Privação de um bem devido.'], ['Tempo (Confissões XI)', 'Distensão da alma.'], ['Duas cidades', 'Amor de si até o desprezo de Deus × amor de Deus até o desprezo de si (XIV, 28).']],
  avancado: {
    texto: `<h3>Agostinho e Descartes</h3>
<p>Antoine Arnauld, nas Quartas Objeções às Meditações (1641), observou que o "penso, logo existo" de Descartes tinha antecedente em Agostinho ${tag('fato')}. Descartes respondeu que usava o argumento para outro fim: fundar todo o saber. A diferença é central: em Agostinho, a certeza de si leva a Deus pela interioridade; em Descartes, funda um método ${tag('interpretacao')}.</p>
<h3>Predestinação</h3>
<p>Nos últimos escritos (A predestinação dos santos, O dom da perseverança, c. 428–429), Agostinho sustentou que Deus escolhe gratuitamente quem será salvo. A recepção dessa doutrina gerou debates com Próspero de Aquitânia, João Cassiano, e, mais tarde, Gottschalk (século IX), Calvino e Jansênio ${tag('fato')}. A Igreja assumiu a primazia da graça, mas rejeitou a predestinação ao mal (Concílio de Orange, 529) ${tag('doutrina')}.</p>
<h3>Gilson e a filosofia de Agostinho</h3>
<p>Étienne Gilson (Introdução ao estudo de Santo Agostinho, 1929) organizou o pensamento de Agostinho em torno da busca de Deus pela alma; Henri-Irénée Marrou mostrou sua relação com a cultura antiga (Santo Agostinho e o fim da cultura antiga, 1938) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Agostinho, A predestinação dos santos.' }, { texto: 'Étienne Gilson, Introdução ao estudo de Santo Agostinho (1929).' }, { texto: 'Descartes, Respostas às Quartas Objeções (1641).' }],
    exercicios: [
      mc('Quem apontou o paralelo entre Agostinho e o cogito de Descartes?', ['Gassendi', 'Arnauld', 'Hobbes', 'Pascal'], 1, 'Quartas Objeções (1641).'),
      mc('O Concílio de Orange (529) rejeitou:', ['A graça', 'A predestinação ao mal', 'O livre-arbítrio', 'O batismo'], 1, 'Afirmou a graça, rejeitou a predestinação ao mal.'),
      mc('"Introdução ao estudo de Santo Agostinho" (1929) é de:', ['Brown', 'Gilson', 'Marrou', 'Courcelle'], 1, 'Étienne Gilson.'),
      disc('Compare o uso da certeza de si em Agostinho e em Descartes: mesmo argumento, fins diferentes?', ['Expõe os dois usos', 'Usa os textos', 'Identifica a diferença de fim', 'Conclusão justificada'])],
  },
}),

avaliacao('m2-11', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre Escritura, história da Igreja antiga e concílios, e discursivas que pedem síntese entre história e doutrina.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 6.</li><li>Refaça a linha do tempo das aulas 2 e 4.</li><li>Leia de novo a definição de Calcedônia.</li></ul>`,
[
  disc('Escreva um ensaio de 30 a 50 linhas mostrando como as controvérsias de Niceia, Éfeso e Calcedônia formaram a doutrina sobre Cristo. Para cada concílio, indique o erro combatido, a fórmula adotada e o argumento que a sustenta.', ['Situa cada concílio com data e erro combatido', 'Explica as fórmulas com precisão', 'Reconstrói ao menos um argumento', 'Distingue doutrina, fato e interpretação']),
  disc('Explique como a Igreja reconheceu o cânon do Novo Testamento até o fim do século IV. Indique os critérios usados (origem apostólica, uso litúrgico, conformidade com a regra de fé) e ao menos um testemunho antigo, como o Fragmento Muratoriano ou a Carta Festal 39 de Atanásio (367).', ['Distingue reconhecimento e criação do cânon', 'Explica ao menos dois critérios', 'Cita um testemunho antigo com data', 'Distingue fato histórico e interpretação']),
]),
];
