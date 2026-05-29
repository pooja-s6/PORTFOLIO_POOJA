import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="footer-item text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Pooja S</h3>
            <p className="text-gray-400">Full Stack Developer | Backend &amp; Cloud Enthusiast | AI Explorer</p>
          </div>

          {/* Social Links */}
          <div className="footer-item flex space-x-6">
            <a
              href="https://github.com/pooja-s6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/pooja-s2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:poojasuku0606@gmail.com"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-item flex space-x-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Pooja S. Designed & Built with ❤️ using React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
