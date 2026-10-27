// Módulo 5 — aulas 7 a 13.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm5-7', titulo: 'Aristóteles: as quatro causas',
  aprendera: ['O que Aristóteles entende por natureza', 'As quatro causas: material, formal, eficiente e final', 'Acaso e fortuna', 'A finalidade na natureza e suas críticas'],
  prereq: ['Aula 2: Parmênides e Heráclito'],
  explicacao: `
<h3>Quem foi Aristóteles</h3>
<p>Aristóteles (384–322 a.C.), nascido em Estagira, estudou vinte anos na Academia de Platão, foi preceptor de Alexandre e fundou o Liceu em Atenas (335 a.C.) ${tag('fato')}. As obras que temos são em grande parte notas de curso, editadas por Andrônico de Rodes no século I a.C. ${tag('fato')}.</p>
<h3>Natureza</h3>
<p>Natural é o que tem em si mesmo o princípio de movimento e de repouso (Física II, 1, 192b) ${tag('fato')}: a planta cresce por si; a cama, não — se brotasse, brotaria madeira, não cama (exemplo de Antifonte citado por Aristóteles).</p>
<h3>As quatro causas (Física II, 3)</h3>
<p>Explicar algo é responder a "por quê?", e há quatro tipos de resposta ${tag('argumento')}:</p>
<ul>
<li><strong>Material</strong>: aquilo de que algo é feito (o bronze da estátua).</li>
<li><strong>Formal</strong>: a forma ou essência (a figura da estátua; a definição).</li>
<li><strong>Eficiente</strong>: o que produz a mudança (o escultor; o pai em relação ao filho).</li>
<li><strong>Final</strong>: aquilo em vista de que (a saúde é o fim da caminhada).</li>
</ul>
<p>Nos seres naturais, forma, fim e muitas vezes causa eficiente coincidem: o fim da bolota é tornar-se carvalho, e é a forma do carvalho que a dirige.</p>
<h3>Acaso e fortuna</h3>
<p>Acaso (<em>automaton</em>) e fortuna (<em>tychē</em>) são causas acidentais: alguém vai ao mercado comprar e, por acaso, encontra um devedor e recebe o dinheiro (Física II, 5) ${tag('fato')}. O acaso supõe processos com fins; não os substitui.</p>
<h3>A finalidade na natureza</h3>
<p>Contra Empédocles, para quem os seres vivos resultaram de combinações casuais em que só sobreviveram as viáveis, Aristóteles argumenta (Física II, 8) que o que acontece sempre ou na maioria das vezes não é por acaso; logo, a regularidade dos seres vivos indica finalidade ${tag('argumento')}. Note: Aristóteles não fala de um projetista; a finalidade é imanente à natureza.</p>`,
  vocabulario: [['Physis', 'Princípio interno de movimento e repouso.'], ['Causa material', 'Aquilo de que algo é feito.'], ['Causa formal', 'A forma ou essência.'], ['Causa eficiente', 'O agente da mudança.'], ['Causa final (telos)', 'Aquilo em vista de que.'], ['Teleologia', 'Explicação pela finalidade.']],
  exemplos: '<p>Por que o coração existe? Material: tecido muscular. Formal: órgão de quatro cavidades. Eficiente: processos embrionários. Final: bombear o sangue. A biologia moderna ainda fala de "função" — uma forma de causa final, embora explicada pela seleção natural.</p>',
  contexto: `<p>Andrônico de Rodes ordenou as obras de Aristóteles; os títulos e a divisão em livros são em parte editoriais ${tag('fato')}. Citamos pela paginação de Bekker (1831), como em "192b".</p>`,
  argumento: { titulo: 'A natureza age em vista de um fim (Física II, 8, reconstruído)', tag: 'argumento',
    premissas: ['O que ocorre por acaso não ocorre sempre nem na maioria das vezes.', 'Os processos naturais (a formação dos dentes, o crescimento das plantas) ocorrem sempre ou na maioria das vezes da mesma maneira.', 'O que não é por acaso é em vista de algo.'],
    conclusao: 'Logo, os processos naturais ocorrem em vista de um fim.',
    nota: 'A premissa 3 é a mais discutida: um darwinista dirá que a regularidade se explica pela seleção, sem fins. Defensores da teleologia respondem que a própria seleção pressupõe disposições orientadas (sobreviver, reproduzir).' },
  objecoes: [{ objecao: 'A ciência moderna eliminou as causas finais.', tag: 'debate', resposta: 'Bacon e Descartes excluíram as causas finais da física. Mas a biologia continua falando de funções, e filósofos como Thomas Nagel (Mente e Cosmos, 2012) e os neoaristotélicos reabriram o debate sobre a teleologia natural.' }],
  aplicacao: '<p>Escolha três objetos ou processos (um artefato, um ser vivo, um fenômeno físico) e dê as quatro causas de cada um. Em qual a causa final é mais discutível?</p>',
  fonte: { obra: 'Aristóteles, Física II', link: null, orientacao: '<p>Leia o livro II inteiro (cerca de 30 páginas). Faça uma tabela das quatro causas com os exemplos do próprio Aristóteles e reconstrua o argumento do capítulo 8.</p>' },
  perguntas: [
    { p: 'Como Aristóteles define natureza?', r: 'Princípio interno de movimento e repouso.' },
    { p: 'Quais são as quatro causas?', r: 'Material, formal, eficiente e final.' },
    { p: 'O acaso exclui a finalidade?', r: 'Não; é causa acidental que supõe processos com fins.' },
  ],
  exercicios: [
    mc('O escultor é a causa ___ da estátua:', ['Material', 'Formal', 'Eficiente', 'Final'], 2, 'O agente da mudança.'),
    mc('"Aquilo em vista de que" é a causa:', ['Material', 'Formal', 'Eficiente', 'Final'], 3, 'Telos.'),
    mc('Aristóteles argumenta contra o acaso a partir:', ['Da regularidade dos processos naturais', 'Da Bíblia', 'Dos átomos', 'Da matemática'], 0, 'Física II, 8.'),
    mc('A edição usada para citar Aristóteles por página e coluna é a de:', ['Diels', 'Bekker', 'Stephanus', 'Migne'], 1, 'Bekker (1831).'),
    disc('A biologia evolutiva refuta a causa final aristotélica? Apresente o argumento de Física II, 8, a objeção darwinista e uma resposta teleológica.', ['Reconstrói Aristóteles', 'Expõe a objeção', 'Expõe uma resposta', 'Conclusão justificada'])],
  resumo: ['Natureza: princípio interno.', 'Quatro causas.', 'Acaso e fortuna como causas acidentais.', 'Finalidade imanente.', 'Críticas modernas e retomadas.'],
  referencias: [{ texto: 'Aristóteles, Física II.' }, { texto: 'Thomas Nagel, Mente e Cosmos (2012).' }],
  revisao: [['Quatro causas', 'Material, formal, eficiente, final (Física II, 3).'], ['Natureza', 'Princípio interno de movimento (Física II, 1).'], ['Argumento da finalidade', 'O que ocorre sempre não é por acaso (Física II, 8).']],
  avancado: {
    texto: `<h3>Hilemorfismo na física</h3>
<p>A mudança, para Aristóteles, exige três princípios: matéria (sujeito), forma e privação (Física I, 7) ${tag('argumento')}. Isso responde a Parmênides: algo vem a ser não do puro não-ser, mas do que não é <em>tal</em> (privação), num sujeito que permanece. Nas mudanças substanciais (geração e corrupção), a tradição falará de "matéria-prima", pura potência — conceito muito discutido ${tag('debate')}.</p>
<h3>Teleologia e seleção</h3>
<p>Filósofos da biologia (Larry Wright, 1973; Ruth Millikan) propõem análises "etiológicas" de função: a função de X é aquilo que explica por que X foi selecionado. Neoaristotélicos (Edward Feser, David Oderberg) sustentam que mesmo processos inorgânicos têm direcionalidade (o fósforo "tende" a produzir chama) — o que chamam de "finalidade física" ${tag('debate')}.</p>
<h3>O motor e o movido</h3>
<p>Física VIII: tudo o que se move é movido por outro; não pode haver regresso ao infinito numa série essencial; logo, há um primeiro motor. É a base da primeira via de Tomás ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Física I, 7–9 e VIII.' }, { texto: 'Edward Feser, Aristotle\'s Revenge (2019).' }],
    exercicios: [
      mc('Os três princípios da mudança em Física I, 7 são:', ['Ato, potência, forma', 'Matéria, forma, privação', 'Fogo, ar, água', 'Ser, não-ser, devir'], 1, 'Resposta a Parmênides.'),
      mc('A análise "etiológica" de função relaciona função a:', ['Intenção divina', 'Explicação da seleção', 'Forma platônica', 'Acaso'], 1, 'Larry Wright, 1973.'),
      mc('Física VIII é base de qual via de Tomás?', ['Primeira', 'Terceira', 'Quarta', 'Quinta'], 0, 'O primeiro motor.'),
      disc('Matéria, forma e privação resolvem o problema de Parmênides? Reconstrua o argumento e avalie.', ['Expõe o problema eleata', 'Expõe os três princípios', 'Avalia a solução', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-8', titulo: 'Aristóteles: substância e a Metafísica',
  aprendera: ['As categorias e a noção de substância', 'Matéria e forma; ato e potência', 'O princípio de não contradição e sua defesa', 'O motor imóvel e a "teologia" de Aristóteles'],
  prereq: ['Aula 7: As quatro causas'],
  explicacao: `
<h3>"O ser se diz de muitos modos"</h3>
<p>Aristóteles começa a metafísica com uma observação: dizemos que algo "é" em sentidos diferentes — é homem, é branco, é alto, está em casa — mas todos se referem a um sentido primeiro, a <strong>substância</strong> (Metafísica IV, 2) ${tag('fato')}.</p>
<h3>As categorias</h3>
<p>Nas Categorias, há dez gêneros supremos do que se diz: substância, quantidade, qualidade, relação, lugar, tempo, posição, estado, ação e paixão ${tag('fato')}. A <strong>substância primeira</strong> é o indivíduo (este homem, este cavalo); a <strong>substância segunda</strong>, a espécie e o gênero (homem, animal). As outras categorias (os acidentes) existem na substância.</p>
<h3>Matéria e forma; ato e potência</h3>
<p>As coisas sensíveis são compostos de <strong>matéria</strong> (o que pode ser) e <strong>forma</strong> (o que as faz ser o que são) — o hilemorfismo. A <strong>potência</strong> é capacidade de ser ou agir; o <strong>ato</strong>, sua realização. O ato é anterior à potência em definição, em perfeição e, em sentido absoluto, em tempo: só um ser em ato faz passar outro da potência ao ato (Metafísica IX, 8) ${tag('argumento')}.</p>
<h3>O princípio de não contradição</h3>
<p>"É impossível que o mesmo atributo pertença e não pertença ao mesmo sujeito, ao mesmo tempo e sob o mesmo aspecto" (Metafísica IV, 3, 1005b19–20) ${tag('fato')}. É o mais firme dos princípios e não pode ser demonstrado, pois toda demonstração o supõe. Mas pode ser defendido por refutação: quem o nega, se disser algo com sentido determinado, já o usa (IV, 4) ${tag('argumento')}.</p>
<h3>O motor imóvel</h3>
<p>No livro XII, Aristóteles conclui que deve haver uma substância eterna e imóvel, ato puro sem potência, que move como objeto de desejo e de amor; sua vida é pensamento que pensa a si mesmo (<em>noēsis noēseōs</em>, XII, 9) ${tag('fato')}. Essa "teologia" filosófica será retomada e transformada por Tomás ${tag('interpretacao')}.</p>`,
  vocabulario: [['Ousia', 'Substância, essência.'], ['Categorias', 'Dez gêneros supremos do ser.'], ['Hilemorfismo', 'Composição de matéria (hyle) e forma (morphe).'], ['Ato (energeia)', 'Realização.'], ['Potência (dynamis)', 'Capacidade.'], ['Princípio de não contradição', 'Nada pode ser e não ser ao mesmo tempo sob o mesmo aspecto.']],
  exemplos: '<p>"Sócrates está sentado" e "Sócrates não está sentado" podem ser ambas verdadeiras em tempos diferentes; o princípio exige "ao mesmo tempo e sob o mesmo aspecto". Muitas "contradições" alegadas desaparecem quando se especificam tempo e aspecto.</p>',
  contexto: `<p>O nome "Metafísica" não é de Aristóteles; vem da posição desses livros "depois da Física" (<em>ta meta ta physika</em>) na edição antiga. Aristóteles fala de "filosofia primeira" e de "ciência do ser enquanto ser" ${tag('fato')}.</p>`,
  argumento: { titulo: 'Defesa refutativa do princípio de não contradição (Metafísica IV, 4, reconstruída)', tag: 'argumento',
    premissas: ['Quem nega o princípio, se diz algo, diz algo com sentido determinado (por exemplo, "homem").', 'Se "homem" significa algo determinado, então não significa ao mesmo tempo o seu contrário.', 'Logo, ao falar com sentido, o negador já respeita o princípio.'],
    conclusao: 'Portanto, o princípio não pode ser negado com sentido; quem nada diz "é como uma planta".',
    nota: 'Não é demonstração direta (impossível para um primeiro princípio), mas refutação de quem o nega.' },
  objecoes: [{ objecao: 'Lógicas paraconsistentes admitem contradições verdadeiras.', tag: 'debate', resposta: 'Graham Priest e outros defendem o dialeteísmo: algumas contradições (como o mentiroso) seriam verdadeiras. A maioria dos lógicos rejeita a tese; defensores do princípio replicam que o próprio dialeteísta distingue suas teses das contrárias.' }],
  aplicacao: '<p>Escolha um objeto da sua casa e descreva-o pelas dez categorias. Depois, identifique sua matéria, sua forma e uma potência que ele possui.</p>',
  fonte: { obra: 'Aristóteles, Categorias 1–5; Metafísica IV, 1–4; XII, 6–9', link: null, orientacao: '<p>Leia Metafísica IV, 1–4 com atenção ao capítulo 3. Reconstrua a defesa do princípio de não contradição. Depois leia XII, 7 e 9 e anote como o primeiro motor move.</p>' },
  perguntas: [
    { p: 'O que é substância primeira?', r: 'O indivíduo concreto (este homem).' },
    { p: 'Qual a formulação do princípio de não contradição?', r: 'É impossível que o mesmo pertença e não pertença ao mesmo, ao mesmo tempo e sob o mesmo aspecto.' },
    { p: 'Como o motor imóvel move?', r: 'Como objeto de desejo e de amor.' },
  ],
  exercicios: [
    mc('"Branco" pertence à categoria:', ['Substância', 'Qualidade', 'Quantidade', 'Relação'], 1, 'Acidente.'),
    mc('O princípio de não contradição pode ser:', ['Demonstrado diretamente', 'Defendido por refutação', 'Ignorado', 'Provado pela experiência'], 1, 'Metafísica IV, 4.'),
    mc('O ato é anterior à potência porque:', ['Vem depois no tempo', 'Só um ser em ato faz passar à atualidade', 'É mais fraco', 'É matéria'], 1, 'Metafísica IX, 8.'),
    mc('O nome "Metafísica" vem de:', ['Aristóteles', 'A posição dos livros depois da Física', 'Platão', 'Tomás'], 1, 'Ta meta ta physika.'),
    disc('Explique ato e potência com três exemplos e mostre como esse par responde ao problema da mudança de Parmênides.', ['Exemplos corretos', 'Explica ato e potência', 'Liga a Parmênides', 'Clareza'])],
  resumo: ['O ser se diz de muitos modos; primeiro, a substância.', 'Dez categorias.', 'Hilemorfismo; ato e potência.', 'Princípio de não contradição.', 'Motor imóvel: pensamento que se pensa.'],
  referencias: [{ texto: 'Aristóteles, Categorias.' }, { texto: 'Aristóteles, Metafísica IV, VII, IX e XII.' }],
  revisao: [['Metafísica IV, 3', 'Princípio de não contradição (1005b19–20).'], ['Categorias', 'Substância + nove acidentes.'], ['Motor imóvel', 'Ato puro; move como objeto de amor; pensamento do pensamento.']],
  avancado: {
    texto: `<h3>O que é a substância? Metafísica VII (Z)</h3>
<p>No livro VII, Aristóteles examina quatro candidatos a substância: a essência, o universal, o gênero e o substrato. Rejeita o universal e conclui que a substância é, em sentido primeiro, a forma (<em>eidos</em>) ou essência (<em>to ti ên einai</em>) ${tag('fato')}. Mas, se a forma é universal, como pode ser substância, se o universal não é substância? É um dos problemas mais debatidos da história da filosofia: formas individuais ou específicas? ${tag('debate')}</p>
<h3>A ciência do ser enquanto ser</h3>
<p>Metafísica IV fala de uma ciência do ser enquanto ser; XII, de uma ciência da substância divina. Como se relacionam ontologia geral e teologia? Werner Jaeger propôs uma evolução de Aristóteles; Joseph Owens e outros, uma unidade "pros hen" (por referência ao primeiro) ${tag('debate')}.</p>
<h3>Leitura tomista</h3>
<p>Tomás comentou a Metafísica linha a linha (c. 1270–1272). Sua leitura introduz a distinção entre essência e ato de ser (esse), ausente em Aristóteles, e transforma o motor imóvel em Criador ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Aristóteles, Metafísica VII (Z), 1–6, 13–17.' }, { texto: 'Joseph Owens, The Doctrine of Being in the Aristotelian Metaphysics (1951).' }],
    exercicios: [
      mc('Em Metafísica VII, a substância em sentido primeiro é:', ['O universal', 'A forma ou essência', 'A matéria', 'O gênero'], 1, 'Conclusão de Z.'),
      mc('A distinção entre essência e ato de ser (esse) é contribuição de:', ['Aristóteles', 'Tomás', 'Platão', 'Plotino'], 1, 'Leitura tomista.'),
      mc('A tese de uma evolução do pensamento de Aristóteles é de:', ['Jaeger', 'Owens', 'Bekker', 'Ross'], 0, 'Aristoteles (1923).'),
      disc('A forma, em Aristóteles, é individual ou universal? Exponha o problema e uma solução.', ['Expõe o problema', 'Usa Metafísica VII', 'Apresenta uma solução', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-9', titulo: 'Ética a Nicômaco: felicidade e virtude',
  aprendera: ['O fim último e a felicidade (eudaimonia)', 'O argumento da função', 'A virtude como disposição e o justo meio', 'Prudência, akrasia, amizade e contemplação'],
  prereq: ['Aula 8: Substância e Metafísica'],
  explicacao: `
<h3>O bem supremo</h3>
<p>Toda ação visa um bem; se há um fim que queremos por si mesmo e pelo qual queremos os outros, esse é o bem supremo (I, 1–2). Todos o chamam <strong>eudaimonia</strong> — felicidade, florescimento —, mas discordam sobre o que ela é: prazer, honra, riqueza, contemplação (I, 4–5) ${tag('fato')}.</p>
<h3>O argumento da função</h3>
<p>Como o bem do flautista está em tocar bem, o bem do homem está em realizar bem sua função própria (<em>ergon</em>). A função própria do homem é a atividade da alma segundo a razão. Logo, o bem humano é a atividade da alma segundo a virtude, numa vida completa (I, 7, 1097b22–1098a20) ${tag('argumento')}.</p>
<h3>Virtude moral</h3>
<p>A virtude moral não é natural nem contrária à natureza: adquire-se pelo hábito, como a arte de tocar cítara se adquire tocando (II, 1). É uma <strong>disposição</strong> (hexis) de escolher, que consiste num <strong>meio-termo</strong> relativo a nós, determinado pela razão, como o determinaria o prudente (II, 6) ${tag('fato')}. Coragem é meio entre covardia e temeridade; generosidade, entre avareza e esbanjamento. O meio não é aritmético, e há ações que não admitem meio (adultério, roubo, homicídio).</p>
<h3>Virtudes intelectuais e prudência</h3>
<p>Ciência, arte, prudência, intelecto e sabedoria (VI). A <strong>prudência</strong> (<em>phronēsis</em>) é a virtude de deliberar bem sobre o que é bom para a vida; sem ela não há virtude moral, e sem virtude moral não há prudência (VI, 13) ${tag('argumento')}.</p>
<h3>Akrasia, amizade, contemplação</h3>
<ul>
<li><strong>Akrasia</strong> (VII): agir contra o que se sabe ser melhor, por paixão — resposta a Sócrates (aula 5 do Módulo 3).</li>
<li><strong>Amizade</strong> (VIII–IX): por utilidade, por prazer e por virtude; só a última é perfeita e duradoura. O amigo é "outro eu".</li>
<li><strong>Contemplação</strong> (X, 7–8): a felicidade mais alta é a atividade do intelecto, a mais divina em nós.</li>
</ul>`,
  vocabulario: [['Eudaimonia', 'Felicidade, florescimento humano.'], ['Ergon', 'Função própria.'], ['Hexis', 'Disposição estável.'], ['Justo meio', 'Medida relativa a nós, determinada pela razão.'], ['Phronēsis', 'Prudência, sabedoria prática.'], ['Akrasia', 'Fraqueza da vontade.']],
  exemplos: '<p>Coragem num soldado e coragem num doente terminal são diferentes em matéria, mas a mesma virtude: enfrentar o temível como se deve, quando se deve, pelo motivo devido.</p>',
  contexto: `<p>A obra é chamada "a Nicômaco" talvez por ter sido editada pelo filho de Aristóteles, Nicômaco; há também uma Ética a Eudemo, com livros comuns às duas ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento da função (I, 7, reconstruído)', tag: 'argumento',
    premissas: ['O bem de algo que tem função está em realizar bem sua função.', 'O homem tem uma função própria.', 'A função própria do homem é a atividade da alma segundo a razão.', 'Realizar bem uma atividade é realizá-la segundo a virtude.'],
    conclusao: 'Logo, o bem humano é a atividade da alma segundo a virtude.',
    nota: 'A premissa 2 é a mais atacada (o homem tem função, como o olho?). Defensores respondem que "função" significa a atividade característica de um tipo de ser.' },
  objecoes: [{ objecao: 'O argumento da função comete a "falácia naturalista": passa do que é (natureza humana) ao que deve ser.', tag: 'debate', resposta: 'Neoaristotélicos (Philippa Foot, Bondade Natural, 2001) respondem que, para seres vivos, "bom" é avaliativo e descritivo ao mesmo tempo: um lobo que não caça com a matilha é um lobo defeituoso. A distinção fato-valor seria mais frágil do que parece.' }],
  aplicacao: '<p>Escolha três virtudes e descreva, para cada uma, o excesso e a falta. Depois avalie qual delas você mais precisa desenvolver e que hábito concreto a formaria.</p>',
  fonte: { obra: 'Aristóteles, Ética a Nicômaco, livros I, II e X', link: null, orientacao: '<p>Leia o livro I inteiro e o livro II até o capítulo 9. Reconstrua o argumento da função e a definição de virtude (II, 6, 1106b36–1107a2).</p>' },
  perguntas: [
    { p: 'O que é eudaimonia?', r: 'Felicidade, florescimento: atividade da alma segundo a virtude numa vida completa.' },
    { p: 'Como se adquire a virtude moral?', r: 'Pelo hábito.' },
    { p: 'Quais os tipos de amizade?', r: 'Por utilidade, por prazer e por virtude.' },
  ],
  exercicios: [
    mc('A coragem é meio entre:', ['Medo e alegria', 'Covardia e temeridade', 'Prudência e justiça', 'Avareza e esbanjamento'], 1, 'II, 7.'),
    mc('A prudência (phronēsis) é virtude:', ['Moral', 'Intelectual prática', 'Teologal', 'Física'], 1, 'Livro VI.'),
    mc('O argumento da função está no livro:', ['I', 'II', 'VII', 'X'], 0, 'I, 7.'),
    mc('Segundo Aristóteles, a forma mais alta de felicidade é:', ['Honra', 'Prazer', 'Contemplação', 'Riqueza'], 2, 'X, 7–8.'),
    disc('Avalie o argumento da função diante da objeção da falácia naturalista. A resposta de Foot é convincente?', ['Reconstrói o argumento', 'Expõe a objeção', 'Expõe Foot', 'Avaliação justificada'])],
  resumo: ['Eudaimonia como fim último.', 'Argumento da função.', 'Virtude: hábito, disposição, justo meio.', 'Prudência.', 'Akrasia, amizade, contemplação.'],
  referencias: [{ texto: 'Aristóteles, Ética a Nicômaco.' }, { texto: 'Philippa Foot, Bondade Natural (2001).' }],
  revisao: [['Virtude (EN II, 6)', 'Disposição de escolher o meio relativo a nós, determinado pela razão do prudente.'], ['Argumento da função', 'EN I, 7.'], ['Amizade perfeita', 'Por virtude (EN VIII).']],
  avancado: {
    texto: `<h3>Inclusivismo ou dominantismo?</h3>
<p>A felicidade é a contemplação sozinha (leitura "dominante", sugerida por X, 7) ou um conjunto de bens e atividades virtuosas (leitura "inclusiva", sugerida por I, 7)? J. L. Ackrill ("Aristotle on Eudaimonia", 1974) e Richard Kraut (Aristotle on the Human Good, 1989) representam posições opostas ${tag('debate')}.</p>
<h3>Tomás e Aristóteles</h3>
<p>Tomás distingue uma felicidade imperfeita, alcançável nesta vida (a de Aristóteles), e a perfeita, a visão de Deus (Suma I-II, q. 3–5) ${tag('argumento')}. Acrescenta as virtudes teologais e as virtudes morais infusas, ausentes em Aristóteles.</p>
<h3>O retorno da ética das virtudes</h3>
<p>Elizabeth Anscombe (1958) pediu que se abandonassem as noções de "dever moral" sem um legislador e se voltasse à psicologia moral aristotélica; MacIntyre, Foot e Rosalind Hursthouse (On Virtue Ethics, 1999) desenvolveram esse programa ${tag('fato')}. Você o estudará nos Módulos 10 e 13.</p>`,
    leituras: [{ texto: 'J. L. Ackrill, "Aristotle on Eudaimonia" (1974).' }, { texto: 'Tomás de Aquino, Suma I-II, q. 3–5.' }],
    exercicios: [
      mc('A leitura "dominante" da eudaimonia privilegia:', ['O prazer', 'A contemplação', 'A amizade', 'A honra'], 1, 'Baseada em X, 7.'),
      mc('Tomás distingue felicidade imperfeita e perfeita. A perfeita é:', ['A contemplação filosófica', 'A visão de Deus', 'A amizade', 'A virtude política'], 1, 'Suma I-II, q. 3.'),
      mc('"On Virtue Ethics" (1999) é de:', ['Hursthouse', 'Anscombe', 'Foot', 'MacIntyre'], 0, 'Rosalind Hursthouse.'),
      disc('A felicidade, em Aristóteles, é dominante ou inclusiva? Use I, 7 e X, 7–8.', ['Expõe as duas leituras', 'Usa os textos', 'Argumenta', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-10', titulo: 'Epicurismo',
  aprendera: ['A ética de Epicuro: prazer como ausência de dor e perturbação', 'O "quádruplo remédio"', 'A classificação dos desejos', 'O argumento sobre a morte e suas críticas'],
  explicacao: `
<h3>O Jardim</h3>
<p>Epicuro (341–270 a.C.) fundou em Atenas, por volta de 306 a.C., uma comunidade chamada "o Jardim", que admitia mulheres e escravos ${tag('fato')}. Das suas muitas obras restam três cartas (a Heródoto, a Pítocles e a Meneceu), as Máximas Principais e fragmentos, conservados sobretudo por Diógenes Laércio (Vidas X).</p>
<h3>O prazer</h3>
<p>Para Epicuro, o prazer é o princípio e o fim da vida feliz (Carta a Meneceu 128). Mas não se trata de luxo ou excesso: o prazer supremo é a ausência de dor no corpo (<em>aponia</em>) e de perturbação na alma (<em>ataraxia</em>) (131) ${tag('fato')}. Pão e água bastam para o prazer máximo quando se tem fome.</p>
<h3>Os desejos</h3>
<p>Há desejos naturais e necessários (comer, beber, abrigo), naturais e não necessários (comidas refinadas, sexo) e vãos (riqueza, fama sem limite) (127) ${tag('fato')}. A sabedoria (<em>phronēsis</em>) calcula prazeres e dores: às vezes é melhor aceitar uma dor que trará prazer maior.</p>
<h3>O quádruplo remédio</h3>
<p>A tradição resumiu o ensino em quatro frases (o <em>tetrapharmakos</em>, conservado por Filodemo) ${tag('fato')}: os deuses não devem ser temidos; a morte não deve preocupar; o bem é fácil de obter; o mal é fácil de suportar.</p>
<h3>Física e liberdade</h3>
<p>Epicuro adota o atomismo de Demócrito, mas acrescenta o <strong>desvio</strong> (<em>clinamen</em>, termo de Lucrécio) dos átomos, que rompe o determinismo e abre espaço para a liberdade ${tag('interpretacao')}. Os deuses existem, mas vivem em perfeita tranquilidade, sem se ocupar do mundo. O poeta romano Lucrécio expôs a doutrina em Sobre a natureza das coisas (século I a.C.).</p>`,
  vocabulario: [['Ataraxia', 'Ausência de perturbação da alma.'], ['Aponia', 'Ausência de dor no corpo.'], ['Tetrapharmakos', 'Quádruplo remédio epicurista.'], ['Clinamen', 'Desvio dos átomos.'], ['Hedonismo', 'Tese de que o prazer é o bem.']],
  exemplos: '<p>A frase popular "epicurista" (amante de luxo) é o contrário do que Epicuro ensinava: ele elogiava a vida simples e dizia que pão e água dão prazer máximo a quem tem fome.</p>',
  contexto: `<p>O epicurismo durou cerca de seis séculos; em Herculano, uma biblioteca de papiros (a "Vila dos Papiros", soterrada em 79 d.C.) conserva obras de Filodemo ${tag('fato')}.</p>`,
  argumento: { titulo: 'A morte não é nada para nós (Carta a Meneceu 124–125, reconstruído)', tag: 'argumento',
    premissas: ['Todo bem e todo mal residem na sensação.', 'A morte é a privação da sensação.', 'Quando nós existimos, a morte não está presente; quando a morte está presente, nós não existimos.'],
    conclusao: 'Logo, a morte não é nada para nós e não deve ser temida.',
    nota: 'Lucrécio acrescenta o argumento da simetria: não lamentamos o tempo antes de nascer; por que lamentar o tempo depois da morte?' },
  objecoes: [{ objecao: 'A morte é um mal porque priva de bens que teríamos (Thomas Nagel, "Death", 1970).', tag: 'debate', resposta: 'Nagel argumenta que um mal não precisa ser sentido para ser mal: uma traição desconhecida também prejudica. Epicuristas respondem que, sem sujeito, não há prejuízo. A tradição cristã responde de outro modo: a morte não é o fim do sujeito.' }],
  aplicacao: '<p>Classifique no Caderno dez desejos seus segundo a divisão de Epicuro. Que mudança prática a classificação sugere?</p>',
  fonte: { obra: 'Epicuro, Carta a Meneceu', link: null, orientacao: '<p>Leia a carta inteira (5 páginas). Reconstrua o argumento sobre a morte e a classificação dos desejos. Anote os parágrafos.</p>' },
  perguntas: [
    { p: 'O que é ataraxia?', r: 'Ausência de perturbação da alma.' },
    { p: 'Quais os três tipos de desejo?', r: 'Naturais e necessários, naturais e não necessários, vãos.' },
    { p: 'Qual o argumento de Epicuro sobre a morte?', r: 'Quando existimos, a morte não está; quando ela está, não existimos.' },
  ],
  exercicios: [
    mc('Para Epicuro, o prazer supremo é:', ['O luxo', 'A ausência de dor e de perturbação', 'A honra', 'A contemplação'], 1, 'Carta a Meneceu 131.'),
    mc('A comunidade fundada por Epicuro chamava-se:', ['Liceu', 'Academia', 'Jardim', 'Pórtico'], 2, 'C. 306 a.C.'),
    mc('O "desvio" dos átomos serve para:', ['Explicar a luz', 'Romper o determinismo', 'Provar os deuses', 'Explicar a alma imortal'], 1, 'Clinamen.'),
    mc('A objeção de que a morte é mal por privar de bens é de:', ['Lucrécio', 'Nagel', 'Sêneca', 'Cícero'], 1, '"Death" (1970).'),
    disc('Avalie o argumento de Epicuro sobre a morte com a objeção de Nagel. Qual é mais convincente para você? E como um cristão responderia?', ['Reconstrói Epicuro', 'Expõe Nagel', 'Avalia', 'Considera a resposta cristã'])],
  resumo: ['O Jardim.', 'Prazer: aponia e ataraxia.', 'Três tipos de desejo.', 'Tetrapharmakos.', 'Atomismo e clinamen; Lucrécio.'],
  referencias: [{ texto: 'Epicuro, Carta a Meneceu; Máximas Principais.' }, { texto: 'Lucrécio, Sobre a Natureza das Coisas.' }, { texto: 'Thomas Nagel, "Death" (1970).' }],
  revisao: [['Ataraxia', 'Ausência de perturbação.'], ['Tetrapharmakos', 'Deuses, morte, bem fácil, mal suportável.'], ['Argumento da morte', 'Carta a Meneceu 124–125.']],
  avancado: {
    texto: `<h3>O argumento da simetria</h3>
<p>Lucrécio (III, 830–977): o tempo antes do nascimento foi nada para nós; o tempo depois da morte é como um espelho dele; logo, não deve ser temido ${tag('argumento')}. Críticos (Frederik Kaufman, Nagel) observam assimetrias: poderíamos ter morrido mais tarde, mas não ter nascido muito antes sendo a mesma pessoa ${tag('debate')}.</p>
<h3>Epicurismo e a modernidade</h3>
<p>A redescoberta do poema de Lucrécio em 1417 por Poggio Bracciolini influenciou o Renascimento e o atomismo moderno (Gassendi) ${tag('fato')}. Stephen Greenblatt (A virada, 2011) defendeu uma tese forte sobre essa influência, criticada por historiadores como exagerada ${tag('debate')}.</p>
<h3>O "Jardim das Aflições"</h3>
<p>Olavo de Carvalho (O Jardim das Aflições, 1995) toma Epicuro como ponto de partida de uma leitura da história das ideias modernas — interpretação de autor que você examinará no Módulo 12 ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Lucrécio, Sobre a Natureza das Coisas, livro III.' }, { texto: 'Stephen Greenblatt, A Virada (2011).' }],
    exercicios: [
      mc('O argumento da simetria é de:', ['Epicuro', 'Lucrécio', 'Sêneca', 'Nagel'], 1, 'Livro III.'),
      mc('O poema de Lucrécio foi redescoberto em 1417 por:', ['Petrarca', 'Poggio Bracciolini', 'Erasmo', 'Ficino'], 1, 'Mosteiro alemão.'),
      mc('Greenblatt foi criticado por:', ['Ignorar Lucrécio', 'Exagerar a influência do poema na modernidade', 'Negar o atomismo', 'Ser epicurista'], 1, 'A Virada (2011).'),
      disc('O argumento da simetria é bem-sucedido? Responda com a objeção da assimetria.', ['Reconstrói o argumento', 'Expõe a objeção', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-11', titulo: 'Estoicismo',
  aprendera: ['As três partes da filosofia estoica', 'Logos, providência e destino', 'A virtude como único bem e os "indiferentes"', 'A dicotomia do controle e a influência estoica no cristianismo'],
  explicacao: `
<h3>O Pórtico</h3>
<p>Zenão de Cítio (c. 334–262 a.C.) ensinava no Pórtico Pintado (<em>Stoa Poikilē</em>) de Atenas — daí "estoicos". Crisipo (c. 279–206 a.C.) sistematizou a doutrina; em Roma, destacaram-se Sêneca, Musônio Rufo, Epicteto e Marco Aurélio ${tag('fato')}.</p>
<h3>Lógica, física, ética</h3>
<p>Os estoicos comparavam a filosofia a um ovo (casca: lógica; clara: ética; gema: física) ou a um pomar (muro: lógica; árvores: física; frutos: ética) ${tag('fato')}. Desenvolveram uma lógica proposicional (aula 6 do Módulo 4) e uma teoria do conhecimento baseada na "impressão cataléptica" (que se impõe com evidência).</p>
<h3>Física: Logos e providência</h3>
<p>O cosmos é um ser vivo racional, permeado pelo Logos, fogo artífice e razão divina. Tudo acontece segundo o destino, que é a providência ${tag('interpretacao')}. Como conciliar destino e responsabilidade? Crisipo usou a imagem do cilindro: empurrado, ele rola por sua própria forma; o empurrão é a causa externa, a forma é a causa principal ${tag('fato')}.</p>
<h3>Ética</h3>
<ul>
<li><strong>Viver segundo a natureza</strong>, isto é, segundo a razão.</li>
<li>A <strong>virtude</strong> é o único bem; o vício, o único mal. Saúde, riqueza, reputação são <strong>indiferentes</strong> — alguns "preferíveis", outros "não preferíveis".</li>
<li>As <strong>paixões</strong> (medo, desejo, prazer, aflição) são juízos falsos sobre o bem e o mal; o sábio as extirpa (<em>apatheia</em>), mas tem "boas emoções" (alegria racional, vontade, cautela).</li>
</ul>
<h3>A dicotomia do controle</h3>
<p>O Manual de Epicteto começa: algumas coisas dependem de nós (juízo, impulso, desejo, aversão), outras não (corpo, posses, reputação, cargos) (Manual 1) ${tag('fato')}. A liberdade está em concentrar-se no que depende de nós.</p>
<h3>Cosmopolitismo e lei natural</h3>
<p>Todos os seres racionais participam do Logos; por isso o sábio é "cidadão do mundo". Cícero (Sobre a república III, 33, conservado por Lactâncio) descreve uma lei verdadeira, a reta razão conforme à natureza, a mesma em Roma e em Atenas ${tag('fato')} — fonte da tradição da lei natural.</p>`,
  vocabulario: [['Stoa', 'Pórtico: lugar das aulas de Zenão.'], ['Logos', 'Razão divina que governa o cosmos.'], ['Indiferentes', 'Coisas que não são bem nem mal (saúde, riqueza).'], ['Apatheia', 'Libertação das paixões.'], ['Dicotomia do controle', 'O que depende e o que não depende de nós.']],
  exemplos: `<p>Um atraso no trânsito: não depende de você; seu juízo sobre ele e sua reação dependem. A psicoterapia cognitiva (Albert Ellis, Aaron Beck) reconheceu inspiração estoica nessa ideia ${tag('fato')}.</p>`,
  contexto: `<p>Sêneca foi conselheiro de Nero; Epicteto, ex-escravo; Marco Aurélio, imperador — o estoicismo atravessou todas as classes sociais romanas ${tag('fato')}.</p>`,
  argumento: { titulo: 'A virtude é o único bem (argumento estoico, reconstruído)', tag: 'argumento',
    premissas: ['O bem é aquilo que sempre beneficia e nunca pode ser mal usado.', 'Saúde, riqueza e fama podem ser mal usadas.', 'Só a virtude (sabedoria) não pode ser mal usada.'],
    conclusao: 'Logo, só a virtude é bem.',
    nota: 'Argumento semelhante aparece no Eutidemo de Platão (280b–281e). Aristóteles objetaria que a felicidade inclui bens externos.' },
  objecoes: [{ objecao: 'Dizer que a dor de um filho doente é "indiferente" é desumano.', tag: 'debate', resposta: 'Os estoicos distinguem: não é indiferente a ação de cuidar (dever), mas o resultado fora do controle. Críticos antigos (Cícero, Plutarco) e modernos (Martha Nussbaum) discutem se a apatheia é ideal humano. A tradição cristã valoriza a compaixão (Jesus chorou por Lázaro, Jo 11,35).' }],
  aplicacao: '<p>Durante uma semana, anote três situações por dia, separando o que dependia e o que não dependia de você. Ao fim, avalie o exercício.</p>',
  fonte: { obra: 'Epicteto, Manual; Marco Aurélio, Meditações II e IV', link: null, orientacao: '<p>Leia o Manual inteiro (cerca de 30 páginas). Selecione cinco capítulos e reconstrua o argumento de cada um. Leia também Meditações II, 1.</p>' },
  perguntas: [
    { p: 'De onde vem o nome "estoico"?', r: 'Do Pórtico (Stoa) onde Zenão ensinava.' },
    { p: 'O que são os indiferentes?', r: 'Coisas que não são bem nem mal, como saúde e riqueza.' },
    { p: 'Como começa o Manual de Epicteto?', r: 'Com a distinção entre o que depende e o que não depende de nós.' },
  ],
  exercicios: [
    mc('Para os estoicos, as paixões são:', ['Naturais e boas', 'Juízos falsos sobre o bem e o mal', 'Partes do corpo', 'Dons divinos'], 1, 'Teoria cognitiva das paixões.'),
    mc('A imagem do cilindro é de:', ['Zenão', 'Crisipo', 'Sêneca', 'Epicteto'], 1, 'Destino e responsabilidade.'),
    mc('Saúde, para os estoicos, é:', ['O bem supremo', 'Indiferente preferível', 'Mal', 'Virtude'], 1, 'Não é bem moral.'),
    mc('A definição de lei natural como reta razão conforme à natureza está em:', ['Epicteto', 'Cícero', 'Epicuro', 'Pirro'], 1, 'Sobre a república III.'),
    disc('A dicotomia do controle é sabedoria ou resignação? Avalie com um exemplo e compare com a ética cristã.', ['Explica a dicotomia', 'Exemplo pertinente', 'Avalia', 'Comparação com a ética cristã'])],
  resumo: ['Pórtico; Zenão, Crisipo, romanos.', 'Lógica, física, ética.', 'Logos, providência, cilindro.', 'Virtude único bem; indiferentes; apatheia.', 'Dicotomia do controle; cosmopolitismo; lei natural.'],
  referencias: [{ texto: 'Epicteto, Manual.' }, { texto: 'Marco Aurélio, Meditações.' }, { texto: 'Cícero, Sobre a República III e Sobre os deveres.' }],
  revisao: [['Dicotomia do controle', 'Manual 1: o que depende e o que não depende de nós.'], ['Indiferentes', 'Saúde, riqueza: nem bem nem mal.'], ['Lei natural estoica', 'Reta razão conforme à natureza (Cícero).']],
  avancado: {
    texto: `<h3>Estoicismo e cristianismo</h3>
<p>Ambrósio escreveu Sobre os deveres dos ministros (c. 390), modelado em Sobre os deveres de Cícero, cristianizando a ética estoica ${tag('fato')}. Circulou uma correspondência apócrifa entre Sêneca e Paulo, considerada inautêntica pelos estudiosos ${tag('fato')}. A Igreja recebeu do estoicismo a lei natural e o cosmopolitismo, mas rejeitou o panteísmo e o fatalismo ${tag('interpretacao')}.</p>
<h3>Exercícios espirituais</h3>
<p>Pierre Hadot (A cidadela interior, 1992, sobre Marco Aurélio) leu as Meditações como exercícios para reformar o próprio juízo, não como tratado ${tag('interpretacao')}. Michel Foucault (A hermenêutica do sujeito, 1982) estudou as "técnicas de si" estoicas.</p>
<h3>Neoestoicismo</h3>
<p>Justo Lípsio (Sobre a constância, 1584) promoveu um estoicismo cristão no período das guerras religiosas ${tag('fato')}. Hoje, o "estoicismo moderno" popular tende a separar a ética da física e da teologia estoicas, o que estudiosos consideram uma simplificação ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Pierre Hadot, A Cidadela Interior (1992).' }, { texto: 'Ambrósio, Sobre os deveres dos ministros, livro I.' }],
    exercicios: [
      mc('Ambrósio modelou sua obra sobre os deveres em:', ['Sêneca', 'Cícero', 'Epicteto', 'Zenão'], 1, 'Sobre os deveres.'),
      mc('A correspondência entre Sêneca e Paulo é considerada:', ['Autêntica', 'Apócrifa', 'Perdida', 'Bíblica'], 1, 'Inautêntica.'),
      mc('"Sobre a constância" (1584) é de:', ['Lípsio', 'Montaigne', 'Erasmo', 'Hadot'], 0, 'Neoestoicismo.'),
      disc('O "estoicismo moderno", sem física nem teologia, ainda é estoicismo? Argumente.', ['Explica a doutrina original', 'Explica a versão moderna', 'Avalia a separação', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm5-12', titulo: 'Ceticismo antigo',
  aprendera: ['As duas tradições céticas: pirrônica e acadêmica', 'Equipolência, suspensão do juízo e tranquilidade', 'Os modos de Enesidemo e o trilema de Agripa', 'As principais respostas ao ceticismo'],
  explicacao: `
<h3>Duas tradições</h3>
<ul>
<li><strong>Pirronismo</strong>: inspirado em Pirro de Élis (c. 360–270 a.C.), que não deixou escritos; renovado por Enesidemo (século I a.C.) e exposto por Sexto Empírico (c. 200 d.C.) nas Hipotiposes Pirrônicas ${tag('fato')}.</li>
<li><strong>Ceticismo acadêmico</strong>: a Academia de Platão tornou-se cética com Arcesilau (c. 268 a.C.) e Carnéades (século II a.C.), em polêmica com os estoicos ${tag('fato')}.</li>
</ul>
<h3>O método pirrônico</h3>
<p>Diante de qualquer questão, o cético opõe argumentos de igual força (<em>isostheneia</em>, equipolência); daí resulta a suspensão do juízo (<em>epoché</em>) e, como uma sombra, a tranquilidade (<em>ataraxia</em>) ${tag('fato')}. O cético não afirma que nada pode ser conhecido (isso seria dogmatismo negativo); continua investigando ("cético" vem de <em>skeptesthai</em>, examinar).</p>
<h3>Os modos</h3>
<p>Enesidemo reuniu dez "modos" (tropos) que mostram a relatividade das aparências: diferenças entre animais, entre pessoas, entre sentidos, entre estados, posições, misturas, quantidades, relações, frequência e costumes ${tag('fato')}. Agripa reduziu-os a cinco, dos quais três formam o célebre <strong>trilema</strong> ${tag('argumento')}: toda justificação leva a um <em>regresso ao infinito</em>, a um <em>círculo</em> ou a uma <em>hipótese</em> arbitrária.</p>
<h3>O probabilismo acadêmico</h3>
<p>Carnéades admitiu que, para agir, podemos seguir o "persuasivo" (<em>pithanon</em>), sem afirmá-lo como verdadeiro — Cícero traduz por <em>probabile</em> ${tag('fato')}.</p>
<h3>Respostas</h3>
<ul>
<li><strong>Apraxia</strong>: os estoicos objetaram que o cético não poderia agir. Sexto responde: ele vive segundo as aparências, sem dogmatizar.</li>
<li><strong>Autorrefutação</strong>: "nada se sabe" pretende ser saber. O pirrônico responde que não afirma isso.</li>
<li><strong>Agostinho</strong> (Contra os Acadêmicos; Cidade de Deus XI, 26): há certezas que resistem ao ceticismo, como "se me engano, existo" e as verdades matemáticas ${tag('argumento')}.</li>
</ul>`,
  vocabulario: [['Isostheneia', 'Equipolência: argumentos de igual força dos dois lados.'], ['Epoché', 'Suspensão do juízo.'], ['Trilema de Agripa', 'Regresso ao infinito, círculo ou hipótese.'], ['Pithanon', 'O persuasivo, o provável (Carnéades).'], ['Apraxia', 'Objeção de que o cético não pode agir.']],
  exemplos: '<p>A água morna parece quente para uma mão fria e fria para uma mão quente (modo das diferenças de estado). Qual aparência é verdadeira? O pirrônico suspende o juízo sobre como a água é "em si".</p>',
  contexto: `<p>As obras de Sexto Empírico foram redescobertas e traduzidas para o latim no século XVI (Henri Estienne, 1562), provocando a "crise pirrônica" que influenciou Montaigne e Descartes ${tag('fato')}.</p>`,
  argumento: { titulo: 'O trilema de Agripa (reconstruído)', tag: 'argumento',
    premissas: ['Toda crença justificada precisa de outra crença que a justifique.', 'Essa cadeia ou continua sem fim, ou volta a uma crença anterior, ou para numa crença não justificada.', 'Nenhuma das três opções produz justificação: o regresso não termina, o círculo pressupõe o que quer provar e a hipótese é arbitrária.'],
    conclusao: 'Logo, nenhuma crença está realmente justificada.',
    nota: 'Respostas: fundacionismo (há crenças básicas autoevidentes), coerentismo (a justificação é sistêmica), infinitismo (Peter Klein) e a resposta aristotélica dos primeiros princípios.' },
  objecoes: [{ objecao: 'O trilema se refuta: ele mesmo pretende estar justificado.', tag: 'debate', resposta: 'O pirrônico responde que apresenta o argumento apenas como algo que lhe aparece persuasivo, não como verdade justificada; o argumento seria uma "escada" que se joga fora depois de subir. Críticos acham essa resposta insatisfatória.' }],
  aplicacao: '<p>Escolha uma crença sua e aplique o trilema: qual é a justificação, a justificação da justificação e onde a cadeia termina?</p>',
  fonte: { obra: 'Sexto Empírico, Hipotiposes Pirrônicas I, 1–30 e 164–177', link: null, orientacao: '<p>Leia o início do livro I (definição de ceticismo) e os cinco modos de Agripa. Reconstrua o trilema e anote como Sexto descreve a tranquilidade.</p>' },
  perguntas: [
    { p: 'Qual é a sequência do método pirrônico?', r: 'Equipolência, suspensão do juízo, tranquilidade.' },
    { p: 'Quais as três opções do trilema de Agripa?', r: 'Regresso ao infinito, círculo, hipótese.' },
    { p: 'Como Agostinho responde aos céticos?', r: 'Com certezas como "se me engano, existo" e as verdades matemáticas.' },
  ],
  exercicios: [
    mc('Quem expôs o pirronismo nas Hipotiposes?', ['Pirro', 'Sexto Empírico', 'Carnéades', 'Arcesilau'], 1, 'C. 200 d.C.'),
    mc('O "pithanon" é:', ['O verdadeiro', 'O persuasivo, provável', 'O falso', 'O necessário'], 1, 'Carnéades.'),
    mc('A objeção da apraxia afirma que o cético:', ['Não pode agir', 'Não pode falar', 'É dogmático', 'É ateu'], 0, 'Objeção estoica.'),
    mc('A redescoberta de Sexto no século XVI influenciou:', ['Tomás', 'Montaigne e Descartes', 'Agostinho', 'Aristóteles'], 1, 'Crise pirrônica.'),
    disc('Escolha uma resposta ao trilema (fundacionismo, coerentismo, infinitismo ou primeiros princípios aristotélicos) e avalie se ela vence o cético.', ['Reconstrói o trilema', 'Expõe a resposta', 'Testa contra o cético', 'Conclusão justificada'])],
  resumo: ['Pirronismo e ceticismo acadêmico.', 'Equipolência, epoché, ataraxia.', 'Dez modos; trilema de Agripa.', 'Probabilismo.', 'Respostas: apraxia, autorrefutação, Agostinho.'],
  referencias: [{ texto: 'Sexto Empírico, Hipotiposes Pirrônicas.' }, { texto: 'Cícero, Acadêmicos.' }, { texto: 'Agostinho, Contra os Acadêmicos.' }],
  revisao: [['Trilema de Agripa', 'Regresso, círculo, hipótese.'], ['Epoché', 'Suspensão do juízo.'], ['Sexto Empírico', 'Hipotiposes Pirrônicas (c. 200 d.C.).']],
  avancado: {
    texto: `<h3>Ceticismo rústico ou urbano?</h3>
<p>Myles Burnyeat ("Can the Sceptic Live His Scepticism?", 1980) e Michael Frede ("The Sceptic\'s Beliefs", 1979) debateram se o pirrônico suspende todas as crenças ("rústico") ou só as teóricas, mantendo as crenças cotidianas ("urbano") ${tag('debate')}.</p>
<h3>Ceticismo moderno</h3>
<p>Descartes radicalizou o ceticismo com o gênio maligno para superá-lo; Hume o reformulou sobre indução e mundo externo; no século XX, os argumentos do "cérebro numa cuba" (Putnam, 1981) retomam o tema ${tag('fato')}. G. E. Moore respondeu com "aqui está uma mão" ("Proof of an External World", 1939) ${tag('argumento')}.</p>
<h3>Primeiros princípios</h3>
<p>Aristóteles (Analíticos Posteriores I, 3) responde ao regresso: nem tudo se demonstra; há princípios conhecidos pelo intelecto (<em>nous</em>), sem demonstração ${tag('argumento')}. É uma forma de fundacionismo que o cético dirá arbitrária.</p>`,
    leituras: [{ texto: 'Myles Burnyeat e Michael Frede (orgs.), The Original Sceptics (1997).' }, { texto: 'G. E. Moore, "Proof of an External World" (1939).' }],
    exercicios: [
      mc('O debate "rústico × urbano" é sobre:', ['Onde viviam os céticos', 'Que crenças o pirrônico suspende', 'A política cética', 'A física'], 1, 'Burnyeat e Frede.'),
      mc('"Aqui está uma mão" é resposta ao ceticismo de:', ['Moore', 'Putnam', 'Descartes', 'Hume'], 0, '1939.'),
      mc('Aristóteles responde ao regresso da demonstração com:', ['Círculo', 'Primeiros princípios conhecidos pelo intelecto', 'Ceticismo', 'Fé'], 1, 'Analíticos Posteriores I, 3.'),
      disc('A resposta de Moore ao ceticismo é uma petição de princípio? Argumente.', ['Explica a resposta', 'Explica a acusação', 'Avalia', 'Conclusão justificada'])],
  },
}),

avaliacao('m5-13', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>O domínio dos grandes problemas da filosofia antiga: princípio, ser e mudança, conhecimento, alma, justiça, causas, virtude e felicidade, e as escolas helenísticas.</p>
<h3>Critério do Degrau 4</h3>
<p>Para concluir o degrau, você deve ser capaz de comparar Platão e Aristóteles sobre conhecimento, realidade e vida boa. A primeira questão discursiva treina exatamente isso.</p>`,
[
  disc('Compare Platão e Aristóteles em três pontos: conhecimento (reminiscência × abstração/experiência), realidade (Formas separadas × substância e forma imanente) e vida boa (justiça da alma × eudaimonia segundo a virtude). Apresente os argumentos de ambos e conclua qual posição considera mais bem sustentada em cada ponto.', ['Expõe Platão com fidelidade nos três pontos', 'Expõe Aristóteles com fidelidade nos três pontos', 'Usa textos (República, Mênon, Fédon, Física, Metafísica, Ética)', 'Compara argumentos, não só teses', 'Conclusões justificadas']),
  disc('Epicurismo, estoicismo e ceticismo propõem caminhos para a tranquilidade. Compare-os e avalie qual deles resiste melhor às críticas que você estudou.', ['Expõe as três escolas', 'Identifica o que cada uma entende por tranquilidade', 'Usa as críticas estudadas', 'Conclusão justificada']),
]),
];
