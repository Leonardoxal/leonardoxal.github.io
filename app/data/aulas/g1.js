// Geografia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Geografia).
// O método próprio da disciplina é a interpretação espacial: localizar, representar e explicar distribuições.
// Valores numéricos vêm com a fonte (IBGE, INPE) e o ano de referência.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'g1-1', titulo: 'O que é a geografia: espaço, lugar, paisagem, território e região', duracao: '90 min',
  aprendera: ['Explicar o objeto da geografia e sua diferença em relação à história', 'Usar com precisão espaço, lugar, paisagem, território e região', 'Explicar o que é escala geográfica', 'Conhecer a regionalização oficial do Brasil'],
  prereq: ['Lógica e argumentação (Degrau 4)', 'Fase teológica concluída'],
  explicacao: `
<h3>O problema</h3>
<p>Por que certas cidades crescem às margens de rios? Por que o Nordeste semiárido e a Amazônia, no mesmo país, têm paisagens e modos de vida tão diferentes? A geografia pergunta <strong>onde</strong> as coisas estão, <strong>por que ali</strong> e <strong>que relações</strong> há entre os lugares. Seu objeto é a organização do espaço, natural e humano.</p>

<h3>Uma ciência antiga</h3>
<p>Por volta de 240 a.C., Eratóstenes estimou a circunferência da Terra comparando a sombra do Sol ao meio-dia em Siene e em Alexandria ${tag('fato')}. Estrabão (século I) descreveu regiões do mundo conhecido, e Ptolomeu (século II) sistematizou coordenadas na <em>Geografia</em> ${tag('fato')}. A geografia nasce, portanto, como medida e como descrição.</p>

<h3>Cinco conceitos</h3>
<ul>
<li><strong>Espaço</strong>: para Milton Santos, em <em>A natureza do espaço</em> (1996), é um "conjunto indissociável de sistemas de objetos e sistemas de ações" ${tag('interpretacao')} — o que há (estradas, cidades, florestas) e o que as pessoas fazem com isso.</li>
<li><strong>Lugar</strong>: o espaço vivido e carregado de sentido. Yi-Fu Tuan, em <em>Espaço e lugar</em> (1977), mostrou como a experiência transforma espaço em lugar ${tag('interpretacao')}.</li>
<li><strong>Paisagem</strong>: o que se vê de um espaço, com suas formas naturais e humanas. Carl Sauer, em "A morfologia da paisagem" (1925), estudou a paisagem cultural como resultado da ação humana sobre a natural ${tag('interpretacao')}.</li>
<li><strong>Território</strong>: espaço apropriado e controlado por um poder (Estado, grupo, empresa), com fronteiras ${tag('fato')}.</li>
<li><strong>Região</strong>: porção do espaço com características que a distinguem, definida segundo um critério (natural, econômico, administrativo, cultural) ${tag('fato')}.</li>
</ul>

<h3>Escala geográfica</h3>
<p>O mesmo fenômeno muda de aparência conforme a escala de análise: o desmatamento pode ser visto num lote, num município, num bioma ou no planeta. Muitos erros de interpretação vêm de tirar conclusões numa escala com dados de outra ${tag('argumento')}.</p>

<h3>Regiões do Brasil</h3>
<p>A divisão em cinco grandes regiões (Norte, Nordeste, Centro-Oeste, Sudeste e Sul) é a regionalização oficial do IBGE desde 1970 ${tag('fato')}. Em 2017, o IBGE criou também as regiões geográficas intermediárias e imediatas, baseadas nas redes urbanas e nos deslocamentos da população ${tag('fato')}. Outras regionalizações, como a dos "três complexos regionais" (Amazônia, Nordeste, Centro-Sul), propostas por Pedro Pinchas Geiger em 1967, seguem critérios socioeconômicos e não respeitam limites estaduais ${tag('fato')}. Cada uma é útil para certas perguntas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Espaço', 'Conjunto de objetos e ações (Milton Santos).'],
    ['Lugar', 'Espaço vivido, com sentido para quem o habita.'],
    ['Paisagem', 'Formas visíveis do espaço, naturais e humanas.'],
    ['Território', 'Espaço apropriado e controlado por um poder.'],
    ['Região', 'Porção do espaço definida por um critério.'],
    ['Escala geográfica', 'Nível de análise: local, regional, nacional, global.'],
  ],
  exemplos: `<p><strong>Um mesmo rio, cinco conceitos:</strong> o rio São Francisco é paisagem (vales, barragens, caatinga), território (fronteiras estaduais, usinas, terras indígenas), região (o "vale do São Francisco"), lugar (para ribeirinhos e romeiros de Bom Jesus da Lapa) e espaço (o sistema de irrigação, transporte e energia e as ações que o organizam).</p>`,
  contexto: `<p><strong>No mundo:</strong> a geografia moderna formou-se no século XIX, na Alemanha e na França, com Humboldt, Ratzel e Vidal de la Blache. <strong>No Brasil:</strong> o IBGE (criado em 1936 como Instituto Nacional de Estatística, com o nome atual desde 1938) produz a cartografia e as regionalizações oficiais ${tag('fato')}; Milton Santos foi um dos geógrafos brasileiros de maior projeção internacional ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que toda regionalização depende de um critério', tag: 'argumento',
    premissas: ['Uma região reúne áreas semelhantes e separa áreas diferentes.', 'Semelhança e diferença só existem em relação a um aspecto (clima, economia, cultura, administração).', 'Escolher o aspecto é escolher o critério.'],
    conclusao: 'Logo, não há regionalização "natural" única: toda divisão regional depende de um critério, que deve ser explicitado.',
    nota: 'O paralelo com a periodização em História (aula h1-2) é exato: dividir o espaço, como dividir o tempo, é interpretação com critério.',
  },
  objecoes: [
    { objecao: 'As cinco regiões do IBGE são a divisão verdadeira do Brasil.', tag: 'debate',
      resposta: 'São a divisão oficial e útil para estatística e administração, porque seguem limites estaduais. Para estudar economia ou rede urbana, outras regionalizações podem explicar melhor. "Oficial" não é sinônimo de "única".' },
  ],
  aplicacao: `<p>Descreva o lugar onde você mora usando os cinco conceitos da aula, um parágrafo para cada, e indique em que escala cada descrição foi feita.</p>`,
  fonte: {
    obra: 'Milton Santos, A natureza do espaço (1996), cap. 2; IBGE, Divisão regional do Brasil em regiões geográficas imediatas e intermediárias (2017), introdução', link: null,
    orientacao: `<p>Em Milton Santos, localize a definição de espaço e reescreva-a com suas palavras. No documento do IBGE, identifique o critério usado para definir as novas regiões e compare-o com o das cinco grandes regiões.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre espaço e lugar?', r: 'Espaço é o conjunto de objetos e ações; lugar é o espaço vivido, com sentido para quem o habita.' },
    { p: 'O que é escala geográfica?', r: 'O nível de análise de um fenômeno: local, regional, nacional ou global.' },
    { p: 'Qual o critério das regiões geográficas imediatas do IBGE (2017)?', r: 'As redes urbanas e os deslocamentos da população.' },
  ],
  exercicios: [
    mc('Quem estimou a circunferência da Terra comparando sombras em Siene e Alexandria?', ['Estrabão', 'Ptolomeu', 'Eratóstenes', 'Heródoto'], 2, 'Por volta de 240 a.C.'),
    mc('Para Milton Santos, o espaço é:', ['Apenas o relevo e o clima', 'Um conjunto indissociável de sistemas de objetos e de ações', 'O território de um Estado', 'A paisagem vista de cima'], 1, 'A natureza do espaço (1996).'),
    mc('Espaço apropriado e controlado por um poder, com fronteiras, é:', ['Paisagem', 'Lugar', 'Território', 'Escala'], 2, 'Território.'),
    mc('A divisão do Brasil em cinco grandes regiões é a oficial do IBGE desde:', ['1938', '1970', '1988', '2017'], 1, 'Desde 1970; em 2017 criaram-se as regiões imediatas e intermediárias.'),
    mc('Os "três complexos regionais" (Amazônia, Nordeste, Centro-Sul):', ['Seguem os limites estaduais', 'Seguem critérios socioeconômicos e não respeitam limites estaduais', 'São a divisão oficial atual', 'Baseiam-se só no clima'], 1, 'Proposta de Geiger (1967).'),
    disc('Escolha um fenômeno (por exemplo, o desmatamento ou o crescimento urbano) e mostre como sua interpretação muda em três escalas diferentes.', ['Escolhe o fenômeno', 'Descreve três escalas', 'Mostra mudança de interpretação', 'Evita conclusões indevidas entre escalas']),
  ],
  resumo: ['Geografia: onde, por que ali, que relações.', 'Eratóstenes, Estrabão, Ptolomeu.', 'Espaço, lugar, paisagem, território, região.', 'Escala geográfica muda a interpretação.', 'Brasil: 5 regiões (1970) e regiões imediatas e intermediárias (2017).'],
  referencias: [
    { texto: 'Milton Santos, A natureza do espaço (1996).' },
    { texto: 'Yi-Fu Tuan, Espaço e lugar (1977).' },
    { texto: 'Carl O. Sauer, "A morfologia da paisagem" (1925).' },
    { texto: 'IBGE, Divisão regional do Brasil em regiões geográficas imediatas e intermediárias (2017).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Espaço (Milton Santos)', 'Sistemas de objetos e sistemas de ações.'], ['Região', 'Definida por um critério.'], ['IBGE 2017', 'Regiões imediatas e intermediárias.']],
  avancado: {
    texto: `<h3>Correntes do pensamento geográfico</h3>
<p>O determinismo associado a Ratzel enfatizou a influência do meio sobre as sociedades; o possibilismo de Vidal de la Blache, as escolhas humanas diante das possibilidades do meio ${tag('interpretacao')}. A geografia quantitativa (anos 1950–1960) buscou modelos e estatística; a crítica (anos 1970) estudou o espaço como produto de relações sociais; a humanista, a experiência e o sentido dos lugares ${tag('interpretacao')}. Essas correntes são estudadas na etapa 6 do percurso.</p>
<h3>Espaço e tempo</h3>
<p>Milton Santos insistiu que o espaço acumula "rugosidades" — formas herdadas de outros tempos que permanecem e condicionam o presente, como o traçado colonial de uma cidade ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Paul Claval, História da geografia (1995).' }, { texto: 'Milton Santos, Por uma geografia nova (1978).' }],
    exercicios: [
      mc('O possibilismo é associado a:', ['Ratzel', 'Vidal de la Blache', 'Humboldt', 'Eratóstenes'], 1, 'Vidal de la Blache.'),
      mc('"Rugosidades", em Milton Santos, são:', ['Tipos de relevo', 'Formas herdadas que permanecem no espaço', 'Erros de mapa', 'Rochas sedimentares'], 1, 'Heranças espaciais de outros tempos.'),
      mc('A geografia quantitativa privilegiou:', ['Narrativas literárias', 'Modelos e estatística', 'Experiência subjetiva', 'Crítica marxista'], 1, 'Anos 1950–1960.'),
      disc('Identifique uma "rugosidade" na sua cidade (traçado, construção, uso do solo herdado) e explique como ela condiciona o presente.', ['Identifica a forma herdada', 'Data sua origem', 'Explica o condicionamento atual', 'Usa vocabulário da aula'])],
  },
}),

aula({
  id: 'g1-2', titulo: 'Localizar na Terra: coordenadas, fusos horários e escala cartográfica', duracao: '120 min',
  aprendera: ['Localizar pontos por latitude e longitude', 'Calcular diferenças de horário entre fusos', 'Converter escalas numéricas em distâncias reais', 'Situar o Brasil por coordenadas e fusos'],
  prereq: ['Aula anterior', 'Matemática básica: proporção e frações'],
  explicacao: `
<h3>O problema</h3>
<p>Para dizer onde algo está, é preciso um sistema de referência comum. A geografia usa a rede de coordenadas, os fusos horários e as escalas. Esta aula é técnica: exige praticar cálculos.</p>

<h3>Latitude e longitude</h3>
<p><strong>Latitude</strong> é a distância angular de um ponto ao Equador, de 0° a 90° Norte ou Sul. <strong>Longitude</strong> é a distância angular ao meridiano de origem, de 0° a 180° Leste ou Oeste ${tag('fato')}. O meridiano de Greenwich foi adotado como origem internacional na Conferência Internacional do Meridiano, em Washington, em 1884 ${tag('fato')}. Paralelos importantes: o Equador (0°), os trópicos de Câncer e de Capricórnio (cerca de 23°26') e os círculos polares (cerca de 66°34') ${tag('fato')}. O trópico de Capricórnio passa pelo Brasil, por exemplo na região de São Paulo ${tag('fato')}.</p>

<h3>Fusos horários</h3>
<p>A Terra gira 360° em cerca de 24 horas: 15° por hora. Por isso o mundo foi dividido, teoricamente, em 24 fusos de 15° ${tag('fato')}. Indo para leste, as horas aumentam; para oeste, diminuem. Os fusos reais seguem fronteiras políticas e decisões de cada país.</p>
<p>O Brasil tem quatro fusos oficiais: UTC−2 (Fernando de Noronha e ilhas oceânicas), UTC−3 (horário de Brasília), UTC−4 (parte do Norte e do Centro-Oeste) e UTC−5 (Acre e parte do Amazonas) ${tag('fato')}. O horário de verão foi extinto em 2019 ${tag('fato')}.</p>

<h3>Escala cartográfica</h3>
<p>Escala é a relação entre a distância no mapa e a distância real. <strong>Escala numérica</strong>: 1:50.000 significa que 1 cm no mapa equivale a 50.000 cm (500 m) na realidade. <strong>Escala gráfica</strong>: uma barra graduada, que continua correta se o mapa for ampliado ou reduzido — a numérica não ${tag('fato')}. Atenção ao vocabulário: um mapa de "grande escala" (1:10.000) mostra área pequena com muito detalhe; um de "pequena escala" (1:10.000.000) mostra área grande com pouco detalhe ${tag('fato')}.</p>

<h3>O Brasil em coordenadas</h3>
<p>O território brasileiro estende-se aproximadamente de 5° de latitude norte (monte Caburaí, em Roraima) a 33° sul (arroio Chuí, no Rio Grande do Sul), e de cerca de 34° a 74° de longitude oeste (da ponta do Seixas, na Paraíba, à nascente do rio Moa, no Acre) ${tag('fato')}. A área é de cerca de 8,5 milhões de km², segundo o IBGE ${tag('fato')}. A maior parte do país está no hemisfério sul e entre os trópicos.</p>`,
  vocabulario: [
    ['Latitude', 'Distância angular ao Equador, de 0° a 90° N ou S.'],
    ['Longitude', 'Distância angular ao meridiano de Greenwich, de 0° a 180° L ou O.'],
    ['Fuso horário', 'Faixa de cerca de 15° de longitude com a mesma hora oficial.'],
    ['UTC', 'Tempo universal coordenado, referência dos fusos.'],
    ['Escala numérica', 'Razão entre distância no mapa e distância real (ex.: 1:50.000).'],
    ['Escala gráfica', 'Barra graduada que indica distâncias reais.'],
  ],
  exemplos: `<p><strong>Cálculo de fuso:</strong> são 15h em Brasília (UTC−3). Em Rio Branco (UTC−5) são 13h; em Fernando de Noronha (UTC−2), 16h; em Lisboa (UTC+0, fora do horário de verão europeu), 18h.</p>
<p><strong>Cálculo de escala:</strong> num mapa 1:250.000, duas cidades estão a 8 cm. Distância real: 8 × 250.000 = 2.000.000 cm = 20 km.</p>`,
  contexto: `<p><strong>No mundo:</strong> os fusos foram padronizados no fim do século XIX, por necessidade das ferrovias e do telégrafo. <strong>No Brasil:</strong> os fusos foram adotados em 1913 e alterados várias vezes; a extensão leste–oeste do país explica os quatro fusos atuais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que 15° correspondem a uma hora', tag: 'argumento',
    premissas: ['A Terra completa uma rotação de 360° em cerca de 24 horas.', 'Se a rotação é uniforme, cada hora corresponde à mesma fração do giro.', '360° divididos por 24 horas resultam em 15° por hora.'],
    conclusao: 'Logo, uma diferença de 15° de longitude corresponde, em princípio, a uma hora de diferença na hora solar.',
    nota: 'Os fusos oficiais aproximam essa regra e a ajustam a fronteiras e conveniências políticas.',
  },
  objecoes: [
    { objecao: 'Se o mapa está em grande escala, ele mostra uma área grande.', tag: 'debate',
      resposta: 'É o contrário: 1:10.000 é uma fração maior que 1:10.000.000; mostra área pequena com muito detalhe. A confusão vem de pensar no tamanho da área, e não no tamanho da fração.' },
  ],
  aplicacao: `<p>Use um mapa ou aplicativo para encontrar as coordenadas da sua casa, da sede da sua diocese e de Roma. Calcule a diferença de horário entre sua cidade e Roma no inverno e no verão europeu.</p>`,
  fonte: {
    obra: 'IBGE, Atlas geográfico escolar, seções sobre coordenadas, fusos e escalas', link: null,
    orientacao: `<p>Leia as páginas sobre coordenadas geográficas, fusos horários do Brasil e escalas. Resolva os exercícios propostos no atlas e confira com os cálculos desta aula.</p>`,
  },
  perguntas: [
    { p: 'Quantos graus de longitude correspondem a uma hora?', r: '15°.' },
    { p: 'Quantos fusos horários oficiais tem o Brasil?', r: 'Quatro: UTC−2, −3, −4 e −5.' },
    { p: 'Que mapa mostra mais detalhe: 1:10.000 ou 1:1.000.000?', r: '1:10.000 (grande escala).' },
  ],
  exercicios: [
    mc('O meridiano de Greenwich foi adotado como origem internacional em:', ['1492', '1750', '1884', '1913'], 2, 'Conferência Internacional do Meridiano, Washington.'),
    mc('São 10h em Brasília. Que horas são em Rio Branco (Acre)?', ['8h', '9h', '11h', '12h'], 0, 'UTC−5: duas horas a menos que Brasília (UTC−3).'),
    mc('Num mapa 1:100.000, 5 cm correspondem a:', ['500 m', '5 km', '50 km', '500 km'], 1, '5 × 100.000 cm = 500.000 cm = 5 km.'),
    mc('Que escala continua correta se o mapa for ampliado?', ['A numérica', 'A gráfica', 'Nenhuma', 'As duas'], 1, 'A barra cresce junto com o mapa.'),
    mc('O trópico de Capricórnio:', ['Não passa pelo Brasil', 'Passa pelo Brasil, por exemplo na região de São Paulo', 'Passa por Roraima', 'Coincide com o Equador'], 1, 'Cerca de 23°26′ S.'),
    disc('Planeje uma viagem de avião de Fernando de Noronha a Rio Branco, partindo às 8h locais e com 7 horas de voo e conexões. A que horas locais você chega? Mostre o raciocínio e explique cada mudança de fuso.', ['Identifica os fusos de partida e chegada', 'Calcula corretamente', 'Explica o raciocínio', 'Apresenta a resposta em hora local']),
  ],
  resumo: ['Latitude (0–90° N/S) e longitude (0–180° L/O).', 'Greenwich desde 1884.', '15° por hora; Brasil com quatro fusos (UTC−2 a −5).', 'Escala numérica e gráfica; grande escala = mais detalhe.', 'Brasil: c. 5° N a 33° S; c. 8,5 milhões de km².'],
  referencias: [
    { texto: 'IBGE, Atlas geográfico escolar.' },
    { texto: 'IBGE, Área territorial brasileira (dados oficiais).' },
    { texto: 'Conferência Internacional do Meridiano, Washington (1884), atas.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Resolver o problema de fusos', 'Fazer os exercícios do atlas'],
  revisao: [['15°', 'Uma hora de diferença.'], ['Fusos do Brasil', 'UTC−2, −3, −4, −5.'], ['Grande escala', 'Área pequena, muito detalhe.']],
  avancado: {
    texto: `<h3>GPS e sistemas de referência</h3>
<p>O GPS calcula posições a partir do tempo que os sinais de vários satélites levam para chegar ao receptor ${tag('fato')}. As coordenadas dependem de um modelo matemático da forma da Terra (datum); o Brasil adota oficialmente o SIRGAS2000 ${tag('fato')}. Coordenadas do mesmo ponto em data diferentes podem divergir em dezenas de metros, o que importa em cartografia de detalhe ${tag('fato')}.</p>
<h3>A forma da Terra</h3>
<p>A Terra não é uma esfera perfeita: é achatada nos polos. O geoide é a superfície que aproxima o nível médio dos mares; o elipsoide é o modelo matemático usado nos cálculos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, Sistema de Referência Geocêntrico para as Américas (SIRGAS2000), documentação.' }],
    exercicios: [
      mc('O datum oficial do Brasil é:', ['WGS84 apenas', 'SIRGAS2000', 'Córrego Alegre', 'NAD27'], 1, 'Adotado oficialmente; compatível com o WGS84 para usos comuns.'),
      mc('O geoide é:', ['Um tipo de mapa', 'A superfície que aproxima o nível médio dos mares', 'Um satélite', 'Uma escala'], 1, 'Forma física aproximada da Terra.'),
      mc('O GPS calcula a posição a partir:', ['Da bússola', 'Do tempo de chegada de sinais de vários satélites', 'Da altitude do Sol', 'De mapas impressos'], 1, 'Trilateração com sinais de satélites.'),
      disc('Explique por que duas pessoas podem obter coordenadas diferentes para o mesmo ponto e como evitar esse erro num trabalho de campo.', ['Explica o datum', 'Explica a precisão do equipamento', 'Propõe procedimento', 'Usa exemplo'])],
  },
}),

aula({
  id: 'g1-3', titulo: 'Cartografia: projeções, elementos do mapa e leitura crítica', duracao: '120 min',
  aprendera: ['Explicar por que todo mapa plano distorce a Terra', 'Distinguir projeções conformes e equivalentes', 'Identificar os elementos obrigatórios de um mapa', 'Ler mapas criticamente, inclusive mapas históricos do Brasil'],
  prereq: ['Aula anterior (coordenadas e escala)'],
  explicacao: `
<h3>O problema</h3>
<p>Um mapa é uma representação seletiva: reduz, simplifica, escolhe o que mostrar. Ler mapas é como ler documentos — é preciso saber como foram feitos e com que intenção.</p>

<h3>Por que todo mapa distorce</h3>
<p>Não é possível representar a superfície de uma esfera num plano sem deformar distâncias, áreas, ângulos ou formas — resultado matemático demonstrado por Gauss no século XIX ${tag('fato')}. Toda projeção escolhe o que preservar:</p>
<ul>
<li><strong>Conformes</strong> preservam ângulos e formas locais. A projeção de Mercator (1569), útil para navegação porque as linhas de rumo constante são retas, exagera muito as áreas em altas latitudes: a Groenlândia parece tão grande quanto a África, que é cerca de quatorze vezes maior ${tag('fato')}.</li>
<li><strong>Equivalentes</strong> preservam as áreas, deformando as formas, como a projeção de Gall-Peters, popularizada nos anos 1970 ${tag('fato')}.</li>
<li><strong>Afiláticas</strong> não preservam nenhuma propriedade inteiramente, mas reduzem as distorções em conjunto (por exemplo, a de Robinson) ${tag('fato')}.</li>
</ul>

<h3>Elementos de um mapa</h3>
<p>Título, legenda, escala, orientação (norte), sistema de coordenadas ou projeção, fonte dos dados e data ${tag('fato')}. Sem fonte e data, um mapa temático não pode ser verificado — como um documento sem autoria.</p>

<h3>Mapas também argumentam</h3>
<p>Mark Monmonier, em <em>Como mentir com mapas</em> (1991), mostrou como escolhas de projeção, cor, intervalos de classe e recorte podem induzir conclusões ${tag('interpretacao')}. Ler criticamente é perguntar: o que foi incluído e excluído? que classes de valores foram usadas? quem fez o mapa e para quê?</p>

<h3>Mapas históricos do Brasil</h3>
<p>O planisfério de Cantino (1502) é um dos primeiros mapas a representar parte da costa do Brasil e a linha de Tordesilhas ${tag('fato')}. Mapas coloniais são fontes para a história do conhecimento do território e das disputas de fronteira, como as negociações do Tratado de Madri (1750), em que se usou o chamado "Mapa das Cortes" ${tag('fato')}.</p>`,
  vocabulario: [
    ['Projeção cartográfica', 'Método de representar a superfície da Terra num plano.'],
    ['Projeção conforme', 'Preserva ângulos e formas locais (ex.: Mercator).'],
    ['Projeção equivalente', 'Preserva áreas (ex.: Gall-Peters).'],
    ['Legenda', 'Explicação dos símbolos e cores do mapa.'],
    ['Mapa temático', 'Mapa que representa a distribuição de um fenômeno.'],
  ],
  exemplos: `<p><strong>Mesmos dados, mapas diferentes:</strong> a renda média por município pode ser mostrada com cinco classes de intervalos iguais ou com cinco classes de igual número de municípios; a primeira pode fazer quase todo o país parecer da mesma cor, a segunda realça diferenças. Nenhuma é falsa, mas cada uma destaca algo — e o leitor deve saber qual foi usada.</p>`,
  contexto: `<p><strong>No mundo:</strong> a cartografia acompanhou a navegação, os impérios e, hoje, os sistemas digitais. <strong>No Brasil:</strong> a cartografia oficial é produzida pelo IBGE e pela Diretoria de Serviço Geográfico do Exército; mapas coloniais estão em acervos como a Biblioteca Nacional e o Arquivo Histórico do Itamaraty ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a escolha da projeção depende do uso', tag: 'argumento',
    premissas: ['Nenhuma projeção preserva ao mesmo tempo áreas, ângulos e distâncias.', 'Usos diferentes exigem propriedades diferentes (navegação exige ângulos; comparação de áreas exige equivalência).', 'Escolher a propriedade preservada é escolher a projeção.'],
    conclusao: 'Logo, não há projeção "melhor" em absoluto: há a mais adequada a cada finalidade.',
    nota: 'Usar Mercator para comparar tamanhos de países é erro de método, não de desenho.',
  },
  objecoes: [
    { objecao: 'A projeção de Mercator foi feita para diminuir o Sul e glorificar a Europa.', tag: 'debate',
      resposta: 'Mercator a desenhou para a navegação, e a distorção de áreas é consequência matemática da propriedade conforme. Seu uso escolar em mapas-múndi gerais, porém, contribuiu para percepções distorcidas de tamanho — por isso a crítica ao uso é pertinente, mesmo que a acusação de intenção não se sustente.' },
  ],
  aplicacao: `<p>Compare o Brasil e a Groenlândia em um mapa de Mercator e num globo ou projeção equivalente. Registre no Caderno a diferença aparente e a real (consulte a área de cada um em fonte oficial) e explique a causa.</p>`,
  fonte: {
    obra: 'IBGE, Atlas geográfico escolar, seção de projeções; planisfério de Cantino (1502), reprodução', link: null,
    orientacao: `<p>No atlas, compare três projeções. Na reprodução do planisfério de Cantino, identifique a costa brasileira, a linha de Tordesilhas e o que o mapa sabia e não sabia sobre o interior.</p>`,
  },
  perguntas: [
    { p: 'Por que todo mapa plano distorce?', r: 'Porque não é possível representar uma superfície esférica num plano sem deformar alguma propriedade.' },
    { p: 'O que preserva a projeção de Mercator?', r: 'Os ângulos e as formas locais (é conforme); distorce as áreas em altas latitudes.' },
    { p: 'Quais os elementos de um mapa?', r: 'Título, legenda, escala, orientação, projeção ou coordenadas, fonte e data.' },
  ],
  exercicios: [
    mc('A projeção de Mercator é de:', ['1492', '1569', '1884', '1973'], 1, '1569.'),
    mc('Uma projeção equivalente preserva:', ['Ângulos', 'Áreas', 'Distâncias em todas as direções', 'Formas'], 1, 'Áreas.'),
    mc('No mapa de Mercator, a Groenlândia parece:', ['Menor que realmente é', 'Muito maior que realmente é', 'Do tamanho real', 'Fora do mapa'], 1, 'Exagero de áreas em altas latitudes.'),
    mc('Como mentir com mapas (1991) é de:', ['Milton Santos', 'Mark Monmonier', 'Mercator', 'Humboldt'], 1, 'Mark Monmonier.'),
    mc('O planisfério de Cantino (1502) é importante porque:', ['Mostra o interior do Brasil', 'É um dos primeiros a representar parte da costa do Brasil', 'Foi feito por Caminha', 'Mostra os fusos horários'], 1, 'Também traz a linha de Tordesilhas.'),
    disc('Encontre um mapa temático em uma notícia e faça sua leitura crítica: elementos presentes e ausentes, projeção, classes de valores e o que o mapa sugere ao leitor.', ['Identifica elementos presentes e ausentes', 'Analisa classes e cores', 'Identifica a mensagem sugerida', 'Propõe correção ou alternativa']),
  ],
  resumo: ['Todo mapa plano distorce (Gauss).', 'Conformes (Mercator, 1569) e equivalentes (Gall-Peters).', 'Elementos: título, legenda, escala, norte, projeção, fonte, data.', 'Mapas argumentam (Monmonier).', 'Cantino (1502) e Mapa das Cortes (1750).'],
  referencias: [
    { texto: 'Mark Monmonier, Como mentir com mapas (1991).' },
    { texto: 'IBGE, Atlas geográfico escolar.' },
    { texto: 'Planisfério de Cantino (1502), Biblioteca Estense, Módena.' },
    { texto: 'Jaime Cortesão, Alexandre de Gusmão e o Tratado de Madri (1950–1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Comparar três projeções no atlas'],
  revisao: [['Mercator', 'Conforme; exagera áreas em altas latitudes.'], ['Equivalente', 'Preserva áreas.'], ['Cantino', '1502: costa do Brasil e Tordesilhas.']],
  avancado: {
    texto: `<h3>Generalização cartográfica</h3>
<p>Ao reduzir a escala, o cartógrafo precisa simplificar: eliminar detalhes, suavizar contornos, agregar feições. A generalização é inevitável e envolve escolhas que afetam a leitura ${tag('interpretacao')}.</p>
<h3>Cartografia e poder</h3>
<p>J. B. Harley propôs ler mapas como textos com intenções políticas, e não como espelhos neutros do território ${tag('interpretacao')}. Críticos alertam para o risco de reduzir a cartografia a ideologia, ignorando seu rigor técnico ${tag('debate')}.</p>`,
    leituras: [{ texto: 'J. B. Harley, "Desconstruindo o mapa" (1989).' }],
    exercicios: [
      mc('Generalização cartográfica é:', ['Erro de impressão', 'Simplificação necessária ao reduzir a escala', 'Projeção equivalente', 'Mapa-múndi'], 1, 'Escolhas inevitáveis.'),
      mc('"Desconstruindo o mapa" (1989) é de:', ['Harley', 'Monmonier', 'Milton Santos', 'Ratzel'], 0, 'J. B. Harley.'),
      mc('Uma crítica à leitura de Harley é:', ['Ignorar a política', 'Reduzir a cartografia a ideologia, ignorando o rigor técnico', 'Exagerar a técnica', 'Usar só Mercator'], 1, 'Debate aberto.'),
      disc('Compare um mapa colonial e um mapa atual da mesma região do Brasil: o que cada um mostra, omite e por quê?', ['Identifica os dois mapas', 'Compara conteúdos', 'Explica as omissões pelo contexto', 'Conclusão'])],
  },
}),

aula({
  id: 'g1-4', titulo: 'Dados espaciais: censo, mapas temáticos e imagens de satélite', duracao: '120 min',
  aprendera: ['Usar dados do Censo e indicadores como densidade demográfica', 'Construir e interpretar mapas temáticos', 'Explicar o uso de imagens de satélite no monitoramento ambiental', 'Reconhecer erros comuns na interpretação de dados espaciais'],
  prereq: ['Aulas anteriores do módulo', 'Estatística básica (média, proporção)'],
  explicacao: `
<h3>O problema</h3>
<p>A geografia contemporânea trabalha com grandes volumes de dados: censos, levantamentos, imagens de satélite. Saber obtê-los, representá-los e interpretá-los sem erro é método central da disciplina.</p>

<h3>O Censo</h3>
<p>O IBGE realiza o Censo Demográfico em princípio a cada dez anos; o de 2022 contou cerca de 203 milhões de habitantes ${tag('fato')}. Os dados são divulgados por setores censitários, municípios, estados e regiões ${tag('fato')}. <strong>Densidade demográfica</strong> = população ÷ área (hab./km²). Ela é uma média: um município pode ter densidade baixa e uma cidade muito concentrada ${tag('argumento')}.</p>

<h3>Mapas temáticos</h3>
<ul>
<li><strong>Coroplético</strong>: áreas coloridas por classes de um indicador relativo (taxa, densidade, proporção). Não deve ser usado para números absolutos, porque áreas grandes chamariam atenção indevida ${tag('fato')}.</li>
<li><strong>Símbolos proporcionais</strong>: círculos de tamanho proporcional a valores absolutos (população, produção) ${tag('fato')}.</li>
<li><strong>Fluxos</strong>: setas para deslocamentos (migrações, mercadorias).</li>
</ul>

<h3>Satélites e monitoramento</h3>
<p>O sensoriamento remoto obtém informações da superfície por sensores a distância. O programa americano Landsat fornece imagens desde 1972 ${tag('fato')}. No Brasil, o INPE monitora o desmatamento da Amazônia com o PRODES, que produz estimativas anuais desde 1988 ${tag('fato')}, e o país desenvolve com a China os satélites CBERS, o primeiro lançado em 1999 ${tag('fato')}.</p>

<h3>Erros comuns</h3>
<ul>
<li><strong>Falácia ecológica</strong>: atribuir a indivíduos características medidas para áreas (um município rico pode ter muitos pobres) ${tag('fato')}.</li>
<li><strong>Problema da unidade de área modificável</strong>: os resultados mudam conforme os limites e o tamanho das unidades usadas para agregar os dados ${tag('fato')}.</li>
<li><strong>Correlação espacial não é causa</strong>: duas variáveis concentradas nas mesmas áreas podem depender de uma terceira.</li>
</ul>`,
  vocabulario: [
    ['Setor censitário', 'Menor unidade territorial de coleta do Censo.'],
    ['Densidade demográfica', 'População dividida pela área (hab./km²).'],
    ['Mapa coroplético', 'Áreas coloridas por classes de um indicador relativo.'],
    ['Sensoriamento remoto', 'Obtenção de informações da superfície por sensores a distância.'],
    ['Falácia ecológica', 'Atribuir a indivíduos o que se mediu para áreas.'],
    ['SIG', 'Sistema de informação geográfica: software que integra mapas e dados.'],
  ],
  exemplos: `<p><strong>Densidade enganosa:</strong> um município amazônico com 100 mil habitantes e 50 mil km² tem densidade de 2 hab./km², mas quase toda a população pode viver na sede e às margens de rios. A média municipal não descreve como as pessoas realmente se distribuem — por isso se usam também os setores censitários.</p>`,
  contexto: `<p><strong>No mundo:</strong> censos e satélites são instrumentos de governo, ciência e mercado em todos os países. <strong>No Brasil:</strong> o IBGE e o INPE são as instituições de referência; seus dados são públicos e permitem ao estudante fazer análises próprias, base das etapas avançadas de Geografia e também da Sociologia e da Economia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que um mapa coroplético não deve mostrar números absolutos', tag: 'argumento',
    premissas: ['No mapa coroplético, a cor preenche toda a área de cada unidade.', 'Unidades de área grande chamam mais atenção visual, independentemente do valor.', 'Com números absolutos, unidades grandes tendem a ter valores maiores só por serem grandes.'],
    conclusao: 'Logo, mapas coropléticos devem usar indicadores relativos (taxas, densidades); valores absolutos pedem símbolos proporcionais.',
    nota: 'Regra simples que evita muitos mapas enganosos em notícias.',
  },
  objecoes: [
    { objecao: 'Imagens de satélite mostram a verdade, sem interpretação.', tag: 'debate',
      resposta: 'A imagem depende do sensor, da resolução, da data, das nuvens e do processamento; classificar uma área como "desmatada" exige critérios e validação em campo. É evidência forte, mas interpretada — como qualquer fonte.' },
  ],
  aplicacao: `<p>Escolha seu estado e, com dados do Censo 2022 (IBGE), calcule a densidade demográfica de três municípios. Faça um mapa simples (à mão ou em planilha) e escreva três conclusões que os dados sustentam e uma que não sustentam.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2022, resultados de população por município; INPE, PRODES, nota metodológica', link: null,
    orientacao: `<p>No portal do IBGE, localize a população e a área de três municípios. Na nota do PRODES, identifique o que o programa mede, com que resolução e a partir de que ano.</p>`,
  },
  perguntas: [
    { p: 'Como se calcula a densidade demográfica?', r: 'População dividida pela área, em habitantes por km².' },
    { p: 'Para que serve o PRODES?', r: 'Para estimar anualmente o desmatamento da Amazônia por imagens de satélite (INPE, desde 1988).' },
    { p: 'O que é a falácia ecológica?', r: 'Atribuir a indivíduos características medidas para áreas.' },
  ],
  exercicios: [
    mc('Um município com 300.000 habitantes e 1.500 km² tem densidade de:', ['20 hab./km²', '200 hab./km²', '2.000 hab./km²', '450 hab./km²'], 1, '300.000 ÷ 1.500 = 200.'),
    mc('Para mostrar a população absoluta dos estados, o mais adequado é:', ['Mapa coroplético', 'Mapa de símbolos proporcionais', 'Projeção de Mercator', 'Escala gráfica'], 1, 'Coropléticos são para indicadores relativos.'),
    mc('O programa Landsat fornece imagens desde:', ['1957', '1972', '1988', '1999'], 1, '1972.'),
    mc('Os satélites CBERS são desenvolvidos pelo Brasil com:', ['Estados Unidos', 'China', 'França', 'Rússia'], 1, 'Primeiro lançamento em 1999.'),
    mc('"O município X é rico, logo seus moradores são ricos" é exemplo de:', ['Escala gráfica', 'Falácia ecológica', 'Projeção equivalente', 'Generalização cartográfica'], 1, 'Do agregado ao indivíduo.'),
    disc('Com dados públicos (IBGE ou INPE), construa um mapa ou tabela sobre um tema da sua região e redija a interpretação, indicando os limites dos dados e um possível erro de leitura a evitar.', ['Usa dados oficiais com fonte e ano', 'Representação adequada', 'Interpretação correta', 'Aponta limites e um erro a evitar']),
  ],
  resumo: ['Censo IBGE; 2022: c. 203 milhões.', 'Densidade = população ÷ área (é média).', 'Coroplético para relativos; símbolos proporcionais para absolutos.', 'Landsat (1972), PRODES (1988), CBERS (1999).', 'Falácia ecológica e unidade de área modificável.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2022: população e domicílios.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'INPE, PRODES: monitoramento do desmatamento da floresta amazônica brasileira por satélite.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'Mark Monmonier, Como mentir com mapas (1991).' },
    { texto: 'Stan Openshaw, The Modifiable Areal Unit Problem (1984).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Calcular densidades com dados do Censo'],
  revisao: [['Densidade', 'População ÷ área.'], ['Coroplético', 'Só para indicadores relativos.'], ['PRODES', 'INPE, desmatamento anual desde 1988.']],
  avancado: {
    texto: `<h3>Sistemas de informação geográfica</h3>
<p>Um SIG integra camadas (relevo, hidrografia, população, uso do solo) e permite cruzá-las: por exemplo, identificar áreas de risco de enchente sobrepondo declividade, rios e ocupação ${tag('fato')}. Softwares livres, como o QGIS, permitem esse trabalho sem custo ${tag('fato')}.</p>
<h3>Autocorrelação espacial</h3>
<p>A "primeira lei da geografia", formulada por Waldo Tobler (1970), afirma que tudo está relacionado com tudo, mas coisas próximas estão mais relacionadas que coisas distantes ${tag('interpretacao')}. Isso afeta a estatística: observações vizinhas não são independentes, o que exige métodos próprios ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Waldo Tobler, "A computer movie simulating urban growth in the Detroit region" (1970).' }, { texto: 'Documentação do QGIS (software livre de SIG).' }],
    exercicios: [
      mc('A "primeira lei da geografia" é de:', ['Tobler', 'Ratzel', 'Milton Santos', 'Mercator'], 0, 'Waldo Tobler, 1970.'),
      mc('Num SIG, cruzar declividade, rios e ocupação serve para:', ['Calcular fusos', 'Identificar áreas de risco', 'Escolher a projeção', 'Medir latitude'], 1, 'Sobreposição de camadas.'),
      mc('Autocorrelação espacial significa que:', ['Áreas vizinhas tendem a ter valores parecidos', 'Os dados são sempre independentes', 'Todo mapa distorce', 'A densidade é média'], 0, 'Exige métodos estatísticos próprios.'),
      disc('Proponha uma análise em SIG para um problema do seu município (enchentes, acesso a escolas, áreas verdes): camadas, fontes e pergunta.', ['Pergunta clara', 'Camadas pertinentes', 'Fontes de dados', 'Limites da análise'])],
  },
}),

avaliacao('g1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre conceitos, coordenadas, fusos, escalas, projeções e dados espaciais, e duas discursivas de aplicação. Inclui cálculos: tenha papel e calculadora.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de fuso e de escala.</li><li>Releia a regra do mapa coroplético.</li></ul>`,
[
  disc('Analise um mapa temático publicado por um órgão oficial (IBGE, INPE ou outro): elementos, projeção, tipo de mapa, adequação ao dado, conclusões que sustenta e que não sustenta.', ['Identifica elementos e tipo de mapa', 'Avalia a adequação ao dado', 'Conclusões sustentadas', 'Conclusões indevidas apontadas', 'Usa vocabulário técnico']),
  disc('Descreva sua região em três escalas e com duas regionalizações diferentes, explicando o critério de cada uma e o que cada recorte revela.', ['Três escalas', 'Duas regionalizações com critério', 'O que cada recorte revela', 'Conclusão']),
]),
];
