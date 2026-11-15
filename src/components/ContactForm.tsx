import { useState } from 'react';
import type { FormEvent } from 'react';
import { links } from '../data/portfolio';

type Field = 'email' | 'message';
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'copied' | 'error';

const validate = (values: Record<Field, string>): Errors => {
  const errors: Errors = {};
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Enter a valid email so I can reply.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least a short sentence (10+ characters).';
  return errors;
};

const inputClass =
  'mt-2 w-full rounded-lg border border-line-strong bg-transparent px-3.5 py-3 text-base text-fg placeholder:text-muted focus:border-accent focus:outline-none aria-[invalid=true]:border-[var(--error)]';

const draftText = (values: Record<Field, string>) =>
  `To: ${links.email}\nFrom: ${values.email}\n\n${values.message.trim()}`;

const ContactForm = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [draft, setDraft] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = { email: String(data.get('email') ?? ''), message: String(data.get('message') ?? '') };
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      form.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      return;
    }

    if (!links.formspreeId) {
      const body = draftText(values);
      setDraft(body);
      try {
        await navigator.clipboard.writeText(body);
        setStatus('copied');
      } catch {
        const subject = encodeURIComponent('Hello from your portfolio');
        const mailBody = encodeURIComponent(`${values.message}\n\n${values.email}`);
        window.location.href = `mailto:${links.email}?subject=${subject}&body=${mailBody}`;
        setStatus('sent');
      }
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

  if (status === 'sent' || status === 'copied') {
    return (
      <div role="status" className="rounded-sm border border-line-strong bg-paper p-6">
        <p className="text-lg font-semibold text-fg">
          {status === 'copied' ? 'Message copied to your clipboard.' : 'Ready to send.'}
        </p>
        <p className="mt-2 text-base leading-7 text-muted">
          {links.formspreeId
            ? "Thanks — I'll get back to you soon."
            : status === 'copied'
              ? `Paste it into an email to ${links.email}. If you prefer, open your mail app with the button below.`
              : 'Your email app should open with the draft. If nothing opens, use Copy email below and send manually.'}
        </p>
        {status === 'copied' && draft ? (
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent(draft)}`}
              className="inline-flex rounded-sm bg-fg px-4 py-2.5 text-sm font-semibold text-bg"
              data-cursor="open"
            >
              Open email app
            </a>
            <button type="button" onClick={() => setStatus('idle')} className="text-sm font-medium text-accent-text hover:underline">
              Edit message
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm font-medium text-accent-text hover:underline">
            Write another message
          </button>
        )}
      </div>
    );
  }

  const describedBy = (name: Field) => (errors[name] ? `contact-${name}-error` : undefined);
  const errorText = (name: Field) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-[var(--error)]">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      {!links.formspreeId ? (
        <p className="text-sm leading-6 text-muted">
          Messages are prepared on your device. Prefer the fastest path? Copy my email below and write directly.
        </p>
      ) : null}
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-fg">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy('email')}
          className={inputClass}
        />
        {errorText('email')}
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="A role, a project, or a quick hello"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={`${inputClass} resize-y`}
        />
        {errorText('message')}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-sm bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
          data-cursor="open"
        >
          {status === 'sending' ? 'Sending…' : links.formspreeId ? 'Send message' : 'Prepare message'}
        </button>
        {status === 'error' ? (
          <p role="alert" className="text-sm text-muted">
            That did not go through. Please email {links.email} directly.
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
