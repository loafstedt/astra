import { useState } from 'react';
import { scoreResume } from '../utils/scoreResume';

function ResumeScore() {
  const [details, setDetails] = useState({
    skills: '',
    experiences: '',
    gpa: '',
    keywords: '',
  });
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleScore = () => {
    setScore(scoreResume(details));
  };

  return (
    <div className="rounded-2xl border border-astral-dark/20 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-astral-dark">Resume Scoring</h3>
      <p className="mt-2 text-sm text-slate-600">
        Enter highlights from your resume to generate a readiness score.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-600">
          Skills
          <input
            name="skills"
            value={details.skills}
            onChange={handleChange}
            placeholder="Python, lab techniques"
            className="mt-1 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600">
          Experiences
          <input
            name="experiences"
            value={details.experiences}
            onChange={handleChange}
            placeholder="Internships, lab assistant"
            className="mt-1 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600">
          GPA
          <input
            name="gpa"
            value={details.gpa}
            onChange={handleChange}
            placeholder="3.8"
            className="mt-1 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-600">
          Keywords
          <textarea
            name="keywords"
            value={details.keywords}
            onChange={handleChange}
            placeholder="Genomics, data analysis, CRISPR"
            className="mt-1 h-24 rounded-lg border border-astral-dark/30 bg-astral-light/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-dark"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={handleScore}
        className="mt-4 w-full rounded-full bg-astral-dark px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-astral-dark/90"
      >
        Generate Score
      </button>
      {score !== null && (
        <div className="mt-4 rounded-lg bg-astral-light/70 px-4 py-3 text-astral-dark">
          <p className="text-sm font-semibold">Estimated Readiness Score: {score}/100</p>
          <p className="mt-1 text-xs text-slate-600">
            This is a placeholder score. Refine your details for better accuracy when the AI model is connected.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResumeScore;
