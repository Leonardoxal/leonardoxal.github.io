// Atribui cada obra importada a um módulo (e, quando há base, a uma aula), com a função dela no módulo.
// Gera app/data/atribuicoes.js. Cada atribuição declara a confiança:
//   'regra'      — decidida por regra explícita sobre a seção da lista (ver REGRAS) ou pelo vocabulário do módulo;
//   'aula'       — o título ou o autor da obra aparece na aula (título, fonte ou referências);
//   'provisoria' — sem base suficiente: ficou no módulo introdutório da disciplina, para revisão.
// Nada é inventado: a função vem do tipo de lista e da seção; a aula, de coincidência textual verificável.
// Uso: node scripts/atribuir-obras.mjs [--modulos]
import { writeFileSync } from 'node:fs';
import { MODULOS } from '../app/data/curriculo.js';
import { AULAS_COMPLETAS } from '../app/data/aulas/index.js';
import { EXTERNOS } from '../app/data/externos.js';
import { normalizar } from '../app/core.js';

const PARADAS = new Set('de da do das dos em para com por uma uns umas the of and les des del los las que sobre entre volume vol parte tomo obra obras livro livros'.split(' '));
const tokens = (s) => [...new Set(normalizar(s).replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter((t) => t.length >= 4 && !PARADAS.has(t)))];
const prefixo = (t) => t.slice(0, 5);

const modulosDaDisciplina = (d) => MODULOS.filter((m) => m.disciplina === d);
const porModulo = Object.fromEntries(MODULOS.map((m) => [m.id, m]));
// vocabulário de cada aula: título, fonte primária e referências (autores e obras que ela cita)
const vocabAula = Object.fromEntries(AULAS_COMPLETAS.map((a) => [a.id, new Set([a.titulo, a.fonte?.obra, ...(a.referencias || []).map((r) => r.texto), ...(a.avancado?.leituras || []).map((r) => r.texto)].flatMap((s) => tokens(s || '')).map(prefixo))]));
const vocabModulo = Object.fromEntries(MODULOS.map((m) => [m.id, new Set([m.titulo, m.descricao, ...m.aulas.map((a) => a.titulo)].flatMap((s) => tokens(s || '')).map(prefixo))]));

// Regras por seção (texto da seção + título) → módulo, nas disciplinas em que a seção diz onde a obra entra.
const REGRAS = {
  historia: [[/pr[eé]-hist|arqueolog|idade antiga|idade m[eé]dia|moderna|religi[aã]o e hist|inquisi|templ[aá]rio|hist[oó]ria geral/i, 'h4'], [/filosofia da hist|historiografia|teoria da hist/i, 'h3'], [/contempor[aâ]nea|rep[uú]blica|ditadura|s[eé]culo xx/i, 'h5'], [/brasil|portugal/i, 'h4']],
  literatura: [[/apoio|cr[ií]tic|estudo|hist[oó]ria da literatura|teoria/i, 'lt3'], [/poesia|poema|sonet|romance|conto|novela/i, 'lt4']],
  'historia-arte': [[/arquitet|igreja|catedral|sacra/i, 'ha4'], [/teolog|abordagem|iconolog/i, 'ha3']],
  direito: [[/romano|const|c[oó]digo/i, 'dr2'], [/escola|filosofia do direito|positiv|natural/i, 'dr3'], [/penal|civil|trabalh|tribut|administr|processual|empresarial/i, 'dr4'], [/consumidor|fam[ií]lia|acesso/i, 'dr5']],
  psicologia: [[/hist[oó]ria/i, 'ps2'], [/desenvolv|crian|psicopatolog|cl[ií]nic/i, 'ps4'], [/pesquisa|aplica|psicoterapia/i, 'ps5']],
  musica: [[/hist[oó]ria|compositor/i, 'mu2'], [/harmonia|forma|ac[uú]stic/i, 'mu4']],
  'ciencia-politica': [[/estado|constitu|regime|partid|eleit|sistema/i, 'cp3'], [/hist[oó]ria|antigos|medievais|modernos/i, 'cp2']],
  economia: [[/hist[oó]ria/i, 'e2'], [/macro|moeda|bancos|monet/i, 'e4'], [/micro|merc|competi|firma/i, 'e3']],
};

// Regras por lista: a lista inteira ou a seção/título decide o módulo, mesmo quando a lista cobre vários módulos.
// A primeira regra que casar vale; a última de cada lista é o módulo padrão dela.
const REGRAS_LISTA = [
  [/lista-de-cinema/, [[/brasileiros/i, 'cu4'], [/./, 'cu1']]],
  [/auxiliar-idiomas/, [[/./, 'li5']]],
  [/auxiliar-musica/, [[/hist[oó]ria|filosofia/i, 'mu2'], [/./, 'mu1']]],
  [/ordenada-giovanni-reale/, [[/patr[ií]stica|escol[aá]stica|medieval|idade m[eé]dia/i, 'm8'], [/idade moderna|humanismo|renascimento|iluminismo|kant/i, 'm9'], [/contempor|s[eé]culo xx|rom[aâ]ntico|idealismo|positivismo/i, 'm10'], [/./, 'm5']]],
  [/ordenada-santo-agostinho/, [[/./, 'm2b']]],
  [/lista-de-filosofia-chinesa|lista-de-leitura-ordenada-xavier-zubiri/, [[/zubiri/i, 'm10'], [/./, 'm14']]],
];

function funcaoDe(e, secao) {
  const url = e.fontes.find((f) => f.fonte === 'contraosacademicos')?.url || '';
  if (!url) return 'Obra citada por Olavo de Carvalho nas aulas do COF';
  if (e.categoria === 'cinema') return 'Filme para assistir e analisar';
  if (e.categoria === 'compositores') return 'Compositor para ouvir e estudar';
  if (e.categoria === 'cursos') return 'Curso para acompanhar';
  if (/idiomas/.test(url) || /dicion[aá]rio|gram[aá]tica|vocabul[aá]rio/i.test(e.titulo)) return 'Obra de consulta (gramática, dicionário, referência)';
  if (/ordenada|schelling/.test(url)) return /apoio|coment|estudos? sobre|introdu|biograf|secund|bibliografia/i.test(secao) ? 'Estudo sobre o autor' : 'Obra do autor (fonte primária)';
  if (/literatura|mortimer|monir|melhores-livros/.test(url)) return 'Obra literária para leitura e análise';
  if (/introducao-ao-tomismo|iniciantes/.test(url)) return 'Introdução e manual de base';
  return /complement|opcion|olimp|avan[cç]ad/i.test(secao) ? 'Leitura de aprofundamento da disciplina' : 'Leitura básica da disciplina';
}

function pontuar(e, secao, candidatos) {
  const t = new Set([...tokens(`${e.titulo} ${e.criador}`)].map(prefixo));
  const s = new Set(tokens(secao).map(prefixo));
  let melhor = { modulo: null, aula: null, pontos: 0, deAula: false };
  for (const mid of candidatos) {
    const m = porModulo[mid];
    let pontosModulo = 0; for (const x of t) if (vocabModulo[mid].has(x)) pontosModulo += 1; for (const x of s) if (vocabModulo[mid].has(x)) pontosModulo += 0.5;
    for (const a of m.aulas) {
      const v = vocabAula[a.id]; if (!v) continue;
      let p = 0; for (const x of t) if (v.has(x)) p += 1;
      if (p >= 2 && p + pontosModulo > melhor.pontos) melhor = { modulo: mid, aula: a.id, pontos: p + pontosModulo, deAula: true };
    }
    if (!melhor.deAula && pontosModulo > melhor.pontos) melhor = { modulo: mid, aula: null, pontos: pontosModulo, deAula: false };
  }
  return melhor;
}

const FUNCOES = [];
const idxFuncao = (f) => { let i = FUNCOES.indexOf(f); if (i < 0) { FUNCOES.push(f); i = FUNCOES.length - 1; } return i; };
const saida = {};
const resumo = { regra: 0, aula: 0, provisoria: 0 };
for (const e of EXTERNOS) {
  const nota = e.fontes.find((f) => f.fonte === 'contraosacademicos')?.nota || '';
  const secao = nota.split(' › ').slice(1).join(' ');
  const url = e.fontes.find((f) => f.fonte === 'contraosacademicos')?.url || '';
  const daLista = REGRAS_LISTA.find(([re]) => re.test(url))?.[1].find(([re]) => re.test(`${secao} ${e.titulo} ${e.criador}`))?.[1];
  const candidatos = daLista ? [daLista] : [...e.modulos, ...e.disciplinas.flatMap((d) => modulosDaDisciplina(d).map((m) => m.id))];
  const funcao = idxFuncao(funcaoDe(e, secao));
  const p = pontuar(e, secao, candidatos);
  let modulo; let aula = ''; let conf;
  if (p.deAula) { modulo = p.modulo; aula = p.aula; conf = 'aula'; }
  else if (daLista) { modulo = daLista; conf = 'regra'; }
  else {
    const dis = e.disciplinas[0];
    const regra = dis && (REGRAS[dis] || []).find(([re]) => re.test(`${secao} ${e.titulo}`));
    if (regra && candidatos.includes(regra[1])) { modulo = regra[1]; conf = 'regra'; }
    else if (p.pontos >= 1.5) { modulo = p.modulo; conf = 'regra'; }
    else if (e.modulos.length === 1 && !e.disciplinas.length) { modulo = e.modulos[0]; conf = 'regra'; }
    else if (dis === 'literatura') { modulo = 'lt2'; conf = 'regra'; }
    else { modulo = candidatos[0]; conf = 'provisoria'; }
  }
  resumo[conf]++;
  saida[e.id] = [modulo, aula, funcao, conf === 'regra' ? 0 : conf === 'aula' ? 1 : 2];
}

writeFileSync(new URL('../app/data/atribuicoes.js', import.meta.url), `// Gerado por scripts/atribuir-obras.mjs (não edite à mão). Atribuição de cada obra importada a um módulo e, quando
// há base textual, a uma aula, com a função dela. Confiança: 0 regra sobre a seção da lista, 1 coincidência com a aula,
// 2 provisória (sem base suficiente: no módulo introdutório da disciplina, para revisão).
export const FUNCOES = ${JSON.stringify(FUNCOES)};
export const CONFIANCA = ['regra', 'aula', 'provisória'];
// id → [módulo, aula, índice da função, confiança]
export const ATRIBUICOES = ${JSON.stringify(saida)};
`);
const porModuloContagem = {}; Object.values(saida).forEach(([m]) => { porModuloContagem[m] = (porModuloContagem[m] || 0) + 1; });
console.log(resumo, FUNCOES.length, 'funções');
if (process.argv.includes('--modulos')) console.log(JSON.stringify(porModuloContagem));
