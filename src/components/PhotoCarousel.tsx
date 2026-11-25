import { Icon } from './Icon';
import { useEffect, useState } from 'preact/hooks';
import type { Album, Photo } from '../data/library';
import { AlbumMeta } from './AlbumMeta';

interface Slide {
  photo: Photo;
  album: Album;
}

interface PhotoCarouselProps {
  albums: Album[];
  count?: number;
}

function pickRandom(albums: Album[], count: number): Slide[] {
  return albums
    .flatMap((album) => album.photos.filter((photo) => !photo.video).map((photo) => ({ photo, album })))
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function PhotoCarousel({ albums, count = 5 }: PhotoCarouselProps) {
  const [slides] = useState(() => pickRandom(albums, count));
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [index, total]);

  if (total === 0) return null;

  const mounted = new Set([(index - 1 + total) % total, index, (index + 1) % total]);
  const { album } = slides[index];

  return (
    <section className="relative aspect-video overflow-hidden bg-neutral-900 md:aspect-21/9">
      {slides.map(({ photo }, i) =>
        mounted.has(i) ? (
          <img
            key={photo.id}
            src={photo.src}
            alt={i === index ? photo.alt : ''}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null,
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/80 to-transparent p-4">
        <a href={`/gallery/${album.id}`} className="block text-white no-underline">
          <p className="txt-3xl font-heading font-bold">{album.title}</p>
          <AlbumMeta album={album} className="text-sm text-neutral-200" />
        </a>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={prev}
            className="nav-btn absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            <Icon name="fa-chevron-left" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={next}
            className="nav-btn absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-neutral-900 text-white hover:bg-neutral-800"
          >
            <Icon name="fa-chevron-right" />
          </button>
        </>
      )}
    </section>
  );
}
