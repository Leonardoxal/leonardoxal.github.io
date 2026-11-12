// Biblioteca e mediateca: registro único de obras de todos os tipos de mídia, com as fontes em que cada uma aparece.
// Os 607 livros do acervo original entram sem alteração (o registro aponta para eles). As demais obras vêm das
// bibliografias das disciplinas; registros de outras fontes (fase 6) entram em EXTERNOS com a fonte declarada.
// Nada aqui é inventado: campos sem informação ficam vazios, e a interface mostra "não informado".
import { LIVROS, livroPorId } from './livros.js';
import { DISCIPLINAS } from './disciplinas.js';
import { MODULOS, todasAulas } from './curriculo.js';
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
      const fonte = { fonte: 'bibliografia', disciplina: d.id, nota: `${d.nome}${b.brasil ? ' · Brasil' : ''}`, etapa: b.etapa, tipo: b.tipo };
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
const FUNCAO_BIBLIOGRAFIA = { primaria: 'Obra do autor (fonte primária)', estudo: 'Estudo e comentário', manual: 'Introdução e manual de base', dados: 'Fonte de dados e consulta', doutrina: 'Documento da Igreja' };
const discPorId = Object.fromEntries(DISCIPLINAS.map((d) => [d.id, d]));

/** Módulo e aula de uma obra da bibliografia de uma disciplina: os da etapa do percurso em que ela é listada. */
function porEtapa(fonte) {
  const d = discPorId[fonte.disciplina];
  const aulaId = d?.aulas?.[fonte.etapa]?.find((a) => todasAulas.some((x) => x.id === a));
  const modulo = aulaId ? todasAulas.find((x) => x.id === aulaId).modulo : MODULOS.find((m) => m.disciplina === fonte.disciplina)?.id;
  return modulo ? { modulo, aula: aulaId || '' } : null;
}

/** Cada obra tem módulo, aula (quando há base), função e a confiança da atribuição; ver scripts/atribuir-obras.mjs. */
function atribuir(o) {
  const a = ATRIBUICOES[o.id];
  if (a) return { ...o, modulos: [a[0]], aula: a[1] || '', funcao: FUNCOES[a[2]], confianca: CONFIANCA[a[3]] };
  const l = o.livro && livroPorId[o.livro];
  if (l) return { ...o, modulos: l.modulo ? [l.modulo] : [], aula: '', funcao: FUNCAO_LIVRO[l.tipo] || '', confianca: 'acervo original' };
  const bib = o.fontes.find((f) => f.fonte === 'bibliografia');
  const e = bib && porEtapa(bib);
  if (e) return { ...o, modulos: [e.modulo], aula: '', funcao: FUNCAO_BIBLIOGRAFIA[bib.tipo] || '', confianca: 'etapa do percurso' };
  return { ...o, modulos: [], aula: '', funcao: '', confianca: '' };
}

export const OBRAS = montar().map((o) => atribuir({ modulos: [], ...o }));
export const obraPorId = Object.fromEntries(OBRAS.map((o) => [o.id, o]));

// Obras de um módulo da escada, de um módulo de disciplina ou de uma aula; as ligadas a uma aula vêm primeiro.
const ordem = (a, b) => (b.aula ? 1 : 0) - (a.aula ? 1 : 0);
export const obrasDoModulo = (m) => OBRAS.filter((o) => o.modulos.includes(m)).sort(ordem);
export const obrasDaAula = (aula) => OBRAS.filter((o) => o.aula === aula);
/** Obras ligadas às aulas de um conceito do Atlas (sem repetir). */
export const obrasDoConceito = (c) => [...new Set(c.aulas.flatMap((a) => obrasDaAula(a)))];
/** Obras de um autor: o sobrenome do autor aparece no criador da obra (sem os livros do acervo, já listados à parte). */
export const obrasDoAutor = (nome) => {
  const chave = normalizar(nome.replace(/^(Santo|São) /, ''));
  return OBRAS.filter((o) => !o.livro && o.criador && normalizar(o.criador).includes(chave));
};
/**
 * Ids das obras obrigatórias de um conjunto de módulos além dos livros do acervo (estes têm as leituras do degrau
 * e a comprovação próprias): livros das listas, filmes, músicas, áudios e as demais.
 */
export const obrasObrigatorias = (modulos) => OBRAS.filter((o) => !o.livro && o.modulos.some((m) => modulos.includes(m))).map((o) => o.id);
export const obrasDoDegrau = (degrau) => obrasObrigatorias(degrau.modulos);
export const obrasDaDisciplina = (d) => OBRAS.filter((o) => o.disciplinas.includes(d) && o.fontes.some((f) => f.fonte === 'contraosacademicos' || f.fonte === 'olavo-cof'));
/**
 * Método de estudo por formato: cada tipo de obra pede um modo próprio de estudar (proposta pedagógica da Academia,
 * não regra de autor citado). Antes, durante e depois, e a evidência que mostra que a obra foi compreendida.
 */
export const METODOS_POR_FORMATO = {
  texto: { categorias: ['livros', 'artigos', 'documentos-historicos', 'cartas'], nome: 'Texto escrito',
    antes: 'Leia o índice, a introdução e a conclusão; anote o que espera encontrar e o contexto (autor, data, a quem escreve).',
    durante: 'Marque a tese de cada parte, os termos que o autor define e os argumentos; separe o que o autor afirma do que você pensa.',
    depois: 'Resuma com palavras próprias, liste as perguntas que ficaram e compare com outra obra sobre o mesmo tema.',
    evidencia: 'Um resumo de uma página e a reconstrução do argumento principal em passos.' },
  audiovisual: { categorias: ['cinema', 'documentarios', 'curtas', 'series'], nome: 'Filme, documentário ou série',
    antes: 'Saiba o contexto da produção (diretor, ano, país) sem ler a crítica antes; se for documentário, veja quem produziu e com que fontes.',
    durante: 'Anote as cenas que decidem a história, as escolhas dos personagens e os recursos de linguagem (enquadramento, música, montagem).',
    depois: 'Separe o que a obra mostra do que é interpretação; num documentário, confira as afirmações em fontes independentes. Em séries, faça isso por arco, não por episódio.',
    evidencia: 'Uma análise de uma cena e das escolhas de um personagem, com as consequências na história.' },
  musica: { categorias: ['musica', 'gravacoes', 'concertos', 'compositores', 'opera', 'bale', 'teatro'], nome: 'Música e artes da cena',
    antes: 'Leia sobre a forma (missa, sinfonia, canto gregoriano, ópera, peça de teatro), a época e, se houver, o texto cantado ou falado.',
    durante: 'Ouça mais de uma vez: primeiro inteira, depois por partes, seguindo a forma, os temas e os instrumentos.',
    depois: 'Descreva o que ouviu com termos próprios da música e, se for música sacra, o lugar dela na liturgia.',
    evidencia: 'Uma descrição da estrutura da peça e do efeito de uma passagem escolhida.' },
  visual: { categorias: ['pintura', 'escultura', 'fotografia', 'arquitetura'], nome: 'Artes visuais e arquitetura',
    antes: 'Saiba o autor, a data, o lugar e para que a obra foi feita (altar, palácio, igreja, museu).',
    durante: 'Descreva antes de interpretar: composição, luz, cor, materiais; depois, os símbolos e as cenas representadas.',
    depois: 'Relacione a obra à época e ao seu uso; numa igreja, ao espaço litúrgico.',
    evidencia: 'Uma descrição organizada (do conjunto ao detalhe) e a identificação dos símbolos com a fonte.' },
  fala: { categorias: ['palestras', 'conferencias', 'entrevistas', 'podcasts', 'discursos'], nome: 'Palestra, entrevista ou discurso',
    antes: 'Saiba quem fala, quando e para quem; isso muda o sentido.',
    durante: 'Anote a tese, os argumentos e os exemplos; marque o que é dado e o que é opinião.',
    depois: 'Verifique as afirmações factuais em fontes e resuma a posição do autor com justiça antes de concordar ou discordar.',
    evidencia: 'Um resumo fiel da posição do autor e uma avaliação dos argumentos.' },
  curso: { categorias: ['cursos'], nome: 'Curso ou aula',
    antes: 'Veja o plano do curso e os pré-requisitos; marque as datas de revisão.',
    durante: 'Faça os exercícios no dia, sem só assistir; anote as dúvidas.',
    depois: 'Revise depois de alguns dias (revisão espaçada) e explique o conteúdo a alguém, sem consultar.',
    evidencia: 'Exercícios resolvidos e uma explicação do conteúdo com palavras próprias.' },
  consulta: { categorias: ['mapas', 'acervos'], nome: 'Mapa, atlas ou acervo',
    antes: 'Defina a pergunta que você quer responder com a consulta.',
    durante: 'Registre a fonte exata (coleção, item, escala, data) de cada informação.',
    depois: 'Junte o que achou com o que já sabia e diga o que a fonte permite e o que não permite concluir.',
    evidencia: 'A resposta à pergunta, com as referências dos itens consultados.' },
};
export const formatoDaCategoria = (categoria) => Object.keys(METODOS_POR_FORMATO).find((k) => METODOS_POR_FORMATO[k].categorias.includes(categoria)) ?? null;
export const metodoDaCategoria = (categoria) => METODOS_POR_FORMATO[formatoDaCategoria(categoria)] ?? null;

/**
 * Possíveis duplicatas para revisão humana: obras com o mesmo título (sem acentos, pontuação nem artigo inicial)
 * que ficaram em registros separados. Pode ser a mesma obra com o autor grafado de outro jeito, ou obras diferentes
 * de mesmo nome: só uma pessoa decide; nada é fundido automaticamente.
 */
export function possiveisDuplicatas(obras = OBRAS) {
  const titulo = (t) => normalizar(t).replace(/[^\p{L}\p{N} ]/gu, ' ').replace(/^(o|a|os|as|the|le|la|el|um|uma) /, '').replace(/\s+/g, ' ').trim();
  const grupos = new Map();
  for (const o of obras) { const k = titulo(o.titulo); if (k.length >= 4) grupos.set(k, [...(grupos.get(k) ?? []), o]); }
  return [...grupos.values()].filter((g) => g.length > 1);
}

// Palavras do campo "criador" que não identificam o autor.
const NAO_AUTOR = new Set(['santo', 'santa', 'conforme', 'edicao', 'sobre', 'testemunho', 'traducao', 'organizacao', 'varios', 'autores', 'hipona']);
// Grafias diferentes do mesmo autor que aparecem no catálogo.
const GRAFIAS = { espinosa: 'spinoza', gaius: 'gaio' };
const nomesDoCriador = (c) => new Set(normalizar(c ?? '').replace(/[^\p{L} ]/gu, ' ').split(/\s+/).map((p) => GRAFIAS[p] ?? p).filter((p) => p.length >= 4 && !NAO_AUTOR.has(p)));

/**
 * Sugestão para um grupo de possíveis duplicatas: junta os registros cujos criadores têm um nome em comum
 * (ex.: "Boécio" e "Severino Boécio"). Cada subgrupo com mais de um registro é provavelmente a mesma obra;
 * subgrupos diferentes são provavelmente obras distintas de mesmo título. É só sugestão: uma pessoa decide.
 */
export function sugerirGrupos(grupo) {
  const subgrupos = [];
  for (const o of grupo) {
    const nomes = nomesDoCriador(o.criador);
    const alvo = subgrupos.find((s) => [...nomes].some((n) => s.nomes.has(n)));
    if (alvo) { alvo.obras.push(o); nomes.forEach((n) => alvo.nomes.add(n)); } else subgrupos.push({ nomes, obras: [o] });
  }
  return subgrupos.map((s) => s.obras);
}

export const contagemPorCategoria = Object.fromEntries(Object.keys(CATEGORIAS).map((c) => [c, OBRAS.filter((o) => o.categoria === c).length]));
