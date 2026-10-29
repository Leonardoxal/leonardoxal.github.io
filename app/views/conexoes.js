// Conexões entre conteúdos, derivadas dos dados reais (nunca listas escritas à mão por página):
// conceitos ligam aulas, livros e autores; o currículo liga aulas, módulos, degraus e provas;
// a árvore situa cada item numa área; as notas do estudante aparecem em todos os itens a que se vinculam.
import { CONCEITOS } from '../data/conceitos.js';
import { livroPorId } from '../data/livros.js';
import { autorPorId } from '../data/autores.js';
import { todasAulas, moduloPorId, DEGRAUS } from '../data/curriculo.js';
import { AVALIACOES } from '../data/avaliacoes.js';
import { noPorId } from '../data/arvore.js';
import { noDaAula, noDoLivro } from './arvore.js';
import { esc, link } from '../ui.js';

export const RELACOES_CONTEUDO = {
  parte: 'Faz parte de', exige: 'Exige conhecimento prévio de', explica: 'Explica', fonte: 'Cita como fonte',
  desenvolve: 'É desenvolvido em', anotacao: 'Possui anotação', avaliado: 'É avaliado por', usa: 'Utiliza os conceitos', autores: 'Relaciona-se com os autores', estudado: 'É estudado nas aulas',
};

const ordemAula = Object.fromEntries(todasAulas.map((a, i) => [a.id, i]));
const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));
const linkAula = (id) => link(`aula-${id}`, `${id} — ${esc(tituloAula[id])}`);
const linkLivro = (id) => link(`livro-${id}`, esc(livroPorId[id].titulo));
const linkConceito = (c) => link(`conceito-${c.id}`, esc(c.termo));
const linkAutor = (id) => `<a href="#autores" data-autor-sel="${id}">${esc(autorPorId[id].nome)}</a>`;
export const linkArea = (id) => (id && noPorId[id] ? link(`area-${id}`, esc(noPorId[id].nome)) : '');
const unicos = (xs) => [...new Set(xs)];

/** Notas vinculadas a um item, pelo vínculo principal ou pelos vínculos adicionais. */
export const notasDe = (estado, tipo, id) => estado.notas.filter((n) => [n.vinculo, ...(n.vinculos || [])].some((v) => v?.tipo === tipo && v.id === id));

function bloco(rel, itens, max = 12) {
  if (!itens.length) return '';
  const extra = itens.length > max ? ` <span class="meta">e mais ${itens.length - max}</span>` : '';
  return `<div class="conexao"><dt>${esc(RELACOES_CONTEUDO[rel])}</dt><dd>${itens.slice(0, max).join(' · ')}${extra}</dd></div>`;
}
const blocoNotas = (notas) => bloco('anotacao', notas.map((n) => link(`nota-${n.id}`, esc(n.titulo || 'Sem título'))));
const secao = (titulo, corpo, acao = '') => `<section class="conexoes"><h2>${titulo}</h2><dl>${corpo || '<p class="meta">Nenhuma conexão registrada ainda.</p>'}</dl>${acao}</section>`;

export function conexoesAula(estado, id) {
  const a = todasAulas.find((x) => x.id === id);
  const m = moduloPorId[a.modulo];
  const conceitos = CONCEITOS.filter((c) => c.aulas.includes(id));
  const livros = unicos(conceitos.flatMap((c) => c.livros)).filter((l) => livroPorId[l]);
  const autores = unicos(conceitos.flatMap((c) => c.autores)).filter((x) => autorPorId[x]);
  const anteriores = [m.aulas[m.aulas.findIndex((x) => x.id === id) - 1]?.id, ...m.prereq.map((p) => moduloPorId[p].aulas.at(-1).id)].filter(Boolean);
  const depois = unicos(conceitos.flatMap((c) => c.aulas)).filter((x) => ordemAula[x] > ordemAula[id]);
  const provas = AVALIACOES.filter((v) => v.modulo === m.id);
  return secao('Conexões desta aula', [
    bloco('parte', [link(`mod-${m.id}`, `Módulo ${m.n}: ${esc(m.titulo)}`), link('escada', `Degrau ${a.degrau}: ${esc(DEGRAUS[a.degrau].nome)}`), linkArea(noDaAula(id))].filter(Boolean)),
    bloco('exige', anteriores.map(linkAula)),
    bloco('explica', conceitos.map(linkConceito)),
    bloco('fonte', livros.map(linkLivro)),
    bloco('autores', autores.map(linkAutor)),
    bloco('desenvolve', depois.map(linkAula)),
    bloco('avaliado', provas.map((v) => link(`aval-${v.id}`, esc(v.titulo)))),
    blocoNotas(notasDe(estado, 'aula', id)),
  ].join(''));
}

export function conexoesLivro(estado, id) {
  const l = livroPorId[id];
  const conceitos = CONCEITOS.filter((c) => c.livros.includes(id));
  const aulas = unicos(conceitos.flatMap((c) => c.aulas)).filter((x) => tituloAula[x]).sort((x, y) => ordemAula[x] - ordemAula[y]);
  const m = l.modulo && moduloPorId[l.modulo];
  return secao('Conexões deste livro', [
    bloco('parte', [m && link(`mod-${m.id}`, `Módulo ${m.n}: ${esc(m.titulo)}`), link('escada', `Degrau ${l.degrau}`), linkArea(noDoLivro(id))].filter(Boolean)),
    bloco('usa', conceitos.map(linkConceito)),
    bloco('estudado', aulas.map(linkAula)),
  ].join(''));
}

export function conexoesConceito(estado, c) {
  const relacionados = CONCEITOS.filter((x) => x.relacionados.includes(c.id) && !c.relacionados.includes(x.id));
  const areas = unicos([...c.aulas.map(noDaAula), ...c.livros.map(noDoLivro)].filter(Boolean));
  return secao('Mais conexões', [
    bloco('parte', areas.map(linkArea)),
    bloco('desenvolve', relacionados.map(linkConceito)),
    blocoNotas(notasDe(estado, 'conceito', c.id)),
  ].join(''));
}
