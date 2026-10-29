// Escada da formação (#escada): degraus ascendentes de degraus com pré-requisitos, leituras e competências.
import { DEGRAUS, MODULOS, moduloPorId, todasAulas, sequenciaDegrau } from '../data/curriculo.js';
import { livroPorId } from '../data/livros.js';
import { aulaPorId } from '../data/aulas/index.js';
import { progressoDegrau, degrauConcluivel, livroConcluido, aulaConcluida, notaMinima } from '../core.js';
import { esc, barra, link, fmtData, toast } from '../ui.js';
import { abasMapa } from './arvore.js';

const disponiveis = new Set(Object.keys(aulaPorId));
let abertos = null; // degraus expandidos antes de um re-render, para não fechá-los
const guardarAbertos = (root) => { abertos = new Set([...root.querySelectorAll('.degrau details[open]')].map((d) => Number(d.parentElement.id.split('-')[1]))); };

const listaLivros = (ids, estado) => ids.map((id) => {
  const l = livroPorId[id];
  return `<li class="${livroConcluido(estado, id) ? 'feito' : ''}">${link(`livro-${id}`, esc(l.titulo))} <span class="meta">— ${esc(l.autor)}</span></li>`;
}).join('');

const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));
const listaSequencia = (d, estado) => sequenciaDegrau(d).map((it) => (it.tipo === 'livro'
  ? listaLivros([it.id], estado)
  : `<li class="${aulaConcluida(estado, it.id) ? 'feito' : ''}"><span class="chip">Aula</span> ${link(`aula-${it.id}`, `${it.id} — ${esc(tituloAula[it.id])}`)}</li>`)).join('');

export function escada({ estado }) {
  const atual = DEGRAUS.find((d) => !estado.degraus[d.n]?.concluido)?.n ?? DEGRAUS[DEGRAUS.length - 1].n;
  return `<header class="cab"><h1>Escada da formação</h1>
    <p class="sub">A escada vai da teologia católica elementar à síntese filosófica. Você pode consultar todos os degraus e leituras desde já; apenas a <em>conclusão</em> de um degrau depende dos pré-requisitos.</p>
    <p class="meta">Uma só trilha, completa: cada degrau exige todas as leituras, aulas, aprofundamentos e competências, com nota mínima de ${notaMinima()}%.</p></header>
  ${abasMapa('escada')}
  <ol class="escada" reversed>${DEGRAUS.slice().reverse().map((d) => {
    const pct = progressoDegrau(d, MODULOS, disponiveis, estado);
    const conc = degrauConcluivel(d, MODULOS, disponiveis, estado, livroPorId);
    const st = estado.degraus[d.n] || {};
    const bloqueado = d.prereq.some((p) => !estado.degraus[p]?.concluido);
    const classe = st.concluido ? 'concluido' : d.n === atual ? 'atual' : bloqueado ? 'futuro' : '';
    return `<li class="degrau ${classe}" style="--n:${d.n}" id="degrau-${d.n}">
      <details ${(abertos ? abertos.has(d.n) : d.n === atual) ? 'open' : ''}>
        <summary><span class="dn">${d.n}</span><span class="dt"><strong>${esc(d.nome)}</strong><span class="meta">${st.concluido ? `Concluído em ${fmtData(st.data)}` : `${pct}%`}${bloqueado && !st.concluido ? ' · requer degrau ' + d.prereq.join(', ') : ''}</span></span>${barra(pct, `Progresso do degrau ${d.n}`)}</summary>
        <div class="degrau-corpo">
          <p><strong>Objetivo:</strong> ${esc(d.objetivo)}</p>
          ${d.nota ? `<p class="aviso">${esc(d.nota)}</p>` : ''}
          <p><strong>Módulos:</strong> ${d.modulos.map((m) => link(`mod-${m}`, `${moduloPorId[m].n}. ${esc(moduloPorId[m].titulo)}`)).join(' · ')}</p>
          <p><strong>Pré-requisitos:</strong> ${d.prereq.length ? d.prereq.map((p) => `<a href="#escada" data-degrau="${p}">degrau ${p}</a>`).join(', ') : 'nenhum'}</p>
          <div class="grade-2">
            <div><h3>Sequência de estudo</h3><p class="meta">Primeiro os livros; uma aula vem antes só quando introduz a obra seguinte.</p><ol class="leituras">${listaSequencia(d, estado)}</ol>
              ${d.retomar ? `<h3>Retomar</h3><ul class="leituras">${listaLivros(d.retomar, estado)}</ul>` : ''}
</div>
            <div><h3>Competências a demonstrar</h3>
              ${d.competencias.map((c, i) => `<label class="opcao"><input type="checkbox" data-comp="${d.n}" data-i="${i}" ${st.competencias?.[i] ? 'checked' : ''} ${st.concluido ? 'disabled' : ''}> <span>${esc(c)}</span></label>`).join('')}
              ${d.competenciasAvancadas?.length ? `<h3>Competências de aprofundamento</h3>
                ${d.competenciasAvancadas.map((c, i) => `<label class="opcao"><input type="checkbox" data-comp="${d.n}" data-av="1" data-i="${i}" ${st.competenciasAv?.[i] ? 'checked' : ''} ${st.concluido ? 'disabled' : ''}> <span>${esc(c)}</span></label>`).join('')}` : ''}
              <p class="dica">Marque apenas o que você consegue demonstrar por escrito, sem consultar.</p>
              ${st.concluido ? '' : conc.ok
                ? `<button class="btn primario" data-concluir="${d.n}">Concluir degrau ${d.n}</button>`
                : `<details class="faltas-d"><summary>O que falta para concluir</summary><ul>${conc.faltas.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></details>`}
            </div>
          </div>
        </div>
      </details></li>`;
  }).join('')}</ol>`;
}

escada.ligar = (root, ctx) => {
  abertos = null;
  root.addEventListener('change', (ev) => {
    const cb = ev.target.closest('[data-comp]');
    if (!cb) return;
    guardarAbertos(root);
    const n = cb.dataset.comp, i = Number(cb.dataset.i);
    const campo = cb.dataset.av ? 'competenciasAv' : 'competencias';
    ctx.set((e) => {
      const d = e.degraus[n] || {};
      const lista = [...(d[campo] || [])]; lista[i] = cb.checked;
      return { ...e, degraus: { ...e.degraus, [n]: { ...d, [campo]: lista } } };
    }, { manterRolagem: true });
  });
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-concluir]');
    if (b) {
      const n = b.dataset.concluir;
      guardarAbertos(root);
      ctx.set((e) => ({ ...e, degraus: { ...e.degraus, [n]: { ...e.degraus[n], concluido: true, data: Date.now() } } }), { manterRolagem: true });
      toast(`Degrau ${n} concluído.`);
    }
    const ir = ev.target.closest('[data-degrau]');
    if (ir) { ev.preventDefault(); const alvo = root.querySelector(`#degrau-${ir.dataset.degrau}`); alvo?.querySelector('details')?.setAttribute('open', ''); alvo?.scrollIntoView({ behavior: 'smooth' }); }
  });
};
