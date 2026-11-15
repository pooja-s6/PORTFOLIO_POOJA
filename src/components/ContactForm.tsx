import { useState } from 'react';
import type { FormEvent } from 'react';
import { links } from '../data/portfolio';

type Field = 'email' | 'message';
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const validate = (values: Record<Field, string>): Errors => {
  const errors: Errors = {};
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Please add a valid email so I can reply.';
  if (values.message.trim().length < 10) errors.message = 'A sentence or two is plenty (10+ characters).';
  return errors;
};

const inputClass =
  'mt-2 w-full rounded-lg border border-line-strong bg-transparent px-3.5 py-2.5 text-[0.9375rem] text-fg placeholder:text-muted focus:border-accent focus:outline-none aria-[invalid=true]:border-[var(--error)]';

const ContactForm = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

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
      const subject = encodeURIComponent('Hi from your portfolio');
      const body = encodeURIComponent(`${values.message}\n\n${values.email}`);
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
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

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-sm border border-line-strong bg-paper p-6">
        <p className="hand text-3xl text-accent-text" aria-hidden="true">
          ✈
        </p>
        <p className="mt-2 text-lg font-semibold text-fg">Thanks, message received.</p>
        <p className="mt-2 text-[0.9375rem] text-muted">
          {links.formspreeId
            ? "I'll get back to you soon."
            : 'Your email app should open with the message ready. Hit send there and it reaches me.'}
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm font-medium text-accent-text hover:underline">
          Send another
        </button>
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
          placeholder="A role, a project, or just hello"
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
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' ? (
          <p role="alert" className="text-sm text-muted">
            That didn't go through. Please email {links.email} directly.
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
