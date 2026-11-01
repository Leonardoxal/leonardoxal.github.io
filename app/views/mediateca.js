// Biblioteca e mediateca (#mediateca e #obra-<id>): todas as obras, de todos os tipos de mídia, com filtros.
import { OBRAS, obraPorId, CATEGORIAS, FONTES, contagemPorCategoria, RELACOES_OBRA, obrasDoModulo, obrasDaDisciplina } from '../data/mediateca.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { moduloPorId } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { normalizar } from '../core.js';
import { esc, link, linkExterno, botaoFav, fmtData, toast, ESTADOS_LIVRO } from '../ui.js';
import { notasDe } from './conexoes.js';

const POR_PAGINA = 60;
// filtros da sessão (como a consulta da Busca): não precisam sobreviver ao recarregar
const filtro = { categoria: '', disciplina: '', modulo: '', texto: '', limite: POR_PAGINA, preset: '' };

/** Leituras recomendadas pelas listas externas para o módulo de uma aula (escada) ou para a sua disciplina. */
export function leiturasRecomendadasHTML(m, max = 8, estado = null) {
  if (!m) return '';
  const escada = m.degrau !== null;
  const obras = escada ? obrasDoModulo(m.id) : obrasDaDisciplina(m.disciplina);
  if (!obras.length) return '';
  const alvo = escada ? `m-${m.id}` : `d-${m.disciplina}`;
  const destaque = [...obras.filter((o) => o.criador), ...obras.filter((o) => !o.criador)].slice(0, max);
  const feita = (o) => estado?.livros?.[o.id]?.estado === 'concluido';
  return `<section class="leituras-recomendadas"><h2>Obras ${escada ? 'deste módulo' : `de ${esc(disciplinaPorId[m.disciplina]?.nome || m.disciplina)}`}</h2>
    <p class="meta">${obras.length} obra(s), indicadas nas listas do Contra os Acadêmicos${escada && obras.some((o) => o.fontes.some((f) => f.fonte === 'olavo-cof')) ? ' e nas aulas do COF' : ''}.</p>
    <ul class="lista-curta">${destaque.map((o) => `<li>${link(o.livro ? `livro-${o.livro}` : `obra-${o.id}`, `<em>${esc(o.titulo)}</em>`)}${o.criador ? ` — ${esc(o.criador)}` : ''} <span class="meta">${esc(CATEGORIAS[o.categoria])}</span>${feita(o) ? ' <span class="chip ok">concluída</span>' : ''}</li>`).join('')}</ul>
    ${obras.length > max ? link(`mediateca-${alvo}`, `Ver as ${obras.length} obras na mediateca`, 'btn') : ''}</section>`;
}

const NAO_INFORMADO = '<span class="meta">não informado</span>';
const campo = (v) => (v && String(v).trim() ? esc(v) : NAO_INFORMADO);

function filtrar() {
  const termos = normalizar(filtro.texto).split(/\s+/).filter(Boolean);
  return OBRAS.filter((o) => (!filtro.categoria || o.categoria === filtro.categoria)
    && (!filtro.disciplina || o.disciplinas.includes(filtro.disciplina))
    && (!filtro.modulo || o.modulos.includes(filtro.modulo))
    && termos.every((t) => normalizar(`${o.titulo} ${o.criador} ${o.temas.join(' ')}`).includes(t)));
}

export function mediateca(_ctx, id = '') {
  // #mediateca-d-<disciplina> e #mediateca-m-<módulo> abrem a mediateca já filtrada (links das aulas)
  if ((id || '') !== filtro.preset) {
    Object.assign(filtro, { preset: id || '', categoria: '', texto: '', limite: POR_PAGINA,
      disciplina: id?.startsWith('d-') ? id.slice(2) : '', modulo: id?.startsWith('m-') ? id.slice(2) : '' });
  }
  const lista = filtrar();
  const disciplinas = [...new Set(OBRAS.flatMap((o) => o.disciplinas))].sort();
  const vazias = Object.entries(contagemPorCategoria).filter(([, n]) => !n).map(([c]) => CATEGORIAS[c]);
  return `<header class="cab"><h1>Biblioteca e mediateca</h1>
    <p class="sub">${OBRAS.length} obras num registro único: os 607 livros do acervo e as obras das bibliografias das disciplinas. Uma obra citada em várias listas tem um só registro, com todas as fontes. Campos sem informação aparecem como "não informado"; nada é preenchido por suposição.</p></header>
  <form class="filtros" id="f-midia" role="search">
    <label class="campo"><span>Tipo de mídia</span><select name="categoria"><option value="">Todas</option>${Object.entries(CATEGORIAS).map(([c, nome]) => `<option value="${c}" ${filtro.categoria === c ? 'selected' : ''} ${contagemPorCategoria[c] ? '' : 'disabled'}>${esc(nome)} (${contagemPorCategoria[c]})</option>`).join('')}</select></label>
    <label class="campo"><span>Disciplina</span><select name="disciplina"><option value="">Todas</option>${disciplinas.map((d) => `<option value="${d}" ${filtro.disciplina === d ? 'selected' : ''}>${esc(disciplinaPorId[d]?.nome || d)}</option>`).join('')}</select></label>
    <label class="campo largo"><span>Título, autor ou tema</span><input type="search" id="m-q" name="texto" value="${esc(filtro.texto)}"></label>
  </form>
  ${filtro.modulo ? `<p class="meta">Filtro ativo: leituras do ${link(`mod-${filtro.modulo}`, esc(`Módulo ${moduloPorId[filtro.modulo]?.n}: ${moduloPorId[filtro.modulo]?.titulo}`))} · ${link('mediateca', 'limpar')}</p>` : ''}
  <p class="meta">${lista.length} obra(s).${vazias.length ? ` Categorias ainda sem registros: ${esc(vazias.join(', '))}. Elas recebem obras na expansão bibliográfica, sempre com a fonte declarada.` : ''}</p>
  <ul class="lista-busca">${lista.slice(0, filtro.limite).map((o) => `<li><span class="chip">${esc(CATEGORIAS[o.categoria])}</span> ${link(`obra-${o.id}`, `<em>${esc(o.titulo)}</em>`)} — ${esc(o.criador)}${o.data ? ` (${esc(o.data)})` : ''}${o.fontes.length > 1 ? ` <span class="meta">${o.fontes.length} fontes</span>` : ''}</li>`).join('')}</ul>
  ${lista.length > filtro.limite ? `<button class="btn" id="m-mais">Mostrar mais ${Math.min(POR_PAGINA, lista.length - filtro.limite)}</button>` : ''}`;
}

mediateca.ligar = (root, ctx) => {
  const form = root.querySelector('#f-midia');
  const aplicar = (foco) => {
    const fd = new FormData(form);
    Object.assign(filtro, { categoria: fd.get('categoria'), disciplina: fd.get('disciplina'), texto: fd.get('texto'), limite: POR_PAGINA });
    ctx.render({ foco });
  };
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('change', (e) => { if (e.target.name !== 'texto') aplicar(); });
  let t;
  root.querySelector('#m-q').addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => aplicar('m-q'), 200); });
  root.querySelector('#m-mais')?.addEventListener('click', () => { filtro.limite += POR_PAGINA; ctx.render({ manterRolagem: true }); });
};

// Todas as obras usam o mesmo registro de leitura dos livros do acervo (estado.livros[id]), as mesmas notas e os favoritos.
const PRIORIDADES = { alta: 'Alta', media: 'Média', baixa: 'Baixa' };
const opcoes = (vals, sel) => vals.map(([v, r]) => `<option value="${esc(v)}" ${String(sel) === String(v) ? 'selected' : ''}>${esc(r)}</option>`).join('');

obra.ligar = (root, ctx, id) => {
  root.querySelector('#form-obra')?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    ctx.set((e) => {
      const ant = e.livros[id] || {};
      const inicio = ant.inicio || (fd.estado !== 'nao' ? Date.now() : null);
      const fim = fd.estado === 'concluido' ? (ant.fim || Date.now()) : null;
      return { ...e, livros: { ...e.livros, [id]: { ...ant, estado: fd.estado, prioridade: fd.prioridade, edicao: fd.edicao.trim(), inicio, fim } } };
    }, { manterRolagem: true });
    toast('Salvo.');
  });
  root.querySelector('[data-acao="nota-obra"]')?.addEventListener('click', () => ctx.novaNota({ tipo: 'livro', id }, `Notas — ${obraPorId[id].titulo}`));
};

export function obra({ estado }, id) {
  const o = obraPorId[id];
  if (!o) return `<p>Obra não encontrada. ${link('mediateca', 'Voltar à mediateca')}</p>`;
  const linha = (rotulo, valor) => `<tr><th scope="row">${rotulo}</th><td>${valor}</td></tr>`;
  const st = { estado: 'nao', ...estado.livros[id] };
  const notas = notasDe(estado, 'livro', id);
  return `<nav class="migalha">${link('mediateca', 'Mediateca')} / ${esc(CATEGORIAS[o.categoria])}</nav>
  <header class="cab"><span class="num">${esc(CATEGORIAS[o.categoria])}</span><h1>${esc(o.titulo)} ${botaoFav(estado, 'livro', id)}</h1><p class="sub">${esc(o.criador)}</p></header>
  ${o.livro ? '' : `<section><h2>Minha leitura</h2>
    <form class="form-leitura" id="form-obra">
      <label class="campo"><span>Estado</span><select name="estado">${opcoes(Object.entries(ESTADOS_LIVRO), st.estado)}</select></label>
      <label class="campo"><span>Prioridade</span><select name="prioridade"><option value="">—</option>${opcoes(Object.entries(PRIORIDADES), st.prioridade || '')}</select></label>
      <label class="campo largo"><span>Edição, tradução ou gravação utilizada</span><input name="edicao" value="${esc(st.edicao || '')}"></label>
      <button class="btn primario" type="submit">Salvar</button>
    </form>
    <p class="meta">Início ${fmtData(st.inicio)} · conclusão ${fmtData(st.fim)}</p>
    <div class="acoes-aula"><button class="btn" data-acao="cronometro" data-alvo="livro:${id}">Iniciar cronômetro</button><button class="btn" data-acao="nota-obra">Nova nota desta obra</button></div>
  </section>
  <section><h2>Anotações desta obra (${notas.length})</h2>${notas.length ? `<ul class="lista-notas">${notas.map((n) => `<li><a href="#nota-${n.id}"><strong>${esc(n.titulo || 'Sem título')}</strong><p>${esc((n.texto || '').slice(0, 180))}</p></a></li>`).join('')}</ul>` : '<p class="meta">Nenhuma anotação ainda.</p>'}</section>`}
  ${o.livro ? `<p>${link(`livro-${o.livro}`, 'Abrir a ficha completa do livro no acervo', 'btn primario')}</p>` : ''}
  <div class="tabela-wrap"><table><tbody>
    ${linha('Autor ou criador', campo(o.criador))}
    ${linha('Tipo de mídia', esc(CATEGORIAS[o.categoria]))}
    ${linha('Data ou período', campo(o.data))}
    ${linha('País ou região', campo(o.pais))}
    ${linha('Disciplinas', o.disciplinas.length ? o.disciplinas.map((d) => link(`disciplina-${d}`, esc(disciplinaPorId[d]?.nome || d))).join(', ') : NAO_INFORMADO)}
    ${linha('Módulos do curso', o.modulos.length ? o.modulos.map((m) => link(`mod-${m}`, esc(`Módulo ${moduloPorId[m]?.n}: ${moduloPorId[m]?.titulo}`))).join(', ') : NAO_INFORMADO)}
    ${linha('Tema', o.temas.length ? esc(o.temas.join(', ')) : NAO_INFORMADO)}
    ${linha('Contexto histórico', campo(o.contexto))}
    ${linha('Nível de dificuldade', o.nivel ? `${o.nivel} de 5` : NAO_INFORMADO)}
    ${linha('Pré-requisitos', o.prereq.length ? o.prereq.map((p) => link(`livro-${p}`, esc(p))).join(', ') : NAO_INFORMADO)}
    ${linha('Justificativa pedagógica', campo(o.justificativa))}
    ${linha('Acesso', o.link ? linkExterno(o.link) : NAO_INFORMADO)}
    ${linha('Direitos e acesso', campo(o.direitos))}
  </tbody></table></div>
  <section><h2>Fontes (${o.fontes.length})</h2><ul class="lista-curta">${o.fontes.map((f) => `<li>${esc(FONTES[f.fonte] || f.fonte)}${f.nota ? ` — ${esc(f.nota)}` : ''}${f.url ? ` ${linkExterno({ url: f.url, rotulo: 'ver a fonte' })}` : ''}</li>`).join('')}</ul></section>
  ${o.aulas.length ? `<section><h2>Aulas que citam esta obra</h2><ul class="lista-curta">${o.aulas.map((a) => `<li>${link(`aula-${a}`, `${esc(a)} — ${esc(aulaPorId[a]?.titulo || '')}`)}</li>`).join('')}</ul></section>` : ''}
  ${o.relacoes.length ? `<section><h2>Obras relacionadas</h2><ul class="lista-curta">${o.relacoes.map((r) => `<li>${esc(RELACOES_OBRA[r.tipo] || r.tipo)}: ${obraPorId[r.obra] ? link(`obra-${r.obra}`, esc(obraPorId[r.obra].titulo)) : esc(r.obra)}</li>`).join('')}</ul></section>` : ''}`;
}
