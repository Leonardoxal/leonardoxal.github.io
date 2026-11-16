// Épocas: a ordem de estudo da fase 3 (depois da teologia e da iniciação).
// Em cada época estudam-se juntas as aulas de todas as matérias que ajudam a entender aquele momento;
// as aulas sem época (conceito, método, conteúdo técnico das matérias de PARALELAS) correm numa trilha ao lado.
// Só a ordem sugerida muda: módulos, provas, notas e identificadores continuam os mesmos.
//
// O que é declarado aqui e o que é derivado:
// - EPOCA_DA_AULA declara só as aulas de conteúdo com época clara, pelo lugar em que a aula é mais bem
//   aproveitada (em regra, o contexto histórico do assunto).
// - Aula não declarada de matéria histórica herda a época da próxima aula declarada da mesma matéria
//   (ou da anterior, se não houver próxima): o método entra na época em que a matéria aparece.
// - Aula não declarada de matéria paralela fica na trilha paralela.
// - Dentro de um módulo a ordem do currículo é mantida, porque concluir uma aula exige a anterior:
//   a aula cujo assunto é mais antigo que o da anterior fica na época da anterior.
// - A avaliação do módulo fica onde está a última aula de conteúdo dele.
import { MODULOS } from './curriculo.js';
import { aulaPorId } from './aulas/index.js';
import { DISCIPLINAS } from './disciplinas.js';
import { aulaConcluida } from '../core.js';

export const EPOCAS = [
  { id: 'egito-mesopotamia', titulo: 'Egito e Mesopotâmia', anos: 'c. 3000 a 500 a.C.',
    apresentacao: 'As primeiras civilizações, vistas pelo que o curso já tem delas: a medida do tempo, o calendário e o começo da matemática. Época curta: ainda não há aulas dedicadas só a ela.',
    obras: [] },
  { id: 'grecia', titulo: 'Grécia Antiga', anos: 'séc. VIII a IV a.C.',
    apresentacao: 'A pólis, a investigação histórica, a filosofia e a educação gregas, com o que os gregos começaram na ciência, na arte, na música e no estudo da linguagem.',
    obras: ['platao-apologia', 'platao-republica', 'jaeger-paideia', 'aristoteles-metafisica'] },
  { id: 'roma', titulo: 'Roma', anos: 'séc. III a.C. a V d.C.',
    apresentacao: 'O direito romano e as escolas filosóficas do período helenístico e imperial.',
    obras: [] },
  { id: 'cristianismo-primitivo', titulo: 'Cristianismo primitivo e patrística', anos: 'séc. I a VIII',
    apresentacao: 'A história escrita pelos cristãos, os primeiros símbolos e a basílica: a cultura antiga recebida e transformada pela Igreja.',
    obras: ['agostinho-cidade', 'biblia-atos', 'ratzinger-introducao'] },
  { id: 'medieval', titulo: 'Europa medieval e Islã', anos: 'séc. V a XV',
    apresentacao: 'Cristandade, universidades e escolástica, com a metafísica e a teoria do conhecimento que ela sistematizou, o direito canônico e a filosofia islâmica e judaica com que dialogou.',
    obras: ['gilson-filosofia-idade-media', 'boecio-quadrivio', 'macintyre-deus-universidades', 'tomas-unidade-intelecto', 'gilson-razao-revelacao'] },
  { id: 'renascimento', titulo: 'Renascimento', anos: 'séc. XIV a XVI',
    apresentacao: 'Humanismo, arte, literatura e música renascentistas, a Escola de Salamanca e o nascimento do Estado moderno.',
    obras: ['maritain-humanismo', 'olavo-maquiavel'] },
  { id: 'revolucao-cientifica', titulo: 'Revolução Científica', anos: 'séc. XVI e XVII',
    apresentacao: 'De Copérnico a Newton: a astronomia, a física, a matemática, a probabilidade e a filosofia de Descartes e Pascal.',
    obras: ['descartes-discurso', 'kuhn-estrutura'] },
  { id: 'iluminismo', titulo: 'Iluminismo e revoluções', anos: 'séc. XVIII',
    apresentacao: 'Locke, Hume, Rousseau e Kant, a separação dos poderes, as revoluções e o começo da economia política e das ciências da sociedade.',
    obras: ['rousseau-contrato', 'kant-fundamentacao', 'locke-dois-tratados', 'tocqueville-democracia'] },
  { id: 'seculo-xix', titulo: 'Século XIX', anos: '1801 a 1900',
    apresentacao: 'Idealismo, positivismo e Marx; o nascimento da sociologia, da antropologia e da psicologia; a química, a biologia e a geologia modernas.',
    obras: ['marx-manifesto', 'hegel-direito'] },
  { id: 'seculo-xx', titulo: 'Século XX', anos: '1901 a 2000',
    apresentacao: 'Guerras mundiais e totalitarismos, as escolas e os debates de cada disciplina no século, e a obra de Mário Ferreira dos Santos.',
    obras: ['popper-sociedade-aberta', 'jp2-memoria-identidade', 'jp2-laborem'] },
  { id: 'contemporaneo', titulo: 'Mundo contemporâneo', anos: 'do fim do século XX a hoje',
    apresentacao: 'Secularização, relativismo e os debates atuais de cada disciplina, com a ética, a política e a filosofia da mente retomadas em síntese.',
    obras: [] },
  { id: 'brasil', titulo: 'Brasil', anos: 'de 1500 a hoje',
    apresentacao: 'O Brasil visto por todas as disciplinas: formação, intérpretes, território, política, sociedade, direito, cultura e pensamento.',
    obras: ['olavo-futuro'] },
];
export const epocaPorId = Object.fromEntries(EPOCAS.map((e) => [e.id, e]));

/** Matérias que seguem a própria sequência; delas, só as aulas de história da matéria (módulo II) entram nas épocas. */
export const PARALELAS = ['matematica', 'logica-formal', 'estatistica', 'fisica', 'quimica', 'biologia', 'astronomia', 'ciencias-terra', 'ciencias-ambientais', 'demografia'];

/** Parte das horas da semana para cada frente (parâmetro declarado, não medição). */
export const PARTES_SEMANA = { epoca: 0.55, paralela: 0.30, revisao: 0.15 };

const em = (epoca, ids, extra = null) => Object.fromEntries(ids.split(' ').map((id) => [id, extra ? { epoca, ...extra } : epoca]));
const rev = (epoca, ...revisao) => ({ epoca, revisao });
const ESCOLASTICA = { motivo: 'Metafísica e teoria do conhecimento são estudadas junto com a escolástica, que as sistematizou.' };

/** Época das aulas com época clara. O valor é o id da época ou { epoca, motivo?, revisao? }. */
export const EPOCA_DA_AULA = {
  // Egito e Mesopotâmia
  ...em('egito-mesopotamia', 'h1-2'),
  'ma2-1': rev('egito-mesopotamia', 'grecia', 'medieval'),

  // Grécia Antiga
  ...em('grecia', 'h2-1 m5-1 m5-2 m5-3 m5-4 m5-5 m5-6 m5-7 m5-8 m5-9 as2-1'),
  'h4-1': rev('grecia', 'roma', 'cristianismo-primitivo'),
  'g2-1': rev('grecia', 'medieval', 'renascimento'),
  'cp2-1': rev('grecia', 'roma', 'medieval'),
  'cu2-1': rev('grecia', 'roma', 'medieval'),
  'ed2-1': rev('grecia', 'roma'),
  'ha2-1': rev('grecia', 'roma', 'medieval'),
  'li2-1': rev('grecia', 'medieval'),
  'lt2-1': rev('grecia', 'roma', 'medieval'),
  'mu2-1': rev('grecia', 'medieval'),
  'mu3-1': rev('grecia', 'iluminismo'),
  'ps2-1': rev('grecia', 'revolucao-cientifica'),
  'ri2-1': rev('grecia', 'renascimento'),
  'lf2-1': rev('grecia', 'medieval'),
  'fi2-1': rev('grecia', 'medieval'),
  'qu2-1': rev('grecia', 'iluminismo'),
  'bi2-1': rev('grecia', 'roma', 'renascimento'),
  'ct2-1': rev('grecia', 'roma', 'revolucao-cientifica'),
  'ca2-1': rev('grecia', 'seculo-xix'),
  // aulas de autores cujo assunto começa na Grécia: o módulo as coloca depois do panorama (ver a regra da ordem do módulo)
  ...em('grecia', 'lt2-3 li2-3 ps2-3 ed2-3 ri2-3 lf2-3 ma2-3 fi2-3'),

  // Roma
  ...em('roma', 'm5-10 m5-11 m5-12'),
  'dr2-1': rev('roma', 'medieval'),

  // Cristianismo primitivo e patrística
  ...em('cristianismo-primitivo', 'h2-2 mu2-3'),
  'sb1-2': rev('cristianismo-primitivo', 'medieval', 'seculo-xx'),
  'ha4-1': rev('cristianismo-primitivo', 'medieval'),

  // Europa medieval e Islã
  ...em('medieval', 'h4-2 m8-4 m8-5 m8-6 m8-7 m8-8 m8-9 m8-10 m8-11 as2-2 dr2-2 ed2-2 sb2-1 sb2-2'),
  ...em('medieval', 'm6-1 m6-2 m6-3 m6-4 m6-5 m6-6 m6-7 m7-1 m7-2 m7-3 m7-4 m7-5 m7-6 m7-7 m7-8 m7-9 m7-10 m7-11', ESCOLASTICA),
  ...em('medieval', 'm14-1 m14-2 m14-3 m14-4 m14-5', { motivo: 'A filosofia islâmica e a judaica dialogam com a escolástica; Índia e China entram aqui como termo de comparação.' }),
  'e2-1': rev('medieval', 'renascimento'),

  // Renascimento
  ...em('renascimento', 'h2-3 cp2-2 cu2-2 dr2-3 ha2-3 ha4-2 ha4-3 lt2-4'),
  'h4-3': rev('renascimento', 'revolucao-cientifica', 'iluminismo'),
  'ha2-2': rev('renascimento', 'seculo-xix', 'seculo-xx'),
  'lt2-2': rev('renascimento', 'seculo-xix', 'seculo-xx'),
  'mu2-2': rev('renascimento', 'iluminismo', 'seculo-xix'),

  // Revolução Científica
  ...em('revolucao-cientifica', 'm9-1 m9-2 m9-3 as2-3 as2-4 es2-1 es2-2 bi2-2 dm2-1'),
  'fi2-2': rev('revolucao-cientifica', 'seculo-xix', 'seculo-xx'),
  'fi2-4': rev('revolucao-cientifica', 'seculo-xx'),
  'ma2-2': rev('revolucao-cientifica', 'seculo-xix'),

  // Iluminismo e revoluções
  ...em('iluminismo', 'm9-4 m9-5 m9-6 m9-7 m9-8 so2-1 cp2-3 cp2-4 dr2-4 es2-3'),
  'ed2-4': rev('iluminismo', 'seculo-xix', 'seculo-xx'),
  'li2-2': rev('iluminismo', 'seculo-xx'),
  'mu2-4': rev('iluminismo', 'seculo-xix'),
  'ri2-2': rev('iluminismo', 'seculo-xix', 'seculo-xx'),
  'e2-2': rev('iluminismo', 'seculo-xix'),
  'lf2-2': rev('iluminismo', 'seculo-xx'),
  'bi2-3': rev('iluminismo', 'seculo-xix'),
  'dm2-2': rev('iluminismo', 'seculo-xix'),

  // Século XIX
  ...em('seculo-xix', 'h3-1 m10-1 m10-2 m10-3 m10-4 m10-7 g2-2 g2-3 sb1-3 so2-2 so2-3 so2-4 an2-1 e2-3 ma2-4 qu2-3 ct2-2 ca2-2'),
  'ps2-2': rev('seculo-xix', 'seculo-xx'),
  'qu2-2': rev('seculo-xix', 'seculo-xx'),
  'bi2-4': rev('seculo-xix', 'seculo-xx'),

  // Século XX
  ...em('seculo-xx', 'h2-4 h3-2 h3-3 h5-1 m10-5 m10-6 m10-8 m10-9 g2-4 g3-1 g3-2'),
  ...em('seculo-xx', 'm11-1 m11-2 m11-3 m11-4 m11-5 m11-6 m11-7 m11-8 m11-9 m11-10 m11-11'),
  ...em('seculo-xx', 'sb1-4 sb2-3 sb2-4 sb2b-1 sb2b-2 sb2b-3 sb3-1 so3-1 so3-2 an2-2 an2-3 an2-4 an3-1 an3-2'),
  ...em('seculo-xx', 'cp3-1 cp3-2 cu2-3 cu2-4 cu3-1 cu3-2 dr3-1 dr3-2 ed3-1 ed3-2 ha2-4 ha3-1 ha3-2 ha3-3'),
  ...em('seculo-xx', 'li2-4 li3-1 li3-2 li3-3 lt3-1 lt3-2 mu3-2 ps2-4 ps3-1 ps3-2 ri2-4 ri3-1 ri3-2 e2-4 e3-1 e3-2'),
  ...em('seculo-xx', 'lf2-4 es2-4 qu2-4 ct2-3 ct2-4 ca2-3 ca2-4 dm2-3 dm2-4'),

  // Mundo contemporâneo
  ...em('contemporaneo', 'm10-10 m13-1 m13-2 m13-3 m13-4 m13-5 m13-6 m13-7 m15-1 m15-2 m15-3 m15-4 m15-5'),
  ...em('contemporaneo', 'g3-3 g3-4 so3-3 so3-4 an3-3 an3-4 cp3-3 cp3-4 cp4-1 cp4-2 cp4-3 cu3-3 cu3-4 dr3-3 dr3-4'),
  ...em('contemporaneo', 'ed3-3 ed3-4 ed4-1 ed4-2 ed4-3 ha3-4 li3-4 lt3-3 lt3-4 mu3-3 mu3-4 ps3-3 ps3-4'),
  ...em('contemporaneo', 'ri3-3 ri3-4 ri4-1 ri4-2 ri4-3 e3-3 e3-4 e4-1 e4-2 e4-3'),

  // Brasil
  ...em('brasil', 'h3-4 h4-4 h5-2 g4-4 sb3-2 so4-1 so4-2 so4-3 so4-4 an4-1 an4-2 an4-3 an4-4 cp4-4 cu4-1 cu4-2 cu4-3'),
  ...em('brasil', 'dr4-1 dr4-2 dr4-3 dr4-4 ed4-4 ha4-4 li5-3 ri4-4 e4-4'),
  ...em('brasil', 'm12-1 m12-2 m12-3 m12-4 m12-5 m12-6 m12-7 m12-8 m12-9 m12-10'),
  ...em('brasil', 'm16-8', { motivo: 'O projeto de formação intelectual fecha o curso.' }),
};

// ---------- Derivação: o lugar de cada aula publicada da fase 3 ----------
const PRIMEIRO_DEGRAU = 5; // os degraus 0 a 4 são as fases 1 e 2, que não mudam
const FILOSOFIA = 'filosofia';
const materiaDe = (m) => (m.degrau === null ? m.disciplina : FILOSOFIA);
// as pontes das matérias paralelas vêm depois das históricas, na ordem de PARALELAS
const ORDEM_MATERIAS = ['historia', FILOSOFIA, 'geografia', ...DISCIPLINAS.map((d) => d.id).filter((d) => d !== 'historia' && d !== 'geografia' && !PARALELAS.includes(d)), ...PARALELAS];
const indice = Object.fromEntries(EPOCAS.map((e, i) => [e.id, i]));
const declarada = (id) => { const v = EPOCA_DA_AULA[id]; return v ? v.epoca || v : null; };
const ehAvaliacao = (id) => aulaPorId[id].tipo === 'avaliacao';

const LUGAR = {}; // aula -> id da época, ou null (trilha paralela)
const ADIADA = {}; // aula -> época que o assunto pediria, quando a ordem do módulo a segurou
const CHAVE = {}; // aula -> [ordem da matéria, número do módulo na matéria, posição no currículo]
{
  const porMateria = new Map();
  for (const m of MODULOS.filter((x) => x.degrau === null || x.degrau >= PRIMEIRO_DEGRAU)) {
    if (!porMateria.has(materiaDe(m))) porMateria.set(materiaDe(m), []);
    porMateria.get(materiaDe(m)).push(m);
  }
  let posicao = 0;
  for (const [materia, mods] of porMateria) {
    const publicadas = (m) => m.aulas.map((a) => a.id).filter((id) => aulaPorId[id]);
    const conteudo = mods.flatMap(publicadas).filter((id) => !ehAvaliacao(id));
    const herda = !PARALELAS.includes(materia);
    conteudo.forEach((id, i) => {
      LUGAR[id] = declarada(id)
        ?? (herda ? declarada(conteudo.slice(i + 1).find(declarada)) ?? declarada(conteudo.slice(0, i).findLast(declarada)) : null);
    });
    mods.forEach((m, n) => {
      let maior = -1, ultimo = null;
      for (const id of publicadas(m)) {
        CHAVE[id] = [ORDEM_MATERIAS.indexOf(materia), n, posicao++];
        if (ehAvaliacao(id)) { LUGAR[id] = ultimo; continue; }
        if (LUGAR[id] !== null) {
          if (indice[LUGAR[id]] < maior) { ADIADA[id] = LUGAR[id]; LUGAR[id] = EPOCAS[maior].id; } else maior = indice[LUGAR[id]];
        }
        ultimo = LUGAR[id];
      }
    });
  }
}
const cmp = (campos) => (a, b) => campos.map((c) => CHAVE[a][c] - CHAVE[b][c]).find(Boolean) || 0;
const NA_EPOCA = Object.fromEntries(EPOCAS.map((e) => [e.id, Object.keys(LUGAR).filter((id) => LUGAR[id] === e.id).sort(cmp([0, 2]))]));
// trilha paralela: primeiro os módulos I de todas as matérias, depois os seguintes
const TRILHA = Object.keys(LUGAR).filter((id) => LUGAR[id] === null).sort(cmp([1, 0, 2]));

/** Id da época em que a aula é estudada, ou null (trilha paralela, ou aula fora da fase 3). */
export const epocaDaAula = (id) => LUGAR[id] ?? null;
/** A aula pertence à ordem da fase 3 (época ou trilha paralela)? */
export const naFase3 = (id) => id in LUGAR;
/** Aulas da época, na ordem de estudo: História, Filosofia, Geografia e as demais; a avaliação fecha o módulo. */
export const aulasDaEpoca = (id) => NA_EPOCA[id] || [];
export const trilhaParalela = () => TRILHA;
/** Aulas de épocas anteriores que também cobrem esta: reaparecem como revisão, sem nova exigência. */
export const revisoesDaEpoca = (id) => Object.keys(EPOCA_DA_AULA).filter((a) => EPOCA_DA_AULA[a].revisao?.includes(id));
/** Por que a aula está nesta época, quando não é o óbvio: motivo declarado ou ordem do módulo. */
export const motivoDaAula = (id) => EPOCA_DA_AULA[id]?.motivo
  || (ADIADA[id] ? `Pelo assunto, começaria em ${epocaPorId[ADIADA[id]].titulo}; fica aqui porque o módulo pede antes a aula anterior.` : '');

const pendente = (estado, ids) => ids.find((id) => !aulaConcluida(estado, id));
const acao = (id) => (id ? { href: `aula-${id}`, rotulo: `Aula ${id}: ${aulaPorId[id].titulo}` } : null);
const progresso = (estado, ids) => ({ feitas: ids.filter((id) => aulaConcluida(estado, id)).length, total: ids.length });

/** Época atual: a primeira com aula pendente. Aulas já concluídas, em qualquer ordem, não são pedidas de novo. */
export const epocaAtual = (estado) => EPOCAS.find((e) => pendente(estado, NA_EPOCA[e.id])) || null;
export const proximaDaEpoca = (estado) => { const e = epocaAtual(estado); return e ? acao(pendente(estado, NA_EPOCA[e.id])) : null; };
export const proximaParalela = (estado) => acao(pendente(estado, TRILHA));
export const progressoEpoca = (estado, id) => progresso(estado, aulasDaEpoca(id));
export const progressoParalela = (estado) => progresso(estado, TRILHA);
