import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4 border border-astral-light">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-astral-dark">{project.title}</h3>
        <p className="text-sm text-slate-600">Supervised by {project.professor}</p>
        <p className="text-slate-600">{project.shortDescription}</p>
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="inline-flex items-center justify-center px-4 py-2 bg-astral text-white rounded-lg hover:bg-astral-dark"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
