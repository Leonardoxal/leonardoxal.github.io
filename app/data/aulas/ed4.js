// Educação IV — a ciência e a arte de ensinar (etapa 8 do percurso de Educação).
// Memória e aprendizagem; didática; avaliação formativa e somativa; políticas educacionais brasileiras.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ed4-1', titulo: 'Memória e aprendizagem: recuperação, espaçamento e prática', duracao: '150 min',
  aprendera: ['Explicar a curva do esquecimento', 'Aplicar a prática de recuperação e o espaçamento', 'Distinguir estratégias de estudo eficazes e ineficazes', 'Planejar a revisão de um conteúdo'],
  prereq: ['Educação III (módulo ED3)'],
  explicacao: `
<h3>O problema</h3>
<p>Estudamos, entendemos, e semanas depois esquecemos. Como fazer o aprendizado durar?</p>
<h3>O esquecimento</h3>
<p>Hermann Ebbinghaus, em 1885, mediu a própria memória de sílabas sem sentido e descreveu a curva do esquecimento: perdemos rapidamente boa parte do que aprendemos, e depois o ritmo de perda diminui ${tag('fato')}.</p>
<h3>Recuperação</h3>
<p>Tentar lembrar — responder perguntas, fazer exercícios sem consultar — fortalece a memória mais do que reler; é o efeito do teste, ou prática de recuperação ${tag('fato')}. Roediger e Karpicke (2006) mostraram que estudantes que fizeram testes lembravam mais, uma semana depois, do que os que releram ${tag('fato')}.</p>
<h3>Espaçamento e intercalação</h3>
<p>Distribuir o estudo em várias sessões espaçadas produz retenção mais duradoura do que concentrá-lo numa só ${tag('fato')}. Intercalar tipos de problemas, em vez de praticar um tipo por vez, ajuda a escolher a estratégia certa ${tag('fato')}.</p>
<h3>O que a revisão da literatura diz</h3>
<p>Uma revisão de Dunlosky e colaboradores (2013) classificou a prática de testes e a prática distribuída como estratégias de alta utilidade, e o grifo e a releitura como de baixa utilidade ${tag('fato')}. Estratégias eficazes parecem mais difíceis; essa "dificuldade desejável" engana o estudante, que prefere o que parece fácil ${tag('interpretacao')}.</p>
<h3>Na tradição</h3>
<p>A tradição escolar já praticava a repetição e a recitação; a Ratio Studiorum previa repetições diárias, semanais e anuais ${tag('fato')}. A ciência atual confirma e refina essas práticas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Curva do esquecimento', 'Perda rápida e depois mais lenta do que se aprendeu (Ebbinghaus).'],
    ['Prática de recuperação', 'Tentar lembrar sem consultar, o que fortalece a memória.'],
    ['Espaçamento', 'Distribuição do estudo em sessões separadas no tempo.'],
    ['Intercalação', 'Misturar tipos de problemas na prática.'],
    ['Dificuldade desejável', 'Esforço que parece difícil mas melhora a retenção.'],
  ],
  exemplos: `<p><strong>Dois planos de estudo:</strong> Marta relê o capítulo três vezes na véspera da prova. João lê uma vez, faz cartões de perguntas e responde-os no dia seguinte, três dias depois e uma semana depois. Na prova, os dois podem ir parecido; um mês depois, João lembra muito mais. É o que o sistema de revisão deste curso aplica.</p>`,
  contexto: `<p><strong>No mundo:</strong> sistemas de repetição espaçada com cartões são usados por estudantes de medicina e de línguas ${tag('fato')}. <strong>No Brasil:</strong> o cursinho que só treina macetes na véspera ilustra o oposto: retenção curta ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que reler dá falsa sensação de domínio', tag: 'argumento',
    premissas: ['Ao reler, o texto parece familiar.', 'Familiaridade não é o mesmo que capacidade de lembrar e usar.', 'Só tentando lembrar sem o texto descobrimos o que realmente sabemos.'],
    conclusao: 'Logo, a prática de recuperação é melhor guia e melhor treino do que a releitura.',
    nota: 'A releitura tem seu lugar, sobretudo na primeira compreensão de um texto difícil.',
  },
  objecoes: [
    { objecao: 'Testes frequentes causam ansiedade e devem ser evitados.', tag: 'debate',
      resposta: 'Testes de alto risco podem gerar ansiedade. A prática de recuperação, porém, pode ser feita com perguntas sem nota, cartões e autoavaliação. Separar o teste como treino do teste como julgamento resolve boa parte da objeção.' },
  ],
  aplicacao: `<p>Planeje a revisão de um conteúdo deste curso para quatro semanas, com sessões espaçadas, perguntas de recuperação e intercalação, e registre os resultados.</p>`,
  fonte: {
    obra: 'John Dunlosky e outros, "Improving students\' learning with effective learning techniques", Psychological Science in the Public Interest (2013)', link: null,
    orientacao: `<p>Leia o resumo e a tabela de utilidade das técnicas; observe o tipo de evidência que sustenta cada classificação.</p>`,
  },
  perguntas: [
    { p: 'O que é a prática de recuperação?', r: 'Tentar lembrar sem consultar, o que fortalece a memória.' },
    { p: 'Quais estratégias Dunlosky e outros classificaram como de alta utilidade?', r: 'A prática de testes e a prática distribuída.' },
    { p: 'Por que reler engana?', r: 'Porque a familiaridade do texto parece domínio, sem garantir que se saiba lembrar e usar.' },
  ],
  exercicios: [
    mc('A curva do esquecimento foi descrita por:', ['Piaget', 'Ebbinghaus', 'Skinner', 'Dewey'], 1, '1885.'),
    mc('Estudar em várias sessões separadas é:', ['Intercalação', 'Espaçamento', 'Grifo', 'Releitura'], 1, 'Prática distribuída.'),
    mc('Segundo a revisão de 2013, o grifo tem utilidade:', ['Alta', 'Moderada', 'Baixa', 'Máxima'], 2, 'Dunlosky.'),
    mc('Misturar tipos de problemas é:', ['Intercalação', 'Espaçamento', 'Recuperação', 'Releitura'], 0, 'Escolha da estratégia.'),
    mc('A Ratio Studiorum previa:', ['Nenhuma revisão', 'Repetições diárias, semanais e anuais', 'Só prova final', 'Só leitura'], 1, 'Tradição.'),
    disc('Planeje a revisão de um conteúdo para quatro semanas com espaçamento, recuperação e intercalação.', ['Conteúdo', 'Calendário', 'Perguntas', 'Registro']),
  ],
  resumo: ['Ebbinghaus (1885): curva do esquecimento.', 'Recuperação > releitura.', 'Espaçamento e intercalação.', 'Dunlosky (2013): testes e prática distribuída.', 'Dificuldades desejáveis.'],
  referencias: [
    { texto: 'John Dunlosky e outros, "Improving students\' learning with effective learning techniques" (2013).' },
    { texto: 'Henry L. Roediger III e Jeffrey D. Karpicke, "Test-enhanced learning" (2006).' },
    { texto: 'Daniel T. Willingham, Por que os alunos não gostam da escola? (2009).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de revisão', 'Ler a fonte indicada'],
  revisao: [['Recuperação', 'Lembrar sem olhar.'], ['Espaçamento', 'Sessões separadas.'], ['Dunlosky', 'Testes e distribuição.']],
  avancado: {
    texto: `<h3>Mitos da aprendizagem</h3>
<p>A ideia de que cada aluno aprende melhor em seu "estilo" (visual, auditivo, cinestésico) e que o ensino deve combinar com ele não encontrou apoio em testes rigorosos ${tag('fato')}. Pashler e colaboradores (2008) concluíram que faltava evidência para essa adaptação ${tag('fato')}. O mito persiste por intuição e por interesses comerciais ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Harold Pashler e outros, "Learning styles: concepts and evidence" (2008).' }],
    exercicios: [
      mc('A adaptação do ensino a "estilos de aprendizagem":', ['Tem forte evidência', 'Não encontrou apoio em testes rigorosos', 'É lei', 'É doutrina'], 1, 'Mito.'),
      mc('A revisão de Pashler e outros é de:', ['1885', '2008', '2013', '2023'], 1, 'Estilos.'),
      mc('Mais importante que o "estilo" é adequar o ensino:', ['Ao conteúdo', 'À cor preferida', 'Ao signo', 'À moda'], 0, 'Interpretação.'),
      disc('Explique por que o mito dos estilos de aprendizagem persiste e como avaliá-lo.', ['Mito', 'Evidência', 'Causas', 'Avaliação'])],
  },
}),

aula({
  id: 'ed4-2', titulo: 'Didática: explicar, exemplificar, praticar e corrigir', duracao: '150 min',
  aprendera: ['Conhecer os princípios de instrução de Rosenshine', 'Planejar uma explicação clara com exemplos', 'Conduzir prática guiada e independente', 'Dar retorno eficaz'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Saber muito não basta para ensinar bem. O que faz um bom professor numa aula concreta?</p>
<h3>Os princípios de Rosenshine</h3>
<p>Barak Rosenshine reuniu em Principles of Instruction (2012) dez princípios a partir de pesquisas sobre aprendizagem e sobre professores eficazes: revisão diária; novos conteúdos em pequenos passos; muitas perguntas; modelos e exemplos; prática guiada; verificação da compreensão; alta taxa de acerto; apoios temporários; prática independente; revisões semanais e mensais ${tag('fato')}.</p>
<h3>Explicação e exemplo</h3>
<p>Uma boa explicação parte do que o aluno sabe, segue uma ordem e usa exemplos e contraexemplos ${tag('argumento')}. Exemplos resolvidos, passo a passo, ajudam o iniciante ${tag('fato')}.</p>
<h3>Prática e correção</h3>
<p>Na prática guiada, o professor acompanha os primeiros exercícios e corrige na hora; na independente, o aluno pratica sozinho até ganhar fluência ${tag('fato')}. O retorno (feedback) eficaz diz o que está certo, o que falta e como melhorar, e chega a tempo ${tag('interpretacao')}. Na meta-síntese Visible Learning (2009), John Hattie situou o feedback entre as influências de maior efeito, embora seus métodos de síntese sejam criticados ${tag('debate')}.</p>
<h3>A virtude do professor</h3>
<p>A tradição lembra que ensinar é também obra de caridade e de exemplo: São João Batista de La Salle pedia aos mestres paciência, firmeza e piedade ${tag('fato')}. A didática é técnica a serviço da pessoa do aluno ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Prática guiada', 'Exercícios iniciais acompanhados de perto pelo professor.'],
    ['Prática independente', 'Exercícios feitos pelo aluno sozinho até a fluência.'],
    ['Apoio temporário (andaime)', 'Ajuda dada ao iniciante e retirada aos poucos.'],
    ['Verificação da compreensão', 'Perguntas que mostram se todos entenderam.'],
    ['Feedback', 'Informação ao aluno sobre seu desempenho e como melhorar.'],
  ],
  exemplos: `<p><strong>Uma aula de 50 minutos:</strong> 5 minutos de revisão com três perguntas sobre a aula anterior; 15 de explicação com dois exemplos resolvidos; 10 de prática guiada com correção no quadro; 5 de verificação com miniquadros; 15 de prática independente com o professor circulando. Ao fim da semana, uma revisão misturada.</p>`,
  contexto: `<p><strong>No mundo:</strong> os princípios de Rosenshine foram divulgados pela International Academy of Education e pela UNESCO ${tag('fato')}. <strong>No Brasil:</strong> a formação de professores costuma enfatizar teorias gerais mais do que técnicas de aula, o que é objeto de críticas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que verificar a compreensão de todos', tag: 'argumento',
    premissas: ['Perguntar "entenderam?" obtém respostas pouco confiáveis.', 'Os alunos que mais precisam costumam ser os que menos perguntam.', 'Pedir que todos respondam (miniquadros, cartões, perguntas a vários) mostra quem não entendeu.'],
    conclusao: 'Logo, verificar a compreensão de todos permite corrigir a tempo e não deixar ninguém para trás.',
    nota: 'Isso é aplicação da justiça na sala de aula: atenção a cada aluno.',
  },
  objecoes: [
    { objecao: 'Didática estruturada mata a criatividade do professor e do aluno.', tag: 'debate',
      resposta: 'Estrutura e criatividade não se opõem: a criatividade exige domínio, e o domínio exige prática bem orientada. O professor continua livre para escolher exemplos, perguntas e projetos. O risco real é a rigidez, não a estrutura em si.' },
  ],
  aplicacao: `<p>Planeje uma aula de 50 minutos sobre um tema à sua escolha aplicando ao menos seis princípios de Rosenshine, indicando o tempo de cada parte.</p>`,
  fonte: {
    obra: 'Barak Rosenshine, "Principles of Instruction", American Educator (2012)', link: null,
    orientacao: `<p>Leia os dez princípios e os exemplos de cada um; anote quais você já usa e quais não.</p>`,
  },
  perguntas: [
    { p: 'O que é prática guiada?', r: 'Exercícios iniciais acompanhados de perto pelo professor.' },
    { p: 'O que deve conter um bom feedback?', r: 'O que está certo, o que falta e como melhorar, a tempo.' },
    { p: 'Por que não basta perguntar "entenderam?"', r: 'Porque as respostas são pouco confiáveis e os que mais precisam pouco perguntam.' },
  ],
  exercicios: [
    mc('Principles of Instruction é de:', ['Rosenshine', 'Skinner', 'Piaget', 'Freire'], 0, '2012.'),
    mc('Ajuda retirada aos poucos é o:', ['Andaime', 'Reforço', 'Teste', 'Grifo'], 0, 'Apoio temporário.'),
    mc('Visible Learning é de:', ['Hattie', 'Dewey', 'Sweller', 'Dunlosky'], 0, '2009.'),
    mc('A alta taxa de acerto na prática indica:', ['Ensino fácil demais', 'Domínio progressivo', 'Cola', 'Nada'], 1, 'Princípio.'),
    mc('La Salle pedia aos mestres:', ['Rigor sem afeto', 'Paciência, firmeza e piedade', 'Só técnica', 'Indiferença'], 1, 'Virtude.'),
    disc('Planeje uma aula de 50 minutos com seis princípios de Rosenshine e o tempo de cada parte.', ['Objetivo', 'Princípios', 'Tempos', 'Verificação']),
  ],
  resumo: ['Rosenshine (2012): dez princípios.', 'Pequenos passos e exemplos resolvidos.', 'Prática guiada e independente.', 'Verificar a compreensão de todos.', 'Feedback a tempo.'],
  referencias: [
    { texto: 'Barak Rosenshine, "Principles of Instruction" (2012).' },
    { texto: 'John Hattie, Visible Learning (2009).' },
    { texto: 'Companhia de Jesus, Ratio Studiorum (1599).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de aula', 'Ler a fonte indicada'],
  revisao: [['Rosenshine', 'Dez princípios.'], ['Andaime', 'Ajuda temporária.'], ['Feedback', 'Como melhorar.']],
  avancado: {
    texto: `<h3>Perguntar bem</h3>
<p>Perguntas de memória verificam fatos; perguntas de compreensão pedem explicação; perguntas de aplicação pedem uso em casos novos ${tag('fato')}. Esperar alguns segundos após perguntar, em vez de responder logo, aumenta a participação e a qualidade das respostas, segundo estudos sobre o "tempo de espera" ${tag('interpretacao')}. O método socrático é a forma clássica de ensinar perguntando ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Platão, Mênon (o diálogo com o escravo).', livro: 'platao-menon' }],
    exercicios: [
      mc('"Explique por que..." é pergunta de:', ['Memória', 'Compreensão', 'Nenhum tipo', 'Opinião'], 1, 'Tipos.'),
      mc('Esperar alguns segundos após perguntar tende a:', ['Diminuir a participação', 'Aumentar a participação', 'Não ter efeito', 'Irritar todos'], 1, 'Tempo de espera.'),
      mc('A forma clássica de ensinar perguntando é o método:', ['Socrático', 'Skinneriano', 'Montessori', 'Fônico'], 0, 'Mênon.'),
      disc('Escreva uma sequência de seis perguntas, de memória a aplicação, sobre um tema.', ['Memória', 'Compreensão', 'Aplicação', 'Progressão'])],
  },
}),

aula({
  id: 'ed4-3', titulo: 'Avaliação formativa e somativa: medir para ensinar melhor', duracao: '150 min',
  aprendera: ['Distinguir avaliação formativa e somativa', 'Elaborar uma rubrica', 'Explicar validade e confiabilidade', 'Discutir notas, honestidade e justiça na avaliação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Avaliar é dar nota? Ou é descobrir o que o aluno sabe para ajudá-lo a saber mais?</p>
<h3>Formativa e somativa</h3>
<p>A avaliação somativa resume o resultado ao fim de uma etapa; a formativa usa informações durante o processo para ajustar o ensino e orientar o aluno ${tag('fato')}. Paul Black e Dylan Wiliam, em Inside the Black Box (1998), reuniram evidências de que a avaliação formativa melhora a aprendizagem ${tag('fato')}.</p>
<h3>Instrumentos</h3>
<p>Provas objetivas medem muitos conteúdos com rapidez; discursivas medem raciocínio e expressão; trabalhos e projetos medem aplicação ${tag('fato')}. Rubricas descrevem critérios e níveis de desempenho, tornando a correção mais justa e o retorno mais claro ${tag('fato')}.</p>
<h3>Validade e confiabilidade</h3>
<p>Uma avaliação é válida se mede o que pretende medir, e confiável se dá resultados consistentes ${tag('fato')}. Uma prova de interpretação de texto com vocabulário muito difícil pode medir vocabulário, e não interpretação ${tag('argumento')}.</p>
<h3>Justiça e honestidade</h3>
<p>Avaliar com justiça é dar a cada um a nota que corresponde ao que demonstrou, com critérios conhecidos ${tag('argumento')}. A cola fere a justiça e engana o próprio aluno sobre o que sabe; prevenir com boas avaliações e formar a honestidade é melhor que só punir ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Avaliação formativa', 'Avaliação durante o processo para ajustar o ensino.'],
    ['Avaliação somativa', 'Avaliação que resume o resultado ao fim de uma etapa.'],
    ['Rubrica', 'Quadro de critérios e níveis de desempenho.'],
    ['Validade', 'Medir o que se pretende medir.'],
    ['Confiabilidade', 'Consistência dos resultados da medida.'],
  ],
  exemplos: `<p><strong>Rubrica de redação:</strong> critérios — tese clara, argumentos, uso de fontes, correção da língua — cada um com níveis de 1 a 4 descritos ("tese ausente", "tese vaga", "tese clara", "tese clara e precisa"). O aluno sabe antes o que se espera; o professor corrige com mais consistência; o retorno indica exatamente o que melhorar.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "avaliação para a aprendizagem" difundiu-se no Reino Unido a partir do trabalho de Black e Wiliam ${tag('fato')}. <strong>No Brasil:</strong> a LDB prevê avaliação contínua e cumulativa, com prevalência dos aspectos qualitativos sobre os quantitativos (art. 24, V, a) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que critérios conhecidos tornam a avaliação mais justa', tag: 'argumento',
    premissas: ['Justiça exige tratar casos iguais de modo igual.', 'Sem critérios explícitos, a nota depende do humor ou da impressão do corretor.', 'Critérios conhecidos permitem ao aluno saber o que se espera e ao professor corrigir de modo consistente.'],
    conclusao: 'Logo, rubricas e critérios explícitos tornam a avaliação mais justa.',
    nota: 'Rubricas mal feitas podem engessar; devem descrever qualidades reais do trabalho.',
  },
  objecoes: [
    { objecao: 'Notas deveriam ser abolidas porque só geram competição.', tag: 'debate',
      resposta: 'Notas podem gerar competição e ansiedade, mas também comunicam resultados a alunos, pais e escolas. Abolir notas sem outra forma clara de informação esconde dificuldades. O caminho prudente é usar notas com critérios claros e dar muito retorno formativo sem nota.' },
  ],
  aplicacao: `<p>Elabore uma rubrica com quatro critérios e quatro níveis para um trabalho de alunos, e uma prova curta com questões objetivas e uma discursiva, indicando o que cada questão mede.</p>`,
  fonte: {
    obra: 'Paul Black e Dylan Wiliam, Inside the Black Box (1998); Lei nº 9.394/1996, art. 24', link: null,
    orientacao: `<p>Em Black e Wiliam, observe as práticas que melhoram a aprendizagem. Na LDB, as regras de verificação do rendimento escolar.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre validade e confiabilidade?', r: 'Validade é medir o que se pretende; confiabilidade é a consistência dos resultados.' },
    { p: 'O que mostraram Black e Wiliam (1998)?', r: 'Que a avaliação formativa melhora a aprendizagem.' },
    { p: 'O que diz a LDB sobre a avaliação?', r: 'Que deve ser contínua e cumulativa, com prevalência dos aspectos qualitativos.' },
  ],
  exercicios: [
    mc('A avaliação que ajusta o ensino durante o processo é:', ['Somativa', 'Formativa', 'Externa', 'Final'], 1, 'Processo.'),
    mc('Inside the Black Box é de:', ['Black e Wiliam', 'Rosenshine', 'Hattie', 'Sweller'], 0, '1998.'),
    mc('Prova de interpretação com vocabulário difícil demais tem problema de:', ['Confiabilidade', 'Validade', 'Tamanho', 'Nota'], 1, 'Mede outra coisa.'),
    mc('Rubrica é:', ['Uma nota', 'Quadro de critérios e níveis', 'Uma prova', 'Um castigo'], 1, 'Critérios.'),
    mc('A avaliação contínua e cumulativa está na LDB, art.:', ['1º', '21', '24', '26'], 2, 'Rendimento.'),
    disc('Elabore uma rubrica e uma prova curta, indicando o que cada questão mede.', ['Rubrica', 'Questões', 'O que medem', 'Justiça']),
  ],
  resumo: ['Formativa × somativa.', 'Black e Wiliam (1998).', 'Rubricas e critérios explícitos.', 'Validade e confiabilidade.', 'LDB art. 24; justiça e honestidade.'],
  referencias: [
    { texto: 'Paul Black e Dylan Wiliam, Inside the Black Box (1998).' },
    { texto: 'Lei nº 9.394, de 1996 (LDB), art. 24.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2464–2470 (verdade e veracidade).', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a rubrica e a prova', 'Ler as fontes indicadas'],
  revisao: [['Formativa', 'Durante.'], ['Validade', 'Mede o que diz.'], ['Rubrica', 'Critérios e níveis.']],
  avancado: {
    texto: `<h3>Inflação de notas</h3>
<p>Quando as notas sobem sem que a aprendizagem suba, elas perdem valor informativo; é a chamada inflação de notas ${tag('fato')}. Comparações entre notas escolares e avaliações externas permitem detectá-la ${tag('fato')}. Pressões de pais, escolas e indicadores podem alimentá-la, e a resposta exige critérios claros e coragem dos professores ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Paul Black e Dylan Wiliam, Inside the Black Box (1998).' }],
    exercicios: [
      mc('Inflação de notas é:', ['Notas subirem sem aprendizagem', 'Notas caírem', 'Provas mais longas', 'Fim das notas'], 0, 'Definição.'),
      mc('Ela pode ser detectada comparando notas com:', ['Avaliações externas', 'O clima', 'O calendário', 'Nada'], 0, 'Comparação.'),
      mc('A inflação faz as notas perderem:', ['Peso', 'Valor informativo', 'Cor', 'Tamanho'], 1, 'Informação.'),
      disc('Proponha medidas para evitar a inflação de notas numa escola.', ['Causas', 'Medidas', 'Riscos', 'Avaliação'])],
  },
}),

aula({
  id: 'ed4-4', titulo: 'Políticas educacionais brasileiras: financiamento, planos e escolha escolar', duracao: '150 min',
  aprendera: ['Conhecer as vinculações constitucionais de recursos', 'Explicar o FUNDEB', 'Conhecer o Plano Nacional de Educação', 'Discutir propostas de escolha escolar'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quem paga a escola pública, quanto, e como se decide o que fazer com o dinheiro?</p>
<h3>Vinculações</h3>
<p>A Constituição obriga a União a aplicar ao menos 18%, e os estados, o Distrito Federal e os municípios ao menos 25%, da receita de impostos na manutenção e desenvolvimento do ensino (art. 212) ${tag('fato')}.</p>
<h3>FUNDEB</h3>
<p>O Fundo de Manutenção e Desenvolvimento da Educação Básica, criado pela Emenda Constitucional nº 53/2006, redistribui recursos dentro de cada estado conforme o número de matrículas, com complementação da União ${tag('fato')}. A Emenda Constitucional nº 108/2020 tornou o FUNDEB permanente e ampliou gradualmente a complementação da União ${tag('fato')}.</p>
<h3>Plano Nacional de Educação</h3>
<p>O Plano Nacional de Educação (Lei nº 13.005/2014) fixou 20 metas para dez anos, como universalização do atendimento escolar e valorização dos professores ${tag('fato')}. Muitas metas não foram cumpridas no prazo; o plano foi prorrogado e um novo plano tramitou no Congresso — verifique a situação atual na fonte oficial ${tag('fato')}.</p>
<h3>Escolha escolar</h3>
<p>Em vários países, vales-educação e escolas públicas de gestão independente permitem que as famílias escolham entre escolas com recursos públicos ${tag('fato')}. Defensores invocam o direito dos pais e a concorrência; críticos temem segregação e perda de recursos da rede pública ${tag('debate')}. A doutrina da Igreja pede que o poder público distribua os subsídios de modo que os pais possam escolher livremente as escolas (CIC 2229; Gravissimum educationis, 6) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['MDE', 'Manutenção e desenvolvimento do ensino, destino das vinculações.'],
    ['Vinculação', 'Percentual mínimo da receita obrigatoriamente aplicado em educação.'],
    ['FUNDEB', 'Fundo que redistribui recursos da educação básica conforme matrículas.'],
    ['PNE', 'Plano Nacional de Educação, com metas decenais.'],
    ['Vale-educação', 'Recurso público que acompanha o aluno na escola escolhida pela família.'],
  ],
  exemplos: `<p><strong>O FUNDEB em ação:</strong> dois municípios do mesmo estado têm arrecadação muito diferente. Pelo FUNDEB, parte da receita de ambos vai para um fundo estadual e volta conforme o número de matrículas. O município mais pobre, com muitos alunos, recebe mais do que contribuiu; a União complementa nos estados em que o valor por aluno fica abaixo do mínimo.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Chile, os Países Baixos e alguns estados americanos adotam formas de escolha escolar com financiamento público ${tag('fato')}. <strong>No Brasil:</strong> bolsas em escolas privadas existem em programas pontuais, como o ProUni no ensino superior (2005) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o financiamento deve acompanhar o aluno pobre', tag: 'argumento',
    premissas: ['A desigualdade de arrecadação entre municípios é grande.', 'Sem redistribuição, alunos de municípios pobres recebem educação com menos recursos.', 'Distribuir recursos por matrícula, com complementação, reduz essa desigualdade.'],
    conclusao: 'Logo, mecanismos como o FUNDEB realizam a justiça distributiva na educação.',
    nota: 'Recursos são necessários, mas não suficientes: a gestão e o ensino em sala também decidem.',
  },
  objecoes: [
    { objecao: 'Mais dinheiro sempre melhora a educação.', tag: 'debate',
      resposta: 'Abaixo de certo mínimo, recursos fazem muita diferença. Mas estudos mostram que o modo de gastar — professores bem formados, tempo de aula, material — importa tanto quanto o volume. Dinheiro mal gasto não melhora a aprendizagem.' },
  ],
  aplicacao: `<p>Consulte os dados de gasto em educação do seu município (em portais de transparência ou no Siope) e compare com o mínimo constitucional e com o IDEB, descrevendo o que os números permitem e não permitem concluir.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 212 e 212-A; Lei nº 13.005/2014 (PNE)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Leia as vinculações do art. 212, as regras do FUNDEB no art. 212-A e as metas do PNE.</p>`,
  },
  perguntas: [
    { p: 'Quais os percentuais mínimos da receita de impostos para o ensino?', r: '18% para a União e 25% para estados, Distrito Federal e municípios.' },
    { p: 'O que fez a EC 108/2020?', r: 'Tornou o FUNDEB permanente e ampliou a complementação da União.' },
    { p: 'O que a Igreja pede sobre subsídios escolares?', r: 'Que sejam distribuídos de modo que os pais possam escolher livremente as escolas.' },
  ],
  exercicios: [
    mc('Os municípios devem aplicar no ensino ao menos:', ['18%', '25%', '30%', '10%'], 1, 'CF art. 212.'),
    mc('O FUNDEB tornou-se permanente pela EC:', ['53/2006', '59/2009', '108/2020', '132/2023'], 2, '2020.'),
    mc('O PNE de 2014 tinha:', ['10 metas', '20 metas', '50 metas', '5 metas'], 1, 'Lei 13.005.'),
    mc('O FUNDEB redistribui recursos conforme:', ['A área do município', 'O número de matrículas', 'A população idosa', 'O IDEB'], 1, 'Matrículas.'),
    mc('O ProUni, no ensino superior, é de:', ['1996', '2005', '2014', '2020'], 1, 'Bolsas.'),
    disc('Compare o gasto em educação do seu município com o mínimo constitucional e o IDEB.', ['Dados', 'Comparação', 'Limites', 'Conclusão']),
  ],
  resumo: ['CF art. 212: 18% e 25%.', 'FUNDEB (2006; permanente em 2020).', 'PNE (2014): 20 metas.', 'Escolha escolar: debate.', 'CIC 2229; GE 6: liberdade de escolha.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988), arts. 212 e 212-A.' },
    { texto: 'Lei nº 13.005, de 2014 (Plano Nacional de Educação).' },
    { texto: 'Concílio Vaticano II, Gravissimum educationis (1965), n. 6.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do gasto municipal', 'Consultar as fontes oficiais'],
  revisao: [['Art. 212', '18% e 25%.'], ['FUNDEB', 'Matrículas.'], ['PNE', '20 metas.']],
  avancado: {
    texto: `<h3>Escolas confessionais e filantropia</h3>
<p>No Brasil, muitas escolas e universidades católicas são entidades beneficentes, que podem ter imunidade de contribuições sociais mediante concessão de bolsas e cumprimento de requisitos legais (CF art. 195, § 7º) ${tag('fato')}. Seus defensores veem nisso parceria entre sociedade e Estado; críticos questionam a fiscalização das contrapartidas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), art. 195, § 7º.' }],
    exercicios: [
      mc('A imunidade das entidades beneficentes está na CF, art.:', ['195, § 7º', '212', '205', '5º'], 0, 'Contribuições.'),
      mc('A contrapartida típica é a concessão de:', ['Bolsas', 'Multas', 'Licenças', 'Votos'], 0, 'Requisitos.'),
      mc('Um ponto de crítica é a:', ['Fiscalização das contrapartidas', 'Existência de escolas', 'Liberdade religiosa', 'Nenhum'], 0, 'Debate.'),
      disc('Avalie a parceria entre escolas confessionais beneficentes e o Estado.', ['Modelo', 'Méritos', 'Críticas', 'Avaliação'])],
  },
}),

avaliacao('ed4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre memória e aprendizagem, didática, avaliação e políticas educacionais, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu plano de aula e sua rubrica.</li><li>Revise os artigos da Constituição e da LDB estudados.</li></ul>`,
[
  disc('Planeje uma sequência de três aulas aplicando princípios da ciência da aprendizagem (recuperação, espaçamento, exemplos resolvidos) e uma avaliação formativa e uma somativa coerentes.', ['Objetivos', 'Estratégias', 'Avaliação', 'Justificativa']),
  disc('Explique como a educação básica é financiada no Brasil e discuta uma proposta de escolha escolar à luz da doutrina da Igreja e dos argumentos contrários.', ['Financiamento', 'Proposta', 'Doutrina', 'Argumentos contrários']),
]),
];
