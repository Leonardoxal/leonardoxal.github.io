// Módulo 7 — aulas 7 a 12.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm7-7', titulo: 'As cinco vias',
  aprendera: ['O texto e a estrutura de Suma I, q. 2, a. 3', 'A reconstrução de cada uma das cinco vias', 'O que as vias provam e o que não provam', 'As principais objeções a cada via'],
  prereq: ['Aulas 5 e 6 deste módulo'],
  explicacao: `
<h3>O lugar das vias</h3>
<p>Tomás responde à pergunta "se Deus existe" em um único artigo da Suma (I, q. 2, a. 3), depois de explicar que a existência de Deus não é evidente para nós (a. 1) e pode ser demonstrada pelos efeitos (a. 2) ${tag('fato')}. As vias são resumos, não tratados; Tomás as desenvolve mais na Suma Contra os Gentios I, 13 ${tag('fato')}.</p>
<h3>As cinco vias (reconstrução resumida)</h3>
<ol>
<li><strong>Pelo movimento</strong>: há coisas que se movem (passam da potência ao ato); nada passa da potência ao ato senão por algo em ato; não se pode ir ao infinito numa série essencial de motores; logo, há um primeiro motor imóvel.</li>
<li><strong>Pela causa eficiente</strong>: há uma ordem de causas eficientes; nada é causa de si; a série essencial não pode ser infinita; logo, há uma primeira causa eficiente.</li>
<li><strong>Pela contingência</strong>: há coisas que podem ser e não ser; se tudo fosse assim, em algum momento nada teria existido, e nada existiria agora; logo, há algo necessário, e, em última instância, um necessário por si.</li>
<li><strong>Pelos graus de perfeição</strong>: encontramos coisas mais e menos boas, verdadeiras, nobres; o "mais" e o "menos" se dizem por aproximação a um máximo; o máximo em um gênero é causa de tudo o que está nesse gênero; logo, há algo que é causa do ser, da bondade e de toda perfeição.</li>
<li><strong>Pelo governo das coisas</strong>: coisas sem conhecimento agem sempre ou quase sempre do mesmo modo para obter o melhor; o que não tem conhecimento só tende a um fim se dirigido por alguém que conhece; logo, há um ser inteligente que ordena as coisas naturais ao seu fim ${tag('argumento')}.</li>
</ol>
<p>Cada via termina: "e a isso todos chamam Deus". A identificação completa com o Deus cristão (uno, simples, perfeito, bom, inteligente) é feita nas questões 3–26 ${tag('interpretacao')}.</p>
<h3>O que as vias não são</h3>
<ul>
<li>Não são argumentos sobre o começo do universo no tempo (Tomás admite que a razão não prova esse começo).</li>
<li>Não são argumentos de "Deus das lacunas" (preencher o que a ciência não explica): partem de fatos gerais (mudança, causalidade, contingência).</li>
<li>A quinta via não é o argumento do relojoeiro de Paley: fala da tendência natural a fins, não da complexidade de órgãos ${tag('interpretacao')}.</li>
</ul>`,
  vocabulario: [['Primeiro motor', 'O que move sem ser movido (1ª via).'], ['Causa incausada', 'Primeira causa eficiente (2ª via).'], ['Necessário por si', 'O que não recebe de outro sua necessidade (3ª via).'], ['Graus de perfeição', 'Ponto de partida da 4ª via.'], ['Governo do mundo', 'Tendência das coisas naturais a fins (5ª via).']],
  exemplos: '<p>Primeira via em linguagem simples: a água esquenta porque o fogo está quente; o fogo queima porque há combustível em ato... Se nada na cadeia estivesse em ato por si, nada estaria aquecendo agora. Note: "agora", não "no começo".</p>',
  contexto: `<p>As vias têm fontes: Aristóteles (motor imóvel), Avicena (contingência e necessidade), Platão e Agostinho (graus de perfeição), estoicos e Padres (ordem do mundo) ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'A terceira via (Suma I, q. 2, a. 3, reconstrução)', tag: 'argumento',
    premissas: ['Há coisas que podem ser e não ser (contingentes).', 'O que pode não ser, em algum momento não é.', 'Se tudo pudesse não ser, em algum momento nada teria sido; e então nada seria agora, pois o que não é só começa a ser por algo que é.', 'Mas há coisas agora.'],
    conclusao: 'Logo, nem tudo é contingente: há algo necessário; e, como não se pode ir ao infinito em necessários causados por outro, há algo necessário por si, causa da necessidade dos outros.',
    nota: 'A premissa 3 é a mais criticada: comete a "falácia de quantificador" (de "cada coisa em algum momento não é" para "em algum momento nada é")? Intérpretes tomistas respondem com leituras que não exigem esse passo.' },
  objecoes: [
    { objecao: 'Por que a série não pode ser infinita?', tag: 'debate', resposta: 'Tomás nega o infinito apenas em séries essencialmente ordenadas, em que os intermediários não têm poder próprio: sem um primeiro, não haveria causação alguma agora.' },
    { objecao: 'Mesmo que haja primeiro motor, por que seria o Deus cristão?', tag: 'debate', resposta: 'As vias pretendem provar um primeiro princípio; os atributos (unicidade, inteligência, bondade) são deduzidos depois (q. 3–26). A Trindade e a Encarnação não são provadas: são reveladas.' },
  ],
  aplicacao: '<p>Escolha uma via e escreva-a em premissas numeradas, com uma objeção e uma resposta. Depois explique por que ela não depende de o universo ter começado.</p>',
  fonte: { obra: 'Tomás, Suma I, q. 2, a. 1–3', link: LINKS.sumaQ2, orientacao: '<p>Leia os três artigos inteiros, com as objeções. Note que as objeções do a. 3 (o mal; a natureza basta) são respondidas no próprio artigo.</p>' },
  perguntas: [
    { p: 'Qual a primeira via?', r: 'A do movimento: há um primeiro motor imóvel.' },
    { p: 'As vias provam que o universo começou?', r: 'Não; Tomás admite que a razão não prova o começo do mundo.' },
    { p: 'Em que a quinta via difere do argumento de Paley?', r: 'Fala da tendência natural a fins, não da complexidade de artefatos.' },
  ],
  exercicios: [
    mc('A via que parte de coisas que podem ser e não ser é a:', ['Primeira', 'Segunda', 'Terceira', 'Quinta'], 2, 'Contingência.'),
    mc('A quarta via parte de:', ['Movimento', 'Graus de perfeição', 'Governo do mundo', 'Causa eficiente'], 1, 'Mais e menos bom, verdadeiro, nobre.'),
    mc('As objeções do artigo 3 são:', ['A Trindade e a Encarnação', 'O mal e a suficiência da natureza', 'O infinito e o tempo', 'Kant e Hume'], 1, 'Suma I, q. 2, a. 3, obj. 1–2.'),
    mc('O infinito é negado por Tomás nas séries:', ['Acidentais', 'Essenciais', 'Temporais', 'Todas'], 1, 'Por isso as vias não dependem do começo do tempo.'),
    disc('Qual das cinco vias é a mais forte? Reconstrua-a, apresente a objeção mais séria e responda.', ['Reconstrução fiel', 'Objeção séria', 'Resposta argumentada', 'Avaliação honesta'])],
  resumo: ['Suma I, q. 2, a. 3.', 'Movimento, causa, contingência, graus, governo.', 'Não dependem do começo do tempo.', 'Atributos deduzidos depois.', 'Objeções: infinito, identidade com Deus, mal.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma I, q. 2.', link: LINKS.sumaQ2 }, { texto: 'Tomás de Aquino, Suma Contra os Gentios I, 13 e 15.' }, { texto: 'Edward Feser, Five Proofs of the Existence of God (2017).' }],
  revisao: [['Cinco vias', 'Movimento, causa eficiente, contingência, graus de perfeição, governo.'], ['Séries essenciais', 'O infinito é negado nelas, não nas acidentais.'], ['Suma I, q. 2, a. 3', 'Lugar das cinco vias.']],
  avancado: {
    texto: `<h3>Críticas clássicas</h3>
<p>Anthony Kenny (The Five Ways, 1969) atacou a física aristotélica pressuposta nas vias; Feser e outros responderam que a noção metafísica de potência e ato não depende da física medieval ${tag('debate')}. J. L. Mackie (The Miracle of Theism, 1982) aceitou que a série essencial é o ponto forte e o atacou: por que não poderia haver uma série infinita de causas simultâneas? ${tag('debate')}</p>
<h3>A terceira via e a falácia de quantificador</h3>
<p>A passagem de "cada contingente em algum tempo não existe" para "em algum tempo nada existe" parece inválida. Leituras recentes propõem que Tomás supõe um tempo infinito passado (por hipótese) ou que a premissa se refere a coisas corruptíveis numa duração infinita ${tag('debate')}.</p>
<h3>A quarta via</h3>
<p>É a via mais platônica. Sua força depende de as perfeições serem "transcendentais" (ser, verdade, bondade), não quantidades físicas: o argumento não diz que há um "máximo calor" ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Anthony Kenny, The Five Ways (1969).' }, { texto: 'Edward Feser, Aquinas: A Beginner\'s Guide (2009), cap. 3.' }],
    exercicios: [
      mc('"The Five Ways" (1969) é de:', ['Feser', 'Kenny', 'Mackie', 'Davies'], 1, 'Anthony Kenny.'),
      mc('A acusação de "falácia de quantificador" se dirige sobretudo à:', ['Primeira via', 'Terceira via', 'Quarta via', 'Quinta via'], 1, 'Contingência.'),
      mc('A quarta via depende de perfeições:', ['Físicas', 'Transcendentais', 'Matemáticas', 'Morais apenas'], 1, 'Ser, verdade, bondade.'),
      disc('A física moderna invalida as vias? Responda a Kenny distinguindo física e metafísica.', ['Expõe Kenny', 'Distingue os níveis', 'Responde', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-8', titulo: 'O argumento ontológico e suas críticas',
  aprendera: ['O argumento de Anselmo no Proslógio 2–3', 'As críticas de Gaunilo, Tomás e Kant', 'A versão de Descartes', 'A versão modal de Plantinga'],
  prereq: ['Aula 2: Ser, ente e existência'],
  explicacao: `
<h3>Anselmo (Proslógio, c. 1077–1078)</h3>
<p>Anselmo busca "um único argumento" que bastasse para provar que Deus existe ${tag('fato')}. Deus é "aquilo maior do que o qual nada pode ser pensado". Até o insensato do Salmo 14 ("não há Deus") entende essa expressão; logo, Deus existe no intelecto. Mas o que existe no intelecto e também na realidade é maior do que o que existe só no intelecto. Se Deus existisse só no intelecto, poderíamos pensar algo maior; o que é contraditório. Logo, Deus existe também na realidade (cap. 2) ${tag('argumento')}. No capítulo 3, Anselmo acrescenta: Deus não pode sequer ser pensado como não existente.</p>
<h3>Gaunilo</h3>
<p>O monge Gaunilo respondeu com a ilha perdida: pense na ilha mais perfeita que se possa pensar; pelo mesmo raciocínio, ela deveria existir ${tag('fato')}. Anselmo replicou que o argumento só vale para aquilo maior do que o qual nada se pode pensar, não para a "maior ilha".</p>
<h3>Tomás</h3>
<p>Tomás rejeita o argumento: nem todos entendem "Deus" desse modo; e, mesmo entendendo, não se segue que o significado exista na realidade, mas só no intelecto (Suma I, q. 2, a. 1, ad 2) ${tag('fato')}. Para nós, a existência de Deus não é evidente: só se prova pelos efeitos.</p>
<h3>Descartes</h3>
<p>Na Meditação V, Descartes argumenta: a existência pertence à essência de um ser sumamente perfeito, assim como a soma dos ângulos igual a dois retos pertence à essência do triângulo ${tag('fato')}.</p>
<h3>Kant</h3>
<p>Existência não é um predicado real; não acrescenta nada ao conceito. Logo, não se pode tirar a existência da análise de um conceito (aula 2) ${tag('argumento')}.</p>
<h3>Plantinga</h3>
<p>Alvin Plantinga (The Nature of Necessity, 1974) propôs uma versão modal: se é possível que exista um ser maximamente grande (com excelência máxima em todos os mundos possíveis), então ele existe em todos os mundos, inclusive no nosso ${tag('argumento')}. O argumento é válido no sistema modal S5; tudo depende da premissa de possibilidade, que Plantinga admite não ser demonstrada ${tag('debate')}.</p>`,
  vocabulario: [['Id quo maius cogitari nequit', 'Aquilo maior do que o qual nada pode ser pensado.'], ['Ilha perdida', 'Paródia de Gaunilo.'], ['Excelência máxima', 'Onisciência, onipotência, bondade perfeita.'], ['Grandeza máxima', 'Excelência máxima em todos os mundos possíveis.'], ['S5', 'Sistema de lógica modal em que o possivelmente necessário é necessário.']],
  exemplos: '<p>Teste do Gaunilo: troque "Deus" por "a pizza mais perfeita possível". Se o argumento ainda "funciona", há algo errado. A resposta de Anselmo é que a pizza, como qualquer coisa finita, sempre pode ser pensada maior.</p>',
  contexto: `<p>O nome "argumento ontológico" foi dado por Kant; Anselmo não o usa ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento de Proslógio 2 (reconstrução)', tag: 'argumento',
    premissas: ['Deus é aquilo maior do que o qual nada pode ser pensado.', 'Deus existe ao menos no intelecto (quem ouve a expressão a entende).', 'Existir na realidade é maior do que existir só no intelecto.', 'Se Deus existisse só no intelecto, poderia ser pensado algo maior — um Deus existente na realidade.'],
    conclusao: 'Logo, Deus existe no intelecto e na realidade.',
    nota: 'A premissa 3 trata a existência como uma "grandeza" — exatamente o que Kant contesta.' },
  objecoes: [{ objecao: 'A versão modal faz petição de princípio: aceitar que é possível um ser necessário já é aceitar que ele existe.', tag: 'debate', resposta: 'Plantinga reconhece que o argumento não obriga quem nega a premissa, mas sustenta que aceitá-la é racional. Críticos propõem uma paródia: "é possível que não exista um ser maximamente grande", que leva à conclusão oposta.' }],
  aplicacao: '<p>Escreva a versão de Anselmo, a de Descartes e a de Plantinga em premissas, lado a lado. Qual premissa é a mais frágil em cada uma?</p>',
  fonte: { obra: 'Anselmo, Proslógio, proêmio e caps. 1–4; Resposta a Gaunilo', link: null, orientacao: '<p>Leia o Proslógio, capítulos 2–4, e a Resposta de Anselmo a Gaunilo. Reconstrua a resposta à ilha perdida.</p>' },
  perguntas: [
    { p: 'Como Anselmo define Deus?', r: 'Aquilo maior do que o qual nada pode ser pensado.' },
    { p: 'O que propôs Gaunilo?', r: 'A ilha perdida: pelo mesmo argumento, a ilha mais perfeita existiria.' },
    { p: 'Por que Tomás rejeita o argumento?', r: 'Porque do significado no intelecto não se segue a existência real; para nós, Deus se prova pelos efeitos.' },
  ],
  exercicios: [
    mc('O Proslógio foi escrito por:', ['Agostinho', 'Anselmo', 'Tomás', 'Boaventura'], 1, 'C. 1077–1078.'),
    mc('O nome "argumento ontológico" vem de:', ['Anselmo', 'Kant', 'Descartes', 'Tomás'], 1, 'Kant.'),
    mc('A versão modal de Plantinga depende sobretudo da premissa:', ['Existência é predicado', 'É possível um ser maximamente grande', 'Deus é causa', 'Há mal'], 1, 'Premissa de possibilidade.'),
    mc('Tomás, sobre o argumento de Anselmo:', ['Aceita', 'Rejeita', 'Ignora', 'Melhora'], 1, 'Suma I, q. 2, a. 1, ad 2.'),
    disc('O argumento ontológico prova algo? Avalie com Gaunilo, Kant e Plantinga.', ['Reconstrói Anselmo', 'Expõe as três críticas/versões', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Anselmo: aquilo maior do que o qual nada pode ser pensado.', 'Gaunilo: a ilha perdida.', 'Tomás: só pelos efeitos.', 'Descartes: existência na essência do perfeito.', 'Kant: existência não é predicado.', 'Plantinga: versão modal.'],
  referencias: [{ texto: 'Anselmo, Proslógio e Resposta a Gaunilo.' }, { texto: 'Descartes, Meditação V.' }, { texto: 'Alvin Plantinga, The Nature of Necessity (1974), cap. X.' }],
  revisao: [['Proslógio 2', 'Aquilo maior do que o qual nada pode ser pensado.'], ['Gaunilo', 'A ilha perdida.'], ['Kant', 'Existência não é predicado real.']],
  avancado: {
    texto: `<h3>Proslógio 3 e Malcolm</h3>
<p>Norman Malcolm ("Anselm\'s Ontological Arguments", 1960) e Charles Hartshorne sustentaram que o segundo argumento (cap. 3), sobre a existência necessária, é superior ao primeiro e escapa da crítica de Kant ${tag('debate')}.</p>
<h3>O argumento de Gödel</h3>
<p>Kurt Gödel deixou uma versão do argumento ontológico em lógica modal de segunda ordem (manuscrito de 1970, publicado depois de sua morte). Verificações por computador (2013) confirmaram sua validade formal; o debate é sobre os axiomas ${tag('fato')}.</p>
<h3>Leitura de Barth</h3>
<p>Karl Barth (Fides quaerens intellectum, 1931) leu o Proslógio não como prova para incrédulos, mas como meditação de fé que busca compreender — leitura que muda o sentido do argumento ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Norman Malcolm, "Anselm\'s Ontological Arguments" (1960).' }, { texto: 'Karl Barth, Fides quaerens intellectum (1931).' }],
    exercicios: [
      mc('Malcolm privilegiou o argumento de:', ['Proslógio 2', 'Proslógio 3', 'Monológio', 'Meditação V'], 1, 'Existência necessária.'),
      mc('A versão de Gödel usa:', ['Lógica proposicional', 'Lógica modal de segunda ordem', 'Silogística', 'Indução'], 1, 'Manuscrito de 1970.'),
      mc('Barth leu o Proslógio como:', ['Prova para ateus', 'Meditação de fé que busca compreender', 'Erro lógico', 'Texto neoplatônico'], 1, '1931.'),
      disc('A leitura de Barth enfraquece ou fortalece o argumento de Anselmo? Argumente.', ['Expõe a leitura', 'Relaciona com o lema "fides quaerens intellectum"', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-9', titulo: 'O argumento teleológico',
  aprendera: ['O argumento do relojoeiro de Paley', 'As críticas de Hume e o impacto de Darwin', 'O argumento do ajuste fino', 'A diferença entre o argumento do desígnio e a quinta via'],
  explicacao: `
<h3>Paley</h3>
<p>William Paley (Teologia Natural, 1802): se encontrasse um relógio num campo, eu inferiria um relojoeiro, pela adaptação das partes a um fim; o olho é ainda mais complexo e adaptado; logo, há um projetista ${tag('argumento')}.</p>
<h3>Hume</h3>
<p>Antes de Paley, Hume (Diálogos sobre a Religião Natural, 1779) já havia objetado, pela voz de Filão ${tag('fato')}: a analogia entre o universo e uma máquina é fraca; mesmo que valesse, provaria um projetista finito, talvez vários, talvez imperfeito ("obra de um deus criança"); e a ordem poderia vir da matéria em longo tempo.</p>
<h3>Darwin</h3>
<p>A teoria da seleção natural (A Origem das Espécies, 1859) ofereceu uma explicação natural para a adaptação dos organismos, enfraquecendo o argumento biológico de Paley ${tag('fato')}. Darwin escreveu que o velho argumento do desígnio, como lhe parecera em Paley, havia caído ${tag('fato')}.</p>
<h3>O ajuste fino</h3>
<p>Físicos observaram que constantes fundamentais (como a intensidade da gravidade ou a constante cosmológica) estão em faixas muito estreitas compatíveis com a vida ${tag('fato')}. O argumento do ajuste fino conclui: isso é melhor explicado por um projetista do que pelo acaso ${tag('argumento')}. Respostas: o multiverso (com muitos universos, algum teria essas constantes); o princípio antrópico (só observamos universos compatíveis com observadores); a necessidade física desconhecida ${tag('debate')}.</p>
<h3>Quinta via × desígnio</h3>
<p>A quinta via de Tomás não depende da complexidade biológica: parte de que coisas naturais tendem a fins (o fogo tende a aquecer, a semente a árvore). Mesmo que a evolução explique os órgãos, não explicaria por que as leis e disposições naturais são orientadas a resultados determinados ${tag('interpretacao')}.</p>`,
  vocabulario: [['Argumento do desígnio', 'Da ordem ou complexidade a um projetista.'], ['Relojoeiro', 'Analogia de Paley.'], ['Ajuste fino', 'Constantes físicas em faixas estreitas compatíveis com a vida.'], ['Multiverso', 'Hipótese de muitos universos.'], ['Princípio antrópico', 'Só observamos condições compatíveis com observadores.']],
  exemplos: '<p>Um baralho embaralhado sai em ordem perfeita: acaso ou trapaça? O argumento do ajuste fino raciocina de modo semelhante; a resposta do multiverso equivale a dizer que houve trilhões de embaralhamentos.</p>',
  contexto: `<p>Paley era leitura obrigatória em Cambridge quando Darwin estudou lá; Darwin admirou o livro na juventude ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento do ajuste fino (reconstrução)', tag: 'argumento',
    premissas: ['As constantes físicas permitem a vida em faixa estreitíssima.', 'Isso se explica por necessidade física, por acaso ou por desígnio.', 'Não há indício de necessidade física, e o acaso é extremamente improvável.'],
    conclusao: 'Logo, o desígnio é a melhor explicação.',
    nota: 'Inferência para a melhor explicação. O multiverso ataca a premissa 3 (o acaso deixa de ser improvável); críticos do multiverso dizem que ele é especulativo e também precisaria de ajuste.' },
  objecoes: [{ objecao: 'Se estivéssemos num universo sem vida, não estaríamos aqui para perguntar.', tag: 'debate', resposta: 'É o princípio antrópico. John Leslie respondeu com a analogia do pelotão de fuzilamento: se todos os atiradores erram, não basta dizer "se não errassem, eu não estaria aqui"; o fato pede explicação.' }],
  aplicacao: '<p>Compare no Caderno três explicações para o ajuste fino (desígnio, multiverso, necessidade física) usando os critérios da melhor explicação: simplicidade, poder explicativo, coerência.</p>',
  fonte: { obra: 'Hume, Diálogos sobre a Religião Natural, partes II, V e VII', link: null, orientacao: '<p>Leia as partes indicadas e liste as objeções de Filão ao argumento do desígnio. Quais delas se aplicam ao ajuste fino?</p>' },
  perguntas: [
    { p: 'Qual a analogia de Paley?', r: 'O relógio encontrado no campo implica um relojoeiro.' },
    { p: 'Quais as respostas ao ajuste fino?', r: 'Multiverso, princípio antrópico, necessidade física desconhecida.' },
    { p: 'Em que a quinta via difere do argumento de Paley?', r: 'Parte da tendência natural a fins, não da complexidade biológica.' },
  ],
  exercicios: [
    mc('"Teologia Natural" (1802) é de:', ['Hume', 'Paley', 'Darwin', 'Leslie'], 1, 'William Paley.'),
    mc('As críticas de Filão estão em:', ['O Tratado de Hume', 'Os Diálogos de Hume', 'A Origem das Espécies', 'Paley'], 1, '1779.'),
    mc('A analogia do pelotão de fuzilamento responde ao:', ['Multiverso', 'Princípio antrópico', 'Ocasionalismo', 'Kant'], 1, 'John Leslie.'),
    mc('O argumento do ajuste fino é:', ['Dedução', 'Inferência para a melhor explicação', 'Argumento ontológico', 'Falácia'], 1, 'Abdutivo.'),
    disc('Darwin refutou o argumento teleológico? Distinga Paley, a quinta via e o ajuste fino.', ['Distingue os três', 'Aplica Darwin a cada um', 'Considera objeções', 'Conclusão justificada'])],
  resumo: ['Paley e o relojoeiro.', 'Hume (Filão).', 'Darwin.', 'Ajuste fino e respostas.', 'Quinta via ≠ desígnio artefatual.'],
  referencias: [{ texto: 'William Paley, Teologia Natural (1802), cap. 1.' }, { texto: 'David Hume, Diálogos sobre a Religião Natural (1779).' }, { texto: 'John Leslie, Universes (1989).' }],
  revisao: [['Paley', 'Relojoeiro (1802).'], ['Ajuste fino', 'Constantes compatíveis com a vida.'], ['Pelotão de fuzilamento', 'Leslie contra o princípio antrópico.']],
  avancado: {
    texto: `<h3>Probabilidades e o ajuste fino</h3>
<p>Críticos (Timothy McGrew, Lydia McGrew e Eric Vestrup, "Probabilities and the Fine-Tuning Argument", 2001) objetaram que não há medida de probabilidade normalizável sobre um intervalo infinito de valores possíveis das constantes ${tag('debate')}. Robin Collins tentou responder restringindo o intervalo ao "epistemicamente iluminado" ${tag('debate')}.</p>
<h3>A falácia do apostador inverso</h3>
<p>Ian Hacking (1987) argumentou que inferir muitos universos a partir de um universo ajustado é como inferir que houve muitos lançamentos de dados por ter saído um duplo seis agora — a "falácia do apostador inverso" ${tag('debate')}.</p>
<h3>Teleologia sem projetista</h3>
<p>Thomas Nagel (Mente e Cosmos, 2012), ateu, defendeu uma teleologia natural sem Deus, provocando reação forte entre naturalistas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Robin Collins, "The Teleological Argument" (Blackwell Companion to Natural Theology, 2009).' }, { texto: 'Thomas Nagel, Mente e Cosmos (2012).' }],
    exercicios: [
      mc('A "falácia do apostador inverso" foi formulada por:', ['Hacking', 'Leslie', 'Collins', 'Nagel'], 0, '1987.'),
      mc('O problema da normalização afeta:', ['A quinta via', 'O cálculo de probabilidades do ajuste fino', 'O argumento ontológico', 'A terceira via'], 1, 'McGrew e Vestrup.'),
      mc('Nagel defendeu:', ['Desígnio divino', 'Teleologia natural sem Deus', 'Ocasionalismo', 'Ceticismo'], 1, 'Mente e Cosmos.'),
      disc('A hipótese do multiverso comete a falácia do apostador inverso? Argumente.', ['Explica a falácia', 'Aplica ao multiverso', 'Considera resposta', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-10', titulo: 'O problema do mal',
  aprendera: ['O problema lógico e o problema evidencial do mal', 'A defesa do livre-arbítrio de Plantinga', 'As teodiceias de Agostinho e de Ireneu', 'O ceticismo teísta e a resposta cristã'],
  explicacao: `
<h3>O problema</h3>
<p>Se Deus é onipotente, onisciente e perfeitamente bom, por que existe o mal? A pergunta é antiga: Lactâncio atribui a Epicuro um dilema (se quer e não pode, é fraco; se pode e não quer, é mau...) ${tag('fato')}. Tomás a coloca como primeira objeção à existência de Deus (Suma I, q. 2, a. 3, obj. 1) ${tag('fato')}.</p>
<h3>Problema lógico</h3>
<p>J. L. Mackie ("Evil and Omnipotence", 1955) sustentou que as proposições "Deus é onipotente", "Deus é bom" e "o mal existe" são inconsistentes entre si ${tag('argumento')}.</p>
<h3>A defesa do livre-arbítrio</h3>
<p>Plantinga (God, Freedom, and Evil, 1974): basta mostrar que é possível que Deus tenha razão para permitir o mal. Um mundo com criaturas livres que fazem o bem é mais valioso; Deus não pode determinar criaturas livres a sempre escolher o bem; logo, é possível que não pudesse criar um mundo com liberdade e sem mal moral ${tag('argumento')}. Muitos filósofos, inclusive ateus, consideram que essa defesa resolve o problema lógico ${tag('debate')}.</p>
<h3>Problema evidencial</h3>
<p>William Rowe (1979): mesmo sem contradição, o mal intenso e aparentemente inútil (um cervo que morre queimado lentamente num incêndio, sem que ninguém saiba) torna improvável a existência de Deus ${tag('argumento')}.</p>
<h3>Teodiceias</h3>
<ul>
<li><strong>Agostiniana</strong>: o mal é privação; o mal moral vem da liberdade; o natural, em parte, da queda; Deus permite o mal para tirar dele bens maiores ${tag('interpretacao')}.</li>
<li><strong>Ireneana</strong> (John Hick, Evil and the God of Love, 1966): o mundo é um "vale de formação de almas"; o mal é necessário para o crescimento moral ${tag('interpretacao')}.</li>
</ul>
<h3>Ceticismo teísta</h3>
<p>Stephen Wykstra (1984): se Deus existe, é esperado que não vejamos suas razões para permitir muitos males, como uma criança não entende as razões da vacina ${tag('debate')}.</p>
<h3>A resposta cristã</h3>
<p>O Catecismo diz que não há resposta rápida: é o conjunto da fé cristã que responde, e Deus tira o bem do mal (§309–314) ${tag('doutrina')}. A cruz não explica o mal, mas mostra Deus entrando nele ${tag('interpretacao')}.</p>`,
  vocabulario: [['Problema lógico', 'Suposta inconsistência entre Deus e o mal.'], ['Problema evidencial', 'O mal tornaria Deus improvável.'], ['Defesa', 'Mostrar que é possível haver razões, sem dizer quais.'], ['Teodiceia', 'Propor as razões de Deus para permitir o mal.'], ['Ceticismo teísta', 'Não é de esperar que vejamos as razões de Deus.']],
  exemplos: '<p>Mal moral: uma guerra. Mal natural: um terremoto. A defesa do livre-arbítrio cobre o primeiro com mais facilidade; o segundo exige respostas adicionais (leis naturais estáveis, queda, mistério).</p>',
  contexto: `<p>O terremoto de Lisboa (1755) motivou o Poema sobre o desastre de Lisboa de Voltaire e a crítica do otimismo de Leibniz em Cândido (1759) ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento evidencial de Rowe (1979, reconstruído)', tag: 'argumento',
    premissas: ['Existem casos de sofrimento intenso que um ser onipotente e onisciente poderia ter impedido sem perder um bem maior ou permitir um mal igual ou pior.', 'Um ser onisciente e perfeitamente bom impediria todo sofrimento intenso desse tipo.'],
    conclusao: 'Logo, não existe um ser onipotente, onisciente e perfeitamente bom.',
    nota: 'A premissa 1 é sustentada por indução ("não vemos bem maior algum"); o ceticismo teísta ataca precisamente essa inferência.' },
  objecoes: [{ objecao: 'A defesa do livre-arbítrio não explica os males naturais.', tag: 'debate', resposta: 'Respostas: leis naturais estáveis são condição da liberdade e da ação responsável; tradição da queda; ou ação de agentes livres não humanos (Plantinga, só para mostrar possibilidade lógica). Críticos acham as respostas insuficientes diante do sofrimento animal.' }],
  aplicacao: '<p>Escolha um mal concreto (sem nomes de pessoas reais) e avalie qual resposta (defesa, teodiceia, ceticismo teísta) se aplica melhor.</p>',
  fonte: { obra: 'Catecismo §309–314; Tomás, Suma I, q. 2, a. 3, obj. 1 e ad 1; J. L. Mackie, "Evil and Omnipotence" (1955)', link: LINKS.cicPai, orientacao: '<p>Leia o §309 do Catecismo e a resposta de Tomás à primeira objeção do a. 3 (citando Agostinho). Compare com o argumento de Mackie.</p>' },
  perguntas: [
    { p: 'Qual a diferença entre o problema lógico e o evidencial?', r: 'O lógico alega contradição; o evidencial, improbabilidade.' },
    { p: 'O que é uma "defesa" no sentido de Plantinga?', r: 'Mostrar que é possível haver razões para Deus permitir o mal, sem dizer quais.' },
    { p: 'O que é a teodiceia ireneana?', r: 'O mundo como vale de formação de almas (Hick).' },
  ],
  exercicios: [
    mc('"Evil and Omnipotence" (1955) é de:', ['Plantinga', 'Mackie', 'Rowe', 'Hick'], 1, 'Problema lógico.'),
    mc('O exemplo do cervo no incêndio é de:', ['Rowe', 'Mackie', 'Plantinga', 'Wykstra'], 0, '1979.'),
    mc('Tomás responde à objeção do mal citando:', ['Aristóteles', 'Agostinho: Deus tira o bem do mal', 'Anselmo', 'Boécio'], 1, 'Suma I, q. 2, a. 3, ad 1.'),
    mc('O ceticismo teísta afirma que:', ['Deus não existe', 'Não é de esperar que vejamos as razões de Deus', 'O mal é ilusão', 'O mal não existe'], 1, 'Wykstra, 1984.'),
    disc('Avalie o argumento evidencial de Rowe com a resposta do ceticismo teísta. A resposta é convincente ou deixa o crente sem nada a dizer?', ['Reconstrói Rowe', 'Expõe Wykstra', 'Avalia custos e benefícios', 'Conclusão honesta'])],
  resumo: ['Problema lógico (Mackie) e evidencial (Rowe).', 'Defesa do livre-arbítrio (Plantinga).', 'Teodiceias agostiniana e ireneana.', 'Ceticismo teísta.', 'Resposta cristã: CIC §309–314.'],
  referencias: [{ texto: 'Catecismo, §309–314.', link: LINKS.cicPai }, { texto: 'Alvin Plantinga, God, Freedom, and Evil (1974).' }, { texto: 'William Rowe, "The Problem of Evil and Some Varieties of Atheism" (1979).' }],
  revisao: [['Mackie (1955)', 'Problema lógico do mal.'], ['Plantinga (1974)', 'Defesa do livre-arbítrio.'], ['Rowe (1979)', 'Problema evidencial: o cervo no incêndio.']],
  avancado: {
    texto: `<h3>Horrores</h3>
<p>Marilyn McCord Adams (Horrendous Evils and the Goodness of God, 1999) argumentou que, para males "horrendos", nenhuma razão geral basta: só a bondade de Deus para cada pessoa, que dá sentido à vida da vítima, inclusive pela união com Cristo sofredor ${tag('interpretacao')}.</p>
<h3>Sofrimento animal</h3>
<p>O sofrimento animal ao longo de milhões de anos de evolução é visto por muitos como o caso mais difícil. Respostas: valor de um mundo regido por leis; sentido limitado da dor em animais (debate); redenção cósmica (Rm 8,19–22) ${tag('debate')}.</p>
<h3>Ivan Karamázov</h3>
<p>Em Os Irmãos Karamázov (1880), Ivan devolve o "bilhete de entrada" para uma harmonia futura construída sobre o sofrimento de uma criança ${tag('fato')}. É a objeção moral mais forte: mesmo que haja razão, seria aceitável? Dostoiévski responde pela figura do stárets Zósima e de Aliócha, não por argumento ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Marilyn McCord Adams, Horrendous Evils and the Goodness of God (1999).' }, { texto: 'Fiódor Dostoiévski, Os Irmãos Karamázov, livro V, caps. 4–5.' }],
    exercicios: [
      mc('"Horrendous Evils and the Goodness of God" é de:', ['Marilyn Adams', 'Eleonore Stump', 'Plantinga', 'Hick'], 0, '1999.'),
      mc('O "bilhete de entrada" é devolvido por:', ['Aliócha', 'Ivan', 'Zósima', 'Dmítri'], 1, 'Os Irmãos Karamázov.'),
      mc('Romanos 8,19–22 é usado em resposta ao:', ['Problema lógico', 'Sofrimento animal e da criação', 'Argumento ontológico', 'Ceticismo'], 1, 'Redenção cósmica.'),
      disc('A objeção de Ivan Karamázov é um argumento contra a existência de Deus ou contra a aceitação de Deus? Avalie.', ['Expõe Ivan', 'Distingue os dois tipos de objeção', 'Considera a resposta de Dostoiévski', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm7-11', titulo: 'Críticas filosóficas à religião',
  aprendera: ['As críticas de Feuerbach, Marx, Nietzsche e Freud', 'A crítica de Russell e do positivismo lógico', 'O "novo ateísmo"', 'A falácia genética e outras respostas'],
  explicacao: `
<h3>Os "mestres da suspeita"</h3>
<p>Paul Ricoeur chamou Marx, Nietzsche e Freud de "mestres da suspeita": eles não discutem se Deus existe, mas perguntam o que a religião esconde ${tag('interpretacao')}.</p>
<ul>
<li><strong>Feuerbach</strong> (A essência do cristianismo, 1841): Deus é a projeção da essência humana; a teologia é antropologia ${tag('fato')}.</li>
<li><strong>Marx</strong> (Introdução à Crítica da Filosofia do Direito de Hegel, 1844): a religião é "o suspiro da criatura oprimida" e "o ópio do povo"; criticar a religião é condição de criticar a sociedade ${tag('fato')}.</li>
<li><strong>Nietzsche</strong> (A Gaia Ciência §125, 1882): o louco anuncia que "Deus está morto" e que nós o matamos; o cristianismo seria uma moral de escravos, nascida do ressentimento (Genealogia da Moral, 1887) ${tag('fato')}.</li>
<li><strong>Freud</strong> (O futuro de uma ilusão, 1927): a religião é uma ilusão nascida do desejo de proteção paterna ${tag('fato')}.</li>
</ul>
<h3>Críticas lógicas e epistemológicas</h3>
<p>Bertrand Russell (Por que não sou cristão, 1927) atacou os argumentos tradicionais e a moral cristã. O positivismo lógico considerou as frases religiosas sem sentido (Ayer, 1936) ${tag('fato')}. Antony Flew ("Theology and Falsification", 1950) perguntou que fato o crente admitiria como refutação de sua fé ${tag('fato')}.</p>
<h3>O novo ateísmo</h3>
<p>Richard Dawkins (Deus, um delírio, 2006), Sam Harris, Daniel Dennett e Christopher Hitchens popularizaram críticas científicas e morais à religião ${tag('fato')}. Filósofos, inclusive não crentes, criticaram a qualidade filosófica de parte desses argumentos ${tag('debate')}.</p>
<h3>Respostas</h3>
<ul>
<li><strong>Falácia genética</strong>: explicar por que alguém crê (desejo, sociedade) não mostra que a crença é falsa; o próprio ateísmo poderia ser explicado por desejos (Paul Vitz, Faith of the Fatherless, 1999) ${tag('argumento')}.</li>
<li><strong>Autorreferência</strong>: o verificacionismo se refuta (aula 1).</li>
<li><strong>Diálogo</strong>: o Vaticano II (Gaudium et Spes 19–21) reconhece que os crentes têm parte de responsabilidade no ateísmo, quando apresentam mal a fé ${tag('doutrina')}.</li>
</ul>`,
  vocabulario: [['Mestres da suspeita', 'Marx, Nietzsche, Freud (Ricoeur).'], ['Projeção', 'Deus como imagem idealizada do homem (Feuerbach).'], ['Ópio do povo', 'Expressão de Marx (1844).'], ['Morte de Deus', 'Anúncio de Nietzsche (Gaia Ciência §125).'], ['Falácia genética', 'Julgar uma crença pela sua origem.']],
  exemplos: '<p>"Você só crê porque seus pais criam" — mesmo que fosse verdade, não mostraria que a crença é falsa. Mas é um bom motivo para examinar as razões da crença com cuidado.</p>',
  contexto: `<p>A crítica moderna da religião acompanhou a secularização da Europa no século XIX; Gaudium et Spes (1965) dedicou parágrafos ao ateísmo contemporâneo ${tag('fato')}.</p>`,
  argumento: { titulo: 'A falácia genética (reconstrução)', tag: 'argumento',
    premissas: ['Uma crença é verdadeira ou falsa conforme corresponda ou não à realidade.', 'A origem psicológica ou social de uma crença não determina, por si, essa correspondência.', 'As críticas de Feuerbach, Marx e Freud explicam a origem da crença religiosa.'],
    conclusao: 'Logo, essas críticas, por si, não mostram que a crença religiosa é falsa.',
    nota: 'As críticas podem, porém, enfraquecer a justificação se mostrarem que a crença é produzida por mecanismo não confiável — ponto do debate com a epistemologia reformada.' },
  objecoes: [{ objecao: 'Se a crença é produzida por desejo, ela não tem justificação, mesmo que verdadeira.', tag: 'debate', resposta: 'Plantinga responde que isso supõe que Deus não existe: se existe, poderia usar desejos e faculdades naturais para produzir crença verdadeira. A avaliação da origem depende da verdade da crença, e não o contrário.' }],
  aplicacao: '<p>Escolha uma das críticas e escreva seu steelman em dez linhas; depois, uma resposta em dez linhas.</p>',
  fonte: { obra: 'Nietzsche, A Gaia Ciência §125; Marx, Introdução à Crítica da Filosofia do Direito de Hegel (1844); Gaudium et Spes §19–21', link: null, orientacao: '<p>Leia os três textos curtos. Identifique o que cada um diz sobre a origem da religião e compare com a análise de Gaudium et Spes.</p>' },
  perguntas: [
    { p: 'Quem são os "mestres da suspeita"?', r: 'Marx, Nietzsche e Freud.' },
    { p: 'O que afirma Feuerbach?', r: 'Que Deus é projeção da essência humana.' },
    { p: 'O que é a falácia genética?', r: 'Julgar a verdade de uma crença pela sua origem.' },
  ],
  exercicios: [
    mc('"A essência do cristianismo" (1841) é de:', ['Marx', 'Feuerbach', 'Nietzsche', 'Freud'], 1, 'Teologia como antropologia.'),
    mc('"O futuro de uma ilusão" (1927) é de:', ['Freud', 'Russell', 'Dawkins', 'Ayer'], 0, 'Religião como ilusão.'),
    mc('Flew perguntou ao crente:', ['Que fato refutaria sua fé', 'Por que crê', 'Quem é Deus', 'Se Deus é bom'], 0, '"Theology and Falsification" (1950).'),
    mc('Gaudium et Spes reconhece que, no ateísmo, os crentes:', ['Não têm responsabilidade', 'Podem ter parte de responsabilidade', 'São a causa única', 'Não devem dialogar'], 1, 'GS 19.'),
    disc('Qual das críticas à religião estudadas é a mais forte? Escreva o steelman e a melhor resposta.', ['Escolha justificada', 'Steelman fiel', 'Resposta argumentada', 'Avaliação honesta'])],
  resumo: ['Feuerbach, Marx, Nietzsche, Freud.', 'Russell, Ayer, Flew.', 'Novo ateísmo.', 'Falácia genética; Gaudium et Spes.'],
  referencias: [{ texto: 'Ludwig Feuerbach, A Essência do Cristianismo (1841).' }, { texto: 'Concílio Vaticano II, Gaudium et Spes, §19–21.' }, { texto: 'Alvin Plantinga, Warranted Christian Belief (2000), parte III.' }],
  revisao: [['Feuerbach', 'Deus como projeção.'], ['Gaia Ciência §125', 'Deus está morto.'], ['Falácia genética', 'Origem não decide verdade.']],
  avancado: {
    texto: `<h3>A objeção de Freud e a de Marx em Plantinga</h3>
<p>Plantinga (Warranted Christian Belief, cap. 5–6) argumenta que as críticas de Freud e Marx são objeções "de jure" (a crença não seria racional), mas dependem de premissas "de facto" (Deus não existe). Se Deus existe, a crença pode ser produzida por um "sensus divinitatis" funcionando bem ${tag('argumento')}.</p>
<h3>Antony Flew e a conversão ao deísmo</h3>
<p>Flew, um dos mais influentes ateus do século XX, declarou em 2004 aceitar um Deus de tipo deísta, citando o ajuste fino e a origem da vida (There Is a God, 2007, com Roy Abraham Varghese) ${tag('fato')}. A autoria e o sentido da obra foram discutidos ${tag('debate')}.</p>
<h3>Nietzsche levado a sério</h3>
<p>Teólogos como Henri de Lubac (O drama do humanismo ateu, 1944) leram Feuerbach, Nietzsche e Comte como um projeto coerente de humanismo sem Deus, a ser enfrentado em seu próprio terreno ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Henri de Lubac, O Drama do Humanismo Ateu (1944).' }, { texto: 'Alvin Plantinga, Warranted Christian Belief (2000), caps. 5–6.' }],
    exercicios: [
      mc('"O drama do humanismo ateu" (1944) é de:', ['De Lubac', 'Maritain', 'Gilson', 'Ratzinger'], 0, 'Henri de Lubac.'),
      mc('Objeções "de jure", para Plantinga, dependem de:', ['Premissas de facto', 'Lógica pura', 'Fé', 'Ciência'], 0, 'Se Deus existe, a crença pode ser racional.'),
      mc('Antony Flew, em 2004, passou a aceitar:', ['O cristianismo', 'Um Deus de tipo deísta', 'O budismo', 'O agnosticismo'], 1, 'There Is a God (2007).'),
      disc('A distinção de Plantinga entre objeções de jure e de facto neutraliza Freud e Marx? Argumente.', ['Explica a distinção', 'Aplica a Freud e Marx', 'Considera objeção', 'Conclusão justificada'])],
  },
}),

avaliacao('m7-12', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>O vocabulário metafísico (ser, essência, substância, ato e potência, causalidade) e os argumentos sobre Deus e o mal, com suas objeções.</p>
<h3>Critério do Degrau 5</h3>
<p>Para concluir o degrau, você deve explicar os principais termos metafísicos e reconstruir ao menos dois argumentos sobre a existência de Deus, com objeções. A primeira discursiva treina isso. Não se exige concordar com as conclusões.</p>`,
[
  disc('Reconstrua dois argumentos sobre a existência de Deus de famílias diferentes (cosmológico, ontológico, teleológico). Para cada um: premissas numeradas, a objeção mais forte, a melhor resposta e sua avaliação de onde o argumento fica.', ['Dois argumentos de famílias diferentes', 'Premissas corretas', 'Objeções na versão mais forte', 'Respostas e avaliação honesta', 'Vocabulário metafísico correto']),
  disc('Explique, com exemplos, as noções de essência e ser, substância e acidente, ato e potência, e mostre como cada uma é usada em um argumento estudado.', ['Define os seis termos corretamente', 'Exemplos adequados', 'Liga cada par a um argumento', 'Clareza']),
]),
];
