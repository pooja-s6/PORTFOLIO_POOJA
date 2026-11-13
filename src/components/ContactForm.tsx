import { useState } from 'react';
import type { FormEvent } from 'react';
import { links } from '../data/portfolio';

type Field = 'name' | 'email' | 'message';
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const validate = (values: Record<Field, string>): Errors => {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please add your name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Please add a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least a sentence (10+ characters).';
  return errors;
};

const inputClass =
  'mt-2 w-full border-b border-line-strong bg-transparent py-2.5 text-base text-fg placeholder:text-muted focus:border-accent focus:outline-none';

const ContactForm = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    };
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    if (!links.formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
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
      <div role="status" className="border-t border-line pt-8">
        <p className="font-serif text-3xl text-fg">Thank you.</p>
        <p className="mt-3 text-muted">
          {links.formspreeId
            ? 'Your message is on its way. I will get back to you soon.'
            : 'Your email app should open with the message filled in. Send it from there and I will reply soon.'}
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-medium text-accent-text hover:underline">
          Write another message
        </button>
      </div>
    );
  }

  const field = (name: Field, label: string, props: Record<string, unknown> = {}) => (
    <div>
      <label htmlFor={`contact-${name}`} className="label">
        {label}
      </label>
      {name === 'message' ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          rows={5}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
          className={`${inputClass} resize-y`}
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
          className={inputClass}
          {...props}
        />
      )}
      {errors[name] ? (
        <p id={`contact-${name}-error`} className="mt-2 text-sm text-[var(--error)]">
          {errors[name]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-8">
      {field('name', 'Name', { autoComplete: 'name' })}
      {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
      {field('message', 'Message')}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-fill-hover disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' ? (
          <p role="alert" className="text-sm text-muted">
            Something went wrong. Please email {links.email} directly.
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
