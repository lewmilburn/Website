import { Icon } from './Icon';
import { socials } from './Socials';

const order = ['LinkedIn', 'GitHub', 'ORCID', 'Instagram'];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <aside
      className={`fixed top-0 right-0 z-50 flex h-full w-64 flex-col border-l border-neutral-800 bg-neutral-900 transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between border-b border-neutral-800 p-4">
        <a href="/" className="txt-2xl font-heading font-bold no-underline text-white" onClick={onClose}>
          Lewis Milburn
        </a>
        <button className="nav-btn text-white" onClick={onClose} aria-label="Close menu">
          <Icon name="fa-xmark" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col pt-2">
        <a href="/" className="sidebar-btn no-underline" onClick={onClose}>
          <Icon name="fa-house" className="w-5" />
          <span>Home</span>
        </a>
        <a href="/cv" className="sidebar-btn no-underline" onClick={onClose}>
          <Icon name="fa-file-lines" className="w-5" />
          <span>CV</span>
        </a>
        <a href="/development" className="sidebar-btn no-underline" onClick={onClose}>
          <Icon name="fa-gear" className="w-5" />
          <span>Development</span>
        </a>
        <a href="/research" className="sidebar-btn no-underline" onClick={onClose}>
          <Icon name="fa-book-bookmark" className="w-5" />
          <span>Research</span>
        </a>
        <a href="/gallery" className="sidebar-btn no-underline" onClick={onClose}>
          <Icon name="fa-images" className="w-5" />
          <span>Gallery</span>
        </a>
      </nav>
      <div className="flex gap-4 border-t border-neutral-800 p-4">
        {order.map((n) => {
          const s = socials.find((x) => x.name === n)!;
          return (
            <a key={n} href={s.href} className="sidebar-social" aria-label={s.name} target="_blank" rel="noreferrer">
              <Icon name={s.icon} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
