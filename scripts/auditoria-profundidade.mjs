// Auditoria de profundidade das aulas (prompt mestre, Partes XI, XII e XXI). Não altera nada.
// Uso: node scripts/auditoria-profundidade.mjs [--aulas]   (--aulas lista as faltas de cada aula)
// Mede presença e extensão dos 18 itens; "atendido" ainda exige leitura humana, "faltando" é lacuna certa.
import { AULAS_COMPLETAS } from '../app/data/aulas/index.js';
import { MODULOS, todasAulas } from '../app/data/curriculo.js';
import { ITENS_PROFUNDIDADE, LIMITES, aulaExpositiva, profundidadeDaAula, coberturaTeologia } from '../app/profundidade.js';
import { OBRAS, obraPronta, verificacaoDaObra, ESTADOS_VERIFICACAO } from '../app/data/mediateca.js';

const TEOLOGICOS = /^(m1|m2|m2b|tg\d+)$/;
const moduloDe = Object.fromEntries(todasAulas.map((a) => [a.id, a.modulo]));
const aulas = AULAS_COMPLETAS.filter(aulaExpositiva);
const medidas = aulas.map((a) => ({ id: a.id, titulo: a.titulo, modulo: moduloDe[a.id], ...profundidadeDaAula(a) }));
const completas = medidas.filter((m) => m.atendidos === m.total);

console.log(`# Profundidade das aulas: ${aulas.length} aulas expositivas (${AULAS_COMPLETAS.length - aulas.length} de avaliação ficam fora)`);
console.log(`Limites: ${Object.entries(LIMITES).map(([k, v]) => `${k} ${v}`).join(', ')}.`);
console.log(`Aulas com os 18 itens: ${completas.length} de ${aulas.length}.\n`);

console.log('## Itens faltando, do mais ao menos frequente');
const falta = (ok) => aulas.filter((a) => !ok(a)).length;
for (const [, rotulo, ok] of [...ITENS_PROFUNDIDADE].sort((x, y) => falta(y[2]) - falta(x[2]))) {
  const n = falta(ok);
  console.log(`- ${rotulo}: falta em ${n} (${Math.round((n / aulas.length) * 100)}%)`);
}

console.log('\n## Teologia (módulos m1, m2, m2b, tg1 a tg8)');
const teo = medidas.filter((m) => TEOLOGICOS.test(m.modulo || ''));
for (const mod of MODULOS.filter((m) => TEOLOGICOS.test(m.id))) {
  const ms = teo.filter((m) => m.modulo === mod.id);
  const media = ms.length ? Math.round((ms.reduce((s, m) => s + m.atendidos, 0) / ms.length) * 10) / 10 : 0;
  const pal = ms.length ? Math.round(ms.reduce((s, m) => s + m.palavras, 0) / ms.length) : 0;
  console.log(`- ${mod.id} ${mod.titulo}: ${ms.length} aulas, média ${media}/18 itens, explicação média ${pal} palavras`);
}

console.log('\n## Os 25 campos da Teologia (por palavras-chave nos títulos; aproximação)');
const cobertura = coberturaTeologia(todasAulas.filter((a) => TEOLOGICOS.test(a.modulo)));
for (const c of cobertura) console.log(`- ${c.campo}: ${c.aulas.length} aula(s)${c.aulas.length <= 1 ? '  <- sem aula ou só uma' : ''}${c.aulas.length ? ` (${c.aulas.slice(0, 6).join(', ')}${c.aulas.length > 6 ? '…' : ''})` : ''}`);

console.log('\n## Obras: verificação da ligação com o currículo (Parte XIII)');
const contagem = {};
for (const o of OBRAS) { const v = verificacaoDaObra(o); contagem[v] = (contagem[v] || 0) + 1; }
for (const [k, e] of Object.entries(ESTADOS_VERIFICACAO)) console.log(`- ${e.nome}: ${contagem[k] || 0}`);
console.log(`- Total: ${OBRAS.length}; fichas completas (contexto e aula): ${OBRAS.filter(obraPronta).length}`);

if (process.argv.includes('--aulas')) {
  console.log('\n## Faltas por aula');
  for (const m of medidas.filter((x) => x.faltas.length)) console.log(`- ${m.id} ${m.titulo} (${m.atendidos}/18): ${m.faltas.join('; ')}`);
}
