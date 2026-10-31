// Linguística II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Linguística).
// Gramáticos antigos e medievais; de Port-Royal ao gerativismo, com o Brasil; Platão, Aristóteles, Agostinho e os modistas;
// Saussure, Jakobson, Chomsky e Mattoso Câmara.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'li2-1', titulo: 'Gramáticos antigos e medievais: das partes do discurso aos modos de significar', duracao: '150 min',
  aprendera: ['Conhecer a gramática de Pāṇini e a tradição greco-latina', 'Explicar as partes do discurso de Dionísio Trácio', 'Conhecer Donato e Prisciano', 'Explicar a gramática especulativa dos modistas'],
  prereq: ['Linguística I (módulo LI1)'],
  explicacao: `
<h3>O problema</h3>
<p>As categorias da gramática escolar — substantivo, verbo, preposição — parecem naturais. Mas foram construídas ao longo de séculos. Por quem, e como?</p>
<h3>Índia e Grécia</h3>
<p>Na Índia antiga, o gramático Pāṇini descreveu o sânscrito em quase quatro mil regras concisas, obra admirada pelos linguistas modernos; sua datação é incerta, geralmente situada por volta do século IV a.C. ${tag('fato')}. Na Grécia, Platão distinguiu nome e verbo no Sofista, e Aristóteles os definiu no Da interpretação ${tag('fato')}. A Arte da gramática atribuída a Dionísio Trácio (século II a.C.) listou oito partes do discurso ${tag('fato')}.</p>
<h3>Roma</h3>
<p>Varrão escreveu Sobre a língua latina (século I a.C.); Donato (século IV) e Prisciano (c. 500) compuseram as gramáticas latinas usadas em toda a Idade Média ${tag('fato')}.</p>
<h3>Os modistas</h3>
<p>Nos séculos XIII e XIV, gramáticos de Paris, chamados modistas, procuraram explicar as categorias gramaticais pela relação entre modos de ser das coisas, modos de entender e modos de significar ${tag('fato')}. A Gramática especulativa de Tomás de Erfurt (c. 1300), por muito tempo atribuída a Duns Escoto, é o texto mais conhecido ${tag('fato')}. Eles buscavam uma gramática universal, fundada na estrutura do pensamento ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Partes do discurso', 'Classes de palavras (nome, verbo, etc.).'],
    ['Gramática especulativa', 'Gramática que busca as razões universais das categorias (modistas).'],
    ['Modos de significar', 'Maneiras como as palavras representam as coisas, segundo os modistas.'],
    ['Donato', 'Gramático latino do século IV, base do ensino medieval.'],
    ['Prisciano', 'Gramático latino de c. 500, autor das Instituições gramaticais.'],
  ],
  exemplos: `<p><strong>Por que "corrida" é substantivo?</strong> Para os modistas, "corrida" e "correr" significam a mesma realidade, mas de modos diferentes: o substantivo a apresenta como algo estável (modo de ser permanente), o verbo como processo (modo de devir). A gramática refletiria modos de entender a realidade — uma tese que reaparece, de outro modo, em linguistas modernos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a gramática de Pāṇini foi estudada pelos linguistas europeus do século XIX e influenciou a linguística moderna ${tag('fato')}. <strong>No Brasil:</strong> no período colonial, o latim era ensinado pelas gramáticas da tradição de Donato e de Manuel Álvares ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a gramática tem relação com o pensamento', tag: 'argumento',
    premissas: ['Falamos para exprimir o que pensamos sobre as coisas.', 'As categorias gramaticais (nome, verbo, tempo, número) acompanham distinções do pensamento (coisa e ação, passado e presente, um e muitos).', 'Por isso muitas categorias aparecem em línguas muito diferentes.'],
    conclusao: 'Logo, a gramática não é mera convenção arbitrária: reflete, em parte, a estrutura do pensamento.',
    nota: 'O grau dessa correspondência é debatido; línguas variam muito em como marcam as categorias.',
  },
  objecoes: [
    { objecao: 'A gramática latina foi imposta a línguas que não se encaixam nela.', tag: 'debate',
      resposta: 'É verdade que missionários e gramáticos às vezes forçaram categorias latinas sobre línguas muito diferentes, e a linguística moderna corrigiu isso. Mas as descrições antigas foram também o primeiro registro de muitas línguas e tinham observações valiosas. A crítica deve ser justa com os dois lados.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com os marcos de Pāṇini aos modistas, com data, autor e ideia central.</p>`,
  fonte: {
    obra: 'Aristóteles, Da interpretação, caps. 1–4; Prisciano, Instituições gramaticais, livro II (partes do discurso)', link: null,
    orientacao: `<p>Em Aristóteles, as definições de nome, verbo e enunciado. Em Prisciano, a lista das partes do discurso.</p>`,
  },
  perguntas: [
    { p: 'Quantas partes do discurso listou a Arte da gramática de Dionísio Trácio?', r: 'Oito.' },
    { p: 'Quem eram os modistas?', r: 'Gramáticos dos séculos XIII e XIV que relacionavam modos de ser, entender e significar.' },
    { p: 'A quem era atribuída a Gramática especulativa de Tomás de Erfurt?', r: 'A Duns Escoto.' },
  ],
  exercicios: [
    mc('A gramática do sânscrito com cerca de quatro mil regras é de:', ['Pāṇini', 'Prisciano', 'Donato', 'Varrão'], 0, 'Índia.'),
    mc('Nome e verbo são definidos por Aristóteles no:', ['Da interpretação', 'Física', 'Ética', 'Poética'], 0, 'Lógica.'),
    mc('Prisciano escreveu por volta de:', ['300 a.C.', '500', '1300', '1660'], 1, 'Instituições.'),
    mc('A Gramática especulativa é de cerca de:', ['1100', '1300', '1500', '1660'], 1, 'Tomás de Erfurt.'),
    mc('Os modistas buscavam uma gramática:', ['Regional', 'Universal', 'Só do grego', 'Só oral'], 1, 'Especulativa.'),
    disc('Inicie a linha do tempo de Pāṇini aos modistas.', ['Marcos', 'Datas', 'Ideias', 'Fontes']),
  ],
  resumo: ['Pāṇini (c. séc. IV a.C.).', 'Platão, Aristóteles, Dionísio Trácio.', 'Varrão, Donato, Prisciano.', 'Modistas; Tomás de Erfurt (c. 1300).', 'Gramática e pensamento.'],
  referencias: [
    { texto: 'Aristóteles, Da interpretação.', livro: 'aristoteles-interpretacao' },
    { texto: 'Prisciano, Instituições gramaticais (c. 500).' },
    { texto: 'Santo Tomás de Aquino, Comentário ao Da interpretação.', livro: 'tomas-com-interpretacao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler as fontes indicadas'],
  revisao: [['Oito partes', 'Dionísio Trácio.'], ['Prisciano', 'c. 500.'], ['Modistas', 'Modos de significar.']],
  avancado: {
    texto: `<h3>O triângulo de Aristóteles</h3>
<p>No início do Da interpretação, Aristóteles afirma que as palavras faladas são símbolos das afecções da alma, e estas são semelhanças das coisas; as palavras variam entre os povos, mas as afecções e as coisas são as mesmas para todos ${tag('fato')}. Tomás de Aquino comenta essa passagem como fundamento de uma teoria do significado mediada pelo conceito ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Comentário ao Da interpretação, lição 2.', livro: 'tomas-com-interpretacao' }],
    exercicios: [
      mc('Para Aristóteles, palavras faladas são símbolos das:', ['Coisas diretamente', 'Afecções da alma', 'Letras', 'Leis'], 1, 'Mediação.'),
      mc('O que é igual para todos os povos?', ['As palavras', 'As afecções e as coisas', 'A escrita', 'A gramática'], 1, 'Universal.'),
      mc('Tomás vê aí uma teoria do significado mediada pelo:', ['Som', 'Conceito', 'Costume', 'Acaso'], 1, 'Interpretação.'),
      disc('Explique o triângulo palavra–conceito–coisa e compare-o com o signo de Saussure.', ['Aristóteles', 'Saussure', 'Comparação', 'Avaliação'])],
  },
}),

aula({
  id: 'li2-2', titulo: 'De Port-Royal ao gerativismo, e a história linguística do Brasil', duracao: '150 min',
  aprendera: ['Conhecer a Gramática de Port-Royal', 'Explicar o nascimento da linguística histórico-comparativa', 'Situar o estruturalismo e o gerativismo', 'Conhecer marcos da história linguística do Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como a reflexão sobre a linguagem se tornou uma ciência com métodos próprios? E como se formou o português do Brasil?</p>
<h3>Port-Royal</h3>
<p>Em 1660, Antoine Arnauld e Claude Lancelot publicaram a Gramática geral e razoada, que buscava princípios comuns a todas as línguas fundados na razão ${tag('fato')}.</p>
<h3>Comparação histórica</h3>
<p>Em 1786, William Jones observou semelhanças entre sânscrito, grego e latim que sugeriam origem comum ${tag('fato')}. Franz Bopp (1816) comparou sistematicamente as conjugações, e Jacob Grimm formulou correspondências sonoras regulares (1822) ${tag('fato')}. Os neogramáticos, nos anos 1870, afirmaram que as leis fonéticas não têm exceções senão explicáveis ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>Saussure (1916) deslocou o foco para a língua como sistema num momento dado (sincronia) ${tag('fato')}. Noam Chomsky, em Estruturas sintáticas (1957), propôs a gramática gerativa: um sistema finito de regras que gera infinitas frases ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>José de Anchieta publicou em 1595 a Arte de gramática da língua mais usada na costa do Brasil, sobre o tupi ${tag('fato')}. A chamada língua geral, de base tupi, foi amplamente usada na colônia até o Diretório dos Índios (1757), de Pombal, que impôs o português ${tag('fato')}. O português brasileiro formou-se em contato com línguas indígenas e africanas ${tag('fato')}.</p>`,
  vocabulario: [
    ['Gramática geral', 'Gramática que busca princípios comuns a todas as línguas.'],
    ['Indo-europeu', 'Família de línguas que inclui latim, grego, sânscrito e germânicas.'],
    ['Neogramáticos', 'Linguistas que defenderam a regularidade das leis fonéticas.'],
    ['Gramática gerativa', 'Sistema finito de regras que gera infinitas frases (Chomsky).'],
    ['Língua geral', 'Língua de base tupi usada amplamente na colônia.'],
  ],
  exemplos: `<p><strong>Palavras que contam a história:</strong> do tupi vêm "jacaré", "abacaxi", "pipoca", "mingau"; de línguas africanas, "caçula", "cochilar", "moleque", "samba". O vocabulário do português do Brasil guarda o encontro de povos que formaram o país.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Gramática de Port-Royal foi retomada por Chomsky como precursora da gramática gerativa ${tag('fato')}. <strong>No Brasil:</strong> o nheengatu, descendente da língua geral amazônica, ainda é falado na região do Rio Negro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o português do Brasil tem identidade própria', tag: 'argumento',
    premissas: ['O português chegou ao Brasil e conviveu por séculos com línguas indígenas e africanas.', 'Houve diferenças de pronúncia, vocabulário e sintaxe em relação a Portugal.', 'Essas diferenças são sistemáticas e documentadas.'],
    conclusao: 'Logo, o português do Brasil é uma variedade com características próprias, a ser estudada em seus dados.',
    nota: 'Debate-se o peso exato do contato com línguas africanas e indígenas na formação da gramática brasileira.',
  },
  objecoes: [
    { objecao: 'O português do Brasil é um português "estragado".', tag: 'debate',
      resposta: 'O português europeu também mudou desde o século XVI, e as duas variedades seguiram caminhos diferentes. Chamar uma de "estragada" é juízo de valor, não descrição. Ambas têm gramáticas regulares e prestígio em seus contextos.' },
  ],
  aplicacao: `<p>Complete a linha do tempo da etapa com os marcos de Port-Royal ao gerativismo e da história linguística do Brasil (1595, 1757 e outros), com data, autor e ideia central.</p>`,
  fonte: {
    obra: 'José de Anchieta, Arte de gramática da língua mais usada na costa do Brasil (1595), prólogo; Noam Chomsky, Estruturas sintáticas (1957), cap. 1', link: null,
    orientacao: `<p>Em Anchieta, o propósito missionário e o método. Em Chomsky, a definição de gramática como sistema gerador.</p>`,
  },
  perguntas: [
    { p: 'Quando foi publicada a Gramática de Port-Royal?', r: 'Em 1660.' },
    { p: 'O que observou William Jones em 1786?', r: 'Semelhanças entre sânscrito, grego e latim que sugeriam origem comum.' },
    { p: 'O que fez o Diretório dos Índios (1757)?', r: 'Impôs o português e restringiu a língua geral.' },
  ],
  exercicios: [
    mc('A Gramática de Port-Royal é de:', ['1595', '1660', '1786', '1916'], 1, 'Arnauld e Lancelot.'),
    mc('As correspondências sonoras de Grimm são de:', ['1786', '1816', '1822', '1957'], 2, 'Germânico.'),
    mc('Estruturas sintáticas é de:', ['Saussure', 'Chomsky', 'Jakobson', 'Bopp'], 1, '1957.'),
    mc('A gramática de Anchieta descreve o:', ['Latim', 'Tupi', 'Quimbundo', 'Guarani paraguaio'], 1, '1595.'),
    mc('"Caçula" e "moleque" vêm de línguas:', ['Indígenas', 'Africanas', 'Germânicas', 'Gregas'], 1, 'Contato.'),
    disc('Complete a linha do tempo de Port-Royal ao gerativismo, com marcos brasileiros.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  ],
  resumo: ['Port-Royal (1660).', 'Jones (1786), Bopp (1816), Grimm (1822).', 'Neogramáticos; Saussure (1916); Chomsky (1957).', 'Anchieta (1595); língua geral; Diretório (1757).', 'Português do Brasil: contato e identidade.'],
  referencias: [
    { texto: 'Antoine Arnauld e Claude Lancelot, Gramática geral e razoada (1660).' },
    { texto: 'José de Anchieta, Arte de gramática da língua mais usada na costa do Brasil (1595).' },
    { texto: 'Noam Chomsky, Estruturas sintáticas (1957).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler as fontes indicadas'],
  revisao: [['1660', 'Port-Royal.'], ['1786', 'Jones.'], ['1757', 'Diretório.']],
  avancado: {
    texto: `<h3>Línguas africanas no Brasil</h3>
<p>Pessoas escravizadas trazidas ao Brasil falavam línguas como o quimbundo, o quicongo e o iorubá, entre muitas outras ${tag('fato')}. Yeda Pessoa de Castro estudou a contribuição dessas línguas, sobretudo do grupo banto, ao vocabulário do português brasileiro ${tag('fato')}. O iorubá permanece em uso litúrgico em religiões de matriz africana ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Yeda Pessoa de Castro, Falares africanos na Bahia (2001).' }],
    exercicios: [
      mc('O quimbundo pertence ao grupo:', ['Banto', 'Germânico', 'Tupi', 'Semítico'], 0, 'África.'),
      mc('Estudou a contribuição africana ao português:', ['Yeda Pessoa de Castro', 'Anchieta', 'Grimm', 'Saussure'], 0, 'Brasil.'),
      mc('O iorubá permanece em uso:', ['Litúrgico', 'Jurídico oficial', 'Escolar obrigatório', 'Nenhum'], 0, 'Religiões.'),
      disc('Liste dez palavras do português do Brasil de origem africana ou indígena e indique a fonte.', ['Palavras', 'Origem', 'Fonte', 'Precisão'])],
  },
}),

aula({
  id: 'li2-3', titulo: 'Platão, Aristóteles, Agostinho e os modistas: o que é significar', duracao: '150 min',
  aprendera: ['Expor o debate do Crátilo', 'Expor a teoria aristotélica do nome e do verbo', 'Expor a teoria agostiniana do signo e da aprendizagem da língua', 'Relacionar a tradição clássica com a linguística moderna'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de ser ciência empírica, a reflexão sobre a linguagem foi filosofia. Que perguntas os antigos e medievais fizeram, e por que continuam atuais?</p>
<h3>Crátilo</h3>
<p>No Crátilo, Crátilo defende que os nomes têm uma justeza natural, e Hermógenes, que são convencionais; Sócrates examina etimologias e conclui que não se deve buscar o conhecimento das coisas apenas nos nomes ${tag('fato')}.</p>
<h3>Aristóteles</h3>
<p>No Da interpretação, Aristóteles define o nome como som significativo por convenção, sem referência ao tempo, e o verbo como o que significa também o tempo; só o enunciado afirmativo ou negativo pode ser verdadeiro ou falso ${tag('fato')}.</p>
<h3>Agostinho</h3>
<p>Em A doutrina cristã, Agostinho define o signo como aquilo que, além da forma que apresenta aos sentidos, faz vir ao pensamento outra coisa, e distingue signos naturais (a fumaça) e dados, isto é, intencionais (as palavras) ${tag('fato')}. Nas Confissões (I, 8), descreve como aprendeu a falar observando os adultos nomearem as coisas — passagem que Wittgenstein cita para criticar uma visão simples da linguagem ${tag('fato')}.</p>
<h3>Modistas</h3>
<p>Os modistas relacionaram categorias gramaticais e categorias do ser, buscando uma gramática universal ${tag('fato')}.</p>
<h3>Atualidade</h3>
<p>As questões sobre convenção e natureza, sentido e referência, e universais da linguagem continuam no centro da linguística e da filosofia da linguagem ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Justeza dos nomes', 'Adequação natural entre nome e coisa (debate do Crátilo).'],
    ['Enunciado', 'Frase afirmativa ou negativa, que pode ser verdadeira ou falsa.'],
    ['Signo natural', 'Signo que significa sem intenção (fumaça → fogo).'],
    ['Signo dado', 'Signo usado intencionalmente para comunicar (palavra).'],
    ['Definição ostensiva', 'Ensinar o sentido apontando o objeto.'],
  ],
  exemplos: `<p><strong>Ensinar "verde" a uma criança:</strong> aponta-se para a folha e diz-se "verde". Mas como a criança sabe que "verde" é a cor, e não a forma, o tamanho ou a folha? Agostinho supunha que ela entende a intenção do adulto; Wittgenstein mostrou que isso já pressupõe muito domínio da linguagem. O exemplo revela a complexidade de aprender a significar.</p>`,
  contexto: `<p><strong>No mundo:</strong> as Investigações filosóficas de Wittgenstein (1953) começam com a citação das Confissões ${tag('fato')}. <strong>No Brasil:</strong> as obras de Agostinho e de Aristóteles estão traduzidas e são lidas em cursos de filosofia e letras ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a linguagem não se reduz a etiquetas', tag: 'argumento',
    premissas: ['Se as palavras fossem só etiquetas coladas às coisas, bastaria apontar para aprender uma língua.', 'Mas há palavras sem objeto apontável (e, não, talvez, justiça).', 'E até apontar exige entender o que se aponta (cor, forma, número).'],
    conclusao: 'Logo, a linguagem é sistema e prática, e não um conjunto de etiquetas.',
    nota: 'É a lição comum de Saussure (sistema) e de Wittgenstein (uso).',
  },
  objecoes: [
    { objecao: 'A filosofia antiga da linguagem foi superada pela linguística científica.', tag: 'debate',
      resposta: 'A linguística empírica superou muitas etimologias fantasiosas e descrições limitadas. Mas as questões filosóficas — o que é significar, como a linguagem se liga ao pensamento e ao mundo — continuam abertas, e autores modernos dialogam com Aristóteles e Agostinho.' },
  ],
  aplicacao: `<p>Faça um quadro comparativo de Platão (Crátilo), Aristóteles (Da interpretação), Agostinho (A doutrina cristã) e os modistas: o que é o signo, como se liga à coisa, e qual a contribuição de cada um.</p>`,
  fonte: {
    obra: 'Platão, Crátilo; Santo Agostinho, A doutrina cristã, livro II, caps. 1–3; Confissões, livro I, cap. 8', link: null,
    orientacao: `<p>No Crátilo, os dois lados do debate. Em Agostinho, a definição de signo e a narrativa da aprendizagem.</p>`,
  },
  perguntas: [
    { p: 'Qual o debate do Crátilo?', r: 'Se os nomes são naturais ou convencionais.' },
    { p: 'Como Aristóteles distingue nome e verbo?', r: 'O verbo significa também o tempo; o nome não.' },
    { p: 'Que distinção de signos faz Agostinho?', r: 'Signos naturais e signos dados.' },
  ],
  exercicios: [
    mc('Hermógenes defende que os nomes são:', ['Naturais', 'Convencionais', 'Divinos', 'Inexistentes'], 1, 'Crátilo.'),
    mc('Só pode ser verdadeiro ou falso, para Aristóteles, o:', ['Nome', 'Verbo isolado', 'Enunciado', 'Som'], 2, 'Da interpretação.'),
    mc('A fumaça como signo do fogo é signo:', ['Natural', 'Dado', 'Arbitrário', 'Escrito'], 0, 'Agostinho.'),
    mc('Wittgenstein cita as Confissões no início das:', ['Investigações filosóficas', 'Tractatus', 'Cartas', 'Notas'], 0, '1953.'),
    mc('A definição de signo de Agostinho está em:', ['A doutrina cristã', 'Cidade de Deus', 'Solilóquios', 'Trindade'], 0, 'Livro II.'),
    disc('Monte o quadro comparativo de Platão, Aristóteles, Agostinho e os modistas sobre o signo.', ['Signo', 'Relação com a coisa', 'Contribuição', 'Fontes']),
  ],
  resumo: ['Crátilo: natureza × convenção.', 'Aristóteles: nome, verbo, enunciado.', 'Agostinho: signo natural e dado.', 'Confissões I, 8 e Wittgenstein.', 'Modistas: gramática universal.'],
  referencias: [
    { texto: 'Platão, Crátilo.', livro: 'platao-cratilo' },
    { texto: 'Santo Agostinho, A doutrina cristã.', livro: 'agostinho-doutrina-crista' },
    { texto: 'Aristóteles, Da interpretação.', livro: 'aristoteles-interpretacao' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler as fontes indicadas'],
  revisao: [['Crátilo', 'Natureza ou convenção.'], ['Enunciado', 'Verdadeiro ou falso.'], ['Signo dado', 'Intencional.']],
  avancado: {
    texto: `<h3>O verbo interior</h3>
<p>No livro XV de A Trindade, Agostinho fala de um "verbo interior", a palavra concebida na mente antes de qualquer língua, que se exprime depois em sons de uma língua particular ${tag('fato')}. Ele usa essa analogia para pensar o Verbo eterno gerado pelo Pai ${tag('doutrina')}. Tomás de Aquino desenvolveu a noção de verbo mental ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Agostinho, A Trindade, livro XV.' }],
    exercicios: [
      mc('O "verbo interior" é tratado em A Trindade, livro:', ['I', 'VIII', 'XV', 'XXII'], 2, 'Agostinho.'),
      mc('O verbo interior existe:', ['Só em latim', 'Antes de qualquer língua particular', 'Só por escrito', 'Não existe'], 1, 'Mente.'),
      mc('Agostinho usa a noção como analogia do:', ['Espírito Santo', 'Verbo eterno', 'Mundo', 'Anjo'], 1, 'Trindade.'),
      disc('Relacione o verbo interior de Agostinho com o significado em Saussure.', ['Agostinho', 'Saussure', 'Semelhanças', 'Diferenças'])],
  },
}),

aula({
  id: 'li2-4', titulo: 'Saussure, Jakobson, Chomsky e Mattoso Câmara', duracao: '150 min',
  aprendera: ['Explicar as dicotomias de Saussure', 'Aplicar as funções da linguagem de Jakobson', 'Explicar competência, desempenho e gramática universal', 'Conhecer a obra de Mattoso Câmara'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>No século XX, a linguística ganhou autonomia como ciência. Que conceitos centrais vieram de seus principais autores?</p>
<h3>Saussure</h3>
<p>Saussure propôs dicotomias: língua e fala; sincronia (estado da língua num momento) e diacronia (evolução); relações sintagmáticas (em sequência) e paradigmáticas (de substituição) ${tag('fato')}. Para ele, na língua só há diferenças: cada signo vale por oposição aos outros ${tag('fato')}.</p>
<h3>Jakobson</h3>
<p>Roman Jakobson, em "Linguística e poética" (1960), distinguiu seis funções da linguagem: referencial (o assunto), emotiva (o emissor), conativa (o destinatário), fática (o canal), metalinguística (o código) e poética (a própria mensagem) ${tag('fato')}.</p>
<h3>Chomsky</h3>
<p>Chomsky distinguiu competência (conhecimento implícito da língua) e desempenho (uso efetivo) ${tag('fato')}. A frase "Colorless green ideas sleep furiously" é gramatical e sem sentido, mostrando que sintaxe e semântica são distintas ${tag('fato')}. Ele propôs uma gramática universal inata, base comum de todas as línguas ${tag('interpretacao')}.</p>
<h3>Mattoso Câmara</h3>
<p>Joaquim Mattoso Câmara Jr. (1904–1970) introduziu a linguística estrutural no Brasil, com Princípios de linguística geral (1941) e Estrutura da língua portuguesa (1970), descrevendo fonologia e morfologia do português com rigor ${tag('fato')}.</p>`,
  vocabulario: [
    ['Sincronia', 'Estudo da língua num momento dado.'],
    ['Diacronia', 'Estudo da evolução da língua no tempo.'],
    ['Funções da linguagem', 'Seis funções de Jakobson ligadas aos elementos da comunicação.'],
    ['Competência', 'Conhecimento implícito da língua pelo falante (Chomsky).'],
    ['Gramática universal', 'Conjunto de princípios comuns e inatos das línguas (Chomsky).'],
  ],
  exemplos: `<p><strong>Funções num só dia:</strong> "Está chovendo" (referencial); "Que dia lindo!" (emotiva); "Feche a janela" (conativa); "Alô, está me ouvindo?" (fática); "O que significa 'procrastinar'?" (metalinguística); "Minha terra tem palmeiras" (poética). Em cada uma, a linguagem se volta para um elemento diferente da comunicação.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Curso de Saussure foi publicado após sua morte por alunos, a partir de anotações de aulas ${tag('fato')}. <strong>No Brasil:</strong> Mattoso Câmara lecionou na Universidade do Distrito Federal e na Universidade do Brasil, no Rio de Janeiro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a sintaxe é distinta do sentido', tag: 'argumento',
    premissas: ['Uma frase pode estar bem formada e não fazer sentido ("Ideias verdes incolores dormem furiosamente").', 'Uma sequência pode ser compreensível e mal formada ("Eu querer água").', 'Logo, bem-formação e sentido variam independentemente.'],
    conclusao: 'Logo, sintaxe e semântica são níveis distintos da língua.',
    nota: 'Distintos não quer dizer separados: na comunicação real, operam juntos.',
  },
  objecoes: [
    { objecao: 'A gramática universal inata está provada.', tag: 'debate',
      resposta: 'É uma hipótese influente, com argumentos como a rapidez da aquisição infantil. Mas é contestada por linguistas que explicam a aquisição por aprendizagem estatística e interação social, e pela grande diversidade das línguas. O debate continua.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de capítulos do Curso de linguística geral, de Saussure (por exemplo, sobre a natureza do signo e sobre o valor), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Ferdinand de Saussure, Curso de linguística geral (1916), primeira parte, cap. 1, e segunda parte, cap. 4; Roman Jakobson, "Linguística e poética" (1960)', link: null,
    orientacao: `<p>Em Saussure, a arbitrariedade e o valor. Em Jakobson, o esquema das seis funções.</p>`,
  },
  perguntas: [
    { p: 'O que é sincronia?', r: 'O estudo da língua num momento dado.' },
    { p: 'Que função da linguagem predomina em "Alô, está me ouvindo?"', r: 'A fática.' },
    { p: 'O que é competência para Chomsky?', r: 'O conhecimento implícito da língua pelo falante.' },
  ],
  exercicios: [
    mc('"Feche a janela" exemplifica a função:', ['Referencial', 'Conativa', 'Poética', 'Fática'], 1, 'Destinatário.'),
    mc('"Linguística e poética" é de:', ['Saussure', 'Jakobson', 'Chomsky', 'Mattoso'], 1, '1960.'),
    mc('Estudar a evolução histórica da língua é:', ['Sincronia', 'Diacronia', 'Pragmática', 'Fonética'], 1, 'Saussure.'),
    mc('Estrutura da língua portuguesa é de:', ['Mattoso Câmara', 'Anchieta', 'Bagno', 'Saussure'], 0, '1970.'),
    mc('"Colorless green ideas..." mostra que:', ['Sintaxe e semântica são distintas', 'Tudo é sentido', 'Não há gramática', 'Inglês é ilógico'], 0, 'Chomsky.'),
    disc('Faça a ficha de leitura de capítulos do Curso de Saussure.', ['Tese', 'Conceitos', 'Exemplos', 'Avaliação']),
  ],
  resumo: ['Saussure: língua/fala, sincronia/diacronia, valor.', 'Jakobson: seis funções (1960).', 'Chomsky: competência, desempenho, GU.', 'Mattoso Câmara: estruturalismo no Brasil.', 'Sintaxe ≠ semântica.'],
  referencias: [
    { texto: 'Ferdinand de Saussure, Curso de linguística geral (1916).' },
    { texto: 'Roman Jakobson, Linguística e comunicação (coletânea).' },
    { texto: 'Joaquim Mattoso Câmara Jr., Princípios de linguística geral (1941).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler as fontes indicadas'],
  revisao: [['Sincronia', 'Momento.'], ['Seis funções', 'Jakobson.'], ['Competência', 'Chomsky.']],
  avancado: {
    texto: `<h3>O valor linguístico</h3>
<p>Saussure compara o signo a uma peça de xadrez: seu valor não está no material, mas na posição no sistema ${tag('fato')}. Em francês, "mouton" cobre o animal e a carne, enquanto o inglês distingue "sheep" e "mutton": o valor das palavras depende das oposições de cada sistema ${tag('fato')}. Essa ideia fundou o estruturalismo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Ferdinand de Saussure, Curso de linguística geral (1916), segunda parte, cap. 4.' }],
    exercicios: [
      mc('Saussure compara o signo a uma peça de:', ['Xadrez', 'Dominó', 'Relógio', 'Quebra-cabeça'], 0, 'Posição.'),
      mc('"Sheep" e "mutton" mostram que o valor depende do:', ['Som', 'Sistema de oposições', 'Dicionário', 'Acaso'], 1, 'Valor.'),
      mc('A noção de valor fundou o:', ['Estruturalismo', 'Gerativismo', 'Comparatismo', 'Behaviorismo'], 0, 'Interpretação.'),
      disc('Encontre um par de palavras português–inglês ou português–espanhol que mostre diferenças de valor.', ['Palavras', 'Recortes', 'Explicação', 'Saussure'])],
  },
}),

avaliacao('li2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história dos estudos da linguagem e os grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia sua ficha de Saussure e seu quadro comparativo.</li></ul>`,
[
  disc('Trace a história dos estudos da linguagem de Platão a Chomsky, com seis marcos datados, incluindo dois marcos brasileiros, explicando a ideia central de cada um.', ['Marcos', 'Datas', 'Ideias', 'Brasil']),
  disc('Compare a concepção de signo de Agostinho com a de Saussure, mostrando o que cada uma explica e deixa de explicar.', ['Agostinho', 'Saussure', 'Comparação', 'Avaliação']),
]),
];
