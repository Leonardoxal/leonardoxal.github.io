// Ponto de entrada: roteador por âncora (#painel, #aula-m1-1 …), casca da interface, cronômetro e busca global.
import { criarStore } from './store.js';
import { buscar } from './core.js';
import { esc, link, toast, novoId, fmtMin } from './ui.js';
import { LIVROS } from './data/livros.js';
import { todasAulas } from './data/curriculo.js';
import { aulaPorId } from './data/aulas/index.js';
import { CONCEITOS } from './data/conceitos.js';
import { AUTORES } from './data/autores.js';
import { painel } from './views/painel.js';
import { mapa } from './views/mapa.js';
import { curso, modulo, aula } from './views/curso.js';
import { biblioteca, livro } from './views/biblioteca.js';
import { caderno, nota, criarNota } from './views/caderno.js';
import { avaliacoes, avaliacao, revisar, cartoes } from './views/avaliacoes.js';
import { atlas, conceito, autores } from './views/atlas.js';
import { plano } from './views/plano.js';
import { genealogia } from './views/genealogia.js';
import { entrar } from './views/entrar.js';
import { nuvemConfigurada, usuarioNuvem } from './nuvem.js';
import { MOVIMENTOS } from './data/genealogia.js';

const strip = (html) => String(html || '').replace(/<[^>]+>/g, ' ');
const INDICE = [
  ...todasAulas.map((a) => ({ tipo: 'Aula', href: `aula-${a.id}`, titulo: `${a.id} — ${a.titulo}`, texto: aulaPorId[a.id] ? strip(aulaPorId[a.id].explicacao) : '' })),
  ...LIVROS.map((l) => ({ tipo: 'Livro', href: `livro-${l.id}`, titulo: l.titulo, texto: `${l.autor} ${l.area} ${l.objetivo}` })),
  ...CONCEITOS.map((c) => ({ tipo: 'Conceito', href: `conceito-${c.id}`, titulo: c.termo, texto: `${c.simples} ${c.tecnica}` })),
  ...AUTORES.map((a) => ({ tipo: 'Autor', href: 'autores', titulo: a.nome, texto: a.resumo })),
  ...MOVIMENTOS.map((m) => ({ tipo: 'Ideia', href: `ideia-${m.id}`, titulo: m.nome, texto: `${m.pessoas} ${m.origem}` })),
];
let consulta = '';

function busca() {
  const r = buscar(INDICE, consulta);
  return `<header class="cab"><h1>Busca</h1></header>
    <form class="filtros" id="f-busca" role="search"><label class="campo largo"><span>Buscar aulas, livros, conceitos e autores</span><input type="search" id="b-q" value="${esc(consulta)}" autofocus></label></form>
    ${consulta ? `<p class="meta">${r.length} resultado(s)</p><ul class="lista-busca">${r.map((x) => `<li><span class="chip">${x.tipo}</span> ${link(x.href, esc(x.titulo))}</li>`).join('')}</ul>` : '<p class="meta">Digite pelo menos uma palavra. Acentos são ignorados.</p>'}`;
}
busca.ligar = (root, ctx) => {
  let t;
  root.querySelector('#f-busca').addEventListener('submit', (e) => e.preventDefault());
  root.querySelector('#b-q').addEventListener('input', (ev) => { clearTimeout(t); t = setTimeout(() => { consulta = ev.target.value; ctx.render({ foco: 'b-q' }); }, 200); });
};

// Rotas: token exato ou prefixo seguido de id.
const ROTAS = { painel, mapa, curso, biblioteca, caderno, avaliacoes, revisar, cartoes, atlas, autores, genealogia, plano, busca };
const PREFIXOS = { 'mod-': modulo, 'aula-': aula, 'livro-': livro, 'nota-': nota, 'aval-': avaliacao, 'conceito-': conceito, 'ideia-': genealogia };
const NAV = [['painel', 'Painel'], ['mapa', 'Mapa'], ['curso', 'Curso'], ['biblioteca', 'Biblioteca'], ['genealogia', 'Ideias'], ['caderno', 'Caderno'], ['avaliacoes', 'Avaliações'], ['atlas', 'Atlas'], ['plano', 'Plano'], ['busca', 'Busca']];
const SECAO = { 'mod-': 'curso', 'aula-': 'curso', 'livro-': 'biblioteca', 'nota-': 'caderno', 'aval-': 'avaliacoes', 'conceito-': 'atlas', 'ideia-': 'genealogia', revisar: 'avaliacoes', cartoes: 'avaliacoes', autores: 'atlas' };

function resolver(token) {
  if (ROTAS[token]) return { view: ROTAS[token], id: null, secao: SECAO[token] || token };
  for (const [p, view] of Object.entries(PREFIXOS)) if (token.startsWith(p)) return { view, id: token.slice(p.length), secao: SECAO[p] };
  return { view: painel, id: null, secao: 'painel' };
}

const conteudo = document.getElementById('conteudo');
const statusEl = document.getElementById('status');
let renderPendente = true;
// Fora do claude.ai, com o Supabase configurado, o app exige login. A sessão fica guardada no aparelho,
// então quem já entrou abre direto, mesmo sem internet.
const exigeLogin = nuvemConfigurada() && !window.claude?.use;
let precisaLogin = exigeLogin && !(await usuarioNuvem().catch(() => null));

const mostrarStatus = (status) => { statusEl.textContent = status.msg; statusEl.className = `status status-${status.modo}`; };
const store = criarStore(() => { if (renderPendente) render({ manterRolagem: true }); }, mostrarStatus);

const ctx = {
  get estado() { return store.estado; },
  get status() { return store.status; },
  store,
  /** opts.render=false grava sem redesenhar (campos de texto, para não perder o foco). */
  set(fn, opts = {}) {
    renderPendente = opts.render !== false;
    store.set(fn);
    renderPendente = true;
  },
  render: (opts) => render(opts),
  /** Depois do login: carrega o progresso da conta e abre o app. */
  async aoEntrar() { precisaLogin = false; await store.conectar(); render(); },
  /** Sai da conta e volta à tela de entrada. */
  async sair() {
    try { await store.desconectar(); } catch (e) { toast(e.message); return; }
    precisaLogin = true;
    render();
  },
  nav(token) { location.hash = token; },
  novaNota(vinculo, titulo) { const id = criarNota(ctx.set, vinculo, titulo); ctx.nav(`nota-${id}`); },
};

function render(opts = {}) {
  document.querySelector('.nav').hidden = precisaLogin;
  if (precisaLogin) {
    const tela = document.createElement('div');
    tela.className = 'vista';
    tela.innerHTML = entrar();
    conteudo.replaceChildren(tela);
    entrar.ligar(tela, ctx);
    return;
  }
  const token = location.hash.slice(1) || 'painel';
  const { view, id, secao } = resolver(token);
  const y = window.scrollY;
  const novo = document.createElement('div');
  novo.className = 'vista';
  try {
    novo.innerHTML = view(ctx, id);
  } catch (e) {
    novo.innerHTML = `<div class="aviso"><strong>Não foi possível abrir esta página.</strong> ${esc(e.message)} ${link('painel', 'Voltar ao painel')}</div>`;
  }
  conteudo.replaceChildren(novo);
  try { view.ligar?.(novo, ctx, id); } catch (e) { toast(`Erro: ${e.message}`); }
  document.querySelectorAll('.nav a').forEach((a) => a.setAttribute('aria-current', a.dataset.secao === secao ? 'page' : 'false'));
  if (opts.manterRolagem) window.scrollTo(0, y);
  if (opts.foco) { const f = document.getElementById(opts.foco); if (f) { f.focus(); if (f.setSelectionRange && f.value != null && f.type !== 'number' && f.type !== 'date') f.setSelectionRange(f.value.length, f.value.length); } }
  atualizarCronometro();
}

document.querySelector('.nav ul').innerHTML = NAV.map(([t, r]) => `<li><a href="#${t}" data-secao="${t}">${r}</a></li>`).join('');
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); document.getElementById('conteudo').focus({ preventScroll: true }); });

// Favoritos e cronômetro funcionam em qualquer página.
document.addEventListener('click', (ev) => {
  const fav = ev.target.closest('[data-acao="fav"]');
  if (fav) {
    const k = fav.dataset.chave;
    ctx.set((e) => ({ ...e, favoritos: e.favoritos.includes(k) ? e.favoritos.filter((x) => x !== k) : [...e.favoritos, k] }), { render: false });
    const on = ctx.estado.favoritos.includes(k);
    fav.classList.toggle('on', on); fav.setAttribute('aria-pressed', String(on)); fav.firstChild.textContent = on ? '★' : '☆';
    toast(on ? 'Adicionado aos favoritos.' : 'Removido dos favoritos.');
  }
  const cr = ev.target.closest('[data-acao="cronometro"]');
  if (cr) iniciarCronometro(cr.dataset.alvo);
});

// ---------- Cronômetro (o relógio em andamento é preferência local; a sessão vai para o estado ao parar) ----------
const CHAVE_CRONO = 'academia-verdade-cronometro';
let crono = (() => { try { return JSON.parse(localStorage.getItem(CHAVE_CRONO)) || null; } catch { return null; } })();
const barraCrono = document.getElementById('cronometro');
const guardarCrono = () => { try { crono ? localStorage.setItem(CHAVE_CRONO, JSON.stringify(crono)) : localStorage.removeItem(CHAVE_CRONO); } catch { /* sem armazenamento: o cronômetro vale só nesta aba */ } };

function iniciarCronometro(alvo) {
  if (crono) { toast('Já há um cronômetro em andamento.'); return; }
  crono = { inicio: Date.now(), alvo: alvo || null };
  guardarCrono(); atualizarCronometro(); toast('Cronômetro iniciado.');
}
function pararCronometro(salvar) {
  if (!crono) return;
  const minutos = Math.round((Date.now() - crono.inicio) / 60000);
  if (salvar && minutos >= 1) {
    const [tipo, id] = (crono.alvo || ':').split(':');
    const obs = tipo === 'aula' ? `Aula ${id}` : tipo === 'livro' ? `Leitura: ${LIVROS.find((l) => l.id === id)?.titulo || id}` : 'Estudo livre';
    const inicio = crono.inicio;
    crono = null; guardarCrono();
    ctx.set((e) => ({ ...e, sessoes: [...e.sessoes, { id: novoId('s'), inicio, minutos: Math.min(minutos, 720), alvo: tipo ? { tipo, id } : null, obs }] }), { manterRolagem: true });
    toast(`${fmtMin(minutos)} registrados.`);
  } else {
    crono = null; guardarCrono();
    if (salvar) toast('Menos de 1 minuto: nada foi registrado.');
  }
  atualizarCronometro();
}
let tick;
function atualizarCronometro() {
  clearInterval(tick);
  barraCrono.hidden = !crono;
  if (!crono) return;
  const pinta = () => {
    const s = Math.floor((Date.now() - crono.inicio) / 1000);
    barraCrono.querySelector('.crono-tempo').textContent = `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  };
  pinta(); tick = setInterval(pinta, 1000);
}
barraCrono.querySelector('[data-crono="parar"]').addEventListener('click', () => pararCronometro(true));
barraCrono.querySelector('[data-crono="descartar"]').addEventListener('click', () => pararCronometro(false));
document.getElementById('crono-livre').addEventListener('click', () => iniciarCronometro(null));

mostrarStatus(store.status);
render();
if (!precisaLogin) store.conectar();
