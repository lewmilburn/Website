import { execFile } from 'node:child_process'
import { mkdtemp, readdir, rm } from 'node:fs/promises'
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

  for (const file of await readdir(dir)) {
    const isVideo = VIDEO.test(file)
    if (!(isVideo || IMAGE.test(file)) || file.endsWith('-thumb.jpg')) continue

    const thumb = path.join(dir, file.replace(isVideo ? VIDEO : IMAGE, '-thumb.jpg'))
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

    await sharp(source).resize({ width: 600, withoutEnlargement: true }).jpeg({ quality: 82 }).toFile(thumb)
    console.log(`[photos] ${album.name}/${file} -> thumb`)
  }
}

await rm(tmp, { recursive: true, force: true })
