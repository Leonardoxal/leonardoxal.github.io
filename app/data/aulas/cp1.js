// Ciência Política I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Ciência Política).
// Poder, autoridade e legitimidade; Estado, regime, constituição, partidos e sistemas eleitorais;
// método comparativo, dados eleitorais e pesquisas; medidas de democracia e neutralidade do pesquisador.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cp1-1', titulo: 'O que é a ciência política: poder, autoridade e legitimidade', duracao: '120 min',
  aprendera: ['Definir poder, autoridade e legitimidade', 'Explicar a tese aristotélica do homem como animal político', 'Distinguir a ciência política empírica da filosofia política', 'Separar descrição, avaliação e proposta num texto político'],
  prereq: ['Degrau de lógica', 'Filosofia política (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que obedecemos a leis que não escrevemos? Quem manda, por que manda e com que direito? A ciência política estuda como o poder é obtido, exercido e limitado.</p>
<h3>O animal político</h3>
<p>Aristóteles afirma, na <em>Política</em> (livro I, cap. 2), que o homem é por natureza um animal político, porque só na comunidade política alcança a vida boa ${tag('fato')}. Para ele, a política é ciência prática: pergunta pelo bem comum e pela melhor ordem da cidade ${tag('interpretacao')}.</p>
<h3>Poder, autoridade, legitimidade</h3>
<ul>
<li><strong>Poder</strong>: Robert Dahl o definiu (1957) como a capacidade de A levar B a fazer algo que B de outro modo não faria ${tag('fato')}.</li>
<li><strong>Autoridade</strong>: poder reconhecido como tendo direito de mandar ${tag('fato')}.</li>
<li><strong>Legitimidade</strong>: a razão pela qual esse direito é aceito. Max Weber distinguiu três tipos de dominação legítima: tradicional, carismática e racional-legal ${tag('fato')}.</li>
</ul>
<p>Weber definiu o Estado como a comunidade humana que reivindica, com êxito, o monopólio do uso legítimo da força física num território (<em>A política como vocação</em>, 1919) ${tag('fato')}.</p>
<h3>Ciência empírica e filosofia</h3>
<p>A ciência política empírica descreve e explica como as instituições funcionam; a filosofia política pergunta como deveriam funcionar ${tag('argumento')}. As duas se completam, mas não se confundem: um dado sobre votos não decide, sozinho, o que é justo ${tag('argumento')}.</p>
<h3>A doutrina da Igreja</h3>
<p>O Catecismo ensina que a autoridade é exigida pela ordem moral, que a escolha do regime e dos governantes cabe à livre vontade dos cidadãos e que a autoridade só é exercida legitimamente quando busca o bem comum (CIC 1899–1903) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Poder', 'Capacidade de levar outros a agir de certo modo.'],
    ['Autoridade', 'Poder reconhecido como tendo direito de mandar.'],
    ['Legitimidade', 'Fundamento pelo qual a autoridade é aceita como justa.'],
    ['Dominação racional-legal', 'Tipo weberiano baseado em regras impessoais e cargos.'],
    ['Bem comum', 'Conjunto das condições que permitem às pessoas e grupos alcançar sua perfeição.'],
  ],
  exemplos: `<p><strong>Três tipos de legitimidade:</strong> um rei obedecido porque "sempre foi assim" (tradicional); um líder seguido pelo prestígio pessoal (carismática); um prefeito obedecido porque foi eleito segundo a lei e exerce um cargo com limites definidos (racional-legal). Regimes reais misturam os três tipos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ciência política tornou-se disciplina universitária autônoma entre o fim do século XIX e o século XX, sobretudo nos Estados Unidos e na Europa ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 afirma, no artigo 1º, que todo o poder emana do povo, exercido por representantes eleitos ou diretamente ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o poder precisa de legitimidade para durar', tag: 'argumento',
    premissas: ['Governar só pela força exige vigilância e coerção constantes.', 'A coerção constante tem custo alto e gera resistência.', 'Quando os governados reconhecem o direito de mandar, obedecem sem coerção permanente.'],
    conclusao: 'Logo, todo poder que pretende durar busca alguma forma de legitimidade.',
    nota: 'Buscar legitimidade não é o mesmo que ser justo: regimes injustos também a reivindicam. A avaliação moral é outra pergunta.',
  },
  objecoes: [
    { objecao: 'A política é só luta pelo poder; falar em bem comum é ingenuidade.', tag: 'debate',
      resposta: 'A luta pelo poder é real e a ciência política a estuda. Mas os próprios atores justificam seus atos em nome de algum bem, e os cidadãos julgam os governos por resultados para todos. Descrever a disputa não elimina a pergunta sobre o fim da política; apenas a separa da descrição.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escolha três notícias políticas recentes e, em cada uma, marque o que é descrição de fato, o que é avaliação e o que é proposta, justificando.</p>`,
  fonte: {
    obra: 'Aristóteles, Política, livro I, cap. 2; Max Weber, A política como vocação (1919)', link: null,
    orientacao: `<p>Em Aristóteles, siga o argumento de que a cidade existe por natureza. Em Weber, localize a definição de Estado e os três tipos de dominação legítima. Compare: um pergunta pelo fim, o outro descreve o meio específico do Estado.</p>`,
  },
  perguntas: [
    { p: 'Como Weber definiu o Estado?', r: 'Como a comunidade que reivindica com êxito o monopólio do uso legítimo da força física num território.' },
    { p: 'Quais os três tipos de dominação legítima de Weber?', r: 'Tradicional, carismática e racional-legal.' },
    { p: 'Por que Aristóteles chama o homem de animal político?', r: 'Porque só na comunidade política alcança a vida boa.' },
  ],
  exercicios: [
    mc('A tese do homem como animal político está em:', ['Hobbes, Leviatã', 'Aristóteles, Política', 'Maquiavel, O Príncipe', 'Locke, Dois tratados'], 1, 'Livro I, cap. 2.'),
    mc('Um prefeito obedecido porque foi eleito segundo a lei exemplifica a dominação:', ['Tradicional', 'Carismática', 'Racional-legal', 'Teocrática'], 2, 'Weber.'),
    mc('A definição de poder como levar B a fazer o que não faria é de:', ['Weber', 'Dahl', 'Platão', 'Tocqueville'], 1, '1957.'),
    mc('"O governo deve reduzir impostos" é uma afirmação:', ['Descritiva', 'De proposta', 'Estatística', 'Factual'], 1, 'Diz o que fazer.'),
    mc('Segundo o Catecismo, a escolha do regime político cabe:', ['À Igreja', 'À livre vontade dos cidadãos', 'Ao exército', 'Aos economistas'], 1, 'CIC 1901.'),
    disc('Entregue a análise das três notícias, separando descrição, avaliação e proposta, com justificativa.', ['Três notícias', 'Classificação correta', 'Justificativa', 'Clareza']),
  ],
  resumo: ['Animal político (Aristóteles).', 'Poder, autoridade, legitimidade.', 'Weber: Estado e três dominações.', 'Ciência empírica e filosofia política.', 'CIC 1899–1903; CF art. 1º.'],
  referencias: [
    { texto: 'Aristóteles, Política.', livro: 'aristoteles-politica' },
    { texto: 'Max Weber, A política como vocação (1919).' },
    { texto: 'Robert Dahl, "The Concept of Power" (1957).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1897–1904.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise das três notícias', 'Ler os textos indicados'],
  revisao: [['Weber', 'Monopólio da força legítima.'], ['Dahl', 'Poder como relação.'], ['Legitimidade', 'Direito de mandar aceito.']],
  avancado: {
    texto: `<h3>Poder em três dimensões</h3>
<p>Steven Lukes (<em>Power: A Radical View</em>, 1974) propôs que o poder tem três dimensões: vencer decisões abertas, impedir que certos temas cheguem à decisão e moldar as próprias preferências das pessoas ${tag('fato')}. A terceira dimensão é difícil de medir e objeto de debate ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Steven Lukes, Power: A Radical View (1974).' }],
    exercicios: [
      mc('As três dimensões do poder foram propostas por:', ['Lukes', 'Weber', 'Aristóteles', 'Hobbes'], 0, '1974.'),
      mc('Impedir que um tema chegue à votação é a dimensão:', ['Primeira', 'Segunda', 'Terceira', 'Nenhuma'], 1, 'Controle da agenda.'),
      mc('A terceira dimensão é difícil de medir porque envolve:', ['Votos', 'Preferências moldadas', 'Leis escritas', 'Impostos'], 1, 'Debate.'),
      disc('Dê um exemplo de cada dimensão do poder na política brasileira, com fonte.', ['Primeira dimensão', 'Segunda dimensão', 'Terceira dimensão', 'Fontes'])],
  },
}),

aula({
  id: 'cp1-2', titulo: 'Vocabulário político: Estado, regime, constituição, partidos e sistemas eleitorais', duracao: '150 min',
  aprendera: ['Distinguir Estado, nação, governo e regime', 'Explicar soberania, constituição e separação de poderes', 'Distinguir sistemas eleitorais majoritários e proporcionais', 'Calcular o quociente eleitoral'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>"O governo caiu", "o Estado faliu", "o regime mudou": as três frases dizem coisas diferentes. Sem vocabulário preciso, a análise política vira confusão.</p>
<h3>Estado, nação, governo, regime</h3>
<ul>
<li><strong>Estado</strong>: organização política soberana num território, com povo e instituições permanentes ${tag('fato')}.</li>
<li><strong>Nação</strong>: comunidade de história, língua ou cultura com consciência de unidade ${tag('fato')}.</li>
<li><strong>Governo</strong>: as pessoas e órgãos que dirigem o Estado num período ${tag('fato')}.</li>
<li><strong>Regime</strong>: as regras sobre quem governa e como (democracia, autocracia, monarquia constitucional) ${tag('fato')}.</li>
</ul>
<h3>Soberania, constituição, separação de poderes</h3>
<p>Soberania é o poder supremo no território. A constituição é a lei fundamental que organiza o Estado e garante direitos ${tag('fato')}. A Constituição de 1988 estabelece, no artigo 2º, os Poderes Legislativo, Executivo e Judiciário, independentes e harmônicos entre si, e, no artigo 18, a federação de União, estados, Distrito Federal e municípios autônomos ${tag('fato')}.</p>
<h3>Sistemas eleitorais no Brasil</h3>
<p>Presidente, governadores e prefeitos de municípios com mais de 200 mil eleitores são eleitos por maioria absoluta, com segundo turno se necessário; senadores, por maioria simples; deputados e vereadores, pelo sistema proporcional de lista aberta ${tag('fato')}. No proporcional, o quociente eleitoral é o número de votos válidos dividido pelo número de cadeiras ${tag('fato')}.</p>
<h3>Partidos</h3>
<p>Maurice Duverger (<em>Os partidos políticos</em>, 1951) observou que a eleição por maioria simples em turno único tende a favorecer o bipartidarismo, e a representação proporcional, o multipartidarismo ${tag('interpretacao')}. É uma tendência, não uma lei sem exceções ${tag('debate')}.</p>`,
  vocabulario: [
    ['Estado', 'Organização política soberana num território.'],
    ['Regime', 'Regras sobre quem governa e como.'],
    ['Federação', 'Estado com entes autônomos (no Brasil, União, estados, DF e municípios).'],
    ['Sistema proporcional', 'Cadeiras distribuídas conforme a votação de partidos ou federações.'],
    ['Quociente eleitoral', 'Votos válidos divididos pelo número de cadeiras.'],
  ],
  exemplos: `<p><strong>Calculando cadeiras:</strong> uma câmara de 10 vagas teve 100.000 votos válidos: quociente eleitoral = 10.000. Um partido com 35.000 votos obtém 3 cadeiras pelo quociente (35.000 ÷ 10.000 = 3,5); a fração disputa as sobras pelas regras do Código Eleitoral. Dentro da lista do partido, entram os candidatos mais votados (lista aberta).</p>`,
  contexto: `<p><strong>No mundo:</strong> há países presidencialistas (Estados Unidos), parlamentaristas (Reino Unido, Alemanha) e semipresidencialistas (França) ${tag('fato')}. <strong>No Brasil:</strong> a república presidencialista e federativa foi mantida pelo plebiscito de 1993 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lista aberta personaliza a disputa eleitoral', tag: 'argumento',
    premissas: ['Na lista aberta, a ordem de entrada é definida pelos votos de cada candidato.', 'Candidatos do mesmo partido disputam entre si os votos que definem essa ordem.', 'Por isso cada candidato tem incentivo a construir reputação pessoal, além da partidária.'],
    conclusao: 'Logo, a lista aberta tende a personalizar as campanhas.',
    nota: 'O argumento é sobre incentivos; seu peso efetivo deve ser verificado com dados.',
  },
  objecoes: [
    { objecao: 'Se votei num candidato e ele não foi eleito, meu voto foi perdido.', tag: 'debate',
      resposta: 'No sistema proporcional, o voto no candidato conta também para o partido ou federação e ajuda a definir quantas cadeiras a legenda obtém. Pode eleger outro candidato da mesma lista. Avaliar se isso é bom ou ruim é questão de desenho institucional, debatida com argumentos dos dois lados.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um glossário de 20 termos políticos com um exemplo das instituições brasileiras para cada um, citando o artigo da Constituição quando houver.</p>`,
  fonte: {
    obra: 'Constituição da República Federativa do Brasil (1988), arts. 1º, 2º, 14, 18, 28, 29, 45, 46 e 77; Código Eleitoral (Lei nº 4.737/1965), art. 106', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Constituição, localize a separação de poderes, a federação e as regras de eleição de cada cargo. No Código Eleitoral, a definição do quociente eleitoral. Use-os no glossário.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre Estado e governo?', r: 'O Estado é a organização permanente; o governo, quem a dirige num período.' },
    { p: 'Como são eleitos os deputados no Brasil?', r: 'Pelo sistema proporcional de lista aberta.' },
    { p: 'O que observou Duverger?', r: 'Que a maioria simples em turno único tende ao bipartidarismo e a proporcional ao multipartidarismo.' },
  ],
  exercicios: [
    mc('Com 60.000 votos válidos e 6 cadeiras, o quociente eleitoral é:', ['6.000', '10.000', '60.000', '360.000'], 1, '60.000 ÷ 6.'),
    mc('Senadores são eleitos no Brasil por:', ['Sistema proporcional', 'Maioria simples', 'Sorteio', 'Indicação'], 1, 'Majoritário.'),
    mc('A separação dos Poderes está no artigo:', ['1º', '2º', '5º', '18'], 1, 'Constituição de 1988.'),
    mc('O plebiscito que manteve o presidencialismo foi em:', ['1988', '1993', '2002', '2016'], 1, 'República presidencialista.'),
    mc('"O regime mudou" refere-se:', ['Às pessoas no governo', 'Às regras sobre quem governa e como', 'À nação', 'Ao território'], 1, 'Regime.'),
    disc('Apresente o glossário de 20 termos com exemplos brasileiros e artigos da Constituição.', ['20 termos', 'Definições corretas', 'Exemplos brasileiros', 'Artigos citados']),
  ],
  resumo: ['Estado, nação, governo, regime.', 'Soberania e constituição; CF arts. 2º e 18.', 'Majoritário e proporcional de lista aberta.', 'Quociente eleitoral.', 'Duverger: tendência.'],
  referencias: [
    { texto: 'Constituição da República Federativa do Brasil (1988).' },
    { texto: 'Código Eleitoral (Lei nº 4.737, de 1965).' },
    { texto: 'Maurice Duverger, Os partidos políticos (1951).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os artigos indicados'],
  revisao: [['Quociente eleitoral', 'Válidos ÷ cadeiras.'], ['Lista aberta', 'Mais votados da legenda.'], ['Regime', 'Regras do poder.']],
  avancado: {
    texto: `<h3>Sistemas mistos</h3>
<p>Alguns países combinam distritos majoritários e lista proporcional. Na Alemanha, o eleitor tem dois votos: um para o candidato do distrito e outro para a lista do partido, que define a proporção das cadeiras ${tag('fato')}. Propostas de adotar sistemas distritais ou mistos no Brasil aparecem periodicamente no debate de reforma política ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Arend Lijphart, Modelos de democracia (1999).' }],
    exercicios: [
      mc('No sistema alemão, o eleitor tem:', ['Um voto', 'Dois votos', 'Três votos', 'Nenhum'], 1, 'Distrito e lista.'),
      mc('No sistema misto alemão, a proporção das cadeiras é definida pelo voto:', ['No distrito', 'Na lista', 'No sorteio', 'No Senado'], 1, 'Proporcional.'),
      mc('Propostas de voto distrital no Brasil são:', ['Consenso', 'Debate de reforma política', 'Proibidas', 'Doutrina'], 1, 'Debate.'),
      disc('Compare a lista aberta brasileira e o sistema misto alemão em dois critérios.', ['Descrição correta', 'Dois critérios', 'Vantagens e desvantagens', 'Conclusão proporcional'])],
  },
}),

aula({
  id: 'cp1-3', titulo: 'Métodos da ciência política: comparação, estudo de caso, dados eleitorais e pesquisas de opinião', duracao: '150 min',
  aprendera: ['Aplicar o método comparativo', 'Saber quando usar um estudo de caso', 'Ler dados eleitorais oficiais', 'Interpretar a margem de erro de uma pesquisa de opinião'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Em política não se pode repetir uma eleição em laboratório. Como testar explicações sem experimentos?</p>
<h3>Comparação</h3>
<p>John Stuart Mill (<em>Sistema de lógica</em>, 1843) descreveu o método da concordância (casos diferentes com o mesmo resultado: o que têm em comum?) e o da diferença (casos parecidos com resultados diferentes: em que diferem?) ${tag('fato')}. A ciência política comparada usa essa lógica com países, estados ou municípios ${tag('fato')}.</p>
<h3>Estudo de caso</h3>
<p>Examina um caso em profundidade, com documentos, entrevistas e dados, para entender processos ${tag('fato')}. Serve para gerar hipóteses e mostrar mecanismos, mas generalizar a partir de um caso exige cuidado ${tag('argumento')}.</p>
<h3>Dados eleitorais</h3>
<p>O Tribunal Superior Eleitoral publica resultados por município, zona e seção, além de dados de candidaturas e de comparecimento ${tag('fato')}. No Brasil, o voto é obrigatório para alfabetizados de 18 a 70 anos e facultativo para analfabetos, maiores de 70 e jovens de 16 e 17 anos (CF, art. 14) ${tag('fato')}.</p>
<h3>Pesquisas de opinião</h3>
<p>Uma amostra aleatória estima a opinião da população com uma margem de erro: com 1.000 entrevistas, cerca de 3 pontos percentuais para mais ou para menos, com 95% de confiança, se a amostra for bem feita ${tag('fato')}. Pesquisas medem um momento, não preveem o resultado com certeza ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Método da diferença', 'Comparar casos parecidos com resultados diferentes.'],
    ['Estudo de caso', 'Exame aprofundado de um caso.'],
    ['Amostra aleatória', 'Subconjunto escolhido de modo que todos tenham chance conhecida de ser incluídos.'],
    ['Margem de erro', 'Faixa provável de variação da estimativa.'],
    ['Abstenção', 'Proporção de eleitores aptos que não compareceram.'],
  ],
  exemplos: `<p><strong>Lendo uma pesquisa:</strong> candidato A tem 42% e B tem 39%, margem de 3 pontos. A pode estar entre 39% e 45%; B, entre 36% e 42%. As faixas se sobrepõem: a pesquisa indica empate técnico, e não vitória de A.</p>`,
  contexto: `<p><strong>No mundo:</strong> o fracasso da pesquisa da revista <em>Literary Digest</em> em 1936 nos Estados Unidos, com amostra enorme mas enviesada, tornou-se exemplo clássico de que tamanho não substitui representatividade ${tag('fato')}. <strong>No Brasil:</strong> pesquisas eleitorais devem ser registradas na Justiça Eleitoral antes da divulgação ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que comparar casos parecidos isola melhor uma causa', tag: 'argumento',
    premissas: ['Resultados políticos dependem de muitos fatores ao mesmo tempo.', 'Se dois casos são parecidos em quase tudo, essas semelhanças não explicam a diferença de resultado.', 'Restam como candidatas as poucas características em que diferem.'],
    conclusao: 'Logo, comparar casos parecidos com resultados diferentes reduz as explicações possíveis.',
    nota: 'Casos reais nunca são idênticos; a comparação reduz, mas não elimina, outras explicações.',
  },
  objecoes: [
    { objecao: 'Pesquisas erram, logo não servem para nada.', tag: 'debate',
      resposta: 'Pesquisas bem feitas acertam dentro da margem de erro na maior parte das vezes; erros acontecem por amostras mal desenhadas, mudança de opinião de última hora ou recusa de certos grupos a responder. A crítica correta é exigir método transparente, não descartar a medição.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: com dados do TSE, compare o comparecimento ou o resultado de duas eleições municipais (dois municípios ou dois anos) e proponha duas hipóteses para a diferença, dizendo que dado testaria cada uma.</p>`,
  fonte: {
    obra: 'John Stuart Mill, Sistema de lógica (1843), livro III, cap. 8; Tribunal Superior Eleitoral, estatísticas eleitorais', link: { url: 'https://www.tse.jus.br', rotulo: 'Tribunal Superior Eleitoral' },
    orientacao: `<p>Em Mill, leia os métodos da concordância e da diferença. No TSE, localize os resultados e o comparecimento de um município. Use ambos no exercício.</p>`,
  },
  perguntas: [
    { p: 'O que é o método da diferença?', r: 'Comparar casos parecidos com resultados diferentes para achar a causa.' },
    { p: 'Para que serve um estudo de caso?', r: 'Para entender processos em profundidade e gerar hipóteses.' },
    { p: 'O que é empate técnico?', r: 'Quando as faixas da margem de erro de dois candidatos se sobrepõem.' },
  ],
  exercicios: [
    mc('Os métodos da concordância e da diferença foram descritos por:', ['Weber', 'Mill', 'Dahl', 'Duverger'], 1, '1843.'),
    mc('A com 48% e B com 44%, margem de 2 pontos, indica:', ['Empate técnico', 'A à frente fora da margem', 'B à frente', 'Nada'], 1, '46–50 contra 42–46.'),
    mc('O caso Literary Digest (1936) mostra que:', ['Amostras grandes sempre acertam', 'Tamanho não substitui representatividade', 'Pesquisas são proibidas', 'Votos são secretos'], 1, 'Viés.'),
    mc('O voto no Brasil é facultativo para:', ['Quem tem 30 anos', 'Maiores de 70 anos', 'Servidores', 'Todos'], 1, 'CF, art. 14.'),
    mc('Dados oficiais de resultados eleitorais no Brasil são publicados pelo:', ['IBGE', 'TSE', 'STF', 'Banco Central'], 1, 'Justiça Eleitoral.'),
    disc('Entregue a comparação de duas eleições com dados do TSE, duas hipóteses e o dado que testaria cada uma.', ['Dados com fonte', 'Comparação correta', 'Duas hipóteses', 'Testes propostos']),
  ],
  resumo: ['Mill: concordância e diferença.', 'Estudo de caso: profundidade.', 'TSE: dados abertos.', 'Margem de erro e empate técnico.', 'Voto obrigatório e facultativo (CF, art. 14).'],
  referencias: [
    { texto: 'John Stuart Mill, Sistema de lógica (1843).' },
    { texto: 'Tribunal Superior Eleitoral, estatísticas eleitorais.', link: { url: 'https://www.tse.jus.br', rotulo: 'TSE' } },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 14.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação com dados do TSE', 'Consultar os dados oficiais'],
  revisao: [['Mill', 'Concordância e diferença.'], ['Margem de erro', '1.000 entrevistas, cerca de 3 pontos.'], ['TSE', 'Dados eleitorais.']],
  avancado: {
    texto: `<h3>Experimentos e quase-experimentos</h3>
<p>Cientistas políticos também fazem experimentos de campo, como enviar mensagens diferentes a grupos sorteados de eleitores e medir o comparecimento ${tag('fato')}. Quando não há sorteio, usam quase-experimentos, como comparar municípios logo acima e logo abaixo de um limite de população definido em lei ${tag('fato')}. No Brasil, o limite de 200 mil eleitores para o segundo turno municipal já foi usado em estudos desse tipo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Manuais de métodos em ciência política.' }],
    exercicios: [
      mc('Num experimento de campo, os grupos são definidos por:', ['Escolha do pesquisador', 'Sorteio', 'Partido', 'Renda'], 1, 'Aleatorização.'),
      mc('Comparar municípios logo acima e abaixo de um limite legal é:', ['Experimento de laboratório', 'Quase-experimento', 'Estudo de caso', 'Pesquisa de opinião'], 1, 'Descontinuidade.'),
      mc('O limite para segundo turno municipal no Brasil é de:', ['50 mil eleitores', '100 mil eleitores', '200 mil eleitores', '1 milhão de eleitores'], 2, 'CF, art. 29.'),
      disc('Proponha um quase-experimento com um limite definido em lei no Brasil e explique o que ele testaria.', ['Limite escolhido', 'Comparação proposta', 'Hipótese', 'Limites do desenho'])],
  },
}),

aula({
  id: 'cp1-4', titulo: 'Medir a democracia e a neutralidade do pesquisador', duracao: '120 min',
  aprendera: ['Explicar as dimensões da poliarquia de Dahl', 'Comparar índices de democracia e seus limites', 'Explicar a neutralidade axiológica de Weber', 'Distinguir dado, interpretação e preferência'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Um país é mais ou menos democrático que outro? Para responder, é preciso definir democracia e medi-la, e cada escolha pesa no resultado.</p>
<h3>A poliarquia de Dahl</h3>
<p>Robert Dahl (<em>Poliarquia</em>, 1971) chamou de poliarquia o regime real que se aproxima do ideal democrático e o descreveu por duas dimensões: <strong>contestação pública</strong> (oposição livre, competição) e <strong>inclusão</strong> (direito de participar) ${tag('fato')}.</p>
<h3>Índices</h3>
<p>Projetos como o V-Dem, a Freedom House e o Polity atribuem notas aos países com critérios e métodos diferentes ${tag('fato')}. Por isso, podem divergir sobre um mesmo país, sobretudo em casos intermediários ${tag('interpretacao')}. Ler um índice exige saber o que ele mede, quem codifica e com que fontes ${tag('argumento')}.</p>
<h3>Neutralidade axiológica</h3>
<p>Max Weber, em <em>A ciência como vocação</em> (1917), sustentou que o professor não deve usar a cátedra para propaganda e que a ciência pode esclarecer meios e consequências, mas não decidir sozinha entre valores últimos ${tag('fato')}. O pesquisador tem preferências; o método serve para que elas não determinem os resultados ${tag('argumento')}.</p>
<h3>Democracia e valores</h3>
<p>São João Paulo II escreveu que uma democracia sem valores se converte facilmente num totalitarismo aberto ou dissimulado (<em>Centesimus annus</em>, 46) ${tag('doutrina')}. A ciência mede instituições; o juízo sobre os valores que as sustentam pertence à ética e à doutrina ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Poliarquia', 'Regime real próximo do ideal democrático (Dahl).'],
    ['Contestação pública', 'Possibilidade de oposição e competição livres.'],
    ['Inclusão', 'Extensão do direito de participar.'],
    ['Índice', 'Medida que resume vários indicadores numa nota.'],
    ['Neutralidade axiológica', 'Exigência de que a pesquisa não seja dirigida pelos valores do pesquisador.'],
  ],
  exemplos: `<p><strong>Duas dimensões:</strong> um regime com eleições competitivas mas voto restrito a proprietários tem contestação alta e inclusão baixa; um regime com voto universal mas partido único tem inclusão alta e contestação baixa. Só a combinação das duas se aproxima da poliarquia.</p>`,
  contexto: `<p><strong>No mundo:</strong> os índices de democracia são usados por governos, organismos internacionais e imprensa ${tag('fato')}. <strong>No Brasil:</strong> a Lei de Acesso à Informação (Lei nº 12.527/2011) ampliou o acesso a dados públicos usados em pesquisas sobre o funcionamento do Estado ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que conferir a definição antes de comparar notas', tag: 'argumento',
    premissas: ['Cada índice define democracia com critérios próprios.', 'Critérios diferentes podem ordenar os mesmos países de modo diferente.', 'Uma nota sem a definição não diz o que está sendo comparado.'],
    conclusao: 'Logo, comparar notas de democracia exige conhecer a definição e o método de cada índice.',
    nota: 'Quando índices diferentes concordam, a conclusão fica mais firme.',
  },
  objecoes: [
    { objecao: 'Ninguém é neutro; logo toda ciência política é propaganda.', tag: 'debate',
      resposta: 'Ninguém é isento de valores, mas métodos públicos, dados abertos e revisão por outros pesquisadores permitem verificar se a conclusão segue da evidência. A falta de neutralidade perfeita não iguala pesquisa controlada e propaganda; ela pede mais rigor, não menos.' },
  ],
  aplicacao: `<p>Escolha um país e compare como dois índices de democracia o classificam, explicando a diferença a partir das definições e métodos de cada um, com as fontes.</p>`,
  fonte: {
    obra: 'Robert Dahl, Poliarquia (1971), cap. 1; Max Weber, A ciência como vocação (1917); São João Paulo II, Centesimus annus (1991), n. 46', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_01051991_centesimus-annus.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Dahl, localize as duas dimensões. Em Weber, o argumento contra a propaganda na cátedra. Em Centesimus annus, o n. 46 sobre democracia e valores. Compare o que cada texto afirma e em que plano (ciência, ética, doutrina).</p>`,
  },
  perguntas: [
    { p: 'Quais as duas dimensões da poliarquia?', r: 'Contestação pública e inclusão.' },
    { p: 'Por que índices de democracia divergem?', r: 'Porque usam definições, critérios e métodos diferentes.' },
    { p: 'O que é a neutralidade axiológica em Weber?', r: 'A exigência de não usar a ciência para propaganda e de reconhecer que ela não decide sozinha entre valores últimos.' },
  ],
  exercicios: [
    mc('Poliarquia é conceito de:', ['Weber', 'Dahl', 'Aristóteles', 'Mill'], 1, '1971.'),
    mc('Voto universal com partido único tem:', ['Contestação alta e inclusão baixa', 'Inclusão alta e contestação baixa', 'Ambas altas', 'Ambas baixas'], 1, 'Dahl.'),
    mc('"A ciência como vocação" é de:', ['Weber', 'Tocqueville', 'Locke', 'Hobbes'], 0, '1917.'),
    mc('A frase sobre democracia sem valores está em:', ['Rerum novarum', 'Centesimus annus, 46', 'Laudato si', 'Humanae vitae'], 1, 'João Paulo II.'),
    mc('A Lei de Acesso à Informação é de:', ['1988', '2000', '2011', '2020'], 2, 'Lei 12.527.'),
    disc('Compare a classificação de um país em dois índices de democracia, explicando a diferença pelas definições e métodos, com fontes.', ['País e índices', 'Definições', 'Explicação da diferença', 'Fontes']),
  ],
  resumo: ['Poliarquia: contestação e inclusão.', 'Índices: definições diferentes.', 'Weber: neutralidade axiológica.', 'CA 46: democracia e valores.', 'LAI (2011).'],
  referencias: [
    { texto: 'Robert Dahl, Poliarquia (1971).' },
    { texto: 'Max Weber, A ciência como vocação (1917).' },
    { texto: 'São João Paulo II, Centesimus annus (1991).', livro: 'jp2-centesimus' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação de índices', 'Ler os textos indicados'],
  revisao: [['Dahl', 'Poliarquia.'], ['Weber', 'Sem propaganda na cátedra.'], ['CA 46', 'Democracia e valores.']],
  avancado: {
    texto: `<h3>Democracias que se desfazem por dentro</h3>
<p>Steven Levitsky e Daniel Ziblatt (<em>Como as democracias morrem</em>, 2018) argumentam que muitas democracias recentes se enfraqueceram não por golpes, mas por governantes eleitos que corroem gradualmente as instituições ${tag('interpretacao')}. Críticos discutem como distinguir esse processo da disputa política normal ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Steven Levitsky e Daniel Ziblatt, Como as democracias morrem (2018).' }],
    exercicios: [
      mc('Levitsky e Ziblatt enfatizam o enfraquecimento por:', ['Golpes militares apenas', 'Erosão gradual por governantes eleitos', 'Guerras', 'Crises econômicas apenas'], 1, '2018.'),
      mc('A tese desses autores é:', ['Fato consensual', 'Interpretação debatida', 'Doutrina', 'Lei'], 1, 'Debate.'),
      mc('Uma dificuldade apontada pelos críticos é:', ['Medir votos', 'Distinguir erosão de disputa normal', 'Contar partidos', 'Definir Estado'], 1, 'Critérios.'),
      disc('Proponha três indicadores observáveis para distinguir erosão democrática de disputa política normal.', ['Três indicadores', 'Observáveis', 'Justificativa', 'Limites'])],
  },
}),

avaliacao('cp1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre poder e legitimidade, vocabulário e instituições, métodos e medidas de democracia, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça o cálculo do quociente eleitoral e a leitura da margem de erro.</li><li>Releia a distinção entre descrição, avaliação e proposta.</li></ul>`,
[
  disc('Analise um resultado eleitoral brasileiro com dados do TSE: descreva os números, proponha uma explicação e diga que dado a testaria, separando fato, interpretação e avaliação.', ['Dados com fonte', 'Explicação', 'Teste proposto', 'Fato, interpretação e avaliação separados']),
  disc('Explique a diferença entre poder e autoridade legítima usando Weber e o Catecismo, com um exemplo histórico ou atual.', ['Conceitos de Weber', 'Ensino do Catecismo', 'Exemplo pertinente', 'Distinção entre descrição e juízo moral']),
]),
];
