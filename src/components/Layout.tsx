import { Outlet } from 'react-router-dom';
import CommandPalette from './CommandPalette';
import CursorFollower from './CursorFollower';
import Footer from './Footer';
import Header from './Header';
import ScrollManager from './ScrollManager';

const Layout = () => (
  <div className="min-h-screen bg-bg text-fg">
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
);

export default Layout;
