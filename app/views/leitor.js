// Leitor de PDF de um livro da lista, em modo contínuo (rolagem) ou folhear (páginas lado a lado).
// O arquivo fica só na memória desta aba: nunca é enviado, salvo ou guardado. O app registra apenas
// a página em que o estudante está, o total de páginas e o tempo de leitura.
import { livroPorId } from '../data/livros.js';
import { registrarPagina, concluirLeitura, sessaoLeitura } from '../core.js';
import { esc, link, toast, novoId } from '../ui.js';

const PDFJS = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/build/pdf.min.mjs';
const WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs';
const CHAVE_MODO = 'academia-verdade-modo-leitor';
const MODOS = { continuo: 'Contínuo', folhear: 'Folhear' };

let pdfjs = null;
async function carregarPdfjs() {
  if (!pdfjs) {
    pdfjs = await import(PDFJS);
    pdfjs.GlobalWorkerOptions.workerSrc = WORKER;
  }
  return pdfjs;
}
const lerModo = () => { try { return localStorage.getItem(CHAVE_MODO) === 'folhear' ? 'folhear' : 'continuo'; } catch { return 'continuo'; } };
const gravarModo = (m) => { try { localStorage.setItem(CHAVE_MODO, m); } catch { /* sem armazenamento: o modo vale só nesta visita */ } };

let limparAnterior = null; // encerra o leitor aberto antes (troca de página ou novo desenho da tela)

export function leitor({ estado }, id) {
  const l = livroPorId[id];
  if (!l) return '<p>Livro não encontrado.</p>';
  const st = estado.livros[id] || {};
  const modo = lerModo();
  return `<nav class="migalha">${link('biblioteca', 'Biblioteca')} / ${link(`livro-${id}`, esc(l.titulo))} / Ler</nav>
  <header class="cab"><h1>${esc(l.titulo)}</h1><p class="autor">${esc(l.autor)}</p>
    <p class="dica">Abra o PDF que você tem deste livro. Ele fica só neste aparelho, enquanto a página estiver aberta: o app não envia nem guarda o arquivo, apenas a página em que você parou e o tempo de leitura.${st.paginaAtual ? ` Você parou na página ${st.paginaAtual}${st.paginas ? ` de ${st.paginas}` : ''}.` : ''}</p></header>
  <div class="leitor-barra">
    <label class="btn primario">Abrir PDF<input type="file" id="pdf-arquivo" accept="application/pdf,.pdf" hidden></label>
    <fieldset class="leitor-modos"><legend class="sr">Modo de leitura</legend>
      ${Object.entries(MODOS).map(([v, r]) => `<label class="opcao"><input type="radio" name="modo" value="${v}" ${v === modo ? 'checked' : ''}> <span>${r}</span></label>`).join('')}</fieldset>
    <span class="meta" id="leitor-pos" aria-live="polite"></span>
    <button class="btn" type="button" data-acao="tela-cheia">Tela cheia</button>
  </div>
  <div class="leitor-fim" id="leitor-fim" hidden>
    ${st.estado === 'concluido' ? '<p class="ok-msg">Este livro já está marcado como lido.</p>'
      : '<p>Você chegou à última página.</p><button class="btn primario" data-acao="concluir-leitura">Marcar como lido</button>'}
  </div>
  <div id="leitor-tela" class="leitor-tela">
    <div class="leitor-tela-barra"><span id="leitor-pos-cheia" class="meta"></span><button class="btn pequeno" type="button" data-acao="tela-cheia">Sair da tela cheia</button></div>
    <div id="leitor-area" class="leitor-area" tabindex="-1"><p class="meta">Nenhum PDF aberto.</p></div>
  </div>`;
}

leitor.ligar = (root, ctx, id) => {
  limparAnterior?.();
  const l = livroPorId[id];
  if (!l) return;
  const area = root.querySelector('#leitor-area');
  const pos = root.querySelector('#leitor-pos');
  const fim = root.querySelector('#leitor-fim');
  let doc = null, total = 0, pagina = 1, modo = lerModo(), observadores = [], gravar = null, encerrado = false;

  // Tempo: conta só com um PDF aberto e a aba visível.
  let ms = 0, desde = null, inicioSessao = null;
  const pausar = () => { if (desde) { ms += Date.now() - desde; desde = null; } };
  const retomar = () => { if (doc && !desde && document.visibilityState === 'visible') { desde = Date.now(); inicioSessao ||= desde; } };
  const aoVisibilidade = () => (document.visibilityState === 'visible' ? retomar() : (pausar(), salvarTempo()));
  function salvarTempo() {
    pausar();
    const s = sessaoLeitura(id, l.titulo, inicioSessao || Date.now(), ms, novoId);
    if (s) { ctx.set((e) => ({ ...e, sessoes: [...e.sessoes, s] }), { render: false }); ms = 0; inicioSessao = null; }
  }

  function mudarPagina(n) {
    pagina = Math.max(1, Math.min(total, n));
    pos.textContent = `Página ${pagina} de ${total}`;
    root.querySelector('#leitor-pos-cheia').textContent = pos.textContent;
    fim.hidden = pagina < total;
    clearTimeout(gravar);
    gravar = setTimeout(() => ctx.set((e) => ({ ...e, atual: { ...e.atual, livro: id }, livros: { ...e.livros, [id]: registrarPagina(e.livros[id], pagina, total) } }), { render: false }), 800);
  }

  async function desenhar(n, canvas, largura, alturaMax = Infinity) {
    const pg = await doc.getPage(n);
    const base = pg.getViewport({ scale: 1 });
    const escala = Math.min(largura / base.width, alturaMax / base.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // limite de memória em celulares
    const vp = pg.getViewport({ scale: escala * dpr });
    canvas.width = vp.width; canvas.height = vp.height;
    canvas.style.width = `${vp.width / dpr}px`; canvas.style.height = `${vp.height / dpr}px`;
    await pg.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
  }

  const desligar = () => { observadores.forEach((o) => o.disconnect()); observadores = []; };

  async function modoContinuo() {
    desligar();
    const base = (await doc.getPage(1)).getViewport({ scale: 1 });
    const largura = Math.min(area.clientWidth, 900);
    area.className = 'leitor-area continuo';
    area.innerHTML = Array.from({ length: total }, (_, i) => `<div class="pg" data-n="${i + 1}" style="aspect-ratio:${base.width}/${base.height};max-width:${largura}px"><canvas aria-label="Página ${i + 1}"></canvas></div>`).join('');
    const desenhadas = new Set();
    const carga = new IntersectionObserver((ents) => ents.forEach((en) => {
      const n = Number(en.target.dataset.n);
      if (en.isIntersecting && !desenhadas.has(n)) { desenhadas.add(n); desenhar(n, en.target.querySelector('canvas'), largura).catch(() => {}); }
    }), { rootMargin: '800px 0px' });
    // a página atual é a que cruza a linha do meio da tela (funciona mesmo com páginas mais altas que a tela)
    const atual = new IntersectionObserver((ents) => {
      const cruzando = ents.filter((en) => en.isIntersecting);
      if (cruzando.length) mudarPagina(Number(cruzando[cruzando.length - 1].target.dataset.n));
    }, { rootMargin: '-50% 0px -50% 0px' });
    area.querySelectorAll('.pg').forEach((el) => { carga.observe(el); atual.observe(el); });
    observadores = [carga, atual];
    area.querySelector(`.pg[data-n="${pagina}"]`)?.scrollIntoView();
    mudarPagina(pagina);
  }

  const duas = () => area.clientWidth >= 820;
  async function mostrarFolhas(direcao = 0) {
    const n = duas() ? [pagina, pagina + 1].filter((x) => x <= total) : [pagina];
    const altura = window.innerHeight - (tela.classList.contains('cheia') ? 70 : 180);
    const largura = duas() ? (area.clientWidth - 24) / 2 : area.clientWidth;
    const folhas = document.createElement('div');
    folhas.className = `folhas${direcao > 0 ? ' virar-prox' : direcao < 0 ? ' virar-ant' : ''}`;
    folhas.innerHTML = n.map((x) => `<canvas aria-label="Página ${x}"></canvas>`).join('');
    await Promise.all(n.map((x, i) => desenhar(x, folhas.children[i], largura, altura)));
    area.querySelector('.folhas')?.replaceWith(folhas);
    mudarPagina(pagina);
  }
  async function modoFolhear() {
    desligar();
    area.className = 'leitor-area folhear';
    area.innerHTML = `<button class="btn virar" data-virar="-1" aria-label="Página anterior">‹</button><div class="folhas"></div><button class="btn virar" data-virar="1" aria-label="Próxima página">›</button>`;
    await mostrarFolhas();
    area.focus({ preventScroll: true });
  }
  const passo = () => (modo === 'folhear' && duas() ? 2 : 1);
  function virar(d) {
    const alvo = Math.max(1, Math.min(total, pagina + d * passo()));
    if (alvo === pagina) return;
    pagina = alvo;
    mostrarFolhas(d).catch(() => toast('Não foi possível mostrar esta página.'));
  }

  const abrirModo = () => (modo === 'folhear' ? modoFolhear() : modoContinuo()).catch(() => toast('Não foi possível mostrar o PDF.'));

  root.querySelector('#pdf-arquivo').addEventListener('change', async (ev) => {
    const f = ev.target.files?.[0];
    if (!f) return;
    area.innerHTML = '<p class="meta">Abrindo…</p>';
    try {
      const lib = await carregarPdfjs();
      salvarTempo();
      await doc?.destroy();
      doc = await lib.getDocument({ data: await f.arrayBuffer() }).promise;
      total = doc.numPages;
      pagina = Math.min(ctx.estado.livros[id]?.paginaAtual || 1, total);
      retomar();
      await abrirModo();
    } catch (e) {
      doc = null;
      area.innerHTML = `<p class="aviso">${e?.name === 'PasswordException' ? 'Este PDF é protegido por senha e não pode ser aberto aqui.' : 'Não foi possível abrir este arquivo como PDF.'}</p>`;
    }
  });
  root.querySelectorAll('input[name="modo"]').forEach((r) => r.addEventListener('change', () => { modo = r.value; gravarModo(modo); if (doc) abrirModo(); }));
  area.addEventListener('click', (ev) => { const b = ev.target.closest('[data-virar]'); if (b) virar(Number(b.dataset.virar)); });
  area.addEventListener('keydown', (ev) => {
    if (modo !== 'folhear' || !doc) return;
    if (ev.key === 'ArrowRight' || ev.key === 'PageDown') { ev.preventDefault(); virar(1); }
    if (ev.key === 'ArrowLeft' || ev.key === 'PageUp') { ev.preventDefault(); virar(-1); }
  });
  let toqueX = null;
  area.addEventListener('pointerdown', (ev) => { toqueX = ev.clientX; });
  area.addEventListener('pointerup', (ev) => {
    if (modo !== 'folhear' || toqueX === null) return;
    const dx = ev.clientX - toqueX; toqueX = null;
    if (Math.abs(dx) > 50) virar(dx < 0 ? 1 : -1);
  });
  // Tela cheia: usa a API do navegador quando existe; no iPhone (sem a API) o leitor cobre a página.
  const tela = root.querySelector('#leitor-tela');
  let redesenho = null, larguraAnterior = window.innerWidth;
  const redesenhar = () => { clearTimeout(redesenho); redesenho = setTimeout(() => { if (doc) abrirModo(); }, 250); };
  // só a largura importa: no celular a barra de endereço muda a altura ao rolar
  const aoRedimensionar = () => { if (window.innerWidth !== larguraAnterior) { larguraAnterior = window.innerWidth; redesenhar(); } };
  function marcarCheia(on) {
    if (tela.classList.contains('cheia') === on) return;
    tela.classList.toggle('cheia', on);
    document.body.classList.toggle('sem-rolagem', on);
    redesenhar();
  }
  function alternarCheia() {
    if (tela.classList.contains('cheia')) {
      marcarCheia(false);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      return;
    }
    marcarCheia(true);
    // sem esperar: se a API não existir (iPhone) ou for recusada, a versão em CSS já está ligada
    tela.requestFullscreen?.().catch(() => {});
  }
  // Esc ou o botão do navegador encerram a tela cheia nativa: sai da versão em CSS junto
  const aoMudarCheia = () => { if (!document.fullscreenElement) marcarCheia(false); };
  const aoTecla = (ev) => { if (ev.key === 'Escape' && tela.classList.contains('cheia') && !document.fullscreenElement) marcarCheia(false); };
  document.addEventListener('fullscreenchange', aoMudarCheia);
  document.addEventListener('keydown', aoTecla);
  window.addEventListener('resize', aoRedimensionar);

  root.addEventListener('click', (ev) => {
    if (ev.target.closest('[data-acao="tela-cheia"]')) { alternarCheia(); return; }
    if (!ev.target.closest('[data-acao="concluir-leitura"]')) return;
    clearTimeout(gravar);
    ctx.set((e) => ({ ...e, atual: { ...e.atual, livro: e.atual.livro === id ? null : e.atual.livro }, livros: { ...e.livros, [id]: concluirLeitura(registrarPagina(e.livros[id], total, total)) } }), { render: false });
    fim.innerHTML = '<p class="ok-msg">Livro marcado como lido na Biblioteca.</p>';
    toast('Livro marcado como lido.');
  });

  function encerrar() {
    if (encerrado) return;
    encerrado = true;
    salvarTempo();
    desligar();
    doc?.destroy();
    document.removeEventListener('visibilitychange', aoVisibilidade);
    document.removeEventListener('fullscreenchange', aoMudarCheia);
    document.removeEventListener('keydown', aoTecla);
    window.removeEventListener('resize', aoRedimensionar);
    clearTimeout(redesenho);
    document.body.classList.remove('sem-rolagem');
    if (document.fullscreenElement === tela) document.exitFullscreen().catch(() => {});
    window.removeEventListener('hashchange', aoSair);
    window.removeEventListener('pagehide', salvarTempo);
    if (limparAnterior === encerrar) limparAnterior = null;
  }
  const aoSair = () => { if (!location.hash.startsWith(`#ler-${id}`)) encerrar(); };
  document.addEventListener('visibilitychange', aoVisibilidade);
  window.addEventListener('hashchange', aoSair);
  window.addEventListener('pagehide', salvarTempo);
  limparAnterior = encerrar;
};
