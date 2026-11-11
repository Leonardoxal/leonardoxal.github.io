// Ficha de estudo de uma obra, escrita pelo membro (estado.fichas['livro:<id>']). Os campos mudam conforme o
// formato (texto, filme, música, artes visuais, palestra, curso, consulta) e sempre separam o que o autor declarou,
// o que está na obra, a interpretação acadêmica, a interpretação do próprio membro e as hipóteses.
// Não confundir com views/ficha.js, que trata da comprovação exigida para concluir a leitura.
import { esc, toast } from '../ui.js';
import { formatoDaCategoria } from '../data/mediateca.js';

export const MAX_CAMPO_FICHA = 4000;

const PROPRIOS = {
  texto: [['tese', 'Tese principal'], ['argumentos', 'Argumentos e conceitos definidos pelo autor']],
  audiovisual: [['personagens', 'Personagens e motivações'], ['virtudes', 'Virtudes, vícios e consequências']],
  musica: [['forma', 'Forma e estrutura'], ['contexto', 'Contexto e uso (liturgia, concerto, cena)']],
  visual: [['descricao', 'Descrição: composição, luz, cor, materiais'], ['simbolos', 'Símbolos e cenas representadas']],
  fala: [['tese', 'Tese de quem fala'], ['argumentos', 'Argumentos, dados e opiniões']],
  curso: [['conteudos', 'Conteúdos e exercícios feitos'], ['duvidas', 'Dúvidas para revisar']],
  consulta: [['pergunta', 'Pergunta e o que a fonte respondeu']],
};
// As distinções que valem para toda obra (seção 9.2 do projeto).
const DISTINCOES = [
  ['declarou', 'O que o autor declarou sobre a obra (com a fonte)'],
  ['naObra', 'O que está explicitamente na obra'],
  ['academica', 'Interpretação acadêmica (de quem e onde)'],
  ['minha', 'Minha interpretação'],
  ['hipoteses', 'Hipóteses e perguntas em aberto'],
];

/** Campos da ficha para a categoria da mediateca (livros do acervo usam 'livros'). */
export const camposFicha = (categoria) => [...(PROPRIOS[formatoDaCategoria(categoria)] ?? PROPRIOS.texto), ...DISTINCOES];

export function fichaObraHTML(estado, chave, categoria) {
  const f = estado.fichas?.[chave] ?? {};
  const campos = camposFicha(categoria);
  const preenchidos = campos.filter(([k]) => f[k]?.trim()).length;
  return `<section class="ficha-obra"><h2>Minha ficha de estudo</h2>
    <details${preenchidos ? ' open' : ''}><summary>${preenchidos} de ${campos.length} campos preenchidos</summary>
    <p class="meta">Separe sempre o que o autor disse, o que está na obra e o que é interpretação, sua ou de outros. Só você vê esta ficha. Ela é salva ao sair de cada campo.</p>
    <form class="form-leitura" data-ficha="${esc(chave)}">${campos.map(([k, r]) => `<label class="campo largo"><span>${esc(r)}</span><textarea name="${k}" rows="3" maxlength="${MAX_CAMPO_FICHA}">${esc(f[k] ?? '')}</textarea></label>`).join('')}</form></details></section>`;
}

export function ligarFichaObra(root, ctx) {
  const form = root.querySelector('[data-ficha]');
  form?.addEventListener('change', (ev) => {
    const campo = ev.target.name;
    if (!campo) return;
    const chave = form.dataset.ficha;
    const valor = ev.target.value.slice(0, MAX_CAMPO_FICHA);
    ctx.set((e) => ({ ...e, fichas: { ...e.fichas, [chave]: { ...(e.fichas[chave] ?? {}), [campo]: valor } } }), { manterRolagem: true });
    toast('Ficha salva.');
  });
}
