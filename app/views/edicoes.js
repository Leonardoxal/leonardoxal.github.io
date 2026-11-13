// Seção "Edições, traduções e volumes" da página de uma obra (#obra-<id>) e de um livro do acervo (#livro-<id>).
// Mostra só o que está registrado: a edição recomendada pelo acervo, a edição que o estudante usa e os registros
// das listas de origem que são a mesma obra (unificacoes.js). Nada é sugerido por suposição.
import { FONTES, TIPOS_VERSAO } from '../data/mediateca.js';
import { livroPorId } from '../data/livros.js';
import { esc, linkExterno } from '../ui.js';

const TITULOS = { t: 'Traduções identificadas', p: 'Volumes e partes', d: 'Outros registros da mesma obra' };

const itemVersao = (v) => {
  const fontes = [...new Map(v.fontes.map((f) => [`${f.fonte}|${f.url || ''}`, f])).values()];
  return `<li><em>${esc(v.titulo)}</em>${v.criador ? ` — ${esc(v.criador)}` : ''}${v.data ? ` (${esc(v.data)})` : ''}
    <br><span class="meta">Fonte: ${fontes.map((f) => `${esc(FONTES[f.fonte] || f.fonte)}${f.url ? ` ${linkExterno({ url: f.url, rotulo: 'ver' })}` : ''}`).join('; ') || 'não informada'}</span></li>`;
};

/** @param {object} o obra da mediateca (já unificada) @param {string} [minha] edição registrada pelo estudante */
export function edicoesHTML(o, minha = '') {
  const recomendada = o.livro ? livroPorId[o.livro]?.edicao : '';
  const grupos = Object.keys(TITULOS).map((t) => [t, o.versoes.filter((v) => v.tipo === t)]).filter(([, vs]) => vs.length);
  return `<section id="edicoes"><h2>Edições, traduções e volumes</h2>
    <dl class="ficha">
      <dt>Edição recomendada</dt><dd>${recomendada ? esc(recomendada) : '<span class="meta">Nenhuma recomendação registrada ainda para esta obra.</span>'}</dd>
      <dt>A sua edição</dt><dd>${minha ? esc(minha) : '<span class="meta">Não registrada. Informe em "Minha leitura" a edição, tradução ou gravação que usar.</span>'}</dd>
    </dl>
    ${grupos.map(([t, vs]) => `<h3>${TITULOS[t]} (${vs.length})</h3><ul class="lista-curta">${vs.map(itemVersao).join('')}</ul>`).join('')}
    ${grupos.length ? `<p class="meta">Estes registros vêm das listas de origem e foram reunidos nesta obra. ${grupos.some(([t]) => t === 't') ? 'As traduções aparecem como as fontes as citam; a Academia ainda não avaliou qual é a melhor.' : ''}</p>` : ''}
  </section>`;
}

/** Tipos de versão que uma obra tem, para o resumo no cartão do catálogo (ex.: "3 traduções · 2 volumes"). */
export function resumoVersoes(o) {
  const n = (t) => o.versoes.filter((v) => v.tipo === t).length;
  const partes = [[n('t'), 'tradução', 'traduções'], [n('p'), 'volume', 'volumes'], [n('d'), 'outro registro', 'outros registros']];
  return partes.filter(([q]) => q).map(([q, um, varios]) => `${q} ${q === 1 ? um : varios}`).join(' · ');
}
export { TIPOS_VERSAO };
