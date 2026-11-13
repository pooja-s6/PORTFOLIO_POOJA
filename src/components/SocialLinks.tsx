import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { links } from '../data/portfolio';

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: 'GitHub', href: links.github.url, icon: FaGithub },
  { label: 'LinkedIn', href: links.linkedin.url, icon: FaLinkedin },
  { label: 'LeetCode', href: links.leetcode.url, icon: SiLeetcode },
  { label: 'SkillRack', href: links.skillrack.url, icon: FaLaptopCode },
  { label: 'Email', href: `mailto:${links.email}`, icon: FaEnvelope },
];

type SocialLinksProps = {
  size?: 'sm' | 'md';
  className?: string;
};

const SocialLinks = ({ size = 'md', className = '' }: SocialLinksProps) => (
  <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
    {socials.map(({ label, href, icon: Icon }) => {
      const external = href.startsWith('http');
      return (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`has-tooltip relative grid place-items-center rounded-full border border-line text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-text ${
              size === 'sm' ? 'h-9 w-9' : 'h-11 w-11'
            }`}
          >
            <Icon size={size === 'sm' ? 14 : 16} aria-hidden="true" />
            <span className="tooltip" role="tooltip">
              {label}
            </span>
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
