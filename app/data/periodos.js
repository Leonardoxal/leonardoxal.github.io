// Períodos letivos da fase multidisciplinar (estrutura horizontal do currículo).
// Cada semestre tem 16 semanas de estudo e 2 de fechamento. A filosofia avança um degrau da escada
// por semestre; ao lado dela correm 2 disciplinas no primeiro semestre e 3 nos seguintes (até 4 matérias).
// A ordem das disciplinas respeita os pré-requisitos da árvore e os degraus de filosofia já cursados.
import { DISCIPLINAS } from './disciplinas.js';
import { noPorId } from './arvore.js';
import { MODULOS, DEGRAUS } from './curriculo.js';
import { aulaPorId } from './aulas/index.js';
import { AVALIACOES } from './avaliacoes.js';
import { obrasObrigatorias } from './mediateca.js';
import { melhorNota, livroConcluido, NOTA_MINIMA } from '../core.js';

/** Avaliação objetiva que fecha um módulo: a prova do módulo ou, no último degrau, a avaliação final. */
const provaDe = (modulo) => AVALIACOES.find((a) => a.modulo === modulo && ['prova', 'final'].includes(a.tipo))?.id;

export const SEMANAS_ESTUDO = 16;
export const SEMANA_INTERMEDIARIA = 8;
export const SEMANA_PROJETO = 16;
export const SEMANA_FINAL = 17;
export const SEMANA_RECUPERACAO = 18;
export const SEMANAS_TOTAIS = 18;
/** Semanas que recebem aulas: todas as de estudo, menos a da avaliação intermediária e a do projeto. */
export const SEMANAS_DE_AULA = [...Array(SEMANAS_ESTUDO).keys()].map((i) => i + 1).filter((s) => s !== SEMANA_INTERMEDIARIA && s !== SEMANA_PROJETO);

/** Primeiro degrau da escada cursado na fase multidisciplinar (os degraus 3 e 4 são a iniciação). */
const PRIMEIRO_DEGRAU = 5;
const DISCIPLINAS_NO_PRIMEIRO = 2;
const DISCIPLINAS_POR_PERIODO = 3;

/**
 * Estimativas da carga além do tempo indicado em cada aula (que já inclui leitura da fonte e exercícios).
 * São parâmetros declarados, não medições: ajuste-os se o registro de horas mostrar outra realidade.
 */
export const CARGA = {
  revisaoPorAula: 15, // cartões de revisão espaçada gerados pela aula
  prova: 90, // prova de módulo (preparação e realização)
  leituraFilosofiaSemana: 120, // leitura dos livros do degrau de filosofia em curso
  projeto: 360, // projeto interdisciplinar da semana 16
};

const minutosAula = (id) => parseInt(aulaPorId[id]?.duracao, 10) || 0;
const discPorNo = Object.fromEntries(DISCIPLINAS.map((d) => [d.no, d.id]));

/** Degrau de filosofia exigido por uma disciplina (maior degrau dos ramos pré-requisitos) e disciplinas exigidas. */
function exigencias(d) {
  const degrau = Math.max(0, ...d.prereq.flatMap((p) => noPorId[p].degraus || []));
  const disciplinas = d.prereq.map((p) => discPorNo[p]).filter(Boolean);
  return { degrau, disciplinas };
}

/** Altura de cada disciplina no grafo de dependências: as que liberam cadeias longas entram antes. */
function alturas() {
  const dependentes = Object.fromEntries(DISCIPLINAS.map((d) => [d.id, []]));
  DISCIPLINAS.forEach((d) => exigencias(d).disciplinas.forEach((p) => dependentes[p].push(d.id)));
  const memo = {};
  const h = (id) => (memo[id] ??= 1 + Math.max(0, ...dependentes[id].map(h)));
  return Object.fromEntries(DISCIPLINAS.map((d) => [d.id, h(d.id)]));
}

/** Distribui as disciplinas pelos semestres, sem violar pré-requisitos (exportado para teste). */
export function distribuirDisciplinas() {
  const altura = alturas();
  const semestreDe = {};
  const semestres = [];
  for (let s = 1; Object.keys(semestreDe).length < DISCIPLINAS.length; s++) {
    if (s > 30) throw new Error('Pré-requisitos circulares entre disciplinas');
    // ao começar o semestre s, os degraus até PRIMEIRO_DEGRAU + s - 2 já foram cursados
    const degrauCursado = PRIMEIRO_DEGRAU + s - 2;
    const aptas = DISCIPLINAS.filter((d) => !semestreDe[d.id]).filter((d) => {
      const ex = exigencias(d);
      return ex.degrau <= degrauCursado && ex.disciplinas.every((p) => semestreDe[p] && semestreDe[p] < s);
    }).sort((a, b) => altura[b.id] - altura[a.id] || a.id.localeCompare(b.id));
    const vagas = s === 1 ? DISCIPLINAS_NO_PRIMEIRO : DISCIPLINAS_POR_PERIODO;
    const escolhidas = aptas.slice(0, vagas);
    escolhidas.forEach((d) => { semestreDe[d.id] = s; });
    semestres.push(escolhidas.map((d) => d.id));
  }
  return semestres;
}

const modulosDaDisciplina = (id) => MODULOS.filter((m) => m.disciplina === id).map((m) => m.id);

/** Aulas publicadas de uma disciplina, módulo a módulo, com a prova de cada módulo. */
function aulasDaDisciplina(id) {
  return MODULOS.filter((m) => m.disciplina === id).map((m) => ({ modulo: m.id, aulas: m.aulas.map((a) => a.id).filter((a) => aulaPorId[a]), prova: provaDe(m.id) }));
}

/** Espalha uma lista de aulas pelas semanas de aula, na ordem, de modo uniforme. */
function espalhar(aulas) {
  const n = SEMANAS_DE_AULA.length;
  return aulas.map((id, i) => ({ id, semana: SEMANAS_DE_AULA[Math.floor((i * n) / aulas.length)] }));
}

/** Uma matéria do período: a filosofia (um degrau) ou uma disciplina. */
function materia({ id, nome, href, modulos, degrau = null }) {
  const aulas = modulos.flatMap((m) => m.aulas);
  const calendario = espalhar(aulas);
  const semanaDaAula = Object.fromEntries(calendario.map((c) => [c.id, c.semana]));
  // cada prova cai na semana da última aula do módulo; as que caem até a semana 8 entram na intermediária
  const provas = modulos.filter((m) => m.prova).map((m) => ({ id: m.prova, modulo: m.modulo, semana: Math.max(...m.aulas.map((a) => semanaDaAula[a])) }));
  const intermediaria = provas.filter((p) => p.semana < SEMANA_INTERMEDIARIA).map((p) => p.id);
  const final = provas.filter((p) => !intermediaria.includes(p.id)).map((p) => p.id);
  // além das aulas e provas, todas as obras dos módulos da matéria são obrigatórias (livros, filmes, músicas, áudios...)
  return { id, nome, href, degrau, modulos: modulos.map((m) => m.modulo), aulas: calendario, provas: provas.map((p) => p.id), intermediaria, final, obras: obrasObrigatorias(modulos.map((m) => m.modulo)) };
}

function materiaFilosofia(n) {
  const d = DEGRAUS.find((x) => x.n === n);
  const modulos = d.modulos.map((m) => ({ modulo: m, aulas: d.aulas.filter((a) => a.modulo === m && aulaPorId[a.id]).map((a) => a.id), prova: provaDe(m) }))
    .filter((m) => m.aulas.length);
  return { ...materia({ id: `filosofia-${n}`, nome: `Filosofia — degrau ${n}: ${d.nome}`, href: 'escada', modulos, degrau: n }), leituras: d.leituras.length, obras: obrasObrigatorias(d.modulos) };
}

/** Minutos de cada semana (1 a 18) somando todas as matérias do período. */
function cargaSemanal(materias) {
  const semanas = Array.from({ length: SEMANAS_TOTAIS }, () => 0);
  for (const m of materias) {
    m.aulas.forEach((a) => { semanas[a.semana - 1] += minutosAula(a.id) + CARGA.revisaoPorAula; });
    semanas[SEMANA_INTERMEDIARIA - 1] += m.intermediaria.length * CARGA.prova;
    semanas[SEMANA_FINAL - 1] += m.final.length * CARGA.prova;
    if (m.degrau !== null) for (let s = 1; s <= SEMANAS_ESTUDO; s++) semanas[s - 1] += CARGA.leituraFilosofiaSemana;
  }
  semanas[SEMANA_PROJETO - 1] += CARGA.projeto;
  return semanas;
}

/** Os semestres da fase multidisciplinar, com matérias, calendário, avaliações e carga calculada. */
export const PERIODOS = distribuirDisciplinas().map((ids, i) => {
  const n = i + 1;
  const degrau = PRIMEIRO_DEGRAU + i;
  const disciplinas = ids.map((id) => {
    const d = DISCIPLINAS.find((x) => x.id === id);
    return { ...materia({ id, nome: d.nome, href: `disciplina-${id}`, modulos: aulasDaDisciplina(id) }), etapas: d.etapas.length, obras: obrasObrigatorias(modulosDaDisciplina(id)) };
  });
  const materias = [...(DEGRAUS.some((d) => d.n === degrau) ? [materiaFilosofia(degrau)] : []), ...disciplinas];
  const semanas = cargaSemanal(materias);
  const total = semanas.reduce((s, x) => s + x, 0);
  const pico = Math.max(...semanas);
  const excecoes = [];
  if (materias.length > 4) excecoes.push(`${materias.length} matérias simultâneas, acima do limite de 4.`);
  const filo = materias.find((m) => m.degrau !== null);
  if (filo && filo.leituras > 20) excecoes.push(`O degrau ${degrau} tem ${filo.leituras} livros: a leitura integral continua nos semestres seguintes, no ritmo do plano de leitura; o semestre exige as aulas e a prova.`);
  return {
    n, titulo: `${n}º semestre`, degrau: filo ? degrau : null, materias, semanas, total, pico,
    mediaSemanal: Math.round(total / SEMANAS_TOTAIS),
    projeto: `Projeto interdisciplinar: escolher um objeto (uma obra, um acontecimento, uma instituição ou um problema brasileiro) e analisá-lo com o método de cada matéria do semestre (${materias.map((m) => m.nome.split(' — ')[0]).join(', ')}), terminando com um juízo próprio fundamentado.`,
    excecoes,
  };
});

export const periodoPorN = Object.fromEntries(PERIODOS.map((p) => [p.n, p]));

/** Matéria concluída: todas as provas dos módulos com a nota mínima (sem compensação entre provas ou matérias). */
export function situacaoMateria(estado, m) {
  const notas = m.provas.map((p) => melhorNota(estado, p));
  if (notas.every((x) => x >= NOTA_MINIMA) && m.obras.every((id) => livroConcluido(estado, id))) return 'aprovada';
  // quem já marcou todas as etapas do percurso antes dos semestres existirem mantém a conclusão
  if (m.degrau === null && Object.keys(estado.disciplinas?.[m.id] || {}).length >= m.etapas) return 'aprovada';
  if (m.degrau !== null && estado.degraus[m.degrau]?.concluido) return 'aprovada';
  return notas.some((x) => x >= 0 && x < NOTA_MINIMA) ? 'recuperacao' : 'em curso';
}

/** Semestre atual: o primeiro com alguma matéria não aprovada; null se todos estiverem concluídos. */
export const periodoAtual = (estado) => PERIODOS.find((p) => p.materias.some((m) => situacaoMateria(estado, m) !== 'aprovada')) || null;

/** Semanas necessárias para cumprir um semestre no ritmo do plano (horas por semana do estudante). */
export const semanasNoRitmo = (p, horasSemana) => Math.ceil(p.total / (Math.max(1, Number(horasSemana) || 1) * 60));
