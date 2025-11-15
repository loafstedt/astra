import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { departments } from '../data/departments';
import { projects } from '../data/projects';

function ProjectSearch() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('biology');

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.departmentId === selectedDepartment),
    [selectedDepartment],
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <header className="rounded-3xl border border-astral-dark/20 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-astral-dark">Search Faculty Research</h1>
        <p className="mt-2 text-sm text-slate-600">
          Choose a department to view current faculty-led projects inviting undergraduate collaborators.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="text-sm text-slate-600">
            Department
            <select
              value={selectedDepartment}
              onChange={(event) => setSelectedDepartment(event.target.value)}
              className="mt-1 w-full rounded-full border border-astral-dark/30 bg-astral-light/60 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-astral-dark"
            >
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="rounded-2xl border border-dashed border-astral-dark/40 bg-white/60 p-6 text-sm text-slate-600">
            No projects available in this department yet. Check back soon!
          </p>
        )}
      </section>
    </div>
  );
}

export default ProjectSearch;
