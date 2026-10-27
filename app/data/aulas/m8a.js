// Módulo 8 — Filosofia medieval e escolástica: aulas 1 a 6.
import { tag } from '../fontes.js';
import { aula, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm8-1', titulo: 'Confissões: memória, tempo e criação',
  aprendera: ['A estrutura filosófica dos livros X a XIII das Confissões', 'A análise agostiniana da memória', 'O problema do tempo e a "distensão da alma"', 'A criação do nada e a pergunta "o que Deus fazia antes?"'],
  prereq: ['Módulo 2, aulas 9 e 10 (Agostinho)'],
  explicacao: `
<h3>Depois da narrativa</h3>
<p>No Módulo 2 lemos as Confissões como itinerário de conversão. Aqui lemos a parte que muitos pulam: os livros X a XIII, onde Agostinho faz filosofia em forma de oração ${tag('interpretacao')}.</p>
<h3>Livro X: a memória</h3>
<p>Agostinho busca Deus dentro de si e encontra os "vastos palácios da memória": imagens dos sentidos, noções da matemática e das artes, afetos, e a própria memória de que se lembra ${tag('fato')}. Pergunta como pode lembrar-se do esquecimento e como procura a felicidade se não a conhece: deve haver na memória alguma noção da vida feliz (X, 20–23). Conclui que Deus está na memória não como imagem, mas como a Verdade em que tudo é julgado ${tag('argumento')}.</p>
<h3>Livro XI: o tempo</h3>
<p>"O que é, pois, o tempo? Se ninguém me pergunta, sei; se quero explicar a quem pergunta, não sei" (XI, 14) ${tag('fato')}. O passado já não é, o futuro ainda não é, e o presente, se fosse sempre presente, seria eternidade. Agostinho conclui que medimos o tempo na alma: há um presente do passado (memória), um presente do presente (atenção) e um presente do futuro (expectativa). O tempo é uma "distensão da alma" (<em>distentio animi</em>, XI, 26) ${tag('interpretacao')}.</p>
<h3>"O que Deus fazia antes de criar?"</h3>
<p>Agostinho recusa a resposta jocosa ("preparava o inferno para quem faz essas perguntas") e responde: não havia "antes", porque o tempo foi criado com o mundo; Deus é eterno, isto é, fora do tempo, num "hoje" sem sucessão (XI, 13) ${tag('argumento')}.</p>
<h3>Livros XII–XIII: criação</h3>
<p>Comentando Gênesis 1, Agostinho discute a "matéria informe" criada do nada e a pluralidade de interpretações verdadeiras de um mesmo texto: muitas leituras podem ser verdadeiras, desde que não contradigam a verdade (XII, 18–32) ${tag('interpretacao')}.</p>`,
  vocabulario: [['Distentio animi', 'Distensão da alma: o tempo para Agostinho.'], ['Memoria', 'Faculdade que guarda imagens, noções e a si mesma.'], ['Eternidade', 'Presente sem sucessão.'], ['Matéria informe', 'Matéria criada antes de toda forma (leitura de Gn 1,2).'], ['Exegese plural', 'Várias interpretações verdadeiras de um texto.']],
  exemplos: '<p>Ao ouvir uma melodia, você retém as notas passadas (memória), percebe a presente (atenção) e antecipa as próximas (expectativa). É o exemplo de Agostinho com o salmo recitado (XI, 28).</p>',
  contexto: `<p>As Confissões foram escritas c. 397–400, logo após Agostinho tornar-se bispo ${tag('fato')}.</p>`,
  argumento: { titulo: 'Não havia "antes" da criação (Confissões XI, 13, reconstruído)', tag: 'argumento',
    premissas: ['O tempo é uma criatura, feito com o mundo.', 'Antes só faz sentido dentro do tempo.', 'Logo, antes da criação não havia tempo em que Deus pudesse fazer algo.'],
    conclusao: 'Portanto, a pergunta "o que Deus fazia antes?" não tem objeto; Deus precede o tempo pela eternidade, não por um tempo anterior.',
    nota: 'A física contemporânea do Big Bang, em certas interpretações, também trata o tempo como surgindo com o universo; a analogia é discutida.' },
  objecoes: [{ objecao: 'Se o tempo é só "distensão da alma", ele não existiria sem mentes.', tag: 'debate', resposta: 'Intérpretes discutem se Agostinho reduz o tempo à alma ou só explica como o medimos. Comparado a Aristóteles (o tempo é número do movimento), Agostinho enfatiza a experiência; não nega necessariamente o tempo do mundo.' }],
  aplicacao: '<p>Escreva no Caderno sua própria análise de uma experiência de espera longa: onde está o futuro que você espera? Compare com Confissões XI, 20.</p>',
  fonte: { obra: 'Agostinho, Confissões X, 8–27 e XI, 10–31', link: null, orientacao: '<p>Leia o livro XI inteiro. Reconstrua o argumento pelo qual Agostinho conclui que o tempo está na alma. Marque as passagens 14, 20, 26 e 28.</p>' },
  perguntas: [
    { p: 'O que é o tempo para Agostinho?', r: 'Uma distensão da alma: memória, atenção, expectativa.' },
    { p: 'Como ele responde a "o que Deus fazia antes?"', r: 'Não havia antes: o tempo foi criado com o mundo.' },
    { p: 'O que Agostinho encontra na memória?', r: 'Imagens, noções, afetos e a própria memória; e Deus como a Verdade.' },
  ],
  exercicios: [
    mc('"Se ninguém me pergunta, sei" refere-se a:', ['A alma', 'O tempo', 'Deus', 'A memória'], 1, 'Confissões XI, 14.'),
    mc('O "presente do futuro" é:', ['Memória', 'Atenção', 'Expectativa', 'Eternidade'], 2, 'XI, 20.'),
    mc('Para Agostinho, a eternidade de Deus é:', ['Tempo infinito', 'Presente sem sucessão', 'Ausência de ser', 'Futuro'], 1, 'XI, 13.'),
    mc('Os livros XII–XIII comentam:', ['O Êxodo', 'O início do Gênesis', 'Os Salmos', 'O Apocalipse'], 1, 'Criação.'),
    disc('Compare a definição de tempo de Aristóteles (número do movimento) com a de Agostinho. São rivais ou complementares?', ['Expõe Aristóteles', 'Expõe Agostinho', 'Compara', 'Conclusão justificada'])],
  resumo: ['Memória: palácios e a Verdade.', 'Tempo: distensão da alma.', 'Não havia "antes" da criação.', 'Exegese plural do Gênesis.'],
  referencias: [{ texto: 'Agostinho, Confissões X–XIII.' }, { texto: 'Aristóteles, Física IV, 10–14 (o tempo).' }],
  revisao: [['Distentio animi', 'Confissões XI, 26.'], ['Pergunta sobre o "antes"', 'Confissões XI, 13: o tempo foi criado com o mundo.'], ['Palácios da memória', 'Confissões X, 8.']],
  avancado: {
    texto: `<h3>Tempo A e tempo B</h3>
<p>J. M. E. McTaggart ("The Unreality of Time", 1908) distinguiu a série A (passado, presente, futuro) e a série B (antes e depois). Teorias "A" (o presente é privilegiado) e "B" (todos os tempos são igualmente reais) dividem a metafísica do tempo; Agostinho é frequentemente lido como pensador da série A ${tag('debate')}.</p>
<h3>Eternidade e presciência</h3>
<p>Se Deus vê todo o tempo num "agora" eterno, seu conhecimento do futuro não determina as ações livres: Deus vê, não prevê — solução de Boécio (próxima aula) e de Tomás ${tag('argumento')}. Críticos questionam a coerência de um conhecimento atemporal de eventos temporais ${tag('debate')}.</p>
<h3>Husserl e Agostinho</h3>
<p>Husserl abriu as Lições sobre a consciência interna do tempo (1905) dizendo que todos os que se ocupam do tempo deveriam estudar o livro XI das Confissões ${tag('fato')}.</p>`,
    leituras: [{ texto: 'J. M. E. McTaggart, "The Unreality of Time" (1908).' }, { texto: 'Edmund Husserl, Lições sobre a Fenomenologia da Consciência Interna do Tempo (1905), §1.' }],
    exercicios: [
      mc('A distinção entre série A e série B é de:', ['Husserl', 'McTaggart', 'Bergson', 'Heidegger'], 1, '1908.'),
      mc('Husserl recomendou estudar o livro ___ das Confissões:', ['VII', 'X', 'XI', 'XIII'], 2, 'Sobre o tempo.'),
      mc('Para Boécio e Tomás, Deus conhece o futuro livre:', ['Prevendo-o', 'Vendo-o no presente eterno', 'Não o conhecendo', 'Determinando-o'], 1, 'Visão eterna.'),
      disc('Agostinho é teórico A ou B do tempo? Argumente com o texto.', ['Explica A e B', 'Usa Confissões XI', 'Considera a eternidade divina', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-2', titulo: 'O livre-arbítrio',
  aprendera: ['A estrutura do diálogo O Livre-Arbítrio de Agostinho', 'Por que Deus deu a vontade livre', 'A origem do mal moral na vontade', 'O problema da presciência divina'],
  prereq: ['Aula 1 deste módulo'],
  explicacao: `
<h3>Um diálogo em três livros</h3>
<p>Agostinho escreveu O Livre-Arbítrio (<em>De libero arbitrio</em>) entre c. 388 e 395, em diálogo com seu amigo Evódio, contra os maniqueus ${tag('fato')}. A pergunta inicial: "Deus é autor do mal?" (I, 1).</p>
<h3>Livro I: de onde vem o mal moral</h3>
<p>Fazer o mal é seguir a paixão desordenada (<em>libido</em>), preferindo bens temporais aos eternos. Nada obriga a mente a ser escrava da paixão: nem o que é superior (que é justo), nem o inferior (que é mais fraco). Logo, o pecado vem da vontade própria (I, 11) ${tag('argumento')}.</p>
<h3>Livro II: por que Deus deu a vontade livre</h3>
<p>Se a vontade livre pode ser usada para o mal, por que Deus a deu? Agostinho responde: sem ela não se poderia agir retamente; e a vontade é um bem, ainda que possa ser mal usada, como as mãos (II, 18). No mesmo livro, prova a existência de Deus a partir de verdades imutáveis (números, sabedoria) superiores à mente: o que está acima da mente e é imutável é Deus, ou algo acima do qual está Deus ${tag('argumento')}.</p>
<h3>Livro III: presciência e liberdade</h3>
<p>Se Deus sabe de antemão que pecarei, não peco por necessidade? Agostinho responde: Deus sabe que pecarei livremente; seu conhecimento não é a causa do pecado, como minha memória do passado não causa o que já fiz (III, 4) ${tag('argumento')}.</p>
<h3>Uma questão em aberto</h3>
<p>Mais tarde, nas Retratações (I, 9), Agostinho esclarece que não tratou aqui da graça, tema de seus escritos antipelagianos ${tag('fato')}. A relação entre liberdade e graça continuará na teologia medieval e moderna (Módulo 1, aula 8).</p>`,
  vocabulario: [['Libido', 'Desejo desordenado que prefere bens inferiores.'], ['Liberum arbitrium', 'Capacidade de escolher.'], ['Presciência', 'Conhecimento prévio do futuro.'], ['Retratações', 'Obra em que Agostinho revisa seus escritos.'], ['Bens médios', 'Bens que podem ser bem ou mal usados, como a vontade.']],
  exemplos: '<p>Saber que um amigo pontual vai chegar às 8h não o obriga a chegar: o seu saber depende do caráter dele, não o contrário. A analogia ajuda — mas não resolve tudo, porque Deus conhece com certeza infalível.</p>',
  contexto: `<p>O diálogo começa em Roma, logo após o batismo, e é concluído em Hipona ${tag('fato')}.</p>`,
  argumento: { titulo: 'Presciência não causa o pecado (Livre-Arbítrio III, 4, reconstruído)', tag: 'argumento',
    premissas: ['Conhecer um ato não é causá-lo.', 'Deus conhece de antemão que alguém pecará livremente.', 'O que é conhecido é o pecado como livre.'],
    conclusao: 'Logo, a presciência divina não torna necessário o pecado.',
    nota: 'O argumento distingue necessidade da consequência ("se Deus sabe, acontecerá") e do consequente ("acontecerá necessariamente"), distinção que Boécio e Tomás formalizarão.' },
  objecoes: [{ objecao: 'Se Deus sabe infalivelmente o que farei, não posso fazer outra coisa.', tag: 'debate', resposta: 'Nelson Pike (1965) formulou a versão moderna dessa objeção. Respostas: eternidade (Boécio), ockhamismo (o passado sobre o futuro não é fixo), molinismo (ciência média). O debate continua.' }],
  aplicacao: '<p>Escreva no Caderno o dilema da presciência em três premissas e a resposta de Agostinho em três frases.</p>',
  fonte: { obra: 'Agostinho, O Livre-Arbítrio, I e III, 1–4', link: null, orientacao: '<p>Leia o livro I e o início do livro III. Reconstrua a resposta sobre a presciência.</p>' },
  perguntas: [
    { p: 'Qual a pergunta inicial do diálogo?', r: 'Se Deus é autor do mal.' },
    { p: 'Por que Deus deu a vontade livre?', r: 'Porque sem ela não se poderia agir retamente; é um bem, ainda que possa ser mal usado.' },
    { p: 'Como Agostinho responde à objeção da presciência?', r: 'Conhecer não é causar; Deus conhece o ato como livre.' },
  ],
  exercicios: [
    mc('O interlocutor de Agostinho no diálogo é:', ['Alípio', 'Evódio', 'Ambrósio', 'Adeodato'], 1, 'O Livre-Arbítrio.'),
    mc('Para Agostinho, a causa do pecado é:', ['O corpo', 'A vontade própria', 'O diabo apenas', 'Deus'], 1, 'Livro I.'),
    mc('A vontade, para Agostinho, é um bem:', ['Supremo', 'Médio, que pode ser mal usado', 'Mau', 'Indiferente'], 1, 'Livro II.'),
    mc('A versão moderna da objeção da presciência é de:', ['Pike', 'Plantinga', 'Hume', 'Kant'], 0, 'Nelson Pike, 1965.'),
    disc('A resposta de Agostinho à presciência é suficiente? Compare com a objeção de Pike.', ['Reconstrói Agostinho', 'Expõe Pike', 'Avalia', 'Conclusão justificada'])],
  resumo: ['De onde vem o mal moral: a vontade.', 'A vontade livre é bem médio.', 'Prova de Deus pelas verdades imutáveis.', 'Presciência não é causa.', 'Retratações e a graça.'],
  referencias: [{ texto: 'Agostinho, O Livre-Arbítrio.' }, { texto: 'Agostinho, Retratações I, 9.' }, { texto: 'Nelson Pike, "Divine Omniscience and Voluntary Action" (1965).' }],
  revisao: [['Livre-Arbítrio I', 'O pecado vem da vontade.'], ['Livre-Arbítrio III, 4', 'Presciência não causa.'], ['Pike (1965)', 'Versão moderna da objeção da presciência.']],
  avancado: {
    texto: `<h3>Necessidade da consequência e do consequente</h3>
<p>"Necessariamente, se Deus sabe que p, então p" é verdadeiro (necessidade da consequência). "Se Deus sabe que p, então p é necessário" é falso (necessidade do consequente). Confundir as duas é falácia modal ${tag('argumento')}. Tomás usa a distinção na Suma Contra os Gentios I, 67.</p>
<h3>Ockhamismo</h3>
<p>Guilherme de Ockham distinguiu fatos "duros" e "moles" sobre o passado: que Deus "soube ontem que farei X amanhã" é um fato mole, dependente do que farei — por isso não fixa meu futuro ${tag('debate')}.</p>
<h3>Frankfurt e a liberdade</h3>
<p>Harry Frankfurt (1969) argumentou que alguém pode ser responsável mesmo sem poder agir de outro modo (casos de Frankfurt), o que muda os termos do debate sobre presciência e liberdade ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Suma Contra os Gentios I, 67.' }, { texto: 'Harry Frankfurt, "Alternate Possibilities and Moral Responsibility" (1969).' }],
    exercicios: [
      mc('"Se Deus sabe que p, p é necessário" confunde:', ['Ato e potência', 'Necessidade da consequência e do consequente', 'Fé e razão', 'Ser e essência'], 1, 'Falácia modal.'),
      mc('Fatos "duros" e "moles" sobre o passado: distinção de:', ['Ockham', 'Tomás', 'Agostinho', 'Molina'], 0, 'Ockhamismo.'),
      mc('Os "casos de Frankfurt" questionam:', ['O princípio das possibilidades alternativas', 'A existência de Deus', 'O tempo', 'A graça'], 0, '1969.'),
      disc('Formalize a objeção da presciência em lógica modal e mostre onde está a falácia (se houver).', ['Formalização correta', 'Distingue as duas necessidades', 'Identifica o passo', 'Conclusão'])],
  },
}),

aula({
  id: 'm8-3', titulo: 'Boécio: providência e eternidade',
  aprendera: ['A situação e a forma de A Consolação da Filosofia', 'A roda da Fortuna e o verdadeiro bem', 'A distinção entre providência e destino', 'A definição de eternidade e a solução para a presciência'],
  explicacao: `
<h3>Um livro escrito na prisão</h3>
<p>Boécio (c. 477–524), senador romano a serviço do rei ostrogodo Teodorico, foi acusado de traição, preso e executado. Na prisão escreveu A Consolação da Filosofia, alternando prosa e verso ${tag('fato')}. A Filosofia aparece como mulher majestosa, expulsa as musas da poesia lamentosa e conduz o prisioneiro da queixa à compreensão.</p>
<h3>A roda da Fortuna</h3>
<p>A Fortuna gira sua roda: quem está em cima desce, e quem está embaixo sobe; reclamar dela é ignorar sua natureza (livro II) ${tag('fato')}. Riquezas, honras, poder, fama e prazer são bens falsos ou parciais. O verdadeiro bem é completo e só se encontra em Deus, que é a própria felicidade (livro III) ${tag('argumento')}.</p>
<h3>Por que os maus prosperam?</h3>
<p>No livro IV, Boécio sustenta que os maus são na verdade impotentes (não alcançam o bem que todos desejam) e infelizes, e que a <strong>providência</strong> (o plano na mente divina) se realiza pelo <strong>destino</strong> (a ordem das coisas no tempo) — como o centro e os círculos de uma roda ${tag('argumento')}.</p>
<h3>Eternidade</h3>
<p>Livro V: como conciliar presciência e liberdade? Boécio define eternidade como "a posse inteira, simultânea e perfeita de uma vida interminável" (V, prosa 6) ${tag('fato')}. Deus não prevê o futuro; vê tudo num presente eterno. Assim como ver alguém caminhar agora não o obriga a caminhar, o conhecimento divino não necessita os atos livres ${tag('argumento')}.</p>
<h3>Boécio, ponte entre mundos</h3>
<p>Boécio traduziu e comentou a lógica de Aristóteles e a Isagoge de Porfírio, legando à Idade Média o vocabulário lógico e as definições de pessoa e eternidade ${tag('fato')}.</p>`,
  vocabulario: [['Fortuna', 'Força dos acontecimentos instáveis.'], ['Providência', 'Plano das coisas na mente divina.'], ['Destino', 'Desdobramento da providência no tempo.'], ['Eternidade (Boécio)', 'Posse inteira, simultânea e perfeita de uma vida interminável.'], ['Prosimetrum', 'Obra que alterna prosa e verso.']],
  exemplos: '<p>Perder o emprego é uma volta da roda da Fortuna; a Consolação perguntaria: o que você realmente perdeu? Algum bem que era seu por natureza, ou algo que nunca dependeu de você?</p>',
  contexto: `<p>Boécio é venerado como mártir em Pavia (São Severino Boécio), embora a natureza religiosa de sua condenação seja discutida ${tag('debate')}.</p>`,
  argumento: { titulo: 'A solução de Boécio para a presciência (Consolação V, 6, reconstruída)', tag: 'argumento',
    premissas: ['Todo conhecimento segue a natureza de quem conhece, não a do conhecido.', 'A natureza de Deus é eterna: possui tudo num presente.', 'Logo, Deus conhece o que para nós é futuro como presente.', 'Conhecer algo como presente não o torna necessário.'],
    conclusao: 'Portanto, a presciência divina não elimina a liberdade.',
    nota: 'Boécio distingue a necessidade simples (o sol nascer) da condicional (se vejo alguém andar, necessariamente anda). Críticos modernos discutem se um ser atemporal pode conhecer o que é "agora".' },
  objecoes: [{ objecao: 'Um Deus fora do tempo não pode saber que hora é agora.', tag: 'debate', resposta: 'Arthur Prior (1962) e outros levantaram esse ponto. Defensores da eternidade respondem que Deus conhece todos os fatos temporais com suas relações, sem estar ele mesmo no tempo; ou propõem uma eternidade "relativa" (Stump e Kretzmann, 1981).' }],
  aplicacao: '<p>Escreva no Caderno uma lista dos "bens falsos" do livro III que você mais deseja e explique, com Boécio, por que são parciais.</p>',
  fonte: { obra: 'Boécio, A Consolação da Filosofia, livros II, III e V', link: null, orientacao: '<p>Leia os livros II e V. Reconstrua o argumento da eternidade (V, 6) e a distinção entre necessidade simples e condicional.</p>' },
  perguntas: [
    { p: 'Onde Boécio escreveu a Consolação?', r: 'Na prisão, antes de ser executado.' },
    { p: 'Qual a diferença entre providência e destino?', r: 'Providência é o plano na mente divina; destino, sua realização no tempo.' },
    { p: 'Como Boécio define a eternidade?', r: 'Posse inteira, simultânea e perfeita de uma vida interminável.' },
  ],
  exercicios: [
    mc('Quem condenou Boécio?', ['Justiniano', 'Teodorico', 'Constantino', 'Carlos Magno'], 1, 'Rei ostrogodo.'),
    mc('Para Boécio, os maus são:', ['Poderosos e felizes', 'Impotentes e infelizes', 'Indiferentes', 'Predestinados'], 1, 'Livro IV.'),
    mc('Deus, para Boécio, conhece o futuro:', ['Prevendo-o', 'Como presente eterno', 'Não o conhece', 'Por dedução'], 1, 'Livro V.'),
    mc('A Consolação alterna:', ['Latim e grego', 'Prosa e verso', 'Diálogo e tratado', 'Carta e sermão'], 1, 'Prosimetrum.'),
    disc('A noção de eternidade de Boécio resolve o problema da presciência? Avalie com a objeção de Prior.', ['Explica a eternidade', 'Reconstrói a solução', 'Expõe a objeção', 'Conclusão justificada'])],
  resumo: ['Consolação escrita na prisão.', 'Roda da Fortuna; bens falsos.', 'Providência e destino.', 'Eternidade: presente total.', 'Boécio como ponte da lógica antiga.'],
  referencias: [{ texto: 'Boécio, A Consolação da Filosofia.' }, { texto: 'Eleonore Stump e Norman Kretzmann, "Eternity" (1981).' }],
  revisao: [['Eternidade (Boécio)', 'Posse inteira, simultânea e perfeita de uma vida interminável.'], ['Providência × destino', 'Plano na mente divina × ordem no tempo.'], ['Roda da Fortuna', 'Consolação II.']],
  avancado: {
    texto: `<h3>Eternidade e tempo</h3>
<p>Stump e Kretzmann ("Eternity", 1981) propuseram a "simultaneidade ET" (eternidade-tempo): todo momento do tempo é simultâneo, de modo especial, ao presente eterno ${tag('debate')}. Críticos (Paul Helm, William Hasker) discutiram a coerência da proposta.</p>
<h3>A recepção medieval</h3>
<p>A Consolação foi traduzida por Alfredo, o Grande (século IX), Chaucer e Jean de Meun; é uma das obras mais lidas da Idade Média ${tag('fato')}. Dante coloca Boécio no Paraíso, entre os sábios (Paraíso X) ${tag('fato')}.</p>
<h3>Uma consolação "sem Cristo"?</h3>
<p>Leitores observaram que a obra não menciona Cristo; uns veem nisso um sinal de que Boécio quis mostrar o alcance da razão natural; outros, um enigma ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Eleonore Stump e Norman Kretzmann, "Eternity", Journal of Philosophy 78 (1981).' }, { texto: 'Dante, Paraíso, canto X.' }],
    exercicios: [
      mc('A "simultaneidade ET" é de:', ['Boécio', 'Stump e Kretzmann', 'Prior', 'Helm'], 1, '1981.'),
      mc('Quem traduziu a Consolação para o inglês antigo?', ['Beda', 'Alfredo, o Grande', 'Alcuíno', 'Chaucer apenas'], 1, 'Século IX.'),
      mc('Dante coloca Boécio:', ['No Inferno', 'No Purgatório', 'No Paraíso', 'No Limbo'], 2, 'Paraíso X.'),
      disc('Por que a Consolação não menciona Cristo? Avalie as interpretações.', ['Apresenta as leituras', 'Usa o texto', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-4', titulo: 'Anselmo: a fé que busca compreender',
  aprendera: ['O programa de Anselmo: fides quaerens intellectum', 'O Monológio e o Proslógio', 'O Por que Deus se fez homem', 'A definição de verdade como retidão'],
  prereq: ['Módulo 7, aula 8: O argumento ontológico'],
  explicacao: `
<h3>Um monge filósofo</h3>
<p>Anselmo (1033–1109), nascido em Aosta, foi monge e abade de Bec, na Normandia, e depois arcebispo de Cantuária ${tag('fato')}. É chamado "pai da escolástica" por aplicar à fé um método racional rigoroso ${tag('interpretacao')}.</p>
<h3>O programa</h3>
<p>No proêmio do Proslógio, Anselmo diz que pensou em intitular a obra "A fé que busca compreender" (<em>fides quaerens intellectum</em>). No capítulo 1, escreve que não busca compreender para crer, mas crê para compreender (<em>credo ut intelligam</em>) ${tag('fato')}. A razão trabalha dentro da fé, sem dispensá-la.</p>
<h3>Monológio (1076)</h3>
<p>A pedido dos monges, Anselmo prova a existência de Deus "só pela razão" (<em>sola ratione</em>), sem apelar à Escritura: há muitos bens; o que os torna bons é um bem por si, sumamente bom; esse é Deus ${tag('argumento')}. É um argumento próximo da quarta via de Tomás.</p>
<h3>Proslógio (c. 1077–1078)</h3>
<p>O "único argumento" (Módulo 7, aula 8): Deus é aquilo maior do que o qual nada pode ser pensado.</p>
<h3>Por que Deus se fez homem (Cur Deus homo, 1098)</h3>
<p>Anselmo pergunta por que a Encarnação foi necessária. O pecado ofende a honra de Deus e exige satisfação; só o homem deve satisfazer, mas só Deus pode; logo, a satisfação exige um Deus-homem ${tag('argumento')}. É a "teoria da satisfação", muito influente e muito discutida ${tag('debate')}.</p>
<h3>A verdade como retidão</h3>
<p>No diálogo Sobre a verdade, Anselmo define verdade como "retidão perceptível só pela mente": uma proposição é verdadeira quando significa o que deve significar; uma ação, quando é o que deve ser ${tag('fato')}.</p>`,
  vocabulario: [['Fides quaerens intellectum', 'A fé que busca compreender.'], ['Credo ut intelligam', 'Creio para compreender.'], ['Sola ratione', 'Só pela razão.'], ['Satisfação', 'Reparação devida pela ofensa (Cur Deus homo).'], ['Retidão', 'Verdade como o que deve ser.']],
  exemplos: '<p>Um estudante que aceita um teorema por confiança no professor e depois refaz a demonstração passa da crença à compreensão — imagem do programa de Anselmo.</p>',
  contexto: `<p>Anselmo viveu a reforma gregoriana e a querela das investiduras; foi exilado duas vezes por conflitos com os reis da Inglaterra ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento do Cur Deus homo (reconstruído)', tag: 'argumento',
    premissas: ['O pecado humano exige uma satisfação proporcional à ofensa feita a Deus.', 'Só o homem deve oferecer essa satisfação.', 'Só Deus pode oferecer uma satisfação suficiente.'],
    conclusao: 'Logo, a satisfação deve ser oferecida por alguém que seja Deus e homem.',
    nota: 'Críticos (Abelardo, depois teólogos modernos) objetaram que a teoria faz de Deus um credor preocupado com sua honra. Defensores dizem que "honra" designa a ordem justa da criação.' },
  objecoes: [{ objecao: 'Anselmo pretende provar "por razões necessárias" mistérios da fé, o que é racionalismo.', tag: 'debate', resposta: 'Anselmo trabalha dentro da fé e reconhece que a razão não esgota o mistério; Tomás preferirá falar de "razões de conveniência" para a Encarnação. A tensão mostra a busca de equilíbrio entre fé e razão.' }],
  aplicacao: '<p>Escreva no Caderno o que significa, na sua vida intelectual, "crer para compreender": cite uma crença que você recebeu e que agora procura compreender.</p>',
  fonte: { obra: 'Anselmo, Proslógio, proêmio e cap. 1; Monológio, caps. 1–4', link: null, orientacao: '<p>Leia o proêmio e o capítulo 1 do Proslógio (a oração inicial) e os primeiros capítulos do Monológio. Compare os dois métodos.</p>' },
  perguntas: [
    { p: 'O que significa "credo ut intelligam"?', r: 'Creio para compreender.' },
    { p: 'Qual a tese do Cur Deus homo?', r: 'A satisfação do pecado exige um Deus-homem.' },
    { p: 'Como Anselmo define a verdade?', r: 'Retidão perceptível só pela mente.' },
  ],
  exercicios: [
    mc('Anselmo foi arcebispo de:', ['Paris', 'Cantuária', 'Colônia', 'Milão'], 1, 'Inglaterra.'),
    mc('O argumento "só pela razão" a partir dos graus de bondade está no:', ['Proslógio', 'Monológio', 'Cur Deus homo', 'Sobre a verdade'], 1, '1076.'),
    mc('A teoria da satisfação foi formulada em:', ['Cur Deus homo', 'Proslógio', 'Suma', 'Confissões'], 0, '1098.'),
    mc('Anselmo é chamado:', ['Doutor Angélico', 'Pai da escolástica', 'Doutor Sutil', 'Doutor da Graça'], 1, 'Pelo método racional aplicado à fé.'),
    disc('A teoria da satisfação de Anselmo é defensável hoje? Reconstrua o argumento e a objeção de Abelardo.', ['Reconstrução fiel', 'Expõe Abelardo', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Fides quaerens intellectum; credo ut intelligam.', 'Monológio: sola ratione.', 'Proslógio: o único argumento.', 'Cur Deus homo: satisfação.', 'Verdade como retidão.'],
  referencias: [{ texto: 'Anselmo, Proslógio; Monológio.' }, { texto: 'Anselmo, Por que Deus se fez homem.' }, { texto: 'Anselmo, Sobre a verdade.' }],
  revisao: [['Credo ut intelligam', 'Proslógio, cap. 1.'], ['Cur Deus homo', 'Teoria da satisfação (1098).'], ['Monológio', 'Prova sola ratione pelos graus de bondade.']],
  avancado: {
    texto: `<h3>Abelardo e a "teoria moral"</h3>
<p>Pedro Abelardo (1079–1142), no comentário a Romanos, enfatizou que Cristo nos redime sobretudo pelo amor que desperta em nós, crítica à teoria de Anselmo que gerou a chamada "teoria da influência moral" ${tag('interpretacao')}. Bernardo de Claraval combateu Abelardo, condenado no concílio de Sens (1141) ${tag('fato')}.</p>
<h3>Satisfação e substituição penal</h3>
<p>Teólogos distinguem a satisfação de Anselmo (oferecer a Deus uma honra devida) da "substituição penal" de autores protestantes (Cristo recebe a pena no lugar do pecador). A doutrina católica (Trento; CIC §613–617) fala de sacrifício e satisfação, sem adotar a substituição penal estrita ${tag('debate')}.</p>
<h3>Anselmo e a liberdade</h3>
<p>No diálogo Sobre a liberdade do arbítrio, Anselmo define liberdade como "poder de conservar a retidão da vontade por causa dela mesma", e não como poder de pecar ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Anselmo, Sobre a liberdade do arbítrio.' }, { texto: 'Catecismo, §613–617.' }],
    exercicios: [
      mc('Quem criticou a teoria da satisfação enfatizando o amor que Cristo desperta?', ['Bernardo', 'Abelardo', 'Tomás', 'Boaventura'], 1, 'Comentário a Romanos.'),
      mc('Para Anselmo, a liberdade é:', ['Poder de pecar', 'Poder de conservar a retidão da vontade por ela mesma', 'Indiferença', 'Necessidade'], 1, 'Sobre a liberdade do arbítrio.'),
      mc('O concílio de Sens (1141) condenou teses de:', ['Anselmo', 'Abelardo', 'Tomás', 'Escoto'], 1, 'Por iniciativa de Bernardo.'),
      disc('Compare as teorias da satisfação e da influência moral. A doutrina católica escolhe uma delas?', ['Expõe as duas', 'Usa CIC §613–617', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-5', titulo: 'O método escolástico',
  aprendera: ['As origens do método: Abelardo e o Sic et Non', 'Lectio, quaestio e disputatio', 'As universidades medievais e seu currículo', 'Por que o método é um modelo de honestidade intelectual'],
  explicacao: `
<h3>Escola e escolástica</h3>
<p>"Escolástica" designa a filosofia e a teologia ensinadas nas escolas medievais — primeiro monásticas e catedrais, depois universidades (Bolonha, Paris, Oxford, a partir de c. 1200) ${tag('fato')}.</p>
<h3>Sic et Non</h3>
<p>Pedro Abelardo, em Sic et Non ("Sim e não", c. 1120), reuniu 158 questões com citações de autoridades que parecem contradizer-se, propondo regras para conciliá-las: verificar a autenticidade do texto, considerar o sentido das palavras, o contexto, a intenção e a evolução do autor ${tag('fato')}. Isso deu à teologia um método crítico de leitura ${tag('interpretacao')}.</p>
<h3>Pedro Lombardo</h3>
<p>Os Quatro Livros das Sentenças (c. 1150) de Pedro Lombardo organizaram as opiniões dos Padres por temas (Deus, criação, Encarnação, sacramentos) e tornaram-se o manual básico de teologia por séculos: todo mestre devia comentá-las ${tag('fato')}.</p>
<h3>Três atividades</h3>
<ul>
<li><strong>Lectio</strong>: leitura comentada de um texto de autoridade (Escritura, Aristóteles, Lombardo).</li>
<li><strong>Quaestio</strong>: uma pergunta tirada da leitura, discutida com argumentos dos dois lados.</li>
<li><strong>Disputatio</strong>: debate público, com objeções e respostas; as "questões disputadas" e as "quodlibetais" (sobre qualquer tema proposto pelo público) ${tag('fato')}.</li>
</ul>
<h3>Faculdades</h3>
<p>A universidade tinha a faculdade de Artes (lógica, gramática, retórica, matemática, filosofia natural, ética, metafísica), base para as superiores: Teologia, Direito e Medicina ${tag('fato')}.</p>
<h3>Uma lição de honestidade</h3>
<p>O método obriga a apresentar as objeções antes da própria posição, muitas vezes na forma mais forte, e a responder a cada uma. É o contrário do espantalho ${tag('argumento')}.</p>`,
  vocabulario: [['Lectio', 'Leitura comentada.'], ['Quaestio', 'Pergunta discutida com argumentos dos dois lados.'], ['Disputatio', 'Debate público.'], ['Sentenças', 'Manual de Pedro Lombardo.'], ['Quodlibet', 'Disputa sobre qualquer tema proposto.']],
  exemplos: '<p>Faça uma "quaestio" sobre uma pergunta atual: "Se é lícito mentir para salvar uma vida". Liste três argumentos a favor ("parece que sim"), um argumento em contrário e sua resposta.</p>',
  contexto: `<p>A Universidade de Paris recebeu estatutos do legado papal Roberto de Courçon em 1215 ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que expor as objeções primeiro', tag: 'argumento',
    premissas: ['Uma tese só está estabelecida quando resiste às melhores objeções.', 'Quem não conhece as objeções não sabe se sua tese resiste.', 'Expor as objeções primeiro obriga a conhecê-las e a responder a elas.'],
    conclusao: 'Logo, o método escolástico favorece a verdade sobre a vitória retórica.',
    nota: 'O mesmo espírito está nas regras deste curso: steelman, princípio de caridade, compreender antes de criticar.' },
  objecoes: [{ objecao: 'A escolástica foi dogmática e formalista, discutindo "quantos anjos cabem na ponta de uma agulha".', tag: 'debate', resposta: 'A frase sobre os anjos não aparece em textos escolásticos conhecidos e parece ter sido difundida como sátira em época moderna. Houve formalismo na escolástica tardia, mas o método em si é crítico. Historiadores modernos reabilitaram a escolástica.' }],
  aplicacao: '<p>Escreva uma quaestio completa (três objeções, um "em sentido contrário", resposta e solução das objeções) sobre uma pergunta filosófica estudada no curso.</p>',
  fonte: { obra: 'Abelardo, Sic et Non, prólogo', link: null, orientacao: '<p>Leia o prólogo do Sic et Non (há traduções parciais) e liste as regras de leitura de Abelardo.</p>' },
  perguntas: [
    { p: 'O que é Sic et Non?', r: 'Obra de Abelardo com autoridades aparentemente contraditórias e regras para conciliá-las.' },
    { p: 'Quais as três atividades do ensino escolástico?', r: 'Lectio, quaestio e disputatio.' },
    { p: 'Qual era o manual básico de teologia?', r: 'As Sentenças de Pedro Lombardo.' },
  ],
  exercicios: [
    mc('Sic et Non é de:', ['Lombardo', 'Abelardo', 'Anselmo', 'Tomás'], 1, 'C. 1120.'),
    mc('Disputas sobre qualquer tema proposto pelo público chamavam-se:', ['Lectio', 'Sentenças', 'Quodlibetais', 'Sumas'], 2, 'De quodlibet.'),
    mc('A faculdade básica da universidade medieval era a de:', ['Teologia', 'Direito', 'Artes', 'Medicina'], 2, 'Base para as superiores.'),
    mc('A frase sobre "anjos na ponta de uma agulha":', ['É de Tomás', 'Não aparece em textos escolásticos conhecidos', 'É de Abelardo', 'É de Lombardo'], 1, 'Sátira moderna.'),
    disc('O método escolástico pode ser útil para debates atuais? Aplique-o a uma questão contemporânea.', ['Quaestio completa', 'Objeções fortes', 'Resposta argumentada', 'Solução das objeções'])],
  resumo: ['Escolástica: filosofia das escolas.', 'Abelardo: Sic et Non.', 'Lombardo: Sentenças.', 'Lectio, quaestio, disputatio.', 'Faculdades: Artes, Teologia, Direito, Medicina.'],
  referencias: [{ texto: 'Pedro Abelardo, Sic et Non, prólogo.' }, { texto: 'Pedro Lombardo, Sentenças, livro I.' }, { texto: 'Jacques Le Goff, Os Intelectuais na Idade Média (1957).' }],
  revisao: [['Sic et Non', 'Abelardo (c. 1120): autoridades em aparente contradição.'], ['Sentenças', 'Pedro Lombardo (c. 1150).'], ['Disputatio', 'Debate público com objeções e respostas.']],
  avancado: {
    texto: `<h3>A crise do século XIII</h3>
<p>A entrada de todo Aristóteles e dos comentários árabes provocou proibições (Paris, 1210 e 1215, sobre a filosofia natural de Aristóteles) e, mais tarde, as condenações de 1277 ${tag('fato')}. A questão era: até onde a filosofia pode ir de modo autônomo?</p>
<h3>"Averroísmo latino"</h3>
<p>Mestres de artes como Siger de Brabante foram acusados de defender teses contrárias à fé (unidade do intelecto, eternidade do mundo) e de admitir uma "dupla verdade" ${tag('fato')}. Historiadores discutem se alguém defendeu de fato a "dupla verdade" ou se foi acusação dos adversários ${tag('debate')}. Tomás escreveu Sobre a unidade do intelecto contra os averroístas (1270).</p>
<h3>Quodlibetais como fonte</h3>
<p>As questões quodlibetais mostram os interesses do público universitário e são fonte preciosa para a história intelectual ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Tomás de Aquino, Sobre a unidade do intelecto contra os averroístas (1270).' }, { texto: 'Jacques Le Goff, Os Intelectuais na Idade Média.' }],
    exercicios: [
      mc('Siger de Brabante foi associado ao:', ['Agostinismo', 'Averroísmo latino', 'Nominalismo', 'Tomismo'], 1, 'Mestre de artes em Paris.'),
      mc('Tomás escreveu contra os averroístas:', ['Sobre a unidade do intelecto', 'Suma Teológica', 'O Ente e a Essência', 'Sobre a verdade'], 0, '1270.'),
      mc('A tese da "dupla verdade" é:', ['Dogma', 'Acusação discutida pelos historiadores', 'Tese de Tomás', 'Tese de Agostinho'], 1, 'Debate historiográfico.'),
      disc('A filosofia pode chegar a conclusões contrárias à fé? Compare a posição de Tomás com a atribuída aos averroístas.', ['Expõe as duas posições', 'Usa o princípio "verdade não contradiz verdade"', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-6', titulo: 'A querela dos universais',
  aprendera: ['As três perguntas de Porfírio', 'Realismo, conceitualismo e nominalismo', 'O realismo moderado de Tomás', 'A navalha de Ockham'],
  prereq: ['Módulo 4, aula 2: Conceitos, termos e definições'],
  explicacao: `
<h3>O problema</h3>
<p>"Homem" vale para Sócrates, Platão e todos os homens. O que corresponde a essa palavra? Existe "o homem" fora da mente? Na Isagoge, Porfírio formulou três perguntas e se recusou a respondê-las: os gêneros e espécies existem na realidade ou só no pensamento? Se existem, são corpóreos ou incorpóreos? Estão separados dos sensíveis ou neles? ${tag('fato')} Boécio transmitiu essas perguntas à Idade Média.</p>
<h3>As posições</h3>
<ul>
<li><strong>Realismo extremo</strong>: os universais existem como realidades em si (leitura medieval de Platão; Guilherme de Champeaux, no início do século XII).</li>
<li><strong>Nominalismo</strong>: só existem indivíduos; universais são nomes (<em>voces</em>, Roscelino) ou conceitos sem correspondente real comum (Ockham).</li>
<li><strong>Conceitualismo</strong>: universais existem como conceitos na mente, formados por semelhanças entre indivíduos (Abelardo, segundo muitos intérpretes) ${tag('debate')}.</li>
<li><strong>Realismo moderado</strong> (Aristóteles, Tomás): a natureza comum existe nas coisas individualmente; na mente, como universal; o fundamento da universalidade está nas coisas ${tag('interpretacao')}.</li>
</ul>
<h3>Tomás: a natureza considerada de três modos</h3>
<p>Seguindo Avicena, Tomás distingue a natureza (humanidade) considerada em si mesma, nos indivíduos (a humanidade de Sócrates) e no intelecto (o conceito universal "homem") (O Ente e a Essência, cap. 3) ${tag('argumento')}. A universalidade é obra do intelecto, mas tem fundamento real.</p>
<h3>A navalha de Ockham</h3>
<p>Guilherme de Ockham (c. 1287–1347) aplicou o princípio de não multiplicar entidades sem necessidade — formulado de vários modos em seus textos; a frase "entia non sunt multiplicanda praeter necessitatem" é posterior ${tag('fato')}. Para ele, a semelhança entre indivíduos basta, sem naturezas comuns ${tag('argumento')}.</p>`,
  vocabulario: [['Universal', 'O que se diz de muitos (homem, branco).'], ['Realismo moderado', 'Natureza comum nas coisas, universal na mente.'], ['Nominalismo', 'Só existem indivíduos; universais são nomes ou conceitos.'], ['Navalha de Ockham', 'Não multiplicar entidades sem necessidade.'], ['Natureza comum', 'O que é comum aos indivíduos de uma espécie.']],
  exemplos: '<p>Quando um cientista diz "o ouro tem número atômico 79", fala de cada amostra de ouro ou de uma natureza do ouro? A ciência parece supor naturezas comuns — argumento usado por realistas contemporâneos.</p>',
  contexto: `<p>A querela não é só lógica: tem consequências para a teologia (Trindade, pecado original, Eucaristia) e para a ciência ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'O argumento do fundamento real (realismo moderado, reconstruído)', tag: 'argumento',
    premissas: ['Aplicamos "homem" a Sócrates e a Platão com verdade, e não a uma pedra.', 'Isso não é arbitrário: há algo em Sócrates e Platão que justifica a aplicação.', 'Esse algo não é um universal existente fora da mente, mas a natureza que cada um tem individualmente.'],
    conclusao: 'Logo, o universal tem fundamento real nas coisas, embora a universalidade seja obra da mente.',
    nota: 'Nominalistas respondem que basta a semelhança entre indivíduos; realistas perguntam o que fundamenta a semelhança.' },
  objecoes: [{ objecao: 'A semelhança basta: Sócrates e Platão se parecem, e isso é tudo.', tag: 'debate', resposta: 'Realistas replicam (com Russell, Problemas da Filosofia, 1912) que a própria semelhança é um universal; tentar evitá-la produz regresso. O debate continua na metafísica contemporânea (D. M. Armstrong, nominalismo de tropos).' }],
  aplicacao: '<p>Escolha três termos (justiça, triângulo, cão) e diga como um realista moderado, um conceitualista e um nominalista explicariam cada um.</p>',
  fonte: { obra: 'Porfírio, Isagoge, início; Tomás, O Ente e a Essência, cap. 3', link: null, orientacao: '<p>Leia as três perguntas de Porfírio e o capítulo 3 de O Ente e a Essência. Explique a "natureza considerada de três modos".</p>' },
  perguntas: [
    { p: 'Quais as três perguntas de Porfírio?', r: 'Se os universais existem na realidade ou só no pensamento; se são corpóreos ou incorpóreos; se estão separados ou nos sensíveis.' },
    { p: 'O que é o realismo moderado?', r: 'A natureza comum existe nas coisas individualmente e como universal na mente.' },
    { p: 'O que diz a navalha de Ockham?', r: 'Não se devem multiplicar entidades sem necessidade.' },
  ],
  exercicios: [
    mc('Para Roscelino, os universais são:', ['Formas separadas', 'Nomes (voces)', 'Naturezas nas coisas', 'Ideias divinas'], 1, 'Nominalismo extremo.'),
    mc('A "natureza considerada de três modos" vem de:', ['Avicena', 'Averróis', 'Ockham', 'Abelardo'], 0, 'Retomada por Tomás.'),
    mc('O argumento de que a semelhança é um universal é de:', ['Russell', 'Ockham', 'Roscelino', 'Hume'], 0, 'Problemas da Filosofia (1912).'),
    mc('A frase "entia non sunt multiplicanda..." é:', ['Literalmente de Ockham', 'Formulação posterior do princípio', 'De Tomás', 'De Aristóteles'], 1, 'O princípio é de Ockham; a frase é posterior.'),
    disc('Realismo moderado ou nominalismo: qual explica melhor a prática científica? Argumente.', ['Expõe as duas posições', 'Usa exemplo científico', 'Responde a objeção', 'Conclusão justificada'])],
  resumo: ['Três perguntas de Porfírio.', 'Realismo extremo, conceitualismo, nominalismo, realismo moderado.', 'Natureza considerada de três modos.', 'Navalha de Ockham.'],
  referencias: [{ texto: 'Porfírio, Isagoge.' }, { texto: 'Tomás de Aquino, O Ente e a Essência, cap. 3.' }, { texto: 'D. M. Armstrong, Universals: An Opinionated Introduction (1989).' }],
  revisao: [['Realismo moderado', 'Natureza nas coisas; universal na mente.'], ['Nominalismo', 'Roscelino, Ockham.'], ['Navalha de Ockham', 'Não multiplicar entidades sem necessidade.']],
  avancado: {
    texto: `<h3>Escoto e a "distinção formal"</h3>
<p>Duns Escoto defendeu uma natureza comum com unidade "menor que numérica" nas coisas e uma "distinção formal" entre a natureza e a "estaidade" (<em>haecceitas</em>), princípio de individuação ${tag('fato')}. Ockham criticou a distinção formal como multiplicação de entidades ${tag('debate')}.</p>
<h3>Universais hoje</h3>
<p>D. M. Armstrong defendeu um realismo de universais "imanentes" a serviço da ciência; nominalistas de tropos (Keith Campbell) defendem propriedades particulares; o debate continua ${tag('debate')}.</p>
<h3>Consequências modernas</h3>
<p>Alguns historiadores (como Michael Gillespie, The Theological Origins of Modernity, 2008) leram o nominalismo como origem de traços da modernidade (voluntarismo, individualismo); outros contestam a tese como simplificadora ${tag('debate')}. Você verá a relação na aba "Ideias".</p>`,
    leituras: [{ texto: 'Duns Escoto, Ordinatio II, d. 3, p. 1 (individuação).' }, { texto: 'Michael Gillespie, The Theological Origins of Modernity (2008).' }],
    exercicios: [
      mc('"Haecceitas" é termo de:', ['Tomás', 'Escoto', 'Ockham', 'Abelardo'], 1, 'Estaidade: princípio de individuação.'),
      mc('Nominalismo de tropos é associado a:', ['Campbell', 'Armstrong', 'Russell', 'Tomás'], 0, 'Keith Campbell.'),
      mc('A tese de que o nominalismo está nas origens da modernidade é de:', ['Gillespie', 'Le Goff', 'Gilson', 'Armstrong'], 0, 'The Theological Origins of Modernity (2008).'),
      disc('O nominalismo está na origem da modernidade? Avalie a tese de Gillespie usando a aba "Ideias".', ['Expõe a tese', 'Usa a genealogia', 'Considera objeções', 'Conclusão justificada'])],
  },
}),
];
