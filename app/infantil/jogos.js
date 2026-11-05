// Jogos da Academia Infantil: geradores de rodadas com níveis sem fim e dificuldade adaptativa.
// Só lógica (sem tela): cada gerador recebe o nível e um sorteador e devolve uma rodada
// { tipo, fala, idioma, texto, mostrar, opcoes: [{ chave, ... }], certa }. A tela (views/jogos.js) desenha conforme o jogo.
// Progressão pedagógica: quantidade antes do número escrito; palavra ouvida antes do som inicial; padrão antes de número.

export const SUBIR = 3; // acertos seguidos para subir de nível
export const DESCER = 2; // erros seguidos para descer

/** Dificuldade adaptativa: sobe depois de SUBIR acertos seguidos, desce depois de DESCER erros seguidos; nunca abaixo de 1. */
export function ajustar(p, acertou) {
  if (acertou) {
    const seguidos = p.seguidos + 1;
    return seguidos >= SUBIR ? { nivel: p.nivel + 1, seguidos: 0, erros: 0 } : { nivel: p.nivel, seguidos, erros: 0 };
  }
  const erros = p.erros + 1;
  return erros >= DESCER ? { nivel: Math.max(1, p.nivel - 1), seguidos: 0, erros: 0 } : { nivel: p.nivel, seguidos: 0, erros };
}

export const progressoInicial = () => ({ nivel: 1, seguidos: 0, erros: 0 });

// ---------------------------------------------------------------- sorteio

const inteiro = (a, b, rnd) => a + Math.floor(rnd() * (b - a + 1));
const escolher = (lista, rnd) => lista[Math.floor(rnd() * lista.length)];
const embaralhar = (lista, rnd) => {
  const c = [...lista];
  for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c;
};
/** n valores distintos de gerar(), sem repetir chave e sem os proibidos; para quando a fonte se esgota. */
function distintos(n, gerar, chave, proibidas = []) {
  const vistas = new Set(proibidas.map(chave));
  const saida = [];
  for (let tentativa = 0; saida.length < n && tentativa < 400; tentativa++) {
    const v = gerar();
    const k = chave(v);
    if (!vistas.has(k)) { vistas.add(k); saida.push(v); }
  }
  return saida;
}
const vizinhos = (n, certo, rnd) => distintos(n, () => Math.max(0, certo + inteiro(-4, 4, rnd)), (x) => x, [certo]);

// ---------------------------------------------------------------- 1. Quantos são? (matemática)

// Coisas para contar, com singular, plural e gênero (as frases saem certas para 1 e para muitos).
export const COISAS = [
  { e: '🐑', um: 'ovelha', muitos: 'ovelhas', g: 'a' },
  { e: '🐟', um: 'peixe', muitos: 'peixes', g: 'o' },
  { e: '⭐', um: 'estrela', muitos: 'estrelas', g: 'a' },
  { e: '🕯️', um: 'vela', muitos: 'velas', g: 'a' },
  { e: '🍞', um: 'pão', muitos: 'pães', g: 'o' },
  { e: '🕊️', um: 'pomba', muitos: 'pombas', g: 'a' },
  { e: '🍎', um: 'maçã', muitos: 'maçãs', g: 'a' },
  { e: '🌸', um: 'flor', muitos: 'flores', g: 'a' },
];
const EXTENSO = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const extenso = (n, g) => (n === 1 ? (g === 'a' ? 'uma' : 'um') : n === 2 ? (g === 'a' ? 'duas' : 'dois') : EXTENSO[n] ?? String(n));
const nomeQtd = (n, c) => `${extenso(n, c.g)} ${n === 1 ? c.um : c.muitos}`;
export const MAX_DESENHO = 20; // acima disso a conta aparece só com números

/** Níveis: 1-5 achar o grupo com N; 6-10 contar e escolher o número; 11-13 qual tem mais; 14+ juntar (e, do 18, tirar). */
export function rodadaQuantos(nivel, rnd = Math.random) {
  const c = escolher(COISAS, rnd);
  if (nivel <= 5) {
    const max = [2, 3, 3, 4, 5][nivel - 1];
    const nOpcoes = [2, 2, 3, 3, 3][nivel - 1];
    const alvo = inteiro(1, max, rnd);
    const outros = distintos(nOpcoes - 1, () => inteiro(1, max, rnd), (x) => x, [alvo]);
    const opcoes = embaralhar([alvo, ...outros], rnd).map((n) => ({ chave: `g${n}`, qtd: n, e: c.e }));
    return { tipo: 'achar', fala: `Onde tem ${nomeQtd(alvo, c)}?`, idioma: 'pt-BR', texto: `Onde tem ${alvo}?`, mostrar: null, opcoes, certa: `g${alvo}` };
  }
  if (nivel <= 10) {
    const alvo = inteiro(Math.max(2, nivel - 4), nivel, rnd); // até 6, 7… 10
    const outros = distintos(2, () => inteiro(1, nivel + 1, rnd), (x) => x, [alvo]);
    const opcoes = embaralhar([alvo, ...outros], rnd).map((n) => ({ chave: `n${n}`, num: n, pontos: nivel <= 8 }));
    return { tipo: 'contar', fala: `Quant${c.g}s ${c.muitos} tem aqui?`, idioma: 'pt-BR', texto: 'Quantos tem?', mostrar: { grupos: [{ qtd: alvo, e: c.e }] }, opcoes, certa: `n${alvo}` };
  }
  if (nivel <= 13) {
    const dif = Math.max(1, 13 - nivel); // 2, 1, 1: a diferença diminui
    const menor = inteiro(1, 10 - dif, rnd);
    const maior = Math.min(10, menor + inteiro(dif, dif + 2, rnd));
    const opcoes = embaralhar([maior, menor], rnd).map((n) => ({ chave: `g${n}`, qtd: n, e: c.e }));
    return { tipo: 'mais', fala: `Onde tem mais ${c.muitos}?`, idioma: 'pt-BR', texto: 'Onde tem mais?', mostrar: null, opcoes, certa: `g${maior}` };
  }
  const limite = 5 + (nivel - 14) * 2;
  const tirar = nivel >= 18 && rnd() < 0.5;
  let a; let b; let r;
  if (tirar) { a = inteiro(2, limite, rnd); b = inteiro(1, a - 1, rnd); r = a - b; } else { a = inteiro(1, limite - 1, rnd); b = inteiro(1, limite - a, rnd); r = a + b; }
  const opcoes = embaralhar([r, ...vizinhos(nivel >= 20 ? 3 : 2, r, rnd)], rnd).map((n) => ({ chave: `n${n}`, num: n, pontos: false }));
  const conta = `${a} ${tirar ? '−' : '+'} ${b}`;
  const desenhar = (tirar ? a : a + b) <= MAX_DESENHO;
  const fala = tirar
    ? `Tinha ${nomeQtd(a, c)}. ${b === 1 ? 'Saiu' : 'Saíram'} ${nomeQtd(b, c)}. Quant${c.g}s ficaram?`
    : `Tem ${nomeQtd(a, c)}. ${b === 1 ? 'Chegou' : 'Chegaram'} mais ${nomeQtd(b, c)}. Quant${c.g}s tem agora?`;
  return { tipo: tirar ? 'tirar' : 'juntar', fala, idioma: 'pt-BR', texto: `${conta} = ?`, mostrar: desenhar ? { grupos: tirar ? [{ qtd: a, e: c.e, sai: b }] : [{ qtd: a, e: c.e }, { qtd: b, e: c.e }], conta } : { conta }, opcoes, certa: `n${r}` };
}

// ---------------------------------------------------------------- 2. Ouvir e achar (linguagem e inglês)

// som: o primeiro som da palavra falada (não a letra), para o jogo do som inicial. f: palavra feminina (o/a).
export const PALAVRAS = [
  { pt: 'ovelha', en: 'sheep', e: '🐑', som: 'o', f: 1 }, { pt: 'peixe', en: 'fish', e: '🐟', som: 'p' },
  { pt: 'gato', en: 'cat', e: '🐈', som: 'g' }, { pt: 'sol', en: 'sun', e: '☀️', som: 's' },
  { pt: 'lua', en: 'moon', e: '🌙', som: 'l', f: 1 }, { pt: 'estrela', en: 'star', e: '⭐', som: 'e', f: 1 },
  { pt: 'flor', en: 'flower', e: '🌸', som: 'f', f: 1 }, { pt: 'maçã', en: 'apple', e: '🍎', som: 'm', f: 1 },
  { pt: 'casa', en: 'house', e: '🏠', som: 'k', f: 1 }, { pt: 'bola', en: 'ball', e: '⚽', som: 'b', f: 1 },
  { pt: 'vaca', en: 'cow', e: '🐄', som: 'v', f: 1 }, { pt: 'uva', en: 'grapes', e: '🍇', som: 'u', f: 1 },
  // a partir daqui, palavras menos comuns (do nível 7)
  { pt: 'pássaro', en: 'bird', e: '🐦', som: 'p' }, { pt: 'árvore', en: 'tree', e: '🌳', som: 'a', f: 1 },
  { pt: 'pão', en: 'bread', e: '🍞', som: 'p' }, { pt: 'igreja', en: 'church', e: '⛪', som: 'i', f: 1 },
  { pt: 'vela', en: 'candle', e: '🕯️', som: 'v', f: 1 }, { pt: 'sino', en: 'bell', e: '🔔', som: 's' },
  { pt: 'pomba', en: 'dove', e: '🕊️', som: 'p', f: 1 }, { pt: 'leão', en: 'lion', e: '🦁', som: 'l' },
  { pt: 'barco', en: 'boat', e: '⛵', som: 'b' }, { pt: 'coração', en: 'heart', e: '❤️', som: 'k' },
  { pt: 'livro', en: 'book', e: '📖', som: 'l' }, { pt: 'chave', en: 'key', e: '🔑', som: 'x', f: 1 },
  { pt: 'coroa', en: 'crown', e: '👑', som: 'k', f: 1 }, { pt: 'abelha', en: 'bee', e: '🐝', som: 'a', f: 1 },
  { pt: 'rato', en: 'mouse', e: '🐭', som: 'r' }, { pt: 'sapo', en: 'frog', e: '🐸', som: 's' },
  { pt: 'mão', en: 'hand', e: '✋', som: 'm', f: 1 }, { pt: 'anjo', en: 'angel', e: '👼', som: 'ã' },
];
const FACEIS = 12;
const comoOpcao = (p) => ({ chave: p.pt, e: p.e, pt: p.pt, en: p.en });

/** Níveis: 1-3 palavra em português (2 a 4 figuras); 4-6 em inglês; 7-9 misturado com 5 figuras; 10+ som inicial nos níveis pares, até 6 figuras. */
export function rodadaOuvir(nivel, rnd = Math.random) {
  const base = nivel <= 6 ? PALAVRAS.slice(0, FACEIS) : PALAVRAS;
  const nOpcoes = nivel <= 6 ? 2 + ((nivel - 1) % 3) : Math.min(6, 5 + Math.floor((nivel - 7) / 4));
  if (nivel >= 10 && nivel % 2 === 0) {
    const modelo = escolher(base.filter((p) => base.some((q) => q !== p && q.som === p.som)), rnd);
    const alvo = escolher(base.filter((p) => p !== modelo && p.som === modelo.som), rnd);
    const outros = distintos(nOpcoes - 1, () => escolher(base, rnd), (p) => p.som, [modelo]);
    const opcoes = embaralhar([alvo, ...outros], rnd).map(comoOpcao);
    return { tipo: 'som', fala: `Qual começa com o mesmo som de ${modelo.pt}?`, idioma: 'pt-BR', texto: `Começa como ${modelo.pt}`, mostrar: { modelo: comoOpcao(modelo) }, opcoes, certa: alvo.pt };
  }
  const ingles = (nivel >= 4 && nivel <= 6) || (nivel >= 7 && rnd() < 0.5);
  const alvo = escolher(base, rnd);
  const outros = distintos(nOpcoes - 1, () => escolher(base, rnd), (p) => p.pt, [alvo]);
  const opcoes = embaralhar([alvo, ...outros], rnd).map(comoOpcao);
  const art = alvo.f ? 'a' : 'o';
  return ingles
    ? { tipo: 'ingles', fala: `Where is the ${alvo.en}?`, idioma: 'en-US', texto: `Where is the ${alvo.en}? (${art} ${alvo.pt})`, mostrar: null, opcoes, certa: alvo.pt }
    : { tipo: 'palavra', fala: `Onde está ${art} ${alvo.pt}?`, idioma: 'pt-BR', texto: `Onde está ${art} ${alvo.pt}?`, mostrar: null, opcoes, certa: alvo.pt };
}

// ---------------------------------------------------------------- 3. O que vem depois? (raciocínio)

export const FORMAS = ['circulo', 'triangulo', 'quadrado', 'estrela', 'cruz', 'coracao'];
export const CORES = ['rubi', 'safira', 'esmeralda', 'ambar'];
const TAMANHOS = ['p', 'm', 'g'];
const chavePeca = (x) => (x.num !== undefined ? `n${x.num}` : `${x.forma}-${x.cor}-${x.tam}`);
const peca = (forma, cor, tam = 'm') => ({ forma, cor, tam });
const pecaAleatoria = (rnd) => peca(escolher(FORMAS, rnd), escolher(CORES, rnd));
// unidades do padrão: índices das peças distintas (A = 0, B = 1, C = 2)
const UNIDADES = { AB: [0, 1], AAB: [0, 0, 1], ABB: [0, 1, 1], ABC: [0, 1, 2], AABB: [0, 0, 1, 1] };

function padraoDePecas(unidade, pecas, rnd, nOpcoes, mostrar = 6) {
  const total = Math.max(mostrar, unidade.length * 2) + 1;
  const seq = Array.from({ length: total }, (_, i) => pecas[unidade[i % unidade.length]]);
  const certa = seq[total - 1];
  const outros = distintos(nOpcoes - 1, () => (rnd() < 0.6 ? escolher(pecas, rnd) : pecaAleatoria(rnd)), chavePeca, [certa]);
  return { seq: seq.slice(0, -1), certa, opcoes: embaralhar([certa, ...outros], rnd) };
}

function padraoDeNumeros(nivel, rnd) {
  let seq; let certa;
  if (nivel <= 11) {
    const passo = nivel === 9 ? 1 : nivel === 10 ? 2 : -1;
    const inicio = passo > 0 ? inteiro(1, 5, rnd) : inteiro(6, 10, rnd);
    seq = [0, 1, 2, 3].map((i) => inicio + passo * i);
    certa = inicio + passo * 4;
  } else if (nivel >= 18 && rnd() < 0.4) {
    const inicio = inteiro(1, 3, rnd);
    seq = [0, 1, 2, 3].map((i) => inicio * 2 ** i); // dobra
    certa = inicio * 16;
  } else if (nivel >= 15 && rnd() < 0.5) {
    const a = inteiro(1, 3, rnd); const b = inteiro(4, 6, rnd); // soma a, soma b, soma a…
    seq = [inteiro(1, 9, rnd)];
    for (let i = 1; i < 5; i++) seq.push(seq[i - 1] + (i % 2 ? a : b));
    certa = seq.pop();
  } else {
    const tamanho = inteiro(1, Math.ceil((nivel - 8) / 2), rnd);
    const passo = rnd() < 0.25 ? -tamanho : tamanho;
    const inicio = passo > 0 ? inteiro(0, 10, rnd) : inteiro(tamanho * 4, tamanho * 4 + 10, rnd); // nunca negativo
    seq = [0, 1, 2, 3].map((i) => inicio + passo * i);
    certa = inicio + passo * 4;
  }
  const opcoes = embaralhar([certa, ...vizinhos(nivel >= 14 ? 3 : 2, certa, rnd)], rnd);
  return { seq: seq.map((num) => ({ num })), certa: { num: certa }, opcoes: opcoes.map((num) => ({ num })) };
}

/** Três peças com formas diferentes (para o padrão ficar visível). */
function tresPecas(rnd) {
  const formas = embaralhar(FORMAS, rnd).slice(0, 3);
  return formas.map((f) => peca(f, escolher(CORES, rnd)));
}

/** Níveis: 1-2 AB; 3 AAB/ABB; 4 ABC; 5 AABB; 6 ABC com 4 opções; 7 só a cor muda; 8 tamanhos; 9+ números (+1, +2, −1, passos maiores, alternados, dobro). */
export function rodadaDepois(nivel, rnd = Math.random) {
  let r;
  if (nivel <= 6) {
    const unidade = nivel <= 2 ? UNIDADES.AB : nivel === 3 ? (rnd() < 0.5 ? UNIDADES.AAB : UNIDADES.ABB) : nivel === 5 ? UNIDADES.AABB : UNIDADES.ABC;
    r = padraoDePecas(unidade, tresPecas(rnd), rnd, nivel === 1 ? 2 : nivel === 6 ? 4 : 3, nivel <= 2 ? 4 : 6);
  } else if (nivel === 7) {
    const forma = escolher(FORMAS, rnd);
    r = padraoDePecas(UNIDADES.ABC, embaralhar(CORES, rnd).slice(0, 3).map((c) => peca(forma, c)), rnd, 1);
    r.opcoes = embaralhar(CORES.map((c) => peca(forma, c)), rnd); // as 4 cores na mesma forma
  } else if (nivel === 8) {
    const forma = escolher(FORMAS, rnd); const cor = escolher(CORES, rnd);
    r = padraoDePecas(UNIDADES.ABC, TAMANHOS.map((t) => peca(forma, cor, t)), rnd, 1);
    r.opcoes = embaralhar(TAMANHOS.map((t) => peca(forma, cor, t)), rnd);
  } else {
    r = padraoDeNumeros(nivel, rnd);
  }
  const numeros = r.certa.num !== undefined;
  const pergunta = numeros ? 'Que número vem depois?' : 'O que vem depois?';
  return { tipo: numeros ? 'numeros' : 'pecas', fala: pergunta, idioma: 'pt-BR', texto: pergunta, mostrar: { seq: r.seq }, opcoes: r.opcoes.map((x) => ({ chave: chavePeca(x), ...x })), certa: chavePeca(r.certa) };
}

export const JOGOS = {
  quantos: { id: 'quantos', titulo: 'Quantos são?', area: 'Matemática', ajuda: 'Achar o grupo, contar, comparar e, mais adiante, juntar e tirar. A quantidade vem antes do número escrito.', rodada: rodadaQuantos },
  depois: { id: 'depois', titulo: 'O que vem depois?', area: 'Raciocínio', ajuda: 'Padrões de forma, cor e tamanho; depois, sequências de números cada vez mais difíceis.', rodada: rodadaDepois },
  ouvir: { id: 'ouvir', titulo: 'Ouvir e achar', area: 'Linguagem e inglês', ajuda: 'Ouvir a palavra e tocar na figura; depois em inglês; mais adiante, o som do começo da palavra.', rodada: rodadaOuvir },
};

// ---------------------------------------------------------------- tempo de tela (opcional)

export const LIMITES = [0, 5, 10, 15, 20, 30]; // minutos por dia; 0 = sem limite
export const hojeISO = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
/** Tempo já usado hoje (ms); zera quando o dia muda. */
export const usadoHoje = (registro, hoje = hojeISO()) => (registro?.dia === hoje ? Math.max(0, Number(registro.ms) || 0) : 0);
export const acabou = (limiteMin, usadoMs) => limiteMin > 0 && usadoMs >= limiteMin * 60000;
