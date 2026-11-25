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
        <a href="/" className="txt-2xl font-bold no-underline text-white" onClick={onClose}>
          Lewis Milburn
        </a>
        <button className="nav-btn text-white" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col pt-2">
        <a href="/" className="sidebar-btn no-underline" onClick={onClose}>
          <i className="fa-solid fa-house w-5" />
          <span>Home</span>
        </a>
        <a href="/cv" className="sidebar-btn no-underline" onClick={onClose}>
          <i className="fa-solid fa-file-lines w-5" />
          <span>CV</span>
        </a>
        <a href="/research" className="sidebar-btn no-underline" onClick={onClose}>
          <i className="fa-solid fa-book-bookmark w-5" />
          <span>Research</span>
        </a>
        <a href="/gallery" className="sidebar-btn no-underline" onClick={onClose}>
          <i className="fa-solid fa-images w-5" />
          <span>Gallery</span>
        </a>
      </nav>
      <div className="flex gap-4 border-t border-neutral-800 p-4">
        {order.map((n) => {
          const s = socials.find((x) => x.name === n)!;
          return (
            <a key={n} href={s.href} className="sidebar-social" target="_blank" rel="noreferrer">
              <i className={`fa-brands ${s.icon}`} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
