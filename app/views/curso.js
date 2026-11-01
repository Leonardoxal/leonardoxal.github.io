// Curso completo, pÃ¡gina de mÃ³dulo e sala de aula.
import { MODULOS, moduloPorId, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { LIVROS } from '../data/livros.js';
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { progressoModulo, aulaConcluivel, aulaConcluida, melhorNota, novoCartao, notaMinima } from '../core.js';
import { esc, barra, link, linkExterno, etiqueta, botaoFav, fmtData, toast } from '../ui.js';
import { quizHTML, ligarQuiz } from './quiz.js';
import { conexoesAula } from './conexoes.js';
import { integradoresDaAulaHTML } from './integradores.js';
import { leiturasRecomendadasHTML } from './mediateca.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { INICIO_MULTIDISCIPLINAR } from '../core.js';

/** Onde o mÃ³dulo estÃ¡: um degrau da escada ou uma disciplina da fase multidisciplinar (fase 3). */
const ondeEsta = (m) => (m.degrau === null ? `Fase 3 Â· ${disciplinaPorId[m.disciplina]?.nome || m.disciplina}` : `Degrau ${m.degrau}`);
// mÃ³dulos de disciplina nÃ£o tÃªm degrau, mas pertencem Ã  fase multidisciplinar: o bloqueio usa o inÃ­cio dela
const degrauDoBloqueio = (m) => m.degrau ?? INICIO_MULTIDISCIPLINAR;

const statusAula = (estado, a) => {
  if (aulaConcluida(estado, a.id)) return '<span class="chip ok">ConcluÃ­da</span>';
  if (!aulaPorId[a.id]) return '<span class="chip neutro">Em preparaÃ§Ã£o</span>';
  if (estado.aulas[a.id]) return '<span class="chip andamento">Em andamento</span>';
  return '<span class="chip">DisponÃ­vel</span>';
};

export function curso({ estado }) {
  return `<header class="cab"><h1>Curso completo</h1>
    <p class="sub">${MODULOS.length} mÃ³dulos em ordem de progressÃ£o: a escada (teologia, iniciaÃ§Ã£o e filosofia) e as disciplinas. Aulas marcadas "em preparaÃ§Ã£o" tÃªm estrutura definida e conteÃºdo a ser publicado; nÃ£o contam como concluÃ­das.</p>
    <p class="meta">Para estudar um mesmo objeto por vÃ¡rias disciplinas, veja os ${link('integradores', 'mÃ³dulos integradores')}.</p></header>
    <ol class="lista-modulos">${MODULOS.map((m) => {
      const p = progressoModulo(m, estado);
      const prontas = m.aulas.filter((a) => aulaPorId[a.id]).length;
      return `<li class="cartao-mod"><a href="#mod-${m.id}">
        <span class="num">MÃ³dulo ${m.n}</span><h2>${esc(m.titulo)}</h2>
        <p>${esc(m.descricao)}</p>
        <div class="linha-meta"><span>${esc(ondeEsta(m))}</span><span>${m.aulas.length} aulas Â· ${prontas} com conteÃºdo</span><span>${m.semanas} semanas</span></div>
        ${barra(p.pct, `Progresso do mÃ³dulo ${m.n}`)}<span class="meta">${p.feitas}/${p.total} concluÃ­das</span></a></li>`;
    }).join('')}</ol>`;
}

export function modulo({ estado }, id) {
  const m = moduloPorId[id];
  if (!m) return '<p>MÃ³dulo nÃ£o encontrado.</p>';
  const p = progressoModulo(m, estado);
  const livros = LIVROS.filter((l) => l.modulo === m.id).sort((a, b) => a.degrau - b.degrau || a.ordem - b.ordem);
  const avals = AVALIACOES.filter((a) => a.modulo === m.id);
  return `<nav class="migalha">${link('curso', 'Curso')} / MÃ³dulo ${m.n}</nav>
  <header class="cab"><span class="num">MÃ³dulo ${m.n} Â· ${esc(ondeEsta(m))} Â· ${m.semanas} semanas</span><h1>${esc(m.titulo)}</h1><p class="sub">${esc(m.descricao)}</p>
    ${barra(p.pct)}<span class="meta">${p.feitas}/${p.total} aulas concluÃ­das</span>
    ${m.prereq.length ? `<p class="meta">PrÃ©-requisitos: ${m.prereq.map((x) => link(`mod-${x}`, `MÃ³dulo ${moduloPorId[x].n}`)).join(', ')}</p>` : ''}</header>
  <div class="grade-2">
    <section><h2>Objetivos de aprendizagem</h2><ul>${m.objetivos.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
      <h2>CritÃ©rios de conclusÃ£o</h2><ul>${m.criterios.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></section>
    <section><h2>Aulas</h2><ol class="lista-aulas">${m.aulas.map((a) => `<li><a href="#aula-${a.id}"><span>${a.n}. ${esc(a.titulo)}</span>${statusAula(estado, a)}</a></li>`).join('')}</ol></section>
    ${leiturasRecomendadasHTML(m, 8, estado)}
  </div>
  <section><h2>Leituras e bibliografia do mÃ³dulo</h2>
    ${livros.length ? `<ul class="lista-livros-curta">${livros.map((l) => `<li>${link(`livro-${l.id}`, esc(l.titulo))} â€” ${esc(l.autor)} <span class="meta">(degrau ${l.degrau})</span></li>`).join('')}</ul>` : '<p class="meta">As leituras deste mÃ³dulo sÃ£o retomadas de degraus anteriores; veja o Mapa.</p>'}</section>
  <section><h2>ExercÃ­cios e avaliaÃ§Ã£o do mÃ³dulo</h2>
    ${avals.length ? `<ul>${avals.map((a) => `<li>${link(`aval-${a.id}`, esc(a.titulo))} ${melhorNota(estado, a.id) >= 0 ? `<span class="meta">melhor nota: ${melhorNota(estado, a.id)}%</span>` : ''}</li>`).join('')}</ul>` : '<p class="meta">A prova deste mÃ³dulo serÃ¡ publicada junto com o conteÃºdo das aulas. Enquanto isso, cada aula completa tem seu prÃ³prio questionÃ¡rio.</p>'}</section>`;
}

function diagramaArgumento(arg) {
  return `<figure class="argumento" aria-label="Diagrama do argumento">
    <figcaption>${etiqueta(arg.tag)} ${esc(arg.titulo)}</figcaption>
    <ol class="premissas">${arg.premissas.map((p, i) => `<li><span class="pn">P${i + 1}</span>${esc(p)}</li>`).join('')}</ol>
    <div class="seta" aria-hidden="true">â†“ logo</div>
    <div class="conclusao"><span class="pn">C</span>${esc(arg.conclusao)}</div>
    ${arg.nota ? `<p class="nota-arg">${esc(arg.nota)}</p>` : ''}</figure>`;
}

function aulaEmPreparacao(m, a) {
  const livros = LIVROS.filter((l) => l.modulo === m.id);
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `MÃ³dulo ${m.n}`)} / Aula ${a.n}</nav>
  <header class="cab"><span class="num">MÃ³dulo ${m.n} Â· Aula ${a.n}</span><h1>${esc(a.titulo)}</h1></header>
  <div class="aviso"><strong>Aula em preparaÃ§Ã£o.</strong> A estrutura e o lugar desta aula na trilha estÃ£o definidos, mas o conteÃºdo completo ainda nÃ£o foi publicado. Ela nÃ£o pode ser concluÃ­da atÃ© lÃ¡ e nÃ£o conta no progresso.</div>
  <section><h2>Objetivos do mÃ³dulo</h2><ul>${m.objetivos.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></section>
  ${livros.length ? `<section><h2>Leituras que vocÃª jÃ¡ pode comeÃ§ar</h2><ul>${livros.map((l) => `<li>${link(`livro-${l.id}`, esc(l.titulo))} â€” ${esc(l.autor)}</li>`).join('')}</ul></section>` : ''}`;
}

function blocoConclusao(estado, m, meta, a, conc) {
  const st = estado.aulas[a.id] || {};
  const proxima = m.aulas[meta.n];
  return `<section id="s14" class="concluir"><h2>CritÃ©rios para avanÃ§ar</h2><ul>${(a.criterios || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    ${aulaConcluida(estado, a.id)
      ? `<p class="ok-msg">ConcluÃ­da em ${fmtData(st.fim)}.</p>${proxima ? `<a class="btn primario" href="#aula-${proxima.id}">PrÃ³xima: ${esc(proxima.titulo)}</a>` : ''}`
      : `${conc.ok ? '' : `<p><strong>Falta:</strong></p><ul class="faltas">${conc.faltas.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>`}
         <button class="btn primario" data-acao="concluir" ${conc.ok ? '' : 'disabled'}>Concluir</button>`}</section>`;
}

/** Aula de avaliaÃ§Ã£o do mÃ³dulo: orientaÃ§Ã£o de estudo e a prova gerada a partir das aulas. */
function aulaAvaliacao(estado, m, meta, a) {
  const prova = avaliacaoPorId[a.prova];
  const conc = aulaConcluivel(a, estado, m.aulas[meta.n - 2]?.id, prova, degrauDoBloqueio(m));
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `MÃ³dulo ${m.n}`)} / Aula ${meta.n}</nav>
  <article class="aula">
  <header class="cab"><span class="num">MÃ³dulo ${m.n}: ${esc(m.titulo)} Â· ${esc(a.duracao)}</span><h1>${esc(a.titulo)}</h1>
    <div class="acoes-aula"><button class="btn" data-acao="cronometro" data-alvo="aula:${a.id}">Iniciar cronÃ´metro</button></div></header>
  <section class="texto">${a.orientacao}</section>
  <section><h2>Aulas cobertas</h2><ol class="lista-curta">${m.aulas.slice(0, -1).map((x) => `<li>${link(`aula-${x.id}`, esc(x.titulo))} ${aulaConcluida(estado, x.id) ? '<span class="chip ok">concluÃ­da</span>' : ''}</li>`).join('')}</ol></section>
  <section id="s11"><h2>${esc(prova?.titulo || 'Prova')}</h2>
    <p class="dica">${prova?.itens.some((it) => it.tipo !== 'disc') ? `Nota mÃ­nima: ${notaMinima(estado)}%. Vale a melhor tentativa. ` : ''}As discursivas aceitam conclusÃµes diferentes, desde que bem fundamentadas.</p>
    ${prova ? quizHTML(prova.itens, prova.id, prova.id, estado, notaMinima(estado)) : '<p class="aviso">Prova nÃ£o encontrada.</p>'}</section>
  ${blocoConclusao(estado, m, meta, a, conc)}</article>`;
}

export function aula({ estado }, id) {
  // o mÃ³dulo vem do currÃ­culo, nÃ£o do prefixo do id: aulas que mudaram de mÃ³dulo conservam o id antigo
  const m = moduloPorId[todasAulas.find((x) => x.id === id)?.modulo];
  const meta = m?.aulas.find((x) => x.id === id);
  if (!meta) return '<p>Aula nÃ£o encontrada.</p>';
  const a = aulaPorId[id];
  if (!a) return aulaEmPreparacao(m, meta);
  if (a.tipo === 'avaliacao') return aulaAvaliacao(estado, m, meta, a);
  const anterior = m.aulas[meta.n - 2]?.id;
  const conc = aulaConcluivel(a, estado, anterior, null, degrauDoBloqueio(m));
  const st = estado.aulas[id] || {};
  const nota = melhorNota(estado, `quiz-${id}`);
  const proxima = m.aulas[meta.n];
  return `<nav class="migalha">${link('curso', 'Curso')} / ${link(`mod-${m.id}`, `MÃ³dulo ${m.n}`)} / Aula ${meta.n}</nav>
  <article class="aula">
  <header class="cab"><span class="num">MÃ³dulo ${m.n}: ${esc(m.titulo)} Â· Aula ${meta.n} Â· ${esc(a.duracao)}</span>
    <h1>${esc(a.titulo)} ${botaoFav(estado, 'aula', id)}</h1>
    <div class="acoes-aula"><button class="btn" data-acao="nota-aula">Nova nota desta aula</button>
      <button class="btn" data-acao="cartoes">Gerar cartÃµes de revisÃ£o</button>
      <button class="btn" data-acao="cronometro" data-alvo="aula:${id}">Iniciar cronÃ´metro</button></div></header>
  <nav class="sumario" aria-label="SeÃ§Ãµes da aula"><ol>
    ${['Objetivos', 'PrÃ©-requisitos', 'ExplicaÃ§Ã£o', 'VocabulÃ¡rio', 'Exemplos', 'Contexto', 'Argumento', 'ObjeÃ§Ãµes', 'AplicaÃ§Ã£o', 'Fonte original', 'CompreensÃ£o', 'ExercÃ­cios e avaliaÃ§Ã£o', 'Resumo', 'ReferÃªncias', 'CritÃ©rios para avanÃ§ar', 'Aprofundamento'].map((s, i) => (i === 15 && !a.avancado ? '' : `<li><a href="#aula-${id}" data-ir="s${i}">${s}</a></li>`)).join('')}</ol></nav>

  <section id="s0"><h2>O que vocÃª aprenderÃ¡</h2><ul>${a.aprendera.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s1"><h2>PrÃ©-requisitos</h2><ul>${a.prereq.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s2" class="texto">${a.explicacao}</section>
  <section id="s3"><h2>VocabulÃ¡rio essencial</h2><dl class="vocab">${a.vocabulario.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join('')}</dl></section>
  <section id="s4" class="texto"><h2>Exemplos concretos</h2>${a.exemplos}</section>
  <section id="s5" class="texto"><h2>Contexto histÃ³rico</h2>${a.contexto}</section>
  <section id="s6"><h2>Argumento principal</h2>${diagramaArgumento(a.argumento)}</section>
  <section id="s7"><h2>ObjeÃ§Ãµes relevantes</h2>${a.objecoes.map((o) => `<div class="objecao"><p><strong>ObjeÃ§Ã£o.</strong> ${esc(o.objecao)} ${etiqueta(o.tag)}</p><p><strong>Resposta possÃ­vel.</strong> ${esc(o.resposta)}</p></div>`).join('')}</section>
  <section id="s8" class="texto"><h2>AplicaÃ§Ã£o prÃ¡tica</h2>${a.aplicacao}</section>
  <section id="s9" class="texto fonte"><h2>Leitura orientada da fonte original</h2><p><strong>${esc(a.fonte.obra)}</strong></p>${a.fonte.orientacao}
    ${a.fonte.link ? `<p>${linkExterno(a.fonte.link)}</p>` : ''}
    <label class="opcao destaque"><input type="checkbox" data-acao="fonte-lida" ${st.fonteLida ? 'checked' : ''}> <span>Li a fonte orientada</span></label></section>
  <section id="s10"><h2>Perguntas de compreensÃ£o</h2><p class="dica">Responda mentalmente ou no Caderno antes de abrir a resposta.</p>
    ${a.perguntas.map((q) => `<details class="pergunta"><summary>${esc(q.p)}</summary><p>${esc(q.r)}</p></details>`).join('')}</section>
  <section id="s11"><h2>ExercÃ­cios e avaliaÃ§Ã£o</h2><p class="dica">Nota mÃ­nima para avanÃ§ar: ${notaMinima(estado)}%. VocÃª pode refazer quantas vezes quiser; vale a melhor tentativa.</p>
    ${quizHTML(a.exercicios, `quiz-${id}`, id, estado, notaMinima(estado))}</section>
  <section id="s12"><h2>Resumo final</h2><ul class="resumo">${a.resumo.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section id="s13"><h2>ReferÃªncias verificÃ¡veis</h2><ul class="refs">${a.referencias.map((r) => `<li>${esc(r.texto)} ${linkExterno(r.link)}</li>`).join('')}</ul>
    <p class="meta">Etiquetas usadas no texto: ${['doutrina', 'fato', 'argumento', 'interpretacao', 'hipotese', 'debate'].map(etiqueta).join(' ')}</p></section>
  ${conexoesAula(estado, id)}
  ${integradoresDaAulaHTML(id)}
  ${leiturasRecomendadasHTML(m, 6, estado)}
  ${a.avancado ? `<section id="s15" class="avancado-sec texto"><h2>Aprofundamento</h2>
    <p class="dica">Parte obrigatÃ³ria da aula: questionÃ¡rio com mÃ­nimo de ${notaMinima(estado)}% e questÃ£o discursiva.</p>
    ${a.avancado.texto}
    <h3>Leituras do aprofundamento</h3><ul class="refs">${a.avancado.leituras.map((r) => `<li>${esc(r.texto)} ${linkExterno(r.link)}</li>`).join('')}</ul>
    <h3>QuestionÃ¡rio do aprofundamento</h3>${quizHTML(a.avancado.exercicios, `quiz-av-${id}`, `${id}-av`, estado, notaMinima(estado))}</section>` : ''}
  <section id="s14" class="concluir"><h2>CritÃ©rios para avanÃ§ar</h2><ul>${a.criterios.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    ${aulaConcluida(estado, id)
      ? `<p class="ok-msg">Aula concluÃ­da em ${fmtData(st.fim)}. Melhor nota: ${nota}%.</p>${proxima ? `<a class="btn primario" href="#aula-${proxima.id}">PrÃ³xima aula: ${esc(proxima.titulo)}</a>` : ''}`
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
  // Atualiza sÃ³ a seÃ§Ã£o de conclusÃ£o, para nÃ£o apagar a correÃ§Ã£o do questionÃ¡rio na tela.
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
      toast('Aula concluÃ­da.');
    }
    if (b.dataset.acao === 'nota-aula') ctx.novaNota({ tipo: 'aula', id }, `Notas â€” ${a.titulo}`);
    if (b.dataset.acao === 'cartoes') {
      const origem = `aula:${id}`;
      const existentes = new Set(ctx.estado.revisoes.filter((r) => r.origem === origem).map((r) => r.frente));
      const novos = a.revisao.filter(([f]) => !existentes.has(f)).map(([f, v]) => novoCartao(f, v, origem));
      ctx.set((e) => ({ ...e, revisoes: [...e.revisoes, ...novos] }), { render: false });
      toast(novos.length ? `${novos.length} cartÃ£o(Ãµes) criado(s). Primeira revisÃ£o amanhÃ£.` : 'Os cartÃµes desta aula jÃ¡ existem.');
    }
  });
};
