// Simbologia II — símbolo na fé, na Escritura, na filosofia e nas artes (itens 5 a 8 da trilha de Simbologia).
// Doutrina católica sempre com a fonte (Catecismo, Concílios); interpretação particular rotulada como tal.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'sb2-1', titulo: 'Simbologia na tradição católica: sinais litúrgicos, símbolos de Cristo e a defesa das imagens', duracao: '150 min',
  aprendera: ['Expor o ensino do Catecismo sobre sinais e símbolos na liturgia', 'Identificar os símbolos do Espírito Santo com suas fontes bíblicas', 'Explicar símbolos cristológicos com o texto bíblico', 'Expor a defesa das imagens de São João Damasceno e do II Concílio de Niceia'],
  prereq: ['Simbologia I (módulo SB1)', 'Fase teológica: Catecismo e sacramentos'],
  explicacao: `
<h3>O problema</h3>
<p>Água, óleo, pão, vinho, luz, imagens: a liturgia é feita de sinais. Como a Igreja entende o seu sentido, e onde termina a doutrina e começa a interpretação pessoal?</p>
<h3>Sinais e símbolos na liturgia (CIC 1145–1152)</h3>
<p>O Catecismo ensina que, na vida humana, sinais e símbolos ocupam lugar importante; a liturgia assume sinais da criação (luz, água, fogo), da vida humana (lavar, ungir, partir o pão), da Antiga Aliança (circuncisão, unção, Páscoa) e os sinais que Cristo usou e que se tornam sinais sacramentais ${tag('doutrina')}. Os sacramentos não são apenas símbolos: são sinais eficazes da graça (CIC 1131) ${tag('doutrina')}.</p>
<h3>Símbolos do Espírito Santo (CIC 694–701)</h3>
<p>Água, unção, fogo, nuvem e luz, selo, mão, dedo e pomba ${tag('doutrina')} — por exemplo, a pomba no Batismo de Jesus (Mt 3,16) e o fogo em Pentecostes (At 2,3) ${tag('fato')}.</p>
<h3>Símbolos de Cristo</h3>
<ul>
<li><strong>Cordeiro</strong>: "Eis o Cordeiro de Deus" (Jo 1,29), ligado ao cordeiro pascal (Ex 12) ${tag('fato')}.</li>
<li><strong>Bom Pastor</strong> (Jo 10,11) e <strong>videira</strong> (Jo 15,1–5) ${tag('fato')}.</li>
<li><strong>Alfa e Ômega</strong>: "Eu sou o Alfa e o Ômega" (Ap 1,8; 22,13) ${tag('fato')}.</li>
<li><strong>Peixe</strong> (ΙΧΘΥΣ): acróstico de "Jesus Cristo, Filho de Deus, Salvador", explicado por Agostinho em <em>A Cidade de Deus</em> XVIII, 23 ${tag('fato')}.</li>
</ul>
<h3>A defesa das imagens</h3>
<p>No século VIII, a crise iconoclasta no Império Bizantino opôs-se ao culto das imagens ${tag('fato')}. São João Damasceno (c. 675–749) defendeu as imagens em três discursos: porque o Verbo se fez carne, o invisível tornou-se visível e pode ser representado ${tag('fato')}. O II Concílio de Niceia (787) definiu que às imagens se presta veneração, não a adoração devida só a Deus, porque "a honra prestada à imagem passa ao seu protótipo" — fórmula de São Basílio ${tag('doutrina')}. O Catecismo retoma esse ensino (CIC 2131–2132) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Sinal sacramental', 'Sinal instituído por Cristo que realiza a graça que significa.'],
    ['Sacramental', 'Sinal sagrado instituído pela Igreja (bênçãos, água benta).'],
    ['Iconoclasmo', 'Movimento contra as imagens religiosas (século VIII–IX).'],
    ['Veneração', 'Honra prestada às imagens e aos santos.'],
    ['Adoração (latria)', 'Culto devido só a Deus.'],
    ['Protótipo', 'Aquele que a imagem representa.'],
  ],
  exemplos: `<p><strong>Uma ficha bem feita (água):</strong> texto bíblico — "quem não nascer da água e do Espírito" (Jo 3,5); Catecismo — CIC 694 (símbolo do Espírito) e 1217–1222 (água no Batismo); uso litúrgico — bênção da água na Vigília Pascal e rito do Batismo. Interpretação particular (por exemplo, uma meditação pessoal) entra separada e rotulada.</p>`,
  contexto: `<p><strong>No mundo:</strong> o debate sobre imagens voltou na Reforma, quando parte dos reformadores rejeitou imagens nos templos ${tag('fato')}. <strong>No Brasil:</strong> a imagem de Nossa Senhora da Conceição Aparecida, encontrada no rio Paraíba do Sul em 1717, é centro da piedade popular; ex-votos e romarias são parte da simbólica religiosa do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a Encarnação justifica as imagens de Cristo (João Damasceno)', tag: 'argumento',
    premissas: ['A proibição de representar a Deus no Antigo Testamento se apoiava em que Deus é invisível e não tem forma.', 'No Verbo encarnado, Deus tornou-se visível em carne humana.', 'O que se tornou visível pode ser representado.'],
    conclusao: 'Logo, é legítimo fazer imagens de Cristo, e a honra que se lhes presta se dirige a Ele.',
    nota: 'O argumento é teológico: supõe a fé na Encarnação. Sua conclusão foi assumida pelo II Concílio de Niceia (787).',
  },
  objecoes: [
    { objecao: 'Venerar imagens é idolatria, proibida em Ex 20,4–5.', tag: 'debate',
      resposta: 'A Igreja distingue veneração (dirigida ao protótipo, por meio da imagem) e adoração (devida só a Deus). O próprio Deus mandou fazer imagens no culto, como os querubins da Arca (Ex 25,18). O que Ex 20 proíbe é o culto de ídolos como deuses (CIC 2129–2132).' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de cinco símbolos (por exemplo, água, fogo, cordeiro, pomba, luz) com o texto bíblico, o parágrafo do Catecismo e o uso litúrgico. Separe, em cada ficha, a doutrina e qualquer interpretação particular.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 694–701, 1145–1152 e 2129–2132; São João Damasceno, Discursos contra os que caluniam as santas imagens, I', link: null,
    orientacao: `<p>No Catecismo, localize os quatro tipos de sinais assumidos pela liturgia (CIC 1145–1152). No primeiro discurso de Damasceno, identifique o argumento da Encarnação e a distinção entre veneração e adoração.</p>`,
  },
  perguntas: [
    { p: 'Que concílio definiu a legitimidade do culto das imagens?', r: 'O II Concílio de Niceia, em 787.' },
    { p: 'Qual a diferença entre veneração e adoração?', r: 'A veneração honra a imagem e o santo; a adoração é devida só a Deus.' },
    { p: 'Onde o Catecismo trata dos símbolos do Espírito Santo?', r: 'Nos §§ 694–701.' },
  ],
  exercicios: [
    mc('O II Concílio de Niceia ocorreu em:', ['325', '451', '787', '1054'], 2, 'Defesa das imagens.'),
    mc('"A honra prestada à imagem passa ao protótipo" é fórmula de:', ['São Basílio', 'Lutero', 'Calvino', 'Orígenes'], 0, 'Citada por Niceia II.'),
    mc('A pomba como símbolo do Espírito aparece no:', ['Batismo de Jesus', 'Êxodo', 'Apocalipse apenas', 'Gênesis 1'], 0, 'Mt 3,16.'),
    mc('"Eis o Cordeiro de Deus" está em:', ['Mt 5,3', 'Jo 1,29', 'Ap 22,13', 'Gn 22,8'], 1, 'João Batista.'),
    mc('A imagem de Aparecida foi encontrada em:', ['1500', '1717', '1822', '1930'], 1, 'Rio Paraíba do Sul.'),
    disc('Entregue as cinco fichas de símbolos com texto bíblico, parágrafo do Catecismo e uso litúrgico, separando doutrina de interpretação particular.', ['Cinco símbolos', 'Fontes bíblicas e do Catecismo', 'Uso litúrgico', 'Doutrina separada da interpretação']),
  ],
  resumo: ['Sinais da criação, da vida humana, da Aliança e de Cristo (CIC 1145–1152).', 'Sacramentos: sinais eficazes (CIC 1131).', 'Símbolos do Espírito (CIC 694–701).', 'Cordeiro, Pastor, videira, Alfa e Ômega, ΙΧΘΥΣ.', 'Damasceno e Niceia II (787): veneração, não adoração.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica (1992), §§ 694–701, 1145–1152, 2129–2132.', livro: 'cic' },
    { texto: 'São João Damasceno, Discursos contra os que caluniam as santas imagens (c. 730).' },
    { texto: 'II Concílio de Niceia (787), definição sobre as imagens.' },
    { texto: 'Santo Agostinho, A Cidade de Deus, XVIII, 23.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as cinco fichas', 'Ler os parágrafos do Catecismo indicados'],
  revisao: [['Niceia II', '787: veneração das imagens.'], ['CIC 694–701', 'Símbolos do Espírito.'], ['Damasceno', 'Argumento da Encarnação.']],
  avancado: {
    texto: `<h3>O ícone na teologia oriental</h3>
<p>Na tradição bizantina, o ícone segue cânones de composição e é entendido como lugar de presença e oração, não como retrato naturalista ${tag('interpretacao')}. O Ocidente latino desenvolveu a arte sacra com maior liberdade de estilo, mantendo a mesma doutrina sobre a veneração ${tag('interpretacao')}.</p>
<h3>Sacramentais</h3>
<p>O Catecismo distingue sacramentos e sacramentais: estes são sinais sagrados instituídos pela Igreja, que preparam para receber a graça (CIC 1667–1670) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Catecismo da Igreja Católica, §§ 1667–1679.', livro: 'cic' }],
    exercicios: [
      mc('Sacramentais são instituídos:', ['Por Cristo', 'Pela Igreja', 'Pelos fiéis', 'Pelo Estado'], 1, 'CIC 1667.'),
      mc('A água benta é:', ['Sacramento', 'Sacramental', 'Ícone', 'Índice natural'], 1, 'Sinal instituído pela Igreja.'),
      mc('O ícone bizantino segue:', ['Liberdade total', 'Cânones de composição', 'O retrato naturalista', 'Nenhuma regra'], 1, 'Tradição oriental.'),
      disc('Compare um ícone bizantino e uma imagem barroca brasileira do mesmo tema: o que muda no estilo e o que permanece na doutrina.', ['Duas obras identificadas', 'Estilo comparado', 'Doutrina comum', 'Fontes'])],
  },
}),

aula({
  id: 'sb2-2', titulo: 'Bíblia, alegoria e interpretação simbólica: os sentidos da Escritura', duracao: '150 min',
  aprendera: ['Expor os sentidos literal e espirituais da Escritura (CIC 115–119)', 'Explicar a tipologia com exemplos bíblicos', 'Distinguir exegese alexandrina e antioquena', 'Aplicar os limites da interpretação simbólica'],
  prereq: ['Aula anterior', 'Fase teológica: Dei Verbum'],
  explicacao: `
<h3>O problema</h3>
<p>Ler a Bíblia simbolicamente pode iluminar ou deformar. A tradição católica oferece regras para que o sentido espiritual não apague o literal nem se torne arbitrário.</p>
<h3>Os sentidos da Escritura (CIC 115–119)</h3>
<p>O Catecismo distingue o sentido <strong>literal</strong>, significado pelas palavras e descoberto pela exegese, e o sentido <strong>espiritual</strong>, que se divide em <strong>alegórico</strong> (o que se refere a Cristo), <strong>moral</strong> (o que orienta o agir) e <strong>anagógico</strong> (o que se refere à vida eterna) ${tag('doutrina')}. O Catecismo cita o dístico medieval: "a letra ensina os fatos; a alegoria, o que crer; a moral, o que fazer; a anagogia, para onde tender" (CIC 118) ${tag('doutrina')}.</p>
<p>Santo Tomás ensina que todos os sentidos se fundam no literal, e só do literal se pode argumentar (<em>Suma Teológica</em> I, q. 1, a. 10) ${tag('doutrina')}.</p>
<h3>Tipologia</h3>
<p>A tipologia vê em pessoas e acontecimentos do Antigo Testamento figuras (<em>typoi</em>) do Novo: Adão é "figura daquele que havia de vir" (Rm 5,14); a passagem do mar e o maná prefiguram o Batismo e a Eucaristia (1Cor 10,1–6); a arca de Noé, o Batismo (1Pd 3,20–21) ${tag('fato')}. A tipologia não nega a historicidade do tipo: supõe-na ${tag('interpretacao')}.</p>
<h3>Exegese patrística</h3>
<p>A escola de Alexandria, com Orígenes, valorizou a alegoria; a de Antioquia insistiu no sentido histórico ${tag('interpretacao')}. Henri de Lubac estudou a teoria dos quatro sentidos em <em>Exegese medieval</em> (1959–1964) ${tag('fato')}. A <em>Dei Verbum</em> (1965), n. 12, pede atenção aos gêneros literários e à unidade de toda a Escritura, lida na Tradição viva da Igreja ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Sentido literal', 'O significado pelas palavras, descoberto pela exegese.'],
    ['Sentido alegórico', 'O que no texto se refere a Cristo.'],
    ['Sentido moral', 'O que orienta o agir.'],
    ['Sentido anagógico', 'O que se refere à vida eterna.'],
    ['Tipologia', 'Leitura de pessoas e fatos do AT como figuras do NT.'],
  ],
  exemplos: `<p><strong>Jerusalém nos quatro sentidos (exemplo clássico):</strong> literal, a cidade da Judeia; alegórico, a Igreja; moral, a alma fiel; anagógico, a Jerusalém celeste. O exemplo é tradicional (João Cassiano o usa) e mostra que os sentidos espirituais se apoiam no literal, sem substituí-lo.</p>`,
  contexto: `<p><strong>No mundo:</strong> o método histórico-crítico e a leitura canônica convivem nos estudos bíblicos atuais. <strong>No Brasil:</strong> o Padre Antônio Vieira usou amplamente a interpretação alegórica nos sermões; no Sermão da Sexagésima (1655) refletiu sobre o modo de pregar a palavra ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o sentido espiritual depende do literal', tag: 'argumento',
    premissas: ['O sentido espiritual nasce de que as coisas narradas pelo texto significam outras coisas.', 'Só se conhece quais coisas o texto narra pelo sentido literal.', 'Sem o literal, o sentido espiritual não teria base e seria arbitrário.'],
    conclusao: 'Logo, o sentido espiritual depende do literal e não pode contradizê-lo.',
    nota: 'É o raciocínio de Santo Tomás em ST I, q. 1, a. 10.',
  },
  objecoes: [
    { objecao: 'A alegoria permite fazer o texto dizer qualquer coisa.', tag: 'debate',
      resposta: 'O abuso existiu, e a tradição o reconheceu. Por isso fixou critérios: fundamento no literal, conformidade com a fé da Igreja (analogia da fé) e com a unidade da Escritura (CIC 112–114). Esses critérios limitam a interpretação.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: leia 1Cor 10,1–6 e explique a tipologia que Paulo usa — quais são os tipos, a que realidades correspondem e por que Paulo conclui com uma exortação moral.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 109–119; Dei Verbum (1965), n. 12; Santo Tomás, Suma Teológica I, q. 1, a. 10', link: null,
    orientacao: `<p>No Catecismo, localize os três critérios de interpretação (112–114) e os quatro sentidos (115–119). Em Santo Tomás, identifique a razão pela qual só do sentido literal se argumenta.</p>`,
  },
  perguntas: [
    { p: 'Quais são os sentidos espirituais da Escritura?', r: 'Alegórico, moral e anagógico.' },
    { p: 'Por que só do sentido literal se argumenta, segundo Santo Tomás?', r: 'Porque todos os sentidos se fundam no literal.' },
    { p: 'O que é tipologia?', r: 'A leitura de pessoas e fatos do Antigo Testamento como figuras do Novo.' },
  ],
  exercicios: [
    mc('O sentido que se refere à vida eterna é o:', ['Literal', 'Alegórico', 'Moral', 'Anagógico'], 3, 'Para onde tender.'),
    mc('Adão como "figura daquele que havia de vir" está em:', ['Rm 5,14', 'Gn 2,7', 'Jo 3,5', 'Hb 11,1'], 0, 'Tipologia paulina.'),
    mc('A arca de Noé como figura do Batismo aparece em:', ['1Cor 10', '1Pd 3,20–21', 'Mt 24', 'Gn 6'], 1, 'Primeira carta de Pedro.'),
    mc('Exegese medieval (1959–1964) é de:', ['Orígenes', 'Henri de Lubac', 'Ratzinger', 'Agostinho'], 1, 'Os quatro sentidos.'),
    mc('A escola que insistiu no sentido histórico foi a de:', ['Alexandria', 'Antioquia', 'Roma', 'Cartago'], 1, 'Diante da alegoria alexandrina.'),
    disc('Explique a tipologia de 1Cor 10,1–6: tipos, realidades correspondentes e a exortação moral, distinguindo sentido literal e tipológico.', ['Tipos identificados', 'Correspondências', 'Exortação explicada', 'Literal e tipológico distinguidos']),
  ],
  resumo: ['Literal e espiritual (alegórico, moral, anagógico), CIC 115–119.', 'Todos se fundam no literal (ST I, q. 1, a. 10).', 'Tipologia: Rm 5,14; 1Cor 10; 1Pd 3.', 'Alexandria e Antioquia; Lubac.', 'Critérios: Dei Verbum 12; CIC 112–114.'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica (1992), §§ 109–119.', livro: 'cic' },
    { texto: 'Concílio Vaticano II, Dei Verbum (1965), n. 12.', livro: 'dei-verbum' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I, q. 1, a. 10.' },
    { texto: 'Henri de Lubac, Exegese medieval (1959–1964).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise de 1Cor 10,1–6', 'Ler os parágrafos do Catecismo e da Dei Verbum'],
  revisao: [['Quatro sentidos', 'Literal, alegórico, moral, anagógico.'], ['Tomás', 'Só do literal se argumenta.'], ['Tipologia', 'Figuras do AT no NT.']],
  avancado: {
    texto: `<h3>Orígenes e o "Sobre os princípios"</h3>
<p>No livro IV de <em>Sobre os princípios</em>, Orígenes compara os sentidos da Escritura ao corpo, à alma e ao espírito do homem ${tag('fato')}. Parte de sua exegese foi criticada pela tradição posterior ${tag('interpretacao')}.</p>
<h3>Interpretação na Igreja</h3>
<p>O documento da Pontifícia Comissão Bíblica <em>A interpretação da Bíblia na Igreja</em> (1993) avalia os métodos atuais, inclusive o histórico-crítico ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Pontifícia Comissão Bíblica, A interpretação da Bíblia na Igreja (1993).' }],
    exercicios: [
      mc('Orígenes compara os sentidos da Escritura a:', ['Corpo, alma e espírito', 'Pai, Filho e Espírito', 'Fé, esperança e caridade', 'Três reis'], 0, 'Sobre os princípios IV.'),
      mc('A interpretação da Bíblia na Igreja é de:', ['1943', '1965', '1993', '2010'], 2, 'Pontifícia Comissão Bíblica.'),
      mc('O documento de 1993 avalia:', ['Só a alegoria', 'Os métodos de interpretação atuais', 'A liturgia', 'O direito canônico'], 1, 'Inclui o histórico-crítico.'),
      disc('Compare a leitura alegórica de Orígenes e o método histórico-crítico diante de um mesmo texto, segundo os critérios da Igreja.', ['Texto escolhido', 'Duas leituras', 'Critérios aplicados', 'Conclusão'])],
  },
}),

aula({
  id: 'sb2-3', titulo: 'Mário Ferreira dos Santos e a simbólica', duracao: '150 min',
  aprendera: ['Situar Mário Ferreira dos Santos e sua obra', 'Ler com método uma tese do Tratado de Simbólica', 'Relacionar símbolo e analogia na tradição tomista', 'Confrontar a simbólica com Peirce sem apresentar nenhuma como consenso'],
  prereq: ['Aulas anteriores do módulo', 'Simbologia I: Peirce e Saussure'],
  explicacao: `
<h3>O problema</h3>
<p>Mário Ferreira dos Santos (1907–1968), filósofo brasileiro, escreveu uma vasta obra sistemática, incluindo um <em>Tratado de Simbólica</em> ${tag('fato')}. Como lê-lo com fidelidade, sem repetir slogans a favor ou contra?</p>
<h3>O autor</h3>
<p>Mário Ferreira dos Santos publicou dezenas de volumes, muitos reunidos na <em>Enciclopédia de Ciências Filosóficas e Sociais</em>; sua proposta de uma "filosofia concreta" pretende demonstrar teses filosóficas a partir de juízos evidentes ${tag('fato')}. Sua recepção no Brasil é marcada por entusiasmo e por pouca discussão acadêmica crítica ${tag('interpretacao')}.</p>
<h3>Como ler o Tratado</h3>
<ol>
<li>Identifique as definições de <strong>símbolo</strong> e <strong>simbolizado</strong> que o autor usa.</li>
<li>Localize a relação que ele estabelece entre simbólica, dialética e metafísica.</li>
<li>Reconstrua um argumento em premissas numeradas, com página.</li>
<li>Só então compare com outras teorias.</li>
</ol>
<h3>Símbolo e analogia</h3>
<p>Na tradição tomista, os nomes ditos de Deus e das criaturas não são unívocos nem equívocos, mas <strong>análogos</strong> (Suma Teológica I, q. 13, a. 5) ${tag('doutrina')}. Uma teoria do símbolo de inspiração tomista tende a fundá-lo numa semelhança real, ainda que imperfeita, entre o símbolo e o simbolizado ${tag('interpretacao')}. Verifique no Tratado se e como o autor usa a analogia ${tag('hipotese')}.</p>
<h3>Confronto com Peirce</h3>
<p>Em Peirce, "símbolo" é o signo por convenção ou hábito; na tradição religiosa e em autores como Mário Ferreira, "símbolo" costuma indicar algo que participa do que significa ${tag('interpretacao')}. A comparação exige deixar claro que a mesma palavra nomeia conceitos diferentes ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Simbólica', 'Estudo sistemático dos símbolos e de sua fundamentação.'],
    ['Simbolizado', 'Aquilo que o símbolo significa.'],
    ['Analogia', 'Atribuição em parte igual e em parte diversa (nem unívoca nem equívoca).'],
    ['Filosofia concreta', 'Projeto de Mário Ferreira de demonstrar a filosofia a partir de juízos evidentes.'],
    ['Leitura fiel', 'Exposição de uma tese com as palavras e a ordem do autor, antes da avaliação.'],
  ],
  exemplos: `<p><strong>Ficha de tese (modelo):</strong> referência e página; tese em uma frase; definições usadas; premissas numeradas; o que a tese nega; uma objeção possível; a resposta que o texto permite. Use esse modelo para a tese escolhida do Tratado, sem acrescentar ao autor o que ele não diz.</p>`,
  contexto: `<p><strong>No mundo:</strong> a teoria do símbolo foi tratada por autores como Ricoeur, Eliade e Cassirer, cada um com pressupostos próprios. <strong>No Brasil:</strong> Mário Ferreira dos Santos é dos raros filósofos brasileiros com sistema próprio; suas obras foram reeditadas nas últimas décadas ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que expor antes de avaliar um autor polêmico', tag: 'argumento',
    premissas: ['Autores com recepção apaixonada costumam ser citados por frases soltas.', 'Frases soltas não permitem saber o que o autor afirma nem por quê.', 'Só a exposição fiel do argumento permite avaliá-lo com justiça.'],
    conclusao: 'Logo, a leitura do Tratado deve começar pela exposição fiel de uma tese, com página, e só depois passar à crítica.',
    nota: 'É o mesmo princípio de caridade interpretativa usado com Diamond (g3-3).',
  },
  objecoes: [
    { objecao: 'Mário Ferreira dos Santos é o maior filósofo brasileiro e não precisa ser criticado.', tag: 'debate',
      resposta: 'Nenhum autor está acima do exame racional; a própria tradição escolástica que ele admira expõe objeções a toda tese. Reconhecer o valor de uma obra inclui testá-la com argumentos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: exponha uma tese do Tratado de Simbólica com a ficha-modelo e confronte-a com a teoria do signo de Peirce ou de Saussure (módulo SB1), deixando claro que não se trata de consenso.</p>`,
  fonte: {
    obra: 'Mário Ferreira dos Santos, Tratado de Simbólica, capítulos iniciais; Santo Tomás, Suma Teológica I, q. 13, a. 5', link: null,
    orientacao: `<p>Nos capítulos iniciais do Tratado, localize as definições de símbolo e simbolizado e uma tese central. Em Santo Tomás, leia a resposta sobre a analogia dos nomes. Registre páginas e edição usadas.</p>`,
  },
  perguntas: [
    { p: 'Quando viveu Mário Ferreira dos Santos?', r: 'De 1907 a 1968.' },
    { p: 'O que é analogia segundo Santo Tomás (ST I, q. 13)?', r: 'Atribuição nem unívoca nem equívoca, em parte igual e em parte diversa.' },
    { p: 'Qual o primeiro passo para ler o Tratado com fidelidade?', r: 'Identificar as definições de símbolo e simbolizado que o autor usa.' },
  ],
  exercicios: [
    mc('Os nomes ditos de Deus e das criaturas são, para Santo Tomás:', ['Unívocos', 'Equívocos', 'Análogos', 'Arbitrários'], 2, 'ST I, q. 13, a. 5.'),
    mc('"Símbolo" em Peirce significa:', ['Signo por convenção ou hábito', 'Signo que participa do simbolizado', 'Ícone sagrado', 'Índice natural'], 0, 'Sentido técnico.'),
    mc('A coleção que reúne grande parte da obra de Mário Ferreira chama-se:', ['Suma Teológica', 'Enciclopédia de Ciências Filosóficas e Sociais', 'Collected Papers', 'Patrologia'], 1, 'Obra sistemática.'),
    mc('Antes de avaliar um autor, deve-se:', ['Citar frases soltas', 'Expor a tese com fidelidade e página', 'Ler apenas comentadores', 'Aceitar suas teses'], 1, 'Caridade interpretativa.'),
    mc('A comparação entre "símbolo" em Peirce e na tradição religiosa exige:', ['Igualar os sentidos', 'Distinguir os conceitos sob a mesma palavra', 'Escolher um só autor', 'Evitar definições'], 1, 'Equivocidade do termo.'),
    disc('Entregue a ficha de uma tese do Tratado de Simbólica (com página e edição) e o confronto com Peirce ou Saussure, sem apresentá-la como consenso.', ['Tese exposta com fidelidade', 'Página e edição', 'Confronto com outra teoria', 'Distinção entre exposição e avaliação']),
  ],
  resumo: ['Mário Ferreira dos Santos (1907–1968): obra sistemática; filosofia concreta.', 'Ler: definições, relação com dialética e metafísica, argumento com página.', 'Analogia em Santo Tomás (ST I, q. 13).', '"Símbolo" tem sentidos diferentes em Peirce e na tradição religiosa.', 'Expor antes de avaliar.'],
  referencias: [
    { texto: 'Mário Ferreira dos Santos, Tratado de Simbólica.', livro: 'mfs-simbolica' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica I, q. 13.' },
    { texto: 'Charles S. Peirce, Collected Papers (1931–1958).' },
    { texto: 'Paul Ricoeur, "O símbolo dá que pensar" (1959).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha da tese com página', 'Ler ST I, q. 13, a. 5'],
  revisao: [['Analogia', 'Nem unívoca nem equívoca.'], ['MFS', '1907–1968; filosofia concreta.'], ['Leitura fiel', 'Expor antes de avaliar.']],
  avancado: {
    texto: `<h3>Ricoeur: "o símbolo dá que pensar"</h3>
<p>Paul Ricoeur formulou a máxima "o símbolo dá que pensar" (1959): o símbolo não é enigma a decifrar e descartar, mas fonte de sentido para a reflexão ${tag('fato')}. A comparação com a simbólica de Mário Ferreira é um exercício de filosofia comparada ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Paul Ricoeur, A simbólica do mal (1960).' }],
    exercicios: [
      mc('"O símbolo dá que pensar" é de:', ['Peirce', 'Ricoeur', 'Eco', 'Saussure'], 1, '1959.'),
      mc('Para Ricoeur, o símbolo é:', ['Enigma a descartar', 'Fonte de sentido para a reflexão', 'Signo arbitrário', 'Índice'], 1, 'Dá que pensar.'),
      mc('A simbólica do mal é de:', ['1949', '1960', '1975', '1990'], 1, 'Ricoeur.'),
      disc('Compare a concepção de símbolo de Ricoeur com a da tese do Tratado que você expôs.', ['Duas concepções', 'Semelhanças', 'Diferenças', 'Conclusão'])],
  },
}),

aula({
  id: 'sb2-4', titulo: 'Simbolismo nas artes, na literatura e na arquitetura: iconografia, gótico e movimento simbolista', duracao: '150 min',
  aprendera: ['Aplicar os três níveis de interpretação de Panofsky', 'Explicar a simbólica da luz na arquitetura gótica', 'Caracterizar o simbolismo literário francês e brasileiro', 'Fazer a análise iconográfica e iconológica de uma obra sacra'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>O que uma pintura mostra e o que ela significa são perguntas diferentes. Confundi-las leva a "ler" nas obras sentidos que nenhuma fonte sustenta.</p>
<h3>Panofsky: três níveis</h3>
<p>Erwin Panofsky, em <em>Estudos de iconologia</em> (1939), distinguiu: (1) descrição <strong>pré-iconográfica</strong> — formas e motivos (um homem, um cordeiro); (2) análise <strong>iconográfica</strong> — o tema convencional identificado por fontes (São João Batista com o Cordeiro); (3) interpretação <strong>iconológica</strong> — o sentido da obra na cultura de sua época ${tag('fato')}.</p>
<h3>O gótico e a luz</h3>
<p>O abade Suger reconstruiu a abadia de Saint-Denis, cujo novo coro foi consagrado em 1144, marco inicial da arquitetura gótica ${tag('fato')}. Suger descreveu a luz dos vitrais como caminho do material ao imaterial ${tag('fato')}; a relação com a teologia da luz do Pseudo-Dionísio é sustentada por parte dos historiadores e discutida por outros ${tag('debate')}. Émile Mâle, em <em>A arte religiosa do século XIII na França</em> (1898), mostrou a catedral como "livro" de imagens ordenadas por fontes teológicas ${tag('fato')}.</p>
<h3>O movimento simbolista</h3>
<p>Na literatura, o simbolismo valorizou a sugestão, a musicalidade e as correspondências; Baudelaire publicou <em>As flores do mal</em> em 1857, e Jean Moréas lançou o manifesto simbolista em 1886 ${tag('fato')}. No Brasil, <em>Missal</em> e <em>Broquéis</em> (1893), de Cruz e Sousa, marcam o início do simbolismo; Alphonsus de Guimaraens é seu outro grande nome ${tag('fato')}.</p>
<h3>O barroco brasileiro</h3>
<p>Os doze profetas de Aleijadinho no adro do santuário de Bom Jesus de Matosinhos, em Congonhas (MG), executados no início do século XIX, são exemplo de iconografia bíblica na arte brasileira ${tag('fato')}.</p>`,
  vocabulario: [
    ['Pré-iconográfico', 'Nível de descrição das formas e motivos.'],
    ['Iconografia', 'Identificação do tema convencional com fontes.'],
    ['Iconologia', 'Interpretação do sentido da obra em sua cultura.'],
    ['Atributo', 'Objeto que identifica uma figura (a chave de São Pedro).'],
    ['Simbolismo literário', 'Movimento do fim do século XIX que valorizou a sugestão e a musicalidade.'],
  ],
  exemplos: `<p><strong>Os três níveis num vitral:</strong> pré-iconográfico — um homem com uma chave e um livro; iconográfico — São Pedro, identificado pelo atributo da chave (Mt 16,19); iconológico — numa catedral do século XIII, a figura afirma a autoridade apostólica num programa de imagens que Mâle descreveu com as fontes da época. Cada nível exige o anterior.</p>`,
  contexto: `<p><strong>No mundo:</strong> catedrais como Chartres são estudadas como conjuntos iconográficos completos. <strong>No Brasil:</strong> igrejas barrocas de Minas, Bahia e Pernambuco, e a obra de Aleijadinho, são patrimônio protegido pelo Iphan ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a iconologia depende da iconografia', tag: 'argumento',
    premissas: ['Interpretar o sentido de uma obra supõe saber o que ela representa.', 'O que ela representa (o tema) se identifica por fontes: textos, atributos, convenções.', 'Sem essa identificação, o "sentido" atribuído não tem controle.'],
    conclusao: 'Logo, a interpretação iconológica deve apoiar-se na análise iconográfica documentada.',
    nota: 'É a regra central do Laboratório: nenhum significado sem documento.',
  },
  objecoes: [
    { objecao: 'A arte é subjetiva; cada um vê o que quiser.', tag: 'debate',
      resposta: 'A experiência estética é pessoal, mas o tema e o programa de uma obra sacra são questões de fato, verificáveis por fontes. A liberdade da apreciação não autoriza atribuir ao artista sentidos sem prova.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: análise iconográfica e iconológica de um vitral ou pintura sacra (pode ser de uma igreja da sua cidade), nos três níveis de Panofsky, com as fontes usadas. Registre-a no Laboratório de Signos e Símbolos.</p>`,
  fonte: {
    obra: 'Erwin Panofsky, Estudos de iconologia (1939), introdução; Émile Mâle, A arte religiosa do século XIII na França (1898), introdução', link: null,
    orientacao: `<p>Na introdução de Panofsky, localize o quadro dos três níveis e os "princípios corretivos" de cada um. Em Mâle, identifique a ideia da catedral como livro e as fontes teológicas que ele usa.</p>`,
  },
  perguntas: [
    { p: 'Quais os três níveis de Panofsky?', r: 'Pré-iconográfico, iconográfico e iconológico.' },
    { p: 'Que obra marca o início do simbolismo no Brasil?', r: 'Missal e Broquéis, de Cruz e Sousa (1893).' },
    { p: 'Quando foi consagrado o coro gótico de Saint-Denis?', r: 'Em 1144.' },
  ],
  exercicios: [
    mc('Estudos de iconologia é de:', ['Mâle', 'Panofsky', 'Suger', 'Eco'], 1, '1939.'),
    mc('Identificar São Pedro pela chave é análise:', ['Pré-iconográfica', 'Iconográfica', 'Iconológica', 'Semiológica'], 1, 'Tema pelo atributo.'),
    mc('As flores do mal foi publicado em:', ['1844', '1857', '1886', '1893'], 1, 'Baudelaire.'),
    mc('O manifesto simbolista de Moréas é de:', ['1857', '1886', '1893', '1922'], 1, 'Le Figaro.'),
    mc('Os profetas de Aleijadinho estão em:', ['Ouro Preto', 'Congonhas', 'Salvador', 'Mariana'], 1, 'Santuário de Bom Jesus de Matosinhos.'),
    disc('Entregue a análise de uma obra sacra nos três níveis de Panofsky, com as fontes usadas, separando o que a imagem mostra do que significa.', ['Três níveis aplicados', 'Fontes citadas', 'Mostra e significa separados', 'Registro no Laboratório']),
  ],
  resumo: ['Panofsky (1939): pré-iconográfico, iconográfico, iconológico.', 'Suger e Saint-Denis (1144); luz dos vitrais.', 'Mâle (1898): a catedral como livro.', 'Simbolismo: Baudelaire (1857), Moréas (1886); Cruz e Sousa (1893).', 'Aleijadinho em Congonhas.'],
  referencias: [
    { texto: 'Erwin Panofsky, Estudos de iconologia (1939).' },
    { texto: 'Émile Mâle, A arte religiosa do século XIII na França (1898).' },
    { texto: 'Cruz e Sousa, Broquéis (1893).' },
    { texto: 'Charles Baudelaire, As flores do mal (1857).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise da obra sacra', 'Ler as introduções de Panofsky e Mâle'],
  revisao: [['Panofsky', 'Três níveis.'], ['Saint-Denis', '1144.'], ['Cruz e Sousa', 'Broquéis, 1893.']],
  avancado: {
    texto: `<h3>Correspondências</h3>
<p>O soneto "Correspondências", de <em>As flores do mal</em>, apresenta a natureza como "templo" de símbolos que se correspondem ${tag('fato')}; o tema dialoga com ideias de Swedenborg, segundo parte da crítica ${tag('interpretacao')}.</p>
<h3>Rosáceas</h3>
<p>As grandes rosáceas góticas, como as de Notre-Dame de Paris e de Chartres, organizam figuras em torno de um centro — muitas vezes Cristo ou a Virgem — segundo programas iconográficos documentados em cada caso ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Erwin Panofsky, Arquitetura gótica e escolástica (1951).' }],
    exercicios: [
      mc('"Correspondências" pertence a:', ['Broquéis', 'As flores do mal', 'Missal', 'Mitologias'], 1, 'Baudelaire.'),
      mc('Arquitetura gótica e escolástica é de:', ['Mâle', 'Panofsky', 'Suger', 'Ruskin'], 1, '1951.'),
      mc('O centro de muitas rosáceas góticas é ocupado por:', ['Reis', 'Cristo ou a Virgem', 'Animais', 'Paisagens'], 1, 'Conforme o programa de cada uma.'),
      disc('Avalie a tese de Panofsky em Arquitetura gótica e escolástica: o que afirma, que evidência usa e uma objeção.', ['Tese', 'Evidência', 'Objeção', 'Conclusão'])],
  },
}),

avaliacao('sb2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre símbolos na liturgia e na Escritura, a simbólica filosófica e a iconografia, e duas discursivas de aplicação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia suas fichas de símbolos e a análise da obra sacra.</li><li>Revise os parágrafos do Catecismo citados.</li></ul>`,
[
  disc('Analise um símbolo cristão (por exemplo, o cordeiro) em quatro camadas: texto bíblico e tipologia, doutrina da Igreja, uso litúrgico e representação artística, separando doutrina, fato e interpretação.', ['Quatro camadas', 'Fontes citadas', 'Separação entre doutrina, fato e interpretação', 'Conclusão']),
  disc('Responda a quem diz que venerar imagens é idolatria, usando Damasceno, Niceia II e o Catecismo, e apresente a objeção com justiça antes da resposta.', ['Objeção exposta com justiça', 'Argumento da Encarnação', 'Distinção veneração/adoração', 'Fontes citadas']),
]),
];
