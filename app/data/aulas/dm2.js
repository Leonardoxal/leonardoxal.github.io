// Demografia II — formação e autores (etapas 4 e 5 do percurso de Demografia).
// Graunt, Petty, Halley e Süssmilch; Malthus, seus críticos e Quetelet; a teoria da transição demográfica;
// Boserup, Ehrlich, Simon e Josué de Castro sobre população, recursos e fome.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'dm2-1', titulo: 'Os fundadores: Graunt, Petty, Halley e Süssmilch', duracao: '150 min',
  aprendera: ['Explicar o que Graunt descobriu nas listas de óbitos', 'Conhecer a aritmética política de Petty', 'Situar Halley e a primeira tábua de vida', 'Conhecer a leitura teológica de Süssmilch'],
  prereq: ['Demografia I (módulo DM1)'],
  explicacao: `
<h3>O problema</h3>
<p>Como se descobriu que nascimentos e mortes, imprevisíveis para cada pessoa, seguem regularidades na população?</p>
<h3>Graunt</h3>
<p>John Graunt, comerciante de Londres, publicou em 1662 as <em>Observações naturais e políticas sobre as listas de mortalidade</em>, analisando os registros semanais de batismos e enterros ${tag('fato')}. Notou que nasciam um pouco mais meninos que meninas, que a mortalidade infantil era muito alta e que as proporções se repetiam de ano para ano ${tag('fato')}.</p>
<h3>Petty</h3>
<p>William Petty propôs a "aritmética política": usar números para conhecer a riqueza e a população do reino e orientar o governo; seu livro <em>Political Arithmetick</em> foi publicado em 1690 ${tag('fato')}.</p>
<h3>Halley</h3>
<p>O astrônomo Edmond Halley construiu em 1693 uma tábua de vida com os registros da cidade de Breslau e mostrou como calcular o preço de rendas vitalícias ${tag('fato')}.</p>
<h3>Süssmilch</h3>
<p>Johann Peter Süssmilch, pastor luterano, publicou em 1741 <em>A ordem divina</em>, em que interpretou as regularidades demográficas — como a proporção dos sexos ao nascer — como sinais da providência de Deus ${tag('fato')}. A leitura mistura dado estatístico e interpretação teológica ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Listas de mortalidade', 'Registros semanais de batismos e enterros de Londres.'],
    ['Aritmética política', 'Uso de números sobre população e riqueza para orientar o governo.'],
    ['Razão de sexo ao nascer', 'Número de meninos nascidos por 100 meninas.'],
    ['Renda vitalícia', 'Pagamento periódico enquanto a pessoa viver.'],
    ['Regularidade estatística', 'Repetição de proporções em grandes números.'],
  ],
  exemplos: `<p><strong>A regularidade de Graunt:</strong> em qualquer família, o sexo do próximo filho é imprevisível; mas, somando milhares de nascimentos, a proporção de meninos fica sempre perto de 105 para cada 100 meninas. O acaso individual convive com a regularidade coletiva — base de toda a demografia e da estatística.</p>`,
  contexto: `<p><strong>No mundo:</strong> a obra de Graunt é considerada um marco do nascimento da estatística e da demografia ${tag('interpretacao')}. <strong>No Brasil:</strong> no período colonial, as informações sobre a população vinham sobretudo dos róis de confessados e dos registros paroquiais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que grandes números revelam regularidades', tag: 'argumento',
    premissas: ['Cada evento individual depende de muitas causas particulares.', 'Em grandes números, as variações particulares tendem a se compensar.', 'Restam as tendências comuns, que se mostram em proporções estáveis.'],
    conclusao: 'Logo, populações grandes mostram regularidades que os casos individuais escondem.',
    nota: 'É a intuição que a lei dos grandes números tornará precisa.',
  },
  objecoes: [
    { objecao: 'Se a mortalidade segue regularidades, a liberdade humana é ilusão.', tag: 'debate',
      resposta: 'As regularidades valem para conjuntos, não determinam o que cada pessoa fará. Além disso, mudam quando mudam as condições — saneamento, medicina, costumes —, o que mostra que dependem de decisões humanas. Regularidade estatística não é fatalidade.' },
  ],
  aplicacao: `<p>Calcule a razão de sexo ao nascer do seu estado com dados recentes de nascidos vivos e compare com o valor de cerca de 105 meninos por 100 meninas.</p>`,
  fonte: {
    obra: 'John Graunt, Natural and Political Observations Made upon the Bills of Mortality (1662), caps. 2 e 8', link: null,
    orientacao: `<p>Observe as tabelas de Graunt e as conclusões que tira sobre os sexos e a mortalidade infantil. Pergunte que cuidados ele toma com a qualidade dos registros.</p>`,
  },
  perguntas: [
    { p: 'O que Graunt observou sobre os nascimentos?', r: 'Que nasciam um pouco mais meninos que meninas, em proporção estável.' },
    { p: 'O que é a aritmética política?', r: 'O uso de números sobre população e riqueza para orientar o governo.' },
    { p: 'Como Süssmilch interpretou as regularidades?', r: 'Como sinais da providência de Deus.' },
  ],
  exercicios: [
    mc('As Observações sobre as listas de mortalidade são de:', ['Petty', 'Graunt', 'Halley', 'Malthus'], 1, '1662.'),
    mc('Political Arithmetick é de:', ['Petty', 'Graunt', 'Süssmilch', 'Quetelet'], 0, '1690.'),
    mc('Halley construiu uma tábua de vida com dados de:', ['Londres', 'Breslau', 'Paris', 'Lisboa'], 1, '1693.'),
    mc('Com 10.500 meninos e 10.000 meninas, a razão de sexo ao nascer é:', ['95', '100', '105', '110'], 2, '10.500 ÷ 10.000 × 100.'),
    mc('A ordem divina (1741) é de:', ['Süssmilch', 'Malthus', 'Graunt', 'Halley'], 0, 'Pastor luterano.'),
    disc('Calcule a razão de sexo ao nascer do seu estado e compare com o valor esperado.', ['Dados', 'Cálculo', 'Comparação', 'Interpretação']),
  ],
  resumo: ['Graunt (1662).', 'Petty: aritmética política.', 'Halley (1693): tábua de vida.', 'Süssmilch (1741).', 'Regularidade em grandes números.'],
  referencias: [
    { texto: 'John Graunt, Natural and Political Observations Made upon the Bills of Mortality (1662).' },
    { texto: 'William Petty, Political Arithmetick (1690).' },
    { texto: 'Johann Peter Süssmilch, Die göttliche Ordnung (1741).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o cálculo da razão de sexo', 'Ler os textos indicados'],
  revisao: [['Graunt', 'Listas de óbitos.'], ['Halley', 'Breslau.'], ['105', 'Meninos por 100 meninas.']],
  avancado: {
    texto: `<h3>Os róis de confessados</h3>
<p>No mundo católico, as paróquias elaboravam listas anuais dos fiéis obrigados à confissão e comunhão pascal, os róis de confessados, com nomes, idades e moradias ${tag('fato')}. No Brasil colonial, esses róis estão entre as fontes mais antigas para estudar domicílios e população ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Literatura de demografia histórica brasileira.' }],
    exercicios: [
      mc('Os róis de confessados listavam:', ['Escravos vendidos', 'Fiéis obrigados à confissão pascal', 'Soldados', 'Navios'], 1, 'Paróquias.'),
      mc('No Brasil, os róis são fonte para o período:', ['Colonial', 'Republicano recente', 'Pré-cabralino', 'Futuro'], 0, 'Demografia histórica.'),
      mc('Os róis registravam também:', ['Idades e moradias', 'Votos', 'Impostos de renda', 'Nada'], 0, 'Domicílios.'),
      disc('Explique como os róis de confessados permitem estudar domicílios coloniais e seus limites.', ['Fonte', 'Uso', 'Limites', 'Exemplo'])],
  },
}),

aula({
  id: 'dm2-2', titulo: 'Malthus, seus críticos e Quetelet', duracao: '150 min',
  aprendera: ['Expor o princípio da população de Malthus', 'Distinguir freios positivos, preventivos e restrição moral', 'Conhecer as críticas a Malthus', 'Explicar o "homem médio" de Quetelet'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A população pode crescer mais depressa que os alimentos? Malthus respondeu que sim, e seu argumento marcou dois séculos de debate.</p>
<h3>O princípio da população</h3>
<p>Thomas Malthus, pastor anglicano, publicou em 1798 o <em>Ensaio sobre o princípio da população</em>, em resposta às esperanças de progresso indefinido de Godwin e Condorcet ${tag('fato')}. Sustentou que a população, se não for contida, cresce em progressão geométrica, enquanto os meios de subsistência crescem no máximo em progressão aritmética ${tag('fato')}.</p>
<h3>Os freios</h3>
<p>Malthus distinguiu freios positivos, que aumentam a mortalidade (fome, doença, guerra), e preventivos, que reduzem os nascimentos ${tag('fato')}. Na segunda edição (1803), acrescentou a "restrição moral": adiar o casamento e viver castamente até ele ${tag('fato')}. Malthus rejeitava a contracepção; o neomalthusianismo posterior a defendeu ${tag('fato')}.</p>
<h3>Críticas</h3>
<p>Marx atacou Malthus, sustentando que a miséria vinha das relações de produção e não de uma lei natural da população ${tag('fato')}. A experiência dos séculos XIX e XX mostrou a produção de alimentos crescendo mais do que Malthus previa ${tag('fato')}.</p>
<h3>Quetelet</h3>
<p>Adolphe Quetelet, em <em>Sobre o homem</em> (1835), aplicou a estatística a fenômenos sociais e propôs o "homem médio", tipo estatístico de uma população ${tag('fato')}.</p>`,
  vocabulario: [
    ['Progressão geométrica', 'Sequência que se multiplica por um fator constante (1, 2, 4, 8).'],
    ['Progressão aritmética', 'Sequência que soma um valor constante (1, 2, 3, 4).'],
    ['Freios positivos', 'Fatores que elevam a mortalidade.'],
    ['Restrição moral', 'Adiamento do casamento com castidade, em Malthus.'],
    ['Homem médio', 'Tipo estatístico de uma população, em Quetelet.'],
  ],
  exemplos: `<p><strong>As duas progressões:</strong> se a população dobra a cada 25 anos e os alimentos aumentam uma unidade a cada 25 anos, em 100 anos a população vai de 1 para 16, e os alimentos de 1 para 5. O argumento é matematicamente simples; a questão é se as premissas sobre o crescimento dos alimentos são verdadeiras.</p>`,
  contexto: `<p><strong>No mundo:</strong> Darwin e Wallace disseram ter tido a ideia da luta pela existência ao ler Malthus ${tag('fato')}. <strong>No Brasil:</strong> Josué de Castro criticou, em <em>Geografia da fome</em> (1946), a explicação malthusiana da fome, atribuindo-a a fatores sociais e econômicos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a previsão de Malthus não se cumpriu como ele esperava', tag: 'argumento',
    premissas: ['Malthus supôs que os alimentos cresceriam no máximo em progressão aritmética.', 'Inovações agrícolas, novas terras e comércio aumentaram a produção muito mais depressa.', 'Ao mesmo tempo, a fecundidade caiu em muitos países sem fome nem guerra.'],
    conclusao: 'Logo, as premissas de Malthus não descreveram bem os dois séculos seguintes.',
    nota: 'Isso não anula a pergunta sobre limites de recursos, que reaparece no debate ambiental.',
  },
  objecoes: [
    { objecao: 'Malthus estava certo: a fome existe até hoje.', tag: 'debate',
      resposta: 'A fome persiste, mas hoje se produz alimento suficiente para toda a população mundial; a fome decorre sobretudo de pobreza, guerras e distribuição, como argumentaram Josué de Castro e Amartya Sen. A existência da fome não confirma a lei malthusiana; aponta para causas sociais.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura dos dois primeiros capítulos do Ensaio de Malthus (tese, argumentos, conceitos, objeções e aplicação ao Brasil), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Thomas Malthus, Ensaio sobre o princípio da população (1798), caps. 1–2; Josué de Castro, Geografia da fome (1946), introdução', link: null,
    orientacao: `<p>Em Malthus, os dois postulados e a comparação das progressões. Em Josué de Castro, a crítica à explicação natural da fome. Compare as duas teses.</p>`,
  },
  perguntas: [
    { p: 'Como cresce a população segundo Malthus?', r: 'Em progressão geométrica, se não for contida.' },
    { p: 'O que é a restrição moral?', r: 'Adiar o casamento e viver castamente até ele.' },
    { p: 'Como Josué de Castro explica a fome?', r: 'Por fatores sociais e econômicos, não por uma lei natural da população.' },
  ],
  exercicios: [
    mc('O Ensaio sobre o princípio da população é de:', ['1662', '1798', '1835', '1945'], 1, 'Malthus.'),
    mc('Fome, doença e guerra são freios:', ['Preventivos', 'Positivos', 'Morais', 'Econômicos'], 1, 'Mortalidade.'),
    mc('Malthus, quanto à contracepção:', ['A defendia', 'A rejeitava', 'Era indiferente', 'A inventou'], 1, 'Restrição moral.'),
    mc('O "homem médio" é conceito de:', ['Quetelet', 'Malthus', 'Graunt', 'Marx'], 0, '1835.'),
    mc('Geografia da fome é de:', ['Josué de Castro', 'Darcy Ribeiro', 'Gilberto Freyre', 'Celso Furtado'], 0, '1946.'),
    disc('Entregue a ficha de leitura dos capítulos 1 e 2 do Ensaio de Malthus.', ['Tese', 'Argumentos', 'Objeções', 'Aplicação ao Brasil']),
  ],
  resumo: ['Malthus (1798): progressões.', 'Freios positivos e preventivos; restrição moral (1803).', 'Neomalthusianismo.', 'Críticas: Marx, produção de alimentos, Josué de Castro.', 'Quetelet: homem médio.'],
  referencias: [
    { texto: 'Thomas Malthus, Ensaio sobre o princípio da população (1798).' },
    { texto: 'Adolphe Quetelet, Sobre o homem (1835).' },
    { texto: 'Josué de Castro, Geografia da fome (1946).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de Malthus', 'Ler os textos indicados'],
  revisao: [['Malthus', 'Geométrica e aritmética.'], ['Restrição moral', '1803.'], ['Josué de Castro', 'Fome social.']],
  avancado: {
    texto: `<h3>Amartya Sen e as fomes</h3>
<p>Amartya Sen (<em>Poverty and Famines</em>, 1981) mostrou que grandes fomes, como a de Bengala em 1943, ocorreram sem queda grande da produção de alimentos, por perda de renda e de acesso dos mais pobres ${tag('interpretacao')}. Observou também que fomes graves são raras em democracias com imprensa livre ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Amartya Sen, Poverty and Famines (1981).' }],
    exercicios: [
      mc('Poverty and Famines é de:', ['Sen', 'Malthus', 'Boserup', 'Simon'], 0, '1981.'),
      mc('Para Sen, a fome de Bengala resultou sobretudo de:', ['Falta absoluta de comida', 'Perda de acesso e renda dos pobres', 'Excesso populacional', 'Clima apenas'], 1, 'Titularidades.'),
      mc('Sen observou que fomes graves são raras em:', ['Ditaduras', 'Democracias com imprensa livre', 'Ilhas', 'Desertos'], 1, 'Interpretação.'),
      disc('Compare as explicações da fome de Malthus, Josué de Castro e Sen.', ['Malthus', 'Josué de Castro', 'Sen', 'Avaliação'])],
  },
}),

aula({
  id: 'dm2-3', titulo: 'A teoria da transição demográfica: Thompson, Landry e Notestein', duracao: '150 min',
  aprendera: ['Descrever as fases da transição demográfica', 'Conhecer os formuladores da teoria', 'Explicar as causas propostas para a queda da mortalidade e da fecundidade', 'Aplicar a teoria ao Brasil'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Por que tantos países passaram de muitos nascimentos e muitas mortes para poucos nascimentos e poucas mortes?</p>
<h3>Os formuladores</h3>
<p>Warren Thompson (1929), Adolphe Landry (<em>A revolução demográfica</em>, 1934) e Frank Notestein (1945) descreveram uma sequência observada em países europeus ${tag('fato')}.</p>
<h3>As fases</h3>
<ol>
<li>Natalidade e mortalidade altas; crescimento lento ${tag('fato')}.</li>
<li>A mortalidade cai (alimentação, saneamento, medicina); a natalidade continua alta; crescimento rápido ${tag('fato')}.</li>
<li>A natalidade também cai; o crescimento desacelera ${tag('fato')}.</li>
<li>Natalidade e mortalidade baixas; crescimento lento ou nulo ${tag('fato')}.</li>
</ol>
<h3>Causas</h3>
<p>A queda da mortalidade é atribuída a melhorias na alimentação, no saneamento, na vacinação e na medicina ${tag('interpretacao')}. A queda da fecundidade foi associada à urbanização, à escolarização, ao trabalho feminino, à queda da mortalidade infantil e a mudanças de valores; o peso de cada fator é debatido ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>No Brasil, a mortalidade caiu sobretudo a partir dos anos 1940, e a fecundidade, a partir dos anos 1960, com queda muito rápida ${tag('fato')}.</p>`,
  vocabulario: [
    ['Transição demográfica', 'Passagem de altas para baixas taxas de natalidade e mortalidade.'],
    ['Crescimento vegetativo', 'Saldo natural de uma população.'],
    ['Revolução demográfica', 'Expressão de Landry para a transição.'],
    ['Defasagem', 'Intervalo entre a queda da mortalidade e a da natalidade.'],
    ['Bônus demográfico', 'Fase em que a proporção de pessoas em idade ativa é alta.'],
  ],
  exemplos: `<p><strong>A defasagem no Brasil:</strong> entre 1940 e 1960, a mortalidade caiu muito enquanto a fecundidade continuava alta, perto de 6 filhos por mulher; a população cresceu cerca de 3% ao ano. A partir dos anos 1960, a fecundidade despencou, e o crescimento desacelerou. É a fase 2 seguida da fase 3, em ritmo mais rápido que o europeu.</p>`,
  contexto: `<p><strong>No mundo:</strong> a transição europeia levou mais de um século; em muitos países em desenvolvimento, ocorreu em poucas décadas ${tag('fato')}. <strong>No Brasil:</strong> a fase de bônus demográfico, com muitas pessoas em idade ativa, está chegando ao fim nas projeções do IBGE ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a queda da mortalidade infantil tende a reduzir a fecundidade', tag: 'argumento',
    premissas: ['Onde muitas crianças morriam, as famílias tinham mais filhos para que alguns sobrevivessem.', 'Com a queda da mortalidade infantil, a maioria dos filhos sobrevive.', 'Assim, as famílias podem alcançar o número desejado de filhos com menos nascimentos.'],
    conclusao: 'Logo, a queda da mortalidade infantil tende, com algum atraso, a reduzir a fecundidade.',
    nota: 'É um mecanismo entre vários; não explica sozinho fecundidades muito abaixo da reposição.',
  },
  objecoes: [
    { objecao: 'A transição demográfica é uma lei que todos os países seguem igual.', tag: 'debate',
      resposta: 'A teoria descreve uma tendência geral, mas os ritmos, as causas e os pontos de chegada variaram muito. Alguns países ficaram muito abaixo da reposição; outros mantêm fecundidade alta por mais tempo. É modelo descritivo útil, não lei necessária.' },
  ],
  aplicacao: `<p>Com dados do IBGE, monte uma tabela com a TFT e a esperança de vida do Brasil em 1940, 1960, 1980, 2000 e 2022 (ou anos próximos) e identifique as fases da transição.</p>`,
  fonte: {
    obra: 'Frank Notestein, "Population: The Long View" (1945); IBGE, séries históricas de fecundidade e mortalidade', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Em Notestein, a descrição das fases e das causas. No IBGE, as séries para o Brasil. Compare a sequência brasileira com o modelo.</p>`,
  },
  perguntas: [
    { p: 'Quais as fases da transição demográfica?', r: 'Altas taxas; queda da mortalidade; queda da natalidade; baixas taxas.' },
    { p: 'Quem escreveu A revolução demográfica?', r: 'Adolphe Landry (1934).' },
    { p: 'Quando a fecundidade começou a cair no Brasil?', r: 'A partir dos anos 1960.' },
  ],
  exercicios: [
    mc('Na fase 2 da transição:', ['Ambas as taxas caem', 'Cai a mortalidade, a natalidade segue alta', 'Cai a natalidade antes', 'Nada muda'], 1, 'Crescimento rápido.'),
    mc('"Population: The Long View" é de:', ['Thompson', 'Notestein', 'Landry', 'Malthus'], 1, '1945.'),
    mc('No Brasil, a mortalidade caiu sobretudo a partir de:', ['1880', '1940', '1980', '2000'], 1, 'Saneamento, vacinas.'),
    mc('Entre 1940 e 1960, a população brasileira cresceu cerca de:', ['0,5% ao ano', '1% ao ano', '3% ao ano', '6% ao ano'], 2, 'Fase 2.'),
    mc('A transição demográfica é melhor descrita como:', ['Lei necessária', 'Modelo descritivo de tendência', 'Doutrina', 'Hipótese refutada'], 1, 'Debate.'),
    disc('Monte a tabela de TFT e esperança de vida do Brasil e identifique as fases da transição.', ['Dados com fonte', 'Tabela', 'Fases', 'Comparação com o modelo']),
  ],
  resumo: ['Thompson (1929), Landry (1934), Notestein (1945).', 'Quatro fases.', 'Causas: saúde, urbanização, escolarização, valores.', 'Brasil: mortalidade desde 1940; fecundidade desde 1960.', 'Bônus demográfico.'],
  referencias: [
    { texto: 'Frank Notestein, "Population: The Long View" (1945).' },
    { texto: 'Adolphe Landry, La révolution démographique (1934).' },
    { texto: 'IBGE, séries históricas.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a tabela das fases', 'Consultar os dados oficiais'],
  revisao: [['Fase 2', 'Mortalidade cai.'], ['Notestein', '1945.'], ['Brasil', 'Queda rápida da fecundidade.']],
  avancado: {
    texto: `<h3>A segunda transição demográfica</h3>
<p>Ron Lesthaeghe e Dirk van de Kaa propuseram, em 1986, a ideia de uma "segunda transição demográfica": fecundidade abaixo da reposição, casamento mais tardio, aumento das uniões informais e dos divórcios, ligados a valores de autonomia individual ${tag('interpretacao')}. A tese é discutida, sobretudo quanto à sua aplicação fora da Europa ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ron Lesthaeghe, artigos sobre a segunda transição demográfica.' }],
    exercicios: [
      mc('A segunda transição demográfica foi proposta em:', ['1945', '1968', '1986', '2010'], 2, 'Lesthaeghe e van de Kaa.'),
      mc('Ela associa a baixa fecundidade a valores de:', ['Tradição', 'Autonomia individual', 'Pobreza apenas', 'Guerra'], 1, 'Interpretação.'),
      mc('A aplicação fora da Europa é:', ['Consensual', 'Debatida', 'Proibida', 'Irrelevante'], 1, 'Debate.'),
      disc('Avalie se a segunda transição demográfica descreve bem o Brasil atual, com dados.', ['Tese', 'Dados brasileiros', 'Encaixe', 'Conclusão'])],
  },
}),

aula({
  id: 'dm2-4', titulo: 'Boserup, Ehrlich e Simon: pessimistas e otimistas sobre a população', duracao: '150 min',
  aprendera: ['Expor a tese de Boserup sobre população e agricultura', 'Expor as previsões de Ehrlich em A bomba populacional', 'Expor a tese de Simon e a aposta Simon–Ehrlich', 'Avaliar previsões com os dados'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Mais gente é ameaça ou recurso? No século XX, pessimistas e otimistas disputaram a resposta com previsões que podem ser conferidas.</p>
<h3>Boserup</h3>
<p>Ester Boserup, em <em>The Conditions of Agricultural Growth</em> (1965), inverteu Malthus: o aumento da população pressiona as sociedades a intensificar a agricultura e a inovar ${tag('fato')}.</p>
<h3>Ehrlich</h3>
<p>Paul Ehrlich, em <em>The Population Bomb</em> (1968), previu fomes de massa nos anos 1970 com centenas de milhões de mortes e defendeu medidas fortes de controle populacional ${tag('fato')}. As fomes na escala prevista não ocorreram, em parte pela Revolução Verde, que elevou a produtividade agrícola; Norman Borlaug recebeu o Nobel da Paz em 1970 ${tag('fato')}.</p>
<h3>Simon</h3>
<p>Julian Simon, em <em>The Ultimate Resource</em> (1981), sustentou que a inteligência humana é o recurso último e que mais pessoas geram mais soluções ${tag('fato')}. Em 1980, Simon apostou com Ehrlich que o preço de cinco metais cairia em dez anos; em 1990 os preços tinham caído, e Simon venceu ${tag('fato')}. Estudos mostram que, em outros períodos, o resultado da mesma aposta teria sido outro ${tag('debate')}.</p>
<h3>A doutrina</h3>
<p>São João Paulo II criticou as campanhas que impõem a contracepção como condição de ajuda ao desenvolvimento (<em>Sollicitudo rei socialis</em>, 25) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Intensificação agrícola', 'Aumento da produção por área com mais trabalho e técnica.'],
    ['Revolução Verde', 'Aumento da produtividade agrícola com novas variedades, irrigação e insumos.'],
    ['Recurso último', 'Em Simon, a inteligência humana.'],
    ['Aposta Simon–Ehrlich', 'Aposta de 1980 sobre o preço de cinco metais até 1990.'],
    ['Controle populacional', 'Políticas para reduzir o crescimento da população.'],
  ],
  exemplos: `<p><strong>Conferindo uma previsão:</strong> Ehrlich previu fomes de massa nos anos 1970. Dados: houve fomes graves (como em Bangladesh em 1974), mas não na escala de centenas de milhões, e a produção de alimentos por pessoa cresceu no mundo. Avaliar uma previsão exige comparar o que foi dito com o que aconteceu, e não com o que se gostaria.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Conferência Internacional sobre População e Desenvolvimento (Cairo, 1994) deslocou o foco das metas populacionais para os direitos e o desenvolvimento ${tag('interpretacao')}. <strong>No Brasil:</strong> a Embrapa contribuiu para elevar a produtividade agrícola, exemplo de inovação diante da demanda por alimentos ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as previsões catastróficas de população falharam', tag: 'argumento',
    premissas: ['As previsões supunham tecnologia e comportamento constantes.', 'A tecnologia agrícola avançou e a fecundidade caiu mais depressa do que o previsto.', 'Previsões que ignoram a resposta humana tendem a errar.'],
    conclusao: 'Logo, as previsões catastróficas falharam porque não consideraram a capacidade de adaptação humana.',
    nota: 'Isso não garante que todos os limites possam ser superados; exige examinar cada recurso.',
  },
  objecoes: [
    { objecao: 'Simon ganhou a aposta; logo não há limite nenhum de recursos.', tag: 'debate',
      resposta: 'Uma aposta sobre cinco metais em dez anos não prova uma tese geral. Há recursos com limites reais, como solos férteis e certos ecossistemas, e o resultado da aposta dependeu do período. O que a história mostra é que a inovação pode ampliar muito os limites, não que eles não existam.' },
  ],
  aplicacao: `<p>Escolha uma previsão demográfica ou de recursos feita há pelo menos 30 anos e confira-a com os dados atuais, explicando o acerto ou o erro.</p>`,
  fonte: {
    obra: 'Paul Ehrlich, The Population Bomb (1968), prólogo; Julian Simon, The Ultimate Resource (1981), introdução; São João Paulo II, Sollicitudo rei socialis (1987), n. 25', link: null,
    orientacao: `<p>Em Ehrlich, as previsões para os anos 1970. Em Simon, a tese do recurso último. Na Sollicitudo, a crítica às campanhas de controle impostas.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese de Boserup?', r: 'Que a pressão populacional estimula a intensificação e a inovação agrícola.' },
    { p: 'O que previu Ehrlich?', r: 'Fomes de massa nos anos 1970.' },
    { p: 'Quem venceu a aposta de 1980?', r: 'Julian Simon.' },
  ],
  exercicios: [
    mc('The Conditions of Agricultural Growth é de:', ['Boserup', 'Ehrlich', 'Simon', 'Borlaug'], 0, '1965.'),
    mc('The Population Bomb é de:', ['1798', '1968', '1981', '1994'], 1, 'Ehrlich.'),
    mc('Norman Borlaug recebeu o Nobel da Paz em:', ['1950', '1970', '1990', '2010'], 1, 'Revolução Verde.'),
    mc('A aposta Simon–Ehrlich foi sobre o preço de:', ['Cinco metais', 'Petróleo', 'Trigo', 'Ouro apenas'], 0, '1980–1990.'),
    mc('A crítica às campanhas impostas de controle está na Sollicitudo rei socialis, n.:', ['1', '25', '41', '47'], 1, 'João Paulo II.'),
    disc('Confira uma previsão demográfica ou de recursos feita há mais de 30 anos com os dados atuais.', ['Previsão', 'Dados atuais', 'Acerto ou erro', 'Explicação']),
  ],
  resumo: ['Boserup (1965): pressão gera inovação.', 'Ehrlich (1968): fomes previstas.', 'Revolução Verde; Borlaug (1970).', 'Simon (1981); aposta de 1980.', 'SRS 25.'],
  referencias: [
    { texto: 'Ester Boserup, The Conditions of Agricultural Growth (1965).' },
    { texto: 'Paul Ehrlich, The Population Bomb (1968).' },
    { texto: 'Julian Simon, The Ultimate Resource (1981).' },
    { texto: 'São João Paulo II, Sollicitudo rei socialis (1987).', livro: 'jp2-sollicitudo' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a conferência da previsão', 'Ler os textos indicados'],
  revisao: [['Boserup', 'Inovação.'], ['Ehrlich', 'Fomes previstas.'], ['Simon', 'Recurso último.']],
  avancado: {
    texto: `<h3>A Conferência do Cairo</h3>
<p>A Conferência Internacional sobre População e Desenvolvimento (Cairo, 1994) adotou um programa de ação centrado em saúde, educação e direitos ${tag('fato')}. A Santa Sé participou com reservas, opondo-se especialmente à inclusão do aborto entre os meios de planejamento familiar ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Programa de Ação da Conferência Internacional sobre População e Desenvolvimento (1994).' }],
    exercicios: [
      mc('A Conferência sobre População e Desenvolvimento foi no Cairo em:', ['1974', '1984', '1994', '2004'], 2, 'Programa de ação.'),
      mc('A Santa Sé participou:', ['Sem reservas', 'Com reservas', 'Não participou', 'Como organizadora'], 1, 'Aborto.'),
      mc('O programa do Cairo centrou-se em:', ['Metas numéricas rígidas', 'Saúde, educação e direitos', 'Guerra', 'Comércio'], 1, 'Mudança de foco.'),
      disc('Analise as reservas da Santa Sé no Cairo à luz da Familiaris consortio e da Gaudium et spes 87.', ['Reservas', 'Doutrina', 'Argumento', 'Avaliação'])],
  },
}),

avaliacao('dm2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os fundadores da demografia, Malthus e seus críticos, a transição demográfica e o debate entre pessimistas e otimistas, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia a ficha de Malthus e a tabela da transição brasileira.</li><li>Revise as previsões e seus resultados.</li></ul>`,
[
  disc('Compare Malthus, Boserup e Simon sobre a relação entre população e recursos, e avalie qual foi confirmado pelos dados do século XX.', ['Malthus', 'Boserup', 'Simon', 'Avaliação com dados']),
  disc('Explique a transição demográfica brasileira e indique que causas os dados permitem afirmar e quais permanecem em debate.', ['Fases', 'Dados', 'Causas estabelecidas', 'Causas debatidas']),
]),
];
