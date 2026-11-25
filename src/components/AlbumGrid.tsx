import type { Album } from '../data/library';
import { AlbumMeta } from './AlbumMeta';

export function AlbumGrid({ albums }: { albums: Album[] }) {
  return (
    <div className="grid-3 gap-4">
      {albums.map((album) => (
        <a
          key={album.id}
          href={`/gallery/${album.id}`}
          className="group relative block aspect-4/3 overflow-hidden bg-neutral-900 no-underline"
        >
          <img
            src={album.cover}
            alt={album.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <h2>{album.title}</h2>
            <AlbumMeta album={album} className="text-sm text-neutral-200" />
          </div>
        </a>
      ))}
    </div>
  );
}
