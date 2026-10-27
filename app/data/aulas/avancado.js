// Aprofundamento avançado de cada aula completa: debate acadêmico, termos no original,
// fontes mais difíceis e os melhores adversários. Exigido para concluir a aula no nível avançado.
import { tag, LINKS } from '../fontes.js';

export const AVANCADO = {
'm1-1': {
  texto: `
<h3>A teologia é ciência? A resposta de Tomás e seus limites</h3>
<p>Na Suma I, q. 1, a. 2, Tomás pergunta se a <em>sacra doctrina</em> é ciência. Para Aristóteles (Analíticos Posteriores), ciência (<em>epistêmē</em>, em latim <em>scientia</em>) é conhecimento demonstrativo a partir de princípios evidentes. Tomás responde com a teoria da <strong>subalternação</strong>: certas ciências partem de princípios evidentes numa ciência superior — a ótica parte da geometria, a música da aritmética. A teologia partiria de princípios evidentes na ciência que Deus e os bem-aventurados têm; para nós, esses princípios são os <strong>artigos de fé</strong> ${tag('argumento')}.</p>
<p>A objeção clássica: na subalternação humana, o músico <em>pode</em> aprender aritmética e ver por si a evidência dos princípios; o teólogo, nesta vida, não pode ver a evidência dos artigos de fé. Logo a analogia seria imperfeita. Comentadores tomistas responderam distinguindo graus de subalternação; o debate continua entre especialistas ${tag('debate')}.</p>
<p>O artigo 8 pergunta se esta doutrina é "argumentativa". A resposta distingue: a teologia não <em>prova</em> seus princípios (os artigos de fé), mas argumenta a partir deles e responde às objeções; diante de quem nega tudo, só pode mostrar que as objeções não são demonstrativas. Este é o modelo de racionalidade que o curso adota ${tag('argumento')}.</p>
<h3>Vocabulário de origem</h3>
<p>Agostinho (Cidade de Deus VI, 5) relata a divisão do erudito romano Varrão em três teologias: <em>mítica</em> (dos poetas), <em>física</em> ou natural (dos filósofos) e <em>civil</em> (do culto da cidade) ${tag('fato')}. A expressão "teologia natural" vem daí. No século XX, o teólogo protestante Karl Barth rejeitou a teologia natural (resposta "Não!" a Emil Brunner, 1934), por julgá-la uma tentativa humana de alcançar Deus sem a Revelação. O Vaticano I, ao contrário, define a possibilidade do conhecimento natural de Deus ${tag('debate')}.</p>
<h3>Termos para dominar</h3>
<ul><li><em>praeambula fidei</em>: verdades acessíveis à razão que a fé pressupõe (a existência de Deus, por exemplo).</li>
<li><em>articuli fidei</em>: verdades que só a Revelação dá a conhecer.</li>
<li><em>auctoritas</em>: na escolástica, citação de uma fonte reconhecida. Tomás diz que o argumento de autoridade fundado na razão humana é o mais fraco, e o fundado na Revelação, o mais forte (q. 1, a. 8, resposta à 2ª objeção).</li></ul>`,
  leituras: [{ texto: 'Tomás de Aquino, Suma Teológica I, q. 1, a. 1–10 (leia os artigos 2 e 8 com objeções e respostas).', link: LINKS.sumaQ1 }, { texto: 'Agostinho, A Cidade de Deus, livro VI, cap. 5.' }],
  exercicios: [
    { tipo: 'mc', enunciado: 'Na teoria da subalternação, os princípios da teologia correspondem a:', opcoes: ['Axiomas da geometria', 'Os artigos de fé', 'As conclusões da física', 'Opiniões dos Padres'], correta: 1, explicacao: 'Tomás compara: como a música recebe princípios da aritmética, a teologia recebe os artigos de fé da ciência de Deus.' },
    { tipo: 'mc', enunciado: 'A divisão "mítica, natural e civil" da teologia é atribuída a:', opcoes: ['Aristóteles', 'Varrão, relatado por Agostinho', 'Tomás de Aquino', 'Karl Barth'], correta: 1, explicacao: 'Agostinho a relata em A Cidade de Deus VI, 5.' },
    { tipo: 'mc', enunciado: 'Segundo Suma I, q. 1, a. 8, diante de quem nega todos os artigos de fé, a teologia pode:', opcoes: ['Demonstrar a Trindade', 'Mostrar que as objeções contra a fé não são demonstrações', 'Recusar-se a argumentar', 'Recorrer só à autoridade humana'], correta: 1, explicacao: 'Não se demonstram os princípios, mas se resolvem as objeções, pois verdade não contradiz verdade.' },
    { tipo: 'disc', enunciado: 'Reconstrua a analogia da subalternação, apresente a objeção mais forte contra ela e avalie se a teologia pode ser chamada de "ciência" em sentido aristotélico, em sentido moderno ou em nenhum dos dois.', criterios: ['Expõe a noção aristotélica de ciência', 'Reconstrói a analogia com precisão', 'Apresenta a objeção sem caricatura', 'Distingue os sentidos de "ciência"', 'Conclusão justificada'] },
  ],
},
'm1-2': {
  texto: `
<h3>Três modelos de racionalidade da fé</h3>
<p>O debate contemporâneo em epistemologia da religião ajuda a situar a posição católica ${tag('debate')}:</p>
<ol>
<li><strong>Evidencialismo</strong>. W. K. Clifford, em "A ética da crença" (1877), sustenta que é sempre errado crer com evidência insuficiente. Aplicado à religião, exige provas proporcionais à crença.</li>
<li><strong>Epistemologia reformada</strong>. Alvin Plantinga (Warranted Christian Belief, 2000) argumenta que a crença em Deus pode ser "propriamente básica", como a crença na existência de outras mentes, e justificada sem argumento, se produzida por faculdades funcionando bem.</li>
<li><strong>Posição do Vaticano I e do Catecismo</strong>. A fé não se baseia na evidência intrínseca dos mistérios, mas na autoridade de Deus; os motivos de credibilidade tornam o assentimento razoável. A constituição Dei Filius (1870) fala de um obséquio "conforme à razão", ecoando Romanos 12,1 ${tag('doutrina')}.</li>
</ol>
<p>Note a diferença: a posição católica não é evidencialista (os mistérios não são provados) nem dispensa razões (rejeita o fideísmo). É uma terceira via, que exige o estudo dos motivos de credibilidade — tarefa dos Degraus 5 e 7.</p>
<h3>Newman: como pessoas reais chegam à certeza</h3>
<p>Na Gramática do Assentimento (1870), John Henry Newman distingue o assentimento <em>nocional</em> (a proposições abstratas) do <em>real</em> (a realidades concretas que nos tocam) e descreve a inferência informal: muitas probabilidades convergentes que, juntas, justificam certeza, como no juízo de um médico ou de um juiz. A faculdade que avalia essa convergência ele chama de <strong>sentido ilativo</strong> ${tag('interpretacao')}. Críticos observam que o critério é difícil de controlar publicamente.</p>
<h3>A definição escolástica de crer</h3>
<p>Tomás (Suma II-II, q. 2, a. 1) adota de Agostinho a fórmula <em>credere est cum assensione cogitare</em>: crer é pensar com assentimento. A inteligência adere firmemente, como na ciência, mas sem ter a visão da evidência, como na opinião; por isso a vontade intervém ${tag('argumento')}.</p>`,
  leituras: [{ texto: 'Concílio Vaticano I, constituição Dei Filius (1870), caps. 3 e 4 (Denzinger-Hünermann, DH 3008–3020).' }, { texto: 'Tomás de Aquino, Suma II-II, q. 1–2.' }, { texto: 'Newman, Gramática do Assentimento, caps. 4 e 9 (sentido ilativo).' }],
  exercicios: [
    { tipo: 'mc', enunciado: '"É sempre errado, em todo lugar e para qualquer pessoa, crer com evidência insuficiente" resume a posição de:', opcoes: ['Plantinga', 'Clifford', 'Newman', 'Tomás'], correta: 1, explicacao: 'É a tese de W. K. Clifford (1877), núcleo do evidencialismo.' },
    { tipo: 'mc', enunciado: 'Para Plantinga, a crença em Deus pode ser:', opcoes: ['Propriamente básica', 'Sempre irracional', 'Uma conclusão científica', 'Um sentimento sem conteúdo'], correta: 0, explicacao: 'Justificada sem argumento, como outras crenças básicas, se produzida por faculdades que funcionam bem.' },
    { tipo: 'mc', enunciado: 'O "sentido ilativo", em Newman, é:', opcoes: ['Uma prova matemática', 'A capacidade de avaliar a convergência de probabilidades até a certeza', 'Um dogma', 'O mesmo que fé'], correta: 1, explicacao: 'É a faculdade do juízo na inferência informal.' },
    { tipo: 'disc', enunciado: 'Compare evidencialismo, epistemologia reformada e a posição do Vaticano I. Qual delas responde melhor a um cético inteligente? Justifique, reconhecendo a principal fraqueza da posição escolhida.', criterios: ['Expõe com precisão as três posições', 'Identifica o que cada uma exige como justificação', 'Escolhe e justifica', 'Admite a fraqueza mais séria da própria escolha'] },
  ],
},
'm1-3': {
  texto: `
<h3>O critério de Lérins e a teoria do desenvolvimento</h3>
<p>Vicente de Lérins (Commonitorium, 434) propôs o critério da fé católica: o que foi crido "em toda parte, sempre e por todos" (<em>quod ubique, quod semper, quod ab omnibus</em>) ${tag('fato')}. O mesmo texto admite progresso da doutrina, desde que seja crescimento "no mesmo sentido", como o corpo que cresce sem se tornar outro.</p>
<p>Newman, no Ensaio sobre o Desenvolvimento da Doutrina Cristã (1845), propôs sete "notas" para distinguir desenvolvimento de corrupção — entre elas preservação do tipo, continuidade de princípios, poder de assimilação e vigor duradouro ${tag('interpretacao')}. A obra acompanhou sua passagem do anglicanismo ao catolicismo e tornou-se referência no debate sobre como dogmas definidos séculos depois (por exemplo, a Imaculada Conceição, em 1854) se relacionam com a Revelação encerrada com os Apóstolos.</p>
<h3>Trento: "em parte... em parte"?</h3>
<p>Um esboço do decreto do Concílio de Trento (1546) dizia que a Revelação está "em parte" (<em>partim</em>) nos livros escritos e "em parte" nas tradições; o texto final diz apenas "nos livros escritos <em>e</em> nas tradições não escritas" ${tag('fato')}. O teólogo Josef Rupert Geiselmann (anos 1950) concluiu que o concílio quis deixar aberta a tese da "suficiência material" da Escritura; outros historiadores contestaram essa leitura ${tag('debate')}. A Dei Verbum (1965) evitou decidir a questão e falou de uma só fonte com dois modos de transmissão.</p>
<h3>Sensus fidei</h3>
<p>A constituição Lumen Gentium (§12) ensina que a totalidade dos fiéis não pode enganar-se na fé quando manifesta consenso universal em matéria de fé e moral (<em>sensus fidei</em>) ${tag('doutrina')}. É um terceiro elemento, ao lado do Magistério e da teologia, que o estudante precisa conhecer para não reduzir a Tradição a documentos oficiais.</p>`,
  leituras: [{ texto: 'Vicente de Lérins, Commonitorium, caps. 2 e 23.' }, { texto: 'Newman, Ensaio sobre o Desenvolvimento da Doutrina Cristã, parte II, cap. 5 (as notas).' }, { texto: 'Concílio de Trento, sessão IV (1546), decreto sobre os livros sagrados e as tradições (DH 1501–1505).' }],
  exercicios: [
    { tipo: 'mc', enunciado: '"Quod ubique, quod semper, quod ab omnibus" é o critério de:', opcoes: ['Tomás de Aquino', 'Vicente de Lérins', 'Lutero', 'Newman'], correta: 1, explicacao: 'Commonitorium (434).' },
    { tipo: 'mc', enunciado: 'A controvérsia "partim... partim" diz respeito a:', opcoes: ['O número de sacramentos', 'A relação entre Escritura e Tradição no decreto de Trento', 'A data da Páscoa', 'O Filioque'], correta: 1, explicacao: 'Trata da mudança do esboço ("em parte... em parte") para o texto final ("e").' },
    { tipo: 'mc', enunciado: 'Para Newman, um desenvolvimento genuíno da doutrina se distingue da corrupção por:', opcoes: ['Ser aprovado pela maioria', 'Um conjunto de "notas", como preservação do tipo e continuidade de princípios', 'Ser mais antigo', 'Estar explícito na Bíblia'], correta: 1, explicacao: 'São as sete notas do Ensaio de 1845.' },
    { tipo: 'disc', enunciado: 'Escolha um dogma definido muito depois da era apostólica e avalie, com as notas de Newman e o critério de Lérins, se ele é desenvolvimento ou acréscimo. Apresente também a melhor objeção protestante ou ortodoxa.', criterios: ['Escolhe um caso pertinente e o situa historicamente', 'Aplica corretamente Lérins e Newman', 'Apresenta a objeção mais forte', 'Conclusão justificada e honesta'] },
  ],
},
'm1-4': {
  texto: `
<h3>Notas teológicas: medir o peso de cada afirmação</h3>
<p>A teologia escolar classifica as afirmações por "notas teológicas": <em>de fide</em> (dogma definido), <em>sententia fidei proxima</em>, <em>theologice certa</em>, <em>sententia communis</em>, <em>probabilis</em> etc. O manual de Ludwig Ott (Grundriss der katholischen Dogmatik, 1952, com traduções em várias línguas) indica a nota de cada tese ${tag('fato')}. As notas não são um documento do Magistério, e sua aplicação a casos concretos é discutida, mas ensinam a perguntar sempre: "com que grau de certeza isto é ensinado?" ${tag('interpretacao')}.</p>
<h3>Três categorias da Profissão de Fé</h3>
<p>Com o motu proprio Ad tuendam fidem (1998), a Congregação para a Doutrina da Fé publicou uma nota doutrinal explicando três categorias de verdades: (1) as divinamente reveladas, cridas com fé divina e católica; (2) as propostas de modo definitivo pela Igreja, ainda que não como reveladas, que devem ser firmemente aceitas; (3) os ensinamentos do magistério ordinário não definitivos, aos quais se deve religioso obséquio da inteligência e da vontade ${tag('doutrina')}.</p>
<h3>O teólogo e o Magistério</h3>
<p>A instrução Donum Veritatis (1990) trata da vocação do teólogo: reconhece que ele pode ter dificuldades com ensinamentos não definitivos e indica como expressá-las, distinguindo isso do "dissenso" público organizado ${tag('doutrina')}. Saber ler esses documentos evita dois erros: tratar toda frase papal como dogma ou tratar todo ensinamento como opinião.</p>
<h3>Como citar como um especialista</h3>
<p>Em trabalhos acadêmicos, cite o Catecismo por parágrafo (CIC 159), os concílios pelo documento e número (DV 10; LG 12) e os textos do Magistério antigo pelo Denzinger-Hünermann (DH 3008). Assim qualquer leitor confere a fonte em qualquer edição.</p>`,
  leituras: [{ texto: 'Congregação para a Doutrina da Fé, Nota doutrinal ilustrativa da fórmula conclusiva da Professio fidei (1998).' }, { texto: 'Congregação para a Doutrina da Fé, Donum Veritatis (1990), §§ 21–41.' }, { texto: 'Ludwig Ott, Grundriss der katholischen Dogmatik, introdução (notas teológicas), em tradução.' }],
  exercicios: [
    { tipo: 'mc', enunciado: 'Uma verdade proposta de modo definitivo pela Igreja, mas não como divinamente revelada, pertence a qual categoria da nota de 1998?', opcoes: ['Primeira', 'Segunda', 'Terceira', 'Nenhuma'], correta: 1, explicacao: 'A segunda categoria: deve ser firmemente aceita e mantida.' },
    { tipo: 'mc', enunciado: '"Sententia communis" indica:', opcoes: ['Dogma definido', 'Opinião comum entre teólogos, não definida', 'Heresia', 'Revelação privada'], correta: 1, explicacao: 'É uma das notas inferiores à certeza de fé.' },
    { tipo: 'mc', enunciado: 'A forma correta de citar um texto do Vaticano I por uma edição de referência é:', opcoes: ['"Vaticano I, página 45"', '"DH 3008"', '"Site católico X"', '"Como diz a Igreja"'], correta: 1, explicacao: 'O número do Denzinger-Hünermann é o mesmo em qualquer edição.' },
    { tipo: 'disc', enunciado: 'Escolha três afirmações sobre um mesmo tema (por exemplo, sobre Maria, o inferno ou a pena de morte), localize suas fontes e classifique cada uma por categoria e grau de autoridade, justificando.', criterios: ['Localiza fontes primárias corretas', 'Aplica as categorias de 1998', 'Justifica cada classificação', 'Reconhece casos discutidos'] },
  ],
},
'm1-5': {
  texto: `
<h3>O vocabulário trinitário: ousia, hypostasis, persona</h3>
<p>No século IV, os Padres Capadócios (Basílio, Gregório de Nazianzo, Gregório de Nissa) fixaram a fórmula grega: uma <em>ousia</em> (essência) e três <em>hypostaseis</em> (subsistências). No Ocidente dizia-se <em>una substantia, tres personae</em>. Como <em>hypostasis</em> e <em>substantia</em> são etimologicamente equivalentes, houve mal-entendidos entre gregos e latinos até se perceber que diziam o mesmo ${tag('fato')}.</p>
<p>Boécio (Contra Eutyches) definiu pessoa como "substância individual de natureza racional" (<em>naturae rationalis individua substantia</em>). Tomás aceita a definição, mas explica que, em Deus, pessoa significa uma <strong>relação subsistente</strong> (Suma I, q. 29, a. 4): Pai, Filho e Espírito distinguem-se apenas pelas relações de origem — paternidade, filiação, espiração ${tag('argumento')}.</p>
<h3>As quatro negações de Calcedônia</h3>
<p>A definição de Calcedônia (451) confessa Cristo em duas naturezas "sem confusão, sem mudança, sem divisão, sem separação" ${tag('doutrina')}. As duas primeiras excluem o monofisismo (fusão das naturezas); as duas últimas, o nestorianismo (duas pessoas). Note o método: o dogma delimita o mistério por negações, sem pretender explicá-lo inteiramente.</p>
<h3>O Filioque</h3>
<p>O acréscimo "e do Filho" ao Credo aparece no III Concílio de Toledo (589), difunde-se no Ocidente e é adotado em Roma no século XI; tornou-se ponto de divergência com o Oriente. O Concílio de Florença (1439) buscou uma fórmula de união ("do Pai pelo Filho") ${tag('fato')}. O Catecismo, §246–248, apresenta as duas tradições como complementares quando bem entendidas ${tag('doutrina')}.</p>
<h3>O debate analítico contemporâneo</h3>
<p>Filósofos analíticos discutem o "problema lógico da Trindade": como afirmar "o Pai é Deus", "o Filho é Deus", "o Pai não é o Filho" e "há um só Deus" sem contradição, se "é" significar identidade? Propostas incluem a "identidade relativa" (inspirada em Peter Geach), a "Trindade social" e modelos "latinos" de uma só substância ${tag('debate')}. Nenhuma é doutrina da Igreja; são tentativas filosóficas de mostrar consistência.</p>`,
  leituras: [{ texto: 'Tomás de Aquino, Suma I, q. 27–29 (processões, relações, pessoa).' }, { texto: 'Boécio, Contra Eutyches et Nestorium, cap. 3 (definição de pessoa).' }, { texto: 'Definição do Concílio de Calcedônia (DH 300–303).' }],
  exercicios: [
    { tipo: 'mc', enunciado: 'Em Deus, segundo Tomás, "pessoa" significa:', opcoes: ['Uma parte da essência divina', 'Uma relação subsistente', 'Um modo de aparecer', 'Uma criatura excelente'], correta: 1, explicacao: 'Suma I, q. 29, a. 4.' },
    { tipo: 'mc', enunciado: '"Sem confusão, sem mudança" exclui principalmente:', opcoes: ['O nestorianismo', 'O monofisismo', 'O arianismo', 'O modalismo'], correta: 1, explicacao: 'Rejeita a fusão das naturezas; "sem divisão, sem separação" exclui o nestorianismo.' },
    { tipo: 'mc', enunciado: 'A definição de pessoa como "substância individual de natureza racional" é de:', opcoes: ['Agostinho', 'Boécio', 'Anselmo', 'Descartes'], correta: 1, explicacao: 'Boécio, Contra Eutyches.' },
    { tipo: 'disc', enunciado: 'Formule o "problema lógico da Trindade" em quatro proposições, mostre onde está a aparente contradição e avalie uma das soluções (relação subsistente, identidade relativa ou Trindade social), incluindo a objeção mais forte contra ela.', criterios: ['Formula o problema com precisão lógica', 'Identifica a premissa decisiva (o sentido de "é")', 'Expõe uma solução com fidelidade', 'Apresenta objeção séria', 'Distingue doutrina de hipótese filosófica'] },
  ],
},
'm1-6': {
  texto: `
<h3>A estrutura da questão 2</h3>
<p>Tomás pergunta primeiro se a existência de Deus é evidente por si (a. 1). Responde com uma distinção: é evidente em si (<em>per se nota secundum se</em>), porque em Deus essência e ser coincidem, mas não para nós (<em>quoad nos</em>), que não conhecemos a essência divina ${tag('argumento')}. Por isso é preciso demonstrar. No a. 2 distingue a demonstração <em>propter quid</em> (pela causa) da demonstração <em>quia</em> (pelos efeitos): de Deus só é possível a segunda ${tag('argumento')}.</p>
<h3>Séries "per se" e "per accidens"</h3>
<p>Uma objeção comum diz: "e se a série de causas for infinita?". Tomás não nega que uma série <em>acidentalmente</em> ordenada possa ser infinita — pai, avô, bisavô —, pois cada membro não precisa do anterior para agir agora. As vias exigem uma série <em>essencialmente</em> ordenada, em que cada membro só causa enquanto é causado agora (a mão move a vara que move a pedra). Nessa, sem um primeiro, não há movimento algum ${tag('argumento')}. Por isso Tomás pôde sustentar, no opúsculo Sobre a eternidade do mundo (c. 1270), que a razão sozinha não demonstra que o mundo teve começo: as vias não dependem disso ${tag('fato')}.</p>
<h3>Três famílias de argumento cosmológico</h3>
<ul>
<li><strong>Tomista</strong>: séries per se, ato e potência.</li>
<li><strong>Leibniziano</strong>: princípio de razão suficiente (Monadologia §32–38); pede a razão da série inteira de seres contingentes.</li>
<li><strong>Kalam</strong>: tudo o que começa a existir tem causa; o universo começou; logo tem causa. Vem de teólogos islâmicos como al-Ghazali e foi relançado por William Lane Craig (1979) ${tag('fato')}.</li>
</ul>
<h3>Os melhores adversários</h3>
<p>Hume (Diálogos, parte IX) objeta que a ideia de um "ser necessário" não tem sentido, pois tudo o que se concebe existente pode ser concebido não existente. Kant (Crítica da Razão Pura, Dialética) sustenta que o argumento cosmológico depende do ontológico. No debate radiofônico da BBC em 1948, Bertrand Russell respondeu a Frederick Copleston que o universo simplesmente existe, sem exigir explicação. Mackie (The Miracle of Theism, 1982) sistematiza essas objeções ${tag('debate')}. O estudante avançado deve conseguir formular cada uma delas na versão mais forte antes de responder.</p>`,
  leituras: [{ texto: 'Tomás de Aquino, Suma I, q. 2, a. 1–3 (leia as objeções de cada artigo).', link: LINKS.sumaQ2 }, { texto: 'Hume, Diálogos sobre a Religião Natural, parte IX.' }, { texto: 'Transcrição do debate Russell–Copleston (BBC, 1948).' }],
  exercicios: [
    { tipo: 'mc', enunciado: 'Segundo Tomás, a existência de Deus é:', opcoes: ['Evidente para todos', 'Evidente em si, mas não para nós', 'Indemonstrável', 'Conhecida só pela fé'], correta: 1, explicacao: 'Suma I, q. 2, a. 1: per se nota secundum se, mas não quoad nos.' },
    { tipo: 'mc', enunciado: 'A série "a mão move a vara que move a pedra" é exemplo de série:', opcoes: ['Acidentalmente ordenada', 'Essencialmente ordenada', 'Temporal infinita', 'Lógica'], correta: 1, explicacao: 'Cada membro só causa enquanto é causado agora.' },
    { tipo: 'mc', enunciado: 'Para Tomás, a razão sozinha demonstra que o mundo teve começo?', opcoes: ['Sim', 'Não; o começo é conhecido pela Revelação', 'Sim, pela terceira via', 'A questão não lhe interessava'], correta: 1, explicacao: 'Sobre a eternidade do mundo (c. 1270).' },
    { tipo: 'mc', enunciado: 'O argumento "tudo o que começa a existir tem causa; o universo começou" pertence à família:', opcoes: ['Tomista', 'Leibniziana', 'Kalam', 'Ontológica'], correta: 2, explicacao: 'É o argumento kalam.' },
    { tipo: 'disc', enunciado: 'Escreva a objeção de Hume (Diálogos IX) ou a de Russell na versão mais forte possível (steelman) e responda a partir da distinção entre séries per se e per accidens. Diga honestamente se a resposta convence você e por quê.', criterios: ['Objeção na versão mais forte, fiel ao autor', 'Explica a distinção per se / per accidens', 'Aplica a distinção corretamente', 'Avaliação pessoal justificada'] },
  ],
},
'm3-1': {
  texto: `
<h3>Do método de leitura à hermenêutica</h3>
<p>O método de Adler supõe que é possível compreender o autor "como ele se entendeu". A hermenêutica filosófica discute esse ideal ${tag('debate')}:</p>
<ul>
<li><strong>Schleiermacher</strong> (início do século XIX): interpretação como reconstrução do pensamento do autor; formula o <em>círculo hermenêutico</em> — o todo se entende pelas partes e as partes pelo todo.</li>
<li><strong>Gadamer</strong> (Verdade e Método, 1960): toda compreensão parte de pré-juízos do leitor; compreender é uma "fusão de horizontes", não uma volta pura ao autor.</li>
<li><strong>Quentin Skinner</strong> ("Meaning and Understanding in the History of Ideas", 1969): para entender um texto é preciso saber o que o autor <em>fazia</em> ao escrevê-lo, em seu contexto; critica o anacronismo e a "mitologia das doutrinas", que atribui a autores antigos respostas a perguntas que eles não faziam.</li>
<li><strong>Leo Strauss</strong> (Perseguição e a Arte de Escrever, 1952): sob perseguição, alguns autores escreveram de modo esotérico, dizendo nas entrelinhas o que não podiam dizer abertamente. A tese é fecunda e muito contestada.</li>
</ul>
<h3>Princípio de caridade e steelman</h3>
<p>O "princípio de caridade" (nome dado por N. L. Wilson em 1959 e desenvolvido por Donald Davidson) manda interpretar o autor de modo a maximizar a verdade e a coerência do que ele diz, antes de lhe atribuir erros grosseiros ${tag('argumento')}. O <em>steelman</em> é seu uso no debate: reconstruir a posição adversária na forma mais forte antes de criticá-la. É o oposto do espantalho e é a marca de quem domina um assunto.</p>
<h3>Anacronismo: o erro mais comum do estudante intermediário</h3>
<p>Exemplos: chamar Platão de "idealista" no sentido de Berkeley; ler "liberdade" em Agostinho como "autonomia" kantiana; dizer que Aristóteles era "empirista" no sentido de Locke. A pergunta de controle é: <em>que pergunta este autor tentava responder, e com que vocabulário?</em></p>`,
  leituras: [{ texto: 'Quentin Skinner, "Meaning and Understanding in the History of Ideas", History and Theory 8 (1969).' }, { texto: 'Hans-Georg Gadamer, Verdade e Método (1960), parte II, sobre o círculo hermenêutico e a fusão de horizontes.' }, { texto: 'A.-D. Sertillanges, A Vida Intelectual (1920).' }],
  exercicios: [
    { tipo: 'mc', enunciado: '"Fusão de horizontes" é expressão de:', opcoes: ['Adler', 'Gadamer', 'Skinner', 'Strauss'], correta: 1, explicacao: 'Gadamer, Verdade e Método (1960).' },
    { tipo: 'mc', enunciado: 'Atribuir a Aristóteles uma posição sobre os "direitos humanos" no sentido moderno é exemplo de:', opcoes: ['Princípio de caridade', 'Anacronismo', 'Steelman', 'Leitura sintópica'], correta: 1, explicacao: 'É a "mitologia das doutrinas" que Skinner critica.' },
    { tipo: 'mc', enunciado: 'O steelman consiste em:', opcoes: ['Atacar a pessoa', 'Reconstruir a posição adversária na versão mais forte antes de criticá-la', 'Concordar com tudo', 'Ignorar objeções'], correta: 1, explicacao: 'É o oposto do espantalho.' },
    { tipo: 'disc', enunciado: 'Escolha um autor de quem você discorda e escreva o steelman de uma tese dele em 10 a 15 linhas, de modo que um defensor dessa tese a reconheça como fiel. Depois, em 5 linhas, diga onde está sua divergência.', criterios: ['A tese é apresentada com fidelidade e força', 'Usa o vocabulário do próprio autor, sem anacronismo', 'A divergência é precisa e argumentada', 'Distingue compreender de concordar'] },
  ],
},
};
