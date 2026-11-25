import { Icon } from './Icon';
import { useEffect } from 'preact/hooks';
import type { Photo } from '../data/library';

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index];
  const prev = () => onNavigate((index - 1 + photos.length) % photos.length);
  const next = () => onNavigate((index + 1) % photos.length);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.target instanceof HTMLVideoElement) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const btn = 'nav-btn absolute bg-neutral-900 text-white hover:bg-neutral-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={onClose}>
      <button type="button" aria-label="Close" onClick={onClose} className={`${btn} top-4 right-4`}>
        <Icon name="fa-xmark" />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className={`${btn} left-2 sm:left-6`}
      >
        <Icon name="fa-chevron-left" />
      </button>

      {photo.video ? (
        <video
          key={photo.id}
          src={photo.src}
          poster={photo.thumb}
          controls
          autoPlay
          playsInline
          className="max-h-full max-w-full"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      <button
        type="button"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className={`${btn} right-2 sm:right-6`}
      >
        <Icon name="fa-chevron-right" />
      </button>
    </div>
  );
}
