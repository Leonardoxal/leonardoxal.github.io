// Armazenamento da aba Infantil: filhos, tarefas anexadas, "aula feita" e observações (por filho).
// Dois destinos com a mesma interface: este aparelho (IndexedDB) e a nuvem da família (tabelas aci_* do Supabase,
// protegidas por RLS: só contas que entraram na família com o código enxergam). A aba usa o mesmo login da Verdade.
// Nome e nascimento dos filhos ficam só aqui (aparelho ou banco privado), nunca no repositório público.

// ---------------------------------------------------------------- aparelho (IndexedDB)

const NOME_BD = 'aci-tarefas';
let abrindo;

const abrir = () => (abrindo ??= new Promise((ok, erro) => {
  if (typeof indexedDB === 'undefined') { erro(new Error('Este navegador não permite guardar tarefas no aparelho.')); return; }
  const req = indexedDB.open(NOME_BD, 2);
  req.onupgradeneeded = (ev) => {
    const db = req.result;
    if (ev.oldVersion < 1) {
      db.createObjectStore('anexos', { keyPath: 'id' }).createIndex('aula', 'aula');
      db.createObjectStore('aulas', { keyPath: ['aula', 'filho'] });
    } else if (ev.oldVersion < 2) {
      // v1 guardava "aula feita" só por aula; agora é por aula e filho (filho = '' quando não se indica quem fez)
      const leitura = req.transaction.objectStore('aulas').getAll();
      leitura.onsuccess = () => {
        db.deleteObjectStore('aulas');
        const novo = db.createObjectStore('aulas', { keyPath: ['aula', 'filho'] });
        for (const l of leitura.result) novo.put({ ...l, filho: l.filho ?? '' });
      };
    }
    if (ev.oldVersion < 2) db.createObjectStore('filhos', { keyPath: 'id' });
  };
  req.onsuccess = () => ok(req.result);
  req.onerror = () => erro(req.error);
  req.onblocked = () => erro(new Error('Feche as outras abas deste site e tente de novo.'));
}));

// Espera a transação terminar (e não só o pedido).
const tx = async (loja, modo, fn) => {
  const db = await abrir();
  return new Promise((ok, erro) => {
    const t = db.transaction(loja, modo);
    const req = fn(t.objectStore(loja));
    t.oncomplete = () => ok(req?.result);
    t.onerror = t.onabort = () => erro(t.error ?? new Error('Falha ao gravar no aparelho. O espaço pode ter acabado.'));
  });
};

const comFilho = (a) => ({ ...a, filho: a.filho ?? '' });

// "Já lemos" no aparelho: localStorage, uma lista de ids por filho (chave de antes, para não perder as marcações).
const PREFIXO_LIDOS = 'aci-livros-lidos-';
const lerLidosLocal = (filho) => { try { return JSON.parse(localStorage.getItem(PREFIXO_LIDOS + filho)) ?? []; } catch { return []; } };
const filhosComLidosLocal = () => { try { return Object.keys(localStorage).filter((k) => k.startsWith(PREFIXO_LIDOS)).map((k) => k.slice(PREFIXO_LIDOS.length)); } catch { return []; } };

export const aparelho = {
  listarFilhos: () => tx('filhos', 'readonly', (s) => s.getAll()),
  salvarFilho: (f) => tx('filhos', 'readwrite', (s) => s.put({ id: f.id, nome: f.nome, nascimento: f.nascimento || null, perfil: f.perfil || null })),
  apagarFilho: (id) => tx('filhos', 'readwrite', (s) => s.delete(id)),

  listarAnexos: async (aula) => (await tx('anexos', 'readonly', (s) => s.index('aula').getAll(aula))).map(comFilho),
  listarTodosAnexos: async () => (await tx('anexos', 'readonly', (s) => s.getAll())).map(comFilho),
  salvarAnexo: (a) => tx('anexos', 'readwrite', (s) => s.put(comFilho(a))),
  apagarAnexo: (id) => tx('anexos', 'readwrite', (s) => s.delete(id)),

  lerAula: async (aula, filho = '') => (await tx('aulas', 'readonly', (s) => s.get([aula, filho]))) ?? { aula, filho, feita: false, nota: '' },
  listarAulas: () => tx('aulas', 'readonly', (s) => s.getAll()),
  salvarAula: (r) => tx('aulas', 'readwrite', (s) => s.put({ aula: r.aula, filho: r.filho ?? '', feita: !!r.feita, nota: r.nota ?? '' })),

  listarLidos: async (filho) => lerLidosLocal(filho),
  async marcarLido(filho, livro, lido) {
    const s = new Set(lerLidosLocal(filho));
    lido ? s.add(livro) : s.delete(livro);
    try { localStorage.setItem(PREFIXO_LIDOS + filho, JSON.stringify([...s])); } catch { throw new Error('Este navegador não deixou guardar a marcação.'); }
  },
};

// ---------------------------------------------------------------- nuvem da família (Supabase)

const BUCKET = 'aci-tarefas';

/** @param {() => Promise<any>} obterCliente  devolve o cliente Supabase da Verdade (ou null se a nuvem não está configurada) */
export function criarNuvem(obterCliente) {
  const blobs = new Map(); // id do anexo → arquivo já baixado, para não baixar de novo a cada atualização
  const c = async () => {
    const cl = await obterCliente();
    if (!cl) throw new Error('A sincronização não está ativada neste site.');
    return cl;
  };
  const ok = ({ data, error }) => { if (error) throw error; return data; };
  const comoAnexo = (l, blob) => ({ id: l.id, aula: l.aula, filho: l.filho ?? '', nome: l.nome, tipo: l.tipo, tamanho: l.tamanho, data: Date.parse(l.criado_em), caminho: l.caminho, blob });

  const nuvem = {
    async naFamilia() { return ok(await (await c()).rpc('aci_na_familia')) === true; },
    /** Entra na família com o código; false se o código estiver errado. */
    async entrarNaFamilia(codigo) { return ok(await (await c()).rpc('aci_reivindicar', { codigo })) === true; },
    async sairDaFamilia() { ok(await (await c()).rpc('aci_sair_da_familia')); blobs.clear(); },
    limpar: () => blobs.clear(),

    async listarFilhos() { return ok(await (await c()).from('aci_filho').select('id, nome, nascimento, perfil')); },
    async salvarFilho(f) { ok(await (await c()).from('aci_filho').upsert({ id: f.id, nome: f.nome, nascimento: f.nascimento || null, perfil: f.perfil || null, atualizado: new Date().toISOString() }, { onConflict: 'id' })); },
    async apagarFilho(id) { ok(await (await c()).from('aci_filho').delete().eq('id', id)); },

    async lerAula(aula, filho = '') { return ok(await (await c()).from('aci_aula').select('aula, filho, feita, nota').eq('aula', aula).eq('filho', filho).maybeSingle()) ?? { aula, filho, feita: false, nota: '' }; },
    async listarAulas() { return ok(await (await c()).from('aci_aula').select('aula, filho, feita, nota')); },
    async salvarAula(r) { ok(await (await c()).from('aci_aula').upsert({ aula: r.aula, filho: r.filho ?? '', feita: !!r.feita, nota: r.nota ?? '', atualizado: new Date().toISOString() }, { onConflict: 'aula,filho' })); },

    async listarLidos(filho) { return ok(await (await c()).from('aci_livro').select('livro').eq('filho', filho)).map((l) => l.livro); },
    async marcarLido(filho, livro, lido) {
      const t = (await c()).from('aci_livro');
      ok(await (lido ? t.upsert({ filho, livro }, { onConflict: 'filho,livro' }) : t.delete().eq('filho', filho).eq('livro', livro)));
    },

    async baixar(anexo) {
      if (blobs.has(anexo.id)) return blobs.get(anexo.id);
      const blob = ok(await (await c()).storage.from(BUCKET).download(anexo.caminho));
      blobs.set(anexo.id, blob);
      return blob;
    },
    async listarAnexos(aula) {
      const linhas = ok(await (await c()).from('aci_anexo').select('*').eq('aula', aula).order('criado_em', { ascending: false }));
      return Promise.all(linhas.map(async (l) => comoAnexo(l, await nuvem.baixar(l))));
    },
    // Sem baixar os arquivos: só para contar e para o backup, que baixa um a um.
    async listarTodosAnexos() { return ok(await (await c()).from('aci_anexo').select('*')).map((l) => comoAnexo(l)); },

    async salvarAnexo(a) {
      const cl = await c();
      const seguro = a.nome.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\w.-]+/g, '_').slice(-60) || 'arquivo';
      const caminho = `${a.aula}/${a.id}-${seguro}`;
      ok(await cl.storage.from(BUCKET).upload(caminho, a.blob, { contentType: a.tipo, upsert: false }));
      const { error } = await cl.from('aci_anexo').insert({ id: a.id, aula: a.aula, filho: a.filho ?? '', nome: a.nome, tipo: a.tipo, tamanho: a.tamanho, caminho, criado_em: new Date(a.data).toISOString() });
      if (error) {
        await cl.storage.from(BUCKET).remove([caminho]); // não deixa arquivo órfão
        throw error;
      }
      blobs.set(a.id, a.blob);
    },
    async apagarAnexo(id) {
      const cl = await c();
      const linha = ok(await cl.from('aci_anexo').select('caminho').eq('id', id).maybeSingle());
      if (linha) ok(await cl.storage.from(BUCKET).remove([linha.caminho]));
      ok(await cl.from('aci_anexo').delete().eq('id', id));
      blobs.delete(id);
    },
  };
  return nuvem;
}

// ---------------------------------------------------------------- escolha do destino

/**
 * modo 'nuvem': logado e na família; 'pendente': logado, mas ainda sem o código da família; 'aparelho': sem login.
 * Fora do modo nuvem, tudo fica neste aparelho.
 */
export function criarArmazenamento({ obterCliente, obterUsuario, familiaAtiva = true }) {
  const nuvem = criarNuvem(obterCliente);
  let modo = 'aparelho';
  let usuario = null;
  const alvo = () => (modo === 'nuvem' ? nuvem : aparelho);

  return {
    modo: () => modo,
    usuario: () => usuario,
    /** Com a família desativada (config.js), nem consulta a conta nem a nuvem: tudo fica no aparelho. */
    async iniciar() {
      modo = 'aparelho'; usuario = null; nuvem.limpar();
      if (!familiaAtiva) return { modo, usuario };
      try {
        usuario = await obterUsuario();
        if (usuario) modo = (await nuvem.naFamilia()) ? 'nuvem' : 'pendente';
      } catch { modo = 'aparelho'; }
      return { modo, usuario };
    },
    async entrarNaFamilia(codigo) { const entrou = await nuvem.entrarNaFamilia(codigo); modo = entrou ? 'nuvem' : 'pendente'; return entrou; },
    async sairDaFamilia() { await nuvem.sairDaFamilia(); modo = 'pendente'; },

    listarFilhos: () => alvo().listarFilhos(),
    salvarFilho: (f) => alvo().salvarFilho(f),
    apagarFilho: (id) => alvo().apagarFilho(id),
    lerAula: (a, filho) => alvo().lerAula(a, filho),
    listarAulas: () => alvo().listarAulas(),
    salvarAula: (r) => alvo().salvarAula(r),
    listarAnexos: (a) => alvo().listarAnexos(a),
    listarTodosAnexos: () => alvo().listarTodosAnexos(),
    salvarAnexo: (x) => alvo().salvarAnexo(x),
    apagarAnexo: (id) => alvo().apagarAnexo(id),
    listarLidos: (filho) => alvo().listarLidos(filho),
    marcarLido: (filho, livro, lido) => alvo().marcarLido(filho, livro, lido),
    /** Arquivo de um anexo: já vem no aparelho; na nuvem é baixado sob demanda. */
    arquivoDe: async (x) => x.blob ?? nuvem.baixar(x),

    /** Quantos itens deste aparelho podem subir: anexos e livros marcados. */
    async contarLocais() {
      const livros = filhosComLidosLocal().reduce((n, f) => n + lerLidosLocal(f).length, 0);
      try { return (await aparelho.listarTodosAnexos()).length + livros; } catch { return livros; }
    },
    /** Envia para a nuvem tudo o que está neste aparelho. Devolve quantos itens (anexos e livros) subiram. */
    async enviarAparelhoParaNuvem() {
      let livros = 0;
      for (const f of filhosComLidosLocal()) for (const l of lerLidosLocal(f)) { await nuvem.marcarLido(f, l, true); livros++; }
      const [filhos, aulas, anexos, naNuvem] = await Promise.all([aparelho.listarFilhos(), aparelho.listarAulas(), aparelho.listarTodosAnexos(), nuvem.listarTodosAnexos()]);
      const existentes = new Set(naNuvem.map((x) => x.id));
      for (const f of filhos) await nuvem.salvarFilho(f);
      for (const r of aulas) await nuvem.salvarAula(r);
      let n = 0;
      for (const a of anexos) {
        if (existentes.has(a.id)) continue;
        await nuvem.salvarAnexo(a);
        n++;
      }
      return n + livros;
    },
  };
}
