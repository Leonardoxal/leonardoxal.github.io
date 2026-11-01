// Semestres da fase multidisciplinar (#periodos) e calendário de um semestre (#periodo-N).
import { PERIODOS, periodoPorN, periodoAtual, situacaoMateria, semanasNoRitmo, CARGA, SEMANA_INTERMEDIARIA, SEMANA_PROJETO, SEMANA_FINAL, SEMANA_RECUPERACAO, SEMANAS_TOTAIS } from '../data/periodos.js';
import { aulaPorId } from '../data/aulas/index.js';
import { avaliacaoPorId } from '../data/avaliacoes.js';
import { aulaConcluida, livroConcluido, melhorNota, NOTA_MINIMA, pendenciaDisciplinas } from '../core.js';
import { esc, link, fmtMin, barra } from '../ui.js';

const ROTULO_SITUACAO = { aprovada: ['ok', 'aprovada'], recuperacao: ['alerta', 'recuperação'], 'em curso': ['', 'em curso'] };
const situacaoHTML = (s) => `<span class="chip ${ROTULO_SITUACAO[s][0]}">${ROTULO_SITUACAO[s][1]}</span>`;
const EVENTO = { [SEMANA_INTERMEDIARIA]: 'Avaliação intermediária', [SEMANA_PROJETO]: 'Projeto interdisciplinar', [SEMANA_FINAL]: 'Avaliação final', [SEMANA_RECUPERACAO]: 'Recuperação' };

function ritmoHTML(p, horasSemana) {
  const semanas = semanasNoRitmo(p, horasSemana);
  return semanas > SEMANAS_TOTAIS
    ? `<p class="meta">No seu ritmo (${horasSemana} h por semana), este semestre leva cerca de <strong>${semanas} semanas</strong> em vez de ${SEMANAS_TOTAIS}. Isso fica registrado como exceção de ritmo; para cumprir o calendário seriam necessárias ${Math.ceil(p.mediaSemanal / 60)} h por semana em média.</p>`
    : `<p class="meta">No seu ritmo (${horasSemana} h por semana), o semestre cabe nas ${SEMANAS_TOTAIS} semanas.</p>`;
}

export function periodos({ estado }) {
  const atual = periodoAtual(estado);
  const pend = pendenciaDisciplinas(estado);
  return `<nav class="migalha">${link('plano', 'Plano')} / Semestres</nav>
  <header class="cab"><h1>Semestres da formação multidisciplinar</h1>
    <p class="sub">Cada semestre tem ${SEMANAS_TOTAIS - 2} semanas de estudo e 2 de fechamento: avaliação intermediária na semana ${SEMANA_INTERMEDIARIA}, projeto interdisciplinar na ${SEMANA_PROJETO}, avaliação final na ${SEMANA_FINAL} e recuperação na ${SEMANA_RECUPERACAO}. A filosofia avança um degrau por semestre; as disciplinas entram na ordem dos pré-requisitos.</p></header>
  ${pend ? `<div class="aviso"><strong>Os semestres começam na fase 3.</strong> ${esc(pend)}. Até lá, o calendário pode ser consultado.</div>` : ''}
  <p class="meta">Cada matéria é aprovada por si: todas as provas de módulo com pelo menos ${NOTA_MINIMA}%. Uma nota alta não compensa outra abaixo do mínimo, e quem não atinge o mínimo faz a recuperação daquela matéria.</p>
  <div class="tabela-wrap"><table><thead><tr><th>Semestre</th><th>Matérias</th><th>Carga total</th><th>Média semanal</th><th>Semana mais pesada</th><th>Situação</th></tr></thead><tbody>
    ${PERIODOS.map((p) => {
      const aprovadas = p.materias.filter((m) => situacaoMateria(estado, m) === 'aprovada').length;
      return `<tr${atual?.n === p.n ? ' class="atual"' : ''}><td>${link(`periodo-${p.n}`, esc(p.titulo))}${atual?.n === p.n ? ' <span class="chip">atual</span>' : ''}</td>
        <td>${p.materias.map((m) => esc(m.nome.split(' — ')[0] + (m.degrau !== null ? ` (degrau ${m.degrau})` : ''))).join(', ')}</td>
        <td class="num-tab">${fmtMin(p.total)}</td><td class="num-tab">${fmtMin(p.mediaSemanal)}</td><td class="num-tab">${fmtMin(p.pico)}</td>
        <td>${aprovadas}/${p.materias.length} aprovada(s)</td></tr>`;
    }).join('')}
  </tbody></table></div>
  <details><summary>Como a carga é calculada</summary>
    <p class="meta">A carga soma, semana a semana, o tempo indicado em cada aula (que já inclui a leitura da fonte e os exercícios), ${CARGA.revisaoPorAula} min de revisão por aula, ${CARGA.prova} min por prova de módulo, ${fmtMin(CARGA.leituraFilosofiaSemana)} semanais de leitura dos livros do degrau de filosofia e ${fmtMin(CARGA.projeto)} para o projeto interdisciplinar. São estimativas declaradas; o registro de horas do Plano mostra o tempo real.</p></details>`;
}

export function periodo({ estado }, id) {
  const p = periodoPorN[id];
  if (!p) return `<p>Semestre não encontrado. ${link('periodos', 'Ver os semestres')}</p>`;
  const max = Math.max(...p.semanas, 1);
  const semanas = Array.from({ length: SEMANAS_TOTAIS }, (_, i) => i + 1);
  return `<nav class="migalha">${link('plano', 'Plano')} / ${link('periodos', 'Semestres')} / ${esc(p.titulo)}</nav>
  <header class="cab"><span class="num">${p.degrau !== null ? `Filosofia: degrau ${p.degrau}` : 'Disciplinas'}</span><h1>${esc(p.titulo)}</h1>
    <p class="sub">${p.materias.length} matérias simultâneas · carga total ${fmtMin(p.total)} · média ${fmtMin(p.mediaSemanal)} por semana.</p></header>
  ${ritmoHTML(p, estado.plano.horasSemana)}
  <p class="meta">Obras obrigatórias dos módulos: cerca de <strong>${fmtMin(p.minutosObras)}</strong> de leitura, audição e análise (estimativa por tipo de mídia, fora do calendário acima). No seu ritmo, isso soma cerca de ${Math.ceil(p.minutosObras / (Math.max(1, estado.plano.horasSemana) * 60))} semanas além das aulas e provas.</p>
  ${p.excecoes.length ? `<div class="aviso"><strong>Exceções registradas.</strong><ul>${p.excecoes.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></div>` : ''}
  <section><h2>Matérias</h2><ul class="lista-curta">${p.materias.map((m) => {
    const feitas = m.aulas.filter((a) => aulaConcluida(estado, a.id)).length;
    return `<li>${link(m.href, esc(m.nome))} ${situacaoHTML(situacaoMateria(estado, m))} <span class="meta">${feitas}/${m.aulas.length} aulas · ${m.obras.filter((id) => livroConcluido(estado, id)).length}/${m.obras.length} obras</span>
      ${barra(Math.round((feitas / Math.max(1, m.aulas.length)) * 100), `Aulas de ${m.nome}`)}
      <p class="meta">Intermediária: ${m.intermediaria.map((a) => provaLink(estado, a)).join(', ') || '—'} · Final: ${m.final.map((a) => provaLink(estado, a)).join(', ')}</p></li>`;
  }).join('')}</ul></section>
  <section><h2>Projeto interdisciplinar (semana ${SEMANA_PROJETO})</h2><p>${esc(p.projeto)}</p></section>
  <section><h2>Calendário semanal</h2><div class="tabela-wrap"><table><thead><tr><th>Semana</th><th>Atividades</th><th>Carga estimada</th></tr></thead><tbody>
    ${semanas.map((s) => {
      const aulas = p.materias.flatMap((m) => m.aulas.filter((a) => a.semana === s).map((a) => `${link(`aula-${a.id}`, esc(a.id))}${aulaConcluida(estado, a.id) ? ' ✓' : ''}`));
      const evento = EVENTO[s] ? `<strong>${EVENTO[s]}</strong>` : '';
      return `<tr><td class="num-tab">${s}</td><td>${[evento, aulas.join(', ')].filter(Boolean).join('<br>') || '<span class="meta">—</span>'}</td>
        <td class="num-tab">${p.semanas[s - 1] ? fmtMin(p.semanas[s - 1]) : '—'} ${barra(Math.round((p.semanas[s - 1] / max) * 100), `Carga da semana ${s}`)}</td></tr>`;
    }).join('')}
  </tbody></table></div></section>`;
}

function provaLink(estado, id) {
  const n = melhorNota(estado, id);
  return `${link(`aval-${id}`, esc(avaliacaoPorId[id]?.titulo.split(':')[0] || id))}${n >= 0 ? ` (${n}%)` : ''}`;
}

/** Usado pela grade: a primeira aula de uma matéria do semestre ainda não concluída, na ordem do calendário. */
export const proximaAulaDoPeriodo = (estado, m) => m.aulas.find((a) => aulaPorId[a.id] && !aulaConcluida(estado, a.id));
