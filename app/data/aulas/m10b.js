// Módulo 10 — Filosofia contemporânea: aulas 7 a 11.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm10-7', titulo: 'Positivismo',
  aprendera: ['Comte e a lei dos três estados', 'O Círculo de Viena e o princípio de verificação', 'A crítica da metafísica como "sem sentido"', 'Por que o verificacionismo se autorrefuta'],
  prereq: ['Módulo 9, aula 5: Hume'],
  explicacao: `
<h3>Comte</h3>
<p>Auguste Comte (1798–1857), no Curso de Filosofia Positiva (1830–1842), formulou a "lei dos três estados": a humanidade passa do estado teológico (causas sobrenaturais) ao metafísico (abstrações) e ao positivo (leis observáveis) ${tag('fato')}. Fundou a sociologia e, no fim da vida, uma "Religião da Humanidade" ${tag('fato')}. No Brasil, o positivismo influenciou militares republicanos; o lema "Ordem e Progresso" da bandeira vem de Comte ${tag('fato')}.</p>
<h3>O Círculo de Viena</h3>
<p>Nos anos 1920–1930, Moritz Schlick, Rudolf Carnap, Otto Neurath e outros formaram o Círculo de Viena. O manifesto "A concepção científica do mundo" (1929) propôs eliminar a metafísica pela análise lógica da linguagem ${tag('fato')}.</p>
<h3>O princípio de verificação</h3>
<p>Uma proposição tem sentido só se for analítica (lógica, matemática) ou empiricamente verificável. Frases como "Deus existe", "o Nada nadifica" (Heidegger, criticado por Carnap em "A superação da metafísica pela análise lógica da linguagem", 1932) ou "matar é errado" não seriam falsas, mas sem sentido cognitivo ${tag('fato')}. A. J. Ayer popularizou a tese em Linguagem, Verdade e Lógica (1936), e defendeu o "emotivismo" ético ${tag('fato')}.</p>
<h3>A autorrefutação</h3>
<p>O próprio princípio de verificação não é analítico nem empiricamente verificável. Logo, por seu critério, é sem sentido ${tag('argumento')}. Tentativas de reformulá-lo (verificabilidade "fraca", confirmação) falharam em excluir a metafísica sem excluir também a ciência ${tag('fato')}. Ayer admitiu mais tarde que "quase tudo" no livro era falso ${tag('fato')}.</p>
<h3>Legado</h3>
<p>O positivismo lógico declinou nos anos 1950–1960, mas a atitude "cientificista" — só a ciência conhece — permanece influente na cultura ${tag('interpretacao')}.</p>`,
  vocabulario: [['Lei dos três estados', 'Teológico, metafísico, positivo.'], ['Princípio de verificação', 'Só tem sentido o analítico ou verificável.'], ['Emotivismo', 'Juízos morais expressam emoções.'], ['Cientificismo', 'Tese de que só a ciência conhece.'], ['Autorrefutação', 'Tese que, aplicada a si, se nega.']],
  exemplos: '<p>"Só é verdadeiro o que a ciência prova" — essa frase pode ser provada pela ciência? Se não, por seu próprio critério, não é verdadeira. É o argumento da autorrefutação aplicado ao cientificismo.</p>',
  contexto: `<p>Schlick foi assassinado por um ex-aluno em 1936; com o nazismo, quase todos os membros do Círculo emigraram ${tag('fato')}.</p>`,
  argumento: { titulo: 'O princípio de verificação se autorrefuta (reconstruído)', tag: 'argumento',
    premissas: ['Princípio V: só tem sentido o que é analítico ou empiricamente verificável.', 'V não é analítico (não é verdade lógica).', 'V não é empiricamente verificável (nenhuma observação o confirma).'],
    conclusao: 'Logo, por seu próprio critério, V não tem sentido.',
    nota: 'Alguns positivistas responderam que V é uma "proposta" ou recomendação, não uma tese. Mas então não pode condenar a metafísica como sem sentido, apenas recomendar não fazê-la.' },
  objecoes: [{ objecao: 'O critério pode ser uma regra metodológica útil, não uma tese verdadeira.', tag: 'debate', resposta: 'Como regra, perde a força de declarar a metafísica sem sentido; e torna-se uma escolha que precisaria ser justificada por razões — filosóficas.' }],
  aplicacao: '<p>Identifique na mídia ou em conversas uma afirmação cientificista e aplique o teste da autorrefutação.</p>',
  fonte: { obra: 'Carnap, "A superação da metafísica pela análise lógica da linguagem" (1932); Ayer, Linguagem, Verdade e Lógica, cap. 1', link: null, orientacao: '<p>Leia o capítulo 1 de Ayer. Reconstrua o critério e aplique-o a ele mesmo.</p>' },
  perguntas: [
    { p: 'Quais os três estados de Comte?', r: 'Teológico, metafísico e positivo.' },
    { p: 'O que diz o princípio de verificação?', r: 'Só tem sentido o analítico ou empiricamente verificável.' },
    { p: 'Por que ele se autorrefuta?', r: 'Não é analítico nem verificável.' },
  ],
  exercicios: [
    mc('"Ordem e Progresso" vem de:', ['Kant', 'Comte', 'Carnap', 'Mill'], 1, 'Positivismo brasileiro.'),
    mc('Linguagem, Verdade e Lógica (1936) é de:', ['Carnap', 'Ayer', 'Schlick', 'Neurath'], 1, 'Popularizou o positivismo lógico.'),
    mc('Para o positivismo lógico, "Deus existe" é:', ['Falso', 'Sem sentido cognitivo', 'Verdadeiro', 'Analítico'], 1, 'Nem analítico nem verificável.'),
    mc('Carnap criticou a frase "o Nada nadifica" de:', ['Hegel', 'Heidegger', 'Sartre', 'Husserl'], 1, '1932.'),
    disc('O cientificismo contemporâneo repete o erro do princípio de verificação? Argumente com um exemplo.', ['Define cientificismo', 'Aplica autorrefutação', 'Considera resposta', 'Conclusão justificada'])],
  resumo: ['Comte: três estados.', 'Círculo de Viena.', 'Princípio de verificação.', 'Autorrefutação.', 'Cientificismo hoje.'],
  referencias: [{ texto: 'A. J. Ayer, Linguagem, Verdade e Lógica (1936).' }, { texto: 'Rudolf Carnap, "Überwindung der Metaphysik durch logische Analyse der Sprache" (1932).' }, { texto: 'Edward Feser, Scholastic Metaphysics (2014), cap. 0 (crítica ao cientificismo).' }],
  revisao: [['Princípio de verificação', 'Círculo de Viena.'], ['Lei dos três estados', 'Comte.'], ['Emotivismo', 'Ayer.']],
  avancado: {
    texto: `<h3>Quine e o holismo</h3>
<p>Quine ("Dois dogmas", 1951) atacou o reducionismo: nossas crenças enfrentam a experiência "como um corpo", não isoladamente ${tag('fato')}. Isso enfraquece o critério de verificação aplicado frase a frase.</p>
<h3>MacIntyre e o emotivismo</h3>
<p>MacIntyre (Depois da Virtude, cap. 2) sustenta que a cultura moral moderna é emotivista na prática: os debates morais não terminam porque os argumentos são usados como expressões de preferência ${tag('interpretacao')}.</p>
<h3>A volta da metafísica</h3>
<p>Desde os anos 1970 (Kripke, Lewis, Armstrong, Plantinga), a metafísica voltou ao centro da filosofia analítica ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Alasdair MacIntyre, Depois da Virtude (1981), caps. 1–2.' }, { texto: 'Saul Kripke, Naming and Necessity (1980).' }],
    exercicios: [
      mc('O holismo epistemológico é de:', ['Ayer', 'Quine', 'Carnap', 'Schlick'], 1, 'Dois dogmas.'),
      mc('Quem diz que a cultura moral moderna é emotivista na prática?', ['Ayer', 'MacIntyre', 'Stevenson', 'Hare'], 1, 'Depois da Virtude.'),
      mc('A volta da metafísica analítica inclui:', ['Kripke e Lewis', 'Comte e Mill', 'Ayer e Schlick', 'Neurath e Carnap'], 0, 'Anos 1970.'),
      disc('Por que a metafísica voltou à filosofia analítica? Relacione com a autorrefutação do positivismo e com Kripke.', ['Explica o declínio do positivismo', 'Explica a volta', 'Exemplo concreto', 'Conclusão'])],
  },
}),

aula({
  id: 'm10-8', titulo: 'Popper e a filosofia da ciência',
  aprendera: ['O problema da demarcação', 'A falseabilidade', 'Conjecturas e refutações', 'Kuhn, Lakatos e Feyerabend: o debate depois de Popper'],
  prereq: ['Módulo 6: Epistemologia e filosofia da ciência'],
  explicacao: `
<h3>Demarcação, não sentido</h3>
<p>Karl Popper (1902–1994), em A Lógica da Pesquisa Científica (1934; em inglês 1959), recusou o critério de sentido do Círculo de Viena. Seu problema era outro: distinguir ciência de não ciência (demarcação), sem declarar a metafísica sem sentido ${tag('fato')}.</p>
<h3>Falseabilidade</h3>
<p>Uma teoria é científica se puder ser refutada pela experiência. "Todos os cisnes são brancos" não é verificável (precisaria observar todos), mas é falseável (basta um cisne negro) ${tag('fato')}. A relatividade de Einstein fez previsões arriscadas (eclipse de 1919); a psicanálise e o marxismo, para Popper, explicavam tudo e não proibiam nada ${tag('argumento')}.</p>
<h3>Resposta a Hume</h3>
<p>Popper aceita que a indução não se justifica e afirma que a ciência não precisa dela: procede por conjecturas ousadas e tentativas de refutação ${tag('interpretacao')}. Teorias nunca são provadas; são "corroboradas" enquanto resistem.</p>
<h3>Política</h3>
<p>Em A Sociedade Aberta e Seus Inimigos (1945), critica Platão, Hegel e Marx como "historicistas" e defende reformas graduais ${tag('fato')}.</p>
<h3>Depois de Popper</h3>
<ul>
<li><strong>Kuhn</strong> (A Estrutura das Revoluções Científicas, 1962): a ciência normal trabalha dentro de "paradigmas"; anomalias acumuladas levam a revoluções.</li>
<li><strong>Lakatos</strong>: "programas de pesquisa" com núcleo duro protegido por hipóteses auxiliares; progressivos ou degenerativos.</li>
<li><strong>Feyerabend</strong> (Contra o Método, 1975): "tudo vale" como provocação contra métodos únicos ${tag('fato')}.</li>
</ul>`,
  vocabulario: [['Demarcação', 'Distinção entre ciência e não ciência.'], ['Falseabilidade', 'Possibilidade de refutação empírica.'], ['Corroboração', 'Resistência a testes.'], ['Paradigma', 'Conjunto de pressupostos de uma comunidade científica (Kuhn).'], ['Programa de pesquisa', 'Núcleo e cinturão protetor (Lakatos).']],
  exemplos: '<p>A astrologia diz "você terá dificuldades este mês" — previsão que quase nada pode refutar. A física diz "o eclipse ocorrerá às 14h32" — previsão que pode falhar. Para Popper, a segunda é científica.</p>',
  contexto: `<p>Popper cresceu em Viena, emigrou para a Nova Zelândia em 1937 e depois para a London School of Economics ${tag('fato')}.</p>`,
  argumento: { titulo: 'Assimetria entre verificação e falseamento (reconstruído)', tag: 'argumento',
    premissas: ['Leis científicas são universais.', 'Nenhum número finito de observações verifica um universal.', 'Uma única observação contrária, se aceita, refuta o universal (modus tollens).'],
    conclusao: 'Logo, a ciência avança pela tentativa de refutação, não pela verificação.',
    nota: 'Duhem e Quine observaram que uma teoria nunca é testada isolada: diante de um resultado negativo, pode-se ajustar hipóteses auxiliares. Isso enfraquece a assimetria.' },
  objecoes: [{ objecao: 'Os cientistas de fato não abandonam teorias à primeira refutação (Kuhn).', tag: 'debate', resposta: 'Popper responderia que fala do método racional, não da sociologia; Lakatos tentou conciliar com os programas de pesquisa. O debate sobre a racionalidade da ciência continua.' }],
  aplicacao: '<p>Escolha uma teoria (científica ou não) e formule uma observação que a refutaria. Se não conseguir, o que isso diz sobre ela?</p>',
  fonte: { obra: 'Popper, Conjecturas e Refutações (1963), cap. 1', link: null, orientacao: '<p>Leia o capítulo 1 ("A ciência: conjecturas e refutações"). Reconstrua os exemplos de Einstein, Freud, Adler e Marx.</p>' },
  perguntas: [
    { p: 'Qual o problema de Popper?', r: 'A demarcação entre ciência e não ciência.' },
    { p: 'O que é falseabilidade?', r: 'Possibilidade de ser refutada pela experiência.' },
    { p: 'O que é um paradigma para Kuhn?', r: 'Pressupostos compartilhados que orientam a ciência normal.' },
  ],
  exercicios: [
    mc('Para Popper, a metafísica é:', ['Sem sentido', 'Não científica, mas pode ter sentido', 'Ciência', 'Falsa'], 1, 'Diferença do Círculo.'),
    mc('O eclipse de 1919 testou:', ['A mecânica newtoniana', 'A relatividade geral', 'A teoria quântica', 'O darwinismo'], 1, 'Eddington.'),
    mc('"Tudo vale" é de:', ['Kuhn', 'Lakatos', 'Feyerabend', 'Popper'], 2, 'Contra o Método.'),
    mc('A tese de que teorias são testadas em conjunto é de:', ['Popper', 'Duhem e Quine', 'Comte', 'Kuhn'], 1, 'Holismo.'),
    disc('A falseabilidade é um bom critério de demarcação? Avalie com Duhem–Quine e Kuhn.', ['Expõe Popper', 'Expõe as objeções', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Demarcação.', 'Falseabilidade.', 'Conjecturas e refutações.', 'Sociedade aberta.', 'Kuhn, Lakatos, Feyerabend.'],
  referencias: [{ texto: 'Karl Popper, A Lógica da Pesquisa Científica (1934/1959).' }, { texto: 'Karl Popper, Conjecturas e Refutações (1963).' }, { texto: 'Thomas Kuhn, A Estrutura das Revoluções Científicas (1962).' }],
  revisao: [['Falseabilidade', 'Popper.'], ['Paradigma', 'Kuhn.'], ['Programa de pesquisa', 'Lakatos.']],
  avancado: {
    texto: `<h3>Falseabilidade e evolução</h3>
<p>Popper chegou a dizer que o darwinismo era "programa de pesquisa metafísico", e depois revisou a posição (1978) ${tag('fato')}.</p>
<h3>Ciência e fé</h3>
<p>Pierre Duhem, físico católico, mostrou a continuidade entre a física medieval (Buridan, Oresme) e a moderna (Le Système du monde) ${tag('fato')}. Stanley Jaki (A Estrada da Ciência e os Caminhos para Deus, 1978) defendeu que a crença na racionalidade da criação favoreceu o nascimento da ciência ${tag('interpretacao')}.</p>
<h3>Bayesianismo</h3>
<p>Hoje muitos filósofos da ciência usam a teoria bayesiana da confirmação: evidências aumentam ou diminuem a probabilidade de hipóteses — alternativa a Popper ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Pierre Duhem, A Teoria Física: seu Objeto e sua Estrutura (1906).' }, { texto: 'Stanley Jaki, The Road of Science and the Ways to God (1978).' }],
    exercicios: [
      mc('Quem mostrou a continuidade entre física medieval e moderna?', ['Popper', 'Duhem', 'Kuhn', 'Jaki'], 1, 'Le Système du monde.'),
      mc('Popper revisou a posição sobre o darwinismo em:', ['1934', '1959', '1978', '1994'], 2, 'Dialectica, 1978.'),
      mc('A confirmação bayesiana trata evidências como:', ['Provas definitivas', 'Mudanças de probabilidade', 'Refutações', 'Paradigmas'], 1, 'Teorema de Bayes.'),
      disc('Compare falseacionismo e bayesianismo: qual descreve melhor a confirmação científica?', ['Expõe os dois', 'Exemplo', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm10-9', titulo: 'Wittgenstein e a linguagem',
  aprendera: ['O Tractatus: teoria pictórica e o limite do dizível', 'A virada das Investigações Filosóficas', 'Jogos de linguagem, formas de vida e semelhanças de família', 'O argumento da linguagem privada'],
  prereq: ['Aula 7 deste módulo'],
  explicacao: `
<h3>Dois Wittgensteins</h3>
<p>Ludwig Wittgenstein (1889–1951), aluno de Russell em Cambridge, publicou em vida só um livro de filosofia: o Tractatus Logico-Philosophicus (1921). As Investigações Filosóficas saíram postumamente (1953) ${tag('fato')}. Fala-se de um "primeiro" e de um "segundo" Wittgenstein, embora haja continuidades ${tag('interpretacao')}.</p>
<h3>O Tractatus</h3>
<p>"O mundo é tudo o que é o caso" (1). A proposição é uma figura (<em>Bild</em>) dos fatos: tem sentido se pode representar um estado de coisas possível ${tag('fato')}. Ética, estética e "o místico" não podem ser ditos, só mostrados: "Sobre aquilo de que não se pode falar, deve-se calar" (7) ${tag('fato')}. O Círculo de Viena leu o livro como antimetafísico; Wittgenstein pensava que o mais importante era justamente o que não se pode dizer ${tag('interpretacao')}.</p>
<h3>A virada</h3>
<p>Nas Investigações, o significado de uma palavra é, em muitos casos, seu uso na linguagem (§43) ${tag('fato')}. A linguagem é um conjunto de "jogos de linguagem" (dar ordens, descrever, contar piadas, rezar) inseridos em "formas de vida" (§23) ${tag('fato')}.</p>
<h3>Semelhanças de família</h3>
<p>O que há de comum a todos os "jogos"? Talvez nada; apenas "semelhanças de família" que se cruzam (§§66–67) ${tag('fato')}. Isso questiona a busca de definições por gênero e diferença ${tag('debate')}.</p>
<h3>Linguagem privada</h3>
<p>Uma linguagem cujas palavras se refiram a sensações que só o falante conhece seria impossível, pois não haveria critério de correção: "o que me parece certo é certo" (§258) ${tag('argumento')}. O argumento ataca a imagem cartesiana da mente.</p>`,
  vocabulario: [['Teoria pictórica', 'A proposição figura um fato.'], ['Dizer × mostrar', 'O que se representa × o que se manifesta.'], ['Jogo de linguagem', 'Uso da linguagem numa atividade.'], ['Forma de vida', 'Contexto prático da linguagem.'], ['Semelhança de família', 'Rede de semelhanças sem essência comum.']],
  exemplos: '<p>A palavra "água" num laboratório ("H₂O"), numa igreja ("água benta") e num deserto ("água!") funciona em jogos diferentes. O sentido depende do uso.</p>',
  contexto: `<p>Entre o Tractatus e a volta a Cambridge (1929), Wittgenstein foi professor primário na Áustria e jardineiro num mosteiro ${tag('fato')}.</p>`,
  argumento: { titulo: 'Contra a linguagem privada (IF §§243–258, reconstruído)', tag: 'argumento',
    premissas: ['Usar uma palavra com significado é seguir uma regra.', 'Seguir uma regra exige critério de correção distinto do parecer de quem a segue.', 'Numa linguagem privada, só há o parecer do falante.'],
    conclusao: 'Logo, uma linguagem privada é impossível.',
    nota: 'Saul Kripke (Wittgenstein on Rules and Private Language, 1982) leu o argumento como paradoxo cético sobre seguir regras; sua leitura é contestada.' },
  objecoes: [{ objecao: 'Se o significado é uso, a verdade é relativa às formas de vida (relativismo).', tag: 'debate', resposta: 'Wittgenstein não fala em verdade relativa, mas na gramática que torna possível dizer algo verdadeiro. Alguns tomistas (Anscombe, Geach, Kenny) uniram Wittgenstein e Tomás contra o cartesianismo.' }],
  aplicacao: '<p>Escolha a palavra "Deus" ou "amor" e descreva três jogos de linguagem em que ela é usada. O significado é o mesmo?</p>',
  fonte: { obra: 'Wittgenstein, Investigações Filosóficas, §§1–43 e §§65–71', link: null, orientacao: '<p>Leia os parágrafos iniciais (Agostinho e a imagem da linguagem) e os de semelhança de família.</p>' },
  perguntas: [
    { p: 'Como termina o Tractatus?', r: '"Sobre aquilo de que não se pode falar, deve-se calar."' },
    { p: 'Qual a tese do §43?', r: 'Em muitos casos, o significado de uma palavra é seu uso.' },
    { p: 'O que ataca o argumento da linguagem privada?', r: 'A imagem cartesiana da mente como esfera privada.' },
  ],
  exercicios: [
    mc('O Tractatus foi publicado em:', ['1914', '1921', '1953', '1929'], 1, 'Única obra de filosofia em vida.'),
    mc('As Investigações começam citando:', ['Platão', 'Agostinho', 'Frege', 'Russell'], 1, 'Confissões I, 8.'),
    mc('"Semelhanças de família" substituem a busca de:', ['Usos', 'Essências comuns', 'Regras', 'Jogos'], 1, '§§66–67.'),
    mc('A leitura do "paradoxo das regras" é de:', ['Anscombe', 'Kripke', 'Kenny', 'Geach'], 1, '1982.'),
    disc('O segundo Wittgenstein é compatível com o realismo tomista? Use Anscombe ou Kenny.', ['Expõe Wittgenstein', 'Expõe o tomismo', 'Usa um autor', 'Conclusão justificada'])],
  resumo: ['Tractatus: figura e silêncio.', 'Significado como uso.', 'Jogos e formas de vida.', 'Semelhanças de família.', 'Linguagem privada.'],
  referencias: [{ texto: 'Wittgenstein, Tractatus Logico-Philosophicus (1921).' }, { texto: 'Wittgenstein, Investigações Filosóficas (1953).' }, { texto: 'Anthony Kenny, Wittgenstein (1973).' }],
  revisao: [['Tractatus 7', 'Calar sobre o que não se pode dizer.'], ['IF §43', 'Significado como uso.'], ['IF §258', 'Linguagem privada.']],
  avancado: {
    texto: `<h3>Wittgenstein e a religião</h3>
<p>Nas Lições sobre a Crença Religiosa (notas de alunos, c. 1938) e nas Observações sobre O Ramo Dourado de Frazer, Wittgenstein critica a leitura da religião como pseudociência ${tag('fato')}. D. Z. Phillips desenvolveu o "fideísmo wittgensteiniano" ${tag('debate')}.</p>
<h3>Da Certeza</h3>
<p>Em Da Certeza (escrito em 1949–1951), Wittgenstein responde a Moore: algumas proposições ("tenho duas mãos") funcionam como "dobradiças" que não se duvidam porque são condição de toda dúvida ${tag('fato')}.</p>
<h3>Tomismo analítico</h3>
<p>Anscombe, Geach e Kenny (este depois crítico) desenvolveram uma leitura de Tomás com instrumentos analíticos; John Haldane cunhou "tomismo analítico" (anos 1990) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Wittgenstein, Da Certeza (1969, póstumo).' }, { texto: 'John Haldane (org.), Mind, Metaphysics, and Value in the Thomistic and Analytical Traditions (2002).' }],
    exercicios: [
      mc('As "proposições-dobradiça" estão em:', ['Tractatus', 'Da Certeza', 'Investigações', 'Livro Azul'], 1, 'Resposta a Moore.'),
      mc('"Tomismo analítico" foi cunhado por:', ['Anscombe', 'Haldane', 'Geach', 'Kenny'], 1, 'Anos 1990.'),
      mc('O "fideísmo wittgensteiniano" é associado a:', ['Phillips', 'Plantinga', 'Swinburne', 'Kenny'], 0, 'D. Z. Phillips.'),
      disc('A noção de proposições-dobradiça ajuda a responder ao ceticismo? Compare com os primeiros princípios em Aristóteles.', ['Expõe Da Certeza', 'Expõe Aristóteles', 'Compara', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm10-10', titulo: 'MacIntyre e a ética das virtudes',
  aprendera: ['O diagnóstico de Depois da Virtude', 'O fracasso do "projeto iluminista" de justificar a moral', 'Práticas, unidade narrativa da vida e tradição', 'Tradições rivais de investigação racional'],
  prereq: ['Módulo 8, aula 11: Virtudes'],
  explicacao: `
<h3>Uma hipótese inquietante</h3>
<p>Alasdair MacIntyre (1929–2025), em Depois da Virtude (1981), imagina uma catástrofe que destrói a ciência, deixando só fragmentos que as pessoas usam sem compreender. Assim estaria a linguagem moral moderna: fragmentos de uma tradição perdida ${tag('fato')}.</p>
<h3>Emotivismo na prática</h3>
<p>Debates morais (aborto, guerra justa, justiça econômica) são intermináveis porque partem de premissas incomensuráveis; na prática, a cultura trata juízos morais como expressões de preferência ${tag('interpretacao')}. Personagens típicos: o esteta rico, o gerente e o terapeuta ${tag('fato')}.</p>
<h3>O fracasso do Iluminismo</h3>
<p>Kant, Hume, Diderot e Kierkegaard tentaram justificar a moral sem uma noção de fim humano (<em>telos</em>). Mas a moral clássica tinha três termos: o homem como é, o homem como poderia ser se realizasse seu fim, e os preceitos que levam de um ao outro. Retirado o fim, os preceitos ficam sem fundamento ${tag('argumento')}.</p>
<h3>Virtudes em três níveis</h3>
<ol>
<li><strong>Práticas</strong>: atividades cooperativas com bens internos (xadrez, medicina, música).</li>
<li><strong>Unidade narrativa da vida</strong>: a vida como busca (<em>quest</em>) do bem.</li>
<li><strong>Tradição</strong>: "argumento historicamente estendido e socialmente incorporado" sobre os bens ${tag('fato')}.</li>
</ol>
<h3>"Nietzsche ou Aristóteles?"</h3>
<p>O capítulo 9 coloca a alternativa ${tag('fato')}. MacIntyre aproximou-se depois de Tomás e do catolicismo (Justiça de Quem? Qual Racionalidade?, 1988; Três Versões Rivais da Investigação Moral, 1990) ${tag('fato')}. O livro termina esperando "um novo — e sem dúvida muito diferente — São Bento" ${tag('fato')}.</p>`,
  vocabulario: [['Telos', 'Fim próprio do ser humano.'], ['Prática', 'Atividade cooperativa com bens internos.'], ['Bens internos', 'Bens que só se obtêm na prática (excelência).'], ['Tradição', 'Argumento histórico sobre os bens.'], ['Incomensurabilidade', 'Premissas sem medida comum.']],
  exemplos: '<p>Uma criança que aprende xadrez por doces (bem externo) pode trapacear; quando passa a amar o jogo (bem interno), trapacear não faz sentido. É o exemplo de MacIntyre (cap. 14).</p>',
  contexto: `<p>MacIntyre foi marxista na juventude, converteu-se ao catolicismo nos anos 1980 e lecionou em Notre Dame ${tag('fato')}.</p>`,
  argumento: { titulo: 'O fracasso do projeto iluminista (Depois da Virtude, caps. 4–5, reconstruído)', tag: 'argumento',
    premissas: ['A moral clássica ligava a natureza humana não educada ao seu fim pelos preceitos.', 'O Iluminismo rejeitou a noção de fim humano.', 'Sem o fim, os preceitos herdados não podem ser derivados da natureza humana tal como é.'],
    conclusao: 'Logo, o projeto de justificar a moral sem teleologia estava condenado a falhar.',
    nota: 'Kantianos replicam que a razão prática não precisa de teleologia. Liberais (Rawls) buscam acordos "políticos, não metafísicos".' },
  objecoes: [{ objecao: 'Se a racionalidade depende da tradição, MacIntyre é relativista.', tag: 'debate', resposta: 'MacIntyre responde (Justiça de Quem?) que tradições podem ser comparadas: uma é superior quando resolve as crises epistemológicas da outra melhor do que ela própria.' }],
  aplicacao: '<p>Descreva uma prática que você exerce e seus bens internos. Que virtudes ela exige?</p>',
  fonte: { obra: 'MacIntyre, Depois da Virtude, caps. 1, 5 e 15', link: null, orientacao: '<p>Leia o capítulo 1 (a hipótese inquietante), o 5 (fracasso do Iluminismo) e o 15 (unidade narrativa).</p>' },
  perguntas: [
    { p: 'Qual a hipótese inquietante?', r: 'A linguagem moral moderna é feita de fragmentos de uma tradição perdida.' },
    { p: 'Por que o projeto iluminista falhou?', r: 'Porque rejeitou a noção de fim humano.' },
    { p: 'Quais os três níveis da virtude?', r: 'Práticas, unidade narrativa da vida, tradição.' },
  ],
  exercicios: [
    mc('Depois da Virtude é de:', ['1958', '1971', '1981', '1990'], 2, 'MacIntyre.'),
    mc('Um bem interno do xadrez é:', ['Prêmio em dinheiro', 'Excelência no jogo', 'Fama', 'Doces'], 1, 'Cap. 14.'),
    mc('MacIntyre termina esperando um novo:', ['Kant', 'São Bento', 'Aristóteles', 'Tomás'], 1, 'Última frase.'),
    mc('Para MacIntyre, uma tradição é superior a outra quando:', ['É mais antiga', 'Resolve melhor as crises epistemológicas da outra', 'Tem mais adeptos', 'É mais moderna'], 1, 'Justiça de Quem?'),
    disc('MacIntyre escapa do relativismo? Avalie sua noção de crise epistemológica.', ['Expõe a objeção', 'Expõe a resposta', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Fragmentos de moral.', 'Emotivismo na prática.', 'Fracasso do Iluminismo.', 'Práticas, narrativa, tradição.', 'Nietzsche ou Aristóteles?'],
  referencias: [{ texto: 'Alasdair MacIntyre, Depois da Virtude (1981).' }, { texto: 'Alasdair MacIntyre, Justiça de Quem? Qual Racionalidade? (1988).' }, { texto: 'Alasdair MacIntyre, Animais Racionais Dependentes (1999).' }],
  revisao: [['Hipótese inquietante', 'Depois da Virtude, cap. 1.'], ['Prática', 'Depois da Virtude, cap. 14.'], ['Novo São Bento', 'Última frase do livro.']],
  avancado: {
    texto: `<h3>Animais racionais dependentes</h3>
<p>Em Animais Racionais Dependentes (1999), MacIntyre corrige-se: dá mais peso à biologia e às "virtudes da dependência reconhecida" — receber cuidado com gratidão, dar sem calcular ${tag('fato')}.</p>
<h3>Rawls e o liberalismo</h3>
<p>Rawls (Uma Teoria da Justiça, 1971; Liberalismo Político, 1993) propôs princípios de justiça escolhidos sob o "véu de ignorância"; comunitaristas (MacIntyre, Sandel, Taylor) criticaram o "eu desimpedido" ${tag('fato')}.</p>
<h3>A "opção beneditina"</h3>
<p>Rod Dreher (A Opção Beneditina, 2017) tomou a frase final de MacIntyre como programa; MacIntyre não endossou explicitamente essa leitura ${tag('debate')}.</p>`,
    leituras: [{ texto: 'John Rawls, Uma Teoria da Justiça (1971).' }, { texto: 'Michael Sandel, O Liberalismo e os Limites da Justiça (1982).' }],
    exercicios: [
      mc('O "véu de ignorância" é de:', ['MacIntyre', 'Rawls', 'Sandel', 'Nozick'], 1, '1971.'),
      mc('"Virtudes da dependência reconhecida" estão em:', ['Depois da Virtude', 'Animais Racionais Dependentes', 'Três Versões Rivais', 'Ética no Conflito da Modernidade'], 1, '1999.'),
      mc('O "eu desimpedido" é crítica de:', ['Rawls', 'Sandel', 'Kant', 'Mill'], 1, 'Comunitarismo.'),
      disc('Compare MacIntyre e Rawls sobre a justificação da moral e da justiça numa sociedade plural.', ['Expõe Rawls', 'Expõe MacIntyre', 'Compara', 'Conclusão justificada'])],
  },
}),

avaliacao('m10-11', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Hegel e Marx, Kierkegaard e Nietzsche, fenomenologia e existencialismo, positivismo, Popper, Wittgenstein e MacIntyre — e a capacidade de compará-los com a tradição clássica.</p>
<h3>Critério do Degrau 8</h3>
<p>Você deve expor a tese central de cada corrente estudada sem caricatura e compará-la com a tradição clássica. A primeira discursiva treina isso.</p>`,
[
  disc('Escolha três correntes do módulo. Para cada uma: tese central, argumento principal, objeção mais forte e comparação com Aristóteles ou Tomás.', ['Três correntes fiéis', 'Argumentos reconstruídos', 'Objeções fortes', 'Comparação com a tradição']),
  disc('Nietzsche e Kierkegaard reagem ambos à cristandade e ao sistema hegeliano. Compare diagnósticos e propostas.', ['Expõe Nietzsche', 'Expõe Kierkegaard', 'Compara', 'Conclusão justificada']),
  disc('O positivismo lógico, Popper e Wittgenstein tratam do limite do dizível ou do científico. Mostre o que cada um propõe e o que fica de fora.', ['Três posições', 'Autorrefutação do verificacionismo', 'Avaliação', 'Clareza']),
]),
];
