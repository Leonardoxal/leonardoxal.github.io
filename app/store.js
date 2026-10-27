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
    if (!u) { setStatus('local', 'Salvando só neste aparelho. Entre na sua conta (Plano) para sincronizar.'); return null; }
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
    /** Sai da conta Supabase depois de terminar a gravação pendente; a cópia local continua. */
    async desconectar() {
      clearTimeout(timer);
      if (refs) fila = fila.then(gravarRemoto);
      await fila;
      await sair();
      refs = null;
      setStatus('local', 'Você saiu da conta. Salvando só neste aparelho.');
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
      if (!obj || typeof obj !== 'object' || obj.v !== 1) throw new Error('Arquivo não reconhecido como backup deste aplicativo.');
      this.set(() => normalizarEstado(obj));
    },
  };
}
