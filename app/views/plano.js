// Plano de estudos adaptativo, registro de horas, relatório de progresso e backup.
import { MODULOS, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { planejarSemana, minutosSemana, inicioSemana, minutosTotal, revisoesPendentes, aulaConcluida, melhorNota, duracaoMin, progressoModulo, notaMinima } from '../core.js';
import { nuvemConfigurada, usuarioNuvem, entrar } from '../nuvem.js';
import { esc, fmtData, fmtMin, link, barra, DIAS_SEMANA, novoId, toast, copiar, salvarArquivo, hojeISO } from '../ui.js';

const MIN_AULA_PADRAO = 75; // estimativa para aulas ainda sem conteúdo
// Estimativa de leitura por livro conforme a dificuldade (nível 1–5), para a projeção.
const HORAS_POR_NIVEL = { 1: 4, 2: 8, 3: 15, 4: 25, 5: 40 };
const minLivro = (l) => (HORAS_POR_NIVEL[l.nivel] || HORAS_POR_NIVEL[3]) * 60;
const FATOR_APROFUNDAMENTO = 1.5; // aula + aprofundamento, ambos obrigatórios

/** Reúne do estado o que o planejador precisa. */
export function entradaPlano(estado) {
  const pendentes = todasAulas.filter((a) => !aulaConcluida(estado, a.id));
  const disponiveis = pendentes.filter((a) => aulaPorId[a.id]);
  const reprovadas = disponiveis.filter((a) => { const n = melhorNota(estado, `quiz-${a.id}`); return n >= 0 && n < notaMinima(estado); });
  const fator = FATOR_APROFUNDAMENTO;
  const livrosConsiderados = Object.values(livroPorId);
  const livrosAtivos = Object.entries(estado.livros).filter(([, l]) => l.estado === 'lendo')
    .map(([id, l]) => ({ id, titulo: livroPorId[id]?.titulo || id, paginasRestantes: l.paginas ? Math.max(0, l.paginas - (l.paginaAtual || 0)) : 0 }));
  const minutosLivrosRestantes = livrosConsiderados.filter((l) => estado.livros[l.id]?.estado !== 'concluido').reduce((s, l) => s + minLivro(l), 0);
  return {
    aulasPendentes: disponiveis.filter((a) => !reprovadas.includes(a)).map((a) => ({ id: a.id, titulo: `${a.id} — ${a.titulo}`, minutos: Math.round(duracaoMin(aulaPorId[a.id].duracao) * fator) })),
    aulasReprovadas: reprovadas.map((a) => ({ id: a.id, titulo: a.titulo })),
    livrosAtivos,
    revisoesPendentes: revisoesPendentes(estado.revisoes).length,
    minutosSemanaPassada: estado.criado >= inicioSemana(Date.now()) ? null : minutosSemana(estado.sessoes, Date.now(), -1),
    minutosFaltantesCurso: Math.round(pendentes.reduce((s, a) => s + (aulaPorId[a.id] ? duracaoMin(aulaPorId[a.id].duracao) : MIN_AULA_PADRAO), 0) * fator) + minutosLivrosRestantes,
  };
}

// Conta para sincronizar aparelhos: só aparece fora do claude.ai, com o Supabase configurado.
const contaVisivel = () => nuvemConfigurada() && !window.claude?.use;
let contaConectada = false;
const secaoConta = () => (!contaVisivel() ? '' : `<section id="conta"><h2>Conta e sincronização</h2>
  ${contaConectada
    ? '<p>Conectado. Seu progresso é salvo na conta e aparece em qualquer aparelho em que você entrar.</p><button class="btn" data-acao="sair">Sair da conta</button>'
    : `<p>Entre para sincronizar celular, PC e outros aparelhos. Sem conta, o progresso fica só neste aparelho.</p>
    <form id="form-conta" class="form-sessao">
      <label class="campo"><span>E-mail</span><input id="c-email" name="email" type="email" autocomplete="email" required></label>
      <label class="campo"><span>Senha (mínimo 8 caracteres)</span><input id="c-senha" name="senha" type="password" minlength="8" autocomplete="current-password" required></label>
      <button class="btn primario" type="submit" data-modo="entrar">Entrar</button>
      <button class="btn" type="submit" data-modo="criar">Criar conta</button>
    </form><p class="meta" id="conta-msg" aria-live="polite"></p>`}</section>`);

const ICONE = { revisao: 'Revisão', retomar: 'Retomar', aula: 'Aula', leitura: 'Leitura' };
const hrefTarefa = (t) => (t.tipo === 'revisao' ? 'revisar' : t.tipo === 'leitura' ? `livro-${t.id}` : `aula-${t.id}`);

export function plano({ estado }) {
  const p = estado.plano;
  const sem = planejarSemana(p, entradaPlano(estado));
  const ultimas = Array.from({ length: 8 }, (_, i) => ({ i: i - 7, min: minutosSemana(estado.sessoes, Date.now(), i - 7) }));
  const maxMin = Math.max(p.horasSemana * 60, ...ultimas.map((u) => u.min), 1);
  const sessoes = estado.sessoes.slice().sort((a, b) => b.inicio - a.inicio).slice(0, 20);
  return `<header class="cab"><h1>Plano de estudos</h1><p class="sub">O plano se ajusta ao seu ritmo real: atrasos alteram a data projetada, notas baixas trazem a aula de volta, e nenhum conteúdo é marcado como dominado automaticamente.</p></header>
  <div class="grade-2">
  <section><h2>Minhas preferências</h2>
    <form id="form-plano" class="form-plano">
      <label class="campo"><span>Horas por semana</span><input id="p-horas" name="horasSemana" type="number" min="1" max="40" step="0.5" value="${p.horasSemana}"></label>
      <label class="campo"><span>Ritmo de leitura (páginas por hora)</span><input id="p-pags" name="paginasHora" type="number" min="1" max="60" value="${p.paginasHora}"></label>
      <label class="campo"><span>Livros simultâneos</span><input id="p-livros" name="livrosSimultaneos" type="number" min="1" max="5" value="${p.livrosSimultaneos}"></label>
      <label class="campo"><span>Data pretendida para concluir a etapa atual</span><input id="p-data" name="dataAlvo" type="date" value="${esc(p.dataAlvo)}"></label>
      <fieldset class="dias"><legend>Dias de estudo</legend>${DIAS_SEMANA.map((d, i) => `<label class="opcao"><input type="checkbox" name="dia" value="${i}" ${p.dias.includes(i) ? 'checked' : ''}> <span>${d}</span></label>`).join('')}</fieldset>
      <button class="btn primario" type="submit">Salvar e recalcular</button>
    </form></section>
  <section><h2>Esta semana</h2>
    ${sem.avisos.map((a) => `<p class="aviso">${esc(a)}</p>`).join('')}
    <p>Meta: <strong>${fmtMin(sem.meta)}</strong> · planejado: ${fmtMin(sem.usado)} · estudado até agora: <strong>${fmtMin(minutosSemana(estado.sessoes))}</strong></p>
    ${barra(Math.round((minutosSemana(estado.sessoes) / sem.meta) * 100), 'Meta semanal')}
    <ol class="agenda">${sem.porDia.map((d) => `<li><h3>${DIAS_SEMANA[d.dia]} <span class="meta">${fmtMin(d.minutos)}</span></h3><ul>${d.tarefas.map((t) => `<li><span class="chip">${ICONE[t.tipo]}</span> ${link(hrefTarefa(t), esc(t.titulo))} <span class="meta">${fmtMin(t.minutos)}</span></li>`).join('') || '<li class="meta">Livre</li>'}</ul></li>`).join('')}</ol>
    <p class="meta">Projeção de conclusão do curso, no ritmo atual: ${fmtData(sem.projecao)} (${sem.semanasRestantes} semanas). A estimativa considera ${MIN_AULA_PADRAO} min por aula ainda em preparação e, por livro, conforme a dificuldade: ${Object.entries(HORAS_POR_NIVEL).map(([n, h]) => `nível ${n} ≈ ${h} h`).join(', ')}. É uma média; obras curtas podem levar menos.</p>
  </section></div>

  <section><h2>Registrar estudo</h2>
    <form id="form-sessao" class="form-sessao">
      <label class="campo"><span>Data</span><input id="s-data" name="data" type="date" value="${hojeISO()}" required></label>
      <label class="campo"><span>Minutos</span><input id="s-min" name="minutos" type="number" min="1" max="720" required></label>
      <label class="campo largo"><span>O que estudou</span><input id="s-obs" name="obs" placeholder="ex.: Aula 2, ou Fédon pp. 30–45"></label>
      <button class="btn primario" type="submit">Registrar</button></form>
    <p class="meta">Também é possível usar o cronômetro no topo da tela. Total registrado: <strong>${fmtMin(minutosTotal(estado.sessoes))}</strong>.</p>
    ${sessoes.length ? `<div class="tabela-wrap"><table><thead><tr><th>Data</th><th>Duração</th><th>Atividade</th><th></th></tr></thead><tbody>${sessoes.map((s) => `<tr><td>${fmtData(s.inicio)}</td><td class="num-tab">${fmtMin(s.minutos)}</td><td>${esc(s.obs || '')}</td><td><button class="btn pequeno" data-apagar="${s.id}">Excluir</button></td></tr>`).join('')}</tbody></table></div>` : ''}
  </section>

  <section><h2>Relatório de progresso</h2>
    <h3>Horas por semana (últimas 8)</h3>
    <div class="grafico-barras" role="img" aria-label="Minutos estudados nas últimas 8 semanas">
      ${ultimas.map((u) => `<div class="gb-col"><span class="gb-val">${Math.round(u.min / 6) / 10} h</span><div class="gb-barra" style="height:${Math.round((u.min / maxMin) * 100)}%"></div><span class="gb-rot">${u.i === 0 ? 'atual' : `${u.i}`}</span></div>`).join('')}
      <div class="gb-meta" style="bottom:${Math.round(((p.horasSemana * 60) / maxMin) * 100)}%"><span>meta</span></div>
    </div>
    <h3>Por módulo</h3>
    <div class="tabela-wrap"><table><thead><tr><th>Módulo</th><th>Aulas concluídas</th><th>Progresso</th></tr></thead><tbody>
      ${MODULOS.map((m) => { const pr = progressoModulo(m, estado); return `<tr><td>${link(`mod-${m.id}`, `${m.n}. ${esc(m.titulo)}`)}</td><td class="num-tab">${pr.feitas}/${pr.total}</td><td>${barra(pr.pct)}</td></tr>`; }).join('')}
    </tbody></table></div>
  </section>

  ${secaoConta()}

  <section><h2>Backup dos dados</h2>
    <p>${esc('Os dados ficam salvos automaticamente. Use o backup para guardar uma cópia própria ou mover para outro navegador.')}</p>
    <div class="acoes-aula"><button class="btn" data-acao="exportar">Exportar backup (JSON)</button>
      <label class="btn">Importar backup<input type="file" id="importar" accept="application/json,.json" hidden></label></div>
    <textarea id="backup-area" class="export-area" hidden readonly aria-label="Backup"></textarea>
    <div class="confirmar" id="conf-import" hidden><p>Importar substituirá todos os dados atuais por este backup. Continuar?</p><button class="btn perigo" data-acao="importar-sim">Sim, substituir</button> <button class="btn" data-acao="importar-nao">Cancelar</button></div>
  </section>`;
}

plano.ligar = (root, ctx) => {
  if (contaVisivel()) {
    usuarioNuvem().then((u) => { if (Boolean(u) !== contaConectada) { contaConectada = Boolean(u); ctx.render({ manterRolagem: true }); } }).catch(() => {});
    root.querySelector('#form-conta')?.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const fd = new FormData(ev.target);
      const msg = root.querySelector('#conta-msg');
      msg.textContent = 'Aguarde…';
      try {
        const r = await entrar(String(fd.get('email')).trim(), String(fd.get('senha')), ev.submitter?.dataset.modo === 'criar');
        msg.textContent = r.msg;
        if (!r.ok) return;
        contaConectada = true;
        await ctx.store.conectar();
        ctx.render({ manterRolagem: true });
        toast('Conta conectada.');
      } catch {
        msg.textContent = 'Sem conexão com o servidor. Tente de novo.';
      }
    });
    root.querySelector('[data-acao="sair"]')?.addEventListener('click', async () => {
      await ctx.store.desconectar();
      contaConectada = false;
      ctx.render({ manterRolagem: true });
    });
  }
  root.querySelector('#form-plano').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = new FormData(ev.target);
    const dias = fd.getAll('dia').map(Number);
    if (!dias.length) { toast('Escolha pelo menos um dia de estudo.'); return; }
    const num = (k, min, max, def) => { const v = Number(fd.get(k)); return Number.isFinite(v) && v >= min ? Math.min(v, max) : def; };
    ctx.set((e) => ({ ...e, plano: { ...e.plano, horasSemana: num('horasSemana', 1, 40, 6), paginasHora: num('paginasHora', 1, 60, 12), livrosSimultaneos: Math.round(num('livrosSimultaneos', 1, 5, 2)), dataAlvo: String(fd.get('dataAlvo') || ''), dias } }), { manterRolagem: true });
    toast('Plano recalculado.');
  });
  root.querySelector('#form-sessao').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = Object.fromEntries(new FormData(ev.target).entries());
    const minutos = Math.round(Number(fd.minutos));
    const [y, m, d] = String(fd.data).split('-').map(Number);
    if (!minutos || minutos < 1 || minutos > 720 || !y) { toast('Informe uma data e de 1 a 720 minutos.'); return; }
    const inicio = new Date(y, m - 1, d, 12).getTime();
    ctx.set((e) => ({ ...e, sessoes: [...e.sessoes, { id: novoId('s'), inicio, minutos, alvo: null, obs: fd.obs.trim() }] }), { manterRolagem: true });
    toast('Estudo registrado.');
  });
  let pendente = null;
  root.addEventListener('click', async (ev) => {
    const b = ev.target.closest('[data-apagar],[data-acao]');
    if (!b) return;
    if (b.dataset.apagar) {
      if (b.dataset.confirmar !== '1') { b.dataset.confirmar = '1'; b.textContent = 'Confirmar'; return; }
      ctx.set((e) => ({ ...e, sessoes: e.sessoes.filter((s) => s.id !== b.dataset.apagar) }), { manterRolagem: true });
    }
    if (b.dataset.acao === 'exportar') {
      const json = ctx.store.exportarJSON();
      if (!(await salvarArquivo(`backup-academia-${hojeISO()}.json`, json))) await copiar(json, root.querySelector('#backup-area'));
    }
    if (b.dataset.acao === 'importar-nao') { pendente = null; root.querySelector('#conf-import').hidden = true; }
    if (b.dataset.acao === 'importar-sim' && pendente) {
      try { ctx.store.importarJSON(pendente); toast('Backup importado.'); } catch (e) { toast(e.message || 'Arquivo inválido.'); }
      pendente = null;
    }
  });
  root.querySelector('#importar').addEventListener('change', (ev) => {
    const f = ev.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { pendente = String(r.result); root.querySelector('#conf-import').hidden = false; };
    r.onerror = () => toast('Não foi possível ler o arquivo.');
    r.readAsText(f);
  });
};
