import sharp from 'sharp';

import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/images/jiaojiao-cutout.jpg', import.meta.url));
const output = fileURLToPath(new URL('../public/images/jiaojiao-cutout.png', import.meta.url));

// Key out near-white background to transparency.
// Tune threshold 245~252 if needed.
const THRESHOLD = 250;

const { data: mask, info } = await sharp(input)
  .greyscale()
  .threshold(THRESHOLD)
  .negate()
  .raw()
  .toBuffer({ resolveWithObject: true });

await sharp(input)
  .removeAlpha()
  .joinChannel(mask, { raw: { width: info.width, height: info.height, channels: 1 } })
  .png({ compressionLevel: 9, palette: true })
  .toFile(output);

console.log('Wrote', output.pathname, info.width, info.height);
