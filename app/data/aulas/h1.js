// História I — fundamentos e método (etapas 1 a 3 do percurso: fundamentos, vocabulário, métodos próprios).
// Disciplina da fase multidisciplinar. Datas e atribuições seguem obras de referência citadas em cada aula;
// o que é interpretação ou debate vem marcado.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'h1-1', titulo: 'O que é a história: passado, fonte e testemunho', duracao: '90 min',
  aprendera: ['Distinguir o passado, a história como conhecimento e a historiografia', 'Explicar por que a história depende de fontes', 'Distinguir testemunho voluntário e involuntário (Bloch)', 'Diferenciar memória e conhecimento histórico'],
  prereq: ['Lógica e argumentação (Degrau 4): premissa, conclusão e grau de apoio', 'Introdução à Filosofia (Degrau 3): opinião, crença e conhecimento'],
  explicacao: `
<h3>O problema</h3>
<p>O passado não existe mais: não podemos observá-lo nem repeti-lo como um experimento. Ainda assim afirmamos com segurança que Roma caiu, que o Brasil se tornou independente em 1822 e que houve duas guerras mundiais. Como é possível conhecer o que já não está diante de nós? A resposta define a história como disciplina: <strong>conhecemos o passado pelos vestígios que ele deixou</strong>.</p>

<h3>Três sentidos da palavra "história"</h3>
<ul>
<li><strong>O passado humano</strong>, aquilo que aconteceu (os latinos diziam <em>res gestae</em>, "coisas feitas").</li>
<li><strong>O conhecimento</strong> desse passado, obtido por um método.</li>
<li><strong>A historiografia</strong>: os livros e as obras que narram e explicam o passado, e a própria história dessas obras.</li>
</ul>
<p>Confundir os três produz erros comuns: tratar um livro de história como se fosse o próprio passado, ou pensar que, porque há interpretações diferentes, nada aconteceu de fato.</p>

<h3>Investigação, não lembrança</h3>
<p>A palavra grega <em>historíē</em>, com que Heródoto abre suas <em>Histórias</em> (século V a.C.), significa "investigação" ${tag('fato')}. Tucídides, poucas décadas depois, explica no livro I de sua <em>História da Guerra do Peloponeso</em> que não registrou o que ouviu do primeiro que encontrou, mas verificou cada fato com o máximo de cuidado, porque as testemunhas divergem por parcialidade ou por memória falha (I,22) ${tag('fato')}. Já ali estão os dois pilares do método: buscar testemunhos e confrontá-los.</p>

<h3>"A ciência dos homens no tempo"</h3>
<p>Marc Bloch (1886–1944), historiador francês fuzilado pela Gestapo durante a ocupação, deixou inacabada a <em>Apologia da história, ou O ofício de historiador</em>, publicada postumamente em 1949 ${tag('fato')}. Nela define a história como a "ciência dos homens no tempo". Três elementos importam: <em>ciência</em> (conhecimento metódico, que se justifica), <em>homens</em> (o objeto é a ação humana, não a natureza em geral) e <em>tempo</em> (os fenômenos são compreendidos na sua duração e mudança) ${tag('interpretacao')}.</p>

<h3>Fontes e testemunhos</h3>
<p><strong>Fonte</strong> é todo vestígio do passado que permite conhecê-lo: documentos escritos, objetos, construções, imagens, moedas, registros orais, dados demográficos. <strong>Fonte primária</strong> é produzida no tempo estudado ou por quem participou do fato; <strong>fonte secundária</strong> é uma obra posterior que estuda as primárias. A distinção depende da pergunta: um livro de 1950 sobre o Império é secundário para o Império, mas primário para quem estuda como se escrevia história em 1950.</p>
<p>Bloch distingue ainda os <strong>testemunhos voluntários</strong>, feitos para informar a posteridade (crônicas, memórias), dos <strong>involuntários</strong>, que nos informam sem essa intenção (um registro de batismo, uma conta de comércio, o desgaste de uma ferramenta) ${tag('interpretacao')}. Os involuntários muitas vezes são mais confiáveis, porque não tentam convencer ninguém do que dizem.</p>

<h3>Memória e história</h3>
<p>A memória coletiva (comemorações, monumentos, tradições de família) conserva e seleciona o passado para dar identidade a um grupo. A história examina essas memórias como mais uma fonte, pergunta o que elas omitem e confronta com documentos. O historiador Pierre Nora chamou de "lugares de memória" os espaços e símbolos em que uma sociedade fixa o que quer lembrar ${tag('interpretacao')}. Memória e história não são inimigas, mas também não são a mesma coisa.</p>`,
  vocabulario: [
    ['Fonte', 'Vestígio do passado que permite conhecê-lo.'],
    ['Fonte primária', 'Produzida no tempo estudado ou por participante do fato.'],
    ['Fonte secundária', 'Estudo posterior baseado nas fontes primárias.'],
    ['Historiografia', 'Conjunto das obras de história e a história dessas obras.'],
    ['Testemunho involuntário', 'Fonte que informa sem ter sido feita para informar a posteridade.'],
    ['Memória coletiva', 'Seleção do passado conservada por um grupo para sua identidade.'],
  ],
  exemplos: `<p><strong>Um registro paroquial de batismo</strong> do século XVIII, produzido para fins religiosos, é hoje um testemunho involuntário de primeira ordem: permite estudar nomes, filiação, condição de livre ou escravo, padrinhos e redes sociais de uma vila colonial.</p>
<p><strong>Uma estátua equestre</strong> diz pouco sobre a batalha que comemora, mas muito sobre quem a ergueu, quando e com que intenção: é fonte para a história da memória.</p>`,
  contexto: `<p><strong>No mundo:</strong> a história como disciplina universitária consolidou-se no século XIX, com a crítica documental alemã e francesa. <strong>No Brasil:</strong> em 1838 foram criados o Arquivo Público do Império (hoje Arquivo Nacional) e o Instituto Histórico e Geográfico Brasileiro (IHGB) ${tag('fato')}. Em 1845 o IHGB publicou o ensaio premiado do naturalista Carl Friedrich von Martius, "Como se deve escrever a história do Brasil", que propunha narrar a formação do país a partir de seus povos formadores ${tag('fato')} — uma proposta que a historiografia posterior discutiu e criticou ${tag('debate')}.</p>`,
  argumento: {
    titulo: 'Por que o conhecimento histórico depende de fontes', tag: 'argumento',
    premissas: ['O passado não pode ser observado diretamente nem repetido.', 'Só conhecemos o que não observamos por meio de vestígios ou testemunhos.', 'Os vestígios do passado humano são as fontes.'],
    conclusao: 'Logo, todo conhecimento histórico se apoia em fontes — e vale o que valem as fontes e o modo de interpretá-las.',
    nota: 'Argumento válido. A segunda premissa é a mais discutível: a filosofia da história pergunta se a inferência a partir de vestígios dá conhecimento ou apenas probabilidade (Filosofia da história, Degrau 9).',
  },
  objecoes: [
    { objecao: 'Se toda história é escrita por alguém, com interesses, então ela é só opinião.', tag: 'debate',
      resposta: 'Ter perspectiva não é o mesmo que inventar. Uma afirmação histórica pode ser verificada nas fontes por outros pesquisadores; interpretações podem ser comparadas pelo modo como explicam as evidências. A perspectiva exige cuidado, não abandono da busca da verdade.' },
    { objecao: 'Os documentos oficiais são sempre mentirosos; só a memória popular é confiável.', tag: 'debate',
      resposta: 'Nenhum tipo de fonte é confiável ou falso por natureza. Documentos oficiais podem ocultar, e memórias podem deformar. O método consiste em perguntar a cada fonte quem a produziu, para quê, e confrontá-la com outras.' },
  ],
  aplicacao: `<p>Escolha um acontecimento da história da sua família ou cidade. Liste três fontes que poderiam informá-lo (uma escrita, um objeto ou imagem, um testemunho oral) e classifique cada uma: primária ou secundária, voluntária ou involuntária.</p>`,
  fonte: {
    obra: 'Tucídides, História da Guerra do Peloponeso, livro I, cap. 20–22', link: null,
    orientacao: `<p>Leia os capítulos 20 a 22 do livro I. Anote: (1) que erros Tucídides atribui aos que contam o passado; (2) como diz ter tratado os discursos; (3) como diz ter tratado os fatos. Compare com a definição de Bloch desta aula.</p>`,
  },
  perguntas: [
    { p: 'Quais são os três sentidos de "história"?', r: 'O passado humano, o conhecimento metódico dele e a historiografia.' },
    { p: 'O que diferencia fonte primária de secundária?', r: 'A primária vem do tempo estudado ou de participantes; a secundária é estudo posterior das primárias. A classificação depende da pergunta de pesquisa.' },
    { p: 'Por que testemunhos involuntários costumam ser valiosos?', r: 'Porque não foram feitos para convencer a posteridade do que registram.' },
  ],
  exercicios: [
    mc('A palavra grega historíē, usada por Heródoto, significa:', ['Lenda', 'Investigação', 'Memória', 'Crônica real'], 1, 'Historíē é investigação: o termo já indica um método, não um gênero de narrativa fantasiosa.'),
    mc('Para Marc Bloch, a história é:', ['A arte de narrar o passado', 'A ciência dos homens no tempo', 'O registro dos reis e das guerras', 'A memória de um povo'], 1, 'Definição da Apologia da história (1949).'),
    mc('Um registro de batismo do século XVIII usado para estudar a escravidão é um testemunho:', ['Voluntário', 'Involuntário', 'Secundário', 'Oral'], 1, 'Foi produzido para fins religiosos, não para informar historiadores.'),
    mc('Em que ano foram criados o Arquivo Público do Império e o IHGB?', ['1808', '1822', '1838', '1889'], 2, '1838: ambos no período regencial.'),
    mc('Qual afirmação descreve corretamente a relação entre memória e história?', ['São a mesma coisa', 'A memória é sempre falsa', 'A história examina a memória como fonte, confrontando-a com outros vestígios', 'A história deve substituir toda memória'], 2, 'A memória é objeto e fonte da história; não é descartada nem aceita sem exame.'),
    disc('Explique, com um exemplo do Brasil, a diferença entre fonte primária e secundária e mostre como a mesma obra pode ser uma ou outra conforme a pergunta de pesquisa.', ['Define os dois tipos com precisão', 'Dá um exemplo brasileiro concreto', 'Mostra a dependência da pergunta', 'Usa vocabulário da aula']),
  ],
  resumo: ['História: passado, conhecimento e historiografia.', 'Conhecemos o passado por fontes.', 'Primária e secundária dependem da pergunta.', 'Testemunhos voluntários e involuntários (Bloch).', 'Memória é fonte, não sinônimo de história.'],
  referencias: [
    { texto: 'Heródoto, Histórias, proêmio (séc. V a.C.).' },
    { texto: 'Tucídides, História da Guerra do Peloponeso, I, 20–22.' },
    { texto: 'Marc Bloch, Apologia da história, ou O ofício de historiador (1949; trad. bras. Zahar, 2001).' },
    { texto: 'Pierre Nora (dir.), Les lieux de mémoire (1984–1992).' },
    { texto: 'Carl F. P. von Martius, "Como se deve escrever a história do Brasil", Revista do IHGB, 1845.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler Tucídides I, 20–22'],
  revisao: [['Três sentidos de história', 'Passado, conhecimento, historiografia.'], ['Definição de Bloch', 'Ciência dos homens no tempo.'], ['Testemunho involuntário', 'Informa sem ter sido feito para informar a posteridade.']],
  avancado: {
    texto: `<h3>Explicar ou compreender?</h3>
<p>Wilhelm Dilthey, na <em>Introdução às ciências do espírito</em> (1883), distinguiu o <em>explicar</em> das ciências naturais (subsumir fatos a leis) do <em>compreender</em> das ciências humanas (apreender o sentido de ações e obras) ${tag('interpretacao')}. R. G. Collingwood, em <em>A ideia de história</em> (publicada postumamente em 1946), sustentou que o historiador deve "re-pensar" o pensamento dos agentes para entender por que agiram ${tag('interpretacao')}.</p>
<h3>A história é uma narrativa como outra qualquer?</h3>
<p>Hayden White, em <em>Meta-história</em> (1973), analisou as obras de historiadores do século XIX como construções narrativas que seguem formas literárias ${tag('interpretacao')}. Críticos responderam que a forma narrativa não suprime o controle pelas fontes: duas narrativas podem ser comparadas pela fidelidade às evidências ${tag('debate')}. O debate continua aberto e é tema de filosofia da história.</p>`,
    leituras: [{ texto: 'Wilhelm Dilthey, Introdução às ciências do espírito (1883).' }, { texto: 'R. G. Collingwood, A ideia de história (1946).' }, { texto: 'Hayden White, Meta-história (1973).' }],
    exercicios: [
      mc('A distinção entre explicar e compreender nas ciências humanas é associada a:', ['Ranke', 'Dilthey', 'Braudel', 'Heródoto'], 1, 'Introdução às ciências do espírito (1883).'),
      mc('Para Collingwood, o historiador deve:', ['Medir os fatos como um físico', 'Re-pensar o pensamento dos agentes', 'Evitar todo documento escrito', 'Narrar só batalhas'], 1, 'A ideia de história (1946).'),
      mc('Meta-história (1973), que analisa a forma narrativa das obras históricas, é de:', ['Hayden White', 'Marc Bloch', 'E. H. Carr', 'Pierre Nora'], 0, 'Hayden White.'),
      disc('A forma narrativa torna a história mera literatura? Exponha a tese de White, uma objeção baseada no controle pelas fontes e sua conclusão.', ['Expõe a tese com fidelidade', 'Formula a objeção', 'Usa um exemplo', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'h1-2', titulo: 'O tempo histórico: cronologia, calendários e periodização', duracao: '90 min',
  aprendera: ['Usar corretamente a datação antes e depois de Cristo', 'Explicar a origem dos calendários juliano e gregoriano', 'Distinguir cronologia e periodização', 'Avaliar a periodização clássica e a do Brasil'],
  prereq: ['Aula anterior (O que é a história)'],
  explicacao: `
<h3>O problema</h3>
<p>Datar parece simples, mas toda data supõe uma convenção: um ponto de partida, uma unidade e um calendário. E toda divisão do passado em "épocas" já é uma interpretação sobre o que mudou e o que permaneceu. Esta aula dá o vocabulário do tempo histórico e mostra onde termina a convenção e começa o debate.</p>

<h3>Antes e depois de Cristo</h3>
<p>A contagem dos anos a partir da Encarnação foi proposta pelo monge Dionísio, o Exíguo, em Roma, por volta de 525, ao preparar tabelas para o cálculo da Páscoa ${tag('fato')}. Ela se difundiu no Ocidente sobretudo pela obra de São Beda, o Venerável, cuja <em>História eclesiástica do povo inglês</em> (731) data os acontecimentos pelos anos do Senhor e usa também a contagem retroativa, antes da Encarnação ${tag('fato')}.</p>
<ul>
<li><strong>Não há ano zero</strong>: depois de 1 a.C. vem 1 d.C. Por isso o século I vai de 1 a 100, e o século XXI começou em 2001.</li>
<li>O cálculo de Dionísio tem um desvio de alguns anos: os Evangelhos situam o nascimento de Jesus sob Herodes, o Grande (Mt 2,1), que morreu provavelmente em 4 a.C. ${tag('fato')}. O nascimento é situado, portanto, entre c. 7 e 4 a.C. ${tag('hipotese')}.</li>
<li>As siglas "a.C./d.C." e "AEC/EC" (antes da era comum) designam a mesma contagem; a escolha é de convenção editorial.</li>
</ul>

<h3>Calendários</h3>
<p>O <strong>calendário juliano</strong>, instituído por Júlio César em 46 a.C., tinha anos de 365 dias e um bissexto a cada quatro anos ${tag('fato')}. Como o ano solar é um pouco mais curto, acumulou-se um desvio de cerca de dez dias até o século XVI. O papa Gregório XIII corrigiu-o pela bula <em>Inter gravissimas</em> (1582): suprimiram-se dez dias (a quinta-feira, 4 de outubro, foi seguida pela sexta-feira, 15 de outubro) e mudou-se a regra dos bissextos seculares ${tag('fato')}. Países protestantes e ortodoxos adotaram a reforma mais tarde; por isso datas como a "Revolução de Outubro" russa (1917) caem em novembro no calendário gregoriano ${tag('fato')}. Ao ler uma fonte, é preciso saber em que calendário ela data.</p>

<h3>Cronologia e periodização</h3>
<p><strong>Cronologia</strong> é a ordenação dos fatos no tempo. <strong>Periodização</strong> é a divisão do passado em períodos com alguma unidade. A primeira é verificável; a segunda é um instrumento de interpretação.</p>
<p>A divisão em <strong>Antiguidade, Idade Média e Idade Moderna</strong> nasceu entre os humanistas, que viam seu tempo como renascimento depois de uma "idade do meio", e foi popularizada no fim do século XVII pelos manuais de Christoph Cellarius ${tag('fato')}. A historiografia francesa do século XIX acrescentou a <strong>Idade Contemporânea</strong>. Os marcos usuais (476, 1453 ou 1492, 1789) são convenções escolares ${tag('interpretacao')}: ninguém, em 477, acordou "na Idade Média".</p>
<p>Fernand Braudel propôs distinguir durações: o tempo curto dos acontecimentos, o tempo médio das conjunturas (ciclos econômicos, por exemplo) e a <strong>longa duração</strong> das estruturas geográficas e mentais, que mudam muito devagar ${tag('interpretacao')}.</p>

<h3>E o Brasil?</h3>
<p>A periodização mais usada divide a história do Brasil em <strong>Colônia</strong> (1500–1822), <strong>Império</strong> (1822–1889) e <strong>República</strong> (desde 1889) ${tag('fato')}. É uma periodização política: útil, mas não decide sozinha questões econômicas ou sociais. A escravidão, por exemplo, atravessa Colônia e Império até 1888, e a economia agroexportadora persiste na Primeira República. Por isso historiadores usam também periodizações econômicas (ciclos do açúcar, do ouro, do café), que por sua vez são criticadas por simplificarem processos simultâneos ${tag('debate')}.</p>`,
  vocabulario: [
    ['Cronologia', 'Ordenação verificável dos fatos no tempo.'],
    ['Periodização', 'Divisão interpretativa do passado em épocas.'],
    ['Anno Domini', 'Contagem dos anos a partir da Encarnação (Dionísio, o Exíguo).'],
    ['Calendário gregoriano', 'Reforma de 1582 do calendário juliano (bula Inter gravissimas).'],
    ['Anacronismo', 'Atribuir a uma época ideias, termos ou situações de outra.'],
    ['Longa duração', 'Estruturas que mudam muito lentamente (Braudel).'],
  ],
  exemplos: `<p><strong>Anacronismo:</strong> chamar de "brasileiros" os moradores da colônia em 1600 projeta uma identidade nacional que ainda não existia; o termo designava então, sobretudo, quem comerciava o pau-brasil. <strong>Calendário:</strong> Shakespeare e Cervantes morreram em datas registradas como 23 de abril de 1616, mas em calendários diferentes — a Inglaterra ainda usava o juliano —, de modo que não morreram no mesmo dia.</p>`,
  contexto: `<p>As tabelas pascais de Dionísio e a obra de Beda mostram que a contagem cristã dos anos nasceu de uma necessidade litúrgica (fixar a Páscoa) antes de se tornar convenção civil universal ${tag('fato')}. A reforma gregoriana foi adotada logo nos países católicos, inclusive Portugal e, portanto, suas colônias ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a periodização é interpretação', tag: 'argumento',
    premissas: ['Periodizar é agrupar fatos sob uma unidade e separar épocas por rupturas.', 'Decidir o que conta como unidade ou ruptura exige escolher critérios (políticos, econômicos, religiosos, culturais).', 'Critérios diferentes produzem divisões diferentes do mesmo passado.'],
    conclusao: 'Logo, a periodização não é dada pelas fontes como uma data; é uma interpretação, que deve explicitar e justificar seus critérios.',
    nota: 'Isso não torna toda periodização arbitrária: ela é melhor quando explica mais evidências e esconde menos continuidades.',
  },
  objecoes: [
    { objecao: 'Se as periodizações são convenções, deveríamos abandoná-las.', tag: 'debate',
      resposta: 'Convenções úteis organizam o estudo e a comunicação. O problema não é usá-las, mas esquecê-las como convenções e tratá-las como fatos naturais.' },
    { objecao: 'A expressão "Idade Média" é um preconceito contra o período.', tag: 'debate',
      resposta: 'O termo nasceu de um juízo humanista desfavorável. Hoje é usado como rótulo descritivo; o preconceito está em associá-lo automaticamente a "trevas", leitura que a historiografia do século XX corrigiu.' },
  ],
  aplicacao: `<p>Monte uma linha do tempo com dez fatos da história do Brasil entre 1500 e 1889. Em seguida, proponha uma periodização alternativa à política (Colônia, Império, República), por exemplo econômica ou religiosa, e explique em cinco linhas o critério e o que ela mostra que a outra esconde.</p>`,
  fonte: {
    obra: 'Beda, História eclesiástica do povo inglês, livro I (datas anno Domini) — e a bula Inter gravissimas (1582)', link: null,
    orientacao: `<p>Em Beda, localize os primeiros capítulos do livro I e observe como ele data acontecimentos antes e depois da Encarnação. Na bula de Gregório XIII, identifique o problema que ela quer corrigir e a solução adotada.</p>`,
  },
  perguntas: [
    { p: 'Por que o século XXI começou em 2001?', r: 'Porque não há ano zero: o século I vai de 1 a 100.' },
    { p: 'Qual a diferença entre cronologia e periodização?', r: 'Cronologia ordena fatos no tempo (verificável); periodização divide o passado em épocas segundo critérios (interpretativa).' },
    { p: 'Que problema a reforma gregoriana corrigiu?', r: 'O desvio acumulado do calendário juliano em relação ao ano solar (cerca de dez dias).' },
  ],
  exercicios: [
    mc('A contagem dos anos a partir da Encarnação foi proposta por:', ['Júlio César', 'Dionísio, o Exíguo', 'Gregório XIII', 'Cellarius'], 1, 'Dionísio, o Exíguo, c. 525; Beda a difundiu.'),
    mc('Em 1582, a bula Inter gravissimas:', ['Criou o calendário juliano', 'Suprimiu dez dias e mudou a regra dos bissextos seculares', 'Fixou o ano zero', 'Adotou a contagem antes da era comum'], 1, 'A quinta-feira, 4 de outubro, foi seguida pela sexta-feira, 15 de outubro.'),
    mc('Qual é o primeiro ano do século I d.C.?', ['Ano 0', 'Ano 1', 'Ano 10', 'Ano 100'], 1, 'Não há ano zero.'),
    mc('"Longa duração" é um conceito de:', ['Ranke', 'Braudel', 'Heródoto', 'Von Martius'], 1, 'Braudel distinguiu acontecimento, conjuntura e longa duração.'),
    mc('A periodização Colônia, Império e República baseia-se principalmente em critérios:', ['Econômicos', 'Políticos', 'Religiosos', 'Climáticos'], 1, 'São regimes políticos; outros critérios produzem outras divisões.'),
    disc('A escravidão no Brasil atravessa a Colônia e o Império. Use esse caso para explicar por que uma periodização política não basta para a história social e proponha um critério complementar.', ['Mostra a continuidade através dos marcos políticos', 'Propõe critério alternativo justificado', 'Distingue cronologia e periodização', 'Evita anacronismo']),
  ],
  resumo: ['Anno Domini: Dionísio (c. 525), difundido por Beda.', 'Sem ano zero.', 'Juliano (46 a.C.) e gregoriano (1582).', 'Cronologia verifica; periodização interpreta.', 'Colônia, Império, República: periodização política.'],
  referencias: [
    { texto: 'Beda, o Venerável, Historia ecclesiastica gentis Anglorum (731).' },
    { texto: 'Gregório XIII, bula Inter gravissimas (24 de fevereiro de 1582).' },
    { texto: 'Fernand Braudel, "História e ciências sociais: a longa duração" (1958), em Escritos sobre a história.' },
    { texto: 'Jacques Le Goff, História e memória (1977–1982, ensaios; trad. bras. Unicamp).' },
    { texto: 'Boris Fausto, História do Brasil (1994).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler a fonte orientada'],
  revisao: [['Anno Domini', 'Dionísio, o Exíguo (c. 525); difundido por Beda.'], ['Reforma gregoriana', '1582: dez dias suprimidos.'], ['Periodização', 'Interpretação com critérios explícitos.']],
  avancado: {
    texto: `<h3>Outras eras e calendários</h3>
<p>Os romanos podiam contar os anos <em>ab urbe condita</em>, desde a fundação tradicional de Roma (753 a.C.); os gregos, por Olimpíadas, a partir de 776 a.C. ${tag('fato')}. O calendário islâmico conta desde a Hégira (622) e é lunar; o judaico conta desde a criação do mundo segundo a tradição rabínica ${tag('fato')}. Ler fontes de outras culturas exige converter essas datas com tabelas, atentando para o início do ano em cada sistema.</p>
<h3>O tempo como experiência</h3>
<p>Reinhart Koselleck, em <em>Futuro passado</em> (1979), propôs as categorias de "espaço de experiência" e "horizonte de expectativa" para descrever como cada época se relaciona com seu passado e seu futuro ${tag('interpretacao')}. François Hartog chamou de "regimes de historicidade" (2003) essas formas de articular passado, presente e futuro ${tag('interpretacao')}. São instrumentos para estudar não só datas, mas a consciência histórica de uma sociedade.</p>`,
    leituras: [{ texto: 'Reinhart Koselleck, Futuro passado (1979).' }, { texto: 'François Hartog, Regimes de historicidade (2003).' }],
    exercicios: [
      mc('A Hégira, início do calendário islâmico, data de:', ['476', '622', '800', '1054'], 1, '622.'),
      mc('A contagem por Olimpíadas começa tradicionalmente em:', ['776 a.C.', '753 a.C.', '509 a.C.', '323 a.C.'], 0, '776 a.C.; 753 a.C. é a fundação tradicional de Roma.'),
      mc('"Espaço de experiência" e "horizonte de expectativa" são categorias de:', ['Koselleck', 'Braudel', 'Cellarius', 'Beda'], 0, 'Futuro passado (1979).'),
      disc('Converta e compare: escolha um acontecimento datado em dois calendários diferentes (por exemplo, juliano e gregoriano, ou cristão e islâmico) e explique os passos da conversão e as fontes de erro.', ['Identifica os dois calendários', 'Explica a conversão', 'Aponta fontes de erro', 'Usa exemplo real'])],
  },
}),

aula({
  id: 'h1-3', titulo: 'Crítica das fontes: autenticidade, autoria e credibilidade', duracao: '120 min',
  aprendera: ['Aplicar a crítica externa (autenticidade, data, procedência)', 'Aplicar a crítica interna (sentido, intenção, credibilidade)', 'Explicar como Lorenzo Valla demonstrou a falsificação da Doação de Constantino', 'Confrontar testemunhos divergentes'],
  prereq: ['Aulas anteriores do módulo', 'Lógica: falácias de autoridade e de ataque à pessoa (Degrau 4)'],
  explicacao: `
<h3>O problema</h3>
<p>Fontes podem ser falsas, mal datadas, copiadas com erros, parciais ou simplesmente enganadas. A crítica das fontes é o conjunto de perguntas que o historiador faz antes de usar um documento como prova. Ela não é desconfiança universal: é a verificação proporcional ao que se quer afirmar.</p>

<h3>Crítica externa: o documento como objeto</h3>
<ul>
<li><strong>Autenticidade</strong>: o documento é o que pretende ser? Suporte, escrita, língua e fórmulas condizem com a época?</li>
<li><strong>Data e lugar</strong>: quando e onde foi produzido?</li>
<li><strong>Autoria e procedência</strong>: quem o fez e por que caminho chegou até nós (arquivo, cópia, edição)?</li>
<li><strong>Integridade</strong>: o texto que lemos é o original, uma cópia fiel, uma tradução, uma versão alterada?</li>
</ul>
<p>O caso clássico é a <strong>Doação de Constantino</strong>, documento segundo o qual o imperador teria cedido ao papa Silvestre o governo do Ocidente. Em 1440, o humanista Lorenzo Valla demonstrou que se tratava de uma falsificação: o latim usava palavras e construções que não existiam no século IV, e o texto continha anacronismos ${tag('fato')}. Hoje se considera que foi composto provavelmente no século VIII ${tag('fato')}. O exemplo mostra que a filologia — o estudo da língua dos textos — é instrumento do historiador.</p>
<p>No século XVII, o beneditino Jean Mabillon fundou a <strong>diplomática</strong>, a disciplina que estuda a forma dos documentos para distinguir os autênticos dos falsos, no tratado <em>De re diplomatica</em> (1681) ${tag('fato')}. Os jesuítas bolandistas, que desde 1643 publicam as <em>Acta Sanctorum</em>, aplicaram a mesma crítica às vidas de santos, separando os relatos antigos e fiáveis das lendas posteriores ${tag('fato')}. A crítica histórica moderna deve muito a eruditos católicos.</p>

<h3>Crítica interna: o que o documento diz e quanto vale</h3>
<ul>
<li><strong>Sentido</strong>: o que o texto quer dizer na língua e nas convenções de seu tempo? (evitar anacronismo)</li>
<li><strong>Intenção</strong>: para quem e para quê foi escrito? Um relatório para pedir verbas tende a exagerar dificuldades; uma carta ao rei, a valorizar o próprio serviço.</li>
<li><strong>Competência</strong>: o autor estava em condições de saber? Viu, ouviu dizer, copiou?</li>
<li><strong>Sinceridade e exatidão</strong>: tinha motivos para mentir ou se enganar? O que diz é coerente com outras fontes?</li>
</ul>

<h3>Confronto de fontes</h3>
<p>Uma única fonte raramente basta. A regra prática é buscar <strong>testemunhos independentes</strong>: duas crônicas que copiam a mesma fonte valem como uma só. Quando as fontes divergem, o historiador não "tira a média": pergunta qual tinha mais competência e menos interesse em deformar, e se há vestígios involuntários que decidam a questão.</p>
<p>No século XIX, Leopold von Ranke resumiu o ideal de narrar o passado "como propriamente foi" (1824), e Langlois e Seignobos sistematizaram as regras da crítica na <em>Introdução aos estudos históricos</em> (1898) ${tag('fato')}. O século XX criticou a ilusão de que os documentos "falam sozinhos": é o historiador que os interroga a partir de perguntas ${tag('interpretacao')}. As duas lições se completam: perguntas próprias, mas respostas tiradas das fontes.</p>`,
  vocabulario: [
    ['Crítica externa', 'Exame da autenticidade, data, autoria, procedência e integridade do documento.'],
    ['Crítica interna', 'Exame do sentido, da intenção, da competência e da credibilidade do conteúdo.'],
    ['Filologia', 'Estudo da língua e da transmissão dos textos.'],
    ['Diplomática', 'Disciplina que estuda a forma dos documentos (Mabillon, 1681).'],
    ['Testemunhos independentes', 'Fontes que não derivam umas das outras.'],
    ['Interpolação', 'Trecho acrescentado a um texto por outra mão.'],
  ],
  exemplos: `<p><strong>Duas versões de Constantino:</strong> Lactâncio e Eusébio narram de modos diferentes o sinal que Constantino teria visto antes da batalha da Ponte Mílvia (312). O historiador registra as duas, data cada uma, pergunta por que diferem (gênero, data de redação, fontes de cada autor) e distingue o fato bem atestado (a vitória e a adoção de um sinal cristão) das circunstâncias discutidas.</p>`,
  contexto: `<p>A crítica documental nasceu da necessidade prática de decidir direitos (propriedades, privilégios), da edição de textos antigos pelos humanistas e da erudição eclesiástica. No Brasil, o trabalho de edição crítica de documentos coloniais foi impulsionado pelo IHGB e, no século XX, por historiadores como Capistrano de Abreu, que editou e anotou fontes da colonização ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que duas fontes dependentes valem como uma', tag: 'argumento',
    premissas: ['O valor de um testemunho está em informar o fato a partir de acesso próprio a ele.', 'Uma fonte que copia outra não tem acesso próprio ao fato; repete o acesso da primeira.', 'Repetir uma informação não aumenta o acesso ao fato.'],
    conclusao: 'Logo, uma fonte copiada de outra não confirma a original; só testemunhos independentes se confirmam.',
    nota: 'Erro frequente em debates públicos: citar dez sites que repetem a mesma notícia como se fossem dez provas.',
  },
  objecoes: [
    { objecao: 'Se um documento é falso, ele é inútil para o historiador.', tag: 'debate',
      resposta: 'É inútil como prova do que afirma, mas é fonte valiosa sobre quem o falsificou, quando e por quê. A Doação de Constantino é documento importante para a história política medieval, justamente como falsificação usada em disputas de poder.' },
  ],
  aplicacao: `<p>Escolha uma notícia histórica que circula em redes sociais (uma frase atribuída a um personagem, por exemplo). Aplique as quatro perguntas da crítica externa e as quatro da interna. Registre no Caderno se a atribuição se sustenta e qual seria a fonte primária necessária para confirmá-la.</p>`,
  fonte: {
    obra: 'Lorenzo Valla, Sobre a falsa e mentirosa Doação de Constantino (1440), trechos sobre a linguagem do documento', link: null,
    orientacao: `<p>Leia os trechos em que Valla examina palavras e expressões da Doação. Liste três argumentos filológicos e classifique-os como crítica externa ou interna. Observe também o tom polêmico do texto: a crítica de Valla tinha motivação política, o que não invalida seus argumentos — eles se verificam no próprio documento.</p>`,
  },
  perguntas: [
    { p: 'Que perguntas compõem a crítica externa?', r: 'Autenticidade, data e lugar, autoria e procedência, integridade.' },
    { p: 'O que Valla demonstrou em 1440?', r: 'Que a Doação de Constantino era falsa, por sua linguagem e anacronismos.' },
    { p: 'Por que fontes dependentes não se confirmam?', r: 'Porque repetem o acesso de uma só fonte ao fato.' },
  ],
  exercicios: [
    mc('Verificar se a linguagem de um documento condiz com a época em que se diz escrito é crítica:', ['Interna', 'Externa', 'Estatística', 'Oral'], 1, 'Autenticidade é crítica externa; a filologia é seu instrumento.'),
    mc('Lorenzo Valla demonstrou a falsificação da Doação de Constantino em:', ['325', '800', '1440', '1681'], 2, '1440. 1681 é o De re diplomatica de Mabillon.'),
    mc('A diplomática como disciplina foi fundada por:', ['Ranke', 'Mabillon', 'Bloch', 'Valla'], 1, 'Jean Mabillon, De re diplomatica (1681).'),
    mc('Duas crônicas que copiam a mesma fonte, sobre um fato:', ['Valem como dois testemunhos independentes', 'Valem, no essencial, como um só testemunho', 'Anulam-se mutuamente', 'Provam o fato com certeza'], 1, 'Só testemunhos independentes se confirmam.'),
    mc('Um documento falso, para o historiador:', ['Deve ser destruído', 'É fonte sobre quem o falsificou e por quê', 'Prova o que afirma', 'É irrelevante'], 1, 'Falso como prova do conteúdo, verdadeiro como vestígio de uma ação.'),
    disc('Escolha um documento (pode ser a Carta de Caminha, que estudará na próxima aula, ou outro) e aplique-lhe a crítica externa e interna, mostrando para cada pergunta o que se sabe e o que ainda faltaria saber.', ['Aplica as quatro perguntas externas', 'Aplica as quatro internas', 'Distingue o que se sabe do que falta saber', 'Conclui sobre o uso possível do documento']),
  ],
  resumo: ['Crítica externa: autenticidade, data, autoria, integridade.', 'Crítica interna: sentido, intenção, competência, sinceridade.', 'Valla (1440) e a Doação de Constantino.', 'Mabillon (1681) e os bolandistas.', 'Só testemunhos independentes se confirmam.'],
  referencias: [
    { texto: 'Lorenzo Valla, De falso credita et ementita Constantini donatione (1440).' },
    { texto: 'Jean Mabillon, De re diplomatica (1681).' },
    { texto: 'Charles-Victor Langlois e Charles Seignobos, Introdução aos estudos históricos (1898).' },
    { texto: 'Marc Bloch, Apologia da história (1949), cap. III, "A crítica".' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler a fonte orientada'],
  revisao: [['Crítica externa', 'Autenticidade, data, autoria, integridade.'], ['Crítica interna', 'Sentido, intenção, competência, sinceridade.'], ['Doação de Constantino', 'Falsificação demonstrada por Valla em 1440.']],
  avancado: {
    texto: `<h3>O paradigma indiciário</h3>
<p>Carlo Ginzburg, no ensaio "Sinais: raízes de um paradigma indiciário" (1979), aproximou o método do historiador do médico e do detetive: inferir realidades não observáveis a partir de indícios mínimos ${tag('interpretacao')}. Em <em>O queijo e os vermes</em> (1976), reconstruiu as ideias de um moleiro friulano do século XVI a partir dos processos da Inquisição que o condenaram, lendo os documentos "a contrapelo", isto é, contra a intenção de quem os produziu ${tag('fato')}.</p>
<h3>Os silêncios do arquivo</h3>
<p>Michel-Rolph Trouillot, em <em>Silencing the Past</em> (1995), mostrou que os silêncios entram na história em vários momentos: na produção das fontes, na formação dos arquivos, na seleção dos fatos e na redação da narrativa ${tag('interpretacao')}. A crítica de fontes inclui, portanto, perguntar o que não foi registrado e por quê.</p>`,
    leituras: [{ texto: 'Carlo Ginzburg, "Sinais: raízes de um paradigma indiciário" (1979), em Mitos, emblemas, sinais.' }, { texto: 'Carlo Ginzburg, O queijo e os vermes (1976).' }, { texto: 'Michel-Rolph Trouillot, Silencing the Past (1995).' }],
    exercicios: [
      mc('O queijo e os vermes reconstrói as ideias de um moleiro a partir de:', ['Suas memórias publicadas', 'Processos da Inquisição', 'Estatísticas censitárias', 'Entrevistas orais'], 1, 'Leitura a contrapelo de documentos produzidos pelos juízes.'),
      mc('O "paradigma indiciário" é uma proposta de:', ['Ginzburg', 'Mabillon', 'Valla', 'Ranke'], 0, 'Ensaio de 1979.'),
      mc('Para Trouillot, os silêncios entram na história:', ['Só na redação final', 'Em vários momentos, da produção das fontes à narrativa', 'Nunca, se o arquivo for oficial', 'Apenas por censura política'], 1, 'Silencing the Past (1995).'),
      disc('Escolha um grupo pouco presente nos arquivos coloniais e explique como um historiador poderia estudá-lo "a contrapelo", indicando que tipo de fonte usaria e quais cuidados tomaria.', ['Identifica o silêncio', 'Indica fonte possível', 'Explica a leitura a contrapelo', 'Aponta limites e cuidados'])],
  },
}),

aula({
  id: 'h1-4', titulo: 'Prática de crítica documental: a Carta de Pero Vaz de Caminha', duracao: '120 min',
  aprendera: ['Situar a Carta de Caminha (autor, data, destinatário, procedência)', 'Identificar sua intenção e seus limites como testemunho', 'Confrontá-la com outras fontes da viagem de Cabral', 'Distinguir fato, interpretação e debate sobre o "descobrimento"'],
  prereq: ['Crítica das fontes (aula anterior)'],
  explicacao: `
<h3>O documento</h3>
<p>A carta foi escrita por <strong>Pero Vaz de Caminha</strong>, escrivão da armada de Pedro Álvares Cabral, ao rei <strong>D. Manuel I</strong>, e está datada de <strong>1º de maio de 1500</strong>, em Porto Seguro ${tag('fato')}. Relata a chegada à terra (avistada em 22 de abril), os contatos com os indígenas e a celebração da missa ${tag('fato')}. O original manuscrito conserva-se no Arquivo Nacional da Torre do Tombo, em Lisboa ${tag('fato')}. Ficou inédita por três séculos: foi publicada pela primeira vez em 1817, pelo padre Manuel Aires de Casal, na <em>Corografia Brasílica</em> ${tag('fato')}. Caminha morreu ainda em 1500, em Calicute, na Índia, aonde a armada seguiu ${tag('fato')}.</p>

<h3>Crítica externa</h3>
<ul>
<li><strong>Autenticidade e procedência</strong>: manuscrito original conservado em arquivo régio, com tradição documental conhecida.</li>
<li><strong>Integridade</strong>: as edições modernas partem do original; leituras de palavras difíceis variam entre editores, e por isso é bom usar edição que indique seus critérios.</li>
<li><strong>Data e lugar</strong>: o próprio texto os declara; coincidem com outras fontes da viagem.</li>
</ul>

<h3>Crítica interna</h3>
<ul>
<li><strong>Destinatário e intenção</strong>: é uma carta oficial ao rei, que deveria informá-lo sobre a terra e também mostrar o zelo do autor. No fim, Caminha pede ao rei que mande vir da ilha de São Tomé seu genro, Jorge de Osório ${tag('fato')}: a carta tem também um interesse pessoal.</li>
<li><strong>Competência</strong>: Caminha viu o que descreve, mas apenas o litoral, durante cerca de dez dias, e sem entender a língua dos indígenas. O que diz sobre suas crenças ou costumes é interpretação de observador externo, não informação vinda deles.</li>
<li><strong>Vocabulário e mentalidade</strong>: descreve com categorias europeias e cristãs (inocência, nudez, possibilidade de conversão). Isso é fonte para conhecer a visão portuguesa tanto quanto os povos descritos ${tag('interpretacao')}.</li>
</ul>

<h3>Confronto com outras fontes</h3>
<p>A viagem é atestada também pela <strong>Relação do Piloto Anônimo</strong> e pela <strong>carta de Mestre João</strong>, físico e astrônomo da armada, que descreve as estrelas do céu austral ${tag('fato')}. São testemunhos independentes quanto aos fatos principais (data, local, contato) e permitem verificar a cronologia da carta.</p>

<h3>Um debate aberto</h3>
<p>Houve <em>intenção</em> de chegar à terra, ou a armada se desviou ao contornar as calmarias? O Tratado de Tordesilhas (1494) já dividia as terras a descobrir entre Portugal e Castela, e alguns historiadores sustentam que os portugueses suspeitavam de terras a oeste ${tag('debate')}. Não há documento que resolva a questão com certeza: é um caso típico em que o historiador expõe as hipóteses, as evidências de cada uma e o grau de apoio, sem transformar hipótese em fato. Da mesma forma, os termos "descobrimento", "achamento" (usado na época) e "chegada" carregam perspectivas diferentes sobre a mesma cronologia ${tag('debate')}.</p>`,
  vocabulario: [
    ['Escrivão da armada', 'Oficial encarregado dos registros da expedição.'],
    ['Achamento', 'Termo usado na época para a chegada a uma terra.'],
    ['Edição crítica', 'Edição que estabelece o texto e declara seus critérios.'],
    ['Tratado de Tordesilhas', 'Acordo luso-castelhano de 1494 sobre a divisão das terras.'],
    ['Visão do outro', 'Descrição de um povo pelas categorias de quem o observa.'],
  ],
  exemplos: `<p>Compare duas frases possíveis de um trabalho escolar: "Os indígenas não tinham religião, segundo Caminha" e "Caminha afirma que os indígenas não tinham crença que ele reconhecesse, o que reflete os limites de sua observação de poucos dias e sem a língua". A segunda atribui a afirmação, situa-a e mede sua credibilidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> a armada de Cabral seguia para a Índia, na rota aberta por Vasco da Gama (1497–1499); a expansão marítima ibérica é o contexto global da carta. <strong>No Brasil:</strong> a carta tornou-se, a partir do século XIX, um texto fundador da memória nacional — exemplo de como um documento ganha novos sentidos conforme as épocas que o leem ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'O que a carta prova e o que não prova', tag: 'argumento',
    premissas: ['Caminha foi testemunha ocular do litoral entre 22 de abril e 1º de maio de 1500.', 'Ele não falava a língua dos indígenas e não percorreu o interior.', 'Um testemunho é competente sobre o que o autor pôde observar e entender.'],
    conclusao: 'Logo, a carta é forte para datas, lugar e gestos observados, e fraca para crenças, organização social e sentido das práticas indígenas.',
    nota: 'Para estes últimos, o historiador recorre a outras fontes (arqueologia, relatos posteriores com domínio da língua, etnografia), sempre com a mesma crítica.',
  },
  objecoes: [
    { objecao: 'Como foi escrita por um colonizador, a carta não serve para nada.', tag: 'debate',
      resposta: 'Ela é parcial, como toda fonte; por isso é preciso medir o que prova. Para a cronologia da chegada e para a visão portuguesa da terra, é fonte de primeira ordem.' },
  ],
  aplicacao: `<p>Leia a carta (ou trechos indicados) e produza uma ficha crítica com quatro colunas: o que Caminha afirma; se viu ou deduziu; que interesse poderia influir; outra fonte que confirme ou conteste. Faça ao menos oito linhas da tabela no Caderno.</p>`,
  fonte: {
    obra: 'Pero Vaz de Caminha, Carta a el-rei D. Manuel (1º de maio de 1500)', link: null,
    orientacao: `<p>Use uma edição que indique seus critérios (edições acadêmicas e a transcrição do Arquivo Nacional da Torre do Tombo). Leia o início (a viagem e a chegada), os encontros com os indígenas, a descrição da missa e o parágrafo final, com o pedido sobre Jorge de Osório.</p>`,
  },
  perguntas: [
    { p: 'Quando e onde a carta foi datada?', r: '1º de maio de 1500, em Porto Seguro.' },
    { p: 'Quando foi publicada pela primeira vez?', r: 'Em 1817, por Aires de Casal, na Corografia Brasílica.' },
    { p: 'Por que a carta é fraca sobre as crenças indígenas?', r: 'Caminha não falava a língua, observou poucos dias e só o litoral, e descrevia com categorias europeias.' },
  ],
  exercicios: [
    mc('A Carta de Caminha foi dirigida a:', ['D. João III', 'D. Manuel I', 'Pedro Álvares Cabral', 'Papa Alexandre VI'], 1, 'Ao rei D. Manuel I.'),
    mc('O original da carta conserva-se:', ['Na Biblioteca Nacional do Rio de Janeiro', 'No Arquivo Nacional da Torre do Tombo, em Lisboa', 'No Vaticano', 'Em Porto Seguro'], 1, 'Na Torre do Tombo.'),
    mc('A primeira publicação da carta ocorreu em:', ['1500', '1549', '1817', '1889'], 2, 'Em 1817, na Corografia Brasílica de Aires de Casal.'),
    mc('O pedido final sobre Jorge de Osório mostra que a carta:', ['É falsa', 'Também tinha interesse pessoal do autor', 'Foi escrita pelo rei', 'É um testemunho involuntário'], 1, 'A intenção do autor faz parte da crítica interna.'),
    mc('Sobre a intencionalidade da chegada de Cabral, o correto é dizer que:', ['Está provada por documento', 'Está refutada por documento', 'É questão em debate, sem documento decisivo', 'Não interessa à história'], 2, 'Expõem-se as hipóteses e as evidências, sem transformar hipótese em fato.'),
    disc('Redija uma análise crítica de uma página sobre a Carta de Caminha: contexto, crítica externa, crítica interna, confronto com outra fonte da viagem e o que a carta permite e não permite afirmar.', ['Contexto correto e datado', 'Crítica externa e interna', 'Confronto com fonte independente', 'Conclusão proporcional às provas']),
  ],
  resumo: ['Caminha, escrivão da armada; carta de 1º de maio de 1500 a D. Manuel I.', 'Original na Torre do Tombo; publicada em 1817.', 'Forte para datas e gestos observados; fraca para crenças indígenas.', 'Confronto: Piloto Anônimo e Mestre João.', 'Intencionalidade: debate aberto.'],
  referencias: [
    { texto: 'Pero Vaz de Caminha, Carta a el-rei D. Manuel (1500), Arquivo Nacional da Torre do Tombo.' },
    { texto: 'Manuel Aires de Casal, Corografia Brasílica (1817).' },
    { texto: 'Relação do Piloto Anônimo e Carta de Mestre João (1500), em coletâneas de fontes da viagem de Cabral.' },
    { texto: 'Capistrano de Abreu, Capítulos de história colonial (1907).' },
    { texto: 'Boris Fausto, História do Brasil (1994), cap. 1.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler a carta (trechos indicados)'],
  revisao: [['Carta de Caminha', '1º de maio de 1500, a D. Manuel I; Torre do Tombo; publicada em 1817.'], ['Limites do testemunho', 'Poucos dias, só o litoral, sem a língua.'], ['Outras fontes da viagem', 'Piloto Anônimo; Mestre João.']],
  avancado: {
    texto: `<h3>Outras fontes do Brasil quinhentista</h3>
<ul>
<li><strong>Hans Staden</strong>, <em>Duas viagens ao Brasil</em> (1557): relato de um artilheiro alemão que foi prisioneiro dos tupinambás ${tag('fato')}. Sua credibilidade sobre a antropofagia e os ritos é discutida: há passagens confirmadas por outras fontes e outras moldadas para o público europeu ${tag('debate')}.</li>
<li><strong>Jean de Léry</strong>, <em>Viagem à terra do Brasil</em> (1578): pastor calvinista da França Antártica, observador minucioso dos costumes tupinambás ${tag('fato')}.</li>
<li><strong>Pero de Magalhães Gândavo</strong>, <em>História da província Santa Cruz</em> (1576): primeira história impressa do Brasil por um português ${tag('fato')}.</li>
<li><strong>Cartas jesuíticas</strong>, a partir da chegada de Manuel da Nóbrega em 1549: fontes ricas sobre aldeamentos e línguas, escritas com objetivos missionários e institucionais ${tag('fato')}.</li>
</ul>
<p>Confrontar autores de religiões, nações e interesses diferentes (um católico português, um calvinista francês, um luterano alemão) é o modo de separar o que é observação compartilhada do que é marca de cada perspectiva ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Hans Staden, Duas viagens ao Brasil (1557).' }, { texto: 'Jean de Léry, Viagem à terra do Brasil (1578).' }, { texto: 'Pero de Magalhães Gândavo, História da província Santa Cruz (1576).' }],
    exercicios: [
      mc('Jean de Léry esteve no Brasil como:', ['Jesuíta português', 'Pastor calvinista da França Antártica', 'Artilheiro alemão', 'Escrivão da armada de Cabral'], 1, 'Viagem à terra do Brasil (1578).'),
      mc('Hans Staden publicou seu relato em:', ['1500', '1557', '1578', '1817'], 1, '1557.'),
      mc('Os jesuítas chegaram ao Brasil, com Manuel da Nóbrega, em:', ['1500', '1532', '1549', '1580'], 2, '1549, com o governador-geral Tomé de Sousa.'),
      disc('Compare o que Staden e Léry dizem sobre um mesmo costume tupinambá. Onde concordam, onde divergem e como a perspectiva de cada autor explica a divergência?', ['Escolhe costume e cita os dois', 'Identifica concordâncias', 'Explica divergências pela perspectiva', 'Conclusão sobre credibilidade'])],
  },
}),

avaliacao('h1-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre fontes, tempo histórico e crítica documental, e duas discursivas que pedem aplicar o método a documentos.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Refaça a ficha crítica da Carta de Caminha.</li><li>Releia Tucídides I, 22.</li></ul>`,
[
  disc('Escolha um documento brasileiro de qualquer época (uma lei, uma carta, um registro paroquial, uma notícia de jornal) e faça sua crítica completa: externa, interna e confronto com outra fonte. Conclua indicando o que o documento permite afirmar e com que grau de segurança.', ['Crítica externa completa', 'Crítica interna completa', 'Confronto com fonte independente', 'Conclusão proporcional às provas', 'Distingue fato, interpretação e hipótese']),
  disc('Compare a periodização política da história do Brasil com uma periodização econômica: o que cada uma mostra e o que esconde? Use pelo menos dois exemplos datados.', ['Expõe as duas periodizações', 'Dá dois exemplos com datas', 'Mostra ganhos e limites de cada uma', 'Conclusão fundamentada']),
]),
];
