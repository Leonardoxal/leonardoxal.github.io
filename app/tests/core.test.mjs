// Executar com: node --test app/tests
import test from 'node:test';
import assert from 'node:assert/strict';
import * as C from '../core.js';
import { LIVROS, livroPorId } from '../data/livros.js';
import { ORDEM_AUTOR, SEQUENCIA, INTRODUCOES } from '../data/obras/index.js';
import { MODULOS, DEGRAUS, todasAulas, sequenciaDegrau, moduloPorId } from '../data/curriculo.js';
import { CONCEITOS, conceitoPorId } from '../data/conceitos.js';
import { AUTORES, autorPorId } from '../data/autores.js';
import { AULAS_COMPLETAS } from '../data/aulas/index.js';
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { MOVIMENTOS, EVENTOS, AREAS, movimentoPorId } from '../data/genealogia.js';
import { POSICOES, ESPECTRO, espectroDe, quadrante } from '../data/espectro.js';
import { TRILHA, fichaDe, posicaoNaTrilha } from '../data/fichas.js';
import { PREREQUISITOS } from '../data/prerequisitos.js';
import { QUESTIONARIOS } from '../data/questionarios.js';
import { notasDe, conexoesAula, conexoesLivro } from '../views/conexoes.js';
import { SIMBOLOS, TIPOS_SENTIDO, TRADICOES } from '../data/simbolos.js';
import { linhasGrade } from '../views/grade.js';
import { cruz } from '../ornamentos.js';
import { AREAS_CONJUNTAS, INTEGRADORAS } from '../data/avaliacoes.js';
import { SANTOS, SANTOS_DAS_ABAS, SANTOS_DAS_AREAS, NATUREZAS } from '../data/santos.js';
import { DISCIPLINAS, DISCIPLINAS_PENDENTES, ETAPAS, TIPOS_REFERENCIA } from '../data/disciplinas.js';
import { NOS, RELACOES, TIPOS_RELACAO, GRUPOS as GRUPOS_ARVORE, TRILHA as TRILHA_ARVORE, noPorId } from '../data/arvore.js';
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
test('escada: 14 degraus encadeados; preparação → teologia → patrística → introdução → lógica', () => {
  assert.deepEqual(DEGRAUS.map((d) => d.n), [...Array(14).keys()]);
  DEGRAUS.forEach((d) => assert.deepEqual(d.prereq, d.n ? [d.n - 1] : []));
  const degrauDe = (mod) => [...new Set(todasAulas.filter((a) => a.modulo === mod).map((a) => a.degrau))];
  assert.deepEqual(DEGRAUS[0].aulas.map((a) => a.id), ['m3-1'], 'o degrau 0 tem só o método de leitura, não a Introdução à Filosofia');
  assert.deepEqual(degrauDe('m1'), [1]);
  assert.deepEqual(degrauDe('m0'), [0]);
  assert.deepEqual(degrauDe('m3'), [3], 'Introdução à Filosofia só no degrau 3, primeiro da fase multidisciplinar');
  assert.deepEqual(degrauDe('m2b'), [2], 'patrística na fase teológica');
  // Cada módulo pertence a um único degrau: nenhum aparece em duas etapas da escada.
  for (const m of MODULOS) assert.deepEqual(degrauDe(m.id), [m.degrau], `módulo ${m.id} em um só degrau`);
  assert.equal(DEGRAUS.filter((d) => d.modulos.includes('m3')).length, 1);
  assert.deepEqual(DEGRAUS[0].modulos, ['m0']);
  assert.deepEqual(DEGRAUS[2].modulos, ['m2b']);
  assert.deepEqual(DEGRAUS[5].modulos, ['m5']);
  // O degrau 0 não exige a Introdução à Filosofia antes da teologia.
  assert.ok(!moduloPorId.m1.prereq.includes('m3') && !moduloPorId.m0.prereq.length);
  // Uma só nota de aprovação nas avaliações objetivas; ensaios e projetos (mínimo 0) são avaliados por rubrica.
  for (const a of AVALIACOES) assert.ok([0, C.NOTA_MINIMA].includes(a.minimo ?? 0), `avaliação ${a.id}: mínimo ${a.minimo}`);
  for (const a of AULAS_COMPLETAS) (a.criterios || []).forEach((c) => assert.ok(!/\b70 ?%/.test(c), `aula ${a.id}: critério com 70%`));
  MODULOS.forEach((m) => (m.criterios || []).forEach((c) => assert.ok(!/\b70 ?%/.test(c), `módulo ${m.id}: critério com 70%`)));
  assert.deepEqual(degrauDe('m4'), [4]);
  assert.deepEqual(degrauDe('m11'), [10]);
  assert.deepEqual(degrauDe('m12'), [11]);
});

test('aulas: cada uma em um único degrau, sem repetição, e a aula anterior do módulo nunca vem depois', () => {
  const vistas = DEGRAUS.flatMap((d) => d.aulas.map((a) => a.id));
  // aulas das disciplinas da fase 2 (degrau null) não entram na escada; as demais, uma vez cada
  const daEscada = todasAulas.filter((a) => a.degrau !== null);
  assert.equal(vistas.length, daEscada.length);
  assert.equal(new Set(vistas).size, daEscada.length, 'aula repetida em dois degraus');
  for (const m of MODULOS.filter((x) => x.degrau === null)) assert.ok(m.disciplina && DISCIPLINAS.some((d) => d.id === m.disciplina), `${m.id}: módulo fora da escada sem disciplina`);
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
  assert.equal(e.v, 3);
  assert.deepEqual(e.aulas, v1.aulas);
  assert.deepEqual(e.notas, v1.notas);
  assert.deepEqual(e.livros, v1.livros);
  assert.deepEqual(e.degraus[0], { concluido: true });
  assert.deepEqual(e.degraus[6], { competencias: [true] }, 'metafísica: antigo 5 → novo 6');
  assert.deepEqual(e.degraus[7], { concluido: true, data: 9 }, 'escolástica: antigo 6 → novo 7');
  assert.equal(e.degraus[2].concluido, true, 'patrística (hoje degrau 2) fazia parte do antigo 6');
  assert.deepEqual(e.degraus[13], { competencias: [true, false] });
  assert.deepEqual(C.normalizarEstado(e, T0).degraus, e.degraus, 'não migra duas vezes');
});

test('migração v2 → v3: cada registro acompanha seu conteúdo quando a patrística passa para a fase teológica', () => {
  const v2 = { v: 2, degraus: { 1: { concluido: true }, 2: { competencias: [true] }, 3: { concluido: true }, 4: { data: 4 }, 5: { competencias: [false, true] }, 6: { data: 6 } } };
  const e = C.normalizarEstado(v2, T0);
  assert.deepEqual(e.degraus, { 1: { concluido: true }, 2: { competencias: [false, true] }, 3: { competencias: [true] }, 4: { concluido: true }, 5: { data: 4 }, 6: { data: 6 } });
  assert.deepEqual(C.normalizarEstado(e, T0).degraus, e.degraus, 'não migra duas vezes');
});

test('fases: teologia exclusiva primeiro; a fase 2 só conclui depois dela, mas pode ser consultada', () => {
  const vazio = C.estadoInicial(T0);
  assert.equal(C.faseFormacao(vazio), 'preparacao');
  assert.deepEqual(DEGRAUS.filter((d) => C.FASE_TEOLOGICA.includes(d.n)).flatMap((d) => d.modulos), ['m0', 'm1', 'm2', 'm2b'], 'só teologia (e o método) na fase 1');
  // a fase 1 não contém nenhum livro ou aula de filosofia regular
  const fase1 = LIVROS.filter((l) => l.degrau <= 2);
  assert.ok(!fase1.some((l) => ['Introdução à filosofia', 'Lógica', 'Filosofia antiga'].includes(l.area)), 'filosofia regular na fase teológica');
  assert.equal(livroPorId['chaui-convite'].degrau, 3, 'Convite à Filosofia no percurso de introdução filosófica');
  // bloqueio na lógica: aula, livro e degrau da fase 2
  const aulaF2 = AULAS_COMPLETAS.find((a) => a.id === 'm3-2');
  assert.ok(C.aulaConcluivel(aulaF2, vazio, null, null, 3).faltas.includes(C.MSG_FASE));
  assert.ok(!C.aulaConcluivel(AULAS_COMPLETAS.find((a) => a.id === 'm1-1'), vazio, null, null, 1).faltas.includes(C.MSG_FASE));
  assert.ok(C.comprovacaoLivro(livroPorId['platao-apologia'] || LIVROS.find((l) => l.degrau === 5), vazio).faltas.includes(C.MSG_FASE));
  assert.ok(!C.comprovacaoLivro(livroPorId.cic, vazio).faltas.includes(C.MSG_FASE));
  assert.ok(C.degrauConcluivel(DEGRAUS[3], MODULOS, new Set(), vazio).faltas.includes(C.MSG_FASE));
  // concluir a síntese teológica é exigido no degrau 2
  assert.ok(C.degrauConcluivel(DEGRAUS[2], MODULOS, new Set(), vazio).faltas.some((f) => f.includes('síntese')));
  const sintese = avaliacaoPorId['sintese-teologica'];
  assert.ok(sintese.itens.filter((i) => i.aula).length >= 15 && sintese.itens.every((i) => !i.aula || ['m1', 'm2', 'm2b'].includes(todasAulas.find((a) => a.id === i.aula).modulo)));
  // fase concluída libera a 2
  const pronto = { ...vazio, degraus: { 0: { concluido: true }, 1: { concluido: true }, 2: { concluido: true } } };
  assert.equal(C.faseFormacao(pronto), 'liberada');
  assert.ok(!C.aulaConcluivel(aulaF2, pronto, null, null, 3).faltas.includes(C.MSG_FASE));
  assert.equal(C.faseFormacao({ ...pronto, degraus: { ...pronto.degraus, 3: { competencias: [true] } } }), 'multidisciplinar');
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
  assert.deepEqual([...vistas].sort(), todasAulas.filter((a) => a.degrau !== null).map((a) => a.id).sort());
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
  assert.equal(MODULOS.filter((m) => m.degrau !== null).length, 18, 'módulos da escada');
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

test('integridade: árvore do conhecimento', () => {
  assert.equal(Object.keys(noPorId).length, NOS.length, 'ids únicos');
  const raizes = NOS.filter((n) => !n.pai);
  assert.deepEqual(raizes.map((n) => n.id), ['teologia'], 'uma só raiz: Teologia Católica');
  assert.equal(noPorId.filosofia.pai, 'teologia');
  const areas = new Set(LIVROS.map((l) => l.area));
  const aulas = new Set(todasAulas.map((a) => a.id));
  const modulos = new Set(MODULOS.map((m) => m.id));
  const degraus = new Set(DEGRAUS.map((d) => d.n));
  for (const n of NOS) {
    assert.ok(GRUPOS_ARVORE[n.grupo], `${n.id}: grupo`);
    assert.ok(n.nome && n.desc, `${n.id}: nome e descrição`);
    if (n.pai) assert.ok(noPorId[n.pai], `${n.id}: pai ${n.pai}`);
    // Sem ciclos: subir pelos pais termina na raiz.
    const vistos = new Set();
    for (let p = n; p; p = noPorId[p.pai]) { assert.ok(!vistos.has(p.id), `${n.id}: ciclo`); vistos.add(p.id); }
    n.livros.forEach((x) => assert.ok(livroPorId[x], `${n.id}: livro ${x}`));
    n.areas.forEach((x) => assert.ok(areas.has(x), `${n.id}: área ${x}`));
    n.autores.forEach((x) => assert.ok(ORDEM_AUTOR[x], `${n.id}: autor ${x}`));
    n.aulas.forEach((x) => assert.ok(aulas.has(x), `${n.id}: aula ${x}`));
    n.modulos.forEach((x) => assert.ok(modulos.has(x), `${n.id}: módulo ${x}`));
    n.degraus.forEach((x) => assert.ok(degraus.has(x), `${n.id}: degrau ${x}`));
  }
  for (const r of RELACOES) {
    assert.ok(noPorId[r.de] && noPorId[r.para] && r.de !== r.para, `relação ${r.de}→${r.para}`);
    assert.ok(TIPOS_RELACAO[r.tipo] && r.tipo !== 'hierarquia', `relação ${r.de}→${r.para}: tipo`);
    assert.ok(r.porque?.length > 20, `relação ${r.de}→${r.para}: justificativa`);
  }
  // A trilha da árvore percorre os 14 degraus na ordem da escada.
  assert.equal(TRILHA_ARVORE.length, DEGRAUS.length);
  TRILHA_ARVORE.forEach((id, i) => assert.ok(noPorId[id].degraus.includes(i), `trilha: ${id} é o degrau ${i}`));
});

test('santos de referência: cada aba tem um, com fonte, imagem e natureza declarada', () => {
  const abas = ['painel', 'mapa', 'escada', 'curso', 'biblioteca', 'genealogia', 'caderno', 'avaliacoes', 'atlas', 'plano', 'busca'];
  for (const a of abas) assert.ok(SANTOS_DAS_ABAS[a]?.length, `aba ${a} sem santo`);
  const refs = [...Object.values(SANTOS_DAS_ABAS).flat(), ...Object.values(SANTOS_DAS_AREAS)];
  for (const r of refs) {
    const s = SANTOS[r.santo];
    assert.ok(s, `santo ${r.santo}`);
    assert.ok(NATUREZAS[r.natureza], `${r.santo}: natureza`);
    assert.ok(r.motivo.length > 40, `${r.santo}: motivo`);
    // patronagem só com documento citado; o resto é declarado como tema ou devoção
    if (r.natureza === 'patronagem') assert.ok(s.documento?.url.startsWith('https://'), `${r.santo}: patronagem sem documento`);
  }
  for (const [id, s] of Object.entries(SANTOS)) {
    assert.ok(s.fonte.url.startsWith('https://') && s.imagem && s.licenca && s.resumo, `santo ${id} incompleto`);
    (s.livros || []).forEach((l) => assert.ok(livroPorId[l], `santo ${id}: livro ${l}`));
    if (s.autor) assert.ok(ORDEM_AUTOR[s.autor], `santo ${id}: autor ${s.autor}`);
  }
  Object.keys(SANTOS_DAS_AREAS).forEach((n) => assert.ok(noPorId[n], `área ${n}`));
  // sem repetir o mesmo santo em todas as abas
  assert.ok(new Set(Object.values(SANTOS_DAS_ABAS).flat().map((r) => r.santo)).size >= 11);
});

test('disciplinas: História, Geografia, Sociologia e Economia com as onze etapas e bibliografia mundial e brasileira', () => {
  assert.deepEqual(DISCIPLINAS.map((d) => d.id).sort(), ['economia', 'geografia', 'historia', 'simbologia', 'sociologia']);
  for (const d of DISCIPLINAS) {
    assert.ok(noPorId[d.no] && d.metodo.length > 60, `${d.id}: nó e método`);
    const esperadas = d.trilhaPropria ? Array.from({ length: 12 }, (_, i) => `m${i + 1}`) : Object.keys(ETAPAS);
    assert.deepEqual(d.etapas.map((e) => e.etapa), esperadas, `${d.id}: etapas completas e em ordem`);
    if (d.trilhaPropria) d.etapas.forEach((e) => assert.ok(e.titulo, `${d.id}/${e.etapa}: título`));
    for (const e of d.etapas) assert.ok(e.objetivo && e.conteudos.length >= 2 && e.exercicio && e.criterio, `${d.id}/${e.etapa}`);
    assert.ok(d.etapas.some((e) => e.brasil), `${d.id}: integração com o Brasil`);
    d.prereq.forEach((p) => assert.ok(noPorId[p], `${d.id}: pré-requisito ${p}`));
    assert.ok(d.bibliografia.length >= 10, `${d.id}: bibliografia`);
    assert.ok(d.bibliografia.some((b) => b.brasil) && d.bibliografia.some((b) => !b.brasil), `${d.id}: obras mundiais e brasileiras`);
    for (const b of d.bibliografia) {
      assert.ok(b.autor && b.titulo && b.ano && TIPOS_REFERENCIA[b.tipo] && esperadas.includes(b.etapa), `${d.id}: ${b.titulo}`);
      if (b.livro) assert.ok(livroPorId[b.livro], `${d.id}: livro ${b.livro}`);
      if (b.url) assert.ok(b.url.startsWith('http'), `${d.id}: url`);
    }
    // só se declara o percurso completo quando todas as etapas têm aulas publicadas
    const completa = d.etapas.every((e) => (d.aulas?.[e.etapa] || []).some((a) => AULAS_COMPLETAS.some((x) => x.id === a)));
    assert.equal(d.aulasPublicadas, completa, `${d.id}: aulasPublicadas deve refletir as aulas reais`);
  }
  // todo ramo sem percurso próprio está listado como pendente: nada é apresentado como pronto sem estar
  const semPercurso = NOS.filter((n) => !n.percurso).map((n) => n.id);
  for (const id of semPercurso) assert.ok(DISCIPLINAS.some((d) => d.no === id) || DISCIPLINAS_PENDENTES.includes(id), `ramo ${id} sem situação declarada`);
  DISCIPLINAS_PENDENTES.forEach((id) => assert.ok(noPorId[id], `pendente ${id}`));
  assert.equal(LIVROS.length, 607, 'a coleção complementar não altera o acervo obrigatório');
});

test('integração: questões de prova indicam a aula a revisar', () => {
  const provas = AVALIACOES.filter((a) => a.tipo === 'prova');
  assert.ok(provas.length >= 10);
  const ids = new Set(todasAulas.map((a) => a.id));
  for (const p of provas) {
    const objetivas = p.itens.filter((i) => i.aula);
    assert.ok(objetivas.length, `${p.id}: questões com aula de origem`);
    const cobertos = [p.modulo, ...(INTEGRADORAS[p.modulo] || [])];
    objetivas.forEach((i) => assert.ok(ids.has(i.aula) && cobertos.includes(todasAulas.find((a) => a.id === i.aula).modulo), `${p.id}: aula ${i.aula} fora dos módulos cobertos`));
  }
});
test('integração: nota aparece em todos os conteúdos vinculados; conexões usam os dados reais', () => {
  const estado = { notas: [{ id: 'n1', titulo: 'Substância', vinculo: { tipo: 'aula', id: 'm7-4' }, vinculos: [{ tipo: 'livro', id: 'aristoteles-metafisica' }, { tipo: 'conceito', id: 'substancia' }] }] };
  assert.equal(notasDe(estado, 'aula', 'm7-4').length, 1);
  assert.equal(notasDe(estado, 'livro', 'aristoteles-metafisica').length, 1);
  assert.equal(notasDe(estado, 'conceito', 'substancia').length, 1);
  assert.equal(notasDe(estado, 'livro', 'outro').length, 0);
  const aula = conexoesAula(estado, 'm7-4');
  assert.ok(aula.includes('#conceito-substancia') && aula.includes('#nota-n1') && aula.includes('#area-'), 'aula liga conceito, nota e área');
  assert.ok(conexoesLivro(estado, 'aristoteles-metafisica').includes('#aula-'), 'livro liga às aulas que o estudam');
});
test('laboratório de símbolos: cada sentido com tipo de fonte; ligações reais; hipóteses declaradas', () => {
  assert.equal(new Set(SIMBOLOS.map((s) => s.id)).size, SIMBOLOS.length);
  for (const s of SIMBOLOS) {
    assert.ok(TRADICOES[s.tradicao] && s.contexto && s.periodo, `${s.id}: contexto`);
    assert.ok(s.significados.length >= 2, `${s.id}: ao menos dois sentidos`);
    for (const g of s.significados) {
      assert.ok(TIPOS_SENTIDO[g.tipo] && g.texto, `${s.id}: tipo`);
      // só a hipótese pode ficar sem fonte; doutrina, Escritura e história precisam citá-la
      if (g.tipo !== 'hipotese') assert.ok(g.fonte && g.fonte !== '—', `${s.id}: "${g.texto}" sem fonte`);
    }
    s.livros.forEach((l) => assert.ok(livroPorId[l], `${s.id}: livro ${l}`));
    s.aulas.forEach((a) => assert.ok(todasAulas.some((x) => x.id === a), `${s.id}: aula ${a}`));
  }
  assert.ok(SIMBOLOS.some((s) => s.tradicao === 'brasileira'), 'símbolos nacionais do Brasil');
  assert.ok(noPorId.simbologia && noPorId.simbologia.grupo === 'simbolos' && noPorId.simbologia.pai === 'filosofia', 'ramo próprio no mapa');
  assert.ok(SANTOS_DAS_ABAS.simbolos?.length && SANTOS_DAS_AREAS.simbologia, 'santo do laboratório e da área');
});

test('avaliação conjunta: questões por área, nota da área mais fraca e bloqueio antes da fase 2', () => {
  const c = avaliacaoPorId['conjunta-roma'];
  assert.ok(c.requerFase2);
  const areas = new Set(c.itens.filter((i) => i.area).map((i) => i.area));
  assert.ok(areas.size >= 6, 'várias disciplinas');
  areas.forEach((a) => assert.ok(AREAS_CONJUNTAS[a], `área ${a} sem destino de revisão`));
  assert.ok(c.itens.some((i) => i.tipo === 'disc'), 'questão final de síntese');
  // acertar tudo menos uma área inteira não aprova: uma área não compensa outra
  const detalhes = c.itens.map((i) => (i.tipo === 'disc' ? null : i.area !== 'economia'));
  const r = C.resultadoPorArea(c.itens, detalhes);
  assert.equal(r.areas.economia.pct, 0);
  assert.equal(r.pct, 0);
  assert.ok(C.corrigir(c.itens, c.itens.map((i) => (i.tipo === 'mc' ? (i.area === 'economia' ? (i.correta + 1) % i.opcoes.length : i.correta) : null))).pct >= 80, 'a nota global sozinha aprovaria');
  assert.equal(C.resultadoPorArea([{ tipo: 'mc' }], [true]).pct, null, 'avaliação sem áreas não muda');
});

test('grade escolar: uma matéria na fase teológica; várias em paralelo depois, respeitando pré-requisitos', () => {
  const vazio = C.estadoInicial(T0);
  const g1 = linhasGrade(vazio);
  assert.equal(g1.length, 1);
  assert.equal(g1[0].disciplina, 'Teologia Católica');
  assert.equal(g1[0].minutos, vazio.plano.horasSemana * 60);
  const fase2 = { ...vazio, degraus: { 0: { concluido: true }, 1: { concluido: true }, 2: { concluido: true } } };
  const g2 = linhasGrade(fase2);
  assert.ok(g2.length >= 5 && g2[0].disciplina.startsWith('Filosofia'));
  // sem lógica concluída, as disciplinas que a exigem aguardam e não recebem horas
  for (const l of g2.slice(1)) assert.ok(l.bloqueio.length ? l.minutos === 0 : true, l.disciplina);
  const comLogica = { ...fase2, degraus: { ...fase2.degraus, 3: { concluido: true }, 4: { concluido: true }, 5: { concluido: true } } };
  const g3 = linhasGrade(comLogica);
  assert.ok(g3.filter((l) => l.minutos > 0).length >= 3, 'várias matérias com horas na mesma semana');
  assert.ok(Math.abs(g3.reduce((s, l) => s + l.minutos, 0) - comLogica.plano.horasSemana * 60) <= g3.length, 'horas somam a carga semanal');
});

test('identidade: cruz gótica vetorial ao lado do nome', () => {
  const svg = cruz(34);
  assert.ok(svg.startsWith('<svg') && svg.includes('viewBox="0 0 40 60"') && svg.includes('aria-hidden="true"'));
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.ok(/<span id="emblema"[^>]*><\/span><span>Academia da Verdade/.test(html), 'emblema imediatamente antes do nome');
  assert.ok(html.includes('rel="icon"'), 'favicon com a cruz');
});

test('História I e II: aulas completas das etapas 1 a 5, com provas, bloqueio da fase 2 e ligação ao percurso', () => {
  const h = DISCIPLINAS.find((d) => d.id === 'historia');
  const ids = Object.values(h.aulas).flat();
  // as etapas com aulas são as primeiras do percurso, em ordem, sem pular nenhuma
  assert.deepEqual(Object.keys(h.aulas), Object.keys(ETAPAS), 'as onze etapas');
  const modulos = [...new Set(ids.map((id) => todasAulas.find((x) => x.id === id)?.modulo))];
  assert.deepEqual(modulos.sort(), ['h1', 'h2', 'h3', 'h4', 'h5']);
  assert.ok(h.aulasPublicadas && noPorId.historia.percurso, 'História declarada completa no percurso e na árvore');
  // a avaliação integradora cobre todos os módulos de História
  const integ = avaliacaoPorId['prova-h5'];
  assert.deepEqual([...new Set(integ.itens.filter((i) => i.aula).map((i) => todasAulas.find((a) => a.id === i.aula).modulo))].sort(), ['h1', 'h2', 'h3', 'h4', 'h5']);
  assert.ok(moduloPorId.h4.prereq.includes('h3'), 'H4 depois de H3');
  assert.ok(moduloPorId.h3.prereq.includes('h2'), 'H3 depois de H2');
  for (const m of modulos) assert.ok(avaliacaoPorId[`prova-${m}`]?.itens.filter((i) => i.aula).length >= 8, `prova-${m}`);
  assert.ok(moduloPorId.h2.prereq.includes('h1'), 'H2 depois de H1');
  const campos = ['aprendera', 'prereq', 'explicacao', 'vocabulario', 'exemplos', 'contexto', 'argumento', 'objecoes', 'aplicacao', 'fonte', 'perguntas', 'exercicios', 'resumo', 'referencias', 'criterios', 'revisao'];
  for (const id of ids) {
    const a = AULAS_COMPLETAS.find((x) => x.id === id);
    assert.ok(a, `aula ${id} publicada`);
    assert.equal(todasAulas.find((x) => x.id === id).degrau, null, `${id}: fora da escada`);
    if (a.tipo === 'avaliacao') continue;
    for (const c of campos) assert.ok(a[c] && (typeof a[c] !== 'object' || Object.keys(a[c]).length), `${id}: seção ${c}`);
    assert.ok(a.exercicios.filter((e) => e.tipo === 'mc').length >= 5 && a.exercicios.some((e) => e.tipo === 'disc'), `${id}: exercícios`);
    assert.ok(a.contexto.includes('Brasil') || a.explicacao.includes('Brasil'), `${id}: contexto brasileiro`);
    assert.ok(a.referencias.length >= 3, `${id}: referências`);
    // concluir exige a fase teológica
    assert.ok(C.aulaConcluivel(a, C.estadoInicial(T0), null, null, C.INICIO_MULTIDISCIPLINAR).faltas.includes(C.MSG_FASE));
  }
  assert.deepEqual([...noPorId.historia.modulos].sort(), modulos, 'a árvore conta o progresso das aulas de História');
});

test('Geografia I: aulas completas das etapas 1 a 3, com prova, bloqueio da fase 2 e ligação ao percurso', () => {
  const g = DISCIPLINAS.find((d) => d.id === 'geografia');
  const etapasG1 = Object.keys(ETAPAS).slice(0, 3);
  assert.deepEqual(Object.keys(g.aulas).slice(0, 3), etapasG1, 'etapas 1 a 3');
  const campos = ['aprendera', 'prereq', 'explicacao', 'vocabulario', 'exemplos', 'contexto', 'argumento', 'objecoes', 'aplicacao', 'fonte', 'perguntas', 'exercicios', 'resumo', 'referencias', 'criterios', 'revisao', 'avancado'];
  for (const id of etapasG1.flatMap((e) => g.aulas[e])) {
    const a = AULAS_COMPLETAS.find((x) => x.id === id);
    assert.ok(a, `aula ${id} publicada`);
    assert.equal(todasAulas.find((x) => x.id === id).modulo, 'g1');
    if (a.tipo === 'avaliacao') continue;
    for (const c of campos) assert.ok(a[c], `${id}: seção ${c}`);
    assert.ok(a.exercicios.filter((e) => e.tipo === 'mc').length >= 5 && a.exercicios.some((e) => e.tipo === 'disc'), `${id}: exercícios`);
    assert.ok(a.contexto.includes('Brasil'), `${id}: contexto brasileiro`);
    assert.ok(C.aulaConcluivel(a, C.estadoInicial(T0), null, null, C.INICIO_MULTIDISCIPLINAR).faltas.includes(C.MSG_FASE));
  }
  assert.ok(avaliacaoPorId['prova-g1']?.itens.filter((i) => i.aula).length >= 8, 'prova do módulo');
  assert.ok(noPorId.geografia.modulos.includes('g1') && !g.aulasPublicadas, 'mapa conta o progresso; percurso ainda incompleto');
});

test('disciplinas com aulas: cada aula completa, no módulo certo, com prova e bloqueio da fase 2', () => {
  const campos = ['aprendera', 'prereq', 'explicacao', 'vocabulario', 'exemplos', 'contexto', 'argumento', 'objecoes', 'aplicacao', 'fonte', 'perguntas', 'exercicios', 'resumo', 'referencias', 'criterios', 'revisao', 'avancado'];
  for (const d of DISCIPLINAS.filter((x) => x.aulas)) {
    // as etapas com aulas são as primeiras do percurso, em ordem, sem pular nenhuma
    const ordem = d.etapas.map((e) => e.etapa);
    assert.deepEqual(Object.keys(d.aulas), ordem.slice(0, Object.keys(d.aulas).length), `${d.id}: etapas em ordem`);
    const modulos = new Set();
    for (const id of Object.values(d.aulas).flat()) {
      const a = AULAS_COMPLETAS.find((x) => x.id === id);
      const meta = todasAulas.find((x) => x.id === id);
      assert.ok(a && meta, `${d.id}: aula ${id} publicada e no currículo`);
      assert.equal(moduloPorId[meta.modulo].disciplina, d.id, `${id}: módulo da disciplina`);
      modulos.add(meta.modulo);
      if (a.tipo === 'avaliacao') continue;
      for (const c of campos) assert.ok(a[c], `${id}: seção ${c}`);
      assert.ok(a.exercicios.filter((e) => e.tipo === 'mc').length >= 5 && a.exercicios.some((e) => e.tipo === 'disc'), `${id}: exercícios`);
      assert.ok(a.contexto.includes('Brasil') || a.explicacao.includes('Brasil'), `${id}: contexto brasileiro`);
      assert.ok(a.referencias.length >= 3, `${id}: referências`);
      assert.ok(C.aulaConcluivel(a, C.estadoInicial(T0), null, null, C.INICIO_MULTIDISCIPLINAR).faltas.includes(C.MSG_FASE), `${id}: bloqueio da fase 2`);
    }
    for (const m of modulos) assert.ok(avaliacaoPorId[`prova-${m}`]?.itens.filter((i) => i.aula).length >= 8, `prova-${m}`);
    assert.deepEqual([...noPorId[d.no].modulos].sort(), [...modulos].sort(), `${d.id}: a árvore conta todos os módulos`);
  }
});
