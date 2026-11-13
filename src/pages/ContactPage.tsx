import ContactForm from '../components/ContactForm';
import CopyEmail from '../components/CopyEmail';
import SectionHeader from '../components/SectionHeader';
import SocialLinks from '../components/SocialLinks';
import { usePageTitle } from '../lib/navigation';
import PageShell from './PageShell';

const ContactPage = () => {
  usePageTitle('Contact');

  return (
    <PageShell>
      <SectionHeader label="Contact" title="Start a conversation" as="h1" />
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I'm looking for backend, AI and full-stack roles. Tell me about the team or the problem, and I'll reply.
          </p>
          <p className="label mb-2 mt-10">Email · click to copy</p>
          <CopyEmail />
          <SocialLinks className="mt-8" />
        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
};

export default ContactPage;
