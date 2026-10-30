// Demografia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Demografia).
// População e equação compensadora; taxas, fecundidade, esperança de vida e pirâmide etária;
// censo, registro civil e pesquisas; tábua de vida, projeções e seus pressupostos.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dm1-1', titulo: 'O que estuda a demografia: população, componentes e a equação compensadora', duracao: '120 min',
  aprendera: ['Definir o objeto da demografia', 'Identificar os três componentes da dinâmica populacional', 'Aplicar a equação compensadora', 'Situar a demografia diante da doutrina sobre a família'],
  prereq: ['Estatística básica (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Quantos somos, como mudamos e por quê? A demografia estuda o tamanho, a composição e a distribuição das populações e as mudanças causadas por nascimentos, mortes e migrações.</p>
<h3>Os componentes</h3>
<p>Uma população só muda de tamanho por quatro fluxos: nascimentos, óbitos, imigrações e emigrações ${tag('fato')}. A diferença entre nascimentos e óbitos é o saldo natural (crescimento vegetativo); entre imigrantes e emigrantes, o saldo migratório ${tag('fato')}.</p>
<h3>A equação compensadora</h3>
<p>População final = população inicial + nascimentos − óbitos + imigrantes − emigrantes ${tag('fato')}. É uma identidade contábil: se um dos termos é desconhecido, pode ser estimado a partir dos outros ${tag('fato')}.</p>
<h3>Números</h3>
<p>A população mundial chegou a 8 bilhões em novembro de 2022, segundo as Nações Unidas ${tag('fato')}. O Censo de 2022 contou cerca de 203 milhões de habitantes no Brasil, com crescimento médio de cerca de 0,5% ao ano desde 2010, o menor da série censitária ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo ensina que o Estado é responsável pelo bem-estar dos cidadãos e pode informar e tomar medidas sobre a população, mas sempre respeitando a liberdade e a responsabilidade dos casais, e não por meios contrários à lei moral (CIC 2372) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Demografia', 'Estudo quantitativo das populações humanas.'],
    ['Saldo natural', 'Nascimentos menos óbitos.'],
    ['Saldo migratório', 'Imigrantes menos emigrantes.'],
    ['Equação compensadora', 'Identidade que relaciona a variação da população aos quatro fluxos.'],
    ['Censo', 'Contagem geral da população num território.'],
  ],
  exemplos: `<p><strong>Decompondo um crescimento:</strong> um município tinha 50.000 habitantes; dez anos depois, 56.000. Registraram-se 8.000 nascimentos e 3.000 óbitos (saldo natural de 5.000). O crescimento total foi de 6.000; logo, o saldo migratório estimado é de 1.000. A equação permite estimar a migração, difícil de medir diretamente.</p>`,
  contexto: `<p><strong>No mundo:</strong> a população mundial era de cerca de 1 bilhão por volta de 1800 e cresceu muito rapidamente no século XX ${tag('fato')}. <strong>No Brasil:</strong> o primeiro recenseamento geral foi feito em 1872, ainda no Império ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a equação compensadora permite estimar a migração', tag: 'argumento',
    premissas: ['A variação da população entre dois censos é conhecida.', 'Nascimentos e óbitos são registrados pelo registro civil.', 'A única parcela restante da variação é o saldo migratório.'],
    conclusao: 'Logo, o saldo migratório pode ser estimado como a variação total menos o saldo natural.',
    nota: 'A estimativa herda os erros de cobertura do censo e do registro civil.',
  },
  objecoes: [
    { objecao: 'Demografia é só contar pessoas; não tem nada a ver com moral.', tag: 'debate',
      resposta: 'A contagem é técnica, mas o que se faz com os números envolve escolhas morais: políticas de natalidade, de imigração, de previdência. Além disso, por trás de cada número há pessoas e famílias. A demografia informa as decisões; a ética e a doutrina ajudam a julgá-las.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: com dados do IBGE e do registro civil, calcule o crescimento de um município entre dois censos e decomponha-o em saldo natural e saldo migratório.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2022: primeiros resultados; Catecismo da Igreja Católica, § 2372', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No IBGE, a população do município em 2010 e 2022. No Catecismo, os limites da ação do Estado sobre a população.</p>`,
  },
  perguntas: [
    { p: 'Quais os quatro fluxos que mudam uma população?', r: 'Nascimentos, óbitos, imigrações e emigrações.' },
    { p: 'O que é saldo natural?', r: 'Nascimentos menos óbitos.' },
    { p: 'Quantos habitantes contou o Censo de 2022?', r: 'Cerca de 203 milhões.' },
  ],
  exercicios: [
    mc('Pop. inicial 10.000; nascimentos 900; óbitos 400; imigrantes 300; emigrantes 200. Pop. final:', ['10.200', '10.500', '10.600', '11.800'], 2, '10.000 + 900 − 400 + 300 − 200.'),
    mc('O saldo natural do exemplo anterior é:', ['100', '500', '900', '600'], 1, '900 − 400.'),
    mc('A população mundial chegou a 8 bilhões em:', ['2000', '2011', '2022', '2030'], 2, 'ONU.'),
    mc('O primeiro recenseamento geral do Brasil foi em:', ['1822', '1872', '1940', '1950'], 1, 'Império.'),
    mc('Segundo o CIC 2372, o Estado pode agir sobre a população:', ['Por qualquer meio', 'Respeitando a liberdade dos casais e a lei moral', 'Nunca', 'Só pela força'], 1, 'Doutrina.'),
    disc('Decomponha o crescimento de um município entre dois censos em saldo natural e migratório, com fontes.', ['Dados', 'Cálculo', 'Decomposição', 'Limites']),
  ],
  resumo: ['Quatro fluxos.', 'Saldo natural e migratório.', 'Equação compensadora.', 'Mundo: 8 bilhões (2022); Brasil: 203 milhões.', 'CIC 2372.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2022.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Nações Unidas, World Population Prospects.' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2372.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a decomposição do crescimento', 'Consultar os dados oficiais'],
  revisao: [['Equação', 'P2 = P1 + N − O + I − E.'], ['2022', '203 milhões.'], ['CIC 2372', 'Limites do Estado.']],
  avancado: {
    texto: `<h3>Crescimento exponencial e tempo de duplicação</h3>
<p>Uma população que cresce a uma taxa constante r ao ano dobra em cerca de 70 ÷ (r em %) anos ${tag('fato')}. Com 0,5% ao ano, dobraria em cerca de 140 anos; com 3% ao ano, em cerca de 23 ${tag('fato')}. Taxas demográficas, porém, raramente permanecem constantes por muito tempo ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Manuais introdutórios de demografia.' }],
    exercicios: [
      mc('A 2% ao ano, uma população dobra em cerca de:', ['20 anos', '35 anos', '70 anos', '140 anos'], 1, '70 ÷ 2.'),
      mc('A regra para o tempo de duplicação é:', ['50 ÷ r', '70 ÷ r', '100 ÷ r', 'r ÷ 70'], 1, 'Regra de 70.'),
      mc('Projetar com taxa constante por séculos é:', ['Seguro', 'Arriscado', 'Obrigatório', 'Lei'], 1, 'Taxas mudam.'),
      disc('Calcule o tempo de duplicação da população brasileira com a taxa de 1950–1960 e com a de 2010–2022 e comente.', ['Taxas', 'Cálculos', 'Comparação', 'Cautela'])],
  },
}),

aula({
  id: 'dm1-2', titulo: 'Indicadores demográficos: taxas, fecundidade, esperança de vida e pirâmide etária', duracao: '150 min',
  aprendera: ['Calcular taxas brutas de natalidade e mortalidade', 'Interpretar a taxa de fecundidade total e o nível de reposição', 'Interpretar a esperança de vida ao nascer', 'Calcular a razão de dependência e ler uma pirâmide etária'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Para comparar populações de tamanhos diferentes, não basta contar nascimentos e mortes: é preciso calcular taxas e indicadores padronizados.</p>
<h3>Taxas brutas</h3>
<p>A taxa bruta de natalidade é o número de nascimentos num ano por mil habitantes; a de mortalidade, o número de óbitos por mil habitantes ${tag('fato')}. São "brutas" porque não consideram a estrutura etária ${tag('fato')}.</p>
<h3>Fecundidade</h3>
<p>A taxa de fecundidade total (TFT) é o número médio de filhos que uma mulher teria ao longo da vida se seguisse as taxas de fecundidade por idade de um ano ${tag('fato')}. O nível de reposição, em populações de baixa mortalidade, é de cerca de 2,1 filhos por mulher ${tag('fato')}. No Brasil, a TFT está abaixo desse nível desde o início do século XXI ${tag('fato')}.</p>
<h3>Esperança de vida</h3>
<p>A esperança de vida ao nascer é o número médio de anos que um recém-nascido viveria se enfrentasse as taxas de mortalidade por idade de um período ${tag('fato')}. No Brasil, está em torno de 76 anos segundo as tábuas recentes do IBGE ${tag('fato')}.</p>
<h3>Estrutura etária</h3>
<p>A pirâmide etária mostra a população por sexo e grupos de idade ${tag('fato')}. A razão de dependência relaciona jovens (0–14 anos) e idosos (65 anos ou mais) à população em idade ativa (15–64 anos) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Taxa bruta de natalidade', 'Nascimentos por mil habitantes num ano.'],
    ['Taxa de fecundidade total', 'Número médio de filhos por mulher.'],
    ['Nível de reposição', 'TFT que mantém a população no longo prazo, cerca de 2,1.'],
    ['Esperança de vida ao nascer', 'Média de anos que um recém-nascido viveria com as taxas atuais.'],
    ['Razão de dependência', '(0–14 + 65 ou mais) ÷ (15–64) × 100.'],
  ],
  exemplos: `<p><strong>Calculando:</strong> um município de 80.000 habitantes teve 960 nascimentos e 560 óbitos num ano. Taxa bruta de natalidade: 960 ÷ 80.000 × 1.000 = 12 por mil; de mortalidade: 7 por mil. Se tem 16.000 pessoas de 0–14 anos, 8.000 de 65 ou mais e 56.000 de 15–64, a razão de dependência é (16.000 + 8.000) ÷ 56.000 × 100 ≈ 43.</p>`,
  contexto: `<p><strong>No mundo:</strong> a TFT mundial caiu de cerca de 5 filhos por mulher nos anos 1950 para cerca de 2,3 no início da década de 2020, segundo a ONU ${tag('fato')}. <strong>No Brasil:</strong> a mortalidade infantil caiu fortemente desde os anos 1990 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o nível de reposição é um pouco maior que 2', tag: 'argumento',
    premissas: ['Para repor a população, cada mulher precisa, em média, ser substituída por uma filha que chegue à idade reprodutiva.', 'Nascem um pouco mais meninos que meninas.', 'Parte das meninas morre antes de chegar à idade reprodutiva.'],
    conclusao: 'Logo, são necessários um pouco mais de 2 filhos por mulher — cerca de 2,1 em populações de baixa mortalidade.',
    nota: 'Com mortalidade alta, o nível de reposição é bem maior que 2,1.',
  },
  objecoes: [
    { objecao: 'Esperança de vida de 76 anos significa que a maioria morre aos 76.', tag: 'debate',
      resposta: 'A esperança de vida é uma média que considera todas as idades de morte, inclusive na infância. Quem já chegou aos 60 anos tem esperança de vida restante maior do que a média ao nascer sugeriria. Interpretar o indicador exige saber como ele é calculado.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 indicadores demográficos com o valor brasileiro mais recente e a fonte de cada um.</p>`,
  fonte: {
    obra: 'IBGE, Tábuas completas de mortalidade; IBGE, Estatísticas do Registro Civil', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Nas tábuas, a esperança de vida ao nascer e aos 60 anos. Nas estatísticas do registro civil, os nascimentos e óbitos do seu estado.</p>`,
  },
  perguntas: [
    { p: 'O que é a taxa de fecundidade total?', r: 'O número médio de filhos por mulher com as taxas por idade de um ano.' },
    { p: 'Qual o nível de reposição em populações de baixa mortalidade?', r: 'Cerca de 2,1 filhos por mulher.' },
    { p: 'Como se calcula a razão de dependência?', r: '(0–14 anos + 65 anos ou mais) ÷ (15–64 anos) × 100.' },
  ],
  exercicios: [
    mc('Cidade de 200.000 habitantes com 2.400 nascimentos tem taxa bruta de natalidade de:', ['2,4 por mil', '12 por mil', '24 por mil', '120 por mil'], 1, '2.400 ÷ 200.000 × 1.000.'),
    mc('O nível de reposição é de cerca de:', ['1,5', '2,1', '3,0', '4,0'], 1, 'Baixa mortalidade.'),
    mc('Com 30 jovens, 20 idosos e 100 em idade ativa, a razão de dependência é:', ['20', '30', '50', '150'], 2, '(30 + 20) ÷ 100 × 100.'),
    mc('A esperança de vida ao nascer no Brasil está em torno de:', ['56 anos', '66 anos', '76 anos', '86 anos'], 2, 'IBGE.'),
    mc('Taxas brutas não consideram:', ['O número de nascimentos', 'A estrutura etária', 'O ano', 'A população'], 1, 'Brutas.'),
    disc('Apresente o glossário de 20 indicadores com valores brasileiros e fontes.', ['20 indicadores', 'Definições', 'Valores recentes', 'Fontes']),
  ],
  resumo: ['Taxas brutas por mil.', 'TFT e reposição (~2,1).', 'Esperança de vida (~76 no Brasil).', 'Razão de dependência.', 'Pirâmide etária.'],
  referencias: [
    { texto: 'IBGE, Tábuas completas de mortalidade.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'IBGE, Estatísticas do Registro Civil.' },
    { texto: 'Nações Unidas, World Population Prospects.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Consultar os dados oficiais'],
  revisao: [['TFT', 'Filhos por mulher.'], ['2,1', 'Reposição.'], ['Dependência', 'Jovens + idosos ÷ ativos.']],
  avancado: {
    texto: `<h3>Padronização por idade</h3>
<p>Duas cidades podem ter taxas brutas de mortalidade diferentes só porque uma tem mais idosos ${tag('fato')}. A padronização aplica as taxas por idade de cada cidade a uma mesma população-padrão, permitindo comparar a mortalidade sem o efeito da estrutura etária ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais de métodos demográficos.' }],
    exercicios: [
      mc('A padronização por idade elimina o efeito da:', ['Estrutura etária', 'Renda', 'Religião', 'Clima'], 0, 'Comparação.'),
      mc('Uma cidade com mais idosos tende a ter taxa bruta de mortalidade:', ['Menor', 'Maior', 'Igual', 'Zero'], 1, 'Estrutura.'),
      mc('A padronização aplica taxas por idade a uma população:', ['Real de cada cidade', 'Padrão comum', 'Infantil', 'Estrangeira'], 1, 'Método.'),
      disc('Explique por que uma cidade turística de aposentados pode ter mortalidade bruta alta mesmo com boa saúde pública.', ['Estrutura etária', 'Taxa bruta', 'Padronização', 'Conclusão'])],
  },
}),

aula({
  id: 'dm1-3', titulo: 'Fontes demográficas: censo, registro civil e pesquisas amostrais', duracao: '150 min',
  aprendera: ['Distinguir censo, registro civil e pesquisa amostral', 'Conhecer a história dos censos brasileiros', 'Identificar problemas de cobertura e sub-registro', 'Construir uma pirâmide etária com dados do censo'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>De onde vêm os números da demografia, e quanto podemos confiar neles?</p>
<h3>Censo</h3>
<p>O censo demográfico conta toda a população num momento de referência e coleta características de cada pessoa e domicílio ${tag('fato')}. No Brasil, o primeiro recenseamento geral foi o de 1872; o IBGE, criado em 1936, realiza os censos desde 1940 ${tag('fato')}. O censo previsto para 2020 foi adiado e realizado em 2022 ${tag('fato')}.</p>
<h3>Registro civil</h3>
<p>Os cartórios registram nascimentos, casamentos e óbitos ${tag('fato')}. O Ministério da Saúde mantém o Sistema de Informações sobre Mortalidade (SIM) e o Sistema de Informações sobre Nascidos Vivos (SINASC) ${tag('fato')}. O sub-registro — eventos não registrados — foi grande no passado e diminuiu nas últimas décadas ${tag('fato')}.</p>
<h3>Pesquisas amostrais</h3>
<p>A Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua) do IBGE investiga trimestralmente uma amostra de domicílios, com dados sobre trabalho, renda e composição dos domicílios ${tag('fato')}.</p>
<h3>Cobertura</h3>
<p>Toda fonte tem erros: pessoas não encontradas no censo, idades declaradas com arredondamento, eventos não registrados ${tag('fato')}. Demógrafos estimam esses erros comparando fontes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Censo demográfico', 'Contagem de toda a população num momento de referência.'],
    ['Registro civil', 'Registro oficial de nascimentos, casamentos e óbitos.'],
    ['Sub-registro', 'Eventos vitais não registrados.'],
    ['PNAD Contínua', 'Pesquisa amostral trimestral do IBGE.'],
    ['Preferência digital', 'Tendência a declarar idades terminadas em 0 ou 5.'],
  ],
  exemplos: `<p><strong>Um sinal de erro:</strong> numa pirâmide etária feita com idades declaradas, aparecem picos aos 30, 40, 50 e 60 anos. Não houve mais nascimentos nesses anos; é a preferência por idades "redondas" ao declarar. Demógrafos suavizam os dados por grupos quinquenais para reduzir o efeito.</p>`,
  contexto: `<p><strong>No mundo:</strong> recomendações das Nações Unidas orientam os países a realizar censos ao menos a cada dez anos ${tag('fato')}. <strong>No Brasil:</strong> o sistema de registro civil foi organizado nacionalmente após a República ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que comparar fontes melhora as estimativas', tag: 'argumento',
    premissas: ['Cada fonte tem erros próprios: o censo deixa pessoas de fora; o registro civil tem sub-registro.', 'Os erros de fontes diferentes não são idênticos.', 'Comparar as fontes revela inconsistências e permite estimar e corrigir erros.'],
    conclusao: 'Logo, combinar fontes produz estimativas mais confiáveis que cada fonte isolada.',
    nota: 'É o que faz o IBGE ao produzir as tábuas de mortalidade e as projeções.',
  },
  objecoes: [
    { objecao: 'O censo é caro e inútil; bastaria usar cadastros administrativos.', tag: 'debate',
      resposta: 'Cadastros administrativos cobrem bem quem tem contato com serviços públicos, mas deixam de fora grupos menos visíveis e não trazem todas as características. O censo é a única fonte que cobre todo o território e serve de base para amostras, repasses de recursos e políticas. Há tendência de combinar censo e registros, não de substituí-lo inteiramente.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: com dados do Censo 2022, construa a pirâmide etária de um município (grupos de cinco anos, por sexo) e interprete sua forma.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2022: população por idade e sexo; Ministério da Saúde, SIM e SINASC (DATASUS)', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No IBGE, a tabela de população por grupos de idade e sexo. No DATASUS, nascimentos e óbitos do mesmo município para comparação.</p>`,
  },
  perguntas: [
    { p: 'Quando foi criado o IBGE?', r: 'Em 1936.' },
    { p: 'Por que o censo de 2020 foi feito em 2022?', r: 'Porque foi adiado.' },
    { p: 'O que é sub-registro?', r: 'A ocorrência de nascimentos ou óbitos não registrados.' },
  ],
  exercicios: [
    mc('O IBGE realiza os censos desde:', ['1872', '1920', '1940', '1970'], 2, 'Criado em 1936.'),
    mc('O sistema de informações sobre óbitos do Ministério da Saúde é o:', ['SINASC', 'SIM', 'PNAD', 'SIDRA'], 1, 'Mortalidade.'),
    mc('Picos em idades terminadas em 0 indicam:', ['Mais nascimentos', 'Preferência digital na declaração', 'Guerras', 'Erros de impressão'], 1, 'Arredondamento.'),
    mc('A PNAD Contínua é:', ['Censo', 'Pesquisa amostral', 'Registro civil', 'Cadastro'], 1, 'Trimestral.'),
    mc('Comparar fontes serve para:', ['Duplicar trabalho', 'Estimar e corrigir erros', 'Esconder dados', 'Nada'], 1, 'Qualidade.'),
    disc('Construa e interprete a pirâmide etária de um município com dados do Censo 2022.', ['Dados', 'Pirâmide', 'Interpretação', 'Limites']),
  ],
  resumo: ['Censo: universo.', '1872; IBGE (1936); censos desde 1940; 2022.', 'Registro civil, SIM, SINASC.', 'PNAD Contínua.', 'Erros e comparação de fontes.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2022.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Ministério da Saúde, DATASUS.', link: { url: 'https://datasus.saude.gov.br', rotulo: 'DATASUS' } },
    { texto: 'Nações Unidas, Principles and Recommendations for Population and Housing Censuses.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a pirâmide etária', 'Consultar os dados oficiais'],
  revisao: [['1872', 'Primeiro recenseamento.'], ['SIM e SINASC', 'Óbitos e nascimentos.'], ['Sub-registro', 'Eventos não registrados.']],
  avancado: {
    texto: `<h3>Os registros paroquiais</h3>
<p>Antes do registro civil, os registros paroquiais de batismos, casamentos e sepultamentos eram a principal fonte sobre a população; o Concílio de Trento (século XVI) tornou obrigatórios os registros de batismo e casamento ${tag('fato')}. Demógrafos históricos usam esses livros para reconstituir famílias e estudar a fecundidade e a mortalidade do passado ${tag('fato')}. No Brasil, são fonte importante para o período colonial e imperial ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura de demografia histórica.' }],
    exercicios: [
      mc('Os registros de batismo e casamento tornaram-se obrigatórios no:', ['Concílio de Niceia', 'Concílio de Trento', 'Vaticano II', 'Concílio de Éfeso'], 1, 'Século XVI.'),
      mc('A reconstituição de famílias usa sobretudo:', ['Censos modernos', 'Registros paroquiais', 'Satélites', 'Jornais'], 1, 'Demografia histórica.'),
      mc('No Brasil, registros paroquiais são fonte para o período:', ['Só atual', 'Colonial e imperial', 'Só republicano', 'Nenhum'], 1, 'Antes do registro civil.'),
      disc('Explique como os registros paroquiais permitem estudar a fecundidade no Brasil colonial e seus limites.', ['Fonte', 'Método', 'Limites', 'Exemplo'])],
  },
}),

aula({
  id: 'dm1-4', titulo: 'Tábua de vida, projeções e seus pressupostos; ética do uso dos números', duracao: '150 min',
  aprendera: ['Ler os elementos de uma tábua de vida', 'Explicar como se fazem projeções de população', 'Distinguir projeção e previsão', 'Reconhecer usos legítimos e abusivos dos dados demográficos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como se calcula a esperança de vida? Como se projeta a população de 2050? E que limites éticos há no uso desses números?</p>
<h3>A tábua de vida</h3>
<p>A tábua de vida acompanha uma coorte hipotética de 100.000 nascidos submetida às taxas de mortalidade por idade de um período ${tag('fato')}. Mostra, para cada idade, a probabilidade de morrer, o número de sobreviventes e a esperança de vida restante ${tag('fato')}. Edmond Halley publicou em 1693 uma das primeiras tábuas, com dados de Breslau ${tag('fato')}.</p>
<h3>Projeções</h3>
<p>O método das componentes projeta a população por idade e sexo aplicando hipóteses de fecundidade, mortalidade e migração ano a ano ${tag('fato')}. A ONU publica projeções com variantes alta, média e baixa de fecundidade ${tag('fato')}. Uma projeção diz o que acontecerá <em>se</em> as hipóteses se confirmarem; não é previsão segura ${tag('argumento')}.</p>
<h3>Ética</h3>
<p>Dados demográficos são indispensáveis a políticas de saúde, educação e previdência ${tag('argumento')}. Foram também usados para justificar políticas coercitivas de controle da natalidade e esterilizações forçadas em vários países ${tag('fato')}. A <em>Gaudium et spes</em> (n. 87) ensina que a decisão sobre o número de filhos cabe ao reto juízo dos pais, e não pode ser entregue à autoridade pública ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Tábua de vida', 'Tabela que descreve a mortalidade de uma coorte hipotética.'],
    ['Coorte', 'Grupo de pessoas que viveram um mesmo evento no mesmo período.'],
    ['Método das componentes', 'Projeção aplicando fecundidade, mortalidade e migração por idade.'],
    ['Variante', 'Conjunto de hipóteses de uma projeção (alta, média, baixa).'],
    ['Controle coercitivo', 'Imposição de limites à natalidade por força ou pressão do Estado.'],
  ],
  exemplos: `<p><strong>Lendo uma tábua:</strong> de 100.000 nascidos, 98.700 chegam ao primeiro ano, 90.000 aos 60 e 50.000 aos 80. A esperança de vida aos 60 anos é, digamos, de 22 anos: quem chega aos 60 vive, em média, até 82. Os números são ilustrativos; os valores reais estão nas tábuas do IBGE.</p>`,
  contexto: `<p><strong>No mundo:</strong> a política do filho único na China (1980–2015) foi exemplo de controle coercitivo da natalidade, com consequências demográficas e humanas graves ${tag('fato')}. <strong>No Brasil:</strong> o IBGE publica projeções da população por estado com horizonte de décadas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma projeção não é uma previsão', tag: 'argumento',
    premissas: ['Uma projeção aplica hipóteses sobre fecundidade, mortalidade e migração.', 'Essas variáveis dependem de decisões humanas, crises e mudanças imprevisíveis.', 'Se as hipóteses não se confirmarem, o resultado muda.'],
    conclusao: 'Logo, uma projeção é condicional e deve ser lida junto com suas hipóteses.',
    nota: 'Por isso se publicam variantes, e não um número único.',
  },
  objecoes: [
    { objecao: 'Se a população vai cair, o Estado deve obrigar as pessoas a ter mais filhos.', tag: 'debate',
      resposta: 'Políticas coercitivas, para reduzir ou aumentar a natalidade, violam a liberdade dos casais (GS 87; CIC 2372). O Estado pode apoiar as famílias — moradia, licenças, creches, renda — para que possam ter os filhos que desejam. A diferença está entre apoiar a decisão dos pais e substituí-la.' },
  ],
  aplicacao: `<p>Consulte a projeção do IBGE para a população do seu estado em 2050 e explique as hipóteses que a sustentam e o que aconteceria se a fecundidade fosse maior ou menor.</p>`,
  fonte: {
    obra: 'IBGE, Projeções da população do Brasil e das unidades da federação; Concílio Vaticano II, Gaudium et spes (1965), n. 87', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>No IBGE, as hipóteses de fecundidade e mortalidade da projeção. Na Gaudium et spes, o papel dos pais e os limites da autoridade pública.</p>`,
  },
  perguntas: [
    { p: 'O que é uma tábua de vida?', r: 'Uma tabela que descreve a mortalidade de uma coorte hipotética sob as taxas de um período.' },
    { p: 'Qual a diferença entre projeção e previsão?', r: 'A projeção é condicional às hipóteses; não é previsão segura.' },
    { p: 'O que ensina a Gaudium et spes, n. 87?', r: 'Que a decisão sobre o número de filhos cabe aos pais, não à autoridade pública.' },
  ],
  exercicios: [
    mc('Uma das primeiras tábuas de vida foi publicada por Halley em:', ['1662', '1693', '1798', '1872'], 1, 'Breslau.'),
    mc('O método das componentes usa hipóteses de:', ['Clima', 'Fecundidade, mortalidade e migração', 'Renda apenas', 'Eleições'], 1, 'Projeção.'),
    mc('A ONU publica projeções com variantes de:', ['Renda', 'Fecundidade', 'Clima', 'Idioma'], 1, 'Alta, média, baixa.'),
    mc('A política do filho único na China vigorou de:', ['1949 a 1979', '1980 a 2015', '2000 a 2020', '1960 a 1970'], 1, 'Controle coercitivo.'),
    mc('Segundo GS 87, a decisão sobre o número de filhos cabe:', ['Ao Estado', 'Aos pais', 'À ONU', 'Aos médicos'], 1, 'Reto juízo dos pais.'),
    disc('Explique a projeção do IBGE para seu estado em 2050, suas hipóteses e o efeito de outra fecundidade.', ['Projeção', 'Hipóteses', 'Cenário alternativo', 'Cautela']),
  ],
  resumo: ['Tábua de vida: coorte hipotética.', 'Halley (1693).', 'Método das componentes; variantes.', 'Projeção ≠ previsão.', 'Ética: GS 87; filho único.'],
  referencias: [
    { texto: 'IBGE, Projeções da população.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Edmond Halley, "An Estimate of the Degrees of the Mortality of Mankind" (1693).' },
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965), n. 87.', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da projeção', 'Ler os textos indicados'],
  revisao: [['Tábua', 'Coorte hipotética.'], ['Projeção', 'Condicional.'], ['GS 87', 'Pais decidem.']],
  avancado: {
    texto: `<h3>Inércia demográfica</h3>
<p>Mesmo que a fecundidade caia abaixo da reposição, a população pode continuar crescendo por décadas, porque há muitas pessoas em idade reprodutiva, nascidas quando a fecundidade era alta ${tag('fato')}. O fenômeno, chamado inércia ou momentum demográfico, ajuda a entender por que a população brasileira ainda cresceu no início do século XXI ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Manuais de demografia: momentum populacional.' }],
    exercicios: [
      mc('A inércia demográfica explica crescimento mesmo com fecundidade:', ['Muito alta', 'Abaixo da reposição', 'Zero', 'Constante em 5'], 1, 'Estrutura etária.'),
      mc('A inércia decorre de muitas pessoas em idade:', ['Infantil', 'Reprodutiva', 'Idosa', 'Escolar'], 1, 'Gerações numerosas.'),
      mc('A inércia ajuda a explicar o crescimento brasileiro no:', ['Século XVIII', 'Início do século XXI', 'Século XIX', 'Futuro distante'], 1, 'Interpretação.'),
      disc('Explique a inércia demográfica com a pirâmide etária brasileira.', ['Conceito', 'Pirâmide', 'Efeito', 'Fim da inércia'])],
  },
}),

avaliacao('dm1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a dinâmica populacional, os indicadores, as fontes e as projeções, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de equação compensadora, taxas e razão de dependência.</li><li>Releia sua pirâmide etária.</li></ul>`,
[
  disc('Analise a população de um município com dados do censo: crescimento, decomposição em saldo natural e migratório, pirâmide etária e razão de dependência.', ['Crescimento', 'Decomposição', 'Pirâmide', 'Razão de dependência']),
  disc('Explique a diferença entre dado, projeção e política demográfica, com um exemplo e o ensino da Igreja sobre a liberdade dos pais.', ['Dado', 'Projeção', 'Política', 'Doutrina']),
]),
];
