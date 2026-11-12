import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+919840737246');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const cards: {
    title: string;
    value: string;
    detail?: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
  }[] = [
    {
      title: 'Email',
      value: 'poojasuku0606@gmail.com',
      href: 'mailto:poojasuku0606@gmail.com',
      icon: FaEnvelope,
    },
    {
      title: 'Phone',
      value: '+91-9840737246',
      detail: copied ? 'Copied' : 'Click to copy',
      icon: FaPhoneAlt,
      onClick: copyPhoneNumber,
    },
    {
      title: 'GitHub',
      value: 'pooja-s6',
      detail: 'github.com/pooja-s6',
      href: 'https://github.com/pooja-s6',
      icon: FaGithub,
    },
    {
      title: 'LinkedIn',
      value: 'Connect',
      href: 'https://linkedin.com/in/pooja-s2006',
      icon: FaLinkedin,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="I'm currently looking for new opportunities. Feel free to reach out through any of the channels below!"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const className =
              'surface-card flex h-full flex-col p-6 text-left transition hover:-translate-y-0.5';
            const body = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-accent/10 text-lavender">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 break-all text-sm text-zinc-300">{card.value}</p>
                {card.detail ? <p className="mt-2 text-xs text-zinc-500">{card.detail}</p> : null}
              </>
            );

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    className={className}
                    {...(card.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {body}
                  </a>
                ) : (
                  <button type="button" onClick={card.onClick} className={`${className} w-full`}>
                    {body}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
