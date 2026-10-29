// Mapa do conhecimento: árvore interativa (SVG) com zoom, arraste, busca, filtros, percurso e relações tipadas.
// A escada dos degraus continua em views/mapa.js (rota #escada); esta vista mostra as áreas e suas ligações.
import { NOS, RELACOES, GRUPOS, TIPOS_RELACAO, TRILHA, noPorId } from '../data/arvore.js';
import { LIVROS, livroPorId } from '../data/livros.js';
import { ORDEM_AUTOR } from '../data/obras/index.js';
import { DEGRAUS, todasAulas, sequenciaDegrau, moduloPorId } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { CONCEITOS } from '../data/conceitos.js';
import { AUTORES } from '../data/autores.js';
import { livroConcluido, aulaConcluida, buscar } from '../core.js';
import { esc, barra, link } from '../ui.js';
import { rosacea } from '../ornamentos.js';
import { SANTOS_DAS_AREAS } from '../data/santos.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { santoHTML } from './santo.js';

/** Abas que ligam os dois sistemas complementares: a árvore (áreas) e a escada (progressão). */
export const abasMapa = (atual) => `<nav class="abas-mapa" aria-label="Modos do mapa">
  ${[['mapa', 'Árvore do conhecimento'], ['escada', 'Escada da formação']].map(([t, r]) => `<a href="#${t}" ${t === atual ? 'aria-current="page"' : ''}>${r}</a>`).join('')}</nav>`;

// ---------- Conteúdo ligado a cada nó (livros e aulas reais, para progresso e links) ----------
const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));
const filhos = Object.fromEntries(NOS.map((n) => [n.id, NOS.filter((f) => f.pai === n.id).map((f) => f.id)]));

const conteudo = Object.fromEntries(NOS.map((n) => {
  const livros = new Set(n.livros);
  LIVROS.forEach((l) => { if (n.areas.includes(l.area)) livros.add(l.id); });
  n.autores.forEach((a) => ORDEM_AUTOR[a].forEach((id) => livros.add(id)));
  const aulas = new Set(n.aulas);
  n.modulos.forEach((m) => todasAulas.forEach((a) => { if (a.modulo === m) aulas.add(a.id); }));
  n.degraus.forEach((g) => sequenciaDegrau(DEGRAUS[g]).forEach((it) => (it.tipo === 'livro' ? livros : aulas).add(it.id)));
  return [n.id, { livros: [...livros].filter((id) => livroPorId[id]), aulas: [...aulas].filter((id) => tituloAula[id]) }];
}));

function progressoNo(id, estado) {
  const { livros, aulas } = conteudo[id];
  const pub = aulas.filter((a) => aulaPorId[a]);
  const total = livros.length + pub.length;
  const feitos = livros.filter((l) => livroConcluido(estado, l)).length + pub.filter((a) => aulaConcluida(estado, a)).length;
  return { total, feitos, pct: total ? Math.round((feitos / total) * 100) : 0 };
}

/** Nó mais específico (menos conteúdo) que contém o item — destino da busca. */
const tamanho = (id) => conteudo[id].livros.length + conteudo[id].aulas.length;
const noMaisEspecifico = (pred) => NOS.filter(pred).sort((a, b) => tamanho(a.id) - tamanho(b.id))[0]?.id;
export const noDoLivro = (id) => noMaisEspecifico((n) => conteudo[n.id].livros.includes(id));
export const noDaAula = (id) => noMaisEspecifico((n) => conteudo[n.id].aulas.includes(id));

const INDICE = [
  ...NOS.map((n) => ({ tipo: 'Ramo', titulo: n.nome, texto: n.desc, no: n.id })),
  ...LIVROS.map((l) => ({ tipo: 'Livro', titulo: l.titulo, texto: `${l.autor} ${l.area}`, no: noDoLivro(l.id) })),
  ...todasAulas.map((a) => ({ tipo: 'Aula', titulo: `${a.id} — ${a.titulo}`, texto: '', no: noDaAula(a.id) })),
  ...CONCEITOS.map((c) => ({ tipo: 'Conceito', titulo: c.termo, texto: c.simples, no: c.livros.map(noDoLivro).find(Boolean) || c.aulas.map(noDaAula).find(Boolean) })),
  ...AUTORES.map((a) => ({ tipo: 'Autor', titulo: a.nome, texto: a.periodo, no: ORDEM_AUTOR[a.id] && noMaisEspecifico((n) => ORDEM_AUTOR[a.id].some((l) => conteudo[n.id].livros.includes(l))) })),
].filter((x) => x.no);

// ---------- Estado da vista (sobrevive a re-renderizações; não vai para o progresso) ----------
const ancestrais = (id) => { const r = []; for (let p = noPorId[id]?.pai; p; p = noPorId[p].pai) r.push(p); return r; };
const vista = {
  abertos: new Set(['teologia', 'filosofia', 'historia-filosofia', 'filo-brasileira']),
  sel: 'teologia', t: null, grupos: new Set(Object.keys(GRUPOS)), tipos: new Set(Object.keys(TIPOS_RELACAO)), percurso: false, q: '',
};

// ---------- Layout: árvore horizontal arrumada (folhas em linhas, pais centrados nos filhos) ----------
const LARG = 206, ALT = 42, DX = 262, DY = 54;
function layout() {
  const pos = {};
  let linha = 0;
  const visitar = (id, prof) => {
    const fs = vista.abertos.has(id) ? filhos[id] : [];
    if (!fs.length) { pos[id] = { x: prof * DX, y: linha++ * DY }; return; }
    fs.forEach((f) => visitar(f, prof + 1));
    pos[id] = { x: prof * DX, y: (pos[fs[0]].y + pos[fs[fs.length - 1]].y) / 2 };
  };
  visitar('teologia', 0);
  return pos;
}

const corta = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
const curva = (a, b) => { const mx = (a.x + b.x) / 2; return `M${a.x} ${a.y}C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`; };
/** Relação não hierárquica: arco que sai pela direita e entra pela esquerda (ou arqueia quando na mesma coluna). */
function arco(a, b) {
  if (Math.abs(a.x - b.x) < 1) { const x = a.x + LARG + 40 + Math.min(120, Math.abs(a.y - b.y) / 6); return `M${a.x + LARG} ${a.y}C${x} ${a.y} ${x} ${b.y} ${b.x + LARG} ${b.y}`; }
  const [p, q] = a.x < b.x ? [{ x: a.x + LARG, y: a.y }, { x: b.x, y: b.y }] : [{ x: a.x, y: a.y }, { x: b.x + LARG, y: b.y }];
  const mx = (p.x + q.x) / 2, dy = -Math.min(80, Math.abs(p.x - q.x) / 5);
  return `M${p.x} ${p.y}C${mx} ${p.y + dy} ${mx} ${q.y + dy} ${q.x} ${q.y}`;
}
const ROSA = rosacea(100).replace(/^<svg[^>]*>|<\/svg>$/g, '');

function noSVG(id, { x, y }, estado) {
  const n = noPorId[id], fs = filhos[id], aberto = vista.abertos.has(id), pr = progressoNo(id, estado);
  const cls = ['no', `g-${n.grupo}`, id === vista.sel && 'sel', !vista.grupos.has(n.grupo) && 'apagado',
    vista.percurso && TRILHA.includes(id) && 'trilha', !n.percurso && 'preparo', !n.pai && 'raiz'].filter(Boolean).join(' ');
  const rotulo = `${n.nome}. ${GRUPOS[n.grupo]}.${n.percurso ? '' : ' Percurso em preparação.'}${pr.total ? ` ${pr.pct}% concluído.` : ''}${fs.length ? (aberto ? ' Expandido.' : ` Recolhido, ${fs.length} ramos.`) : ''}`;
  const x0 = n.pai ? 14 : 44, w = n.pai ? 140 : 110;
  return `<g class="${cls}" transform="translate(${x} ${y - ALT / 2})" data-no="${id}" tabindex="0" role="button" aria-label="${esc(rotulo)}" ${fs.length ? `aria-expanded="${aberto}"` : ''}>
    <title>${esc(n.nome)}</title>
    <path class="no-fundo" d="M0 ${ALT}V12Q0 0 12 0H${LARG - 12}Q${LARG} 0 ${LARG} 12V${ALT}Z"/>
    <rect class="no-faixa" x="0" y="8" width="4" height="${ALT - 8}"/>
    <path class="no-friso" d="M5 ${ALT - 4}V13Q5 5 13 5H${LARG - 13}Q${LARG - 5} 5 ${LARG - 5} 13V${ALT - 4}Z"/>
    ${n.pai ? '' : `<g transform="translate(9 6) scale(.3)" class="no-rosa" fill="none" stroke="currentColor" stroke-width="3">${ROSA}</g>`}
    <text x="${x0}" y="${pr.total || !n.percurso ? 20 : 26}" class="no-nome">${esc(corta(n.nome, n.pai ? 26 : 21))}</text>
    ${pr.total ? `<rect class="no-trilho" x="${x0}" y="27" width="${w}" height="4" rx="2"/><rect class="no-prog" x="${x0}" y="27" width="${(w * pr.pct) / 100}" height="4" rx="2"/><text class="no-pct" x="160" y="32">${pr.pct}%</text>` : n.percurso ? '' : `<text class="no-pct" x="${x0}" y="34">${disciplinaPorId[id] ? 'percurso definido' : 'em preparação'}</text>`}
    ${fs.length ? `<g class="no-botao" data-alternar="${id}" transform="translate(${LARG} ${ALT / 2})" aria-hidden="true"><circle r="10"/><text y="4" text-anchor="middle">${aberto ? '−' : fs.length}</text></g>` : ''}
  </g>`;
}

function desenharCena(estado) {
  const pos = layout();
  const visiveis = Object.keys(pos);
  const hier = vista.tipos.has('hierarquia') ? visiveis.filter((id) => noPorId[id].pai).map((id) => {
    const p = pos[noPorId[id].pai];
    return `<path class="lig lig-hierarquia" d="${curva({ x: p.x + LARG, y: p.y }, pos[id])}"/>`;
  }).join('') : '';
  const rel = RELACOES.filter((r) => pos[r.de] && pos[r.para] && (vista.tipos.has(r.tipo) || (vista.percurso && r.trilha))).map((r) =>
    `<path class="lig lig-${r.tipo}${vista.percurso && r.trilha ? ' destaque' : ''}" d="${arco(pos[r.de], pos[r.para])}" ${r.tipo === 'prerequisito' ? 'marker-end="url(#seta)"' : ''}><title>${esc(TIPOS_RELACAO[r.tipo])}: ${esc(noPorId[r.de].nome)} → ${esc(noPorId[r.para].nome)}. ${esc(r.porque)}</title></path>`).join('');
  return { svg: `${hier}${rel}${visiveis.map((id) => noSVG(id, pos[id], estado)).join('')}`, pos };
}

// ---------- Painel de detalhes ----------
const botaoNo = (x) => `<button class="link-no" data-ir="${x}">${esc(noPorId[x].nome)}</button>`;
function painelNo(id, estado) {
  const n = noPorId[id], c = conteudo[id], pr = progressoNo(id, estado);
  const lista = (ids, f) => `<ul class="lista-curta">${ids.map(f).join('')}</ul>`;
  const rels = RELACOES.filter((r) => r.de === id || r.para === id);
  const prereqs = rels.filter((r) => r.tipo === 'prerequisito' && r.para === id);
  const outras = rels.filter((r) => !prereqs.includes(r));
  const livrosOrd = c.livros.slice().sort((a, b) => livroPorId[a].ordem - livroPorId[b].ordem);
  return `<p class="num">${esc(GRUPOS[n.grupo])}${n.pai ? ` · ramo de ${botaoNo(n.pai)}` : ''}</p>
    <h2>${esc(n.nome)}</h2>
    <p>${esc(n.desc)}</p>
    ${SANTOS_DAS_AREAS[id] ? santoHTML(SANTOS_DAS_AREAS[id], { compacto: true }) : ''}
    ${disciplinaPorId[id] ? `${disciplinaPorId[id].aulasPublicadas ? '<p class="meta"><strong>Percurso completo:</strong> aulas publicadas em todas as etapas, com provas e avaliação integradora.</p>' : '<p class="aviso"><strong>Percurso definido; aulas em preparação.</strong> Etapas, método, exercícios, critérios e bibliografia já estão disponíveis.</p>'}<p><a class="btn primario" href="#disciplina-${id}">Abrir o percurso de ${esc(n.nome)}</a>${id === 'simbologia' ? ' <a class="btn" href="#simbolos">Laboratório de Signos e Símbolos</a>' : ''}</p>` : n.percurso ? '' : '<p class="aviso"><strong>Percurso em preparação.</strong> Esta disciplina ainda não tem percurso, aulas e bibliografia próprias no curso; os livros listados são obras do acervo que tocam o tema, não o currículo da disciplina.</p>'}
    ${pr.total ? `<p class="meta">${pr.feitos} de ${pr.total} itens concluídos (livros e aulas publicadas)</p>${barra(pr.pct, `Progresso em ${n.nome}`)}` : ''}
    ${filhos[id].length ? `<h3>Ramos</h3><p>${filhos[id].map(botaoNo).join(' · ')}</p>` : ''}
    ${prereqs.length ? `<h3>Pré-requisitos</h3>${lista(prereqs, (r) => `<li>${botaoNo(r.de)} — <span class="meta">${esc(r.porque)}</span></li>`)}` : ''}
    ${outras.length ? `<h3>Relações</h3>${lista(outras, (r) => `<li><span class="chip rel-${r.tipo}">${esc(TIPOS_RELACAO[r.tipo])}</span> ${botaoNo(r.de === id ? r.para : r.de)} — <span class="meta">${esc(r.porque)}</span></li>`)}` : ''}
    ${n.degraus.length ? `<h3>Na escada</h3><p>${n.degraus.map((g) => link('escada', `Degrau ${g}: ${esc(DEGRAUS[g].nome)}`)).join(' · ')}</p>` : ''}
    ${n.modulos.length ? `<h3>Módulos</h3><p>${n.modulos.map((m) => link(`mod-${m}`, `${moduloPorId[m].n}. ${esc(moduloPorId[m].titulo)}`)).join(' · ')}</p>` : ''}
    ${c.aulas.length ? `<details><summary>Aulas (${c.aulas.length})</summary>${lista(c.aulas, (a) => `<li class="${aulaConcluida(estado, a) ? 'feito' : ''}">${link(`aula-${a}`, `${a} — ${esc(tituloAula[a])}`)}${aulaPorId[a] ? '' : ' <span class="meta">(em preparação)</span>'}</li>`)}</details>` : ''}
    ${c.livros.length ? `<details ${c.livros.length <= 8 ? 'open' : ''}><summary>Livros (${c.livros.length})</summary>${lista(livrosOrd, (l) => `<li class="${livroConcluido(estado, l) ? 'feito' : ''}">${link(`livro-${l}`, esc(livroPorId[l].titulo))} <span class="meta">— ${esc(livroPorId[l].autor)}</span></li>`)}</details>` : ''}`;
}

const listaTexto = (id) => `<li>${botaoNo(id)}${noPorId[id].percurso ? '' : ' <span class="meta">(em preparação)</span>'}${filhos[id].length ? `<ul>${filhos[id].map(listaTexto).join('')}</ul>` : ''}</li>`;

export function arvore(ctx, id) {
  // rota #area-<id>: abre a árvore já com o ramo selecionado e visível
  if (id && noPorId[id] && vista.sel !== id) { vista.sel = id; ancestrais(id).forEach((a) => vista.abertos.add(a)); vista.t = null; vista.centrar = id; }
  const legenda = Object.entries(TIPOS_RELACAO).map(([t, r]) => `<label class="leg"><input type="checkbox" data-tipo="${t}" ${vista.tipos.has(t) ? 'checked' : ''}><svg width="36" height="10" aria-hidden="true"><path class="lig lig-${t}" d="M1 5H35"/></svg> ${esc(r)}</label>`).join('');
  return `<header class="cab"><h1>Mapa do conhecimento</h1>
    <p class="sub">A formação parte da Teologia Católica, tem a Filosofia como eixo de investigação e se abre às ciências e às humanidades.</p></header>
  ${abasMapa('mapa')}
  <p class="meta nota-arvore">A hierarquia mostra a ordem pedagógica deste curso, não uma tese de que as demais ciências derivem metodologicamente da teologia ou da filosofia: cada área tem objeto e método próprios.</p>
  <div class="arvore-ferr">
    <label class="campo"><span>Buscar ramo, livro, aula, conceito ou autor</span><input type="search" id="a-q" value="${esc(vista.q)}" autocomplete="off"></label>
    <div class="grupo-btn" role="group" aria-label="Zoom e visão">
      <button class="btn pequeno" data-zoom="1.25" aria-label="Aproximar">+</button><button class="btn pequeno" data-zoom="0.8" aria-label="Afastar">−</button>
      <button class="btn pequeno" data-acao-a="geral">Visão geral</button>
      <button class="btn pequeno" data-acao-a="percurso" aria-pressed="${vista.percurso}">Destacar percurso curricular</button>
      <button class="btn pequeno" data-acao-a="abrir">Expandir tudo</button><button class="btn pequeno" data-acao-a="fechar">Recolher</button>
    </div>
  </div>
  <ul class="lista-busca" id="a-res" aria-live="polite"></ul>
  <fieldset class="filtro-grupos"><legend>Áreas</legend>${Object.entries(GRUPOS).map(([g, r]) => `<label class="chip-filtro g-${g}"><input type="checkbox" data-grupo="${g}" ${vista.grupos.has(g) ? 'checked' : ''}> ${esc(r)}</label>`).join('')}</fieldset>
  <div class="arvore-corpo">
    <div class="arvore-tela">
      <svg id="arvore-svg" role="group" aria-label="Árvore do conhecimento. Arraste para mover; roda do mouse ou pinça para o zoom; Tab percorre os ramos, Enter seleciona, setas expandem, recolhem e navegam.">
        <defs><marker id="seta" class="seta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z"/></marker></defs>
        <g id="cena"></g>
      </svg>
    </div>
    <aside class="arvore-painel" id="a-painel" aria-live="polite"></aside>
  </div>
  <fieldset class="legenda-arvore"><legend>Legenda das ligações</legend>${legenda}<span class="leg"><span class="amostra-preparo"></span> Percurso em preparação</span></fieldset>
  <details class="arvore-lista"><summary>Ver a árvore em lista (texto)</summary><ul>${listaTexto('teologia')}</ul></details>`;
}

arvore.ligar = (root, ctx) => {
  const svg = root.querySelector('#arvore-svg'), cena = root.querySelector('#cena'), painel = root.querySelector('#a-painel');
  let pos = {};
  const aplicar = () => cena.setAttribute('transform', `translate(${vista.t.x} ${vista.t.y}) scale(${vista.t.k})`);
  const caixa = () => svg.getBoundingClientRect();
  const limitar = (k) => Math.min(2.5, Math.max(0.12, k));
  function zoom(f, cx, cy) {
    const r = caixa(); cx ??= r.width / 2; cy ??= r.height / 2;
    const k = limitar(vista.t.k * f), q = k / vista.t.k;
    vista.t = { k, x: cx - (cx - vista.t.x) * q, y: cy - (cy - vista.t.y) * q }; aplicar();
  }
  function geral() {
    const ps = Object.values(pos), r = caixa();
    const x0 = -10, x1 = Math.max(...ps.map((p) => p.x)) + LARG + 20;
    const y0 = Math.min(...ps.map((p) => p.y)) - ALT, y1 = Math.max(...ps.map((p) => p.y)) + ALT;
    const k = limitar(Math.min(r.width / (x1 - x0), r.height / (y1 - y0), 1.1) * 0.95);
    vista.t = { k, x: (r.width - (x1 - x0) * k) / 2 - x0 * k, y: (r.height - (y1 - y0) * k) / 2 - y0 * k }; aplicar();
  }
  function centrar(id) {
    const p = pos[id], r = caixa(); if (!p) return;
    const k = Math.max(vista.t.k, 0.7);
    vista.t = { k, x: r.width / 2 - (p.x + LARG / 2) * k, y: r.height / 2 - p.y * k }; aplicar();
  }
  function desenhar(focar) {
    const d = desenharCena(ctx.estado); pos = d.pos;
    cena.innerHTML = d.svg;
    painel.innerHTML = painelNo(vista.sel, ctx.estado);
    if (focar) cena.querySelector(`[data-no="${focar}"]`)?.focus({ preventScroll: true });
  }
  function selecionar(id, { centralizar = false, focar = false } = {}) {
    vista.sel = id;
    ancestrais(id).forEach((a) => vista.abertos.add(a));
    desenhar(focar ? id : null);
    if (centralizar) centrar(id);
  }
  const alternar = (id, abrir = !vista.abertos.has(id)) => {
    if (!filhos[id].length) return;
    if (abrir) vista.abertos.add(id); else vista.abertos.delete(id);
    desenhar(id);
  };

  /** Abertura legível: raiz à esquerda, centrada na altura, zoom suficiente para ler os rótulos. */
  function inicial() {
    const r = caixa(), k = r.width < 600 ? 0.75 : 0.85;
    vista.t = { k, x: 16, y: r.height / 2 - pos.teologia.y * k }; aplicar();
  }
  desenhar();
  if (vista.t) aplicar(); else inicial();
  if (vista.centrar) { centrar(vista.centrar); vista.centrar = null; }

  // Arrastar (um ponteiro) e pinça (dois). O arrasto só captura o ponteiro depois de 4 px, para não engolir cliques.
  const ponteiros = new Map();
  let inicio = null, pinca = null, arrastou = false;
  svg.addEventListener('pointerdown', (ev) => {
    ponteiros.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (ponteiros.size === 1) { arrastou = false; inicio = { x: ev.clientX, y: ev.clientY, t: { ...vista.t } }; }
    if (ponteiros.size === 2) { const [a, b] = [...ponteiros.values()]; pinca = { d: Math.hypot(a.x - b.x, a.y - b.y), k: vista.t.k }; }
  });
  svg.addEventListener('pointermove', (ev) => {
    if (!ponteiros.has(ev.pointerId)) return;
    ponteiros.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (ponteiros.size === 2 && pinca) {
      const [a, b] = [...ponteiros.values()], r = caixa();
      zoom(limitar((pinca.k * Math.hypot(a.x - b.x, a.y - b.y)) / pinca.d) / vista.t.k, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      arrastou = true; return;
    }
    if (!inicio || pinca) return;
    const dx = ev.clientX - inicio.x, dy = ev.clientY - inicio.y;
    if (!arrastou && Math.hypot(dx, dy) < 4) return;
    if (!arrastou) { arrastou = true; svg.setPointerCapture(ev.pointerId); svg.classList.add('arrastando'); }
    vista.t = { ...inicio.t, x: inicio.t.x + dx, y: inicio.t.y + dy }; aplicar();
  });
  const soltar = (ev) => {
    ponteiros.delete(ev.pointerId);
    if (ponteiros.size < 2) pinca = null;
    if (!ponteiros.size) { inicio = null; svg.classList.remove('arrastando'); }
  };
  svg.addEventListener('pointerup', soltar);
  svg.addEventListener('pointercancel', soltar);
  svg.addEventListener('wheel', (ev) => { ev.preventDefault(); const r = caixa(); zoom(ev.deltaY < 0 ? 1.12 : 1 / 1.12, ev.clientX - r.left, ev.clientY - r.top); }, { passive: false });

  svg.addEventListener('click', (ev) => {
    if (arrastou) return;
    const b = ev.target.closest('[data-alternar]');
    if (b) { alternar(b.dataset.alternar); return; }
    const g = ev.target.closest('[data-no]');
    if (g) selecionar(g.dataset.no, { focar: true });
  });
  svg.addEventListener('keydown', (ev) => {
    const id = ev.target.closest('[data-no]')?.dataset.no;
    if (!id) return;
    const aberto = vista.abertos.has(id) && filhos[id].length;
    const ir = (x) => x && selecionar(x, { centralizar: true, focar: true });
    if (ev.key === 'Enter' || ev.key === ' ') selecionar(id, { focar: true });
    else if (ev.key === 'ArrowRight') aberto ? ir(filhos[id][0]) : alternar(id, true);
    else if (ev.key === 'ArrowLeft') aberto ? alternar(id, false) : ir(noPorId[id].pai);
    else if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      const ordem = Object.keys(pos).sort((a, b) => pos[a].y - pos[b].y || pos[a].x - pos[b].x);
      ir(ordem[ordem.indexOf(id) + (ev.key === 'ArrowDown' ? 1 : -1)]);
    } else return;
    ev.preventDefault();
  });

  root.addEventListener('click', (ev) => {
    const ir = ev.target.closest('[data-ir]');
    if (ir) { ev.preventDefault(); selecionar(ir.dataset.ir, { centralizar: true }); svg.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
    const z = ev.target.closest('[data-zoom]');
    if (z) { zoom(Number(z.dataset.zoom)); return; }
    const a = ev.target.closest('[data-acao-a]');
    if (!a) return;
    const acao = a.dataset.acaoA;
    if (acao === 'abrir') NOS.forEach((n) => filhos[n.id].length && vista.abertos.add(n.id));
    if (acao === 'fechar') vista.abertos = new Set(['teologia']);
    if (acao === 'percurso') {
      vista.percurso = !vista.percurso;
      a.setAttribute('aria-pressed', String(vista.percurso));
      if (vista.percurso) TRILHA.forEach((id) => ancestrais(id).forEach((x) => vista.abertos.add(x)));
    }
    if (acao !== 'geral') desenhar();
    if (acao !== 'percurso') geral();
  });
  root.addEventListener('change', (ev) => {
    const { grupo, tipo } = ev.target.dataset;
    if (grupo) vista.grupos[ev.target.checked ? 'add' : 'delete'](grupo);
    if (tipo) vista.tipos[ev.target.checked ? 'add' : 'delete'](tipo);
    if (grupo || tipo) desenhar();
  });

  const res = root.querySelector('#a-res'), campo = root.querySelector('#a-q');
  const pintarBusca = () => {
    const r = buscar(INDICE, vista.q, 12);
    res.innerHTML = !vista.q ? '' : r.length
      ? r.map((x) => `<li><span class="chip">${x.tipo}</span> <button class="link-no" data-ir="${x.no}">${esc(x.titulo)}</button> <span class="meta">em ${esc(noPorId[x.no].nome)}</span></li>`).join('')
      : '<li class="meta">Nada encontrado.</li>';
  };
  let tm;
  campo.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(() => { vista.q = campo.value; pintarBusca(); }, 150); });
  campo.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); res.querySelector('[data-ir]')?.click(); } });
  pintarBusca();
};
