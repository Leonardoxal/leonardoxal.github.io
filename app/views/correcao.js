// Bloco de correção por IA externa para textos de leitura (comprovação do livro e análise de obra).
// Fica numa chave própria de estado.discursivas ({ ia, iaData, confirmado }), sem tocar nos textos do estudante.
// As discursivas das provas têm o mesmo fluxo, embutido em views/quiz.js.
import { textoCorrecaoIA } from '../correcao-ia.js';
import { esc, fmtData, toast, copiar } from '../ui.js';

const situacao = (d) => (d.confirmado ? `Resultado confirmado em ${fmtData(d.confirmado)}` : (d.ia || '').trim() ? 'Correção da IA registrada (sugestão, não conferida)' : 'Sem correção registrada');

/** @param {string} chave chave em estado.discursivas; @param {object} d valor salvo */
export function correcaoHTML(chave, d = {}) {
  return `<details class="correcao-ia" data-correcao="${esc(chave)}"${d.ia ? ' open' : ''}><summary>Correção por uma IA (opcional, sem custo)</summary>
    <p class="meta">O site não se conecta a nenhuma IA. Ele monta um texto com a obra, os critérios e o que você escreveu, sem nome nem dados da conta; você cola no ChatGPT, no Claude ou em outra IA. A IA erra: o que ela disser fica guardado como sugestão até você conferir.</p>
    <button type="button" class="btn" data-cor-montar>Montar e copiar o texto</button>
    <textarea class="ia-texto" rows="6" readonly hidden aria-label="Texto para a IA"></textarea>
    <label class="campo largo"><span>Correção sugerida pela IA (cole aqui)</span><textarea data-cor-ia rows="6">${esc(d.ia || '')}</textarea></label>
    <label class="opcao"><input type="checkbox" data-cor-confirmar ${d.confirmado ? 'checked' : ''}> <span><strong>Confirmo o resultado</strong> (reli meu texto e a correção e corrigi o que era preciso)</span></label>
    <p class="meta" data-cor-situacao>Situação: ${esc(situacao(d))}</p>
  </details>`;
}

/**
 * @param {() => { contexto: string, enunciado: string, criterios: string[], resposta: string }} montar
 *        lê os textos atuais da tela no momento do clique
 */
export function ligarCorrecao(root, ctx, montar) {
  const bloco = root?.querySelector('details[data-correcao]');
  if (!bloco) return;
  const chave = bloco.dataset.correcao;
  const gravar = (campos) => {
    let novo;
    ctx.set((e) => { novo = { ...(e.discursivas[chave] || {}), ...campos }; return { ...e, discursivas: { ...e.discursivas, [chave]: novo } }; }, { render: false });
    if (novo) bloco.querySelector('[data-cor-situacao]').textContent = `Situação: ${situacao(novo)}`;
  };
  bloco.querySelector('[data-cor-montar]').addEventListener('click', (ev) => {
    const p = montar();
    if (!p.resposta.trim()) { toast('Escreva o texto antes de pedir a correção.'); return; }
    copiar(textoCorrecaoIA(p), ev.currentTarget.nextElementSibling);
  });
  let t;
  bloco.querySelector('[data-cor-ia]').addEventListener('input', (ev) => {
    clearTimeout(t);
    t = setTimeout(() => gravar({ ia: ev.target.value, iaData: Date.now() }), 600);
  });
  bloco.querySelector('[data-cor-confirmar]').addEventListener('change', (ev) => gravar({ confirmado: ev.target.checked ? Date.now() : null }));
}
