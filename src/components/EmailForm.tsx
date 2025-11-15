import { useMemo, useState } from 'react';
import { generateEmail } from '../utils/generateEmail';
import type { Project } from '../data/projects';

type EmailFormProps = {
  project: Project;
};

function EmailForm({ project }: EmailFormProps) {
  const [studentName, setStudentName] = useState('Jordan Rivers');
  const [studentBackground, setStudentBackground] = useState(
    'third-year Biology student passionate about genomics research',
  );
  const emailBody = useMemo(
    () => generateEmail({ project, studentName, studentBackground }),
    [project, studentName, studentBackground],
  );

  return (
    <section className="rounded-2xl border border-astral-dark/20 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-astral-dark">Cold Email Draft</h2>
      <p className="mt-2 text-sm text-slate-600">
        Customize the fields below to tailor your outreach to {project.professor}.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-600">
          Your Name
          <input
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            className="mt-1 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600 sm:col-span-2">
          Background Snapshot
          <textarea
            value={studentBackground}
            onChange={(event) => setStudentBackground(event.target.value)}
            className="mt-1 h-24 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
      </div>
      <div className="mt-6 rounded-xl border border-astral-dark/10 bg-astral-light/70 p-4 text-sm leading-relaxed text-slate-700 shadow-inner">
        <pre className="whitespace-pre-wrap font-sans">{emailBody}</pre>
      </div>
    </section>
  );
}

export default EmailForm;
