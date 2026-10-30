// Ciências Ambientais III — escolas e debates (etapas 6 e 7 do percurso de Ciências Ambientais).
// Conservacionismo, preservacionismo e ecologia profunda; economia ambiental, economia ecológica e ecologia
// integral; mudança climática (medição, atribuição e projeção); desenvolvimento, conservação e gerações futuras.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

const LS = { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' };

export const AULAS = [
aula({
  id: 'ca3-1', titulo: 'Conservacionismo, preservacionismo e ecologia profunda', duracao: '150 min',
  aprendera: ['Distinguir conservacionismo e preservacionismo', 'Explicar a ecologia profunda de Naess', 'Identificar cada corrente em políticas brasileiras', 'Avaliar as correntes à luz da doutrina'],
  prereq: ['Ciências Ambientais II (módulo CA2)'],
  explicacao: `
<h3>O problema</h3>
<p>Proteger a natureza para usá-la melhor, protegê-la de todo uso, ou protegê-la por ter valor em si mesma? As respostas definem correntes diferentes.</p>
<h3>Conservacionismo e preservacionismo</h3>
<p>Gifford Pinchot, primeiro chefe do Serviço Florestal dos Estados Unidos (1905), defendeu o uso racional dos recursos para o maior bem do maior número pelo maior tempo ${tag('fato')}. John Muir, fundador do Sierra Club (1892), defendeu a preservação de áreas selvagens por seu valor próprio e espiritual ${tag('fato')}. O conflito entre os dois ficou célebre na disputa pela represa de Hetch Hetchy, aprovada em 1913 ${tag('fato')}. Yellowstone, criado em 1872, é considerado o primeiro parque nacional ${tag('fato')}.</p>
<h3>Ecologia profunda</h3>
<p>Arne Naess (1973) distinguiu uma ecologia "rasa", preocupada com a poluição e os recursos para o bem humano, de uma ecologia "profunda", que atribui valor intrínseco a todos os seres vivos e critica o antropocentrismo ${tag('fato')}. Alguns de seus seguidores defenderam reduzir a população humana, o que gerou críticas fortes ${tag('debate')}.</p>
<h3>A doutrina</h3>
<p>A <em>Laudato si'</em> critica o antropocentrismo desordenado, que trata a natureza como objeto de domínio ilimitado (n. 115–116), mas recusa trocá-lo por um biocentrismo que nega a singularidade do ser humano (n. 118) ${tag('doutrina')}. Cada criatura tem valor próprio diante de Deus (n. 69), e o ser humano tem responsabilidade particular ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Conservacionismo', 'Uso racional dos recursos para garantir sua permanência.'],
    ['Preservacionismo', 'Proteção de áreas da natureza contra o uso direto.'],
    ['Ecologia profunda', 'Corrente que atribui valor intrínseco a todos os seres vivos (Naess).'],
    ['Antropocentrismo', 'Visão que põe o ser humano no centro do valor.'],
    ['Biocentrismo', 'Visão que põe a vida em geral no centro do valor.'],
  ],
  exemplos: `<p><strong>As correntes no Brasil:</strong> uma floresta nacional com manejo madeireiro planejado expressa o conservacionismo; um parque nacional sem extração de recursos, o preservacionismo (ver bi5-3 sobre o SNUC). Uma reserva extrativista combina uso e proteção com as populações locais, desenho que não cabe bem em nenhuma das duas correntes puras.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate entre uso e preservação marcou a criação de áreas protegidas em muitos países ${tag('fato')}. <strong>No Brasil:</strong> Augusto Ruschi, naturalista capixaba, destacou-se no século XX na defesa da Mata Atlântica e no estudo dos beija-flores ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a doutrina recusa tanto o domínio ilimitado quanto o biocentrismo', tag: 'argumento',
    premissas: ['As criaturas têm valor próprio, que não se reduz à utilidade para o homem.', 'O ser humano tem dignidade singular e responsabilidade pela criação.', 'Negar o primeiro leva ao domínio ilimitado; negar o segundo dissolve a responsabilidade humana.'],
    conclusao: 'Logo, a doutrina propõe uma ecologia integral que reconhece o valor das criaturas e a responsabilidade singular do ser humano.',
    nota: 'É um juízo filosófico e teológico; a ecologia científica não decide sozinha essa questão.',
  },
  objecoes: [
    { objecao: 'Se o ser humano é especial, a natureza só vale pelo que nos serve.', tag: 'debate',
      resposta: 'A dignidade singular do ser humano não implica que as outras criaturas sejam só instrumentos. A tradição cristã afirma que cada criatura reflete algo da bondade de Deus (CIC 339) e que o domínio humano é administração responsável, não posse arbitrária (CIC 2415).' },
  ],
  aplicacao: `<p>Escolha uma política ambiental brasileira e identifique que corrente (conservacionista, preservacionista ou outra) a inspira, justificando com o texto da norma.</p>`,
  fonte: {
    obra: 'Arne Naess, "The Shallow and the Deep, Long-Range Ecology Movement" (1973); Papa Francisco, Laudato si\' (2015), n. 69 e 115–118', link: LS,
    orientacao: `<p>Em Naess, os pontos que distinguem ecologia rasa e profunda. Na Laudato si', a crítica ao antropocentrismo desordenado e a recusa do biocentrismo. Compare os fundamentos do valor da natureza em cada texto.</p>`,
  },
  perguntas: [
    { p: 'O que defendia Pinchot?', r: 'O uso racional dos recursos para o maior bem do maior número pelo maior tempo.' },
    { p: 'O que distingue a ecologia profunda?', r: 'A atribuição de valor intrínseco a todos os seres vivos e a crítica ao antropocentrismo.' },
    { p: 'O que a Laudato si\' diz do biocentrismo?', r: 'Que não deve substituir o antropocentrismo desordenado, pois negaria a singularidade e a responsabilidade humanas (n. 118).' },
  ],
  exercicios: [
    mc('O primeiro parque nacional é:', ['Yosemite', 'Yellowstone', 'Itatiaia', 'Iguaçu'], 1, '1872.'),
    mc('O Sierra Club foi fundado por:', ['Pinchot', 'Muir', 'Naess', 'Carson'], 1, '1892.'),
    mc('A ecologia profunda foi proposta por:', ['Arne Naess', 'Haeckel', 'Ostrom', 'Daly'], 0, '1973.'),
    mc('A crítica ao antropocentrismo desordenado está na Laudato si\', n.:', ['10–12', '115–116', '200', '240'], 1, 'Domínio ilimitado.'),
    mc('Uma floresta nacional com manejo madeireiro expressa melhor o:', ['Preservacionismo', 'Conservacionismo', 'Biocentrismo', 'Ecologia profunda'], 1, 'Uso racional.'),
    disc('Identifique a corrente que inspira uma política ambiental brasileira, com o texto da norma.', ['Política descrita', 'Corrente identificada', 'Texto citado', 'Justificativa']),
  ],
  resumo: ['Pinchot: uso racional.', 'Muir: preservação; Hetch Hetchy.', 'Naess: ecologia profunda.', 'LS 115–118: nem domínio ilimitado, nem biocentrismo.', 'LS 69; CIC 339.'],
  referencias: [
    { texto: 'Arne Naess, "The Shallow and the Deep, Long-Range Ecology Movement" (1973).' },
    { texto: 'Gifford Pinchot, Breaking New Ground (1947).' },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: LS },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da política', 'Ler os textos indicados'],
  revisao: [['Pinchot', 'Uso racional.'], ['Muir', 'Preservação.'], ['LS 118', 'Contra o biocentrismo.']],
  avancado: {
    texto: `<h3>O mito da natureza intocada</h3>
<p>Antonio Carlos Diegues (<em>O mito moderno da natureza intocada</em>, 1994) criticou o modelo de áreas protegidas que exclui populações tradicionais, argumentando que muitas paisagens consideradas "selvagens" foram moldadas por elas ${tag('interpretacao')}. Arqueólogos mostraram a presença de terras pretas de origem humana na Amazônia, o que reforça a ideia de florestas manejadas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Antonio Carlos Diegues, O mito moderno da natureza intocada (1994).' }],
    exercicios: [
      mc('O mito moderno da natureza intocada é de:', ['Diegues', 'Ruschi', 'Muir', 'Naess'], 0, '1994.'),
      mc('As terras pretas da Amazônia são de origem:', ['Vulcânica', 'Humana', 'Glacial', 'Marinha'], 1, 'Arqueologia.'),
      mc('A crítica de Diegues dirige-se a áreas protegidas que:', ['Incluem populações', 'Excluem populações tradicionais', 'Permitem turismo', 'São pequenas'], 1, 'Exclusão.'),
      disc('Discuta se a presença histórica humana na Amazônia muda a forma de proteger a floresta.', ['Evidência', 'Argumento de Diegues', 'Contra-argumento', 'Conclusão'])],
  },
}),

aula({
  id: 'ca3-2', titulo: 'Economia ambiental, economia ecológica e ecologia integral', duracao: '150 min',
  aprendera: ['Explicar externalidades e o imposto de Pigou', 'Explicar o argumento de Coase', 'Distinguir economia ambiental e economia ecológica', 'Explicar a ecologia integral da Laudato si\''],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o mercado tende a produzir poluição demais, e como corrigir isso? E o crescimento econômico pode ser infinito num planeta finito?</p>
<h3>Externalidades</h3>
<p>Arthur Pigou (<em>A economia do bem-estar</em>, 1920) mostrou que, quando uma atividade causa custos a terceiros que não são pagos (externalidade negativa), ela é praticada em excesso; propôs um imposto igual ao dano para corrigir o preço ${tag('fato')}. Ronald Coase (1960) argumentou que, com direitos bem definidos e custos de negociação baixos, as partes poderiam negociar uma solução eficiente sem imposto ${tag('fato')}.</p>
<h3>Duas economias</h3>
<p>A economia ambiental trata o ambiente com os instrumentos da economia convencional: preços, impostos, mercados de licenças de emissão ${tag('fato')}. A economia ecológica, de autores como Herman Daly, vê a economia como subsistema da biosfera e defende uma economia de estado estacionário, com uso de matéria e energia dentro dos limites ecológicos ${tag('fato')}. A divergência é sobre a possibilidade de substituir recursos naturais por capital e tecnologia ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>O ICMS Ecológico, criado no Paraná em 1991, repassa parte da arrecadação a municípios com áreas protegidas ou mananciais ${tag('fato')}. A Lei nº 14.119/2021 instituiu a Política Nacional de Pagamento por Serviços Ambientais ${tag('fato')}.</p>
<h3>Ecologia integral</h3>
<p>A <em>Laudato si'</em> afirma que não há duas crises separadas, uma ambiental e outra social, mas uma única e complexa crise socioambiental (n. 139), e pede ouvir tanto o clamor da terra como o clamor dos pobres (n. 49) ${tag('doutrina')}. Critica a confiança irracional no progresso e o paradigma tecnocrático (n. 106–110), sem rejeitar a técnica ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Externalidade', 'Custo ou benefício que uma atividade causa a terceiros sem pagamento.'],
    ['Imposto pigouviano', 'Imposto igual ao dano causado, para corrigir o preço.'],
    ['Licença de emissão', 'Direito negociável de emitir certa quantidade de poluente.'],
    ['Economia de estado estacionário', 'Economia que mantém constante o uso de matéria e energia (Daly).'],
    ['Pagamento por serviços ambientais', 'Remuneração a quem conserva ou recupera serviços ecossistêmicos.'],
  ],
  exemplos: `<p><strong>O imposto de Pigou:</strong> uma fábrica lucra R$ 100 por tonelada produzida e causa R$ 30 de dano à saúde da vizinhança por tonelada. Sem correção, produz como se o dano não existisse. Com imposto de R$ 30 por tonelada, o custo do dano entra na decisão, e a fábrica tem incentivo para reduzir a poluição ou produzir menos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a União Europeia criou em 2005 um mercado de licenças de emissão de gases de efeito estufa ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o mercado sozinho produz poluição em excesso', tag: 'argumento',
    premissas: ['O produtor decide comparando seus próprios custos e benefícios.', 'O dano da poluição recai sobre terceiros e não entra nos custos do produtor.', 'Logo, o produtor ignora parte do custo real da produção.'],
    conclusao: 'Portanto, sem correção, a atividade poluidora é praticada além do ponto em que os benefícios superam os custos totais.',
    nota: 'A correção pode ser imposto, regulação, mercado de licenças ou negociação, conforme o caso.',
  },
  objecoes: [
    { objecao: 'Pôr preço na natureza é tratá-la como mercadoria.', tag: 'debate',
      resposta: 'O preço de uma externalidade não afirma que a natureza seja só mercadoria; é instrumento para que o dano entre nas decisões. A Laudato si\' adverte contra reduzir tudo a valor de mercado (n. 190) e também contra soluções meramente financeiras, como certos créditos de carbono (n. 171). O debate é sobre quando o instrumento ajuda e quando distorce.' },
  ],
  aplicacao: `<p>Escolha um problema ambiental brasileiro e proponha um instrumento econômico para enfrentá-lo (imposto, pagamento por serviços, mercado de licenças), avaliando vantagens e limites com os critérios da aula.</p>`,
  fonte: {
    obra: 'Arthur Pigou, A economia do bem-estar (1920), parte II, cap. 9; Herman Daly, Beyond Growth (1996), introdução; Papa Francisco, Laudato si\' (2015), n. 49, 106–110, 139 e 190', link: LS,
    orientacao: `<p>Em Pigou, a divergência entre custo privado e custo social. Em Daly, a economia como subsistema. Na Laudato si', a crise socioambiental única e o paradigma tecnocrático.</p>`,
  },
  perguntas: [
    { p: 'O que é uma externalidade negativa?', r: 'Um custo causado a terceiros sem pagamento.' },
    { p: 'Qual a tese de Coase?', r: 'Com direitos definidos e custos de negociação baixos, as partes podem negociar solução eficiente.' },
    { p: 'O que diz a Laudato si\', n. 139?', r: 'Que há uma única e complexa crise socioambiental.' },
  ],
  exercicios: [
    mc('O imposto corretivo de externalidades é associado a:', ['Coase', 'Pigou', 'Daly', 'Ostrom'], 1, '1920.'),
    mc('"The Problem of Social Cost" (1960) é de:', ['Coase', 'Pigou', 'Hardin', 'Keynes'], 0, 'Negociação.'),
    mc('A economia de estado estacionário é defendida por:', ['Herman Daly', 'Adam Smith', 'Pinchot', 'Muir'], 0, 'Economia ecológica.'),
    mc('O ICMS Ecológico surgiu no:', ['Amazonas, 2000', 'Paraná, 1991', 'São Paulo, 1981', 'Bahia, 2010'], 1, 'Repasse a municípios.'),
    mc('O clamor da terra e o clamor dos pobres estão na Laudato si\', n.:', ['49', '118', '186', '240'], 0, 'Ecologia integral.'),
    disc('Proponha um instrumento econômico para um problema ambiental brasileiro e avalie vantagens e limites.', ['Problema', 'Instrumento', 'Vantagens', 'Limites']),
  ],
  resumo: ['Pigou: externalidade e imposto.', 'Coase: negociação.', 'Economia ambiental e ecológica (Daly).', 'ICMS Ecológico (1991); PSA (Lei 14.119/2021).', 'LS 49, 139: crise socioambiental única.'],
  referencias: [
    { texto: 'Arthur Pigou, A economia do bem-estar (1920).' },
    { texto: 'Ronald Coase, "The Problem of Social Cost" (1960).' },
    { texto: 'Herman Daly, Beyond Growth (1996).' },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: LS },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a proposta de instrumento', 'Ler os textos indicados'],
  revisao: [['Pigou', 'Imposto corretivo.'], ['Daly', 'Estado estacionário.'], ['LS 139', 'Crise única.']],
  avancado: {
    texto: `<h3>A curva de Kuznets ambiental</h3>
<p>Alguns estudos dos anos 1990 encontraram, para certos poluentes locais, uma relação em forma de U invertido: a poluição cresce com a renda e depois cai ${tag('fato')}. A relação não vale para todos os poluentes, especialmente o CO2, e sua interpretação causal é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Gene Grossman e Alan Krueger, "Economic Growth and the Environment" (1995).' }],
    exercicios: [
      mc('A curva de Kuznets ambiental tem forma de:', ['Reta', 'U invertido', 'Círculo', 'Degrau'], 1, 'Cresce e depois cai.'),
      mc('A relação vale de modo geral para o CO2?', ['Sim, sempre', 'Não, é contestada', 'Só na Europa', 'Só no Brasil'], 1, 'Debate.'),
      mc('Um estudo clássico sobre o tema é de:', ['Grossman e Krueger', 'Carson', 'Naess', 'Muir'], 0, '1995.'),
      disc('Discuta se o crescimento econômico basta para reduzir a poluição, com um exemplo brasileiro.', ['Curva explicada', 'Limites', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'ca3-3', titulo: 'Mudança climática: o que é medido, o que é atribuído e o que é debatido', duracao: '150 min',
  aprendera: ['Descrever as medidas de CO2 e de temperatura', 'Explicar o que é atribuição', 'Distinguir o consenso científico das questões abertas', 'Conhecer o perfil das emissões brasileiras'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O debate sobre o clima mistura fatos medidos, conclusões de alta confiança, projeções e escolhas políticas. Separar esses planos é o exercício central desta aula.</p>
<h3>O que é medido</h3>
<p>A concentração de CO2 na atmosfera era de cerca de 280 partes por milhão antes da industrialização; a série de Mauna Loa ultrapassou 400 ppm na década de 2010 e superou 420 ppm em 2023 ${tag('fato')}. O Sexto Relatório do IPCC estimou que a temperatura média da superfície em 2011–2020 foi cerca de 1,1 °C maior que em 1850–1900 ${tag('fato')}.</p>
<h3>O que é atribuído</h3>
<p>Atribuição é a análise das causas de uma mudança observada, comparando o clima real com simulações com e sem influência humana ${tag('fato')}. O IPCC concluiu que é inequívoco que a influência humana aqueceu a atmosfera, o oceano e a terra ${tag('fato')}.</p>
<h3>O que é debatido</h3>
<p>Permanecem em discussão científica a magnitude de certos efeitos regionais, a sensibilidade climática exata e a probabilidade de pontos de inflexão ${tag('debate')}. E pertencem ao debate político e ético a velocidade da transição energética, quem paga os custos, o papel de cada fonte de energia e o equilíbrio entre mitigação e adaptação ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>Segundo as estimativas do SEEG, a mudança de uso da terra (sobretudo desmatamento) e a agropecuária respondem pela maior parte das emissões brasileiras, ao contrário de países em que predomina a energia ${tag('fato')}. A <em>Laudato si'</em> trata o clima como bem comum, de todos e para todos (n. 23) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['ppm', 'Partes por milhão (em volume, para gases na atmosfera).'],
    ['Atribuição', 'Análise das causas de uma mudança climática observada.'],
    ['Mitigação', 'Redução das emissões ou aumento da remoção de gases de efeito estufa.'],
    ['Adaptação', 'Ajuste a efeitos atuais ou esperados da mudança do clima.'],
    ['Ponto de inflexão', 'Limiar a partir do qual uma mudança se torna autossustentada.'],
  ],
  exemplos: `<p><strong>Separando os planos numa frase:</strong> "O CO2 passou de 280 para mais de 420 ppm (medição), principalmente pela queima de combustíveis fósseis e pelo desmatamento (atribuição de alta confiança); por isso o Brasil deve zerar o desmatamento até tal ano (proposta política)." A terceira parte depende de valores e de escolhas sobre custos e prioridades.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção-Quadro sobre Mudança do Clima, de 1992, reúne quase todos os países nas Conferências das Partes (COPs) anuais ${tag('fato')}. <strong>No Brasil:</strong> a COP 30 foi realizada em Belém, em 2025 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o aumento de CO2 é atribuído à ação humana', tag: 'argumento',
    premissas: ['A quantidade de carbono emitida por combustíveis fósseis e desmatamento é conhecida por estatísticas de produção e uso da terra.', 'O aumento medido do CO2 atmosférico é menor que o emitido, o restante sendo absorvido por oceanos e vegetação.', 'A composição isotópica do carbono atmosférico mudou de modo compatível com carbono de origem fóssil.'],
    conclusao: 'Logo, o aumento do CO2 atmosférico deve-se principalmente às emissões humanas.',
    nota: 'O argumento combina contabilidade de massa e assinatura isotópica, duas linhas independentes de evidência.',
  },
  objecoes: [
    { objecao: 'O clima sempre mudou; logo a mudança atual é natural.', tag: 'debate',
      resposta: 'O clima mudou no passado por causas naturais, como variações orbitais, vulcanismo e mudanças no CO2. Justamente porque se conhecem essas causas, é possível testar se explicam a mudança recente; os estudos de atribuição mostram que, sem a influência humana, não se reproduz o aquecimento observado. Que haja causas naturais no passado não exclui causas humanas no presente.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio sobre o que a ciência do clima afirma com alta confiança e o que pertence ao debate político sobre respostas, citando o IPCC e um dado brasileiro.</p>`,
  fonte: {
    obra: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I, Resumo para formuladores de políticas (2021); Papa Francisco, Laudato si\' (2015), n. 23–26', link: { url: 'https://www.ipcc.ch', rotulo: 'IPCC' },
    orientacao: `<p>No Resumo do IPCC, localize as afirmações marcadas como de alta confiança e as faixas de projeção. Na Laudato si', o clima como bem comum e a relação com os pobres.</p>`,
  },
  perguntas: [
    { p: 'Qual era a concentração pré-industrial de CO2?', r: 'Cerca de 280 ppm.' },
    { p: 'O que concluiu o IPCC sobre a influência humana?', r: 'Que é inequívoco que ela aqueceu a atmosfera, o oceano e a terra.' },
    { p: 'Quais setores respondem pela maior parte das emissões brasileiras?', r: 'Mudança de uso da terra e agropecuária.' },
  ],
  exercicios: [
    mc('O aquecimento de 2011–2020 em relação a 1850–1900 foi de cerca de:', ['0,1 °C', '1,1 °C', '4 °C', '10 °C'], 1, 'IPCC AR6.'),
    mc('A concentração de CO2 superou 420 ppm em:', ['1958', '1990', '2023', '2050'], 2, 'Mauna Loa.'),
    mc('Atribuição compara o clima real com simulações:', ['Só naturais', 'Com e sem influência humana', 'De outros planetas', 'Só futuras'], 1, 'Método.'),
    mc('"Quem deve pagar a transição energética" é questão:', ['Só física', 'Política e ética', 'Já resolvida', 'Estatística'], 1, 'Debate.'),
    mc('O clima como bem comum está na Laudato si\', n.:', ['23', '90', '139', '186'], 0, 'De todos e para todos.'),
    disc('Escreva o ensaio separando o que a ciência do clima afirma com alta confiança e o que pertence ao debate político, com o IPCC e um dado brasileiro.', ['Afirmações de alta confiança', 'Questões abertas', 'Debate político', 'Dado brasileiro']),
  ],
  resumo: ['CO2: 280 → mais de 420 ppm.', 'Aquecimento ~1,1 °C (2011–2020).', 'Atribuição: influência humana inequívoca.', 'Debate: regionais, custos, transição.', 'Brasil: uso da terra e agropecuária; LS 23.'],
  referencias: [
    { texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021).', link: { url: 'https://www.ipcc.ch', rotulo: 'IPCC' } },
    { texto: 'Sistema de Estimativas de Emissões e Remoções de Gases de Efeito Estufa (SEEG).' },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: LS },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler o Resumo do IPCC'],
  revisao: [['280 ppm', 'Pré-industrial.'], ['1,1 °C', 'AR6.'], ['LS 23', 'Clima, bem comum.']],
  avancado: {
    texto: `<h3>Pontos de inflexão na Amazônia</h3>
<p>Pesquisadores como Carlos Nobre e Thomas Lovejoy propuseram que, com desmatamento acumulado de 20% a 25% e aquecimento, partes da Amazônia poderiam passar de floresta a vegetação mais aberta ${tag('hipotese')}. A existência e o valor desse limiar são pesquisados e discutidos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Thomas Lovejoy e Carlos Nobre, "Amazon Tipping Point" (2018).' }],
    exercicios: [
      mc('O ponto de inflexão da Amazônia foi proposto por:', ['Nobre e Lovejoy', 'Carson e Hardin', 'Humboldt e Bonpland', 'Pinchot e Muir'], 0, '2018.'),
      mc('O limiar proposto de desmatamento é de cerca de:', ['5%', '20% a 25%', '60%', '90%'], 1, 'Hipótese.'),
      mc('A tese do ponto de inflexão é:', ['Fato medido', 'Hipótese em pesquisa', 'Doutrina', 'Lei'], 1, 'Debate.'),
      disc('Explique o mecanismo proposto para o ponto de inflexão da Amazônia e que dados poderiam testá-lo.', ['Mecanismo', 'Dados', 'Incertezas', 'Consequências'])],
  },
}),

aula({
  id: 'ca3-4', titulo: 'Desenvolvimento e conservação no Brasil; justiça entre gerações', duracao: '150 min',
  aprendera: ['Explicar reserva legal, APP e Cadastro Ambiental Rural', 'Interpretar a série de desmatamento da Amazônia', 'Avaliar conflitos entre desenvolvimento e conservação', 'Explicar a justiça entre gerações'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil é grande produtor de alimentos e energia e abriga grande parte da biodiversidade do planeta. Como conciliar produção e conservação?</p>
<h3>O Código Florestal</h3>
<p>A Lei nº 12.651/2012 exige que imóveis rurais mantenham uma reserva legal de vegetação nativa: 80% em áreas de floresta na Amazônia Legal, 35% em áreas de cerrado na Amazônia Legal e 20% nas demais regiões e formações ${tag('fato')}. Define também áreas de preservação permanente (APP), como margens de rios, nascentes e topos de morro, e criou o Cadastro Ambiental Rural (CAR) ${tag('fato')}.</p>
<h3>O desmatamento da Amazônia</h3>
<p>Segundo o PRODES, a taxa anual de desmatamento da Amazônia Legal caiu de cerca de 27 mil km² em 2004 para menos de 5 mil km² em 2012, após o Plano de Ação para Prevenção e Controle do Desmatamento (2004), e voltou a subir na década seguinte ${tag('fato')}. As causas da queda — fiscalização, crédito condicionado, preços agrícolas — são estudadas e debatidas ${tag('debate')}.</p>
<h3>Conflitos</h3>
<p>Grandes obras, como a usina hidrelétrica de Belo Monte, no rio Xingu, envolvem benefícios energéticos e impactos sobre ecossistemas e populações locais, avaliados de modos diferentes pelas partes ${tag('debate')}.</p>
<h3>Justiça entre gerações</h3>
<p>A Constituição impõe ao poder público e à coletividade o dever de defender o meio ambiente para as presentes e futuras gerações (art. 225) ${tag('fato')}. A <em>Laudato si'</em> ensina que a noção de bem comum inclui as gerações futuras e que se trata de questão de justiça (n. 159) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Reserva legal', 'Parte do imóvel rural que deve manter vegetação nativa.'],
    ['APP', 'Área de preservação permanente, como margens de rios e nascentes.'],
    ['CAR', 'Cadastro Ambiental Rural, registro eletrônico dos imóveis rurais.'],
    ['Taxa de desmatamento', 'Área de vegetação nativa suprimida num período.'],
    ['Justiça intergeracional', 'Dever de considerar as gerações futuras nas decisões presentes.'],
  ],
  exemplos: `<p><strong>Calculando a reserva legal:</strong> um imóvel de 1.000 hectares em área de floresta na Amazônia Legal deve manter 800 hectares de reserva legal; em área de cerrado na Amazônia Legal, 350 hectares; num imóvel no Paraná, 200 hectares. As APPs têm regras próprias e, em certos casos, podem ser computadas na reserva legal.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Moratória da Soja, acordo de 2006 entre empresas e organizações, comprometeu-se a não comprar soja de áreas desmatadas na Amazônia após a data de referência ${tag('fato')}. <strong>No Brasil:</strong> o Fundo Amazônia, criado em 2008, recebe doações para ações de prevenção e combate ao desmatamento ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o aumento da produtividade pode reduzir a pressão sobre a floresta', tag: 'argumento',
    premissas: ['A produção agrícola depende da área cultivada e da produtividade por hectare.', 'Se a produtividade aumenta, é possível produzir mais sem ampliar a área.', 'Há grandes áreas de pastagem degradada que poderiam ser recuperadas.'],
    conclusao: 'Logo, aumentar a produtividade e recuperar pastagens pode conciliar produção e redução do desmatamento.',
    nota: 'O efeito não é automático: produtividade maior pode também tornar a expansão mais lucrativa; por isso a fiscalização continua necessária.',
  },
  objecoes: [
    { objecao: 'Países ricos desmataram para se desenvolver; o Brasil tem o mesmo direito.', tag: 'debate',
      resposta: 'O argumento de justiça histórica tem peso e aparece nas negociações internacionais. Mas os custos do desmatamento recaem também sobre os próprios brasileiros, por exemplo no regime de chuvas e na perda de biodiversidade, e há evidência de que produção pode crescer sem novo desmatamento. A questão é como repartir custos, não se o dano existe.' },
  ],
  aplicacao: `<p>Com dados do PRODES, faça um gráfico da taxa anual de desmatamento da Amazônia Legal desde 2004 e proponha duas explicações para as variações, indicando o dado que testaria cada uma.</p>`,
  fonte: {
    obra: 'Lei nº 12.651/2012 (Código Florestal), arts. 3º, 4º e 12; INPE, série do PRODES; Constituição de 1988, art. 225', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' },
    orientacao: `<p>No Código Florestal, os percentuais de reserva legal (art. 12) e as APPs (art. 4º). No PRODES, a série anual. Na Constituição, o dever com as futuras gerações.</p>`,
  },
  perguntas: [
    { p: 'Qual a reserva legal em área de floresta na Amazônia Legal?', r: '80%.' },
    { p: 'O que aconteceu com o desmatamento entre 2004 e 2012?', r: 'Caiu de cerca de 27 mil km² para menos de 5 mil km² por ano.' },
    { p: 'O que diz a Laudato si\', n. 159?', r: 'Que o bem comum inclui as gerações futuras e que se trata de justiça.' },
  ],
  exercicios: [
    mc('Num imóvel de 500 ha em cerrado na Amazônia Legal, a reserva legal é de:', ['100 ha', '175 ha', '400 ha', '50 ha'], 1, '35%.'),
    mc('Margens de rios são, pelo Código Florestal:', ['Reserva legal', 'APP', 'Área urbana', 'Terra devoluta'], 1, 'Art. 4º.'),
    mc('O Cadastro Ambiental Rural foi criado pela:', ['Lei 6.938/1981', 'Lei 12.651/2012', 'Lei 9.985/2000', 'CF 1988'], 1, 'Código Florestal.'),
    mc('O dever com as futuras gerações está na Constituição, art.:', ['5º', '170', '225', '231'], 2, 'Meio ambiente.'),
    mc('As causas da queda do desmatamento após 2004 são:', ['Consenso único', 'Estudadas e debatidas', 'Desconhecidas', 'Irrelevantes'], 1, 'Debate.'),
    disc('Faça o gráfico do desmatamento da Amazônia desde 2004 e proponha duas explicações para as variações, com os testes.', ['Dados do PRODES', 'Gráfico', 'Duas explicações', 'Testes propostos']),
  ],
  resumo: ['Reserva legal: 80%, 35%, 20%.', 'APP e CAR.', 'PRODES: queda 2004–2012 e nova alta.', 'Belo Monte: conflito.', 'CF art. 225; LS 159.'],
  referencias: [
    { texto: 'Lei nº 12.651, de 2012 (Código Florestal).' },
    { texto: 'INPE, PRODES.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 159–162.', link: LS },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o gráfico e as explicações', 'Consultar os dados do PRODES'],
  revisao: [['80%', 'Floresta na Amazônia Legal.'], ['2004–2012', 'Queda.'], ['LS 159', 'Gerações futuras.']],
  avancado: {
    texto: `<h3>Taxa de desconto e gerações futuras</h3>
<p>Na análise de custo-benefício, valores futuros são descontados por uma taxa: com 5% ao ano, R$ 100 daqui a 50 anos valem cerca de R$ 9 hoje; com 1%, cerca de R$ 61 ${tag('fato')}. O Relatório Stern (2006) usou taxa baixa e recomendou ação climática forte; William Nordhaus, com taxas maiores, recomendou ação mais gradual ${tag('fato')}. A escolha da taxa envolve juízos éticos sobre as gerações futuras ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Nicholas Stern, The Economics of Climate Change (2006).' }],
    exercicios: [
      mc('Com desconto de 5% ao ano, R$ 100 em 50 anos valem hoje cerca de:', ['R$ 9', 'R$ 50', 'R$ 95', 'R$ 500'], 0, '100 ÷ 1,05^50.'),
      mc('O Relatório Stern usou taxa de desconto:', ['Alta', 'Baixa', 'Negativa', 'Nenhuma'], 1, '2006.'),
      mc('A escolha da taxa de desconto envolve:', ['Só matemática', 'Juízos éticos', 'Só física', 'Nada'], 1, 'Debate.'),
      disc('Explique como a taxa de desconto afeta a avaliação de políticas climáticas e relacione com LS 159.', ['Conceito', 'Exemplo numérico', 'Stern e Nordhaus', 'Juízo ético'])],
  },
}),

avaliacao('ca3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes do pensamento ambiental e os grandes debates do módulo, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo das correntes e o ensaio sobre o clima.</li><li>Refaça os cálculos de reserva legal e de desconto.</li></ul>`,
[
  disc('Compare duas correntes do pensamento ambiental (conservacionismo, preservacionismo, ecologia profunda, economia ambiental, economia ecológica ou ecologia integral) quanto ao fundamento do valor da natureza e ao lugar do ser humano.', ['Duas correntes', 'Fundamento do valor', 'Lugar do ser humano', 'Avaliação']),
  disc('Analise um conflito entre desenvolvimento e conservação no Brasil distinguindo dados, projeções, juízos de valor e ensino da Igreja.', ['Conflito descrito', 'Dados e projeções', 'Juízos de valor', 'Doutrina']),
]),
];
