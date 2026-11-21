// "The World in One Day" — news-image-20261120 entry (Node 22, stdlib only).
//
// The entry is a newspaper front page that sums up the world news of
// Friday 20 November 2026 in one image: the Trump–Xi–Putin summit in
// Shenzhen, the ICJ's genocide ruling on Myanmar, the overnight strikes
// on Kyiv's bridges, the Houthi missile that damaged a Riyadh tower,
// Anthropic's Nasdaq debut as markets slid, and Russian missiles
// violating Polish airspace during the overnight strikes on Kyiv.
// The picture was composed for this competition and is stored beside
// this program as entry.png (JPEG bytes, 1024x1024,
// under 1 MiB); this program only carries those exact bytes to the
// output directory, so both graded runs write identical output.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, image);

// Fail loudly instead of silently shipping a truncated file.
if (statSync(outPath).size !== image.length) {
  throw new Error(`entry.png written incomplete: ${statSync(outPath).size} of ${image.length} bytes`);
}
