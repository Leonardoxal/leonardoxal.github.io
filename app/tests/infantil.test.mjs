// Aba Infantil: lista de aulas, telas e a lógica da nuvem da família (contra um Supabase simulado em memória).
// Não testa as regras RLS do banco: essas foram testadas no próprio banco (ver PUBLICAR.md).
// Executar com: node --test app/tests/infantil.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AULAS_INFANTIL, aulaInfantilPorData } from '../infantil/aulas.js';
import { criarNuvem, criarArmazenamento } from '../infantil/armazenamento.js';
import { idade, proximoCodigo } from '../infantil/idade.js';
import { infantil, aulaInfantil } from '../views/infantil.js';

const app = join(dirname(fileURLToPath(import.meta.url)), '..');
const ICONES = ['peixe', 'passaro', 'ovelha', 'gato', 'pato', 'sol', 'estrela', 'cruz'];
const CODIGO = 'codigo-certo';

function bancoSimulado({ membros = [] } = {}) {
  const tabelas = { aci_aula: [], aci_anexo: [], aci_filho: [] };
  const objetos = new Map();
  const familia = new Set(membros);
  const estado = { usuario: null, falharInsert: false };

  const from = (nome) => {
    let op = 'select'; let corpo = null; let ordem = null; let unico = false;
    const filtros = [];
    const casa = (l) => filtros.every(([c, v]) => l[c] === v);
    const executar = () => {
      const t = tabelas[nome];
      if (op === 'insert') {
        if (estado.falharInsert) return { data: null, error: new Error('violação de regra') };
        t.push({ ...corpo });
        return { data: null, error: null };
      }
      if (op === 'upsert') {
        const chave = (l) => (nome === 'aci_aula' ? `${l.aula}|${l.filho}` : l.id);
        const i = t.findIndex((l) => chave(l) === chave(corpo));
        if (i >= 0) t[i] = { ...t[i], ...corpo }; else t.push({ ...corpo });
        return { data: null, error: null };
      }
      if (op === 'delete') { tabelas[nome] = t.filter((l) => !casa(l)); return { data: null, error: null }; }
      const r = t.filter(casa);
      if (ordem) r.sort((a, b) => (a[ordem[0]] < b[ordem[0]] ? -1 : 1) * (ordem[1] ? 1 : -1));
      return { data: unico ? (r[0] ?? null) : r, error: null };
    };
    const q = {
      select: () => q,
      insert: (c) => { op = 'insert'; corpo = c; return q; },
      upsert: (c) => { op = 'upsert'; corpo = c; return q; },
      delete: () => { op = 'delete'; return q; },
      eq: (c, v) => { filtros.push([c, v]); return q; },
      order: (c, { ascending }) => { ordem = [c, ascending]; return q; },
      maybeSingle: () => { unico = true; return q; },
      then: (ok, erro) => Promise.resolve(executar()).then(ok, erro),
    };
    return q;
  };

  const cliente = {
    rpc: async (nome, args = {}) => {
      const uid = estado.usuario?.id;
      if (nome === 'aci_na_familia') return { data: Boolean(uid) && familia.has(uid), error: null };
      if (nome === 'aci_reivindicar') {
        if (!uid) return { data: false, error: null };
        if (!familia.has(uid) && args.codigo === CODIGO) familia.add(uid);
        return { data: familia.has(uid), error: null };
      }
      if (nome === 'aci_sair_da_familia') { familia.delete(uid); return { data: null, error: null }; }
      return { data: null, error: new Error('função desconhecida') };
    },
    from,
    storage: {
      from: () => ({
        upload: async (caminho, blob, opcoes) => {
          if (objetos.has(caminho) && !opcoes?.upsert) return { data: null, error: new Error('já existe') };
          objetos.set(caminho, blob);
          return { data: { path: caminho }, error: null };
        },
        download: async (caminho) => (objetos.has(caminho) ? { data: objetos.get(caminho), error: null } : { data: null, error: new Error('não encontrado') }),
        remove: async (caminhos) => { caminhos.forEach((c) => objetos.delete(c)); return { data: [], error: null }; },
      }),
    },
  };
  return { cliente, tabelas, objetos, familia, estado };
}

const pdf = (texto = 'x') => new Blob([texto], { type: 'application/pdf' });
const anexo = (id, aula = '2026-11-03', nome = 'Tarefa página 5.pdf') => ({ id, aula, nome, tipo: 'application/pdf', tamanho: 1, data: Date.now(), blob: pdf() });
const logado = (banco, id = 'u1') => { banco.estado.usuario = { id, email: `${id}@exemplo.com` }; };

test('infantil: cada aula publicada tem os campos, os dois PDFs e um ícone válido', () => {
  assert.ok(AULAS_INFANTIL.length >= 1);
  for (const a of AULAS_INFANTIL) {
    assert.match(a.data, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(a.titulo && a.resumo, `${a.data}: faltam título ou resumo`);
    assert.match(a.filho, /^f\d+$/, `${a.data}: falta o código do filho (f1, f2…)`);
    assert.ok(a.para, `${a.data}: falta o rótulo "Para"`);
    assert.ok(['menina', 'menino'].includes(a.perfil), `${a.data}: falta o perfil da versão (menina ou menino)`);
    assert.ok(ICONES.includes(a.icone), `${a.data}: ícone ${a.icone} desconhecido`);
    for (const tipo of ['aluna', 'responsavel']) {
      assert.ok(existsSync(join(app, a.arquivos[tipo])), `${a.data}: falta ${a.arquivos[tipo]}`);
      assert.ok(a.paginas[tipo] > 0, `${a.data}: páginas de ${tipo}`);
    }
    assert.equal(aulaInfantilPorData(a.data), a);
  }
  assert.equal(new Set(AULAS_INFANTIL.map((a) => a.data)).size, AULAS_INFANTIL.length, 'datas repetidas');
  assert.equal(aulaInfantilPorData('1999-01-01'), undefined);
});

test('infantil: as telas mostram as aulas, os PDFs e os campos de anexar', () => {
  const lista = infantil();
  const a = AULAS_INFANTIL[0];
  assert.ok(lista.includes(a.titulo) && lista.includes(`href="#infantil-${a.data}"`));
  assert.ok(lista.includes(`href="${a.arquivos.aluna}" download`) && lista.includes(`href="${a.arquivos.responsavel}" download`));
  assert.ok(lista.indexOf('</header>') > 0, 'o roteador insere o resto depois do primeiro </header>');
  const tela = aulaInfantil(null, a.data);
  for (const trecho of ['id="inf-arquivos"', 'id="inf-camera"', 'capture="environment"', 'id="inf-soltar"', 'id="inf-feita"', 'id="inf-nota"', 'id="inf-quem"', 'multiple', `Para: ${a.para}`]) assert.ok(tela.includes(trecho), `falta ${trecho}`);
  assert.ok(lista.includes('id="inf-filhos-lista"') && lista.includes('id="inf-filho-novo"') && lista.includes(`Para: ${a.para}`));
  assert.match(aulaInfantil(null, '1999-01-01'), /Aula não encontrada/);
});

test('nuvem: anexo é enviado, listado, baixado e apagado (arquivo e linha)', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  const nuvem = criarNuvem(async () => banco.cliente);
  await nuvem.salvarAnexo(anexo('a1'));
  await nuvem.salvarAnexo(anexo('a2', '2026-11-03', 'foto ção.jpg'));
  const caminhos = [...banco.objetos.keys()];
  assert.ok(caminhos.every((c) => /^2026-11-03\/a\d-[\w.-]+$/.test(c)), `caminho inseguro: ${caminhos}`);
  const lista = await nuvem.listarAnexos('2026-11-03');
  assert.equal(lista.length, 2);
  assert.ok(lista.every((x) => x.blob instanceof Blob));
  assert.equal((await nuvem.listarAnexos('2026-11-04')).length, 0);
  const todos = await nuvem.listarTodosAnexos();
  assert.equal(todos[0].blob, undefined, 'a lista geral não baixa os arquivos');
  assert.equal(await (await nuvem.baixar(todos[0])).text(), 'x');
  await nuvem.apagarAnexo('a1');
  assert.equal(banco.objetos.size, 1);
  assert.equal(banco.tabelas.aci_anexo.length, 1);
});

test('nuvem: se a linha não grava, o arquivo enviado é removido (sem órfão)', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  banco.estado.falharInsert = true;
  await assert.rejects(() => criarNuvem(async () => banco.cliente).salvarAnexo(anexo('x1')), /violação/);
  assert.equal(banco.objetos.size, 0);
});

test('nuvem: aula lê o padrão, grava e atualiza a observação', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  const nuvem = criarNuvem(async () => banco.cliente);
  assert.deepEqual(await nuvem.lerAula('2026-11-03', 'f1'), { aula: '2026-11-03', filho: 'f1', feita: false, nota: '' });
  await nuvem.salvarAula({ aula: '2026-11-03', filho: 'f1', feita: true, nota: 'Gostou do gato.' });
  await nuvem.salvarAula({ aula: '2026-11-03', filho: 'f1', feita: true, nota: 'Gostou do gato e do peixe.' });
  const r = await nuvem.lerAula('2026-11-03', 'f1');
  assert.deepEqual([r.feita, r.nota], [true, 'Gostou do gato e do peixe.']);
  assert.equal((await nuvem.listarAulas()).length, 1, 'a mesma aula e o mesmo filho atualizam a mesma linha');
});

test('nuvem: o mesmo dia tem marcação e observações separadas por filho', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  const nuvem = criarNuvem(async () => banco.cliente);
  await nuvem.salvarAula({ aula: '2026-11-03', filho: 'f1', feita: true, nota: 'da primeira' });
  await nuvem.salvarAula({ aula: '2026-11-03', filho: 'f2', feita: false, nota: 'do segundo' });
  await nuvem.salvarAula({ aula: '2026-11-03', feita: true, nota: 'sem indicar' });
  assert.equal((await nuvem.listarAulas()).length, 3);
  assert.equal((await nuvem.lerAula('2026-11-03', 'f1')).nota, 'da primeira');
  assert.deepEqual([(await nuvem.lerAula('2026-11-03', 'f2')).feita, (await nuvem.lerAula('2026-11-03', 'f2')).nota], [false, 'do segundo']);
  assert.equal((await nuvem.lerAula('2026-11-03')).nota, 'sem indicar', 'sem filho usa o código vazio');
});

test('nuvem: cadastro de filhos (criar, atualizar, remover) e anexo com quem fez', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  const nuvem = criarNuvem(async () => banco.cliente);
  await nuvem.salvarFilho({ id: 'f1', nome: 'Maria', nascimento: '2023-12-30', perfil: 'menina' });
  await nuvem.salvarFilho({ id: 'f2', nome: 'João', nascimento: '', perfil: '' });
  await nuvem.salvarFilho({ id: 'f1', nome: 'Maria Clara', nascimento: '2023-12-30', perfil: 'menina' });
  const filhos = await nuvem.listarFilhos();
  assert.equal(filhos.length, 2, 'salvar de novo atualiza em vez de duplicar');
  assert.equal(filhos.find((f) => f.id === 'f1').nome, 'Maria Clara');
  assert.deepEqual([filhos.find((f) => f.id === 'f2').nascimento, filhos.find((f) => f.id === 'f2').perfil], [null, null]);
  await nuvem.salvarAnexo({ ...anexo('t1'), filho: 'f1' });
  await nuvem.salvarAnexo(anexo('t2'));
  const lista = await nuvem.listarAnexos('2026-11-03');
  assert.deepEqual(lista.map((x) => [x.id, x.filho]).sort(), [['t1', 'f1'], ['t2', '']]);
  await nuvem.apagarFilho('f2');
  assert.deepEqual((await nuvem.listarFilhos()).map((f) => f.id), ['f1']);
  assert.equal((await nuvem.listarAnexos('2026-11-03')).length, 2, 'remover um filho não apaga as tarefas');
});

test('armazenamento: com a família desativada, nem consulta a conta nem a nuvem', async () => {
  const banco = bancoSimulado({ membros: ['u1'] }); logado(banco);
  let consultas = 0;
  const arm = criarArmazenamento({
    obterCliente: async () => { consultas++; return banco.cliente; },
    obterUsuario: async () => { consultas++; return { id: 'u1', email: 'a@exemplo.com' }; },
    familiaAtiva: false,
  });
  assert.deepEqual(await arm.iniciar(), { modo: 'aparelho', usuario: null });
  assert.equal(consultas, 0, 'não deve tocar na conta nem no banco');
  await assert.rejects(() => arm.listarAnexos('2026-11-03'), /não permite guardar tarefas no aparelho/, 'tudo vai para o aparelho (sem IndexedDB no Node)');
  assert.equal(banco.objetos.size + banco.tabelas.aci_anexo.length, 0);
});

test('config: a família está desativada por enquanto', async () => {
  const { FAMILIA_ATIVA } = await import('../infantil/config.js');
  assert.equal(FAMILIA_ATIVA, false);
});

test('idade e códigos de filho', () => {
  const hoje = new Date(2026, 10, 3); // 03/11/2026
  assert.equal(idade('2023-12-30', hoje), '2 anos e 10 meses');
  assert.equal(idade('2023-11-03', hoje), '3 anos');
  assert.equal(idade('2023-11-04', hoje), '2 anos e 11 meses');
  assert.equal(idade('2026-10-03', hoje), '1 mês');
  assert.equal(idade('2026-11-03', hoje), '0 meses');
  assert.equal(idade('2027-01-01', hoje), '', 'nascimento futuro');
  assert.equal(idade('', hoje), '');
  assert.equal(idade('30/12/2023', hoje), '', 'formato errado');
  assert.equal(proximoCodigo([]), 'f1');
  assert.equal(proximoCodigo(['f1', 'f3']), 'f4');
  assert.equal(proximoCodigo(['f1', 'abc']), 'f2');
});

test('nuvem: sem cliente configurado, avisa em vez de quebrar', async () => {
  await assert.rejects(() => criarNuvem(async () => null).listarAulas(), /não está ativada/);
});

test('armazenamento: modos aparelho, pendente e nuvem; o código e a saída da família', async () => {
  const banco = bancoSimulado();
  let usuario = null;
  const arm = criarArmazenamento({ obterCliente: async () => banco.cliente, obterUsuario: async () => usuario });

  assert.equal((await arm.iniciar()).modo, 'aparelho', 'sem login');
  usuario = { id: 'u1', email: 'a@exemplo.com' }; logado(banco, 'u1');
  assert.equal((await arm.iniciar()).modo, 'pendente', 'logado, ainda sem o código');
  assert.equal(await arm.entrarNaFamilia('errado'), false);
  assert.equal(arm.modo(), 'pendente');
  assert.equal(await arm.entrarNaFamilia(CODIGO), true);
  assert.equal(arm.modo(), 'nuvem');

  await arm.salvarAnexo(anexo('a1'));
  await arm.salvarAula({ aula: '2026-11-03', feita: true, nota: 'ok' });

  // outra pessoa da família, com outro login, entra com o código e vê o que a primeira gravou
  usuario = { id: 'u2', email: 'b@exemplo.com' }; logado(banco, 'u2');
  assert.equal((await arm.iniciar()).modo, 'pendente');
  assert.equal(await arm.entrarNaFamilia(CODIGO), true);
  assert.equal((await arm.listarAnexos('2026-11-03')).length, 1);
  assert.equal((await arm.lerAula('2026-11-03')).nota, 'ok');
  assert.equal(await (await arm.arquivoDe((await arm.listarTodosAnexos())[0])).text(), 'x');

  // quem não é da família não vê nada e não grava na nuvem
  usuario = { id: 'u3', email: 'c@exemplo.com' }; logado(banco, 'u3');
  assert.equal((await arm.iniciar()).modo, 'pendente');
  await assert.rejects(() => arm.listarAnexos('2026-11-03'), /não permite guardar tarefas no aparelho/, 'fora da família, o destino é o aparelho (sem IndexedDB no Node)');

  // sair da família
  usuario = { id: 'u2', email: 'b@exemplo.com' }; logado(banco, 'u2');
  await arm.iniciar();
  await arm.sairDaFamilia();
  assert.equal(arm.modo(), 'pendente');
  assert.equal(banco.familia.has('u2'), false);
});
