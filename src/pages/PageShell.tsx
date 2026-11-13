import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
    <div className="mx-auto max-w-6xl">
      <Link to="/" className="label mb-8 inline-flex items-center gap-2 hover:text-fg">
        <FaArrowLeft size={10} aria-hidden="true" />
        Home
      </Link>
      {children}
    </div>
  </div>
);

export default PageShell;
