// Caderno intelectual: notas vinculadas a aulas, livros, autores e conceitos; busca; exportação; nota → revisão.
import { livroPorId, LIVROS } from '../data/livros.js';
import { todasAulas } from '../data/curriculo.js';
import { CONCEITOS, conceitoPorId } from '../data/conceitos.js';
import { AUTORES, autorPorId } from '../data/autores.js';
import { normalizar, notasParaMarkdown, novoCartao } from '../core.js';
import { esc, link, fmtData, novoId, toast, copiar, salvarArquivo } from '../ui.js';

export const TIPOS_NOTA = { resumo: 'Resumo', conceito: 'Conceito', argumento: 'Argumento', pergunta: 'Pergunta em aberto', trecho: 'Trecho e referência', livre: 'Livre' };
const aulaTitulo = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));

export function rotuloVinculo(v) {
  if (!v) return '';
  if (v.tipo === 'aula') return `Aula ${v.id}: ${aulaTitulo[v.id] || ''}`;
  if (v.tipo === 'livro') return `Livro: ${livroPorId[v.id]?.titulo || v.id}`;
  if (v.tipo === 'conceito') return `Conceito: ${conceitoPorId[v.id]?.termo || v.id}`;
  if (v.tipo === 'autor') return `Autor: ${autorPorId[v.id]?.nome || v.id}`;
  return '';
}
const hrefVinculo = (v) => (v ? { aula: `aula-${v.id}`, livro: `livro-${v.id}`, conceito: `conceito-${v.id}`, autor: 'autores' }[v.tipo] : null);

let filtro = { q: '', tipo: '' };

export function caderno({ estado }) {
  const q = normalizar(filtro.q);
  const notas = estado.notas
    .filter((n) => (!q || normalizar(`${n.titulo} ${n.texto} ${n.pagina} ${rotuloVinculo(n.vinculo)}`).includes(q)) && (!filtro.tipo || n.tipo === filtro.tipo))
    .slice().sort((a, b) => (b.editada || b.criada) - (a.editada || a.criada));
  return `<header class="cab"><h1>Caderno intelectual</h1><p class="sub">Notas vinculadas a aulas, livros, autores e conceitos. Uma nota pode virar cartão de revisão.</p>
    <div class="acoes-aula"><button class="btn primario" data-acao="nova">Nova nota</button><button class="btn" data-acao="exportar">Exportar notas (Markdown)</button></div>
    <textarea id="export-area" class="export-area" hidden readonly aria-label="Texto exportado"></textarea></header>
  <form class="filtros" id="filtro-notas" role="search">
    <label class="campo largo"><span>Buscar no caderno</span><input type="search" id="n-q" name="q" value="${esc(filtro.q)}"></label>
    <label class="campo"><span>Tipo</span><select id="n-tipo" name="tipo"><option value="">Todos</option>${Object.entries(TIPOS_NOTA).map(([k, v]) => `<option value="${k}" ${filtro.tipo === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
  </form>
  ${estado.notas.length === 0 ? '<div class="vazio"><p><strong>Seu caderno está vazio.</strong> Crie a primeira nota com o botão acima, ou use "Nova nota desta aula" dentro de uma aula ou de um livro.</p></div>' : ''}
  <ul class="lista-notas">${notas.map((n) => `<li><a href="#nota-${n.id}">
    <span class="num">${TIPOS_NOTA[n.tipo] || 'Livre'} · ${fmtData(n.editada || n.criada)}</span>
    <strong>${esc(n.titulo || 'Sem título')}</strong>
    ${n.vinculo ? `<span class="meta">${esc(rotuloVinculo(n.vinculo))}${n.pagina ? ` · ${esc(n.pagina)}` : ''}</span>` : ''}
    <p>${esc((n.texto || '').slice(0, 220))}</p></a></li>`).join('')}</ul>`;
}

caderno.ligar = (root, ctx) => {
  let t;
  root.querySelector('#filtro-notas').addEventListener('input', (ev) => {
    clearTimeout(t);
    t = setTimeout(() => { filtro = Object.fromEntries(new FormData(ev.currentTarget || root.querySelector('#filtro-notas')).entries()); ctx.render({ manterRolagem: true, foco: document.activeElement?.id }); }, 250);
  });
  root.querySelector('#filtro-notas').addEventListener('submit', (e) => e.preventDefault());
  root.querySelector('[data-acao="nova"]').addEventListener('click', () => ctx.novaNota(null, ''));
  root.querySelector('[data-acao="exportar"]').addEventListener('click', async () => {
    const md = notasParaMarkdown(ctx.estado.notas, rotuloVinculo);
    if (await salvarArquivo(`caderno-academia-${new Date().toISOString().slice(0, 10)}.md`, md)) return;
    await copiar(md, root.querySelector('#export-area'));
  });
};

const opcoesVinculo = (v) => {
  const grupo = (rot, tipo, itens) => `<optgroup label="${rot}">${itens.map(([id, nome]) => `<option value="${tipo}:${esc(id)}" ${v && v.tipo === tipo && v.id === id ? 'selected' : ''}>${esc(nome)}</option>`).join('')}</optgroup>`;
  return `<option value="">Sem vínculo</option>
    ${grupo('Aulas', 'aula', todasAulas.map((a) => [a.id, `${a.id} — ${a.titulo}`]))}
    ${grupo('Livros', 'livro', LIVROS.map((l) => [l.id, l.titulo]))}
    ${grupo('Autores', 'autor', AUTORES.map((a) => [a.id, a.nome]))}
    ${grupo('Conceitos', 'conceito', CONCEITOS.map((c) => [c.id, c.termo]))}`;
};

export function nota({ estado }, id) {
  const n = estado.notas.find((x) => x.id === id);
  if (!n) return `<p>Nota não encontrada. ${link('caderno', 'Voltar ao caderno')}</p>`;
  const href = hrefVinculo(n.vinculo);
  return `<nav class="migalha">${link('caderno', 'Caderno')} / Nota</nav>
  <form class="form-nota" id="form-nota">
    <label class="campo largo"><span>Título</span><input id="nt-titulo" name="titulo" value="${esc(n.titulo)}" required></label>
    <div class="grade-3">
      <label class="campo"><span>Tipo</span><select id="nt-tipo" name="tipo">${Object.entries(TIPOS_NOTA).map(([k, v]) => `<option value="${k}" ${n.tipo === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label class="campo"><span>Vinculada a</span><select id="nt-vinculo" name="vinculo">${opcoesVinculo(n.vinculo)}</select></label>
      <label class="campo"><span>Página ou trecho</span><input id="nt-pagina" name="pagina" value="${esc(n.pagina || '')}" placeholder="ex.: p. 42 ou §158"></label>
    </div>
    <div class="campo largo vinculos-extra"><span>Outros vínculos (a nota aparece também nessas páginas)</span>
      ${(n.vinculos || []).length ? `<ul class="lista-curta">${n.vinculos.map((v, i) => `<li>${hrefVinculo(v) ? link(hrefVinculo(v), esc(rotuloVinculo(v))) : esc(rotuloVinculo(v))} <button type="button" class="btn pequeno" data-remover-vinculo="${i}" aria-label="Remover vínculo ${esc(rotuloVinculo(v))}">×</button></li>`).join('')}</ul>` : ''}
      <select id="nt-mais" aria-label="Adicionar outro vínculo">${opcoesVinculo(null).replace('Sem vínculo', 'Adicionar outro vínculo…')}</select></div>
    <label class="campo largo"><span>Texto</span><textarea id="nt-texto" name="texto" rows="14">${esc(n.texto)}</textarea></label>
    <p class="meta">Criada em ${fmtData(n.criada)} · editada em ${fmtData(n.editada)} ${href ? `· ${link(href, 'Abrir vínculo')}` : ''}</p>
    <div class="acoes-aula"><button class="btn primario" type="submit">Salvar</button>
      <button class="btn" type="button" data-acao="revisao">Transformar em questão de revisão</button>
      <button class="btn perigo" type="button" data-acao="excluir">Excluir nota</button></div>
    <div class="confirmar" id="confirmar-exclusao" hidden><p>Excluir esta nota definitivamente?</p><button class="btn perigo" type="button" data-acao="excluir-sim">Sim, excluir</button> <button class="btn" type="button" data-acao="excluir-nao">Cancelar</button></div>
  </form>
  <div class="revisao-form" id="revisao-form" hidden><h2>Nova questão de revisão</h2>
    <label class="campo largo"><span>Pergunta (frente)</span><input id="rv-frente" value="${esc(n.titulo)}"></label>
    <label class="campo largo"><span>Resposta (verso)</span><textarea id="rv-verso" rows="4">${esc((n.texto || '').slice(0, 500))}</textarea></label>
    <button class="btn primario" type="button" data-acao="criar-cartao">Criar cartão</button></div>`;
}

nota.ligar = (root, ctx, id) => {
  const form = root.querySelector('#form-nota');
  const ler = () => {
    const fd = Object.fromEntries(new FormData(form).entries());
    const [tipoV, ...resto] = (fd.vinculo || '').split(':');
    return { titulo: fd.titulo.trim(), tipo: fd.tipo, pagina: fd.pagina.trim(), texto: fd.texto, vinculo: tipoV ? { tipo: tipoV, id: resto.join(':') } : null };
  };
  const salvar = (render) => ctx.set((e) => ({ ...e, notas: e.notas.map((n) => (n.id === id ? { ...n, ...ler(), editada: Date.now() } : n)) }), { render });
  const mudarVinculos = (fn) => ctx.set((e) => ({ ...e, notas: e.notas.map((n) => (n.id === id ? { ...n, ...ler(), vinculos: fn(n.vinculos || []), editada: Date.now() } : n)) }), { manterRolagem: true });
  root.querySelector('#nt-mais').addEventListener('change', (ev) => {
    const [tipo, ...resto] = ev.target.value.split(':');
    if (!tipo) return;
    const v = { tipo, id: resto.join(':') };
    mudarVinculos((vs) => (vs.some((x) => x.tipo === v.tipo && x.id === v.id) ? vs : [...vs, v]));
  });
  let t;
  form.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => salvar(false), 800); });
  form.addEventListener('submit', (ev) => { ev.preventDefault(); clearTimeout(t); salvar(false); toast('Nota salva.'); });
  root.addEventListener('click', (ev) => {
    const a = ev.target.closest('[data-acao]')?.dataset.acao;
    const rem = ev.target.closest('[data-remover-vinculo]');
    if (rem) { const i = Number(rem.dataset.removerVinculo); mudarVinculos((vs) => vs.filter((_, j) => j !== i)); return; }
    if (a === 'excluir') root.querySelector('#confirmar-exclusao').hidden = false;
    if (a === 'excluir-nao') root.querySelector('#confirmar-exclusao').hidden = true;
    if (a === 'excluir-sim') { clearTimeout(t); ctx.set((e) => ({ ...e, notas: e.notas.filter((n) => n.id !== id) }), { render: false }); toast('Nota excluída.'); ctx.nav('caderno'); }
    if (a === 'revisao') {
      const f = root.querySelector('#revisao-form');
      const atual = ler();
      root.querySelector('#rv-frente').value ||= atual.titulo;
      root.querySelector('#rv-verso').value ||= atual.texto.slice(0, 500);
      f.hidden = false; f.scrollIntoView({ behavior: 'smooth' });
    }
    if (a === 'criar-cartao') {
      const frente = root.querySelector('#rv-frente').value.trim(), verso = root.querySelector('#rv-verso').value.trim();
      if (!frente || !verso) { toast('Preencha pergunta e resposta.'); return; }
      ctx.set((e) => ({ ...e, revisoes: [...e.revisoes, novoCartao(frente, verso, `nota:${id}`)] }), { render: false });
      root.querySelector('#revisao-form').hidden = true;
      toast('Cartão criado. Primeira revisão amanhã.');
    }
  });
};

/** Cria uma nota nova e devolve o id (usado pelas aulas, livros e caderno). */
export function criarNota(set, vinculo, titulo) {
  const id = novoId('n');
  set((e) => ({ ...e, notas: [...e.notas, { id, titulo: titulo || 'Nova nota', texto: '', tipo: vinculo ? 'resumo' : 'livre', vinculo, pagina: '', criada: Date.now(), editada: Date.now() }] }), { render: false });
  return id;
}
