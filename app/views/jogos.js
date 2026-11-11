// Aba Jogos (#jogos, #jogo-<id>): três jogos educativos da Academia Infantil, com níveis sem fim.
// Cada filho tem o seu nível em cada jogo (guardado neste aparelho). O limite de tela por dia é opcional.
// Sem placar, sem tempo correndo, sem som de erro: errar mostra a resposta com calma e o jogo fica mais fácil.
import { esc, link } from '../ui.js';
import { JOGOS, ajustar, progressoInicial, LIMITES, hojeISO, usadoHoje, acabou } from '../infantil/jogos.js';
import { criarArmazenamento } from '../infantil/armazenamento.js';
import { clienteNuvem, usuarioNuvem } from '../nuvem.js';
import { FAMILIA_ATIVA } from '../infantil/config.js';

// Armazenamento próprio (mesmo cadastro de filhos da aba Infantil). Não importa de views/infantil.js:
// se o navegador guardar uma versão antiga daquele arquivo, a aba não pode quebrar o site inteiro.
const arm = criarArmazenamento({ obterCliente: clienteNuvem, obterUsuario: usuarioNuvem, familiaAtiva: FAMILIA_ATIVA });

const LIBERAR_MS = 5 * 60000; // o adulto libera mais 5 minutos
const SEGURAR_MS = 3000; // segurar o botão do adulto por 3 segundos
const ESPERA_ACERTO = 1400;
const ESPERA_ERRO = 2200;

// ---------------------------------------------------------------- guardado no aparelho

const ler = (k, padrao) => { try { return JSON.parse(localStorage.getItem(k)) ?? padrao; } catch { return padrao; } };
const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* sem armazenamento: vale só nesta visita */ } };
const quem = () => ler('aci-jogos-quem', 'familia');
const progressoDe = (filho) => ler(`aci-jogos-prog-${filho}`, {});
const nivelDe = (filho, jogo) => progressoDe(filho)[jogo]?.nivel ?? 1;
const limite = () => Number(ler('aci-jogos-limite', 0)) || 0;
const usado = () => usadoHoje(ler('aci-jogos-tempo', null));
const somarTempo = (ms) => gravar('aci-jogos-tempo', { dia: hojeISO(), ms: Math.max(0, usado() + ms) });

// ---------------------------------------------------------------- voz e som

function falar(texto, idioma = 'pt-BR') {
  const s = globalThis.speechSynthesis;
  if (!s || !texto) return;
  s.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = idioma;
  const vozes = s.getVoices();
  u.voice = vozes.find((v) => v.lang.replace('_', '-') === idioma) ?? vozes.find((v) => v.lang.startsWith(idioma.slice(0, 2))) ?? null;
  u.rate = 0.88;
  s.speak(u);
}

let audio;
/** Um acorde curto de sino no acerto (sem arquivo de som). */
function sino() {
  try {
    audio ??= new AudioContext();
    const t = audio.currentTime;
    [784, 988, 1175].forEach((f, i) => {
      const o = audio.createOscillator(); const g = audio.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * 0.07);
      g.gain.exponentialRampToValueAtTime(0.18, t + i * 0.07 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.07 + 0.9);
      o.connect(g).connect(audio.destination); o.start(t + i * 0.07); o.stop(t + i * 0.07 + 1);
    });
  } catch { /* sem áudio: o jogo segue só com a luz */ }
}

const ELOGIOS = ['Muito bem!', 'Isso!', 'Acertou!', 'Que bom!', 'Parabéns!'];
const elogio = () => ELOGIOS[Math.floor(Math.random() * ELOGIOS.length)];

// ---------------------------------------------------------------- desenhos

// Formas de vidro do jogo "O que vem depois?" (viewBox 0 0 100 100).
const FORMA = {
  circulo: '<circle cx="50" cy="50" r="38"/>',
  triangulo: '<polygon points="50,10 92,86 8,86"/>',
  quadrado: '<rect x="14" y="14" width="72" height="72" rx="8"/>',
  estrela: '<polygon points="50,6 61,38 95,38 67,58 78,92 50,71 22,92 33,58 5,38 39,38"/>',
  cruz: '<path d="M38 8h24v26h26v24H62v34H38V58H12V34h26z"/>',
  coracao: '<path d="M50 88C18 66 6 50 6 32 6 18 17 8 30 8c9 0 16 5 20 12 4-7 11-12 20-12 13 0 24 10 24 24 0 18-12 34-44 56z"/>',
};
const TAM = { p: 0.55, m: 0.8, g: 1 };
const peca = (x) => {
  const s = TAM[x.tam] ?? 0.8;
  return `<svg class="jg-forma jg-${esc(x.cor)}" viewBox="0 0 100 100" aria-hidden="true"><g transform="translate(50 50) scale(${s}) translate(-50 -50)">${FORMA[x.forma]}</g></svg>`;
};
const NOME_FORMA = { circulo: 'círculo', triangulo: 'triângulo', quadrado: 'quadrado', estrela: 'estrela', cruz: 'cruz', coracao: 'coração' };
const NOME_COR = { rubi: 'vermelho', safira: 'azul', esmeralda: 'verde', ambar: 'amarelo' };
const NOME_TAM = { p: 'pequeno', m: '', g: 'grande' };
const rotuloPeca = (x) => [NOME_FORMA[x.forma], NOME_COR[x.cor], NOME_TAM[x.tam]].filter(Boolean).join(' ');

const grupo = (qtd, e, sai = 0) => `<span class="jg-grupo${qtd > 10 ? ' denso' : qtd <= 3 ? ' poucos' : ''}" aria-hidden="true">${Array.from({ length: qtd }, (_, i) => `<span${i >= qtd - sai ? ' class="sai"' : ''}>${e}</span>`).join('')}</span>`;
const pontos = (n) => `<span class="jg-pontos" aria-hidden="true">${'●'.repeat(n)}</span>`;

// Janela gótica de vidro (a capa de cada jogo): arco ogival, chumbo e vidros da cor do jogo.
const ARCO = 'M12 228V96C12 52 40 22 80 8c40 14 68 44 68 88v132z';
const DESENHO_CAPA = {
  quantos: '<text x="80" y="140" text-anchor="middle" font-size="38">🐑</text><text x="52" y="184" text-anchor="middle" font-size="32">🐑</text><text x="108" y="184" text-anchor="middle" font-size="32">🐑</text>',
  depois: `<g transform="translate(26 132) scale(.3)" class="a">${FORMA.estrela}</g><g transform="translate(65 132) scale(.3)" class="b">${FORMA.cruz}</g><g transform="translate(104 132) scale(.3)" class="a">${FORMA.estrela}</g><text x="80" y="196" text-anchor="middle" font-size="34" class="q">?</text>`,
  ouvir: '<text x="80" y="166" text-anchor="middle" font-size="50">🔔</text><path class="onda" d="M118 126q12 14 0 28M128 116q22 24 0 48M42 126q-12 14 0 28M32 116q-22 24 0 48"/>',
  numeros: '<text x="80" y="170" text-anchor="middle" class="q" style="font-size:52px">100</text>',
  palavras: '<text x="54" y="166" text-anchor="middle" font-size="40">🐝</text><text x="106" y="166" text-anchor="middle" font-size="40">🍯</text>',
};
const capa = (id) => `<svg class="jg-capa" viewBox="0 0 160 236" aria-hidden="true">
  <path class="vidro" d="${ARCO}"/>
  <g class="tons"><path class="claro" d="M80 8 80 88 30 52C40 30 58 16 80 8z"/><path class="escuro" d="M80 8 80 88 130 52C120 30 102 16 80 8z"/><path class="escuro" d="M12 96 30 52 80 88 12 96z"/><path class="claro" d="M148 96 130 52 80 88z"/><path class="claro" d="M12 200h28v28H12z"/><path class="escuro" d="M120 200h28v28h-28z"/><path class="escuro" d="M12 96h24v104H12z"/><path class="claro" d="M124 96h24v104h-24z"/></g>
  <g class="chumbo-fino"><path d="M12 96h136M80 8v80M30 52l50 36 50-36M12 200h136M40 200v28M120 200v28"/></g>
  <circle class="medalhao" cx="80" cy="152" r="56"/>
  <g class="figura">${DESENHO_CAPA[id]}</g>
  <path class="chumbo" d="${ARCO}"/>
</svg>`;

// ---------------------------------------------------------------- telas

export function jogos() {
  return `<section class="infantil jogos">
    <header class="cab jg-cab">
      <h1>Jogos da Academia</h1>
      <p class="sub">Cinco janelas de vidro colorido. Cada acerto acende a luz; três acertos seguidos sobem um nível, e os níveis não acabam.</p>
    </header>
    <div class="jg-janelas">${Object.values(JOGOS).map((j) => `<a class="jg-janela jg-tema-${j.id}" href="#jogo-${j.id}">
      ${capa(j.id)}
      <span class="jg-janela-txt"><strong>${esc(j.titulo)}</strong><span>${esc(j.area)}</span><span class="jg-nivel-capa" data-nivel="${j.id}">Nível 1</span></span></a>`).join('')}</div>
    <section class="inf-caixa jg-pais" aria-labelledby="jg-pais-titulo">
      <h2 id="jg-pais-titulo">Para os pais</h2>
      <fieldset class="jg-quem"><legend>Quem vai jogar?</legend><div id="jg-filhos" class="jg-chips"></div></fieldset>
      <label class="campo jg-limite"><span>Limite de tela por dia</span><select id="jg-limite">${LIMITES.map((m) => `<option value="${m}">${m ? `${m} minutos` : 'Sem limite'}</option>`).join('')}</select></label>
      <p class="meta" id="jg-usado" aria-live="polite"></p>
      <p class="meta">Jogue junto com a criança: a voz faz a pergunta, e o adulto comenta e conversa. Para crianças de 2 a 5 anos, a Academia Americana de Pediatria recomenda no máximo cerca de 1 hora de tela por dia, com um adulto junto; bebês não usam tela. O nível de cada filho fica guardado neste aparelho.</p>
    </section>
  </section>`;
}

export function jogo(ctx, id) {
  const j = JOGOS[id];
  if (!j) return `<p class="aviso">Jogo não encontrado. ${link('jogos', 'Voltar aos jogos')}</p>`;
  return `<section class="infantil jogos jg-jogo jg-tema-${j.id}">
    <div class="jg-barra">
      <a class="btn pequeno" href="#jogos">Voltar aos jogos</a>
      <span class="jg-titulo">${esc(j.titulo)}</span>
      <span class="jg-nivel" id="jg-nivel" aria-live="polite"></span>
      <span class="meta" id="jg-resta"></span>
    </div>
    <div class="jg-painel" id="jg-painel">
      <div class="jg-inicio">
        ${capa(j.id)}
        <button class="btn primario jg-comecar" type="button" id="jg-comecar">Começar</button>
        <p class="jg-ajuda">${esc(j.ajuda)}</p>
      </div>
    </div>
    <p class="meta jg-legenda" id="jg-legenda" aria-live="polite"></p>
    <div class="jg-descanso" id="jg-descanso" hidden role="dialog" aria-modal="true" aria-labelledby="jg-descanso-titulo">
      <div class="jg-descanso-caixa">
        <h2 id="jg-descanso-titulo">Hora de descansar os olhos</h2>
        <p>Acabou o tempo de jogo de hoje. Que tal contar as coisas da casa, de verdade, com as mãos?</p>
        <button class="btn" type="button" id="jg-liberar">Adulto: segure 3 segundos para liberar mais 5 minutos</button>
        <a class="btn pequeno" href="#jogos">Voltar aos jogos</a>
      </div>
    </div>
  </section>`;
}

// ---------------------------------------------------------------- comportamento: página inicial

jogos.ligar = async (root) => {
  const caixa = root.querySelector('#jg-filhos');
  const seletor = root.querySelector('#jg-limite');
  seletor.value = String(limite());
  const mostrarUso = () => {
    const l = limite(); const min = Math.floor(usado() / 60000);
    root.querySelector('#jg-usado').textContent = l ? `Hoje: ${min} de ${l} minutos usados.` : `Hoje: ${min} minuto(s) de jogo.`;
  };
  seletor.addEventListener('change', () => { gravar('aci-jogos-limite', Number(seletor.value)); mostrarUso(); });
  mostrarUso();

  const niveis = () => root.querySelectorAll('[data-nivel]').forEach((el) => { el.textContent = `Nível ${nivelDe(quem(), el.dataset.nivel)}`; });
  let filhos = [];
  try { await arm.iniciar(); filhos = await arm.listarFilhos(); } catch { /* sem cadastro: joga como família */ }
  if (!root.isConnected) return;
  const opcoes = filhos.length ? filhos.map((f) => ({ id: f.id, nome: f.nome })) : [{ id: 'familia', nome: 'Família' }];
  if (!opcoes.some((o) => o.id === quem())) gravar('aci-jogos-quem', opcoes[0].id);
  caixa.innerHTML = opcoes.map((o) => `<label class="jg-chip"><input type="radio" name="jg-quem" value="${esc(o.id)}"${o.id === quem() ? ' checked' : ''}><span>${esc(o.nome)}</span></label>`).join('')
    + (filhos.length ? '' : `<span class="meta">Cadastre os filhos na aba ${link('infantil', 'Infantil')} para guardar o nível de cada um.</span>`);
  caixa.addEventListener('change', (ev) => { gravar('aci-jogos-quem', ev.target.value); niveis(); });
  niveis();
};

// ---------------------------------------------------------------- comportamento: uma partida

function opcaoHTML(id, r, o) {
  let dentro; let rotulo;
  if (o.qtd !== undefined) { dentro = grupo(o.qtd, o.e); rotulo = String(o.qtd); }
  else if (o.num !== undefined) { dentro = `<span class="jg-num">${o.num}</span>${o.pontos ? pontos(o.num) : ''}`; rotulo = String(o.num); }
  else if (o.e) { dentro = `<span class="jg-figura" aria-hidden="true">${o.e}</span>`; rotulo = o.pt; }
  else { dentro = peca(o); rotulo = rotuloPeca(o); }
  return `<button class="jg-vidro${r.tipo === 'mais' ? ' largo' : ''}" type="button" data-chave="${esc(o.chave)}" aria-label="${esc(rotulo)}">${dentro}</button>`;
}

function mostrarHTML(id, r) {
  const m = r.mostrar;
  if (!m) return '';
  if (id === 'quantos') {
    if (!m.grupos) return `<p class="jg-conta">${esc(m.conta)} = ?</p>`;
    return `<div class="jg-mostrar">${m.grupos.map((g) => grupo(g.qtd, g.e, g.sai ?? 0)).join('<span class="jg-mais" aria-hidden="true">+</span>')}</div>`;
  }
  if (m.modelo) return `<div class="jg-mostrar"><span class="jg-vidro jg-modelo"><span class="jg-figura" aria-hidden="true">${m.modelo.e}</span><span class="jg-palavra">${esc(m.modelo.pt)}</span></span></div>`;
  return `<div class="jg-mostrar jg-seq">${m.seq.map((x) => `<span class="jg-elo">${x.num !== undefined ? `<span class="jg-num">${x.num}</span>` : peca(x)}</span>`).join('')}<span class="jg-elo jg-falta" aria-label="falta">?</span></div>`;
}

jogo.ligar = (root, ctx, id) => {
  const j = JOGOS[id];
  if (!j) return;
  const painel = root.querySelector('#jg-painel');
  const nivelEl = root.querySelector('#jg-nivel');
  const descanso = root.querySelector('#jg-descanso');
  const descansoAberto = () => !descanso.hidden;
  const filho = quem();
  let p = { ...progressoInicial(), ...progressoDe(filho)[id] };
  let rodada = null;
  let travado = false;

  const salvar = () => gravar(`aci-jogos-prog-${filho}`, { ...progressoDe(filho), [id]: p });
  const mostrarNivel = () => { nivelEl.innerHTML = `Nível ${p.nivel}<span class="jg-luzes" aria-hidden="true">${[0, 1, 2].map((i) => `<i${i < p.seguidos ? ' class="acesa"' : ''}></i>`).join('')}</span>`; };

  const nova = () => {
    rodada = j.rodada(p.nivel);
    painel.innerHTML = `<button class="jg-ouvir" type="button" id="jg-ouvir" aria-label="Ouvir a pergunta de novo"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      <p class="jg-pergunta">${esc(rodada.texto)}</p>
      ${mostrarHTML(id, rodada)}
      <div class="jg-opcoes n${rodada.opcoes.length}">${rodada.opcoes.map((o) => opcaoHTML(id, rodada, o)).join('')}</div>`;
    root.querySelector('#jg-legenda').textContent = rodada.idioma === 'en-US' ? 'Em inglês. O adulto pode repetir a palavra e apontar a figura.' : '';
    falar(rodada.fala, rodada.idioma);
    travado = false;
    mostrarNivel();
  };

  const responder = (botao) => {
    if (travado || !rodada) return;
    travado = true;
    const acertou = botao.dataset.chave === rodada.certa;
    const antes = p.nivel;
    p = ajustar(p, acertou);
    salvar();
    painel.querySelectorAll('.jg-opcoes .jg-vidro').forEach((b) => { b.disabled = true; });
    if (acertou) {
      botao.classList.add('certa');
      painel.classList.add('aceso');
      sino();
      falar(p.nivel > antes ? `${elogio()} Você subiu para o nível ${p.nivel}!` : elogio());
    } else {
      botao.classList.add('errada');
      painel.querySelector(`.jg-opcoes [data-chave="${CSS.escape(rodada.certa)}"]`)?.classList.add('mostrar');
      falar('Olhe, é esta aqui.');
    }
    mostrarNivel();
    nivelEl.classList.toggle('subiu', p.nivel > antes);
    setTimeout(() => {
      if (!root.isConnected) return;
      painel.classList.remove('aceso');
      nivelEl.classList.remove('subiu');
      if (!descansoAberto()) nova();
    }, acertou ? ESPERA_ACERTO : ESPERA_ERRO);
  };
  painel.addEventListener('click', (ev) => {
    if (ev.target.closest('#jg-ouvir')) { if (rodada) falar(rodada.fala, rodada.idioma); return; }
    const b = ev.target.closest('.jg-opcoes .jg-vidro');
    if (b) responder(b);
  });
  root.querySelector('#jg-comecar').addEventListener('click', () => {
    if (descansoAberto()) return;
    nova();
    root.querySelector('.jg-barra').scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  mostrarNivel();

  // ---- limite de tela (opcional): conta o tempo com a partida aberta e visível
  const conferirTempo = () => {
    const l = limite();
    root.querySelector('#jg-resta').textContent = l ? `Faltam ${Math.ceil(Math.max(0, l * 60000 - usado()) / 60000)} min hoje` : '';
    if (acabou(l, usado()) && !descansoAberto()) {
      descanso.hidden = false;
      globalThis.speechSynthesis?.cancel();
      descanso.querySelector('#jg-liberar').focus();
    }
  };
  let ultimo = Date.now();
  const relogio = setInterval(() => {
    if (!root.isConnected) { clearInterval(relogio); globalThis.speechSynthesis?.cancel(); return; }
    const agora = Date.now();
    if (!document.hidden && !descansoAberto()) somarTempo(Math.min(agora - ultimo, 5000));
    ultimo = agora;
    conferirTempo();
  }, 1000);
  conferirTempo();

  // botão do adulto: segurar 3 segundos (dedo, mouse ou tecla) para liberar mais 5 minutos
  const liberar = descanso.querySelector('#jg-liberar');
  let segurando;
  const soltar = () => { clearTimeout(segurando); liberar.classList.remove('segurando'); };
  const segurar = () => {
    soltar();
    liberar.classList.add('segurando');
    segurando = setTimeout(() => { soltar(); somarTempo(-LIBERAR_MS); descanso.hidden = true; conferirTempo(); }, SEGURAR_MS);
  };
  liberar.addEventListener('pointerdown', segurar);
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((e) => liberar.addEventListener(e, soltar));
  liberar.addEventListener('keydown', (ev) => { if ((ev.key === 'Enter' || ev.key === ' ') && !ev.repeat) { ev.preventDefault(); segurar(); } });
  liberar.addEventListener('keyup', soltar);
};
