// Matemática III — escolas e debates (etapas 6 e 7 do percurso de Matemática).
// Platonismo, aristotelismo e nominalismo; matemática pura e aplicada; o infinito; a aplicabilidade da matemática ao mundo.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ma3-1', titulo: 'Platonismo, aristotelismo e nominalismo matemáticos', duracao: '150 min',
  aprendera: ['Expor a concepção platônica dos objetos matemáticos', 'Expor a concepção aristotélica da abstração', 'Conhecer o nominalismo e o estruturalismo', 'Comparar as posições com argumentos'],
  prereq: ['Matemática II (módulo MA2)'],
  explicacao: `
<h3>O problema</h3>
<p>Quando dizemos "existe um número primo entre 10 e 12", o que é esse 11? Um objeto real, uma ideia na mente, uma convenção?</p>
<h3>Platão</h3>
<p>No Mênon, Sócrates leva um escravo a descobrir como dobrar a área de um quadrado, e apresenta isso como reminiscência ${tag('fato')}. Na República (livros VI e VII), a matemática ocupa um degrau entre o sensível e as Ideias, e prepara a alma para a dialética ${tag('fato')}. O platonismo matemático sustenta que os objetos matemáticos existem independentemente da mente e do mundo físico ${tag('fato')}.</p>
<h3>Aristóteles e Tomás</h3>
<p>Para Aristóteles, os objetos matemáticos não existem separados: são a quantidade das coisas, considerada pela mente sem a matéria sensível ${tag('fato')}. Santo Tomás retoma essa abstração ${tag('fato')}. Nessa visão, a matemática é verdadeira porque se funda na quantidade real, mas seus objetos têm modo de ser mental ${tag('doutrina')}.</p>
<h3>Nominalismo e estruturalismo</h3>
<p>Nominalistas negam a existência de objetos abstratos; Hartry Field, em Science Without Numbers (1980), tentou reformular a física sem números ${tag('fato')}. O estruturalismo sustenta que a matemática estuda estruturas, e que um número é apenas uma posição numa estrutura ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Cada posição explica algo: o platonismo, a objetividade; o aristotelismo, a aplicabilidade; o nominalismo, a economia ontológica ${tag('interpretacao')}. O debate continua aberto entre filósofos da matemática ${tag('debate')}.</p>`,
  vocabulario: [
    ['Platonismo matemático', 'Tese de que os objetos matemáticos existem independentemente da mente e do mundo físico.'],
    ['Abstração', 'Operação pela qual a mente considera um aspecto das coisas separado dos outros.'],
    ['Nominalismo', 'Negação da existência de objetos abstratos.'],
    ['Estruturalismo', 'Tese de que a matemática estuda estruturas, não objetos isolados.'],
    ['Reminiscência', 'Para Platão, conhecer é recordar o que a alma já contemplou.'],
  ],
  exemplos: `<p><strong>O escravo do Mênon:</strong> o quadrado de lado 2 tem área 4; para obter área 8, o escravo tenta lado 4 (área 16) e lado 3 (área 9). Sócrates mostra que o quadrado construído sobre a diagonal tem a área dobrada. Hoje diríamos que o lado é 2√2, um número irracional.</p>`,
  contexto: `<p><strong>No mundo:</strong> Gödel defendeu o platonismo matemático ${tag('fato')}. <strong>No Brasil:</strong> a filosofia da matemática é estudada em programas de pós-graduação em filosofia e em lógica, como os ligados ao CLE da Unicamp ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Argumento da indispensabilidade', tag: 'argumento',
    premissas: ['Devemos aceitar a existência das entidades indispensáveis às nossas melhores teorias científicas.', 'Entidades matemáticas são indispensáveis às melhores teorias científicas.', 'Logo, devemos aceitar a existência de entidades matemáticas.'],
    conclusao: 'Logo, há boas razões para algum realismo matemático.',
    nota: 'É o argumento de Quine e Putnam; Field contestou a segunda premissa.',
  },
  objecoes: [
    { objecao: 'Se os números existem fora do espaço e do tempo, não podemos conhecê-los.', tag: 'debate',
      resposta: 'É a objeção de Paul Benacerraf (1973) ao platonismo. O aristotélico responde que conhecemos a quantidade nas coisas e a abstraímos; o platônico, que há uma intuição intelectual. A objeção mostra que toda posição precisa explicar como conhecemos os objetos matemáticos.' },
  ],
  aplicacao: `<p>Monte um quadro comparativo de quatro posições (platonismo, aristotelismo, nominalismo, estruturalismo): tese, autor, argumento principal, objeção principal.</p>`,
  fonte: {
    obra: 'Platão, Mênon, 82b–85b', link: null,
    orientacao: `<p>Acompanhe o diálogo com o escravo, desenhando as figuras, e observe o papel das perguntas.</p>`,
  },
  perguntas: [
    { p: 'O que sustenta o platonismo matemático?', r: 'Que os objetos matemáticos existem independentemente da mente e do mundo físico.' },
    { p: 'Como Aristóteles explica os objetos matemáticos?', r: 'Como quantidade das coisas considerada pela mente sem a matéria sensível.' },
    { p: 'Qual é a objeção de Benacerraf?', r: 'Se os números estão fora do espaço e do tempo, como os conhecemos?' },
  ],
  exercicios: [
    mc('No Mênon, o escravo dobra a área com o quadrado sobre:', ['O lado', 'A diagonal', 'O dobro do lado', 'A metade'], 1, '2√2.'),
    mc('Science Without Numbers é de:', ['Field', 'Gödel', 'Platão', 'Quine'], 0, '1980.'),
    mc('O argumento da indispensabilidade é de:', ['Quine e Putnam', 'Platão e Aristóteles', 'Cantor e Hilbert', 'Pascal e Fermat'], 0, 'Realismo.'),
    mc('Para o estruturalismo, um número é:', ['Uma posição numa estrutura', 'Um objeto físico', 'Uma palavra', 'Uma ilusão'], 0, 'Estrutura.'),
    mc('A abstração matemática em Tomás vem de:', ['Aristóteles', 'Descartes', 'Kant', 'Hume'], 0, 'Tradição.'),
    disc('Monte o quadro das quatro posições.', ['Teses', 'Autores', 'Argumentos', 'Objeções']),
  ],
  resumo: ['Platão: Ideias e reminiscência.', 'Aristóteles e Tomás: abstração.', 'Nominalismo: sem abstratos.', 'Estruturalismo: posições.', 'Indispensabilidade e Benacerraf.'],
  referencias: [
    { texto: 'Platão, Mênon.', livro: 'platao-menon' },
    { texto: 'Platão, A República, livros VI–VII.', livro: 'platao-republica' },
    { texto: 'Stephen Barker, Filosofia da matemática (1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Platonismo', 'Independentes.'], ['Abstração', 'Aristóteles.'], ['Benacerraf', 'Conhecimento.']],
  avancado: {
    texto: `<h3>A linha dividida</h3>
<p>No fim do livro VI da República, Platão divide o conhecimento em quatro segmentos: imagens, coisas sensíveis, objetos matemáticos (conhecidos pelo pensamento discursivo, dianoia) e Ideias (conhecidas pela inteligência, noesis) ${tag('fato')}. O matemático, diz Platão, parte de hipóteses que não justifica e usa figuras visíveis para pensar em objetos inteligíveis ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Platão, A República, livro VI, 509d–511e.', livro: 'platao-republica' }],
    exercicios: [
      mc('Na linha dividida, a matemática corresponde à:', ['Dianoia', 'Eikasia', 'Pistis', 'Doxa'], 0, 'Pensamento discursivo.'),
      mc('O matemático, segundo Platão, parte de:', ['Hipóteses', 'Ideias justificadas', 'Sensações', 'Opiniões'], 0, 'Livro VI.'),
      mc('As Ideias são conhecidas pela:', ['Noesis', 'Imaginação', 'Sensação', 'Memória'], 0, 'Inteligência.'),
      disc('Explique por que Platão situa a matemática abaixo da dialética.', ['Linha', 'Hipóteses', 'Figuras', 'Dialética'])],
  },
}),

aula({
  id: 'ma3-2', titulo: 'Matemática pura e aplicada; as escolas de fundamentos', duracao: '150 min',
  aprendera: ['Distinguir matemática pura e aplicada', 'Mostrar como a pura se torna aplicada', 'Resumir as escolas de fundamentos', 'Avaliar o valor da matemática "inútil"'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Vale a pena estudar matemática que não tem aplicação conhecida?</p>
<h3>Pura e aplicada</h3>
<p>A matemática pura estuda estruturas por si mesmas; a aplicada desenvolve ferramentas para problemas de outras áreas ${tag('fato')}. A distinção é útil, mas a fronteira é móvel ${tag('interpretacao')}.</p>
<h3>Hardy e a criptografia</h3>
<p>G. H. Hardy, em Em defesa de um matemático (1940), orgulhava-se de que a teoria dos números não tinha aplicações práticas ${tag('fato')}. Décadas depois, o sistema RSA (1977) usou a teoria dos números para a criptografia que protege transações na internet ${tag('fato')}. As cônicas de Apolônio serviram, quase dois mil anos depois, às órbitas de Kepler ${tag('fato')}.</p>
<h3>As escolas de fundamentos</h3>
<p>Como visto em Lógica formal (LF3): o logicismo (Frege, Russell) reduz a matemática à lógica; o formalismo (Hilbert) a vê como estudo de sistemas formais cuja consistência se deve provar; o intuicionismo (Brouwer) a vê como construção mental ${tag('fato')}. Os teoremas de Gödel limitaram o programa de Hilbert ${tag('fato')}.</p>
<h3>O valor da contemplação</h3>
<p>Na tradição clássica, o conhecimento da verdade vale por si mesmo, e não só pelo uso ${tag('doutrina')}. Aristóteles diz que a filosofia nasce da admiração e é buscada por si mesma, não por utilidade (Metafísica I, 2) ${tag('fato')}.</p>`,
  vocabulario: [
    ['Matemática pura', 'Estudo de estruturas matemáticas por si mesmas.'],
    ['Matemática aplicada', 'Desenvolvimento de ferramentas para problemas de outras áreas.'],
    ['Criptografia', 'Técnica de proteger informações por códigos.'],
    ['RSA', 'Sistema criptográfico de 1977 baseado na dificuldade de fatorar números grandes.'],
    ['Contemplação', 'Conhecimento buscado pelo valor da própria verdade.'],
  ],
  exemplos: `<p><strong>RSA em miniatura:</strong> é fácil multiplicar 61 × 53 = 3233, mas é muito mais difícil, para números com centenas de algarismos, descobrir os fatores a partir do produto. O RSA usa essa assimetria: a chave pública contém o produto; só quem conhece os fatores pode decifrar.</p>`,
  contexto: `<p><strong>No mundo:</strong> a criptografia de chave pública está presente em praticamente toda comunicação segura na internet ${tag('fato')}. <strong>No Brasil:</strong> o Pix e o internet banking dependem de protocolos criptográficos baseados em matemática ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que vale estudar matemática sem aplicação conhecida', tag: 'argumento',
    premissas: ['A verdade matemática tem valor em si, como objeto de conhecimento.', 'A história mostra que teorias puras frequentemente se tornam aplicadas, de modo imprevisível.', 'Restringir a pesquisa ao aplicável hoje empobreceria o futuro.'],
    conclusao: 'Logo, a matemática pura merece ser cultivada.',
    nota: 'O argumento usa duas razões independentes: o valor intrínseco e a fecundidade imprevisível.',
  },
  objecoes: [
    { objecao: 'Num país com tantos problemas, só a matemática aplicada deveria receber recursos.', tag: 'debate',
      resposta: 'A prioridade a problemas urgentes é legítima. Mas a matemática pura é barata e forma pessoas capazes de resolver problemas aplicados. Países que investiram em ciência básica colheram aplicações. Trata-se de equilíbrio, não de exclusão.' },
  ],
  aplicacao: `<p>Pesquise e descreva três casos em que uma teoria matemática pura se tornou aplicada (por exemplo: cônicas, teoria dos números, números complexos), com datas e áreas de aplicação.</p>`,
  fonte: {
    obra: 'G. H. Hardy, Em defesa de um matemático (1940), seções sobre matemática "útil" e "inútil"', link: null,
    orientacao: `<p>Observe os argumentos de Hardy e pergunte o que ele diria hoje da criptografia.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre matemática pura e aplicada?', r: 'A pura estuda estruturas por si; a aplicada cria ferramentas para outras áreas.' },
    { p: 'Que teoria "inútil" de Hardy se tornou aplicada?', r: 'A teoria dos números, na criptografia (RSA).' },
    { p: 'O que diz o formalismo?', r: 'Que a matemática estuda sistemas formais cuja consistência se deve provar.' },
  ],
  exercicios: [
    mc('Em defesa de um matemático é de:', ['Hardy', 'Pólya', 'Hilbert', 'Euler'], 0, '1940.'),
    mc('O RSA é de:', ['1940', '1977', '1931', '2005'], 1, 'Criptografia.'),
    mc('As cônicas de Apolônio serviram às órbitas de:', ['Kepler', 'Ptolomeu', 'Galileu', 'Copérnico apenas'], 0, 'Elipses.'),
    mc('O intuicionismo é de:', ['Brouwer', 'Frege', 'Hilbert', 'Russell'], 0, 'Construção.'),
    mc('Para Aristóteles, a filosofia é buscada:', ['Por si mesma', 'Só por utilidade', 'Por dinheiro', 'Por obrigação'], 0, 'Metafísica I.'),
    disc('Descreva três casos de matemática pura que se tornou aplicada.', ['Casos', 'Datas', 'Aplicações', 'Conclusão']),
  ],
  resumo: ['Pura e aplicada.', 'Hardy e o RSA.', 'Fronteira móvel.', 'Escolas de fundamentos.', 'Valor da contemplação.'],
  referencias: [
    { texto: 'G. H. Hardy, Em defesa de um matemático (1940).' },
    { texto: 'Stephen Barker, Filosofia da matemática (1964).' },
    { texto: 'Henri Poincaré, A ciência e a hipótese (1902).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar os três casos', 'Ler a fonte indicada'],
  revisao: [['Hardy', '"Inútil".'], ['RSA', 'Fatoração.'], ['Contemplação', 'Por si.']],
  avancado: {
    texto: `<h3>Aritmética modular</h3>
<p>Na aritmética módulo n, contam-se apenas os restos da divisão por n: 17 ≡ 2 (mod 5) ${tag('fato')}. O pequeno teorema de Fermat afirma que, se p é primo e a não é múltiplo de p, então a^{p−1} ≡ 1 (mod p) ${tag('fato')}. Esse teorema e sua generalização por Euler estão na base do RSA ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Richard Courant e Herbert Robbins, O que é matemática? (1941), capítulo sobre congruências.' }],
    exercicios: [
      mc('17 mod 5 é:', ['2', '3', '1', '0'], 0, 'Resto.'),
      mc('Pelo pequeno teorema de Fermat, 2⁶ mod 7 é:', ['1', '2', '6', '0'], 0, '64 = 9·7 + 1.'),
      mc('O RSA usa o teorema de:', ['Euler (generalizando Fermat)', 'Pitágoras', 'Tales', 'Gödel'], 0, 'Base.'),
      disc('Verifique o pequeno teorema de Fermat para p = 5 e a = 2, 3, 4.', ['Cálculos', 'Restos', 'Verificação', 'Comentário'])],
  },
}),

aula({
  id: 'ma3-3', titulo: 'O infinito: de Zenão e Aristóteles a Cantor', duracao: '150 min',
  aprendera: ['Distinguir infinito potencial e atual', 'Discutir os paradoxos de Zenão', 'Explicar o paradoxo de Galileu e a resposta de Cantor', 'Conhecer a posição de Santo Tomás sobre a multidão infinita'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O infinito é só "sempre mais um", ou existe infinito acabado? A matemática moderna e a tradição clássica respondem diferente?</p>
<h3>Zenão</h3>
<p>Zenão de Eleia argumentou que Aquiles nunca alcança a tartaruga: quando chega onde ela estava, ela já avançou, e assim infinitamente ${tag('fato')}. A matemática moderna mostra que infinitas parcelas podem ter soma finita: 1/2 + 1/4 + 1/8 + ... = 1 ${tag('fato')}. Se isso resolve todo o problema filosófico é discutido ${tag('debate')}.</p>
<h3>Aristóteles</h3>
<p>Na Física (livro III), Aristóteles distingue o infinito potencial (sempre se pode ir além) do infinito atual (uma totalidade infinita dada), e admite só o primeiro ${tag('fato')}.</p>
<h3>Galileu</h3>
<p>Nas Duas novas ciências (1638), Galileu notou que os quadrados 1, 4, 9, ... estão em correspondência com todos os naturais, embora sejam só uma parte deles ${tag('fato')}. Concluiu que "maior", "menor" e "igual" não se aplicam ao infinito ${tag('fato')}.</p>
<h3>Cantor</h3>
<p>Cantor tomou a correspondência um a um como definição de mesmo tamanho e aceitou que um conjunto infinito pode ter o mesmo tamanho de uma parte própria ${tag('fato')}. Mostrou que há infinitos maiores que outros ${tag('fato')}.</p>
<h3>Santo Tomás</h3>
<p>Na Suma Teológica (I, q. 7, a. 4), Tomás nega que exista em ato uma multidão infinita de coisas criadas, admitindo o infinito potencial ${tag('fato')}. Discute-se se os conjuntos infinitos de Cantor, como objetos matemáticos, contradizem essa tese, que trata de coisas existentes ${tag('debate')}.</p>`,
  vocabulario: [
    ['Infinito potencial', 'Possibilidade de ir sempre além, sem totalidade dada.'],
    ['Infinito atual', 'Totalidade infinita dada de uma vez.'],
    ['Série convergente', 'Soma infinita que tem valor finito.'],
    ['Correspondência biunívoca', 'Associação um a um entre elementos de dois conjuntos.'],
    ['Parte própria', 'Subconjunto diferente do conjunto inteiro.'],
  ],
  exemplos: `<p><strong>O hotel de Hilbert:</strong> um hotel com infinitos quartos, todos ocupados, recebe um hóspede novo. Basta mover quem está no quarto n para o quarto n + 1: o quarto 1 fica livre. O exemplo, associado a Hilbert e popularizado por George Gamow, mostra a correspondência entre ℕ e uma parte própria.</p>`,
  contexto: `<p><strong>No mundo:</strong> Cantor relacionou o infinito atual absoluto a Deus e correspondeu-se com teólogos sobre o tema ${tag('fato')}. <strong>No Brasil:</strong> o estudo de séries e limites é parte do currículo de cálculo das universidades ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que uma soma infinita pode ser finita', tag: 'argumento',
    premissas: ['Seja S = 1/2 + 1/4 + 1/8 + ...', 'As somas parciais são 1/2, 3/4, 7/8, ..., e cada uma dista de 1 exatamente o último termo somado.', 'Essa distância fica menor que qualquer número positivo dado.'],
    conclusao: 'Logo, o limite das somas parciais é 1, e define-se S = 1.',
    nota: 'A definição de soma infinita como limite foi tornada rigorosa no século XIX.',
  },
  objecoes: [
    { objecao: 'O infinito atual é contraditório, como mostram os paradoxos.', tag: 'debate',
      resposta: 'Galileu achou paradoxal que uma parte fosse do tamanho do todo. Cantor mostrou que, definindo tamanho por correspondência, não há contradição: o infinito simplesmente se comporta diferente do finito. Questões filosóficas sobre a existência real de multidões infinitas permanecem.' },
  ],
  aplicacao: `<p>Escreva um quadro com cinco posições sobre o infinito (Zenão, Aristóteles, Galileu, Tomás, Cantor), com a tese de cada um e um exemplo, e responda: o infinito potencial basta para a matemática?</p>`,
  fonte: {
    obra: 'Aristóteles, Física, livro III, caps. 4–8', link: null,
    orientacao: `<p>Observe a distinção entre potência e ato aplicada ao infinito e os exemplos de divisão e adição.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre infinito potencial e atual?', r: 'O potencial é ir sempre além; o atual é uma totalidade infinita dada.' },
    { p: 'Qual o paradoxo de Galileu?', r: 'Os quadrados correspondem a todos os naturais, embora sejam só uma parte.' },
    { p: 'Que tese defende Tomás em I, q. 7, a. 4?', r: 'Que não existe em ato uma multidão infinita de coisas criadas.' },
  ],
  exercicios: [
    mc('1/2 + 1/4 + 1/8 + ... =', ['∞', '1', '2', '1/2'], 1, 'Limite.'),
    mc('Aristóteles admite o infinito:', ['Atual', 'Potencial', 'Nenhum', 'Ambos igualmente'], 1, 'Física III.'),
    mc('As Duas novas ciências são de:', ['1623', '1638', '1687', '1874'], 1, 'Galileu.'),
    mc('Cantor define mesmo tamanho por:', ['Correspondência um a um', 'Inclusão', 'Contagem finita', 'Medida'], 0, 'Biunívoca.'),
    mc('No hotel de Hilbert, o hóspede do quarto n vai para:', ['n + 1', 'n − 1', '2n + 1 sempre', 'O mesmo'], 0, 'Deslocamento.'),
    disc('Monte o quadro das cinco posições e responda à pergunta.', ['Posições', 'Exemplos', 'Resposta', 'Argumentação']),
  ],
  resumo: ['Zenão: Aquiles.', 'Séries convergentes.', 'Aristóteles: potencial.', 'Galileu: parte e todo.', 'Cantor: atual; Tomás: sem multidão infinita em ato.'],
  referencias: [
    { texto: 'Aristóteles, Física, livro III.', livro: 'aristoteles-fisica' },
    { texto: 'Galileu Galilei, Duas novas ciências (1638).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 7.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Potencial', 'Sempre mais.'], ['Galileu', 'Quadrados.'], ['Cantor', 'Correspondência.']],
  avancado: {
    texto: `<h3>A série harmônica</h3>
<p>Nem toda soma de termos que diminuem é finita: 1 + 1/2 + 1/3 + 1/4 + ... cresce sem limite ${tag('fato')}. A prova clássica, atribuída a Nicole Oresme (século XIV), agrupa os termos: 1/3 + 1/4 > 1/2, 1/5 + ... + 1/8 > 1/2, e assim por diante, somando infinitas metades ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Carl B. Boyer, História da matemática (1968), capítulo sobre a Idade Média.' }],
    exercicios: [
      mc('A série harmônica:', ['Converge a 2', 'Diverge', 'Converge a 1', 'Converge a π'], 1, 'Oresme.'),
      mc('1/5 + 1/6 + 1/7 + 1/8 é maior que:', ['1/2', '1', '2', '1/8 apenas'], 0, 'Quatro termos ≥ 1/8.'),
      mc('A prova por agrupamento é atribuída a:', ['Oresme', 'Euler', 'Cantor', 'Zenão'], 0, 'Século XIV.'),
      disc('Explique por que termos que tendem a zero não garantem soma finita.', ['Harmônica', 'Agrupamento', 'Comparação com geométrica', 'Conclusão'])],
  },
}),

aula({
  id: 'ma3-4', titulo: 'Por que a matemática se aplica ao mundo?', duracao: '150 min',
  aprendera: ['Formular o problema da aplicabilidade', 'Expor a tese de Wigner', 'Comparar respostas realistas, empiristas e teístas', 'Relacionar a questão com a ordem da criação'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Matemáticos inventam ou descobrem teorias por razões internas, e depois elas descrevem planetas, partículas e mercados. Por quê?</p>
<h3>Galileu e Wigner</h3>
<p>Galileu, em O ensaiador (1623), escreveu que o livro da natureza está escrito em linguagem matemática ${tag('fato')}. Eugene Wigner, em 1960, chamou de "eficácia irrazoável" a adequação da matemática às ciências naturais e disse que ela é um presente que não entendemos nem merecemos ${tag('fato')}.</p>
<h3>Respostas</h3>
<p>Aristotélica: a matemática se aplica porque é abstraída da quantidade real das coisas ${tag('doutrina')}. Empirista: a matemática que sobrevive é a que foi selecionada por sua utilidade ${tag('interpretacao')}. Kantiana: espaço e tempo são formas da nossa sensibilidade, e por isso a matemática vale para os fenômenos ${tag('fato')}. Teísta: o mundo é obra de uma inteligência, e por isso é inteligível ${tag('doutrina')}.</p>
<h3>Medida, número e peso</h3>
<p>O livro da Sabedoria diz que Deus dispôs tudo "com medida, número e peso" (Sb 11,20), texto muito citado por Santo Agostinho ${tag('fato')}. A tradição cristã viu na ordem matemática da natureza um sinal da sabedoria do Criador ${tag('doutrina')}. Isso não dispensa a investigação: a ordem deve ser descoberta, não deduzida a priori ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Aplicabilidade', 'Adequação da matemática à descrição do mundo.'],
    ['Eficácia irrazoável', 'Expressão de Wigner (1960) para essa adequação surpreendente.'],
    ['Modelo matemático', 'Representação matemática de um fenômeno.'],
    ['Inteligibilidade', 'Capacidade de algo ser compreendido pela razão.'],
    ['A priori', 'Conhecido independentemente da experiência.'],
  ],
  exemplos: `<p><strong>Números complexos e física:</strong> os complexos surgiram no século XVI para resolver equações cúbicas, e foram vistos por muito tempo como "imaginários". No século XX, tornaram-se indispensáveis na mecânica quântica. Ninguém os inventou pensando em átomos.</p>`,
  contexto: `<p><strong>No mundo:</strong> o artigo de Wigner é um dos textos mais citados em filosofia da matemática ${tag('fato')}. <strong>No Brasil:</strong> a modelagem matemática é usada em epidemiologia, meteorologia e planejamento energético ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Da ordem matemática à inteligência ordenadora', tag: 'argumento',
    premissas: ['A natureza exibe ordem descritível por leis matemáticas.', 'Uma ordem inteligível é melhor explicada por uma origem inteligente do que por acaso.', 'Logo, a aplicabilidade da matemática é indício de uma inteligência ordenadora.'],
    conclusao: 'Logo, a eficácia da matemática é coerente com a doutrina da criação.',
    nota: 'É um argumento de plausibilidade, não uma demonstração; críticos propõem explicações naturalistas.',
  },
  objecoes: [
    { objecao: 'A aplicabilidade é ilusão: só lembramos das teorias que funcionaram.', tag: 'debate',
      resposta: 'Há seleção, de fato. Mas a seleção não explica por que teorias desenvolvidas sem pensar em aplicações (complexos, geometria de Riemann) se ajustaram depois a fenômenos desconhecidos na época. A objeção reduz, mas não elimina, o problema.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ensaio de duas páginas sobre a "eficácia irrazoável" da matemática, apresentando duas respostas, uma objeção e sua posição.</p>`,
  fonte: {
    obra: 'Eugene Wigner, "A eficácia irrazoável da matemática nas ciências naturais" (1960)', link: null,
    orientacao: `<p>Observe os exemplos de Wigner (gravitação, mecânica quântica) e o tom de espanto do texto.</p>`,
  },
  perguntas: [
    { p: 'O que disse Galileu sobre o livro da natureza?', r: 'Que está escrito em linguagem matemática.' },
    { p: 'Como o aristotélico explica a aplicabilidade?', r: 'A matemática é abstraída da quantidade real das coisas.' },
    { p: 'Que versículo fala de medida, número e peso?', r: 'Sabedoria 11,20.' },
  ],
  exercicios: [
    mc('O artigo de Wigner é de:', ['1623', '1900', '1960', '1980'], 2, 'Eficácia.'),
    mc('O ensaiador é de:', ['Galileu', 'Kepler', 'Newton', 'Descartes'], 0, '1623.'),
    mc('"Medida, número e peso" está em:', ['Sabedoria', 'Gênesis', 'Salmos', 'Eclesiastes'], 0, 'Sb 11,20.'),
    mc('Para Kant, espaço e tempo são:', ['Formas da sensibilidade', 'Coisas em si', 'Ilusões', 'Conceitos empíricos'], 0, 'Estética transcendental.'),
    mc('Os complexos tornaram-se indispensáveis na:', ['Mecânica quântica', 'Contabilidade', 'Botânica', 'Gramática'], 0, 'Século XX.'),
    disc('Escreva o ensaio sobre a eficácia da matemática.', ['Problema', 'Duas respostas', 'Objeção', 'Posição']),
  ],
  resumo: ['Galileu: livro da natureza.', 'Wigner: eficácia irrazoável.', 'Respostas aristotélica, empirista, kantiana, teísta.', 'Sb 11,20.', 'Ordem a descobrir.'],
  referencias: [
    { texto: 'Eugene Wigner, "A eficácia irrazoável da matemática nas ciências naturais" (1960).' },
    { texto: 'Galileu Galilei, O ensaiador (1623).' },
    { texto: 'Santo Agostinho, A Trindade.', livro: 'agostinho-trindade' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['Wigner', '1960.'], ['Galileu', 'Livro da natureza.'], ['Sb 11,20', 'Medida, número, peso.']],
  avancado: {
    texto: `<h3>Jaki e a ciência na cultura cristã</h3>
<p>Stanley Jaki, padre beneditino e físico, argumentou em obras como The Road of Science and the Ways to God (1978) que a crença num Criador racional e livre favoreceu o nascimento da ciência moderna ${tag('fato')}. A tese é discutida por historiadores da ciência ${tag('debate')}. Pierre Duhem, antes dele, estudou as raízes medievais da física moderna ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Stanley Jaki, The Road of Science and the Ways to God (1978).' }],
    exercicios: [
      mc('Jaki foi:', ['Padre beneditino e físico', 'Matemático ateu', 'Político', 'Pintor'], 0, 'Biografia.'),
      mc('Duhem estudou as raízes:', ['Medievais da física moderna', 'Egípcias da álgebra', 'Gregas do zero', 'Indianas do cálculo'], 0, 'História da ciência.'),
      mc('A tese de Jaki é:', ['Debatida por historiadores', 'Consenso absoluto', 'Refutada por Gödel', 'Teorema'], 0, 'Debate.'),
      disc('Apresente a tese de Jaki e uma objeção de historiadores.', ['Tese', 'Argumento', 'Objeção', 'Avaliação'])],
  },
}),

avaliacao('ma3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as concepções da matemática e seus debates, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seus quadros comparativos.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Compare platonismo e aristotelismo matemáticos e avalie qual explica melhor a aplicabilidade da matemática ao mundo.', ['Platonismo', 'Aristotelismo', 'Aplicabilidade', 'Avaliação']),
  disc('Exponha a distinção entre infinito potencial e atual e discuta se os resultados de Cantor contradizem Aristóteles e Tomás.', ['Distinção', 'Cantor', 'Tomás', 'Conclusão']),
]),
];
