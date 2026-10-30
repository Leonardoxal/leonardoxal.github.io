// Astronomia IV — astrofísica e cosmologia (etapa 8 do percurso de Astronomia).
// Vida e morte das estrelas e o diagrama HR, o sistema solar, galáxias e expansão do universo,
// matéria e energia escuras, e a astronomia no Brasil.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'as4-1', titulo: 'A vida das estrelas: o diagrama HR, a fusão nuclear e o destino das estrelas', duracao: '150 min',
  aprendera: ['Ler o diagrama de Hertzsprung-Russell', 'Explicar a fonte de energia das estrelas', 'Descrever as fases da evolução estelar conforme a massa', 'Situar o Sol e três estrelas conhecidas no diagrama'],
  prereq: ['Astronomia III (módulo AS3)', 'Astronomia I: espectroscopia (as1-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que as estrelas brilham, e por quanto tempo? Como nascem e como morrem?</p>
<h3>O diagrama HR</h3>
<p>Por volta de 1910–1913, Ejnar Hertzsprung e Henry Norris Russell relacionaram a luminosidade e a temperatura (ou cor) das estrelas num diagrama ${tag('fato')}. A maioria das estrelas cai numa faixa diagonal, a <strong>sequência principal</strong>; acima ficam as gigantes e supergigantes; abaixo, as anãs brancas ${tag('fato')}.</p>
<h3>A energia das estrelas</h3>
<p>Na sequência principal, as estrelas obtêm energia pela fusão nuclear de hidrogênio em hélio no núcleo, como explicou Hans Bethe (1939) ${tag('fato')}. O Sol está na sequência principal há cerca de 4,6 bilhões de anos ${tag('fato')}.</p>
<h3>Evolução e morte</h3>
<p>Estrelas como o Sol, esgotado o hidrogênio no núcleo, tornam-se gigantes vermelhas, expulsam as camadas externas (nebulosa planetária) e deixam uma <strong>anã branca</strong> ${tag('fato')}. Estrelas de grande massa terminam em explosões de <strong>supernova</strong>, deixando estrelas de nêutrons ou buracos negros ${tag('fato')}. Subrahmanyan Chandrasekhar mostrou que uma anã branca não pode ter mais de cerca de 1,4 massa solar ${tag('fato')}.</p>
<h3>Somos poeira de estrelas</h3>
<p>Elementos mais pesados que o hélio, como o carbono e o ferro, foram produzidos no interior de estrelas e espalhados por supernovas ${tag('fato')}. A fé acrescenta, sem contradizer a ciência, que o homem, formado do "pó da terra" (Gn 2,7), recebe de Deus uma alma espiritual (CIC 362–366) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Diagrama HR', 'Gráfico de luminosidade contra temperatura das estrelas.'],
    ['Sequência principal', 'Faixa do diagrama HR onde estão as estrelas que fundem hidrogênio.'],
    ['Fusão nuclear', 'Junção de núcleos leves em mais pesados, liberando energia.'],
    ['Anã branca', 'Remanescente denso de estrela de baixa massa.'],
    ['Supernova', 'Explosão de estrela de grande massa (ou de anã branca em sistema binário).'],
    ['Limite de Chandrasekhar', 'Massa máxima de uma anã branca (~1,4 massa solar).'],
  ],
  exemplos: `<p><strong>Situando estrelas no diagrama:</strong> o Sol — amarelo, sequência principal, luminosidade 1 (unidade solar); Sirius A — branca, sequência principal, cerca de 25 vezes mais luminosa; Betelgeuse — vermelha, supergigante, dezenas de milhares de vezes mais luminosa; Sirius B — anã branca, quente e pouco luminosa.</p>`,
  contexto: `<p><strong>No mundo:</strong> a supernova de 1054, registrada por astrônomos chineses, deu origem à Nebulosa do Caranguejo ${tag('fato')}. <strong>No Brasil:</strong> astrônomos brasileiros participam de pesquisas sobre estrelas e supernovas em telescópios internacionais como o Gemini ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o Sol não pode brilhar por queima química', tag: 'argumento',
    premissas: ['Se o Sol fosse um carvão em combustão, com sua massa brilharia apenas alguns milhares de anos.', 'Rochas e fósseis indicam que a Terra tem bilhões de anos e recebeu luz solar durante esse tempo.', 'Só a fusão nuclear libera energia suficiente por unidade de massa para bilhões de anos.'],
    conclusao: 'Logo, a energia do Sol vem da fusão nuclear, e não de queima química.',
    nota: 'Combina astronomia, física nuclear e geologia.',
  },
  objecoes: [
    { objecao: 'Se o Sol vai morrer, o universo é absurdo.', tag: 'debate',
      resposta: 'A finitude das estrelas é fato físico; o sentido da existência não se mede pela duração das estrelas. A fé cristã espera "novos céus e nova terra" (Ap 21,1), e a filosofia distingue a ordem física do sentido moral e espiritual.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: desenhe um diagrama HR simplificado e situe o Sol e três estrelas conhecidas (por exemplo, Sirius, Betelgeuse e Rigel), com temperatura e luminosidade aproximadas de fontes confiáveis.</p>`,
  fonte: {
    obra: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulos sobre o diagrama HR e evolução estelar; Hans Bethe, "Energy Production in Stars" (1939)', link: null,
    orientacao: `<p>No manual, estude o diagrama HR e as fases de evolução. No artigo de Bethe, identifique o ciclo de reações proposto. Use ambos no exercício.</p>`,
  },
  perguntas: [
    { p: 'O que mostra o diagrama HR?', r: 'A relação entre luminosidade e temperatura das estrelas.' },
    { p: 'De onde vem a energia das estrelas da sequência principal?', r: 'Da fusão de hidrogênio em hélio no núcleo.' },
    { p: 'Como termina uma estrela como o Sol?', r: 'Como anã branca, depois de gigante vermelha e nebulosa planetária.' },
  ],
  exercicios: [
    mc('O diagrama HR foi elaborado por volta de:', ['1838', '1910–1913', '1939', '1965'], 1, 'Hertzsprung e Russell.'),
    mc('A fusão de hidrogênio nas estrelas foi explicada por:', ['Einstein', 'Bethe', 'Chandrasekhar', 'Hubble'], 1, '1939.'),
    mc('O limite de Chandrasekhar é de cerca de:', ['0,1 massa solar', '1,4 massa solar', '10 massas solares', '100 massas solares'], 1, 'Anãs brancas.'),
    mc('Estrelas de grande massa terminam em:', ['Anã branca', 'Supernova', 'Nebulosa planetária apenas', 'Planeta'], 1, 'Estrela de nêutrons ou buraco negro.'),
    mc('A supernova que originou a Nebulosa do Caranguejo foi registrada em:', ['1054', '1572', '1604', '1987'], 0, 'Astrônomos chineses.'),
    disc('Entregue o diagrama HR simplificado com o Sol e três estrelas conhecidas, e explique o destino provável de cada uma.', ['Diagrama correto', 'Quatro estrelas situadas', 'Fontes dos dados', 'Destinos explicados']),
  ],
  resumo: ['Diagrama HR (1910–1913): sequência principal, gigantes, anãs.', 'Fusão de hidrogênio (Bethe, 1939).', 'Sol: ~4,6 bilhões de anos.', 'Anã branca, supernova, estrela de nêutrons, buraco negro.', 'Chandrasekhar: ~1,4 massa solar.'],
  referencias: [
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'Hans Bethe, "Energy Production in Stars" (1939).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 362–366.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o diagrama HR', 'Ler os capítulos indicados'],
  revisao: [['HR', 'Luminosidade x temperatura.'], ['Bethe', 'Fusão, 1939.'], ['Chandrasekhar', '1,4 massa solar.']],
  avancado: {
    texto: `<h3>Neutrinos solares</h3>
<p>A fusão no Sol produz neutrinos, partículas que atravessam a matéria quase sem interagir; detectores mostraram, a partir dos anos 1960, menos neutrinos do que o previsto — o "problema dos neutrinos solares", resolvido pela descoberta da oscilação de neutrinos (Nobel de 2015) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre o Sol.' }],
    exercicios: [
      mc('Neutrinos solares são produzidos pela:', ['Queima química', 'Fusão nuclear', 'Rotação do Sol', 'Manchas solares'], 1, 'Reações no núcleo.'),
      mc('O problema dos neutrinos solares foi resolvido pela:', ['Paralaxe', 'Oscilação de neutrinos', 'Relatividade', 'Expansão'], 1, 'Nobel de 2015.'),
      mc('Neutrinos interagem com a matéria:', ['Fortemente', 'Quase nada', 'Só com água', 'Só com metais'], 1, 'Atravessam a Terra.'),
      disc('Explique o problema dos neutrinos solares como exemplo de anomalia que levou a nova física.', ['Previsão', 'Medida', 'Solução', 'Lição de método'])],
  },
}),

aula({
  id: 'as4-2', titulo: 'O sistema solar: formação, planetas, corpos menores e exploração', duracao: '150 min',
  aprendera: ['Explicar a formação do sistema solar pela nebulosa solar', 'Comparar planetas rochosos e gigantes', 'Explicar por que Plutão é planeta anão', 'Situar meteoritos e missões espaciais'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como se formaram o Sol e os planetas, e por que são tão diferentes entre si?</p>
<h3>Formação</h3>
<p>O sistema solar formou-se há cerca de 4,6 bilhões de anos a partir do colapso de uma nuvem de gás e poeira; o disco em rotação deu origem ao Sol no centro e aos planetas por acúmulo de material ${tag('fato')}. A ideia de uma nebulosa original remonta a Kant (1755) e Laplace (1796) ${tag('fato')}.</p>
<h3>Planetas</h3>
<p>Perto do Sol, onde só materiais rochosos e metálicos se condensavam, formaram-se os planetas rochosos (Mercúrio, Vênus, Terra, Marte); mais longe, onde também havia gelo, os gigantes (Júpiter, Saturno, Urano, Netuno) ${tag('interpretacao')}.</p>
<h3>Plutão e os corpos menores</h3>
<p>Em 2006, a União Astronômica Internacional definiu planeta como corpo que orbita o Sol, tem forma quase esférica e "limpou" a vizinhança de sua órbita; Plutão não cumpre o terceiro critério e passou a ser planeta anão ${tag('fato')}. Asteroides, cometas e meteoroides são corpos menores; o que chega ao solo é meteorito ${tag('fato')}.</p>
<h3>Exploração</h3>
<p>Sondas visitaram todos os planetas; as Voyager, lançadas em 1977, deixaram a heliosfera ${tag('fato')}. O meteorito de Bendegó, encontrado na Bahia em 1784, com mais de 5 toneladas, é o maior meteorito do Brasil e resistiu ao incêndio do Museu Nacional em 2018 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Nebulosa solar', 'Nuvem de gás e poeira da qual se formou o sistema solar.'],
    ['Planeta rochoso', 'Planeta de rocha e metal (Mercúrio, Vênus, Terra, Marte).'],
    ['Gigante gasoso', 'Planeta grande, de gás e gelo (Júpiter, Saturno; Urano e Netuno são gigantes de gelo).'],
    ['Planeta anão', 'Corpo esférico que orbita o Sol, mas não limpou sua órbita (Plutão).'],
    ['Meteorito', 'Fragmento de corpo celeste que atinge a superfície da Terra.'],
  ],
  exemplos: `<p><strong>Escala do sistema solar:</strong> se o Sol fosse uma bola de 1 metro, a Terra seria uma bolinha de cerca de 9 milímetros a uns 107 metros de distância, e Netuno estaria a mais de 3 quilômetros. A escala mostra o quanto o sistema solar é feito de espaço vazio.</p>`,
  contexto: `<p><strong>No mundo:</strong> missões a Marte buscam sinais de água e de possível vida passada. <strong>No Brasil:</strong> a Agência Espacial Brasileira coordena o programa espacial, e o país desenvolve satélites em parceria, como os CBERS, com a China ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os planetas rochosos estão perto do Sol', tag: 'argumento',
    premissas: ['Perto do Sol, a temperatura era alta demais para o gelo se condensar.', 'Só materiais rochosos e metálicos, menos abundantes, se condensavam ali.', 'Longe do Sol, o gelo também se condensava, permitindo núcleos maiores que atraíram gás.'],
    conclusao: 'Logo, a distribuição de temperatura no disco explica planetas rochosos pequenos perto do Sol e gigantes longe dele.',
    nota: 'A descoberta de exoplanetas gigantes perto de suas estrelas levou a modelos de migração planetária.',
  },
  objecoes: [
    { objecao: 'Rebaixar Plutão foi arbitrário.', tag: 'debate',
      resposta: 'A decisão dependeu de uma definição, e definições são convenções; mas a convenção foi motivada por dados: a descoberta de muitos corpos semelhantes a Plutão no cinturão de Kuiper. A discussão continua, mas não foi capricho.' },
  ],
  aplicacao: `<p>Monte o modelo em escala do sistema solar (distâncias ou tamanhos) com materiais simples ou num desenho, e calcule as proporções. Registre as fontes dos dados.</p>`,
  fonte: {
    obra: 'União Astronômica Internacional, Resolução B5 sobre a definição de planeta (2006); Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre o sistema solar', link: null,
    orientacao: `<p>Na resolução de 2006, identifique os três critérios de planeta. No manual, os dados de tamanho e distância dos planetas para o modelo em escala.</p>`,
  },
  perguntas: [
    { p: 'Há quanto tempo se formou o sistema solar?', r: 'Cerca de 4,6 bilhões de anos.' },
    { p: 'Por que Plutão é planeta anão?', r: 'Porque não limpou a vizinhança de sua órbita.' },
    { p: 'Qual o maior meteorito do Brasil?', r: 'O Bendegó, encontrado na Bahia em 1784.' },
  ],
  exercicios: [
    mc('A definição de planeta da UAI é de:', ['1930', '1977', '2006', '2015'], 2, 'Plutão rebaixado.'),
    mc('Os planetas rochosos são:', ['Júpiter e Saturno', 'Mercúrio, Vênus, Terra e Marte', 'Urano e Netuno', 'Plutão e Ceres'], 1, 'Internos.'),
    mc('As sondas Voyager foram lançadas em:', ['1957', '1969', '1977', '1990'], 2, 'Deixaram a heliosfera.'),
    mc('O meteorito de Bendegó foi encontrado em:', ['Minas Gerais', 'Bahia', 'Ceará', 'Pará'], 1, '1784.'),
    mc('A hipótese da nebulosa remonta a:', ['Ptolomeu', 'Kant e Laplace', 'Galileu', 'Einstein'], 1, '1755 e 1796.'),
    disc('Entregue o modelo em escala do sistema solar com cálculos e fontes, e explique por que os planetas rochosos estão perto do Sol.', ['Modelo em escala', 'Cálculos', 'Fontes', 'Explicação']),
  ],
  resumo: ['Formação: ~4,6 bilhões de anos, nebulosa (Kant, Laplace).', 'Rochosos internos, gigantes externos.', 'Plutão: planeta anão (UAI, 2006).', 'Voyager (1977).', 'Bendegó (1784), Museu Nacional.'],
  referencias: [
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
    { texto: 'União Astronômica Internacional, Resolução B5 (2006).' },
    { texto: 'Immanuel Kant, História geral da natureza e teoria do céu (1755).', livro: 'kant-historia-ceu' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o modelo em escala', 'Ler a resolução de 2006'],
  revisao: [['4,6 bilhões', 'Idade do sistema solar.'], ['Plutão', 'Planeta anão.'], ['Bendegó', 'Bahia, 1784.']],
  avancado: {
    texto: `<h3>Exoplanetas</h3>
<p>Desde 1995 foram descobertos milhares de exoplanetas, por métodos como velocidade radial e trânsito; a missão Kepler, da NASA, encontrou muitos pelo método de trânsito ${tag('fato')}. A variedade de sistemas descobertos mostrou que o sistema solar não é o único arranjo possível ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre exoplanetas.' }],
    exercicios: [
      mc('O método de trânsito detecta exoplanetas pela:', ['Mudança de cor do planeta', 'Pequena queda de brilho da estrela', 'Paralaxe', 'Fotografia direta'], 1, 'Planeta passa à frente.'),
      mc('A missão Kepler encontrou exoplanetas sobretudo por:', ['Trânsito', 'Rádio', 'Paralaxe', 'Ocultação lunar'], 0, 'NASA.'),
      mc('A diversidade de exoplanetas mostra que o sistema solar:', ['É o único possível', 'Não é o único arranjo', 'É falso', 'É jovem'], 1, 'Variedade.'),
      disc('Compare os métodos de velocidade radial e de trânsito: o que cada um mede e que viés de detecção tem.', ['Dois métodos', 'O que medem', 'Vieses', 'Conclusão'])],
  },
}),

aula({
  id: 'as4-3', titulo: 'Galáxias, expansão do universo, radiação de fundo, matéria e energia escuras', duracao: '150 min',
  aprendera: ['Explicar como se descobriu que há outras galáxias', 'Usar a lei de Hubble-Lemaître', 'Explicar a radiação cósmica de fundo', 'Distinguir o que se sabe e o que se ignora sobre matéria e energia escuras'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Até o início do século XX, não se sabia se a Via Láctea era todo o universo. Hoje medimos a expansão do cosmo e sabemos que a maior parte dele é invisível.</p>
<h3>Outras galáxias</h3>
<p>Em 1924, Edwin Hubble mediu a distância da "nebulosa" de Andrômeda usando estrelas variáveis cefeidas e mostrou que ela está muito além da Via Láctea: era outra galáxia ${tag('fato')}.</p>
<h3>Expansão</h3>
<p>As galáxias se afastam com velocidade proporcional à distância: v = H₀ × d ${tag('fato')}. Em 2018, a União Astronômica Internacional recomendou chamá-la lei de Hubble-Lemaître, reconhecendo o trabalho de Lemaître de 1927 ${tag('fato')}. O valor de H₀ é de cerca de 70 km/s por megaparsec; medidas por métodos diferentes discordam ligeiramente, o que é objeto de pesquisa ${tag('debate')}.</p>
<h3>Radiação de fundo</h3>
<p>A radiação cósmica de fundo, prevista nos modelos de Big Bang e detectada em 1965, é a luz emitida quando o universo ficou transparente, cerca de 380 mil anos após o início da expansão ${tag('fato')}. Os satélites COBE, WMAP e Planck mapearam suas pequenas variações ${tag('fato')}.</p>
<h3>O universo invisível</h3>
<p>Vera Rubin e colaboradores mostraram, nos anos 1970, que as estrelas nas bordas das galáxias giram rápido demais para a matéria visível, indicando "matéria escura" ${tag('fato')}. Em 1998, observações de supernovas mostraram que a expansão está acelerando (Nobel de 2011), atribuída à "energia escura" ${tag('fato')}. A natureza de ambas é desconhecida ${tag('fato')}.</p>`,
  vocabulario: [
    ['Galáxia', 'Sistema de bilhões de estrelas, gás e poeira ligados pela gravidade.'],
    ['Cefeida', 'Estrela variável cujo período indica sua luminosidade, usada para medir distâncias.'],
    ['Lei de Hubble-Lemaître', 'v = H₀ × d: velocidade de afastamento proporcional à distância.'],
    ['Matéria escura', 'Matéria que não emite luz, inferida por efeitos gravitacionais.'],
    ['Energia escura', 'Causa desconhecida da aceleração da expansão.'],
  ],
  exemplos: `<p><strong>Cálculo com a lei de Hubble-Lemaître:</strong> uma galáxia a 100 megaparsecs, com H₀ ≈ 70 km/s/Mpc, afasta-se a cerca de 70 × 100 = 7.000 km/s. O inverso de H₀ dá uma ordem de grandeza da idade do universo, cerca de 14 bilhões de anos — próxima da estimativa de 13,8 bilhões obtida com outros dados ${tag('fato')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> grandes levantamentos de galáxias mapeiam a estrutura do universo em grande escala. <strong>No Brasil:</strong> pesquisadores brasileiros participam de levantamentos como o Dark Energy Survey e o J-PAS ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que inferimos a matéria escura', tag: 'argumento',
    premissas: ['Pela gravitação, a velocidade das estrelas nas bordas de uma galáxia depende da massa interna.', 'As velocidades observadas são maiores do que a massa visível permitiria.', 'Lentes gravitacionais e a radiação de fundo indicam a mesma massa adicional.'],
    conclusao: 'Logo, há massa que não vemos — ou a teoria da gravitação precisa ser modificada nessas escalas.',
    nota: 'A conclusão é inferência; a natureza da matéria escura continua desconhecida, e teorias alternativas são estudadas.',
  },
  objecoes: [
    { objecao: 'Matéria e energia escuras são invenções para salvar a teoria.', tag: 'debate',
      resposta: 'São inferências a partir de várias observações independentes que concordam entre si. Ainda assim, enquanto sua natureza não for identificada, devem ser tratadas como nomes para fenômenos a explicar, e alternativas permanecem em discussão.' },
  ],
  aplicacao: `<p>Calcule a velocidade de afastamento de três galáxias a distâncias diferentes com a lei de Hubble-Lemaître e estime a idade do universo pelo inverso de H₀ (converta as unidades). Compare com 13,8 bilhões de anos.</p>`,
  fonte: {
    obra: 'Edwin Hubble, "A relation between distance and radial velocity among extra-galactic nebulae" (1929); Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre cosmologia', link: null,
    orientacao: `<p>No artigo de Hubble, veja o gráfico de distância e velocidade. No manual, as evidências da matéria e da energia escuras. Use-os nos cálculos e na discussão.</p>`,
  },
  perguntas: [
    { p: 'Como Hubble mostrou que Andrômeda é outra galáxia?', r: 'Medindo sua distância com estrelas cefeidas, em 1924.' },
    { p: 'Por que a lei passou a chamar-se Hubble-Lemaître?', r: 'Para reconhecer o trabalho de Lemaître de 1927 (recomendação da UAI em 2018).' },
    { p: 'O que indicaram as supernovas em 1998?', r: 'Que a expansão do universo está acelerando.' },
  ],
  exercicios: [
    mc('Hubble mostrou que Andrômeda é outra galáxia em:', ['1915', '1924', '1929', '1965'], 1, 'Cefeidas.'),
    mc('Galáxia a 200 Mpc, com H₀ = 70 km/s/Mpc, afasta-se a:', ['1.400 km/s', '14.000 km/s', '140 km/s', '70 km/s'], 1, '70 × 200.'),
    mc('A radiação de fundo foi emitida cerca de quanto tempo após o início da expansão?', ['3 minutos', '380 mil anos', '1 bilhão de anos', '13,8 bilhões de anos'], 1, 'Universo transparente.'),
    mc('A evidência de matéria escura pela rotação das galáxias está associada a:', ['Vera Rubin', 'Cecilia Payne', 'Hubble', 'Lemaître'], 0, 'Anos 1970.'),
    mc('A natureza da energia escura é:', ['Conhecida', 'Desconhecida', 'Química', 'Doutrina'], 1, 'Pesquisa aberta.'),
    disc('Entregue os cálculos com a lei de Hubble-Lemaître e a estimativa da idade do universo, e explique o que se sabe e o que se ignora sobre matéria e energia escuras.', ['Cálculos corretos', 'Conversão de unidades', 'Idade estimada', 'Distinção sabido x ignorado']),
  ],
  resumo: ['Hubble (1924): outras galáxias.', 'Lei de Hubble-Lemaître (UAI, 2018); H₀ ~70 km/s/Mpc.', 'Radiação de fundo: ~380 mil anos; COBE, WMAP, Planck.', 'Matéria escura (Rubin, anos 1970).', 'Expansão acelerada (1998); energia escura.'],
  referencias: [
    { texto: 'Edwin Hubble, artigo sobre distância e velocidade das galáxias (1929).' },
    { texto: 'Georges Lemaître, artigo sobre o universo em expansão (1927).' },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os cálculos', 'Ler os textos indicados'],
  revisao: [['1924', 'Andrômeda.'], ['Hubble-Lemaître', 'v = H₀d.'], ['1998', 'Aceleração.']],
  avancado: {
    texto: `<h3>A tensão de Hubble</h3>
<p>Medidas de H₀ baseadas no universo próximo (cefeidas e supernovas) dão valores em torno de 73 km/s/Mpc; as baseadas na radiação de fundo, cerca de 67 ${tag('fato')}. A diferença, chamada "tensão de Hubble", pode indicar erro sistemático ou nova física ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica, capítulo sobre cosmologia.' }],
    exercicios: [
      mc('A tensão de Hubble é uma diferença entre medidas de:', ['Massa do Sol', 'H₀', 'Idade da Terra', 'Paralaxe'], 1, 'Dois métodos.'),
      mc('Sua explicação é:', ['Conhecida', 'Em aberto', 'Doutrina', 'Erro de cálculo comprovado'], 1, 'Hipóteses.'),
      mc('Medidas pela radiação de fundo dão H₀ perto de:', ['50', '67', '73', '100'], 1, 'km/s/Mpc.'),
      disc('Exponha as duas explicações possíveis da tensão de Hubble e o que decidiria entre elas.', ['Duas explicações', 'Dados decisivos', 'Grau de confiança', 'Conclusão'])],
  },
}),

aula({
  id: 'as4-4', titulo: 'A astronomia no Brasil: do Observatório Nacional a Sobral e à pesquisa atual', duracao: '150 min',
  aprendera: ['Situar os marcos da astronomia no Brasil', 'Explicar a importância do eclipse de Sobral', 'Descrever as instituições e a participação internacional atuais', 'Reconhecer a etnoastronomia indígena'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que papel o Brasil teve e tem na astronomia? A história mostra mais do que se imagina.</p>
<h3>Observatório Nacional</h3>
<p>O Imperial Observatório do Rio de Janeiro foi criado em 1827, no reinado de D. Pedro I, com funções de ensino, navegação e determinação da hora ${tag('fato')}. Hoje é o Observatório Nacional, responsável também pela hora legal brasileira ${tag('fato')}. D. Pedro II interessou-se pessoalmente pela ciência e correspondeu-se com cientistas estrangeiros ${tag('fato')}.</p>
<h3>Sobral</h3>
<p>O eclipse de 29 de maio de 1919 (as3-2) foi observado em Sobral por equipes britânica e brasileira, esta liderada por Henrique Morize, diretor do Observatório Nacional ${tag('fato')}.</p>
<h3>Pesquisa atual</h3>
<p>O Laboratório Nacional de Astrofísica (LNA), criado em 1985, opera o Observatório do Pico dos Dias e coordena a participação brasileira nos telescópios Gemini e SOAR ${tag('fato')}. O INPE desenvolve pesquisa espacial e satélites ${tag('fato')}. O radiotelescópio BINGO, em construção na Paraíba, deverá estudar a energia escura ${tag('fato')}.</p>
<h3>Etnoastronomia e educação</h3>
<p>Povos indígenas brasileiros têm constelações e calendários próprios, como os guarani, que relacionam o céu ao plantio e às festas; o tema é estudado pela etnoastronomia ${tag('interpretacao')}. A Olimpíada Brasileira de Astronomia e Astronáutica, criada em 1998, mobiliza estudantes em todo o país ${tag('fato')}.</p>`,
  vocabulario: [
    ['Observatório Nacional', 'Instituição criada em 1827 como Imperial Observatório.'],
    ['Hora legal', 'Hora oficial do país, mantida pelo Observatório Nacional.'],
    ['LNA', 'Laboratório Nacional de Astrofísica (1985).'],
    ['Etnoastronomia', 'Estudo dos conhecimentos astronômicos de diferentes povos.'],
    ['OBA', 'Olimpíada Brasileira de Astronomia e Astronáutica (1998).'],
  ],
  exemplos: `<p><strong>A hora legal:</strong> quando o celular mostra a hora "certa", ela vem, em última análise, de padrões de tempo mantidos por instituições como o Observatório Nacional, ligadas a relógios atômicos internacionais. A astronomia, que por séculos definiu a hora pelo céu, continua no centro da medida do tempo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a astronomia moderna é feita em grandes colaborações internacionais. <strong>No Brasil:</strong> a participação em telescópios como Gemini e SOAR e em levantamentos internacionais insere a astronomia brasileira nessas redes ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que Sobral foi escolhida em 1919', tag: 'argumento',
    premissas: ['Para medir o desvio da luz, era preciso um eclipse total com estrelas brilhantes perto do Sol.', 'O eclipse de 29 de maio de 1919 ocorria com o Sol diante do aglomerado das Híades, rico em estrelas brilhantes.', 'Sobral estava na faixa de totalidade e tinha boas chances de céu limpo.'],
    conclusao: 'Logo, Sobral reunia as condições geográficas e astronômicas para o teste da relatividade.',
    nota: 'O mesmo eclipse foi observado na ilha do Príncipe, onde houve nuvens.',
  },
  objecoes: [
    { objecao: 'O Brasil não tem tradição em ciência.', tag: 'debate',
      resposta: 'O Observatório Nacional tem quase dois séculos, Sobral é marco da física mundial e o país participa de grandes telescópios. Há desafios de financiamento e continuidade, mas a afirmação de que não há tradição não corresponde aos fatos.' },
  ],
  aplicacao: `<p>Pesquise uma instituição astronômica brasileira (Observatório Nacional, LNA, INPE, um planetário ou observatório universitário): história, função atual e uma pesquisa recente. Registre as fontes.</p>`,
  fonte: {
    obra: 'Observatório Nacional, histórico institucional; Laboratório Nacional de Astrofísica, apresentação do Observatório do Pico dos Dias', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' },
    orientacao: `<p>No site do Observatório Nacional, localize a história da instituição e o serviço da hora legal. No site do LNA, os telescópios em que o Brasil participa. Use na pesquisa.</p>`,
  },
  perguntas: [
    { p: 'Quando foi criado o Imperial Observatório do Rio de Janeiro?', r: 'Em 1827.' },
    { p: 'Quem liderou a equipe brasileira em Sobral em 1919?', r: 'Henrique Morize, diretor do Observatório Nacional.' },
    { p: 'Quando foi criado o LNA?', r: 'Em 1985.' },
  ],
  exercicios: [
    mc('O Observatório Nacional mantém a:', ['Lei de trânsito', 'Hora legal brasileira', 'Moeda', 'Previsão do tempo'], 1, 'Medida do tempo.'),
    mc('O LNA foi criado em:', ['1827', '1919', '1985', '1998'], 2, 'Pico dos Dias.'),
    mc('A OBA foi criada em:', ['1985', '1998', '2006', '2015'], 1, 'Olimpíada.'),
    mc('O radiotelescópio BINGO está sendo construído na:', ['Bahia', 'Paraíba', 'Minas Gerais', 'Amazônia'], 1, 'Energia escura.'),
    mc('Em 1919, o Sol estava diante do aglomerado das:', ['Plêiades', 'Híades', 'Nuvens de Magalhães', 'Três Marias'], 1, 'Estrelas brilhantes.'),
    disc('Apresente uma instituição astronômica brasileira: história, função atual e uma pesquisa recente, com fontes.', ['Instituição', 'História', 'Função atual', 'Pesquisa e fontes']),
  ],
  resumo: ['Imperial Observatório (1827), hoje Observatório Nacional.', 'Sobral (1919): Morize e os britânicos.', 'LNA (1985): Pico dos Dias, Gemini, SOAR.', 'INPE, BINGO.', 'Etnoastronomia; OBA (1998).'],
  referencias: [
    { texto: 'Observatório Nacional, histórico institucional.', link: { url: 'https://www.gov.br/observatorio', rotulo: 'Observatório Nacional' } },
    { texto: 'Laboratório Nacional de Astrofísica.', link: { url: 'https://www.gov.br/lna', rotulo: 'LNA' } },
    { texto: 'Kepler de Souza Oliveira Filho e Maria de Fátima Saraiva, Astronomia e astrofísica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a pesquisa sobre a instituição', 'Consultar os sites indicados'],
  revisao: [['1827', 'Imperial Observatório.'], ['Sobral', 'Morize, 1919.'], ['LNA', '1985.']],
  avancado: {
    texto: `<h3>Einstein no Brasil</h3>
<p>Einstein visitou o Rio de Janeiro em 1925 e, segundo relatos da época, comentou que a questão concebida por sua mente foi respondida pelo luminoso céu do Brasil, em referência a Sobral ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ildeu de Castro Moreira e Antonio Augusto Passos Videira (orgs.), Einstein e o Brasil (1995).' }],
    exercicios: [
      mc('Einstein visitou o Rio de Janeiro em:', ['1915', '1919', '1925', '1955'], 2, 'Visita.'),
      mc('A frase atribuída a Einstein sobre o céu do Brasil refere-se a:', ['Sobral', 'Brasília', 'Bendegó', 'Pico dos Dias'], 0, 'Eclipse de 1919.'),
      mc('Einstein e o Brasil (1995) é obra organizada por:', ['Morize', 'Moreira e Videira', 'Oliveira e Saraiva', 'Rondon'], 1, 'História da ciência.'),
      disc('Pesquise a recepção da relatividade no Brasil nos anos 1920 e o papel de Sobral, com fontes.', ['Recepção', 'Sobral', 'Fontes', 'Conclusão'])],
  },
}),

avaliacao('as4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre estrelas, sistema solar, galáxias, cosmologia e astronomia no Brasil, com cálculos, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o diagrama HR e o modelo em escala.</li><li>Refaça os cálculos com a lei de Hubble-Lemaître.</li></ul>`,
[
  disc('Conte a "biografia" de um átomo de carbono do seu corpo, do Big Bang à Terra, usando o que se sabe sobre fusão, supernovas e formação do sistema solar, e distinga ciência e fé no fim.', ['Etapas físicas corretas', 'Fusão e supernovas', 'Formação do sistema solar', 'Distinção ciência e fé']),
  disc('Explique o que se sabe e o que se ignora sobre matéria e energia escuras, com as evidências e a atitude científica adequada diante do desconhecido.', ['Evidências', 'O que se ignora', 'Atitude científica', 'Clareza']),
]),
];
