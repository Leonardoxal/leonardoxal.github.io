// Astronomia I — o céu visto da Terra, vocabulário e métodos (etapas 1 a 3 do percurso de Astronomia).
// Esfera celeste, estações e fases da Lua; coordenadas, unidades e magnitudes; telescópio, paralaxe,
// leis de Kepler como ferramenta e espectroscopia. Exemplos do céu do hemisfério sul.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'as1-1', titulo: 'O céu visto da Terra: esfera celeste, estações, fases da Lua e eclipses', duracao: '150 min',
  aprendera: ['Descrever o movimento diurno e a esfera celeste', 'Explicar as estações pela inclinação do eixo da Terra', 'Explicar as fases da Lua e os eclipses', 'Registrar observações do céu com data, hora e direção'],
  prereq: ['Degrau de lógica', 'Geometria básica'],
  explicacao: `
<h3>O problema</h3>
<p>Todas as noites as estrelas nascem a leste e se põem a oeste; a Lua muda de forma; o Sol sobe mais alto no verão. Explicar esses fenômenos foi o primeiro trabalho da astronomia.</p>
<h3>A esfera celeste</h3>
<p>Vemos o céu como uma esfera em torno de nós. O <strong>movimento diurno</strong> — o nascer e o pôr dos astros — resulta da rotação da Terra, de oeste para leste, em cerca de 24 horas ${tag('fato')}. Os polos celestes são o prolongamento do eixo da Terra; no hemisfério sul não há estrela brilhante no polo, mas o Cruzeiro do Sul ajuda a localizá-lo ${tag('fato')}.</p>
<h3>As estações</h3>
<p>As estações se devem à inclinação do eixo da Terra, de cerca de 23,4° em relação ao plano da órbita: ao longo do ano, cada hemisfério recebe a luz do Sol de modo mais direto ou mais oblíquo ${tag('fato')}. Não se devem à distância ao Sol: a Terra está mais próxima do Sol no início de janeiro, verão no hemisfério sul e inverno no norte ${tag('fato')}.</p>
<h3>Fases da Lua e eclipses</h3>
<p>As fases resultam da posição relativa do Sol, da Terra e da Lua, que vemos iluminada pelo Sol de ângulos diferentes; o ciclo de fases dura cerca de 29,5 dias ${tag('fato')}. Um eclipse solar ocorre quando a Lua passa entre o Sol e a Terra; um eclipse lunar, quando a Terra fica entre o Sol e a Lua ${tag('fato')}. Como a órbita da Lua é inclinada cerca de 5° em relação à da Terra, não há eclipses todo mês ${tag('fato')}.</p>
<h3>Ordem e contemplação</h3>
<p>"Os céus narram a glória de Deus" (Sl 19,2): a tradição cristã vê na regularidade do céu um sinal da sabedoria do Criador, sem confundir a astronomia com a astrologia, que a Igreja rejeita como adivinhação (CIC 2116) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Esfera celeste', 'Esfera imaginária em torno do observador onde parecem estar os astros.'],
    ['Movimento diurno', 'Nascer e pôr aparente dos astros, causado pela rotação da Terra.'],
    ['Polo celeste', 'Prolongamento do eixo da Terra na esfera celeste.'],
    ['Solstício', 'Momento em que o Sol atinge sua maior declinação norte ou sul.'],
    ['Equinócio', 'Momento em que o Sol cruza o equador celeste; dia e noite quase iguais.'],
    ['Mês sinódico', 'Ciclo das fases da Lua, cerca de 29,5 dias.'],
  ],
  exemplos: `<p><strong>Achando o sul pelo Cruzeiro:</strong> prolongue o braço maior do Cruzeiro do Sul cerca de quatro vezes e meia o seu comprimento: chega-se perto do polo sul celeste. Baixando uma linha até o horizonte, encontra-se o sul. É uma técnica antiga de orientação, usada por navegadores no Atlântico sul.</p>`,
  contexto: `<p><strong>No mundo:</strong> povos de todos os continentes acompanharam os ciclos do céu para marcar o tempo e o plantio. <strong>No Brasil:</strong> o Trópico de Capricórnio cruza o território, passando por estados como São Paulo e Paraná; ao sul dele, o Sol nunca fica a pino ${tag('fato')}. Povos indígenas brasileiros têm constelações próprias, estudadas pela etnoastronomia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as estações não se devem à distância ao Sol', tag: 'argumento',
    premissas: ['Se as estações se devessem à distância, os dois hemisférios teriam verão ao mesmo tempo.', 'Quando é verão no hemisfério sul (dezembro a março), é inverno no norte.', 'Além disso, a Terra está mais próxima do Sol em janeiro.'],
    conclusao: 'Logo, as estações não se devem à distância ao Sol, mas à inclinação do eixo da Terra.',
    nota: 'É um dos erros mais comuns sobre astronomia; o argumento usa só dados observáveis.',
  },
  objecoes: [
    { objecao: 'Se o Sol "nasce" e "se põe", então é ele que gira em torno da Terra.', tag: 'debate',
      resposta: 'As palavras descrevem a aparência, que é real para o observador; a explicação física é a rotação da Terra, confirmada por experimentos como o pêndulo de Foucault (1851). Descrever a aparência e explicar a causa são níveis diferentes.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: observe o céu em três noites, registrando data, hora, posição da Lua (direção e altura aproximada, em palmos) e de uma estrela brilhante. Desenhe a fase da Lua em cada noite.</p>`,
  fonte: {
    obra: 'Salmo 19 (18); Catecismo da Igreja Católica, § 2116; Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulos sobre a esfera celeste e as estações', link: null,
    orientacao: `<p>Leia o Salmo 19 e o § 2116 do Catecismo e distinga contemplação do céu e astrologia. No manual, siga as figuras da esfera celeste e das estações.</p>`,
  },
  perguntas: [
    { p: 'O que causa o movimento diurno?', r: 'A rotação da Terra de oeste para leste.' },
    { p: 'O que causa as estações?', r: 'A inclinação de cerca de 23,4° do eixo da Terra.' },
    { p: 'Por que não há eclipses todo mês?', r: 'Porque a órbita da Lua é inclinada cerca de 5° em relação à da Terra.' },
  ],
  exercicios: [
    mc('Em janeiro, a Terra está:', ['Mais longe do Sol', 'Mais perto do Sol', 'Na mesma distância de julho', 'Fora da órbita'], 1, 'Periélio no início de janeiro.'),
    mc('O ciclo das fases da Lua dura cerca de:', ['7 dias', '24 horas', '29,5 dias', '365 dias'], 2, 'Mês sinódico.'),
    mc('Num eclipse solar, quem fica no meio é:', ['A Terra', 'A Lua', 'O Sol', 'Marte'], 1, 'Lua entre Sol e Terra.'),
    mc('O solstício de dezembro marca, no hemisfério sul, o início do:', ['Inverno', 'Verão', 'Outono', 'Primavera'], 1, 'Hemisfério sul.'),
    mc('A astrologia, segundo o Catecismo, é:', ['Ciência', 'Forma de adivinhação a rejeitar', 'Doutrina', 'Astronomia antiga'], 1, 'CIC 2116.'),
    disc('Entregue os registros de três noites de observação (data, hora, posição da Lua e de uma estrela, desenho da fase) e explique a mudança observada.', ['Três registros completos', 'Desenhos das fases', 'Explicação correta', 'Clareza']),
  ],
  resumo: ['Movimento diurno: rotação da Terra.', 'Estações: inclinação de ~23,4°, não distância.', 'Fases: ~29,5 dias; eclipses solares e lunares.', 'Cruzeiro do Sul e polo sul celeste.', 'Contemplação do céu ≠ astrologia (CIC 2116).'],
  referencias: [
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2116.', livro: 'cic' },
    { texto: 'Aristóteles, Do céu.', livro: 'aristoteles-ceu' },
    { texto: 'Observatório Nacional, efemérides astronômicas.', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os registros de observação', 'Ler os capítulos indicados'],
  revisao: [['Estações', 'Inclinação do eixo.'], ['Fases', '29,5 dias.'], ['Polo sul celeste', 'Pelo Cruzeiro do Sul.']],
  avancado: {
    texto: `<h3>Precessão dos equinócios</h3>
<p>O eixo da Terra descreve lentamente um cone, num ciclo de cerca de 26 mil anos; por isso a posição dos equinócios entre as estrelas muda ao longo dos séculos — a precessão, descoberta por Hiparco no século II a.C. ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre movimentos da Terra.' }],
    exercicios: [
      mc('A precessão dos equinócios tem ciclo de cerca de:', ['1 ano', '2.000 anos', '26 mil anos', '1 milhão de anos'], 2, 'Cone do eixo.'),
      mc('A precessão foi descoberta por:', ['Ptolomeu', 'Hiparco', 'Copérnico', 'Kepler'], 1, 'Século II a.C.'),
      mc('Por causa da precessão, muda ao longo dos séculos a posição:', ['Do Sol na galáxia', 'Dos equinócios entre as estrelas', 'Da Lua no mês', 'Dos planetas no dia'], 1, 'Movimento do eixo.'),
      disc('Explique a precessão e uma consequência para os mapas do céu ao longo dos séculos.', ['Causa', 'Ciclo', 'Consequência', 'Clareza'])],
  },
}),

aula({
  id: 'as1-2', titulo: 'Vocabulário astronômico: coordenadas, distâncias e magnitudes', duracao: '150 min',
  aprendera: ['Usar coordenadas horizontais e equatoriais', 'Converter unidade astronômica, ano-luz e parsec', 'Interpretar a escala de magnitudes', 'Relacionar cor e temperatura das estrelas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Para localizar um astro e comparar distâncias e brilhos, a astronomia precisa de coordenadas e unidades próprias.</p>
<h3>Coordenadas</h3>
<p>As <strong>coordenadas horizontais</strong> — altura (ângulo acima do horizonte) e azimute (direção a partir do norte) — dependem do lugar e da hora ${tag('fato')}. As <strong>coordenadas equatoriais</strong> — ascensão reta e declinação — são fixas em relação às estrelas, como longitude e latitude projetadas no céu ${tag('fato')}.</p>
<h3>Distâncias</h3>
<ul>
<li><strong>Unidade astronômica (UA)</strong>: distância média Terra–Sol, cerca de 149,6 milhões de km ${tag('fato')}.</li>
<li><strong>Ano-luz</strong>: distância que a luz percorre em um ano, cerca de 9,46 trilhões de km ${tag('fato')}.</li>
<li><strong>Parsec</strong>: distância em que uma UA é vista sob um ângulo de 1 segundo de arco, cerca de 3,26 anos-luz ${tag('fato')}.</li>
</ul>
<h3>Magnitudes</h3>
<p>Hiparco classificou as estrelas em seis grandezas, da 1ª (mais brilhante) à 6ª ${tag('fato')}. Na escala moderna, de Pogson (1856), uma diferença de 5 magnitudes corresponde a um fator 100 em brilho, e números menores indicam objetos mais brilhantes; Sirius, a estrela mais brilhante do céu noturno, tem magnitude cerca de −1,5 ${tag('fato')}.</p>
<h3>Cor e temperatura</h3>
<p>Estrelas mais quentes são azuladas; mais frias, avermelhadas ${tag('fato')}. Rigel, em Órion, é azulada; Betelgeuse, avermelhada ${tag('fato')}. A União Astronômica Internacional reconhece 88 constelações oficiais ${tag('fato')}.</p>`,
  vocabulario: [
    ['Altura e azimute', 'Coordenadas horizontais, que dependem do lugar e da hora.'],
    ['Ascensão reta e declinação', 'Coordenadas equatoriais, fixas em relação às estrelas.'],
    ['Unidade astronômica', 'Distância média Terra–Sol (~149,6 milhões de km).'],
    ['Ano-luz', 'Distância percorrida pela luz em um ano (~9,46 trilhões de km).'],
    ['Parsec', 'Cerca de 3,26 anos-luz.'],
    ['Magnitude', 'Medida de brilho; menor número, maior brilho.'],
  ],
  exemplos: `<p><strong>Conversões:</strong> Proxima Centauri, a estrela mais próxima do Sol, está a cerca de 4,2 anos-luz, ou seja, 4,2 ÷ 3,26 ≈ 1,3 parsec. Duas estrelas com magnitudes 1 e 6 diferem por um fator 100 em brilho; magnitudes 1 e 2 diferem por cerca de 2,5.</p>`,
  contexto: `<p><strong>No mundo:</strong> a União Astronômica Internacional, fundada em 1919, padroniza nomes e unidades. <strong>No Brasil:</strong> as Nuvens de Magalhães, galáxias satélites da Via Láctea, são visíveis a olho nu do hemisfério sul em céus escuros ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as coordenadas equatoriais servem para catálogos e as horizontais não', tag: 'argumento',
    premissas: ['A altura e o azimute de uma estrela mudam com a hora e com o lugar do observador.', 'Um catálogo precisa de valores que valham para todos e por muito tempo.', 'A ascensão reta e a declinação são fixas em relação às estrelas (salvo a lenta precessão).'],
    conclusao: 'Logo, os catálogos usam coordenadas equatoriais; as horizontais servem para apontar o telescópio num lugar e momento.',
    nota: 'Converter uma na outra exige a latitude do lugar e a hora sideral.',
  },
  objecoes: [
    { objecao: 'Ano-luz é medida de tempo.', tag: 'debate',
      resposta: 'É medida de distância: a distância que a luz percorre em um ano. O nome engana porque contém "ano", mas a unidade mede comprimento.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de 20 termos (esfera celeste, polo celeste, zênite, horizonte, altura, azimute, ascensão reta, declinação, eclíptica, equinócio, solstício, UA, ano-luz, parsec, magnitude, constelação, planeta, estrela, galáxia, nebulosa), cada um com definição e exemplo de um objeto real do céu do sul.</p>`,
  fonte: {
    obra: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulos sobre coordenadas e magnitudes; União Astronômica Internacional, lista das constelações', link: null,
    orientacao: `<p>No manual, faça os exemplos de conversão de coordenadas e de magnitudes. Na lista da UAI, localize as constelações visíveis do Brasil.</p>`,
  },
  perguntas: [
    { p: 'Quanto vale aproximadamente a unidade astronômica?', r: 'Cerca de 149,6 milhões de quilômetros.' },
    { p: 'Quantos anos-luz tem um parsec?', r: 'Cerca de 3,26.' },
    { p: 'Na escala de magnitudes, que diferença corresponde a um fator 100 em brilho?', r: 'Cinco magnitudes.' },
  ],
  exercicios: [
    mc('Uma estrela a 10 parsecs está a cerca de:', ['3,26 anos-luz', '32,6 anos-luz', '326 anos-luz', '10 anos-luz'], 1, '10 × 3,26.'),
    mc('Entre magnitudes 1 e 6, a diferença de brilho é de:', ['5 vezes', '10 vezes', '100 vezes', '1.000 vezes'], 2, 'Escala de Pogson.'),
    mc('Uma estrela azulada tende a ser:', ['Mais fria', 'Mais quente', 'Mais próxima', 'Mais jovem sempre'], 1, 'Cor e temperatura.'),
    mc('O número de constelações oficiais da UAI é:', ['12', '48', '88', '100'], 2, 'União Astronômica Internacional.'),
    mc('Altura e azimute dependem:', ['Só da estrela', 'Do lugar e da hora', 'Só do ano', 'De nada'], 1, 'Coordenadas horizontais.'),
    disc('Entregue o glossário de 20 termos com definição e exemplo de um objeto real do céu do sul.', ['20 termos', 'Definições corretas', 'Exemplos reais', 'Unidades bem usadas']),
  ],
  resumo: ['Horizontais (altura, azimute) x equatoriais (ascensão reta, declinação).', 'UA ~149,6 milhões de km; ano-luz ~9,46 trilhões de km; parsec ~3,26 al.', 'Magnitudes: 5 = fator 100; Sirius ~−1,5.', 'Cor indica temperatura.', '88 constelações (UAI).'],
  referencias: [
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'União Astronômica Internacional, lista oficial das constelações.' },
    { texto: 'Observatório Nacional, efemérides astronômicas.', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Fazer as conversões do manual'],
  revisao: [['Parsec', '~3,26 al.'], ['Magnitude', 'Menor = mais brilhante.'], ['UA', 'Terra–Sol.']],
  avancado: {
    texto: `<h3>Magnitude absoluta</h3>
<p>A magnitude aparente depende da distância; a <strong>magnitude absoluta</strong> é a que a estrela teria a 10 parsecs ${tag('fato')}. A relação m − M = 5 log₁₀(d/10), com d em parsecs, liga as duas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre fotometria.' }],
    exercicios: [
      mc('A magnitude absoluta é a que a estrela teria a:', ['1 parsec', '10 parsecs', '1 ano-luz', '1 UA'], 1, 'Definição.'),
      mc('Uma estrela a 10 parsecs tem m − M igual a:', ['0', '5', '10', '−5'], 0, '5 log(1) = 0.'),
      mc('Uma estrela a 100 parsecs tem m − M igual a:', ['0', '2', '5', '10'], 2, '5 log(10) = 5.'),
      disc('Calcule a magnitude absoluta de uma estrela de magnitude aparente 2 a 100 parsecs e interprete.', ['Fórmula', 'Cálculo', 'Interpretação', 'Unidades'])],
  },
}),

aula({
  id: 'as1-3', titulo: 'Métodos de observação e medida: telescópios, paralaxe e as leis de Kepler como ferramenta', duracao: '150 min',
  aprendera: ['Distinguir telescópios refratores e refletores', 'Calcular distâncias por paralaxe', 'Usar a terceira lei de Kepler', 'Situar os observatórios usados por astrônomos brasileiros'],
  prereq: ['Aulas anteriores do módulo', 'Potências e raízes'],
  explicacao: `
<h3>O problema</h3>
<p>Como medir a distância de algo que não se pode alcançar? A astronomia combina instrumentos e geometria.</p>
<h3>Telescópios</h3>
<p>Galileu apontou uma luneta ao céu em 1609 ${tag('fato')}. O <strong>refrator</strong> usa lentes; o <strong>refletor</strong>, espelhos — Newton construiu um em 1668 ${tag('fato')}. Telescópios maiores coletam mais luz e distinguem detalhes menores ${tag('fato')}.</p>
<h3>Paralaxe</h3>
<p>Quando a Terra se move em sua órbita, estrelas próximas parecem deslocar-se em relação às mais distantes ${tag('fato')}. A distância em parsecs é o inverso da paralaxe em segundos de arco: d = 1/p ${tag('fato')}. Friedrich Bessel mediu a primeira paralaxe estelar, da estrela 61 Cygni, em 1838 ${tag('fato')}.</p>
<h3>Terceira lei de Kepler</h3>
<p>Para planetas em torno do Sol, o quadrado do período (em anos) é igual ao cubo do semieixo maior da órbita (em UA): P² = a³ ${tag('fato')}. Marte, com a ≈ 1,52 UA, tem P ≈ 1,88 ano ${tag('fato')}.</p>
<h3>Observatórios e o Brasil</h3>
<p>O Laboratório Nacional de Astrofísica opera o Observatório do Pico dos Dias, em Brazópolis (MG); o Brasil participa dos telescópios internacionais Gemini e SOAR, no Chile e no Havaí ${tag('fato')}.</p>`,
  vocabulario: [
    ['Refrator', 'Telescópio que usa lentes.'],
    ['Refletor', 'Telescópio que usa espelhos (Newton, 1668).'],
    ['Paralaxe estelar', 'Deslocamento aparente de uma estrela próxima devido ao movimento da Terra.'],
    ['Segundo de arco', '1/3.600 de grau.'],
    ['Terceira lei de Kepler', 'P² = a³ (P em anos, a em UA) para órbitas em torno do Sol.'],
  ],
  exemplos: `<p><strong>Cálculos:</strong> uma estrela com paralaxe de 0,1″ está a 1/0,1 = 10 parsecs (≈ 32,6 anos-luz). Um asteroide com semieixo maior de 4 UA tem período P = √(4³) = √64 = 8 anos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a missão espacial Gaia, da Agência Espacial Europeia, mediu paralaxes de mais de um bilhão de estrelas ${tag('fato')}. <strong>No Brasil:</strong> o Observatório do Pico dos Dias e a participação no Gemini e no SOAR permitem que astrônomos brasileiros façam pesquisa de ponta ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a ausência de paralaxe visível foi argumento contra o heliocentrismo', tag: 'argumento',
    premissas: ['Se a Terra gira em torno do Sol, as estrelas deveriam mostrar paralaxe.', 'Até o século XIX, nenhuma paralaxe estelar foi detectada.', 'Os defensores do heliocentrismo respondiam que as estrelas estavam muito longe.'],
    conclusao: 'Logo, a falta de paralaxe era objeção real até que Bessel a mediu em 1838, confirmando distâncias enormes.',
    nota: 'Mostra que a resistência ao heliocentrismo também tinha razões científicas.',
  },
  objecoes: [
    { objecao: 'As leis de Kepler são só aproximadas e, portanto, inúteis.', tag: 'debate',
      resposta: 'São aproximações excelentes para planetas em torno do Sol; Newton mostrou que derivam da gravitação e as corrigiu para incluir as massas. Uma lei aproximada pode ser extremamente útil e explicativa.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: calcule a distância de três estrelas a partir de suas paralaxes (consulte valores em catálogos) e o período de dois planetas pela terceira lei de Kepler; compare com os valores medidos.</p>`,
  fonte: {
    obra: 'Johannes Kepler, Harmonias do mundo (1619), livro V (terceira lei); Friedrich Bessel, comunicação sobre a paralaxe de 61 Cygni (1838)', link: null,
    orientacao: `<p>Em Kepler, localize o enunciado da relação entre períodos e distâncias. Sobre Bessel, registre o valor da paralaxe medida e a distância deduzida. Compare com valores atuais.</p>`,
  },
  perguntas: [
    { p: 'Como se calcula a distância por paralaxe?', r: 'd (em parsecs) = 1/p (em segundos de arco).' },
    { p: 'Quem mediu a primeira paralaxe estelar?', r: 'Friedrich Bessel, em 1838, para 61 Cygni.' },
    { p: 'O que diz a terceira lei de Kepler?', r: 'P² = a³, com P em anos e a em UA.' },
  ],
  exercicios: [
    mc('Paralaxe de 0,5″ corresponde a:', ['0,5 parsec', '2 parsecs', '5 parsecs', '50 parsecs'], 1, '1/0,5.'),
    mc('Um corpo com a = 9 UA tem período de:', ['3 anos', '9 anos', '27 anos', '81 anos'], 2, '√(9³) = 27.'),
    mc('Newton construiu um telescópio refletor em:', ['1609', '1668', '1687', '1838'], 1, 'Espelhos.'),
    mc('O Observatório do Pico dos Dias fica em:', ['Rio de Janeiro', 'Brazópolis (MG)', 'Atacama', 'Havaí'], 1, 'LNA.'),
    mc('A ausência de paralaxe visível era objeção ao:', ['Geocentrismo', 'Heliocentrismo', 'Big Bang', 'Newton'], 1, 'Até 1838.'),
    disc('Entregue os cálculos de distância por paralaxe de três estrelas e de período de dois planetas, comparados com os valores medidos.', ['Paralaxes de catálogo', 'Cálculos corretos', 'Comparação', 'Unidades']),
  ],
  resumo: ['Refratores e refletores (Galileu 1609, Newton 1668).', 'Paralaxe: d = 1/p; Bessel (1838).', 'Kepler: P² = a³.', 'Gaia: bilhão de paralaxes.', 'Brasil: Pico dos Dias, Gemini, SOAR.'],
  referencias: [
    { texto: 'Johannes Kepler, Harmonias do mundo (1619).' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'Laboratório Nacional de Astrofísica, Observatório do Pico dos Dias.', link: { url: 'https://www.gov.br/lna', rotulo: 'LNA' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos', 'Ler os trechos indicados'],
  revisao: [['Paralaxe', 'd = 1/p.'], ['Bessel', '1838.'], ['Kepler', 'P² = a³.']],
  avancado: {
    texto: `<h3>Resolução angular</h3>
<p>A capacidade de um telescópio de separar dois pontos próximos depende do diâmetro da abertura e do comprimento de onda: quanto maior a abertura, menor o ângulo que se pode resolver ${tag('fato')}. Na Terra, a turbulência da atmosfera limita a resolução, o que motivou telescópios espaciais e óptica adaptativa ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre telescópios.' }],
    exercicios: [
      mc('A resolução de um telescópio melhora com:', ['Menor abertura', 'Maior abertura', 'Mais cor', 'Mais turbulência'], 1, 'Difração.'),
      mc('A turbulência atmosférica:', ['Melhora a imagem', 'Limita a resolução', 'Não existe', 'Aumenta a paralaxe'], 1, 'Motivou telescópios espaciais.'),
      mc('Óptica adaptativa serve para:', ['Corrigir a turbulência', 'Aumentar a paralaxe', 'Mudar a cor', 'Medir a massa'], 0, 'Correção em tempo real.'),
      disc('Compare as vantagens de um telescópio espacial e de um grande telescópio terrestre com óptica adaptativa.', ['Vantagens de cada', 'Limites', 'Exemplos', 'Conclusão'])],
  },
}),

aula({
  id: 'as1-4', titulo: 'Espectroscopia: a luz como mensagem dos astros', duracao: '150 min',
  aprendera: ['Explicar a decomposição da luz e as linhas espectrais', 'Expor as leis de Kirchhoff', 'Explicar o efeito Doppler na astronomia', 'Relacionar espectros à composição e ao movimento das estrelas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>No século XIX, Auguste Comte afirmou que jamais saberíamos a composição química das estrelas ${tag('fato')}. Poucas décadas depois, a espectroscopia mostrou o contrário.</p>
<h3>Luz e espectro</h3>
<p>Newton decompôs a luz do Sol com um prisma (experimentos de 1666) ${tag('fato')}. Joseph von Fraunhofer observou centenas de linhas escuras no espectro solar (1814) ${tag('fato')}.</p>
<h3>As leis de Kirchhoff</h3>
<p>Gustav Kirchhoff e Robert Bunsen (1859–1860) mostraram que: um sólido ou gás denso quente emite espectro contínuo; um gás rarefeito quente emite linhas brilhantes; um gás frio diante de uma fonte contínua produz linhas escuras de absorção nas mesmas posições ${tag('fato')}. Cada elemento químico tem suas linhas próprias, como uma impressão digital ${tag('fato')}.</p>
<h3>Composição e movimento</h3>
<p>Comparando as linhas das estrelas com as de laboratório, identificam-se os elementos presentes ${tag('fato')}. Cecilia Payne mostrou, em 1925, que as estrelas são compostas principalmente de hidrogênio e hélio ${tag('fato')}. O <strong>efeito Doppler</strong> desloca as linhas para o vermelho quando a fonte se afasta e para o azul quando se aproxima, permitindo medir velocidades ${tag('fato')}.</p>
<h3>Lição de método</h3>
<p>A afirmação de Comte mostra o risco de declarar impossível o que a ciência ainda não sabe ${tag('argumento')} — lição que vale também para o positivismo estudado em sociologia (so2-2).</p>`,
  vocabulario: [
    ['Espectro', 'Decomposição da luz em suas cores ou comprimentos de onda.'],
    ['Linha de absorção', 'Linha escura no espectro, produzida por gás frio diante de fonte quente.'],
    ['Linha de emissão', 'Linha brilhante produzida por gás rarefeito quente.'],
    ['Leis de Kirchhoff', 'Três regras sobre espectros contínuo, de emissão e de absorção.'],
    ['Efeito Doppler', 'Mudança do comprimento de onda pela velocidade da fonte.'],
    ['Desvio para o vermelho', 'Deslocamento das linhas quando a fonte se afasta.'],
  ],
  exemplos: `<p><strong>Hélio, o elemento do Sol:</strong> em 1868, observando o espectro do Sol durante um eclipse, astrônomos encontraram uma linha amarela que não correspondia a nenhum elemento conhecido; o novo elemento recebeu o nome de hélio (do grego <em>hélios</em>, sol) e só depois foi encontrado na Terra (1895) ${tag('fato')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a espectroscopia é a principal fonte de informação sobre estrelas, galáxias e exoplanetas. <strong>No Brasil:</strong> astrônomos brasileiros usam espectrógrafos de telescópios como o SOAR para estudar estrelas e galáxias ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as linhas espectrais revelam a composição das estrelas', tag: 'argumento',
    premissas: ['Cada elemento químico absorve e emite luz em comprimentos de onda próprios, medidos em laboratório.', 'O espectro de uma estrela apresenta linhas em comprimentos de onda definidos.', 'As mesmas leis físicas valem na estrela e no laboratório.'],
    conclusao: 'Logo, a coincidência das linhas permite identificar os elementos presentes na estrela.',
    nota: 'A premissa da uniformidade das leis físicas é testada pela coerência dos resultados.',
  },
  objecoes: [
    { objecao: 'Não podemos saber nada sobre estrelas porque nunca fomos até elas.', tag: 'debate',
      resposta: 'Conhecemos pela luz que chega delas, tratada com leis verificadas em laboratório. É conhecimento indireto, mas rigoroso e testado por previsões, como a descoberta do hélio antes de encontrá-lo na Terra.' },
  ],
  aplicacao: `<p>Use um CD ou DVD como rede de difração (ou um espectroscópio caseiro) para observar o espectro de uma lâmpada fluorescente e da luz do dia (nunca olhe diretamente para o Sol). Desenhe os dois espectros e explique a diferença com as leis de Kirchhoff.</p>`,
  fonte: {
    obra: 'Gustav Kirchhoff, "Sobre as linhas de Fraunhofer" (1859); Cecilia Payne, Stellar Atmospheres (1925), conclusões', link: null,
    orientacao: `<p>Em Kirchhoff, identifique a explicação das linhas escuras do Sol. Em Payne, a conclusão sobre a abundância de hidrogênio. Relacione os dois.</p>`,
  },
  perguntas: [
    { p: 'O que produz linhas escuras de absorção?', r: 'Um gás frio diante de uma fonte de espectro contínuo.' },
    { p: 'O que mostrou Cecilia Payne em 1925?', r: 'Que as estrelas são compostas principalmente de hidrogênio e hélio.' },
    { p: 'O que indica um desvio para o vermelho?', r: 'Que a fonte se afasta do observador.' },
  ],
  exercicios: [
    mc('Fraunhofer observou as linhas escuras do Sol em:', ['1666', '1814', '1859', '1925'], 1, 'Linhas de Fraunhofer.'),
    mc('Um gás rarefeito quente produz espectro:', ['Contínuo', 'De emissão', 'De absorção', 'Nenhum'], 1, 'Leis de Kirchhoff.'),
    mc('O hélio foi identificado primeiro:', ['Em laboratório', 'No espectro do Sol', 'Na Lua', 'Em meteoritos'], 1, '1868.'),
    mc('Linhas deslocadas para o azul indicam fonte:', ['Se afastando', 'Se aproximando', 'Parada', 'Mais fria'], 1, 'Efeito Doppler.'),
    mc('A previsão de Comte sobre a composição das estrelas foi:', ['Confirmada', 'Refutada pela espectroscopia', 'Irrelevante', 'Doutrina'], 1, 'Lição de método.'),
    disc('Entregue os desenhos dos espectros da lâmpada e da luz do dia e a explicação da diferença pelas leis de Kirchhoff.', ['Dois espectros desenhados', 'Leis aplicadas', 'Segurança respeitada', 'Explicação clara']),
  ],
  resumo: ['Newton (1666): prisma; Fraunhofer (1814): linhas.', 'Kirchhoff e Bunsen (1859–1860): três leis.', 'Hélio no Sol (1868) antes da Terra (1895).', 'Payne (1925): hidrogênio e hélio.', 'Doppler: velocidades.'],
  referencias: [
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'Cecilia Payne, Stellar Atmospheres (1925).' },
    { texto: 'Gustav Kirchhoff, "Sobre as linhas de Fraunhofer" (1859).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os espectros e a explicação', 'Ler os trechos indicados'],
  revisao: [['Kirchhoff', 'Três leis.'], ['Payne', 'Hidrogênio e hélio.'], ['Doppler', 'Vermelho: afastamento.']],
  avancado: {
    texto: `<h3>Exoplanetas pelo Doppler</h3>
<p>Em 1995, Michel Mayor e Didier Queloz detectaram o primeiro planeta em torno de uma estrela semelhante ao Sol (51 Pegasi b) medindo pequenas oscilações Doppler da estrela; receberam o Nobel de Física de 2019 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Michel Mayor e Didier Queloz, "A Jupiter-mass companion to a solar-type star" (1995).' }],
    exercicios: [
      mc('O primeiro exoplaneta em torno de estrela tipo Sol foi detectado em:', ['1969', '1995', '2009', '2019'], 1, '51 Pegasi b.'),
      mc('O método usado foi:', ['Paralaxe', 'Velocidade radial (Doppler)', 'Fotografia direta', 'Sonda'], 1, 'Oscilação da estrela.'),
      mc('Mayor e Queloz receberam o Nobel em:', ['1995', '2009', '2019', '2023'], 2, 'Física.'),
      disc('Explique como a oscilação Doppler de uma estrela revela um planeta e por que planetas grandes e próximos são mais fáceis de detectar.', ['Mecanismo', 'Viés de detecção', 'Exemplo', 'Clareza'])],
  },
}),

avaliacao('as1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o céu visto da Terra, coordenadas, unidades, magnitudes, paralaxe, Kepler e espectroscopia, com cálculos, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de paralaxe, Kepler e magnitudes.</li><li>Releia seus registros de observação.</li></ul>`,
[
  disc('Explique a um estudante por que temos estações, fases da Lua e eclipses, corrigindo o erro comum sobre a distância ao Sol.', ['Estações corretas', 'Fases e eclipses', 'Erro corrigido com dados', 'Clareza']),
  disc('Mostre como sabemos a distância e a composição de uma estrela, com paralaxe e espectroscopia, e um exemplo numérico.', ['Paralaxe explicada', 'Espectroscopia explicada', 'Exemplo numérico', 'Distinção entre observação e inferência']),
]),
];
