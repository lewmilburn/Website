import { readdirSync, writeFileSync } from 'node:fs';

const BASE = 'https://lewismilburn.com';
const pages = ['/', '/cv', '/research', '/development', '/gallery'];
const albums = readdirSync('src/photos', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => `/gallery/${d.name}`)
  .sort();

const urls = [...pages, ...albums].map((p) => `  <url><loc>${BASE}${p === '/' ? '/' : p}</loc></url>`).join('\n');
writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap: ${pages.length + albums.length} urls`);
