import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyPhoneNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('+919840737246');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Pooja S
              </span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aspiring Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate Computer Science Engineering student specializing in building
            scalable, real-world applications using Java, Spring Boot, React, and MongoDB.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/pooja-s6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transform hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/pooja-s2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:poojasuku0606@gmail.com"
              className="text-gray-700 hover:text-pink-600 transform hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <button
              onClick={copyPhoneNumber}
              className="text-gray-700 hover:text-green-600 transform hover:scale-110 transition-all duration-200 relative"
              aria-label="Phone"
              title={phoneCopied ? "Copied!" : "Click to copy phone number"}
            >
              <FaPhone size={28} />
              {phoneCopied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full border-2 border-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/Pooja_S_Resume.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaDownload size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-pastel-lavender rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute -bottom-20 left-1/3 w-72 h-72 bg-pastel-blue rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
