// Astronomia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Astronomia).
// Calendários e o cálculo da Páscoa, navegação e satélites, poluição luminosa, e o projeto de observação.
// A avaliação final integra AS1 a AS5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'as5-1', titulo: 'Calendários e o cálculo da Páscoa: de Niceia à reforma gregoriana', duracao: '150 min',
  aprendera: ['Explicar o problema do calendário solar e lunar', 'Expor a regra da data da Páscoa', 'Explicar a reforma gregoriana de 1582', 'Calcular a data da Páscoa de um ano'],
  prereq: ['Astronomia IV (módulo AS4)'],
  explicacao: `
<h3>O problema</h3>
<p>O ano solar não tem número inteiro de dias, e o mês lunar não cabe um número inteiro de vezes no ano. Fazer um calendário que acompanhe o Sol e a Lua é um problema astronômico — e, para a Igreja, litúrgico.</p>
<h3>O ano e o mês</h3>
<p>O ano trópico (de um equinócio de março ao seguinte) dura cerca de 365,2422 dias; o mês sinódico, cerca de 29,53 dias ${tag('fato')}. O calendário juliano (46 a.C.) usava ano de 365,25 dias, com um bissexto a cada quatro anos ${tag('fato')}.</p>
<h3>A regra da Páscoa</h3>
<p>A tradição associada ao Concílio de Niceia (325) fixou a Páscoa no domingo seguinte à primeira lua cheia depois do equinócio de março; para o cálculo eclesiástico, o equinócio foi fixado em 21 de março, e a lua cheia é calculada por tabelas, não observada ${tag('fato')}.</p>
<h3>A reforma gregoriana</h3>
<p>Como o ano juliano era cerca de 11 minutos mais longo que o real, o equinócio havia recuado cerca de 10 dias até o século XVI ${tag('fato')}. Pela bula <em>Inter gravissimas</em> (1582), Gregório XIII suprimiu dez dias — a quinta-feira 4 de outubro de 1582 foi seguida pela sexta-feira 15 de outubro — e mudou a regra dos bissextos: anos seculares só são bissextos se divisíveis por 400 ${tag('fato')}. O jesuíta Cristóvão Clávio foi o principal responsável pelos cálculos ${tag('fato')}.</p>
<h3>Cálculo</h3>
<p>Há algoritmos que reproduzem o cálculo eclesiástico; o mais usado dá, por exemplo, Páscoa em 31 de março de 2024, 20 de abril de 2025 e 5 de abril de 2026 ${tag('fato')}. Igrejas orientais que seguem o calendário juliano celebram, em geral, em outra data ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ano trópico', 'Intervalo entre dois equinócios de março (~365,2422 dias).'],
    ['Calendário juliano', 'Calendário de 46 a.C. com bissexto a cada quatro anos.'],
    ['Calendário gregoriano', 'Calendário reformado em 1582 por Gregório XIII.'],
    ['Cômputo', 'Cálculo eclesiástico da data da Páscoa.'],
    ['Lua cheia eclesiástica', 'Lua cheia calculada por tabelas para o cômputo.'],
  ],
  exemplos: `<p><strong>O algoritmo (para o calendário gregoriano):</strong> para o ano Y, calcule a = Y mod 19; b = Y div 100; c = Y mod 100; d = b div 4; e = b mod 4; f = (b + 8) div 25; g = (b − f + 1) div 3; h = (19a + b − d − g + 15) mod 30; i = c div 4; k = c mod 4; l = (32 + 2e + 2i − h − k) mod 7; m = (a + 11h + 22l) div 451; n = h + l − 7m + 114. O mês é n div 31 e o dia é (n mod 31) + 1. Para 2025: n = 143, mês 4, dia 20 — 20 de abril.</p>`,
  contexto: `<p><strong>No mundo:</strong> o calendário gregoriano é hoje usado na vida civil de quase todos os países, adotado em épocas diferentes ${tag('fato')}. <strong>No Brasil:</strong> as datas do Carnaval, da Sexta-feira Santa e de Corpus Christi dependem da Páscoa e, portanto, do cálculo astronômico-eclesiástico ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a reforma gregoriana foi necessária', tag: 'argumento',
    premissas: ['O ano juliano (365,25 dias) era cerca de 11 minutos mais longo que o ano trópico.', 'Em mais de 12 séculos, o erro acumulou cerca de 10 dias, e o equinócio real caía por volta de 11 de março.', 'A regra da Páscoa supunha o equinócio em 21 de março.'],
    conclusao: 'Logo, sem reforma, a Páscoa se afastaria cada vez mais da estação e da regra; era preciso suprimir dias e corrigir os bissextos.',
    nota: 'Exemplo de astronomia a serviço da liturgia.',
  },
  objecoes: [
    { objecao: 'A data da Páscoa é arbitrária.', tag: 'debate',
      resposta: 'A data segue uma regra ligada à Páscoa judaica e à Ressurreição, que ocorreu no tempo pascal, perto da lua cheia da primavera do hemisfério norte. A regra pode ser discutida (há propostas de data comum entre as Igrejas), mas não é arbitrária.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: calcule a data da Páscoa de um ano à sua escolha com o algoritmo, confira num calendário e explique a reforma gregoriana de 1582. Calcule também a data do Carnaval desse ano (47 dias antes da Páscoa).</p>`,
  fonte: {
    obra: 'Gregório XIII, bula Inter gravissimas (1582); Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre calendários', link: null,
    orientacao: `<p>Na bula, localize a supressão dos dez dias e a nova regra dos bissextos. No manual, a explicação do ano trópico. Use ambos no exercício.</p>`,
  },
  perguntas: [
    { p: 'Qual a regra da data da Páscoa?', r: 'O domingo seguinte à primeira lua cheia eclesiástica depois do equinócio de março (fixado em 21 de março).' },
    { p: 'Quantos dias a reforma de 1582 suprimiu?', r: 'Dez dias: de 4 de outubro passou-se a 15 de outubro.' },
    { p: 'Quando um ano secular é bissexto no calendário gregoriano?', r: 'Quando é divisível por 400.' },
  ],
  exercicios: [
    mc('O calendário juliano é de:', ['46 a.C.', '325', '1582', '1752'], 0, 'Júlio César.'),
    mc('O ano 1900 foi bissexto no calendário gregoriano?', ['Sim', 'Não', 'Só na Itália', 'Só no Brasil'], 1, 'Não é divisível por 400.'),
    mc('O ano 2000 foi bissexto?', ['Sim', 'Não', 'Depende do país', 'Ninguém sabe'], 0, 'Divisível por 400.'),
    mc('O principal responsável pelos cálculos da reforma foi:', ['Galileu', 'Clávio', 'Kepler', 'Copérnico'], 1, 'Jesuíta do Colégio Romano.'),
    mc('Se a Páscoa é em 20 de abril, o Carnaval (terça-feira) é 47 dias antes, em:', ['3 de março', '4 de março', '28 de fevereiro', '10 de março'], 1, '20/4 − 47 dias = 4/3.'),
    disc('Entregue o cálculo da Páscoa de um ano com o algoritmo, a conferência no calendário, a data do Carnaval e a explicação da reforma gregoriana.', ['Algoritmo aplicado', 'Conferência', 'Carnaval calculado', 'Reforma explicada']),
  ],
  resumo: ['Ano trópico ~365,2422 dias; mês ~29,53.', 'Juliano (46 a.C.).', 'Regra da Páscoa (Niceia, 325); equinócio em 21/3.', 'Gregório XIII (1582): 10 dias; bissextos seculares.', 'Clávio; algoritmo do cômputo.'],
  referencias: [
    { texto: 'Gregório XIII, bula Inter gravissimas (1582).' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'Jean Meeus, Astronomical Algorithms (1991).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo da Páscoa', 'Ler a bula Inter gravissimas'],
  revisao: [['1582', 'Gregório XIII.'], ['Bissexto secular', 'Divisível por 400.'], ['Páscoa', 'Domingo após a lua cheia do equinócio.']],
  avancado: {
    texto: `<h3>O ciclo metônico</h3>
<p>Dezenove anos solares correspondem quase exatamente a 235 meses lunares — o ciclo metônico, descrito por Méton de Atenas no século V a.C. ${tag('fato')}. É por isso que o algoritmo da Páscoa usa Y mod 19, o chamado "número áureo" ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jean Meeus, Astronomical Algorithms (1991), capítulo sobre a data da Páscoa.' }],
    exercicios: [
      mc('O ciclo metônico dura:', ['8 anos', '19 anos', '76 anos', '532 anos'], 1, '235 meses lunares.'),
      mc('No algoritmo da Páscoa, Y mod 19 relaciona-se ao:', ['Ciclo metônico', 'Ano bissexto', 'Século', 'Equinócio'], 0, 'Número áureo.'),
      mc('19 anos solares equivalem a cerca de:', ['200 meses lunares', '235 meses lunares', '300 meses lunares', '365 meses lunares'], 1, 'Méton.'),
      disc('Explique por que o ciclo metônico é útil para prever as fases da Lua em datas do calendário solar.', ['Ciclo explicado', 'Cálculo', 'Uso no cômputo', 'Limites'])],
  },
}),

aula({
  id: 'as5-2', titulo: 'Navegação e satélites: da latitude pelas estrelas ao GPS e aos satélites brasileiros', duracao: '150 min',
  aprendera: ['Determinar a latitude pela altura do polo celeste ou do Sol', 'Explicar o problema da longitude e sua solução', 'Explicar o princípio do GPS', 'Situar os satélites e o programa espacial brasileiros'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber onde se está no meio do oceano? Por séculos, a resposta veio do céu.</p>
<h3>Latitude</h3>
<p>A altura do polo celeste acima do horizonte é igual à latitude do lugar ${tag('fato')}. No hemisfério sul, sem estrela polar, os navegadores portugueses mediam a altura do Sol ao meio-dia com o astrolábio náutico e usavam tabelas de declinação, como as do <em>Almanaque perpétuo</em> de Abraão Zacuto (1496) ${tag('fato')}.</p>
<h3>Longitude</h3>
<p>A longitude exige saber a diferença entre a hora local e a hora de um meridiano de referência ${tag('fato')}. O problema só foi resolvido no século XVIII com cronômetros marinhos precisos, como os de John Harrison ${tag('fato')}.</p>
<h3>GPS e satélites</h3>
<p>Os sistemas de navegação por satélite (GPS, Galileo, GLONASS, BeiDou) calculam a posição pela diferença de tempo dos sinais de vários satélites, com correções relativísticas (as3-2) ${tag('fato')}.</p>
<h3>Brasil no espaço</h3>
<p>O SCD-1, primeiro satélite brasileiro, foi lançado em 1993 pelo INPE para coleta de dados ambientais ${tag('fato')}. Os satélites CBERS, em parceria com a China, observam a Terra desde 1999 ${tag('fato')}. O Amazonia-1, primeiro satélite de observação da Terra inteiramente projetado no Brasil, foi lançado em 2021 ${tag('fato')}. O Centro de Lançamento de Alcântara, no Maranhão, tem localização próxima ao equador, vantajosa para lançamentos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Latitude', 'Distância angular ao equador, igual à altura do polo celeste.'],
    ['Longitude', 'Distância angular a um meridiano de referência.'],
    ['Astrolábio náutico', 'Instrumento para medir a altura dos astros no mar.'],
    ['Cronômetro marinho', 'Relógio preciso usado para determinar a longitude.'],
    ['GNSS', 'Sistemas globais de navegação por satélite.'],
  ],
  exemplos: `<p><strong>Latitude pelo Sol:</strong> no equinócio, ao meio-dia, a altura do Sol é 90° menos a latitude. Se o Sol está a 67° de altura, a latitude é 23° — próxima à do Trópico de Capricórnio. Em outras datas, soma-se ou subtrai-se a declinação do Sol, dada nas tabelas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a navegação astronômica ainda é ensinada como recurso de segurança caso os satélites falhem. <strong>No Brasil:</strong> os navegadores que chegaram em 1500 usavam técnicas astronômicas; a carta de Mestre João, da frota de Cabral, contém a mais antiga descrição conhecida do Cruzeiro do Sul a partir da costa brasileira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a longitude depende de relógios', tag: 'argumento',
    premissas: ['A Terra gira 360° em 24 horas, ou 15° por hora.', 'A diferença de longitude entre dois lugares corresponde à diferença de suas horas locais.', 'Para comparar, é preciso saber a hora do meridiano de referência no momento da observação.'],
    conclusao: 'Logo, determinar a longitude no mar exige um relógio que guarde a hora de referência com precisão.',
    nota: 'Um erro de 1 minuto no relógio dá cerca de 15 minutos de arco de erro na longitude.',
  },
  objecoes: [
    { objecao: 'Com o GPS, a astronomia de posição ficou inútil.', tag: 'debate',
      resposta: 'O próprio GPS depende de relógios atômicos, relatividade e sistemas de referência definidos pela astronomia. E a navegação astronômica continua sendo recurso de segurança. A técnica mudou de forma, não perdeu a utilidade.' },
  ],
  aplicacao: `<p>Meça a altura do Sol ao meio-dia solar (com um gnômon — uma vara vertical — e o comprimento da sombra) e calcule a latitude da sua cidade, usando a declinação do Sol do dia (efemérides do Observatório Nacional). Compare com a latitude oficial.</p>`,
  fonte: {
    obra: 'Carta de Mestre João a D. Manuel (1500); Abraão Zacuto, Almanaque perpétuo (1496); INPE, histórico dos satélites brasileiros', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' },
    orientacao: `<p>Na carta de Mestre João, localize a descrição das estrelas do sul. No site do INPE, a história do SCD-1, dos CBERS e do Amazonia-1. Use-os na pesquisa.</p>`,
  },
  perguntas: [
    { p: 'Como se determina a latitude pelo céu?', r: 'Pela altura do polo celeste ou pela altura do Sol ao meio-dia, com tabelas de declinação.' },
    { p: 'Como foi resolvido o problema da longitude?', r: 'Com cronômetros marinhos precisos no século XVIII, como os de Harrison.' },
    { p: 'Qual foi o primeiro satélite brasileiro?', r: 'O SCD-1, lançado em 1993.' },
  ],
  exercicios: [
    mc('A altura do polo celeste é igual à:', ['Longitude', 'Latitude', 'Altitude', 'Declinação do Sol'], 1, 'Regra de navegação.'),
    mc('A Terra gira, por hora:', ['1°', '15°', '30°', '360°'], 1, '360°/24 h.'),
    mc('O Amazonia-1 foi lançado em:', ['1993', '1999', '2021', '2024'], 2, 'Satélite brasileiro.'),
    mc('Os CBERS são feitos em parceria com:', ['EUA', 'China', 'Rússia', 'França'], 1, 'Desde 1999.'),
    mc('O Almanaque perpétuo de Zacuto é de:', ['1492', '1496', '1500', '1582'], 1, 'Tabelas para navegação.'),
    disc('Entregue a medida da altura do Sol com gnômon, o cálculo da latitude e a comparação com o valor oficial.', ['Medida descrita', 'Declinação usada', 'Cálculo correto', 'Comparação e erro']),
  ],
  resumo: ['Latitude = altura do polo; Sol ao meio-dia.', 'Astrolábio e Zacuto (1496).', 'Longitude: cronômetros (Harrison, séc. XVIII).', 'GNSS e relatividade.', 'Brasil: SCD-1 (1993), CBERS (1999), Amazonia-1 (2021), Alcântara.'],
  referencias: [
    { texto: 'Carta de Mestre João a D. Manuel (1500).' },
    { texto: 'Abraão Zacuto, Almanaque perpétuo (1496).' },
    { texto: 'INPE, histórico dos satélites brasileiros.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'Dava Sobel, Longitude (1995).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a medida da latitude', 'Ler a carta de Mestre João'],
  revisao: [['Latitude', 'Altura do polo.'], ['Longitude', 'Relógio.'], ['SCD-1', '1993.']],
  avancado: {
    texto: `<h3>Sensoriamento remoto</h3>
<p>Satélites de observação da Terra registram a radiação refletida em várias faixas do espectro, permitindo monitorar desmatamento, agricultura e cidades; o PRODES, do INPE (g3-4), usa esse tipo de imagem ${tag('fato')}.</p>`,
    leituras: [{ texto: 'INPE, materiais didáticos sobre sensoriamento remoto.' }],
    exercicios: [
      mc('O sensoriamento remoto usa:', ['Radiação refletida em várias faixas', 'Apenas som', 'Paralaxe estelar', 'Neutrinos'], 0, 'Imagens de satélite.'),
      mc('O PRODES usa imagens para monitorar:', ['Estrelas', 'Desmatamento', 'Marés', 'Eclipses'], 1, 'Amazônia.'),
      mc('Satélites de observação da Terra servem para:', ['Agricultura, florestas e cidades', 'Só televisão', 'Só GPS', 'Nada'], 0, 'Monitoramento.'),
      disc('Explique como uma imagem de satélite permite distinguir floresta e área desmatada, relacionando com a espectroscopia (as1-4).', ['Princípio', 'Faixas do espectro', 'Aplicação', 'Limites'])],
  },
}),

aula({
  id: 'as5-3', titulo: 'Poluição luminosa: o céu perdido e como recuperá-lo', duracao: '120 min',
  aprendera: ['Explicar o que é poluição luminosa e como se mede', 'Descrever seus efeitos sobre a astronomia, a fauna e a saúde', 'Propor medidas de iluminação adequada', 'Relacionar o tema ao cuidado da criação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Grande parte da população urbana nunca viu a Via Láctea. A luz artificial mal direcionada apagou o céu noturno das cidades.</p>
<h3>O que é</h3>
<p>Poluição luminosa é o excesso ou a má direção da luz artificial, que ilumina o céu (brilho do céu), invade espaços (luz intrusa) e ofusca (ofuscamento) ${tag('fato')}. A escala de Bortle, de 1 a 9, classifica a qualidade do céu noturno, do céu escuro rural ao céu de grandes cidades ${tag('fato')}.</p>
<h3>Efeitos</h3>
<ul>
<li><strong>Astronomia</strong>: reduz o número de estrelas visíveis e prejudica observatórios ${tag('fato')}.</li>
<li><strong>Fauna</strong>: filhotes de tartaruga marinha se orientam pela claridade do mar e podem ser desviados por luzes da costa; no Brasil, o Projeto Tamar e normas ambientais restringem a iluminação em praias de desova ${tag('fato')}.</li>
<li><strong>Saúde e energia</strong>: a luz noturna pode afetar o ritmo circadiano, e a luz lançada para o céu é energia desperdiçada ${tag('interpretacao')}.</li>
</ul>
<h3>Soluções</h3>
<p>Luminárias que dirigem a luz para baixo, intensidade adequada, luz de temperatura de cor mais quente e desligamento quando não necessária ${tag('fato')}. Algumas regiões criam reservas de céu escuro ${tag('fato')}.</p>
<h3>Cuidado da criação</h3>
<p>A <em>Laudato si'</em> pede uma "conversão ecológica" que inclua o cuidado com a beleza da criação e o uso responsável da energia ${tag('doutrina')}. O céu estrelado, que "narra a glória de Deus" (Sl 19,2), também é parte da criação a preservar ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Poluição luminosa', 'Excesso ou má direção da luz artificial.'],
    ['Brilho do céu', 'Claridade do céu noturno causada pela luz artificial.'],
    ['Luz intrusa', 'Luz que invade espaços onde não é desejada.'],
    ['Escala de Bortle', 'Classificação da qualidade do céu noturno de 1 a 9.'],
    ['Reserva de céu escuro', 'Área protegida para preservar o céu noturno.'],
  ],
  exemplos: `<p><strong>Contagem de estrelas:</strong> escolha uma constelação conhecida (o Cruzeiro do Sul ou Órion) e conte quantas estrelas vê dentro dela em casa e num lugar mais escuro. Comparando com cartas que mostram as estrelas até certa magnitude, estima-se a qualidade do céu — método usado por programas de ciência cidadã.</p>`,
  contexto: `<p><strong>No mundo:</strong> estudos com satélites mostram que a iluminação artificial noturna cresce em grande parte do planeta. <strong>No Brasil:</strong> observatórios como o do Pico dos Dias dependem de céus escuros, e o crescimento das cidades próximas é uma preocupação ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a boa iluminação é também economia', tag: 'argumento',
    premissas: ['A luz lançada para o céu não ilumina a rua nem a calçada.', 'Essa luz consome energia que alguém paga.', 'Luminárias que dirigem a luz para baixo iluminam melhor o chão com menos potência.'],
    conclusao: 'Logo, reduzir a poluição luminosa pode melhorar a iluminação útil e economizar energia ao mesmo tempo.',
    nota: 'Segurança urbana exige iluminação adequada, não excessiva nem mal direcionada.',
  },
  objecoes: [
    { objecao: 'Menos luz significa menos segurança.', tag: 'debate',
      resposta: 'A segurança depende de iluminação bem distribuída e sem ofuscamento, não da quantidade máxima. Luz excessiva e mal direcionada pode ofuscar e criar sombras profundas. O objetivo é iluminar bem, não iluminar o céu.' },
  ],
  aplicacao: `<p>Faça a contagem de estrelas de uma constelação em dois lugares, estime a classe de Bortle de cada um e fotografe (ou descreva) três luminárias do seu bairro, classificando-as como adequadas ou não, com uma proposta de melhoria.</p>`,
  fonte: {
    obra: 'Papa Francisco, Laudato si\' (2015), caps. II e VI; Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, seção sobre observação', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'Laudato si\' (vatican.va)' },
    orientacao: `<p>Na Laudato si', localize a conversão ecológica e a beleza da criação. Relacione-as aos efeitos da poluição luminosa e às soluções propostas.</p>`,
  },
  perguntas: [
    { p: 'O que é poluição luminosa?', r: 'Excesso ou má direção da luz artificial.' },
    { p: 'O que mede a escala de Bortle?', r: 'A qualidade do céu noturno, de 1 a 9.' },
    { p: 'Por que a luz da costa afeta tartarugas marinhas?', r: 'Porque os filhotes se orientam pela claridade do mar e podem ser desviados.' },
  ],
  exercicios: [
    mc('Na escala de Bortle, o céu de uma grande cidade fica perto de:', ['1', '3', '5', '9'], 3, 'Pior classe.'),
    mc('Uma luminária adequada dirige a luz:', ['Para o céu', 'Para baixo', 'Para os lados', 'Em todas as direções'], 1, 'Sem desperdício.'),
    mc('O Projeto Tamar protege:', ['Aves', 'Tartarugas marinhas', 'Golfinhos', 'Corais'], 1, 'Praias de desova.'),
    mc('Luz lançada para o céu é:', ['Iluminação útil', 'Energia desperdiçada', 'Necessária', 'Obrigatória'], 1, 'Não ilumina o chão.'),
    mc('A conversão ecológica é proposta da:', ['Rerum Novarum', 'Laudato si\'', 'Dei Filius', 'Fides et Ratio'], 1, 'Francisco, 2015.'),
    disc('Entregue a contagem de estrelas em dois lugares, a estimativa de Bortle e a avaliação de três luminárias com propostas.', ['Contagens', 'Estimativas de Bortle', 'Avaliação das luminárias', 'Propostas']),
  ],
  resumo: ['Brilho do céu, luz intrusa, ofuscamento.', 'Escala de Bortle (1 a 9).', 'Efeitos: astronomia, fauna (Tamar), saúde, energia.', 'Soluções: luz para baixo, intensidade e cor adequadas.', 'Laudato si\': cuidado da criação.'],
  referencias: [
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
    { texto: 'John Bortle, "Introducing the Bortle Dark-Sky Scale" (2001).' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a contagem e a avaliação', 'Ler os capítulos indicados da Laudato si\''],
  revisao: [['Bortle', '1 a 9.'], ['Luz para baixo', 'Solução.'], ['Tamar', 'Tartarugas.']],
  avancado: {
    texto: `<h3>Constelações de satélites</h3>
<p>O lançamento de grandes constelações de satélites de comunicação deixa rastros em imagens astronômicas e preocupa os observatórios; astrônomos e empresas discutem medidas de mitigação ${tag('fato')}.</p>`,
    leituras: [{ texto: 'União Astronômica Internacional, comunicados sobre constelações de satélites.' }],
    exercicios: [
      mc('Constelações de satélites afetam a astronomia por:', ['Rastros nas imagens', 'Mudar as órbitas dos planetas', 'Apagar o Sol', 'Nada'], 0, 'Reflexos.'),
      mc('A resposta discutida é de:', ['Proibição total', 'Mitigação entre astrônomos e empresas', 'Ignorar', 'Destruir satélites'], 1, 'Diálogo.'),
      mc('Esse problema é parte da preservação do:', ['Céu escuro', 'Calendário', 'Mar', 'Solo'], 0, 'Céu noturno.'),
      disc('Exponha os interesses em conflito no caso das constelações de satélites e proponha critérios para decidir.', ['Interesses', 'Critérios', 'Proposta', 'Conclusão'])],
  },
}),

aula({
  id: 'as5-4', titulo: 'Projeto de observação de um mês: pergunta, registro e relatório', duracao: '180 min',
  aprendera: ['Formular uma pergunta observacional', 'Planejar e manter registros sistemáticos', 'Analisar os dados com gráficos e modelos', 'Redigir o relatório com conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Astronomia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação própria: um mês de observação sistemática do céu, com registros e relatório. Esta aula é o roteiro.</p>
<h3>1. Pergunta</h3>
<p>Opções acessíveis: "como varia a hora do nascer da Lua ao longo de um ciclo de fases?"; "como muda a posição de Júpiter (ou Vênus) entre as estrelas em um mês?"; "qual a latitude da minha cidade medida por gnômon em vários dias?" ${tag('argumento')}.</p>
<h3>2. Registro</h3>
<p>Para cada observação: data, hora (com fuso), lugar, condições do céu, instrumento (olho nu, binóculo, gnômon), medida e desenho ou foto ${tag('fato')}. Pelo menos dez observações distribuídas no mês ${tag('fato')}.</p>
<h3>3. Análise</h3>
<p>Monte tabelas e gráficos; compare com o que o modelo prevê (efemérides do Observatório Nacional, programas de planetário livres como o Stellarium) e discuta as diferenças e as fontes de erro ${tag('fato')}.</p>
<h3>4. Relatório</h3>
<p>Estrutura: pergunta; método e instrumentos; registros; análise e comparação com o modelo; fontes de erro; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Rubrica</h3>
<ul>
<li>Registros completos e datados.</li>
<li>Método descrito de modo que outro possa repetir.</li>
<li>Comparação com o modelo e discussão de erros.</li>
<li>Distinção entre observação, inferência e hipótese.</li>
<li>Conclusão proporcional.</li>
</ul>
<h3>Segurança</h3>
<p>Nunca olhe diretamente para o Sol, nem com binóculos ou telescópios sem filtro adequado; para o Sol, use apenas métodos indiretos, como a sombra do gnômon ${tag('fato')}.</p>`,
  vocabulario: [
    ['Pergunta observacional', 'Pergunta que se responde com observações do céu.'],
    ['Efemérides', 'Tabelas de posições e horários dos astros.'],
    ['Fonte de erro', 'Causa de diferença entre medida e valor verdadeiro.'],
    ['Gnômon', 'Haste vertical cuja sombra permite medir a altura do Sol.'],
    ['Reprodutibilidade', 'Possibilidade de outra pessoa repetir as medidas.'],
  ],
  exemplos: `<p><strong>Registro modelo:</strong> "12/3, 19h40 (horário de Brasília), quintal, céu limpo a oeste, olho nu. Vênus a cerca de 3 palmos acima do horizonte oeste, à esquerda de uma estrela brilhante (verificar no Stellarium). Desenho anexo." Com dez registros assim, o movimento de Vênus em relação às estrelas aparece claramente.</p>`,
  contexto: `<p><strong>No mundo:</strong> observadores amadores contribuem com dados para pesquisas sobre estrelas variáveis, meteoros e cometas. <strong>No Brasil:</strong> clubes de astronomia e planetários promovem observações públicas e apoiam estudantes da Olimpíada Brasileira de Astronomia ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comparar observação e modelo fortalece o relatório', tag: 'argumento',
    premissas: ['Uma observação isolada pode conter erros de medida ou de identificação.', 'O modelo (efemérides) dá a previsão para o mesmo lugar e hora.', 'A diferença entre os dois permite estimar o erro e detectar enganos.'],
    conclusao: 'Logo, o relatório deve comparar observação e modelo e discutir as diferenças.',
    nota: 'É o método da astronomia desde Tycho e Kepler, em pequena escala.',
  },
  objecoes: [
    { objecao: 'Observar a olho nu não tem valor científico hoje.', tag: 'debate',
      resposta: 'Não produz descobertas novas na maioria dos casos, mas treina o método científico — registro, medida, comparação com modelo, análise de erro — e cria familiaridade com o céu. É o mesmo caminho que levou dos registros babilônicos às leis de Kepler.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: pergunta, objeto, instrumento, lugar, cronograma de pelo menos dez observações, modelo de registro, programa ou efeméride de comparação e cuidados de segurança.</p>`,
  fonte: {
    obra: 'Observatório Nacional, efemérides astronômicas; Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulos de astronomia de posição', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' },
    orientacao: `<p>Nas efemérides, localize os dados do objeto escolhido para o mês do projeto. No manual, revise coordenadas e movimentos. Use ambos no pré-projeto.</p>`,
  },
  perguntas: [
    { p: 'Quantas observações o projeto exige?', r: 'Pelo menos dez, distribuídas no mês.' },
    { p: 'O que registrar em cada observação?', r: 'Data, hora com fuso, lugar, condições do céu, instrumento, medida e desenho ou foto.' },
    { p: 'Como observar o Sol com segurança?', r: 'Apenas por métodos indiretos, como a sombra do gnômon; nunca diretamente.' },
  ],
  exercicios: [
    mc('Qual destas é uma pergunta observacional?', ['O universo é infinito?', 'Como varia a hora do nascer da Lua ao longo de um ciclo de fases?', 'Deus criou as estrelas?', 'O que é a vida?'], 1, 'Respondível com observações.'),
    mc('Programas como o Stellarium servem para:', ['Substituir a observação', 'Comparar observação e modelo', 'Fotografar o Sol', 'Medir paralaxe'], 1, 'Planetário digital.'),
    mc('Para observar o Sol, deve-se:', ['Usar binóculo', 'Usar métodos indiretos', 'Olhar rapidamente', 'Usar óculos escuros comuns'], 1, 'Segurança.'),
    mc('A diferença entre medida e previsão permite:', ['Ignorar o modelo', 'Estimar erros', 'Provar o modelo sempre', 'Nada'], 1, 'Análise de erro.'),
    mc('Um relatório reprodutível descreve:', ['Só a conclusão', 'O método e os instrumentos', 'Só os desenhos', 'Só as fontes'], 1, 'Repetição.'),
    disc('Apresente o pré-projeto: pergunta, objeto, instrumento, cronograma de dez observações, modelo de registro, comparação e segurança.', ['Pergunta', 'Cronograma', 'Modelo de registro', 'Comparação com modelo', 'Segurança']),
  ],
  resumo: ['Pergunta observacional acessível.', 'Dez ou mais registros completos.', 'Comparação com efemérides e Stellarium.', 'Relatório com erros e conclusão proporcional.', 'Segurança com o Sol.'],
  referencias: [
    { texto: 'Observatório Nacional, efemérides astronômicas.', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' } },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar os registros'],
  revisao: [['Dez registros', 'Mínimo.'], ['Efemérides', 'Comparação.'], ['Sol', 'Só métodos indiretos.']],
  avancado: {
    texto: `<h3>Ciência cidadã</h3>
<p>Plataformas de ciência cidadã permitem que voluntários classifiquem galáxias, registrem meteoros ou meçam o brilho do céu, contribuindo com pesquisas profissionais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' }],
    exercicios: [
      mc('Ciência cidadã é:', ['Ciência feita só por governos', 'Participação de voluntários em pesquisas', 'Pseudociência', 'Astrologia'], 1, 'Colaboração.'),
      mc('Voluntários podem contribuir com:', ['Classificação de galáxias e registro de meteoros', 'Nada útil', 'Só fotografias de lazer', 'Previsões astrológicas'], 0, 'Dados reais.'),
      mc('A medida do brilho do céu por voluntários ajuda a estudar:', ['A poluição luminosa', 'O Big Bang', 'A gravitação', 'O calendário'], 0, 'Céu noturno.'),
      disc('Proponha como seu projeto de observação poderia contribuir para uma iniciativa de ciência cidadã.', ['Iniciativa', 'Contribuição', 'Método', 'Limites'])],
  },
}),

avaliacao('as5-5', 'Avaliação integradora de Astronomia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Astronomia. Reúne questões de todos os módulos (AS1 a AS5) e pede duas discursivas de síntese. A conclusão do percurso exige também o projeto de observação, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos de paralaxe, Kepler, Hubble-Lemaître e Páscoa.</li><li>Releia a rubrica do projeto (as5-4).</li></ul>`,
[
  disc('Interprete dados de um objeto celeste (por exemplo, uma estrela com paralaxe, magnitude e espectro, ou uma galáxia com velocidade de afastamento) e situe-o num modelo, distinguindo observação, inferência e hipótese.', ['Dados lidos corretamente', 'Cálculos', 'Modelo adequado', 'Observação, inferência e hipótese distinguidas', 'Conclusão proporcional']),
  disc('Responda como astrônomo católico: o que a astronomia pode e o que não pode afirmar sobre o universo e sobre a criação? Use três exemplos de módulos diferentes.', ['Distingue ciência, filosofia e fé', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
