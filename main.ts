import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(fileURLToPath(new URL('.', import.meta.url)), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destination = join(outputDir, 'entry.png');

let sourceSize: number;
try {
  sourceSize = statSync(source).size;
} catch (cause) {
  throw new Error(`Cannot find or inspect source image: ${source}`, { cause });
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
  const copiedSize = statSync(destination).size;
  if (copiedSize !== sourceSize) {
    throw new Error(`Size mismatch: source ${sourceSize} bytes, copy ${copiedSize} bytes`);
  }
} catch (cause) {
  throw new Error(`Failed to copy and verify image at ${destination}`, { cause });
}
