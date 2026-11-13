import { FaArrowUp } from 'react-icons/fa';
import { navSections, profile } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="border-t border-line px-5 py-10 sm:px-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-xs">
        <p className="font-display text-lg font-semibold text-fg">{profile.name}</p>
        <p className="mt-1 text-sm text-muted">{profile.footerLine}</p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {[...navSections, { name: 'Contact', href: '#contact' }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToId(link.href);
                }}
                className="text-sm text-muted transition hover:text-fg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks size="sm" />
    </div>
    <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between border-t border-line pt-6">
      <p className="text-sm text-muted">© 2026 {profile.name}</p>
      <button
        type="button"
        onClick={() => scrollToId('#home')}
        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent-text"
      >
        <FaArrowUp size={12} aria-hidden="true" />
        Back to top
      </button>
    </div>
  </footer>
);

export default Footer;
