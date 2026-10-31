// Relações Internacionais II — formação histórica e grandes autores (etapas 4 e 5 do percurso de Relações Internacionais).
// Da Grécia ao direito das gentes; de Vestfália à Guerra Fria e a diplomacia brasileira; Tucídides, Maquiavel, Grócio e Kant; Morgenthau, Aron e Rio Branco.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ri2-1', titulo: 'Da guerra do Peloponeso ao direito das gentes', duracao: '150 min',
  aprendera: ['Conhecer a análise de Tucídides sobre a guerra', 'Conhecer a doutrina da guerra justa em Agostinho e Tomás', 'Explicar a contribuição de Francisco de Vitória', 'Situar a origem do direito internacional'],
  prereq: ['Relações Internacionais I (módulo RI1)'],
  explicacao: `
<h3>O problema</h3>
<p>Antes de existirem Estados nacionais e a ONU, como se pensava a guerra, a paz e as relações entre povos?</p>
<h3>Tucídides</h3>
<p>Tucídides narrou a guerra do Peloponeso (431–404 a.C.) entre Atenas e Esparta e atribuiu sua causa mais verdadeira ao crescimento do poder ateniense e ao medo que isso causou em Esparta ${tag('fato')}. No Diálogo dos mélios (livro V), os atenienses dizem que os fortes fazem o que podem e os fracos sofrem o que devem ${tag('fato')}.</p>
<h3>Roma e a Cristandade</h3>
<p>Os romanos falavam de ius gentium, direito comum aos povos ${tag('fato')}. Santo Agostinho, em A Cidade de Deus (livro XIX), definiu a paz como "tranquilidade da ordem" e admitiu a guerra apenas para restabelecer a paz ${tag('fato')}. Santo Tomás (Suma Teológica, II-II, q. 40) exigiu para a guerra justa autoridade legítima, causa justa e reta intenção ${tag('doutrina')}.</p>
<h3>Vitória e Salamanca</h3>
<p>Francisco de Vitória, dominicano da Universidade de Salamanca, nas relectiones sobre os índios (1539), defendeu que os povos indígenas da América eram verdadeiros donos de suas terras e governos, e discutiu os títulos da conquista ${tag('fato')}. A chamada Escola de Salamanca é considerada uma das fontes do direito internacional moderno ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Ius gentium', 'Direito das gentes, comum aos povos.'],
    ['Tranquilidade da ordem', 'Definição agostiniana de paz.'],
    ['Guerra justa', 'Doutrina que estabelece condições para que uma guerra seja lícita.'],
    ['Reta intenção', 'Condição de buscar o bem e a paz, não o ódio ou a cobiça.'],
    ['Escola de Salamanca', 'Grupo de teólogos e juristas espanhóis do século XVI.'],
  ],
  exemplos: `<p><strong>O Diálogo dos mélios:</strong> Atenas exige que a pequena ilha de Melos se submeta; os mélios apelam à justiça e aos deuses; os atenienses respondem que entre desiguais vale o poder. Melos resiste e é destruída. O texto é lido até hoje como clássico do realismo e como acusação moral contra a lógica do poder.</p>`,
  contexto: `<p><strong>No mundo:</strong> a expressão "armadilha de Tucídides" é usada para discutir o risco de guerra entre uma potência estabelecida e uma em ascensão ${tag('fato')}. <strong>No Brasil:</strong> as obras de Vitória e o debate sobre os direitos dos indígenas são estudados na história do direito ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a guerra justa limita a guerra', tag: 'argumento',
    premissas: ['A doutrina exige autoridade legítima, causa justa e reta intenção.', 'Uma guerra que falte a qualquer condição é injusta.', 'Assim, a doutrina proíbe a maior parte das guerras movidas por ambição.'],
    conclusao: 'Logo, a doutrina da guerra justa é sobretudo um limite à guerra, não sua justificação fácil.',
    nota: 'O Catecismo (§ 2309) retoma e atualiza essas condições.',
  },
  objecoes: [
    { objecao: 'A doutrina da guerra justa só serviu para justificar guerras.', tag: 'debate',
      resposta: 'Foi às vezes abusada por governantes. Mas Vitória a usou para criticar a conquista da América, e ela é a base de várias normas atuais do direito de guerra. Abuso de uma doutrina não prova que ela seja falsa.' },
  ],
  aplicacao: `<p>Inicie a linha do tempo da etapa com seis marcos (Tucídides, ius gentium, Agostinho, Tomás, Vitória, Escola de Salamanca), com um texto-fonte de cada.</p>`,
  fonte: {
    obra: 'Tucídides, História da Guerra do Peloponeso, livro V, 84–116 (Diálogo dos mélios)', link: null,
    orientacao: `<p>Observe os argumentos de cada lado e o desfecho.</p>`,
  },
  perguntas: [
    { p: 'Qual a causa mais verdadeira da guerra segundo Tucídides?', r: 'O crescimento do poder ateniense e o medo que causou em Esparta.' },
    { p: 'Como Agostinho define a paz?', r: 'Como tranquilidade da ordem.' },
    { p: 'Quais as condições de Tomás para a guerra justa?', r: 'Autoridade legítima, causa justa e reta intenção.' },
  ],
  exercicios: [
    mc('A guerra do Peloponeso foi entre:', ['Atenas e Esparta', 'Roma e Cartago', 'Grécia e Pérsia', 'Esparta e Tebas'], 0, 'Tucídides.'),
    mc('As relectiones de Vitória sobre os índios são de:', ['1539', '1648', '1494', '1625'], 0, 'Salamanca.'),
    mc('A guerra justa em Tomás está em:', ['II-II, q. 40', 'I, q. 2', 'I-II, q. 90', 'III, q. 75'], 0, 'Suma.'),
    mc('"Tranquilidade da ordem" é definição de paz de:', ['Agostinho', 'Kant', 'Tucídides', 'Grócio'], 0, 'Cidade de Deus.'),
    mc('Para Vitória, os indígenas eram:', ['Verdadeiros donos de suas terras', 'Sem direitos', 'Escravos naturais', 'Estrangeiros sem povo'], 0, 'Tese.'),
    disc('Monte a linha do tempo com seis marcos e textos-fonte.', ['Marcos', 'Textos', 'Ideias', 'Ordem']),
  ],
  resumo: ['Tucídides: poder e medo.', 'Diálogo dos mélios.', 'Agostinho: tranquilidade da ordem.', 'Tomás: três condições.', 'Vitória (1539) e Salamanca.'],
  referencias: [
    { texto: 'Tucídides, História da Guerra do Peloponeso.' },
    { texto: 'Santo Agostinho, A Cidade de Deus, livro XIX.', livro: 'agostinho-cidade' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 40.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Iniciar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['Mélios', 'Força.'], ['Agostinho', 'Ordem.'], ['Vitória', '1539.']],
  avancado: {
    texto: `<h3>O direito de comunicação</h3>
<p>Vitória sustentou que os povos têm um direito natural de "sociedade e comunicação": viajar, comerciar e pregar pacificamente ${tag('fato')}. Ele mesmo admitia que a violação desse direito poderia, em certas condições, justificar a guerra, o que críticos posteriores apontaram como brecha usada pelos conquistadores ${tag('debate')}. A tensão mostra a dificuldade de aplicar princípios universais em situações de desigualdade de poder ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Francisco de Vitória, Relectiones sobre os índios (1539).' }],
    exercicios: [
      mc('O direito de comunicação inclui:', ['Viajar e comerciar pacificamente', 'Conquistar', 'Escravizar', 'Isolar-se'], 0, 'Vitória.'),
      mc('Críticos apontaram que esse direito:', ['Pôde servir de brecha à conquista', 'Era inútil', 'Proibia o comércio', 'Não existia'], 0, 'Debate.'),
      mc('Vitória era:', ['Dominicano', 'Jesuíta', 'Franciscano', 'Leigo'], 0, 'Ordem.'),
      disc('Avalie a tensão entre o direito de comunicação e a proteção dos povos indígenas em Vitória.', ['Direito', 'Brecha', 'Proteção', 'Juízo'])],
  },
}),

aula({
  id: 'ri2-2', titulo: 'De Vestfália à Guerra Fria, e a diplomacia brasileira', duracao: '150 min',
  aprendera: ['Situar Vestfália e o Congresso de Viena', 'Conhecer as grandes guerras e a criação da ONU', 'Explicar a Guerra Fria', 'Conhecer marcos da política externa brasileira'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Como surgiu o sistema de Estados soberanos e como ele foi transformado pelas guerras do século XX?</p>
<h3>Vestfália e Viena</h3>
<p>Os tratados de Vestfália (1648) encerraram a Guerra dos Trinta Anos ${tag('fato')}. O Congresso de Viena (1815), após as guerras napoleônicas, organizou um equilíbrio entre as grandes potências europeias, o "Concerto Europeu" ${tag('fato')}.</p>
<h3>Século XX</h3>
<p>A Primeira Guerra Mundial (1914–1918) levou à Liga das Nações ${tag('fato')}. A Segunda Guerra Mundial (1939–1945) levou à criação da ONU (1945) e à Declaração Universal dos Direitos Humanos (1948) ${tag('fato')}. A Guerra Fria (c. 1947–1991) opôs Estados Unidos e União Soviética, com corrida nuclear e conflitos indiretos ${tag('fato')}. A queda do Muro de Berlim (1989) e o fim da União Soviética (1991) encerraram esse período ${tag('fato')}.</p>
<h3>Brasil</h3>
<p>Portugal reconheceu a independência do Brasil em 1825 ${tag('fato')}. O Brasil participou da Guerra do Paraguai (1864–1870) ${tag('fato')}. Rio Branco consolidou as fronteiras no início do século XX ${tag('fato')}. O Brasil deixou a Liga das Nações em 1926 ${tag('fato')}. A Força Expedicionária Brasileira lutou na Itália (1944–1945) ${tag('fato')}. Osvaldo Aranha presidiu a sessão da Assembleia Geral da ONU de 1947 que aprovou o plano de partilha da Palestina ${tag('fato')}. A Política Externa Independente (1961–1964) buscou maior autonomia ${tag('fato')}.</p>`,
  vocabulario: [
    ['Concerto Europeu', 'Equilíbrio entre potências após o Congresso de Viena.'],
    ['Liga das Nações', 'Organização internacional criada após a Primeira Guerra.'],
    ['Guerra Fria', 'Rivalidade entre EUA e URSS, de c. 1947 a 1991.'],
    ['Dissuasão nuclear', 'Evitar ataques pela ameaça de retaliação nuclear.'],
    ['Política Externa Independente', 'Linha brasileira de 1961–1964 de maior autonomia.'],
  ],
  exemplos: `<p><strong>A crise dos mísseis de 1962:</strong> a instalação de mísseis soviéticos em Cuba levou o mundo perto de uma guerra nuclear. A negociação, com retirada dos mísseis de Cuba e compromissos dos Estados Unidos, mostrou a importância da diplomacia mesmo entre inimigos. É caso clássico de estudo de crise.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração Universal dos Direitos Humanos foi adotada em 10 de dezembro de 1948 ${tag('fato')}. <strong>No Brasil:</strong> a FEB participou de batalhas como a de Monte Castelo ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que as grandes guerras geraram instituições', tag: 'interpretacao',
    premissas: ['Cada grande guerra mostrou o custo do conflito sem regras.', 'Os vencedores buscaram instituições para evitar a repetição (Liga, ONU).', 'As instituições refletiram também o poder dos vencedores.'],
    conclusao: 'Logo, as instituições internacionais nascem tanto do desejo de paz quanto da distribuição de poder.',
    nota: 'O veto no Conselho de Segurança é exemplo dessa dupla origem.',
  },
  objecoes: [
    { objecao: 'O Brasil sempre foi irrelevante na política internacional.', tag: 'debate',
      resposta: 'O Brasil não é grande potência militar, mas teve papel em fronteiras negociadas, na fundação da ONU, em missões de paz e em negociações comerciais e ambientais. A relevância varia por tema e período.' },
  ],
  aplicacao: `<p>Complete a linha do tempo com oito marcos de Vestfália ao fim da Guerra Fria, incluindo três marcos da diplomacia brasileira.</p>`,
  fonte: {
    obra: 'Declaração Universal dos Direitos Humanos (1948), preâmbulo e artigos 1–3', link: null,
    orientacao: `<p>Observe a referência à dignidade inerente e aos direitos iguais e inalienáveis.</p>`,
  },
  perguntas: [
    { p: 'Que guerra os tratados de Vestfália encerraram?', r: 'A Guerra dos Trinta Anos.' },
    { p: 'Quando terminou a Guerra Fria?', r: 'Com a queda do Muro de Berlim (1989) e o fim da União Soviética (1991).' },
    { p: 'Que sessão da ONU Osvaldo Aranha presidiu?', r: 'A de 1947, que aprovou o plano de partilha da Palestina.' },
  ],
  exercicios: [
    mc('O Congresso de Viena é de:', ['1815', '1648', '1919', '1945'], 0, 'Concerto Europeu.'),
    mc('A Declaração Universal dos Direitos Humanos é de:', ['1948', '1945', '1919', '1963'], 0, 'ONU.'),
    mc('O Brasil deixou a Liga das Nações em:', ['1926', '1919', '1939', '1945'], 0, 'Fato.'),
    mc('A FEB lutou na:', ['Itália', 'França', 'Alemanha', 'Coreia'], 0, '1944–1945.'),
    mc('A crise dos mísseis foi em:', ['1962', '1948', '1989', '1975'], 0, 'Cuba.'),
    disc('Complete a linha do tempo com oito marcos e três brasileiros.', ['Marcos', 'Brasil', 'Datas', 'Significado']),
  ],
  resumo: ['Vestfália (1648).', 'Viena (1815).', 'Guerras mundiais, Liga e ONU.', 'Guerra Fria (c. 1947–1991).', 'Brasil: 1825, Paraguai, Rio Branco, FEB, Aranha, PEI.'],
  referencias: [
    { texto: 'Amado Luiz Cervo e Clodoaldo Bueno, História da política exterior do Brasil (1992).' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
    { texto: 'Declaração Universal dos Direitos Humanos (1948).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Completar a linha do tempo', 'Ler a fonte indicada'],
  revisao: [['1648', 'Vestfália.'], ['1945', 'ONU.'], ['1991', 'Fim da URSS.']],
  avancado: {
    texto: `<h3>A Santa Sé na Guerra Fria</h3>
<p>A Santa Sé desenvolveu nos anos 1960 e 1970 uma "Ostpolitik", diálogo com governos comunistas para proteger a vida da Igreja no Leste europeu, associada ao cardeal Agostino Casaroli ${tag('fato')}. A eleição de João Paulo II (1978) e sua viagem à Polônia (1979) são vistas por muitos historiadores como fatores no enfraquecimento do regime comunista polonês ${tag('interpretacao')}. O peso exato desse fator é discutido ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' }],
    exercicios: [
      mc('A Ostpolitik vaticana é associada a:', ['Agostino Casaroli', 'Rio Branco', 'Kissinger', 'Aranha'], 0, 'Diplomata.'),
      mc('João Paulo II visitou a Polônia em:', ['1979', '1989', '1963', '1991'], 0, 'Viagem.'),
      mc('O peso desse fator no fim do comunismo é:', ['Discutido', 'Nulo', 'Único', 'Desconhecido totalmente'], 0, 'Debate.'),
      disc('Discuta o papel da Santa Sé no fim da Guerra Fria, distinguindo fatos e interpretações.', ['Fatos', 'Interpretações', 'Outros fatores', 'Juízo'])],
  },
}),

aula({
  id: 'ri2-3', titulo: 'Tucídides, Maquiavel, Grócio e Kant', duracao: '150 min',
  aprendera: ['Expor o realismo de Tucídides e Maquiavel', 'Expor a contribuição de Grócio ao direito internacional', 'Expor o projeto de paz de Kant', 'Avaliar criticamente as quatro posições'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Quatro autores clássicos oferecem visões diferentes da política entre Estados: o que cada um ensina?</p>
<h3>Tucídides e Maquiavel</h3>
<p>Tucídides mostra o peso do poder, do medo e do interesse na guerra ${tag('fato')}. Maquiavel, em O príncipe (escrito em 1513, publicado em 1532), aconselha o governante a aprender a "poder não ser bom" conforme a necessidade (cap. 15) e discute se é melhor ser amado ou temido (cap. 17) ${tag('fato')}.</p>
<h3>Grócio</h3>
<p>Hugo Grócio, em O direito da guerra e da paz (1625), sistematizou um direito entre os povos fundado no direito natural, válido mesmo durante a guerra ${tag('fato')}. Em Mare liberum (1609), defendeu a liberdade dos mares ${tag('fato')}. É chamado frequentemente de "pai do direito internacional", título também reivindicado para Vitória ${tag('debate')}.</p>
<h3>Kant</h3>
<p>Em À paz perpétua (1795), Kant propôs artigos preliminares (como não fazer tratados de paz com reservas secretas para guerras futuras) e três artigos definitivos: constituição republicana em cada Estado, federação de Estados livres e direito cosmopolita limitado à hospitalidade ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>O realismo capta a força do poder; Grócio e Kant, a possibilidade de normas e instituições ${tag('interpretacao')}. A tradição clássica cristã, com a lei natural, oferece um meio-termo entre o cinismo e a utopia ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Realismo', 'Visão que enfatiza poder e interesse nas relações entre Estados.'],
    ['Razão de Estado', 'Justificação de ações pelo interesse do Estado.'],
    ['Direito natural', 'Normas morais acessíveis à razão, anteriores à lei positiva.'],
    ['Liberdade dos mares', 'Princípio de que o alto-mar não pertence a nenhum Estado.'],
    ['Direito cosmopolita', 'Em Kant, direito dos indivíduos como cidadãos do mundo, limitado à hospitalidade.'],
  ],
  exemplos: `<p><strong>Kant e a hospitalidade:</strong> para Kant, o estrangeiro tem direito de não ser tratado com hostilidade ao chegar a outro território, mas não um direito de se estabelecer. A distinção é retomada nos debates atuais sobre migração e refúgio.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Convenção das Nações Unidas sobre o Direito do Mar (1982) regula o uso dos oceanos, herdeira do debate de Grócio ${tag('fato')}. <strong>No Brasil:</strong> o Brasil é parte dessa convenção e reivindica direitos sobre sua plataforma continental, a chamada "Amazônia Azul" ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que o realismo puro é insuficiente', tag: 'argumento',
    premissas: ['O realismo descreve bem o peso do poder.', 'Mas os Estados também cumprem a maioria dos tratados na maior parte do tempo.', 'Isso só se explica se normas e expectativas também importam.'],
    conclusao: 'Logo, uma visão completa das relações internacionais une poder e normas.',
    nota: 'O próprio Morgenthau reconhecia limites morais à política, como se verá na próxima aula.',
  },
  objecoes: [
    { objecao: 'Maquiavel apenas descreveu a política como ela é.', tag: 'debate',
      resposta: 'Maquiavel descreve, mas também aconselha, inclusive o uso do mal quando necessário. A tradição clássica reconhece a dureza da política, mas nega que o fim justifique quaisquer meios. Há também leituras republicanas de Maquiavel, a partir dos Discursos.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: ficha de leitura de À paz perpétua, de Kant (artigos preliminares e definitivos), ou do Diálogo dos mélios, de Tucídides, conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Immanuel Kant, À paz perpétua (1795), primeira e segunda seções', link: null,
    orientacao: `<p>Observe a lista de artigos preliminares e a justificativa dos três definitivos.</p>`,
  },
  perguntas: [
    { p: 'O que Maquiavel aconselha no capítulo 15 de O príncipe?', r: 'Que o governante aprenda a "poder não ser bom" conforme a necessidade.' },
    { p: 'Que obras de Grócio fundam o direito internacional?', r: 'O direito da guerra e da paz (1625) e Mare liberum (1609).' },
    { p: 'Quais os três artigos definitivos de Kant?', r: 'Constituição republicana, federação de Estados livres e direito cosmopolita limitado à hospitalidade.' },
  ],
  exercicios: [
    mc('O direito da guerra e da paz é de:', ['1625', '1795', '1513', '1609'], 0, 'Grócio.'),
    mc('À paz perpétua é de:', ['1795', '1625', '1648', '1815'], 0, 'Kant.'),
    mc('O príncipe foi publicado em:', ['1532', '1513', '1625', '1795'], 0, 'Póstumo.'),
    mc('Mare liberum defende a:', ['Liberdade dos mares', 'Guerra perpétua', 'Escravidão', 'Monarquia universal'], 0, 'Grócio.'),
    mc('A Convenção sobre o Direito do Mar é de:', ['1982', '1609', '1945', '2000'], 0, 'ONU.'),
    disc('Faça a ficha de leitura de Kant ou de Tucídides.', ['Tese', 'Argumentos', 'Conceitos', 'Avaliação']),
  ],
  resumo: ['Tucídides e Maquiavel: poder.', 'Grócio: direito natural entre povos.', 'Mare liberum.', 'Kant: três artigos definitivos.', 'Poder e normas.'],
  referencias: [
    { texto: 'Immanuel Kant, À paz perpétua (1795).', livro: 'kant-paz' },
    { texto: 'Hugo Grócio, O direito da guerra e da paz (1625).' },
    { texto: 'Nicolau Maquiavel, O príncipe (1532).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha de leitura', 'Ler a fonte indicada'],
  revisao: [['Maquiavel', 'Poder não ser bom.'], ['Grócio', '1625.'], ['Kant', 'Três artigos.']],
  avancado: {
    texto: `<h3>A tese da paz democrática</h3>
<p>Inspirados em Kant, pesquisadores observaram que democracias consolidadas raramente, ou nunca, guerreiam entre si ${tag('fato')}. A explicação é debatida: instituições, normas compartilhadas, interdependência econômica ${tag('debate')}. A tese não diz que democracias são pacíficas com todos ${tag('fato')}.</p>
    `,
    leituras: [{ texto: 'Immanuel Kant, À paz perpétua (1795).', livro: 'kant-paz' }],
    exercicios: [
      mc('A tese da paz democrática diz que democracias:', ['Raramente guerreiam entre si', 'Nunca guerreiam', 'São sempre pacíficas', 'Guerreiam mais'], 0, 'Tese.'),
      mc('A explicação da tese é:', ['Debatida', 'Consensual', 'Inexistente', 'Matemática'], 0, 'Debate.'),
      mc('A tese é inspirada em:', ['Kant', 'Maquiavel', 'Tucídides', 'Clausewitz'], 0, 'Origem.'),
      disc('Avalie a tese da paz democrática com um exemplo e um contraexemplo possível.', ['Tese', 'Exemplo', 'Contraexemplo', 'Avaliação'])],
  },
}),

aula({
  id: 'ri2-4', titulo: 'Morgenthau, Aron e o Barão do Rio Branco', duracao: '150 min',
  aprendera: ['Expor os princípios do realismo de Morgenthau', 'Expor a sociologia histórica de Aron', 'Conhecer o pensamento e a obra do Barão do Rio Branco', 'Relacionar teoria e prática diplomática'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Dois teóricos do século XX e um diplomata brasileiro: como pensaram e praticaram a política internacional?</p>
<h3>Morgenthau</h3>
<p>Hans Morgenthau, em A política entre as nações (1948), formulou seis princípios do realismo político, entre eles que a política é governada por leis objetivas enraizadas na natureza humana e que o interesse é definido em termos de poder ${tag('fato')}. Sustentou também que a prudência é a virtude suprema da política e que princípios morais universais não se aplicam abstratamente às ações dos Estados ${tag('fato')}.</p>
<h3>Aron</h3>
<p>Raymond Aron, em Paz e guerra entre as nações (1962), analisou a "conduta diplomático-estratégica" do diplomata e do soldado e recusou tanto o cinismo quanto o idealismo ${tag('fato')}. Propôs uma moral da prudência, atenta às consequências ${tag('interpretacao')}.</p>
<h3>Rio Branco</h3>
<p>José Maria da Silva Paranhos Júnior (1845–1912), Barão do Rio Branco, venceu arbitragens de fronteira (Palmas, 1895; Amapá, 1900), negociou a questão do Acre (Tratado de Petrópolis, 1903) e foi ministro das Relações Exteriores de 1902 a 1912 ${tag('fato')}. Aproximou o Brasil dos Estados Unidos e valorizou o direito e a negociação como instrumentos de um país sem grande poder militar ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Realismo político', 'Teoria que vê a política internacional como luta pelo poder.'],
    ['Prudência', 'Virtude de escolher bem os meios em situações concretas.'],
    ['Conduta diplomático-estratégica', 'Expressão de Aron para a ação do diplomata e do soldado.'],
    ['Arbitragem', 'Solução de litígio por decisão de um terceiro escolhido pelas partes.'],
    ['Patrono da diplomacia', 'Título dado a Rio Branco no Brasil.'],
  ],
  exemplos: `<p><strong>A questão do Acre:</strong> brasileiros ocupavam o Acre, então boliviano, e havia conflito. Rio Branco negociou o Tratado de Petrópolis (1903): o Brasil incorporou o território e, em troca, pagou indenização, cedeu pequenas áreas e se comprometeu a construir uma ferrovia. Negociação no lugar da guerra.</p>`,
  contexto: `<p><strong>No mundo:</strong> A política entre as nações foi por décadas o manual mais usado de relações internacionais nos Estados Unidos ${tag('fato')}. <strong>No Brasil:</strong> o Instituto Rio Branco, criado em 1945, forma os diplomatas brasileiros ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a prudência é a virtude do estadista', tag: 'argumento',
    premissas: ['Na política internacional, as decisões têm consequências graves e incertas.', 'Princípios gerais precisam ser aplicados a situações concretas e mutáveis.', 'A virtude que aplica bem os princípios ao caso concreto é a prudência.'],
    conclusao: 'Logo, a prudência é a virtude central do estadista e do diplomata.',
    nota: 'Morgenthau, Aron e a tradição tomista concordam nisso, com diferenças sobre o lugar dos princípios morais.',
  },
  objecoes: [
    { objecao: 'Rio Branco só ganhou porque o Brasil era maior que os vizinhos.', tag: 'debate',
      resposta: 'O peso do Brasil importou, mas as arbitragens foram decididas por terceiros com base em documentos e argumentos jurídicos, e na questão do Amapá o adversário era a França, potência maior. A preparação documental de Rio Branco foi decisiva.' },
  ],
  aplicacao: `<p>Faça uma ficha de cada autor (Morgenthau, Aron, Rio Branco) com datas, obras ou feitos, tese central e um exemplo; depois compare suas visões sobre o lugar da moral na política externa.</p>`,
  fonte: {
    obra: 'Hans Morgenthau, A política entre as nações (1948), capítulo 1 (os seis princípios do realismo político)', link: null,
    orientacao: `<p>Observe a relação entre interesse, poder e prudência.</p>`,
  },
  perguntas: [
    { p: 'Como Morgenthau define o interesse?', r: 'Em termos de poder.' },
    { p: 'O que Aron recusa?', r: 'Tanto o cinismo quanto o idealismo.' },
    { p: 'Que tratado resolveu a questão do Acre?', r: 'O Tratado de Petrópolis (1903).' },
  ],
  exercicios: [
    mc('A política entre as nações é de:', ['1948', '1962', '1903', '1795'], 0, 'Morgenthau.'),
    mc('Paz e guerra entre as nações é de:', ['1962', '1948', '1979', '1945'], 0, 'Aron.'),
    mc('O Instituto Rio Branco foi criado em:', ['1945', '1902', '1912', '1964'], 0, 'Diplomatas.'),
    mc('Rio Branco foi ministro de:', ['1902 a 1912', '1889 a 1899', '1930 a 1945', '1961 a 1964'], 0, 'Período.'),
    mc('Para Morgenthau, a virtude suprema da política é a:', ['Prudência', 'Coragem', 'Generosidade', 'Humildade'], 0, 'Seis princípios.'),
    disc('Faça as três fichas e a comparação.', ['Morgenthau', 'Aron', 'Rio Branco', 'Comparação']),
  ],
  resumo: ['Morgenthau: interesse e poder.', 'Prudência.', 'Aron: nem cinismo nem idealismo.', 'Rio Branco: arbitragens e Petrópolis.', 'Instituto Rio Branco (1945).'],
  referencias: [
    { texto: 'Hans Morgenthau, A política entre as nações (1948).' },
    { texto: 'Raymond Aron, Paz e guerra entre as nações (1962).' },
    { texto: 'Rubens Ricupero, A diplomacia na construção do Brasil (1750–2016) (2017).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as fichas', 'Ler a fonte indicada'],
  revisao: [['Morgenthau', 'Poder.'], ['Aron', 'Prudência.'], ['Petrópolis', '1903.']],
  avancado: {
    texto: `<h3>O neorrealismo de Waltz</h3>
<p>Kenneth Waltz, em Teoria da política internacional (1979), deslocou a explicação da natureza humana para a estrutura do sistema: a anarquia e a distribuição de capacidades entre Estados ${tag('fato')}. Para Waltz, sistemas bipolares tendem a ser mais estáveis que multipolares ${tag('fato')}. A tese é debatida, sobretudo depois do fim da Guerra Fria ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Kenneth Waltz, Teoria da política internacional (1979).' }],
    exercicios: [
      mc('Waltz explica a política internacional pela:', ['Estrutura do sistema', 'Natureza humana apenas', 'Religião', 'Economia apenas'], 0, 'Neorrealismo.'),
      mc('Teoria da política internacional é de:', ['1979', '1948', '1962', '1999'], 0, 'Waltz.'),
      mc('Para Waltz, sistemas mais estáveis são os:', ['Bipolares', 'Multipolares', 'Unipolares sempre', 'Anárquicos sem Estados'], 0, 'Tese.'),
      disc('Compare o realismo de Morgenthau e o neorrealismo de Waltz.', ['Morgenthau', 'Waltz', 'Diferenças', 'Avaliação'])],
  },
}),

avaliacao('ri2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre a história das relações internacionais e seus grandes autores, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia sua linha do tempo.</li><li>Releia suas fichas.</li></ul>`,
[
  disc('Trace a história das relações internacionais em oito marcos, de Tucídides ao fim da Guerra Fria, incluindo dois marcos da diplomacia brasileira, com o significado de cada um.', ['Marcos', 'Significado', 'Brasil', 'Ordem']),
  disc('Compare Tucídides, Tomás de Aquino, Kant e Morgenthau quanto ao lugar da moral nas relações entre Estados.', ['Tucídides', 'Tomás', 'Kant', 'Morgenthau']),
]),
];
