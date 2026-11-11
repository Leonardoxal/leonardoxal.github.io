// Idiomas (#idiomas): percurso de línguas da formação adulta, com metas por nível, método e textos-alvo.
// O nível de cada língua é escolhido e guardado pelo próprio estudante (estado.idiomas), sem prova automática.
import { IDIOMAS, PRINCIPIOS } from '../data/idiomas.js';
import { esc } from '../ui.js';
import { abasMapa } from './arvore.js';

export function idiomas({ estado }) {
  const meus = estado.idiomas ?? {};
  return `<header class="cab"><h1>Idiomas</h1>
    <p class="sub">Línguas para ler as fontes no original e participar da vida intelectual. Latim e grego antigo priorizam a leitura; as línguas modernas seguem os níveis do Quadro Europeu Comum de Referência. Comece por uma língua; a teologia continua sendo a base da formação.</p></header>
  ${abasMapa('idiomas')}
  <section><h2>Como estudar qualquer língua</h2><ul>${PRINCIPIOS.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    <p class="meta">Orientação da Academia, não método de nenhum autor citado. A avaliação do nível é sua: use as metas abaixo e, nas línguas modernas, a descrição oficial do Quadro.</p></section>
  ${IDIOMAS.map((l) => `<details class="idioma"${meus[l.id] ? ' open' : ''}><summary><strong>${esc(l.nome)}</strong> <span class="meta">(${l.foco === 'leitura' ? 'leitura' : 'níveis A1 a C2'})${meus[l.id] ? ` · meu nível: ${esc(meus[l.id])}` : ''}</span></summary>
    <p>${esc(l.porque)}</p>
    <div class="tabela-wrap"><table><tr><th>Nível</th><th>Meta</th></tr>${l.niveis.map((n) => `<tr><td>${esc(n.nivel)}</td><td>${esc(n.meta)}</td></tr>`).join('')}</table></div>
    <p><strong>Textos-alvo:</strong> ${esc(l.alvos.join('; '))}.</p>
    <p><strong>Referências:</strong> ${l.referencias.map((r) => `${esc(r.autor)}, <em>${esc(r.titulo)}</em> (${esc(r.nota)})`).join('; ')}. Confira a edição disponível antes de comprar.</p>
    <label class="campo"><span>Meu nível em ${esc(l.nome)}</span><select data-idioma="${l.id}"><option value="">Não estudo</option>${l.niveis.map((n) => `<option ${meus[l.id] === n.nivel ? 'selected' : ''}>${esc(n.nivel)}</option>`).join('')}</select></label>
  </details>`).join('')}`;
}

idiomas.ligar = (root, ctx) => {
  root.querySelectorAll('[data-idioma]').forEach((s) => s.addEventListener('change', () => {
    ctx.set((e) => {
      const meus = { ...(e.idiomas ?? {}) };
      if (s.value) meus[s.dataset.idioma] = s.value; else delete meus[s.dataset.idioma];
      return { ...e, idiomas: meus };
    }, { manterRolagem: true });
  }));
};
