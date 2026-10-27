// Modelos que preenchem os campos repetitivos das aulas, para o conteúdo focar no que é próprio de cada uma.

export const CRITERIOS_PADRAO = ['Atingir a nota mínima no questionário', 'Responder à questão discursiva', 'Ler a fonte orientada', 'No nível avançado: concluir o aprofundamento'];

/** Aula de conteúdo: mesmos campos das aulas do Módulo 1, com valores padrão para os campos de rotina. */
export const aula = (o) => ({
  duracao: '90 min',
  prereq: ['Aula anterior do módulo'],
  criterios: CRITERIOS_PADRAO,
  exemplos: '',
  contexto: '',
  ...o,
});

/** Aula de avaliação do módulo: a prova é montada em data/avaliacoes.js a partir das aulas. */
export const avaliacao = (id, titulo, orientacao, discursivas, extra = {}) => ({
  id, titulo, tipo: 'avaliacao', prova: `prova-${id.split('-')[0]}`, duracao: '120–180 min',
  orientacao, discursivas,
  criterios: ['Atingir a nota mínima na prova', 'Responder às questões discursivas'],
  ...extra,
});

/** Atalhos para itens de exercício. */
export const mc = (enunciado, opcoes, correta, explicacao) => ({ tipo: 'mc', enunciado, opcoes, correta, explicacao });
export const disc = (enunciado, criterios) => ({ tipo: 'disc', enunciado, criterios });
