import ResumeUpload from '../components/ResumeUpload';
import ResumeScore from '../components/ResumeScore';

function ResumeTools() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="rounded-3xl border border-astral-dark/20 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-astral-dark">Develop Your Research Skills</h1>
        <p className="mt-2 text-sm text-slate-600">
          Use these tools to polish your resume before reaching out to faculty. Upload documents, track essential inputs, and generate a readiness score.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <ResumeUpload />
          <div className="rounded-2xl border border-astral-dark/20 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-astral-dark">Possible Inputs</h3>
            <p className="mt-2 text-sm text-slate-600">
              Jot down details that will help Astra tailor recommendations in future updates.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <li className="rounded-xl border border-dashed border-astral-dark/30 bg-astral-light/40 px-4 py-3">
                Technical skills (e.g., R, MATLAB)
              </li>
              <li className="rounded-xl border border-dashed border-astral-dark/30 bg-astral-light/40 px-4 py-3">
                Research experiences & lab positions
              </li>
              <li className="rounded-xl border border-dashed border-astral-dark/30 bg-astral-light/40 px-4 py-3">
                GPA & coursework highlights
              </li>
              <li className="rounded-xl border border-dashed border-astral-dark/30 bg-astral-light/40 px-4 py-3">
                Keywords of interest (e.g., neuroscience, sustainability)
              </li>
            </ul>
          </div>
        </div>
        <ResumeScore />
      </section>
    </div>
  );
}

export default ResumeTools;
