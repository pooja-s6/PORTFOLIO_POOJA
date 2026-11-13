import { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { links } from '../data/portfolio';

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
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
    <>
      <button
        type="button"
        onClick={copy}
        className="group inline-flex items-center gap-3 border-b border-line-strong pb-1 font-mono text-sm text-fg hover:border-accent hover:text-accent-text sm:text-base"
      >
        {links.email}
        <FaCopy size={12} className="text-muted group-hover:text-accent-text" aria-hidden="true" />
        <span className="sr-only">Copy email address</span>
      </button>
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg shadow-lg transition-opacity ${
          copied ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {copied ? 'Copied' : ''}
      </div>
    </>
  );
};

export default CopyEmail;
