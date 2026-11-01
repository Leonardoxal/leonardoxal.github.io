// Biblioteca e mediateca: registro único de obras de todos os tipos de mídia, com as fontes em que cada uma aparece.
// Os 607 livros do acervo original entram sem alteração (o registro aponta para eles). As demais obras vêm das
// bibliografias das disciplinas; registros de outras fontes (fase 6) entram em EXTERNOS com a fonte declarada.
// Nada aqui é inventado: campos sem informação ficam vazios, e a interface mostra "não informado".
import { LIVROS, livroPorId } from './livros.js';
import { DISCIPLINAS } from './disciplinas.js';
import { AULAS_COMPLETAS } from './aulas/index.js';
import { normalizar } from '../core.js';
// registros das fontes externas (fase 6), gerados por scripts/importar-fontes.mjs; cada um traz fontes: [{ fonte, url, nota, natureza }]
import { EXTERNOS } from './externos.js';
// módulo, aula e função de cada obra importada, gerados por scripts/atribuir-obras.mjs
import { ATRIBUICOES, FUNCOES, CONFIANCA } from './atribuicoes.js';

export const CATEGORIAS = {
  livros: 'Livros e tratados', artigos: 'Artigos e ensaios', 'documentos-historicos': 'Documentos históricos',
  cartas: 'Cartas e manuscritos', cinema: 'Cinema', documentarios: 'Documentários', curtas: 'Curtas-metragens',
  series: 'Séries educativas', musica: 'Música e composições', gravacoes: 'Álbuns e gravações',
  concertos: 'Concertos e apresentações', compositores: 'Compositores', pintura: 'Pintura', escultura: 'Escultura',
  fotografia: 'Fotografia', arquitetura: 'Arquitetura', teatro: 'Teatro', opera: 'Ópera', bale: 'Balé',
  palestras: 'Palestras', conferencias: 'Conferências', cursos: 'Cursos e aulas', entrevistas: 'Entrevistas',
  podcasts: 'Podcasts', discursos: 'Discursos históricos', mapas: 'Mapas e atlas', acervos: 'Acervos e exposições digitais',
};

/** Tipos de relação entre registros: uma composição e suas gravações, um livro e sua adaptação, etc. */
export const RELACOES_OBRA = {
  'gravacao-de': 'Gravação de', 'adaptacao-de': 'Adaptação de', 'traducao-de': 'Tradução de',
  'edicao-de': 'Edição de', 'volume-de': 'Volume de', 'parte-de': 'Parte de', 'sobre': 'Estudo sobre',
};

/** Fontes de origem dos registros. */
export const FONTES = {
  acervo: 'Acervo original da Academia da Verdade (607 livros)',
  bibliografia: 'Bibliografia progressiva de uma disciplina',
  contraosacademicos: 'Contra os Acadêmicos — listas de leitura (contraosacademicos.com.br/lista)',
  'olavo-cof': 'Livros mencionados por Olavo de Carvalho no COF — compilação de fiatjaf',
};

const HONORIFICOS = /^(sao|santo|santa|sto\.?|sta\.?|papa|beato|beata)\s+/;
/** Chave de deduplicação: autor sem títulos honoríficos + título, sem acentos e sem pontuação. */
export const chaveObra = (autor, titulo) => {
  const n = (s) => normalizar(s).replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  return `${n(autor).replace(HONORIFICOS, '')}|${n(titulo)}`;
};
const slug = (s) => normalizar(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);

/** Categoria de uma entrada de bibliografia, pelo tipo declarado na própria disciplina. */
function categoriaBibliografia(b) {
  if (b.tipo === 'dados') return 'acervos';
  if (b.tipo === 'doutrina') return /^discurso/i.test(b.titulo) ? 'discursos' : 'documentos-historicos';
  return 'livros';
}

/** Aulas que citam cada livro do acervo nas referências ou nas leituras avançadas. */
const aulasPorLivro = {};
for (const a of AULAS_COMPLETAS) {
  for (const r of [...(a.referencias || []), ...(a.avancado?.leituras || [])]) {
    if (r.livro) (aulasPorLivro[r.livro] ||= new Set()).add(a.id);
  }
}


function montar() {
  const registros = new Map();
  // 1. Os 607 livros: um registro por livro, sem alterar o acervo.
  for (const l of LIVROS) {
    registros.set(`livro-${l.id}`, {
      id: `livro-${l.id}`, livro: l.id, titulo: l.titulo, criador: l.autor, categoria: 'livros',
      data: l.ano || '', pais: '', disciplinas: [], temas: [l.area].filter(Boolean), contexto: '',
      nivel: l.nivel ?? null, prereq: l.prereq || [], justificativa: l.objetivo || '',
      fontes: [{ fonte: 'acervo', nota: `Degrau ${l.degrau}` }], link: l.link || null, direitos: '',
      aulas: [...(aulasPorLivro[l.id] || [])], relacoes: [],
    });
  }
  const porChave = new Map(LIVROS.map((l) => [chaveObra(l.autor, l.titulo), `livro-${l.id}`]));
  // 2. Bibliografias das disciplinas: a mesma obra em várias disciplinas vira um só registro com várias fontes.
  for (const d of DISCIPLINAS) {
    for (const b of d.bibliografia) {
      const chave = chaveObra(b.autor, b.titulo);
      const id = b.livro && livroPorId[b.livro] ? `livro-${b.livro}` : porChave.get(chave) || `obra-${slug(`${b.autor} ${b.titulo}`)}`;
      porChave.set(chave, id);
      const fonte = { fonte: 'bibliografia', disciplina: d.id, nota: `${d.nome}${b.brasil ? ' · Brasil' : ''}` };
      const r = registros.get(id);
      if (r) {
        if (!r.disciplinas.includes(d.id)) r.disciplinas.push(d.id);
        r.fontes.push(fonte);
        if (!r.link && b.url) r.link = { url: b.url, rotulo: 'Acesso na fonte institucional' };
        continue;
      }
      registros.set(id, {
        id, livro: null, titulo: b.titulo, criador: b.autor, categoria: categoriaBibliografia(b),
        data: b.ano && b.ano !== '—' ? b.ano : '', pais: b.brasil ? 'Brasil' : '', disciplinas: [d.id], temas: [],
        contexto: '', nivel: null, prereq: [], justificativa: '', fontes: [fonte],
        link: b.url ? { url: b.url, rotulo: 'Acesso na fonte institucional' } : null, direitos: '', aulas: [], relacoes: [],
      });
    }
  }
  // 3. Registros externos, mesclados pela mesma chave quando já existirem.
  for (const e of EXTERNOS) {
    const chave = chaveObra(e.criador, e.titulo);
    const r = registros.get(porChave.get(chave));
    if (r && r.categoria === e.categoria) {
      r.fontes.push(...e.fontes);
      r.disciplinas = [...new Set([...r.disciplinas, ...e.disciplinas])];
      r.modulos = [...new Set([...(r.modulos || []), ...e.modulos])];
      continue;
    }
    registros.set(e.id, { livro: null, disciplinas: [], modulos: [], temas: [], aulas: [], relacoes: [], prereq: [], ...e });
    if (!r) porChave.set(chave, e.id);
  }
  return [...registros.values()];
}

const FUNCAO_LIVRO = { primaria: 'Obra do autor (fonte primária)', secundaria: 'Estudo e comentário', referencia: 'Obra de consulta (gramática, dicionário, referência)' };

/** Cada obra tem módulo, aula (quando há base), função e a confiança da atribuição; ver scripts/atribuir-obras.mjs. */
function atribuir(o) {
  const a = ATRIBUICOES[o.id];
  if (a) return { ...o, modulos: [a[0]], aula: a[1] || '', funcao: FUNCOES[a[2]], confianca: CONFIANCA[a[3]] };
  const l = o.livro && livroPorId[o.livro];
  if (l) return { ...o, modulos: l.modulo ? [l.modulo] : [], aula: '', funcao: FUNCAO_LIVRO[l.tipo] || '', confianca: 'acervo original' };
  return { ...o, modulos: [], aula: '', funcao: '', confianca: '' };
}

export const OBRAS = montar().map((o) => atribuir({ modulos: [], ...o }));
export const obraPorId = Object.fromEntries(OBRAS.map((o) => [o.id, o]));

// Obras de um módulo da escada, de um módulo de disciplina ou de uma aula; as ligadas a uma aula vêm primeiro.
const ordem = (a, b) => (b.aula ? 1 : 0) - (a.aula ? 1 : 0);
export const obrasDoModulo = (m) => OBRAS.filter((o) => o.modulos.includes(m)).sort(ordem);
export const obrasDaAula = (aula) => OBRAS.filter((o) => o.aula === aula);
/**
 * Ids das obras obrigatórias de um conjunto de módulos além dos livros do acervo (estes têm as leituras do degrau
 * e a comprovação próprias): livros das listas, filmes, músicas, áudios e as demais.
 */
export const obrasObrigatorias = (modulos) => OBRAS.filter((o) => !o.livro && o.modulos.some((m) => modulos.includes(m))).map((o) => o.id);
export const obrasDoDegrau = (degrau) => obrasObrigatorias(degrau.modulos);
export const obrasDaDisciplina = (d) => OBRAS.filter((o) => o.disciplinas.includes(d) && o.fontes.some((f) => f.fonte === 'contraosacademicos' || f.fonte === 'olavo-cof'));
export const contagemPorCategoria = Object.fromEntries(Object.keys(CATEGORIAS).map((c) => [c, OBRAS.filter((o) => o.categoria === c).length]));
