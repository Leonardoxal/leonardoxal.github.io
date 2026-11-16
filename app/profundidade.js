// Padrão de profundidade das aulas (prompt mestre, Parte XI): os 18 itens da estrutura acadêmica, medidos
// sobre os campos que as aulas já têm. Mede presença e extensão, não qualidade: um item "atendido" ainda
// precisa de leitura humana; um item "faltando" é certamente uma lacuna. Os limites estão nomeados abaixo.

export const LIMITES = {
  explicacao: 1200, // palavras: exposição de nível universitário, não um resumo
  contexto: 150,
  exemplos: 100,
  aplicacao: 80,
  objecoes: 2,
  referencias: 3,
  vocabulario: 5,
  exercicios: 5,
  revisao: 3,
};

const palavras = (html) => String(html || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

/** Os 18 itens: [chave, rótulo, teste(aula) -> boolean]. */
export const ITENS_PROFUNDIDADE = [
  ['objetivos', 'Objetivos observáveis', (a) => (a.aprendera || []).length >= 3],
  ['prereq', 'Pré-requisitos', (a) => (a.prereq || []).length >= 1],
  ['problema', 'Problema central', (a) => Boolean(a.argumento?.titulo)],
  ['contexto', `Contexto (${LIMITES.contexto}+ palavras)`, (a) => palavras(a.contexto) >= LIMITES.contexto],
  ['explicacao', `Explicação desenvolvida (${LIMITES.explicacao}+ palavras)`, (a) => palavras(a.explicacao) >= LIMITES.explicacao],
  ['vocabulario', `Vocabulário (${LIMITES.vocabulario}+ termos)`, (a) => (a.vocabulario || []).length >= LIMITES.vocabulario],
  ['argumento', 'Argumento ou demonstração', (a) => (a.argumento?.premissas || []).length >= 2],
  ['exemplos', `Exemplos (${LIMITES.exemplos}+ palavras)`, (a) => palavras(a.exemplos) >= LIMITES.exemplos],
  ['aplicacao', `Aplicação (${LIMITES.aplicacao}+ palavras)`, (a) => palavras(a.aplicacao) >= LIMITES.aplicacao],
  ['objecoes', `Objeções (${LIMITES.objecoes}+)`, (a) => (a.objecoes || []).length >= LIMITES.objecoes],
  ['fonte', 'Fonte original orientada', (a) => Boolean(a.fonte?.obra && a.fonte?.orientacao)],
  ['bibliografia', `Bibliografia (${LIMITES.referencias}+ referências)`, (a) => (a.referencias || []).length >= LIMITES.referencias],
  ['exercicios', `Exercícios progressivos (${LIMITES.exercicios}+)`, (a) => (a.exercicios || []).length >= LIMITES.exercicios],
  ['ineditos', 'Problemas inéditos (aprofundamento)', (a) => (a.avancado?.exercicios || []).length >= 1],
  ['producao', 'Produção própria (discursiva)', (a) => (a.exercicios || []).some((e) => e.tipo === 'disc')],
  ['avaliacao', 'Avaliação objetiva', (a) => (a.exercicios || []).some((e) => e.tipo !== 'disc')],
  ['revisao', `Revisão (${LIMITES.revisao}+ cartões e resumo)`, (a) => (a.revisao || []).length >= LIMITES.revisao && (a.resumo || []).length >= 1],
  ['dominio', 'Critérios de domínio', (a) => (a.criterios || []).length >= 2],
];

/** Aulas de avaliação de módulo não são aulas expositivas: ficam fora da medida. */
export const aulaExpositiva = (a) => a && a.tipo !== 'avaliacao';

/** { atendidos, total, faltas: [rótulo], palavras } de uma aula. */
export function profundidadeDaAula(a) {
  const faltas = ITENS_PROFUNDIDADE.filter(([, , ok]) => !ok(a)).map(([, rotulo]) => rotulo);
  return { atendidos: ITENS_PROFUNDIDADE.length - faltas.length, total: ITENS_PROFUNDIDADE.length, faltas, palavras: palavras(a.explicacao) };
}

// Parte XII: os 25 campos da Teologia. A cobertura é aproximada por palavras-chave nos títulos das aulas
// teológicas; serve para achar campos sem aula ou só com uma, não para dizer que um campo está bem estudado.
export const CAMPOS_TEOLOGIA = [
  ['Teologia Fundamental', /teologia\b(?! (moral|natural))|revela[cç]|f[eé] e raz|credibilidade/i],
  ['Sagrada Escritura', /escritura|b[ií]blia|evangelh|c[aâ]non|testamento|ex[eé]gese/i],
  ['História da Igreja', /hist[oó]ria da igreja|igreja (nascente|primitiva|antiga|medieval)|concílio|cism|reforma/i],
  ['Patrística', /padres|patr[ií]stic|agostinho|atan[aá]sio|cris[oó]stomo|irineu|in[aá]cio de antioquia|justino/i],
  ['Teologia Trinitária', /trindade|trinit/i],
  ['Cristologia', /cristo|cristol|encarna[cç]|calced/i],
  ['Soteriologia', /salva[cç]|reden[cç]|soteriol/i],
  ['Mariologia', /maria|mariol|nossa senhora/i],
  ['Criação', /cria[cç][aã]o/i],
  ['Providência', /provid[eê]ncia/i],
  ['Angelologia', /anjo|angel/i],
  ['Antropologia Teológica', /antropologia|imagem de deus|pessoa humana|alma/i],
  ['Pecado Original', /pecado/i],
  ['Graça', /gra[cç]a/i],
  ['Justificação', /justifica/i],
  ['Eclesiologia', /igreja|eclesiol/i],
  ['Sacramentologia', /sacrament|batismo|eucarist|confiss/i],
  ['Liturgia', /liturg|missa|ano lit/i],
  ['Teologia Moral', /moral|virtude|lei natural|consci[eê]ncia/i],
  ['Espiritualidade', /espiritualidade|ora[cç][aã]o/i],
  ['Ascética e Mística', /asc[eé]tic|m[ií]stic/i],
  ['Escatologia', /escatol|novíssimos|vida eterna|morte|ju[ií]zo/i],
  ['Doutrina Social da Igreja', /doutrina social|bem comum|rerum novarum/i],
  ['Escolástica', /escol[aá]stic|tom[aá]s|anselmo|boaventura|scotus|suma/i],
  ['História da Teologia', /hist[oó]ria da teologia|teologia (medieval|moderna|contempor)/i],
];

/** { campo, aulas: [id] } para cada campo, a partir de [{ id, titulo }] das aulas teológicas. */
export const coberturaTeologia = (aulas) => CAMPOS_TEOLOGIA.map(([campo, re]) => ({ campo, aulas: aulas.filter((a) => re.test(a.titulo)).map((a) => a.id) }));
