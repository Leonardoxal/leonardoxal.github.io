// Genealogia das ideias: linha do tempo sincronizada dos movimentos, de onde cada um bebeu,
// quem conviveu com quem e o que acontecia no mundo.
import { MOVIMENTOS, EVENTOS, AREAS, movimentoPorId } from '../data/genealogia.js';
import { autorPorId } from '../data/autores.js';
import { linhagem, contemporaneos, escalaTempo, fmtAno } from '../core.js';
import { esc, link, etiqueta } from '../ui.js';

const PERIODOS = {
  tudo: { rotulo: 'Toda a história', trechos: [[-800, -300, 320], [-300, 300, 260], [300, 1000, 240], [1000, 1500, 320], [1500, 1800, 380], [1800, 2026, 520]] },
  antiga: { rotulo: 'Antiguidade', trechos: [[-800, -500, 300], [-500, -300, 520], [-300, 0, 360], [0, 550, 420]] },
  medieval: { rotulo: 'Idade Média', trechos: [[400, 1000, 480], [1000, 1500, 720]] },
  moderna: { rotulo: 'Modernidade', trechos: [[1450, 1650, 600], [1650, 1850, 600]] },
  contemporanea: { rotulo: 'Séculos XIX–XXI', trechos: [[1780, 1900, 520], [1900, 2026, 680]] },
};
const ALTURA_LINHA = 30;

let sel = 'escolastica';
let periodo = 'tudo';
let areas = new Set(Object.keys(AREAS));

export const selecionarMovimento = (id) => { if (movimentoPorId[id]) sel = id; };

function passoTicks(t) {
  const pxAno = t.px / (t.fim - t.ini);
  return [10, 25, 50, 100, 200, 250, 500].find((p) => p * pxAno >= 70) || 1000;
}

function eixo(escala) {
  const ticks = new Set();
  escala.trechos.forEach((t) => {
    const p = passoTicks(t);
    for (let a = Math.ceil(t.ini / p) * p; a <= t.fim; a += p) ticks.add(a);
  });
  return [...ticks].sort((a, b) => a - b);
}

/** Distribui as barras em faixas sem sobreposição (barra + rótulo), para a linha do tempo caber na tela. */
function faixas(visiveis, x, escala) {
  const fimFaixa = [];
  return visiveis.map((m) => {
    const l = x(Math.max(m.inicio, escala.ini)), r = x(Math.min(m.fim, escala.fim));
    const ocupa = Math.max(r, l + m.nome.length * 6.6 + 24);
    let f = fimFaixa.findIndex((fim) => fim + 8 <= l);
    if (f < 0) { f = fimFaixa.length; fimFaixa.push(0); }
    fimFaixa[f] = ocupa;
    return { m, l, r, f };
  });
}

function grafico(visiveis, escala, destaque) {
  const W = Math.round(escala.total) + 260; // folga para o rótulo das últimas barras
  const x = (a) => Math.round(escala.posicao(a)) + 20;
  const pos = faixas(visiveis, x, escala);
  const H = (Math.max(0, ...pos.map((p) => p.f)) + 1) * ALTURA_LINHA + 8;
  const eventos = EVENTOS.filter((e) => e.ano >= escala.ini && e.ano <= escala.fim);
  return `<div class="gen-wrap" tabindex="0" aria-label="Linha do tempo dos movimentos; role horizontalmente">
    <div class="gen" style="width:${W}px">
      <div class="gen-eixo">${eixo(escala).map((a) => `<span class="gen-tick" style="left:${x(a)}px">${esc(fmtAno(a))}</span>`).join('')}</div>
      <div class="gen-eventos">${eventos.map((e) => `<button class="gen-ev" style="left:${x(e.ano)}px" data-ev="${e.ano}" title="${esc(fmtAno(e.ano))}: ${esc(e.texto)}"><span class="sr">${esc(fmtAno(e.ano))}: ${esc(e.texto)}</span></button>`).join('')}</div>
      <div class="gen-linhas" style="height:${H}px">
        ${eventos.map((e) => `<span class="gen-ev-linha" style="left:${x(e.ano)}px"></span>`).join('')}
        ${pos.map(({ m, l, r, f: i }) => {
          const cls = m.id === sel ? 'sel' : destaque.origens.has(m.id) ? 'origem' : destaque.herdeiros.has(m.id) ? 'herdeiro' : destaque.contemp.has(m.id) ? 'contemp' : 'outro';
          return `<button class="gen-barra area-${m.area} ${cls}" data-mov="${m.id}" style="top:${i * ALTURA_LINHA + 4}px;left:${l}px;width:${Math.max(6, r - l)}px" aria-pressed="${m.id === sel}">
            <span class="gen-rot">${m.inicio < escala.ini ? '← ' : ''}${esc(m.nome)}</span></button>`;
        }).join('')}
      </div>
    </div></div>`;
}

function detalhe(m) {
  const origens = linhagem(MOVIMENTOS, m.id, 'origens');
  const herdeiros = MOVIMENTOS.filter((o) => o.bebeuDe.some((b) => b.id === m.id));
  const conv = contemporaneos(MOVIMENTOS, m);
  const eventos = EVENTOS.filter((e) => e.ano >= m.inicio - 20 && e.ano <= m.fim);
  const botao = (id) => `<button class="link-mov" data-mov="${id}">${esc(movimentoPorId[id].nome)}</button>`;
  const remotas = [...origens].filter(([, g]) => g > 1).sort((a, b) => a[1] - b[1] || movimentoPorId[a[0]].inicio - movimentoPorId[b[0]].inicio);
  const tagGrau = (b) => etiqueta(b.grau === 'documentada' ? 'fato' : 'debate');
  return `<article class="gen-detalhe" aria-live="polite">
    <span class="num">${esc(AREAS[m.area])} · ${esc(m.regiao)}</span>
    <h2>${esc(m.nome)}</h2>
    <p class="gen-datas">c. ${esc(fmtAno(m.inicio))} – ${esc(fmtAno(m.fim))}</p>
    <p><strong>Nomes:</strong> ${esc(m.pessoas)}${m.autores.length ? ` · no curso: ${m.autores.map((a) => link('autores', esc(autorPorId[a]?.nome || a))).join(', ')}` : ''}</p>
    <h3>Como começou</h3><p>${esc(m.origem)}</p>
    <h3>De onde bebeu</h3>
    ${m.bebeuDe.length ? `<ul class="gen-rel">${m.bebeuDe.map((b) => `<li>${botao(b.id)} <span class="meta">(${esc(fmtAno(movimentoPorId[b.id].inicio))})</span> ${tagGrau(b)}<p>${esc(b.como)}</p></li>`).join('')}</ul>` : '<p class="meta">Ponto de partida nesta genealogia: nenhuma fonte anterior está registrada aqui, o que não significa ausência de antecedentes.</p>'}
    ${remotas.length ? `<details><summary>Raízes mais remotas (${remotas.length})</summary><ul class="lista-curta">${remotas.map(([id, g]) => `<li>${botao(id)} <span class="meta">${g}ª geração · ${esc(fmtAno(movimentoPorId[id].inicio))}</span></li>`).join('')}</ul></details>` : ''}
    <h3>Quem bebeu dele</h3>
    ${herdeiros.length ? `<ul class="gen-rel">${herdeiros.map((h) => { const b = h.bebeuDe.find((x) => x.id === m.id); return `<li>${botao(h.id)} <span class="meta">(${esc(fmtAno(h.inicio))})</span> ${tagGrau(b)}<p>${esc(b.como)}</p></li>`; }).join('')}</ul>` : '<p class="meta">Nenhum herdeiro registrado nesta genealogia.</p>'}
    <h3>Conviveu com</h3>
    <p class="gen-chips">${conv.map((c) => botao(c.id)).join(' ') || '<span class="meta">—</span>'}</p>
    <h3>Enquanto isso, no mundo</h3>
    ${eventos.length ? `<ul class="gen-mundo">${eventos.map((e) => `<li><span class="lt-data">${esc(fmtAno(e.ano))}</span> ${esc(e.texto)}</li>`).join('')}</ul>` : '<p class="meta">Nenhum evento registrado neste intervalo.</p>'}
  </article>`;
}

let ultimoId = null; // aplica o id da rota (#ideia-x) só uma vez, para não desfazer cliques posteriores
export function genealogia(_ctx, id) {
  if (id && id !== ultimoId) selecionarMovimento(id);
  ultimoId = id || null;
  const m = movimentoPorId[sel];
  const escala = escalaTempo(PERIODOS[periodo].trechos);
  const visiveis = MOVIMENTOS.filter((x) => areas.has(x.area) && x.fim >= escala.ini && x.inicio <= escala.fim).sort((a, b) => a.inicio - b.inicio || a.fim - b.fim);
  const destaque = {
    origens: new Set(linhagem(MOVIMENTOS, sel, 'origens').keys()),
    herdeiros: new Set(linhagem(MOVIMENTOS, sel, 'herdeiros').keys()),
    contemp: new Set(contemporaneos(MOVIMENTOS, m).map((c) => c.id)),
  };
  return `<header class="cab"><h1>Genealogia das ideias</h1>
    <p class="sub">Onde cada corrente começou, de quem recebeu suas ideias, quem conviveu com quem e o que acontecia no mundo. Toque numa barra para ver a linhagem: raízes em azul, herdeiros em vinho, contemporâneos contornados.</p>
    <p class="meta">Relações marcadas ${etiqueta('fato')} são reconhecidas pela historiografia; ${etiqueta('debate')} indica hipótese de intérpretes, com divergência entre especialistas. Datas são aproximadas; "fim" marca o declínio da escola, não o fim da influência.</p></header>
  <form class="filtros gen-filtros" id="gen-filtros">
    <label class="campo"><span>Período</span><select id="g-periodo">${Object.entries(PERIODOS).map(([k, p]) => `<option value="${k}" ${k === periodo ? 'selected' : ''}>${p.rotulo}</option>`).join('')}</select></label>
    <label class="campo"><span>Ir para</span><select id="g-ir">${MOVIMENTOS.slice().sort((a, b) => a.inicio - b.inicio).map((x) => `<option value="${x.id}" ${x.id === sel ? 'selected' : ''}>${esc(fmtAno(x.inicio))} — ${esc(x.nome)}</option>`).join('')}</select></label>
    <fieldset class="dias"><legend>Áreas</legend>${Object.entries(AREAS).map(([k, r]) => `<label class="opcao"><input type="checkbox" value="${k}" data-area ${areas.has(k) ? 'checked' : ''}> <span class="amostra area-${k}" aria-hidden="true"></span><span>${r}</span></label>`).join('')}</fieldset>
  </form>
  ${periodo === 'tudo' ? '<p class="meta">Escala não linear: cada época tem largura própria, para que os séculos recentes, mais densos, fiquem legíveis.</p>' : ''}
  ${grafico(visiveis, escala, destaque)}
  <p class="meta" id="g-evento" aria-live="polite">Os losangos no topo são acontecimentos históricos; toque para ler.</p>
  ${detalhe(m)}
  <section><h2>Lista cronológica</h2><div class="tabela-wrap"><table><thead><tr><th>Início</th><th>Fim</th><th>Movimento</th><th>Área</th><th>Bebeu de</th></tr></thead><tbody>
    ${MOVIMENTOS.slice().sort((a, b) => a.inicio - b.inicio).map((x) => `<tr class="${x.id === sel ? 'sel' : ''}"><td class="num-tab">${esc(fmtAno(x.inicio))}</td><td class="num-tab">${esc(fmtAno(x.fim))}</td><td><button class="link-mov" data-mov="${x.id}">${esc(x.nome)}</button></td><td>${esc(AREAS[x.area])}</td><td>${x.bebeuDe.map((b) => esc(movimentoPorId[b.id].nome)).join('; ') || '—'}</td></tr>`).join('')}
  </tbody></table></div></section>`;
}

genealogia.ligar = (root, ctx) => {
  const wrap = root.querySelector('.gen-wrap'), barra = root.querySelector('.gen-barra.sel');
  if (wrap && barra) wrap.scrollLeft = Math.max(0, barra.offsetLeft - wrap.clientWidth / 3);
  const rerender = () => ctx.render({ manterRolagem: true });
  root.querySelector('#g-periodo').addEventListener('change', (ev) => { periodo = ev.target.value; rerender(); });
  root.querySelector('#g-ir').addEventListener('change', (ev) => { sel = ev.target.value; rerender(); });
  root.querySelectorAll('[data-area]').forEach((cb) => cb.addEventListener('change', () => {
    const novo = new Set(areas);
    if (cb.checked) novo.add(cb.value); else novo.delete(cb.value);
    if (!novo.size) { cb.checked = true; return; }
    areas = novo; rerender();
  }));
  root.querySelector('#gen-filtros').addEventListener('submit', (e) => e.preventDefault());
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-mov]');
    if (b) {
      const foraDoGrafico = !!b.closest('.gen-detalhe, table');
      sel = b.dataset.mov; rerender();
      if (foraDoGrafico) document.querySelector('.gen-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const e = ev.target.closest('[data-ev]');
    if (e) { const evt = EVENTOS.find((x) => String(x.ano) === e.dataset.ev); root.querySelector('#g-evento').textContent = `${fmtAno(evt.ano)}: ${evt.texto}`; }
  });
};
