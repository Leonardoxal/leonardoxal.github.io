// Página do livro: ficha de transição (por que ler agora, o que saber antes, o que aprender, dificuldade,
// para onde leva, como saber que compreendeu) e comprovação escrita da leitura.
import { livroPorId } from '../data/livros.js';
import { fichaDe } from '../data/fichas.js';
import { aulaConcluida, livroConcluido, comprovacaoLivro, camposComprovacao, chaveComprovacao, CAMPOS_COMPROVACAO, quizDoLivro, NOTA_MINIMA } from '../core.js';
import { esc, link, toast } from '../ui.js';
import { quizHTML, ligarQuiz } from './quiz.js';

const statusTexto = (c) => (c.ok ? 'Comprovação completa: a leitura pode ser marcada como concluída.' : `Falta: ${c.faltas.join('; ')}.`);

const marca = (feito) => (feito ? '<span class="chip ok">concluída</span>' : '<span class="chip">pendente</span>');
const itemLivro = (estado, id) => `<li>${link(`livro-${id}`, esc(livroPorId[id].titulo))} <span class="meta">— ${esc(livroPorId[id].autor)}</span> ${marca(livroConcluido(estado, id))}</li>`;

export function transicaoHTML(estado, id) {
  const f = fichaDe(id);
  if (!f) return '';
  const l = f.livro;
  const lista = (ids, vazio) => (ids.length ? `<ul class="lista-curta">${ids.map((x) => itemLivro(estado, x)).join('')}</ul>` : `<p class="meta">${vazio}</p>`);
  const pendentes = f.obrigatorias.filter((x) => !livroConcluido(estado, x)).length + f.aulas.filter((a) => !aulaConcluida(estado, a)).length;
  return `<section class="transicao" aria-labelledby="t-titulo">
    <h2 id="t-titulo">Antes de ler</h2>
    <p class="meta">Posição ${f.posicaoGeral} de ${f.total} na trilha · degrau ${f.degrau.n}, ${l.ordem}º do degrau${pendentes ? ` · <strong>${pendentes} preparação(ões) pendente(s)</strong>` : ' · preparação concluída'}</p>
    <h3>Por que estou lendo esta obra agora?</h3><p>${esc(f.justificativa)}</p>
    <h3>O que preciso saber antes de começar?</h3>
    <p><strong>Obrigatório:</strong></p>${f.obrigatorias.length
      ? `<ul class="lista-curta">${f.obrigatorias.map((x) => `${itemLivro(estado, x).replace(/<\/li>$/, '')}${l.porque?.[x] ? `<br><span class="meta">${esc(l.porque[x])}</span>` : ''}</li>`).join('')}</ul>`
      : '<p class="meta">Nenhuma obra específica: bastam os degraus anteriores.</p>'}
    ${f.recomendadas.length ? `<p><strong>Recomendado:</strong></p>${lista(f.recomendadas, '')}` : ''}
    ${f.aulas.length ? `<p><strong>Aulas preparatórias:</strong></p><ul class="lista-curta">${f.aulas.map((a) => `<li>${link(`aula-${a}`, esc(a))} ${marca(aulaConcluida(estado, a))}</li>`).join('')}</ul>` : ''}
    ${f.conceitos.length ? `<p><strong>Conceitos:</strong> ${f.conceitos.map((c) => link(`conceito-${c.id}`, esc(c.termo))).join(', ')}</p>` : ''}
    <h3>O que devo aprender nesta leitura?</h3><p>${esc(l.objetivo)}</p>
    <h3>Qual é a principal dificuldade?</h3><p>${esc(f.dificuldade)}</p>
    <h3>Como esta leitura me prepara para a próxima?</h3>
    ${f.posteriores.length ? `<p>Será usada por:</p>${lista(f.posteriores, '')}` : '<p class="meta">Nenhuma obra registra esta como pré-requisito; ela amplia o degrau.</p>'}
    ${f.proxima ? `<p class="meta">Próxima na trilha: ${link(`livro-${f.proxima.id}`, esc(f.proxima.titulo))}.</p>` : ''}
    <h3>Como saberei que compreendi?</h3>
    <p>Para concluir a leitura, complete na seção "Comprovar compreensão": ${f.criterio.map(esc).join('; ')}. Não é preciso concordar com o autor; é preciso expor o que ele defende e avaliar seus argumentos.</p>
  </section>`;
}

export function comprovacaoHTML(estado, id) {
  const l = livroPorId[id];
  if (!l) return '';
  const c = comprovacaoLivro(l, estado);
  return `<section id="comprovar" class="comprovar"><h2>Comprovar compreensão</h2>
    <p class="dica">Obrigatório para concluir a leitura. Exigência proporcional à dificuldade (${l.nivel} de 5).</p>
    ${l.questionario ? `<div id="quiz-livro"><h3>Questionário da obra</h3>
      <p class="dica">Mínimo de ${NOTA_MINIMA}%. Pode refazer quantas vezes quiser; vale a melhor tentativa. Cada erro indica o que revisar.</p>
      ${quizHTML(l.questionario, quizDoLivro(id), `livro-${id}`, estado, NOTA_MINIMA)}</div>
      <h3>Escrita</h3>` : ''}
    ${camposComprovacao(l.nivel).map((k) => {
      const campo = CAMPOS_COMPROVACAO[k];
      const texto = estado.discursivas[chaveComprovacao(id, k)]?.texto || '';
      return `<label class="campo largo"><span>${esc(campo.rotulo)} <span class="meta">(${esc(campo.dica)} Mínimo de ${campo.minimo} caracteres.)</span></span>
        <textarea rows="${k === 'resumo' ? 7 : 4}" data-comprovar="${k}">${esc(texto)}</textarea>
        <span class="meta" data-conta="${k}">${texto.trim().length}/${campo.minimo}</span></label>`;
    }).join('')}
    <p id="comprovar-status" class="${c.ok ? 'ok-msg' : 'meta'}" aria-live="polite">${esc(statusTexto(c))}</p>
  </section>`;
}

/** Salva os textos da comprovação sem redesenhar a página (para não perder o foco). */
export function ligarComprovacao(root, ctx, id) {
  const l = livroPorId[id];
  let t = null;
  const atualizarStatus = () => {
    const c = comprovacaoLivro(l, ctx.estado);
    const st = root.querySelector('#comprovar-status');
    if (!st) return c;
    st.className = c.ok ? 'ok-msg' : 'meta';
    st.textContent = statusTexto(c);
    return c;
  };
  if (l.questionario) ligarQuiz(root.querySelector('#quiz-livro'), l.questionario, ctx, () => { if (atualizarStatus().ok) toast('Comprovação completa.'); });
  root.querySelectorAll('[data-comprovar]').forEach((ta) => ta.addEventListener('input', () => {
    const k = ta.dataset.comprovar;
    root.querySelector(`[data-conta="${k}"]`).textContent = `${ta.value.trim().length}/${CAMPOS_COMPROVACAO[k].minimo}`;
    clearTimeout(t);
    t = setTimeout(() => {
      ctx.set((e) => ({ ...e, discursivas: { ...e.discursivas, [chaveComprovacao(id, k)]: { texto: ta.value, data: Date.now() } } }), { render: false });
      if (atualizarStatus().ok) toast('Comprovação completa.');
    }, 600);
  }));
}
