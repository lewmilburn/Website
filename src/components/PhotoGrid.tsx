import type { Photo } from '../data/library';

export function PhotoGrid({ photos, onSelect }: { photos: Photo[]; onSelect: (index: number) => void }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          type="button"
          aria-label={photo.video ? `Play video ${photo.alt}` : photo.alt}
          onClick={() => onSelect(index)}
          className="relative aspect-square overflow-hidden bg-neutral-900"
        >
          {photo.thumb && (
            <img
              src={photo.thumb}
              alt={photo.video ? '' : photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          )}
          {photo.video && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-circle-play text-5xl text-white drop-shadow-lg" />
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
