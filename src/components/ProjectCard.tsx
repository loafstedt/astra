import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-astral-dark/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <h3 className="text-lg font-semibold text-astral-dark">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{project.professor}</p>
        <p className="mt-3 text-sm text-slate-700">{project.shortDescription}</p>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-astral-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-astral-dark/90"
      >
        View Details
      </Link>
    </article>
  );
}

export default ProjectCard;
