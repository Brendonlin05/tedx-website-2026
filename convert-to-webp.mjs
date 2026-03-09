import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'

const PUBLIC_DIR = './public'
const QUALITY = 80
const EXTS = ['.png', '.jpg', '.jpeg']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else if (EXTS.includes(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

const files = await walk(PUBLIC_DIR)
console.log(`Converting ${files.length} images to WebP at ${QUALITY}% quality...\n`)

for (const file of files) {
  const out = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  await sharp(file).webp({ quality: QUALITY }).toFile(out)
  const orig = (await import('fs')).statSync(file).size
  const next = (await import('fs')).statSync(out).size
  const saved = Math.round((1 - next / orig) * 100)
  console.log(`  ${file.replace('./public/', '')}  →  ${basename(out)}  (${saved}% smaller)`)
  await unlink(file)
}

console.log('\nDone! All originals deleted.')
