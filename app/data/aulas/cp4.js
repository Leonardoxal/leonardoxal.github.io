// Ciência Política IV — grandes áreas (etapa 8 do percurso de Ciência Política).
// Política comparada; sistemas partidários e eleitorais; opinião pública e comunicação política;
// o sistema político brasileiro, de Victor Nunes Leal e Raymundo Faoro ao presidencialismo de coalizão.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cp4-1', titulo: 'Política comparada: modelos majoritário e consensual de democracia', duracao: '150 min',
  aprendera: ['Explicar os modelos majoritário e consensual de Lijphart', 'Identificar as duas dimensões da comparação', 'Classificar democracias com os critérios de Lijphart', 'Situar o Brasil na comparação'],
  prereq: ['Ciência Política III (módulo CP3)'],
  explicacao: `
<h3>O problema</h3>
<p>Democracias diferem muito entre si: umas concentram o poder na maioria, outras o dividem entre muitos atores. Como comparar esses desenhos?</p>
<h3>Os dois modelos</h3>
<p>Arend Lijphart (<em>Modelos de democracia</em>, 1999) comparou 36 democracias e distinguiu o modelo majoritário, que concentra o poder na maioria, e o consensual, que procura dividi-lo e partilhá-lo ${tag('fato')}. Usou dez variáveis agrupadas em duas dimensões: executivos-partidos (concentração do Executivo, sistema partidário, sistema eleitoral, relação entre Executivo e Legislativo, grupos de interesse) e federal-unitária (federalismo, bicameralismo, rigidez constitucional, controle de constitucionalidade, independência do banco central) ${tag('fato')}.</p>
<h3>Exemplos</h3>
<p>O Reino Unido aproxima-se do modelo majoritário, chamado de Westminster; a Suíça e a Bélgica, do consensual ${tag('fato')}. Lijphart sustentou que as democracias consensuais têm desempenho igual ou melhor em várias medidas, tese contestada por outros pesquisadores ${tag('debate')}.</p>
<h3>O Brasil</h3>
<p>O Brasil combina traços consensuais na dimensão federal (federalismo, bicameralismo forte, constituição detalhada e controle de constitucionalidade amplo) com um presidente de poderes legislativos expressivos e um sistema partidário muito fragmentado ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Modelo majoritário', 'Desenho que concentra o poder na maioria.'],
    ['Modelo consensual', 'Desenho que divide e partilha o poder entre muitos atores.'],
    ['Bicameralismo', 'Legislativo com duas câmaras.'],
    ['Rigidez constitucional', 'Dificuldade de emendar a constituição.'],
    ['Controle de constitucionalidade', 'Exame da conformidade das leis com a constituição.'],
  ],
  exemplos: `<p><strong>Classificando um traço:</strong> a Constituição brasileira exige três quintos dos votos em dois turnos nas duas Casas do Congresso para ser emendada (art. 60, § 2º). Na variável rigidez constitucional, isso aproxima o Brasil do modelo consensual, pois uma maioria simples não basta para mudar as regras.</p>`,
  contexto: `<p><strong>No mundo:</strong> a política comparada é uma das grandes áreas da disciplina, ao lado de teoria política, relações internacionais e política do próprio país ${tag('fato')}. <strong>No Brasil:</strong> o Supremo Tribunal Federal exerce controle de constitucionalidade concentrado e difuso ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que sociedades divididas tendem a preferir desenhos consensuais', tag: 'argumento',
    premissas: ['Em sociedades com divisões profundas (língua, religião, região), uma maioria estável pode excluir permanentemente uma minoria.', 'Grupos excluídos de forma permanente perdem incentivos para aceitar as regras.', 'Desenhos que partilham o poder dão a todos os grupos algum lugar nas decisões.'],
    conclusao: 'Logo, sociedades profundamente divididas tendem a se estabilizar melhor com desenhos consensuais.',
    nota: 'É o argumento de Lijphart sobre a democracia consociativa; críticos lembram que a partilha pode congelar as divisões.',
  },
  objecoes: [
    { objecao: 'Comparar países tão diferentes é comparar laranjas com bananas.', tag: 'debate',
      resposta: 'A comparação não exige casos idênticos, mas conceitos definidos e variáveis medidas do mesmo modo em todos os casos. É justamente a variação entre países que permite testar hipóteses. O cuidado necessário é não atribuir a uma instituição o que se deve a outras diferenças.' },
  ],
  aplicacao: `<p>Classifique o Brasil em cinco das dez variáveis de Lijphart, citando o artigo da Constituição ou o dado que justifica cada classificação.</p>`,
  fonte: {
    obra: 'Arend Lijphart, Modelos de democracia (1999), caps. 1–3 e 14', link: null,
    orientacao: `<p>Leia a descrição dos modelos de Westminster e consensual e o capítulo sobre as duas dimensões. Anote as dez variáveis numa tabela para usar na aplicação.</p>`,
  },
  perguntas: [
    { p: 'Quais os dois modelos de Lijphart?', r: 'Majoritário e consensual.' },
    { p: 'Quais as duas dimensões?', r: 'Executivos-partidos e federal-unitária.' },
    { p: 'Que país exemplifica o modelo de Westminster?', r: 'O Reino Unido.' },
  ],
  exercicios: [
    mc('Modelos de democracia (1999) comparou:', ['5 democracias', '36 democracias', '100 democracias', 'Só a Europa'], 1, 'Lijphart.'),
    mc('O federalismo pertence à dimensão:', ['Executivos-partidos', 'Federal-unitária', 'Cultural', 'Econômica'], 1, 'Lijphart.'),
    mc('Um modelo próximo do consensual é o da:', ['Suíça', 'Reino Unido', 'Nova Zelândia antiga', 'Nenhum'], 0, 'Partilha do poder.'),
    mc('Emendar a Constituição brasileira exige:', ['Maioria simples', 'Três quintos em dois turnos nas duas Casas', 'Unanimidade', 'Decreto presidencial'], 1, 'Art. 60, § 2º.'),
    mc('A tese de que democracias consensuais têm melhor desempenho é:', ['Consenso', 'Contestada', 'Doutrina', 'Lei'], 1, 'Debate.'),
    disc('Classifique o Brasil em cinco variáveis de Lijphart, com artigos ou dados para cada uma.', ['Cinco variáveis', 'Classificação correta', 'Justificativa', 'Fontes']),
  ],
  resumo: ['Lijphart: majoritário e consensual.', 'Dez variáveis, duas dimensões.', 'Westminster e Suíça.', 'Desempenho: debate.', 'Brasil: traços mistos.'],
  referencias: [
    { texto: 'Arend Lijphart, Modelos de democracia (1999).' },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 60.' },
    { texto: 'Arend Lijphart, Democracy in Plural Societies (1977).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a classificação do Brasil', 'Ler os capítulos indicados'],
  revisao: [['Lijphart', 'Dois modelos.'], ['Duas dimensões', 'Executivos-partidos e federal-unitária.'], ['Art. 60', 'Rigidez.']],
  avancado: {
    texto: `<h3>Transições para a democracia</h3>
<p>Guillermo O'Donnell e Philippe Schmitter (<em>Transições do regime autoritário</em>, 1986) estudaram transições na Europa do Sul e na América Latina e destacaram as negociações entre moderados do regime e da oposição ${tag('interpretacao')}. A transição brasileira, da abertura dos anos 1970 à Constituição de 1988, é frequentemente descrita como gradual e negociada ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Guillermo O\'Donnell e Philippe Schmitter, Transições do regime autoritário (1986).' }],
    exercicios: [
      mc('Transições do regime autoritário é de:', ['O\'Donnell e Schmitter', 'Lijphart', 'Linz', 'Downs'], 0, '1986.'),
      mc('Esses autores destacaram:', ['Revoluções armadas', 'Negociações entre moderados', 'Intervenção externa', 'Eleições fraudadas'], 1, 'Pactos.'),
      mc('A transição brasileira é frequentemente descrita como:', ['Súbita e violenta', 'Gradual e negociada', 'Imposta de fora', 'Inexistente'], 1, 'Interpretação.'),
      disc('Descreva as etapas da transição brasileira e avalie se ela se encaixa no modelo de O\'Donnell e Schmitter.', ['Etapas', 'Modelo', 'Encaixe e diferenças', 'Fontes'])],
  },
}),

aula({
  id: 'cp4-2', titulo: 'Sistemas partidários e eleitorais: fragmentação, número efetivo de partidos e reformas', duracao: '150 min',
  aprendera: ['Calcular o número efetivo de partidos', 'Relacionar sistema eleitoral e fragmentação', 'Explicar as reformas eleitorais brasileiras recentes', 'Avaliar uma reforma com dados'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Um parlamento com 20 partidos é mais fragmentado que um com 5? Depende do tamanho de cada um. Como medir?</p>
<h3>Número efetivo de partidos</h3>
<p>Markku Laakso e Rein Taagepera (1979) propuseram o número efetivo de partidos: 1 dividido pela soma dos quadrados das proporções de cadeiras (ou votos) de cada partido ${tag('fato')}. Partidos grandes pesam mais; partidos minúsculos quase não alteram o índice ${tag('fato')}.</p>
<h3>Sistema eleitoral e fragmentação</h3>
<p>A representação proporcional com distritos grandes tende a permitir mais partidos; distritos de um só representante tendem a reduzi-los, como previa Duverger ${tag('interpretacao')}. A Câmara dos Deputados brasileira está entre as mais fragmentadas do mundo nas medidas usuais ${tag('interpretacao')}.</p>
<h3>Reformas recentes no Brasil</h3>
<p>A Emenda Constitucional nº 97/2017 proibiu as coligações nas eleições proporcionais, a partir de 2020, e criou uma cláusula de desempenho progressiva para acesso ao fundo partidário e ao tempo de propaganda ${tag('fato')}. A Lei nº 14.208/2021 permitiu as federações partidárias, que devem durar ao menos quatro anos ${tag('fato')}. Avaliar o efeito dessas regras exige comparar eleições antes e depois ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Número efetivo de partidos', '1 dividido pela soma dos quadrados das proporções.'],
    ['Fragmentação', 'Dispersão das cadeiras ou votos entre muitos partidos.'],
    ['Magnitude do distrito', 'Número de cadeiras em disputa num distrito.'],
    ['Cláusula de desempenho', 'Exigência de votação mínima para acesso a recursos ou cadeiras.'],
    ['Federação partidária', 'União de partidos que atuam juntos por ao menos quatro anos.'],
  ],
  exemplos: `<p><strong>Calculando:</strong> quatro partidos com 40%, 30%, 20% e 10% das cadeiras. Soma dos quadrados: 0,16 + 0,09 + 0,04 + 0,01 = 0,30. Número efetivo = 1 ÷ 0,30 ≈ 3,3. Se fossem dois partidos com 50% cada: 0,25 + 0,25 = 0,50, número efetivo = 2.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Alemanha exige, em regra, 5% dos votos de lista para um partido obter cadeiras proporcionais ${tag('fato')}. <strong>No Brasil:</strong> o Tribunal Superior Eleitoral divulga os votos e cadeiras por partido, permitindo calcular a fragmentação em cada eleição ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o fim das coligações proporcionais deveria reduzir a fragmentação', tag: 'argumento',
    premissas: ['Nas coligações proporcionais, partidos pequenos elegiam deputados somando votos com partidos maiores.', 'Sem coligações, cada partido precisa atingir sozinho o quociente eleitoral.', 'Muitos partidos pequenos não atingem esse patamar sozinhos.'],
    conclusao: 'Logo, o fim das coligações proporcionais deveria reduzir o número de partidos com cadeiras.',
    nota: 'As federações partidárias atenuam o efeito; a verificação exige comparar 2018 com eleições posteriores.',
  },
  objecoes: [
    { objecao: 'Menos partidos significa menos representação das minorias.', tag: 'debate',
      resposta: 'Há um dilema real entre representatividade (mais partidos) e governabilidade (menos partidos, maiorias mais fáceis). Minorias também podem ser representadas dentro de partidos maiores ou federações. O equilíbrio adequado é escolha normativa, informada por dados sobre os efeitos de cada regra.' },
  ],
  aplicacao: `<p>Calcule o número efetivo de partidos na Câmara dos Deputados eleita em duas eleições (uma antes e outra depois de 2017), com dados do TSE ou da Câmara, e interprete a diferença.</p>`,
  fonte: {
    obra: 'Markku Laakso e Rein Taagepera, "Effective Number of Parties" (1979); Emenda Constitucional nº 97/2017; Lei nº 14.208/2021', link: { url: 'https://www.tse.jus.br', rotulo: 'Tribunal Superior Eleitoral' },
    orientacao: `<p>No artigo, a fórmula e sua justificativa. Na emenda e na lei, as regras de coligação, cláusula de desempenho e federação. No TSE, as cadeiras por partido.</p>`,
  },
  perguntas: [
    { p: 'Como se calcula o número efetivo de partidos?', r: '1 dividido pela soma dos quadrados das proporções de cada partido.' },
    { p: 'O que fez a EC 97/2017?', r: 'Proibiu coligações proporcionais a partir de 2020 e criou cláusula de desempenho.' },
    { p: 'Quanto tempo deve durar uma federação partidária?', r: 'Ao menos quatro anos.' },
  ],
  exercicios: [
    mc('Dois partidos com 50% cada têm número efetivo:', ['1', '2', '4', '0,5'], 1, '1 ÷ 0,5.'),
    mc('Três partidos com um terço cada têm número efetivo:', ['1', '2', '3', '9'], 2, '1 ÷ (3 × 1/9).'),
    mc('O índice de número efetivo é de:', ['Laakso e Taagepera', 'Downs', 'Duverger', 'Dahl'], 0, '1979.'),
    mc('As coligações proporcionais foram proibidas a partir de:', ['2010', '2018', '2020', '2026'], 2, 'EC 97/2017.'),
    mc('As federações partidárias foram criadas pela:', ['Lei 9.504/1997', 'Lei 14.208/2021', 'EC 97/2017', 'Lei 4.737/1965'], 1, 'Quatro anos.'),
    disc('Calcule o número efetivo de partidos na Câmara em duas eleições e interprete a diferença.', ['Dados com fonte', 'Cálculos', 'Interpretação', 'Outras causas consideradas']),
  ],
  resumo: ['Número efetivo de partidos.', 'Magnitude e fragmentação.', 'EC 97/2017: sem coligações proporcionais.', 'Cláusula de desempenho.', 'Federações (Lei 14.208/2021).'],
  referencias: [
    { texto: 'Markku Laakso e Rein Taagepera, "Effective Number of Parties" (1979).' },
    { texto: 'Emenda Constitucional nº 97, de 2017.' },
    { texto: 'Lei nº 14.208, de 2021 (federações partidárias).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo e a interpretação', 'Consultar os dados oficiais'],
  revisao: [['Número efetivo', '1 ÷ Σp².'], ['EC 97/2017', 'Coligações.'], ['Federação', 'Quatro anos.']],
  avancado: {
    texto: `<h3>Desproporcionalidade</h3>
<p>Índices como o de Gallagher medem a distância entre a proporção de votos e a de cadeiras de cada partido ${tag('fato')}. No Brasil, a distribuição de cadeiras da Câmara entre os estados, com mínimo de 8 e máximo de 70 deputados (art. 45, § 1º), também gera desproporção na representação dos eleitores por estado ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), art. 45.' }],
    exercicios: [
      mc('O índice de Gallagher mede:', ['Fragmentação', 'Distância entre votos e cadeiras', 'Comparecimento', 'Corrupção'], 1, 'Desproporcionalidade.'),
      mc('O mínimo de deputados por estado é:', ['1', '4', '8', '10'], 2, 'Art. 45, § 1º.'),
      mc('O máximo de deputados por estado é:', ['50', '70', '80', '100'], 1, 'Art. 45, § 1º.'),
      disc('Calcule quantos habitantes por deputado há em dois estados brasileiros e discuta a desproporção.', ['Dados com fonte', 'Cálculo', 'Comparação', 'Discussão'])],
  },
}),

aula({
  id: 'cp4-3', titulo: 'Opinião pública e comunicação política: agenda, enquadramento e desinformação', duracao: '150 min',
  aprendera: ['Explicar a teoria do agendamento', 'Distinguir agendamento e enquadramento', 'Conhecer as regras da propaganda eleitoral no Brasil', 'Avaliar a desinformação com critérios de verificação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Os meios de comunicação dizem às pessoas o que pensar ou sobre o que pensar? E como a desinformação afeta a escolha política?</p>
<h3>Opinião pública</h3>
<p>Walter Lippmann (<em>Opinião pública</em>, 1922) observou que as pessoas agem com base em imagens do mundo formadas por informações indiretas, as "imagens em nossas cabeças" ${tag('fato')}.</p>
<h3>Agendamento e enquadramento</h3>
<p>Maxwell McCombs e Donald Shaw (1972), estudando a eleição de 1968 em Chapel Hill, encontraram forte correspondência entre os temas destacados pela imprensa e os temas que os eleitores consideravam mais importantes: é a teoria do agendamento ${tag('fato')}. O enquadramento estuda como a forma de apresentar um tema influi na sua interpretação ${tag('fato')}.</p>
<h3>Regras no Brasil</h3>
<p>A Lei nº 9.504/1997 regula as eleições, incluindo o horário gratuito de propaganda eleitoral no rádio e na televisão e as regras de propaganda na internet ${tag('fato')}. O Tribunal Superior Eleitoral mantém programas de enfrentamento à desinformação ${tag('fato')}.</p>
<h3>Verdade e comunicação</h3>
<p>O Catecismo ensina que a informação deve servir ao bem comum e que a sociedade tem direito a uma informação fundada na verdade, na liberdade, na justiça e na solidariedade (CIC 2494) ${tag('doutrina')}. Verificar fonte, data, autor e evidência antes de compartilhar é dever moral e método intelectual ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Opinião pública', 'Conjunto das opiniões de uma população sobre temas públicos.'],
    ['Agendamento', 'Influência da mídia sobre quais temas o público considera importantes.'],
    ['Enquadramento', 'Modo de apresentar um tema que influi na sua interpretação.'],
    ['Desinformação', 'Informação falsa ou enganosa difundida deliberadamente.'],
    ['Verificação', 'Checagem de fonte, autoria, data e evidência de uma informação.'],
  ],
  exemplos: `<p><strong>Dois enquadramentos do mesmo dado:</strong> "o desemprego caiu de 10% para 9%" e "nove em cada cem trabalhadores continuam sem emprego" descrevem o mesmo fato. O primeiro enfatiza a melhora; o segundo, o problema que persiste. Nenhum é falso; cada um orienta a leitura.</p>`,
  contexto: `<p><strong>No mundo:</strong> redes sociais mudaram a circulação de notícias, com efeitos sobre polarização e desinformação estudados e debatidos ${tag('debate')}. <strong>No Brasil:</strong> aplicativos de mensagens tornaram-se canal central de comunicação política nas eleições recentes ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que verificar antes de compartilhar é exigência da vida democrática', tag: 'argumento',
    premissas: ['A escolha política depende de informações sobre fatos.', 'Informações falsas levam a decisões baseadas em fatos que não ocorreram.', 'Quem compartilha sem verificar pode multiplicar o erro para muitas pessoas.'],
    conclusao: 'Logo, verificar antes de compartilhar é exigência da vida democrática e da veracidade.',
    nota: 'A verificação não exige concordar com o conteúdo; exige saber se ele é verdadeiro.',
  },
  objecoes: [
    { objecao: 'Combater a desinformação é sempre censura.', tag: 'debate',
      resposta: 'Há risco real de que o combate à desinformação seja usado para calar opiniões legítimas, e esse risco deve ser controlado com regras claras e revisão judicial. Mas distinguir afirmação de fato verificável e opinião é possível, e informar o público sobre fatos falsos não é censura. O debate está nos limites e nos procedimentos.' },
  ],
  aplicacao: `<p>Escolha uma notícia política muito compartilhada e verifique-a: fonte original, autor, data, evidência e o que outras fontes independentes dizem. Registre o resultado e o que você faria antes de compartilhar.</p>`,
  fonte: {
    obra: 'Walter Lippmann, Opinião pública (1922), cap. 1; Maxwell McCombs e Donald Shaw, "The Agenda-Setting Function of Mass Media" (1972); Lei nº 9.504/1997', link: null,
    orientacao: `<p>Em Lippmann, as "imagens em nossas cabeças". No artigo de McCombs e Shaw, o desenho da pesquisa e o resultado. Na Lei 9.504, as regras do horário gratuito e da propaganda na internet.</p>`,
  },
  perguntas: [
    { p: 'O que diz a teoria do agendamento?', r: 'Que a mídia influi sobre quais temas o público considera importantes.' },
    { p: 'Que lei regula as eleições no Brasil?', r: 'A Lei nº 9.504/1997.' },
    { p: 'Que direito afirma o CIC 2494?', r: 'O direito a uma informação fundada na verdade, na liberdade, na justiça e na solidariedade.' },
  ],
  exercicios: [
    mc('Opinião pública (1922) é de:', ['Lippmann', 'McCombs', 'Habermas', 'Dahl'], 0, '"Imagens em nossas cabeças".'),
    mc('O estudo clássico de agendamento foi feito em:', ['Chapel Hill, 1968', 'Londres, 1900', 'Brasília, 1990', 'Paris, 1789'], 0, 'McCombs e Shaw.'),
    mc('Apresentar o mesmo dado enfatizando a melhora ou o problema é:', ['Agendamento', 'Enquadramento', 'Fraude', 'Censura'], 1, 'Forma.'),
    mc('O horário gratuito de propaganda eleitoral é regulado pela:', ['Lei 9.504/1997', 'Lei 12.527/2011', 'EC 97/2017', 'Lei 14.208/2021'], 0, 'Lei das Eleições.'),
    mc('Antes de compartilhar uma notícia, deve-se verificar:', ['Só o título', 'Fonte, autor, data e evidência', 'Se concorda', 'O número de curtidas'], 1, 'Verificação.'),
    disc('Entregue a verificação de uma notícia política: fonte, autor, data, evidência, outras fontes e decisão sobre compartilhar.', ['Fonte e autor', 'Data e evidência', 'Fontes independentes', 'Decisão justificada']),
  ],
  resumo: ['Lippmann: imagens em nossas cabeças.', 'Agendamento (McCombs e Shaw, 1972).', 'Enquadramento.', 'Lei 9.504/1997.', 'CIC 2494: verdade na informação.'],
  referencias: [
    { texto: 'Walter Lippmann, Opinião pública (1922).' },
    { texto: 'Maxwell McCombs e Donald Shaw, "The Agenda-Setting Function of Mass Media" (1972).' },
    { texto: 'Lei nº 9.504, de 1997 (Lei das Eleições).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2493–2499.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a verificação da notícia', 'Ler os textos indicados'],
  revisao: [['Agendamento', 'Sobre o que pensar.'], ['Enquadramento', 'Como pensar o tema.'], ['CIC 2494', 'Verdade.']],
  avancado: {
    texto: `<h3>A espiral do silêncio</h3>
<p>Elisabeth Noelle-Neumann (1974) propôs que pessoas que se julgam em minoria tendem a calar suas opiniões, o que reforça a impressão de que a opinião majoritária é ainda mais dominante ${tag('interpretacao')}. Pesquisas posteriores encontraram efeitos variáveis conforme o tema e o contexto ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Elisabeth Noelle-Neumann, A espiral do silêncio (1980).' }],
    exercicios: [
      mc('A espiral do silêncio foi proposta por:', ['Noelle-Neumann', 'Lippmann', 'McCombs', 'Lazarsfeld'], 0, '1974.'),
      mc('Segundo a teoria, quem se julga em minoria tende a:', ['Falar mais', 'Calar', 'Mudar de país', 'Votar mais'], 1, 'Silêncio.'),
      mc('Os efeitos encontrados por pesquisas posteriores foram:', ['Sempre fortes', 'Variáveis', 'Nulos sempre', 'Proibidos'], 1, 'Debate.'),
      disc('Proponha uma pesquisa para testar a espiral do silêncio num tema político brasileiro.', ['Tema', 'Desenho', 'Medidas', 'Limites'])],
  },
}),

aula({
  id: 'cp4-4', titulo: 'O sistema político brasileiro: coronelismo, patrimonialismo, cidadania e presidencialismo de coalizão', duracao: '150 min',
  aprendera: ['Explicar o coronelismo segundo Victor Nunes Leal', 'Explicar o patrimonialismo segundo Raymundo Faoro', 'Explicar a sequência dos direitos segundo José Murilo de Carvalho', 'Explicar o presidencialismo de coalizão com um exemplo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que interpretações a ciência política e a história produziram sobre o poder no Brasil, e como elas se comparam com o funcionamento atual das instituições?</p>
<h3>Coronelismo</h3>
<p>Victor Nunes Leal (<em>Coronelismo, enxada e voto</em>, 1949) descreveu o coronelismo da Primeira República como um compromisso entre o poder público fortalecido e os chefes locais decadentes: o coronel entregava votos e recebia do governo estadual controle sobre cargos e favores no município ${tag('fato')}.</p>
<h3>Patrimonialismo</h3>
<p>Raymundo Faoro (<em>Os donos do poder</em>, 1958) interpretou a história brasileira, desde a herança portuguesa, como dominada por um estamento burocrático que trata o Estado como patrimônio próprio ${tag('interpretacao')}. A tese é influente e criticada por generalizar demais ${tag('debate')}.</p>
<h3>Cidadania</h3>
<p>T. H. Marshall (1950) descreveu, para a Inglaterra, a sequência de direitos civis, políticos e sociais ${tag('fato')}. José Murilo de Carvalho (<em>Cidadania no Brasil</em>, 2001) argumentou que no Brasil a sequência foi diferente, com expansão de direitos sociais em períodos de restrição dos direitos políticos, como no Estado Novo ${tag('interpretacao')}.</p>
<h3>Presidencialismo de coalizão</h3>
<p>Sérgio Abranches (1988) cunhou a expressão; estudos posteriores, como os de Figueiredo e Limongi, mostraram que o presidente forma maiorias distribuindo ministérios entre partidos e usando poderes de agenda, como as medidas provisórias (CF, art. 62) ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Coronelismo', 'Compromisso entre o poder público e chefes locais na Primeira República.'],
    ['Voto de cabresto', 'Voto controlado pelo chefe local.'],
    ['Patrimonialismo', 'Uso do Estado como patrimônio dos governantes.'],
    ['Estamento burocrático', 'Em Faoro, camada dirigente que se apropria do Estado.'],
    ['Medida provisória', 'Ato do presidente com força de lei, sujeito à aprovação do Congresso (CF, art. 62).'],
  ],
  exemplos: `<p><strong>Montando uma coalizão:</strong> um presidente eleito tem 15% das cadeiras na Câmara. Para aprovar projetos, precisa de maioria absoluta (257 deputados) ou, para emendas constitucionais, de três quintos (308). Distribui ministérios a partidos que, somados, chegam a 60% das cadeiras. A coalizão é o arranjo que permite governar num Congresso fragmentado.</p>`,
  contexto: `<p><strong>No mundo:</strong> o clientelismo — troca de favores por apoio político — é estudado em muitos países ${tag('fato')}. <strong>No Brasil:</strong> a Lei de Improbidade Administrativa (Lei nº 8.429/1992) e a Lei Anticorrupção (Lei nº 12.846/2013) são instrumentos contra o uso privado do patrimônio público ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o coronelismo dependia do voto e do Estado ao mesmo tempo', tag: 'argumento',
    premissas: ['A República ampliou o peso das eleições na escolha dos governantes estaduais e federais.', 'Os chefes locais controlavam os votos de populações rurais dependentes.', 'Os governos estaduais controlavam cargos, verbas e polícia de que os chefes locais precisavam.'],
    conclusao: 'Logo, o coronelismo era uma troca: votos dos chefes locais por recursos do Estado.',
    nota: 'Por isso Leal o via como sistema da Primeira República, e não como simples poder privado dos fazendeiros.',
  },
  objecoes: [
    { objecao: 'Se o Brasil é patrimonialista desde sempre, nada pode mudar.', tag: 'debate',
      resposta: 'Interpretações de longa duração ajudam a ver continuidades, mas não determinam o futuro. Instituições mudaram: voto secreto, Justiça Eleitoral, urnas eletrônicas, controle externo e leis de transparência. A ciência política mede essas mudanças com dados em vez de supor uma essência imutável.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique o presidencialismo de coalizão com um exemplo documentado de formação de governo no Brasil (partidos, ministérios, cadeiras), citando as fontes.</p>`,
  fonte: {
    obra: 'Victor Nunes Leal, Coronelismo, enxada e voto (1949), cap. 1; José Murilo de Carvalho, Cidadania no Brasil (2001), introdução e conclusão', link: null,
    orientacao: `<p>Em Leal, a definição de coronelismo como compromisso. Em José Murilo de Carvalho, a comparação com a sequência de Marshall. Compare as duas obras: uma explica um sistema; a outra, uma trajetória.</p>`,
  },
  perguntas: [
    { p: 'Como Leal define o coronelismo?', r: 'Como compromisso entre o poder público fortalecido e os chefes locais decadentes.' },
    { p: 'Qual a sequência de direitos de Marshall?', r: 'Civis, políticos e sociais.' },
    { p: 'Que poder de agenda do presidente está no art. 62?', r: 'A medida provisória.' },
  ],
  exercicios: [
    mc('Coronelismo, enxada e voto é de:', ['Faoro', 'Victor Nunes Leal', 'Abranches', 'Gilberto Freyre'], 1, '1949.'),
    mc('Os donos do poder é de:', ['Raymundo Faoro', 'José Murilo de Carvalho', 'Sérgio Buarque', 'Rui Barbosa'], 0, '1958.'),
    mc('A sequência civis-políticos-sociais é de:', ['Marshall', 'Weber', 'Dahl', 'Tocqueville'], 0, '1950.'),
    mc('A maioria absoluta da Câmara dos Deputados é de:', ['171', '257', '308', '513'], 1, 'Metade mais um de 513.'),
    mc('A Lei Anticorrupção é de:', ['1992', '2010', '2013', '2017'], 2, 'Lei 12.846.'),
    disc('Explique o presidencialismo de coalizão com um exemplo documentado de formação de governo, com partidos, ministérios e cadeiras.', ['Conceito', 'Exemplo documentado', 'Dados de cadeiras', 'Fontes']),
  ],
  resumo: ['Leal: coronelismo como compromisso.', 'Faoro: patrimonialismo (debate).', 'Marshall e José Murilo de Carvalho.', 'Coalizão e medidas provisórias.', 'Leis 8.429/1992 e 12.846/2013.'],
  referencias: [
    { texto: 'Victor Nunes Leal, Coronelismo, enxada e voto (1949).' },
    { texto: 'Raymundo Faoro, Os donos do poder (1958).' },
    { texto: 'José Murilo de Carvalho, Cidadania no Brasil: o longo caminho (2001).' },
    { texto: 'Sérgio Abranches, "Presidencialismo de coalizão: o dilema institucional brasileiro" (1988).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação com exemplo', 'Ler os textos indicados'],
  revisao: [['Leal', 'Compromisso coronelista.'], ['Faoro', 'Estamento.'], ['Art. 62', 'Medida provisória.']],
  avancado: {
    texto: `<h3>Raízes do Brasil e o homem cordial</h3>
<p>Sérgio Buarque de Holanda (<em>Raízes do Brasil</em>, 1936) descreveu o "homem cordial", que leva para a vida pública a lógica das relações pessoais e familiares, dificultando a impessoalidade do Estado ${tag('interpretacao')}. "Cordial" vem de coração e não significa gentil; o conceito é muitas vezes mal compreendido ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Sérgio Buarque de Holanda, Raízes do Brasil (1936), cap. 5.' }],
    exercicios: [
      mc('Raízes do Brasil é de:', ['Sérgio Buarque de Holanda', 'Faoro', 'Leal', 'Freyre'], 0, '1936.'),
      mc('"Cordial", em Sérgio Buarque, refere-se:', ['À gentileza', 'Ao coração e às relações pessoais', 'À religião', 'Ao comércio'], 1, 'Etimologia.'),
      mc('O homem cordial dificulta:', ['A família', 'A impessoalidade do Estado', 'A amizade', 'A religião'], 1, 'Cap. 5.'),
      disc('Compare o homem cordial de Sérgio Buarque e o patrimonialismo de Faoro.', ['Sérgio Buarque', 'Faoro', 'Semelhanças e diferenças', 'Avaliação'])],
  },
}),

avaliacao('cp4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre política comparada, sistemas partidários e eleitorais, comunicação política e sistema político brasileiro, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o cálculo do número efetivo de partidos.</li><li>Releia o exemplo de formação de coalizão.</li></ul>`,
[
  disc('Analise o sistema político brasileiro com as variáveis de Lijphart e o número efetivo de partidos, e explique por que o presidente precisa de coalizões.', ['Variáveis de Lijphart', 'Número efetivo com dados', 'Explicação da coalizão', 'Fontes']),
  disc('Compare duas interpretações clássicas do poder no Brasil (Leal, Faoro, Sérgio Buarque ou José Murilo de Carvalho) e diga o que cada uma explica sobre a política atual e o que não explica.', ['Duas interpretações', 'O que explicam', 'O que não explicam', 'Distinção entre fato e interpretação']),
]),
];
