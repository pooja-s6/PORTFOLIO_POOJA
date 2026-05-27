import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Pooja S
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
            Backend Developer | Java • Spring Boot • Cloud
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Final-year CS student specializing in backend development with Java and Spring Boot. 
            Building scalable REST APIs and enterprise applications. Strong foundation in DSA, DBMS, and System Design. 
            Seeking full-stack/backend roles in product-based companies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
