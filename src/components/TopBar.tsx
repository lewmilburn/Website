export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="nav txt-2xl">
      <a href="/" className="flex-grow self-center font-bold no-underline text-white">
        Lewis Milburn
      </a>
      <button className="nav-btn text-white" onClick={onMenuClick} aria-label="Open menu">
        <i className="fa-solid fa-bars" />
      </button>
    </nav>
  );
}
