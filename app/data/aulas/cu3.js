// Cultura III — escolas e debates (etapas 6 e 7 do percurso de Cultura).
// Escola de Frankfurt, indústria cultural e cultura de massa; estudos culturais e personalismo cristão;
// relativismo cultural e verdade; fé e culturas: evangelização e inculturação.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cu3-1', titulo: 'Escola de Frankfurt, indústria cultural e cultura de massa', duracao: '150 min',
  aprendera: ['Explicar o conceito de indústria cultural', 'Explicar a perda da "aura" em Benjamin', 'Conhecer a crítica de Ortega y Gasset ao homem-massa', 'Avaliar a cultura de massa com critérios'],
  prereq: ['Cultura II (módulo CU2)'],
  explicacao: `
<h3>O problema</h3>
<p>Rádio, cinema, televisão e internet levaram obras a milhões de pessoas. Isso democratizou a cultura ou a transformou em mercadoria?</p>
<h3>A indústria cultural</h3>
<p>Theodor Adorno e Max Horkheimer, na <em>Dialética do esclarecimento</em> (1947), chamaram de "indústria cultural" a produção padronizada de bens culturais para consumo de massa, que, segundo eles, adapta as pessoas ao sistema em vez de libertá-las ${tag('fato')}.</p>
<h3>Benjamin</h3>
<p>Walter Benjamin, em "A obra de arte na era de sua reprodutibilidade técnica" (1936), sustentou que a reprodução técnica dissolve a "aura" — a presença única da obra no aqui e agora — e muda a relação do público com a arte, com riscos e possibilidades políticas ${tag('fato')}.</p>
<h3>Ortega y Gasset</h3>
<p>José Ortega y Gasset, em <em>A rebelião das massas</em> (1930), descreveu o "homem-massa", que se sente igual a todos e satisfeito consigo, sem se submeter a instância superior; a crítica não é às classes populares, mas a uma atitude presente em qualquer classe ${tag('fato')}.</p>
<h3>Balanço</h3>
<p>Os críticos foram acusados de elitismo e de subestimar a capacidade do público de interpretar ${tag('debate')}. Ainda assim, a pergunta sobre o que a lógica do mercado faz com a cultura permanece ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Indústria cultural', 'Produção padronizada de bens culturais para consumo de massa.'],
    ['Aura', 'Em Benjamin, a presença única da obra original.'],
    ['Reprodutibilidade técnica', 'Possibilidade de copiar a obra em série.'],
    ['Homem-massa', 'Em Ortega, atitude de quem se contenta com o médio e não se submete a instância superior.'],
    ['Padronização', 'Produção segundo fórmulas repetidas.'],
  ],
  exemplos: `<p><strong>Uma canção em três leituras:</strong> uma música de sucesso feita por fórmula de mercado é, para Adorno, produto que treina o ouvinte a ouvir sempre o mesmo; para Benjamin, sua circulação em massa muda a experiência estética; para quem a ouve num casamento, pode estar ligada a memórias e afetos reais. Cada leitura capta algo, e nenhuma esgota o fenômeno.</p>`,
  contexto: `<p><strong>No mundo:</strong> as plataformas digitais usam algoritmos de recomendação que ampliam a padronização e a personalização ao mesmo tempo ${tag('interpretacao')}. <strong>No Brasil:</strong> a televisão aberta, com as telenovelas, foi por décadas o principal meio de cultura de massa do país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lógica do lucro tende a padronizar a produção cultural', tag: 'argumento',
    premissas: ['Produzir para o mercado de massa exige investimento alto e risco.', 'Fórmulas já testadas reduzem o risco de fracasso comercial.', 'Por isso, a produção tende a repetir fórmulas de sucesso.'],
    conclusao: 'Logo, a lógica do lucro, deixada a si mesma, tende a padronizar a produção cultural.',
    nota: 'A tendência não é absoluta: há obras de valor produzidas pela indústria e nichos que premiam a originalidade.',
  },
  objecoes: [
    { objecao: 'Criticar a cultura de massa é desprezar o gosto do povo.', tag: 'debate',
      resposta: 'A crítica de Adorno se dirige ao sistema de produção, não às pessoas; a de Ortega, a uma atitude presente em todas as classes. Além disso, muitas das maiores obras da cultura popular brasileira, como o samba e a literatura de cordel, nasceram fora da indústria. Distinguir cultura popular e cultura de massa ajuda a não confundir as duas.' },
  ],
  aplicacao: `<p>Analise um produto da cultura de massa atual (série, música, vídeo viral) com os conceitos de Adorno, Benjamin e Ortega e dê seu juízo com critérios explícitos.</p>`,
  fonte: {
    obra: 'Theodor Adorno e Max Horkheimer, Dialética do esclarecimento (1947), cap. "A indústria cultural"; Walter Benjamin, "A obra de arte na era de sua reprodutibilidade técnica" (1936); José Ortega y Gasset, A rebelião das massas (1930), cap. 1', link: null,
    orientacao: `<p>Em Adorno e Horkheimer, a tese da padronização. Em Benjamin, a definição de aura. Em Ortega, a definição de homem-massa. Compare os três diagnósticos.</p>`,
  },
  perguntas: [
    { p: 'O que é indústria cultural?', r: 'A produção padronizada de bens culturais para consumo de massa.' },
    { p: 'O que é a aura em Benjamin?', r: 'A presença única da obra no aqui e agora.' },
    { p: 'O homem-massa de Ortega pertence a uma classe social?', r: 'Não; é uma atitude presente em qualquer classe.' },
  ],
  exercicios: [
    mc('A expressão "indústria cultural" é de:', ['Benjamin', 'Adorno e Horkheimer', 'Ortega', 'Eliot'], 1, '1947.'),
    mc('A perda da aura é tese de:', ['Benjamin', 'Adorno', 'Huizinga', 'Pieper'], 0, '1936.'),
    mc('A rebelião das massas é de:', ['Ortega y Gasset', 'Unamuno', 'Spengler', 'Eliot'], 0, '1930.'),
    mc('Cultura popular e cultura de massa são:', ['Sinônimos', 'Conceitos distintos', 'Opostos sempre', 'Irrelevantes'], 1, 'Distinção.'),
    mc('A padronização na indústria cultural decorre sobretudo de:', ['Gosto do público apenas', 'Redução de risco comercial', 'Lei', 'Religião'], 1, 'Argumento.'),
    disc('Analise um produto da cultura de massa com Adorno, Benjamin e Ortega e dê seu juízo com critérios.', ['Produto', 'Três conceitos', 'Juízo', 'Critérios explícitos']),
  ],
  resumo: ['Indústria cultural (1947).', 'Benjamin: aura (1936).', 'Ortega: homem-massa (1930).', 'Crítica de elitismo.', 'Popular e de massa.'],
  referencias: [
    { texto: 'Theodor Adorno e Max Horkheimer, Dialética do esclarecimento (1947).' },
    { texto: 'Walter Benjamin, "A obra de arte na era de sua reprodutibilidade técnica" (1936).' },
    { texto: 'José Ortega y Gasset, A rebelião das massas (1930).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do produto', 'Ler os textos indicados'],
  revisao: [['Adorno', 'Indústria cultural.'], ['Benjamin', 'Aura.'], ['Ortega', 'Homem-massa.']],
  avancado: {
    texto: `<h3>Postman e o entretenimento</h3>
<p>Neil Postman, em <em>Amusing Ourselves to Death</em> (1985), argumentou que a televisão transforma todo discurso público — política, religião, educação — em entretenimento, e que o risco das sociedades livres não é a censura, mas a distração ${tag('interpretacao')}. Contrastou as distopias de Orwell e de Huxley ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Neil Postman, Amusing Ourselves to Death (1985).' }],
    exercicios: [
      mc('Amusing Ourselves to Death é de:', ['Postman', 'McLuhan', 'Adorno', 'Orwell'], 0, '1985.'),
      mc('Para Postman, o risco maior das sociedades livres é a:', ['Censura', 'Distração', 'Guerra', 'Fome'], 1, 'Entretenimento.'),
      mc('Postman contrasta as distopias de Orwell e de:', ['Huxley', 'Kafka', 'Verne', 'Wells'], 0, 'Admirável mundo novo.'),
      disc('Avalie se a tese de Postman se aplica às redes sociais no Brasil.', ['Tese', 'Redes sociais', 'Exemplos', 'Conclusão'])],
  },
}),

aula({
  id: 'cu3-2', titulo: 'Estudos culturais e personalismo cristão: duas leituras da cultura no século XX', duracao: '150 min',
  aprendera: ['Explicar a tese de Raymond Williams de que a cultura é ordinária', 'Conhecer o Centro de Birmingham e Stuart Hall', 'Explicar o humanismo integral de Maritain', 'Conhecer Alceu Amoroso Lima e o pensamento católico sobre cultura no Brasil'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>No século XX, duas correntes reagiram ao elitismo e ao mercado: os estudos culturais, de inspiração marxista, e o personalismo cristão. O que cada uma propôs?</p>
<h3>Estudos culturais</h3>
<p>Raymond Williams escreveu em 1958 que "a cultura é ordinária": pertence a todos e inclui os modos de vida comuns, não só as obras de elite ${tag('fato')}. O Centro de Estudos Culturais Contemporâneos da Universidade de Birmingham, fundado em 1964 por Richard Hoggart, desenvolveu o estudo da cultura popular, da mídia e da recepção ${tag('fato')}. Stuart Hall analisou como o público decodifica as mensagens de modos diferentes ${tag('fato')}.</p>
<h3>Personalismo cristão</h3>
<p>Emmanuel Mounier e Jacques Maritain puseram a pessoa — inteligente, livre e aberta a Deus — no centro da reflexão sobre cultura e sociedade ${tag('fato')}. Maritain, em <em>Humanismo integral</em> (1936), propôs uma nova cristandade, pluralista, que respeitasse a autonomia das realidades temporais ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>Alceu Amoroso Lima, que assinava Tristão de Athayde, crítico literário e líder católico, dirigiu o Centro Dom Vital e difundiu Maritain no Brasil ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Os estudos culturais enfatizam poder, classe e conflito; o personalismo, a dignidade da pessoa e sua abertura à transcendência ${tag('interpretacao')}. A doutrina da Igreja ensina que a cultura deve estar a serviço da pessoa integral (Gaudium et spes, 59) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Estudos culturais', 'Corrente que estuda cultura popular, mídia e poder.'],
    ['Recepção', 'Modo como o público interpreta uma obra ou mensagem.'],
    ['Personalismo', 'Corrente que põe a pessoa no centro da reflexão.'],
    ['Humanismo integral', 'Proposta de Maritain de um humanismo aberto a Deus.'],
    ['Centro Dom Vital', 'Centro de intelectuais católicos fundado no Rio de Janeiro em 1922.'],
  ],
  exemplos: `<p><strong>Uma telenovela em duas leituras:</strong> os estudos culturais perguntariam como diferentes grupos interpretam a novela e que relações de poder ela representa. O personalismo perguntaria que imagem de pessoa, família e liberdade ela propõe, e se favorece o crescimento ou a redução da pessoa. As perguntas não se excluem.</p>`,
  contexto: `<p><strong>No mundo:</strong> Maritain participou da redação da Declaração Universal dos Direitos Humanos por meio de consultas da UNESCO ${tag('interpretacao')}. <strong>No Brasil:</strong> o Centro Dom Vital foi fundado em 1922 por Jackson de Figueiredo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a pessoa é critério da cultura no personalismo', tag: 'argumento',
    premissas: ['A cultura é obra da pessoa e se destina a pessoas.', 'A pessoa tem dignidade própria, com inteligência, liberdade e abertura a Deus.', 'Uma cultura que reduz a pessoa a consumidor, peça ou instrumento contradiz sua própria finalidade.'],
    conclusao: 'Logo, o desenvolvimento integral da pessoa é critério para julgar uma cultura.',
    nota: 'O critério permite valorizar a cultura popular e criticar tanto o elitismo quanto a mercantilização.',
  },
  objecoes: [
    { objecao: 'Os estudos culturais são só ideologia marxista e nada têm a ensinar.', tag: 'debate',
      resposta: 'Têm pressupostos marxistas que podem ser criticados, como a primazia do conflito de classes. Mas chamaram a atenção para culturas antes ignoradas e para a recepção ativa do público, contribuições usadas por pesquisadores de várias orientações. Um juízo justo distingue o que se pode aproveitar do que se deve rejeitar.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte um quadro comparativo das abordagens (cultura clássica, antropológica, Frankfurt, estudos culturais, personalismo), indicando o que cada uma entende por cultura e que critério de valor usa.</p>`,
  fonte: {
    obra: 'Raymond Williams, "Culture is Ordinary" (1958); Jacques Maritain, Humanismo integral (1936), cap. 1; Concílio Vaticano II, Gaudium et spes (1965), n. 59', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_po.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Williams, a defesa da cultura comum. Em Maritain, a crítica ao humanismo fechado. Na Gaudium et spes, a cultura a serviço da pessoa integral.</p>`,
  },
  perguntas: [
    { p: 'O que quis dizer Williams com "a cultura é ordinária"?', r: 'Que a cultura pertence a todos e inclui os modos de vida comuns.' },
    { p: 'Quando foi fundado o Centro de Birmingham?', r: 'Em 1964, por Richard Hoggart.' },
    { p: 'Quem difundiu Maritain no Brasil?', r: 'Alceu Amoroso Lima (Tristão de Athayde).' },
  ],
  exercicios: [
    mc('"Culture is Ordinary" é de:', ['Hoggart', 'Raymond Williams', 'Stuart Hall', 'Eliot'], 1, '1958.'),
    mc('Humanismo integral é de:', ['Mounier', 'Maritain', 'Pieper', 'Dawson'], 1, '1936.'),
    mc('Tristão de Athayde é pseudônimo de:', ['Jackson de Figueiredo', 'Alceu Amoroso Lima', 'Gustavo Corção', 'Mário de Andrade'], 1, 'Crítico católico.'),
    mc('O Centro Dom Vital foi fundado em:', ['1900', '1922', '1964', '1988'], 1, 'Jackson de Figueiredo.'),
    mc('A cultura a serviço da pessoa integral está na Gaudium et spes, n.:', ['22', '59', '76', '90'], 1, 'Cultura.'),
    disc('Apresente o quadro comparativo das cinco abordagens com o conceito de cultura e o critério de valor de cada uma.', ['Cinco abordagens', 'Conceito de cultura', 'Critério de valor', 'Atribuições corretas']),
  ],
  resumo: ['Williams: cultura é ordinária.', 'Birmingham (1964); Stuart Hall.', 'Mounier e Maritain: personalismo.', 'Humanismo integral (1936).', 'Alceu Amoroso Lima; GS 59.'],
  referencias: [
    { texto: 'Raymond Williams, "Culture is Ordinary" (1958).' },
    { texto: 'Jacques Maritain, Humanismo integral (1936).', livro: 'maritain-humanismo' },
    { texto: 'Concílio Vaticano II, Gaudium et spes (1965), n. 59.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro comparativo', 'Ler os textos indicados'],
  revisao: [['Williams', 'Cultura comum.'], ['Maritain', 'Humanismo integral.'], ['Alceu', 'Centro Dom Vital.']],
  avancado: {
    texto: `<h3>Gramsci e a hegemonia</h3>
<p>Antonio Gramsci, nos <em>Cadernos do cárcere</em> (1929–1935), desenvolveu o conceito de hegemonia: a dominação de um grupo se apoia não só na força, mas no consenso cultural ${tag('fato')}. O conceito influenciou os estudos culturais e a estratégia política de vários movimentos, inclusive no Brasil, o que é objeto de debate ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Antonio Gramsci, Cadernos do cárcere (1929–1935).' }],
    exercicios: [
      mc('O conceito de hegemonia cultural é de:', ['Gramsci', 'Adorno', 'Weber', 'Maritain'], 0, 'Cadernos do cárcere.'),
      mc('Para Gramsci, a dominação se apoia também no:', ['Consenso cultural', 'Clima', 'Acaso', 'Mercado apenas'], 0, 'Hegemonia.'),
      mc('A influência de Gramsci na política brasileira é:', ['Inexistente', 'Debatida', 'Doutrina', 'Proibida'], 1, 'Debate.'),
      disc('Explique o conceito de hegemonia e avalie-o à luz do personalismo cristão.', ['Conceito', 'Avaliação', 'Exemplo', 'Conclusão'])],
  },
}),

aula({
  id: 'cu3-3', titulo: 'Relativismo cultural e verdade', duracao: '150 min',
  aprendera: ['Expor o relativismo cultural de Boas e Herskovits', 'Distinguir relativismo cultural, moral e epistemológico', 'Conhecer a crítica de Bento XVI e de Fides et ratio', 'Responder à pergunta: todas as culturas se equivalem?'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se cada cultura tem seus valores, existe uma verdade sobre o bem que valha para todas? Ou toda avaliação é preconceito?</p>
<h3>O relativismo cultural</h3>
<p>Franz Boas combateu, no início do século XX, as teorias que ordenavam as culturas numa escala evolutiva com o Ocidente no topo, e defendeu estudar cada cultura em seus próprios termos ${tag('fato')}. Melville Herskovits formulou o relativismo cultural de modo mais amplo, afirmando que os juízos se baseiam na experiência e que esta é interpretada por cada indivíduo segundo sua enculturação ${tag('fato')}.</p>
<h3>Três teses diferentes</h3>
<p>É preciso distinguir: o relativismo <strong>cultural descritivo</strong> (culturas diferentes têm valores diferentes, o que é fato); o <strong>moral</strong> (não há certo e errado além das culturas); e o <strong>epistemológico</strong> (não há verdade além das culturas) ${tag('argumento')}. Do primeiro não se seguem os outros dois ${tag('argumento')}.</p>
<h3>A crítica</h3>
<p>Bento XVI, na homilia de 18 de abril de 2005, advertiu contra uma "ditadura do relativismo", que não reconhece nada como definitivo ${tag('doutrina')}. A <em>Fides et ratio</em> (1998) ensina que as culturas, quando radicadas no humano, têm abertura à verdade universal, e que nenhuma cultura pode ser critério último da verdade sobre Deus e o homem (n. 70–71) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Relativismo cultural descritivo', 'Constatação de que culturas têm valores diferentes.'],
    ['Relativismo moral', 'Tese de que não há certo e errado além das culturas.'],
    ['Relativismo epistemológico', 'Tese de que não há verdade além das culturas.'],
    ['Enculturação', 'Processo pelo qual a pessoa aprende a cultura do seu grupo.'],
    ['Evolucionismo cultural', 'Teoria que ordenava as culturas numa escala de progresso.'],
  ],
  exemplos: `<p><strong>Um argumento inválido:</strong> "Na cultura A a escravidão era aceita; na B, não. Logo, não há verdade sobre a escravidão." A premissa é descritiva e verdadeira; a conclusão não se segue. Do fato de que pessoas discordaram sobre a forma da Terra não se conclui que ela não tenha forma.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Universal dos Direitos Humanos (1948) supõe valores válidos para todos os povos ${tag('fato')}. <strong>No Brasil:</strong> debates sobre práticas tradicionais em comunidades indígenas confrontam respeito cultural e direitos fundamentais ${tag('debate')}.</p>`,
  argumento: {
    titulo: 'Por que a diversidade cultural não prova o relativismo moral', tag: 'argumento',
    premissas: ['A diversidade de opiniões morais é um fato observável.', 'A diversidade de opiniões sobre qualquer assunto não prova que não haja verdade sobre ele.', 'Além disso, culturas diferentes partilham princípios comuns, como a proibição do homicídio do inocente e o dever de cuidar dos filhos, aplicados de modos diversos.'],
    conclusao: 'Logo, a diversidade cultural não prova o relativismo moral.',
    nota: 'A tradição chama lei natural os princípios morais acessíveis à razão de todos (CIC 1954–1960).',
  },
  objecoes: [
    { objecao: 'Quem afirma uma verdade universal acaba justificando a dominação de outros povos.', tag: 'debate',
      resposta: 'O risco é real: a pretensão de superioridade foi usada para justificar dominação. Mas foi também em nome de verdades universais — a dignidade de todo ser humano — que se condenaram a escravidão e o colonialismo, como fizeram Bartolomé de las Casas e a bula Sublimis Deus (1537). O relativismo, ao contrário, não dá base para condenar nenhuma dominação.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: escreva um ensaio respondendo "todas as culturas se equivalem?", distinguindo relativismo descritivo, moral e epistemológico, com exemplos e a doutrina da Igreja.</p>`,
  fonte: {
    obra: 'São João Paulo II, Fides et ratio (1998), nn. 70–72; Bento XVI, homilia da Missa pro eligendo Romano Pontifice (18 de abril de 2005)', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_14091998_fides-et-ratio.html', rotulo: 'vatican.va' },
    orientacao: `<p>Na Fides et ratio, a relação entre culturas e verdade universal. Na homilia, o trecho sobre a ditadura do relativismo. Compare com a tese de Herskovits.</p>`,
  },
  perguntas: [
    { p: 'O que combateu Franz Boas?', r: 'As teorias que ordenavam as culturas numa escala evolutiva com o Ocidente no topo.' },
    { p: 'O relativismo descritivo prova o moral?', r: 'Não.' },
    { p: 'Quando Bento XVI falou da "ditadura do relativismo"?', r: 'Na homilia de 18 de abril de 2005.' },
  ],
  exercicios: [
    mc('Estudar cada cultura em seus próprios termos foi proposta de:', ['Boas', 'Tylor', 'Spengler', 'Arnold'], 0, 'Antropologia cultural.'),
    mc('"Culturas têm valores diferentes" é tese:', ['Moral', 'Descritiva', 'Epistemológica', 'Teológica'], 1, 'Fato.'),
    mc('A "ditadura do relativismo" foi expressão de:', ['João Paulo II', 'Bento XVI', 'Francisco', 'Pio XII'], 1, '2005.'),
    mc('A bula Sublimis Deus (1537) afirmou:', ['A inferioridade dos indígenas', 'A dignidade e a liberdade dos indígenas', 'A conquista', 'Nada'], 1, 'Paulo III.'),
    mc('A lei natural é tratada no CIC:', ['337', '1954–1960', '2415', '159'], 1, 'Princípios comuns.'),
    disc('Escreva o ensaio "todas as culturas se equivalem?", distinguindo as três formas de relativismo.', ['Três formas', 'Exemplos', 'Argumento', 'Doutrina']),
  ],
  resumo: ['Boas e Herskovits.', 'Relativismo descritivo, moral, epistemológico.', 'Diversidade não prova relativismo.', 'Bento XVI (2005); FR 70–71.', 'Lei natural; Sublimis Deus.'],
  referencias: [
    { texto: 'Melville Herskovits, Man and His Works (1948).' },
    { texto: 'São João Paulo II, Fides et ratio (1998).', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_14091998_fides-et-ratio.html', rotulo: 'vatican.va' } },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1954–1960.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler os textos indicados'],
  revisao: [['Descritivo', 'Fato.'], ['Moral', 'Não se segue.'], ['FR 70–71', 'Culturas e verdade.']],
  avancado: {
    texto: `<h3>Universais humanos</h3>
<p>O antropólogo Donald Brown (<em>Human Universals</em>, 1991) listou centenas de traços encontrados em todas as culturas conhecidas, como linguagem com gramática, proibição do incesto, luto pelos mortos, distinção entre certo e errado e rituais ${tag('fato')}. A existência de universais é compatível com grande variação nas formas ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Donald Brown, Human Universals (1991).' }],
    exercicios: [
      mc('Human Universals é de:', ['Donald Brown', 'Boas', 'Geertz', 'Herskovits'], 0, '1991.'),
      mc('Um universal humano citado é:', ['Usar garfo', 'Luto pelos mortos', 'Falar inglês', 'Ter televisão'], 1, 'Lista.'),
      mc('A existência de universais é:', ['Incompatível com variação', 'Compatível com grande variação de formas', 'Prova de que culturas são iguais', 'Irrelevante'], 1, 'Interpretação.'),
      disc('Relacione os universais humanos de Brown com a ideia de lei natural.', ['Universais', 'Lei natural', 'Relação', 'Limites'])],
  },
}),

aula({
  id: 'cu3-4', titulo: 'Fé e culturas: evangelização, inculturação e seus limites', duracao: '150 min',
  aprendera: ['Explicar o conceito de inculturação', 'Analisar o discurso de Paulo no Areópago como modelo', 'Conhecer a controvérsia dos ritos chineses', 'Conhecer o ensino recente da Igreja sobre fé e culturas na América Latina'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Ao anunciar o Evangelho a um povo, o que deve mudar na cultura e o que deve ser acolhido? E até onde a fé pode adaptar-se sem perder-se?</p>
<h3>O modelo do Areópago</h3>
<p>Nos Atos dos Apóstolos (17, 22–31), Paulo, em Atenas, parte do altar "ao deus desconhecido" e de um verso de poeta grego para anunciar Cristo ressuscitado ${tag('fato')}. O texto é lido pela tradição como exemplo de diálogo com a cultura que não renuncia ao conteúdo da fé ${tag('interpretacao')}.</p>
<h3>Inculturação</h3>
<p>São João Paulo II usou o termo inculturação na exortação <em>Catechesi tradendae</em> (1979, n. 53) e o definiu na <em>Redemptoris missio</em> (1990, n. 52) como a íntima transformação dos valores culturais autênticos por sua integração no cristianismo e o enraizamento do cristianismo nas diversas culturas ${tag('doutrina')}. Dois critérios: compatibilidade com o Evangelho e comunhão com a Igreja universal (RM 54) ${tag('doutrina')}.</p>
<h3>Os ritos chineses</h3>
<p>Matteo Ricci, jesuíta na China no fim do século XVI, adaptou a apresentação da fé à cultura chinesa e permitiu aos convertidos certos ritos em honra de Confúcio e dos antepassados ${tag('fato')}. Roma proibiu esses ritos no século XVIII; em 1939, Pio XII permitiu-os, por entender que tinham caráter civil ${tag('fato')}.</p>
<h3>América Latina e Brasil</h3>
<p>A Conferência de Puebla (1979) tratou da evangelização da cultura ${tag('fato')}. A exortação <em>Querida Amazonia</em> (2020) dedica um capítulo à inculturação na Amazônia ${tag('fato')}.</p>`,
  vocabulario: [
    ['Inculturação', 'Enraizamento do Evangelho numa cultura e transformação desta pelo Evangelho.'],
    ['Areópago', 'Conselho e lugar de Atenas onde Paulo discursou.'],
    ['Acomodação', 'Método missionário de adaptação à cultura local, como o de Ricci.'],
    ['Sincretismo', 'Mistura de crenças que compromete a identidade de uma fé.'],
    ['Evangelização da cultura', 'Transformação dos critérios e valores de uma cultura pelo Evangelho.'],
  ],
  exemplos: `<p><strong>Inculturação e sincretismo:</strong> usar a música e as línguas de um povo na liturgia, dentro das normas da Igreja, é inculturação; identificar santos católicos com divindades de outra religião como se fossem a mesma realidade é sincretismo. No Brasil, a distinção aparece no estudo das relações entre catolicismo popular e religiões de matriz africana.</p>`,
  contexto: `<p><strong>No mundo:</strong> a constituição <em>Sacrosanctum Concilium</em> (1963, nn. 37–40) admitiu adaptações da liturgia ao gênio dos povos ${tag('fato')}. <strong>No Brasil:</strong> a devoção a Nossa Senhora Aparecida, iniciada em 1717, é exemplo de catolicismo popular enraizado na cultura do país ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que a inculturação exige critérios', tag: 'argumento',
    premissas: ['Toda cultura tem valores autênticos e também elementos contrários ao Evangelho.', 'Acolher tudo levaria ao sincretismo; rejeitar tudo, a uma fé estrangeira e desenraizada.', 'Só critérios — compatibilidade com o Evangelho e comunhão com a Igreja — permitem discernir.'],
    conclusao: 'Logo, a inculturação autêntica é discernimento, não mera adaptação.',
    nota: 'O próprio Evangelho também julga e purifica as culturas, inclusive a do missionário.',
  },
  objecoes: [
    { objecao: 'Evangelizar é sempre destruir culturas.', tag: 'debate',
      resposta: 'Houve violências e destruições ligadas à colonização, que a Igreja reconheceu e lamentou em várias ocasiões. Mas houve também a preservação de línguas, como no trabalho de Anchieta, e a defesa de indígenas, como em Las Casas e Vieira. A proposta da inculturação é justamente anunciar a fé respeitando e elevando o que há de bom em cada cultura.' },
  ],
  aplicacao: `<p>Analise um caso de encontro entre fé e cultura no Brasil (catequese jesuítica, festa religiosa popular, liturgia em comunidade indígena) com os critérios da Redemptoris missio, 52–54.</p>`,
  fonte: {
    obra: 'Atos dos Apóstolos 17, 16–34; São João Paulo II, Redemptoris missio (1990), nn. 52–54; Papa Francisco, Querida Amazonia (2020), cap. 4', link: { url: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_07121990_redemptoris-missio.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Atos 17, o ponto de partida de Paulo e o anúncio central. Na Redemptoris missio, a definição e os critérios da inculturação. Na Querida Amazonia, a aplicação à Amazônia.</p>`,
  },
  perguntas: [
    { p: 'Como a Redemptoris missio define a inculturação?', r: 'Como a íntima transformação dos valores culturais autênticos pelo cristianismo e o enraizamento do cristianismo nas culturas.' },
    { p: 'Quais os dois critérios da inculturação?', r: 'Compatibilidade com o Evangelho e comunhão com a Igreja universal.' },
    { p: 'O que fez Pio XII em 1939 sobre os ritos chineses?', r: 'Permitiu-os, por entender que tinham caráter civil.' },
  ],
  exercicios: [
    mc('O discurso de Paulo no Areópago está em:', ['Rm 1', 'At 17', '1Cor 13', 'Gl 3'], 1, 'Atenas.'),
    mc('A inculturação é definida na Redemptoris missio, n.:', ['1', '52', '100', '150'], 1, '1990.'),
    mc('Matteo Ricci atuou na:', ['Índia', 'China', 'Japão', 'África'], 1, 'Acomodação.'),
    mc('A Conferência de Puebla é de:', ['1968', '1979', '1992', '2007'], 1, 'Evangelização da cultura.'),
    mc('Identificar santos com divindades de outra religião como a mesma realidade é:', ['Inculturação', 'Sincretismo', 'Catequese', 'Liturgia'], 1, 'Distinção.'),
    disc('Analise um caso brasileiro de encontro entre fé e cultura com os critérios da Redemptoris missio.', ['Caso', 'Valores acolhidos', 'Elementos purificados', 'Critérios']),
  ],
  resumo: ['Areópago (At 17).', 'Inculturação: CT 53, RM 52–54.', 'Dois critérios.', 'Ritos chineses: proibição e 1939.', 'Puebla (1979); Querida Amazonia (2020).'],
  referencias: [
    { texto: 'Bíblia, Atos dos Apóstolos 17.' },
    { texto: 'São João Paulo II, Redemptoris missio (1990).', livro: 'jp2-redemptoris-missio' },
    { texto: 'Papa Francisco, Querida Amazonia (2020).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do caso', 'Ler os textos indicados'],
  revisao: [['RM 52', 'Inculturação.'], ['At 17', 'Areópago.'], ['1939', 'Ritos chineses.']],
  avancado: {
    texto: `<h3>A teologia da cultura de Ratzinger</h3>
<p>Joseph Ratzinger preferiu falar em "interculturalidade" e sustentou que a fé não encontra culturas nuas, mas sempre já formadas, e que o encontro com o Evangelho as abre a algo que trazem como expectativa ${tag('interpretacao')}. No discurso de Regensburg (2006), defendeu que a helenização da fé — o encontro com a razão grega — não foi acidente, mas parte de sua identidade ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bento XVI, discurso na Universidade de Regensburg (12 de setembro de 2006).' }],
    exercicios: [
      mc('O discurso de Regensburg é de:', ['2005', '2006', '2010', '2013'], 1, 'Bento XVI.'),
      mc('Ratzinger preferiu o termo:', ['Aculturação', 'Interculturalidade', 'Sincretismo', 'Assimilação'], 1, 'Encontro de culturas.'),
      mc('Em Regensburg, Bento XVI defendeu que o encontro com a razão grega:', ['Foi acidente', 'Faz parte da identidade da fé', 'Deve ser abandonado', 'É irrelevante'], 1, 'Fé e razão.'),
      disc('Compare inculturação e interculturalidade e diga o que cada termo enfatiza.', ['Inculturação', 'Interculturalidade', 'Ênfases', 'Avaliação'])],
  },
}),

avaliacao('cu3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as abordagens da cultura no século XX e os debates do módulo, e duas discursivas de análise.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia o quadro comparativo e o ensaio sobre relativismo.</li><li>Revise os critérios da inculturação.</li></ul>`,
[
  disc('Compare duas abordagens da cultura do século XX (Frankfurt, estudos culturais ou personalismo) na análise de um fenômeno cultural brasileiro.', ['Fenômeno', 'Primeira abordagem', 'Segunda abordagem', 'Comparação']),
  disc('Responda a quem afirma que respeitar as culturas exige renunciar à verdade, usando a distinção entre os relativismos e o ensino da Igreja sobre a inculturação.', ['Distinção dos relativismos', 'Argumento', 'Inculturação', 'Conclusão']),
]),
];
