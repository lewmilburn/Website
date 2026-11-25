import {
  faArrowLeft, faArrowUpRightFromSquare, faBars, faBookBookmark, faBookOpen, faBriefcase, faCertificate,
  faChevronLeft, faChevronRight, faCirclePlay, faFileLines, faGear, faGraduationCap, faHouse, faIdBadge,
  faImages, faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';

const icons: Record<string, { icon: [number, number, unknown, unknown, string | string[]] }> = {
  'fa-arrow-left': faArrowLeft,
  'fa-arrow-up-right-from-square': faArrowUpRightFromSquare,
  'fa-bars': faBars,
  'fa-book-bookmark': faBookBookmark,
  'fa-book-open': faBookOpen,
  'fa-briefcase': faBriefcase,
  'fa-certificate': faCertificate,
  'fa-chevron-left': faChevronLeft,
  'fa-chevron-right': faChevronRight,
  'fa-circle-play': faCirclePlay,
  'fa-file-lines': faFileLines,
  'fa-gear': faGear,
  'fa-graduation-cap': faGraduationCap,
  'fa-house': faHouse,
  'fa-id-badge': faIdBadge,
  'fa-images': faImages,
  'fa-xmark': faXmark,
  'fa-github': faGithub,
  'fa-instagram': faInstagram,
  'fa-linkedin': faLinkedin,
  'fa-orcid': faOrcid,
};

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const [w, h, , , path] = icons[name].icon;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      fill="currentColor"
      aria-hidden="true"
      className={`inline-block h-[1em] align-[-0.125em] ${/(^| )w-/.test(className) ? '' : 'w-[1em]'} ${className}`}
    >
      <path d={path as string} />
    </svg>
  );
}
