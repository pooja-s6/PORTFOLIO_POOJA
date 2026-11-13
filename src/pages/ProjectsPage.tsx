import ProjectArchive from '../components/ProjectArchive';
import SectionHeader from '../components/SectionHeader';
import { usePageTitle } from '../lib/navigation';
import PageShell from './PageShell';

const ProjectsPage = () => {
  usePageTitle('Projects');

  return (
    <PageShell>
      <SectionHeader label="Projects" title="Project archive" as="h1" />
      <ProjectArchive />
    </PageShell>
  );
};

export default ProjectsPage;
