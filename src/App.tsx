import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
