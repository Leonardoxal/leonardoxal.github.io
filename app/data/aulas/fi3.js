// Física III — interpretações e grandes debates (etapas 6 e 7 do percurso de Física).
// Mecanicismo e filosofia natural; realismo, instrumentalismo e interpretações da mecânica quântica;
// o caso Galileu; determinismo, acaso, cosmologia e ajuste fino.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'fi3-1', titulo: 'Mecanicismo e filosofia natural: o que é a matéria?', duracao: '150 min',
  aprendera: ['Explicar o mecanicismo de Descartes', 'Distinguir qualidades primárias e secundárias', 'Conhecer a crítica de Leibniz à ação a distância', 'Avaliar o retorno de noções aristotélicas na física moderna'],
  prereq: ['Física II (módulo FI2)'],
  explicacao: `
<h3>O problema</h3>
<p>A física moderna nasceu com uma tese filosófica: a natureza é uma máquina. Essa tese é parte da física ou uma filosofia que a acompanhou?</p>
<h3>O mecanicismo</h3>
<p>Descartes identificou a matéria com a extensão e explicou os fenômenos naturais por figura, tamanho e movimento de partes, chegando a descrever os animais como máquinas (Princípios da filosofia, 1644) ${tag('fato')}. Robert Boyle defendeu a "filosofia mecânica" corpuscular ${tag('fato')}.</p>
<h3>Qualidades primárias e secundárias</h3>
<p>Galileu, em O ensaiador (1623), e depois Locke distinguiram qualidades primárias, que estariam nos corpos (figura, número, movimento), das secundárias, que estariam em quem percebe (cor, sabor, cheiro) ${tag('fato')}. Essa distinção marcou a imagem moderna de um mundo "sem qualidades" ${tag('interpretacao')}.</p>
<h3>Forças a distância</h3>
<p>A gravitação de Newton atua a distância, sem contato; Leibniz criticou-a como uma "qualidade oculta", e Newton declarou não fingir hipóteses sobre a causa da gravidade ${tag('fato')}. O mecanicismo estrito foi assim superado dentro da própria física ${tag('interpretacao')}.</p>
<h3>Potência e ato?</h3>
<p>Werner Heisenberg, em Física e filosofia (1958), sugeriu que a mecânica quântica reaproxima noções como a potência aristotélica, ao descrever possibilidades que se atualizam na medida ${tag('interpretacao')}. Filósofos neo-aristotélicos e tomistas discutem hoje a relação entre o hilemorfismo e a física ${tag('debate')}.</p>`,
  vocabulario: [
    ['Mecanicismo', 'Tese de que a natureza se explica por partes materiais em movimento.'],
    ['Qualidades primárias', 'Propriedades tidas como objetivas: figura, número, movimento.'],
    ['Qualidades secundárias', 'Propriedades tidas como dependentes do observador: cor, sabor.'],
    ['Ação a distância', 'Influência entre corpos sem contato, como na gravitação newtoniana.'],
    ['Hilemorfismo', 'Doutrina aristotélica de que os corpos são compostos de matéria e forma.'],
  ],
  exemplos: `<p><strong>A cor de uma maçã:</strong> para a física, a maçã reflete luz de certos comprimentos de onda; para a fisiologia, os olhos e o cérebro processam esse sinal; para a experiência, a maçã é vermelha. A tese de que a cor "não existe" na maçã é filosófica, não física: a física descreve o mecanismo, não decide sozinha o estatuto da qualidade percebida.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "não finjo hipóteses" (hypotheses non fingo) está no Escólio geral dos Principia ${tag('fato')}. <strong>No Brasil:</strong> Mário Ferreira dos Santos discutiu criticamente o mecanicismo em sua obra filosófica ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o mecanicismo é uma filosofia, não um resultado da física', tag: 'argumento',
    premissas: ['A física descreve regularidades mensuráveis por modelos matemáticos.', 'Dizer que só existem partes em movimento é afirmar algo sobre tudo o que existe, além do que se mede.', 'Essa afirmação não é testável por experimento de física.'],
    conclusao: 'Logo, o mecanicismo é uma tese metafísica que acompanhou a física, não uma conclusão dela.',
    nota: 'A física quântica e de campos tornou o mecanicismo clássico inadequado até como imagem física.',
  },
  objecoes: [
    { objecao: 'O sucesso da física prova que tudo é matéria em movimento.', tag: 'debate',
      resposta: 'O sucesso da física mostra que a matéria tem aspectos mensuráveis e regulares, não que nada mais exista. Inteligência, liberdade e valor são justamente o que torna a física possível. Inferir o materialismo do sucesso científico é ultrapassar o domínio do método.' },
  ],
  aplicacao: `<p>Inicie o quadro comparativo da etapa: para a filosofia natural aristotélica e o mecanicismo, descreva o que é a matéria, o que é a causa e o que explica o movimento.</p>`,
  fonte: {
    obra: 'René Descartes, Princípios da filosofia (1644), segunda parte; Werner Heisenberg, Física e filosofia (1958)', link: null,
    orientacao: `<p>Em Descartes, identifique a tese da matéria como extensão. Em Heisenberg, a comparação com a potência aristotélica.</p>`,
  },
  perguntas: [
    { p: 'O que é o mecanicismo?', r: 'A tese de que a natureza se explica por partes materiais em movimento.' },
    { p: 'Qual a crítica de Leibniz à gravitação de Newton?', r: 'Que a ação a distância seria uma qualidade oculta.' },
    { p: 'Que noção aristotélica Heisenberg evocou?', r: 'A potência.' },
  ],
  exercicios: [
    mc('Descartes identificou a matéria com a:', ['Forma', 'Extensão', 'Alma', 'Energia'], 1, 'Princípios.'),
    mc('Cor e sabor foram classificados como qualidades:', ['Primárias', 'Secundárias', 'Ocultas', 'Divinas'], 1, 'Galileu e Locke.'),
    mc('"Não finjo hipóteses" é frase de:', ['Newton', 'Descartes', 'Leibniz', 'Boyle'], 0, 'Escólio geral.'),
    mc('Física e filosofia é de:', ['Heisenberg', 'Einstein', 'Bohr', 'Planck'], 0, '1958.'),
    mc('O mecanicismo é uma tese:', ['Experimental', 'Metafísica', 'Jurídica', 'Estatística'], 1, 'Argumento.'),
    disc('Compare a filosofia natural aristotélica e o mecanicismo quanto à matéria, à causa e ao movimento.', ['Matéria', 'Causa', 'Movimento', 'Avaliação']),
  ],
  resumo: ['Mecanicismo: Descartes, Boyle.', 'Qualidades primárias e secundárias.', 'Ação a distância; Leibniz.', 'Heisenberg e a potência.', 'Mecanicismo é metafísica.'],
  referencias: [
    { texto: 'René Descartes, Princípios da filosofia (1644).', livro: 'descartes-principios' },
    { texto: 'Werner Heisenberg, Física e filosofia (1958).' },
    { texto: 'Aristóteles, Física.', livro: 'aristoteles-fisica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['Extensão', 'Descartes.'], ['Secundárias', 'Cor, sabor.'], ['Potência', 'Heisenberg.']],
  avancado: {
    texto: `<h3>O campo</h3>
<p>Faraday e Maxwell introduziram o conceito de campo: em vez de ação a distância instantânea, cada ponto do espaço tem uma grandeza física que se propaga com velocidade finita ${tag('fato')}. Na física atual, partículas são entendidas como excitações de campos quânticos ${tag('fato')}. Isso afasta ainda mais a imagem de bolinhas duras do mecanicismo clássico ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Richard Feynman, Lições de física, vol. 2.' }],
    exercicios: [
      mc('O conceito de campo foi introduzido por:', ['Faraday e Maxwell', 'Descartes', 'Aristóteles', 'Kepler'], 0, 'Eletromagnetismo.'),
      mc('No campo, as influências se propagam com velocidade:', ['Infinita', 'Finita', 'Nula', 'Aleatória'], 1, 'Propagação.'),
      mc('Na física atual, partículas são vistas como:', ['Bolinhas duras', 'Excitações de campos', 'Ilusões', 'Números'], 1, 'Teoria quântica de campos.'),
      disc('Explique por que o conceito de campo enfraquece o mecanicismo clássico.', ['Campo', 'Mecanicismo', 'Diferença', 'Avaliação'])],
  },
}),

aula({
  id: 'fi3-2', titulo: 'Realismo, instrumentalismo e as interpretações da mecânica quântica', duracao: '150 min',
  aprendera: ['Distinguir realismo e instrumentalismo científico', 'Explicar a dupla fenda e o princípio de incerteza', 'Comparar três interpretações da mecânica quântica', 'Conhecer os testes de Bell'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A mecânica quântica é a teoria mais precisa já testada, e ainda assim os físicos discordam sobre o que ela diz da realidade.</p>
<h3>Realismo e instrumentalismo</h3>
<p>O realismo científico sustenta que as boas teorias descrevem, ao menos aproximadamente, como o mundo é; o instrumentalismo, que são instrumentos de previsão ${tag('fato')}. Duhem tendia a uma posição próxima do instrumentalismo quanto às teorias, sem negar a realidade do mundo ${tag('interpretacao')}.</p>
<h3>A dupla fenda</h3>
<p>Elétrons enviados um a um através de duas fendas formam, ao longo do tempo, um padrão de interferência, como ondas; se se mede por qual fenda passam, o padrão desaparece ${tag('fato')}. O princípio de incerteza de Heisenberg afirma que posição e momento não podem ser ambos determinados com precisão arbitrária: Δx·Δp ≥ ħ/2 ${tag('fato')}.</p>
<h3>Interpretações</h3>
<p>Na interpretação de Copenhague (Bohr, Heisenberg), a teoria descreve resultados de medidas, e não se deve atribuir propriedades definidas antes da medida ${tag('fato')}. Na de Bohm (1952), partículas têm posições definidas guiadas por uma onda-piloto ${tag('fato')}. Na de muitos mundos (Everett, 1957), todas as possibilidades se realizam em ramos do universo ${tag('fato')}. Há outras, e nenhuma é consenso ${tag('debate')}.</p>
<h3>Bell</h3>
<p>John Bell mostrou em 1964 que nenhuma teoria local de variáveis ocultas reproduz todas as previsões quânticas; experimentos, como os de Alain Aspect (1982), confirmaram as previsões quânticas, e Aspect, Clauser e Zeilinger receberam o Nobel em 2022 ${tag('fato')}. Isso exclui o realismo local, não toda forma de realismo ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Realismo científico', 'Tese de que boas teorias descrevem aproximadamente a realidade.'],
    ['Instrumentalismo', 'Tese de que teorias são instrumentos de previsão.'],
    ['Princípio de incerteza', 'Limite à determinação simultânea de posição e momento.'],
    ['Interferência', 'Padrão característico de ondas que se sobrepõem.'],
    ['Desigualdade de Bell', 'Limite respeitado por teorias locais de variáveis ocultas.'],
  ],
  exemplos: `<p><strong>A mesma matemática, três leituras:</strong> a teoria prevê 50% de chance de um elétron ser detectado à esquerda. Copenhague: antes da medida, não há posição definida. Bohm: o elétron já tinha posição, que desconhecemos. Muitos mundos: em um ramo ele aparece à esquerda, em outro à direita. As previsões são as mesmas; diferem as imagens da realidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> os debates entre Einstein e Bohr sobre a completude da mecânica quântica são célebres ${tag('fato')}. <strong>No Brasil:</strong> há grupos de pesquisa em óptica e informação quântica em universidades e no CBPF ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a interpretação da quântica é uma questão filosófica', tag: 'argumento',
    premissas: ['As principais interpretações fazem as mesmas previsões experimentais nos casos testados.', 'Elas diferem no que afirmam existir e acontecer.', 'Escolher entre elas exige critérios além do experimento (simplicidade, coerência, realismo).'],
    conclusao: 'Logo, a interpretação da mecânica quântica envolve filosofia da natureza.',
    nota: 'Isso não a torna arbitrária: os argumentos podem ser avaliados com rigor.',
  },
  objecoes: [
    { objecao: 'A física quântica prova que a consciência cria a realidade.', tag: 'debate',
      resposta: 'Essa é uma interpretação minoritária e controversa. "Medida" em física envolve interação física com aparelhos, não necessariamente consciência. Muitas leituras populares extrapolam a teoria para conclusões espirituais que ela não sustenta.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo de três interpretações da mecânica quântica — o que afirmam sobre a realidade antes da medida, o que deixam em aberto e uma crítica a cada uma.</p>`,
  fonte: {
    obra: 'Werner Heisenberg, Física e filosofia (1958), capítulos sobre a interpretação de Copenhague', link: null,
    orientacao: `<p>Observe como Heisenberg descreve o papel da medida e a noção de potência.</p>`,
  },
  perguntas: [
    { p: 'O que é o instrumentalismo?', r: 'A tese de que teorias são instrumentos de previsão.' },
    { p: 'O que mostrou Bell?', r: 'Que nenhuma teoria local de variáveis ocultas reproduz todas as previsões quânticas.' },
    { p: 'Que interpretação propõe uma onda-piloto?', r: 'A de Bohm.' },
  ],
  exercicios: [
    mc('Elétrons um a um pela dupla fenda formam padrão de:', ['Partículas apenas', 'Interferência', 'Nada', 'Círculo'], 1, 'Onda.'),
    mc('A interpretação de muitos mundos é de:', ['Bohr', 'Everett', 'Bohm', 'Bell'], 1, '1957.'),
    mc('O teorema de Bell é de:', ['1927', '1952', '1964', '2022'], 2, 'Desigualdade.'),
    mc('Os experimentos de Bell excluem o realismo:', ['Local', 'Todo', 'Nenhum', 'Aristotélico'], 0, 'Interpretação.'),
    mc('O Nobel de 2022 premiou:', ['Aspect, Clauser e Zeilinger', 'Bohr e Einstein', 'Higgs', 'Planck'], 0, 'Emaranhamento.'),
    disc('Compare três interpretações da mecânica quântica com uma crítica a cada uma.', ['Interpretações', 'Antes da medida', 'Em aberto', 'Críticas']),
  ],
  resumo: ['Realismo × instrumentalismo.', 'Dupla fenda; Δx·Δp ≥ ħ/2.', 'Copenhague, Bohm, muitos mundos.', 'Bell (1964); Aspect; Nobel 2022.', 'Interpretação é filosofia.'],
  referencias: [
    { texto: 'Werner Heisenberg, Física e filosofia (1958).' },
    { texto: 'John S. Bell, Speakable and Unspeakable in Quantum Mechanics (1987).' },
    { texto: 'Pierre Duhem, A teoria física (1906).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro das interpretações', 'Ler a fonte indicada'],
  revisao: [['Bell', 'Realismo local excluído.'], ['Bohm', 'Onda-piloto.'], ['Copenhague', 'Medida.']],
  avancado: {
    texto: `<h3>Decoerência</h3>
<p>A decoerência explica por que efeitos de interferência quântica desaparecem quando um sistema interage com muitas partes do ambiente: as fases se espalham e o comportamento parece clássico ${tag('fato')}. Ela explica por que não vemos gatos em superposição, mas, para muitos autores, não resolve sozinha o problema da medida — por que ocorre um resultado e não outro ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Werner Heisenberg, Física e filosofia (1958).' }],
    exercicios: [
      mc('A decoerência resulta da interação com:', ['O ambiente', 'A consciência', 'O vazio', 'Nada'], 0, 'Definição.'),
      mc('A decoerência explica a aparência:', ['Quântica', 'Clássica', 'Mística', 'Nenhuma'], 1, 'Efeito.'),
      mc('Para muitos autores, ela resolve totalmente o problema da medida?', ['Sim', 'Não', 'Só para elétrons', 'Só em 1964'], 1, 'Debate.'),
      disc('Explique o que a decoerência explica e o que deixa em aberto.', ['Explica', 'Em aberto', 'Exemplo', 'Avaliação'])],
  },
}),

aula({
  id: 'fi3-3', titulo: 'O caso Galileu: fatos, mitos e juízos', duracao: '150 min',
  aprendera: ['Reconstruir os fatos do caso Galileu de 1616 a 1633', 'Distinguir fatos e mitos', 'Conhecer a posição de Galileu sobre Escritura e ciência', 'Conhecer a avaliação de João Paulo II (1992)'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O caso Galileu é o exemplo mais citado de conflito entre ciência e fé. O que de fato aconteceu?</p>
<h3>Os fatos</h3>
<p>Em 1616, a Congregação do Índice suspendeu o livro de Copérnico "até que fosse corrigido" e declarou falsa e contrária à Escritura a tese do movimento da Terra; o cardeal Belarmino advertiu Galileu a não sustentar nem defender essa tese ${tag('fato')}. Em 1632, Galileu publicou o Diálogo sobre os dois máximos sistemas do mundo, que defendia o copernicanismo ${tag('fato')}. Em 1633, o Santo Ofício o condenou como "veementemente suspeito de heresia"; ele abjurou e passou o resto da vida em prisão domiciliar, em Arcetri, onde morreu em 1642 ${tag('fato')}.</p>
<h3>Mitos</h3>
<p>Galileu não foi torturado nem queimado; a frase "eppur si muove" ("e, no entanto, se move") não tem registro contemporâneo e é considerada lendária ${tag('fato')}. Por outro lado, a condenação foi real e injusta ${tag('interpretacao')}.</p>
<h3>Escritura e ciência</h3>
<p>Na Carta à grã-duquesa Cristina (1615), Galileu sustentou que a Escritura não pretende ensinar astronomia e citou a máxima de que o Espírito Santo quis ensinar como se vai para o céu, e não como vai o céu ${tag('fato')}. Essa posição é próxima da de Agostinho sobre a interpretação do Gênesis ${tag('interpretacao')}.</p>
<h3>A avaliação da Igreja</h3>
<p>A proibição geral de livros heliocêntricos foi retirada em 1757 ${tag('fato')}. Em 1992, após os trabalhos de uma comissão, João Paulo II reconheceu que os teólogos da época erraram ao julgar Galileu e falou de uma "trágica incompreensão recíproca" ${tag('fato')}.</p>`,
  vocabulario: [
    ['Congregação do Índice', 'Órgão romano que examinava e proibia livros.'],
    ['Santo Ofício', 'Congregação responsável pela doutrina da fé, que julgou Galileu.'],
    ['Abjuração', 'Renúncia formal a uma opinião condenada.'],
    ['Heliocentrismo', 'Tese do Sol no centro e da Terra em movimento.'],
    ['Carta a Cristina', 'Texto de Galileu sobre a relação entre Escritura e ciência (1615).'],
  ],
  exemplos: `<p><strong>Separando camadas:</strong> fato — Galileu foi condenado em 1633 e viveu em prisão domiciliar. Mito — foi torturado e disse "eppur si muove". Juízo teológico — os juízes erraram ao tratar uma questão de astronomia como questão de fé (avaliação de 1992). Juízo científico — as provas decisivas do movimento da Terra vieram depois de Galileu.</p>`,
  contexto: `<p><strong>No mundo:</strong> provas observacionais diretas do movimento da Terra, como a aberração da luz (1729) e a paralaxe estelar (1838), vieram depois de Galileu ${tag('fato')}. <strong>No Brasil:</strong> o caso é tema frequente em livros didáticos, nem sempre com as nuances históricas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que o caso Galileu não prova um conflito essencial entre fé e ciência', tag: 'argumento',
    premissas: ['O erro dos juízes foi tomar uma leitura literal da Escritura como exigência de fé numa questão científica.', 'A própria tradição (Agostinho) e o próprio Galileu já ofereciam um princípio para evitar esse erro.', 'A Igreja reconheceu o erro.'],
    conclusao: 'Logo, o caso mostra um erro histórico de juízo, não uma incompatibilidade de princípio entre fé e ciência.',
    nota: 'Reconhecer o erro é tão importante quanto desfazer o mito.',
  },
  objecoes: [
    { objecao: 'A Igreja estava certa porque Galileu não tinha provas suficientes.', tag: 'debate',
      resposta: 'É verdade que Galileu não tinha prova decisiva, e alguns argumentos dele (como o das marés) estavam errados. Mas a falta de prova justificaria cautela científica, não a condenação de uma tese astronômica como contrária à fé. O próprio juízo de 1992 reconhece o erro dos teólogos.' },
  ],
  aplicacao: `<p>Escreva o ensaio da etapa sobre o caso Galileu, usando documentos da época (decreto de 1616, sentença de 1633, Carta a Cristina) e o discurso de João Paulo II (1992), distinguindo fato, mito e juízo teológico.</p>`,
  fonte: {
    obra: 'Galileu Galilei, Carta à grã-duquesa Cristina de Lorena (1615); João Paulo II, discurso à Pontifícia Academia das Ciências (31 de outubro de 1992)', link: { url: 'https://www.vatican.va', rotulo: 'Documentos oficiais da Santa Sé' },
    orientacao: `<p>Na carta, os princípios de leitura da Escritura. No discurso, o reconhecimento do erro e a lição tirada.</p>`,
  },
  perguntas: [
    { p: 'O que aconteceu em 1616?', r: 'O livro de Copérnico foi suspenso e Galileu foi advertido por Belarmino.' },
    { p: 'Galileu foi torturado?', r: 'Não.' },
    { p: 'O que João Paulo II reconheceu em 1992?', r: 'Que os teólogos da época erraram ao julgar Galileu.' },
  ],
  exercicios: [
    mc('O Diálogo sobre os dois máximos sistemas é de:', ['1616', '1632', '1633', '1642'], 1, 'Publicação.'),
    mc('Em 1633, Galileu foi declarado:', ['Inocente', 'Veementemente suspeito de heresia', 'Santo', 'Herege relapso queimado'], 1, 'Sentença.'),
    mc('"Eppur si muove" é:', ['Registro da sentença', 'Lendária', 'Frase de Belarmino', 'Do Diálogo'], 1, 'Mito.'),
    mc('A paralaxe estelar foi medida em:', ['1633', '1729', '1838', '1992'], 2, 'Bessel.'),
    mc('O discurso de João Paulo II sobre Galileu é de:', ['1979', '1992', '2000', '1965'], 1, 'Comissão.'),
    disc('Escreva o ensaio sobre o caso Galileu distinguindo fato, mito e juízo teológico.', ['Fatos', 'Mitos', 'Juízos', 'Fontes']),
  ],
  resumo: ['1616: decreto e advertência.', '1632: Diálogo; 1633: condenação.', 'Mitos: tortura, "eppur si muove".', 'Carta a Cristina (1615).', '1757; 1992: reconhecimento do erro.'],
  referencias: [
    { texto: 'Galileu Galilei, Carta à grã-duquesa Cristina de Lorena (1615).' },
    { texto: 'João Paulo II, discurso à Pontifícia Academia das Ciências (1992).' },
    { texto: 'Santo Agostinho, Comentário literal ao Gênesis.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler as fontes indicadas'],
  revisao: [['1633', 'Condenação.'], ['Mito', 'Sem tortura.'], ['1992', 'Erro reconhecido.']],
  avancado: {
    texto: `<h3>Agostinho e a leitura do Gênesis</h3>
<p>No Comentário literal ao Gênesis, Agostinho advertiu que é vergonhoso um cristão afirmar, em nome da Escritura, coisas sobre a natureza que contradizem o que se conhece com segurança por razão e experiência, expondo a fé ao ridículo ${tag('fato')}. Galileu citou Agostinho na Carta a Cristina ${tag('fato')}. O princípio está na base do ensino da Igreja sobre os gêneros literários da Escritura (Dei Verbum, 12) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Santo Agostinho, Comentário literal ao Gênesis, livro I.' }],
    exercicios: [
      mc('Galileu citou na Carta a Cristina:', ['Agostinho', 'Lutero', 'Calvino', 'Voltaire'], 0, 'Autoridade.'),
      mc('Agostinho advertia contra afirmar sobre a natureza o que contradiz:', ['A razão e a experiência seguras', 'A política', 'Os poetas', 'Nada'], 0, 'Princípio.'),
      mc('Os gêneros literários da Escritura são tratados em:', ['Dei Verbum, 12', 'Lumen gentium, 11', 'Gaudium et spes, 1', 'Rerum novarum'], 0, 'Concílio.'),
      disc('Aplique o princípio de Agostinho a um debate atual entre leitura bíblica e ciência.', ['Debate', 'Princípio', 'Aplicação', 'Avaliação'])],
  },
}),

aula({
  id: 'fi3-4', titulo: 'Determinismo, acaso, liberdade e o ajuste fino do universo', duracao: '150 min',
  aprendera: ['Distinguir determinismo, caos e indeterminismo quântico', 'Avaliar se o acaso físico explica a liberdade', 'Explicar o argumento do ajuste fino', 'Conhecer as respostas do multiverso e da teologia'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se as leis físicas determinam tudo, somos livres? E por que as leis e constantes do universo permitem a vida?</p>
<h3>Determinismo e caos</h3>
<p>Na mecânica clássica, o estado presente determina o futuro, como imaginou Laplace ${tag('fato')}. A teoria do caos mostrou que certos sistemas determinísticos são tão sensíveis às condições iniciais que se tornam imprevisíveis na prática; Edward Lorenz descreveu esse comportamento em modelos meteorológicos (1963) ${tag('fato')}. Caos não é ausência de leis, mas limite de previsão ${tag('interpretacao')}.</p>
<h3>Indeterminismo quântico</h3>
<p>Na maior parte das interpretações, a mecânica quântica prevê apenas probabilidades de resultados individuais ${tag('fato')}. Mas acaso não é liberdade: um ato livre não é um evento aleatório, e sim uma escolha por razões ${tag('argumento')}. A tradição cristã funda a liberdade na natureza racional da pessoa (CIC 1730–1733), não em lacunas da física ${tag('doutrina')}.</p>
<h3>Ajuste fino</h3>
<p>Muitos físicos observam que, se certas constantes (como a intensidade das forças fundamentais) fossem um pouco diferentes, não haveria estrelas estáveis, química complexa ou vida ${tag('interpretacao')}. Essa constatação é interpretada de três modos principais: necessidade física ainda desconhecida, multiverso com muitas constantes diferentes, ou desígnio ${tag('debate')}.</p>
<h3>Prudência</h3>
<p>Lemaître advertia contra usar teorias físicas como prova direta de verdades de fé ${tag('fato')}. O ajuste fino pode ser visto como sinal compatível com um Criador inteligente, mas não substitui os argumentos filosóficos sobre a existência de Deus ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Determinismo', 'Tese de que o estado presente fixa o futuro.'],
    ['Caos', 'Sensibilidade extrema às condições iniciais em sistemas determinísticos.'],
    ['Indeterminismo quântico', 'Previsão apenas probabilística de resultados individuais.'],
    ['Ajuste fino', 'Observação de que constantes físicas permitem a vida dentro de faixas estreitas.'],
    ['Multiverso', 'Hipótese de muitos universos com propriedades diferentes.'],
  ],
  exemplos: `<p><strong>Efeito borboleta:</strong> num modelo de tempo, mudar a temperatura inicial na terceira casa decimal muda a previsão após algumas semanas. As equações são determinísticas, mas a previsão de longo prazo é impossível na prática, porque nunca medimos as condições com precisão infinita. Por isso previsões meteorológicas perdem confiabilidade com o prazo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "efeito borboleta" popularizou-se a partir de uma palestra de Lorenz em 1972 ${tag('fato')}. <strong>No Brasil:</strong> o CPTEC/INPE usa modelos numéricos de previsão do tempo, sujeitos a esses limites ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o acaso não explica a liberdade', tag: 'argumento',
    premissas: ['Um ato livre é escolhido pelo agente com base em razões.', 'Um evento aleatório não é escolhido por ninguém.', 'Substituir determinação por acaso não produz escolha racional.'],
    conclusao: 'Logo, a liberdade não se explica pelo indeterminismo físico, mas pela natureza racional da pessoa.',
    nota: 'Isso não nega que a física condicione a ação; nega que a esgote.',
  },
  objecoes: [
    { objecao: 'O multiverso elimina qualquer necessidade de explicação para o ajuste fino.', tag: 'debate',
      resposta: 'O multiverso pode explicar por que observamos constantes favoráveis num universo entre muitos, mas é hipótese difícil de testar e exige ele mesmo leis e mecanismos que geram universos. A pergunta sobre a origem da ordem se desloca, mas não desaparece. O debate continua aberto.' },
  ],
  aplicacao: `<p>Escreva um texto curto distinguindo determinismo, caos e indeterminismo quântico, e avalie com justiça às partes as três interpretações do ajuste fino.</p>`,
  fonte: {
    obra: 'Catecismo, §§ 1730–1733 (liberdade); Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814), introdução', link: null,
    orientacao: `<p>Compare a imagem do determinismo de Laplace com o ensino do Catecismo sobre a liberdade.</p>`,
  },
  perguntas: [
    { p: 'O que é o caos em física?', r: 'Sensibilidade extrema às condições iniciais em sistemas determinísticos.' },
    { p: 'Por que o acaso não explica a liberdade?', r: 'Porque um evento aleatório não é escolhido por razões.' },
    { p: 'Quais as três interpretações do ajuste fino?', r: 'Necessidade física desconhecida, multiverso ou desígnio.' },
  ],
  exercicios: [
    mc('O trabalho de Lorenz sobre caos em modelos do tempo é de:', ['1814', '1963', '1992', '1905'], 1, 'Meteorologia.'),
    mc('Caos significa:', ['Ausência de leis', 'Limite prático de previsão', 'Milagre', 'Erro de cálculo'], 1, 'Interpretação.'),
    mc('A liberdade, segundo o Catecismo, funda-se na:', ['Física quântica', 'Natureza racional da pessoa', 'Sorte', 'Química'], 1, 'CIC 1730.'),
    mc('O multiverso é hipótese:', ['Já confirmada', 'Difícil de testar', 'Refutada', 'Teológica'], 1, 'Debate.'),
    mc('Lemaître advertia contra:', ['Estudar física', 'Usar teorias físicas como prova direta da fé', 'Rezar', 'Medir'], 1, 'Prudência.'),
    disc('Distinga determinismo, caos e indeterminismo e avalie as três interpretações do ajuste fino.', ['Distinções', 'Ajuste fino', 'Avaliação', 'Prudência']),
  ],
  resumo: ['Determinismo clássico.', 'Caos: limite prático (Lorenz, 1963).', 'Indeterminismo quântico ≠ liberdade.', 'Ajuste fino: necessidade, multiverso, desígnio.', 'Prudência de Lemaître.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1730–1733.', livro: 'cic' },
    { texto: 'Pierre-Simon Laplace, Ensaio filosófico sobre as probabilidades (1814).' },
    { texto: 'Stanley L. Jaki, The Road of Science and the Ways to God (1978).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o texto', 'Ler as fontes indicadas'],
  revisao: [['Caos', 'Previsão limitada.'], ['Acaso', 'Não é liberdade.'], ['Ajuste fino', 'Três leituras.']],
  avancado: {
    texto: `<h3>Entropia e a seta do tempo</h3>
<p>A segunda lei da termodinâmica afirma que a entropia de um sistema isolado tende a aumentar ${tag('fato')}. Isso dá uma direção ao tempo: ovos quebram, mas não se recompõem ${tag('fato')}. A baixíssima entropia do universo primitivo é considerada um dos grandes enigmas da cosmologia ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Richard Feynman, Lições de física, vol. 1 (termodinâmica).' }],
    exercicios: [
      mc('A entropia de um sistema isolado tende a:', ['Diminuir', 'Aumentar', 'Ficar sempre igual', 'Zerar'], 1, 'Segunda lei.'),
      mc('A segunda lei dá ao tempo uma:', ['Direção', 'Velocidade', 'Massa', 'Cor'], 0, 'Seta.'),
      mc('A entropia do universo primitivo era:', ['Muito baixa', 'Infinita', 'Igual à atual', 'Negativa'], 0, 'Enigma.'),
      disc('Explique a seta do tempo com um exemplo cotidiano e a segunda lei.', ['Exemplo', 'Entropia', 'Seta', 'Enigma'])],
  },
}),

avaliacao('fi3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre mecanicismo, interpretações da mecânica quântica, o caso Galileu e os debates sobre determinismo e ajuste fino, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro das interpretações quânticas.</li><li>Releia seu ensaio sobre o caso Galileu.</li></ul>`,
[
  disc('Compare três interpretações da mecânica quântica, mostrando o que é comum a todas (previsões) e o que as distingue (afirmações sobre a realidade), e explique o significado dos testes de Bell.', ['Interpretações', 'Comum e distinto', 'Bell', 'Física e filosofia']),
  disc('Escreva sobre o caso Galileu distinguindo fatos documentados, mitos e o juízo de 1992, e tire uma lição para a relação entre fé e ciência hoje.', ['Fatos', 'Mitos', 'Juízo de 1992', 'Lição']),
]),
];
