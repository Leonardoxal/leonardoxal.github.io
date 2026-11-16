// Renderização e correção de itens de avaliação (usado nas aulas e na página de avaliações).
import { corrigir, NOTA_MINIMA, resultadoPorArea } from '../core.js';
import { AREAS_CONJUNTAS } from '../data/avaliacoes.js';
import { esc, fmtData, toast, link, copiar } from '../ui.js';
import { textoCorrecaoIA, situacaoDisc, SITUACOES_DISC } from '../correcao-ia.js';
import { todasAulas } from '../data/curriculo.js';
import { CONCEITOS } from '../data/conceitos.js';

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
  // discursiva: resposta original, sugestão da IA, conferência e confirmação ficam em campos separados
  const chave = `${pref}-${i}`;
  const d = estado.discursivas[chave] || { texto: '', criterios: [] };
  const sit = situacaoDisc(d);
  return `<fieldset class="item disc"><legend>${i + 1}. ${esc(it.enunciado)}</legend>
    <p class="dica">Discursiva: não há resposta única. Respostas diferentes são aceitas quando bem fundamentadas; não se exige concordância com nenhuma posição. Escreva, peça uma correção (opcional) e confira seu texto pelos critérios.</p>
    <label class="sr" for="${chave}-txt">Sua resposta</label>
    <textarea id="${chave}-txt" data-disc="${chave}" rows="8" placeholder="Sua resposta…">${esc(d.texto)}</textarea>
    <p class="meta">${d.data ? `Salvo em ${fmtData(d.data)}` : 'Ainda não salvo'} · ${(d.texto || '').trim().split(/\s+/).filter(Boolean).length} palavras</p>
    <details class="correcao-ia"${d.ia ? ' open' : ''}><summary>Correção por uma IA (opcional, sem custo)</summary>
      <p class="meta">O site não se conecta a nenhuma IA. Ele monta um texto com o enunciado, a rubrica e a sua resposta, sem nome nem dados da conta; você cola no ChatGPT, no Claude ou em outra IA. A IA erra: o que ela disser fica guardado como sugestão até você conferir.</p>
      <button type="button" class="btn" data-ia-montar="${chave}" data-i="${i}">Montar e copiar o texto</button>
      <textarea class="ia-texto" rows="6" readonly hidden aria-label="Texto para a IA"></textarea>
      <label class="campo largo"><span>Correção sugerida pela IA (cole aqui)</span><textarea data-ia="${chave}" rows="6">${esc(d.ia || '')}</textarea></label>
    </details>
    <div class="criterios"><strong>Conferência: critérios que confirmo no meu texto${d.ia ? ', depois de ler a correção' : ''}:</strong>
      ${it.criterios.map((c, j) => `<label class="opcao"><input type="checkbox" data-crit="${chave}" data-j="${j}" ${d.criterios[j] ? 'checked' : ''}> <span>${esc(c)}</span></label>`).join('')}
      <label class="opcao"><input type="checkbox" data-confirmar="${chave}" ${d.confirmado ? 'checked' : ''}> <span><strong>Confirmo o resultado</strong> (reli a resposta e a correção e corrigi o que era preciso)</span></label>
    </div>
    <p class="meta situacao-disc">${sit ? `Situação: ${esc(SITUACOES_DISC[sit])}${d.confirmado ? ` em ${fmtData(d.confirmado)}` : ''}` : 'Situação: sem resposta'}</p>
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

  // grava um campo da discursiva sem apagar os outros e atualiza a linha de situação
  const gravarDisc = (chave, campos) => {
    let novo;
    ctx.set((e) => { novo = { ...(e.discursivas[chave] || { texto: '', criterios: [] }), ...campos }; return { ...e, discursivas: { ...e.discursivas, [chave]: novo } }; }, { render: false });
    const sit = novo && situacaoDisc(novo);
    const linha = form.querySelector(`[data-disc="${chave}"]`)?.closest('fieldset')?.querySelector('.situacao-disc');
    if (linha) linha.textContent = sit ? `Situação: ${SITUACOES_DISC[sit]}${novo.confirmado ? ` em ${fmtData(novo.confirmado)}` : ''}` : 'Situação: sem resposta';
  };

  form.addEventListener('input', (ev) => {
    const ta = ev.target.closest('textarea[data-disc], textarea[data-ia]');
    if (!ta) return;
    clearTimeout(espera);
    espera = setTimeout(() => {
      if (ta.dataset.ia) { gravarDisc(ta.dataset.ia, { ia: ta.value, iaData: Date.now() }); return; }
      gravarDisc(ta.dataset.disc, { texto: ta.value, data: Date.now() });
      const meta = ta.parentElement.querySelector('.meta');
      if (meta) meta.textContent = `Salvo agora · ${ta.value.trim().split(/\s+/).filter(Boolean).length} palavras`;
    }, 600);
  });

  form.addEventListener('click', (ev) => {
    const bt = ev.target.closest('button[data-ia-montar]');
    if (!bt) return;
    const it = itens[Number(bt.dataset.i)];
    const resposta = form.querySelector(`[data-disc="${bt.dataset.iaMontar}"]`).value;
    if (!resposta.trim()) { toast('Escreva a resposta antes de pedir a correção.'); return; }
    const aula = pref.replace(/-av$/, '');
    const contexto = tituloAula[aula] ? `aula ${aula}, ${tituloAula[aula]}` : `avaliação ${pref}`;
    copiar(textoCorrecaoIA({ contexto, enunciado: it.enunciado, criterios: it.criterios, resposta }), bt.nextElementSibling);
  });

  form.addEventListener('change', (ev) => {
    const conf = ev.target.closest('input[data-confirmar]');
    if (conf) { gravarDisc(conf.dataset.confirmar, { confirmado: conf.checked ? Date.now() : null }); return; }
    const cb = ev.target.closest('input[data-crit]');
    if (!cb) return;
    const chave = cb.dataset.crit, j = Number(cb.dataset.j);
    const criterios = [...form.querySelectorAll(`input[data-crit="${chave}"]`)].map((x) => x.checked);
    gravarDisc(chave, { criterios, data: Date.now() });
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
    // avaliação conjunta: a nota que conta é a da área mais fraca (uma área não compensa outra)
    const porArea = resultadoPorArea(itens, r.detalhes);
    const pct = porArea.pct ?? r.pct;
    const tentativa = { data: Date.now(), acertos: r.acertos, total: r.total, pct, ...(porArea.pct !== null ? { areas: porArea.areas, pctGeral: r.pct } : {}), ...(revisar.length ? { revisar } : {}) };
    ctx.set((e) => ({ ...e, tentativas: { ...e.tentativas, [avalId]: [...(e.tentativas[avalId] || []), tentativa] } }), { render: false });
    form.querySelector('.resultado').innerHTML = `${r.acertos}/${r.total} — <strong>${pct}%</strong>${porArea.pct !== null ? ' (nota da área mais fraca)' : ''} ${pct >= minimo ? '· aprovado' : `· abaixo de ${minimo}%: revise a explicação e tente de novo`}`;
    if (porArea.pct !== null) {
      const linhas = Object.entries(porArea.areas).map(([a, v]) => `<tr><td>${link(AREAS_CONJUNTAS[a]?.href || 'mapa', esc(AREAS_CONJUNTAS[a]?.rotulo || a))}</td><td class="num-tab">${v.acertos}/${v.total}</td><td class="num-tab">${v.pct}%</td><td>${v.pct >= minimo ? 'dominada' : '<strong>revisar</strong>'}</td></tr>`).join('');
      form.querySelector('.resultado').insertAdjacentHTML('beforeend', `<div class="tabela-wrap"><table class="por-area"><thead><tr><th>Área</th><th>Acertos</th><th>Nota</th><th>Situação</th></tr></thead><tbody>${linhas}</tbody></table></div><p class="meta">Resultado integrado: ${r.pct}%. A síntese discursiva é avaliada pela rubrica.</p>`);
    }
    if (revisar.length) form.querySelector('.resultado').insertAdjacentHTML('beforeend', `<p class="revisar-aulas"><strong>Revise antes de tentar de novo:</strong> ${revisar.map((a) => link(`aula-${a}`, `${a} — ${esc(tituloAula[a] || '')}`)).join(' · ')}</p>`);
    // os conceitos do Atlas ligados às aulas em que houve erro
    const conceitos = CONCEITOS.filter((c) => c.aulas.some((a) => revisar.includes(a)));
    if (conceitos.length) form.querySelector('.resultado').insertAdjacentHTML('beforeend', `<p class="revisar-aulas"><strong>Conceitos a revisar:</strong> ${conceitos.map((c) => link(`conceito-${c.id}`, esc(c.termo))).join(' · ')}</p>`);
    aoCorrigir?.(r);
  });
}
