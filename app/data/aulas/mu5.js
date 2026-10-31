// Música V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Música).
// Música na liturgia e na comunidade; educação musical; música, cultura e mercado; investigação; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'mu5-1', titulo: 'Música na liturgia e na comunidade', duracao: '150 min',
  aprendera: ['Conhecer as orientações da Instrução Geral do Missal Romano sobre o canto', 'Planejar o repertório de uma celebração', 'Distinguir funções do coro, do salmista e da assembleia', 'Organizar um grupo de música paroquial'],
  prereq: ['Música IV (módulo MU4)'],
  explicacao: `
<h3>O problema</h3>
<p>Como passar dos princípios sobre música sacra à prática de um domingo na paróquia?</p>
<h3>Orientações</h3>
<p>A Instrução Geral do Missal Romano recomenda dar grande valor ao canto na celebração e reconhece o canto gregoriano como próprio da liturgia romana ${tag('doutrina')}. Indica os momentos de canto: entrada, salmo responsorial, aclamação ao Evangelho, ofertório, Santo, aclamações, Cordeiro de Deus e comunhão ${tag('fato')}.</p>
<h3>Funções</h3>
<p>A assembleia canta as respostas e aclamações; o salmista proclama o salmo; o coro sustenta e enriquece o canto, sem substituir o povo nas partes que lhe cabem ${tag('doutrina')}.</p>
<h3>Planejamento</h3>
<p>Critérios práticos: o tempo litúrgico, as leituras do dia, o momento da celebração, a capacidade do grupo e da assembleia, e a qualidade musical e textual ${tag('interpretacao')}. Textos de canto devem estar de acordo com a doutrina católica ${tag('doutrina')}.</p>
<h3>Comunidade</h3>
<p>Um grupo de música é também escola de formação: ensaio regular, formação litúrgica, cuidado espiritual dos membros e acolhida de novos cantores ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Assembleia', 'O povo reunido que celebra.'],
    ['Salmista', 'Quem proclama o salmo responsorial.'],
    ['Aclamação', 'Breve canto de louvor, como o Aleluia.'],
    ['Tempo litúrgico', 'Período do ano da Igreja (Advento, Natal, Quaresma, Páscoa, Comum).'],
    ['Ordinário', 'Partes fixas da missa.'],
  ],
  exemplos: `<p><strong>Quaresma:</strong> na Quaresma não se canta o Aleluia nem o Glória (exceto em solenidades e festas), e recomenda-se sobriedade instrumental. Um grupo que planeja o repertório escolhe cantos penitenciais, um salmo musicado com o refrão do dia e uma aclamação sem aleluia antes do Evangelho.</p>`,
  contexto: `<p><strong>No mundo:</strong> conferências episcopais publicam diretórios e hinários para o canto litúrgico ${tag('fato')}. <strong>No Brasil:</strong> a CNBB publicou o Hinário Litúrgico e documentos sobre a música na liturgia ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o coro não deve substituir a assembleia', tag: 'argumento',
    premissas: ['A liturgia é ação de toda a Igreja reunida.', 'Certas partes, como respostas e aclamações, pertencem ao povo.', 'Se o coro as canta sozinho, a assembleia deixa de exercer sua parte.'],
    conclusao: 'Logo, o coro deve sustentar o canto do povo, sem tomá-lo para si.',
    nota: 'O coro pode cantar sozinho em outros momentos, enriquecendo a celebração.',
  },
  objecoes: [
    { objecao: 'Basta escolher os cantos que o povo conhece, qualquer que seja o texto.', tag: 'debate',
      resposta: 'Conhecer o canto ajuda a participar, mas o texto deve ser adequado ao momento e à fé da Igreja. Um canto conhecido com texto inadequado prejudica a oração. O ideal é ensinar bons cantos até que se tornem conhecidos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: planeje o repertório completo de uma missa de domingo (indique o domingo e o ano litúrgico), justificando cada escolha pelos critérios estudados.</p>`,
  fonte: {
    obra: 'Instrução Geral do Missal Romano, capítulo sobre o canto na celebração (nn. 39–41)', link: null,
    orientacao: `<p>Observe a importância dada ao canto e a menção ao canto gregoriano.</p>`,
  },
  perguntas: [
    { p: 'Que partes cabem à assembleia?', r: 'As respostas e aclamações.' },
    { p: 'Qual o papel do coro?', r: 'Sustentar e enriquecer o canto, sem substituir o povo em suas partes.' },
    { p: 'Que critérios orientam a escolha dos cantos?', r: 'Tempo litúrgico, leituras, momento, capacidade do grupo e qualidade musical e textual.' },
  ],
  exercicios: [
    mc('Na Quaresma omite-se o:', ['Aleluia', 'Santo', 'Cordeiro de Deus', 'Salmo'], 0, 'Tempo litúrgico.'),
    mc('O salmo responsorial é proclamado pelo:', ['Salmista', 'Celebrante sempre', 'Coro sozinho sempre', 'Leitor da segunda leitura'], 0, 'Função.'),
    mc('O canto gregoriano é reconhecido como:', ['Próprio da liturgia romana', 'Proibido', 'Só para mosteiros', 'Facultativo sem valor'], 0, 'IGMR e SC.'),
    mc('O Hinário Litúrgico no Brasil é da:', ['CNBB', 'SBM', 'Osesp', 'Funarte'], 0, 'Conferência.'),
    mc('Os textos dos cantos devem estar de acordo com a:', ['Doutrina católica', 'Moda do momento', 'Preferência do músico', 'Rádio'], 0, 'Critério.'),
    disc('Planeje o repertório de uma missa dominical com justificativas.', ['Domingo e tempo', 'Cantos', 'Justificativas', 'Funções']),
  ],
  resumo: ['IGMR: valor do canto.', 'Assembleia, salmista, coro.', 'Critérios de escolha.', 'Tempos litúrgicos.', 'Grupo como escola.'],
  referencias: [
    { texto: 'Instrução Geral do Missal Romano.' },
    { texto: 'Concílio Vaticano II, Sacrosanctum Concilium (1963).' },
    { texto: 'Joseph Ratzinger, Introdução ao espírito da liturgia (2000).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o planejamento', 'Ler a fonte indicada'],
  revisao: [['Assembleia', 'Respostas.'], ['Salmista', 'Salmo.'], ['Quaresma', 'Sem Aleluia.']],
  avancado: {
    texto: `<h3>Os salmos responsoriais</h3>
<p>O salmo responsorial é parte da liturgia da Palavra, e seu refrão deve ser cantado pelo povo ${tag('fato')}. O texto vem do Lecionário e responde à primeira leitura ${tag('fato')}. Musicar o salmo exige respeitar o texto bíblico, sem substituí-lo por outro canto ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Instrução Geral do Missal Romano, número sobre o salmo responsorial.' }],
    exercicios: [
      mc('O refrão do salmo é cantado pelo:', ['Povo', 'Celebrante sozinho', 'Ninguém', 'Organista'], 0, 'Responsorial.'),
      mc('O salmo responde à:', ['Primeira leitura', 'Homilia', 'Comunhão', 'Bênção'], 0, 'Liturgia da Palavra.'),
      mc('O texto do salmo vem do:', ['Lecionário', 'Hinário de livre escolha', 'Rádio', 'Missal apenas'], 0, 'Fonte.'),
      disc('Componha ou adapte uma melodia simples para o refrão do salmo de um domingo.', ['Texto', 'Melodia', 'Cantabilidade', 'Adequação'])],
  },
}),

aula({
  id: 'mu5-2', titulo: 'Educação musical: métodos e práticas', duracao: '150 min',
  aprendera: ['Conhecer os métodos Dalcroze, Kodály, Orff e Suzuki', 'Conhecer a experiência do canto orfeônico', 'Planejar uma atividade de musicalização', 'Avaliar o lugar da música na escola'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como ensinar música a crianças e jovens de modo que aprendam a ouvir, cantar e compreender?</p>
<h3>Métodos ativos</h3>
<p>Émile Jaques-Dalcroze desenvolveu a rítmica (eurritmia), que educa o senso musical pelo movimento do corpo ${tag('fato')}. Zoltán Kodály propôs o canto como base, com solfejo relativo, sinais manuais e repertório folclórico ${tag('fato')}. Carl Orff, no Schulwerk, uniu fala, movimento e instrumentos de percussão simples ${tag('fato')}. Shinichi Suzuki ensinou instrumentos desde cedo pela imitação, como na aquisição da língua materna ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Villa-Lobos dirigiu nos anos 1930 e 1940 o canto orfeônico nas escolas, com grandes concentrações corais ${tag('fato')}. A Lei nº 11.769/2008 tornou a música conteúdo obrigatório no ensino de arte ${tag('fato')}. Bandas de música e projetos sociais de orquestras formam jovens em várias regiões ${tag('fato')}.</p>
<h3>Princípios</h3>
<p>Primeiro a experiência sonora, depois o símbolo; o canto como instrumento de todos; repertório de qualidade desde cedo ${tag('interpretacao')}. A música educa a atenção, a memória e a vida em comum ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Musicalização', 'Processo inicial de educação musical.'],
    ['Eurritmia', 'Método de Dalcroze baseado no movimento.'],
    ['Solfejo relativo', 'Leitura em que dó é a tônica de qualquer tonalidade.'],
    ['Schulwerk', 'Proposta educativa de Carl Orff.'],
    ['Canto orfeônico', 'Canto coral escolar organizado por Villa-Lobos.'],
  ],
  exemplos: `<p><strong>Uma atividade:</strong> as crianças andam pela sala no ritmo de uma música; quando a música para, param; quando o andamento muda, mudam o passo. Depois cantam a melodia com sinais manuais e, por fim, veem a melodia escrita. Corpo, voz e símbolo se sucedem.</p>`,
  contexto: `<p><strong>No mundo:</strong> o método Kodály é base do ensino musical escolar na Hungria ${tag('fato')}. <strong>No Brasil:</strong> o Projeto Guri, em São Paulo, oferece educação musical gratuita a crianças e jovens ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a música deve estar na escola', tag: 'argumento',
    premissas: ['A música é parte da herança cultural humana.', 'Educar a sensibilidade e a atenção é parte da formação integral.', 'Para muitas crianças, a escola é a única via de acesso à educação musical.'],
    conclusao: 'Logo, a educação musical tem lugar próprio na escola.',
    nota: 'Aristóteles já incluía a música na educação dos livres (Política VIII).',
  },
  objecoes: [
    { objecao: 'Música na escola é luxo diante de português e matemática.', tag: 'debate',
      resposta: 'Português e matemática são prioridades. Mas a formação humana não se reduz a eles, e a música exercita atenção, memória e cooperação. O tempo é limitado, mas não é preciso escolher entre um e outro.' },
  ],
  aplicacao: `<p>Planeje uma aula de musicalização de 45 minutos para crianças de 8 anos, usando elementos de pelo menos dois métodos estudados, com objetivo, atividades e avaliação.</p>`,
  fonte: {
    obra: 'Aristóteles, Política, livro VIII, cap. 3 (por que a música entra na educação)', link: null,
    orientacao: `<p>Compare as razões de Aristóteles com as dos métodos modernos.</p>`,
  },
  perguntas: [
    { p: 'O que propõe Dalcroze?', r: 'Educar o senso musical pelo movimento do corpo.' },
    { p: 'Qual a base do método Kodály?', r: 'O canto, com solfejo relativo, sinais manuais e repertório folclórico.' },
    { p: 'O que foi o canto orfeônico?', r: 'O canto coral escolar organizado por Villa-Lobos nos anos 1930 e 1940.' },
  ],
  exercicios: [
    mc('O Schulwerk é de:', ['Orff', 'Kodály', 'Suzuki', 'Dalcroze'], 0, 'Proposta.'),
    mc('Suzuki compara o aprendizado musical à:', ['Língua materna', 'Matemática', 'Ginástica', 'Leitura de livros'], 0, 'Imitação.'),
    mc('Os sinais manuais são associados ao método:', ['Kodály', 'Orff', 'Suzuki', 'Dalcroze'], 0, 'Solfejo.'),
    mc('A lei de 2008 sobre música na escola é a:', ['11.769', '9.394', '13.278', '5.692'], 0, 'Lei.'),
    mc('O princípio comum dos métodos ativos é:', ['Experiência antes do símbolo', 'Teoria antes de ouvir', 'Só leitura', 'Só instrumento'], 0, 'Ordem.'),
    disc('Planeje a aula de musicalização.', ['Objetivo', 'Atividades', 'Métodos', 'Avaliação']),
  ],
  resumo: ['Dalcroze: movimento.', 'Kodály: canto.', 'Orff: fala, movimento, percussão.', 'Suzuki: imitação.', 'Brasil: canto orfeônico, Lei 11.769.'],
  referencias: [
    { texto: 'Aristóteles, Política, livro VIII.', livro: 'aristoteles-politica' },
    { texto: 'Teca Alencar de Brito, Música na educação infantil (2003).' },
    { texto: 'Vasco Mariz, Heitor Villa-Lobos, compositor brasileiro (1949).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de aula', 'Ler a fonte indicada'],
  revisao: [['Dalcroze', 'Corpo.'], ['Kodály', 'Canto.'], ['Orfeônico', 'Villa-Lobos.']],
  avancado: {
    texto: `<h3>Canto coral e afinação</h3>
<p>Num coro sem acompanhamento, os cantores tendem a ajustar os intervalos em direção à afinação justa, diferente do temperamento igual do piano ${tag('fato')}. Por isso regentes recomendam ensaiar também sem piano, para educar o ouvido harmônico ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Teca Alencar de Brito, Música na educação infantil (2003).' }],
    exercicios: [
      mc('Coros a cappella tendem à afinação:', ['Justa', 'Temperada sempre', 'Pitagórica sempre', 'Nenhuma'], 0, 'Ajuste.'),
      mc('Ensaiar sem piano ajuda a educar o:', ['Ouvido harmônico', 'Ritmo apenas', 'Volume', 'Figurino'], 0, 'Prática.'),
      mc('A afinação do piano é:', ['Temperada igual', 'Justa', 'Mesotônica sempre', 'Livre'], 0, 'Padrão.'),
      disc('Proponha três exercícios de afinação para um coro iniciante.', ['Exercícios', 'Objetivos', 'Progressão', 'Avaliação'])],
  },
}),

aula({
  id: 'mu5-3', titulo: 'Música, cultura e mercado', duracao: '150 min',
  aprendera: ['Conhecer a transformação da música pela gravação e pelo streaming', 'Conhecer o direito autoral musical no Brasil', 'Situar gêneros da música popular brasileira', 'Avaliar criticamente a indústria cultural'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Hoje ouvimos música o tempo todo, quase sempre gravada. O que mudou, e como julgar a música que o mercado oferece?</p>
<h3>Gravação e difusão</h3>
<p>O fonógrafo de Edison (1877) iniciou a gravação sonora ${tag('fato')}. Rádio, disco, televisão e, no século XXI, o streaming transformaram a escuta: a música tornou-se onipresente e portátil ${tag('fato')}.</p>
<h3>Direito autoral</h3>
<p>No Brasil, a Lei nº 9.610/1998 regula os direitos autorais, e o ECAD arrecada e distribui direitos de execução pública musical ${tag('fato')}.</p>
<h3>Música popular brasileira</h3>
<p>O choro (Pixinguinha), o samba ("Pelo telefone", registrado em 1916 e gravado em 1917), a bossa nova (fim dos anos 1950), a MPB, o baião (Luiz Gonzaga) e a música sertaneja marcam a diversidade nacional ${tag('fato')}.</p>
<h3>Crítica</h3>
<p>Theodor Adorno e Max Horkheimer, na Dialética do esclarecimento (1947), criticaram a "indústria cultural" como padronização que adapta os ouvintes ao mercado ${tag('fato')}. Críticos acusam Adorno de elitismo ${tag('debate')}. Uma posição equilibrada reconhece a qualidade de muita música popular e, ao mesmo tempo, os efeitos da lógica de mercado sobre o gosto ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Fonógrafo', 'Primeiro aparelho de gravação e reprodução do som.'],
    ['Streaming', 'Transmissão de música pela internet sob demanda.'],
    ['ECAD', 'Escritório Central de Arrecadação e Distribuição de direitos musicais.'],
    ['Indústria cultural', 'Conceito de Adorno e Horkheimer para a produção cultural em série.'],
    ['MPB', 'Música popular brasileira, especialmente a partir dos anos 1960.'],
  ],
  exemplos: `<p><strong>Um algoritmo de recomendação:</strong> uma plataforma sugere músicas semelhantes às que você já ouve. É cômodo, mas tende a fechar o gosto num círculo. Buscar de propósito obras diferentes (uma missa de Palestrina, um choro de Pixinguinha, uma sinfonia) é um ato de liberdade de escuta.</p>`,
  contexto: `<p><strong>No mundo:</strong> o streaming tornou-se a principal fonte de receita da indústria fonográfica ${tag('fato')}. <strong>No Brasil:</strong> o samba de roda do Recôncavo Baiano foi proclamado patrimônio imaterial pela UNESCO em 2005 ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que educar o gosto é liberdade', tag: 'argumento',
    premissas: ['O gosto é formado pelo que ouvimos com frequência.', 'O mercado tende a oferecer mais do mesmo, segundo o que vende.', 'Quem conhece repertórios variados escolhe com mais liberdade.'],
    conclusao: 'Logo, educar o gosto é ampliar a liberdade, não restringi-la.',
    nota: 'O argumento não condena a música comercial, mas a escuta passiva.',
  },
  objecoes: [
    { objecao: 'Toda música comercial é ruim por definição.', tag: 'debate',
      resposta: 'Muitas obras excelentes foram comerciais: as óperas de Verdi lotavam teatros, e grandes sambas e canções foram sucessos. O mercado não é critério de valor, nem positivo nem negativo. É preciso julgar cada obra.' },
  ],
  aplicacao: `<p>Analise a sua própria escuta de uma semana (ou de uma lista de reprodução): gêneros, origem, modo de acesso; depois, monte uma lista de dez obras de gêneros e épocas variados para ampliar o repertório, justificando cada escolha.</p>`,
  fonte: {
    obra: 'Theodor Adorno e Max Horkheimer, Dialética do esclarecimento (1947), capítulo sobre a indústria cultural', link: null,
    orientacao: `<p>Identifique as teses principais e pergunte quais se aplicam à música atual e quais são exageradas.</p>`,
  },
  perguntas: [
    { p: 'O que regula a Lei 9.610/1998?', r: 'Os direitos autorais no Brasil.' },
    { p: 'O que criticam Adorno e Horkheimer?', r: 'A indústria cultural como padronização que adapta os ouvintes ao mercado.' },
    { p: 'Qual o samba registrado em 1916?', r: '"Pelo telefone".' },
  ],
  exercicios: [
    mc('O fonógrafo é de:', ['1877', '1916', '1947', '1998'], 0, 'Edison.'),
    mc('O ECAD cuida de direitos de:', ['Execução pública musical', 'Imagem', 'Patentes', 'Marcas'], 0, 'Brasil.'),
    mc('Dialética do esclarecimento é de:', ['1947', '1922', '1968', '1877'], 0, 'Adorno e Horkheimer.'),
    mc('O samba de roda do Recôncavo foi proclamado patrimônio em:', ['2005', '1916', '1988', '2014'], 0, 'UNESCO.'),
    mc('O "rei do baião" é:', ['Luiz Gonzaga', 'Pixinguinha', 'Tom Jobim', 'Carlos Gomes'], 0, 'Música nordestina.'),
    disc('Analise sua escuta e monte a lista de dez obras.', ['Análise', 'Variedade', 'Justificativas', 'Reflexão']),
  ],
  resumo: ['Fonógrafo (1877) ao streaming.', 'Lei 9.610/1998 e ECAD.', 'Choro, samba, bossa, baião, MPB.', 'Adorno: indústria cultural.', 'Educar o gosto.'],
  referencias: [
    { texto: 'Theodor Adorno e Max Horkheimer, Dialética do esclarecimento (1947).' },
    { texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' },
    { texto: 'Roger Scruton, The Aesthetics of Music (1997).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise e a lista', 'Ler a fonte indicada'],
  revisao: [['1877', 'Fonógrafo.'], ['ECAD', 'Direitos.'], ['Adorno', 'Indústria cultural.']],
  avancado: {
    texto: `<h3>"Pelo telefone" e a autoria</h3>
<p>"Pelo telefone", registrado por Donga na Biblioteca Nacional em 1916, é tradicionalmente apontado como o primeiro samba gravado ${tag('fato')}. Sua autoria foi contestada por outros participantes das rodas na casa de Tia Ciata, no Rio de Janeiro ${tag('fato')}. O caso mostra a tensão entre criação coletiva das rodas e a lógica do registro individual ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' }],
    exercicios: [
      mc('"Pelo telefone" foi registrado por:', ['Donga', 'Pixinguinha', 'Noel Rosa', 'Cartola'], 0, '1916.'),
      mc('As rodas aconteciam na casa de:', ['Tia Ciata', 'Chiquinha Gonzaga', 'Carmen Miranda', 'Dona Ivone Lara'], 0, 'Rio.'),
      mc('O caso mostra a tensão entre criação coletiva e:', ['Registro individual', 'Gravação digital', 'Ópera', 'Liturgia'], 0, 'Autoria.'),
      disc('Discuta, com o caso de "Pelo telefone", como a lógica do mercado muda a noção de autoria na música popular.', ['Caso', 'Autoria', 'Mercado', 'Juízo'])],
  },
}),

aula({
  id: 'mu5-4', titulo: 'Pesquisa: uma obra, um compositor ou uma tradição musical', duracao: '180 min',
  aprendera: ['Escolher um objeto de pesquisa musical viável', 'Combinar escuta, partitura e fontes', 'Documentar a pesquisa', 'Redigir um relatório musical'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como investigar a fundo uma obra, um compositor ou uma tradição, de preferência brasileira ou regional?</p>
<h3>Escolha</h3>
<p>Exemplos: uma obra de José Maurício ou de Lobo de Mesquita; as Bachianas de Villa-Lobos; a banda de música da sua cidade; o repertório de uma festa religiosa popular; um compositor regional pouco estudado ${tag('interpretacao')}.</p>
<h3>Fontes</h3>
<p>Partituras (bibliotecas, acervos, edições críticas), gravações, livros e artigos (SciELO, Portal de Periódicos da CAPES), jornais antigos (Hemeroteca Digital) e, para tradições vivas, entrevistas com músicos ${tag('fato')}. Registre as referências completas ${tag('fato')}.</p>
<h3>Etapas</h3>
<p>1. Pergunta delimitada. 2. Escuta repetida e anotada. 3. Análise (forma, harmonia, texto). 4. Contexto histórico e social. 5. Relatório com conclusão proporcional ${tag('interpretacao')}.</p>
<h3>Honestidade</h3>
<p>Distinga o que está documentado, o que é tradição oral e o que é sua interpretação ${tag('argumento')}. Em entrevistas, peça consentimento e cite com fidelidade ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Edição crítica', 'Edição de partitura baseada no estudo das fontes.'],
    ['Acervo', 'Conjunto de documentos guardados por uma instituição.'],
    ['Tradição oral', 'Transmissão sem registro escrito.'],
    ['Entrevista', 'Conversa planejada para coletar informações.'],
    ['Consentimento', 'Autorização do entrevistado para uso das informações.'],
  ],
  exemplos: `<p><strong>A banda da cidade:</strong> um estudante pesquisa a banda de música centenária de sua cidade. Consulta atas e programas no acervo da banda, jornais na Hemeroteca, entrevista três músicos antigos (com consentimento) e analisa um dobrado do repertório. O relatório preserva uma memória que ninguém havia escrito.</p>`,
  contexto: `<p><strong>No mundo:</strong> a etnomusicologia estuda a música em seu contexto cultural ${tag('fato')}. <strong>No Brasil:</strong> o Museu da Música de Mariana guarda acervo de partituras do período colonial mineiro ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que pesquisar música regional', tag: 'argumento',
    premissas: ['Muito da música brasileira regional nunca foi estudado nem registrado.', 'Músicos e documentos se perdem com o tempo.', 'Uma pesquisa modesta pode preservar essa memória.'],
    conclusao: 'Logo, pesquisar a música regional é contribuição real à cultura.',
    nota: 'A pesquisa deve ser rigorosa mesmo sendo modesta.',
  },
  objecoes: [
    { objecao: 'Pesquisa musical exige formação acadêmica avançada.', tag: 'debate',
      resposta: 'Pesquisas complexas exigem, mas uma investigação bem delimitada, com fontes registradas e análise cuidadosa, é possível a quem estudou este percurso. O importante é não afirmar além do que as fontes permitem.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: objeto, pergunta, fontes (partituras, gravações, bibliografia, entrevistas), cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Hemeroteca Digital Brasileira (Biblioteca Nacional); SciELO; Portal de Periódicos da CAPES', link: { url: 'https://www.scielo.br', rotulo: 'SciELO Brasil' },
    orientacao: `<p>Procure artigos e notícias sobre o objeto escolhido e registre as referências completas.</p>`,
  },
  perguntas: [
    { p: 'Que fontes usar numa pesquisa musical?', r: 'Partituras, gravações, bibliografia, jornais e entrevistas.' },
    { p: 'O que distinguir no relatório?', r: 'O documentado, a tradição oral e a interpretação própria.' },
    { p: 'O que exigir em entrevistas?', r: 'Consentimento e citação fiel.' },
  ],
  exercicios: [
    mc('A etnomusicologia estuda a música:', ['Em seu contexto cultural', 'Só na partitura', 'Só no estúdio', 'Sem pessoas'], 0, 'Disciplina.'),
    mc('Jornais antigos podem ser consultados na:', ['Hemeroteca Digital', 'Receita Federal', 'ANATEL', 'IBGE apenas'], 0, 'Fontes.'),
    mc('Em entrevistas é preciso:', ['Consentimento', 'Pagamento obrigatório', 'Anonimato sempre', 'Nada'], 0, 'Ética.'),
    mc('Uma edição crítica baseia-se no:', ['Estudo das fontes', 'Gosto do editor', 'Mercado', 'Rádio'], 0, 'Definição.'),
    mc('A conclusão deve ser:', ['Proporcional às fontes', 'A mais ousada possível', 'Sem fontes', 'Opinião pura'], 0, 'Honestidade.'),
    disc('Apresente o pré-projeto completo.', ['Objeto e pergunta', 'Fontes', 'Cronograma', 'Rubrica']),
  ],
  resumo: ['Objeto viável e regional.', 'Escuta, partitura e fontes.', 'Análise e contexto.', 'Entrevistas com consentimento.', 'Conclusão proporcional.'],
  referencias: [
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
    { texto: 'Vasco Mariz, História da música no Brasil (1981).' },
    { texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Fontes', 'Variadas.'], ['Entrevista', 'Consentimento.'], ['Conclusão', 'Proporcional.']],
  avancado: {
    texto: `<h3>Mário de Andrade e a Missão de Pesquisas Folclóricas</h3>
<p>Em 1938, a Missão de Pesquisas Folclóricas, idealizada por Mário de Andrade como diretor do Departamento de Cultura de São Paulo, percorreu o Nordeste e o Norte gravando músicas e danças populares ${tag('fato')}. O acervo é guardado em São Paulo e é fonte importante para a pesquisa musical brasileira ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Mário de Andrade, Ensaio sobre a música brasileira (1928).' }],
    exercicios: [
      mc('A Missão de Pesquisas Folclóricas foi em:', ['1938', '1922', '1958', '1889'], 0, 'Viagem.'),
      mc('Foi idealizada por:', ['Mário de Andrade', 'Villa-Lobos', 'Carlos Gomes', 'Koellreutter'], 0, 'Departamento de Cultura.'),
      mc('A Missão percorreu sobretudo:', ['Nordeste e Norte', 'Europa', 'Sul apenas', 'Centro-Oeste apenas'], 0, 'Roteiro.'),
      disc('Explique a importância de registros como os da Missão para a pesquisa musical hoje.', ['Registro', 'Memória', 'Uso na pesquisa', 'Cuidados'])],
  },
}),

avaliacao('mu5-5', 'Avaliação integradora de Música', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Música. Reúne questões de todos os módulos (MU1 a MU5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça uma escala, uma harmonização e uma análise de forma.</li><li>Releia a rubrica da pesquisa (mu5-4).</li></ul>`,
[
  disc('Analise uma peça não estudada no percurso: forma, harmonia, textura, relação com o texto (se houver), período e contexto, com minutagem.', ['Forma', 'Harmonia e textura', 'Período', 'Interpretação']),
  disc('Responda, com base em Platão ou Aristóteles, em Agostinho e na Sacrosanctum Concilium, à pergunta: por que a música importa para a formação da pessoa e para o culto?', ['Clássicos', 'Agostinho', 'Igreja', 'Argumentação']),
]),
];
