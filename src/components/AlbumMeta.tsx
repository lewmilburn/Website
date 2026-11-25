import type { Album } from '../data/library';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function ordinal(n: number) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] ?? suffixes[v] ?? suffixes[0]);
}

function formatDate(date: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  return m ? `${ordinal(Number(m[3]))} ${MONTHS[Number(m[2]) - 1]} ${m[1]}` : date;
}

export function AlbumMeta({ album, className }: { album: Pick<Album, 'date' | 'location'>; className: string }) {
  const date = album.date && formatDate(album.date);
  const text = date && album.location ? `${date} in ${album.location}` : date || album.location;
  return text ? <p className={className}>{text}</p> : null;
}
