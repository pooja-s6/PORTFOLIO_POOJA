import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'AVPS Technologies',
      location: 'Georgia, USA (Virtual)',
      period: 'Dec 2024 – Sept 2025',
      current: false,
      responsibilities: [
        'Developed backend services and RESTful APIs using Spring Boot and Java',
        'Implemented exception handling and SLF4J logging for debugging and traceability',
        'Conducted API testing with Postman and simulated real-world cases with in-memory data',
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'IBM SkillsBuild Internship Program',
      company: 'IBM',
      location: 'Virtual',
      period: 'Jun 2025 – Jul 2025',
      current: false,
      responsibilities: [
        'Completed hands-on Java Full Stack Development training with backend and frontend integration',
        'Built mini-projects integrating Spring Boot APIs with MySQL',
        'Strengthened knowledge of RESTful architecture and modular design',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaBriefcase className="text-purple-600" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                    <FaCalendar className="text-pink-600" />
                    <span className="font-medium">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Gradient Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`}></div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-purple-600 mt-1 flex-shrink-0">▹</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
