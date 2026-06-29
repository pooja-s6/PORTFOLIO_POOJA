import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="about-card text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="about-card w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-card bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-display font-semibold mb-4 text-purple-600">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Computer Science undergraduate (Honours in Data Science) at Velammal Engineering College, Chennai, with nearly two years of hands-on software engineering experience through multiple internships. Experienced in designing backend systems, developing RESTful APIs, and building scalable web applications using Java, Spring Boot, FastAPI, Python, React, PostgreSQL, MongoDB, Docker, and Firebase.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, DBMS, and Computer Networks, complemented by practical experience in enterprise software development, collaborative Agile workflows, Git-based version control, testing, and cloud deployment. Passionate about solving complex engineering problems, building reliable software systems, and continuously learning modern technologies in backend engineering and AI.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="about-card bg-gradient-to-br from-pastel-lavender to-pastel-pink rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-display font-semibold mb-6 text-purple-600">
                Education
              </h3>
              
              <div className="space-y-6">
                {/* B.E. */}
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    B.E. Computer Science and Engineering
                  </h4>
                  <p className="text-purple-600 font-medium">Velammal Engineering College, Chennai</p>
                  <p className="text-gray-600 text-sm">2023 – 2027</p>
                  <p className="text-gray-700 font-semibold mt-1">CGPA: 8.57 / 10</p>
                </div>

                {/* HSC */}
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Higher Secondary Certificate (HSC)
                  </h4>
                  <p className="text-pink-600 font-medium">
                    Sri Venkateshwara Matriculation Higher Secondary School
                  </p>
                  <p className="text-gray-600 text-sm">2022 – 2023</p>
                  <p className="text-gray-700 font-semibold mt-1">Percentage: 86%</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="about-card bg-gradient-to-br from-pastel-blue to-pastel-mint rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-3 text-blue-600">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Full-stack development', 'Backend design', 'UI/UX', 'Cloud deployment', 'Computer vision'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
