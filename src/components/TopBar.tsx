import { Icon } from './Icon';
export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="nav txt-2xl">
      <a href="/" className="flex-grow self-center font-heading font-bold no-underline text-white">
        Lewis Milburn
      </a>
      <button className="nav-btn text-white" onClick={onMenuClick} aria-label="Open menu">
        <Icon name="fa-bars" />
      </button>
    </nav>
  );
}
