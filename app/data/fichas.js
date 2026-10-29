// Ficha pedagógica de cada livro, montada a partir dos dados curriculares (nunca texto genérico igual para todos):
// posição na escada, pré-requisitos obrigatórios (os registrados no livro), preparação recomendada (a obra
// anterior do mesmo autor e os estudos de apoio que a antecedem no degrau), aulas preparatórias (as aulas
// introdutórias ancoradas antes dele), conceitos ligados, obras que o usam depois e critério de compreensão.
import { LIVROS, livroPorId } from './livros.js';
import { DEGRAUS, todasAulas } from './curriculo.js';
import { CONCEITOS } from './conceitos.js';
import { INTRODUCOES } from './obras/index.js';
import { camposComprovacao, CAMPOS_COMPROVACAO } from '../core.js';

/** Todos os livros na ordem da trilha: degrau e posição dentro dele. */
export const TRILHA = LIVROS.slice().sort((a, b) => a.degrau - b.degrau || a.ordem - b.ordem);
const posicao = new Map(TRILHA.map((l, i) => [l.id, i]));
export const posicaoNaTrilha = (id) => posicao.get(id);

const aulaPorId = Object.fromEntries(todasAulas.map((a) => [a.id, a]));
const degrauPorN = Object.fromEntries(DEGRAUS.map((d) => [d.n, d]));

/** Livros que registram este como pré-requisito (o inverso de prereq). */
const usadoPor = new Map();
for (const l of LIVROS) for (const p of l.prereq) usadoPor.set(p, [...(usadoPor.get(p) || []), l.id]);

const DIFICULDADE = {
  1: 'Leitura acessível: vocabulário corrente e argumentação direta.',
  2: 'Leitura introdutória: alguns termos técnicos, explicados no próprio texto ou nas aulas do degrau.',
  3: 'Exige atenção ao vocabulário técnico e à estrutura do argumento; leia com fichamento por capítulo.',
  4: 'Texto denso: pressupõe os conceitos dos degraus anteriores e convém reconstruir os argumentos por escrito.',
  5: 'Tratado difícil: argumentação longa e técnica; leia devagar, com as obras e aulas preparatórias concluídas.',
};

/** Aulas introdutórias que a sequência coloca antes deste livro no seu degrau. */
function aulasPreparatorias(l) {
  const intro = INTRODUCOES[l.degrau] || {};
  return [...(intro['^'] || []), ...(l.obraDe ? intro[`@${l.obraDe}`] || [] : []), ...(intro[l.id] || [])].filter((id) => aulaPorId[id]);
}

/** Ficha pedagógica completa de um livro. */
export function fichaDe(id) {
  const l = livroPorId[id];
  if (!l) return null;
  const i = posicao.get(id);
  const anteriores = TRILHA.slice(0, i);
  const doAutor = l.obraDe ? anteriores.filter((x) => x.obraDe === l.obraDe) : [];
  const obraAnteriorAutor = doAutor[doAutor.length - 1] || null;
  const apoio = anteriores.filter((x) => x.degrau === l.degrau && x.tipo !== 'primaria').slice(-2);
  const recomendadas = [...new Set([obraAnteriorAutor?.id, ...apoio.map((x) => x.id)].filter((x) => x && !l.prereq.includes(x)))];
  const aulas = aulasPreparatorias(l);
  const conceitos = CONCEITOS.filter((c) => c.livros.includes(id) || c.aulas.some((a) => aulas.includes(a)));
  const proximaDoAutor = l.obraDe ? TRILHA.slice(i + 1).find((x) => x.obraDe === l.obraDe) : null;
  const posteriores = [...new Set([...(usadoPor.get(id) || []), proximaDoAutor?.id].filter(Boolean))];
  const degrau = degrauPorN[l.degrau];
  return {
    livro: l, degrau, posicaoGeral: i + 1, total: TRILHA.length,
    obrigatorias: l.prereq.filter((p) => livroPorId[p]),
    recomendadas,
    aulas,
    conceitos,
    posteriores,
    proxima: TRILHA[i + 1] || null,
    dificuldade: DIFICULDADE[l.nivel] || DIFICULDADE[3],
    criterio: camposComprovacao(l.nivel).map((c) => CAMPOS_COMPROVACAO[c].rotulo),
    justificativa: justificativa(l, degrau, obraAnteriorAutor, aulas),
  };
}

/** Por que o livro está nesta posição, a partir das relações registradas. */
function justificativa(l, degrau, anteriorAutor, aulas) {
  const partes = [`Faz parte do degrau ${degrau.n} (${degrau.nome}): ${degrau.objetivo}`];
  if (l.prereq.length) partes.push(`Vem depois de ${l.prereq.map((p) => livroPorId[p]?.titulo).filter(Boolean).join(', ')}, que fornece${l.prereq.length > 1 ? 'm' : ''} os conceitos que esta obra pressupõe.`);
  if (anteriorAutor) partes.push(`Na ordem de estudo da obra do autor, vem depois de ${anteriorAutor.titulo}, cujo vocabulário e problemas retoma.`);
  if (aulas.length) partes.push(`${aulas.length > 1 ? `As aulas ${aulas.join(', ')} preparam` : `A aula ${aulas[0]} prepara`} o vocabulário e o contexto antes desta leitura.`);
  if (!l.prereq.length && !anteriorAutor && !aulas.length) partes.push('Não depende de outra obra específica deste degrau; pressupõe apenas os degraus anteriores.');
  return partes.join(' ');
}
