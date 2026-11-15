import { FaMoon, FaSun } from 'react-icons/fa';
import { toggleTheme, useTheme } from '../lib/theme';

const ThemeToggle = () => {
  const theme = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      className="has-tooltip relative grid h-9 w-9 place-items-center rounded-full border border-line text-fg transition hover:border-accent hover:text-accent-text"
    >
      {theme === 'dark' ? <FaSun size={15} aria-hidden="true" /> : <FaMoon size={14} aria-hidden="true" />}
      <span className="tooltip tooltip-end max-sm:hidden" role="tooltip">
        {`Switch to ${next} theme`}
      </span>
    </button>
  );
};

export default ThemeToggle;
