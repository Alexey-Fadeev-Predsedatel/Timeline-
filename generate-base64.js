const fs = require('fs');
const files = fs.readdirSync('public/media');
let out = '';
for (const file of files) {
  if (file === '.' || file === '..') continue;
  const data = fs.readFileSync('public/media/' + file);
  const ext = file.split('.').pop().toLowerCase();
  let mime = 'image/jpeg';
  if (ext === 'png') mime = 'image/png';
  if (ext === 'mov') mime = 'video/quicktime';
  if (ext === 'mp4') mime = 'video/mp4';
  const b64 = data.toString('base64');
  const name = file.replace(/[^a-zA-Z0-9]/g, '_');
  out += `export const ${name} = "data:${mime};base64,${b64}";\n`;
}
fs.writeFileSync('src/mediaData.ts', out);
