// Espectro político dos movimentos da genealogia das ideias.
// A régua esquerda–direita nasce na Assembleia francesa de 1789: aplicá-la antes disso é anacrônico,
// e muitas correntes filosóficas não têm posição política própria. Toda classificação aqui é
// interpretação de historiadores (a tela a marca assim); onde os autores divergem, vale "varia".

export const POSICOES = {
  esquerda: 'Esquerda',
  'centro-esquerda': 'Centro-esquerda',
  centro: 'Centro',
  'centro-direita': 'Centro-direita',
  direita: 'Direita',
  variado: 'Varia conforme o autor',
  'sem-posicao': 'Sem posição política própria',
  anterior: 'Anterior à régua esquerda–direita',
};

/** id do movimento → { pos, nota }. Movimentos ausentes recebem o padrão de espectroDe. */
export const ESPECTRO = {
  'idealismo-alemao': { pos: 'variado', nota: 'Depois de Hegel, os discípulos se dividiram em "hegelianos de direita", conservadores, e "de esquerda", entre os quais esteve o jovem Marx.' },
  utilitarismo: { pos: 'variado', nota: 'No século XIX, liberalismo reformista (Bentham, Mill, ligados aos radicais ingleses); hoje sustenta tanto posições liberais quanto progressistas.' },
  romantismo: { pos: 'variado', nota: 'Teve vertentes conservadoras, de defesa da tradição e da religião (Novalis, Chateaubriand), e revolucionárias (Byron, Shelley).' },
  positivismo: { pos: 'variado', nota: 'Comte defendia ordem e autoridade de uma elite científica; no Brasil inspirou o republicanismo e o lema "Ordem e Progresso".' },
  'kierkegaard-mov': { pos: 'sem-posicao', nota: 'Crítico da política de massas e da cristandade oficial, sem programa político.' },
  marxismo: { pos: 'esquerda', nota: 'Matriz do socialismo e do comunismo: crítica do capitalismo e da propriedade privada dos meios de produção.' },
  'nietzsche-mov': { pos: 'variado', nota: 'Antidemocrático e anti-igualitário, foi apropriado pela direita radical e, depois, por autores da esquerda pós-moderna.' },
  pragmatismo: { pos: 'centro-esquerda', nota: 'Dewey defendeu um liberalismo progressista e a reforma da educação; Peirce e James não tinham programa político.' },
  neotomismo: { pos: 'variado', nota: 'Ligado à doutrina social da Igreja (Rerum Novarum, 1891): critica tanto o liberalismo econômico quanto o socialismo; inspirou a democracia cristã.' },
  tradicionalismo: { pos: 'direita', nota: 'Antimoderno. Guénon se dizia apolítico; Evola ligou-se à extrema direita.' },
  frankfurt: { pos: 'esquerda', nota: 'Neomarxismo acadêmico; inspirou a Nova Esquerda dos anos 1960.' },
  existencialismo: { pos: 'variado', nota: 'Sartre e Beauvoir à esquerda; Marcel e Jaspers fora dela; Camus rompeu com o comunismo.' },
  personalismo: { pos: 'variado', nota: 'Mounier ficou na esquerda cristã; Maritain inspirou a democracia cristã, de centro.' },
  virtudes: { pos: 'variado', nota: 'MacIntyre critica o liberalismo e o capitalismo a partir de Aristóteles e Tomás; é lido por comunitaristas, conservadores e católicos.' },
  'pos-estruturalismo': { pos: 'esquerda', nota: 'Seus principais nomes (Foucault, Derrida, Deleuze) ficaram associados à esquerda; críticos o ligam ao relativismo.' },
  'olavo-mov': { pos: 'direita', nota: 'Conservador; influência central na nova direita brasileira a partir dos anos 2010.' },
};

const REGUA = 1789;

/** Posição de um movimento: a registrada, ou o padrão pela data de início. */
export const espectroDe = (m) => ESPECTRO[m.id] || { pos: m.inicio < REGUA ? 'anterior' : 'sem-posicao', nota: '' };
