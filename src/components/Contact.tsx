import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { FaCopy, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { links } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const profiles = [
  { label: 'GitHub', value: links.github.handle, href: links.github.url, icon: FaGithub },
  { label: 'LinkedIn', value: links.linkedin.handle, href: links.linkedin.url, icon: FaLinkedin },
  { label: 'LeetCode', value: links.leetcode.handle, href: links.leetcode.url, icon: SiLeetcode },
  { label: 'SkillRack', value: links.skillrack.handle, href: links.skillrack.url, icon: FaLaptopCode },
];

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const legacyCopy = (text: string) => {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand('copy');
  field.remove();
  return ok;
};

const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    if (!links.formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${links.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="surface-card flex flex-col gap-4 p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-fg">Send a message</h3>
      <label className="text-sm font-medium text-fg">
        Name
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="text-sm font-medium text-fg">
        Email
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className="text-sm font-medium text-fg">
        Message
        <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 self-start rounded-full bg-accent-fill px-5 py-2.5 text-sm font-semibold text-accent-contrast transition hover:bg-accent-fill-hover disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="min-h-5 text-sm text-muted" role="status">
        {status === 'sent' ? 'Thanks, your message was sent.' : null}
        {status === 'error' ? `Something went wrong. Please email ${links.email} directly.` : null}
      </p>
    </form>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
    } catch {
      if (legacyCopy(links.email)) setCopied(true);
      else window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="I'm currently looking for opportunities. Reach out through any of the channels below."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="surface-card group flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="min-w-0">
                <span className="block text-sm text-muted">Email · click to copy</span>
                <span className="mt-1 block truncate font-medium text-fg">{links.email}</span>
              </span>
              <FaCopy className="shrink-0 text-accent-text" aria-hidden="true" />
            </button>
            <div className="grid gap-4 sm:grid-cols-2">
              {profiles.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex items-center gap-4 p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent-text">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{label}</span>
                    <span className="block truncate font-medium text-fg">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg shadow-lg transition-opacity ${
          copied ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {copied ? 'Copied!' : ''}
      </div>
    </section>
  );
};

export default Contact;
