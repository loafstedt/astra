import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="px-6 py-12 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-astral-dark">Project not found</h1>
          <p className="text-slate-600">Please return to the research directory to browse available opportunities.</p>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-5 py-2 bg-astral text-white rounded-lg hover:bg-astral-dark"
          >
            Back to Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-astral-light">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-astral-dark">{project.title}</h1>
          <p className="text-slate-600 text-sm">Mentored by {project.professor}</p>
        </div>
        <p className="text-slate-700 leading-relaxed">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.keywords.map((keyword) => (
            <span key={keyword} className="px-3 py-1 text-sm bg-astral-light text-astral-dark rounded-full">
              {keyword}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            to={`/projects/${project.id}/email`}
            state={{ project }}
            className="inline-flex items-center justify-center px-5 py-2 bg-astral-dark text-white rounded-lg hover:bg-astral"
          >
            Generate Cold Email
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-5 py-2 bg-white border border-astral-dark text-astral-dark rounded-lg hover:bg-astral-light"
          >
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
