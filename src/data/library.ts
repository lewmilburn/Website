export interface Photo {
  id: string;
  thumb: string;
  src: string;
  alt: string;
  video?: boolean;
}

export interface Album {
  id: string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
  cover: string;
  photos: Photo[];
}

type Manifest = Partial<Pick<Album, 'title' | 'date' | 'location' | 'description'>>;

const files = import.meta.glob<string>(['/src/photos/*/*', '!/src/photos/*/manifest.json'], {
  eager: true,
  query: '?url',
  import: 'default',
});
const manifests = import.meta.glob<Manifest>('/src/photos/*/manifest.json', { eager: true, import: 'default' });

const VIDEO = /\.(mp4|m4v|mov|webm|ogv|mkv|avi|mpe?g|3gp)$/i;
const titleCase =(s: string) => s.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const grouped: Record<string, { full: Record<string, string>; thumb: Record<string, string> }> = {};
for (const [path, url] of Object.entries(files)) {
  const [, , , albumId, file] = path.split('/');
  const name = file.replace(/\.\w+$/, '');
  const group = (grouped[albumId] ??= { full: {}, thumb: {} });
  if (name.endsWith('-thumb')) group.thumb[name.slice(0, -6)] = url;
  else group.full[name] = url;
}

export const albums: Album[] = Object.entries(grouped)
  .map(([id, { full, thumb }]) => {
    const photos = Object.keys(full)
      .sort()
      .map((name): Photo => {
        const video = VIDEO.test(full[name]);
        return {
          id: `${id}-${name}`,
          thumb: thumb[name] ?? (video ? '' : full[name]),
          src: full[name],
          alt: titleCase(name),
          video,
        };
      });
    return {
      id,
      title: titleCase(id),
      ...manifests[`/src/photos/${id}/manifest.json`],
      cover: photos.find((p) => p.thumb)?.thumb ?? '',
      photos,
    };
  })
  .sort((a, b) => (b.date ?? b.id).localeCompare(a.date ?? a.id));
