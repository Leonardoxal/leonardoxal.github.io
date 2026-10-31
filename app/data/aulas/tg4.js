// Teologia IV — Moral e espiritualidade (fase teológica, degrau 1).
// Liberdade e consciência; lei natural, virtudes e pecado; os mandamentos; oração e vida espiritual.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'tg4-1', titulo: 'Liberdade, atos humanos e consciência', duracao: '150 min',
  aprendera: ['Explicar a liberdade segundo a moral católica', 'Analisar um ato pelas três fontes da moralidade', 'Explicar a consciência e o dever de formá-la', 'Distinguir consciência reta e consciência errônea'],
  prereq: ['Teologia III (módulo T3)'],
  explicacao: `
<h3>O problema</h3>
<p>Se devo seguir minha consciência, qualquer escolha sincera é boa?</p>
<h3>Liberdade</h3>
<p>A liberdade é o poder, radicado na razão e na vontade, de agir ou não agir, e de assumir a responsabilidade por seus atos; ela atinge sua perfeição quando se ordena a Deus (CIC 1731) ${tag('doutrina')}. Escolher o mal é abuso da liberdade, que conduz à escravidão do pecado (CIC 1733) ${tag('doutrina')}.</p>
<h3>As fontes da moralidade</h3>
<p>Um ato é avaliado pelo objeto escolhido, pela intenção e pelas circunstâncias (CIC 1750) ${tag('doutrina')}. Uma boa intenção não torna bom um ato cujo objeto é mau: o fim não justifica os meios (CIC 1753) ${tag('doutrina')}. A encíclica Veritatis splendor (1993) reafirmou a existência de atos intrinsecamente maus ${tag('fato')}.</p>
<h3>Consciência</h3>
<p>A Gaudium et spes 16 chama a consciência de "o centro mais secreto e o santuário do homem", onde ele está a sós com Deus ${tag('doutrina')}. O homem deve sempre obedecer ao juízo certo de sua consciência (CIC 1790) ${tag('doutrina')}. Mas a consciência deve ser formada pela Palavra de Deus, pelo ensinamento da Igreja e pela prudência (CIC 1783–1785) ${tag('doutrina')}. A ignorância culpável não escusa; a invencível diminui ou elimina a responsabilidade (CIC 1791–1793) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Objeto', 'O que se escolhe fazer, considerado em si.'],
    ['Intenção', 'O fim que o sujeito busca ao agir.'],
    ['Circunstâncias', 'Elementos secundários que aumentam ou diminuem a bondade ou malícia.'],
    ['Consciência', 'Juízo da razão sobre a qualidade moral de um ato concreto.'],
    ['Ignorância invencível', 'Ignorância que o sujeito não podia superar.'],
  ],
  exemplos: `<p><strong>Mentir para salvar a empresa:</strong> a intenção (manter empregos) pode ser boa, mas o objeto (enganar deliberadamente quem tem direito à verdade) continua mau. As circunstâncias podem diminuir a culpa, mas não tornam boa a mentira. É o caso típico de "o fim não justifica os meios".</p>`,
  contexto: `<p><strong>No mundo:</strong> a defesa da consciência de Thomas More, executado em 1535 por não aceitar a supremacia do rei sobre a Igreja, é exemplo clássico ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 garante a liberdade de consciência e de crença (art. 5º, VI) e a escusa de consciência (art. 5º, VIII) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que seguir a consciência não torna qualquer escolha boa', tag: 'argumento',
    premissas: ['A consciência é um juízo da razão, e a razão pode errar.', 'Quem age contra a consciência certa peca, porque age contra o que julga ser o bem.', 'Quem segue uma consciência errônea por culpa própria é responsável pelo erro.'],
    conclusao: 'Logo, há o dever de seguir a consciência e também o dever de formá-la.',
    nota: 'CIC 1790–1794; Santo Tomás, Suma Teológica I-II, q. 19, a. 5–6.',
  },
  objecoes: [
    { objecao: 'Se a Igreja forma a consciência, ela anula a liberdade de cada um.', tag: 'debate',
      resposta: 'Formar a consciência é oferecer critérios verdadeiros para um juízo que continua pessoal, como o professor forma o raciocínio do aluno sem pensar por ele. Newman, na carta ao duque de Norfolk, brindou "à consciência primeiro e ao papa depois", mostrando que a consciência bem formada e a autoridade não se opõem.' },
  ],
  aplicacao: `<p>Escolha um dilema moral real (do trabalho, da família ou da política) e analise-o pelas três fontes da moralidade, citando o Catecismo.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 1730–1802', link: null,
    orientacao: `<p>Observe a sequência: liberdade, moralidade dos atos, paixões, consciência.</p>`,
  },
  perguntas: [
    { p: 'Quais as três fontes da moralidade?', r: 'Objeto, intenção e circunstâncias.' },
    { p: 'Como a Gaudium et spes chama a consciência?', r: 'O centro mais secreto e o santuário do homem.' },
    { p: 'A ignorância culpável escusa?', r: 'Não.' },
  ],
  exercicios: [
    mc('Uma boa intenção torna bom um objeto mau?', ['Não', 'Sim', 'Às vezes', 'Depende da maioria'], 0, 'CIC 1753.'),
    mc('A Veritatis splendor é de:', ['1993', '1891', '1965', '2015'], 0, 'João Paulo II.'),
    mc('A consciência deve ser:', ['Seguida e formada', 'Ignorada', 'Substituída pela lei civil', 'Só sentida'], 0, 'Dupla obrigação.'),
    mc('Thomas More foi executado em:', ['1535', '1415', '1789', '1610'], 0, 'Consciência.'),
    mc('A liberdade de consciência está no art. 5º, inciso:', ['VI', 'I', 'XI', 'LXXVIII'], 0, 'Constituição.'),
    disc('Analise um dilema pelas três fontes da moralidade.', ['Objeto', 'Intenção', 'Circunstâncias', 'Citações']),
  ],
  resumo: ['Liberdade ordenada ao bem.', 'Objeto, intenção, circunstâncias.', 'O fim não justifica os meios.', 'Consciência: santuário.', 'Seguir e formar.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1730–1802.', livro: 'cic' },
    { texto: 'João Paulo II, Veritatis splendor (1993).', livro: 'jp2-veritatis' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 18–21.', livro: 'suma-i-ii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Fontes', 'Três.'], ['GS 16', 'Santuário.'], ['Ignorância', 'Culpável ou invencível.']],
  avancado: {
    texto: `<h3>O princípio do duplo efeito</h3>
<p>A tradição moral admite agir quando um ato bom produz também um efeito mau não querido, se: o ato em si é bom ou indiferente; o efeito mau não é o meio para o bom; a intenção visa só o efeito bom; e há razão proporcional ${tag('fato')}. O princípio remonta à análise de Tomás sobre a legítima defesa (Suma Teológica II-II, q. 64, a. 7) ${tag('fato')}. Sua aplicação a casos médicos é tema de debate entre moralistas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 64, a. 7.', livro: 'suma-ii-ii' }],
    exercicios: [
      mc('No duplo efeito, o efeito mau pode ser:', ['Previsto, mas não querido', 'O meio para o bom', 'Querido', 'Indiferente sempre'], 0, 'Condição.'),
      mc('A origem do princípio é a análise da:', ['Legítima defesa', 'Usura', 'Mentira', 'Guerra santa'], 0, 'II-II, q. 64.'),
      mc('A razão proporcional exige:', ['Gravidade adequada do motivo', 'Unanimidade', 'Lei civil', 'Nada'], 0, 'Proporção.'),
      disc('Aplique o princípio do duplo efeito a um caso e avalie se as condições se cumprem.', ['Caso', 'Quatro condições', 'Juízo', 'Limites'])],
  },
}),

aula({
  id: 'tg4-2', titulo: 'Lei natural, virtudes e pecado', duracao: '150 min',
  aprendera: ['Explicar a lei natural', 'Distinguir virtudes cardeais e teologais', 'Distinguir pecado mortal e venial', 'Conhecer os pecados capitais'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Existem normas morais válidas para todos os seres humanos, independentemente da cultura?</p>
<h3>Lei natural</h3>
<p>A lei natural é a participação da criatura racional na lei eterna de Deus: a luz da razão pela qual discernimos o bem e o mal (CIC 1954–1955) ${tag('doutrina')}. É universal e imutável em seus princípios, embora sua aplicação exija reflexão (CIC 1956–1957) ${tag('doutrina')}. Paulo fala da lei "escrita nos corações" dos pagãos (Rm 2,14–15) ${tag('fato')}.</p>
<h3>Virtudes</h3>
<p>Virtude é uma disposição habitual e firme para fazer o bem (CIC 1803) ${tag('doutrina')}. As cardeais são prudência, justiça, fortaleza e temperança (CIC 1805) ${tag('doutrina')}; as teologais são fé, esperança e caridade, que têm Deus por objeto (CIC 1812–1813) ${tag('doutrina')}. A lista das cardeais vem da filosofia grega e aparece em Sb 8,7 ${tag('fato')}.</p>
<h3>Pecado</h3>
<p>Para que um pecado seja mortal, requer matéria grave, pleno conhecimento e deliberado consentimento (CIC 1857) ${tag('doutrina')}. O pecado venial enfraquece a caridade sem destruí-la (CIC 1862–1863) ${tag('doutrina')}. Os pecados capitais (soberba, avareza, inveja, ira, luxúria, gula e preguiça) são chamados assim porque geram outros (CIC 1866) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Lei natural', 'Participação da razão humana na lei eterna.'],
    ['Virtude', 'Disposição habitual e firme para o bem.'],
    ['Virtudes cardeais', 'Prudência, justiça, fortaleza e temperança.'],
    ['Virtudes teologais', 'Fé, esperança e caridade.'],
    ['Pecado mortal', 'Matéria grave, pleno conhecimento e consentimento deliberado.'],
  ],
  exemplos: `<p><strong>Os julgamentos de Nuremberg:</strong> os réus alegaram ter cumprido as leis vigentes. A condenação supôs que existe um padrão de justiça acima da lei positiva de um Estado. É o argumento clássico a favor de algo como a lei natural, discutido por juristas até hoje.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Universal dos Direitos Humanos (1948) afirma direitos inerentes a todos os seres humanos; o filósofo católico Jacques Maritain participou dos debates da UNESCO sobre seus fundamentos ${tag('fato')}. <strong>No Brasil:</strong> a discussão sobre direitos fundamentais e dignidade humana ocupa grande parte da doutrina constitucional ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a lei natural é universal', tag: 'argumento',
    premissas: ['A lei natural se funda na natureza humana e na razão.', 'Todos os seres humanos partilham a mesma natureza racional.', 'Logo, seus primeiros princípios valem para todos.'],
    conclusao: 'Logo, a diversidade cultural afeta a aplicação, mas não os princípios da lei natural.',
    nota: 'Santo Tomás, Suma Teológica I-II, q. 94, a. 4.',
  },
  objecoes: [
    { objecao: 'A diversidade das culturas mostra que não há moral universal.', tag: 'debate',
      resposta: 'Diferenças de costume muitas vezes aplicam princípios comuns a situações diferentes. Tomás admite que paixões, maus costumes e ignorância podem obscurecer a lei natural em povos e indivíduos, sem que os primeiros princípios deixem de valer. O debate com o relativismo cultural continua na antropologia e na filosofia.' },
  ],
  aplicacao: `<p>Escolha uma virtude cardeal e uma teologal. Para cada uma, escreva a definição do Catecismo, um exemplo concreto e o vício oposto.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 94', link: null,
    orientacao: `<p>Observe a ordem dos preceitos: conservar o ser, a vida e a geração, conhecer a verdade e viver em sociedade (a. 2).</p>`,
  },
  perguntas: [
    { p: 'O que é a lei natural?', r: 'A participação da criatura racional na lei eterna.' },
    { p: 'Quais as virtudes cardeais?', r: 'Prudência, justiça, fortaleza e temperança.' },
    { p: 'Quais as condições do pecado mortal?', r: 'Matéria grave, pleno conhecimento e deliberado consentimento.' },
  ],
  exercicios: [
    mc('A lei "escrita nos corações" está em:', ['Rm 2,14–15', 'Jo 1,1', 'Gn 3', 'Ap 21'], 0, 'Paulo.'),
    mc('Virtude teologal:', ['Esperança', 'Prudência', 'Temperança', 'Fortaleza'], 0, 'Objeto: Deus.'),
    mc('Pecado que enfraquece sem destruir a caridade:', ['Venial', 'Mortal', 'Original', 'Capital'], 0, 'CIC 1863.'),
    mc('Pecado capital:', ['Preguiça', 'Mentira', 'Furto', 'Homicídio'], 0, 'CIC 1866.'),
    mc('Os preceitos da lei natural estão em:', ['I-II, q. 94', 'I, q. 2', 'III, q. 75', 'II-II, q. 1'], 0, 'Suma.'),
    disc('Apresente uma virtude cardeal e uma teologal com exemplos e vícios opostos.', ['Definições', 'Exemplos', 'Vícios', 'Citações']),
  ],
  resumo: ['Lei natural: razão participa da lei eterna.', 'Cardeais: quatro.', 'Teologais: três.', 'Mortal: três condições.', 'Sete capitais.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1803–1876 e 1949–1960.', livro: 'cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 90–97.', livro: 'suma-i-ii' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II.', livro: 'suma-ii-ii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o trabalho sobre as virtudes', 'Ler a fonte indicada'],
  revisao: [['Lei natural', 'Universal.'], ['Cardeais', 'Quatro.'], ['Mortal', 'Três condições.']],
  avancado: {
    texto: `<h3>A conexão das virtudes</h3>
<p>Tomás sustenta que as virtudes morais perfeitas estão ligadas pela prudência: não se pode ter uma perfeitamente sem as outras (Suma Teológica I-II, q. 65) ${tag('fato')}. Ele também ensina que a caridade é a "forma" de todas as virtudes, porque as ordena ao fim último (II-II, q. 23, a. 8) ${tag('fato')}. A ética das virtudes contemporânea, com autores como Alasdair MacIntyre, retomou esses temas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 65.', livro: 'suma-i-ii' }],
    exercicios: [
      mc('As virtudes morais estão ligadas pela:', ['Prudência', 'Fortaleza', 'Gula', 'Esperança'], 0, 'I-II, q. 65.'),
      mc('A forma das virtudes é a:', ['Caridade', 'Justiça', 'Fé', 'Temperança'], 0, 'II-II, q. 23.'),
      mc('Autor contemporâneo da ética das virtudes:', ['Alasdair MacIntyre', 'Bentham', 'Kant', 'Hume'], 0, 'After Virtue.'),
      disc('Explique a tese da conexão das virtudes e avalie um contraexemplo.', ['Tese', 'Prudência', 'Contraexemplo', 'Juízo'])],
  },
}),

aula({
  id: 'tg4-3', titulo: 'Os mandamentos: amor a Deus e ao próximo', duracao: '150 min',
  aprendera: ['Situar o Decálogo na Aliança', 'Explicar a divisão em duas tábuas', 'Aplicar os mandamentos a questões atuais', 'Relacionar mandamentos e bem-aventuranças'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Os Dez Mandamentos são uma lista de proibições antigas ou uma síntese da vida moral?</p>
<h3>Decálogo e Aliança</h3>
<p>O Decálogo aparece em Ex 20 e Dt 5, no contexto da libertação do Egito e da Aliança ${tag('fato')}. O Catecismo o apresenta como caminho de vida e expressão da lei natural (CIC 2057, 2070) ${tag('doutrina')}.</p>
<h3>Duas tábuas</h3>
<p>Jesus resume a Lei no amor a Deus e ao próximo (Mt 22,37–40) ${tag('fato')}. A tradição catequética divide os mandamentos em duas tábuas: os três primeiros dizem respeito a Deus; os sete seguintes, ao próximo (CIC 2067) ${tag('doutrina')}. A numeração católica segue Agostinho ${tag('fato')}.</p>
<h3>Aplicações</h3>
<p>O quinto mandamento trata da defesa da vida, inclusive da condenação do aborto e da eutanásia (CIC 2270–2283) ${tag('doutrina')}. Em 2018, o papa Francisco alterou o n. 2267 do Catecismo, afirmando que a pena de morte é inadmissível ${tag('fato')}. O sétimo trata da justiça e do destino universal dos bens (CIC 2402–2406) ${tag('doutrina')}. O oitavo trata da verdade, inclusive na comunicação social (CIC 2493–2499) ${tag('doutrina')}.</p>
<h3>Bem-aventuranças</h3>
<p>As bem-aventuranças (Mt 5,3–12) estão no centro da pregação de Jesus e revelam o fim último para o qual os mandamentos orientam (CIC 1716–1729) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Decálogo', 'Os Dez Mandamentos (Ex 20; Dt 5).'],
    ['Duas tábuas', 'Divisão entre deveres para com Deus e para com o próximo.'],
    ['Destino universal dos bens', 'Os bens da terra destinam-se a todos.'],
    ['Bem-aventuranças', 'Promessas de Jesus no Sermão da Montanha.'],
    ['Lei nova', 'A lei do Evangelho, a graça do Espírito Santo.'],
  ],
  exemplos: `<p><strong>O oitavo mandamento nas redes sociais:</strong> compartilhar uma notícia falsa sobre alguém, mesmo sem tê-la inventado, pode ser maledicência ou calúnia (CIC 2477). Verificar a fonte antes de publicar é uma aplicação concreta de um mandamento antigo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a alteração do n. 2267 sobre a pena de morte foi publicada em agosto de 2018 ${tag('fato')}. <strong>No Brasil:</strong> a Constituição proíbe a pena de morte, salvo em caso de guerra declarada (art. 5º, XLVII) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os mandamentos libertam', tag: 'argumento',
    premissas: ['O Decálogo começa com a lembrança da libertação do Egito (Ex 20,2).', 'Os mandamentos protegem bens que tornam a vida humana possível: Deus, a vida, a família, a verdade, os bens.', 'Logo, eles conservam a liberdade recebida.'],
    conclusao: 'Logo, os mandamentos são condição da liberdade, não sua negação.',
    nota: 'CIC 2057.',
  },
  objecoes: [
    { objecao: 'A mudança sobre a pena de morte mostra que a moral católica muda conforme a época.', tag: 'debate',
      resposta: 'A alteração foi apresentada como desenvolvimento a partir da dignidade da pessoa, já presente nos textos de João Paulo II. Teólogos discutem como ela se relaciona com o ensinamento anterior. A distinção entre princípios e juízos prudenciais sobre sua aplicação é central nesse debate.' },
  ],
  aplicacao: `<p>Escolha um mandamento da segunda tábua e escreva uma aplicação atual, com os números do Catecismo e um caso do Brasil.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 2052–2082', link: null,
    orientacao: `<p>Observe a relação entre o Decálogo, a lei natural e a Aliança.</p>`,
  },
  perguntas: [
    { p: 'Onde está o Decálogo?', r: 'Em Ex 20 e Dt 5.' },
    { p: 'Como Jesus resume a Lei?', r: 'No amor a Deus e ao próximo.' },
    { p: 'O que mudou no CIC 2267 em 2018?', r: 'Passou a afirmar que a pena de morte é inadmissível.' },
  ],
  exercicios: [
    mc('A primeira tábua trata dos deveres para com:', ['Deus', 'O próximo', 'O Estado', 'A natureza'], 0, 'CIC 2067.'),
    mc('A numeração católica segue:', ['Agostinho', 'Orígenes', 'Calvino', 'Tomás'], 0, 'Tradição.'),
    mc('O destino universal dos bens liga-se ao:', ['Sétimo mandamento', 'Primeiro', 'Terceiro', 'Sexto'], 0, 'Justiça.'),
    mc('As bem-aventuranças estão em:', ['Mt 5', 'Ex 20', 'Gn 1', 'Ap 1'], 0, 'Sermão da Montanha.'),
    mc('A Constituição admite pena de morte:', ['Só em guerra declarada', 'Para crimes hediondos', 'Nunca', 'Por plebiscito'], 0, 'Art. 5º, XLVII.'),
    disc('Escreva a aplicação atual de um mandamento da segunda tábua.', ['Mandamento', 'Catecismo', 'Caso brasileiro', 'Juízo']),
  ],
  resumo: ['Decálogo e Aliança.', 'Duas tábuas.', 'Amor a Deus e ao próximo.', 'Aplicações atuais.', 'Bem-aventuranças: o fim.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 1716–1729 e 2052–2557.', livro: 'cic' },
    { texto: 'Compêndio do Catecismo da Igreja Católica.', livro: 'compendio-cic' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 100.', livro: 'suma-i-ii' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a aplicação', 'Ler a fonte indicada'],
  revisao: [['Decálogo', 'Ex 20; Dt 5.'], ['Tábuas', '3 e 7.'], ['2018', 'Pena de morte.']],
  avancado: {
    texto: `<h3>Lei antiga e lei nova</h3>
<p>Tomás distingue, na lei antiga, preceitos morais, cerimoniais e judiciais; só os morais permanecem como tais na lei nova (Suma Teológica I-II, q. 99–105) ${tag('fato')}. A lei nova é principalmente a graça do Espírito Santo dada pela fé em Cristo (I-II, q. 106, a. 1) ${tag('fato')}. A distinção explica por que os cristãos não seguem as leis alimentares de Moisés, mas mantêm o Decálogo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 106.', livro: 'suma-i-ii' }],
    exercicios: [
      mc('Permanecem na lei nova os preceitos:', ['Morais', 'Cerimoniais', 'Judiciais', 'Alimentares'], 0, 'Distinção.'),
      mc('A lei nova é principalmente:', ['A graça do Espírito Santo', 'Um código escrito', 'O direito canônico', 'A lei civil'], 0, 'I-II, q. 106.'),
      mc('As leis alimentares de Moisés são preceitos:', ['Cerimoniais', 'Morais', 'Teologais', 'Naturais'], 0, 'Classificação.'),
      disc('Explique a distinção de Tomás entre preceitos morais, cerimoniais e judiciais.', ['Distinção', 'Exemplos', 'Lei nova', 'Clareza'])],
  },
}),

aula({
  id: 'tg4-4', titulo: 'Oração e vida espiritual', duracao: '150 min',
  aprendera: ['Definir oração segundo o Catecismo', 'Distinguir as formas e expressões da oração', 'Explicar o chamado universal à santidade', 'Conhecer o Pai-Nosso como síntese da oração cristã'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A teologia é só estudo, ou deve mudar a vida de quem estuda?</p>
<h3>O que é oração</h3>
<p>O Catecismo cita Santa Teresa do Menino Jesus: a oração é "um impulso do coração, um simples olhar lançado ao céu" (CIC 2558) ${tag('doutrina')}. É relação viva dos filhos de Deus com o Pai, por Cristo, no Espírito (CIC 2565) ${tag('doutrina')}.</p>
<h3>Formas e expressões</h3>
<p>As formas são bênção e adoração, petição, intercessão, ação de graças e louvor (CIC 2626–2649) ${tag('doutrina')}. As expressões são a oração vocal, a meditação e a oração mental ou contemplativa (CIC 2700–2724) ${tag('doutrina')}. O Catecismo cita Santa Teresa de Ávila, para quem a oração mental é um trato de amizade com quem sabemos que nos ama (CIC 2709) ${tag('doutrina')}.</p>
<h3>Santidade para todos</h3>
<p>A Lumen gentium, no capítulo V, ensina que todos os fiéis são chamados à plenitude da vida cristã e à perfeição da caridade (LG 40) ${tag('doutrina')}. São Francisco de Sales, na Introdução à vida devota (1609), já defendera a devoção para pessoas de todas as condições ${tag('fato')}.</p>
<h3>Pai-Nosso</h3>
<p>Tertuliano chamou o Pai-Nosso de "resumo de todo o Evangelho" (CIC 2761) ${tag('fato')}. Tem uma invocação e sete pedidos: três dirigidos à glória do Pai e quatro às nossas necessidades (CIC 2803–2806) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Oração vocal', 'Oração com palavras, ditas ou interiores.'],
    ['Meditação', 'Busca da compreensão, com o pensamento, a imaginação e o afeto.'],
    ['Contemplação', 'Olhar de fé fixado em Jesus; oração simples e silenciosa.'],
    ['Lectio divina', 'Leitura orante da Escritura.'],
    ['Santidade', 'Plenitude da vida cristã e perfeição da caridade.'],
  ],
  exemplos: `<p><strong>O estudo como oração:</strong> Sertillanges, em A vida intelectual, propõe que o estudo seja feito diante de Deus, com horário, silêncio e pureza de intenção. Santo Tomás, segundo os relatos antigos, rezava antes de estudar. A oração não substitui o estudo, mas o orienta.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Liturgia das Horas é a oração oficial da Igreja, rezada por clérigos, religiosos e leigos ${tag('fato')}. <strong>No Brasil:</strong> o terço e as novenas populares estão entre as práticas de oração mais difundidas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a teologia exige oração', tag: 'argumento',
    premissas: ['A teologia estuda Deus a partir da Revelação recebida na fé.', 'A fé é relação pessoal com Deus, não só assentimento a proposições.', 'A oração é a expressão dessa relação.'],
    conclusao: 'Logo, uma teologia sem oração perde contato com seu objeto.',
    nota: 'Evágrio Pôntico: "Se és teólogo, rezarás de verdade; e se rezas de verdade, és teólogo." A frase é atribuída a ele no Tratado sobre a oração.',
  },
  objecoes: [
    { objecao: 'Misturar oração e estudo compromete a objetividade acadêmica.', tag: 'debate',
      resposta: 'A objetividade exige método, exame das fontes e abertura às objeções, e nada disso é eliminado pela oração. A oração orienta a intenção do estudante e o protege da vaidade intelectual. Tomás, Boaventura e Newman foram rigorosos e orantes ao mesmo tempo.' },
  ],
  aplicacao: `<p>Durante uma semana, reserve 10 minutos diários para lectio divina com o Evangelho do dia. Registre no caderno a passagem, uma frase que chamou atenção e uma resolução.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 2558–2865', link: null,
    orientacao: `<p>A quarta parte do Catecismo é dedicada à oração; leia o artigo sobre o Pai-Nosso (CIC 2759–2865).</p>`,
  },
  perguntas: [
    { p: 'Quais as formas da oração?', r: 'Bênção e adoração, petição, intercessão, ação de graças e louvor.' },
    { p: 'Quais as expressões?', r: 'Vocal, meditação e contemplação.' },
    { p: 'Como Tertuliano chamou o Pai-Nosso?', r: 'Resumo de todo o Evangelho.' },
  ],
  exercicios: [
    mc('O chamado universal à santidade está em:', ['LG, cap. V', 'GS, cap. I', 'DV, cap. II', 'SC, cap. VII'], 0, 'LG 40.'),
    mc('A Introdução à vida devota é de:', ['Francisco de Sales', 'Teresa de Ávila', 'João da Cruz', 'Inácio'], 0, '1609.'),
    mc('O Pai-Nosso tem quantos pedidos?', ['Sete', 'Cinco', 'Dez', 'Três'], 0, 'CIC 2803.'),
    mc('A oração oficial da Igreja é a:', ['Liturgia das Horas', 'Novena', 'Via-Sacra', 'Terço'], 0, 'Liturgia.'),
    mc('Lectio divina é:', ['Leitura orante da Escritura', 'Estudo crítico', 'Pregação', 'Catequese'], 0, 'Prática.'),
    disc('Relate a semana de lectio divina e o que aprendeu.', ['Registro', 'Reflexão', 'Resolução', 'Honestidade']),
  ],
  resumo: ['Oração: relação viva.', 'Cinco formas.', 'Três expressões.', 'Santidade para todos (LG 40).', 'Pai-Nosso: sete pedidos.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 2558–2865.', livro: 'cic' },
    { texto: 'A.-D. Sertillanges, A vida intelectual.', livro: 'sertillanges-vida' },
    { texto: 'São Boaventura, Itinerário da mente para Deus.', livro: 'boaventura-itinerario' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o registro da lectio divina', 'Ler a fonte indicada'],
  revisao: [['Formas', 'Cinco.'], ['Expressões', 'Três.'], ['Pai-Nosso', 'Sete pedidos.']],
  avancado: {
    texto: `<h3>As três vias</h3>
<p>A tradição espiritual descreve o progresso em três vias: purgativa, iluminativa e unitiva ${tag('fato')}. O esquema aparece no Pseudo-Dionísio e foi desenvolvido por autores medievais e modernos, como Garrigou-Lagrange ${tag('fato')}. Santo Tomás, em A perfeição da vida espiritual, defende que a perfeição consiste na caridade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, A perfeição da vida espiritual.', livro: 'tomas-perfeicao' }],
    exercicios: [
      mc('As três vias são:', ['Purgativa, iluminativa, unitiva', 'Ativa, passiva, mista', 'Fé, esperança, caridade', 'Lei, graça, glória'], 0, 'Esquema.'),
      mc('Para Tomás, a perfeição consiste na:', ['Caridade', 'Ciência', 'Pobreza', 'Penitência'], 0, 'Opúsculo.'),
      mc('O esquema aparece no:', ['Pseudo-Dionísio', 'Lutero', 'Descartes', 'Kant'], 0, 'Origem.'),
      disc('Descreva as três vias e avalie o esquema como mapa da vida espiritual.', ['Vias', 'Fontes', 'Avaliação', 'Clareza'])],
  },
}),

avaliacao('tg4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre consciência, lei natural, virtudes, mandamentos e oração, e duas discursivas que pedem juízo fundamentado.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia CIC 1750–1802 e 1803–1876.</li></ul>`,
[
  disc('Analise um caso moral real pelas três fontes da moralidade, considerando a consciência e a lei natural, e responda a uma objeção relativista.', ['Três fontes', 'Consciência', 'Lei natural', 'Objeção e resposta']),
  disc('Explique por que a vida moral e a oração não se separam na tradição católica, com fontes.', ['Moral', 'Oração', 'Santidade', 'Fontes']),
]),
];
