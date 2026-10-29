// Gera leituras-em-ordem.md a partir dos mesmos dados que o aplicativo usa (data/fichas.js).
// Uso: node scripts/leituras-em-ordem.mjs   (regrava o arquivo na raiz do repositório)
// O teste "documento da ordem de leitura" compara o arquivo com gerar() e falha se divergirem.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { DEGRAUS } from '../app/data/curriculo.js';
import { TRILHA, fichaDe } from '../app/data/fichas.js';
import { livroPorId } from '../app/data/livros.js';

export const ARQUIVO = fileURLToPath(new URL('../leituras-em-ordem.md', import.meta.url));

export function gerar() {
  const linhas = ['# Academia da Verdade — sequência de leitura', '',
    `${TRILHA.length} títulos obrigatórios, numa única trilha de ${DEGRAUS.length} degraus. Gerado de app/data (não edite à mão: rode \`node scripts/leituras-em-ordem.mjs\`).`,
    'Cada linha traz o identificador, os pré-requisitos obrigatórios e a justificativa da posição. "Dados a confirmar" marca registros cuja edição ou título ainda não foi verificado.', ''];
  let n = 0;
  for (const d of DEGRAUS) {
    linhas.push(`## Degrau ${d.n} — ${d.nome}`, '', `${d.objetivo}`, '');
    for (const l of TRILHA.filter((x) => x.degrau === d.n)) {
      const f = fichaDe(l.id);
      const extras = [l.ano, `dificuldade ${l.nivel}/5`, l.verificacao === 'a confirmar' ? 'dados a confirmar' : ''].filter(Boolean).join(' · ');
      linhas.push(`${++n}. **${l.titulo}** — ${l.autor} (${extras}) \`${l.id}\``);
      if (f.obrigatorias.length) linhas.push(`   - Pré-requisitos: ${f.obrigatorias.map((p) => `${livroPorId[p].titulo}${l.porque?.[p] ? ` (${l.porque[p]})` : ''}`).join('; ')}`);
      linhas.push(`   - Por que aqui: ${f.justificativa.replace(/^Faz parte do degrau [^:]+: [^.]+\.\s*/, '') || 'pressupõe apenas os degraus anteriores.'}`);
    }
    linhas.push('');
  }
  return linhas.join('\n');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  writeFileSync(ARQUIVO, gerar());
  console.log(`leituras-em-ordem.md: ${TRILHA.length} títulos`);
}
