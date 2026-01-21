import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const inputFile = path.join(publicDir, 'hero-bg-full.png');
const outputFile = path.join(publicDir, 'hero-bg-full.webp');

async function convert() {
    console.log(`Converting hero-bg-full.png to webp...`);
    await sharp(inputFile)
        .webp({ quality: 90 }) // High quality for hero background
        .toFile(outputFile);
    console.log(`Successfully created hero-bg-full.webp`);
}

convert().catch(console.error);
