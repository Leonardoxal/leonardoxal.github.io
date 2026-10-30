// Ciências da Terra II — formação e autores (etapas 4 e 5 do percurso de Ciências da Terra).
// Aristóteles, Sêneca, Agricola e Steno; Hutton, Lyell e a geologia no Brasil; Wegener, Holmes e Hess;
// Patterson e a idade da Terra, Alvarez e a extinção do fim do Cretáceo.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ct2-1', titulo: 'Dos antigos a Steno: Aristóteles, Sêneca, Agricola e a origem dos fósseis', duracao: '150 min',
  aprendera: ['Explicar a teoria aristotélica dos terremotos e dos meteoros', 'Conhecer as Questões naturais de Sêneca', 'Situar Agricola e a mineração renascentista', 'Explicar a contribuição de Steno sobre os fósseis'],
  prereq: ['Ciências da Terra I (módulo CT1)'],
  explicacao: `
<h3>O problema</h3>
<p>Como se passou de explicações míticas dos terremotos e das montanhas a explicações naturais, e quando os fósseis foram entendidos como restos de seres vivos?</p>
<h3>Aristóteles</h3>
<p>Nos <em>Meteorológicos</em>, Aristóteles atribuiu os terremotos a "exalações" secas que circulavam sob a terra, como ventos subterrâneos ${tag('fato')}. A explicação está errada, mas é natural, encadeada e baseada em observações, como a frequência de tremores em regiões cavernosas ${tag('interpretacao')}.</p>
<h3>Sêneca</h3>
<p>Nas <em>Questões naturais</em>, escritas após o terremoto que atingiu a Campânia por volta de 62–63 d.C., Sêneca reuniu e discutiu as teorias sobre terremotos, insistindo em que conhecê-los ajuda a vencer o medo ${tag('fato')}.</p>
<h3>Agricola</h3>
<p>Georg Bauer, chamado Agricola, publicou <em>De re metallica</em> (1556), tratado sobre mineração, metalurgia e jazidas, que descreve técnicas e minerais com observação direta ${tag('fato')}.</p>
<h3>Steno</h3>
<p>Nicolau Steno, ao dissecar a cabeça de um tubarão em 1666, notou que as "glossopetras" achadas nas rochas eram dentes de tubarão; no <em>Prodromus</em> (1669), explicou que fósseis e camadas registram uma história ${tag('fato')}. Steno converteu-se ao catolicismo, tornou-se bispo e foi beatificado por João Paulo II em 1988 ${tag('fato')}. O Catecismo ensina que a pesquisa metódica, feita de modo verdadeiramente científico, nunca estará em oposição real com a fé (CIC 159) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Exalação', 'Em Aristóteles, vapor ou emanação da terra que explicaria meteoros e tremores.'],
    ['Glossopetra', '"Língua de pedra": nome antigo dos dentes fósseis de tubarão.'],
    ['Fóssil', 'Resto ou vestígio de ser vivo preservado nas rochas.'],
    ['Jazida', 'Concentração natural de minerais de interesse econômico.'],
    ['Estratigrafia', 'Estudo das camadas de rocha e de sua sucessão.'],
  ],
  exemplos: `<p><strong>O raciocínio de Steno:</strong> os dentes da cabeça de tubarão e as glossopetras tinham a mesma forma e estrutura; ninguém via pedras crescerem com forma de dente; logo, as glossopetras eram dentes de tubarão antigos, enterrados em sedimentos que depois viraram rocha. E se havia dentes de animais marinhos em montanhas, aquelas rochas tinham estado sob o mar.</p>`,
  contexto: `<p><strong>No mundo:</strong> Leonardo da Vinci já tinha anotado, por volta de 1500, que conchas fósseis nas montanhas eram restos de animais marinhos ${tag('fato')}. <strong>No Brasil:</strong> a mineração do ouro em Minas Gerais, no século XVIII, mobilizou conhecimentos práticos de mineração trazidos de Portugal e de outras regiões ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que fósseis marinhos nas montanhas indicam mudanças da Terra', tag: 'argumento',
    premissas: ['Animais marinhos vivem e morrem no mar.', 'Seus restos são encontrados em rochas no alto de montanhas, longe do mar atual.', 'Esses restos estão em camadas sedimentares que se depositaram com eles.'],
    conclusao: 'Logo, essas rochas formaram-se no fundo do mar e foram depois elevadas.',
    nota: 'O argumento não diz ainda quanto tempo isso levou; essa pergunta será de Hutton.',
  },
  objecoes: [
    { objecao: 'A Igreja sempre se opôs à geologia.', tag: 'debate',
      resposta: 'Houve tensões e leituras literalistas em vários momentos e confissões, mas um dos fundadores da geologia, Steno, foi bispo católico e é beato. O Catecismo afirma que fé e razão não se contradizem (CIC 159). A história real é mais complexa que o esquema do conflito permanente.' },
  ],
  aplicacao: `<p>Leia um trecho das Questões naturais sobre os terremotos e compare a explicação de Sêneca com a explicação moderna: o que permanece válido no método e o que foi superado no conteúdo.</p>`,
  fonte: {
    obra: 'Sêneca, Questões naturais, livro VI; Nicolau Steno, Prodromus (1669)', link: null,
    orientacao: `<p>Em Sêneca, siga a revisão das teorias anteriores e o tom moral contra o medo. Em Steno, a comparação entre glossopetras e dentes de tubarão.</p>`,
  },
  perguntas: [
    { p: 'Como Aristóteles explicava os terremotos?', r: 'Por exalações secas que circulariam sob a terra como ventos subterrâneos.' },
    { p: 'O que eram as glossopetras?', r: 'Dentes fósseis de tubarão.' },
    { p: 'Quando Steno foi beatificado?', r: 'Em 1988, por João Paulo II.' },
  ],
  exercicios: [
    mc('As Questões naturais são de:', ['Aristóteles', 'Sêneca', 'Plínio', 'Agricola'], 1, 'Terremoto da Campânia.'),
    mc('De re metallica (1556) trata de:', ['Astronomia', 'Mineração e metalurgia', 'Medicina', 'Teologia'], 1, 'Agricola.'),
    mc('Steno identificou as glossopetras como:', ['Pedras mágicas', 'Dentes de tubarão', 'Ossos humanos', 'Cristais'], 1, '1666.'),
    mc('Fósseis marinhos em montanhas indicam que:', ['Nunca houve mar ali', 'As rochas se formaram no mar e foram elevadas', 'Animais subiram as montanhas', 'Nada'], 1, 'Elevação.'),
    mc('O CIC 159 afirma que a pesquisa científica metódica:', ['Contradiz a fé', 'Nunca estará em oposição real com a fé', 'É proibida', 'É indiferente'], 1, 'Fé e razão.'),
    disc('Compare a explicação dos terremotos de Sêneca com a moderna: método válido e conteúdo superado.', ['Explicação de Sêneca', 'Explicação moderna', 'Método', 'Conteúdo superado']),
  ],
  resumo: ['Aristóteles: exalações.', 'Sêneca: Questões naturais.', 'Agricola (1556).', 'Steno: glossopetras, Prodromus.', 'Steno beato (1988); CIC 159.'],
  referencias: [
    { texto: 'Aristóteles, Meteorológicos.', livro: 'aristoteles-meteorologicos' },
    { texto: 'Sêneca, Questões naturais.' },
    { texto: 'Georgius Agricola, De re metallica (1556).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 159.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação com Sêneca', 'Ler os textos indicados'],
  revisao: [['Sêneca', 'Contra o medo.'], ['Agricola', 'Mineração.'], ['Steno', 'Dentes de tubarão.']],
  avancado: {
    texto: `<h3>Netunismo e plutonismo</h3>
<p>No século XVIII, Abraham Werner defendeu que quase todas as rochas se precipitaram de um oceano primitivo (netunismo); Hutton sustentou que muitas tinham origem no calor interno (plutonismo) ${tag('fato')}. A observação de que o basalto vinha da solidificação de lavas e de que granitos cortavam outras rochas favoreceu os plutonistas ${tag('fato')}. A controvérsia será retomada em ct3-1 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura de história da geologia.' }],
    exercicios: [
      mc('O netunismo foi defendido por:', ['Hutton', 'Werner', 'Lyell', 'Steno'], 1, 'Oceano primitivo.'),
      mc('O plutonismo atribui a origem de muitas rochas ao:', ['Oceano', 'Calor interno', 'Vento', 'Gelo'], 1, 'Hutton.'),
      mc('A origem do basalto favoreceu:', ['O netunismo', 'O plutonismo', 'Nenhum', 'Ambos igualmente'], 1, 'Lavas.'),
      disc('Explique que observações decidiram a controvérsia entre netunistas e plutonistas.', ['Teses', 'Observações', 'Decisão', 'Lição de método'])],
  },
}),

aula({
  id: 'ct2-2', titulo: 'Hutton, Lyell e o tempo profundo; a geologia no Brasil', duracao: '150 min',
  aprendera: ['Explicar a teoria de Hutton e o tempo profundo', 'Explicar o uniformitarismo de Lyell', 'Relacionar Lyell e Darwin', 'Conhecer os inícios da geologia no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quanto tempo foi necessário para formar as rochas e as paisagens? E as causas do passado são as mesmas de hoje?</p>
<h3>Hutton</h3>
<p>James Hutton, em <em>Theory of the Earth</em> (1788 e 1795), descreveu um ciclo contínuo de erosão, deposição, consolidação e elevação, movido pelo calor interno ${tag('fato')}. Concluiu que esse ciclo exigia um tempo imenso e escreveu que não encontrava "vestígio de um início, nem perspectiva de um fim" ${tag('fato')}.</p>
<h3>Lyell</h3>
<p>Charles Lyell, nos <em>Princípios de geologia</em> (1830–1833), defendeu que o passado deve ser explicado pelas causas que atuam hoje, com a mesma intensidade, ao longo de muito tempo — o uniformitarismo ${tag('fato')}. Darwin levou o primeiro volume na viagem do Beagle e passou pelo Brasil em 1832 ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>José Bonifácio de Andrada e Silva, antes de ser estadista, foi mineralogista e descreveu, por volta de 1800, minerais novos como a petalita e o espodumênio, a partir de amostras da Suécia ${tag('fato')}. Wilhelm Ludwig von Eschwege estudou as minas de Minas Gerais e publicou <em>Pluto Brasiliensis</em> (1833) ${tag('fato')}. A Escola de Minas de Ouro Preto foi fundada em 1876 por Claude-Henri Gorceix, por iniciativa de D. Pedro II ${tag('fato')}. Orville Derby foi o primeiro diretor do Serviço Geológico e Mineralógico do Brasil, criado em 1907 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tempo profundo', 'Escala imensa do tempo geológico.'],
    ['Uniformitarismo', 'Explicar o passado pelas causas atuais, ao longo de muito tempo.'],
    ['Atualismo', 'Princípio de que os processos atuais ajudam a entender os antigos.'],
    ['Mineralogia', 'Estudo dos minerais.'],
    ['Petalita', 'Mineral de lítio descrito por José Bonifácio.'],
  ],
  exemplos: `<p><strong>O raciocínio de Lyell:</strong> um rio deposita alguns milímetros de sedimento por ano no seu delta; uma camada de 300 metros de sedimentos semelhantes exigiria, a esse ritmo, centenas de milhares de anos. O cálculo é aproximado e supõe ritmo constante, mas mostra a ordem de grandeza do tempo necessário.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Sociedade Geológica de Londres foi fundada em 1807 ${tag('fato')}. <strong>No Brasil:</strong> a Escola de Minas de Ouro Preto formou gerações de geólogos e engenheiros de minas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Hutton concluiu que a Terra é muito antiga', tag: 'argumento',
    premissas: ['A erosão e a deposição atuais são muito lentas.', 'As rochas mostram vários ciclos sucessivos de deposição, elevação e erosão.', 'Cada ciclo, nesse ritmo, exige um tempo enorme.'],
    conclusao: 'Logo, a história registrada nas rochas exige um tempo muito mais longo do que se supunha.',
    nota: 'Hutton não mediu a idade da Terra; a medida veio com a radioatividade no século XX.',
  },
  objecoes: [
    { objecao: 'O uniformitarismo nega que tenham ocorrido catástrofes.', tag: 'debate',
      resposta: 'Lyell insistiu na constância de intensidade das causas, e isso foi depois corrigido: impactos de asteroides e grandes derrames vulcânicos mostram que eventos raros e intensos também moldaram a Terra. O que permanece do uniformitarismo é o atualismo de método: usar processos conhecidos para interpretar o passado.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte uma linha do tempo da geologia, de Aristóteles a Lyell, com uma obra por marco, incluindo pelo menos dois marcos brasileiros.</p>`,
  fonte: {
    obra: 'James Hutton, Theory of the Earth (1788), conclusão; Charles Lyell, Princípios de geologia (1830), vol. 1, cap. 1', link: null,
    orientacao: `<p>Em Hutton, a frase sobre início e fim e o argumento que a sustenta. Em Lyell, a defesa de explicar o passado por causas atuais. Compare o que cada um afirma e o que deixa em aberto.</p>`,
  },
  perguntas: [
    { p: 'O que é o uniformitarismo?', r: 'Explicar o passado pelas causas atuais, ao longo de muito tempo.' },
    { p: 'Que minerais José Bonifácio descreveu?', r: 'A petalita e o espodumênio, entre outros.' },
    { p: 'Quando foi fundada a Escola de Minas de Ouro Preto?', r: 'Em 1876.' },
  ],
  exercicios: [
    mc('Theory of the Earth é de:', ['Lyell', 'Hutton', 'Werner', 'Darwin'], 1, '1788.'),
    mc('Darwin levou no Beagle um livro de:', ['Hutton', 'Lyell', 'Steno', 'Wegener'], 1, 'Princípios de geologia.'),
    mc('Pluto Brasiliensis (1833) é de:', ['Eschwege', 'Derby', 'Gorceix', 'José Bonifácio'], 0, 'Minas Gerais.'),
    mc('A 2 mm por ano, 100 metros de sedimento levam cerca de:', ['500 anos', '5.000 anos', '50.000 anos', '5 milhões de anos'], 2, '100.000 mm ÷ 2.'),
    mc('O primeiro diretor do Serviço Geológico e Mineralógico do Brasil foi:', ['Orville Derby', 'Gorceix', 'Eschwege', 'Hutton'], 0, '1907.'),
    disc('Apresente a linha do tempo da geologia com uma obra por marco e dois marcos brasileiros.', ['Marcos em ordem', 'Obras', 'Marcos brasileiros', 'Ideia central']),
  ],
  resumo: ['Hutton: ciclo e tempo profundo.', 'Lyell: uniformitarismo; Darwin.', 'José Bonifácio mineralogista.', 'Eschwege (1833); Escola de Minas (1876).', 'Derby e o Serviço Geológico (1907).'],
  referencias: [
    { texto: 'James Hutton, Theory of the Earth (1788–1795).' },
    { texto: 'Charles Lyell, Princípios de geologia (1830–1833).' },
    { texto: 'Wilhelm Ludwig von Eschwege, Pluto Brasiliensis (1833).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo', 'Ler os textos indicados'],
  revisao: [['Hutton', 'Sem vestígio de início.'], ['Lyell', 'Causas atuais.'], ['1876', 'Escola de Minas.']],
  avancado: {
    texto: `<h3>Kelvin e a idade da Terra</h3>
<p>No século XIX, Lorde Kelvin calculou a idade da Terra pelo resfriamento de um corpo inicialmente fundido e chegou a algumas dezenas de milhões de anos, muito menos que o exigido por geólogos e por Darwin ${tag('fato')}. O cálculo ignorava o calor produzido pela radioatividade, desconhecida na época, e a convecção no manto ${tag('fato')}. O episódio mostra como uma premissa ausente pode invalidar um cálculo rigoroso ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Joe Burchfield, Lord Kelvin and the Age of the Earth (1975).' }],
    exercicios: [
      mc('Kelvin estimou a idade da Terra pelo:', ['Decaimento radioativo', 'Resfriamento', 'Sal do mar', 'Fósseis'], 1, 'Corpo fundido.'),
      mc('Kelvin ignorava:', ['A gravidade', 'A radioatividade', 'O Sol', 'A erosão'], 1, 'Desconhecida.'),
      mc('A estimativa de Kelvin era:', ['Muito maior que a atual', 'Muito menor que a atual', 'Igual', 'Exata'], 1, 'Dezenas de milhões.'),
      disc('Explique por que o cálculo de Kelvin era rigoroso e ainda assim errado.', ['Método', 'Premissa ausente', 'Correção', 'Lição'])],
  },
}),

aula({
  id: 'ct2-3', titulo: 'Wegener, Holmes e Hess: da deriva continental à expansão do fundo oceânico', duracao: '150 min',
  aprendera: ['Expor as evidências de Wegener para a deriva continental', 'Explicar por que a deriva foi rejeitada', 'Explicar a convecção do manto e a expansão do fundo oceânico', 'Explicar as faixas magnéticas simétricas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Os contornos da América do Sul e da África se encaixam. Coincidência, ou os continentes se moveram?</p>
<h3>Wegener</h3>
<p>Alfred Wegener, em <em>A origem dos continentes e oceanos</em> (1915), propôs que os continentes formaram um supercontinente, a Pangeia, e depois se separaram ${tag('fato')}. Reuniu evidências: o encaixe das plataformas continentais; fósseis iguais em continentes hoje separados, como o réptil <em>Mesosaurus</em>, no Brasil e na África do Sul, e a flora de <em>Glossopteris</em>; sequências de rochas correspondentes; e marcas de glaciação antiga em regiões hoje tropicais ${tag('fato')}.</p>
<h3>A rejeição</h3>
<p>Muitos geólogos rejeitaram a deriva porque Wegener não apresentou um mecanismo convincente para mover continentes ${tag('fato')}. Alexander du Toit, na África do Sul, ampliou as evidências em 1937 ${tag('fato')}. Wegener morreu na Groenlândia em 1930 ${tag('fato')}.</p>
<h3>Holmes e Hess</h3>
<p>Arthur Holmes propôs em 1931 que correntes de convecção no manto poderiam mover os continentes ${tag('fato')}. Harry Hess, em 1962, propôs que o assoalho oceânico se forma nas dorsais meso-oceânicas e se afasta delas ${tag('fato')}. Em 1963, Fred Vine e Drummond Matthews explicaram as faixas magnéticas simétricas dos dois lados das dorsais como registro das inversões do campo magnético ${tag('fato')}. A síntese chamada tectônica de placas formou-se no fim da década de 1960 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Deriva continental', 'Hipótese de Wegener sobre o movimento dos continentes.'],
    ['Pangeia', 'Supercontinente que reunia as massas continentais.'],
    ['Dorsal meso-oceânica', 'Cadeia de montanhas submarina onde se forma crosta oceânica.'],
    ['Expansão do fundo oceânico', 'Formação de crosta nas dorsais e seu afastamento.'],
    ['Faixas magnéticas', 'Faixas do assoalho oceânico com polaridade magnética alternada.'],
  ],
  exemplos: `<p><strong>Calculando a velocidade:</strong> o Atlântico Sul tem cerca de 5.000 km de largura entre o Brasil e a África e começou a se abrir há cerca de 130 milhões de anos. Velocidade média: 5.000 km ÷ 130 milhões de anos ≈ 3,8 cm por ano — a ordem de grandeza do crescimento de uma unha.</p>`,
  contexto: `<p><strong>No mundo:</strong> medições por GPS confirmam hoje o movimento das placas, de alguns centímetros por ano ${tag('fato')}. <strong>No Brasil:</strong> o <em>Mesosaurus</em> é encontrado em rochas da Formação Irati, na Bacia do Paraná ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as faixas magnéticas simétricas confirmaram a expansão do fundo oceânico', tag: 'argumento',
    premissas: ['O campo magnético da Terra inverte a polaridade de tempos em tempos.', 'O basalto que se solidifica nas dorsais registra a polaridade do momento.', 'Se a crosta nasce na dorsal e se afasta para os dois lados, as faixas devem ser simétricas em relação à dorsal.'],
    conclusao: 'Logo, faixas simétricas observadas são o que a expansão do fundo oceânico prevê.',
    nota: 'É uma previsão arriscada que poderia ter falhado; seu acerto foi decisivo para a aceitação da teoria.',
  },
  objecoes: [
    { objecao: 'Os geólogos que rejeitaram Wegener foram teimosos e anticientíficos.', tag: 'debate',
      resposta: 'Os críticos tinham uma objeção legítima: o mecanismo proposto por Wegener era fisicamente inviável. A ciência exige evidência e mecanismo. A teoria foi aceita quando dados novos do fundo oceânico, obtidos após a Segunda Guerra, forneceram ambos. O caso ensina tanto a abertura a ideias novas quanto a exigência de explicação.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de um capítulo de A origem dos continentes e oceanos (tese, evidências, objeções e aplicação ao Brasil), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Alfred Wegener, A origem dos continentes e oceanos (1915; ed. revista 1929), caps. 1 e 5–7; Harry Hess, "History of Ocean Basins" (1962)', link: null,
    orientacao: `<p>Em Wegener, liste as linhas de evidência. Em Hess, observe como ele chama o próprio texto de "geopoesia" e o que propõe testar.</p>`,
  },
  perguntas: [
    { p: 'Que fóssil liga o Brasil e a África do Sul?', r: 'O Mesosaurus, entre outros.' },
    { p: 'Por que a deriva foi rejeitada?', r: 'Porque Wegener não apresentou um mecanismo convincente.' },
    { p: 'O que explicaram Vine e Matthews?', r: 'As faixas magnéticas simétricas das dorsais como registro das inversões do campo.' },
  ],
  exercicios: [
    mc('A origem dos continentes e oceanos é de:', ['Hess', 'Wegener', 'Holmes', 'Lyell'], 1, '1915.'),
    mc('A convecção do manto foi proposta em 1931 por:', ['Holmes', 'Hess', 'Wegener', 'Du Toit'], 0, 'Mecanismo.'),
    mc('A crosta oceânica nova forma-se:', ['Nas fossas', 'Nas dorsais', 'Nos continentes', 'Nos polos'], 1, 'Hess, 1962.'),
    mc('3.000 km em 100 milhões de anos dão cerca de:', ['0,3 cm/ano', '3 cm/ano', '30 cm/ano', '3 m/ano'], 1, '3×10⁸ cm ÷ 10⁸ anos.'),
    mc('O Mesosaurus no Brasil está na Formação:', ['Irati', 'Serra Geral', 'Barreiras', 'Santana'], 0, 'Bacia do Paraná.'),
    disc('Entregue a ficha de leitura de um capítulo de Wegener.', ['Tese', 'Evidências', 'Objeções', 'Aplicação ao Brasil']),
  ],
  resumo: ['Wegener (1915): Pangeia.', 'Evidências: encaixe, fósseis, rochas, glaciação.', 'Rejeição: falta de mecanismo.', 'Holmes (1931), Hess (1962), Vine e Matthews (1963).', 'Mesosaurus na Formação Irati.'],
  referencias: [
    { texto: 'Alfred Wegener, A origem dos continentes e oceanos (1915).' },
    { texto: 'Harry Hess, "History of Ocean Basins" (1962).' },
    { texto: 'Fred Vine e Drummond Matthews, "Magnetic Anomalies over Oceanic Ridges" (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler os textos indicados'],
  revisao: [['Wegener', 'Deriva.'], ['Hess', 'Expansão.'], ['Faixas', 'Simétricas.']],
  avancado: {
    texto: `<h3>O ciclo de Wilson</h3>
<p>J. Tuzo Wilson propôs que oceanos se abrem e se fecham em ciclos: um continente se rompe, forma-se um oceano, que depois começa a se fechar por subducção até a colisão dos continentes ${tag('fato')}. O Atlântico estaria hoje na fase de abertura; o Mediterrâneo, restos de um oceano em fechamento ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'J. Tuzo Wilson, "Did the Atlantic Close and then Re-Open?" (1966).' }],
    exercicios: [
      mc('O ciclo de abertura e fechamento de oceanos leva o nome de:', ['Wegener', 'Wilson', 'Hess', 'Holmes'], 1, '1966.'),
      mc('O Atlântico está em fase de:', ['Fechamento', 'Abertura', 'Colisão', 'Estagnação'], 1, 'Expansão.'),
      mc('O fechamento de um oceano ocorre por:', ['Expansão', 'Subducção', 'Erosão', 'Glaciação'], 1, 'Placa mergulha.'),
      disc('Descreva as fases do ciclo de Wilson e situe nele a história do Atlântico Sul.', ['Fases', 'Atlântico Sul', 'Evidências', 'Fontes'])],
  },
}),

aula({
  id: 'ct2-4', titulo: 'Patterson e Alvarez: a idade da Terra e a extinção do fim do Cretáceo', duracao: '150 min',
  aprendera: ['Explicar como Patterson calculou a idade da Terra', 'Conhecer o impacto de Patterson contra o chumbo na gasolina', 'Expor a hipótese de impacto de Alvarez e suas evidências', 'Avaliar o debate entre impacto e vulcanismo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Qual é a idade exata da Terra? E o que causou o desaparecimento dos dinossauros não avianos?</p>
<h3>Patterson</h3>
<p>Clair Patterson, em 1956, mediu isótopos de chumbo em meteoritos, entre eles o de Canyon Diablo, e obteve para a Terra e o Sistema Solar a idade de cerca de 4,55 bilhões de anos, valor que se mantém essencialmente até hoje ${tag('fato')}. Para medir quantidades tão pequenas, precisou criar salas limpas, e descobriu que o ambiente estava contaminado por chumbo, em grande parte da gasolina ${tag('fato')}. Sua campanha contribuiu para a eliminação do chumbo na gasolina em vários países ${tag('fato')}.</p>
<h3>Alvarez</h3>
<p>Em 1980, Luis Alvarez, Walter Alvarez e colegas relataram uma camada rica em irídio, elemento raro na crosta e mais comum em asteroides, no limite entre o Cretáceo e o Paleógeno em Gubbio, na Itália, e em outros lugares ${tag('fato')}. Propuseram que o impacto de um asteroide causou a extinção em massa de cerca de 66 milhões de anos atrás ${tag('fato')}. A cratera de Chicxulub, no México, foi identificada como o provável local do impacto no início dos anos 1990 ${tag('fato')}.</p>
<h3>O debate</h3>
<p>Os grandes derrames vulcânicos do Decã, na Índia, ocorreram na mesma época, e o papel relativo do vulcanismo e do impacto continua discutido ${tag('debate')}.</p>`,
  vocabulario: [
    ['Meteorito', 'Fragmento de corpo do espaço que atinge a superfície.'],
    ['Sala limpa', 'Laboratório com controle rigoroso de contaminação.'],
    ['Irídio', 'Metal raro na crosta e mais abundante em meteoritos.'],
    ['Limite K-Pg', 'Fronteira entre o Cretáceo e o Paleógeno, há cerca de 66 milhões de anos.'],
    ['Extinção em massa', 'Desaparecimento de grande parte das espécies num tempo curto geologicamente.'],
  ],
  exemplos: `<p><strong>Por que meteoritos?</strong> As rochas da Terra foram fundidas, erodidas e recicladas, apagando o registro inicial. Meteoritos são restos do material que formou os planetas e não passaram por esses processos. Medir neles os isótopos de chumbo dá a idade da formação do Sistema Solar, e com ela a da Terra.</p>`,
  contexto: `<p><strong>No mundo:</strong> a extinção do fim do Cretáceo é uma das cinco grandes extinções em massa do registro fóssil ${tag('fato')}. <strong>No Brasil:</strong> rochas do Cretáceo brasileiro, como as da Bacia do Araripe e da Bacia Bauru, guardam fósseis de dinossauros, pterossauros e peixes ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a camada de irídio apontou para um impacto', tag: 'argumento',
    premissas: ['O irídio é raro na crosta terrestre e mais abundante em asteroides.', 'Uma camada fina e rica em irídio aparece no mesmo limite geológico em lugares distantes do planeta.', 'Um grande impacto espalharia material do asteroide pela atmosfera e por todo o globo.'],
    conclusao: 'Logo, a camada de irídio é bem explicada por um grande impacto no limite K-Pg.',
    nota: 'Outras evidências — quartzo de impacto, esférulas e a cratera de Chicxulub — reforçaram a hipótese.',
  },
  objecoes: [
    { objecao: 'Se a hipótese do impacto ainda é debatida, ela não vale nada.', tag: 'debate',
      resposta: 'Que o impacto ocorreu é aceito com base em evidências convergentes; o debate é sobre o peso relativo do impacto e do vulcanismo do Decã na extinção. Distinguir o que é estabelecido do que continua em discussão é parte do método, e não sinal de fraqueza.' },
  ],
  aplicacao: `<p>Explique a cadeia de evidências da hipótese de Alvarez (irídio, quartzo de impacto, cratera, datação) e indique o que o vulcanismo do Decã acrescenta ao quadro.</p>`,
  fonte: {
    obra: 'Clair Patterson, "Age of Meteorites and the Earth" (1956); Luis Alvarez e outros, "Extraterrestrial Cause for the Cretaceous-Tertiary Extinction" (1980)', link: null,
    orientacao: `<p>Em Patterson, a lógica de usar meteoritos e o resultado. Em Alvarez, as medidas de irídio e as alternativas que os autores examinam e descartam.</p>`,
  },
  perguntas: [
    { p: 'Que idade Patterson obteve para a Terra?', r: 'Cerca de 4,55 bilhões de anos.' },
    { p: 'Por que Patterson combateu o chumbo na gasolina?', r: 'Porque descobriu a contaminação ambiental por chumbo ao criar salas limpas.' },
    { p: 'Onde está a cratera associada à extinção do fim do Cretáceo?', r: 'Em Chicxulub, no México.' },
  ],
  exercicios: [
    mc('Patterson usou isótopos de:', ['Carbono', 'Chumbo', 'Oxigênio', 'Potássio'], 1, 'Meteoritos.'),
    mc('A camada de irídio de Alvarez foi estudada em:', ['Gubbio, Itália', 'Ouro Preto', 'Kola', 'Siccar Point'], 0, '1980.'),
    mc('A extinção do fim do Cretáceo ocorreu há cerca de:', ['6,6 milhões de anos', '66 milhões de anos', '660 milhões de anos', '4,5 bilhões de anos'], 1, 'Limite K-Pg.'),
    mc('Meteoritos servem para datar a Terra porque:', ['São recentes', 'Não passaram pela reciclagem das rochas terrestres', 'Vêm do Sol', 'São de chumbo puro'], 1, 'Material primitivo.'),
    mc('O papel do vulcanismo do Decã na extinção é:', ['Irrelevante', 'Debatido', 'A única causa comprovada', 'Desconhecido'], 1, 'Debate.'),
    disc('Explique a cadeia de evidências da hipótese de Alvarez e o que o vulcanismo do Decã acrescenta.', ['Irídio', 'Outras evidências', 'Cratera e datação', 'Decã']),
  ],
  resumo: ['Patterson (1956): 4,55 bilhões de anos.', 'Salas limpas e chumbo na gasolina.', 'Alvarez (1980): irídio no limite K-Pg.', 'Chicxulub (anos 1990); 66 milhões de anos.', 'Decã: debate.'],
  referencias: [
    { texto: 'Clair Patterson, "Age of Meteorites and the Earth" (1956).' },
    { texto: 'Luis Alvarez e outros, "Extraterrestrial Cause for the Cretaceous-Tertiary Extinction" (1980).' },
    { texto: 'Walter Alvarez, T. rex and the Crater of Doom (1997).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a cadeia de evidências', 'Ler os textos indicados'],
  revisao: [['Patterson', '4,55 bi.'], ['Irídio', 'Impacto.'], ['Chicxulub', 'México.']],
  avancado: {
    texto: `<h3>As cinco grandes extinções</h3>
<p>O registro fóssil mostra cinco grandes extinções em massa: no fim do Ordoviciano, no Devoniano Superior, no fim do Permiano, no fim do Triássico e no fim do Cretáceo ${tag('fato')}. A do fim do Permiano, há cerca de 252 milhões de anos, foi a maior, associada aos derrames vulcânicos da Sibéria ${tag('interpretacao')}. Se a perda atual de espécies constitui uma sexta extinção em massa é tese debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura de paleontologia sobre extinções em massa.' }],
    exercicios: [
      mc('A maior extinção em massa foi a do fim do:', ['Cretáceo', 'Permiano', 'Ordoviciano', 'Triássico'], 1, 'Cerca de 252 Ma.'),
      mc('Quantas grandes extinções há no registro fóssil?', ['Duas', 'Cinco', 'Dez', 'Vinte'], 1, 'As "cinco grandes".'),
      mc('A tese de uma sexta extinção atual é:', ['Fato consensual', 'Debatida', 'Doutrina', 'Refutada'], 1, 'Debate.'),
      disc('Compare as causas propostas para as extinções do fim do Permiano e do fim do Cretáceo.', ['Permiano', 'Cretáceo', 'Comparação', 'Grau de certeza'])],
  },
}),

avaliacao('ct2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação das ciências da Terra e os autores da revolução geológica, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo e a ficha de Wegener.</li><li>Refaça os cálculos de velocidade de placas e de taxa de deposição.</li></ul>`,
[
  disc('Compare como Hutton, Lyell e Wegener usaram evidências para propor mudanças lentas da Terra, e explique por que a teoria de Wegener demorou a ser aceita.', ['Hutton', 'Lyell', 'Wegener', 'Aceitação e mecanismo']),
  disc('Mostre, com Steno ou outro exemplo, que a história da geologia não se reduz a um conflito entre ciência e fé, distinguindo fato histórico de interpretação.', ['Exemplo histórico', 'Fatos', 'Interpretação', 'Doutrina citada']),
]),
];
