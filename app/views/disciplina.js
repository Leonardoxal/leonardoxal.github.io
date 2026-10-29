// Página de percurso de uma disciplina (#disciplina-historia …): método, etapas, Brasil, exercícios,
// critérios de conclusão e bibliografia progressiva, com o santo de referência da área.
import { disciplinaPorId, TIPOS_REFERENCIA, rotuloEtapa } from '../data/disciplinas.js';
import { noPorId } from '../data/arvore.js';
import { livroPorId } from '../data/livros.js';
import { SANTOS_DAS_AREAS } from '../data/santos.js';
import { santoHTML } from './santo.js';
import { esc, link } from '../ui.js';
import { faseTeologicaConcluida, MSG_FASE, aulaConcluida } from '../core.js';
import { todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';

const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));

function referencia(b) {
  const titulo = b.livro && livroPorId[b.livro] ? link(`livro-${b.livro}`, `<em>${esc(b.titulo)}</em>`) : b.url
    ? `<a href="${esc(b.url)}" target="_blank" rel="noopener noreferrer" class="externo"><em>${esc(b.titulo)}</em> ↗</a>` : `<em>${esc(b.titulo)}</em>`;
  return `<li>${esc(b.autor)}. ${titulo}${b.ano !== '—' ? ` (${esc(b.ano)})` : ''}. <span class="chip">${esc(TIPOS_REFERENCIA[b.tipo])}</span>${b.brasil ? ' <span class="chip brasil">Brasil</span>' : ''}${b.livro ? ' <span class="chip ok">no acervo</span>' : ''}</li>`;
}

export function disciplina(ctx, id) {
  const d = disciplinaPorId[id];
  if (!d) return `<p>Disciplina não encontrada. ${link('mapa', 'Voltar ao mapa')}</p>`;
  const santo = SANTOS_DAS_AREAS[d.no];
  const feitas = ctx.estado.disciplinas[id] || {};
  const publicadas = Object.values(d.aulas || {}).flat().filter((a) => aulaPorId[a]);
  const liberada = faseTeologicaConcluida(ctx.estado);
  const ordemEtapa = d.etapas.map((e) => e.etapa);
  const bib = d.bibliografia.slice().sort((a, b) => ordemEtapa.indexOf(a.etapa) - ordemEtapa.indexOf(b.etapa));
  return `<nav class="migalha">${link('mapa', 'Mapa')} / ${link(`area-${d.no}`, esc(noPorId[d.no].nome))} / Percurso</nav>
  <header class="cab"><span class="num">${esc(noPorId[noPorId[d.no].pai].nome)}</span><h1>${esc(d.nome)}</h1>
    <p class="sub">${esc(noPorId[d.no].desc)}</p></header>
  ${santo ? `<div class="santos-aba">${santoHTML(santo)}</div>` : ''}
  ${publicadas.length ? `<p class="meta"><strong>${publicadas.length} aula(s) publicada(s)</strong> (${publicadas.map((a) => link(`aula-${a}`, a)).join(', ')}); as demais etapas seguem em preparação.</p>` : ''}
  ${d.aulasPublicadas ? '' : '<div class="aviso"><strong>Percurso definido; aulas em preparação.</strong> As etapas, os exercícios, os critérios e a bibliografia abaixo já orientam o estudo. As aulas completas e as avaliações objetivas desta disciplina ainda não foram publicadas e, por isso, ela ainda não conta no progresso.</div>'}
  <section><h2>Método próprio</h2><p>${esc(d.metodo)}</p>
    <p class="meta">Antes de começar: ${d.prereq.map((p) => link(`area-${p}`, esc(noPorId[p].nome))).join(', ')}.</p></section>
  <section><h2>Etapas do percurso</h2><ol class="etapas-disc">${d.etapas.map((e, i) => `<li><details ${i === 0 ? 'open' : ''}>
      <summary><span class="num">${i + 1}. ${esc(rotuloEtapa(e))}</span> ${esc(e.objetivo)}</summary>
      <div class="etapa-corpo">
        ${(d.aulas?.[e.etapa] || []).length ? `<h3>Aulas</h3><ul class="lista-curta">${d.aulas[e.etapa].map((a) => `<li class="${aulaConcluida(ctx.estado, a) ? 'feito' : ''}">${link(`aula-${a}`, `${a} — ${esc(tituloAula[a])}`)}${aulaConcluida(ctx.estado, a) ? ' <span class="chip ok">concluída</span>' : ''}</li>`).join('')}</ul>` : '<p class="meta">Aula desta etapa em preparação.</p>'}
        <h3>Conteúdos</h3><ul>${e.conteudos.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
        ${e.brasil ? `<p class="brasil-nota"><strong>Brasil:</strong> ${esc(e.brasil)}</p>` : ''}
        <h3>Exercício</h3><p>${esc(e.exercicio)}</p>
        <h3>Critério para avançar</h3><p>${esc(e.criterio)}</p>
        <label class="opcao"><input type="checkbox" data-etapa="${e.etapa}" ${feitas[e.etapa] ? 'checked' : ''} ${liberada ? '' : 'disabled'}> <span>Fiz o exercício e atendi ao critério${liberada ? '' : ` <span class="meta">(${esc(MSG_FASE)})</span>`}</span></label>
        ${bib.some((b) => b.etapa === e.etapa) ? `<h3>Leituras desta etapa</h3><ul class="refs">${bib.filter((b) => b.etapa === e.etapa).map(referencia).join('')}</ul>` : ''}
      </div></details></li>`).join('')}</ol></section>
  <section><h2>Bibliografia progressiva (${bib.length})</h2>
    <p class="meta">Coleção complementar, em ordem de etapa. Não substitui nem altera os 607 títulos obrigatórios; "no acervo" indica uma obra que já faz parte deles.</p>
    <ul class="refs">${bib.map(referencia).join('')}</ul></section>`;
}

disciplina.ligar = (root, ctx, id) => {
  root.addEventListener('change', (ev) => {
    const etapa = ev.target.dataset.etapa;
    // a marcação só vale na fase multidisciplinar; o input já vem desabilitado antes dela
    if (!etapa || !faseTeologicaConcluida(ctx.estado)) return;
    const marcado = ev.target.checked;
    ctx.set((e) => {
      const atual = { ...(e.disciplinas[id] || {}) };
      if (marcado) atual[etapa] = Date.now(); else delete atual[etapa];
      return { ...e, disciplinas: { ...e.disciplinas, [id]: atual } };
    }, { manterRolagem: true });
  });
};
