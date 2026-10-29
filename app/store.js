// Persistência do estado do estudante.
// 1) Sempre grava uma cópia local (localStorage) para abrir rápido e funcionar offline.
// 2) Quando o app roda publicado no claude.ai, grava também no banco privado do artefato
//    (data/users/<id>/...), visível só para este usuário, e que sobrevive a troca de navegador.
// 3) Fora do claude.ai, com Supabase configurado (config.js) e o usuário logado, grava na tabela
//    "progresso" do Supabase, o que sincroniza celular, PC e qualquer outro aparelho.
// O estado é dividido em documentos para respeitar o limite de 256 KiB por documento.
import { estadoInicial, normalizarEstado } from './core.js';
import { nuvemConfigurada, clienteNuvem, usuarioNuvem, refsNuvem, sair } from './nuvem.js';

const CHAVE_LOCAL = 'academia-verdade-estado-v1';
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

const temDados = (e) => Object.keys(e.aulas).length || e.notas.length || e.sessoes.length || Object.keys(e.livros).length;

/**
 * @param {(estado:object)=>void} aoMudar      chamado quando o estado muda (redesenhar)
 * @param {(status:{modo:string,msg:string})=>void} aoStatus  chamado quando só o status de salvamento muda
 */
export function criarStore(aoMudar, aoStatus) {
  let estado = lerLocal() || estadoInicial();
  let status = { modo: 'local', msg: 'Salvando apenas neste navegador.' };
  let refs = null;                // { parte: DocumentReference }
  const ultimoSalvo = {};         // parte -> JSON gravado no banco
  let fila = Promise.resolve();
  let timer = null;

  const setStatus = (modo, msg) => { status = { modo, msg }; aoStatus(status); };

  function agendarRemoto() {
    if (!refs) return;
    clearTimeout(timer);
    timer = setTimeout(() => { fila = fila.then(gravarRemoto); }, 1200);
  }

  async function gravarRemoto() {
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
    setStatus('conta', 'Salvo na sua conta.');
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

  async function conectar() {
    try {
      refs = await abrirBanco();
      if (!refs) return;
      const snaps = await Promise.all(Object.keys(PARTES).map((p) => refs[p].get()));
      const docs = {};
      snaps.forEach((s, i) => { if (s.exists) { const p = Object.keys(PARTES)[i]; docs[p] = s.data(); ultimoSalvo[p] = JSON.stringify(docs[p]); } });
      if (Object.keys(docs).length) {
        estado = juntar(docs);
        gravarLocal(estado);
        setStatus('conta', 'Dados carregados da sua conta.');
        aoMudar(estado);
      } else {
        setStatus('conta', 'Conectado à sua conta.');
        if (temDados(estado)) agendarRemoto();
      }
    } catch {
      refs = null;
      setStatus('local', 'Sem conexão com a conta; salvando apenas neste navegador.');
    }
  }

  return {
    get estado() { return estado; },
    get status() { return status; },
    conectar,
    /**
     * Sai da conta Supabase. Antes grava o que estiver pendente; se a gravação falhar, não sai,
     * para não perder dados. Depois apaga a cópia local, para o próximo usuário do aparelho começar limpo.
     */
    async desconectar() {
      clearTimeout(timer);
      if (refs) fila = fila.then(gravarRemoto);
      await fila;
      if (status.modo === 'erro') throw new Error('Não foi possível salvar o progresso na conta. Verifique a internet antes de sair.');
      await sair();
      refs = null;
      Object.keys(ultimoSalvo).forEach((k) => delete ultimoSalvo[k]);
      try { localStorage.removeItem(CHAVE_LOCAL); } catch { /* sem armazenamento local: nada a apagar */ }
      estado = estadoInicial();
      setStatus('local', 'Você saiu da conta.');
    },
    /** Aplica uma atualização imutável: fn recebe o estado atual e devolve o novo. */
    set(fn) {
      estado = fn(estado);
      if (!gravarLocal(estado) && !refs) setStatus('erro', 'O navegador bloqueou o armazenamento local e a conta não está conectada. Exporte um backup para não perder dados.');
      agendarRemoto();
      aoMudar(estado);
    },
    exportarJSON: () => JSON.stringify(estado, null, 2),
    importarJSON(texto) {
      const obj = JSON.parse(texto);
      if (!obj || typeof obj !== 'object' || ![1, 2].includes(obj.v)) throw new Error('Arquivo não reconhecido como backup deste aplicativo.');
      this.set(() => normalizarEstado(obj));
    },
  };
}
