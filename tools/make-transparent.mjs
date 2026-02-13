import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/images/jiaojiao-cutout.jpg', import.meta.url));
const output = fileURLToPath(new URL('../public/images/jiaojiao-cutout.png', import.meta.url));

// Key out near-white background to transparency.
// Higher threshold removes more white; lower preserves more edge.
const THRESHOLD = 248;

const { data: alpha, info } = await sharp(input)
  .greyscale()
  .threshold(THRESHOLD)
  .negate()
  .raw()
  .toBuffer({ resolveWithObject: true });

await sharp(input)
  .removeAlpha()
  .ensureAlpha() // add fully-opaque alpha first
  .joinChannel(alpha, { raw: { width: info.width, height: info.height, channels: 1 } })
  .png({ compressionLevel: 9 }) // IMPORTANT: do not palette-quantize, keep alpha
  .toFile(output);

console.log('Wrote', output, info.width, info.height);
