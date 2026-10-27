// Módulo 9 — Filosofia moderna.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm9-1', titulo: 'Descartes: o método',
  aprendera: ['O contexto da "crise" do século XVII', 'As quatro regras do Discurso do Método', 'A moral provisória', 'O ideal de uma ciência unificada'],
  prereq: ['Módulo 8 concluído'],
  explicacao: `
<h3>Um novo começo</h3>
<p>René Descartes (1596–1650) estudou no colégio jesuíta de La Flèche e conta, no Discurso do Método (1637), que saiu dos estudos decepcionado: só a matemática lhe parecia certa ${tag('fato')}. O contexto inclui a nova ciência (Galileu foi condenado em 1633, o que levou Descartes a não publicar O Mundo), as guerras de religião e o ceticismo renascentista de Montaigne ${tag('fato')}.</p>
<h3>As quatro regras (Discurso, parte II)</h3>
<ol>
<li><strong>Evidência</strong>: nunca aceitar como verdadeiro o que não se conheça clara e distintamente.</li>
<li><strong>Análise</strong>: dividir cada dificuldade em quantas partes for possível.</li>
<li><strong>Síntese</strong>: conduzir os pensamentos por ordem, do mais simples ao mais complexo.</li>
<li><strong>Enumeração</strong>: fazer revisões tão completas que se tenha certeza de nada omitir ${tag('fato')}.</li>
</ol>
<h3>A moral provisória (parte III)</h3>
<p>Enquanto reconstrói o saber, Descartes adota máximas: obedecer às leis e à religião de seu país; ser firme nas ações; vencer antes a si mesmo que à fortuna; e escolher a melhor ocupação, que para ele é cultivar a razão ${tag('fato')}.</p>
<h3>A árvore do saber</h3>
<p>No prefácio dos Princípios da Filosofia (edição francesa, 1647), Descartes compara a filosofia a uma árvore: raízes, a metafísica; tronco, a física; ramos, a medicina, a mecânica e a moral ${tag('fato')}.</p>
<h3>O que muda</h3>
<p>A filosofia passa a começar pelo método e pelo sujeito que conhece, e não pelo ser. Muitos historiadores veem aqui a "virada epistemológica" moderna ${tag('interpretacao')}. Tomistas como Gilson e Maritain (Três Reformadores, 1925) criticaram essa virada ${tag('debate')}.</p>`,
  vocabulario: [['Clareza e distinção', 'Critério cartesiano de evidência.'], ['Análise', 'Decomposição do complexo em simples.'], ['Moral provisória', 'Regras de conduta durante a dúvida.'], ['Mathesis universalis', 'Ideal de uma ciência geral da ordem e medida.'], ['Virada epistemológica', 'Primado da pergunta "como conheço?".']],
  exemplos: '<p>Ao resolver um problema de física, você isola variáveis (análise), parte das relações mais simples (síntese) e confere se não esqueceu nenhuma força (enumeração): é o método de Descartes aplicado.</p>',
  contexto: `<p>Descartes viveu muitos anos na Holanda e morreu em Estocolmo, onde fora a convite da rainha Cristina ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que começar pelo método', tag: 'argumento',
    premissas: ['As opiniões herdadas são muitas vezes contraditórias.', 'Sem um critério de verdade, não se pode decidir entre elas.', 'A matemática alcança certeza porque procede com ordem a partir de evidências.'],
    conclusao: 'Logo, o saber deve ser reconstruído com um método semelhante ao matemático.',
    nota: 'A premissa 3 supõe que o método matemático é adequado a todos os objetos — o que Pascal e Aristóteles (Ética I, 3) negariam.' },
  objecoes: [{ objecao: 'Nem todo saber admite a mesma exatidão (Aristóteles, Ética I, 3).', tag: 'argumento', resposta: 'Descartes admite graus de certeza moral nas ações, mas pretende que a ciência tenha certeza matemática. A tensão entre o ideal único e a variedade de objetos atravessa a modernidade.' }],
  aplicacao: '<p>Aplique as quatro regras a uma questão que você estuda e escreva no Caderno o resultado de cada etapa.</p>',
  fonte: { obra: 'Descartes, Discurso do Método, partes I–III', link: null, orientacao: '<p>Leia as três primeiras partes. Marque a autobiografia intelectual (I), as regras (II) e a moral provisória (III).</p>' },
  perguntas: [
    { p: 'Quais as quatro regras do método?', r: 'Evidência, análise, síntese, enumeração.' },
    { p: 'O que é a moral provisória?', r: 'Máximas de conduta adotadas enquanto se reconstrói o saber.' },
    { p: 'Quais as raízes da árvore do saber?', r: 'A metafísica.' },
  ],
  exercicios: [
    mc('O Discurso do Método foi publicado em:', ['1619', '1637', '1641', '1650'], 1, 'Prefácio a três ensaios científicos.'),
    mc('A primeira regra é a da:', ['Análise', 'Evidência', 'Síntese', 'Enumeração'], 1, 'Clareza e distinção.'),
    mc('Na árvore do saber, o tronco é:', ['A moral', 'A física', 'A metafísica', 'A medicina'], 1, 'Prefácio dos Princípios.'),
    mc('A crítica de Maritain a Descartes está em:', ['Três Reformadores', 'O Ser e a Essência', 'A Filosofia Moral', 'Humanismo Integral'], 0, '1925.'),
    disc('O método de Descartes vale para a ética e a teologia? Argumente com Aristóteles, Ética I, 3.', ['Expõe as regras', 'Expõe Aristóteles', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Contexto: nova ciência e ceticismo.', 'Quatro regras.', 'Moral provisória.', 'Árvore do saber.', 'Virada epistemológica.'],
  referencias: [{ texto: 'Descartes, Discurso do Método (1637).' }, { texto: 'Étienne Gilson, A Unidade da Experiência Filosófica (1937).' }, { texto: 'Jacques Maritain, Três Reformadores (1925).' }],
  revisao: [['Quatro regras', 'Evidência, análise, síntese, enumeração.'], ['Moral provisória', 'Discurso, parte III.'], ['Árvore do saber', 'Princípios, prefácio de 1647.']],
  avancado: {
    texto: `<h3>As Regras para a direção do espírito</h3>
<p>Antes do Discurso, Descartes escreveu as Regulae (c. 1628, publicadas postumamente em 1701), onde defende a intuição e a dedução como únicos caminhos seguros e esboça a <em>mathesis universalis</em> ${tag('fato')}.</p>
<h3>Escolástica em Descartes</h3>
<p>Gilson (Index scolastico-cartésien, 1913) mostrou quanto do vocabulário cartesiano vem da escolástica (substância, realidade objetiva, causa eminente) ${tag('fato')}. A ruptura é real, mas menos completa do que Descartes sugere ${tag('interpretacao')}.</p>
<h3>Descartes e o método matemático</h3>
<p>A Geometria (1637) unifica álgebra e geometria (coordenadas), feito que inspira o projeto de reduzir a natureza a extensão e movimento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Descartes, Regras para a Direção do Espírito.' }, { texto: 'Étienne Gilson, Index scolastico-cartésien (1913).' }],
    exercicios: [
      mc('As Regulae foram publicadas:', ['Em 1628', 'Postumamente, em 1701', 'Em 1637', 'Nunca'], 1, 'Póstumas.'),
      mc('Quem mostrou o vocabulário escolástico em Descartes?', ['Gilson', 'Maritain', 'Koyré', 'Husserl'], 0, 'Index scolastico-cartésien.'),
      mc('A Geometria de Descartes unifica:', ['Lógica e física', 'Álgebra e geometria', 'Ética e política', 'Música e matemática'], 1, 'Coordenadas.'),
      disc('Descartes rompe com a escolástica ou a transforma? Use Gilson.', ['Mostra continuidades', 'Mostra rupturas', 'Usa Gilson', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm9-2', titulo: 'Descartes: as Meditações',
  aprendera: ['A dúvida metódica e o gênio maligno', 'O cogito', 'As provas da existência de Deus na Meditação III e V', 'O dualismo de substâncias e o círculo cartesiano'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Meditação I: a dúvida</h3>
<p>Descartes duvida dos sentidos (às vezes enganam), da distinção entre vigília e sonho, e até da matemática, supondo um "gênio maligno" que o engane em tudo ${tag('fato')}. A dúvida é metódica: não é ceticismo, mas teste para encontrar algo indubitável ${tag('interpretacao')}.</p>
<h3>Meditação II: o cogito</h3>
<p>Mesmo que o gênio me engane, para ser enganado preciso existir: "eu sou, eu existo" é necessariamente verdadeiro sempre que o penso ${tag('fato')}. A fórmula "penso, logo existo" está no Discurso (IV); nas Meditações a formulação é "ego sum, ego existo". Sou uma "coisa que pensa" (<em>res cogitans</em>). O exemplo da cera mostra que conhecemos os corpos pelo intelecto, não pelos sentidos ${tag('argumento')}.</p>
<h3>Meditação III: Deus pela ideia de infinito</h3>
<p>Tenho a ideia de um ser infinito. A causa de uma ideia deve ter ao menos tanta realidade quanto a ideia representa. Eu, finito, não posso ser a causa da ideia de infinito. Logo, Deus existe ${tag('argumento')}.</p>
<h3>Meditação IV–V</h3>
<p>O erro vem de a vontade (infinita) ir além do intelecto (finito). Na V, Descartes apresenta uma versão do argumento ontológico: a existência pertence à essência de Deus como a soma dos ângulos à do triângulo ${tag('argumento')}.</p>
<h3>Meditação VI: alma e corpo</h3>
<p>Posso conceber clara e distintamente a mente sem o corpo; logo, são substâncias realmente distintas — pensamento e extensão ${tag('argumento')}. Mas a alma está "estreitamente unida" ao corpo, não "como um piloto em seu navio" ${tag('fato')}.</p>
<h3>O círculo</h3>
<p>Arnauld (Quartas Objeções) apontou: Descartes usa a regra da clareza e distinção para provar Deus e usa Deus para garantir a regra ${tag('fato')}.</p>`,
  vocabulario: [['Gênio maligno', 'Hipótese de um enganador onipotente.'], ['Cogito', 'Certeza da própria existência ao pensar.'], ['Res cogitans', 'Coisa pensante.'], ['Res extensa', 'Coisa extensa (corpo).'], ['Círculo cartesiano', 'Objeção de Arnauld sobre Deus e a clareza.']],
  exemplos: '<p>Num sonho lúcido, você não sabe se a sala é real, mas sabe que está experimentando algo: essa certeza mínima é o ponto de partida do cogito.</p>',
  contexto: `<p>As Meditações (1641) foram publicadas com Objeções de Hobbes, Gassendi, Arnauld, Mersenne e outros, e as Respostas de Descartes ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento da distinção real (Meditação VI, reconstruído)', tag: 'argumento',
    premissas: ['Tudo o que concebo clara e distintamente pode ser feito por Deus tal como o concebo.', 'Concebo clara e distintamente a mente sem o corpo.', 'Se duas coisas podem existir separadas, são realmente distintas.'],
    conclusao: 'Logo, a mente é realmente distinta do corpo.',
    nota: 'A objeção clássica: conceber A sem B não prova que A possa existir sem B (Arnauld; Kripke discute a conceptibilidade e a possibilidade).' },
  objecoes: [{ objecao: 'Como duas substâncias tão diferentes interagem? (Elisabeth da Boêmia, 1643)', tag: 'fato', resposta: 'Descartes respondeu que a união é conhecida pelos sentidos e pela vida, não pelo intelecto puro; e falou da glândula pineal. A princesa não ficou satisfeita. O problema da interação continua central (Módulo 15).' }],
  aplicacao: '<p>Escreva a sua versão da Meditação I: de que você pode duvidar e o que resiste à dúvida?</p>',
  fonte: { obra: 'Descartes, Meditações sobre Filosofia Primeira, I–III', link: null, orientacao: '<p>Leia as três primeiras Meditações. Reconstrua o cogito e a prova da Meditação III em premissas.</p>' },
  perguntas: [
    { p: 'Qual a função do gênio maligno?', r: 'Estender a dúvida a tudo, até à matemática.' },
    { p: 'O que o exemplo da cera mostra?', r: 'Que conhecemos os corpos pelo intelecto.' },
    { p: 'O que é o círculo cartesiano?', r: 'Provar Deus pela clareza e garantir a clareza por Deus.' },
  ],
  exercicios: [
    mc('"Penso, logo existo" aparece literalmente no:', ['Meditações', 'Discurso do Método', 'Regras', 'Paixões da Alma'], 1, 'Parte IV.'),
    mc('A prova da Meditação III parte:', ['Do movimento', 'Da ideia de infinito', 'Da ordem do mundo', 'Da moral'], 1, 'Causalidade da ideia.'),
    mc('A objeção da interação foi feita por:', ['Arnauld', 'Elisabeth da Boêmia', 'Hobbes', 'Gassendi'], 1, 'Cartas de 1643.'),
    mc('Para Descartes, o erro vem de:', ['Deus', 'A vontade ir além do intelecto', 'Os sentidos apenas', 'O corpo'], 1, 'Meditação IV.'),
    disc('O argumento da distinção real é válido? Avalie a premissa da conceptibilidade.', ['Reconstrói', 'Identifica a premissa frágil', 'Usa objeção', 'Conclusão justificada'])],
  resumo: ['Dúvida metódica.', 'Cogito: eu sou, eu existo.', 'Deus pela ideia de infinito.', 'Dualismo mente–corpo.', 'Círculo de Arnauld.'],
  referencias: [{ texto: 'Descartes, Meditações, com Objeções e Respostas (1641).' }, { texto: 'Correspondência entre Descartes e Elisabeth da Boêmia (1643).' }],
  revisao: [['Cogito', 'Meditação II.'], ['Meditação III', 'Prova pela ideia de infinito.'], ['Elisabeth da Boêmia', 'Problema da interação mente–corpo.']],
  avancado: {
    texto: `<h3>O cogito é uma inferência?</h3>
<p>Nas Segundas Respostas, Descartes nega que o cogito seja silogismo; é uma intuição simples ${tag('fato')}. Jaakko Hintikka ("Cogito, ergo sum: Inference or Performance?", 1962) leu-o como performance: dizer "não existo" é autorrefutante ${tag('interpretacao')}.</p>
<h3>Agostinho antecipou?</h3>
<p>Arnauld notou a semelhança com Agostinho: "se me engano, existo" (<em>si fallor, sum</em>, Cidade de Deus XI, 26) ${tag('fato')}. A diferença está no uso: Agostinho refuta os céticos; Descartes funda um sistema ${tag('interpretacao')}.</p>
<h3>O problema do círculo</h3>
<p>Respostas propostas: a memória (Deus garante as lembranças das demonstrações, não as intuições presentes) e a leitura "coerentista" ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Jaakko Hintikka, "Cogito, ergo sum: Inference or Performance?" (1962).' }, { texto: 'Agostinho, Cidade de Deus XI, 26.' }],
    exercicios: [
      mc('"Si fallor, sum" é de:', ['Descartes', 'Agostinho', 'Anselmo', 'Montaigne'], 1, 'Cidade de Deus XI, 26.'),
      mc('Hintikka leu o cogito como:', ['Silogismo', 'Performance', 'Intuição mística', 'Erro'], 1, '1962.'),
      mc('Para Descartes, o cogito é:', ['Um silogismo', 'Uma intuição simples', 'Uma hipótese', 'Uma crença'], 1, 'Segundas Respostas.'),
      disc('Compare o "si fallor, sum" de Agostinho com o cogito de Descartes: semelhanças e diferenças de função.', ['Expõe os dois textos', 'Compara funções', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm9-3', titulo: 'Pascal',
  aprendera: ['A vida de Pascal: ciência e conversão', 'Espírito de geometria e espírito de finura', 'A condição humana: grandeza e miséria', 'O argumento da aposta e suas objeções'],
  explicacao: `
<h3>Um cientista convertido</h3>
<p>Blaise Pascal (1623–1662) construiu uma máquina de calcular, fez experiências sobre o vácuo e fundou com Fermat o cálculo de probabilidades ${tag('fato')}. Na noite de 23 de novembro de 1654 teve uma experiência religiosa registrada no "Memorial", costurado em sua roupa: "Deus de Abraão, Deus de Isaac, Deus de Jacó, não dos filósofos e dos sábios" ${tag('fato')}. Ligou-se a Port-Royal (jansenismo) e escreveu as Provinciais contra a casuística ${tag('fato')}.</p>
<h3>Pensamentos</h3>
<p>Os Pensamentos são fragmentos de uma apologia do cristianismo que Pascal não concluiu; as edições numeram os fragmentos de modos diferentes (Brunschvicg, Lafuma, Sellier) ${tag('fato')}.</p>
<h3>Geometria e finura</h3>
<p>O espírito de geometria parte de poucos princípios claros e deduz; o espírito de finura percebe muitos princípios sutis de uma vez, como na vida moral e social ${tag('fato')}. É uma crítica implícita ao método único de Descartes ${tag('interpretacao')}.</p>
<h3>Grandeza e miséria</h3>
<p>"O homem não passa de um caniço, o mais fraco da natureza, mas é um caniço pensante" ${tag('fato')}. O homem é grande por saber-se miserável. O "divertimento" serve para não pensar na morte ${tag('argumento')}. Só o cristianismo, diz Pascal, explica essa duplicidade: criação e queda ${tag('interpretacao')}.</p>
<h3>"O coração tem suas razões"</h3>
<p>"O coração tem razões que a razão desconhece": o coração designa uma faculdade de conhecimento imediato dos primeiros princípios, não mero sentimento ${tag('interpretacao')}.</p>
<h3>A aposta</h3>
<p>Fragmento "Infinito–nada" (Lafuma 418): a razão não decide se Deus existe; mas é preciso apostar. Se apostar em Deus e ele existir, ganha-se tudo; se não existir, perde-se pouco. Logo, deve-se apostar ${tag('argumento')}.</p>`,
  vocabulario: [['Memorial', 'Registro da experiência de 1654.'], ['Espírito de finura', 'Percepção de princípios sutis.'], ['Divertimento', 'Fuga de si mesmo.'], ['Aposta', 'Argumento decisório sobre crer em Deus.'], ['Jansenismo', 'Movimento rigorista sobre graça, ligado a Port-Royal.']],
  exemplos: '<p>Um médico experiente que "sente" que o paciente está pior antes dos exames mostra espírito de finura; o algoritmo que analisa os exames é espírito de geometria.</p>',
  contexto: `<p>O jansenismo foi condenado por Roma (bula Cum occasione, 1653) ${tag('fato')}.</p>`,
  argumento: { titulo: 'A aposta (Pensamentos, Lafuma 418, reconstruída)', tag: 'argumento',
    premissas: ['A razão não pode decidir se Deus existe.', 'Não apostar é impossível: viver é escolher.', 'Apostar em Deus: se existe, ganho infinito; se não, perda finita.', 'Apostar contra: se existe, perda infinita; se não, ganho finito.', 'Com probabilidade não nula, o valor esperado infinito domina.'],
    conclusao: 'Logo, é racional apostar em Deus.',
    nota: 'Pascal sugere que quem não consegue crer comece a agir como crente ("tomar água benta"), para diminuir as paixões.' },
  objecoes: [{ objecao: 'Objeção dos muitos deuses: a aposta vale para qualquer religião com recompensa infinita.', tag: 'debate', resposta: 'Defensores restringem a aposta às hipóteses vivas para o apostador e usam outros argumentos para decidir entre elas. A aposta não pretende ser prova, mas parte de uma apologia maior.' }],
  aplicacao: '<p>Descreva no Caderno uma forma de "divertimento" na sua vida. De que ela o distrai?</p>',
  fonte: { obra: 'Pascal, Pensamentos: o caniço pensante, o divertimento e a aposta', link: null, orientacao: '<p>Leia o fragmento da aposta e os fragmentos sobre o divertimento. Atenção à numeração da edição que você usar.</p>' },
  perguntas: [
    { p: 'O que diz o Memorial?', r: '"Deus de Abraão, de Isaac, de Jacó, não dos filósofos e dos sábios."' },
    { p: 'O que é espírito de finura?', r: 'Percepção de muitos princípios sutis de uma vez.' },
    { p: 'Qual a principal objeção à aposta?', r: 'Os muitos deuses.' },
  ],
  exercicios: [
    mc('Pascal fundou com Fermat:', ['O cálculo infinitesimal', 'O cálculo de probabilidades', 'A geometria analítica', 'A lógica formal'], 1, 'Correspondência de 1654.'),
    mc('As Provinciais criticam:', ['Os calvinistas', 'A casuística jesuíta', 'Descartes', 'Montaigne'], 1, 'Contra a moral laxista.'),
    mc('"Coração" em Pascal designa:', ['Sentimentalismo', 'Conhecimento imediato dos princípios', 'O órgão', 'A vontade'], 1, 'Faculdade cognitiva.'),
    mc('O divertimento serve para:', ['Descansar', 'Não pensar na própria condição', 'Conhecer Deus', 'Fortalecer a razão'], 1, 'Fuga de si.'),
    disc('A aposta de Pascal é um argumento racional válido? Avalie a objeção dos muitos deuses.', ['Reconstrói', 'Expõe a objeção', 'Avalia respostas', 'Conclusão justificada'])],
  resumo: ['Ciência e conversão.', 'Geometria e finura.', 'Grandeza e miséria.', 'Coração e razão.', 'A aposta.'],
  referencias: [{ texto: 'Pascal, Pensamentos.' }, { texto: 'Pascal, Memorial (1654).' }, { texto: 'Lucien Goldmann, O Deus Oculto (1955).' }],
  revisao: [['Caniço pensante', 'Grandeza do homem na fraqueza.'], ['Aposta', 'Lafuma 418.'], ['Memorial', '23 de novembro de 1654.']],
  avancado: {
    texto: `<h3>Teoria da decisão</h3>
<p>Ian Hacking ("The Logic of Pascal's Wager", 1972) identificou três argumentos distintos no fragmento: dominância, expectativa com probabilidades iguais e expectativa dominante ${tag('fato')}. Alan Hájek discutiu problemas com valores infinitos ${tag('debate')}.</p>
<h3>Pascal e Montaigne</h3>
<p>Na Conversa com o Sr. de Sacy, Pascal contrapõe Epicteto (grandeza sem miséria) e Montaigne (miséria sem grandeza) e diz que o cristianismo une as verdades de ambos ${tag('fato')}.</p>
<h3>O Deus oculto</h3>
<p>"Verdadeiramente tu és um Deus escondido" (Is 45,15): Pascal sustenta que Deus se revela o bastante para quem busca e se esconde o bastante para quem não busca ${tag('interpretacao')}. O tema reaparece no "argumento do ocultamento divino" de J. L. Schellenberg (1993) ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Ian Hacking, "The Logic of Pascal\'s Wager" (1972).' }, { texto: 'J. L. Schellenberg, Divine Hiddenness and Human Reason (1993).' }],
    exercicios: [
      mc('Quem distinguiu três argumentos na aposta?', ['Hájek', 'Hacking', 'Schellenberg', 'Goldmann'], 1, '1972.'),
      mc('Na conversa com Sacy, Pascal contrapõe Montaigne a:', ['Descartes', 'Epicteto', 'Agostinho', 'Sêneca'], 1, 'Estoico.'),
      mc('O argumento do ocultamento divino é de:', ['Schellenberg', 'Pascal', 'Rowe', 'Mackie'], 0, '1993.'),
      disc('Responda a Schellenberg com Pascal: o ocultamento de Deus é evidência contra sua existência?', ['Expõe Schellenberg', 'Usa Pascal', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm9-4', titulo: 'Locke e a origem das ideias',
  aprendera: ['A crítica às ideias inatas', 'Sensação e reflexão; ideias simples e complexas', 'Qualidades primárias e secundárias', 'A identidade pessoal e a política de Locke'],
  explicacao: `
<h3>A tábula rasa</h3>
<p>John Locke (1632–1704), no Ensaio sobre o Entendimento Humano (1690), quer examinar "a origem, a certeza e a extensão do conhecimento humano" ${tag('fato')}. O livro I ataca as ideias inatas: se houvesse princípios inatos, seriam aceitos por todos, incluindo crianças e "idiotas", o que não ocorre ${tag('argumento')}.</p>
<h3>Duas fontes</h3>
<p>A mente é como "papel em branco"; todas as ideias vêm da experiência: <strong>sensação</strong> (objetos externos) e <strong>reflexão</strong> (operações da própria mente) (II, 1) ${tag('fato')}. Ideias simples (branco, frio) combinam-se em complexas (substâncias, modos, relações).</p>
<h3>Qualidades primárias e secundárias</h3>
<p>Primárias (extensão, figura, movimento, número) estão nos corpos como as percebemos; secundárias (cor, sabor, som) são poderes dos corpos de produzir sensações em nós (II, 8) ${tag('fato')}. A distinção vem da ciência de Boyle e Newton ${tag('interpretacao')}.</p>
<h3>Substância: "não sei o quê"</h3>
<p>A ideia de substância é a de um suporte desconhecido das qualidades — "algo que não sei o que é" (II, 23) ${tag('fato')}.</p>
<h3>Identidade pessoal</h3>
<p>A pessoa é a mesma enquanto a consciência (memória) se estende ao passado (II, 27) ${tag('argumento')}. Reid objetou com o "paradoxo do oficial valente" ${tag('fato')}.</p>
<h3>Política</h3>
<p>No Segundo Tratado sobre o Governo (1689): estado de natureza regido pela lei natural; direitos à vida, liberdade e propriedade; governo por consentimento; direito de resistência ${tag('fato')}. A Carta sobre a Tolerância (1689) defende tolerância, exceto para ateus e católicos, por razões políticas ${tag('fato')}.</p>`,
  vocabulario: [['Tábula rasa', 'Mente sem ideias inatas.'], ['Sensação e reflexão', 'Duas fontes das ideias.'], ['Qualidades primárias', 'Extensão, figura, movimento.'], ['Qualidades secundárias', 'Cor, sabor, som: poderes nos corpos.'], ['Consentimento', 'Fundamento do governo legítimo.']],
  exemplos: '<p>Uma maçã é redonda (primária) independentemente de você; "vermelho" depende da interação entre a luz, a superfície e o seu olho (secundária).</p>',
  contexto: `<p>Locke escreveu após a Revolução Gloriosa (1688), cujos princípios influenciou ${tag('fato')}.</p>`,
  argumento: { titulo: 'Contra as ideias inatas (Ensaio I, 2, reconstruído)', tag: 'argumento',
    premissas: ['Se houvesse princípios inatos, todos os conheceriam.', 'Crianças e muitos adultos não conhecem princípios como o de não contradição.', 'Dizer que estão "na mente" sem serem percebidos é contraditório.'],
    conclusao: 'Logo, não há princípios inatos.',
    nota: 'Leibniz (Novos Ensaios, escrito c. 1704) responderá que as ideias estão na mente como disposições, "como os veios no mármore".' },
  objecoes: [{ objecao: 'Leibniz: "nada há no intelecto que não tenha estado nos sentidos, exceto o próprio intelecto".', tag: 'argumento', resposta: 'Locke admite as operações da mente (reflexão), mas nega conteúdos inatos. Chomsky reabriu o debate com a tese de uma faculdade inata da linguagem.' }],
  aplicacao: '<p>Escolha uma ideia complexa (justiça, Deus, Estado) e tente decompô-la, à maneira de Locke, em ideias simples de sensação e reflexão. O que sobra?</p>',
  fonte: { obra: 'Locke, Ensaio sobre o Entendimento Humano, II, 1 e II, 8', link: null, orientacao: '<p>Leia os dois capítulos. Liste as ideias simples de sensação e de reflexão e a distinção entre qualidades.</p>' },
  perguntas: [
    { p: 'Quais as duas fontes das ideias?', r: 'Sensação e reflexão.' },
    { p: 'O que são qualidades secundárias?', r: 'Poderes dos corpos de produzir sensações como cor e som.' },
    { p: 'Em que consiste a identidade pessoal para Locke?', r: 'Na continuidade da consciência/memória.' },
  ],
  exercicios: [
    mc('O Ensaio de Locke foi publicado em:', ['1651', '1690', '1739', '1781'], 1, 'Data da edição.'),
    mc('A extensão é qualidade:', ['Primária', 'Secundária', 'Terciária', 'Inata'], 0, 'II, 8.'),
    mc('Quem respondeu a Locke nos Novos Ensaios?', ['Berkeley', 'Leibniz', 'Hume', 'Reid'], 1, 'Escrito c. 1704.'),
    mc('Locke excluía da tolerância:', ['Quacres', 'Ateus e católicos', 'Judeus', 'Anglicanos'], 1, 'Carta sobre a Tolerância.'),
    disc('A crítica de Locke às ideias inatas refuta Platão e Descartes? Use a resposta de Leibniz.', ['Reconstrói Locke', 'Expõe Leibniz', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Contra as ideias inatas.', 'Sensação e reflexão.', 'Qualidades primárias e secundárias.', 'Substância: não sei o quê.', 'Identidade pela consciência; política do consentimento.'],
  referencias: [{ texto: 'Locke, Ensaio sobre o Entendimento Humano (1690).' }, { texto: 'Locke, Segundo Tratado sobre o Governo (1689).' }, { texto: 'Leibniz, Novos Ensaios sobre o Entendimento Humano.' }],
  revisao: [['Tábula rasa', 'Ensaio II, 1.'], ['Qualidades primárias × secundárias', 'Ensaio II, 8.'], ['Identidade pessoal', 'Ensaio II, 27.']],
  avancado: {
    texto: `<h3>Berkeley</h3>
<p>George Berkeley (Tratado dos Princípios do Conhecimento Humano, 1710) argumentou que a distinção de Locke não se sustenta: as qualidades primárias também só são conhecidas como ideias; logo, "ser é ser percebido" (<em>esse est percipi</em>) ${tag('fato')}.</p>
<h3>Propriedade e trabalho</h3>
<p>Locke funda a propriedade no trabalho que o homem "mistura" com as coisas, com a cláusula de deixar "o bastante e igualmente bom" para os outros (Segundo Tratado, cap. V) ${tag('fato')}. Robert Nozick discutiu essa cláusula em Anarquia, Estado e Utopia (1974) ${tag('debate')}.</p>
<h3>Identidade pessoal hoje</h3>
<p>Derek Parfit (Razões e Pessoas, 1984) desenvolveu uma teoria psicológica herdeira de Locke e concluiu que a identidade "não é o que importa" ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Berkeley, Tratado dos Princípios do Conhecimento Humano (1710).' }, { texto: 'Derek Parfit, Reasons and Persons (1984), parte III.' }],
    exercicios: [
      mc('"Esse est percipi" é de:', ['Locke', 'Berkeley', 'Hume', 'Leibniz'], 1, '1710.'),
      mc('A "cláusula lockeana" é discutida por:', ['Rawls', 'Nozick', 'Parfit', 'Reid'], 1, 'Anarquia, Estado e Utopia.'),
      mc('Parfit conclui que a identidade pessoal:', ['É tudo', 'Não é o que importa', 'É a alma', 'É o corpo'], 1, 'Razões e Pessoas.'),
      disc('A teoria lockeana da identidade pessoal é compatível com a doutrina cristã da alma? Use Reid e Parfit.', ['Expõe Locke', 'Usa objeções', 'Relaciona à alma', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm9-5', titulo: 'Hume: impressões, ideias e causalidade',
  aprendera: ['A distinção entre impressões e ideias', 'Relações de ideias e questões de fato (o "garfo de Hume")', 'A crítica da causalidade e o problema da indução', 'Hume sobre milagres e religião'],
  prereq: ['Aula anterior: Locke'],
  explicacao: `
<h3>Impressões e ideias</h3>
<p>David Hume (1711–1776), no Tratado da Natureza Humana (1739–1740) e na Investigação sobre o Entendimento Humano (1748), divide as percepções em impressões (vivas) e ideias (cópias mais fracas). Toda ideia simples deriva de uma impressão ${tag('fato')}. Teste: diante de um termo filosófico, pergunte "de que impressão deriva?" ${tag('argumento')}.</p>
<h3>O garfo</h3>
<p>Os objetos da razão são <strong>relações de ideias</strong> (matemática: certas, mas não dizem o que existe) ou <strong>questões de fato</strong> (contingentes, conhecidas pela experiência) (Investigação, seção IV) ${tag('fato')}.</p>
<h3>Causalidade</h3>
<p>Todo raciocínio sobre fatos se funda na relação de causa e efeito. Mas não vemos a "conexão necessária": vemos só sucessão e conjunção constante. A ideia de necessidade vem do hábito da mente de passar de um ao outro (seção VII) ${tag('argumento')}.</p>
<h3>O problema da indução</h3>
<p>Por que esperar que o futuro se pareça com o passado? Não por demonstração (o contrário não é contraditório); nem pela experiência, que suporia o que se quer provar. A inferência é obra do costume, não da razão (seção IV–V) ${tag('argumento')}.</p>
<h3>Milagres (seção X)</h3>
<p>Um milagre é violação de uma lei da natureza; a experiência uniforme sustenta a lei; logo, nenhum testemunho basta, a menos que sua falsidade fosse mais milagrosa que o fato ${tag('argumento')}.</p>
<h3>Ceticismo mitigado</h3>
<p>Hume admite que a natureza é forte demais para o ceticismo: depois de filosofar, ele janta e joga gamão ${tag('fato')}. Kant dirá que Hume o despertou de seu "sono dogmático" ${tag('fato')}.</p>`,
  vocabulario: [['Impressão', 'Percepção viva (sensação, emoção).'], ['Ideia', 'Cópia fraca de uma impressão.'], ['Garfo de Hume', 'Relações de ideias × questões de fato.'], ['Conjunção constante', 'Repetição regular de A seguido de B.'], ['Problema da indução', 'Falta de justificativa racional para generalizar.']],
  exemplos: '<p>Uma bola de bilhar bate em outra e esta se move. Você vê duas coisas em sequência; a "força" que liga uma à outra, diz Hume, você não vê — você a espera por hábito.</p>',
  contexto: `<p>O Tratado "saiu natimorto da imprensa", disse Hume; a Investigação reformulou suas teses ${tag('fato')}.</p>`,
  argumento: { titulo: 'O problema da indução (Investigação IV, reconstruído)', tag: 'argumento',
    premissas: ['Toda inferência sobre o não observado supõe que a natureza é uniforme.', 'Esse princípio não é demonstrável: seu contrário é concebível.', 'Nem é provável pela experiência, pois isso suporia o próprio princípio.'],
    conclusao: 'Logo, as inferências indutivas não têm fundamento racional; resultam do costume.',
    nota: 'Popper aceitará a conclusão e substituirá a indução pela falseabilidade (Módulo 10); outros (Strawson) dirão que pedir justificação para a indução é um erro de categoria.' },
  objecoes: [{ objecao: 'Os aristotélicos: conhecemos as naturezas das coisas, e as causas agem segundo elas.', tag: 'argumento', resposta: 'Hume negaria que tenhamos impressão de "naturezas". O realismo responde que o intelecto abstrai naturezas dos dados (Módulo 8) — e o debate volta à teoria do conhecimento.' }],
  aplicacao: '<p>Escolha três crenças científicas suas e diga quais se baseiam em indução. Como você responderia a Hume?</p>',
  fonte: { obra: 'Hume, Investigação sobre o Entendimento Humano, seções IV, VII e X', link: null, orientacao: '<p>Leia as seções IV e VII. Reconstrua o problema da indução e a origem da ideia de necessidade.</p>' },
  perguntas: [
    { p: 'O que é o "garfo de Hume"?', r: 'A divisão entre relações de ideias e questões de fato.' },
    { p: 'De onde vem a ideia de conexão necessária?', r: 'Do hábito da mente diante da conjunção constante.' },
    { p: 'Qual o argumento de Hume contra milagres?', r: 'A experiência uniforme que sustenta a lei natural supera qualquer testemunho.' },
  ],
  exercicios: [
    mc('Para Hume, a matemática trata de:', ['Questões de fato', 'Relações de ideias', 'Impressões', 'Causas'], 1, 'Seção IV.'),
    mc('A ideia de necessidade causal vem do:', ['Intelecto puro', 'Hábito', 'Deus', 'Inatismo'], 1, 'Seção VII.'),
    mc('Quem disse ter sido despertado do "sono dogmático" por Hume?', ['Reid', 'Kant', 'Mill', 'Popper'], 1, 'Prolegômenos.'),
    mc('O argumento sobre milagres está na seção:', ['IV', 'VII', 'X', 'XII'], 2, 'Dos milagres.'),
    disc('Responda a Hume sobre a causalidade a partir do realismo aristotélico-tomista. A resposta é suficiente?', ['Reconstrói Hume', 'Expõe a resposta realista', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Impressões e ideias.', 'Garfo de Hume.', 'Causalidade como hábito.', 'Problema da indução.', 'Milagres; ceticismo mitigado.'],
  referencias: [{ texto: 'Hume, Investigação sobre o Entendimento Humano (1748).' }, { texto: 'Hume, Tratado da Natureza Humana (1739–1740).' }, { texto: 'Hume, Diálogos sobre a Religião Natural (1779).' }],
  revisao: [['Garfo de Hume', 'Investigação IV.'], ['Causalidade', 'Conjunção constante e hábito (seção VII).'], ['Milagres', 'Investigação X.']],
  avancado: {
    texto: `<h3>"Ser" e "dever"</h3>
<p>No Tratado (III, 1, 1), Hume observa que autores passam de proposições com "é" para proposições com "deve" sem explicar a passagem — a origem da "lei de Hume" ${tag('fato')}. A interpretação é debatida: proibição absoluta ou pedido de explicação? ${tag('debate')}</p>
<h3>Diálogos sobre a Religião Natural</h3>
<p>Publicados postumamente (1779), criticam o argumento do desígnio: a analogia entre o mundo e uma máquina é fraca; o projetista poderia ser vários, imperfeito ou morto ${tag('fato')}. Paley (1802) reformulará o argumento; o darwinismo mudará o debate ${tag('interpretacao')}.</p>
<h3>Novo Hume</h3>
<p>Galen Strawson e outros ("New Hume") leram Hume como realista cético sobre causas: elas existem, mas não as conhecemos; a leitura é contestada ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Hume, Diálogos sobre a Religião Natural (1779).' }, { texto: 'Galen Strawson, The Secret Connexion (1989).' }],
    exercicios: [
      mc('A passagem do "é" ao "deve" está no:', ['Tratado III, 1, 1', 'Investigação X', 'Diálogos XII', 'Ensaios'], 0, 'Lei de Hume.'),
      mc('Os Diálogos criticam principalmente o argumento:', ['Ontológico', 'Do desígnio', 'Moral', 'Cosmológico apenas'], 1, 'Analogia mundo-máquina.'),
      mc('A leitura "New Hume" é associada a:', ['Galen Strawson', 'P. F. Strawson', 'Kant', 'Reid'], 0, 'The Secret Connexion.'),
      disc('O argumento de Hume contra milagres é circular? Avalie com a objeção de que "experiência uniforme" pressupõe a inexistência de milagres.', ['Reconstrói', 'Expõe a objeção de circularidade', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm9-6', titulo: 'Rousseau e o contrato social',
  aprendera: ['A tese do Discurso sobre as ciências e as artes', 'A origem da desigualdade: estado de natureza e propriedade', 'O contrato social e a vontade geral', 'Educação no Emílio e a religião civil'],
  explicacao: `
<h3>Um paradoxo premiado</h3>
<p>Jean-Jacques Rousseau (1712–1778) venceu o concurso da Academia de Dijon com o Discurso sobre as Ciências e as Artes (1750), sustentando que o progresso das ciências e das artes corrompeu os costumes ${tag('fato')}.</p>
<h3>Desigualdade</h3>
<p>No Discurso sobre a Origem da Desigualdade (1755), o homem natural é solitário, bom, guiado pelo amor de si e pela piedade. A sociedade e a propriedade produzem o amor-próprio (comparação, vaidade) e a desigualdade: "o primeiro que, tendo cercado um terreno, lembrou-se de dizer: isto é meu" foi o fundador da sociedade civil ${tag('fato')}.</p>
<h3>O contrato social (1762)</h3>
<p>"O homem nasceu livre, e por toda parte está a ferros" (I, 1) ${tag('fato')}. O problema: encontrar uma associação em que cada um, unindo-se a todos, obedeça só a si mesmo. Solução: cada um aliena todos os seus direitos à comunidade, e o corpo político age pela <strong>vontade geral</strong>, que visa o interesse comum e difere da "vontade de todos" (soma de interesses particulares) (I, 6; II, 3) ${tag('argumento')}. Quem recusar obedecer será "forçado a ser livre" (I, 7) ${tag('fato')}.</p>
<h3>Religião civil</h3>
<p>No último capítulo (IV, 8), Rousseau propõe dogmas civis (existência de Deus, vida futura, santidade do contrato) e critica o cristianismo por desviar o cidadão da pátria ${tag('fato')}.</p>
<h3>Emílio</h3>
<p>Emílio (1762) propõe uma educação "negativa" que protege a bondade natural; contém a "Profissão de fé do vigário saboiano", deísmo sentimental condenado em Paris e Genebra ${tag('fato')}.</p>`,
  vocabulario: [['Amor de si', 'Cuidado natural consigo.'], ['Amor-próprio', 'Desejo de distinção, nascido da comparação.'], ['Vontade geral', 'Vontade do corpo político para o bem comum.'], ['Vontade de todos', 'Soma de vontades particulares.'], ['Religião civil', 'Credo mínimo a serviço da cidade.']],
  exemplos: '<p>Uma assembleia que vota cada um pensando no próprio bolso expressa a "vontade de todos"; se cada um votar perguntando "o que é melhor para todos?", aproxima-se da vontade geral, segundo Rousseau.</p>',
  contexto: `<p>Rousseau influenciou a Revolução Francesa e o romantismo; Robespierre o admirava ${tag('fato')}.</p>`,
  argumento: { titulo: 'O pacto social (Contrato I, 6, reconstruído)', tag: 'argumento',
    premissas: ['O homem quer conservar-se e ser livre.', 'Isolado, não resiste aos obstáculos da natureza.', 'Unindo forças por um pacto em que cada um se dá a todos, ninguém se dá a ninguém em particular.', 'Obedecendo à vontade geral, cada um obedece à lei que deu a si mesmo.'],
    conclusao: 'Logo, o pacto social preserva a liberdade e a segurança.',
    nota: 'A "alienação total" e o "forçado a ser livre" foram lidos por J. L. Talmon (As Origens da Democracia Totalitária, 1952) como germes do totalitarismo; outros contestam a leitura.' },
  objecoes: [{ objecao: 'A tradição clássica e cristã: o homem é naturalmente social (Aristóteles, Tomás) e marcado pelo pecado original, não naturalmente bom e corrompido pela sociedade.', tag: 'argumento', resposta: 'Rousseau apresenta o estado de natureza como hipótese, não história. A objeção mostra uma antropologia diferente, com consequências políticas e pedagógicas.' }],
  aplicacao: '<p>Compare no Caderno o "estado de natureza" de Rousseau com a natureza social do homem em Aristóteles (Política I, 2).</p>',
  fonte: { obra: 'Rousseau, Do Contrato Social, livro I, caps. 1–8', link: null, orientacao: '<p>Leia o livro I. Explique o pacto, a alienação total e o "forçado a ser livre".</p>' },
  perguntas: [
    { p: 'Qual a tese do primeiro Discurso?', r: 'O progresso das ciências e artes corrompeu os costumes.' },
    { p: 'Diferença entre vontade geral e vontade de todos?', r: 'A geral visa o interesse comum; a de todos soma interesses particulares.' },
    { p: 'O que é a religião civil?', r: 'Credo mínimo a serviço da coesão política.' },
  ],
  exercicios: [
    mc('"O homem nasceu livre, e por toda parte está a ferros" abre:', ['O Emílio', 'O Contrato Social', 'O segundo Discurso', 'As Confissões'], 1, 'I, 1.'),
    mc('O amor-próprio nasce da:', ['Natureza', 'Comparação social', 'Graça', 'Razão'], 1, 'Segundo Discurso.'),
    mc('A leitura totalitária de Rousseau é de:', ['Talmon', 'Kant', 'Burke', 'Strauss'], 0, '1952.'),
    mc('A profissão de fé do vigário saboiano está no:', ['Contrato', 'Emílio', 'Discurso', 'Nova Heloísa'], 1, 'Deísmo sentimental.'),
    disc('A vontade geral protege ou ameaça a liberdade individual? Avalie com Talmon e uma leitura alternativa.', ['Expõe o conceito', 'Expõe Talmon', 'Leitura alternativa', 'Conclusão justificada'])],
  resumo: ['Ciências e artes corrompem.', 'Desigualdade e propriedade.', 'Contrato e vontade geral.', 'Religião civil.', 'Emílio e bondade natural.'],
  referencias: [{ texto: 'Rousseau, Do Contrato Social (1762).' }, { texto: 'Rousseau, Discurso sobre a Origem da Desigualdade (1755).' }, { texto: 'J. L. Talmon, The Origins of Totalitarian Democracy (1952).' }],
  revisao: [['Vontade geral', 'Contrato II, 3.'], ['Forçado a ser livre', 'Contrato I, 7.'], ['Religião civil', 'Contrato IV, 8.']],
  avancado: {
    texto: `<h3>Hobbes, Locke, Rousseau</h3>
<p>Hobbes (Leviatã, 1651): estado de natureza como guerra de todos contra todos; soberano absoluto. Locke: lei natural e governo limitado. Rousseau: bondade natural e soberania popular inalienável ${tag('fato')}. Leo Strauss (Direito Natural e História, 1953) leu essas teorias como "ondas da modernidade" que se afastam do direito natural clássico ${tag('interpretacao')}.</p>
<h3>Burke</h3>
<p>Edmund Burke (Reflexões sobre a Revolução na França, 1790) criticou o racionalismo abstrato inspirado em Rousseau, defendendo tradição e prudência ${tag('fato')}.</p>
<h3>Kant leitor de Rousseau</h3>
<p>Kant disse que Rousseau o "endireitou", ensinando-o a honrar os homens; a autonomia kantiana deve muito à ideia de obedecer à lei que se dá a si mesmo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Leo Strauss, Direito Natural e História (1953).' }, { texto: 'Edmund Burke, Reflexões sobre a Revolução na França (1790).' }],
    exercicios: [
      mc('"Guerra de todos contra todos" é de:', ['Locke', 'Hobbes', 'Rousseau', 'Burke'], 1, 'Leviatã.'),
      mc('As "ondas da modernidade" são tese de:', ['Strauss', 'Talmon', 'Burke', 'Arendt'], 0, 'Direito Natural e História.'),
      mc('Burke criticou:', ['A Revolução Americana', 'A Revolução Francesa', 'A Reforma', 'O feudalismo'], 1, '1790.'),
      disc('Compare os estados de natureza de Hobbes, Locke e Rousseau e as consequências políticas de cada um.', ['Expõe os três', 'Compara', 'Liga a consequências', 'Conclusão'])],
  },
}),

aula({
  id: 'm9-7', titulo: 'Kant: o problema crítico',
  aprendera: ['A pergunta da Crítica da Razão Pura', 'Juízos analíticos, sintéticos, a priori e a posteriori', 'A "revolução copernicana"', 'Fenômeno e coisa em si; os limites da metafísica'],
  prereq: ['Aula 5 deste módulo: Hume'],
  explicacao: `
<h3>Entre racionalismo e empirismo</h3>
<p>Immanuel Kant (1724–1804), em Königsberg, quis responder ao ceticismo de Hume sem voltar ao "dogmatismo" de Leibniz e Wolff ${tag('interpretacao')}. A Crítica da Razão Pura (1781; 2ª ed. 1787) examina o que a razão pode conhecer independentemente da experiência ${tag('fato')}.</p>
<h3>Tipos de juízo</h3>
<ul>
<li><strong>Analítico</strong>: o predicado está contido no sujeito ("todo corpo é extenso").</li>
<li><strong>Sintético</strong>: o predicado acrescenta algo ("todo corpo é pesado").</li>
<li><strong>A priori</strong>: independente da experiência, necessário e universal.</li>
<li><strong>A posteriori</strong>: baseado na experiência.</li>
</ul>
<p>A pergunta central: "como são possíveis juízos sintéticos a priori?" — Kant os vê na matemática ("7 + 5 = 12") e nos princípios da física ("todo evento tem causa") ${tag('fato')}.</p>
<h3>A revolução copernicana</h3>
<p>No prefácio da 2ª edição, Kant propõe: em vez de supor que o conhecimento se regula pelos objetos, supor que os objetos (como fenômenos) se regulam pelo nosso modo de conhecer ${tag('fato')}.</p>
<h3>A estrutura</h3>
<p>Espaço e tempo são formas a priori da sensibilidade (Estética transcendental). As categorias (como causalidade e substância) são conceitos puros do entendimento (Analítica). "Pensamentos sem conteúdo são vazios; intuições sem conceitos são cegas" ${tag('fato')}.</p>
<h3>Os limites</h3>
<p>Conhecemos fenômenos, não coisas em si. Quando a razão aplica categorias além da experiência (alma, mundo como totalidade, Deus), cai em ilusões: paralogismos, antinomias e ideal (Dialética) ${tag('argumento')}. Kant critica as provas de Deus: o argumento ontológico falha porque "ser não é um predicado real" ${tag('fato')}. "Tive de suprimir o saber para dar lugar à fé" (prefácio B) ${tag('fato')}.</p>`,
  vocabulario: [['Sintético a priori', 'Juízo que amplia o conhecimento e é necessário.'], ['Revolução copernicana', 'Objetos regulados pelo modo de conhecer.'], ['Categorias', 'Conceitos puros do entendimento.'], ['Fenômeno', 'O objeto como aparece a nós.'], ['Coisa em si', 'O objeto independente de nós, incognoscível.']],
  exemplos: '<p>Óculos azuis que você não pode tirar: tudo aparece azulado. Kant diz que espaço, tempo e categorias são como esses óculos — com a diferença de que não são defeito, mas condição de qualquer experiência.</p>',
  contexto: `<p>Kant publicou também os Prolegômenos (1783), versão mais acessível da Crítica ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a metafísica especulativa falha (reconstruído)', tag: 'argumento',
    premissas: ['O conhecimento exige conceitos aplicados a intuições sensíveis.', 'Deus, a alma e o mundo como totalidade não são dados em intuição sensível.', 'Logo, não há conhecimento teórico deles; só pensamento.'],
    conclusao: 'Portanto, a metafísica especulativa não é ciência; mas a razão prática pode postular Deus, liberdade e imortalidade.',
    nota: 'Tomistas respondem que o intelecto conhece o ser por abstração a partir dos sensíveis, e que a causalidade não é só categoria mental (Módulos 7 e 8).' },
  objecoes: [{ objecao: 'Se a coisa em si é incognoscível, como sabemos que ela existe e causa as sensações? (F. H. Jacobi)', tag: 'debate', resposta: 'Jacobi disse que sem a coisa em si não se entra no sistema, e com ela não se fica. Leitores de Kant (Allison) propõem que fenômeno e coisa em si são dois aspectos, não dois mundos.' }],
  aplicacao: '<p>Classifique cinco juízos (de matemática, física, moral, teologia, cotidiano) como analítico/sintético e a priori/a posteriori.</p>',
  fonte: { obra: 'Kant, Crítica da Razão Pura, prefácio da 2ª edição e Introdução', link: null, orientacao: '<p>Leia o prefácio B (revolução copernicana) e a Introdução (tipos de juízo). Faça a tabela dos juízos.</p>' },
  perguntas: [
    { p: 'Qual a pergunta central da Crítica?', r: 'Como são possíveis juízos sintéticos a priori?' },
    { p: 'O que é a revolução copernicana?', r: 'Supor que os objetos se regulam pelo nosso modo de conhecer.' },
    { p: 'Por que o argumento ontológico falha para Kant?', r: 'Porque ser não é predicado real.' },
  ],
  exercicios: [
    mc('"Todo corpo é extenso" é, para Kant:', ['Sintético a priori', 'Analítico', 'Sintético a posteriori', 'Contraditório'], 1, 'Predicado contido no sujeito.'),
    mc('Espaço e tempo são:', ['Coisas em si', 'Formas a priori da sensibilidade', 'Categorias', 'Ideias da razão'], 1, 'Estética transcendental.'),
    mc('"Pensamentos sem conteúdo são vazios..." completa-se com:', ['"intuições sem conceitos são cegas"', '"sentidos enganam"', '"Deus existe"', '"ser é ser percebido"'], 0, 'Lógica transcendental.'),
    mc('A objeção da coisa em si é de:', ['Hegel', 'Jacobi', 'Fichte', 'Hume'], 1, 'Entrar e permanecer no sistema.'),
    disc('A crítica kantiana à metafísica atinge as cinco vias de Tomás? Argumente.', ['Expõe Kant', 'Expõe Tomás', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Analítico/sintético; a priori/a posteriori.', 'Revolução copernicana.', 'Formas da sensibilidade e categorias.', 'Fenômeno e coisa em si.', 'Limites da metafísica.'],
  referencias: [{ texto: 'Kant, Crítica da Razão Pura (1781/1787).' }, { texto: 'Kant, Prolegômenos (1783).' }, { texto: 'Henry Allison, Kant\'s Transcendental Idealism (1983).' }],
  revisao: [['Sintético a priori', 'Pergunta central da Crítica.'], ['Revolução copernicana', 'Prefácio B.'], ['Ser não é predicado real', 'Crítica ao argumento ontológico.']],
  avancado: {
    texto: `<h3>Antinomias</h3>
<p>A razão demonstra com igual força teses opostas: o mundo tem começo no tempo / não tem; há liberdade / tudo é natureza ${tag('fato')}. Kant resolve as duas primeiras declarando ambas falsas; as duas últimas, mostrando que ambas podem ser verdadeiras em sentidos diferentes (fenômeno/coisa em si) ${tag('argumento')}.</p>
<h3>Sintético a priori e a geometria</h3>
<p>Geometrias não euclidianas (século XIX) e a relatividade geral desafiaram a tese de que a geometria euclidiana é a priori ${tag('debate')}. Neokantianos e Reichenbach discutiram o "a priori relativizado" ${tag('interpretacao')}.</p>
<h3>Quine e a distinção analítico/sintético</h3>
<p>W. V. O. Quine ("Dois dogmas do empirismo", 1951) atacou a própria distinção analítico/sintético ${tag('fato')}.</p>`,
    leituras: [{ texto: 'W. V. O. Quine, "Dois dogmas do empirismo" (1951).' }, { texto: 'Kant, Crítica da Razão Pura, Dialética, antinomias.' }],
    exercicios: [
      mc('"Dois dogmas do empirismo" é de:', ['Carnap', 'Quine', 'Popper', 'Reichenbach'], 1, '1951.'),
      mc('A terceira antinomia trata de:', ['Começo do mundo', 'Liberdade e natureza', 'Ser necessário', 'Partes simples'], 1, 'Liberdade.'),
      mc('O que desafiou a tese da geometria euclidiana a priori?', ['A mecânica newtoniana', 'Geometrias não euclidianas e a relatividade', 'A lógica de Frege', 'O darwinismo'], 1, 'Século XIX–XX.'),
      disc('A física moderna refuta o sintético a priori de Kant? Avalie.', ['Expõe Kant', 'Expõe o desafio', 'Considera respostas', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm9-8', titulo: 'Kant: a moral do dever',
  aprendera: ['A boa vontade e o dever', 'Imperativos hipotéticos e categórico', 'As formulações do imperativo categórico', 'Autonomia e os postulados da razão prática'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>A boa vontade</h3>
<p>A Fundamentação da Metafísica dos Costumes (1785) começa: "Nada é possível pensar no mundo, ou fora dele, que possa ser considerado bom sem limitação, a não ser uma boa vontade" ${tag('fato')}. Talentos e fortuna podem servir ao mal; a boa vontade é boa em si.</p>
<h3>Dever</h3>
<p>Uma ação tem valor moral quando feita <strong>por dever</strong>, não apenas <strong>conforme o dever</strong>. O comerciante honesto por interesse age conforme o dever, mas não por dever ${tag('fato')}.</p>
<h3>Imperativos</h3>
<p>Hipotéticos: "se queres X, faze Y". Categórico: ordena incondicionalmente ${tag('fato')}.</p>
<h3>Três formulações</h3>
<ol>
<li><strong>Lei universal</strong>: "Age apenas segundo a máxima pela qual possas querer ao mesmo tempo que se torne lei universal."</li>
<li><strong>Humanidade</strong>: "Age de tal maneira que uses a humanidade, tanto na tua pessoa como na de qualquer outro, sempre ao mesmo tempo como fim e nunca simplesmente como meio."</li>
<li><strong>Autonomia / reino dos fins</strong>: a vontade de todo ser racional como legisladora universal ${tag('fato')}.</li>
</ol>
<h3>Exemplo: a falsa promessa</h3>
<p>Se todos prometessem falsamente quando em apuros, a própria instituição da promessa desapareceria: a máxima não pode ser universalizada sem contradição ${tag('argumento')}.</p>
<h3>Autonomia</h3>
<p>A vontade moral dá a lei a si mesma; obedecer por medo de castigo ou por desejo de felicidade é "heteronomia" ${tag('fato')}. Na Crítica da Razão Prática (1788), Kant postula liberdade, imortalidade da alma e existência de Deus como condições do sumo bem ${tag('argumento')}.</p>`,
  vocabulario: [['Boa vontade', 'O único bem sem restrição.'], ['Por dever', 'Motivada pelo respeito à lei moral.'], ['Imperativo categórico', 'Ordem incondicional.'], ['Autonomia', 'Vontade que dá a lei a si mesma.'], ['Postulados', 'Liberdade, imortalidade, Deus.']],
  exemplos: '<p>Você devolve uma carteira achada. Se o faz para ganhar recompensa, age conforme o dever; se o faz porque é o correto, mesmo sem testemunhas, age por dever.</p>',
  contexto: `<p>A Metafísica dos Costumes (1797) aplica os princípios ao direito e à virtude ${tag('fato')}.</p>`,
  argumento: { titulo: 'A falsa promessa (Fundamentação, seção II, reconstruído)', tag: 'argumento',
    premissas: ['Máxima: "quando em apuros, prometerei falsamente".', 'Se universal, ninguém acreditaria em promessas.', 'Então a máxima se destrói ao ser universalizada.'],
    conclusao: 'Logo, prometer falsamente é contrário ao dever.',
    nota: 'Benjamin Constant objetou que Kant proibiria mentir até ao assassino que procura um amigo; Kant respondeu no ensaio "Sobre um suposto direito de mentir" (1797), mantendo a proibição.' },
  objecoes: [{ objecao: 'Hegel: o imperativo categórico é formalismo vazio; qualquer máxima consistente passa no teste.', tag: 'debate', resposta: 'Kantianos (Korsgaard, O\'Neill) mostram que o teste exclui muitas máximas e que a fórmula da humanidade dá conteúdo. A tradição das virtudes (MacIntyre) insiste que a moral exige fins e tradição.' }],
  aplicacao: '<p>Escolha uma máxima sua e teste-a com a primeira e a segunda formulação.</p>',
  fonte: { obra: 'Kant, Fundamentação da Metafísica dos Costumes, seções I e II', link: null, orientacao: '<p>Leia as seções I e II. Identifique as formulações e os quatro exemplos (suicídio, falsa promessa, talentos, beneficência).</p>' },
  perguntas: [
    { p: 'O que é bom sem limitação?', r: 'A boa vontade.' },
    { p: 'Diferença entre "por dever" e "conforme o dever"?', r: 'Por dever: motivação moral; conforme: só a ação externa coincide.' },
    { p: 'Quais os postulados da razão prática?', r: 'Liberdade, imortalidade, Deus.' },
  ],
  exercicios: [
    mc('"Se queres saúde, faze exercício" é imperativo:', ['Categórico', 'Hipotético', 'Moral', 'Autônomo'], 1, 'Condicional.'),
    mc('A fórmula da humanidade proíbe tratar pessoas:', ['Como fins', 'Simplesmente como meios', 'Com respeito', 'Como iguais'], 1, 'Segunda formulação.'),
    mc('A objeção do formalismo é de:', ['Constant', 'Hegel', 'Hume', 'Mill'], 1, 'Filosofia do Direito.'),
    mc('O debate sobre mentir ao assassino envolveu:', ['Kant e Constant', 'Kant e Hume', 'Kant e Hegel', 'Kant e Rousseau'], 0, '1797.'),
    disc('Compare a moral de Kant com a ética das virtudes de Tomás: fundamento, papel da felicidade, papel de Deus.', ['Expõe Kant', 'Expõe Tomás', 'Compara três pontos', 'Conclusão justificada'])],
  resumo: ['Boa vontade.', 'Por dever × conforme o dever.', 'Imperativo categórico em três fórmulas.', 'Autonomia.', 'Postulados.'],
  referencias: [{ texto: 'Kant, Fundamentação da Metafísica dos Costumes (1785).' }, { texto: 'Kant, Crítica da Razão Prática (1788).' }, { texto: 'Christine Korsgaard, Creating the Kingdom of Ends (1996).' }],
  revisao: [['Imperativo categórico', 'Lei universal, humanidade, autonomia.'], ['Por dever', 'Fundamentação I.'], ['Postulados', 'Crítica da Razão Prática.']],
  avancado: {
    texto: `<h3>Religião nos limites da simples razão</h3>
<p>Em A Religião nos Limites da Simples Razão (1793), Kant fala de um "mal radical": propensão a inverter a ordem dos motivos, pondo o interesse acima da lei moral ${tag('fato')}. Teólogos discutem a proximidade e a distância em relação ao pecado original ${tag('debate')}.</p>
<h3>Autonomia e teonomia</h3>
<p>João Paulo II, na Veritatis splendor (§§38–41), fala de "teonomia participada": a razão humana é legisladora porque participa da sabedoria divina, contra uma autonomia absoluta ${tag('doutrina')}.</p>
<h3>Kant e a dignidade</h3>
<p>"No reino dos fins tudo tem um preço ou uma dignidade": o que tem dignidade não tem equivalente (Fundamentação II) ${tag('fato')}. A noção influenciou declarações de direitos ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Kant, A Religião nos Limites da Simples Razão (1793).' }, { texto: 'João Paulo II, Veritatis splendor, §§38–41.' }],
    exercicios: [
      mc('O "mal radical" está em:', ['Fundamentação', 'A Religião nos Limites da Simples Razão', 'Crítica da Razão Pura', 'Metafísica dos Costumes'], 1, '1793.'),
      mc('"Teonomia participada" é expressão de:', ['Kant', 'Veritatis splendor', 'Hegel', 'Tomás'], 1, '§41.'),
      mc('Para Kant, o que tem dignidade:', ['Tem preço', 'Não tem equivalente', 'É útil', 'É natural'], 1, 'Reino dos fins.'),
      disc('A autonomia kantiana é compatível com a lei natural católica? Use a noção de teonomia participada.', ['Expõe autonomia', 'Expõe teonomia', 'Avalia', 'Conclusão justificada'])],
  },
}),

avaliacao('m9-9', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>O método e as Meditações de Descartes, Pascal, o empirismo de Locke e Hume, o contrato de Rousseau e a filosofia crítica e moral de Kant.</p>
<h3>Critério do Degrau 7</h3>
<p>Você deve distinguir racionalismo e empirismo, reconstruir a crítica de Hume à causalidade e explicar a resposta de Kant. A primeira discursiva treina isso.</p>`,
[
  disc('Reconstrua a crítica de Hume à causalidade e a resposta de Kant. Em seguida, avalie ambas a partir do realismo aristotélico-tomista.', ['Hume fiel', 'Kant fiel', 'Perspectiva realista', 'Avaliação argumentada']),
  disc('Compare racionalismo (Descartes) e empirismo (Locke) quanto à origem das ideias, ao critério de verdade e ao lugar de Deus.', ['Três pontos de comparação', 'Textos citados', 'Objeções', 'Conclusão']),
  disc('Escolha Pascal, Rousseau ou Kant e discuta uma tese com sua objeção mais forte e a melhor resposta.', ['Tese fiel', 'Objeção forte', 'Resposta', 'Avaliação']),
]),
];
