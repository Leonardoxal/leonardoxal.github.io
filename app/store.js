// Persistência do estado do estudante.
// 1) Sempre grava uma cópia local (localStorage) para abrir rápido e funcionar offline.
// 2) Quando o app roda publicado no claude.ai, grava também no banco privado do artefato
//    (data/users/<id>/...), visível só para este usuário, e que sobrevive a troca de navegador.
// 3) Fora do claude.ai, com Supabase configurado (config.js) e o usuário logado, grava na tabela
//    "progresso" do Supabase, o que sincroniza celular, PC e qualquer outro aparelho.
// O estado é dividido em documentos para respeitar o limite de 256 KiB por documento.
//
// Qual cópia vale: cada alteração carimba `editado`. A "base" é o carimbo da versão da conta que este
// aparelho viu por último. Se a conta ainda está na base, nada mudou lá e a cópia local (mais nova) é enviada;
// se a conta mudou depois da base, outro aparelho salvou antes e a versão da conta é carregada, sem sobrescrevê-la.
import { estadoInicial, normalizarEstado, VERSAO_ESTADO } from './core.js';
import { nuvemConfigurada, clienteNuvem, usuarioNuvem, refsNuvem, sair } from './nuvem.js';

const CHAVE_LOCAL = 'academia-verdade-estado-v1';
const CHAVE_BASE = 'academia-verdade-base-conta';
const PARTES = {
  nucleo: (e) => { const { notas, sessoes, revisoes, tentativas, discursivas, ...resto } = e; return resto; },
  notas: (e) => ({ itens: e.notas }),
  sessoes: (e) => ({ itens: e.sessoes }),
  revisoes: (e) => ({ itens: e.revisoes }),
  respostas: (e) => ({ tentativas: e.tentativas, discursivas: e.discursivas }),
};
const LIMITE_DOC = 250 * 1024;

const juntar = (docs) => normalizarEstado({
  ...(docs.nucleo || {}),
  notas: docs.notas?.itens, sessoes: docs.sessoes?.itens, revisoes: docs.revisoes?.itens,
  tentativas: docs.respostas?.tentativas, discursivas: docs.respostas?.discursivas,
});

function lerLocal() {
  try { const t = localStorage.getItem(CHAVE_LOCAL); return t ? normalizarEstado(JSON.parse(t)) : null; } catch { return null; }
}
function gravarLocal(e) {
  try { localStorage.setItem(CHAVE_LOCAL, JSON.stringify(e)); return true; } catch { return false; }
}
function lerBase() {
  try { const t = localStorage.getItem(CHAVE_BASE); return t === null ? null : Number(t); } catch { return null; }
}
function gravarBase(n) {
  try { n === null ? localStorage.removeItem(CHAVE_BASE) : localStorage.setItem(CHAVE_BASE, String(n)); } catch { /* sem armazenamento: a próxima abertura confia na conta */ }
}

const temDados = (e) => Object.keys(e.aulas).length || e.notas.length || e.sessoes.length || Object.keys(e.livros).length;

/**
 * @param {(estado:object)=>void} aoMudar      chamado quando o estado muda (redesenhar)
 * @param {(status:{modo:string,msg:string})=>void} aoStatus  chamado quando só o status de salvamento muda
 * @param {() => Promise<object|null>} [abrir]  referências do banco; os testes passam um banco em memória
 */
export function criarStore(aoMudar, aoStatus, abrir = abrirBanco) {
  let estado = lerLocal() || estadoInicial();
  let status = { modo: 'local', msg: 'Salvando apenas neste navegador.' };
  let refs = null;                // { parte: DocumentReference }
  const ultimoSalvo = {};         // parte -> JSON gravado no banco
  let fila = Promise.resolve();
  let timer = null;

  const setStatus = (modo, msg) => { status = { modo, msg }; aoStatus(status); };
  const enfileirar = (fn) => (fila = fila.then(fn));

  function agendarRemoto() {
    if (!refs) return;
    clearTimeout(timer);
    timer = setTimeout(() => { timer = null; enfileirar(gravarRemoto); }, 1200);
  }

  /** Carimbo `editado` da versão atual na conta; null se a conta ainda não tem dados. */
  async function editadoNaConta() {
    const s = await refs.nucleo.get();
    return s.exists ? Number(s.data()?.editado) || 0 : null;
  }

  async function gravarRemoto() {
    if (!refs) return;
    try {
      const naConta = await editadoNaConta();
      // outro aparelho salvou depois da versão que este aparelho conhece: carregar em vez de sobrescrever
      if (naConta !== null && naConta !== lerBase()) { await carregar(true); return; }
    } catch { setStatus('erro', 'Não foi possível salvar na conta agora; a cópia local está preservada e o app tentará de novo na próxima alteração.'); return; }
    for (const [parte, extrair] of Object.entries(PARTES)) {
      const corpo = extrair(estado);
      const json = JSON.stringify(corpo);
      if (json === ultimoSalvo[parte]) continue;
      if (json.length > LIMITE_DOC) { setStatus('erro', `A seção "${parte}" passou do limite de armazenamento. Exporte um backup e apague itens antigos.`); continue; }
      try {
        await refs[parte].set(corpo);
        ultimoSalvo[parte] = json;
      } catch (e) {
        const msg = e?.code === 'quota_exceeded' ? 'Espaço de armazenamento esgotado. Exporte um backup.' : 'Não foi possível salvar na conta agora; a cópia local está preservada e o app tentará de novo na próxima alteração.';
        setStatus('erro', msg);
        return;
      }
    }
    gravarBase(estado.editado);
    if (status.modo !== 'erro') setStatus('conta', 'Salvo na sua conta.');
  }

  /**
   * Lê a conta e decide qual cópia vale. conflito=true: chamado ao tentar salvar sobre uma versão mais nova
   * de outro aparelho; a alteração local não enviada é substituída e o estudante é avisado.
   */
  async function carregar(conflito = false) {
    const snaps = await Promise.all(Object.keys(PARTES).map((p) => refs[p].get()));
    const docs = {};
    snaps.forEach((s, i) => { if (s.exists) docs[Object.keys(PARTES)[i]] = s.data(); });
    if (!Object.keys(docs).length) {
      setStatus('conta', 'Conectado à sua conta.');
      if (temDados(estado)) agendarRemoto();
      return;
    }
    const remoto = juntar(docs);
    const base = lerBase();
    if (!conflito && base !== null && remoto.editado === base && estado.editado > base) {
      // a conta não mudou desde a última sincronização e este aparelho tem alterações ainda não enviadas
      Object.entries(docs).forEach(([p, d]) => { ultimoSalvo[p] = JSON.stringify(d); });
      setStatus('conta', 'Enviando as alterações deste aparelho.');
      agendarRemoto();
      return;
    }
    Object.entries(docs).forEach(([p, d]) => { ultimoSalvo[p] = JSON.stringify(d); });
    gravarBase(remoto.editado);
    if (remoto.editado === estado.editado && !conflito) { setStatus('conta', 'Salvo na sua conta.'); return; }
    estado = remoto;
    gravarLocal(estado);
    setStatus('conta', conflito ? 'Outro aparelho salvou alterações mais novas; elas foram carregadas. Refaça a última alteração feita aqui, se ela não aparecer.' : 'Dados carregados da sua conta.');
    aoMudar(estado);
  }

  async function conectar() {
    try {
      refs = await abrir();
      if (!refs) return;
      await carregar();
    } catch {
      refs = null;
      setStatus('local', 'Sem conexão com a conta; salvando apenas neste navegador.');
    }
  }

  return {
    get estado() { return estado; },
    get status() { return status; },
    conectar,
    /** Ao voltar para a aba: traz o que outro aparelho salvou enquanto esta aba estava parada. */
    sincronizar() {
      if (!refs || timer) return fila;
      return enfileirar(() => carregar().catch(() => setStatus('erro', 'Não foi possível atualizar a partir da conta agora.')));
    },
    /** Ao esconder ou fechar a aba: envia já o que estava esperando os 1,2 s do agendamento. */
    enviarAgora() {
      if (!refs || !timer) return fila;
      clearTimeout(timer); timer = null;
      return enfileirar(gravarRemoto);
    },
    /**
     * Sai da conta Supabase. Antes grava o que estiver pendente; se a gravação falhar, não sai,
     * para não perder dados. Depois apaga a cópia local, para o próximo usuário do aparelho começar limpo.
     */
    async desconectar() {
      clearTimeout(timer); timer = null;
      if (refs) enfileirar(gravarRemoto);
      await fila;
      if (status.modo === 'erro') throw new Error('Não foi possível salvar o progresso na conta. Verifique a internet antes de sair.');
      await sair();
      refs = null;
      Object.keys(ultimoSalvo).forEach((k) => delete ultimoSalvo[k]);
      try { localStorage.removeItem(CHAVE_LOCAL); } catch { /* sem armazenamento local: nada a apagar */ }
      gravarBase(null);
      estado = estadoInicial();
      setStatus('local', 'Você saiu da conta.');
    },
    /** Aplica uma atualização imutável: fn recebe o estado atual e devolve o novo. */
    set(fn) {
      estado = { ...fn(estado), editado: Math.max(Date.now(), estado.editado + 1) };
      if (!gravarLocal(estado) && !refs) setStatus('erro', 'O navegador bloqueou o armazenamento local e a conta não está conectada. Exporte um backup para não perder dados.');
      agendarRemoto();
      aoMudar(estado);
    },
    exportarJSON: () => JSON.stringify(estado, null, 2),
    importarJSON(texto) {
      const obj = JSON.parse(texto);
      if (!obj || typeof obj !== 'object' || !(obj.v >= 1 && obj.v <= VERSAO_ESTADO)) throw new Error('Arquivo não reconhecido como backup deste aplicativo.');
      this.set(() => normalizarEstado(obj));
    },
  };
}

/** Referências do banco: o do claude.ai quando publicado lá; senão, o Supabase se houver login. */
async function abrirBanco() {
  const claude = window.claude;
  if (claude?.use) {
    const [db, user] = await Promise.all([claude.use('db'), claude.use('user')]);
    const uid = db && user ? await user.id() : null;
    if (!db || !uid) return null;
    const col = db.collection(`data/users/${uid}`);
    return Object.fromEntries(Object.keys(PARTES).map((p) => [p, col.doc(p)]));
  }
  if (!nuvemConfigurada()) return null;
  const c = await clienteNuvem();
  const u = await usuarioNuvem();
  if (!u) return null;
  return refsNuvem(c, u.id, Object.keys(PARTES));
}
