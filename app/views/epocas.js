// Épocas (#epocas e #epoca-<id>): a ordem de estudo da fase 3 e a trilha paralela.
import { EPOCAS, epocaPorId, PARALELAS, epocaDaAula, naFase3, aulasDaEpoca, trilhaParalela, revisoesDaEpoca, motivoDaAula, epocaAtual, progressoEpoca, progressoParalela } from '../data/epocas.js';
import { contextoPorObra, obrasDoContexto, PARALELA, FASE_INICIAL, BASES_FRACAS } from '../data/contextos.js';
import { idiomasDaEpoca, IDIOMA_CONSTANTE } from '../data/idiomas.js';
import { aulaPorId } from '../data/aulas/index.js';
import { todasAulas, moduloPorId } from '../data/curriculo.js';
import { livroPorId } from '../data/livros.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { aulaConcluida, livroConcluido, faseIniciacaoConcluida } from '../core.js';
import { esc, link, barra } from '../ui.js';

const moduloDaAula = Object.fromEntries(todasAulas.map((a) => [a.id, moduloPorId[a.modulo]]));
const pct = ({ feitas, total }) => (total ? Math.round((feitas / total) * 100) : 0);

/** Item de aula numa lista de época ou da trilha: código, título, módulo e situação. */
export const itemAula = (estado, id, atual = '') => `<li>${link(`aula-${id}`, `${esc(id)} — ${esc(aulaPorId[id].titulo)}`)} <span class="meta">${esc(moduloDaAula[id].titulo)}</span>${aulaConcluida(estado, id) ? ' <span class="chip ok">concluída</span>' : id === atual ? ' <span class="chip andamento">agora</span>' : ''}${motivoDaAula(id) ? `<br><span class="meta">${esc(motivoDaAula(id))}</span>` : ''}</li>`;

export const obrasDaEpocaHTML = (estado, e) => (e.obras.length
  ? `<section><h2>Obras desta época (${e.obras.length})</h2><ul class="lista-curta">${e.obras.map((l) => `<li>${link(`livro-${l}`, `<em>${esc(livroPorId[l].titulo)}</em>`)} — ${esc(livroPorId[l].autor)}${livroConcluido(estado, l) ? ' <span class="chip ok">lido</span>' : ''}</li>`).join('')}</ul>
      <p class="meta">Livros da trilha escolhidos à mão para esta época. As demais obras da ${link('mediateca', 'mediateca')} ligadas a ela vêm na lista completa da página da época.</p></section>`
  : '');

const ROTULO_BASE = { curadoria: 'escolhida à mão para a época', fase: 'módulo da teologia ou da iniciação', assunto: 'assunto nomeado no título', autor: 'época do autor', aula: 'aula a que a obra está ligada', módulo: 'módulo da obra' };
const aConferir = (c) => BASES_FRACAS.includes(c.base) && Boolean(epocaPorId[c.contexto]);
const porCriador = new Intl.Collator('pt', { numeric: true });

/** Linha da página da obra: onde ela é estudada e a regra que a pôs ali. */
export function contextoDaObraHTML(id) {
  const c = contextoPorObra(id);
  if (!c) return '';
  const e = epocaPorId[c.contexto];
  const onde = e ? `Época: ${link(`epoca-${e.id}`, esc(e.titulo))} (${esc(e.anos)})`
    : c.contexto === PARALELA ? `${link('epocas', 'Trilha paralela')}: obra sem época, estudada ao lado das épocas`
    : c.contexto === FASE_INICIAL ? 'Teologia e iniciação intelectual: estudada com o módulo, antes das épocas'
    : 'Sem época: obra de consulta ou manual, que acompanha o módulo';
  return `<p class="meta">${onde}. Critério: ${ROTULO_BASE[c.base]}${aConferir(c) ? ' (proposta a conferir)' : ''}.</p>`;
}

/** Todas as obras da mediateca estudadas numa época, por autor; fechada por padrão, porque passa de mil em algumas. */
const mediatecaDaEpocaHTML = (e) => {
  const obras = [...obrasDoContexto(e.id)].sort((a, b) => porCriador.compare(`${a.criador}|${a.titulo}`, `${b.criador}|${b.titulo}`));
  if (!obras.length) return '';
  return `<section><h2>Mediateca desta época (${obras.length})</h2>
    <p class="meta">Cada obra fica na época em que é mais bem aproveitada: a do autor ou, nos estudos e comentários, a do assunto. A página de cada obra diz o critério; as marcadas "a conferir" vieram só do módulo ou da aula.</p>
    <details><summary>Ver as ${obras.length} obras</summary><ul class="lista-curta">${obras.map((o) => `<li>${link(`obra-${o.id}`, `<em>${esc(o.titulo)}</em>`)}${o.criador ? ` — ${esc(o.criador)}` : ''}${aConferir(contextoPorObra(o.id)) ? ' <span class="chip">a conferir</span>' : ''}</li>`).join('')}</ul></details></section>`;
};

/** Linha da página da aula: em que época ela é estudada, ou que segue na trilha paralela. */
export function epocaDaAulaHTML(id) {
  if (!naFase3(id)) return '';
  const e = epocaPorId[epocaDaAula(id)];
  const motivo = motivoDaAula(id);
  return `<p class="meta">${e ? `Época: ${link(`epoca-${e.id}`, esc(e.titulo))} (${esc(e.anos)}).` : `${link('epocas', 'Trilha paralela')}: aula sem época, estudada ao lado das épocas.`}${motivo ? ` ${esc(motivo)}` : ''}</p>`;
}

// antes da fase 3 as épocas podem ser consultadas, mas nenhuma é a "atual"
const atualNaFase3 = (estado) => (faseIniciacaoConcluida(estado) ? epocaAtual(estado) : null);

export function epocas({ estado }) {
  const atual = atualNaFase3(estado);
  const p = progressoParalela(estado);
  return `<header class="cab"><h1>Épocas</h1>
    <p class="sub">Depois da teologia e da iniciação, o estudo segue o tempo: em cada época, as aulas de todas as matérias que ajudam a entender aquele momento. As aulas sem época (conceitos, método e conteúdo técnico) correm ao lado, na trilha paralela.</p>
    <p class="meta">A composição muda de época para época: uma matéria aparece quando pesa naquele momento e some quando deixa de pesar. Módulos, provas e notas continuam os mesmos; o calendário por disciplina segue em ${link('periodos', 'Semestres')}.</p>
    ${faseIniciacaoConcluida(estado) ? '' : `<p class="aviso">As épocas começam depois da teologia e da iniciação intelectual (degraus 0 a 4). Até lá, podem ser consultadas. ${link('estudar', 'Ver o que estudar agora')}.</p>`}</header>
  <ol class="lista-modulos">${EPOCAS.map((e, i) => {
    const pr = progressoEpoca(estado, e.id);
    return `<li class="cartao-mod"><a href="#epoca-${e.id}"><span class="num">Época ${i + 1} · ${esc(e.anos)}${atual?.id === e.id ? ' · atual' : ''}</span><h2>${esc(e.titulo)}</h2>
      <p>${esc(e.apresentacao)}</p>${barra(pct(pr), `Progresso de ${e.titulo}`)}<span class="meta">${pr.feitas}/${pr.total} aulas concluídas</span></a></li>`;
  }).join('')}</ol>
  <section id="paralela"><h2>Trilha paralela</h2>
    <p class="meta">${esc(PARALELAS.map((d) => disciplinaPorId[d].nome).join(', '))}. Primeiro os fundamentos de todas, depois os módulos seguintes. As aulas de história dessas matérias estão nas épocas.</p>
    ${barra(pct(p), 'Progresso da trilha paralela')}<span class="meta">${p.feitas}/${p.total} aulas concluídas</span>
    <p class="meta">Obras da ${link('mediateca', 'mediateca')} fora das épocas: ${obrasDoContexto(PARALELA).length} na trilha paralela, ${obrasDoContexto(FASE_INICIAL).length} na teologia e na iniciação (antes das épocas) e ${obrasDoContexto('sem-contexto').length} de consulta (dicionários, gramáticas e manuais), que acompanham o módulo. As demais estão na página de cada época.</p>
    <details><summary>Ver as ${p.total} aulas</summary><ol class="leituras">${trilhaParalela().map((id) => itemAula(estado, id)).join('')}</ol></details></section>`;
}

export function epoca({ estado }, id) {
  // hasOwn: "constructor" e "toString" existem em qualquer objeto e não são épocas
  const e = Object.hasOwn(epocaPorId, id) ? epocaPorId[id] : null;
  if (!e) return `<p>Época não encontrada. ${link('epocas', 'Ver todas as épocas')}</p>`;
  const n = EPOCAS.indexOf(e);
  const aulas = aulasDaEpoca(id);
  const pr = progressoEpoca(estado, id);
  const agora = atualNaFase3(estado)?.id === id ? aulas.find((a) => !aulaConcluida(estado, a)) : '';
  const revisoes = revisoesDaEpoca(id);
  const vizinha = (x, rotulo) => (x ? link(`epoca-${x.id}`, `${rotulo}: ${esc(x.titulo)}`, 'btn') : '');
  return `<nav class="migalha">${link('estudar', 'Estudar')} / ${link('epocas', 'Épocas')} / Época ${n + 1}</nav>
  <header class="cab"><span class="num">Época ${n + 1} de ${EPOCAS.length} · ${esc(e.anos)}</span><h1>${esc(e.titulo)}</h1><p class="sub">${esc(e.apresentacao)}</p>
    ${barra(pct(pr), `Progresso de ${e.titulo}`)}<span class="meta">${pr.feitas}/${pr.total} aulas concluídas</span></header>
  <section><h2>Aulas, na ordem de estudo</h2><ol class="leituras">${aulas.map((a) => itemAula(estado, a, agora)).join('')}</ol></section>
  ${revisoes.length ? `<section><h2>Para rever nesta época</h2><p class="meta">Aulas de épocas anteriores que também tratam deste período. Não são exigidas de novo.</p><ul class="lista-curta">${revisoes.map((a) => itemAula(estado, a)).join('')}</ul></section>` : ''}
  <section><h2>Línguas desta época</h2><ul class="lista-curta">${idiomasDaEpoca(id).map((l) => `<li>${link('idiomas', `<strong>${esc(l.nome)}</strong>`)}${estado.idiomas?.[l.id] ? ` <span class="chip ok">${esc(estado.idiomas[l.id])}</span>` : ''} <span class="meta">${l.id === IDIOMA_CONSTANTE ? 'língua de trabalho, em todas as épocas' : `para ler: ${esc(l.alvos.join('; '))}`}</span></li>`).join('')}</ul>
    <p class="meta">É a época em que os textos da língua pesam: bom momento para começá-la ou retomá-la. Uma língua de cada vez; ela continua depois da época.</p></section>
  ${obrasDaEpocaHTML(estado, e)}
  ${mediatecaDaEpocaHTML(e)}
  <div class="acoes-aula">${vizinha(EPOCAS[n - 1], 'Anterior')}${vizinha(EPOCAS[n + 1], 'Próxima')}</div>`;
}
