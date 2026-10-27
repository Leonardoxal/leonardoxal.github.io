// Curso completo, página de módulo e sala de aula.
import { MODULOS, moduloPorId } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { LIVROS } from '../data/livros.js';
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { progressoModulo, aulaConcluivel, aulaConcluida, melhorNota, novoCartao, notaMinima } from '../core.js';
import { esc, barra, link, linkExterno, etiqueta, botaoFav, fmtData, toast } from '../ui.js';
import { quizHTML, ligarQuiz } from './quiz.js';

const statusAula = (estado, a) => {
  if (aulaConcluida(estado, a.id)) return '<span class="chip ok">Concluída</span>';
  if (!aulaPorId[a.id]) return '<span class="chip neutro">Em preparação</span>';
  if (estado.aulas[a.id]) return '<span class="chip andamento">Em andamento</span>';
  return '<span class="chip">Disponível</span>';
};

export function curso({ estado }) {
  return `<header class="cab"><h1>Curso completo</h1>
    <p class="sub">Dezesseis módulos em ordem de progressão. Aulas marcadas "em preparação" têm estrutura definida e conteúdo a ser publicado em lotes; não contam como concluídas.</p></header>
    <ol class="lista-modulos">${MODULOS.map((m) => {
      const p = progressoModulo(m, estado);
      const prontas = m.aulas.filter((a) => aulaPorId[a.id]).length;
      return `<li class="cartao-mod"><a href="#mod-${m.id}">
        <span class="num">Módulo ${m.n}</span><h2>${esc(m.titulo)}</h2>
        <p>${esc(m.descricao)}</p>
        <div class="linha-meta"><span>Degrau ${m.degrau}</span><span>${m.aulas.length} aulas · ${prontas} com conteúdo</span><span>${m.semanas} semanas</span></div>
        ${barra(p.pct, `Progresso do módulo ${m.n}`)}<span class="meta">${p.feitas}/${p.total} concluídas</span></a></li>`;
    }).join('')}</ol>`;
}

export function modulo({ estado }, id) {
  const m = moduloPorId[id];
  if (!m) return '<p>Módulo não encontrado.</p>';
  const p = progressoModulo(m, estado);
  const livros = LIVROS.filter((l) => l.modulo === m.id).sort((a, b) => a.degrau - b.degrau || a.ordem - b.ordem);
  const avals = AVALIACOES.filter((a) => a.modulo === m.id);
  return `<nav class="migalha">${link('curso', 'Curso')} / Módulo ${m.n}</nav>
  <header class="cab"><span class="num">Módulo ${m.n} · Degrau ${m.degrau} · ${m.semanas} semanas</span><h1>${esc(m.titulo)}</h1><p class="sub">${esc(m.descricao)}</p>
    ${barra(p.pct)}<span class="meta">${p.feitas}/${p.total} aulas concluídas</span>
    ${m.prereq.length ? `<p class="meta">Pré-requisitos: ${m.prereq.map((x) => link(`mod-${x}`, `Módulo ${moduloPorId[x].n}`)).join(', ')}</p>` : ''}</header>
  <div class="grade-2">
    <section><h2>Objetivos de aprendizagem</h2><ul>${m.objetivos.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
      <h2>Critérios de conclusão</h2><ul>${m.criterios.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></section>
    <section><h2>Aulas</h2><ol class="lista-aulas">${m.aulas.map((a) => `<li><a href="#aula-${a.id}"><span>${a.n}. ${esc(a.titulo)}</span>${statusAula(estado, a)}</a></li>`).join('')}</ol></section>
  </div>
  <section><h2>Leituras e bibliografia do módulo</h2>
    ${livros.length ? `<ul class="lista-livros-curta">${livros.map((l) => `<li>${link(`livro-${l.id}`, esc(l.titulo))} — ${esc(l.autor)} <span class="meta">(degrau ${l.degrau})</span></li>`).join('')}</ul>` : '<p class="meta">As leituras deste módulo são retomadas de degraus anteriores; veja o Mapa.</p>'}</section>
  <section><h2>Exercícios e avaliação do módulo</h2>
    ${avals.length ? `<ul>${avals.map((a) => `<li>${link(`aval-${a.id}`, esc(a.titulo))} ${melhorNota(estado, a.id) >= 0 ? `<span class="meta">melhor nota: ${melhorNota(estado, a.id)}%</span>` : ''}</li>`).join('')}</ul>` : '<p class="meta">A prova deste módulo será publicada junto com o conteúdo das aulas. Enquanto isso, cada aula completa tem seu próprio questionário.</p>'}</section>`;
}

function diagramaArgumento(arg) {
  return `<figure class="argumento" aria-label="Diagrama do argumento">
    <figcaption>${etiqueta(arg.tag)} ${esc(arg.titulo)}</figcaption>
    <ol class="premissas">${arg.premissas.map((p, i) => `<li><span class="pn">P${i + 1}</span>${esc(p)}</li>`).join('')}</ol>
    <div class="seta" aria-hidden="true">↓ logo</div>
    <div class="conclusao"><span class="pn">C</span>${esc(arg.conclusao)}</div>
    ${arg.nota ? `<p class="nota-arg">${esc(arg.nota)}</p>` : ''}</figure>`;
}

function aulaEmPreparacao(m, a) {
  const livros = LIVROS.filter((l) => l.modulo === m.id);
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `Módulo ${m.n}`)} / Aula ${a.n}</nav>
  <header class="cab"><span class="num">Módulo ${m.n} · Aula ${a.n}</span><h1>${esc(a.titulo)}</h1></header>
  <div class="aviso"><strong>Aula em preparação.</strong> A estrutura e o lugar desta aula na trilha estão definidos, mas o conteúdo completo ainda não foi publicado. Ela não pode ser concluída até lá e não conta no progresso.</div>
  <section><h2>Objetivos do módulo</h2><ul>${m.objetivos.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></section>
  ${livros.length ? `<section><h2>Leituras que você já pode começar</h2><ul>${livros.map((l) => `<li>${link(`livro-${l.id}`, esc(l.titulo))} — ${esc(l.autor)}</li>`).join('')}</ul></section>` : ''}`;
}

function blocoConclusao(estado, m, meta, a, conc) {
  const st = estado.aulas[a.id] || {};
  const proxima = m.aulas[meta.n];
  return `<section id="s14" class="concluir"><h2>Critérios para avançar</h2><ul>${(a.criterios || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    ${aulaConcluida(estado, a.id)
      ? `<p class="ok-msg">Concluída em ${fmtData(st.fim)}.</p>${proxima ? `<a class="btn primario" href="#aula-${proxima.id}">Próxima: ${esc(proxima.titulo)}</a>` : ''}`
      : `${conc.ok ? '' : `<p><strong>Falta:</strong></p><ul class="faltas">${conc.faltas.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`}
         <button class="btn primario" data-acao="concluir" ${conc.ok ? '' : 'disabled'}>Concluir</button>`}</section>`;
}

/** Aula de avaliação do módulo: orientação de estudo e a prova gerada a partir das aulas. */
function aulaAvaliacao(estado, m, meta, a) {
  const prova = avaliacaoPorId[a.prova];
  const conc = aulaConcluivel(a, estado, m.aulas[meta.n - 2]?.id, prova);
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `Módulo ${m.n}`)} / Aula ${meta.n}</nav>
  <article class="aula">
  <header class="cab"><span class="num">Módulo ${m.n}: ${esc(m.titulo)} · ${esc(a.duracao)}</span><h1>${esc(a.titulo)}</h1>
    <div class="acoes-aula"><button class="btn" data-acao="cronometro" data-alvo="aula:${a.id}">Iniciar cronômetro</button></div></header>
  <section class="texto">${a.orientacao}</section>
  <section><h2>Aulas cobertas</h2><ol class="lista-curta">${m.aulas.slice(0, -1).map((x) => `<li>${link(`aula-${x.id}`, esc(x.titulo))} ${aulaConcluida(estado, x.id) ? '<span class="chip ok">concluída</span>' : ''}</li>`).join('')}</ol></section>
  <section id="s11"><h2>${esc(prova?.titulo || 'Prova')}</h2>
    <p class="dica">${prova?.itens.some((it) => it.tipo !== 'disc') ? `Nota mínima: ${notaMinima(estado)}%. Vale a melhor tentativa. ` : ''}As discursivas aceitam conclusões diferentes, desde que bem fundamentadas.</p>
    ${prova ? quizHTML(prova.itens, prova.id, prova.id, estado, notaMinima(estado)) : '<p class="aviso">Prova não encontrada.</p>'}</section>
  ${blocoConclusao(estado, m, meta, a, conc)}</article>`;
}

export function aula({ estado }, id) {
  const [mid] = id.split('-');
  const m = moduloPorId[mid];
  const meta = m?.aulas.find((x) => x.id === id);
  if (!meta) return '<p>Aula não encontrada.</p>';
  const a = aulaPorId[id];
  if (!a) return aulaEmPreparacao(m, meta);
  if (a.tipo === 'avaliacao') return aulaAvaliacao(estado, m, meta, a);
  const anterior = m.aulas[meta.n - 2]?.id;
  const conc = aulaConcluivel(a, estado, anterior);
  const st = estado.aulas[id] || {};
  const nota = melhorNota(estado, `quiz-${id}`);
  const proxima = m.aulas[meta.n];
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `Módulo ${m.n}`)} / Aula ${meta.n}</nav>
  <article class="aula">
  <header class="cab"><span class="num">Módulo ${m.n}: ${esc(m.titulo)} · Aula ${meta.n} · ${esc(a.duracao)}</span>
    <h1>${esc(a.titulo)} ${botaoFav(estado, 'aula', id)}</h1>
    <div class="acoes-aula"><button class="btn" data-acao="nota-aula">Nova nota desta aula</button>
      <button class="btn" data-acao="cartoes">Gerar cartões de revisão</button>
      <button class="btn" data-acao="cronometro" data-alvo="aula:${id}">Iniciar cronômetro</button></div></header>
  <nav class="sumario" aria-label="Seções da aula"><ol>
    ${['Objetivos', 'Pré-requisitos', 'Explicação', 'Vocabulário', 'Exemplos', 'Contexto', 'Argumento', 'Objeções', 'Aplicação', 'Fonte original', 'Compreensão', 'Exercícios e avaliação', 'Resumo', 'Referências', 'Critérios para avançar', 'Aprofundamento'].map((s, i) => (i === 15 && !a.avancado ? '' : `<li><a href="#aula-${id}" data-ir="s${i}">${s}</a></li>`)).join('')}</ol></nav>

  <section id="s0"><h2>O que você aprenderá</h2><ul>${a.aprendera.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s1"><h2>Pré-requisitos</h2><ul>${a.prereq.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s2" class="texto">${a.explicacao}</section>
  <section id="s3"><h2>Vocabulário essencial</h2><dl class="vocab">${a.vocabulario.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join('')}</dl></section>
  <section id="s4" class="texto"><h2>Exemplos concretos</h2>${a.exemplos}</section>
  <section id="s5" class="texto"><h2>Contexto histórico</h2>${a.contexto}</section>
  <section id="s6"><h2>Argumento principal</h2>${diagramaArgumento(a.argumento)}</section>
  <section id="s7"><h2>Objeções relevantes</h2>${a.objecoes.map((o) => `<div class="objecao"><p><strong>Objeção.</strong> ${esc(o.objecao)} ${etiqueta(o.tag)}</p><p><strong>Resposta possível.</strong> ${esc(o.resposta)}</p></div>`).join('')}</section>
  <section id="s8" class="texto"><h2>Aplicação prática</h2>${a.aplicacao}</section>
  <section id="s9" class="texto fonte"><h2>Leitura orientada da fonte original</h2><p><strong>${esc(a.fonte.obra)}</strong></p>${a.fonte.orientacao}
    ${a.fonte.link ? `<p>${linkExterno(a.fonte.link)}</p>` : ''}
    <label class="opcao destaque"><input type="checkbox" data-acao="fonte-lida" ${st.fonteLida ? 'checked' : ''}> <span>Li a fonte orientada</span></label></section>
  <section id="s10"><h2>Perguntas de compreensão</h2><p class="dica">Responda mentalmente ou no Caderno antes de abrir a resposta.</p>
    ${a.perguntas.map((q) => `<details class="pergunta"><summary>${esc(q.p)}</summary><p>${esc(q.r)}</p></details>`).join('')}</section>
  <section id="s11"><h2>Exercícios e avaliação</h2><p class="dica">Nota mínima para avançar: ${notaMinima(estado)}%. Você pode refazer quantas vezes quiser; vale a melhor tentativa.</p>
    ${quizHTML(a.exercicios, `quiz-${id}`, id, estado, notaMinima(estado))}</section>
  <section id="s12"><h2>Resumo final</h2><ul class="resumo">${a.resumo.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s13"><h2>Referências verificáveis</h2><ul class="refs">${a.referencias.map((r) => `<li>${esc(r.texto)} ${linkExterno(r.link)}</li>`).join('')}</ul>
    <p class="meta">Etiquetas usadas no texto: ${['doutrina', 'fato', 'argumento', 'interpretacao', 'hipotese', 'debate'].map(etiqueta).join(' ')}</p></section>
  ${a.avancado ? `<section id="s15" class="avancado-sec texto"><h2>Aprofundamento</h2>
    <p class="dica">Parte obrigatória da aula: questionário com mínimo de ${notaMinima(estado)}% e questão discursiva.</p>
    ${a.avancado.texto}
    <h3>Leituras do aprofundamento</h3><ul class="refs">${a.avancado.leituras.map((r) => `<li>${esc(r.texto)} ${linkExterno(r.link)}</li>`).join('')}</ul>
    <h3>Questionário do aprofundamento</h3>${quizHTML(a.avancado.exercicios, `quiz-av-${id}`, `${id}-av`, estado, notaMinima(estado))}</section>` : ''}
  <section id="s14" class="concluir"><h2>Critérios para avançar</h2><ul>${a.criterios.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    ${aulaConcluida(estado, id)
      ? `<p class="ok-msg">Aula concluída em ${fmtData(st.fim)}. Melhor nota: ${nota}%.</p>${proxima ? `<a class="btn primario" href="#aula-${proxima.id}">Próxima aula: ${esc(proxima.titulo)}</a>` : ''}`
      : `${conc.ok ? '' : `<p><strong>Falta:</strong></p><ul class="faltas">${conc.faltas.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`}
         <button class="btn primario" data-acao="concluir" ${conc.ok ? '' : 'disabled'}>Concluir aula</button>`}
  </section></article>`;
}

aula.ligar = (root, ctx, id) => {
  const a = aulaPorId[id];
  if (!a) return;
  if (!ctx.estado.aulas[id] || ctx.estado.atual.aula !== id) {
    ctx.set((e) => ({ ...e, atual: { ...e.atual, aula: id }, aulas: { ...e.aulas, [id]: { status: 'andamento', inicio: Date.now(), ...e.aulas[id], acesso: Date.now() } } }), { render: false });
  }
  // Atualiza só a seção de conclusão, para não apagar a correção do questionário na tela.
  const atualizarConclusao = () => {
    const tmp = document.createElement('div');
    tmp.innerHTML = aula(ctx, id);
    root.querySelector('#s14')?.replaceWith(tmp.querySelector('#s14'));
  };
  ligarQuiz(root.querySelector('#s11'), a.tipo === 'avaliacao' ? avaliacaoPorId[a.prova]?.itens || [] : a.exercicios, ctx, atualizarConclusao);
  if (a.avancado) ligarQuiz(root.querySelector('#s15'), a.avancado.exercicios, ctx, atualizarConclusao);
  root.querySelectorAll('[data-ir]').forEach((el) => el.addEventListener('click', (ev) => { ev.preventDefault(); root.querySelector(`#${el.dataset.ir}`)?.scrollIntoView({ behavior: 'smooth' }); }));
  root.addEventListener('change', (ev) => {
    if (ev.target.dataset.acao === 'fonte-lida') {
      const v = ev.target.checked;
      ctx.set((e) => ({ ...e, aulas: { ...e.aulas, [id]: { ...e.aulas[id], fonteLida: v } } }), { render: false });
    }
    if (ev.target.matches('textarea[data-disc], input[data-crit], input[data-acao="fonte-lida"]')) setTimeout(atualizarConclusao, 700);
  });
  root.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-acao]');
    if (!b) return;
    if (b.dataset.acao === 'concluir') {
      ctx.set((e) => ({ ...e, aulas: { ...e.aulas, [id]: { ...e.aulas[id], status: 'concluida', fim: Date.now() } } }), { render: false });
      atualizarConclusao();
      toast('Aula concluída.');
    }
    if (b.dataset.acao === 'nota-aula') ctx.novaNota({ tipo: 'aula', id }, `Notas — ${a.titulo}`);
    if (b.dataset.acao === 'cartoes') {
      const origem = `aula:${id}`;
      const existentes = new Set(ctx.estado.revisoes.filter((r) => r.origem === origem).map((r) => r.frente));
      const novos = a.revisao.filter(([f]) => !existentes.has(f)).map(([f, v]) => novoCartao(f, v, origem));
      ctx.set((e) => ({ ...e, revisoes: [...e.revisoes, ...novos] }), { render: false });
      toast(novos.length ? `${novos.length} cartão(ões) criado(s). Primeira revisão amanhã.` : 'Os cartões desta aula já existem.');
    }
  });
};
