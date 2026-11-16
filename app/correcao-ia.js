// Texto para corrigir uma resposta discursiva numa IA externa, sem API paga: o estudante copia e cola.
// Só entram a atividade, a rubrica e a resposta; nenhum nome, conta ou dado pessoal.
// A resposta da IA volta como sugestão; só o estudante confirma o resultado (ver views/quiz.js).

/** Situações registradas para cada discursiva, da mais fraca à mais forte evidência. */
export const SITUACOES_DISC = {
  escrita: 'Resposta escrita',
  sugerida: 'Correção da IA registrada (sugestão, não conferida)',
  conferida: 'Critérios conferidos pelo estudante',
  confirmada: 'Resultado confirmado',
};

/** Situação de uma discursiva salva: { texto, ia, criterios, confirmado }. */
export function situacaoDisc(d = {}) {
  if (!(d.texto || '').trim()) return null;
  if (d.confirmado) return 'confirmada';
  if ((d.criterios || []).some(Boolean)) return 'conferida';
  if ((d.ia || '').trim()) return 'sugerida';
  return 'escrita';
}

/**
 * @param {{ contexto: string, enunciado: string, criterios: string[], resposta: string }} p
 */
export function textoCorrecaoIA({ contexto, enunciado, criterios, resposta }) {
  return [
    'Você vai corrigir uma resposta discursiva de um curso de formação intelectual católica (Academia da Verdade). Seja um examinador exigente e honesto: não infle a avaliação, não elogie sem motivo e não invente fontes.',
    '',
    `ATIVIDADE: ${contexto}`,
    `ENUNCIADO: ${enunciado}`,
    '',
    'RUBRICA (cada critério deve ser julgado em separado):',
    ...criterios.map((c, i) => `${i + 1}. ${c}`),
    '',
    'CRITÉRIOS GERAIS DE EXCELÊNCIA: correção conceitual; fidelidade às fontes citadas; lógica; clareza; evidências; profundidade; capacidade crítica; qualidade da conclusão; expressão escrita. Respostas diferentes são aceitas quando bem fundamentadas; não exija concordância com nenhuma posição. Em matéria de fé, distinga dogma, doutrina, opinião teológica e interpretação de autor.',
    '',
    'RESPOSTA DO ESTUDANTE:',
    '"""',
    resposta.trim(),
    '"""',
    '',
    'RESPONDA NESTA ORDEM:',
    '1. Para cada critério da rubrica: "atende", "atende em parte" ou "não atende", com o trecho da resposta que serve de evidência (ou "sem evidência").',
    '2. Acertos.',
    '3. Erros conceituais ou factuais, explicando por que são erros. Se não tiver certeza de um fato ou de uma referência, diga "a conferir" em vez de afirmar.',
    '4. Lacunas: o que faltou para a resposta ser excelente.',
    '5. Diagnóstico da dificuldade principal (conteúdo, argumentação, uso de fontes ou escrita).',
    '6. Dois exercícios de reforço curtos e específicos.',
    '7. Proposta de reavaliação: uma pergunta nova que teste o mesmo domínio.',
    '',
    'Esta correção é uma sugestão. O estudante vai conferir cada ponto antes de registrar o resultado.',
  ].join('\n');
}
