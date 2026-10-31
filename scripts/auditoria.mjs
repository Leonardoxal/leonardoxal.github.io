// Auditoria de integridade dos dados da Academia da Verdade.
// Uso: node scripts/auditoria.mjs [--json]
// Lê os módulos de dados reais (não altera nada) e imprime contagens e problemas encontrados.
import { readFileSync } from 'node:fs';
import { LIVROS, livroPorId } from '../app/data/livros.js';
import { MODULOS, DEGRAUS } from '../app/data/curriculo.js';
import { AULAS_COMPLETAS, aulaPorId } from '../app/data/aulas/index.js';
import { AVALIACOES } from '../app/data/avaliacoes.js';
import { DISCIPLINAS } from '../app/data/disciplinas.js';
import { NOS } from '../app/data/arvore.js';
import { SANTOS, SANTOS_DAS_ABAS, SANTOS_DAS_AREAS } from '../app/data/santos.js';
import { CONCEITOS } from '../app/data/conceitos.js';
import { QUESTIONARIOS } from '../app/data/questionarios.js';
import { FASE_TEOLOGICA, NOTA_MINIMA } from '../app/core.js';

const originais = JSON.parse(readFileSync(new URL('../app/tests/ids-originais.json', import.meta.url), 'utf8'));
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const problemas = [];
const anotar = (area, msg) => problemas.push({ area, msg });

// 1. Livros
const ids = LIVROS.map((l) => l.id);
const repetidos = ids.filter((id, i) => ids.indexOf(id) !== i);
repetidos.forEach((id) => anotar('livros', `id repetido: ${id}`));
const faltandoOriginais = originais.filter((id) => !livroPorId[id]);
faltandoOriginais.forEach((id) => anotar('livros', `id original ausente: ${id}`));
const porTitulo = {};
for (const l of LIVROS) (porTitulo[`${norm(l.titulo)}|${norm(l.autor).split(' ').slice(-1)[0]}`] ||= []).push(l.id);
const titulosRepetidos = Object.entries(porTitulo).filter(([, v]) => v.length > 1);
titulosRepetidos.forEach(([k, v]) => anotar('livros', `possível duplicata (título+autor) ${k}: ${v.join(', ')}`));
const aConfirmar = LIVROS.filter((l) => l.verificacao && l.verificacao !== 'confirmado').map((l) => l.id);

// 2. Pré-requisitos dos livros
for (const l of LIVROS) {
  for (const p of l.prereq || []) {
    const pr = livroPorId[p];
    if (!pr) { anotar('prereq', `${l.id} exige ${p}, que não existe`); continue; }
    if (pr.degrau > l.degrau) anotar('prereq', `${l.id} (degrau ${l.degrau}) exige ${p} de degrau posterior (${pr.degrau})`);
    else if (pr.degrau === l.degrau && pr.ordem > l.ordem) anotar('prereq', `${l.id} (ordem ${l.ordem}) exige ${p}, lido depois no mesmo degrau (ordem ${pr.ordem})`);
  }
}

// 3. Degraus, módulos e aulas
const modulosPorDegrau = {};
const modulosSemAulaCompleta = [];
const aulasSemConteudo = [];
for (const m of MODULOS) {
  const chave = m.degrau ?? `disciplina:${m.disciplina}`;
  (modulosPorDegrau[chave] ||= []).push(m.id);
  const idsAulas = m.aulas.map((a) => a.id || `${m.id}-${a.n}`);
  const sem = idsAulas.filter((id) => !aulaPorId[id]);
  aulasSemConteudo.push(...sem.map((id) => `${m.id}:${id}`));
  if (sem.length === idsAulas.length) modulosSemAulaCompleta.push(m.id);
  if (typeof m.n === 'number' && m.degrau !== null && m.degrau !== undefined && m.id === `m${m.n}` && m.n !== m.degrau)
    anotar('modulos', `módulo ${m.id} está no degrau ${m.degrau} (número e degrau divergem; ids preservados por causa do progresso salvo)`);
  for (const p of m.prereq || []) if (!MODULOS.some((x) => x.id === p)) anotar('modulos', `${m.id} exige módulo inexistente ${p}`);
}
aulasSemConteudo.forEach((x) => anotar('aulas', `aula sem conteúdo completo: ${x}`));
const idsAulas = AULAS_COMPLETAS.map((a) => a.id);
idsAulas.filter((id, i) => idsAulas.indexOf(id) !== i).forEach((id) => anotar('aulas', `aula com id repetido: ${id}`));

// 4. Avaliações
const minimos = {};
for (const a of AVALIACOES) (minimos[a.minimo ?? 0] ||= []).push(a.id);
for (const [min, lista] of Object.entries(minimos)) if (Number(min) !== NOTA_MINIMA) anotar('avaliacoes', `${lista.length} avaliação(ões) com mínimo ${min}: ${lista.join(', ')}`);

// 5. Disciplinas
const resumoDisc = DISCIPLINAS.map((d) => {
  const ref = Object.values(d.aulas || {}).flat();
  const faltam = ref.filter((id) => !aulaPorId[id]);
  faltam.forEach((id) => anotar('disciplinas', `${d.id}: aula ${id} citada mas sem conteúdo`));
  if (d.aulasPublicadas && !ref.length) anotar('disciplinas', `${d.id}: marcada como publicada sem aulas`);
  const mods = MODULOS.filter((m) => m.disciplina === d.id).map((m) => m.id);
  return { id: d.id, publicadas: !!d.aulasPublicadas, aulas: ref.length, modulos: mods.length, etapas: d.etapas.length, bibliografia: d.bibliografia.length };
});

// 6. Árvore do conhecimento
for (const n of NOS) {
  for (const id of n.livros || []) if (!livroPorId[id]) anotar('arvore', `nó ${n.id}: livro inexistente ${id}`);
  for (const id of n.modulos || []) if (!MODULOS.some((m) => m.id === id)) anotar('arvore', `nó ${n.id}: módulo inexistente ${id}`);
  for (const id of n.aulas || []) if (!aulaPorId[id]) anotar('arvore', `nó ${n.id}: aula inexistente ${id}`);
}

// 7. Santos
const refsSantos = [...Object.values(SANTOS_DAS_ABAS), ...Object.values(SANTOS_DAS_AREAS)].flat().map((r) => r.santo ?? r);
refsSantos.filter((s) => typeof s === 'string' && !SANTOS[s]).forEach((s) => anotar('santos', `referência a santo inexistente: ${s}`));

// 8. Conceitos e questionários
for (const c of CONCEITOS) {
  for (const id of c.livros || []) if (!livroPorId[id]) anotar('conceitos', `${c.id}: livro inexistente ${id}`);
  for (const id of c.aulas || []) if (!aulaPorId[id]) anotar('conceitos', `${c.id}: aula inexistente ${id}`);
}
Object.keys(QUESTIONARIOS).filter((id) => !livroPorId[id]).forEach((id) => anotar('questionarios', `questionário de livro inexistente: ${id}`));

// 9. Fase teológica
const modulosTeologia = MODULOS.filter((m) => FASE_TEOLOGICA.includes(m.degrau));
const aulasTeologia = modulosTeologia.flatMap((m) => m.aulas.map((a) => a.id || `${m.id}-${a.n}`));
const livrosTeologia = LIVROS.filter((l) => FASE_TEOLOGICA.includes(l.degrau));

const relatorio = {
  livros: { total: LIVROS.length, originais: originais.length, originaisAusentes: faltandoOriginais.length, idsRepetidos: repetidos.length, possiveisDuplicatas: titulosRepetidos.length, aConfirmar: aConfirmar.length, comQuestionario: LIVROS.filter((l) => l.questionario).length },
  degraus: DEGRAUS.map((d) => ({ n: d.n, nome: d.nome, livros: LIVROS.filter((l) => l.degrau === d.n).length, modulos: (modulosPorDegrau[d.n] || []).join(' ') })),
  modulos: { total: MODULOS.length, daEscada: MODULOS.filter((m) => m.degrau !== null && m.degrau !== undefined).length, deDisciplinas: MODULOS.filter((m) => m.disciplina).length, semNenhumaAulaCompleta: modulosSemAulaCompleta },
  aulas: { completas: AULAS_COMPLETAS.length, citadasSemConteudo: aulasSemConteudo.length },
  faseTeologica: { degraus: FASE_TEOLOGICA, modulos: modulosTeologia.map((m) => m.id), aulas: aulasTeologia.length, aulasCompletas: aulasTeologia.filter((id) => aulaPorId[id]).length, livros: livrosTeologia.length },
  avaliacoes: { total: AVALIACOES.length, porMinimo: Object.fromEntries(Object.entries(minimos).map(([k, v]) => [k, v.length])) },
  disciplinas: resumoDisc,
  conceitos: CONCEITOS.length, santos: Object.keys(SANTOS).length, nosArvore: NOS.length,
  problemas: problemas.length,
};

if (process.argv.includes('--json')) console.log(JSON.stringify({ relatorio, problemas }, null, 2));
else {
  console.log(JSON.stringify(relatorio, null, 2));
  const porArea = {};
  for (const p of problemas) (porArea[p.area] ||= []).push(p.msg);
  for (const [area, lista] of Object.entries(porArea)) {
    console.log(`\n## ${area} (${lista.length})`);
    lista.slice(0, 40).forEach((m) => console.log(`- ${m}`));
    if (lista.length > 40) console.log(`- … mais ${lista.length - 40}`);
  }
}
