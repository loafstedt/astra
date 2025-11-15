import { Link, useParams } from 'react-router-dom';
import EmailForm from '../components/EmailForm';
import { getProjectById, projects } from '../data/projects';

function ColdEmailGenerator() {
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

  const relatedProjects = projects.filter(
    (item) => item.departmentId === project.departmentId && item.id !== project.id,
  );

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <header className="rounded-3xl border border-astral-dark/20 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-astral-dark">Generate a Cold Email</h1>
        <p className="mt-2 text-sm text-slate-600">
          We pre-filled this draft based on <span className="font-semibold text-astral-dark">{project.title}</span> led by {project.professor}.
        </p>
        <div className="mt-4 grid gap-2 text-xs uppercase tracking-wide text-astral-dark">
          <span>Project: {project.title}</span>
          <span>Professor: {project.professor}</span>
          <span>Keywords: {project.keywords.join(', ')}</span>
        </div>
      </header>

      <EmailForm project={project} />

      <section className="rounded-3xl border border-astral-dark/20 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-astral-dark">More info on projects</h2>
        {relatedProjects.length > 0 ? (
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {relatedProjects.map((item) => (
              <li key={item.id} className="flex flex-col rounded-2xl border border-dashed border-astral-dark/30 bg-astral-light/60 px-4 py-3">
                <span className="font-semibold text-astral-dark">{item.title}</span>
                <span>{item.professor}</span>
                <Link
                  to={`/projects/${item.id}`}
                  className="mt-1 text-xs font-semibold text-astral-dark underline-offset-2 hover:underline"
                >
                  View project details
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-slate-600">
            You’re already exploring the leading opportunity in this department. New listings will appear here soon.
          </p>
        )}
      </section>

      <Link to={`/projects/${project.id}`} className="self-start rounded-full border border-astral-dark px-5 py-2 text-sm font-semibold text-astral-dark hover:bg-white">
        Back to project details
      </Link>
    </div>
  );
}

export default ColdEmailGenerator;
