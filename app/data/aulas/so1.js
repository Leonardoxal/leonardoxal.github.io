// Sociologia I — fundamentos, vocabulário e métodos (etapas 1 a 3 do percurso de Sociologia).
// Fato social, conceitos básicos com seus autores, estatística, entrevista, etnografia, comparação e tipo ideal.
// Distingue sempre a descrição dos fatos sociais do juízo moral sobre eles.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'so1-1', titulo: 'O que é a sociologia: indivíduo, sociedade, instituições e fato social', duracao: '120 min',
  aprendera: ['Definir fato social segundo Durkheim', 'Explicar instituições, normas e papéis', 'Separar descrição e avaliação num texto sobre a vida social', 'Situar a sociologia diante da visão cristã da pessoa'],
  prereq: ['Degrau de lógica', 'Filosofia antiga: Aristóteles, Política I'],
  explicacao: `
<h3>O problema</h3>
<p>Por que as pessoas de uma mesma sociedade falam a mesma língua, seguem costumes parecidos e ocupam posições previsíveis? A sociologia estuda a vida social com métodos empíricos: observa, mede, compara e interpreta.</p>
<h3>Indivíduo e sociedade</h3>
<p>Aristóteles afirmou que o homem é por natureza um animal político, que se realiza na vida em comum (<em>Política</em> I, 2) ${tag('fato')}. A sociologia moderna investiga como a sociedade molda o indivíduo e como os indivíduos, agindo, reproduzem ou transformam a sociedade ${tag('interpretacao')}.</p>
<h3>Fato social</h3>
<p>Émile Durkheim, em <em>As regras do método sociológico</em> (1895), definiu os fatos sociais como maneiras de agir, pensar e sentir exteriores ao indivíduo e dotadas de poder de coerção; a regra metodológica é "tratar os fatos sociais como coisas", isto é, observá-los de fora, sem prenoções ${tag('fato')}. Exemplos: a língua, o sistema monetário, as regras do casamento.</p>
<h3>Instituições, normas e papéis</h3>
<p><strong>Instituições</strong> são padrões estáveis de relações e regras (família, escola, Igreja, mercado, Estado). <strong>Normas</strong> são regras de conduta, formais ou informais. <strong>Papéis</strong> são comportamentos esperados de quem ocupa uma posição ${tag('fato')}.</p>
<h3>Descrever e avaliar</h3>
<p>Max Weber defendeu que a ciência social deve separar a constatação dos fatos dos juízos de valor (a "neutralidade axiológica") ${tag('fato')}. Isso não proíbe julgar: exige saber quando se descreve e quando se avalia ${tag('argumento')}. A Doutrina Social da Igreja ensina que a pessoa humana é e deve ser o princípio, o sujeito e o fim de todas as instituições sociais (<em>Gaudium et Spes</em>, 25) ${tag('doutrina')} — critério de avaliação, não substituto da observação.</p>`,
  vocabulario: [
    ['Fato social', 'Maneira de agir, pensar e sentir exterior ao indivíduo e coercitiva (Durkheim).'],
    ['Instituição', 'Padrão estável de relações e regras.'],
    ['Norma', 'Regra de conduta, formal ou informal.'],
    ['Papel social', 'Comportamento esperado de quem ocupa uma posição.'],
    ['Neutralidade axiológica', 'Separação entre constatar fatos e emitir juízos de valor (Weber).'],
  ],
  exemplos: `<p><strong>Descrição e avaliação de uma paróquia:</strong> descrição — "a missa dominical das 10 h reúne cerca de 300 pessoas; a maioria tem mais de 50 anos; há três pastorais ativas". Avaliação — "a paróquia precisa atrair mais jovens". A primeira frase pode ser verificada por contagem; a segunda depende de um critério (o que a paróquia deve ser), que precisa ser explicitado.</p>`,
  contexto: `<p><strong>No mundo:</strong> a sociologia nasceu no século XIX para entender as mudanças trazidas pela industrialização e pelas revoluções. <strong>No Brasil:</strong> a disciplina se institucionalizou nas universidades nos anos 1930, como na Escola Livre de Sociologia e Política de São Paulo (1933) e na USP (1934) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a língua é um fato social', tag: 'argumento',
    premissas: ['Um fato social é exterior ao indivíduo e exerce coerção sobre ele.', 'A língua existe antes de cada falante e continua depois dele; ninguém a inventa sozinho.', 'Quem se afasta das regras da língua sofre sanções: não é entendido ou é corrigido.'],
    conclusao: 'Logo, a língua é fato social no sentido de Durkheim.',
    nota: 'Liga-se a Saussure (sb1-4): a língua como sistema social.',
  },
  objecoes: [
    { objecao: 'Se a sociedade determina o indivíduo, não há liberdade.', tag: 'debate',
      resposta: 'Coerção social não é determinação total: as regras limitam e orientam, mas as pessoas escolhem, resistem e mudam instituições. A visão cristã afirma a liberdade da pessoa e, ao mesmo tempo, sua natureza social.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: descreva uma instituição que você conhece (família, escola ou paróquia) em dois parágrafos — o primeiro só com o que se observa, o segundo com sua avaliação e o critério usado.</p>`,
  fonte: {
    obra: 'Émile Durkheim, As regras do método sociológico (1895), cap. I ("O que é um fato social?"); Aristóteles, Política, livro I, cap. 2', link: null,
    orientacao: `<p>Em Durkheim, localize a definição de fato social e os exemplos. Em Aristóteles, a tese do homem como animal político. Compare as duas maneiras de entender a natureza social do homem.</p>`,
  },
  perguntas: [
    { p: 'Como Durkheim define o fato social?', r: 'Maneiras de agir, pensar e sentir exteriores ao indivíduo e dotadas de poder de coerção.' },
    { p: 'O que é neutralidade axiológica?', r: 'A separação, defendida por Weber, entre constatar fatos e emitir juízos de valor.' },
    { p: 'O que ensina Gaudium et Spes 25?', r: 'Que a pessoa é o princípio, o sujeito e o fim de todas as instituições sociais.' },
  ],
  exercicios: [
    mc('As regras do método sociológico é de:', ['1835', '1895', '1904', '1966'], 1, 'Durkheim.'),
    mc('"Tratar os fatos sociais como coisas" significa:', ['Desprezar as pessoas', 'Observá-los de fora, sem prenoções', 'Medir só objetos', 'Negar a liberdade'], 1, 'Regra metodológica.'),
    mc('"A paróquia precisa atrair jovens" é frase:', ['Descritiva', 'Avaliativa', 'Estatística', 'Etnográfica'], 1, 'Depende de critério.'),
    mc('O comportamento esperado de um professor é um:', ['Fato natural', 'Papel social', 'Índice', 'Status econômico'], 1, 'Expectativa ligada à posição.'),
    mc('A Escola Livre de Sociologia e Política foi fundada em:', ['1889', '1933', '1964', '1988'], 1, 'São Paulo.'),
    disc('Entregue a descrição de uma instituição em dois parágrafos — observação e avaliação — indicando o critério da avaliação.', ['Parágrafo só descritivo', 'Avaliação separada', 'Critério explícito', 'Linguagem precisa']),
  ],
  resumo: ['Homem animal político (Aristóteles).', 'Fato social: exterior e coercitivo (Durkheim, 1895).', 'Instituições, normas, papéis.', 'Descrição x avaliação (Weber).', 'Pessoa como fim das instituições (GS 25).'],
  referencias: [
    { texto: 'Émile Durkheim, As regras do método sociológico (1895).' },
    { texto: 'Aristóteles, Política, livro I.' },
    { texto: 'Max Weber, "O sentido da neutralidade axiológica nas ciências sociológicas e econômicas" (1917).' },
    { texto: 'Concílio Vaticano II, Gaudium et Spes (1965), n. 25.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição da instituição', 'Ler o cap. I das Regras'],
  revisao: [['Fato social', 'Exterior e coercitivo.'], ['Weber', 'Separar fato e valor.'], ['GS 25', 'Pessoa como fim.']],
  avancado: {
    texto: `<h3>Ação social em Weber</h3>
<p>Enquanto Durkheim parte do fato social, Weber parte da <strong>ação social</strong>: a conduta orientada pelo sentido que o agente lhe dá em relação aos outros ${tag('fato')}. Weber distinguiu ação racional com relação a fins, racional com relação a valores, afetiva e tradicional ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Max Weber, Economia e sociedade (1922), cap. I.' }],
    exercicios: [
      mc('Weber parte da:', ['Ação social', 'Luta de classes', 'Solidariedade', 'Estrutura'], 0, 'Conduta com sentido.'),
      mc('Rezar por costume familiar é ação, em Weber:', ['Racional com relação a fins', 'Tradicional', 'Afetiva', 'Instrumental'], 1, 'Hábito herdado.'),
      mc('Economia e sociedade foi publicada em:', ['1895', '1905', '1922', '1966'], 2, 'Postumamente.'),
      disc('Classifique três ações do seu cotidiano segundo os quatro tipos de Weber e justifique.', ['Três ações', 'Tipos corretos', 'Justificativa', 'Casos mistos'])],
  },
}),

aula({
  id: 'so1-2', titulo: 'Vocabulário sociológico: status, papel, socialização, estratificação, anomia, solidariedade e racionalização', duracao: '150 min',
  aprendera: ['Definir os conceitos básicos com o autor que os formulou', 'Distinguir socialização primária e secundária', 'Explicar anomia e as duas formas de solidariedade de Durkheim', 'Explicar racionalização e desencantamento do mundo em Weber'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Conceitos sociológicos são usados no debate público com sentidos frouxos. Atribuí-los corretamente ao autor e ao contexto é condição para usá-los bem.</p>
<h3>Status e papel</h3>
<p>Ralph Linton, em <em>O estudo do homem</em> (1936), distinguiu o <strong>status</strong> (a posição numa estrutura social) e o <strong>papel</strong> (o comportamento associado a ela); status pode ser atribuído (ao nascer) ou adquirido ${tag('fato')}.</p>
<h3>Socialização</h3>
<p>Peter Berger e Thomas Luckmann, em <em>A construção social da realidade</em> (1966), distinguiram a socialização <strong>primária</strong>, na infância, pela qual o indivíduo se torna membro da sociedade, e a <strong>secundária</strong>, que o introduz em setores específicos (profissão, instituições) ${tag('fato')}.</p>
<h3>Estratificação</h3>
<p>É a divisão da sociedade em camadas desiguais de renda, poder ou prestígio. Marx enfatizou as classes definidas pela posição no modo de produção; Weber distinguiu classe (situação de mercado), estamento (honra social) e partido (poder) ${tag('fato')}.</p>
<h3>Solidariedade e anomia (Durkheim)</h3>
<p>Em <em>Da divisão do trabalho social</em> (1893), Durkheim distinguiu a solidariedade <strong>mecânica</strong>, por semelhança, das sociedades simples, e a <strong>orgânica</strong>, por interdependência de funções, das sociedades modernas ${tag('fato')}. <strong>Anomia</strong> é a situação de fraqueza das normas que regulam as condutas; em <em>O suicídio</em> (1897), Durkheim descreveu o suicídio anômico ${tag('fato')}.</p>
<h3>Racionalização (Weber)</h3>
<p>Weber descreveu a modernidade como processo de <strong>racionalização</strong> — cálculo, burocracia, ciência — e de <strong>desencantamento do mundo</strong>, expressão que usa em "A ciência como vocação" (conferência de 1917) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Status', 'Posição numa estrutura social (Linton).'],
    ['Socialização primária', 'Na infância, torna o indivíduo membro da sociedade (Berger e Luckmann).'],
    ['Estratificação', 'Divisão em camadas desiguais.'],
    ['Estamento', 'Grupo definido pela honra social (Weber).'],
    ['Solidariedade orgânica', 'Coesão por interdependência de funções (Durkheim).'],
    ['Anomia', 'Fraqueza das normas que regulam as condutas (Durkheim).'],
    ['Desencantamento do mundo', 'Recuo das explicações mágico-religiosas diante da racionalização (Weber).'],
  ],
  exemplos: `<p><strong>Status atribuído e adquirido:</strong> ser primogênito de uma família real é status atribuído; ser médico, adquirido. Numa sociedade estamental, o atribuído pesa mais; na moderna, o adquirido — embora a origem familiar continue influindo, como mostram estudos de mobilidade social.</p>`,
  contexto: `<p><strong>No mundo:</strong> anomia e racionalização são usadas para analisar crises e transformações modernas. <strong>No Brasil:</strong> a passagem rápida de uma sociedade rural a uma urbana (aula g4-3) é caso para estudar mudanças na solidariedade e na socialização ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a divisão do trabalho cria outro tipo de coesão (Durkheim)', tag: 'argumento',
    premissas: ['Nas sociedades simples, as pessoas fazem tarefas parecidas e partilham as mesmas crenças.', 'Nas sociedades modernas, as tarefas se especializam e as pessoas dependem umas das outras.', 'Essa dependência mútua une, ainda que as pessoas sejam diferentes.'],
    conclusao: 'Logo, a divisão do trabalho substitui a solidariedade por semelhança pela solidariedade por interdependência.',
    nota: 'Durkheim alerta que, sem normas adequadas, a divisão do trabalho pode gerar anomia.',
  },
  objecoes: [
    { objecao: '"Desencantamento do mundo" prova que a religião desaparecerá.', tag: 'debate',
      resposta: 'Weber descreveu uma tendência na cultura ocidental, não uma lei de extinção da religião. A persistência e o crescimento de religiões em muitos países alimentam o debate sobre a secularização (etapa 7).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: glossário de 15 conceitos (status, papel, socialização primária, socialização secundária, instituição, norma, estratificação, classe, estamento, solidariedade mecânica, solidariedade orgânica, anomia, racionalização, desencantamento, fato social), cada um com definição, autor, obra e um exemplo brasileiro.</p>`,
  fonte: {
    obra: 'Émile Durkheim, Da divisão do trabalho social (1893), livro I, caps. 2 e 3; Max Weber, "A ciência como vocação" (1917)', link: null,
    orientacao: `<p>Em Durkheim, localize as definições de solidariedade mecânica e orgânica. Em Weber, a passagem sobre o desencantamento do mundo. Use as definições no seu glossário com citação.</p>`,
  },
  perguntas: [
    { p: 'Quem distinguiu status e papel?', r: 'Ralph Linton, em O estudo do homem (1936).' },
    { p: 'O que é anomia?', r: 'A fraqueza das normas que regulam as condutas.' },
    { p: 'Que três dimensões da estratificação Weber distinguiu?', r: 'Classe, estamento e partido.' },
  ],
  exercicios: [
    mc('Da divisão do trabalho social é de:', ['1867', '1893', '1905', '1936'], 1, 'Durkheim.'),
    mc('A solidariedade por semelhança é:', ['Orgânica', 'Mecânica', 'Anômica', 'Estamental'], 1, 'Sociedades simples.'),
    mc('Socialização primária e secundária são conceitos de:', ['Marx', 'Berger e Luckmann', 'Linton', 'Comte'], 1, '1966.'),
    mc('O grupo definido pela honra social, em Weber, é o:', ['Partido', 'Estamento', 'Classe', 'Proletariado'], 1, 'Estamento.'),
    mc('Ser médico é status:', ['Atribuído', 'Adquirido', 'Estamental', 'Natural'], 1, 'Obtido pela formação.'),
    disc('Entregue o glossário de 15 conceitos com definição, autor, obra e exemplo brasileiro.', ['15 conceitos', 'Autores e obras corretos', 'Definições precisas', 'Exemplos brasileiros']),
  ],
  resumo: ['Status e papel (Linton, 1936).', 'Socialização primária e secundária (Berger e Luckmann, 1966).', 'Estratificação: Marx (classe) e Weber (classe, estamento, partido).', 'Solidariedade mecânica e orgânica; anomia (Durkheim).', 'Racionalização e desencantamento (Weber).'],
  referencias: [
    { texto: 'Émile Durkheim, Da divisão do trabalho social (1893).' },
    { texto: 'Peter Berger e Thomas Luckmann, A construção social da realidade (1966).' },
    { texto: 'Ralph Linton, O estudo do homem (1936).' },
    { texto: 'Max Weber, "A ciência como vocação" (1917).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o glossário', 'Ler os capítulos indicados'],
  revisao: [['Anomia', 'Normas fracas.'], ['Orgânica', 'Interdependência.'], ['Estamento', 'Honra social.']],
  avancado: {
    texto: `<h3>Comunidade e sociedade</h3>
<p>Ferdinand Tönnies, em <em>Comunidade e sociedade</em> (1887), distinguiu a <em>Gemeinschaft</em> (laços pessoais, tradição) e a <em>Gesellschaft</em> (laços contratuais, interesse) ${tag('fato')}; a distinção influenciou Durkheim e Weber ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ferdinand Tönnies, Comunidade e sociedade (1887).' }],
    exercicios: [
      mc('Comunidade e sociedade é de:', ['Durkheim', 'Tönnies', 'Weber', 'Simmel'], 1, '1887.'),
      mc('A Gesellschaft caracteriza-se por laços:', ['Pessoais', 'Contratuais', 'Familiares', 'Religiosos'], 1, 'Interesse.'),
      mc('A Gemeinschaft corresponde a laços de:', ['Mercado', 'Tradição e afeto', 'Burocracia', 'Contrato'], 1, 'Comunidade.'),
      disc('Compare comunidade e sociedade (Tönnies) com solidariedade mecânica e orgânica (Durkheim): semelhanças e diferenças.', ['Dois pares definidos', 'Semelhanças', 'Diferenças', 'Exemplo'])],
  },
}),

aula({
  id: 'so1-3', titulo: 'Métodos quantitativos: estatística, amostragem, o Censo e a armadilha da causalidade', duracao: '150 min',
  aprendera: ['Explicar amostra, população e margem de erro', 'Ler uma tabela do Censo com fonte e ano', 'Distinguir correlação e causa e reconhecer a falácia ecológica', 'Redigir conclusões que os dados sustentam e uma que não sustentam'],
  prereq: ['Aulas anteriores do módulo', 'Estatística básica (recomendado)'],
  explicacao: `
<h3>O problema</h3>
<p>Números sobre a sociedade aparecem em toda parte. Como saber se uma pesquisa representa a população e se os dados sustentam a conclusão?</p>
<h3>População e amostra</h3>
<p>A <strong>população</strong> é o conjunto que se quer conhecer; a <strong>amostra</strong>, a parte observada. Uma amostra aleatória bem desenhada permite estimar a população com uma <strong>margem de erro</strong> e um nível de confiança ${tag('fato')}. Amostras autosselecionadas (enquetes de internet) não permitem generalizar ${tag('fato')}.</p>
<h3>Censo e pesquisas do IBGE</h3>
<p>O Censo Demográfico procura recensear todos os domicílios; a PNAD Contínua, iniciada em 2012, é pesquisa amostral trimestral sobre trabalho e renda ${tag('fato')}. Ambas são as bases principais sobre a sociedade brasileira ${tag('fato')}.</p>
<h3>O exemplo de Durkheim</h3>
<p>Em <em>O suicídio</em> (1897), Durkheim usou estatísticas oficiais de vários países para mostrar que as taxas de suicídio variavam com a integração e a regulação dos grupos, não apenas com causas individuais ${tag('fato')}. O livro é clássico do método, e seus dados e conclusões também foram criticados ${tag('debate')}.</p>
<h3>Correlação, causa e falácia ecológica</h3>
<p>Correlação não prova causa: uma terceira variável pode explicar as duas, ou a causa pode ser inversa ${tag('fato')}. A <strong>falácia ecológica</strong>, descrita por W. S. Robinson (1950), é inferir comportamentos individuais a partir de dados agregados de grupos ${tag('fato')}.</p>`,
  vocabulario: [
    ['População', 'Conjunto que se quer conhecer.'],
    ['Amostra aleatória', 'Parte escolhida por sorteio que representa a população.'],
    ['Margem de erro', 'Intervalo provável em torno da estimativa.'],
    ['Variável de confusão', 'Terceira variável que explica a correlação entre duas outras.'],
    ['Falácia ecológica', 'Inferir o individual a partir de dados de grupos (Robinson, 1950).'],
  ],
  exemplos: `<p><strong>Três conclusões e uma armadilha:</strong> uma tabela mostra que municípios com mais anos médios de estudo têm renda média maior. Sustenta: (1) há correlação positiva entre as duas médias; (2) ela aparece em todas as regiões da tabela; (3) a diferença é grande entre extremos. Não sustenta: "cada pessoa que estuda mais ganha mais" — conclusão individual a partir de médias (falácia ecológica), além de ignorar outras variáveis.</p>`,
  contexto: `<p><strong>No mundo:</strong> institutos de estatística seguem padrões internacionais de metodologia e transparência. <strong>No Brasil:</strong> o IBGE publica notas metodológicas e microdados que permitem a qualquer pesquisador refazer análises ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que enquetes de internet não representam a população', tag: 'argumento',
    premissas: ['Uma amostra representa a população quando todos têm chance conhecida de ser escolhidos.', 'Numa enquete aberta, responde quem quer, e quem quer responder difere de quem não quer.', 'Logo, os respondentes não têm chance conhecida e diferem sistematicamente do conjunto.'],
    conclusao: 'Logo, resultados de enquetes autosselecionadas não podem ser generalizados para a população.',
    nota: 'Aplica a distinção entre amostra aleatória e de conveniência.',
  },
  objecoes: [
    { objecao: 'Uma amostra de 2 mil pessoas não pode representar milhões.', tag: 'debate',
      resposta: 'A precisão de uma amostra aleatória depende sobretudo do seu tamanho, não da proporção da população; 2 mil entrevistas bem sorteadas dão margem de erro de cerca de 2 pontos percentuais. O problema real não é o tamanho, mas o desenho e a qualidade da amostra.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escolha uma tabela do Censo 2022 no SIDRA (por exemplo, população por cor ou raça e grupos de idade) e redija três conclusões que os dados sustentam e uma que não sustentam, explicando por quê. Registre fonte, tabela e data de consulta.</p>`,
  fonte: {
    obra: 'Émile Durkheim, O suicídio (1897), introdução e livro II, cap. 1; IBGE, notas metodológicas do Censo 2022', link: { url: 'https://sidra.ibge.gov.br', rotulo: 'SIDRA (IBGE)' },
    orientacao: `<p>Em Durkheim, veja como ele define o problema e por que recorre às taxas. Nas notas do IBGE, identifique o que o Censo mede e como. Aplique ao seu exercício.</p>`,
  },
  perguntas: [
    { p: 'O que é falácia ecológica?', r: 'Inferir comportamentos individuais a partir de dados agregados de grupos.' },
    { p: 'Quando começou a PNAD Contínua?', r: 'Em 2012.' },
    { p: 'Por que uma enquete de internet não representa a população?', r: 'Porque a amostra é autosselecionada e difere sistematicamente da população.' },
  ],
  exercicios: [
    mc('O suicídio (1897) é de:', ['Weber', 'Durkheim', 'Marx', 'Comte'], 1, 'Uso de estatísticas.'),
    mc('Uma amostra aleatória de 2 mil pessoas tem margem de erro de cerca de:', ['0,1 ponto', '2 pontos percentuais', '20 pontos', '50 pontos'], 1, 'Depende do tamanho, não da população.'),
    mc('Concluir sobre indivíduos a partir de médias de municípios é:', ['Método correto', 'Falácia ecológica', 'Etnografia', 'Tipo ideal'], 1, 'Robinson, 1950.'),
    mc('A pesquisa trimestral do IBGE sobre trabalho é a:', ['Censo', 'PNAD Contínua', 'REGIC', 'PRODES'], 1, 'Desde 2012.'),
    mc('Sorvete e afogamentos aumentam juntos no verão. Isso mostra:', ['Sorvete causa afogamento', 'Variável de confusão (calor)', 'Falácia ecológica', 'Amostra viciada'], 1, 'Terceira variável.'),
    disc('Entregue o exercício com a tabela do Censo: três conclusões sustentadas e uma não sustentada, com explicação, fonte e data.', ['Tabela identificada', 'Três conclusões corretas', 'Conclusão indevida explicada', 'Fonte e data']),
  ],
  resumo: ['População, amostra aleatória, margem de erro.', 'Censo e PNAD Contínua (2012).', 'Durkheim, O suicídio (1897).', 'Correlação ≠ causa; variável de confusão.', 'Falácia ecológica (Robinson, 1950).'],
  referencias: [
    { texto: 'Émile Durkheim, O suicídio (1897).' },
    { texto: 'W. S. Robinson, "Ecological Correlations and the Behavior of Individuals" (1950).' },
    { texto: 'IBGE, Censo Demográfico 2022 e PNAD Contínua.', link: { url: 'https://www.ibge.gov.br', rotulo: 'IBGE' } },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o exercício da tabela', 'Ler a introdução de O suicídio'],
  revisao: [['Falácia ecológica', 'Do grupo ao indivíduo.'], ['PNAD Contínua', '2012.'], ['Amostra', 'Aleatória para generalizar.']],
  avancado: {
    texto: `<h3>Questionários</h3>
<p>A redação das perguntas altera as respostas: perguntas tendenciosas, duplas ou com termos vagos produzem dados enviesados ${tag('fato')}. Testar o questionário antes (pré-teste) reduz esses problemas ${tag('fato')}.</p>
<h3>Cor ou raça no Censo</h3>
<p>O IBGE usa a autodeclaração em cinco categorias: branca, preta, parda, amarela e indígena ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IBGE, notas metodológicas do Censo Demográfico 2022.' }],
    exercicios: [
      mc('"Você concorda que o governo deveria parar de desperdiçar dinheiro?" é pergunta:', ['Neutra', 'Tendenciosa', 'Aberta', 'Estatística'], 1, 'Induz a resposta.'),
      mc('As categorias de cor ou raça do IBGE são:', ['Três', 'Cinco', 'Sete', 'Dez'], 1, 'Autodeclaração.'),
      mc('O pré-teste de um questionário serve para:', ['Publicar resultados', 'Detectar problemas de redação', 'Aumentar a amostra', 'Dispensar a amostra'], 1, 'Antes da aplicação.'),
      disc('Reescreva três perguntas tendenciosas de pesquisas reais ou fictícias em forma neutra e explique a mudança.', ['Três perguntas', 'Versões neutras', 'Explicação', 'Critério'])],
  },
}),

aula({
  id: 'so1-4', titulo: 'Métodos qualitativos e comparativos: entrevista, etnografia, comparação e tipo ideal', duracao: '150 min',
  aprendera: ['Planejar uma entrevista semiestruturada', 'Explicar a observação participante e seus limites', 'Usar o método comparativo', 'Construir um tipo ideal no sentido de Weber'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Números mostram quanto e onde; não mostram sempre o porquê nem o sentido que as pessoas dão ao que fazem. Os métodos qualitativos e comparativos completam a estatística.</p>
<h3>Entrevista</h3>
<p>A entrevista pode ser estruturada (perguntas fixas), semiestruturada (roteiro com liberdade) ou aberta ${tag('fato')}. Exige consentimento informado, perguntas não indutivas e registro fiel ${tag('fato')}. No Brasil, a Resolução nº 510, de 2016, do Conselho Nacional de Saúde trata da ética em pesquisas de ciências humanas e sociais ${tag('fato')}.</p>
<h3>Etnografia</h3>
<p>Bronisław Malinowski, em <em>Argonautas do Pacífico Ocidental</em> (1922), sistematizou a observação participante: viver longamente com o grupo estudado, aprender sua língua e registrar a vida cotidiana ${tag('fato')}. O risco é tomar o ponto de vista do pesquisador pelo do grupo, ou o contrário ${tag('interpretacao')}.</p>
<h3>Comparação</h3>
<p>O método comparativo examina casos semelhantes que diferem num fator, ou diferentes que partilham um resultado, para identificar causas possíveis ${tag('fato')}. Durkheim e Weber o usaram amplamente ${tag('fato')}.</p>
<h3>Tipo ideal</h3>
<p>Weber, em "A objetividade do conhecimento nas ciências sociais" (1904), definiu o <strong>tipo ideal</strong>: um modelo construído acentuando traços da realidade, que não descreve nenhum caso concreto, mas serve para compará-los ${tag('fato')}. Exemplo: a "burocracia" weberiana (regras impessoais, hierarquia, competência técnica) ${tag('fato')}. "Ideal" aqui não quer dizer desejável ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Entrevista semiestruturada', 'Roteiro de perguntas com liberdade de aprofundamento.'],
    ['Consentimento informado', 'Concordância livre do participante, após explicação da pesquisa.'],
    ['Observação participante', 'Convívio prolongado com o grupo estudado (Malinowski).'],
    ['Método comparativo', 'Comparação de casos para identificar causas possíveis.'],
    ['Tipo ideal', 'Modelo que acentua traços da realidade para comparar casos (Weber).'],
  ],
  exemplos: `<p><strong>Tipo ideal na prática:</strong> compare a repartição pública do seu município com o tipo ideal da burocracia. Se as decisões dependem de amizades e não de regras, o desvio indica traços patrimonialistas — conceito que a etapa 8 (Faoro) retomará. O tipo ideal não é o retrato da repartição; é a régua.</p>`,
  contexto: `<p><strong>No mundo:</strong> a antropologia e a sociologia desenvolveram a etnografia em contextos urbanos, rurais e institucionais. <strong>No Brasil:</strong> a pesquisa com seres humanos segue as resoluções do sistema CEP/Conep; a Resolução CNS nº 510/2016 adapta as exigências às ciências humanas ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o tipo ideal não é um juízo de valor', tag: 'argumento',
    premissas: ['O tipo ideal acentua traços para servir de termo de comparação.', 'Ele pode ser construído para fenômenos bons ou maus (burocracia, carisma, patrimonialismo).', 'Seu uso é medir distâncias entre casos e modelo, não aprovar o modelo.'],
    conclusao: 'Logo, "ideal" significa construído no pensamento, não desejável.',
    nota: 'Confusão comum em leituras apressadas de Weber.',
  },
  objecoes: [
    { objecao: 'Entrevistas são subjetivas e não valem como ciência.', tag: 'debate',
      resposta: 'Entrevistas captam sentidos que a estatística não mede. Tornam-se rigorosas com roteiro, amostra justificada, registro fiel, análise sistemática e explicitação dos limites. Subjetividade do objeto não é arbitrariedade do método.' },
  ],
  aplicacao: `<p>Elabore o roteiro de uma entrevista semiestruturada (8 a 10 perguntas) sobre a participação de jovens numa instituição (paróquia, escola, clube), com termo de consentimento, e indique como compararia dois casos.</p>`,
  fonte: {
    obra: 'Max Weber, "A objetividade do conhecimento nas ciências sociais" (1904), parte II; Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922), introdução', link: null,
    orientacao: `<p>Em Weber, localize a definição de tipo ideal. Na introdução de Malinowski, identifique os princípios do trabalho de campo. Aplique ambos ao seu roteiro.</p>`,
  },
  perguntas: [
    { p: 'O que é tipo ideal?', r: 'Um modelo construído acentuando traços da realidade, usado para comparar casos.' },
    { p: 'Quem sistematizou a observação participante?', r: 'Bronisław Malinowski, em Argonautas do Pacífico Ocidental (1922).' },
    { p: 'Que resolução trata da ética em pesquisas de ciências humanas no Brasil?', r: 'A Resolução CNS nº 510, de 2016.' },
  ],
  exercicios: [
    mc('Argonautas do Pacífico Ocidental é de:', ['Durkheim', 'Malinowski', 'Weber', 'Lévi-Strauss'], 1, '1922.'),
    mc('Para Weber, "ideal" em tipo ideal significa:', ['Desejável', 'Construído no pensamento', 'Perfeito moralmente', 'Estatístico'], 1, 'Régua de comparação.'),
    mc('Uma entrevista com roteiro e liberdade de aprofundamento é:', ['Estruturada', 'Semiestruturada', 'Aberta', 'Censitária'], 1, 'Roteiro flexível.'),
    mc('A objetividade do conhecimento nas ciências sociais é de:', ['1895', '1904', '1922', '1966'], 1, 'Weber.'),
    mc('Antes de entrevistar, o pesquisador deve obter:', ['Pagamento', 'Consentimento informado', 'Autorização do IBGE', 'Nada'], 1, 'Ética da pesquisa.'),
    disc('Entregue o roteiro de entrevista semiestruturada com termo de consentimento e o plano de comparação entre dois casos.', ['Roteiro de 8 a 10 perguntas', 'Perguntas não indutivas', 'Termo de consentimento', 'Plano de comparação']),
  ],
  resumo: ['Entrevista estruturada, semiestruturada, aberta.', 'Ética: consentimento; Resolução CNS 510/2016.', 'Etnografia: Malinowski (1922).', 'Método comparativo.', 'Tipo ideal (Weber, 1904): régua, não valor.'],
  referencias: [
    { texto: 'Max Weber, "A objetividade do conhecimento nas ciências sociais" (1904).' },
    { texto: 'Bronisław Malinowski, Argonautas do Pacífico Ocidental (1922).' },
    { texto: 'Conselho Nacional de Saúde, Resolução nº 510, de 7 de abril de 2016.' },
    { texto: 'Howard Becker, Segredos e truques da pesquisa (1998).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o roteiro de entrevista', 'Ler a definição de tipo ideal'],
  revisao: [['Tipo ideal', 'Régua de comparação.'], ['Malinowski', 'Observação participante.'], ['CNS 510', 'Ética em ciências humanas.']],
  avancado: {
    texto: `<h3>Métodos mistos</h3>
<p>Pesquisas atuais combinam dados quantitativos e qualitativos: a estatística mostra padrões; as entrevistas ajudam a interpretar seus mecanismos ${tag('fato')}. A combinação exige que cada parte siga seu próprio rigor ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Howard Becker, Segredos e truques da pesquisa (1998).' }],
    exercicios: [
      mc('Métodos mistos combinam:', ['Duas amostras iguais', 'Dados quantitativos e qualitativos', 'Só entrevistas', 'Só estatística'], 1, 'Padrões e mecanismos.'),
      mc('Na combinação de métodos, cada parte deve:', ['Dispensar rigor', 'Seguir seu próprio rigor', 'Ser opcional', 'Ignorar a outra'], 1, 'Rigor de cada método.'),
      mc('Entrevistas, nos métodos mistos, ajudam a interpretar:', ['Os mecanismos dos padrões', 'Apenas a margem de erro', 'A amostra', 'O PIB'], 0, 'O porquê.'),
      disc('Desenhe uma pesquisa de métodos mistos sobre a frequência religiosa num bairro: dados quantitativos, entrevistas e como integrá-los.', ['Parte quantitativa', 'Parte qualitativa', 'Integração', 'Ética'])],
  },
}),

avaliacao('so1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre fato social, conceitos básicos e métodos, com leitura de dados, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu glossário de 15 conceitos.</li><li>Refaça o exercício da tabela do Censo.</li></ul>`,
[
  disc('Escolha um fenômeno social brasileiro (por exemplo, a evasão escolar) e mostre como o estudaria com um método quantitativo e um qualitativo, indicando o que cada um permite e não permite concluir.', ['Fenômeno delimitado', 'Método quantitativo', 'Método qualitativo', 'Limites de cada um']),
  disc('Escreva um parágrafo descritivo e outro avaliativo sobre uma instituição brasileira, usando ao menos quatro conceitos do módulo e explicitando o critério da avaliação.', ['Descrição separada', 'Quatro conceitos corretos', 'Critério explícito', 'Clareza']),
]),
];
