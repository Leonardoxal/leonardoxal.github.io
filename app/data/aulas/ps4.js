// Psicologia IV — estudos avançados (etapa 8 do percurso de Psicologia).
// Desenvolvimento humano; psicologia social; psicopatologia; neuropsicologia.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ps4-1', titulo: 'Desenvolvimento humano: da infância à velhice', duracao: '150 min',
  aprendera: ['Conhecer os estágios psicossociais de Erikson', 'Explicar a teoria do apego', 'Conhecer a zona de desenvolvimento proximal de Vygotsky', 'Relacionar desenvolvimento e formação moral'],
  prereq: ['Psicologia III (módulo PS3)'],
  explicacao: `
<h3>O problema</h3>
<p>Como a pessoa se desenvolve ao longo da vida, e o que favorece um desenvolvimento saudável?</p>
<h3>Erikson</h3>
<p>Erik Erikson, em Infância e sociedade (1950), descreveu oito estágios psicossociais, cada um com uma crise: confiança × desconfiança (bebê), autonomia × vergonha, iniciativa × culpa, diligência × inferioridade, identidade × confusão (adolescência), intimidade × isolamento, generatividade × estagnação, integridade × desespero (velhice) ${tag('fato')}.</p>
<h3>Apego</h3>
<p>John Bowlby propôs que o bebê tem necessidade básica de vínculo com cuidadores ${tag('fato')}. Mary Ainsworth, com o procedimento da "situação estranha", descreveu padrões de apego seguro e inseguro ${tag('fato')}. O apego seguro na infância está associado a melhores relações posteriores, embora não as determine ${tag('fato')}.</p>
<h3>Vygotsky</h3>
<p>Lev Vygotsky propôs a zona de desenvolvimento proximal: a distância entre o que a criança faz sozinha e o que faz com ajuda de alguém mais experiente ${tag('fato')}. O ensino eficaz atua nessa zona ${tag('interpretacao')}.</p>
<h3>Desenvolvimento e virtude</h3>
<p>A tradição cristã vê a vida como caminho de crescimento, em que a família é a primeira escola das virtudes ${tag('doutrina')}. Os dados sobre apego e desenvolvimento confirmam a importância dos vínculos estáveis ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Estágio psicossocial', 'Fase da vida com uma tarefa ou crise característica (Erikson).'],
    ['Apego', 'Vínculo emocional do bebê com seus cuidadores.'],
    ['Situação estranha', 'Procedimento de Ainsworth para observar o apego.'],
    ['Zona de desenvolvimento proximal', 'Espaço entre o que se faz só e o que se faz com ajuda.'],
    ['Generatividade', 'Cuidado com as novas gerações, na idade adulta.'],
  ],
  exemplos: `<p><strong>Andaime:</strong> uma criança ainda não consegue montar sozinha um quebra-cabeça de cem peças. A mãe sugere começar pelas bordas e separar por cores; depois retira a ajuda aos poucos. Esse "andaime" atua na zona de desenvolvimento proximal e leva a criança a fazer sozinha o que antes só fazia com ajuda.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas sobre a primeira infância influenciaram políticas de licença parental e educação infantil ${tag('fato')}. <strong>No Brasil:</strong> o Marco Legal da Primeira Infância (Lei nº 13.257/2016) estabelece princípios para políticas voltadas a crianças de até seis anos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que os vínculos estáveis importam', tag: 'argumento',
    premissas: ['A pesquisa sobre apego associa vínculos seguros a melhor regulação emocional e relações posteriores.', 'Vínculos seguros dependem de cuidadores estáveis e responsivos.', 'A família é o lugar ordinário desses vínculos.'],
    conclusao: 'Logo, proteger a estabilidade familiar é também proteger o desenvolvimento das crianças.',
    nota: 'Associação não é destino: crianças com histórias difíceis podem desenvolver resiliência.',
  },
  objecoes: [
    { objecao: 'O que acontece na infância determina toda a vida.', tag: 'debate',
      resposta: 'A infância tem grande influência, mas pesquisas sobre resiliência mostram que relações posteriores, escolhas e ajuda podem mudar trajetórias. Determinismo infantil não é sustentado pelos dados.' },
  ],
  aplicacao: `<p>Escolha uma pessoa de cada fase (criança, adolescente, adulto, idoso) da sua convivência, identifique com respeito a tarefa de desenvolvimento de Erikson que parece estar em jogo e pense em como apoiá-la.</p>`,
  fonte: {
    obra: 'Erik Erikson, Infância e sociedade (1950), capítulo sobre as oito idades do homem', link: null,
    orientacao: `<p>Observe a formulação de cada crise e a ideia de que cada fase prepara a seguinte.</p>`,
  },
  perguntas: [
    { p: 'Qual a crise da adolescência para Erikson?', r: 'Identidade × confusão de papéis.' },
    { p: 'O que estudou a situação estranha?', r: 'Os padrões de apego de bebês.' },
    { p: 'O que é a zona de desenvolvimento proximal?', r: 'A distância entre o que a criança faz sozinha e o que faz com ajuda.' },
  ],
  exercicios: [
    mc('Infância e sociedade é de:', ['Erikson', 'Bowlby', 'Vygotsky', 'Piaget'], 0, '1950.'),
    mc('A crise da velhice é:', ['Integridade × desespero', 'Confiança × desconfiança', 'Identidade × confusão', 'Diligência × inferioridade'], 0, 'Erikson.'),
    mc('A teoria do apego é de:', ['Bowlby', 'Skinner', 'Freud', 'Watson'], 0, 'Vínculo.'),
    mc('O Marco Legal da Primeira Infância é de:', ['2016', '1990', '2008', '1962'], 0, 'Lei 13.257.'),
    mc('O "andaime" atua na:', ['Zona de desenvolvimento proximal', 'Memória de trabalho', 'Situação estranha', 'Catarse'], 0, 'Vygotsky.'),
    disc('Faça a análise respeitosa das quatro pessoas com Erikson.', ['Fases', 'Tarefas', 'Apoio', 'Respeito']),
  ],
  resumo: ['Erikson: oito estágios.', 'Bowlby e Ainsworth: apego.', 'Vygotsky: zona proximal.', 'Resiliência.', 'Família, escola das virtudes.'],
  referencias: [
    { texto: 'Erik Erikson, Infância e sociedade (1950).' },
    { texto: 'Jean Piaget, O nascimento da inteligência na criança (1936).' },
    { texto: 'Catecismo da Igreja Católica, §§ 2221–2231.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Erikson', 'Oito estágios.'], ['Apego', 'Bowlby.'], ['ZDP', 'Vygotsky.']],
  avancado: {
    texto: `<h3>Os padrões de apego</h3>
<p>Na situação estranha, observam-se a reação do bebê à saída e ao retorno da mãe ${tag('fato')}. Ainsworth descreveu o apego seguro, o inseguro-evitativo e o inseguro-ambivalente; depois, outros pesquisadores acrescentaram o desorganizado ${tag('fato')}. O padrão observado depende também do contexto cultural e não deve ser usado como rótulo definitivo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Erik Erikson, Infância e sociedade (1950).' }],
    exercicios: [
      mc('No apego seguro, ao retorno da mãe o bebê:', ['Busca consolo e se acalma', 'Ignora a mãe', 'Fica inconsolável sempre', 'Dorme'], 0, 'Padrão.'),
      mc('O padrão desorganizado foi acrescentado:', ['Depois de Ainsworth', 'Por Freud', 'Por Erikson em 1950', 'Nunca'], 0, 'História.'),
      mc('O padrão de apego deve ser visto como:', ['Não um rótulo definitivo', 'Destino', 'Diagnóstico médico', 'Irrelevante'], 0, 'Cautela.'),
      disc('Explique os padrões de apego e por que não devem virar rótulos.', ['Padrões', 'Observação', 'Contexto', 'Cautela'])],
  },
}),

aula({
  id: 'ps4-2', titulo: 'Psicologia social: conformidade, obediência e cooperação', duracao: '150 min',
  aprendera: ['Conhecer os experimentos de Asch sobre conformidade', 'Explicar a dissonância cognitiva', 'Explicar o efeito espectador', 'Aplicar a psicologia social à vida moral e às redes'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que pessoas boas às vezes fazem ou aceitam coisas erradas quando estão em grupo?</p>
<h3>Conformidade</h3>
<p>Nos experimentos de Solomon Asch (anos 1950), participantes julgavam o comprimento de linhas; quando cúmplices davam respostas obviamente erradas, muitos participantes as acompanhavam em parte das vezes ${tag('fato')}. Bastava um aliado discordante para reduzir muito a conformidade ${tag('fato')}.</p>
<h3>Dissonância cognitiva</h3>
<p>Leon Festinger (1957) propôs que o desconforto entre crenças e ações contraditórias leva as pessoas a mudar crenças ou justificar ações ${tag('fato')}.</p>
<h3>Efeito espectador</h3>
<p>John Darley e Bibb Latané (1968) mostraram que, quanto mais pessoas presenciam uma emergência, menor a chance de cada uma ajudar, pela difusão da responsabilidade ${tag('fato')}. O caso Kitty Genovese (1964), que motivou os estudos, teve relatos jornalísticos exagerados, corrigidos depois ${tag('fato')}.</p>
<h3>Aplicação moral</h3>
<p>Conhecer essas forças ajuda a resistir a elas: falar quando todos se calam, assumir pessoalmente a responsabilidade de ajudar, examinar as próprias justificativas ${tag('interpretacao')}. A virtude da fortaleza inclui a coragem de não seguir a maioria no erro ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Conformidade', 'Ajuste do próprio comportamento ao do grupo.'],
    ['Dissonância cognitiva', 'Desconforto por crenças e ações contraditórias.'],
    ['Efeito espectador', 'Redução da ajuda quando há muitas testemunhas.'],
    ['Difusão da responsabilidade', 'Sensação de que outro vai agir.'],
    ['Atribuição', 'Explicação que damos às causas do comportamento.'],
  ],
  exemplos: `<p><strong>No grupo de mensagens:</strong> alguém publica uma fofoca humilhante sobre um colega. Ninguém comenta, e cada um pensa que "não é comigo". Basta uma pessoa escrever "isso não está certo" para que outras se sintam autorizadas a discordar, como o aliado nos experimentos de Asch.</p>`,
  contexto: `<p><strong>No mundo:</strong> pesquisas estudam a polarização e o contágio de opiniões nas redes sociais ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 13.185/2015 instituiu o Programa de Combate à Intimidação Sistemática (bullying) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conhecer as pressões sociais aumenta a liberdade', tag: 'argumento',
    premissas: ['Pressões sociais agem mais quando não são percebidas.', 'Quem as conhece pode reconhecê-las no momento em que atuam.', 'Reconhecer uma pressão permite resistir a ela por razões.'],
    conclusao: 'Logo, conhecer a psicologia social pode aumentar a liberdade moral.',
    nota: 'A ética clássica já falava de respeito humano como obstáculo à virtude.',
  },
  objecoes: [
    { objecao: 'Esses experimentos mostram que o ser humano é naturalmente conformista e covarde.', tag: 'debate',
      resposta: 'Mostram que muitos cedem em certas condições, mas também que muitos resistem, e que um único aliado muda o quadro. A natureza humana inclui a tendência a seguir o grupo e a capacidade de coragem. A educação moral cultiva a segunda.' },
  ],
  aplicacao: `<p>Descreva uma situação real (sem identificar pessoas) em que você ou alguém cedeu ou resistiu à pressão do grupo, analise com os conceitos da aula e proponha uma estratégia concreta para agir bem numa próxima vez.</p>`,
  fonte: {
    obra: 'Leon Festinger, Uma teoria da dissonância cognitiva (1957), capítulo 1', link: null,
    orientacao: `<p>Observe a definição de dissonância e os modos de reduzi-la.</p>`,
  },
  perguntas: [
    { p: 'O que mostraram os experimentos de Asch?', r: 'Que muitos acompanham respostas erradas do grupo, mas um aliado reduz a conformidade.' },
    { p: 'O que é dissonância cognitiva?', r: 'O desconforto entre crenças e ações contraditórias.' },
    { p: 'Por que muitas testemunhas ajudam menos?', r: 'Pela difusão da responsabilidade.' },
  ],
  exercicios: [
    mc('A teoria da dissonância é de:', ['Festinger', 'Asch', 'Milgram', 'Darley'], 0, '1957.'),
    mc('O efeito espectador foi estudado por:', ['Darley e Latané', 'Pavlov e Skinner', 'Freud e Jung', 'Beck e Ellis'], 0, '1968.'),
    mc('Nos experimentos de Asch, a conformidade cai muito quando há:', ['Um aliado discordante', 'Mais cúmplices', 'Mais linhas', 'Prêmio'], 0, 'Resultado.'),
    mc('A lei brasileira contra o bullying é de:', ['2015', '1990', '2001', '2016'], 0, '13.185.'),
    mc('Os relatos sobre o caso Genovese foram:', ['Exagerados e depois corrigidos', 'Totalmente exatos', 'Inventados por Asch', 'Nunca publicados'], 0, 'História.'),
    disc('Analise a situação real e proponha uma estratégia.', ['Situação', 'Conceitos', 'Análise', 'Estratégia']),
  ],
  resumo: ['Asch: conformidade e o aliado.', 'Festinger: dissonância.', 'Efeito espectador.', 'Difusão da responsabilidade.', 'Fortaleza contra o respeito humano.'],
  referencias: [
    { texto: 'Leon Festinger, Uma teoria da dissonância cognitiva (1957).' },
    { texto: 'Solomon Asch, "Opinions and Social Pressure", Scientific American (1955).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 123 (a fortaleza).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise', 'Ler a fonte indicada'],
  revisao: [['Asch', 'Conformidade.'], ['Festinger', 'Dissonância.'], ['Espectador', 'Difusão.']],
  avancado: {
    texto: `<h3>O erro fundamental de atribuição</h3>
<p>Tendemos a explicar o comportamento dos outros por traços pessoais ("ele é preguiçoso") e o nosso por circunstâncias ("eu estava cansado") ${tag('fato')}. Lee Ross chamou essa tendência de "erro fundamental de atribuição" (1977) ${tag('fato')}. A caridade cristã, que interpreta o próximo em boa parte, corrige essa inclinação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Leon Festinger, Uma teoria da dissonância cognitiva (1957).' }],
    exercicios: [
      mc('O erro fundamental de atribuição explica o outro por:', ['Traços pessoais', 'Circunstâncias', 'Acaso', 'Genes apenas'], 0, 'Viés.'),
      mc('O termo é de:', ['Lee Ross', 'Festinger', 'Asch', 'Skinner'], 0, '1977.'),
      mc('Interpretar o próximo em boa parte é atitude de:', ['Caridade', 'Conformidade', 'Dissonância', 'Punição'], 0, 'Virtude.'),
      disc('Dê dois exemplos do erro fundamental de atribuição e reescreva-os com caridade e realismo.', ['Exemplos', 'Viés', 'Reescrita', 'Reflexão'])],
  },
}),

aula({
  id: 'ps4-3', titulo: 'Psicopatologia: normal, patológico e cuidado', duracao: '150 min',
  aprendera: ['Conhecer critérios para distinguir normal e patológico', 'Conhecer as principais categorias de transtornos', 'Reconhecer sinais de depressão e ansiedade', 'Combater o estigma e saber encaminhar'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Tristeza e medo fazem parte da vida. Quando se tornam um transtorno que pede tratamento?</p>
<h3>Critérios</h3>
<p>Para falar de transtorno, considera-se sofrimento significativo, prejuízo no funcionamento (trabalho, estudo, relações), duração e intensidade dos sintomas, e não apenas diferença em relação à média ${tag('fato')}. O diagnóstico cabe a profissionais habilitados ${tag('fato')}.</p>
<h3>Categorias</h3>
<p>A CID-11 e o DSM-5 incluem, entre outros, transtornos depressivos, de ansiedade, bipolar, obsessivo-compulsivo, do espectro da esquizofrenia, relacionados a trauma, ao uso de substâncias e do neurodesenvolvimento ${tag('fato')}.</p>
<h3>Depressão e ansiedade</h3>
<p>Na depressão, há humor deprimido ou perda de interesse e prazer na maior parte do dia, quase todos os dias, por pelo menos duas semanas, com outros sintomas como alterações de sono e apetite, cansaço, culpa excessiva e pensamentos de morte ${tag('fato')}. Nos transtornos de ansiedade, há preocupação ou medo excessivo e persistente, com sintomas físicos e evitação ${tag('fato')}.</p>
<h3>Tratamento e estigma</h3>
<p>Muitos transtornos têm tratamentos eficazes, como psicoterapia e, quando indicado, medicação ${tag('fato')}. O estigma afasta as pessoas do tratamento; tratar o transtorno como fraqueza moral é erro ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Psicopatologia', 'Estudo dos transtornos mentais.'],
    ['Prejuízo funcional', 'Dificuldade em atividades da vida diária.'],
    ['Anedonia', 'Perda da capacidade de sentir prazer.'],
    ['Estigma', 'Preconceito que desvaloriza pessoas com transtornos.'],
    ['Comorbidade', 'Presença simultânea de mais de um transtorno.'],
  ],
  exemplos: `<p><strong>Tristeza ou depressão?</strong> Após a morte de um avô, uma jovem chora, sente saudade e tem dias difíceis, mas continua estudando e encontrando amigos: é luto. Se, meses depois, não consegue sair da cama, perdeu o interesse por tudo e pensa em morrer, é preciso buscar avaliação profissional. O critério não é a tristeza, mas a intensidade, a duração e o prejuízo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a OMS aponta a depressão como uma das principais causas de incapacidade no mundo ${tag('fato')}. <strong>No Brasil:</strong> os CAPS e a atenção básica do SUS oferecem cuidado em saúde mental ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que transtorno mental não é fraqueza moral', tag: 'argumento',
    premissas: ['Transtornos mentais envolvem fatores biológicos, psicológicos e sociais, em grande parte não escolhidos.', 'A responsabilidade moral supõe liberdade, que pode estar diminuída por fatores psíquicos (CIC 1735).', 'Culpar alguém pelo que não escolheu é injusto.'],
    conclusao: 'Logo, tratar o transtorno como fraqueza moral é injusto e prejudicial.',
    nota: 'Isso não elimina a responsabilidade pelo que a pessoa pode fazer, como buscar ajuda.',
  },
  objecoes: [
    { objecao: 'Hoje tudo virou transtorno; é exagero diagnóstico.', tag: 'debate',
      resposta: 'Há debate real sobre a ampliação de categorias diagnósticas e o risco de tratar sofrimentos normais como doença. Mas também há muitos casos graves sem diagnóstico nem tratamento. O caminho é avaliação cuidadosa, não negação nem exagero.' },
  ],
  aplicacao: `<p>Prepare um material de conscientização (cartaz ou texto curto) sobre sinais de alerta de depressão e ansiedade, combate ao estigma e onde buscar ajuda no SUS e pelo CVV 188, sem incentivar autodiagnóstico.</p>`,
  fonte: {
    obra: 'Organização Mundial da Saúde, páginas informativas sobre depressão e ansiedade', link: null,
    orientacao: `<p>Leia as definições, os sinais e as recomendações de tratamento, e compare com a aula.</p>`,
  },
  perguntas: [
    { p: 'Que critérios indicam um transtorno?', r: 'Sofrimento significativo, prejuízo funcional, duração e intensidade.' },
    { p: 'Qual a duração mínima de sintomas para depressão maior no DSM-5?', r: 'Duas semanas.' },
    { p: 'Por que o estigma é prejudicial?', r: 'Porque afasta as pessoas do tratamento.' },
  ],
  exercicios: [
    mc('Anedonia é:', ['Perda da capacidade de sentir prazer', 'Excesso de prazer', 'Insônia', 'Medo'], 0, 'Termo.'),
    mc('O diagnóstico cabe a:', ['Profissionais habilitados', 'Amigos', 'Testes de internet', 'Qualquer pessoa'], 0, 'Limite.'),
    mc('A presença de dois transtornos juntos chama-se:', ['Comorbidade', 'Estigma', 'Anedonia', 'Resiliência'], 0, 'Termo.'),
    mc('O luto normal se distingue da depressão sobretudo por:', ['Intensidade, duração e prejuízo', 'Haver tristeza', 'Haver choro', 'Nada'], 0, 'Critério.'),
    mc('O CVV atende pelo:', ['188', '190', '193', '199'], 0, 'Brasil.'),
    disc('Prepare o material de conscientização.', ['Sinais', 'Estigma', 'Onde buscar ajuda', 'Cautela']),
  ],
  resumo: ['Critérios: sofrimento, prejuízo, duração.', 'CID-11 e DSM-5.', 'Depressão e ansiedade.', 'Tratamentos eficazes.', 'Contra o estigma.'],
  referencias: [
    { texto: 'American Psychiatric Association, DSM-5 (2013).' },
    { texto: 'Organização Mundial da Saúde, CID-11 (em vigor desde 2022).' },
    { texto: 'Catecismo da Igreja Católica, § 1735.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o material', 'Ler a fonte indicada'],
  revisao: [['Critérios', 'Sofrimento e prejuízo.'], ['2 semanas', 'Depressão.'], ['Estigma', 'Afasta.']],
  avancado: {
    texto: `<h3>O modelo biopsicossocial</h3>
<p>George Engel propôs em 1977 o modelo biopsicossocial, segundo o qual a doença resulta da interação de fatores biológicos, psicológicos e sociais ${tag('fato')}. O modelo é muito usado em saúde mental ${tag('fato')}. Alguns autores propõem acrescentar a dimensão espiritual, falando de modelo biopsicossocial-espiritual ${tag('fato')}.</p>`,
    leituras: [{ texto: 'George Engel, "The need for a new medical model", Science (1977).' }],
    exercicios: [
      mc('O modelo biopsicossocial é de:', ['Engel', 'Freud', 'Kraepelin', 'Beck'], 0, '1977.'),
      mc('O modelo integra fatores:', ['Biológicos, psicológicos e sociais', 'Só biológicos', 'Só sociais', 'Só espirituais'], 0, 'Definição.'),
      mc('Alguns acrescentam a dimensão:', ['Espiritual', 'Musical', 'Matemática', 'Jurídica'], 0, 'Proposta.'),
      disc('Analise um caso fictício de ansiedade pelas quatro dimensões (biológica, psicológica, social e espiritual).', ['Biológica', 'Psicológica', 'Social', 'Espiritual'])],
  },
}),

aula({
  id: 'ps4-4', titulo: 'Neuropsicologia: cérebro, linguagem e plasticidade', duracao: '150 min',
  aprendera: ['Conhecer neurônios, sinapses e neurotransmissores', 'Situar funções dos lobos cerebrais', 'Conhecer as áreas de Broca e Wernicke', 'Explicar a plasticidade e desfazer mitos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que relação há entre o cérebro e as funções psíquicas, e o que ela nos diz sobre a pessoa?</p>
<h3>Neurônios</h3>
<p>Os neurônios comunicam-se por sinapses, liberando neurotransmissores como dopamina, serotonina e glutamato ${tag('fato')}. O cérebro humano tem cerca de 86 bilhões de neurônios, segundo estimativa da pesquisadora brasileira Suzana Herculano-Houzel ${tag('fato')}.</p>
<h3>Lobos</h3>
<p>Frontal: planejamento, controle do comportamento, movimento; parietal: sensações do corpo e espaço; temporal: audição, memória e linguagem; occipital: visão ${tag('fato')}. As funções complexas dependem de redes, não de uma só área ${tag('fato')}.</p>
<h3>Linguagem</h3>
<p>Paul Broca descreveu em 1861 um paciente que entendia mas mal conseguia falar, com lesão no lobo frontal esquerdo ${tag('fato')}. Carl Wernicke descreveu em 1874 lesões temporais com fala fluente mas sem sentido e dificuldade de compreensão ${tag('fato')}.</p>
<h3>Plasticidade e mitos</h3>
<p>O cérebro se modifica com a experiência e a aprendizagem ao longo da vida (neuroplasticidade) ${tag('fato')}. É mito que usamos só 10% do cérebro ${tag('fato')}. Mostrar correlatos cerebrais de uma função não diz, por si, o que a pessoa pensa, nem decide questões filosóficas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Sinapse', 'Junção de comunicação entre neurônios.'],
    ['Neurotransmissor', 'Substância química que transmite sinais na sinapse.'],
    ['Afasia', 'Perturbação da linguagem por lesão cerebral.'],
    ['Neuroplasticidade', 'Capacidade do cérebro de se modificar com a experiência.'],
    ['Correlato neural', 'Atividade cerebral associada a uma função psíquica.'],
  ],
  exemplos: `<p><strong>Aprender um instrumento:</strong> estudos com músicos mostram diferenças em áreas ligadas ao controle motor e à audição, relacionadas ao treino prolongado. A prática muda o cérebro, o que confirma, num nível biológico, a antiga intuição de que o hábito transforma quem o adquire.</p>`,
  contexto: `<p><strong>No mundo:</strong> Roger Sperry recebeu o Nobel em 1981 por estudos sobre pacientes com os hemisférios cerebrais separados ${tag('fato')}. <strong>No Brasil:</strong> Suzana Herculano-Houzel desenvolveu um método para contar células cerebrais que levou à estimativa de 86 bilhões de neurônios ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que correlatos não são explicação completa', tag: 'argumento',
    premissas: ['A neurociência mostra que certas áreas se ativam quando pensamos, sentimos ou decidimos.', 'Saber onde algo se correlaciona não diz o conteúdo, a verdade ou o valor do pensamento.', 'Uma explicação completa da pessoa inclui razões, sentidos e escolhas.'],
    conclusao: 'Logo, os correlatos neurais são parte importante, mas não toda, da explicação da vida psíquica.',
    nota: 'O argumento não diminui a neurociência; delimita o que ela pode afirmar.',
  },
  objecoes: [
    { objecao: 'Se o cérebro muda com a experiência, a pessoa é só o seu cérebro.', tag: 'debate',
      resposta: 'A plasticidade mostra a unidade íntima entre psique e corpo, que a visão hilemórfica afirma. Não prova que a pessoa se reduza ao cérebro. A pergunta sobre o que somos continua filosófica.' },
  ],
  aplicacao: `<p>Escolha três notícias que falem de "descobertas do cérebro" e avalie cada uma: o que o estudo mostrou de fato, o que a notícia afirmou além disso e se há algum "neuromito".</p>`,
  fonte: {
    obra: 'Suzana Herculano-Houzel, The Human Advantage (2016), capítulos iniciais', link: null,
    orientacao: `<p>Observe o método de contagem de neurônios e as conclusões sobre o cérebro humano.</p>`,
  },
  perguntas: [
    { p: 'Quantos neurônios tem o cérebro humano, segundo Herculano-Houzel?', r: 'Cerca de 86 bilhões.' },
    { p: 'O que descreveu Broca em 1861?', r: 'Um paciente com dificuldade de falar e lesão no lobo frontal esquerdo.' },
    { p: 'O que é neuroplasticidade?', r: 'A capacidade do cérebro de se modificar com a experiência.' },
  ],
  exercicios: [
    mc('A visão está ligada sobretudo ao lobo:', ['Occipital', 'Frontal', 'Temporal', 'Parietal'], 0, 'Lobos.'),
    mc('Wernicke descreveu suas observações em:', ['1874', '1861', '1981', '1952'], 0, 'Afasia.'),
    mc('"Usamos só 10% do cérebro" é:', ['Mito', 'Fato', 'Lei', 'Teorema'], 0, 'Neuromito.'),
    mc('Sperry recebeu o Nobel em:', ['1981', '1904', '1961', '2001'], 0, 'Hemisférios.'),
    mc('Dopamina e serotonina são:', ['Neurotransmissores', 'Lobos', 'Afasias', 'Hormônios vegetais'], 0, 'Química.'),
    disc('Avalie as três notícias sobre o cérebro.', ['Estudo', 'Afirmação da notícia', 'Neuromitos', 'Juízo']),
  ],
  resumo: ['Neurônios e sinapses.', 'Lobos e redes.', 'Broca (1861) e Wernicke (1874).', 'Neuroplasticidade.', 'Correlatos não são tudo.'],
  referencias: [
    { texto: 'Suzana Herculano-Houzel, The Human Advantage (2016).' },
    { texto: 'Aristóteles, Sobre a alma.', livro: 'aristoteles-alma' },
    { texto: 'Santo Tomás de Aquino, Questões disputadas sobre a alma.', livro: 'tomas-alma' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação das notícias', 'Ler a fonte indicada'],
  revisao: [['86 bilhões', 'Neurônios.'], ['Broca', 'Fala.'], ['10%', 'Mito.']],
  avancado: {
    texto: `<h3>Pacientes com hemisférios separados</h3>
<p>Em alguns pacientes com epilepsia grave, cortou-se o corpo caloso, que liga os hemisférios ${tag('fato')}. Sperry e Gazzaniga observaram que, em testes especiais, informação apresentada a um hemisfério não era relatada verbalmente pelo outro ${tag('fato')}. Os resultados alimentam debates sobre a unidade da consciência, mas os pacientes, na vida diária, agem em geral como pessoas unificadas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Suzana Herculano-Houzel, The Human Advantage (2016).' }],
    exercicios: [
      mc('A estrutura cortada nesses pacientes é o:', ['Corpo caloso', 'Cerebelo', 'Hipocampo', 'Tronco'], 0, 'Cirurgia.'),
      mc('Os estudos foram feitos por:', ['Sperry e Gazzaniga', 'Broca e Wernicke', 'Freud e Jung', 'Asch e Milgram'], 0, 'Pesquisadores.'),
      mc('Na vida diária, esses pacientes agem em geral como:', ['Pessoas unificadas', 'Duas pessoas', 'Inconscientes', 'Crianças'], 0, 'Observação.'),
      disc('Discuta o que os estudos com hemisférios separados dizem e não dizem sobre a unidade da pessoa.', ['Dados', 'Interpretações', 'Limites', 'Hilemorfismo'])],
  },
}),

avaliacao('ps4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas de desenvolvimento, psicologia social, psicopatologia e neuropsicologia, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu material de conscientização.</li><li>Releia a avaliação das notícias.</li></ul>`,
[
  disc('Analise um caso fictício de um adolescente que se isola, tem notas em queda e sofre pressão do grupo na escola, usando conceitos de desenvolvimento, psicologia social e psicopatologia, sem fazer diagnóstico, e indique como encaminhar.', ['Desenvolvimento', 'Psicologia social', 'Sinais de alerta', 'Encaminhamento']),
  disc('Explique o que a neuropsicologia mostra sobre a relação entre cérebro e vida psíquica e o que não pode, por si, decidir, usando um exemplo e a visão hilemórfica.', ['Dados', 'Limites', 'Exemplo', 'Hilemorfismo']),
]),
];
