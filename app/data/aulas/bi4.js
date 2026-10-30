// Biologia IV — estudos avançados (etapa 8 do percurso de Biologia).
// Do gene à proteína e as doenças genéticas; fisiologia humana e imunidade; ecologia e biodiversidade;
// a biologia no Brasil (Oswaldo Cruz, Carlos Chagas, Vital Brazil, Fritz Müller, Goeldi).
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'bi4-1', titulo: 'Do gene à proteína: transcrição, tradução, mutação e doenças genéticas', duracao: '150 min',
  aprendera: ['Explicar a transcrição e a tradução', 'Explicar o que é uma mutação e seus efeitos', 'Explicar a anemia falciforme como doença molecular', 'Relacionar genética e saúde pública no Brasil'],
  prereq: ['Biologia III (módulo BI3)', 'Biologia II: Mendel e o DNA (bi2-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Como a informação de um gene se torna uma proteína, e como um erro numa única "letra" do DNA pode causar uma doença?</p>
<h3>Transcrição e tradução</h3>
<p>Na <strong>transcrição</strong>, um trecho de DNA é copiado em RNA mensageiro, no núcleo ${tag('fato')}. Na <strong>tradução</strong>, nos ribossomos, o RNA mensageiro é lido de três em três bases (códons), e cada códon corresponde a um aminoácido trazido por um RNA transportador; a sequência de aminoácidos forma a proteína ${tag('fato')}.</p>
<h3>Mutação</h3>
<p>Mutação é uma alteração na sequência do DNA ${tag('fato')}. Pode ser neutra, prejudicial ou, raramente, vantajosa; pode afetar uma só base (mutação pontual) ou trechos maiores ${tag('fato')}.</p>
<h3>Anemia falciforme</h3>
<p>Em 1949, Linus Pauling e colaboradores mostraram que a hemoglobina de pessoas com anemia falciforme é diferente — a primeira "doença molecular" descrita ${tag('fato')}. A causa é a troca de um único aminoácido (ácido glutâmico por valina) na cadeia beta da hemoglobina, por uma mutação pontual ${tag('fato')}. Os glóbulos vermelhos tomam forma de foice e obstruem vasos ${tag('fato')}. Pessoas heterozigotas (traço falciforme) têm alguma proteção contra a malária, o que explica a frequência maior do alelo em regiões onde a malária foi comum ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>O Programa Nacional de Triagem Neonatal, de 2001, incluiu a doença falciforme no "teste do pezinho" ${tag('fato')}. A doença é mais frequente entre afrodescendentes, por razões históricas ligadas à origem das populações ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Transcrição', 'Cópia de um trecho de DNA em RNA mensageiro.'],
    ['Tradução', 'Síntese de proteína a partir do RNA mensageiro nos ribossomos.'],
    ['Códon', 'Trinca de bases que corresponde a um aminoácido.'],
    ['Mutação pontual', 'Alteração de uma única base do DNA.'],
    ['Doença molecular', 'Doença causada por alteração numa molécula específica (Pauling, 1949).'],
    ['Heterozigoto', 'Indivíduo com dois alelos diferentes de um gene.'],
  ],
  exemplos: `<p><strong>Do códon ao sintoma:</strong> no gene da beta-globina, o códon GAG (ácido glutâmico) passa a GTG (valina). Essa troca de uma base muda um aminoácido; a hemoglobina alterada se agrega quando há pouco oxigênio; a hemácia deforma; os vasos se obstruem; surgem dor e anemia. Uma letra muda o organismo inteiro.</p>`,
  contexto: `<p><strong>No mundo:</strong> terapias genéticas para a doença falciforme começaram a ser aprovadas em alguns países a partir de 2023 ${tag('fato')}. <strong>No Brasil:</strong> a triagem neonatal e o acompanhamento pelo SUS permitem tratamento precoce, que reduz complicações ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o alelo falciforme é frequente onde houve malária', tag: 'argumento',
    premissas: ['Homozigotos para o alelo falciforme têm doença grave.', 'Heterozigotos têm alguma proteção contra a malária, doença que matava muitas crianças.', 'Em regiões com malária, os heterozigotos sobreviviam mais que os homozigotos normais.'],
    conclusao: 'Logo, a seleção natural manteve o alelo em frequência relativamente alta onde a malária era comum.',
    nota: 'É exemplo clássico de "vantagem do heterozigoto".',
  },
  objecoes: [
    { objecao: 'Se a doença é genética, nada se pode fazer.', tag: 'debate',
      resposta: 'Diagnóstico precoce, vacinação, antibióticos preventivos, hidratação, transfusões e medicamentos mudaram a evolução da doença, e novas terapias genéticas surgem. Causa genética não significa destino imutável.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: explique o funcionamento de um gene, da transcrição à proteína, com o exemplo da anemia falciforme, incluindo um quadro de Punnett para um casal de heterozigotos.</p>`,
  fonte: {
    obra: 'Linus Pauling e outros, "Sickle Cell Anemia, a Molecular Disease" (1949); Ministério da Saúde, Programa Nacional de Triagem Neonatal', link: null,
    orientacao: `<p>No artigo de 1949, localize a evidência da diferença entre as hemoglobinas. No material do Ministério da Saúde, as doenças incluídas na triagem. Relacione os dois.</p>`,
  },
  perguntas: [
    { p: 'O que acontece na transcrição?', r: 'Um trecho de DNA é copiado em RNA mensageiro.' },
    { p: 'Qual a causa molecular da anemia falciforme?', r: 'A troca de ácido glutâmico por valina na cadeia beta da hemoglobina, por mutação pontual.' },
    { p: 'Por que heterozigotos têm vantagem em regiões de malária?', r: 'Porque o traço falciforme confere alguma proteção contra a malária.' },
  ],
  exercicios: [
    mc('A tradução ocorre nos:', ['Núcleos', 'Ribossomos', 'Lisossomos', 'Cromossomos'], 1, 'Síntese de proteína.'),
    mc('A anemia falciforme foi chamada "doença molecular" por:', ['Watson', 'Pauling', 'Mendel', 'Chagas'], 1, '1949.'),
    mc('Casal Aa × Aa (a = alelo falciforme) tem probabilidade de filho aa de:', ['0%', '25%', '50%', '100%'], 1, 'Quadro de Punnett.'),
    mc('O Programa Nacional de Triagem Neonatal é de:', ['1988', '2001', '2010', '2023'], 1, 'Teste do pezinho.'),
    mc('Uma mutação pontual altera:', ['Um cromossomo inteiro', 'Uma única base', 'Todos os genes', 'Só proteínas'], 1, 'Definição.'),
    disc('Explique um gene da transcrição à proteína com o exemplo da anemia falciforme e o quadro de Punnett para um casal heterozigoto.', ['Transcrição e tradução', 'Mutação explicada', 'Quadro de Punnett', 'Relação com saúde pública']),
  ],
  resumo: ['Transcrição (DNA → RNAm) e tradução (RNAm → proteína).', 'Códons e mutações.', 'Anemia falciforme: Pauling (1949); Glu → Val.', 'Vantagem do heterozigoto e malária.', 'Triagem neonatal (2001).'],
  referencias: [
    { texto: 'Linus Pauling e outros, "Sickle Cell Anemia, a Molecular Disease" (1949).' },
    { texto: 'Bruce Alberts e outros, Biologia molecular da célula (manual).' },
    { texto: 'Ministério da Saúde, Programa Nacional de Triagem Neonatal.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a explicação do gene', 'Ler os textos indicados'],
  revisao: [['Transcrição', 'DNA → RNAm.'], ['Pauling', 'Doença molecular, 1949.'], ['Heterozigoto', 'Proteção contra malária.']],
  avancado: {
    texto: `<h3>Regulação gênica</h3>
<p>Nem todos os genes estão ativos em todas as células: François Jacob e Jacques Monod descreveram, em 1961, o operon lac das bactérias, em que genes são ligados e desligados conforme o ambiente ${tag('fato')}. A regulação explica por que células com o mesmo genoma se tornam neurônios ou células do fígado ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bruce Alberts e outros, Biologia molecular da célula (manual).' }],
    exercicios: [
      mc('O operon lac foi descrito por:', ['Watson e Crick', 'Jacob e Monod', 'Pauling', 'Mendel'], 1, '1961.'),
      mc('Células com o mesmo genoma diferem por:', ['Genes diferentes', 'Regulação gênica', 'Acaso', 'Tamanho'], 1, 'Expressão.'),
      mc('No operon lac, os genes são:', ['Sempre ativos', 'Ligados e desligados conforme o ambiente', 'Sempre inativos', 'Mutados'], 1, 'Regulação.'),
      disc('Explique por que um neurônio e uma célula do fígado têm o mesmo DNA e funções diferentes.', ['Mesmo genoma', 'Regulação', 'Exemplo', 'Clareza'])],
  },
}),

aula({
  id: 'bi4-2', titulo: 'Fisiologia humana: sistemas, homeostase e imunidade', duracao: '150 min',
  aprendera: ['Descrever a integração dos sistemas do corpo humano', 'Explicar a regulação da glicemia', 'Explicar imunidade inata e adaptativa', 'Explicar o princípio das vacinas'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O corpo humano mantém temperatura, pressão e glicose dentro de limites estreitos, e defende-se de micro-organismos. Como?</p>
<h3>Sistemas integrados</h3>
<p>Os sistemas circulatório, respiratório, digestório, excretor, nervoso, endócrino e imunológico trabalham juntos; os sistemas nervoso e endócrino coordenam os demais ${tag('fato')}.</p>
<h3>Glicemia</h3>
<p>Após a refeição, a glicose sobe e o pâncreas libera insulina, que faz as células absorverem glicose; em jejum, o glucagon libera glicose das reservas do fígado ${tag('fato')}. É um exemplo de retroalimentação negativa, típica da homeostase ${tag('fato')}. Frederick Banting e Charles Best isolaram a insulina em 1921, transformando o tratamento do diabetes ${tag('fato')}.</p>
<h3>Imunidade</h3>
<p>A imunidade <strong>inata</strong> (pele, inflamação, células fagocitárias) age logo e de modo geral; a <strong>adaptativa</strong> (linfócitos e anticorpos) é específica e tem memória ${tag('fato')}.</p>
<h3>Vacinas</h3>
<p>Edward Jenner, em 1796, usou material da varíola bovina para proteger contra a varíola humana ${tag('fato')}. As vacinas apresentam ao sistema imune um antígeno inofensivo, criando memória sem a doença ${tag('fato')}. A varíola foi declarada erradicada pela Organização Mundial da Saúde em 1980 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Retroalimentação negativa', 'Mecanismo que corrige desvios e mantém o equilíbrio.'],
    ['Insulina', 'Hormônio que reduz a glicose do sangue.'],
    ['Glucagon', 'Hormônio que eleva a glicose do sangue.'],
    ['Imunidade adaptativa', 'Defesa específica, com memória (linfócitos, anticorpos).'],
    ['Antígeno', 'Substância que o sistema imune reconhece e contra a qual reage.'],
  ],
  exemplos: `<p><strong>Termostato do corpo:</strong> quando a temperatura sobe, o hipotálamo provoca suor e dilatação dos vasos da pele; quando cai, tremores e contração dos vasos. Como um termostato, o corpo corrige os desvios — retroalimentação negativa.</p>`,
  contexto: `<p><strong>No mundo:</strong> a erradicação da varíola (1980) é um dos maiores êxitos da saúde pública. <strong>No Brasil:</strong> o Programa Nacional de Imunizações, criado em 1973, oferece vacinas gratuitas pelo SUS ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a vacina protege sem causar a doença', tag: 'argumento',
    premissas: ['A imunidade adaptativa reconhece antígenos específicos e guarda memória.', 'A vacina apresenta o antígeno de forma inofensiva (micro-organismo inativado, atenuado ou parte dele).', 'Num contato posterior com o agente real, a memória permite resposta rápida e forte.'],
    conclusao: 'Logo, a vacina cria proteção específica sem que a pessoa precise adoecer.',
    nota: 'A imunidade coletiva protege também quem não pode ser vacinado.',
  },
  objecoes: [
    { objecao: 'Vacinas são perigosas e desnecessárias.', tag: 'debate',
      resposta: 'Vacinas podem ter efeitos adversos, em geral leves e raros, monitorados pelas autoridades sanitárias. Os dados históricos mostram queda drástica de doenças como varíola, pólio e sarampo onde houve vacinação. A avaliação exige comparar riscos com fontes confiáveis.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise uma campanha de vacinação brasileira (por exemplo, poliomielite ou sarampo) com dados de cobertura vacinal e de casos ao longo dos anos, explicando o mecanismo imunológico.</p>`,
  fonte: {
    obra: 'Edward Jenner, An Inquiry into the Causes and Effects of the Variolae Vaccinae (1798); Ministério da Saúde, Programa Nacional de Imunizações', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' },
    orientacao: `<p>Em Jenner, localize o experimento com o menino James Phipps. Nos dados do Ministério da Saúde, a cobertura de uma vacina ao longo dos anos. Use ambos na análise.</p>`,
  },
  perguntas: [
    { p: 'Como a insulina regula a glicemia?', r: 'Faz as células absorverem glicose, reduzindo sua concentração no sangue.' },
    { p: 'Qual a diferença entre imunidade inata e adaptativa?', r: 'A inata é rápida e geral; a adaptativa é específica e tem memória.' },
    { p: 'Quando a varíola foi declarada erradicada?', r: 'Em 1980.' },
  ],
  exercicios: [
    mc('A insulina foi isolada em:', ['1796', '1880', '1921', '1953'], 2, 'Banting e Best.'),
    mc('O hormônio que eleva a glicose é o:', ['Insulina', 'Glucagon', 'Adrenalina apenas', 'Tiroxina'], 1, 'Pâncreas.'),
    mc('A vacina de Jenner é de:', ['1796', '1885', '1921', '1980'], 0, 'Varíola.'),
    mc('O Programa Nacional de Imunizações foi criado em:', ['1904', '1973', '1988', '2001'], 1, 'SUS.'),
    mc('A memória imunológica é característica da imunidade:', ['Inata', 'Adaptativa', 'Química', 'Nenhuma'], 1, 'Linfócitos.'),
    disc('Analise uma campanha de vacinação brasileira com dados de cobertura e casos, explicando o mecanismo imunológico.', ['Dados com fonte', 'Mecanismo', 'Relação cobertura x casos', 'Conclusão']),
  ],
  resumo: ['Sistemas integrados; nervoso e endócrino coordenam.', 'Glicemia: insulina e glucagon; retroalimentação negativa.', 'Insulina (1921).', 'Imunidade inata e adaptativa.', 'Vacinas: Jenner (1796); varíola erradicada (1980); PNI (1973).'],
  referencias: [
    { texto: 'Edward Jenner, An Inquiry into the Causes and Effects of the Variolae Vaccinae (1798).' },
    { texto: 'Arthur Guyton e John Hall, Tratado de fisiologia médica (manual).' },
    { texto: 'Fiocruz, publicações sobre imunização.', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da campanha', 'Ler os textos indicados'],
  revisao: [['Insulina', 'Reduz glicose.'], ['Adaptativa', 'Memória.'], ['1980', 'Varíola erradicada.']],
  avancado: {
    texto: `<h3>Vacinas de RNA mensageiro</h3>
<p>As vacinas de RNA mensageiro levam às células a instrução para produzir um antígeno, que estimula a resposta imune; foram usadas em larga escala na pandemia de covid-19, e Katalin Karikó e Drew Weissman receberam o Nobel de Medicina de 2023 pelas pesquisas que as tornaram possíveis ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Arthur Guyton e John Hall, Tratado de fisiologia médica, capítulos sobre imunidade.' }],
    exercicios: [
      mc('Vacinas de RNA mensageiro levam às células:', ['O vírus inteiro', 'A instrução para produzir um antígeno', 'Anticorpos prontos', 'Antibióticos'], 1, 'RNAm.'),
      mc('Karikó e Weissman receberam o Nobel em:', ['2020', '2021', '2023', '2025'], 2, 'Medicina.'),
      mc('O RNA mensageiro da vacina:', ['Altera o DNA da pessoa', 'Não altera o DNA da pessoa', 'Vira proteína no núcleo', 'É um vírus'], 1, 'Atua no citoplasma.'),
      disc('Compare uma vacina de vírus inativado e uma de RNA mensageiro: mecanismo, vantagens e limites.', ['Dois tipos', 'Mecanismos', 'Vantagens', 'Limites'])],
  },
}),

aula({
  id: 'bi4-3', titulo: 'Ecologia e biodiversidade: energia, ciclos, hotspots e espécies ameaçadas', duracao: '150 min',
  aprendera: ['Explicar o fluxo de energia e os níveis tróficos', 'Descrever ciclos biogeoquímicos', 'Explicar o conceito de hotspot e a situação do Brasil', 'Relacionar conservação e ensino da Igreja'],
  prereq: ['Aulas anteriores do módulo', 'Geografia IV: domínios de natureza (g4-4)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que há menos onças que capivaras, e por que a perda de uma espécie pode afetar todo um ecossistema?</p>
<h3>Energia</h3>
<p>A energia entra nos ecossistemas pela fotossíntese dos produtores e passa aos consumidores; a cada nível trófico perde-se a maior parte, ficando disponível em média cerca de 10% para o nível seguinte — regra associada aos estudos de Raymond Lindeman (1942) ${tag('fato')}. Por isso há menos predadores de topo que herbívoros ${tag('fato')}.</p>
<h3>Ciclos</h3>
<p>A matéria circula: carbono (fotossíntese, respiração, combustão), nitrogênio (fixação por bactérias, como as das leguminosas), água ${tag('fato')}.</p>
<h3>Hotspots</h3>
<p>Norman Myers e colaboradores (2000) definiram <strong>hotspots</strong> como regiões com muitas espécies endêmicas e grande perda de vegetação original; a Mata Atlântica e o Cerrado estão entre eles ${tag('fato')}.</p>
<h3>Conservação</h3>
<p>A Convenção sobre Diversidade Biológica foi assinada na Rio-92 ${tag('fato')}. No Brasil, o Ministério do Meio Ambiente e o ICMBio publicam a lista de espécies ameaçadas ${tag('fato')}. A <em>Laudato si'</em> lamenta que milhares de espécies desapareçam todos os anos e afirma que elas têm valor em si mesmas, não só utilidade para o homem (n. 33) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Nível trófico', 'Posição na cadeia alimentar (produtor, consumidor primário etc.).'],
    ['Teia alimentar', 'Conjunto de cadeias alimentares interligadas.'],
    ['Ciclo biogeoquímico', 'Circulação de um elemento entre seres vivos e ambiente.'],
    ['Espécie endêmica', 'Espécie que só ocorre numa região.'],
    ['Hotspot', 'Região com muitas endêmicas e grande perda de habitat (Myers, 2000).'],
  ],
  exemplos: `<p><strong>Pirâmide de energia no Pantanal:</strong> se as plantas fixam 10.000 unidades de energia, os herbívoros (capivaras) aproveitam cerca de 1.000, e os predadores (onças) cerca de 100. É por isso que uma onça precisa de grande território: há pouca energia disponível no topo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a perda de habitat é a principal causa de extinção de espécies. <strong>No Brasil:</strong> a Mata Atlântica, onde vive a maior parte da população brasileira, mantém apenas uma fração de sua cobertura original, segundo levantamentos da Fundação SOS Mata Atlântica e do INPE ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que proteger predadores de topo protege o ecossistema', tag: 'argumento',
    premissas: ['Predadores de topo regulam as populações de herbívoros.', 'Sem predadores, herbívoros podem crescer demais e esgotar a vegetação.', 'A perda de vegetação afeta solo, água e muitas outras espécies.'],
    conclusao: 'Logo, a proteção de predadores de topo, como a onça, ajuda a manter o equilíbrio do ecossistema.',
    nota: 'Efeito em cascata trófica, documentado em vários ecossistemas.',
  },
  objecoes: [
    { objecao: 'Conservar espécies é luxo diante das necessidades humanas.', tag: 'debate',
      resposta: 'A biodiversidade sustenta serviços essenciais (polinização, água, solo, remédios) e tem valor próprio, segundo a Laudato si\'. Há tensões reais com necessidades humanas, que exigem políticas que conciliem conservação e desenvolvimento, não a escolha de um só lado.' },
  ],
  aplicacao: `<p>Escolha uma espécie ameaçada do seu bioma, consulte sua ficha na lista do ICMBio e explique: categoria de ameaça, causas, papel no ecossistema e uma ação de conservação.</p>`,
  fonte: {
    obra: 'Norman Myers e outros, "Biodiversity hotspots for conservation priorities" (2000); Papa Francisco, Laudato si\' (2015), n. 32–42', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'Laudato si\' (vatican.va)' },
    orientacao: `<p>Em Myers, localize os critérios de hotspot. Na Laudato si', a seção sobre a perda de biodiversidade. Relacione o critério científico e o moral.</p>`,
  },
  perguntas: [
    { p: 'Quanto da energia passa em média de um nível trófico ao seguinte?', r: 'Cerca de 10%.' },
    { p: 'O que é um hotspot?', r: 'Região com muitas espécies endêmicas e grande perda de vegetação original.' },
    { p: 'O que diz a Laudato si\' sobre as espécies?', r: 'Que têm valor em si mesmas, não só utilidade para o homem (n. 33).' },
  ],
  exercicios: [
    mc('Se os produtores fixam 50.000 unidades, os consumidores secundários recebem cerca de:', ['5.000', '500', '50', '50.000'], 1, '50.000 → 5.000 → 500.'),
    mc('Bactérias que fixam nitrogênio associam-se a:', ['Gramíneas', 'Leguminosas', 'Fungos', 'Algas'], 1, 'Nódulos das raízes.'),
    mc('Os hotspots foram definidos por Myers e colaboradores em:', ['1972', '1992', '2000', '2015'], 2, 'Prioridades de conservação.'),
    mc('São hotspots brasileiros:', ['Mata Atlântica e Cerrado', 'Pampa e Pantanal apenas', 'Só a Amazônia', 'Nenhum'], 0, 'Endemismo e perda.'),
    mc('A Convenção sobre Diversidade Biológica foi assinada em:', ['1972', '1987', '1992', '2015'], 2, 'Rio-92.'),
    disc('Apresente uma espécie ameaçada do seu bioma: categoria, causas, papel ecológico e uma ação de conservação, com fonte.', ['Espécie e categoria', 'Causas', 'Papel ecológico', 'Ação e fonte']),
  ],
  resumo: ['Fluxo de energia: ~10% por nível (Lindeman, 1942).', 'Ciclos do carbono, nitrogênio e água.', 'Hotspots (Myers, 2000): Mata Atlântica e Cerrado.', 'Rio-92: Convenção sobre Diversidade Biológica.', 'Laudato si\' 33: valor próprio das espécies.'],
  referencias: [
    { texto: 'Norman Myers e outros, "Biodiversity hotspots for conservation priorities" (2000).' },
    { texto: 'Raymond Lindeman, "The trophic-dynamic aspect of ecology" (1942).' },
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
    { texto: 'ICMBio, Lista de espécies ameaçadas.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Consultar a ficha da espécie'],
  revisao: [['10%', 'Energia por nível.'], ['Hotspot', 'Endemismo e perda.'], ['LS 33', 'Valor das espécies.']],
  avancado: {
    texto: `<h3>Fragmentação de habitat</h3>
<p>A teoria da biogeografia de ilhas, de Robert MacArthur e Edward Wilson (1967), prevê que áreas menores e mais isoladas sustentam menos espécies ${tag('fato')}. O Projeto Dinâmica Biológica de Fragmentos Florestais, perto de Manaus, estuda esses efeitos desde 1979 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Robert MacArthur e Edward Wilson, The Theory of Island Biogeography (1967).' }],
    exercicios: [
      mc('A biogeografia de ilhas é de:', ['Myers', 'MacArthur e Wilson', 'Lindeman', 'Darwin'], 1, '1967.'),
      mc('Fragmentos menores e isolados tendem a ter:', ['Mais espécies', 'Menos espécies', 'As mesmas espécies', 'Só predadores'], 1, 'Previsão.'),
      mc('O projeto de fragmentos florestais perto de Manaus começou em:', ['1959', '1979', '1999', '2009'], 1, 'Amazônia.'),
      disc('Proponha um corredor ecológico para ligar dois fragmentos de mata na sua região e explique o benefício com a teoria de MacArthur e Wilson.', ['Fragmentos', 'Corredor', 'Teoria aplicada', 'Limites'])],
  },
}),

aula({
  id: 'bi4-4', titulo: 'A biologia no Brasil: Oswaldo Cruz, Carlos Chagas, Vital Brazil, Fritz Müller e Goeldi', duracao: '150 min',
  aprendera: ['Situar os marcos da biologia e da saúde pública no Brasil', 'Explicar a descoberta da doença de Chagas', 'Explicar a produção de soros antiofídicos por Vital Brazil', 'Avaliar a Revolta da Vacina com fontes'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O Brasil teve papel importante na história da biologia e da medicina tropical. Quem foram seus protagonistas e o que fizeram?</p>
<h3>Oswaldo Cruz</h3>
<p>Oswaldo Cruz dirigiu o Instituto Soroterápico Federal (1900), depois Instituto Oswaldo Cruz, e, como diretor-geral de Saúde Pública, comandou campanhas contra a febre amarela, a peste e a varíola no Rio de Janeiro ${tag('fato')}. A vacinação obrigatória contra a varíola provocou a Revolta da Vacina (1904), movimento com causas sanitárias, sociais e políticas ${tag('interpretacao')}.</p>
<h3>Carlos Chagas</h3>
<p>Em 1909, em Lassance (MG), Carlos Chagas descreveu uma nova doença, seu agente — o <em>Trypanosoma cruzi</em>, nome em homenagem a Oswaldo Cruz — e seu vetor, o barbeiro; é caso raro de descrição completa por um mesmo pesquisador ${tag('fato')}.</p>
<h3>Vital Brazil</h3>
<p>Vital Brazil fundou o Instituto Butantan (1901), em São Paulo, e desenvolveu soros antiofídicos específicos, mostrando que cada tipo de veneno exige soro próprio ${tag('fato')}.</p>
<h3>Naturalistas</h3>
<p>Fritz Müller, em Santa Catarina, colaborou com Darwin (bi2-3) ${tag('fato')}. Emílio Goeldi dirigiu o Museu Paraense, em Belém, que hoje leva seu nome ${tag('fato')}. Adolpho Lutz contribuiu para a medicina tropical e a zoologia ${tag('fato')}.</p>`,
  vocabulario: [
    ['Medicina tropical', 'Ramo da medicina que estuda doenças típicas de regiões tropicais.'],
    ['Vetor', 'Ser vivo que transmite um agente de doença (o barbeiro, na doença de Chagas).'],
    ['Trypanosoma cruzi', 'Protozoário causador da doença de Chagas.'],
    ['Soro antiofídico', 'Preparação com anticorpos contra veneno de serpentes.'],
    ['Revolta da Vacina', 'Revolta popular no Rio de Janeiro em 1904.'],
  ],
  exemplos: `<p><strong>Ciclo da doença de Chagas:</strong> o barbeiro pica a pessoa e defeca perto da picada; o <em>T. cruzi</em> presente nas fezes entra pela pele lesionada ou pelas mucosas; o parasita se multiplica no corpo, podendo afetar coração e tubo digestivo. Casas de pau a pique com frestas favoreciam o barbeiro; a melhoria das moradias e o controle do vetor reduziram a transmissão ${tag('interpretacao')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a doença de Chagas é considerada pela Organização Mundial da Saúde uma doença tropical negligenciada. <strong>No Brasil:</strong> a transmissão pelo barbeiro doméstico <em>Triatoma infestans</em> foi interrompida, com certificação internacional em 2006 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a descoberta de Chagas foi excepcional', tag: 'argumento',
    premissas: ['Em geral, agente, vetor e doença de uma enfermidade são descritos por pesquisadores diferentes, em épocas diferentes.', 'Carlos Chagas identificou o barbeiro, encontrou nele o parasita e descreveu a doença em pacientes humanos.', 'Fez isso num curto período, em 1909.'],
    conclusao: 'Logo, a descoberta da doença de Chagas é caso raro de descrição completa por um único pesquisador.',
    nota: 'Chagas foi indicado ao Nobel, mas não o recebeu.',
  },
  objecoes: [
    { objecao: 'A Revolta da Vacina mostra que o povo era ignorante.', tag: 'debate',
      resposta: 'Historiadores mostram causas múltiplas: medo e desinformação, mas também o modo autoritário das campanhas, as demolições de cortiços e a disputa política contra o governo. Explicar a revolta só pela ignorância é simplificação.' },
  ],
  aplicacao: `<p>Escolha um dos cientistas da aula e apresente: formação, instituição, descoberta principal, impacto e uma fonte primária ou documental, separando fatos e interpretações.</p>`,
  fonte: {
    obra: 'Carlos Chagas, "Nova tripanozomiaze humana" (Memórias do Instituto Oswaldo Cruz, 1909); Fiocruz, Casa de Oswaldo Cruz, acervos históricos', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' },
    orientacao: `<p>No artigo de 1909, localize a descrição do vetor e do parasita. Nos acervos da Casa de Oswaldo Cruz, documentos sobre as campanhas sanitárias. Use-os na apresentação.</p>`,
  },
  perguntas: [
    { p: 'Quando e onde Carlos Chagas descreveu a doença?', r: 'Em 1909, em Lassance, Minas Gerais.' },
    { p: 'Quem fundou o Instituto Butantan?', r: 'Vital Brazil, em 1901.' },
    { p: 'Quando ocorreu a Revolta da Vacina?', r: 'Em 1904, no Rio de Janeiro.' },
  ],
  exercicios: [
    mc('O vetor da doença de Chagas é o:', ['Mosquito Aedes', 'Barbeiro', 'Caramujo', 'Rato'], 1, 'Triatomíneo.'),
    mc('O nome Trypanosoma cruzi homenageia:', ['Chagas', 'Oswaldo Cruz', 'Vital Brazil', 'Lutz'], 1, 'Mestre de Chagas.'),
    mc('Vital Brazil mostrou que soros antiofídicos devem ser:', ['Universais', 'Específicos para cada veneno', 'Desnecessários', 'Químicos'], 1, 'Especificidade.'),
    mc('O Museu Paraense leva o nome de:', ['Fritz Müller', 'Emílio Goeldi', 'Carlos Chagas', 'Adolpho Lutz'], 1, 'Belém.'),
    mc('A interrupção da transmissão por Triatoma infestans no Brasil foi certificada em:', ['1909', '1988', '2006', '2020'], 2, 'Certificação internacional.'),
    disc('Apresente um cientista brasileiro da aula: formação, instituição, descoberta, impacto e fonte, separando fatos e interpretações.', ['Formação e instituição', 'Descoberta', 'Impacto', 'Fonte']),
  ],
  resumo: ['Oswaldo Cruz: Instituto (1900), campanhas; Revolta da Vacina (1904).', 'Carlos Chagas (1909): agente, vetor e doença.', 'Vital Brazil: Butantan (1901), soros específicos.', 'Fritz Müller, Goeldi, Lutz.', 'Interrupção da transmissão vetorial (2006).'],
  referencias: [
    { texto: 'Carlos Chagas, "Nova tripanozomiaze humana" (1909).' },
    { texto: 'Nicolau Sevcenko, A Revolta da Vacina (1984).' },
    { texto: 'Fiocruz, Casa de Oswaldo Cruz.', link: { url: 'https://portal.fiocruz.br', rotulo: 'Fiocruz' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a apresentação do cientista', 'Consultar as fontes indicadas'],
  revisao: [['Chagas', '1909.'], ['Butantan', '1901.'], ['Revolta da Vacina', '1904.']],
  avancado: {
    texto: `<h3>A febre amarela</h3>
<p>A transmissão da febre amarela pelo mosquito, proposta por Carlos Finlay e confirmada pela comissão de Walter Reed em Cuba (1900), orientou a campanha de Oswaldo Cruz, que combateu o mosquito no Rio de Janeiro ${tag('fato')}. A vacina contra a febre amarela é produzida no Brasil por Bio-Manguinhos, da Fiocruz ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Jaime Benchimol, Dos micróbios aos mosquitos (1999).' }],
    exercicios: [
      mc('A transmissão da febre amarela pelo mosquito foi confirmada em Cuba em:', ['1881', '1900', '1904', '1937'], 1, 'Comissão de Walter Reed.'),
      mc('A vacina da febre amarela é produzida no Brasil por:', ['Butantan', 'Bio-Manguinhos (Fiocruz)', 'Embrapa', 'INPE'], 1, 'Fiocruz.'),
      mc('A campanha de Oswaldo Cruz contra a febre amarela combateu:', ['Ratos', 'O mosquito', 'O barbeiro', 'Serpentes'], 1, 'Vetor.'),
      disc('Compare as campanhas contra a febre amarela e contra a varíola no Rio de Janeiro do início do século XX: métodos, resultados e reação popular.', ['Duas campanhas', 'Métodos', 'Resultados', 'Reação'])],
  },
}),

avaliacao('bi4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre genética molecular, fisiologia, imunidade, ecologia e história da biologia no Brasil, com cálculos, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o quadro de Punnett e a pirâmide de energia.</li><li>Releia a análise da campanha de vacinação.</li></ul>`,
[
  disc('Explique a doença de Chagas ou a anemia falciforme em quatro níveis: molecular ou celular, organismo, população e saúde pública no Brasil.', ['Nível molecular ou celular', 'Organismo', 'População', 'Saúde pública com dados']),
  disc('Mostre como a perda de uma espécie pode afetar um ecossistema brasileiro, com o fluxo de energia e um exemplo real, e avalie com a Laudato si\'.', ['Fluxo de energia', 'Exemplo real', 'Efeitos em cascata', 'Avaliação moral']),
]),
];
