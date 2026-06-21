import sharp from '../node_modules/sharp/lib/index.js';
import { readFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cards = ['Phases', 'Bet', 'Criteria', 'Termination'];
const dirs = [
  { src: '../../public/zh/card', out: '../../public/zh/card' },
  { src: '../../public/en/card', out: '../../public/en/card' },
];

for (const { src, out } of dirs) {
  for (const card of cards) {
    const svgPath = resolve(__dirname, src, `${card}.svg`);
    const pngPath = resolve(__dirname, out, `${card}.png`);
    const svg = readFileSync(svgPath);
    await sharp(svg, { density: 144 })
      .resize(1040, 660)
      .png({ compressionLevel: 9 })
      .toFile(pngPath);
    console.log(`✓ ${out}/${card}.png`);
  }
}
console.log('Done — 8 PNGs rendered.');
