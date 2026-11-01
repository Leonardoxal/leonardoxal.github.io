// Converte os dados brutos extraídos das fontes externas (pasta dados-brutos/) em registros da mediateca
// (app/data/externos.js). Só títulos de obras e seus autores, com a fonte e a lista de origem de cada um.
// Regras: nada é inventado. Quando o autor não está explícito na fonte, fica vazio ("não informado").
// Uso: node scripts/importar-fontes.mjs   (relatório no terminal; --json para números em JSON)
import { readFileSync, writeFileSync } from 'node:fs';
import { LIVROS } from '../app/data/livros.js';
import { DISCIPLINAS } from '../app/data/disciplinas.js';
import { chaveObra } from '../app/data/mediateca.js';
import { normalizar } from '../app/core.js';

const ler = (n) => JSON.parse(readFileSync(new URL(`../dados-brutos/${n}.json`, import.meta.url), 'utf8'));
const coa = ler('coa-listas');
const cof = ler('olavo-cof');
const slug = (s) => normalizar(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);
const limpar = (s) => s.replace(/\[\d+\]/g, '').replace(/\[(restrito|citado[^\]]*|recomenda[^\]]*)\]/gi, '').replace(/\s+/g, ' ').replace(/[;,.]\s*$/, '').trim();

const descartes = { prosa: 0, remissao: 0, ementa: 0, meta: 0 };
const registros = new Map();
function adicionar({ titulo, criador, categoria, data = '', fonte }) {
  titulo = limpar(titulo);
  criador = limpar(criador).replace(/[;,.]+$/, '');
  if (!titulo || titulo.length < 2) return;
  const chave = `${categoria}|${chaveObra(criador, titulo)}`;
  const r = registros.get(chave);
  if (r) { if (!r.fontes.some((f) => f.url === fonte.url && f.nota === fonte.nota)) r.fontes.push(fonte); return; }
  registros.set(chave, {
    id: `ext-${slug(`${criador} ${titulo}`)}`, titulo, criador, categoria, data, pais: '', disciplinas: [], temas: [],
    contexto: '', nivel: null, prereq: [], justificativa: '', fontes: [fonte], link: null, direitos: '', relacoes: [],
  });
}

// --- Fonte 1: listas do Contra os Acadêmicos (recomendações de leitura) ---
const SEPARADOR = /\s*[–—]\s*|\s-\s/;
const PROSA = /^(ver |conferir |obs[.:]|~|lista de leitura|para |a partir|na parte|embora|deixaremos|recomendamos|sendo assim|aqui |esses livros|se você|esse é)/i;
// Ordem de "A – B" em cada lista, conferida em amostras de cada uma. Nas listas fora da tabela, o travessão
// separa título e subtítulo (ou volume), e o item inteiro é tomado como título.
const ORIENTACAO = {
  'lista-de-leitura-de-historia': 'autor-titulo', 'lista-de-leitura-de-direito': 'autor-titulo',
  'lista-de-leitura-de-economia': 'autor-titulo', 'lista-de-leitura-de-politica': 'autor-titulo',
  'lista-de-leitura-de-matematica': 'autor-titulo', 'os-melhores-livros-brasileiros-por-olavo-de-carvalho': 'autor-titulo',
  'lista-de-filosofia-chinesa': 'autor-titulo', 'lista-de-leitura-ordenada-viktor-emil-frankl': 'autor-titulo',
  'lista-de-leitura-de-f-w-j-schelling': 'autor-titulo',
  'lista-de-leitura-de-filosofia-para-iniciantes-e-interessados': 'titulo-autor', 'lista-de-leitura-de-psicologia': 'titulo-autor',
  'lista-de-leitura-de-linguistica': 'titulo-autor', 'lista-de-leitura-de-logica': 'titulo-autor',
  'lista-de-leitura-de-fisica': 'titulo-autor', 'lista-de-leitura-auxiliar-idiomas': 'titulo-autor',
  'lista-de-leituras-sugeridas-por-jose-monir-nasser': 'titulo-autor', 'lista-de-introducao-ao-tomismo': 'titulo-autor',
  'lista-de-leitura-de-catolicismo-romano': 'titulo-autor', 'lista-de-leitura-ordenada-xavier-zubiri': 'titulo-autor',
};
// Nestas listas, cada seção tem o nome do autor e os itens são as obras dele (conferido nos títulos das seções).
const SECOES_SAO_AUTORES = /lista-de-literatura-parte-(1|2|5|6|7|8)-|lista-de-leituras-sugeridas-por-mortimer-adler/;
const SECAO_NAO_AUTOR = /^(apoio|bônus|ou|idade média|o renascimento|o século|romantismo|em |escritos|obras?\b|obra completa|comédias|prosa|moll flanders|peregrinação|clepsidra|modernismo|realismo|simbolismo|naturalismo|barroco|arcadismo|parte|lista)/i;
const autorDaSecao = (s) => s.replace(/\[[^\]]*\]/g, '').replace(/\([^)]*\)/g, '').replace(/^\d+\.\s*/, '').trim();
// Onde as obras de cada lista entram no curso: disciplinas (d) e módulos da escada (m), pelo tema da lista.
// A correspondência é por lista inteira; as aulas desses módulos e disciplinas mostram as obras como leitura recomendada.
const DESTINO = {
  'lista-de-leitura-de-historia': { d: ['historia'] }, 'lista-de-leitura-de-direito': { d: ['direito'] },
  'lista-de-leitura-de-economia': { d: ['economia'] }, 'lista-de-leitura-de-psicologia': { d: ['psicologia'] },
  'lista-de-leitura-de-politica': { d: ['ciencia-politica'], m: ['m13'] }, 'lista-de-leitura-de-linguistica': { d: ['linguistica'] },
  'lista-de-leitura-de-matematica': { d: ['matematica'] }, 'lista-de-leitura-de-logica': { d: ['logica-formal'], m: ['m4'] },
  'lista-de-leitura-de-fisica': { d: ['fisica'] }, 'lista-de-leitura-de-quimica': { d: ['quimica'] },
  'lista-de-literatura-parte-': { d: ['literatura'] }, 'lista-de-leituras-sugeridas-por-mortimer-adler': { d: ['literatura'], m: ['m0'] },
  'lista-de-leituras-sugeridas-por-jose-monir-nasser': { d: ['literatura'] }, 'os-melhores-livros-brasileiros-por-olavo-de-carvalho': { d: ['literatura'], m: ['m12'] },
  'lista-de-leitura-auxiliar-idiomas': { d: ['linguistica'] }, 'lista-de-leitura-auxiliar-musica': { d: ['musica'] },
  'lista-de-grandes-compositores': { d: ['musica'] }, 'lista-de-cinema': { d: ['cultura', 'historia-arte'] },
  'lista-de-leitura-de-filosofia-para-iniciantes-e-interessados': { m: ['m3'] },
  'lista-de-leitura-ordenada-platao': { m: ['m5'] }, 'lista-de-leitura-ordenada-aristoteles': { m: ['m5'] },
  'lista-de-leitura-ordenada-giovanni-reale': { m: ['m5'] }, 'lista-de-leitura-ordenada-santo-agostinho-de-hipona': { m: ['m2b'] },
  'lista-de-leitura-ordenada-sao-tomas-de-aquino': { m: ['m8', 'tg6'] }, 'lista-de-introducao-ao-tomismo': { m: ['m8'] },
  'lista-de-leitura-ordenada-immanuel-kant': { m: ['m9'] }, 'lista-de-leitura-ordenada-arthur-schopenhauer': { m: ['m10'] },
  'lista-de-leitura-ordenada-georg-wilhelm-friedrich-hegel': { m: ['m10'] }, 'lista-de-leitura-de-f-w-j-schelling': { m: ['m10'] },
  'lista-de-leitura-ordenada-friedrich-wilhelm-nietzsche': { m: ['m10'] }, 'lista-de-leitura-ordenada-soren-kierkegaard': { m: ['m10'] },
  'lista-de-leitura-ordenada-edmund-husserl': { m: ['m10'] }, 'lista-de-leitura-ordenada-martin-heidegger': { m: ['m10'] },
  'lista-de-leitura-ordenada-albert-camus': { m: ['m10'] }, 'lista-de-leitura-ordenada-michel-foucault': { m: ['m10'] },
  'lista-de-leitura-ordenada-edith-steinsta-teresa-benedita-da-cruz': { m: ['m10'] }, 'lista-de-leitura-ordenada-xavier-zubiri': { m: ['m10'] },
  'lista-de-leitura-ordenada-louis-lavelle': { m: ['m10'] }, 'lista-de-leitura-ordenada-jose-ortega-y-gasset': { m: ['m10'] },
  'lista-de-leitura-ordenada-eric-weil': { m: ['m10'] }, 'lista-de-leitura-ordenada-ernst-cassirer': { d: ['simbologia'], m: ['m15'] },
  'lista-de-leitura-ordenada-eric-voegelin': { d: ['ciencia-politica'], m: ['m13'] }, 'lista-de-leitura-ordenada-hannah-arendt': { d: ['ciencia-politica'], m: ['m13'] },
  'lista-de-leitura-ordenada-roger-scruton': { d: ['cultura'], m: ['m13'] }, 'lista-de-leitura-ordenada-theodore-dalrymple': { d: ['cultura', 'sociologia'] },
  'lista-de-leitura-ordenada-christopher-dawson': { d: ['historia', 'cultura'] }, 'lista-de-leitura-ordenada-jose-pedro-galvao-de-sousa': { d: ['direito'] },
  'lista-de-leitura-ordenada-carl-gustav-jung': { d: ['psicologia'] }, 'lista-de-leitura-ordenada-viktor-emil-frankl': { d: ['psicologia'] },
  'lista-de-leitura-ordenada-gilbert-keith-chesterton': { m: ['m1'] }, 'lista-de-leitura-ordenada-clive-staples-lewis': { m: ['m1'] },
  'lista-de-leitura-ordenada-olavo-de-carvalho': { m: ['m12'] }, 'lista-de-filosofia-chinesa': { m: ['m14'] },
  'lista-de-leitura-de-catolicismo-romano': { m: ['m1', 'tg4'] }, 'lista-de-leitura-de-teologia-catolica': { m: ['m1'] },
};
const destinoDaLista = (u) => Object.entries(DESTINO).find(([k]) => u.includes(`/lista/${k}`))?.[1] || {};
const slugDaLista = (u) => u.split('/lista/')[1].replace(/\/$/, '');
const autorDaLista = (titulo) => (titulo.match(/^Lista de (?:Leitura Ordenada|leitura ordenada|leitura de)\s*:?\s*(.+)$/i)?.[1] || '').replace(/\/.*$/, '').trim();
const LISTAS_DE_AUTOR = /lista-de-leitura-ordenada-|lista-de-leitura-de-f-w-j-schelling/;
const SECAO_DE_APOIO = /apoio|introdu|sobre |coment|estudos|biograf|secund/i;
for (const lista of coa.listas) {
  const url = lista.u;
  if (/o-ordenamento-das-leituras/.test(url)) { descartes.meta += lista.itens.length; continue; }
  const deAutor = LISTAS_DE_AUTOR.test(url) ? autorDaLista(lista.titulo) : '';
  // alguns itens juntam várias obras separadas por ";" (às vezes numeradas): cada uma vira um item
  const itens = lista.itens.flatMap(([secao, bruto]) => ((bruto.match(/\s[–—]\s/g) || []).length > 1 && !/lista-de-cinema/.test(url)
    ? bruto.split(/;\s*(?:\d+\.\s*)?/).map((t) => [secao, t]) : [[secao, bruto]]));
  for (const [secao, bruto] of itens) {
    const t = bruto.trim();
    if (!t) continue;
    if (PROSA.test(t) || /^lista de leitura/i.test(t)) { descartes.remissao++; continue; }
    if (/^ementa\b/i.test(secao)) { descartes.ementa++; continue; } // não confundir com "complementar"
    if (t.length > 160 || (/\.$/.test(t) && t.split(' ').length > 9 && !SEPARADOR.test(t))) { descartes.prosa++; continue; }
    const fonte = { fonte: 'contraosacademicos', url, nota: `${lista.titulo}${secao ? ` › ${secao}` : ''}`, natureza: 'recomendação' };
    if (/lista-de-cinema/.test(url)) {
      const i = t.search(SEPARADOR);
      const diretor = i > 0 ? t.slice(0, i) : '';
      const filmes = i > 0 ? t.slice(i).replace(SEPARADOR, '') : t;
      // cada filme termina no seu ano entre parênteses; os sem ano ficam no fim, separados por vírgula
      const partes = filmes.split(/(?<=\))\s*,\s*/).flatMap((p) => (/\(\d{4}/.test(p) ? [p] : p.split(/\s*,\s*/)));
      for (const p of partes) {
        const ano = p.match(/\((\d{4}(?:\s*-\s*\d{4})?)\)\s*$/)?.[1] || '';
        adicionar({ titulo: p.replace(/\(\d{4}(?:\s*-\s*\d{4})?\)\s*$/, ''), criador: diretor.trim(), categoria: 'cinema', data: ano, fonte });
      }
      continue;
    }
    if (/lista-de-grandes-compositores/.test(url)) {
      const m = t.match(/^(.+?)\s*\(([^)]+)\)\s*,?\s*(p[áa]g\.?\s*\d+)?/i);
      if (!m) { descartes.prosa++; continue; }
      adicionar({ titulo: m[1], criador: m[1], categoria: 'compositores', data: m[2], fonte: { ...fonte, nota: `${fonte.nota}${m[3] ? ` · Carpeaux, Uma Nova História da Música, ${m[3]}` : ''}` } });
      continue;
    }
    const i = t.search(SEPARADOR);
    const ordem = ORIENTACAO[slugDaLista(url)];
    if (i > 0 && ordem) {
      const [a, b] = [t.slice(0, i), t.slice(i).replace(SEPARADOR, '')];
      const [criador, titulo] = ordem === 'autor-titulo' ? [a, b] : [b.replace(/^por\s+/i, ''), a];
      adicionar({ titulo, criador, categoria: 'livros', fonte });
      continue;
    }
    if (/lista-de-leitura-de-quimica/.test(url) && i < 0) { descartes.ementa++; continue; } // tópicos de programa, sem obra
    const daSecao = SECOES_SAO_AUTORES.test(url) && secao && !SECAO_NAO_AUTOR.test(secao) ? autorDaSecao(secao) : '';
    const criador = daSecao || (deAutor && !SECAO_DE_APOIO.test(secao) ? deAutor : '');
    adicionar({ titulo: t.replace(SEPARADOR, ' – '), criador, categoria: /^curso\b/i.test(t) ? 'cursos' : 'livros', fonte });
  }
}

// --- Fonte 2: livros mencionados por Olavo de Carvalho nas aulas do COF (compilação de fiatjaf) ---
// Na fonte, título e autor vêm juntos numa linha; o autor só é separado quando é um nome conhecido do acervo ou das listas.
const autores = [...new Set([...LIVROS.map((l) => l.autor), ...DISCIPLINAS.flatMap((d) => d.bibliografia.map((b) => b.autor)), ...[...registros.values()].map((r) => r.criador)]
  .flatMap((a) => a.split(/\s+e\s+|\//)).map((a) => a.trim()).filter((a) => a.split(' ').length >= 2 || a.length >= 6))]
  .sort((a, b) => b.length - a.length);
let separados = 0;
for (const o of cof.obras) {
  const linha = limpar(o.t);
  const n = normalizar(linha);
  const autor = autores.find((a) => n.endsWith(` ${normalizar(a)}`));
  if (autor) separados++;
  const titulo = autor ? linha.slice(0, linha.length - autor.length).trim() : linha;
  adicionar({
    titulo, criador: autor || '', categoria: 'livros',
    fonte: { fonte: 'olavo-cof', url: cof.fonte, nota: `${o.refs.slice(0, 3).join('; ')}${autor ? '' : ' · título e autor não separados na fonte'}${o.negrito ? '' : ' · identificado pela posição na página'}`, natureza: 'menção em aula' },
  });
}

const lista = [...registros.values()].sort((a, b) => a.id.localeCompare(b.id));
// ids únicos mesmo quando duas obras diferentes geram o mesmo slug (por exemplo, em categorias distintas)
const vistos = {};
for (const r of lista) { vistos[r.id] = (vistos[r.id] || 0) + 1; if (vistos[r.id] > 1) r.id = `${r.id}-${vistos[r.id]}`; }

const porCategoria = lista.reduce((c, r) => ({ ...c, [r.categoria]: (c[r.categoria] || 0) + 1 }), {});
const resumo = { coaItens: coa.listas.reduce((s, l) => s + l.itens.length, 0), coaListas: coa.listas.length, cofObras: cof.obras.length, cofAutorSeparado: separados, registros: lista.length, comVariasFontes: lista.filter((r) => r.fontes.length > 1).length, porCategoria, descartes };

// Formato compacto para o site carregar rápido: [id, categoria, criador, titulo, data, [[fonte, lista, nota]]].
// "lista" é o índice em LISTAS (Contra os Acadêmicos) ou -1 (compilação do COF).
const LISTAS = coa.listas.map((l) => { const x = destinoDaLista(l.u); return [l.u, l.titulo, x.d || [], x.m || []]; });
const semDestino = LISTAS.filter((l) => !l[2].length && !l[3].length && !/o-ordenamento/.test(l[0])).map((l) => l[1]);
if (semDestino.length) console.warn('Listas sem destino no curso:', semDestino.join('; '));
const indiceLista = Object.fromEntries(LISTAS.map(([u], i) => [u, i]));
const compactos = lista.map((r) => [r.id, r.categoria, r.criador, r.titulo, r.data, r.fontes.map((f) => [f.fonte, f.fonte === 'contraosacademicos' ? indiceLista[f.url] : -1,
  f.fonte === 'contraosacademicos' ? f.nota.slice(LISTAS[indiceLista[f.url]][1].length).replace(/^ › /, '') : f.nota])]);
writeFileSync(new URL('../app/data/externos.js', import.meta.url), `// Gerado por scripts/importar-fontes.mjs a partir de dados-brutos/ (não edite à mão; rode o script).
// Fontes: ${coa.fonte} (extraído em ${coa.extraido}) e ${cof.fonte} (extraído em ${cof.extraido}).
export const RESUMO_IMPORTACAO = ${JSON.stringify(resumo)};
const LISTAS = ${JSON.stringify(LISTAS)};
const COF = ${JSON.stringify(cof.fonte)};
const NATUREZA = { contraosacademicos: 'recomendação', 'olavo-cof': 'menção em aula' };
const C = ${JSON.stringify(compactos)};
// os livros citados no COF entram no módulo de Olavo de Carvalho (m12)
const destino = (i, k) => (i >= 0 ? LISTAS[i][k] : k === 3 ? ['m12'] : []);
const uniao = (fontes, k) => [...new Set(fontes.flatMap(([, i]) => destino(i, k)))];
export const EXTERNOS = C.map(([id, categoria, criador, titulo, data, fontes]) => ({
  id, categoria, criador, titulo, data, pais: '', disciplinas: uniao(fontes, 2), modulos: uniao(fontes, 3), temas: [], contexto: '',
  nivel: null, prereq: [], justificativa: '', link: null, direitos: '', relacoes: [],
  fontes: fontes.map(([fonte, i, nota]) => ({ fonte, natureza: NATUREZA[fonte], url: i >= 0 ? LISTAS[i][0] : COF, nota: i >= 0 ? \`\${LISTAS[i][1]}\${nota ? \` › \${nota}\` : ''}\` : nota })),
}));
`);
console.log(process.argv.includes('--json') ? JSON.stringify(resumo) : resumo);
