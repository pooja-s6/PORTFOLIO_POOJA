import { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { links } from '../data/portfolio';

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onClick={copy}
        className="group inline-flex items-center gap-3 border-b border-line-strong pb-1 font-mono text-sm text-fg hover:border-accent hover:text-accent-text sm:text-base"
        data-cursor="copy"
      >
        {links.email}
        <FaCopy size={12} className="text-muted group-hover:text-accent-text" aria-hidden="true" />
        <span className="sr-only">Copy email address</span>
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-xs text-accent-text transition-opacity ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {copied ? 'Copied' : ''}
      </span>
    </span>
  );
};

export default CopyEmail;
