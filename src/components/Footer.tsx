import { FaArrowUp } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="border-t border-dashed border-line-strong">
    <div className="mx-auto flex max-w-2xl flex-col gap-5 px-5 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">Built in Chennai</p>
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
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <p className="label">© 2026 {profile.name}</p>
        <p className="label">Updated {profile.lastUpdated}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
