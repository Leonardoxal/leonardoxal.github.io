// Ficha de cada obra da mediateca: o contexto e a aula que a apresenta. É escrita e conferida à mão, obra por obra;
// nada aqui é gerado por regra. Uma obra só passa a ser obrigatória quando tem ficha (ver obraPronta em mediateca.js).
// Enquanto não tem, aparece como "em preparação": pode ser consultada e registrada, mas não bloqueia a conclusão
// do degrau nem da matéria, do mesmo modo que as aulas ainda não publicadas.
//
// Formato, pela id da obra (a mesma de mediateca.js):
//   'id-da-obra': {
//     contexto: 'Quem escreveu, quando, em resposta a quê, e por que a obra importa neste ponto do percurso.',
//     aula: 'id-da-aula',        // a aula que apresenta a obra; precisa existir e ser do mesmo módulo da obra
//     nivel: 1 a 5,              // dificuldade de leitura, na mesma escala dos livros do acervo
//     justificativa: 'Por que esta obra está neste módulo e é exigida.',
//     fontes: ['De onde vêm os fatos do contexto: edição, verbete, documento'],
//   },
// Regras: fato sem fonte não entra; se a obra está no módulo errado, corrija a atribuição antes de escrever a ficha.
// Ordem de trabalho: degrau por degrau, a partir do 0. O andamento aparece em `node scripts/auditoria.mjs`.
export const FICHAS_OBRA = {};
