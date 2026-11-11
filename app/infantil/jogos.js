// Jogos da Academia Infantil: geradores de rodadas com níveis sem fim e dificuldade adaptativa.
// Só lógica (sem tela): cada gerador recebe o nível e um sorteador e devolve uma rodada
// { tipo, fala, idioma, texto, mostrar, opcoes: [{ chave, ... }], certa }. A tela (views/jogos.js) desenha conforme o jogo.
// Progressão pedagógica: quantidade antes do número escrito; palavra ouvida antes do som inicial; padrão antes de número.

export const SUBIR = 3; // acertos seguidos para subir de nível
export const DESCER = 2; // erros seguidos para recomeçar do nível 1 (pedido da família)

/** Dificuldade adaptativa: sobe depois de SUBIR acertos seguidos; depois de DESCER erros seguidos volta ao nível 1. */
export function ajustar(p, acertou) {
  if (acertou) {
    const seguidos = p.seguidos + 1;
    return seguidos >= SUBIR ? { nivel: p.nivel + 1, seguidos: 0, erros: 0 } : { nivel: p.nivel, seguidos, erros: 0 };
  }
  const erros = p.erros + 1;
  return erros >= DESCER ? { nivel: 1, seguidos: 0, erros: 0 } : { nivel: p.nivel, seguidos: 0, erros };
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
// Mesmo objetivo, outra apresentação: figuras conforme os interesses do filho (cadastro na aba Infantil).
export const TEMAS = {
  animais: [{ e: '🐑', um: 'ovelha', muitos: 'ovelhas', g: 'a' }, { e: '🐟', um: 'peixe', muitos: 'peixes', g: 'o' }, { e: '🐄', um: 'vaca', muitos: 'vacas', g: 'a' }, { e: '🐔', um: 'galinha', muitos: 'galinhas', g: 'a' }, { e: '🐇', um: 'coelho', muitos: 'coelhos', g: 'o' }],
  veiculos: [{ e: '🚗', um: 'carro', muitos: 'carros', g: 'o' }, { e: '✈️', um: 'avião', muitos: 'aviões', g: 'o' }, { e: '🚂', um: 'trem', muitos: 'trens', g: 'o' }, { e: '⛵', um: 'barco', muitos: 'barcos', g: 'o' }, { e: '🚲', um: 'bicicleta', muitos: 'bicicletas', g: 'a' }, { e: '🚜', um: 'trator', muitos: 'tratores', g: 'o' }],
  ceu: [{ e: '⭐', um: 'estrela', muitos: 'estrelas', g: 'a' }, { e: '☁️', um: 'nuvem', muitos: 'nuvens', g: 'a' }, { e: '🪐', um: 'planeta', muitos: 'planetas', g: 'o' }, { e: '🚀', um: 'foguete', muitos: 'foguetes', g: 'o' }, { e: '☄️', um: 'cometa', muitos: 'cometas', g: 'o' }],
  natureza: [{ e: '🌸', um: 'flor', muitos: 'flores', g: 'a' }, { e: '🌳', um: 'árvore', muitos: 'árvores', g: 'a' }, { e: '🍃', um: 'folha', muitos: 'folhas', g: 'a' }, { e: '🍄', um: 'cogumelo', muitos: 'cogumelos', g: 'o' }, { e: '🐚', um: 'concha', muitos: 'conchas', g: 'a' }],
};
const CHANCE_TEMA = 0.7; // o interesse é porta de entrada: 3 em 10 rodadas continuam com as figuras gerais
/** Coisa para contar: na maioria das vezes do tema do filho, às vezes das figuras gerais. */
export function coisaPara(interesses = [], rnd = Math.random) {
  const doTema = interesses.flatMap((i) => TEMAS[i] ?? []);
  return escolher(doTema.length && rnd() < CHANCE_TEMA ? doTema : COISAS, rnd);
}
const EXTENSO = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const extenso = (n, g) => (n === 1 ? (g === 'a' ? 'uma' : 'um') : n === 2 ? (g === 'a' ? 'duas' : 'dois') : EXTENSO[n] ?? String(n));
const nomeQtd = (n, c) => `${extenso(n, c.g)} ${n === 1 ? c.um : c.muitos}`;
export const MAX_DESENHO = 20; // acima disso a conta aparece só com números

/** Níveis: 1-5 achar o grupo com N; 6-10 contar e escolher o número; 11-13 qual tem mais; 14+ juntar (e, do 18, tirar). */
export function rodadaQuantos(nivel, rnd = Math.random, { interesses = [] } = {}) {
  const c = coisaPara(interesses, rnd);
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

// ---------------------------------------------------------------- 4. Que número é? (números até 100)

// Faixas por nível: primeiro até 10, depois até 20, as dezenas redondas, até 50 e até 100.
const FAIXAS_NUM = [[0, 10], [0, 10], [0, 10], [11, 20], [11, 20], [0, 20], [10, 100, 10], [10, 100, 10], [21, 50], [21, 50], [21, 50], [0, 100]];
const invertido = (n) => (n >= 10 && n % 10 !== 0 ? (n % 10) * 10 + Math.floor(n / 10) : null);

/** Ouvir o número e tocar no numeral. Níveis: 1-3 até 10; 4-6 até 20; 7-8 dezenas; 9-11 até 50; 12+ até 100, com opções cada vez mais parecidas (37 e 73, 46 e 56). */
export function rodadaNumeros(nivel, rnd = Math.random) {
  const [a, b, passo = 1] = FAIXAS_NUM[Math.min(nivel, FAIXAS_NUM.length) - 1];
  const sortear = () => a + passo * inteiro(0, Math.floor((b - a) / passo), rnd);
  const alvo = sortear();
  const nOpcoes = nivel <= 3 ? nivel + 1 : Math.min(6, 3 + Math.floor((nivel - 4) / 3));
  const parecidos = nivel >= 12 ? [invertido(alvo), alvo + 10, alvo - 10, alvo + 1, alvo - 1].filter((x) => x !== null && x >= 0 && x <= 100) : [];
  const outros = distintos(nOpcoes - 1, () => (parecidos.length && rnd() < 0.7 ? escolher(parecidos, rnd) : sortear()), (x) => x, [alvo]);
  const opcoes = embaralhar([alvo, ...outros], rnd).map((n) => ({ chave: `n${n}`, num: n, pontos: nivel <= 3 && n > 0 }));
  return { tipo: 'numero', fala: `Onde está o número ${alvo}?`, idioma: 'pt-BR', texto: 'Onde está o número?', mostrar: null, opcoes, certa: `n${alvo}` };
}

// ---------------------------------------------------------------- 5. O que combina? (associar palavras)

// Pares que combinam; os primeiros são os mais fáceis (do dia a dia da criança).
export const PARES = [
  [{ pt: 'abelha', e: '🐝' }, { pt: 'mel', e: '🍯' }], [{ pt: 'vaca', e: '🐄' }, { pt: 'leite', e: '🥛' }],
  [{ pt: 'galinha', e: '🐔' }, { pt: 'ovo', e: '🥚' }], [{ pt: 'cachorro', e: '🐕' }, { pt: 'osso', e: '🦴' }],
  [{ pt: 'coelho', e: '🐇' }, { pt: 'cenoura', e: '🥕' }], [{ pt: 'macaco', e: '🐒' }, { pt: 'banana', e: '🍌' }],
  [{ pt: 'bebê', e: '👶' }, { pt: 'mamadeira', e: '🍼' }], [{ pt: 'chuva', e: '🌧️' }, { pt: 'guarda-chuva', e: '☂️' }],
  // a partir daqui, pares que pedem mais pensamento (do nível 4)
  [{ pt: 'rato', e: '🐭' }, { pt: 'queijo', e: '🧀' }], [{ pt: 'pé', e: '🦶' }, { pt: 'meia', e: '🧦' }],
  [{ pt: 'mão', e: '✋' }, { pt: 'luva', e: '🧤' }], [{ pt: 'frio', e: '❄️' }, { pt: 'casaco', e: '🧥' }],
  [{ pt: 'chave', e: '🔑' }, { pt: 'cadeado', e: '🔒' }], [{ pt: 'lápis', e: '✏️' }, { pt: 'papel', e: '📄' }],
  [{ pt: 'noite', e: '🌙' }, { pt: 'cama', e: '🛏️' }], [{ pt: 'pão', e: '🍞' }, { pt: 'manteiga', e: '🧈' }],
  [{ pt: 'sino', e: '🔔' }, { pt: 'igreja', e: '⛪' }], [{ pt: 'vela', e: '🕯️' }, { pt: 'fogo', e: '🔥' }],
];
const PARES_FACEIS = 8;
// Grupos para "qual não é do grupo?".
export const GRUPOS = {
  animais: [{ pt: 'ovelha', e: '🐑' }, { pt: 'peixe', e: '🐟' }, { pt: 'gato', e: '🐈' }, { pt: 'leão', e: '🦁' }, { pt: 'sapo', e: '🐸' }, { pt: 'pássaro', e: '🐦' }],
  frutas: [{ pt: 'maçã', e: '🍎' }, { pt: 'uva', e: '🍇' }, { pt: 'banana', e: '🍌' }, { pt: 'morango', e: '🍓' }, { pt: 'pera', e: '🍐' }, { pt: 'laranja', e: '🍊' }],
  roupas: [{ pt: 'sapato', e: '👟' }, { pt: 'meia', e: '🧦' }, { pt: 'luva', e: '🧤' }, { pt: 'casaco', e: '🧥' }, { pt: 'chapéu', e: '🎩' }, { pt: 'vestido', e: '👗' }],
  ceu: [{ pt: 'sol', e: '☀️' }, { pt: 'lua', e: '🌙' }, { pt: 'estrela', e: '⭐' }, { pt: 'nuvem', e: '☁️' }, { pt: 'arco-íris', e: '🌈' }],
};
const figura = (x) => ({ chave: x.pt, e: x.e, pt: x.pt });

/** Níveis: 1-3 o que combina (2 a 4 figuras, pares fáceis); 4-6 todos os pares, 4 figuras; 7+ nos ímpares "qual não é do grupo?", nos pares o que combina com até 6 figuras. */
export function rodadaPalavras(nivel, rnd = Math.random) {
  if (nivel >= 7 && nivel % 2 === 1) {
    const nomes = embaralhar(Object.keys(GRUPOS), rnd);
    const iguais = embaralhar(GRUPOS[nomes[0]], rnd).slice(0, nivel >= 11 ? 4 : 3);
    const intruso = escolher(GRUPOS[nomes[1]], rnd);
    const opcoes = embaralhar([...iguais, intruso], rnd).map(figura);
    return { tipo: 'intruso', fala: 'Qual não é do mesmo grupo?', idioma: 'pt-BR', texto: 'Qual não é do grupo?', mostrar: null, opcoes, certa: intruso.pt };
  }
  const base = nivel <= 3 ? PARES.slice(0, PARES_FACEIS) : PARES;
  const nOpcoes = nivel <= 3 ? nivel + 1 : nivel <= 6 ? 4 : Math.min(6, 4 + Math.floor((nivel - 6) / 4));
  const [modelo, certo] = escolher(base, rnd);
  const outros = distintos(nOpcoes - 1, () => escolher(base, rnd)[1], (x) => x.pt, [certo]);
  const opcoes = embaralhar([certo, ...outros], rnd).map(figura);
  return { tipo: 'combina', fala: `O que combina com ${modelo.pt}?`, idioma: 'pt-BR', texto: `O que combina com ${modelo.pt}?`, mostrar: { modelo: figura(modelo) }, opcoes, certa: certo.pt };
}

// idade: faixa indicativa em anos (referência, não barreira: o nível acompanha o que a criança demonstra).
// habilidades: o que o jogo trabalha, para os pais e para o texto de análise por IA.
export const JOGOS = {
  quantos: { id: 'quantos', titulo: 'Quantos são?', area: 'Matemática', idade: [2, 6], habilidades: ['contagem', 'quantidade', 'comparação', 'adição e subtração concretas'], ajuda: 'Achar o grupo, contar, comparar e, mais adiante, juntar e tirar. A quantidade vem antes do número escrito.', rodada: rodadaQuantos },
  depois: { id: 'depois', titulo: 'O que vem depois?', area: 'Raciocínio', idade: [2, 7], habilidades: ['padrões', 'atenção', 'sequências numéricas'], ajuda: 'Padrões de forma, cor e tamanho; depois, sequências de números cada vez mais difíceis.', rodada: rodadaDepois },
  ouvir: { id: 'ouvir', titulo: 'Ouvir e achar', area: 'Linguagem e inglês', idade: [2, 6], habilidades: ['vocabulário', 'compreensão oral', 'inglês', 'consciência fonológica'], ajuda: 'Ouvir a palavra e tocar na figura; depois em inglês; mais adiante, o som do começo da palavra.', rodada: rodadaOuvir },
  numeros: { id: 'numeros', titulo: 'Que número é?', area: 'Matemática', idade: [3, 7], habilidades: ['reconhecer numerais', 'sistema de numeração até 100'], ajuda: 'Ouvir o número e tocar no número escrito: até 10, até 20, as dezenas e, mais adiante, até 100.', rodada: rodadaNumeros },
  palavras: { id: 'palavras', titulo: 'O que combina?', area: 'Linguagem e raciocínio', idade: [2, 6], habilidades: ['vocabulário', 'associação', 'classificação'], ajuda: 'Juntar as coisas que andam juntas (abelha e mel); mais adiante, achar a que não é do grupo.', rodada: rodadaPalavras },
};

// ---------------------------------------------------------------- tempo de tela (opcional)

export const LIMITES = [0, 5, 10, 15, 20, 30]; // minutos por dia; 0 = sem limite
export const hojeISO = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
/** Tempo já usado hoje (ms); zera quando o dia muda. */
export const usadoHoje = (registro, hoje = hojeISO()) => (registro?.dia === hoje ? Math.max(0, Number(registro.ms) || 0) : 0);
export const acabou = (limiteMin, usadoMs) => limiteMin > 0 && usadoMs >= limiteMin * 60000;
