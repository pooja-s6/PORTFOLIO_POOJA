import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 78%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+919840737246');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-br from-pastel-blueLight via-pastel-lavenderLight to-pastel-pinkLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="contact-card text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="contact-card text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:poojasuku0606@gmail.com"
              className="contact-card block bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="bg-pastel-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaEnvelope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-display font-semibold text-gray-800 text-xl mb-2">Email</h3>
              <p className="text-gray-600 hover:text-blue-600 transition-colors break-all">
                poojasuku0606@gmail.com
              </p>
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div 
              onClick={copyPhoneNumber}
              className="contact-card bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer relative"
            >
              <div className="bg-pastel-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaPhoneAlt className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-display font-semibold text-gray-800 text-xl mb-2">Phone</h3>
              <p className="text-gray-600">+91-9840737246</p>
              {copied && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/90 rounded-2xl">
                  <p className="text-white font-semibold">Copied! ✓</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com/pooja-s6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card block bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="bg-pastel-lavender p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGithub className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-display font-semibold text-gray-800 text-xl mb-2">GitHub</h3>
              <p className="text-gray-600 hover:text-gray-800 transition-colors">
                pooja-s6
              </p>
              <p className="text-sm text-gray-500 mt-2 break-all">
                www.github.com/pooja-s6
              </p>
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://linkedin.com/in/pooja-s2006"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card block bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="bg-pastel-peach p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaLinkedin className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-display font-semibold text-gray-800 text-xl mb-2">LinkedIn</h3>
              <p className="text-gray-600 hover:text-blue-700 transition-colors">
                Connect
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
