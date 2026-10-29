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
import { POSICOES, ESPECTRO, espectroDe, quadrante } from '../data/espectro.js';
import { TRILHA, fichaDe, posicaoNaTrilha } from '../data/fichas.js';
import { PREREQUISITOS } from '../data/prerequisitos.js';
import { QUESTIONARIOS } from '../data/questionarios.js';
import { gerar, ARQUIVO } from '../../scripts/leituras-em-ordem.mjs';
import { readFileSync } from 'node:fs';

const IDS_ORIGINAIS = JSON.parse(readFileSync(new URL('./ids-originais.json', import.meta.url), 'utf8'));

// ---------- Integridade dos títulos ----------
test('títulos: os 607 originais existem, são únicos, obrigatórios e têm posição na trilha', () => {
  assert.equal(IDS_ORIGINAIS.length, 607);
  assert.equal(LIVROS.length, 607);
  for (const id of IDS_ORIGINAIS) assert.ok(livroPorId[id], `livro original ${id} desapareceu`);
  assert.equal(new Set(LIVROS.map((l) => `${l.titulo}|${l.autor}`)).size, 607, 'registros duplicados');
  for (const l of LIVROS) {
    assert.ok(!('opcional' in l) && !('avancado' in l), `${l.id} marcado como opcional ou avançado`);
    assert.ok(l.ordem < 1000 && Number.isInteger(posicaoNaTrilha(l.id)), `${l.id} sem posição na trilha`);
  }
  assert.equal(DEGRAUS.reduce((s, d) => s + d.leituras.length, 0), 607, 'soma das leituras dos degraus');
});

test('documento da ordem de leitura: idêntico ao gerado dos dados e com os 607 títulos', () => {
  const doc = readFileSync(ARQUIVO, 'utf8').replace(/\r\n/g, '\n'); // o Git no Windows pode converter para CRLF
  assert.equal(doc, gerar(), 'leituras-em-ordem.md desatualizado: rode node scripts/leituras-em-ordem.mjs');
  assert.equal((doc.match(/^\d+\. \*\*/gm) || []).length, 607);
  for (const id of IDS_ORIGINAIS) assert.ok(doc.includes(`\`${id}\``), `${id} fora do documento`);
});

// ---------- Integridade pedagógica ----------
test('escada: 14 degraus encadeados; preparação → teologia → introdução → lógica', () => {
  assert.deepEqual(DEGRAUS.map((d) => d.n), [...Array(14).keys()]);
  DEGRAUS.forEach((d) => assert.deepEqual(d.prereq, d.n ? [d.n - 1] : []));
  const degrauDe = (mod) => [...new Set(todasAulas.filter((a) => a.modulo === mod).map((a) => a.degrau))];
  assert.deepEqual(DEGRAUS[0].aulas.map((a) => a.id), ['m3-1'], 'o degrau 0 tem só o método de leitura, não a Introdução à Filosofia');
  assert.deepEqual(degrauDe('m1'), [1]);
  assert.ok(todasAulas.filter((a) => a.modulo === 'm3' && a.id !== 'm3-1').every((a) => a.degrau === 2), 'Introdução à Filosofia no degrau 2');
  assert.deepEqual(degrauDe('m4'), [3]);
  assert.deepEqual(degrauDe('m11'), [10]);
  assert.deepEqual(degrauDe('m12'), [11]);
});

test('aulas: cada uma em um único degrau, sem repetição, e a aula anterior do módulo nunca vem depois', () => {
  const vistas = DEGRAUS.flatMap((d) => d.aulas.map((a) => a.id));
  assert.equal(vistas.length, todasAulas.length);
  assert.equal(new Set(vistas).size, todasAulas.length, 'aula repetida em dois degraus');
  for (const m of MODULOS) {
    const aulas = todasAulas.filter((a) => a.modulo === m.id);
    aulas.forEach((a, i) => { if (i) assert.ok(aulas[i - 1].degrau <= a.degrau, `${a.id} exige ${aulas[i - 1].id}, de degrau posterior`); });
  }
});

test('pré-requisitos: existem, vêm antes na trilha (sem ciclos) e as aulas preparatórias não ficam depois', () => {
  for (const l of LIVROS) {
    for (const p of l.prereq) {
      assert.ok(livroPorId[p], `${l.id}: pré-requisito ${p} inexistente`);
      assert.ok(posicaoNaTrilha(p) < posicaoNaTrilha(l.id), `${l.id} (posição ${posicaoNaTrilha(l.id) + 1}) exige ${p}, que só vem na posição ${posicaoNaTrilha(p) + 1}`);
    }
    const f = fichaDe(l.id);
    f.aulas.forEach((a) => assert.ok(todasAulas.find((x) => x.id === a).degrau <= l.degrau, `${l.id}: aula preparatória ${a} em degrau posterior`));
    f.recomendadas.forEach((r) => assert.ok(posicaoNaTrilha(r) < posicaoNaTrilha(l.id), `${l.id}: recomendada ${r} depois`));
    assert.ok(f.justificativa.length > 40 && f.criterio.length >= 3, `${l.id}: ficha incompleta`);
  }
});

test('pré-requisitos justificados: livro e pré-requisito existem e cada dependência tem motivo', () => {
  for (const [id, deps] of Object.entries(PREREQUISITOS)) {
    assert.ok(livroPorId[id], `prerequisitos.js: livro ${id} inexistente`);
    for (const [p, porque] of deps) {
      assert.ok(livroPorId[p], `${id}: pré-requisito ${p} inexistente`);
      assert.ok(livroPorId[id].prereq.includes(p) && porque.length > 20, `${id} ← ${p}: sem motivo`);
    }
  }
});

test('Mário Ferreira dos Santos e Olavo de Carvalho: degraus próprios, depois de lógica, filosofia antiga e metafísica', () => {
  const mfs = LIVROS.filter((l) => l.obraDe === 'mfs'), olavo = LIVROS.filter((l) => l.obraDe === 'olavo' && l.id !== 'olavo-guia-mfs');
  assert.ok(mfs.length > 30 && mfs.every((l) => l.degrau === 10));
  assert.ok(olavo.length > 15 && olavo.every((l) => l.degrau === 11));
  const pos = (id) => posicaoNaTrilha(id);
  assert.ok(pos('mfs-logica-dialectica') < pos('mfs-teoria-conhecimento') && pos('mfs-ontologia') < pos('mfs-filosofia-concreta') && pos('mfs-filosofia-concreta') < pos('mfs-pitagoras'));
  assert.ok(pos('olavo-historia-essencial') < pos('olavo-quatro-discursos') && pos('olavo-quatro-discursos') < pos('olavo-dialetica-simbolica'));
  for (const base of ['copi-logica', 'aristoteles-metafisica', 'platao-parmenides']) assert.ok(pos(base) < Math.min(...mfs.map((l) => pos(l.id))), `${base} antes de Mário`);
});

// ---------- Integridade funcional ----------
test('migração: progresso salvo na escada de 13 degraus é preservado na de 14', () => {
  const v1 = { v: 1, aulas: { 'm1-1': { status: 'concluida' } }, notas: [{ id: 'n1' }], livros: { cic: { estado: 'concluido' } },
    degraus: { 0: { concluido: true }, 5: { competencias: [true] }, 6: { concluido: true, data: 9 }, 12: { competencias: [true, false] } } };
  const e = C.normalizarEstado(v1, T0);
  assert.equal(e.v, 2);
  assert.deepEqual(e.aulas, v1.aulas);
  assert.deepEqual(e.notas, v1.notas);
  assert.deepEqual(e.livros, v1.livros);
  assert.deepEqual(e.degraus[0], { concluido: true });
  assert.deepEqual(e.degraus[6], { competencias: [true] }, 'metafísica: antigo 5 → novo 6');
  assert.deepEqual(e.degraus[7], { concluido: true, data: 9 }, 'escolástica: antigo 6 → novo 7');
  assert.equal(e.degraus[5].concluido, true, 'patrística fazia parte do antigo 6');
  assert.deepEqual(e.degraus[13], { competencias: [true, false] });
  assert.deepEqual(C.normalizarEstado(e, T0).degraus, e.degraus, 'não migra duas vezes');
});

test('comprovação de leitura: proporcional à dificuldade e exigida para concluir o degrau', () => {
  assert.deepEqual(C.camposComprovacao(1), ['resumo', 'conceitos', 'transicao']);
  assert.ok(C.camposComprovacao(5).includes('objecao'));
  const livro = { id: 'x', nivel: 2 };
  const base = C.estadoInicial(T0);
  assert.equal(C.comprovacaoLivro(livro, base).ok, false);
  const escrito = (k, n) => [C.chaveComprovacao('x', k), { texto: 'a'.repeat(n) }];
  const pronto = { ...base, discursivas: Object.fromEntries([escrito('resumo', 300), escrito('conceitos', 150), escrito('transicao', 80)]) };
  assert.equal(C.comprovacaoLivro(livro, pronto).ok, true);
  const d = { n: 0, prereq: [], modulos: [], aulas: [], leituras: ['x'], competencias: [] };
  const lido = { ...base, livros: { x: { estado: 'concluido' } } };
  assert.deepEqual(C.degrauConcluivel(d, [], new Set(), lido, { x: livro }).faltas, ['Escrever a comprovação de 1 leitura(s) concluída(s)']);
  assert.equal(C.degrauConcluivel(d, [], new Set(), { ...pronto, livros: lido.livros }, { x: livro }).ok, true);
});

test('questionários por livro: válidos, ligados ao livro e exigidos na comprovação com 80%', () => {
  for (const [id, itens] of Object.entries(QUESTIONARIOS)) {
    assert.ok(livroPorId[id]?.questionario === itens, `questionário de ${id} sem livro`);
    assert.ok(itens.length >= 5, `${id}: ao menos 5 questões`);
    for (const q of itens) {
      assert.ok(q.opcoes.length >= 3 && q.correta >= 0 && q.correta < q.opcoes.length, `${id}: ${q.enunciado}`);
      assert.equal(new Set(q.opcoes).size, q.opcoes.length, `${id}: opções repetidas`);
      assert.ok(q.explicacao.includes('Revise:'), `${id}: sem indicação de revisão`);
    }
  }
  const livro = { id: 'y', nivel: 1, questionario: [{}] };
  const textos = Object.fromEntries(C.camposComprovacao(1).map((k) => [C.chaveComprovacao('y', k), { texto: 'a'.repeat(400) }]));
  const escrito = { ...C.estadoInicial(T0), discursivas: textos };
  assert.deepEqual(C.comprovacaoLivro(livro, escrito).faltas, ['Obter ao menos 80% no questionário da obra']);
  const reprovado = { ...escrito, tentativas: { [C.quizDoLivro('y')]: [{ pct: 60 }] } };
  assert.equal(C.comprovacaoLivro(livro, reprovado).ok, false);
  const aprovado = { ...escrito, tentativas: { [C.quizDoLivro('y')]: [{ pct: 60 }, { pct: 80 }] } };
  assert.equal(C.comprovacaoLivro(livro, aprovado).ok, true);
});

test('aula não publicada não bloqueia a conclusão do degrau', () => {
  const d = { n: 0, prereq: [], modulos: [], aulas: [{ id: 'a1' }, { id: 'a2' }], leituras: [], competencias: [] };
  const e = { ...C.estadoInicial(T0), aulas: { a1: { status: 'concluida' } } };
  assert.equal(C.degrauConcluivel(d, [], new Set(['a1']), e).ok, true, 'a2 ainda não publicada');
  assert.equal(C.degrauConcluivel(d, [], new Set(['a1', 'a2']), e).ok, false, 'a2 publicada e pendente');
});

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

test('leitor de PDF: página, conclusão e sessão de tempo', () => {
  const l1 = C.registrarPagina(undefined, 12.4, 300, T0);
  assert.deepEqual(l1, { estado: 'lendo', paginas: 300, paginaAtual: 12, inicio: T0 });
  assert.equal(C.registrarPagina(l1, 999, 300, T0 + 5).paginaAtual, 300);
  assert.equal(C.registrarPagina(l1, 0, 300).paginaAtual, 1);
  const fim = C.concluirLeitura(l1, T0 + 9);
  assert.deepEqual([fim.estado, fim.paginaAtual, fim.fim], ['concluido', 300, T0 + 9]);
  assert.equal(C.registrarPagina(fim, 5, 300).estado, 'concluido', 'reabrir não desfaz a conclusão');
  assert.equal(C.sessaoLeitura('x', 'X', T0, 59000, () => 's1'), null);
  assert.deepEqual(C.sessaoLeitura('x', 'X', T0, 25 * 60000, () => 's1'), { id: 's1', inicio: T0, minutos: 25, alvo: { tipo: 'livro', id: 'x' }, obs: 'Leitura: X' });
});

test('espectro político: só movimentos existentes, posições válidas e nada antes de 1789 classificado', () => {
  for (const [id, e] of Object.entries(ESPECTRO)) {
    assert.ok(movimentoPorId[id], `espectro: movimento ${id} não existe`);
    assert.ok(e.nota, `espectro: ${id} sem nota`);
    if (e.eco) for (const [a, b] of [e.eco, e.cos]) assert.ok(a >= 0 && a <= b && b <= 100, `espectro: faixa inválida em ${id}`);
    else assert.equal(e.pos, 'sem-posicao', id);
  }
  assert.equal(quadrante({ eco: [0, 8], cos: [15, 45] }), 'esquerda-progressista');
  assert.equal(quadrante({ eco: [75, 95], cos: [88, 100] }), 'direita-conservadora');
  assert.equal(quadrante({ eco: [5, 60], cos: [5, 60] }), 'variado');
  for (const m of MOVIMENTOS) {
    const { pos } = espectroDe(m);
    assert.ok(POSICOES[pos], m.id);
    if (m.fim < 1789) assert.equal(pos, 'anterior', `${m.id} é anterior à régua esquerda–direita`);
  }
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
  assert.equal(DEGRAUS.length, 14);
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
