import ContactForm from '../ContactForm';
import CopyEmail from '../CopyEmail';
import Section from '../Section';

const Contact = () => (
  <Section id="contact">
    <p className="body-copy leading-8">
      Open to <strong className="font-semibold text-fg">backend and AI</strong> roles, collaborations, or a conversation
      about a project. I read every message myself.
    </p>
    <div className="mt-6 rounded-sm border border-line-strong bg-paper px-4 py-4 sm:px-5">
      <p className="label">Email</p>
      <div className="mt-2">
        <CopyEmail />
      </div>
      <p className="mt-2 text-sm text-muted">Fastest way to reach me — copy and send from your own client.</p>
    </div>
    <div className="mt-8">
      <ContactForm />
    </div>
  </Section>
);

export default Contact;
