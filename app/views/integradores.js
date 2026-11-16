// Módulos integradores (#integradores e #integrador-<id>): aulas e livros de várias disciplinas
// reunidos em torno de uma época, um país, um autor ou um problema, terminando numa síntese com juízo próprio.
import { INTEGRADORES, integradorPorId, TIPOS_INTEGRADOR, RELACOES_INTEGRADOR, CRITERIOS_SINTESE, prereqsPendentes, integradoresDaAula } from '../data/integradores.js';
import { aulaPorId } from '../data/aulas/index.js';
import { moduloPorId, todasAulas, DEGRAUS } from '../data/curriculo.js';
import { livroPorId } from '../data/livros.js';
import { DISCIPLINAS } from '../data/disciplinas.js';
import { aulaConcluida, livroConcluido, normalizar } from '../core.js';
import { esc, link, barra } from '../ui.js';

const moduloDe = Object.fromEntries(todasAulas.map((a) => [a.id, a.modulo]));
const aulaMeta = Object.fromEntries(todasAulas.map((a) => [a.id, a]));
const progresso = (estado, m) => {
  const aulas = m.itens.filter((i) => i.aula);
  return Math.round((aulas.filter((i) => aulaConcluida(estado, i.aula)).length / Math.max(1, aulas.length)) * 100);
};

// Área de cada aula: a disciplina que a lista; as aulas da escada ficam com o degrau.
const AREA_DA_AULA = Object.fromEntries(DISCIPLINAS.flatMap((d) => Object.values(d.aulas || {}).flat().map((a) => [a, d.nome])));
const areaDa = (id) => AREA_DA_AULA[id] || (aulaMeta[id]?.degrau != null ? `Degrau ${aulaMeta[id].degrau}: ${DEGRAUS[aulaMeta[id].degrau].nome}` : moduloPorId[aulaMeta[id]?.modulo]?.titulo || '');
const LIGACOES = INTEGRADORES.flatMap((m) => m.itens.filter((i) => i.aula && aulaMeta[i.aula]).map((i) => ({ m, aula: i.aula, relacao: i.relacao, area: areaDa(i.aula) })));
const opcoes = (pares) => pares.map(([v, r]) => `<option value="${esc(v)}">${esc(r)}</option>`).join('');

/** Lista filtrável (Parte IX): cada linha diz qual aula entra em qual época ou tema, com que papel, e por quê. */
function ligacoesHTML(estado) {
  const areas = [...new Set(LIGACOES.map((l) => l.area))].sort((x, y) => x.localeCompare(y, 'pt'));
  return `<section class="ligacoes-lista"><h2>Todas as ligações entre as aulas</h2>
    <p class="meta">Cada linha liga uma aula a uma época, civilização, autor ou problema. A pergunta do módulo diz por que estão juntas; a relação diz o papel da aula. Filtre por qualquer combinação.</p>
    <form class="filtros" data-filtros>
      <label class="campo"><span>Tipo</span><select name="tipo"><option value="">Todos</option>${opcoes(Object.entries(TIPOS_INTEGRADOR).filter(([t]) => INTEGRADORES.some((m) => m.tipo === t)))}</select></label>
      <label class="campo"><span>Área</span><select name="area"><option value="">Todas</option>${opcoes(areas.map((a) => [a, a]))}</select></label>
      <label class="campo"><span>Relação</span><select name="relacao"><option value="">Todas</option>${opcoes(Object.entries(RELACOES_INTEGRADOR).map(([k, r]) => [k, r.nome]))}</select></label>
      <label class="campo"><span>Estado</span><select name="estado"><option value="">Todos</option><option value="feita">Concluídas</option><option value="pendente">Pendentes</option></select></label>
      <label class="campo"><span>Buscar</span><input name="q" type="search" placeholder="aula, época, autor, pergunta…"></label>
    </form>
    <p class="meta" aria-live="polite" data-contagem>${LIGACOES.length} ligações</p>
    <ul class="lista-curta" data-ligacoes>${LIGACOES.map((l) => {
      const feita = aulaConcluida(estado, l.aula);
      const busca = normalizar(`${aulaMeta[l.aula].titulo} ${l.m.titulo} ${l.m.pergunta} ${l.area}`);
      return `<li data-tipo="${l.m.tipo}" data-area="${esc(l.area)}" data-relacao="${l.relacao}" data-estado="${feita ? 'feita' : 'pendente'}" data-busca="${esc(busca)}">
        ${link(`aula-${l.aula}`, esc(aulaMeta[l.aula].titulo))}${feita ? ' <span class="chip ok">concluída</span>' : ''}
        <br><span class="meta">${esc(l.area)} · ${esc(RELACOES_INTEGRADOR[l.relacao].nome.toLowerCase())} em ${link(`integrador-${l.m.id}`, esc(l.m.titulo))}</span>
        <br><span class="meta">Por quê: ${esc(l.m.pergunta)}</span></li>`;
    }).join('')}</ul></section>`;
}

export function integradores({ estado }) {
  const grupos = Object.entries(TIPOS_INTEGRADOR).map(([tipo, nome]) => [nome, INTEGRADORES.filter((m) => m.tipo === tipo)]).filter(([, ms]) => ms.length);
  return `<header class="cab"><h1>Módulos integradores</h1>
    <p class="sub">Cada módulo reúne aulas e livros de várias disciplinas em torno de uma época, um país, um autor ou um problema, e termina com uma síntese em que você responde a uma pergunta com juízo próprio. Os integradores não substituem as aulas nem as avaliações; só os pré-requisitos bloqueiam a síntese.</p>
    <p>${link('integradores', 'Módulos')} · <a href="#integradores" data-ir-ligacoes>Todas as ligações, com filtros</a></p></header>
  ${grupos.map(([nome, ms]) => `<section><h2>${esc(nome)}</h2><ul class="lista-aval">${ms.map((m) => `<li><a href="#integrador-${m.id}">
      <strong>${esc(m.titulo)}</strong><p>${esc(m.pergunta)}</p>
      <span class="meta">${m.itens.length} ligações${m.limitada ? ' · cobertura limitada' : ''}</span>${barra(progresso(estado, m), `Aulas concluídas de ${m.titulo}`)}</a></li>`).join('')}</ul></section>`).join('')}
  ${ligacoesHTML(estado)}`;
}

integradores.ligar = (root) => {
  const form = root.querySelector('[data-filtros]');
  if (!form) return;
  const itens = [...root.querySelectorAll('[data-ligacoes] > li')];
  const contagem = root.querySelector('[data-contagem]');
  const aplicar = () => {
    const f = Object.fromEntries(new FormData(form).entries());
    const q = normalizar(f.q || '').trim();
    let n = 0;
    for (const li of itens) {
      const ok = (!f.tipo || li.dataset.tipo === f.tipo) && (!f.area || li.dataset.area === f.area) && (!f.relacao || li.dataset.relacao === f.relacao)
        && (!f.estado || li.dataset.estado === f.estado) && (!q || li.dataset.busca.includes(q));
      li.hidden = !ok;
      if (ok) n++;
    }
    contagem.textContent = `${n} de ${itens.length} ligações`;
  };
  form.addEventListener('input', aplicar);
  form.addEventListener('submit', (ev) => ev.preventDefault());
  root.querySelector('[data-ir-ligacoes]')?.addEventListener('click', (ev) => { ev.preventDefault(); root.querySelector('.ligacoes-lista').scrollIntoView({ behavior: 'smooth' }); });
};

function itemHTML(estado, i) {
  if (i.livro) {
    const l = livroPorId[i.livro];
    return `<li>${link(`livro-${i.livro}`, `<em>${esc(l.titulo)}</em>`)} — ${esc(l.autor)}${livroConcluido(estado, i.livro) ? ' <span class="chip ok">lido</span>' : ''}</li>`;
  }
  const mod = moduloPorId[moduloDe[i.aula]];
  return `<li>${link(`aula-${i.aula}`, `${esc(i.aula)} — ${esc(aulaPorId[i.aula].titulo)}`)} <span class="meta">${esc(mod ? `Módulo ${mod.n}` : '')}</span>${aulaConcluida(estado, i.aula) ? ' <span class="chip ok">concluída</span>' : ''}</li>`;
}

export function integrador({ estado }, id) {
  const m = integradorPorId[id];
  if (!m) return `<p>Módulo integrador não encontrado. ${link('integradores', 'Ver todos')}</p>`;
  const pend = prereqsPendentes(m, (a) => aulaConcluida(estado, a));
  return `<nav class="migalha">${link('integradores', 'Integradores')} / ${esc(TIPOS_INTEGRADOR[m.tipo])}</nav>
  <header class="cab"><span class="num">${esc(TIPOS_INTEGRADOR[m.tipo])}</span><h1>${esc(m.titulo)}</h1><p class="sub">${esc(m.descricao)}</p></header>
  ${m.limitada ? `<div class="aviso"><strong>Cobertura limitada.</strong> ${esc(m.limitada)}</div>` : ''}
  ${Object.entries(RELACOES_INTEGRADOR).map(([rel, r]) => {
    const itens = m.itens.filter((i) => i.relacao === rel);
    return itens.length ? `<section><h2>${esc(r.nome)}</h2><p class="meta">${esc(r.desc)}</p><ul class="lista-curta">${itens.map((i) => itemHTML(estado, i)).join('')}</ul></section>` : '';
  }).join('')}
  <section class="painel-revisao"><h2>Síntese</h2><p><strong>${esc(m.pergunta)}</strong></p>
    ${pend.length ? `<p class="meta">Disponível depois dos pré-requisitos: ${pend.map((i) => link(`aula-${i.aula}`, esc(i.aula))).join(', ')}.</p>`
      : `<p>Escreva a síntese no ${link('caderno', 'Caderno')} (de duas a quatro páginas). Critérios:</p><ul>${CRITERIOS_SINTESE.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`}
  </section>`;
}

/** Bloco para a página da aula: os integradores em que ela aparece. */
const MAX_LIGADAS = 8;

/** Na aula: cada módulo integrador em que ela entra, com a pergunta que justifica a ligação e as aulas de outras áreas. */
export function integradoresDaAulaHTML(aulaId, estado) {
  const lista = integradoresDaAula(aulaId);
  if (!lista.length) return '';
  const meuModulo = aulaMeta[aulaId]?.modulo;
  const bloco = ({ modulo: m, relacao }) => {
    const ligadas = m.itens.filter((i) => i.aula && i.aula !== aulaId && aulaMeta[i.aula] && aulaMeta[i.aula].modulo !== meuModulo);
    const item = (i) => {
      const a = aulaMeta[i.aula];
      const feita = estado && aulaConcluida(estado, i.aula);
      return `<li>${link(`aula-${i.aula}`, esc(a.titulo))}<br><span class="meta">${esc(moduloPorId[a.modulo].titulo)} · ${esc(RELACOES_INTEGRADOR[i.relacao].nome.toLowerCase())}</span>${feita ? ' <span class="chip ok">concluída</span>' : ''}</li>`;
    };
    return `<div class="ligacao">
      <h3>${link(`integrador-${m.id}`, esc(m.titulo))} <span class="meta">(${esc(TIPOS_INTEGRADOR[m.tipo])})</span></h3>
      <p><strong>Pergunta que une estas aulas:</strong> ${esc(m.pergunta)}</p>
      <p class="meta">Esta aula entra como ${esc(RELACOES_INTEGRADOR[relacao].nome.toLowerCase())}: ${esc(RELACOES_INTEGRADOR[relacao].desc.toLowerCase())}</p>
      ${ligadas.length ? `<ul class="lista-curta">${ligadas.slice(0, MAX_LIGADAS).map(item).join('')}</ul>${ligadas.length > MAX_LIGADAS ? `<p class="meta">${link(`integrador-${m.id}`, `Ver as ${ligadas.length} aulas ligadas`)}</p>` : ''}` : ''}
    </div>`;
  };
  return `<section class="ligacoes"><h2>Ligações com outras disciplinas</h2>
    <p class="meta">O mesmo assunto estudado por outras áreas do curso. A relação diz por que cada aula está aqui; só o pré-requisito é exigido, e só para a síntese do módulo integrador.</p>
    ${lista.map(bloco).join('')}</section>`;
}
