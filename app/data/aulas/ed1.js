// Educação I — o que é educar, vocabulário, métodos de estudo e indicadores (etapas 1 a 3 do percurso de Educação).
// Conceito e fim da educação; vocabulário e estrutura da educação brasileira; filosofia, história e pesquisa empírica;
// leitura crítica de indicadores educacionais.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ed1-1', titulo: 'O que é educar: instrução, formação e o fim da educação', duracao: '150 min',
  aprendera: ['Distinguir educação, instrução e formação', 'Explicar o fim da educação na tradição clássica e cristã', 'Conhecer o papel da família, da escola e do Estado', 'Confrontar definições de educação'],
  prereq: ['Degrau 0: método de estudo'],
  explicacao: `
<h3>O problema</h3>
<p>Todos fomos educados, e muitos educam: pais, professores, catequistas. Mas o que é educar? Transmitir informações, preparar para o trabalho, formar cidadãos, formar santos?</p>
<h3>Instrução e formação</h3>
<p>Instrução é a transmissão de conhecimentos e habilidades; formação é o desenvolvimento da pessoa inteira — inteligência, vontade, afetos, caráter ${tag('argumento')}. Uma escola pode instruir bem e formar mal, ensinando muito e deixando o aluno sem critério para usar o que sabe ${tag('interpretacao')}.</p>
<h3>O fim da educação</h3>
<p>Santo Tomás descreve a educação dos filhos como a condução e promoção da prole até o estado perfeito do homem enquanto homem, que é o estado de virtude (Comentário às Sentenças, IV, d. 26) ${tag('doutrina')}. Pio XI ensinou que a educação consiste em formar o homem tal como deve ser e como deve portar-se nesta vida para alcançar o fim sublime para o qual foi criado (Divini illius Magistri, 1929) ${tag('doutrina')}. Jacques Maritain afirmou que o fim principal da educação é guiar o homem no dinamismo pelo qual ele se forma como pessoa (Rumos da educação, 1943) ${tag('interpretacao')}.</p>
<h3>Quem educa</h3>
<p>A Igreja ensina que os pais são os primeiros e principais educadores dos filhos (Gravissimum educationis, 3; CIC 2221–2223) ${tag('doutrina')}. A Declaração Universal dos Direitos Humanos afirma que os pais têm prioridade de direito na escolha do gênero de educação dos filhos (art. 26, 3) ${tag('fato')}. A Constituição de 1988 declara a educação direito de todos e dever do Estado e da família (art. 205) e afirma o dever dos pais de assistir, criar e educar os filhos menores (art. 229) ${tag('fato')}. Pelo princípio de subsidiariedade, escola e Estado ajudam a família, sem substituí-la (CIC 1883) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Educação', 'Processo de formação da pessoa inteira rumo à sua plenitude.'],
    ['Instrução', 'Transmissão de conhecimentos e habilidades.'],
    ['Formação', 'Desenvolvimento da inteligência, da vontade e do caráter.'],
    ['Subsidiariedade', 'Instâncias maiores ajudam as menores sem tomar seu lugar (CIC 1883).'],
    ['Primeiros educadores', 'Os pais, segundo a doutrina da Igreja (CIC 2223).'],
  ],
  exemplos: `<p><strong>Dois alunos:</strong> Ana decorou as fórmulas e tirou nota alta, mas cola quando pode e não sabe por que estuda. Pedro tirou nota menor, mas estuda com constância, admite os erros e pergunta o porquê das coisas. Na instrução, Ana vai melhor; na formação, Pedro. Uma boa educação busca as duas coisas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra latina <em>educare</em> significava criar, nutrir; muitos autores a aproximam também de <em>educere</em>, conduzir para fora — a relação etimológica entre as duas é discutida ${tag('debate')}. <strong>No Brasil:</strong> a Constituição fixa a educação básica obrigatória e gratuita dos 4 aos 17 anos (art. 208, I) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a educação não se reduz à instrução', tag: 'argumento',
    premissas: ['O homem não é só inteligência: tem vontade, afetos e liberdade.', 'Conhecimento sem virtude pode ser usado para o mal.', 'Educar é ajudar a pessoa a tornar-se o que deve ser, e não só a saber coisas.'],
    conclusao: 'Logo, a educação inclui a formação moral e não se reduz à transmissão de conteúdos.',
    nota: 'Isso não diminui a instrução: a inteligência bem formada é parte da pessoa bem formada.',
  },
  objecoes: [
    { objecao: 'A escola deve ensinar conteúdos; formar valores é tarefa só da família.', tag: 'debate',
      resposta: 'A família tem prioridade na formação moral, mas toda escola forma hábitos — pontualidade, honestidade, respeito — mesmo quando não diz. A questão não é se a escola forma, mas como, e em harmonia com os pais. A doutrina da Igreja pede colaboração, não substituição.' },
  ],
  aplicacao: `<p>Escreva sua definição de educação em uma frase. Depois compare-a com as de Tomás, Pio XI e Maritain e com o art. 205 da Constituição, indicando o que cada uma enfatiza.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Gravissimum educationis (1965), 1–3; Catecismo, §§ 2221–2223; Constituição de 1988, arts. 205 e 229', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Na Gravissimum educationis, o fim da educação e o papel dos pais. No Catecismo, os deveres dos pais. Na Constituição, o direito à educação.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre instrução e formação?', r: 'Instrução transmite conhecimentos; formação desenvolve a pessoa inteira.' },
    { p: 'Quem são os primeiros educadores segundo a Igreja?', r: 'Os pais.' },
    { p: 'O que diz o art. 205 da Constituição?', r: 'Que a educação é direito de todos e dever do Estado e da família.' },
  ],
  exercicios: [
    mc('Para Tomás, a educação conduz a prole ao estado de:', ['Riqueza', 'Virtude', 'Fama', 'Poder'], 1, 'Estado perfeito do homem.'),
    mc('A encíclica de Pio XI sobre a educação é:', ['Rerum novarum', 'Divini illius Magistri', 'Humanae vitae', 'Fides et ratio'], 1, '1929.'),
    mc('A prioridade dos pais na escolha da educação está na Declaração Universal, art.:', ['1', '18', '26', '30'], 2, 'Art. 26, 3.'),
    mc('A educação básica obrigatória vai dos:', ['6 aos 14 anos', '4 aos 17 anos', '0 aos 18 anos', '7 aos 15 anos'], 1, 'CF art. 208, I.'),
    mc('O princípio de que o Estado ajuda a família sem substituí-la é a:', ['Solidariedade', 'Subsidiariedade', 'Igualdade', 'Laicidade'], 1, 'CIC 1883.'),
    disc('Escreva sua definição de educação e compare-a com Tomás, Pio XI, Maritain e a Constituição.', ['Definição', 'Comparação', 'Ênfases', 'Fontes']),
  ],
  resumo: ['Instrução ≠ formação.', 'Fim: a pessoa plena, o estado de virtude (Tomás).', 'Pais: primeiros educadores (GE 3; CIC 2223).', 'CF arts. 205, 208 e 229.', 'Subsidiariedade (CIC 1883).'],
  referencias: [
    { texto: 'Concílio Vaticano II, Gravissimum educationis (1965).' },
    { texto: 'Jacques Maritain, Rumos da educação (1943).', livro: 'maritain-educacao' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1883 e 2221–2233.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a definição comparada', 'Ler as fontes indicadas'],
  revisao: [['Instrução e formação', 'Saber e ser.'], ['GE 3', 'Pais, primeiros educadores.'], ['CF 205', 'Direito de todos.']],
  avancado: {
    texto: `<h3>Educação e liberdade</h3>
<p>Maritain advertiu contra dois erros: tratar o aluno como matéria passiva a ser moldada e abandoná-lo a si mesmo sem orientação ${tag('interpretacao')}. Para ele, o agente principal da educação é o próprio dinamismo interior do aluno, e o professor é um agente real, mas auxiliar — tese que ecoa a comparação de Tomás entre o mestre e o médico, que ajuda a natureza a produzir a saúde ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, Rumos da educação (1943), cap. I.', livro: 'maritain-educacao' }],
    exercicios: [
      mc('Para Maritain, o agente principal da educação é:', ['O Estado', 'O dinamismo interior do aluno', 'O livro didático', 'A nota'], 1, 'Interpretação.'),
      mc('Tomás compara o mestre ao:', ['Escultor', 'Médico', 'Juiz', 'Soldado'], 1, 'Ajuda a natureza.'),
      mc('Os dois erros apontados por Maritain são:', ['Passividade e abandono', 'Rigor e disciplina', 'Ciência e fé', 'Família e escola'], 0, 'Extremos.'),
      disc('Explique a analogia do mestre como médico e aplique-a a uma situação de ensino.', ['Analogia', 'Aplicação', 'Limites', 'Fonte'])],
  },
}),

aula({
  id: 'ed1-2', titulo: 'Vocabulário da educação e a estrutura do ensino brasileiro', duracao: '150 min',
  aprendera: ['Definir ensino, aprendizagem, didática, pedagogia e currículo', 'Distinguir avaliação diagnóstica, formativa e somativa', 'Descrever níveis e etapas da educação brasileira', 'Conhecer a LDB e a BNCC'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Quem discute educação sem vocabulário preciso confunde coisas diferentes: ensinar não é o mesmo que aprender, e currículo não é o mesmo que programa de uma matéria.</p>
<h3>Conceitos</h3>
<p>Ensino é a ação de quem ensina; aprendizagem é a mudança duradoura em quem aprende ${tag('fato')}. Pode haver ensino sem aprendizagem ${tag('argumento')}. Pedagogia é o estudo da educação; didática, a arte e o estudo dos meios de ensinar ${tag('fato')}. Currículo é o conjunto organizado do que se pretende ensinar e de como isso se distribui no tempo ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>A avaliação diagnóstica verifica o que o aluno sabe antes; a formativa acompanha o processo para corrigir o rumo; a somativa verifica o resultado ao fim de uma etapa ${tag('fato')}.</p>
<h3>Estrutura brasileira</h3>
<p>A Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996) divide a educação escolar em educação básica — educação infantil, ensino fundamental e ensino médio — e educação superior (art. 21) ${tag('fato')}. A educação infantil compreende creche, até 3 anos, e pré-escola, de 4 a 5 anos ${tag('fato')}. O ensino fundamental tem nove anos desde a Lei nº 11.274/2006 ${tag('fato')}. A Base Nacional Comum Curricular (BNCC), homologada em 2017 para a educação infantil e o ensino fundamental e em 2018 para o ensino médio, define as aprendizagens essenciais ${tag('fato')}.</p>
<h3>Ensino religioso</h3>
<p>A Constituição prevê o ensino religioso de matrícula facultativa nas escolas públicas de ensino fundamental (art. 210, § 1º) ${tag('fato')}. Em 2017, o STF admitiu o ensino religioso confessional nas escolas públicas, mantida a matrícula facultativa (ADI 4439) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Aprendizagem', 'Mudança duradoura no conhecimento ou na capacidade de quem aprende.'],
    ['Didática', 'Arte e estudo dos meios de ensinar.'],
    ['Currículo', 'Conjunto organizado do que se pretende ensinar.'],
    ['Avaliação formativa', 'Avaliação durante o processo, para corrigir o rumo.'],
    ['BNCC', 'Base Nacional Comum Curricular, que define as aprendizagens essenciais.'],
  ],
  exemplos: `<p><strong>Três avaliações:</strong> no primeiro dia, o professor aplica cinco questões para saber o que a turma já sabe de frações (diagnóstica). Durante o mês, corrige exercícios e refaz a explicação onde muitos erram (formativa). No fim, aplica a prova do bimestre (somativa). As três têm funções diferentes; usar só a última é perder informação.</p>`,
  contexto: `<p><strong>No mundo:</strong> a palavra "didática" ganhou projeção com a Didática magna de Comênio (1657), que propunha "ensinar tudo a todos" ${tag('fato')}. <strong>No Brasil:</strong> a primeira LDB foi a Lei nº 4.024/1961; a atual é de 1996 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ensinar não garante aprender', tag: 'argumento',
    premissas: ['Aprender é uma atividade de quem aprende: exige atenção, esforço e prática.', 'O professor pode explicar bem a quem não presta atenção ou não pratica.', 'Logo, o resultado depende também do aluno, de seus hábitos e de condições externas.'],
    conclusao: 'Logo, ensino e aprendizagem são distintos, e o bom ensino visa provocar a atividade de quem aprende.',
    nota: 'Por isso a avaliação formativa importa: mostra se o ensino está produzindo aprendizagem.',
  },
  objecoes: [
    { objecao: 'Uma base curricular nacional fere a liberdade das escolas e das famílias.', tag: 'debate',
      resposta: 'A BNCC fixa aprendizagens essenciais, e as redes e escolas elaboram seus currículos. Críticos temem uniformização e conteúdos controversos; defensores apontam a garantia de um mínimo comum a todos. O debate legítimo é sobre o que deve ser comum e o que deve ficar livre.' },
  ],
  aplicacao: `<p>Monte o glossário da etapa: 20 termos educacionais com definição e, quando houver, o artigo da LDB ou da Constituição correspondente.</p>`,
  fonte: {
    obra: 'Lei nº 9.394/1996 (LDB), arts. 1º, 21, 29 a 36; Constituição de 1988, arts. 205 a 214', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na LDB, a definição de educação (art. 1º) e a organização dos níveis (art. 21 e seguintes). Na Constituição, os princípios e deveres.</p>`,
  },
  perguntas: [
    { p: 'Quais as etapas da educação básica?', r: 'Educação infantil, ensino fundamental e ensino médio.' },
    { p: 'Quantos anos tem o ensino fundamental?', r: 'Nove.' },
    { p: 'Para que serve a avaliação formativa?', r: 'Para acompanhar o processo e corrigir o rumo.' },
  ],
  exercicios: [
    mc('A LDB atual é a Lei nº:', ['4.024/1961', '5.692/1971', '9.394/1996', '13.415/2017'], 2, 'Diretrizes e bases.'),
    mc('A pré-escola atende crianças de:', ['0 a 3 anos', '4 a 5 anos', '6 a 10 anos', '11 a 14 anos'], 1, 'Educação infantil.'),
    mc('A avaliação feita no fim de uma etapa para verificar o resultado é:', ['Diagnóstica', 'Formativa', 'Somativa', 'Informal'], 2, 'Resultado.'),
    mc('"Ensinar tudo a todos" é lema associado a:', ['Comênio', 'Rousseau', 'Dewey', 'Freire'], 0, 'Didática magna.'),
    mc('O ensino religioso nas escolas públicas de ensino fundamental é:', ['Proibido', 'Obrigatório', 'De matrícula facultativa', 'Só em escolas privadas'], 2, 'CF art. 210, § 1º.'),
    disc('Monte o glossário de 20 termos educacionais com definições e artigos.', ['Termos', 'Definições', 'Artigos', 'Precisão']),
  ],
  resumo: ['Ensino ≠ aprendizagem.', 'Pedagogia, didática, currículo.', 'Avaliação diagnóstica, formativa, somativa.', 'LDB (1996): educação básica e superior.', 'BNCC (2017/2018); CF art. 210, § 1º.'],
  referencias: [
    { texto: 'Lei nº 9.394, de 1996 (Lei de Diretrizes e Bases da Educação Nacional).' },
    { texto: 'João Amós Comênio, Didática magna (1657).' },
    { texto: 'Ministério da Educação, Base Nacional Comum Curricular (2017–2018).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os artigos indicados'],
  revisao: [['LDB art. 21', 'Básica e superior.'], ['Formativa', 'Durante o processo.'], ['BNCC', 'Aprendizagens essenciais.']],
  avancado: {
    texto: `<h3>O Novo Ensino Médio</h3>
<p>A Lei nº 13.415/2017 reorganizou o ensino médio com formação geral básica e itinerários formativos ${tag('fato')}. Após críticas e debates, a Lei nº 14.945/2024 alterou a reforma, ampliando a carga horária da formação geral básica ${tag('fato')}. Avaliar seus efeitos exige dados de vários anos e cuidado com as diferenças entre redes ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lei nº 13.415, de 2017, e Lei nº 14.945, de 2024.' }],
    exercicios: [
      mc('A reforma do ensino médio de 2017 é a Lei nº:', ['9.394', '11.274', '13.415', '14.945'], 2, 'Itinerários.'),
      mc('A lei de 2024 ampliou a carga da:', ['Formação geral básica', 'Educação infantil', 'Pós-graduação', 'Creche'], 0, 'Revisão.'),
      mc('Avaliar a reforma exige:', ['Uma única nota', 'Dados de vários anos', 'Opinião', 'Nada'], 1, 'Interpretação.'),
      disc('Compare os argumentos a favor e contra os itinerários formativos.', ['A favor', 'Contra', 'Dados', 'Avaliação'])],
  },
}),

aula({
  id: 'ed1-3', titulo: 'Como se estuda a educação: filosofia, história e pesquisa empírica', duracao: '150 min',
  aprendera: ['Distinguir as perguntas da filosofia, da história e da ciência da educação', 'Reconhecer desenhos de pesquisa empírica', 'Distinguir correlação e causalidade em educação', 'Ler um estudo educacional com espírito crítico'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>"Esse método funciona?" "Para que serve a escola?" "Como era a escola no Império?" São perguntas diferentes, que exigem métodos diferentes.</p>
<h3>Três olhares</h3>
<p>A filosofia da educação pergunta pelo fim e pelos critérios: o que é uma pessoa educada ${tag('argumento')}. A história da educação reconstrói instituições, ideias e práticas a partir de fontes ${tag('fato')}. A pesquisa empírica investiga o que acontece de fato: o que os alunos aprendem, que práticas produzem que resultados ${tag('fato')}.</p>
<h3>Desenhos de pesquisa</h3>
<p>Estudos observacionais registram o que ocorre sem intervir; levantamentos aplicam questionários e testes a amostras; experimentos comparam grupos que recebem ou não uma intervenção, idealmente sorteados ${tag('fato')}. Estudos de caso descrevem em profundidade uma escola ou turma ${tag('fato')}.</p>
<h3>Correlação e causalidade</h3>
<p>Alunos que leem mais em casa têm notas melhores; isso não prova que ler em casa cause as notas, porque famílias que leem diferem em muitas outras coisas ${tag('argumento')}. O sorteio dos grupos nos experimentos é a forma mais forte de separar causa e coincidência ${tag('fato')}. Revisões sistemáticas e meta-análises reúnem muitos estudos sobre a mesma pergunta ${tag('fato')}.</p>
<h3>Os limites</h3>
<p>A pesquisa empírica diz o que tende a funcionar para certo objetivo; não diz, sozinha, qual objetivo vale a pena — essa é pergunta filosófica ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Filosofia da educação', 'Estudo do fim e dos critérios da educação.'],
    ['Experimento', 'Comparação de grupos com e sem uma intervenção.'],
    ['Sorteio (aleatorização)', 'Distribuição dos participantes por acaso entre os grupos.'],
    ['Meta-análise', 'Síntese estatística de muitos estudos sobre a mesma pergunta.'],
    ['Variável de confusão', 'Fator que influencia ao mesmo tempo a causa suposta e o efeito.'],
  ],
  exemplos: `<p><strong>Tablets e notas:</strong> uma reportagem diz que escolas com tablets têm notas maiores. Antes de concluir, pergunte: as escolas com tablets são mais ricas? Os alunos já tinham notas maiores antes? Houve grupo de comparação sorteado? Se as escolas com tablets eram mais ricas, a renda é variável de confusão.</p>`,
  contexto: `<p><strong>No mundo:</strong> o movimento por "educação baseada em evidências" ganhou força a partir dos anos 1990, com revisões sistemáticas de intervenções ${tag('fato')}. <strong>No Brasil:</strong> há uma tradição forte de história da educação, e a pesquisa experimental em escolas cresceu nas últimas décadas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que filosofia e pesquisa empírica precisam uma da outra', tag: 'argumento',
    premissas: ['A pesquisa empírica mede efeitos sobre objetivos escolhidos.', 'A escolha dos objetivos (memorizar, compreender, formar o caráter) é questão de fim, que a medida não decide.', 'Sem dados, a filosofia pode propor meios que não funcionam.'],
    conclusao: 'Logo, a boa reflexão educacional une juízo sobre os fins e evidência sobre os meios.',
    nota: 'É a velha distinção entre o fim e os meios, aplicada à escola.',
  },
  objecoes: [
    { objecao: 'Educação é arte; números não captam o que importa.', tag: 'debate',
      resposta: 'Há algo de arte no ensino, e nem tudo se mede. Mas ignorar dados permite repetir práticas ineficazes. O caminho prudente é medir o que se pode medir bem, reconhecer o que não se mede e não confundir as duas coisas.' },
  ],
  aplicacao: `<p>Escolha uma notícia sobre um método de ensino. Identifique a pergunta, o desenho do estudo, o grupo de comparação, possíveis variáveis de confusão e o que a conclusão afirma além dos dados.</p>`,
  fonte: {
    obra: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009), introdução', link: null,
    orientacao: `<p>Observe como o autor parte da ciência cognitiva e evita prometer receitas; anote os princípios que ele propõe e o tipo de evidência que usa.</p>`,
  },
  perguntas: [
    { p: 'Que pergunta é própria da filosofia da educação?', r: 'A do fim e dos critérios da educação.' },
    { p: 'Por que sortear os grupos num experimento?', r: 'Para separar o efeito da intervenção de outras diferenças.' },
    { p: 'O que é uma variável de confusão?', r: 'Um fator que influencia ao mesmo tempo a causa suposta e o efeito.' },
  ],
  exercicios: [
    mc('Reconstruir a escola jesuítica a partir de documentos é tarefa da:', ['Filosofia', 'História da educação', 'Estatística', 'Didática'], 1, 'Fontes.'),
    mc('A forma mais forte de separar causa e coincidência é:', ['Opinião de especialista', 'Experimento com sorteio', 'Estudo de caso', 'Entrevista'], 1, 'Aleatorização.'),
    mc('Síntese estatística de muitos estudos é a:', ['Meta-análise', 'Ementa', 'Ficha', 'Hipótese'], 0, 'Revisão.'),
    mc('Escolas com tablets mais ricas: a renda é:', ['Efeito', 'Variável de confusão', 'Intervenção', 'Amostra'], 1, 'Confusão.'),
    mc('Qual objetivo vale a pena é pergunta:', ['Empírica', 'Filosófica', 'Estatística', 'Jurídica'], 1, 'Fins.'),
    disc('Analise uma notícia sobre método de ensino: pergunta, desenho, comparação, confusão e conclusão.', ['Pergunta', 'Desenho', 'Confusão', 'Conclusão']),
  ],
  resumo: ['Filosofia: fins; história: fontes; ciência: efeitos.', 'Observação, levantamento, experimento, estudo de caso.', 'Correlação ≠ causalidade.', 'Sorteio e meta-análise.', 'Dados não decidem fins.'],
  referencias: [
    { texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' },
    { texto: 'Jacques Maritain, Rumos da educação (1943).', livro: 'maritain-educacao' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da notícia', 'Ler a fonte indicada'],
  revisao: [['Sorteio', 'Causa.'], ['Confusão', 'Terceiro fator.'], ['Fins e meios', 'Filosofia e dados.']],
  avancado: {
    texto: `<h3>Tamanho de efeito</h3>
<p>Dizer que uma intervenção "funciona" não basta: é preciso saber quanto. O tamanho de efeito expressa a diferença entre grupos em unidades de desvio-padrão, permitindo comparar estudos ${tag('fato')}. Efeitos pequenos podem importar se a intervenção for barata e ampla; efeitos grandes em estudos pequenos costumam encolher em replicações ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' }],
    exercicios: [
      mc('O tamanho de efeito expressa a diferença em:', ['Reais', 'Desvios-padrão', 'Alunos', 'Horas'], 1, 'Comparação.'),
      mc('Efeitos grandes em estudos pequenos tendem a:', ['Crescer', 'Encolher em replicações', 'Ficar iguais', 'Sumir sempre'], 1, 'Interpretação.'),
      mc('Um efeito pequeno pode importar se a intervenção for:', ['Cara e restrita', 'Barata e ampla', 'Secreta', 'Opcional'], 1, 'Custo.'),
      disc('Explique por que uma meta-análise pode ser mais confiável que um estudo isolado, e um limite dela.', ['Vantagem', 'Limite', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'ed1-4', titulo: 'Indicadores educacionais: Censo Escolar, SAEB, IDEB e PISA', duracao: '150 min',
  aprendera: ['Conhecer as fontes de dados educacionais brasileiros', 'Explicar como o IDEB é calculado', 'Interpretar resultados do PISA', 'Reconhecer limites e distorções dos indicadores'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber se uma escola ensina bem? Notas, aprovação, frequência? Cada indicador mostra uma parte e esconde outra.</p>
<h3>As fontes</h3>
<p>O Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP) realiza o Censo Escolar, que levanta matrículas, docentes e infraestrutura, e o Sistema de Avaliação da Educação Básica (SAEB), com provas de língua portuguesa e matemática ${tag('fato')}.</p>
<h3>O IDEB</h3>
<p>O Índice de Desenvolvimento da Educação Básica, criado em 2007, combina o desempenho no SAEB com a taxa de aprovação, numa escala de 0 a 10 ${tag('fato')}. Assim, uma escola não melhora o índice só reprovando menos nem só selecionando bons alunos para a prova ${tag('interpretacao')}.</p>
<h3>O PISA</h3>
<p>O Programa Internacional de Avaliação de Estudantes, da OCDE, avalia estudantes de 15 anos em leitura, matemática e ciências desde 2000; o Brasil participa desde a primeira edição ${tag('fato')}. Os resultados brasileiros têm ficado abaixo da média dos países da OCDE ${tag('fato')}.</p>
<h3>Limites</h3>
<p>Indicadores medem pouco do que a escola faz: não captam caráter, cultura geral ou fé ${tag('argumento')}. E quando uma medida vira meta, pode ser distorcida — o treino para a prova pode subir a nota sem subir a aprendizagem, fenômeno associado à chamada lei de Goodhart ${tag('interpretacao')}. Comparar escolas sem considerar o nível socioeconômico dos alunos também engana ${tag('argumento')}.</p>`,
  vocabulario: [
    ['INEP', 'Instituto federal responsável por censos e avaliações educacionais.'],
    ['SAEB', 'Sistema de Avaliação da Educação Básica.'],
    ['IDEB', 'Índice que combina desempenho no SAEB e aprovação (0 a 10).'],
    ['PISA', 'Avaliação internacional da OCDE com estudantes de 15 anos.'],
    ['Nível socioeconômico', 'Indicador da condição social e econômica das famílias dos alunos.'],
  ],
  exemplos: `<p><strong>Duas escolas:</strong> a escola A tem IDEB 6,5; a escola B, 5,0. Antes de concluir que A ensina melhor, veja: A atende famílias de renda alta, B de renda baixa; B subiu de 3,8 para 5,0 em seis anos, A ficou estável. Considerando o ponto de partida e a evolução, B pode estar fazendo um trabalho notável.</p>`,
  contexto: `<p><strong>No mundo:</strong> rankings internacionais influenciam políticas em muitos países, com críticas sobre a redução da educação a poucas disciplinas ${tag('debate')}. <strong>No Brasil:</strong> os resultados por escola e município são públicos no portal do INEP ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que combinar fluxo e desempenho', tag: 'argumento',
    premissas: ['Se só a nota contasse, uma escola poderia reprovar ou afastar alunos fracos para subir a média.', 'Se só a aprovação contasse, poderia aprovar todos sem ensinar.', 'Combinar as duas medidas reduz esses incentivos perversos.'],
    conclusao: 'Logo, o IDEB combina desempenho e aprovação para equilibrar incentivos.',
    nota: 'Mesmo assim, nenhum índice elimina todo incentivo a distorções.',
  },
  objecoes: [
    { objecao: 'Avaliações externas só servem para rankings e pressionam professores.', tag: 'debate',
      resposta: 'Há o risco de pressão e de estreitamento do currículo. Mas sem avaliação externa não se sabe se os alunos mais pobres estão aprendendo, e as desigualdades ficam ocultas. O uso responsável busca diagnóstico e apoio, não só punição ou propaganda.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: consulte no portal do INEP o IDEB de uma escola ou município, registre a evolução, a taxa de aprovação e o desempenho, e explique o que esses números medem e o que não medem.</p>`,
  fonte: {
    obra: 'INEP, resultados do IDEB, do SAEB e do Censo Escolar', link: { url: 'https://www.gov.br/inep', rotulo: 'Portal do INEP' },
    orientacao: `<p>Procure a página de resultados do IDEB; escolha escola ou município; anote a série histórica e as metas.</p>`,
  },
  perguntas: [
    { p: 'O que o IDEB combina?', r: 'Desempenho no SAEB e taxa de aprovação.' },
    { p: 'Que idade têm os estudantes avaliados pelo PISA?', r: '15 anos.' },
    { p: 'Por que comparar escolas exige cuidado?', r: 'Porque o nível socioeconômico dos alunos influencia os resultados.' },
  ],
  exercicios: [
    mc('O IDEB foi criado em:', ['1990', '2000', '2007', '2017'], 2, 'INEP.'),
    mc('O PISA é organizado pela:', ['UNESCO', 'OCDE', 'ONU', 'INEP'], 1, 'Avaliação internacional.'),
    mc('Treinar só para a prova pode:', ['Subir a nota sem subir a aprendizagem', 'Sempre melhorar tudo', 'Não ter efeito', 'Proibir o IDEB'], 0, 'Distorção.'),
    mc('O Censo Escolar levanta:', ['Notas de português', 'Matrículas, docentes e infraestrutura', 'Renda das famílias apenas', 'Resultados do PISA'], 1, 'Censo.'),
    mc('Uma escola que sobe de 3,8 para 5,0 mostra:', ['Piora', 'Evolução', 'Nada', 'Erro'], 1, 'Série histórica.'),
    disc('Analise o IDEB de uma escola ou município: evolução, aprovação, desempenho e limites.', ['Série', 'Componentes', 'Interpretação', 'Limites']),
  ],
  resumo: ['INEP: Censo Escolar e SAEB.', 'IDEB (2007): desempenho × aprovação, 0 a 10.', 'PISA (OCDE): 15 anos, desde 2000.', 'Medida que vira meta se distorce.', 'Considerar nível socioeconômico e evolução.'],
  referencias: [
    { texto: 'INEP, Índice de Desenvolvimento da Educação Básica (IDEB): nota técnica e resultados.' },
    { texto: 'OCDE, PISA: resultados e relatórios.' },
    { texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do indicador', 'Consultar a fonte oficial'],
  revisao: [['IDEB', 'SAEB × aprovação.'], ['PISA', '15 anos, OCDE.'], ['Goodhart', 'Meta distorce medida.']],
  avancado: {
    texto: `<h3>Valor agregado</h3>
<p>Modelos de valor agregado tentam medir quanto uma escola ou professor acrescenta à aprendizagem, comparando o desempenho dos alunos com o que seria esperado a partir de seu desempenho anterior ${tag('fato')}. São mais justos que médias simples, mas sensíveis a erros de medida e ao modo de distribuir os alunos; seu uso para premiar ou punir professores é controverso ${tag('debate')}.</p>`,
    leituras: [{ texto: 'INEP, notas técnicas sobre indicadores educacionais.' }],
    exercicios: [
      mc('O valor agregado compara o desempenho com:', ['A média nacional', 'O esperado pelo desempenho anterior', 'O PISA', 'A renda'], 1, 'Progresso.'),
      mc('Uma vantagem do valor agregado é:', ['Ignorar o ponto de partida', 'Considerar o ponto de partida', 'Não ter erro', 'Ser simples'], 1, 'Justiça.'),
      mc('Seu uso para premiar professores é:', ['Consensual', 'Controverso', 'Proibido', 'Obrigatório'], 1, 'Debate.'),
      disc('Discuta se o valor agregado deve ser usado para avaliar professores.', ['A favor', 'Contra', 'Condições', 'Conclusão'])],
  },
}),

avaliacao('ed1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre o conceito de educação, o vocabulário, a estrutura brasileira, os métodos de estudo e os indicadores, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário e sua análise do IDEB.</li><li>Revise os artigos da Constituição e da LDB estudados.</li></ul>`,
[
  disc('Defina educação distinguindo instrução e formação, e explique o papel da família, da escola e do Estado com a Constituição e a doutrina da Igreja.', ['Definição', 'Instrução e formação', 'Papéis', 'Fontes']),
  disc('Interprete o IDEB de uma escola ou município, explicando o cálculo, a evolução e ao menos dois limites do indicador.', ['Cálculo', 'Evolução', 'Limites', 'Conclusão proporcional']),
]),
];
