import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function convert() {
    const files = ['logomarqlet.png', 'marqletdashboard.png'];

    for (const file of files) {
        const inputPath = path.join(publicDir, file);
        const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

        if (fs.existsSync(inputPath)) {
            console.log(`Converting ${file} to webp...`);
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Successfully created ${path.basename(outputPath)}`);
        } else {
            console.error(`File not found: ${inputPath}`);
        }
    }
}

convert().catch(console.error);
