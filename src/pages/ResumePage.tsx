import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { about, profile } from '../data/portfolio';
import { usePageTitle } from '../lib/navigation';
import PageShell from './PageShell';

const ResumePage = () => {
  usePageTitle('Resume');

  return (
    <PageShell>
      <SectionHeader label="Resume" title="Resume" as="h1" />
      <div className="flex flex-wrap gap-3">
        <a
          href={profile.resume.href}
          download={profile.resume.fileName}
          className="inline-flex items-center gap-2 rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-contrast hover:bg-accent-fill-hover"
        >
          <FaDownload size={12} aria-hidden="true" />
          Download PDF
        </a>
        <a
          href={profile.resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-fg hover:border-accent hover:text-accent-text"
        >
          <FaExternalLinkAlt size={11} aria-hidden="true" />
          Open in new tab
        </a>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <object
          data={profile.resume.href}
          type="application/pdf"
          aria-label="Pooja S resume"
          className="h-[80vh] min-h-[520px] w-full rounded-lg border border-line bg-surface"
        >
          <p className="p-6 text-muted">
            Your browser can't show the PDF here.{' '}
            <a href={profile.resume.href} className="text-accent-text underline">
              Open the resume
            </a>
            .
          </p>
        </object>

        <aside className="space-y-10">
          <section>
            <h2 className="label">Education</h2>
            <ul className="mt-4 border-t border-line">
              {about.education.map((item) => (
                <li key={item.degree} className="border-b border-line py-4">
                  <p className="font-medium text-fg">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="label mt-2">
                    {item.period} · {item.score}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="label">Interests</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="label">Currently learning</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.learning.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </PageShell>
  );
};

export default ResumePage;
