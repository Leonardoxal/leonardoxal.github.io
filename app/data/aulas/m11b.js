// Módulo 11 — Mário Ferreira dos Santos: aulas 7 a 12.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm11-7', titulo: 'Filosofia Concreta: teses fundamentais',
  aprendera: ['A sequência das teses sobre o ser, o nada e a causa', 'A tese do Ser Supremo', 'Onde estão os passos mais discutíveis', 'Comparação com as vias de Tomás'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>Da primeira tese em diante</h3>
<p>Depois de "alguma coisa há", Mário procura mostrar, em sequência ${tag('interpretacao')}:</p>
<ol>
<li>O nada absoluto não pode produzir coisa alguma (do nada, nada vem).</li>
<li>Logo, se alguma coisa há agora, alguma coisa sempre houve: nunca houve nada absoluto.</li>
<li>O que sempre houve não depende de outro para ser; é ser por si.</li>
<li>Esse ser é infinito, simples e uno — o Ser Supremo.</li>
</ol>
<p>Confira a numeração e a formulação exatas na edição que usar; a lista acima é uma reconstrução didática do movimento geral.</p>
<h3>O axioma "do nada, nada vem"</h3>
<p>É princípio antigo (Parmênides; Lucrécio: <em>nil posse creari de nilo</em>, De rerum natura I, 155–156) ${tag('fato')}. Para Mário, é evidente pela própria noção de nada absoluto, que não tem poder algum ${tag('argumento')}.</p>
<h3>Comparação com Tomás</h3>
<p>A terceira via de Tomás (ST I, q. 2, a. 3) parte da contingência: se tudo pudesse não ser, em algum momento nada teria havido, e nada haveria agora ${tag('fato')}. O movimento de Mário é semelhante, mas formulado como série de teses apodíticas ${tag('interpretacao')}.</p>
<h3>Os passos discutíveis</h3>
<ul>
<li>De "sempre houve algo" para "há um ser que sempre houve": pode ter havido uma série sem fim de seres dependentes? (falácia da composição, se não se justificar) ${tag('argumento')}.</li>
<li>De "ser por si" para "infinito e simples": é preciso mostrar por que um ser não dependente não pode ser finito ${tag('debate')}.</li>
</ul>`,
  vocabulario: [['Ex nihilo nihil fit', 'Do nada, nada vem.'], ['Ser por si (a se)', 'Ser que não depende de outro.'], ['Ser Supremo', 'Ser infinito, simples e uno.'], ['Série infinita', 'Cadeia sem primeiro termo.'], ['Falácia da composição', 'Atribuir ao todo o que vale para as partes.']],
  exemplos: '<p>Se uma vela acesa depende de outra que a acendeu, e esta de outra, e assim por diante, a pergunta é: a série toda precisa de algo que não dependa de outro? Esse é o ponto crítico da passagem.</p>',
  contexto: `<p>Mário conhecia as discussões escolásticas sobre séries per se e per accidens ${tag('interpretacao')}.</p>`,
  argumento: { titulo: 'Sempre houve algo (reconstruído)', tag: 'argumento',
    premissas: ['Do nada absoluto, nada vem.', 'Alguma coisa há agora.', 'Se em algum momento não tivesse havido nada, nada haveria agora.'],
    conclusao: 'Logo, nunca houve o nada absoluto: alguma coisa sempre houve.',
    nota: 'Válido. A dificuldade está na passagem seguinte: de "sempre houve algo" para "algo houve sempre", isto é, um mesmo ser eterno.' },
  objecoes: [{ objecao: 'Pode ter havido sempre algo sem que nenhum ser determinado seja eterno (série infinita de seres contingentes).', tag: 'debate', resposta: 'A tradição responde com a distinção entre séries acidentais (avô, pai, filho) e essenciais (dependência atual): numa série essencial, sem primeiro não há os demais. É preciso verificar se Mário usa essa distinção ou equivalente.' }],
  aplicacao: '<p>Reconstrua no Caderno a passagem de "sempre houve algo" para "há um ser eterno", indicando qual premissa a justifica.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Filosofia Concreta, teses sobre o nada e o Ser', link: null, orientacao: '<p>Leia as teses sobre o nada absoluto e o Ser Supremo. Anote em que tese aparece cada passo da reconstrução acima.</p>' },
  perguntas: [
    { p: 'O que diz o axioma "do nada, nada vem"?', r: 'O nada absoluto não pode produzir coisa alguma.' },
    { p: 'Qual via de Tomás é mais semelhante?', r: 'A terceira via, pela contingência.' },
    { p: 'Qual o passo mais discutível?', r: 'De "sempre houve algo" para "há um ser eterno".' },
  ],
  exercicios: [
    mc('"Nil posse creari de nilo" é de:', ['Tomás', 'Lucrécio', 'Mário', 'Agostinho'], 1, 'De rerum natura I.'),
    mc('De "sempre houve algo" para "há um ser eterno" pode cometer:', ['Petição de princípio', 'Falácia da composição', 'Ad hominem', 'Espantalho'], 1, 'Se não justificada.'),
    mc('Uma série em que cada termo depende atualmente do anterior é chamada:', ['Acidental', 'Essencial (per se)', 'Infinita', 'Circular'], 1, 'Distinção escolástica.'),
    mc('A lista de teses desta aula é:', ['Citação literal', 'Reconstrução didática', 'Tradução', 'Doutrina'], 1, 'Confira na edição.'),
    disc('Avalie a passagem de "sempre houve algo" para "há um Ser Supremo infinito". Que premissas extras são necessárias?', ['Reconstrói a passagem', 'Identifica premissas extras', 'Usa séries per se', 'Conclusão justificada'])],
  resumo: ['Do nada, nada vem.', 'Sempre houve algo.', 'Ser por si.', 'Ser Supremo.', 'Passos discutíveis.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Filosofia Concreta.', verificacao: 'a confirmar' }, { texto: 'Tomás de Aquino, Suma Teológica I, q. 2, a. 3 (terceira via).' }],
  revisao: [['Ex nihilo nihil fit', 'Do nada, nada vem.'], ['Terceira via', 'Contingência.'], ['Série per se', 'Dependência atual.']],
  avancado: {
    texto: `<h3>O "argumento cosmológico de Leibniz"</h3>
<p>Leibniz exige uma razão suficiente para a série inteira das coisas contingentes; Alexander Pruss defende versões contemporâneas do princípio de razão suficiente ${tag('fato')}.</p>
<h3>Atributos do ser necessário</h3>
<p>Tomás deduz a simplicidade e a infinitude a partir da identidade de essência e ser (ST I, qq. 3 e 7) ${tag('fato')}. Compare com o modo como Mário deduz esses atributos e avalie qual derivação é mais rigorosa ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Alexander Pruss, The Principle of Sufficient Reason (2006).' }, { texto: 'Tomás de Aquino, Suma Teológica I, q. 7 (infinitude).' }],
    exercicios: [
      mc('Defesa contemporânea do princípio de razão suficiente:', ['Pruss', 'Mackie', 'Russell', 'Hume'], 0, '2006.'),
      mc('Tomás deduz a infinitude de Deus em:', ['I, q. 2', 'I, q. 7', 'I-II, q. 2', 'III, q. 1'], 1, 'Infinitude.'),
      mc('A razão suficiente da série inteira é exigência de:', ['Hume', 'Leibniz', 'Kant', 'Mário apenas'], 1, 'Leibniz.'),
      disc('Compare a dedução dos atributos do Ser Supremo em Mário e em Tomás.', ['Expõe Mário', 'Expõe Tomás', 'Compara rigor', 'Conclusão'])],
  },
}),

aula({
  id: 'm11-8', titulo: 'Filosofia dos valores',
  aprendera: ['O problema dos valores no século XX', 'A posição de Mário em Filosofia Concreta dos Valores', 'Objetivismo × subjetivismo axiológico', 'Comparação com Scheler e com os transcendentais'],
  prereq: ['Módulo 10, aula 5'],
  explicacao: `
<h3>O problema</h3>
<p>A "filosofia dos valores" (axiologia) ganhou força no fim do século XIX e no XX: Lotze, os neokantianos de Baden (Windelband, Rickert), Scheler e Nicolai Hartmann ${tag('fato')}. A pergunta: os valores são preferências subjetivas ou têm realidade objetiva?</p>
<h3>Scheler</h3>
<p>Max Scheler (O Formalismo na Ética e a Ética Material dos Valores, 1913–1916) defendeu valores objetivos, captados por uma intuição emocional, com hierarquia: agradável, vital, espiritual, santo ${tag('fato')}.</p>
<h3>Mário</h3>
<p>Em Filosofia Concreta dos Valores, Mário procura fundar os valores no ser: o valor é uma relação entre o ser e a perfeição que lhe convém ${tag('interpretacao')}. Assim, rejeita tanto o subjetivismo (valor = desejo) quanto um platonismo de valores separados ${tag('interpretacao')}. A aproximação com o transcendental "bom" da escolástica (o ser enquanto desejável) é natural ${tag('interpretacao')}.</p>
<h3>Hierarquia</h3>
<p>Valores admitem graus segundo a perfeição que expressam; o critério último está no Ser Supremo ${tag('interpretacao')}.</p>`,
  vocabulario: [['Axiologia', 'Teoria dos valores.'], ['Objetivismo axiológico', 'Valores têm realidade independente do desejo.'], ['Subjetivismo axiológico', 'Valores dependem do sujeito.'], ['Bom transcendental', 'O ser enquanto desejável.'], ['Hierarquia de valores', 'Ordem segundo a perfeição.']],
  exemplos: '<p>A saúde vale para um corpo porque é a perfeição que lhe convém, não só porque alguém a deseja. Um doente que não quer se tratar não torna a saúde sem valor.</p>',
  contexto: `<p>A axiologia era tema central na filosofia alemã e ibérica do começo do século XX ${tag('fato')}.</p>`,
  argumento: { titulo: 'O valor está fundado no ser (reconstruído)', tag: 'argumento',
    premissas: ['Algo vale para um ser quando o aperfeiçoa.', 'O que aperfeiçoa um ser depende da natureza desse ser.', 'A natureza de um ser não depende do desejo de quem o avalia.'],
    conclusao: 'Logo, o valor tem fundamento objetivo no ser.',
    nota: 'A premissa 1 supõe uma teleologia (seres têm perfeições próprias), que é o ponto que naturalistas e subjetivistas negam.' },
  objecoes: [{ objecao: 'Hume e o emotivismo: valores são projeções de sentimentos.', tag: 'debate', resposta: 'Fundar valores no ser exige uma metafísica de naturezas e fins. Quem a aceita (aristotélicos, tomistas, Mário) recusa a projeção; quem a nega precisa explicar a força normativa dos valores.' }],
  aplicacao: '<p>Escolha três valores (verdade, beleza, prazer) e diga em que ser estão fundados e que perfeição exprimem.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Filosofia Concreta dos Valores', link: null, orientacao: '<p>Leia a parte sobre a definição de valor. Compare com Tomás, ST I, q. 5 (o bem).</p>' },
  perguntas: [
    { p: 'O que é axiologia?', r: 'Teoria dos valores.' },
    { p: 'Qual a hierarquia de Scheler?', r: 'Agradável, vital, espiritual, santo.' },
    { p: 'Como Mário funda o valor?', r: 'No ser: relação entre o ser e a perfeição que lhe convém.' },
  ],
  exercicios: [
    mc('O Formalismo na Ética é de:', ['Hartmann', 'Scheler', 'Rickert', 'Lotze'], 1, '1913–1916.'),
    mc('Para Mário, o valor:', ['É desejo', 'É fundado no ser', 'É convenção', 'Não existe'], 1, 'Filosofia Concreta dos Valores.'),
    mc('O "bom" como transcendental é:', ['O ser enquanto desejável', 'O prazer', 'A utilidade', 'A norma'], 0, 'ST I, q. 5.'),
    mc('A premissa que naturalistas negam é a da:', ['Teleologia', 'Lógica', 'Existência', 'Linguagem'], 0, 'Perfeições próprias.'),
    disc('Compare a axiologia de Scheler com a de Mário: intuição emocional × fundamento no ser.', ['Expõe Scheler', 'Expõe Mário', 'Compara', 'Conclusão justificada'])],
  resumo: ['Axiologia moderna.', 'Scheler e a hierarquia.', 'Valor fundado no ser.', 'Bom transcendental.', 'Objeção subjetivista.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Filosofia Concreta dos Valores.', verificacao: 'a confirmar' }, { texto: 'Max Scheler, O Formalismo na Ética e a Ética Material dos Valores.' }, { texto: 'Tomás de Aquino, Suma Teológica I, q. 5.' }],
  revisao: [['Axiologia', 'Teoria dos valores.'], ['Hierarquia de Scheler', 'Agradável, vital, espiritual, santo.'], ['Valor em Mário', 'Fundado no ser.']],
  avancado: {
    texto: `<h3>Heidegger contra os valores</h3>
<p>Na Carta sobre o Humanismo (1946), Heidegger critica o pensamento por valores como "subjetivação" do ser ${tag('fato')}. Compare com a tentativa de Mário de enraizar o valor no ser.</p>
<h3>Hartmann e Reale</h3>
<p>Nicolai Hartmann (Ética, 1926) desenvolveu uma ética de valores objetiva; Miguel Reale, no Brasil, uniu valor e direito na "teoria tridimensional" (fato, valor, norma) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Miguel Reale, Teoria Tridimensional do Direito (1968).' }, { texto: 'Nicolai Hartmann, Ética (1926).' }],
    exercicios: [
      mc('A teoria tridimensional do direito é de:', ['Mário', 'Reale', 'Kelsen', 'Hartmann'], 1, 'Fato, valor, norma.'),
      mc('Heidegger criticou o pensamento por valores em:', ['Ser e Tempo', 'Carta sobre o Humanismo', 'Que é Metafísica?', 'A Questão da Técnica'], 1, '1946.'),
      mc('Ética (1926) com valores objetivos é de:', ['Scheler', 'Hartmann', 'Rickert', 'Reale'], 1, 'Nicolai Hartmann.'),
      disc('A crítica de Heidegger aos valores atinge a axiologia de Mário? Argumente.', ['Expõe Heidegger', 'Expõe Mário', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm11-9', titulo: 'O Um e o Múltiplo',
  aprendera: ['O problema clássico do uno e do múltiplo', 'O Parmênides de Platão e a leitura de Mário', 'Participação e analogia', 'Consequências para a ontologia'],
  prereq: ['Módulo 5: Platão'],
  explicacao: `
<h3>O problema</h3>
<p>Se o ser é uno, como há muitos seres? Se há muitos, o que os une? Parmênides negou a multiplicidade; Heráclito enfatizou o devir; Platão e Aristóteles buscaram soluções ${tag('fato')}.</p>
<h3>O Parmênides de Platão</h3>
<p>No diálogo Parmênides, o velho Parmênides critica a teoria das ideias (argumento do "terceiro homem") e examina hipóteses sobre o Uno, com resultados aparentemente contraditórios ${tag('fato')}. É dos textos mais difíceis de Platão, com leituras metafísicas (neoplatônicos) e lógicas (exercício dialético) ${tag('debate')}.</p>
<h3>Mário</h3>
<p>Em O Um e o Múltiplo em Platão, Mário comenta o diálogo e aproxima sua solução das teses da Filosofia Concreta: o múltiplo não anula a unidade do Ser Supremo, porque os entes finitos participam do ser segundo graus ${tag('interpretacao')}. Confira o título e a data na edição usada.</p>
<h3>Participação e analogia</h3>
<p>A solução clássica (Tomás, inspirado em Platão e Aristóteles): os entes são muitos por suas essências limitadas; são unidos por participarem do ser, que se diz deles analogicamente ${tag('interpretacao')}.</p>`,
  vocabulario: [['Uno e múltiplo', 'Problema da unidade e da pluralidade do ser.'], ['Participação', 'Ter de modo limitado o que outro é plenamente.'], ['Terceiro homem', 'Objeção de regresso à teoria das ideias.'], ['Hipóteses do Parmênides', 'Exame das consequências de "o Uno é" e "o Uno não é".'], ['Graus de ser', 'Ordem dos entes segundo a perfeição.']],
  exemplos: '<p>A luz do sol ilumina muitas coisas: cada uma recebe a luz segundo sua superfície. Muitas coisas iluminadas, uma única luz — imagem clássica da participação.</p>',
  contexto: `<p>O comentário de Proclo ao Parmênides marcou a leitura neoplatônica ${tag('fato')}.</p>`,
  argumento: { titulo: 'A participação reconcilia o uno e o múltiplo (reconstruído)', tag: 'argumento',
    premissas: ['Os entes são muitos porque cada um tem uma essência limitada.', 'São unidos porque todos são, isto é, participam do ser.', 'Participar não é ser parte: o participado não se divide.'],
    conclusao: 'Logo, a multiplicidade dos entes não contradiz a unidade do Ser.',
    nota: 'A premissa 3 é decisiva para evitar o panteísmo. A participação precisa ser distinguida de emanação necessária.' },
  objecoes: [{ objecao: 'O argumento do terceiro homem mostra que a participação leva a regresso.', tag: 'argumento', resposta: 'O regresso surge se a Ideia for mais um caso daquilo que ela explica (autopredicação). A participação analógica nega essa autopredicação: o Ser não é "mais um ente".' }],
  aplicacao: '<p>Explique no Caderno, com a imagem da luz, como muitos seres participam do ser sem dividi-lo. Onde a imagem falha?</p>',
  fonte: { obra: 'Platão, Parmênides 130a–135c; Mário, O Um e o Múltiplo em Platão', link: null, orientacao: '<p>Leia a primeira parte do Parmênides (críticas às ideias) e o comentário de Mário a ela.</p>' },
  perguntas: [
    { p: 'Qual o problema do uno e do múltiplo?', r: 'Como conciliar a unidade do ser e a pluralidade dos entes.' },
    { p: 'O que é o argumento do terceiro homem?', r: 'Objeção de regresso infinito contra a teoria das ideias.' },
    { p: 'Por que participar não é ser parte?', r: 'Porque o participado não se divide.' },
  ],
  exercicios: [
    mc('O argumento do terceiro homem aparece no:', ['Fédon', 'Parmênides', 'Timeu', 'Banquete'], 1, '132a–b.'),
    mc('O regresso do terceiro homem depende da:', ['Analogia', 'Autopredicação', 'Participação', 'Dialética'], 1, 'A Ideia como mais um caso.'),
    mc('A leitura neoplatônica do Parmênides foi marcada por:', ['Proclo', 'Aristóteles', 'Tomás', 'Mário'], 0, 'Comentário.'),
    mc('A participação mal entendida pode levar ao:', ['Ceticismo', 'Panteísmo', 'Nominalismo', 'Positivismo'], 1, 'Por isso a premissa 3.'),
    disc('A solução pela participação responde ao terceiro homem? Avalie.', ['Expõe a objeção', 'Expõe a solução', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Problema clássico.', 'O Parmênides de Platão.', 'Leitura de Mário.', 'Participação e analogia.', 'Terceiro homem.'],
  referencias: [{ texto: 'Platão, Parmênides.' }, { texto: 'Mário Ferreira dos Santos, O Um e o Múltiplo em Platão.', verificacao: 'a confirmar' }, { texto: 'Cornelio Fabro, Participação e Causalidade (1960).' }],
  revisao: [['Terceiro homem', 'Parmênides 132a.'], ['Participação', 'Ter de modo limitado.'], ['Proclo', 'Comentário neoplatônico ao Parmênides.']],
  avancado: {
    texto: `<h3>Fabro e Geiger</h3>
<p>Cornelio Fabro e L.-B. Geiger mostraram, nos anos 1930–1960, a importância da participação platônica em Tomás, contra uma leitura só aristotélica ${tag('fato')}.</p>
<h3>Vlastos e o terceiro homem</h3>
<p>Gregory Vlastos ("The Third Man Argument in the Parmenides", 1954) analisou as premissas ocultas do argumento (autopredicação e não identidade) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Gregory Vlastos, "The Third Man Argument in the Parmenides" (1954).' }, { texto: 'Cornelio Fabro, La nozione metafisica di partecipazione (1939).' }],
    exercicios: [
      mc('A análise das premissas do terceiro homem (1954) é de:', ['Vlastos', 'Fabro', 'Geiger', 'Burnet'], 0, 'Autopredicação e não identidade.'),
      mc('A importância da participação em Tomás foi mostrada por:', ['Gilson apenas', 'Fabro e Geiger', 'Vlastos', 'Owen'], 1, 'Anos 1930–1960.'),
      mc('As premissas de Vlastos são:', ['Ato e potência', 'Autopredicação e não identidade', 'Fé e razão', 'Ser e nada'], 1, '1954.'),
      disc('Use as premissas de Vlastos para mostrar como a participação analógica bloqueia o regresso.', ['Expõe Vlastos', 'Identifica a premissa negada', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm11-10', titulo: 'Simbólica e crise',
  aprendera: ['A teoria do símbolo no Tratado de Simbólica', 'Símbolo, sinal e analogia', 'O diagnóstico da Filosofia da Crise', 'Avaliação crítica do diagnóstico'],
  explicacao: `
<h3>O símbolo</h3>
<p>No Tratado de Simbólica, Mário estuda o símbolo como algo que remete a outro por semelhança analógica, não por convenção pura ${tag('interpretacao')}. O sinal convencional (placa de trânsito) difere do símbolo (a água como purificação), que participa daquilo que simboliza ${tag('interpretacao')}.</p>
<h3>Analogia</h3>
<p>Para Mário, toda a realidade é simbólica: os entes finitos remetem ao Ser Supremo segundo graus de participação. A simbólica seria uma ciência das analogias do real ${tag('interpretacao')}. Compare com a doutrina dos sacramentos e com a exegese dos "sentidos" da Escritura ${tag('doutrina')}.</p>
<h3>A crise</h3>
<p>Em Filosofia da Crise, Mário analisa "crise" como separação (do grego <em>krisis</em>, julgamento, separação) e diagnostica a cultura moderna como afastamento dos fundamentos ${tag('interpretacao')}. Em obras posteriores (como Invasão Vertical dos Bárbaros, 1967), descreve uma "barbárie" que sobe de baixo para cima na cultura ${tag('interpretacao')}.</p>
<h3>Avaliar o diagnóstico</h3>
<p>Diagnósticos de crise (Spengler, Ortega, Guénon, Sorokin) são comuns no século XX ${tag('fato')}. Pergunte: quais dados sustentam o diagnóstico? Há contraexemplos? O diagnóstico é falseável? ${tag('argumento')}</p>`,
  vocabulario: [['Símbolo', 'Sinal que remete por analogia e participação.'], ['Sinal convencional', 'Remete por convenção.'], ['Krisis', 'Separação, julgamento.'], ['Simbólica', 'Ciência das analogias do real.'], ['Invasão vertical', 'Barbárie cultural de baixo para cima (Mário).']],
  exemplos: '<p>O pão eucarístico, a luz pascal e a água batismal são símbolos que a liturgia usa porque têm relação natural com o que significam; uma bandeira é sinal mais convencional.</p>',
  contexto: `<p>O tema da crise do Ocidente foi popularizado por Spengler (A Decadência do Ocidente, 1918–1922) ${tag('fato')}.</p>`,
  argumento: { titulo: 'A realidade é simbólica (reconstruído)', tag: 'argumento',
    premissas: ['Todo ente finito participa do ser.', 'O que participa tem semelhança analógica com o participado.', 'Aquilo que tem semelhança analógica com outro pode remeter a ele.'],
    conclusao: 'Logo, todo ente finito pode ser símbolo do Ser.',
    nota: 'O argumento depende da metafísica da participação (aula 9). Sem ela, o simbolismo seria projeção cultural.' },
  objecoes: [{ objecao: 'Diagnósticos de "crise" são não falseáveis: qualquer época pode ser descrita como decadente.', tag: 'debate', resposta: 'O diagnóstico ganha força se especificar critérios e dados (indicadores culturais, educacionais). Sem isso, permanece interpretação. Classifique cada afirmação de Mário sobre a crise.' }],
  aplicacao: '<p>Escolha um símbolo religioso e um sinal convencional e explique a diferença com os conceitos da aula.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Tratado de Simbólica; Filosofia da Crise', link: null, orientacao: '<p>Leia os capítulos iniciais do Tratado de Simbólica sobre a definição de símbolo. Faça uma tabela símbolo × sinal.</p>' },
  perguntas: [
    { p: 'Diferença entre símbolo e sinal?', r: 'O símbolo remete por analogia e participação; o sinal, por convenção.' },
    { p: 'O que significa krisis?', r: 'Separação, julgamento.' },
    { p: 'Como avaliar um diagnóstico de crise?', r: 'Pelos dados, contraexemplos e falseabilidade.' },
  ],
  exercicios: [
    mc('A Decadência do Ocidente é de:', ['Ortega', 'Spengler', 'Toynbee', 'Mário'], 1, '1918–1922.'),
    mc('Para Mário, o símbolo remete por:', ['Convenção', 'Analogia', 'Acaso', 'Contradição'], 1, 'Tratado de Simbólica.'),
    mc('Invasão Vertical dos Bárbaros é de:', ['1952', '1967', '1980', '2000'], 1, 'Obra tardia.'),
    mc('Um diagnóstico de crise sem critérios é:', ['Fato', 'Interpretação não testada', 'Doutrina', 'Demonstração'], 1, 'Classifique.'),
    disc('Avalie o diagnóstico de crise de Mário: que afirmações são bem fundadas, quais controversas e quais insuficientemente fundadas?', ['Expõe o diagnóstico', 'Classifica afirmações', 'Usa dados ou contraexemplos', 'Conclusão honesta'])],
  resumo: ['Símbolo × sinal.', 'Realidade simbólica.', 'Krisis.', 'Invasão vertical.', 'Avaliação de diagnósticos.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Tratado de Simbólica.', verificacao: 'a confirmar' }, { texto: 'Mário Ferreira dos Santos, Invasão Vertical dos Bárbaros (1967).', verificacao: 'a confirmar' }, { texto: 'Oswald Spengler, A Decadência do Ocidente (1918–1922).' }],
  revisao: [['Símbolo', 'Remete por analogia.'], ['Krisis', 'Separação.'], ['Spengler', 'A Decadência do Ocidente.']],
  avancado: {
    texto: `<h3>Teorias do símbolo</h3>
<p>Paul Ricoeur ("o símbolo dá a pensar", A Simbólica do Mal, 1960), Mircea Eliade (história das religiões) e René Guénon (tradicionalismo) propuseram teorias do símbolo ${tag('fato')}. Compare: Ricoeur hermenêutico; Eliade fenomenológico; Guénon esotérico; Mário metafísico ${tag('interpretacao')}.</p>
<h3>Sorokin</h3>
<p>Pitirim Sorokin (Dinâmica Social e Cultural, 1937–1941) tentou fundamentar com dados quantitativos a passagem de culturas "ideacionais" a "sensatas" ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Paul Ricoeur, A Simbólica do Mal (1960).' }, { texto: 'Pitirim Sorokin, Social and Cultural Dynamics (1937–1941).' }],
    exercicios: [
      mc('"O símbolo dá a pensar" é de:', ['Eliade', 'Ricoeur', 'Guénon', 'Mário'], 1, 'A Simbólica do Mal.'),
      mc('Diagnóstico cultural com dados quantitativos:', ['Spengler', 'Sorokin', 'Guénon', 'Ortega'], 1, 'Dinâmica Social e Cultural.'),
      mc('Guénon representa uma teoria do símbolo:', ['Hermenêutica', 'Esotérica/tradicionalista', 'Analítica', 'Positivista'], 1, 'Tradicionalismo.'),
      disc('Compare as teorias do símbolo de Ricoeur e de Mário.', ['Expõe Ricoeur', 'Expõe Mário', 'Compara', 'Conclusão'])],
  },
}),

aula({
  id: 'm11-11', titulo: 'Teologia e noologia',
  aprendera: ['A noologia como estudo do espírito', 'A teologia filosófica de Mário', 'Relação entre seu sistema e a fé católica', 'Pontos de convergência e tensão com o Magistério'],
  prereq: ['Módulo 1 e aula 7 deste módulo'],
  explicacao: `
<h3>Noologia</h3>
<p>"Noologia" (de <em>nous</em>, intelecto) designa em Mário o estudo do espírito e de suas funções, distinguido da psicologia empírica (Noologia Geral) ${tag('interpretacao')}.</p>
<h3>Teologia filosófica</h3>
<p>Mário apresenta teses sobre o Ser Supremo (infinitude, simplicidade, unidade, inteligência) como conclusões filosóficas, não como artigos de fé ${tag('interpretacao')}. Isso corresponde, na terminologia católica, à "teologia natural" ou filosofia de Deus ${tag('doutrina')}. O Vaticano I afirma que Deus pode ser conhecido com certeza pela luz natural da razão a partir das coisas criadas (Dei Filius, cap. 2) ${tag('doutrina')}.</p>
<h3>Mário e a fé</h3>
<p>A relação pessoal de Mário com o catolicismo é descrita de modos diferentes por seus leitores; afirmações sobre isso devem ser verificadas em fontes biográficas confiáveis ${tag('debate')}. Seus textos dialogam com a escolástica, mas incluem elementos de pitagorismo e de outras tradições ${tag('interpretacao')}.</p>
<h3>Critérios de avaliação doutrinal</h3>
<p>Para um estudante católico: (1) as teses sobre Deus são compatíveis com a distinção entre criador e criatura (contra o panteísmo)? (2) a criação é livre, não emanação necessária? (3) a razão é respeitada sem substituir a revelação? ${tag('doutrina')}</p>`,
  vocabulario: [['Noologia', 'Estudo do espírito (nous).'], ['Teologia natural', 'Conhecimento de Deus pela razão.'], ['Emanação necessária', 'Produção do mundo por necessidade da natureza divina.'], ['Panteísmo', 'Identificação de Deus com o mundo.'], ['Dei Filius', 'Constituição do Vaticano I sobre fé e razão (1870).']],
  exemplos: '<p>Comparar o "Ser Supremo" de Mário com o Deus da fé é como comparar o Deus das cinco vias com o Deus trinitário: o primeiro é alcançável pela razão; o segundo, só pela revelação.</p>',
  contexto: `<p>A distinção entre teologia natural e sagrada é clássica (ST I, q. 1, a. 1) ${tag('fato')}.</p>`,
  argumento: { titulo: 'Critério contra o panteísmo (reconstruído)', tag: 'argumento',
    premissas: ['O Ser Supremo é infinito e simples.', 'Os entes finitos são limitados e compostos.', 'O que é limitado e composto não pode ser idêntico ao infinito e simples.'],
    conclusao: 'Logo, os entes finitos não são o Ser Supremo; participam dele.',
    nota: 'O critério permite testar qualquer sistema que fale de "Ser Supremo": a participação deve ser distinta da identidade.' },
  objecoes: [{ objecao: 'Elementos pitagóricos e esotéricos tornam o sistema incompatível com a fé.', tag: 'debate', resposta: 'Avalie caso a caso: o pitagorismo como teoria da proporção é compatível; a reencarnação ou a emanação necessária não seriam. É preciso verificar o que Mário afirma de fato, não o que se lhe atribui.' }],
  aplicacao: '<p>Aplique os três critérios doutrinais a uma tese de Mário sobre o Ser Supremo e registre no Caderno.</p>',
  fonte: { obra: 'Mário Ferreira dos Santos, Noologia Geral; teses sobre Deus na Filosofia Concreta', link: null, orientacao: '<p>Leia as teses sobre o Ser Supremo. Compare com Dei Filius, cap. 1–2.</p>' },
  perguntas: [
    { p: 'O que é noologia?', r: 'Estudo do espírito.' },
    { p: 'O que afirma Dei Filius cap. 2?', r: 'Que Deus pode ser conhecido com certeza pela razão natural a partir das criaturas.' },
    { p: 'Quais os três critérios doutrinais?', r: 'Distinção criador–criatura, criação livre, razão sem substituir a revelação.' },
  ],
  exercicios: [
    mc('"Nous" significa:', ['Alma vegetativa', 'Intelecto', 'Corpo', 'Vontade'], 1, 'Grego.'),
    mc('Dei Filius é do:', ['Concílio de Trento', 'Vaticano I', 'Vaticano II', 'Latrão IV'], 1, '1870.'),
    mc('A criação como emanação necessária é:', ['Doutrina católica', 'Contrária à doutrina da criação livre', 'Indiferente', 'Tese de Tomás'], 1, 'Criação livre.'),
    mc('Afirmações sobre a vida religiosa de Mário devem ser:', ['Aceitas', 'Verificadas em fontes confiáveis', 'Ignoradas', 'Inventadas'], 1, 'Debate.'),
    disc('A teologia filosófica de Mário é compatível com a doutrina católica? Aplique os três critérios.', ['Aplica os critérios', 'Usa textos', 'Distingue fato e atribuição', 'Conclusão justificada'])],
  resumo: ['Noologia.', 'Teologia natural.', 'Dei Filius.', 'Questões biográficas abertas.', 'Três critérios doutrinais.'],
  referencias: [{ texto: 'Mário Ferreira dos Santos, Noologia Geral.', verificacao: 'a confirmar' }, { texto: 'Concílio Vaticano I, Dei Filius (1870), caps. 1–2.' }],
  revisao: [['Noologia', 'Estudo do espírito.'], ['Dei Filius', 'Vaticano I, 1870.'], ['Critério antipanteísta', 'Participação ≠ identidade.']],
  avancado: {
    texto: `<h3>Teologia natural contemporânea</h3>
<p>Compare as teses de Mário com a teologia natural analítica (Swinburne, Plantinga) e com o tomismo contemporâneo (Feser, Five Proofs of the Existence of God, 2017) ${tag('fato')}.</p>
<h3>Criação e emanação</h3>
<p>O IV Concílio de Latrão (1215) e o Vaticano I afirmam a criação livre "do nada" ${tag('doutrina')}. Plotino, por contraste, fala de emanação do Uno ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Edward Feser, Five Proofs of the Existence of God (2017).' }, { texto: 'Plotino, Enéadas V, 1–2.' }],
    exercicios: [
      mc('Five Proofs of the Existence of God é de:', ['Swinburne', 'Feser', 'Plantinga', 'Craig'], 1, '2017.'),
      mc('A criação livre do nada foi afirmada no:', ['Latrão IV e Vaticano I', 'Niceia apenas', 'Trento apenas', 'Nenhum concílio'], 0, '1215 e 1870.'),
      mc('A emanação do Uno é característica de:', ['Tomás', 'Plotino', 'Agostinho', 'Anselmo'], 1, 'Enéadas.'),
      disc('Compare uma prova de Mário com uma prova de Feser. Qual é mais rigorosa?', ['Expõe as duas', 'Compara rigor', 'Avalia premissas', 'Conclusão'])],
  },
}),

avaliacao('m11-12', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>As teses centrais de Mário Ferreira dos Santos — cosmovisão, dialéctica, conhecimento, ontologia, Filosofia Concreta, valores, simbólica e teologia filosófica — e a capacidade de compará-las com Platão, Aristóteles e Tomás.</p>
<h3>Critério do Degrau 9</h3>
<p>Você deve reconstruir teses da Filosofia Concreta com premissas numeradas e compará-las com a tradição clássica, separando o que está bem fundado, o que é controverso e o que é insuficientemente fundamentado. A primeira discursiva treina isso.</p>`,
[
  disc('Reconstrua três teses da Filosofia Concreta em premissas numeradas. Para cada uma: avalie validade e solidez, compare com Aristóteles ou Tomás e classifique-a como bem fundada, controversa ou insuficientemente fundamentada.', ['Três teses fiéis', 'Avaliação lógica', 'Comparação com a tradição', 'Classificação justificada']),
  disc('A atitude "positiva" de integração de perspectivas é método filosófico rigoroso ou ecletismo? Argumente com exemplos.', ['Define a atitude', 'Exemplos', 'Objeção do ecletismo', 'Conclusão justificada']),
  disc('Faça um roteiro de leitura de um livro de Mário (objetivo, capítulos-chave, teses, objeções a investigar).', ['Roteiro completo', 'Teses identificadas', 'Objeções', 'Dados bibliográficos conferidos']),
]),
];
