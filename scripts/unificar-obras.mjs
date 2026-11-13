// Gera app/data/unificacoes.js: que registros da mediateca são a mesma obra (outra edição, tradução ou grafia do
// título) ou volumes e partes dela. Uso: node scripts/unificar-obras.mjs
//
// Critério, de propósito conservador: mesmo título de base (sem artigo inicial, parênteses, colchetes, subtítulo e
// marca de volume) E um nome de autor em comum. Registro sem autor só entra se o próprio título traz o nome do autor
// do grupo. Títulos genéricos ("Obras completas", "Poemas", "Cartas"…) ficam de fora. Grupos com dois ou mais livros
// do acervo original não são tocados. O que sobra continua na lista de possíveis duplicatas da tela, para decisão
// humana. O arquivo gerado pode ser corrigido à mão: grupos em MANTER (abaixo) não são gerados de novo.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { REGISTROS, MARCA_VOLUME as VOL } from '../app/data/mediateca.js';
import { livroPorId } from '../app/data/livros.js';
import { normalizar } from '../app/core.js';

/** Títulos de base que NÃO devem ser unificados mesmo com autor em comum (decisão humana). */
const MANTER_SEPARADOS = new Set([]);
/** Títulos de base em que registros com subtítulos diferentes são a mesma obra (conferidos um a um). */
const JUNTAR_SUBTITULOS = new Set(['aristoteles em nova perspectiva', 'didascalicon', 'formacao das almas', 'madame bovary', 'mimesis', 'nova era e a revolucao cultural', 'saudades do carnaval', 'senhor dos aneis', 'sertoes', 'visoes de descartes', 'gramatica latina', 'lingva latina per se illvstrata', 'dialogos i', 'dialogos ii', 'dialogos iii', 'em busca de sentido', 'consolacao da filosofia', 'divina comedia', 'decadencia do ocidente', 'metamorfoses', 'farsalia', 'ser e tempo']);
/** Títulos de base em que os subtítulos diferentes são volumes da mesma obra (conferidos um a um). */
const JUNTAR_COMO_PARTES = new Set(['ordem e historia', 'tempo e o vento', 'semantic foundations of logic', 'filosofia', 'filosofia das formas simbolicas']);

const GENERICOS = new Set(['volume', 'obras completas', 'obra completa', 'obras', 'obras escolhidas', 'poemas', 'poesias', 'poesia', 'poesia completa', 'cartas', 'sermoes', 'dialogos', 'ensaios', 'contos', 'teatro', 'teatro completo', 'historia', 'introducao', 'memorias', 'discursos', 'fragmentos', 'tratados', 'opusculos', 'antologia', 'escritos', 'textos escolhidos', 'correspondencia']);
const VOL_G = new RegExp(VOL.source, 'gi');
const semArtigo = (t) => t.replace(/^(o|a|os|as|the|le|la|les|el|um|uma) /, '');
const palavras = (t) => t.replace(/[^\p{L}\p{N} ]/gu, ' ').replace(/\s+/g, ' ').trim();
/** Título inteiro, só sem parênteses, colchetes e artigo inicial. */
const inteiro = (t) => semArtigo(palavras(normalizar(t).replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')));
/** Título de base: sem subtítulo e sem marca de volume. */
const base = (t) => semArtigo(palavras(normalizar(t).replace(/\[[^\]]*\]|\([^)]*\)/g, ' ').replace(VOL_G, ' ').replace(/[:–—].*$/, ' ').replace(/ - .*$/, ' ')));
const NAO_NOME = new Set(['santo', 'santa', 'conforme', 'edicao', 'sobre', 'traducao', 'organizacao', 'varios', 'autores', 'volumes', 'padre', 'frei', 'papa', 'para', 'hipona']);
const lista = (c) => palavras(normalizar(c)).split(' ').filter((p) => p.length >= 4 && !NAO_NOME.has(p));
const nomes = (c) => new Set(lista(c));
/** Sobrenome: o último nome do primeiro autor citado (antes de "e", vírgula ou barra). */
const sobrenome = (c) => lista(String(c).split(/,| e | \/ |;/)[0]).at(-1) ?? lista(c).at(-1) ?? '';
const PARTE = /\((primeir|segund|terceir|quart)[ao]\b|\b(primeira|segunda|terceira) parte\b|\b(livro|book|box|caixa|cantos?)\s+(de\s+)?([ivx]+|\d+)\b|\(\s*\d{1,3}\s*[-–a]\s*\d{1,3}\s*\)/i;
const TRADUCAO = /\btradu[cç][aã]o d[eoa]\b|\btrad\.\s/i;
/** O registro é um volume ou parte (a marca pode estar no título ou, por erro da fonte, no campo do autor). */
const ehParte = (o) => VOL.test(o.titulo) || PARTE.test(o.titulo) || VOL.test(o.criador || '');
const autorDe = (o) => o.criador || (o.livro ? livroPorId[o.livro]?.autor : '') || '';

const porBase = new Map();
for (const o of REGISTROS) { const k = base(o.titulo); if (k.length >= 5 && !GENERICOS.has(k) && !MANTER_SEPARADOS.has(k)) porBase.set(k, [...(porBase.get(k) ?? []), o]); }

const grupos = [];
const pendentes = []; // subtítulos diferentes do mesmo autor e título de base: ficam para decisão humana
for (const [k, lista] of porBase) {
  if (lista.length < 2) continue;
  const subs = [];
  const semAutor = [];
  for (const o of lista) {
    const ns = nomes(autorDe(o));
    if (!ns.size) { semAutor.push(o); continue; }
    // mesmo autor: o sobrenome de um aparece entre os nomes do outro (um prenome em comum não basta)
    const sn = sobrenome(autorDe(o));
    const alvo = subs.find((s) => s.nomes.has(sn) || [...s.sobrenomes].some((x) => ns.has(x)));
    if (alvo) { alvo.obras.push(o); ns.forEach((x) => alvo.nomes.add(x)); alvo.sobrenomes.add(sn); } else subs.push({ nomes: ns, sobrenomes: new Set([sn]), obras: [o] });
  }
  // registro sem autor: entra no subgrupo cujo autor aparece no próprio título do registro
  for (const o of semAutor) {
    const t = new Set(palavras(normalizar(o.titulo)).split(' '));
    const alvos = subs.filter((s) => [...s.sobrenomes].some((x) => t.has(x)));
    if (alvos.length === 1) alvos[0].obras.push(o);
  }
  for (const s of subs) {
    // dentro do mesmo autor e título de base: registros de título inteiro igual são a mesma obra; os que trazem marca
    // de volume ou parte juntam-se ao título de base; subtítulos diferentes só se juntam se o título estiver aprovado
    const comoPartes = JUNTAR_COMO_PARTES.has(k);
    const aprovado = comoPartes || JUNTAR_SUBTITULOS.has(k);
    const feixes = new Map();
    for (const o of s.obras) { const c = aprovado || ehParte(o) ? k : inteiro(o.titulo); feixes.set(c, [...(feixes.get(c) ?? []), o]); }
    for (const [c, obras] of feixes) {
      if (obras.length < 2) { if (!aprovado && feixes.size > 1) pendentes.push(`${k}: ${obras[0].titulo} — ${autorDe(obras[0])}`); continue; }
      if (obras.filter((o) => o.livro).length > 1) continue;
      const peso = (o) => [o.livro ? 0 : 1, ehParte(o) ? 1 : 0, inteiro(o.titulo) === k ? 0 : 1, TRADUCAO.test(o.titulo) ? 1 : 0, -o.fontes.length, o.titulo.length, o.id];
      const ordem = [...obras].sort((a, b) => { const pa = peso(a), pb = peso(b); for (let i = 0; i < pa.length; i++) if (pa[i] !== pb[i]) return pa[i] < pb[i] ? -1 : 1; return 0; });
      const [principal, ...outros] = ordem;
      const subtitulado = (o) => comoPartes && inteiro(o.titulo) !== k;
      const tipo = (o) => (ehParte(o) || subtitulado(o) ? 'p' : TRADUCAO.test(o.titulo) ? 't' : 'd');
      // obra que só existe em volumes: o principal também é um volume, e a obra leva o título comum
      let comum = null;
      if (ehParte(principal) || subtitulado(principal)) {
        const cortes = [VOL.exec(principal.titulo)?.index, PARTE.exec(principal.titulo)?.index, principal.titulo.search(/[:(]| [–—-] /)].filter((i) => i > 0);
        const t = cortes.length ? principal.titulo.slice(0, Math.min(...cortes)).replace(/[\s([:–—,-]+$/, '') : '';
        if (t.length >= 4 && outros.every((o) => tipo(o) === 'p')) comum = t;
      }
      grupos.push({ k: c, principal, comum, outros: outros.map((o) => [o, tipo(o)]) });
    }
  }
}
grupos.sort((a, b) => a.k.localeCompare(b.k, 'pt'));

const txt = (o) => `${o.livro ? '[acervo] ' : ''}${o.titulo}${autorDe(o) ? ` — ${autorDe(o)}` : ''}`.replace(/\*\//g, '');
const linhas = grupos.map((g) => `  // ${g.comum ? `${g.comum}  (obra em volumes)\n  //   + ` : ''}${txt(g.principal)}\n${g.outros.map(([o, t]) => `  //   ${{ d: '=', p: '+', t: '~' }[t]} ${txt(o)}`).join('\n')}\n  [${JSON.stringify(g.principal.id)}, [${g.outros.map(([o, t]) => `[${JSON.stringify(o.id)}, '${t}']`).join(', ')}]${g.comum ? `, ${JSON.stringify(g.comum)}` : ''}],`);
const absorvidos = grupos.reduce((n, g) => n + g.outros.length, 0);
writeFileSync(join(import.meta.dirname, '..', 'app', 'data', 'unificacoes.js'), `// Gerado por scripts/unificar-obras.mjs. Pode ser corrigido à mão: apague a linha de um grupo errado e ponha o
// título de base em MANTER_SEPARADOS, no script, para ele não voltar.
// Cada linha: [id da obra principal, [[id do registro unificado, tipo], …], título comum (só para obra em volumes)]. Tipo 'd': outro registro da mesma obra
// (edição, tradução ou grafia do título); 'p': volume ou parte. 't': tradução identificada. Nos comentários, "=" marca 'd', "+" marca 'p' e "~" marca 't'.
// ${grupos.length} obras reúnem ${absorvidos} registros além do principal.
export const UNIFICACOES = [
${linhas.join('\n')}
];
`);
console.log(`${grupos.length} grupos; ${absorvidos} registros unificados; ${grupos.filter((g) => g.principal.livro).length} com livro do acervo como principal`);
if (process.argv.includes('--pendentes')) console.log(pendentes.sort().join('\n'));
else console.log(`${pendentes.length} registros com subtítulo diferente ficaram para decisão humana (--pendentes para listar)`);
