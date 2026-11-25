import { useState } from 'preact/hooks';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Cv } from './pages/Cv';
import { Gallery } from './pages/Gallery';
import {Research} from "./pages/Research";

export function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <LocationProvider>
      <Sidebar open={open} onClose={close} />
      {open && <div className="fixed inset-0 z-40 bg-black/50" onClick={close} />}
      <Router>
        <Route path="/" component={Home} onMenuClick={toggle} />
        <Route path="/cv" component={Cv} onMenuClick={toggle} />
        <Route path="/research" component={Research} onMenuClick={toggle} />
        <Route path="/gallery/:album?" component={Gallery} onMenuClick={toggle} />
      </Router>
    </LocationProvider>
  );
}
