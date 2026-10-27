// Avaliações (provas, lógica, comparações, final), histórico e revisões periódicas.
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { aulaPorId } from '../data/aulas/index.js';
import { moduloPorId } from '../data/curriculo.js';
import { melhorNota, revisoesPendentes, responderCartao, novoCartao } from '../core.js';
import { esc, link, fmtData, toast } from '../ui.js';
import { quizHTML, ligarQuiz } from './quiz.js';

const TIPOS = { prova: 'Prova de módulo', logica: 'Lógica', comparacao: 'Comparação entre autores', final: 'Avaliação final' };

export function avaliacoes({ estado }) {
  const pend = revisoesPendentes(estado.revisoes);
  const quizzes = Object.values(aulaPorId).filter((a) => a.tipo !== 'avaliacao').map((a) => ({ id: `quiz-${a.id}`, titulo: `Questionário — ${a.titulo}`, aula: a.id }));
  const historico = Object.entries(estado.tentativas).flatMap(([id, ts]) => ts.map((t) => ({ id, ...t }))).sort((a, b) => b.data - a.data).slice(0, 30);
  const nomeAval = (id) => avaliacaoPorId[id]?.titulo || quizzes.find((q) => q.id === id)?.titulo || id;
  return `<header class="cab"><h1>Avaliações e revisões</h1><p class="sub">Toda correção explica o porquê. Questões discursivas aceitam respostas diferentes quando bem fundamentadas.</p></header>
  <section class="painel-revisao"><h2>Revisões periódicas</h2>
    <p>${pend.length ? `<strong>${pend.length}</strong> cartão(ões) para revisar hoje.` : 'Nenhuma revisão pendente hoje.'} Total de cartões: ${estado.revisoes.length}.</p>
    <div class="acoes-aula">${pend.length ? '<a class="btn primario" href="#revisar">Revisar agora</a>' : ''}<a class="btn" href="#cartoes">Ver e criar cartões</a></div></section>
  <section><h2>Avaliações</h2><ul class="lista-aval">${AVALIACOES.map((a) => {
    const n = melhorNota(estado, a.id);
    return `<li><a href="#aval-${a.id}"><span class="num">${TIPOS[a.tipo]}${a.modulo ? ` · Módulo ${moduloPorId[a.modulo].n}` : ''}</span><strong>${esc(a.titulo)}</strong><p>${esc(a.descricao)}</p>${n >= 0 ? `<span class="chip ${n >= a.minimo ? 'ok' : 'alerta'}">melhor: ${n}%</span>` : ''}</a></li>`;
  }).join('')}</ul></section>
  <section><h2>Questionários das aulas</h2><ul class="lista-curta">${quizzes.map((q) => { const n = melhorNota(estado, q.id); return `<li>${link(`aula-${q.aula}`, esc(q.titulo))} ${n >= 0 ? `<span class="meta">melhor: ${n}%</span>` : '<span class="meta">não feito</span>'}</li>`; }).join('')}</ul></section>
  <section><h2>Histórico de avaliações</h2>${historico.length ? `<div class="tabela-wrap"><table><thead><tr><th>Data</th><th>Avaliação</th><th>Acertos</th><th>Nota</th></tr></thead><tbody>${historico.map((h) => `<tr><td>${fmtData(h.data)}</td><td>${esc(nomeAval(h.id))}</td><td class="num-tab">${h.acertos}/${h.total}</td><td class="num-tab">${h.pct}%</td></tr>`).join('')}</tbody></table></div>` : '<p class="meta">Nenhuma tentativa registrada ainda.</p>'}</section>`;
}

export function avaliacao({ estado }, id) {
  const a = avaliacaoPorId[id];
  if (!a) return '<p>Avaliação não encontrada.</p>';
  return `<nav class="migalha">${link('avaliacoes', 'Avaliações')} / ${TIPOS[a.tipo]}</nav>
  <header class="cab"><h1>${esc(a.titulo)}</h1><p class="sub">${esc(a.descricao)}</p>${a.minimo ? `<p class="meta">Nota mínima: ${a.minimo}%. Vale a melhor tentativa.</p>` : ''}</header>
  ${quizHTML(a.itens, a.id, a.id, estado, a.minimo || 0)}`;
}
avaliacao.ligar = (root, ctx, id) => ligarQuiz(root, avaliacaoPorId[id].itens, ctx);

export function revisar({ estado }) {
  const pend = revisoesPendentes(estado.revisoes);
  if (!pend.length) return `<nav class="migalha">${link('avaliacoes', 'Avaliações')} / Revisar</nav><div class="vazio"><p><strong>Tudo revisado por hoje.</strong> Novos cartões surgem ao concluir aulas ("Gerar cartões de revisão") ou a partir de notas do Caderno.</p>${link('cartoes', 'Ver todos os cartões', 'btn')}</div>`;
  const c = pend[0];
  return `<nav class="migalha">${link('avaliacoes', 'Avaliações')} / Revisar</nav>
  <section class="cartao-revisao"><span class="num">${pend.length} restante(s) · nível ${c.nivel + 1} de 7</span>
    <h2>${esc(c.frente)}</h2>
    <div id="verso" hidden><p>${esc(c.verso)}</p>
      <p class="dica">Seja honesto: marcar "lembrei" sem lembrar só adia o problema.</p>
      <div class="acoes-aula"><button class="btn primario" data-resp="1">Lembrei</button><button class="btn" data-resp="0">Não lembrei</button></div></div>
    <button class="btn primario" id="mostrar">Mostrar resposta</button></section>`;
}
revisar.ligar = (root, ctx) => {
  const c = revisoesPendentes(ctx.estado.revisoes)[0];
  if (!c) return;
  root.querySelector('#mostrar').addEventListener('click', (ev) => { root.querySelector('#verso').hidden = false; ev.target.hidden = true; root.querySelector('[data-resp="1"]').focus(); });
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-resp]');
    if (!b) return;
    ctx.set((e) => ({ ...e, revisoes: e.revisoes.map((r) => (r.id === c.id ? responderCartao(r, b.dataset.resp === '1') : r)) }));
  });
};

export function cartoes({ estado }) {
  const lista = estado.revisoes.slice().sort((a, b) => a.proxima - b.proxima);
  return `<nav class="migalha">${link('avaliacoes', 'Avaliações')} / Cartões</nav>
  <header class="cab"><h1>Cartões de revisão</h1></header>
  <form class="revisao-form" id="novo-cartao"><h2>Novo cartão</h2>
    <label class="campo largo"><span>Pergunta</span><input id="nc-frente" name="frente" required></label>
    <label class="campo largo"><span>Resposta</span><textarea id="nc-verso" name="verso" rows="3" required></textarea></label>
    <button class="btn primario" type="submit">Criar</button></form>
  ${lista.length ? `<div class="tabela-wrap"><table><thead><tr><th>Pergunta</th><th>Próxima revisão</th><th>Nível</th><th></th></tr></thead><tbody>
    ${lista.map((r) => `<tr><td>${esc(r.frente)}</td><td>${fmtData(r.proxima)}</td><td class="num-tab">${r.nivel + 1}</td><td><button class="btn pequeno" data-apagar="${r.id}">Excluir</button></td></tr>`).join('')}</tbody></table></div>` : '<p class="meta">Nenhum cartão ainda.</p>'}`;
}
cartoes.ligar = (root, ctx) => {
  root.querySelector('#novo-cartao').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    if (!fd.frente.trim() || !fd.verso.trim()) return;
    ctx.set((e) => ({ ...e, revisoes: [...e.revisoes, novoCartao(fd.frente.trim(), fd.verso.trim(), 'manual')] }));
    toast('Cartão criado.');
  });
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-apagar]');
    if (!b) return;
    if (b.dataset.confirmar !== '1') { b.dataset.confirmar = '1'; b.textContent = 'Confirmar'; return; }
    ctx.set((e) => ({ ...e, revisoes: e.revisoes.filter((r) => r.id !== b.dataset.apagar) }), { manterRolagem: true });
  });
};
