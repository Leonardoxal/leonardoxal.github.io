// Módulo 13 — Ética, política, direito e cultura.
import { tag, LINKS } from '../fontes.js';
import { aula, avaliacao, mc, disc } from './_modelo.js';

export const AULAS = [
aula({
  id: 'm13-1', titulo: 'Felicidade e virtude revisitadas',
  aprendera: ['Comparar três grandes teorias éticas: virtudes, deontologia, consequencialismo', 'Aplicar cada uma a casos', 'Identificar o papel da felicidade em cada teoria', 'Avaliar a ética das virtudes diante das rivais'],
  prereq: ['Módulos 6, 8, 9 e 10'],
  explicacao: `
<h3>Três famílias</h3>
<ul>
<li><strong>Ética das virtudes</strong> (Aristóteles, Tomás, MacIntyre): a pergunta central é "que tipo de pessoa devo ser?"; a felicidade (<em>eudaimonia</em>) é o fim, e as virtudes, sua constituição ${tag('fato')}.</li>
<li><strong>Deontologia</strong> (Kant): o centro é o dever; a felicidade não é fundamento da moral ${tag('fato')}.</li>
<li><strong>Consequencialismo</strong> (Bentham, Mill, Singer): é correto o ato que produz as melhores consequências; o utilitarismo define o bem como felicidade/bem-estar agregado ${tag('fato')}.</li>
</ul>
<h3>Mill</h3>
<p>Em O Utilitarismo (1861), John Stuart Mill define o princípio da maior felicidade e distingue prazeres superiores e inferiores: "é melhor ser um Sócrates insatisfeito do que um tolo satisfeito" ${tag('fato')}.</p>
<h3>Casos</h3>
<p>O "problema do bonde" (Philippa Foot, 1967; Judith Jarvis Thomson) contrapõe desviar o bonde para matar um em vez de cinco e empurrar alguém para salvar cinco ${tag('fato')}. As intuições divergem, e cada teoria explica a divergência de modo diferente; a tradição tomista recorre ao princípio do duplo efeito (ST II-II, q. 64, a. 7) ${tag('argumento')}.</p>
<h3>Avaliação</h3>
<p>A ética das virtudes integra felicidade, caráter e regras; críticos dizem que ela não dá orientação precisa para decidir ("o que faria o virtuoso?") ${tag('debate')}. Rosalind Hursthouse (On Virtue Ethics, 1999) respondeu a essa objeção ${tag('fato')}.</p>`,
  vocabulario: [['Eudaimonia', 'Felicidade como vida plenamente realizada.'], ['Deontologia', 'Ética centrada no dever.'], ['Consequencialismo', 'Correção pelo resultado.'], ['Utilitarismo', 'Maximizar a felicidade agregada.'], ['Duplo efeito', 'Princípio sobre ações com efeito bom e mau.']],
  exemplos: '<p>Mentir para poupar um amigo de uma notícia dolorosa: o utilitarista calcula consequências; o kantiano proíbe; o ético das virtudes pergunta o que a veracidade e a misericórdia exigem nesta situação.</p>',
  contexto: `<p>O debate entre essas famílias domina a ética normativa desde o século XX ${tag('fato')}.</p>`,
  argumento: { titulo: 'O princípio do duplo efeito (ST II-II, q. 64, a. 7, reconstruído)', tag: 'argumento',
    premissas: ['O ato em si é bom ou indiferente.', 'O efeito mau não é querido, só previsto.', 'O efeito mau não é meio para o bom.', 'Há razão proporcionalmente grave.'],
    conclusao: 'Satisfeitas as condições, o ato é lícito mesmo com efeito mau previsto.',
    nota: 'Tomás o aplica à legítima defesa. Desviar o bonde satisfaz as condições segundo muitos; empurrar alguém usa sua morte como meio.' },
  objecoes: [{ objecao: 'A distinção entre querer e prever é psicológica e manipulável.', tag: 'debate', resposta: 'Defensores respondem que a distinção se mostra na estrutura da ação: se o efeito mau é meio, ele é querido. Críticos (consequencialistas) acham a diferença moralmente irrelevante.' }],
  aplicacao: '<p>Resolva um dilema real (no trabalho, na família) pelas três teorias e registre as diferenças.</p>',
  fonte: { obra: 'Mill, O Utilitarismo, cap. 2; Tomás, ST II-II, q. 64, a. 7', link: null, orientacao: '<p>Leia o capítulo 2 de Mill e o artigo de Tomás. Aplique ambos ao problema do bonde.</p>' },
  perguntas: [
    { p: 'Qual a pergunta central da ética das virtudes?', r: 'Que tipo de pessoa devo ser?' },
    { p: 'O que diz o princípio da maior felicidade?', r: 'Correto é o que promove a maior felicidade.' },
    { p: 'Onde Tomás formula o duplo efeito?', r: 'ST II-II, q. 64, a. 7.' },
  ],
  exercicios: [
    mc('"Melhor um Sócrates insatisfeito..." é de:', ['Bentham', 'Mill', 'Singer', 'Sidgwick'], 1, 'O Utilitarismo.'),
    mc('O problema do bonde foi proposto por:', ['Anscombe', 'Foot', 'Hursthouse', 'Singer'], 1, '1967.'),
    mc('No duplo efeito, o efeito mau:', ['Pode ser meio', 'Não pode ser meio', 'É querido', 'É irrelevante'], 1, 'Terceira condição.'),
    mc('On Virtue Ethics (1999) é de:', ['Foot', 'Hursthouse', 'MacIntyre', 'Slote'], 1, 'Resposta à objeção da orientação.'),
    disc('Resolva o problema do bonde (desviar e empurrar) pelas três teorias e defenda uma.', ['Três teorias aplicadas', 'Duplo efeito', 'Objeções', 'Conclusão justificada'])],
  resumo: ['Virtudes, deontologia, consequencialismo.', 'Mill e os prazeres.', 'Problema do bonde.', 'Duplo efeito.', 'Objeção da orientação.'],
  referencias: [{ texto: 'John Stuart Mill, O Utilitarismo (1861).' }, { texto: 'Philippa Foot, "The Problem of Abortion and the Doctrine of the Double Effect" (1967).' }, { texto: 'Rosalind Hursthouse, On Virtue Ethics (1999).' }],
  revisao: [['Duplo efeito', 'ST II-II, q. 64, a. 7.'], ['Problema do bonde', 'Foot, 1967.'], ['Utilitarismo', 'Mill, 1861.']],
  avancado: {
    texto: `<h3>Parfit e a convergência</h3>
<p>Derek Parfit (On What Matters, 2011) argumentou que kantismo, consequencialismo e contratualismo convergem em uma "teoria tripla" ${tag('fato')}; críticos discordam ${tag('debate')}.</p>
<h3>Anscombe e o consequencialismo</h3>
<p>Anscombe cunhou "consequencialismo" em "Modern Moral Philosophy" (1958) e criticou a ideia de que qualquer ato pode ser justificado por consequências ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Derek Parfit, On What Matters (2011).' }, { texto: 'G. E. M. Anscombe, "Modern Moral Philosophy" (1958).' }],
    exercicios: [
      mc('"Consequencialismo" foi cunhado por:', ['Mill', 'Anscombe', 'Sidgwick', 'Parfit'], 1, '1958.'),
      mc('A "teoria tripla" é de:', ['Rawls', 'Parfit', 'Scanlon', 'Singer'], 1, 'On What Matters.'),
      mc('Anscombe criticou a justificação de qualquer ato por:', ['Virtudes', 'Consequências', 'Deveres', 'Leis'], 1, 'Modern Moral Philosophy.'),
      disc('As três famílias éticas convergem, como queria Parfit? Argumente com um caso.', ['Expõe Parfit', 'Caso', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-2', titulo: 'Lei natural',
  aprendera: ['A lei natural no debate contemporâneo', 'A "nova teoria" (Grisez, Finnis) e o tomismo aristotélico', 'A lei natural no ensino da Igreja', 'Casos de aplicação e objeções'],
  prereq: ['Módulo 8, aula 10'],
  explicacao: `
<h3>Retomada</h3>
<p>No Módulo 8 vimos a lei natural em Tomás. Aqui vemos seu uso no debate público e acadêmico atual ${tag('fato')}.</p>
<h3>Nova teoria da lei natural</h3>
<p>Germain Grisez, John Finnis (Lei Natural e Direitos Naturais, 1980) e Robert George defendem bens básicos evidentes (vida, conhecimento, jogo, experiência estética, sociabilidade, razoabilidade prática, religião) e "exigências da razoabilidade prática" ${tag('fato')}. Os bens não são deduzidos de fatos da natureza, evitando a objeção de Hume ${tag('argumento')}.</p>
<h3>Tomismo aristotélico</h3>
<p>Ralph McInerny, Russell Hittinger e Edward Feser criticam a nova teoria por separar a ética da metafísica da natureza e da teleologia ${tag('debate')}.</p>
<h3>Ensino da Igreja</h3>
<p>O Catecismo (§1954–1960) ensina que a lei natural é universal, imutável em seus princípios e fundamento da lei civil ${tag('doutrina')}. A Comissão Teológica Internacional (2009) a apresenta como base de diálogo com outras culturas ${tag('doutrina')}.</p>
<h3>Aplicações</h3>
<p>Temas públicos discutidos em linguagem de lei natural: direitos humanos, bioética, família, liberdade religiosa ${tag('fato')}.</p>`,
  vocabulario: [['Bens básicos', 'Bens evidentes que fundam a razão prática (Finnis).'], ['Razoabilidade prática', 'Bem e virtude de ordenar a vida razoavelmente.'], ['Tomismo aristotélico', 'Lei natural fundada na teleologia da natureza.'], ['Universalidade', 'Vale para todos os homens.'], ['Lei civil', 'Lei positiva do Estado.']],
  exemplos: '<p>A proibição de tortura em declarações de direitos pode ser defendida pela nova teoria (atenta contra o bem básico da vida e da integridade) ou pelo tomismo aristotélico (contraria a natureza racional da pessoa).</p>',
  contexto: `<p>Lei Natural e Direitos Naturais foi publicado na série Clarendon Law, organizada por H. L. A. Hart ${tag('fato')}.</p>`,
  argumento: { titulo: 'Bens básicos são evidentes (Finnis, reconstruído)', tag: 'argumento',
    premissas: ['Conhecer é bom; isso não se demonstra, mas se compreende ao considerar o conhecimento.', 'Negar que o conhecimento é bom é autorrefutante (quem argumenta busca conhecer).', 'Bens assim são princípios da razão prática.'],
    conclusao: 'Logo, há bens básicos evidentes que fundam a ética.',
    nota: 'A premissa 2 é um argumento de retorsão; aplica-se bem ao conhecimento, menos claramente a outros bens da lista.' },
  objecoes: [{ objecao: 'Sem natureza teleológica, a lista de bens é arbitrária.', tag: 'debate', resposta: 'Finnis responde que os bens se reconhecem por reflexão sobre a ação, não por dedução; aristotélicos dizem que essa reflexão já supõe a natureza humana. É o centro do debate.' }],
  aplicacao: '<p>Escolha um tema público e formule um argumento de lei natural nas duas versões (nova teoria e aristotélica).</p>',
  fonte: { obra: 'John Finnis, Lei Natural e Direitos Naturais, caps. 3–5; Catecismo §1954–1960', link: null, orientacao: '<p>Leia o capítulo 4 (bens básicos) e o Catecismo. Compare as listas e os fundamentos.</p>' },
  perguntas: [
    { p: 'Cite três bens básicos de Finnis.', r: 'Vida, conhecimento, sociabilidade (também jogo, estética, razoabilidade prática, religião).' },
    { p: 'Qual a crítica aristotélica à nova teoria?', r: 'Separa a ética da teleologia da natureza.' },
    { p: 'Onde o Catecismo trata da lei natural?', r: '§1954–1960.' },
  ],
  exercicios: [
    mc('Lei Natural e Direitos Naturais é de:', ['Grisez', 'Finnis', 'George', 'Hart'], 1, '1980.'),
    mc('A nova teoria evita a objeção de:', ['Kant', 'Hume', 'Mill', 'Marx'], 1, 'Ser e dever.'),
    mc('Crítico da nova teoria:', ['Feser', 'Finnis', 'George', 'Grisez'], 0, 'Tomismo aristotélico.'),
    mc('Para o Catecismo, a lei natural é:', ['Variável em princípio', 'Universal e imutável em seus princípios', 'Só cristã', 'Opcional'], 1, '§1956–1958.'),
    disc('Nova teoria ou tomismo aristotélico: qual fundamenta melhor a lei natural? Argumente.', ['Expõe as duas', 'Usa textos', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Lei natural no debate atual.', 'Bens básicos.', 'Crítica aristotélica.', 'Ensino da Igreja.', 'Aplicações públicas.'],
  referencias: [{ texto: 'John Finnis, Lei Natural e Direitos Naturais (1980).' }, { texto: 'Catecismo, §1954–1960.' }, { texto: 'Russell Hittinger, A Critique of the New Natural Law Theory (1987).' }],
  revisao: [['Bens básicos', 'Finnis.'], ['Crítica de Hittinger', '1987.'], ['CIC §1954–1960', 'Lei natural.']],
  avancado: {
    texto: `<h3>Hart e o "conteúdo mínimo"</h3>
<p>H. L. A. Hart (O Conceito de Direito, 1961) admitiu um "conteúdo mínimo de direito natural" baseado em fatos da condição humana (vulnerabilidade, igualdade aproximada, recursos limitados) ${tag('fato')}.</p>
<h3>Direitos humanos</h3>
<p>Jacques Maritain participou dos debates em torno da Declaração Universal de 1948 e observou que se podia concordar sobre direitos sem concordar sobre seu fundamento ${tag('fato')}.</p>`,
    leituras: [{ texto: 'H. L. A. Hart, O Conceito de Direito (1961), cap. IX.' }, { texto: 'Jacques Maritain, O Homem e o Estado (1951).' }],
    exercicios: [
      mc('"Conteúdo mínimo de direito natural" é de:', ['Finnis', 'Hart', 'Kelsen', 'Dworkin'], 1, 'O Conceito de Direito IX.'),
      mc('Maritain e a Declaração de 1948:', ['Recusou participar', 'Observou acordo sobre direitos sem acordo sobre fundamento', 'Redigiu sozinho', 'Criticou como ateia'], 1, 'Debates da UNESCO.'),
      mc('O Homem e o Estado é de:', ['Maritain', 'Gilson', 'Hart', 'Finnis'], 0, '1951.'),
      disc('Direitos humanos precisam de fundamento? Avalie a observação de Maritain.', ['Expõe Maritain', 'Argumento a favor', 'Objeção', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-3', titulo: 'Justiça',
  aprendera: ['A justiça em Aristóteles e Tomás: geral, distributiva, comutativa', 'Rawls e a justiça como equidade', 'Nozick e a justiça como titularidade', 'A justiça social na doutrina da Igreja'],
  explicacao: `
<h3>Clássicos</h3>
<p>Aristóteles (Ética V) distingue justiça distributiva (proporcional ao mérito) e corretiva/comutativa (igualdade aritmética nas trocas) ${tag('fato')}. Tomás define justiça como "vontade constante e perpétua de dar a cada um o seu direito" (ST II-II, q. 58, a. 1), herdando a definição de Ulpiano ${tag('fato')}. Fala de justiça geral ou legal (ordenada ao bem comum), distributiva e comutativa (q. 61) ${tag('fato')}.</p>
<h3>Rawls</h3>
<p>Em Uma Teoria da Justiça (1971), John Rawls propõe escolher princípios sob o "véu de ignorância": (1) iguais liberdades básicas; (2) desigualdades aceitáveis só se beneficiarem os menos favorecidos (princípio da diferença) e com igualdade de oportunidades ${tag('fato')}.</p>
<h3>Nozick</h3>
<p>Robert Nozick (Anarquia, Estado e Utopia, 1974) defende a justiça como titularidade: é justo o que foi adquirido e transferido justamente; o exemplo de Wilt Chamberlain mostra que padrões distributivos exigem interferência contínua na liberdade ${tag('fato')}.</p>
<h3>Igreja</h3>
<p>A doutrina social fala de justiça social, destinação universal dos bens e propriedade privada com função social (Compêndio da Doutrina Social, §§171–184; Catecismo §2402–2406) ${tag('doutrina')}.</p>`,
  vocabulario: [['Justiça distributiva', 'Repartição proporcional de bens comuns.'], ['Justiça comutativa', 'Igualdade nas trocas.'], ['Véu de ignorância', 'Escolha de princípios sem saber a própria posição.'], ['Princípio da diferença', 'Desigualdades em benefício dos menos favorecidos.'], ['Destinação universal dos bens', 'Os bens da terra são destinados a todos.']],
  exemplos: '<p>Um salário justo é questão de justiça comutativa (troca de trabalho por pagamento); a distribuição de vagas em hospital público, de justiça distributiva.</p>',
  contexto: `<p>Rawls e Nozick eram colegas em Harvard ${tag('fato')}.</p>`,
  argumento: { titulo: 'Wilt Chamberlain (Nozick, reconstruído)', tag: 'argumento',
    premissas: ['Suponha uma distribuição justa D1, segundo qualquer padrão.', 'Milhares de pessoas pagam livremente para ver Chamberlain jogar, gerando D2 desigual.', 'Cada transferência foi livre e justa.'],
    conclusao: 'Logo, D2 é justa, e manter qualquer padrão exige interferir continuamente na liberdade.',
    nota: 'Críticos (Cohen) respondem que as consequências agregadas das trocas podem ser injustas, e que as pessoas não consentiram nelas.' },
  objecoes: [{ objecao: 'A titularidade ignora injustiças históricas na aquisição original.', tag: 'debate', resposta: 'Nozick admite um "princípio de retificação", mas não o desenvolve. A doutrina social acrescenta a destinação universal dos bens como limite à propriedade.' }],
  aplicacao: '<p>Analise um imposto ou política social com as categorias de justiça distributiva e comutativa, e com Rawls e Nozick.</p>',
  fonte: { obra: 'Tomás, ST II-II, qq. 58 e 61; Rawls, Uma Teoria da Justiça, §§3–4, 11–13', link: null, orientacao: '<p>Leia a q. 58, a. 1 e a q. 61, a. 1. Compare com a posição original de Rawls.</p>' },
  perguntas: [
    { p: 'Definição de justiça em Tomás?', r: 'Vontade constante e perpétua de dar a cada um o seu direito.' },
    { p: 'O que é o princípio da diferença?', r: 'Desigualdades só se beneficiarem os menos favorecidos.' },
    { p: 'O que mostra o exemplo de Chamberlain?', r: 'Que padrões distributivos exigem interferência na liberdade.' },
  ],
  exercicios: [
    mc('A definição de justiça usada por Tomás vem de:', ['Cícero', 'Ulpiano', 'Agostinho', 'Platão'], 1, 'Direito romano.'),
    mc('Uma Teoria da Justiça é de:', ['1961', '1971', '1974', '1981'], 1, 'Rawls.'),
    mc('Justiça nas trocas é:', ['Distributiva', 'Comutativa', 'Legal', 'Social'], 1, 'Aritmética.'),
    mc('Anarquia, Estado e Utopia é de:', ['Rawls', 'Nozick', 'Sandel', 'Cohen'], 1, '1974.'),
    disc('Compare Rawls, Nozick e a doutrina social da Igreja sobre a propriedade e a distribuição.', ['Três posições', 'Textos', 'Objeções', 'Conclusão justificada'])],
  resumo: ['Distributiva e comutativa.', 'Definição de Ulpiano/Tomás.', 'Rawls: véu e diferença.', 'Nozick: titularidade.', 'Destinação universal dos bens.'],
  referencias: [{ texto: 'Aristóteles, Ética a Nicômaco V.' }, { texto: 'John Rawls, Uma Teoria da Justiça (1971).' }, { texto: 'Pontifício Conselho Justiça e Paz, Compêndio da Doutrina Social da Igreja (2004).' }],
  revisao: [['ST II-II, q. 58', 'Definição de justiça.'], ['Véu de ignorância', 'Rawls.'], ['Wilt Chamberlain', 'Nozick.']],
  avancado: {
    texto: `<h3>Justiça social</h3>
<p>O termo "justiça social" foi difundido por Luigi Taparelli d'Azeglio (século XIX) e adotado por Pio XI (Quadragesimo anno, 1931) ${tag('fato')}. Hayek (A Miragem da Justiça Social, vol. 2 de Direito, Legislação e Liberdade, 1976) criticou o conceito como sem sentido numa ordem de mercado ${tag('fato')}.</p>
<h3>Subsidiariedade</h3>
<p>Quadragesimo anno §79 formulou o princípio de subsidiariedade: não transferir a uma sociedade maior o que a menor pode fazer ${tag('doutrina')}.</p>`,
    leituras: [{ texto: 'Pio XI, Quadragesimo anno (1931), §§79–80.' }, { texto: 'F. A. Hayek, Direito, Legislação e Liberdade, vol. 2 (1976).' }],
    exercicios: [
      mc('O princípio de subsidiariedade foi formulado em:', ['Rerum novarum', 'Quadragesimo anno', 'Centesimus annus', 'Laudato si'], 1, '§79.'),
      mc('Quem criticou a "justiça social" como miragem?', ['Rawls', 'Hayek', 'Nozick', 'Taparelli'], 1, '1976.'),
      mc('"Justiça social" foi difundido por:', ['Taparelli', 'Marx', 'Rawls', 'Tomás'], 0, 'Século XIX.'),
      disc('Responda à crítica de Hayek à justiça social a partir da doutrina social da Igreja.', ['Expõe Hayek', 'Expõe a doutrina', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-4', titulo: 'Liberdade e autoridade',
  aprendera: ['Liberdade negativa e positiva (Berlin)', 'O princípio do dano de Mill', 'A autoridade legítima em Tomás e na Igreja', 'Liberdade religiosa: Dignitatis humanae'],
  explicacao: `
<h3>Dois conceitos</h3>
<p>Isaiah Berlin ("Dois conceitos de liberdade", 1958) distingue liberdade negativa (ausência de interferência) e positiva (autogoverno, ser senhor de si) ${tag('fato')}. Alerta que a liberdade positiva pode justificar a coerção em nome do "verdadeiro eu" ${tag('interpretacao')}.</p>
<h3>Mill</h3>
<p>Em Sobre a Liberdade (1859), Mill formula o princípio do dano: a única razão para restringir a liberdade de alguém contra sua vontade é evitar dano a outros ${tag('fato')}.</p>
<h3>Liberdade cristã</h3>
<p>A tradição católica entende a liberdade como capacidade de escolher o bem, que cresce com a virtude ("liberdade para a excelência", Pinckaers) e não como mera indiferença ${tag('interpretacao')}. "A verdade vos libertará" (Jo 8,32); Catecismo §1731–1738 ${tag('doutrina')}.</p>
<h3>Autoridade</h3>
<p>Para Tomás, a autoridade é necessária mesmo num mundo sem pecado, para ordenar ao bem comum (ST I, q. 96, a. 4) ${tag('fato')}. A autoridade é legítima quando busca o bem comum por meios moralmente lícitos (Catecismo §1897–1904) ${tag('doutrina')}.</p>
<h3>Liberdade religiosa</h3>
<p>A declaração Dignitatis humanae (Vaticano II, 1965) ensina que a pessoa tem direito à liberdade religiosa, fundado em sua dignidade, de modo que ninguém seja forçado a agir contra a consciência nem impedido de agir segundo ela, dentro dos justos limites ${tag('doutrina')}. A relação com ensinamentos anteriores (Syllabus, 1864) é debatida ${tag('debate')}.</p>`,
  vocabulario: [['Liberdade negativa', 'Ausência de interferência.'], ['Liberdade positiva', 'Autogoverno.'], ['Princípio do dano', 'Só o dano a outros justifica restringir a liberdade.'], ['Autoridade legítima', 'Poder ordenado ao bem comum.'], ['Liberdade religiosa', 'Imunidade de coação em matéria religiosa.']],
  exemplos: '<p>Uma lei que obriga o uso de cinto de segurança protege só o próprio motorista: Mill a rejeitaria pelo princípio do dano? E a ética das virtudes?</p>',
  contexto: `<p>Dignitatis humanae teve grande contribuição do jesuíta americano John Courtney Murray ${tag('fato')}.</p>`,
  argumento: { titulo: 'O princípio do dano (Sobre a Liberdade, cap. 1, reconstruído)', tag: 'argumento',
    premissas: ['Cada um é o melhor juiz de seu próprio bem.', 'A coerção para o próprio bem é ineficaz e degradante.', 'A coerção para evitar dano a outros protege a liberdade de todos.'],
    conclusao: 'Logo, só o dano a outros justifica restringir a liberdade.',
    nota: 'A premissa 1 é contestada: crianças, dependentes, viciados. E o próprio Mill exclui "povos atrasados", ponto hoje criticado.' },
  objecoes: [{ objecao: 'Patrick Devlin (A Imposição da Moral, 1965): a sociedade pode proteger sua moral pública.', tag: 'debate', resposta: 'O debate Hart–Devlin opôs liberalismo e moralismo jurídico. A tradição tomista diria que a lei não deve proibir todos os vícios, só os mais graves (ST I-II, q. 96, a. 2).' }],
  aplicacao: '<p>Escolha uma lei controversa e avalie-a com Mill, Devlin e Tomás (I-II, q. 96, a. 2).</p>',
  fonte: { obra: 'Mill, Sobre a Liberdade, cap. 1; Dignitatis humanae §§1–3', link: null, orientacao: '<p>Leia os dois textos e compare os fundamentos da liberdade em cada um.</p>' },
  perguntas: [
    { p: 'Diferença entre liberdade negativa e positiva?', r: 'Ausência de interferência × autogoverno.' },
    { p: 'O que diz o princípio do dano?', r: 'Só o dano a outros justifica restringir a liberdade.' },
    { p: 'Em que se funda a liberdade religiosa segundo Dignitatis humanae?', r: 'Na dignidade da pessoa.' },
  ],
  exercicios: [
    mc('"Dois conceitos de liberdade" é de:', ['Mill', 'Berlin', 'Hart', 'Devlin'], 1, '1958.'),
    mc('Dignitatis humanae é de:', ['1864', '1891', '1965', '1993'], 2, 'Vaticano II.'),
    mc('O debate sobre moralismo jurídico opôs:', ['Rawls e Nozick', 'Hart e Devlin', 'Mill e Kant', 'Berlin e Taylor'], 1, 'Anos 1960.'),
    mc('Para Tomás, a autoridade:', ['Só existe por causa do pecado', 'Seria necessária mesmo sem pecado', 'É sempre ilegítima', 'É arbitrária'], 1, 'ST I, q. 96, a. 4.'),
    disc('Compare a liberdade em Mill e na tradição católica. São compatíveis em algum ponto?', ['Expõe Mill', 'Expõe a tradição', 'Compara', 'Conclusão justificada'])],
  resumo: ['Negativa e positiva.', 'Princípio do dano.', 'Liberdade para a excelência.', 'Autoridade e bem comum.', 'Liberdade religiosa.'],
  referencias: [{ texto: 'Isaiah Berlin, "Dois conceitos de liberdade" (1958).' }, { texto: 'John Stuart Mill, Sobre a Liberdade (1859).' }, { texto: 'Concílio Vaticano II, Dignitatis humanae (1965).' }],
  revisao: [['Princípio do dano', 'Mill.'], ['Berlin', 'Dois conceitos.'], ['Dignitatis humanae', '1965.']],
  avancado: {
    texto: `<h3>Hermenêutica da continuidade</h3>
<p>Bento XVI (discurso à Cúria, 22 de dezembro de 2005) propôs a "hermenêutica da reforma, da renovação na continuidade" para ler o Vaticano II, citando a liberdade religiosa como exemplo ${tag('fato')}.</p>
<h3>Republicanismo</h3>
<p>Philip Pettit propôs uma terceira concepção: liberdade como não dominação ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Bento XVI, Discurso à Cúria Romana (22 de dezembro de 2005).' }, { texto: 'Philip Pettit, Republicanism (1997).' }],
    exercicios: [
      mc('"Hermenêutica da continuidade" é de:', ['João XXIII', 'Bento XVI', 'Paulo VI', 'Francisco'], 1, '2005.'),
      mc('Liberdade como não dominação é de:', ['Berlin', 'Pettit', 'Mill', 'Rawls'], 1, 'Republicanism.'),
      mc('Bento XVI usou como exemplo de continuidade:', ['A liturgia', 'A liberdade religiosa', 'O ecumenismo apenas', 'O celibato'], 1, 'Discurso de 2005.'),
      disc('Dignitatis humanae rompe ou continua a doutrina anterior? Avalie com o discurso de 2005.', ['Expõe a tese da ruptura', 'Expõe a continuidade', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-5', titulo: 'Estado e bem comum',
  aprendera: ['A noção de bem comum', 'O Estado na tradição clássica e na moderna', 'Subsidiariedade e solidariedade', 'Comparar concepções de Estado'],
  explicacao: `
<h3>Bem comum</h3>
<p>O Vaticano II define o bem comum como "o conjunto das condições da vida social que permitem, tanto aos grupos como a cada membro, alcançar mais plena e facilmente a própria perfeição" (Gaudium et spes §26; Catecismo §1906) ${tag('doutrina')}. Não é soma de interesses individuais nem bem de um coletivo que absorve as pessoas ${tag('interpretacao')}.</p>
<h3>Tradição clássica</h3>
<p>Para Aristóteles, a pólis existe "para viver bem", não só para viver (Política I, 2; III, 9) ${tag('fato')}. Para Tomás, a lei e a autoridade se ordenam ao bem comum (I-II, q. 90) ${tag('fato')}.</p>
<h3>Modernos</h3>
<p>Hobbes: o Estado garante a paz contra a guerra de todos; Locke: protege direitos; liberalismo político (Rawls): neutralidade quanto às concepções de bem ${tag('fato')}.</p>
<h3>Princípios</h3>
<p>Subsidiariedade (aula 3) e solidariedade (Sollicitudo rei socialis §38: "determinação firme e perseverante de se empenhar pelo bem comum") são pilares da doutrina social ${tag('doutrina')}.</p>
<h3>Debates atuais</h3>
<p>O "pós-liberalismo" (Patrick Deneen, Por que o Liberalismo Fracassou?, 2018) e o "integralismo" são criticados por liberais católicos e não católicos ${tag('debate')}.</p>`,
  vocabulario: [['Bem comum', 'Condições que permitem a todos se aperfeiçoarem.'], ['Subsidiariedade', 'O maior não absorve o que o menor pode fazer.'], ['Solidariedade', 'Empenho firme pelo bem comum.'], ['Neutralidade liberal', 'O Estado não favorece concepções de bem.'], ['Pós-liberalismo', 'Crítica ao liberalismo a partir de tradições comunitárias.']],
  exemplos: '<p>Um sistema de saneamento é bem comum: ninguém o usa sozinho, e todos se beneficiam. Uma escola pública controlando todo o currículo das famílias levanta a questão da subsidiariedade.</p>',
  contexto: `<p>A doutrina social se desenvolveu de Rerum novarum (1891) até hoje ${tag('fato')}.</p>`,
  argumento: { titulo: 'O Estado não pode ser neutro (argumento perfeccionista, reconstruído)', tag: 'argumento',
    premissas: ['Toda lei favorece algumas formas de vida e desfavorece outras.', 'Logo, nenhum Estado é neutro quanto ao bem.', 'Se não pode ser neutro, deve buscar um bem verdadeiro.'],
    conclusao: 'Portanto, o Estado deve orientar-se pelo bem comum verdadeiro, com prudência e respeito à liberdade.',
    nota: 'Liberais respondem que neutralidade é de justificação, não de efeitos: as razões públicas devem ser aceitáveis a todos.' },
  objecoes: [{ objecao: 'Um Estado que persegue um bem comum substantivo tende ao autoritarismo.', tag: 'debate', resposta: 'A tradição responde com a subsidiariedade, os direitos da pessoa e a liberdade religiosa como limites. O risco é real e deve ser enfrentado institucionalmente.' }],
  aplicacao: '<p>Avalie uma política pública pelo bem comum, pela subsidiariedade e pela neutralidade liberal.</p>',
  fonte: { obra: 'Gaudium et spes §§26, 74; Aristóteles, Política I, 2', link: null, orientacao: '<p>Leia os dois parágrafos de Gaudium et spes e o capítulo da Política. Compare o fim do Estado em cada um.</p>' },
  perguntas: [
    { p: 'Como o Vaticano II define o bem comum?', r: 'Condições da vida social que permitem a todos alcançar a própria perfeição.' },
    { p: 'Para que existe a pólis em Aristóteles?', r: 'Para viver bem.' },
    { p: 'O que é solidariedade?', r: 'Empenho firme e perseverante pelo bem comum.' },
  ],
  exercicios: [
    mc('A definição de bem comum está em:', ['Rerum novarum', 'Gaudium et spes §26', 'Dei Filius', 'Humani generis'], 1, 'Também CIC §1906.'),
    mc('A solidariedade como virtude está em:', ['Sollicitudo rei socialis §38', 'Quadragesimo anno', 'Syllabus', 'Pacem in terris'], 0, 'João Paulo II, 1987.'),
    mc('Por que o Liberalismo Fracassou? é de:', ['Rawls', 'Deneen', 'MacIntyre', 'Taylor'], 1, '2018.'),
    mc('A resposta liberal ao argumento perfeccionista fala de neutralidade de:', ['Efeitos', 'Justificação', 'Religião', 'Economia'], 1, 'Razões públicas.'),
    disc('O Estado deve ser neutro quanto ao bem? Compare Rawls e a doutrina social.', ['Expõe Rawls', 'Expõe a doutrina', 'Avalia', 'Conclusão justificada'])],
  resumo: ['Bem comum.', 'Pólis para viver bem.', 'Estados modernos.', 'Subsidiariedade e solidariedade.', 'Neutralidade × perfeccionismo.'],
  referencias: [{ texto: 'Concílio Vaticano II, Gaudium et spes (1965).' }, { texto: 'Aristóteles, Política.' }, { texto: 'Patrick Deneen, Por que o Liberalismo Fracassou? (2018).' }],
  revisao: [['Bem comum', 'GS §26.'], ['Solidariedade', 'SRS §38.'], ['Neutralidade liberal', 'Rawls.']],
  avancado: {
    texto: `<h3>Maritain e a "sociedade personalista"</h3>
<p>Maritain (A Pessoa e o Bem Comum, 1947) distingue indivíduo (parte da sociedade) e pessoa (ordenada a um bem que transcende a sociedade) ${tag('fato')}.</p>
<h3>Razão pública</h3>
<p>Rawls (Liberalismo Político, 1993) propôs a "razão pública": em questões constitucionais, cidadãos devem oferecer razões aceitáveis a todos ${tag('fato')}. Críticos religiosos (Wolterstorff) contestaram ${tag('debate')}.</p>`,
    leituras: [{ texto: 'Jacques Maritain, A Pessoa e o Bem Comum (1947).' }, { texto: 'John Rawls, Liberalismo Político (1993).' }],
    exercicios: [
      mc('A distinção indivíduo × pessoa é de:', ['Mounier', 'Maritain', 'Rawls', 'Deneen'], 1, '1947.'),
      mc('"Razão pública" é conceito de:', ['Habermas apenas', 'Rawls', 'Maritain', 'Hayek'], 1, 'Liberalismo Político.'),
      mc('Crítico religioso da razão pública:', ['Wolterstorff', 'Rawls', 'Nozick', 'Mill'], 0, 'Nicholas Wolterstorff.'),
      disc('Um cidadão católico pode usar razões religiosas no debate público? Avalie Rawls e seus críticos.', ['Expõe Rawls', 'Expõe críticos', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-6', titulo: 'Direito e moral',
  aprendera: ['Positivismo jurídico (Kelsen, Hart)', 'Jusnaturalismo e a crítica a Kelsen', 'O debate Hart–Fuller e a fórmula de Radbruch', 'Dworkin e os princípios'],
  prereq: ['Aula 2 deste módulo'],
  explicacao: `
<h3>Positivismo jurídico</h3>
<p>Hans Kelsen (Teoria Pura do Direito, 1934; 2ª ed. 1960) separa o direito da moral: o direito é sistema de normas válidas por derivação de uma norma fundamental (<em>Grundnorm</em>) ${tag('fato')}. H. L. A. Hart (O Conceito de Direito, 1961): o direito é união de regras primárias (obrigações) e secundárias (reconhecimento, alteração, julgamento) ${tag('fato')}.</p>
<h3>Jusnaturalismo</h3>
<p>Para a tradição de Tomás, uma lei injusta não é plenamente lei (I-II, q. 95, a. 2) ${tag('fato')}. O positivismo responde que isso confunde o que o direito é com o que deveria ser ${tag('argumento')}.</p>
<h3>Hart–Fuller</h3>
<p>Em 1958, Hart e Lon Fuller debateram na Harvard Law Review: Fuller defendeu uma "moralidade interna do direito" (leis gerais, públicas, não retroativas, claras, coerentes, possíveis, estáveis, aplicadas conforme escritas) ${tag('fato')}.</p>
<h3>Radbruch</h3>
<p>Após o nazismo, Gustav Radbruch (1946): a lei positiva prevalece, salvo quando a contradição com a justiça é tão insuportável que a lei deve ceder ("injustiça extrema não é direito") ${tag('fato')}. Tribunais alemães usaram a fórmula ${tag('fato')}.</p>
<h3>Dworkin</h3>
<p>Ronald Dworkin (Levando os Direitos a Sério, 1977) argumentou que o direito inclui princípios morais, não só regras ${tag('fato')}.</p>`,
  vocabulario: [['Positivismo jurídico', 'Separação conceitual entre direito e moral.'], ['Grundnorm', 'Norma fundamental (Kelsen).'], ['Regra de reconhecimento', 'Critério de validade (Hart).'], ['Moralidade interna do direito', 'Requisitos formais da legalidade (Fuller).'], ['Fórmula de Radbruch', 'Injustiça extrema não é direito.']],
  exemplos: '<p>As leis raciais de Nuremberg eram "direito"? Para Kelsen, eram válidas no sistema; para Radbruch, eram injustiça extrema; para Tomás, corrupção da lei.</p>',
  contexto: `<p>Kelsen, judeu, foi expulso da Universidade de Colônia em 1933 ${tag('fato')}.</p>`,
  argumento: { titulo: 'A moralidade interna do direito (Fuller, reconstruído)', tag: 'argumento',
    premissas: ['O direito é a empresa de submeter a conduta humana a regras.', 'Essa empresa exige leis gerais, públicas, claras, não retroativas, possíveis etc.', 'Um regime que viola sistematicamente essas exigências não produz direito.'],
    conclusao: 'Logo, há uma conexão necessária entre direito e certa moralidade.',
    nota: 'Hart respondeu que esses são princípios de eficácia, compatíveis com fins iníquos: "moralidade do envenenador".' },
  objecoes: [{ objecao: 'O positivismo protege a segurança jurídica; o jusnaturalismo deixa juízes decidir pela própria moral.', tag: 'debate', resposta: 'Radbruch limita a exceção à injustiça extrema; Tomás pede prudência e respeito à lei imperfeita. O risco de ativismo judicial é real e discutido.' }],
  aplicacao: '<p>Escolha um caso judicial e analise-o com Kelsen, Hart, Fuller, Radbruch e Tomás.</p>',
  fonte: { obra: 'Hart, O Conceito de Direito, cap. IX; Tomás, ST I-II, q. 95, a. 2', link: null, orientacao: '<p>Leia o capítulo IX de Hart ("Leis e moral") e o artigo de Tomás.</p>' },
  perguntas: [
    { p: 'O que é a Grundnorm?', r: 'Norma fundamental que dá validade ao sistema (Kelsen).' },
    { p: 'O que é a moralidade interna do direito?', r: 'Requisitos formais da legalidade (Fuller).' },
    { p: 'O que diz a fórmula de Radbruch?', r: 'Injustiça extrema não é direito.' },
  ],
  exercicios: [
    mc('Teoria Pura do Direito é de:', ['Hart', 'Kelsen', 'Fuller', 'Dworkin'], 1, '1934.'),
    mc('O debate de 1958 na Harvard Law Review foi entre:', ['Kelsen e Hart', 'Hart e Fuller', 'Dworkin e Hart', 'Radbruch e Kelsen'], 1, 'Positivismo × Fuller.'),
    mc('Dworkin enfatizou no direito:', ['Só regras', 'Princípios', 'Costumes', 'Força'], 1, 'Levando os Direitos a Sério.'),
    mc('"Moralidade do envenenador" é crítica de Hart a:', ['Tomás', 'Fuller', 'Radbruch', 'Kelsen'], 1, 'Eficácia × moral.'),
    disc('Positivismo jurídico ou jusnaturalismo? Avalie com o caso das leis de Nuremberg.', ['Expõe as posições', 'Aplica ao caso', 'Objeções', 'Conclusão justificada'])],
  resumo: ['Kelsen e Hart.', 'Tomás: lei injusta.', 'Hart–Fuller.', 'Radbruch.', 'Dworkin.'],
  referencias: [{ texto: 'Hans Kelsen, Teoria Pura do Direito (1934/1960).' }, { texto: 'H. L. A. Hart, O Conceito de Direito (1961).' }, { texto: 'Lon Fuller, A Moralidade do Direito (1964).' }],
  revisao: [['Grundnorm', 'Kelsen.'], ['Fuller', 'Moralidade interna.'], ['Radbruch', 'Injustiça extrema.']],
  avancado: {
    texto: `<h3>Alexy</h3>
<p>Robert Alexy (Conceito e Validade do Direito, 1992) defendeu um "não positivismo inclusivo" e reformulou a fórmula de Radbruch ${tag('fato')}.</p>
<h3>Reale</h3>
<p>Miguel Reale (Teoria Tridimensional) uniu fato, valor e norma ${tag('fato')} — alternativa brasileira ao debate.</p>`,
    leituras: [{ texto: 'Robert Alexy, Conceito e Validade do Direito (1992).' }, { texto: 'Miguel Reale, Lições Preliminares de Direito (1973).' }],
    exercicios: [
      mc('"Conceito e Validade do Direito" é de:', ['Alexy', 'Reale', 'Dworkin', 'Hart'], 0, '1992.'),
      mc('Fato, valor e norma: teoria de:', ['Kelsen', 'Reale', 'Alexy', 'Fuller'], 1, 'Tridimensional.'),
      mc('Alexy reformulou a fórmula de:', ['Kelsen', 'Radbruch', 'Hart', 'Fuller'], 1, 'Não positivismo.'),
      disc('Compare a teoria tridimensional de Reale com Kelsen e Tomás.', ['Expõe Reale', 'Compara', 'Avalia', 'Conclusão'])],
  },
}),

aula({
  id: 'm13-7', titulo: 'Cultura e responsabilidade',
  aprendera: ['Conceitos de cultura', 'Alta cultura, cultura popular e cultura de massa', 'A responsabilidade do intelectual', 'Fé e cultura: evangelização da cultura'],
  explicacao: `
<h3>Cultura</h3>
<p>"Cultura" vem de <em>colere</em>, cultivar; Cícero fala de "cultura animi", cultivo da alma (Tusculanas II, 13) ${tag('fato')}. No sentido antropológico (Tylor, 1871), cultura é o conjunto de costumes, crenças e saberes de um povo ${tag('fato')}.</p>
<h3>Níveis</h3>
<p>T. S. Eliot (Notas para a Definição de Cultura, 1948) e a Escola de Frankfurt (Adorno e Horkheimer, "indústria cultural", 1947) criticaram, por razões diferentes, a cultura de massa ${tag('fato')}. Roger Scruton defendeu a alta cultura como transmissão de sentido ${tag('interpretacao')}.</p>
<h3>Responsabilidade do intelectual</h3>
<p>Benda (aula 12-6), Raymond Aron (O Ópio dos Intelectuais, 1955) e Thomas Sowell (Os Intelectuais e a Sociedade, 2009) discutem a influência e a irresponsabilidade de intelectuais ${tag('fato')}.</p>
<h3>Fé e cultura</h3>
<p>Paulo VI: "a ruptura entre Evangelho e cultura é, sem dúvida, o drama da nossa época" (Evangelii nuntiandi §20, 1975) ${tag('doutrina')}. João Paulo II fundou o Pontifício Conselho da Cultura (1982) ${tag('fato')}. Christopher Dawson (Religião e o Surgimento da Cultura Ocidental, 1950) defendeu que a religião é a chave das culturas ${tag('interpretacao')}.</p>`,
  vocabulario: [['Cultura animi', 'Cultivo da alma (Cícero).'], ['Cultura de massa', 'Produção cultural industrial para consumo amplo.'], ['Indústria cultural', 'Conceito de Adorno e Horkheimer.'], ['Evangelização da cultura', 'Impregnar as culturas com o Evangelho.'], ['Responsabilidade intelectual', 'Dever de verdade de quem influencia.']],
  exemplos: '<p>Uma série popular pode transmitir virtudes ou vícios. A pergunta não é se é "alta" ou "popular", mas o que ela cultiva na alma.</p>',
  contexto: `<p>O debate sobre cultura se intensificou com a mídia de massa no século XX ${tag('fato')}.</p>`,
  argumento: { titulo: 'A cultura forma a alma (reconstruído)', tag: 'argumento',
    premissas: ['O que contemplamos e imitamos molda nossos desejos.', 'A cultura é o conjunto do que uma sociedade oferece para contemplar e imitar.', 'Desejos moldam caráter.'],
    conclusao: 'Logo, a cultura forma o caráter, e há responsabilidade moral em produzi-la e consumi-la.',
    nota: 'Platão (República II–III) já argumentava assim sobre a poesia na educação.' },
  objecoes: [{ objecao: 'Julgar a cultura moralmente leva à censura.', tag: 'debate', resposta: 'Julgar não é proibir: a crítica e a educação do gosto são alternativas à censura. A tradição distingue responsabilidade pessoal e intervenção do Estado.' }],
  aplicacao: '<p>Faça um "exame de consumo cultural" de uma semana: o que você leu, ouviu e viu? O que isso cultivou?</p>',
  fonte: { obra: 'Evangelii nuntiandi §§18–20; T. S. Eliot, Notas para a Definição de Cultura, introdução', link: null, orientacao: '<p>Leia os parágrafos de Paulo VI e a introdução de Eliot. Compare os conceitos de cultura.</p>' },
  perguntas: [
    { p: 'De onde vem a palavra "cultura"?', r: 'De colere, cultivar.' },
    { p: 'Qual o "drama da nossa época" segundo Paulo VI?', r: 'A ruptura entre Evangelho e cultura.' },
    { p: 'O que é a "indústria cultural"?', r: 'Produção cultural industrial (Adorno e Horkheimer).' },
  ],
  exercicios: [
    mc('"Cultura animi" é expressão de:', ['Platão', 'Cícero', 'Eliot', 'Tylor'], 1, 'Tusculanas.'),
    mc('O Ópio dos Intelectuais é de:', ['Benda', 'Aron', 'Sowell', 'Scruton'], 1, '1955.'),
    mc('Evangelii nuntiandi é de:', ['João XXIII', 'Paulo VI', 'João Paulo II', 'Bento XVI'], 1, '1975.'),
    mc('Indústria cultural é conceito de:', ['Eliot', 'Adorno e Horkheimer', 'Dawson', 'Scruton'], 1, 'Dialética do Esclarecimento.'),
    disc('Qual a responsabilidade do intelectual católico na cultura contemporânea? Use dois autores.', ['Dois autores', 'Tese própria', 'Objeção', 'Conclusão'])],
  resumo: ['Cultura: cultivo.', 'Níveis de cultura.', 'Responsabilidade do intelectual.', 'Evangelho e cultura.', 'Crítica sem censura.'],
  referencias: [{ texto: 'T. S. Eliot, Notas para a Definição de Cultura (1948).' }, { texto: 'Paulo VI, Evangelii nuntiandi (1975).' }, { texto: 'Christopher Dawson, Religião e o Surgimento da Cultura Ocidental (1950).' }],
  revisao: [['Cultura animi', 'Cícero.'], ['EN §20', 'Ruptura Evangelho–cultura.'], ['Indústria cultural', 'Adorno e Horkheimer.']],
  avancado: {
    texto: `<h3>Pieper</h3>
<p>Josef Pieper (O Ócio e a Vida Intelectual, 1948) argumentou que o ócio contemplativo, ligado ao culto, é a base da cultura ${tag('fato')}.</p>
<h3>Ratzinger</h3>
<p>Joseph Ratzinger (Fé, Verdade, Tolerância, 2003) discute "interculturalidade" e o encontro entre fé e culturas ${tag('fato')}.</p>`,
    leituras: [{ texto: 'Josef Pieper, O Ócio e a Vida Intelectual (1948).' }, { texto: 'Joseph Ratzinger, Fé, Verdade, Tolerância (2003).' }],
    exercicios: [
      mc('O ócio como base da cultura é tese de:', ['Pieper', 'Eliot', 'Dawson', 'Adorno'], 0, '1948.'),
      mc('Fé, Verdade, Tolerância é de:', ['Ratzinger', 'Wojtyła', 'De Lubac', 'Congar'], 0, '2003.'),
      mc('Para Pieper, o ócio está ligado ao:', ['Trabalho', 'Culto', 'Mercado', 'Estado'], 1, 'Festa e contemplação.'),
      disc('Relacione a tese de Pieper sobre o ócio com a cultura de massa contemporânea.', ['Expõe Pieper', 'Analisa a cultura de massa', 'Avalia', 'Conclusão'])],
  },
}),

avaliacao('m13-8', 'Avaliação do módulo', `
<h3>O que esta prova avalia</h3>
<p>Aplicação de teorias éticas a casos; lei natural; teorias de justiça; liberdade e autoridade; Estado e bem comum; direito e moral; cultura.</p>
<h3>Trabalho comparativo</h3>
<p>O critério do módulo é um trabalho comparativo entre três autores sobre uma mesma questão. A primeira discursiva é esse trabalho.</p>`,
[
  disc('Trabalho comparativo: escolha uma questão (justiça, liberdade, relação direito–moral) e compare três autores estudados. Reconstrua o argumento de cada um, aponte objeções e defenda sua posição.', ['Três autores fiéis', 'Argumentos reconstruídos', 'Objeções', 'Posição própria justificada', 'Uso de fontes primárias']),
  disc('Aplique ética das virtudes, deontologia e consequencialismo a um caso de bioética ou de política pública.', ['Caso definido', 'Três teorias', 'Comparação', 'Conclusão']),
  disc('Explique o bem comum, a subsidiariedade e a solidariedade e use-os para avaliar uma instituição concreta.', ['Definições corretas', 'Instituição concreta', 'Avaliação', 'Clareza']),
]),
];
