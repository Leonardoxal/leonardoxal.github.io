// Grade escolar: na fase teológica, uma só matéria; depois dela, várias disciplinas em paralelo,
// cada uma com sua próxima atividade, pré-requisitos e parte das horas semanais.
import { DEGRAUS, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { DISCIPLINAS, rotuloEtapa } from '../data/disciplinas.js';
import { AVALIACOES } from '../data/avaliacoes.js';
import { noPorId } from '../data/arvore.js';
import { faseFormacao, FASES, faseTeologicaConcluida, aulaConcluida, livroConcluido, revisoesPendentes, melhorNota, NOTA_MINIMA, FASE_TEOLOGICA } from '../core.js';
import { esc, link, fmtMin } from '../ui.js';

/** Fração das horas semanais da filosofia (escada) na fase 2; o resto divide-se entre as disciplinas liberadas. */
const PARTE_FILOSOFIA = 0.4;

const degrauAtual = (estado, degraus) => degraus.find((d) => !estado.degraus[d.n]?.concluido);
function proximo(estado, d) {
  const aula = d && todasAulas.find((a) => a.degrau === d.n && aulaPorId[a.id] && !aulaConcluida(estado, a.id));
  const livro = d && d.leituras.find((id) => !livroConcluido(estado, id));
  return { aula, livro };
}
const atividade = ({ aula, livro }) => [aula && link(`aula-${aula.id}`, `Aula ${aula.id}: ${esc(aula.titulo)}`), livro && link(`livro-${livro}`, `Leitura: ${esc(livroPorId[livro].titulo)}`)].filter(Boolean).join('<br>') || '<span class="meta">nada pendente</span>';

/** Próxima atividade da etapa: a primeira aula publicada não concluída, senão o exercício da etapa. */
function proximaDaEtapa(estado, d, etapa) {
  if (!etapa) return '<span class="meta">nada pendente</span>';
  const aula = (d.aulas?.[etapa.etapa] || []).find((a) => aulaPorId[a] && !aulaConcluida(estado, a));
  return aula ? link(`aula-${aula}`, `Aula ${aula}: ${esc(aulaPorId[aula].titulo)}`) : esc(etapa.exercicio);
}

/** Pré-requisitos de uma disciplina (ramos da árvore) ainda não cumpridos: os degraus ligados ao ramo. */
const prereqPendentes = (estado, d) => d.prereq.filter((p) => (noPorId[p].degraus || []).some((n) => !estado.degraus[n]?.concluido));

/** Linhas da grade (exportado para teste): disciplina, próxima atividade, minutos semanais, pendências. */
export function linhasGrade(estado) {
  const total = estado.plano.horasSemana * 60;
  if (!faseTeologicaConcluida(estado)) {
    const d = degrauAtual(estado, DEGRAUS.filter((x) => FASE_TEOLOGICA.includes(x.n)));
    return [{ disciplina: 'Teologia Católica', href: 'escada', etapa: d ? `Degrau ${d.n}: ${d.nome}` : '—', proximo: atividade(proximo(estado, d)), minutos: total, bloqueio: [] }];
  }
  const fil = degrauAtual(estado, DEGRAUS);
  const disc = DISCIPLINAS.map((d) => {
    const feitas = estado.disciplinas[d.id] || {};
    const etapa = d.etapas.find((e) => !feitas[e.etapa]);
    return { d, etapa, bloqueio: prereqPendentes(estado, d).map((p) => noPorId[p].nome) };
  });
  const ativas = disc.filter((x) => x.etapa && !x.bloqueio.length);
  const parteDisc = ativas.length ? (total * (1 - PARTE_FILOSOFIA)) / ativas.length : 0;
  return [
    { disciplina: 'Filosofia (escada)', href: 'escada', etapa: fil ? `Degrau ${fil.n}: ${fil.nome}` : 'concluída', proximo: atividade(proximo(estado, fil)), minutos: Math.round(ativas.length ? total * PARTE_FILOSOFIA : total), bloqueio: [] },
    ...disc.map((x) => ({
      disciplina: x.d.nome, href: `disciplina-${x.d.id}`, etapa: x.etapa ? rotuloEtapa(x.etapa) : 'percurso concluído',
      proximo: proximaDaEtapa(estado, x.d, x.etapa),
      minutos: ativas.includes(x) ? Math.round(parteDisc) : 0, bloqueio: x.bloqueio,
    })),
  ];
}

export function faseHTML(estado) {
  const f = faseFormacao(estado, DEGRAUS.length);
  return `<p class="fase fase-${f}"><span class="chip">${f === 'preparacao' || f === 'teologia' ? 'Fase 1' : 'Fase 2'}</span> ${esc(FASES[f])}</p>`;
}

export function gradeHTML(estado) {
  const linhas = linhasGrade(estado);
  const pend = revisoesPendentes(estado.revisoes).length;
  const avals = AVALIACOES.filter((a) => (a.requerFase2 ? faseTeologicaConcluida(estado) : true) && a.minimo && melhorNota(estado, a.id) < NOTA_MINIMA && (a.tipo === 'conjunta' || a.id === 'sintese-teologica'));
  return `<section class="grade-escolar"><h2>Grade da semana</h2>
    ${faseHTML(estado)}
    ${faseTeologicaConcluida(estado) ? '<p class="meta">Fase multidisciplinar: várias matérias em paralelo; cada uma respeita os próprios pré-requisitos. A filosofia segue a escada; as demais, os percursos das disciplinas.</p>'
      : '<p class="meta">Fase teológica: a Teologia Católica é a única matéria regular. As demais disciplinas abrem quando os degraus 0 a 2 e a avaliação de síntese forem concluídos.</p>'}
    <div class="tabela-wrap"><table><thead><tr><th>Matéria</th><th>Etapa atual</th><th>Próxima atividade</th><th>Tempo na semana</th></tr></thead><tbody>
      ${linhas.map((l) => `<tr><td>${link(l.href, esc(l.disciplina))}</td><td>${esc(l.etapa)}</td><td>${l.bloqueio.length ? `<span class="meta">Aguarda: ${esc(l.bloqueio.join(', '))}</span>` : l.proximo}</td><td class="num-tab">${l.minutos ? fmtMin(l.minutos) : '—'}</td></tr>`).join('')}
    </tbody></table></div>
    <p class="meta">Revisões pendentes: ${pend ? link('revisar', `${pend} cartão(ões)`) : 'nenhuma'} · Avaliações a fazer: ${avals.length ? avals.map((a) => link(`aval-${a.id}`, esc(a.titulo))).join(', ') : 'nenhuma no momento'}.</p>
    <p class="meta">Estimativa: uma etapa extensa leva de 18 a 24 meses no ritmo informado; o prazo não inclui a leitura integral dos 607 livros nem todas as disciplinas.</p>
  </section>`;
}
