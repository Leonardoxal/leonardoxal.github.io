// Geografia V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Geografia).
// Planejamento urbano, recursos hídricos e semiárido, riscos e desastres, e o estudo de caso com mapa próprio.
// A avaliação final integra G1 a G5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'g5-1', titulo: 'Planejamento urbano: Estatuto da Cidade, plano diretor, mobilidade e saneamento', duracao: '150 min',
  aprendera: ['Explicar os instrumentos do Estatuto da Cidade e do plano diretor', 'Analisar a distribuição da população de um estado com dados do IBGE', 'Avaliar mobilidade e saneamento com indicadores', 'Aplicar critérios de bem comum ao planejamento'],
  prereq: ['Geografia IV (módulo G4)'],
  explicacao: `
<h3>O problema</h3>
<p>As cidades brasileiras cresceram rápido e muitas vezes sem planejamento: periferias distantes, transporte demorado, áreas sem esgoto. A geografia aplicada ajuda a diagnosticar e a propor.</p>
<h3>Marco legal</h3>
<ul>
<li>A Constituição de 1988 (arts. 182 e 183) trata da política urbana e da função social da propriedade ${tag('fato')}.</li>
<li>O Estatuto da Cidade (Lei nº 10.257, de 2001) regulamentou esses artigos e tornou o plano diretor obrigatório para cidades com mais de 20 mil habitantes, entre outros casos ${tag('fato')}.</li>
<li>A Política Nacional de Mobilidade Urbana é a Lei nº 12.587, de 2012 ${tag('fato')}.</li>
<li>O novo marco do saneamento (Lei nº 14.026, de 2020) fixou metas de universalização de água e esgoto até 2033 ${tag('fato')}.</li>
</ul>
<h3>Diagnóstico</h3>
<p>Um diagnóstico urbano cruza dados de população (Censo), renda, infraestrutura (água, esgoto, coleta de lixo), deslocamentos e áreas de risco, e os representa em mapas por setor censitário ou bairro ${tag('fato')}. O Sistema Nacional de Informações sobre Saneamento (SNIS) reúne dados de saneamento por município ${tag('fato')}.</p>
<h3>Critério de bem comum</h3>
<p>A função social da propriedade e o princípio da destinação universal dos bens, ensinados pela Doutrina Social da Igreja, convergem na ideia de que o solo urbano deve servir à vida digna de todos, sem negar a propriedade privada ${tag('doutrina')}. Como aplicar isso em cada cidade é questão técnica e política ${tag('debate')}.</p>`,
  vocabulario: [
    ['Plano diretor', 'Lei municipal que orienta o uso e a ocupação do solo.'],
    ['Função social da propriedade', 'Exigência de que a propriedade atenda ao interesse coletivo.'],
    ['Setor censitário', 'Menor unidade territorial de coleta do Censo.'],
    ['Mobilidade urbana', 'Condições de deslocamento de pessoas e bens na cidade.'],
    ['Universalização', 'Acesso de toda a população a um serviço.'],
  ],
  exemplos: `<p><strong>Distribuição da população de um estado:</strong> com o Censo 2022, calcule a proporção da população que vive na capital e na região metropolitana, a densidade por município e o crescimento desde 2010. Em muitos estados, a capital concentra grande parte da população e cresce menos que municípios do entorno — sinal de metropolização.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Nova Agenda Urbana da ONU (2016) orienta políticas de cidades sustentáveis ${tag('fato')}. <strong>No Brasil:</strong> déficit habitacional, ocupação de encostas e falta de esgoto convivem com centros urbanos esvaziados ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que periferias distantes aumentam custos para todos', tag: 'argumento',
    premissas: ['Moradias distantes dos empregos exigem deslocamentos longos.', 'Levar infraestrutura (água, esgoto, transporte) a áreas dispersas custa mais por habitante.', 'Esses custos recaem sobre os moradores (tempo, dinheiro) e sobre o poder público.'],
    conclusao: 'Logo, o espraiamento urbano sem planejamento eleva custos sociais — o que justifica instrumentos para ocupar áreas centrais ociosas.',
    nota: 'O argumento é técnico; a escolha dos instrumentos envolve juízo político.',
  },
  objecoes: [
    { objecao: 'Planejamento urbano é intervenção indevida na propriedade.', tag: 'debate',
      resposta: 'A propriedade é direito legítimo, mas não absoluto: o uso de um terreno afeta vizinhos, trânsito e infraestrutura comum. Regras de uso do solo existem em todas as cidades organizadas; o debate é sobre quais regras e com que custos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise com dados do Censo 2022 a distribuição da população de um estado brasileiro (capital, região metropolitana, interior; densidade; crescimento desde 2010). Represente num mapa ou tabela, cite a fonte e interprete.</p>`,
  fonte: {
    obra: 'Lei nº 10.257, de 10 de julho de 2001 (Estatuto da Cidade); IBGE, Censo 2022', link: { url: 'https://censo2022.ibge.gov.br', rotulo: 'Censo 2022 (IBGE)' },
    orientacao: `<p>No Estatuto da Cidade, localize as diretrizes gerais (art. 2º) e os instrumentos (art. 4º). No Censo 2022, obtenha os dados do estado escolhido.</p>`,
  },
  perguntas: [
    { p: 'Que lei é o Estatuto da Cidade?', r: 'A Lei nº 10.257, de 2001.' },
    { p: 'Para quais cidades o plano diretor é obrigatório?', r: 'Entre outras, para cidades com mais de 20 mil habitantes.' },
    { p: 'Qual a meta do novo marco do saneamento?', r: 'Universalização de água e esgoto até 2033.' },
  ],
  exercicios: [
    mc('A política urbana na Constituição está nos artigos:', ['5º e 6º', '182 e 183', '225 e 226', '1º e 3º'], 1, 'Função social da propriedade.'),
    mc('A Política Nacional de Mobilidade Urbana é de:', ['2001', '2012', '2020', '1988'], 1, 'Lei 12.587/2012.'),
    mc('O novo marco do saneamento é a Lei:', ['10.257/2001', '12.587/2012', '14.026/2020', '9.433/1997'], 2, 'Metas para 2033.'),
    mc('A menor unidade territorial de coleta do Censo é o:', ['Município', 'Distrito', 'Setor censitário', 'Bairro'], 2, 'Setor censitário.'),
    mc('Um estado com 4 milhões de habitantes, 1,6 milhão na capital: a capital concentra:', ['16%', '25%', '40%', '60%'], 2, '1,6 ÷ 4.'),
    disc('Entregue a análise da distribuição da população de um estado com dados do Censo 2022: tabela ou mapa, fonte e interpretação.', ['Dados corretos com fonte', 'Representação legível', 'Interpretação', 'Relação com planejamento']),
  ],
  resumo: ['Constituição (arts. 182–183): função social da propriedade.', 'Estatuto da Cidade (2001): plano diretor.', 'Mobilidade (2012) e saneamento (2020, metas para 2033).', 'Diagnóstico com Censo e SNIS.', 'Bem comum e destinação universal dos bens.'],
  referencias: [
    { texto: 'Lei nº 10.257, de 2001 (Estatuto da Cidade).' },
    { texto: 'Lei nº 14.026, de 2020 (novo marco legal do saneamento).' },
    { texto: 'IBGE, Censo Demográfico 2022.', link: { url: 'https://censo2022.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Compêndio da Doutrina Social da Igreja (2004), n. 171–184.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da população do estado', 'Responder à questão discursiva'],
  revisao: [['Estatuto da Cidade', '10.257/2001.'], ['Saneamento', '14.026/2020, metas 2033.'], ['Setor censitário', 'Menor unidade do Censo.']],
  avancado: {
    texto: `<h3>Instrumentos do Estatuto</h3>
<p>Entre os instrumentos previstos estão o parcelamento ou edificação compulsórios de imóveis ociosos, o IPTU progressivo no tempo e a outorga onerosa do direito de construir ${tag('fato')}. Sua aplicação efetiva varia muito entre municípios ${tag('interpretacao')}.</p>
<h3>Zonas especiais de interesse social</h3>
<p>As ZEIS demarcam áreas destinadas à habitação de interesse social e à regularização de assentamentos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lei nº 10.257, de 2001 (Estatuto da Cidade).' }],
    exercicios: [
      mc('O IPTU progressivo no tempo incide sobre:', ['Todos os imóveis', 'Imóveis ociosos que descumprem a função social', 'Apenas comércio', 'Imóveis rurais'], 1, 'Instrumento do Estatuto.'),
      mc('ZEIS destinam-se a:', ['Indústrias', 'Habitação de interesse social', 'Parques', 'Aeroportos'], 1, 'Regularização e moradia.'),
      mc('A outorga onerosa refere-se ao direito de:', ['Votar', 'Construir acima do coeficiente básico', 'Desapropriar', 'Tributar'], 1, 'Contrapartida financeira.'),
      disc('Verifique se o plano diretor do seu município prevê ZEIS e IPTU progressivo e se foram aplicados. Indique as fontes.', ['Consulta ao plano', 'Instrumentos identificados', 'Aplicação verificada', 'Conclusão'])],
  },
}),

aula({
  id: 'g5-2', titulo: 'Recursos hídricos: crise hídrica, semiárido e convivência com a seca', duracao: '150 min',
  aprendera: ['Explicar a distribuição desigual da água no Brasil', 'Analisar uma crise hídrica com dados', 'Comparar estratégias para o semiárido', 'Aplicar a Lei das Águas a um conflito de uso'],
  prereq: ['Aula anterior', 'Geografia IV: hidrografia (g4-2)'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil tem grande parte da água doce superficial do mundo, mas ela está concentrada na Amazônia, onde vive pequena parte da população ${tag('fato')}. Ao mesmo tempo, metrópoles e o semiárido enfrentam escassez.</p>
<h3>Crises hídricas</h3>
<p>Entre 2014 e 2015, a Região Metropolitana de São Paulo viveu grave crise de abastecimento, com o Sistema Cantareira em níveis muito baixos ${tag('fato')}. Causas apontadas: chuvas abaixo da média, aumento do consumo, perdas na rede e decisões de gestão; o peso de cada uma é debatido ${tag('debate')}.</p>
<h3>O semiárido</h3>
<p>O semiárido brasileiro tem chuvas irregulares e concentradas, alta evaporação e solos rasos ${tag('fato')}. Duas estratégias se combinam:</p>
<ul>
<li><strong>Grandes obras</strong>: o Projeto de Integração do Rio São Francisco leva água por canais a bacias do Nordeste Setentrional; o Eixo Leste passou a operar em 2017 ${tag('fato')}.</li>
<li><strong>Convivência com o semiárido</strong>: cisternas de captação de chuva, barragens subterrâneas e manejo adaptado; o Programa Um Milhão de Cisternas, da Articulação Semiárido Brasileiro, começou em 2003 ${tag('fato')}.</li>
</ul>
<p>Josué de Castro já mostrara que a fome no Nordeste era menos efeito da seca que da estrutura social ${tag('interpretacao')}.</p>
<h3>Gestão</h3>
<p>Pela Lei das Águas, a água é bem de domínio público, recurso limitado com valor econômico; em escassez, a prioridade é o consumo humano e a dessedentação de animais ${tag('fato')}.</p>`,
  vocabulario: [
    ['Crise hídrica', 'Situação em que a oferta de água não atende à demanda.'],
    ['Perdas na distribuição', 'Água tratada que se perde antes de chegar ao consumidor.'],
    ['Convivência com o semiárido', 'Estratégia de adaptação às condições do clima semiárido.'],
    ['Cisterna', 'Reservatório que armazena água de chuva.'],
    ['Outorga de uso', 'Autorização do poder público para usar recursos hídricos.'],
  ],
  exemplos: `<p><strong>Cálculo de cisterna:</strong> um telhado de 40 m² numa região com 500 mm de chuva anual capta, em tese, 40 × 0,5 = 20 m³ (20.000 litros) por ano, descontadas perdas. Uma família de cinco pessoas que use 14 litros por pessoa por dia para beber e cozinhar precisa de cerca de 25.500 litros por ano — daí cisternas de 16 mil litros complementadas por outras fontes.</p>`,
  contexto: `<p><strong>No mundo:</strong> a escassez de água é um dos grandes riscos apontados por organismos internacionais, e o acesso à água potável foi reconhecido como direito humano pela Assembleia Geral da ONU em 2010 ${tag('fato')}. <strong>No Brasil:</strong> conflitos entre irrigação, energia e abastecimento aparecem em várias bacias ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que grandes obras e convivência não se excluem', tag: 'argumento',
    premissas: ['Grandes obras levam água a cidades e polos em volumes que cisternas não alcançam.', 'Cisternas e manejo local atendem populações dispersas que canais não alcançam.', 'Os dois atendem necessidades e escalas diferentes.'],
    conclusao: 'Logo, uma política para o semiárido pode combinar as duas estratégias, avaliando custo e alcance de cada uma.',
    nota: 'O mesmo raciocínio de escala da aula g1-1.',
  },
  objecoes: [
    { objecao: 'A transposição resolveu o problema da seca.', tag: 'debate',
      resposta: 'A obra ampliou a segurança hídrica de cidades e reservatórios, mas não chega a todas as comunidades dispersas e tem custos de operação e manutenção. Avaliar exige dados de volumes entregues, custos e beneficiários.' },
  ],
  aplicacao: `<p>Escolha um município do semiárido. Com dados da ANA e do IBGE, descreva fontes de água, população atendida por rede, uso de cisternas e um conflito de uso. Proponha uma medida com custo estimado.</p>`,
  fonte: {
    obra: 'Agência Nacional de Águas, Conjuntura dos recursos hídricos no Brasil (edição mais recente); Josué de Castro, Geografia da fome (1946), parte sobre o sertão', link: { url: 'https://www.gov.br/ana', rotulo: 'ANA' },
    orientacao: `<p>No relatório da ANA, localize os dados de disponibilidade e demanda por região. Em Josué de Castro, identifique a crítica à explicação da fome apenas pela seca.</p>`,
  },
  perguntas: [
    { p: 'Por que há escassez de água num país com tanta água doce?', r: 'Porque a água está concentrada na Amazônia, longe da maior parte da população.' },
    { p: 'Quando o Eixo Leste da integração do São Francisco começou a operar?', r: 'Em 2017.' },
    { p: 'Qual o uso prioritário da água em escassez, pela Lei das Águas?', r: 'O consumo humano e a dessedentação de animais.' },
  ],
  exercicios: [
    mc('A crise do Sistema Cantareira ocorreu em:', ['2001', '2014–2015', '2020', '2024'], 1, 'Região Metropolitana de São Paulo.'),
    mc('O Programa Um Milhão de Cisternas começou em:', ['1997', '2003', '2017', '2020'], 1, 'Articulação Semiárido Brasileiro.'),
    mc('Telhado de 50 m² e chuva de 600 mm/ano captam, em tese:', ['3 m³', '30 m³', '300 m³', '3.000 m³'], 1, '50 × 0,6 = 30 m³.'),
    mc('O acesso à água potável foi reconhecido como direito humano pela ONU em:', ['1948', '1992', '2010', '2015'], 2, 'Assembleia Geral.'),
    mc('"Convivência com o semiárido" enfatiza:', ['Apenas grandes obras', 'Adaptação local ao clima', 'Migração para o Sudeste', 'Fim da agricultura'], 1, 'Cisternas, manejo.'),
    disc('Analise uma crise hídrica brasileira: causas naturais e de gestão, dados, efeitos sociais e medidas, separando análise de juízo normativo.', ['Causas', 'Dados com fonte', 'Efeitos', 'Medidas e juízo separado']),
  ],
  resumo: ['Água concentrada na Amazônia.', 'Crise do Cantareira (2014–2015): causas debatidas.', 'Semiárido: integração do São Francisco (Eixo Leste, 2017) e cisternas (2003).', 'Josué de Castro: fome como fenômeno social.', 'Lei das Águas: prioridade ao consumo humano.'],
  referencias: [
    { texto: 'Agência Nacional de Águas, Conjuntura dos recursos hídricos no Brasil.', link: { url: 'https://www.gov.br/ana', rotulo: 'ANA' } },
    { texto: 'Josué de Castro, Geografia da fome (1946).' },
    { texto: 'Lei nº 9.433, de 1997 (Lei das Águas).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer o diagnóstico do município do semiárido'],
  revisao: [['Cantareira', '2014–2015.'], ['Cisternas', 'Programa de 2003.'], ['Prioridade', 'Consumo humano.']],
  avancado: {
    texto: `<h3>Água virtual</h3>
<p>O conceito de "água virtual", de John Anthony Allan, mede a água usada na produção de bens; exportar grãos e carne equivale a exportar água ${tag('fato')}. O conceito ajuda a avaliar a pegada hídrica do agronegócio ${tag('interpretacao')}.</p>
<h3>Reúso</h3>
<p>O reúso de água tratada para fins não potáveis (indústria, irrigação, limpeza urbana) é uma das respostas à escassez em metrópoles ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Agência Nacional de Águas, Conjuntura dos recursos hídricos no Brasil.' }],
    exercicios: [
      mc('"Água virtual" é a água:', ['Da chuva', 'Usada na produção de bens', 'Subterrânea', 'Salgada'], 1, 'J. A. Allan.'),
      mc('Reúso de água tratada é indicado principalmente para:', ['Beber sem tratamento', 'Fins não potáveis', 'Hospitais', 'Nada'], 1, 'Indústria, irrigação.'),
      mc('Exportar soja equivale, nesse conceito, a exportar:', ['Energia', 'Água virtual', 'Solo', 'Trabalho'], 1, 'Pegada hídrica.'),
      disc('Estime a água virtual das exportações de um produto agrícola brasileiro usando dados publicados, e discuta o significado.', ['Dados com fonte', 'Cálculo', 'Interpretação', 'Limites do conceito'])],
  },
}),

aula({
  id: 'g5-3', titulo: 'Riscos e desastres: enchentes, deslizamentos, barragens e defesa civil', duracao: '150 min',
  aprendera: ['Distinguir ameaça, vulnerabilidade e risco', 'Analisar desastres brasileiros recentes com dados', 'Explicar o sistema de alerta e defesa civil', 'Propor medidas de redução de risco'],
  prereq: ['Aulas anteriores do módulo', 'Geografia IV: relevo e clima'],
  explicacao: `
<h3>O problema</h3>
<p>Chuvas fortes sempre existiram; desastres dependem de onde e como as pessoas vivem. A geografia dos riscos estuda essa combinação.</p>
<h3>Conceitos</h3>
<p><strong>Ameaça</strong> é o evento potencialmente danoso (chuva extrema, ruptura); <strong>vulnerabilidade</strong>, a suscetibilidade de pessoas e bens a sofrer danos; <strong>risco</strong>, a combinação das duas ${tag('fato')}. Reduzir o risco é reduzir a exposição e a vulnerabilidade, já que muitas ameaças não podem ser eliminadas ${tag('argumento')}.</p>
<h3>Desastres recentes no Brasil</h3>
<ul>
<li>Chuvas e deslizamentos na Região Serrana do Rio de Janeiro, em janeiro de 2011, com centenas de mortos ${tag('fato')}.</li>
<li>Rompimento da barragem de rejeitos de Fundão, em Mariana (MG), em 2015, e da barragem de Brumadinho (MG), em 2019 — desastres tecnológicos ${tag('fato')}.</li>
<li>Enchentes no Rio Grande do Sul em 2024, que atingiram a maior parte dos municípios do estado ${tag('fato')}.</li>
</ul>
<h3>Instituições</h3>
<p>Após 2011, foi criado o Cemaden (Centro Nacional de Monitoramento e Alertas de Desastres Naturais) ${tag('fato')}, e a Lei nº 12.608, de 2012, instituiu a Política Nacional de Proteção e Defesa Civil ${tag('fato')}. O Serviço Geológico do Brasil mapeia áreas de risco geológico em municípios ${tag('fato')}.</p>
<h3>Dimensão moral</h3>
<p>Proteger a vida dos mais vulneráveis é exigência de justiça; o desastre revela desigualdades e convoca à solidariedade ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Ameaça', 'Evento potencialmente danoso.'],
    ['Vulnerabilidade', 'Suscetibilidade de pessoas e bens a sofrer danos.'],
    ['Risco', 'Combinação de ameaça e vulnerabilidade.'],
    ['Desastre tecnológico', 'Desastre originado de atividade humana (barragens, indústrias).'],
    ['Defesa civil', 'Conjunto de ações de prevenção, preparação, resposta e recuperação.'],
  ],
  exemplos: `<p><strong>Mesma chuva, danos diferentes:</strong> 100 mm em poucas horas numa encosta ocupada sem drenagem, com casas em corte de talude, podem causar deslizamentos fatais; a mesma chuva num bairro planejado causa alagamentos menores. A ameaça é igual; a vulnerabilidade, não.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Marco de Sendai para a Redução do Risco de Desastres (2015–2030) orienta políticas nacionais ${tag('fato')}. <strong>No Brasil:</strong> a combinação de chuvas intensas e ocupação de áreas de risco torna deslizamentos e enchentes os desastres mais letais ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que chamar desastres de "naturais" pode ser enganoso', tag: 'argumento',
    premissas: ['O desastre resulta da ameaça combinada com a vulnerabilidade.', 'A vulnerabilidade depende de decisões humanas: onde se constrói, como se drena, se há alerta.', 'Logo, o dano não é determinado apenas pelo evento natural.'],
    conclusao: 'Logo, o termo "desastre natural" pode ocultar responsabilidades de prevenção.',
    nota: 'Não nega a força dos eventos extremos; insiste no que pode ser feito.',
  },
  objecoes: [
    { objecao: 'Remover moradores de áreas de risco é violência contra os pobres.', tag: 'debate',
      resposta: 'Remoções sem alternativa digna e sem participação podem ser injustas. Mas manter famílias em risco de morte também é. O critério é oferecer moradia segura próxima, com participação dos atingidos, e preferir obras de contenção quando viáveis.' },
  ],
  aplicacao: `<p>Verifique se seu município tem mapeamento de áreas de risco (Serviço Geológico do Brasil) e plano de contingência. Identifique uma área de risco, a ameaça, a vulnerabilidade e duas medidas de redução.</p>`,
  fonte: {
    obra: 'Lei nº 12.608, de 10 de abril de 2012 (Política Nacional de Proteção e Defesa Civil); Cemaden, boletins de alerta', link: { url: 'https://www.gov.br/cemaden', rotulo: 'Cemaden' },
    orientacao: `<p>Na lei, identifique as competências da União, dos estados e dos municípios. Nos boletins do Cemaden, veja como se comunica o nível de alerta.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre ameaça e risco?', r: 'Ameaça é o evento; risco é a combinação da ameaça com a vulnerabilidade.' },
    { p: 'Que lei instituiu a Política Nacional de Proteção e Defesa Civil?', r: 'A Lei nº 12.608, de 2012.' },
    { p: 'Por que Mariana e Brumadinho são desastres tecnológicos?', r: 'Porque se originaram do rompimento de barragens de rejeitos de mineração.' },
  ],
  exercicios: [
    mc('Os deslizamentos da Região Serrana do RJ ocorreram em:', ['2008', '2011', '2015', '2024'], 1, 'Janeiro de 2011.'),
    mc('O rompimento de Fundão (Mariana) foi em:', ['2011', '2015', '2019', '2024'], 1, 'Brumadinho em 2019.'),
    mc('Risco é a combinação de:', ['Chuva e vento', 'Ameaça e vulnerabilidade', 'Relevo e clima', 'População e renda'], 1, 'Conceito básico.'),
    mc('O Marco de Sendai abrange:', ['2000–2015', '2015–2030', '2020–2050', '1992–2002'], 1, 'Redução do risco de desastres.'),
    mc('Para reduzir risco quando a ameaça não pode ser evitada, deve-se reduzir:', ['A chuva', 'A exposição e a vulnerabilidade', 'O relevo', 'A latitude'], 1, 'Prevenção.'),
    disc('Analise um desastre brasileiro recente: ameaça, vulnerabilidade, dados de danos, falhas de prevenção e medidas, com fontes.', ['Ameaça e vulnerabilidade', 'Dados com fonte', 'Falhas', 'Medidas']),
  ],
  resumo: ['Ameaça, vulnerabilidade, risco.', 'Região Serrana (2011), Mariana (2015), Brumadinho (2019), RS (2024).', 'Cemaden e Lei 12.608/2012.', 'Marco de Sendai (2015–2030).', '"Natural" pode ocultar responsabilidades.'],
  referencias: [
    { texto: 'Lei nº 12.608, de 2012 (Política Nacional de Proteção e Defesa Civil).' },
    { texto: 'Cemaden — Centro Nacional de Monitoramento e Alertas de Desastres Naturais.', link: { url: 'https://www.gov.br/cemaden', rotulo: 'Cemaden' } },
    { texto: 'Escritório das Nações Unidas para a Redução do Risco de Desastres, Marco de Sendai (2015).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Analisar uma área de risco do município'],
  revisao: [['Risco', 'Ameaça × vulnerabilidade.'], ['Lei 12.608', 'Defesa civil, 2012.'], ['Sendai', '2015–2030.']],
  avancado: {
    texto: `<h3>Segurança de barragens</h3>
<p>A Política Nacional de Segurança de Barragens (Lei nº 12.334, de 2010) foi alterada pela Lei nº 14.066, de 2020, que proibiu barragens de rejeitos construídas pelo método de alteamento a montante ${tag('fato')}.</p>
<h3>Percepção de risco</h3>
<p>A geografia dos riscos estuda também como as pessoas percebem o perigo; experiência anterior, confiança nas instituições e falta de alternativa influenciam a decisão de permanecer em áreas de risco ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lei nº 12.334, de 2010, com as alterações da Lei nº 14.066, de 2020.' }],
    exercicios: [
      mc('A Lei 14.066/2020 proibiu barragens pelo método:', ['A jusante', 'A montante', 'De linha de centro', 'De concreto'], 1, 'Alteamento a montante.'),
      mc('A Política Nacional de Segurança de Barragens é de:', ['2001', '2010', '2015', '2019'], 1, 'Lei 12.334/2010.'),
      mc('A percepção de risco é influenciada por:', ['Apenas a chuva', 'Experiência, confiança e alternativas', 'Apenas o relevo', 'Nada'], 1, 'Fatores sociais.'),
      disc('Compare as respostas institucionais após Mariana (2015) e Brumadinho (2019): leis, fiscalização, reparação, com fontes.', ['Leis', 'Fiscalização', 'Reparação', 'Avaliação'])],
  },
}),

aula({
  id: 'g5-4', titulo: 'Estudo de caso geográfico: problema, dados oficiais e mapa próprio', duracao: '180 min',
  aprendera: ['Delimitar um problema espacial pesquisável', 'Coletar e documentar dados oficiais', 'Produzir um mapa legível com os elementos obrigatórios', 'Redigir o estudo com argumento e referências'],
  prereq: ['Todas as aulas anteriores de Geografia'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com um estudo de caso: um problema espacial, dados oficiais, um mapa próprio e uma conclusão proporcional às evidências. Esta aula é o roteiro do trabalho final de Geografia.</p>
<h3>1. Delimitação</h3>
<p>"Enchentes" é tema; "a distribuição dos domicílios em áreas de risco de inundação em Porto Alegre segundo o Censo 2022" é problema. Delimite lugar, escala, período e variável. Umberto Eco recomenda restringir o campo ${tag('interpretacao')}.</p>
<h3>2. Dados</h3>
<p>Fontes oficiais: IBGE (Censo, malhas territoriais, Atlas), INPE (TerraBrasilis), ANA, Cemaden, Serviço Geológico do Brasil, INMET ${tag('fato')}. Registre fonte, data, escala ou resolução e unidade. Prefira dados por setor censitário ou município, conforme a escala do problema.</p>
<h3>3. Mapa próprio</h3>
<p>O mapa deve ter título, legenda, escala, orientação, fonte dos dados e sistema de referência (aula g1-3) ${tag('fato')}. Escolha a forma de representação adequada: coroplético para taxas (não para totais), símbolos proporcionais para quantidades ${tag('fato')}. O QGIS, programa livre, permite produzir mapas com as malhas do IBGE ${tag('fato')}.</p>
<h3>4. Redação</h3>
<p>Estrutura: problema; área de estudo; dados e método; resultados (com o mapa); discussão com as correntes estudadas; limitações; conclusão. Cite segundo a ABNT (NBR 10520 e NBR 6023) ${tag('fato')} e rotule as afirmações (fato, interpretação, hipótese, debate).</p>
<h3>Rubrica do trabalho final</h3>
<ul>
<li>Problema delimitado em lugar, escala e variável.</li>
<li>Dados oficiais documentados.</li>
<li>Mapa próprio legível, com todos os elementos.</li>
<li>Interpretação que relaciona variáveis e usa conceitos do percurso.</li>
<li>Limitações e conclusão proporcional.</li>
<li>Citações e referências corretas.</li>
</ul>`,
  vocabulario: [
    ['Estudo de caso', 'Investigação aprofundada de um problema num lugar delimitado.'],
    ['Malha territorial', 'Arquivo digital com os limites de unidades territoriais.'],
    ['Mapa coroplético', 'Mapa que colore áreas por classes de uma taxa.'],
    ['Símbolos proporcionais', 'Representação de quantidades por símbolos de tamanho variável.'],
    ['Metadados', 'Informações sobre o dado: fonte, data, escala, unidade.'],
  ],
  exemplos: `<p><strong>Erro comum:</strong> um mapa coroplético da população total por município faz grandes municípios pouco povoados parecerem importantes e esconde a concentração. Para totais, use símbolos proporcionais; para comparar áreas, use taxas (densidade, proporção de domicílios com esgoto).</p>`,
  contexto: `<p><strong>No mundo:</strong> dados abertos e programas livres tornaram a cartografia acessível a estudantes. <strong>No Brasil:</strong> as malhas e os dados do IBGE são gratuitos e permitem estudos de iniciação em qualquer município ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a escolha da representação faz parte do argumento', tag: 'argumento',
    premissas: ['Um mapa seleciona variável, classes, cores e escala.', 'Escolhas diferentes do mesmo dado podem sugerir conclusões diferentes.', 'O leitor confia no mapa como evidência.'],
    conclusao: 'Logo, a escolha da representação deve ser justificada e honesta, como qualquer passo do argumento.',
    nota: 'Liga-se à leitura crítica de mapas (g1-3) e de gráficos (e5-3).',
  },
  objecoes: [
    { objecao: 'Sem saber programar ou usar SIG, não dá para fazer um mapa próprio.', tag: 'debate',
      resposta: 'Um mapa desenhado à mão sobre uma base do IBGE, com todos os elementos e dados corretos, cumpre a rubrica. O SIG facilita, mas o essencial é a correção dos dados e da representação.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto do estudo de caso: problema, área, escala, variáveis, fontes com metadados, tipo de mapa, conceitos do percurso que serão usados e plano de seções.</p>`,
  fonte: {
    obra: 'Umberto Eco, Como se faz uma tese (1977), caps. II e IV; IBGE, Atlas geográfico escolar (seção de cartografia)', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Em Eco, leia os capítulos sobre escolha do tema e fichamento. No Atlas do IBGE, revise os elementos do mapa e os tipos de representação temática.</p>`,
  },
  perguntas: [
    { p: 'Quais elementos um mapa deve ter?', r: 'Título, legenda, escala, orientação, fonte dos dados e sistema de referência.' },
    { p: 'Que tipo de mapa usar para totais?', r: 'Símbolos proporcionais.' },
    { p: 'O que são metadados?', r: 'Informações sobre o dado: fonte, data, escala ou resolução e unidade.' },
  ],
  exercicios: [
    mc('Qual destes é um problema de pesquisa, e não só um tema?', ['Enchentes', 'A cidade', 'Domicílios em áreas de risco de inundação em Porto Alegre (Censo 2022)', 'O clima do Brasil'], 2, 'Delimitado em lugar, fonte e variável.'),
    mc('Mapa coroplético é adequado para:', ['Totais', 'Taxas e proporções', 'Rotas', 'Altitudes pontuais'], 1, 'Totais pedem símbolos proporcionais.'),
    mc('O QGIS é:', ['Programa pago', 'Programa livre de SIG', 'Banco de dados do IBGE', 'Satélite'], 1, 'Livre.'),
    mc('A norma da ABNT para referências é a:', ['NBR 10520', 'NBR 6023', 'NBR 14724', 'NBR 6028'], 1, 'A 10520 trata de citações.'),
    mc('Um mapa sem fonte dos dados:', ['Está completo', 'Não permite verificação', 'É mais claro', 'É obrigatório'], 1, 'Fonte é elemento essencial.'),
    disc('Apresente seu pré-projeto: problema, área e escala, variáveis, fontes com metadados, tipo de mapa e conceitos do percurso.', ['Problema delimitado', 'Dados documentados', 'Representação adequada', 'Conceitos mobilizados', 'Viabilidade']),
  ],
  resumo: ['Problema delimitado em lugar, escala e variável.', 'Dados oficiais com metadados.', 'Mapa com todos os elementos; coroplético para taxas.', 'QGIS e malhas do IBGE.', 'ABNT e rótulos epistêmicos.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
    { texto: 'Wayne C. Booth, Gregory G. Colomb e Joseph M. Williams, A arte da pesquisa (1995).', livro: 'booth-pesquisa' },
    { texto: 'IBGE, Atlas geográfico escolar.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto na questão discursiva', 'Registrar os metadados das fontes'],
  revisao: [['Elementos do mapa', 'Título, legenda, escala, orientação, fonte, referência.'], ['Coroplético', 'Taxas.'], ['Metadados', 'Fonte, data, escala, unidade.']],
  avancado: {
    texto: `<h3>Classificação de dados</h3>
<p>Num mapa coroplético, o método de classes (intervalos iguais, quantis, quebras naturais) muda a aparência do mapa; deve ser escolhido e declarado ${tag('fato')}.</p>
<h3>Trabalho de campo</h3>
<p>Observação direta, fotografia datada e entrevistas complementam os dados oficiais; entrevistas exigem consentimento e respeito à privacidade ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'IBGE, Atlas geográfico escolar.' }],
    exercicios: [
      mc('O método de classes de um mapa coroplético:', ['Não importa', 'Muda a aparência e deve ser declarado', 'É sempre por intervalos iguais', 'É definido por lei'], 1, 'Quantis, quebras naturais...'),
      mc('Entrevistas em trabalho de campo exigem:', ['Nada', 'Consentimento e privacidade', 'Pagamento', 'Autorização do IBGE'], 1, 'Ética da pesquisa.'),
      mc('Fotografias de campo devem ser:', ['Sem data', 'Datadas e localizadas', 'Editadas', 'Anônimas sempre'], 1, 'Valor documental.'),
      disc('Planeje o trabalho de campo do seu estudo: pontos de observação, roteiro de entrevista e cuidados éticos.', ['Pontos', 'Roteiro', 'Ética', 'Relação com o problema'])],
  },
}),

avaliacao('g5-5', 'Avaliação integradora de Geografia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Geografia. Reúne questões de todos os módulos (G1 a G5) e pede duas discursivas de síntese. A conclusão do percurso exige também o estudo de caso com mapa próprio, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça os cálculos de escala, fusos, von Thünen e cisterna.</li><li>Releia a rubrica do trabalho final (g5-4).</li></ul>`,
[
  disc('Escolha um problema espacial brasileiro e mostre como o estudaria com todo o percurso: conceitos e escala, cartografia e dados, uma corrente do pensamento geográfico, os fatores físicos e humanos e uma proposta de intervenção.', ['Problema delimitado', 'Conceitos e escala', 'Dados e mapa', 'Corrente mobilizada', 'Fatores físicos e humanos', 'Proposta fundamentada']),
  disc('Responda como geógrafo: o que a geografia pode e o que não pode afirmar com segurança sobre a relação entre sociedade e natureza? Use três exemplos de módulos diferentes.', ['Distingue fato, interpretação, hipótese e debate', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
