// Módulos integradores (#integradores e #integrador-<id>): aulas e livros de várias disciplinas
// reunidos em torno de uma época, um país, um autor ou um problema, terminando numa síntese com juízo próprio.
import { INTEGRADORES, integradorPorId, TIPOS_INTEGRADOR, RELACOES_INTEGRADOR, CRITERIOS_SINTESE, prereqsPendentes, integradoresDaAula } from '../data/integradores.js';
import { aulaPorId } from '../data/aulas/index.js';
import { moduloPorId, todasAulas } from '../data/curriculo.js';
import { livroPorId } from '../data/livros.js';
import { aulaConcluida, livroConcluido } from '../core.js';
import { esc, link, barra } from '../ui.js';

const moduloDe = Object.fromEntries(todasAulas.map((a) => [a.id, a.modulo]));
const progresso = (estado, m) => {
  const aulas = m.itens.filter((i) => i.aula);
  return Math.round((aulas.filter((i) => aulaConcluida(estado, i.aula)).length / Math.max(1, aulas.length)) * 100);
};

export function integradores({ estado }) {
  const grupos = Object.entries(TIPOS_INTEGRADOR).map(([tipo, nome]) => [nome, INTEGRADORES.filter((m) => m.tipo === tipo)]).filter(([, ms]) => ms.length);
  return `<header class="cab"><h1>Módulos integradores</h1>
    <p class="sub">Cada módulo reúne aulas e livros de várias disciplinas em torno de uma época, um país, um autor ou um problema, e termina com uma síntese em que você responde a uma pergunta com juízo próprio. Os integradores não substituem as aulas nem as avaliações; só os pré-requisitos bloqueiam a síntese.</p></header>
  ${grupos.map(([nome, ms]) => `<section><h2>${esc(nome)}</h2><ul class="lista-aval">${ms.map((m) => `<li><a href="#integrador-${m.id}">
      <strong>${esc(m.titulo)}</strong><p>${esc(m.pergunta)}</p>
      <span class="meta">${m.itens.length} ligações${m.limitada ? ' · cobertura limitada' : ''}</span>${barra(progresso(estado, m), `Aulas concluídas de ${m.titulo}`)}</a></li>`).join('')}</ul></section>`).join('')}`;
}

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
export function integradoresDaAulaHTML(aulaId) {
  const lista = integradoresDaAula(aulaId);
  return lista.length ? `<p class="meta">Também em: ${lista.map((x) => `${link(`integrador-${x.modulo.id}`, esc(x.modulo.titulo))} (${esc(RELACOES_INTEGRADOR[x.relacao].nome.toLowerCase())})`).join(', ')}.</p>` : '';
}
