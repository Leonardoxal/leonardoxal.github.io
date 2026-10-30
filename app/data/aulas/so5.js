// Sociologia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Sociologia).
// Violência e coesão social, educação, religião no Brasil com dados do Censo, e a pesquisa com entrevistas.
// A avaliação final integra SO1 a SO5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'so5-1', titulo: 'Violência e coesão social: dados, teorias e políticas', duracao: '150 min',
  aprendera: ['Ler indicadores de violência com fonte e cautela', 'Expor teorias sociológicas sobre crime e coesão', 'Avaliar políticas de segurança com evidência', 'Aplicar o critério cristão da paz como obra da justiça'],
  prereq: ['Sociologia IV (módulo SO4)'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil tem taxas de homicídio entre as mais altas do mundo. Que dados existem, como explicá-los e o que funciona para reduzi-los?</p>
<h3>Dados</h3>
<p>O <em>Atlas da Violência</em> (Ipea e Fórum Brasileiro de Segurança Pública) e o <em>Anuário Brasileiro de Segurança Pública</em> reúnem dados de mortes violentas, com base no sistema de saúde e nas polícias ${tag('fato')}. A medida usual é a taxa por 100 mil habitantes, que permite comparar lugares de tamanhos diferentes ${tag('fato')}. Diferenças de registro entre estados exigem cautela ${tag('interpretacao')}.</p>
<h3>Teorias</h3>
<ul>
<li><strong>Durkheim</strong>: o crime existe em toda sociedade e reforça, pela reação, as normas comuns; taxas anormais indicam anomia ${tag('fato')}.</li>
<li><strong>Desorganização social</strong>: Clifford Shaw e Henry McKay (1942) relacionaram a delinquência juvenil em Chicago à instabilidade dos bairros, e não à origem étnica dos moradores ${tag('fato')}.</li>
<li><strong>Janelas quebradas</strong>: James Q. Wilson e George Kelling (1982) sustentaram que a desordem tolerada favorece crimes mais graves; a eficácia das políticas inspiradas nela é debatida ${tag('debate')}.</li>
</ul>
<h3>Políticas</h3>
<p>No Brasil, o Estatuto do Desarmamento (Lei nº 10.826, de 2003) regulou o acesso a armas ${tag('fato')}. Avaliar qualquer política exige grupo de comparação e atenção a outras causas (aula e5-2) ${tag('argumento')}.</p>
<h3>Critério cristão</h3>
<p>A paz é "obra da justiça" (Is 32,17), e o Concílio ensina que ela não é mera ausência de guerra (<em>Gaudium et Spes</em>, 78) ${tag('doutrina')}. A coesão social depende de instituições justas, famílias, comunidades e da conversão das pessoas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Taxa por 100 mil', 'Número de casos dividido pela população, multiplicado por 100 mil.'],
    ['Desorganização social', 'Fraqueza das instituições de um bairro para controlar a conduta (Shaw e McKay).'],
    ['Janelas quebradas', 'Tese de que a desordem tolerada favorece crimes graves (Wilson e Kelling).'],
    ['Subnotificação', 'Diferença entre os casos ocorridos e os registrados.'],
    ['Coesão social', 'Grau em que os membros de uma sociedade estão ligados por normas e laços.'],
  ],
  exemplos: `<p><strong>Calcular e comparar:</strong> uma cidade de 200 mil habitantes com 60 homicídios num ano tem taxa de 30 por 100 mil; uma de 2 milhões com 400 homicídios tem 20. A cidade menor, com menos casos absolutos, tem risco maior por habitante.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial da Saúde trata a violência como problema de saúde pública. <strong>No Brasil:</strong> a violência se distribui de modo muito desigual entre regiões, bairros, idades e grupos de cor ou raça, como mostram o Atlas e o Anuário ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar taxas e não números absolutos', tag: 'argumento',
    premissas: ['Lugares maiores tendem a ter mais casos simplesmente por terem mais pessoas.', 'O risco para cada habitante depende da proporção, não do total.', 'A taxa por 100 mil corrige a diferença de tamanho.'],
    conclusao: 'Logo, comparações de violência entre lugares devem usar taxas, não números absolutos.',
    nota: 'Mesmo raciocínio dos valores per capita em economia.',
  },
  objecoes: [
    { objecao: 'A violência é só consequência da pobreza.', tag: 'debate',
      resposta: 'A pobreza está associada à violência, mas há lugares pobres com pouca violência e mudanças rápidas de taxas sem mudança da pobreza. Fatores como crime organizado, armas, instituições de segurança e coesão comunitária também pesam. A explicação é multicausal.' },
  ],
  aplicacao: `<p>Com o Atlas da Violência ou o Anuário, obtenha a taxa de homicídios do seu estado nos últimos dez anos. Faça um gráfico com fonte e explique a tendência com duas hipóteses e o dado que cada uma exigiria para ser testada.</p>`,
  fonte: {
    obra: 'Ipea e Fórum Brasileiro de Segurança Pública, Atlas da Violência (edição mais recente); Concílio Vaticano II, Gaudium et Spes, 78', link: { url: 'https://www.ipea.gov.br', rotulo: 'Ipea' },
    orientacao: `<p>No Atlas, localize a nota metodológica e a série do seu estado. Em Gaudium et Spes 78, a definição de paz. Relacione os dados ao critério.</p>`,
  },
  perguntas: [
    { p: 'Por que usar a taxa por 100 mil habitantes?', r: 'Porque permite comparar lugares de tamanhos diferentes pelo risco por habitante.' },
    { p: 'O que sustenta a teoria da desorganização social?', r: 'Que a instabilidade dos bairros, e não a origem dos moradores, explica a delinquência.' },
    { p: 'Que lei é o Estatuto do Desarmamento?', r: 'A Lei nº 10.826, de 2003.' },
  ],
  exercicios: [
    mc('Cidade com 150 mil habitantes e 45 homicídios tem taxa de:', ['3', '30', '45', '300'], 1, '45 ÷ 150.000 × 100.000.'),
    mc('A tese das janelas quebradas é de:', ['Shaw e McKay', 'Wilson e Kelling', 'Durkheim', 'Merton'], 1, '1982.'),
    mc('Shaw e McKay estudaram a cidade de:', ['Nova York', 'Chicago', 'São Paulo', 'Paris'], 1, '1942.'),
    mc('"A paz é obra da justiça" está em:', ['Is 32,17', 'Mt 5,9', 'Jo 14,27', 'Sl 85'], 0, 'Citado em GS 78.'),
    mc('Dizer que a violência é só efeito da pobreza é:', ['Consenso', 'Explicação monocausal discutível', 'Lei estatística', 'Doutrina'], 1, 'Multicausal.'),
    disc('Analise a violência no seu estado com dados (gráfico e fonte), duas hipóteses explicativas e o dado necessário para testar cada uma.', ['Dados com fonte', 'Duas hipóteses', 'Testes propostos', 'Juízo separado']),
  ],
  resumo: ['Atlas da Violência e Anuário; taxa por 100 mil.', 'Durkheim: crime e anomia.', 'Shaw e McKay (1942): desorganização social.', 'Wilson e Kelling (1982): janelas quebradas (debate).', 'Paz como obra da justiça (GS 78).'],
  referencias: [
    { texto: 'Ipea e FBSP, Atlas da Violência.', link: { url: 'https://www.ipea.gov.br', rotulo: 'Ipea' } },
    { texto: 'Clifford Shaw e Henry McKay, Juvenile Delinquency and Urban Areas (1942).' },
    { texto: 'James Q. Wilson e George Kelling, "Broken Windows" (1982).' },
    { texto: 'Concílio Vaticano II, Gaudium et Spes (1965), n. 78.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer o gráfico com fonte'],
  revisao: [['Taxa', 'Por 100 mil.'], ['Shaw e McKay', 'Desorganização social.'], ['GS 78', 'Paz e justiça.']],
  avancado: {
    texto: `<h3>Eficácia coletiva</h3>
<p>Robert Sampson e colegas (1997) propuseram o conceito de "eficácia coletiva": a disposição dos vizinhos de intervir pelo bem comum, associada a menores taxas de violência em Chicago ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Robert Sampson, Stephen Raudenbush e Felton Earls, "Neighborhoods and Violent Crime" (1997).' }],
    exercicios: [
      mc('"Eficácia coletiva" é conceito de:', ['Durkheim', 'Sampson e colegas', 'Weber', 'Merton'], 1, '1997.'),
      mc('Eficácia coletiva refere-se à disposição dos vizinhos de:', ['Mudar de bairro', 'Intervir pelo bem comum', 'Comprar armas', 'Votar'], 1, 'Coesão e controle.'),
      mc('O conceito retoma a tradição da:', ['Desorganização social', 'Lei dos três estados', 'Mais-valia', 'Tipologia'], 0, 'Escola de Chicago.'),
      disc('Proponha como medir a eficácia coletiva num bairro brasileiro e que relação esperaria com a violência.', ['Medida proposta', 'Hipótese', 'Dados', 'Cuidados éticos'])],
  },
}),

aula({
  id: 'so5-2', titulo: 'Sociologia da educação: família, escola e desigualdade de oportunidades', duracao: '150 min',
  aprendera: ['Expor as teses do Relatório Coleman e de Bourdieu e Passeron', 'Ler indicadores educacionais brasileiros (IDEB, SAEB, PISA)', 'Explicar o papel da família na educação segundo a Igreja', 'Avaliar uma política educacional com dados'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A escola reduz ou reproduz as desigualdades? A sociologia da educação investiga o peso da família, da escola e da sociedade no desempenho dos alunos.</p>
<h3>Coleman</h3>
<p>O relatório <em>Equality of Educational Opportunity</em> (1966), coordenado por James Coleman, concluiu que, nos Estados Unidos, as diferenças de desempenho dependiam mais do ambiente familiar e social que dos recursos materiais das escolas ${tag('fato')}. A conclusão gerou longo debate sobre o que a escola pode fazer ${tag('debate')}.</p>
<h3>Bourdieu e Passeron</h3>
<p>Em <em>A reprodução</em> (1970), Pierre Bourdieu e Jean-Claude Passeron sustentaram que a escola tende a premiar o <strong>capital cultural</strong> herdado das famílias de classes altas, reproduzindo desigualdades sob a aparência de mérito ${tag('interpretacao')}.</p>
<h3>Brasil</h3>
<p>A Lei de Diretrizes e Bases da Educação Nacional é a Lei nº 9.394, de 1996 ${tag('fato')}. O IDEB, criado em 2007, combina desempenho no SAEB e aprovação escolar ${tag('fato')}. No PISA, da OCDE, o Brasil tem ficado abaixo da média dos países participantes ${tag('fato')}. Paulo Freire, em <em>Pedagogia do oprimido</em> (escrita no exílio e publicada em 1970), propôs uma educação dialógica ${tag('fato')}; sua obra é muito influente e também criticada ${tag('debate')}.</p>
<h3>Família e Igreja</h3>
<p>A Igreja ensina que os pais são os primeiros e principais educadores dos filhos (<em>Gravissimum Educationis</em>, 3; CIC 2223) ${tag('doutrina')}. Isso orienta o juízo sobre políticas: a escola coopera com a família, não a substitui ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Capital cultural', 'Conhecimentos, hábitos e títulos herdados que valem na escola (Bourdieu).'],
    ['Reprodução', 'Tendência da escola a perpetuar desigualdades sociais (Bourdieu e Passeron).'],
    ['IDEB', 'Índice de Desenvolvimento da Educação Básica (2007).'],
    ['SAEB', 'Sistema de Avaliação da Educação Básica.'],
    ['PISA', 'Programa Internacional de Avaliação de Estudantes, da OCDE.'],
  ],
  exemplos: `<p><strong>Lendo o IDEB:</strong> duas escolas com o mesmo IDEB podem ter situações diferentes — uma com boa aprendizagem e alta reprovação, outra com aprendizagem fraca e aprovação automática. O índice combina as duas dimensões; por isso é preciso olhar os componentes antes de concluir.</p>`,
  contexto: `<p><strong>No mundo:</strong> avaliações internacionais permitem comparar sistemas educacionais e suas desigualdades. <strong>No Brasil:</strong> o INEP divulga os resultados do SAEB e do IDEB por escola e município, base para estudos e políticas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o desempenho médio de uma escola não mede sozinho sua qualidade', tag: 'argumento',
    premissas: ['O desempenho dos alunos depende da escola e também da família e do meio social.', 'Escolas recebem alunos de origens muito diferentes.', 'Uma escola com alunos pobres que aprendem muito pode ter média menor que outra com alunos ricos que aprendem pouco.'],
    conclusao: 'Logo, para avaliar a escola, é preciso comparar o progresso dos alunos considerando sua origem (valor agregado).',
    nota: 'Aplica a lição do Relatório Coleman.',
  },
  objecoes: [
    { objecao: 'Se a família pesa mais, a escola não importa.', tag: 'debate',
      resposta: 'Pesquisas posteriores a Coleman mostraram efeitos importantes de professores e de gestão escolar, sobretudo para alunos pobres. Família e escola importam; a pergunta é quanto, para quem e como.' },
  ],
  aplicacao: `<p>Consulte o IDEB de uma escola pública do seu município no portal do INEP. Analise seus componentes (aprendizagem e fluxo), compare com a média municipal e proponha uma explicação e um dado que a testaria.</p>`,
  fonte: {
    obra: 'Pierre Bourdieu e Jean-Claude Passeron, A reprodução (1970), livro I; Concílio Vaticano II, Gravissimum Educationis (1965), n. 3', link: { url: 'https://www.gov.br/inep', rotulo: 'INEP' },
    orientacao: `<p>Em A reprodução, localize a noção de capital cultural. Em Gravissimum Educationis 3, o papel dos pais. No INEP, os dados da escola escolhida.</p>`,
  },
  perguntas: [
    { p: 'Qual a principal conclusão do Relatório Coleman?', r: 'As diferenças de desempenho dependiam mais do ambiente familiar e social que dos recursos das escolas.' },
    { p: 'O que é capital cultural?', r: 'Conhecimentos, hábitos e títulos herdados que valem na escola.' },
    { p: 'Quem são os primeiros educadores segundo a Igreja?', r: 'Os pais.' },
  ],
  exercicios: [
    mc('O Relatório Coleman é de:', ['1966', '1970', '1996', '2007'], 0, 'Estados Unidos.'),
    mc('A reprodução é de Bourdieu e:', ['Coleman', 'Passeron', 'Freire', 'Durkheim'], 1, '1970.'),
    mc('O IDEB foi criado em:', ['1996', '2000', '2007', '2015'], 2, 'Aprendizagem e fluxo.'),
    mc('A LDB é a Lei:', ['9.394/1996', '8.069/1990', '10.826/2003', '13.709/2018'], 0, 'Diretrizes e bases.'),
    mc('Para avaliar uma escola com alunos de origens diferentes, é melhor usar:', ['Só a média', 'O progresso considerando a origem', 'O número de alunos', 'A arquitetura'], 1, 'Valor agregado.'),
    disc('Analise o IDEB de uma escola pública: componentes, comparação com o município, uma explicação e um dado que a testaria.', ['Dados do INEP', 'Componentes analisados', 'Explicação', 'Teste proposto']),
  ],
  resumo: ['Coleman (1966): peso da família e do meio.', 'Bourdieu e Passeron (1970): capital cultural e reprodução.', 'LDB (1996), IDEB (2007), SAEB, PISA.', 'Paulo Freire (1970): obra influente e debatida.', 'Pais como primeiros educadores (GE 3; CIC 2223).'],
  referencias: [
    { texto: 'James Coleman e outros, Equality of Educational Opportunity (1966).' },
    { texto: 'Pierre Bourdieu e Jean-Claude Passeron, A reprodução (1970).' },
    { texto: 'Concílio Vaticano II, Gravissimum Educationis (1965).' },
    { texto: 'INEP, resultados do IDEB e do SAEB.', link: { url: 'https://www.gov.br/inep', rotulo: 'INEP' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar o IDEB de uma escola'],
  revisao: [['Coleman', '1966.'], ['Capital cultural', 'Bourdieu.'], ['IDEB', '2007.']],
  avancado: {
    texto: `<h3>Educação e capital social</h3>
<p>James Coleman também estudou o papel das comunidades: em escolas católicas norte-americanas, encontrou resultados que atribuiu ao "capital social" entre famílias, escola e paróquia ${tag('interpretacao')}. A interpretação é debatida por causa da seleção dos alunos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'James Coleman e Thomas Hoffer, Public and Private High Schools (1987).' }],
    exercicios: [
      mc('Coleman atribuiu resultados de escolas católicas ao:', ['Capital econômico', 'Capital social', 'Clima', 'Tamanho'], 1, 'Laços entre família, escola e comunidade.'),
      mc('A principal objeção a essa interpretação é a:', ['Seleção dos alunos', 'Falta de dados', 'Religião', 'Arquitetura'], 0, 'Quem escolhe a escola.'),
      mc('Public and Private High Schools é de:', ['1966', '1987', '1996', '2007'], 1, 'Coleman e Hoffer.'),
      disc('Desenhe um estudo para testar o efeito do capital social escolar no Brasil, considerando o problema da seleção.', ['Pergunta', 'Comparação', 'Controle da seleção', 'Ética'])],
  },
}),

aula({
  id: 'so5-3', titulo: 'Religião no Brasil: diversidade, trânsito e dados censitários', duracao: '150 min',
  aprendera: ['Descrever o campo religioso brasileiro com categorias do IBGE', 'Distinguir catolicismo popular, movimentos eclesiais e outras tradições', 'Redigir relatório com dados do Censo, fonte e ano', 'Separar descrição sociológica e juízo de fé'],
  prereq: ['Aulas anteriores do módulo', 'Sociologia III: secularização (so3-3)'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil é o país com mais católicos do mundo e, ao mesmo tempo, um dos de maior crescimento evangélico ${tag('fato')}. Como descrever esse campo religioso sem simplificações?</p>
<h3>Categorias e fontes</h3>
<p>O Censo usa a religião declarada pela pessoa, agrupada em categorias como católica apostólica romana, evangélica (de missão, pentecostal e não determinada), espírita, umbanda e candomblé, outras religiosidades e sem religião ${tag('fato')}. Pesquisas de instituições como o Datafolha e o Pew Research Center complementam o Censo com perguntas sobre prática e crença ${tag('fato')}.</p>
<h3>Catolicismo no Brasil</h3>
<p>O catolicismo brasileiro inclui a vida paroquial, o catolicismo popular (devoções, romarias, festas de padroeiro), as Comunidades Eclesiais de Base e movimentos como a Renovação Carismática Católica ${tag('fato')}. A Conferência Nacional dos Bispos do Brasil (CNBB) foi fundada em 1952 ${tag('fato')}.</p>
<h3>Outras tradições</h3>
<p>O protestantismo histórico e o pentecostalismo, o espiritismo kardecista e as religiões de matriz africana (umbanda e candomblé) compõem o campo religioso, com trânsito frequente entre elas ${tag('fato')}. A Constituição garante a liberdade de crença e de culto (art. 5º, VI) ${tag('fato')}.</p>
<h3>Sociologia e fé</h3>
<p>Descrever a diversidade não é afirmar que todas as religiões sejam iguais em verdade; a Igreja reconhece a liberdade religiosa como direito da pessoa (<em>Dignitatis Humanae</em>, 2) e professa que a plenitude da verdade subsiste na Igreja Católica (<em>Lumen Gentium</em>, 8) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Campo religioso', 'Conjunto de instituições e agentes religiosos de uma sociedade.'],
    ['Catolicismo popular', 'Devoções, romarias e festas vividas pelo povo, com ou sem mediação clerical.'],
    ['CEBs', 'Comunidades Eclesiais de Base.'],
    ['Religiões de matriz africana', 'Tradições como umbanda e candomblé.'],
    ['Liberdade religiosa', 'Direito da pessoa de não ser coagida em matéria religiosa (DH 2).'],
  ],
  exemplos: `<p><strong>Relatório bem feito (estrutura):</strong> (1) pergunta — como mudou a distribuição religiosa no meu estado entre 2000 e o último Censo?; (2) dados — tabela do SIDRA com fonte, número da tabela e data de consulta; (3) descrição — três mudanças principais; (4) cautelas — categorias, autodeclaração; (5) interpretação — duas hipóteses; (6) o que os dados não dizem.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Brasil é estudado como caso de diversificação religiosa sem secularização acentuada. <strong>No Brasil:</strong> as diferenças regionais são grandes, com estados de maioria católica muito ampla e outros com forte presença evangélica ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a religião declarada não esgota a religiosidade', tag: 'argumento',
    premissas: ['O Censo registra a pertença declarada.', 'Pertença, crença e prática podem não coincidir (há católicos não praticantes e "sem religião" que creem em Deus).', 'Uma única pergunta não capta as três dimensões.'],
    conclusao: 'Logo, conclusões sobre religiosidade exigem combinar o Censo com pesquisas sobre crença e prática.',
    nota: 'Aplica a lição sobre categorias e definições (so1-3).',
  },
  objecoes: [
    { objecao: 'Se a sociologia trata todas as religiões como dados, ela é relativista.', tag: 'debate',
      resposta: 'Tratar crenças como dados empíricos é método, não tese sobre a verdade delas. O sociólogo católico pode descrever com rigor e, em outro plano, professar a fé; o erro seria confundir os planos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: relatório curto (2 a 3 páginas) sobre a evolução das religiões no Brasil ou no seu estado com dados do Censo, citando fonte, tabela e ano, com as seis partes do exemplo.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico (tabelas de religião no SIDRA); Concílio Vaticano II, Dignitatis Humanae (1965), n. 2', link: { url: 'https://sidra.ibge.gov.br', rotulo: 'SIDRA (IBGE)' },
    orientacao: `<p>No SIDRA, localize as tabelas de religião e as notas sobre as categorias. Em Dignitatis Humanae 2, a definição de liberdade religiosa. Use ambos no relatório.</p>`,
  },
  perguntas: [
    { p: 'Como o Censo registra a religião?', r: 'Pela religião declarada pela pessoa, agrupada em categorias.' },
    { p: 'Quando foi fundada a CNBB?', r: 'Em 1952.' },
    { p: 'Onde a Constituição garante a liberdade de crença?', r: 'No art. 5º, VI.' },
  ],
  exercicios: [
    mc('A CNBB foi fundada em:', ['1922', '1952', '1965', '1988'], 1, 'Conferência dos bispos.'),
    mc('A liberdade de crença está no art.:', ['1º', '5º, VI', '182', '231'], 1, 'Constituição de 1988.'),
    mc('Dignitatis Humanae trata da:', ['Liturgia', 'Liberdade religiosa', 'Revelação', 'Igreja no mundo'], 1, 'Vaticano II.'),
    mc('Um "sem religião" que crê em Deus mostra que:', ['O Censo erra', 'Pertença e crença podem não coincidir', 'Não há religião', 'Nada'], 1, 'Dimensões distintas.'),
    mc('Umbanda e candomblé são religiões de matriz:', ['Indígena', 'Africana', 'Oriental', 'Europeia'], 1, 'Afro-brasileiras.'),
    disc('Entregue o relatório sobre a evolução das religiões com dados do Censo, fonte, tabela, ano, cautelas e interpretação.', ['Dados com fonte e ano', 'Três mudanças descritas', 'Cautelas metodológicas', 'Interpretação proporcional']),
  ],
  resumo: ['Categorias do Censo: religião declarada.', 'Catolicismo: paróquia, popular, CEBs, RCC; CNBB (1952).', 'Protestantismo, pentecostalismo, espiritismo, matriz africana.', 'Liberdade religiosa (CF art. 5º; DH 2).', 'Pertença, crença e prática.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico (tabelas de religião).', link: { url: 'https://sidra.ibge.gov.br', rotulo: 'SIDRA' } },
    { texto: 'Concílio Vaticano II, Dignitatis Humanae (1965).' },
    { texto: 'Concílio Vaticano II, Lumen Gentium (1964), n. 8.' },
    { texto: 'Ricardo Mariano, Neopentecostais (1999).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o relatório da etapa', 'Ler Dignitatis Humanae 2'],
  revisao: [['Censo', 'Religião declarada.'], ['CNBB', '1952.'], ['DH 2', 'Liberdade religiosa.']],
  avancado: {
    texto: `<h3>Catolicismo popular</h3>
<p>Estudos sobre o catolicismo popular brasileiro analisam romarias como as de Aparecida e do Círio de Nazaré, em Belém, que reúne multidões em outubro ${tag('fato')}. A relação entre devoção popular e catequese é tema pastoral e sociológico ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Papa Francisco, Evangelii Gaudium (2013), n. 122–126 (piedade popular).' }],
    exercicios: [
      mc('O Círio de Nazaré ocorre em:', ['Salvador', 'Belém', 'Aparecida', 'Juazeiro'], 1, 'Outubro.'),
      mc('Evangelii Gaudium trata da piedade popular nos n.:', ['1–5', '122–126', '200–210', '280–288'], 1, 'Papa Francisco.'),
      mc('A relação entre devoção popular e catequese é tema:', ['Só teológico', 'Pastoral e sociológico', 'Só econômico', 'Irrelevante'], 1, 'Dois planos.'),
      disc('Descreva uma festa religiosa popular da sua região com os conceitos do percurso (função, ritual, comunidade) e com o que a Evangelii Gaudium diz da piedade popular.', ['Descrição', 'Conceitos', 'Documento citado', 'Separação dos planos'])],
  },
}),

aula({
  id: 'so5-4', titulo: 'Pesquisa empírica: projeto com 10 a 20 entrevistas', duracao: '180 min',
  aprendera: ['Formular uma pergunta de pesquisa delimitada', 'Construir o instrumento e a amostra intencional', 'Conduzir, transcrever e analisar entrevistas', 'Redigir o relatório com ética e conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Sociologia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma pequena pesquisa empírica: 10 a 20 entrevistas sobre um tema delimitado, com relatório. Esta aula é o roteiro.</p>
<h3>1. Pergunta</h3>
<p>"Juventude e religião" é tema; "como jovens de 18 a 25 anos de uma paróquia urbana explicam sua permanência ou afastamento da prática religiosa" é pergunta pesquisável ${tag('argumento')}.</p>
<h3>2. Instrumento e amostra</h3>
<p>Roteiro semiestruturado (8 a 12 perguntas) testado com uma ou duas pessoas antes ${tag('fato')}. Amostra <strong>intencional</strong>: escolha justificada de perfis diferentes; o critério de <strong>saturação</strong> indica parar quando novas entrevistas deixam de trazer temas novos ${tag('fato')}. Uma amostra intencional não permite generalizar estatisticamente; permite compreender mecanismos e sentidos ${tag('argumento')}.</p>
<h3>3. Ética</h3>
<p>Termo de consentimento livre e esclarecido, direito de desistir, anonimato e guarda segura dos dados, segundo a Resolução CNS nº 510/2016 e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) ${tag('fato')}. Cuidados especiais com menores de idade e pessoas vulneráveis ${tag('fato')}.</p>
<h3>4. Análise</h3>
<p>Transcreva, leia tudo, codifique trechos por temas, compare entre entrevistados e procure casos que contrariem suas hipóteses ${tag('fato')}.</p>
<h3>5. Relatório</h3>
<p>Pergunta; justificativa; método (instrumento, amostra, ética); resultados por tema, com citações anonimizadas; discussão com os autores do percurso; limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Rubrica</h3>
<ul>
<li>Ética da pesquisa respeitada e documentada.</li>
<li>Método descrito de modo que outro possa repetir.</li>
<li>Análise que usa conceitos do percurso.</li>
<li>Conclusão proporcional; descrição separada de juízo.</li>
</ul>`,
  vocabulario: [
    ['Amostra intencional', 'Escolha justificada de participantes com perfis diferentes.'],
    ['Saturação', 'Ponto em que novas entrevistas não trazem temas novos.'],
    ['Codificação', 'Marcação de trechos das entrevistas por temas.'],
    ['Anonimização', 'Remoção de dados que identifiquem os participantes.'],
    ['TCLE', 'Termo de consentimento livre e esclarecido.'],
  ],
  exemplos: `<p><strong>Trecho anonimizado:</strong> "Entrevistada 7 (22 anos, estudante): 'Eu parei de ir quando mudei de bairro; não conhecia ninguém na nova paróquia.'" Codificação: tema "pertença comunitária". Comparação: outros cinco entrevistados citam mudança de bairro ou de grupo. Hipótese: a perda de laços pesa mais que a perda de crença — a ser confrontada com os casos que dizem o contrário.</p>`,
  contexto: `<p><strong>No mundo:</strong> a pesquisa qualitativa tem protocolos internacionais de ética e transparência. <strong>No Brasil:</strong> pesquisas acadêmicas com seres humanos passam pelos comitês de ética do sistema CEP/Conep; a Resolução CNS nº 510/2016 orienta as ciências humanas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que procurar casos contrários fortalece a pesquisa', tag: 'argumento',
    premissas: ['O pesquisador tende a notar o que confirma sua hipótese (viés de confirmação).', 'Uma hipótese que resiste aos casos contrários é mais confiável.', 'Os casos que não se encaixam podem revelar mecanismos novos.'],
    conclusao: 'Logo, a análise deve buscar ativamente os casos contrários e relatá-los.',
    nota: 'Mesmo princípio da caridade e das objeções da disputa escolástica.',
  },
  objecoes: [
    { objecao: 'Com 15 entrevistas não se prova nada.', tag: 'debate',
      resposta: 'Quinze entrevistas não permitem generalização estatística, e o relatório deve dizê-lo. Permitem compreender sentidos e mecanismos e formular hipóteses para pesquisas maiores. O erro está em afirmar mais do que o desenho permite.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: pergunta, justificativa, perfil da amostra intencional, roteiro de 8 a 12 perguntas, TCLE, plano de análise e cronograma. Teste o roteiro com uma pessoa e registre os ajustes.</p>`,
  fonte: {
    obra: 'Conselho Nacional de Saúde, Resolução nº 510, de 7 de abril de 2016; Howard Becker, Segredos e truques da pesquisa (1998), cap. sobre amostragem', link: null,
    orientacao: `<p>Na Resolução 510, localize os princípios éticos e o conteúdo do registro do consentimento. Em Becker, a discussão sobre como escolher casos. Aplique ambos ao pré-projeto.</p>`,
  },
  perguntas: [
    { p: 'O que é saturação?', r: 'O ponto em que novas entrevistas deixam de trazer temas novos.' },
    { p: 'Uma amostra intencional permite generalização estatística?', r: 'Não; permite compreender sentidos e mecanismos.' },
    { p: 'Que normas orientam a ética da pesquisa e os dados pessoais?', r: 'A Resolução CNS nº 510/2016 e a LGPD (Lei nº 13.709/2018).' },
  ],
  exercicios: [
    mc('Qual destes é uma pergunta de pesquisa delimitada?', ['Juventude e religião', 'A sociedade brasileira', 'Como jovens de 18 a 25 anos de uma paróquia explicam sua permanência ou afastamento', 'A fé'], 2, 'Delimitada em grupo e tema.'),
    mc('Parar as entrevistas quando não surgem temas novos segue o critério de:', ['Amostragem aleatória', 'Saturação', 'Margem de erro', 'Censo'], 1, 'Pesquisa qualitativa.'),
    mc('O TCLE é o:', ['Questionário', 'Termo de consentimento livre e esclarecido', 'Relatório', 'Código'], 1, 'Ética.'),
    mc('Procurar casos que contrariam a hipótese serve para:', ['Atrasar a pesquisa', 'Combater o viés de confirmação', 'Aumentar a amostra', 'Nada'], 1, 'Rigor.'),
    mc('Citações no relatório devem ser:', ['Com nome completo', 'Anonimizadas', 'Inventadas', 'Omitidas'], 1, 'Proteção dos participantes.'),
    disc('Apresente o pré-projeto: pergunta, justificativa, amostra intencional, roteiro, TCLE, plano de análise e cronograma.', ['Pergunta delimitada', 'Amostra justificada', 'Roteiro testado', 'Ética documentada', 'Plano de análise']),
  ],
  resumo: ['Pergunta delimitada.', 'Roteiro semiestruturado; amostra intencional; saturação.', 'Ética: TCLE, anonimato; CNS 510/2016; LGPD.', 'Transcrever, codificar, comparar, buscar casos contrários.', 'Relatório com conclusão proporcional.'],
  referencias: [
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510, de 2016.' },
    { texto: 'Howard Becker, Segredos e truques da pesquisa (1998).' },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Testar o roteiro com uma pessoa'],
  revisao: [['Saturação', 'Sem temas novos.'], ['TCLE', 'Consentimento.'], ['Casos contrários', 'Contra o viés.']],
  avancado: {
    texto: `<h3>Teoria fundamentada</h3>
<p>Barney Glaser e Anselm Strauss, em <em>The Discovery of Grounded Theory</em> (1967), propuseram construir conceitos a partir dos dados por comparação constante, em vez de testar apenas hipóteses prévias ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Barney Glaser e Anselm Strauss, The Discovery of Grounded Theory (1967).' }],
    exercicios: [
      mc('The Discovery of Grounded Theory é de:', ['1959', '1967', '1979', '1998'], 1, 'Glaser e Strauss.'),
      mc('A teoria fundamentada constrói conceitos por:', ['Dedução apenas', 'Comparação constante dos dados', 'Sorteio', 'Autoridade'], 1, 'A partir dos dados.'),
      mc('A saturação é conceito associado à:', ['Teoria fundamentada', 'Contabilidade nacional', 'Heráldica', 'Geomorfologia'], 0, 'Glaser e Strauss.'),
      disc('Aplique a comparação constante a três entrevistas da sua pesquisa e mostre um conceito que surgiu dos dados.', ['Três entrevistas', 'Comparação', 'Conceito', 'Limites'])],
  },
}),

avaliacao('so5-5', 'Avaliação integradora de Sociologia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Sociologia. Reúne questões de todos os módulos (SO1 a SO5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa com entrevistas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia o glossário, a ficha dos clássicos e o confronto Faoro x Florestan.</li><li>Releia a rubrica da pesquisa (so5-4).</li></ul>`,
[
  disc('Interprete uma pesquisa sociológica (publicada ou a sua) e avalie seu método: pergunta, desenho, amostra, dados, limites e se a conclusão é proporcional, usando conceitos de todo o percurso.', ['Pergunta e desenho identificados', 'Amostra e dados avaliados', 'Limites apontados', 'Conceitos do percurso', 'Conclusão sobre a proporcionalidade']),
  disc('Responda como sociólogo católico: o que a sociologia pode e o que não pode afirmar sobre a sociedade e sobre a religião? Use três exemplos de módulos diferentes e a distinção entre doutrina, teoria e evidência.', ['Distingue doutrina, teoria e evidência', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
