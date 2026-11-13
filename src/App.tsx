import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Focus from './components/Focus'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Recognition from './components/Recognition'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spotlight from './components/Spotlight'
import CommandPalette from './components/CommandPalette'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div className="page-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div
        className="pointer-events-none fixed left-1/2 top-[-10%] z-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-soft),transparent_70%)]"
        aria-hidden="true"
      />
      <ScrollProgress />
      <Spotlight />
      <CommandPalette />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Focus />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Recognition />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
