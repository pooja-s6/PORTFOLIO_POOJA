import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaServer,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiApache,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiOpencv,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-orange-600' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-700' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'SQL', icon: FaDatabase, color: 'text-blue-600' },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'React', icon: FaReact, color: 'text-cyan-500' },
        { name: 'OpenCV', icon: SiOpencv, color: 'text-red-600' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'SQLite', icon: FaDatabase, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Maven', icon: SiApache, color: 'text-red-600' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Tomcat', icon: FaServer, color: 'text-yellow-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pastel-blueLight to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-purple-600">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pastel-lavenderLight to-white rounded-xl hover:shadow-md hover:scale-105 transition-all duration-200 group"
                    >
                      <Icon className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-pastel-pink to-pastel-peach rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-display font-semibold mb-6 text-purple-600 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-1">Java Foundation</h4>
              <p className="text-sm text-gray-600">Infosys Springboard 6.0 (2025)</p>
              <p className="text-sm text-gray-500 mt-1">Training in Java, OOPs, and debugging</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-1">AWS APAC Solutions Architecture</h4>
              <p className="text-sm text-gray-600">Forage (2025)</p>
              <p className="text-sm text-gray-500 mt-1">Designed scalable AWS Elastic Beanstalk architecture</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-1">IBM SkillsBuild Internship</h4>
              <p className="text-sm text-gray-600">Jun 2024 - Aug 2024</p>
              <p className="text-sm text-gray-500 mt-1">Java Full Stack Development training</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-1">Docker Expertise</h4>
              <p className="text-sm text-gray-600">Self-taught</p>
              <p className="text-sm text-gray-500 mt-1">Containerized full-stack project using Docker Compose</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
