import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { homeSections, profile } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import SocialLinks from './SocialLinks';

const footerLinks = [
  ...homeSections.map((section) => ({ name: section.name, to: `/#${section.id}` })),
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => (
  <footer className="border-t border-line px-5 py-12 sm:px-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-xs">
        <p className="font-serif text-2xl font-medium text-fg">
          {profile.name}
          <span className="text-accent-text">.</span>
        </p>
        <p className="mt-2 text-sm text-muted">{profile.footerLine}</p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="text-sm text-muted transition-colors hover:text-fg">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks size="sm" />
    </div>
    <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-line pt-6">
      <p className="label">© 2026 {profile.name}</p>
      <button
        type="button"
        onClick={() => scrollToId('top')}
        className="label inline-flex items-center gap-2 transition-colors hover:text-fg"
      >
        Back to top
        <FaArrowUp size={10} aria-hidden="true" />
      </button>
    </div>
  </footer>
);

export default Footer;
