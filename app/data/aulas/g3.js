// Geografia III — escolas e debates (etapas 6 e 7 do percurso de Geografia).
// Geografia regional e quantitativa, geografia crítica e humanista, o determinismo de Diamond e seus críticos,
// desenvolvimento, meio ambiente e globalização. Teses expostas antes das críticas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'g3-1', titulo: 'Geografia regional clássica e revolução quantitativa', duracao: '150 min',
  aprendera: ['Expor a geografia regional clássica e a posição de Hartshorne', 'Explicar a crítica de Schaefer e a virada quantitativa', 'Aplicar os modelos de von Thünen e de Christaller', 'Avaliar ganhos e limites dos modelos espaciais'],
  prereq: ['Geografia II (módulo G2)', 'Estatística básica (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>A geografia deve descrever cada região em sua singularidade ou buscar leis gerais do espaço? Essa pergunta separou, em meados do século XX, a geografia regional clássica da geografia quantitativa.</p>
<h3>A geografia regional clássica</h3>
<p>Herdeira de Vidal de la Blache, a geografia regional descrevia cada região como síntese de relevo, clima, povoamento e economia ${tag('fato')}. Richard Hartshorne, em <em>A natureza da geografia</em> (1939), defendeu que a geografia estuda a "diferenciação de áreas": o que torna cada lugar distinto ${tag('fato')}.</p>
<h3>A crítica e a virada quantitativa</h3>
<p>Em 1953, Fred Schaefer publicou "O excepcionalismo na geografia", criticando a ideia de que a geografia seria uma ciência apenas do único e defendendo a busca de leis espaciais ${tag('fato')}. Nos anos 1950 e 1960, a "revolução quantitativa" introduziu estatística, modelos e, depois, computadores ${tag('fato')}.</p>
<h3>Dois modelos clássicos</h3>
<ul>
<li><strong>Johann Heinrich von Thünen</strong>, em <em>O Estado isolado</em> (1826), mostrou que, numa planície uniforme em torno de uma cidade, os usos agrícolas se organizam em anéis conforme o custo de transporte e o valor do produto ${tag('fato')}.</li>
<li><strong>Walter Christaller</strong>, em <em>Os lugares centrais no sul da Alemanha</em> (1933), explicou a hierarquia das cidades pela área de alcance dos bens e serviços: poucas cidades grandes oferecem serviços raros; muitas pequenas, serviços comuns ${tag('fato')}.</li>
</ul>
<h3>Avaliação</h3>
<p>Os modelos revelam regularidades reais, mas supõem condições simplificadas (planície uniforme, consumidores racionais); servem como referência para medir desvios, não como retrato da realidade ${tag('interpretacao')}. No Brasil, o IBGE estuda a hierarquia urbana nas pesquisas <em>Regiões de Influência das Cidades</em> (REGIC) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Diferenciação de áreas', 'Objeto da geografia segundo Hartshorne (1939).'],
    ['Excepcionalismo', 'Ideia, criticada por Schaefer, de que a geografia só estuda o único.'],
    ['Revolução quantitativa', 'Introdução de estatística e modelos na geografia (anos 1950–1960).'],
    ['Anéis de von Thünen', 'Usos do solo organizados pela distância ao mercado.'],
    ['Lugar central', 'Cidade que oferece bens e serviços a uma área de influência.'],
    ['REGIC', 'Pesquisa do IBGE sobre a rede e a hierarquia urbana brasileira.'],
  ],
  exemplos: `<p><strong>Von Thünen no cálculo:</strong> se a hortaliça rende R$ 1.000 por hectare menos R$ 50 de frete por quilômetro, e o grão rende R$ 600 menos R$ 10 por quilômetro, a hortaliça compensa até 10 km da cidade (1.000 − 50 × 10 = 600 − 10 × 10 = 500). Além disso, o grão vence. Os cinturões verdes em torno das metrópoles brasileiras seguem essa lógica.</p>`,
  contexto: `<p><strong>No mundo:</strong> a geografia quantitativa deu origem à análise espacial e aos sistemas de informação geográfica (SIG). <strong>No Brasil:</strong> a renovação quantitativa teve forte presença no IBGE e em Rio Claro nos anos 1970 ${tag('interpretacao')}; a REGIC aplica a teoria dos lugares centrais à rede urbana nacional.</p>`,
  argumento: {
    titulo: 'Por que um modelo simplificado pode explicar a realidade', tag: 'argumento',
    premissas: ['Um modelo isola um mecanismo (por exemplo, o custo de transporte) supondo constantes os demais fatores.', 'Se o mecanismo é real, a realidade mostra a tendência prevista, perturbada pelos outros fatores.', 'Os desvios observados indicam quais outros fatores atuam.'],
    conclusao: 'Logo, um modelo simplificado explica parte da realidade e ajuda a identificar o que ele deixa de fora.',
    nota: 'É o mesmo raciocínio dos modelos econômicos (aula e1-5).',
  },
  objecoes: [
    { objecao: 'Modelos espaciais apagam a singularidade dos lugares.', tag: 'debate',
      resposta: 'A objeção dos regionalistas tem força: nenhum modelo descreve a Amazônia ou o Recôncavo baiano em sua inteireza. Mas regularidade e singularidade não se excluem; o bom estudo usa o modelo para ver o que é geral e a descrição para ver o que é próprio.' },
  ],
  aplicacao: `<p>Consulte a REGIC do IBGE para o seu estado. Identifique a metrópole, as capitais regionais e os centros sub-regionais, e explique a hierarquia pela teoria dos lugares centrais.</p>`,
  fonte: {
    obra: 'Fred K. Schaefer, "Exceptionalism in Geography: A Methodological Examination" (1953); IBGE, Regiões de Influência das Cidades', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' },
    orientacao: `<p>Em Schaefer, identifique a crítica a Hartshorne e a proposta de leis espaciais. Na REGIC, localize os critérios de classificação das cidades.</p>`,
  },
  perguntas: [
    { p: 'O que é diferenciação de áreas?', r: 'O objeto da geografia segundo Hartshorne: o que torna cada lugar distinto.' },
    { p: 'O que criticou Schaefer em 1953?', r: 'O excepcionalismo: a ideia de que a geografia só estuda o único.' },
    { p: 'O que explica a teoria dos lugares centrais?', r: 'A hierarquia das cidades pela área de alcance dos bens e serviços.' },
  ],
  exercicios: [
    mc('O Estado isolado de von Thünen é de:', ['1826', '1883', '1933', '1953'], 0, 'Anéis de uso do solo.'),
    mc('A teoria dos lugares centrais é de:', ['Hartshorne', 'Christaller', 'Schaefer', 'Ratzel'], 1, '1933.'),
    mc('Produto A rende 800 − 40d; produto B rende 500 − 10d (d em km). A compensa até:', ['5 km', '10 km', '15 km', '20 km'], 1, '800 − 400 = 500 − 100 = 400.'),
    mc('A natureza da geografia (1939) é de:', ['Schaefer', 'Hartshorne', 'Vidal', 'Harvey'], 1, 'Diferenciação de áreas.'),
    mc('A pesquisa do IBGE sobre hierarquia urbana chama-se:', ['PNAD', 'REGIC', 'PRODES', 'SIDRA'], 1, 'Regiões de Influência das Cidades.'),
    disc('Compare a geografia regional clássica e a quantitativa: objeto, método, um autor de cada e uma crítica a cada, com exemplo brasileiro.', ['Objeto e método', 'Autores', 'Críticas', 'Exemplo brasileiro']),
  ],
  resumo: ['Regional clássica: síntese da região; Hartshorne (1939).', 'Schaefer (1953): crítica ao excepcionalismo.', 'Revolução quantitativa: estatística e modelos.', 'Von Thünen (1826) e Christaller (1933).', 'REGIC: hierarquia urbana brasileira.'],
  referencias: [
    { texto: 'Richard Hartshorne, A natureza da geografia (1939).' },
    { texto: 'Fred K. Schaefer, "Exceptionalism in Geography" (1953).' },
    { texto: 'Walter Christaller, Os lugares centrais no sul da Alemanha (1933).' },
    { texto: 'IBGE, Regiões de Influência das Cidades.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Analisar a REGIC do seu estado'],
  revisao: [['Hartshorne', 'Diferenciação de áreas, 1939.'], ['Von Thünen', 'Anéis, 1826.'], ['Christaller', 'Lugares centrais, 1933.']],
  avancado: {
    texto: `<h3>Autocorrelação espacial</h3>
<p>A "primeira lei da geografia", formulada por Waldo Tobler (1970), diz que tudo se relaciona com tudo, mas coisas próximas se relacionam mais que coisas distantes ${tag('fato')}. Por isso dados espaciais exigem métodos estatísticos próprios, como o índice de Moran ${tag('fato')}.</p>
<h3>Sistemas de informação geográfica</h3>
<p>Os SIG combinam camadas de dados localizados (relevo, população, estradas) para análise; há programas livres, como o QGIS ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Claval, História da geografia (1995).' }],
    exercicios: [
      mc('A "primeira lei da geografia" é de:', ['Christaller', 'Tobler', 'Hartshorne', 'Humboldt'], 1, '1970.'),
      mc('O índice de Moran mede:', ['Altitude', 'Autocorrelação espacial', 'Inflação', 'Densidade'], 1, 'Semelhança entre vizinhos.'),
      mc('Um SIG combina:', ['Camadas de dados localizados', 'Apenas imagens', 'Apenas textos', 'Apenas tabelas'], 0, 'Análise espacial.'),
      disc('Proponha uma análise em SIG para um problema do seu município: camadas, fontes e pergunta.', ['Pergunta', 'Camadas', 'Fontes', 'Resultado esperado'])],
  },
}),

aula({
  id: 'g3-2', titulo: 'Geografia crítica e geografia humanista: Lacoste, Harvey, Milton Santos e Yi-Fu Tuan', duracao: '150 min',
  aprendera: ['Expor a geografia crítica e suas teses centrais', 'Expor o conceito de espaço em Milton Santos', 'Explicar a geografia humanista e o conceito de lugar vivido', 'Comparar as quatro correntes do pensamento geográfico'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Nos anos 1970, duas reações à geografia quantitativa ganharam força. A crítica perguntou a quem serve o espaço e quem o produz; a humanista perguntou o que os lugares significam para as pessoas.</p>
<h3>A geografia crítica</h3>
<p>Yves Lacoste (1976) denunciou o uso estratégico e militar do saber geográfico ${tag('fato')}. David Harvey, em <em>A justiça social e a cidade</em> (1973), analisou a cidade a partir das relações de classe, com instrumental marxista ${tag('fato')}. Para essa corrente, o espaço é produto social e expressa desigualdades ${tag('interpretacao')}.</p>
<h3>Milton Santos</h3>
<p>O geógrafo baiano Milton Santos (1926–2001) publicou <em>Por uma geografia nova</em> (1978) e <em>A natureza do espaço</em> (1996), em que define o espaço como "um conjunto indissociável de sistemas de objetos e sistemas de ações" ${tag('fato')}. Recebeu o Prêmio Vautrin Lud em 1994 ${tag('fato')}. No Brasil, o Encontro Nacional de Geógrafos de Fortaleza (1978) é considerado marco da renovação crítica ${tag('interpretacao')}.</p>
<h3>A geografia humanista</h3>
<p>Yi-Fu Tuan, em <em>Topofilia</em> (1974) e <em>Espaço e lugar</em> (1977), estudou o vínculo afetivo das pessoas com os lugares e a experiência do espaço ${tag('fato')}. "Lugar", nessa corrente, é o espaço dotado de significado pela experiência ${tag('interpretacao')}.</p>
<h3>Avaliação</h3>
<p>A geografia crítica trouxe a desigualdade e o poder para o centro; corre o risco de reduzir tudo à economia e de antecipar conclusões pela teoria ${tag('debate')}. A humanista valoriza a experiência; corre o risco de perder a comparação e a medida ${tag('debate')}. A tradição cristã acrescenta que o lugar é também espaço de memória, culto e comunidade — a paróquia, o santuário, a casa ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Geografia crítica', 'Corrente que analisa o espaço como produto das relações sociais e de poder.'],
    ['Produção do espaço', 'Ideia de que o espaço é construído pela sociedade.'],
    ['Sistemas de objetos e de ações', 'Definição de espaço em Milton Santos (1996).'],
    ['Geografia humanista', 'Corrente que estuda a experiência e o significado dos lugares.'],
    ['Topofilia', 'Vínculo afetivo com o lugar (Tuan, 1974).'],
  ],
  exemplos: `<p><strong>Um mesmo bairro, quatro olhares:</strong> a geografia regional descreve relevo e ocupação; a quantitativa mede densidade e distância ao centro; a crítica pergunta quem lucrou com a valorização dos terrenos e quem foi expulso; a humanista ouve os moradores sobre o que a praça e a igreja significam para eles.</p>`,
  contexto: `<p><strong>No mundo:</strong> as correntes crítica e humanista renovaram a disciplina nas décadas de 1970 e 1980. <strong>No Brasil:</strong> a obra de Milton Santos tornou-se referência internacional e marcou o ensino de geografia nas escolas e universidades ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as correntes podem ser complementares', tag: 'argumento',
    premissas: ['Cada corrente faz uma pergunta diferente: o que é próprio, o que é regular, quem produz e quem ganha, o que significa.', 'As perguntas não se excluem logicamente.', 'Um problema real (por exemplo, a expansão de uma periferia) envolve as quatro dimensões.'],
    conclusao: 'Logo, as correntes podem ser usadas de modo complementar, desde que se explicitem os pressupostos de cada uma.',
    nota: 'Complementar não significa misturar sem critério: pressupostos filosóficos incompatíveis devem ser discutidos.',
  },
  objecoes: [
    { objecao: 'A geografia crítica é apenas militância política.', tag: 'debate',
      resposta: 'Parte da produção crítica foi militante, e isso deve ser avaliado. Mas suas perguntas — quem produz o espaço, quem se beneficia — são legítimas e verificáveis com dados. O critério é a qualidade da evidência, não a simpatia pela conclusão.' },
  ],
  aplicacao: `<p>Escolha um bairro que você conhece e escreva quatro parágrafos curtos, cada um com o olhar de uma corrente (regional, quantitativa, crítica, humanista). Termine indicando qual olhar mais ajuda a responder uma pergunta concreta sobre o bairro.</p>`,
  fonte: {
    obra: 'Milton Santos, A natureza do espaço (1996), introdução e cap. 1; Yi-Fu Tuan, Espaço e lugar (1977), cap. 1', link: null,
    orientacao: `<p>Em Milton Santos, localize a definição de espaço e explique-a com um exemplo. Em Tuan, identifique a distinção entre espaço e lugar. Compare as duas concepções.</p>`,
  },
  perguntas: [
    { p: 'Como Milton Santos define o espaço?', r: 'Como conjunto indissociável de sistemas de objetos e sistemas de ações.' },
    { p: 'O que é topofilia?', r: 'O vínculo afetivo das pessoas com os lugares (Tuan, 1974).' },
    { p: 'Que obra de Harvey inaugura sua análise crítica da cidade?', r: 'A justiça social e a cidade (1973).' },
  ],
  exercicios: [
    mc('Por uma geografia nova é de:', ['Josué de Castro', 'Milton Santos', 'Aziz Ab\'Sáber', 'Pierre Monbeig'], 1, '1978.'),
    mc('Topofilia (1974) é de:', ['Harvey', 'Yi-Fu Tuan', 'Lacoste', 'Hartshorne'], 1, 'Geografia humanista.'),
    mc('Milton Santos recebeu o Prêmio Vautrin Lud em:', ['1978', '1994', '1996', '2001'], 1, 'Considerado o maior prêmio da geografia.'),
    mc('A geografia crítica enfatiza:', ['Leis espaciais neutras', 'Relações de poder e desigualdade', 'Apenas o relevo', 'Apenas a experiência individual'], 1, 'Espaço como produto social.'),
    mc('"Lugar", na geografia humanista, é:', ['Coordenada', 'Espaço dotado de significado pela experiência', 'Região administrativa', 'Escala'], 1, 'Tuan.'),
    disc('Monte um quadro das quatro correntes (regional, quantitativa, crítica, humanista): objeto, método, autor principal e um risco de cada.', ['Quatro correntes', 'Objeto e método', 'Autores corretos', 'Riscos identificados']),
  ],
  resumo: ['Crítica: Lacoste (1976), Harvey (1973), espaço como produto social.', 'Milton Santos: sistemas de objetos e de ações (1996).', 'Humanista: Tuan, topofilia (1974), lugar vivido (1977).', 'Fortaleza (1978): renovação crítica no Brasil.', 'Correntes complementares, com pressupostos explícitos.'],
  referencias: [
    { texto: 'Milton Santos, A natureza do espaço (1996).' },
    { texto: 'Milton Santos, Por uma geografia nova (1978).' },
    { texto: 'David Harvey, A justiça social e a cidade (1973).' },
    { texto: 'Yi-Fu Tuan, Espaço e lugar (1977).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Escrever os quatro olhares sobre o bairro'],
  revisao: [['Milton Santos', 'Objetos e ações.'], ['Tuan', 'Topofilia; espaço e lugar.'], ['Harvey', 'Justiça social e a cidade, 1973.']],
  avancado: {
    texto: `<h3>O meio técnico-científico-informacional</h3>
<p>Milton Santos chamou de "meio técnico-científico-informacional" a fase atual do espaço geográfico, em que ciência, técnica e informação estão incorporadas ao território ${tag('fato')}. Em <em>O Brasil: território e sociedade no início do século XXI</em> (2001), com María Laura Silveira, aplicou o conceito ao país ${tag('fato')}.</p>
<h3>Fenomenologia</h3>
<p>A geografia humanista apoiou-se na fenomenologia filosófica, que descreve a experiência tal como vivida ${tag('fato')}; a relação dessa base com o realismo tomista é tema de discussão filosófica ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Milton Santos e María Laura Silveira, O Brasil: território e sociedade no início do século XXI (2001).' }],
    exercicios: [
      mc('"Meio técnico-científico-informacional" é conceito de:', ['Tuan', 'Milton Santos', 'Harvey', 'Christaller'], 1, 'Fase atual do espaço.'),
      mc('A geografia humanista apoia-se na:', ['Estatística', 'Fenomenologia', 'Geopolítica', 'Cartografia náutica'], 1, 'Experiência vivida.'),
      mc('O Brasil: território e sociedade (2001) é de Milton Santos e:', ['Yi-Fu Tuan', 'María Laura Silveira', 'Aziz Ab\'Sáber', 'Josué de Castro'], 1, 'Aplicação ao Brasil.'),
      disc('Identifique elementos do meio técnico-científico-informacional no seu estado (redes, agricultura de precisão, centros de dados) com dados.', ['Elementos identificados', 'Dados', 'Distribuição desigual', 'Conclusão'])],
  },
}),

aula({
  id: 'g3-3', titulo: 'Determinismo ambiental hoje: Diamond, Armas, germes e aço e seus críticos', duracao: '150 min',
  aprendera: ['Expor com justiça a tese de Armas, germes e aço', 'Apresentar a crítica institucionalista', 'Distinguir condicionamento geográfico de determinismo', 'Escrever ensaio com tese, objeção e resposta'],
  prereq: ['Aulas anteriores do módulo', 'Geografia II: determinismo e possibilismo (g2-3)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que algumas sociedades conquistaram outras, e não o contrário? O fisiologista e geógrafo Jared Diamond respondeu em <em>Armas, germes e aço</em> (1997), livro que recebeu o Prêmio Pulitzer em 1998 ${tag('fato')}.</p>
<h3>A tese de Diamond</h3>
<ul>
<li>A Eurásia tinha mais espécies de plantas e animais domesticáveis ${tag('fato')}.</li>
<li>Seu eixo leste–oeste facilitou a difusão de cultivos entre latitudes semelhantes; as Américas e a África têm eixo norte–sul ${tag('interpretacao')}.</li>
<li>A agricultura produziu excedentes, cidades, especialistas, escrita e Estados; o convívio com animais gerou doenças às quais os eurasianos adquiriram maior resistência ${tag('interpretacao')}.</li>
</ul>
<p>Diamond insiste que a diferença não está em capacidades raciais, mas no ambiente de partida ${tag('fato')}.</p>
<h3>As críticas</h3>
<p>Historiadores e antropólogos acusaram a tese de determinismo e de subestimar escolhas, culturas e acasos ${tag('debate')}. Daron Acemoglu e James Robinson, em <em>Por que as nações fracassam</em> (2012), argumentam que instituições inclusivas ou extrativas explicam melhor as diferenças de prosperidade atuais; citam casos de vizinhos com o mesmo ambiente e destinos diferentes, como as duas Coreias ${tag('interpretacao')}.</p>
<h3>Como julgar</h3>
<p>As teses explicam escalas de tempo diferentes: Diamond, os dez mil anos desde a agricultura; Acemoglu e Robinson, os últimos séculos ${tag('interpretacao')}. Reconhecer condicionamentos geográficos de longo prazo não implica determinismo, se se admitem a liberdade e a contingência ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Domesticação', 'Seleção de plantas e animais para uso humano.'],
    ['Eixo continental', 'Orientação principal de um continente (leste–oeste ou norte–sul).'],
    ['Instituições inclusivas', 'Regras que distribuem direitos e oportunidades amplamente.'],
    ['Instituições extrativas', 'Regras que concentram renda e poder numa elite.'],
    ['Contingência', 'O que poderia ter sido de outro modo.'],
  ],
  exemplos: `<p><strong>As duas Coreias:</strong> mesma península, clima e história até 1945; depois, instituições opostas. Imagens noturnas de satélite mostram o Sul iluminado e o Norte escuro. O exemplo não refuta Diamond (outra escala de tempo), mas mostra que o ambiente não basta para explicar diferenças recentes.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate entre geografia e instituições é central na economia do desenvolvimento. <strong>No Brasil:</strong> a pergunta reaparece ao comparar regiões com ambientes distintos (semiárido, Sul temperado) e histórias institucionais distintas (escravidão, imigração, propriedade da terra) ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que expor a tese com justiça antes de criticá-la', tag: 'argumento',
    premissas: ['Criticar uma versão enfraquecida de uma tese refuta apenas essa versão.', 'A versão mais forte de Armas, germes e aço não é racista nem nega a ação humana; fala de condições de partida.', 'Só a crítica à versão forte avança o conhecimento.'],
    conclusao: 'Logo, o ensaio deve apresentar a tese em sua melhor forma antes da objeção.',
    nota: 'É o princípio da caridade interpretativa, praticado por Santo Tomás ao formular as objeções nos artigos da Suma.',
  },
  objecoes: [
    { objecao: 'Diamond é racista porque explica a dominação europeia.', tag: 'debate',
      resposta: 'O livro afirma explicitamente o contrário: as diferenças vêm do ambiente, não de capacidades raciais. Pode-se criticar seu determinismo, mas a acusação de racismo não corresponde ao texto.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa: tese de Armas, germes e aço em sua melhor forma (um parágrafo), três evidências usadas por Diamond, uma objeção fundamentada (institucional, cultural ou histórica) e sua conclusão sobre o peso relativo da geografia.</p>`,
  fonte: {
    obra: 'Jared Diamond, Armas, germes e aço (1997), prólogo ("A pergunta de Yali") e cap. 10; Daron Acemoglu e James Robinson, Por que as nações fracassam (2012), cap. 2', link: null,
    orientacao: `<p>No prólogo de Diamond, identifique a pergunta que organiza o livro. No cap. 10, o argumento dos eixos continentais. No cap. 2 de Acemoglu e Robinson, a crítica às "teorias que não funcionam", incluindo a geográfica.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese central de Armas, germes e aço?', r: 'As diferenças de poder entre sociedades vêm de condições ambientais de partida, não de diferenças raciais.' },
    { p: 'Qual a crítica de Acemoglu e Robinson?', r: 'Instituições inclusivas ou extrativas explicam melhor a prosperidade atual.' },
    { p: 'Por que as duas Coreias são exemplo relevante?', r: 'Mesmo ambiente, instituições diferentes e resultados opostos.' },
  ],
  exercicios: [
    mc('Armas, germes e aço recebeu o Pulitzer em:', ['1997', '1998', '2005', '2012'], 1, 'Publicado em 1997.'),
    mc('Para Diamond, o eixo leste–oeste da Eurásia facilitou:', ['A navegação', 'A difusão de cultivos', 'O isolamento', 'As secas'], 1, 'Latitudes semelhantes.'),
    mc('Por que as nações fracassam (2012) enfatiza:', ['Clima', 'Instituições', 'Raça', 'Religião apenas'], 1, 'Inclusivas e extrativas.'),
    mc('Diamond e Acemoglu explicam principalmente escalas de tempo:', ['Iguais', 'Diferentes', 'Sem relação', 'Futuras'], 1, 'Milênios x séculos.'),
    mc('Expor a tese em sua melhor forma antes de criticá-la é o princípio da:', ['Caridade interpretativa', 'Autoridade', 'Maioria', 'Novidade'], 0, 'Evita refutar um espantalho.'),
    disc('Escreva o ensaio: tese de Diamond em sua melhor forma, três evidências, uma objeção fundamentada e conclusão sobre o peso da geografia.', ['Tese apresentada com justiça', 'Três evidências', 'Objeção fundamentada', 'Conclusão proporcional']),
  ],
  resumo: ['Diamond (1997; Pulitzer 1998): ambiente de partida.', 'Domesticáveis, eixos continentais, germes.', 'Crítica institucionalista: Acemoglu e Robinson (2012).', 'Escalas de tempo diferentes.', 'Condicionamento não é determinismo.'],
  referencias: [
    { texto: 'Jared Diamond, Armas, germes e aço (1997).' },
    { texto: 'Daron Acemoglu e James Robinson, Por que as nações fracassam (2012).' },
    { texto: 'Lucien Febvre, A Terra e a evolução humana (1922).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio da etapa', 'Ler os capítulos indicados'],
  revisao: [['Diamond', 'Ambiente de partida, 1997.'], ['Acemoglu e Robinson', 'Instituições, 2012.'], ['Caridade', 'Tese na melhor forma.']],
  avancado: {
    texto: `<h3>A reversão da fortuna</h3>
<p>Acemoglu, Johnson e Robinson argumentaram (2002) que regiões colonizadas que eram relativamente prósperas por volta de 1500 tendem a ser hoje relativamente mais pobres, o que chamaram de "reversão da fortuna", e atribuíram o fenômeno às instituições implantadas ${tag('interpretacao')}. A tese é contestada por outros pesquisadores ${tag('debate')}.</p>
<h3>Doenças e desenvolvimento</h3>
<p>Jeffrey Sachs e outros defendem que doenças tropicais e isolamento geográfico pesam no desenvolvimento ${tag('interpretacao')}, mantendo vivo o debate com os institucionalistas.</p>`,
    leituras: [{ texto: 'Daron Acemoglu e James Robinson, Por que as nações fracassam (2012).' }],
    exercicios: [
      mc('A "reversão da fortuna" é atribuída por seus autores a:', ['Clima', 'Instituições', 'Acaso', 'Religião'], 1, 'Acemoglu, Johnson e Robinson.'),
      mc('Jeffrey Sachs enfatiza:', ['Doenças e geografia', 'Apenas instituições', 'Apenas cultura', 'A moeda'], 0, 'Fatores geográficos.'),
      mc('O debate geografia x instituições é:', ['Encerrado', 'Aberto', 'Irrelevante', 'Só histórico'], 1, 'Continua.'),
      disc('Aplique o debate geografia x instituições a duas regiões brasileiras, com dados de renda e de história institucional.', ['Duas regiões', 'Dados', 'Fatores geográficos e institucionais', 'Conclusão'])],
  },
}),

aula({
  id: 'g3-4', titulo: 'Desenvolvimento, meio ambiente e globalização do território', duracao: '150 min',
  aprendera: ['Explicar o conceito de desenvolvimento sustentável e sua origem', 'Usar dados de desmatamento com fonte', 'Expor a ecologia integral de Laudato si\'', 'Analisar a globalização a partir do território'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como conciliar crescimento, redução da pobreza e conservação da natureza? E o que a globalização faz com os territórios? São dois debates abertos da geografia contemporânea.</p>
<h3>Desenvolvimento sustentável</h3>
<p>O Relatório Brundtland, <em>Nosso futuro comum</em> (1987), definiu desenvolvimento sustentável como o que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atenderem às suas ${tag('fato')}. A Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento realizou-se no Rio de Janeiro em 1992 ${tag('fato')}.</p>
<h3>O caso amazônico</h3>
<p>O INPE monitora o desmatamento da Amazônia Legal pelo projeto PRODES, com dados anuais desde 1988 ${tag('fato')}. O Código Florestal vigente é a Lei nº 12.651, de 2012 ${tag('fato')}. As causas do desmatamento — pecuária, grilagem, infraestrutura, fiscalização — e seus pesos são debatidos com dados ${tag('debate')}.</p>
<h3>Ecologia integral</h3>
<p>Na encíclica <em>Laudato si'</em> (2015), o Papa Francisco propõe uma "ecologia integral", em que a crise ambiental e a social estão ligadas e devem ser enfrentadas juntas; pede atenção especial aos pobres ${tag('doutrina')}. A encíclica distingue o ensinamento moral das questões técnicas, que deixa ao debate científico ${tag('doutrina')}.</p>
<h3>Globalização e território</h3>
<p>Milton Santos, em <em>Por uma outra globalização</em> (2000), distinguiu a globalização como fábula (o mundo unificado da propaganda), como perversidade (desemprego, desigualdade) e como possibilidade ${tag('interpretacao')}. A globalização cria territórios em rede — portos, zonas de exportação, centros financeiros — ao lado de áreas pouco conectadas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Desenvolvimento sustentável', 'Atender ao presente sem comprometer as gerações futuras (Brundtland, 1987).'],
    ['PRODES', 'Monitoramento anual do desmatamento da Amazônia pelo INPE.'],
    ['Amazônia Legal', 'Área definida em lei que abrange os estados da Amazônia e parte do Maranhão.'],
    ['Ecologia integral', 'Visão de Laudato si\': crise ambiental e social ligadas.'],
    ['Território em rede', 'Pontos conectados globalmente, como portos e centros financeiros.'],
  ],
  exemplos: `<p><strong>Lendo um dado de desmatamento:</strong> "o desmatamento caiu 20%" exige perguntar: em relação a que ano? Taxa PRODES (anual, agosto a julho) ou alerta DETER (mensal, para fiscalização)? Em quilômetros quadrados ou em proporção? A mesma prática de verificação vale para todo dado ambiental (aula e5-3).</p>`,
  contexto: `<p><strong>No mundo:</strong> as conferências do clima e os acordos ambientais tornaram o território brasileiro objeto de atenção internacional. <strong>No Brasil:</strong> a Amazônia concentra o debate entre conservação, soberania e desenvolvimento das populações locais ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a questão ambiental é também questão social', tag: 'argumento',
    premissas: ['Os danos ambientais (enchentes, secas, poluição) atingem mais quem vive em áreas de risco e tem menos recursos.', 'Políticas ambientais mal desenhadas podem retirar renda de populações pobres sem alternativa.', 'Logo, a eficácia e a justiça de uma política ambiental dependem de seus efeitos sociais.'],
    conclusao: 'Logo, a questão ambiental não pode ser separada da social — tese que Laudato si\' chama de ecologia integral.',
    nota: 'O argumento é compatível com diferentes posições técnicas sobre os meios.',
  },
  objecoes: [
    { objecao: 'Conservar a floresta impede o desenvolvimento da região.', tag: 'debate',
      resposta: 'Há tensões reais. Mas o desenvolvimento também depende de chuvas, solos e biodiversidade que a floresta mantém, e há atividades econômicas compatíveis com a floresta em pé. O debate exige dados de renda e de produção, não só posições.' },
  ],
  aplicacao: `<p>No portal TerraBrasilis do INPE, obtenha a taxa PRODES dos últimos dez anos. Faça um gráfico, registre fonte e data, e relacione as variações a ao menos duas políticas ou fatores econômicos do período, indicando o grau de confiança.</p>`,
  fonte: {
    obra: 'Papa Francisco, Laudato si\' (2015), caps. I e IV; INPE, PRODES', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'Laudato si\' (vatican.va)' },
    orientacao: `<p>No cap. I, identifique os problemas descritos; no cap. IV, a definição de ecologia integral. Relacione-os aos dados do PRODES.</p>`,
  },
  perguntas: [
    { p: 'Como o Relatório Brundtland definiu desenvolvimento sustentável?', r: 'Atender às necessidades do presente sem comprometer as gerações futuras.' },
    { p: 'Qual projeto do INPE mede o desmatamento anual da Amazônia?', r: 'O PRODES.' },
    { p: 'O que é ecologia integral?', r: 'A visão de Laudato si\' segundo a qual a crise ambiental e a social estão ligadas.' },
  ],
  exercicios: [
    mc('O Relatório Brundtland é de:', ['1972', '1987', '1992', '2015'], 1, 'Nosso futuro comum.'),
    mc('A conferência ambiental da ONU no Rio de Janeiro foi em:', ['1972', '1987', '1992', '2012'], 2, 'Rio-92.'),
    mc('O Código Florestal vigente é a Lei:', ['4.771/1965', '12.651/2012', '9.433/1997', '6.938/1981'], 1, 'Lei 12.651/2012.'),
    mc('Laudato si\' foi publicada em:', ['1991', '2009', '2015', '2020'], 2, 'Papa Francisco.'),
    mc('Para Milton Santos, a globalização pode ser vista como fábula, perversidade e:', ['Fatalidade', 'Possibilidade', 'Ilusão', 'Lei natural'], 1, 'Por uma outra globalização (2000).'),
    disc('Analise o desmatamento da Amazônia com dados do PRODES, duas causas debatidas, os efeitos sociais e um critério de Laudato si\'.', ['Dados com fonte', 'Duas causas', 'Efeitos sociais', 'Critério da encíclica aplicado']),
  ],
  resumo: ['Brundtland (1987) e Rio-92.', 'PRODES (INPE, desde 1988); Código Florestal (2012).', 'Causas do desmatamento em debate.', 'Laudato si\' (2015): ecologia integral.', 'Milton Santos (2000): fábula, perversidade, possibilidade.'],
  referencias: [
    { texto: 'Papa Francisco, Laudato si\' (2015).', link: { url: 'https://www.vatican.va/content/francesco/pt/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html', rotulo: 'vatican.va' } },
    { texto: 'Comissão Mundial sobre Meio Ambiente e Desenvolvimento, Nosso futuro comum (1987).' },
    { texto: 'Milton Santos, Por uma outra globalização (2000).' },
    { texto: 'INPE, PRODES — monitoramento do desmatamento.', link: { url: 'https://www.gov.br/inpe', rotulo: 'INPE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Fazer o gráfico do PRODES com fonte'],
  revisao: [['Brundtland', '1987.'], ['PRODES', 'INPE, anual.'], ['Ecologia integral', 'Laudato si\', 2015.']],
  avancado: {
    texto: `<h3>Serviços ecossistêmicos</h3>
<p>A floresta presta serviços como regulação de chuvas, estoque de carbono e polinização; os "rios voadores" — umidade transportada da Amazônia para outras regiões — são tema de pesquisa sobre o regime de chuvas do Centro-Sul ${tag('interpretacao')}.</p>
<h3>Pagamento por serviços ambientais</h3>
<p>A Lei nº 14.119, de 2021, instituiu a Política Nacional de Pagamento por Serviços Ambientais ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Aziz Ab\'Sáber, Os domínios de natureza no Brasil (2003).' }],
    exercicios: [
      mc('"Rios voadores" referem-se a:', ['Rios subterrâneos', 'Umidade transportada pela atmosfera', 'Cachoeiras', 'Canais artificiais'], 1, 'Regime de chuvas.'),
      mc('A política de pagamento por serviços ambientais é da Lei:', ['12.651/2012', '14.119/2021', '9.985/2000', '6.938/1981'], 1, '2021.'),
      mc('Estoque de carbono é exemplo de:', ['Serviço ecossistêmico', 'Bem privado', 'Imposto', 'Tratado'], 0, 'Benefício da floresta.'),
      disc('Avalie um programa de pagamento por serviços ambientais no Brasil: desenho, custos, efeitos e falhas possíveis (aula e3-3).', ['Desenho', 'Custos e efeitos', 'Falhas', 'Conclusão'])],
  },
}),

avaliacao('g3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as correntes do pensamento geográfico e os debates contemporâneos, com cálculos e leitura de dados, e duas discursivas.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o cálculo de von Thünen.</li><li>Releia seu ensaio sobre Diamond.</li></ul>`,
[
  disc('Analise um mesmo problema brasileiro (por exemplo, a expansão de uma periferia urbana) com as quatro correntes do pensamento geográfico e diga qual pergunta cada uma responde melhor.', ['Problema delimitado', 'Quatro correntes aplicadas', 'Comparação', 'Conclusão']),
  disc('Geografia ou instituições? Avalie o debate com Diamond, Acemoglu e Robinson e um exemplo brasileiro, separando análise de juízo normativo.', ['Teses expostas com justiça', 'Exemplo brasileiro', 'Avaliação com evidência', 'Juízo normativo separado']),
]),
];
