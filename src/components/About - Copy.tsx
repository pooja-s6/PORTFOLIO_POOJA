import { FaGraduationCap, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-blue-600 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">B.E. Computer Science and Engineering</h4>
                <p className="text-blue-600 font-medium">Velammal Engineering College</p>
                <p className="text-gray-600 text-sm">2023 - 2027 (Final Year)</p>
                <p className="text-gray-900 font-semibold mt-1">CGPA: 8.97/10</p>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-900">Higher Secondary (12th)</h4>
                <p className="text-blue-600 font-medium">Sri Venkateshwara Matric Hr. Sec. School</p>
                <p className="text-gray-600 text-sm">2022 - 2023</p>
                <p className="text-gray-900 font-semibold mt-1">86%</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <FaAward className="text-blue-600 text-3xl mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">Infosys Springboard - Java Foundation</p>
                <p className="text-gray-600 text-xs">2025</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">Infosys Virtual Internship - Java Tech Stack</p>
                <p className="text-gray-600 text-xs">2025</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">AI/ML Internship - AICTE + Edunet + IBM</p>
                <p className="text-gray-600 text-xs">2025</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">AWS Solutions Architecture - Forage</p>
                <p className="text-gray-600 text-xs">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Career Objective</h3>
          <p className="text-gray-700 leading-relaxed">
            Seeking a full-stack or backend developer role in a product-based company where I can leverage my expertise in Java, Spring Boot, and cloud technologies. 
            Passionate about building scalable systems, optimizing performance, and solving complex technical challenges. 
            Strong foundation in data structures, algorithms, and system design with hands-on experience in building enterprise-grade applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
