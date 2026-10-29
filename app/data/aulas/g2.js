// Geografia II — formação do pensamento geográfico e autores fundamentais (etapas 4 e 5 do percurso de Geografia).
// Da geografia grega às navegações, Humboldt e Ritter, Ratzel e Vidal de la Blache, Mackinder e a geopolítica.
// Datas e atribuições seguem as edições correntes; teses são apresentadas antes das críticas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'g2-1', titulo: 'Da geografia antiga às Grandes Navegações: Eratóstenes, Estrabão, Ptolomeu e os mapas medievais', duracao: '120 min',
  aprendera: ['Explicar como Eratóstenes estimou a circunferência da Terra', 'Distinguir a geografia descritiva de Estrabão da matemática de Ptolomeu', 'Ler mapas medievais segundo seus próprios fins', 'Relacionar as navegações à cartografia moderna e ao Brasil'],
  prereq: ['Geografia I (módulo G1)'],
  explicacao: `
<h3>O problema</h3>
<p>A geografia não começou com satélites. Os gregos já mediam a Terra e descreviam regiões; os medievais faziam mapas com finalidades próprias; as navegações exigiram novas cartas. Conhecer essa história mostra por que a geografia combina medida e descrição.</p>
<h3>Os gregos</h3>
<ul>
<li><strong>Eratóstenes</strong> (século III a.C.) estimou a circunferência da Terra comparando o ângulo da sombra do Sol ao meio-dia em Siene e em Alexandria, cuja distância era conhecida ${tag('fato')}. O valor exato que obteve depende da unidade (o estádio) usada, o que é debatido ${tag('debate')}.</li>
<li><strong>Estrabão</strong> (c. 64 a.C.–c. 24 d.C.) escreveu a <em>Geografia</em> em dezessete livros, descrição das regiões do mundo conhecido, seus povos e costumes ${tag('fato')}.</li>
<li><strong>Cláudio Ptolomeu</strong> (século II d.C.) escreveu uma <em>Geografia</em> com coordenadas de milhares de lugares e instruções para projetar a esfera no plano ${tag('fato')}.</li>
</ul>
<p>Estrabão representa a geografia <em>descritiva</em> (regiões e povos); Ptolomeu, a <em>matemática</em> (posição e projeção). As duas linhas atravessam toda a história da disciplina ${tag('interpretacao')}.</p>
<h3>Os medievais</h3>
<p>Os mapas "T-O", difundidos a partir das <em>Etimologias</em> de Santo Isidoro de Sevilha (século VII), representavam o mundo habitado com três partes (Ásia, Europa, África) e frequentemente Jerusalém ao centro ${tag('fato')}. Eram mapas simbólicos e teológicos, não cartas de navegação; julgá-los como "mapas errados" é anacronismo ${tag('interpretacao')}. Os medievais cultos sabiam que a Terra é esférica ${tag('fato')}. No mundo islâmico, al-Idrisi produziu para Rogério II da Sicília um grande mapa-múndi e um tratado geográfico (1154) ${tag('fato')}. Os portulanos, cartas náuticas do Mediterrâneo a partir do século XIII, traziam linhas de rumo para a navegação ${tag('fato')}.</p>
<h3>As navegações</h3>
<p>A <em>Geografia</em> de Ptolomeu foi traduzida para o latim no início do século XV e influenciou os cartógrafos ${tag('fato')}. O Tratado de Tordesilhas (1494) dividiu o mundo por um meridiano — uma decisão geográfica com consequências para o território do futuro Brasil ${tag('fato')}. Gerardus Mercator publicou em 1569 sua projeção, que conserva os ângulos e facilita a navegação por rumo constante (aula g1-3) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Geografia descritiva', 'Descrição de regiões, povos e paisagens.'],
    ['Geografia matemática', 'Medida da Terra, coordenadas e projeções.'],
    ['Mapa T-O', 'Mapa medieval simbólico com três partes do mundo.'],
    ['Portulano', 'Carta náutica medieval com linhas de rumo.'],
    ['Meridiano de Tordesilhas', 'Linha que dividiu as áreas de Portugal e Castela (1494).'],
  ],
  exemplos: `<p><strong>O raciocínio de Eratóstenes:</strong> se ao meio-dia o Sol estava a pino em Siene e formava um ângulo de cerca de 7,2° com a vertical em Alexandria, a distância entre as cidades correspondia a 7,2/360 = 1/50 da circunferência. Multiplicando a distância por 50, obtém-se a volta da Terra. O método é correto; a precisão depende das medidas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a geografia grega, preservada e desenvolvida por árabes e bizantinos, voltou ao Ocidente latino e sustentou a expansão marítima europeia. <strong>No Brasil:</strong> o território nasceu de uma linha traçada num mapa (Tordesilhas) e foi redesenhado por tratados posteriores, como o de Madri (1750) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os mapas T-O não provam que os medievais ignoravam a forma da Terra', tag: 'argumento',
    premissas: ['Um mapa é feito para um fim; o fim do mapa T-O era representar simbolicamente o mundo habitado e a história sagrada.', 'Autores medievais lidos nas escolas, como Beda e Sacrobosco, afirmavam a esfericidade da Terra.', 'Um mapa simbólico não pretende ser carta de navegação.'],
    conclusao: 'Logo, inferir dos mapas T-O que os medievais criam numa Terra plana é erro de interpretação.',
    nota: 'O mito da "Terra plana medieval" difundiu-se sobretudo no século XIX; é exemplo de anacronismo (aula h1-3).',
  },
  objecoes: [
    { objecao: 'A cartografia é neutra: apenas registra o que existe.', tag: 'debate',
      resposta: 'Todo mapa seleciona, simplifica e escolhe um centro e uma projeção. Isso não o torna falso, mas exige perguntar por quem e para que foi feito — o que vale para os mapas medievais e para os de hoje.' },
  ],
  aplicacao: `<p>Compare um mapa T-O, um portulano e a projeção de Mercator (imagens em acervos digitais de bibliotecas nacionais). Para cada um, indique: finalidade, centro, o que representa bem e o que distorce.</p>`,
  fonte: {
    obra: 'Estrabão, Geografia, livro I; Cláudio Ptolomeu, Geografia, livro I', link: null,
    orientacao: `<p>No livro I de Estrabão, identifique o que ele entende por utilidade da geografia. No livro I de Ptolomeu, localize a distinção entre geografia e corografia. Compare as duas concepções.</p>`,
  },
  perguntas: [
    { p: 'Como Eratóstenes estimou a circunferência da Terra?', r: 'Pela diferença de ângulo da sombra do Sol entre Siene e Alexandria e pela distância entre as cidades.' },
    { p: 'Qual a diferença entre a geografia de Estrabão e a de Ptolomeu?', r: 'Estrabão é descritivo (regiões e povos); Ptolomeu é matemático (coordenadas e projeções).' },
    { p: 'Em que ano Mercator publicou sua projeção?', r: 'Em 1569.' },
  ],
  exercicios: [
    mc('Se o ângulo medido fosse 1/50 da circunferência e a distância 800 km, a volta da Terra seria:', ['8.000 km', '40.000 km', '16.000 km', '80.000 km'], 1, '800 × 50.'),
    mc('Os mapas T-O tinham finalidade principalmente:', ['Náutica', 'Simbólica e teológica', 'Militar', 'Cadastral'], 1, 'Representação do mundo habitado.'),
    mc('O mapa-múndi de al-Idrisi foi feito para:', ['Carlos Magno', 'Rogério II da Sicília', 'D. Manuel I', 'Filipe II'], 1, '1154.'),
    mc('O Tratado de Tordesilhas é de:', ['1453', '1494', '1500', '1750'], 1, 'Dividiu as áreas por um meridiano.'),
    mc('Portulanos eram:', ['Mapas simbólicos', 'Cartas náuticas com linhas de rumo', 'Mapas de relevo', 'Censos'], 1, 'Mediterrâneo, século XIII em diante.'),
    disc('Explique por que o mito da "Terra plana medieval" é um anacronismo, usando ao menos dois fatos desta aula.', ['Define anacronismo', 'Usa dois fatos', 'Distingue mapa simbólico de carta náutica', 'Conclusão']),
  ],
  resumo: ['Eratóstenes mediu a Terra (século III a.C.).', 'Estrabão descritivo; Ptolomeu matemático.', 'Mapas T-O simbólicos; Terra esférica conhecida.', 'Al-Idrisi (1154) e portulanos.', 'Tordesilhas (1494) e Mercator (1569).'],
  referencias: [
    { texto: 'Estrabão, Geografia (início do século I d.C.).' },
    { texto: 'Cláudio Ptolomeu, Geografia (século II d.C.).' },
    { texto: 'Santo Isidoro de Sevilha, Etimologias, livro XIV.' },
    { texto: 'Paul Claval, História da geografia (1995).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Comparar os três mapas'],
  revisao: [['Eratóstenes', 'Ângulo da sombra × distância.'], ['Ptolomeu', 'Coordenadas e projeção.'], ['Mercator', '1569, conserva ângulos.']],
  avancado: {
    texto: `<h3>Geografia e corografia</h3>
<p>Ptolomeu distinguia a geografia, representação do mundo inteiro em proporção, da corografia, descrição detalhada de lugares particulares ${tag('fato')}. A distinção antecipa o problema da escala (aula g1-1).</p>
<h3>A cartografia portuguesa</h3>
<p>Cartógrafos portugueses do século XVI, como os Reinel e os Homem, produziram cartas que registravam a costa do Brasil; o Atlas Miller (c. 1519) traz uma das representações mais antigas do território ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Claval, História da geografia (1995).' }],
    exercicios: [
      mc('Para Ptolomeu, a corografia é:', ['A medida da Terra', 'A descrição detalhada de lugares particulares', 'O estudo do clima', 'A navegação'], 1, 'Escala local.'),
      mc('O Atlas Miller é de cerca de:', ['1494', '1519', '1569', '1750'], 1, 'Cartografia portuguesa.'),
      mc('A distinção geografia/corografia antecipa o problema da:', ['Escala', 'Inflação', 'Projeção cilíndrica', 'Densidade'], 0, 'Todo e parte.'),
      disc('Compare uma representação quinhentista do litoral brasileiro com um mapa atual: o que mudou e por quê?', ['Identifica as fontes', 'Compara', 'Explica as mudanças', 'Conclusão'])],
  },
}),

aula({
  id: 'g2-2', titulo: 'Humboldt e Ritter: o nascimento da geografia moderna', duracao: '120 min',
  aprendera: ['Explicar a contribuição de Humboldt à geografia física', 'Expor a geografia comparada de Ritter', 'Ler o diagrama de vegetação por altitude', 'Situar a viagem de Humboldt na América do Sul'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>No início do século XIX, a geografia deixou de ser apenas descrição de lugares e passou a buscar relações e regularidades entre clima, relevo, vegetação e sociedades. Dois alemães, Alexander von Humboldt e Carl Ritter, são considerados os fundadores da geografia moderna ${tag('interpretacao')}.</p>
<h3>Humboldt (1769–1859)</h3>
<p>Entre 1799 e 1804, Humboldt viajou pelas Américas com o botânico Aimé Bonpland, percorrendo a Venezuela, os Andes, o México e Cuba ${tag('fato')}. Mediu temperaturas, altitudes, pressão e coletou plantas. No <em>Ensaio sobre a geografia das plantas</em> (1807), relacionou a vegetação à altitude e ao clima, com o célebre quadro do Chimborazo ${tag('fato')}. Criou as linhas isotermas, que ligam pontos de mesma temperatura média ${tag('fato')}. Sua obra final, <em>Cosmos</em> (1845–1862), buscava mostrar a natureza como um todo interligado ${tag('fato')}.</p>
<h3>Ritter (1779–1859)</h3>
<p>Carl Ritter, professor em Berlim, escreveu a <em>Erdkunde</em> (Ciência da Terra), obra monumental que comparava regiões para compreender a relação entre a natureza e a história dos povos ${tag('fato')}. Ritter via na ordem da Terra um sentido providencial ${tag('interpretacao')}.</p>
<h3>Método</h3>
<p>Os dois combinaram observação, medida e comparação, em vez de compilar relatos ${tag('interpretacao')}. Humboldt partia da natureza para o todo; Ritter, das regiões para a história humana. Ambos morreram em 1859, ano de publicação de <em>A origem das espécies</em>, de Darwin ${tag('fato')}.</p>
<h3>Humboldt e a fé</h3>
<p>Humboldt tinha posições religiosas reservadas; Ritter era cristão convicto ${tag('interpretacao')}. Para a fé católica, o estudo da ordem natural é caminho legítimo para reconhecer a sabedoria do Criador, sem confundir as ciências com a teologia ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Isoterma', 'Linha que liga pontos de mesma temperatura média.'],
    ['Andar de vegetação', 'Faixa de vegetação determinada pela altitude.'],
    ['Geografia comparada', 'Método de Ritter: comparar regiões para compreender relações.'],
    ['Cosmos', 'Obra final de Humboldt (1845–1862) sobre a natureza como um todo.'],
  ],
  exemplos: `<p><strong>Altitude imita latitude:</strong> subir uma montanha equatorial é como viajar do equador ao polo: da floresta quente às pastagens de altitude e às neves. Humboldt mostrou isso no Chimborazo; no Brasil, o mesmo princípio explica as diferenças de vegetação entre o litoral e as serras do Sudeste.</p>`,
  contexto: `<p><strong>No mundo:</strong> Humboldt influenciou Darwin, que levou seus livros na viagem do Beagle, e toda a ciência do século XIX ${tag('fato')}. <strong>No Brasil:</strong> Humboldt não entrou no território do Brasil colonial; as autoridades portuguesas não autorizaram sua passagem ${tag('fato')}. A tradição de viajantes naturalistas no Brasil (Spix e Martius, Saint-Hilaire) segue, porém, o modelo humboldtiano ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a medida mudou a geografia', tag: 'argumento',
    premissas: ['Relatos de viajantes variam conforme o observador.', 'Medidas padronizadas (temperatura, altitude, pressão) podem ser comparadas entre lugares.', 'A comparação permite descobrir regularidades, como a relação entre altitude e vegetação.'],
    conclusao: 'Logo, a medida padronizada permitiu à geografia passar da descrição à explicação.',
    nota: 'Não elimina a descrição: Humboldt escrevia também quadros literários da natureza.',
  },
  objecoes: [
    { objecao: 'Humboldt foi apenas um aventureiro rico, não um cientista.', tag: 'debate',
      resposta: 'Ele financiou a viagem com recursos próprios, mas publicou dados medidos e métodos (como as isotermas) usados até hoje. Avaliar a obra pelos resultados, e não pela origem da renda, é o critério correto.' },
  ],
  aplicacao: `<p>Escolha uma serra brasileira (Mantiqueira, Serra do Mar, Serra Geral). Com dados de altitude e clima, descreva como a vegetação muda da base ao topo, no estilo do quadro do Chimborazo.</p>`,
  fonte: {
    obra: 'Alexander von Humboldt, Ensaio sobre a geografia das plantas (1807); Cosmos, vol. I (1845), introdução', link: null,
    orientacao: `<p>No Ensaio, observe como o quadro reúne dados de altitude, temperatura e plantas. Na introdução de Cosmos, identifique a ideia de natureza como um todo. Relacione as duas obras ao conceito de paisagem (aula g1-1).</p>`,
  },
  perguntas: [
    { p: 'Quando Humboldt viajou às Américas?', r: 'Entre 1799 e 1804, com Aimé Bonpland.' },
    { p: 'O que são isotermas?', r: 'Linhas que ligam pontos de mesma temperatura média.' },
    { p: 'Qual a obra principal de Ritter?', r: 'A Erdkunde (Ciência da Terra).' },
  ],
  exercicios: [
    mc('O quadro da vegetação por altitude de Humboldt refere-se ao:', ['Everest', 'Chimborazo', 'Kilimanjaro', 'Pico da Neblina'], 1, 'Ensaio sobre a geografia das plantas (1807).'),
    mc('Cosmos foi publicado entre:', ['1799 e 1804', '1845 e 1862', '1882 e 1891', '1903 e 1922'], 1, 'Obra final de Humboldt.'),
    mc('Humboldt e Ritter morreram em:', ['1804', '1848', '1859', '1904'], 2, 'Ano de A origem das espécies.'),
    mc('O método de Ritter é chamado de geografia:', ['Quantitativa', 'Comparada', 'Crítica', 'Humanista'], 1, 'Comparação de regiões.'),
    mc('Subir uma montanha equatorial equivale, na vegetação, a:', ['Ir para o oeste', 'Aproximar-se dos polos', 'Ir para o mar', 'Nada'], 1, 'Altitude imita latitude.'),
    disc('Compare Humboldt e Ritter: objeto, método, ponto de partida e legado. Termine com um exemplo brasileiro de cada abordagem.', ['Objeto e método', 'Ponto de partida', 'Legado', 'Exemplos brasileiros']),
  ],
  resumo: ['Humboldt: viagem (1799–1804), isotermas, Chimborazo, Cosmos.', 'Ritter: Erdkunde e geografia comparada.', 'Medida e comparação: da descrição à explicação.', 'Humboldt não entrou no Brasil colonial.', 'Ambos morreram em 1859.'],
  referencias: [
    { texto: 'Alexander von Humboldt, Cosmos (1845–1862).' },
    { texto: 'Alexander von Humboldt e Aimé Bonpland, Ensaio sobre a geografia das plantas (1807).' },
    { texto: 'Andrea Wulf, A invenção da natureza: a vida e as descobertas de Alexander von Humboldt (2015).' },
    { texto: 'Paul Claval, História da geografia (1995).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer o perfil de vegetação de uma serra'],
  revisao: [['Isoterma', 'Mesma temperatura média.'], ['Ritter', 'Erdkunde, geografia comparada.'], ['Cosmos', '1845–1862.']],
  avancado: {
    texto: `<h3>Spix e Martius</h3>
<p>Os naturalistas bávaros Johann Baptist von Spix e Carl Friedrich Philipp von Martius percorreram o Brasil entre 1817 e 1820 ${tag('fato')}. Martius dirigiu depois a <em>Flora brasiliensis</em>, obra coletiva de descrição da flora do país ${tag('fato')}.</p>
<h3>Holismo e ecologia</h3>
<p>A visão humboldtiana da natureza interligada é frequentemente apontada como precursora da ecologia, termo criado por Ernst Haeckel em 1866 ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Andrea Wulf, A invenção da natureza (2015).' }],
    exercicios: [
      mc('Spix e Martius percorreram o Brasil entre:', ['1799 e 1804', '1817 e 1820', '1845 e 1862', '1934 e 1940'], 1, 'Viagem pelo interior.'),
      mc('O termo "ecologia" foi criado por:', ['Humboldt', 'Haeckel', 'Ritter', 'Darwin'], 1, '1866.'),
      mc('A Flora brasiliensis foi dirigida por:', ['Martius', 'Humboldt', 'Saint-Hilaire', 'Ratzel'], 0, 'Obra coletiva.'),
      disc('Escolha um viajante naturalista do século XIX no Brasil e mostre a influência de Humboldt em seu método.', ['Identifica o viajante', 'Descreve o método', 'Mostra a influência', 'Conclusão'])],
  },
}),

aula({
  id: 'g2-3', titulo: 'Ratzel e Vidal de la Blache: determinismo, possibilismo e gêneros de vida', duracao: '150 min',
  aprendera: ['Expor a antropogeografia de Ratzel e o conceito de espaço vital', 'Expor o possibilismo e os gêneros de vida de Vidal de la Blache', 'Avaliar criticamente as duas posições', 'Reconhecer a influência francesa na geografia brasileira'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quanto o meio natural determina a vida das sociedades? A pergunta dividiu a geografia no fim do século XIX entre uma tradição alemã, associada a Ratzel, e uma francesa, associada a Vidal de la Blache.</p>
<h3>Ratzel (1844–1904)</h3>
<p>Friedrich Ratzel publicou a <em>Antropogeografia</em> (1882–1891) e a <em>Geografia política</em> (1897) ${tag('fato')}. Estudou a influência das condições naturais sobre os povos e comparou o Estado a um organismo ligado ao solo; num ensaio de 1901 desenvolveu o conceito de "espaço vital" (<em>Lebensraum</em>) ${tag('fato')}. O termo foi depois apropriado pela geopolítica alemã e pela propaganda nazista; quanto da responsabilidade cabe ao próprio Ratzel é debatido ${tag('debate')}. Rotulá-lo simplesmente de "determinista" também é simplificação: sua obra reconhece a ação humana ${tag('interpretacao')}.</p>
<h3>Vidal de la Blache (1845–1918)</h3>
<p>Paul Vidal de la Blache fundou os <em>Annales de Géographie</em> (1891) e escreveu o <em>Quadro da geografia da França</em> (1903) ${tag('fato')}. Seu conceito central é o de <strong>gênero de vida</strong>: o conjunto de técnicas, hábitos e instituições com que um grupo aproveita as possibilidades do meio ${tag('fato')}. Os <em>Princípios de geografia humana</em> foram publicados postumamente em 1922 ${tag('fato')}. O nome "possibilismo" foi dado por Lucien Febvre em <em>A Terra e a evolução humana</em> (1922): o meio oferece possibilidades, e as sociedades escolhem entre elas ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>O determinismo estrito falha porque meios semelhantes abrigam sociedades muito diferentes; o possibilismo estrito falha se esquecer que o meio impõe limites reais (água, solo, relevo) ${tag('argumento')}. A posição mais defensável reconhece condicionamentos sem negar a liberdade e a técnica ${tag('interpretacao')} — o que concorda com a visão cristã do homem como ser livre chamado a cultivar e guardar a terra (Gn 2,15) ${tag('doutrina')}.</p>
<h3>No Brasil</h3>
<p>A geografia universitária brasileira nasceu sob influência francesa: Pierre Deffontaines participou da fundação da Associação dos Geógrafos Brasileiros (1934) e Pierre Monbeig lecionou na Universidade de São Paulo ${tag('fato')}.</p>`,
  vocabulario: [
    ['Antropogeografia', 'Estudo de Ratzel sobre a relação entre povos e meio.'],
    ['Espaço vital', 'Conceito de Ratzel (1901), depois apropriado pela geopolítica alemã.'],
    ['Determinismo ambiental', 'Tese de que o meio natural determina a sociedade.'],
    ['Possibilismo', 'Tese de que o meio oferece possibilidades entre as quais as sociedades escolhem.'],
    ['Gênero de vida', 'Conjunto de técnicas e hábitos de um grupo em relação ao meio (Vidal).'],
  ],
  exemplos: `<p><strong>Um mesmo meio, sociedades diferentes:</strong> o semiárido nordestino abrigou a pecuária extensiva colonial, a agricultura de sequeiro e, hoje, a fruticultura irrigada do vale do São Francisco. O clima é o mesmo; técnicas, capital e instituições mudaram. É o argumento possibilista em escala brasileira.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate entre determinismo e possibilismo reaparece hoje nas discussões sobre clima, doenças e desenvolvimento. <strong>No Brasil:</strong> a tradição francesa marcou os estudos regionais e o IBGE nas décadas de 1930 a 1960 ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o determinismo ambiental estrito é falso', tag: 'argumento',
    premissas: ['Se o meio determinasse a sociedade, meios semelhantes produziriam sociedades semelhantes.', 'Há meios semelhantes ocupados por sociedades muito diferentes, e a mesma região muda de economia sem mudar de clima.', 'Portanto, fatores não ambientais (técnica, instituições, escolhas) fazem diferença.'],
    conclusao: 'Logo, o meio condiciona, mas não determina a sociedade.',
    nota: 'O argumento não nega a influência do meio; nega apenas a determinação estrita.',
  },
  objecoes: [
    { objecao: 'O possibilismo é otimista demais: secas e terremotos mostram que o meio manda.', tag: 'debate',
      resposta: 'O meio impõe limites e riscos reais. Mas a vulnerabilidade a uma seca depende também de reservatórios, renda e políticas — por isso a mesma seca tem efeitos diferentes em sociedades diferentes.' },
  ],
  aplicacao: `<p>Escolha uma região brasileira e descreva dois gêneros de vida que ali existiram em épocas diferentes. Para cada um, indique o que o meio permitia, o que limitava e o que a técnica mudou.</p>`,
  fonte: {
    obra: 'Paul Vidal de la Blache, Princípios de geografia humana (1922), introdução; Friedrich Ratzel, Geografia política (1897), cap. I', link: null,
    orientacao: `<p>Em Vidal, localize a definição de gênero de vida. Em Ratzel, identifique a analogia entre Estado e organismo. Compare as duas concepções da relação entre sociedade e meio.</p>`,
  },
  perguntas: [
    { p: 'Quem deu o nome de "possibilismo" à posição de Vidal?', r: 'Lucien Febvre, em A Terra e a evolução humana (1922).' },
    { p: 'O que é gênero de vida?', r: 'O conjunto de técnicas, hábitos e instituições com que um grupo aproveita o meio.' },
    { p: 'Que conceito de Ratzel foi apropriado pela geopolítica alemã?', r: 'O espaço vital (Lebensraum).' },
  ],
  exercicios: [
    mc('A Antropogeografia de Ratzel foi publicada entre:', ['1845 e 1862', '1882 e 1891', '1903 e 1922', '1934 e 1940'], 1, 'Dois volumes.'),
    mc('Vidal de la Blache fundou a revista:', ['Annales de Géographie', 'Hérodote', 'Geographical Journal', 'Revista Brasileira de Geografia'], 0, '1891.'),
    mc('O possibilismo afirma que:', ['O meio determina a sociedade', 'O meio oferece possibilidades e a sociedade escolhe', 'O meio não importa', 'Só a economia importa'], 1, 'Febvre, 1922.'),
    mc('A Associação dos Geógrafos Brasileiros foi fundada em:', ['1891', '1922', '1934', '1964'], 2, 'Com participação de Deffontaines.'),
    mc('Rotular Ratzel apenas como "determinista" é:', ['Exato', 'Uma simplificação', 'Proibido', 'Irrelevante'], 1, 'Sua obra reconhece a ação humana.'),
    disc('Compare determinismo e possibilismo com um exemplo brasileiro e apresente uma crítica a cada posição.', ['Expõe as duas teses', 'Exemplo brasileiro', 'Uma crítica a cada', 'Conclusão própria']),
  ],
  resumo: ['Ratzel: Antropogeografia, Geografia política, espaço vital.', 'Apropriação pela geopolítica alemã (debate sobre responsabilidade).', 'Vidal: Annales (1891), gêneros de vida, Princípios (1922).', 'Possibilismo: nome dado por Febvre (1922).', 'Influência francesa no Brasil: AGB (1934), USP.'],
  referencias: [
    { texto: 'Friedrich Ratzel, Geografia política (1897).' },
    { texto: 'Paul Vidal de la Blache, Princípios de geografia humana (1922).' },
    { texto: 'Lucien Febvre, A Terra e a evolução humana (1922).' },
    { texto: 'Paulo César da Costa Gomes, Geografia e modernidade (1996).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Descrever dois gêneros de vida'],
  revisao: [['Lebensraum', 'Ratzel, 1901.'], ['Gênero de vida', 'Vidal de la Blache.'], ['Possibilismo', 'Febvre, 1922.']],
  avancado: {
    texto: `<h3>A geografia regional francesa</h3>
<p>Os discípulos de Vidal produziram monografias regionais, como a tese de Albert Demangeon sobre a Picardia (1905), modelo do estudo regional clássico ${tag('fato')}. O método — descrever relevo, clima, povoamento e economia de uma região como um todo — marcou os estudos regionais brasileiros ${tag('interpretacao')}.</p>
<h3>Determinismo hoje</h3>
<p>Economistas e geógrafos ainda discutem o peso de fatores geográficos (clima, doenças, acesso ao mar) em comparação com instituições no desenvolvimento ${tag('debate')}; o tema volta na aula sobre Diamond.</p>`,
    leituras: [{ texto: 'Paul Claval, História da geografia (1995).' }],
    exercicios: [
      mc('A monografia regional de Demangeon tratou da:', ['Bretanha', 'Picardia', 'Provença', 'Alsácia'], 1, '1905.'),
      mc('O estudo regional clássico descreve a região:', ['Só pela economia', 'Como um todo integrado', 'Só pelo clima', 'Só pela política'], 1, 'Relevo, clima, povoamento, economia.'),
      mc('O peso da geografia versus instituições no desenvolvimento é:', ['Consenso', 'Debate aberto', 'Irrelevante', 'Decidido por Ratzel'], 1, 'Debate atual.'),
      disc('Faça um esboço de monografia regional de um município brasileiro: relevo, clima, povoamento, economia, com fontes.', ['Quatro dimensões', 'Fontes citadas', 'Relações entre elas', 'Conclusão'])],
  },
}),

aula({
  id: 'g2-4', titulo: 'Mackinder e a geopolítica clássica: leitura dos textos fundadores', duracao: '150 min',
  aprendera: ['Expor a tese do "pivô geográfico" de Mackinder (1904)', 'Comparar Mackinder com Mahan e Spykman', 'Fazer ficha de leitura de um texto fundador', 'Situar a geopolítica brasileira e a interiorização da capital'],
  prereq: ['Aulas anteriores do módulo', 'Degrau 0: método de fichamento'],
  explicacao: `
<h3>O problema</h3>
<p>A geografia influencia o poder entre Estados? A geopolítica clássica respondeu que sim, e suas teses moldaram estratégias do século XX. Esta aula ensina a ler esses textos com método: expor a tese, verificar as premissas e avaliar o uso posterior.</p>
<h3>Mackinder</h3>
<p>Em 1904, o geógrafo britânico Halford Mackinder apresentou à Royal Geographical Society o artigo "O pivô geográfico da história" ${tag('fato')}. Sustentou que o interior da Eurásia, inacessível ao poder naval, era a "área pivô" da política mundial, e que as ferrovias permitiriam a uma potência terrestre dominá-la ${tag('fato')}. Em <em>Ideais democráticos e realidade</em> (1919), chamou essa área de <em>Heartland</em> e resumiu a tese: quem domina a Europa Oriental domina o Heartland, e por ele a "ilha-mundo" ${tag('fato')}.</p>
<h3>Poder marítimo e Rimland</h3>
<p>O americano Alfred Thayer Mahan, em <em>A influência do poder marítimo na história</em> (1890), defendera a primazia do poder naval ${tag('fato')}. Nicholas Spykman, nos anos 1940, deslocou a atenção para as bordas da Eurásia, o <em>Rimland</em> ${tag('fato')}.</p>
<h3>Como ler esses textos</h3>
<ol>
<li>Exponha a tese com as palavras do autor.</li>
<li>Identifique as premissas (tecnologia de transporte, distribuição de população e recursos).</li>
<li>Pergunte quais mudaram (aviação, mísseis, internet).</li>
<li>Separe a tese do uso político posterior.</li>
</ol>
<h3>Geopolítica no Brasil</h3>
<p>No Brasil, a geopolítica teve forte presença no pensamento militar: Mário Travassos escreveu <em>Projeção continental do Brasil</em> nos anos 1930, e Golbery do Couto e Silva, <em>Geopolítica do Brasil</em> (1967) ${tag('fato')}. A transferência da capital para Brasília (1960) e a integração do interior foram justificadas também por argumentos geopolíticos ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Geopolítica', 'Estudo da relação entre espaço geográfico e poder político.'],
    ['Área pivô / Heartland', 'Interior da Eurásia na tese de Mackinder.'],
    ['Ilha-mundo', 'Eurásia e África como bloco, em Mackinder.'],
    ['Poder marítimo', 'Capacidade naval e comercial no mar (Mahan).'],
    ['Rimland', 'Bordas da Eurásia, na tese de Spykman.'],
  ],
  exemplos: `<p><strong>Ficha de leitura (modelo):</strong> referência completa; contexto (rivalidade anglo-russa, ferrovia transiberiana); tese em uma frase; três premissas; evidências usadas; o que mudou desde 1904; uma objeção; uma citação curta com página. A mesma ficha serve para Mahan ou Spykman.</p>`,
  contexto: `<p><strong>No mundo:</strong> conceitos como Heartland voltam ao debate sempre que se discutem rivalidades na Eurásia. <strong>No Brasil:</strong> a ocupação da Amazônia, as fronteiras e a projeção no Atlântico Sul são temas permanentes da geopolítica nacional ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que teses geopolíticas dependem da tecnologia de transporte', tag: 'argumento',
    premissas: ['A tese de Mackinder supõe que a ferrovia daria à potência terrestre mobilidade comparável à naval.', 'O valor estratégico de um espaço depende de como pessoas, bens e armas se deslocam.', 'A aviação, os mísseis e as comunicações mudaram esses deslocamentos.'],
    conclusao: 'Logo, uma tese geopolítica deve ser reavaliada quando a tecnologia de transporte muda — não aceita nem rejeitada em bloco.',
    nota: 'Aplica o método: separar premissas de conclusão e verificar quais premissas ainda valem.',
  },
  objecoes: [
    { objecao: 'Estudar geopolítica é justificar o imperialismo.', tag: 'debate',
      resposta: 'Textos geopolíticos foram usados para fins imperiais, e isso deve ser dito. Mas compreender a relação entre espaço e poder é necessário também para defender a paz e a soberania. Estudar não é aprovar; Yves Lacoste fez a crítica da geografia justamente estudando seus usos.' },
  ],
  aplicacao: `<p>Faça a ficha de leitura completa do artigo de Mackinder (1904) segundo o modelo. Depois, aplique o passo 3: que premissas mudaram e como isso afeta a tese?</p>`,
  fonte: {
    obra: 'Halford Mackinder, "The Geographical Pivot of History", The Geographical Journal, vol. 23, n. 4 (1904)', link: null,
    orientacao: `<p>Leia o artigo inteiro. Identifique o mapa das "regiões naturais de poder", a tese sobre a área pivô e o papel das ferrovias. Faça a ficha segundo o método do Degrau 0.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese de Mackinder em 1904?', r: 'O interior da Eurásia é a área pivô da política mundial, e as ferrovias permitiriam a uma potência terrestre dominá-la.' },
    { p: 'Quem defendeu a primazia do poder marítimo?', r: 'Alfred Thayer Mahan, em 1890.' },
    { p: 'Que obra brasileira de geopolítica é de 1967?', r: 'Geopolítica do Brasil, de Golbery do Couto e Silva.' },
  ],
  exercicios: [
    mc('"O pivô geográfico da história" é de:', ['1890', '1904', '1919', '1944'], 1, 'Royal Geographical Society.'),
    mc('O termo Heartland aparece em:', ['A influência do poder marítimo', 'Ideais democráticos e realidade (1919)', 'Cosmos', 'Geografia política'], 1, 'Mackinder, 1919.'),
    mc('O Rimland é conceito de:', ['Mahan', 'Spykman', 'Ratzel', 'Vidal'], 1, 'Bordas da Eurásia.'),
    mc('Brasília foi inaugurada em:', ['1934', '1950', '1960', '1967'], 2, 'Interiorização da capital.'),
    mc('Reavaliar uma tese geopolítica exige verificar principalmente:', ['A fama do autor', 'As premissas que mudaram', 'O número de páginas', 'A língua original'], 1, 'Tecnologia, população, recursos.'),
    disc('Apresente sua ficha de leitura do artigo de Mackinder: tese, premissas, evidências, o que mudou desde 1904 e uma objeção.', ['Tese fiel ao texto', 'Premissas identificadas', 'Mudanças avaliadas', 'Objeção fundamentada']),
  ],
  resumo: ['Mackinder (1904): área pivô; Heartland (1919).', 'Mahan (1890): poder marítimo.', 'Spykman: Rimland.', 'Ler: tese, premissas, o que mudou, uso posterior.', 'Brasil: Travassos, Golbery (1967), Brasília (1960).'],
  referencias: [
    { texto: 'Halford Mackinder, "The Geographical Pivot of History" (1904).' },
    { texto: 'Alfred Thayer Mahan, A influência do poder marítimo na história (1890).' },
    { texto: 'Golbery do Couto e Silva, Geopolítica do Brasil (1967).' },
    { texto: 'Yves Lacoste, A geografia — isso serve, em primeiro lugar, para fazer a guerra (1976).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura de Mackinder', 'Responder à questão discursiva'],
  revisao: [['Mackinder', '1904; Heartland 1919.'], ['Mahan', 'Poder marítimo, 1890.'], ['Golbery', 'Geopolítica do Brasil, 1967.']],
  avancado: {
    texto: `<h3>A crítica de Lacoste</h3>
<p>Em 1976, Yves Lacoste publicou <em>A geografia — isso serve, em primeiro lugar, para fazer a guerra</em> e fundou a revista <em>Hérodote</em>, denunciando o uso estratégico do saber geográfico e propondo uma geopolítica crítica ${tag('fato')}.</p>
<h3>Geopolítica do Atlântico Sul</h3>
<p>A Convenção das Nações Unidas sobre o Direito do Mar (1982) definiu zona econômica exclusiva de 200 milhas náuticas ${tag('fato')}; o Brasil usa a expressão "Amazônia Azul" para seu espaço marítimo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Yves Lacoste, A geografia — isso serve, em primeiro lugar, para fazer a guerra (1976).' }],
    exercicios: [
      mc('A revista Hérodote foi fundada por:', ['Vidal', 'Lacoste', 'Mackinder', 'Milton Santos'], 1, '1976.'),
      mc('A zona econômica exclusiva tem:', ['12 milhas', '200 milhas náuticas', '500 km', '1.000 milhas'], 1, 'Convenção de 1982.'),
      mc('"Amazônia Azul" designa:', ['O rio Amazonas', 'O espaço marítimo brasileiro', 'Uma floresta', 'Um tratado'], 1, 'Expressão oficial.'),
      disc('Analise a importância geopolítica do Atlântico Sul para o Brasil com ao menos dois dados (área marítima, petróleo, comércio).', ['Dois dados com fonte', 'Análise', 'Objeção', 'Conclusão'])],
  },
}),

avaliacao('g2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história do pensamento geográfico — dos gregos à geopolítica — e duas discursivas de comparação entre autores.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o cálculo de Eratóstenes.</li><li>Releia sua ficha de leitura de Mackinder.</li></ul>`,
[
  disc('Trace a passagem da geografia descritiva à geografia explicativa, de Estrabão e Ptolomeu a Humboldt e Vidal de la Blache, com um exemplo de cada autor.', ['Quatro autores situados', 'Exemplo de cada', 'Passagem explicada', 'Conclusão']),
  disc('Compare determinismo, possibilismo e geopolítica clássica: tese, premissas e uma crítica a cada, com um exemplo brasileiro.', ['Três posições expostas', 'Premissas identificadas', 'Crítica a cada', 'Exemplo brasileiro']),
]),
];
