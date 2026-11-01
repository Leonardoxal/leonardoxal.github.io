// Linha de estudo (#estudar): o que fazer agora, esta semana e a seguir, na ordem da formação.
import { DEGRAUS, sequenciaDegrau } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { obraPorId, obrasDoDegrau } from '../data/mediateca.js';
import { avaliacaoPorId } from '../data/avaliacoes.js';
import { periodoAtual, situacaoMateria, SEMANAS_TOTAIS, SEMANA_INTERMEDIARIA, SEMANA_FINAL, SEMANA_PROJETO, MINUTOS_OBRA } from '../data/periodos.js';
import { faseTeologicaConcluida, faseIniciacaoConcluida, aulaConcluida, livroConcluido, revisoesPendentes, melhorNota, NOTA_MINIMA, FASE_TEOLOGICA, FASE_INICIACAO } from '../core.js';
import { esc, link, fmtMin } from '../ui.js';
import { faseHTML, proximaAtividade } from './grade.js';

// divisão do tempo semanal do aluno: aulas e provas, obras obrigatórias, revisão e caderno
const PARTES = [['Aulas e provas', 0.5], ['Obras obrigatórias', 0.35], ['Revisão e caderno', 0.15]];
const FILA = 6;
const MINUTOS_PROVA = 90;

const item = (tipo, id) => tipo === 'aula' ? { href: `aula-${id}`, rotulo: `Aula ${id}: ${aulaPorId[id].titulo}`, min: parseInt(aulaPorId[id].duracao, 10) || 0 }
  : tipo === 'livro' ? { href: `livro-${id}`, rotulo: `Leitura: ${livroPorId[id].titulo}`, min: 0 }
    : { href: `obra-${id}`, rotulo: `Obra: ${obraPorId[id].titulo}`, min: MINUTOS_OBRA[obraPorId[id].categoria] ?? MINUTOS_OBRA.padrao };

const lista = (itens) => itens.length
  ? `<ol class="leituras">${itens.map((it) => `<li>${link(it.href, esc(it.rotulo))}${it.min ? ` <span class="meta">~${fmtMin(it.min)}</span>` : ''}</li>`).join('')}</ol>`
  : '<p class="meta">Nada pendente.</p>';

/** Fases 1 e 2: o que falta no degrau atual, na ordem da sequência de estudo (aulas e livros), depois as obras. */
function filaDoDegrau(estado, numeros) {
  const d = DEGRAUS.filter((x) => numeros.includes(x.n)).find((x) => !estado.degraus[x.n]?.concluido);
  if (!d) return { d: null, itens: [] };
  const seq = sequenciaDegrau(d)
    .filter((it) => (it.tipo === 'livro' ? !livroConcluido(estado, it.id) : aulaPorId[it.id] && !aulaConcluida(estado, it.id)))
    .map((it) => item(it.tipo, it.id));
  const obras = obrasDoDegrau(d).filter((id) => !livroConcluido(estado, id)).map((id) => item('obra', id));
  return { d, itens: [...seq, ...obras] };
}

/** Semana do semestre em que o aluno está: a primeira com aula pendente (ou a das provas e do projeto depois delas). */
function semanaAtual(estado, p) {
  const pendentes = p.materias.flatMap((m) => m.aulas.filter((a) => !aulaConcluida(estado, a.id)).map((a) => a.semana));
  if (pendentes.length) return Math.min(...pendentes);
  const provasPendentes = p.materias.flatMap((m) => [...m.intermediaria, ...m.final]).some((id) => melhorNota(estado, id) < NOTA_MINIMA);
  return provasPendentes ? SEMANA_FINAL : SEMANA_PROJETO;
}

function semestreHTML(estado, p) {
  const semana = semanaAtual(estado, p);
  const evento = semana === SEMANA_INTERMEDIARIA ? 'avaliação intermediária' : semana === SEMANA_FINAL ? 'avaliação final' : semana === SEMANA_PROJETO ? 'projeto interdisciplinar' : '';
  const ativas = p.materias.filter((m) => situacaoMateria(estado, m) !== 'aprovada');
  const total = estado.plano.horasSemana * 60;
  const porMateria = ativas.map((m) => {
    const aulas = m.aulas.filter((a) => a.semana <= semana && !aulaConcluida(estado, a.id)).map((a) => item('aula', a.id));
    const provas = [...(semana >= SEMANA_INTERMEDIARIA ? m.intermediaria : []), ...(semana >= SEMANA_FINAL ? m.final : [])]
      .filter((id) => melhorNota(estado, id) < NOTA_MINIMA).map((id) => ({ href: `aval-${id}`, rotulo: `Prova: ${avaliacaoPorId[id].titulo}`, min: MINUTOS_PROVA }));
    const obras = m.obras.filter((id) => !livroConcluido(estado, id)).slice(0, 3).map((id) => item('obra', id));
    return `<section class="materia-semana"><h3>${link(m.href, esc(m.nome))} <span class="meta">${esc(situacaoMateria(estado, m))}</span></h3>
      <h4>Aulas e provas até a semana ${semana}</h4>${lista([...aulas, ...provas])}
      <h4>Próximas obras (${m.obras.filter((id) => livroConcluido(estado, id)).length}/${m.obras.length} feitas)</h4>${lista(obras)}</section>`;
  }).join('');
  return `<section><h2>${esc(p.titulo)} · semana ${semana} de ${SEMANAS_TOTAIS - 2}${evento ? ` · ${evento}` : ''}</h2>
    <p class="meta">A semana avança conforme as aulas são concluídas, não pelo relógio: nada se perde se você parar. As obras de cada matéria seguem em fila; as três primeiras aparecem aqui.</p>
    <div class="grade-2">${porMateria || '<p class="meta">Todas as matérias do semestre estão aprovadas.</p>'}</div></section>
    <section><h2>Como dividir as ${esc(String(estado.plano.horasSemana))} h da semana</h2><ul class="lista-curta">${PARTES.map(([nome, f]) => `<li><strong>${esc(nome)}</strong>: ${fmtMin(Math.round(total * f))}</li>`).join('')}</ul></section>`;
}

export function estudar({ estado }) {
  const prox = proximaAtividade(estado);
  const pend = revisoesPendentes(estado.revisoes).length;
  const fase1 = !faseTeologicaConcluida(estado), fase2 = !fase1 && !faseIniciacaoConcluida(estado);
  let corpo;
  if (fase1 || fase2) {
    const { d, itens } = filaDoDegrau(estado, fase1 ? FASE_TEOLOGICA : FASE_INICIACAO);
    corpo = `<section><h2>${d ? `Degrau ${d.n}: ${esc(d.nome)}` : 'Fase concluída'}</h2>
      <p class="meta">Siga a ordem: cada item libera o seguinte. Aparecem os ${FILA} primeiros de ${itens.length} pendentes; depois dos livros e aulas vêm as obras dos módulos, também obrigatórias.</p>${lista(itens.slice(0, FILA))}</section>`;
  } else {
    const p = periodoAtual(estado);
    corpo = p ? semestreHTML(estado, p) : '<p>Todos os semestres foram aprovados.</p>';
  }
  return `<header class="cab"><h1>Linha de estudo</h1>${faseHTML(estado)}
    <p class="sub">A ordem do que estudar: primeiro a teologia, depois a iniciação intelectual e, por fim, os semestres multidisciplinares. Cada semana combina aulas, uma fila de obras obrigatórias e revisão.</p>
    ${prox ? `<a class="btn primario grande" href="#${prox.href}">Agora — ${esc(prox.rotulo)}</a><p class="meta">${esc(prox.contexto)}</p>` : '<p>Nada pendente no momento.</p>'}</header>
  ${corpo}
  <section><h2>Revisão</h2><p>${pend ? link('revisar', `${pend} cartão(ões) para revisar hoje`) : 'Nenhuma revisão pendente.'} Revisar antes de começar a aula nova mantém o que já foi estudado.</p></section>
  <p class="meta">Para ver o calendário completo: ${link('periodos', 'Semestres')} · ${link('escada', 'Escada da formação')} · ${link('plano', 'Plano de estudos')}.</p>`;
}
