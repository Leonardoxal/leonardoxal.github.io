// Grade escolar: nas fases 1 e 2, uma só matéria; na fase 3, as matérias do semestre atual,
// cada uma com sua próxima atividade, pré-requisitos e parte das horas semanais.
import { DEGRAUS, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { disciplinaPorId } from '../data/disciplinas.js';
import { AVALIACOES, avaliacaoPorId } from '../data/avaliacoes.js';
import { noPorId } from '../data/arvore.js';
import { PERIODOS, SEMANAS_TOTAIS, periodoAtual, situacaoMateria } from '../data/periodos.js';
import { proximaAulaDoPeriodo } from './periodos.js';
import { faseFormacao, FASES, numeroFase, faseTeologicaConcluida, faseIniciacaoConcluida, aulaConcluida, livroConcluido, revisoesPendentes, melhorNota, NOTA_MINIMA, FASE_TEOLOGICA, FASE_INICIACAO } from '../core.js';
import { obrasDoDegrau, obraPorId } from '../data/mediateca.js';
import { esc, link, fmtMin } from '../ui.js';

const degrauAtual = (estado, degraus) => degraus.find((d) => !estado.degraus[d.n]?.concluido);
function proximo(estado, d) {
  const aula = d && todasAulas.find((a) => a.degrau === d.n && aulaPorId[a.id] && !aulaConcluida(estado, a.id));
  const livro = d && d.leituras.find((id) => !livroConcluido(estado, id));
  // todas as obras dos módulos do degrau também são obrigatórias: vêm depois das aulas e dos livros do degrau
  const obra = d && !aula && !livro ? obrasDoDegrau(d).find((id) => !livroConcluido(estado, id)) : undefined;
  return { aula, livro, obra };
}
const atividade = ({ aula, livro, obra }) => [aula && link(`aula-${aula.id}`, `Aula ${aula.id}: ${esc(aula.titulo)}`), livro && link(`livro-${livro}`, `Leitura: ${esc(livroPorId[livro].titulo)}`), obra && link(`obra-${obra}`, `Obra: ${esc(obraPorId[obra].titulo)}`)].filter(Boolean).join('<br>') || '<span class="meta">nada pendente</span>';
/** Destino do botão "próxima atividade": a primeira aula, a primeira leitura ou a primeira obra pendente. */
const acaoDe = ({ aula, livro, obra }) => (aula ? { href: `aula-${aula.id}`, rotulo: `Aula ${aula.id}: ${aula.titulo}` } : livro ? { href: `livro-${livro}`, rotulo: `Leitura: ${livroPorId[livro].titulo}` } : obra ? { href: `obra-${obra}`, rotulo: `Obra: ${obraPorId[obra].titulo}` } : null);

/** Pré-requisitos de uma disciplina (ramos da árvore) ainda não cumpridos: os degraus ligados ao ramo. */
const prereqPendentes = (estado, d) => d.prereq.filter((p) => (noPorId[p].degraus || []).some((n) => !estado.degraus[n]?.concluido));

/** Linhas da grade (exportado para teste): disciplina, próxima atividade, minutos semanais, pendências. */
export function linhasGrade(estado) {
  const total = estado.plano.horasSemana * 60;
  if (!faseTeologicaConcluida(estado)) {
    const d = degrauAtual(estado, DEGRAUS.filter((x) => FASE_TEOLOGICA.includes(x.n)));
    const prox = proximo(estado, d);
    return [{ disciplina: 'Teologia Católica', href: 'escada', etapa: d ? `Degrau ${d.n}: ${d.nome}` : '—', proximo: atividade(prox), acao: acaoDe(prox), minutos: total, bloqueio: [] }];
  }
  if (!faseIniciacaoConcluida(estado)) {
    const d = degrauAtual(estado, DEGRAUS.filter((x) => FASE_INICIACAO.includes(x.n)));
    const prox = proximo(estado, d);
    return [{ disciplina: 'Iniciação intelectual e filosófica', href: 'escada', etapa: d ? `Degrau ${d.n}: ${d.nome}` : '—', proximo: atividade(prox), acao: acaoDe(prox), minutos: total, bloqueio: [] }];
  }
  // fase 3: só as matérias do semestre atual, cada uma com sua parte das horas semanais
  const p = periodoAtual(estado);
  if (!p) return [{ disciplina: 'Formação multidisciplinar', href: 'periodos', etapa: 'todos os semestres aprovados', proximo: '<span class="meta">nada pendente</span>', minutos: total, bloqueio: [] }];
  const linhas = p.materias.map((m) => {
    const d = m.degrau === null ? disciplinaPorId[m.id] : null;
    const situacao = situacaoMateria(estado, m);
    const aula = proximaAulaDoPeriodo(estado, m);
    const prova = m.provas.find((id) => melhorNota(estado, id) < NOTA_MINIMA);
    // ordem da matéria: aulas do calendário, depois as provas, depois as obras obrigatórias dos módulos
    const obra = m.obras.find((id) => !livroConcluido(estado, id));
    const acao = situacao === 'aprovada' ? null : aula ? { href: `aula-${aula.id}`, rotulo: `Aula ${aula.id}: ${aulaPorId[aula.id].titulo}` }
      : prova ? { href: `aval-${prova}`, rotulo: `${situacao === 'recuperacao' ? 'Recuperação' : 'Prova'}: ${avaliacaoPorId[prova].titulo}` }
      : obra ? { href: `obra-${obra}`, rotulo: `Obra: ${obraPorId[obra].titulo}` } : null;
    return {
      disciplina: m.nome, href: m.href, etapa: `${p.titulo} · ${situacao}`, acao,
      proximo: situacao === 'aprovada' ? '<span class="meta">matéria aprovada</span>' : acao ? link(acao.href, esc(acao.rotulo)) : '<span class="meta">nada pendente</span>',
      bloqueio: d ? prereqPendentes(estado, d).map((x) => noPorId[x].nome) : [],
      ativa: situacao !== 'aprovada',
    };
  });
  const ativas = linhas.filter((l) => l.ativa && !l.bloqueio.length);
  const parte = ativas.length ? total / ativas.length : 0;
  return linhas.map(({ ativa, ...l }, i) => ({ ...l, minutos: ativas.includes(linhas[i]) ? Math.round(parte) : 0 }));
}

/**
 * "Próxima atividade": respeita a fase, o semestre atual e os pré-requisitos (matérias bloqueadas ficam de fora).
 * Devolve { href, rotulo, contexto } ou null quando não há nada pendente.
 */
export function proximaAtividade(estado) {
  const linha = linhasGrade(estado).find((l) => l.acao && !l.bloqueio.length);
  return linha ? { ...linha.acao, contexto: `${linha.disciplina} · ${linha.etapa}` } : null;
}

export function faseHTML(estado) {
  const f = faseFormacao(estado, DEGRAUS.length);
  return `<p class="fase fase-${f}"><span class="chip">Fase ${numeroFase(f)}</span> ${esc(FASES[f])}</p>`;
}

export function gradeHTML(estado) {
  const linhas = linhasGrade(estado);
  const pend = revisoesPendentes(estado.revisoes).length;
  const avals = AVALIACOES.filter((a) => (a.requerFase2 ? faseIniciacaoConcluida(estado) : true) && a.minimo && melhorNota(estado, a.id) < NOTA_MINIMA && (a.tipo === 'conjunta' || a.id === 'sintese-teologica'));
  return `<section class="grade-escolar"><h2>Grade da semana</h2>
    ${faseHTML(estado)}
    ${faseIniciacaoConcluida(estado) ? `<p class="meta">Fase multidisciplinar, organizada em semestres: a filosofia avança um degrau por semestre, ao lado de 2 ou 3 disciplinas. Cada matéria é aprovada por si, sem compensação. ${link('periodos', 'Ver os semestres e o calendário')}.</p>`
      : faseTeologicaConcluida(estado) ? '<p class="meta">Fase de iniciação intelectual: introdução à filosofia e lógica, as ferramentas que todas as disciplinas pressupõem. As disciplinas regulares abrem quando os degraus 3 e 4 forem concluídos; até lá podem ser consultadas.</p>'
      : '<p class="meta">Fase teológica: a Teologia Católica é a única matéria regular. A fase seguinte (iniciação intelectual) abre quando os degraus 0 a 2 e a avaliação de síntese forem concluídos.</p>'}
    <div class="tabela-wrap"><table><thead><tr><th>Matéria</th><th>Etapa atual</th><th>Próxima atividade</th><th>Tempo na semana</th></tr></thead><tbody>
      ${linhas.map((l) => `<tr><td>${link(l.href, esc(l.disciplina))}</td><td>${esc(l.etapa)}</td><td>${l.bloqueio.length ? `<span class="meta">Aguarda: ${esc(l.bloqueio.join(', '))}</span>` : l.proximo}</td><td class="num-tab">${l.minutos ? fmtMin(l.minutos) : '—'}</td></tr>`).join('')}
    </tbody></table></div>
    <p class="meta">Revisões pendentes: ${pend ? link('revisar', `${pend} cartão(ões)`) : 'nenhuma'} · Avaliações a fazer: ${avals.length ? avals.map((a) => link(`aval-${a.id}`, esc(a.titulo))).join(', ') : 'nenhuma no momento'}.</p>
    <p class="meta">A fase multidisciplinar tem ${PERIODOS.length} semestres de ${SEMANAS_TOTAIS} semanas; a carga de cada um está em ${link('periodos', 'Semestres')}. O prazo não inclui a leitura integral dos 607 livros.</p>
  </section>`;
}
