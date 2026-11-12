import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const interests = ['Full-stack development', 'Backend design', 'UI/UX', 'Cloud deployment', 'Computer vision'];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid items-start gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="surface-card p-7 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-white">Professional Summary</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Computer Science undergraduate (Honours in Data Science) at Velammal Engineering College, Chennai, with
              nearly two years of hands-on software engineering experience through multiple internships. Experienced in
              designing backend systems, developing RESTful APIs, and building scalable web applications using Java,
              Spring Boot, FastAPI, Python, React, PostgreSQL, MongoDB, Docker, and Firebase.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Operating Systems,
              DBMS, and Computer Networks, complemented by practical experience in enterprise software development,
              collaborative Agile workflows, Git-based version control, testing, and cloud deployment. Passionate about
              solving complex engineering problems, building reliable software systems, and continuously learning modern
              technologies in backend engineering and AI.
            </p>
          </motion.article>

          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="surface-card p-7 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-white">Education</h3>
              <div className="mt-6 space-y-6">
                <div className="border-l border-accent/70 pl-4">
                  <h4 className="font-medium text-white">B.E. Computer Science and Engineering</h4>
                  <p className="mt-1 text-sm text-lavender">Velammal Engineering College, Chennai</p>
                  <p className="mt-1 text-sm text-zinc-500">2023 – 2027</p>
                  <p className="mt-2 text-sm font-medium text-zinc-200">CGPA: 8.57 / 10</p>
                </div>
                <div className="border-l border-white/15 pl-4">
                  <h4 className="font-medium text-white">Higher Secondary Certificate (HSC)</h4>
                  <p className="mt-1 text-sm text-lavender">Sri Venkateshwara Matriculation Higher Secondary School</p>
                  <p className="mt-1 text-sm text-zinc-500">2022 – 2023</p>
                  <p className="mt-2 text-sm font-medium text-zinc-200">Percentage: 86%</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="surface-card p-7 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-white">Interests</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
