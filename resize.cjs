const sharp = require('sharp');

async function processFiles() {
  const files = [
    { in: '/Users/Cyanide/.gemini/antigravity/brain/81df2a0b-2923-45ce-872b-e0dbf3cce043/diagnostics_service_1780173433484.png', out: 'diagnostics.webp' },
    { in: '/Users/Cyanide/.gemini/antigravity/brain/81df2a0b-2923-45ce-872b-e0dbf3cce043/brakes_service_1780173449871.png', out: 'brakes.webp' },
    { in: '/Users/Cyanide/.gemini/antigravity/brain/81df2a0b-2923-45ce-872b-e0dbf3cce043/engine_service_1780173464330.png', out: 'engine.webp' },
    { in: '/Users/Cyanide/.gemini/antigravity/brain/81df2a0b-2923-45ce-872b-e0dbf3cce043/maintenance_service_1780173483895.png', out: 'maintenance.webp' },
  ];

  for (const f of files) {
    try {
      await sharp(f.in)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(`/Users/Cyanide/.gemini/antigravity/scratch/peninsula-mechanic-react/public/services/${f.out}`);
      console.log(`Successfully converted ${f.out}`);
    } catch (err) {
      console.error(`Error processing ${f.out}:`, err);
    }
  }
}

processFiles();
