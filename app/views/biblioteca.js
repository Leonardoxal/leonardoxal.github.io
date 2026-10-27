// Biblioteca pesquisável e página de cada livro com registro de leitura.
import { LIVROS, livroPorId } from '../data/livros.js';
import { moduloPorId } from '../data/curriculo.js';
import { buscaCatalogo } from '../data/fontes.js';
import { pctLivro, normalizar } from '../core.js';
import { esc, barra, link, linkExterno, botaoFav, fmtData, ESTADOS_LIVRO, TIPOS_LIVRO, toast } from '../ui.js';

const FILTROS_VAZIOS = { q: '', autor: '', area: '', nivel: '', modulo: '', estado: '', prioridade: '', fav: false };
let filtros = { ...FILTROS_VAZIOS };
const PRIORIDADES = { alta: 'Alta', media: 'Média', baixa: 'Baixa' };
const opcoes = (vals, sel) => vals.map(([v, r]) => `<option value="${esc(v)}" ${String(sel) === String(v) ? 'selected' : ''}>${esc(r)}</option>`).join('');
const unicos = (f) => [...new Set(LIVROS.map(f))].sort((a, b) => a.localeCompare(b, 'pt'));
const estadoDe = (estado, id) => estado.livros[id]?.estado || 'nao';

function filtrar(estado) {
  const q = normalizar(filtros.q);
  return LIVROS.filter((l) => {
    const st = estado.livros[l.id] || {};
    return (!q || normalizar(`${l.titulo} ${l.autor} ${l.objetivo}`).includes(q))
      && (!filtros.autor || l.autor === filtros.autor)
      && (!filtros.area || l.area === filtros.area)
      && (!filtros.nivel || String(l.nivel) === filtros.nivel)
      && (!filtros.modulo || l.modulo === filtros.modulo)
      && (!filtros.estado || estadoDe(estado, l.id) === filtros.estado)
      && (!filtros.prioridade || st.prioridade === filtros.prioridade)
      && (!filtros.fav || estado.favoritos.includes(`livro:${l.id}`));
  }).sort((a, b) => a.degrau - b.degrau || a.ordem - b.ordem);
}

export function biblioteca({ estado }) {
  const lista = filtrar(estado);
  return `<header class="cab"><h1>Biblioteca</h1>
    <p class="sub">${LIVROS.length} títulos numa única sequência de leitura: introduções, depois a obra completa de cada autor estudado, degrau por degrau. Links externos levam apenas a fontes oficiais verificadas; os demais livros têm busca em catálogo bibliográfico.</p></header>
  <form class="filtros" id="filtros" role="search">
    <label class="campo largo"><span>Buscar</span><input type="search" id="f-q" name="q" value="${esc(filtros.q)}" placeholder="Título, autor ou assunto"></label>
    <label class="campo"><span>Autor</span><select id="f-autor" name="autor"><option value="">Todos</option>${opcoes(unicos((l) => l.autor).map((a) => [a, a]), filtros.autor)}</select></label>
    <label class="campo"><span>Área</span><select id="f-area" name="area"><option value="">Todas</option>${opcoes(unicos((l) => l.area).map((a) => [a, a]), filtros.area)}</select></label>
    <label class="campo"><span>Dificuldade</span><select id="f-nivel" name="nivel"><option value="">Todas</option>${opcoes([1, 2, 3, 4, 5].map((n) => [n, `${n} de 5`]), filtros.nivel)}</select></label>
    <label class="campo"><span>Módulo</span><select id="f-modulo" name="modulo"><option value="">Todos</option>${opcoes(Object.values(moduloPorId).map((m) => [m.id, `${m.n}. ${m.titulo}`]), filtros.modulo)}</select></label>
    <label class="campo"><span>Estado</span><select id="f-estado" name="estado"><option value="">Todos</option>${opcoes(Object.entries(ESTADOS_LIVRO), filtros.estado)}</select></label>
    <label class="campo"><span>Prioridade</span><select id="f-prioridade" name="prioridade"><option value="">Todas</option>${opcoes(Object.entries(PRIORIDADES), filtros.prioridade)}</select></label>
    <label class="opcao"><input type="checkbox" id="f-fav" name="fav" ${filtros.fav ? 'checked' : ''}> <span>Só favoritos</span></label>
    <button type="button" class="btn" data-acao="limpar">Limpar filtros</button>
  </form>
  <p class="meta" aria-live="polite">${lista.length} resultado(s)</p>
  <ul class="grade-livros">${lista.map((l) => {
    const st = estadoDe(estado, l.id);
    return `<li class="cartao-livro"><a href="#livro-${l.id}">
      <span class="num">Degrau ${l.degrau} · ${l.ordem}º · ${TIPOS_LIVRO[l.tipo]}</span>
      <h3>${esc(l.titulo)}</h3><p class="autor">${esc(l.autor)}</p>
      <div class="linha-meta"><span>${esc(l.area)}</span><span>Dificuldade ${l.nivel}/5</span><span class="chip ${st}">${ESTADOS_LIVRO[st]}</span>${l.verificacao !== 'confirmado' ? '<span class="chip alerta">dados a confirmar</span>' : ''}</div>
      ${st === 'lendo' || st === 'pausado' ? barra(pctLivro(estado, l.id)) : ''}</a></li>`;
  }).join('')}</ul>`;
}

biblioteca.ligar = (root, ctx) => {
  const form = root.querySelector('#filtros');
  let t;
  const aplicar = () => {
    const fd = new FormData(form);
    filtros = { ...filtros, ...Object.fromEntries([...fd.entries()].map(([k, v]) => [k, String(v)])), fav: form.querySelector('#f-fav').checked };
    ctx.render({ manterRolagem: true, foco: document.activeElement?.id });
  };
  form.addEventListener('input', (ev) => { clearTimeout(t); t = setTimeout(aplicar, ev.target.type === 'search' ? 250 : 0); });
  form.addEventListener('submit', (ev) => ev.preventDefault());
  root.querySelector('[data-acao="limpar"]').addEventListener('click', () => { filtros = { ...FILTROS_VAZIOS }; ctx.render(); });
};

/** Referência no formato AUTOR. Título. (dados de edição a completar pelo estudante). */
const referencia = (l, st) => `${l.autor.toUpperCase()}. <em>${esc(l.titulo)}</em>.${l.ano ? ` [Original: ${esc(l.ano)}.]` : ''} ${st.edicao ? esc(st.edicao) + '.' : '[Edição utilizada: registrar abaixo.]'}`;

export function livro({ estado }, id) {
  const l = livroPorId[id];
  if (!l) return '<p>Livro não encontrado.</p>';
  const st = { estado: 'nao', ...estado.livros[id] };
  const notas = estado.notas.filter((n) => n.vinculo?.tipo === 'livro' && n.vinculo.id === id);
  const m = l.modulo && moduloPorId[l.modulo];
  return `<nav class="migalha">${link('biblioteca', 'Biblioteca')} / Degrau ${l.degrau}</nav>
  <header class="cab"><span class="num">Degrau ${l.degrau} · ${l.ordem}º na ordem de leitura ·${TIPOS_LIVRO[l.tipo]}</span>
    <h1>${esc(l.titulo)} ${botaoFav(estado, 'livro', id)}</h1><p class="autor">${esc(l.autor)}</p></header>
  ${l.verificacao !== 'confirmado' ? `<div class="aviso"><strong>Dados a confirmar.</strong> ${esc(l.nota || 'Confirme título e edição em catálogo antes de adquirir.')}</div>` : ''}
  <div class="grade-2">
    <section><h2>Ficha</h2><dl class="ficha">
      <dt>Área</dt><dd>${esc(l.area)}</dd>
      <dt>Dificuldade</dt><dd>${l.nivel} de 5</dd>
      <dt>Módulo recomendado</dt><dd>${m ? link(`mod-${m.id}`, `${m.n}. ${esc(m.titulo)}`) : '—'}</dd>
      <dt>Pré-requisitos</dt><dd>${l.prereq.length ? l.prereq.map((p) => link(`livro-${p}`, esc(livroPorId[p].titulo))).join(', ') : 'nenhum'}</dd>
      <dt>Objetivo da leitura</dt><dd>${esc(l.objetivo)}</dd>
      ${l.ano ? `<dt>Data original</dt><dd>${esc(l.ano)}</dd>` : ''}
      <dt>Edição ou tradução</dt><dd>${esc(l.edicao || 'Não indicada pelo app; registre a sua abaixo.')}</dd>
      ${l.nota && l.verificacao === 'confirmado' ? `<dt>Observação</dt><dd>${esc(l.nota)}</dd>` : ''}
      <dt>Referência</dt><dd>${referencia(l, st)}</dd>
      <dt>Acesso</dt><dd>${l.link ? `${linkExterno(l.link)} <span class="meta">(fonte oficial, verificada)</span>` : `<a href="${buscaCatalogo(l.titulo, l.autor)}" target="_blank" rel="noopener noreferrer" class="externo">Buscar no catálogo WorldCat ↗</a> <span class="meta">(busca, não link para o livro)</span>`}</dd>
    </dl></section>
    <section><h2>Minha leitura</h2>
      <form class="form-leitura" id="form-leitura">
        <label class="campo"><span>Estado</span><select id="l-estado" name="estado">${opcoes(Object.entries(ESTADOS_LIVRO), st.estado)}</select></label>
        <label class="campo"><span>Total de páginas</span><input id="l-paginas" name="paginas" type="number" min="0" inputmode="numeric" value="${st.paginas || ''}"></label>
        <label class="campo"><span>Página atual</span><input id="l-atual" name="paginaAtual" type="number" min="0" inputmode="numeric" value="${st.paginaAtual || ''}"></label>
        <label class="campo"><span>Prioridade</span><select id="l-prio" name="prioridade"><option value="">—</option>${opcoes(Object.entries(PRIORIDADES), st.prioridade || '')}</select></label>
        <label class="campo largo"><span>Edição utilizada (editora, tradutor, ano)</span><input id="l-edicao" name="edicao" value="${esc(st.edicao || '')}"></label>
        <button class="btn primario" type="submit">Salvar leitura</button>
      </form>
      ${barra(pctLivro(estado, id), 'Progresso da leitura')}<p class="meta">${pctLivro(estado, id)}% · início ${fmtData(st.inicio)} · conclusão ${fmtData(st.fim)}</p>
      <div class="acoes-aula"><button class="btn" data-acao="cronometro" data-alvo="livro:${id}">Iniciar cronômetro de leitura</button><button class="btn" data-acao="nota-livro">Nova nota deste livro</button></div>
    </section>
  </div>
  <section><h2>Anotações deste livro (${notas.length})</h2>${notas.length ? `<ul class="lista-notas">${notas.map((n) => `<li><a href="#nota-${n.id}"><strong>${esc(n.titulo || 'Sem título')}</strong>${n.pagina ? ` <span class="meta">${esc(n.pagina)}</span>` : ''}<p>${esc((n.texto || '').slice(0, 180))}</p></a></li>`).join('')}</ul>` : '<p class="meta">Nenhuma anotação ainda.</p>'}</section>`;
}

livro.ligar = (root, ctx, id) => {
  root.querySelector('#form-leitura').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    const paginas = Math.max(0, parseInt(fd.paginas, 10) || 0);
    let paginaAtual = Math.max(0, parseInt(fd.paginaAtual, 10) || 0);
    if (paginas && paginaAtual > paginas) paginaAtual = paginas;
    ctx.set((e) => {
      const ant = e.livros[id] || {};
      const novoEstado = fd.estado;
      const inicio = ant.inicio || (novoEstado !== 'nao' ? Date.now() : null);
      const fim = novoEstado === 'concluido' ? (ant.fim || Date.now()) : null;
      const atual = novoEstado === 'lendo' ? { ...e.atual, livro: id } : e.atual.livro === id && novoEstado === 'concluido' ? { ...e.atual, livro: null } : e.atual;
      return { ...e, atual, livros: { ...e.livros, [id]: { ...ant, estado: novoEstado, paginas, paginaAtual: novoEstado === 'concluido' ? paginas : paginaAtual, prioridade: fd.prioridade, edicao: fd.edicao.trim(), inicio, fim } } };
    }, { manterRolagem: true });
    toast('Leitura salva.');
  });
  root.querySelector('[data-acao="nota-livro"]').addEventListener('click', () => ctx.novaNota({ tipo: 'livro', id }, `Notas — ${livroPorId[id].titulo}`));
};
