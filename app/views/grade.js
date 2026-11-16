// Grade escolar: nas fases 1 e 2, uma só matéria; na fase 3, a época atual e a trilha paralela,
// cada uma com sua próxima atividade e parte das horas semanais.
import { DEGRAUS, todasAulas } from '../data/curriculo.js';
import { aulaPorId } from '../data/aulas/index.js';
import { livroPorId } from '../data/livros.js';
import { AVALIACOES } from '../data/avaliacoes.js';
import { PERIODOS, SEMANAS_TOTAIS } from '../data/periodos.js';
import { PARTES_SEMANA, epocaAtual, proximaDaEpoca, proximaParalela, progressoEpoca, progressoParalela } from '../data/epocas.js';
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
  // fase 3: a época atual e a trilha paralela, cada uma com sua parte das horas semanais
  const e = epocaAtual(estado);
  const frentes = [
    e && { disciplina: `Época: ${e.titulo}`, href: `epoca-${e.id}`, p: progressoEpoca(estado, e.id), acao: proximaDaEpoca(estado), parte: PARTES_SEMANA.epoca },
    proximaParalela(estado) && { disciplina: 'Trilha paralela', href: 'epocas', p: progressoParalela(estado), acao: proximaParalela(estado), parte: PARTES_SEMANA.paralela },
  ].filter(Boolean);
  if (!frentes.length) return [{ disciplina: 'Formação multidisciplinar', href: 'epocas', etapa: 'todas as épocas e a trilha paralela concluídas', proximo: '<span class="meta">nada pendente</span>', minutos: total, bloqueio: [] }];
  // quando só resta uma frente, ela fica com as horas das duas
  const estudo = PARTES_SEMANA.epoca + PARTES_SEMANA.paralela;
  return frentes.map(({ p, parte, ...l }) => ({
    ...l, etapa: `${p.feitas} de ${p.total} aulas`, proximo: link(l.acao.href, esc(l.acao.rotulo)),
    minutos: Math.round(total * (frentes.length === 1 ? estudo : parte)), bloqueio: [],
  }));
}

/**
 * "Próxima atividade": respeita a fase e, na fase 3, começa pela época atual.
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
    ${faseIniciacaoConcluida(estado) ? `<p class="meta">Fase multidisciplinar, organizada por épocas: em cada uma, as aulas de todas as matérias daquele momento histórico; ao lado, a trilha paralela com as aulas sem época. Cada módulo continua aprovado pela própria prova. ${link('epocas', 'Ver as épocas')} · ${link('periodos', 'calendário por disciplina (semestres)')}.</p>`
      : faseTeologicaConcluida(estado) ? '<p class="meta">Fase de iniciação intelectual: introdução à filosofia e lógica, as ferramentas que todas as disciplinas pressupõem. As disciplinas regulares abrem quando os degraus 3 e 4 forem concluídos; até lá podem ser consultadas.</p>'
      : '<p class="meta">Fase teológica: a Teologia Católica é a única matéria regular. A fase seguinte (iniciação intelectual) abre quando os degraus 0 a 2 e a avaliação de síntese forem concluídos.</p>'}
    <div class="tabela-wrap"><table><thead><tr><th>Matéria</th><th>Etapa atual</th><th>Próxima atividade</th><th>Tempo na semana</th></tr></thead><tbody>
      ${linhas.map((l) => `<tr><td>${link(l.href, esc(l.disciplina))}</td><td>${esc(l.etapa)}</td><td>${l.bloqueio.length ? `<span class="meta">Aguarda: ${esc(l.bloqueio.join(', '))}</span>` : l.proximo}</td><td class="num-tab">${l.minutos ? fmtMin(l.minutos) : '—'}</td></tr>`).join('')}
    </tbody></table></div>
    <p class="meta">Revisões pendentes: ${pend ? link('revisar', `${pend} cartão(ões)`) : 'nenhuma'} · Avaliações a fazer: ${avals.length ? avals.map((a) => link(`aval-${a.id}`, esc(a.titulo))).join(', ') : 'nenhuma no momento'}.</p>
    <p class="meta">Pelo calendário por disciplina, a fase multidisciplinar soma ${PERIODOS.length} semestres de ${SEMANAS_TOTAIS} semanas; a carga de cada um está em ${link('periodos', 'Semestres')}. O prazo não inclui a leitura integral dos 607 livros.</p>
  </section>`;
}
