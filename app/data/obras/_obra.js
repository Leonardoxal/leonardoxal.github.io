// Fábrica das obras completas de cada autor. Cada arquivo de autor lista suas obras em ordem de leitura;
// ref(id) marca uma obra que já existe em livros.js e ocupa ali o seu lugar na sequência.
const EDICAO_LIVRE = 'Escolha uma tradução identificada (tradutor nomeado, com introdução e notas). Registre aqui a edição que usar.';

/**
 * @param {{chave: string, autor: string, area: string, degrau: number, modulo: string, nivel?: number}} base
 * @returns {{chave: string, O: Function, ref: Function}}
 */
export function autor(base) {
  const O = (id, titulo, ano, objetivo, extra = {}) => ({
    id, titulo, autor: base.autor, area: base.area, degrau: base.degrau, ordem: 0,
    tipo: 'primaria', nivel: base.nivel || 3, modulo: base.modulo, prereq: [], objetivo, edicao: EDICAO_LIVRE,
    link: null, verificacao: 'confirmado', nota: '', ano, obraDe: base.chave,
    ...extra,
  });
  const ref = (id) => ({ ref: id });
  return { chave: base.chave, O, ref };
}
