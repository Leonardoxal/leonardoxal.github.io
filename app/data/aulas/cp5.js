// Ciência Política V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Ciência Política).
// Políticas públicas e seu ciclo; participação, conselhos e sociedade civil; corrupção, controle e transparência;
// a investigação de quatro semanas com dados públicos. A avaliação final integra CP1 a CP5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cp5-1', titulo: 'Políticas públicas: ciclo, agenda e avaliação', duracao: '150 min',
  aprendera: ['Descrever o ciclo de políticas públicas', 'Explicar o modelo dos múltiplos fluxos de Kingdon', 'Distinguir resultado e impacto na avaliação', 'Analisar uma política pública brasileira pelo ciclo'],
  prereq: ['Ciência Política IV (módulo CP4)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que alguns problemas viram políticas públicas e outros não? E como saber se uma política funcionou?</p>
<h3>O ciclo</h3>
<p>Para fins de análise, a política pública é dividida em fases: formação da agenda, formulação de alternativas, decisão, implementação e avaliação ${tag('fato')}. Na realidade as fases se sobrepõem, mas o modelo ajuda a organizar perguntas ${tag('interpretacao')}.</p>
<h3>Agenda: os múltiplos fluxos</h3>
<p>John Kingdon (<em>Agendas, alternativas e políticas públicas</em>, 1984) descreveu três fluxos independentes — problemas, soluções disponíveis e política (eleições, humor nacional, coalizões) — que, ao se encontrarem, abrem uma janela de oportunidade para a mudança ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Resultado é o que a política entrega (por exemplo, número de famílias atendidas); impacto é a mudança causada por ela em comparação com o que teria ocorrido sem ela ${tag('fato')}. Medir o impacto exige um contrafactual: grupo de comparação, sorteio, ou comparação antes e depois com controles ${tag('argumento')}.</p>
<h3>No Brasil</h3>
<p>O Programa Bolsa Família, criado pela Lei nº 10.836/2004, transfere renda a famílias pobres com condicionalidades em saúde e educação, a partir do Cadastro Único ${tag('fato')}. Seus efeitos sobre pobreza, frequência escolar e saúde foram objeto de muitas avaliações, com resultados e interpretações discutidos ${tag('debate')}.</p>
<h3>A doutrina social</h3>
<p>A Igreja pede que as políticas sirvam ao bem comum e expressem o amor preferencial pelos pobres, sem anular a responsabilidade das pessoas e das famílias (Compêndio da Doutrina Social, 182 e 185–186) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Política pública', 'Ação ou programa do Estado para enfrentar um problema público.'],
    ['Agenda', 'Conjunto de temas que recebem atenção séria dos decisores.'],
    ['Janela de oportunidade', 'Momento em que problema, solução e política convergem.'],
    ['Implementação', 'Execução da política decidida.'],
    ['Impacto', 'Mudança causada pela política em relação ao contrafactual.'],
  ],
  exemplos: `<p><strong>Resultado e impacto:</strong> um programa de reforço escolar atendeu 5.000 alunos (resultado). As notas dos atendidos subiram 10 pontos; as de alunos parecidos não atendidos subiram 6 pontos. O impacto estimado é de 4 pontos, não de 10: os outros 6 teriam ocorrido de qualquer modo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a avaliação de impacto com grupos sorteados tornou-se comum em políticas sociais e de desenvolvimento ${tag('fato')}. <strong>No Brasil:</strong> o Instituto de Pesquisa Econômica Aplicada (Ipea) produz estudos de avaliação de políticas públicas federais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar com quem não recebeu a política', tag: 'argumento',
    premissas: ['Muitos fatores mudam ao mesmo tempo que uma política é aplicada.', 'A mudança observada nos beneficiários mistura o efeito da política e o desses fatores.', 'Um grupo parecido que não recebeu a política mostra a mudança devida aos outros fatores.'],
    conclusao: 'Logo, o impacto se estima comparando beneficiários com um grupo de comparação adequado.',
    nota: 'O grupo de comparação precisa ser parecido; do contrário, a diferença pode refletir quem foi escolhido, e não a política.',
  },
  objecoes: [
    { objecao: 'Se uma política é justa, não precisa ser avaliada.', tag: 'debate',
      resposta: 'O fim justo não garante que os meios funcionem. Avaliar permite corrigir falhas, usar melhor os recursos públicos, que são escassos, e prestar contas aos cidadãos. A justiça da intenção e a eficácia do meio são perguntas diferentes, e ambas importam.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise uma política pública brasileira pelo ciclo — como entrou na agenda, que alternativas havia, como foi decidida, como é implementada e o que dizem as avaliações —, com fontes.</p>`,
  fonte: {
    obra: 'John Kingdon, Agendas, alternativas e políticas públicas (1984), cap. 8; Lei nº 10.836/2004', link: { url: 'https://www.ipea.gov.br', rotulo: 'Ipea' },
    orientacao: `<p>Em Kingdon, o capítulo sobre janelas de oportunidade. Na Lei 10.836, os objetivos e as condicionalidades do programa. No Ipea, um estudo de avaliação de política pública.</p>`,
  },
  perguntas: [
    { p: 'Quais as fases do ciclo de políticas públicas?', r: 'Agenda, formulação, decisão, implementação e avaliação.' },
    { p: 'Quais os três fluxos de Kingdon?', r: 'Problemas, soluções e política.' },
    { p: 'Qual a diferença entre resultado e impacto?', r: 'Resultado é o que a política entrega; impacto é a mudança causada em relação ao contrafactual.' },
  ],
  exercicios: [
    mc('O modelo dos múltiplos fluxos é de:', ['Kingdon', 'Downs', 'Olson', 'Lijphart'], 0, '1984.'),
    mc('Beneficiários sobem 12 pontos e comparáveis não atendidos sobem 8. O impacto estimado é:', ['4 pontos', '8 pontos', '12 pontos', '20 pontos'], 0, '12 − 8.'),
    mc('O Bolsa Família foi criado pela:', ['Lei 8.142/1990', 'Lei 10.836/2004', 'Lei 12.527/2011', 'EC 97/2017'], 1, 'Transferência de renda.'),
    mc('Quando problema, solução e política convergem, abre-se:', ['Uma crise', 'Uma janela de oportunidade', 'Um referendo', 'Um impeachment'], 1, 'Kingdon.'),
    mc('O "número de famílias atendidas" é medida de:', ['Impacto', 'Resultado', 'Contrafactual', 'Agenda'], 1, 'Entrega.'),
    disc('Analise uma política pública brasileira pelas cinco fases do ciclo, com fontes.', ['Agenda', 'Formulação e decisão', 'Implementação', 'Avaliação com fontes']),
  ],
  resumo: ['Ciclo: agenda, formulação, decisão, implementação, avaliação.', 'Kingdon: três fluxos e janela.', 'Resultado e impacto.', 'Bolsa Família (Lei 10.836/2004).', 'Compêndio 182 e 185–186.'],
  referencias: [
    { texto: 'John Kingdon, Agendas, alternativas e políticas públicas (1984).' },
    { texto: 'Lei nº 10.836, de 2004 (Programa Bolsa Família).' },
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise pelo ciclo', 'Consultar as fontes indicadas'],
  revisao: [['Kingdon', 'Janela de oportunidade.'], ['Impacto', 'Contra o contrafactual.'], ['Lei 10.836', 'Bolsa Família.']],
  avancado: {
    texto: `<h3>Burocracia de nível de rua</h3>
<p>Michael Lipsky (<em>Street-Level Bureaucracy</em>, 1980) mostrou que professores, policiais e agentes de saúde, ao aplicar regras gerais a casos concretos com discricionariedade, acabam fazendo a política na prática ${tag('fato')}. Estudos brasileiros aplicaram o conceito a agentes comunitários de saúde e a profissionais da assistência social ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Michael Lipsky, Street-Level Bureaucracy (1980).' }],
    exercicios: [
      mc('Street-Level Bureaucracy é de:', ['Lipsky', 'Kingdon', 'Weber', 'Olson'], 0, '1980.'),
      mc('Os burocratas de nível de rua exercem:', ['Nenhuma escolha', 'Discricionariedade', 'Só funções legislativas', 'Funções judiciais'], 1, 'Aplicação a casos.'),
      mc('Um exemplo de burocrata de nível de rua é:', ['Ministro', 'Agente comunitário de saúde', 'Senador', 'Juiz do STF'], 1, 'Atendimento direto.'),
      disc('Descreva como a discricionariedade de agentes de linha de frente pode alterar uma política pública brasileira.', ['Política escolhida', 'Agentes', 'Efeito da discricionariedade', 'Evidência'])],
  },
}),

aula({
  id: 'cp5-2', titulo: 'Participação, conselhos e sociedade civil', duracao: '120 min',
  aprendera: ['Distinguir graus de participação', 'Explicar os conselhos de políticas públicas', 'Conhecer o orçamento participativo', 'Relacionar participação e doutrina social'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A participação política se limita a votar? Que outras formas existem, e quando ela é real e não apenas simbólica?</p>
<h3>Graus de participação</h3>
<p>Sherry Arnstein (1969) propôs uma "escada" da participação, da manipulação e da simples informação até a parceria e o controle cidadão ${tag('fato')}. A escada ajuda a perguntar quanto poder real os participantes têm ${tag('interpretacao')}.</p>
<h3>Conselhos no Brasil</h3>
<p>A Lei nº 8.142/1990 instituiu os conselhos e as conferências de saúde, com representação paritária dos usuários em relação ao conjunto dos demais segmentos ${tag('fato')}. Há conselhos em muitas áreas, como assistência social, educação e direitos da criança, nos três níveis da federação ${tag('fato')}.</p>
<h3>Orçamento participativo</h3>
<p>O orçamento participativo de Porto Alegre, iniciado em 1989, levou moradores a discutir e priorizar investimentos em assembleias regionais e tornou-se referência internacional ${tag('fato')}. Avaliações apontam ganhos de transparência e de inclusão e também limites de escala e de continuidade ${tag('debate')}.</p>
<h3>A doutrina social</h3>
<p>O Catecismo chama a participação o empenho voluntário e generoso da pessoa nas trocas sociais, e afirma que todos devem participar, cada um segundo seu lugar e papel, na promoção do bem comum (CIC 1913) ${tag('doutrina')}. O Compêndio vê nas associações da sociedade civil expressão da subjetividade da sociedade (n. 185 e 189–191) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Participação', 'Envolvimento dos cidadãos nas decisões públicas.'],
    ['Escada de Arnstein', 'Gradação da participação, da manipulação ao controle cidadão.'],
    ['Conselho de política pública', 'Órgão colegiado com representantes do governo e da sociedade.'],
    ['Paridade', 'Igualdade numérica entre segmentos representados.'],
    ['Orçamento participativo', 'Processo em que cidadãos priorizam investimentos públicos.'],
  ],
  exemplos: `<p><strong>Subindo a escada:</strong> uma prefeitura publica o projeto de uma praça (informação); faz uma audiência para ouvir sugestões (consulta); cria uma comissão com moradores que decide o desenho junto com os técnicos (parceria). O grau de poder dos moradores cresce a cada degrau.</p>`,
  contexto: `<p><strong>No mundo:</strong> experiências de orçamento participativo inspiradas em Porto Alegre foram adotadas em cidades de vários continentes ${tag('fato')}. <strong>No Brasil:</strong> a Constituição prevê a participação da comunidade na saúde (art. 198, III) e na assistência social (art. 204, II) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a participação local fortalece o bem comum', tag: 'argumento',
    premissas: ['Moradores conhecem problemas locais que técnicos distantes podem não ver.', 'Quem participa das decisões tende a fiscalizar e a cuidar do que foi decidido.', 'Decisões com informação local e fiscalização são, em regra, mais bem executadas.'],
    conclusao: 'Logo, a participação local tende a fortalecer o bem comum.',
    nota: 'A participação precisa de regras claras e informação; sem elas, pode ser capturada por grupos organizados.',
  },
  objecoes: [
    { objecao: 'Conselhos são só fachada; quem decide é sempre o governo.', tag: 'debate',
      resposta: 'Há conselhos com pouco poder real, e a escada de Arnstein ajuda a reconhecê-los. Mas há também conselhos com competências legais de aprovação e fiscalização, como os de saúde, que aprovam planos e prestações de contas. A pergunta correta é empírica: que poder cada conselho tem e usa.' },
  ],
  aplicacao: `<p>Escolha um conselho municipal da sua cidade: lei de criação, composição, competências, frequência das reuniões e uma decisão recente. Classifique-o na escada de Arnstein, com justificativa.</p>`,
  fonte: {
    obra: 'Sherry Arnstein, "A Ladder of Citizen Participation" (1969); Lei nº 8.142, de 1990; Catecismo da Igreja Católica, §§ 1913–1917', link: null,
    orientacao: `<p>Em Arnstein, os oito degraus. Na Lei 8.142, a composição dos conselhos de saúde. No Catecismo, a definição de participação. Use-os na aplicação.</p>`,
  },
  perguntas: [
    { p: 'O que é a escada de Arnstein?', r: 'Uma gradação da participação, da manipulação ao controle cidadão.' },
    { p: 'Que lei instituiu os conselhos de saúde?', r: 'A Lei nº 8.142/1990.' },
    { p: 'Onde e quando começou o orçamento participativo de referência?', r: 'Em Porto Alegre, em 1989.' },
  ],
  exercicios: [
    mc('A escada da participação é de:', ['Arnstein', 'Putnam', 'Kingdon', 'Lipsky'], 0, '1969.'),
    mc('Os conselhos de saúde foram instituídos pela:', ['Lei 8.142/1990', 'Lei 9.504/1997', 'Lei 10.836/2004', 'Lei 14.208/2021'], 0, 'Paridade.'),
    mc('O orçamento participativo de Porto Alegre começou em:', ['1979', '1989', '1999', '2009'], 1, 'Referência internacional.'),
    mc('Uma audiência para ouvir sugestões, sem poder de decisão, é:', ['Controle cidadão', 'Consulta', 'Parceria', 'Delegação'], 1, 'Degrau intermediário.'),
    mc('A definição de participação no Catecismo está no §:', ['1883', '1913', '2243', '2494'], 1, 'Bem comum.'),
    disc('Apresente um conselho municipal da sua cidade e classifique-o na escada de Arnstein, com justificativa.', ['Lei e composição', 'Competências', 'Decisão recente', 'Classificação justificada']),
  ],
  resumo: ['Escada de Arnstein.', 'Conselhos: Lei 8.142/1990, paridade.', 'Orçamento participativo (Porto Alegre, 1989).', 'CF arts. 198 e 204.', 'CIC 1913; Compêndio 185 e 189–191.'],
  referencias: [
    { texto: 'Sherry Arnstein, "A Ladder of Citizen Participation" (1969).' },
    { texto: 'Lei nº 8.142, de 1990.' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1913–1917.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do conselho', 'Ler os textos indicados'],
  revisao: [['Arnstein', 'Escada.'], ['Lei 8.142', 'Conselhos de saúde.'], ['CIC 1913', 'Participação.']],
  avancado: {
    texto: `<h3>Sociedade civil e Estado</h3>
<p>Organizações da sociedade civil executam parte das políticas públicas em parceria com o Estado. No Brasil, o Marco Regulatório das Organizações da Sociedade Civil (Lei nº 13.019/2014) regula essas parcerias ${tag('fato')}. A doutrina social valoriza essas organizações, desde que não se tornem meros prolongamentos do Estado nem percam sua finalidade própria ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Lei nº 13.019, de 2014.' }],
    exercicios: [
      mc('O Marco Regulatório das Organizações da Sociedade Civil é a Lei:', ['8.142/1990', '13.019/2014', '12.846/2013', '9.504/1997'], 1, 'Parcerias.'),
      mc('A lei regula:', ['Eleições', 'Parcerias entre Estado e organizações civis', 'Partidos', 'Impostos'], 1, 'MROSC.'),
      mc('A doutrina social adverte contra organizações que:', ['Ajudam os pobres', 'Se tornam meros prolongamentos do Estado', 'Têm voluntários', 'Recebem doações'], 1, 'Finalidade própria.'),
      disc('Analise uma parceria entre poder público e organização da sociedade civil na sua cidade, à luz da subsidiariedade.', ['Parceria descrita', 'Base legal', 'Subsidiariedade', 'Avaliação'])],
  },
}),

aula({
  id: 'cp5-3', titulo: 'Corrupção, controle e transparência', duracao: '150 min',
  aprendera: ['Explicar a fórmula de Klitgaard', 'Conhecer os órgãos de controle no Brasil', 'Usar a Lei de Acesso à Informação e o Portal da Transparência', 'Distinguir percepção de corrupção e corrupção medida'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que a corrupção é mais frequente em certas situações, e que instituições ajudam a controlá-la?</p>
<h3>Uma fórmula</h3>
<p>Robert Klitgaard (<em>A corrupção sob controle</em>, 1988) resumiu as condições que favorecem a corrupção: monopólio mais discricionariedade menos responsabilização (C = M + D − A) ${tag('fato')}. É uma heurística, não uma lei exata, mas orienta reformas: reduzir monopólios, limitar a discricionariedade e aumentar a prestação de contas ${tag('interpretacao')}.</p>
<h3>Órgãos de controle</h3>
<p>No Brasil, o controle externo é exercido pelo Congresso com o auxílio do Tribunal de Contas da União (CF, arts. 70–71) ${tag('fato')}. A Controladoria-Geral da União faz controle interno e auditoria no Executivo federal ${tag('fato')}. O Ministério Público pode propor ações por improbidade e penais ${tag('fato')}.</p>
<h3>Transparência</h3>
<p>A Lei de Acesso à Informação (Lei nº 12.527/2011) garante a qualquer pessoa o direito de pedir informações a órgãos públicos, sem precisar justificar o motivo ${tag('fato')}. O Portal da Transparência do governo federal publica despesas, transferências e servidores ${tag('fato')}.</p>
<h3>Medir</h3>
<p>Índices como o de Percepção da Corrupção, da Transparência Internacional, medem a percepção de especialistas e empresários, não a corrupção ocorrida ${tag('fato')}. Outros estudos usam auditorias por sorteio de municípios ou dados de processos ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo condena como moralmente ilícitas a corrupção e as práticas que levam quem decide a agir contra o direito (CIC 2409) ${tag('doutrina')}. O Compêndio vê na corrupção política uma das deformações mais graves do sistema democrático (n. 411) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Corrupção', 'Uso de cargo público para ganho privado indevido.'],
    ['Discricionariedade', 'Margem de escolha de quem decide.'],
    ['Responsabilização (accountability)', 'Obrigação de prestar contas e sofrer consequências.'],
    ['Controle externo', 'Fiscalização de um Poder por outro órgão (no Brasil, Congresso e TCU).'],
    ['Transparência ativa', 'Publicação de informações sem necessidade de pedido.'],
  ],
  exemplos: `<p><strong>Aplicando Klitgaard:</strong> um único servidor decide sozinho (monopólio), sem critérios escritos (discricionariedade) e sem registro público (pouca responsabilização) quem recebe uma licença. A reforma sugerida: sistema eletrônico com critérios públicos, decisão registrada e auditoria por amostra.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção das Nações Unidas contra a Corrupção foi adotada em 2003 ${tag('fato')}. <strong>No Brasil:</strong> a partir de 2003 a CGU passou a fiscalizar municípios sorteados, e esses relatórios foram usados em pesquisas acadêmicas sobre corrupção local ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a transparência reduz oportunidades de corrupção', tag: 'argumento',
    premissas: ['A corrupção depende de que o ato indevido não seja descoberto ou punido.', 'A publicação de gastos e decisões aumenta a chance de descoberta por imprensa, cidadãos e órgãos de controle.', 'Maior chance de descoberta aumenta o risco esperado do ato corrupto.'],
    conclusao: 'Logo, a transparência tende a reduzir as oportunidades de corrupção.',
    nota: 'A transparência precisa vir acompanhada de capacidade de investigação e punição; dados publicados que ninguém lê pouco dissuadem.',
  },
  objecoes: [
    { objecao: 'Corrupção é questão de caráter; instituições não mudam nada.', tag: 'debate',
      resposta: 'O caráter importa, e a formação moral é indispensável. Mas as mesmas pessoas agem de modo diferente conforme os incentivos e os controles a que estão sujeitas, como mostram estudos comparados. Virtude pessoal e instituições bem desenhadas se reforçam; não são alternativas.' },
  ],
  aplicacao: `<p>Use o Portal da Transparência ou um pedido pela Lei de Acesso à Informação para levantar um gasto público do seu município ou estado. Descreva o que encontrou, o que faltou e como poderia ser fiscalizado.</p>`,
  fonte: {
    obra: 'Robert Klitgaard, A corrupção sob controle (1988), cap. 3; Lei nº 12.527/2011; Constituição de 1988, arts. 70–71', link: { url: 'https://portaldatransparencia.gov.br', rotulo: 'Portal da Transparência' },
    orientacao: `<p>Em Klitgaard, a fórmula e as estratégias de reforma. Na LAI, os prazos e o direito de pedir sem justificativa. Na Constituição, as competências do TCU.</p>`,
  },
  perguntas: [
    { p: 'Qual a fórmula de Klitgaard?', r: 'Corrupção = monopólio + discricionariedade − responsabilização.' },
    { p: 'Quem exerce o controle externo no Brasil?', r: 'O Congresso, com o auxílio do Tribunal de Contas da União.' },
    { p: 'O que mede o Índice de Percepção da Corrupção?', r: 'A percepção de especialistas e empresários, não a corrupção ocorrida.' },
  ],
  exercicios: [
    mc('Na fórmula de Klitgaard, aumentar a responsabilização tende a:', ['Aumentar a corrupção', 'Reduzir a corrupção', 'Não mudar nada', 'Criar monopólios'], 1, 'C = M + D − A.'),
    mc('O TCU auxilia o Congresso no controle:', ['Interno', 'Externo', 'Eleitoral', 'Religioso'], 1, 'Arts. 70–71.'),
    mc('Pela LAI, quem pede informação:', ['Precisa justificar', 'Não precisa justificar o motivo', 'Precisa ser servidor', 'Paga taxa sempre'], 1, 'Lei 12.527/2011.'),
    mc('O Índice de Percepção da Corrupção mede:', ['Processos julgados', 'Percepção', 'Valores desviados', 'Prisões'], 1, 'Transparência Internacional.'),
    mc('A Convenção da ONU contra a Corrupção é de:', ['1948', '1992', '2003', '2015'], 2, 'Nações Unidas.'),
    disc('Levante um gasto público pelo Portal da Transparência ou pela LAI e descreva o que encontrou, o que faltou e como fiscalizá-lo.', ['Fonte usada', 'Dados encontrados', 'Lacunas', 'Proposta de fiscalização']),
  ],
  resumo: ['Klitgaard: C = M + D − A.', 'TCU, CGU, Ministério Público.', 'LAI (2011) e Portal da Transparência.', 'Percepção não é medida direta.', 'CIC 2409; Compêndio 411.'],
  referencias: [
    { texto: 'Robert Klitgaard, A corrupção sob controle (1988).' },
    { texto: 'Lei nº 12.527, de 2011 (Lei de Acesso à Informação).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 2409.', livro: 'cic' },
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004), n. 411.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o levantamento do gasto público', 'Consultar as fontes oficiais'],
  revisao: [['Klitgaard', 'Monopólio, discricionariedade, responsabilização.'], ['LAI', 'Sem justificar.'], ['IPC', 'Percepção.']],
  avancado: {
    texto: `<h3>Auditorias e eleições</h3>
<p>Claudio Ferraz e Frederico Finan usaram os relatórios das auditorias da CGU em municípios sorteados e mostraram que a divulgação de irregularidades antes das eleições municipais de 2004 reduziu as chances de reeleição dos prefeitos mais irregulares ${tag('interpretacao')}. Como os municípios foram sorteados, a comparação aproxima-se de um experimento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Claudio Ferraz e Frederico Finan, "Exposing Corrupt Politicians" (2008).' }],
    exercicios: [
      mc('Ferraz e Finan usaram relatórios da:', ['CGU', 'ONU', 'OCDE', 'FIFA'], 0, 'Auditorias.'),
      mc('Os municípios auditados eram escolhidos por:', ['Indicação', 'Sorteio', 'Tamanho', 'Partido do prefeito'], 1, 'Quase experimento.'),
      mc('A divulgação de irregularidades reduziu:', ['O comparecimento', 'A reeleição dos prefeitos mais irregulares', 'O número de partidos', 'Os impostos'], 1, 'Eleições de 2004.'),
      disc('Explique por que o sorteio dos municípios fortalece a conclusão de Ferraz e Finan.', ['Desenho', 'Papel do sorteio', 'Conclusão', 'Limites'])],
  },
}),

aula({
  id: 'cp5-4', titulo: 'Investigação política de quatro semanas: pergunta, dados públicos, análise e relatório', duracao: '180 min',
  aprendera: ['Formular uma pergunta empírica e uma hipótese testável', 'Coletar dados públicos (TSE, câmaras, portais de transparência)', 'Organizar e analisar os dados com tabelas e gráficos', 'Redigir um relatório com conclusão proporcional'],
  prereq: ['Todas as aulas anteriores de Ciência Política'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação própria de quatro semanas, com dados públicos. Esta aula é o roteiro.</p>
<h3>1. Pergunta e hipótese</h3>
<p>Exemplos: "os vereadores da minha cidade votam alinhados com o prefeito?"; "qual o perfil (gênero, idade, ocupação) dos candidatos a vereador no meu município e dos eleitos?"; "a abstenção variou entre as zonas eleitorais da cidade?" A hipótese deve prever um resultado verificável ${tag('argumento')}.</p>
<h3>2. Dados</h3>
<p>O TSE publica dados abertos de candidaturas, resultados e comparecimento; câmaras municipais publicam atas e votações; portais de transparência publicam gastos ${tag('fato')}. Registre a fonte, a data de acesso e o que cada variável significa ${tag('fato')}.</p>
<h3>3. Análise</h3>
<p>Organize os dados numa planilha, calcule proporções e médias, compare grupos e faça gráficos simples ${tag('fato')}. Discuta o que os dados não mostram e as explicações alternativas ${tag('argumento')}.</p>
<h3>4. Relatório</h3>
<p>Pergunta e hipótese; fontes e método; resultados; discussão; limites; conclusão proporcional; referências ABNT ${tag('fato')}.</p>
<h3>Ética</h3>
<p>Mesmo dados públicos de pessoas devem ser tratados com finalidade definida e sem exposição desnecessária, em respeito à Lei Geral de Proteção de Dados (Lei nº 13.709/2018) ${tag('fato')}. Descreva e analise com imparcialidade; o relatório não é peça de campanha ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Pergunta empírica', 'Pergunta que pode ser respondida com dados.'],
    ['Dados abertos', 'Dados públicos em formato que permite reutilização.'],
    ['Variável', 'Característica medida, como gênero, idade ou voto.'],
    ['Proporção', 'Parte de um total, geralmente em porcentagem.'],
    ['Conclusão proporcional', 'Conclusão que não vai além do que os dados sustentam.'],
  ],
  exemplos: `<p><strong>Um resultado e sua conclusão:</strong> no município, 35% dos candidatos a vereador eram mulheres e 15% dos eleitos. Conclusão proporcional: nessa eleição, as mulheres foram eleitas em proporção menor que a de candidatas. Não se pode concluir, só com esses dados, a causa da diferença; é preciso examinar recursos de campanha, partidos e outros fatores.</p>`,
  contexto: `<p><strong>No mundo:</strong> a abertura de dados governamentais ampliou a pesquisa política feita por cidadãos, jornalistas e universidades ${tag('interpretacao')}. <strong>No Brasil:</strong> a lei eleitoral exige que cada partido ou federação reserve no mínimo 30% e no máximo 70% das candidaturas proporcionais para cada sexo (Lei nº 9.504/1997, art. 10, § 3º) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que registrar fonte e data de acesso', tag: 'argumento',
    premissas: ['Bases de dados públicas são atualizadas e corrigidas ao longo do tempo.', 'Outra pessoa só pode conferir o resultado se souber exatamente que dados foram usados.', 'Sem fonte e data, a pesquisa não pode ser verificada nem corrigida.'],
    conclusao: 'Logo, registrar fonte e data de acesso é condição para que a pesquisa seja verificável.',
    nota: 'Guardar uma cópia dos dados usados é boa prática.',
  },
  objecoes: [
    { objecao: 'Pesquisar política local é inevitavelmente tomar partido.', tag: 'debate',
      resposta: 'O pesquisador tem preferências, mas pode escolher a pergunta antes de ver os dados, usar fontes públicas, aplicar o mesmo critério a todos os atores e relatar resultados que contrariem suas expectativas. Esses procedimentos não eliminam o risco, mas permitem que outros o verifiquem.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: pergunta, hipótese, fontes de dados com endereço, variáveis, cronograma de quatro semanas e cuidados éticos.</p>`,
  fonte: {
    obra: 'Tribunal Superior Eleitoral, Portal de Dados Abertos; Lei nº 13.709/2018 (LGPD); ABNT, NBR 6023', link: { url: 'https://dadosabertos.tse.jus.br', rotulo: 'Dados abertos do TSE' },
    orientacao: `<p>No portal do TSE, localize as bases de candidaturas e de resultados do seu município. Na LGPD, os princípios de finalidade e necessidade. Na NBR 6023, o formato das referências do relatório.</p>`,
  },
  perguntas: [
    { p: 'Quanto dura a investigação final?', r: 'Quatro semanas.' },
    { p: 'Onde encontrar dados de candidaturas?', r: 'No portal de dados abertos do TSE.' },
    { p: 'Que lei orienta o tratamento de dados pessoais?', r: 'A Lei Geral de Proteção de Dados (Lei nº 13.709/2018).' },
  ],
  exercicios: [
    mc('Qual destas é uma pergunta empírica?', ['Qual o melhor partido?', 'Que proporção dos eleitos é mulher?', 'A política é boa?', 'O que é justiça?'], 1, 'Respondível com dados.'),
    mc('35% de candidatas e 15% de eleitas permite concluir:', ['A causa da diferença', 'Que as mulheres foram eleitas em proporção menor que a de candidatas', 'Que houve fraude', 'Nada'], 1, 'Conclusão proporcional.'),
    mc('A reserva mínima de candidaturas por sexo é de:', ['10%', '20%', '30%', '50%'], 2, 'Lei 9.504/1997, art. 10, § 3º.'),
    mc('Registrar fonte e data de acesso serve para:', ['Enfeitar', 'Permitir a verificação', 'Esconder dados', 'Nada'], 1, 'Verificabilidade.'),
    mc('O relatório da investigação deve ser:', ['Peça de campanha', 'Análise imparcial com conclusão proporcional', 'Opinião pessoal', 'Denúncia anônima'], 1, 'Ética.'),
    disc('Apresente o pré-projeto: pergunta, hipótese, fontes com endereço, variáveis, cronograma e cuidados éticos.', ['Pergunta e hipótese', 'Fontes e variáveis', 'Cronograma', 'Ética']),
  ],
  resumo: ['Pergunta empírica e hipótese.', 'Dados abertos (TSE, câmaras, transparência).', 'Planilha, proporções, gráficos.', 'Relatório com conclusão proporcional.', 'LGPD e imparcialidade.'],
  referencias: [
    { texto: 'Tribunal Superior Eleitoral, Portal de Dados Abertos.', link: { url: 'https://dadosabertos.tse.jus.br', rotulo: 'TSE' } },
    { texto: 'Lei nº 13.709, de 2018 (LGPD).' },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar a coleta de dados'],
  revisao: [['Quatro semanas', 'Duração.'], ['Fonte e data', 'Verificação.'], ['30%', 'Reserva por sexo.']],
  avancado: {
    texto: `<h3>Índice de Rice</h3>
<p>Para medir a coesão de um partido numa votação, usa-se o índice de Rice: a diferença absoluta entre as porcentagens de votos "sim" e "não" dos membros do partido ${tag('fato')}. Se 90% votam sim e 10% não, o índice é 80; se a bancada se divide ao meio, o índice é 0 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Manuais de métodos de análise legislativa.' }],
    exercicios: [
      mc('Com 90% sim e 10% não, o índice de Rice é:', ['10', '80', '90', '100'], 1, '90 − 10.'),
      mc('Com a bancada dividida ao meio, o índice é:', ['0', '50', '100', '25'], 0, 'Sem coesão.'),
      mc('O índice de Rice mede:', ['Fragmentação', 'Coesão partidária numa votação', 'Comparecimento', 'Corrupção'], 1, 'Votações.'),
      disc('Calcule o índice de Rice de duas bancadas numa votação da câmara municipal ou da Câmara dos Deputados e interprete.', ['Votação escolhida', 'Cálculos', 'Interpretação', 'Fonte'])],
  },
}),

avaliacao('cp5-5', 'Avaliação integradora de Ciência Política', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Ciência Política. Reúne questões de todos os módulos (CP1 a CP5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos (quociente eleitoral, margem de erro, número efetivo de partidos, impacto).</li><li>Releia a rubrica da investigação (cp5-4).</li></ul>`,
[
  disc('Interprete um quadro de resultados eleitorais brasileiros (de uma eleição à sua escolha, com fonte): descreva os números, calcule um indicador estudado no percurso e explique o resultado com conceitos de pelo menos dois módulos.', ['Dados com fonte', 'Indicador calculado', 'Explicação com conceitos', 'Conclusão proporcional']),
  disc('Leia um trecho de um clássico estudado (Aristóteles, Tomás, Locke, Madison ou Tocqueville) e mostre o que ele ajuda a compreender sobre uma instituição brasileira atual, distinguindo descrição empírica, juízo normativo e doutrina da Igreja.', ['Trecho interpretado', 'Instituição brasileira', 'Três planos distinguidos', 'Argumentação clara']),
]),
];
