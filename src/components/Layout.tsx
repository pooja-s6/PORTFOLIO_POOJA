import { Outlet } from 'react-router-dom';
import { SkillFilterProvider } from '../lib/skillFilter';
import BootSplash from './BootSplash';
import CommandPalette from './CommandPalette';
import CursorFollower from './CursorFollower';
import EasterEggs from './EasterEggs';
import Footer from './Footer';
import Header from './Header';
import ScrollManager from './ScrollManager';

const Layout = () => (
  <SkillFilterProvider>
    <div className="relative min-h-screen bg-bg text-fg">
      <div className="paper-grain" aria-hidden="true" />
      <div className="paper-vignette" aria-hidden="true" />
      <BootSplash />
      <EasterEggs />
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette />
      <CursorFollower />
    </div>
  </SkillFilterProvider>
);

export default Layout;
