import { FaExternalLinkAlt } from 'react-icons/fa';
import { achievements, certifications } from '../../data/portfolio';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import Recommendations from './Recommendations';

const Recognition = () => (
  <section id="recognition" className="scroll-mt-20 px-5 py-24 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <SectionHeader index="04" label="Recognition" title="Certificates and hackathons" />
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h3 className="label">Certifications</h3>
          <ul className="mt-4 border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <div>
                  <p className="font-medium text-fg">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {cert.year ? <span className="label">{cert.year}</span> : null}
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-text hover:text-fg"
                      aria-label={`View ${cert.name} credential`}
                    >
                      <FaExternalLinkAlt size={11} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="label">Achievements</h3>
          <ul className="mt-4 border-t border-line">
            {achievements.map((item) => (
              <li key={item.title} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <div>
                  <p className="font-medium text-fg">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                </div>
                <span className="label shrink-0">{item.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Recommendations />
    </div>
  </section>
);

export default Recognition;
