// Relações Internacionais V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Relações Internacionais).
// Análise de conjuntura; migrações e refúgio; a Santa Sé e a diplomacia da paz; investigação; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ri5-1', titulo: 'Análise de conjuntura internacional', duracao: '150 min',
  aprendera: ['Aplicar um roteiro de análise de conjuntura', 'Usar fontes plurais e verificar informações', 'Construir cenários com prudência', 'Escrever uma análise equilibrada'],
  prereq: ['Relações Internacionais IV (módulo RI4)'],
  explicacao: `
<h3>O problema</h3>
<p>Todos os dias chegam notícias de crises, cúpulas e eleições no exterior. Como transformar notícias soltas em compreensão?</p>
<h3>Roteiro</h3>
<p>1. Delimitar o tema e o período. 2. Identificar os atores e seus interesses declarados e prováveis. 3. Reconstruir os fatos com datas e fontes. 4. Situar o contexto histórico e estrutural. 5. Aplicar conceitos e teorias. 6. Identificar tendências e incertezas. 7. Esboçar cenários possíveis, sem profecias ${tag('interpretacao')}.</p>
<h3>Fontes</h3>
<p>Combine documentos oficiais, agências de notícias, imprensa de diferentes países e orientações, centros de pesquisa e especialistas ${tag('interpretacao')}. Verifique datas, autoria e se o dado aparece em mais de uma fonte independente ${tag('fato')}.</p>
<h3>Desinformação</h3>
<p>Notícias falsas e propaganda estatal circulam especialmente em conflitos ${tag('fato')}. Desconfie de imagens sem origem, citações sem fonte e números redondos sem metodologia ${tag('argumento')}.</p>
<h3>Honestidade</h3>
<p>Uma boa análise distingue o que se sabe, o que se supõe e o que se deseja; e aplica o princípio de caridade às posições de que discorda ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Análise de conjuntura', 'Interpretação organizada de uma situação política em curso.'],
    ['Ator', 'Quem age e tem interesses no tema analisado.'],
    ['Cenário', 'Descrição plausível de um futuro possível.'],
    ['Fonte independente', 'Fonte que não depende de outra para a mesma informação.'],
    ['Desinformação', 'Informação falsa difundida deliberadamente.'],
  ],
  exemplos: `<p><strong>Uma cúpula internacional:</strong> antes de concluir que "a cúpula foi um fracasso", o analista verifica o comunicado final, o que cada país declarou, o que foi assinado, o que ficou de fora e como a imprensa de diferentes países relatou. Talvez o resultado tenha sido modesto em um tema e relevante em outro.</p>`,
  contexto: `<p><strong>No mundo:</strong> organizações de checagem de fatos verificam afirmações públicas, inclusive sobre temas internacionais ${tag('fato')}. <strong>No Brasil:</strong> a Funag publica análises e documentos sobre política externa ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que cenários são melhores que previsões', tag: 'argumento',
    premissas: ['A política internacional depende de decisões livres e de acontecimentos imprevisíveis.', 'Previsões únicas costumam falhar.', 'Cenários alternativos preparam para várias possibilidades e mostram de que fatores dependem.'],
    conclusao: 'Logo, uma análise prudente constrói cenários em vez de profetizar.',
    nota: 'A humildade epistêmica é parte da prudência.',
  },
  objecoes: [
    { objecao: 'Basta seguir um bom jornal para entender o mundo.', tag: 'debate',
      resposta: 'Um bom jornal ajuda, mas todo veículo tem limites de espaço, ângulo e acesso. Comparar fontes de diferentes países e orientações e ler documentos originais reduz vieses.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: análise de conjuntura de duas páginas sobre um tema internacional atual, seguindo o roteiro de sete passos, com pelo menos cinco fontes de origens diferentes.</p>`,
  fonte: {
    obra: 'Documentos oficiais e comunicados do tema escolhido (por exemplo, no portal do Itamaraty ou da ONU)', link: null,
    orientacao: `<p>Leia o documento original antes das notícias sobre ele e compare.</p>`,
  },
  perguntas: [
    { p: 'Quais os passos do roteiro de conjuntura?', r: 'Tema, atores, fatos, contexto, conceitos, tendências e cenários.' },
    { p: 'Como verificar uma informação?', r: 'Checando data, autoria e se aparece em fontes independentes.' },
    { p: 'Por que construir cenários?', r: 'Porque previsões únicas costumam falhar, e cenários preparam para várias possibilidades.' },
  ],
  exercicios: [
    mc('Um cenário é:', ['Um futuro possível plausível', 'Uma certeza', 'Um fato', 'Uma lei'], 0, 'Definição.'),
    mc('Imagens sem origem devem ser:', ['Verificadas antes de usadas', 'Aceitas', 'Ignoradas sempre', 'Publicadas'], 0, 'Desinformação.'),
    mc('Fontes independentes:', ['Não dependem umas das outras', 'Copiam a mesma agência', 'São anônimas', 'São iguais'], 0, 'Verificação.'),
    mc('O princípio de caridade pede:', ['Reconstruir a posição contrária na forma mais forte', 'Ignorar adversários', 'Atacar a pessoa', 'Concordar sempre'], 0, 'Honestidade.'),
    mc('A Funag publica:', ['Análises sobre política externa', 'Leis penais', 'Receitas', 'Dados de clima apenas'], 0, 'Brasil.'),
    disc('Escreva a análise de conjuntura de duas páginas.', ['Roteiro', 'Fontes', 'Cenários', 'Equilíbrio']),
  ],
  resumo: ['Roteiro de sete passos.', 'Fontes plurais.', 'Verificação.', 'Cenários, não profecias.', 'Caridade e honestidade.'],
  referencias: [
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
    { texto: 'Olavo de Carvalho e Alexandr Dugin, Os EUA e a Nova Ordem Mundial (2012).', livro: 'olavo-dugin' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise de conjuntura', 'Ler a fonte indicada'],
  revisao: [['Atores', 'Interesses.'], ['Cenários', 'Não profecias.'], ['Fontes', 'Independentes.']],
  avancado: {
    texto: `<h3>Viés de confirmação e ecossistemas de informação</h3>
<p>Tendemos a buscar e lembrar informações que confirmam o que já pensamos ${tag('fato')}. Algoritmos de redes sociais podem reforçar essa tendência ao mostrar conteúdos semelhantes aos que já consumimos ${tag('debate')}. Seguir deliberadamente fontes de outras orientações e ler documentos originais é um antídoto ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' }],
    exercicios: [
      mc('O viés de confirmação leva a buscar informações que:', ['Confirmam o que pensamos', 'Contradizem', 'São neutras', 'São numéricas'], 0, 'Viés.'),
      mc('O papel dos algoritmos nesse viés é:', ['Debatido', 'Nulo comprovado', 'Único fator', 'Desconhecido totalmente'], 0, 'Debate.'),
      mc('Um antídoto é:', ['Ler fontes de outras orientações', 'Ler só uma fonte', 'Evitar documentos', 'Confiar no algoritmo'], 0, 'Prática.'),
      disc('Monte uma lista de dez fontes de informação internacional de origens e orientações diferentes, justificando.', ['Fontes', 'Diversidade', 'Critérios', 'Uso'])],
  },
}),

aula({
  id: 'ri5-2', titulo: 'Migrações e refúgio', duracao: '150 min',
  aprendera: ['Distinguir migrante e refugiado', 'Conhecer a Convenção de 1951 e o princípio de não devolução', 'Conhecer a legislação brasileira sobre refúgio e migração', 'Conhecer o ensinamento da Igreja sobre migrações'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Milhões de pessoas deixam seus países por guerra, perseguição ou pobreza. Que direitos têm, e que deveres têm os países que as recebem?</p>
<h3>Refugiado</h3>
<p>A Convenção relativa ao Estatuto dos Refugiados (1951) e seu Protocolo (1967) definem refugiado como quem, por fundado temor de perseguição por raça, religião, nacionalidade, grupo social ou opinião política, está fora de seu país e não pode ou não quer se valer de sua proteção ${tag('fato')}. O princípio de não devolução (non-refoulement) proíbe devolvê-lo a lugar onde sua vida ou liberdade estejam ameaçadas ${tag('fato')}. O Acnur foi criado em 1950 ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>A Lei nº 9.474/1997 regula o refúgio e criou o Comitê Nacional para os Refugiados (Conare), ampliando a definição para casos de grave e generalizada violação de direitos humanos ${tag('fato')}. A Lei de Migração (Lei nº 13.445/2017) substituiu o Estatuto do Estrangeiro ${tag('fato')}. A Operação Acolhida, iniciada em 2018, recebe e interioriza migrantes e refugiados venezuelanos ${tag('fato')}.</p>
<h3>Igreja</h3>
<p>O Catecismo (§ 2241) pede que as nações mais prósperas acolham, na medida do possível, o estrangeiro que busca segurança e meios de vida, e lembra que os migrantes devem respeitar as leis e o patrimônio do país que os acolhe ${tag('doutrina')}. O Papa Francisco resumiu a resposta em quatro verbos: acolher, proteger, promover e integrar ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Refugiado', 'Pessoa fora de seu país por fundado temor de perseguição.'],
    ['Migrante', 'Pessoa que muda de país, por razões diversas.'],
    ['Non-refoulement', 'Proibição de devolver alguém a lugar de risco.'],
    ['Acnur', 'Agência da ONU para refugiados.'],
    ['Interiorização', 'Transferência voluntária de migrantes para outras cidades do país.'],
  ],
  exemplos: `<p><strong>Duas famílias:</strong> uma família foge de perseguição política e pede refúgio; outra deixa o país por falta de emprego. A primeira se enquadra na definição de refugiado; a segunda é migrante econômica, com outros instrumentos legais. Ambas têm dignidade humana e direitos fundamentais.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Acnur recebeu o Nobel da Paz em 1954 e em 1981 ${tag('fato')}. <strong>No Brasil:</strong> a Cáritas e outras organizações da Igreja atuam no acolhimento de migrantes e refugiados ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que acolher e regular não se opõem', tag: 'argumento',
    premissas: ['A dignidade humana exige acolher quem foge de perseguição e miséria.', 'O bem comum do país de acolhida exige ordem, integração e respeito às leis.', 'A doutrina católica afirma as duas exigências juntas (CIC 2241).'],
    conclusao: 'Logo, uma política migratória justa acolhe e regula ao mesmo tempo.',
    nota: 'O equilíbrio concreto é matéria de prudência política.',
  },
  objecoes: [
    { objecao: 'Todo migrante econômico deveria ser tratado como refugiado.', tag: 'debate',
      resposta: 'A distinção jurídica existe para garantir proteção especial a quem foge de perseguição. Ampliar demais a categoria pode enfraquecê-la. Isso não diminui a dignidade nem os direitos dos migrantes econômicos, que são protegidos por outras normas.' },
  ],
  aplicacao: `<p>Estude a Operação Acolhida ou outra experiência de acolhimento no Brasil: objetivos, etapas, resultados e desafios, e proponha uma ação local de integração (escola, paróquia, bairro).</p>`,
  fonte: {
    obra: 'Convenção relativa ao Estatuto dos Refugiados (1951), artigos 1 e 33', link: null,
    orientacao: `<p>Observe a definição de refugiado e a proibição de expulsão ou devolução.</p>`,
  },
  perguntas: [
    { p: 'Como a Convenção de 1951 define refugiado?', r: 'Quem, por fundado temor de perseguição por raça, religião, nacionalidade, grupo social ou opinião política, está fora de seu país.' },
    { p: 'O que é non-refoulement?', r: 'A proibição de devolver alguém a lugar onde sua vida ou liberdade estejam ameaçadas.' },
    { p: 'Quais os quatro verbos do Papa Francisco?', r: 'Acolher, proteger, promover e integrar.' },
  ],
  exercicios: [
    mc('A Convenção dos Refugiados é de:', ['1951', '1967', '1997', '2017'], 0, 'ONU.'),
    mc('A lei brasileira de refúgio é de:', ['1997', '2017', '1951', '2018'], 0, 'Lei 9.474.'),
    mc('A Lei de Migração é de:', ['2017', '1997', '1980', '2018'], 0, 'Lei 13.445.'),
    mc('A Operação Acolhida começou em:', ['2018', '2010', '2015', '2020'], 0, 'Venezuelanos.'),
    mc('O acolhimento do estrangeiro está no CIC:', ['§ 2241', '§ 2309', '§ 1735', '§ 279'], 0, 'Catecismo.'),
    disc('Estude a experiência de acolhimento e proponha uma ação local.', ['Experiência', 'Resultados', 'Desafios', 'Ação local']),
  ],
  resumo: ['Refugiado × migrante.', 'Convenção de 1951 e non-refoulement.', 'Lei 9.474/1997 e Lei 13.445/2017.', 'Operação Acolhida (2018).', 'CIC 2241; quatro verbos.'],
  referencias: [
    { texto: 'Convenção relativa ao Estatuto dos Refugiados (1951).' },
    { texto: 'Catecismo da Igreja Católica, § 2241.', livro: 'cic' },
    { texto: 'Papa Francisco, Fratelli tutti (2020), capítulo IV.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o estudo e a proposta', 'Ler a fonte indicada'],
  revisao: [['1951', 'Convenção.'], ['Non-refoulement', 'Não devolver.'], ['2241', 'Acolher e respeitar leis.']],
  avancado: {
    texto: `<h3>Deslocados internos e apátridas</h3>
<p>Deslocados internos fogem dentro do próprio país e não cruzam fronteiras, o que os deixa fora da Convenção de 1951 ${tag('fato')}. Apátridas são pessoas sem nacionalidade reconhecida por nenhum Estado ${tag('fato')}. A Lei de Migração brasileira prevê um procedimento de reconhecimento da apatridia e facilita a naturalização dos apátridas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Lei nº 13.445/2017 (Lei de Migração).' }],
    exercicios: [
      mc('Deslocados internos:', ['Não cruzam fronteiras', 'São sempre refugiados', 'São apátridas', 'Não existem'], 0, 'Definição.'),
      mc('Apátrida é quem:', ['Não tem nacionalidade reconhecida', 'Tem duas nacionalidades', 'É turista', 'É diplomata'], 0, 'Definição.'),
      mc('A Lei de Migração prevê reconhecimento da:', ['Apatridia', 'Dupla cidadania obrigatória', 'Escravidão', 'Nada'], 0, 'Brasil.'),
      disc('Explique por que deslocados internos e apátridas precisam de proteção específica.', ['Deslocados', 'Apátridas', 'Lacunas', 'Respostas'])],
  },
}),

aula({
  id: 'ri5-3', titulo: 'A Santa Sé e a diplomacia da paz', duracao: '150 min',
  aprendera: ['Distinguir Santa Sé e Estado da Cidade do Vaticano', 'Conhecer a presença da Santa Sé nas organizações internacionais', 'Estudar a mediação no caso do canal de Beagle', 'Conhecer o Acordo Brasil–Santa Sé'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como uma autoridade religiosa sem exército participa da diplomacia mundial, e com que fins?</p>
<h3>Santa Sé e Vaticano</h3>
<p>A Santa Sé é o governo central da Igreja Católica e sujeito de direito internacional ${tag('fato')}. O Estado da Cidade do Vaticano foi criado pelo Tratado de Latrão (1929) para garantir a independência da Santa Sé ${tag('fato')}. É a Santa Sé, e não o Vaticano como território, que mantém relações diplomáticas ${tag('fato')}.</p>
<h3>Presença internacional</h3>
<p>A Santa Sé mantém relações diplomáticas com a grande maioria dos Estados por meio de núncios apostólicos ${tag('fato')}. É observadora permanente na ONU desde 1964 ${tag('fato')}.</p>
<h3>Mediação</h3>
<p>Em 1978, Argentina e Chile estiveram à beira de uma guerra pela região do canal de Beagle ${tag('fato')}. A mediação de São João Paulo II, conduzida pelo cardeal Antonio Samorè, levou ao Tratado de Paz e Amizade de 1984 ${tag('fato')}. Bento XV, em 1917, propôs uma nota de paz às potências em guerra ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>O Acordo entre o Brasil e a Santa Sé sobre o estatuto jurídico da Igreja Católica no Brasil foi assinado em 2008 e promulgado em 2010 ${tag('fato')}.</p>
<h3>Finalidade</h3>
<p>A diplomacia da Santa Sé busca a liberdade religiosa, a paz e a dignidade humana, e não poder territorial ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Santa Sé', 'Governo central da Igreja Católica, sujeito de direito internacional.'],
    ['Núncio apostólico', 'Representante diplomático da Santa Sé.'],
    ['Tratado de Latrão', 'Acordo de 1929 que criou o Estado da Cidade do Vaticano.'],
    ['Mediação', 'Ajuda de um terceiro para que as partes cheguem a acordo.'],
    ['Concordata', 'Acordo entre a Santa Sé e um Estado.'],
  ],
  exemplos: `<p><strong>O canal de Beagle:</strong> em dezembro de 1978, tropas argentinas e chilenas estavam mobilizadas. O Papa enviou um mediador; as partes aceitaram; após anos de negociação, assinaram um tratado que permanece em vigor. O caso mostra uma autoridade moral evitando uma guerra entre países majoritariamente católicos.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Santa Sé assinou concordatas e acordos com muitos países ${tag('fato')}. <strong>No Brasil:</strong> a Nunciatura Apostólica fica em Brasília ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a autoridade moral pode mediar conflitos', tag: 'argumento',
    premissas: ['A mediação exige confiança das duas partes na imparcialidade do mediador.', 'Um mediador sem interesses territoriais ou militares tem mais chance de ser visto como imparcial.', 'A Santa Sé não disputa territórios nem tem exército de conquista.'],
    conclusao: 'Logo, a Santa Sé pode ser mediadora aceitável em certos conflitos.',
    nota: 'A eficácia depende também da disposição das partes e do contexto.',
  },
  objecoes: [
    { objecao: 'Uma instituição religiosa não deveria fazer diplomacia.', tag: 'debate',
      resposta: 'A diplomacia da Santa Sé é reconhecida pelo direito internacional e busca fins como a paz, a liberdade religiosa e a proteção dos mais fracos. Críticos discutem seu estatuto na ONU; defensores lembram sua contribuição a mediações e à ajuda humanitária.' },
  ],
  aplicacao: `<p>Estude o caso do canal de Beagle (contexto, atores, papel do mediador, resultado) e redija uma síntese sobre o que ele ensina para a solução pacífica de controvérsias.</p>`,
  fonte: {
    obra: 'Tratado de Paz e Amizade entre Argentina e Chile (1984), preâmbulo', link: null,
    orientacao: `<p>Observe a menção à mediação da Santa Sé e o compromisso com a solução pacífica.</p>`,
  },
  perguntas: [
    { p: 'Qual a diferença entre Santa Sé e Vaticano?', r: 'A Santa Sé é o governo da Igreja e sujeito de direito internacional; o Vaticano é o Estado criado em 1929 para garantir sua independência.' },
    { p: 'Quem mediou o conflito do canal de Beagle?', r: 'A Santa Sé, por João Paulo II e o cardeal Antonio Samorè.' },
    { p: 'Quando foi assinado o Acordo Brasil–Santa Sé?', r: 'Em 2008, promulgado em 2010.' },
  ],
  exercicios: [
    mc('O Tratado de Latrão é de:', ['1929', '1984', '1964', '1917'], 0, 'Vaticano.'),
    mc('A Santa Sé é observadora na ONU desde:', ['1964', '1945', '1929', '1984'], 0, 'Observadora.'),
    mc('O Tratado de Paz e Amizade Argentina–Chile é de:', ['1984', '1978', '1929', '2008'], 0, 'Beagle.'),
    mc('O representante diplomático da Santa Sé é o:', ['Núncio', 'Cônsul', 'Bispo diocesano', 'Embaixador leigo'], 0, 'Termo.'),
    mc('A nota de paz de Bento XV é de:', ['1917', '1929', '1945', '1963'], 0, 'Primeira Guerra.'),
    disc('Estude o caso do canal de Beagle e redija a síntese.', ['Contexto', 'Atores', 'Mediação', 'Lições']),
  ],
  resumo: ['Santa Sé × Vaticano.', 'Latrão (1929).', 'Núncios; ONU desde 1964.', 'Beagle (1978–1984).', 'Acordo Brasil–Santa Sé (2008).'],
  referencias: [
    { texto: 'São João XXIII, Pacem in terris (1963).' },
    { texto: 'Papa Francisco, Fratelli tutti (2020).' },
    { texto: 'Acordo entre o Brasil e a Santa Sé (2008).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o estudo de caso', 'Ler a fonte indicada'],
  revisao: [['Santa Sé', 'Sujeito de direito.'], ['Beagle', '1984.'], ['2008', 'Acordo com o Brasil.']],
  avancado: {
    texto: `<h3>A liberdade religiosa como direito</h3>
<p>A declaração Dignitatis humanae (1965), do Concílio Vaticano II, afirmou que a pessoa humana tem direito à liberdade religiosa, fundado na própria dignidade ${tag('doutrina')}. A Declaração Universal dos Direitos Humanos (art. 18) também protege a liberdade de pensamento, consciência e religião ${tag('fato')}. A defesa da liberdade religiosa é tema constante da diplomacia da Santa Sé ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Concílio Vaticano II, Dignitatis humanae (1965).' }],
    exercicios: [
      mc('Dignitatis humanae é de:', ['1965', '1948', '1929', '1984'], 0, 'Concílio.'),
      mc('A liberdade religiosa na DUDH está no art.:', ['18', '1', '3', '30'], 0, 'Texto.'),
      mc('Para Dignitatis humanae, a liberdade religiosa funda-se na:', ['Dignidade da pessoa', 'Vontade do Estado', 'Maioria', 'Economia'], 0, 'Doutrina.'),
      disc('Explique por que a liberdade religiosa é tema central da diplomacia da Santa Sé, com um exemplo.', ['Fundamento', 'Diplomacia', 'Exemplo', 'Avaliação'])],
  },
}),

aula({
  id: 'ri5-4', titulo: 'Pesquisa: um episódio da política externa brasileira', duracao: '180 min',
  aprendera: ['Escolher um tema de pesquisa em relações internacionais', 'Combinar fontes primárias e secundárias', 'Analisar com teorias e conceitos', 'Redigir um relatório equilibrado'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como investigar a fundo um episódio da política externa ou um tema internacional que afeta sua região?</p>
<h3>Escolha</h3>
<p>Exemplos: a questão do Acre e o Tratado de Petrópolis; a participação brasileira na Segunda Guerra; a criação do Mercosul; a Operação Acolhida em Roraima; a atuação do Brasil numa conferência ambiental; o comércio de um produto da sua região com o exterior ${tag('interpretacao')}.</p>
<h3>Fontes</h3>
<p>Primárias: tratados, discursos, documentos do Itamaraty, atas do Congresso, jornais da época (Hemeroteca Digital Brasileira) ${tag('fato')}. Secundárias: livros e artigos (SciELO, Portal de Periódicos da CAPES), publicações da Funag ${tag('fato')}.</p>
<h3>Etapas</h3>
<p>1. Pergunta delimitada. 2. Cronologia com fontes. 3. Atores e interesses. 4. Análise com conceitos e ao menos duas teorias. 5. Avaliação, inclusive moral quando pertinente. 6. Conclusão proporcional ${tag('interpretacao')}.</p>
<h3>Honestidade</h3>
<p>Distinga fato documentado, interpretação e juízo; cite cada fonte; apresente as posições contrárias com justiça ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Fonte primária', 'Documento produzido no tempo do evento pelos envolvidos.'],
    ['Fonte secundária', 'Estudo posterior sobre o evento.'],
    ['Cronologia', 'Sequência ordenada dos fatos com datas.'],
    ['Pergunta delimitada', 'Questão precisa que orienta a investigação.'],
    ['Conclusão proporcional', 'Conclusão do tamanho que as fontes permitem.'],
  ],
  exemplos: `<p><strong>A questão do Acre:</strong> um estudante lê o Tratado de Petrópolis, os relatórios do Itamaraty, jornais de 1903 na Hemeroteca e dois livros de história diplomática. Monta a cronologia, identifica os interesses de Brasil e Bolívia, analisa com o realismo e com a tradição jurídica, e conclui sobre o papel da negociação.</p>`,
  contexto: `<p><strong>No mundo:</strong> arquivos diplomáticos de muitos países são abertos a pesquisadores após prazos legais ${tag('fato')}. <strong>No Brasil:</strong> a Lei de Acesso à Informação (Lei nº 12.527/2011) regula o acesso a documentos públicos, inclusive diplomáticos ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que combinar fontes primárias e secundárias', tag: 'argumento',
    premissas: ['Fontes primárias mostram o que os atores disseram e fizeram, mas com seus próprios interesses.', 'Fontes secundárias oferecem contexto e comparação, mas são interpretações.', 'Cruzar as duas reduz os vieses de cada uma.'],
    conclusao: 'Logo, uma boa pesquisa combina fontes primárias e secundárias.',
    nota: 'É o método da crítica histórica estudado em História.',
  },
  objecoes: [
    { objecao: 'Pesquisa em relações internacionais exige acesso a arquivos secretos.', tag: 'debate',
      resposta: 'Muitos documentos importantes são públicos (tratados, discursos, jornais, relatórios), e a Lei de Acesso à Informação ampliou o acesso. Uma pesquisa modesta, bem delimitada e honesta é possível com fontes abertas.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: tema, pergunta, fontes primárias e secundárias, teorias a usar, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Hemeroteca Digital Brasileira (Biblioteca Nacional); SciELO; publicações da Funag', link: { url: 'https://www.scielo.br', rotulo: 'SciELO Brasil' },
    orientacao: `<p>Faça uma busca-teste com palavras-chave do seu tema e registre as fontes encontradas.</p>`,
  },
  perguntas: [
    { p: 'O que é fonte primária?', r: 'Documento produzido no tempo do evento pelos envolvidos.' },
    { p: 'Quais as etapas da pesquisa?', r: 'Pergunta, cronologia, atores, análise com teorias, avaliação e conclusão.' },
    { p: 'Que lei regula o acesso a documentos públicos no Brasil?', r: 'A Lei de Acesso à Informação (Lei nº 12.527/2011).' },
  ],
  exercicios: [
    mc('Um tratado é fonte:', ['Primária', 'Secundária', 'Terciária', 'Nenhuma'], 0, 'Documento.'),
    mc('Um livro de história diplomática é fonte:', ['Secundária', 'Primária', 'Oficial', 'Nenhuma'], 0, 'Estudo.'),
    mc('A Lei de Acesso à Informação é de:', ['2011', '1988', '2017', '1997'], 0, 'Lei 12.527.'),
    mc('Jornais antigos estão na:', ['Hemeroteca Digital', 'Receita Federal', 'OMC', 'Anvisa'], 0, 'Biblioteca Nacional.'),
    mc('A conclusão deve ser:', ['Proporcional às fontes', 'A mais ousada', 'Sem fontes', 'Definida antes'], 0, 'Honestidade.'),
    disc('Apresente o pré-projeto completo.', ['Tema e pergunta', 'Fontes', 'Teorias', 'Cronograma e rubrica']),
  ],
  resumo: ['Tema delimitado.', 'Fontes primárias e secundárias.', 'Cronologia e atores.', 'Teorias e avaliação.', 'Conclusão proporcional.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Primária', 'Do tempo.'], ['Secundária', 'Estudo.'], ['LAI', '2011.']],
  avancado: {
    texto: `<h3>Process tracing</h3>
<p>O "rastreamento de processos" (process tracing) é um método para testar explicações num estudo de caso, verificando se a sequência de eventos e evidências corresponde ao que cada hipótese prevê ${tag('fato')}. Ajuda a distinguir explicações concorrentes de uma mesma decisão ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' }],
    exercicios: [
      mc('Process tracing serve para:', ['Testar explicações num caso', 'Contar votos', 'Medir PIB', 'Traduzir tratados'], 0, 'Método.'),
      mc('Ele verifica se a sequência de eventos:', ['Corresponde às previsões das hipóteses', 'É bonita', 'É curta', 'É secreta'], 0, 'Lógica.'),
      mc('Ajuda a distinguir:', ['Explicações concorrentes', 'Idiomas', 'Moedas', 'Mapas'], 0, 'Uso.'),
      disc('Aplique process tracing a duas explicações de uma decisão de política externa do seu pré-projeto.', ['Hipótese 1', 'Hipótese 2', 'Evidências', 'Conclusão'])],
  },
}),

avaliacao('ri5-5', 'Avaliação integradora de Relações Internacionais', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Relações Internacionais. Reúne questões de todos os módulos (RI1 a RI5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia sua análise de conjuntura.</li><li>Releia a rubrica da pesquisa (ri5-4).</li></ul>`,
[
  disc('Analise um tema internacional atual que envolva o Brasil: atores, fatos com fontes, contexto histórico, duas teorias, princípios do art. 4º da Constituição e cenários possíveis.', ['Atores e fatos', 'Contexto', 'Teorias', 'Cenários']),
  disc('Responda, com base em Agostinho ou Tomás, em Kant ou Morgenthau e na Pacem in terris, à pergunta: é possível uma ordem internacional justa e pacífica?', ['Tradição clássica', 'Autor moderno', 'Pacem in terris', 'Argumentação']),
]),
];
