import { useMemo, useState } from 'react';
import { departments } from '../data/departments';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectSearch = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('biology');

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.departmentId === selectedDepartment),
    [selectedDepartment]
  );

  return (
    <div className="px-6 py-12 lg:px-16 space-y-10">
      <header className="space-y-3 max-w-3xl">
        <h1 className="text-4xl font-bold text-astral-dark">Search Faculty Research</h1>
        <p className="text-slate-600">
          Select a department to explore active research projects, learn about faculty mentors, and prepare for your outreach.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-astral-light">
        <label className="text-sm font-medium text-slate-700 flex flex-col gap-2">
          Department
          <select
            value={selectedDepartment}
            onChange={(event) => setSelectedDepartment(event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-2"
          >
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default ProjectSearch;
