import { Outlet } from 'react-router-dom';
import CommandPalette from './CommandPalette';
import Footer from './Footer';
import IntroLoader from './IntroLoader';
import Navbar from './Navbar';
import ScrollManager from './ScrollManager';
import ScrollProgress from './ScrollProgress';

const Layout = () => (
  <div className="min-h-screen bg-bg text-fg">
    <IntroLoader />
    <ScrollManager />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-accent-fill focus:px-4 focus:py-2 focus:text-accent-contrast"
    >
      Skip to content
    </a>
    <ScrollProgress />
    <Navbar />
    <main id="main" tabIndex={-1} className="outline-none">
      <Outlet />
    </main>
    <Footer />
    <CommandPalette />
  </div>
);

export default Layout;
