import { FaArrowUp } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4 px-5 py-8">
      <p className="text-sm text-muted">© 2026 {profile.name}</p>
      <SocialLinks size="sm" />
      <button
        type="button"
        onClick={() => scrollToId('top')}
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        Back to top
        <FaArrowUp size={10} aria-hidden="true" />
      </button>
    </div>
  </footer>
);

export default Footer;
