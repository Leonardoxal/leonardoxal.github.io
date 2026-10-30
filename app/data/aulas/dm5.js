// Demografia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Demografia).
// Previdência, envelhecimento e cuidado; planejamento urbano e escolar com dados demográficos;
// políticas para a família; a investigação de quatro semanas. A avaliação final integra DM1 a DM5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dm5-1', titulo: 'Previdência, envelhecimento e cuidado dos idosos', duracao: '150 min',
  aprendera: ['Relacionar envelhecimento e previdência', 'Conhecer as regras gerais da reforma de 2019', 'Conhecer o Estatuto da Pessoa Idosa', 'Discutir o cuidado dos idosos à luz da doutrina'],
  prereq: ['Demografia IV (módulo DM4)'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil envelhece depressa. Quem paga as aposentadorias, e quem cuida dos idosos?</p>
<h3>Envelhecimento e previdência</h3>
<p>O regime geral brasileiro funciona principalmente por repartição: as contribuições dos ativos pagam os benefícios dos aposentados ${tag('fato')}. Com o envelhecimento, cai o número de contribuintes por beneficiário, o que pressiona o sistema ${tag('argumento')}.</p>
<h3>A reforma de 2019</h3>
<p>A Emenda Constitucional nº 103/2019 estabeleceu, como regra geral para novos segurados do regime geral, idade mínima de 65 anos para homens e 62 para mulheres, com regras de transição ${tag('fato')}.</p>
<h3>Proteção dos idosos</h3>
<p>O Estatuto da Pessoa Idosa (Lei nº 10.741/2003) assegura direitos às pessoas com 60 anos ou mais e afirma o dever da família, da comunidade, da sociedade e do poder público de garanti-los ${tag('fato')}. O Benefício de Prestação Continuada garante um salário mínimo a idosos de 65 anos ou mais em situação de pobreza ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo recorda o dever dos filhos de assistir os pais na velhice (CIC 2218) ${tag('doutrina')}. O Papa Francisco instituiu em 2021 o Dia Mundial dos Avós e dos Idosos e dedicou catequeses à velhice em 2022, contra a "cultura do descarte" ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Repartição', 'Regime em que os ativos financiam os benefícios dos inativos.'],
    ['Capitalização', 'Regime em que cada um acumula reservas para a própria aposentadoria.'],
    ['Razão de dependência de idosos', 'Idosos por 100 pessoas em idade ativa.'],
    ['BPC', 'Benefício de Prestação Continuada.'],
    ['Cuidado de longa duração', 'Assistência contínua a pessoas com dependência.'],
  ],
  exemplos: `<p><strong>Contribuintes por aposentado:</strong> se há 4 contribuintes para cada aposentado e cada um contribui com 25% do salário, o benefício médio pode ser igual a um salário. Se passam a ser 2 contribuintes por aposentado, mantendo o benefício, a contribuição precisaria dobrar para 50%. O exemplo simplifica, mas mostra por que a estrutura etária pesa.</p>`,
  contexto: `<p><strong>No mundo:</strong> muitos países elevaram a idade de aposentadoria diante do envelhecimento ${tag('fato')}. <strong>No Brasil:</strong> a proporção de pessoas com 60 anos ou mais cresceu fortemente entre os censos de 2010 e 2022 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o cuidado dos idosos não pode ser só tarefa do Estado nem só da família', tag: 'argumento',
    premissas: ['Com menos filhos por família, há menos parentes disponíveis para cuidar dos idosos.', 'O Estado sozinho não substitui a presença e o afeto da família.', 'A família sozinha, sem apoio, pode ficar sobrecarregada, especialmente as mulheres.'],
    conclusao: 'Logo, o cuidado dos idosos exige cooperação entre família, comunidade e poder público.',
    nota: 'É aplicação da subsidiariedade e da solidariedade, e corresponde ao que diz o Estatuto da Pessoa Idosa.',
  },
  objecoes: [
    { objecao: 'Basta aumentar a idade de aposentadoria e o problema está resolvido.', tag: 'debate',
      resposta: 'Elevar a idade mínima alivia as contas, mas não resolve sozinha: depende de haver empregos para trabalhadores mais velhos, de saúde para trabalhar e de produtividade. Também não responde à questão do cuidado. São necessárias várias medidas combinadas.' },
  ],
  aplicacao: `<p>Calcule a razão de dependência de idosos do seu estado em 2010 e 2022 e discuta as implicações para previdência e cuidado.</p>`,
  fonte: {
    obra: 'Emenda Constitucional nº 103/2019; Lei nº 10.741/2003 (Estatuto da Pessoa Idosa); Catecismo da Igreja Católica, §§ 2214–2220', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na EC 103, as idades mínimas. No Estatuto, os deveres de família, sociedade e Estado. No Catecismo, os deveres dos filhos para com os pais.</p>`,
  },
  perguntas: [
    { p: 'Como funciona o regime de repartição?', r: 'As contribuições dos ativos pagam os benefícios dos aposentados.' },
    { p: 'Quais as idades mínimas da regra geral da EC 103/2019?', r: '65 anos para homens e 62 para mulheres.' },
    { p: 'Quem tem deveres para com o idoso segundo o Estatuto?', r: 'Família, comunidade, sociedade e poder público.' },
  ],
  exercicios: [
    mc('A reforma da previdência de 2019 é a EC nº:', ['66', '95', '103', '132'], 2, '2019.'),
    mc('O Estatuto da Pessoa Idosa é a Lei:', ['8.069/1990', '10.741/2003', '13.445/2017', '9.263/1996'], 1, '60 anos ou mais.'),
    mc('Com 2 contribuintes por aposentado, para pagar benefício igual a um salário, cada um contribui com:', ['10%', '25%', '50%', '100%'], 2, '1 ÷ 2.'),
    mc('O dever dos filhos de assistir os pais idosos está no CIC:', ['2218', '1883', '337', '159'], 0, 'Quarto mandamento.'),
    mc('O Dia Mundial dos Avós e dos Idosos foi instituído em:', ['2005', '2013', '2021', '2024'], 2, 'Francisco.'),
    disc('Calcule a razão de dependência de idosos do seu estado em 2010 e 2022 e discuta as implicações.', ['Dados', 'Cálculos', 'Previdência', 'Cuidado']),
  ],
  resumo: ['Repartição e envelhecimento.', 'EC 103/2019: 65 e 62 anos.', 'Estatuto da Pessoa Idosa; BPC.', 'Cuidado: família, comunidade, Estado.', 'CIC 2218; Dia dos Avós (2021).'],
  referencias: [
    { texto: 'Emenda Constitucional nº 103, de 2019.' },
    { texto: 'Lei nº 10.741, de 2003 (Estatuto da Pessoa Idosa).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2214–2220.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo e a discussão', 'Ler as normas indicadas'],
  revisao: [['Repartição', 'Ativos pagam.'], ['EC 103', '65/62.'], ['CIC 2218', 'Assistir os pais.']],
  avancado: {
    texto: `<h3>Repartição e capitalização</h3>
<p>No regime de capitalização, cada trabalhador acumula reservas individuais, e a aposentadoria depende do que acumulou e dos rendimentos ${tag('fato')}. É menos sensível à estrutura etária, mas expõe o segurado a riscos de mercado e deixa desprotegidos os que pouco puderam poupar ${tag('interpretacao')}. Muitos países combinam os dois regimes ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura comparada sobre sistemas previdenciários.' }],
    exercicios: [
      mc('Na capitalização, a aposentadoria depende:', ['Dos ativos atuais', 'Do que o próprio segurado acumulou', 'Do clima', 'Do Estado apenas'], 1, 'Reservas.'),
      mc('A capitalização é menos sensível à:', ['Inflação', 'Estrutura etária', 'Renda', 'Saúde'], 1, 'Demografia.'),
      mc('Um risco da capitalização é:', ['Excesso de contribuintes', 'Riscos de mercado', 'Envelhecimento', 'Nenhum'], 1, 'Interpretação.'),
      disc('Compare repartição e capitalização diante do envelhecimento brasileiro.', ['Repartição', 'Capitalização', 'Envelhecimento', 'Avaliação'])],
  },
}),

aula({
  id: 'dm5-2', titulo: 'Planejamento urbano e escolar com dados demográficos', duracao: '150 min',
  aprendera: ['Usar projeções para planejar vagas escolares', 'Relacionar crescimento urbano e infraestrutura', 'Usar o Censo Escolar', 'Elaborar um diagnóstico demográfico municipal'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quantas escolas, creches, postos de saúde e casas uma cidade precisará daqui a dez anos? A demografia dá a base para responder.</p>
<h3>Escolas</h3>
<p>Com a queda da fecundidade, o número de crianças em idade escolar diminui em muitos municípios, enquanto ainda faltam vagas em creches em outros ${tag('interpretacao')}. O Censo Escolar, realizado anualmente pelo INEP, registra matrículas, escolas e turmas ${tag('fato')}. Cruzar matrículas com a população por idade permite estimar a cobertura e a demanda futura ${tag('argumento')}.</p>
<h3>Cidades</h3>
<p>O crescimento ou a perda de população, a migração e o envelhecimento alteram a demanda por moradia, transporte, saúde e lazer ${tag('fato')}. O Estatuto da Cidade exige plano diretor para municípios com mais de 20 mil habitantes ${tag('fato')}.</p>
<h3>Instrumentos</h3>
<p>Estimativas anuais de população do IBGE são usadas, entre outros fins, para repartir o Fundo de Participação dos Municípios ${tag('fato')}. Erros nessas estimativas afetam diretamente os recursos que cada município recebe ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Censo Escolar', 'Levantamento anual de matrículas e escolas feito pelo INEP.'],
    ['Taxa de atendimento', 'Proporção da população de uma idade que frequenta a escola.'],
    ['Demanda projetada', 'Necessidade futura estimada a partir de projeções.'],
    ['Plano diretor', 'Instrumento básico da política urbana municipal.'],
    ['FPM', 'Fundo de Participação dos Municípios.'],
  ],
  exemplos: `<p><strong>Planejando creches:</strong> um município tem 2.400 crianças de 0 a 3 anos e 900 vagas em creche: taxa de atendimento de 37,5%. A meta do Plano Nacional de Educação (2014) era atender pelo menos 50% dessa faixa. Para atingi-la, faltariam 300 vagas — mas, se a projeção indicar queda de 10% nas crianças em cinco anos, a necessidade futura será menor.</p>`,
  contexto: `<p><strong>No mundo:</strong> países com rápida queda da natalidade fecham escolas em áreas rurais e abrem serviços para idosos ${tag('fato')}. <strong>No Brasil:</strong> o INEP divulga anualmente os resultados do Censo Escolar ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que planejar com projeções evita desperdício', tag: 'argumento',
    premissas: ['Escolas, hospitais e redes de transporte levam anos para ser construídos e duram décadas.', 'A população atendida muda em tamanho e idade nesse período.', 'Planejar só com a população atual pode gerar falta ou excesso de estrutura.'],
    conclusao: 'Logo, o planejamento de infraestrutura deve usar projeções demográficas, revistas periodicamente.',
    nota: 'As projeções devem ser usadas com suas variantes e atualizadas a cada novo dado.',
  },
  objecoes: [
    { objecao: 'Se há menos crianças, pode-se cortar o orçamento da educação.', tag: 'debate',
      resposta: 'Menos crianças podem liberar recursos, mas também podem permitir melhorar a qualidade: turmas menores, tempo integral, creches onde faltam. A decisão é política; a demografia mostra a oportunidade, não impõe o uso dos recursos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: elabore um diagnóstico demográfico do seu município (população, crescimento, pirâmide, razão de dependência) e discuta as implicações para escolas, saúde e previdência.</p>`,
  fonte: {
    obra: 'INEP, Censo Escolar; IBGE, estimativas de população dos municípios; Lei nº 10.257/2001 (Estatuto da Cidade), art. 41', link: { url: 'https://www.gov.br/inep', rotulo: 'INEP' },
    orientacao: `<p>No Censo Escolar, as matrículas por etapa no seu município. No IBGE, a população por idade. No Estatuto da Cidade, a obrigatoriedade do plano diretor.</p>`,
  },
  perguntas: [
    { p: 'Quem realiza o Censo Escolar?', r: 'O INEP.' },
    { p: 'Para que se usam as estimativas anuais de população do IBGE, entre outros fins?', r: 'Para repartir o Fundo de Participação dos Municípios.' },
    { p: 'Que municípios devem ter plano diretor?', r: 'Os com mais de 20 mil habitantes, entre outros casos.' },
  ],
  exercicios: [
    mc('Com 3.000 crianças e 1.200 vagas, a taxa de atendimento é:', ['12%', '25%', '40%', '60%'], 2, '1.200 ÷ 3.000.'),
    mc('O Censo Escolar é feito pelo:', ['IBGE', 'INEP', 'TSE', 'IPEA'], 1, 'Educação.'),
    mc('O plano diretor é obrigatório para municípios com mais de:', ['5 mil', '20 mil', '100 mil', '1 milhão'], 1, 'Estatuto da Cidade.'),
    mc('Estimativas de população do IBGE influem na repartição do:', ['FGTS', 'FPM', 'PIS', 'FIES'], 1, 'Fundo de Participação.'),
    mc('Planejar infraestrutura só com a população atual pode gerar:', ['Exatidão', 'Falta ou excesso', 'Nada', 'Economia certa'], 1, 'Projeções.'),
    disc('Elabore o diagnóstico demográfico do seu município e suas implicações para escolas, saúde e previdência.', ['População e crescimento', 'Pirâmide e dependência', 'Implicações', 'Fontes']),
  ],
  resumo: ['Censo Escolar (INEP).', 'Taxa de atendimento e demanda.', 'Plano diretor (>20 mil hab.).', 'Estimativas e FPM.', 'Planejar com projeções.'],
  referencias: [
    { texto: 'INEP, Censo Escolar da Educação Básica.', link: { url: 'https://www.gov.br/inep', rotulo: 'INEP' } },
    { texto: 'IBGE, estimativas de população.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Lei nº 10.257, de 2001 (Estatuto da Cidade).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o diagnóstico municipal', 'Consultar os dados oficiais'],
  revisao: [['INEP', 'Censo Escolar.'], ['FPM', 'Estimativas.'], ['20 mil', 'Plano diretor.']],
  avancado: {
    texto: `<h3>Cidades que perdem população</h3>
<p>Entre os censos de 2010 e 2022, muitos municípios brasileiros perderam população, sobretudo pequenos municípios do interior ${tag('fato')}. O encolhimento exige planejar de outra forma: reorganizar escolas, manter serviços com menos usuários e atrair ou reter moradores ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'IBGE, Censo Demográfico 2022: população dos municípios.' }],
    exercicios: [
      mc('Entre 2010 e 2022, muitos municípios:', ['Dobraram', 'Perderam população', 'Não mudaram', 'Desapareceram'], 1, 'Censo.'),
      mc('Os municípios que mais perderam população são sobretudo:', ['Capitais', 'Pequenos do interior', 'Litorâneos', 'Metrópoles'], 1, 'Interior.'),
      mc('O encolhimento exige:', ['Mais escolas sempre', 'Reorganizar serviços', 'Nada', 'Fechar o município'], 1, 'Planejamento.'),
      disc('Proponha medidas para um pequeno município que perde população.', ['Diagnóstico', 'Medidas', 'Riscos', 'Fontes'])],
  },
}),

aula({
  id: 'dm5-3', titulo: 'Políticas para a família: licenças, benefícios e apoio à natalidade', duracao: '150 min',
  aprendera: ['Conhecer as licenças-maternidade e paternidade no Brasil', 'Conhecer benefícios por filho em programas sociais', 'Avaliar políticas familiares com dados e critérios', 'Aplicar a subsidiariedade às políticas familiares'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que políticas ajudam as famílias a ter e criar os filhos que desejam, sem coerção?</p>
<h3>Licenças</h3>
<p>A Constituição garante licença à gestante de 120 dias (art. 7º, XVIII) e licença-paternidade, fixada provisoriamente em 5 dias (ADCT, art. 10, § 1º) ${tag('fato')}. O Programa Empresa Cidadã (Lei nº 11.770/2008) permite estender a licença-maternidade para 180 dias e a paternidade para 20 dias nas empresas participantes ${tag('fato')}.</p>
<h3>Benefícios</h3>
<p>Programas de transferência de renda, como o Bolsa Família, incluem valores adicionais por criança e por gestante ${tag('fato')}. Creches públicas e escola em tempo integral facilitam a conciliação entre trabalho e família ${tag('interpretacao')}.</p>
<h3>Critérios</h3>
<p>A Carta dos Direitos da Família (1983) pede políticas que reconheçam a família, respeitem a liberdade dos pais e lhes deem condições econômicas e sociais ${tag('doutrina')}. Pela subsidiariedade, o Estado deve apoiar as famílias sem substituí-las ${tag('doutrina')}. A avaliação dos efeitos exige comparar grupos e períodos, porque muitas mudanças ocorrem ao mesmo tempo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Licença-maternidade', 'Afastamento remunerado da mãe após o parto.'],
    ['Licença-paternidade', 'Afastamento remunerado do pai após o nascimento.'],
    ['Empresa Cidadã', 'Programa que permite estender as licenças (Lei 11.770/2008).'],
    ['Benefício por criança', 'Valor adicional pago por filho em programas sociais.'],
    ['Conciliação trabalho-família', 'Condições para harmonizar emprego e cuidado dos filhos.'],
  ],
  exemplos: `<p><strong>Comparando opções:</strong> uma prefeitura dispõe de recursos para uma de três políticas: abrir 200 vagas em creche, pagar um auxílio mensal por bebê ou criar um programa de moradia para famílias jovens. Avaliar exige perguntar o que as famílias locais dizem precisar, qual o custo por família atendida e como medir o efeito.</p>`,
  contexto: `<p><strong>No mundo:</strong> países nórdicos combinam licenças longas, creches universais e licenças reservadas aos pais ${tag('fato')}. <strong>No Brasil:</strong> o Marco Legal da Primeira Infância (Lei nº 13.257/2016) estabeleceu princípios para políticas voltadas às crianças de 0 a 6 anos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que apoiar a família é diferente de controlar a natalidade', tag: 'argumento',
    premissas: ['Controlar a natalidade é fixar uma meta e pressionar as famílias a cumpri-la.', 'Apoiar a família é remover obstáculos para que os pais realizem as próprias decisões.', 'Só o segundo respeita a liberdade dos casais afirmada pela Constituição e pela doutrina.'],
    conclusao: 'Logo, políticas familiares legítimas apoiam as decisões dos pais em vez de impor metas.',
    nota: 'O critério vale tanto para políticas de redução quanto de aumento da natalidade.',
  },
  objecoes: [
    { objecao: 'Políticas familiares não aumentam a natalidade; portanto são inúteis.', tag: 'debate',
      resposta: 'O efeito sobre a natalidade costuma ser modesto, mas as políticas familiares têm outros fins: bem-estar das crianças, saúde das mães, conciliação entre trabalho e família, redução da pobreza infantil. Julgá-las só pela taxa de natalidade é reduzir seu sentido.' },
  ],
  aplicacao: `<p>Analise uma política familiar brasileira (licenças, Empresa Cidadã, benefício por criança, creches, Marco da Primeira Infância): objetivos, público, dados de alcance e avaliação com os critérios da aula.</p>`,
  fonte: {
    obra: 'Constituição de 1988, art. 7º, XVIII e XIX, e ADCT, art. 10, § 1º; Lei nº 11.770/2008; Santa Sé, Carta dos Direitos da Família (1983)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Constituição, as licenças. Na Lei 11.770, a prorrogação. Na Carta dos Direitos da Família, os direitos econômicos e sociais da família.</p>`,
  },
  perguntas: [
    { p: 'Quantos dias tem a licença-maternidade constitucional?', r: '120 dias.' },
    { p: 'O que permite a Lei 11.770/2008?', r: 'Estender a licença-maternidade para 180 dias e a paternidade para 20 dias nas empresas participantes.' },
    { p: 'Qual a diferença entre apoiar a família e controlar a natalidade?', r: 'Apoiar remove obstáculos às decisões dos pais; controlar impõe metas.' },
  ],
  exercicios: [
    mc('A licença-maternidade constitucional é de:', ['60 dias', '120 dias', '180 dias', '365 dias'], 1, 'Art. 7º, XVIII.'),
    mc('A licença-paternidade provisória do ADCT é de:', ['2 dias', '5 dias', '20 dias', '30 dias'], 1, 'Art. 10, § 1º.'),
    mc('O Programa Empresa Cidadã é da Lei:', ['11.770/2008', '13.257/2016', '10.741/2003', '9.263/1996'], 0, 'Prorrogação.'),
    mc('O Marco Legal da Primeira Infância é de:', ['2003', '2008', '2016', '2022'], 2, '0 a 6 anos.'),
    mc('Políticas familiares devem ser julgadas:', ['Só pela natalidade', 'Por vários fins, como bem-estar das crianças', 'Por nada', 'Só pelo custo'], 1, 'Objeção.'),
    disc('Analise uma política familiar brasileira com objetivos, público, dados e critérios.', ['Política', 'Dados', 'Critérios', 'Avaliação']),
  ],
  resumo: ['Licenças: 120 dias; 5 dias.', 'Empresa Cidadã: 180 e 20 dias.', 'Benefícios por criança; creches.', 'Marco da Primeira Infância (2016).', 'Apoiar, não controlar.'],
  referencias: [
    { texto: 'Lei nº 11.770, de 2008 (Programa Empresa Cidadã).' },
    { texto: 'Lei nº 13.257, de 2016 (Marco Legal da Primeira Infância).' },
    { texto: 'Santa Sé, Carta dos Direitos da Família (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da política', 'Ler as normas indicadas'],
  revisao: [['120 dias', 'Licença-maternidade.'], ['Empresa Cidadã', '180/20.'], ['Apoiar', 'Não controlar.']],
  avancado: {
    texto: `<h3>Moradia e família</h3>
<p>Estudos em vários países associam o custo da moradia ao adiamento da formação de famílias e a menos filhos ${tag('interpretacao')}. Políticas habitacionais voltadas a casais jovens são propostas como forma indireta de apoio à família ${tag('interpretacao')}. A causalidade, porém, é difícil de isolar ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura sobre moradia e fecundidade.' }],
    exercicios: [
      mc('O custo da moradia é associado a:', ['Mais filhos sempre', 'Adiamento da formação de famílias', 'Nada', 'Mais casamentos'], 1, 'Interpretação.'),
      mc('Políticas habitacionais para casais jovens são apoio:', ['Direto à natalidade', 'Indireto à família', 'Coercitivo', 'Nenhum'], 1, 'Indireto.'),
      mc('A causalidade entre moradia e fecundidade é:', ['Óbvia', 'Difícil de isolar', 'Inexistente', 'Lei'], 1, 'Debate.'),
      disc('Proponha um estudo para testar se o custo da moradia afeta a natalidade no Brasil.', ['Hipótese', 'Dados', 'Comparação', 'Limites'])],
  },
}),

aula({
  id: 'dm5-4', titulo: 'Investigação demográfica de quatro semanas: dados públicos ou genealogia', duracao: '180 min',
  aprendera: ['Formular uma pergunta demográfica testável', 'Coletar dados de censos, registros e sistemas de saúde', 'Analisar com indicadores e gráficos', 'Redigir o relatório com conclusão proporcional e respeito à privacidade'],
  prereq: ['Todas as aulas anteriores de Demografia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação de quatro semanas. Esta aula é o roteiro, com dois caminhos.</p>
<h3>1. Dinâmica de um município</h3>
<p>Pergunta, por exemplo: "como mudaram a fecundidade, a mortalidade e a estrutura etária do meu município entre 2000 e 2022, e por quê?" Fontes: Censos do IBGE, SIM e SINASC no DATASUS, Censo Escolar ${tag('fato')}. Calcule indicadores, faça pirâmides e gráficos, compare com o estado e o país ${tag('fato')}.</p>
<h3>2. Genealogia comparada</h3>
<p>Reconstrua três ou quatro gerações da sua família (com consentimento dos parentes): datas de nascimento, casamento e morte, número de filhos, lugares de moradia ${tag('fato')}. Compare com as tendências nacionais: queda da fecundidade, aumento da longevidade, migrações ${tag('fato')}.</p>
<h3>Análise e relatório</h3>
<p>Pergunta; fontes e método; resultados com tabelas e gráficos; discussão; limites (sub-registro, amostra pequena na genealogia); conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Ética</h3>
<p>Dados de pessoas vivas devem ser tratados com consentimento e finalidade definida, em respeito à Lei Geral de Proteção de Dados ${tag('fato')}. Na genealogia, não exponha informações sensíveis de parentes sem autorização ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Genealogia', 'Reconstrução das gerações de uma família.'],
    ['Geração', 'Conjunto de pessoas nascidas em período próximo, ou um degrau na linha familiar.'],
    ['Amostra de conveniência', 'Amostra escolhida pela facilidade de acesso, não representativa.'],
    ['Série histórica', 'Dados do mesmo indicador ao longo do tempo.'],
    ['Conclusão proporcional', 'Conclusão que não vai além do que os dados sustentam.'],
  ],
  exemplos: `<p><strong>Genealogia e tendência:</strong> numa família, os bisavós tiveram 9 filhos, os avós 5, os pais 2. A trajetória acompanha a queda nacional da fecundidade. Conclusão proporcional: a família seguiu a tendência do país; uma só família não prova a tendência nem suas causas, mas ilustra como ela foi vivida.</p>`,
  contexto: `<p><strong>No mundo:</strong> a genealogia é praticada amplamente, com arquivos paroquiais e civis digitalizados ${tag('fato')}. <strong>No Brasil:</strong> registros paroquiais e cartoriais, muitos digitalizados, permitem reconstruir famílias desde o período colonial ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma genealogia ilustra, mas não prova, uma tendência', tag: 'argumento',
    premissas: ['Uma família é um caso, não uma amostra representativa.', 'Casos podem coincidir ou não com a média por razões particulares.', 'Tendências se estabelecem com dados de muitas famílias.'],
    conclusao: 'Logo, a genealogia ilustra como a tendência foi vivida, mas não a prova nem a explica sozinha.',
    nota: 'Combinar a genealogia com os dados nacionais une o caso concreto e a visão de conjunto.',
  },
  objecoes: [
    { objecao: 'Trabalhar com dados públicos é só copiar números.', tag: 'debate',
      resposta: 'Copiar números não é investigação; investigar é formular uma pergunta, escolher indicadores, calcular, comparar, explicar e reconhecer limites. Os mesmos dados públicos sustentam análises boas e ruins; a diferença está no método.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: caminho escolhido, pergunta, fontes com endereço, indicadores ou dados a coletar, cronograma de quatro semanas e cuidados éticos.</p>`,
  fonte: {
    obra: 'IBGE, Censos e estimativas; Ministério da Saúde, DATASUS; Lei nº 13.709/2018 (LGPD)', link: { url: 'https://datasus.saude.gov.br', rotulo: 'DATASUS' },
    orientacao: `<p>No IBGE e no DATASUS, as séries do seu município. Na LGPD, os princípios de finalidade e consentimento.</p>`,
  },
  perguntas: [
    { p: 'Quais os dois caminhos da investigação?', r: 'Dinâmica demográfica de um município ou genealogia comparada.' },
    { p: 'Por que uma genealogia não prova uma tendência?', r: 'Porque uma família é um caso, não uma amostra representativa.' },
    { p: 'Que lei orienta o tratamento de dados pessoais?', r: 'A LGPD (Lei nº 13.709/2018).' },
  ],
  exercicios: [
    mc('Uma família com 9, 5 e 2 filhos em três gerações:', ['Prova a tendência nacional', 'Ilustra a tendência', 'Contradiz a tendência', 'Não informa nada'], 1, 'Caso.'),
    mc('Óbitos e nascimentos por município estão no:', ['DATASUS', 'TSE', 'INPE', 'IPHAN'], 0, 'SIM e SINASC.'),
    mc('Dados de parentes vivos exigem:', ['Nada', 'Consentimento', 'Publicação', 'Pagamento'], 1, 'Ética.'),
    mc('Uma amostra de conveniência é:', ['Representativa', 'Não representativa', 'Censitária', 'Aleatória'], 1, 'Acesso.'),
    mc('Investigar com dados públicos exige:', ['Copiar números', 'Pergunta, indicadores, análise e limites', 'Só gráficos', 'Nada'], 1, 'Método.'),
    disc('Apresente o pré-projeto: caminho, pergunta, fontes, dados, cronograma e ética.', ['Caminho e pergunta', 'Fontes e dados', 'Cronograma', 'Ética']),
  ],
  resumo: ['Dois caminhos: município ou genealogia.', 'Fontes: IBGE, DATASUS, INEP.', 'Indicadores e gráficos.', 'Genealogia ilustra, não prova.', 'LGPD e consentimento.'],
  referencias: [
    { texto: 'IBGE, Censos Demográficos.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Lei nº 13.709, de 2018 (LGPD).' },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar a coleta'],
  revisao: [['Dois caminhos', 'Município ou genealogia.'], ['Caso', 'Ilustra.'], ['LGPD', 'Consentimento.']],
  avancado: {
    texto: `<h3>Taxas padronizadas por municípios pequenos</h3>
<p>Em municípios pequenos, poucos eventos fazem as taxas oscilarem muito de um ano para outro: um óbito infantil a mais pode dobrar a taxa ${tag('fato')}. Usar médias de três anos ou agregar municípios reduz essa instabilidade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais de métodos demográficos para pequenas áreas.' }],
    exercicios: [
      mc('Em municípios pequenos, as taxas:', ['São estáveis', 'Oscilam muito', 'Não existem', 'São sempre zero'], 1, 'Poucos eventos.'),
      mc('Para reduzir a oscilação, pode-se usar:', ['Médias de três anos', 'Um só dia', 'Opinião', 'Nada'], 0, 'Suavização.'),
      mc('Num município com 100 nascimentos, um óbito infantil a mais altera a taxa em:', ['0,1 por mil', '1 por mil', '10 por mil', '100 por mil'], 2, '1 ÷ 100 × 1.000.'),
      disc('Explique como tratar a instabilidade das taxas na investigação de um município pequeno.', ['Problema', 'Técnica', 'Exemplo', 'Limites'])],
  },
}),

avaliacao('dm5-5', 'Avaliação integradora de Demografia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Demografia. Reúne questões de todos os módulos (DM1 a DM5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (equação compensadora, taxas, TFT, razão de dependência, mortalidade infantil).</li><li>Releia a rubrica da investigação (dm5-4).</li></ul>`,
[
  disc('Interprete uma pirâmide etária brasileira (1970 ou 2022) e uma série de fecundidade, explicando a transição demográfica e suas consequências para escolas, previdência e cuidado.', ['Pirâmide', 'Série de fecundidade', 'Transição', 'Consequências']),
  disc('Proponha critérios para uma política demográfica e familiar no Brasil, usando dados, a história do controle populacional e o ensino da Igreja sobre a família e a liberdade dos pais.', ['Dados', 'Lições históricas', 'Doutrina', 'Critérios propostos']),
]),
];
