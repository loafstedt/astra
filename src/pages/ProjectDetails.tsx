import { Link, useParams } from 'react-router-dom';
import { getProjectById } from '../data/projects';

function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-rose-200 bg-white p-8 text-center text-rose-600">
        <p className="text-lg font-semibold">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-flex text-sm font-semibold text-astral-dark hover:underline">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <article className="rounded-3xl border border-astral-dark/20 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-astral-dark">{project.title}</h1>
        <p className="mt-1 text-sm text-slate-600">Led by {project.professor}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{project.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-astral-dark/30 bg-astral-light/60 px-3 py-1 text-xs font-semibold text-astral-dark"
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.id}/email`}
            className="rounded-full bg-astral-dark px-5 py-2 text-sm font-semibold text-white transition hover:bg-astral-dark/90"
          >
            Generate Cold Email
          </Link>
          <Link to="/projects" className="rounded-full border border-astral-dark px-5 py-2 text-sm font-semibold text-astral-dark hover:bg-white">
            Back to Search
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ProjectDetails;
