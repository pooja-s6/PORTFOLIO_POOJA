import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/navigation';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <div className="mx-auto max-w-2xl px-5 py-28">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-2 font-serif text-4xl font-medium text-fg">This page doesn't exist.</h1>
      <Link to="/" className="mt-6 inline-flex text-accent-text underline underline-offset-4">
        Back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
