import { useState } from 'preact/hooks';
import { LocationProvider, Router, Route, lazy } from 'preact-iso';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import {Development} from "./pages/Development";
const Cv = lazy(() => import('./pages/Cv').then((m) => m.Cv));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => m.Gallery));
const Research = lazy(() => import('./pages/Research').then((m) => m.Research));

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
        <Route path="/development" component={Development} onMenuClick={toggle} />
        <Route path="/research" component={Research} onMenuClick={toggle} />
        <Route path="/gallery/:album?" component={Gallery} onMenuClick={toggle} />
      </Router>
    </LocationProvider>
  );
}
