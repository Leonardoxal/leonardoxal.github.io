// Linguística V — aplicações, investigação e avaliação integradora (etapas 9 a 11 do percurso de Linguística).
// Ensino de gramática e escrita; aprendizagem de línguas estrangeiras; línguas indígenas e tradução;
// investigação de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'li5-1', titulo: 'Ensino de gramática e de escrita com base na linguística', duracao: '150 min',
  aprendera: ['Distinguir ensino de nomenclatura e análise linguística', 'Planejar atividades de reflexão sobre a língua', 'Usar gêneros textuais no ensino da escrita', 'Corrigir textos com critérios explícitos'],
  prereq: ['Linguística IV (módulo LI4)'],
  explicacao: `
<h3>O problema</h3>
<p>Muitos alunos decoram nomes de classes de palavras e continuam escrevendo mal. Como a linguística pode ajudar a ensinar português?</p>
<h3>Nomenclatura e análise</h3>
<p>Ensinar só nomenclatura ("isto é adjunto adnominal") é diferente de levar o aluno a refletir sobre como a língua funciona e a usar esse conhecimento para ler e escrever melhor ${tag('interpretacao')}. A BNCC propõe a "análise linguística/semiótica" ligada à leitura e à produção de textos ${tag('fato')}.</p>
<h3>Partir de dados</h3>
<p>Uma atividade eficaz parte de exemplos reais: comparar "nós vamos" e "a gente vai" em textos de gêneros diferentes, observar onde cada forma aparece e por quê, e decidir qual usar em cada situação ${tag('interpretacao')}.</p>
<h3>Gêneros textuais</h3>
<p>Textos se organizam em gêneros — carta, notícia, artigo de opinião, relatório — com propósito, estrutura e linguagem próprios ${tag('fato')}. Ensinar a escrever é ensinar a dominar gêneros ${tag('interpretacao')}.</p>
<h3>Correção</h3>
<p>Na redação do ENEM, uma das cinco competências avaliadas é o domínio da modalidade escrita formal da língua portuguesa ${tag('fato')}. Corrigir com critérios explícitos, apontando o tipo de problema e como resolvê-lo, ajuda mais que marcar "erro" ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Análise linguística', 'Reflexão sobre o funcionamento da língua a serviço da leitura e da escrita.'],
    ['Gênero textual', 'Tipo de texto com propósito, estrutura e linguagem próprios.'],
    ['Modalidade escrita formal', 'Uso da norma culta na escrita.'],
    ['Adequação', 'Escolha linguística apropriada à situação.'],
    ['Reescrita', 'Revisão do texto pelo próprio autor a partir de orientações.'],
  ],
  exemplos: `<p><strong>Uma aula de concordância:</strong> em vez de listar regras, a professora traz trechos de uma conversa transcrita ("os menino chegou") e de uma notícia ("os meninos chegaram"). Os alunos observam onde a marca de plural aparece em cada caso, discutem a adequação a cada gênero e reescrevem o trecho da conversa como texto formal. A regra é aprendida com sentido.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas sugerem que o ensino isolado de gramática tradicional tem pouco efeito sobre a qualidade da escrita, enquanto o trabalho com textos e reescrita tem mais ${tag('interpretacao')}. <strong>No Brasil:</strong> o INEP publica a matriz de referência e a cartilha do participante da redação do ENEM ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a gramática deve servir ao texto', tag: 'argumento',
    premissas: ['O objetivo do ensino de língua é ler e escrever bem.', 'Conhecimento gramatical ajuda quando aplicado à revisão e à compreensão de textos.', 'Nomenclatura isolada não se transfere automaticamente para a escrita.'],
    conclusao: 'Logo, o ensino de gramática deve ser integrado à leitura e à produção de textos.',
    nota: 'Isso não dispensa o ensino explícito: dispensa o ensino desligado do uso.',
  },
  objecoes: [
    { objecao: 'Sem decorar regras e nomes, os alunos nunca dominarão a norma.', tag: 'debate',
      resposta: 'Alguma terminologia é útil para falar sobre a língua, e o ensino explícito das regras da norma é necessário. A questão é o equilíbrio: regras aprendidas com exemplos, aplicadas em textos e revisadas na reescrita. Decorar sem aplicar é o que falha.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: elabore uma atividade de ensino de português baseada em dados de uso, com objetivo, textos de apoio, perguntas de reflexão, produção e critério de correção.</p>`,
  fonte: {
    obra: 'Ministério da Educação, Base Nacional Comum Curricular, Língua Portuguesa (eixo análise linguística/semiótica); INEP, cartilha da redação do ENEM', link: { url: 'https://www.gov.br/inep', rotulo: 'Portal do INEP' },
    orientacao: `<p>Na BNCC, as habilidades de análise linguística. Na cartilha do ENEM, as cinco competências.</p>`,
  },
  perguntas: [
    { p: 'O que a BNCC chama de análise linguística/semiótica?', r: 'A reflexão sobre o funcionamento da língua ligada à leitura e à produção de textos.' },
    { p: 'O que é gênero textual?', r: 'Tipo de texto com propósito, estrutura e linguagem próprios.' },
    { p: 'Quantas competências tem a redação do ENEM?', r: 'Cinco.' },
  ],
  exercicios: [
    mc('Uma notícia e uma carta pessoal são:', ['O mesmo gênero', 'Gêneros diferentes', 'Línguas diferentes', 'Dialetos'], 1, 'Gêneros.'),
    mc('O domínio da modalidade escrita formal é competência da redação do:', ['ENEM', 'SAEB', 'PISA', 'IDEB'], 0, 'INEP.'),
    mc('Ensinar escolhendo a forma adequada à situação trabalha a:', ['Adequação', 'Fonética', 'Etimologia', 'Ortografia apenas'], 0, 'Uso.'),
    mc('Revisar o próprio texto a partir de orientações é:', ['Reescrita', 'Ditado', 'Cópia', 'Leitura'], 0, 'Processo.'),
    mc('O ensino de gramática mais eficaz tende a ser:', ['Isolado do texto', 'Integrado à leitura e escrita', 'Só oral', 'Proibido'], 1, 'Argumento.'),
    disc('Elabore uma atividade de ensino de português baseada em dados de uso.', ['Objetivo', 'Textos', 'Reflexão e produção', 'Correção']),
  ],
  resumo: ['Nomenclatura × análise linguística.', 'Partir de dados reais.', 'Gêneros textuais.', 'ENEM: cinco competências.', 'Gramática a serviço do texto.'],
  referencias: [
    { texto: 'Ministério da Educação, Base Nacional Comum Curricular (2017–2018).' },
    { texto: 'Marcos Bagno, Preconceito linguístico (1999).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Estrutura da língua portuguesa (1970).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a atividade', 'Consultar as fontes oficiais'],
  revisao: [['Análise linguística', 'BNCC.'], ['Gênero', 'Propósito.'], ['Reescrita', 'Revisão.']],
  avancado: {
    texto: `<h3>Os gêneros do discurso</h3>
<p>Mikhail Bakhtin definiu os gêneros do discurso como tipos relativamente estáveis de enunciados, ligados às esferas da atividade humana ${tag('fato')}. Sua obra influenciou fortemente os documentos curriculares brasileiros ${tag('fato')}. A noção ajuda a ver a escrita como prática social, não só como aplicação de regras ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Mikhail Bakhtin, "Os gêneros do discurso", em Estética da criação verbal.' }],
    exercicios: [
      mc('Os gêneros do discurso são tipos relativamente:', ['Estáveis', 'Aleatórios', 'Imutáveis', 'Individuais'], 0, 'Bakhtin.'),
      mc('Bakhtin influenciou os documentos:', ['Curriculares brasileiros', 'Jurídicos romanos', 'Medievais', 'Nenhum'], 0, 'Educação.'),
      mc('A escrita como prática social destaca o:', ['Contexto de uso', 'Só a regra', 'Só a ortografia', 'Nada'], 0, 'Interpretação.'),
      disc('Escolha um gênero e descreva seu propósito, estrutura e linguagem com um exemplo.', ['Gênero', 'Propósito', 'Estrutura', 'Linguagem'])],
  },
}),

aula({
  id: 'li5-2', titulo: 'Aprender línguas estrangeiras, e o lugar do latim e do grego', duracao: '150 min',
  aprendera: ['Conhecer princípios da aquisição de segunda língua', 'Aplicar estratégias de estudo eficazes a línguas', 'Conhecer os níveis do Quadro Europeu Comum de Referência', 'Avaliar o valor do estudo das línguas clássicas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Muitos estudam inglês por anos e não conseguem conversar. O que a linguística e a ciência da aprendizagem dizem sobre aprender outra língua?</p>
<h3>Input e interação</h3>
<p>Stephen Krashen defendeu que se adquire uma língua sobretudo pela exposição a mensagens compreensíveis, um pouco acima do nível atual ("input compreensível") ${tag('fato')}. Outros pesquisadores destacaram o papel da interação, da produção e do retorno sobre os erros ${tag('fato')}.</p>
<h3>Estratégias</h3>
<p>Princípios da ciência da memória aplicam-se às línguas: repetição espaçada de vocabulário, prática de recuperação (tentar lembrar antes de olhar), exposição diária e uso real ${tag('interpretacao')}. Ler muito na língua-alvo amplia vocabulário de modo eficaz ${tag('interpretacao')}.</p>
<h3>Níveis</h3>
<p>O Quadro Europeu Comum de Referência para as Línguas (Conselho da Europa, 2001) descreve seis níveis de proficiência: A1 e A2 (básico), B1 e B2 (independente), C1 e C2 (proficiente) ${tag('fato')}.</p>
<h3>Latim e grego</h3>
<p>O latim é a língua oficial da Igreja e a origem do português; o grego é a língua do Novo Testamento ${tag('fato')}. Estudá-los dá acesso direto a fontes, ajuda a entender a etimologia e exercita a análise gramatical ${tag('interpretacao')}. O Concílio Vaticano II pediu que se conservasse o uso do latim nos ritos latinos, permitindo o vernáculo (Sacrosanctum Concilium, 36) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Segunda língua', 'Língua aprendida depois da materna.'],
    ['Input compreensível', 'Mensagens na língua-alvo que o aprendiz consegue entender (Krashen).'],
    ['Proficiência', 'Nível de domínio de uma língua.'],
    ['QECR', 'Quadro Europeu Comum de Referência para as Línguas.'],
    ['Língua clássica', 'Língua de uma tradição literária antiga, como latim e grego.'],
  ],
  exemplos: `<p><strong>Um plano de 20 minutos por dia:</strong> 5 minutos de revisão espaçada de vocabulário em cartões; 10 minutos de leitura ou escuta compreensível (um texto curto, um áudio com transcrição); 5 minutos de produção (escrever três frases ou falar sozinho sobre o dia). Em um ano, são mais de 120 horas de prática distribuída.</p>`,
  contexto: `<p><strong>No mundo:</strong> o QECR é usado como referência em certificações de muitas línguas ${tag('fato')}. <strong>No Brasil:</strong> a BNCC tornou o inglês obrigatório nos anos finais do ensino fundamental ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que aprender latim ainda vale a pena', tag: 'argumento',
    premissas: ['Grande parte do vocabulário do português vem do latim.', 'Os textos fundamentais da tradição cristã e filosófica ocidental foram escritos em latim.', 'Traduzir exige análise gramatical rigorosa, que forma a inteligência.'],
    conclusao: 'Logo, o latim tem valor linguístico, cultural e formativo.',
    nota: 'O valor não exclui o estudo das línguas modernas, que respondem a outras necessidades.',
  },
  objecoes: [
    { objecao: 'Adultos não conseguem aprender bem uma língua nova.', tag: 'debate',
      resposta: 'É raro atingir pronúncia nativa depois da infância, mas adultos aprendem vocabulário e gramática com eficiência, sobretudo com método e constância. Muitos atingem alta proficiência. A idade influencia, mas não impede.' },
  ],
  aplicacao: `<p>Monte um plano de estudo de uma língua estrangeira (ou do latim) para três meses, com metas no QECR, estratégias de memória, fontes de input e formas de verificar o progresso.</p>`,
  fonte: {
    obra: 'Conselho da Europa, Quadro Europeu Comum de Referência para as Línguas (2001); Concílio Vaticano II, Sacrosanctum Concilium, n. 36', link: null,
    orientacao: `<p>No QECR, as descrições dos níveis. Na SC, a norma sobre o latim e o vernáculo.</p>`,
  },
  perguntas: [
    { p: 'O que é input compreensível?', r: 'Mensagens na língua-alvo que o aprendiz consegue entender.' },
    { p: 'Quais os níveis do QECR?', r: 'A1, A2, B1, B2, C1 e C2.' },
    { p: 'Em que língua foi escrito o Novo Testamento?', r: 'Em grego.' },
  ],
  exercicios: [
    mc('O input compreensível é associado a:', ['Krashen', 'Saussure', 'Labov', 'Grice'], 0, 'Aquisição.'),
    mc('O nível B2 do QECR é:', ['Básico', 'Independente', 'Proficiente', 'Nativo'], 1, 'Níveis.'),
    mc('O QECR foi publicado pelo Conselho da Europa em:', ['1960', '2001', '2015', '1988'], 1, 'Referência.'),
    mc('A norma sobre o latim nos ritos está na SC, n.:', ['36', '122', '124', '7'], 0, 'Liturgia.'),
    mc('Para memorizar vocabulário, recomenda-se:', ['Reler a lista', 'Repetição espaçada e recuperação', 'Só ouvir música', 'Nada'], 1, 'Memória.'),
    disc('Monte um plano de três meses para estudar uma língua, com metas, estratégias e verificação.', ['Metas', 'Estratégias', 'Fontes', 'Verificação']),
  ],
  resumo: ['Krashen: input compreensível.', 'Interação e retorno.', 'Repetição espaçada e recuperação.', 'QECR (2001): A1–C2.', 'Latim e grego: acesso às fontes.'],
  referencias: [
    { texto: 'Conselho da Europa, Quadro Europeu Comum de Referência para as Línguas (2001).' },
    { texto: 'Stephen Krashen, Principles and Practice in Second Language Acquisition (1982).' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de estudo', 'Ler as fontes indicadas'],
  revisao: [['Input', 'Krashen.'], ['A1–C2', 'QECR.'], ['SC 36', 'Latim.']],
  avancado: {
    texto: `<h3>O método natural no latim</h3>
<p>O método de Hans Ørberg, Lingua Latina per se illustrata, ensina latim inteiramente em latim, com textos graduados que se explicam pelo contexto e por imagens ${tag('fato')}. É uma aplicação do princípio do input compreensível a uma língua clássica ${tag('interpretacao')}. Muitos professores o combinam com explicações gramaticais explícitas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Hans H. Ørberg, Lingua Latina per se illustrata.' }],
    exercicios: [
      mc('O método de Ørberg ensina latim:', ['Só com tabelas', 'Inteiramente em latim', 'Só em português', 'Por áudio apenas'], 1, 'Método.'),
      mc('Ele aplica o princípio do:', ['Input compreensível', 'Behaviorismo', 'Estruturalismo', 'Iconoclasmo'], 0, 'Interpretação.'),
      mc('Muitos professores o combinam com:', ['Explicações gramaticais', 'Proibição de leitura', 'Nada', 'Só exercícios orais'], 0, 'Equilíbrio.'),
      disc('Avalie vantagens e limites de aprender latim pelo método natural.', ['Vantagens', 'Limites', 'Combinação', 'Avaliação'])],
  },
}),

aula({
  id: 'li5-3', titulo: 'Línguas indígenas, diversidade linguística e tradução', duracao: '150 min',
  aprendera: ['Conhecer a diversidade linguística indígena do Brasil', 'Conhecer os direitos linguísticos na Constituição', 'Discutir a ameaça de extinção de línguas', 'Conhecer princípios e história da tradução'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil é muitas vezes visto como país monolíngue. Mas aqui se falam centenas de línguas. Como conhecê-las, protegê-las e traduzir entre elas?</p>
<h3>Diversidade</h3>
<p>O Censo de 2010 do IBGE registrou 274 línguas indígenas faladas por 305 etnias no Brasil ${tag('fato')}. Elas se agrupam em troncos e famílias, como o tronco tupi e o macro-jê, e há línguas isoladas ${tag('fato')}.</p>
<h3>Direitos</h3>
<p>A Constituição reconhece aos índios sua organização social, costumes, línguas, crenças e tradições (art. 231) e assegura às comunidades indígenas, no ensino fundamental, a utilização de suas línguas maternas e processos próprios de aprendizagem (art. 210, § 2º) ${tag('fato')}.</p>
<h3>Ameaça</h3>
<p>Muitas línguas têm poucos falantes e correm risco de desaparecer; quando a última pessoa que fala uma língua morre, perde-se um modo único de nomear o mundo ${tag('interpretacao')}. Projetos de documentação gravam, transcrevem e produzem materiais com as comunidades ${tag('fato')}.</p>
<h3>Tradução</h3>
<p>São Jerônimo traduziu a Bíblia para o latim no fim do século IV (Vulgata), e é padroeiro dos tradutores ${tag('fato')}. Toda tradução enfrenta escolhas entre fidelidade à letra e ao sentido ${tag('interpretacao')}. Missionários como Anchieta traduziram catecismos e cantos para o tupi ${tag('fato')}. A tradução para línguas indígenas exige respeito, colaboração com falantes e consciência dos riscos de impor categorias alheias ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Tronco linguístico', 'Agrupamento amplo de famílias de línguas aparentadas.'],
    ['Língua isolada', 'Língua sem parentesco demonstrado com outras.'],
    ['Documentação linguística', 'Registro e descrição de uma língua com seus falantes.'],
    ['Vulgata', 'Tradução latina da Bíblia por São Jerônimo.'],
    ['Direitos linguísticos', 'Direitos ligados ao uso da própria língua.'],
  ],
  exemplos: `<p><strong>Traduzir "pão":</strong> num povo sem trigo, como traduzir "o pão nosso de cada dia"? Usar a palavra para o alimento básico local aproxima o sentido; manter "pão" preserva a referência ao rito eucarístico. Cada escolha tem ganhos e perdas — e decisões assim exigem diálogo com a comunidade e a tradição da Igreja.</p>`,
  contexto: `<p><strong>No mundo:</strong> a UNESCO publica um atlas das línguas em perigo ${tag('fato')}. <strong>No Brasil:</strong> o Museu do Índio e universidades mantêm projetos de documentação de línguas indígenas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que preservar línguas minoritárias', tag: 'argumento',
    premissas: ['Cada língua guarda conhecimentos, memórias e modos de expressão de um povo.', 'A perda de uma língua empobrece a comunidade e a humanidade.', 'Documentar e apoiar o uso das línguas respeita a dignidade de seus falantes.'],
    conclusao: 'Logo, preservar línguas minoritárias é exigência de justiça e de cultura.',
    nota: 'A Igreja valoriza a inculturação do Evangelho nas línguas dos povos (Redemptoris missio, 52–54).',
  },
  objecoes: [
    { objecao: 'Traduzir o Evangelho para línguas indígenas é destruir as culturas.', tag: 'debate',
      resposta: 'Houve casos de imposição cultural na história missionária, e eles devem ser reconhecidos. Mas muitas traduções também preservaram e documentaram línguas que de outro modo teriam desaparecido, e foram feitas com e para os povos. O critério é o respeito à liberdade e à cultura, como pede a doutrina da inculturação.' },
  ],
  aplicacao: `<p>Pesquise uma língua indígena brasileira (tronco ou família, região, número aproximado de falantes, situação de vitalidade) e apresente cinco palavras com seu significado, citando as fontes.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2010 — características gerais dos indígenas; Constituição de 1988, arts. 210 e 231', link: { url: 'https://www.ibge.gov.br', rotulo: 'Portal do IBGE' },
    orientacao: `<p>Localize os dados sobre línguas indígenas e leia os artigos constitucionais sobre línguas e educação.</p>`,
  },
  perguntas: [
    { p: 'Quantas línguas indígenas o Censo de 2010 registrou?', r: '274.' },
    { p: 'Que artigo da Constituição assegura o uso das línguas maternas no ensino indígena?', r: 'O art. 210, § 2º.' },
    { p: 'Quem traduziu a Vulgata?', r: 'São Jerônimo.' },
  ],
  exercicios: [
    mc('O Censo de 2010 registrou quantas etnias indígenas?', ['74', '174', '305', '1.000'], 2, 'IBGE.'),
    mc('A Constituição reconhece as línguas indígenas no art.:', ['5º', '205', '231', '226'], 2, 'Direitos.'),
    mc('Língua sem parentesco demonstrado é:', ['Isolada', 'Morta', 'Clássica', 'Crioula'], 0, 'Classificação.'),
    mc('São Jerônimo é padroeiro dos:', ['Tradutores', 'Médicos', 'Soldados', 'Pescadores'], 0, 'Vulgata.'),
    mc('A inculturação nas línguas dos povos é tratada na:', ['Redemptoris missio', 'Rerum novarum', 'Humanae vitae', 'Laudato si'], 0, 'Missão.'),
    disc('Pesquise uma língua indígena brasileira e apresente dados e cinco palavras com fontes.', ['Classificação', 'Falantes e vitalidade', 'Palavras', 'Fontes']),
  ],
  resumo: ['274 línguas, 305 etnias (Censo 2010).', 'CF arts. 210, § 2º, e 231.', 'Línguas ameaçadas; documentação.', 'Vulgata; Anchieta.', 'Tradução e inculturação.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2010: características gerais dos indígenas.' },
    { texto: 'José de Anchieta, Arte de gramática da língua mais usada na costa do Brasil (1595).' },
    { texto: 'João Paulo II, Redemptoris missio (1990), nn. 52–54.', livro: 'jp2-redemptoris-missio' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a pesquisa', 'Consultar as fontes oficiais'],
  revisao: [['274', 'Línguas.'], ['Art. 231', 'Direitos.'], ['Vulgata', 'Jerônimo.']],
  avancado: {
    texto: `<h3>Libras</h3>
<p>A Língua Brasileira de Sinais (Libras) é uma língua completa, com gramática própria, e não uma versão gestual do português ${tag('fato')}. Foi reconhecida pela Lei nº 10.436/2002 e regulamentada pelo Decreto nº 5.626/2005, que previu sua inclusão em cursos de formação de professores ${tag('fato')}. Seu estudo amplia a compreensão do que é uma língua ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Decreto nº 5.626, de 2005 (regulamentação da Libras).' }],
    exercicios: [
      mc('A Libras é:', ['Português gestual', 'Língua completa com gramática própria', 'Mímica', 'Código escrito'], 1, 'Língua.'),
      mc('A Libras foi regulamentada pelo Decreto:', ['5.626/2005', '3.551/2000', '25/1937', '9.765/2019'], 0, 'Regulamentação.'),
      mc('A lei de reconhecimento da Libras é de:', ['1988', '2002', '2010', '2015'], 1, 'Lei 10.436.'),
      disc('Explique por que a Libras é uma língua e não um código do português.', ['Gramática', 'Exemplos', 'Comparação', 'Conclusão'])],
  },
}),

aula({
  id: 'li5-4', titulo: 'Investigação de quatro semanas: um fenômeno do português da sua comunidade', duracao: '180 min',
  aprendera: ['Escolher um fenômeno de variação investigável', 'Coletar dados com ética', 'Codificar e contar ocorrências', 'Redigir um relatório com conclusão proporcional'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como transformar a curiosidade sobre "como se fala aqui" numa pequena pesquisa linguística confiável?</p>
<h3>Escolha do fenômeno</h3>
<p>Fenômenos frequentes e fáceis de identificar funcionam melhor: "nós" × "a gente", "tu" × "você", apagamento do -r final, concordância verbal, palatalização de /t/ e /d/ ${tag('interpretacao')}.</p>
<h3>Coleta</h3>
<p>Grave conversas ou entrevistas curtas (10 a 20 minutos) com pessoas de diferentes idades ou escolaridades, com consentimento informado ${tag('fato')}. Registre idade, sexo, escolaridade e região de cada participante, sem identificá-los no relatório ${tag('fato')}.</p>
<h3>Análise</h3>
<p>Transcreva os trechos relevantes, identifique cada ocorrência da variável, codifique a variante e os fatores (quem fala, situação) e calcule frequências ${tag('fato')}. Compare grupos com tabelas e gráficos simples ${tag('fato')}.</p>
<h3>Relatório</h3>
<p>Estrutura: pergunta; fenômeno e literatura; participantes e coleta; análise com números; discussão; limites (amostra pequena, poucas situações); conclusão proporcional ${tag('interpretacao')}. Distinga descrição de juízo normativo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Fenômeno variável', 'Ponto da língua com formas alternativas.'],
    ['Codificação', 'Atribuição de categorias a cada ocorrência.'],
    ['Frequência relativa', 'Proporção de ocorrências de uma variante.'],
    ['Participante', 'Pessoa cuja fala é gravada com consentimento.'],
    ['Limite da pesquisa', 'Aspecto que restringe a generalização dos resultados.'],
  ],
  exemplos: `<p><strong>"Nós" × "a gente" em três gerações:</strong> grava-se 15 minutos de conversa com um avô, uma mãe e um adolescente da mesma família. Contam-se as ocorrências: avô 12 "nós" e 8 "a gente"; mãe 6 e 15; adolescente 2 e 20. A tabela sugere aumento de "a gente" nas gerações mais novas — um indício, não uma prova, dada a amostra pequena.</p>`,
  contexto: `<p><strong>No mundo:</strong> estudantes de linguística fazem pesquisas semelhantes como iniciação ao método ${tag('fato')}. <strong>No Brasil:</strong> a pesquisa com seres humanos em ciências humanas segue a Resolução CNS nº 510/2016 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que contar ocorrências', tag: 'argumento',
    premissas: ['Impressões sobre como as pessoas falam são enviesadas.', 'Contar ocorrências em dados gravados dá números verificáveis.', 'Números permitem comparar grupos e situações.'],
    conclusao: 'Logo, a pesquisa sociolinguística depende de contagem sistemática.',
    nota: 'Com amostras pequenas, os números indicam tendências, não leis.',
  },
  objecoes: [
    { objecao: 'Gravar conversas altera o modo como as pessoas falam.', tag: 'debate',
      resposta: 'É o "paradoxo do observador", descrito por Labov: queremos observar a fala natural, mas a observação a altera. Técnicas como conversas longas, temas envolventes e familiaridade com o pesquisador reduzem o efeito. Reconhecer o limite no relatório é parte da honestidade.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: fenômeno, pergunta, participantes, termo de consentimento, roteiro da conversa, plano de codificação, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Fernando Tarallo, A pesquisa sociolinguística (1985); Conselho Nacional de Saúde, Resolução nº 510/2016', link: null,
    orientacao: `<p>Em Tarallo, os passos da pesquisa variacionista. Na Resolução, os princípios de consentimento.</p>`,
  },
  perguntas: [
    { p: 'Que fenômenos funcionam bem para uma pequena pesquisa?', r: 'Fenômenos frequentes e fáceis de identificar, como "nós" × "a gente".' },
    { p: 'O que é o paradoxo do observador?', r: 'A observação altera a fala natural que se quer observar.' },
    { p: 'Que dados registrar sobre os participantes?', r: 'Idade, sexo, escolaridade e região, sem identificá-los.' },
  ],
  exercicios: [
    mc('A pesquisa com seres humanos em ciências humanas segue a Resolução CNS:', ['466/2012', '510/2016', '125/2010', '225/2016'], 1, 'Ética.'),
    mc('O paradoxo do observador foi descrito por:', ['Labov', 'Saussure', 'Chomsky', 'Grice'], 0, 'Sociolinguística.'),
    mc('Atribuir categorias a cada ocorrência é:', ['Codificação', 'Transcrição fonética', 'Tradução', 'Ditado'], 0, 'Análise.'),
    mc('Com amostra pequena, os números indicam:', ['Leis', 'Tendências', 'Nada', 'Certezas'], 1, 'Proporção.'),
    mc('O relatório deve separar:', ['Descrição e juízo normativo', 'Nada', 'Só números', 'Só opiniões'], 0, 'Distinção.'),
    disc('Apresente o pré-projeto com fenômeno, participantes, consentimento, codificação, cronograma e rubrica.', ['Fenômeno e pergunta', 'Participantes e ética', 'Codificação', 'Cronograma e rubrica']),
  ],
  resumo: ['Fenômeno frequente e identificável.', 'Gravação com consentimento.', 'Transcrição, codificação, frequências.', 'Paradoxo do observador.', 'Conclusão proporcional.'],
  referencias: [
    { texto: 'Fernando Tarallo, A pesquisa sociolinguística (1985).' },
    { texto: 'William Labov, The Social Stratification of English in New York City (1966).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a investigação em quatro semanas'],
  revisao: [['Codificar', 'Categorizar.'], ['Paradoxo', 'Observador.'], ['Tendência', 'Amostra pequena.']],
  avancado: {
    texto: `<h3>Análise multivariada</h3>
<p>Pesquisas sociolinguísticas profissionais usam análise estatística multivariada, como a regressão logística, para medir o peso de vários fatores ao mesmo tempo sobre a escolha da variante ${tag('fato')}. Programas como o GoldVarb e, mais recentemente, ferramentas em R foram muito usados no Brasil ${tag('fato')}. É a ponte entre a linguística e a estatística ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Fernando Tarallo, A pesquisa sociolinguística (1985).' }],
    exercicios: [
      mc('A análise multivariada mede o peso de:', ['Um só fator', 'Vários fatores ao mesmo tempo', 'Nenhum', 'Só a idade'], 1, 'Estatística.'),
      mc('Uma técnica usada é a regressão:', ['Linear simples apenas', 'Logística', 'Nenhuma', 'Geométrica'], 1, 'Variante binária.'),
      mc('A análise multivariada liga a linguística à:', ['Estatística', 'Astronomia', 'Química', 'Música'], 0, 'Interdisciplina.'),
      disc('Explique por que analisar fatores separadamente pode enganar (relembre o paradoxo de Simpson).', ['Fatores', 'Confusão', 'Exemplo', 'Solução'])],
  },
}),

avaliacao('li5-5', 'Avaliação integradora de Linguística', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Linguística. Reúne questões de todos os módulos (LI1 a LI5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça análises de frases em todos os níveis.</li><li>Releia a rubrica da investigação (li5-4).</li></ul>`,
[
  disc('Analise um fenômeno de variação do português do Brasil (fonológico, morfológico ou sintático): descreva as variantes, os fatores que as condicionam e como ensinaria a forma de prestígio sem desprezar a outra.', ['Descrição', 'Fatores', 'Ensino', 'Distinção entre descrição e norma']),
  disc('Compare a concepção de linguagem de um autor clássico (Aristóteles ou Agostinho) com a de um moderno (Saussure, Chomsky ou Austin), mostrando o que cada uma ilumina e o que deixa em aberto.', ['Autor clássico', 'Autor moderno', 'Comparação', 'Avaliação']),
]),
];
