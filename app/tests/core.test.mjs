// Executar com: node --test app/tests
import test from 'node:test';
import assert from 'node:assert/strict';
import * as C from '../core.js';
import { LIVROS, livroPorId } from '../data/livros.js';
import { ORDEM_AUTOR, SEQUENCIA, INTRODUCOES } from '../data/obras/index.js';
import { MODULOS, DEGRAUS, todasAulas, sequenciaDegrau } from '../data/curriculo.js';
import { CONCEITOS, conceitoPorId } from '../data/conceitos.js';
import { AUTORES, autorPorId } from '../data/autores.js';
import { AULAS_COMPLETAS } from '../data/aulas/index.js';
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { MOVIMENTOS, EVENTOS, AREAS, movimentoPorId } from '../data/genealogia.js';

const DIA = 86400000;
const T0 = new Date(2026, 9, 26, 10).getTime(); // segunda-feira

test('corrige itens objetivos e ignora discursivas', () => {
  const itens = [
    { tipo: 'mc', correta: 1 },
    { tipo: 'validade', valido: false },
    { tipo: 'premissas', papeis: ['p', 'c'] },
    { tipo: 'disc' },
  ];
  const r = C.corrigir(itens, [1, true, ['p', 'c'], 'texto']);
  assert.deepEqual([r.acertos, r.total, r.pct], [2, 3, 67]);
  assert.deepEqual(r.detalhes, [true, false, true, null]);
});

test('aula só é concluível com quiz, discursiva, fonte e aula anterior', () => {
  const aula = { id: 'm1-2', exercicios: [{ tipo: 'mc' }, { tipo: 'disc' }] };
  const ini = C.estadoInicial(T0);
  let e = ini;
  assert.equal(C.aulaConcluivel(aula, e, 'm1-1').faltas.length, 4);
  e = { ...e,
    aulas: { 'm1-1': { status: 'concluida' }, 'm1-2': { fonteLida: true } },
    tentativas: { 'quiz-m1-2': [{ pct: 50 }, { pct: 80 }] },
    discursivas: { 'm1-2-1': { texto: 'resposta' } } };
  assert.deepEqual(C.aulaConcluivel(aula, e, 'm1-1'), { ok: true, faltas: [] });
});

test('trilha única exige 80% e o aprofundamento de toda aula', () => {
  const aula = { id: 'm1-2', exercicios: [{ tipo: 'mc' }], avancado: { exercicios: [{ tipo: 'mc' }, { tipo: 'disc' }] } };
  const ini = C.estadoInicial(T0);
  let e = { ...ini, aulas: { 'm1-2': { fonteLida: true } }, tentativas: { 'quiz-m1-2': [{ pct: 75 }] } };
  assert.deepEqual(C.aulaConcluivel(aula, e, null).faltas, ['Obter ao menos 80% no questionário', 'Obter ao menos 80% no questionário de aprofundamento', 'Responder à questão discursiva do aprofundamento']);
  e = { ...e, tentativas: { 'quiz-m1-2': [{ pct: 80 }], 'quiz-av-m1-2': [{ pct: 100 }] }, discursivas: { 'm1-2-av-1': { texto: 'x' } } };
  assert.equal(C.aulaConcluivel(aula, e, null).ok, true);
});

test('degrau exige todas as leituras e as competências de aprofundamento', () => {
  const d = { n: 0, prereq: [], modulos: [], leituras: ['x', 'y'], competencias: ['a'], competenciasAvancadas: ['b'] };
  const base = { ...C.estadoInicial(T0), degraus: { 0: { competencias: [true] } }, livros: { x: { estado: 'concluido' } } };
  assert.deepEqual(C.degrauConcluivel(d, [], new Set(), base).faltas, ['Concluir 1 leitura(s) obrigatória(s)', 'Confirmar todas as competências de aprofundamento']);
  const pronto = { ...base, livros: { x: { estado: 'concluido' }, y: { estado: 'concluido' } }, degraus: { 0: { competencias: [true], competenciasAv: [true] } } };
  assert.equal(C.degrauConcluivel(d, [], new Set(), pronto).ok, true);
});

test('genealogia: linhagem recursiva, contemporâneos e escala por trechos', () => {
  const movs = [
    { id: 'a', inicio: 0, fim: 100, bebeuDe: [] },
    { id: 'b', inicio: 50, fim: 200, bebeuDe: [{ id: 'a' }] },
    { id: 'c', inicio: 300, fim: 400, bebeuDe: [{ id: 'b' }] },
  ];
  assert.deepEqual([...C.linhagem(movs, 'c', 'origens')], [['b', 1], ['a', 2]]);
  assert.deepEqual([...C.linhagem(movs, 'a', 'herdeiros')], [['b', 1], ['c', 2]]);
  assert.deepEqual(C.contemporaneos(movs, movs[0]).map((m) => m.id), ['b']);
  const esc = C.escalaTempo([[0, 100, 100], [100, 200, 300]]);
  assert.equal(esc.posicao(50), 50);
  assert.equal(esc.posicao(150), 250);
  assert.equal(esc.total, 400);
  assert.equal(C.fmtAno(-399), '399 a.C.');
});

test('revisão espaçada sobe de nível ao lembrar e volta ao início ao esquecer', () => {
  const c0 = C.novoCartao('f', 'v', 'aula:m1-1', T0, 'x');
  assert.equal(c0.proxima, C.inicioDoDia(T0) + DIA);
  const c1 = C.responderCartao(c0, true, T0);
  assert.equal(c1.nivel, 1);
  assert.equal(c1.proxima, C.inicioDoDia(T0) + 3 * DIA);
  const c2 = C.responderCartao(c1, false, T0);
  assert.equal(c2.nivel, 0);
  assert.equal(c2.historico.length, 2);
  assert.equal(C.revisoesPendentes([c0], T0 + 2 * DIA).length, 1);
});

test('minutos da semana contam a partir de segunda-feira', () => {
  const sessoes = [{ inicio: T0, minutos: 30 }, { inicio: T0 - DIA, minutos: 50 }, { inicio: T0 + 6 * DIA, minutos: 20 }];
  assert.equal(C.minutosSemana(sessoes, T0), 50);
  assert.equal(C.minutosSemana(sessoes, T0, -1), 50);
});

test('plano prioriza revisões e aulas reprovadas e avisa atraso sem aumentar carga', () => {
  const p = C.planejarSemana({ horasSemana: 5, dias: [1, 4], paginasHora: 10, livrosSimultaneos: 1, dataAlvo: '2026-11-01' }, {
    aulasPendentes: [{ id: 'a', titulo: 'A', minutos: 75 }, { id: 'b', titulo: 'B', minutos: 75 }],
    aulasReprovadas: [{ id: 'z', titulo: 'Z' }],
    livrosAtivos: [{ id: 'l', titulo: 'Livro', paginasRestantes: 200 }],
    revisoesPendentes: 3, minutosSemanaPassada: 30, minutosFaltantesCurso: 6000,
  }, T0);
  assert.equal(p.tarefas[0].tipo, 'revisao');
  assert.equal(p.tarefas[1].tipo, 'retomar');
  assert.ok(p.usado <= p.meta + 1);
  assert.equal(p.porDia.length, 2);
  assert.equal(p.avisos.length, 3);
  assert.equal(p.semanasRestantes, 20);
});

test('busca ignora acentos e prioriza título', () => {
  const r = C.buscar([{ tipo: 'c', id: 1, titulo: 'Fé', texto: 'x' }, { tipo: 'c', id: 2, titulo: 'Razão', texto: 'relação com a fé' }], 'fe');
  assert.deepEqual(r.map((x) => x.id), [1, 2]);
});

test('estado salvo antigo é normalizado sem perder dados', () => {
  const e = C.normalizarEstado({ notas: [{ id: 'n' }], plano: { horasSemana: 9 }, lixo: 1 }, T0);
  assert.equal(e.notas.length, 1);
  assert.equal(e.plano.horasSemana, 9);
  assert.equal(e.plano.paginasHora, 12);
  assert.equal(e.lixo, undefined);
});

test('obras completas: todo autor tem obras, refs existem e cada livro tem lugar na sequência', () => {
  for (const a of AUTORES) assert.ok(ORDEM_AUTOR[a.id]?.length, `autor ${a.id} sem obras`);
  for (const [chave, ids] of Object.entries(ORDEM_AUTOR)) ids.forEach((id) => assert.ok(livroPorId[id], `${chave}: ${id}`));
  for (const [n, chaves] of Object.entries(SEQUENCIA)) {
    chaves.forEach((c) => assert.ok(c.startsWith('@') ? ORDEM_AUTOR[c.slice(1)] : livroPorId[c]?.degrau === Number(n), `degrau ${n}: ${c}`));
  }
  for (const l of LIVROS) assert.ok(l.ordem < 1000, `livro ${l.id} fora da sequência do degrau ${l.degrau}`);
  for (const d of DEGRAUS) assert.equal(new Set(LIVROS.filter((l) => l.degrau === d.n).map((l) => l.ordem)).size, LIVROS.filter((l) => l.degrau === d.n).length, `ordens únicas no degrau ${d.n}`);
  for (const d of DEGRAUS) assert.equal(d.leituras.length, LIVROS.filter((l) => l.degrau === d.n).length, `degrau ${d.n}: todo livro é leitura do degrau`);
});

test('sequência do Mapa: livros antes das aulas, salvo introdutórias; toda aula aparece uma vez', () => {
  const vistas = [];
  for (const d of DEGRAUS) {
    const seq = sequenciaDegrau(d);
    const intro = Object.values(INTRODUCOES[d.n] || {}).flat();
    vistas.push(...seq.filter((i) => i.tipo === 'aula').map((i) => i.id));
    intro.forEach((id) => assert.ok(seq.some((i) => i.id === id), `degrau ${d.n}: âncora da aula ${id} não encontrada`));
    const ultimoLivro = seq.map((i) => i.tipo).lastIndexOf('livro');
    seq.slice(0, Math.max(0, ultimoLivro)).forEach((i) => assert.ok(i.tipo === 'livro' || intro.includes(i.id), `degrau ${d.n}: ${i.id} antes dos livros`));
  }
  assert.deepEqual([...vistas].sort(), todasAulas.map((a) => a.id).sort());
});

test('integridade: referências entre dados existem', () => {
  const modIds = new Set(MODULOS.map((m) => m.id));
  const aulaIds = new Set(todasAulas.map((a) => a.id));
  for (const l of LIVROS) {
    for (const p of l.prereq) assert.ok(livroPorId[p], `livro ${l.id}: prereq ${p}`);
    if (l.modulo) assert.ok(modIds.has(l.modulo), `livro ${l.id}: módulo ${l.modulo}`);
  }
  assert.equal(new Set(LIVROS.map((l) => l.id)).size, LIVROS.length, 'ids de livro únicos');
  for (const c of CONCEITOS) {
    c.aulas.forEach((a) => assert.ok(aulaIds.has(a), `conceito ${c.id}: aula ${a}`));
    c.livros.forEach((l) => assert.ok(livroPorId[l], `conceito ${c.id}: livro ${l}`));
    c.autores.forEach((a) => assert.ok(autorPorId[a], `conceito ${c.id}: autor ${a}`));
    c.relacionados.forEach((r) => assert.ok(conceitoPorId[r], `conceito ${c.id}: relacionado ${r}`));
  }
  for (const a of AUTORES) a.influencias.forEach((i) => assert.ok(autorPorId[i], `autor ${a.id}: ${i}`));
  for (const d of DEGRAUS) {
    d.modulos.forEach((m) => assert.ok(modIds.has(m)));
    (d.retomar || []).forEach((l) => assert.ok(livroPorId[l], `degrau ${d.n}: ${l}`));
  }
  assert.equal(MODULOS.length, 16);
  assert.equal(DEGRAUS.length, 13);
  assert.equal(new Set(AULAS_COMPLETAS.map((a) => a.id)).size, AULAS_COMPLETAS.length, 'ids de aula únicos');
  assert.ok(!JSON.stringify(AULAS_COMPLETAS).includes('${'), 'nenhuma interpolação não processada (aspas simples no lugar de crase)');
  const conteudo = AULAS_COMPLETAS.filter((a) => a.tipo !== 'avaliacao');
  for (const a of AULAS_COMPLETAS) assert.ok(aulaIds.has(a.id), `aula completa ${a.id} existe no currículo`);
  for (const a of conteudo) {
    for (const ex of a.exercicios) if (ex.tipo === 'mc') assert.ok(ex.correta < ex.opcoes.length && ex.explicacao, a.id);
    assert.ok(a.exercicios.filter((e) => e.tipo === 'mc').length >= 2, `${a.id}: ao menos 2 objetivas para a prova`);
    for (const k of ['explicacao', 'argumento', 'fonte', 'resumo', 'referencias', 'revisao']) assert.ok(a[k], `${a.id}: falta ${k}`);
  }
  for (const a of AULAS_COMPLETAS.filter((x) => x.tipo === 'avaliacao')) {
    assert.ok(avaliacaoPorId[a.prova], `${a.id}: prova ${a.prova} existe`);
    assert.ok(a.discursivas?.length || a.prova === 'final', `${a.id}: discursivas de síntese`);
  }
  for (const av of AVALIACOES) for (const it of av.itens) {
    if (it.tipo === 'premissas') assert.equal(it.frases.length, it.papeis.length, av.id);
    if (it.tipo === 'mc') assert.ok(it.correta < it.opcoes.length, av.id);
  }
  for (const a of conteudo) {
    assert.ok(a.avancado, `aula ${a.id} tem aprofundamento avançado`);
    for (const ex of a.avancado.exercicios) if (ex.tipo === 'mc') assert.ok(ex.correta < ex.opcoes.length && ex.explicacao, a.id);
  }
  for (const d of DEGRAUS) assert.ok(d.competenciasAvancadas?.length, `degrau ${d.n} tem competências avançadas`);
});

test('integridade: genealogia das ideias', () => {
  assert.equal(new Set(MOVIMENTOS.map((m) => m.id)).size, MOVIMENTOS.length, 'ids únicos');
  for (const m of MOVIMENTOS) {
    assert.ok(m.inicio <= m.fim, `${m.id}: início antes do fim`);
    assert.ok(AREAS[m.area], `${m.id}: área`);
    m.autores.forEach((a) => assert.ok(autorPorId[a], `${m.id}: autor ${a}`));
    const vistos = new Set();
    for (const b of m.bebeuDe) {
      const fonte = movimentoPorId[b.id];
      assert.ok(fonte, `${m.id}: bebeuDe ${b.id}`);
      assert.ok(!vistos.has(b.id), `${m.id}: fonte repetida ${b.id}`); vistos.add(b.id);
      assert.ok(['documentada', 'debatida'].includes(b.grau), `${m.id}: grau`);
      assert.ok(fonte.inicio <= m.fim, `${m.id} não pode beber de ${b.id}, que começa depois`);
    }
  }
  for (let i = 1; i < EVENTOS.length; i++) assert.ok(EVENTOS[i - 1].ano <= EVENTOS[i].ano, 'eventos em ordem');
});
