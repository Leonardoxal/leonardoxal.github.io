// Servidor estático mínimo para testar o app localmente: node servir.mjs  →  http://localhost:5179
// Envolve index.html no mesmo esqueleto que o claude.ai adiciona ao publicar.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const RAIZ = join(import.meta.dirname, 'app');
const TIPOS = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

createServer(async (req, res) => {
  const caminho = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  const arquivo = join(RAIZ, caminho || 'index.html');
  if (!arquivo.startsWith(RAIZ)) { res.writeHead(403).end(); return; }
  try {
    let corpo = await readFile(arquivo);
    if (arquivo.endsWith('index.html')) corpo = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>${corpo}</body></html>`;
    res.writeHead(200, { 'Content-Type': `${TIPOS[extname(arquivo)] || 'application/octet-stream'}; charset=utf-8` }).end(corpo);
  } catch { res.writeHead(404).end('não encontrado'); }
}).listen(5179, '127.0.0.1');
