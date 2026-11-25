import { useEffect, useState } from 'preact/hooks';
import { useLocation, useRoute } from 'preact-iso';
import { albums } from '../data/library';
import { TopBar } from '../components/TopBar';
import { PageHeader } from '../components/PageHeader';
import { AlbumMap } from '../components/AlbumMap';
import { AlbumMeta } from '../components/AlbumMeta';
import { Button } from '../components/Button';
import { AlbumGrid } from '../components/AlbumGrid';
import { PhotoCarousel } from '../components/PhotoCarousel';
import { PhotoGrid } from '../components/PhotoGrid';
import { Lightbox } from '../components/Lightbox';

export function Gallery({ onMenuClick }: { onMenuClick: () => void }) {
  const { params } = useRoute();
  const { route } = useLocation();
  const albumId = params.album;
  const album = albums.find((a) => a.id === albumId);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => setLightbox(null), [albumId]);

  const back = (
    <div className="flex justify-center pb-8">
      <Button onClick={() => route('/gallery')}>
        <i className="fa-solid fa-arrow-left" /> Back to gallery
      </Button>
    </div>
  );

  return (
    <>
      <TopBar onMenuClick={onMenuClick} />
      <main className="p-std">
        {!albumId && (
          <>
            <PageHeader title="Gallery" />
            <div className="pb-8">
              <PhotoCarousel albums={albums} />
            </div>
            <AlbumGrid albums={albums} />
            <div className="pt-8">
              <AlbumMap albums={albums} />
            </div>
          </>
        )}

        {albumId && !album && (
          <>
            <PageHeader title="Album not found" />
            {back}
          </>
        )}

        {album && (
          <>
            <PageHeader title={album.title}>
              <AlbumMeta album={album} className="txt-2xl text-neutral-400" />
            </PageHeader>
            {back}
            {album.description && <p className="txt-2xl pb-8 text-center">{album.description}</p>}
            <PhotoGrid photos={album.photos} onSelect={setLightbox} />
            {lightbox !== null && (
              <Lightbox
                photos={album.photos}
                index={lightbox}
                onClose={() => setLightbox(null)}
                onNavigate={setLightbox}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
