// Ciências Ambientais II — formação e autores (etapas 4 e 5 do percurso de Ciências Ambientais).
// Aristóteles, Humboldt e Marsh; a fundação da ecologia e os primeiros cuidados com a natureza no Brasil;
// Rachel Carson, Estocolmo e Os limites do crescimento; Hardin, Ostrom, Brundtland e a Rio 92.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ca2-1', titulo: 'Aristóteles, Humboldt e Marsh: da meteorologia antiga à ação humana como força da natureza', duracao: '150 min',
  aprendera: ['Explicar o ciclo da água nos Meteorológicos de Aristóteles', 'Explicar a visão de Humboldt da natureza como conjunto', 'Expor a tese de Marsh sobre a ação humana', 'Situar o Brasil na viagem de Humboldt'],
  prereq: ['Ciências Ambientais I (módulo CA1)'],
  explicacao: `
<h3>O problema</h3>
<p>Quando se começou a pensar a natureza como um conjunto de partes ligadas, e a ação humana como capaz de alterá-lo?</p>
<h3>Aristóteles</h3>
<p>Nos <em>Meteorológicos</em>, Aristóteles explica que o Sol evapora a água, que se condensa no alto e volta como chuva, num ciclo contínuo (I, 9) ${tag('fato')}. Observa também que mar e terra trocam de lugar ao longo de tempos muito longos (I, 14) ${tag('fato')}. É uma explicação natural de fenômenos antes atribuídos só a forças míticas ${tag('interpretacao')}.</p>
<h3>Humboldt</h3>
<p>Alexander von Humboldt viajou pelas Américas entre 1799 e 1804, com Aimé Bonpland ${tag('fato')}. No <em>Ensaio sobre a geografia das plantas</em> (1807), relacionou altitude, clima e vegetação num perfil do Chimborazo ${tag('fato')}. No lago de Valência, na Venezuela, associou a queda do nível das águas ao desmatamento das margens ${tag('fato')}. Em <em>Cosmos</em> (1845–1862), apresentou a natureza como um todo interligado ${tag('fato')}. As autoridades portuguesas não o deixaram entrar no Brasil ${tag('fato')}.</p>
<h3>Marsh</h3>
<p>George Perkins Marsh, em <em>Man and Nature</em> (1864), mostrou com exemplos do Mediterrâneo e dos Estados Unidos que desmatamento, erosão e drenagem transformam regiões inteiras, e que o homem é força de mudança da natureza ${tag('fato')}. É considerado um dos fundadores da preocupação ambiental moderna ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Meteorologia (antiga)', 'Estudo dos fenômenos "do alto": chuva, ventos, cometas, terremotos.'],
    ['Geografia das plantas', 'Estudo da distribuição da vegetação segundo clima e relevo.'],
    ['Zonação altitudinal', 'Sucessão de faixas de vegetação conforme a altitude.'],
    ['Erosão', 'Remoção do solo pela água ou pelo vento.'],
    ['Ação antrópica', 'Ação humana sobre o ambiente.'],
  ],
  exemplos: `<p><strong>O raciocínio de Humboldt no lago de Valência:</strong> o lago não tinha saída para o mar e baixava havia anos; os moradores tinham derrubado a floresta e irrigado lavouras nas margens; sem floresta, a água evaporava mais e as nascentes secavam. Humboldt ligou fenômenos que pareciam separados: vegetação, solo, água e uso humano.</p>`,
  contexto: `<p><strong>No mundo:</strong> Humboldt influenciou Darwin, que levou seus livros na viagem do Beagle ${tag('fato')}. <strong>No Brasil:</strong> a proibição portuguesa impediu Humboldt de estudar a Amazônia brasileira; naturalistas como Spix e Martius (1817–1820) percorreram depois o interior do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Marsh viu o homem como força geológica', tag: 'argumento',
    premissas: ['Florestas protegem o solo e regulam o escoamento da água.', 'O desmatamento extenso expõe o solo à erosão e altera rios e nascentes.', 'Regiões inteiras do Mediterrâneo mostravam solos perdidos após séculos de desmatamento e pastoreio.'],
    conclusao: 'Logo, a ação humana acumulada pode transformar paisagens tanto quanto forças naturais.',
    nota: 'A ideia antecipa o debate atual sobre o "Antropoceno".',
  },
  objecoes: [
    { objecao: 'Os antigos não sabiam nada de ciência; Aristóteles não tem lugar neste curso.', tag: 'debate',
      resposta: 'Muitas explicações de Aristóteles foram superadas, mas sua proposta de explicar a chuva e os ventos por causas naturais, observáveis e encadeadas é um passo do método. Estudá-lo mostra como as perguntas foram formuladas e corrigidas, sem anacronismo.' },
  ],
  aplicacao: `<p>Leia o trecho dos Meteorológicos sobre o ciclo da água e compare-o, ponto por ponto, com a descrição atual do ciclo hidrológico: o que acerta, o que falta e o que está errado.</p>`,
  fonte: {
    obra: 'Aristóteles, Meteorológicos, I, 9 e 14; Alexander von Humboldt, Ensaio sobre a geografia das plantas (1807)', link: null,
    orientacao: `<p>Em Aristóteles, siga a explicação da evaporação e da chuva. Em Humboldt, observe como o perfil do Chimborazo reúne dados de altitude, temperatura e vegetação.</p>`,
  },
  perguntas: [
    { p: 'Como Aristóteles explica a chuva?', r: 'O Sol evapora a água, que se condensa no alto e volta como chuva.' },
    { p: 'O que Humboldt observou no lago de Valência?', r: 'A queda do nível das águas associada ao desmatamento das margens.' },
    { p: 'Qual a tese de Man and Nature?', r: 'Que o homem é força de mudança da natureza, por desmatamento, erosão e drenagem.' },
  ],
  exercicios: [
    mc('O ciclo da água aparece nos Meteorológicos de:', ['Platão', 'Aristóteles', 'Tomás', 'Plínio'], 1, 'I, 9.'),
    mc('Humboldt viajou pelas Américas entre:', ['1699–1704', '1799–1804', '1899–1904', '1830–1836'], 1, 'Com Bonpland.'),
    mc('Man and Nature (1864) é de:', ['Marsh', 'Humboldt', 'Carson', 'Haeckel'], 0, 'Ação humana.'),
    mc('O perfil do Chimborazo mostra:', ['Rotas comerciais', 'Vegetação por altitude', 'Cidades', 'Rios'], 1, 'Geografia das plantas.'),
    mc('Humboldt não estudou a Amazônia brasileira porque:', ['Morreu antes', 'As autoridades portuguesas não permitiram', 'Não quis', 'Não havia floresta'], 1, 'Proibição.'),
    disc('Compare o ciclo da água em Aristóteles com o ciclo hidrológico atual: acertos, lacunas e erros.', ['Acertos', 'Lacunas', 'Erros', 'Sem anacronismo']),
  ],
  resumo: ['Aristóteles: ciclo da água.', 'Humboldt: natureza como conjunto; lago de Valência.', 'Geografia das plantas (1807).', 'Marsh (1864): o homem como força.', 'Spix e Martius no Brasil.'],
  referencias: [
    { texto: 'Aristóteles, Meteorológicos.', livro: 'aristoteles-meteorologicos' },
    { texto: 'Alexander von Humboldt, Cosmos (1845–1862).' },
    { texto: 'George Perkins Marsh, Man and Nature (1864).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação do ciclo da água', 'Ler os textos indicados'],
  revisao: [['Meteorológicos', 'Ciclo da água.'], ['Humboldt', 'Conjunto da natureza.'], ['Marsh', '1864.']],
  avancado: {
    texto: `<h3>O Antropoceno</h3>
<p>Paul Crutzen propôs em 2000 o nome "Antropoceno" para uma época geológica marcada pela ação humana ${tag('fato')}. Em 2024, a União Internacional de Ciências Geológicas rejeitou a proposta de formalizar o Antropoceno como época da escala de tempo geológico, embora o termo continue amplamente usado ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Crutzen, "Geology of Mankind" (2002).' }],
    exercicios: [
      mc('O nome Antropoceno foi proposto por:', ['Crutzen', 'Marsh', 'Lyell', 'Darwin'], 0, '2000.'),
      mc('Em 2024, a formalização do Antropoceno como época foi:', ['Aprovada', 'Rejeitada', 'Adiada para 2100', 'Ignorada'], 1, 'União Internacional de Ciências Geológicas.'),
      mc('O termo Antropoceno refere-se à marca da ação:', ['Vulcânica', 'Humana', 'Solar', 'Glacial'], 1, 'Definição.'),
      disc('Explique por que a ideia de Marsh antecipa o debate sobre o Antropoceno e por que a formalização foi controversa.', ['Marsh', 'Antropoceno', 'Controvérsia', 'Fontes'])],
  },
}),

aula({
  id: 'ca2-2', titulo: 'A fundação da ecologia e os primeiros cuidados com a natureza no Brasil', duracao: '150 min',
  aprendera: ['Explicar a origem do termo ecologia em Haeckel', 'Explicar o conceito de ecossistema de Tansley', 'Calcular a transferência de energia entre níveis tróficos', 'Conhecer José Bonifácio e o reflorestamento da Tijuca'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como o estudo das relações entre seres vivos e ambiente se tornou uma ciência com nome, conceitos e medidas?</p>
<h3>Haeckel</h3>
<p>Ernst Haeckel cunhou o termo "ecologia" em 1866, como ciência das relações do organismo com o mundo exterior ${tag('fato')}.</p>
<h3>Tansley e o ecossistema</h3>
<p>Arthur Tansley propôs o termo "ecossistema" em 1935, para designar o conjunto dos organismos e dos fatores físicos de um lugar, como unidade de estudo ${tag('fato')}. Criticou concepções que tratavam as comunidades vegetais como superorganismos ${tag('fato')}.</p>
<h3>Lindeman e a energia</h3>
<p>Raymond Lindeman (1942) estudou um lago e descreveu o ecossistema pelos fluxos de energia entre níveis tróficos, com eficiências de transferência baixas, da ordem de 10% ${tag('fato')}. Por isso as cadeias alimentares têm poucos níveis ${tag('interpretacao')}.</p>
<h3>No Brasil</h3>
<p>José Bonifácio de Andrada e Silva publicou em 1815 uma memória sobre a necessidade de plantar novos bosques em Portugal e, depois, criticou a destruição das matas brasileiras ${tag('fato')}. Em 1861, por ordem de D. Pedro II, começou o reflorestamento da Floresta da Tijuca, no Rio de Janeiro, conduzido pelo major Manuel Gomes Archer, para proteger os mananciais da cidade ${tag('fato')}.</p>`,
  vocabulario: [
    ['Ecologia', 'Ciência das relações dos organismos entre si e com o ambiente.'],
    ['Ecossistema (Tansley)', 'Organismos e fatores físicos de um lugar como unidade.'],
    ['Nível trófico', 'Posição na cadeia alimentar (produtor, consumidor primário etc.).'],
    ['Eficiência de transferência', 'Fração da energia de um nível que passa ao seguinte.'],
    ['Manancial', 'Fonte de água usada para abastecimento.'],
  ],
  exemplos: `<p><strong>Calculando com 10%:</strong> se as plantas de um campo fixam 100.000 kcal, os herbívoros obtêm cerca de 10.000 kcal, os carnívoros que comem herbívoros cerca de 1.000 kcal, e um predador de topo cerca de 100 kcal. Cada nível dispõe de muito menos energia, o que limita o número de predadores.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ecologia se consolidou como disciplina universitária na primeira metade do século XX ${tag('fato')}. <strong>No Brasil:</strong> o Código Florestal de 1934 foi a primeira lei florestal nacional ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o reflorestamento da Tijuca foi decisão de política pública', tag: 'argumento',
    premissas: ['As encostas da Tijuca tinham sido desmatadas para cafezais e carvão.', 'O desmatamento reduziu a água dos mananciais que abasteciam o Rio de Janeiro.', 'Recompor a floresta era meio de recuperar o abastecimento.'],
    conclusao: 'Logo, o reflorestamento da Tijuca respondeu a um problema de serviço ecossistêmico, a regulação da água, antes que o conceito existisse.',
    nota: 'O caso mostra que a relação entre floresta e água já era percebida no século XIX.',
  },
  objecoes: [
    { objecao: 'A Floresta da Tijuca replantada não é floresta "natural"; não tem valor ecológico.', tag: 'debate',
      resposta: 'A floresta replantada não é idêntica à original, mas regenerou-se ao longo de mais de um século, abriga muitas espécies e cumpre funções de proteção do solo e da água. Avaliar seu valor exige medidas de biodiversidade e de serviços, não apenas a origem.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte uma linha do tempo do pensamento ambiental com uma obra por marco (de Aristóteles a Lindeman), incluindo pelo menos um marco brasileiro.</p>`,
  fonte: {
    obra: 'Arthur Tansley, "The Use and Abuse of Vegetational Concepts and Terms" (1935); Raymond Lindeman, "The Trophic-Dynamic Aspect of Ecology" (1942)', link: null,
    orientacao: `<p>Em Tansley, localize a definição de ecossistema. Em Lindeman, os níveis tróficos e as eficiências medidas. Compare com a definição de ecossistema da aula ca1-2.</p>`,
  },
  perguntas: [
    { p: 'Quem cunhou o termo ecologia?', r: 'Ernst Haeckel, em 1866.' },
    { p: 'Quem propôs o termo ecossistema?', r: 'Arthur Tansley, em 1935.' },
    { p: 'Quando começou o reflorestamento da Tijuca?', r: 'Em 1861.' },
  ],
  exercicios: [
    mc('O termo "ecologia" é de:', ['Haeckel', 'Darwin', 'Tansley', 'Humboldt'], 0, '1866.'),
    mc('Com 10% de eficiência, 50.000 kcal de plantas dão aos herbívoros:', ['500 kcal', '5.000 kcal', '50.000 kcal', '45.000 kcal'], 1, '10%.'),
    mc('O conceito de ecossistema é de:', ['Lindeman', 'Tansley', 'Haeckel', 'Marsh'], 1, '1935.'),
    mc('O reflorestamento da Tijuca protegia:', ['Cafezais', 'Mananciais', 'Minas', 'Portos'], 1, 'Água do Rio de Janeiro.'),
    mc('O primeiro Código Florestal brasileiro é de:', ['1861', '1934', '1965', '2012'], 1, 'Lei florestal nacional.'),
    disc('Apresente a linha do tempo do pensamento ambiental, com uma obra por marco e um marco brasileiro.', ['Marcos em ordem', 'Obras corretas', 'Marco brasileiro', 'Ideia central de cada um']),
  ],
  resumo: ['Haeckel (1866): ecologia.', 'Tansley (1935): ecossistema.', 'Lindeman (1942): níveis tróficos, ~10%.', 'José Bonifácio (1815).', 'Tijuca (1861); Código Florestal de 1934.'],
  referencias: [
    { texto: 'Arthur Tansley, "The Use and Abuse of Vegetational Concepts and Terms" (1935).' },
    { texto: 'Raymond Lindeman, "The Trophic-Dynamic Aspect of Ecology" (1942).' },
    { texto: 'José Bonifácio de Andrada e Silva, Memória sobre a necessidade e utilidade do plantio de novos bosques em Portugal (1815).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a linha do tempo', 'Ler os textos indicados'],
  revisao: [['Haeckel', 'Ecologia.'], ['Tansley', 'Ecossistema.'], ['Tijuca', '1861.']],
  avancado: {
    texto: `<h3>Sucessão ecológica</h3>
<p>Frederic Clements (1916) descreveu a sucessão como avanço previsível para uma comunidade clímax; Henry Gleason (1926) sustentou que as comunidades resultam de respostas individuais das espécies, sem destino fixo ${tag('fato')}. A ecologia atual vê a sucessão como processo com tendências, mas sujeito a perturbações e acaso ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Literatura introdutória sobre sucessão ecológica.' }],
    exercicios: [
      mc('A comunidade clímax é ideia de:', ['Clements', 'Gleason', 'Tansley', 'Haeckel'], 0, '1916.'),
      mc('Gleason enfatizou:', ['Destino fixo', 'Respostas individuais das espécies', 'Superorganismo', 'Criação'], 1, '1926.'),
      mc('A visão atual da sucessão inclui:', ['Só previsibilidade', 'Tendências com perturbações e acaso', 'Nenhuma mudança', 'Só acaso'], 1, 'Síntese.'),
      disc('Descreva a sucessão numa área abandonada de pasto na Mata Atlântica e discuta se ela tende a uma comunidade clímax.', ['Etapas', 'Fatores', 'Clements e Gleason', 'Conclusão'])],
  },
}),

aula({
  id: 'ca2-3', titulo: 'Rachel Carson, Estocolmo e Os limites do crescimento: o nascimento do ambientalismo moderno', duracao: '150 min',
  aprendera: ['Expor o argumento de Primavera silenciosa', 'Explicar a bioacumulação e a biomagnificação', 'Conhecer a Conferência de Estocolmo de 1972', 'Avaliar Os limites do crescimento e suas críticas'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como a preocupação ambiental passou de poucos naturalistas a tema de governos e organismos internacionais?</p>
<h3>Rachel Carson</h3>
<p>Em <em>Primavera silenciosa</em> (1962), a bióloga Rachel Carson documentou os efeitos do uso amplo de pesticidas como o DDT sobre aves, peixes e outros organismos ${tag('fato')}. Mostrou que substâncias persistentes se acumulam nos tecidos (bioacumulação) e se concentram ao longo da cadeia alimentar (biomagnificação) ${tag('fato')}. Nos Estados Unidos, o uso agrícola do DDT foi proibido em 1972 ${tag('fato')}; no Brasil, a Lei nº 11.936/2009 proibiu fabricação, importação, comercialização e uso do DDT ${tag('fato')}.</p>
<h3>Estocolmo, 1972</h3>
<p>A Conferência das Nações Unidas sobre o Ambiente Humano, em Estocolmo, foi a primeira grande conferência mundial sobre o tema e levou à criação do Programa das Nações Unidas para o Meio Ambiente (PNUMA) ${tag('fato')}. Países em desenvolvimento, inclusive o Brasil, insistiram em que a proteção ambiental não poderia impedir o desenvolvimento ${tag('interpretacao')}.</p>
<h3>Os limites do crescimento</h3>
<p>No mesmo ano, um relatório encomendado pelo Clube de Roma a pesquisadores do MIT usou o modelo World3 para simular cenários de população, produção, alimentos, recursos e poluição, e concluiu que o crescimento exponencial contínuo levaria ao colapso em algum momento do século XXI se as tendências não mudassem ${tag('fato')}. Críticos apontaram que o modelo subestimava a inovação e a substituição de recursos; defensores lembram que eram cenários, não previsões ${tag('debate')}.</p>`,
  vocabulario: [
    ['Pesticida', 'Substância usada para controlar pragas.'],
    ['Bioacumulação', 'Acúmulo de uma substância no organismo ao longo do tempo.'],
    ['Biomagnificação', 'Aumento da concentração ao longo da cadeia alimentar.'],
    ['PNUMA', 'Programa das Nações Unidas para o Meio Ambiente.'],
    ['Crescimento exponencial', 'Crescimento a uma taxa constante, que dobra em intervalos regulares.'],
  ],
  exemplos: `<p><strong>Biomagnificação:</strong> a água de um lago tem 0,00005 ppm de um pesticida; o plâncton concentra-o em 0,04 ppm; peixes pequenos, 0,5 ppm; peixes grandes, 2 ppm; aves que comem esses peixes, 25 ppm. Cada nível acumula o que comeu do nível anterior. Os números são ilustrativos da ordem de grandeza descrita na literatura.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção de Estocolmo sobre Poluentes Orgânicos Persistentes (2001) restringiu internacionalmente o DDT e outras substâncias ${tag('fato')}. <strong>No Brasil:</strong> a Secretaria Especial do Meio Ambiente foi criada em 1973, logo após Estocolmo, com Paulo Nogueira-Neto à frente ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que substâncias persistentes se concentram nos predadores', tag: 'argumento',
    premissas: ['Substâncias persistentes e solúveis em gordura não são eliminadas facilmente pelo organismo.', 'Cada predador come muitas presas ao longo da vida.', 'Assim, acumula a soma do que estava nas presas.'],
    conclusao: 'Logo, a concentração dessas substâncias aumenta ao subir na cadeia alimentar.',
    nota: 'É o mecanismo que explicou o afinamento das cascas dos ovos de aves de rapina.',
  },
  objecoes: [
    { objecao: 'Carson fez campanha contra todo uso de pesticidas.', tag: 'debate',
      resposta: 'Carson criticou o uso indiscriminado e defendeu controle e alternativas, como o controle biológico; não pediu a proibição de todo pesticida. O debate sobre o DDT no combate à malária continua, e a Convenção de Estocolmo admite seu uso restrito para controle de vetores.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de um capítulo de Primavera silenciosa (tese, evidências, conceitos, objeções e aplicação ao Brasil), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Rachel Carson, Primavera silenciosa (1962), caps. 1 e 8; Donella Meadows e outros, Os limites do crescimento (1972), cap. 1', link: null,
    orientacao: `<p>Em Carson, o capítulo 1 ("Uma fábula para amanhã") e o capítulo sobre as aves. Em Os limites do crescimento, a explicação do crescimento exponencial. Observe a diferença entre narrativa, dados e cenários.</p>`,
  },
  perguntas: [
    { p: 'O que é biomagnificação?', r: 'O aumento da concentração de uma substância ao longo da cadeia alimentar.' },
    { p: 'O que criou a Conferência de Estocolmo?', r: 'O Programa das Nações Unidas para o Meio Ambiente (PNUMA).' },
    { p: 'Que lei proibiu o DDT no Brasil?', r: 'A Lei nº 11.936/2009.' },
  ],
  exercicios: [
    mc('Primavera silenciosa é de:', ['1948', '1962', '1972', '1987'], 1, 'Rachel Carson.'),
    mc('Aumento da concentração na cadeia alimentar é:', ['Bioacumulação', 'Biomagnificação', 'Decomposição', 'Fotossíntese'], 1, 'Entre níveis.'),
    mc('A Conferência de Estocolmo foi em:', ['1962', '1972', '1992', '2002'], 1, 'Ambiente Humano.'),
    mc('Os limites do crescimento foi encomendado pelo:', ['Clube de Roma', 'Banco Mundial', 'Vaticano', 'IPCC'], 0, 'MIT, World3.'),
    mc('Uma população que cresce 7% ao ano dobra em cerca de:', ['2 anos', '10 anos', '50 anos', '70 anos'], 1, 'Regra de 70: 70 ÷ 7.'),
    disc('Entregue a ficha de leitura de um capítulo de Primavera silenciosa.', ['Tese', 'Evidências', 'Conceitos', 'Objeções e aplicação ao Brasil']),
  ],
  resumo: ['Carson (1962): pesticidas e aves.', 'Bioacumulação e biomagnificação.', 'DDT: EUA 1972; Brasil Lei 11.936/2009.', 'Estocolmo 1972: PNUMA.', 'Limites do crescimento: cenários e críticas.'],
  referencias: [
    { texto: 'Rachel Carson, Primavera silenciosa (1962).' },
    { texto: 'Donella Meadows e outros, Os limites do crescimento (1972).' },
    { texto: 'Lei nº 11.936, de 2009.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler os textos indicados'],
  revisao: [['Carson', 'DDT.'], ['Estocolmo', 'PNUMA.'], ['Regra de 70', 'Tempo de duplicação.']],
  avancado: {
    texto: `<h3>A camada de ozônio</h3>
<p>Mario Molina e Sherwood Rowland mostraram em 1974 que os clorofluorcarbonos (CFCs) podiam destruir o ozônio estratosférico; o buraco na camada sobre a Antártida foi relatado em 1985 ${tag('fato')}. O Protocolo de Montreal (1987) eliminou progressivamente os CFCs, e a camada mostra sinais de recuperação ${tag('fato')}. É frequentemente citado como exemplo de acordo ambiental bem-sucedido ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Protocolo de Montreal sobre Substâncias que Destroem a Camada de Ozônio (1987).' }],
    exercicios: [
      mc('Os CFCs destroem:', ['O ozônio estratosférico', 'O CO2', 'O nitrogênio', 'O vapor'], 0, 'Molina e Rowland.'),
      mc('O Protocolo de Montreal é de:', ['1974', '1985', '1987', '1997'], 2, 'Eliminação dos CFCs.'),
      mc('O buraco de ozônio foi relatado sobre a:', ['Amazônia', 'Antártida', 'Europa', 'África'], 1, '1985.'),
      disc('Explique por que o Protocolo de Montreal teve sucesso e se esse modelo serve para o clima.', ['Fatores de sucesso', 'Diferenças com o clima', 'Avaliação', 'Fontes'])],
  },
}),

aula({
  id: 'ca2-4', titulo: 'Bens comuns e desenvolvimento sustentável: Hardin, Ostrom, Brundtland e a Rio 92', duracao: '150 min',
  aprendera: ['Expor o argumento da tragédia dos comuns', 'Explicar os princípios de Ostrom para a gestão dos comuns', 'Explicar o conceito de desenvolvimento sustentável', 'Conhecer os resultados da Rio 92'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que recursos de uso comum — pastos, pesqueiros, a atmosfera — tendem a ser superexplorados? E existe saída além do Estado e do mercado?</p>
<h3>Hardin</h3>
<p>Garrett Hardin ("A tragédia dos comuns", 1968) imaginou um pasto aberto a todos: cada pastor ganha ao acrescentar um animal e divide com todos o custo do sobrepastoreio; a soma das decisões individuais destrói o pasto ${tag('fato')}. Hardin via como saídas a propriedade privada ou a regulação pública ${tag('fato')}.</p>
<h3>Ostrom</h3>
<p>Elinor Ostrom (<em>Governando os comuns</em>, 1990) estudou comunidades que gerem recursos comuns por séculos sem destruí-los e identificou princípios de desenho: limites claros, regras adaptadas ao local, participação dos usuários na elaboração das regras, monitoramento, sanções graduais, mecanismos de resolução de conflitos, reconhecimento do direito de se organizar e níveis de governo aninhados ${tag('fato')}. Recebeu o Prêmio Nobel de Economia em 2009 ${tag('fato')}.</p>
<h3>Brundtland e a Rio 92</h3>
<p>O Relatório Brundtland (1987) propôs o desenvolvimento sustentável como conciliação entre necessidades presentes e futuras ${tag('fato')}. A Conferência do Rio de Janeiro (1992) aprovou a Declaração do Rio, a Agenda 21 e abriu para assinatura a Convenção-Quadro das Nações Unidas sobre Mudança do Clima e a Convenção sobre Diversidade Biológica ${tag('fato')}.</p>`,
  vocabulario: [
    ['Recurso de uso comum', 'Recurso do qual é difícil excluir usuários e cujo uso por um reduz o disponível para outros.'],
    ['Tragédia dos comuns', 'Superexploração resultante de decisões individuais racionais.'],
    ['Princípios de desenho', 'Condições identificadas por Ostrom para a gestão duradoura dos comuns.'],
    ['Agenda 21', 'Programa de ação aprovado na Rio 92.'],
    ['Convenção-Quadro', 'Tratado de princípios gerais, detalhado depois por protocolos e acordos.'],
  ],
  exemplos: `<p><strong>A conta do pastor:</strong> num pasto de 10 pastores, acrescentar um animal dá ao pastor o lucro inteiro desse animal; o desgaste do pasto é dividido por 10. Cada um tem incentivo para acrescentar, e todos perdem. Se os pastores combinam um limite por família, fiscalizam juntos e punem com multas crescentes, o pasto pode durar — é o tipo de arranjo que Ostrom documentou.</p>`,
  contexto: `<p><strong>No mundo:</strong> Ostrom estudou casos como pastos comunais na Suíça, irrigação na Espanha e nas Filipinas e pesca em vários países ${tag('fato')}. <strong>No Brasil:</strong> na Reserva de Desenvolvimento Sustentável Mamirauá, no Amazonas, o manejo comunitário do pirarucu, com contagem dos peixes e cotas, permitiu a recuperação dos estoques ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comunidades podem evitar a tragédia dos comuns', tag: 'argumento',
    premissas: ['A tragédia ocorre quando cada usuário decide isoladamente, sem regras nem fiscalização.', 'Usuários que se comunicam podem estabelecer regras de uso e fiscalizar uns aos outros.', 'Regras feitas pelos próprios usuários tendem a ser mais adaptadas e respeitadas.'],
    conclusao: 'Logo, comunidades organizadas podem gerir recursos comuns sem privatização nem controle estatal exclusivo.',
    nota: 'Ostrom mostrou que isso funciona sob certas condições; não é garantia universal.',
  },
  objecoes: [
    { objecao: 'A atmosfera é um comum global; Ostrom só vale para aldeias.', tag: 'debate',
      resposta: 'Ostrom reconheceu que comuns globais são mais difíceis, com muitos usuários e pouca comunicação direta. Mas defendeu a governança em vários níveis (policêntrica), combinando acordos internacionais com ações locais e nacionais. A aplicabilidade a escala global é debate aberto.' },
  ],
  aplicacao: `<p>Escolha um recurso comum brasileiro (um rio, um pesqueiro, um aquífero, um pasto comunal) e avalie sua gestão com os oito princípios de Ostrom.</p>`,
  fonte: {
    obra: 'Garrett Hardin, "The Tragedy of the Commons" (1968); Elinor Ostrom, Governando os comuns (1990), cap. 3; Declaração do Rio (1992)', link: null,
    orientacao: `<p>Em Hardin, siga o raciocínio do pastor. Em Ostrom, a lista dos princípios de desenho. Na Declaração do Rio, os princípios 1 a 5 e o 15.</p>`,
  },
  perguntas: [
    { p: 'Quais as saídas de Hardin para a tragédia dos comuns?', r: 'Propriedade privada ou regulação pública.' },
    { p: 'O que Ostrom mostrou?', r: 'Que comunidades podem gerir recursos comuns de modo duradouro sob certas condições.' },
    { p: 'Que convenções foram abertas para assinatura na Rio 92?', r: 'A Convenção-Quadro sobre Mudança do Clima e a Convenção sobre Diversidade Biológica.' },
  ],
  exercicios: [
    mc('"A tragédia dos comuns" é de:', ['Hardin', 'Ostrom', 'Carson', 'Brundtland'], 0, '1968.'),
    mc('Ostrom recebeu o Nobel de Economia em:', ['1990', '2001', '2009', '2015'], 2, 'Governança dos comuns.'),
    mc('Um princípio de Ostrom é:', ['Sanções graduais', 'Proibir toda comunicação', 'Acesso ilimitado', 'Ausência de regras'], 0, 'Desenho institucional.'),
    mc('A Agenda 21 foi aprovada na:', ['Estocolmo 1972', 'Rio 92', 'Kyoto 1997', 'Paris 2015'], 1, 'Programa de ação.'),
    mc('O manejo comunitário do pirarucu é exemplo de:', ['Tragédia dos comuns', 'Gestão comunitária de recurso comum', 'Privatização', 'Estatização'], 1, 'Mamirauá.'),
    disc('Avalie a gestão de um recurso comum brasileiro com os oito princípios de Ostrom.', ['Recurso descrito', 'Princípios aplicados', 'Lacunas', 'Fontes']),
  ],
  resumo: ['Hardin (1968): tragédia dos comuns.', 'Ostrom (1990): oito princípios; Nobel 2009.', 'Brundtland (1987).', 'Rio 92: Declaração, Agenda 21, duas convenções.', 'Pirarucu em Mamirauá.'],
  referencias: [
    { texto: 'Garrett Hardin, "The Tragedy of the Commons" (1968).' },
    { texto: 'Elinor Ostrom, Governando os comuns (1990).' },
    { texto: 'Comissão Mundial sobre Meio Ambiente e Desenvolvimento, Nosso futuro comum (1987).' },
    { texto: 'Declaração do Rio sobre Meio Ambiente e Desenvolvimento (1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação do recurso comum', 'Ler os textos indicados'],
  revisao: [['Hardin', 'Pasto comum.'], ['Ostrom', 'Oito princípios.'], ['Rio 92', 'Clima e biodiversidade.']],
  avancado: {
    texto: `<h3>Do Protocolo de Kyoto ao Acordo de Paris</h3>
<p>O Protocolo de Kyoto (1997) fixou metas obrigatórias de redução de emissões só para países desenvolvidos ${tag('fato')}. O Acordo de Paris (2015) adotou contribuições nacionalmente determinadas por todos os países e a meta de manter o aquecimento bem abaixo de 2 °C, buscando limitá-lo a 1,5 °C ${tag('fato')}. A troca de metas impostas por compromissos nacionais revisados periodicamente aproxima-se da governança policêntrica de Ostrom ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Acordo de Paris (2015).' }],
    exercicios: [
      mc('O Protocolo de Kyoto é de:', ['1992', '1997', '2009', '2015'], 1, 'Metas para países desenvolvidos.'),
      mc('No Acordo de Paris, as metas são:', ['Impostas pela ONU', 'Contribuições nacionalmente determinadas', 'Inexistentes', 'Só da Europa'], 1, '2015.'),
      mc('A meta de temperatura de Paris é:', ['Bem abaixo de 2 °C, buscando 1,5 °C', '4 °C', '0 °C', 'Nenhuma'], 0, 'Art. 2.'),
      disc('Compare Kyoto e Paris à luz da tragédia dos comuns e dos princípios de Ostrom.', ['Kyoto', 'Paris', 'Comparação', 'Avaliação'])],
  },
}),

avaliacao('ca2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação do pensamento ambiental e os autores que formaram o debate moderno, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo e a ficha de Primavera silenciosa.</li><li>Refaça os cálculos de níveis tróficos e de tempo de duplicação.</li></ul>`,
[
  disc('Compare como Humboldt, Marsh e Carson relacionaram ação humana e natureza, citando passagens ou exemplos de cada um.', ['Humboldt', 'Marsh', 'Carson', 'Comparação com exemplos']),
  disc('Hardin ou Ostrom: qual explica melhor a situação de um recurso comum brasileiro que você conhece? Justifique com dados e reconheça os limites da sua resposta.', ['Recurso descrito', 'Aplicação de Hardin e Ostrom', 'Dados', 'Limites reconhecidos']),
]),
];
