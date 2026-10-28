// Espectro político dos movimentos da genealogia das ideias, em dois eixos:
//   eco — economia, de 0 (mais estatista) a 100 (mais liberal);
//   cos — costumes, de 0 (mais progressista) a 100 (mais conservador).
// Cada eixo traz uma faixa [mín, máx], porque os autores de uma mesma corrente divergem.
// A régua esquerda–direita nasce na Assembleia francesa de 1789: aplicá-la antes disso é anacrônico,
// e muitas correntes filosóficas não têm posição política própria. Toda posição aqui é interpretação
// de historiadores (a tela a marca assim), não um fato.

export const POSICOES = {
  'esquerda-conservadora': 'Esquerda conservadora',
  'direita-conservadora': 'Direita conservadora',
  'esquerda-progressista': 'Esquerda progressista',
  'direita-progressista': 'Direita progressista',
  variado: 'Varia conforme o autor',
  'sem-posicao': 'Sem posição política própria',
  anterior: 'Anterior à régua esquerda–direita',
};

/** id do movimento → { eco, cos, nota, rotulo? } ou { pos: 'sem-posicao', nota }. Ausentes recebem o padrão de espectroDe. */
export const ESPECTRO = {
  liberalismo: { eco: [75, 95], cos: [35, 60], nota: 'Liberdade econômica e direitos individuais; nos costumes vai do moderado (Tocqueville) ao progressista (Constant, Mill).' },
  'idealismo-alemao': { eco: [15, 65], cos: [35, 90], rotulo: 'Idealismo alemão', nota: 'Depois de Hegel, os discípulos se dividiram em "hegelianos de direita", conservadores, e "de esquerda", entre os quais esteve o jovem Marx.' },
  utilitarismo: { eco: [55, 85], cos: [10, 40], nota: 'Liberalismo reformista do século XIX (Bentham, Mill, ligados aos radicais ingleses): mercado com reformas sociais e liberdade de costumes.' },
  conservadorismo: { eco: [50, 80], cos: [80, 98], nota: 'Tradição, religião e instituições herdadas; na economia, de Burke, defensor do livre comércio, a conservadores que defendem proteção social.' },
  romantismo: { eco: [20, 60], cos: [15, 90], nota: 'Teve vertentes conservadoras, de defesa da tradição e da religião (Novalis, Chateaubriand), e revolucionárias (Byron, Shelley).' },
  positivismo: { eco: [30, 55], cos: [45, 75], nota: 'Comte defendia ordem e a autoridade de uma elite científica; no Brasil inspirou o republicanismo e o lema "Ordem e Progresso".' },
  'kierkegaard-mov': { pos: 'sem-posicao', nota: 'Crítico da política de massas e da cristandade oficial, sem programa político.' },
  marxismo: { eco: [0, 8], cos: [15, 45], nota: 'Estatização dos meios de produção. A teoria critica a família burguesa e a religião, embora os regimes comunistas tenham sido rígidos nos costumes.' },
  'social-democracia': { eco: [15, 35], cos: [15, 45], rotulo: 'Social-democracia', nota: 'Economia mista e Estado de bem-estar; nos costumes, progressista na maior parte da Europa.' },
  'nietzsche-mov': { eco: [35, 85], cos: [15, 85], rotulo: 'Nietzsche', nota: 'Antidemocrático e anti-igualitário, foi apropriado pela direita radical e, depois, por autores da esquerda pós-moderna.' },
  pragmatismo: { eco: [30, 48], cos: [15, 35], nota: 'Dewey defendeu um liberalismo progressista e a reforma da educação; Peirce e James não tinham programa político.' },
  neotomismo: { pos: 'sem-posicao', nota: 'Escola filosófica; sua dimensão política aparece na doutrina social da Igreja e na democracia cristã.' },
  'democracia-crista': { eco: [40, 62], cos: [65, 90], rotulo: 'Democracia cristã', nota: 'Economia social de mercado, subsidiariedade e família; costuma ficar no centro-direita europeu.' },
  tradicionalismo: { eco: [30, 70], cos: [92, 100], rotulo: 'Tradicionalismo', nota: 'Antimoderno e hostil ao mundo comercial, sem programa econômico; Guénon se dizia apolítico, Evola ligou-se à extrema direita.' },
  frankfurt: { eco: [5, 20], cos: [0, 15], rotulo: 'Escola de Frankfurt', nota: 'Neomarxismo acadêmico; inspirou a Nova Esquerda dos anos 1960.' },
  existencialismo: { eco: [5, 60], cos: [5, 60], nota: 'Sartre e Beauvoir à esquerda; Marcel e Jaspers fora dela; Camus rompeu com o comunismo.' },
  personalismo: { eco: [20, 50], cos: [45, 80], nota: 'Contra o individualismo e o coletivismo: Mounier ficou na esquerda cristã; Maritain inspirou a democracia cristã.' },
  libertarianismo: { eco: [92, 100], cos: [5, 35], rotulo: 'Libertarianismo', nota: 'Mínimo de Estado na economia e nos costumes. Hayek, porém, recusava tanto o rótulo de conservador quanto o de libertário puro.' },
  virtudes: { eco: [20, 45], cos: [60, 88], rotulo: 'Ética das virtudes', nota: 'MacIntyre critica o liberalismo e o capitalismo a partir de Aristóteles e Tomás; é lido por comunitaristas, conservadores e católicos.' },
  'pos-estruturalismo': { eco: [15, 40], cos: [0, 12], rotulo: 'Pós-estruturalismo', nota: 'Seus principais nomes (Foucault, Derrida, Deleuze) ficaram associados à esquerda; críticos o ligam ao relativismo.' },
  'olavo-mov': { eco: [75, 95], cos: [88, 100], nota: 'Conservador nos costumes e favorável ao livre mercado; influência central na nova direita brasileira a partir dos anos 2010.' },
};

const REGUA = 1789;
const FAIXA_VARIADA = 45; // faixa mais larga que isso num eixo: a corrente não cabe num quadrante

const meio = ([a, b]) => (a + b) / 2;

/** Quadrante a partir das faixas: o centro decide; faixa larga demais vira "varia conforme o autor". */
export function quadrante(e) {
  if (!e.eco) return e.pos;
  if (e.eco[1] - e.eco[0] > FAIXA_VARIADA || e.cos[1] - e.cos[0] > FAIXA_VARIADA) return 'variado';
  return `${meio(e.eco) < 50 ? 'esquerda' : 'direita'}-${meio(e.cos) >= 50 ? 'conservadora' : 'progressista'}`;
}

/** Posição de um movimento: { pos, nota, eco?, cos?, rotulo? }. Sem registro: padrão pela data de início. */
export function espectroDe(m) {
  const e = ESPECTRO[m.id] || { pos: m.inicio < REGUA ? 'anterior' : 'sem-posicao', nota: '' };
  return { ...e, pos: quadrante(e) };
}
