// Ciências Ambientais IV — grandes sistemas e problemas (etapa 8 do percurso de Ciências Ambientais).
// Efeito estufa e ciclo do carbono; água, bacias e solos; poluição do ar e da água, saneamento e resíduos;
// biomas brasileiros e seu monitoramento por satélite.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ca4-1', titulo: 'Clima, efeito estufa e ciclo do carbono', duracao: '150 min',
  aprendera: ['Explicar o efeito estufa pelo balanço de energia', 'Conhecer a história da descoberta do efeito estufa', 'Descrever os reservatórios e fluxos do ciclo do carbono', 'Explicar a acidificação dos oceanos'],
  prereq: ['Ciências Ambientais III (módulo CA3)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que certos gases, presentes em pequenas quantidades, controlam a temperatura do planeta?</p>
<h3>O balanço de energia</h3>
<p>A Terra recebe radiação solar, sobretudo visível, e emite radiação infravermelha. Vapor d'água, CO2, metano e outros gases absorvem parte do infravermelho e o reemitem, também para baixo, aquecendo a superfície ${tag('fato')}. Sem esse efeito estufa natural, a temperatura média da superfície seria de cerca de −18 °C, em vez de cerca de 15 °C ${tag('fato')}.</p>
<h3>História</h3>
<p>Joseph Fourier (1824) propôs que a atmosfera retém calor ${tag('fato')}. Eunice Foote (1856) mostrou em experimentos que o ar com CO2 se aquecia mais ao sol ${tag('fato')}. John Tyndall (1859) mediu a absorção de radiação infravermelha pelo vapor d'água e pelo CO2 ${tag('fato')}. Svante Arrhenius (1896) estimou o aquecimento resultante de mudanças na concentração de CO2 ${tag('fato')}.</p>
<h3>O ciclo do carbono</h3>
<p>O carbono circula entre atmosfera, oceanos, vegetação, solos e rochas ${tag('fato')}. Das emissões humanas de CO2, cerca de metade permanece na atmosfera; o restante é absorvido pelos oceanos e pela vegetação terrestre ${tag('fato')}.</p>
<h3>Acidificação</h3>
<p>Ao absorver CO2, a água do mar forma ácido carbônico: o pH médio da superfície oceânica caiu cerca de 0,1 desde a era pré-industrial, o que afeta organismos com conchas e esqueletos de carbonato, como corais ${tag('fato')}.</p>`,
  vocabulario: [
    ['Efeito estufa', 'Retenção de calor pela absorção de infravermelho por gases da atmosfera.'],
    ['Radiação infravermelha', 'Radiação emitida pela superfície aquecida da Terra.'],
    ['Gás de efeito estufa', 'Gás que absorve infravermelho, como vapor d\'água, CO2 e metano.'],
    ['Reservatório de carbono', 'Compartimento que armazena carbono (atmosfera, oceano, solo, vegetação, rochas).'],
    ['Acidificação dos oceanos', 'Queda do pH da água do mar pela absorção de CO2.'],
  ],
  exemplos: `<p><strong>O carro fechado ao sol:</strong> a luz entra pelos vidros, aquece o interior, e o calor tem dificuldade de sair. A analogia é imperfeita — na estufa real o principal efeito é impedir a saída do ar quente —, mas ajuda a entender que a entrada e a saída de energia não são simétricas. Na atmosfera, o mecanismo é a absorção e a reemissão de infravermelho pelos gases.</p>`,
  contexto: `<p><strong>No mundo:</strong> a concentração de metano na atmosfera mais que dobrou desde a era pré-industrial ${tag('fato')}. <strong>No Brasil:</strong> a fermentação entérica do gado é uma fonte importante de metano, o que dá peso à agropecuária nas emissões do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que mais CO2 aquece a superfície', tag: 'argumento',
    premissas: ['O CO2 absorve radiação infravermelha em certas faixas, como mostram medidas de laboratório desde Tyndall.', 'Com mais CO2, a emissão para o espaço ocorre a partir de camadas mais altas e mais frias da atmosfera.', 'Camadas mais frias emitem menos energia, e o planeta passa a reter mais do que perde até se aquecer.'],
    conclusao: 'Logo, aumentar o CO2 tende a aquecer a superfície até restabelecer o equilíbrio.',
    nota: 'O mecanismo é física básica; a magnitude depende das retroalimentações, como vapor d\'água e nuvens.',
  },
  objecoes: [
    { objecao: 'O CO2 é só 0,04% da atmosfera; não pode ter efeito relevante.', tag: 'debate',
      resposta: 'O efeito de um gás depende de sua capacidade de absorver radiação, não só de sua proporção. Nitrogênio e oxigênio, que formam quase todo o ar, praticamente não absorvem infravermelho; o CO2 absorve. Pequenas quantidades de substâncias ativas podem ter grande efeito, como um pouco de tinta muda a cor de muita água.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique o efeito estufa com o balanço de energia da Terra e uma série histórica de CO2 (Mauna Loa), com gráfico e fontes.</p>`,
  fonte: {
    obra: 'John Tyndall, "On the Absorption and Radiation of Heat by Gases and Vapours" (1861); Svante Arrhenius, "On the Influence of Carbonic Acid in the Air upon the Temperature of the Ground" (1896)', link: null,
    orientacao: `<p>Em Tyndall, os resultados de absorção por diferentes gases. Em Arrhenius, a pergunta e o método do cálculo. Compare as estimativas de Arrhenius com as atuais (aula ca1-4).</p>`,
  },
  perguntas: [
    { p: 'Qual seria a temperatura média sem efeito estufa?', r: 'Cerca de −18 °C.' },
    { p: 'Quem mediu a absorção de infravermelho pelo CO2 em 1859?', r: 'John Tyndall.' },
    { p: 'Quanto das emissões humanas de CO2 fica na atmosfera?', r: 'Cerca de metade.' },
  ],
  exercicios: [
    mc('Sem efeito estufa, a temperatura média seria cerca de:', ['−18 °C', '0 °C', '15 °C', '30 °C'], 0, 'Balanço de energia.'),
    mc('Arrhenius estimou o efeito do CO2 em:', ['1824', '1859', '1896', '1958'], 2, 'Cálculo.'),
    mc('O principal gás da atmosfera, o nitrogênio:', ['Absorve muito infravermelho', 'Quase não absorve infravermelho', 'É gás de efeito estufa forte', 'Não existe'], 1, 'Absorção.'),
    mc('O pH da superfície oceânica:', ['Subiu', 'Caiu cerca de 0,1', 'Não mudou', 'Caiu 3 unidades'], 1, 'Acidificação.'),
    mc('Os experimentos de Eunice Foote são de:', ['1756', '1856', '1956', '2006'], 1, 'Ar com CO2.'),
    disc('Explique o efeito estufa com o balanço de energia e a série de CO2 de Mauna Loa, com gráfico e fontes.', ['Balanço de energia', 'Mecanismo', 'Série de CO2', 'Fontes']),
  ],
  resumo: ['Efeito estufa: −18 °C sem, 15 °C com.', 'Fourier, Foote, Tyndall, Arrhenius.', 'Ciclo do carbono: metade fica no ar.', 'Acidificação: pH −0,1.', 'Metano do gado.'],
  referencias: [
    { texto: 'John Tyndall, "On the Absorption and Radiation of Heat by Gases and Vapours" (1861).' },
    { texto: 'Svante Arrhenius, "On the Influence of Carbonic Acid in the Air upon the Temperature of the Ground" (1896).' },
    { texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021), cap. 5.', link: { url: 'https://www.ipcc.ch', rotulo: 'IPCC' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação com gráfico', 'Ler os textos indicados'],
  revisao: [['−18 °C', 'Sem efeito estufa.'], ['Tyndall', '1859.'], ['Metade', 'Fica na atmosfera.']],
  avancado: {
    texto: `<h3>Potencial de aquecimento global</h3>
<p>Para comparar gases, usa-se o potencial de aquecimento global (GWP), que expressa o efeito de uma tonelada de um gás em toneladas equivalentes de CO2 num horizonte de tempo ${tag('fato')}. O metano tem efeito muito maior que o CO2 por tonelada, mas dura menos na atmosfera; por isso seu GWP é muito mais alto em 20 anos do que em 100 anos ${tag('fato')}. A escolha do horizonte influi na importância atribuída a cada setor ${tag('debate')}.</p>`,
    leituras: [{ texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021), cap. 7.' }],
    exercicios: [
      mc('O GWP expressa o efeito de um gás em equivalentes de:', ['Metano', 'CO2', 'Oxigênio', 'Vapor'], 1, 'Comparação.'),
      mc('O GWP do metano é maior em:', ['20 anos', '100 anos', '1.000 anos', 'Igual sempre'], 0, 'Vida curta.'),
      mc('A escolha do horizonte de tempo é:', ['Irrelevante', 'Objeto de debate', 'Fixada por lei física', 'Desconhecida'], 1, 'Setores.'),
      disc('Explique como a escolha entre GWP de 20 e de 100 anos muda o peso da pecuária nas emissões brasileiras.', ['GWP', 'Metano', 'Efeito no Brasil', 'Avaliação'])],
  },
}),

aula({
  id: 'ca4-2', titulo: 'Água e solos: ciclo hidrológico, bacias hidrográficas e conservação do solo', duracao: '150 min',
  aprendera: ['Descrever a distribuição da água no planeta', 'Explicar a bacia hidrográfica como unidade de gestão', 'Conhecer os instrumentos da Lei das Águas', 'Explicar a erosão e práticas de conservação do solo'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil tem muita água e, ainda assim, sofre crises hídricas. E o solo, base da produção, pode ser perdido em poucas décadas.</p>
<h3>Água no planeta</h3>
<p>Cerca de 97% da água da Terra é salgada; da água doce, a maior parte está em geleiras e aquíferos, e só uma pequena fração em rios e lagos ${tag('fato')}. O Brasil detém parcela expressiva da água doce superficial do mundo, concentrada sobretudo na Amazônia, longe da maior parte da população ${tag('fato')}.</p>
<h3>Bacia hidrográfica e Lei das Águas</h3>
<p>A bacia hidrográfica é a área drenada por um rio e seus afluentes ${tag('fato')}. A Lei nº 9.433/1997 (Política Nacional de Recursos Hídricos) estabelece que a água é bem de domínio público, recurso limitado e dotado de valor econômico, que a bacia é a unidade de gestão e que a gestão deve ser descentralizada e participativa, com comitês de bacia ${tag('fato')}. Seus instrumentos incluem os planos de recursos hídricos, o enquadramento dos corpos d'água em classes, a outorga de direito de uso e a cobrança pelo uso ${tag('fato')}.</p>
<h3>Solos</h3>
<p>O solo forma-se lentamente, pela alteração das rochas e pela ação dos seres vivos; a erosão pode removê-lo muito mais depressa ${tag('fato')}. Práticas como plantio direto, curvas de nível e manutenção de cobertura vegetal reduzem a erosão ${tag('fato')}. No Cerrado, a correção da acidez dos solos com calcário, desenvolvida por pesquisas da Embrapa e de outras instituições, permitiu a expansão agrícola ${tag('fato')}.</p>`,
  vocabulario: [
    ['Bacia hidrográfica', 'Área drenada por um rio e seus afluentes.'],
    ['Aquífero', 'Formação geológica que armazena água subterrânea.'],
    ['Outorga', 'Autorização do poder público para usar recursos hídricos.'],
    ['Comitê de bacia', 'Colegiado de poder público, usuários e sociedade que gere a bacia.'],
    ['Plantio direto', 'Cultivo sem revolver o solo, mantendo a palhada.'],
  ],
  exemplos: `<p><strong>A crise hídrica de 2014–2015 em São Paulo:</strong> uma seca forte reduziu os reservatórios do Sistema Cantareira a níveis muito baixos. A crise combinou fator natural (pouca chuva) e fatores de gestão (demanda alta, perdas na distribuição, poucas alternativas de abastecimento). Separar as causas é tarefa de análise com dados.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Agenda 2030 das Nações Unidas inclui o acesso universal à água potável e ao saneamento (Objetivo 6) ${tag('fato')}. <strong>No Brasil:</strong> o Aquífero Guarani, que se estende sob o Brasil, a Argentina, o Paraguai e o Uruguai, é uma das grandes reservas subterrâneas da América do Sul ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a bacia hidrográfica é a unidade adequada de gestão', tag: 'argumento',
    premissas: ['A água escoa segundo o relevo, não segundo divisas de municípios ou estados.', 'O uso a montante afeta a quantidade e a qualidade a jusante.', 'Só uma gestão que abranja toda a área drenada pode coordenar esses efeitos.'],
    conclusao: 'Logo, a bacia hidrográfica é a unidade adequada para gerir a água.',
    nota: 'Por isso a Lei 9.433/1997 cria comitês de bacia, que reúnem diferentes municípios e usuários.',
  },
  objecoes: [
    { objecao: 'Cobrar pelo uso da água é injusto, porque a água é dom de Deus.', tag: 'debate',
      resposta: 'A cobrança prevista em lei incide sobre grandes usos, como captação industrial e lançamento de efluentes, para financiar a gestão e incentivar o uso racional; não é cobrança pela água como bem natural. A Laudato si\' afirma que o acesso à água potável é direito humano essencial (n. 30), o que exige gestão e investimento.' },
  ],
  aplicacao: `<p>Identifique a bacia hidrográfica onde você mora: rio principal, comitê de bacia, principais usos da água e um problema de quantidade ou qualidade, com fontes.</p>`,
  fonte: {
    obra: 'Lei nº 9.433/1997 (Política Nacional de Recursos Hídricos), arts. 1º e 5º; Papa Francisco, Laudato si\' (2015), n. 27–31', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' },
    orientacao: `<p>Na Lei 9.433, os fundamentos (art. 1º) e os instrumentos (art. 5º). Na Laudato si', a água como direito e os riscos de sua privatização desordenada.</p>`,
  },
  perguntas: [
    { p: 'Qual a unidade de gestão da água segundo a Lei 9.433/1997?', r: 'A bacia hidrográfica.' },
    { p: 'Que fração da água da Terra é salgada?', r: 'Cerca de 97%.' },
    { p: 'O que permitiu a expansão agrícola nos solos ácidos do Cerrado?', r: 'A correção da acidez com calcário, entre outras técnicas.' },
  ],
  exercicios: [
    mc('A Política Nacional de Recursos Hídricos é a Lei:', ['6.938/1981', '9.433/1997', '12.305/2010', '14.026/2020'], 1, 'Lei das Águas.'),
    mc('A maior parte da água doce do planeta está em:', ['Rios', 'Geleiras e aquíferos', 'Lagos', 'Atmosfera'], 1, 'Distribuição.'),
    mc('A autorização para usar recursos hídricos chama-se:', ['Licença de pesca', 'Outorga', 'Tarifa', 'Concessão de energia'], 1, 'Instrumento.'),
    mc('O plantio direto:', ['Revolve o solo', 'Mantém a palhada sem revolver o solo', 'Queima a palha', 'Proíbe a agricultura'], 1, 'Conservação.'),
    mc('O acesso à água potável como direito humano essencial está na Laudato si\', n.:', ['30', '90', '139', '186'], 0, 'Água.'),
    disc('Apresente a bacia hidrográfica onde você mora: rio, comitê, usos e um problema, com fontes.', ['Bacia e rio', 'Comitê', 'Usos', 'Problema com fonte']),
  ],
  resumo: ['97% salgada; doce em geleiras e aquíferos.', 'Lei 9.433/1997: bacia, comitês, outorga, cobrança.', 'Crise hídrica 2014–2015.', 'Erosão e plantio direto.', 'LS 30: água, direito humano.'],
  referencias: [
    { texto: 'Lei nº 9.433, de 1997.' },
    { texto: 'Agência Nacional de Águas e Saneamento Básico, Conjuntura dos recursos hídricos no Brasil.' },
    { texto: 'Papa Francisco, Laudato si\' (2015), n. 27–31.', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a apresentação da bacia', 'Ler os textos indicados'],
  revisao: [['Lei 9.433', 'Bacia como unidade.'], ['Outorga', 'Autorização de uso.'], ['LS 30', 'Direito à água.']],
  avancado: {
    texto: `<h3>Pegada hídrica</h3>
<p>A pegada hídrica estima a água usada direta e indiretamente na produção de um bem, distinguindo água azul (de rios e aquíferos), verde (da chuva armazenada no solo) e cinza (necessária para diluir poluentes) ${tag('fato')}. Comparar pegadas sem separar os tipos pode enganar: a água da chuva usada por uma pastagem não compete com o abastecimento urbano da mesma forma que a irrigação ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Arjen Hoekstra e outros, The Water Footprint Assessment Manual (2011).' }],
    exercicios: [
      mc('A água da chuva armazenada no solo é chamada de:', ['Azul', 'Verde', 'Cinza', 'Branca'], 1, 'Pegada hídrica.'),
      mc('A água cinza refere-se à necessária para:', ['Irrigar', 'Diluir poluentes', 'Beber', 'Gerar energia'], 1, 'Qualidade.'),
      mc('Somar pegadas sem separar os tipos pode:', ['Ser sempre correto', 'Enganar', 'Ser proibido', 'Nada'], 1, 'Interpretação.'),
      disc('Compare a pegada hídrica de dois alimentos e explique por que separar água azul e verde importa.', ['Dois alimentos', 'Tipos de água', 'Interpretação', 'Fontes'])],
  },
}),

aula({
  id: 'ca4-3', titulo: 'Poluição e resíduos: ar, água, saneamento e a Política Nacional de Resíduos Sólidos', duracao: '150 min',
  aprendera: ['Conhecer os principais poluentes do ar e seus padrões', 'Conhecer as metas do Marco Legal do Saneamento', 'Explicar a hierarquia de resíduos da PNRS', 'Avaliar a gestão de resíduos de uma cidade'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A poluição do ar e da água e o destino do lixo afetam diretamente a saúde, sobretudo dos mais pobres. Como medir e enfrentar esses problemas?</p>
<h3>Ar</h3>
<p>As partículas finas (MP2,5), menores que 2,5 micrômetros, penetram profundamente nos pulmões e estão associadas a doenças respiratórias e cardiovasculares ${tag('fato')}. A Organização Mundial da Saúde, em 2021, recomendou como diretriz que a média anual de MP2,5 não ultrapasse 5 µg/m³ ${tag('fato')}. No Brasil, os padrões nacionais de qualidade do ar estão na Resolução Conama nº 491/2018 ${tag('fato')}.</p>
<h3>Água e saneamento</h3>
<p>O lançamento de esgoto sem tratamento é a principal causa de poluição de muitos rios urbanos brasileiros ${tag('interpretacao')}. O Marco Legal do Saneamento (Lei nº 14.026/2020) fixou como metas, até 2033, o atendimento de 99% da população com água potável e de 90% com coleta e tratamento de esgoto ${tag('fato')}.</p>
<h3>Resíduos sólidos</h3>
<p>A Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) estabelece a ordem de prioridade: não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada dos rejeitos ${tag('fato')}. Prevê a logística reversa, a responsabilidade compartilhada pelo ciclo de vida dos produtos e a integração dos catadores de materiais recicláveis ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>A <em>Laudato si'</em> critica a "cultura do descarte" e liga a poluição aos danos à saúde dos pobres (n. 20–22) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['MP2,5', 'Partículas com diâmetro menor que 2,5 micrômetros.'],
    ['µg/m³', 'Micrograma por metro cúbico de ar.'],
    ['Esgotamento sanitário', 'Coleta, transporte e tratamento de esgoto.'],
    ['Logística reversa', 'Retorno de produtos e embalagens após o uso para reaproveitamento ou destinação.'],
    ['Rejeito', 'Resíduo sem possibilidade de recuperação, destinado à disposição final.'],
  ],
  exemplos: `<p><strong>Aplicando a hierarquia:</strong> numa escola, a prioridade não é apenas reciclar copos plásticos, mas deixar de gerá-los (canecas próprias); depois, reduzir embalagens; reutilizar papel; reciclar o que sobrar; compostar restos de comida (tratamento); e só então enviar rejeitos ao aterro sanitário.</p>`,
  contexto: `<p><strong>No mundo:</strong> a OMS estima que a poluição do ar está entre os maiores riscos ambientais para a saúde ${tag('fato')}. <strong>No Brasil:</strong> o Sistema Nacional de Informações sobre Saneamento (SNIS) publica dados de abastecimento de água, esgoto e resíduos por município ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a não geração vem antes da reciclagem', tag: 'argumento',
    premissas: ['Reciclar exige coleta, transporte, energia e processamento.', 'Parte do material se perde em cada ciclo de reciclagem.', 'Evitar gerar o resíduo dispensa todos esses custos e perdas.'],
    conclusao: 'Logo, não gerar e reduzir resíduos é, em regra, melhor do que reciclá-los.',
    nota: 'A reciclagem continua importante para o que não pode ser evitado.',
  },
  objecoes: [
    { objecao: 'Saneamento é problema de engenharia, não de ciências ambientais.', tag: 'debate',
      resposta: 'O saneamento é obra de engenharia, mas suas causas e efeitos são ambientais e sanitários: esgoto altera o oxigênio dos rios, transmite doenças e afeta ecossistemas costeiros. As ciências ambientais medem esses efeitos e ajudam a definir prioridades, em conjunto com a engenharia e a saúde pública.' },
  ],
  aplicacao: `<p>Com dados do SNIS ou da prefeitura, descreva a gestão de resíduos da sua cidade: quanto é coletado, quanto é reciclado, onde é disposto o rejeito e se há catadores organizados. Avalie à luz da hierarquia da PNRS.</p>`,
  fonte: {
    obra: 'Lei nº 12.305/2010 (PNRS), arts. 3º, 9º e 33; Lei nº 14.026/2020; Organização Mundial da Saúde, Diretrizes globais de qualidade do ar (2021)', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na PNRS, a ordem de prioridade (art. 9º) e a logística reversa (art. 33). No Marco do Saneamento, as metas para 2033. Nas diretrizes da OMS, o valor recomendado para MP2,5.</p>`,
  },
  perguntas: [
    { p: 'Qual a diretriz anual da OMS para MP2,5 (2021)?', r: '5 µg/m³.' },
    { p: 'Quais as metas do Marco Legal do Saneamento para 2033?', r: '99% com água potável e 90% com coleta e tratamento de esgoto.' },
    { p: 'Qual a primeira prioridade da PNRS?', r: 'A não geração de resíduos.' },
  ],
  exercicios: [
    mc('A Política Nacional de Resíduos Sólidos é a Lei:', ['9.433/1997', '12.305/2010', '14.026/2020', '6.938/1981'], 1, 'PNRS.'),
    mc('Na hierarquia da PNRS, a reciclagem vem:', ['Em primeiro lugar', 'Depois da não geração, redução e reutilização', 'Por último', 'Não aparece'], 1, 'Art. 9º.'),
    mc('O Marco Legal do Saneamento é de:', ['2007', '2010', '2020', '2033'], 2, 'Lei 14.026.'),
    mc('Os padrões nacionais de qualidade do ar estão na:', ['Resolução Conama 491/2018', 'Lei 9.433/1997', 'CF art. 14', 'Lei 12.651/2012'], 0, 'Ar.'),
    mc('A "cultura do descarte" é criticada na:', ['Laudato si\'', 'Rerum novarum', 'Humanae vitae', 'Pacem in terris'], 0, 'N. 20–22.'),
    disc('Descreva e avalie a gestão de resíduos da sua cidade à luz da hierarquia da PNRS, com dados.', ['Dados com fonte', 'Coleta e reciclagem', 'Disposição final', 'Avaliação pela hierarquia']),
  ],
  resumo: ['MP2,5; OMS 2021: 5 µg/m³.', 'Conama 491/2018.', 'Saneamento: metas de 2033.', 'PNRS: hierarquia, logística reversa, catadores.', 'LS 20–22: cultura do descarte.'],
  referencias: [
    { texto: 'Lei nº 12.305, de 2010 (Política Nacional de Resíduos Sólidos).' },
    { texto: 'Lei nº 14.026, de 2020 (Marco Legal do Saneamento).' },
    { texto: 'Organização Mundial da Saúde, Diretrizes globais de qualidade do ar (2021).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação da gestão de resíduos', 'Consultar os dados oficiais'],
  revisao: [['5 µg/m³', 'OMS.'], ['2033', 'Metas do saneamento.'], ['PNRS', 'Não gerar primeiro.']],
  avancado: {
    texto: `<h3>Análise de ciclo de vida</h3>
<p>A análise de ciclo de vida avalia os impactos de um produto da extração das matérias-primas ao descarte ${tag('fato')}. Comparações como sacola plástica e sacola de pano dependem do número de usos: uma sacola reutilizável só compensa seus impactos de produção depois de muitas utilizações ${tag('interpretacao')}.</p>
<p>Os resultados variam conforme os critérios escolhidos (clima, água, toxicidade), por isso convém examinar o método ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Normas ISO 14040 e 14044 (análise de ciclo de vida).' }],
    exercicios: [
      mc('A análise de ciclo de vida considera:', ['Só o descarte', 'Da extração ao descarte', 'Só o preço', 'Só a produção'], 1, 'Berço ao túmulo.'),
      mc('Uma sacola reutilizável compensa seus impactos:', ['No primeiro uso', 'Após muitos usos', 'Nunca', 'Sempre'], 1, 'Número de usos.'),
      mc('As normas de ciclo de vida são da série:', ['ISO 9000', 'ISO 14040', 'ISO 27000', 'ISO 45000'], 1, 'Gestão ambiental.'),
      disc('Compare dois produtos de uso cotidiano com a lógica do ciclo de vida, indicando os critérios usados.', ['Produtos', 'Etapas do ciclo', 'Critérios', 'Conclusão proporcional'])],
  },
}),

aula({
  id: 'ca4-4', titulo: 'Biomas brasileiros e monitoramento: PRODES, DETER, queimadas e MapBiomas', duracao: '150 min',
  aprendera: ['Caracterizar os seis biomas brasileiros', 'Distinguir os sistemas de monitoramento do INPE', 'Usar dados do MapBiomas', 'Interpretar uma série de cobertura do solo de um município'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como saber, com dados e não com impressões, o que acontece com a vegetação de cada bioma brasileiro?</p>
<h3>Os biomas</h3>
<p>O IBGE reconhece seis biomas continentais: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal ${tag('fato')}. A Amazônia é o maior; o Cerrado, o segundo, abriga nascentes de grandes bacias; a Mata Atlântica concentra a maior parte da população; a Caatinga é exclusivamente brasileira; o Pampa ocupa o sul do Rio Grande do Sul; o Pantanal é uma das maiores planícies alagáveis do mundo ${tag('fato')}. A biodiversidade desses biomas foi tratada em bi4-3; aqui o foco é o monitoramento ${tag('fato')}.</p>
<h3>Monitoramento</h3>
<p>O PRODES mede anualmente o corte raso da vegetação na Amazônia desde 1988 e foi estendido a outros biomas ${tag('fato')}. O DETER emite alertas quase diários para orientar a fiscalização ${tag('fato')}. O Programa Queimadas do INPE detecta focos de calor por satélite ${tag('fato')}. O MapBiomas, rede de universidades, ONGs e empresas criada em 2015, produz mapas anuais de cobertura e uso da terra de todo o país desde 1985 ${tag('fato')}.</p>
<h3>Ler os dados</h3>
<p>Foco de calor não é o mesmo que área queimada; alerta do DETER não é a taxa oficial; mapas de sistemas diferentes podem divergir por usarem métodos e definições diferentes ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Bioma', 'Grande conjunto de ecossistemas com clima e vegetação semelhantes.'],
    ['Corte raso', 'Remoção completa da vegetação nativa.'],
    ['Foco de calor', 'Ponto de temperatura elevada detectado por satélite.'],
    ['Cobertura do solo', 'O que recobre a superfície: floresta, pasto, lavoura, água, cidade.'],
    ['Série temporal de mapas', 'Mapas do mesmo lugar em anos sucessivos.'],
  ],
  exemplos: `<p><strong>Lendo uma série do MapBiomas:</strong> um município tinha 70% de vegetação nativa em 1985 e 45% em 2020; a pastagem passou de 25% para 40%, e a lavoura de 2% para 12%. A série mostra conversão de vegetação em pasto e depois de parte do pasto em lavoura. A interpretação das causas exige outros dados, como preços, crédito e estradas.</p>`,
  contexto: `<p><strong>No mundo:</strong> o monitoramento por satélite do Brasil é reconhecido como referência entre os países tropicais ${tag('interpretacao')}. <strong>No Brasil:</strong> os dados do PRODES, do DETER e do MapBiomas são públicos e gratuitos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que dados públicos de monitoramento fortalecem a política ambiental', tag: 'argumento',
    premissas: ['Políticas ambientais dependem de saber onde e quando a vegetação é suprimida.', 'Dados públicos permitem que governos, empresas, imprensa e cidadãos verifiquem a situação.', 'A verificação independente dificulta a negação dos problemas e orienta a fiscalização.'],
    conclusao: 'Logo, o monitoramento público e transparente fortalece a política ambiental.',
    nota: 'Os dados indicam onde e quanto; a responsabilização exige ainda investigação e processo legal.',
  },
  objecoes: [
    { objecao: 'Se o MapBiomas e o PRODES dão números diferentes, um deles está errado.', tag: 'debate',
      resposta: 'Os sistemas usam definições diferentes (por exemplo, corte raso de floresta primária ou toda supressão de vegetação), resoluções e períodos de referência distintos. Diferenças são esperadas e devem ser explicadas pelas metodologias. Ambos podem estar corretos dentro de suas definições.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa com o MapBiomas: obtenha a série de cobertura do solo do seu município de 1985 até o ano mais recente, faça um gráfico e descreva as principais mudanças.</p>`,
  fonte: {
    obra: 'IBGE, Biomas e sistema costeiro-marinho do Brasil (2019); INPE, PRODES e DETER; MapBiomas, coleções anuais', link: { url: 'https://mapbiomas.org', rotulo: 'MapBiomas' },
    orientacao: `<p>No IBGE, a delimitação dos biomas. No INPE, a diferença entre PRODES e DETER. No MapBiomas, a plataforma de estatísticas por município.</p>`,
  },
  perguntas: [
    { p: 'Quais os seis biomas continentais do Brasil?', r: 'Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal.' },
    { p: 'Qual a diferença entre PRODES e DETER?', r: 'O PRODES mede a taxa anual; o DETER emite alertas rápidos para fiscalização.' },
    { p: 'Desde quando o MapBiomas tem mapas anuais?', r: 'Desde 1985.' },
  ],
  exercicios: [
    mc('O bioma exclusivamente brasileiro é a:', ['Amazônia', 'Caatinga', 'Mata Atlântica', 'Pampa'], 1, 'IBGE.'),
    mc('O segundo maior bioma brasileiro é o:', ['Cerrado', 'Pampa', 'Pantanal', 'Caatinga'], 0, 'Área.'),
    mc('Foco de calor é o mesmo que área queimada?', ['Sim', 'Não', 'Só na Amazônia', 'Só à noite'], 1, 'Leitura dos dados.'),
    mc('O MapBiomas foi criado em:', ['1985', '2004', '2015', '2022'], 2, 'Rede.'),
    mc('Diferenças entre PRODES e MapBiomas decorrem sobretudo de:', ['Fraude', 'Definições e métodos', 'Acaso', 'Erro de digitação'], 1, 'Metodologia.'),
    disc('Apresente a série de cobertura do solo do seu município no MapBiomas, com gráfico e descrição das mudanças.', ['Dados do MapBiomas', 'Gráfico', 'Descrição', 'Hipóteses sobre causas']),
  ],
  resumo: ['Seis biomas (IBGE).', 'PRODES: taxa anual (1988).', 'DETER: alertas.', 'Queimadas: focos de calor.', 'MapBiomas: mapas anuais desde 1985.'],
  referencias: [
    { texto: 'IBGE, Biomas e sistema costeiro-marinho do Brasil (2019).' },
    { texto: 'INPE, PRODES, DETER e Programa Queimadas.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
    { texto: 'MapBiomas, coleções anuais de cobertura e uso da terra.', link: { url: 'https://mapbiomas.org', rotulo: 'MapBiomas' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a série do município', 'Consultar as plataformas indicadas'],
  revisao: [['Seis biomas', 'IBGE.'], ['PRODES e DETER', 'Taxa e alerta.'], ['MapBiomas', 'Desde 1985.']],
  avancado: {
    texto: `<h3>Degradação além do desmatamento</h3>
<p>Além do corte raso, florestas podem ser degradadas por fogo, extração seletiva de madeira e efeito de borda, mantendo a cobertura mas perdendo biomassa e espécies ${tag('fato')}. Medir a degradação é mais difícil que medir o desmatamento e exige técnicas como radar e lidar ${tag('fato')}. Sua extensão na Amazônia é objeto de pesquisa ativa ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'INPE, publicações sobre degradação florestal.' }],
    exercicios: [
      mc('A degradação florestal difere do desmatamento porque:', ['Remove toda a vegetação', 'Mantém a cobertura com perda de biomassa e espécies', 'Só ocorre em cidades', 'Não existe'], 1, 'Definição.'),
      mc('Uma técnica para medir estrutura florestal é o:', ['Lidar', 'Termômetro', 'Pluviômetro', 'Barômetro'], 0, 'Laser.'),
      mc('O efeito de borda ocorre:', ['No centro da floresta', 'Nas margens de fragmentos', 'No oceano', 'Na atmosfera'], 1, 'Fragmentação.'),
      disc('Explique por que medir apenas o desmatamento pode subestimar a perda florestal.', ['Desmatamento', 'Degradação', 'Medição', 'Consequência'])],
  },
}),

avaliacao('ca4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre clima e carbono, água e solos, poluição e resíduos, e biomas e monitoramento, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a explicação do efeito estufa e a série do seu município.</li><li>Revise a hierarquia da PNRS e os instrumentos da Lei das Águas.</li></ul>`,
[
  disc('Explique, com o balanço de energia e dados, por que o aumento de CO2 aquece a superfície, e relacione com o perfil das emissões brasileiras.', ['Balanço de energia', 'Dados de CO2', 'Emissões brasileiras', 'Fontes']),
  disc('Escolha um problema ambiental do seu município (água, resíduos, ar ou vegetação) e analise-o com dados, a lei aplicável e uma proposta proporcional.', ['Problema com dados', 'Lei aplicável', 'Proposta', 'Limites']),
]),
];
