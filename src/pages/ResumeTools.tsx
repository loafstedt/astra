import { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';
import ResumeScore from '../components/ResumeScore';

const ResumeTools = () => {
  const [inputs, setInputs] = useState({
    skills: '',
    experiences: '',
    gpa: '',
    keywords: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="px-6 py-12 lg:px-16 space-y-10">
      <header className="max-w-4xl mx-auto text-center space-y-3">
        <h1 className="text-4xl font-bold text-astral-dark">Develop Your Research Skills</h1>
        <p className="text-slate-600">
          Build a standout research resume using our builder, upload tools, and scoring insights. All features are powered by placeholder logic so you can experiment freely.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ResumeUpload />
          <div className="bg-white rounded-xl shadow p-6 space-y-6 border border-astral-light">
            <h2 className="text-2xl font-semibold text-astral-dark">Resume Builder Inputs</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col text-sm font-medium text-slate-700">
                Skills
                <textarea
                  name="skills"
                  value={inputs.skills}
                  onChange={handleChange}
                  placeholder="List technical, analytical, or lab skills"
                  rows={3}
                  className="mt-1 rounded-lg border border-slate-200 px-3 py-2"
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-slate-700">
                Experiences
                <textarea
                  name="experiences"
                  value={inputs.experiences}
                  onChange={handleChange}
                  placeholder="Highlight relevant projects, labs, or internships"
                  rows={3}
                  className="mt-1 rounded-lg border border-slate-200 px-3 py-2"
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-slate-700">
                GPA
                <input
                  type="text"
                  name="gpa"
                  value={inputs.gpa}
                  onChange={handleChange}
                  placeholder="e.g., 3.7 / 4.0"
                  className="mt-1 rounded-lg border border-slate-200 px-3 py-2"
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-slate-700">
                Keywords
                <input
                  type="text"
                  name="keywords"
                  value={inputs.keywords}
                  onChange={handleChange}
                  placeholder="Genomics, mentorship, etc."
                  className="mt-1 rounded-lg border border-slate-200 px-3 py-2"
                />
              </label>
            </div>
            <p className="text-xs text-slate-500">
              These inputs feed into future automation that can generate bullet points, format your resume, and align with faculty interests.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <ResumeScore />
          <div className="bg-astral-light rounded-xl border border-astral-light shadow-inner p-6 space-y-3">
            <h3 className="text-xl font-semibold text-astral-dark">How it Works</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>1. Add your latest achievements in the builder.</li>
              <li>2. Upload your current resume for formatting tips.</li>
              <li>3. Use the score to gauge readiness before contacting faculty.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTools;
