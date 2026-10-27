// Módulo 1 — aulas 7 a 12.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm1-7', titulo: 'Jesus Cristo e a Revelação cristã',
  aprendera: ['Quem é Jesus Cristo segundo o Credo e o Catecismo', 'O que as fontes históricas, cristãs e não cristãs, dizem sobre Jesus', 'O significado dos títulos Cristo, Senhor e Filho de Deus', 'Como se discute racionalmente a Ressurreição'],
  prereq: ['Aula 5: O Credo e os fundamentos da fé'],
  explicacao: `
<h3>O centro da fé cristã</h3>
<p>O cristianismo não é, antes de tudo, um sistema de ideias, mas a afirmação de que uma pessoa histórica, Jesus de Nazaré, é o Filho de Deus feito homem, morto e ressuscitado. Por isso o Catecismo dedica a ele a maior parte da exposição do Credo (§422–682) ${tag('doutrina')}. Esta aula distingue três planos que costumam ser misturados: o que a fé confessa, o que a pesquisa histórica pode estabelecer e o que permanece em debate.</p>
<h3>Os títulos</h3>
<ul>
<li><strong>Jesus</strong>: em hebraico, "Deus salva" (CIC §430).</li>
<li><strong>Cristo</strong>: tradução grega do hebraico <em>Mashiach</em>, "ungido"; designa o Messias esperado por Israel (CIC §436).</li>
<li><strong>Filho único de Deus</strong>: não uma filiação adotiva, mas a relação eterna do Filho com o Pai (CIC §441–445).</li>
<li><strong>Senhor</strong>: em grego <em>Kyrios</em>, termo usado na Septuaginta para traduzir o nome divino; aplicá-lo a Jesus é afirmar sua divindade (CIC §446–451) ${tag('doutrina')}.</li>
</ul>
<h3>O que dizem as fontes históricas</h3>
<p>Além dos Evangelhos e das cartas de Paulo, há referências a Jesus em autores não cristãos ${tag('fato')}:</p>
<ul>
<li><strong>Tácito</strong> (Anais XV, 44, c. 116 d.C.) menciona "Cristo", executado sob Pôncio Pilatos no reinado de Tibério.</li>
<li><strong>Flávio Josefo</strong> (Antiguidades Judaicas, c. 93 d.C.) menciona "Tiago, irmão de Jesus chamado Cristo" (XX, 200) e tem uma passagem mais longa sobre Jesus (XVIII, 63–64), o <em>Testimonium Flavianum</em>. A maioria dos historiadores julga que esta segunda passagem tem um núcleo autêntico com acréscimos cristãos posteriores ${tag('debate')}.</li>
</ul>
<p>A fonte cristã escrita mais antiga sobre a ressurreição é a primeira carta de Paulo aos Coríntios (c. 53–55 d.C.), que transmite uma fórmula já recebida: Cristo morreu, foi sepultado, ressuscitou e apareceu a Cefas, aos Doze e a mais de quinhentos irmãos (1Cor 15,3–8) ${tag('fato')}. Muitos historiadores datam essa fórmula de poucos anos após a morte de Jesus ${tag('debate')}.</p>
<p>Entre historiadores de orientações diversas há amplo consenso de que Jesus existiu, foi batizado por João, pregou o Reino de Deus na Galileia e foi crucificado em Jerusalém sob Pilatos ${tag('fato')}. A interpretação de sua identidade e da Ressurreição ultrapassa o que o método histórico, por si só, pode decidir.</p>
<h3>A Encarnação</h3>
<p>O Catecismo ensina que o Filho de Deus assumiu uma natureza humana completa — corpo, alma racional, inteligência e vontade humanas (§470–475) — sem deixar de ser Deus. Por isso Cristo é o mediador perfeito: nele, Deus e o homem estão unidos ${tag('doutrina')}. A Revelação atinge nele a plenitude: Deus não diz apenas algo, mas se dá a si mesmo (Dei Verbum 4).</p>
<h3>A Ressurreição</h3>
<p>Para a fé, a Ressurreição é acontecimento real, com manifestações historicamente constatadas (o túmulo vazio, as aparições), mas que também transcende a história, porque o corpo de Cristo passa a um modo de vida glorioso (CIC §639–647) ${tag('doutrina')}. Paulo diz que, sem ela, a fé seria vã (1Cor 15,14).</p>`,
  vocabulario: [['Messias / Cristo', 'O "ungido" esperado por Israel.'], ['Kyrios', 'Senhor; termo que a Septuaginta usa para o nome de Deus.'], ['Encarnação', 'O Filho eterno assume a natureza humana.'], ['Testimonium Flavianum', 'Passagem de Josefo sobre Jesus, provavelmente com acréscimos cristãos.'], ['Querigma', 'O anúncio essencial: Cristo morreu e ressuscitou.']],
  exemplos: `<p><strong>Plano histórico</strong>: "Jesus foi crucificado sob Pilatos" — sustentado por fontes cristãs e não cristãs. <strong>Plano da fé</strong>: "Jesus morreu pelos nossos pecados" — interpretação teológica do mesmo fato. A frase de Paulo "morreu por nossos pecados, segundo as Escrituras" une os dois planos.</p>`,
  contexto: `<p>A Palestina do século I estava sob domínio romano, com grupos judaicos diversos (fariseus, saduceus, essênios, zelotes) e expectativas messiânicas variadas. A crucificação era pena romana para rebeldes e escravos ${tag('fato')}.</p>`,
  argumento: { titulo: 'Argumento histórico da melhor explicação (reconstrução de apologistas contemporâneos)', tag: 'argumento',
    premissas: ['Jesus morreu crucificado.', 'Pouco depois, seus discípulos afirmaram com convicção tê-lo visto vivo, inclusive diante de perseguição.', 'Perseguidores e céticos, como Paulo e Tiago, passaram a crer por experiências que interpretaram como aparições.', 'Hipóteses alternativas (fraude, alucinação coletiva, morte aparente) explicam esses fatos pior do que a ressurreição.'],
    conclusao: 'Logo, a ressurreição é a melhor explicação dos fatos.',
    nota: 'Inferência para a melhor explicação, não dedução. Defendida por autores como N. T. Wright e Gary Habermas. As premissas 1 a 3 têm amplo apoio entre historiadores; a premissa 4 é o centro do debate, e muitos historiadores sustentam que o método histórico não pode concluir por um milagre.' },
  objecoes: [
    { objecao: 'Hume: o testemunho de um milagre nunca é mais provável do que o erro ou o engano das testemunhas.', tag: 'debate', resposta: 'Defensores respondem que o argumento de Hume supõe de antemão que milagres são extremamente improváveis, e que essa probabilidade depende de haver ou não um Deus que possa agir. O debate remete à teologia natural (Degrau 5).' },
    { objecao: 'Os Evangelhos foram escritos décadas depois e não são relatos neutros.', tag: 'debate', resposta: 'São textos de fé, escritos provavelmente entre c. 70 e 100 d.C. Por isso historiadores aplicam critérios (atestação múltipla, constrangimento, coerência) e dão peso especial a fontes antigas como 1Cor 15.' },
  ],
  aplicacao: '<p>Monte no Caderno uma tabela com três colunas: "afirmação histórica", "fonte", "interpretação de fé". Preencha com cinco afirmações sobre Jesus (batismo, pregação, crucificação, túmulo vazio, aparições).</p>',
  fonte: { obra: 'Catecismo, §422–483 e §638–658; 1 Coríntios 15', link: LINKS.cicCristo,
    orientacao: '<p>Leia 1Cor 15,1–20 na sua Bíblia. Identifique a fórmula recebida (v. 3–5), a lista de testemunhas (v. 5–8) e reconstrua em premissas o argumento de Paulo nos v. 12–20. Depois leia o CIC §639–644.</p>' },
  perguntas: [
    { p: 'O que significa "Cristo"?', r: '"Ungido", tradução grega de Messias.' },
    { p: 'Que fontes não cristãs mencionam Jesus?', r: 'Tácito (Anais XV, 44) e Flávio Josefo (Antiguidades XVIII e XX), entre outras.' },
    { p: 'Por que 1Cor 15 é importante historicamente?', r: 'É a fonte escrita mais antiga sobre a ressurreição e transmite uma fórmula anterior a Paulo.' },
  ],
  exercicios: [
    mc('Chamar Jesus de "Kyrios" (Senhor) tinha peso especial porque:', ['Era título de reis persas', 'A Septuaginta usava esse termo para traduzir o nome de Deus', 'Significava apenas "mestre"', 'Era usado só pelos romanos'], 1, 'CIC §446: atribuir a Jesus o título divino é afirmar sua divindade.'),
    mc('Sobre o Testimonium Flavianum, a posição mais comum entre historiadores é:', ['Totalmente autêntico', 'Totalmente inventado', 'Núcleo autêntico com acréscimos cristãos', 'Não existe'], 2, 'É a posição majoritária, embora haja debate.'),
    mc('Qual afirmação pertence ao plano da fé, e não só ao histórico?', ['Jesus foi crucificado sob Pilatos', 'Jesus pregou na Galileia', 'Jesus morreu pelos nossos pecados', 'Jesus foi batizado por João'], 2, 'É interpretação teológica do fato histórico da crucificação.'),
    mc('O argumento da "melhor explicação" para a ressurreição é:', ['Uma dedução necessária', 'Uma inferência abdutiva', 'Um dogma', 'Uma falácia por definição'], 1, 'Compara hipóteses e escolhe a que melhor explica os fatos.'),
    disc('Avalie o argumento da melhor explicação para a ressurreição: quais premissas você considera bem estabelecidas e qual é o ponto mais fraco? Responda à objeção de Hume.', ['Distingue fatos históricos de interpretação', 'Avalia cada premissa', 'Expõe Hume com fidelidade', 'Conclusão justificada, qualquer que seja'])],
  resumo: ['Títulos: Jesus, Cristo, Filho de Deus, Senhor (CIC §430–451).', 'Fontes não cristãs: Tácito e Josefo.', '1Cor 15 é a fonte mais antiga sobre a ressurreição.', 'Encarnação: verdadeiro Deus e verdadeiro homem.', 'A ressurreição é discutida por inferência para a melhor explicação.'],
  referencias: [{ texto: 'Catecismo, §422–682.', link: LINKS.cicCristo }, { texto: 'Tácito, Anais XV, 44; Flávio Josefo, Antiguidades Judaicas XVIII, 63–64 e XX, 200.' }, { texto: 'Concílio Vaticano II, Dei Verbum, §4.', link: LINKS.deiVerbum }],
  revisao: [['Kyrios', 'Senhor: título divino na Septuaginta (CIC §446).'], ['Fonte mais antiga sobre a ressurreição', '1Cor 15,3–8 (c. 53–55 d.C.).'], ['Testimonium Flavianum', 'Josefo, Ant. XVIII, 63–64: núcleo autêntico com acréscimos (posição majoritária).']],
  avancado: {
    texto: `<h3>As "buscas" do Jesus histórico</h3>
<p>A pesquisa moderna costuma ser dividida em fases ${tag('fato')}: a "primeira busca" (de Reimarus, no século XVIII, ao balanço crítico de Albert Schweitzer, A busca do Jesus histórico, 1906); um período de ceticismo associado a Rudolf Bultmann, que separou o "Jesus histórico" do "Cristo da fé"; a "nova busca" lançada por Ernst Käsemann (1953); e a "terceira busca" (a partir dos anos 1980), que insiste no judaísmo de Jesus (E. P. Sanders, John P. Meier, N. T. Wright).</p>
<h3>Critérios de historicidade</h3>
<p>Atestação múltipla (o dado aparece em fontes independentes), constrangimento (algo embaraçoso para a Igreja nascente dificilmente seria inventado, como o batismo de Jesus por João), dissimilaridade e coerência. Esses critérios são úteis, mas foram criticados quando aplicados de modo mecânico ${tag('debate')}.</p>
<h3>Os melhores interlocutores</h3>
<p>N. T. Wright (The Resurrection of the Son of God, 2003) defende que só a ressurreição explica a transformação da esperança judaica entre os primeiros cristãos. Bart Ehrman, agnóstico, aceita muitos dos fatos mínimos, mas sustenta que o historiador, enquanto historiador, não pode concluir por um milagre ${tag('debate')}. Ler ambos é o exercício avançado desta aula. Joseph Ratzinger apresentou Jesus de Nazaré (3 volumes, 2007–2012) como obra pessoal de teólogo, não como ato de Magistério, conforme declarou no prefácio ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Albert Schweitzer, A Busca do Jesus Histórico (1906), cap. final.' }, { texto: 'N. T. Wright, The Resurrection of the Son of God (2003), parte V.' }, { texto: 'Joseph Ratzinger, Jesus de Nazaré, vol. I, prefácio.' }],
    exercicios: [
      mc('O critério de "constrangimento" afirma que:', ['Fatos embaraçosos para a Igreja nascente dificilmente foram inventados', 'Só vale o que aparece em Paulo', 'Milagres são impossíveis', 'Toda fonte cristã é falsa'], 0, 'Exemplo clássico: o batismo de Jesus por João.'),
      mc('A separação entre "Jesus histórico" e "Cristo da fé" é associada sobretudo a:', ['Tomás de Aquino', 'Rudolf Bultmann', 'N. T. Wright', 'Agostinho'], 1, 'Bultmann marcou a fase cética do século XX.'),
      mc('Ratzinger apresentou Jesus de Nazaré como:', ['Documento magisterial', 'Obra pessoal de teólogo', 'Encíclica', 'Romance'], 1, 'Declarado no prefácio do primeiro volume.'),
      disc('Compare a posição de Wright e a de Ehrman sobre o que o historiador pode afirmar da ressurreição. Onde está, exatamente, a divergência: nos fatos ou no método?', ['Expõe as duas posições com fidelidade', 'Localiza a divergência com precisão', 'Discute o estatuto do milagre no método histórico', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm1-8', titulo: 'Criação, ser humano, pecado e graça',
  aprendera: ['O que significa ser criado à imagem de Deus', 'A doutrina da alma como forma do corpo', 'O pecado original como estado herdado, não ato pessoal', 'O que é a graça e como se relaciona com a liberdade'],
  prereq: ['Aula 5: O Credo e os fundamentos da fé'],
  explicacao: `
<h3>Por que existimos?</h3>
<p>A doutrina da criação responde a uma pergunta mais funda do que "como começou o universo": por que existe algo, e com que sentido? O Catecismo diz que o mundo foi criado para a glória de Deus — não para aumentá-la, mas para manifestá-la e comunicar sua bondade (§293–294) ${tag('doutrina')}.</p>
<h3>O ser humano: unidade de corpo e alma</h3>
<p>Criado "à imagem de Deus" (Gn 1,27), o ser humano é capaz de conhecer e amar; é pessoa, não coisa (CIC §355–357) ${tag('doutrina')}. A Igreja ensina que a alma espiritual é a "forma" do corpo: corpo e alma não são duas substâncias justapostas, mas formam uma única natureza (CIC §365, retomando o Concílio de Vienne, 1312) ${tag('doutrina')}. Isso afasta dois extremos: o dualismo que vê o corpo como prisão e o materialismo que reduz a pessoa à matéria. Cada alma é criada imediatamente por Deus (CIC §366).</p>
<h3>O pecado original</h3>
<p>Gênesis 3 narra, em linguagem figurada, um acontecimento ocorrido no início da história humana (CIC §390) ${tag('doutrina')}. O pecado de Adão consistiu em preferir-se a si mesmo a Deus. A consequência é que a natureza humana é transmitida privada da santidade e da justiça originais. Ponto essencial: o pecado original é chamado "pecado" de modo analógico — é um <strong>estado contraído</strong>, não um ato cometido (CIC §404) ${tag('doutrina')}. A natureza humana não ficou totalmente corrompida, mas ferida nas suas forças naturais e inclinada ao mal, a "concupiscência" (CIC §405). Esta é uma diferença importante em relação a algumas teses da Reforma ${tag('debate')}.</p>
<h3>A graça</h3>
<p>Graça é o favor, o socorro gratuito que Deus dá para respondermos ao seu chamado; é participação na vida divina (CIC §1996–1997) ${tag('doutrina')}. Distinguem-se a graça santificante (habitual, estável) e as graças atuais (intervenções em atos concretos) (§2000). A iniciativa é sempre de Deus, mas a graça não anula a liberdade: Deus age na liberdade humana, não contra ela (§2002) ${tag('doutrina')}.</p>`,
  vocabulario: [['Imago Dei', 'Imagem de Deus: capacidade de conhecer e amar.'], ['Forma do corpo', 'A alma como princípio que faz do corpo um corpo humano vivo.'], ['Pecado original', 'Estado de privação da justiça original, contraído, não cometido (CIC §404).'], ['Concupiscência', 'Inclinação ao mal que permanece após o batismo.'], ['Graça santificante', 'Dom estável que santifica a alma.'], ['Graça atual', 'Auxílio de Deus para atos concretos.']],
  exemplos: '<p>Um recém-nascido não cometeu pecado algum; segundo a doutrina, ele nasce num <em>estado</em> de privação da graça original. Por isso a Igreja batiza crianças: o batismo não pune uma falta pessoal, mas comunica a graça.</p>',
  contexto: `<p>No início do século V, Pelágio sustentou que o ser humano pode, com as próprias forças, cumprir a lei e salvar-se; Agostinho escreveu contra ele, e o Concílio de Cartago (418) condenou o pelagianismo. No século XVI, Trento definiu o pecado original (sessão V, 1546) e a justificação (sessão VI, 1547) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a alma humana não se reduz à matéria (argumento clássico pela intelecção)', tag: 'argumento',
    premissas: ['O intelecto humano conhece conceitos universais (por exemplo, "triângulo" enquanto tal).', 'Todo órgão material é particular e determinado.', 'O que é recebido num órgão material é recebido de modo particular.'],
    conclusao: 'Logo, a operação intelectual não é, ela mesma, operação de um órgão material, e seu princípio tem algo de imaterial.',
    nota: 'Linha de argumento de Aristóteles (Da Alma III) e de Tomás (Suma I, q. 75). É discutida na filosofia da mente contemporânea (Módulo 15); críticos questionam a premissa 3.' },
  objecoes: [
    { objecao: 'A teoria da evolução torna impossível a doutrina da criação do ser humano.', tag: 'debate', resposta: 'Pio XII (Humani Generis, 1950) admitiu a investigação sobre a origem evolutiva do corpo humano, mantendo que as almas são criadas imediatamente por Deus. A compatibilidade de detalhes, como a origem a partir de um primeiro casal, é discutida por teólogos e cientistas.' },
    { objecao: 'É injusto herdar um pecado que não cometi.', tag: 'debate', resposta: 'A doutrina responde que não se herda culpa pessoal, mas a privação de um dom que não era devido à natureza. A explicação é analógica, e o próprio Catecismo reconhece que se trata de um mistério (§404).' },
  ],
  aplicacao: '<p>Escreva no Caderno três frases comuns sobre o ser humano ("somos só química", "o corpo é uma prisão", "somos bons por natureza e a sociedade nos corrompe") e confronte cada uma com a doutrina desta aula.</p>',
  fonte: { obra: 'Catecismo, §355–421 e §1996–2005', link: LINKS.cicPai, orientacao: '<p>Leia os §362–368 (corpo e alma) e §396–409 (a queda). Responda: o que significa que o pecado original é "contraído e não cometido"? Depois leia os §1996–2005, na terceira parte do Catecismo.</p>' },
  perguntas: [
    { p: 'O que significa dizer que a alma é a forma do corpo?', r: 'Que alma e corpo formam uma única natureza; a alma é o princípio que faz do corpo um corpo humano vivo.' },
    { p: 'O pecado original é um ato pessoal?', r: 'Não; é um estado contraído, não cometido (CIC §404).' },
    { p: 'A graça elimina a liberdade?', r: 'Não; Deus age na liberdade humana (CIC §2002).' },
  ],
  exercicios: [
    mc('A doutrina da alma como "forma do corpo" afasta:', ['Só o materialismo', 'Só o dualismo radical', 'Tanto o materialismo quanto o dualismo radical', 'Nenhum dos dois'], 2, 'Nem a pessoa é só matéria, nem o corpo é prisão alheia à alma.'),
    mc('Segundo o CIC §405, após o pecado original a natureza humana ficou:', ['Totalmente corrompida', 'Intacta', 'Ferida e inclinada ao mal', 'Divinizada'], 2, 'Ferida, não destruída.'),
    mc('Pelágio sustentava que:', ['A graça é indispensável a todo ato bom', 'O ser humano pode salvar-se com as próprias forças', 'A matéria é má', 'Não existe liberdade'], 1, 'Por isso foi combatido por Agostinho e condenado em Cartago (418).'),
    mc('A graça santificante se distingue da atual por ser:', ['Estável e habitual', 'Momentânea', 'Natural', 'Adquirida pelo esforço'], 0, 'CIC §2000.'),
    disc('Explique como a doutrina católica pretende conciliar a necessidade da graça com a liberdade humana. Apresente a objeção de que isso seria contraditório e uma resposta.', ['Define graça e liberdade', 'Expõe a tese da cooperação', 'Apresenta objeção séria', 'Resposta coerente e honesta'])],
  resumo: ['Criação para manifestar a bondade de Deus.', 'Ser humano: imagem de Deus, unidade de corpo e alma (CIC §362–368).', 'Pecado original: estado contraído, natureza ferida (CIC §404–405).', 'Graça: dom gratuito que coopera com a liberdade (CIC §1996–2005).'],
  referencias: [{ texto: 'Catecismo, §279–421.', link: LINKS.cicPai }, { texto: 'Catecismo, §1996–2005 (graça).' }, { texto: 'Pio XII, Humani Generis (1950), §36–37.' }],
  revisao: [['Alma como forma do corpo', 'Corpo e alma formam uma única natureza (CIC §365; Vienne 1312).'], ['Pecado original', 'Estado contraído, não cometido (CIC §404).'], ['Pelagianismo', 'Salvação pelas próprias forças; condenado em Cartago (418).']],
  avancado: {
    texto: `<h3>A controvérsia "de auxiliis"</h3>
<p>Como Deus move a vontade sem eliminar a liberdade? No fim do século XVI, o dominicano Domingo Báñez defendeu a "premoção física": Deus move eficazmente a vontade ao ato livre. O jesuíta Luis de Molina (Concordia, 1588) propôs a "ciência média": Deus conhece o que cada criatura livre faria em qualquer circunstância e escolhe quais circunstâncias tornar reais. A Congregação "de auxiliis" debateu de 1597 a 1607; o Papa Paulo V permitiu as duas escolas e proibiu que uma acusasse a outra de heresia ${tag('fato')}. O debate continua na filosofia da religião contemporânea ${tag('debate')}.</p>
<h3>Agostinho e a tradição</h3>
<p>Os escritos antipelagianos de Agostinho (por exemplo, A graça e o livre-arbítrio, c. 426) tornaram-se referência; o II Concílio de Orange (529) ensinou que o próprio início da fé é dom da graça. A leitura radical de Agostinho por Jansênio (Augustinus, 1640) foi condenada pela Igreja ${tag('fato')}.</p>
<h3>Monogenismo e ciência</h3>
<p>Humani Generis (1950) afirmou que não se vê como o poligenismo se conciliaria com a doutrina do pecado original. Teólogos contemporâneos propõem diferentes modelos para relacionar a genética de populações com a doutrina; é um debate aberto, em que é preciso distinguir o que é ensinado, o que é hipótese e o que é dado científico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Agostinho, A Graça e o Livre-Arbítrio (De gratia et libero arbitrio).' }, { texto: 'Tomás de Aquino, Suma I-II, q. 109–114 (tratado da graça).' }, { texto: 'Pio XII, Humani Generis (1950).' }],
    exercicios: [
      mc('A "ciência média" é associada a:', ['Báñez', 'Molina', 'Agostinho', 'Pelágio'], 1, 'Luis de Molina, Concordia (1588).'),
      mc('Ao fim da controvérsia de auxiliis, Paulo V:', ['Condenou Molina', 'Condenou Báñez', 'Permitiu as duas escolas', 'Definiu um dogma'], 2, '1607: liberdade de ensinar ambas, sem acusações mútuas de heresia.'),
      mc('O II Concílio de Orange (529) ensinou que:', ['O início da fé é dom da graça', 'A graça é desnecessária', 'Não há pecado original', 'A alma é material'], 0, 'Contra o chamado semipelagianismo.'),
      disc('Compare premoção física e ciência média: qual preserva melhor a soberania de Deus e qual preserva melhor a liberdade? Há uma terceira via?', ['Expõe as duas teorias com precisão', 'Avalia vantagens e custos de cada uma', 'Considera alternativas', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm1-9', titulo: 'Igreja e sacramentos',
  aprendera: ['O que a Igreja diz sobre si mesma: as quatro notas', 'O que é um sacramento e como age', 'Os sete sacramentos e sua divisão', 'O sentido de "ex opere operato"'],
  explicacao: `
<h3>Igreja: mais do que instituição</h3>
<p>O Catecismo apresenta a Igreja como povo de Deus, corpo de Cristo e templo do Espírito Santo (§781–810) ${tag('doutrina')}. Ela é ao mesmo tempo visível (com hierarquia, leis, ritos) e espiritual. As "notas" confessadas no Credo — una, santa, católica e apostólica — são inseparáveis (CIC §811) ${tag('doutrina')}:</p>
<ul>
<li><strong>Una</strong>: uma só fé, um só batismo, uma só sucessão apostólica.</li>
<li><strong>Santa</strong>: não porque todos os membros sejam santos, mas porque Cristo a santifica; ela inclui pecadores (CIC §827).</li>
<li><strong>Católica</strong>: universal, enviada a todos os povos e possuidora da plenitude dos meios de salvação.</li>
<li><strong>Apostólica</strong>: fundada sobre os Apóstolos e governada por seus sucessores.</li>
</ul>
<p>O Vaticano II ensinou que a Igreja de Cristo "subsiste na" Igreja Católica (Lumen Gentium 8), reconhecendo elementos de santificação fora de seus limites visíveis ${tag('doutrina')}.</p>
<h3>O que é um sacramento</h3>
<p>Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, pelos quais nos é dada a vida divina (CIC §1131) ${tag('doutrina')}. Duas noções escolásticas ajudam a entender: a <strong>matéria</strong> (o elemento sensível, como a água no batismo) e a <strong>forma</strong> (as palavras, como "eu te batizo..."). Juntas, significam e realizam o que significam.</p>
<p>Os sacramentos agem <em>ex opere operato</em>, "pela obra realizada": sua eficácia vem de Cristo, não da santidade pessoal do ministro (CIC §1128) ${tag('doutrina')}. Isso não os torna mágicos: o fruto depende também das disposições de quem os recebe.</p>
<h3>Os sete</h3>
<p>O Concílio de Trento definiu que são sete (sessão VII, 1547) ${tag('fato')}. O Catecismo os agrupa assim (§1210–1212):</p>
<ul><li><strong>Iniciação</strong>: batismo, confirmação (crisma), Eucaristia.</li><li><strong>Cura</strong>: penitência (confissão), unção dos enfermos.</li><li><strong>Serviço da comunhão</strong>: ordem, matrimônio.</li></ul>
<p>A Eucaristia é chamada "fonte e ápice de toda a vida cristã" (Lumen Gentium 11; CIC §1324) ${tag('doutrina')}.</p>`,
  vocabulario: [['Notas da Igreja', 'Una, santa, católica, apostólica (CIC §811).'], ['Sacramento', 'Sinal eficaz da graça instituído por Cristo.'], ['Matéria e forma', 'Elemento sensível e palavras que constituem o sinal.'], ['Ex opere operato', 'Eficácia que vem da ação de Cristo, não da santidade do ministro.'], ['Subsistit in', '"Subsiste na": fórmula de LG 8.']],
  exemplos: '<p>Se um padre em pecado grave batiza validamente, a criança está batizada: a eficácia não depende da santidade dele. Já um adulto que comunga sem fé nem disposição não colhe os frutos, embora o sacramento seja real.</p>',
  contexto: `<p>No norte da África do século IV, os donatistas sustentavam que sacramentos dados por ministros que haviam cedido na perseguição eram inválidos. Agostinho combateu essa tese; daí vem a raiz da doutrina da eficácia ex opere operato ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a eficácia não pode depender da santidade do ministro (argumento de Agostinho contra os donatistas, reconstruído)', tag: 'argumento',
    premissas: ['Se a eficácia do sacramento dependesse da santidade do ministro, nenhum fiel poderia ter segurança de ter recebido o sacramento.', 'A santidade interior de outra pessoa não é conhecível com certeza.', 'Cristo instituiu os sacramentos para dar a graça com segurança aos fiéis.'],
    conclusao: 'Logo, a eficácia do sacramento vem de Cristo, que age por meio do ministro.',
    nota: 'A premissa 3 é teológica. O argumento mostra a coerência interna da posição.' },
  objecoes: [
    { objecao: 'Isso torna os sacramentos rituais mágicos.', tag: 'debate', resposta: 'A magia pretende manipular forças pela fórmula; a doutrina afirma que é Deus quem age e que o fruto depende da fé e da disposição de quem recebe (CIC §1128). A objeção acerta ao alertar contra o ritualismo vazio.' },
    { objecao: 'Os sete sacramentos não aparecem como lista no Novo Testamento.', tag: 'debate', resposta: 'É verdade que a lista se fixa na Idade Média (Pedro Lombardo, século XII) e é definida em Trento. A posição católica sustenta que cada sacramento tem fundamento no Novo Testamento e na Tradição; as Igrejas protestantes geralmente reconhecem dois (batismo e ceia).' },
  ],
  aplicacao: '<p>Para cada sacramento, escreva no Caderno a matéria, a forma (em linhas gerais) e o grupo a que pertence. Use o índice da segunda parte do Catecismo.</p>',
  fonte: { obra: 'Catecismo, §811–870 e §1113–1134', link: LINKS.cicEspirito, orientacao: '<p>Leia os §811–812 (as notas) e §1113–1134 (os sacramentos em geral). Pergunta-guia: por que o Catecismo diz que os sacramentos são "da Igreja" e "para a Igreja"?</p>' },
  perguntas: [
    { p: 'O que significa "ex opere operato"?', r: 'A eficácia vem da ação de Cristo realizada no sacramento, não da santidade do ministro.' },
    { p: 'Como o Catecismo agrupa os sacramentos?', r: 'Iniciação; cura; serviço da comunhão.' },
    { p: 'A Igreja é "santa" porque todos os membros são santos?', r: 'Não; porque Cristo a santifica. Ela inclui pecadores (CIC §827).' },
  ],
  exercicios: [
    mc('A doutrina do "ex opere operato" tem raiz na controvérsia contra os:', ['Arianos', 'Donatistas', 'Gnósticos', 'Pelagianos'], 1, 'Agostinho contra os donatistas.'),
    mc('Matrimônio e ordem pertencem aos sacramentos:', ['De iniciação', 'De cura', 'Do serviço da comunhão', 'Nenhum'], 2, 'CIC §1534.'),
    mc('"Subsistit in" (LG 8) significa que a Igreja de Cristo:', ['Não existe na Igreja Católica', 'Subsiste na Igreja Católica, havendo elementos de santificação fora dela', 'É só invisível', 'Coincide com todas as Igrejas igualmente'], 1, 'Formulação do Vaticano II, discutida por teólogos.'),
    mc('O número de sete sacramentos foi definido solenemente em:', ['Niceia', 'Trento', 'Vaticano II', 'Calcedônia'], 1, 'Sessão VII (1547).'),
    disc('Explique a diferença entre sacramento e magia, usando as noções de ex opere operato e de disposição de quem recebe.', ['Define ambos', 'Explica ex opere operato', 'Explica o papel da disposição', 'Exemplo pertinente'])],
  resumo: ['Igreja: povo de Deus, corpo de Cristo, templo do Espírito.', 'Quatro notas inseparáveis (CIC §811).', 'Sacramento: sinal eficaz da graça; matéria e forma.', 'Ex opere operato (CIC §1128).', 'Sete sacramentos em três grupos (Trento, 1547).'],
  referencias: [{ texto: 'Catecismo, §748–975.', link: LINKS.cicEspirito }, { texto: 'Catecismo, §1113–1666.' }, { texto: 'Concílio Vaticano II, Lumen Gentium, §8 e §11.' }],
  revisao: [['Quatro notas', 'Una, santa, católica, apostólica (CIC §811).'], ['Ex opere operato', 'Eficácia de Cristo, não do ministro (CIC §1128).'], ['Três grupos de sacramentos', 'Iniciação; cura; serviço da comunhão.']],
  avancado: {
    texto: `<h3>"Subsistit in": um debate de meio século</h3>
<p>O esboço de Lumen Gentium dizia que a Igreja de Cristo "é" (<em>est</em>) a Igreja Católica; o texto final diz "subsiste na" (<em>subsistit in</em>). Alguns teólogos leram a mudança como abertura a uma "subsistência" também em outras Igrejas; a Congregação para a Doutrina da Fé (Dominus Iesus, 2000; Respostas a questões sobre alguns aspectos da doutrina sobre a Igreja, 2007) afirmou que a expressão indica a identidade plena entre a Igreja de Cristo e a Igreja Católica, reconhecendo elementos de santificação fora dela ${tag('debate')}.</p>
<h3>Transubstanciação</h3>
<p>Trento (sessão XIII, 1551) chamou de "transubstanciação" a conversão de toda a substância do pão e do vinho no corpo e sangue de Cristo, permanecendo as "espécies" (aparências) ${tag('doutrina')}. O vocabulário usa a distinção aristotélica entre substância e acidente, que você estudará no Degrau 4. Teólogos discutem se a doutrina depende da metafísica aristotélica ou apenas usa seus termos; o concílio diz que o termo é "conveniente e próprio" ${tag('debate')}.</p>
<h3>Sacramento como sinal: a teoria de Agostinho</h3>
<p>Agostinho (A Doutrina Cristã, livro II) define sinal como algo que, além da forma que oferece aos sentidos, faz vir ao pensamento outra coisa. A teologia sacramental medieval desenvolveu essa semiótica: o sacramento é sinal que causa o que significa ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Concílio de Trento, sessões VII (1547) e XIII (1551).' }, { texto: 'Tomás de Aquino, Suma III, q. 60–65 (os sacramentos em geral).' }, { texto: 'Agostinho, A Doutrina Cristã, livros I–II.' }],
    exercicios: [
      mc('"Transubstanciação" usa a distinção aristotélica entre:', ['Ato e potência', 'Substância e acidente', 'Matéria e vazio', 'Sujeito e objeto'], 1, 'A substância muda; os acidentes (espécies) permanecem.'),
      mc('A definição de sinal como algo que "faz vir ao pensamento outra coisa" é de:', ['Agostinho', 'Kant', 'Descartes', 'Lutero'], 0, 'A Doutrina Cristã, livro II.'),
      mc('Segundo a CDF (2007), "subsistit in" indica:', ['Que a Igreja de Cristo não está na Igreja Católica', 'A identidade plena entre a Igreja de Cristo e a Igreja Católica, com elementos de santificação fora dela', 'Que todas as Igrejas são iguais', 'Um erro do Concílio'], 1, 'Respostas de 2007.'),
      disc('A doutrina da transubstanciação depende da metafísica aristotélica? Exponha os argumentos dos dois lados.', ['Explica substância e acidente', 'Apresenta a tese da dependência', 'Apresenta a tese contrária', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm1-10', titulo: 'Moral cristã e vida eterna',
  aprendera: ['Como a moral católica avalia um ato: objeto, intenção e circunstâncias', 'O papel da consciência e das virtudes', 'A distinção entre pecado mortal e venial', 'O que a Igreja ensina sobre juízo, céu, purgatório e inferno'],
  explicacao: `
<h3>Moral como caminho para a felicidade</h3>
<p>O Catecismo começa a moral pelas bem-aventuranças e pela vocação à felicidade (§1716–1729) ${tag('doutrina')}. A moral cristã não é, primeiro, uma lista de proibições, mas a resposta a uma pergunta antiga: como viver bem? Nisso retoma Aristóteles (Ética a Nicômaco, Degrau 4) e o eleva: o fim último é a comunhão com Deus.</p>
<h3>As três fontes da moralidade</h3>
<p>Um ato humano livre é avaliado por três elementos (CIC §1750–1756) ${tag('doutrina')}:</p>
<ol><li><strong>Objeto</strong>: o que se escolhe fazer (mentir, ajudar, roubar).</li><li><strong>Intenção</strong>: o fim visado por quem age.</li><li><strong>Circunstâncias</strong>: elementos secundários que agravam ou atenuam.</li></ol>
<p>Para um ato ser bom, os três devem ser bons. Uma boa intenção não torna bom um objeto mau: "o fim não justifica os meios" (CIC §1753). E há atos cujo objeto é mau em si mesmo, independentemente de intenções e circunstâncias (CIC §1756) ${tag('doutrina')}.</p>
<h3>Consciência e virtudes</h3>
<p>A consciência é o juízo da razão pelo qual a pessoa reconhece a qualidade moral de um ato concreto (CIC §1778). Deve-se segui-la, mas ela precisa ser formada, pois pode errar (§1790–1794) ${tag('doutrina')}. As virtudes são disposições habituais para o bem: as quatro cardeais — prudência, justiça, fortaleza e temperança (§1805) — e as três teologais — fé, esperança e caridade (§1812–1829).</p>
<h3>Pecado mortal e venial</h3>
<p>O pecado mortal exige matéria grave, plena consciência e consentimento deliberado (CIC §1857); destrói a caridade no coração. O venial enfraquece a caridade, mas não a destrói (§1855) ${tag('doutrina')}.</p>
<h3>As últimas coisas</h3>
<p>Após a morte há um juízo particular (§1021–1022). O céu é a comunhão perfeita com Deus (§1023–1029); o purgatório, uma purificação final dos que morrem na graça (§1030–1032); o inferno, o estado de autoexclusão definitiva da comunhão com Deus (§1033–1037). No fim, a ressurreição dos mortos e o juízo final (§1038–1041) ${tag('doutrina')}. A Igreja nunca declarou que alguém em particular esteja no inferno ${tag('fato')}.</p>`,
  vocabulario: [['Fontes da moralidade', 'Objeto, intenção, circunstâncias (CIC §1750).'], ['Consciência', 'Juízo da razão sobre a moralidade de um ato concreto.'], ['Virtudes cardeais', 'Prudência, justiça, fortaleza, temperança.'], ['Pecado mortal', 'Matéria grave, plena consciência, consentimento deliberado.'], ['Novíssimos', 'Morte, juízo, inferno e paraíso: nome tradicional das últimas coisas.']],
  exemplos: '<p>Roubar remédio para vender e comprar drogas: objeto mau, intenção má. Roubar para dar a um pobre: intenção boa, mas o objeto continua mau. Dar esmola para ser admirado: objeto bom, intenção que diminui ou corrompe o ato (CIC §1753).</p>',
  contexto: `<p>A moral católica foi sistematizada na Suma de Tomás (I-II e II-II), que organiza a vida moral pelas virtudes. Depois de Trento desenvolveram-se manuais de teologia moral centrados em casos e mandamentos ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que uma boa intenção não basta (CIC §1753, reconstrução)', tag: 'argumento',
    premissas: ['Um ato humano inclui aquilo que se escolhe fazer, e não só o fim visado.', 'Se o que se escolhe é mau, escolhê-lo é querer um mal.', 'Querer um mal, mesmo como meio para um bem, é uma vontade desordenada.'],
    conclusao: 'Logo, uma boa intenção não torna bom um ato cujo objeto é mau.',
    nota: 'O debate filosófico com o consequencialismo, que avalia só os resultados, será estudado no Módulo 13.' },
  objecoes: [
    { objecao: 'Consequencialismo: o certo é o que produz as melhores consequências; não há atos maus "em si".', tag: 'debate', resposta: 'A tradição católica responde que essa visão permitiria qualquer ato contra um inocente se o saldo fosse positivo, contrariando intuições morais profundas. Consequencialistas respondem com versões sofisticadas, como o consequencialismo de regras. É debate central da ética contemporânea.' },
    { objecao: 'Um inferno eterno é incompatível com um Deus amoroso.', tag: 'debate', resposta: 'A resposta católica descreve o inferno como autoexclusão livre e definitiva (CIC §1033), não como vingança arbitrária. Críticos e alguns teólogos universalistas contestam; o Magistério mantém a doutrina.' },
  ],
  aplicacao: '<p>Escolha três decisões reais que você tomou nesta semana e analise cada uma pelas três fontes da moralidade. Registre no Caderno, sem nomes de terceiros.</p>',
  fonte: { obra: 'Catecismo, §1749–1761, §1776–1802 e §1020–1060', link: LINKS.cicEspirito, orientacao: '<p>Leia os §1749–1761 (moralidade dos atos) e §1020–1037 (vida eterna). Pergunta-guia: como o Catecismo relaciona liberdade e inferno?</p>' },
  perguntas: [
    { p: 'Quais são as três fontes da moralidade?', r: 'Objeto, intenção e circunstâncias.' },
    { p: 'O que é necessário para um pecado ser mortal?', r: 'Matéria grave, plena consciência e consentimento deliberado (CIC §1857).' },
    { p: 'Como o Catecismo define o inferno?', r: 'Estado de autoexclusão definitiva da comunhão com Deus (CIC §1033).' },
  ],
  exercicios: [
    mc('Mentir para proteger a reputação de um amigo, segundo a moral católica:', ['É bom, pela intenção', 'Continua tendo objeto mau', 'É indiferente', 'É sempre pecado mortal'], 1, 'A intenção boa não muda o objeto (CIC §1753); a gravidade depende de outros fatores.'),
    mc('Qual NÃO é virtude cardeal?', ['Prudência', 'Justiça', 'Esperança', 'Temperança'], 2, 'Esperança é virtude teologal.'),
    mc('O purgatório é:', ['Uma segunda chance após a condenação', 'Purificação final dos que morrem na graça', 'Outro nome do inferno', 'Opinião sem apoio no Magistério'], 1, 'CIC §1030–1032.'),
    mc('A consciência, segundo o Catecismo:', ['Nunca erra', 'Deve ser seguida e formada, pois pode errar', 'É só sentimento', 'Não tem valor moral'], 1, 'CIC §1790–1794.'),
    disc('Compare a avaliação de um mesmo caso difícil (escolha um) pela moral das três fontes e pelo consequencialismo. Qual avaliação lhe parece mais correta? Por quê?', ['Descreve o caso com clareza', 'Aplica as três fontes', 'Aplica o consequencialismo com fidelidade', 'Conclusão argumentada'])],
  resumo: ['Moral como caminho para a felicidade (CIC §1716).', 'Objeto, intenção, circunstâncias (CIC §1750–1756).', 'Consciência deve ser seguida e formada.', 'Virtudes cardeais e teologais.', 'Juízo, céu, purgatório, inferno, ressurreição (CIC §1020–1060).'],
  referencias: [{ texto: 'Catecismo, terceira parte, §1691–2557.' }, { texto: 'Catecismo, §1020–1060.', link: LINKS.cicEspirito }, { texto: 'Tomás de Aquino, Suma I-II, q. 18–21 (bondade e malícia dos atos).' }],
  revisao: [['Três fontes da moralidade', 'Objeto, intenção, circunstâncias.'], ['Pecado mortal', 'Matéria grave + plena consciência + consentimento deliberado.'], ['Inferno (CIC §1033)', 'Autoexclusão definitiva da comunhão com Deus.']],
  avancado: {
    texto: `<h3>Veritatis Splendor e o proporcionalismo</h3>
<p>Na encíclica Veritatis Splendor (1993), João Paulo II criticou teorias morais, chamadas "proporcionalismo" e "consequencialismo", segundo as quais nenhum ato seria mau em si, devendo-se pesar bens e males previsíveis. A encíclica reafirma a existência de atos "intrinsecamente maus" (§79–83) ${tag('doutrina')}. Teólogos associados ao proporcionalismo, como Richard McCormick e Josef Fuchs, contestaram que a encíclica descrevesse bem suas posições ${tag('debate')}.</p>
<h3>Duplo efeito</h3>
<p>O princípio do duplo efeito, cuja origem costuma ser associada a Tomás (Suma II-II, q. 64, a. 7, sobre a legítima defesa), permite um ato com efeito mau previsto se o ato em si não for mau, se o efeito mau não for querido nem como fim nem como meio e se houver razão proporcionada ${tag('argumento')}. É central em bioética e em ética da guerra; filósofos discutem se a distinção entre "querer" e "prever" é sustentável ${tag('debate')}.</p>
<h3>Escatologia</h3>
<p>Joseph Ratzinger, em Escatologia: morte e vida eterna (1977), discute a relação entre imortalidade da alma e ressurreição; Hans Urs von Balthasar, em Esperar por todos? (1986), defendeu a licitude de esperar a salvação de todos, sem afirmá-la — tese muito discutida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Veritatis Splendor (1993), cap. II.' }, { texto: 'Tomás de Aquino, Suma II-II, q. 64, a. 7.' }, { texto: 'Joseph Ratzinger, Escatologia: morte e vida eterna (1977).' }],
    exercicios: [
      mc('Veritatis Splendor reafirma:', ['Que nenhum ato é mau em si', 'A existência de atos intrinsecamente maus', 'O consequencialismo', 'Que a consciência nunca erra'], 1, 'VS §79–83.'),
      mc('No princípio do duplo efeito, o efeito mau:', ['Pode ser o meio', 'Não pode ser querido nem como fim nem como meio', 'Deve ser maior que o bom', 'É irrelevante'], 1, 'Condição central do princípio.'),
      mc('"Esperar por todos?" (1986) é de:', ['Ratzinger', 'Balthasar', 'Rahner', 'Tomás'], 1, 'Hans Urs von Balthasar.'),
      disc('Aplique o princípio do duplo efeito a um caso (por exemplo, sedação paliativa ou legítima defesa) e avalie a objeção de que a distinção entre querer e prever é arbitrária.', ['Enuncia o princípio com suas condições', 'Aplica corretamente ao caso', 'Expõe a objeção com força', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm1-11', titulo: 'Revisão geral do Módulo 1', duracao: '90–120 min',
  aprendera: ['Integrar os temas do módulo num mapa único', 'Corrigir confusões frequentes', 'Preparar-se para a prova do módulo'],
  prereq: ['Aulas 1 a 10 do Módulo 1'],
  explicacao: `
<h3>O mapa do módulo</h3>
<p>Todo o Módulo 1 pode ser organizado em quatro perguntas:</p>
<ol>
<li><strong>Como Deus se dá a conhecer?</strong> Razão natural (aula 6), Revelação (aula 2), transmitida pela Escritura, pela Tradição e pelo Magistério (aula 3), sintetizada no Credo (aulas 4–5).</li>
<li><strong>Quem é Deus e o que ele fez?</strong> Trindade e criação (aulas 5 e 8), Encarnação e Redenção (aula 7).</li>
<li><strong>Como a vida divina chega a nós?</strong> Graça (aula 8), Igreja e sacramentos (aula 9).</li>
<li><strong>Como viver e para onde vamos?</strong> Moral e vida eterna (aula 10).</li>
</ol>
<h3>Dez confusões frequentes</h3>
<ol>
<li>"Fé é crer sem razões." — A fé se apoia na autoridade de Deus, e os motivos de credibilidade a tornam razoável (CIC §156).</li>
<li>"O Magistério está acima da Bíblia." — Ele serve à Palavra (CIC §86).</li>
<li>"Tudo o que o Papa diz é infalível." — Há graus de autoridade (aula 4).</li>
<li>"A Trindade são três deuses" ou "três máscaras". — Ambos rejeitados (aula 5).</li>
<li>"Jesus é metade Deus, metade homem." — Verdadeiro Deus e verdadeiro homem (Calcedônia).</li>
<li>"O pecado original é um pecado que eu cometi ao nascer." — Estado contraído (CIC §404).</li>
<li>"Os sacramentos dependem da santidade do padre." — Ex opere operato (CIC §1128).</li>
<li>"Se a intenção é boa, o ato é bom." — Três fontes da moralidade (CIC §1753).</li>
<li>"Criação é uma teoria contra a ciência." — Responde a outra pergunta (CIC §283–284).</li>
<li>"A Igreja ensina que tal pessoa está no inferno." — Nunca o fez.</li>
</ol>
<h3>Como estudar para a prova</h3>
<p>Revise primeiro os cartões pendentes do módulo; depois refaça os questionários em que teve nota abaixo de 90%; por fim, escreva um esquema de uma página para cada pergunta do mapa, citando os parágrafos do Catecismo.</p>`,
  vocabulario: [['Mapa conceitual', 'Esquema que mostra a relação entre os conceitos de um campo.'], ['Analogia da fé', 'Coerência das verdades da fé entre si (CIC §114).']],
  exemplos: '<p>Ligação entre aulas: a doutrina da alma como forma do corpo (aula 8) explica por que a escatologia cristã fala de ressurreição da carne (aula 10), e não só de imortalidade da alma.</p>',
  argumento: { titulo: 'A unidade da doutrina como critério', tag: 'argumento',
    premissas: ['As verdades da fé formam um todo coerente (a "analogia da fé", CIC §114).', 'Uma interpretação que contradiz outra verdade de fé não pode estar correta.'],
    conclusao: 'Logo, a coerência com o conjunto é critério para avaliar a interpretação de uma doutrina particular.',
    nota: 'O mesmo vale para qualquer sistema filosófico: a coerência interna é condição necessária, embora não suficiente, da verdade.' },
  objecoes: [{ objecao: 'Coerência não prova verdade: um romance pode ser coerente e falso.', tag: 'argumento', resposta: 'Correto. A coerência é condição necessária, não suficiente. Por isso o curso combina coerência com exame das fontes e dos argumentos.' }],
  aplicacao: '<p>Desenhe no Caderno o mapa do módulo com as quatro perguntas e ligue ao menos dez conceitos entre si, indicando a aula e o parágrafo do Catecismo.</p>',
  fonte: { obra: 'Catecismo, Prólogo §13–17 e os "Resumindo" das seções estudadas', link: LINKS.cicPrologo, orientacao: '<p>Leia os "Resumindo" dos capítulos estudados (por exemplo, §44–49, §97–100, §176–184) e verifique se consegue explicar cada frase sem consultar.</p>' },
  perguntas: [
    { p: 'Quais são as quatro perguntas que organizam o módulo?', r: 'Como Deus se dá a conhecer; quem é Deus e o que fez; como a vida divina chega a nós; como viver e para onde vamos.' },
    { p: 'O que é a analogia da fé?', r: 'A coerência das verdades da fé entre si (CIC §114).' },
  ],
  exercicios: [
    mc('Qual afirmação é FALSA segundo a doutrina estudada?', ['A fé tem motivos de credibilidade', 'O Magistério serve à Palavra', 'Toda declaração papal é infalível', 'Os sacramentos agem ex opere operato'], 2, 'Há graus de autoridade; a infalibilidade tem condições estritas.'),
    mc('A ressurreição da carne se relaciona mais diretamente com qual doutrina?', ['Alma como forma do corpo', 'Ex opere operato', 'Motivos de credibilidade', 'Notas teológicas'], 0, 'A pessoa é unidade de corpo e alma.'),
    mc('"Analogia da fé" significa:', ['Comparar religiões', 'A coerência das verdades da fé entre si', 'Uma figura de linguagem', 'Fé baseada em analogias científicas'], 1, 'CIC §114.'),
    mc('A doutrina da criação responde principalmente à pergunta:', ['Como se formaram as estrelas?', 'Por que existe algo, e com que sentido?', 'Qual a idade da Terra?', 'Como funciona a evolução?'], 1, 'As outras perguntas pertencem à ciência (CIC §283–284).'),
    disc('Escolha duas aulas do módulo e mostre como um conceito de uma esclarece um conceito da outra.', ['Escolhe conceitos pertinentes', 'Explica a ligação com precisão', 'Cita fontes', 'Texto claro'])],
  resumo: ['Quatro perguntas organizam o módulo.', 'As confusões mais comuns têm resposta precisa no Catecismo.', 'Coerência é critério necessário, não suficiente.'],
  referencias: [{ texto: 'Catecismo, Prólogo.', link: LINKS.cicPrologo }, { texto: 'Compêndio do Catecismo.', link: LINKS.compendio }],
  revisao: [['Analogia da fé', 'Coerência das verdades da fé entre si (CIC §114).'], ['Quatro perguntas do Módulo 1', 'Conhecer Deus; quem é Deus; como a graça chega; como viver.']],
  avancado: {
    texto: `<h3>Sistematizar como um teólogo</h3>
<p>A teologia sistemática organiza as doutrinas em tratados: De Deo uno, De Deo trino, De Deo creante, De Verbo incarnato, De gratia, De Ecclesia, De sacramentis, De novissimis. Essa divisão, fixada nos manuais pós-tridentinos, ainda estrutura muitos cursos de teologia ${tag('fato')}. A Suma de Tomás segue outro plano: Deus e a saída das criaturas (Parte I), o movimento da criatura racional para Deus (Parte II) e Cristo como caminho (Parte III); comentadores como Marie-Dominique Chenu descreveram esse plano como <em>exitus-reditus</em> (saída e retorno) ${tag('interpretacao')}.</p>
<h3>A "hierarquia das verdades"</h3>
<p>O Vaticano II (Unitatis Redintegratio 11) lembra que há uma "ordem ou hierarquia" das verdades da doutrina católica, segundo sua relação com o fundamento da fé. Isso não significa que algumas sejam opcionais, mas que se articulam em torno de um centro: o mistério de Deus trino revelado em Cristo ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Concílio Vaticano II, Unitatis Redintegratio, §11.' }, { texto: 'M.-D. Chenu, Introdução ao estudo de Santo Tomás de Aquino (1950), sobre o plano da Suma.' }],
    exercicios: [
      mc('O esquema "exitus-reditus" descreve:', ['O plano da Suma Teológica, segundo comentadores', 'A divisão do Catecismo', 'Um concílio', 'A liturgia das horas'], 0, 'Saída das criaturas de Deus e retorno a ele.'),
      mc('A "hierarquia das verdades" (UR 11) significa que:', ['Algumas verdades são opcionais', 'As verdades se articulam segundo sua relação com o fundamento da fé', 'Só o Credo é obrigatório', 'Não há dogmas'], 1, 'Não é licença para descartar verdades.'),
      mc('"De Verbo incarnato" é o tratado sobre:', ['A Trindade', 'Cristo, o Verbo encarnado', 'A Igreja', 'Os anjos'], 1, 'Cristologia.'),
      disc('Proponha um plano pessoal de estudo da teologia sistemática para os próximos dois anos, justificando a ordem dos tratados.', ['Ordem justificada', 'Relaciona com o resto do curso', 'Inclui fontes primárias', 'Realista'])],
  },
}),

avaliacao('m1-12', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>A prova reúne questões objetivas de cada aula do módulo e questões discursivas de síntese. Não basta memorizar: as discursivas pedem que você relacione conceitos, cite fontes e enfrente objeções.</p>
<h3>Antes de começar</h3>
<ul><li>Faça a aula de revisão geral.</li><li>Revise os cartões pendentes.</li><li>Reserve um bloco de tempo sem interrupções e não consulte as aulas durante as objetivas.</li></ul>`,
[
  disc('Escreva um ensaio de 30 a 50 linhas: "Como, segundo a doutrina católica, Deus se dá a conhecer ao ser humano?" Percorra razão natural, Revelação, Escritura, Tradição e Magistério e responda a uma objeção.', ['Distingue conhecimento natural e Revelação', 'Explica o tripé Escritura–Tradição–Magistério', 'Cita corretamente ao menos cinco parágrafos do Catecismo', 'Responde a uma objeção séria', 'Texto organizado e claro']),
  disc('Escolha uma das doutrinas do módulo (Trindade, Encarnação, pecado original, sacramentos ou inferno) e escreva o steelman da principal objeção contra ela, seguido da melhor resposta que você conhece.', ['Expõe a doutrina com precisão', 'Objeção na versão mais forte', 'Resposta coerente', 'Avaliação honesta do resultado']),
]),
];
