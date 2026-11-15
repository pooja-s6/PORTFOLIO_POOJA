import { FaExternalLinkAlt } from 'react-icons/fa';
import { alsoRecognition, certificationGroups, highlights } from '../../data/portfolio';
import Section from '../Section';

const tilts = [-1.4, 1.1, -0.8];

const Recognition = () => (
  <Section id="recognition">
    <ul className="grid gap-4 sm:grid-cols-3">
      {highlights.map((item, index) => (
        <li key={item.id}>
          <article className="ticket h-full" style={{ ['--tilt' as string]: `${tilts[index] ?? 0}deg` }}>
            <p className="label text-accent-text">Highlight</p>
            <h3 className="mt-3 font-serif text-2xl font-medium leading-tight text-fg">{item.title}</h3>
            <p className="mt-2 text-base leading-7 text-muted">{item.detail}</p>
            {item.outOf ? <p className="mt-1 font-mono text-xs text-muted">out of {item.outOf} teams</p> : null}
            {item.built ? <p className="mt-3 text-sm font-medium text-fg">{item.built}</p> : null}
            <p className="mt-5 font-mono text-sm font-semibold tabular-nums text-accent-text">{item.year}</p>
          </article>
        </li>
      ))}
    </ul>

    <div className="mt-12">
      <h3 className="font-serif text-2xl font-medium text-fg">Certifications</h3>
      <p className="mt-2 max-w-2xl text-base leading-7 text-muted">
        Formal credentials that support the skills above.
      </p>
      <div className="mt-6 space-y-8">
        {certificationGroups.map((group) => (
          <div key={group.issuer}>
            <p className="label mb-3 text-fg">{group.issuer}</p>
            <ul className="flex flex-wrap gap-4">
              {group.items.map((item, index) => {
                const inner = (
                  <>
                    <span className="font-serif text-base font-medium leading-snug text-stamp">{item.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wide text-stamp/80">
                      {item.issuer}
                      {item.year ? ` · ${item.year}` : ''}
                    </span>
                    {item.url ? (
                      <span className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] text-stamp/70">
                        credential
                        <FaExternalLinkAlt size={8} aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                );
                return (
                  <li key={item.name}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-stamp has-tooltip relative"
                        style={{ ['--tilt' as string]: `${index % 2 === 0 ? -2.2 : 1.8}deg` }}
                        data-cursor="open"
                      >
                        {inner}
                        <span className="tooltip" role="tooltip">
                          {item.issuer}
                        </span>
                      </a>
                    ) : (
                      <span
                        className="cert-stamp has-tooltip relative"
                        style={{ ['--tilt' as string]: `${index % 2 === 0 ? -2.2 : 1.8}deg` }}
                      >
                        {inner}
                        <span className="tooltip" role="tooltip">
                          {item.issuer}
                        </span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <aside className="index-card mt-12 p-5 sm:p-6" style={{ ['--tilt' as string]: '0.6deg' }}>
      <p className="label text-accent-text">{alsoRecognition.title}</p>
      <p className="mt-3 font-serif text-xl font-medium leading-snug text-fg sm:text-2xl">
        Symposiums and competitions
      </p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{alsoRecognition.detail}</p>
    </aside>
  </Section>
);

export default Recognition;
