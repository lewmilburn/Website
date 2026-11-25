import { execFile } from 'node:child_process'
import { mkdtemp, readdir, rm, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import sharp from 'sharp'

const run = promisify(execFile)
const photosDir = path.resolve(import.meta.dirname, '..', 'src', 'photos')
const IMAGE = /\.(jpe?g|png|webp|avif)$/i
const VIDEO = /\.(mp4|m4v|mov|webm|ogv|mkv|avi|mpe?g|3gp)$/i
const tmp = await mkdtemp(path.join(os.tmpdir(), 'photos-'))

for (const album of await readdir(photosDir, { withFileTypes: true })) {
  if (!album.isDirectory()) continue
  const dir = path.join(photosDir, album.name)

  for (let file of await readdir(dir)) {
    const isVideo = VIDEO.test(file)
    if (file.endsWith('-thumb.jpg')) {
      await rm(path.join(dir, file))
      continue
    }
    if (!(isVideo || IMAGE.test(file)) || file.endsWith('-thumb.webp')) continue

    if (!isVideo && !/\.webp$/i.test(file)) {
      const original = path.join(dir, file)
      const converted = path.join(dir, file.replace(IMAGE, '.webp'))
      const lossless = /\.png$/i.test(file)
      await sharp(original).rotate().webp(lossless ? { lossless: true } : { quality: 100 }).toFile(converted)
      if ((await stat(converted)).size === 0) throw new Error(`${file}: conversion produced an empty file`)
      await rm(original)
      console.log(`[photos] ${album.name}/${file} -> webp`)
      file = path.basename(converted)
    }

    const thumb = path.join(dir, file.replace(isVideo ? VIDEO : IMAGE, '-thumb.webp'))
    if (existsSync(thumb)) continue

    let source = path.join(dir, file)
    if (isVideo) {
      try {
        await run('qlmanage', ['-t', '-s', '600', '-o', tmp, source])
        source = path.join(tmp, `${file}.png`)
      } catch {
        console.warn(`[photos] ${album.name}/${file}: couldn't make a video thumbnail (needs macOS)`)
        continue
      }
    }

    await sharp(source).resize({ width: 600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(thumb)
    console.log(`[photos] ${album.name}/${file} -> thumb`)
  }
}

await rm(tmp, { recursive: true, force: true })
