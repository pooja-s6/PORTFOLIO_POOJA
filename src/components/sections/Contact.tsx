import ContactForm from '../ContactForm';
import CopyEmail from '../CopyEmail';
import Section from '../Section';

const Contact = () => (
  <Section id="contact">
    <p className="body-copy leading-8">
      Have an interesting opportunity, a project idea, or just want to talk about technology? I'd love to hear from you.
    </p>
    <div className="mt-6 rounded-sm border border-line-strong bg-paper px-4 py-4 sm:px-5">
      <p className="label">Email</p>
      <div className="mt-2">
        <CopyEmail />
      </div>
      <p className="mt-2 text-sm text-muted">The easiest way to reach me — feel free to drop me a message.</p>
    </div>
    <div className="mt-8">
      <ContactForm />
    </div>
  </Section>
);

export default Contact;
