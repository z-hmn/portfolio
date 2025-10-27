import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const OUTPUT_PATH = path.resolve('public', 'favicon.ico');
const SIZES = [16, 32, 48];
const BG = '#0a2a66';
const FG = '#ffffff';

function buildSvg(size) {
  const view = 256; // vector base so scaling is crisp
  const fontSize = 200; // bold, large letter
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${view}" height="${view}" viewBox="0 0 ${view} ${view}">
  <rect width="100%" height="100%" fill="${BG}"/>
  <text x="50%" y="50%" fill="${FG}" font-size="${fontSize}" font-weight="800" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif">Z</text>
</svg>`;
}

async function rasterizePngs() {
  const pngBuffers = [];
  for (const size of SIZES) {
    const svg = buildSvg(size);
    const buf = await sharp(Buffer.from(svg))
      .resize(size, size, { fit: 'contain' })
      .png({ palette: true, colors: 64, compressionLevel: 9, effort: 10 })
      .toBuffer();
    pngBuffers.push(buf);
  }
  return pngBuffers;
}

async function main() {
  const pngs = await rasterizePngs();
  const ico = await pngToIco(pngs);
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, ico);
  const bytes = ico.byteLength;
  const kib = (bytes / 1024).toFixed(1);
  console.log(`Wrote ${OUTPUT_PATH} (${kib} KiB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


