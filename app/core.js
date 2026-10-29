// Regras do aplicativo como funções puras (sem DOM, sem armazenamento): testadas em tests/core.test.mjs.

// Trilha única e completa: todo aprofundamento, competência e leitura é obrigatório.
export const NOTA_MINIMA = 80;
export const notaMinima = () => NOTA_MINIMA;
export const INTERVALOS_REVISAO = [1, 3, 7, 14, 30, 60, 120]; // dias
const DIA = 86400000;

/**
 * Versão do formato salvo. v1: escada de 13 degraus (0–12). v2: escada de 14 degraus (0–13), com a
 * patrística como degrau próprio (5). Aulas, livros, notas e sessões não mudam de id; só os degraus.
 */
export const VERSAO_ESTADO = 3;

/**
 * v2 → v3: a fase teológica passou a vir inteira antes da filosofia. A patrística (antigo 5) é agora o
 * degrau 2; introdução à filosofia, lógica e filosofia antiga (antigos 2, 3, 4) passam a 3, 4, 5.
 * Cada registro acompanha o mesmo conteúdo; nada é apagado.
 */
const DEGRAU_V2_PARA_V3 = { 2: 3, 3: 4, 4: 5, 5: 2 };
export function migrarParaFaseTeologica(degraus = {}) {
  return Object.fromEntries(Object.entries(degraus).map(([n, d]) => [DEGRAU_V2_PARA_V3[n] ?? Number(n), d]));
}

// ---------- Fases da formação ----------
/** Fase 1: teologia católica exclusiva (preparação, fundamentos e patrística). A fase 2 começa no degrau 3. */
export const FASE_TEOLOGICA = [0, 1, 2];
export const INICIO_MULTIDISCIPLINAR = 3;
export const faseTeologicaConcluida = (estado) => FASE_TEOLOGICA.every((n) => estado.degraus[n]?.concluido);
/** Conteúdo da fase 2 pode ser consultado, mas só conta (é concluído) depois da fase teológica. */
export const bloqueadoPelaFase = (estado, degrau) => degrau >= INICIO_MULTIDISCIPLINAR && !faseTeologicaConcluida(estado);
export const MSG_FASE = 'Concluir antes a fase teológica (degraus 0 a 2)';

export const FASES = {
  preparacao: 'Preparação teológica', teologia: 'Teologia em andamento', liberada: 'Teologia concluída: formação multidisciplinar liberada',
  multidisciplinar: 'Formação multidisciplinar em andamento', concluida: 'Formação integral concluída',
};
/** @param {number} [totalDegraus] */
export function faseFormacao(estado, totalDegraus = 14) {
  if (!estado.degraus[0]?.concluido) return 'preparacao';
  if (!faseTeologicaConcluida(estado)) return 'teologia';
  if (Array.from({ length: totalDegraus }, (_, n) => n).every((n) => estado.degraus[n]?.concluido)) return 'concluida';
  return Object.keys(estado.degraus).some((n) => n >= INICIO_MULTIDISCIPLINAR && (estado.degraus[n].concluido || estado.degraus[n].competencias?.some(Boolean))) ? 'multidisciplinar' : 'liberada';
}

/**
 * Migra o registro dos degraus da escada antiga para a nova. Cada degrau antigo leva seu progresso para o
 * degrau de mesmo conteúdo; o antigo 6 (patrística e escolástica) vai para o 7 e, se estava concluído,
 * conta também como concluído o novo 5 (patrística), cujo conteúdo fazia parte dele.
 */
const DEGRAU_V1_PARA_V2 = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
export function migrarDegraus(degrausV1 = {}) {
  const novo = {};
  for (const [n, d] of Object.entries(degrausV1)) {
    const alvo = DEGRAU_V1_PARA_V2[Number(n)];
    if (alvo !== undefined) novo[alvo] = d;
  }
  if (degrausV1[6]?.concluido) novo[5] = { concluido: true, data: degrausV1[6].data, migrado: true };
  return novo;
}

/** @returns {object} estado vazio de um estudante novo */
export function estadoInicial(agora = Date.now()) {
  return {
    v: VERSAO_ESTADO, criado: agora,
    perfil: { nome: '' },
    aulas: {},        // id -> { status: 'andamento'|'concluida', inicio, fim, fonteLida, acesso }
    tentativas: {},   // avaliacaoId -> [{ data, acertos, total, pct }]
    discursivas: {},  // itemId -> { texto, criterios: bool[], data }
    livros: {},       // id -> { estado, paginas, paginaAtual, inicio, fim, prioridade, edicao }
    notas: [],        // { id, titulo, texto, tipo, vinculo: {tipo, id}, pagina, criada, editada }
    favoritos: [],    // 'livro:id' | 'aula:id' | 'conceito:id'
    sessoes: [],      // { id, inicio, minutos, alvo: {tipo, id}, obs }
    revisoes: [],     // { id, frente, verso, origem, proxima, nivel, historico: [{data, lembrou}] }
    degraus: {},      // n -> { competencias: bool[], concluido, data }
    disciplinas: {},  // id da disciplina -> { etapa: data em que o estudante cumpriu exercício e critério }
    plano: { horasSemana: 6, dias: [1, 3, 5, 6], paginasHora: 12, livrosSimultaneos: 2, dataAlvo: '' },
    atual: { aula: null, livro: null },
  };
}

/** Mescla um estado salvo sobre o inicial, tolerando campos ausentes de versões antigas. */
export function normalizarEstado(salvo, agora = Date.now()) {
  const base = estadoInicial(agora);
  if (!salvo || typeof salvo !== 'object') return base;
  const out = { ...base };
  for (const k of Object.keys(base)) {
    const v = salvo[k];
    if (v === undefined || v === null) continue;
    if (Array.isArray(base[k])) out[k] = Array.isArray(v) ? v : base[k];
    else if (typeof base[k] === 'object') out[k] = typeof v === 'object' && !Array.isArray(v) ? { ...base[k], ...v } : base[k];
    else out[k] = v;
  }
  if (!(salvo.v >= 2)) out.degraus = migrarDegraus(out.degraus); // estado salvo na escada de 13 degraus
  if (!(salvo.v >= 3)) out.degraus = migrarParaFaseTeologica(out.degraus);
  out.v = VERSAO_ESTADO;
  return out;
}

export const normalizar = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/**
 * Corrige os itens objetivos de uma avaliação. Itens 'disc' não entram na nota.
 * @param {Array} itens
 * @param {Array} respostas  mc: índice; premissas: array de 'p'|'c'|'x'; validade: boolean
 * @returns {{acertos:number,total:number,pct:number,detalhes:(boolean|null)[]}}
 */
export function corrigir(itens, respostas) {
  const detalhes = itens.map((it, i) => {
    const r = respostas[i];
    if (it.tipo === 'mc') return r === it.correta;
    if (it.tipo === 'validade') return r === it.valido;
    if (it.tipo === 'premissas') return Array.isArray(r) && it.papeis.every((p, j) => r[j] === p);
    return null;
  });
  const objetivos = detalhes.filter((d) => d !== null);
  const acertos = objetivos.filter(Boolean).length;
  const total = objetivos.length;
  return { acertos, total, pct: total ? Math.round((acertos / total) * 100) : 100, detalhes };
}

/**
 * Resultado de uma avaliação conjunta por área (itens com `area`). A nota final é a da área mais fraca:
 * o bom desempenho numa disciplina não compensa o desconhecimento de outra.
 */
export function resultadoPorArea(itens, detalhes) {
  const areas = {};
  itens.forEach((it, i) => {
    if (!it.area || detalhes[i] === null) return;
    const a = (areas[it.area] ||= { acertos: 0, total: 0 });
    a.total += 1; if (detalhes[i]) a.acertos += 1;
  });
  for (const a of Object.values(areas)) a.pct = Math.round((a.acertos / a.total) * 100);
  const pcts = Object.values(areas).map((a) => a.pct);
  return { areas, pct: pcts.length ? Math.min(...pcts) : null };
}

export const melhorNota = (estado, avaliacaoId) =>
  Math.max(-1, ...(estado.tentativas[avaliacaoId] || []).map((t) => t.pct));

/**
 * Verifica se uma aula completa pode ser marcada como concluída.
 * Bloqueia conclusão prematura: exige a aula anterior do mesmo módulo, quiz ≥ mínimo,
 * discursivas respondidas e fonte lida. Abrir a aula nunca é bloqueado.
 */
export function aulaConcluivel(aula, estado, aulaAnteriorId, prova = null, degrau = 0) {
  const faltas = [];
  if (bloqueadoPelaFase(estado, degrau)) faltas.push(MSG_FASE);
  const min = notaMinima(estado);
  const respondida = (chave) => (estado.discursivas[chave]?.texto || '').trim();
  if (aulaAnteriorId && estado.aulas[aulaAnteriorId]?.status !== 'concluida') faltas.push('Concluir a aula anterior do módulo');
  if (aula.tipo === 'avaliacao') {
    // aula de avaliação: a prova do módulo substitui questionário e fonte
    const itens = prova?.itens || [];
    if (itens.some((it) => it.tipo !== 'disc') && melhorNota(estado, prova.id) < min) faltas.push(`Obter ao menos ${min}% na prova`);
    itens.forEach((it, i) => { if (it.tipo === 'disc' && !respondida(`${prova.id}-${i}`)) faltas.push('Responder às questões discursivas da prova'); });
    return { ok: faltas.length === 0, faltas: [...new Set(faltas)] };
  }
  if (melhorNota(estado, `quiz-${aula.id}`) < min) faltas.push(`Obter ao menos ${min}% no questionário`);
  aula.exercicios.forEach((ex, i) => { if (ex.tipo === 'disc' && !respondida(`${aula.id}-${i}`)) faltas.push('Responder à questão discursiva'); });
  if (!estado.aulas[aula.id]?.fonteLida) faltas.push('Marcar a leitura da fonte orientada');
  if (aula.avancado) {
    if (melhorNota(estado, `quiz-av-${aula.id}`) < min) faltas.push(`Obter ao menos ${min}% no questionário de aprofundamento`);
    aula.avancado.exercicios.forEach((ex, i) => { if (ex.tipo === 'disc' && !respondida(`${aula.id}-av-${i}`)) faltas.push('Responder à questão discursiva do aprofundamento'); });
  }
  return { ok: faltas.length === 0, faltas };
}

export const aulaConcluida = (estado, id) => estado.aulas[id]?.status === 'concluida';

/** Progresso de um módulo: aulas concluídas sobre o total previsto (inclui aulas ainda em preparação). */
export function progressoModulo(modulo, estado) {
  const total = modulo.aulas.length;
  const feitas = modulo.aulas.filter((a) => aulaConcluida(estado, a.id)).length;
  return { feitas, total, pct: total ? Math.round((feitas / total) * 100) : 0 };
}

export function progressoCurso(modulos, estado) {
  const total = modulos.reduce((s, m) => s + m.aulas.length, 0);
  const feitas = modulos.reduce((s, m) => s + progressoModulo(m, estado).feitas, 0);
  return { feitas, total, pct: total ? Math.round((feitas / total) * 1000) / 10 : 0 };
}

export const livroConcluido = (estado, id) => estado.livros[id]?.estado === 'concluido';

export function pctLivro(estado, id) {
  const l = estado.livros[id];
  if (!l) return 0;
  if (l.estado === 'concluido') return 100;
  return l.paginas > 0 ? Math.min(100, Math.round(((l.paginaAtual || 0) / l.paginas) * 100)) : 0;
}

// ---------- Comprovação de leitura ----------
// Marcar páginas ou registrar horas não basta para concluir um livro: o estudante escreve, com suas palavras,
// o que entendeu. A exigência cresce com a dificuldade da obra (nível 1 a 5) e não pede concordância com o autor.

export const CAMPOS_COMPROVACAO = {
  resumo: { rotulo: 'Resumo com suas palavras', dica: 'Qual é a pergunta da obra e qual a resposta do autor, em sequência.', minimo: 300 },
  conceitos: { rotulo: 'Definição dos conceitos essenciais', dica: 'Ao menos três termos da obra, um por linha, no formato "termo: definição".', minimo: 150 },
  argumento: { rotulo: 'Reconstrução de um argumento', dica: 'Premissas numeradas e a conclusão que o autor tira delas.', minimo: 150 },
  objecao: { rotulo: 'Objeção e resposta', dica: 'A objeção mais forte à tese central e a resposta que o autor daria (ou que falta).', minimo: 150 },
  transicao: { rotulo: 'Para a próxima leitura', dica: 'O que desta obra você vai precisar na leitura seguinte, e o que ainda não ficou claro.', minimo: 80 },
};

/** Campos exigidos para comprovar a leitura de um livro do nível dado. */
export function camposComprovacao(nivel = 3) {
  if (nivel <= 2) return ['resumo', 'conceitos', 'transicao'];
  if (nivel === 3) return ['resumo', 'conceitos', 'argumento', 'transicao'];
  return ['resumo', 'conceitos', 'argumento', 'objecao', 'transicao'];
}

export const chaveComprovacao = (id, campo) => `livro-${id}-${campo}`;
export const quizDoLivro = (id) => `quiz-livro-${id}`;

/**
 * { ok, faltas } da comprovação de leitura de um livro; faltas nomeiam o que ainda falta.
 * Livros com questionário objetivo (livro.questionario) exigem também a nota mínima nele.
 */
export function comprovacaoLivro(livro, estado) {
  const quiz = livro.questionario?.length && melhorNota(estado, quizDoLivro(livro.id)) < NOTA_MINIMA ? [`Obter ao menos ${NOTA_MINIMA}% no questionário da obra`] : [];
  // consultar uma obra da fase 2 é livre; comprová-la (e assim concluí-la) só depois da fase teológica
  const fase = bloqueadoPelaFase(estado, livro.degrau) ? [MSG_FASE] : [];
  const faltas = [...fase, ...quiz, ...camposComprovacao(livro.nivel).filter((c) => (estado.discursivas[chaveComprovacao(livro.id, c)]?.texto || '').trim().length < CAMPOS_COMPROVACAO[c].minimo)
    .map((c) => CAMPOS_COMPROVACAO[c].rotulo)];
  return { ok: faltas.length === 0, faltas };
}

// ---------- Leitor de PDF (o arquivo nunca é guardado; só a posição, o total e o tempo) ----------

/** Registra a página aberta no leitor. Marca o livro como "lendo", sem desfazer um "concluído". */
export function registrarPagina(livro = {}, pagina, total, agora = Date.now()) {
  const paginaAtual = Math.max(1, Math.min(total, Math.round(pagina) || 1));
  return { ...livro, estado: livro.estado === 'concluido' ? 'concluido' : 'lendo', paginas: total, paginaAtual, inicio: livro.inicio || agora };
}

export const concluirLeitura = (livro = {}, agora = Date.now()) => ({ ...livro, estado: 'concluido', paginaAtual: livro.paginas || livro.paginaAtual, fim: livro.fim || agora });

/** Sessão de estudo a partir do tempo de leitura; null abaixo de 1 minuto. */
export function sessaoLeitura(id, titulo, inicio, ms, novoIdFn) {
  const minutos = Math.min(720, Math.floor(ms / 60000));
  return minutos >= 1 ? { id: novoIdFn('s'), inicio, minutos, alvo: { tipo: 'livro', id }, obs: `Leitura: ${titulo}` } : null;
}

// cada aula pertence a um só degrau (degrau.aulas); o filtro por módulos fica para degraus montados à mão nos testes
const aulasDoDegrau = (degrau, modulos) => degrau.aulas || modulos.filter((m) => degrau.modulos.includes(m.id)).flatMap((m) => m.aulas);

/**
 * Progresso de um degrau: média entre aulas disponíveis concluídas, leituras obrigatórias concluídas
 * e competências autoavaliadas.
 */
export function progressoDegrau(degrau, modulos, aulasDisponiveis, estado) {
  const aulas = aulasDoDegrau(degrau, modulos).filter((a) => aulasDisponiveis.has(a.id));
  const partes = [];
  if (aulas.length) partes.push(aulas.filter((a) => aulaConcluida(estado, a.id)).length / aulas.length);
  if (degrau.leituras.length) partes.push(degrau.leituras.filter((id) => livroConcluido(estado, id)).length / degrau.leituras.length);
  const comp = estado.degraus[degrau.n]?.competencias || [];
  partes.push(degrau.competencias.filter((_, i) => comp[i]).length / degrau.competencias.length);
  const compAv = estado.degraus[degrau.n]?.competenciasAv || [];
  if (degrau.competenciasAvancadas?.length) partes.push(degrau.competenciasAvancadas.filter((_, i) => compAv[i]).length / degrau.competenciasAvancadas.length);
  return Math.round((partes.reduce((s, x) => s + x, 0) / partes.length) * 100);
}

/** Um degrau só pode ser concluído quando seus pré-requisitos foram concluídos e seus critérios atendidos. */
/** @param {object} [livros] id → livro; com ele, cada leitura concluída precisa também da comprovação escrita. */
export function degrauConcluivel(degrau, modulos, aulasDisponiveis, estado, livrosPorId = null) {
  const faltas = [];
  for (const p of degrau.prereq) if (!estado.degraus[p]?.concluido) faltas.push(`Concluir o degrau ${p}`);
  if (bloqueadoPelaFase(estado, degrau.n)) faltas.push(MSG_FASE);
  if (degrau.prova && melhorNota(estado, degrau.prova) < NOTA_MINIMA) faltas.push(`Obter ao menos ${NOTA_MINIMA}% na avaliação de síntese da fase teológica`);
  const pendentes = aulasDoDegrau(degrau, modulos).filter((a) => !aulaConcluida(estado, a.id));
  const emPreparacao = pendentes.filter((a) => !aulasDisponiveis.has(a.id)).length;
  if (pendentes.length - emPreparacao > 0) faltas.push(`Concluir ${pendentes.length - emPreparacao} aula(s) disponível(is)`);
  // aulas ainda não publicadas (emPreparacao) não bloqueiam: só o que já pode ser estudado é exigido
  const livros = degrau.leituras.filter((id) => !livroConcluido(estado, id)).length;
  if (livros) faltas.push(`Concluir ${livros} leitura(s) obrigatória(s)`);
  if (livrosPorId) {
    // leituras marcadas como concluídas antes da comprovação continuam concluídas; só falta escrevê-la
    const semComprovar = degrau.leituras.filter((id) => livroConcluido(estado, id) && livrosPorId[id] && !comprovacaoLivro(livrosPorId[id], estado).ok).length;
    if (semComprovar) faltas.push(`Escrever a comprovação de ${semComprovar} leitura(s) concluída(s)`);
  }
  const comp = estado.degraus[degrau.n]?.competencias || [];
  if (!degrau.competencias.every((_, i) => comp[i])) faltas.push('Confirmar todas as competências');
  const compAv = estado.degraus[degrau.n]?.competenciasAv || [];
  if (!(degrau.competenciasAvancadas || []).every((_, i) => compAv[i])) faltas.push('Confirmar todas as competências de aprofundamento');
  return { ok: faltas.length === 0, faltas };
}

// ---------- Revisões espaçadas ----------

export const inicioDoDia = (t) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };

export function novoCartao(frente, verso, origem, agora = Date.now(), id = `r${agora.toString(36)}${Math.random().toString(36).slice(2, 6)}`) {
  return { id, frente, verso, origem, nivel: 0, proxima: inicioDoDia(agora) + INTERVALOS_REVISAO[0] * DIA, historico: [] };
}

/** Lembrou: sobe um nível no intervalo. Esqueceu: volta ao início (revisão amanhã). */
export function responderCartao(cartao, lembrou, agora = Date.now()) {
  const nivel = lembrou ? Math.min(cartao.nivel + 1, INTERVALOS_REVISAO.length - 1) : 0;
  return { ...cartao, nivel, proxima: inicioDoDia(agora) + INTERVALOS_REVISAO[nivel] * DIA, historico: [...cartao.historico, { data: agora, lembrou }] };
}

export const revisoesPendentes = (revisoes, agora = Date.now()) => revisoes.filter((r) => r.proxima <= agora);

// ---------- Tempo de estudo ----------

/** Início da semana (segunda-feira 00:00) que contém t. */
export function inicioSemana(t) {
  const d = new Date(inicioDoDia(t));
  const dow = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - dow);
  return d.getTime();
}

export const minutosEntre = (sessoes, de, ate) => sessoes.filter((s) => s.inicio >= de && s.inicio < ate).reduce((m, s) => m + s.minutos, 0);

export function minutosSemana(sessoes, agora = Date.now(), deslocamento = 0) {
  const ini = inicioSemana(agora) + deslocamento * 7 * DIA;
  return minutosEntre(sessoes, ini, ini + 7 * DIA);
}

export const minutosTotal = (sessoes) => sessoes.reduce((m, s) => m + s.minutos, 0);

/** Duração média em minutos de uma string como "60–90 min". */
export function duracaoMin(texto) {
  const nums = String(texto || '').match(/\d+/g)?.map(Number) || [];
  return nums.length ? Math.round(nums.reduce((s, n) => s + n, 0) / nums.length) : 60;
}

// ---------- Plano adaptativo ----------

/**
 * Monta as tarefas da semana e a projeção de conclusão.
 * Adaptação: aulas com nota abaixo do mínimo voltam como "retomar"; revisões pendentes entram primeiro;
 * se a semana anterior ficou abaixo da meta, a carga não é aumentada para "compensar" —
 * a data projetada é que se ajusta. Nada é marcado como dominado automaticamente.
 * @param {{aulasPendentes:Array<{id,titulo,minutos}>, aulasReprovadas:Array<{id,titulo}>,
 *          livrosAtivos:Array<{id,titulo,paginasRestantes}>, revisoesPendentes:number,
 *          minutosSemanaPassada:number, minutosFaltantesCurso:number}} entrada
 */
export function planejarSemana(plano, entrada, agora = Date.now()) {
  const meta = Math.max(1, Number(plano.horasSemana) || 1) * 60;
  const tarefas = [];
  let usado = 0;
  const add = (t) => { tarefas.push(t); usado += t.minutos; };

  if (entrada.revisoesPendentes > 0) add({ tipo: 'revisao', titulo: `Revisar ${entrada.revisoesPendentes} cartão(ões) pendente(s)`, minutos: Math.min(30, 2 * entrada.revisoesPendentes + 5) });
  for (const a of entrada.aulasReprovadas) if (usado < meta) add({ tipo: 'retomar', id: a.id, titulo: `Retomar: ${a.titulo} (nota abaixo do mínimo)`, minutos: 45 });

  const livros = entrada.livrosAtivos.slice(0, Math.max(1, Number(plano.livrosSimultaneos) || 1));
  const reservaLeitura = livros.length ? Math.round((meta - usado) * 0.45) : 0;
  for (const a of entrada.aulasPendentes) {
    if (usado + a.minutos > meta - reservaLeitura && tarefas.some((t) => t.tipo === 'aula')) break;
    add({ tipo: 'aula', id: a.id, titulo: a.titulo, minutos: a.minutos });
  }
  const sobra = Math.max(0, meta - usado);
  const BLOCO_LEITURA = 60; // leitura difícil rende mais em sessões de até 1 h
  livros.forEach((l) => {
    let resta = Math.round(sobra / livros.length);
    while (resta > 0) {
      const min = Math.min(BLOCO_LEITURA, resta);
      resta -= min;
      const paginas = Math.max(1, Math.round((min / 60) * (Number(plano.paginasHora) || 10)));
      const pags = l.paginasRestantes ? Math.min(paginas, l.paginasRestantes) : paginas;
      add({ tipo: 'leitura', id: l.id, titulo: `${l.titulo}: ${pags} página(s)`, minutos: min });
    }
  });

  const dias = (plano.dias && plano.dias.length ? plano.dias : [1, 3, 5]).slice().sort((a, b) => a - b);
  const porDia = dias.map((d) => ({ dia: d, tarefas: [], minutos: 0 }));
  tarefas.forEach((t) => { const alvo = porDia.reduce((a, b) => (b.minutos < a.minutos ? b : a)); alvo.tarefas.push(t); alvo.minutos += t.minutos; });

  const semanasRestantes = Math.ceil(entrada.minutosFaltantesCurso / meta);
  const projecao = agora + semanasRestantes * 7 * DIA;
  const alvoMs = plano.dataAlvo ? Date.parse(plano.dataAlvo) : NaN;
  const avisos = [];
  // null = a semana passada é anterior ao início do curso, então não há atraso a apontar
  if (entrada.minutosSemanaPassada !== null && entrada.minutosSemanaPassada < meta * 0.6) avisos.push('Na semana passada você estudou menos de 60% da meta. A carga desta semana não foi aumentada para compensar; a data projetada foi ajustada.');
  if (entrada.aulasReprovadas.length) avisos.push('Há aulas com nota abaixo do mínimo: elas foram priorizadas antes de conteúdo novo.');
  if (!Number.isNaN(alvoMs) && projecao > alvoMs) avisos.push('No ritmo atual, a data pretendida não será alcançada. Aumente as horas semanais ou ajuste a data.');
  return { tarefas, porDia, meta, usado, semanasRestantes, projecao, avisos };
}

// ---------- Conquistas acadêmicas (derivadas de tarefas reais) ----------

export function conquistas(estado, modulos) {
  const concluidas = Object.values(estado.aulas).filter((a) => a.status === 'concluida').length;
  const livros = Object.values(estado.livros).filter((l) => l.estado === 'concluido').length;
  const horas = minutosTotal(estado.sessoes) / 60;
  const revisoes = estado.revisoes.reduce((s, r) => s + r.historico.length, 0);
  const modsConcluidos = modulos.filter((m) => progressoModulo(m, estado).pct === 100).length;
  const disc = Object.values(estado.discursivas).filter((d) => (d.texto || '').trim()).length;
  return [
    { titulo: 'Primeira aula concluída', ok: concluidas >= 1 },
    { titulo: 'Dez aulas concluídas', ok: concluidas >= 10 },
    { titulo: 'Primeiro livro lido por inteiro', ok: livros >= 1 },
    { titulo: 'Dez horas de estudo registradas', ok: horas >= 10 },
    { titulo: 'Cem horas de estudo registradas', ok: horas >= 100 },
    { titulo: 'Cinco respostas discursivas escritas', ok: disc >= 5 },
    { titulo: 'Cinquenta revisões feitas', ok: revisoes >= 50 },
    { titulo: 'Primeiro módulo concluído', ok: modsConcluidos >= 1 },
    { titulo: 'Primeiro degrau concluído', ok: Object.values(estado.degraus).some((d) => d.concluido) },
  ];
}

// ---------- Busca ----------

/** @param {Array<{tipo,id,titulo,texto}>} indice */
export function buscar(indice, consulta, limite = 40) {
  const termos = normalizar(consulta).split(/\s+/).filter(Boolean);
  if (!termos.length) return [];
  return indice
    .map((it) => {
      const t = normalizar(it.titulo), x = normalizar(it.texto);
      if (!termos.every((q) => t.includes(q) || x.includes(q))) return null;
      return { ...it, pontos: termos.reduce((s, q) => s + (t.includes(q) ? 3 : 1), 0) };
    })
    .filter(Boolean)
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, limite);
}

// ---------- Genealogia das ideias ----------

/**
 * Percorre as relações "bebeu de" a partir de um movimento.
 * dir 'origens': de quem ele recebeu (recursivo); 'herdeiros': quem recebeu dele (recursivo).
 * @returns {Map<string, number>} id -> geração (1 = relação direta)
 */
export function linhagem(movimentos, id, dir) {
  const porId = Object.fromEntries(movimentos.map((m) => [m.id, m]));
  const vizinhos = (x) => (dir === 'origens'
    ? (porId[x]?.bebeuDe || []).map((b) => b.id)
    : movimentos.filter((m) => m.bebeuDe.some((b) => b.id === x)).map((m) => m.id));
  const gen = new Map();
  let fronteira = [id];
  for (let g = 1; fronteira.length; g++) {
    const prox = [];
    for (const x of fronteira) for (const v of vizinhos(x)) if (v !== id && !gen.has(v)) { gen.set(v, g); prox.push(v); }
    fronteira = prox;
  }
  return gen;
}

/** Movimentos cujo período se sobrepõe ao de m (conviveram), ordenados pelo início. */
export const contemporaneos = (movimentos, m) =>
  movimentos.filter((o) => o.id !== m.id && o.inicio <= m.fim && o.fim >= m.inicio).sort((a, b) => a.inicio - b.inicio);

/**
 * Escala de tempo por trechos: cada trecho [ini, fim, px] recebe uma largura própria,
 * para que séculos recentes, mais densos, não fiquem espremidos.
 */
export function escalaTempo(trechos) {
  const acum = [];
  let x = 0;
  for (const [ini, fim, px] of trechos) { acum.push({ ini, fim, px, x0: x }); x += px; }
  const total = x;
  const ini = trechos[0][0], fim = trechos[trechos.length - 1][1];
  const posicao = (ano) => {
    if (ano <= ini) return 0;
    if (ano >= fim) return total;
    const t = acum.find((s) => ano >= s.ini && ano <= s.fim);
    return t.x0 + ((ano - t.ini) / (t.fim - t.ini)) * t.px;
  };
  return { posicao, total, ini, fim, trechos: acum };
}

export const fmtAno = (a, hoje = 2026) => (a >= hoje ? 'hoje' : a < 0 ? `${-a} a.C.` : String(a));

// ---------- Exportação ----------

export function notasParaMarkdown(notas, rotuloVinculo = (v) => `${v.tipo}: ${v.id}`, agora = Date.now()) {
  const linhas = ['# Caderno intelectual — Academia da Verdade', '', `Exportado em ${new Date(agora).toLocaleString('pt-BR')}`, ''];
  for (const n of notas) {
    linhas.push(`## ${n.titulo || 'Sem título'}`, '');
    const meta = [n.tipo && `Tipo: ${n.tipo}`, n.vinculo && `Vínculo: ${rotuloVinculo(n.vinculo)}`, n.pagina && `Página/trecho: ${n.pagina}`].filter(Boolean);
    if (meta.length) linhas.push(`*${meta.join(' · ')}*`, '');
    linhas.push(n.texto || '', '');
  }
  return linhas.join('\n');
}
