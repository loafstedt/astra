import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ResumeTools from './pages/ResumeTools';
import ProjectSearch from './pages/ProjectSearch';
import ProjectDetails from './pages/ProjectDetails';
import ColdEmailGenerator from './pages/ColdEmailGenerator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'resume-tools', element: <ResumeTools /> },
      { path: 'projects', element: <ProjectSearch /> },
      { path: 'projects/:projectId', element: <ProjectDetails /> },
      { path: 'projects/:projectId/email', element: <ColdEmailGenerator /> },
    ],
  },
]);

export default router;
