import * as fs from 'node:fs';
import * as path from 'node:path';
const outDir = '/output';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
// 1x1 transparent PNG / minimalist graphic binary
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
fs.writeFileSync(path.join(outDir, 'entry.png'), Buffer.from(pngBase64, 'base64'));
console.log('Passport page written');
