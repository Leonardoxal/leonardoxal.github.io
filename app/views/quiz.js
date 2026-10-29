// Renderização e correção de itens de avaliação (usado nas aulas e na página de avaliações).
import { corrigir, NOTA_MINIMA } from '../core.js';
import { esc, fmtData, toast, link } from '../ui.js';
import { todasAulas } from '../data/curriculo.js';

const tituloAula = Object.fromEntries(todasAulas.map((a) => [a.id, a.titulo]));

const PAPEIS = { p: 'Premissa', c: 'Conclusão', x: 'Não faz parte' };

function itemHTML(it, i, pref, estado) {
  const nome = `${pref}-q${i}`;
  if (it.tipo === 'mc') {
    return `<fieldset class="item"><legend>${i + 1}. ${esc(it.enunciado)}</legend>
      ${it.opcoes.map((o, j) => `<label class="opcao"><input type="radio" name="${nome}" value="${j}"> <span>${esc(o)}</span></label>`).join('')}
      <div class="feedback" data-fb="${i}" hidden></div></fieldset>`;
  }
  if (it.tipo === 'validade') {
    return `<fieldset class="item"><legend>${i + 1}. ${esc(it.enunciado)}</legend>
      <ol class="arg-mini">${it.argumento.map((l) => `<li>${esc(l)}</li>`).join('')}</ol>
      <label class="opcao"><input type="radio" name="${nome}" value="1"> <span>Válido</span></label>
      <label class="opcao"><input type="radio" name="${nome}" value="0"> <span>Inválido</span></label>
      <div class="feedback" data-fb="${i}" hidden></div></fieldset>`;
  }
  if (it.tipo === 'premissas') {
    return `<fieldset class="item"><legend>${i + 1}. ${esc(it.enunciado)}</legend>
      ${it.frases.map((f, j) => `<div class="frase"><span>"${esc(f)}"</span>
        <select name="${nome}-${j}" aria-label="Papel da frase ${j + 1}"><option value="">Escolha…</option>${Object.entries(PAPEIS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></div>`).join('')}
      <div class="feedback" data-fb="${i}" hidden></div></fieldset>`;
  }
  // discursiva: texto salvo + autoavaliação por critérios
  const chave = `${pref}-${i}`;
  const d = estado.discursivas[chave] || { texto: '', criterios: [] };
  return `<fieldset class="item disc"><legend>${i + 1}. ${esc(it.enunciado)}</legend>
    <p class="dica">Discursiva: não há resposta única. Respostas diferentes são aceitas quando bem fundamentadas; não se exige concordância com nenhuma posição. Escreva e depois avalie seu texto pelos critérios.</p>
    <label class="sr" for="${chave}-txt">Sua resposta</label>
    <textarea id="${chave}-txt" data-disc="${chave}" rows="8" placeholder="Sua resposta…">${esc(d.texto)}</textarea>
    <div class="criterios"><strong>Autoavaliação — meu texto:</strong>
      ${it.criterios.map((c, j) => `<label class="opcao"><input type="checkbox" data-crit="${chave}" data-j="${j}" ${d.criterios[j] ? 'checked' : ''}> <span>${esc(c)}</span></label>`).join('')}
    </div>
    <p class="meta">${d.data ? `Salvo em ${fmtData(d.data)}` : 'Ainda não salvo'} · ${(d.texto || '').trim().split(/\s+/).filter(Boolean).length} palavras</p>
  </fieldset>`;
}

/**
 * @param {string} avalId   chave das tentativas (ex.: "quiz-m1-1" ou "prova-m1")
 * @param {string} pref     prefixo das discursivas (ex.: "m1-1" ou "prova-m1")
 */
export function quizHTML(itens, avalId, pref, estado, minimo = NOTA_MINIMA) {
  const tent = estado.tentativas[avalId] || [];
  const objetivos = itens.some((it) => it.tipo !== 'disc');
  return `<form class="quiz" data-quiz="${avalId}" data-pref="${pref}" data-min="${minimo}" novalidate>
    ${itens.map((it, i) => itemHTML(it, i, pref, estado)).join('')}
    ${objetivos ? `<div class="quiz-acoes"><button type="submit" class="btn primario">Corrigir</button>
      <span class="resultado" aria-live="polite"></span></div>` : ''}
    ${tent.length ? `<details class="historico"><summary>Tentativas anteriores (${tent.length})</summary><ul>${tent.slice(-10).reverse().map((t) => `<li>${fmtData(t.data)} — ${t.acertos}/${t.total} (${t.pct}%)</li>`).join('')}</ul></details>` : ''}
  </form>`;
}

/** Liga eventos do questionário. ctx.set(fn, {render}) aplica alterações ao estado. */
export function ligarQuiz(root, itens, ctx, aoCorrigir) {
  const form = root?.querySelector('form.quiz');
  if (!form) return;
  const avalId = form.dataset.quiz, pref = form.dataset.pref, minimo = Number(form.dataset.min);
  let espera;

  form.addEventListener('input', (ev) => {
    const ta = ev.target.closest('textarea[data-disc]');
    if (!ta) return;
    clearTimeout(espera);
    espera = setTimeout(() => {
      const chave = ta.dataset.disc;
      ctx.set((e) => ({ ...e, discursivas: { ...e.discursivas, [chave]: { ...(e.discursivas[chave] || { criterios: [] }), texto: ta.value, data: Date.now() } } }), { render: false });
      const meta = ta.parentElement.querySelector('.meta');
      if (meta) meta.textContent = `Salvo agora · ${ta.value.trim().split(/\s+/).filter(Boolean).length} palavras`;
    }, 600);
  });

  form.addEventListener('change', (ev) => {
    const cb = ev.target.closest('input[data-crit]');
    if (!cb) return;
    const chave = cb.dataset.crit, j = Number(cb.dataset.j);
    ctx.set((e) => {
      const atual = e.discursivas[chave] || { texto: '', criterios: [] };
      const criterios = [...atual.criterios]; criterios[j] = cb.checked;
      return { ...e, discursivas: { ...e.discursivas, [chave]: { ...atual, criterios, data: Date.now() } } };
    }, { render: false });
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const respostas = itens.map((it, i) => {
      const nome = `${pref}-q${i}`;
      if (it.tipo === 'mc') { const r = form.querySelector(`input[name="${nome}"]:checked`); return r ? Number(r.value) : null; }
      if (it.tipo === 'validade') { const r = form.querySelector(`input[name="${nome}"]:checked`); return r ? r.value === '1' : null; }
      if (it.tipo === 'premissas') return it.frases.map((_, j) => form.querySelector(`select[name="${nome}-${j}"]`).value);
      return null;
    });
    const faltando = itens.some((it, i) => (it.tipo === 'mc' || it.tipo === 'validade') ? respostas[i] === null : it.tipo === 'premissas' ? respostas[i].includes('') : false);
    if (faltando) { toast('Responda todos os itens objetivos antes de corrigir.'); return; }
    const r = corrigir(itens, respostas);
    itens.forEach((it, i) => {
      const fb = form.querySelector(`[data-fb="${i}"]`);
      if (!fb) return;
      const ok = r.detalhes[i];
      let certo = '';
      if (it.tipo === 'mc') certo = `Resposta correta: ${esc(it.opcoes[it.correta])}. `;
      if (it.tipo === 'validade') certo = `O argumento é ${it.valido ? 'válido' : 'inválido'}. `;
      if (it.tipo === 'premissas') certo = `Classificação correta: ${it.papeis.map((p, j) => `${j + 1}) ${PAPEIS[p]}`).join('; ')}. `;
      fb.className = `feedback ${ok ? 'ok' : 'erro'}`;
      fb.innerHTML = `<strong>${ok ? 'Correto.' : 'Incorreto.'}</strong> ${ok ? '' : certo}${esc(it.explicacao)}`;
      fb.hidden = false;
    });
    // questões de prova guardam a aula de origem: os erros viram a lista do que revisar
    const revisar = [...new Set(itens.filter((it, i) => it.aula && !r.detalhes[i]).map((it) => it.aula))];
    const tentativa = { data: Date.now(), acertos: r.acertos, total: r.total, pct: r.pct, ...(revisar.length ? { revisar } : {}) };
    ctx.set((e) => ({ ...e, tentativas: { ...e.tentativas, [avalId]: [...(e.tentativas[avalId] || []), tentativa] } }), { render: false });
    form.querySelector('.resultado').innerHTML = `${r.acertos}/${r.total} — <strong>${r.pct}%</strong> ${r.pct >= minimo ? '· aprovado' : `· abaixo de ${minimo}%: revise a explicação e tente de novo`}`;
    if (revisar.length) form.querySelector('.resultado').insertAdjacentHTML('beforeend', `<p class="revisar-aulas"><strong>Revise antes de tentar de novo:</strong> ${revisar.map((a) => link(`aula-${a}`, `${a} — ${esc(tituloAula[a] || '')}`)).join(' · ')}</p>`);
    aoCorrigir?.(r);
  });
}
