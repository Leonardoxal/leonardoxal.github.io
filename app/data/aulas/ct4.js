// Ciências da Terra IV — grandes sistemas (etapa 8 do percurso de Ciências da Terra).
// Sismos, vulcões e tsunamis; atmosfera, oceanos e El Niño; paleontologia e história da vida;
// a geologia do Brasil, de crátons e bacias à abertura do Atlântico Sul.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ct4-1', titulo: 'Sismos, vulcões e tsunamis', duracao: '150 min',
  aprendera: ['Distinguir hipocentro e epicentro e localizar um sismo', 'Relacionar o tipo de vulcão à composição do magma', 'Explicar a formação de tsunamis', 'Conhecer a sismicidade brasileira'],
  prereq: ['Ciências da Terra III (módulo CT3)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que alguns terremotos e vulcões são tão destrutivos, e por que o Brasil quase não os tem?</p>
<h3>Sismos</h3>
<p>Um terremoto libera energia acumulada nas rochas quando uma falha se rompe; o ponto de ruptura em profundidade é o hipocentro, e o ponto da superfície acima dele, o epicentro ${tag('fato')}. As ondas P, mais rápidas, chegam antes das ondas S; a diferença de tempo entre elas indica a distância até o sismo, e com três estações se localiza o epicentro ${tag('fato')}.</p>
<h3>Vulcões</h3>
<p>Magmas pobres em sílica, como os basálticos, são fluidos e geram erupções efusivas, como no Havaí; magmas ricos em sílica são viscosos, retêm gases e geram erupções explosivas, como a do Monte Santa Helena em 1980 ${tag('fato')}.</p>
<h3>Tsunamis</h3>
<p>Tsunamis são ondas geradas pelo deslocamento súbito do fundo do mar, sobretudo por grandes sismos de subducção ${tag('fato')}. O tsunami de 26 de dezembro de 2004, no oceano Índico, matou mais de 200 mil pessoas ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>O maior sismo registrado no Brasil ocorreu em 1955 na Serra do Tombador, em Mato Grosso, com magnitude estimada de 6,2 ${tag('fato')}. Em 1986, uma sequência de tremores em João Câmara (RN), com magnitude de até cerca de 5,1, danificou casas ${tag('fato')}. Sismos intraplaca ocorrem em falhas antigas reativadas por esforços que se transmitem pela placa ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Hipocentro', 'Ponto de origem do sismo em profundidade.'],
    ['Epicentro', 'Ponto da superfície acima do hipocentro.'],
    ['Ondas P e S', 'Ondas sísmicas de compressão (mais rápidas) e de cisalhamento.'],
    ['Viscosidade', 'Resistência de um líquido a fluir.'],
    ['Tsunami', 'Onda gerada por deslocamento súbito do fundo do mar.'],
  ],
  exemplos: `<p><strong>Localizando um sismo:</strong> numa estação, a onda S chegou 30 segundos depois da P. Se cada segundo de diferença corresponde a cerca de 8 km, o sismo ocorreu a cerca de 240 km. Com três estações, traçam-se três círculos de raio igual à distância de cada uma; o epicentro está na interseção.</p>`,
  contexto: `<p><strong>No mundo:</strong> o terremoto de Lisboa de 1755, seguido de tsunami e incêndio, marcou a cultura europeia e estimulou o estudo dos sismos ${tag('fato')}. <strong>No Brasil:</strong> o Centro de Sismologia da USP e a Rede Sismográfica Brasileira monitoram os tremores no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que magmas ricos em sílica produzem erupções explosivas', tag: 'argumento',
    premissas: ['A sílica forma cadeias que tornam o magma viscoso.', 'Num magma viscoso, os gases dissolvidos não escapam facilmente.', 'Quando a pressão cai perto da superfície, os gases se expandem bruscamente e fragmentam o magma.'],
    conclusao: 'Logo, magmas ricos em sílica tendem a erupções explosivas.',
    nota: 'Por isso vulcões de zonas de subducção, com magmas mais silicosos, são em geral mais perigosos que os de pontos quentes oceânicos.',
  },
  objecoes: [
    { objecao: 'Se não se pode prever terremotos, estudá-los é inútil.', tag: 'debate',
      resposta: 'Não se prevê o dia e a hora de um sismo, mas mapear falhas e a sismicidade permite estimar onde e com que frequência são prováveis. Isso orienta normas de construção, planos de emergência e sistemas de alerta de tsunami, que salvam vidas. Previsão exata e avaliação de risco são coisas diferentes.' },
  ],
  aplicacao: `<p>Resolva o problema de localização de um sismo com três estações (dados fornecidos ou obtidos de um boletim sismológico) e explique por que o Brasil tem sismos menores que o Chile.</p>`,
  fonte: {
    obra: 'Centro de Sismologia da USP, boletins sísmicos brasileiros; Voltaire, Poema sobre o desastre de Lisboa (1756)', link: null,
    orientacao: `<p>Nos boletins, localize os maiores sismos brasileiros e suas magnitudes. No poema de Voltaire, observe como o desastre levou a perguntas sobre o mal; compare com a explicação natural do fenômeno.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre hipocentro e epicentro?', r: 'O hipocentro é o ponto de ruptura em profundidade; o epicentro, o ponto da superfície acima dele.' },
    { p: 'Por que magmas silicosos são explosivos?', r: 'Porque são viscosos e retêm gases, que se expandem bruscamente.' },
    { p: 'Qual o maior sismo registrado no Brasil?', r: 'O da Serra do Tombador (MT), em 1955, com magnitude estimada de 6,2.' },
  ],
  exercicios: [
    mc('A onda sísmica mais rápida é a:', ['S', 'P', 'Superficial', 'Tsunami'], 1, 'Compressão.'),
    mc('Diferença S−P de 20 s, a 8 km/s de diferença, dá distância de cerca de:', ['20 km', '80 km', '160 km', '1.600 km'], 2, '20 × 8.'),
    mc('Erupções efusivas típicas do Havaí têm magma:', ['Rico em sílica', 'Pobre em sílica', 'Sem gases', 'Sólido'], 1, 'Basáltico.'),
    mc('O tsunami do oceano Índico foi em:', ['1755', '1955', '2004', '2011'], 2, 'Mais de 200 mil mortes.'),
    mc('Os tremores de João Câmara (RN) ocorreram em:', ['1955', '1986', '2004', '2019'], 1, 'Sequência sísmica.'),
    disc('Localize um sismo com três estações e explique por que o Brasil tem sismos menores que o Chile.', ['Cálculo', 'Localização', 'Explicação tectônica', 'Fontes']),
  ],
  resumo: ['Hipocentro e epicentro; ondas P e S.', 'Sílica e explosividade.', 'Tsunamis; Índico 2004.', 'Brasil: Serra do Tombador 1955 (6,2), João Câmara 1986.', 'Risco e não previsão exata.'],
  referencias: [
    { texto: 'Centro de Sismologia da USP, boletins sísmicos.' },
    { texto: 'Frank Press e outros, Para entender a Terra (manual), caps. sobre sismos e vulcões.' },
    { texto: 'Voltaire, Poema sobre o desastre de Lisboa (1756).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o problema de localização', 'Consultar os boletins sísmicos'],
  revisao: [['P antes de S', 'Distância.'], ['Sílica', 'Explosivo.'], ['1955', 'Serra do Tombador.']],
  avancado: {
    texto: `<h3>Sismos induzidos</h3>
<p>Atividades humanas podem provocar pequenos sismos: o enchimento de grandes reservatórios, a injeção de fluidos no subsolo e a mineração alteram as tensões nas rochas ${tag('fato')}. No Brasil, foram registrados tremores associados ao enchimento de reservatórios de hidrelétricas ${tag('fato')}. Distinguir um sismo induzido de um natural exige análise de localização, profundidade e cronologia ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Literatura sobre sismicidade induzida.' }],
    exercicios: [
      mc('Sismos induzidos podem resultar de:', ['Fases da Lua', 'Enchimento de reservatórios', 'Chuva fina', 'Vento'], 1, 'Tensões.'),
      mc('No Brasil, sismos induzidos foram associados a:', ['Hidrelétricas', 'Praias', 'Florestas', 'Cidades'], 0, 'Reservatórios.'),
      mc('Distinguir sismo induzido exige analisar:', ['Só a magnitude', 'Localização, profundidade e cronologia', 'A cor das rochas', 'A temperatura'], 1, 'Método.'),
      disc('Explique como se investigaria se um tremor perto de uma represa foi induzido.', ['Dados necessários', 'Critérios', 'Alternativas', 'Conclusão proporcional'])],
  },
}),

aula({
  id: 'ct4-2', titulo: 'Atmosfera e oceanos: circulação, correntes, El Niño e o clima do Brasil', duracao: '150 min',
  aprendera: ['Explicar a circulação geral da atmosfera', 'Explicar a Zona de Convergência Intertropical', 'Explicar El Niño e La Niña e seus efeitos no Brasil', 'Distinguir tempo e clima'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o Nordeste brasileiro tem secas em certos anos e o Sul tem enchentes? A resposta passa pelo oceano Pacífico.</p>
<h3>Tempo e clima</h3>
<p>Tempo é o estado da atmosfera num momento; clima é a estatística do tempo em décadas, em geral 30 anos ${tag('fato')}.</p>
<h3>Circulação geral</h3>
<p>O equador recebe mais energia solar que os polos; o ar quente sobe perto do equador, desloca-se em altitude e desce por volta de 30° de latitude, formando as células de Hadley ${tag('fato')}. A rotação da Terra desvia os ventos (efeito Coriolis), formando os alísios ${tag('fato')}. A Zona de Convergência Intertropical, onde os alísios se encontram, concentra chuvas e se desloca ao longo do ano; sua posição influi na estação chuvosa do norte do Nordeste ${tag('fato')}.</p>
<h3>Oceanos</h3>
<p>Correntes oceânicas transportam calor; a corrente do Brasil leva águas quentes para o sul ao longo da costa ${tag('fato')}.</p>
<h3>El Niño e La Niña</h3>
<p>No El Niño, as águas do Pacífico equatorial central e oriental ficam mais quentes que o normal; na La Niña, mais frias ${tag('fato')}. No Brasil, o El Niño tende a reduzir as chuvas no Norte e no norte do Nordeste e a aumentá-las no Sul; a La Niña tende ao padrão inverso ${tag('fato')}. São tendências, não certezas para cada evento ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Tempo', 'Estado da atmosfera num momento e lugar.'],
    ['Clima', 'Estatística do tempo em décadas.'],
    ['Célula de Hadley', 'Circulação em que o ar sobe no equador e desce perto de 30°.'],
    ['Efeito Coriolis', 'Desvio aparente dos movimentos pela rotação da Terra.'],
    ['El Niño', 'Aquecimento anômalo do Pacífico equatorial central e oriental.'],
  ],
  exemplos: `<p><strong>Tempo e clima numa frase:</strong> "Amanhã vai chover em Porto Alegre" é previsão do tempo. "Porto Alegre tem chuvas bem distribuídas ao longo do ano" é descrição do clima. "Em anos de El Niño, o Sul tende a ter mais chuva" relaciona um padrão do oceano a uma tendência climática.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Meteorológica Mundial coordena a troca de dados entre os serviços nacionais ${tag('fato')}. <strong>No Brasil:</strong> o Centro de Previsão de Tempo e Estudos Climáticos (CPTEC) do INPE e o Inmet produzem previsões e boletins climáticos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que um aquecimento no Pacífico altera as chuvas no Nordeste', tag: 'argumento',
    premissas: ['O aquecimento do Pacífico equatorial desloca as áreas de ar ascendente e de chuva.', 'Esse deslocamento altera a circulação atmosférica de grande escala sobre a América do Sul, favorecendo ar descendente sobre o norte do Nordeste e a Amazônia.', 'Ar descendente inibe a formação de nuvens de chuva.'],
    conclusao: 'Logo, o El Niño tende a reduzir as chuvas no norte do Nordeste e na Amazônia.',
    nota: 'A temperatura do Atlântico tropical também influi, o que explica por que nem todo El Niño causa seca.',
  },
  objecoes: [
    { objecao: 'Se a previsão do tempo erra, a previsão do clima não pode acertar.', tag: 'debate',
      resposta: 'Prever o tempo de um dia específico daqui a um mês é impossível por causa do caos atmosférico. Mas prever estatísticas, como a tendência de chuva acima ou abaixo da média numa estação de El Niño, é outra tarefa, apoiada em padrões físicos de grande escala. Errar o detalhe não impede acertar a média.' },
  ],
  aplicacao: `<p>Escolha um ano de El Niño forte e um de La Niña e compare, com dados do Inmet ou do CPTEC, a chuva numa cidade do Nordeste e numa do Sul. Explique as diferenças e o que mais pode ter influído.</p>`,
  fonte: {
    obra: 'INPE/CPTEC, boletins de El Niño e La Niña; Inmet, normais climatológicas', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' },
    orientacao: `<p>Nos boletins, identifique anos de El Niño e La Niña. Nas normais climatológicas, a chuva média das cidades escolhidas, para comparar com os anos anômalos.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre tempo e clima?', r: 'Tempo é o estado momentâneo; clima é a estatística do tempo em décadas.' },
    { p: 'O que é o El Niño?', r: 'O aquecimento anômalo das águas do Pacífico equatorial central e oriental.' },
    { p: 'Que efeito o El Niño tende a ter no Sul do Brasil?', r: 'Aumentar as chuvas.' },
  ],
  exercicios: [
    mc('As células de Hadley têm ar descendente perto de:', ['0°', '30°', '60°', '90°'], 1, 'Latitudes subtropicais.'),
    mc('Os alísios são desviados pelo:', ['Efeito estufa', 'Efeito Coriolis', 'Magnetismo', 'Albedo'], 1, 'Rotação.'),
    mc('Na La Niña, o Pacífico equatorial fica:', ['Mais quente', 'Mais frio', 'Igual', 'Congelado'], 1, 'Oposto ao El Niño.'),
    mc('O El Niño tende a reduzir as chuvas no:', ['Sul', 'Norte do Nordeste', 'Uruguai', 'Pampa'], 1, 'Seca.'),
    mc('Clima é definido em geral por:', ['Um dia', 'Um mês', 'Cerca de 30 anos', 'Mil anos'], 2, 'Normais.'),
    disc('Compare a chuva de uma cidade do Nordeste e de uma do Sul em anos de El Niño e La Niña, com dados e explicação.', ['Anos escolhidos', 'Dados', 'Explicação', 'Outros fatores']),
  ],
  resumo: ['Tempo e clima (30 anos).', 'Hadley, Coriolis, alísios.', 'ZCIT e o Nordeste.', 'Corrente do Brasil.', 'El Niño e La Niña: tendências.'],
  referencias: [
    { texto: 'INPE/CPTEC, boletins climáticos.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'Instituto Nacional de Meteorologia, normais climatológicas.', link: { url: 'https://portal.inmet.gov.br', rotulo: 'Inmet' } },
    { texto: 'Manuais de meteorologia e climatologia.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação com dados', 'Consultar os dados oficiais'],
  revisao: [['Clima', '30 anos.'], ['Coriolis', 'Desvio.'], ['El Niño', 'Seca no Norte, chuva no Sul.']],
  avancado: {
    texto: `<h3>Caos e previsibilidade</h3>
<p>Edward Lorenz mostrou em 1963 que pequenas diferenças nas condições iniciais de um modelo atmosférico crescem até tornar a previsão impossível após certo prazo ${tag('fato')}. Por isso a previsão do tempo tem limite prático de cerca de duas semanas, enquanto projeções climáticas tratam de médias sob forçantes conhecidas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Edward Lorenz, "Deterministic Nonperiodic Flow" (1963).' }],
    exercicios: [
      mc('O caos atmosférico foi mostrado por:', ['Lorenz', 'Hadley', 'Coriolis', 'Walker'], 0, '1963.'),
      mc('O limite prático da previsão do tempo é de cerca de:', ['Duas horas', 'Duas semanas', 'Dois anos', 'Dois séculos'], 1, 'Sensibilidade às condições iniciais.'),
      mc('Projeções climáticas tratam de:', ['O tempo de um dia', 'Médias sob forçantes', 'Terremotos', 'Marés apenas'], 1, 'Estatística.'),
      disc('Explique por que o caos limita a previsão do tempo, mas não impede projeções climáticas.', ['Caos', 'Previsão do tempo', 'Projeção climática', 'Distinção'])],
  },
}),

aula({
  id: 'ct4-3', titulo: 'Paleontologia e história da vida: escala do tempo e fósseis brasileiros', duracao: '150 min',
  aprendera: ['Usar a escala do tempo geológico', 'Situar os grandes eventos da história da vida', 'Explicar a formação de fósseis', 'Conhecer os principais sítios fossilíferos e a proteção legal dos fósseis no Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como se organiza a história de 4,5 bilhões de anos, e o que os fósseis brasileiros contam?</p>
<h3>A escala do tempo</h3>
<p>A história da Terra divide-se em éons: Hadeano, Arqueano, Proterozoico e Fanerozoico; o Fanerozoico, iniciado há cerca de 539 milhões de anos, divide-se nas eras Paleozoica, Mesozoica e Cenozoica ${tag('fato')}. As divisões baseiam-se em mudanças no registro fóssil e são datadas por métodos radiométricos ${tag('fato')}.</p>
<h3>Grandes eventos</h3>
<p>Estromatólitos, estruturas formadas por comunidades microbianas, têm registros de cerca de 3,5 bilhões de anos ${tag('fato')}. No início do Cambriano aparecem muitos grupos de animais com partes duras, a chamada "explosão cambriana" ${tag('fato')}. Os dinossauros dominaram ecossistemas terrestres no Mesozoico; os mamíferos diversificaram-se no Cenozoico ${tag('fato')}.</p>
<h3>Como se formam fósseis</h3>
<p>A fossilização exige soterramento rápido, em geral em sedimentos finos, e condições que reduzam a decomposição; por isso o registro é incompleto e favorece organismos com partes duras ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>A Bacia do Araripe guarda fósseis de peixes, insetos, plantas e pterossauros excepcionalmente preservados, do Cretáceo ${tag('fato')}. No Rio Grande do Sul, rochas do Triássico guardam alguns dos dinossauros mais antigos conhecidos, como o <em>Staurikosaurus</em> ${tag('fato')}. Fósseis são bens da União, e sua extração depende de autorização (Decreto-Lei nº 4.146/1942) ${tag('fato')}. O incêndio do Museu Nacional, em 2018, destruiu grande parte de seu acervo científico ${tag('fato')}.</p>`,
  vocabulario: [
    ['Éon', 'Maior divisão do tempo geológico.'],
    ['Fanerozoico', 'Éon da vida visível, iniciado há cerca de 539 milhões de anos.'],
    ['Estromatólito', 'Estrutura laminada formada por comunidades microbianas.'],
    ['Fossilização', 'Processo de preservação de restos ou vestígios nas rochas.'],
    ['Icnofóssil', 'Vestígio de atividade de um organismo, como pegadas e tocas.'],
  ],
  exemplos: `<p><strong>A história da Terra num ano:</strong> se os 4,54 bilhões de anos fossem um ano, os primeiros estromatólitos surgiriam no fim de março; a explosão cambriana, em meados de novembro; os dinossauros, em meados de dezembro, desaparecendo no dia 26; e os seres humanos modernos, nos últimos 35 minutos do dia 31.</p>`,
  contexto: `<p><strong>No mundo:</strong> o folhelho de Burgess, no Canadá, preserva animais de corpo mole do Cambriano ${tag('fato')}. <strong>No Brasil:</strong> o Geopark Araripe, no Ceará, foi reconhecido pela UNESCO em 2006 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a ausência de um fóssil não prova a ausência do organismo', tag: 'argumento',
    premissas: ['A fossilização exige condições raras de soterramento e preservação.', 'Organismos de corpo mole e de ambientes erodidos raramente se fossilizam.', 'Grande parte das rochas antigas foi erodida ou está inacessível.'],
    conclusao: 'Logo, o registro fóssil é incompleto, e a ausência de um fóssil não prova que o organismo não existiu.',
    nota: 'Ainda assim, a ordem dos fósseis nas camadas é consistente em todo o mundo, o que torna o registro informativo.',
  },
  objecoes: [
    { objecao: 'Fósseis são só curiosidades; não importam para a ciência atual.', tag: 'debate',
      resposta: 'Fósseis datam rochas, indicam ambientes antigos, mostram extinções e mudanças climáticas passadas e ajudam a localizar recursos como petróleo. São também patrimônio científico e cultural, por isso protegidos por lei. O tráfico de fósseis brasileiros é crime e priva o país de seu patrimônio.' },
  ],
  aplicacao: `<p>Escolha um sítio fossilífero brasileiro e apresente: idade das rochas, ambiente de formação, principais fósseis e o que eles revelam, e a situação de proteção do sítio.</p>`,
  fonte: {
    obra: 'Decreto-Lei nº 4.146/1942; Comissão Internacional de Estratigrafia, Carta Cronoestratigráfica Internacional', link: null,
    orientacao: `<p>No Decreto-Lei, a proteção dos depósitos fossilíferos. Na carta estratigráfica, situe a idade do sítio escolhido.</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro éons?', r: 'Hadeano, Arqueano, Proterozoico e Fanerozoico.' },
    { p: 'Por que o registro fóssil é incompleto?', r: 'Porque a fossilização exige condições raras e muitas rochas foram erodidas.' },
    { p: 'De quem são os fósseis no Brasil?', r: 'Da União (Decreto-Lei nº 4.146/1942).' },
  ],
  exercicios: [
    mc('O Fanerozoico começou há cerca de:', ['4,5 bilhões de anos', '539 milhões de anos', '66 milhões de anos', '10 mil anos'], 1, 'Cambriano.'),
    mc('Os dinossauros dominaram na era:', ['Paleozoica', 'Mesozoica', 'Cenozoica', 'Arqueana'], 1, 'Triássico ao Cretáceo.'),
    mc('Estromatólitos são formados por:', ['Dinossauros', 'Comunidades microbianas', 'Plantas com flores', 'Mamíferos'], 1, '3,5 bilhões de anos.'),
    mc('O Staurikosaurus foi encontrado no:', ['Ceará', 'Rio Grande do Sul', 'Amazonas', 'Bahia'], 1, 'Triássico.'),
    mc('O Geopark Araripe foi reconhecido pela UNESCO em:', ['1986', '2006', '2018', '2024'], 1, 'Ceará.'),
    disc('Apresente um sítio fossilífero brasileiro: idade, ambiente, fósseis e proteção.', ['Idade', 'Ambiente', 'Fósseis', 'Proteção']),
  ],
  resumo: ['Éons e eras.', 'Estromatólitos; explosão cambriana.', 'Fossilização e registro incompleto.', 'Araripe; dinossauros do Triássico gaúcho.', 'DL 4.146/1942; Museu Nacional (2018).'],
  referencias: [
    { texto: 'Comissão Internacional de Estratigrafia, Carta Cronoestratigráfica Internacional.' },
    { texto: 'Decreto-Lei nº 4.146, de 1942.' },
    { texto: 'Manuais de paleontologia.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a apresentação do sítio', 'Consultar as fontes indicadas'],
  revisao: [['539 Ma', 'Início do Fanerozoico.'], ['Araripe', 'Cretáceo.'], ['DL 4.146', 'Fósseis da União.']],
  avancado: {
    texto: `<h3>Os primeiros americanos</h3>
<p>O crânio conhecido como Luzia, encontrado na região de Lagoa Santa (MG), está entre os restos humanos mais antigos das Américas, com idade de cerca de 11 mil anos ${tag('fato')}. Peter Lund estudou as cavernas de Lagoa Santa no século XIX ${tag('fato')}. As rotas e as datas do povoamento das Américas continuam em debate, com sítios brasileiros como a Serra da Capivara (PI) no centro de discussões ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura sobre o povoamento das Américas.' }],
    exercicios: [
      mc('O crânio de Luzia foi encontrado em:', ['Lagoa Santa (MG)', 'Serra da Capivara (PI)', 'Araripe (CE)', 'Santa Maria (RS)'], 0, 'Cerca de 11 mil anos.'),
      mc('As cavernas de Lagoa Santa foram estudadas no século XIX por:', ['Lund', 'Darwin', 'Hutton', 'Wegener'], 0, 'Naturalista dinamarquês.'),
      mc('As datas do povoamento das Américas são:', ['Consensuais', 'Debatidas', 'Desconhecidas por completo', 'Doutrina'], 1, 'Debate.'),
      disc('Explique por que a datação de sítios como a Serra da Capivara é debatida e que evidências estão em jogo.', ['Sítio', 'Evidências', 'Debate', 'Métodos de datação'])],
  },
}),

aula({
  id: 'ct4-4', titulo: 'Geologia do Brasil: crátons, bacias sedimentares e a abertura do Atlântico Sul', duracao: '150 min',
  aprendera: ['Identificar os crátons e as grandes bacias sedimentares do Brasil', 'Explicar a abertura do Atlântico Sul', 'Relacionar a geologia ao relevo e aos recursos', 'Ler um mapa geológico do Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o Brasil tem rochas tão antigas, grandes bacias de petróleo na costa e a Serra do Mar ao longo do litoral?</p>
<h3>Crátons e faixas</h3>
<p>Crátons são porções antigas e estáveis da crosta; no Brasil destacam-se o Cráton Amazônico e o Cráton do São Francisco, com rochas de bilhões de anos ${tag('fato')}. Fernando Flávio Marques de Almeida definiu o Cráton do São Francisco em estudo de 1977 ${tag('fato')}. Entre os crátons há faixas de dobramentos formadas em antigas colisões continentais ${tag('fato')}.</p>
<h3>Bacias sedimentares</h3>
<p>Sobre esse embasamento formaram-se grandes bacias sedimentares, como as do Amazonas, do Parnaíba e do Paraná ${tag('fato')}. Na Bacia do Paraná estão os derrames basálticos da Formação Serra Geral e o Aquífero Guarani ${tag('fato')}.</p>
<h3>A abertura do Atlântico Sul</h3>
<p>No Cretáceo, a partir de cerca de 130 milhões de anos atrás, a separação entre a América do Sul e a África abriu o Atlântico Sul ${tag('fato')}. Nas primeiras fases, formaram-se lagos e golfos rasos onde se depositaram espessas camadas de sal; abaixo delas estão as rochas do pré-sal ${tag('fato')}. A margem continental brasileira é hoje uma margem passiva, sem limite de placas ${tag('fato')}. A Serra do Mar é uma escarpa ligada à evolução dessa margem ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Cráton', 'Porção antiga e estável da crosta continental.'],
    ['Embasamento', 'Rochas antigas sob as bacias sedimentares.'],
    ['Faixa de dobramentos', 'Cinturão de rochas deformadas em antigas colisões.'],
    ['Margem passiva', 'Borda continental sem limite de placas.'],
    ['Rifte', 'Fratura da crosta que pode evoluir para um oceano.'],
  ],
  exemplos: `<p><strong>Lendo o mapa geológico do Brasil:</strong> áreas de cor associada ao Pré-Cambriano no centro-leste e no norte marcam crátons e faixas antigas; grandes manchas de rochas paleozoicas e mesozoicas preenchem as bacias do Amazonas, do Parnaíba e do Paraná; uma faixa costeira de rochas jovens acompanha o litoral. A geologia ajuda a explicar onde estão o ferro, o petróleo e a água subterrânea.</p>`,
  contexto: `<p><strong>No mundo:</strong> o encaixe geológico entre o Nordeste brasileiro e o golfo da Guiné, na África, é usado como exemplo clássico da antiga união dos continentes ${tag('fato')}. <strong>No Brasil:</strong> o Serviço Geológico do Brasil publica o mapa geológico do país em várias escalas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o pré-sal está sob uma camada de sal na costa brasileira', tag: 'argumento',
    premissas: ['Na abertura do Atlântico Sul, formou-se primeiro um rifte com lagos, onde se depositaram rochas ricas em matéria orgânica e carbonatos.', 'Depois, o mar invadiu periodicamente bacias rasas e restritas, e a evaporação depositou camadas espessas de sal.', 'O sal, impermeável, selou as rochas de baixo, onde o petróleo se acumulou.'],
    conclusao: 'Logo, a sequência da abertura do oceano explica a posição do petróleo abaixo do sal.',
    nota: 'A mesma história gerou bacias semelhantes na costa africana, do outro lado do Atlântico.',
  },
  objecoes: [
    { objecao: 'O Brasil é geologicamente "parado"; nada de interessante acontece aqui.', tag: 'debate',
      resposta: 'O Brasil é hoje estável, mas sua crosta registra bilhões de anos de colisões, riftes, vulcanismo e mares antigos. Essa história explica os grandes depósitos de ferro, o petróleo do pré-sal, os aquíferos e o relevo. A estabilidade atual é, ela mesma, um resultado geológico.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique a abertura do Atlântico Sul com evidências de rochas e fósseis do Brasil e da África, situando o pré-sal e o Mesosaurus na história.</p>`,
  fonte: {
    obra: 'Fernando Flávio Marques de Almeida, "O Cráton do São Francisco" (1977); Serviço Geológico do Brasil, Mapa geológico do Brasil', link: { url: 'https://www.sgb.gov.br', rotulo: 'Serviço Geológico do Brasil' },
    orientacao: `<p>Em Almeida, a definição e os limites do cráton. No mapa do SGB, identifique crátons, bacias e a faixa costeira.</p>`,
  },
  perguntas: [
    { p: 'Quais os principais crátons do Brasil?', r: 'O Cráton Amazônico e o Cráton do São Francisco.' },
    { p: 'Quando começou a abertura do Atlântico Sul?', r: 'No Cretáceo, a partir de cerca de 130 milhões de anos atrás.' },
    { p: 'Por que a margem brasileira é passiva?', r: 'Porque não há limite de placas na costa.' },
  ],
  exercicios: [
    mc('O Cráton do São Francisco foi definido em 1977 por:', ['Orville Derby', 'F. F. M. de Almeida', 'Eschwege', 'Gorceix'], 1, 'Estudo clássico.'),
    mc('A Formação Serra Geral está na Bacia do:', ['Amazonas', 'Paraná', 'Parnaíba', 'Recôncavo'], 1, 'Basaltos.'),
    mc('O sal do pré-sal depositou-se por:', ['Vulcanismo', 'Evaporação em bacias restritas', 'Glaciação', 'Erosão'], 1, 'Abertura do oceano.'),
    mc('A margem continental brasileira é:', ['Ativa', 'Passiva', 'Transformante', 'Convergente'], 1, 'Sem limite de placas.'),
    mc('O encaixe geológico clássico liga o Nordeste brasileiro ao:', ['Golfo da Guiné', 'Mar Vermelho', 'Japão', 'Alasca'], 0, 'Antiga união.'),
    disc('Explique a abertura do Atlântico Sul com evidências de rochas e fósseis, situando o pré-sal e o Mesosaurus.', ['Sequência', 'Evidências de rochas', 'Fósseis', 'Pré-sal']),
  ],
  resumo: ['Crátons Amazônico e São Francisco.', 'Bacias do Amazonas, Parnaíba e Paraná.', 'Atlântico Sul: Cretáceo, ~130 Ma.', 'Sal e pré-sal.', 'Margem passiva.'],
  referencias: [
    { texto: 'Fernando Flávio Marques de Almeida, "O Cráton do São Francisco" (1977).' },
    { texto: 'Serviço Geológico do Brasil, Mapa geológico do Brasil.', link: { url: 'https://www.sgb.gov.br', rotulo: 'SGB' } },
    { texto: 'Manuais de geologia do Brasil.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação da abertura do Atlântico Sul', 'Consultar o mapa geológico'],
  revisao: [['Crátons', 'Amazônico e São Francisco.'], ['130 Ma', 'Atlântico Sul.'], ['Pré-sal', 'Sob o sal.']],
  avancado: {
    texto: `<h3>Gondwana e a formação do Brasil</h3>
<p>Muito antes da Pangeia, blocos que hoje formam o Brasil e a África juntaram-se em colisões no fim do Proterozoico, formando o supercontinente Gondwana ${tag('fato')}. As faixas de dobramentos brasileiras dessa idade, como as das províncias Mantiqueira e Tocantins, registram essas colisões, chamadas no Brasil de ciclo Brasiliano ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura sobre a evolução tectônica da plataforma Sul-Americana.' }],
    exercicios: [
      mc('Gondwana formou-se no fim do:', ['Cenozoico', 'Proterozoico', 'Mesozoico', 'Hadeano'], 1, 'Colisões.'),
      mc('As colisões que formaram Gondwana no Brasil são chamadas de ciclo:', ['Andino', 'Brasiliano', 'Alpino', 'Hercínico'], 1, 'Faixas de dobramentos.'),
      mc('A Província Mantiqueira é uma:', ['Bacia sedimentar', 'Faixa de dobramentos', 'Ilha vulcânica', 'Dorsal'], 1, 'Ciclo Brasiliano.'),
      disc('Descreva em ordem a formação de Gondwana, da Pangeia e do Atlântico Sul, situando o Brasil em cada fase.', ['Gondwana', 'Pangeia', 'Atlântico Sul', 'Brasil em cada fase'])],
  },
}),

avaliacao('ct4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre sismos e vulcões, atmosfera e oceanos, paleontologia e geologia do Brasil, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o problema de localização de sismo.</li><li>Releia a explicação da abertura do Atlântico Sul.</li></ul>`,
[
  disc('Conte a história geológica de uma região brasileira (sua ou outra), das rochas mais antigas às mais jovens, com fósseis, recursos e riscos, usando o mapa do SGB.', ['Sequência de eventos', 'Rochas e fósseis', 'Recursos e riscos', 'Fontes']),
  disc('Explique como um fenômeno do Pacífico (El Niño) afeta o Brasil e por que isso não contradiz a dificuldade de prever o tempo a longo prazo.', ['Mecanismo', 'Efeitos no Brasil', 'Tempo e clima', 'Previsibilidade']),
]),
];
