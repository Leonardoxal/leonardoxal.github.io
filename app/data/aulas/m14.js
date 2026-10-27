// Módulo 14 — Tradições filosóficas comparadas.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm14-1', titulo: 'Por que comparar tradições?',
  aprendera: ['Razões para estudar filosofias não ocidentais', 'Riscos da comparação: generalização, projeção, exotismo', 'Regras para comparar com honestidade', 'O que diz a Igreja sobre as outras religiões e sabedorias'],
  prereq: ['Módulo 8 concluído'],
  explicacao: `
<h3>Razões</h3>
<p>Muitos problemas filosóficos (o eu, a mudança, o bem, a linguagem) foram pensados de modo independente na Índia, na China e no mundo islâmico e judaico ${tag('fato')}. Compará-los ajuda a ver o que é universal e o que é próprio de cada tradição ${tag('interpretacao')}.</p>
<h3>Riscos</h3>
<ul>
<li><strong>Generalização</strong>: "o pensamento oriental é intuitivo" — falso; há lógica sofisticada na Índia (Nyāya) e na China (moístas) ${tag('fato')}.</li>
<li><strong>Projeção</strong>: ler conceitos ocidentais em textos alheios (traduzir <em>dharma</em> simplesmente por "dever").</li>
<li><strong>Exotismo</strong>: buscar no outro só o que confirma o que se quer ${tag('argumento')}.</li>
</ul>
<h3>Regras</h3>
<ol>
<li>Falar de escolas e autores, não de "o Oriente".</li>
<li>Ler textos primários em boas traduções, com notas.</li>
<li>Registrar termos no original e seus vários sentidos.</li>
<li>Comparar perguntas antes de comparar respostas ${tag('argumento')}.</li>
</ol>
<h3>A Igreja</h3>
<p>A declaração Nostra aetate (1965) afirma que a Igreja "nada rejeita do que há de verdadeiro e santo" nas outras religiões, ao mesmo tempo que anuncia Cristo, "caminho, verdade e vida" (§2) ${tag('doutrina')}. Fides et ratio (§72) fala da riqueza do pensamento indiano e de outras culturas ${tag('doutrina')}.</p>`,
  vocabulario: [['Filosofia comparada', 'Estudo de problemas filosóficos entre tradições.'], ['Projeção', 'Ler conceitos próprios no texto alheio.'], ['Exotismo', 'Idealização do outro.'], ['Nostra aetate', 'Declaração do Vaticano II sobre religiões não cristãs.'], ['Escola', 'Corrente com autores e textos determinados.']],
  exemplos: '<p>"Os chineses pensam em harmonia, os ocidentais em conflito" — generalização. Mozi criticou Confúcio duramente; Platão buscou harmonia na alma. As tradições são plurais por dentro.</p>',
  contexto: `<p>A filosofia comparada tornou-se campo acadêmico no século XX (revista Philosophy East and West, 1951) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Por que comparar perguntas antes de respostas (reconstruído)', tag: 'argumento',
    premissas: ['Respostas só têm sentido em relação às perguntas que respondem.', 'Tradições diferentes podem fazer perguntas diferentes sob palavras parecidas.', 'Comparar respostas a perguntas diferentes gera falsas oposições ou falsas semelhanças.'],
    conclusao: 'Logo, a comparação honesta começa pelas perguntas.',
    nota: 'O mesmo vale dentro do Ocidente: "ser" em Parmênides, Tomás e Heidegger.' },
  objecoes: [{ objecao: 'Tradições são incomensuráveis; comparar é impossível.', tag: 'debate', resposta: 'MacIntyre fala de incomensurabilidade parcial e de tradução imperfeita, mas possível. A experiência de tradutores mostra que a compreensão é difícil, não impossível.' }],
  aplicacao: '<p>Liste no Caderno três generalizações que você já ouviu sobre "o Oriente" e procure um contraexemplo para cada.</p>',
  fonte: { obra: 'Concílio Vaticano II, Nostra aetate §§1–2; João Paulo II, Fides et ratio §72', link: null, orientacao: '<p>Leia os dois textos (curtos) e anote os critérios de discernimento propostos.</p>' },
  perguntas: [
    { p: 'Cite um risco da comparação.', r: 'Generalização, projeção ou exotismo.' },
    { p: 'O que diz Nostra aetate §2?', r: 'A Igreja nada rejeita do que há de verdadeiro e santo nas outras religiões.' },
    { p: 'Por que comparar perguntas primeiro?', r: 'Porque respostas dependem das perguntas.' },
  ],
  exercicios: [
    mc('Nostra aetate é de:', ['1950', '1965', '1998', '2000'], 1, 'Vaticano II.'),
    mc('Nyāya é uma escola indiana conhecida por:', ['Lógica e epistemologia', 'Poesia', 'Medicina', 'Política'], 0, 'Contraexemplo à "intuição oriental".'),
    mc('"O Oriente é intuitivo" é:', ['Fato', 'Generalização', 'Doutrina', 'Hipótese provada'], 1, 'Evitar.'),
    mc('Fides et ratio menciona o pensamento indiano em:', ['§72', '§1', '§100', '§5'], 0, 'Culturas.'),
    disc('Proponha um protocolo para comparar um conceito de duas tradições (por exemplo, "virtude" em Aristóteles e Confúcio).', ['Regras explícitas', 'Termos no original', 'Comparação de perguntas', 'Clareza'])],
  resumo: ['Razões para comparar.', 'Generalização, projeção, exotismo.', 'Quatro regras.', 'Nostra aetate.', 'Perguntas antes de respostas.'],
  referencias: [{ texto: 'Concílio Vaticano II, Nostra aetate (1965).' }, { texto: 'João Paulo II, Fides et ratio (1998), §72.' }, { texto: 'Bryan Van Norden, Taking Back Philosophy (2017).' }],
  revisao: [['Nostra aetate §2', 'Nada rejeita do verdadeiro e santo.'], ['Projeção', 'Erro de comparação.'], ['Perguntas antes de respostas', 'Regra metodológica.']],
  avancado: {
    texto: `<h3>Debates sobre o cânone</h3>
<p>Bryan Van Norden (Taking Back Philosophy, 2017) defendeu incluir filosofias não ocidentais nos currículos; críticos responderam que a tradição ocidental tem unidade própria ${tag('debate')}.</p>
<h3>Dominus Iesus</h3>
<p>Dominus Iesus (2000) distingue a fé teologal da "crença" nas outras religiões e afirma a unicidade salvífica de Cristo ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Congregação para a Doutrina da Fé, Dominus Iesus (2000), §7.' }],
    exercicios: [
      mc('Taking Back Philosophy é de:', ['Van Norden', 'Garfield', 'Ivanhoe', 'Smart'], 0, '2017.'),
      mc('Dominus Iesus distingue fé teologal e:', ['Razão', 'Crença', 'Opinião', 'Ciência'], 1, '§7.'),
      mc('A inclusão de filosofias não ocidentais no currículo é:', ['Consenso', 'Debate', 'Dogma', 'Proibida'], 1, 'Debate.'),
      disc('Como um estudante católico pode estudar outras tradições com abertura e fidelidade? Use Nostra aetate e Dominus Iesus.', ['Dois documentos', 'Critérios', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'm14-2', titulo: 'Tradições indianas: um panorama plural',
  aprendera: ['Os Vedas e as Upaniṣads', 'Escolas "ortodoxas" (āstika) e "heterodoxas" (nāstika)', 'Vedānta: Śaṅkara e Rāmānuja', 'Budismo: não-eu e originação dependente'],
  explicacao: `
<h3>Fontes</h3>
<p>Os Vedas (composição oral c. 1500–500 a.C., datas aproximadas e debatidas) e as Upaniṣads, textos especulativos posteriores, discutem a relação entre o <em>ātman</em> (eu) e o <em>brahman</em> (realidade última) ${tag('fato')}.</p>
<h3>Escolas</h3>
<p>A doxografia tradicional distingue seis escolas que aceitam a autoridade dos Vedas (Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta) e escolas que não a aceitam (budismo, jainismo, Cārvāka materialista) ${tag('fato')}. O esquema é posterior e simplifica uma história complexa ${tag('interpretacao')}.</p>
<h3>Vedānta</h3>
<p>Śaṅkara (c. século VIII) defendeu o Advaita (não dualismo): só brahman é real; a multiplicidade é <em>māyā</em> ${tag('fato')}. Rāmānuja (século XI–XII) defendeu um não dualismo qualificado, com Deus pessoal e almas reais ${tag('fato')}. Madhva defendeu o dualismo ${tag('fato')}.</p>
<h3>Budismo</h3>
<p>Siddhārtha Gautama (século V a.C., data debatida) ensinou as Quatro Nobres Verdades. Doutrinas centrais: <em>anattā</em> (não-eu: não há um eu permanente) e <em>pratītyasamutpāda</em> (originação dependente). Nāgārjuna (c. século II) desenvolveu a "vacuidade" (<em>śūnyatā</em>) ${tag('fato')}.</p>
<h3>Lógica</h3>
<p>A escola Nyāya desenvolveu uma teoria da inferência com cinco membros e uma epistemologia dos meios de conhecimento (<em>pramāṇa</em>) ${tag('fato')}.</p>`,
  vocabulario: [['Ātman', 'O eu.'], ['Brahman', 'Realidade última.'], ['Advaita', 'Não dualismo.'], ['Anattā', 'Não-eu (budismo).'], ['Pramāṇa', 'Meio válido de conhecimento.']],
  exemplos: '<p>Nāgasena, no diálogo Milindapañha, compara o "eu" a uma carruagem: não há carruagem além de rodas, eixo e caixa. Compare com a teoria da identidade pessoal de Hume.</p>',
  contexto: `<p>As datas indianas antigas são incertas por depender de tradição oral ${tag('fato')}.</p>`,
  argumento: { titulo: 'O argumento da carruagem (Milindapañha, reconstruído)', tag: 'argumento',
    premissas: ['Uma carruagem não é nenhuma de suas partes isoladas.', 'Não é algo além das partes.', 'Logo, "carruagem" é designação convencional de um conjunto.', 'O mesmo vale para o "eu" em relação aos agregados (corpo, sensações etc.).'],
    conclusao: 'Portanto, não há um eu substancial além dos agregados.',
    nota: 'Um aristotélico responderia que a forma substancial unifica as partes; a carruagem é artefato, o vivente não.' },
  objecoes: [{ objecao: 'Se não há eu, quem é responsável pelas ações e quem alcança a libertação?', tag: 'debate', resposta: 'Escolas budistas responderam de modos diferentes (continuidade causal, os pudgalavādins com uma "pessoa" nem idêntica nem distinta dos agregados). A objeção mostra a pluralidade interna do budismo.' }],
  aplicacao: '<p>Compare no Caderno a carruagem de Nāgasena com a teoria de Hume e com a alma como forma do corpo em Tomás.</p>',
  fonte: { obra: 'Chāndogya Upaniṣad VI (tat tvam asi); Milindapañha, diálogo da carruagem', link: null, orientacao: '<p>Leia os dois textos em tradução com notas. Anote os termos originais.</p>' },
  perguntas: [
    { p: 'Qual a tese do Advaita?', r: 'Só brahman é real; a multiplicidade é māyā.' },
    { p: 'O que é anattā?', r: 'Não há um eu permanente.' },
    { p: 'O que estudava a escola Nyāya?', r: 'Lógica e epistemologia.' },
  ],
  exercicios: [
    mc('O Advaita foi sistematizado por:', ['Rāmānuja', 'Śaṅkara', 'Madhva', 'Nāgārjuna'], 1, 'Século VIII.'),
    mc('Śūnyatā é associada a:', ['Śaṅkara', 'Nāgārjuna', 'Confúcio', 'Madhva'], 1, 'Vacuidade.'),
    mc('Escola indiana materialista:', ['Vedānta', 'Cārvāka', 'Yoga', 'Mīmāṃsā'], 1, 'Nāstika.'),
    mc('Não dualismo qualificado é de:', ['Rāmānuja', 'Śaṅkara', 'Buda', 'Mahāvīra'], 0, 'Viśiṣṭādvaita.'),
    disc('Compare a doutrina budista do não-eu com a alma em Tomás. Onde está a diferença decisiva?', ['Expõe anattā', 'Expõe Tomás', 'Identifica a diferença', 'Conclusão justificada'])],
  resumo: ['Vedas e Upaniṣads.', 'Āstika e nāstika.', 'Vedānta plural.', 'Budismo: não-eu, originação dependente.', 'Lógica Nyāya.'],
  referencias: [{ texto: 'Upaniṣads (trad. com notas, p. ex. Patrick Olivelle).' }, { texto: 'Milindapañha (As Perguntas do Rei Milinda).' }, { texto: 'Jonardon Ganeri, The Concealed Art of the Soul (2007).' }],
  revisao: [['Advaita', 'Śaṅkara.'], ['Anattā', 'Não-eu.'], ['Pramāṇa', 'Meio de conhecimento.']],
  avancado: {
    texto: `<h3>Bede Griffiths e o diálogo</h3>
<p>Monges católicos como Henri Le Saux (Abhishiktananda) e Bede Griffiths viveram na Índia buscando diálogo com o Vedānta ${tag('fato')}. A Congregação para a Doutrina da Fé publicou a carta Orationis formas (1989) sobre métodos orientais de meditação ${tag('doutrina')}.</p>
<h3>Lógica budista</h3>
<p>Dignāga e Dharmakīrti (séculos V–VII) desenvolveram uma epistemologia com percepção e inferência como únicos meios de conhecimento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Congregação para a Doutrina da Fé, Orationis formas (1989).' }, { texto: 'Jay Garfield, Engaging Buddhism (2015).' }],
    exercicios: [
      mc('Orationis formas (1989) trata de:', ['Liturgia', 'Métodos orientais de meditação', 'Moral sexual', 'Economia'], 1, 'CDF.'),
      mc('Dignāga e Dharmakīrti são:', ['Vedantinos', 'Lógicos budistas', 'Jainistas', 'Confucianos'], 1, 'Séculos V–VII.'),
      mc('Abhishiktananda era:', ['Hindu', 'Monge católico na Índia', 'Budista', 'Muçulmano'], 1, 'Henri Le Saux.'),
      disc('Que critérios Orationis formas propõe para avaliar métodos orientais de oração?', ['Expõe critérios', 'Aplica a um caso', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm14-3', titulo: 'Tradições chinesas: confucionismo e daoísmo',
  aprendera: ['Confúcio e os Analectos: rén, lǐ, junzi', 'Mêncio e Xunzi sobre a natureza humana', 'Daodejing e Zhuangzi', 'Neoconfucionismo e comparação com a ética das virtudes'],
  explicacao: `
<h3>Confúcio</h3>
<p>Confúcio (Kongzi, 551–479 a.C., datas tradicionais) é conhecido pelos Analectos (Lunyu), coletânea de ditos organizada por discípulos ${tag('fato')}. Conceitos: <em>rén</em> (humanidade, benevolência), <em>lǐ</em> (ritos, formas de conduta), <em>junzi</em> (pessoa exemplar), piedade filial (<em>xiào</em>) ${tag('fato')}. "Não faças aos outros o que não queres para ti" (Analectos 15.24) ${tag('fato')}.</p>
<h3>Natureza humana</h3>
<p>Mêncio (século IV a.C.) defendeu que a natureza humana é boa (os "quatro brotos": compaixão, vergonha, deferência, discernimento) — exemplo da criança à beira do poço ${tag('fato')}. Xunzi (século III a.C.) defendeu que a natureza é má e precisa ser formada pelos ritos ${tag('fato')}.</p>
<h3>Daoísmo</h3>
<p>O Daodejing (atribuído a Laozi; autoria e data debatidas) fala do Dao inominável e do <em>wúwéi</em> (não ação forçada) ${tag('fato')}. O Zhuangzi usa histórias e paradoxos (o sonho da borboleta) para relativizar distinções ${tag('fato')}.</p>
<h3>Moísmo</h3>
<p>Mozi criticou o confucionismo, defendendo o "amor imparcial" (<em>jiān ài</em>) e argumentos de utilidade; os moístas posteriores desenvolveram lógica ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Estudiosos (Edward Slingerland, Bryan Van Norden) compararam o confucionismo com a ética das virtudes aristotélica; Matteo Ricci (século XVI) já buscou pontos de contato com o cristianismo ${tag('interpretacao')}.</p>`,
  vocabulario: [['Rén', 'Humanidade, benevolência.'], ['Lǐ', 'Ritos, formas de conduta.'], ['Junzi', 'Pessoa exemplar.'], ['Dao', 'Caminho.'], ['Wúwéi', 'Não ação forçada.']],
  exemplos: '<p>Mêncio: qualquer pessoa que vê uma criança prestes a cair num poço sente alarme e compaixão, sem calcular vantagem. Isso mostraria um "broto" de bondade natural.</p>',
  contexto: `<p>Os jesuítas Matteo Ricci e outros traduziram textos confucianos para o latim; a "Querela dos Ritos" (séculos XVII–XVIII) discutiu se os ritos confucianos eram compatíveis com o cristianismo ${tag('fato')}.</p>`,
  argumento: { titulo: 'A criança e o poço (Mêncio 2A6, reconstruído)', tag: 'argumento',
    premissas: ['Diante da criança em perigo, todos sentem alarme e compaixão.', 'Essa reação não vem de cálculo de vantagem.', 'Logo, há na natureza humana um início espontâneo de benevolência.'],
    conclusao: 'Portanto, a natureza humana tende ao bem, e a virtude é cultivo desse broto.',
    nota: 'Compare com a sindérese em Tomás e com o "sentimento moral" de Hume.' },
  objecoes: [{ objecao: 'Xunzi: se a natureza fosse boa, não precisaríamos de ritos e mestres.', tag: 'debate', resposta: 'Mêncio responde que brotos precisam ser cultivados. A tradição cristã acrescentaria a ferida do pecado original: a natureza é boa, mas ferida.' }],
  aplicacao: '<p>Compare no Caderno Mêncio, Xunzi e a doutrina católica do pecado original (CIC §405).</p>',
  fonte: { obra: 'Analectos, livros 1–4; Mêncio 2A6 e 6A; Daodejing caps. 1–3', link: null, orientacao: '<p>Leia os trechos em tradução com notas. Anote os termos chineses.</p>' },
  perguntas: [
    { p: 'O que é rén?', r: 'Humanidade, benevolência.' },
    { p: 'Qual a tese de Mêncio sobre a natureza humana?', r: 'É boa (quatro brotos).' },
    { p: 'O que é wúwéi?', r: 'Não ação forçada.' },
  ],
  exercicios: [
    mc('A natureza humana é má e precisa de ritos: tese de:', ['Mêncio', 'Xunzi', 'Laozi', 'Mozi'], 1, 'Século III a.C.'),
    mc('O sonho da borboleta está no:', ['Daodejing', 'Zhuangzi', 'Analectos', 'Mêncio'], 1, 'Paradoxo.'),
    mc('"Amor imparcial" é doutrina de:', ['Confúcio', 'Mozi', 'Zhuangzi', 'Xunzi'], 1, 'Moísmo.'),
    mc('A Querela dos Ritos envolveu:', ['Jesuítas e ritos confucianos', 'Luteranos e budistas', 'Muçulmanos e daoístas', 'Gregos e romanos'], 0, 'Séculos XVII–XVIII.'),
    disc('Compare o junzi confuciano com o homem virtuoso de Aristóteles.', ['Expõe os dois', 'Semelhanças', 'Diferenças', 'Conclusão justificada'])],
  resumo: ['Confúcio: rén, lǐ, junzi.', 'Mêncio × Xunzi.', 'Daoísmo.', 'Moísmo.', 'Comparação com virtudes.'],
  referencias: [{ texto: 'Confúcio, Analectos (trad. com notas, p. ex. Edward Slingerland).' }, { texto: 'Mêncio, Mengzi.' }, { texto: 'Laozi, Daodejing.' }],
  revisao: [['Rén', 'Benevolência.'], ['Mêncio 2A6', 'Criança e poço.'], ['Wúwéi', 'Não ação.']],
  avancado: {
    texto: `<h3>Neoconfucionismo</h3>
<p>Zhu Xi (1130–1200) sintetizou o confucionismo com uma metafísica de princípio (<em>lǐ</em>, outro caractere) e força vital (<em>qì</em>) ${tag('fato')}. Wang Yangming (1472–1529) enfatizou a unidade entre conhecimento e ação ${tag('fato')}.</p>
<h3>Ricci</h3>
<p>Matteo Ricci, em O Verdadeiro Significado do Senhor do Céu (1603), argumentou que o confucionismo antigo conhecia um Deus supremo (Shangdi) e criticou o neoconfucionismo ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Matteo Ricci, O Verdadeiro Significado do Senhor do Céu (1603).' }, { texto: 'Bryan Van Norden, Introduction to Classical Chinese Philosophy (2011).' }],
    exercicios: [
      mc('Zhu Xi trabalhou com os conceitos de:', ['Rén e xiào', 'Lǐ (princípio) e qì', 'Dao e de', 'Wúwéi e ziran'], 1, 'Neoconfucionismo.'),
      mc('Unidade de conhecimento e ação: tese de:', ['Zhu Xi', 'Wang Yangming', 'Mêncio', 'Mozi'], 1, '1472–1529.'),
      mc('Ricci identificou no confucionismo antigo:', ['Ateísmo', 'Um Deus supremo (Shangdi)', 'Budismo', 'Panteísmo'], 1, '1603.'),
      disc('Avalie a estratégia de Ricci de aproximar confucionismo antigo e cristianismo.', ['Expõe Ricci', 'Objeções', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm14-4', titulo: 'Filosofia judaica: Maimônides',
  aprendera: ['Vida e obra de Maimônides', 'O Guia dos Perplexos: Escritura e filosofia', 'Teologia negativa e atributos divinos', 'A questão da eternidade do mundo e a influência em Tomás'],
  prereq: ['Módulo 8, aula 8'],
  explicacao: `
<h3>Vida</h3>
<p>Moisés Maimônides (Moshe ben Maimon, 1138–1204) nasceu em Córdoba, fugiu da perseguição almôada e viveu no Egito como médico e líder da comunidade judaica ${tag('fato')}. Escreveu o Mishné Torá (código da lei judaica) e o Guia dos Perplexos (c. 1190, em árabe com caracteres hebraicos) ${tag('fato')}.</p>
<h3>O Guia</h3>
<p>Destinado ao judeu instruído "perplexo" entre a Torá e a filosofia aristotélica, o Guia interpreta termos antropomórficos da Escritura como figurados ${tag('fato')}.</p>
<h3>Atributos negativos</h3>
<p>Deus é absolutamente uno e simples; atributos positivos introduziriam multiplicidade. Só se pode dizer o que Deus não é; quanto mais negações, mais nos aproximamos dele (Guia I, 50–60) ${tag('fato')}. Atributos de ação (misericordioso) descrevem efeitos, não a essência ${tag('fato')}.</p>
<h3>Eternidade do mundo</h3>
<p>Maimônides sustenta que nem a eternidade nem a criação no tempo são demonstráveis; aceita a criação pela Torá e porque é mais provável (Guia II, 13–25) ${tag('fato')}. Tomás segue posição semelhante: a criação temporal é de fé, não demonstrável (ST I, q. 46, a. 2) ${tag('fato')}.</p>
<h3>Influência</h3>
<p>Tomás cita "Rabi Moisés" frequentemente, concordando e discordando (por exemplo, sobre os nomes divinos, ST I, q. 13, a. 2) ${tag('fato')}.</p>`,
  vocabulario: [['Guia dos Perplexos', 'Obra filosófica de Maimônides.'], ['Atributos negativos', 'Dizer o que Deus não é.'], ['Atributos de ação', 'Descrevem efeitos divinos.'], ['Mishné Torá', 'Código da lei judaica.'], ['Antropomorfismo', 'Atribuir a Deus traços humanos.']],
  exemplos: '<p>"A mão de Deus" não designa membro corporal, mas poder. Maimônides dedica os primeiros capítulos do Guia a explicar esses termos.</p>',
  contexto: `<p>Maimônides escreveu no mundo islâmico, em diálogo com al-Fārābī e Avicena ${tag('fato')}.</p>`,
  argumento: { titulo: 'Atributos positivos introduziriam multiplicidade (Guia I, 51, reconstruído)', tag: 'argumento',
    premissas: ['Deus é absolutamente uno e simples.', 'Um atributo positivo distinto da essência introduziria composição.', 'Um atributo idêntico à essência nada acrescentaria ao conhecimento.'],
    conclusao: 'Logo, só atributos negativos (e de ação) se aplicam propriamente a Deus.',
    nota: 'Tomás objeta que, se só negássemos, dizer "Deus é bom" não diria mais que "Deus não é mau"; propõe a analogia (aula 8-8).' },
  objecoes: [{ objecao: 'A teologia negativa radical torna a religião vazia.', tag: 'debate', resposta: 'Maimônides responde que as negações progressivas são conhecimento real e que os atributos de ação orientam a imitação de Deus. Tomás oferece a via da analogia como meio-termo.' }],
  aplicacao: '<p>Compare no Caderno a teologia negativa de Maimônides e a analogia de Tomás aplicadas a "Deus é sábio".</p>',
  fonte: { obra: 'Maimônides, Guia dos Perplexos I, 50–60 e II, 25; Tomás, ST I, q. 13, a. 2', link: null, orientacao: '<p>Leia Guia I, 58 e o artigo de Tomás. Reconstrua a objeção de Tomás.</p>' },
  perguntas: [
    { p: 'Para quem foi escrito o Guia?', r: 'Para o judeu instruído perplexo entre a Torá e a filosofia.' },
    { p: 'O que são atributos de ação?', r: 'Descrevem efeitos divinos, não a essência.' },
    { p: 'Qual a posição sobre a eternidade do mundo?', r: 'Não demonstrável; aceita a criação pela Torá.' },
  ],
  exercicios: [
    mc('Maimônides nasceu em:', ['Fez', 'Córdoba', 'Cairo', 'Toledo'], 1, '1138.'),
    mc('O Guia foi escrito em:', ['Hebraico', 'Árabe com caracteres hebraicos', 'Latim', 'Grego'], 1, 'Judeo-árabe.'),
    mc('Tomás chama Maimônides de:', ['O Comentador', 'Rabi Moisés', 'O Filósofo', 'O Mestre'], 1, 'Suma.'),
    mc('Para Tomás, a criação no tempo é:', ['Demonstrável', 'De fé', 'Falsa', 'Irrelevante'], 1, 'ST I, q. 46, a. 2.'),
    disc('Teologia negativa (Maimônides) ou analogia (Tomás)? Argumente.', ['Expõe Maimônides', 'Expõe Tomás', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Córdoba e Egito.', 'Guia dos Perplexos.', 'Atributos negativos.', 'Eternidade do mundo.', 'Influência em Tomás.'],
  referencias: [{ texto: 'Maimônides, Guia dos Perplexos.' }, { texto: 'Tomás de Aquino, Suma Teológica I, q. 13, a. 2; q. 46, a. 2.' }, { texto: 'Herbert Davidson, Moses Maimonides: The Man and His Works (2005).' }],
  revisao: [['Atributos negativos', 'Guia I, 50–60.'], ['Rabi Moisés', 'Maimônides em Tomás.'], ['Eternidade do mundo', 'Não demonstrável (Maimônides e Tomás).']],
  avancado: {
    texto: `<h3>Os treze princípios</h3>
<p>No comentário à Mishná (Sanhedrin, cap. 10), Maimônides formulou treze princípios da fé judaica ${tag('fato')}.</p>
<h3>Leituras esotéricas</h3>
<p>Leo Strauss (Perseguição e a Arte de Escrever, 1952) leu o Guia como obra com ensinamento esotérico oculto; a leitura é debatida ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Leo Strauss, Perseguição e a Arte de Escrever (1952).' }],
    exercicios: [
      mc('Os treze princípios estão no comentário a:', ['Torá', 'Mishná', 'Talmude de Jerusalém', 'Guia'], 1, 'Sanhedrin 10.'),
      mc('A leitura esotérica do Guia é de:', ['Strauss', 'Davidson', 'Wolfson', 'Pines'], 0, '1952.'),
      mc('A leitura de Strauss é:', ['Consenso', 'Debatida', 'Doutrina', 'Refutada'], 1, 'Debate.'),
      disc('Avalie a hipótese de Strauss sobre o Guia: que evidências a apoiam e quais a enfraquecem?', ['Expõe Strauss', 'Evidências', 'Objeções', 'Conclusão'])],
  },
}),

aula({
  id: 'm14-5', titulo: 'Falsafa: Avicena e Averróis',
  aprendera: ['O que é falsafa e o kalām', 'Avicena: ser necessário, essência e existência, o "homem voador"', 'Al-Ghazali e a Incoerência dos Filósofos', 'Averróis: comentários, Tratado Decisivo e o intelecto'],
  prereq: ['Módulo 8, aulas 5 e 6'],
  explicacao: `
<h3>Falsafa e kalām</h3>
<p>"Falsafa" designa a filosofia de tradição grega no mundo islâmico (al-Kindī, al-Fārābī, Avicena, Averróis); "kalām", a teologia especulativa (mutazilitas, asharitas) ${tag('fato')}. A tradução de Aristóteles e outros para o árabe, em Bagdá (séculos VIII–X), foi decisiva ${tag('fato')}.</p>
<h3>Avicena</h3>
<p>Ibn Sīnā (980–1037), persa, médico (Cânone da Medicina) e filósofo (Livro da Cura) ${tag('fato')}. Distinguiu essência e existência: a existência é "acidente" da essência nos entes contingentes; só no Ser Necessário essência e existência coincidem ${tag('interpretacao')}. Prova do Ser Necessário pela contingência ${tag('argumento')}. O "homem voador": alguém criado no ar, sem sensações, ainda saberia que existe — argumento para a imaterialidade da alma ${tag('fato')}.</p>
<h3>Al-Ghazali</h3>
<p>Na Incoerência dos Filósofos (c. 1095), al-Ghazali acusou os filósofos de erro em vinte pontos, três deles de incredulidade: eternidade do mundo, Deus não conhecer os particulares, negação da ressurreição corporal ${tag('fato')}. Criticou a causalidade necessária: o fogo não queima o algodão por necessidade, mas porque Deus cria a queima ${tag('fato')}.</p>
<h3>Averróis</h3>
<p>Ibn Rushd (1126–1198), juiz em Córdoba, escreveu comentários a Aristóteles (por isso "o Comentador") e a Incoerência da Incoerência contra al-Ghazali ${tag('fato')}. No Tratado Decisivo, sustenta que a Lei religiosa ordena filosofar e que a verdade não contradiz a verdade ${tag('fato')}. Sua tese da unidade do intelecto material para todos os homens foi combatida por Tomás (1270) ${tag('fato')}.</p>`,
  vocabulario: [['Falsafa', 'Filosofia de tradição grega no Islã.'], ['Kalām', 'Teologia especulativa islâmica.'], ['Ser Necessário', 'Ser cuja essência é existir (Avicena).'], ['Homem voador', 'Experimento mental de Avicena sobre a alma.'], ['Unidade do intelecto', 'Tese de Averróis: um intelecto para todos.']],
  exemplos: '<p>O homem voador: imagine-se criado agora, flutuando, sem ver, ouvir ou tocar nada, nem mesmo o próprio corpo. Você saberia que existe? Avicena diz que sim. Compare com o cogito de Descartes.</p>',
  contexto: `<p>As traduções latinas de Toledo (século XII) levaram Avicena e Averróis às universidades europeias ${tag('fato')}.</p>`,
  argumento: { titulo: 'O homem voador (Avicena, De anima I, 1, reconstruído)', tag: 'argumento',
    premissas: ['O homem voador não percebe nenhum corpo, nem o seu.', 'Ainda assim afirma sua própria existência.', 'O que é afirmado é diferente do que não é afirmado.'],
    conclusao: 'Logo, a alma é distinta do corpo.',
    nota: 'A objeção é a mesma feita a Descartes: conhecer A sem conhecer B não prova que A seja distinto de B.' },
  objecoes: [{ objecao: 'Al-Ghazali: a causalidade necessária limita a onipotência de Deus.', tag: 'debate', resposta: 'Averróis respondeu que negar as causas é negar a ciência. Tomás defende causas segundas reais, por meio das quais Deus age (causalidade primária e secundária).' }],
  aplicacao: '<p>Compare no Caderno o homem voador de Avicena e o cogito de Descartes: semelhanças e diferenças.</p>',
  fonte: { obra: 'Averróis, Tratado Decisivo; al-Ghazali, Incoerência dos Filósofos, questão 17', link: null, orientacao: '<p>Leia o Tratado Decisivo (curto) e a questão 17 de al-Ghazali (causalidade).</p>' },
  perguntas: [
    { p: 'Diferença entre falsafa e kalām?', r: 'Filosofia de tradição grega × teologia especulativa.' },
    { p: 'O que mostra o homem voador?', r: 'A distinção entre alma e corpo, segundo Avicena.' },
    { p: 'Qual a tese do Tratado Decisivo?', r: 'A Lei ordena filosofar; a verdade não contradiz a verdade.' },
  ],
  exercicios: [
    mc('A Incoerência dos Filósofos é de:', ['Avicena', 'al-Ghazali', 'Averróis', 'al-Fārābī'], 1, 'C. 1095.'),
    mc('"O Comentador" é:', ['Avicena', 'Averróis', 'al-Kindī', 'Maimônides'], 1, 'Comentários a Aristóteles.'),
    mc('Al-Ghazali exemplifica sua crítica à causalidade com:', ['Fogo e algodão', 'Bola de bilhar', 'Pão e fome', 'Sol e luz'], 0, 'Questão 17.'),
    mc('Tomás combateu a tese averroísta da:', ['Criação', 'Unidade do intelecto', 'Eternidade da alma', 'Existência de Deus'], 1, '1270.'),
    disc('Compare as posições de al-Ghazali, Averróis e Tomás sobre a causalidade.', ['Três posições', 'Textos', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Falsafa e kalām.', 'Avicena: essência, existência, homem voador.', 'Al-Ghazali e a causalidade.', 'Averróis: comentários e Tratado Decisivo.', 'Recepção latina.'],
  referencias: [{ texto: 'Avicena, Livro da Cura (De anima).' }, { texto: 'Al-Ghazali, A Incoerência dos Filósofos.' }, { texto: 'Averróis, Tratado Decisivo.' }],
  revisao: [['Homem voador', 'Avicena.'], ['Incoerência dos Filósofos', 'Al-Ghazali.'], ['Tratado Decisivo', 'Averróis.']],
  avancado: {
    texto: `<h3>Gutas e a tradução</h3>
<p>Dimitri Gutas (Pensamento Grego, Cultura Árabe, 1998) estudou o movimento de tradução greco-árabe sob os abássidas ${tag('fato')}.</p>
<h3>Ratisbona</h3>
<p>Bento XVI, no discurso de Ratisbona (2006), discutiu a relação entre fé e razão, citando a tradição islâmica e a teologia voluntarista; o discurso gerou polêmica e diálogo ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Dimitri Gutas, Greek Thought, Arabic Culture (1998).' }, { texto: 'Bento XVI, Discurso na Universidade de Ratisbona (12 de setembro de 2006).' }],
    exercicios: [
      mc('Greek Thought, Arabic Culture é de:', ['Gutas', 'Black', 'Wolfson', 'Corbin'], 0, '1998.'),
      mc('O discurso de Ratisbona é de:', ['2000', '2006', '2013', '1998'], 1, 'Bento XVI.'),
      mc('O tema central de Ratisbona era:', ['Economia', 'Fé e razão', 'Liturgia', 'Família'], 1, 'Logos.'),
      disc('Analise o argumento de Ratisbona sobre fé, razão e voluntarismo. Compare com al-Ghazali e Averróis.', ['Expõe o discurso', 'Compara', 'Avalia', 'Conclusão'])],
  },
}),

avaliacao('m14-6', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>A capacidade de apresentar perguntas fundamentais das tradições indianas, chinesas, judaicas e islâmicas sem generalizações, e de relacionar falsafa e filosofia judaica com a escolástica.</p>
<h3>Critério</h3>
<p>Evite afirmações sobre "o Oriente" ou "o Islã" como blocos: fale de escolas, autores e textos. A primeira discursiva treina isso.</p>`,
[
  disc('Compare um conceito em duas tradições (por exemplo, o eu em Nāgasena e Tomás; a virtude em Confúcio e Aristóteles), seguindo as regras da aula 1.', ['Regras aplicadas', 'Termos no original', 'Textos primários', 'Sem generalizações', 'Conclusão justificada']),
  disc('Mostre como Maimônides, Avicena ou Averróis influenciaram Tomás em um ponto preciso, com textos.', ['Ponto preciso', 'Texto do autor', 'Texto de Tomás', 'Avaliação']),
  disc('Exponha o debate entre al-Ghazali e Averróis sobre a causalidade e compare com Hume.', ['Expõe os dois', 'Compara com Hume', 'Avalia', 'Clareza']),
]),
];
