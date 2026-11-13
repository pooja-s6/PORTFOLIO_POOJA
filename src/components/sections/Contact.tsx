import ContactForm from '../ContactForm';
import CopyEmail from '../CopyEmail';
import Section from '../Section';

const Contact = () => (
  <Section id="contact">
    <p className="text-[1.0625rem] leading-8 text-muted">
      Hiring for a <strong className="font-semibold text-fg">backend, AI or full-stack</strong> role, or building something
      interesting? Drop a note below. I read every message myself.
    </p>
    <div className="mt-8">
      <ContactForm />
    </div>
    <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
      <span className="font-serif italic">or copy my email:</span>
      <CopyEmail />
    </div>
  </Section>
);

export default Contact;
