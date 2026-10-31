// Educação V — aplicações, investigação educacional e avaliação integradora (etapas 9 a 11 do percurso de Educação).
// Ensinar em casa e na catequese; alfabetização e leitura em família; escolher e avaliar uma escola;
// investigação de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ed5-1', titulo: 'Ensinar em casa e na catequese: a família como escola e Igreja doméstica', duracao: '150 min',
  aprendera: ['Explicar a família como Igreja doméstica', 'Organizar uma rotina de estudo em casa', 'Aplicar princípios didáticos à catequese', 'Integrar formação intelectual, moral e religiosa'],
  prereq: ['Educação IV (módulo ED4)'],
  explicacao: `
<h3>O problema</h3>
<p>Mesmo quando os filhos estão na escola, a casa continua ensinando: hábitos, linguagem, fé. Como os pais e catequistas podem ensinar bem?</p>
<h3>A Igreja doméstica</h3>
<p>O Concílio Vaticano II chamou a família de "Igreja doméstica", onde os pais são os primeiros anunciadores da fé (Lumen gentium, 11) ${tag('doutrina')}. O Catecismo ensina que os pais devem iniciar os filhos nos mistérios da fé desde a mais tenra idade (CIC 2225–2226) ${tag('doutrina')}.</p>
<h3>Rotina de estudo</h3>
<p>Em casa, a ajuda mais eficaz costuma ser criar condições: horário fixo, lugar calmo, sem telas, e interesse pelo que o filho aprende ${tag('interpretacao')}. Perguntar ao filho o que aprendeu e pedir que explique é uma forma simples de prática de recuperação ${tag('argumento')}.</p>
<h3>A catequese</h3>
<p>O Diretório para a Catequese (2020) apresenta a catequese como iniciação à vida cristã, que une conhecimento da fé, liturgia, vida moral e oração ${tag('fato')}. São João Paulo II, em Catechesi tradendae (1979), insistiu que a catequese é transmissão orgânica e sistemática da doutrina ${tag('doutrina')}. Os princípios didáticos estudados — explicação clara, exemplos, revisão, verificação da compreensão — valem também para o catequista ${tag('argumento')}.</p>
<h3>O exemplo</h3>
<p>A tradição repete que se educa mais pelo exemplo do que pelas palavras: os pais ensinam a rezar rezando com os filhos e a perdoar pedindo perdão (CIC 2223) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Igreja doméstica', 'A família como primeira comunidade de fé (LG 11).'],
    ['Iniciação cristã', 'Introdução à vida cristã pela fé, pelos sacramentos e pela vida moral.'],
    ['Catequese', 'Transmissão orgânica e sistemática da fé.'],
    ['Rotina de estudo', 'Horário e lugar fixos para estudar em casa.'],
    ['Exemplo', 'Ensino pelo testemunho de vida.'],
  ],
  exemplos: `<p><strong>Uma tarde em família:</strong> às 17h, estudo de 40 minutos na mesa da cozinha, sem celular; o pai pergunta "o que você aprendeu hoje?" e pede que o filho explique; à noite, a família reza junta e lê o Evangelho do domingo, e cada um diz uma frase que guardou. Três hábitos simples unem instrução, revisão e fé.</p>`,
  contexto: `<p><strong>No mundo:</strong> muitas paróquias adotam itinerários catequéticos de inspiração catecumenal ${tag('fato')}. <strong>No Brasil:</strong> a CNBB publica orientações e diretórios para a catequese no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o exemplo ensina mais que as palavras', tag: 'argumento',
    premissas: ['As crianças aprendem muito por imitação.', 'Palavras contraditas pelo exemplo perdem credibilidade.', 'A virtude é hábito, e hábitos se formam pela prática repetida em comum.'],
    conclusao: 'Logo, a educação moral e religiosa depende sobretudo do exemplo e da prática em família.',
    nota: 'Isso não dispensa o ensino explícito: a fé tem conteúdo que precisa ser aprendido.',
  },
  objecoes: [
    { objecao: 'Catequese deve ser só experiência, sem conteúdo para memorizar.', tag: 'debate',
      resposta: 'A experiência de fé é essencial, mas Catechesi tradendae pede também ensino orgânico e sistemático, e o próprio documento defende o lugar da memorização. Experiência sem conteúdo fica vaga; conteúdo sem experiência fica seco. A boa catequese une as duas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: elabore um plano de estudo semanal para uma criança ou adolescente, com horários, objetivos, revisões, um momento de oração em família e uma forma de avaliar a semana.</p>`,
  fonte: {
    obra: 'Concílio Vaticano II, Lumen gentium, 11; Catecismo, §§ 2221–2226; João Paulo II, Catechesi tradendae (1979)', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Em Lumen gentium 11, a família como Igreja doméstica. No Catecismo, os deveres dos pais. Em Catechesi tradendae, a natureza da catequese.</p>`,
  },
  perguntas: [
    { p: 'Onde a família é chamada de Igreja doméstica?', r: 'Em Lumen gentium, 11.' },
    { p: 'Que forma simples de revisão os pais podem usar?', r: 'Pedir ao filho que explique o que aprendeu.' },
    { p: 'O que Catechesi tradendae diz da catequese?', r: 'Que é transmissão orgânica e sistemática da doutrina.' },
  ],
  exercicios: [
    mc('"Igreja doméstica" aparece em:', ['Lumen gentium, 11', 'Rerum novarum', 'Gaudium et spes, 1', 'Fides et ratio'], 0, 'Concílio.'),
    mc('Catechesi tradendae é de:', ['1965', '1979', '1992', '2020'], 1, 'João Paulo II.'),
    mc('O Diretório para a Catequese mais recente é de:', ['1971', '1997', '2020', '2005'], 2, 'Diretório.'),
    mc('Pedir ao filho que explique o que aprendeu é forma de:', ['Releitura', 'Prática de recuperação', 'Grifo', 'Punição'], 1, 'ED4.'),
    mc('A iniciação nos mistérios da fé desde cedo está no CIC:', ['2226', '1883', '2402', '2267'], 0, 'Pais.'),
    disc('Elabore um plano de estudo semanal com horários, objetivos, revisões, oração e avaliação.', ['Horários', 'Objetivos', 'Revisões e oração', 'Avaliação']),
  ],
  resumo: ['Família: Igreja doméstica (LG 11).', 'CIC 2223–2226: deveres dos pais.', 'Rotina, lugar, sem telas, perguntar.', 'Catequese orgânica e sistemática (1979).', 'O exemplo educa.'],
  referencias: [
    { texto: 'João Paulo II, Catechesi tradendae (1979).' },
    { texto: 'Pontifício Conselho para a Promoção da Nova Evangelização, Diretório para a Catequese (2020).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1655–1658 e 2221–2226.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano semanal', 'Ler as fontes indicadas'],
  revisao: [['LG 11', 'Igreja doméstica.'], ['CT 1979', 'Catequese sistemática.'], ['Exemplo', 'Ensina mais.']],
  avancado: {
    texto: `<h3>Memorização na catequese</h3>
<p>Catechesi tradendae defende o lugar da memorização das grandes fórmulas da fé — orações, Credo, mandamentos —, desde que compreendidas e não apenas repetidas ${tag('doutrina')}. A ciência da memória mostra que o conhecimento memorizado libera a mente para compreender e aplicar ${tag('interpretacao')}. Unir memória e compreensão é o ideal tanto da escola quanto da catequese ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Catechesi tradendae (1979), n. 55.' }],
    exercicios: [
      mc('Catechesi tradendae defende a memorização:', ['Sem compreensão', 'Com compreensão', 'Nunca', 'Só para adultos'], 1, 'N. 55.'),
      mc('Fórmulas típicas de memorização são:', ['Orações e Credo', 'Notícias', 'Senhas', 'Placas'], 0, 'Fé.'),
      mc('O conhecimento memorizado ajuda a:', ['Esquecer', 'Compreender e aplicar', 'Nada', 'Decorar sem sentido'], 1, 'Interpretação.'),
      disc('Planeje como ensinar o Credo a uma criança unindo memória e compreensão.', ['Etapas', 'Explicação', 'Revisão', 'Avaliação'])],
  },
}),

aula({
  id: 'ed5-2', titulo: 'Alfabetização e leitura em família', duracao: '150 min',
  aprendera: ['Explicar o papel da leitura em voz alta', 'Aplicar a leitura dialogada', 'Apoiar a alfabetização em casa', 'Formar o hábito e o gosto pela leitura'],
  prereq: ['Aula anterior', 'Debates atuais (ed3-4)'],
  explicacao: `
<h3>O problema</h3>
<p>A escola alfabetiza, mas o leitor se forma também em casa. O que os pais podem fazer, mesmo sem formação pedagógica?</p>
<h3>Ler em voz alta</h3>
<p>Ler em voz alta para as crianças amplia vocabulário, compreensão da linguagem e familiaridade com histórias ${tag('fato')}. Pelo modelo simples da leitura, a compreensão da linguagem oral é metade da compreensão leitora, e se forma muito antes de a criança decodificar ${tag('interpretacao')}.</p>
<h3>Leitura dialogada</h3>
<p>Na leitura dialogada, desenvolvida por Grover Whitehurst e colaboradores, o adulto faz perguntas, amplia as respostas da criança e a convida a contar a história, em vez de só ler ${tag('fato')}.</p>
<h3>Apoiar a alfabetização</h3>
<p>Brincar com rimas, sílabas e sons ajuda a consciência fonológica; mostrar a relação entre letras e sons, com calma, apoia o que a escola ensina ${tag('interpretacao')}. Pressionar e comparar costuma atrapalhar ${tag('interpretacao')}.</p>
<h3>O vocabulário</h3>
<p>Um estudo influente de Hart e Risley (1995) relatou grandes diferenças na quantidade de palavras ouvidas por crianças de famílias de diferentes rendas; estudos posteriores discutiram o tamanho dessa diferença ${tag('debate')}. É consenso que conversar e ler com a criança enriquece sua linguagem ${tag('interpretacao')}.</p>
<h3>O gosto</h3>
<p>Ter livros em casa, ver os pais lendo e frequentar bibliotecas favorece o hábito ${tag('interpretacao')}. A pesquisa Retratos da Leitura no Brasil, do Instituto Pró-Livro, acompanha os hábitos de leitura dos brasileiros ${tag('fato')}.</p>`,
  vocabulario: [
    ['Leitura em voz alta', 'Leitura feita pelo adulto para a criança ouvir.'],
    ['Leitura dialogada', 'Leitura com perguntas e participação ativa da criança.'],
    ['Consciência fonológica', 'Percepção dos sons da fala: rimas, sílabas e fonemas.'],
    ['Vocabulário', 'Conjunto de palavras que a pessoa conhece e usa.'],
    ['Hábito de leitura', 'Prática regular e prazerosa de ler.'],
  ],
  exemplos: `<p><strong>Leitura dialogada de "Os três porquinhos":</strong> o pai lê uma página e pergunta "por que a casa de palha caiu?"; a filha responde "porque o lobo soprou"; ele amplia: "isso, a palha é leve e frágil". Na próxima página, pede que ela adivinhe o que vai acontecer. No fim, ela reconta a história. Quinze minutos, muita linguagem.</p>`,
  contexto: `<p><strong>No mundo:</strong> programas como o Bookstart, no Reino Unido, distribuem livros a famílias com bebês ${tag('fato')}. <strong>No Brasil:</strong> bibliotecas públicas e programas municipais de leitura oferecem acesso gratuito a livros ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ler para a criança antes de ela saber ler', tag: 'argumento',
    premissas: ['Compreender um texto exige vocabulário e compreensão da linguagem.', 'A criança desenvolve essas capacidades ouvindo e conversando, antes de decodificar.', 'Livros trazem palavras e estruturas mais ricas que a conversa cotidiana.'],
    conclusao: 'Logo, ler para a criança prepara a compreensão que a alfabetização exigirá.',
    nota: 'É também tempo de convivência e de afeto, o que favorece o gosto pela leitura.',
  },
  objecoes: [
    { objecao: 'Pais sem estudo não podem ajudar na leitura dos filhos.', tag: 'argumento',
      resposta: 'Conversar, contar histórias, perguntar, levar à biblioteca e mostrar interesse estão ao alcance de qualquer pai. Mesmo quem lê com dificuldade pode ouvir o filho ler e conversar sobre as figuras. A ajuda não depende de diploma.' },
  ],
  aplicacao: `<p>Planeje quatro semanas de leitura em família para uma criança de idade definida: livros, frequência, perguntas de leitura dialogada, jogos de sons e registro do progresso.</p>`,
  fonte: {
    obra: 'Instituto Pró-Livro, Retratos da Leitura no Brasil (edição mais recente)', link: null,
    orientacao: `<p>Observe quem lê, o que lê, e os fatores associados ao hábito de leitura; distinga correlação e causalidade.</p>`,
  },
  perguntas: [
    { p: 'O que é leitura dialogada?', r: 'Leitura com perguntas, ampliação das respostas e participação ativa da criança.' },
    { p: 'Por que ler em voz alta antes da alfabetização?', r: 'Porque desenvolve vocabulário e compreensão da linguagem, necessários para compreender textos.' },
    { p: 'Que atividades ajudam a consciência fonológica?', r: 'Brincar com rimas, sílabas e sons.' },
  ],
  exercicios: [
    mc('A leitura dialogada está associada a:', ['Whitehurst', 'Skinner', 'Freire', 'Dewey'], 0, 'Colaboradores.'),
    mc('Brincar com rimas desenvolve a:', ['Caligrafia', 'Consciência fonológica', 'Matemática', 'Memória visual'], 1, 'Sons.'),
    mc('O estudo de Hart e Risley é de:', ['1885', '1995', '2013', '2023'], 1, 'Vocabulário.'),
    mc('O tamanho da diferença relatada por Hart e Risley é:', ['Consenso', 'Debatido', 'Lei', 'Irrelevante'], 1, 'Debate.'),
    mc('A pesquisa Retratos da Leitura no Brasil é do:', ['INEP', 'Instituto Pró-Livro', 'IBGE', 'MEC'], 1, 'Hábitos.'),
    disc('Planeje quatro semanas de leitura em família com livros, perguntas, jogos e registro.', ['Livros', 'Frequência', 'Atividades', 'Registro']),
  ],
  resumo: ['Ler em voz alta: vocabulário e compreensão.', 'Leitura dialogada (Whitehurst).', 'Rimas, sílabas, sons.', 'Hart e Risley (1995): debate.', 'Livros em casa e exemplo dos pais.'],
  referencias: [
    { texto: 'Instituto Pró-Livro, Retratos da Leitura no Brasil.' },
    { texto: 'Betty Hart e Todd R. Risley, Meaningful Differences (1995).' },
    { texto: 'Philip B. Gough e William E. Tunmer, "Decoding, reading, and reading disability" (1986).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de leitura', 'Ler a fonte indicada'],
  revisao: [['Leitura dialogada', 'Perguntar e ampliar.'], ['Voz alta', 'Vocabulário.'], ['Rimas', 'Sons.']],
  avancado: {
    texto: `<h3>Leitura e virtude</h3>
<p>A tradição educativa via nas boas histórias uma escola de virtude: Platão já discutia, na República, quais narrativas convinham às crianças ${tag('fato')}. C. S. Lewis defendeu que os contos de fadas ajudam a criança a amar o bem e a reconhecer o mal ${tag('interpretacao')}. Escolher livros é, por isso, também uma decisão moral ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Platão, A República, livros II e III.', livro: 'platao-republica' }],
    exercicios: [
      mc('Platão discute as narrativas para crianças na:', ['Apologia', 'República', 'Poética', 'Ética'], 1, 'Livros II e III.'),
      mc('Para Lewis, os contos de fadas ajudam a:', ['Fugir da realidade', 'Amar o bem e reconhecer o mal', 'Decorar', 'Nada'], 1, 'Interpretação.'),
      mc('Escolher livros é também decisão:', ['Moral', 'Indiferente', 'Só técnica', 'Só econômica'], 0, 'Argumento.'),
      disc('Monte uma pequena biblioteca de dez livros para uma criança, justificando as escolhas.', ['Livros', 'Critérios', 'Idade', 'Justificativa'])],
  },
}),

aula({
  id: 'ed5-3', titulo: 'Escolher e avaliar uma escola', duracao: '150 min',
  aprendera: ['Definir critérios para escolher uma escola', 'Ler a proposta pedagógica e os indicadores', 'Conhecer os direitos dos pais na vida escolar', 'Acompanhar a escola ao longo do ano'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Escolher a escola dos filhos é uma das decisões educativas mais importantes. Que critérios usar além da proximidade e do preço?</p>
<h3>Critérios</h3>
<p>Um bom roteiro considera: coerência com os valores da família; qualidade do ensino (professores, currículo, exigência, resultados); clima escolar (disciplina, segurança, convivência); relação com os pais; e condições práticas (distância, custo, horário) ${tag('interpretacao')}.</p>
<h3>Documentos</h3>
<p>A LDB determina que cada escola elabore sua proposta pedagógica (art. 12, I) ${tag('fato')}. O regimento escolar define regras de convivência e de avaliação ${tag('fato')}. Indicadores como o IDEB, quando disponíveis, devem ser lidos com os cuidados estudados no ED1 ${tag('argumento')}.</p>
<h3>Direitos dos pais</h3>
<p>O Estatuto da Criança e do Adolescente garante aos pais o direito de ter ciência do processo pedagógico e de participar da definição das propostas educacionais (art. 53, parágrafo único) ${tag('fato')}. A LDB prevê que as escolas informem os pais sobre frequência e rendimento dos alunos e sobre a execução da proposta pedagógica (art. 12, VII) ${tag('fato')}.</p>
<h3>Acompanhar</h3>
<p>Escolher não basta: reuniões, conversas com professores, olhar os cadernos e perguntar ao filho sobre a escola mantêm a parceria ${tag('interpretacao')}. A doutrina da Igreja pede colaboração estreita entre pais e professores (Gravissimum educationis, 5) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Proposta pedagógica', 'Documento em que a escola define seus fins, métodos e organização (LDB art. 12, I).'],
    ['Regimento escolar', 'Regras de funcionamento, convivência e avaliação da escola.'],
    ['Clima escolar', 'Qualidade das relações, da disciplina e da segurança na escola.'],
    ['Exigência acadêmica', 'Nível de expectativa e esforço pedido aos alunos.'],
    ['Parceria família-escola', 'Colaboração entre pais e professores na educação.'],
  ],
  exemplos: `<p><strong>Uma visita bem feita:</strong> os pais pedem a proposta pedagógica e o regimento; assistem, se possível, a parte de uma aula; perguntam como a escola lida com indisciplina e com alunos com dificuldade; veem os cadernos de uma turma; conversam com outros pais. Depois comparam duas escolas num quadro com os critérios da aula.</p>`,
  contexto: `<p><strong>No mundo:</strong> em vários países, os pais podem consultar relatórios públicos de inspeção das escolas ${tag('fato')}. <strong>No Brasil:</strong> os resultados do IDEB por escola pública estão no portal do INEP ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que coerência de valores importa tanto quanto resultados', tag: 'argumento',
    premissas: ['A educação forma a pessoa inteira, não só o desempenho em provas.', 'Quando escola e família ensinam valores opostos, a criança recebe mensagens contraditórias.', 'A coerência entre casa e escola fortalece a formação.'],
    conclusao: 'Logo, a escolha da escola deve pesar a coerência de valores ao lado dos resultados acadêmicos.',
    nota: 'Coerência não significa isolamento: a criança também precisa aprender a conviver com quem pensa diferente.',
  },
  objecoes: [
    { objecao: 'Só os ricos podem escolher escola; para os pobres o tema não faz sentido.', tag: 'debate',
      resposta: 'A escolha é desigual, e por isso a Igreja pede que o poder público torne a liberdade de escolha real para todos. Mas mesmo na rede pública os pais podem participar, acompanhar, cobrar e, às vezes, escolher entre escolas. O direito dos pais vale para todos, e as condições para exercê-lo são uma questão de justiça.' },
  ],
  aplicacao: `<p>Monte um roteiro de avaliação de escola com dez critérios e aplique-o a uma escola real (pela visita, pelos documentos ou pelos dados públicos), com uma conclusão fundamentada.</p>`,
  fonte: {
    obra: 'Lei nº 9.394/1996 (LDB), arts. 12 e 14; Lei nº 8.069/1990 (ECA), art. 53; Gravissimum educationis, 5–6', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na LDB, os deveres da escola e a gestão democrática. No ECA, os direitos dos pais. Na Gravissimum educationis, a colaboração entre pais e professores.</p>`,
  },
  perguntas: [
    { p: 'Que artigo da LDB manda a escola elaborar sua proposta pedagógica?', r: 'O art. 12, I.' },
    { p: 'Que direito o ECA garante aos pais?', r: 'Ter ciência do processo pedagógico e participar da definição das propostas educacionais.' },
    { p: 'Por que a coerência de valores importa?', r: 'Porque escola e família contraditórias dão mensagens opostas à criança.' },
  ],
  exercicios: [
    mc('A proposta pedagógica está prevista na LDB, art.:', ['1º', '12, I', '24', '26'], 1, 'Escola.'),
    mc('O direito dos pais de participar das propostas está no ECA, art.:', ['5º', '53', '55', '98'], 1, 'Parágrafo único.'),
    mc('Regras de convivência e de avaliação estão no:', ['Regimento escolar', 'IDEB', 'Diário oficial', 'Currículo Lattes'], 0, 'Documento.'),
    mc('A colaboração entre pais e professores é pedida na:', ['Gravissimum educationis', 'Laudato si', 'Humanae vitae', 'Dei Verbum'], 0, 'N. 5.'),
    mc('Clima escolar refere-se a:', ['Temperatura', 'Relações, disciplina e segurança', 'Mensalidade', 'Localização'], 1, 'Definição.'),
    disc('Aplique um roteiro de dez critérios a uma escola real e conclua fundamentadamente.', ['Critérios', 'Dados', 'Comparação', 'Conclusão']),
  ],
  resumo: ['Critérios: valores, ensino, clima, relação, condições.', 'LDB art. 12: proposta pedagógica e informação aos pais.', 'ECA art. 53: participação dos pais.', 'IDEB com cautela.', 'GE 5: colaboração.'],
  referencias: [
    { texto: 'Lei nº 9.394, de 1996 (LDB), art. 12.' },
    { texto: 'Lei nº 8.069, de 1990 (Estatuto da Criança e do Adolescente), art. 53.' },
    { texto: 'Concílio Vaticano II, Gravissimum educationis (1965), n. 5–6.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação da escola', 'Ler as fontes indicadas'],
  revisao: [['LDB 12', 'Proposta pedagógica.'], ['ECA 53', 'Participação.'], ['GE 5', 'Colaboração.']],
  avancado: {
    texto: `<h3>Gestão democrática e conselhos escolares</h3>
<p>A LDB prevê a gestão democrática do ensino público, com participação da comunidade escolar em conselhos escolares (art. 14) ${tag('fato')}. Pais podem integrar esses conselhos e influenciar decisões sobre o uso de recursos e o projeto da escola ${tag('fato')}. A eficácia dos conselhos varia muito conforme a participação real ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lei nº 9.394, de 1996 (LDB), art. 14.' }],
    exercicios: [
      mc('A gestão democrática está na LDB, art.:', ['12', '14', '24', '26'], 1, 'Conselhos.'),
      mc('Os conselhos escolares incluem:', ['Só o diretor', 'A comunidade escolar, inclusive pais', 'Só o governo', 'Ninguém'], 1, 'Participação.'),
      mc('A eficácia dos conselhos depende da:', ['Participação real', 'Cor do prédio', 'Lei apenas', 'Sorte'], 0, 'Interpretação.'),
      disc('Proponha como pais podem participar de um conselho escolar de modo eficaz.', ['Papel', 'Ações', 'Obstáculos', 'Avaliação'])],
  },
}),

aula({
  id: 'ed5-4', titulo: 'Investigação educacional de quatro semanas: pergunta, dados, ética e relatório', duracao: '180 min',
  aprendera: ['Formular uma pergunta de pesquisa educacional delimitada', 'Escolher entre dados públicos, observação ou revisão de literatura', 'Respeitar a ética da pesquisa com pessoas', 'Planejar e redigir o relatório'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como transformar uma inquietação — "por que tantos alunos não aprendem a ler?" — numa investigação que se possa fazer em quatro semanas?</p>
<h3>A pergunta</h3>
<p>Uma boa pergunta é delimitada: um lugar, um período, um aspecto ${tag('interpretacao')}. Em vez de "a educação no Brasil", algo como "como evoluíram o IDEB e a taxa de aprovação dos anos iniciais nas escolas municipais da minha cidade entre 2013 e 2023?" ${tag('interpretacao')}.</p>
<h3>Três caminhos</h3>
<p>Dados públicos: Censo Escolar, SAEB e IDEB, disponíveis no portal do INEP ${tag('fato')}. Observação: assistir a aulas, com autorização da escola e dos professores, usando um roteiro ${tag('fato')}. Revisão de literatura: reunir e comparar estudos sobre uma questão, como métodos de alfabetização ${tag('fato')}.</p>
<h3>Ética</h3>
<p>Pesquisas com pessoas exigem consentimento livre e esclarecido; com crianças, também o consentimento dos responsáveis e o assentimento da criança ${tag('fato')}. No Brasil, a Resolução CNS nº 510/2016 trata da ética em pesquisas de ciências humanas e sociais ${tag('fato')}. Dados públicos agregados dispensam consentimento, mas exigem citação correta ${tag('fato')}. Proteja nomes e imagens de alunos e professores ${tag('argumento')}.</p>
<h3>O relatório</h3>
<p>Estrutura: pergunta e justificativa; fontes e método; resultados com tabelas ou gráficos; discussão, distinguindo dado, interpretação e valor; limites; conclusão proporcional aos dados ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Pergunta delimitada', 'Pergunta com lugar, período e aspecto definidos.'],
    ['Revisão de literatura', 'Reunião e comparação de estudos sobre uma questão.'],
    ['Roteiro de observação', 'Lista do que observar e registrar numa aula.'],
    ['Consentimento livre e esclarecido', 'Concordância informada de quem participa da pesquisa.'],
    ['Assentimento', 'Concordância da criança, além do consentimento dos responsáveis.'],
  ],
  exemplos: `<p><strong>Cronograma de quatro semanas:</strong> semana 1, delimitar a pergunta e reunir fontes; semana 2, coletar dados (planilha do INEP, observações ou fichas de estudos); semana 3, organizar tabelas e gráficos e analisar; semana 4, redigir o relatório e revisá-lo com a rubrica.</p>`,
  contexto: `<p><strong>No mundo:</strong> professores-pesquisadores investigam a própria prática em muitos sistemas escolares ${tag('fato')}. <strong>No Brasil:</strong> os microdados do Censo Escolar e do SAEB são públicos e permitem pesquisas por escola e município ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a conclusão deve ser proporcional aos dados', tag: 'argumento',
    premissas: ['Uma pesquisa de quatro semanas tem amostra e método limitados.', 'Conclusões gerais exigem dados amplos e desenhos fortes.', 'Afirmar mais do que os dados permitem engana o leitor e a si mesmo.'],
    conclusao: 'Logo, a conclusão de uma pequena investigação deve ser modesta e explicitar seus limites.',
    nota: 'Uma conclusão modesta e verdadeira vale mais que uma ambiciosa e falsa.',
  },
  objecoes: [
    { objecao: 'Uma pesquisa tão pequena não serve para nada.', tag: 'argumento',
      resposta: 'Ela não resolve grandes questões, mas forma o hábito de perguntar com precisão, buscar dados e distinguir fatos de opiniões. Além disso, pode informar decisões locais, como as de uma escola ou família. O valor está no método aprendido e na honestidade das conclusões.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto da investigação: pergunta delimitada, caminho escolhido, fontes, cuidados éticos, cronograma de quatro semanas e rubrica de avaliação.</p>`,
  fonte: {
    obra: 'INEP, microdados e resultados do Censo Escolar, SAEB e IDEB; Resolução CNS nº 510/2016', link: { url: 'https://www.gov.br/inep', rotulo: 'Portal do INEP' },
    orientacao: `<p>No INEP, localize os dados da sua escola ou município. Na Resolução 510, os princípios de consentimento e proteção dos participantes.</p>`,
  },
  perguntas: [
    { p: 'O que torna uma pergunta delimitada?', r: 'Lugar, período e aspecto definidos.' },
    { p: 'Que norma trata da ética em pesquisas de ciências humanas no Brasil?', r: 'A Resolução CNS nº 510/2016.' },
    { p: 'Por que a conclusão deve ser modesta?', r: 'Porque a amostra e o método de uma pequena pesquisa são limitados.' },
  ],
  exercicios: [
    mc('Uma pergunta bem delimitada é:', ['"A educação no Brasil"', '"IDEB dos anos iniciais na minha cidade, 2013–2023"', '"A escola"', '"Tudo sobre leitura"'], 1, 'Delimitação.'),
    mc('Pesquisa com crianças exige consentimento dos responsáveis e:', ['Nada mais', 'Assentimento da criança', 'Pagamento', 'Publicação de nomes'], 1, 'Ética.'),
    mc('A Resolução CNS sobre ciências humanas é a:', ['466/2012', '510/2016', '125/2010', '225/2016'], 1, 'Ética.'),
    mc('Dados públicos agregados exigem:', ['Consentimento individual', 'Citação correta', 'Nada', 'Autorização judicial'], 1, 'Fonte.'),
    mc('No relatório, a discussão deve distinguir:', ['Dado, interpretação e valor', 'Só opiniões', 'Só números', 'Nada'], 0, 'Distinções.'),
    disc('Apresente o pré-projeto: pergunta, caminho, fontes, ética, cronograma e rubrica.', ['Pergunta e caminho', 'Fontes', 'Ética', 'Cronograma e rubrica']),
  ],
  resumo: ['Pergunta delimitada.', 'Dados públicos, observação ou revisão.', 'Consentimento e assentimento; Res. CNS 510/2016.', 'Relatório com limites.', 'Conclusão proporcional.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510, de 2016.' },
    { texto: 'INEP, Censo Escolar, SAEB e IDEB.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a investigação em quatro semanas'],
  revisao: [['Delimitar', 'Lugar, período, aspecto.'], ['Res. 510', 'Ética.'], ['Proporção', 'Conclusão modesta.']],
  avancado: {
    texto: `<h3>Pesquisa-ação</h3>
<p>Na pesquisa-ação, o professor investiga a própria prática em ciclos: planeja uma mudança, aplica, observa os resultados e reflete para o ciclo seguinte ${tag('fato')}. Seu valor está em unir investigação e melhoria; seu limite, na dificuldade de separar o efeito da mudança de outros fatores, por falta de grupo de comparação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' }],
    exercicios: [
      mc('A pesquisa-ação funciona em:', ['Ciclos', 'Uma única medida', 'Sorteios', 'Entrevistas apenas'], 0, 'Planejar, agir, observar, refletir.'),
      mc('Um limite da pesquisa-ação é:', ['Falta de grupo de comparação', 'Excesso de dados', 'Ser cara', 'Ser proibida'], 0, 'Interpretação.'),
      mc('Seu valor é unir investigação e:', ['Melhoria', 'Punição', 'Propaganda', 'Nada'], 0, 'Prática.'),
      disc('Planeje um ciclo de pesquisa-ação para melhorar a leitura de uma turma ou de um filho.', ['Mudança', 'Aplicação', 'Observação', 'Reflexão'])],
  },
}),

avaliacao('ed5-5', 'Avaliação integradora de Educação', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Educação. Reúne questões de todos os módulos (ED1 a ED5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia seus quadros, ensaios e planos de aula.</li><li>Releia a rubrica da investigação (ed5-4).</li></ul>`,
[
  disc('Analise um plano de aula (seu ou de outro) à luz da ciência da aprendizagem, dos princípios de instrução e da avaliação formativa, e interprete um indicador educacional da escola ou do município correspondente.', ['Plano de aula', 'Princípios aplicados', 'Avaliação', 'Indicador interpretado']),
  disc('Exponha o fim da educação segundo a tradição clássica e cristã e confronte-o com uma corrente pedagógica moderna, mostrando suas consequências para o papel da família, da escola e do Estado.', ['Fim da educação', 'Corrente confrontada', 'Família, escola e Estado', 'Distinção entre dado, teoria e doutrina']),
]),
];
