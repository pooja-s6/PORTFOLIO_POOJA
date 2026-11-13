import Contact from '../components/sections/Contact';
import Featured from '../components/sections/Featured';
import Intro from '../components/sections/Intro';
import Projects from '../components/sections/Projects';
import Recognition from '../components/sections/Recognition';
import Skills from '../components/sections/Skills';
import Work from '../components/sections/Work';
import { usePageTitle } from '../lib/navigation';

const Home = () => {
  usePageTitle();

  return (
    <div className="mx-auto max-w-2xl px-5">
      <Intro />
      <Work />
      <Featured />
      <Projects />
      <Skills />
      <Recognition />
      <Contact />
    </div>
  );
};

export default Home;
