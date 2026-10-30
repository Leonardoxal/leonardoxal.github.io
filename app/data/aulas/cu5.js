// Cultura V — aplicações, avaliação integradora e pesquisa (etapas 9 a 11 do percurso de Cultura).
// Patrimônio cultural, conservação e perdas; educação e transmissão da cultura; políticas culturais;
// a investigação de campo de quatro semanas. A avaliação final integra CU1 a CU5.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cu5-1', titulo: 'Patrimônio cultural: tombamento, conservação, restauro e perdas', duracao: '150 min',
  aprendera: ['Explicar o processo de tombamento', 'Conhecer os princípios da Carta de Veneza', 'Analisar perdas de patrimônio e suas causas', 'Avaliar o estado de proteção de um bem'],
  prereq: ['Cultura IV (módulo CU4)'],
  explicacao: `
<h3>O problema</h3>
<p>Igrejas barrocas, centros históricos, acervos de museus: por que se perdem, e como protegê-los sem transformá-los em cenário morto?</p>
<h3>Tombamento</h3>
<p>Pelo Decreto-Lei nº 25/1937, o tombamento inscreve um bem num dos Livros do Tombo e impõe restrições: o bem não pode ser destruído, demolido ou mutilado, e intervenções dependem de autorização do órgão competente ${tag('fato')}. Estados e municípios também podem tombar bens ${tag('fato')}.</p>
<h3>Conservação e restauro</h3>
<p>A Carta de Veneza (1964), documento internacional sobre conservação e restauro de monumentos, recomenda manutenção permanente, respeito às várias épocas do edifício e que acréscimos sejam reconhecíveis ${tag('fato')}.</p>
<h3>Perdas</h3>
<p>Em 2 de setembro de 2018, um incêndio destruiu grande parte do acervo do Museu Nacional, no Rio de Janeiro ${tag('fato')}. Em 15 de abril de 2019, um incêndio atingiu a catedral de Notre-Dame de Paris, reaberta em dezembro de 2024 após restauração ${tag('fato')}. Falta de manutenção, de recursos e de planos contra incêndio estão entre as causas apontadas para perdas desse tipo ${tag('interpretacao')}.</p>
<h3>A doutrina</h3>
<p>A Igreja pede que os bens culturais eclesiásticos — templos, obras de arte, arquivos, bibliotecas — sejam conservados e postos a serviço da evangelização e da cultura ${tag('doutrina')}. O Código de Direito Canônico proíbe alienar bens preciosos sem licença (cân. 1292) e manda cuidar das igrejas (cân. 1220) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Livro do Tombo', 'Registro oficial dos bens tombados.'],
    ['Conservação', 'Ações para manter um bem em bom estado.'],
    ['Restauro', 'Intervenção para recuperar um bem danificado.'],
    ['Carta de Veneza', 'Documento internacional de 1964 sobre conservação e restauro.'],
    ['Bem cultural eclesiástico', 'Bem cultural pertencente à Igreja: templos, arte, arquivos.'],
  ],
  exemplos: `<p><strong>Uma decisão de restauro:</strong> uma igreja colonial teve um altar substituído no século XIX por outro de estilo diferente. Retirar o altar do século XIX para "voltar à forma original"? A Carta de Veneza recomenda respeitar as contribuições das várias épocas, salvo justificativa forte. A decisão exige estudo histórico e critério, não gosto pessoal.</p>`,
  contexto: `<p><strong>No mundo:</strong> a reconstrução de Notre-Dame mobilizou artesãos de vários ofícios tradicionais ${tag('fato')}. <strong>No Brasil:</strong> o Museu Nacional, instituição criada por D. João VI em 1818, vem sendo reconstruído desde o incêndio ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a manutenção é a melhor proteção do patrimônio', tag: 'argumento',
    premissas: ['Danos pequenos — infiltrações, fiação velha, cupins — crescem se não forem tratados.', 'Restauros após grandes danos são caros e nunca recuperam tudo.', 'A manutenção contínua impede que danos pequenos se tornem grandes.'],
    conclusao: 'Logo, a manutenção contínua protege melhor e custa menos do que restauros após desastres.',
    nota: 'É o primeiro princípio da Carta de Veneza: a conservação exige manutenção permanente.',
  },
  objecoes: [
    { objecao: 'Patrimônio é luxo; o dinheiro deveria ir para saúde e educação.', tag: 'debate',
      resposta: 'Prioridades orçamentárias são escolha legítima, mas o patrimônio não é luxo: guarda memória, identidade e conhecimento, gera turismo e trabalho e, uma vez perdido, não se recupera. A manutenção preventiva custa pouco diante de perdas como a do Museu Nacional. O debate razoável é sobre como financiar bem, não se vale a pena proteger.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: analise um bem tombado ou registrado pelo IPHAN (ou por órgão estadual ou municipal): história, valor, estado de conservação, ameaças e ações de proteção, com fontes oficiais.</p>`,
  fonte: {
    obra: 'Decreto-Lei nº 25/1937; Carta de Veneza (1964); Código de Direito Canônico, cânn. 1220 e 1292', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>No Decreto-Lei 25, os efeitos do tombamento. Na Carta de Veneza, os artigos sobre manutenção e restauro. No Código, os deveres sobre os bens da Igreja.</p>`,
  },
  perguntas: [
    { p: 'O que impõe o tombamento?', r: 'Que o bem não seja destruído, demolido ou mutilado e que intervenções dependam de autorização.' },
    { p: 'O que recomenda a Carta de Veneza sobre acréscimos?', r: 'Que sejam reconhecíveis.' },
    { p: 'Quando ocorreu o incêndio do Museu Nacional?', r: 'Em 2 de setembro de 2018.' },
  ],
  exercicios: [
    mc('O tombamento foi instituído pelo:', ['Decreto-Lei 25/1937', 'Decreto 3.551/2000', 'CF art. 225', 'Lei Rouanet'], 0, 'Patrimônio material.'),
    mc('A Carta de Veneza é de:', ['1931', '1964', '1972', '2003'], 1, 'Conservação e restauro.'),
    mc('O Museu Nacional foi criado em:', ['1808', '1818', '1889', '1937'], 1, 'D. João VI.'),
    mc('O incêndio de Notre-Dame foi em:', ['2015', '2018', '2019', '2024'], 2, '15 de abril.'),
    mc('A melhor proteção do patrimônio é:', ['O restauro após desastres', 'A manutenção contínua', 'O abandono', 'A reconstrução total'], 1, 'Carta de Veneza.'),
    disc('Analise um bem protegido: história, valor, conservação, ameaças e proteção, com fontes oficiais.', ['História e valor', 'Estado de conservação', 'Ameaças', 'Proteção e fontes']),
  ],
  resumo: ['Tombamento (DL 25/1937).', 'Carta de Veneza (1964).', 'Museu Nacional (2018); Notre-Dame (2019).', 'Manutenção como proteção.', 'Bens eclesiásticos; cânn. 1220 e 1292.'],
  referencias: [
    { texto: 'Decreto-Lei nº 25, de 1937.' },
    { texto: 'Carta de Veneza (1964).' },
    { texto: 'Código de Direito Canônico (1983).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do bem', 'Consultar as fontes oficiais'],
  revisao: [['DL 25', 'Tombamento.'], ['Veneza', 'Manutenção.'], ['2018', 'Museu Nacional.']],
  avancado: {
    texto: `<h3>Patrimônio e cidade viva</h3>
<p>Centros históricos tombados enfrentam o dilema entre preservação e uso: sem moradores e atividades, viram cenário; com uso descontrolado, se descaracterizam ${tag('interpretacao')}. Políticas de requalificação procuram manter moradia, comércio e cultura nos centros históricos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'IPHAN, publicações sobre centros históricos.' }],
    exercicios: [
      mc('O dilema dos centros históricos é entre:', ['Clima e solo', 'Preservação e uso', 'Arte e ciência', 'Fé e razão'], 1, 'Cidade viva.'),
      mc('Centros históricos sem moradores tendem a virar:', ['Cidades novas', 'Cenário', 'Florestas', 'Indústrias'], 1, 'Esvaziamento.'),
      mc('Requalificação busca manter:', ['Só turismo', 'Moradia, comércio e cultura', 'Só museus', 'Só estacionamentos'], 1, 'Uso.'),
      disc('Proponha medidas para um centro histórico brasileiro conciliar preservação e vida urbana.', ['Diagnóstico', 'Medidas', 'Riscos', 'Fontes'])],
  },
}),

aula({
  id: 'cu5-2', titulo: 'Educação e transmissão da cultura: família, escola, Igreja e os clássicos', duracao: '150 min',
  aprendera: ['Explicar a educação como transmissão da cultura', 'Expor a tese de Hannah Arendt sobre a crise na educação', 'Conhecer o ensino da Igreja sobre educação', 'Propor um plano de leitura de clássicos'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Uma cultura que não se transmite morre em uma geração. Quem transmite, o quê, e como, num tempo de excesso de informação?</p>
<h3>Educação como transmissão</h3>
<p>Educar é introduzir os novos no mundo comum: língua, saberes, obras, costumes e valores herdados ${tag('argumento')}. Hannah Arendt, em "A crise na educação" (1958), sustentou que a educação é essencialmente conservadora — no sentido de conservar o mundo para os novos e os novos para o mundo — e que a perda de autoridade e de tradição enfraquece a escola ${tag('fato')}.</p>
<h3>Família, escola e Igreja</h3>
<p>O Concílio Vaticano II, na declaração <em>Gravissimum educationis</em> (1965), ensina que os pais são os primeiros e principais educadores dos filhos e que a escola e a Igreja colaboram com eles ${tag('doutrina')}. O Catecismo reafirma o direito e o dever dos pais de educar (CIC 2221–2229) ${tag('doutrina')}.</p>
<h3>Os clássicos</h3>
<p>Italo Calvino, em "Por que ler os clássicos" (1981), definiu um clássico como um livro que nunca terminou de dizer o que tinha para dizer ${tag('fato')}. A leitura orientada dos clássicos é um dos modos mais diretos de transmissão da cultura ${tag('argumento')}.</p>
<h3>No Brasil</h3>
<p>A Constituição afirma que a educação é direito de todos e dever do Estado e da família (art. 205) ${tag('fato')}. A Base Nacional Comum Curricular (BNCC), homologada em 2017 e 2018, define as aprendizagens essenciais da educação básica ${tag('fato')}.</p>`,
  vocabulario: [
    ['Transmissão cultural', 'Passagem de saberes, obras e valores entre gerações.'],
    ['Autoridade (Arendt)', 'Reconhecimento que permite ao educador apresentar o mundo ao aluno.'],
    ['Clássico', 'Obra que continua a ensinar em épocas diferentes.'],
    ['Gravissimum educationis', 'Declaração do Vaticano II sobre a educação cristã (1965).'],
    ['BNCC', 'Base Nacional Comum Curricular.'],
  ],
  exemplos: `<p><strong>Um plano de leitura de um ano:</strong> doze obras, uma por mês, alternando gêneros e épocas — um diálogo de Platão, um livro da Bíblia, as Confissões de Agostinho, uma peça de Shakespeare, Os Lusíadas, Machado de Assis, um romance russo, poesia brasileira —, com uma conversa mensal em família ou grupo. A regularidade importa mais que a quantidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> programas de "grandes livros" em universidades estadunidenses, como o de Robert Hutchins e Mortimer Adler, defenderam a leitura dos clássicos como base da educação liberal ${tag('fato')}. <strong>No Brasil:</strong> o Plano Nacional de Educação estabelece metas para a educação no país ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a família é a primeira educadora', tag: 'argumento',
    premissas: ['A criança aprende a língua, os gestos, os hábitos e os primeiros valores em casa, antes da escola.', 'Esse aprendizado inicial é a base de todos os posteriores.', 'Os pais têm com os filhos um vínculo e uma responsabilidade que nenhuma instituição substitui.'],
    conclusao: 'Logo, a família é a primeira educadora, e a escola e a Igreja a apoiam e complementam.',
    nota: 'É aplicação do princípio de subsidiariedade à educação.',
  },
  objecoes: [
    { objecao: 'Ler clássicos é inútil; os alunos precisam de habilidades práticas.', tag: 'debate',
      resposta: 'Habilidades práticas são necessárias, mas os clássicos formam a capacidade de ler com atenção, pensar com precisão, escrever com clareza e julgar a vida humana, que servem a qualquer prática. Além disso, a cultura não é só meio para o trabalho: é parte da vida plenamente humana (GS 53).' },
  ],
  aplicacao: `<p>Elabore um plano de leitura de clássicos para um ano (para você, sua família ou um grupo), com doze obras justificadas e um modo de conversar sobre elas.</p>`,
  fonte: {
    obra: 'Hannah Arendt, "A crise na educação" (1958), em Entre o passado e o futuro; Concílio Vaticano II, Gravissimum educationis (1965), nn. 1–3; Italo Calvino, "Por que ler os clássicos" (1981)', link: { url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_gravissimum-educationis_po.html', rotulo: 'vatican.va' },
    orientacao: `<p>Em Arendt, o sentido de "conservadora". Na Gravissimum educationis, o papel dos pais. Em Calvino, as definições de clássico.</p>`,
  },
  perguntas: [
    { p: 'Em que sentido Arendt diz que a educação é conservadora?', r: 'No sentido de conservar o mundo para os novos e os novos para o mundo.' },
    { p: 'Quem são os primeiros educadores segundo a Gravissimum educationis?', r: 'Os pais.' },
    { p: 'Como Calvino define um clássico?', r: 'Como um livro que nunca terminou de dizer o que tinha para dizer.' },
  ],
  exercicios: [
    mc('"A crise na educação" é de:', ['Arendt', 'Calvino', 'Eliot', 'Freire'], 0, '1958.'),
    mc('Gravissimum educationis é de:', ['1891', '1931', '1965', '1991'], 2, 'Vaticano II.'),
    mc('"Por que ler os clássicos" é de:', ['Borges', 'Calvino', 'Eco', 'Pieper'], 1, '1981.'),
    mc('O direito à educação está na CF, art.:', ['5º', '205', '216', '225'], 1, 'Estado e família.'),
    mc('A BNCC foi homologada em:', ['1996', '2014', '2017 e 2018', '2023'], 2, 'Aprendizagens essenciais.'),
    disc('Elabore um plano de leitura de clássicos para um ano com doze obras justificadas.', ['Doze obras', 'Justificativas', 'Variedade', 'Modo de conversa']),
  ],
  resumo: ['Educação como transmissão.', 'Arendt (1958): conservar o mundo.', 'Gravissimum educationis: pais primeiros educadores.', 'Calvino: o que é clássico.', 'CF art. 205; BNCC.'],
  referencias: [
    { texto: 'Hannah Arendt, Entre o passado e o futuro (1961).' },
    { texto: 'Concílio Vaticano II, Gravissimum educationis (1965).' },
    { texto: 'Italo Calvino, Por que ler os clássicos (1991).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o plano de leitura', 'Ler os textos indicados'],
  revisao: [['Arendt', 'Conservar o mundo.'], ['GE', 'Pais.'], ['Calvino', 'Nunca termina de dizer.']],
  avancado: {
    texto: `<h3>Paulo Freire e a educação como diálogo</h3>
<p>Paulo Freire, na <em>Pedagogia do oprimido</em> (1968), criticou a "educação bancária", que deposita conteúdos no aluno, e propôs uma educação dialógica e conscientizadora ${tag('fato')}. Sua obra é muito influente no Brasil e no exterior e objeto de debate, inclusive sobre seus pressupostos políticos ${tag('debate')}. A crítica ao mero acúmulo de informação pode ser comparada à defesa da transmissão em Arendt ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Paulo Freire, Pedagogia do oprimido (1968).' }],
    exercicios: [
      mc('Pedagogia do oprimido é de:', ['Paulo Freire', 'Anísio Teixeira', 'Darcy Ribeiro', 'Arendt'], 0, '1968.'),
      mc('Freire critica a educação:', ['Dialógica', 'Bancária', 'Clássica', 'Religiosa'], 1, 'Depósito de conteúdos.'),
      mc('A obra de Freire é:', ['Consenso', 'Influente e debatida', 'Desconhecida', 'Proibida'], 1, 'Debate.'),
      disc('Compare Arendt e Freire sobre o papel da tradição e da autoridade na educação.', ['Arendt', 'Freire', 'Comparação', 'Avaliação'])],
  },
}),

aula({
  id: 'cu5-3', titulo: 'Políticas culturais: Estado, mercado, sociedade e subsidiariedade', duracao: '150 min',
  aprendera: ['Conhecer os instrumentos de política cultural no Brasil', 'Explicar o mecanismo de incentivo fiscal', 'Avaliar políticas culturais com o princípio de subsidiariedade', 'Analisar um projeto cultural financiado'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quem deve financiar e promover a cultura: o Estado, o mercado, as comunidades? E com que critérios?</p>
<h3>Instrumentos no Brasil</h3>
<p>A Constituição afirma que o Estado garantirá a todos o pleno exercício dos direitos culturais e o acesso às fontes da cultura nacional (art. 215) ${tag('fato')}. O Ministério da Cultura foi criado em 1985 ${tag('fato')}. A Lei nº 8.313/1991, conhecida como Lei Rouanet, criou o Programa Nacional de Apoio à Cultura, com mecanismo de incentivo fiscal: empresas e pessoas podem deduzir do imposto de renda valores destinados a projetos aprovados ${tag('fato')}. A Emenda Constitucional nº 71/2012 instituiu o Sistema Nacional de Cultura ${tag('fato')}.</p>
<h3>Debates</h3>
<p>Críticos apontam concentração dos recursos incentivados em grandes centros e em projetos com apelo de marketing; defensores destacam o volume de projetos viabilizados ${tag('debate')}. Há também debate sobre quanto o Estado deve financiar diretamente e quanto deve deixar à sociedade ${tag('debate')}.</p>
<h3>Subsidiariedade</h3>
<p>Pela subsidiariedade, o Estado não deve absorver o que famílias, comunidades, igrejas e associações podem fazer, mas apoiá-las quando necessário (CIC 1883) ${tag('doutrina')}. Aplicado à cultura, o princípio favorece apoiar quem produz e transmite cultura, em vez de o Estado substituí-los ou dirigi-los ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Política cultural', 'Conjunto de ações públicas voltadas à cultura.'],
    ['Incentivo fiscal', 'Dedução de impostos para quem financia projetos aprovados.'],
    ['Lei Rouanet', 'Lei nº 8.313/1991, que criou o Pronac.'],
    ['Sistema Nacional de Cultura', 'Articulação entre União, estados e municípios na cultura (EC 71/2012).'],
    ['Direitos culturais', 'Direitos de participar da vida cultural e acessar suas fontes.'],
  ],
  exemplos: `<p><strong>Avaliando um projeto:</strong> um festival de música obteve autorização para captar recursos por incentivo fiscal. Perguntas: o projeto é acessível ao público (preço, local)? Valoriza artistas locais? Seria viável sem o incentivo? Os recursos foram bem prestados contas? As respostas permitem julgar o projeto, e não a lei em abstrato.</p>`,
  contexto: `<p><strong>No mundo:</strong> países combinam de modos diferentes financiamento público direto, incentivos fiscais e mecenato privado ${tag('fato')}. <strong>No Brasil:</strong> as Leis Paulo Gustavo (2022) e Aldir Blanc repassaram recursos federais a estados e municípios para o setor cultural ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a subsidiariedade favorece a vitalidade cultural', tag: 'argumento',
    premissas: ['A cultura nasce de pessoas e comunidades concretas, com seus saberes e tradições.', 'Quando o Estado dirige a produção cultural, tende a uniformizá-la segundo critérios próprios.', 'Quando apoia quem já produz, preserva a diversidade e a liberdade de criação.'],
    conclusao: 'Logo, políticas que apoiam iniciativas da sociedade tendem a favorecer a vitalidade cultural.',
    nota: 'O apoio público continua necessário para bens que o mercado e as comunidades não sustentam sozinhos, como grandes acervos e o patrimônio.',
  },
  objecoes: [
    { objecao: 'O Estado não deve gastar nada com cultura.', tag: 'debate',
      resposta: 'A Constituição atribui ao Estado deveres na cultura, como a proteção do patrimônio. Há bens — museus, arquivos, bibliotecas, monumentos — que dificilmente se mantêm só pelo mercado. O debate razoável é sobre a forma e os critérios do apoio, não sobre sua existência.' },
  ],
  aplicacao: `<p>Escolha um projeto cultural financiado com recursos públicos ou incentivados (pesquise nos portais oficiais) e avalie-o com os critérios da aula: acesso, valorização local, necessidade do apoio, prestação de contas e subsidiariedade.</p>`,
  fonte: {
    obra: 'Constituição de 1988, arts. 215–216-A; Lei nº 8.313/1991 (Lei Rouanet); Catecismo da Igreja Católica, § 1883', link: { url: 'https://www.planalto.gov.br', rotulo: 'Portal da Legislação (Planalto)' },
    orientacao: `<p>Na Constituição, os direitos culturais e o Sistema Nacional de Cultura. Na Lei 8.313, os mecanismos do Pronac. No Catecismo, o princípio de subsidiariedade.</p>`,
  },
  perguntas: [
    { p: 'O que é o incentivo fiscal da Lei Rouanet?', r: 'A dedução do imposto de renda de valores destinados a projetos culturais aprovados.' },
    { p: 'Quando foi criado o Ministério da Cultura?', r: 'Em 1985.' },
    { p: 'Que emenda instituiu o Sistema Nacional de Cultura?', r: 'A EC nº 71/2012.' },
  ],
  exercicios: [
    mc('A Lei Rouanet é a Lei:', ['8.313/1991', '12.343/2010', '9.394/1996', '6.938/1981'], 0, 'Pronac.'),
    mc('Os direitos culturais estão na CF, art.:', ['5º', '170', '215', '225'], 2, 'Cultura.'),
    mc('O Ministério da Cultura foi criado em:', ['1937', '1985', '1991', '2003'], 1, 'Separação do MEC.'),
    mc('Pela subsidiariedade, o Estado na cultura deve:', ['Dirigir toda a produção', 'Apoiar quem produz e transmite', 'Não fazer nada', 'Proibir iniciativas'], 1, 'CIC 1883.'),
    mc('Uma crítica frequente ao incentivo fiscal é a:', ['Falta de projetos', 'Concentração em grandes centros', 'Ausência de lei', 'Proibição de música'], 1, 'Debate.'),
    disc('Avalie um projeto cultural financiado com os critérios da aula.', ['Acesso', 'Valorização local', 'Necessidade do apoio', 'Prestação de contas e subsidiariedade']),
  ],
  resumo: ['CF arts. 215–216-A.', 'Ministério da Cultura (1985).', 'Lei Rouanet (1991): incentivo fiscal.', 'Sistema Nacional de Cultura (2012).', 'Subsidiariedade (CIC 1883).'],
  referencias: [
    { texto: 'Lei nº 8.313, de 1991.' },
    { texto: 'Constituição da República Federativa do Brasil (1988), arts. 215–216-A.' },
    { texto: 'Catecismo da Igreja Católica (1992), § 1883.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a avaliação do projeto', 'Consultar os portais oficiais'],
  revisao: [['Rouanet', 'Incentivo fiscal.'], ['1985', 'MinC.'], ['CIC 1883', 'Subsidiariedade.']],
  avancado: {
    texto: `<h3>Mecenato da Igreja e cultura</h3>
<p>Historicamente, a Igreja foi grande promotora da cultura: encomendou arquitetura, pintura e música, manteve escolas e universidades ${tag('fato')}. Hoje, paróquias, irmandades e comunidades continuam a sustentar festas, coros, bandas e o patrimônio religioso, muitas vezes com recursos próprios ${tag('fato')}. É exemplo de cultura sustentada pela sociedade, em linha com a subsidiariedade ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'São João Paulo II, Carta aos artistas (1999).' }],
    exercicios: [
      mc('Historicamente, a Igreja promoveu a cultura encomendando:', ['Só livros', 'Arquitetura, pintura e música', 'Nada', 'Só esculturas'], 1, 'Mecenato.'),
      mc('A Carta aos artistas é de:', ['1965', '1999', '2005', '2015'], 1, 'João Paulo II.'),
      mc('Paróquias que sustentam coros e festas exemplificam:', ['Estatização', 'Cultura sustentada pela sociedade', 'Mercado puro', 'Nada'], 1, 'Subsidiariedade.'),
      disc('Descreva uma iniciativa cultural sustentada por uma comunidade religiosa da sua região.', ['Iniciativa', 'Financiamento', 'Alcance', 'Avaliação'])],
  },
}),

aula({
  id: 'cu5-4', titulo: 'Investigação de campo de quatro semanas sobre uma manifestação cultural local', duracao: '180 min',
  aprendera: ['Escolher e delimitar uma manifestação cultural local', 'Planejar entrevistas, observação e registro', 'Analisar o material com os conceitos do percurso', 'Redigir o relatório com respeito aos informantes'],
  prereq: ['Todas as aulas anteriores de Cultura'],
  explicacao: `
<h3>O problema</h3>
<p>O percurso termina com uma investigação de campo de quatro semanas sobre uma manifestação cultural local. Esta aula é o roteiro.</p>
<h3>1. Objeto e pergunta</h3>
<p>Escolha algo próximo e acessível: uma festa, um ofício (renda, cerâmica, marcenaria), uma tradição culinária, um conjunto arquitetônico, uma devoção, um grupo musical. Formule uma pergunta: como se transmite? Como mudou nas últimas décadas? Que sentido tem para os participantes? ${tag('argumento')}</p>
<h3>2. Método</h3>
<p>Combine observação (com caderno de campo), duas a quatro entrevistas com roteiro e consentimento, registro fotográfico autorizado e fontes escritas (jornais, arquivos, livros, dossiês do IPHAN quando houver) ${tag('fato')}.</p>
<h3>3. Análise</h3>
<p>Use os conceitos do percurso: os dois sentidos de cultura, tradição, patrimônio, cultura popular e de massa, relação com a religião, inculturação ${tag('fato')}. Separe relato dos informantes e interpretação ${tag('fato')}.</p>
<h3>4. Relatório</h3>
<p>Pergunta; método; descrição; análise; limites; conclusão proporcional; referências ABNT; anexos (roteiro, termo de consentimento) ${tag('fato')}.</p>
<h3>Ética</h3>
<p>Peça consentimento para entrevistas, gravações e fotos; respeite o que os informantes não quiserem revelar; devolva o resultado à comunidade; não exponha pessoas a ridículo nem a risco ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Caderno de campo', 'Registro diário das observações do pesquisador.'],
    ['Informante', 'Pessoa que fornece informações ao pesquisador.'],
    ['Termo de consentimento', 'Documento em que o informante autoriza a entrevista e seu uso.'],
    ['Devolução', 'Retorno dos resultados da pesquisa à comunidade estudada.'],
    ['Delimitação', 'Recorte preciso do objeto da pesquisa.'],
  ],
  exemplos: `<p><strong>Uma pergunta bem delimitada:</strong> em vez de "a cultura da minha cidade", pergunte "como as rendeiras do bairro X aprenderam o ofício e se ele está sendo transmitido às mais jovens?". A pergunta indica quem entrevistar, o que observar e que resposta é possível em quatro semanas.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ética da pesquisa com seres humanos exige consentimento livre e esclarecido ${tag('fato')}. <strong>No Brasil:</strong> a Resolução nº 510/2016 do Conselho Nacional de Saúde trata da ética na pesquisa em ciências humanas e sociais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que devolver os resultados à comunidade', tag: 'argumento',
    premissas: ['Os informantes doaram tempo, memória e confiança.', 'Os resultados podem ajudar a comunidade a valorizar e transmitir sua prática.', 'A justiça pede reciprocidade com quem contribuiu.'],
    conclusao: 'Logo, o pesquisador deve devolver os resultados à comunidade de modo acessível.',
    nota: 'A devolução também permite que os informantes corrijam erros de interpretação.',
  },
  objecoes: [
    { objecao: 'Uma investigação de quatro semanas é superficial demais.', tag: 'debate',
      resposta: 'Quatro semanas não permitem uma etnografia completa, mas permitem um estudo delimitado, com registro fiel e análise conceitual. O relatório deve declarar esse limite. Muitos estudos importantes começaram como levantamentos curtos que abriram perguntas para pesquisas maiores.' },
  ],
  aplicacao: `<p>Escreva no Caderno o pré-projeto: objeto, pergunta, informantes previstos, roteiro de entrevista, fontes escritas, cronograma de quatro semanas e cuidados éticos.</p>`,
  fonte: {
    obra: 'Resolução CNS nº 510/2016; IPHAN, Inventário Nacional de Referências Culturais; ABNT, NBR 6023', link: { url: 'https://www.gov.br/iphan', rotulo: 'IPHAN' },
    orientacao: `<p>Na Resolução 510, os princípios de consentimento e respeito. No INRC, as fichas de identificação de bens culturais. Na NBR 6023, o formato das referências.</p>`,
  },
  perguntas: [
    { p: 'Quanto dura a investigação final?', r: 'Quatro semanas.' },
    { p: 'Que métodos combinar?', r: 'Observação, entrevistas, registro autorizado e fontes escritas.' },
    { p: 'Por que devolver os resultados?', r: 'Por reciprocidade, utilidade para a comunidade e correção de interpretações.' },
  ],
  exercicios: [
    mc('Uma boa pergunta de pesquisa é:', ['Ampla e vaga', 'Delimitada e respondível no prazo', 'Só opinião', 'Sem objeto'], 1, 'Delimitação.'),
    mc('Antes de fotografar informantes, é preciso:', ['Nada', 'Consentimento', 'Pagamento', 'Autorização policial'], 1, 'Ética.'),
    mc('A ética em pesquisa nas ciências humanas no Brasil é tratada pela Resolução CNS:', ['196/1996', '510/2016', '466/2012', '001/1986'], 1, 'Ciências humanas e sociais.'),
    mc('Separar relato e interpretação serve para:', ['Atrasar', 'Permitir verificação', 'Esconder dados', 'Nada'], 1, 'Método.'),
    mc('A devolução dos resultados deve ser:', ['Opcional e técnica', 'Acessível à comunidade', 'Proibida', 'Só para especialistas'], 1, 'Reciprocidade.'),
    disc('Apresente o pré-projeto: objeto, pergunta, informantes, roteiro, fontes, cronograma e ética.', ['Objeto e pergunta', 'Informantes e roteiro', 'Fontes e cronograma', 'Ética']),
  ],
  resumo: ['Objeto local e pergunta delimitada.', 'Observação, entrevistas, registro, fontes.', 'Análise com conceitos do percurso.', 'Relatório com limites.', 'Consentimento e devolução.'],
  referencias: [
    { texto: 'Resolução CNS nº 510, de 2016.' },
    { texto: 'Verena Alberti, Manual de história oral (2004).' },
    { texto: 'Umberto Eco, Como se faz uma tese (1977).', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Iniciar o trabalho de campo'],
  revisao: [['Delimitar', 'Pergunta respondível.'], ['Consentimento', 'Sempre.'], ['Devolução', 'À comunidade.']],
  avancado: {
    texto: `<h3>Inventário participativo</h3>
<p>O IPHAN publicou orientações para inventários participativos, em que a própria comunidade identifica e registra suas referências culturais com apoio de mediadores, como escolas ${tag('fato')}. A proposta aproxima o trabalho escolar da proteção do patrimônio ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'IPHAN, Educação patrimonial: inventários participativos (2016).' }],
    exercicios: [
      mc('No inventário participativo, quem identifica as referências é:', ['Só o IPHAN', 'A própria comunidade, com mediadores', 'Empresas', 'Estrangeiros'], 1, 'Participação.'),
      mc('Um mediador comum desses inventários é a:', ['Escola', 'Polícia', 'Bolsa de valores', 'Fábrica'], 0, 'Educação patrimonial.'),
      mc('O material de inventários participativos do IPHAN é de:', ['1937', '2000', '2016', '2023'], 2, 'Educação patrimonial.'),
      disc('Proponha como sua investigação poderia contribuir para um inventário participativo local.', ['Contribuição', 'Parceiros', 'Produtos', 'Cuidados'])],
  },
}),

avaliacao('cu5-5', 'Avaliação integradora de Cultura', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Cultura. Reúne questões de todos os módulos (CU1 a CU5) e pede duas discursivas de síntese. A conclusão do percurso exige também a investigação de campo de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Releia as fichas de Eliot e as comparações de intérpretes.</li><li>Releia a rubrica da investigação (cu5-4).</li></ul>`,
[
  disc('Interprete uma manifestação cultural brasileira à sua escolha com conceitos de pelo menos três módulos (sentidos de cultura, tradição, patrimônio, cultura de massa, intérpretes do Brasil, inculturação), distinguindo descrição e juízo.', ['Manifestação', 'Conceitos de três módulos', 'Descrição e juízo', 'Fontes']),
  disc('Responda, à luz de Pieper, Eliot, Dawson e da Gaudium et spes: qual a relação entre culto, cultura e dignidade da pessoa, e o que isso implica para a cultura brasileira hoje?', ['Culto e cultura', 'Dignidade da pessoa', 'Autores citados', 'Aplicação ao Brasil']),
]),
];
