// Antropologia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Antropologia).
// Natureza e cultura, alteridade, conceitos básicos, observação participante, diário de campo e ética.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'an1-1', titulo: 'Natureza, cultura e alteridade: o objeto da antropologia', duracao: '120 min',
  aprendera: ['Definir cultura a partir de Tylor e de seus críticos', 'Explicar a unidade do gênero humano e a diversidade das culturas', 'Praticar o estranhamento do familiar', 'Separar descrição e juízo moral sobre costumes'],
  prereq: ['Degrau de lógica', 'Sociologia I (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Todos os seres humanos comem, casam, enterram seus mortos e rezam, mas de modos muito diferentes. A antropologia estuda essa unidade e essa diversidade, e pergunta como compreender um modo de vida diferente do nosso.</p>
<h3>Cultura</h3>
<p>Edward B. Tylor, em <em>A cultura primitiva</em> (1871), definiu cultura como "o todo complexo que inclui conhecimentos, crenças, arte, moral, leis, costumes" e outras capacidades adquiridas pelo homem como membro da sociedade ${tag('fato')}. A definição marcou a disciplina; depois, autores enfatizaram a cultura como sistema de significados (Geertz, etapa 6) ${tag('interpretacao')}.</p>
<h3>Natureza e cultura</h3>
<p>O ser humano é ao mesmo tempo natural e cultural: tem necessidades biológicas comuns, mas as satisfaz por meios aprendidos e variados ${tag('interpretacao')}. A tradição cristã vê nisso a marca de uma natureza racional e livre, comum a todos, que se expressa em culturas diversas ${tag('doutrina')}.</p>
<h3>Unidade do gênero humano</h3>
<p>A afirmação da unidade do gênero humano tem raízes antigas. Em 1537, a bula <em>Sublimis Deus</em>, de Paulo III, declarou que os povos indígenas das Américas são verdadeiros homens, capazes da fé, e não podem ser privados da liberdade nem dos bens ${tag('fato')}. Hoje a biologia confirma que os seres humanos atuais formam uma só espécie ${tag('fato')}.</p>
<h3>Estranhamento</h3>
<p>Roberto DaMatta resumiu a tarefa do antropólogo como transformar o exótico em familiar e o familiar em exótico ${tag('fato')}. Estranhar o próprio costume permite vê-lo como construção cultural; familiarizar-se com o alheio permite compreendê-lo por dentro ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Cultura', 'Conjunto de conhecimentos, crenças, artes, leis e costumes adquiridos em sociedade (Tylor).'],
    ['Alteridade', 'Condição do outro, diferente de mim.'],
    ['Estranhamento', 'Olhar o familiar como se fosse estranho.'],
    ['Unidade do gênero humano', 'Todos os seres humanos partilham a mesma natureza.'],
    ['Sublimis Deus', 'Bula de Paulo III (1537) sobre a humanidade e a liberdade dos indígenas.'],
  ],
  exemplos: `<p><strong>Estranhar um costume familiar:</strong> o almoço de domingo descrito "de fora" — às 13 h, os parentes se reúnem na casa da avó; a pessoa mais velha senta à cabeceira; a comida é servida em travessas; ninguém começa antes de todos se sentarem; ao fim, as mulheres mais jovens lavam a louça. A descrição revela regras de idade, gênero e hierarquia que, vistas de dentro, parecem "naturais".</p>`,
  contexto: `<p><strong>No mundo:</strong> a antropologia nasceu no século XIX ligada à expansão colonial e se transformou em crítica do etnocentrismo. <strong>No Brasil:</strong> o Censo 2010 registrou 305 etnias indígenas e 274 línguas; o Censo 2022 contou cerca de 1,7 milhão de pessoas indígenas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a diversidade cultural não nega a natureza humana comum', tag: 'argumento',
    premissas: ['As culturas diferem nos modos de comer, casar, governar e rezar.', 'Mas todas respondem às mesmas necessidades e capacidades: alimentar-se, formar família, viver em comum, buscar sentido.', 'Diferenças nos meios supõem semelhança nos fins e nas capacidades.'],
    conclusao: 'Logo, a diversidade das culturas é expressão de uma natureza comum, não prova de que ela não exista.',
    nota: 'O argumento abre o debate da etapa 7 sobre relativismo e lei natural.',
  },
  objecoes: [
    { objecao: 'Não existe natureza humana; tudo é cultura.', tag: 'debate',
      resposta: 'Se tudo fosse cultura, não haveria como comparar culturas nem como reconhecer a humanidade do outro. Além disso, a biologia, a linguística e a própria etnografia documentam capacidades e padrões comuns (linguagem, parentesco, ritual). A diversidade é real, mas pressupõe algo comum.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva um costume da sua família "de fora", como um visitante estrangeiro, em um parágrafo só de descrição; depois, em outro parágrafo, diga que regras e valores a descrição revela.</p>`,
  fonte: {
    obra: 'Edward B. Tylor, A cultura primitiva (1871), cap. I; Paulo III, Sublimis Deus (1537)', link: null,
    orientacao: `<p>Em Tylor, localize a definição de cultura e a ideia de "ciência da cultura". Na bula, identifique as afirmações sobre a humanidade e a liberdade dos indígenas. Compare as duas maneiras de afirmar a unidade humana.</p>`,
  },
  perguntas: [
    { p: 'Como Tylor definiu cultura?', r: 'O todo complexo que inclui conhecimentos, crenças, arte, moral, leis, costumes e outras capacidades adquiridas em sociedade.' },
    { p: 'O que afirmou a bula Sublimis Deus (1537)?', r: 'Que os indígenas são verdadeiros homens, capazes da fé, e não podem ser privados da liberdade nem dos bens.' },
    { p: 'O que é estranhamento?', r: 'Olhar o familiar como se fosse estranho.' },
  ],
  exercicios: [
    mc('A cultura primitiva é de:', ['Boas', 'Tylor', 'Malinowski', 'Mauss'], 1, '1871.'),
    mc('A bula Sublimis Deus é de:', ['1492', '1537', '1750', '1888'], 1, 'Paulo III.'),
    mc('Transformar o familiar em exótico é tarefa formulada por:', ['DaMatta', 'Freyre', 'Tylor', 'Comte'], 0, 'Estranhamento.'),
    mc('O Censo 2010 registrou cerca de quantas línguas indígenas?', ['27', '74', '274', '2.740'], 2, '274 línguas.'),
    mc('A diversidade cultural, segundo o argumento da aula:', ['Nega a natureza humana', 'Expressa uma natureza comum', 'Prova o relativismo moral', 'É ilusão'], 1, 'Meios diferentes, fins comuns.'),
    disc('Entregue a descrição "de fora" de um costume familiar e o parágrafo sobre as regras e valores que ela revela.', ['Descrição sem juízo', 'Detalhes observáveis', 'Regras identificadas', 'Separação das partes']),
  ],
  resumo: ['Cultura em Tylor (1871).', 'Natureza e cultura: necessidades comuns, meios diversos.', 'Unidade do gênero humano; Sublimis Deus (1537).', 'Estranhamento (DaMatta).', 'Brasil: 305 etnias, 274 línguas (2010).'],
  referencias: [
    { texto: 'Edward B. Tylor, A cultura primitiva (1871).' },
    { texto: 'Paulo III, Sublimis Deus (1537).' },
    { texto: 'Roberto DaMatta, Relativizando: uma introdução à antropologia social (1981).' },
    { texto: 'IBGE, Censo Demográfico 2010 e 2022: povos indígenas.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição do costume', 'Ler o cap. I de Tylor'],
  revisao: [['Tylor', 'Cultura, 1871.'], ['Sublimis Deus', '1537.'], ['Estranhamento', 'Familiar como exótico.']],
  avancado: {
    texto: `<h3>A controvérsia de Valladolid</h3>
<p>Em 1550–1551, em Valladolid, Bartolomé de las Casas e Juan Ginés de Sepúlveda debateram diante de uma junta convocada pela Coroa espanhola a legitimidade da guerra contra os indígenas e sua condição ${tag('fato')}. Las Casas defendeu a plena humanidade e racionalidade dos indígenas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bartolomé de las Casas, Brevíssima relação da destruição das Índias (1552).' }],
    exercicios: [
      mc('A controvérsia de Valladolid ocorreu em:', ['1492', '1550–1551', '1600', '1750'], 1, 'Las Casas e Sepúlveda.'),
      mc('Las Casas defendeu:', ['A escravidão dos indígenas', 'A plena humanidade dos indígenas', 'A guerra justa sempre', 'O fim das missões'], 1, 'Racionalidade e liberdade.'),
      mc('A Brevíssima relação da destruição das Índias é de:', ['Sepúlveda', 'Las Casas', 'Vitória', 'Anchieta'], 1, '1552.'),
      disc('Compare os argumentos de Las Casas e de Sepúlveda e relacione-os à bula Sublimis Deus.', ['Dois argumentos', 'Relação com a bula', 'Avaliação', 'Fontes'])],
  },
}),

aula({
  id: 'an1-2', titulo: 'Vocabulário antropológico: etnocentrismo, relativismo, parentesco, rito, mito e dádiva', duracao: '150 min',
  aprendera: ['Definir os conceitos básicos com o autor que os formulou', 'Distinguir etnocentrismo e relativismo cultural', 'Explicar descendência, aliança e o tabu do incesto', 'Explicar ritos de passagem e a reciprocidade'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A antropologia tem vocabulário próprio, muitas vezes usado de forma imprecisa fora dela. Esta aula fixa os conceitos que serão usados em todo o percurso.</p>
<h3>Etnocentrismo e relativismo</h3>
<p>William Graham Sumner, em <em>Folkways</em> (1906), definiu <strong>etnocentrismo</strong> como a atitude de tomar o próprio grupo como centro e medida de todos os outros ${tag('fato')}. O <strong>relativismo cultural</strong>, associado a Franz Boas e a Melville Herskovits, propõe compreender cada costume no seu contexto antes de julgá-lo ${tag('fato')}. É preciso distinguir o relativismo como <em>método</em> (suspender o juízo para compreender) do relativismo como <em>tese moral</em> (não haveria bem nem mal universais) ${tag('argumento')}.</p>
<h3>Parentesco</h3>
<p>O parentesco organiza a <strong>descendência</strong> (filiação por linha paterna, materna ou ambas) e a <strong>aliança</strong> (casamento entre grupos) ${tag('fato')}. Para Lévi-Strauss, o <strong>tabu do incesto</strong>, presente em todas as sociedades, obriga à troca entre grupos e marca a passagem da natureza à cultura ${tag('interpretacao')}.</p>
<h3>Rito e mito</h3>
<p>Arnold van Gennep, em <em>Os ritos de passagem</em> (1909), identificou três fases: separação, margem e agregação ${tag('fato')}. Victor Turner desenvolveu a fase de margem como <strong>liminaridade</strong> ${tag('fato')}. O <strong>mito</strong> é narrativa sagrada que explica a origem e a ordem do mundo para um grupo ${tag('interpretacao')}.</p>
<h3>Dádiva</h3>
<p>Marcel Mauss, no <em>Ensaio sobre a dádiva</em> (1925), mostrou que, em muitas sociedades, a troca obedece a três obrigações: <strong>dar, receber e retribuir</strong> ${tag('fato')}.</p>`,
  vocabulario: [
    ['Etnocentrismo', 'Tomar o próprio grupo como medida dos outros (Sumner, 1906).'],
    ['Relativismo cultural', 'Compreender cada costume no seu contexto (Boas, Herskovits).'],
    ['Descendência', 'Regra de filiação por linha paterna, materna ou ambas.'],
    ['Aliança', 'Relação criada pelo casamento entre grupos.'],
    ['Rito de passagem', 'Ritual que marca mudança de condição: separação, margem, agregação (Van Gennep).'],
    ['Liminaridade', 'Fase de margem do rito (Turner).'],
    ['Dádiva', 'Troca regida por dar, receber e retribuir (Mauss).'],
  ],
  exemplos: `<p><strong>Rito de passagem no Brasil:</strong> a formatura — separação (o fim das aulas, a beca), margem (a cerimônia, em que já não se é estudante nem ainda profissional), agregação (o diploma e o reconhecimento como profissional). No plano religioso, o Batismo e o Matrimônio também marcam passagens, mas a fé os entende como sacramentos, não apenas ritos sociais ${tag('doutrina')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> conceitos como etnocentrismo e dádiva são usados em economia, educação e relações internacionais. <strong>No Brasil:</strong> estudos de parentesco e de reciprocidade analisam desde sociedades indígenas até redes de ajuda em periferias urbanas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o relativismo metodológico não implica relativismo moral', tag: 'argumento',
    premissas: ['O relativismo metodológico suspende o juízo para compreender um costume por dentro.', 'Compreender o sentido de um costume não é aprová-lo.', 'Depois de compreender, é possível — e às vezes necessário — avaliá-lo por critérios universais (dignidade da pessoa).'],
    conclusao: 'Logo, adotar o relativismo como método não obriga a negar que haja bem e mal universais.',
    nota: 'A distinção será retomada no debate da etapa 7.',
  },
  objecoes: [
    { objecao: 'Todo juízo sobre outra cultura é etnocentrismo.', tag: 'debate',
      resposta: 'Etnocentrismo é julgar o outro pela medida do próprio grupo, sem compreender. Julgar por critérios que valem para todos (como a proibição de matar inocentes), depois de compreender, é outra coisa. A própria crítica ao etnocentrismo supõe um critério universal de respeito ao outro.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de 15 conceitos (cultura, etnocentrismo, relativismo cultural, alteridade, descendência, aliança, tabu do incesto, rito de passagem, liminaridade, mito, dádiva, reciprocidade, tabu, etnografia, observação participante), cada um com definição, autor, obra e exemplo.</p>`,
  fonte: {
    obra: 'Marcel Mauss, Ensaio sobre a dádiva (1925), introdução e cap. I; Arnold van Gennep, Os ritos de passagem (1909), cap. I', link: null,
    orientacao: `<p>Em Mauss, localize as três obrigações e o exemplo do potlatch. Em Van Gennep, as três fases do rito. Use as definições no glossário com citação.</p>`,
  },
  perguntas: [
    { p: 'O que é etnocentrismo?', r: 'Tomar o próprio grupo como centro e medida dos outros (Sumner).' },
    { p: 'Quais as três obrigações da dádiva em Mauss?', r: 'Dar, receber e retribuir.' },
    { p: 'Quais as três fases do rito de passagem?', r: 'Separação, margem e agregação.' },
  ],
  exercicios: [
    mc('Folkways (1906) é de:', ['Boas', 'Sumner', 'Mauss', 'Turner'], 1, 'Etnocentrismo.'),
    mc('O Ensaio sobre a dádiva é de:', ['1909', '1925', '1949', '1969'], 1, 'Mauss.'),
    mc('A fase de margem do rito foi desenvolvida como liminaridade por:', ['Van Gennep', 'Victor Turner', 'Lévi-Strauss', 'Geertz'], 1, 'O processo ritual.'),
    mc('Para Lévi-Strauss, o tabu do incesto:', ['Existe só em algumas sociedades', 'Obriga à troca entre grupos', 'É natural apenas', 'É lei moderna'], 1, 'Passagem à cultura.'),
    mc('Suspender o juízo para compreender um costume é relativismo:', ['Moral', 'Metodológico', 'Absoluto', 'Político'], 1, 'Método.'),
    disc('Entregue o glossário de 15 conceitos com definição, autor, obra e exemplo.', ['15 conceitos', 'Autores corretos', 'Definições precisas', 'Exemplos']),
  ],
  resumo: ['Etnocentrismo (Sumner, 1906) e relativismo (Boas, Herskovits).', 'Relativismo metodológico ≠ moral.', 'Descendência, aliança, tabu do incesto (Lévi-Strauss).', 'Ritos de passagem (Van Gennep, 1909); liminaridade (Turner).', 'Dádiva: dar, receber, retribuir (Mauss, 1925).'],
  referencias: [
    { texto: 'Marcel Mauss, Ensaio sobre a dádiva (1925).' },
    { texto: 'Arnold van Gennep, Os ritos de passagem (1909).' },
    { texto: 'Victor Turner, O processo ritual (1969).' },
    { texto: 'William Graham Sumner, Folkways (1906).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os textos indicados'],
  revisao: [['Mauss', 'Dar, receber, retribuir.'], ['Van Gennep', 'Separação, margem, agregação.'], ['Sumner', 'Etnocentrismo.']],
  avancado: {
    texto: `<h3>O potlatch</h3>
<p>Mauss analisou o potlatch dos povos da costa noroeste da América do Norte, cerimônia de doação e destruição de bens em que o prestígio vem da capacidade de dar ${tag('fato')}. O exemplo mostra que a troca não é só econômica: é também social, religiosa e política ("fato social total") ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Marcel Mauss, Ensaio sobre a dádiva (1925).' }],
    exercicios: [
      mc('O potlatch é cerimônia de:', ['Jejum', 'Doação e destruição de bens', 'Guerra', 'Casamento apenas'], 1, 'Prestígio pela doação.'),
      mc('"Fato social total" é expressão de:', ['Durkheim', 'Mauss', 'Tylor', 'Geertz'], 1, 'Dádiva.'),
      mc('Um fato social total envolve dimensões:', ['Só econômicas', 'Econômicas, sociais, religiosas e políticas', 'Só religiosas', 'Só jurídicas'], 1, 'Mauss.'),
      disc('Analise uma prática brasileira de troca (presentes de Natal, mutirão, festa junina) como dádiva no sentido de Mauss.', ['Prática descrita', 'Três obrigações', 'Dimensões do fato total', 'Limites'])],
  },
}),

aula({
  id: 'an1-3', titulo: 'Etnografia: observação participante, diário de campo e o método genealógico', duracao: '150 min',
  aprendera: ['Explicar a observação participante segundo Malinowski', 'Fazer um diário de campo com registro descritivo e reflexivo', 'Usar o método genealógico', 'Aplicar "o olhar, o ouvir e o escrever"'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como compreender um modo de vida "do ponto de vista do nativo"? A resposta da antropologia é a etnografia: estar lá, por muito tempo, e registrar com método.</p>
<h3>Malinowski</h3>
<p>Na introdução de <em>Argonautas do Pacífico Ocidental</em> (1922), Bronisław Malinowski expôs os princípios do trabalho de campo: viver entre os nativos, longe de outros europeus; aprender a língua; registrar os "imponderáveis da vida real" do cotidiano; e chegar ao ponto de vista do nativo ${tag('fato')}. A publicação póstuma de seu diário pessoal (1967) mostrou tensões entre o ideal e a experiência do pesquisador ${tag('fato')}.</p>
<h3>Diário de campo</h3>
<p>O diário registra data, lugar, pessoas, ações e falas (registro <strong>descritivo</strong>) e, separadamente, impressões, dúvidas e hipóteses do pesquisador (registro <strong>reflexivo</strong>) ${tag('fato')}. Misturar os dois compromete a análise ${tag('argumento')}.</p>
<h3>Método genealógico</h3>
<p>W. H. R. Rivers sistematizou, no início do século XX, o método genealógico: registrar as relações de parentesco de cada informante para reconstruir a organização social ${tag('fato')}.</p>
<h3>O olhar, o ouvir e o escrever</h3>
<p>Roberto Cardoso de Oliveira, em <em>O trabalho do antropólogo</em> (1998), descreveu três atos do etnógrafo: o <strong>olhar</strong> disciplinado pela teoria, o <strong>ouvir</strong> que dialoga com o informante e o <strong>escrever</strong> que transforma a experiência em texto ${tag('fato')}.</p>`,
  vocabulario: [
    ['Observação participante', 'Convívio prolongado com o grupo estudado (Malinowski).'],
    ['Ponto de vista do nativo', 'Compreensão da cultura como a entendem seus membros.'],
    ['Registro descritivo', 'O que se viu e ouviu, sem juízo.'],
    ['Registro reflexivo', 'Impressões, dúvidas e hipóteses do pesquisador.'],
    ['Método genealógico', 'Registro das relações de parentesco dos informantes (Rivers).'],
    ['Informante', 'Pessoa do grupo que colabora com a pesquisa.'],
  ],
  exemplos: `<p><strong>Entrada de diário de campo:</strong> "Sábado, 14 h, feira do bairro. Descritivo: 23 bancas; a de pastel tem fila de 9 pessoas; a feirante chama três clientes pelo nome e dá 'chorinho' (um pouco a mais) a um deles. Reflexivo: o 'chorinho' parece funcionar como dádiva que cria fidelidade (Mauss?). Hipótese a verificar: só clientes antigos o recebem."</p>`,
  contexto: `<p><strong>No mundo:</strong> a etnografia é usada hoje também em empresas, hospitais e escolas. <strong>No Brasil:</strong> a formação de antropólogos se consolidou em programas como o do Museu Nacional (Rio de Janeiro) e o da Universidade de Brasília, e a Associação Brasileira de Antropologia foi fundada em 1955 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a estada prolongada é exigência do método', tag: 'argumento',
    premissas: ['Num contato curto, as pessoas mostram o que acham que o visitante quer ver.', 'Com o tempo, o pesquisador passa a ver a rotina, os conflitos e o que não se diz.', 'Esses "imponderáveis" são parte essencial da vida social.'],
    conclusao: 'Logo, a compreensão etnográfica exige convívio prolongado, não apenas entrevistas pontuais.',
    nota: 'Para trabalhos de iniciação, a exigência se adapta: várias visitas regulares a um mesmo lugar.',
  },
  objecoes: [
    { objecao: 'O pesquisador que convive muito perde a objetividade.', tag: 'debate',
      resposta: 'A proximidade traz riscos, mas a distância também: quem não convive não entende. A objetividade possível vem do registro disciplinado, da separação entre descrição e reflexão, da comparação e da exposição dos limites.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: diário de campo de três observações de uma mesma situação social (feira, missa, festa, praça), em dias diferentes, com registro descritivo e reflexivo separados, datados e com lugar.</p>`,
  fonte: {
    obra: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922), introdução; Roberto Cardoso de Oliveira, O trabalho do antropólogo (1998), cap. 1', link: null,
    orientacao: `<p>Em Malinowski, localize os princípios do trabalho de campo e os "imponderáveis da vida real". Em Cardoso de Oliveira, os três atos do etnógrafo. Aplique ambos ao seu diário.</p>`,
  },
  perguntas: [
    { p: 'Quais os princípios de campo de Malinowski?', r: 'Viver entre os nativos, aprender a língua, registrar o cotidiano e chegar ao ponto de vista do nativo.' },
    { p: 'Qual a diferença entre registro descritivo e reflexivo?', r: 'O descritivo registra o que se viu e ouviu; o reflexivo, impressões e hipóteses.' },
    { p: 'Quais os três atos do etnógrafo segundo Cardoso de Oliveira?', r: 'Olhar, ouvir e escrever.' },
  ],
  exercicios: [
    mc('Argonautas do Pacífico Ocidental é de:', ['1871', '1922', '1949', '1973'], 1, 'Malinowski.'),
    mc('O método genealógico foi sistematizado por:', ['Rivers', 'Tylor', 'Boas', 'Mauss'], 0, 'Parentesco dos informantes.'),
    mc('"A feirante parece gostar mais deste cliente" pertence ao registro:', ['Descritivo', 'Reflexivo', 'Genealógico', 'Estatístico'], 1, 'Impressão.'),
    mc('A Associação Brasileira de Antropologia foi fundada em:', ['1922', '1955', '1988', '2016'], 1, 'ABA.'),
    mc('O trabalho do antropólogo (1998) é de:', ['DaMatta', 'Roberto Cardoso de Oliveira', 'Darcy Ribeiro', 'Gilberto Velho'], 1, 'Olhar, ouvir, escrever.'),
    disc('Entregue o diário de campo de três observações com registro descritivo e reflexivo separados, datados e localizados.', ['Três observações', 'Registros separados', 'Datas e lugares', 'Uma hipótese formulada']),
  ],
  resumo: ['Malinowski (1922): observação participante.', 'Ponto de vista do nativo; imponderáveis.', 'Diário: descritivo x reflexivo.', 'Método genealógico (Rivers).', 'Olhar, ouvir, escrever (Cardoso de Oliveira, 1998).'],
  referencias: [
    { texto: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922).' },
    { texto: 'Roberto Cardoso de Oliveira, O trabalho do antropólogo (1998).' },
    { texto: 'W. H. R. Rivers, "The Genealogical Method of Anthropological Inquiry" (1910).' },
    { texto: 'Bronisław Malinowski, Um diário no sentido estrito do termo (1967).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o diário de campo', 'Ler a introdução de Malinowski'],
  revisao: [['Malinowski', 'Observação participante.'], ['Rivers', 'Método genealógico.'], ['Diário', 'Descritivo e reflexivo.']],
  avancado: {
    texto: `<h3>Descrição densa</h3>
<p>Clifford Geertz, em "Uma descrição densa" (1973), retomou de Gilbert Ryle o exemplo da piscadela: o mesmo movimento pode ser tique, sinal ou paródia; a etnografia deve registrar as camadas de sentido, não só o gesto ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Clifford Geertz, A interpretação das culturas (1973), cap. 1.' }],
    exercicios: [
      mc('O exemplo da piscadela vem de:', ['Malinowski', 'Gilbert Ryle', 'Mauss', 'Boas'], 1, 'Retomado por Geertz.'),
      mc('A descrição densa registra:', ['Só os gestos', 'As camadas de sentido', 'Só números', 'Só a fala'], 1, 'Geertz.'),
      mc('"Uma descrição densa" é de:', ['1922', '1949', '1973', '1998'], 2, 'A interpretação das culturas.'),
      disc('Reescreva uma entrada do seu diário como descrição densa, explicitando as camadas de sentido possíveis de um gesto.', ['Gesto descrito', 'Camadas de sentido', 'Evidências', 'Cautela interpretativa'])],
  },
}),

aula({
  id: 'an1-4', titulo: 'Ética e escrita etnográfica: consentimento, povos indígenas e o texto', duracao: '120 min',
  aprendera: ['Aplicar os princípios éticos da pesquisa antropológica', 'Explicar a consulta prévia aos povos indígenas', 'Transformar o diário de campo em texto etnográfico', 'Distinguir descrição, interpretação e juízo no texto'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O antropólogo entra na vida de outras pessoas e depois escreve sobre elas. Isso cria deveres: respeitar, proteger e representar com fidelidade.</p>
<h3>Princípios éticos</h3>
<p>Consentimento livre e esclarecido; respeito à recusa; proteção da identidade quando necessário; retorno dos resultados à comunidade; cuidado com pessoas vulneráveis ${tag('fato')}. No Brasil, a Resolução CNS nº 510/2016 orienta a pesquisa em ciências humanas, e a Associação Brasileira de Antropologia tem código de ética próprio ${tag('fato')}.</p>
<h3>Povos indígenas</h3>
<p>A Convenção nº 169 da Organização Internacional do Trabalho, promulgada no Brasil em 2004, prevê a consulta prévia, livre e informada aos povos indígenas e tribais sobre medidas que os afetem ${tag('fato')}. A Constituição de 1988 (art. 231) reconhece sua organização social, costumes, línguas, crenças e tradições ${tag('fato')}. A Igreja ensina a igual dignidade de todos os povos e o respeito às suas culturas, purificadas e elevadas pelo Evangelho (<em>Gaudium et Spes</em>, 58) ${tag('doutrina')}.</p>
<h3>Do diário ao texto</h3>
<p>O texto etnográfico organiza o material por temas, cita falas com fidelidade, situa o pesquisador, distingue o que foi visto, o que foi dito e o que é interpretação, e expõe os limites ${tag('fato')}. James Clifford e George Marcus, em <em>A escrita da cultura</em> (1986), discutiram como a escrita molda a imagem do outro ${tag('fato')}.</p>`,
  vocabulario: [
    ['Consentimento livre e esclarecido', 'Concordância informada e sem coerção.'],
    ['Consulta prévia', 'Direito dos povos indígenas de serem consultados sobre medidas que os afetem (Convenção 169).'],
    ['Retorno', 'Devolução dos resultados da pesquisa à comunidade.'],
    ['Texto etnográfico', 'Redação que organiza a experiência de campo em análise.'],
    ['Reflexividade', 'Atenção ao lugar do pesquisador na produção do conhecimento.'],
  ],
  exemplos: `<p><strong>Três níveis numa frase de etnografia:</strong> visto — "durante a festa, os homens mais velhos sentaram-se à mesa principal"; dito — "um deles explicou: 'aqui quem manda é quem fundou a comunidade'"; interpretação — "a disposição da mesa parece reafirmar a autoridade dos fundadores". Separar os três permite ao leitor avaliar a interpretação.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas foi adotada em 2007 ${tag('fato')}. <strong>No Brasil:</strong> a pesquisa em terras indígenas exige autorização da Funai e respeito à organização própria de cada povo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o retorno dos resultados é dever do pesquisador', tag: 'argumento',
    premissas: ['A pesquisa usa o tempo, a confiança e o conhecimento das pessoas estudadas.', 'Quem recebe algo assume uma obrigação de retribuir (Mauss, an1-2).', 'O retorno dos resultados reconhece os participantes como sujeitos, não como objetos.'],
    conclusao: 'Logo, devolver os resultados à comunidade é exigência ética, não favor.',
    nota: 'Liga-se à dignidade da pessoa (GS 25).',
  },
  objecoes: [
    { objecao: 'Pedir consentimento atrapalha a espontaneidade e prejudica a pesquisa.', tag: 'debate',
      resposta: 'O consentimento pode alterar o comportamento no início, mas o convívio prolongado reduz esse efeito. E nenhuma vantagem metodológica justifica tratar pessoas como objetos sem seu acordo.' },
  ],
  aplicacao: `<p>Transforme seu diário de campo (an1-3) em um texto etnográfico de duas páginas, com um tema central, falas citadas, separação entre visto, dito e interpretado, e uma seção de limites e cuidados éticos.</p>`,
  fonte: {
    obra: 'Convenção nº 169 da OIT sobre povos indígenas e tribais (1989), arts. 6º e 7º; Concílio Vaticano II, Gaudium et Spes (1965), n. 58', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Convenção 169, localize a consulta prévia. Em Gaudium et Spes 58, a relação entre Evangelho e culturas. Use ambos na seção ética do seu texto.</p>`,
  },
  perguntas: [
    { p: 'O que prevê a Convenção 169 da OIT?', r: 'A consulta prévia, livre e informada aos povos indígenas e tribais sobre medidas que os afetem.' },
    { p: 'Quais os três níveis a distinguir num texto etnográfico?', r: 'O que foi visto, o que foi dito e o que é interpretação.' },
    { p: 'Que artigo da Constituição reconhece as tradições indígenas?', r: 'O art. 231.' },
  ],
  exercicios: [
    mc('A Convenção 169 da OIT foi promulgada no Brasil em:', ['1988', '1996', '2004', '2016'], 2, 'Consulta prévia.'),
    mc('A Declaração da ONU sobre os Direitos dos Povos Indígenas é de:', ['1948', '1989', '2007', '2015'], 2, 'Assembleia Geral.'),
    mc('A escrita da cultura (1986) é de:', ['Geertz', 'Clifford e Marcus', 'Malinowski', 'Mauss'], 1, 'Escrita etnográfica.'),
    mc('"A disposição da mesa reafirma a autoridade" é nível:', ['Visto', 'Dito', 'Interpretação', 'Dado estatístico'], 2, 'Hipótese do pesquisador.'),
    mc('Devolver os resultados à comunidade é:', ['Favor', 'Dever ético', 'Proibido', 'Opcional sempre'], 1, 'Reconhecimento dos sujeitos.'),
    disc('Entregue o texto etnográfico de duas páginas com tema, falas citadas, três níveis separados e seção de limites e ética.', ['Tema central', 'Três níveis separados', 'Falas fiéis', 'Seção ética']),
  ],
  resumo: ['Consentimento, recusa, proteção, retorno.', 'CNS 510/2016; código da ABA.', 'Convenção 169 (2004 no Brasil); CF art. 231; ONU 2007.', 'Texto: visto, dito, interpretado.', 'Clifford e Marcus (1986): escrita da cultura.'],
  referencias: [
    { texto: 'Organização Internacional do Trabalho, Convenção nº 169 (1989).' },
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510, de 2016.' },
    { texto: 'James Clifford e George Marcus (orgs.), A escrita da cultura (1986).' },
    { texto: 'Concílio Vaticano II, Gaudium et Spes (1965), n. 58.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto etnográfico', 'Ler os artigos da Convenção 169'],
  revisao: [['Convenção 169', 'Consulta prévia.'], ['Três níveis', 'Visto, dito, interpretado.'], ['Retorno', 'Dever ético.']],
  avancado: {
    texto: `<h3>Antropologia e missão</h3>
<p>Missionários estiveram entre os primeiros a registrar línguas e costumes de muitos povos; no Brasil, José de Anchieta escreveu a <em>Arte de gramática da língua mais usada na costa do Brasil</em> (publicada em 1595) ${tag('fato')}. A relação entre missão e antropologia — colaboração no conhecimento e tensões sobre a mudança cultural — é tema da etapa 7 ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'José de Anchieta, Arte de gramática da língua mais usada na costa do Brasil (1595).' }],
    exercicios: [
      mc('A gramática do tupi de Anchieta foi publicada em:', ['1500', '1595', '1700', '1822'], 1, 'Língua da costa.'),
      mc('Missionários contribuíram para o registro de:', ['Línguas e costumes', 'Apenas leis', 'Só mapas', 'Nada'], 0, 'Fonte histórica.'),
      mc('A relação entre missão e antropologia envolve:', ['Só colaboração', 'Colaboração e tensões', 'Só conflito', 'Nenhuma relação'], 1, 'Etapa 7.'),
      disc('Analise uma fonte missionária sobre um povo indígena do Brasil como documento etnográfico: o que registra, de que ponto de vista e com que limites.', ['Fonte identificada', 'Conteúdo', 'Ponto de vista', 'Limites'])],
  },
}),

avaliacao('an1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre cultura, alteridade, conceitos básicos, etnografia e ética, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e seu diário de campo.</li><li>Revise a distinção entre relativismo metodológico e moral.</li></ul>`,
[
  disc('Descreva uma prática social brasileira com os conceitos do módulo (rito de passagem, dádiva, parentesco ou etnocentrismo), separando o que se observa, o que se ouve e o que se interpreta.', ['Prática delimitada', 'Conceitos corretos', 'Três níveis separados', 'Conclusão proporcional']),
  disc('Explique por que o relativismo como método não obriga ao relativismo moral, com um exemplo e a fundamentação na dignidade humana.', ['Distinção exposta', 'Exemplo', 'Fundamento na dignidade', 'Objeção e resposta']),
]),
];
