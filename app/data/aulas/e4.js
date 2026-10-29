// Economia IV — estudos avançados (etapa 8 do percurso de Economia).
// Microeconomia e estruturas de mercado, moeda e crescimento, economia internacional e formação
// econômica do Brasil. Exige cálculos; números históricos vêm com período e fonte.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'e4-1', titulo: 'Microeconomia: custos, firmas, estruturas de mercado e teoria dos jogos', duracao: '150 min',
  aprendera: ['Calcular custos fixos, variáveis, médios e marginais', 'Explicar a regra de maximização do lucro', 'Comparar concorrência perfeita, monopólio, oligopólio e concorrência monopolística', 'Usar o equilíbrio de Nash em casos simples'],
  prereq: ['Economia III (módulo E3)', 'Matemática: funções e noção de derivada (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Quanto uma empresa deve produzir? Por que alguns mercados têm milhares de vendedores e outros, poucos? Como empresas rivais decidem preços sabendo que a outra vai reagir? A microeconomia responde com conceitos de custo, estrutura de mercado e estratégia.</p>
<h3>Custos</h3>
<ul>
<li><strong>Custo fixo</strong>: não varia com a quantidade (aluguel). <strong>Custo variável</strong>: varia (matéria-prima).</li>
<li><strong>Custo médio</strong> = custo total ÷ quantidade. <strong>Custo marginal</strong> = acréscimo do custo total ao produzir uma unidade a mais ${tag('fato')}.</li>
</ul>
<p>Uma empresa maximiza o lucro produzindo até o ponto em que a receita marginal iguala o custo marginal ${tag('fato')}: produzir mais custaria mais do que renderia; produzir menos deixaria lucro de lado.</p>
<h3>Estruturas de mercado</h3>
<ul>
<li><strong>Concorrência perfeita</strong>: muitos vendedores de produto homogêneo; ninguém controla o preço; no longo prazo, lucro econômico tende a zero ${tag('fato')}.</li>
<li><strong>Monopólio</strong>: um vendedor; produz menos e cobra mais que em concorrência, gerando perda de bem-estar ${tag('fato')}.</li>
<li><strong>Oligopólio</strong>: poucos vendedores interdependentes. Antoine Cournot (1838) modelou a concorrência em quantidades entre duas empresas ${tag('fato')}.</li>
<li><strong>Concorrência monopolística</strong>: muitos vendedores de produtos diferenciados (Edward Chamberlin e Joan Robinson, 1933) ${tag('fato')}.</li>
</ul>
<h3>Teoria dos jogos</h3>
<p>John Nash definiu (1950) o equilíbrio em que nenhum jogador ganha ao mudar sozinho sua estratégia, dadas as estratégias dos outros; recebeu o Nobel em 1994 ${tag('fato')}. Em oligopólios, o equilíbrio de Nash explica por que cartéis são instáveis: cada membro ganha ao "trair" o acordo, se os demais o cumprem ${tag('argumento')}.</p>
<h3>Defesa da concorrência</h3>
<p>No Brasil, a Lei nº 12.529, de 2011, estruturou o Sistema Brasileiro de Defesa da Concorrência; o CADE analisa fusões e julga cartéis ${tag('fato')}.</p>`,
  vocabulario: [
    ['Custo marginal', 'Acréscimo do custo total ao produzir uma unidade a mais.'],
    ['Receita marginal', 'Acréscimo da receita ao vender uma unidade a mais.'],
    ['Monopólio', 'Um único vendedor no mercado.'],
    ['Oligopólio', 'Poucos vendedores interdependentes.'],
    ['Equilíbrio de Nash', 'Ninguém ganha ao mudar sozinho de estratégia.'],
    ['Cartel', 'Acordo entre concorrentes para fixar preços ou dividir mercados.'],
  ],
  exemplos: `<p><strong>Cálculo:</strong> uma padaria tem custo fixo diário de R$ 200 e custo variável de R$ 0,50 por pão. Para 1.000 pães, o custo total é R$ 700 e o custo médio, R$ 0,70; o custo marginal de cada pão é R$ 0,50. Se vende cada pão a R$ 0,80, o lucro é R$ 100. Produzir mais compensa enquanto a receita do pão adicional superar R$ 0,50 e houver demanda.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria dos jogos tornou-se instrumento central da economia, da ciência política e do direito da concorrência. <strong>No Brasil:</strong> setores como combustíveis, telecomunicações e bancos são frequentemente analisados como oligopólios; o CADE julga cartéis e aprova fusões com restrições ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que cartéis tendem a ser instáveis', tag: 'argumento',
    premissas: ['Num cartel, cada empresa se compromete a vender menos para manter o preço alto.', 'Se as outras cumprem o acordo, uma empresa ganha mais vendendo um pouco além da cota ao preço alto.', 'Todas raciocinam assim e o acordo, sem punição eficaz, se desfaz.'],
    conclusao: 'Logo, cartéis tendem a ser instáveis sem mecanismos de vigilância e punição — o que explica também a eficácia dos programas de leniência.',
    nota: 'É aplicação do dilema do prisioneiro (aula e3-3) a um mercado real.',
  },
  objecoes: [
    { objecao: 'Grandes empresas são sempre prejudiciais aos consumidores.', tag: 'debate',
      resposta: 'O tamanho pode gerar economias de escala que reduzem custos e preços. O que prejudica é o abuso de poder de mercado; por isso o direito da concorrência analisa condutas e efeitos, não apenas o tamanho.' },
  ],
  aplicacao: `<p>Escolha um pequeno negócio que você conhece e estime seus custos fixos e variáveis. Calcule o custo médio para dois níveis de produção e discuta qual a estrutura de mercado em que ele atua.</p>`,
  fonte: {
    obra: 'Antoine Cournot, Pesquisas sobre os princípios matemáticos da teoria das riquezas (1838), cap. 7; John Nash, "Equilibrium Points in N-Person Games" (1950)', link: null,
    orientacao: `<p>Em Cournot, identifique a hipótese sobre como cada empresa reage à produção da outra. No artigo de Nash, localize a definição de ponto de equilíbrio. Aplique ambos a um duopólio de duas empresas de ônibus numa cidade.</p>`,
  },
  perguntas: [
    { p: 'Qual a regra de maximização do lucro?', r: 'Produzir até que a receita marginal iguale o custo marginal.' },
    { p: 'O que é equilíbrio de Nash?', r: 'Situação em que nenhum jogador ganha ao mudar sozinho de estratégia.' },
    { p: 'Que lei estrutura a defesa da concorrência no Brasil?', r: 'A Lei nº 12.529, de 2011.' },
  ],
  exercicios: [
    mc('Custo fixo de R$ 300 e custo variável de R$ 2 por unidade. Para 100 unidades, o custo médio é:', ['R$ 2', 'R$ 3', 'R$ 5', 'R$ 500'], 2, '(300 + 200) ÷ 100 = R$ 5.'),
    mc('A empresa maximiza o lucro quando:', ['Custo médio é mínimo', 'Receita marginal = custo marginal', 'Receita total é máxima', 'Custo fixo é zero'], 1, 'Regra marginal.'),
    mc('O modelo de duopólio com concorrência em quantidades é de:', ['Cournot', 'Nash', 'Chamberlin', 'Pigou'], 0, '1838.'),
    mc('Concorrência monopolística caracteriza-se por:', ['Um vendedor', 'Muitos vendedores de produtos diferenciados', 'Produto homogêneo', 'Poucos vendedores'], 1, 'Chamberlin e Robinson (1933).'),
    mc('O Nobel de 1994 foi concedido a Nash por:', ['Teoria da inflação', 'Teoria dos jogos', 'Contas nacionais', 'Comércio internacional'], 1, 'Equilíbrio de Nash.'),
    disc('Analise um mercado brasileiro concentrado (combustíveis, telefonia ou bancos): estrutura, indícios de poder de mercado, papel do CADE e uma política que aumentaria a concorrência.', ['Identifica a estrutura', 'Aponta indícios', 'Explica o papel do CADE', 'Propõe política com efeitos previstos']),
  ],
  resumo: ['Custos fixos, variáveis, médios e marginais.', 'Lucro máximo: receita marginal = custo marginal.', 'Concorrência, monopólio, oligopólio (Cournot), concorrência monopolística.', 'Equilíbrio de Nash (1950); cartéis instáveis.', 'Brasil: Lei 12.529/2011 e CADE.'],
  referencias: [
    { texto: 'Antoine Cournot, Pesquisas sobre os princípios matemáticos da teoria das riquezas (1838).' },
    { texto: 'John Nash, "Equilibrium Points in N-Person Games" (1950).' },
    { texto: 'Hal Varian, Microeconomia: uma abordagem moderna (manual).' },
    { texto: 'Lei nº 12.529, de 30 de novembro de 2011 (Sistema Brasileiro de Defesa da Concorrência).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Resolver os cálculos de custo'],
  revisao: [['Custo marginal', 'Custo da unidade adicional.'], ['Nash', 'Equilíbrio (1950); Nobel 1994.'], ['CADE', 'Lei 12.529/2011.']],
  avancado: {
    texto: `<h3>Discriminação de preços</h3>
<p>Empresas com poder de mercado podem cobrar preços diferentes de grupos diferentes (meia-entrada, tarifas por horário), capturando parte do excedente do consumidor ${tag('fato')}. Os efeitos sobre o bem-estar dependem do caso: podem ampliar o acesso de quem paga menos ${tag('interpretacao')}.</p>
<h3>Mercados de dois lados</h3>
<p>Plataformas digitais servem dois grupos (usuários e anunciantes, motoristas e passageiros) e definem preços considerando os dois lados; Jean Tirole recebeu o Nobel em 2014 também por estudos sobre regulação desses mercados ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jean Tirole, Economia do bem comum (2016).' }],
    exercicios: [
      mc('A meia-entrada é exemplo de:', ['Concorrência perfeita', 'Discriminação de preços', 'Cartel', 'Bem público'], 1, 'Preços diferentes por grupo.'),
      mc('Mercados de dois lados são típicos de:', ['Plataformas digitais', 'Agricultura de subsistência', 'Bens públicos', 'Moeda'], 0, 'Dois grupos de usuários.'),
      mc('Jean Tirole recebeu o Nobel em:', ['1994', '2009', '2014', '2021'], 2, 'Poder de mercado e regulação.'),
      disc('Uma plataforma de transporte por aplicativo tem poder de mercado no Brasil? Analise os dois lados do mercado e uma regulação possível.', ['Identifica os dois lados', 'Analisa poder de mercado', 'Propõe regulação', 'Aponta riscos'])],
  },
}),

aula({
  id: 'e4-2', titulo: 'Macroeconomia: moeda, bancos, ciclos e crescimento econômico', duracao: '150 min',
  aprendera: ['Explicar como bancos e Banco Central criam e regulam a moeda', 'Explicar ciclos econômicos e seus indicadores', 'Expor o modelo de Solow e a importância da produtividade', 'Analisar o crescimento brasileiro em diferentes períodos'],
  prereq: ['Aula anterior', 'Economia I: PIB, inflação e juros'],
  explicacao: `
<h3>O problema</h3>
<p>Por que alguns países ficaram ricos e outros não? Por que a economia alterna expansões e recessões? E o que é, afinal, o dinheiro que circula? Esta aula reúne moeda, ciclos e crescimento.</p>
<h3>Moeda e bancos</h3>
<p>A moeda tem três funções: meio de troca, unidade de conta e reserva de valor ${tag('fato')}. A maior parte do dinheiro de uma economia moderna não é papel-moeda, mas depósitos bancários. Quando os bancos concedem empréstimos, criam depósitos — e, portanto, moeda — dentro dos limites da regulação e da política do Banco Central ${tag('fato')}. O Banco Central controla a taxa básica de juros, regula o sistema financeiro e atua como emprestador de última instância ${tag('fato')}.</p>
<h3>Ciclos econômicos</h3>
<p>A atividade alterna expansões e recessões. No Brasil, o Comitê de Datação de Ciclos Econômicos (CODACE), da Fundação Getulio Vargas, data oficialmente os ciclos ${tag('fato')}. Indicadores: PIB trimestral, produção industrial, emprego, crédito, confiança.</p>
<h3>Crescimento</h3>
<p>No modelo de Robert Solow (1956), o crescimento da renda por trabalhador no longo prazo depende sobretudo do progresso técnico; acumular capital ajuda, mas tem retornos decrescentes ${tag('fato')}. Solow recebeu o Nobel em 1987 ${tag('fato')}. Paul Romer (Nobel em 2018) explicou o progresso técnico como resultado de ideias, pesquisa e incentivos, o "crescimento endógeno" ${tag('fato')}. A produtividade — produzir mais com os mesmos recursos — é, portanto, a chave do enriquecimento ${tag('interpretacao')}.</p>
<h3>O crescimento brasileiro</h3>
<p>O PIB cresceu em média mais de 10% ao ano entre 1968 e 1973, o "milagre econômico" ${tag('fato')}. Os anos 1980 ficaram conhecidos como "década perdida", com estagnação, crise da dívida e alta inflação ${tag('fato')}. Desde então o crescimento foi mais lento, e o baixo crescimento da produtividade é diagnóstico frequente da literatura ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Funções da moeda', 'Meio de troca, unidade de conta, reserva de valor.'],
    ['Emprestador de última instância', 'Papel do Banco Central de prover liquidez em crises.'],
    ['Ciclo econômico', 'Alternância de expansões e recessões.'],
    ['Modelo de Solow', 'Crescimento de longo prazo pelo progresso técnico (1956).'],
    ['Produtividade', 'Produção por unidade de recurso (trabalho, capital).'],
    ['Crescimento endógeno', 'Progresso técnico explicado por ideias e incentivos (Romer).'],
  ],
  exemplos: `<p><strong>Por que a produtividade importa:</strong> se a produção por trabalhador cresce 1% ao ano, a renda dobra em cerca de 70 anos; com 3%, em cerca de 23 anos (regra aproximada: 70 dividido pela taxa). Pequenas diferenças acumuladas por décadas separam países ricos de pobres.</p>`,
  contexto: `<p><strong>No mundo:</strong> a experiência de países que enriqueceram rapidamente (Coreia do Sul, por exemplo) é estudada para entender o papel da educação, do investimento e das instituições. <strong>No Brasil:</strong> o contraste entre o crescimento rápido de 1950–1980 e o lento depois de 1980 é uma das grandes questões da economia brasileira ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que acumular capital não basta para crescer indefinidamente', tag: 'argumento',
    premissas: ['Cada nova máquina acrescenta menos produção que a anterior, se o número de trabalhadores e a técnica não mudam (retornos decrescentes).', 'Parte do capital se desgasta a cada ano e precisa ser reposta.', 'Chega um ponto em que o investimento apenas repõe o desgaste.'],
    conclusao: 'Logo, sem progresso técnico, a renda por trabalhador para de crescer no longo prazo.',
    nota: 'É o resultado central de Solow; explica a ênfase em educação, inovação e instituições.',
  },
  objecoes: [
    { objecao: 'O Banco Central "imprime dinheiro" para pagar o governo.', tag: 'debate',
      resposta: 'No Brasil, a Lei de Responsabilidade Fiscal proíbe o Banco Central de financiar diretamente o Tesouro. A relação entre política fiscal e monetária existe, mas passa pelos mercados de títulos e pelos juros.' },
  ],
  aplicacao: `<p>No IPEADATA ou no IBGE, obtenha a taxa de crescimento do PIB brasileiro de 1950 a hoje. Calcule as médias por década e relacione-as aos períodos estudados em História.</p>`,
  fonte: {
    obra: 'Robert Solow, "A Contribution to the Theory of Economic Growth" (1956); Paul Romer, "Endogenous Technological Change" (1990)', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' },
    orientacao: `<p>Em Solow, identifique a hipótese de retornos decrescentes e a conclusão sobre o progresso técnico. Em Romer, a ideia de que conhecimento é bem não rival. Relacione as duas ao crescimento brasileiro.</p>`,
  },
  perguntas: [
    { p: 'Quais as funções da moeda?', r: 'Meio de troca, unidade de conta e reserva de valor.' },
    { p: 'O que explica o crescimento de longo prazo no modelo de Solow?', r: 'O progresso técnico.' },
    { p: 'Quando ocorreu o "milagre econômico" brasileiro?', r: 'Entre 1968 e 1973.' },
  ],
  exercicios: [
    mc('A maior parte da moeda de uma economia moderna é:', ['Papel-moeda', 'Depósitos bancários', 'Ouro', 'Moedas metálicas'], 1, 'Criados também por empréstimos.'),
    mc('Quem data oficialmente os ciclos econômicos no Brasil?', ['IBGE', 'CODACE (FGV)', 'Banco Central', 'Ipea'], 1, 'Comitê de Datação de Ciclos Econômicos.'),
    mc('O modelo de Solow é de:', ['1936', '1956', '1974', '1990'], 1, '1956; Nobel em 1987.'),
    mc('Com crescimento de 2% ao ano, a renda dobra em cerca de:', ['10 anos', '35 anos', '70 anos', '140 anos'], 1, '70 ÷ 2 = 35.'),
    mc('A "década perdida" refere-se aos anos:', ['1950', '1970', '1980', '2000'], 2, 'Estagnação, dívida e inflação.'),
    disc('Por que o Brasil cresceu rápido entre 1950 e 1980 e devagar depois? Use o modelo de Solow, dados e pelo menos duas explicações da literatura.', ['Dados por período', 'Aplica Solow', 'Duas explicações', 'Conclusão com grau de confiança']),
  ],
  resumo: ['Moeda: três funções; bancos criam depósitos.', 'Banco Central: juros, regulação, última instância.', 'Ciclos (CODACE).', 'Solow (1956) e Romer (1990): produtividade.', 'Brasil: milagre (1968–1973) e década perdida (1980).'],
  referencias: [
    { texto: 'Robert Solow, "A Contribution to the Theory of Economic Growth" (1956).' },
    { texto: 'Paul Romer, "Endogenous Technological Change" (1990).' },
    { texto: 'Banco Central do Brasil, Relatório de Economia Bancária.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
    { texto: 'Fabio Giambiagi e outros (orgs.), Economia brasileira contemporânea (2005).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Calcular médias de crescimento por década'],
  revisao: [['Solow', 'Progresso técnico no longo prazo.'], ['Milagre', '1968–1973.'], ['Moeda', 'Depósitos criados pelos bancos.']],
  avancado: {
    texto: `<h3>Contabilidade do crescimento</h3>
<p>A contabilidade do crescimento decompõe o aumento do PIB em contribuições do trabalho, do capital e de um resíduo, a produtividade total dos fatores ${tag('fato')}. Estudos para o Brasil apontam contribuição modesta da produtividade nas últimas décadas ${tag('interpretacao')}.</p>
<h3>A armadilha da renda média</h3>
<p>Alguns economistas falam de uma "armadilha da renda média": países que crescem até um nível intermediário e estagnam por não conseguirem passar a uma economia baseada em inovação ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Daron Acemoglu, Introdução ao crescimento econômico moderno (2009).' }],
    exercicios: [
      mc('O resíduo da contabilidade do crescimento é a:', ['Inflação', 'Produtividade total dos fatores', 'Taxa de juros', 'Balança comercial'], 1, 'O que não se explica por trabalho e capital.'),
      mc('A "armadilha da renda média" é:', ['Fato consensual', 'Hipótese em debate', 'Lei econômica', 'Regra do Banco Central'], 1, 'Debate aberto.'),
      mc('Contribuições ao crescimento vêm de:', ['Trabalho, capital e produtividade', 'Só capital', 'Só exportações', 'Só gasto público'], 0, 'Decomposição clássica.'),
      disc('O Brasil está numa "armadilha da renda média"? Use dados de produtividade e uma comparação internacional.', ['Define a hipótese', 'Usa dados', 'Compara países', 'Conclusão'])],
  },
}),

aula({
  id: 'e4-3', titulo: 'Economia internacional: comércio, câmbio e balanço de pagamentos', duracao: '150 min',
  aprendera: ['Explicar as teorias do comércio e seus efeitos distributivos', 'Ler o balanço de pagamentos', 'Explicar regimes cambiais e o tripé macroeconômico brasileiro', 'Situar o Brasil no comércio mundial'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o Brasil exporta soja e minério e importa eletrônicos? O que faz o dólar subir ou cair? A economia internacional estuda trocas entre países, moedas e fluxos de capital.</p>
<h3>Teorias do comércio</h3>
<p>Além da vantagem comparativa de Ricardo, o modelo de Heckscher-Ohlin explica o comércio pela dotação relativa de fatores: países exportam bens que usam intensivamente os fatores abundantes ${tag('fato')}. O comércio aumenta a renda agregada, mas tem efeitos distributivos: setores e trabalhadores que competem com importações podem perder ${tag('interpretacao')}. Prebisch e Singer (1949–1950) sustentaram a tendência à deterioração dos termos de troca dos exportadores de produtos primários, tese debatida com dados de longo prazo ${tag('debate')}.</p>
<h3>Instituições do comércio</h3>
<p>O GATT (1947) e a Organização Mundial do Comércio (1995) regulam o comércio multilateral ${tag('fato')}. O Mercosul foi criado pelo Tratado de Assunção (1991) ${tag('fato')}.</p>
<h3>Balanço de pagamentos</h3>
<p>Registra as transações com o exterior: <strong>transações correntes</strong> (bens, serviços, rendas) e <strong>conta financeira</strong> (investimentos e empréstimos) ${tag('fato')}. Um déficit em transações correntes é financiado por entrada de capital ou redução de reservas ${tag('fato')}.</p>
<h3>Câmbio</h3>
<p>Em regime flutuante, a taxa de câmbio é determinada pelo mercado; em regime fixo, pelo governo, que precisa de reservas para sustentá-la ${tag('fato')}. O Brasil adotou o câmbio flutuante em janeiro de 1999 ${tag('fato')}. Com as metas de inflação e a meta de superávit primário, formou-se o chamado "tripé macroeconômico" ${tag('fato')}.</p>
<h3>O Brasil no comércio mundial</h3>
<p>Soja, minério de ferro e petróleo estão entre os principais produtos de exportação; a China é o maior parceiro comercial do país desde 2009 ${tag('fato')}.</p>`,
    vocabulario: [
    ['Heckscher-Ohlin', 'Comércio explicado pela dotação relativa de fatores.'],
    ['Termos de troca', 'Preço das exportações em relação ao das importações.'],
    ['Balanço de pagamentos', 'Registro das transações com o exterior.'],
    ['Transações correntes', 'Bens, serviços e rendas.'],
    ['Câmbio flutuante', 'Taxa definida pelo mercado.'],
    ['Tripé macroeconômico', 'Metas de inflação, câmbio flutuante e meta fiscal (1999).'],
  ],
  exemplos: `<p><strong>Efeito do câmbio:</strong> se o real se desvaloriza (o dólar sobe de R$ 5 para R$ 6), exportadores recebem mais reais por dólar vendido e importações ficam mais caras; parte disso chega à inflação ("repasse cambial"). Uma valorização tem os efeitos opostos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a globalização das últimas décadas intensificou o comércio e os fluxos de capital, com crises cambiais em vários países emergentes. <strong>No Brasil:</strong> a crise cambial de 1999, a adoção do tripé e o ciclo de commodities dos anos 2000 marcaram a inserção internacional recente ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o comércio gera ganhadores e perdedores, mesmo com ganho agregado', tag: 'argumento',
    premissas: ['A abertura comercial aumenta a renda total ao realocar recursos para setores mais produtivos.', 'Setores que competem com importações encolhem, e seus trabalhadores e capitais perdem no curto prazo.', 'A realocação não é instantânea nem gratuita.'],
    conclusao: 'Logo, o comércio pode aumentar a renda agregada e, ao mesmo tempo, prejudicar grupos específicos — o que levanta questões de compensação e transição.',
    nota: 'O argumento combina análise positiva (ganhos e perdas) com uma questão normativa (compensar ou não), que a solidariedade da Doutrina Social ilumina.',
  },
  objecoes: [
    { objecao: 'Exportar produtos primários condena o país ao atraso.', tag: 'debate',
      resposta: 'A tese de Prebisch tem apoio e críticas nos dados. Países como Austrália e Noruega enriqueceram exportando recursos naturais, com instituições e investimento em capital humano. O que pesa é a produtividade e o uso das receitas, não só o tipo de produto.' },
  ],
  aplicacao: `<p>No site do Banco Central, consulte o saldo em transações correntes do último ano e as reservas internacionais. No do Ministério do Desenvolvimento, Indústria, Comércio e Serviços, os principais produtos exportados e destinos. Registre com data e fonte.</p>`,
  fonte: {
    obra: 'Raúl Prebisch, O desenvolvimento econômico da América Latina e seus principais problemas (1949); Banco Central do Brasil, estatísticas do setor externo', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' },
    orientacao: `<p>Em Prebisch, identifique o argumento sobre termos de troca. Nas estatísticas do Banco Central, localize as contas do balanço de pagamentos e explique o sinal de cada uma.</p>`,
  },
  perguntas: [
    { p: 'O que explica o comércio no modelo de Heckscher-Ohlin?', r: 'A dotação relativa de fatores de produção.' },
    { p: 'Quando o Brasil adotou o câmbio flutuante?', r: 'Em janeiro de 1999.' },
    { p: 'O que compõe o tripé macroeconômico?', r: 'Metas de inflação, câmbio flutuante e meta de superávit primário.' },
  ],
  exercicios: [
    mc('A Organização Mundial do Comércio foi criada em:', ['1947', '1991', '1995', '2001'], 2, 'O GATT é de 1947.'),
    mc('O Mercosul foi criado pelo Tratado de:', ['Madri', 'Assunção', 'Tordesilhas', 'Ouro Preto'], 1, '1991.'),
    mc('Uma desvalorização do real tende a:', ['Baratear importações', 'Favorecer exportadores', 'Reduzir a inflação imediatamente', 'Não ter efeito'], 1, 'Mais reais por dólar exportado.'),
    mc('O maior parceiro comercial do Brasil desde 2009 é:', ['Estados Unidos', 'Argentina', 'China', 'Alemanha'], 2, 'China.'),
    mc('A tese da deterioração dos termos de troca é de:', ['Ricardo', 'Prebisch e Singer', 'Heckscher e Ohlin', 'Friedman'], 1, '1949–1950.'),
    disc('A dependência brasileira de exportações de commodities é problema ou vantagem? Use dados de comércio exterior, a tese de Prebisch e um contraexemplo internacional.', ['Dados com fonte', 'Expõe Prebisch', 'Usa contraexemplo', 'Conclusão fundamentada']),
  ],
  resumo: ['Ricardo e Heckscher-Ohlin; efeitos distributivos.', 'Prebisch e Singer: termos de troca (debate).', 'GATT (1947), OMC (1995), Mercosul (1991).', 'Balanço de pagamentos: correntes e financeira.', 'Câmbio flutuante (1999) e tripé; China parceira desde 2009.'],
  referencias: [
    { texto: 'Paul Krugman e Maurice Obstfeld, Economia internacional (manual).' },
    { texto: 'Raúl Prebisch, O desenvolvimento econômico da América Latina e seus principais problemas (1949).' },
    { texto: 'Tratado de Assunção (1991).' },
    { texto: 'Banco Central do Brasil, estatísticas do setor externo.', link: { url: 'https://www.bcb.gov.br', rotulo: 'Banco Central do Brasil' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar os dados do setor externo'],
  revisao: [['Tripé', 'Metas, câmbio flutuante, meta fiscal (1999).'], ['Mercosul', 'Tratado de Assunção (1991).'], ['Balanço de pagamentos', 'Correntes e financeira.']],
  avancado: {
    texto: `<h3>O trilema da política monetária</h3>
<p>Um país não pode ter ao mesmo tempo câmbio fixo, livre movimento de capitais e política monetária independente: precisa escolher dois ${tag('fato')}. O Brasil, desde 1999, escolheu câmbio flutuante com mobilidade de capital e política monetária voltada à inflação ${tag('interpretacao')}.</p>
<h3>Doença holandesa</h3>
<p>A descoberta de recursos naturais pode valorizar a moeda e prejudicar a indústria, fenômeno observado na Holanda após o gás nos anos 1960 ${tag('fato')}; sua aplicação ao Brasil é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Barry Eichengreen, A globalização do capital (1996).' }],
    exercicios: [
      mc('O trilema afirma que não se pode ter simultaneamente:', ['Inflação e desemprego', 'Câmbio fixo, livre capital e política monetária independente', 'Exportação e importação', 'Juros e crédito'], 1, 'Escolhem-se dois.'),
      mc('"Doença holandesa" refere-se a:', ['Epidemia', 'Valorização cambial após descoberta de recursos que prejudica a indústria', 'Inflação alta', 'Crise bancária'], 1, 'Gás na Holanda.'),
      mc('O Brasil, desde 1999, abriu mão de:', ['Política monetária independente', 'Câmbio fixo', 'Mobilidade de capital', 'Banco Central'], 1, 'Câmbio flutuante.'),
      disc('O Brasil sofre de "doença holandesa"? Exponha o mecanismo, dados de câmbio e indústria, e posições a favor e contra.', ['Expõe o mecanismo', 'Usa dados', 'Posições a favor e contra', 'Conclusão'])],
  },
}),

aula({
  id: 'e4-4', titulo: 'Formação econômica do Brasil: dos ciclos coloniais ao Plano Real', duracao: '150 min',
  aprendera: ['Situar os grandes ciclos e mudanças estruturais da economia brasileira', 'Explicar a industrialização por substituição de importações e seus instrumentos', 'Explicar a crise da dívida, a hiperinflação e os planos de estabilização', 'Comparar interpretações (Furtado, Campos) com os dados'],
  prereq: ['Aulas anteriores do módulo', 'História IV e V (formação do Brasil e Brasil republicano)'],
  explicacao: `
<h3>O problema</h3>
<p>Como uma economia colonial exportadora se tornou uma economia industrial diversificada, e por que esse processo enfrentou crises recorrentes? Esta aula cruza a História do Brasil com os instrumentos econômicos estudados.</p>
<h3>Economia colonial e imperial</h3>
<p>O açúcar no Nordeste (séculos XVI–XVII), o ouro em Minas (século XVIII) e o café no Sudeste (século XIX e início do XX) sucederam-se como principais produtos de exportação, cada um com sua organização do trabalho e do território ${tag('fato')}. Em 1906, o Convênio de Taubaté organizou a compra de excedentes de café pelos governos estaduais para sustentar o preço ${tag('fato')}.</p>
<h3>Industrialização</h3>
<p>A partir dos anos 1930, e sobretudo depois da Segunda Guerra, o Brasil industrializou-se por <strong>substituição de importações</strong>, com proteção e investimento estatal ${tag('interpretacao')}. Marcos: a Companhia Siderúrgica Nacional (1941), o BNDE (1952), a Petrobras (1953) e o Plano de Metas de Juscelino Kubitschek (1956–1961) ${tag('fato')}.</p>
<h3>Do PAEG ao II PND</h3>
<p>O PAEG (1964), de Roberto Campos e Octávio Gouvêa de Bulhões, reformou o sistema financeiro e criou a correção monetária ${tag('fato')}. Seguiram-se o "milagre" (1968–1973) e, depois do choque do petróleo, o II PND (1974–1979), financiado em grande parte com dívida externa ${tag('fato')}.</p>
<h3>Crise e estabilização</h3>
<p>Com a alta dos juros internacionais e a moratória mexicana de 1982, o Brasil entrou na crise da dívida ${tag('fato')}. A inflação acelerou; os planos Cruzado (1986), Bresser (1987), Verão (1989) e Collor (1990, com bloqueio das aplicações financeiras) fracassaram em estabilizá-la de forma duradoura ${tag('fato')}. O Plano Real (1994) a estabilizou ${tag('fato')}. Seguiram-se privatizações nos anos 1990, o ciclo de commodities dos anos 2000 e a recessão de 2014–2016 ${tag('fato')}.</p>
<h3>Interpretações</h3>
<p>Celso Furtado, em <em>Formação econômica do Brasil</em> (1959), explicou a passagem da economia colonial à industrial pelo deslocamento do "centro dinâmico" do mercado externo para o interno ${tag('interpretacao')}. Roberto Campos, em <em>A lanterna na popa</em> (1994), criticou o estatismo e a inflação crônica ${tag('interpretacao')}. As duas leituras dão pesos diferentes ao Estado e ao mercado e devem ser confrontadas com os dados de cada período ${tag('debate')}.</p>`,
  vocabulario: [
    ['Substituição de importações', 'Industrialização para produzir internamente o que se importava.'],
    ['Correção monetária', 'Reajuste de valores pela inflação, criado em 1964.'],
    ['II PND', 'Plano Nacional de Desenvolvimento de 1974–1979.'],
    ['Crise da dívida', 'Dificuldade de pagar a dívida externa a partir de 1982.'],
    ['Centro dinâmico', 'Para Furtado, o setor que comanda o crescimento (externo ou interno).'],
  ],
  exemplos: `<p><strong>Indexação e inflação:</strong> a correção monetária de 1964 permitiu conviver com a inflação, mas, ao generalizar-se, tornou-a inercial: cada reajuste repassava a inflação passada para a futura. É o elo entre esta aula e a teoria da inflação inercial (aula e3-1).</p>`,
  contexto: `<p><strong>No mundo:</strong> a industrialização latino-americana, a crise da dívida dos anos 1980 e as reformas dos anos 1990 foram processos regionais. <strong>No Brasil:</strong> a economia é hoje diversificada, com agronegócio competitivo, indústria e serviços, e com desafios de produtividade e desigualdade regional ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o II PND agravou a vulnerabilidade externa', tag: 'argumento',
    premissas: ['O II PND foi financiado em grande parte com empréstimos externos a juros flutuantes.', 'No fim dos anos 1970 e início dos 1980, os juros internacionais subiram fortemente.', 'Com juros mais altos, o serviço da dívida cresceu justamente quando o crédito externo secou (1982).'],
    conclusao: 'Logo, o modo de financiamento do II PND aumentou a vulnerabilidade do país à crise da dívida.',
    nota: 'O argumento não nega os ganhos de capacidade produtiva do plano; avalia um risco de financiamento. A ponderação entre os dois é debatida.',
  },
  objecoes: [
    { objecao: 'A industrialização brasileira foi um fracasso porque dependeu do Estado.', tag: 'debate',
      resposta: 'Ela criou uma base industrial diversificada e também ineficiências e crises fiscais. Avaliar exige separar períodos e setores e comparar com alternativas e com outros países, em vez de um juízo em bloco.' },
  ],
  aplicacao: `<p>Monte uma linha do tempo econômica do Brasil de 1500 a hoje com quinze marcos (produtos, planos, crises, instituições). Para cinco deles, indique um dado quantitativo com fonte.</p>`,
  fonte: {
    obra: 'Celso Furtado, Formação econômica do Brasil (1959), parte V; Roberto Campos, A lanterna na popa (1994), capítulos sobre o PAEG', link: null,
    orientacao: `<p>Em Furtado, identifique o conceito de deslocamento do centro dinâmico. Em Campos, a avaliação do PAEG e da inflação. Compare como cada um explica a crise dos anos 1960.</p>`,
  },
  perguntas: [
    { p: 'O que foi o Convênio de Taubaté?', r: 'Acordo de 1906 para que governos estaduais comprassem excedentes de café e sustentassem o preço.' },
    { p: 'Quando foram criados a CSN, o BNDE e a Petrobras?', r: '1941, 1952 e 1953.' },
    { p: 'Qual a tese central de Formação econômica do Brasil?', r: 'O deslocamento do centro dinâmico do mercado externo para o interno.' },
  ],
  exercicios: [
    mc('O Plano de Metas foi do governo:', ['Vargas', 'Kubitschek', 'Geisel', 'Sarney'], 1, '1956–1961.'),
    mc('O PAEG (1964) criou:', ['O real', 'A correção monetária', 'O Mercosul', 'A Petrobras'], 1, 'Campos e Bulhões.'),
    mc('O II PND ocorreu entre:', ['1956 e 1961', '1968 e 1973', '1974 e 1979', '1986 e 1990'], 2, 'Governo Geisel.'),
    mc('O plano que bloqueou aplicações financeiras foi o:', ['Cruzado', 'Bresser', 'Collor', 'Real'], 2, '1990.'),
    mc('Formação econômica do Brasil (1959) é de:', ['Roberto Campos', 'Celso Furtado', 'Caio Prado Júnior', 'Eugênio Gudin'], 1, 'Celso Furtado.'),
    disc('Compare as interpretações de Furtado e de Campos sobre a industrialização brasileira e avalie-as com dados de crescimento, inflação e dívida de pelo menos dois períodos.', ['Expõe as duas interpretações', 'Usa dados de dois períodos', 'Avalia cada uma pelos dados', 'Conclusão fundamentada']),
  ],
  resumo: ['Açúcar, ouro, café; Convênio de Taubaté (1906).', 'Substituição de importações: CSN (1941), BNDE (1952), Petrobras (1953), Plano de Metas.', 'PAEG (1964), milagre (1968–1973), II PND (1974–1979).', 'Crise da dívida (1982); planos fracassados; Real (1994).', 'Furtado (1959) e Campos (1994).'],
  referencias: [
    { texto: 'Celso Furtado, Formação econômica do Brasil (1959).' },
    { texto: 'Roberto Campos, A lanterna na popa (1994).' },
    { texto: 'Marcelo de Paiva Abreu (org.), A ordem do progresso: dois séculos de política econômica no Brasil (2014).' },
    { texto: 'Fabio Giambiagi e outros (orgs.), Economia brasileira contemporânea (2005).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Montar a linha do tempo com dados'],
  revisao: [['Substituição de importações', 'CSN, BNDE, Petrobras, Plano de Metas.'], ['PAEG', '1964: correção monetária.'], ['Furtado', 'Centro dinâmico (1959).']],
  avancado: {
    texto: `<h3>A historiografia econômica revisada</h3>
<p>Pesquisas com dados regionais e séries de preços revisaram teses clássicas: por exemplo, a importância do mercado interno colonial e a diversidade da economia mineira do século XVIII ${tag('interpretacao')}. Edmar Bacha chamou a economia brasileira de "Belíndia" (1974), metáfora para uma Bélgica rica dentro de uma Índia pobre, ao discutir desigualdade ${tag('fato')}.</p>
<h3>Agronegócio e produtividade</h3>
<p>A expansão da agricultura no Cerrado, apoiada em pesquisa agronômica (a Embrapa, criada em 1973), é citada como caso de grande ganho de produtividade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Edmar Bacha, "O economista e o rei da Belíndia" (1974).' }, { texto: 'Marcelo de Paiva Abreu (org.), A ordem do progresso (2014).' }],
    exercicios: [
      mc('A metáfora "Belíndia" é de:', ['Furtado', 'Edmar Bacha', 'Roberto Campos', 'Delfim Netto'], 1, '1974.'),
      mc('A Embrapa foi criada em:', ['1953', '1964', '1973', '1994'], 2, '1973.'),
      mc('A expansão agrícola no Cerrado é citada como caso de:', ['Queda de produtividade', 'Grande ganho de produtividade com pesquisa', 'Substituição de importações', 'Crise da dívida'], 1, 'Pesquisa agronômica.'),
      disc('Explique a transformação da agricultura brasileira desde os anos 1970 usando dados de produtividade e o papel das instituições de pesquisa.', ['Dados com fonte', 'Papel da pesquisa', 'Efeitos regionais', 'Conclusão'])],
  },
}),

avaliacao('e4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre microeconomia, crescimento, economia internacional e formação econômica do Brasil, com cálculos, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça os cálculos de custo e a regra dos 70.</li><li>Refaça a linha do tempo econômica do Brasil.</li></ul>`,
[
  disc('Escolha um período da economia brasileira e explique seu desempenho combinando ao menos três instrumentos do módulo (estrutura de mercado, crescimento, câmbio e balanço de pagamentos, política econômica), com dados.', ['Período delimitado', 'Três instrumentos aplicados', 'Dados com fonte', 'Conclusão fundamentada']),
  disc('Proponha uma política para elevar a produtividade da economia brasileira, prevendo efeitos com os modelos estudados e indicando as falhas de mercado e de governo a considerar.', ['Proposta clara', 'Efeitos previstos com modelos', 'Falhas consideradas', 'Juízo normativo separado']),
]),
];
