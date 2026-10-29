// Economia III — teorias e escolas, debates e críticas (etapas 6 e 7 do percurso de Economia).
// Escolas macroeconômicas, instituições e comportamento, Estado e mercado, e ética econômica.
// Cada escola é exposta pelos próprios argumentos; o juízo normativo é separado da análise.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

const CA = { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_01051991_centesimus-annus.html', rotulo: 'Centesimus Annus (vatican.va)' };
const CV = { url: 'https://www.vatican.va/content/benedict-xvi/pt/encyclicals/documents/hf_ben-xvi_enc_20090629_caritas-in-veritate.html', rotulo: 'Caritas in veritate (vatican.va)' };
const LS = { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: "Laudato si' (vatican.va)" };

export const AULAS = [
aula({
  id: 'e3-1', titulo: 'Escolas macroeconômicas: keynesianos, monetaristas, novos clássicos e o consenso atual', duracao: '150 min',
  aprendera: ['Comparar as principais escolas macroeconômicas pelo mecanismo causal de cada uma', 'Explicar a curva de Phillips e sua crítica', 'Explicar o consenso novo-keynesiano e o regime de metas', 'Conhecer a teoria da inflação inercial e o Plano Real'],
  prereq: ['Economia II (módulo E2)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que há recessões? A política monetária pode reduzir o desemprego? O governo deve gastar mais numa crise? As escolas macroeconômicas dão respostas diferentes, porque supõem mecanismos diferentes. Compará-las exige identificar, em cada uma, a hipótese que faz a diferença.</p>

<h3>As escolas</h3>
<ul>
<li><strong>Keynesianos</strong>: preços e salários se ajustam devagar; a demanda agregada determina produção e emprego no curto prazo; política fiscal e monetária podem estabilizar a economia ${tag('interpretacao')}.</li>
<li><strong>Monetaristas</strong> (Friedman): a inflação é, no longo prazo, fenômeno monetário; o Banco Central deve seguir regras estáveis, e não tentar ajustar a economia a cada momento ${tag('interpretacao')}.</li>
<li><strong>Novos clássicos</strong> (Lucas, Sargent): com expectativas racionais, políticas previsíveis não alteram o produto real de forma sistemática ${tag('interpretacao')}; os ciclos reais atribuem as flutuações a choques de produtividade ${tag('interpretacao')}.</li>
<li><strong>Novos keynesianos</strong>: aceitam expectativas racionais e fundamentos microeconômicos, mas mostram por que preços e salários são rígidos no curto prazo ${tag('interpretacao')}.</li>
<li><strong>Austríacos</strong>: crises resultam de distorções do crédito; críticos do ativismo monetário e fiscal ${tag('interpretacao')}.</li>
<li><strong>Pós-keynesianos e marxistas</strong>: enfatizam incerteza, instabilidade financeira (Hyman Minsky) e conflito distributivo ${tag('interpretacao')}.</li>
</ul>

<h3>A curva de Phillips</h3>
<p>Em 1958, A. W. Phillips observou, para o Reino Unido, uma relação negativa entre desemprego e variação dos salários ${tag('fato')}. Nos anos 1960, ela foi lida como possibilidade de "escolher" menos desemprego com mais inflação. Friedman (1968) e Edmund Phelps argumentaram que, no longo prazo, com expectativas ajustadas, não há essa troca: só se obtém aceleração da inflação ${tag('interpretacao')}. A estagflação dos anos 1970 deu força a essa crítica ${tag('fato')}.</p>

<h3>O consenso atual</h3>
<p>Muitos bancos centrais adotaram, a partir dos anos 1990, regimes de metas de inflação, com uso da taxa de juros e comunicação transparente, apoiados num modelo novo-keynesiano ${tag('fato')}. A crise financeira de 2008 reabriu debates sobre o papel do sistema financeiro e da política fiscal ${tag('debate')}.</p>

<h3>No Brasil: inflação inercial e o Plano Real</h3>
<p>Economistas brasileiros (como André Lara Resende e Persio Arida, com a proposta "Larida", de 1984, e Francisco Lopes) desenvolveram a teoria da <strong>inflação inercial</strong>: com contratos indexados, a inflação passada se transmite à futura independentemente da demanda ${tag('interpretacao')}. O Plano Real (1994) usou uma unidade de conta transitória, a URV, para coordenar a desindexação antes de introduzir a nova moeda ${tag('fato')}.</p>`,
  vocabulario: [
    ['Curva de Phillips', 'Relação entre desemprego e inflação (Phillips, 1958).'],
    ['Expectativas racionais', 'Expectativas formadas com toda a informação disponível.'],
    ['Rigidez de preços', 'Ajuste lento de preços e salários no curto prazo.'],
    ['Instabilidade financeira', 'Tendência do crédito a gerar ciclos de euforia e crise (Minsky).'],
    ['Inflação inercial', 'Inflação que se perpetua pela indexação de contratos.'],
    ['URV', 'Unidade Real de Valor, transição do Plano Real (1994).'],
  ],
  exemplos: `<p><strong>Uma recessão, cinco diagnósticos:</strong> diante de uma queda do PIB, um keynesiano aponta falta de demanda; um monetarista, erro da política monetária; um novo clássico, um choque de produtividade; um austríaco, a correção de um excesso de crédito anterior; um pós-keynesiano, a fragilidade financeira acumulada. Os dados disponíveis (crédito, juros, produtividade, emprego) ajudam a avaliar qual diagnóstico se aplica melhor.</p>`,
  contexto: `<p><strong>No mundo:</strong> a sequência de escolas acompanha crises: a Depressão (Keynes), a estagflação (monetaristas e novos clássicos), 2008 (retorno da finança aos modelos). <strong>No Brasil:</strong> o fracasso dos planos de congelamento (Cruzado, 1986, e outros) e o sucesso do Real (1994) foram lidos à luz da teoria da inflação inercial, contribuição original de economistas brasileiros ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'A crítica de Friedman e Phelps à curva de Phillips', tag: 'argumento',
    premissas: ['Trabalhadores e empresas formam expectativas sobre a inflação.', 'Se a inflação sobe de modo sistemático, as expectativas acompanham e os salários são reajustados.', 'Com salários reajustados pela inflação esperada, o desemprego volta ao nível anterior.'],
    conclusao: 'Logo, no longo prazo não há troca estável entre inflação e desemprego: insistir em reduzir o desemprego com inflação só acelera a inflação.',
    nota: 'O argumento não nega efeitos de curto prazo; nega a escolha permanente.',
  },
  objecoes: [
    { objecao: 'Se as escolas discordam, a macroeconomia não é ciência.', tag: 'debate',
      resposta: 'Há consensos (a inflação persistente depende da política monetária; contratos indexados geram inércia) e debates abertos. Disciplinas com objetos complexos e experimentos difíceis convivem com escolas; o critério é a capacidade de explicar dados e prever.' },
  ],
  aplicacao: `<p>Consulte a série do IPCA dos anos 1980 e 1990 (IPEADATA ou IBGE) e marque nela os planos de estabilização. Escreva no Caderno o que a série mostra antes e depois do Plano Real.</p>`,
  fonte: {
    obra: 'Milton Friedman, "The Role of Monetary Policy" (1968); Persio Arida e André Lara Resende, "Inertial Inflation and Monetary Reform" (1984)', link: { url: 'http://www.ipeadata.gov.br', rotulo: 'IPEADATA' },
    orientacao: `<p>Em Friedman, localize o argumento sobre a taxa natural de desemprego. Em Arida e Lara Resende, a proposta de moeda indexada. Relacione a segunda à URV de 1994.</p>`,
  },
  perguntas: [
    { p: 'O que observou Phillips em 1958?', r: 'Relação negativa entre desemprego e variação dos salários no Reino Unido.' },
    { p: 'O que é inflação inercial?', r: 'Inflação que se perpetua pela indexação dos contratos à inflação passada.' },
    { p: 'Para que serviu a URV?', r: 'Unidade de conta transitória que coordenou a desindexação antes do real (1994).' },
  ],
  exercicios: [
    mc('A escola que atribui as flutuações a choques de produtividade é a dos:', ['Keynesianos', 'Ciclos reais', 'Pós-keynesianos', 'Mercantilistas'], 1, 'Novos clássicos.'),
    mc('A crítica de que não há troca permanente entre inflação e desemprego é de:', ['Phillips', 'Friedman e Phelps', 'Keynes', 'Minsky'], 1, 'Final dos anos 1960.'),
    mc('A hipótese da instabilidade financeira é de:', ['Hyman Minsky', 'Robert Lucas', 'Milton Friedman', 'Hayek'], 0, 'Pós-keynesiano.'),
    mc('A proposta "Larida" (1984) é de:', ['Gudin e Bulhões', 'Arida e Lara Resende', 'Furtado e Prebisch', 'Campos e Simonsen'], 1, 'Persio Arida e André Lara Resende.'),
    mc('O regime de metas de inflação apoia-se principalmente em:', ['Congelamento de preços', 'Taxa de juros e comunicação do Banco Central', 'Controle de câmbio fixo', 'Emissão livre'], 1, 'Modelo novo-keynesiano.'),
    disc('Explique por que o Plano Cruzado (1986) fracassou e o Plano Real (1994) teve êxito, usando a teoria da inflação inercial e pelo menos uma outra escola estudada.', ['Expõe a inflação inercial', 'Analisa os dois planos', 'Usa outra escola', 'Conclusão com dados']),
  ],
  resumo: ['Keynesianos, monetaristas, novos clássicos, novos keynesianos, austríacos, pós-keynesianos.', 'Curva de Phillips (1958) e crítica de Friedman e Phelps.', 'Consenso: metas de inflação; 2008 reabre debates.', 'Brasil: inflação inercial (Larida, 1984).', 'Plano Real (1994) e a URV.'],
  referencias: [
    { texto: 'A. W. Phillips, "The Relation between Unemployment and the Rate of Change of Money Wage Rates" (1958).' },
    { texto: 'Milton Friedman, "The Role of Monetary Policy" (1968).' },
    { texto: 'Persio Arida e André Lara Resende, "Inertial Inflation and Monetary Reform" (1984).' },
    { texto: 'Hyman Minsky, Estabilizando uma economia instável (1986).' },
    { texto: 'Gustavo Franco, O Plano Real e outros ensaios (1995).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Analisar a série do IPCA'],
  revisao: [['Phillips', '1958: desemprego x salários.'], ['Inflação inercial', 'Indexação perpetua a inflação.'], ['URV', 'Transição do Plano Real (1994).']],
  avancado: {
    texto: `<h3>A crítica de Lucas</h3>
<p>Robert Lucas argumentou (1976) que relações estimadas com dados passados podem mudar quando a política muda, porque os agentes ajustam o comportamento às novas regras ${tag('interpretacao')}. Isso levou à busca de modelos com fundamentos de comportamento ${tag('fato')}.</p>
<h3>Dominância fiscal</h3>
<p>Quando a dívida pública é muito alta, juros maiores podem piorar as contas e alimentar expectativas de inflação, limitando a eficácia da política monetária — situação chamada dominância fiscal, discutida para o Brasil em alguns períodos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Robert Lucas, "Econometric Policy Evaluation: A Critique" (1976).' }, { texto: 'Olivier Blanchard, Macroeconomia (manual).' }],
    exercicios: [
      mc('A "crítica de Lucas" (1976) afirma que:', ['Os dados nunca servem', 'Relações estimadas podem mudar quando a política muda', 'A inflação é sempre inercial', 'O Estado deve planejar'], 1, 'Agentes ajustam o comportamento.'),
      mc('Dominância fiscal significa que:', ['A política fiscal é irrelevante', 'A dívida alta limita a eficácia da política monetária', 'O Banco Central controla o orçamento', 'Não há inflação'], 1, 'Debate aplicado ao Brasil.'),
      mc('A crítica de Lucas favoreceu modelos:', ['Sem dados', 'Com fundamentos de comportamento', 'Só com séries temporais', 'Sem expectativas'], 1, 'Microfundamentos.'),
      disc('A dívida pública brasileira limita a política monetária? Exponha o argumento da dominância fiscal e um contra-argumento, com dados.', ['Expõe o argumento', 'Expõe contra-argumento', 'Usa dados com fonte', 'Conclusão'])],
  },
}),

aula({
  id: 'e3-2', titulo: 'Instituições e comportamento: Coase, North, Ostrom e a economia comportamental', duracao: '120 min',
  aprendera: ['Explicar custos de transação e o teorema de Coase', 'Explicar o papel das instituições no desenvolvimento (North, Acemoglu e Robinson)', 'Explicar a governança dos bens comuns segundo Ostrom', 'Explicar vieses comportamentais e a teoria da perspectiva'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que países com recursos semelhantes enriquecem em ritmos tão diferentes? Por que as pessoas nem sempre escolhem o que maximizaria seu próprio bem? Duas tradições — a institucional e a comportamental — ampliaram o modelo econômico básico para responder.</p>

<h3>Custos de transação</h3>
<p>Ronald Coase, em "A natureza da firma" (1937), perguntou por que existem empresas se o mercado coordena trocas: porque usar o mercado tem custos (buscar, negociar, fazer cumprir contratos) ${tag('fato')}. Em "O problema do custo social" (1960), mostrou que, com direitos de propriedade bem definidos e custos de transação baixos, as partes podem negociar soluções eficientes para externalidades ${tag('interpretacao')}. Coase recebeu o Nobel em 1991 ${tag('fato')}.</p>

<h3>Instituições e desenvolvimento</h3>
<p>Douglass North (Nobel em 1993) definiu instituições como "as regras do jogo" de uma sociedade, formais e informais, que moldam incentivos ${tag('fato')}. Daron Acemoglu e James Robinson, em <em>Por que as nações fracassam</em> (2012), distinguiram instituições "inclusivas" e "extrativas" e atribuíram a elas grande parte das diferenças de prosperidade ${tag('interpretacao')}; críticos discutem o peso da geografia, da cultura e do capital humano ${tag('debate')}. Acemoglu, Johnson e Robinson receberam o Nobel em 2024 ${tag('fato')}.</p>

<h3>Os bens comuns</h3>
<p>Elinor Ostrom, em <em>Governando os comuns</em> (1990), estudou pastagens, pescarias e sistemas de irrigação geridos por comunidades e mostrou que nem sempre há "tragédia dos comuns": regras locais de uso, monitoramento e sanção podem sustentar recursos por séculos ${tag('interpretacao')}. Foi a primeira mulher a receber o Nobel de Economia (2009) ${tag('fato')}. Sua obra dialoga com o princípio de subsidiariedade ${tag('interpretacao')}.</p>

<h3>Economia comportamental</h3>
<p>Daniel Kahneman e Amos Tversky, com a "teoria da perspectiva" (1979), mostraram que as pessoas avaliam ganhos e perdas em relação a um ponto de referência e sentem mais a perda que o ganho equivalente ${tag('fato')}. Kahneman recebeu o Nobel em 2002; Richard Thaler, em 2017, por estudos de vieses e "arquitetura de escolhas" ${tag('fato')}. A economia comportamental não abandona a escolha racional: mostra seus limites previsíveis ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Custos de transação', 'Custos de buscar, negociar e fazer cumprir trocas.'],
    ['Instituições', '"Regras do jogo" formais e informais (North).'],
    ['Instituições inclusivas e extrativas', 'Distinção de Acemoglu e Robinson.'],
    ['Bens comuns', 'Recursos de uso compartilhado difíceis de excluir (pastagens, pesca).'],
    ['Aversão à perda', 'Perder pesa mais que ganhar o mesmo valor.'],
    ['Viés', 'Desvio sistemático em relação à escolha racional.'],
  ],
  exemplos: `<p><strong>Regra institucional brasileira:</strong> a Lei de Responsabilidade Fiscal (Lei Complementar nº 101, de 2000) fixou limites para gastos com pessoal e endividamento dos entes federativos ${tag('fato')}. É exemplo de "regra do jogo" formal criada para mudar incentivos de governantes — e seus efeitos são objeto de avaliação empírica.</p>`,
  contexto: `<p><strong>No mundo:</strong> essas correntes ganharam espaço a partir dos anos 1970, com prêmios Nobel sucessivos. <strong>No Brasil:</strong> instituições como a LRF, o regime de metas e a independência legal do Banco Central (Lei Complementar nº 179, de 2021) ${tag('fato')} são estudadas como mudanças nas regras do jogo; comunidades extrativistas e de pesca artesanal são casos de gestão de bens comuns ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'O argumento de Coase sobre externalidades', tag: 'argumento',
    premissas: ['Uma externalidade é um custo que a atividade de um impõe a outro.', 'Se os direitos estão bem definidos e negociar é barato, as partes podem pagar para reduzir ou permitir a atividade.', 'Elas negociarão até o ponto em que o ganho de um compensa a perda do outro.'],
    conclusao: 'Logo, nessas condições, chega-se a uma solução eficiente por negociação, qualquer que seja a parte que detém o direito.',
    nota: 'A conclusão depende de custos de transação baixos; quando são altos, como em poluição difusa, a regulação pode ser necessária. Coase insistia nisso.',
  },
  objecoes: [
    { objecao: 'Se as pessoas têm vieses, o Estado deve decidir por elas.', tag: 'debate',
      resposta: 'Os vieses também afetam governantes e reguladores. Thaler propôs "empurrões" que preservam a liberdade de escolha; críticos alertam para o paternalismo. É debate normativo, que a evidência informa sem resolver.' },
  ],
  aplicacao: `<p>Escolha um recurso comum da sua região (um rio, uma praça, uma área de pesca) e descreva as regras, formais e informais, que regulam seu uso. Use os critérios de Ostrom para avaliar se elas funcionam.</p>`,
  fonte: {
    obra: 'Ronald Coase, "O problema do custo social" (1960); Elinor Ostrom, Governando os comuns (1990), cap. 3', link: null,
    orientacao: `<p>Em Coase, reconstitua o exemplo do fazendeiro e do criador de gado. Em Ostrom, liste os princípios de desenho das instituições duradouras de recursos comuns.</p>`,
  },
  perguntas: [
    { p: 'Por que existem firmas, segundo Coase?', r: 'Porque usar o mercado tem custos de transação; a firma os economiza em certas atividades.' },
    { p: 'O que são instituições para North?', r: 'As regras do jogo, formais e informais, de uma sociedade.' },
    { p: 'O que mostrou Ostrom?', r: 'Que comunidades podem gerir bens comuns de forma sustentável com regras locais.' },
  ],
  exercicios: [
    mc('"A natureza da firma" (1937) é de:', ['North', 'Coase', 'Ostrom', 'Thaler'], 1, 'Ronald Coase.'),
    mc('Instituições "inclusivas" e "extrativas" são conceitos de:', ['Acemoglu e Robinson', 'Kahneman e Tversky', 'Coase e North', 'Furtado e Prebisch'], 0, 'Por que as nações fracassam (2012).'),
    mc('A primeira mulher a receber o Nobel de Economia foi:', ['Anna Schwartz', 'Elinor Ostrom', 'Esther Duflo', 'Claudia Goldin'], 1, 'Elinor Ostrom, 2009.'),
    mc('A teoria da perspectiva (1979) mostrou que:', ['As pessoas são sempre racionais', 'Perdas pesam mais que ganhos equivalentes', 'Preços não importam', 'Instituições são irrelevantes'], 1, 'Kahneman e Tversky.'),
    mc('A Lei de Responsabilidade Fiscal é de:', ['1988', '1994', '2000', '2021'], 2, 'Lei Complementar nº 101, de 2000.'),
    disc('Escolha uma instituição brasileira (LRF, metas de inflação, Banco Central independente) e avalie seus efeitos como mudança nas "regras do jogo", com dados e uma objeção.', ['Descreve a instituição', 'Explica os incentivos alterados', 'Usa dados', 'Apresenta objeção']),
  ],
  resumo: ['Coase: custos de transação (1937) e custo social (1960).', 'North: instituições como regras do jogo.', 'Acemoglu e Robinson (2012): inclusivas x extrativas.', 'Ostrom (1990): bens comuns sem tragédia.', 'Kahneman e Tversky (1979); Thaler (Nobel 2017).'],
  referencias: [
    { texto: 'Ronald Coase, "A natureza da firma" (1937); "O problema do custo social" (1960).' },
    { texto: 'Douglass North, Instituições, mudança institucional e desempenho econômico (1990).' },
    { texto: 'Daron Acemoglu e James Robinson, Por que as nações fracassam (2012).' },
    { texto: 'Elinor Ostrom, Governando os comuns (1990).' },
    { texto: 'Daniel Kahneman, Rápido e devagar (2011).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Coase', 'Custos de transação.'], ['Ostrom', 'Governando os comuns (1990); Nobel 2009.'], ['Aversão à perda', 'Kahneman e Tversky (1979).']],
  avancado: {
    texto: `<h3>Economia institucional antiga</h3>
<p>Thorstein Veblen, em <em>A teoria da classe ociosa</em> (1899), cunhou o "consumo conspícuo": bens consumidos para exibir status ${tag('fato')}. John R. Commons estudou a evolução jurídica das transações ${tag('fato')}. Essa tradição antecede a "nova economia institucional" de Coase e North.</p>
<h3>Experimentos de campo</h3>
<p>Abhijit Banerjee, Esther Duflo e Michael Kremer receberam o Nobel em 2019 por usar experimentos aleatorizados para avaliar políticas contra a pobreza ${tag('fato')}; críticos questionam a generalização dos resultados para outros contextos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Thorstein Veblen, A teoria da classe ociosa (1899).' }, { texto: 'Abhijit Banerjee e Esther Duflo, A economia dos pobres (2011).' }],
    exercicios: [
      mc('"Consumo conspícuo" é conceito de:', ['Veblen', 'Commons', 'North', 'Coase'], 0, 'A teoria da classe ociosa (1899).'),
      mc('O Nobel de 2019 premiou:', ['Estudos de inflação', 'Experimentos aleatorizados contra a pobreza', 'Teoria dos jogos', 'Contas nacionais'], 1, 'Banerjee, Duflo e Kremer.'),
      mc('Uma crítica aos experimentos aleatorizados é:', ['Não usam dados', 'Dificuldade de generalizar resultados', 'São caros demais sempre', 'Ignoram a estatística'], 1, 'Validade externa.'),
      disc('Proponha um experimento aleatorizado para avaliar um programa educacional brasileiro, indicando grupos, medida de resultado e limites éticos.', ['Desenho com grupos', 'Medida de resultado', 'Limites éticos', 'Problema de generalização'])],
  },
}),

aula({
  id: 'e3-3', titulo: 'Estado e mercado: falhas de mercado e falhas de governo', duracao: '120 min',
  aprendera: ['Explicar externalidades, bens públicos e informação assimétrica', 'Explicar a teoria da escolha pública e as falhas de governo', 'Avaliar políticas pelos dois tipos de falha', 'Aplicar a análise a casos brasileiros'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O mercado coordena bem muitas atividades, mas falha em certas situações. O governo pode corrigir falhas, mas também falha. O debate maduro não pergunta "mercado ou Estado?", mas "que arranjo funciona melhor neste caso, considerando as falhas de ambos?".</p>

<h3>Falhas de mercado</h3>
<ul>
<li><strong>Externalidades</strong>: efeitos sobre terceiros que não entram no preço (poluição, vacinação). Arthur Pigou, em <em>A economia do bem-estar</em> (1920), propôs impostos que façam o poluidor arcar com o custo ${tag('fato')}.</li>
<li><strong>Bens públicos</strong>: não rivais e não excludentes (defesa, iluminação pública); Paul Samuelson formalizou o problema em 1954 ${tag('fato')}. O mercado tende a ofertá-los em quantidade insuficiente, porque cada um pode "pegar carona" ${tag('argumento')}.</li>
<li><strong>Informação assimétrica</strong>: George Akerlof, em "O mercado de limões" (1970), mostrou que, se compradores não distinguem carros bons dos ruins, os bons saem do mercado ${tag('fato')}.</li>
<li><strong>Poder de mercado</strong>: monopólios e cartéis restringem a oferta e elevam preços.</li>
</ul>

<h3>Falhas de governo</h3>
<p>A teoria da escolha pública (James Buchanan e Gordon Tullock, <em>O cálculo do consenso</em>, 1962) aplicou à política os mesmos pressupostos de comportamento: políticos, burocratas e grupos de interesse também respondem a incentivos ${tag('interpretacao')}. Resultam falhas como captura regulatória, busca de renda (<em>rent-seeking</em>), horizonte eleitoral curto e informação insuficiente ${tag('interpretacao')}. Buchanan recebeu o Nobel em 1986 ${tag('fato')}.</p>

<h3>Avaliar casos</h3>
<p>Uma política deve ser avaliada comparando a falha de mercado que pretende corrigir com as falhas de governo que pode gerar, e com alternativas (regulação, impostos, mercados de licenças, gestão comunitária) ${tag('argumento')}. A Doutrina Social oferece critérios normativos — bem comum, subsidiariedade, solidariedade —, não uma fórmula técnica ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Externalidade', 'Efeito de uma atividade sobre terceiros não refletido no preço.'],
    ['Imposto de Pigou', 'Tributo que faz o agente arcar com o custo externo.'],
    ['Bem público', 'Não rival e não excludente.'],
    ['Carona (free rider)', 'Quem usufrui sem contribuir.'],
    ['Informação assimétrica', 'Uma parte sabe mais que a outra (Akerlof).'],
    ['Captura regulatória', 'Quando o regulador passa a servir aos regulados.'],
  ],
  exemplos: `<p><strong>Saneamento no Brasil:</strong> esgoto não tratado gera externalidades graves (doenças, poluição de rios). Há falha de mercado (externalidade, monopólio natural das redes) e histórico de falhas de governo (obras paralisadas, tarifas desalinhadas). O Novo Marco Legal do Saneamento (Lei nº 14.026, de 2020) buscou mudar regras e metas ${tag('fato')}; seus resultados são objeto de avaliação em curso ${tag('debate')}.</p>`,
  contexto: `<p><strong>No mundo:</strong> a análise das falhas de mercado orientou a regulação do século XX; a escolha pública e a nova economia institucional trouxeram atenção às falhas de governo a partir dos anos 1960. <strong>No Brasil:</strong> agências reguladoras (energia, telecomunicações, saneamento) e o CADE, autoridade de defesa da concorrência, são as instituições centrais desse campo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o mercado subofere bens públicos', tag: 'argumento',
    premissas: ['Um bem público beneficia a todos, inclusive quem não paga.', 'Cada pessoa sabe que receberá o benefício mesmo sem contribuir.', 'Se muitos raciocinam assim, as contribuições voluntárias ficam abaixo do necessário.'],
    conclusao: 'Logo, o mercado tende a ofertar bens públicos em quantidade insuficiente, o que justifica financiamento coletivo de algum tipo.',
    nota: '"Coletivo" não é necessariamente estatal: associações, igrejas e comunidades também financiam bens públicos locais.',
  },
  objecoes: [
    { objecao: 'Toda falha de mercado justifica intervenção do Estado.', tag: 'debate',
      resposta: 'Só se a intervenção for melhor que a falha que corrige. Se as falhas de governo no caso forem maiores, a intervenção piora o resultado. A comparação é empírica, caso a caso.' },
  ],
  aplicacao: `<p>Escolha um serviço público da sua cidade (transporte, coleta de lixo, iluminação) e identifique: que falha de mercado justifica a ação pública, que falhas de governo aparecem e que alternativa institucional poderia ser testada.</p>`,
  fonte: {
    obra: 'George Akerlof, "The Market for Lemons" (1970); James Buchanan e Gordon Tullock, O cálculo do consenso (1962), cap. 1', link: null,
    orientacao: `<p>Em Akerlof, reconstrua o argumento dos carros usados. Em Buchanan e Tullock, identifique o pressuposto de comportamento aplicado à política. Pergunte como cada um se aplica a um mercado brasileiro.</p>`,
  },
  perguntas: [
    { p: 'O que é um bem público?', r: 'Bem não rival e não excludente.' },
    { p: 'O que mostrou Akerlof em 1970?', r: 'Que a informação assimétrica pode expulsar do mercado os produtos de boa qualidade.' },
    { p: 'O que é captura regulatória?', r: 'Quando o regulador passa a servir aos interesses dos regulados.' },
  ],
  exercicios: [
    mc('A proposta de imposto sobre externalidades é de:', ['Pigou', 'Akerlof', 'Coase', 'Buchanan'], 0, 'A economia do bem-estar (1920).'),
    mc('A iluminação pública é exemplo clássico de:', ['Bem privado', 'Bem público', 'Bem de luxo', 'Monopólio'], 1, 'Não rival e não excludente.'),
    mc('"O mercado de limões" trata de:', ['Agricultura', 'Informação assimétrica', 'Inflação', 'Comércio exterior'], 1, 'Akerlof, 1970.'),
    mc('A teoria da escolha pública é associada a:', ['Buchanan e Tullock', 'Keynes e Hicks', 'Smith e Ricardo', 'Ostrom e North'], 0, 'O cálculo do consenso (1962).'),
    mc('A autoridade brasileira de defesa da concorrência é o:', ['Copom', 'CADE', 'IBGE', 'BNDES'], 1, 'Conselho Administrativo de Defesa Econômica.'),
    disc('Avalie uma política brasileira (por exemplo, o Novo Marco do Saneamento) comparando a falha de mercado que ela pretende corrigir com as falhas de governo possíveis e uma alternativa.', ['Identifica a falha de mercado', 'Identifica falhas de governo', 'Propõe alternativa', 'Separa análise e juízo moral']),
  ],
  resumo: ['Externalidades (Pigou, 1920), bens públicos (Samuelson, 1954).', 'Informação assimétrica (Akerlof, 1970); poder de mercado.', 'Escolha pública (Buchanan e Tullock, 1962): falhas de governo.', 'Comparar as duas falhas caso a caso.', 'Brasil: agências reguladoras, CADE, saneamento (2020).'],
  referencias: [
    { texto: 'Arthur Pigou, A economia do bem-estar (1920).' },
    { texto: 'Paul Samuelson, "The Pure Theory of Public Expenditure" (1954).' },
    { texto: 'George Akerlof, "The Market for Lemons" (1970).' },
    { texto: 'James Buchanan e Gordon Tullock, O cálculo do consenso (1962).' },
    { texto: 'Lei nº 14.026, de 15 de julho de 2020 (Novo Marco Legal do Saneamento).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler as fontes indicadas'],
  revisao: [['Bem público', 'Não rival e não excludente.'], ['Akerlof', 'Mercado de limões (1970).'], ['Escolha pública', 'Falhas de governo (Buchanan e Tullock).']],
  avancado: {
    texto: `<h3>Teoria dos jogos e cooperação</h3>
<p>O dilema do prisioneiro mostra como agentes que buscam o próprio interesse podem chegar a um resultado pior para todos ${tag('fato')}. Robert Axelrod mostrou, com torneios de computador, que em interações repetidas estratégias cooperativas recíprocas ("olho por olho") tendem a prosperar ${tag('interpretacao')}.</p>
<h3>Mercados de licenças</h3>
<p>Em vez de impostos, podem-se criar licenças negociáveis de emissão: o limite total é fixado e as empresas negociam as licenças, o que tende a reduzir as emissões onde é mais barato ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Robert Axelrod, A evolução da cooperação (1984).' }],
    exercicios: [
      mc('No dilema do prisioneiro, a busca do interesse próprio:', ['Sempre leva ao melhor resultado', 'Pode levar a resultado pior para todos', 'É irrelevante', 'Elimina a cooperação para sempre'], 1, 'Conflito entre racionalidade individual e coletiva.'),
      mc('Axelrod mostrou que, em interações repetidas:', ['A traição sempre vence', 'Estratégias recíprocas cooperativas tendem a prosperar', 'Não há estratégias', 'O Estado é necessário sempre'], 1, 'A evolução da cooperação (1984).'),
      mc('Num mercado de licenças de emissão, o governo fixa:', ['O preço da licença', 'O limite total de emissões', 'A produção de cada empresa', 'O salário'], 1, 'As empresas negociam as licenças.'),
      disc('Compare imposto de Pigou e mercado de licenças para reduzir uma poluição no Brasil: vantagens, riscos e falhas de governo possíveis.', ['Expõe os dois instrumentos', 'Vantagens', 'Riscos e falhas', 'Conclusão'])],
  },
}),

aula({
  id: 'e3-4', titulo: 'Ética econômica: Doutrina Social da Igreja, desenvolvimento e desigualdade', duracao: '150 min',
  aprendera: ['Expor os princípios da Doutrina Social aplicados à economia', 'Ler a Centesimus Annus, a Caritas in veritate e a Laudato si’ como fontes', 'Comparar com outras éticas econômicas (Sen, Rawls)', 'Analisar a desigualdade brasileira com dados e critérios normativos explícitos'],
  prereq: ['Aulas anteriores do módulo', 'Ética (Degrau 12), recomendado'],
  explicacao: `
<h3>O problema</h3>
<p>A economia positiva diz o que acontece; a pergunta sobre o que é justo exige critérios morais. Esta aula estuda a ética econômica da Igreja e a compara com outras tradições, sem confundir doutrina com política econômica concreta.</p>

<h3>Princípios da Doutrina Social</h3>
<p>Dignidade da pessoa humana, bem comum, destinação universal dos bens (que não suprime a propriedade privada, mas a ordena ao bem de todos), subsidiariedade e solidariedade são os princípios centrais, sistematizados no <em>Compêndio da Doutrina Social da Igreja</em> (2004) ${tag('doutrina')}. O trabalho tem prioridade sobre o capital como fator de produção, e o salário justo deve permitir uma vida digna ao trabalhador e à família ${tag('doutrina')}.</p>

<h3>Três encíclicas</h3>
<ul>
<li><strong>Centesimus Annus</strong> (João Paulo II, 1991): após a queda do comunismo, reconheceu a legitimidade do lucro como indicador do bom funcionamento da empresa — não o único — e defendeu uma economia livre enquadrada por um sólido contexto jurídico a serviço da liberdade humana integral (n. 35 e 42) ${tag('doutrina')}.</li>
<li><strong>Caritas in veritate</strong> (Bento XVI, 2009): pediu que a lógica do dom e da gratuidade tenha lugar também na atividade econômica ordinária ${tag('doutrina')}.</li>
<li><strong>Laudato si'</strong> (Francisco, 2015): propôs a "ecologia integral", unindo questão ambiental e questão social ${tag('doutrina')}.</li>
</ul>
<p>A Doutrina Social não é um sistema econômico alternativo nem programa partidário: oferece princípios de reflexão, critérios de juízo e diretrizes de ação, e deixa aos leigos as soluções técnicas, que podem legitimamente variar ${tag('doutrina')}.</p>

<h3>Outras éticas econômicas</h3>
<p>Amartya Sen, em <em>Desenvolvimento como liberdade</em> (1999), definiu o desenvolvimento como expansão das "capacidades" reais das pessoas, e não só da renda ${tag('interpretacao')}; inspirou o Índice de Desenvolvimento Humano (IDH) ${tag('fato')}. John Rawls, em <em>Uma teoria da justiça</em> (1971), defendeu que desigualdades só são justas se beneficiam os menos favorecidos ${tag('interpretacao')}. Robert Nozick respondeu com uma teoria da justiça baseada nos direitos e nas trocas voluntárias (1974) ${tag('interpretacao')}.</p>

<h3>Desigualdade no Brasil</h3>
<p>A desigualdade de renda brasileira, medida pelo índice de Gini, está entre as mais altas do mundo segundo o IBGE e o Banco Mundial ${tag('fato')}. Explicar suas causas (história da escravidão, educação, estrutura tributária, mercado de trabalho) é tarefa positiva; decidir que medidas são justas e eficazes exige critérios normativos explícitos e avaliação empírica ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Destinação universal dos bens', 'Os bens da terra destinam-se a todos; a propriedade privada é ordenada a esse fim.'],
    ['Solidariedade', 'Determinação firme de empenhar-se pelo bem comum.'],
    ['Ecologia integral', 'Unidade entre questão ambiental e social (Laudato si’).'],
    ['Capacidades', 'Liberdades reais de fazer e ser (Sen).'],
    ['Índice de Gini', 'Medida de desigualdade de 0 (igualdade) a 1 (concentração máxima).'],
    ['IDH', 'Índice de Desenvolvimento Humano: renda, educação e saúde.'],
  ],
  exemplos: `<p><strong>Mesmos dados, juízos diferentes:</strong> um programa de transferência de renda reduz a pobreza extrema medida (dado). Um rawlsiano o aprova por beneficiar os menos favorecidos; um seguidor de Nozick questiona a tributação que o financia; a Doutrina Social o avalia pela dignidade, pela subsidiariedade (fortalece ou substitui a família e a comunidade?) e pelo bem comum. A análise positiva não decide sozinha, mas nenhum juízo sério ignora os dados.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate sobre desenvolvimento e desigualdade intensificou-se com a globalização e com obras como <em>O capital no século XXI</em>, de Thomas Piketty (2013) ${tag('fato')}. <strong>No Brasil:</strong> a desigualdade histórica e regional, estudada também em Sociologia e História, é o caso central de aplicação desta aula.</p>`,
  argumento: {
    titulo: 'Por que a destinação universal dos bens não elimina a propriedade privada', tag: 'argumento',
    premissas: ['Os bens da terra existem para o sustento de todos (destinação universal).', 'A propriedade privada, em regra, favorece o cuidado dos bens, a ordem e a liberdade das famílias.', 'Por isso ela é meio adequado para que os bens cheguem a todos, desde que ordenada ao bem comum.'],
    conclusao: 'Logo, a destinação universal não suprime a propriedade privada: atribui-lhe uma função social.',
    nota: 'Argumento da tradição tomista (Suma II-II, q. 66) retomado pelo Magistério; é normativo, não previsão empírica.',
  },
  objecoes: [
    { objecao: 'A Doutrina Social é socialismo disfarçado (ou: é capitalismo disfarçado).', tag: 'debate',
      resposta: 'Os documentos rejeitam explicitamente o coletivismo e a luta de classes, e também a idolatria do mercado. Seus princípios servem para julgar qualquer sistema concreto; reduzi-la a um rótulo político é ignorar os textos.' },
  ],
  aplicacao: `<p>Escolha uma política brasileira de redução da pobreza ou da desigualdade. Registre no Caderno: os dados de efeito (com fonte), o juízo segundo a Doutrina Social, o juízo segundo Rawls ou Sen, e onde eles convergem e divergem.</p>`,
  fonte: {
    obra: 'João Paulo II, Centesimus Annus (1991), n. 35 e 42; Bento XVI, Caritas in veritate (2009), n. 36–37; Francisco, Laudato si’ (2015), n. 137–139', link: CA,
    orientacao: `<p>Leia os números indicados das três encíclicas. Para cada uma, escreva a tese principal sobre economia em uma frase e classifique-a como princípio, critério de juízo ou diretriz de ação.</p>`,
  },
  perguntas: [
    { p: 'Quais os princípios centrais da Doutrina Social?', r: 'Dignidade da pessoa, bem comum, destinação universal dos bens, subsidiariedade e solidariedade.' },
    { p: 'O que a Centesimus Annus diz sobre o lucro?', r: 'Que é indicador legítimo do bom funcionamento da empresa, mas não o único.' },
    { p: 'O que é desenvolvimento para Amartya Sen?', r: 'A expansão das capacidades reais das pessoas, não só da renda.' },
  ],
  exercicios: [
    mc('A Centesimus Annus é de:', ['1891', '1931', '1991', '2009'], 2, 'João Paulo II, 1991.'),
    mc('A "lógica do dom" na atividade econômica é tema da:', ['Rerum Novarum', 'Caritas in veritate', 'Quadragesimo Anno', 'Laudato si’'], 1, 'Bento XVI, 2009.'),
    mc('A "ecologia integral" é proposta da:', ['Centesimus Annus', 'Laudato si’', 'Caritas in veritate', 'Mater et Magistra'], 1, 'Francisco, 2015.'),
    mc('Desenvolvimento como liberdade (1999) é de:', ['Rawls', 'Amartya Sen', 'Nozick', 'Piketty'], 1, 'Abordagem das capacidades.'),
    mc('Para Rawls, desigualdades são justas se:', ['Resultam de trocas voluntárias', 'Beneficiam os menos favorecidos', 'São naturais', 'Aumentam o PIB'], 1, 'Princípio da diferença.'),
    disc('Analise a desigualdade de renda no Brasil: dados (com fonte), três causas apontadas pela literatura e uma política avaliada por dois critérios normativos (a Doutrina Social e outro).', ['Dados com fonte', 'Três causas', 'Política e evidência', 'Dois critérios normativos aplicados']),
  ],
  resumo: ['DSI: dignidade, bem comum, destinação universal, subsidiariedade, solidariedade.', 'Centesimus Annus (1991): lucro legítimo, não único; quadro jurídico.', 'Caritas in veritate (2009): dom; Laudato si’ (2015): ecologia integral.', 'Sen (1999), Rawls (1971), Nozick (1974).', 'Brasil: desigualdade entre as mais altas do mundo.'],
  referencias: [
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004).', link: { url: 'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_po.html', rotulo: 'Compêndio da DSI (vatican.va)' } },
    { texto: 'João Paulo II, Centesimus Annus (1991).', link: CA },
    { texto: 'Bento XVI, Caritas in veritate (2009).', link: CV },
    { texto: 'Francisco, Laudato si’ (2015).', link: LS },
    { texto: 'Amartya Sen, Desenvolvimento como liberdade (1999).' },
    { texto: 'John Rawls, Uma teoria da justiça (1971).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os números indicados das três encíclicas'],
  revisao: [['Destinação universal', 'Propriedade ordenada ao bem comum.'], ['Centesimus Annus', '1991: lucro legítimo, não único.'], ['Sen', 'Desenvolvimento como liberdade (1999).']],
  avancado: {
    texto: `<h3>Economia de comunhão e economia civil</h3>
<p>A tradição italiana da "economia civil" (Antonio Genovesi, século XVIII) e propostas contemporâneas como a "economia de comunhão", nascida no Movimento dos Focolares no Brasil em 1991, procuram integrar reciprocidade e gratuidade à empresa ${tag('fato')}.</p>
<h3>Medir a pobreza</h3>
<p>Linhas de pobreza monetárias (por exemplo, as do Banco Mundial) e índices multidimensionais medem coisas diferentes; a escolha da medida influencia o diagnóstico e as políticas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Luigino Bruni e Stefano Zamagni, Economia civil (2004).' }, { texto: 'Thomas Piketty, O capital no século XXI (2013).' }],
    exercicios: [
      mc('A "economia de comunhão" nasceu em:', ['Itália, 1891', 'Brasil, 1991', 'Polônia, 1981', 'Argentina, 2013'], 1, 'Movimento dos Focolares, 1991.'),
      mc('A "economia civil" tem raízes em:', ['Adam Smith', 'Antonio Genovesi', 'Karl Marx', 'Keynes'], 1, 'Século XVIII, Nápoles.'),
      mc('Índices multidimensionais de pobreza consideram:', ['Só a renda', 'Várias privações (educação, saúde, moradia)', 'Só o PIB', 'Só o consumo'], 1, 'Medidas diferentes, diagnósticos diferentes.'),
      disc('A tese de Piketty sobre a concentração da riqueza se aplica ao Brasil? Exponha a tese, dados e uma crítica.', ['Expõe a tese', 'Usa dados brasileiros', 'Apresenta crítica', 'Conclusão'])],
  },
}),

avaliacao('e3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre escolas, instituições, falhas de mercado e de governo e ética econômica, e duas discursivas de análise e juízo.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o quadro das escolas macroeconômicas.</li><li>Releia os números indicados das encíclicas.</li></ul>`,
[
  disc('Escolha um problema econômico brasileiro e analise-o com duas escolas estudadas, comparando os diagnósticos e as evidências que decidiriam entre eles.', ['Problema delimitado', 'Duas escolas bem aplicadas', 'Evidências que decidiriam', 'Conclusão com grau de confiança']),
  disc('Avalie uma política econômica brasileira pelos critérios técnicos (falhas de mercado e de governo) e pelos princípios da Doutrina Social, separando claramente os dois planos.', ['Análise técnica', 'Princípios da DSI aplicados', 'Separação dos planos', 'Conclusão fundamentada']),
]),
];
