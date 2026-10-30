// Ciência Política III — escolas e debates (etapas 6 e 7 do percurso de Ciência Política).
// Institucionalismo e comportamentalismo; escolha racional e neoinstitucionalismo; democracia procedimental
// e substantiva; presidencialismo, parlamentarismo e subsidiariedade na doutrina social da Igreja.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cp3-1', titulo: 'Institucionalismo clássico e comportamentalismo: das constituições ao eleitor', duracao: '150 min',
  aprendera: ['Caracterizar o institucionalismo clássico', 'Explicar a revolução comportamentalista', 'Conhecer os estudos clássicos de voto e de cultura política', 'Avaliar o que cada abordagem explica e o que deixa de fora'],
  prereq: ['Ciência Política II (módulo CP2)'],
  explicacao: `
<h3>O problema</h3>
<p>Para entender a política, basta ler as constituições, ou é preciso observar como as pessoas realmente votam e participam?</p>
<h3>Institucionalismo clássico</h3>
<p>Até meados do século XX, boa parte da ciência política estudava constituições, leis e órgãos do Estado, com método histórico e jurídico ${tag('fato')}. Woodrow Wilson, em <em>Congressional Government</em> (1885), já mostrava que o funcionamento real do Congresso americano diferia do desenho constitucional ${tag('fato')}.</p>
<h3>Comportamentalismo</h3>
<p>Nas décadas de 1950 e 1960, o comportamentalismo deslocou o foco para o comportamento observável de eleitores, líderes e grupos, medido com pesquisas e estatística ${tag('fato')}. Paul Lazarsfeld e colegas, em <em>The People's Choice</em> (1944), estudaram a decisão de voto num condado de Ohio ${tag('fato')}. Angus Campbell, Philip Converse, Warren Miller e Donald Stokes, em <em>The American Voter</em> (1960), destacaram a identificação partidária como fator de voto ${tag('fato')}. Gabriel Almond e Sidney Verba, em <em>The Civic Culture</em> (1963), compararam a cultura política de cinco países ${tag('fato')}.</p>
<h3>Balanço</h3>
<p>O comportamentalismo trouxe rigor de medição; os críticos apontaram que ele tendia a ignorar as instituições que moldam as escolhas e as questões normativas ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Institucionalismo clássico', 'Estudo das instituições formais com método histórico e jurídico.'],
    ['Comportamentalismo', 'Estudo do comportamento político observável com métodos quantitativos.'],
    ['Identificação partidária', 'Vínculo psicológico duradouro do eleitor com um partido.'],
    ['Cultura política', 'Atitudes e crenças de uma população sobre o sistema político.'],
    ['Survey', 'Pesquisa por questionário aplicada a uma amostra.'],
  ],
  exemplos: `<p><strong>Duas perguntas sobre a mesma eleição:</strong> o institucionalista pergunta como as regras (segundo turno, lista aberta, tempo de televisão) influíram no resultado; o comportamentalista pergunta que eleitores votaram em quem e por quê (renda, religião, identificação partidária, avaliação do governo). As duas perguntas se completam.</p>`,
  contexto: `<p><strong>No mundo:</strong> a American Political Science Association foi fundada em 1903 ${tag('fato')}. <strong>No Brasil:</strong> o Estudo Eleitoral Brasileiro (ESEB), realizado desde 2002, aplica questionários nacionais após as eleições e integra uma rede internacional de estudos eleitorais comparados ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a regra escrita não basta para explicar a política', tag: 'argumento',
    premissas: ['As regras formais definem o que é permitido, não o que os atores efetivamente farão.', 'Atores com interesses e crenças diferentes usam as mesmas regras de modos diferentes.', 'O resultado político depende das regras e do comportamento dos atores.'],
    conclusao: 'Logo, explicar a política exige estudar as instituições e o comportamento.',
    nota: 'É a síntese que o neoinstitucionalismo tentará fazer.',
  },
  objecoes: [
    { objecao: 'Pesquisas de opinião só medem o que as pessoas dizem, não o que pensam.', tag: 'debate',
      resposta: 'Há diferença entre resposta declarada e comportamento, e os pesquisadores a estudam (por exemplo, comparando intenção declarada e voto real). Técnicas de redação de perguntas, anonimato e validação com dados oficiais reduzem o problema. Medidas imperfeitas, conhecidos seus limites, ainda informam mais que impressões.' },
  ],
  aplicacao: `<p>Escolha uma eleição brasileira e formule uma pergunta institucionalista e uma comportamentalista sobre ela, indicando para cada uma a fonte de dados que usaria.</p>`,
  fonte: {
    obra: 'Gabriel Almond e Sidney Verba, The Civic Culture (1963), cap. 1; Angus Campbell e outros, The American Voter (1960), cap. 6', link: null,
    orientacao: `<p>Em Almond e Verba, localize os tipos de cultura política (paroquial, súdita, participativa). Em The American Voter, a definição de identificação partidária. Pergunte como cada conceito poderia ser medido no Brasil.</p>`,
  },
  perguntas: [
    { p: 'O que estudava o institucionalismo clássico?', r: 'Constituições, leis e órgãos do Estado, com método histórico e jurídico.' },
    { p: 'Qual a ênfase de The American Voter?', r: 'A identificação partidária como fator de voto.' },
    { p: 'O que é o ESEB?', r: 'O Estudo Eleitoral Brasileiro, pesquisa nacional pós-eleitoral realizada desde 2002.' },
  ],
  exercicios: [
    mc('The People\'s Choice (1944) é de:', ['Lazarsfeld e colegas', 'Almond e Verba', 'Downs', 'Wilson'], 0, 'Decisão de voto.'),
    mc('The Civic Culture comparou:', ['Dois países', 'Cinco países', 'Vinte países', 'Só os Estados Unidos'], 1, '1963.'),
    mc('O comportamentalismo usa sobretudo:', ['Exegese de leis', 'Pesquisas e estatística', 'Teologia', 'Biografias'], 1, 'Comportamento observável.'),
    mc('Congressional Government (1885) é de:', ['Woodrow Wilson', 'Tocqueville', 'Madison', 'Dahl'], 0, 'Institucionalismo.'),
    mc('Uma crítica ao comportamentalismo foi ignorar:', ['Estatísticas', 'Instituições e questões normativas', 'Eleitores', 'Pesquisas'], 1, 'Balanço.'),
    disc('Formule uma pergunta institucionalista e uma comportamentalista sobre uma eleição brasileira, com a fonte de dados de cada uma.', ['Pergunta institucionalista', 'Pergunta comportamentalista', 'Fontes', 'Clareza']),
  ],
  resumo: ['Institucionalismo clássico: leis e órgãos.', 'Comportamentalismo: pesquisas e estatística.', 'Lazarsfeld (1944), Campbell e outros (1960).', 'Almond e Verba (1963): cultura política.', 'ESEB no Brasil.'],
  referencias: [
    { texto: 'Woodrow Wilson, Congressional Government (1885).' },
    { texto: 'Angus Campbell, Philip Converse, Warren Miller e Donald Stokes, The American Voter (1960).' },
    { texto: 'Gabriel Almond e Sidney Verba, The Civic Culture (1963).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as duas perguntas com fontes', 'Ler os textos indicados'],
  revisao: [['Comportamentalismo', 'Comportamento medido.'], ['Identificação partidária', 'The American Voter.'], ['Cultura política', 'Almond e Verba.']],
  avancado: {
    texto: `<h3>Capital social</h3>
<p>Robert Putnam, em <em>Comunidade e democracia</em> (1993), comparou as regiões italianas e associou o melhor desempenho dos governos regionais do Norte a tradições de associativismo e confiança, que chamou de capital social ${tag('interpretacao')}. A tese retoma Tocqueville e foi criticada por explicar o presente com heranças muito antigas ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Robert Putnam, Comunidade e democracia (1993).' }],
    exercicios: [
      mc('Comunidade e democracia comparou regiões da:', ['Espanha', 'Itália', 'França', 'Alemanha'], 1, 'Putnam.'),
      mc('Capital social refere-se a:', ['Dinheiro público', 'Redes de associação e confiança', 'Impostos', 'Bancos'], 1, 'Conceito.'),
      mc('A tese de Putnam retoma:', ['Hobbes', 'Tocqueville', 'Maquiavel', 'Platão'], 1, 'Associações.'),
      disc('Proponha como medir capital social num município brasileiro, com indicadores e fontes.', ['Indicadores', 'Fontes', 'Limites', 'Clareza'])],
  },
}),

aula({
  id: 'cp3-2', titulo: 'Escolha racional e neoinstitucionalismo: incentivos, ação coletiva e regras do jogo', duracao: '150 min',
  aprendera: ['Explicar o modelo de Downs e o eleitor mediano', 'Explicar o problema da ação coletiva de Olson', 'Distinguir as três vertentes do neoinstitucionalismo', 'Aplicar esses conceitos ao Congresso brasileiro'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Por que partidos convergem ao centro em certas eleições? Por que grupos grandes têm dificuldade de se organizar? A escolha racional responde modelando atores que buscam seus objetivos sob restrições.</p>
<h3>Downs e o eleitor mediano</h3>
<p>Anthony Downs (<em>Uma teoria econômica da democracia</em>, 1957) supôs partidos que buscam votos e eleitores que escolhem o mais próximo de sua posição: em disputas entre dois partidos numa só dimensão, ambos tendem a se aproximar do eleitor mediano ${tag('fato')}. Downs também formulou o paradoxo do voto: se a chance de um voto decidir é ínfima, por que votar? ${tag('fato')}</p>
<h3>Olson e a ação coletiva</h3>
<p>Mancur Olson (<em>A lógica da ação coletiva</em>, 1965) mostrou que, num grupo grande, cada membro tende a deixar que os outros paguem pelo bem comum (o carona), e por isso grupos pequenos e concentrados se organizam com mais facilidade ${tag('fato')}.</p>
<h3>Neoinstitucionalismo</h3>
<p>Douglass North definiu as instituições como as regras do jogo de uma sociedade (1990) ${tag('fato')}. Peter Hall e Rosemary Taylor (1996) distinguiram três vertentes: histórica (trajetórias e dependência de caminho), da escolha racional (regras como incentivos) e sociológica (normas e cultura) ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Argelina Figueiredo e Fernando Limongi (<em>Executivo e Legislativo na nova ordem constitucional</em>, 1999) mostraram, com votações nominais, que os partidos na Câmara votavam de modo disciplinado e que os poderes de agenda do presidente e dos líderes organizavam o processo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Eleitor mediano', 'Eleitor que divide a distribuição de preferências ao meio.'],
    ['Paradoxo do voto', 'Problema de explicar o voto quando um voto quase nunca decide.'],
    ['Carona (free rider)', 'Quem aproveita um bem coletivo sem contribuir.'],
    ['Instituições (North)', 'Regras do jogo de uma sociedade.'],
    ['Dependência de caminho', 'Influência de escolhas passadas sobre as opções futuras.'],
  ],
  exemplos: `<p><strong>Olson na prática:</strong> uma tarifa de importação que beneficia dez fábricas e custa alguns reais por ano a milhões de consumidores. As fábricas têm forte incentivo para se organizar e pressionar; cada consumidor tem pouco a ganhar com o esforço. O resultado previsto é a vitória do grupo pequeno, mesmo sendo o custo total maior que o benefício.</p>`,
  contexto: `<p><strong>No mundo:</strong> Kenneth Arrow (1951) demonstrou que nenhum método de agregação de preferências satisfaz ao mesmo tempo um conjunto de condições razoáveis, resultado conhecido como teorema da impossibilidade ${tag('fato')}. <strong>No Brasil:</strong> as votações nominais da Câmara e do Senado são públicas, base de muitos estudos sobre disciplina partidária ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que grupos pequenos se organizam mais facilmente', tag: 'argumento',
    premissas: ['Organizar-se tem custos de tempo e dinheiro.', 'Num grupo grande, a contribuição de cada um pesa pouco e o benefício é dividido entre muitos.', 'Num grupo pequeno, cada contribuição pesa e o benefício por membro é maior.'],
    conclusao: 'Logo, grupos pequenos e concentrados tendem a se organizar mais facilmente que grupos grandes e dispersos.',
    nota: 'Olson aponta saídas: incentivos seletivos, como serviços só para membros, e coerção.',
  },
  objecoes: [
    { objecao: 'As pessoas não são calculadoras racionais; logo a escolha racional é inútil.', tag: 'debate',
      resposta: 'Os modelos simplificam de propósito e devem ser julgados por suas previsões. Muitas previsões falham quando valores, identidade e normas pesam muito, como no comparecimento eleitoral; outras acertam, como em negociações legislativas. A vertente sociológica do neoinstitucionalismo existe justamente para completar o que o cálculo não explica.' },
  ],
  aplicacao: `<p>Escolha um grupo de interesse brasileiro (setor econômico, categoria profissional, movimento social) e explique sua capacidade de organização com os conceitos de Olson.</p>`,
  fonte: {
    obra: 'Anthony Downs, Uma teoria econômica da democracia (1957), cap. 8; Mancur Olson, A lógica da ação coletiva (1965), cap. 1; Argelina Figueiredo e Fernando Limongi, Executivo e Legislativo na nova ordem constitucional (1999)', link: null,
    orientacao: `<p>Em Downs, siga o modelo espacial. Em Olson, o argumento sobre o tamanho do grupo. Em Figueiredo e Limongi, os dados de disciplina partidária. Pergunte que supostos cada autor faz.</p>`,
  },
  perguntas: [
    { p: 'O que prevê o modelo de Downs em disputas bipartidárias?', r: 'Que os partidos se aproximem do eleitor mediano.' },
    { p: 'O que é o carona em Olson?', r: 'Quem aproveita o bem coletivo sem contribuir.' },
    { p: 'Quais as três vertentes do neoinstitucionalismo?', r: 'Histórica, da escolha racional e sociológica.' },
  ],
  exercicios: [
    mc('O eleitor mediano aparece em:', ['Olson', 'Downs', 'North', 'Arrow'], 1, '1957.'),
    mc('A lógica da ação coletiva é de:', ['Olson', 'Downs', 'Dahl', 'Putnam'], 0, '1965.'),
    mc('"Instituições são as regras do jogo" é de:', ['North', 'Weber', 'Wilson', 'Almond'], 0, '1990.'),
    mc('O teorema da impossibilidade é de:', ['Arrow', 'Downs', 'Olson', 'Hall'], 0, '1951.'),
    mc('Figueiredo e Limongi encontraram na Câmara:', ['Indisciplina total', 'Votação partidária disciplinada', 'Ausência de partidos', 'Voto secreto'], 1, 'Votações nominais.'),
    disc('Explique a capacidade de organização de um grupo de interesse brasileiro com os conceitos de Olson.', ['Grupo descrito', 'Tamanho e concentração', 'Incentivos seletivos', 'Evidência']),
  ],
  resumo: ['Downs: eleitor mediano e paradoxo do voto.', 'Olson: ação coletiva e carona.', 'Arrow: impossibilidade.', 'North: regras do jogo; três vertentes.', 'Figueiredo e Limongi: disciplina partidária.'],
  referencias: [
    { texto: 'Anthony Downs, Uma teoria econômica da democracia (1957).' },
    { texto: 'Mancur Olson, A lógica da ação coletiva (1965).' },
    { texto: 'Peter Hall e Rosemary Taylor, "As três versões do neoinstitucionalismo" (1996).' },
    { texto: 'Argelina Figueiredo e Fernando Limongi, Executivo e Legislativo na nova ordem constitucional (1999).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do grupo de interesse', 'Ler os textos indicados'],
  revisao: [['Downs', 'Eleitor mediano.'], ['Olson', 'Carona.'], ['North', 'Regras do jogo.']],
  avancado: {
    texto: `<h3>Atores com poder de veto</h3>
<p>George Tsebelis (<em>Atores com poder de veto</em>, 2002) propôs que a estabilidade das políticas depende do número de atores cuja concordância é necessária para mudar o status quo e da distância entre suas posições ${tag('fato')}. Quanto mais atores e mais distantes, mais difícil a mudança ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'George Tsebelis, Atores com poder de veto (2002).' }],
    exercicios: [
      mc('Atores com poder de veto é de:', ['Tsebelis', 'Downs', 'Olson', 'Lijphart'], 0, '2002.'),
      mc('Mais atores de veto e mais distantes tornam a mudança:', ['Mais fácil', 'Mais difícil', 'Indiferente', 'Obrigatória'], 1, 'Estabilidade.'),
      mc('Um ator de veto é quem:', ['Vota sempre contra', 'Precisa concordar para mudar o status quo', 'Preside o país', 'Julga crimes'], 1, 'Definição.'),
      disc('Identifique os atores com poder de veto numa reforma constitucional no Brasil e explique o efeito sobre a facilidade de mudança.', ['Atores identificados', 'Regras citadas', 'Efeito', 'Exemplo'])],
  },
}),

aula({
  id: 'cp3-3', titulo: 'Democracia procedimental e substantiva: método, direitos e participação', duracao: '150 min',
  aprendera: ['Explicar a definição procedimental de Schumpeter', 'Explicar as concepções substantivas e deliberativas', 'Conhecer os instrumentos de democracia direta na Constituição', 'Relacionar democracia e valores segundo a doutrina social'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Democracia é apenas um método de escolher governantes ou também um conjunto de valores e direitos? A resposta muda o que se mede e o que se exige.</p>
<h3>Concepção procedimental</h3>
<p>Joseph Schumpeter (<em>Capitalismo, socialismo e democracia</em>, 1942) definiu a democracia como o arranjo institucional em que indivíduos adquirem o poder de decidir por meio de uma competição pelo voto do povo ${tag('fato')}. É uma definição mínima, fácil de observar ${tag('interpretacao')}. Dahl acrescentou condições como liberdade de expressão, fontes alternativas de informação e autonomia de associação ${tag('fato')}.</p>
<h3>Concepções substantivas e deliberativas</h3>
<p>Concepções substantivas exigem também direitos fundamentais e certa igualdade de condições para participar ${tag('fato')}. A concepção deliberativa, associada a Jürgen Habermas, valoriza a troca pública de razões antes da decisão ${tag('fato')}. Qual concepção é mais adequada é debate normativo ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>A Constituição prevê plebiscito, referendo e iniciativa popular de leis (art. 14) ${tag('fato')}. A Lei da Ficha Limpa (Lei Complementar nº 135/2010) teve origem num projeto de iniciativa popular ${tag('fato')}. O referendo de 2005 sobre a proibição do comércio de armas de fogo rejeitou a proibição ${tag('fato')}.</p>
<h3>A doutrina social</h3>
<p>A Igreja aprecia o sistema democrático enquanto assegura a participação dos cidadãos nas opções políticas e lhes garante a possibilidade de eleger e controlar os governantes, e lembra que uma democracia autêntica só é possível num Estado de direito e com base numa reta concepção da pessoa humana (<em>Centesimus annus</em>, 46) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Democracia procedimental', 'Definida pelo método de escolha competitiva dos governantes.'],
    ['Democracia substantiva', 'Inclui direitos e condições de igualdade na definição.'],
    ['Democracia deliberativa', 'Valoriza a troca pública de razões antes da decisão.'],
    ['Plebiscito', 'Consulta prévia ao povo sobre uma questão.'],
    ['Referendo', 'Consulta ao povo para confirmar ou rejeitar um ato já aprovado.'],
  ],
  exemplos: `<p><strong>Aplicando as definições:</strong> um país com eleições competitivas regulares, mas imprensa sob censura, passa no teste de Schumpeter de modo duvidoso e falha nas condições de Dahl (fontes alternativas de informação). Um país com eleições livres e direitos garantidos, mas baixíssima participação, passa nos testes procedimentais e levanta questões para as concepções substantivas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Suíça é conhecida pelo uso frequente de referendos e iniciativas populares ${tag('fato')}. <strong>No Brasil:</strong> conselhos de políticas públicas e orçamentos participativos municipais ampliaram formas de participação desde os anos 1990 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a definição procedimental precisa de condições mínimas', tag: 'argumento',
    premissas: ['A competição pelo voto só é real se os eleitores puderem conhecer as alternativas.', 'Conhecer as alternativas exige liberdade de expressão, de imprensa e de associação.', 'Sem essas liberdades, a eleição apenas encena uma escolha.'],
    conclusao: 'Logo, mesmo uma definição procedimental de democracia exige direitos mínimos.',
    nota: 'É o caminho de Dahl: partir do procedimento e mostrar os direitos que ele pressupõe.',
  },
  objecoes: [
    { objecao: 'Se a maioria decidiu, a decisão é automaticamente justa.', tag: 'debate',
      resposta: 'A regra da maioria é um procedimento legítimo de decisão, mas não cria a justiça: maiorias podem decidir violar direitos, como Tocqueville advertiu. Por isso as constituições protegem direitos contra maiorias ocasionais, e a doutrina social lembra que a democracia depende de valores que ela mesma não produz.' },
  ],
  aplicacao: `<p>Escolha um instrumento de participação usado no Brasil (referendo de 2005, iniciativa popular da Ficha Limpa, orçamento participativo) e avalie-o com as concepções procedimental e deliberativa.</p>`,
  fonte: {
    obra: 'Joseph Schumpeter, Capitalismo, socialismo e democracia (1942), cap. 22; São João Paulo II, Centesimus annus (1991), n. 46', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_01051991_centesimus-annus.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Schumpeter, localize a definição de método democrático. Em Centesimus annus, as condições que a Igreja aponta para uma democracia autêntica. Compare: uma é definição descritiva; a outra, juízo moral.</p>`,
  },
  perguntas: [
    { p: 'Como Schumpeter define a democracia?', r: 'Como arranjo em que se adquire o poder de decidir por competição pelo voto do povo.' },
    { p: 'Qual a diferença entre plebiscito e referendo?', r: 'O plebiscito é prévio ao ato; o referendo confirma ou rejeita um ato já aprovado.' },
    { p: 'Que lei teve origem num projeto de iniciativa popular?', r: 'A Lei da Ficha Limpa (Lei Complementar nº 135/2010).' },
  ],
  exercicios: [
    mc('Capitalismo, socialismo e democracia é de:', ['Schumpeter', 'Habermas', 'Dahl', 'Downs'], 0, '1942.'),
    mc('A concepção deliberativa está associada a:', ['Hobbes', 'Habermas', 'Olson', 'Duverger'], 1, 'Troca de razões.'),
    mc('Os instrumentos de democracia direta estão no artigo:', ['2º', '14', '60', '77'], 1, 'CF 1988.'),
    mc('O referendo de 2005 tratou:', ['Do parlamentarismo', 'Da proibição do comércio de armas', 'Do voto obrigatório', 'Da monarquia'], 1, 'Proibição rejeitada.'),
    mc('Para a Igreja, a democracia autêntica exige:', ['Só eleições', 'Estado de direito e reta concepção da pessoa', 'Partido único', 'Voto censitário'], 1, 'CA 46.'),
    disc('Avalie um instrumento de participação brasileiro com as concepções procedimental e deliberativa.', ['Instrumento descrito', 'Avaliação procedimental', 'Avaliação deliberativa', 'Conclusão']),
  ],
  resumo: ['Schumpeter: competição pelo voto.', 'Dahl: condições mínimas.', 'Substantiva e deliberativa (Habermas).', 'CF art. 14; Ficha Limpa; referendo de 2005.', 'CA 46: Estado de direito e pessoa.'],
  referencias: [
    { texto: 'Joseph Schumpeter, Capitalismo, socialismo e democracia (1942).' },
    { texto: 'Robert Dahl, Poliarquia (1971).' },
    { texto: 'São João Paulo II, Centesimus annus (1991).', livro: 'jp2-centesimus' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação do instrumento de participação', 'Ler os textos indicados'],
  revisao: [['Schumpeter', 'Método.'], ['Plebiscito e referendo', 'Antes e depois.'], ['CA 46', 'Democracia e pessoa.']],
  avancado: {
    texto: `<h3>Minipúblicos e sorteio</h3>
<p>Assembleias de cidadãos sorteados, que estudam um tema e fazem recomendações, foram usadas na Irlanda antes de referendos constitucionais na década de 2010 ${tag('fato')}. Defensores veem nelas deliberação de qualidade; críticos questionam sua representatividade e legitimidade para decidir ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Literatura sobre democracia deliberativa e minipúblicos.' }],
    exercicios: [
      mc('Assembleias de cidadãos sorteados foram usadas na:', ['Irlanda', 'China', 'Arábia Saudita', 'Coreia do Norte'], 0, 'Década de 2010.'),
      mc('Os membros dessas assembleias são escolhidos por:', ['Eleição', 'Sorteio', 'Indicação do governo', 'Concurso'], 1, 'Minipúblicos.'),
      mc('Uma crítica aos minipúblicos é:', ['Excesso de votos', 'Legitimidade para decidir', 'Custo zero', 'Falta de debate'], 1, 'Debate.'),
      disc('Avalie a adoção de uma assembleia de cidadãos sorteados num município brasileiro, com vantagens, riscos e desenho proposto.', ['Vantagens', 'Riscos', 'Desenho', 'Conclusão'])],
  },
}),

aula({
  id: 'cp3-4', titulo: 'Presidencialismo e parlamentarismo; Estado, sociedade e subsidiariedade', duracao: '150 min',
  aprendera: ['Distinguir presidencialismo, parlamentarismo e semipresidencialismo', 'Expor o argumento de Linz e as respostas de Mainwaring e Shugart', 'Conhecer as experiências brasileiras de 1961, 1963 e 1993', 'Explicar o princípio de subsidiariedade'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Que forma de governo funciona melhor? E que lugar cabe ao Estado diante das famílias, associações e municípios?</p>
<h3>Formas de governo</h3>
<p>No presidencialismo, o chefe de governo é eleito separadamente e tem mandato fixo; no parlamentarismo, o governo depende da confiança da maioria do parlamento e pode cair por moção de desconfiança; no semipresidencialismo, um presidente eleito convive com um primeiro-ministro responsável perante o parlamento ${tag('fato')}.</p>
<h3>O debate</h3>
<p>Juan Linz ("Os perigos do presidencialismo", 1990) argumentou que o mandato rígido e a dupla legitimidade de presidente e Congresso tornam crises mais difíceis de resolver ${tag('interpretacao')}. Scott Mainwaring e Matthew Shugart (1997) responderam que o desempenho depende dos poderes constitucionais do presidente e do sistema partidário ${tag('interpretacao')}. É debate empírico ainda aberto ${tag('debate')}.</p>
<h3>No Brasil</h3>
<p>Após a renúncia de Jânio Quadros, em 1961, adotou-se o parlamentarismo; o plebiscito de 1963 restabeleceu o presidencialismo; o plebiscito de 1993 manteve a república presidencialista ${tag('fato')}. Sérgio Abranches (1988) chamou de presidencialismo de coalizão a combinação de presidencialismo, multipartidarismo e federalismo ${tag('fato')}.</p>
<h3>Subsidiariedade</h3>
<p>Pio XI, na <em>Quadragesimo anno</em> (1931, n. 79), ensinou que é injusto transferir para uma sociedade maior o que sociedades menores podem fazer ${tag('doutrina')}. O Catecismo reafirma que uma comunidade superior não deve interferir na vida de uma inferior, privando-a de suas competências, mas apoiá-la em caso de necessidade (CIC 1883) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Presidencialismo', 'Chefe de governo eleito separadamente, com mandato fixo.'],
    ['Parlamentarismo', 'Governo dependente da confiança do parlamento.'],
    ['Moção de desconfiança', 'Votação parlamentar que derruba o governo.'],
    ['Presidencialismo de coalizão', 'Governo presidencial sustentado por coalizão multipartidária.'],
    ['Subsidiariedade', 'O que a comunidade menor pode fazer não deve ser absorvido pela maior.'],
  ],
  exemplos: `<p><strong>Uma crise em dois sistemas:</strong> um governo perde o apoio da maioria. No parlamentarismo, o parlamento aprova uma moção de desconfiança e forma outro governo, ou convocam-se eleições. No presidencialismo, o presidente continua com mandato fixo e precisa negociar uma nova maioria; a saída antecipada exige processo excepcional, como o impeachment por crime de responsabilidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> a maioria das democracias europeias é parlamentarista, e a maioria das latino-americanas, presidencialista ${tag('fato')}. <strong>No Brasil:</strong> os municípios são entes federativos autônomos desde a Constituição de 1988, caso pouco comum entre as federações ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a subsidiariedade favorece a liberdade e a eficácia', tag: 'argumento',
    premissas: ['Quem está mais perto de um problema tende a conhecê-lo melhor.', 'Comunidades menores exercem responsabilidade quando decidem o que lhes cabe.', 'A absorção de suas funções pelo Estado reduz essa responsabilidade e o conhecimento local.'],
    conclusao: 'Logo, deixar às comunidades menores o que elas podem fazer favorece a liberdade e, muitas vezes, a eficácia.',
    nota: 'A subsidiariedade também exige que a comunidade maior ajude quando a menor não consegue: não é abandono.',
  },
  objecoes: [
    { objecao: 'Subsidiariedade é só uma desculpa para o Estado não fazer nada.', tag: 'debate',
      resposta: 'O princípio tem duas faces: não substituir as comunidades menores e apoiá-las quando necessário (CIC 1883; Compêndio 186). Ele é compatível com políticas públicas fortes, desde que fortaleçam famílias, associações e municípios em vez de anulá-los.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio sobre presidencialismo ou parlamentarismo para o Brasil, apresentando os argumentos dos dois lados com dados e distinguindo evidência empírica, juízo de valor e doutrina.</p>`,
  fonte: {
    obra: 'Juan Linz, "Os perigos do presidencialismo" (1990); Sérgio Abranches, "Presidencialismo de coalizão" (1988); Pio XI, Quadragesimo anno (1931), n. 79', link: { url: 'https://www.vatican.va/content/pius-xi/pt/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Linz, identifique os dois problemas centrais do presidencialismo. Em Abranches, a definição de presidencialismo de coalizão. Na Quadragesimo anno, o enunciado da subsidiariedade.</p>`,
  },
  perguntas: [
    { p: 'Quais os problemas do presidencialismo segundo Linz?', r: 'Mandato rígido e dupla legitimidade.' },
    { p: 'O que aconteceu em 1961 e 1963 no Brasil?', r: 'Adotou-se o parlamentarismo em 1961, e o plebiscito de 1963 restabeleceu o presidencialismo.' },
    { p: 'O que diz a subsidiariedade?', r: 'Que a comunidade maior não deve absorver o que a menor pode fazer, mas apoiá-la quando necessário.' },
  ],
  exercicios: [
    mc('Moção de desconfiança é típica do:', ['Presidencialismo', 'Parlamentarismo', 'Absolutismo', 'Feudalismo'], 1, 'Confiança do parlamento.'),
    mc('"Os perigos do presidencialismo" é de:', ['Linz', 'Abranches', 'Downs', 'Dahl'], 0, '1990.'),
    mc('O plebiscito que restabeleceu o presidencialismo foi em:', ['1961', '1963', '1988', '1993'], 1, 'Após o parlamentarismo de 1961.'),
    mc('A subsidiariedade foi enunciada na:', ['Rerum novarum', 'Quadragesimo anno', 'Laudato si', 'Humanae vitae'], 1, 'N. 79.'),
    mc('Presidencialismo de coalizão é expressão de:', ['Linz', 'Sérgio Abranches', 'Faoro', 'Tocqueville'], 1, '1988.'),
    disc('Escreva o ensaio sobre presidencialismo ou parlamentarismo para o Brasil, com os dois lados, dados e distinção entre evidência, valor e doutrina.', ['Dois lados', 'Dados com fonte', 'Distinções', 'Conclusão fundamentada']),
  ],
  resumo: ['Presidencialismo, parlamentarismo, semipresidencialismo.', 'Linz contra; Mainwaring e Shugart: depende.', '1961, 1963, 1993.', 'Presidencialismo de coalizão.', 'Subsidiariedade: QA 79, CIC 1883.'],
  referencias: [
    { texto: 'Juan Linz, "Os perigos do presidencialismo" (1990).' },
    { texto: 'Scott Mainwaring e Matthew Shugart (orgs.), Presidentialism and Democracy in Latin America (1997).' },
    { texto: 'Sérgio Abranches, "Presidencialismo de coalizão: o dilema institucional brasileiro" (1988).' },
    { texto: 'Catecismo da Igreja Católica (1992), § 1883.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler os textos indicados'],
  revisao: [['Linz', 'Mandato rígido.'], ['1993', 'Presidencialismo mantido.'], ['Subsidiariedade', 'QA 79.']],
  avancado: {
    texto: `<h3>Impeachment no Brasil</h3>
<p>A Constituição prevê o processo por crime de responsabilidade: a Câmara autoriza por dois terços e o Senado julga, presidido pelo presidente do Supremo (arts. 51, 52 e 86) ${tag('fato')}. Os processos de 1992 e de 2016 são estudados pela ciência política como modos de resolver crises no presidencialismo; seu uso e seus fundamentos são objeto de debate ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Constituição da República Federativa do Brasil (1988), arts. 51, 52, 85 e 86.' }],
    exercicios: [
      mc('A autorização para o processo de impeachment na Câmara exige:', ['Maioria simples', 'Dois terços', 'Unanimidade', 'Um terço'], 1, 'Art. 51.'),
      mc('O julgamento do presidente por crime de responsabilidade cabe ao:', ['STF', 'Senado', 'TSE', 'Câmara'], 1, 'Art. 52.'),
      mc('No julgamento, o Senado é presidido pelo:', ['Presidente do Senado', 'Presidente do STF', 'Vice-presidente', 'Procurador-geral'], 1, 'Art. 52, parágrafo único.'),
      disc('Compare o impeachment com a moção de desconfiança como modos de resolver crises de governo.', ['Impeachment', 'Moção de desconfiança', 'Diferenças', 'Avaliação'])],
  },
}),

avaliacao('cp3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as escolas da ciência política e os grandes debates do módulo, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo das abordagens e o ensaio sobre formas de governo.</li><li>Revise a distinção entre evidência, valor e doutrina.</li></ul>`,
[
  disc('Explique um fenômeno político brasileiro (por exemplo, a formação de coalizões no Congresso) com duas abordagens diferentes e diga o que cada uma explica melhor.', ['Fenômeno descrito', 'Primeira abordagem', 'Segunda abordagem', 'Comparação']),
  disc('Defenda uma concepção de democracia e responda à melhor objeção contra ela, distinguindo argumentos empíricos, normativos e doutrinais.', ['Concepção defendida', 'Objeção forte', 'Resposta', 'Distinção dos planos']),
]),
];
