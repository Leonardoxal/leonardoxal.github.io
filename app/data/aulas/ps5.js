// Psicologia V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Psicologia).
// Educação e aprendizagem; trabalho e organizações; saúde mental e vida espiritual; revisão de estudos; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ps5-1', titulo: 'Psicologia da educação: como aprendemos melhor', duracao: '150 min',
  aprendera: ['Conhecer técnicas de estudo com boa evidência', 'Distinguir técnicas eficazes e ilusões de aprendizagem', 'Reconhecer sinais de dificuldades de aprendizagem e encaminhar', 'Aplicar a psicologia ao próprio estudo'],
  prereq: ['Psicologia IV (módulo PS4)'],
  explicacao: `
<h3>O problema</h3>
<p>Muitos estudantes estudam muito e aprendem pouco. O que a pesquisa diz sobre estudar bem?</p>
<h3>Técnicas</h3>
<p>Uma revisão de John Dunlosky e colaboradores (2013) avaliou dez técnicas de estudo: a prática de testes (recuperação ativa) e a prática distribuída no tempo tiveram alta utilidade; grifar e reler tiveram baixa utilidade ${tag('fato')}. Intercalar tipos de problemas e explicar a si mesmo por que algo é verdadeiro também ajudam ${tag('fato')}.</p>
<h3>Ilusões</h3>
<p>Reler dá sensação de familiaridade, que é confundida com domínio ${tag('fato')}. Estudar de véspera produz desempenho de curto prazo e esquecimento rápido ${tag('fato')}.</p>
<h3>Atenção</h3>
<p>Notificações e alternância de tarefas reduzem a qualidade da atenção ${tag('fato')}. Estudar com o celular longe é medida simples e eficaz ${tag('interpretacao')}.</p>
<h3>Dificuldades</h3>
<p>Dislexia, discalculia e TDAH são condições que exigem avaliação profissional e adaptações; não são preguiça ${tag('fato')}. Professores e pais podem observar sinais e encaminhar ${tag('interpretacao')}.</p>
<h3>Estudo e virtude</h3>
<p>A tradição fala da "studiositas", virtude que modera o desejo de saber e o orienta, contra a curiosidade dispersa (Suma Teológica, II-II, qq. 166–167) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Prática de testes', 'Estudar tentando lembrar, com perguntas.'],
    ['Prática distribuída', 'Estudo espaçado em várias sessões.'],
    ['Intercalação', 'Alternar tipos de problemas na mesma sessão.'],
    ['Ilusão de fluência', 'Confundir familiaridade com domínio.'],
    ['Studiositas', 'Virtude que ordena o desejo de saber.'],
  ],
  exemplos: `<p><strong>Este próprio site:</strong> os cartões de revisão e os questionários das aulas aplicam a prática de testes; o calendário de revisões espaçadas aplica a prática distribuída. Usá-los como pede o método, e não só reler as aulas, é aplicar a psicologia da aprendizagem ao seu estudo.</p>`,
  contexto: `<p><strong>No mundo:</strong> o relatório de Dunlosky e colaboradores foi publicado na revista Psychological Science in the Public Interest ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 14.254/2021 trata do acompanhamento de estudantes com dislexia, TDAH ou outro transtorno de aprendizagem ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a dificuldade desejável ajuda a aprender', tag: 'argumento',
    premissas: ['Lembrar com esforço fortalece a memória mais do que reconhecer com facilidade.', 'Testar-se e espaçar o estudo exigem esse esforço.', 'Logo, técnicas que parecem mais difíceis produzem aprendizagem mais duradoura.'],
    conclusao: 'Logo, o estudante deve preferir técnicas eficazes às que apenas parecem confortáveis.',
    nota: 'O termo "dificuldade desejável" é associado a Robert Bjork.',
  },
  objecoes: [
    { objecao: 'Cada um tem seu "estilo de aprendizagem" (visual, auditivo) e deve estudar só nele.', tag: 'debate',
      resposta: 'Pessoas têm preferências, mas revisões de pesquisa não encontraram boa evidência de que ensinar segundo o estilo preferido melhore a aprendizagem. Técnicas como testes e espaçamento ajudam a quase todos.' },
  ],
  aplicacao: `<p>Avalie seus próprios hábitos de estudo com base na aula e monte um plano de quatro semanas usando prática de testes, prática distribuída e controle de distrações, com um registro semanal.</p>`,
  fonte: {
    obra: 'John Dunlosky e outros, "Improving Students\' Learning With Effective Learning Techniques" (2013), resumo e conclusões', link: null,
    orientacao: `<p>Observe a classificação das dez técnicas por utilidade.</p>`,
  },
  perguntas: [
    { p: 'Que técnicas tiveram alta utilidade na revisão de 2013?', r: 'A prática de testes e a prática distribuída.' },
    { p: 'O que é ilusão de fluência?', r: 'Confundir familiaridade com domínio.' },
    { p: 'O que é a studiositas?', r: 'A virtude que modera e ordena o desejo de saber.' },
  ],
  exercicios: [
    mc('Grifar e reler tiveram utilidade:', ['Baixa', 'Alta', 'Máxima', 'Nula sempre'], 0, 'Dunlosky.'),
    mc('Estudar espaçado é:', ['Prática distribuída', 'Intercalação', 'Releitura', 'Grifo'], 0, 'Termo.'),
    mc('A lei sobre dislexia e TDAH na escola é de:', ['2021', '2008', '1996', '2016'], 0, 'Lei 14.254.'),
    mc('A teoria dos "estilos de aprendizagem" tem evidência:', ['Fraca', 'Muito forte', 'Definitiva', 'Absoluta'], 0, 'Debate.'),
    mc('A studiositas é tratada em:', ['II-II, qq. 166–167', 'I, q. 2', 'Confissões X', 'DSM-5'], 0, 'Tomás.'),
    disc('Avalie seus hábitos e monte o plano de quatro semanas.', ['Diagnóstico dos hábitos', 'Técnicas', 'Cronograma', 'Registro']),
  ],
  resumo: ['Testes e espaçamento.', 'Ilusão de fluência.', 'Atenção e celular.', 'Dificuldades: avaliar e adaptar.', 'Studiositas.'],
  referencias: [
    { texto: 'John Dunlosky e outros, "Improving Students\' Learning With Effective Learning Techniques" (2013).' },
    { texto: 'Peter C. Brown, Henry Roediger e Mark McDaniel, Fixe o conhecimento (2014).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, qq. 166–167.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de estudo', 'Ler a fonte indicada'],
  revisao: [['Testes', 'Alta utilidade.'], ['Reler', 'Baixa.'], ['Studiositas', 'Virtude.']],
  avancado: {
    texto: `<h3>Intercalação</h3>
<p>Em vez de resolver dez problemas do mesmo tipo seguidos, a intercalação mistura tipos diferentes ${tag('fato')}. Pesquisas, como as de Doug Rohrer com problemas de matemática, mostraram melhor desempenho em testes posteriores com intercalação ${tag('fato')}. A razão provável é que o estudante aprende a escolher a estratégia certa para cada problema ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Peter C. Brown, Henry Roediger e Mark McDaniel, Fixe o conhecimento (2014).' }],
    exercicios: [
      mc('Intercalar é:', ['Misturar tipos de problemas', 'Repetir o mesmo tipo', 'Reler', 'Grifar'], 0, 'Definição.'),
      mc('Uma razão provável do benefício é aprender a:', ['Escolher a estratégia certa', 'Decorar respostas', 'Ler mais rápido', 'Nada'], 0, 'Interpretação.'),
      mc('Rohrer estudou intercalação com problemas de:', ['Matemática', 'Música', 'Línguas antigas', 'Dança'], 0, 'Pesquisa.'),
      disc('Monte uma lista de exercícios intercalados para uma matéria que você estuda.', ['Tipos', 'Ordem', 'Justificativa', 'Avaliação'])],
  },
}),

aula({
  id: 'ps5-2', titulo: 'Trabalho, organizações e esgotamento', duracao: '150 min',
  aprendera: ['Conhecer temas centrais da psicologia do trabalho', 'Explicar o burnout segundo a CID-11', 'Distinguir fatores de satisfação e insatisfação no trabalho', 'Relacionar psicologia do trabalho e doutrina social da Igreja'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Passamos boa parte da vida trabalhando. Como o trabalho afeta a saúde psíquica, e o que torna um trabalho humano?</p>
<h3>Psicologia do trabalho</h3>
<p>A psicologia organizacional estuda seleção, treinamento, motivação, liderança, clima e saúde no trabalho ${tag('fato')}. Frederick Herzberg (1959) distinguiu fatores "higiênicos" (salário, condições), cuja falta gera insatisfação, e fatores motivadores (reconhecimento, responsabilidade, sentido), que geram satisfação ${tag('fato')}.</p>
<h3>Burnout</h3>
<p>A CID-11 descreve o burnout como fenômeno ocupacional resultante de estresse crônico no trabalho não gerenciado com sucesso, com exaustão, distanciamento ou cinismo em relação ao trabalho e redução da eficácia profissional ${tag('fato')}. Não é classificado como condição médica em si, mas como fator que influencia a saúde ${tag('fato')}.</p>
<h3>Riscos psicossociais</h3>
<p>Sobrecarga, falta de autonomia, assédio e conflitos são riscos psicossociais ${tag('fato')}. No Brasil, a Norma Regulamentadora nº 1 foi atualizada para incluir a gestão de riscos psicossociais no gerenciamento de riscos ocupacionais ${tag('fato')}.</p>
<h3>Doutrina social</h3>
<p>São João Paulo II, na Laborem exercens (1981), ensinou que o trabalho é para o homem, e não o homem para o trabalho ${tag('doutrina')}. O descanso dominical e o respeito aos limites da pessoa fazem parte de uma visão humana do trabalho ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Psicologia organizacional', 'Estudo do comportamento nas organizações.'],
    ['Fatores higiênicos', 'Condições cuja falta gera insatisfação (Herzberg).'],
    ['Burnout', 'Fenômeno ocupacional de esgotamento por estresse crônico.'],
    ['Riscos psicossociais', 'Aspectos do trabalho que podem prejudicar a saúde mental.'],
    ['Assédio moral', 'Conduta abusiva repetida que humilha o trabalhador.'],
  ],
  exemplos: `<p><strong>Uma equipe sobrecarregada:</strong> numa empresa, metas aumentam sem aumento de pessoal, e os funcionários respondem mensagens até de madrugada. Alguns se tornam cínicos, outros adoecem. Ajustar metas, respeitar o horário de descanso e dar autonomia são medidas organizacionais, não só "resiliência individual".</p>`,
  contexto: `<p><strong>No mundo:</strong> a OMS e a Organização Internacional do Trabalho publicaram diretrizes sobre saúde mental no trabalho ${tag('fato')}. <strong>No Brasil:</strong> transtornos mentais estão entre as causas importantes de afastamento do trabalho registradas pela Previdência ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o burnout não se resolve só com força de vontade', tag: 'argumento',
    premissas: ['O burnout resulta de estresse crônico no trabalho, ligado a condições organizacionais.', 'Mudanças só individuais não alteram essas condições.', 'Logo, a prevenção exige também mudanças na organização do trabalho.'],
    conclusao: 'Logo, prevenir o burnout é responsabilidade compartilhada entre pessoa e organização.',
    nota: 'A doutrina social chama isso de justiça nas condições de trabalho.',
  },
  objecoes: [
    { objecao: 'Quem tem burnout simplesmente não gosta de trabalhar.', tag: 'debate',
      resposta: 'O burnout atinge com frequência pessoas muito dedicadas, que se esgotam por excesso, não por falta, de empenho. Culpar a pessoa ignora as condições de trabalho e agrava o problema.' },
  ],
  aplicacao: `<p>Entreviste (com consentimento) um trabalhador sobre fatores que o motivam e o desgastam no trabalho, classifique-os segundo Herzberg e proponha três medidas, uma pessoal e duas organizacionais.</p>`,
  fonte: {
    obra: 'São João Paulo II, Laborem exercens (1981), nn. 6 e 9', link: null,
    orientacao: `<p>Observe a distinção entre o sentido objetivo e o subjetivo do trabalho.</p>`,
  },
  perguntas: [
    { p: 'Como a CID-11 define o burnout?', r: 'Fenômeno ocupacional de estresse crônico no trabalho não gerenciado com sucesso.' },
    { p: 'Quais as três dimensões do burnout?', r: 'Exaustão, distanciamento ou cinismo e redução da eficácia profissional.' },
    { p: 'O que ensina a Laborem exercens?', r: 'Que o trabalho é para o homem, e não o homem para o trabalho.' },
  ],
  exercicios: [
    mc('A teoria dos dois fatores é de:', ['Herzberg', 'Maslow', 'Skinner', 'Erikson'], 0, '1959.'),
    mc('Para a CID-11, o burnout é:', ['Fenômeno ocupacional', 'Doença infecciosa', 'Transtorno de personalidade', 'Traço de caráter'], 0, 'Classificação.'),
    mc('A Laborem exercens é de:', ['1981', '1891', '1963', '2015'], 0, 'João Paulo II.'),
    mc('Reconhecimento e sentido são, para Herzberg, fatores:', ['Motivadores', 'Higiênicos', 'Punitivos', 'Irrelevantes'], 0, 'Satisfação.'),
    mc('A norma brasileira atualizada para incluir riscos psicossociais é a:', ['NR-1', 'NR-35', 'CLT art. 1', 'Lei 4.119'], 0, 'Segurança do trabalho.'),
    disc('Faça a entrevista, a classificação e as três medidas.', ['Entrevista', 'Classificação', 'Medidas', 'Ética']),
  ],
  resumo: ['Psicologia organizacional.', 'Herzberg: higiênicos e motivadores.', 'Burnout (CID-11).', 'Riscos psicossociais e NR-1.', 'Laborem exercens.'],
  referencias: [
    { texto: 'São João Paulo II, Laborem exercens (1981).' },
    { texto: 'Organização Mundial da Saúde, CID-11, código QD85 (burnout).' },
    { texto: 'Frederick Herzberg e outros, The Motivation to Work (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a entrevista e as medidas', 'Ler a fonte indicada'],
  revisao: [['Burnout', 'Ocupacional.'], ['Herzberg', 'Dois fatores.'], ['LE', 'Trabalho para o homem.']],
  avancado: {
    texto: `<h3>Ócio e descanso</h3>
<p>Josef Pieper, em Ócio e culto (1948), sustentou que o descanso contemplativo, e não só a pausa para trabalhar mais, é base da cultura ${tag('fato')}. O descanso dominical, segundo o Catecismo, permite à pessoa cultivar a vida familiar, cultural, social e religiosa (CIC 2184) ${tag('doutrina')}. A psicologia mostra a importância do descanso para a recuperação ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Josef Pieper, Ócio e culto (1948).' }],
    exercicios: [
      mc('Ócio e culto é de:', ['Josef Pieper', 'Herzberg', 'Maslow', 'Frankl'], 0, '1948.'),
      mc('Para Pieper, o ócio é:', ['Base da cultura', 'Preguiça', 'Perda de tempo', 'Trabalho disfarçado'], 0, 'Tese.'),
      mc('O descanso dominical é tratado no:', ['CIC 2184', 'DSM-5', 'CID-11', 'NR-1'], 0, 'Catecismo.'),
      disc('Proponha um modo de viver o descanso semanal que una recuperação e sentido.', ['Descanso', 'Família', 'Oração', 'Prática'])],
  },
}),

aula({
  id: 'ps5-3', titulo: 'Saúde mental e vida espiritual: prevenção e cuidado', duracao: '150 min',
  aprendera: ['Conhecer fatores de proteção da saúde mental', 'Relacionar práticas espirituais e bem-estar com cautela', 'Planejar uma ação de prevenção com encaminhamento', 'Cuidar de si sem negar a ajuda profissional'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O que cada um e cada comunidade podem fazer para proteger a saúde mental, e como a vida espiritual se relaciona com isso?</p>
<h3>Fatores de proteção</h3>
<p>A pesquisa aponta como fatores de proteção: sono adequado, atividade física, vínculos de apoio, sentido de vida, habilidades de lidar com problemas e acesso a cuidado ${tag('fato')}. Isolamento, uso abusivo de álcool e drogas e violência são fatores de risco ${tag('fato')}.</p>
<h3>Gratidão e sentido</h3>
<p>Estudos de Robert Emmons e colaboradores associaram práticas de gratidão a melhora do bem-estar em certos grupos ${tag('fato')}. A busca de sentido, enfatizada por Frankl, é associada à resiliência ${tag('fato')}.</p>
<h3>Vida espiritual</h3>
<p>Oração, participação comunitária e sacramentos oferecem sentido, esperança e vínculos ${tag('interpretacao')}. A fé não é técnica de bem-estar: seu fim é Deus, e os benefícios psicológicos são consequência, não finalidade ${tag('doutrina')}. Práticas espirituais não substituem tratamento quando há transtorno ${tag('argumento')}.</p>
<h3>Prevenção comunitária</h3>
<p>Escolas e paróquias podem promover vínculos, informar sobre sinais de alerta, combater o estigma e ter uma rede de encaminhamento (SUS, CAPS, CVV 188) ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Fator de proteção', 'Condição que reduz o risco de problemas de saúde.'],
    ['Fator de risco', 'Condição que aumenta esse risco.'],
    ['Resiliência', 'Capacidade de se recuperar de adversidades.'],
    ['Gratidão', 'Reconhecimento dos bens recebidos.'],
    ['Rede de encaminhamento', 'Serviços para os quais se pode indicar quem precisa de ajuda.'],
  ],
  exemplos: `<p><strong>Um grupo de jovens:</strong> a coordenação inclui, uma vez por mês, uma conversa sobre saúde mental com um profissional, mantém contato com quem some dos encontros, combina com a família quando há sinais de alerta e tem em mãos os contatos do CAPS e do CVV. Fé, comunidade e cuidado profissional se completam.</p>`,
  contexto: `<p><strong>No mundo:</strong> a OMS publicou o Plano de Ação Integral de Saúde Mental 2013–2030 ${tag('fato')}. <strong>No Brasil:</strong> a Lei nº 13.819/2019 instituiu a Política Nacional de Prevenção da Automutilação e do Suicídio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a comunidade protege', tag: 'argumento',
    premissas: ['Vínculos de apoio são fator de proteção da saúde mental.', 'Comunidades de fé e grupos oferecem vínculos estáveis.', 'Logo, comunidades acolhedoras podem proteger a saúde mental de seus membros.'],
    conclusao: 'Logo, cultivar comunidades acolhedoras é também prevenção.',
    nota: 'Comunidades também podem ferir, se forem excludentes ou abusivas; a acolhida deve ser real.',
  },
  objecoes: [
    { objecao: 'Falar de suicídio com jovens dá ideias a eles.', tag: 'debate',
      resposta: 'Orientações de prevenção indicam que perguntar diretamente, com cuidado, sobre pensamentos suicidas não aumenta o risco e pode abrir caminho para ajuda. O que se evita é a divulgação sensacionalista e detalhada de casos e métodos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: planeje uma ação de prevenção em saúde mental numa escola ou paróquia (objetivo, público, atividades, parcerias com profissionais, rede de encaminhamento e avaliação).</p>`,
  fonte: {
    obra: 'Organização Mundial da Saúde, Plano de Ação Integral de Saúde Mental 2013–2030', link: null,
    orientacao: `<p>Observe os objetivos de promoção, prevenção e acesso ao cuidado.</p>`,
  },
  perguntas: [
    { p: 'Cite três fatores de proteção da saúde mental.', r: 'Sono adequado, atividade física e vínculos de apoio (entre outros).' },
    { p: 'Qual a relação entre fé e bem-estar segundo a aula?', r: 'A fé pode trazer benefícios, mas seu fim é Deus e não substitui tratamento.' },
    { p: 'Perguntar sobre pensamentos suicidas aumenta o risco?', r: 'Não; perguntar com cuidado pode abrir caminho para ajuda.' },
  ],
  exercicios: [
    mc('Isolamento é fator de:', ['Risco', 'Proteção', 'Nenhum dos dois', 'Cura'], 0, 'Saúde mental.'),
    mc('A política nacional de prevenção do suicídio no Brasil é de:', ['2019', '2001', '1962', '2016'], 0, 'Lei 13.819.'),
    mc('Práticas de gratidão foram estudadas por:', ['Robert Emmons', 'Skinner', 'Watson', 'Wundt'], 0, 'Pesquisa.'),
    mc('A fé, segundo a doutrina, tem como fim:', ['Deus', 'O bem-estar', 'O sucesso', 'A saúde apenas'], 0, 'Finalidade.'),
    mc('O plano da OMS vai até:', ['2030', '2020', '2050', '2025'], 0, '2013–2030.'),
    disc('Planeje a ação de prevenção.', ['Objetivo e público', 'Atividades', 'Parcerias e encaminhamento', 'Avaliação']),
  ],
  resumo: ['Fatores de proteção e de risco.', 'Gratidão e sentido.', 'Fé: fim é Deus.', 'Não substitui tratamento.', 'Prevenção comunitária e rede.'],
  referencias: [
    { texto: 'Organização Mundial da Saúde, Plano de Ação Integral de Saúde Mental 2013–2030.' },
    { texto: 'Viktor Frankl, Em busca de sentido (1946).' },
    { texto: 'Harold G. Koenig, Michael McCullough e David Larson, Handbook of Religion and Health (2001).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de ação', 'Ler a fonte indicada'],
  revisao: [['Proteção', 'Sono, vínculos.'], ['13.819', 'Prevenção.'], ['Fé', 'Fim é Deus.']],
  avancado: {
    texto: `<h3>Primeiros cuidados psicológicos</h3>
<p>A OMS publicou um guia de primeiros cuidados psicológicos para situações de crise, baseado em observar, escutar e conectar ${tag('fato')}. A proposta é oferecer apoio humano básico, proteger, atender necessidades práticas e ligar a pessoa a serviços, sem forçar relatos nem fazer terapia improvisada ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Organização Mundial da Saúde, Primeiros cuidados psicológicos: guia para trabalhadores de campo (2011).' }],
    exercicios: [
      mc('Os três verbos-chave do guia são:', ['Observar, escutar e conectar', 'Diagnosticar, tratar e curar', 'Julgar, corrigir e punir', 'Ler, escrever e calcular'], 0, 'OMS.'),
      mc('Nos primeiros cuidados, deve-se evitar:', ['Forçar relatos', 'Escutar', 'Proteger', 'Conectar a serviços'], 0, 'Cuidado.'),
      mc('O guia é de:', ['2011', '1962', '2022', '1990'], 0, 'Data.'),
      disc('Descreva como aplicar os primeiros cuidados psicológicos após um acidente na escola.', ['Observar', 'Escutar', 'Conectar', 'Limites'])],
  },
}),

aula({
  id: 'ps5-4', titulo: 'Pesquisa: revisão de estudos sobre um tema', duracao: '180 min',
  aprendera: ['Formular uma pergunta de pesquisa delimitada', 'Buscar estudos em bases confiáveis', 'Avaliar a qualidade dos estudos', 'Redigir uma síntese com conclusão proporcional'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber o que a pesquisa realmente diz sobre um tema, sem depender de manchetes?</p>
<h3>Pergunta</h3>
<p>Escolha um tema delimitado: "o uso de celular à noite afeta o sono de adolescentes?", "a revisão espaçada melhora notas?", "práticas de gratidão aumentam o bem-estar?" ${tag('interpretacao')}.</p>
<h3>Busca</h3>
<p>Use bases como SciELO, Portal de Periódicos da CAPES, PubMed e Google Acadêmico ${tag('fato')}. Prefira revisões sistemáticas e meta-análises, que reúnem muitos estudos ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Para cada estudo: desenho (experimental, correlacional), tamanho da amostra, população, medidas, resultados, tamanho de efeito e limitações ${tag('fato')}. Desconfie de conclusões fortes a partir de um estudo isolado ${tag('argumento')}.</p>
<h3>Relatório</h3>
<p>Estrutura: pergunta; método de busca; tabela dos estudos; síntese dos resultados; limitações; conclusão proporcional; referências ${tag('interpretacao')}. Distinga o que os estudos mostram, o que sugerem e o que ainda não se sabe ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Revisão sistemática', 'Revisão que busca e avalia todos os estudos relevantes com método explícito.'],
    ['Meta-análise', 'Combinação estatística de resultados de vários estudos.'],
    ['Base de dados', 'Repositório de artigos científicos.'],
    ['Limitação', 'Aspecto do estudo que restringe suas conclusões.'],
    ['Conclusão proporcional', 'Conclusão do tamanho que as evidências permitem.'],
  ],
  exemplos: `<p><strong>Telas e sono:</strong> um estudante encontra uma meta-análise e cinco estudos. A maioria é correlacional; alguns experimentos curtos mostram efeitos pequenos da luz de telas. Sua conclusão: há associação consistente entre uso noturno de telas e pior sono, efeitos causais prováveis mas modestos, e mais pesquisas são necessárias.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Colaboração Cochrane produz revisões sistemáticas em saúde ${tag('fato')}. <strong>No Brasil:</strong> o SciELO reúne periódicos científicos brasileiros e latino-americanos de acesso aberto ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que preferir revisões a estudos isolados', tag: 'argumento',
    premissas: ['Estudos isolados podem ter resultados por acaso ou por falhas de método.', 'Revisões reúnem e avaliam muitos estudos.', 'Logo, revisões oferecem visão mais confiável do conjunto das evidências.'],
    conclusao: 'Logo, uma boa investigação parte de revisões e as completa com estudos recentes.',
    nota: 'Revisões também podem ter vieses; é preciso ler criticamente.',
  },
  objecoes: [
    { objecao: 'Basta procurar um artigo que confirme minha opinião.', tag: 'argumento',
      resposta: 'Isso é viés de confirmação. Quase sempre se acha algum estudo para qualquer opinião. A honestidade exige buscar o conjunto das evidências, inclusive as que contrariam a hipótese.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: pergunta, palavras-chave, bases de busca, critérios de inclusão, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'SciELO; Portal de Periódicos da CAPES; PubMed', link: { url: 'https://www.scielo.br', rotulo: 'SciELO Brasil' },
    orientacao: `<p>Faça uma busca-teste com suas palavras-chave e registre quantos resultados obteve e quais parecem relevantes.</p>`,
  },
  perguntas: [
    { p: 'O que é uma meta-análise?', r: 'A combinação estatística de resultados de vários estudos.' },
    { p: 'Por que preferir revisões?', r: 'Porque reúnem e avaliam muitos estudos.' },
    { p: 'O que é viés de confirmação?', r: 'Buscar apenas o que confirma a própria opinião.' },
  ],
  exercicios: [
    mc('A Colaboração Cochrane produz:', ['Revisões sistemáticas', 'Romances', 'Leis', 'Hinos'], 0, 'Saúde.'),
    mc('Uma conclusão proporcional é:', ['Do tamanho das evidências', 'A mais ousada', 'A mais popular', 'Sem fontes'], 0, 'Honestidade.'),
    mc('Buscar só o que confirma minha opinião é:', ['Viés de confirmação', 'Revisão sistemática', 'Meta-análise', 'Replicação'], 0, 'Viés.'),
    mc('O SciELO reúne periódicos:', ['Brasileiros e latino-americanos', 'Só europeus', 'Só pagos', 'Só de música'], 0, 'Base.'),
    mc('Desconfie de conclusões fortes baseadas em:', ['Um estudo isolado', 'Muitas revisões concordantes', 'Meta-análises de qualidade', 'Replicações'], 0, 'Cautela.'),
    disc('Apresente o pré-projeto completo.', ['Pergunta', 'Busca', 'Critérios', 'Cronograma e rubrica']),
  ],
  resumo: ['Pergunta delimitada.', 'Bases confiáveis.', 'Revisões e meta-análises.', 'Avaliação de qualidade.', 'Conclusão proporcional.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Open Science Collaboration, Science (2015).' },
    { texto: 'John Dunlosky e outros (2013).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Meta-análise', 'Combina.'], ['Viés', 'Confirmação.'], ['Proporcional', 'Evidências.']],
  avancado: {
    texto: `<h3>A pirâmide de evidências</h3>
<p>Na área da saúde, costuma-se ordenar as evidências: no topo, revisões sistemáticas e meta-análises; depois ensaios clínicos randomizados; depois estudos observacionais; na base, relatos de caso e opiniões de especialistas ${tag('fato')}. A pirâmide é útil, mas simplifica: um ensaio bem feito pode valer mais que uma revisão de estudos ruins ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Open Science Collaboration, Science (2015).' }],
    exercicios: [
      mc('No topo da pirâmide estão:', ['Revisões sistemáticas e meta-análises', 'Opiniões', 'Relatos de caso', 'Notícias'], 0, 'Hierarquia.'),
      mc('Ensaios randomizados ficam:', ['Logo abaixo das revisões', 'Na base', 'Fora da pirâmide', 'No topo sempre'], 0, 'Ordem.'),
      mc('A pirâmide deve ser usada:', ['Com senso crítico', 'Cegamente', 'Nunca', 'Só em música'], 0, 'Cautela.'),
      disc('Classifique os estudos do seu pré-projeto na pirâmide de evidências.', ['Estudos', 'Classificação', 'Qualidade', 'Comentário'])],
  },
}),

avaliacao('ps5-5', 'Avaliação integradora de Psicologia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Psicologia. Reúne questões de todos os módulos (PS1 a PS5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia seus quadros e ensaios.</li><li>Releia a rubrica da pesquisa (ps5-4).</li></ul>`,
[
  disc('Analise criticamente um estudo empírico de psicologia não visto no percurso: pergunta, desenho, amostra, resultados, limites e o que a notícia ou o resumo afirmam além dos dados.', ['Desenho', 'Resultados', 'Limites', 'Leitura crítica']),
  disc('Responda, com base em Aristóteles ou Tomás, numa escola psicológica moderna e no Catecismo, à pergunta: o que é a pessoa humana e o que a psicologia pode e não pode dizer sobre ela?', ['Filosofia clássica', 'Escola moderna', 'Doutrina', 'Argumentação']),
]),
];
