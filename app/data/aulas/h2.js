// História II — formação histórica da área e autores fundamentais (etapas 4 e 5 do percurso de História).
// Da investigação grega à escola dos Annales, lida nas fontes. Interpretações e debates vêm marcados.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'h2-1', titulo: 'Heródoto e Tucídides: o nascimento da investigação histórica', duracao: '120 min',
  aprendera: ['Situar Heródoto e Tucídides e suas obras', 'Explicar como cada um justifica o que afirma', 'Distinguir causa imediata e "causa mais verdadeira" em Tucídides', 'Avaliar o uso de discursos reconstruídos'],
  prereq: ['História I (módulo H1): fontes e crítica documental', 'Filosofia antiga (Degrau 5): o ambiente intelectual grego'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de haver arquivos públicos e métodos ensinados, dois gregos do século V a.C. decidiram investigar guerras recentes e escrever o que tinham apurado. As escolhas que fizeram — o que contar, em que acreditar, como explicar — ainda organizam a disciplina.</p>

<h3>Heródoto de Halicarnasso</h3>
<p>Heródoto (c. 484–c. 425 a.C.) escreveu as <em>Histórias</em>, depois divididas em nove livros, sobre as guerras entre gregos e persas (Maratona, 490; Termópilas e Salamina, 480; Plateia, 479) ${tag('fato')}. O proêmio declara dois objetivos: que os grandes feitos de gregos e bárbaros não se apaguem com o tempo, e expor <em>por que causa</em> guerrearam ${tag('fato')}. Viajou, ouviu informantes e descreveu povos (egípcios, citas, persas) com interesse etnográfico.</p>
<p>No livro II (cap. 99), distingue o que conta a partir de sua própria visão, de seu juízo e de sua investigação, e o que apenas relata como dito pelos egípcios ${tag('fato')}. Muitas vezes registra versões diferentes de um fato sem decidir entre elas, ou diz não acreditar no que relata. Cícero o chamou "pai da história" (<em>Sobre as leis</em> I,5); Plutarco escreveu um opúsculo acusando-o de malícia e parcialidade ${tag('fato')}. A historiografia moderna tem confirmado parte de suas informações pela arqueologia e corrigido outras ${tag('interpretacao')}.</p>

<h3>Tucídides de Atenas</h3>
<p>Tucídides (c. 460–c. 400 a.C.), ateniense, foi estratego e exilado depois da perda de Anfípolis (424 a.C.) ${tag('fato')}. Escreveu a <em>História da Guerra do Peloponeso</em> (431–404 a.C.), que se interrompe nos acontecimentos de 411 ${tag('fato')}. Seu método, declarado em I,22: para os fatos, não escrever o que ouviu do primeiro que encontrou, mas verificar com o maior rigor, inclusive o que ele mesmo presenciou, porque as testemunhas divergem por parcialidade ou memória; para os discursos, reproduzir o sentido geral do que foi dito, fazendo cada orador dizer "o que era necessário" na situação ${tag('fato')}. Por isso a obra seria "uma aquisição para sempre" (<em>ktêma es aiei</em>), e não peça para agradar a um auditório.</p>
<p>Em I,23 distingue os motivos alegados para a guerra da "causa mais verdadeira": o crescimento do poder de Atenas e o medo que isso provocou em Esparta ${tag('fato')}. É a primeira distinção explícita entre pretexto e causa profunda — instrumento que todo historiador usa ${tag('interpretacao')}.</p>

<h3>Duas maneiras de investigar</h3>
<p>Heródoto amplia o olhar para costumes, geografia e tradições, aceitando registrar o que não pode verificar. Tucídides restringe o objeto (a guerra, a política) e o critério (testemunho verificado, preferencialmente contemporâneo). Ambos fazem <em>investigação</em>; diferem no grau de exigência e no alcance ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Historíē', 'Investigação; termo do proêmio de Heródoto.'],
    ['Proêmio', 'Abertura em que o autor declara objeto e propósito da obra.'],
    ['Causa mais verdadeira', 'Em Tucídides (I,23), a causa profunda, distinta dos pretextos.'],
    ['Discurso reconstruído', 'Fala composta pelo historiador segundo o sentido geral do que foi dito.'],
    ['Ktêma es aiei', '"Aquisição para sempre": a pretensão de Tucídides para sua obra.'],
  ],
  exemplos: `<p><strong>O Diálogo dos Mélios</strong> (Tucídides V,84–116): os atenienses exigem a submissão da ilha neutra de Melos e argumentam que "os fortes fazem o que podem e os fracos sofrem o que devem". Não é ata de reunião: é composição do historiador para mostrar a lógica do poder. Ler esse trecho exige separar o fato (o cerco e a destruição de Melos, 416 a.C.) da reconstrução literária dos argumentos.</p>`,
  contexto: `<p><strong>No mundo:</strong> Atenas no século V a.C. é também o tempo dos sofistas, de Sócrates e da tragédia; os historiadores partilham com eles a reflexão sobre causa, responsabilidade e poder. <strong>No Brasil:</strong> os autores clássicos chegaram à formação letrada colonial pelos colégios jesuíticos, cujo plano de estudos (<em>Ratio studiorum</em>, 1599) centrava-se no latim e nos autores antigos ${tag('fato')}; ainda hoje Tucídides é leitura de base nos cursos de relações internacionais, como fundador do chamado "realismo" ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que Tucídides distingue pretexto e causa', tag: 'argumento',
    premissas: ['As partes de uma guerra alegam publicamente os motivos que as justificam.', 'Motivos alegados podem ocultar o que efetivamente as levou a agir.', 'Explicar um acontecimento exige identificar o que efetivamente produziu a decisão.'],
    conclusao: 'Logo, o historiador não pode tomar os motivos alegados como causas sem examiná-los: deve buscar a causa que melhor explica a conduta das partes.',
    nota: 'O argumento é válido; a dificuldade está em provar qual é a "causa mais verdadeira" — Tucídides a afirma com base em sua análise do equilíbrio de poder, que é interpretação, embora bem fundamentada.',
  },
  objecoes: [
    { objecao: 'Se Tucídides inventou os discursos, sua obra é ficção.', tag: 'debate',
      resposta: 'Ele declara o procedimento (I,22), o que permite ao leitor separar os fatos narrados, verificados, dos discursos, reconstruídos. A obra não é ficção, mas também não é transcrição: o historiador moderno lê os discursos como análise política do autor.' },
    { objecao: 'Heródoto é crédulo e por isso inútil.', tag: 'debate',
      resposta: 'Ele distingue o que viu do que ouviu e frequentemente marca sua dúvida. Parte de suas informações foi confirmada por outras fontes; seu valor exige, como toda fonte, a crítica de cada passagem.' },
  ],
  aplicacao: `<p>Escolha um conflito atual noticiado na imprensa. Liste os motivos alegados por cada parte e proponha, à maneira de Tucídides, uma hipótese sobre a "causa mais verdadeira", indicando que evidência seria necessária para sustentá-la.</p>`,
  fonte: {
    obra: 'Heródoto, Histórias, proêmio e II,99; Tucídides, História da Guerra do Peloponeso, I,20–23', link: null,
    orientacao: `<p>Leia os dois proêmios e os trechos metodológicos. Monte uma tabela comparando: objeto, tipo de fonte, critério de verdade, tratamento das versões divergentes e finalidade da obra.</p>`,
  },
  perguntas: [
    { p: 'Que dois objetivos Heródoto declara no proêmio?', r: 'Preservar a memória dos grandes feitos e expor a causa da guerra entre gregos e persas.' },
    { p: 'Qual é a "causa mais verdadeira" da Guerra do Peloponeso para Tucídides?', r: 'O crescimento do poder de Atenas e o medo que isso causou em Esparta (I,23).' },
    { p: 'Como Tucídides trata os discursos?', r: 'Reconstrói o sentido geral, fazendo cada orador dizer o que a situação exigia (I,22).' },
  ],
  exercicios: [
    mc('As Histórias de Heródoto tratam principalmente:', ['Da Guerra do Peloponeso', 'Das guerras entre gregos e persas', 'Da fundação de Roma', 'Das conquistas de Alexandre'], 1, 'Guerras greco-persas; Tucídides narra a do Peloponeso.'),
    mc('Quem chamou Heródoto de "pai da história"?', ['Tucídides', 'Plutarco', 'Cícero', 'Agostinho'], 2, 'Cícero, Sobre as leis I,5. Plutarco o acusou de malícia.'),
    mc('A Guerra do Peloponeso durou de:', ['490 a 479 a.C.', '431 a 404 a.C.', '336 a 323 a.C.', '264 a 146 a.C.'], 1, '431–404 a.C.; a obra de Tucídides para em 411.'),
    mc('O Diálogo dos Mélios deve ser lido como:', ['Ata literal da reunião', 'Reconstrução do historiador sobre um fato real', 'Lenda sem base factual', 'Discurso de Péricles'], 1, 'O cerco de Melos (416 a.C.) é fato; os argumentos são composição de Tucídides.'),
    mc('A distinção entre pretexto e causa profunda aparece explicitamente em:', ['Heródoto II,99', 'Tucídides I,23', 'Cícero, Sobre as leis', 'Plutarco, Vidas'], 1, 'I,23: a "causa mais verdadeira".'),
    disc('Compare os métodos de Heródoto e Tucídides quanto às fontes, à verificação e às versões divergentes. Qual dos dois procedimentos você adotaria para estudar um tema com poucas fontes, e por quê?', ['Expõe os dois métodos com as passagens', 'Compara verificação e versões', 'Escolhe e justifica', 'Reconhece limites da escolha']),
  ],
  resumo: ['Heródoto: guerras greco-persas; vista, juízo e investigação (II,99).', 'Tucídides: Guerra do Peloponeso; método em I,22.', 'Causa mais verdadeira x pretextos (I,23).', 'Discursos reconstruídos, declarados como tais.', 'Dois graus de exigência, uma mesma investigação.'],
  referencias: [
    { texto: 'Heródoto, Histórias, proêmio e livro II, 99.' },
    { texto: 'Tucídides, História da Guerra do Peloponeso, I, 20–23; V, 84–116.' },
    { texto: 'Cícero, Sobre as leis, I, 5.' },
    { texto: 'Plutarco, Sobre a malícia de Heródoto.' },
    { texto: 'Arnaldo Momigliano, As raízes clássicas da historiografia moderna (1990).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos metodológicos indicados'],
  revisao: [['Heródoto', 'Histórias; guerras greco-persas; "pai da história" (Cícero).'], ['Tucídides I,22', 'Fatos verificados; discursos pelo sentido geral.'], ['Tucídides I,23', 'Causa mais verdadeira: poder de Atenas e medo de Esparta.']],
  avancado: {
    texto: `<h3>Políbio e a história pragmática</h3>
<p>Políbio (c. 200–c. 118 a.C.), grego levado a Roma como refém, escreveu sobre como Roma dominou o Mediterrâneo em pouco mais de cinquenta anos ${tag('fato')}. Defendeu que o historiador deve ter experiência política e militar e conhecer os lugares, e criticou historiadores que escreviam só a partir de livros ${tag('interpretacao')}. Sua teoria do ciclo das constituições (monarquia, aristocracia, democracia e suas degenerações) influenciou o pensamento político até a modernidade ${tag('interpretacao')}.</p>
<h3>A historiografia antiga como gênero literário</h3>
<p>Para os antigos, a história era também arte retórica. Arnaldo Momigliano mostrou como a pesquisa antiquária (de instituições, costumes, inscrições) e a narrativa política seguiram caminhos separados até se unirem na erudição moderna ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Políbio, Histórias, livros I e VI.' }, { texto: 'Arnaldo Momigliano, "História antiga e o antiquário" (1950).' }],
    exercicios: [
      mc('Políbio investigou principalmente:', ['A fundação de Atenas', 'Como Roma dominou o Mediterrâneo', 'As guerras persas', 'A queda de Constantinopla'], 1, 'Histórias, livro I.'),
      mc('Segundo Momigliano, antiquários e narradores políticos:', ['Sempre trabalharam juntos', 'Seguiram caminhos separados até a erudição moderna', 'Eram as mesmas pessoas na Grécia', 'Não existiram na Antiguidade'], 1, 'Tese do ensaio de 1950.'),
      mc('Para Políbio, o historiador deveria ter:', ['Apenas formação retórica', 'Experiência política e conhecimento dos lugares', 'Formação religiosa', 'Nenhuma participação na vida pública'], 1, 'Crítica aos historiadores "de gabinete".'),
      disc('A exigência de Políbio (experiência prática e conhecimento dos lugares) ainda vale para o historiador de hoje? Argumente com um exemplo.', ['Expõe a tese de Políbio', 'Argumenta a favor ou contra', 'Usa exemplo concreto', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'h2-2', titulo: 'A história cristã: Eusébio, Agostinho e Beda', duracao: '120 min',
  aprendera: ['Explicar a inovação documental de Eusébio de Cesareia', 'Distinguir a teologia da história de Agostinho de uma crônica de acontecimentos', 'Identificar o método de Beda na História eclesiástica', 'Relacionar a tradição cristã de escrever história com o Brasil colonial'],
  prereq: ['Aula anterior (Heródoto e Tucídides)', 'Fase teológica concluída: Patrística (Módulo 2B)'],
  explicacao: `
<h3>O problema</h3>
<p>O cristianismo trouxe uma convicção nova para a escrita da história: o tempo tem começo, sentido e fim, e Deus age nele. Como essa convicção mudou o modo de investigar e narrar? E como distinguir, nesses autores, o que é afirmação de fé do que é informação verificável?</p>

<h3>Eusébio de Cesareia</h3>
<p>Eusébio (c. 260–339/340), bispo de Cesareia na Palestina, escreveu a <em>História eclesiástica</em> em dez livros, dos apóstolos até cerca de 324 ${tag('fato')}. Sua inovação foi citar literalmente documentos — cartas, atas, trechos de autores — em vez de apenas resumi-los ${tag('fato')}. Graças a isso conservamos fragmentos de obras perdidas. Escreveu também a <em>Crônica</em>, tabelas sincrônicas de reinos e acontecimentos, que São Jerônimo traduziu para o latim e continuou ${tag('fato')}.</p>
<p>A crítica moderna valoriza os documentos que Eusébio transmite e examina com cuidado sua interpretação, que vê na conversão de Constantino o cumprimento de um plano providencial ${tag('interpretacao')}.</p>

<h3>Santo Agostinho: as duas cidades</h3>
<p>Depois do saque de Roma pelos godos de Alarico (410), pagãos acusaram o abandono dos deuses. Agostinho respondeu com <em>A Cidade de Deus</em> (413–426) ${tag('fato')}. Não é uma crônica: é uma <strong>teologia da história</strong>. Dois amores fizeram duas cidades — o amor de si até o desprezo de Deus, a terrena; o amor de Deus até o desprezo de si, a celeste (XIV,28) ${tag('fato')}. As duas estão misturadas na história até o fim dos tempos, e nenhum império, nem mesmo o cristão, se identifica com o Reino de Deus ${tag('interpretacao')}. A pedido de Agostinho, Paulo Orósio escreveu as <em>Histórias contra os pagãos</em> (c. 417), essa sim uma narrativa de calamidades da história humana ${tag('fato')}.</p>
<p>Distinção necessária: a afirmação de que Deus conduz a história é doutrina de fé ${tag('doutrina')}; a identificação de um acontecimento concreto como desígnio providencial é interpretação de um autor ${tag('interpretacao')}. Agostinho mesmo foi prudente nessa segunda operação.</p>

<h3>São Beda, o Venerável</h3>
<p>Na <em>História eclesiástica do povo inglês</em> (731), Beda abre com um prefácio ao rei Ceolwulf em que nomeia seus informantes e as fontes consultadas, como o abade Albino de Cantuária e o presbítero Nothelmo, que copiou documentos nos arquivos de Roma ${tag('fato')}. Transcreve cartas papais, data pelos anos do Senhor e distingue o que soube por escrito do que soube por tradição oral ${tag('fato')}. Os relatos de milagres convivem com esse cuidado documental; o historiador de hoje separa a informação verificável da narrativa edificante, sem desprezar uma nem outra como fonte de sua época ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['História eclesiástica', 'Gênero inaugurado por Eusébio: história da Igreja com documentos citados.'],
    ['Crônica', 'Registro cronológico de acontecimentos, ano a ano ou em tabelas.'],
    ['Teologia da história', 'Reflexão sobre o sentido da história à luz da fé.'],
    ['Providência', 'Governo de Deus sobre o mundo e a história.'],
    ['Hagiografia', 'Relato da vida de santos.'],
  ],
  exemplos: `<p><strong>Lendo Beda com método:</strong> diante do relato de um milagre atribuído a um bispo, o historiador pergunta quem o informou a Beda, a que distância no tempo, e se há outro testemunho. Não precisa afirmar nem negar o milagre para usar o texto como fonte sobre o culto ao santo, a organização da Igreja e a mentalidade do século VIII.</p>`,
  contexto: `<p><strong>No mundo:</strong> esses autores escrevem entre a crise do Império Romano e a cristianização dos povos germânicos; a história eclesiástica será o modelo historiográfico do Ocidente medieval. <strong>No Brasil:</strong> a tradição de escrever história dentro de uma visão providencial chega com os cronistas religiosos. Frei Vicente do Salvador, franciscano nascido na Bahia, concluiu em 1627 uma <em>História do Brasil</em>, considerada a primeira escrita por um autor nascido na colônia; permaneceu inédita até 1888, quando foi publicada com edição de Capistrano de Abreu ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a crença na Providência não dispensa a crítica das fontes', tag: 'argumento',
    premissas: ['A fé afirma que Deus conduz a história, mas não revela os detalhes de cada acontecimento.', 'Os detalhes dos acontecimentos só se conhecem por testemunhos humanos.', 'Testemunhos humanos podem ser falhos e precisam ser examinados.'],
    conclusao: 'Logo, um historiador cristão continua obrigado à crítica das fontes para conhecer o que aconteceu.',
    nota: 'Eusébio e Beda praticam essa obrigação ao citar documentos e nomear informantes; é a mesma lição que a erudição católica levaria adiante com Mabillon e os bolandistas.',
  },
  objecoes: [
    { objecao: 'A história cristã é propaganda, não história.', tag: 'debate',
      resposta: 'Ela tem uma perspectiva declarada, como toda historiografia. Seu valor como fonte depende de cada passagem: os documentos transcritos por Eusébio e Beda são insubstituíveis, e a interpretação providencial é distinguível deles.' },
  ],
  aplicacao: `<p>Leia um capítulo de Beda (livro I ou II) e separe em duas colunas: informações datáveis e verificáveis; interpretações e relatos edificantes. Indique, para três informações, de onde Beda diz tê-las obtido.</p>`,
  fonte: {
    obra: 'Beda, História eclesiástica do povo inglês, prefácio; Agostinho, A Cidade de Deus, XIV,28', link: null,
    orientacao: `<p>No prefácio de Beda, liste as fontes e os informantes que ele nomeia. Em Agostinho, leia o capítulo das duas cidades e reescreva a tese com suas palavras, distinguindo-a de uma narrativa de fatos.</p>`,
  },
  perguntas: [
    { p: 'Qual foi a inovação documental de Eusébio?', r: 'Citar literalmente documentos (cartas, atas, trechos de obras), conservando textos perdidos.' },
    { p: 'Por que A Cidade de Deus não é uma crônica?', r: 'Porque é teologia da história: interpreta o sentido da história pelas duas cidades, sem narrar os fatos ano a ano.' },
    { p: 'O que Beda faz no prefácio da História eclesiástica?', r: 'Nomeia seus informantes e as fontes consultadas.' },
  ],
  exercicios: [
    mc('A História eclesiástica de Eusébio vai dos apóstolos até cerca de:', ['70', '324', '476', '731'], 1, 'Cerca de 324, no tempo de Constantino.'),
    mc('A Cidade de Deus foi escrita em resposta:', ['À conversão de Constantino', 'Ao saque de Roma em 410', 'À queda de Constantinopla', 'À coroação de Carlos Magno'], 1, 'Pagãos atribuíam o saque ao abandono dos deuses.'),
    mc('Para Agostinho, as duas cidades foram feitas por:', ['Dois povos', 'Dois amores', 'Duas leis', 'Dois impérios'], 1, 'XIV,28: amor de si e amor de Deus.'),
    mc('As Histórias contra os pagãos, escritas a pedido de Agostinho, são de:', ['Eusébio', 'Orósio', 'Jerônimo', 'Beda'], 1, 'Paulo Orósio, c. 417.'),
    mc('A primeira História do Brasil escrita por autor nascido na colônia é de:', ['Pero de Magalhães Gândavo', 'Frei Vicente do Salvador', 'Varnhagen', 'Rocha Pita'], 1, 'Concluída em 1627, publicada em 1888.'),
    disc('Distinga, em um trecho de Eusébio, Agostinho ou Beda, o que é doutrina de fé, o que é interpretação do autor e o que é informação histórica verificável.', ['Escolhe e cita o trecho', 'Identifica doutrina', 'Identifica interpretação', 'Identifica informação verificável e sua fonte']),
  ],
  resumo: ['Eusébio: documentos citados; Crônica traduzida por Jerônimo.', 'Agostinho: teologia da história; duas cidades, dois amores.', 'Orósio: narrativa a pedido de Agostinho.', 'Beda: informantes nomeados, documentos transcritos.', 'Frei Vicente do Salvador: História do Brasil (1627).'],
  referencias: [
    { texto: 'Eusébio de Cesareia, História eclesiástica.' },
    { texto: 'Santo Agostinho, A Cidade de Deus, XIV, 28.' },
    { texto: 'Paulo Orósio, Histórias contra os pagãos (c. 417).' },
    { texto: 'Beda, o Venerável, História eclesiástica do povo inglês (731), prefácio.' },
    { texto: 'Frei Vicente do Salvador, História do Brasil (1627; ed. Capistrano de Abreu, 1888).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos indicados'],
  revisao: [['Eusébio', 'História eclesiástica, com documentos citados.'], ['Agostinho', 'A Cidade de Deus: duas cidades, dois amores (XIV,28).'], ['Beda', 'Prefácio com informantes e fontes.']],
  avancado: {
    texto: `<h3>A historiografia bizantina e islâmica</h3>
<p>No Oriente, Procópio de Cesareia (século VI) narrou as guerras de Justiniano e, numa <em>História secreta</em>, atacou o próprio imperador que elogiava nas obras oficiais ${tag('fato')} — caso exemplar de um mesmo autor com intenções diferentes conforme o público. No mundo islâmico, Ibn Khaldun (1332–1406), na <em>Muqaddima</em>, propôs examinar os relatos pela plausibilidade das condições sociais e formulou uma teoria do ciclo das dinastias baseada na coesão do grupo (<em>asabiyya</em>) ${tag('interpretacao')}.</p>
<h3>Providência e filosofia da história</h3>
<p>A ideia de uma história com sentido foi secularizada na modernidade, em filosofias do progresso como as de Hegel e Marx ${tag('interpretacao')}. Karl Löwith, em <em>O sentido da história</em> (1949), sustentou que essas filosofias dependem da escatologia cristã ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Procópio de Cesareia, História secreta.' }, { texto: 'Ibn Khaldun, Muqaddima (1377).' }, { texto: 'Karl Löwith, O sentido da história (1949).' }],
    exercicios: [
      mc('A História secreta, em que ataca Justiniano, é de:', ['Eusébio', 'Procópio', 'Orósio', 'Ibn Khaldun'], 1, 'Procópio de Cesareia, século VI.'),
      mc('O conceito de asabiyya (coesão do grupo) é de:', ['Ibn Khaldun', 'Avicena', 'Beda', 'Agostinho'], 0, 'Muqaddima.'),
      mc('A tese de que filosofias do progresso dependem da escatologia cristã é de:', ['Karl Löwith', 'Fernand Braudel', 'Marc Bloch', 'Leopold von Ranke'], 0, 'O sentido da história (1949).'),
      disc('Exponha a tese de Löwith e uma objeção a ela. As filosofias do progresso são uma escatologia cristã secularizada?', ['Expõe a tese', 'Formula objeção séria', 'Usa exemplos (Hegel, Marx ou outro)', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'h2-3', titulo: 'Erudição e ciência histórica: dos humanistas a Ranke', duracao: '120 min',
  aprendera: ['Identificar as contribuições dos humanistas e da erudição dos séculos XVI–XVIII', 'Explicar a crítica iluminista e a "história dos costumes"', 'Explicar o método de Ranke e o seminário histórico', 'Situar a historiografia brasileira do século XIX'],
  prereq: ['Aulas anteriores do módulo', 'Crítica das fontes (aula h1-3)'],
  explicacao: `
<h3>O problema</h3>
<p>Entre o Renascimento e o século XIX, a história deixa de ser principalmente gênero literário e se torna disciplina com regras, instituições e coleções de documentos. Como isso aconteceu, e o que se ganhou e perdeu?</p>

<h3>Humanistas e eruditos</h3>
<p>Os humanistas italianos recuperaram textos antigos e desenvolveram a filologia: Lorenzo Valla e a Doação de Constantino (1440) são o caso exemplar ${tag('fato')}. Leonardo Bruni, chanceler de Florença, escreveu a história do povo florentino usando documentos do arquivo da cidade ${tag('fato')}. Jean Bodin, no <em>Método para o fácil conhecimento da história</em> (1566), propôs critérios para avaliar historiadores e relacionar a história às instituições e ao clima ${tag('fato')}. No século XVII, Mabillon e os bolandistas fixaram as regras da diplomática e da crítica hagiográfica ${tag('fato')}.</p>

<h3>Os iluministas</h3>
<p>Voltaire, no <em>Ensaio sobre os costumes</em> (1756), quis escrever a história das civilizações e dos costumes, não só de reis e batalhas ${tag('fato')}. Edward Gibbon, em <em>Declínio e queda do Império Romano</em> (1776–1788), uniu erudição e estilo; atribuiu parte do declínio ao cristianismo, tese que a historiografia posterior discutiu e em grande parte abandonou ${tag('debate')}. Os iluministas ampliaram o objeto da história, mas muitas vezes julgaram o passado pelos valores do próprio tempo ${tag('interpretacao')}.</p>

<h3>O século XIX: a história como disciplina</h3>
<p>Barthold Georg Niebuhr aplicou a crítica às tradições da Roma arcaica na <em>História romana</em> (1811–1812) ${tag('fato')}. Leopold von Ranke (1795–1886) declarou, no prefácio de 1824, que não pretendia julgar o passado nem instruir o presente, mas mostrar "como propriamente foi" ${tag('fato')}. Fez dos arquivos diplomáticos (como os relatórios dos embaixadores venezianos) sua fonte central e formou alunos em seminários na Universidade de Berlim ${tag('fato')}. Começam as grandes coleções de fontes, como os <em>Monumenta Germaniae Historica</em>, a partir de 1819 ${tag('fato')}.</p>
<p>Ganhos: método ensinável, edições críticas, profissão acadêmica. Limites apontados pelo século XX: concentração na história política e diplomática, confiança excessiva de que os documentos "falam sozinhos" ${tag('interpretacao')}.</p>

<h3>O Brasil no século XIX</h3>
<p>O Instituto Histórico e Geográfico Brasileiro (1838) foi criado para coligir documentos e escrever a história nacional, num projeto ligado à construção do Estado imperial ${tag('fato')}. Francisco Adolfo de Varnhagen, com pesquisas em arquivos de Portugal e Espanha, publicou a <em>História geral do Brasil</em> (1854–1857), obra fundadora e, ao mesmo tempo, marcada pela perspectiva do Estado imperial e pela visão negativa sobre os indígenas, criticada desde então ${tag('debate')}.</p>`,
  vocabulario: [
    ['Filologia', 'Estudo da língua e da transmissão dos textos.'],
    ['Erudição', 'Pesquisa minuciosa de fontes, edições e datas.'],
    ['Seminário histórico', 'Ensino da pesquisa com fontes, em grupo, criado nas universidades alemãs.'],
    ['Coleção de fontes', 'Edição sistemática de documentos (ex.: Monumenta Germaniae Historica).'],
    ['Historicismo', 'Corrente que compreende cada época por si mesma e em seu desenvolvimento.'],
  ],
  exemplos: `<p><strong>Ranke e os embaixadores venezianos:</strong> os relatórios que os embaixadores de Veneza enviavam ao Senado descreviam com detalhe cortes estrangeiras. Ranke os usou como testemunhos de observadores bem informados e relativamente distantes das cortes que descreviam — aplicando o critério de competência e independência estudado no módulo H1.</p>`,
  contexto: `<p><strong>No mundo:</strong> a profissionalização da história acompanha a formação dos Estados nacionais, que financiam arquivos e coleções para fundamentar sua identidade. <strong>No Brasil:</strong> o IHGB, protegido por D. Pedro II, cumpriu esse papel; a própria Revista do IHGB tornou-se arquivo de documentos e debates do século XIX ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'O ganho e o limite do "como propriamente foi"', tag: 'argumento',
    premissas: ['O ideal de Ranke exige subordinar a narrativa às fontes e não ao juízo do historiador.', 'Isso protege contra o anacronismo e a propaganda.', 'Mas as fontes não escolhem as perguntas: é o historiador que seleciona temas e documentos.'],
    conclusao: 'Logo, o ideal de Ranke é uma norma valiosa de fidelidade às fontes, mas não elimina a responsabilidade do historiador pelas perguntas que faz.',
    nota: 'É a síntese que o século XX formulará: perguntas próprias, respostas tiradas das fontes.',
  },
  objecoes: [
    { objecao: 'Ranke era ingênuo: acreditava em objetividade absoluta.', tag: 'debate',
      resposta: 'A frase de 1824 recusava sobretudo a função de julgar e moralizar. Ranke tinha convicções religiosas e políticas explícitas; seu método é uma norma de fidelidade, não uma teoria de que o historiador não tem ponto de vista.' },
  ],
  aplicacao: `<p>Escolha um capítulo da História geral do Brasil de Varnhagen (ou de outra história do século XIX) e identifique: as fontes que cita, os juízos que emite e um ponto em que a historiografia posterior o corrigiu.</p>`,
  fonte: {
    obra: 'Leopold von Ranke, prefácio a Histórias dos povos latinos e germânicos (1824); Varnhagen, História geral do Brasil, prefácio', link: null,
    orientacao: `<p>No prefácio de Ranke, localize a frase sobre "como propriamente foi" e o que ela recusa. No prefácio de Varnhagen, liste os arquivos que ele diz ter consultado e o objetivo declarado da obra.</p>`,
  },
  perguntas: [
    { p: 'O que Voltaire quis acrescentar à história?', r: 'A história dos costumes e das civilizações, além de reis e batalhas.' },
    { p: 'O que Ranke recusava no prefácio de 1824?', r: 'Julgar o passado e instruir o presente; queria mostrar como propriamente foi.' },
    { p: 'Qual a obra fundadora de Varnhagen?', r: 'História geral do Brasil (1854–1857).' },
  ],
  exercicios: [
    mc('O Método para o fácil conhecimento da história (1566) é de:', ['Bodin', 'Bruni', 'Mabillon', 'Gibbon'], 0, 'Jean Bodin.'),
    mc('Declínio e queda do Império Romano foi escrito por:', ['Voltaire', 'Gibbon', 'Niebuhr', 'Ranke'], 1, 'Edward Gibbon, 1776–1788.'),
    mc('A frase "como propriamente foi" está em prefácio de:', ['1756', '1811', '1824', '1854'], 2, 'Ranke, 1824.'),
    mc('Os Monumenta Germaniae Historica são:', ['Uma escola filosófica', 'Uma coleção de fontes medievais', 'Um tratado de Ranke', 'Um museu de Berlim'], 1, 'Coleção iniciada em 1819.'),
    mc('A História geral do Brasil (1854–1857) é de:', ['Capistrano de Abreu', 'Varnhagen', 'Frei Vicente do Salvador', 'Von Martius'], 1, 'Francisco Adolfo de Varnhagen.'),
    disc('Compare a contribuição dos eruditos dos séculos XVI–XVII com a dos iluministas para a história: o que cada um acrescentou e que limite cada um tinha?', ['Expõe a erudição com exemplos', 'Expõe os iluministas com exemplos', 'Aponta limites de cada um', 'Conclusão comparativa']),
  ],
  resumo: ['Humanistas: filologia (Valla), documentos (Bruni), método (Bodin).', 'Mabillon e bolandistas: diplomática e hagiografia crítica.', 'Iluministas: costumes e civilização (Voltaire, Gibbon).', 'Ranke: arquivos, seminário, "como propriamente foi".', 'IHGB (1838) e Varnhagen (1854–1857).'],
  referencias: [
    { texto: 'Jean Bodin, Methodus ad facilem historiarum cognitionem (1566).' },
    { texto: 'Voltaire, Ensaio sobre os costumes (1756).' },
    { texto: 'Edward Gibbon, Declínio e queda do Império Romano (1776–1788).' },
    { texto: 'Leopold von Ranke, Histórias dos povos latinos e germânicos (1824), prefácio.' },
    { texto: 'Francisco Adolfo de Varnhagen, História geral do Brasil (1854–1857).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os prefácios indicados'],
  revisao: [['Ranke', 'Arquivos, seminário, "como propriamente foi" (1824).'], ['Gibbon', 'Declínio e queda do Império Romano (1776–1788).'], ['Varnhagen', 'História geral do Brasil (1854–1857).']],
  avancado: {
    texto: `<h3>Historicismo e seus críticos</h3>
<p>O historicismo alemão (Ranke, Droysen, Meinecke) insistiu em compreender cada época por si mesma. Johann Gustav Droysen, no <em>Manual de teoria da história</em> (Historik), sistematizou a relação entre heurística, crítica e interpretação ${tag('interpretacao')}. Nietzsche, na <em>Segunda consideração intempestiva</em> (1874), criticou o excesso de história que paralisa a vida ${tag('interpretacao')}. Karl Popper, em <em>A miséria do historicismo</em> (1957), atacou outra coisa com o mesmo nome: a pretensão de prever o curso da história por leis ${tag('debate')}.</p>
<h3>Capistrano de Abreu</h3>
<p>Capistrano (1853–1927) criticou a história centrada na administração e propôs estudar o povoamento do interior, os caminhos e a vida material; seus <em>Capítulos de história colonial</em> (1907) marcam essa virada na historiografia brasileira ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'J. G. Droysen, Historik (lições de 1857 em diante).' }, { texto: 'Friedrich Nietzsche, Da utilidade e desvantagem da história para a vida (1874).' }, { texto: 'Capistrano de Abreu, Capítulos de história colonial (1907).' }],
    exercicios: [
      mc('A Segunda consideração intempestiva (1874), sobre a utilidade da história para a vida, é de:', ['Droysen', 'Nietzsche', 'Popper', 'Ranke'], 1, 'Nietzsche.'),
      mc('Em A miséria do historicismo, Popper critica:', ['A crítica documental', 'A pretensão de prever a história por leis', 'O uso de arquivos', 'A história dos costumes'], 1, '"Historicismo" em outro sentido.'),
      mc('Capítulos de história colonial (1907) é de:', ['Varnhagen', 'Capistrano de Abreu', 'Gilberto Freyre', 'Sérgio Buarque'], 1, 'Capistrano de Abreu.'),
      disc('O termo "historicismo" tem sentidos diferentes em Ranke e em Popper. Explique os dois e por que confundi-los produz erro.', ['Define o historicismo alemão', 'Define o alvo de Popper', 'Mostra a confusão possível', 'Conclusão'])],
  },
}),

aula({
  id: 'h2-4', titulo: 'Os Annales: Marc Bloch, Lucien Febvre e Fernand Braudel', duracao: '120 min',
  aprendera: ['Explicar o programa dos Annales', 'Identificar as obras centrais de Bloch, Febvre e Braudel', 'Usar os conceitos de história-problema, mentalidades e longa duração', 'Avaliar as críticas aos Annales'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>No início do século XX, a história acadêmica concentrava-se em política, diplomacia e grandes personagens. Um grupo de historiadores franceses propôs outra coisa: uma história de problemas, aberta à economia, à geografia, à sociologia e às mentalidades. Esse programa transformou a disciplina no mundo inteiro, inclusive no Brasil.</p>

<h3>A revista e o programa</h3>
<p>Em 1929, Marc Bloch e Lucien Febvre fundaram em Estrasburgo a revista <em>Annales d'histoire économique et sociale</em> ${tag('fato')}. O programa: substituir a "história-narrativa" de acontecimentos por uma <strong>história-problema</strong>, que parte de uma pergunta; dialogar com as ciências sociais; estudar estruturas econômicas, sociais e mentais ${tag('interpretacao')}.</p>

<h3>Marc Bloch</h3>
<p>Em <em>Os reis taumaturgos</em> (1924), Bloch estudou a crença de que os reis da França e da Inglaterra curavam as escrófulas pelo toque ${tag('fato')}: não para decidir se curavam, mas para entender por que se acreditou nisso por séculos — uma história das crenças coletivas ${tag('interpretacao')}. <em>A sociedade feudal</em> (1939–1940) analisou laços de dependência, economia e mentalidade de uma época inteira. Combatente nas duas guerras, escreveu <em>A estranha derrota</em> (1940, publicada em 1946) sobre o colapso francês, entrou na Resistência e foi fuzilado pela Gestapo em junho de 1944 ${tag('fato')}.</p>

<h3>Lucien Febvre</h3>
<p>Em <em>O problema da incredulidade no século XVI: a religião de Rabelais</em> (1942), Febvre perguntou se Rabelais podia ter sido ateu no sentido moderno e argumentou que faltavam à época os instrumentos conceituais para isso — a "utensilagem mental" ${tag('interpretacao')}. É uma lição contra o anacronismo psicológico, embora a tese tenha sido contestada ${tag('debate')}.</p>

<h3>Fernand Braudel</h3>
<p>Braudel escreveu grande parte de <em>O Mediterrâneo e o mundo mediterrâneo na época de Filipe II</em> (1949) como prisioneiro de guerra na Alemanha ${tag('fato')}. A obra tem três partes que correspondem a três tempos: o quase imóvel do meio geográfico, o lento das estruturas econômicas e sociais, e o rápido dos acontecimentos ${tag('fato')}. No ensaio de 1958 chamou de <strong>longa duração</strong> o tempo das estruturas ${tag('fato')}. Depois escreveu <em>Civilização material, economia e capitalismo</em> (1979).</p>

<h3>Críticas</h3>
<p>Críticos apontaram que os Annales desvalorizaram o acontecimento, a política e a ação individual, e que a longa duração podia tornar-se determinismo geográfico ${tag('debate')}. Em 1979, Lawrence Stone falou de um "retorno da narrativa" na historiografia ${tag('fato')}. Hoje a política e o acontecimento voltaram, enriquecidos pelas perguntas que os Annales ensinaram a fazer ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['História-problema', 'História que parte de uma pergunta, não de uma sequência de fatos.'],
    ['Mentalidades', 'Modos coletivos de sentir e pensar de uma época.'],
    ['Utensilagem mental', 'Instrumentos conceituais disponíveis a uma época (Febvre).'],
    ['Longa duração', 'Tempo das estruturas que mudam muito devagar (Braudel).'],
    ['Conjuntura', 'Tempo médio de ciclos econômicos e sociais.'],
  ],
  exemplos: `<p><strong>Uma pergunta à maneira dos Annales sobre o Brasil:</strong> em vez de "o que fez cada governador-geral?", perguntar "como a monocultura do açúcar organizou o território, o trabalho e a família no Nordeste dos séculos XVI e XVII?". A pergunta exige fontes econômicas, demográficas, geográficas e religiosas, além das administrativas.</p>`,
  contexto: `<p><strong>No mundo:</strong> os Annales nascem entre as duas guerras, em diálogo com a sociologia de Durkheim e a geografia de Vidal de la Blache. <strong>No Brasil:</strong> Fernand Braudel lecionou na recém-fundada Universidade de São Paulo entre 1935 e 1937, na missão francesa que incluiu também Claude Lévi-Strauss ${tag('fato')}; a influência da escola marcou gerações de historiadores brasileiros ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a história-problema exige outras disciplinas', tag: 'argumento',
    premissas: ['Uma história-problema parte de perguntas sobre estruturas econômicas, sociais e mentais.', 'Essas estruturas são objeto também da economia, da sociologia, da geografia e da antropologia.', 'Responder bem a uma pergunta exige os instrumentos adequados a seu objeto.'],
    conclusao: 'Logo, a história-problema precisa dialogar com as outras ciências humanas — sem deixar de ser história, isto é, sem perder o tempo e as fontes.',
    nota: 'É a justificativa intelectual das avaliações interdisciplinares desta Academia.',
  },
  objecoes: [
    { objecao: 'A longa duração apaga a liberdade humana: tudo seria determinado pelo meio.', tag: 'debate',
      resposta: 'O risco existe e foi apontado. Braudel falava de limites e possibilidades, não de determinação absoluta; o historiador deve mostrar como os agentes agem dentro das estruturas e às vezes as transformam.' },
  ],
  aplicacao: `<p>Escreva no Caderno uma "história-problema" de uma página sobre sua cidade ou região: formule a pergunta, indique que disciplinas ajudariam e que fontes de cada tipo seriam necessárias.</p>`,
  fonte: {
    obra: 'Marc Bloch, Apologia da história, introdução; Fernand Braudel, O Mediterrâneo, prefácio à primeira edição (1946)', link: null,
    orientacao: `<p>Na introdução de Bloch, identifique a pergunta "para que serve a história?" e a resposta. No prefácio de Braudel, localize a explicação das três partes da obra e relacione cada uma a um tempo histórico.</p>`,
  },
  perguntas: [
    { p: 'Quando e por quem foram fundados os Annales?', r: 'Em 1929, por Marc Bloch e Lucien Febvre, em Estrasburgo.' },
    { p: 'O que Bloch estudou em Os reis taumaturgos?', r: 'A crença secular no poder dos reis de curar as escrófulas pelo toque.' },
    { p: 'Quais os três tempos de O Mediterrâneo?', r: 'O geográfico, quase imóvel; o das estruturas econômicas e sociais; o dos acontecimentos.' },
  ],
  exercicios: [
    mc('A revista dos Annales foi fundada em:', ['1898', '1929', '1949', '1968'], 1, '1929, em Estrasburgo.'),
    mc('Os reis taumaturgos (1924) estuda:', ['A economia medieval', 'A crença no poder curativo dos reis', 'As cruzadas', 'O feudalismo inglês'], 1, 'História das crenças coletivas.'),
    mc('O conceito de "utensilagem mental" é de:', ['Bloch', 'Febvre', 'Braudel', 'Stone'], 1, 'O problema da incredulidade no século XVI (1942).'),
    mc('Braudel lecionou na Universidade de São Paulo entre:', ['1920 e 1922', '1935 e 1937', '1946 e 1949', '1958 e 1960'], 1, 'Na missão francesa, com Lévi-Strauss.'),
    mc('O "retorno da narrativa" foi diagnosticado em 1979 por:', ['Lawrence Stone', 'Hayden White', 'Carlo Ginzburg', 'Pierre Nora'], 0, 'Lawrence Stone, "The Revival of Narrative".'),
    disc('Os Annales tinham razão ao criticar a história centrada em acontecimentos políticos? Exponha o programa, a crítica que recebeu e uma conclusão própria, com exemplo.', ['Expõe o programa', 'Expõe a crítica', 'Usa exemplo', 'Conclusão justificada']),
  ],
  resumo: ['Annales: 1929, Bloch e Febvre; história-problema.', 'Bloch: Os reis taumaturgos; A sociedade feudal; fuzilado em 1944.', 'Febvre: Rabelais e a utensilagem mental.', 'Braudel: O Mediterrâneo (1949); longa duração; USP (1935–1937).', 'Críticas e o retorno da narrativa (Stone, 1979).'],
  referencias: [
    { texto: 'Marc Bloch, Os reis taumaturgos (1924); A sociedade feudal (1939–1940); A estranha derrota (1946).' },
    { texto: 'Lucien Febvre, O problema da incredulidade no século XVI: a religião de Rabelais (1942).' },
    { texto: 'Fernand Braudel, O Mediterrâneo e o mundo mediterrâneo na época de Filipe II (1949).' },
    { texto: 'Peter Burke, A Escola dos Annales (1929–1989): a Revolução Francesa da historiografia (1990).' },
    { texto: 'Lawrence Stone, "The Revival of Narrative", Past and Present (1979).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Responder à questão discursiva', 'Ler os trechos indicados'],
  revisao: [['Annales', '1929, Bloch e Febvre, história-problema.'], ['Braudel', 'Três tempos; longa duração; USP 1935–1937.'], ['Febvre', 'Utensilagem mental (Rabelais, 1942).']],
  avancado: {
    texto: `<h3>As gerações seguintes</h3>
<p>A "terceira geração" dos Annales (Jacques Le Goff, Emmanuel Le Roy Ladurie, Georges Duby) desenvolveu a história das mentalidades e a antropologia histórica; <em>Montaillou</em> (1975), de Le Roy Ladurie, reconstruiu a vida de uma aldeia occitana a partir de um registro da Inquisição ${tag('fato')}. Na Inglaterra, a história social marxista (E. P. Thompson, <em>A formação da classe operária inglesa</em>, 1963) propôs uma "história vista de baixo" ${tag('interpretacao')}.</p>
<h3>Annales e historiografia brasileira</h3>
<p>Sérgio Buarque de Holanda, em <em>Monções</em> (1945) e <em>Caminhos e fronteiras</em> (1957), estudou a vida material e as técnicas dos sertanistas, numa linha próxima das preocupações dos Annales com cultura material e espaço ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Emmanuel Le Roy Ladurie, Montaillou (1975).' }, { texto: 'E. P. Thompson, A formação da classe operária inglesa (1963).' }, { texto: 'Sérgio Buarque de Holanda, Caminhos e fronteiras (1957).' }],
    exercicios: [
      mc('Montaillou (1975) foi construído a partir de:', ['Censos franceses', 'Um registro da Inquisição', 'Cartas de mercadores', 'Fotografias aéreas'], 1, 'O registro do bispo Jacques Fournier.'),
      mc('A formação da classe operária inglesa (1963) é de:', ['E. P. Thompson', 'Eric Hobsbawm', 'Lawrence Stone', 'Peter Burke'], 0, 'E. P. Thompson.'),
      mc('Caminhos e fronteiras (1957) é de:', ['Gilberto Freyre', 'Sérgio Buarque de Holanda', 'Caio Prado Júnior', 'Capistrano de Abreu'], 1, 'Sérgio Buarque de Holanda.'),
      disc('Compare a "história das mentalidades" dos Annales com a "história vista de baixo" de Thompson: objetos, fontes e críticas de cada uma.', ['Define as duas', 'Compara objetos e fontes', 'Indica críticas', 'Conclusão'])],
  },
}),

avaliacao('h2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a formação da historiografia, da Grécia aos Annales, e duas discursivas de comparação entre autores e métodos.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia os trechos metodológicos de Tucídides, Beda, Ranke e Bloch.</li><li>Refaça a linha do tempo dos autores do módulo.</li></ul>`,
[
  disc('Compare três autores estudados (por exemplo, Tucídides, Beda e Bloch) quanto às fontes que usam, ao critério de verdade e à finalidade da história. O que muda e o que permanece?', ['Expõe os três com precisão', 'Compara fontes e critérios', 'Compara finalidades', 'Identifica permanências e mudanças', 'Conclusão fundamentada']),
  disc('A historiografia brasileira acompanhou as transformações da disciplina? Use Frei Vicente do Salvador, Varnhagen e a influência dos Annales (ou Capistrano) para responder.', ['Situa cada autor ou corrente com data', 'Relaciona com a historiografia mundial', 'Aponta originalidades brasileiras', 'Conclusão fundamentada']),
]),
];
