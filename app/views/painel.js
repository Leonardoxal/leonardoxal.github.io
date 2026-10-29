// Painel de estudos: todos os indicadores derivam do estado real do estudante.
import { MODULOS, DEGRAUS, moduloPorId, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { conceitoPorId } from '../data/conceitos.js';
import { progressoCurso, progressoModulo, progressoDegrau, aulaConcluida, revisoesPendentes, minutosSemana, minutosTotal, pctLivro, conquistas } from '../core.js';
import { esc, barra, link, fmtData, fmtMin } from '../ui.js';
import { rotuloVinculo } from './caderno.js';
import { fachada } from '../ornamentos.js';
import { faseHTML } from './grade.js';

const disponiveis = new Set(Object.keys(aulaPorId));

function saudacao() {
  const h = new Date().getHours();
  return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
}

export function painel({ estado, status }) {
  const curso = progressoCurso(MODULOS, estado);
  const degrauAtual = DEGRAUS.find((d) => !estado.degraus[d.n]?.concluido) || DEGRAUS[DEGRAUS.length - 1];
  // "continuar" segue a escada; as aulas das disciplinas da fase 2 entram pela grade do Plano
  const livre = (a) => a.degrau !== null && aulaPorId[a.id] && !aulaConcluida(estado, a.id);
  const proximaDisponivel = todasAulas.find((a) => a.degrau === degrauAtual.n && livre(a)) || todasAulas.find(livre);
  const continuar = estado.atual.aula && !aulaConcluida(estado, estado.atual.aula) && aulaPorId[estado.atual.aula] ? estado.atual.aula : proximaDisponivel?.id;
  const aulaCont = continuar && todasAulas.find((a) => a.id === continuar);
  const proximas = todasAulas.filter((a) => livre(a) && a.id !== continuar).slice(0, 4);
  const pend = revisoesPendentes(estado.revisoes);
  const semana = minutosSemana(estado.sessoes);
  const meta = estado.plano.horasSemana * 60;
  const livroId = estado.atual.livro;
  const livro = livroId && livroPorId[livroId];
  const notas = estado.notas.slice().sort((a, b) => (b.editada || b.criada) - (a.editada || a.criada)).slice(0, 4);
  const historico = Object.entries(estado.tentativas).flatMap(([id, ts]) => ts.map((t) => ({ id, ...t }))).sort((a, b) => b.data - a.data).slice(0, 5);
  const favs = estado.favoritos.slice(0, 6);
  const conq = conquistas(estado, MODULOS);
  const modsAtivos = MODULOS.filter((m) => progressoModulo(m, estado).feitas > 0 || m.id === aulaCont?.modulo);
  const novo = !Object.keys(estado.aulas).length && !estado.sessoes.length;

  const favLink = (k) => {
    const [t, id] = k.split(':');
    if (t === 'livro') return link(`livro-${id}`, esc(livroPorId[id]?.titulo || id));
    if (t === 'aula') return link(`aula-${id}`, esc(todasAulas.find((a) => a.id === id)?.titulo || id));
    if (t === 'conceito') return link(`conceito-${id}`, esc(conceitoPorId[id]?.termo || id));
    return esc(k);
  };

  return `<header class="cab painel-cab"><div>
    <p class="num">${saudacao()}${estado.perfil.nome ? `, ${esc(estado.perfil.nome)}` : ''}</p>
    <h1>Degrau ${degrauAtual.n}: ${esc(degrauAtual.nome)}</h1>
    ${faseHTML(estado)}
    <p class="sub">${esc(degrauAtual.objetivo)}</p>
    ${aulaCont ? `<a class="btn primario grande" href="#aula-${aulaCont.id}">Continuar estudando — ${esc(aulaCont.titulo)}</a>
      <p class="meta">Módulo ${moduloPorId[aulaCont.modulo].n}: ${esc(moduloPorId[aulaCont.modulo].titulo)}</p>` : '<p>Todas as aulas disponíveis foram concluídas. Novas aulas serão publicadas em lotes.</p>'}
  </div>${fachada()}</header>
  ${novo ? `<div class="boas-vindas"><h2>Por onde começar</h2><ol>
      <li>Faça a aula ${link('aula-m3-1', 'Como ler textos filosóficos')} (Degrau 0) — ela ensina o método usado no curso todo.</li>
      <li>Siga para o ${link('mod-m1', 'Módulo 1: Fundamentos da teologia católica')}.</li>
      <li>Ajuste suas horas semanais no ${link('plano', 'Plano de estudos')} (padrão: 6 h).</li>
      <li>Veja a jornada completa na ${link('escada', 'escada da formação')} e as áreas do saber no ${link('mapa', 'mapa do conhecimento')}.</li></ol>
      <label class="campo"><span>Nome para a saudação (opcional)</span><input id="nome" value="${esc(estado.perfil.nome)}" maxlength="40"></label></div>` : ''}

  <div class="indicadores">
    <div class="ind"><span class="ind-rot">Progresso total do curso</span><span class="ind-val">${curso.pct}%</span>${barra(curso.pct)}<span class="meta">${curso.feitas} de ${curso.total} aulas</span></div>
    <div class="ind"><span class="ind-rot">Meta semanal</span><span class="ind-val">${fmtMin(semana)}</span>${barra(Math.round((semana / meta) * 100))}<span class="meta">de ${fmtMin(meta)} · total ${fmtMin(minutosTotal(estado.sessoes))}</span></div>
    <div class="ind"><span class="ind-rot">Revisões pendentes</span><span class="ind-val">${pend.length}</span>${pend.length ? link('revisar', 'Revisar agora') : '<span class="meta">nada para hoje</span>'}</div>
    <div class="ind"><span class="ind-rot">Degrau ${degrauAtual.n}</span><span class="ind-val">${progressoDegrau(degrauAtual, MODULOS, disponiveis, estado)}%</span>${barra(progressoDegrau(degrauAtual, MODULOS, disponiveis, estado))}${link('escada', 'Ver na escada')}</div>
  </div>

  <div class="grade-2">
    <section><h2>Livro atual</h2>${livro ? `<p>${link(`livro-${livroId}`, `<strong>${esc(livro.titulo)}</strong>`)} — ${esc(livro.autor)}</p>${barra(pctLivro(estado, livroId))}<p class="meta">${pctLivro(estado, livroId)}% lido${estado.livros[livroId]?.paginas ? ` · p. ${estado.livros[livroId].paginaAtual || 0} de ${estado.livros[livroId].paginas}` : ' · informe o total de páginas na ficha do livro'}</p>` : `<p class="meta">Nenhum livro marcado como "Lendo". Comece pelo primeiro da trilha: ${link('livro-adler-como-ler', 'Como Ler Livros')}.</p>`}</section>
    <section><h2>Próximas aulas</h2>${proximas.length ? `<ul class="lista-curta">${proximas.map((a) => `<li>${link(`aula-${a.id}`, `${a.id} — ${esc(a.titulo)}`)}</li>`).join('')}</ul>` : '<p class="meta">Nenhuma outra aula disponível no momento.</p>'}</section>
    <section><h2>Progresso por módulo</h2>${modsAtivos.length ? modsAtivos.map((m) => { const p = progressoModulo(m, estado); return `<p>${link(`mod-${m.id}`, `${m.n}. ${esc(m.titulo)}`)} <span class="meta">${p.feitas}/${p.total}</span></p>${barra(p.pct)}`; }).join('') : '<p class="meta">Ainda sem módulos iniciados.</p>'} ${link('plano', 'Relatório completo')}</section>
    <section><h2>Notas recentes</h2>${notas.length ? `<ul class="lista-curta">${notas.map((n) => `<li>${link(`nota-${n.id}`, esc(n.titulo || 'Sem título'))} <span class="meta">${esc(rotuloVinculo(n.vinculo))}</span></li>`).join('')}</ul>` : '<p class="meta">Nenhuma nota ainda.</p>'} ${link('caderno', 'Abrir caderno')}</section>
    <section><h2>Histórico de avaliações</h2>${historico.length ? `<ul class="lista-curta">${historico.map((h) => `<li>${fmtData(h.data)} — ${esc(h.id)}: <strong>${h.pct}%</strong></li>`).join('')}</ul>` : '<p class="meta">Nenhuma avaliação feita.</p>'} ${link('avaliacoes', 'Todas as avaliações')}</section>
    <section><h2>Favoritos</h2>${favs.length ? `<ul class="lista-curta">${favs.map((k) => `<li>${favLink(k)}</li>`).join('')}</ul>` : '<p class="meta">Use ☆ em aulas, livros e conceitos.</p>'}</section>
  </div>
  <section><h2>Conquistas acadêmicas</h2><ul class="conquistas">${conq.map((c) => `<li class="${c.ok ? 'ok' : ''}"><span aria-hidden="true">${c.ok ? '✓' : '○'}</span> ${esc(c.titulo)}<span class="sr">${c.ok ? ' (alcançada)' : ' (pendente)'}</span></li>`).join('')}</ul></section>
  <p class="meta status-${status.modo}">${esc(status.msg)}</p>`;
}

painel.ligar = (root, ctx) => {
  const n = root.querySelector('#nome');
  let t;
  n?.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => ctx.set((e) => ({ ...e, perfil: { ...e.perfil, nome: n.value.trim() } }), { render: false }), 500); });
};
