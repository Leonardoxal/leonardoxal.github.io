// Relações Internacionais III — escolas e debates (etapas 6 e 7 do percurso de Relações Internacionais).
// Realismo e liberalismo; construtivismo, escola inglesa e teorias críticas; guerra justa hoje; soberania, intervenção e ordem mundial.
import { tag } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'ri3-1', titulo: 'Realismo e liberalismo', duracao: '150 min',
  aprendera: ['Expor as teses centrais do realismo', 'Expor as teses do liberalismo e do institucionalismo', 'Aplicar as duas teorias a um mesmo caso', 'Avaliar forças e limites de cada uma'],
  prereq: ['Relações Internacionais II (módulo RI2)'],
  explicacao: `
<h3>O problema</h3>
<p>Por que os Estados ora competem, ora cooperam? Duas grandes teorias dão respostas diferentes.</p>
<h3>Realismo</h3>
<p>O realismo sustenta que os Estados são os atores principais, que buscam segurança e poder num sistema sem autoridade superior, e que a cooperação é frágil ${tag('fato')}. Seus clássicos incluem Tucídides, Maquiavel, Hobbes e, no século XX, Morgenthau e Waltz ${tag('fato')}.</p>
<h3>Liberalismo</h3>
<p>O liberalismo enfatiza instituições, comércio, democracia e direito como fontes de cooperação ${tag('fato')}. Os Catorze Pontos do presidente Woodrow Wilson (1918) propunham uma liga de nações e diplomacia aberta ${tag('fato')}. Robert Keohane e Joseph Nye, em Poder e interdependência (1977), descreveram a "interdependência complexa" ${tag('fato')}. Keohane, em After Hegemony (1984), mostrou como instituições podem manter a cooperação mesmo sem uma potência dominante ${tag('fato')}.</p>
<h3>Comparação</h3>
<p>Diante de um acordo comercial, o realista pergunta quem ganha mais em poder relativo; o liberal, se todos ganham em termos absolutos e como as instituições reduzem a desconfiança ${tag('interpretacao')}. Cada teoria ilumina aspectos diferentes ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Ganhos relativos', 'Ganho de um Estado em comparação com outros.'],
    ['Ganhos absolutos', 'Ganho de um Estado considerado em si mesmo.'],
    ['Interdependência complexa', 'Múltiplos canais de ligação entre sociedades, com menor papel da força.'],
    ['Regime internacional', 'Conjunto de regras e práticas num tema (comércio, clima).'],
    ['Institucionalismo', 'Teoria que explica a cooperação pelas instituições.'],
  ],
  exemplos: `<p><strong>O Mercosul por duas lentes:</strong> o realista vê o bloco como modo de Brasil e Argentina administrarem rivalidade e ampliarem influência regional; o liberal, como instituição que reduz custos de comércio e cria confiança. As duas leituras capturam algo verdadeiro.</p>`,
  contexto: `<p><strong>No mundo:</strong> a Organização Mundial do Comércio, criada em 1995, é exemplo de instituição estudada pelo institucionalismo ${tag('fato')}. <strong>No Brasil:</strong> a diplomacia brasileira tem tradição de valorizar o multilateralismo e o direito internacional ${tag('interpretacao')}.</p>`,
  argumento: {
    titulo: 'Por que as instituições importam mesmo para realistas', tag: 'argumento',
    premissas: ['A cooperação é difícil quando os Estados desconfiam uns dos outros.', 'Instituições fornecem informação, regras e mecanismos de verificação.', 'Isso reduz a desconfiança e torna a cooperação mais provável.'],
    conclusao: 'Logo, instituições podem facilitar a cooperação mesmo num mundo competitivo.',
    nota: 'É o núcleo do argumento de Keohane.',
  },
  objecoes: [
    { objecao: 'O liberalismo é ingênuo diante de guerras e potências agressivas.', tag: 'debate',
      resposta: 'Há liberais ingênuos, mas a teoria institucionalista reconhece interesses e poder; afirma apenas que instituições mudam os incentivos. Guerras recentes mostraram os limites das instituições, e o debate entre as escolas continua.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 1): aplique realismo e liberalismo a um mesmo conflito ou acordo atual, mostrando o que cada teoria explica e o que deixa de fora.</p>`,
  fonte: {
    obra: 'Hans Morgenthau, A política entre as nações (1948), capítulo 1; Woodrow Wilson, discurso dos Catorze Pontos (1918)', link: null,
    orientacao: `<p>Compare a visão de política de cada texto e os meios propostos para a paz.</p>`,
  },
  perguntas: [
    { p: 'Quais os atores principais para o realismo?', r: 'Os Estados.' },
    { p: 'O que é interdependência complexa?', r: 'Múltiplos canais de ligação entre sociedades, com menor papel da força.' },
    { p: 'Qual a diferença entre ganhos relativos e absolutos?', r: 'Relativos comparam com outros Estados; absolutos consideram o Estado em si.' },
  ],
  exercicios: [
    mc('Os Catorze Pontos são de:', ['1918', '1945', '1977', '1648'], 0, 'Wilson.'),
    mc('Poder e interdependência é de:', ['Keohane e Nye', 'Morgenthau', 'Waltz', 'Aron'], 0, '1977.'),
    mc('A OMC foi criada em:', ['1995', '1945', '1991', '2001'], 0, 'Comércio.'),
    mc('O realista enfatiza ganhos:', ['Relativos', 'Absolutos', 'Morais', 'Culturais'], 0, 'Poder.'),
    mc('After Hegemony é de:', ['Keohane', 'Nye', 'Wilson', 'Bull'], 0, '1984.'),
    disc('Aplique as duas teorias ao caso escolhido.', ['Caso', 'Realismo', 'Liberalismo', 'Avaliação']),
  ],
  resumo: ['Realismo: Estados, poder, segurança.', 'Liberalismo: instituições, comércio, democracia.', 'Wilson (1918).', 'Keohane e Nye (1977, 1984).', 'Ganhos relativos e absolutos.'],
  referencias: [
    { texto: 'Hans Morgenthau, A política entre as nações (1948).' },
    { texto: 'Robert Keohane e Joseph Nye, Poder e interdependência (1977).' },
    { texto: 'Kenneth Waltz, Teoria da política internacional (1979).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a aplicação', 'Ler a fonte indicada'],
  revisao: [['Realismo', 'Poder.'], ['Liberalismo', 'Instituições.'], ['Relativos', 'Comparação.']],
  avancado: {
    texto: `<h3>O dilema de segurança</h3>
<p>Quando um Estado aumenta suas defesas para se sentir seguro, outros podem ver nisso uma ameaça e reagir, o que reduz a segurança de todos ${tag('fato')}. O conceito foi desenvolvido por autores como John Herz e Robert Jervis ${tag('fato')}. Medidas de confiança, como transparência e inspeções mútuas, buscam atenuar o dilema ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Kenneth Waltz, Teoria da política internacional (1979).' }],
    exercicios: [
      mc('No dilema de segurança, armar-se pode:', ['Reduzir a segurança de todos', 'Garantir paz sempre', 'Eliminar rivais', 'Nada'], 0, 'Conceito.'),
      mc('Um autor ligado ao conceito é:', ['Robert Jervis', 'Kant', 'Wilson', 'Grócio'], 0, 'Teoria.'),
      mc('Medidas para atenuar o dilema incluem:', ['Transparência e inspeções', 'Segredo total', 'Corrida armamentista', 'Isolamento'], 0, 'Confiança.'),
      disc('Explique o dilema de segurança com um exemplo histórico ou atual.', ['Conceito', 'Exemplo', 'Dinâmica', 'Saídas'])],
  },
}),

aula({
  id: 'ri3-2', titulo: 'Construtivismo, escola inglesa e teorias críticas', duracao: '150 min',
  aprendera: ['Expor a tese construtivista de Wendt', 'Explicar a noção de sociedade internacional de Bull', 'Conhecer a teoria da dependência e o sistema-mundo', 'Montar um quadro comparativo de teorias'],
  prereq: ['Aula anterior'],
  explicacao: `
<h3>O problema</h3>
<p>O poder e os interesses são dados fixos, ou dependem de ideias, identidades e normas?</p>
<h3>Construtivismo</h3>
<p>Alexander Wendt publicou em 1992 o artigo "A anarquia é o que os Estados fazem dela", defendendo que identidades e interesses se formam na interação ${tag('fato')}. Em Social Theory of International Politics (1999), desenvolveu essa abordagem ${tag('fato')}. Para o construtivismo, normas e ideias moldam o que os Estados querem ${tag('fato')}.</p>
<h3>Escola inglesa</h3>
<p>Hedley Bull, em A sociedade anárquica (1977), sustentou que, mesmo sem governo mundial, os Estados formam uma "sociedade internacional" com regras e instituições comuns, como a diplomacia e o direito internacional ${tag('fato')}.</p>
<h3>Teorias críticas</h3>
<p>Fernando Henrique Cardoso e Enzo Faletto, em Dependência e desenvolvimento na América Latina (1969), analisaram como a inserção dependente na economia mundial condiciona o desenvolvimento ${tag('fato')}. Immanuel Wallerstein propôs a teoria do sistema-mundo, com centro, semiperiferia e periferia ${tag('fato')}.</p>
<h3>Avaliação</h3>
<p>Uma antropologia realista reconhece que ideias e culturas pesam, mas que há uma natureza humana e uma ordem moral que não são simples construções ${tag('interpretacao')}.</p>`,
  vocabulario: [
    ['Construtivismo', 'Teoria que vê identidades e interesses formados socialmente.'],
    ['Sociedade internacional', 'Conjunto de Estados ligados por regras e instituições comuns.'],
    ['Teoria da dependência', 'Teoria sobre os limites ao desenvolvimento impostos pela inserção periférica.'],
    ['Sistema-mundo', 'Visão da economia mundial como sistema de centro, semiperiferia e periferia.'],
    ['Identidade estatal', 'Autoimagem de um Estado que orienta seus interesses.'],
  ],
  exemplos: `<p><strong>Armas e amizade:</strong> Wendt observa que 500 armas nucleares britânicas preocupam menos os Estados Unidos que 5 armas norte-coreanas. A diferença não está no poder material, mas na relação de amizade ou inimizade, isto é, nas ideias que os Estados têm uns dos outros.</p>`,
  contexto: `<p><strong>No mundo:</strong> a escola inglesa e o construtivismo são hoje correntes centrais nos estudos de relações internacionais ${tag('fato')}. <strong>No Brasil:</strong> a teoria da dependência teve grande influência no pensamento latino-americano, e Fernando Henrique Cardoso foi depois presidente da República (1995–2002) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que ideias importam nas relações internacionais', tag: 'argumento',
    premissas: ['Estados com poder semelhante tratam uns aos outros de modos diferentes.', 'Essas diferenças acompanham percepções de amizade, rivalidade e identidade.', 'Logo, percepções e ideias influenciam o comportamento dos Estados.'],
    conclusao: 'Logo, uma teoria completa deve considerar ideias, além do poder material.',
    nota: 'Isso não implica que tudo seja construção; implica que a ação humana é também espiritual e cultural.',
  },
  objecoes: [
    { objecao: 'Se tudo é construção social, não há verdade nem moral objetiva.', tag: 'debate',
      resposta: 'O construtivismo moderado afirma que muitas instituições são construídas socialmente, o que é verdade (fronteiras, tratados, moedas). Não precisa negar que haja natureza humana e verdade moral. Versões radicais que negam toda objetividade são contestadas.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa: quadro comparativo de três teorias (realismo, liberalismo, construtivismo ou escola inglesa) aplicadas a um mesmo conflito: atores, motivações, explicação, previsão e limites.</p>`,
  fonte: {
    obra: 'Alexander Wendt, "Anarchy is What States Make of It" (1992), introdução', link: null,
    orientacao: `<p>Observe a crítica ao realismo e a tese de que a anarquia não tem uma lógica única.</p>`,
  },
  perguntas: [
    { p: 'Qual a tese do artigo de Wendt de 1992?', r: 'Que a anarquia é o que os Estados fazem dela: identidades e interesses se formam na interação.' },
    { p: 'O que é sociedade internacional para Bull?', r: 'Estados ligados por regras e instituições comuns, mesmo sem governo mundial.' },
    { p: 'O que analisaram Cardoso e Faletto?', r: 'Como a inserção dependente na economia mundial condiciona o desenvolvimento.' },
  ],
  exercicios: [
    mc('A sociedade anárquica é de:', ['Hedley Bull', 'Wendt', 'Waltz', 'Keohane'], 0, '1977.'),
    mc('Dependência e desenvolvimento na América Latina é de:', ['1969', '1977', '1992', '1948'], 0, 'Cardoso e Faletto.'),
    mc('A teoria do sistema-mundo é de:', ['Wallerstein', 'Morgenthau', 'Aron', 'Nye'], 0, 'Centro e periferia.'),
    mc('O exemplo das armas britânicas e norte-coreanas ilustra o peso das:', ['Ideias e identidades', 'Armas apenas', 'Economias', 'Geografias'], 0, 'Construtivismo.'),
    mc('Social Theory of International Politics é de:', ['1999', '1992', '1979', '2005'], 0, 'Wendt.'),
    disc('Monte o quadro comparativo das três teorias.', ['Teorias', 'Aplicação', 'Previsões', 'Limites']),
  ],
  resumo: ['Construtivismo: Wendt (1992, 1999).', 'Escola inglesa: Bull (1977).', 'Dependência (1969).', 'Sistema-mundo.', 'Ideias e natureza humana.'],
  referencias: [
    { texto: 'Alexander Wendt, Social Theory of International Politics (1999).' },
    { texto: 'Hedley Bull, A sociedade anárquica (1977).' },
    { texto: 'Fernando Henrique Cardoso e Enzo Faletto, Dependência e desenvolvimento na América Latina (1969).' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o quadro', 'Ler a fonte indicada'],
  revisao: [['Wendt', 'Anarquia construída.'], ['Bull', 'Sociedade internacional.'], ['Dependência', 'Periferia.']],
  avancado: {
    texto: `<h3>As instituições da sociedade internacional</h3>
<p>Bull identificou cinco instituições da sociedade internacional: o equilíbrio de poder, o direito internacional, a diplomacia, a guerra (regulada) e as grandes potências ${tag('fato')}. Para ele, a ordem internacional depende dessas práticas compartilhadas, não de um governo mundial ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Hedley Bull, A sociedade anárquica (1977).' }],
    exercicios: [
      mc('Uma instituição da sociedade internacional segundo Bull é a:', ['Diplomacia', 'Monarquia universal', 'Igreja', 'Empresa'], 0, 'Lista.'),
      mc('Para Bull, a ordem depende de:', ['Práticas compartilhadas', 'Um governo mundial', 'Nada', 'Força pura'], 0, 'Tese.'),
      mc('Bull inclui entre as instituições a guerra:', ['Regulada', 'Total', 'Proibida sempre', 'Religiosa'], 0, 'Conceito.'),
      disc('Avalie se as cinco instituições de Bull ainda funcionam hoje, com exemplos.', ['Instituições', 'Exemplos', 'Funcionamento', 'Juízo'])],
  },
}),

aula({
  id: 'ri3-3', titulo: 'A guerra justa hoje', duracao: '150 min',
  aprendera: ['Expor as condições da legítima defesa segundo o Catecismo', 'Conhecer o direito internacional humanitário', 'Discutir armas nucleares e guerra moderna', 'Conhecer o ensinamento recente da Igreja sobre a guerra'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>A doutrina da guerra justa ainda é aplicável numa época de armas de destruição em massa?</p>
<h3>Catecismo</h3>
<p>O Catecismo (§ 2309) exige, para a legítima defesa pela força militar, que o dano infligido pelo agressor seja duradouro, grave e certo; que todos os outros meios tenham se mostrado impraticáveis ou ineficazes; que haja sérias possibilidades de êxito; e que o uso das armas não provoque males e desordens mais graves que o mal a eliminar ${tag('doutrina')}. Lembra que o poder dos meios modernos de destruição pesa muito nessa avaliação ${tag('doutrina')}.</p>
<h3>Direito humanitário</h3>
<p>As Convenções de Genebra (1949) e seus protocolos protegem feridos, prisioneiros e civis ${tag('fato')}. Princípios centrais: distinção entre combatentes e civis, proporcionalidade e precaução ${tag('fato')}.</p>
<h3>Armas nucleares</h3>
<p>Armas nucleares podem destruir cidades inteiras sem distinguir combatentes e civis ${tag('fato')}. O Tratado de Não Proliferação Nuclear (1968) busca impedir sua difusão ${tag('fato')}. O Papa Francisco declarou imoral não só o uso, mas também a posse de armas nucleares ${tag('doutrina')}.</p>
<h3>Fratelli tutti</h3>
<p>Na Fratelli tutti (2020, n. 258), Francisco afirma que hoje é muito difícil sustentar os critérios racionais da "guerra justa" amadurecidos em outros séculos e conclui: "nunca mais a guerra" ${tag('doutrina')}. Teólogos discutem como essa afirmação se articula com o direito à legítima defesa, que o Catecismo mantém ${tag('debate')}.</p>`,
  vocabulario: [
    ['Legítima defesa', 'Direito de se defender de uma agressão injusta.'],
    ['Direito internacional humanitário', 'Normas que limitam os meios e métodos de guerra.'],
    ['Distinção', 'Obrigação de diferenciar combatentes e civis.'],
    ['Proporcionalidade', 'Exigência de que os danos não sejam excessivos em relação à vantagem.'],
    ['Não proliferação', 'Impedir a difusão de armas nucleares.'],
  ],
  exemplos: `<p><strong>Um bombardeio:</strong> um exército sabe que um depósito militar está ao lado de um hospital. O direito humanitário exige avaliar se o dano a civis seria excessivo em relação à vantagem militar e tomar precauções para evitá-lo. Atacar sem essa avaliação viola os princípios de distinção e proporcionalidade.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Comitê Internacional da Cruz Vermelha é guardião das Convenções de Genebra ${tag('fato')}. <strong>No Brasil:</strong> a Constituição de 1988 determina que toda atividade nuclear em território nacional só será admitida para fins pacíficos (art. 21, XXIII, a) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a guerra moderna torna quase impossível cumprir as condições', tag: 'interpretacao',
    premissas: ['A guerra justa exige distinção, proporcionalidade e possibilidade de êxito sem males maiores.', 'Armas modernas de grande alcance tornam difícil poupar civis e prever consequências.', 'A escalada pode levar a males muito maiores que o mal combatido.'],
    conclusao: 'Logo, as condições da guerra justa são hoje raramente satisfeitas.',
    nota: 'O direito de defesa contra agressão permanece; a dificuldade está em exercê-lo sem violar os critérios.',
  },
  objecoes: [
    { objecao: 'Se a guerra é quase sempre injusta, um país agredido não pode se defender.', tag: 'debate',
      resposta: 'O Catecismo mantém o direito e até o dever de legítima defesa para quem tem responsabilidade pelo bem comum. A dificuldade está em defender-se respeitando a distinção e a proporcionalidade. Pacifismo absoluto e realismo sem limites são ambos rejeitados pela tradição.' },
  ],
  aplicacao: `<p>Faça o exercício da etapa (parte 2): ensaio "uma intervenção armada pode ser justa?", usando Agostinho, Tomás, o Catecismo § 2309 e um autor moderno, aplicado a um caso histórico.</p>`,
  fonte: {
    obra: 'Catecismo da Igreja Católica, §§ 2307–2317 (evitar a guerra)', link: null,
    orientacao: `<p>Observe as condições do § 2309 e o tratamento das armas de destruição em massa.</p>`,
  },
  perguntas: [
    { p: 'Quais as condições do Catecismo § 2309?', r: 'Dano duradouro, grave e certo; outros meios ineficazes; sérias possibilidades de êxito; não provocar males maiores.' },
    { p: 'Quais os princípios do direito humanitário?', r: 'Distinção, proporcionalidade e precaução.' },
    { p: 'O que diz a Fratelli tutti n. 258?', r: 'Que hoje é muito difícil sustentar os critérios da guerra justa, e "nunca mais a guerra".' },
  ],
  exercicios: [
    mc('As Convenções de Genebra atuais são de:', ['1949', '1919', '1968', '2020'], 0, 'Direito humanitário.'),
    mc('O TNP é de:', ['1968', '1949', '1945', '1991'], 0, 'Não proliferação.'),
    mc('A Fratelli tutti é de:', ['2020', '2015', '1963', '2009'], 0, 'Francisco.'),
    mc('Diferenciar combatentes e civis é o princípio de:', ['Distinção', 'Soberania', 'Reciprocidade', 'Subsidiariedade'], 0, 'DIH.'),
    mc('A Constituição de 1988 admite atividade nuclear para fins:', ['Pacíficos', 'Militares', 'Quaisquer', 'Nenhum'], 0, 'Art. 21.'),
    disc('Escreva o ensaio sobre a intervenção armada.', ['Tradição', 'Catecismo', 'Autor moderno', 'Caso']),
  ],
  resumo: ['CIC 2309: quatro condições.', 'Genebra (1949).', 'Distinção e proporcionalidade.', 'Armas nucleares e TNP.', 'Fratelli tutti (2020).'],
  referencias: [
    { texto: 'Catecismo da Igreja Católica, §§ 2307–2317.', livro: 'cic' },
    { texto: 'Papa Francisco, Fratelli tutti (2020).' },
    { texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 40.' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar o ensaio', 'Ler a fonte indicada'],
  revisao: [['§ 2309', 'Condições.'], ['Genebra', '1949.'], ['FT 258', 'Nunca mais a guerra.']],
  avancado: {
    texto: `<h3>Duplo efeito</h3>
<p>O princípio do duplo efeito, de origem tomista (Suma Teológica, II-II, q. 64, a. 7), permite uma ação com um efeito bom e outro mau previsto, se: a ação em si não é má; o efeito mau não é desejado; o efeito mau não é meio para o bom; e há razão proporcional ${tag('doutrina')}. Ele é usado para avaliar danos colaterais em ações militares ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 64, a. 7.' }],
    exercicios: [
      mc('O duplo efeito exige que o efeito mau:', ['Não seja desejado', 'Seja o objetivo', 'Seja meio para o bom', 'Seja ignorado'], 0, 'Condição.'),
      mc('Ele vem de:', ['II-II, q. 64, a. 7', 'I, q. 2', 'I-II, q. 90', 'III, q. 1'], 0, 'Tomás.'),
      mc('Exige razão:', ['Proporcional', 'Nenhuma', 'Econômica apenas', 'Estética'], 0, 'Critério.'),
      disc('Aplique o princípio do duplo efeito a um caso de dano colateral e avalie.', ['Ação', 'Efeitos', 'Condições', 'Juízo'])],
  },
}),

aula({
  id: 'ri3-4', titulo: 'Soberania, intervenção humanitária e ordem mundial', duracao: '150 min',
  aprendera: ['Explicar a responsabilidade de proteger', 'Discutir casos de intervenção e de omissão', 'Discutir globalização e ordem mundial', 'Avaliar visões de ordem multipolar e unipolar'],
  prereq: ['Aulas anteriores do módulo'],
  explicacao: `
<h3>O problema</h3>
<p>Se um governo massacra a própria população, a soberania impede que outros intervenham? E que ordem mundial queremos?</p>
<h3>Responsabilidade de proteger</h3>
<p>Na Cúpula Mundial de 2005, a ONU afirmou que cada Estado tem a responsabilidade de proteger sua população de genocídio, crimes de guerra, limpeza étnica e crimes contra a humanidade, e que a comunidade internacional pode agir, por meio do Conselho de Segurança, se o Estado falhar manifestamente ${tag('fato')}.</p>
<h3>Casos</h3>
<p>O genocídio de Ruanda (1994) ocorreu sem intervenção eficaz ${tag('fato')}. A intervenção da OTAN no Kosovo (1999) ocorreu sem autorização do Conselho de Segurança e foi debatida quanto à legalidade e à legitimidade ${tag('debate')}. A intervenção na Líbia (2011), autorizada pelo Conselho, foi criticada por ir além da proteção de civis ${tag('debate')}.</p>
<h3>Globalização e ordem</h3>
<p>A globalização intensificou fluxos de comércio, capitais, pessoas e informações ${tag('fato')}. Debate-se se o mundo caminha para uma ordem multipolar, com várias grandes potências, e qual o papel das instituições ${tag('debate')}. Bento XVI, na Caritas in veritate (2009, n. 67), pediu a reforma da ONU e uma autoridade política mundial regulada pelo direito e pela subsidiariedade ${tag('doutrina')}. Olavo de Carvalho e Alexandr Dugin debateram em 2012 visões opostas sobre os Estados Unidos e a ordem mundial ${tag('fato')}.</p>`,
  vocabulario: [
    ['Responsabilidade de proteger', 'Princípio de 2005 sobre a proteção de populações contra crimes atrozes.'],
    ['Intervenção humanitária', 'Uso da força para proteger populações de violações graves.'],
    ['Multipolaridade', 'Ordem com várias grandes potências.'],
    ['Globalização', 'Intensificação de fluxos entre países.'],
    ['Legitimidade', 'Aceitação moral e política de uma ação, além da legalidade.'],
  ],
  exemplos: `<p><strong>Ruanda, 1994:</strong> em cerca de cem dias, centenas de milhares de tutsis e hutus moderados foram mortos. A missão da ONU no país tinha mandato e meios limitados, e a comunidade internacional não agiu a tempo. O caso pesou na formulação da responsabilidade de proteger.</p>`,
  contexto: `<p><strong>No mundo:</strong> o Tribunal Penal Internacional, criado pelo Estatuto de Roma (1998), julga crimes de genocídio, crimes contra a humanidade e crimes de guerra ${tag('fato')}. <strong>No Brasil:</strong> o Brasil comandou o componente militar da missão de paz da ONU no Haiti (Minustah, 2004–2017) ${tag('fato')}.</p>`,
  argumento: {
    titulo: 'Por que a soberania tem limites morais', tag: 'argumento',
    premissas: ['A soberania existe para o bem comum de um povo.', 'Um governo que extermina seu povo contradiz a finalidade da soberania.', 'Logo, a soberania não pode servir de escudo para crimes contra a própria população.'],
    conclusao: 'Logo, a soberania é limitada pela finalidade que a justifica.',
    nota: 'Como agir diante disso, e quem decide, é questão prudencial e jurídica difícil.',
  },
  objecoes: [
    { objecao: 'Intervenções humanitárias são sempre pretexto de potências.', tag: 'debate',
      resposta: 'Há casos de interesses ocultos e de consequências desastrosas. Mas também houve casos em que a omissão permitiu genocídios. O desafio é criar critérios e instituições que reduzam abusos sem abandonar as vítimas.' },
  ],
  aplicacao: `<p>Compare dois casos (por exemplo, Ruanda 1994 e Kosovo 1999) quanto à ação ou omissão internacional, legalidade, legitimidade e resultados, e responda: quando se justifica intervir?</p>`,
  fonte: {
    obra: 'Documento Final da Cúpula Mundial da ONU (2005), parágrafos 138–139', link: null,
    orientacao: `<p>Observe as três dimensões: responsabilidade do Estado, assistência internacional e ação coletiva pelo Conselho de Segurança.</p>`,
  },
  perguntas: [
    { p: 'O que é a responsabilidade de proteger?', r: 'O princípio de que cada Estado deve proteger sua população de crimes atrozes e de que a comunidade internacional pode agir se ele falhar.' },
    { p: 'Por que o caso do Kosovo é debatido?', r: 'Porque a intervenção ocorreu sem autorização do Conselho de Segurança.' },
    { p: 'O que pediu a Caritas in veritate n. 67?', r: 'A reforma da ONU e uma autoridade política mundial regulada pelo direito e pela subsidiariedade.' },
  ],
  exercicios: [
    mc('A responsabilidade de proteger foi afirmada em:', ['2005', '1994', '1999', '2011'], 0, 'Cúpula Mundial.'),
    mc('O genocídio de Ruanda foi em:', ['1994', '1999', '2005', '1984'], 0, 'Fato.'),
    mc('O Estatuto de Roma é de:', ['1998', '1945', '2005', '1949'], 0, 'TPI.'),
    mc('A Caritas in veritate é de:', ['2009', '1963', '2020', '1991'], 0, 'Bento XVI.'),
    mc('O Brasil comandou o componente militar da missão no:', ['Haiti', 'Kosovo', 'Ruanda', 'Líbia'], 0, 'Minustah.'),
    disc('Compare os dois casos e responda quando se justifica intervir.', ['Casos', 'Legalidade', 'Legitimidade', 'Critérios']),
  ],
  resumo: ['Responsabilidade de proteger (2005).', 'Ruanda, Kosovo, Líbia.', 'Soberania limitada pela finalidade.', 'Globalização e multipolaridade.', 'Caritas in veritate (2009).'],
  referencias: [
    { texto: 'Documento Final da Cúpula Mundial da ONU (2005).' },
    { texto: 'Bento XVI, Caritas in veritate (2009).' },
    { texto: 'Olavo de Carvalho e Alexandr Dugin, Os EUA e a Nova Ordem Mundial (2012).', livro: 'olavo-dugin' },
  ],
  criterios: ['Acertar pelo menos 80% do questionário', 'Entregar a comparação', 'Ler a fonte indicada'],
  revisao: [['R2P', '2005.'], ['Ruanda', '1994.'], ['CV 67', 'Autoridade mundial.']],
  avancado: {
    texto: `<h3>Como ler um debate de visões de mundo</h3>
<p>No debate de 2012, Olavo de Carvalho e Alexandr Dugin apresentaram leituras opostas sobre o papel dos Estados Unidos, da Rússia e de projetos globalistas e eurasianistas ${tag('fato')}. Ler um debate assim exige reconstruir cada posição na forma mais forte, separar fatos verificáveis de interpretações e de juízos de valor, e avaliar as fontes que cada um usa ${tag('argumento')}. A leitura não depende de concordar com qualquer dos lados ${tag('interpretacao')}.</p>`,
    leituras: [{ texto: 'Olavo de Carvalho e Alexandr Dugin, Os EUA e a Nova Ordem Mundial (2012).', livro: 'olavo-dugin' }],
    exercicios: [
      mc('Reconstruir a posição na forma mais forte é aplicar o:', ['Princípio de caridade', 'Espantalho', 'Ad hominem', 'Falso dilema'], 0, 'Lógica.'),
      mc('O debate é de:', ['2012', '1999', '2005', '2020'], 0, 'Data.'),
      mc('Avaliar um debate exige separar:', ['Fatos, interpretações e juízos', 'Só fatos', 'Só opiniões', 'Nada'], 0, 'Método.'),
      disc('Reconstrua uma tese de cada lado do debate e avalie as fontes usadas.', ['Tese 1', 'Tese 2', 'Fontes', 'Avaliação'])],
  },
}),

avaliacao('ri3-5', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Questões objetivas sobre as teorias e os debates das relações internacionais, e duas discursivas de síntese.</p>
<h3>Antes de começar</h3>
<ul><li>Revise os cartões das aulas 1 a 4.</li><li>Releia seu quadro comparativo.</li><li>Releia seu ensaio.</li></ul>`,
[
  disc('Aplique realismo, liberalismo e construtivismo a um conflito atual, indicando o que cada teoria explica, o que prevê e o que deixa de fora.', ['Realismo', 'Liberalismo', 'Construtivismo', 'Avaliação']),
  disc('Discuta, com o Catecismo § 2309, a responsabilidade de proteger e um caso histórico, quando o uso da força internacional pode ser justo.', ['Catecismo', 'R2P', 'Caso', 'Juízo']),
]),
];
