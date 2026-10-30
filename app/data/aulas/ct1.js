// Ciências da Terra I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Ciências da Terra).
// A Terra como planeta dinâmico; minerais, rochas e estruturas; campo, mapa e princípios de Steno;
// datação radiométrica, sismologia e meteorologia instrumental.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ct1-1', titulo: 'A Terra como planeta dinâmico: camadas, energia e tempo geológico', duracao: '120 min',
  aprendera: ['Descrever as camadas internas da Terra e suas espessuras', 'Explicar como as ondas sísmicas revelam o interior', 'Distinguir energia interna e energia solar como motores dos processos', 'Situar a idade da Terra e a escala do tempo geológico'],
  prereq: ['Química e física básicas (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Ninguém perfurou mais que alguns quilômetros da crosta. Como sabemos o que há a 6.000 km de profundidade, e como sabemos a idade da Terra?</p>
<h3>As camadas</h3>
<p>A Terra tem raio médio de cerca de 6.371 km ${tag('fato')}. A crosta oceânica tem em geral 5 a 10 km de espessura; a continental, em média 30 a 50 km, mais sob as montanhas ${tag('fato')}. O manto vai até cerca de 2.900 km; abaixo estão o núcleo externo, líquido, e o núcleo interno, sólido, formados sobretudo de ferro e níquel ${tag('fato')}.</p>
<h3>A evidência sísmica</h3>
<p>As ondas dos terremotos mudam de velocidade e direção ao atravessar materiais diferentes ${tag('fato')}. As ondas S, que não se propagam em líquidos, não atravessam o núcleo externo, o que revela seu estado líquido ${tag('fato')}. Inge Lehmann identificou em 1936 o núcleo interno sólido pela análise dessas ondas ${tag('fato')}.</p>
<h3>Duas fontes de energia</h3>
<p>O calor interno, herdado da formação do planeta e produzido pelo decaimento de elementos radioativos, move o manto, os vulcões e as placas ${tag('fato')}. A energia do Sol move a atmosfera, os oceanos, o ciclo da água e a erosão ${tag('fato')}.</p>
<h3>O tempo geológico</h3>
<p>A idade da Terra é estimada em cerca de 4,54 bilhões de anos ${tag('fato')}. O Catecismo ensina que as descobertas sobre a idade e as dimensões do cosmos convidam a admirar a grandeza do Criador (CIC 283) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Crosta', 'Camada externa sólida e rochosa da Terra.'],
    ['Manto', 'Camada rochosa entre a crosta e o núcleo, que flui muito lentamente.'],
    ['Núcleo', 'Parte central, de ferro e níquel: externo líquido, interno sólido.'],
    ['Onda sísmica', 'Vibração que se propaga pela Terra a partir de um terremoto.'],
    ['Tempo geológico', 'Escala de tempo da história da Terra, em milhões e bilhões de anos.'],
  ],
  exemplos: `<p><strong>A Terra em escala:</strong> se a Terra fosse uma bola de 1 metro de diâmetro, a crosta continental teria cerca de 3 a 4 milímetros, mais fina que a casca de uma laranja dessa escala; o núcleo ocuparia mais da metade do diâmetro. A camada onde vivemos e de onde tiramos todos os recursos minerais é finíssima.</p>`,
  contexto: `<p><strong>No mundo:</strong> o poço mais profundo já perfurado, na península de Kola, na Rússia, chegou a pouco mais de 12 km ${tag('fato')}. <strong>No Brasil:</strong> a Rede Sismográfica Brasileira registra os tremores no território nacional, em geral de baixa magnitude ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o núcleo externo é líquido', tag: 'argumento',
    premissas: ['As ondas S só se propagam em materiais sólidos.', 'Sismógrafos do outro lado do planeta, em relação a um terremoto, não registram ondas S diretas.', 'Essas ondas são bloqueadas por uma camada que as rotas de propagação situam a partir de cerca de 2.900 km de profundidade.'],
    conclusao: 'Logo, há uma camada líquida a partir dessa profundidade: o núcleo externo.',
    nota: 'É uma inferência indireta, mas apoiada em milhares de registros sísmicos concordantes.',
  },
  objecoes: [
    { objecao: 'Ninguém viu o núcleo; tudo isso é especulação.', tag: 'debate',
      resposta: 'Conhecer por evidência indireta não é especular. As propriedades do interior são inferidas de medidas precisas e repetidas de ondas sísmicas, do campo magnético, da densidade média da Terra e de experimentos com materiais em altas pressões. Diferentes linhas de evidência concordam, o que dá confiança ao modelo.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: desenhe em escala as camadas da Terra, com as espessuras aproximadas, e indique a evidência que sustenta cada uma.</p>`,
  fonte: {
    obra: 'Inge Lehmann, "P\'" (1936); Catecismo da Igreja Católica, §§ 282–289', link: null,
    orientacao: `<p>No artigo de Lehmann, observe como a análise dos tempos de chegada das ondas leva à hipótese do núcleo interno. No Catecismo, como a Igreja acolhe as descobertas sobre a origem do mundo.</p>`,
  },
  perguntas: [
    { p: 'Qual o raio médio da Terra?', r: 'Cerca de 6.371 km.' },
    { p: 'Por que se sabe que o núcleo externo é líquido?', r: 'Porque as ondas S, que não atravessam líquidos, não o atravessam.' },
    { p: 'Qual a idade estimada da Terra?', r: 'Cerca de 4,54 bilhões de anos.' },
  ],
  exercicios: [
    mc('A crosta oceânica tem em geral:', ['5 a 10 km', '100 km', '2.900 km', '1 km'], 0, 'Mais fina que a continental.'),
    mc('O núcleo interno sólido foi identificado por:', ['Wegener', 'Lehmann', 'Hutton', 'Lyell'], 1, '1936.'),
    mc('O que move as placas tectônicas?', ['Energia solar', 'Calor interno', 'Marés apenas', 'Ventos'], 1, 'Energia interna.'),
    mc('As ondas S não atravessam:', ['Sólidos', 'Líquidos', 'Rochas', 'O manto'], 1, 'Núcleo externo.'),
    mc('A idade da Terra é de cerca de:', ['6 mil anos', '4,54 milhões de anos', '4,54 bilhões de anos', '13,8 bilhões de anos'], 2, '13,8 bi é a do universo.'),
    disc('Entregue o desenho em escala das camadas com a evidência de cada uma.', ['Escala', 'Espessuras', 'Evidências', 'Clareza']),
  ],
  resumo: ['Raio ~6.371 km.', 'Crosta, manto, núcleo externo líquido e interno sólido.', 'Ondas S e Lehmann (1936).', 'Calor interno e energia solar.', '4,54 bilhões de anos; CIC 283.'],
  referencias: [
    { texto: 'Inge Lehmann, "P\'" (1936).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 282–289.', livro: 'cic' },
    { texto: 'Frank Press e outros, Para entender a Terra (manual).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o desenho em escala', 'Ler os textos indicados'],
  revisao: [['Ondas S', 'Não atravessam líquidos.'], ['Lehmann', 'Núcleo interno.'], ['4,54 bi', 'Idade da Terra.']],
  avancado: {
    texto: `<h3>O campo magnético e o geodínamo</h3>
<p>O movimento do ferro líquido no núcleo externo gera o campo magnético da Terra, num processo chamado geodínamo ${tag('fato')}. Rochas registram a direção do campo no momento de sua formação, e esses registros mostram que o campo inverteu a polaridade muitas vezes na história do planeta ${tag('fato')}. Essas inversões foram decisivas para comprovar a expansão do fundo oceânico (ct2-3) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais introdutórios de geofísica.' }],
    exercicios: [
      mc('O campo magnético terrestre é gerado no:', ['Manto', 'Núcleo externo', 'Crosta', 'Atmosfera'], 1, 'Geodínamo.'),
      mc('O campo magnético:', ['Nunca mudou', 'Inverteu a polaridade muitas vezes', 'Só existe no Brasil', 'É gerado pelo Sol'], 1, 'Paleomagnetismo.'),
      mc('O registro magnético das rochas é chamado:', ['Paleomagnetismo', 'Sismologia', 'Meteorologia', 'Paleontologia'], 0, 'Definição.'),
      disc('Explique como as rochas registram o campo magnético e por que isso importa para a história da Terra.', ['Mecanismo', 'Inversões', 'Uso', 'Fontes'])],
  },
}),

aula({
  id: 'ct1-2', titulo: 'Vocabulário geológico: minerais, rochas, ciclo das rochas e estruturas', duracao: '150 min',
  aprendera: ['Definir mineral e usar a escala de Mohs', 'Distinguir rochas ígneas, sedimentares e metamórficas', 'Explicar o ciclo das rochas', 'Reconhecer falha, dobra e bacia sedimentar'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Granito, basalto, arenito, mármore: o que as distingue e como uma rocha se transforma em outra?</p>
<h3>Minerais</h3>
<p>Mineral é um sólido natural, em geral inorgânico, de composição química definida e estrutura cristalina ordenada ${tag('fato')}. A escala de Mohs ordena a dureza de 1 (talco) a 10 (diamante); o quartzo tem dureza 7 ${tag('fato')}.</p>
<h3>Três tipos de rocha</h3>
<ul>
<li><strong>Ígneas</strong>: formadas pela solidificação do magma; intrusivas, como o granito, esfriam devagar em profundidade e têm cristais grandes; extrusivas, como o basalto, esfriam depressa na superfície e têm cristais finos ${tag('fato')}.</li>
<li><strong>Sedimentares</strong>: formadas pela deposição e consolidação de sedimentos, como o arenito e o calcário; podem conter fósseis ${tag('fato')}.</li>
<li><strong>Metamórficas</strong>: formadas pela transformação de outras rochas sob calor e pressão, como o gnaisse, o mármore e o quartzito ${tag('fato')}.</li>
</ul>
<h3>O ciclo das rochas</h3>
<p>Rochas são erodidas e viram sedimentos; sedimentos viram rochas sedimentares; o soterramento profundo as metamorfiza; a fusão gera magma, que se solidifica em rocha ígnea ${tag('fato')}. James Hutton descreveu esse ciclo no século XVIII ${tag('fato')}.</p>
<h3>Estruturas</h3>
<p>Falha é uma fratura com deslocamento dos blocos; dobra é a curvatura de camadas sob compressão; bacia sedimentar é uma depressão da crosta onde se acumulam sedimentos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Mineral', 'Sólido natural de composição definida e estrutura cristalina.'],
    ['Rocha ígnea', 'Rocha formada pela solidificação do magma.'],
    ['Rocha sedimentar', 'Rocha formada pela consolidação de sedimentos.'],
    ['Rocha metamórfica', 'Rocha transformada por calor e pressão.'],
    ['Falha', 'Fratura com deslocamento dos blocos de rocha.'],
  ],
  exemplos: `<p><strong>Rochas brasileiras:</strong> o Pão de Açúcar, no Rio de Janeiro, é de gnaisse (metamórfica); os derrames da Formação Serra Geral, no Sul, são de basalto (ígnea extrusiva), base das terras roxas; os arenitos de Vila Velha, no Paraná, são sedimentares; no Quadrilátero Ferrífero, em Minas Gerais, há itabiritos, formações ferríferas metamorfizadas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Associação Mineralógica Internacional reconhece milhares de espécies minerais ${tag('fato')}. <strong>No Brasil:</strong> o país é grande produtor de gemas, como turmalinas, topázios e águas-marinhas, sobretudo em Minas Gerais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o tamanho dos cristais indica onde a rocha ígnea se formou', tag: 'argumento',
    premissas: ['Cristais crescem enquanto o magma ainda está líquido.', 'Em profundidade, o magma esfria devagar, e os cristais têm tempo de crescer.', 'Na superfície, a lava esfria depressa, e os cristais ficam pequenos.'],
    conclusao: 'Logo, cristais grandes indicam formação em profundidade, e cristais finos, formação na superfície.',
    nota: 'Por isso granito e basalto podem ter composição próxima de outros pares e textura muito diferente.',
  },
  objecoes: [
    { objecao: 'Rocha é rocha; essa classificação não serve para nada.', tag: 'debate',
      resposta: 'A classificação conta a história da rocha: como e onde se formou. Isso tem consequências práticas — onde procurar petróleo (bacias sedimentares), onde há risco de deslizamento, que material serve para construção. Classificar é o primeiro passo para explicar.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 termos geológicos com um exemplo brasileiro (rocha, mineral ou paisagem) para cada.</p>`,
  fonte: {
    obra: 'James Hutton, Theory of the Earth (1795), vol. 1; Serviço Geológico do Brasil, mapas geológicos estaduais', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>Em Hutton, a descrição do ciclo de destruição e renovação das rochas. No mapa geológico do seu estado, identifique três tipos de rocha e suas idades.</p>`,
  },
  perguntas: [
    { p: 'Qual a dureza do quartzo na escala de Mohs?', r: '7.' },
    { p: 'Por que o basalto tem cristais finos?', r: 'Porque esfriou depressa na superfície.' },
    { p: 'De que rocha é o Pão de Açúcar?', r: 'De gnaisse, rocha metamórfica.' },
  ],
  exercicios: [
    mc('O mineral mais duro da escala de Mohs é o:', ['Quartzo', 'Diamante', 'Talco', 'Topázio'], 1, '10.'),
    mc('O granito é rocha:', ['Sedimentar', 'Ígnea intrusiva', 'Metamórfica', 'Ígnea extrusiva'], 1, 'Cristais grandes.'),
    mc('O mármore é metamorfismo de:', ['Granito', 'Calcário', 'Basalto', 'Argila'], 1, 'Carbonato.'),
    mc('Fósseis são encontrados principalmente em rochas:', ['Ígneas', 'Sedimentares', 'Metamórficas de alto grau', 'Magma'], 1, 'Deposição.'),
    mc('O ciclo das rochas foi descrito no século XVIII por:', ['Hutton', 'Wegener', 'Lehmann', 'Patterson'], 0, 'Theory of the Earth.'),
    disc('Apresente o glossário de 20 termos geológicos com exemplos brasileiros.', ['20 termos', 'Definições corretas', 'Exemplos brasileiros', 'Fontes']),
  ],
  resumo: ['Mineral; Mohs (talco 1, quartzo 7, diamante 10).', 'Ígneas: granito e basalto.', 'Sedimentares e fósseis.', 'Metamórficas: gnaisse, mármore.', 'Ciclo das rochas (Hutton); falha, dobra, bacia.'],
  referencias: [
    { texto: 'James Hutton, Theory of the Earth (1795).' },
    { texto: 'Serviço Geológico do Brasil, mapas geológicos.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Frank Press e outros, Para entender a Terra (manual).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Consultar o mapa geológico do estado'],
  revisao: [['Mohs', 'Dureza.'], ['Granito e basalto', 'Intrusiva e extrusiva.'], ['Gnaisse', 'Pão de Açúcar.']],
  avancado: {
    texto: `<h3>Identificar minerais</h3>
<p>Na prática, minerais são identificados por propriedades como dureza, cor do traço (o pó deixado numa porcelana), brilho, clivagem (planos de quebra) e densidade ${tag('fato')}. A cor sozinha engana: o quartzo pode ser incolor, róseo, roxo (ametista) ou amarelo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Guias de identificação de minerais.' }],
    exercicios: [
      mc('O traço de um mineral é:', ['Sua cor externa', 'A cor do seu pó', 'Seu peso', 'Sua idade'], 1, 'Porcelana.'),
      mc('A ametista é uma variedade de:', ['Feldspato', 'Quartzo', 'Mica', 'Calcita'], 1, 'Roxa.'),
      mc('Planos preferenciais de quebra são a:', ['Clivagem', 'Dureza', 'Densidade', 'Brilho'], 0, 'Propriedade.'),
      disc('Descreva como identificaria três minerais comuns no Brasil usando propriedades físicas.', ['Três minerais', 'Propriedades', 'Testes', 'Cuidados'])],
  },
}),

aula({
  id: 'ct1-3', titulo: 'Campo, mapa e princípios de Steno: como ler a história nas rochas', duracao: '150 min',
  aprendera: ['Aplicar os princípios de superposição, horizontalidade e continuidade', 'Aplicar as relações de corte e de inclusão', 'Usar fósseis-guia na correlação de camadas', 'Descrever um afloramento em sequência de eventos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Diante de um paredão de rochas, como saber o que aconteceu primeiro?</p>
<h3>Os princípios de Steno</h3>
<p>Nicolau Steno, no <em>Prodromus</em> (1669), formulou princípios ainda usados: <strong>superposição</strong> (numa sequência não perturbada, as camadas de baixo são mais antigas), <strong>horizontalidade original</strong> (sedimentos depositam-se em camadas quase horizontais; camadas inclinadas foram deformadas depois) e <strong>continuidade lateral</strong> (uma camada se estende até se afinar ou encontrar um obstáculo) ${tag('fato')}.</p>
<h3>Corte e inclusão</h3>
<p>Uma rocha ou falha que corta outras é mais jovem que elas; fragmentos incluídos numa rocha são mais antigos que ela ${tag('fato')}.</p>
<h3>Fósseis-guia</h3>
<p>William Smith, no início do século XIX, usou a sucessão de fósseis para correlacionar camadas e publicou em 1815 um mapa geológico da Inglaterra e do País de Gales ${tag('fato')}. Fósseis de espécies que viveram pouco tempo e em amplas áreas servem para datar e correlacionar camadas distantes ${tag('fato')}.</p>
<h3>Mapa e campo</h3>
<p>O mapa geológico representa as unidades de rocha que afloram, suas idades e estruturas ${tag('fato')}. No campo, o geólogo usa martelo, lupa, bússola e caderneta, e registra localização, tipo de rocha, atitude das camadas e amostras ${tag('fato')}.</p>`,
  vocabulario: [
    ['Afloramento', 'Lugar onde a rocha aparece na superfície.'],
    ['Superposição', 'Camadas inferiores são mais antigas numa sequência não perturbada.'],
    ['Relação de corte', 'O que corta é mais jovem que o que é cortado.'],
    ['Fóssil-guia', 'Fóssil útil para datar e correlacionar camadas.'],
    ['Discordância', 'Superfície de erosão ou interrupção entre camadas de idades diferentes.'],
  ],
  exemplos: `<p><strong>Ordenando eventos:</strong> num corte de estrada há, de baixo para cima, arenito, folhelho e calcário, todos inclinados, cortados por um dique de basalto, e sobre eles uma camada horizontal de cascalho. Sequência: (1) deposição de arenito, folhelho e calcário; (2) inclinação das camadas; (3) intrusão do dique; (4) erosão; (5) deposição do cascalho. Cada passo segue um princípio.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Grand Canyon, nos Estados Unidos, expõe uma longa sequência de camadas sedimentares, exemplo clássico de superposição ${tag('fato')}. <strong>No Brasil:</strong> a Chapada do Araripe, entre Ceará, Pernambuco e Piauí, guarda sequências sedimentares com fósseis muito bem preservados ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a superposição permite ordenar eventos sem saber datas', tag: 'argumento',
    premissas: ['Uma camada sedimentar só pode depositar-se sobre algo que já existe.', 'Logo, a camada de baixo já estava lá quando a de cima se formou.', 'Se a sequência não foi invertida por dobras ou falhas, a ordem vertical é a ordem temporal.'],
    conclusao: 'Portanto, é possível ordenar os eventos (datação relativa) sem conhecer as idades absolutas.',
    nota: 'A condição "não perturbada" é essencial; dobras intensas podem inverter a sequência, e há critérios para detectá-lo.',
  },
  objecoes: [
    { objecao: 'Os princípios de Steno são óbvios demais para serem ciência.', tag: 'debate',
      resposta: 'Parecem óbvios depois de formulados. Antes de Steno, fósseis eram muitas vezes vistos como "jogos da natureza" crescidos dentro das rochas. Steno mostrou que eram restos de seres vivos e que as camadas registram uma história, o que fundou a estratigrafia. Steno foi depois ordenado bispo e é beato da Igreja.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva um afloramento ou corte de estrada da sua região (com foto ou desenho), identificando camadas, tipos de rocha e a sequência de eventos, justificada pelos princípios.</p>`,
  fonte: {
    obra: 'Nicolau Steno, Prodromus (1669); Serviço Geológico do Brasil, mapa geológico da sua região', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>No Prodromus, localize os princípios sobre as camadas e a origem orgânica dos fósseis. No mapa do SGB, identifique as unidades que afloram perto de você.</p>`,
  },
  perguntas: [
    { p: 'O que diz o princípio da superposição?', r: 'Que, numa sequência não perturbada, as camadas de baixo são mais antigas.' },
    { p: 'Um dique que corta camadas é mais jovem ou mais antigo?', r: 'Mais jovem.' },
    { p: 'Quem publicou em 1815 um mapa geológico da Inglaterra?', r: 'William Smith.' },
  ],
  exercicios: [
    mc('Os princípios da estratigrafia foram formulados por:', ['Hutton', 'Steno', 'Lyell', 'Smith'], 1, 'Prodromus, 1669.'),
    mc('Camadas inclinadas indicam:', ['Deposição inclinada sempre', 'Deformação posterior', 'Erro do geólogo', 'Nada'], 1, 'Horizontalidade original.'),
    mc('Fragmentos incluídos numa rocha são:', ['Mais jovens que ela', 'Mais antigos que ela', 'Da mesma idade', 'Sem relação'], 1, 'Inclusão.'),
    mc('Um bom fóssil-guia viveu:', ['Muito tempo em área pequena', 'Pouco tempo em área ampla', 'Só no Brasil', 'Hoje'], 1, 'Correlação.'),
    mc('Steno foi também:', ['Navegador', 'Bispo e é beato da Igreja', 'Rei', 'Astrônomo'], 1, 'Fé e ciência.'),
    disc('Descreva um afloramento da sua região com camadas, rochas e sequência de eventos justificada.', ['Descrição fiel', 'Rochas identificadas', 'Sequência', 'Princípios aplicados']),
  ],
  resumo: ['Steno (1669): superposição, horizontalidade, continuidade.', 'Corte e inclusão.', 'William Smith (1815): fósseis-guia.', 'Mapa geológico e campo.', 'Araripe.'],
  referencias: [
    { texto: 'Nicolau Steno, Prodromus (1669).' },
    { texto: 'Simon Winchester, O mapa que mudou o mundo (2001).' },
    { texto: 'Serviço Geológico do Brasil, mapas geológicos.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição do afloramento', 'Ler os textos indicados'],
  revisao: [['Superposição', 'Baixo é mais antigo.'], ['Corte', 'O que corta é mais jovem.'], ['Smith', '1815.']],
  avancado: {
    texto: `<h3>Discordâncias e o tempo perdido</h3>
<p>Uma discordância marca um intervalo sem registro, por erosão ou ausência de deposição ${tag('fato')}. Em Siccar Point, na Escócia, Hutton viu camadas quase verticais cobertas por camadas quase horizontais e concluiu que o tempo necessário para depositar, dobrar, erodir e voltar a depositar era imenso ${tag('fato')}. John Playfair escreveu que "a mente parecia ficar tonta olhando tão longe no abismo do tempo" ${tag('fato')}.</p>`,
    leituras: [{ texto: 'John Playfair, Illustrations of the Huttonian Theory of the Earth (1802).' }],
    exercicios: [
      mc('Uma discordância representa:', ['Camada contínua', 'Intervalo sem registro', 'Vulcão', 'Fóssil'], 1, 'Tempo perdido.'),
      mc('Siccar Point está na:', ['Itália', 'Escócia', 'Islândia', 'Grécia'], 1, 'Hutton.'),
      mc('Hutton concluiu a partir de Siccar Point que:', ['A Terra é jovem', 'O tempo geológico é imenso', 'Não há erosão', 'Tudo é vulcânico'], 1, 'Tempo profundo.'),
      disc('Explique a sequência de eventos que Hutton reconstruiu em Siccar Point e por que ela exige muito tempo.', ['Sequência', 'Processos', 'Tempo necessário', 'Conclusão'])],
  },
}),

aula({
  id: 'ct1-4', titulo: 'Datação radiométrica, sismologia e instrumentos da atmosfera', duracao: '150 min',
  aprendera: ['Calcular idades com o conceito de meia-vida', 'Escolher o método radiométrico adequado', 'Interpretar magnitude sísmica', 'Conhecer os instrumentos meteorológicos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Os princípios de Steno dão a ordem dos eventos. Como obter idades em anos? E como medir terremotos e o tempo atmosférico?</p>
<h3>Meia-vida</h3>
<p>Isótopos radioativos decaem a uma taxa constante: em cada meia-vida, metade dos átomos-pai vira átomo-filho ${tag('fato')}. Depois de n meias-vidas, resta a fração 1/2<sup>n</sup> do isótopo original ${tag('fato')}. Medindo a razão entre pai e filho num mineral, calcula-se o tempo desde sua formação ${tag('fato')}.</p>
<h3>Métodos</h3>
<p>O carbono-14, com meia-vida de cerca de 5.730 anos, data restos orgânicos até cerca de 50 mil anos ${tag('fato')}. Métodos como urânio-chumbo, em zircões, datam rochas de milhões a bilhões de anos ${tag('fato')}. Os zircões mais antigos conhecidos, de Jack Hills, na Austrália, têm cerca de 4,4 bilhões de anos ${tag('fato')}. A confiança vem da concordância entre métodos independentes ${tag('argumento')}.</p>
<h3>Sismologia</h3>
<p>Sismógrafos registram as ondas dos terremotos; a escala de magnitude de momento é logarítmica, e cada unidade a mais corresponde a cerca de 32 vezes mais energia liberada ${tag('fato')}.</p>
<h3>Meteorologia</h3>
<p>Termômetro, barômetro, higrômetro, pluviômetro e anemômetro medem temperatura, pressão, umidade, chuva e vento ${tag('fato')}. No Brasil, o Instituto Nacional de Meteorologia (Inmet) mantém redes de estações e publica os dados ${tag('fato')}.</p>`,
  vocabulario: [
    ['Isótopo', 'Variante de um elemento com número diferente de nêutrons.'],
    ['Meia-vida', 'Tempo para metade dos átomos de um isótopo radioativo decair.'],
    ['Datação absoluta', 'Determinação da idade em anos.'],
    ['Magnitude', 'Medida da energia liberada por um terremoto.'],
    ['Pluviômetro', 'Instrumento que mede a chuva, em milímetros.'],
  ],
  exemplos: `<p><strong>Calculando com a meia-vida:</strong> um osso tem 25% do carbono-14 que tinha quando o animal morreu. Passaram 2 meias-vidas (100% → 50% → 25%), ou seja, cerca de 2 × 5.730 = 11.460 anos. Se restasse 12,5%, seriam 3 meias-vidas, cerca de 17.190 anos.</p>`,
  contexto: `<p><strong>No mundo:</strong> Ernest Rutherford e Bertram Boltwood propuseram, no início do século XX, usar a radioatividade para datar rochas ${tag('fato')}. <strong>No Brasil:</strong> laboratórios de geocronologia de universidades brasileiras datam rochas do território nacional ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a concordância entre métodos dá confiança às idades', tag: 'argumento',
    premissas: ['Métodos radiométricos diferentes usam elementos, meias-vidas e minerais diferentes.', 'Se as hipóteses de um método estivessem erradas, não haveria razão para que outros dessem o mesmo resultado.', 'Medidas por métodos independentes na mesma rocha costumam concordar dentro das margens de erro.'],
    conclusao: 'Logo, a concordância entre métodos independentes torna as idades confiáveis.',
    nota: 'Há casos de discordância, que são estudados e geralmente explicados por alteração posterior da rocha.',
  },
  objecoes: [
    { objecao: 'A taxa de decaimento pode ter mudado no passado, invalidando as idades.', tag: 'debate',
      resposta: 'As taxas de decaimento dependem de forças nucleares e foram testadas sob grandes variações de temperatura, pressão e condições químicas, sem mudança relevante. Observações astronômicas de objetos distantes, cuja luz partiu há muito tempo, também são compatíveis com taxas constantes. Não há evidência de variação que alterasse as idades.' },
  ],
  aplicacao: `<p>Resolva três problemas de meia-vida com carbono-14 e um com um isótopo de meia-vida longa, e explique por que o carbono-14 não serve para datar uma rocha de 100 milhões de anos.</p>`,
  fonte: {
    obra: 'Arthur Holmes, The Age of the Earth (1913); Inmet, dados das estações meteorológicas', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' },
    orientacao: `<p>Em Holmes, a proposta de uma escala de tempo com datações radiométricas. No Inmet, os dados de uma estação próxima de você.</p>`,
  },
  perguntas: [
    { p: 'Qual a meia-vida do carbono-14?', r: 'Cerca de 5.730 anos.' },
    { p: 'Quanto resta após 3 meias-vidas?', r: '1/8, ou 12,5%.' },
    { p: 'Quanto mais energia libera um terremoto de uma unidade a mais de magnitude?', r: 'Cerca de 32 vezes.' },
  ],
  exercicios: [
    mc('Restam 50% do isótopo. Passou:', ['1 meia-vida', '2 meias-vidas', '3 meias-vidas', 'Nenhuma'], 0, 'Metade.'),
    mc('Com 6,25% restante, passaram:', ['2 meias-vidas', '3 meias-vidas', '4 meias-vidas', '5 meias-vidas'], 2, '1/16.'),
    mc('Para datar uma rocha de 2 bilhões de anos usa-se:', ['Carbono-14', 'Urânio-chumbo', 'Termômetro', 'Barômetro'], 1, 'Meia-vida longa.'),
    mc('Os zircões mais antigos conhecidos têm cerca de:', ['4 mil anos', '4,4 milhões de anos', '4,4 bilhões de anos', '14 bilhões de anos'], 2, 'Jack Hills.'),
    mc('A chuva é medida com:', ['Barômetro', 'Pluviômetro', 'Anemômetro', 'Higrômetro'], 1, 'Milímetros.'),
    disc('Resolva os problemas de meia-vida e explique por que o carbono-14 não data rochas antigas.', ['Cálculos', 'Escolha do método', 'Explicação', 'Clareza']),
  ],
  resumo: ['Meia-vida: resta 1/2ⁿ.', 'C-14: ~5.730 anos, até ~50 mil anos.', 'U-Pb em zircões; Jack Hills ~4,4 bi.', 'Magnitude: ×32 por unidade.', 'Instrumentos; Inmet.'],
  referencias: [
    { texto: 'Arthur Holmes, The Age of the Earth (1913).' },
    { texto: 'Instituto Nacional de Meteorologia (Inmet).', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' } },
    { texto: 'G. Brent Dalrymple, The Age of the Earth (1991).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os problemas de meia-vida', 'Consultar os dados do Inmet'],
  revisao: [['1/2ⁿ', 'Meia-vida.'], ['C-14', '5.730 anos.'], ['×32', 'Por unidade de magnitude.']],
  avancado: {
    texto: `<h3>Isócronas</h3>
<p>Para evitar a incerteza sobre quanto átomo-filho já existia quando a rocha se formou, usa-se o método da isócrona: medem-se vários minerais da mesma rocha, e a inclinação da reta formada pelos pontos dá a idade ${tag('fato')}. Se os pontos não formam uma reta, a rocha foi perturbada, e o método o revela ${tag('fato')}.</p>`,
    leituras: [{ texto: 'G. Brent Dalrymple, The Age of the Earth (1991), cap. 3.' }],
    exercicios: [
      mc('O método da isócrona usa:', ['Um só mineral', 'Vários minerais da mesma rocha', 'Fósseis', 'Ar'], 1, 'Reta.'),
      mc('A idade é dada pela:', ['Cor da rocha', 'Inclinação da reta', 'Altura da montanha', 'Profundidade'], 1, 'Gráfico.'),
      mc('Pontos fora da reta indicam:', ['Rocha perturbada', 'Idade zero', 'Rocha perfeita', 'Erro impossível'], 0, 'Controle interno.'),
      disc('Explique por que o método da isócrona dispensa saber a quantidade inicial de átomo-filho.', ['Problema', 'Método', 'Controle', 'Conclusão'])],
  },
}),

avaliacao('ct1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a estrutura e o tempo da Terra, minerais e rochas, princípios estratigráficos e métodos de datação e medição, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e a descrição do afloramento.</li><li>Refaça os problemas de meia-vida.</li></ul>`,
[
  disc('Reconstrua a sequência de eventos de um perfil geológico (dado ou observado por você), justificando cada passo pelos princípios estudados e indicando que método radiométrico usaria para datar uma das rochas.', ['Sequência', 'Princípios', 'Método radiométrico', 'Justificativa']),
  disc('Explique como a ciência conhece o interior e a idade da Terra sem observá-los diretamente, e distinga o que essas conclusões afirmam do que não afirmam sobre a criação.', ['Evidência indireta', 'Idade da Terra', 'Limites da ciência', 'Distinção com a doutrina']),
]),
];
