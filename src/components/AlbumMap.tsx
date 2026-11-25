import { useEffect, useRef } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import type { Album } from '../data/library';

maplibregl.setWorkerUrl(workerUrl);

type Coords = [number, number];

interface TownResult {
  latitude: number;
  longitude: number;
  admin1?: string;
  admin2?: string;
  country?: string;
}

async function findTown(name: string, location: string): Promise<Coords | null> {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=10&language=en`,
  );
  const results: TownResult[] = (await res.json()).results ?? [];
  const text = location.toLowerCase();
  const match =
    results.find((r) => [r.admin1, r.admin2, r.country].some((part) => part && text.includes(part.toLowerCase()))) ??
    results[0];
  return match ? [match.longitude, match.latitude] : null;
}

async function findFeature(name: string): Promise<Coords | null> {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(name)}&format=json&limit=1`);
  const [match] = await res.json();
  return match ? [Number(match.lon), Number(match.lat)] : null;
}

async function geocode(location: string): Promise<Coords | null> {
  const cacheKey = `geo2:${location}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  try {
    const name = location.split(',')[0].trim();
    const coords = (await findTown(name, location)) ?? (await findFeature(name));
    if (coords) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify(coords));
      } catch {}
    }
    return coords;
  } catch {
    return null;
  }
}

export function AlbumMap({ albums }: { albums: Album[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { route } = useLocation();

  useEffect(() => {
    if (!container.current) return;
    let cancelled = false;

    const map = new maplibregl.Map({
      container: container.current,
      style: 'https://tiles.openfreemap.org/styles/dark',
      center: [-2.5, 54],
      zoom: 5,
      maxZoom: 10,
      cooperativeGestures: true,
    });

    Promise.all(
      albums
        .filter((a) => a.location)
        .map(async (album) => ({ album, coords: await geocode(album.location!) })),
    ).then((found) => {
      if (cancelled) return;
      const placed = found.filter((f): f is { album: Album; coords: Coords } => f.coords !== null);
      if (placed.length === 0) return;

      for (const { album, coords } of placed) {
        const marker = document.createElement('button');
        marker.type = 'button';
        marker.title = album.title;
        marker.ariaLabel = album.title;
        marker.className = 'group block size-14 hover:z-10';
        marker.innerHTML = `<div class="size-full overflow-hidden border-2 border-white shadow-lg group-hover:scale-125"><img src="${album.cover}" alt="" class="h-full w-full object-cover" /></div><span class="absolute top-full left-1/2 mt-2 hidden group-hover:block -translate-x-1/2 whitespace-nowrap bg-neutral-900 px-2 py-0.5 text-xs text-white">${album.title}</span>`;
        marker.onclick = () => route(`/gallery/${album.id}`);

        new maplibregl.Marker({ element: marker }).setLngLat(coords).addTo(map);
      }

      const bounds = new maplibregl.LngLatBounds(placed[0].coords, placed[0].coords);
      placed.forEach((p) => bounds.extend(p.coords));
      map.fitBounds(bounds, { padding: 64, maxZoom: 10, duration: 0 });
    });

    return () => {
      cancelled = true;
      map.remove();
    };
  }, [albums]);

  return <div ref={container} className="isolate h-96 w-full bg-neutral-900" />;
}
