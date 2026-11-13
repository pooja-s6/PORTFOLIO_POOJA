import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/navigation';
import PageShell from './PageShell';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <PageShell>
      <p className="label">404</p>
      <h1 className="mt-3 font-serif text-5xl font-medium text-fg">This page doesn't exist.</h1>
      <Link to="/" className="mt-8 inline-flex text-accent-text hover:underline">
        Back to the home page
      </Link>
    </PageShell>
  );
};

export default NotFound;
