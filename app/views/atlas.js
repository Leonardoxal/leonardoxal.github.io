// Atlas de conceitos, linha do tempo e mapa de relações entre autores, conceitos e obras.
import { CONCEITOS, conceitoPorId } from '../data/conceitos.js';
import { AUTORES, autorPorId } from '../data/autores.js';
import { LIVROS, livroPorId } from '../data/livros.js';
import { todasAulas } from '../data/curriculo.js';
import { normalizar } from '../core.js';
import { esc, link, botaoFav } from '../ui.js';
import { conexoesConceito } from './conexoes.js';

const aulaTitulo = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));
let busca = '';

export function atlas({ estado }) {
  const q = normalizar(busca);
  const lista = CONCEITOS.filter((c) => !q || normalizar(`${c.termo} ${c.simples} ${c.tecnica}`).includes(q)).sort((a, b) => a.termo.localeCompare(b.termo, 'pt'));
  return `<header class="cab"><h1>Atlas de conceitos</h1><p class="sub">Glossário interligado: cada termo tem definição simples, definição técnica, exemplo, contexto, autores, aulas e livros.</p>
    <div class="acoes-aula">${link('autores', 'Linha do tempo e mapa de relações', 'btn')}</div></header>
  <form class="filtros" id="f-atlas" role="search"><label class="campo largo"><span>Buscar conceito</span><input type="search" id="a-q" value="${esc(busca)}"></label></form>
  <ul class="grade-conceitos">${lista.map((c) => `<li><a href="#conceito-${c.id}"><h3>${esc(c.termo)} ${estado.favoritos.includes(`conceito:${c.id}`) ? '★' : ''}</h3><p>${esc(c.simples)}</p></a></li>`).join('')}</ul>`;
}
atlas.ligar = (root, ctx) => {
  let t;
  root.querySelector('#f-atlas').addEventListener('submit', (e) => e.preventDefault());
  root.querySelector('#a-q').addEventListener('input', (ev) => { clearTimeout(t); t = setTimeout(() => { busca = ev.target.value; ctx.render({ manterRolagem: true, foco: 'a-q' }); }, 200); });
};

export function conceito({ estado }, id) {
  const c = conceitoPorId[id];
  if (!c) return '<p>Conceito não encontrado.</p>';
  return `<nav class="migalha">${link('atlas', 'Atlas')} / ${esc(c.termo)}</nav>
  <header class="cab"><h1>${esc(c.termo)} ${botaoFav(estado, 'conceito', id)}</h1></header>
  <dl class="ficha conceito">
    <dt>Definição simples</dt><dd>${esc(c.simples)}</dd>
    <dt>Definição técnica</dt><dd>${esc(c.tecnica)}</dd>
    <dt>Exemplo</dt><dd>${esc(c.exemplo)}</dd>
    <dt>Contexto</dt><dd>${esc(c.contexto)}</dd>
    <dt>Autores</dt><dd>${c.autores.map((a) => `<a href="#autores" data-autor="${a}">${esc(autorPorId[a].nome)}</a>`).join(', ') || '—'}</dd>
    <dt>Aulas</dt><dd>${c.aulas.map((a) => link(`aula-${a}`, `${a}: ${esc(aulaTitulo[a])}`)).join('<br>') || '—'}</dd>
    <dt>Livros</dt><dd>${c.livros.map((l) => link(`livro-${l}`, esc(livroPorId[l].titulo))).join('<br>') || '—'}</dd>
    <dt>Conceitos relacionados</dt><dd>${c.relacionados.map((r) => link(`conceito-${r}`, esc(conceitoPorId[r].termo))).join(', ') || '—'}</dd>
  </dl>
  ${conexoesConceito(estado, c)}
  <div class="acoes-aula"><button class="btn" data-acao="nota-conceito">Nova nota sobre este conceito</button></div>`;
}
conceito.ligar = (root, ctx, id) => {
  root.querySelector('[data-acao="nota-conceito"]').addEventListener('click', () => ctx.novaNota({ tipo: 'conceito', id }, `Conceito — ${conceitoPorId[id].termo}`));
  root.querySelectorAll('[data-autor]').forEach((a) => a.addEventListener('click', () => { autorSel = a.dataset.autor; }));
};

let autorSel = 'tomas';
/** Usado pelos links de autor de outras páginas (conexões), antes de abrir #autores. */
export const selecionarAutor = (id) => { autorSel = id; };

/** Mapa radial: autor no centro, influências à esquerda, influenciados à direita, conceitos embaixo. */
function mapaRelacoes(id) {
  const a = autorPorId[id];
  const recebeu = a.influencias.map((x) => autorPorId[x]);
  const deu = AUTORES.filter((x) => x.influencias.includes(id));
  const conceitos = CONCEITOS.filter((c) => c.autores.includes(id));
  const W = 760, H = 460, cx = W / 2, cy = 170;
  const coluna = (itens, x, y0, gap) => itens.map((it, i) => ({ it, x, y: y0 + i * gap - ((itens.length - 1) * gap) / 2 }));
  const esq = coluna(recebeu, 110, cy, 34), dir = coluna(deu, W - 110, cy, 34);
  const base = conceitos.map((c, i) => ({ c, x: 60 + (i + 0.5) * ((W - 120) / Math.max(1, conceitos.length)), y: 400 }));
  const no = (x, y, txt, cls, dataId) => `<g class="no ${cls}" ${dataId ? `data-ir="${dataId}" tabindex="0" role="button"` : ''}><rect x="${x - 78}" y="${y - 14}" width="156" height="28" rx="4"></rect><text x="${x}" y="${y + 5}" text-anchor="middle">${esc(txt.length > 24 ? txt.slice(0, 23) + '…' : txt)}</text></g>`;
  const linha = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;
  return `<div class="svg-wrap"><svg viewBox="0 0 ${W} ${H}" class="relacoes" role="img" aria-label="Relações de ${esc(a.nome)}">
    <text x="110" y="24" text-anchor="middle" class="rot">Recebeu influência de</text>
    <text x="${W - 110}" y="24" text-anchor="middle" class="rot">Influenciou</text>
    <text x="${cx}" y="360" text-anchor="middle" class="rot">Conceitos estudados no curso</text>
    ${esq.map((p) => linha(p.x + 78, p.y, cx - 90, cy)).join('')}${dir.map((p) => linha(cx + 90, cy, p.x - 78, p.y)).join('')}${base.map((p) => linha(cx, cy + 16, p.x, p.y - 14)).join('')}
    ${esq.map((p) => no(p.x, p.y, p.it.nome, 'autor', `a:${p.it.id}`)).join('')}${dir.map((p) => no(p.x, p.y, p.it.nome, 'autor', `a:${p.it.id}`)).join('')}
    ${base.map((p) => no(p.x, p.y, p.c.termo, 'conceito', `c:${p.c.id}`)).join('')}
    <g class="no centro"><rect x="${cx - 90}" y="${cy - 18}" width="180" height="36" rx="4"></rect><text x="${cx}" y="${cy + 6}" text-anchor="middle">${esc(a.nome)}</text></g>
  </svg></div>`;
}

export function autores() {
  const a = autorPorId[autorSel];
  const obras = LIVROS.filter((l) => normalizar(l.autor).includes(normalizar(a.nome.replace(/^(Santo|São) /, ''))));
  const porPeriodo = AUTORES.slice().sort((x, y) => x.ano - y.ano);
  return `<nav class="migalha">${link('atlas', 'Atlas')} / Autores</nav>
  <header class="cab"><h1>Linha do tempo e relações</h1><p class="sub">As relações de influência indicadas são as amplamente documentadas na historiografia; não esgotam as influências reais de cada autor.</p></header>
  <section><h2>Mapa de relações</h2>
    <label class="campo"><span>Autor no centro</span><select id="sel-autor">${porPeriodo.map((x) => `<option value="${x.id}" ${x.id === autorSel ? 'selected' : ''}>${esc(x.nome)}</option>`).join('')}</select></label>
    ${mapaRelacoes(autorSel)}
    <p><strong>${esc(a.nome)}</strong> (${esc(a.datas)}) — ${esc(a.resumo)}</p>
    ${obras.length ? `<p><strong>Obras na biblioteca:</strong> ${obras.map((l) => link(`livro-${l.id}`, esc(l.titulo))).join(' · ')}</p>` : ''}
    <button class="btn" data-acao="nota-autor">Nova nota sobre ${esc(a.nome)}</button></section>
  <section><h2>Linha do tempo</h2><ol class="linha-tempo">${porPeriodo.map((x) => `<li class="${x.id === autorSel ? 'sel' : ''}"><button class="lt-item" data-autor="${x.id}"><span class="lt-data">${esc(x.datas)}</span><strong>${esc(x.nome)}</strong><span class="meta">${esc(x.periodo)}</span></button></li>`).join('')}</ol></section>`;
}
autores.ligar = (root, ctx) => {
  root.querySelector('#sel-autor').addEventListener('change', (ev) => { autorSel = ev.target.value; ctx.render({ manterRolagem: true }); });
  root.querySelector('[data-acao="nota-autor"]').addEventListener('click', () => ctx.novaNota({ tipo: 'autor', id: autorSel }, `Autor — ${autorPorId[autorSel].nome}`));
  const ir = (alvo) => {
    const [t, v] = alvo.split(':');
    if (t === 'a') { autorSel = v; ctx.render(); root.ownerDocument.querySelector('#conteudo')?.scrollIntoView(); } else ctx.nav(`conceito-${v}`);
  };
  root.addEventListener('click', (ev) => {
    const n = ev.target.closest('[data-ir]'); if (n) ir(n.dataset.ir);
    const b = ev.target.closest('[data-autor]'); if (b) { autorSel = b.dataset.autor; ctx.render({ manterRolagem: true }); }
  });
  root.addEventListener('keydown', (ev) => { const n = ev.target.closest('[data-ir]'); if (n && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); ir(n.dataset.ir); } });
};
