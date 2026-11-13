import { FaArrowRight } from 'react-icons/fa';
import { achievements, certifications } from '../../data/portfolio';
import Section from '../Section';

type Row = { title: string; detail: string; year: string; url?: string };

const List = ({ heading, rows }: { heading: string; rows: Row[] }) => (
  <div>
    <h3 className="text-sm font-medium text-fg">{heading}</h3>
    <ul className="mt-3 divide-y divide-line border-t border-line">
      {rows.map((row) => (
        <li key={row.title} className="flex items-baseline justify-between gap-4 py-3">
          <div>
            {row.url ? (
              <a
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[0.9375rem] text-fg hover:text-accent-text"
              >
                {row.title}
                <FaArrowRight size={9} className="-rotate-45" aria-hidden="true" />
              </a>
            ) : (
              <p className="text-[0.9375rem] text-fg">{row.title}</p>
            )}
            <p className="text-sm text-muted">{row.detail}</p>
          </div>
          {row.year ? <p className="shrink-0 text-sm tabular-nums text-muted">{row.year}</p> : null}
        </li>
      ))}
    </ul>
  </div>
);

const Recognition = () => (
  <Section id="recognition">
    <div className="grid gap-10 sm:grid-cols-2">
      <List heading="Achievements" rows={achievements} />
      <List
        heading="Certifications"
        rows={certifications.map((item) => ({ title: item.name, detail: item.issuer, year: item.year, url: item.url }))}
      />
    </div>
  </Section>
);

export default Recognition;
