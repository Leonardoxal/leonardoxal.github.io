// Estatística V — aplicações, investigação com dados públicos e avaliação integradora (etapas 9 a 11 do percurso de Estatística).
// Pesquisas eleitorais e de opinião; saúde: ensaios clínicos e riscos; indicadores econômicos e sociais;
// investigação de quatro semanas; avaliação integradora.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'es5-1', titulo: 'Pesquisas eleitorais e de opinião: como ler sem se enganar', duracao: '150 min',
  aprendera: ['Conhecer as regras brasileiras de registro de pesquisas', 'Distinguir voto espontâneo, estimulado e válido', 'Interpretar empates técnicos e tendências', 'Avaliar a redação das perguntas'],
  prereq: ['Estatística IV (módulo ES4)'],
  explicacao: `
<h3>O problema</h3>
<p>A cada eleição, pesquisas divergem, acertam ou erram, e são acusadas de manipular. Como lê-las com critério?</p>
<h3>Regras brasileiras</h3>
<p>A Lei nº 9.504/1997 exige que as pesquisas eleitorais divulgadas sejam registradas na Justiça Eleitoral antes da divulgação, com contratante, valor, metodologia, plano amostral, margem de erro e questionário (art. 33) ${tag('fato')}. A divulgação de pesquisa fraudulenta é crime (art. 33, § 4º) ${tag('fato')}.</p>
<h3>Tipos de resultado</h3>
<p>Na pergunta espontânea, o entrevistado diz o nome sem ver lista; na estimulada, escolhe numa lista ${tag('fato')}. Votos válidos excluem brancos, nulos e indecisos; por isso as porcentagens de votos válidos são maiores que as de votos totais ${tag('fato')}. Se A tem 40%, B 30% e 20% são brancos, nulos ou indecisos, A tem 40 ÷ 80 = 50% dos válidos ${tag('fato')}.</p>
<h3>Tendência e ruído</h3>
<p>Uma oscilação de 1 ou 2 pontos entre duas pesquisas pode ser só erro amostral ${tag('fato')}. Tendências se percebem melhor comparando várias pesquisas do mesmo instituto e agregadores que combinam institutos ${tag('interpretacao')}.</p>
<h3>Perguntas</h3>
<p>A redação e a ordem das perguntas influenciam as respostas: perguntas que sugerem a resposta ou vêm depois de perguntas que "preparam" o entrevistado produzem viés ${tag('fato')}. Por isso o questionário registrado deve ser lido ${tag('interpretacao')}.</p>
<h3>Erros reais</h3>
<p>Pesquisas podem errar por mudança de voto de última hora, abstenção diferente da prevista, entrevistados que não revelam o voto ou amostras mal calibradas ${tag('fato')}. Erro não é necessariamente fraude ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Registro de pesquisa', 'Comunicação obrigatória da pesquisa à Justiça Eleitoral antes da divulgação.'],
    ['Pergunta espontânea', 'Entrevistado responde sem ver lista de candidatos.'],
    ['Pergunta estimulada', 'Entrevistado escolhe numa lista apresentada.'],
    ['Votos válidos', 'Votos excluídos brancos, nulos e indecisos.'],
    ['Agregador', 'Média ponderada de várias pesquisas.'],
  ],
  exemplos: `<p><strong>Lendo duas pesquisas:</strong> na semana 1, A tem 38% e B 35%; na semana 2, A tem 37% e B 36%, margem de 2 pontos. Manchete: "B se aproxima de A". Mas ambas as variações estão dentro da margem; a leitura correta é "empate técnico estável". Só uma sequência de pesquisas na mesma direção indicaria tendência.</p>`,
  contexto: `<p><strong>No mundo:</strong> erros de pesquisas em eleições de vários países levaram a revisões de métodos de ponderação ${tag('fato')}. <strong>No Brasil:</strong> o sistema PesqEle, do TSE, permite consultar as pesquisas registradas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ler o questionário é indispensável', tag: 'argumento',
    premissas: ['As respostas dependem das perguntas.', 'Perguntas tendenciosas ou mal ordenadas produzem resultados enviesados, qualquer que seja a amostra.', 'O questionário é público no registro.'],
    conclusao: 'Logo, avaliar uma pesquisa exige ler as perguntas, e não só os números.',
    nota: 'O mesmo vale para pesquisas de opinião sobre temas morais e políticos.',
  },
  objecoes: [
    { objecao: 'Pesquisas eleitorais deveriam ser proibidas porque influenciam o voto.', tag: 'debate',
      resposta: 'Há quem defenda restrições perto da eleição, e alguns países as adotam. Outros argumentam que proibir priva o eleitor de informação e que a transparência e a fiscalização são melhores remédios. O debate envolve liberdade de informação e integridade eleitoral.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (primeira parte): consulte uma pesquisa eleitoral registrada e interprete-a: amostra, margem, votos totais e válidos, redação das perguntas e se há empate técnico.</p>`,
  fonte: {
    obra: 'Lei nº 9.504/1997, art. 33; sistema PesqEle do TSE', link: { url: 'https://www.tse.jus.br', rotulo: 'Tribunal Superior Eleitoral' },
    orientacao: `<p>Leia o art. 33 e, no sistema do TSE, abra o registro de uma pesquisa e o questionário.</p>`,
  },
  perguntas: [
    { p: 'Que lei exige o registro das pesquisas eleitorais?', r: 'A Lei nº 9.504/1997, art. 33.' },
    { p: 'A tem 40%, B 30% e 20% brancos, nulos ou indecisos: quanto A tem dos válidos?', r: '50%.' },
    { p: 'Uma oscilação de 1 ponto indica tendência?', r: 'Não necessariamente; pode ser erro amostral.' },
  ],
  exercicios: [
    mc('Votos válidos excluem:', ['Brancos, nulos e indecisos', 'Só brancos', 'Só o líder', 'Nada'], 0, 'Definição.'),
    mc('A com 30% e 25% de brancos, nulos e indecisos tem dos válidos:', ['30%', '40%', '55%', '25%'], 1, '30 ÷ 75.'),
    mc('Pergunta com lista de candidatos é:', ['Espontânea', 'Estimulada', 'Aberta', 'Válida'], 1, 'Lista.'),
    mc('Divulgar pesquisa fraudulenta é:', ['Permitido', 'Crime', 'Recomendado', 'Indiferente'], 1, 'Art. 33, § 4º.'),
    mc('Para ver tendência, o melhor é comparar:', ['Uma pesquisa', 'Várias pesquisas', 'Manchetes', 'Opiniões'], 1, 'Agregação.'),
    disc('Interprete uma pesquisa eleitoral registrada: amostra, margem, válidos, perguntas e empate técnico.', ['Registro', 'Números', 'Perguntas', 'Conclusão']),
  ],
  resumo: ['Lei 9.504/1997, art. 33: registro.', 'Espontânea × estimulada.', 'Votos válidos.', 'Oscilação dentro da margem ≠ tendência.', 'Ler o questionário.'],
  referencias: [
    { texto: 'Lei nº 9.504, de 1997 (Lei das Eleições), art. 33.' },
    { texto: 'Tribunal Superior Eleitoral, resoluções sobre pesquisas eleitorais.' },
    { texto: 'Darrell Huff, Como mentir com estatística (1954).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a interpretação da pesquisa', 'Consultar a fonte oficial'],
  revisao: [['Art. 33', 'Registro.'], ['Válidos', 'Sem brancos e nulos.'], ['Questionário', 'Ler sempre.']],
  avancado: {
    texto: `<h3>Ponderação</h3>
<p>Como amostras raramente reproduzem perfeitamente a população, os institutos ponderam as respostas para ajustar sexo, idade, escolaridade e região às proporções conhecidas ${tag('fato')}. A ponderação reduz vieses conhecidos, mas não corrige vieses em características não medidas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Tribunal Superior Eleitoral, registros de pesquisas (plano amostral e ponderação).' }],
    exercicios: [
      mc('Ponderar significa:', ['Ajustar pesos para refletir a população', 'Descartar respostas', 'Inventar dados', 'Aumentar a amostra'], 0, 'Ajuste.'),
      mc('A ponderação corrige vieses em características:', ['Medidas', 'Não medidas', 'Todas', 'Nenhuma'], 0, 'Limite.'),
      mc('Variáveis comuns de ponderação:', ['Sexo, idade, escolaridade e região', 'Signo e cor favorita', 'Altura', 'Nome'], 0, 'Censo.'),
      disc('Explique, com um exemplo numérico, como a ponderação corrige uma amostra com excesso de jovens.', ['Amostra', 'Pesos', 'Resultado', 'Limites'])],
  },
}),

aula({
  id: 'es5-2', titulo: 'Estatística na saúde: ensaios clínicos, riscos e número necessário para tratar', duracao: '150 min',
  aprendera: ['Descrever um ensaio clínico randomizado', 'Calcular risco relativo, redução absoluta e NNT', 'Ler o resultado de um estudo de saúde', 'Conhecer os princípios éticos da pesquisa com seres humanos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"Novo remédio reduz em 30% o risco de infarto." Vale a pena? Depende de números que a manchete não mostra.</p>
<h3>O ensaio clínico</h3>
<p>No ensaio clínico randomizado, os participantes são sorteados para o tratamento ou o controle (placebo ou tratamento padrão); no duplo-cego, nem participantes nem avaliadores sabem quem recebeu o quê ${tag('fato')}. O sorteio controla confundidores; o cegamento evita vieses de expectativa ${tag('fato')}.</p>
<h3>Medidas de efeito</h3>
<p>Suponha risco de infarto de 10% no controle e 7% no tratado ${tag('fato')}. Risco relativo: 7 ÷ 10 = 0,7, ou redução relativa de 30% ${tag('fato')}. Redução absoluta do risco: 10% − 7% = 3 pontos percentuais ${tag('fato')}. Número necessário para tratar (NNT): 1 ÷ 0,03 ≈ 33 — é preciso tratar cerca de 33 pessoas para evitar um infarto ${tag('fato')}. Se o risco de base fosse 1% e caísse para 0,7%, a redução relativa seria a mesma, mas o NNT seria cerca de 333 ${tag('fato')}.</p>
<h3>Efeitos adversos</h3>
<p>Um estudo honesto relata também efeitos adversos, com o "número necessário para causar dano" ${tag('fato')}. A decisão pondera benefícios e riscos para cada paciente ${tag('interpretacao')}.</p>
<h3>Ética</h3>
<p>A Declaração de Helsinque, da Associação Médica Mundial (1964, revista várias vezes), fixa princípios éticos da pesquisa médica: consentimento livre e esclarecido, avaliação por comitê e primazia do bem do participante ${tag('fato')}. No Brasil, o sistema CEP/CONEP avalia a ética das pesquisas com seres humanos ${tag('fato')}. A Igreja ensina que a pesquisa com pessoas exige consentimento e não pode expô-las a riscos desproporcionais (CIC 2295) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Ensaio clínico randomizado', 'Estudo em que o tratamento é atribuído por sorteio.'],
    ['Duplo-cego', 'Nem participantes nem avaliadores sabem quem recebeu o tratamento.'],
    ['Redução absoluta do risco', 'Diferença entre os riscos do controle e do tratado.'],
    ['NNT', 'Número de pessoas a tratar para evitar um evento: 1 ÷ redução absoluta.'],
    ['Consentimento livre e esclarecido', 'Concordância informada do participante.'],
  ],
  exemplos: `<p><strong>Mesma manchete, dois remédios:</strong> ambos "reduzem o risco em 30%". O primeiro, para pacientes de alto risco (10% → 7%), tem NNT de 33. O segundo, para pessoas saudáveis (1% → 0,7%), tem NNT de 333. Se ambos têm os mesmos efeitos colaterais, o segundo pode trazer mais dano do que benefício para muita gente.</p>`,
  contexto: `<p><strong>No mundo:</strong> diretrizes de comunicação em saúde recomendam informar riscos absolutos e frequências naturais ${tag('fato')}. <strong>No Brasil:</strong> a Anvisa e a CONEP regulam, respectivamente, o registro de medicamentos e a ética das pesquisas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o NNT ajuda a decidir', tag: 'argumento',
    premissas: ['A redução relativa não muda com o risco de base, mas o benefício real muda.', 'O NNT traduz o benefício em número de pessoas tratadas.', 'Comparado com custos e efeitos adversos, permite uma decisão proporcional.'],
    conclusao: 'Logo, o NNT torna visível o benefício real de um tratamento.',
    nota: 'A decisão final considera também os valores e a situação do paciente.',
  },
  objecoes: [
    { objecao: 'Se um estudo mostra efeito significativo, o tratamento deve ser usado por todos.', tag: 'argumento',
      resposta: 'Significância não mede tamanho nem relevância do efeito, e o benefício depende do risco de base de cada pessoa. Um efeito significativo e pequeno, em pessoas de baixo risco, pode não compensar efeitos adversos e custos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (segunda parte): leia o resumo de um ensaio clínico (ou uma notícia sobre ele), identifique o desenho, calcule o risco relativo, a redução absoluta e o NNT, e escreva como explicaria o resultado a um paciente.</p>`,
  fonte: {
    obra: 'Associação Médica Mundial, Declaração de Helsinque; Catecismo, § 2295', link: null,
    orientacao: `<p>Na Declaração, identifique os princípios de consentimento e de avaliação ética. No Catecismo, as condições morais da pesquisa com pessoas.</p>`,
  },
  perguntas: [
    { p: 'Risco de 10% para 7%: qual o NNT?', r: 'Cerca de 33.' },
    { p: 'Por que o sorteio é essencial num ensaio clínico?', r: 'Porque controla os confundidores.' },
    { p: 'O que é duplo-cego?', r: 'Nem participantes nem avaliadores sabem quem recebeu o tratamento.' },
  ],
  exercicios: [
    mc('Risco de 20% para 15%: redução absoluta de:', ['5 pontos', '25%', '15%', '35%'], 0, '20 − 15.'),
    mc('No mesmo caso, a redução relativa é:', ['5%', '25%', '15%', '75%'], 1, '5 ÷ 20.'),
    mc('NNT com redução absoluta de 5 pontos:', ['5', '20', '50', '100'], 1, '1 ÷ 0,05.'),
    mc('A Declaração de Helsinque é de:', ['1947', '1964', '1988', '2016'], 1, 'Associação Médica Mundial.'),
    mc('O sistema que avalia a ética das pesquisas no Brasil é:', ['CEP/CONEP', 'TSE', 'INEP', 'IPEA'], 0, 'Ética.'),
    disc('Leia um ensaio clínico, calcule RR, redução absoluta e NNT, e explique a um paciente.', ['Desenho', 'Cálculos', 'Explicação', 'Limites']),
  ],
  resumo: ['Ensaio randomizado e duplo-cego.', 'RR, redução relativa e absoluta.', 'NNT = 1 ÷ redução absoluta.', 'Efeitos adversos.', 'Helsinque; CEP/CONEP; CIC 2295.'],
  referencias: [
    { texto: 'Associação Médica Mundial, Declaração de Helsinque (1964 e revisões).' },
    { texto: 'Gerd Gigerenzer, Calculated Risks (2002).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 2292–2296.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do ensaio', 'Ler as fontes indicadas'],
  revisao: [['NNT', '1 ÷ RAR.'], ['Relativo', 'Engana sem o absoluto.'], ['Helsinque', 'Ética.']],
  avancado: {
    texto: `<h3>Sensibilidade de rastreamentos</h3>
<p>Rastreamentos em pessoas sem sintomas podem salvar vidas, mas também produzem falsos positivos e sobrediagnóstico — detecção de doenças que nunca causariam dano ${tag('fato')}. Por isso as recomendações de rastreamento definem faixas etárias e intervalos, ponderando benefícios e danos ${tag('fato')}. O teorema de Bayes, estudado no ES3, explica parte do problema ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Gerd Gigerenzer, Calculated Risks (2002).' }],
    exercicios: [
      mc('Sobrediagnóstico é detectar doença que:', ['Mataria logo', 'Nunca causaria dano', 'Não existe', 'É contagiosa'], 1, 'Definição.'),
      mc('Recomendações de rastreamento definem:', ['Faixas etárias e intervalos', 'Nada', 'Só preços', 'Só nomes'], 0, 'Ponderação.'),
      mc('Falsos positivos são mais frequentes quando a doença é:', ['Comum', 'Rara', 'Grave', 'Curável'], 1, 'Bayes.'),
      disc('Discuta benefícios e danos de um programa de rastreamento com base em dados.', ['Benefícios', 'Danos', 'Dados', 'Decisão'])],
  },
}),

aula({
  id: 'es5-3', titulo: 'Indicadores econômicos e sociais: inflação, desemprego, desigualdade e IDH', duracao: '150 min',
  aprendera: ['Explicar como se mede a inflação (IPCA)', 'Explicar a taxa de desocupação da PNAD Contínua', 'Interpretar o índice de Gini', 'Conhecer o IDH e seus limites'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Inflação, desemprego e desigualdade são números que movem eleições e políticas. Como são calculados, e o que escondem?</p>
<h3>Inflação</h3>
<p>O IPCA, calculado pelo IBGE, mede a variação de preços de uma cesta de bens e serviços consumida por famílias, ponderada pelo peso de cada item no orçamento; é o índice usado no sistema de metas de inflação ${tag('fato')}. A inflação de cada família pode diferir da média, conforme o que ela consome ${tag('fato')}.</p>
<h3>Desemprego</h3>
<p>A PNAD Contínua, do IBGE, calcula a taxa de desocupação: desocupados (sem trabalho, procurando e disponíveis) divididos pela força de trabalho (ocupados mais desocupados) ${tag('fato')}. Quem desistiu de procurar não entra como desocupado; são os desalentados, contados à parte ${tag('fato')}. Por isso a taxa pode cair sem que mais pessoas trabalhem ${tag('fato')}.</p>
<h3>Desigualdade</h3>
<p>O índice de Gini vai de 0 (todos com a mesma renda) a 1 (um só com toda a renda) ${tag('fato')}. O Brasil está historicamente entre os países de maior desigualdade de renda ${tag('fato')}.</p>
<h3>IDH</h3>
<p>O Índice de Desenvolvimento Humano, do PNUD, combina saúde (expectativa de vida), educação (anos de estudo) e renda ${tag('fato')}. Indicadores compostos dependem das escolhas de componentes e pesos e não captam tudo o que é o bem humano ${tag('interpretacao')}. A doutrina social da Igreja fala de desenvolvimento integral, "de todo o homem e de todos os homens" (Populorum progressio, 14) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['IPCA', 'Índice oficial de inflação ao consumidor, calculado pelo IBGE.'],
    ['Taxa de desocupação', 'Desocupados divididos pela força de trabalho.'],
    ['Desalentados', 'Pessoas que desistiram de procurar trabalho.'],
    ['Índice de Gini', 'Medida de desigualdade de 0 a 1.'],
    ['IDH', 'Índice que combina saúde, educação e renda.'],
  ],
  exemplos: `<p><strong>Desemprego que cai sem emprego:</strong> numa cidade, 100 pessoas na força de trabalho, 10 desocupadas: taxa de 10%. Se 5 desocupados desistem de procurar, a força cai para 95 e os desocupados para 5: taxa de cerca de 5,3%. Ninguém conseguiu emprego, mas a taxa caiu quase à metade. Por isso se olham também a ocupação e o desalento.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Internacional do Trabalho define os conceitos de desocupação usados por muitos países ${tag('fato')}. <strong>No Brasil:</strong> o SIDRA, do IBGE, publica as séries históricas desses indicadores ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que nenhum indicador basta sozinho', tag: 'argumento',
    premissas: ['Cada indicador mede um aspecto, com definições e limites próprios.', 'Políticas e discursos podem destacar o indicador que favorece sua tese.', 'Ver vários indicadores juntos mostra um quadro mais fiel.'],
    conclusao: 'Logo, avaliar a situação econômica e social exige um painel de indicadores e o conhecimento de suas definições.',
    nota: 'Indicadores são instrumentos, não o próprio bem que pretendem medir.',
  },
  objecoes: [
    { objecao: 'Os números oficiais são manipulados e não merecem confiança.', tag: 'debate',
      resposta: 'Institutos oficiais podem errar ou sofrer pressão, e por isso metodologias transparentes, séries públicas e comparações com fontes independentes são importantes. O IBGE publica suas metodologias. Desconfiar sem verificar é tão imprudente quanto confiar sem entender.' },
  ],
  aplicacao: `<p>Monte um painel com quatro indicadores do Brasil (IPCA, taxa de desocupação, Gini e IDH) com a série dos últimos anos, a fonte e uma frase sobre o que cada um mede e não mede.</p>`,
  fonte: {
    obra: 'IBGE, metodologias do IPCA e da PNAD Contínua; PNUD, Relatório de Desenvolvimento Humano', link: { url: 'https://www.ibge.gov.br', rotulo: 'Portal do IBGE' },
    orientacao: `<p>Leia as definições de cada indicador e localize as séries no SIDRA.</p>`,
  },
  perguntas: [
    { p: 'Como se calcula a taxa de desocupação?', r: 'Desocupados divididos pela força de trabalho.' },
    { p: 'Por que a taxa pode cair sem aumento de emprego?', r: 'Porque pessoas que desistem de procurar saem da força de trabalho.' },
    { p: 'O que combina o IDH?', r: 'Saúde, educação e renda.' },
  ],
  exercicios: [
    mc('O índice oficial de inflação no sistema de metas é o:', ['IGP-M', 'IPCA', 'INPC', 'PIB'], 1, 'IBGE.'),
    mc('100 na força de trabalho, 8 desocupados: taxa de:', ['8%', '92%', '12%', '80%'], 0, '8 ÷ 100.'),
    mc('Gini igual a 0 significa:', ['Máxima desigualdade', 'Renda igual para todos', 'Erro', 'Pobreza total'], 1, 'Definição.'),
    mc('Os desalentados são contados como desocupados?', ['Sim', 'Não', 'Às vezes', 'Só no censo'], 1, 'À parte.'),
    mc('"De todo o homem e de todos os homens" está na:', ['Populorum progressio', 'Rerum novarum', 'Laudato si', 'Lumen gentium'], 0, 'N. 14.'),
    disc('Monte um painel de quatro indicadores brasileiros com séries, fontes e limites.', ['Séries', 'Fontes', 'O que medem', 'Limites']),
  ],
  resumo: ['IPCA: cesta ponderada.', 'Desocupação: desocupados ÷ força de trabalho.', 'Desalentados à parte.', 'Gini: 0 a 1.', 'IDH; desenvolvimento integral.'],
  referencias: [
    { texto: 'IBGE, notas metodológicas do IPCA e da PNAD Contínua.' },
    { texto: 'PNUD, Relatório de Desenvolvimento Humano.' },
    { texto: 'Paulo VI, Populorum progressio (1967).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o painel de indicadores', 'Consultar as fontes oficiais'],
  revisao: [['IPCA', 'Inflação oficial.'], ['Desalento', 'Fora da taxa.'], ['Gini', 'Desigualdade.']],
  avancado: {
    texto: `<h3>Números-índice e base</h3>
<p>Um número-índice compara valores com um período-base igual a 100 ${tag('fato')}. Se um índice passa de 100 para 112, houve aumento de 12% ${tag('fato')}. Variações acumuladas se multiplicam, não se somam: dois anos de 10% dão 1,1 × 1,1 = 1,21, ou 21% ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, metodologia do IPCA.' }],
    exercicios: [
      mc('Índice de 100 para 112 indica aumento de:', ['12%', '112%', '1,12%', '88%'], 0, 'Base 100.'),
      mc('Dois anos de 10% acumulam:', ['20%', '21%', '11%', '100%'], 1, 'Multiplicação.'),
      mc('Variações acumuladas devem ser:', ['Somadas', 'Multiplicadas', 'Ignoradas', 'Divididas'], 1, 'Composição.'),
      disc('Calcule a inflação acumulada de três anos a partir das taxas anuais do IPCA.', ['Taxas', 'Cálculo', 'Resultado', 'Comparação'])],
  },
}),

aula({
  id: 'es5-4', titulo: 'Investigação de quatro semanas com dados públicos', duracao: '180 min',
  aprendera: ['Formular uma pergunta respondível com dados públicos', 'Localizar dados no IBGE, DATASUS e INEP', 'Fazer análise descritiva e uma inferência simples', 'Redigir um relatório com limites'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como transformar uma curiosidade — "a mortalidade infantil caiu na minha região?" — numa pequena análise estatística honesta?</p>
<h3>A pergunta</h3>
<p>Uma boa pergunta tem variável, lugar e período definidos, e é respondível com dados disponíveis ${tag('interpretacao')}. Exemplo: "como evoluiu a taxa de mortalidade infantil no meu estado entre 2010 e 2022, comparada com a do Brasil?" ${tag('interpretacao')}.</p>
<h3>As fontes</h3>
<p>O SIDRA, do IBGE, publica tabelas de censos e pesquisas; o DATASUS, do Ministério da Saúde, oferece dados de nascimentos, óbitos e internações (TabNet); o INEP, dados educacionais ${tag('fato')}. Registre sempre a tabela, a data de acesso e as definições ${tag('interpretacao')}.</p>
<h3>A análise</h3>
<p>Descritiva: tabela, gráfico de linhas, médias e variações ${tag('fato')}. Inferencial simples: intervalo para uma proporção, comparação de duas proporções ou regressão linear sobre o tempo ${tag('fato')}. Para dados de toda a população (como óbitos registrados), a incerteza amostral não se aplica do mesmo modo, mas há erros de registro ${tag('interpretacao')}.</p>
<h3>O relatório</h3>
<p>Pergunta; fontes e definições; método; resultados com tabelas e gráficos honestos; discussão distinguindo dado, inferência e hipótese; limites; conclusão proporcional ${tag('interpretacao')}. Cite as fontes e não altere dados ${tag('argumento')}.</p>`,
  vocabulario: [
    ['SIDRA', 'Sistema de recuperação de tabelas do IBGE.'],
    ['DATASUS', 'Departamento de informática do SUS, com dados de saúde.'],
    ['Série histórica', 'Sequência de valores de um indicador ao longo do tempo.'],
    ['Taxa', 'Número de eventos dividido pela população em risco.'],
    ['Dados populacionais', 'Dados de toda a população, não de amostra.'],
  ],
  exemplos: `<p><strong>Cronograma:</strong> semana 1, definir a pergunta e localizar as tabelas; semana 2, baixar e organizar os dados numa planilha, conferindo definições; semana 3, calcular, fazer gráficos e testar uma inferência simples; semana 4, redigir o relatório e revisá-lo com a rubrica.</p>`,
  contexto: `<p><strong>No mundo:</strong> dados abertos governamentais permitem que cidadãos verifiquem afirmações públicas ${tag('fato')}. <strong>No Brasil:</strong> a Lei de Acesso à Informação (Lei nº 12.527/2011) garante o acesso a dados públicos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a conclusão deve caber nos dados', tag: 'argumento',
    premissas: ['Uma análise de quatro semanas usa poucos dados e métodos simples.', 'Correlações em séries temporais podem ter muitas causas.', 'Afirmar mais do que os dados mostram engana o leitor.'],
    conclusao: 'Logo, a conclusão deve descrever o que se observou e apontar hipóteses, sem afirmar causas não demonstradas.',
    nota: 'Uma conclusão modesta e verdadeira vale mais que uma ambiciosa e falsa.',
  },
  objecoes: [
    { objecao: 'Sem programas estatísticos avançados, não dá para fazer pesquisa séria.', tag: 'argumento',
      resposta: 'Uma planilha basta para tabelas, gráficos, médias, taxas e uma regressão simples. A seriedade vem da pergunta clara, das fontes corretas, dos cálculos verificados e das conclusões honestas, não da sofisticação do programa.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto da investigação: pergunta, fontes (tabelas exatas), variáveis e definições, análise prevista, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'IBGE (SIDRA), DATASUS (TabNet) e INEP — dados abertos', link: { url: 'https://sidra.ibge.gov.br', rotulo: 'SIDRA — IBGE' },
    orientacao: `<p>Localize uma tabela relacionada à sua pergunta e anote o código, a definição das variáveis e o período disponível.</p>`,
  },
  perguntas: [
    { p: 'Onde encontrar dados de óbitos e nascimentos no Brasil?', r: 'No DATASUS (TabNet).' },
    { p: 'O que deve conter uma pergunta respondível?', r: 'Variável, lugar e período definidos, com dados disponíveis.' },
    { p: 'Que lei garante o acesso a dados públicos?', r: 'A Lei de Acesso à Informação (Lei nº 12.527/2011).' },
  ],
  exercicios: [
    mc('O sistema de tabelas do IBGE é o:', ['SIDRA', 'TabNet', 'PesqEle', 'ReBEC'], 0, 'IBGE.'),
    mc('O TabNet pertence ao:', ['INEP', 'DATASUS', 'TSE', 'IPEA'], 1, 'Saúde.'),
    mc('A Lei de Acesso à Informação é de:', ['1997', '2011', '2016', '2021'], 1, 'Lei 12.527.'),
    mc('Taxa = eventos divididos pela:', ['Média', 'População em risco', 'Amostra', 'Mediana'], 1, 'Definição.'),
    mc('A conclusão de uma pequena pesquisa deve ser:', ['Ambiciosa', 'Proporcional aos dados', 'Causal sempre', 'Opinativa'], 1, 'Honestidade.'),
    disc('Apresente o pré-projeto com pergunta, fontes, variáveis, análise, cronograma e rubrica.', ['Pergunta', 'Fontes', 'Análise', 'Cronograma e rubrica']),
  ],
  resumo: ['Pergunta com variável, lugar e período.', 'SIDRA, DATASUS, INEP.', 'Descritiva + inferência simples.', 'Relatório com limites.', 'LAI (2011).'],
  referencias: [
    { texto: 'IBGE, SIDRA; Ministério da Saúde, DATASUS; INEP, dados abertos.' },
    { texto: 'Lei nº 12.527, de 2011 (Lei de Acesso à Informação).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a investigação em quatro semanas'],
  revisao: [['SIDRA', 'IBGE.'], ['TabNet', 'Saúde.'], ['Proporção', 'Conclusão modesta.']],
  avancado: {
    texto: `<h3>Taxas padronizadas por idade</h3>
<p>Comparar taxas de mortalidade entre regiões com estruturas etárias diferentes pode enganar: uma região mais envelhecida terá mais mortes mesmo com saúde melhor ${tag('fato')}. A padronização por idade aplica as taxas de cada faixa a uma população-padrão comum, tornando a comparação justa ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Ministério da Saúde, indicadores de mortalidade (notas técnicas).' }],
    exercicios: [
      mc('Uma região mais envelhecida tende a ter taxa bruta de mortalidade:', ['Menor', 'Maior', 'Igual', 'Zero'], 1, 'Estrutura etária.'),
      mc('A padronização usa uma população:', ['Padrão comum', 'Aleatória', 'Menor', 'Maior'], 0, 'Comparação.'),
      mc('A padronização serve para:', ['Comparar com justiça', 'Esconder dados', 'Aumentar taxas', 'Nada'], 0, 'Finalidade.'),
      disc('Explique com um exemplo numérico por que comparar taxas brutas de mortalidade pode enganar.', ['Exemplo', 'Cálculo', 'Padronização', 'Conclusão'])],
  },
}),

avaliacao('es5-5', 'Avaliação integradora de Estatística', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Estatística. Reúne questões de todos os módulos (ES1 a ES5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de quatro semanas com dados públicos, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça à mão: média, mediana, desvio-padrão, margem de erro, teste z, Bayes, NNT e reta de regressão.</li><li>Releia a rubrica da investigação (es5-4).</li></ul>`,
[
  disc('Calcule medidas descritivas de um pequeno conjunto de dados, construa um intervalo de 95% para uma proporção e critique um gráfico ou estudo divulgado, distinguindo dado e inferência.', ['Medidas', 'Intervalo', 'Crítica', 'Distinções']),
  disc('Analise uma notícia que use estatística (pesquisa eleitoral, estudo de saúde ou indicador econômico): identifique a fonte, o desenho, os números relevantes, os possíveis vieses e se a conclusão é sustentada, propondo uma redação honesta.', ['Fonte e desenho', 'Números', 'Vieses', 'Redação honesta']),
]),
];
