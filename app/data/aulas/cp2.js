// Ciência Política II — formação e autores (etapas 4 e 5 do percurso de Ciência Política).
// Antigos e medievais: formas de governo, bem comum e tirania; Maquiavel e Hobbes; Locke e Montesquieu;
// O Federalista e Tocqueville. Cada autor é lido nas próprias obras e situado no Brasil.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'cp2-1', titulo: 'Antigos e medievais: Platão, Aristóteles, Políbio, Agostinho e Tomás', duracao: '180 min',
  aprendera: ['Classificar as seis formas de governo de Aristóteles', 'Explicar o ciclo das constituições de Políbio e o regime misto', 'Explicar a relação entre justiça e poder em Agostinho', 'Explicar a definição tomista de lei e o problema da tirania'],
  prereq: ['Ciência Política I (módulo CP1)'],
  explicacao: `
<h3>O problema</h3>
<p>Qual é o melhor regime, e por que os regimes se corrompem? A pergunta atravessa a filosofia política antiga e medieval e ainda organiza a classificação dos governos.</p>
<h3>Platão</h3>
<p>Na <em>República</em> (livro VIII), Platão descreve a degeneração da cidade ideal em timocracia, oligarquia, democracia e tirania ${tag('fato')}. A tirania nasce, para ele, do excesso de liberdade da democracia ${tag('interpretacao')}.</p>
<h3>Aristóteles</h3>
<p>Na <em>Política</em> (livro III, cap. 7), Aristóteles combina dois critérios: quantos governam (um, poucos, muitos) e para quem (o bem comum ou o interesse dos governantes). Resultam as formas retas — monarquia, aristocracia e politeia — e as desviadas — tirania, oligarquia e democracia ${tag('fato')}. Ele e seus alunos reuniram descrições de muitas constituições; a <em>Constituição de Atenas</em> chegou até nós ${tag('fato')}. É o primeiro estudo comparado de regimes ${tag('interpretacao')}.</p>
<h3>Políbio</h3>
<p>Nas <em>Histórias</em> (livro VI), Políbio descreve um ciclo em que as formas simples se sucedem e se corrompem, e explica a estabilidade de Roma por uma constituição mista: cônsules (elemento monárquico), Senado (aristocrático) e assembleias (popular) ${tag('fato')}.</p>
<h3>Agostinho</h3>
<p>Na <em>Cidade de Deus</em> (IV, 4), Agostinho pergunta o que são os reinos sem justiça senão grandes bandos de ladrões ${tag('fato')}. Define a paz como a tranquilidade da ordem (XIX, 13) ${tag('fato')}.</p>
<h3>Tomás de Aquino</h3>
<p>Tomás define a lei como ordenação da razão para o bem comum, promulgada por quem tem o cuidado da comunidade (<em>Suma Teológica</em> I-II, q. 90, a. 4) ${tag('fato')}. A lei humana que contraria a lei natural já não é lei, mas corrupção da lei (I-II, q. 95, a. 2) ${tag('fato')}. Ele elogia o regime bem misturado de monarquia, aristocracia e participação popular (I-II, q. 105, a. 1) e, em <em>O Reino</em>, trata da tirania e de como resistir a ela por autoridade pública ${tag('fato')}.</p>
<h3>A doutrina</h3>
<p>O Catecismo admite a resistência armada à opressão só sob condições estritas: violações certas, graves e prolongadas dos direitos fundamentais, esgotamento de outros recursos, ausência de desordens piores, esperança fundada de êxito e impossibilidade de prever soluções melhores (CIC 2243) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Politeia', 'Em Aristóteles, governo de muitos para o bem comum.'],
    ['Formas desviadas', 'Governos voltados ao interesse dos governantes.'],
    ['Constituição mista', 'Combinação de elementos monárquico, aristocrático e popular.'],
    ['Tirania', 'Governo de um só em proveito próprio.'],
    ['Lei (Tomás)', 'Ordenação da razão para o bem comum, promulgada por quem cuida da comunidade.'],
  ],
  exemplos: `<p><strong>Classificando com os dois critérios:</strong> um conselho de famílias ricas que legisla para proteger seus negócios é oligarquia (poucos, interesse próprio); se o mesmo conselho governasse com competência para todos, seria aristocracia. O número não basta: o critério decisivo é o fim do governo.</p>`,
  contexto: `<p><strong>No mundo:</strong> a ideia de constituição mista passou por Políbio, Cícero e Tomás e influenciou o constitucionalismo moderno ${tag('interpretacao')}. <strong>No Brasil:</strong> a formação jurídica colonial passava pela Universidade de Coimbra, onde Francisco Suárez, autor da segunda escolástica, lecionou no início do século XVII ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Aristóteles julga o regime pelo fim e não só pelo número', tag: 'argumento',
    premissas: ['A cidade existe para a vida boa dos cidadãos.', 'Um governo que serve só aos governantes desvia a cidade de seu fim.', 'Isso pode ocorrer com um, poucos ou muitos governantes.'],
    conclusao: 'Logo, o critério decisivo para julgar um regime é se ele serve ao bem comum.',
    nota: 'O número de governantes continua relevante para descrever o regime; o fim, para avaliá-lo.',
  },
  objecoes: [
    { objecao: 'Aristóteles chama a democracia de forma desviada; logo era contra o governo do povo.', tag: 'debate',
      resposta: 'Para Aristóteles, "democracia" designava o governo dos pobres em proveito próprio; o governo de muitos para o bem comum ele chamava politeia e o considerava viável e estável, sobretudo com uma classe média forte (Política IV, 11). O vocabulário mudou: o que hoje chamamos democracia constitucional está mais perto da politeia.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: monte o quadro das seis formas de governo de Aristóteles com um exemplo histórico de cada uma, justificando a classificação pelos dois critérios.</p>`,
  fonte: {
    obra: 'Aristóteles, Política, livro III, caps. 6–7; Santo Agostinho, A Cidade de Deus, IV, 4; Santo Tomás, Suma Teológica I-II, q. 90, a. 4, e q. 105, a. 1', link: null,
    orientacao: `<p>Em Aristóteles, siga os dois critérios da classificação. Em Agostinho, o argumento sobre reinos sem justiça. Em Tomás, os quatro elementos da definição de lei e o elogio do regime misto.</p>`,
  },
  perguntas: [
    { p: 'Quais as formas retas segundo Aristóteles?', r: 'Monarquia, aristocracia e politeia.' },
    { p: 'Como Políbio explica a estabilidade de Roma?', r: 'Por uma constituição mista de cônsules, Senado e assembleias.' },
    { p: 'Como Tomás define a lei?', r: 'Ordenação da razão para o bem comum, promulgada por quem tem o cuidado da comunidade.' },
  ],
  exercicios: [
    mc('Governo de poucos em proveito próprio é, para Aristóteles:', ['Aristocracia', 'Oligarquia', 'Politeia', 'Monarquia'], 1, 'Forma desviada.'),
    mc('O ciclo das constituições e a constituição mista romana estão em:', ['Platão', 'Políbio', 'Agostinho', 'Hobbes'], 1, 'Histórias, livro VI.'),
    mc('"Sem justiça, que são os reinos senão grandes bandos de ladrões?" é de:', ['Tomás', 'Agostinho', 'Aristóteles', 'Cícero'], 1, 'Cidade de Deus IV, 4.'),
    mc('A lei humana contrária à lei natural é, para Tomás:', ['Lei perfeita', 'Corrupção da lei', 'Lei divina', 'Costume'], 1, 'I-II, q. 95, a. 2.'),
    mc('Segundo o Catecismo, a resistência armada à opressão:', ['É sempre lícita', 'Só é lícita sob condições estritas', 'Nunca é tratada', 'É obrigatória'], 1, 'CIC 2243.'),
    disc('Apresente o quadro das seis formas de governo com um exemplo histórico de cada, justificando pelos dois critérios.', ['Seis formas', 'Dois critérios', 'Exemplos históricos', 'Justificativa']),
  ],
  resumo: ['Platão: degeneração dos regimes.', 'Aristóteles: seis formas, dois critérios.', 'Políbio: constituição mista.', 'Agostinho: justiça e paz.', 'Tomás: lei, regime misto, tirania; CIC 2243.'],
  referencias: [
    { texto: 'Platão, A República.', livro: 'platao-republica' },
    { texto: 'Aristóteles, Política.', livro: 'aristoteles-politica' },
    { texto: 'Aristóteles, Constituição de Atenas.', livro: 'aristoteles-constituicao-atenas' },
    { texto: 'Santo Agostinho, A Cidade de Deus.', livro: 'agostinho-cidade' },
    { texto: 'Santo Tomás de Aquino, O Reino.', livro: 'tomas-reino' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro das seis formas', 'Ler os textos indicados'],
  revisao: [['Seis formas', 'Número e fim.'], ['Políbio', 'Constituição mista.'], ['Tomás', 'Lei para o bem comum.']],
  avancado: {
    texto: `<h3>Cícero e a definição de república</h3>
<p>Cícero (<em>Da república</em>, I, 39) definiu a república como "coisa do povo", entendendo povo como associação fundada no consenso sobre o direito e na utilidade comum ${tag('fato')}. Agostinho discute essa definição (<em>Cidade de Deus</em> XIX, 21) e conclui que, sem verdadeira justiça, Roma não teria sido república nesse sentido estrito; propõe então uma definição mais ampla (XIX, 24) ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Agostinho, A Cidade de Deus, livro XIX.', livro: 'agostinho-cidade' }],
    exercicios: [
      mc('"Coisa do povo" é a definição de república de:', ['Platão', 'Cícero', 'Tomás', 'Políbio'], 1, 'Da república I, 39.'),
      mc('Agostinho discute a definição de Cícero em:', ['Confissões', 'Cidade de Deus XIX', 'Solilóquios', 'Regra'], 1, 'XIX, 21 e 24.'),
      mc('Na definição de Cícero, o povo se funda:', ['Na raça', 'No consenso sobre o direito e na utilidade comum', 'No território', 'Na religião apenas'], 1, 'Associação.'),
      disc('Compare as definições de república de Cícero e de Agostinho e explique por que Agostinho propõe uma definição mais ampla.', ['Definição de Cícero', 'Crítica de Agostinho', 'Nova definição', 'Consequência'])],
  },
}),

aula({
  id: 'cp2-2', titulo: 'Maquiavel e Hobbes: o poder e o nascimento do Estado moderno', duracao: '150 min',
  aprendera: ['Explicar virtù e fortuna em Maquiavel', 'Distinguir o Príncipe e os Discursos', 'Reconstruir o argumento de Hobbes do estado de natureza ao soberano', 'Avaliar as duas obras à luz da moral cristã'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>A política deve ser pensada como ela deveria ser ou como ela efetivamente é? E por que aceitar um poder soberano?</p>
<h3>Maquiavel</h3>
<p><em>O Príncipe</em>, escrito por volta de 1513 e publicado em 1532, propõe tratar da "verdade efetiva da coisa" e não de repúblicas imaginadas (cap. 15) ${tag('fato')}. O príncipe precisa de <em>virtù</em> — capacidade de agir com energia e oportunidade — para dominar a <em>fortuna</em>, que Maquiavel diz governar metade das ações humanas (cap. 25) ${tag('fato')}. Diante da escolha, julga mais seguro ser temido que amado, desde que sem ódio (cap. 17) ${tag('fato')}. Nos <em>Discursos sobre a primeira década de Tito Lívio</em>, defende a república e a liberdade dos cidadãos ${tag('fato')}. Se Maquiavel separa a política da moral ou apenas descreve, é debate entre intérpretes ${tag('debate')}.</p>
<h3>Hobbes</h3>
<p>No <em>Leviatã</em> (1651), Hobbes imagina homens sem poder comum: cada um teme os outros, e a vida seria "solitária, pobre, sórdida, brutal e curta" (cap. 13) ${tag('fato')}. Para sair dessa guerra de todos contra todos, as pessoas transferem por pacto seu direito a um soberano, que garante a paz (cap. 17) ${tag('fato')}. O soberano é absoluto, mas o súdito conserva o direito de defender a própria vida (cap. 21) ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Os escritos de Maquiavel foram incluídos no Índice de livros proibidos em 1559 ${tag('fato')}. A tradição católica recusa que o fim justifique meios intrinsecamente maus (CIC 1753) ${tag('doutrina')}, mas reconhece a utilidade de descrever com realismo como o poder opera ${tag('argumento')}.</p>`,
  vocabulario: [
    ['Virtù', 'Em Maquiavel, energia e habilidade para agir no momento certo.'],
    ['Fortuna', 'Em Maquiavel, o acaso e as circunstâncias que escapam ao controle.'],
    ['Estado de natureza', 'Situação hipotética sem poder comum.'],
    ['Pacto', 'Acordo pelo qual os indivíduos instituem o soberano.'],
    ['Soberano (Hobbes)', 'Pessoa ou assembleia que detém o poder instituído pelo pacto.'],
  ],
  exemplos: `<p><strong>O argumento de Hobbes passo a passo:</strong> (1) as pessoas são aproximadamente iguais em força e astúcia; (2) disputam bens escassos e temem umas às outras; (3) sem poder comum, cada um ataca para se prevenir; (4) a vida fica insegura para todos; (5) todos ganham ao instituir um soberano que garanta a paz. Cada premissa pode ser examinada separadamente.</p>`,
  contexto: `<p><strong>No mundo:</strong> Hobbes escreveu durante e depois da guerra civil inglesa (1642–1651) ${tag('fato')}. <strong>No Brasil:</strong> a distinção entre a força do Estado e sua legitimidade aparece no debate sobre o uso da força policial, regulado pela Constituição e pelas leis ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que, para Hobbes, indivíduos racionais instituem um soberano', tag: 'argumento',
    premissas: ['Sem poder comum, todos vivem sob ameaça constante de morte violenta.', 'Indivíduos racionais desejam antes de tudo conservar a vida.', 'Um soberano capaz de punir garante a paz que nenhum indivíduo garante sozinho.'],
    conclusao: 'Logo, indivíduos racionais aceitam transferir seu direito a um soberano.',
    nota: 'Críticos perguntam quem protege os súditos do próprio soberano; Locke responderá com limites e direito de resistência.',
  },
  objecoes: [
    { objecao: 'Maquiavel só disse a verdade que todos os políticos praticam.', tag: 'debate',
      resposta: 'Descrever práticas reais é útil, e Maquiavel o fez com agudeza. Mas da frequência de um comportamento não se segue que ele seja bom. Há também evidência de que reputação, confiança e cumprimento de regras produzem governos mais duradouros. A descrição realista e o juízo moral respondem a perguntas diferentes.' },
  ],
  aplicacao: `<p>Escolha um episódio político documentado e analise-o com os conceitos de virtù e fortuna; depois, julgue-o moralmente, separando claramente as duas partes.</p>`,
  fonte: {
    obra: 'Nicolau Maquiavel, O Príncipe (1532), caps. 15, 17 e 25; Thomas Hobbes, Leviatã (1651), caps. 13, 17 e 21', link: null,
    orientacao: `<p>Em Maquiavel, compare o cap. 15 (verdade efetiva) com o cap. 25 (fortuna). Em Hobbes, siga o argumento do cap. 13 ao 17 e veja o limite do cap. 21.</p>`,
  },
  perguntas: [
    { p: 'O que é a "verdade efetiva da coisa"?', r: 'A proposta de Maquiavel de tratar a política como é, não como deveria ser.' },
    { p: 'Como Hobbes descreve a vida no estado de natureza?', r: 'Solitária, pobre, sórdida, brutal e curta.' },
    { p: 'Que direito o súdito conserva em Hobbes?', r: 'O de defender a própria vida.' },
  ],
  exercicios: [
    mc('O Príncipe foi publicado em:', ['1513', '1532', '1651', '1689'], 1, 'Escrito por volta de 1513.'),
    mc('A fortuna governa, para Maquiavel, cerca de:', ['Nada', 'Metade das ações', 'Todas as ações', 'Só a guerra'], 1, 'Cap. 25.'),
    mc('A defesa da república por Maquiavel está nos:', ['Discursos sobre Tito Lívio', 'Leviatã', 'Dois tratados', 'Federalista'], 0, 'Republicanismo.'),
    mc('A "guerra de todos contra todos" é de:', ['Locke', 'Hobbes', 'Rousseau', 'Montesquieu'], 1, 'Leviatã.'),
    mc('Segundo o Catecismo, um fim bom:', ['Justifica qualquer meio', 'Não justifica meios intrinsecamente maus', 'Dispensa a moral', 'Só vale na guerra'], 1, 'CIC 1753.'),
    disc('Analise um episódio político com virtù e fortuna e, em seguida, julgue-o moralmente, separando as duas partes.', ['Episódio documentado', 'Análise com os conceitos', 'Juízo moral', 'Separação clara']),
  ],
  resumo: ['Maquiavel: verdade efetiva, virtù, fortuna.', 'Príncipe e Discursos.', 'Hobbes: estado de natureza, pacto, soberano.', 'Limite: defesa da vida.', 'CIC 1753: o fim não justifica meios maus.'],
  referencias: [
    { texto: 'Nicolau Maquiavel, O Príncipe (1532).' },
    { texto: 'Thomas Hobbes, Leviatã (1651).' },
    { texto: 'Catecismo da Igreja Católica (1992), §§ 1750–1756.', livro: 'cic' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a análise do episódio', 'Ler os capítulos indicados'],
  revisao: [['Virtù', 'Energia e oportunidade.'], ['Hobbes', 'Pacto e soberano.'], ['1559', 'Índice.']],
  avancado: {
    texto: `<h3>O dilema do prisioneiro e Hobbes</h3>
<p>A teoria dos jogos formaliza situações em que cada um, buscando o próprio interesse, chega a um resultado pior para todos: é o dilema do prisioneiro ${tag('fato')}. Muitos intérpretes leem o estado de natureza de Hobbes como um dilema desse tipo, resolvido por um poder que pune a defecção ${tag('interpretacao')}. Outros mostram que, em interações repetidas, a cooperação pode surgir sem soberano ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Thomas Hobbes, Leviatã (1651), caps. 13–15.' }],
    exercicios: [
      mc('No dilema do prisioneiro, o interesse individual leva a:', ['Resultado melhor para todos', 'Resultado pior para todos', 'Empate sempre', 'Nada'], 1, 'Teoria dos jogos.'),
      mc('Ler Hobbes como dilema do prisioneiro é:', ['Fato textual', 'Interpretação', 'Doutrina', 'Lei'], 1, 'Intérpretes.'),
      mc('Em interações repetidas, a cooperação:', ['É impossível', 'Pode surgir sem soberano', 'Exige guerra', 'Não existe'], 1, 'Debate.'),
      disc('Explique o dilema do prisioneiro e discuta se ele representa bem o estado de natureza de Hobbes.', ['Dilema explicado', 'Relação com Hobbes', 'Objeção', 'Conclusão'])],
  },
}),

aula({
  id: 'cp2-3', titulo: 'Locke e Montesquieu: consentimento, direitos e separação dos poderes', duracao: '150 min',
  aprendera: ['Explicar o estado de natureza e a propriedade em Locke', 'Explicar o consentimento e o direito de resistência', 'Explicar a separação dos poderes em Montesquieu', 'Identificar essas ideias na Constituição brasileira'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se o poder é necessário, como impedir que se volte contra os governados? Locke e Montesquieu propõem limites: consentimento, direitos e divisão do poder.</p>
<h3>Locke</h3>
<p>No <em>Segundo tratado sobre o governo</em> (publicado em 1689), o estado de natureza já é regido pela lei natural, que proíbe lesar a vida, a saúde, a liberdade e os bens de outrem ${tag('fato')}. Os homens formam a sociedade política por consentimento, para proteger o que Locke chama, em conjunto, de propriedade: vidas, liberdades e bens (§ 123) ${tag('fato')}. Distingue os poderes legislativo, executivo e federativo (§§ 143–148) e afirma que, quando o governo viola a confiança recebida, o povo pode resistir (§§ 221–222) ${tag('fato')}.</p>
<h3>Montesquieu</h3>
<p>Em <em>O espírito das leis</em> (1748), Montesquieu afirma que, para que não se abuse do poder, é preciso que, pela disposição das coisas, o poder freie o poder (XI, 4) ${tag('fato')}. Ao descrever a constituição da Inglaterra (XI, 6), distingue legislativo, executivo e judiciário e sustenta que não há liberdade se os três estiverem nas mesmas mãos ${tag('fato')}. Também relaciona as leis ao clima, aos costumes e ao comércio ${tag('fato')}, tese hoje vista como parcialmente datada ${tag('interpretacao')}.</p>
<h3>No Brasil</h3>
<p>A Constituição de 1988 inclui a separação dos Poderes entre as cláusulas pétreas, que não podem ser abolidas por emenda (art. 60, § 4º, III) ${tag('fato')}. A Constituição de 1824 acrescentou um quarto poder, o Moderador, exercido pelo imperador, inspirado em Benjamin Constant ${tag('fato')}.</p>`,
  vocabulario: [
    ['Consentimento', 'Acordo dos governados que funda a autoridade política.'],
    ['Propriedade (Locke)', 'Vidas, liberdades e bens.'],
    ['Direito de resistência', 'Direito do povo de resistir ao governo que viola a confiança.'],
    ['Separação dos poderes', 'Divisão das funções do Estado entre órgãos distintos.'],
    ['Cláusula pétrea', 'Dispositivo constitucional que não pode ser abolido por emenda.'],
  ],
  exemplos: `<p><strong>O poder freando o poder no Brasil:</strong> o Congresso aprova uma lei; o presidente pode vetá-la; o Congresso pode derrubar o veto; o Supremo Tribunal Federal pode declarar a lei inconstitucional. Nenhum Poder decide sozinho do começo ao fim.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Declaração de Independência dos Estados Unidos (1776) e a Declaração dos Direitos do Homem e do Cidadão (1789) ecoam ideias de Locke e Montesquieu; o artigo 16 da Declaração francesa afirma que não tem constituição a sociedade sem garantia dos direitos e separação dos poderes ${tag('fato')}. <strong>No Brasil:</strong> o Poder Moderador de 1824 mostra uma adaptação original dessas ideias ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que dividir o poder protege a liberdade', tag: 'argumento',
    premissas: ['Quem detém poder tende a ampliá-lo.', 'Se um mesmo órgão faz, executa e julga as leis, ninguém pode detê-lo.', 'Se as funções estão em órgãos distintos, cada um pode conter os outros.'],
    conclusao: 'Logo, a separação dos poderes reduz o risco de abuso e protege a liberdade.',
    nota: 'O argumento depende de que os órgãos sejam realmente independentes, e não apenas distintos no papel.',
  },
  objecoes: [
    { objecao: 'A separação dos poderes paralisa o governo e impede reformas.', tag: 'debate',
      resposta: 'A divisão do poder torna as decisões mais lentas e exige negociação, o que é custo real. Mas é exatamente esse custo que impede mudanças arbitrárias. O equilíbrio entre eficácia e controle é questão de desenho institucional, que a ciência política compara entre países com dados.' },
  ],
  aplicacao: `<p>Escolha um caso recente de conflito entre Poderes no Brasil e descreva como cada Poder usou suas competências constitucionais, citando os artigos, sem julgar ainda quem tinha razão.</p>`,
  fonte: {
    obra: 'John Locke, Segundo tratado sobre o governo (1689), §§ 4–6, 123, 143–148, 221–222; Montesquieu, O espírito das leis (1748), XI, 4 e 6', link: null,
    orientacao: `<p>Em Locke, siga do estado de natureza ao direito de resistência. Em Montesquieu, leia XI, 6 e localize a frase sobre liberdade e a reunião dos poderes. Compare as duas divisões dos poderes.</p>`,
  },
  perguntas: [
    { p: 'O que Locke chama de propriedade?', r: 'Vidas, liberdades e bens.' },
    { p: 'Quais os poderes em Locke?', r: 'Legislativo, executivo e federativo.' },
    { p: 'Onde a Constituição de 1988 protege a separação dos Poderes contra emendas?', r: 'No art. 60, § 4º, III (cláusulas pétreas).' },
  ],
  exercicios: [
    mc('"O poder freie o poder" é de:', ['Hobbes', 'Montesquieu', 'Locke', 'Maquiavel'], 1, 'Espírito das leis XI, 4.'),
    mc('O poder federativo, em Locke, trata de:', ['Impostos', 'Relações exteriores', 'Julgamentos', 'Eleições'], 1, 'Guerra, paz e alianças.'),
    mc('O Poder Moderador existiu na Constituição de:', ['1824', '1891', '1946', '1988'], 0, 'Império.'),
    mc('O artigo 16 da Declaração de 1789 trata de:', ['Impostos', 'Garantia de direitos e separação dos poderes', 'Religião', 'Propriedade da terra'], 1, 'Constituição.'),
    mc('Para Locke, o povo pode resistir quando:', ['Perde uma eleição', 'O governo viola a confiança recebida', 'Os impostos sobem', 'Nunca'], 1, '§§ 221–222.'),
    disc('Descreva um conflito recente entre Poderes no Brasil, mostrando as competências usadas por cada um com os artigos da Constituição.', ['Caso documentado', 'Competências de cada Poder', 'Artigos citados', 'Descrição sem juízo']),
  ],
  resumo: ['Locke: lei natural, consentimento, propriedade.', 'Locke: resistência.', 'Montesquieu: o poder freia o poder.', 'Três poderes e liberdade.', 'CF art. 60 § 4º; Poder Moderador (1824).'],
  referencias: [
    { texto: 'John Locke, Dois tratados sobre o governo (1689).', livro: 'locke-dois-tratados' },
    { texto: 'Montesquieu, O espírito das leis (1748).' },
    { texto: 'Constituição da República Federativa do Brasil (1988), art. 60.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a descrição do conflito entre Poderes', 'Ler os textos indicados'],
  revisao: [['Locke', 'Consentimento e resistência.'], ['Montesquieu', 'Três poderes.'], ['Cláusula pétrea', 'Art. 60, § 4º.']],
  avancado: {
    texto: `<h3>Locke e a tolerância</h3>
<p>Na <em>Carta sobre a tolerância</em> (1689), Locke defende que o magistrado civil cuida dos bens civis e não da salvação das almas, mas exclui da tolerância os católicos, por lealdade a um poder estrangeiro, e os ateus ${tag('fato')}. A Igreja ensinou depois, no Concílio Vaticano II, o direito à liberdade religiosa fundado na dignidade da pessoa (<em>Dignitatis humanae</em>, 1965) ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'John Locke, Carta sobre a tolerância (1689).' }],
    exercicios: [
      mc('A Carta sobre a tolerância é de:', ['1651', '1689', '1748', '1789'], 1, 'Locke.'),
      mc('Locke excluía da tolerância:', ['Os protestantes', 'Os católicos e os ateus', 'Ninguém', 'Os judeus apenas'], 1, 'Fato textual.'),
      mc('A liberdade religiosa no Vaticano II está em:', ['Gaudium et spes', 'Dignitatis humanae', 'Lumen gentium', 'Dei Verbum'], 1, '1965.'),
      disc('Compare o fundamento da tolerância em Locke e o da liberdade religiosa em Dignitatis humanae.', ['Locke', 'Dignitatis humanae', 'Diferença de fundamento', 'Consequências'])],
  },
}),

aula({
  id: 'cp2-4', titulo: 'O Federalista e Tocqueville: república extensa, freios e contrapesos e democracia na América', duracao: '150 min',
  aprendera: ['Explicar o argumento de Madison sobre as facções (Federalista nº 10)', 'Explicar freios e contrapesos (Federalista nº 51)', 'Explicar a igualdade de condições e as associações em Tocqueville', 'Explicar a tirania da maioria e o despotismo brando'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Como construir um governo popular que não seja dominado por facções nem se torne opressor da minoria?</p>
<h3>O Federalista</h3>
<p><em>O Federalista</em> reúne 85 artigos publicados em 1787 e 1788 por Alexander Hamilton, James Madison e John Jay, sob o pseudônimo Publius, em defesa da nova Constituição dos Estados Unidos ${tag('fato')}. No nº 10, Madison argumenta que as facções não podem ser eliminadas sem destruir a liberdade, mas seus efeitos podem ser controlados por uma república extensa, com muitos interesses que dificultam a formação de uma maioria opressora ${tag('fato')}. No nº 51, afirma que a ambição deve contrabalançar a ambição e que, se os homens fossem anjos, nenhum governo seria necessário ${tag('fato')}.</p>
<h3>Tocqueville</h3>
<p>Em <em>A democracia na América</em> (1835 e 1840), Alexis de Tocqueville descreve a igualdade de condições como o fato gerador da sociedade americana ${tag('fato')}. Destaca as associações civis, a liberdade local e a religião como contrapesos ao individualismo ${tag('fato')}. Alerta para a tirania da maioria e para um despotismo brando, em que um poder tutelar imenso dispensaria os cidadãos de pensar e de agir por si (vol. 2, parte IV, cap. 6) ${tag('fato')}.</p>
<h3>No Brasil</h3>
<p>A Constituição de 1891 adotou a federação e o presidencialismo inspirados nos Estados Unidos, com forte atuação de Rui Barbosa, e deu ao país o nome de Estados Unidos do Brasil ${tag('fato')}. A doutrina social da Igreja valoriza os corpos intermediários e a subsidiariedade, em linha com a ênfase de Tocqueville nas associações (Compêndio da Doutrina Social, 185–186) ${tag('doutrina')}.</p>`,
  vocabulario: [
    ['Facção', 'Grupo unido por interesse contrário aos direitos de outros ou ao interesse permanente da comunidade (Madison).'],
    ['Freios e contrapesos', 'Mecanismos pelos quais cada Poder limita os outros.'],
    ['Igualdade de condições', 'Em Tocqueville, ausência de hierarquias hereditárias de status.'],
    ['Tirania da maioria', 'Opressão das minorias pela maioria.'],
    ['Corpos intermediários', 'Associações entre o indivíduo e o Estado.'],
  ],
  exemplos: `<p><strong>A república extensa:</strong> numa cidade pequena com dois grandes interesses, um deles pode formar maioria e oprimir o outro. Num país grande, com centenas de interesses regionais, profissionais e religiosos, qualquer maioria precisa ser uma coalizão de grupos diferentes, que dificilmente concordam em oprimir alguém. Esse é o argumento de Madison no nº 10.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Constituição dos Estados Unidos, de 1787, é a constituição escrita nacional mais antiga ainda em vigor ${tag('fato')}. <strong>No Brasil:</strong> a federação de 1891 deu grande autonomia aos estados, base da "política dos governadores" na Primeira República ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que Madison prefere controlar os efeitos das facções a eliminar suas causas', tag: 'argumento',
    premissas: ['As facções nascem da liberdade e da diversidade de opiniões e interesses.', 'Eliminar suas causas exigiria suprimir a liberdade ou uniformizar as opiniões.', 'Suprimir a liberdade seria um mal pior que as facções.'],
    conclusao: 'Logo, o remédio está em controlar os efeitos das facções com instituições, não em eliminá-las.',
    nota: 'A solução institucional de Madison combina representação, extensão territorial e separação dos poderes.',
  },
  objecoes: [
    { objecao: 'Tocqueville elogiava a América; logo sua análise não serve para outros países.', tag: 'debate',
      resposta: 'Tocqueville escrevia para os franceses e usava a América como caso para entender uma tendência geral, a igualdade de condições. Ele também criticou a escravidão e o tratamento dos indígenas. Seu método comparativo e seus conceitos, como despotismo brando e arte da associação, são usados para analisar muitos países.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: uma ficha de leitura do Federalista nº 51 (tese, argumentos, conceitos, objeções possíveis e aplicação ao Brasil), conforme o método do Degrau 0.</p>`,
  fonte: {
    obra: 'Alexander Hamilton, James Madison e John Jay, O Federalista (1787–1788), nºs 10 e 51; Alexis de Tocqueville, A democracia na América (1835–1840), vol. 2, parte II, cap. 5, e parte IV, cap. 6', link: null,
    orientacao: `<p>No Federalista, siga o argumento do nº 10 sobre as facções e o do nº 51 sobre ambição e contrapesos. Em Tocqueville, leia o capítulo sobre as associações e o sobre o despotismo brando.</p>`,
  },
  perguntas: [
    { p: 'Quem escreveu O Federalista?', r: 'Hamilton, Madison e Jay, sob o pseudônimo Publius.' },
    { p: 'Qual o remédio de Madison contra as facções?', r: 'Controlar seus efeitos por uma república extensa e instituições adequadas.' },
    { p: 'O que é o despotismo brando em Tocqueville?', r: 'Um poder tutelar imenso que dispensa os cidadãos de pensar e agir por si.' },
  ],
  exercicios: [
    mc('"Se os homens fossem anjos, nenhum governo seria necessário" está no Federalista nº:', ['1', '10', '51', '85'], 2, 'Madison.'),
    mc('O Federalista tem:', ['10 artigos', '51 artigos', '85 artigos', '100 artigos'], 2, '1787–1788.'),
    mc('Para Tocqueville, o fato gerador da sociedade americana é:', ['A riqueza', 'A igualdade de condições', 'A religião', 'A guerra'], 1, 'Vol. 1.'),
    mc('A Constituição de 1891 deu ao país o nome de:', ['Império do Brasil', 'Estados Unidos do Brasil', 'República Federativa do Brasil', 'Brasil Unido'], 1, 'Federação.'),
    mc('A ênfase de Tocqueville nas associações aproxima-se, na doutrina social, da:', ['Luta de classes', 'Subsidiariedade', 'Estatização', 'Autarquia'], 1, 'Compêndio 185–186.'),
    disc('Entregue a ficha de leitura do Federalista nº 51 com tese, argumentos, conceitos, objeções e aplicação ao Brasil.', ['Tese', 'Argumentos', 'Conceitos', 'Objeções e aplicação']),
  ],
  resumo: ['Federalista: 85 artigos, Publius.', 'Nº 10: facções e república extensa.', 'Nº 51: ambição contra ambição.', 'Tocqueville: igualdade, associações, despotismo brando.', 'CF 1891; subsidiariedade.'],
  referencias: [
    { texto: 'Alexander Hamilton, James Madison e John Jay, O Federalista (1787–1788).' },
    { texto: 'Alexis de Tocqueville, A democracia na América (1835–1840).', livro: 'tocqueville-democracia' },
    { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004), nn. 185–186.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a ficha do Federalista nº 51', 'Ler os textos indicados'],
  revisao: [['Nº 10', 'Facções.'], ['Nº 51', 'Contrapesos.'], ['Tocqueville', 'Associações.']],
  avancado: {
    texto: `<h3>Antifederalistas</h3>
<p>Os opositores da Constituição americana, chamados antifederalistas, temiam um governo central distante e exigiram uma declaração de direitos; as dez primeiras emendas, conhecidas como <em>Bill of Rights</em>, foram ratificadas em 1791 ${tag('fato')}. O debate entre centralização e autonomia local continua em todas as federações ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Alexander Hamilton, James Madison e John Jay, O Federalista (1787–1788), nº 84.' }],
    exercicios: [
      mc('O Bill of Rights foi ratificado em:', ['1776', '1787', '1791', '1865'], 2, 'Dez emendas.'),
      mc('Os antifederalistas temiam:', ['Um governo central distante', 'A monarquia inglesa apenas', 'A independência', 'Os tribunais'], 0, 'Autonomia local.'),
      mc('O Bill of Rights corresponde às:', ['Cinco primeiras emendas', 'Dez primeiras emendas', 'Vinte primeiras', 'Leis estaduais'], 1, 'Direitos.'),
      disc('Compare o debate federalista e antifederalista com o debate sobre autonomia de estados e municípios no Brasil.', ['Debate americano', 'Debate brasileiro', 'Semelhanças e diferenças', 'Fontes'])],
  },
}),

avaliacao('cp2-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre os pensadores antigos, medievais e modernos estudados no módulo, e duas discursivas de comparação.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro das seis formas de governo e a ficha do Federalista nº 51.</li><li>Revise as passagens centrais de cada autor.</li></ul>`,
[
  disc('Compare como Hobbes, Locke e Madison justificam e limitam o poder político, citando passagens das obras.', ['Hobbes', 'Locke', 'Madison', 'Comparação com passagens']),
  disc('Mostre como uma ideia de um autor antigo ou medieval (regime misto, bem comum ou tirania) reaparece nas instituições brasileiras atuais, distinguindo influência documentada de semelhança.', ['Ideia do autor', 'Instituição brasileira', 'Influência ou semelhança', 'Fontes']),
]),
];
