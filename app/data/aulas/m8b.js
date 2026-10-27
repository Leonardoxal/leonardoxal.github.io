// Módulo 8 — Filosofia medieval e escolástica: aulas 7 a 12.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm8-7', titulo: 'Como ler um artigo da Suma',
  aprendera: ['A arquitetura da Suma Teológica: partes, questões, artigos', 'As cinco seções de um artigo', 'Como citar a Suma corretamente', 'Erros comuns de leitura (tomar a objeção pela tese)'],
  prereq: ['Aula 5 deste módulo: O método escolástico'],
  explicacao: `
<h3>Uma obra para principiantes</h3>
<p>No prólogo, Tomás de Aquino (1225–1274) diz que escreve para "instruir os principiantes", evitando a multiplicação de questões inúteis e seguindo a ordem da matéria ${tag('fato')}. A Suma ficou inacabada: Tomás parou de escrever em dezembro de 1273, e o Suplemento foi completado por discípulos a partir do comentário às Sentenças ${tag('fato')}.</p>
<h3>Arquitetura</h3>
<ul>
<li><strong>Primeira Parte</strong> (I): Deus, Trindade, criação, anjos, homem, governo do mundo.</li>
<li><strong>Primeira Seção da Segunda Parte</strong> (I-II): fim último, atos humanos, paixões, hábitos, virtudes em geral, vícios, lei, graça.</li>
<li><strong>Segunda Seção da Segunda Parte</strong> (II-II): virtudes em particular (fé, esperança, caridade, prudência, justiça, fortaleza, temperança) e estados de vida.</li>
<li><strong>Terceira Parte</strong> (III): Cristo e os sacramentos.</li>
</ul>
<p>O esquema é muitas vezes lido como movimento de saída de Deus e retorno a Deus (<em>exitus–reditus</em>), interpretação proposta por M.-D. Chenu ${tag('interpretacao')}.</p>
<h3>As cinco seções de um artigo</h3>
<ol>
<li><strong>Título</strong>: "Se Deus existe" (<em>utrum</em>).</li>
<li><strong>Objeções</strong>: "Parece que não…" — argumentos contrários à posição que Tomás vai defender.</li>
<li><strong>Em sentido contrário</strong> (<em>sed contra</em>): geralmente uma autoridade; indica a direção, não é ainda a prova.</li>
<li><strong>Respondo</strong> (<em>respondeo</em>, o "corpo"): a tese de Tomás e seus argumentos.</li>
<li><strong>Respostas às objeções</strong> (<em>ad 1, ad 2…</em>): cada objeção é respondida, muitas vezes por distinção.</li>
</ol>
<h3>Como citar</h3>
<p>"ST I, q. 2, a. 3, ad 2" = Primeira Parte, questão 2, artigo 3, resposta à segunda objeção. "I-II, q. 94, a. 2, c." = corpo do artigo ${tag('fato')}.</p>
<h3>O erro clássico</h3>
<p>Citar uma objeção como se fosse a opinião de Tomás. A objeção 1 de I, q. 2, a. 3 ("se Deus existisse, não haveria mal") não é tese de Tomás; é o que ele vai responder ${tag('fato')}.</p>`,
  vocabulario: [['Utrum', '"Se": forma do título de um artigo.'], ['Sed contra', '"Em sentido contrário": autoridade que indica a direção.'], ['Respondeo', '"Respondo": corpo do artigo.'], ['Ad 1', 'Resposta à primeira objeção.'], ['Exitus–reditus', 'Saída de Deus e retorno a Deus: leitura do plano da Suma.']],
  exemplos: '<p>Leia ST I, q. 2, a. 3. Objeção 1: o mal. Objeção 2: a natureza basta para explicar tudo. Sed contra: Êxodo 3,14. Respondo: as cinco vias. Ad 1: Agostinho — Deus tira o bem do mal. Ad 2: a natureza age por um fim determinado por outro.</p>',
  contexto: `<p>Tomás escreveu a Suma entre c. 1265 e 1273, em Roma, Paris e Nápoles ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que a resposta às objeções importa', tag: 'argumento',
    premissas: ['Uma tese só está estabelecida se as objeções a ela forem respondidas.', 'Tomás responde a cada objeção em particular.', 'Muitas distinções decisivas de Tomás aparecem só nas respostas às objeções.'],
    conclusao: 'Logo, ler apenas o corpo do artigo é ler o pensamento de Tomás pela metade.',
    nota: 'Exemplo: em I, q. 2, a. 3, ad 1, aparece a resposta ao problema do mal que muitos atribuem a Tomás sem saber de onde vem.' },
  objecoes: [{ objecao: 'O formato é artificial e repetitivo; ninguém pensa assim.', tag: 'debate', resposta: 'É artificial no sentido de técnico, como uma demonstração matemática. Seu propósito é disciplinar o debate: obriga a explicitar a pergunta, as razões contrárias e as distinções.' }],
  aplicacao: '<p>Escolha um artigo da Suma (sugestão: I-II, q. 2, a. 1, "se a felicidade consiste nas riquezas") e resuma suas cinco seções no Caderno, uma linha cada.</p>',
  fonte: { obra: 'Tomás de Aquino, Suma Teológica, prólogo e I, q. 2, a. 3', link: LINKS.sumaQ2, orientacao: '<p>Leia o prólogo e o artigo 3 da questão 2. Identifique as cinco seções e escreva a citação correta de cada resposta às objeções.</p>' },
  perguntas: [
    { p: 'Quais as cinco seções de um artigo?', r: 'Título, objeções, sed contra, respondeo, respostas às objeções.' },
    { p: 'O que significa "ST I-II, q. 94, a. 2, c."?', r: 'Primeira seção da Segunda Parte, questão 94, artigo 2, corpo do artigo.' },
    { p: 'Qual o erro de leitura mais comum?', r: 'Atribuir a Tomás a opinião de uma objeção.' },
  ],
  exercicios: [
    mc('Na Suma, as objeções expressam:', ['A tese de Tomás', 'Argumentos contrários à posição que Tomás defenderá', 'Dogmas', 'Citações bíblicas apenas'], 1, 'Elas serão respondidas.'),
    mc('As virtudes teologais em particular estão na:', ['I', 'I-II', 'II-II', 'III'], 2, 'Segunda seção da Segunda Parte.'),
    mc('"Ad 3" significa:', ['Artigo 3', 'Resposta à terceira objeção', 'Questão 3', 'Terceira parte'], 1, 'Citação técnica.'),
    mc('O sed contra é, em geral:', ['A prova principal', 'Uma autoridade que indica a direção', 'Uma objeção', 'Um resumo'], 1, 'Não substitui o corpo.'),
    disc('Leia ST I-II, q. 2, a. 1 e reconstrua o artigo em suas cinco seções, avaliando a força das objeções.', ['Cinco seções identificadas', 'Citação correta', 'Avaliação das objeções', 'Clareza'])],
  resumo: ['Suma: I, I-II, II-II, III.', 'Artigo: título, objeções, sed contra, respondeo, respostas.', 'Citação: parte, q., a., c./ad.', 'Não confundir objeção com tese.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica, prólogo.' }, { texto: 'M.-D. Chenu, Introdução ao Estudo de Santo Tomás de Aquino (1950).' }, { texto: 'Jean-Pierre Torrell, Iniciação a Santo Tomás de Aquino: sua pessoa e sua obra (1993).' }],
  revisao: [['Respondeo', 'Corpo do artigo com a tese de Tomás.'], ['I-II', 'Fim último, atos, paixões, hábitos, lei, graça.'], ['Exitus–reditus', 'Leitura de Chenu sobre o plano da Suma.']],
  avancado: {
    texto: `<h3>Ler com os comentadores</h3>
<p>A tradição tomista produziu grandes comentários: Caetano (Tomás de Vio, 1469–1534) sobre a Suma inteira, impresso na edição Leonina; João de Santo Tomás (1589–1644) no Cursus theologicus ${tag('fato')}. Estudiosos do século XX (Gilson, Chenu, Torrell) insistiram em ler Tomás no seu contexto histórico, às vezes contra a leitura dos comentadores ${tag('debate')}.</p>
<h3>Fontes de Tomás</h3>
<p>Num artigo típico, Tomás cita Aristóteles ("o Filósofo"), Agostinho, Pseudo-Dionísio, Boécio, Avicena, Averróis ("o Comentador") e Maimônides ("Rabi Moisés") ${tag('fato')}. Rastrear essas fontes mostra a síntese que ele opera.</p>
<h3>A edição Leonina</h3>
<p>Leão XIII, na encíclica Aeterni Patris (1879), recomendou o estudo de Tomás e iniciou a edição crítica de suas obras, a Leonina, ainda em curso ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Leão XIII, Aeterni Patris (1879).' }, { texto: 'Jean-Pierre Torrell, Iniciação a Santo Tomás de Aquino (1993).' }],
    exercicios: [
      mc('"O Comentador", na Suma, é:', ['Avicena', 'Averróis', 'Caetano', 'Boécio'], 1, 'Comentador de Aristóteles.'),
      mc('A edição Leonina foi iniciada por:', ['Pio X', 'Leão XIII', 'Pio XII', 'João Paulo II'], 1, '1879–1880.'),
      mc('Caetano é conhecido por:', ['Comentar a Suma', 'Escrever a Suma Contra os Gentios', 'Fundar os jesuítas', 'Traduzir Aristóteles'], 0, 'Tomás de Vio.'),
      disc('Escolha um artigo da Suma e identifique suas fontes (Aristóteles, Agostinho etc.). Que papel cada uma cumpre no argumento?', ['Identifica fontes', 'Explica o papel de cada uma', 'Mostra a síntese', 'Conclusão'])],
  },
}),

aula({
  id: 'm8-8', titulo: 'Tomás: Deus e os nomes divinos',
  aprendera: ['A simplicidade divina', 'A via negativa e a via de eminência', 'A analogia dos nomes divinos', 'Deus como o próprio Ser subsistente'],
  prereq: ['Módulo 7: ser e essência; cinco vias'],
  explicacao: `
<h3>Depois de provar, conhecer o que Deus não é</h3>
<p>Logo após as cinco vias, Tomás adverte: "não podemos saber de Deus o que ele é, mas o que ele não é" (ST I, q. 3, prólogo) ${tag('fato')}. As questões 3–11 removem de Deus tudo o que é imperfeito: composição, matéria, mudança, limite.</p>
<h3>Simplicidade</h3>
<p>Deus não é composto de partes, nem de matéria e forma, nem de essência e ser: sua essência é o seu ser (I, q. 3, a. 4) ${tag('argumento')}. Em todo o resto, essência e ser se distinguem; Deus é o "próprio Ser subsistente" (<em>ipsum esse subsistens</em>, I, q. 4, a. 2) ${tag('interpretacao')}.</p>
<h3>Perfeições divinas</h3>
<p>Deus é perfeito, bom, infinito, onipresente, imutável, eterno e uno (qq. 4–11) ${tag('fato')}. Cada atributo decorre da simplicidade e do ser.</p>
<h3>Como falamos de Deus? (q. 13)</h3>
<ul>
<li><strong>Univocidade</strong>: "sábio" teria o mesmo sentido para Deus e para nós. Tomás rejeita: Deus não é um sábio a mais.</li>
<li><strong>Equivocidade</strong>: sentidos sem relação. Rejeita: não poderíamos dizer nada de Deus a partir das criaturas.</li>
<li><strong>Analogia</strong>: o termo se aplica a Deus e às criaturas por proporção, porque as criaturas são efeitos de Deus. A perfeição significada (sabedoria) está em Deus de modo eminente; o modo de significar é criatural (I, q. 13, a. 5) ${tag('argumento')}.</li>
</ul>
<h3>Três passos</h3>
<p>Afirmação (Deus é bom), negação (não é bom como as criaturas) e eminência (é bom de modo que nos excede) — esquema herdado do Pseudo-Dionísio ${tag('interpretacao')}.</p>
<h3>"Aquele que é"</h3>
<p>Tomás considera "Aquele que é" (Êx 3,14) o nome mais próprio de Deus, porque significa o próprio ser (I, q. 13, a. 11) ${tag('fato')}.</p>`,
  vocabulario: [['Simplicidade', 'Ausência de composição em Deus.'], ['Ipsum esse subsistens', 'O próprio Ser subsistente.'], ['Analogia', 'Aplicação de um termo por proporção.'], ['Via negativa', 'Conhecer Deus negando imperfeições.'], ['Eminência', 'Perfeição em grau que excede o criado.']],
  exemplos: '<p>"Saudável" diz-se do animal (que tem saúde), do remédio (que causa saúde) e da urina (que é sinal de saúde): é o exemplo de analogia que Tomás usa (I, q. 13, a. 5), seguindo Aristóteles.</p>',
  contexto: `<p>A doutrina dos nomes divinos dialoga com Maimônides, que defendia uma teologia predominantemente negativa ${tag('fato')}.</p>`,
  argumento: { titulo: 'Em Deus, essência e ser são idênticos (ST I, q. 3, a. 4, reconstruído)', tag: 'argumento',
    premissas: ['Se o ser de algo é distinto de sua essência, esse ser é recebido de outro.', 'Deus é a causa primeira e não recebe o ser de outro.', 'Logo, em Deus o ser não é distinto da essência.'],
    conclusao: 'Portanto, Deus é seu próprio ser.',
    nota: 'O argumento depende da distinção real entre essência e ser nas criaturas (Módulo 7). Filósofos analíticos (Plantinga, Does God Have a Nature?, 1980) objetaram que a simplicidade torna Deus uma propriedade.' },
  objecoes: [{ objecao: 'Se Deus é simples, sua bondade é idêntica à sua justiça e à sua essência — então Deus é uma propriedade, não uma pessoa.', tag: 'debate', resposta: 'Defensores (Stump, Brian Davies) respondem que "ser" em Tomás não é uma propriedade abstrata, mas ato; e que os atributos diferem em nosso modo de conhecer, não em Deus. O debate continua.' }],
  aplicacao: '<p>Escolha três atributos (bom, sábio, vivo) e aplique os três passos: afirmação, negação, eminência.</p>',
  fonte: { obra: 'Tomás de Aquino, Suma Teológica I, q. 3, a. 4 e q. 13, a. 5', link: null, orientacao: '<p>Leia a q. 13, a. 5 (analogia) e reconstrua o argumento contra a univocidade e a equivocidade.</p>' },
  perguntas: [
    { p: 'O que é a simplicidade divina?', r: 'Ausência de qualquer composição em Deus, inclusive de essência e ser.' },
    { p: 'Por que Tomás rejeita a univocidade?', r: 'Porque Deus não é um ente entre outros; as perfeições estão nele de modo eminente.' },
    { p: 'Qual o nome mais próprio de Deus para Tomás?', r: '"Aquele que é" (Êx 3,14).' },
  ],
  exercicios: [
    mc('Para Tomás, os nomes divinos se dizem:', ['Univocamente', 'Equivocamente', 'Analogicamente', 'Metaforicamente apenas'], 2, 'I, q. 13, a. 5.'),
    mc('"Ipsum esse subsistens" significa:', ['O ente mais alto', 'O próprio Ser subsistente', 'A forma das formas', 'O motor imóvel'], 1, 'I, q. 4, a. 2.'),
    mc('O exemplo de "saudável" ilustra:', ['Univocidade', 'Analogia', 'Equivocidade', 'Negação'], 1, 'Aristóteles e Tomás.'),
    mc('A crítica de Plantinga à simplicidade é que ela torna Deus:', ['Mutável', 'Uma propriedade', 'Material', 'Múltiplo'], 1, 'Does God Have a Nature? (1980).'),
    disc('A doutrina da analogia evita tanto o antropomorfismo quanto o agnosticismo? Argumente.', ['Explica univocidade e equivocidade', 'Explica analogia', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Saber o que Deus não é.', 'Simplicidade: essência = ser.', 'Atributos decorrem da simplicidade.', 'Analogia contra univocidade e equivocidade.', 'Afirmação, negação, eminência.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I, qq. 3–13.' }, { texto: 'Alvin Plantinga, Does God Have a Nature? (1980).' }, { texto: 'Brian Davies, The Thought of Thomas Aquinas (1992).' }],
  revisao: [['Simplicidade divina', 'ST I, q. 3.'], ['Analogia', 'ST I, q. 13, a. 5.'], ['Aquele que é', 'ST I, q. 13, a. 11.']],
  avancado: {
    texto: `<h3>Escoto e a univocidade</h3>
<p>Duns Escoto defendeu que o conceito de "ente" é unívoco a Deus e às criaturas, porque de outro modo não poderíamos demonstrar nada de Deus ${tag('fato')}. Alguns autores (Radical Orthodoxy: John Milbank, Catherine Pickstock) viram nisso uma virada que prepara a modernidade; historiadores como Richard Cross contestam essa leitura ${tag('debate')}.</p>
<h3>Analogia de proporção e de proporcionalidade</h3>
<p>Caetano (De nominum analogia, 1498) privilegiou a analogia de proporcionalidade própria; tomistas posteriores discutem se isso é fiel a Tomás ${tag('debate')}.</p>
<h3>Teologia negativa</h3>
<p>Pseudo-Dionísio (c. 500) e Maimônides representam versões fortes da via negativa; Tomás integra a negação mas sustenta que alguns nomes significam a substância divina, ainda que imperfeitamente (I, q. 13, a. 2) ${tag('argumento')}.</p>`,
    leituras: [{ texto: 'Caetano, De nominum analogia (1498).' }, { texto: 'Richard Cross, "Where Angels Fear to Tread: Duns Scotus and Radical Orthodoxy", Antonianum 76 (2001).' }],
    exercicios: [
      mc('Quem defendeu a univocidade do conceito de ente?', ['Tomás', 'Escoto', 'Caetano', 'Dionísio'], 1, 'Duns Escoto.'),
      mc('De nominum analogia é de:', ['Caetano', 'Suárez', 'Escoto', 'Ockham'], 0, '1498.'),
      mc('Para Tomás, alguns nomes significam a substância divina:', ['Perfeitamente', 'Imperfeitamente', 'De nenhum modo', 'Só metaforicamente'], 1, 'I, q. 13, a. 2.'),
      disc('A univocidade de Escoto foi uma virada decisiva rumo à modernidade? Avalie a tese da Radical Orthodoxy e a crítica de Cross.', ['Expõe Escoto', 'Expõe as duas leituras', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-9', titulo: 'Felicidade e atos humanos',
  aprendera: ['O argumento do fim último (I-II, qq. 1–5)', 'Por que nenhum bem criado é a felicidade', 'A estrutura do ato humano: intelecto e vontade', 'As fontes da moralidade: objeto, fim e circunstâncias'],
  prereq: ['Módulo 6: Aristóteles e a ética'],
  explicacao: `
<h3>Toda ação tende a um fim</h3>
<p>A I-II começa pelo fim: o homem age por um fim, e há um fim último, porque uma série infinita de fins tornaria o desejo vão (q. 1, aa. 1–4) ${tag('argumento')}.</p>
<h3>Onde não está a felicidade (q. 2)</h3>
<p>Tomás examina riquezas, honra, fama, poder, bens do corpo, prazer, bens da alma e qualquer bem criado. Nenhum é a felicidade: ou são meios, ou são parciais, ou dependem do acaso. A vontade tende ao bem universal, que só se encontra em Deus (q. 2, a. 8) ${tag('argumento')}.</p>
<h3>O que é a felicidade (q. 3)</h3>
<p>A felicidade perfeita consiste na visão da essência divina, ato do intelecto (q. 3, a. 8) ${tag('doutrina')}. Nesta vida há uma felicidade imperfeita, que é a vida virtuosa descrita por Aristóteles ${tag('interpretacao')}.</p>
<h3>O ato humano (qq. 6–17)</h3>
<p>"Atos humanos" são os que procedem de vontade deliberada; "atos do homem" (como coçar a cabeça distraído) não são morais em sentido próprio (q. 1, a. 1) ${tag('fato')}. O ato combina intelecto e vontade em etapas: intenção do fim, deliberação, consentimento, escolha (<em>electio</em>), comando e uso.</p>
<h3>As fontes da moralidade (qq. 18–21)</h3>
<p>Um ato é bom ou mau por seu <strong>objeto</strong> (o que se faz), seu <strong>fim</strong> (por que se faz) e suas <strong>circunstâncias</strong>. Basta um elemento mau para tornar o ato mau: <em>bonum ex integra causa, malum ex quocumque defectu</em> ${tag('fato')}. O Catecismo retoma o esquema (§1750–1756) ${tag('doutrina')}.</p>`,
  vocabulario: [['Fim último', 'Aquilo por causa do qual se quer tudo o mais.'], ['Ato humano', 'Ato procedente de vontade deliberada.'], ['Electio', 'Escolha dos meios.'], ['Objeto moral', 'O que a vontade escolhe deliberadamente.'], ['Bonum ex integra causa', 'O bem exige todos os elementos bons.']],
  exemplos: '<p>Dar esmola (objeto bom) para ser elogiado (fim mau) torna o ato mau como um todo, embora o objeto em si seja bom. Mentir (objeto mau) para salvar alguém (fim bom) continua mau quanto ao objeto: o fim não justifica os meios.</p>',
  contexto: `<p>A I-II é a parte da Suma mais estudada em filosofia moral ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Nenhum bem criado é a felicidade (I-II, q. 2, a. 8, reconstruído)', tag: 'argumento',
    premissas: ['A felicidade é o bem perfeito que aquieta totalmente o desejo.', 'O objeto da vontade é o bem universal.', 'Todo bem criado é particular e limitado.', 'Só um bem universal e ilimitado aquieta o desejo do bem universal.'],
    conclusao: 'Logo, só Deus é a felicidade do homem.',
    nota: 'A premissa 2 é decisiva e discutida: há quem negue que a vontade tenda a um bem universal.' },
  objecoes: [{ objecao: 'Muitos dizem ser felizes sem Deus.', tag: 'debate', resposta: 'Tomás distinguiria a felicidade imperfeita (possível nesta vida) da perfeita; e a satisfação subjetiva da plenitude objetiva. A objeção mostra que a tese é sobre a estrutura do desejo, não sobre relatos de satisfação.' }],
  aplicacao: '<p>Escolha uma decisão recente sua e analise objeto, fim e circunstâncias. Ela foi boa "por inteiro"?</p>',
  fonte: { obra: 'Tomás de Aquino, Suma Teológica I-II, q. 2 e q. 18', link: null, orientacao: '<p>Leia os artigos da q. 2 (onde não está a felicidade). Faça uma tabela: bem examinado, objeção, motivo da rejeição.</p>' },
  perguntas: [
    { p: 'Por que deve haver um fim último?', r: 'Porque uma série infinita de fins tornaria o desejo vão.' },
    { p: 'Em que consiste a felicidade perfeita?', r: 'Na visão da essência divina.' },
    { p: 'Quais as três fontes da moralidade?', r: 'Objeto, fim e circunstâncias.' },
  ],
  exercicios: [
    mc('Coçar a cabeça distraído é:', ['Ato humano', 'Ato do homem', 'Pecado', 'Virtude'], 1, 'Não é deliberado.'),
    mc('Para Tomás, a felicidade perfeita é ato principalmente:', ['Da vontade', 'Do intelecto', 'Dos sentidos', 'Do corpo'], 1, 'Visão de Deus (q. 3, a. 4).'),
    mc('"Malum ex quocumque defectu" significa:', ['O mal vem de qualquer defeito', 'O mal não existe', 'Todo ato é mau', 'O fim justifica os meios'], 0, 'Basta um elemento mau.'),
    mc('O Catecismo trata das fontes da moralidade em:', ['§1750–1756', '§27–49', '§385–412', '§2258–2330'], 0, 'Retoma Tomás.'),
    disc('A tese de que só Deus é a felicidade é demonstrada ou pressupõe a fé? Avalie o argumento da q. 2, a. 8.', ['Reconstrução fiel', 'Identifica a premissa decisiva', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Há um fim último.', 'Nenhum bem criado é a felicidade.', 'Felicidade perfeita: visão de Deus.', 'Ato humano: intelecto e vontade.', 'Objeto, fim, circunstâncias.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I-II, qq. 1–21.' }, { texto: 'Catecismo, §1749–1761.' }, { texto: 'Servais Pinckaers, As Fontes da Moral Cristã (1985).' }],
  revisao: [['I-II, q. 2', 'Onde não está a felicidade.'], ['Fontes da moralidade', 'Objeto, fim, circunstâncias.'], ['Ato humano × ato do homem', 'Deliberado × não deliberado.']],
  avancado: {
    texto: `<h3>Desejo natural de ver Deus</h3>
<p>Se o homem deseja naturalmente ver Deus, mas só a graça o permite, a natureza tem um desejo que não pode satisfazer? Henri de Lubac (Surnaturel, 1946) criticou a noção de "natureza pura" de comentadores como Caetano; Lawrence Feingold (2001) defendeu uma leitura diferente ${tag('debate')}. Pio XII, na Humani generis (1950), alertou contra negar a gratuidade da ordem sobrenatural ${tag('doutrina')}.</p>
<h3>Objeto moral e "atos intrinsecamente maus"</h3>
<p>João Paulo II, na Veritatis splendor (1993, §§71–83), reafirmou que há atos maus pelo objeto, independentemente da intenção, contra o "proporcionalismo" ${tag('doutrina')}. Moralistas discutem como determinar o objeto ${tag('debate')}.</p>
<h3>Pinckaers</h3>
<p>Servais Pinckaers contrastou a "moral da felicidade" de Tomás com a "moral da obrigação" do nominalismo e da casuística moderna ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'João Paulo II, Veritatis splendor (1993), §§71–83.' }, { texto: 'Henri de Lubac, O Mistério do Sobrenatural (1965).' }],
    exercicios: [
      mc('Surnaturel (1946) é de:', ['Garrigou-Lagrange', 'De Lubac', 'Feingold', 'Pinckaers'], 1, 'Crítica à "natureza pura".'),
      mc('A Veritatis splendor critica principalmente:', ['O tomismo', 'O proporcionalismo', 'O agostinismo', 'O estoicismo'], 1, '§§71–83.'),
      mc('"Moral da felicidade × moral da obrigação" é contraste de:', ['Pinckaers', 'MacIntyre', 'Kant', 'Finnis'], 0, 'As Fontes da Moral Cristã.'),
      disc('Exponha o debate sobre o desejo natural de ver Deus (De Lubac × Caetano/Feingold) e avalie.', ['Expõe as posições', 'Cita Humani generis', 'Avalia', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-10', titulo: 'Lei e lei natural',
  aprendera: ['A definição de lei (I-II, q. 90)', 'Os quatro tipos de lei', 'Os preceitos da lei natural e as inclinações (q. 94, a. 2)', 'A relação entre lei humana e lei natural'],
  explicacao: `
<h3>Definição</h3>
<p>Lei é "uma ordenação da razão para o bem comum, promulgada por quem tem o cuidado da comunidade" (I-II, q. 90, a. 4) ${tag('fato')}. Quatro elementos: razão, bem comum, autoridade, promulgação. Uma "lei" contra a razão ou o bem comum é antes "corrupção da lei" (q. 95, a. 2) ${tag('argumento')}.</p>
<h3>Quatro tipos (q. 91)</h3>
<ul>
<li><strong>Lei eterna</strong>: a razão divina que governa o universo.</li>
<li><strong>Lei natural</strong>: a participação da lei eterna na criatura racional.</li>
<li><strong>Lei humana</strong>: determinações concretas derivadas da lei natural.</li>
<li><strong>Lei divina</strong>: a lei revelada (Antiga e Nova), necessária porque o homem tem fim sobrenatural e a razão humana falha ${tag('doutrina')}.</li>
</ul>
<h3>O primeiro preceito (q. 94, a. 2)</h3>
<p>Assim como o primeiro princípio da razão teórica é o de não contradição, o primeiro da razão prática é: "o bem deve ser feito e buscado, e o mal evitado" ${tag('fato')}. Os demais preceitos seguem as inclinações naturais:</p>
<ol>
<li>Comum a todo ente: conservar o ser.</li>
<li>Comum aos animais: união dos sexos e educação dos filhos.</li>
<li>Própria do homem racional: conhecer a verdade sobre Deus e viver em sociedade.</li>
</ol>
<h3>Lei humana</h3>
<p>A lei humana deriva da natural por <strong>conclusão</strong> (não matar) ou por <strong>determinação</strong> (qual lado da rua dirigir) (q. 95, a. 2). Ela não deve proibir todos os vícios, mas os mais graves, que prejudicam os outros (q. 96, a. 2) ${tag('argumento')}.</p>
<h3>Uma lei injusta obriga?</h3>
<p>Leis injustas não obrigam em consciência, salvo para evitar escândalo ou desordem; contra a lei divina, nunca se deve obedecer (q. 96, a. 4) ${tag('fato')}.</p>`,
  vocabulario: [['Lei', 'Ordenação da razão para o bem comum, promulgada por quem cuida da comunidade.'], ['Lei eterna', 'Razão divina que governa o universo.'], ['Lei natural', 'Participação da lei eterna na criatura racional.'], ['Determinação', 'Especificação concreta de um princípio geral.'], ['Sindérese', 'Hábito natural dos primeiros princípios práticos.']],
  exemplos: '<p>"Não matar o inocente" é conclusão da lei natural. "Limite de velocidade de 60 km/h" é determinação: poderia ser 50 ou 70, mas alguma regra é necessária para o bem comum.</p>',
  contexto: `<p>O tratado da lei (I-II, qq. 90–108) influenciou o direito natural moderno, de Suárez a Grotius ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Por que existe lei natural (I-II, q. 91, a. 2, reconstruído)', tag: 'argumento',
    premissas: ['Todas as coisas participam da lei eterna, tendo inclinações para seus fins.', 'A criatura racional participa de modo mais excelente: conhece e dirige a si mesma.', 'Essa participação racional da lei eterna é o que chamamos lei natural.'],
    conclusao: 'Logo, há na criatura racional uma lei natural.',
    nota: 'A "nova teoria da lei natural" (Grisez, Finnis) interpreta a q. 94, a. 2 como lista de bens básicos evidentes, não deduzidos da natureza; tomistas aristotélicos contestam.' },
  objecoes: [{ objecao: 'Hume: não se deriva "deve" de "é"; a lei natural comete essa falácia.', tag: 'debate', resposta: 'Finnis responde que Tomás não deriva o dever de fatos, mas de princípios práticos evidentes. Outros (MacIntyre, Foot) contestam a própria separação entre fato e valor, apoiando-se na noção de bem de uma espécie.' }],
  aplicacao: '<p>Escolha uma lei do seu país e diga se é conclusão ou determinação da lei natural, e se cumpre os quatro elementos da definição.</p>',
  fonte: { obra: 'Tomás de Aquino, Suma Teológica I-II, q. 90, a. 4 e q. 94, a. 2', link: null, orientacao: '<p>Leia os dois artigos. Explique a analogia entre o primeiro princípio teórico e o prático.</p>' },
  perguntas: [
    { p: 'Qual a definição de lei?', r: 'Ordenação da razão para o bem comum, promulgada por quem cuida da comunidade.' },
    { p: 'Qual o primeiro preceito da lei natural?', r: 'O bem deve ser feito e buscado, e o mal evitado.' },
    { p: 'A lei humana deve proibir todos os vícios?', r: 'Não; só os mais graves, que prejudicam os outros.' },
  ],
  exercicios: [
    mc('A participação da lei eterna na criatura racional é a lei:', ['Divina', 'Natural', 'Humana', 'Eterna'], 1, 'q. 91, a. 2.'),
    mc('Qual lado da rua dirigir é exemplo de:', ['Conclusão', 'Determinação', 'Lei eterna', 'Lei divina'], 1, 'q. 95, a. 2.'),
    mc('Conhecer a verdade sobre Deus é inclinação:', ['Comum a todo ente', 'Comum aos animais', 'Própria do homem racional', 'Sobrenatural'], 2, 'q. 94, a. 2.'),
    mc('A "nova teoria da lei natural" é associada a:', ['Grisez e Finnis', 'Suárez e Grotius', 'Hume e Kant', 'Hobbes e Locke'], 0, 'Bens básicos.'),
    disc('A lei natural comete a falácia naturalista? Avalie com Hume, Finnis e MacIntyre.', ['Expõe a objeção', 'Expõe as respostas', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Lei: razão, bem comum, autoridade, promulgação.', 'Eterna, natural, humana, divina.', 'Primeiro preceito e inclinações.', 'Conclusão e determinação.', 'Lei injusta não obriga em consciência.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I-II, qq. 90–97.' }, { texto: 'John Finnis, Lei Natural e Direitos Naturais (1980).' }, { texto: 'Catecismo, §1954–1960.' }],
  revisao: [['Definição de lei', 'I-II, q. 90, a. 4.'], ['Primeiro preceito', 'I-II, q. 94, a. 2.'], ['Lei injusta', 'I-II, q. 96, a. 4.']],
  avancado: {
    texto: `<h3>Suárez e a virada voluntarista</h3>
<p>Francisco Suárez (De legibus, 1612) enfatizou a vontade do legislador na essência da lei, mais que Tomás ${tag('interpretacao')}. Grotius (De iure belli ac pacis, 1625) escreveu que o direito natural valeria "mesmo que se concedesse que Deus não existe" (<em>etiamsi daremus</em>) — hipótese que ele mesmo declara ímpia ${tag('fato')}.</p>
<h3>Lei natural hoje</h3>
<p>A Comissão Teológica Internacional publicou Em busca de uma ética universal: novo olhar sobre a lei natural (2009) ${tag('fato')}. No debate jurídico, a lei natural foi invocada após Nuremberg; Gustav Radbruch formulou a "fórmula de Radbruch" (1946) sobre a injustiça extrema que não é direito ${tag('fato')}.</p>
<h3>Variação dos preceitos</h3>
<p>Tomás admite que preceitos secundários podem falhar em casos raros e ser obscurecidos por costumes (q. 94, aa. 4–6), citando os germanos antigos, que segundo César não consideravam o roubo iníquo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Comissão Teológica Internacional, Em busca de uma ética universal (2009).' }, { texto: 'Gustav Radbruch, "Injustiça legal e direito supralegal" (1946).' }],
    exercicios: [
      mc('"Etiamsi daremus" é de:', ['Suárez', 'Grotius', 'Pufendorf', 'Tomás'], 1, 'De iure belli ac pacis.'),
      mc('A fórmula sobre injustiça extrema que não é direito é de:', ['Kelsen', 'Hart', 'Radbruch', 'Finnis'], 2, '1946.'),
      mc('Para Tomás, os preceitos secundários da lei natural:', ['Nunca falham', 'Podem ser obscurecidos por costumes', 'Não existem', 'São revelados'], 1, 'q. 94, aa. 4–6.'),
      disc('A fórmula de Radbruch é uma tese de lei natural? Compare com I-II, q. 95, a. 2.', ['Expõe Radbruch', 'Expõe Tomás', 'Compara', 'Conclusão justificada'])],
  },
}),

aula({
  id: 'm8-11', titulo: 'Virtudes',
  aprendera: ['A virtude como hábito operativo bom', 'Virtudes intelectuais e morais', 'As virtudes cardeais e a prudência como "auriga"', 'As virtudes teologais e as infusas'],
  prereq: ['Módulo 6: ética de Aristóteles'],
  explicacao: `
<h3>Hábito</h3>
<p>Hábito é uma disposição estável que inclina uma potência a agir de certo modo (I-II, q. 49). Virtude é o hábito operativo bom; vício, o mau (q. 55) ${tag('fato')}. Tomás cita a definição atribuída a Agostinho (compilada por Lombardo): "boa qualidade da mente, pela qual se vive retamente, de que ninguém usa mal, e que Deus opera em nós sem nós" — esta última cláusula vale para as virtudes infusas (q. 55, a. 4) ${tag('fato')}.</p>
<h3>Intelectuais e morais</h3>
<p>Virtudes intelectuais aperfeiçoam o intelecto: sabedoria, ciência, entendimento (teóricas); prudência e arte (práticas). Morais aperfeiçoam o apetite: justiça (vontade), fortaleza (irascível), temperança (concupiscível) (q. 57–58) ${tag('fato')}.</p>
<h3>Cardeais</h3>
<p>Prudência, justiça, fortaleza e temperança são "cardeais" (de <em>cardo</em>, dobradiça), pois as outras virtudes giram em torno delas (q. 61) ${tag('fato')}. A prudência é a "reta razão no agir" e "auriga das virtudes": sem ela, as morais não acertam o meio-termo; sem as morais, a prudência não tem o fim reto (q. 58, a. 5; q. 65, a. 1) ${tag('argumento')}.</p>
<h3>Conexão das virtudes</h3>
<p>As virtudes morais perfeitas são conexas: não se tem uma plenamente sem a prudência, e a prudência exige todas (q. 65, a. 1) ${tag('argumento')}.</p>
<h3>Teologais e infusas</h3>
<p>Fé, esperança e caridade têm Deus por objeto e são infundidas pela graça (q. 62). A caridade é a "forma das virtudes", ordenando-as ao fim último (II-II, q. 23, a. 8) ${tag('doutrina')}. Há também virtudes morais infusas, distintas das adquiridas (q. 63, a. 3) ${tag('interpretacao')}.</p>`,
  vocabulario: [['Hábito', 'Disposição estável de uma potência.'], ['Virtudes cardeais', 'Prudência, justiça, fortaleza, temperança.'], ['Auriga virtutum', 'A prudência como condutora das virtudes.'], ['Conexão das virtudes', 'Interdependência das virtudes perfeitas.'], ['Virtude infusa', 'Virtude dada pela graça.']],
  exemplos: '<p>Um soldado temerário tem "coragem" sem prudência: arrisca-se sem razão. Um covarde prudente calcula bem, mas não age. A fortaleza verdadeira exige ambas.</p>',
  contexto: `<p>As quatro virtudes cardeais já estão em Platão (República IV) e no livro da Sabedoria (8,7) ${tag('fato')}.</p>`,
  argumento: { titulo: 'A conexão das virtudes (I-II, q. 65, a. 1, reconstruído)', tag: 'argumento',
    premissas: ['Nenhuma virtude moral perfeita existe sem prudência, que determina o meio-termo.', 'A prudência requer que o apetite esteja bem disposto em relação a todos os fins, isto é, todas as virtudes morais.'],
    conclusao: 'Logo, quem tem uma virtude moral perfeita tem todas.',
    nota: 'Tomás distingue virtudes perfeitas e imperfeitas (inclinações naturais, que podem existir isoladas). A tese é forte e discutida.' },
  objecoes: [{ objecao: 'Conhecemos pessoas corajosas mas intemperantes.', tag: 'debate', resposta: 'Tomás diria que têm uma disposição imperfeita, não a virtude perfeita da fortaleza. A objeção força a precisar o que conta como "virtude perfeita".' }],
  aplicacao: '<p>Avalie-se nas quatro virtudes cardeais com um exemplo concreto de cada. Qual falta mais? Como a prudência afeta as demais?</p>',
  fonte: { obra: 'Tomás de Aquino, Suma Teológica I-II, qq. 55, 61 e 65', link: null, orientacao: '<p>Leia q. 61, a. 2 (por que são quatro) e q. 65, a. 1 (conexão). Reconstrua o argumento.</p>' },
  perguntas: [
    { p: 'O que é virtude para Tomás?', r: 'Hábito operativo bom.' },
    { p: 'Por que a prudência é "auriga das virtudes"?', r: 'Porque determina o meio-termo das virtudes morais.' },
    { p: 'Qual virtude é a "forma das virtudes"?', r: 'A caridade.' },
  ],
  exercicios: [
    mc('A fortaleza aperfeiçoa o apetite:', ['Concupiscível', 'Irascível', 'A vontade', 'O intelecto'], 1, 'q. 61, a. 2.'),
    mc('A prudência é virtude:', ['Teológica', 'Intelectual prática', 'Teórica', 'Infusa apenas'], 1, 'Reta razão no agir.'),
    mc('"Cardeal" vem de:', ['Cardinal da Igreja', 'Cardo, dobradiça', 'Cor vermelha', 'Coração'], 1, 'As outras giram em torno delas.'),
    mc('As cardeais já aparecem em:', ['Aristóteles apenas', 'República de Platão e Sabedoria 8,7', 'Kant', 'Agostinho apenas'], 1, 'Antes de Tomás.'),
    disc('A tese da conexão das virtudes é plausível? Responda à objeção do "corajoso intemperante".', ['Reconstrói o argumento', 'Distingue perfeita e imperfeita', 'Avalia a objeção', 'Conclusão justificada'])],
  resumo: ['Virtude: hábito operativo bom.', 'Intelectuais e morais.', 'Cardeais; prudência auriga.', 'Conexão das virtudes.', 'Teologais; caridade forma das virtudes.'],
  referencias: [{ texto: 'Tomás de Aquino, Suma Teológica I-II, qq. 49–67.' }, { texto: 'Josef Pieper, As Virtudes Fundamentais (1964).' }, { texto: 'Catecismo, §1803–1845.' }],
  revisao: [['Auriga virtutum', 'A prudência.'], ['Conexão das virtudes', 'I-II, q. 65, a. 1.'], ['Caridade', 'Forma das virtudes (II-II, q. 23, a. 8).']],
  avancado: {
    texto: `<h3>A prudência e suas partes</h3>
<p>Na II-II, qq. 47–56, Tomás detalha partes da prudência: memória, inteligência, docilidade, sagacidade, razão, providência, circunspecção e cautela; e vícios opostos como a precipitação e a "prudência da carne" ${tag('fato')}.</p>
<h3>Virtudes infusas e adquiridas</h3>
<p>Se o batizado recebe temperança infusa, por que ainda luta contra a intemperança? Tomás responde que a virtude infusa pode coexistir com disposições contrárias deixadas por atos anteriores (I-II, q. 65, a. 3, ad 2) ${tag('argumento')}. Teólogos contemporâneos (Angela Knobel) debatem a relação entre as duas ordens ${tag('debate')}.</p>
<h3>Ética das virtudes contemporânea</h3>
<p>Elizabeth Anscombe ("Modern Moral Philosophy", 1958) propôs voltar à psicologia moral antes de falar de "dever"; isso relançou a ética das virtudes (Foot, MacIntyre, Hursthouse) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'G. E. M. Anscombe, "Modern Moral Philosophy" (1958).' }, { texto: 'Tomás de Aquino, Suma Teológica II-II, qq. 47–56.' }],
    exercicios: [
      mc('"Modern Moral Philosophy" (1958) é de:', ['Foot', 'Anscombe', 'MacIntyre', 'Hursthouse'], 1, 'Relançou a ética das virtudes.'),
      mc('A docilidade é parte da:', ['Justiça', 'Prudência', 'Fortaleza', 'Temperança'], 1, 'II-II, q. 49.'),
      mc('Virtude infusa pode coexistir com disposições contrárias?', ['Não', 'Sim, segundo Tomás', 'Só nos santos', 'Só antes do batismo'], 1, 'I-II, q. 65, a. 3, ad 2.'),
      disc('Compare a ética das virtudes de Tomás com a de Hursthouse ou MacIntyre. O que muda sem a ordem sobrenatural?', ['Expõe Tomás', 'Expõe o autor contemporâneo', 'Compara', 'Conclusão justificada'])],
  },
}),

avaliacao('m8-12', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>A filosofia de Agostinho, Boécio e Anselmo; o método escolástico; a querela dos universais; e as teses centrais de Tomás sobre Deus, felicidade, lei e virtudes.</p>
<h3>Critério do Degrau 6</h3>
<p>Você deve ler um artigo da Suma identificando suas cinco seções, sem atribuir a Tomás a opinião das objeções, e reconstruir ao menos um argumento medieval com objeção e resposta. A primeira discursiva treina isso.</p>`,
[
  disc('Escolha um artigo da Suma não estudado nas aulas. Reconstrua suas cinco seções, cite-o corretamente e avalie se a resposta de Tomás à objeção mais forte é convincente.', ['Cinco seções corretas', 'Citação técnica correta', 'Não confunde objeção com tese', 'Avaliação argumentada']),
  disc('Compare as soluções de Agostinho e Boécio para o problema da presciência e da liberdade. Qual é mais forte? Considere uma objeção contemporânea.', ['Expõe Agostinho', 'Expõe Boécio', 'Objeção contemporânea', 'Conclusão justificada']),
  disc('Explique a querela dos universais e mostre uma consequência da posição adotada para a ética (lei natural) ou para a teologia (nomes divinos).', ['Expõe as posições', 'Define realismo moderado', 'Liga à ética ou teologia', 'Clareza']),
]),
];
