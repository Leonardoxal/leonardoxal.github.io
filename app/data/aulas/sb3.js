// Simbologia III — culturas, política, comunicação e projeto final (itens 9 a 12 da trilha de Simbologia).
// A avaliação final integra SB1 a SB3. Nenhuma origem comum de símbolos é afirmada sem prova.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'sb3-1', titulo: 'Símbolos e mitologias em diferentes culturas: Eliade, a árvore e os riscos do comparativismo', duracao: '150 min',
  aprendera: ['Expor a teoria do sagrado e do símbolo de Mircea Eliade', 'Comparar o símbolo da árvore em duas tradições com fontes', 'Identificar os riscos do comparativismo', 'Estudar símbolos indígenas por fontes etnográficas'],
  prereq: ['Simbologia II (módulo SB2)'],
  explicacao: `
<h3>O problema</h3>
<p>Árvores, montanhas, águas e luz aparecem como símbolos em muitas culturas. Isso prova uma origem comum, um sentido universal ou apenas semelhanças da experiência humana? A comparação exige método.</p>
<h3>Eliade</h3>
<p>Mircea Eliade (1907–1986), historiador das religiões romeno, sustentou em <em>Imagens e símbolos</em> (1952) e <em>O sagrado e o profano</em> (1957) que o homem religioso vive o espaço e o tempo de modo qualitativo, com centros sagrados e um "eixo do mundo" (<em>axis mundi</em>) que liga céu, terra e mundo inferior ${tag('interpretacao')}. Sua obra foi criticada por generalizar a partir de casos escolhidos ${tag('debate')}.</p>
<h3>A árvore em duas tradições</h3>
<ul>
<li><strong>Bíblia e tradição cristã</strong>: a árvore da vida no Éden (Gn 2,9) e na Jerusalém celeste (Ap 22,2); a liturgia canta a cruz como árvore da vida, no hino <em>Crux fidelis</em>, de Venâncio Fortunato (século VI) ${tag('fato')}.</li>
<li><strong>Mitologia nórdica</strong>: Yggdrasil, o freixo que sustenta os mundos, descrito na <em>Edda poética</em> e na <em>Edda em prosa</em> de Snorri Sturluson (século XIII) ${tag('fato')}.</li>
</ul>
<p>Semelhança: a árvore como eixo que une níveis da realidade. Diferença: na tradição cristã, a árvore da cruz é um acontecimento histórico da salvação; Yggdrasil pertence a uma cosmologia mítica que termina no Ragnarök ${tag('interpretacao')}. Afirmar que uma "deriva" da outra exigiria prova documental que não existe ${tag('argumento')}.</p>
<h3>Riscos do comparativismo</h3>
<ol>
<li>Escolher só os casos que confirmam a tese.</li>
<li>Arrancar o símbolo do seu contexto ritual e textual.</li>
<li>Concluir origem comum da semelhança.</li>
<li>Usar fontes de segunda mão sem verificar.</li>
</ol>
<h3>Povos indígenas</h3>
<p>Símbolos de povos indígenas do Brasil devem ser estudados pelas fontes etnográficas de cada povo, não por generalizações sobre "os índios". Claude Lévi-Strauss, em <em>O cru e o cozido</em> (1964), parte de um mito bororo ${tag('fato')}; Curt Nimuendajú documentou mitos e ritos de vários povos ${tag('fato')}.</p>`,
  vocabulario: [
    ['Axis mundi', 'Eixo do mundo, que liga níveis da realidade (Eliade).'],
    ['Hierofania', 'Manifestação do sagrado, em Eliade.'],
    ['Comparativismo', 'Método de comparar símbolos e mitos de várias culturas.'],
    ['Etnografia', 'Descrição de um povo a partir do trabalho de campo.'],
    ['Yggdrasil', 'Árvore cósmica da mitologia nórdica.'],
  ],
  exemplos: `<p><strong>Comparação bem feita (estrutura):</strong> (1) cada símbolo descrito na sua fonte (Gn 2,9; Ap 22,2; Edda); (2) contexto ritual e textual de cada um; (3) semelhanças observadas; (4) diferenças; (5) o que se pode concluir — "função simbólica parecida" — e o que não se pode — "origem comum". Cada passo com referência.</p>`,
  contexto: `<p><strong>No mundo:</strong> a história comparada das religiões é disciplina acadêmica com métodos próprios e debates sobre seus limites. <strong>No Brasil:</strong> a Constituição de 1988 (art. 231) reconhece aos índios sua organização social, costumes, línguas, crenças e tradições ${tag('fato')}; o respeito às fontes de cada povo é também exigência ética.</p>`,
  argumento: {
    titulo: 'Por que semelhança não prova origem comum', tag: 'argumento',
    premissas: ['Símbolos semelhantes podem surgir de experiências humanas semelhantes (a árvore cresce para o alto, a água purifica).', 'Também podem surgir por contato histórico entre culturas.', 'Só documentos de contato ou transmissão permitem decidir entre as duas explicações.'],
    conclusao: 'Logo, sem documentos de transmissão, a semelhança autoriza falar de função parecida, não de origem comum.',
    nota: 'Aplica a distinção entre fato, interpretação e hipótese usada em todo o curso.',
  },
  objecoes: [
    { objecao: 'Se todas as culturas têm símbolos parecidos, todas as religiões dizem a mesma coisa.', tag: 'debate',
      resposta: 'Semelhança de símbolos não implica identidade de crenças: a cruz cristã e Yggdrasil se parecem como "árvores-eixo", mas afirmam coisas diferentes sobre Deus, o mundo e a salvação. A Igreja reconhece o que há de verdadeiro nas outras religiões (Nostra Aetate, 2) sem igualá-las.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: compare o símbolo da árvore em duas tradições, com a estrutura de cinco passos e as fontes de cada uma. Termine dizendo o que a comparação permite concluir e o que não permite.</p>`,
  fonte: {
    obra: 'Mircea Eliade, O sagrado e o profano (1957), cap. I; Gênesis 2,9 e Apocalipse 22,2; Edda em prosa, "Gylfaginning"', link: null,
    orientacao: `<p>Em Eliade, localize as noções de hierofania e de axis mundi. Leia os dois textos bíblicos e o trecho da Edda sobre Yggdrasil. Registre as semelhanças e diferenças com citação.</p>`,
  },
  perguntas: [
    { p: 'O que é axis mundi em Eliade?', r: 'O eixo do mundo que liga céu, terra e mundo inferior.' },
    { p: 'Por que semelhança não prova origem comum?', r: 'Porque semelhanças podem vir de experiências humanas parecidas; só documentos de transmissão decidem.' },
    { p: 'Como estudar símbolos indígenas?', r: 'Pelas fontes etnográficas de cada povo, sem generalização.' },
  ],
  exercicios: [
    mc('O sagrado e o profano é de:', ['Lévi-Strauss', 'Eliade', 'Jung', 'Frazer'], 1, '1957.'),
    mc('Yggdrasil é descrita na:', ['Ilíada', 'Edda', 'Bíblia', 'Mahabharata'], 1, 'Mitologia nórdica.'),
    mc('A árvore da vida na Jerusalém celeste está em:', ['Gn 2,9', 'Ap 22,2', 'Sl 1,3', 'Jo 15,1'], 1, 'Apocalipse.'),
    mc('O cru e o cozido parte de um mito:', ['Tupi', 'Bororo', 'Guarani', 'Yanomami'], 1, 'Lévi-Strauss, 1964.'),
    mc('Concluir origem comum apenas por semelhança é:', ['Método correto', 'Risco do comparativismo', 'Exigência da etnografia', 'Doutrina'], 1, 'Falta prova de transmissão.'),
    disc('Entregue a comparação do símbolo da árvore em duas tradições, com os cinco passos e as fontes, indicando o que se pode e o que não se pode concluir.', ['Fontes de cada tradição', 'Contextos', 'Semelhanças e diferenças', 'Conclusão proporcional']),
  ],
  resumo: ['Eliade: hierofania, axis mundi (1952, 1957).', 'Árvore: Gn 2,9; Ap 22,2; Crux fidelis; Yggdrasil.', 'Semelhança não prova origem comum.', 'Riscos do comparativismo.', 'Povos indígenas: fontes etnográficas; CF art. 231.'],
  referencias: [
    { texto: 'Mircea Eliade, O sagrado e o profano (1957).' },
    { texto: 'Mircea Eliade, Imagens e símbolos (1952).' },
    { texto: 'Claude Lévi-Strauss, O cru e o cozido (1964).' },
    { texto: 'Concílio Vaticano II, Nostra Aetate (1965), n. 2.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação do símbolo da árvore', 'Ler o cap. I de O sagrado e o profano'],
  revisao: [['Axis mundi', 'Eixo do mundo.'], ['Comparativismo', 'Semelhança não é origem.'], ['Etnografia', 'Fontes de cada povo.']],
  avancado: {
    texto: `<h3>Jung e os arquétipos</h3>
<p>Carl Gustav Jung propôs que símbolos recorrentes expressariam arquétipos de um inconsciente coletivo ${tag('hipotese')}. A tese é influente nas artes e contestada por falta de verificação empírica ${tag('debate')}.</p>
<h3>Frazer</h3>
<p>James Frazer, em <em>O ramo de ouro</em> (1890), reuniu mitos de muitas culturas; seu método comparativo amplo é hoje criticado por arrancar os dados dos contextos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Mircea Eliade, Tratado de história das religiões (1949).' }],
    exercicios: [
      mc('Os arquétipos do inconsciente coletivo são:', ['Fato comprovado', 'Hipótese debatida', 'Doutrina', 'Lei'], 1, 'Jung.'),
      mc('O ramo de ouro é de:', ['Eliade', 'Frazer', 'Lévi-Strauss', 'Durkheim'], 1, '1890.'),
      mc('A crítica principal a Frazer é:', ['Falta de casos', 'Retirar dados dos contextos', 'Excesso de etnografia', 'Uso de estatística'], 1, 'Comparativismo amplo.'),
      disc('Avalie a hipótese junguiana dos arquétipos: o que afirma, que evidência teria de apresentar e uma objeção.', ['Hipótese exposta', 'Evidência necessária', 'Objeção', 'Grau de confiança'])],
  },
}),

aula({
  id: 'sb3-2', titulo: 'Símbolos políticos e nacionais: heráldica, a bandeira do Brasil e a memória coletiva', duracao: '150 min',
  aprendera: ['Usar o vocabulário básico da heráldica', 'Reconstituir a história da bandeira republicana pelos documentos', 'Distinguir intenção documentada e interpretação posterior', 'Analisar monumentos como lugares de memória'],
  prereq: ['Aula anterior', 'História V: Brasil republicano'],
  explicacao: `
<h3>O problema</h3>
<p>Bandeiras, brasões e hinos são símbolos com autor, data e lei. Por isso são o melhor campo para treinar a regra do curso: nenhuma interpretação sem documento.</p>
<h3>Heráldica</h3>
<p>A heráldica descreve brasões com vocabulário próprio: o <strong>escudo</strong> e suas partições; os <strong>esmaltes</strong>, divididos em metais (ouro e prata) e cores; e as figuras ${tag('fato')}. Uma regra tradicional evita sobrepor metal a metal ou cor a cor, para garantir a legibilidade ${tag('fato')}.</p>
<h3>Do Império à República</h3>
<p>A bandeira do Império, de 1822, teve o desenho associado a Jean-Baptiste Debret, com as armas imperiais sobre o losango ${tag('fato')}. A bandeira republicana foi adotada pelo Decreto nº 4, de 19 de novembro de 1889, que manteve o fundo verde e o losango amarelo e substituiu as armas pela esfera celeste com o lema "Ordem e Progresso" ${tag('fato')}.</p>
<h3>O lema e o positivismo</h3>
<p>O lema vem da fórmula de Auguste Comte, "o amor por princípio, a ordem por base, o progresso por fim" ${tag('fato')}. O projeto é atribuído a positivistas — Raimundo Teixeira Mendes, Miguel Lemos e o astrônomo Manuel Pereira Reis —, com desenho de Décio Villares ${tag('fato')}. A esfera representa o céu do Rio de Janeiro na manhã de 15 de novembro de 1889 ${tag('fato')}.</p>
<h3>A lei atual</h3>
<p>A Lei nº 5.700, de 1º de setembro de 1971, define os símbolos nacionais — bandeira, hino, armas e selo — e as regras de uso ${tag('fato')}. As estrelas foram atualizadas para representar as unidades da federação (hoje 27) ${tag('fato')}.</p>
<h3>Memória e disputa</h3>
<p>José Murilo de Carvalho, em <em>A formação das almas</em> (1990), mostrou a disputa de símbolos nos primeiros anos da República — a bandeira, a figura da República, Tiradentes como herói ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Heráldica', 'Arte e ciência dos brasões.'],
    ['Esmaltes', 'Metais e cores usados nos brasões.'],
    ['Lema', 'Frase inscrita num símbolo (Ordem e Progresso).'],
    ['Positivismo', 'Doutrina de Auguste Comte, influente na República brasileira.'],
    ['Lugar de memória', 'Monumento ou símbolo em que uma comunidade fixa sua memória.'],
  ],
  exemplos: `<p><strong>Intenção documentada x interpretação posterior:</strong> que o lema vem de Comte é fato documentado pelos próprios autores do projeto. Que a bandeira "representa a ordem divina" seria interpretação sem base nesses documentos — e contrária à intenção positivista. Separar os dois é o exercício central desta aula.</p>`,
  contexto: `<p><strong>No mundo:</strong> bandeiras nacionais foram criadas ou mudadas em revoluções e independências, e muitas têm lei própria de uso. <strong>No Brasil:</strong> a Lei nº 5.700/1971 regula o uso da bandeira, e a data de 19 de novembro é o Dia da Bandeira ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a intenção dos autores da bandeira se prova por documentos', tag: 'argumento',
    premissas: ['A bandeira de 1889 tem autores conhecidos que deixaram textos explicando o projeto.', 'O decreto de adoção fixa o desenho e o lema.', 'Interpretações posteriores sem apoio nesses textos não revelam a intenção dos autores.'],
    conclusao: 'Logo, a intenção da bandeira republicana deve ser reconstituída pelos documentos de 1889, e as leituras posteriores rotuladas como interpretação.',
    nota: 'O mesmo vale para qualquer símbolo com autoria documentada.',
  },
  objecoes: [
    { objecao: 'O sentido de um símbolo nacional é o que o povo vê nele hoje.', tag: 'debate',
      resposta: 'Os sentidos atuais são reais e podem ser estudados (sociologia, memória). Mas são outra pergunta: "o que significa hoje para muitos" não se confunde com "o que os autores quiseram", e cada uma exige suas fontes.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: reconstitua a história da bandeira republicana a partir do Decreto nº 4 (1889) e da Lei nº 5.700 (1971), indicando cada afirmação com o documento e separando intenção documentada e interpretação posterior.</p>`,
  fonte: {
    obra: 'Decreto nº 4, de 19 de novembro de 1889; Lei nº 5.700, de 1º de setembro de 1971; José Murilo de Carvalho, A formação das almas (1990), cap. sobre a bandeira', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Leia o decreto e os artigos da Lei 5.700 sobre a bandeira. Em José Murilo de Carvalho, identifique a disputa em torno do lema. Monte a linha do tempo com cada afirmação ligada à fonte.</p>`,
  },
  perguntas: [
    { p: 'Que decreto adotou a bandeira republicana?', r: 'O Decreto nº 4, de 19 de novembro de 1889.' },
    { p: 'De onde vem o lema "Ordem e Progresso"?', r: 'Da fórmula de Auguste Comte.' },
    { p: 'Quais são os símbolos nacionais pela Lei 5.700/1971?', r: 'Bandeira, hino, armas e selo.' },
  ],
  exercicios: [
    mc('A bandeira republicana foi adotada em:', ['15/11/1889', '19/11/1889', '7/9/1822', '1/9/1971'], 1, 'Decreto nº 4.'),
    mc('A esfera da bandeira representa o céu do Rio de Janeiro em:', ['7/9/1822', '15/11/1889', '13/5/1888', '1/1/1900'], 1, 'Manhã da Proclamação.'),
    mc('O desenho da bandeira imperial é associado a:', ['Debret', 'Décio Villares', 'Portinari', 'Aleijadinho'], 0, '1822.'),
    mc('Na heráldica, ouro e prata são:', ['Cores', 'Metais', 'Figuras', 'Partições'], 1, 'Esmaltes.'),
    mc('A formação das almas (1990) é de:', ['Sérgio Buarque', 'José Murilo de Carvalho', 'Gilberto Freyre', 'Boris Fausto'], 1, 'Imaginário da República.'),
    disc('Entregue a reconstituição da história da bandeira republicana com cada afirmação ligada ao documento, separando intenção documentada e interpretação posterior.', ['Documentos citados', 'Linha do tempo', 'Intenção x interpretação', 'Conclusão']),
  ],
  resumo: ['Heráldica: escudo, esmaltes, figuras; metal sobre cor.', 'Bandeira imperial (1822, Debret).', 'Decreto nº 4 (19/11/1889); lema de Comte; céu de 15/11/1889.', 'Lei 5.700/1971: bandeira, hino, armas, selo.', 'José Murilo de Carvalho (1990): disputa de símbolos.'],
  referencias: [
    { texto: 'Decreto nº 4, de 19 de novembro de 1889.' },
    { texto: 'Lei nº 5.700, de 1º de setembro de 1971.' },
    { texto: 'José Murilo de Carvalho, A formação das almas (1990).' },
    { texto: 'Pierre Nora (org.), Os lugares da memória (1984–1992).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a reconstituição da história da bandeira', 'Ler o decreto e a lei'],
  revisao: [['Decreto nº 4', '19/11/1889.'], ['Lema', 'Comte.'], ['Lei 5.700', 'Símbolos nacionais, 1971.']],
  avancado: {
    texto: `<h3>Lugares de memória</h3>
<p>Pierre Nora chamou de "lugares de memória" os monumentos, datas e símbolos em que uma comunidade fixa sua memória ${tag('fato')}. No Brasil, monumentos a figuras históricas passaram por disputas sobre o que devem lembrar ${tag('interpretacao')}.</p>
<h3>Brasões municipais</h3>
<p>Muitos municípios brasileiros têm brasão próprio, criado por lei municipal, com elementos da história local ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Pierre Nora (org.), Os lugares da memória (1984–1992).' }],
    exercicios: [
      mc('"Lugares de memória" é conceito de:', ['José Murilo de Carvalho', 'Pierre Nora', 'Eliade', 'Comte'], 1, 'Memória coletiva.'),
      mc('Brasões municipais são criados por:', ['Decreto federal', 'Lei municipal', 'Igreja', 'Costume apenas'], 1, 'Cada município.'),
      mc('Monumentos podem ser estudados como:', ['Lugares de memória', 'Signos naturais', 'Índices de clima', 'Mapas'], 0, 'Nora.'),
      disc('Analise o brasão ou um monumento do seu município: lei de criação, elementos, intenção documentada e leituras atuais.', ['Fonte legal', 'Elementos descritos', 'Intenção documentada', 'Leituras atuais'])],
  },
}),

aula({
  id: 'sb3-3', titulo: 'Semiótica aplicada: publicidade, marcas e propaganda política', duracao: '150 min',
  aprendera: ['Aplicar denotação, conotação e a tríade de Peirce a um anúncio', 'Explicar como marcas acumulam valor simbólico', 'Analisar propaganda política com critérios técnicos', 'Separar descrição semiótica e avaliação ética'],
  prereq: ['Aulas anteriores do módulo', 'Simbologia I: Peirce, Saussure e Barthes'],
  explicacao: `
<h3>O problema</h3>
<p>Anúncios, logotipos e peças de campanha são densos em signos e feitos para persuadir. A semiótica permite descrever como eles produzem sentido; a ética, julgar se o fazem com verdade.</p>
<h3>Retórica da imagem</h3>
<p>Em "Retórica da imagem" (1964), Barthes analisou um anúncio de massas italianas: a mensagem linguística, a imagem denotada (os produtos) e a imagem conotada ("italianidade", frescor) ${tag('fato')}. O texto da peça "ancora" o sentido da imagem, escolhendo entre leituras possíveis ${tag('fato')}.</p>
<h3>Marcas</h3>
<p>Uma marca é signo convencional que, pelo uso e pela publicidade, passa a conotar qualidades (confiança, status, juventude) ${tag('interpretacao')}. Parte do valor de mercado de empresas está nesse capital simbólico, registrado contabilmente como ativo intangível em certas situações ${tag('fato')}.</p>
<h3>Propaganda política</h3>
<p>A propaganda política usa símbolos (cores, gestos, slogans) para associar candidatos a valores. No Brasil, a Lei nº 9.504, de 1997, regula a propaganda eleitoral ${tag('fato')}. Na publicidade comercial, o Conselho Nacional de Autorregulamentação Publicitária (CONAR) aplica o Código Brasileiro de Autorregulamentação Publicitária ${tag('fato')}.</p>
<h3>Descrever e avaliar</h3>
<p>A análise semiótica descreve <em>como</em> a peça significa; a avaliação ética pergunta se ela respeita a verdade e a dignidade do destinatário ${tag('argumento')}. O Catecismo lembra que a informação deve servir à verdade e ao bem comum (CIC 2493–2499) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Ancoragem', 'Função do texto de fixar o sentido de uma imagem (Barthes).'],
    ['Capital simbólico', 'Valor que uma marca acumula pelos sentidos associados.'],
    ['Slogan', 'Frase curta de campanha ou marca.'],
    ['Autorregulamentação', 'Regras que o próprio setor publicitário adota e aplica.'],
    ['Persuasão', 'Ação de levar alguém a crer ou agir.'],
  ],
  exemplos: `<p><strong>Análise em dois tempos:</strong> descrição — um anúncio de banco mostra uma família sorrindo num campo ao amanhecer (denotação); conota segurança e futuro; o slogan ancora o sentido em "seu futuro". Avaliação — a peça informa as taxas e condições? Associa o produto a algo que ele não entrega? A primeira parte é técnica; a segunda, ética, com critérios explícitos.</p>`,
  contexto: `<p><strong>No mundo:</strong> redes sociais permitem publicidade dirigida a perfis específicos, o que levanta questões de transparência e privacidade. <strong>No Brasil:</strong> a Lei Geral de Proteção de Dados (Lei nº 13.709, de 2018) disciplina o uso de dados pessoais, inclusive em publicidade ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que descrever antes de julgar uma peça publicitária', tag: 'argumento',
    premissas: ['Para julgar se uma peça engana, é preciso saber o que ela afirma e sugere.', 'O que ela afirma e sugere é estabelecido pela análise de denotação, conotação e ancoragem.', 'Julgar sem essa análise é julgar uma peça imaginada.'],
    conclusao: 'Logo, a avaliação ética de uma peça depende de uma descrição semiótica prévia e correta.',
    nota: 'O mesmo princípio de "expor antes de avaliar" (sb2-3).',
  },
  objecoes: [
    { objecao: 'Toda publicidade é manipulação.', tag: 'debate',
      resposta: 'A persuasão é legítima quando apresenta razões e informações verdadeiras; torna-se manipulação quando engana ou explora fragilidades. A distinção exige analisar cada caso, não condenar o gênero inteiro.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise semioticamente uma campanha publicitária (comercial ou institucional), separando a descrição (denotação, conotação, ancoragem, tríade de Peirce) da avaliação ética com critérios explícitos.</p>`,
  fonte: {
    obra: 'Roland Barthes, "Retórica da imagem" (1964); Catecismo da Igreja Católica, §§ 2493–2499', link: null,
    orientacao: `<p>Em Barthes, siga a análise do anúncio em três mensagens e a noção de ancoragem. No Catecismo, identifique os deveres dos meios de comunicação e dos usuários. Aplique ambos à campanha escolhida.</p>`,
  },
  perguntas: [
    { p: 'O que é ancoragem em Barthes?', r: 'A função do texto de fixar o sentido de uma imagem entre leituras possíveis.' },
    { p: 'Que lei regula a propaganda eleitoral no Brasil?', r: 'A Lei nº 9.504, de 1997.' },
    { p: 'Por que descrever antes de avaliar?', r: 'Porque só se julga corretamente o que a peça de fato afirma e sugere.' },
  ],
  exercicios: [
    mc('"Retórica da imagem" é de:', ['Peirce', 'Barthes', 'Eco', 'Saussure'], 1, '1964.'),
    mc('O slogan que fixa o sentido de uma imagem exerce:', ['Ancoragem', 'Denotação', 'Indicialidade', 'Diacronia'], 0, 'Barthes.'),
    mc('A autorregulamentação publicitária no Brasil é aplicada pelo:', ['TSE', 'CONAR', 'Procon apenas', 'Anatel'], 1, 'Código de autorregulamentação.'),
    mc('A LGPD é a Lei:', ['9.504/1997', '13.709/2018', '5.700/1971', '8.078/1990'], 1, 'Proteção de dados.'),
    mc('A persuasão torna-se manipulação quando:', ['Apresenta razões', 'Engana ou explora fragilidades', 'Usa imagens', 'É comercial'], 1, 'Critério ético.'),
    disc('Entregue a análise semiótica de uma campanha, separando descrição (denotação, conotação, ancoragem, Peirce) e avaliação ética com critérios explícitos.', ['Descrição completa', 'Conceitos corretos', 'Avaliação com critérios', 'Separação entre as duas']),
  ],
  resumo: ['Barthes (1964): três mensagens e ancoragem.', 'Marcas e capital simbólico.', 'Propaganda: Lei 9.504/1997; CONAR.', 'LGPD (2018).', 'Descrever antes de avaliar; CIC 2493–2499.'],
  referencias: [
    { texto: 'Roland Barthes, "Retórica da imagem" (1964).' },
    { texto: 'Catecismo da Igreja Católica, §§ 2493–2499.', livro: 'cic' },
    { texto: 'Lei nº 9.504, de 1997 (Lei das Eleições).' },
    { texto: 'Lúcia Santaella, Semiótica aplicada (2002).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da campanha', 'Ler "Retórica da imagem"'],
  revisao: [['Ancoragem', 'Texto fixa a imagem.'], ['Lei 9.504', 'Propaganda eleitoral.'], ['CIC 2493–2499', 'Comunicação e verdade.']],
  avancado: {
    texto: `<h3>Semiótica e desinformação</h3>
<p>Peças de desinformação combinam índices aparentes (prints, "documentos") e conotações fortes para parecer verdadeiras ${tag('interpretacao')}. A verificação exige voltar à fonte primária, como nas aulas de método (h1-3, e5-3) ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Lúcia Santaella, Semiótica aplicada (2002).' }],
    exercicios: [
      mc('Um "print" de mensagem funciona como signo:', ['Icônico e aparentemente indicial', 'Apenas convencional', 'Sem relação com Peirce', 'Natural'], 0, 'Parece prova do fato.'),
      mc('Verificar uma peça suspeita exige:', ['Confiar na conotação', 'Voltar à fonte primária', 'Contar curtidas', 'Ver as cores'], 1, 'Método.'),
      mc('Semiótica aplicada (2002) é de:', ['Eco', 'Santaella', 'Barthes', 'Peirce'], 1, 'Autora brasileira.'),
      disc('Analise uma peça de desinformação real já desmentida: signos usados, como parecia verdadeira e como foi verificada.', ['Signos identificados', 'Mecanismo de credibilidade', 'Verificação', 'Lição'])],
  },
}),

aula({
  id: 'sb3-4', titulo: 'Investigação avançada e projeto final: ensaio sobre um símbolo', duracao: '180 min',
  aprendera: ['Escolher e delimitar um símbolo como objeto de pesquisa', 'Reunir fontes primárias, iconográficas e interpretações', 'Usar o Laboratório de Signos e Símbolos como caderno de campo', 'Redigir o ensaio segundo a rubrica'],
  prereq: ['Todas as aulas anteriores de Simbologia'],
  explicacao: `
<h3>O problema</h3>
<p>A trilha termina com uma investigação própria: um ensaio de 10 a 15 páginas sobre um símbolo, com fontes documentais e comparação de interpretações. Esta aula é o roteiro.</p>
<h3>1. Escolha do objeto</h3>
<p>"Símbolos cristãos" é tema; "o pelicano como símbolo eucarístico na arte e na liturgia" é problema. Delimite o símbolo, a tradição, o período e as fontes ${tag('argumento')}. Umberto Eco recomenda restringir o campo ${tag('interpretacao')}.</p>
<h3>2. Fontes</h3>
<ul>
<li><strong>Primárias textuais</strong>: Escritura, Padres, documentos da Igreja, leis, manifestos, hinos.</li>
<li><strong>Iconográficas</strong>: obras com local, data e autoria, de preferência vistas diretamente ou em acervos oficiais.</li>
<li><strong>Interpretações</strong>: estudos acadêmicos, comparados entre si.</li>
</ul>
<h3>3. Caderno de campo</h3>
<p>Registre no Laboratório de Signos e Símbolos cada ocorrência do símbolo: fonte, data, contexto, sentido proposto e tipo de sentido (doutrina, Escritura, história, interpretação ou hipótese). O Laboratório exige fonte para todo sentido que não seja hipótese ${tag('fato')}.</p>
<h3>4. Estrutura do ensaio</h3>
<p>Problema; estado da questão; fontes e método (semiótico, iconográfico, histórico); análise; comparação de interpretações; conclusão proporcional; referências segundo a ABNT (NBR 10520 e NBR 6023) ${tag('fato')}.</p>
<h3>Rubrica</h3>
<ul>
<li>Fontes documentais pertinentes e citadas.</li>
<li>Distinção clara entre doutrina, história, interpretação e hipótese.</li>
<li>Rigor da comparação: semelhanças e diferenças sem afirmar origem comum sem prova.</li>
<li>Uso correto do vocabulário semiótico e iconográfico.</li>
<li>Conclusão proporcional; redação clara; 10 a 15 páginas.</li>
</ul>`,
  vocabulario: [
    ['Caderno de campo', 'Registro sistemático das ocorrências e fontes de uma pesquisa.'],
    ['Fonte iconográfica', 'Imagem usada como documento, com local, data e autoria.'],
    ['Estado da questão', 'O que os estudos já disseram sobre o problema.'],
    ['Tipo de sentido', 'Doutrina, Escritura, história, interpretação ou hipótese.'],
    ['Conclusão proporcional', 'Conclusão que não afirma mais do que as fontes permitem.'],
  ],
  exemplos: `<p><strong>Uma entrada do caderno de campo:</strong> "Pelicano — hino Adoro te devote, estrofe 6 ('Pie pelicane, Iesu Domine'), atribuído a Santo Tomás de Aquino; tipo: interpretação tradicional na piedade eucarística; fonte: texto do hino na edição consultada; observação: a atribuição a Santo Tomás é tradicional e discutida." Cada entrada separa fato, tipo de sentido e incerteza.</p>`,
  contexto: `<p><strong>No mundo:</strong> acervos digitais de museus e bibliotecas permitem consultar obras e manuscritos. <strong>No Brasil:</strong> o Iphan e acervos de igrejas e museus de arte sacra (por exemplo, em Salvador, São Paulo e Minas Gerais) guardam fontes iconográficas para pesquisas de iniciação ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o caderno de campo protege contra a interpretação arbitrária', tag: 'argumento',
    premissas: ['Interpretações arbitrárias costumam nascer de ocorrências lembradas vagamente ou citadas sem fonte.', 'O caderno de campo exige registrar cada ocorrência com fonte e tipo de sentido.', 'Assim, cada afirmação do ensaio pode ser verificada.'],
    conclusao: 'Logo, o caderno de campo é instrumento de honestidade intelectual, não burocracia.',
    nota: 'É a função do Laboratório de Signos e Símbolos no app.',
  },
  objecoes: [
    { objecao: 'Um ensaio sobre símbolos deve ser livre e criativo, sem tantas regras.', tag: 'debate',
      resposta: 'A criatividade está na pergunta, na comparação e na escrita; as regras garantem que o leitor saiba o que é fonte e o que é proposta do autor. Liberdade sem distinção entre fato e interpretação engana o leitor.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto do ensaio: símbolo, tradição, período, pergunta, cinco fontes primárias ou iconográficas localizadas, duas interpretações a comparar e plano de seções. Abra a primeira entrada no Laboratório.</p>`,
  fonte: {
    obra: 'Umberto Eco, Como se faz uma tese (1977), caps. II e IV; Umberto Eco, Tratado geral de semiótica (1975), introdução', link: null,
    orientacao: `<p>Em Como se faz uma tese, leia a escolha do tema e o fichamento. Na introdução do Tratado, identifique os limites que Eco propõe para a semiótica. Aplique ambos ao seu pré-projeto.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre tema e problema no ensaio?', r: 'Tema é assunto amplo; problema é um símbolo delimitado em tradição, período e fontes.' },
    { p: 'O que registrar no caderno de campo?', r: 'Fonte, data, contexto, sentido proposto e tipo de sentido de cada ocorrência.' },
    { p: 'Qual a extensão do ensaio final?', r: 'De 10 a 15 páginas.' },
  ],
  exercicios: [
    mc('Qual destes é um problema, e não apenas tema?', ['Símbolos cristãos', 'Arte sacra', 'O pelicano como símbolo eucarístico na arte e na liturgia', 'A Idade Média'], 2, 'Delimitado.'),
    mc('Uma fonte iconográfica deve ter:', ['Só a imagem', 'Local, data e autoria', 'Apenas o título', 'Comentário pessoal'], 1, 'Documento.'),
    mc('No Laboratório, um sentido sem fonte só é aceito se for:', ['Doutrina', 'Hipótese', 'Escritura', 'História'], 1, 'Regra do Laboratório.'),
    mc('A norma da ABNT para citações é a:', ['NBR 6023', 'NBR 10520', 'NBR 14724', 'NBR 6028'], 1, 'A 6023 trata de referências.'),
    mc('Afirmar origem comum de dois símbolos exige:', ['Semelhança', 'Prova de transmissão', 'Intuição', 'Maioria dos autores'], 1, 'Regra da comparação.'),
    disc('Apresente o pré-projeto do ensaio: símbolo, tradição, período, pergunta, fontes localizadas, interpretações a comparar e plano de seções.', ['Problema delimitado', 'Fontes localizadas', 'Interpretações escolhidas', 'Plano coerente', 'Primeira entrada no Laboratório']),
  ],
  resumo: ['Do tema ao problema delimitado.', 'Fontes textuais, iconográficas e interpretações.', 'Laboratório como caderno de campo.', 'Estrutura do ensaio e ABNT.', 'Rubrica: fontes, distinções, comparação, conclusão.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
    { texto: 'Umberto Eco, Tratado geral de semiótica (1975).' },
    { texto: 'Wayne C. Booth, Gregory G. Colomb e Joseph M. Williams, A arte da pesquisa (1995).', livro: 'booth-pesquisa' },
    { texto: 'ABNT, NBR 10520 (citações) e NBR 6023 (referências).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Abrir a primeira entrada no Laboratório'],
  revisao: [['Caderno de campo', 'Fonte e tipo de sentido.'], ['Ensaio', '10 a 15 páginas.'], ['Comparação', 'Sem origem comum sem prova.']],
  avancado: {
    texto: `<h3>Imagem como documento</h3>
<p>Peter Burke, em <em>Testemunha ocular</em> (2001), discute o uso de imagens como fontes históricas e seus riscos: a imagem mostra também o ponto de vista de quem a fez ${tag('interpretacao')}.</p>
<h3>Defesa oral</h3>
<p>A defesa do ensaio pode seguir o modelo da disputa escolástica: apresentar a tese, ouvir objeções e responder com as fontes ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Peter Burke, Testemunha ocular: o uso de imagens como evidência histórica (2001).' }],
    exercicios: [
      mc('Testemunha ocular (2001) é de:', ['Panofsky', 'Peter Burke', 'Mâle', 'Eco'], 1, 'Imagens como fontes.'),
      mc('Uma imagem como fonte mostra também:', ['Nada além do tema', 'O ponto de vista de quem a fez', 'Sempre a verdade', 'Apenas a técnica'], 1, 'Burke.'),
      mc('A disputa escolástica consiste em:', ['Tese, objeções e respostas', 'Só a tese', 'Votação', 'Resumo'], 0, 'Modelo da Suma.'),
      disc('Prepare a defesa do seu ensaio: tese, as três objeções mais fortes e as respostas com fontes.', ['Tese', 'Três objeções', 'Respostas com fontes', 'Clareza'])],
  },
}),

avaliacao('sb3-5', 'Avaliação integradora de Simbologia', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão da trilha de Simbologia, Semiótica e Simbolismo. Reúne questões dos três módulos (SB1 a SB3) e pede duas discursivas de síntese. A conclusão da trilha exige também o ensaio final, planejado na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos três módulos.</li><li>Releia suas entradas no Laboratório de Signos e Símbolos.</li><li>Releia a rubrica do ensaio (sb3-4).</li></ul>`,
[
  disc('Escolha um símbolo e mostre como o estudaria com toda a trilha: classificação semiótica, história do símbolo, fontes da fé (se for o caso), análise iconográfica, comparação com outra tradição e uso atual.', ['Classificação semiótica', 'História e fontes', 'Iconografia', 'Comparação sem origem comum sem prova', 'Uso atual', 'Conclusão proporcional']),
  disc('Responda como estudioso de símbolos: o que se pode afirmar com segurança sobre o sentido de um símbolo e o que permanece interpretação ou hipótese? Use três exemplos de módulos diferentes.', ['Distingue doutrina, fato, interpretação e hipótese', 'Três exemplos de módulos diferentes', 'Argumentação clara', 'Conclusão fundamentada']),
]),
];
