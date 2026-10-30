// Geografia IV — estudos avançados (etapa 8 do percurso de Geografia).
// Climatologia; geomorfologia e hidrografia; população, urbanização e geopolítica contemporânea;
// os domínios morfoclimáticos do Brasil segundo Ab'Sáber. Bases físicas gerais antes do Brasil.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'g4-1', titulo: 'Climatologia: atmosfera, massas de ar, classificações e mudança do clima', duracao: '150 min',
  aprendera: ['Distinguir tempo e clima e ler um climograma', 'Explicar os fatores do clima e as massas de ar que atuam no Brasil', 'Usar a classificação de Köppen', 'Expor o que se sabe e o que se debate sobre a mudança do clima'],
  prereq: ['Geografia III (módulo G3)', 'Física: calor e pressão (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que chove tanto na Amazônia e tão pouco no sertão? Por que o inverno do Sul tem geadas? A climatologia explica a distribuição dos climas pelos fatores que os produzem.</p>
<h3>Tempo e clima</h3>
<p><strong>Tempo</strong> é o estado da atmosfera num momento; <strong>clima</strong> é o padrão médio do tempo num lugar ao longo de décadas. Normais climatológicas usam médias de 30 anos ${tag('fato')}. No Brasil, o INMET publica as normais ${tag('fato')}.</p>
<h3>Fatores do clima</h3>
<p>Latitude (radiação solar), altitude, continentalidade e maritimidade, correntes marinhas, relevo e massas de ar ${tag('fato')}. A Zona de Convergência Intertropical, faixa de baixa pressão próxima ao equador, concentra chuvas ${tag('fato')}.</p>
<h3>Massas de ar no Brasil</h3>
<ul>
<li><strong>Equatorial continental (mEc)</strong>: quente e úmida, origem amazônica.</li>
<li><strong>Tropical atlântica (mTa)</strong>: quente e úmida, atua no litoral.</li>
<li><strong>Tropical continental (mTc)</strong>: quente e seca, origem no Chaco.</li>
<li><strong>Polar atlântica (mPa)</strong>: fria, responsável pelas frentes frias e geadas no Sul e Sudeste ${tag('fato')}.</li>
</ul>
<h3>Köppen</h3>
<p>A classificação de Wladimir Köppen, proposta em 1900 e revisada depois, usa temperatura e precipitação; letras indicam grupos (A tropical, B seco, C temperado...) ${tag('fato')}. No Brasil predominam climas A e, no Sul e em áreas altas, C; o semiárido nordestino é BSh ${tag('fato')}.</p>
<h3>Mudança do clima</h3>
<p>O Painel Intergovernamental sobre Mudança do Clima (IPCC), criado em 1988, avalia a literatura científica; seu Sexto Relatório (2021–2023) afirma que a influência humana aqueceu a atmosfera, o oceano e a terra ${tag('fato')}. Magnitudes regionais futuras e custos de políticas são objeto de projeções com incerteza e de debate ${tag('debate')}. El Niño e La Niña, oscilações naturais do Pacífico, alteram chuvas no Brasil (seca no Norte e Nordeste, chuva no Sul em anos de El Niño) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Tempo', 'Estado momentâneo da atmosfera.'],
    ['Clima', 'Padrão médio do tempo ao longo de décadas.'],
    ['Normal climatológica', 'Média de 30 anos de uma variável.'],
    ['Massa de ar', 'Grande volume de ar com temperatura e umidade homogêneas.'],
    ['ZCIT', 'Zona de Convergência Intertropical, faixa de chuvas perto do equador.'],
    ['El Niño', 'Aquecimento anômalo do Pacífico equatorial que altera chuvas.'],
  ],
  exemplos: `<p><strong>Lendo um climograma:</strong> barras mostram chuva mensal; a linha, temperatura média. Manaus: temperatura quase constante (~27 °C) e chuva o ano todo, com máximo no início do ano — clima Af/Am. Petrolina: temperatura alta, chuva concentrada em poucos meses e total anual baixo — BSh. Porto Alegre: inverno nitidamente mais frio, chuva distribuída — Cfa.</p>`,
  contexto: `<p><strong>No mundo:</strong> as conferências do clima (COP) negociam metas de emissão desde a Convenção de 1992. <strong>No Brasil:</strong> secas no semiárido, enchentes no Sul e queimadas na Amazônia tornam a climatologia questão de política pública ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que um inverno frio não refuta o aquecimento global', tag: 'argumento',
    premissas: ['Clima é média de longo prazo; tempo é o estado de um dia ou estação.', 'Uma tendência de aquecimento médio é compatível com eventos frios isolados.', 'Para avaliar a tendência, compara-se a média de décadas, não um evento.'],
    conclusao: 'Logo, um inverno frio, isoladamente, não refuta nem prova a tendência climática.',
    nota: 'O mesmo vale para uma onda de calor isolada: não prova sozinha a tendência.',
  },
  objecoes: [
    { objecao: 'Se o clima sempre mudou, a mudança atual não tem causa humana.', tag: 'debate',
      resposta: 'O clima mudou naturalmente no passado, mas isso não exclui uma causa humana agora; são perguntas distintas. A atribuição usa medidas de gases, isótopos e modelos. Admitir a evidência não obriga a aceitar qualquer política: custos e meios são debatidos.' },
  ],
  aplicacao: `<p>No site do INMET, obtenha a normal climatológica 1991–2020 de uma estação do seu estado. Faça o climograma, classifique o clima segundo Köppen e indique que massas de ar explicam o padrão.</p>`,
  fonte: {
    obra: 'IPCC, Sexto Relatório de Avaliação (AR6), Resumo para Formuladores de Políticas do Grupo de Trabalho I (2021); INMET, Normais climatológicas', link: { url: 'https://portal.inmet.gov.br', rotulo: 'INMET' },
    orientacao: `<p>No resumo do IPCC, localize as afirmações marcadas com grau de confiança e veja como o relatório distingue "provável" e "muito provável". Nas normais do INMET, obtenha os dados para o climograma.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre tempo e clima?', r: 'Tempo é o estado momentâneo da atmosfera; clima é o padrão médio ao longo de décadas.' },
    { p: 'Que massa de ar traz frentes frias ao Sul?', r: 'A massa polar atlântica (mPa).' },
    { p: 'Quantos anos compõem uma normal climatológica?', r: 'Trinta anos.' },
  ],
  exercicios: [
    mc('O semiárido nordestino, em Köppen, é:', ['Af', 'BSh', 'Cfa', 'Aw'], 1, 'Seco e quente.'),
    mc('A massa de ar quente e seca de origem no Chaco é a:', ['mEc', 'mTa', 'mTc', 'mPa'], 2, 'Tropical continental.'),
    mc('O IPCC foi criado em:', ['1972', '1988', '1992', '2015'], 1, 'Avalia a literatura científica.'),
    mc('Em anos de El Niño, o Nordeste tende a ter:', ['Mais chuva', 'Seca', 'Neve', 'Nenhuma alteração'], 1, 'E o Sul, mais chuva.'),
    mc('Um único inverno frio, para a tendência climática, é:', ['Prova contrária', 'Insuficiente para avaliar', 'Prova favorável', 'Irrelevante para o tempo'], 1, 'Clima é média de décadas.'),
    disc('Explique o clima da sua cidade: fatores, massas de ar, classificação de Köppen e um risco climático, com dados do INMET.', ['Fatores identificados', 'Massas de ar', 'Köppen correto', 'Risco com dados']),
  ],
  resumo: ['Tempo x clima; normais de 30 anos (INMET).', 'Fatores: latitude, altitude, continentalidade, correntes, relevo, massas.', 'Massas no Brasil: mEc, mTa, mTc, mPa.', 'Köppen (1900): A, B, C...', 'IPCC (1988; AR6): influência humana; El Niño.'],
  referencias: [
    { texto: 'IPCC, Sexto Relatório de Avaliação, Grupo de Trabalho I (2021).' },
    { texto: 'INMET, Normais climatológicas do Brasil 1991–2020.', link: { url: 'https://portal.inmet.gov.br', rotulo: 'INMET' } },
    { texto: 'Francisco Mendonça e Inês Moresco Danni-Oliveira, Climatologia: noções básicas e climas do Brasil (2007).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer o climograma com dados do INMET'],
  revisao: [['mPa', 'Frentes frias e geadas.'], ['Köppen', 'Temperatura e chuva; 1900.'], ['IPCC', '1988; AR6.']],
  avancado: {
    texto: `<h3>Ilhas de calor</h3>
<p>Áreas urbanas densas, com asfalto e pouca vegetação, registram temperaturas mais altas que o entorno rural: são as ilhas de calor urbanas ${tag('fato')}. Arborização e materiais claros reduzem o efeito ${tag('interpretacao')}.</p>
<h3>Carlos Augusto de Figueiredo Monteiro</h3>
<p>O geógrafo Carlos Augusto de Figueiredo Monteiro desenvolveu no Brasil a análise rítmica do clima e estudos de clima urbano ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Francisco Mendonça e Inês Moresco Danni-Oliveira, Climatologia (2007).' }],
    exercicios: [
      mc('A ilha de calor urbana deve-se principalmente a:', ['Altitude', 'Superfícies construídas e pouca vegetação', 'Correntes marinhas', 'El Niño'], 1, 'Asfalto e concreto.'),
      mc('A análise rítmica do clima no Brasil está associada a:', ['Milton Santos', 'Carlos Augusto de Figueiredo Monteiro', 'Ab\'Sáber', 'Josué de Castro'], 1, 'Clima urbano.'),
      mc('Uma medida para reduzir ilhas de calor é:', ['Mais asfalto', 'Arborização', 'Menos parques', 'Vidros escuros'], 1, 'Sombra e evapotranspiração.'),
      disc('Compare a temperatura de dois pontos da sua cidade (centro e área verde) com medições ou dados disponíveis e explique a diferença.', ['Dados', 'Comparação', 'Explicação', 'Proposta'])],
  },
}),

aula({
  id: 'g4-2', titulo: 'Geomorfologia e hidrografia: relevo, solos e águas do Brasil', duracao: '150 min',
  aprendera: ['Explicar agentes internos e externos do relevo', 'Descrever a estrutura geológica e as classificações do relevo brasileiro', 'Caracterizar as grandes bacias hidrográficas e aquíferos', 'Relacionar relevo, solo e água ao uso do território'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que o Brasil não tem cordilheiras como os Andes? Por que seus rios são tão aproveitados para energia? A geomorfologia e a hidrografia explicam a forma e as águas do território.</p>
<h3>Agentes do relevo</h3>
<p><strong>Agentes internos</strong> (tectonismo, vulcanismo, abalos) constroem o relevo; <strong>agentes externos</strong> (chuva, rios, vento, gelo, seres vivos) o desgastam e modelam ${tag('fato')}. Alfred Wegener propôs a deriva continental em 1912; a teoria da tectônica de placas consolidou-se nos anos 1960 ${tag('fato')}.</p>
<h3>O relevo brasileiro</h3>
<p>O Brasil está no interior da placa Sul-Americana, longe das bordas ativas; por isso tem relevo antigo e desgastado, sem dobramentos modernos, e baixa atividade sísmica ${tag('fato')}. Sua estrutura combina escudos cristalinos antigos e bacias sedimentares ${tag('fato')}. Classificações do relevo: Aroldo de Azevedo (1949), Aziz Ab'Sáber e Jurandyr Ross (anos 1980–1990), que distingue planaltos, planícies e depressões ${tag('fato')}. O ponto mais alto é o Pico da Neblina, com cerca de 2.995 m ${tag('fato')}.</p>
<h3>Hidrografia</h3>
<p>O rio Amazonas tem a maior vazão do mundo ${tag('fato')}. O Brasil se divide em regiões hidrográficas definidas pelo Conselho Nacional de Recursos Hídricos ${tag('fato')}. Rios de planalto, com desníveis, favorecem hidrelétricas, que respondem por grande parte da eletricidade brasileira ${tag('fato')}. O Sistema Aquífero Guarani se estende sob Brasil, Argentina, Paraguai e Uruguai ${tag('fato')}.</p>
<h3>Gestão das águas</h3>
<p>A Lei nº 9.433, de 1997 (Lei das Águas), instituiu a Política Nacional de Recursos Hídricos, com a bacia como unidade de gestão e comitês de bacia ${tag('fato')}; a Agência Nacional de Águas foi criada em 2000 ${tag('fato')}.</p>`,
  vocabulario: [
    ['Agentes internos', 'Forças da dinâmica interna da Terra que constroem o relevo.'],
    ['Agentes externos', 'Forças que desgastam e modelam o relevo (intemperismo, erosão).'],
    ['Escudo cristalino', 'Estrutura de rochas antigas e resistentes.'],
    ['Bacia sedimentar', 'Área de acúmulo de sedimentos.'],
    ['Bacia hidrográfica', 'Área drenada por um rio e seus afluentes.'],
    ['Aquífero', 'Formação rochosa que armazena água subterrânea.'],
  ],
  exemplos: `<p><strong>Relevo e uso:</strong> a Serra do Mar é escarpa de planalto voltada ao oceano; dificultou a ligação entre o litoral e o interior paulista e exigiu obras como a ferrovia Santos–Jundiaí (1867). Na mesma escarpa, chuvas intensas causam deslizamentos em encostas ocupadas.</p>`,
  contexto: `<p><strong>No mundo:</strong> bordas de placas concentram terremotos e vulcões (Andes, Japão). <strong>No Brasil:</strong> os principais riscos geomorfológicos são deslizamentos e enchentes, agravados pela ocupação de encostas e várzeas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o Brasil tem poucos terremotos fortes', tag: 'argumento',
    premissas: ['Terremotos fortes concentram-se nas bordas das placas tectônicas.', 'O território brasileiro está no interior da placa Sul-Americana.', 'O interior das placas tem menor atividade sísmica, embora não nula.'],
    conclusao: 'Logo, o Brasil tem baixa ocorrência de terremotos fortes, ainda que registre tremores de menor magnitude.',
    nota: 'Exemplo de explicação pela posição geográfica numa estrutura maior.',
  },
  objecoes: [
    { objecao: 'Deslizamentos são desastres naturais inevitáveis.', tag: 'debate',
      resposta: 'A chuva e a declividade são naturais; o desastre depende da ocupação de áreas de risco, da drenagem e do alerta. Mapeamento de risco e moradia segura reduzem perdas. Chamar de "natural" pode encobrir responsabilidades.' },
  ],
  aplicacao: `<p>Identifique a bacia hidrográfica em que você mora, o rio principal e um uso conflitante da água (abastecimento, irrigação, energia, despejo). Consulte se há comitê de bacia e o que ele decidiu recentemente.</p>`,
  fonte: {
    obra: 'Lei nº 9.433, de 8 de janeiro de 1997 (Lei das Águas); Jurandyr Ross (org.), Geografia do Brasil (1995)', link: { url: 'https://www.gov.br/ana', rotulo: 'Agência Nacional de Águas' },
    orientacao: `<p>Na Lei das Águas, localize os fundamentos (art. 1º) e os instrumentos da política. Em Ross, identifique os critérios da classificação do relevo.</p>`,
  },
  perguntas: [
    { p: 'Por que o relevo brasileiro é desgastado e sem cordilheiras?', r: 'Porque é antigo e está no interior da placa Sul-Americana, sem dobramentos modernos.' },
    { p: 'Qual a unidade de gestão da Lei das Águas?', r: 'A bacia hidrográfica.' },
    { p: 'Qual rio tem a maior vazão do mundo?', r: 'O Amazonas.' },
  ],
  exercicios: [
    mc('A deriva continental foi proposta por Wegener em:', ['1859', '1912', '1960', '1997'], 1, 'Tectônica de placas nos anos 1960.'),
    mc('O ponto mais alto do Brasil é:', ['Pico da Bandeira', 'Pico da Neblina', 'Monte Roraima', 'Pico das Agulhas Negras'], 1, 'Cerca de 2.995 m.'),
    mc('A Lei das Águas é a Lei:', ['9.433/1997', '12.651/2012', '9.984/2000', '6.938/1981'], 0, 'Política Nacional de Recursos Hídricos.'),
    mc('O Aquífero Guarani estende-se sob:', ['Só o Brasil', 'Brasil, Argentina, Paraguai e Uruguai', 'Brasil e Bolívia', 'Brasil e Peru'], 1, 'Quatro países.'),
    mc('Agentes externos do relevo incluem:', ['Vulcanismo', 'Erosão pela água', 'Tectonismo', 'Terremotos'], 1, 'Desgaste e modelagem.'),
    disc('Analise um desastre de deslizamento ou enchente no Brasil: fatores naturais, fatores de ocupação, dados e medidas de prevenção.', ['Fatores naturais', 'Fatores humanos', 'Dados com fonte', 'Prevenção']),
  ],
  resumo: ['Agentes internos constroem; externos modelam.', 'Wegener (1912); tectônica de placas (anos 1960).', 'Brasil: interior de placa, escudos e bacias; Ross.', 'Amazonas, hidrelétricas, Aquífero Guarani.', 'Lei das Águas (1997); ANA (2000).'],
  referencias: [
    { texto: 'Jurandyr Ross (org.), Geografia do Brasil (1995).' },
    { texto: 'Aziz Ab\'Sáber, Os domínios de natureza no Brasil (2003).' },
    { texto: 'Lei nº 9.433, de 1997 (Política Nacional de Recursos Hídricos).' },
    { texto: 'Agência Nacional de Águas, Conjuntura dos recursos hídricos no Brasil.', link: { url: 'https://www.gov.br/ana', rotulo: 'ANA' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Identificar sua bacia e um conflito de uso'],
  revisao: [['Interior de placa', 'Poucos terremotos fortes.'], ['Lei das Águas', '9.433/1997; bacia como unidade.'], ['Pico da Neblina', '~2.995 m.']],
  avancado: {
    texto: `<h3>Solos</h3>
<p>Os solos resultam da ação do clima e dos organismos sobre a rocha ao longo do tempo; o Sistema Brasileiro de Classificação de Solos, coordenado pela Embrapa, organiza-os em classes como latossolos e argissolos ${tag('fato')}. Os latossolos, profundos e muito intemperizados, predominam no Cerrado; sua correção química viabilizou a agricultura moderna na região ${tag('fato')}.</p>
<h3>Bacias e energia</h3>
<p>Usinas na Amazônia, como Belo Monte, levantam debates sobre energia, impacto ambiental e direitos de povos indígenas e ribeirinhos ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Embrapa, Sistema Brasileiro de Classificação de Solos.' }],
    exercicios: [
      mc('Os latossolos predominam no:', ['Pampa', 'Cerrado', 'Pantanal', 'Litoral'], 1, 'Profundos e intemperizados.'),
      mc('O Sistema Brasileiro de Classificação de Solos é coordenado pela:', ['ANA', 'Embrapa', 'INPE', 'IBGE'], 1, 'Embrapa.'),
      mc('A agricultura no Cerrado foi viabilizada em grande parte pela:', ['Irrigação apenas', 'Correção química do solo', 'Retirada do relevo', 'Neve'], 1, 'Calagem e adubação.'),
      disc('Analise o debate sobre uma hidrelétrica amazônica: energia, custos, impactos e direitos, separando dados e juízo normativo.', ['Dados de energia e custo', 'Impactos', 'Direitos envolvidos', 'Juízo separado'])],
  },
}),

aula({
  id: 'g4-3', titulo: 'População, urbanização e geopolítica contemporânea', duracao: '150 min',
  aprendera: ['Explicar a transição demográfica e aplicá-la ao Brasil', 'Analisar a urbanização mundial e brasileira com dados', 'Ler uma pirâmide etária', 'Situar o Brasil na geopolítica contemporânea'],
  prereq: ['Aulas anteriores do módulo', 'Economia I: indicadores'],
  explicacao: `
<h3>O problema</h3>
<p>A população mundial ultrapassou 8 bilhões em 2022, segundo a ONU, e a maioria vive em cidades ${tag('fato')}. Como se chegou aqui e o que isso significa para o Brasil?</p>
<h3>Transição demográfica</h3>
<p>Modelo em que uma sociedade passa de altas taxas de natalidade e mortalidade para baixas taxas: primeiro cai a mortalidade (a população cresce rapidamente), depois a natalidade ${tag('fato')}. O Brasil fez essa transição em poucas décadas: a fecundidade caiu para abaixo do nível de reposição (cerca de 2,1 filhos por mulher) no início do século XXI ${tag('fato')}. O Censo de 2022 contou cerca de 203 milhões de habitantes ${tag('fato')}.</p>
<h3>Pirâmide etária</h3>
<p>Base larga indica muitos jovens; base estreita e topo largo, envelhecimento. O Brasil passa de uma pirâmide jovem a uma estrutura envelhecida, com efeitos sobre previdência, saúde e mercado de trabalho ${tag('interpretacao')} — ligação com a reforma da Previdência (aula e5-1).</p>
<h3>Urbanização</h3>
<p>Segundo a ONU, a população urbana mundial superou a rural por volta de 2007 ${tag('fato')}. O Brasil urbanizou-se rapidamente a partir dos anos 1950, com migrações do campo e do Nordeste para o Sudeste; no Censo de 2010, cerca de 84% da população vivia em áreas urbanas ${tag('fato')}. A urbanização rápida produziu metrópoles, periferias e favelas — no Censo de 2022, o IBGE passou a usar o termo "favelas e comunidades urbanas" ${tag('fato')}.</p>
<h3>Geopolítica contemporânea</h3>
<p>O mundo pós-Guerra Fria é descrito como multipolar por uns e marcado pela rivalidade entre Estados Unidos e China por outros ${tag('debate')}. O Brasil participa de foros como o G20 e o BRICS (primeira cúpula em 2009) e defende uma reforma do Conselho de Segurança da ONU ${tag('fato')}.</p>
<p>A Doutrina Social da Igreja lembra que a população não é um problema a ser eliminado, mas pessoas a serem acolhidas; e que o desenvolvimento deve ser integral, de "todo o homem e de todos os homens" ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Transição demográfica', 'Passagem de altas para baixas taxas de natalidade e mortalidade.'],
    ['Taxa de fecundidade', 'Número médio de filhos por mulher.'],
    ['Nível de reposição', 'Fecundidade (~2,1) que mantém a população estável a longo prazo.'],
    ['Pirâmide etária', 'Gráfico da população por idade e sexo.'],
    ['Metropolização', 'Formação de grandes aglomerações urbanas integradas.'],
    ['Multipolaridade', 'Distribuição do poder entre vários polos.'],
  ],
  exemplos: `<p><strong>Lendo a pirâmide:</strong> compare as pirâmides do Brasil de 1980 e de 2022 no IBGE. Em 1980, a base é larga (muitas crianças); em 2022, as faixas de 0 a 14 anos encolheram e as de 60 anos ou mais cresceram. Isso indica menos nascimentos e maior longevidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> países ricos e alguns emergentes enfrentam envelhecimento e fecundidade muito baixa; outros, sobretudo na África subsaariana, mantêm crescimento rápido ${tag('fato')}. <strong>No Brasil:</strong> o envelhecimento é rápido e desigual entre regiões ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que Malthus errou sobre o futuro da população e dos alimentos', tag: 'argumento',
    premissas: ['Malthus (1798) previu que a população cresceria mais rápido que os alimentos, gerando fome generalizada.', 'A produtividade agrícola cresceu fortemente com técnica e ciência (aula e4-4 sobre o Cerrado).', 'A fecundidade caiu com a urbanização, a educação e a queda da mortalidade infantil.'],
    conclusao: 'Logo, as duas premissas de Malthus foram desmentidas pela técnica e pela transição demográfica — embora a fome persista por causas de distribuição e conflito.',
    nota: 'Josué de Castro, em Geografia da fome (1946), já mostrava a fome como problema social e político, não só natural.',
  },
  objecoes: [
    { objecao: 'O mundo está superpovoado e a solução é reduzir a população.', tag: 'debate',
      resposta: 'A pressão sobre recursos depende mais de padrões de consumo e técnicas do que do número de pessoas, e a fecundidade já cai na maior parte do mundo. Políticas coercitivas de controle populacional violaram direitos. A Igreja rejeita a coerção e defende a paternidade responsável.' },
  ],
  aplicacao: `<p>No portal do Censo 2022 (IBGE), obtenha a pirâmide etária e a taxa de urbanização do seu município. Compare com o Censo 2010 e descreva duas consequências para políticas locais.</p>`,
  fonte: {
    obra: 'IBGE, Censo Demográfico 2022; Josué de Castro, Geografia da fome (1946), introdução', link: { url: 'https://censo2022.ibge.gov.br', rotulo: 'Censo 2022 (IBGE)' },
    orientacao: `<p>No Censo, obtenha população, pirâmide e urbanização. Em Josué de Castro, identifique a tese de que a fome é fenômeno social. Relacione os dois.</p>`,
  },
  perguntas: [
    { p: 'O que é transição demográfica?', r: 'A passagem de altas para baixas taxas de natalidade e mortalidade.' },
    { p: 'Quantos habitantes o Censo de 2022 contou no Brasil?', r: 'Cerca de 203 milhões.' },
    { p: 'Quando a população mundial passou de 8 bilhões, segundo a ONU?', r: 'Em 2022.' },
  ],
  exercicios: [
    mc('Na primeira fase da transição demográfica, cai primeiro a:', ['Natalidade', 'Mortalidade', 'Migração', 'Urbanização'], 1, 'Por isso a população cresce.'),
    mc('Fecundidade abaixo de 2,1 indica, a longo prazo:', ['Crescimento acelerado', 'Tendência à redução da população', 'Estabilidade garantida', 'Nada'], 1, 'Abaixo da reposição.'),
    mc('No Censo de 2010, a população urbana brasileira era cerca de:', ['50%', '65%', '84%', '98%'], 2, 'Urbanização rápida.'),
    mc('Geografia da fome (1946) é de:', ['Milton Santos', 'Josué de Castro', 'Ab\'Sáber', 'Celso Furtado'], 1, 'Fome como fenômeno social.'),
    mc('A primeira cúpula do BRICS ocorreu em:', ['1991', '2001', '2009', '2015'], 2, 'Brasil, Rússia, Índia, China.'),
    disc('Analise o envelhecimento da população brasileira com a pirâmide do Censo 2022 e duas consequências para políticas públicas, com fonte.', ['Leitura da pirâmide', 'Dados com fonte', 'Duas consequências', 'Conclusão']),
  ],
  resumo: ['8 bilhões (ONU, 2022); maioria urbana desde ~2007.', 'Transição demográfica; Brasil abaixo da reposição.', 'Censo 2022: ~203 milhões; envelhecimento.', 'Urbanização rápida: 84% urbano em 2010; favelas e comunidades urbanas.', 'Geopolítica: G20, BRICS (2009), debate sobre multipolaridade.'],
  referencias: [
    { texto: 'IBGE, Censo Demográfico 2022.', link: { url: 'https://censo2022.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Josué de Castro, Geografia da fome (1946).' },
    { texto: 'Thomas Malthus, Ensaio sobre o princípio da população (1798).' },
    { texto: 'São Paulo VI, Populorum Progressio (1967).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Comparar as pirâmides de 2010 e 2022 do seu município'],
  revisao: [['Transição', 'Cai mortalidade, depois natalidade.'], ['Censo 2022', '~203 milhões.'], ['Malthus', '1798; previsão desmentida.']],
  avancado: {
    texto: `<h3>Bônus demográfico</h3>
<p>Quando a proporção de pessoas em idade ativa é alta em relação a crianças e idosos, abre-se uma "janela" de oportunidade para crescer — o bônus demográfico ${tag('fato')}. Estudos indicam que o Brasil se aproxima do fim dessa janela ${tag('interpretacao')}.</p>
<h3>Migrações recentes</h3>
<p>O Brasil recebeu nos últimos anos imigrantes e refugiados, como venezuelanos e haitianos; a Lei de Migração é a Lei nº 13.445, de 2017 ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, Projeções da população.' }],
    exercicios: [
      mc('O bônus demográfico ocorre quando:', ['Há muitos idosos', 'A proporção em idade ativa é alta', 'A fecundidade é alta', 'Não há migração'], 1, 'Janela de oportunidade.'),
      mc('A Lei de Migração brasileira é de:', ['1980', '1997', '2017', '2022'], 2, 'Lei 13.445/2017.'),
      mc('Para o Brasil, o bônus demográfico está:', ['Começando', 'Perto do fim', 'Ainda distante', 'Inexistente'], 1, 'Segundo estudos.'),
      disc('Analise a imigração venezuelana em Roraima: fluxos, políticas (como a interiorização) e efeitos locais, com dados.', ['Fluxos com dados', 'Políticas', 'Efeitos', 'Conclusão'])],
  },
}),

aula({
  id: 'g4-4', titulo: 'Os domínios morfoclimáticos do Brasil: Ab\'Sáber e os biomas', duracao: '180 min',
  aprendera: ['Caracterizar os seis domínios de natureza de Ab\'Sáber', 'Explicar as faixas de transição', 'Comparar domínios e biomas do IBGE', 'Produzir o mapa comentado da etapa'],
  prereq: ['Aulas anteriores do módulo (clima, relevo, solos)'],
  explicacao: `
<h3>O problema</h3>
<p>Como sintetizar clima, relevo, solo, vegetação e águas do Brasil numa visão de conjunto? Aziz Ab'Sáber (1924–2012) propôs os <strong>domínios morfoclimáticos</strong>: grandes áreas em que relevo, clima, solos e vegetação formam um conjunto coerente ${tag('fato')}.</p>
<h3>Os seis domínios</h3>
<ul>
<li><strong>Amazônico</strong>: terras baixas florestadas equatoriais, clima quente e úmido, grande rede fluvial.</li>
<li><strong>Cerrado</strong>: chapadões tropicais com vegetação de savana, estação seca marcada, latossolos.</li>
<li><strong>Mares de morros</strong>: morros arredondados florestados (Mata Atlântica) do Sudeste e litoral, clima tropical úmido.</li>
<li><strong>Caatinga</strong>: depressões intermontanas semiáridas, vegetação adaptada à seca, rios intermitentes.</li>
<li><strong>Araucárias</strong>: planaltos subtropicais do Sul com mata de araucária.</li>
<li><strong>Pradarias</strong>: coxilhas subtropicais do extremo sul, com campos ${tag('fato')}.</li>
</ul>
<h3>Faixas de transição</h3>
<p>Entre os domínios há faixas de transição, onde as características se misturam, como a Mata dos Cocais e o Agreste; o Pantanal é frequentemente tratado como área de transição complexa ${tag('interpretacao')}.</p>
<h3>Domínios e biomas</h3>
<p>O IBGE adota um mapa de biomas: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal ${tag('fato')}. Domínios dão ênfase à combinação de relevo e clima; biomas, à vegetação e à biodiversidade ${tag('interpretacao')}.</p>
<h3>Ocupação e conservação</h3>
<p>Cada domínio teve uma história de ocupação: a Mata Atlântica foi a mais devastada desde a Colônia; o Cerrado foi transformado pela agricultura desde os anos 1970; a Amazônia é o centro do debate atual ${tag('interpretacao')}. Ab'Sáber chamou a natureza do país de "patrimônio" a ser conhecido para ser bem usado ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Domínio morfoclimático', 'Área em que relevo, clima, solo e vegetação formam um conjunto (Ab\'Sáber).'],
    ['Faixa de transição', 'Área de contato entre domínios.'],
    ['Bioma', 'Conjunto de ecossistemas com vegetação e biodiversidade próprias.'],
    ['Mares de morros', 'Relevo de morros arredondados florestados do Sudeste.'],
    ['Coxilhas', 'Colinas suaves dos campos do extremo sul.'],
  ],
  exemplos: `<p><strong>Atravessando domínios:</strong> uma viagem de Salvador a Brasília passa pela Mata Atlântica litorânea (mares de morros), pelo Agreste (transição), pela Caatinga e, ao subir os chapadões, pelo Cerrado. A mudança de vegetação acompanha a mudança de chuva e de relevo — é o que o conceito de domínio sintetiza.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Brasil está entre os países de maior biodiversidade do planeta ${tag('fato')}. <strong>No Brasil:</strong> a conservação dos domínios envolve unidades de conservação, terras indígenas, o Código Florestal e o uso produtivo, em debate permanente ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a síntese em domínios ajuda a planejar o uso do território', tag: 'argumento',
    premissas: ['Relevo, clima, solo e vegetação estão interligados numa área.', 'Uma intervenção (desmatamento, irrigação, estrada) altera o conjunto, não um elemento isolado.', 'Conhecer o domínio permite prever efeitos e escolher usos adequados.'],
    conclusao: 'Logo, a visão por domínios é instrumento de planejamento, não apenas de descrição.',
    nota: 'Recupera a ideia de natureza como todo interligado, de Humboldt (g2-2).',
  },
  objecoes: [
    { objecao: 'Os domínios são abstrações; a realidade é um contínuo.', tag: 'debate',
      resposta: 'Toda classificação simplifica; Ab\'Sáber reconheceu isso ao propor as faixas de transição. A utilidade da classificação está em organizar o conhecimento, desde que não se tome a linha do mapa por fronteira rígida.' },
  ],
  aplicacao: `<p>Faça o mapa comentado da etapa: desenhe ou use um mapa-base dos domínios de Ab'Sáber; para cada domínio, indique relevo, clima (Köppen), vegetação, solo predominante, um uso econômico e um problema ambiental, com fonte.</p>`,
  fonte: {
    obra: 'Aziz Ab\'Sáber, Os domínios de natureza no Brasil: potencialidades paisagísticas (2003), caps. 1 e 2; IBGE, Biomas e sistema costeiro-marinho do Brasil', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Em Ab'Sáber, leia a definição de domínio e a descrição de dois domínios. No IBGE, compare o mapa de biomas com o de domínios e anote as diferenças.</p>`,
  },
  perguntas: [
    { p: 'O que é um domínio morfoclimático?', r: 'Uma área em que relevo, clima, solo e vegetação formam um conjunto coerente.' },
    { p: 'Quais são os seis domínios de Ab\'Sáber?', r: 'Amazônico, Cerrado, mares de morros, Caatinga, araucárias e pradarias.' },
    { p: 'Qual a diferença entre domínio e bioma?', r: 'O domínio enfatiza relevo e clima; o bioma, vegetação e biodiversidade.' },
  ],
  exercicios: [
    mc('O domínio de morros arredondados florestados do Sudeste é o:', ['Cerrado', 'Mares de morros', 'Araucárias', 'Caatinga'], 1, 'Mata Atlântica.'),
    mc('Rios intermitentes caracterizam o domínio:', ['Amazônico', 'Caatinga', 'Pradarias', 'Araucárias'], 1, 'Semiárido.'),
    mc('O bioma Pampa corresponde, em Ab\'Sáber, às:', ['Araucárias', 'Pradarias', 'Coxilhas do Cerrado', 'Mares de morros'], 1, 'Campos do extremo sul.'),
    mc('A Mata dos Cocais é exemplo de:', ['Domínio', 'Faixa de transição', 'Bacia sedimentar', 'Massa de ar'], 1, 'Entre Amazônia, Caatinga e Cerrado.'),
    mc('Os domínios de natureza no Brasil foi publicado em:', ['1949', '1970', '2003', '2012'], 2, 'Ab\'Sáber.'),
    disc('Entregue o mapa comentado dos domínios: para cada um, relevo, clima, vegetação, solo, um uso e um problema, com fontes.', ['Seis domínios', 'Elementos físicos corretos', 'Usos e problemas', 'Fontes citadas']),
  ],
  resumo: ['Ab\'Sáber: domínios morfoclimáticos (2003).', 'Seis domínios: Amazônico, Cerrado, mares de morros, Caatinga, araucárias, pradarias.', 'Faixas de transição: Cocais, Agreste, Pantanal.', 'Biomas do IBGE: seis biomas.', 'Domínios como instrumento de planejamento.'],
  referencias: [
    { texto: 'Aziz Ab\'Sáber, Os domínios de natureza no Brasil (2003).' },
    { texto: 'IBGE, Biomas e sistema costeiro-marinho do Brasil.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
    { texto: 'Jurandyr Ross (org.), Geografia do Brasil (1995).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o mapa comentado', 'Ler os capítulos de Ab\'Sáber'],
  revisao: [['Seis domínios', 'Amazônico, Cerrado, mares de morros, Caatinga, araucárias, pradarias.'], ['Transição', 'Cocais, Agreste.'], ['Biomas IBGE', 'Seis biomas.']],
  avancado: {
    texto: `<h3>Refúgios</h3>
<p>Ab'Sáber e outros pesquisadores discutiram a hipótese dos refúgios: durante fases secas do Quaternário, as florestas teriam se retraído em manchas isoladas, o que ajudaria a explicar a distribuição atual de espécies ${tag('hipotese')}. A hipótese é debatida pela biogeografia ${tag('debate')}.</p>
<h3>Sistema costeiro-marinho</h3>
<p>O IBGE passou a mapear também o sistema costeiro-marinho, que inclui manguezais, restingas e recifes ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Aziz Ab\'Sáber, Os domínios de natureza no Brasil (2003).' }],
    exercicios: [
      mc('A teoria dos refúgios é:', ['Fato consensual', 'Hipótese debatida', 'Lei', 'Classificação do IBGE'], 1, 'Biogeografia.'),
      mc('Manguezais pertencem ao:', ['Cerrado', 'Sistema costeiro-marinho', 'Pampa', 'Caatinga'], 1, 'Mapeado pelo IBGE.'),
      mc('A teoria dos refúgios relaciona-se a fases:', ['Úmidas recentes', 'Secas do Quaternário', 'Do Cretáceo', 'Do século XX'], 1, 'Retração das florestas.'),
      disc('Descreva um manguezal brasileiro: localização, funções ecológicas, ameaças e proteção legal, com fontes.', ['Localização', 'Funções', 'Ameaças', 'Proteção'])],
  },
}),

avaliacao('g4-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre clima, relevo, águas, população, urbanização e domínios de natureza, com leitura de dados, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o climograma e a leitura da pirâmide etária.</li><li>Releia seu mapa comentado dos domínios.</li></ul>`,
[
  disc('Escolha um domínio morfoclimático e explique-o integrando clima (massas de ar e Köppen), relevo, solos, águas, população e um problema de uso, com dados.', ['Integração dos elementos físicos', 'População e uso', 'Problema com dados', 'Conclusão']),
  disc('Relacione transição demográfica, urbanização e risco ambiental numa metrópole brasileira, com dados do IBGE e uma proposta.', ['Dados demográficos', 'Urbanização', 'Risco ambiental', 'Proposta fundamentada']),
]),
];
