// Demografia III — escolas e debates (etapas 6 e 7 do percurso de Demografia).
// Neomalthusianismo, eugenia e controle populacional; explicações econômicas e culturais da fecundidade;
// baixa fecundidade e envelhecimento; família, vida e doutrina da Igreja.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dm3-1', titulo: 'Neomalthusianismo, eugenia e controle populacional: uma história crítica', duracao: '150 min',
  aprendera: ['Distinguir malthusianismo e neomalthusianismo', 'Conhecer o movimento eugenista e seus efeitos', 'Analisar casos de controle populacional coercitivo', 'Avaliar políticas demográficas com o critério da dignidade da pessoa'],
  prereq: ['Demografia II (módulo DM2)'],
  explicacao: `
<h3>O problema</h3>
<p>No século XX, o medo da superpopulação e a vontade de "melhorar" a população levaram a políticas que violaram gravemente os direitos das pessoas. Como isso aconteceu?</p>
<h3>Neomalthusianismo</h3>
<p>O neomalthusianismo, a partir do fim do século XIX, defendeu a contracepção como meio de evitar a pobreza causada pelo crescimento populacional, contra a posição do próprio Malthus ${tag('fato')}.</p>
<h3>Eugenia</h3>
<p>A eugenia, termo criado por Francis Galton em 1883, propunha melhorar a "qualidade" hereditária da população ${tag('fato')}. Inspirou leis de esterilização compulsória em vários países no início do século XX e foi levada ao extremo pelo regime nazista ${tag('fato')}. No Brasil, Renato Kehl liderou o movimento eugenista nas décadas de 1910 a 1930 ${tag('fato')}. Pio XI, na <em>Casti connubii</em> (1930), condenou as leis de esterilização eugênica ${tag('doutrina')}.</p>
<h3>Controle coercitivo</h3>
<p>Na Índia, durante o estado de emergência (1975–1977), houve campanhas de esterilização em massa com coerção ${tag('fato')}. Na China, a política do filho único (1980–2015) recorreu a multas, pressões e abortos e esterilizações forçados ${tag('fato')}. No Peru, nos anos 1990, um programa de esterilizações atingiu sobretudo mulheres pobres e indígenas, muitas sem consentimento adequado ${tag('fato')}.</p>
<h3>Critério</h3>
<p>A doutrina ensina que a decisão sobre o número de filhos cabe aos pais e que o Estado não pode impor meios contrários à lei moral (GS 87; CIC 2372) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Neomalthusianismo', 'Defesa da contracepção para conter o crescimento populacional.'],
    ['Eugenia', 'Projeto de "melhorar" hereditariamente a população (Galton, 1883).'],
    ['Esterilização compulsória', 'Esterilização imposta sem consentimento livre.'],
    ['Coerção', 'Uso de força, ameaça ou pressão para obter um comportamento.'],
    ['Consentimento livre e esclarecido', 'Concordância informada, sem pressão.'],
  ],
  exemplos: `<p><strong>Distinguindo políticas:</strong> oferecer educação, saúde materna e informação sobre a fecundidade respeita a decisão dos casais; pagar ou punir para que tenham menos (ou mais) filhos pressiona; esterilizar sem consentimento viola direitos fundamentais. A diferença está em quem decide e com que meios.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Universal dos Direitos Humanos (1948) afirma o direito de fundar uma família (art. 16) ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 9.263/1996 regulamenta o planejamento familiar e proíbe seu uso para controle demográfico ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o fim demográfico não justifica meios coercitivos', tag: 'argumento',
    premissas: ['A decisão de ter filhos pertence à esfera mais íntima da pessoa e do casal.', 'Coagir essa decisão trata as pessoas como meios para um objetivo coletivo.', 'Um fim bom não justifica meios que violam a dignidade da pessoa (CIC 1753).'],
    conclusao: 'Logo, nenhuma meta demográfica justifica coerção sobre a fecundidade.',
    nota: 'O argumento vale tanto contra políticas de redução quanto contra políticas coercitivas de aumento da natalidade.',
  },
  objecoes: [
    { objecao: 'Sem controle, países pobres nunca sairiam da pobreza.', tag: 'debate',
      resposta: 'A fecundidade caiu em muitos países sem coerção, com educação, saúde, urbanização e redução da mortalidade infantil. Os programas coercitivos produziram abusos graves e não são condição necessária do desenvolvimento. A experiência sugere que desenvolvimento humano reduz a fecundidade mais do que a coerção.' },
  ],
  aplicacao: `<p>Analise um caso histórico de política demográfica coercitiva: objetivos, meios, vítimas, resultados e o juízo moral à luz de GS 87 e CIC 2372.</p>`,
  fonte: {
    obra: 'Pio XI, Casti connubii (1930), nn. 68–71; Lei nº 9.263/1996; Concílio Vaticano II, Gaudium et spes (1965), n. 87', link: null,
    orientacao: `<p>Na Casti connubii, a condenação da esterilização eugênica. Na Lei 9.263, a proibição do uso do planejamento familiar para controle demográfico. Na Gaudium et spes, o papel dos pais.</p>`,
  },
  perguntas: [
    { p: 'Quem criou o termo eugenia?', r: 'Francis Galton, em 1883.' },
    { p: 'Que documento papal condenou as leis de esterilização eugênica?', r: 'A Casti connubii (1930), de Pio XI.' },
    { p: 'O que proíbe a Lei 9.263/1996?', r: 'O uso do planejamento familiar para controle demográfico.' },
  ],
  exercicios: [
    mc('O neomalthusianismo defendia:', ['A restrição moral', 'A contracepção', 'Mais filhos', 'A guerra'], 1, 'Contra Malthus.'),
    mc('O movimento eugenista no Brasil foi liderado por:', ['Renato Kehl', 'Oswaldo Cruz', 'Josué de Castro', 'Darcy Ribeiro'], 0, '1910–1930.'),
    mc('A política do filho único na China vigorou de:', ['1950 a 1970', '1980 a 2015', '1990 a 2000', '2000 a 2020'], 1, 'Coerção.'),
    mc('O direito de fundar família está na Declaração Universal, art.:', ['3', '16', '25', '30'], 1, '1948.'),
    mc('Segundo o argumento da aula, a coerção sobre a fecundidade é:', ['Justificável para reduzir', 'Justificável para aumentar', 'Injustificável em ambos os sentidos', 'Indiferente'], 2, 'Dignidade.'),
    disc('Analise um caso de política demográfica coercitiva com objetivos, meios, vítimas, resultados e juízo moral.', ['Objetivos e meios', 'Vítimas', 'Resultados', 'Juízo moral']),
  ],
  resumo: ['Neomalthusianismo: contracepção.', 'Eugenia (Galton, 1883); Kehl no Brasil.', 'Casti connubii (1930).', 'Índia, China, Peru.', 'Lei 9.263/1996; GS 87.'],
  referencias: [
    { texto: 'Pio XI, Casti connubii (1930).' },
    { texto: 'Lei nº 9.263, de 1996 (planejamento familiar).' },
    { texto: 'Matthew Connelly, Fatal Misconception (2008).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do caso', 'Ler os textos indicados'],
  revisao: [['Galton', 'Eugenia, 1883.'], ['Casti connubii', 'Contra esterilização eugênica.'], ['Lei 9.263', 'Sem controle demográfico.']],
  avancado: {
    texto: `<h3>Chesterton contra a eugenia</h3>
<p>G. K. Chesterton publicou em 1922 <em>Eugenics and Other Evils</em>, criticando a eugenia como intromissão do Estado e de "especialistas" na vida das famílias, sobretudo dos pobres ${tag('fato')}. Na época, a eugenia era apoiada por muitos cientistas e intelectuais, o que mostra o risco de confundir prestígio científico com legitimidade moral ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'G. K. Chesterton, Eugenics and Other Evils (1922).' }],
    exercicios: [
      mc('Eugenics and Other Evils é de:', ['Chesterton', 'Galton', 'Belloc', 'Lewis'], 0, '1922.'),
      mc('Na época, a eugenia era:', ['Rejeitada por todos', 'Apoiada por muitos cientistas', 'Desconhecida', 'Proibida'], 1, 'Prestígio.'),
      mc('A lição do caso é não confundir:', ['Ciência e arte', 'Prestígio científico e legitimidade moral', 'Fé e razão', 'Estado e governo'], 1, 'Interpretação.'),
      disc('Explique por que o apoio de cientistas não bastava para tornar a eugenia legítima.', ['Caso', 'Distinção', 'Critério moral', 'Lição atual'])],
  },
}),

aula({
  id: 'dm3-2', titulo: 'Explicações da fecundidade: economia, cultura e valores', duracao: '150 min',
  aprendera: ['Expor a explicação econômica da fecundidade de Gary Becker', 'Conhecer os resultados do Projeto Europeu de Fecundidade de Princeton', 'Distinguir explicações econômicas e culturais', 'Explicar o bônus demográfico'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que as famílias têm menos filhos? Por cálculo de custos, por mudança de valores, por ambos?</p>
<h3>Explicação econômica</h3>
<p>Gary Becker, a partir de 1960, aplicou a análise econômica à família: os pais escolheriam entre "quantidade" e "qualidade" dos filhos, e o aumento do custo de criar e educar filhos, sobretudo do tempo das mães com maior escolaridade e salário, reduziria o número de filhos ${tag('fato')}.</p>
<h3>Explicação cultural</h3>
<p>O Projeto Europeu de Fecundidade, da Universidade de Princeton, coordenado por Ansley Coale, estudou a queda da fecundidade em centenas de províncias europeias e observou que ela se difundiu seguindo fronteiras linguísticas e culturais, e não apenas o nível de desenvolvimento econômico ${tag('fato')}. Isso indica o peso das ideias, dos valores e da religião ${tag('interpretacao')}.</p>
<h3>Bônus demográfico</h3>
<p>Quando a fecundidade cai, por algumas décadas a proporção de pessoas em idade ativa aumenta, o que pode favorecer o crescimento econômico se houver emprego e investimento; é o bônus demográfico ${tag('fato')}. Depois, o envelhecimento reduz essa proporção ${tag('fato')}.</p>`,
  vocabulario: [
    ['Custo de oportunidade', 'O que se deixa de ganhar ao escolher uma alternativa.'],
    ['Quantidade e qualidade', 'Em Becker, a escolha entre mais filhos e mais investimento em cada um.'],
    ['Difusão', 'Propagação de comportamentos por contato e imitação.'],
    ['Bônus demográfico', 'Fase de alta proporção de pessoas em idade ativa.'],
    ['Fecundidade desejada', 'Número de filhos que as pessoas dizem querer.'],
  ],
  exemplos: `<p><strong>Duas províncias vizinhas:</strong> com renda, urbanização e escolaridade parecidas, uma província de língua e religião diferentes reduz a fecundidade décadas depois da outra. Uma explicação só econômica não daria conta; a difusão cultural ajuda a entender. Na maior parte dos casos reais, fatores econômicos e culturais atuam juntos.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas em vários países mostram que muitas pessoas têm menos filhos do que dizem desejar ${tag('fato')}. <strong>No Brasil:</strong> a telenovela é apontada por alguns estudos como fator de difusão de modelos de família menores ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a diferença entre filhos desejados e tidos interessa às políticas', tag: 'argumento',
    premissas: ['Se as famílias têm menos filhos do que desejam, há obstáculos à sua decisão.', 'Obstáculos como custo da moradia, insegurança no emprego e falta de creches podem ser reduzidos.', 'Reduzir obstáculos respeita a decisão dos pais, sem coagi-los.'],
    conclusao: 'Logo, políticas que removem obstáculos à fecundidade desejada são compatíveis com a liberdade dos casais.',
    nota: 'É o princípio do apoio às famílias, oposto tanto ao controle coercitivo quanto à indiferença.',
  },
  objecoes: [
    { objecao: 'As pessoas têm poucos filhos só por egoísmo.', tag: 'debate',
      resposta: 'Valores pesam, mas as pesquisas mostram também obstáculos materiais e sociais — moradia, renda, trabalho, conciliação entre emprego e família — e muitas pessoas desejam mais filhos do que têm. Julgar as famílias sem considerar essas condições é injusto e não ajuda a compreender.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um quadro comparativo das interpretações (malthusiana, neomalthusiana, transição, segunda transição, econômica de Becker, otimista) indicando como relacionam população, recursos e bem-estar.</p>`,
  fonte: {
    obra: 'Gary Becker, "An Economic Analysis of Fertility" (1960); Ansley Coale e Susan Watkins (orgs.), The Decline of Fertility in Europe (1986)', link: null,
    orientacao: `<p>Em Becker, a escolha entre quantidade e qualidade. Em Coale e Watkins, os mapas da difusão da queda da fecundidade. Compare as explicações.</p>`,
  },
  perguntas: [
    { p: 'O que propôs Gary Becker sobre a fecundidade?', r: 'Que os pais escolhem entre quantidade e qualidade dos filhos segundo custos e benefícios.' },
    { p: 'O que encontrou o Projeto Europeu de Fecundidade?', r: 'Que a queda se difundiu seguindo fronteiras linguísticas e culturais.' },
    { p: 'O que é o bônus demográfico?', r: 'A fase de alta proporção de pessoas em idade ativa após a queda da fecundidade.' },
  ],
  exercicios: [
    mc('"An Economic Analysis of Fertility" é de:', ['Becker', 'Coale', 'Malthus', 'Notestein'], 0, '1960.'),
    mc('O Projeto Europeu de Fecundidade foi da Universidade de:', ['Harvard', 'Princeton', 'Oxford', 'Sorbonne'], 1, 'Coale.'),
    mc('A difusão cultural da queda da fecundidade seguiu fronteiras:', ['Econômicas apenas', 'Linguísticas e culturais', 'Climáticas', 'Militares'], 1, 'Resultado.'),
    mc('No bônus demográfico, aumenta a proporção de:', ['Idosos', 'Crianças', 'Pessoas em idade ativa', 'Migrantes'], 2, 'Estrutura etária.'),
    mc('Remover obstáculos à fecundidade desejada é:', ['Coerção', 'Compatível com a liberdade dos casais', 'Ilegal', 'Controle'], 1, 'Apoio.'),
    disc('Apresente o quadro comparativo das seis interpretações demográficas.', ['Seis interpretações', 'População e recursos', 'Bem-estar', 'Atribuições corretas']),
  ],
  resumo: ['Becker: quantidade e qualidade.', 'Princeton: difusão cultural.', 'Fatores econômicos e culturais juntos.', 'Bônus demográfico.', 'Fecundidade desejada.'],
  referencias: [
    { texto: 'Gary Becker, "An Economic Analysis of Fertility" (1960).' },
    { texto: 'Ansley Coale e Susan Watkins (orgs.), The Decline of Fertility in Europe (1986).' },
    { texto: 'Gary Becker, A Treatise on the Family (1981).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os textos indicados'],
  revisao: [['Becker', 'Custos.'], ['Princeton', 'Difusão.'], ['Bônus', 'Idade ativa.']],
  avancado: {
    texto: `<h3>Religião e fecundidade</h3>
<p>Diversos estudos encontram, em vários países, fecundidade maior entre pessoas que praticam regularmente uma religião do que entre as não praticantes, mesmo controlando renda e escolaridade ${tag('interpretacao')}. A interpretação causal é debatida: valores religiosos, redes comunitárias de apoio e seleção podem atuar juntos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura de demografia sobre religiosidade e fecundidade.' }],
    exercicios: [
      mc('Estudos encontram fecundidade maior entre:', ['Não praticantes', 'Praticantes regulares de uma religião', 'Ninguém', 'Só nos EUA'], 1, 'Interpretação.'),
      mc('A interpretação causal é:', ['Certa', 'Debatida', 'Proibida', 'Irrelevante'], 1, 'Debate.'),
      mc('Um mecanismo possível é:', ['Clima', 'Redes comunitárias de apoio', 'Altitude', 'Sorte'], 1, 'Apoio.'),
      disc('Proponha como testar se a prática religiosa influi na fecundidade, controlando outros fatores.', ['Hipótese', 'Variáveis', 'Dados', 'Limites'])],
  },
}),

aula({
  id: 'dm3-3', titulo: 'Baixa fecundidade e envelhecimento: um novo desafio', duracao: '150 min',
  aprendera: ['Descrever a baixa fecundidade em vários países', 'Explicar as consequências do envelhecimento', 'Conhecer respostas de políticas familiares', 'Avaliar a situação brasileira'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>No século XX temia-se a superpopulação; no XXI, muitos países enfrentam fecundidade muito baixa e envelhecimento rápido. O que isso significa?</p>
<h3>Os números</h3>
<p>A Coreia do Sul registrou em 2023 taxa de fecundidade total de cerca de 0,7, uma das mais baixas do mundo ${tag('fato')}. Japão, Itália, Espanha e outros países estão há décadas bem abaixo da reposição ${tag('fato')}. O Brasil está abaixo da reposição desde o início do século XXI, com TFT em torno de 1,6 ${tag('fato')}.</p>
<h3>Consequências</h3>
<p>Com menos nascimentos e vida mais longa, a proporção de idosos aumenta: crescem os gastos com aposentadorias e saúde, diminui a população em idade ativa, e muitas regiões perdem população ${tag('fato')}. Também há mudanças familiares: menos irmãos, primos e filhos para cuidar dos idosos ${tag('interpretacao')}.</p>
<h3>Respostas</h3>
<p>Países adotaram licenças parentais, creches, auxílios por filho, apoio à moradia e incentivos fiscais; os efeitos sobre a fecundidade costumam ser modestos e debatidos ${tag('debate')}. A imigração compensa parcialmente a falta de trabalhadores, com desafios próprios ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Papa Francisco falou de "inverno demográfico" e pediu políticas que apoiem as famílias e a natalidade ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Fecundidade muito baixa', 'TFT bem abaixo de 1,5.'],
    ['Envelhecimento populacional', 'Aumento da proporção de idosos.'],
    ['Inverno demográfico', 'Expressão para fecundidade persistentemente baixa.'],
    ['Licença parental', 'Afastamento remunerado do trabalho para cuidar de filhos.'],
    ['Índice de envelhecimento', 'Idosos por 100 jovens.'],
  ],
  exemplos: `<p><strong>Gerações que encolhem:</strong> com TFT de 1,0, cada geração de filhos é aproximadamente a metade da geração dos pais; em três gerações, 100 avós teriam cerca de 12 bisnetos. Mesmo com imigração e longevidade, o efeito sobre a estrutura etária é profundo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ONU projeta o pico da população mundial para a segunda metade do século XXI ${tag('interpretacao')}. <strong>No Brasil:</strong> o IBGE projeta que a população brasileira deve começar a diminuir nas próximas décadas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a baixa fecundidade pressiona os sistemas de previdência', tag: 'argumento',
    premissas: ['Em sistemas de repartição, os trabalhadores ativos financiam as aposentadorias dos inativos.', 'Com baixa fecundidade e maior longevidade, há menos ativos por aposentado.', 'Menos contribuintes por beneficiário exigem mais contribuição, menos benefício ou outra fonte de recursos.'],
    conclusao: 'Logo, a baixa fecundidade persistente pressiona os sistemas de previdência por repartição.',
    nota: 'Produtividade, emprego e idade de aposentadoria também influem no equilíbrio.',
  },
  objecoes: [
    { objecao: 'Menos gente é sempre melhor para o meio ambiente e para todos.', tag: 'debate',
      resposta: 'O impacto ambiental depende mais do padrão de consumo e da tecnologia do que só do número de pessoas. E sociedades com fecundidade muito baixa enfrentam problemas reais de cuidado aos idosos, financiamento e vitalidade social. O bem comum exige olhar ambos os lados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio sobre a pergunta "a queda da fecundidade é um problema? Para quem e por quê?", com dados, distinguindo dado demográfico, juízo de valor e doutrina.</p>`,
  fonte: {
    obra: 'Nações Unidas, World Population Prospects (edição mais recente); IBGE, Projeções da população', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Na ONU, a TFT e a população projetada de três países de baixa fecundidade. No IBGE, a projeção para o Brasil.</p>`,
  },
  perguntas: [
    { p: 'Qual a TFT da Coreia do Sul em 2023?', r: 'Cerca de 0,7.' },
    { p: 'Qual a TFT aproximada do Brasil?', r: 'Em torno de 1,6.' },
    { p: 'O que é "inverno demográfico"?', r: 'Expressão para fecundidade persistentemente baixa.' },
  ],
  exercicios: [
    mc('Com TFT de 1,0, cada geração tem cerca de quanto da anterior?', ['O dobro', 'A metade', 'O mesmo', 'Um décimo'], 1, '1,0 ÷ 2,1.'),
    mc('Em sistemas de repartição, as aposentadorias são pagas por:', ['Poupança individual', 'Contribuições dos ativos', 'Loteria', 'Nada'], 1, 'Repartição.'),
    mc('Os efeitos de políticas pró-natalidade costumam ser:', ['Enormes', 'Modestos e debatidos', 'Nulos sempre', 'Proibidos'], 1, 'Debate.'),
    mc('A expressão "inverno demográfico" foi usada pelo:', ['Papa Francisco', 'Malthus', 'Ehrlich', 'IBGE'], 0, 'Doutrina.'),
    mc('O impacto ambiental depende sobretudo de:', ['Só o número de pessoas', 'Consumo e tecnologia', 'Clima', 'Idade'], 1, 'Argumento.'),
    disc('Escreva o ensaio "a queda da fecundidade é um problema?", distinguindo dado, juízo e doutrina.', ['Dados', 'Juízo de valor', 'Doutrina', 'Conclusão']),
  ],
  resumo: ['Coreia do Sul ~0,7; Brasil ~1,6.', 'Envelhecimento e previdência.', 'Políticas: efeitos modestos.', 'Imigração.', 'Inverno demográfico.'],
  referencias: [
    { texto: 'Nações Unidas, World Population Prospects.' },
    { texto: 'IBGE, Projeções da população.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Papa Francisco, discurso aos Estados Gerais da Natalidade (2023).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Consultar os dados oficiais'],
  revisao: [['0,7', 'Coreia do Sul.'], ['Repartição', 'Ativos pagam.'], ['Inverno demográfico', 'Francisco.']],
  avancado: {
    texto: `<h3>A experiência da Hungria e da França</h3>
<p>A França mantém há décadas políticas familiares amplas e uma das maiores fecundidades da Europa, embora também abaixo da reposição ${tag('fato')}. A Hungria ampliou benefícios a famílias a partir da década de 2010, e sua TFT subiu por alguns anos ${tag('fato')}. Atribuir as variações às políticas, e não a outros fatores, é difícil e debatido ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura comparada sobre políticas familiares na Europa.' }],
    exercicios: [
      mc('A França tem fecundidade, na Europa:', ['Das mais baixas', 'Das mais altas', 'Igual à média', 'Nula'], 1, 'Políticas familiares.'),
      mc('A TFT húngara, após ampliação de benefícios:', ['Caiu muito', 'Subiu por alguns anos', 'Ficou igual', 'Desapareceu'], 1, 'Década de 2010.'),
      mc('Atribuir variações às políticas é:', ['Simples', 'Difícil e debatido', 'Impossível', 'Doutrina'], 1, 'Causalidade.'),
      disc('Proponha uma política familiar para o Brasil e explique como avaliar seu efeito.', ['Política', 'Mecanismo', 'Avaliação', 'Limites'])],
  },
}),

aula({
  id: 'dm3-4', titulo: 'Família, vida e doutrina da Igreja: paternidade responsável e políticas', duracao: '150 min',
  aprendera: ['Explicar a paternidade responsável na Humanae vitae', 'Conhecer o ensino da Familiaris consortio sobre família e sociedade', 'Distinguir o juízo moral sobre meios e a avaliação de políticas', 'Relacionar doutrina e dados demográficos sem confundi-los'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que diz a Igreja sobre o número de filhos, os meios de regulá-lo e o papel do Estado? E como isso se relaciona com os dados?</p>
<h3>Paternidade responsável</h3>
<p>A <em>Humanae vitae</em> (1968), de São Paulo VI, ensina a paternidade responsável: os esposos podem, por motivos sérios, decidir espaçar os nascimentos, e também acolher generosamente uma família numerosa (n. 10) ${tag('doutrina')}. Considera lícito o recurso aos períodos infecundos e ilícitos os meios que tornam o ato conjugal intencionalmente infecundo (nn. 14 e 16) ${tag('doutrina')}.</p>
<h3>Família e sociedade</h3>
<p>A <em>Familiaris consortio</em> (1981), de São João Paulo II, chama a família de célula primeira e vital da sociedade e pede políticas que a apoiem e defendam seus direitos (nn. 42–46) ${tag('doutrina')}. A <em>Evangelium vitae</em> (1995) critica políticas demográficas que recorrem ao aborto e à esterilização (n. 16) ${tag('doutrina')}.</p>
<h3>Distinções</h3>
<p>O dado demográfico (quantos filhos se têm), o juízo moral sobre os meios e a avaliação de políticas públicas são planos distintos ${tag('argumento')}. Confundir esses planos leva tanto a usar números para justificar meios ilícitos quanto a ignorar os dados em nome de princípios ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Paternidade responsável', 'Decisão dos esposos sobre a geração de filhos, com generosidade e prudência.'],
    ['Métodos naturais', 'Regulação dos nascimentos pelo recurso aos períodos infecundos.'],
    ['Família como célula da sociedade', 'Expressão da Familiaris consortio.'],
    ['Política familiar', 'Conjunto de medidas públicas de apoio às famílias.'],
    ['Direitos da família', 'Direitos reconhecidos à família como comunidade.'],
  ],
  exemplos: `<p><strong>Três perguntas sobre uma mesma situação:</strong> "Qual é a TFT do Brasil?" é pergunta demográfica (dado). "Que meios de regular a fecundidade são moralmente lícitos?" é pergunta moral (doutrina). "Que política ajuda as famílias a ter os filhos que desejam?" é pergunta de política pública (avaliação com dados e valores). Responder bem exige não misturar as três.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Santa Sé publicou em 1983 a Carta dos Direitos da Família ${tag('fato')}. <strong>No Brasil:</strong> a Constituição afirma que a família, base da sociedade, tem especial proteção do Estado, e que o planejamento familiar é livre decisão do casal (art. 226, § 7º) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a doutrina não depende de números, mas não os ignora', tag: 'argumento',
    premissas: ['O juízo sobre a liceidade dos meios se funda na natureza do ato e na dignidade da pessoa, não em estatísticas.', 'As decisões prudenciais sobre políticas exigem conhecer a realidade, inclusive os números.', 'A doutrina social pede justamente que as políticas sirvam ao bem das famílias reais.'],
    conclusao: 'Logo, a doutrina moral não depende dos dados demográficos, mas a aplicação prudencial às políticas precisa deles.',
    nota: 'É a distinção entre princípios e juízos prudenciais, recorrente na doutrina social.',
  },
  objecoes: [
    { objecao: 'A Igreja quer que todos tenham o maior número possível de filhos.', tag: 'debate',
      resposta: 'A Humanae vitae fala de paternidade responsável: os esposos podem, por motivos sérios, espaçar os nascimentos, e devem decidir diante de Deus. O que a Igreja exclui são certos meios e a imposição externa da decisão. Generosidade e prudência caminham juntas.' },
  ],
  aplicacao: `<p>Analise uma política familiar brasileira (licença-maternidade, salário-família, creches, benefícios por filho) com dados, e avalie-a à luz da Familiaris consortio e da Constituição, art. 226.</p>`,
  fonte: {
    obra: 'São Paulo VI, Humanae vitae (1968), nn. 10, 14 e 16; São João Paulo II, Familiaris consortio (1981), nn. 42–46; Constituição de 1988, art. 226', link: { url: 'https://www.vatican.va/content/paul-vi/pt/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html', rotulo: 'vatican.va' },
    orientacao: `<p>Na Humanae vitae, a definição de paternidade responsável. Na Familiaris consortio, os deveres da sociedade para com a família. No art. 226, a proteção constitucional.</p>`,
  },
  perguntas: [
    { p: 'O que é paternidade responsável na Humanae vitae?', r: 'A decisão dos esposos, por motivos sérios, de espaçar os nascimentos ou acolher família numerosa.' },
    { p: 'Como a Familiaris consortio chama a família?', r: 'Célula primeira e vital da sociedade.' },
    { p: 'O que diz a Constituição sobre o planejamento familiar?', r: 'Que é livre decisão do casal (art. 226, § 7º).' },
  ],
  exercicios: [
    mc('A Humanae vitae é de:', ['1930', '1968', '1981', '1995'], 1, 'São Paulo VI.'),
    mc('A Familiaris consortio é de:', ['1968', '1981', '1995', '2016'], 1, 'São João Paulo II.'),
    mc('A Carta dos Direitos da Família foi publicada em:', ['1965', '1983', '1994', '2004'], 1, 'Santa Sé.'),
    mc('O planejamento familiar como livre decisão do casal está na CF, art.:', ['5º', '205', '226', '231'], 2, '§ 7º.'),
    mc('"Qual a TFT do Brasil?" é pergunta:', ['Moral', 'Demográfica', 'Teológica', 'Jurídica'], 1, 'Dado.'),
    disc('Analise uma política familiar brasileira com dados e à luz da Familiaris consortio e do art. 226.', ['Política', 'Dados', 'Doutrina', 'Avaliação']),
  ],
  resumo: ['Humanae vitae (1968): paternidade responsável.', 'Familiaris consortio (1981).', 'Evangelium vitae (1995), n. 16.', 'Carta dos Direitos da Família (1983).', 'Três planos: dado, moral, política; CF art. 226.'],
  referencias: [
    { texto: 'São Paulo VI, Humanae vitae (1968).', link: { url: 'https://www.vatican.va/content/paul-vi/pt/encyclicals/documents/hf_p-vi_enc_25071968_humanae-vitae.html', rotulo: 'vatican.va' } },
    { texto: 'São João Paulo II, Familiaris consortio (1981).', livro: 'jp2-familiaris' },
    { texto: 'São João Paulo II, Evangelium vitae (1995).', livro: 'jp2-evangelium' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da política', 'Ler os textos indicados'],
  revisao: [['HV 10', 'Paternidade responsável.'], ['FC', 'Célula da sociedade.'], ['Art. 226', 'Família e Estado.']],
  avancado: {
    texto: `<h3>Métodos de reconhecimento da fertilidade</h3>
<p>Métodos como o de Billings, que observa o muco cervical, e o sintotérmico, que combina temperatura e outros sinais, permitem identificar os períodos férteis ${tag('fato')}. Estudos indicam que, usados corretamente, têm boa eficácia; a eficácia no uso típico varia e depende de formação e motivação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Literatura médica sobre métodos de reconhecimento da fertilidade.' }],
    exercicios: [
      mc('O método Billings observa:', ['A temperatura apenas', 'O muco cervical', 'O calendário apenas', 'Nada'], 1, 'Sinal.'),
      mc('O método sintotérmico combina:', ['Temperatura e outros sinais', 'Só calendário', 'Medicamentos', 'Cirurgia'], 0, 'Sinais.'),
      mc('A eficácia no uso típico depende de:', ['Sorte apenas', 'Formação e motivação', 'Clima', 'Idade do médico'], 1, 'Interpretação.'),
      disc('Explique a diferença entre eficácia no uso correto e no uso típico de um método.', ['Conceitos', 'Exemplo', 'Fatores', 'Conclusão'])],
  },
}),

avaliacao('dm3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as interpretações da fecundidade, a história do controle populacional, a baixa fecundidade e a doutrina da Igreja, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo e o ensaio sobre a fecundidade.</li><li>Revise a distinção entre dado, juízo moral e política.</li></ul>`,
[
  disc('Explique a queda da fecundidade no Brasil com pelo menos duas interpretações (econômica, cultural, transição), indicando o que os dados permitem afirmar.', ['Duas interpretações', 'Dados', 'O que se afirma', 'O que é debate']),
  disc('Proponha critérios para julgar uma política demográfica, usando a história do controle coercitivo e a doutrina da Igreja.', ['Critérios', 'Casos históricos', 'Doutrina', 'Aplicação']),
]),
];
