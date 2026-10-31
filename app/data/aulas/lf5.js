// Lógica formal V — aplicações, pesquisa e avaliação integradora (etapas 9 a 11 do percurso de Lógica formal).
// Argumentação e falácias; lógica e computação; lógica no direito e na leitura de textos; formalização de um texto; avaliação final.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'lf5-1', titulo: 'Argumentação e falácias: a lógica no debate público', duracao: '150 min',
  aprendera: ['Reconstruir argumentos de textos do debate público', 'Identificar falácias formais e informais', 'Distinguir dedução, indução e argumento por analogia', 'Responder a argumentos com caridade e rigor'],
  prereq: ['Lógica formal IV (módulo LF4)'],
  explicacao: `
<h3>O problema</h3>
<p>Debates em redes sociais, na política e na imprensa estão cheios de argumentos ruins que parecem bons. Como a lógica ajuda a separar uns dos outros?</p>
<h3>Reconstruir</h3>
<p>Reconstruir um argumento é identificar a conclusão, as premissas explícitas e as implícitas, e numerá-las ${tag('fato')}. O princípio de caridade pede que se escolha a leitura mais forte do argumento antes de criticá-lo ${tag('argumento')}.</p>
<h3>Falácias formais</h3>
<p>Afirmação do consequente (se p, q; q; logo p) e negação do antecedente (se p, q; não p; logo não q) são formas inválidas estudadas no LF1 ${tag('fato')}.</p>
<h3>Falácias informais</h3>
<p>Ataque à pessoa (ad hominem), espantalho (distorcer a posição do outro), falso dilema, apelo à popularidade, petição de princípio, generalização apressada, ladeira escorregadia sem justificativa e falsa causa (post hoc) são as mais frequentes ${tag('fato')}. Nem todo apelo à autoridade é falácia: é legítimo quando a autoridade é competente no assunto e há consenso entre especialistas ${tag('argumento')}.</p>
<h3>Dedução, indução e analogia</h3>
<p>Na dedução válida, a conclusão segue necessariamente; na indução, as premissas tornam a conclusão provável; no argumento por analogia, a força depende das semelhanças relevantes ${tag('fato')}.</p>`,
  vocabulario: [
    ['Reconstrução', 'Apresentação ordenada de premissas e conclusão de um argumento.'],
    ['Princípio de caridade', 'Interpretar o argumento alheio na sua forma mais forte.'],
    ['Falácia informal', 'Erro de raciocínio que depende do conteúdo ou do contexto.'],
    ['Espantalho', 'Distorção da posição do adversário para refutá-la facilmente.'],
    ['Falso dilema', 'Apresentar duas opções como únicas quando há outras.'],
  ],
  exemplos: `<p><strong>Espantalho:</strong> A diz "precisamos de regras mais claras para o uso de celular na escola". B responde "A quer proibir a tecnologia e voltar à Idade Média". B atacou uma posição que A não defendeu. A resposta lógica é reconstruir a posição de A e avaliá-la como foi dita.</p>`,
  contexto: `<p><strong>No mundo:</strong> agências de checagem de fatos se multiplicaram nas últimas décadas ${tag('fato')}. <strong>No Brasil:</strong> a Base Nacional Comum Curricular inclui a argumentação entre as competências gerais da educação básica ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a caridade é exigência lógica e moral', tag: 'argumento',
    premissas: ['Refutar uma versão fraca de um argumento não refuta a versão forte.', 'Quem busca a verdade quer saber se a melhor versão do argumento é boa.', 'Distorcer a posição alheia é também falta de justiça com o interlocutor.'],
    conclusao: 'Logo, o princípio de caridade é exigência tanto da lógica quanto da justiça.',
    nota: 'Santo Tomás, nas questões disputadas, apresenta as objeções na forma mais forte antes de responder.',
  },
  objecoes: [
    { objecao: 'Apontar falácias é suficiente para vencer um debate.', tag: 'debate',
      resposta: 'Mostrar que um argumento é falacioso não prova que a conclusão é falsa (seria a "falácia da falácia"). A conclusão pode ser verdadeira por outras razões. É preciso ainda examinar se há bons argumentos para ela ou contra ela.' },
  ],
  aplicacao: `<p>Escolha três textos do debate público (artigo, discurso, publicação) e, para cada um, reconstrua o argumento principal, classifique-o (dedutivo, indutivo, analógico), aponte eventuais falácias e dê a resposta mais justa.</p>`,
  fonte: {
    obra: 'Aristóteles, Refutações sofísticas, caps. 4–5', link: null,
    orientacao: `<p>Compare a classificação aristotélica com as falácias informais modernas.</p>`,
  },
  perguntas: [
    { p: 'O que é o princípio de caridade?', r: 'Interpretar o argumento alheio na sua forma mais forte.' },
    { p: 'O que é falso dilema?', r: 'Apresentar duas opções como únicas quando há outras.' },
    { p: 'Todo apelo à autoridade é falácia?', r: 'Não: é legítimo quando a autoridade é competente e há consenso entre especialistas.' },
  ],
  exercicios: [
    mc('"Ele é corrupto, então seu argumento sobre impostos é falso" é:', ['Ad hominem', 'Modus ponens', 'Analogia válida', 'Espantalho'], 0, 'Ataque à pessoa.'),
    mc('"Ou você apoia este projeto ou odeia o país" é:', ['Falso dilema', 'Dedução válida', 'Indução forte', 'Petição de princípio'], 0, 'Duas opções.'),
    mc('"Depois que o prefeito assumiu, choveu menos; logo, ele causou a seca" é:', ['Falsa causa', 'Espantalho', 'Analogia', 'Modus tollens'], 0, 'Post hoc.'),
    mc('Mostrar que um argumento é falacioso prova que a conclusão:', ['É falsa', 'Não está provada por esse argumento', 'É verdadeira', 'É contraditória'], 1, 'Falácia da falácia.'),
    mc('Na indução, as premissas tornam a conclusão:', ['Necessária', 'Provável', 'Impossível', 'Contraditória'], 1, 'Indução.'),
    disc('Analise três textos do debate público conforme a aplicação.', ['Reconstrução', 'Classificação', 'Falácias', 'Resposta caridosa']),
  ],
  resumo: ['Reconstruir antes de criticar.', 'Caridade.', 'Falácias formais e informais.', 'Dedução, indução, analogia.', 'Falácia não prova falsidade.'],
  referencias: [
    { texto: 'Aristóteles, Refutações sofísticas.' },
    { texto: 'Irving Copi, Introdução à lógica, capítulo sobre falácias.', livro: 'copi-logica' },
    { texto: 'Anthony Weston, A construção do argumento (1987).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise dos três textos', 'Ler a fonte indicada'],
  revisao: [['Caridade', 'Versão mais forte.'], ['Espantalho', 'Distorção.'], ['Falácia da falácia', 'Não prova falsidade.']],
  avancado: {
    texto: `<h3>Mapas de argumentos</h3>
<p>Mapas de argumentos representam graficamente premissas, conclusões, objeções e respostas, mostrando quais premissas atuam juntas (ligadas) e quais apoiam a conclusão independentemente (convergentes) ${tag('fato')}. Essa distinção importa: derrubar uma premissa ligada derruba o apoio; derrubar uma convergente deixa as outras de pé ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Anthony Weston, A construção do argumento (1987).' }],
    exercicios: [
      mc('Premissas ligadas apoiam a conclusão:', ['Juntas', 'Cada uma sozinha', 'Nunca', 'Só por analogia'], 0, 'Ligadas.'),
      mc('Derrubar uma premissa convergente:', ['Derruba todo o argumento', 'Deixa as outras de pé', 'Prova a conclusão', 'Nada muda nunca'], 1, 'Convergentes.'),
      mc('Mapas de argumentos representam também:', ['Objeções e respostas', 'Só conclusões', 'Só falácias', 'Só dados'], 0, 'Estrutura.'),
      disc('Faça o mapa de um dos argumentos analisados, distinguindo premissas ligadas e convergentes.', ['Mapa', 'Ligadas', 'Convergentes', 'Objeção'])],
  },
}),

aula({
  id: 'lf5-2', titulo: 'Lógica e computação: circuitos, programas e verificação', duracao: '150 min',
  aprendera: ['Relacionar conectivos e portas lógicas', 'Reconhecer a lógica em condições de programas', 'Conhecer o problema da satisfatibilidade (SAT)', 'Avaliar o lugar da lógica na inteligência artificial'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>Celulares e computadores executam bilhões de operações lógicas por segundo. Onde está a lógica que estudamos nesses aparelhos?</p>
<h3>Portas lógicas</h3>
<p>Portas AND, OR e NOT realizam conjunção, disjunção e negação com sinais elétricos ${tag('fato')}. A porta NAND sozinha basta para construir todas as outras ${tag('fato')}. Um somador binário é uma combinação de portas ${tag('fato')}.</p>
<h3>Programas</h3>
<p>Condições como "if (idade >= 16 && inscrito)" são fórmulas proposicionais ${tag('fato')}. As leis de De Morgan simplificam condições: ¬(p ∧ q) equivale a ¬p ∨ ¬q ${tag('fato')}.</p>
<h3>SAT</h3>
<p>O problema SAT pergunta se uma fórmula proposicional pode ser tornada verdadeira por alguma atribuição de valores ${tag('fato')}. Stephen Cook mostrou em 1971 que SAT é NP-completo ${tag('fato')}. Mesmo assim, resolvedores SAT modernos tratam fórmulas enormes na prática e são usados em verificação de hardware e planejamento ${tag('fato')}.</p>
<h3>Lógica e inteligência artificial</h3>
<p>A IA simbólica usou lógica para representar conhecimento; a IA atual baseia-se sobretudo em aprendizado estatístico ${tag('fato')}. Há pesquisa em combinar as duas abordagens ${tag('fato')}. Saber se os sistemas atuais "raciocinam" é tema de debate ${tag('debate')}.</p>`,
  vocabulario: [
    ['Porta lógica', 'Circuito que realiza uma operação lógica.'],
    ['NAND', 'Negação da conjunção; porta universal.'],
    ['SAT', 'Problema de satisfatibilidade de fórmulas proposicionais.'],
    ['NP-completo', 'Classe de problemas tão difíceis quanto qualquer problema de NP.'],
    ['Verificação formal', 'Prova matemática de que um sistema cumpre sua especificação.'],
  ],
  exemplos: `<p><strong>De Morgan num programa:</strong> "if (!(logado && pago))" equivale a "if (!logado || !pago)": o acesso é negado se o usuário não está logado ou não pagou. Escrever a condição na forma mais legível evita erros de manutenção.</p>`,
  contexto: `<p><strong>No mundo:</strong> a verificação formal é usada em sistemas críticos, como controle de voo e processadores ${tag('fato')}. <strong>No Brasil:</strong> a Sociedade Brasileira de Computação reúne pesquisadores de lógica e métodos formais ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que verificar formalmente sistemas críticos', tag: 'argumento',
    premissas: ['Testes verificam apenas os casos testados.', 'Em sistemas críticos, um único caso não testado pode custar vidas.', 'A verificação formal prova que a propriedade vale para todos os casos especificados.'],
    conclusao: 'Logo, sistemas críticos devem, quando possível, ser verificados formalmente.',
    nota: 'A verificação depende de a especificação estar correta: a lógica não substitui o bom juízo sobre o que se quer.',
  },
  objecoes: [
    { objecao: 'Com a IA atual, a lógica formal ficou obsoleta.', tag: 'debate',
      resposta: 'A IA estatística resolve bem muitas tarefas, mas erra de modos difíceis de prever. A lógica continua necessária para especificar, verificar e explicar sistemas, e é base de linguagens de programação e de bancos de dados.' },
  ],
  aplicacao: `<p>Projete, com portas lógicas, um circuito de votação para três jurados (acende se pelo menos dois votarem sim), escreva a fórmula e a tabela-verdade, e simplifique uma condição de programa com De Morgan.</p>`,
  fonte: {
    obra: 'Claude Shannon, A Symbolic Analysis of Relay and Switching Circuits (1937)', link: null,
    orientacao: `<p>Observe como Shannon traduz circuitos em expressões booleanas e as simplifica.</p>`,
  },
  perguntas: [
    { p: 'Qual porta basta para construir todas as outras?', r: 'NAND (também NOR).' },
    { p: 'O que pergunta o problema SAT?', r: 'Se uma fórmula pode ser tornada verdadeira por alguma atribuição.' },
    { p: 'A que equivale ¬(p ∧ q)?', r: 'A ¬p ∨ ¬q.' },
  ],
  exercicios: [
    mc('A porta AND realiza:', ['Conjunção', 'Disjunção', 'Negação', 'Condicional'], 0, 'E.'),
    mc('SAT foi provado NP-completo em:', ['1936', '1956', '1971', '1990'], 2, 'Cook.'),
    mc('¬(p ∨ q) equivale a:', ['¬p ∧ ¬q', '¬p ∨ ¬q', 'p ∧ q', 'p → q'], 0, 'De Morgan.'),
    mc('A verificação formal prova propriedades para:', ['Só casos testados', 'Todos os casos especificados', 'Nenhum caso', 'Casos aleatórios'], 1, 'Prova.'),
    mc('O circuito de maioria de três é verdadeiro quando:', ['Pelo menos dois são 1', 'Todos são 0', 'Só um é 1', 'Nunca'], 0, 'Maioria.'),
    disc('Projete o circuito de votação e simplifique uma condição com De Morgan.', ['Fórmula', 'Tabela', 'Circuito', 'Simplificação']),
  ],
  resumo: ['AND, OR, NOT; NAND universal.', 'Condições são fórmulas.', 'De Morgan.', 'SAT: NP-completo (1971).', 'Verificação formal.'],
  referencias: [
    { texto: 'Claude Shannon, A Symbolic Analysis of Relay and Switching Circuits (1937).' },
    { texto: 'Stephen Cook, "The Complexity of Theorem-Proving Procedures" (1971).' },
    { texto: 'George Boolos, John Burgess e Richard Jeffrey, Computabilidade e lógica.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o circuito', 'Ler a fonte indicada'],
  revisao: [['NAND', 'Universal.'], ['SAT', 'NP-completo.'], ['De Morgan', '¬(p ∧ q) ≡ ¬p ∨ ¬q.']],
  avancado: {
    texto: `<h3>P versus NP</h3>
<p>A pergunta se P = NP — se todo problema cuja solução se verifica rapidamente também se resolve rapidamente — é um dos Problemas do Milênio do Instituto Clay, com prêmio de um milhão de dólares ${tag('fato')}. Como SAT é NP-completo, um algoritmo eficiente para SAT mostraria P = NP ${tag('fato')}. A maioria dos especialistas conjectura que P ≠ NP ${tag('hipotese')}.</p>`,
    leituras: [{ texto: 'Stephen Cook, "The Complexity of Theorem-Proving Procedures" (1971).' }],
    exercicios: [
      mc('Um algoritmo eficiente para SAT mostraria:', ['P = NP', 'P ≠ NP', 'Gödel errado', 'Nada'], 0, 'Completude NP.'),
      mc('P vs NP é um dos problemas do:', ['Instituto Clay', 'Congresso de 1900 apenas', 'Concílio', 'IBGE'], 0, 'Milênio.'),
      mc('A maioria dos especialistas conjectura que:', ['P ≠ NP', 'P = NP', 'Não há problema', 'SAT é fácil'], 0, 'Hipótese.'),
      disc('Explique, com um exemplo, a diferença entre verificar e encontrar uma solução.', ['Verificar', 'Encontrar', 'Exemplo', 'P vs NP'])],
  },
}),

aula({
  id: 'lf5-3', titulo: 'Lógica no direito e na leitura de textos', duracao: '150 min',
  aprendera: ['Reconhecer a estrutura lógica de normas e decisões', 'Formalizar condições em textos legais e contratos', 'Identificar ambiguidades de escopo', 'Usar a lógica na leitura atenta de textos filosóficos'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Leis, contratos, editais e textos filosóficos estão cheios de "se", "e", "ou", "salvo", "todos" e "nenhum". Lê-los mal é cometer erros de lógica.</p>
<h3>Normas</h3>
<p>Muitas normas têm a forma condicional: se ocorre o fato previsto, deve ser a consequência ${tag('fato')}. A decisão judicial é frequentemente descrita como um silogismo: norma (premissa maior), fatos (premissa menor), decisão (conclusão) ${tag('fato')}. Essa descrição é simplificada: interpretar a norma e qualificar os fatos exige juízo prudencial ${tag('interpretacao')}.</p>
<h3>Conectivos em textos legais</h3>
<p>"Ou" pode ser inclusivo ou exclusivo; "salvo" introduz exceção (se p e não q, então r); "somente se" indica condição necessária ${tag('fato')}. Um edital que exige "diploma e experiência ou certificado" é ambíguo: (diploma ∧ experiência) ∨ certificado, ou diploma ∧ (experiência ∨ certificado)? ${tag('fato')}</p>
<h3>Escopo de quantificadores</h3>
<p>"Todos os alunos não fizeram a prova" pode significar ∀x ¬Px (nenhum fez) ou ¬∀x Px (nem todos fizeram) ${tag('fato')}. Redação cuidadosa evita a ambiguidade ${tag('argumento')}.</p>
<h3>Textos filosóficos</h3>
<p>Ler logicamente uma questão da Suma Teológica ou um capítulo de Aristóteles é identificar teses, distinções, premissas e respostas às objeções ${tag('interpretacao')}. Uma distinção ("em certo sentido sim, em outro não") é muitas vezes a solução de uma aparente contradição ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Silogismo judicial', 'Descrição da decisão como norma, fatos e conclusão.'],
    ['Ambiguidade de escopo', 'Dúvida sobre o alcance de um conectivo ou quantificador.'],
    ['"Somente se"', 'Indica condição necessária.'],
    ['Exceção', 'Cláusula introduzida por "salvo", "exceto".'],
    ['Distinção', 'Separação de sentidos que resolve aparentes contradições.'],
  ],
  exemplos: `<p><strong>Somente se:</strong> "o candidato será aprovado somente se tiver nota mínima" formaliza-se A → N: a nota é necessária, mas não suficiente. Concluir "tem nota mínima, logo será aprovado" é afirmar o consequente.</p>`,
  contexto: `<p><strong>No mundo:</strong> a lógica deôntica estuda formalmente os operadores "obrigatório", "permitido" e "proibido" ${tag('fato')}. <strong>No Brasil:</strong> o Código de Processo Civil de 2015 exige fundamentação das decisões judiciais, o que valoriza a clareza argumentativa ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a lógica não basta para julgar', tag: 'argumento',
    premissas: ['A lógica garante que a conclusão segue das premissas.', 'No direito, a escolha e a interpretação das premissas (qual norma, quais fatos) exigem juízo sobre o justo.', 'Esse juízo é obra da prudência, não do cálculo.'],
    conclusao: 'Logo, a lógica é necessária, mas não suficiente, para julgar bem.',
    nota: 'Na tradição tomista, o direito é "o justo", e a prudência aplica a lei ao caso.',
  },
  objecoes: [
    { objecao: 'A interpretação jurídica é pura retórica, sem lógica.', tag: 'debate',
      resposta: 'A argumentação jurídica usa retórica e prudência, mas não dispensa a lógica: uma decisão contraditória ou que conclui o que não se segue das premissas é criticável. Autores de teoria da argumentação jurídica discutem como combinar os dois planos.' },
  ],
  aplicacao: `<p>Formalize três cláusulas (de lei, edital ou contrato) com conectivos e quantificadores, aponte uma ambiguidade e reescreva-a com clareza; depois, reconstrua logicamente um artigo da Suma Teológica.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 90, a. 1 (se a lei é algo da razão)', link: null,
    orientacao: `<p>Identifique a tese, as objeções, o argumento "em sentido contrário", a solução e as respostas.</p>`,
  },
  perguntas: [
    { p: 'Como se descreve a decisão judicial como silogismo?', r: 'Norma (maior), fatos (menor), decisão (conclusão).' },
    { p: 'O que indica "somente se"?', r: 'Condição necessária.' },
    { p: 'Que ambiguidade há em "todos os alunos não fizeram a prova"?', r: 'Entre ∀x ¬Px e ¬∀x Px.' },
  ],
  exercicios: [
    mc('"A somente se B" formaliza-se como:', ['A → B', 'B → A', 'A ∧ B', 'A ∨ B'], 0, 'Necessária.'),
    mc('"Salvo" introduz:', ['Exceção', 'Conjunção', 'Quantificador', 'Conclusão'], 0, 'Cláusula.'),
    mc('¬∀x Px significa:', ['Nem todos', 'Nenhum', 'Todos', 'Exatamente um'], 0, 'Escopo.'),
    mc('O CPC que exige fundamentação é de:', ['1973', '1988', '2015', '2002'], 2, 'Processo.'),
    mc('A lógica deôntica estuda:', ['Obrigatório, permitido, proibido', 'Só circuitos', 'Só tempos verbais', 'Só conjuntos'], 0, 'Normas.'),
    disc('Formalize três cláusulas, corrija uma ambiguidade e reconstrua um artigo da Suma.', ['Formalizações', 'Ambiguidade', 'Reescrita', 'Artigo da Suma']),
  ],
  resumo: ['Normas condicionais.', 'Silogismo judicial e prudência.', 'Conectivos legais.', 'Escopo de quantificadores.', 'Leitura lógica de textos filosóficos.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I-II, q. 90–97.' },
    { texto: 'Chaïm Perelman, Lógica jurídica (1976).' },
    { texto: 'Irving Copi, Introdução à lógica.', livro: 'copi-logica' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar as formalizações e a reconstrução', 'Ler a fonte indicada'],
  revisao: [['Somente se', 'Necessária.'], ['¬∀ vs ∀¬', 'Escopo.'], ['Prudência', 'Aplica a lei.']],
  avancado: {
    texto: `<h3>Lógica deôntica</h3>
<p>Na lógica deôntica padrão, O (obrigatório) e P (permitido) se relacionam como □ e ◇: Pp equivale a ¬O¬p, e "proibido p" é O¬p ${tag('fato')}. O sistema enfrenta paradoxos conhecidos, como o de Ross: de "é obrigatório enviar a carta" segue "é obrigatório enviar a carta ou queimá-la" ${tag('fato')}. Esses problemas motivaram sistemas alternativos ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Chaïm Perelman, Lógica jurídica (1976).' }],
    exercicios: [
      mc('"Permitido p" equivale a:', ['¬O¬p', 'O¬p', 'Op', '¬Pp'], 0, 'Dualidade.'),
      mc('"Proibido p" é:', ['O¬p', 'Pp', 'Op', '¬p'], 0, 'Definição.'),
      mc('O paradoxo de Ross envolve:', ['Obrigação disjuntiva', 'Quantificadores', 'Circuitos', 'Silogismo'], 0, 'Carta.'),
      disc('Explique o paradoxo de Ross e por que incomoda.', ['Paradoxo', 'Derivação', 'Problema', 'Alternativa'])],
  },
}),

aula({
  id: 'lf5-4', titulo: 'Pesquisa: formalizar os argumentos de um texto', duracao: '180 min',
  aprendera: ['Escolher um texto argumentativo adequado', 'Reconstruir e formalizar seus argumentos', 'Testar a validade e discutir as premissas', 'Redigir um relatório de análise lógica'],
  prereq: ['Aulas anteriores do percurso'],
  explicacao: `
<h3>O problema</h3>
<p>Como aplicar tudo o que se estudou a um texto real, do começo ao fim?</p>
<h3>Escolha</h3>
<p>Escolha um texto curto e argumentativo: um artigo da Suma Teológica, um capítulo de Platão ou Aristóteles, as Meditações de Descartes (uma delas), um editorial ou uma decisão judicial ${tag('interpretacao')}.</p>
<h3>Etapas</h3>
<p>1. Leia o texto inteiro e identifique a tese principal ${tag('interpretacao')}. 2. Liste os argumentos e reconstrua cada um com premissas numeradas, incluindo as implícitas ${tag('interpretacao')}. 3. Formalize em lógica proposicional ou de predicados, com dicionário ${tag('interpretacao')}. 4. Teste a validade por tabela, prova ou contraexemplo ${tag('interpretacao')}. 5. Discuta a verdade das premissas e as objeções ${tag('interpretacao')}.</p>
<h3>Relatório</h3>
<p>Estrutura: texto e tese; reconstrução; formalização; teste de validade; discussão das premissas; conclusão; referências ${tag('interpretacao')}. Distinga o que o autor diz, a sua reconstrução e o seu juízo ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Tese principal', 'Afirmação central que o texto defende.'],
    ['Premissa implícita', 'Premissa não dita, mas necessária ao argumento.'],
    ['Dicionário', 'Lista que associa letras a frases ou predicados.'],
    ['Teste de validade', 'Verificação por tabela, prova ou contraexemplo.'],
    ['Relatório', 'Texto que apresenta a análise e seus resultados.'],
  ],
  exemplos: `<p><strong>Um artigo da Suma:</strong> o estudante escolhe a primeira via (I, q. 2, a. 3). Reconstrói o argumento em seis premissas, formaliza-o em lógica de predicados, prova a validade e discute a premissa mais controversa (a impossibilidade de regresso ao infinito em causas essencialmente ordenadas), apresentando uma objeção e uma resposta.</p>`,
  contexto: `<p><strong>No mundo:</strong> a reconstrução lógica de argumentos clássicos é método comum da filosofia analítica e também de estudiosos do tomismo ${tag('fato')}. <strong>No Brasil:</strong> textos clássicos em tradução estão disponíveis em bibliotecas universitárias e em domínio público ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que formalizar textos clássicos', tag: 'argumento',
    premissas: ['Textos clássicos contêm argumentos que pretendem provar teses importantes.', 'A formalização torna explícitas premissas ocultas e testa a validade.', 'Assim, a discussão se concentra no que realmente está em jogo: a verdade das premissas.'],
    conclusao: 'Logo, formalizar textos clássicos é um modo fecundo de estudá-los.',
    nota: 'A formalização não substitui a leitura atenta do contexto e dos termos do autor.',
  },
  objecoes: [
    { objecao: 'Formalizar trai o pensamento do autor.', tag: 'debate',
      resposta: 'Toda formalização é interpretação, e pode ser má. Por isso deve ser justificada com o texto e apresentada como reconstrução. Feita com cuidado, ela ajuda a entender o autor e a dialogar com ele.' },
  ],
  aplicacao: `<p>Elabore o pré-projeto: texto escolhido, tese, lista de argumentos a reconstruir, sistema de formalização, cronograma de quatro semanas e rubrica.</p>`,
  fonte: {
    obra: 'Santo Tomás de Aquino, Suma Teológica, I, q. 2, a. 3', link: null,
    orientacao: `<p>Use o texto como exemplo de reconstrução, ou escolha outro texto argumentativo de extensão semelhante.</p>`,
  },
  perguntas: [
    { p: 'Quais as etapas da análise?', r: 'Tese, reconstrução, formalização, teste de validade, discussão das premissas.' },
    { p: 'O que é premissa implícita?', r: 'Premissa não dita, mas necessária ao argumento.' },
    { p: 'O que o relatório deve distinguir?', r: 'O que o autor diz, a reconstrução e o juízo próprio.' },
  ],
  exercicios: [
    mc('A primeira etapa é:', ['Identificar a tese', 'Formalizar', 'Fazer tabela', 'Concluir'], 0, 'Método.'),
    mc('Um dicionário associa:', ['Letras a frases ou predicados', 'Autores a datas', 'Palavras a traduções', 'Nada'], 0, 'Formalização.'),
    mc('Mostrar validade não basta porque:', ['É preciso discutir a verdade das premissas', 'Validade é irrelevante', 'Toda forma é válida', 'O texto é falso'], 0, 'Solidez.'),
    mc('Toda formalização é:', ['Uma interpretação', 'Uma tradução literal', 'Infalível', 'Dispensável'], 0, 'Objeção.'),
    mc('O texto escolhido deve ser:', ['Curto e argumentativo', 'Narrativo', 'Sem argumentos', 'Muito longo'], 0, 'Escolha.'),
    disc('Apresente o pré-projeto com texto, tese, argumentos, sistema, cronograma e rubrica.', ['Texto e tese', 'Argumentos', 'Sistema', 'Cronograma e rubrica']),
  ],
  resumo: ['Texto curto e argumentativo.', 'Tese e argumentos.', 'Reconstrução e formalização.', 'Teste de validade.', 'Discussão das premissas.'],
  referencias: [
    { texto: 'Santo Tomás de Aquino, Suma Teológica, I, q. 2.' },
    { texto: 'Anthony Weston, A construção do argumento (1987).' },
    { texto: 'Umberto Eco, Como se faz uma tese.', livro: 'eco-tese' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o pré-projeto', 'Concluir a pesquisa em quatro semanas'],
  revisao: [['Tese', 'Primeiro.'], ['Implícita', 'Necessária.'], ['Validade', 'Não basta.']],
  avancado: {
    texto: `<h3>Solidez e força</h3>
<p>Um argumento dedutivo é sólido quando é válido e tem premissas verdadeiras ${tag('fato')}. Na prática, discute-se também se as premissas são mais plausíveis que a negação da conclusão: um argumento válido com premissas menos certas que a negação da conclusão convence pouco ${tag('argumento')}. É a razão pela qual um argumento válido pode ser "virado ao contrário" por modus tollens ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Anthony Weston, A construção do argumento (1987).' }],
    exercicios: [
      mc('Um argumento sólido é:', ['Válido e com premissas verdadeiras', 'Só válido', 'Só verdadeiro', 'Indutivo'], 0, 'Definição.'),
      mc('Virar um argumento válido ao contrário usa:', ['Modus tollens', 'Afirmação do consequente', 'Analogia', 'Indução'], 0, 'De ¬C a ¬(P1 ∧ P2).'),
      mc('Um argumento válido convence pouco se as premissas são:', ['Menos certas que a negação da conclusão', 'Muito certas', 'Evidentes', 'Definições'], 0, 'Plausibilidade.'),
      disc('Mostre como um argumento válido pode ser invertido por modus tollens, com exemplo.', ['Argumento', 'Inversão', 'Plausibilidade', 'Conclusão'])],
  },
}),

avaliacao('lf5-5', 'Avaliação integradora de Lógica formal', `
<h3>O que esta prova avalia</h3>
<p>É a avaliação de conclusão do percurso de Lógica formal. Reúne questões de todos os módulos (LF1 a LF5) e pede duas discursivas de síntese. A conclusão do percurso exige também a pesquisa de quatro semanas, planejada na aula anterior.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões dos cinco módulos.</li><li>Refaça uma tabela-verdade, uma prova e uma formalização com quantificadores.</li><li>Releia a rubrica da pesquisa (lf5-4).</li></ul>`,
[
  disc('Escolha um argumento de um texto não estudado no percurso: reconstrua-o, formalize-o, teste a validade (por prova ou contraexemplo) e discuta a premissa mais controversa.', ['Reconstrução', 'Formalização', 'Validade', 'Premissas']),
  disc('Responda, com base em Aristóteles, Frege e Gödel, à pergunta: o que a lógica pode e o que não pode fazer pelo conhecimento da verdade?', ['Aristóteles', 'Frege', 'Gödel', 'Argumentação']),
]),
];
