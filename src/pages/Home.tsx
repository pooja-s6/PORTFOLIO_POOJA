import ExperienceRows from '../components/ExperienceRows';
import ProjectArchive from '../components/ProjectArchive';
import SectionHeader from '../components/SectionHeader';
import ClosingCta from '../components/home/ClosingCta';
import FactStrip from '../components/home/FactStrip';
import Hero from '../components/home/Hero';
import Recognition from '../components/home/Recognition';
import Skills from '../components/home/Skills';
import { usePageTitle } from '../lib/navigation';

const Home = () => {
  usePageTitle();

  return (
    <>
      <Hero />
      <FactStrip />
      <section id="experience" className="scroll-mt-20 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            index="01"
            label="Experience"
            title="Five internships, newest first"
            link={{ to: '/experience', text: 'Full history' }}
          />
          <ExperienceRows />
        </div>
      </section>
      <section id="projects" className="scroll-mt-20 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="02" label="Projects" title="Selected work" link={{ to: '/projects', text: 'All projects' }} />
          <ProjectArchive limit={4} />
        </div>
      </section>
      <Skills />
      <Recognition />
      <ClosingCta />
    </>
  );
};

export default Home;
