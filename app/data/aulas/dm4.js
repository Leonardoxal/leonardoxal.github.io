// Demografia IV — grandes componentes da dinâmica (etapa 8 do percurso de Demografia).
// Mortalidade, saúde e transição epidemiológica; fecundidade, nupcialidade e arranjos familiares;
// migrações internas e internacionais; a formação e o perfil atual da população brasileira.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dm4-1', titulo: 'Mortalidade e saúde: transição epidemiológica, mortalidade infantil e pandemias', duracao: '150 min',
  aprendera: ['Explicar a transição epidemiológica', 'Interpretar a queda da mortalidade infantil no Brasil', 'Explicar o conceito de excesso de mortalidade', 'Analisar o efeito da covid-19 sobre a mortalidade'],
  prereq: ['Demografia III (módulo DM3)'],
  explicacao: `
<h3>O problema</h3>
<p>Do que se morre, em que idade, e por que isso mudou tanto em um século?</p>
<h3>Transição epidemiológica</h3>
<p>Abdel Omran (1971) descreveu a passagem de um padrão dominado por doenças infecciosas e fome para outro dominado por doenças crônicas e degenerativas, como as cardiovasculares e o câncer ${tag('fato')}. No Brasil, essa transição ocorreu de modo incompleto, com convivência de doenças infecciosas e crônicas e peso grande das mortes por causas externas, como homicídios e acidentes ${tag('interpretacao')}.</p>
<h3>Mortalidade infantil</h3>
<p>A taxa de mortalidade infantil — óbitos de menores de um ano por mil nascidos vivos — caiu no Brasil de cerca de 47 por mil em 1990 para cerca de 13 por mil nos anos 2020 ${tag('fato')}. Contribuíram vacinação, saneamento, atenção básica, aleitamento materno e queda da fecundidade ${tag('interpretacao')}.</p>
<h3>Excesso de mortalidade</h3>
<p>Excesso de mortalidade é a diferença entre os óbitos observados num período e os esperados com base em anos anteriores ${tag('fato')}. Na pandemia de covid-19, o Brasil registrou mais de 700 mil óbitos pela doença, e a esperança de vida caiu em 2020 e 2021, recuperando-se depois ${tag('fato')}.</p>`,
  vocabulario: [
    ['Transição epidemiológica', 'Mudança no padrão de causas de morte (Omran, 1971).'],
    ['Mortalidade infantil', 'Óbitos de menores de um ano por mil nascidos vivos.'],
    ['Causas externas', 'Mortes por homicídios, acidentes, suicídios e outras violências.'],
    ['Excesso de mortalidade', 'Óbitos observados menos os esperados.'],
    ['Mortalidade evitável', 'Mortes que poderiam ser evitadas com ações de saúde.'],
  ],
  exemplos: `<p><strong>Calculando o excesso:</strong> uma cidade registrava, em média, 1.000 óbitos por ano; num ano de epidemia, registrou 1.300. O excesso foi de 300 óbitos, 30% acima do esperado. O excesso inclui mortes pela doença e por outras causas afetadas pela crise, como atrasos em tratamentos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial da Saúde estimou o excesso de mortalidade mundial associado à covid-19 em 2020 e 2021 em cerca de 15 milhões de pessoas ${tag('fato')}. <strong>No Brasil:</strong> a Fiocruz e o IBGE publicaram estudos sobre o impacto da pandemia na esperança de vida ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a mortalidade infantil é um indicador sensível de condições de vida', tag: 'argumento',
    premissas: ['Os bebês são muito vulneráveis a infecções, desnutrição e falta de cuidado.', 'Saneamento, vacinação, renda e acesso à saúde reduzem esses riscos.', 'Por isso, a mortalidade infantil reage rapidamente a melhorias ou pioras nessas condições.'],
    conclusao: 'Logo, a mortalidade infantil é um indicador sensível das condições de vida de uma população.',
    nota: 'Diferenças entre regiões e grupos dentro do Brasil revelam desigualdades.',
  },
  objecoes: [
    { objecao: 'A queda da mortalidade se deve só aos remédios modernos.', tag: 'debate',
      resposta: 'Medicamentos e vacinas foram importantes, mas na Europa a mortalidade começou a cair antes dos antibióticos, por melhor alimentação, saneamento e higiene, como argumentou Thomas McKeown. No Brasil, saneamento, educação das mães e atenção básica também pesaram. O peso relativo de cada fator é debatido.' },
  ],
  aplicacao: `<p>Com dados do DATASUS, compare a mortalidade infantil do seu município ou estado em 2000 e no ano mais recente e proponha duas explicações para a mudança, com os dados que as testariam.</p>`,
  fonte: {
    obra: 'Abdel Omran, "The Epidemiologic Transition" (1971); Ministério da Saúde, SIM e SINASC (DATASUS)', link: { url: 'https://datasus.saude.gov.br', rotulo: 'DATASUS' },
    orientacao: `<p>Em Omran, as fases da transição epidemiológica. No DATASUS, óbitos de menores de um ano e nascidos vivos para calcular a taxa.</p>`,
  },
  perguntas: [
    { p: 'O que é a transição epidemiológica?', r: 'A passagem de um padrão de doenças infecciosas para doenças crônicas e degenerativas.' },
    { p: 'Como se calcula a mortalidade infantil?', r: 'Óbitos de menores de um ano por mil nascidos vivos.' },
    { p: 'O que é excesso de mortalidade?', r: 'Óbitos observados menos os esperados.' },
  ],
  exercicios: [
    mc('Com 30 óbitos de menores de um ano e 2.000 nascidos vivos, a mortalidade infantil é:', ['1,5', '15', '30', '150'], 1, '30 ÷ 2.000 × 1.000.'),
    mc('A transição epidemiológica foi descrita por:', ['Omran', 'Notestein', 'Malthus', 'Graunt'], 0, '1971.'),
    mc('A mortalidade infantil brasileira em 1990 era de cerca de:', ['5 por mil', '13 por mil', '47 por mil', '150 por mil'], 2, 'Queda forte.'),
    mc('Observados 1.200, esperados 1.000: o excesso é de:', ['200', '1.000', '1.200', '2.200'], 0, 'Diferença.'),
    mc('Causas externas incluem:', ['Câncer', 'Homicídios e acidentes', 'Diabetes', 'Gripe'], 1, 'Violências.'),
    disc('Compare a mortalidade infantil do seu município ou estado em 2000 e hoje, com duas explicações e os dados para testá-las.', ['Dados', 'Cálculo', 'Explicações', 'Testes']),
  ],
  resumo: ['Omran (1971).', 'Mortalidade infantil: ~47 (1990) para ~13 por mil.', 'Causas externas no Brasil.', 'Excesso de mortalidade.', 'Covid-19: mais de 700 mil óbitos.'],
  referencias: [
    { texto: 'Abdel Omran, "The Epidemiologic Transition" (1971).' },
    { texto: 'Ministério da Saúde, DATASUS.', link: { url: 'https://datasus.saude.gov.br', rotulo: 'DATASUS' } },
    { texto: 'Thomas McKeown, The Modern Rise of Population (1976).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação da mortalidade infantil', 'Consultar os dados oficiais'],
  revisao: [['Omran', 'Transição epidemiológica.'], ['TMI', 'Por mil nascidos vivos.'], ['Excesso', 'Observados − esperados.']],
  avancado: {
    texto: `<h3>Desigualdade na mortalidade</h3>
<p>A esperança de vida e a mortalidade infantil variam muito entre regiões, grupos de renda e cor no Brasil ${tag('fato')}. Homens jovens têm mortalidade por causas externas muito maior que mulheres jovens, o que reduz a esperança de vida masculina ${tag('fato')}. A desigualdade diante da morte é tema central da demografia social ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'IBGE, Síntese de indicadores sociais.' }],
    exercicios: [
      mc('A mortalidade por causas externas é maior entre:', ['Mulheres idosas', 'Homens jovens', 'Crianças', 'Ninguém'], 1, 'Violências.'),
      mc('A esperança de vida masculina, comparada à feminina, é:', ['Maior', 'Menor', 'Igual', 'Desconhecida'], 1, 'Causas externas e outras.'),
      mc('A desigualdade diante da morte é estudada pela:', ['Demografia social', 'Astronomia', 'Geologia', 'Música'], 0, 'Interpretação.'),
      disc('Compare a esperança de vida de homens e mulheres no Brasil e explique a diferença.', ['Dados', 'Diferença', 'Causas', 'Fontes'])],
  },
}),

aula({
  id: 'dm4-2', titulo: 'Fecundidade, nupcialidade e arranjos familiares', duracao: '150 min',
  aprendera: ['Interpretar a fecundidade por idade', 'Explicar o adiamento da maternidade', 'Conhecer as mudanças na nupcialidade', 'Analisar a composição dos domicílios brasileiros'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quando as mulheres têm filhos, quando as pessoas se casam e com quem vivem? As respostas mudaram muito nas últimas décadas.</p>
<h3>Fecundidade por idade</h3>
<p>A TFT é a soma das taxas de fecundidade por idade ${tag('fato')}. No Brasil, a fecundidade se concentrava entre 20 e 29 anos; nas últimas décadas, cresce a proporção de filhos de mães acima de 30 anos — o adiamento da maternidade ${tag('fato')}. A fecundidade na adolescência caiu, mas continua elevada em comparação internacional ${tag('fato')}.</p>
<h3>Nupcialidade</h3>
<p>A idade média ao casar aumentou, as uniões consensuais cresceram e os divórcios aumentaram, sobretudo após a Lei do Divórcio (1977) e a Emenda Constitucional nº 66/2010, que facilitou o divórcio ${tag('fato')}.</p>
<h3>Arranjos domiciliares</h3>
<p>O tamanho médio dos domicílios diminuiu; o Censo de 2022 registrou cerca de 2,8 moradores por domicílio ${tag('fato')}. Cresceram os domicílios de uma só pessoa e os de casais sem filhos ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>A <em>Amoris laetitia</em> (2016) reconhece as transformações da família e pede acompanhamento pastoral, reafirmando o ensino sobre o matrimônio e a família ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Fecundidade por idade', 'Nascimentos por mulher em cada faixa etária.'],
    ['Adiamento da maternidade', 'Aumento da idade média ao ter filhos.'],
    ['Nupcialidade', 'Frequência e características dos casamentos.'],
    ['União consensual', 'Convivência conjugal sem casamento formal.'],
    ['Domicílio unipessoal', 'Domicílio com um só morador.'],
  ],
  exemplos: `<p><strong>Somando taxas:</strong> se as taxas de fecundidade por grupo de cinco anos (15–19 a 45–49) forem 0,05; 0,09; 0,08; 0,06; 0,03; 0,01; 0,00 filhos por mulher por ano, a soma é 0,32; multiplicada por 5 (anos de cada grupo), dá TFT de 1,6. É assim que se chega ao número médio de filhos por mulher.</p>`,
  contexto: `<p><strong>No mundo:</strong> o adiamento da maternidade é tendência em quase todos os países de renda média e alta ${tag('fato')}. <strong>No Brasil:</strong> as Estatísticas do Registro Civil do IBGE publicam casamentos, divórcios e idade dos noivos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o adiamento da maternidade tende a reduzir a fecundidade completa', tag: 'argumento',
    premissas: ['A fertilidade biológica diminui com a idade, especialmente após os 35 anos.', 'Quem começa a ter filhos mais tarde dispõe de menos anos reprodutivos.', 'Planos de mais filhos podem não se realizar por falta de tempo.'],
    conclusao: 'Logo, o adiamento da maternidade tende a reduzir o número final de filhos.',
    nota: 'O efeito depende também de valores, condições de trabalho e apoio às famílias.',
  },
  objecoes: [
    { objecao: 'Os dados mostram que a família tradicional acabou.', tag: 'debate',
      resposta: 'Os dados mostram diversificação dos arranjos e queda do tamanho das famílias, mas os casais com filhos continuam sendo um dos arranjos mais frequentes. Além disso, dado não é norma: que algo seja menos frequente não diz se é melhor ou pior. A doutrina e a ética avaliam; a demografia descreve.' },
  ],
  aplicacao: `<p>Com dados do Censo 2022 ou da PNAD, descreva a composição dos domicílios do seu estado (unipessoais, casais com filhos, sem filhos, monoparentais) e compare com 2010.</p>`,
  fonte: {
    obra: 'IBGE, Estatísticas do Registro Civil; IBGE, Censo Demográfico 2022: características dos domicílios; Papa Francisco, Amoris laetitia (2016), cap. 2', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No IBGE, os dados de casamentos, divórcios e arranjos domiciliares. Na Amoris laetitia, o capítulo sobre a realidade e os desafios das famílias.</p>`,
  },
  perguntas: [
    { p: 'Como se obtém a TFT?', r: 'Somando as taxas de fecundidade por idade (multiplicadas pela amplitude dos grupos).' },
    { p: 'O que é o adiamento da maternidade?', r: 'O aumento da idade média ao ter filhos.' },
    { p: 'Quantos moradores por domicílio registrou o Censo 2022?', r: 'Cerca de 2,8.' },
  ],
  exercicios: [
    mc('Soma de taxas quinquenais 0,40 dá TFT de:', ['0,4', '2,0', '4,0', '8,0'], 1, '0,40 × 5.'),
    mc('A Lei do Divórcio no Brasil é de:', ['1916', '1977', '1988', '2010'], 1, 'Lei 6.515.'),
    mc('A EC 66/2010:', ['Proibiu o divórcio', 'Facilitou o divórcio', 'Criou o casamento civil', 'Nada'], 1, 'Divórcio direto.'),
    mc('A Amoris laetitia é de:', ['1981', '2005', '2016', '2023'], 2, 'Francisco.'),
    mc('Cresceram no Brasil os domicílios:', ['Com dez moradores', 'Unipessoais', 'Sem banheiro', 'Rurais apenas'], 1, 'Censo.'),
    disc('Descreva a composição dos domicílios do seu estado em 2022 e compare com 2010.', ['Dados', 'Comparação', 'Interpretação', 'Distinção entre dado e norma']),
  ],
  resumo: ['TFT como soma de taxas por idade.', 'Adiamento da maternidade.', 'Nupcialidade: idade maior, uniões consensuais, divórcios.', 'Domicílios menores (~2,8).', 'Amoris laetitia (2016).'],
  referencias: [
    { texto: 'IBGE, Estatísticas do Registro Civil.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'IBGE, Censo Demográfico 2022.' },
    { texto: 'Papa Francisco, Amoris laetitia (2016).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos domicílios', 'Consultar os dados oficiais'],
  revisao: [['TFT', 'Soma por idade.'], ['1977', 'Lei do Divórcio.'], ['2,8', 'Moradores por domicílio.']],
  avancado: {
    texto: `<h3>Efeito tempo e efeito quantum</h3>
<p>Quando as mulheres adiam os nascimentos, a TFT de um período pode cair temporariamente mesmo que o número final de filhos por geração não mude: é o "efeito tempo" ${tag('fato')}. John Bongaarts e Griffith Feeney propuseram em 1998 um ajuste para separar esse efeito da mudança real na quantidade de filhos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'John Bongaarts e Griffith Feeney, "On the Quantum and Tempo of Fertility" (1998).' }],
    exercicios: [
      mc('O efeito tempo resulta do:', ['Adiamento dos nascimentos', 'Aumento da mortalidade', 'Migração', 'Censo'], 0, 'Calendário.'),
      mc('O ajuste de Bongaarts e Feeney é de:', ['1968', '1998', '2010', '2022'], 1, 'Tempo e quantum.'),
      mc('O efeito quantum refere-se:', ['Ao calendário', 'Ao número final de filhos', 'À idade dos pais', 'Ao sexo'], 1, 'Quantidade.'),
      disc('Explique por que a TFT de período pode subestimar o número final de filhos de uma geração.', ['Conceito', 'Exemplo', 'Ajuste', 'Limites'])],
  },
}),

aula({
  id: 'dm4-3', titulo: 'Migrações internas e internacionais', duracao: '150 min',
  aprendera: ['Conhecer as leis de Ravenstein e os fatores de atração e expulsão', 'Descrever as grandes migrações internas brasileiras', 'Conhecer a imigração e a emigração no Brasil', 'Relacionar migração, direitos e doutrina social'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que as pessoas mudam de lugar, e como as migrações formaram o Brasil?</p>
<h3>Teorias</h3>
<p>Ernst Ravenstein formulou em 1885 as "leis da migração", observando, por exemplo, que a maioria dos migrantes percorre distâncias curtas e que as migrações seguem correntes com contracorrentes ${tag('fato')}. Modelos posteriores falam de fatores de expulsão e de atração ${tag('fato')}.</p>
<h3>Migrações internas</h3>
<p>No século XX, milhões de nordestinos migraram para o Sudeste, sobretudo para São Paulo e Rio de Janeiro ${tag('fato')}. A construção de Brasília, inaugurada em 1960, e a expansão da fronteira agrícola para o Centro-Oeste e a Amazônia também atraíram migrantes ${tag('fato')}. A urbanização fez a população urbana passar de cerca de um terço em 1950 para mais de 80% no início do século XXI ${tag('fato')}.</p>
<h3>Migrações internacionais</h3>
<p>Entre o fim do século XIX e meados do XX, chegaram ao Brasil grandes contingentes de italianos, portugueses, espanhóis, alemães e japoneses; os primeiros imigrantes japoneses vieram no navio Kasato Maru, em 1908 ${tag('fato')}. A partir dos anos 1980, aumentou a emigração de brasileiros ${tag('fato')}. Desde 2018, a Operação Acolhida recebe e interioriza migrantes venezuelanos ${tag('fato')}. A Lei de Migração (Lei nº 13.445/2017) rege a matéria ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Papa Francisco resumiu a resposta aos migrantes em quatro verbos: acolher, proteger, promover e integrar (<em>Fratelli tutti</em>, 129) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Migração interna', 'Deslocamento dentro do mesmo país.'],
    ['Fatores de expulsão e atração', 'Condições que levam a sair de um lugar e a ir para outro.'],
    ['Urbanização', 'Aumento da proporção da população urbana.'],
    ['Interiorização', 'Distribuição de migrantes para várias cidades do país.'],
    ['Refugiado', 'Pessoa que deixa seu país por perseguição ou grave violação de direitos.'],
  ],
  exemplos: `<p><strong>Atração e expulsão:</strong> nos anos 1950, secas no sertão, falta de terra e de emprego expulsavam; a indústria e a construção civil em São Paulo atraíam. Redes de parentes e conterrâneos já instalados reduziam os custos e os riscos da mudança. Fatores econômicos, ambientais e sociais atuam juntos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ONU estimou em cerca de 280 milhões o número de migrantes internacionais em 2020 ${tag('fato')}. <strong>No Brasil:</strong> o Censo 2022 registrou os estrangeiros e os brasileiros que mudaram de município ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as redes de migrantes perpetuam as correntes migratórias', tag: 'argumento',
    premissas: ['Migrantes já instalados oferecem informação, moradia e indicação de trabalho aos recém-chegados.', 'Isso reduz os custos e os riscos de migrar para o mesmo destino.', 'Com menos custo, mais pessoas da mesma origem migram.'],
    conclusao: 'Logo, as redes tendem a perpetuar as correntes migratórias mesmo quando as causas iniciais diminuem.',
    nota: 'Explica a concentração de migrantes de certas origens em certos bairros e cidades.',
  },
  objecoes: [
    { objecao: 'Migrantes tiram empregos e sobrecarregam serviços.', tag: 'debate',
      resposta: 'Os efeitos dependem do contexto: migrantes também trabalham, consomem, pagam impostos e preenchem vagas. Estudos encontram efeitos variados sobre salários e serviços, em geral pequenos no agregado. A doutrina pede acolhida com prudência e integração, considerando o bem comum do país e a dignidade dos migrantes.' },
  ],
  aplicacao: `<p>Reconstrua a história migratória da sua família ou de uma família conhecida (de onde vieram, quando, por quê) e compare com as grandes correntes migratórias brasileiras.</p>`,
  fonte: {
    obra: 'Ernst Ravenstein, "The Laws of Migration" (1885); Lei nº 13.445/2017; Papa Francisco, Fratelli tutti (2020), nn. 129–132', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20201003_enciclica-fratelli-tutti.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Ravenstein, as leis da migração. Na Lei 13.445, os princípios da política migratória. Na Fratelli tutti, os quatro verbos.</p>`,
  },
  perguntas: [
    { p: 'Quem formulou as leis da migração em 1885?', r: 'Ernst Ravenstein.' },
    { p: 'Quando chegou o Kasato Maru?', r: 'Em 1908.' },
    { p: 'Quais os quatro verbos de Francisco sobre migrantes?', r: 'Acolher, proteger, promover e integrar.' },
  ],
  exercicios: [
    mc('As leis da migração são de:', ['Ravenstein', 'Malthus', 'Notestein', 'Omran'], 0, '1885.'),
    mc('Brasília foi inaugurada em:', ['1950', '1960', '1970', '1988'], 1, 'Migração interna.'),
    mc('A Lei de Migração é a Lei:', ['6.815/1980', '13.445/2017', '9.263/1996', '12.651/2012'], 1, '2017.'),
    mc('A Operação Acolhida recebe sobretudo migrantes:', ['Haitianos', 'Venezuelanos', 'Japoneses', 'Italianos'], 1, 'Desde 2018.'),
    mc('Os quatro verbos sobre migrantes estão na Fratelli tutti, n.:', ['1', '129', '200', '287'], 1, 'Francisco.'),
    disc('Reconstrua a história migratória de uma família e compare com as correntes brasileiras.', ['Trajetória', 'Motivos', 'Comparação', 'Fontes']),
  ],
  resumo: ['Ravenstein (1885); expulsão e atração.', 'Nordeste → Sudeste; Brasília; fronteira agrícola.', 'Urbanização: ~1/3 (1950) para >80%.', 'Imigração; Kasato Maru (1908); emigração; venezuelanos.', 'Lei 13.445/2017; FT 129.'],
  referencias: [
    { texto: 'Ernst Ravenstein, "The Laws of Migration" (1885).' },
    { texto: 'Lei nº 13.445, de 2017 (Lei de Migração).' },
    { texto: 'Papa Francisco, Fratelli tutti (2020).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20201003_enciclica-fratelli-tutti.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a história migratória', 'Ler os textos indicados'],
  revisao: [['Ravenstein', '1885.'], ['1908', 'Kasato Maru.'], ['FT 129', 'Quatro verbos.']],
  avancado: {
    texto: `<h3>Migração de retorno e remessas</h3>
<p>Parte dos migrantes volta ao lugar de origem, às vezes com recursos e experiência; outros enviam remessas de dinheiro às famílias ${tag('fato')}. No Brasil, a migração de retorno ao Nordeste cresceu nas últimas décadas ${tag('interpretacao')}. As remessas são, para muitos países, fonte importante de renda ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura sobre migração de retorno no Brasil.' }],
    exercicios: [
      mc('Migração de retorno é a volta:', ['Ao lugar de origem', 'A outro país', 'À zona rural sempre', 'Ao trabalho'], 0, 'Definição.'),
      mc('Remessas são:', ['Impostos', 'Dinheiro enviado às famílias de origem', 'Documentos', 'Mercadorias apenas'], 1, 'Renda.'),
      mc('A migração de retorno ao Nordeste:', ['Cresceu nas últimas décadas', 'Desapareceu', 'Nunca existiu', 'É proibida'], 0, 'Interpretação.'),
      disc('Explique os fatores que podem levar migrantes nordestinos a voltar à região de origem.', ['Fatores', 'Dados', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'dm4-4', titulo: 'A população brasileira: formação, crescimento e perfil atual', duracao: '150 min',
  aprendera: ['Descrever a formação da população brasileira', 'Conhecer o tráfico atlântico como componente demográfico', 'Interpretar o perfil do Censo 2022', 'Explicar a transição demográfica brasileira com dados'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como se formou a população brasileira, e quem somos hoje segundo o último censo?</p>
<h3>Formação</h3>
<p>A população indígena no momento do contato é estimada de modos muito diferentes pelos estudiosos, e sofreu redução drástica por epidemias, violência e escravidão ${tag('debate')}. Pelo tráfico atlântico, desembarcaram no Brasil cerca de 4,8 milhões de africanos escravizados, o maior número entre todos os destinos das Américas ${tag('fato')}. Portugueses e, depois, outros imigrantes europeus e asiáticos completaram as matrizes ${tag('fato')}.</p>
<h3>Crescimento</h3>
<p>O recenseamento de 1872 contou cerca de 10 milhões de habitantes; o de 1950, cerca de 52 milhões; o de 2022, cerca de 203 milhões ${tag('fato')}.</p>
<h3>Perfil atual</h3>
<p>O Censo de 2022 contou cerca de 1,7 milhão de indígenas e, pela primeira vez, a população quilombola, de cerca de 1,3 milhão ${tag('fato')}. A idade mediana subiu para cerca de 35 anos, e a proporção de idosos aumentou ${tag('fato')}. A população concentra-se no Sudeste e no litoral, com crescimento mais rápido no Centro-Oeste e no Norte ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tráfico atlântico', 'Comércio de africanos escravizados através do Atlântico.'],
    ['Quilombola', 'Integrante de comunidade descendente de quilombos.'],
    ['Idade mediana', 'Idade que divide a população em duas metades.'],
    ['Densidade demográfica', 'Habitantes por quilômetro quadrado.'],
    ['Autodeclaração', 'Informação de cor, raça ou etnia dada pela própria pessoa.'],
  ],
  exemplos: `<p><strong>Crescimento entre censos:</strong> de 1950 (52 milhões) a 2022 (203 milhões), a população quase quadruplicou em 72 anos. Mas o ritmo mudou: cerca de 3% ao ano nos anos 1950 e cerca de 0,5% ao ano entre 2010 e 2022. Os números totais escondem a mudança de ritmo, que só as taxas revelam.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Brasil está entre os países mais populosos do mundo ${tag('fato')}. <strong>No Brasil:</strong> o banco de dados Slave Voyages reúne informações sobre as viagens do tráfico atlântico ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a autodeclaração é o critério dos censos', tag: 'argumento',
    premissas: ['Cor, raça e pertença étnica envolvem identidade, não só aparência.', 'Um recenseador classificando pela aparência introduziria seus próprios critérios.', 'A autodeclaração registra como as pessoas se reconhecem.'],
    conclusao: 'Logo, a autodeclaração é critério adequado para informações de identidade nos censos.',
    nota: 'Mudanças na autodeclaração entre censos podem refletir mudanças de identidade, e não só de população.',
  },
  objecoes: [
    { objecao: 'Se a autodeclaração muda, os dados não valem nada.', tag: 'debate',
      resposta: 'A mudança na autodeclaração é ela mesma um dado sobre identidades e atitudes sociais. O que se deve evitar é interpretar a variação como se fosse só nascimento ou morte de grupos. Ler os dados exige saber como foram coletados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique a transição demográfica brasileira com dados de fecundidade, mortalidade e estrutura etária (pirâmides de 1970 e 2022), com fontes.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2022: resultados sobre indígenas, quilombolas e idade; Slave Voyages (banco de dados do tráfico atlântico)', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No IBGE, as populações indígena e quilombola e a idade mediana. No Slave Voyages, os desembarques no Brasil por período.</p>`,
  },
  perguntas: [
    { p: 'Quantos africanos escravizados desembarcaram no Brasil, aproximadamente?', r: 'Cerca de 4,8 milhões.' },
    { p: 'Quantos habitantes contou o recenseamento de 1872?', r: 'Cerca de 10 milhões.' },
    { p: 'O que o Censo 2022 contou pela primeira vez?', r: 'A população quilombola.' },
  ],
  exercicios: [
    mc('O Brasil foi o maior destino do tráfico atlântico nas Américas com cerca de:', ['480 mil', '1,2 milhão', '4,8 milhões', '20 milhões'], 2, 'Desembarques.'),
    mc('O Censo 2022 contou cerca de quantos indígenas?', ['170 mil', '1,7 milhão', '17 milhões', '50 milhões'], 1, 'Indígenas.'),
    mc('A idade mediana em 2022 era de cerca de:', ['20 anos', '35 anos', '50 anos', '65 anos'], 1, 'Envelhecimento.'),
    mc('Em 1950, a população brasileira era de cerca de:', ['10 milhões', '52 milhões', '120 milhões', '203 milhões'], 1, 'Censo.'),
    mc('O critério de cor e etnia nos censos é a:', ['Classificação do recenseador', 'Autodeclaração', 'Genética', 'Sobrenome'], 1, 'Identidade.'),
    disc('Explique a transição demográfica brasileira com dados de fecundidade, mortalidade e pirâmides de 1970 e 2022.', ['Fecundidade', 'Mortalidade', 'Pirâmides', 'Fontes']),
  ],
  resumo: ['Indígenas: estimativas debatidas.', 'Tráfico: ~4,8 milhões.', '1872: ~10 mi; 1950: ~52 mi; 2022: ~203 mi.', 'Indígenas ~1,7 mi; quilombolas ~1,3 mi.', 'Idade mediana ~35.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2022.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Slave Voyages: The Trans-Atlantic Slave Trade Database.' },
    { texto: 'IBGE, Recenseamento do Brasil de 1872.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação da transição', 'Consultar os dados oficiais'],
  revisao: [['4,8 milhões', 'Tráfico.'], ['1872', '~10 milhões.'], ['Quilombolas', 'Censo 2022.']],
  avancado: {
    texto: `<h3>A demografia dos povos indígenas</h3>
<p>Após séculos de declínio, a população indígena brasileira voltou a crescer nas últimas décadas, por recuperação demográfica, melhoria de assistência à saúde e aumento da autodeclaração ${tag('interpretacao')}. Há grande diversidade entre povos, com mais de 300 etnias e cerca de 270 línguas registradas pelo IBGE em 2010 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, O Brasil indígena (Censo 2010).' }],
    exercicios: [
      mc('Nas últimas décadas, a população indígena:', ['Desapareceu', 'Voltou a crescer', 'Ficou igual', 'Não é contada'], 1, 'Recuperação.'),
      mc('O Censo 2010 registrou cerca de quantas línguas indígenas?', ['27', '270', '2.700', '7'], 1, 'Diversidade.'),
      mc('O crescimento indígena reflete também:', ['Aumento da autodeclaração', 'Imigração europeia', 'Queda da saúde', 'Nada'], 0, 'Interpretação.'),
      disc('Explique os fatores do crescimento recente da população indígena e os limites dos dados.', ['Fatores', 'Dados', 'Limites', 'Fontes'])],
  },
}),

avaliacao('dm4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre mortalidade, fecundidade e família, migrações e a população brasileira, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de mortalidade infantil, excesso de mortalidade e TFT.</li><li>Releia a explicação da transição brasileira.</li></ul>`,
[
  disc('Analise a dinâmica demográfica de um estado brasileiro com dados de mortalidade, fecundidade e migração.', ['Mortalidade', 'Fecundidade', 'Migração', 'Fontes']),
  disc('Mostre como o tráfico atlântico, a imigração e as migrações internas moldaram a população brasileira, distinguindo dado e interpretação.', ['Tráfico', 'Imigração', 'Migrações internas', 'Dado e interpretação']),
]),
];
