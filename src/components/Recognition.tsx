import { FaAward, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { achievements, certifications } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Recognition = () => (
  <section id="recognition" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Recognition" title="Certifications and achievements" />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <Reveal className="surface-card p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-fg">
            <FaAward className="text-accent-text" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="mt-5 divide-y divide-[var(--border)]">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-start justify-between gap-4 py-3">
                <div>
                  <p className="font-medium text-fg">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ''}
                  </p>
                </div>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
                  >
                    Credential
                    <FaExternalLinkAlt size={10} aria-hidden="true" />
                    <span className="sr-only"> for {cert.name}</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="surface-card p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-fg">
            <FaTrophy className="text-accent-text" aria-hidden="true" />
            Achievements
          </h3>
          <ul className="mt-5 space-y-4">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Recognition;
