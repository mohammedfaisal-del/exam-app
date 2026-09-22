const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const UPLOAD_DIR = path.join(__dirname, '../uploads/questions');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

async function processAndSaveImage(buffer) {
  const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
  const outputPath = path.join(UPLOAD_DIR, filename);

  await sharp(buffer)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath);

  return `/uploads/questions/${filename}`;
}

function deleteImage(imageUrl) {
  if (!imageUrl) return;
  try {
    const filename = path.basename(imageUrl);
    const filePath = path.join(UPLOAD_DIR, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error('Failed to delete image file:', err.message);
  }
}

module.exports = { processAndSaveImage , deleteImage };