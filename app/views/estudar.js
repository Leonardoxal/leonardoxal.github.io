// Linha de estudo (#estudar): o que fazer agora e a seguir, na ordem da formação.
import { DEGRAUS, sequenciaDegrau } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { obraPorId, obrasDoDegrau } from '../data/mediateca.js';
import { MINUTOS_OBRA } from '../data/periodos.js';
import { EPOCAS, PARTES_SEMANA, aulasDaEpoca, trilhaParalela, epocaAtual, progressoEpoca, progressoParalela } from '../data/epocas.js';
import { faseTeologicaConcluida, faseIniciacaoConcluida, aulaConcluida, livroConcluido, revisoesPendentes, FASE_TEOLOGICA, FASE_INICIACAO } from '../core.js';
import { esc, link, fmtMin } from '../ui.js';
import { faseHTML, proximaAtividade } from './grade.js';
import { itemAula, obrasDaEpocaHTML } from './epocas.js';

const FILA = 6;
const FILA_PARALELA = 3;
const NOMES_PARTES = { epoca: 'Época atual', paralela: 'Trilha paralela', revisao: 'Revisão e caderno' };

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

/** Fase 3: a época atual, a trilha paralela ao lado e a faixa de todas as épocas. */
function epocasHTML(estado) {
  const e = epocaAtual(estado);
  const pendentes = (ids) => ids.filter((id) => !aulaConcluida(estado, id));
  const daEpoca = e ? pendentes(aulasDaEpoca(e.id)) : [];
  const daTrilha = pendentes(trilhaParalela());
  const pe = e && progressoEpoca(estado, e.id), pp = progressoParalela(estado);
  const total = estado.plano.horasSemana * 60;
  return `<div class="grade-2">
    <section><h2>${e ? `${link(`epoca-${e.id}`, esc(e.titulo))} <span class="meta">${esc(e.anos)} · ${pe.feitas} de ${pe.total} aulas</span>` : 'Épocas concluídas'}</h2>
      ${e ? `<p>${esc(e.apresentacao)}</p><ol class="leituras">${daEpoca.slice(0, FILA).map((id) => itemAula(estado, id, daEpoca[0])).join('')}</ol>
        ${link(`epoca-${e.id}`, `Ver a época inteira (${daEpoca.length} aulas pendentes)`, 'btn')}` : '<p class="meta">Todas as épocas foram estudadas. Resta a trilha paralela.</p>'}</section>
    <section><h2>${link('epocas', 'Trilha paralela')} <span class="meta">${pp.feitas} de ${pp.total} aulas</span></h2>
      <p class="meta">Aulas sem época (conceitos, método e conteúdo técnico), estudadas ao lado da época atual.</p>
      ${daTrilha.length ? `<ol class="leituras">${daTrilha.slice(0, FILA_PARALELA).map((id) => itemAula(estado, id, daTrilha[0])).join('')}</ol>` : '<p class="meta">Trilha paralela concluída.</p>'}</section>
  </div>
  ${e ? obrasDaEpocaHTML(estado, e) : ''}
  <section><h2>Todas as épocas</h2><ol class="lista-curta">${EPOCAS.map((x) => { const p = progressoEpoca(estado, x.id); return `<li>${link(`epoca-${x.id}`, esc(x.titulo))} <span class="meta">${p.feitas}/${p.total}${x.id === e?.id ? ' · atual' : ''}</span>${p.feitas === p.total ? ' <span class="chip ok">concluída</span>' : ''}</li>`; }).join('')}</ol></section>
  <section><h2>Como dividir as ${esc(String(estado.plano.horasSemana))} h da semana</h2><ul class="lista-curta">${Object.entries(PARTES_SEMANA).map(([k, f]) => `<li><strong>${NOMES_PARTES[k]}</strong>: ${fmtMin(Math.round(total * f))}</li>`).join('')}</ul></section>`;
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
    corpo = epocasHTML(estado);
  }
  return `<header class="cab"><h1>Linha de estudo</h1>${faseHTML(estado)}
    <p class="sub">A ordem do que estudar: primeiro a teologia, depois a iniciação intelectual e, por fim, as épocas, em que todas as matérias de um mesmo momento histórico são estudadas juntas, com a trilha paralela ao lado.</p>
    ${prox ? `<a class="btn primario grande" href="#${prox.href}">Agora — ${esc(prox.rotulo)}</a><p class="meta">${esc(prox.contexto)}</p>` : '<p>Nada pendente no momento.</p>'}</header>
  ${corpo}
  <section><h2>Revisão</h2><p>${pend ? link('revisar', `${pend} cartão(ões) para revisar hoje`) : 'Nenhuma revisão pendente.'} Revisar antes de começar a aula nova mantém o que já foi estudado.</p></section>
  <p class="meta">Para ver tudo: ${link('epocas', 'Épocas')} · ${link('periodos', 'Semestres')} · ${link('escada', 'Escada da formação')} · ${link('plano', 'Plano de estudos')}.</p>`;
}
