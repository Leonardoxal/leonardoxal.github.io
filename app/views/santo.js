// Componente compartilhado do santo de referência: recolhido mostra retrato e nome; aberto mostra a razão
// da associação, a natureza dela (patronagem, tema ou devoção), resumo, fontes e obras do santo no acervo.
import { SANTOS, NATUREZAS, SANTOS_DAS_ABAS } from '../data/santos.js';
import { ORDEM_AUTOR } from '../data/obras/index.js';
import { livroPorId } from '../data/livros.js';
import { esc, link } from '../ui.js';

const imagemURL = (arquivo, largura) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(arquivo)}?width=${largura}`;
const paginaCommons = (arquivo) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(arquivo.replace(/ /g, '_'))}`;
const externo = (url, texto) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" class="externo">${esc(texto)} ↗</a>`;

function obrasNoAcervo(s) {
  const ids = [...(s.livros || []), ...(s.autor ? ORDEM_AUTOR[s.autor] : [])].filter((id) => livroPorId[id]);
  if (!ids.length) return '';
  const mostrar = ids.slice(0, 3).map((id) => link(`livro-${id}`, esc(livroPorId[id].titulo))).join(' · ');
  return `<p class="meta"><strong>Obras no acervo:</strong> ${mostrar}${ids.length > 3 ? ` e mais ${ids.length - 3} na ${link('biblioteca', 'Biblioteca')}` : ''}</p>`;
}

/** @param {{santo: string, natureza: string, motivo: string}} ref */
export function santoHTML(ref, { compacto = false } = {}) {
  const s = SANTOS[ref.santo];
  if (!s) return '';
  return `<details class="santo${compacto ? ' compacto' : ''}">
    <summary><img src="${imagemURL(s.imagem, 96)}" alt="" width="40" height="40" loading="lazy" decoding="async">
      <span><span class="santo-rot">Santo de referência</span><strong>${esc(s.nome)}</strong></span>
      <span class="chip santo-${ref.natureza}">${esc(NATUREZAS[ref.natureza])}</span></summary>
    <div class="santo-corpo">
      <figure><img src="${imagemURL(s.imagem, 240)}" alt="Representação de ${esc(s.nome)}" width="120" loading="lazy" decoding="async">
        <figcaption>${externo(paginaCommons(s.imagem), 'Wikimedia Commons')} · ${esc(s.licenca)}</figcaption></figure>
      <div>
        <p><strong>Por que aqui:</strong> ${esc(ref.motivo)}</p>
        <p>${esc(s.resumo)} <span class="meta">(${esc(s.datas)})</span></p>
        ${ref.natureza === 'patronagem' && s.documento ? `<p class="meta"><strong>Documento:</strong> ${externo(s.documento.url, s.documento.rotulo)}</p>` : ''}
        <p class="meta"><strong>Para conhecer a vida e a obra:</strong> ${externo(s.fonte.url, s.fonte.rotulo)}</p>
        ${obrasNoAcervo(s)}
      </div>
    </div></details>`;
}

/** Santos de uma aba (pela rota exata, senão pela seção do menu). */
export const santosDaAba = (token, secao) => (SANTOS_DAS_ABAS[token] || SANTOS_DAS_ABAS[secao] || []).map((r) => santoHTML(r)).join('');
