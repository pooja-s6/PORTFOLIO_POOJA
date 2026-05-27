import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Open to full-time opportunities, internships, and collaborations. 
              Feel free to reach out for backend/cloud roles.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Email</p>
                  <p className="text-gray-600 text-xs">your.email@example.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <FaLinkedin className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">LinkedIn</p>
                  <p className="text-gray-600 text-xs">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <FaGithub className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">GitHub</p>
                  <p className="text-gray-600 text-xs">View my code</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-900 font-medium mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900 font-medium mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-900 font-medium mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <FaPaperPlane size={14} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
