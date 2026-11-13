// Biblioteca e mediateca (#mediateca e #obra-<id>): todas as obras, de todos os tipos de mídia, com filtros.
import { OBRAS, obraPorId, CATEGORIAS, FONTES, contagemPorCategoria, possiveisDuplicatas, sugerirGrupos, metodoDaCategoria, RELACOES_OBRA, obrasDoModulo, obrasDaDisciplina, obrasDaAula } from '../data/mediateca.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { moduloPorId } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { normalizar, MIN_ANALISE_OBRA, analiseDaObra, chaveComprovacao, pctLivro } from '../core.js';
import { esc, link, linkExterno, botaoFav, fmtData, toast, barra, ESTADOS_LIVRO } from '../ui.js';
import { notasDe } from './conexoes.js';
import { fichaObraHTML, ligarFichaObra } from './ficha-obra.js';
import { edicoesHTML, resumoVersoes } from './edicoes.js';
import { pessoalHTML, ligarPessoal } from './biblioteca.js';
import { livroPorId } from '../data/livros.js';
import { obraPronta } from '../data/mediateca.js';

const POR_PAGINA = 60;
// filtros da sessão (como a consulta da Busca): não precisam sobreviver ao recarregar
const filtro = { categoria: '', disciplina: '', modulo: '', texto: '', estado: '', trilha: false, fav: false, limite: POR_PAGINA, preset: '' };

const itemObra = (o, estado) => `<li>${link(o.livro ? `livro-${o.livro}` : `obra-${o.id}`, `<em>${esc(o.titulo)}</em>`)}${o.criador ? ` — ${esc(o.criador)}` : ''} <span class="meta">${esc(CATEGORIAS[o.categoria])}${o.funcao ? ` · ${esc(o.funcao)}` : ''}</span>${estado?.livros?.[o.id]?.estado === 'concluido' || (o.livro && estado?.livros?.[o.livro]?.estado === 'concluido') ? ' <span class="chip ok">concluída</span>' : ''}</li>`;

/** Obras de um módulo (da escada ou de uma disciplina) ou, sem módulo, de uma disciplina inteira. */
export function leiturasRecomendadasHTML(m, max = 8, estado = null) {
  if (!m) return '';
  const obras = m.id ? obrasDoModulo(m.id) : obrasDaDisciplina(m.disciplina);
  if (!obras.length) return '';
  const alvo = m.id ? `m-${m.id}` : `d-${m.disciplina}`;
  return `<section class="leituras-recomendadas"><h2>Obras ${m.id ? 'deste módulo' : `de ${esc(disciplinaPorId[m.disciplina]?.nome || m.disciplina)}`}</h2>
    <p class="meta">${obras.length} obra(s), de todos os tipos de mídia, com a função de cada uma neste módulo.</p>
    <ul class="lista-curta">${obras.slice(0, max).map((o) => itemObra(o, estado)).join('')}</ul>
    ${obras.length > max ? link(`mediateca-${alvo}`, `Ver as ${obras.length} obras na mediateca`, 'btn') : ''}</section>`;
}

/** Obras ligadas a uma aula específica (o título ou o autor aparece na aula). */
export function obrasDaAulaHTML(aulaId, estado = null) {
  const obras = obrasDaAula(aulaId);
  return obras.length ? `<section class="leituras-recomendadas"><h2>Obras desta aula</h2><ul class="lista-curta">${obras.map((o) => itemObra(o, estado)).join('')}</ul></section>` : '';
}

/** Bloco "Obras relacionadas" das páginas de conceito e de autor. */
export function obrasRelacionadasHTML(obras, estado = null, max = 10) {
  if (!obras.length) return '';
  return `<section class="leituras-recomendadas"><h2>Obras relacionadas</h2><ul class="lista-curta">${obras.slice(0, max).map((o) => itemObra(o, estado)).join('')}</ul>${obras.length > max ? `<p class="meta">e mais ${obras.length - max}: ${link('mediateca', 'ver na mediateca')}</p>` : ''}</section>`;
}

const NAO_INFORMADO = '<span class="meta">não informado</span>';
const campo = (v) => (v && String(v).trim() ? esc(v) : NAO_INFORMADO);

/** A chave do registro de leitura e dos favoritos: a do livro do acervo, quando a obra é um deles. */
const chaveDe = (o) => o.livro || o.id;
const estadoDe = (estado, o) => estado?.livros[chaveDe(o)]?.estado || 'nao';
const cmp = new Intl.Collator('pt').compare;
/** Primeiro a trilha de leitura (degrau e ordem); depois as demais obras, por título. */
const ordemCatalogo = (a, b) => {
  const la = a.livro && livroPorId[a.livro], lb = b.livro && livroPorId[b.livro];
  if (la && lb) return la.degrau - lb.degrau || la.ordem - lb.ordem;
  return la ? -1 : lb ? 1 : cmp(a.titulo, b.titulo);
};

function filtrar(estado) {
  const termos = normalizar(filtro.texto).split(/\s+/).filter(Boolean);
  // a busca acha a obra também pelo título e autor de uma edição, tradução ou volume dela
  const texto = (o) => normalizar(`${o.titulo} ${o.criador} ${o.temas.join(' ')} ${o.versoes.map((v) => `${v.titulo} ${v.criador}`).join(' ')}`);
  return OBRAS.filter((o) => (!filtro.categoria || o.categoria === filtro.categoria)
    && (!filtro.disciplina || o.disciplinas.includes(filtro.disciplina))
    && (!filtro.modulo || o.modulos.includes(filtro.modulo))
    && (!filtro.trilha || o.livro)
    && (!filtro.estado || estadoDe(estado, o) === filtro.estado)
    && (!filtro.fav || estado?.favoritos.includes(`livro:${chaveDe(o)}`))
    && (!termos.length || termos.every((t) => texto(o).includes(t)))).sort(ordemCatalogo);
}

/** Cartão de uma obra, no desenho da Biblioteca. O livro do acervo abre a ficha completa dele. */
function cartaoObra(o, estado) {
  const l = o.livro && livroPorId[o.livro];
  const st = estadoDe(estado, o);
  const versoes = resumoVersoes(o);
  return `<li class="cartao-livro"><a href="#${l ? `livro-${l.id}` : `obra-${o.id}`}">
    <span class="num">${l ? `Degrau ${l.degrau} · ${l.ordem}º na trilha` : esc(CATEGORIAS[o.categoria])}</span>
    <h3>${esc(o.titulo)}</h3><p class="autor">${esc(o.criador || l?.autor || 'Autor não informado')}</p>
    <div class="linha-meta">${o.disciplinas.slice(0, 2).map((d) => `<span>${esc(disciplinaPorId[d]?.nome || d)}</span>`).join('')}${l ? `<span>Dificuldade ${l.nivel}/5</span>` : ''}<span class="chip ${st}">${ESTADOS_LIVRO[st]}</span>${versoes ? `<span class="chip">${versoes}</span>` : ''}${!l && o.modulos.length && !obraPronta(o) ? '<span class="chip alerta">em preparação</span>' : ''}</div>
    ${l && estado && (st === 'lendo' || st === 'pausado') ? barra(pctLivro(estado, l.id)) : ''}</a></li>`;
}

export function mediateca(ctx, id = '') {
  const estado = ctx?.estado ?? null;
  // #mediateca-d-<disciplina> e #mediateca-m-<módulo> abrem a mediateca já filtrada (links das aulas)
  if ((id || '') !== filtro.preset) {
    Object.assign(filtro, { preset: id || '', categoria: id?.startsWith('t-') && CATEGORIAS[id.slice(2)] ? id.slice(2) : '', texto: '', estado: '', trilha: false, fav: false, limite: POR_PAGINA,
      disciplina: id?.startsWith('d-') ? id.slice(2) : '', modulo: id?.startsWith('m-') ? id.slice(2) : '' });
  }
  const lista = filtrar(estado);
  const disciplinas = [...new Set(OBRAS.flatMap((o) => o.disciplinas))].sort();
  const vazias = Object.entries(contagemPorCategoria).filter(([, n]) => !n).map(([c]) => CATEGORIAS[c]);
  const comVersoes = OBRAS.filter((o) => o.versoes.length).length;
  return `<header class="cab"><h1>Biblioteca e mediateca</h1>
    <p class="sub">${OBRAS.length} obras num catálogo único: os 607 livros da trilha de leitura e as obras das bibliografias e das listas, de todos os tipos de mídia. Cada obra tem um só registro; edições, traduções e volumes aparecem dentro dela (${comVersoes} obras reúnem mais de um registro). Campos sem informação aparecem como "não informado"; nada é preenchido por suposição.</p>
    <p class="meta">A sequência de leitura dos 607 livros, com filtros por autor, dificuldade e prioridade, continua em ${link('trilha', 'Trilha de leitura')}.</p></header>
  <form class="filtros" id="f-midia" role="search">
    <label class="campo largo"><span>Buscar</span><input type="search" id="m-q" name="texto" value="${esc(filtro.texto)}" placeholder="Título, autor, tradutor ou tema"></label>
    <label class="campo"><span>Tipo de mídia</span><select name="categoria"><option value="">Todas</option>${Object.entries(CATEGORIAS).map(([c, nome]) => `<option value="${c}" ${filtro.categoria === c ? 'selected' : ''} ${contagemPorCategoria[c] ? '' : 'disabled'}>${esc(nome)} (${contagemPorCategoria[c]})</option>`).join('')}</select></label>
    <label class="campo"><span>Disciplina</span><select name="disciplina"><option value="">Todas</option>${disciplinas.map((d) => `<option value="${d}" ${filtro.disciplina === d ? 'selected' : ''}>${esc(disciplinaPorId[d]?.nome || d)}</option>`).join('')}</select></label>
    <label class="campo"><span>Estado</span><select name="estado"><option value="">Todos</option>${opcoes(Object.entries(ESTADOS_LIVRO), filtro.estado)}</select></label>
    <label class="opcao"><input type="checkbox" name="trilha" ${filtro.trilha ? 'checked' : ''}> <span>Só a trilha de leitura</span></label>
    <label class="opcao"><input type="checkbox" name="fav" ${filtro.fav ? 'checked' : ''}> <span>Só favoritos</span></label>
  </form>
  ${filtro.modulo ? `<p class="meta">Filtro ativo: leituras do ${link(`mod-${filtro.modulo}`, esc(`Módulo ${moduloPorId[filtro.modulo]?.n}: ${moduloPorId[filtro.modulo]?.titulo}`))} · ${link('mediateca', 'limpar')}</p>` : ''}
  <p class="meta" aria-live="polite">${lista.length} obra(s).${vazias.length ? ` Categorias ainda sem registros: ${esc(vazias.join(', '))}. Elas recebem obras na expansão bibliográfica, sempre com a fonte declarada.` : ''}</p>
  <ul class="grade-livros">${lista.slice(0, filtro.limite).map((o) => cartaoObra(o, estado)).join('')}</ul>
  ${lista.length > filtro.limite ? `<button class="btn" id="m-mais">Mostrar mais ${Math.min(POR_PAGINA, lista.length - filtro.limite)}</button>` : ''}
  ${estado ? pessoalHTML(estado) : ''}
  ${duplicatasHTML()}`;
}

/** Como estudar esta obra, conforme o formato (proposta da Academia). */
function metodoHTML(categoria) {
  const m = metodoDaCategoria(categoria);
  if (!m) return '';
  return `<section><h2>Como estudar: ${esc(m.nome.toLocaleLowerCase('pt-BR'))}</h2>
    <dl class="ficha"><dt>Antes</dt><dd>${esc(m.antes)}</dd><dt>Durante</dt><dd>${esc(m.durante)}</dd><dt>Depois</dt><dd>${esc(m.depois)}</dd><dt>Mostra que entendeu</dt><dd>${esc(m.evidencia)}</dd></dl>
    <p class="meta">Método proposto pela Academia para este formato; não é regra de nenhum autor citado.</p></section>`;
}

/** Lista para revisão humana: mesmo título em registros separados. Nada é fundido sozinho. */
function duplicatasHTML() {
  const grupos = possiveisDuplicatas();
  if (!grupos.length) return '';
  return `<details class="revisao-duplicatas"><summary>Possíveis duplicatas para revisão (${grupos.length})</summary>
    <p class="meta">Obras com o mesmo título em registros separados. Podem ser a mesma obra com o autor escrito de outro jeito (então devem ser agrupadas) ou obras diferentes de mesmo nome. Traduções e edições diferentes continuam como registros próprios, ligados à obra. Quem decide é uma pessoa.</p>
    <p class="meta">A sugestão compara os nomes dos autores: registros com um nome em comum provavelmente são a mesma obra; os demais, obras diferentes. É só um ponto de partida.</p>
    <ul>${grupos.map((g) => `<li>${g.map((o) => `${link(o.livro ? `livro-${o.livro}` : `obra-${o.id}`, `<em>${esc(o.titulo)}</em>`)} — ${esc(o.criador || 'autor não informado')}`).join(' · ')}<br><span class="meta">Sugestão: ${sugestaoTexto(sugerirGrupos(g))}</span></li>`).join('')}</ul></details>`;
}

const sugestaoTexto = (subgrupos) => {
  const iguais = subgrupos.filter((s) => s.length > 1);
  if (!iguais.length) return 'obras diferentes de mesmo título; manter separadas.';
  const juntar = iguais.map((s) => `juntar os ${s.length} registros de ${esc(s[0].criador || 'autor não informado')}`).join('; ');
  return subgrupos.length > iguais.length ? `${juntar}; os demais são outras obras.` : `${juntar}.`;
};

mediateca.ligar = (root, ctx) => {
  const form = root.querySelector('#f-midia');
  const aplicar = (foco) => {
    const fd = new FormData(form);
    Object.assign(filtro, { categoria: fd.get('categoria'), disciplina: fd.get('disciplina'), texto: fd.get('texto'), estado: fd.get('estado'), trilha: fd.has('trilha'), fav: fd.has('fav'), limite: POR_PAGINA });
    ctx.render({ foco });
  };
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('change', (e) => { if (e.target.name !== 'texto') aplicar(); });
  let t;
  root.querySelector('#m-q').addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => aplicar('m-q'), 200); });
  root.querySelector('#m-mais')?.addEventListener('click', () => { filtro.limite += POR_PAGINA; ctx.render({ manterRolagem: true }); });
  if (root.querySelector('.pessoal')) ligarPessoal(root, ctx);
};

// Todas as obras usam o mesmo registro de leitura dos livros do acervo (estado.livros[id]), as mesmas notas e os favoritos.
const PRIORIDADES = { alta: 'Alta', media: 'Média', baixa: 'Baixa' };
const opcoes = (vals, sel) => vals.map(([v, r]) => `<option value="${esc(v)}" ${String(sel) === String(v) ? 'selected' : ''}>${esc(r)}</option>`).join('');

obra.ligar = (root, ctx, id) => {
  root.querySelector('#form-obra')?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    // concluir exige a análise escrita; quem já tinha concluído a obra continua concluído
    const jaConcluida = ctx.estado.livros[id]?.estado === 'concluido';
    const bloqueado = fd.estado === 'concluido' && !jaConcluida && fd.analise.trim().length < MIN_ANALISE_OBRA;
    if (bloqueado) toast(`Para concluir, escreva a análise (mínimo ${MIN_ANALISE_OBRA} caracteres; faltam ${MIN_ANALISE_OBRA - fd.analise.trim().length}).`);
    ctx.set((e) => {
      const ant = e.livros[id] || {};
      const estadoNovo = bloqueado ? (ant.estado && ant.estado !== 'nao' ? ant.estado : 'lendo') : fd.estado;
      const inicio = ant.inicio || (estadoNovo !== 'nao' ? Date.now() : null);
      const fim = estadoNovo === 'concluido' ? (ant.fim || Date.now()) : null;
      return { ...e, livros: { ...e.livros, [id]: { ...ant, estado: estadoNovo, prioridade: fd.prioridade, edicao: fd.edicao.trim(), inicio, fim } },
        discursivas: { ...e.discursivas, [chaveComprovacao(id, 'analise')]: { texto: fd.analise, data: Date.now() } } };
    }, { manterRolagem: true });
    if (!bloqueado) toast('Salvo.');
  });
  root.querySelector('[data-acao="nota-obra"]')?.addEventListener('click', () => ctx.novaNota({ tipo: 'livro', id }, `Notas — ${obraPorId[id].titulo}`));
  ligarFichaObra(root, ctx);
};

export function obra({ estado }, id) {
  const o = obraPorId[id];
  if (!o) return `<p>Obra não encontrada. ${link('mediateca', 'Voltar à mediateca')}</p>`;
  id = o.id; // a id de um registro unificado (outra edição, tradução ou volume) abre a obra principal
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
      <label class="campo largo"><span>Análise e observações (mínimo ${MIN_ANALISE_OBRA} caracteres para concluir)</span><textarea name="analise" rows="6">${esc(analiseDaObra(estado, id))}</textarea></label>
      <button class="btn primario" type="submit">Salvar</button>
    </form>
    <p class="meta">${obraPronta(o) ? 'Esta obra é obrigatória no módulo.' : 'Esta obra ainda está em preparação (sem contexto e aula próprios) e não é exigida para concluir o módulo.'} Para concluir, escreva a sua análise: o que a obra afirma ou mostra, o que você aprendeu e o que ficou em dúvida.</p>
    <p class="meta">Início ${fmtData(st.inicio)} · conclusão ${fmtData(st.fim)}</p>
    <div class="acoes-aula"><button class="btn" data-acao="cronometro" data-alvo="livro:${id}">Iniciar cronômetro</button><button class="btn" data-acao="nota-obra">Nova nota desta obra</button></div>
  </section>
  ${fichaObraHTML(estado, `livro:${id}`, o.categoria)}
  <section><h2>Anotações desta obra (${notas.length})</h2>${notas.length ? `<ul class="lista-notas">${notas.map((n) => `<li><a href="#nota-${n.id}"><strong>${esc(n.titulo || 'Sem título')}</strong><p>${esc((n.texto || '').slice(0, 180))}</p></a></li>`).join('')}</ul>` : '<p class="meta">Nenhuma anotação ainda.</p>'}</section>`}
  ${o.livro ? `<p>${link(`livro-${o.livro}`, 'Abrir a ficha completa do livro no acervo', 'btn primario')}</p>` : ''}
  <div class="tabela-wrap"><table><tbody>
    ${linha('Autor ou criador', campo(o.criador))}
    ${linha('Tipo de mídia', esc(CATEGORIAS[o.categoria]))}
    ${linha('Data ou período', campo(o.data))}
    ${linha('País ou região', campo(o.pais))}
    ${linha('Disciplinas', o.disciplinas.length ? o.disciplinas.map((d) => link(`disciplina-${d}`, esc(disciplinaPorId[d]?.nome || d))).join(', ') : NAO_INFORMADO)}
    ${linha('Módulo do curso', o.modulos.length ? o.modulos.map((m) => link(`mod-${m}`, esc(`Módulo ${moduloPorId[m]?.n}: ${moduloPorId[m]?.titulo}`))).join(', ') : NAO_INFORMADO)}
    ${linha('Aula', o.aula ? link(`aula-${o.aula}`, esc(`${o.aula} — ${aulaPorId[o.aula]?.titulo || ''}`)) : '<span class="meta">ligada ao módulo, sem aula específica</span>')}
    ${linha('Função no módulo', campo(o.funcao))}
    ${o.confianca === 'provisória' ? linha('Atribuição', '<span class="chip alerta">provisória</span> <span class="meta">sem base para ligar a uma aula ou seção; está no módulo introdutório da disciplina, a revisar</span>') : ''}
    ${linha('Tema', o.temas.length ? esc(o.temas.join(', ')) : NAO_INFORMADO)}
    ${linha('Contexto histórico', campo(o.contexto))}
    ${linha('Nível de dificuldade', o.nivel ? `${o.nivel} de 5` : NAO_INFORMADO)}
    ${linha('Pré-requisitos', o.prereq.length ? o.prereq.map((p) => link(`livro-${p}`, esc(p))).join(', ') : NAO_INFORMADO)}
    ${linha('Justificativa pedagógica', campo(o.justificativa))}
    ${linha('Acesso', o.link ? linkExterno(o.link) : NAO_INFORMADO)}
    ${linha('Direitos e acesso', campo(o.direitos))}
  </tbody></table></div>
  ${edicoesHTML(o, estado.livros[o.livro || id]?.edicao || '')}
  ${metodoHTML(o.categoria)}
  <section><h2>Fontes (${o.fontes.length})</h2><ul class="lista-curta">${o.fontes.map((f) => `<li>${esc(FONTES[f.fonte] || f.fonte)}${f.nota ? ` — ${esc(f.nota)}` : ''}${f.url ? ` ${linkExterno({ url: f.url, rotulo: 'ver a fonte' })}` : ''}</li>`).join('')}</ul></section>
  ${o.aulas.length ? `<section><h2>Aulas que citam esta obra</h2><ul class="lista-curta">${o.aulas.map((a) => `<li>${link(`aula-${a}`, `${esc(a)} — ${esc(aulaPorId[a]?.titulo || '')}`)}</li>`).join('')}</ul></section>` : ''}
  ${o.relacoes.length ? `<section><h2>Obras relacionadas</h2><ul class="lista-curta">${o.relacoes.map((r) => `<li>${esc(RELACOES_OBRA[r.tipo] || r.tipo)}: ${obraPorId[r.obra] ? link(`obra-${r.obra}`, esc(obraPorId[r.obra].titulo)) : esc(r.obra)}</li>`).join('')}</ul></section>` : ''}`;
}
