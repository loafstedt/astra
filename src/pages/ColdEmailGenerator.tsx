import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import EmailForm from '../components/EmailForm';
import { projects, type Project } from '../data/projects';
import generateEmail from '../utils/generateEmail';

const ColdEmailGenerator = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const [studentName, setStudentName] = useState('Your Name');

  const projectFromState = (location.state as { project?: Project } | undefined)?.project;
  const project = useMemo(() => {
    if (projectFromState) return projectFromState;
    return projects.find((item) => item.id === projectId);
  }, [projectFromState, projectId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="px-6 py-12 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-astral-dark">We couldn&apos;t find that project</h1>
          <p className="text-slate-600">Head back to the project listing to choose another opportunity.</p>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-5 py-2 bg-astral text-white rounded-lg hover:bg-astral-dark"
          >
            Browse Projects
          </Link>
        </div>
      </div>
    );
  }

  const emailBody = generateEmail({
    studentName,
    projectName: project.title,
    professor: project.professor,
    keywords: project.keywords,
  });

  return (
    <div className="px-6 py-12 lg:px-16 space-y-10">
      <header className="space-y-3 max-w-3xl">
        <h1 className="text-4xl font-bold text-astral-dark">Cold Email Generator</h1>
        <p className="text-slate-600">
          Personalize your outreach to <span className="font-semibold text-astral-dark">{project.professor}</span> about <span className="font-semibold text-astral-dark">{project.title}</span>. Update your name below and use the generated email as a starting point.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-astral-light">
        <label className="text-sm font-medium text-slate-700 flex flex-col gap-2 max-w-sm">
          Your Preferred Name
          <input
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            className="rounded-lg border border-slate-200 px-4 py-2"
          />
        </label>
      </div>

      <EmailForm
        projectName={project.title}
        professor={project.professor}
        keywords={project.keywords}
        body={emailBody}
      />

      <section className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-astral-light">
        <h2 className="text-2xl font-semibold text-astral-dark">More info on projects</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>
            Review all <Link to="/projects" className="text-astral-dark underline">faculty research listings</Link> to compare opportunities.
          </li>
          <li>
            Update your resume in the <Link to="/resume-tools" className="text-astral-dark underline">Develop Your Research Skills</Link> hub before sending.
          </li>
          <li>
            Prepare thoughtful questions based on keywords like {project.keywords.join(', ')} to show curiosity.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ColdEmailGenerator;
