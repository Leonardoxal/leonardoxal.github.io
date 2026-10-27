// Obras completas dos autores estudados, integradas numa única sequência de leitura por degrau.
// Não há trilha separada: cada degrau lê, em ordem, introduções, depois a obra inteira de cada autor.
import { ANTIGOS } from './antigos.js';
import { MEDIEVAIS } from './medievais.js';
import { TOMAS } from './tomas.js';
import { MODERNOS } from './modernos.js';
import { CONTEMPORANEOS } from './contemporaneos.js';
import { TOMISTAS } from './tomistas.js';
import { BRASILEIROS } from './brasileiros.js';

const GRUPOS = [...ANTIGOS, ...MEDIEVAIS, ...TOMAS, ...MODERNOS, ...CONTEMPORANEOS, ...TOMISTAS, ...BRASILEIROS];

/** Obras novas (as que ainda não existiam em livros.js). */
export const OBRAS = GRUPOS.flatMap((g) => g.itens.filter((i) => !i.ref));

/** Obras de cada autor em ordem de leitura (ids novos e já existentes). */
export const ORDEM_AUTOR = Object.fromEntries(GRUPOS.map((g) => [g.chave, g.itens.map((i) => i.ref || i.id)]));

/**
 * Sequência de cada degrau. '@autor' expande as obras desse autor que pertencem ao degrau,
 * na ordem do autor; um id isolado coloca aquele livro naquele ponto. Cada livro entra uma só vez.
 */
export const SEQUENCIA = {
  0: ['adler-como-ler', 'chaui-convite', 'japiassu-dicionario', 'sertillanges-vida', 'booth-pesquisa'],
  1: ['biblia-marcos', 'biblia-lucas', 'biblia-atos', 'biblia-joao', 'biblia-genesis-exodo', 'biblia-salmos', 'compendio-cic', 'cic', 'ratzinger-introducao', 'dei-verbum', 'newman-desenvolvimento', 'denzinger'],
  2: ['pieper-filosofar', 'maritain-introducao', '@socrates', 'fides-et-ratio', 'newman-gramatica'],
  3: ['weston-arte', 'copi-logica', '@aristoteles', '@maritain', 'kreeft-logica'],
  4: ['hadot-antiga', 'jaeger-paideia', 'grego-instrumental', '@platao', '@aristoteles', '@epicuro', '@epicteto', '@marco-aurelio'],
  5: ['introducao-epistemologia', '@platao', '@aristoteles', '@tomas', 'leibniz-monadologia', '@hume', 'garrigou-deus', 'feser-cinco', 'mackie-milagre'],
  6: ['latim-instrumental', 'gilson-espirito', 'gilson-filosofia-idade-media', 'gilson-agostinho', '@agostinho', '@boecio', '@anselmo', 'boaventura-itinerario', 'gilson-boaventura', 'pieper-tomas', 'gilson-tomismo', '@tomas', '@gilson'],
  7: ['@descartes', 'gilson-index', 'gilson-estudos-cartesianos', 'spinoza-etica', '@pascal', '@locke', '@hume', '@rousseau', '@kant', '@gilson'],
  8: ['manual-contemporanea', '@hegel', '@kierkegaard', '@marx', '@nietzsche', 'frege-sentido', 'husserl-meditacoes', 'heidegger-ser-tempo', '@wittgenstein', '@popper', 'kuhn-estrutura', '@sartre', '@maritain', '@gilson', 'anscombe-mmp', '@macintyre', 'voegelin-nova-ciencia', 'taylor-era-secular'],
  9: ['@olavo', '@mfs'],
  10: ['@olavo', 'lavelle-presenca', 'guenon-crise', 'voegelin-ordem'],
  11: ['@jp2', 'finnis-lei-natural', 'strauss-direito-natural', 'rawls-justica', 'arendt-condicao', 'burke-reflexoes', 'tocqueville-democracia'],
  12: ['eco-tese'],
};

/**
 * Aulas que introduzem a leitura: em cada degrau, a aula entra antes do ponto indicado da sequência
 * ('^' = início do degrau, '@autor' = antes da primeira obra desse autor, id = antes desse livro).
 * As demais aulas do degrau vêm depois de todos os livros.
 */
export const INTRODUCOES = {
  0: { '^': ['m3-1'] },
  1: { '^': ['m1-1', 'm1-2', 'm1-3'], 'biblia-marcos': ['m2-1', 'm2-2', 'm2-3'], 'compendio-cic': ['m1-4'] },
  2: { '^': ['m3-2'], '@socrates': ['m3-5', 'm3-6', 'm3-7'], 'fides-et-ratio': ['m3-8'] },
  3: { '^': ['m4-1'], '@aristoteles': ['m4-2', 'm4-3', 'm4-4', 'm4-5', 'm4-6', 'm4-7'] },
  4: { '^': ['m5-1', 'm5-2'], '@platao': ['m5-3', 'm5-4', 'm5-5', 'm5-6'], '@aristoteles': ['m5-7', 'm5-8', 'm5-9'], '@epicuro': ['m5-10'], '@epicteto': ['m5-11'] },
  5: { '^': ['m6-1', 'm7-1', 'm7-2'], '@aristoteles': ['m7-4', 'm7-5'], '@tomas': ['m7-3', 'm7-7'], '@hume': ['m6-5'] },
  6: { '@agostinho': ['m8-1', 'm8-2'], '@boecio': ['m8-3'], '@anselmo': ['m8-4'], '@tomas': ['m8-5', 'm8-7', 'm8-8'] },
  7: { '@descartes': ['m9-1', 'm9-2'], '@pascal': ['m9-3'], '@locke': ['m9-4'], '@hume': ['m9-5'], '@rousseau': ['m9-6'], '@kant': ['m9-7', 'm9-8'] },
  8: { '@hegel': ['m10-1'], '@kierkegaard': ['m10-3'], '@marx': ['m10-2'], '@nietzsche': ['m10-4'], '@wittgenstein': ['m10-9'], '@popper': ['m10-7', 'm10-8'], '@sartre': ['m10-5', 'm10-6'], '@macintyre': ['m10-10'] },
  9: { '^': ['m11-1', 'm11-2'] },
  10: { '^': ['m12-1', 'm12-2'] },
  11: { '^': ['m14-1'] },
  12: {},
};

const DE_AUTOR = new Map(Object.entries(ORDEM_AUTOR).flatMap(([chave, ids]) => ids.map((id) => [id, chave])));

/**
 * Atribui a cada livro sua posição na sequência do degrau e marca a qual autor estudado a obra pertence.
 * @param {object[]} livros
 * @returns {object[]}
 */
export function sequenciar(livros) {
  const porId = Object.fromEntries(livros.map((l) => [l.id, l]));
  const ordem = new Map();
  for (const [n, chaves] of Object.entries(SEQUENCIA)) {
    let i = 0;
    const por = (id) => { if (!ordem.has(id) && porId[id]?.degrau === Number(n)) ordem.set(id, ++i); };
    for (const c of chaves) (c.startsWith('@') ? ORDEM_AUTOR[c.slice(1)] : [c]).forEach(por);
  }
  return livros.map((l) => {
    const chave = DE_AUTOR.get(l.id);
    // Fora da sequência vai para o fim do degrau; o teste de integridade impede que isso aconteça.
    const base = { ...l, ordem: ordem.get(l.id) ?? 1000 + l.ordem };
    return chave ? { ...base, obraDe: chave } : base;
  });
}
