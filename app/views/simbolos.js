// Laboratório de Signos e Símbolos (#simbolos, #simbolo-<id>): escolher um símbolo, ver origem, contexto e
// sentidos com o tipo de fonte, comparar interpretações, escrever a própria análise e guardá-la no Caderno.
import { SIMBOLOS, simboloPorId, TIPOS_SENTIDO, TRADICOES } from '../data/simbolos.js';
import { livroPorId } from '../data/livros.js';
import { todasAulas } from '../data/curriculo.js';
import { notasDe } from './conexoes.js';
import { esc, link, novoId, toast } from '../ui.js';

const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));
let rascunho = {}; // análise em andamento por símbolo, até ser salva no Caderno

export function simbolos({ estado }, id) {
  const s = simboloPorId[id] || SIMBOLOS[0];
  const notas = notasDe(estado, 'simbolo', s.id);
  const lista = Object.entries(TRADICOES).map(([t, rot]) => `<h3>${esc(rot)}</h3><ul class="lista-simbolos">${SIMBOLOS.filter((x) => x.tradicao === t)
    .map((x) => `<li><a href="#simbolo-${x.id}" ${x.id === s.id ? 'aria-current="true"' : ''}>${esc(x.nome)}</a></li>`).join('')}</ul>`).join('');
  return `<header class="cab"><h1>Laboratório de Signos e Símbolos</h1>
    <p class="sub">Cada sentido traz o tipo de fonte. Doutrina, fato histórico, interpretação de autor e hipótese são coisas diferentes: o exercício é não confundi-las.</p></header>
  <p class="meta">Parte da trilha ${link('disciplina-simbologia', 'Simbologia, Semiótica e Simbolismo')} · ramo no ${link('area-simbologia', 'mapa do conhecimento')}.</p>
  <div class="lab">
    <nav class="lab-lista" aria-label="Símbolos">${lista}</nav>
    <article class="lab-ficha">
      <p class="num">${esc(TRADICOES[s.tradicao])} · ${esc(s.periodo)}</p>
      <h2>${esc(s.nome)}</h2>
      <p><strong>Origem e contexto:</strong> ${esc(s.contexto)}</p>
      <div class="tabela-wrap"><table><thead><tr><th>Sentido</th><th>Tipo</th><th>Fonte</th></tr></thead><tbody>
        ${s.significados.map((g) => `<tr><td>${esc(g.texto)}</td><td><span class="chip sentido-${g.tipo}">${esc(TIPOS_SENTIDO[g.tipo])}</span></td><td>${esc(g.fonte)}</td></tr>`).join('')}
      </tbody></table></div>
      ${s.comparacao ? `<p class="comparar"><strong>Comparar interpretações:</strong> ${esc(s.comparacao)}</p>` : ''}
      ${s.livros.length ? `<p><strong>No acervo:</strong> ${s.livros.filter((l) => livroPorId[l]).map((l) => link(`livro-${l}`, esc(livroPorId[l].titulo))).join(' · ')}</p>` : ''}
      ${s.aulas.length ? `<p><strong>Aulas:</strong> ${s.aulas.map((a) => link(`aula-${a}`, `${a} — ${esc(tituloAula[a])}`)).join(' · ')}</p>` : ''}
      <label class="campo largo"><span>Minha análise (origem, sentidos com fonte, o que é doutrina e o que é interpretação)</span>
        <textarea id="lab-analise" rows="7">${esc(rascunho[s.id] || '')}</textarea></label>
      <div class="acoes-aula"><button class="btn primario" type="button" data-acao="lab-salvar" data-simbolo="${s.id}">Salvar no Caderno</button></div>
      ${notas.length ? `<h3>Minhas análises salvas (${notas.length})</h3><ul class="lista-curta">${notas.map((n) => `<li>${link(`nota-${n.id}`, esc(n.titulo))}</li>`).join('')}</ul>` : ''}
    </article>
  </div>`;
}

simbolos.ligar = (root, ctx) => {
  const ta = root.querySelector('#lab-analise');
  const id = root.querySelector('[data-acao="lab-salvar"]').dataset.simbolo;
  ta.addEventListener('input', () => { rascunho = { ...rascunho, [id]: ta.value }; });
  root.querySelector('[data-acao="lab-salvar"]').addEventListener('click', () => {
    const texto = ta.value.trim();
    if (!texto) { toast('Escreva a análise antes de salvar.'); return; }
    const agora = Date.now();
    const nota = { id: novoId('n'), titulo: `Análise — ${simboloPorId[id].nome}`, texto, tipo: 'resumo', vinculo: { tipo: 'simbolo', id }, pagina: '', criada: agora, editada: agora };
    rascunho = { ...rascunho, [id]: '' };
    ctx.set((e) => ({ ...e, notas: [...e.notas, nota] }), { manterRolagem: true });
    toast('Análise salva no Caderno.');
  });
};
