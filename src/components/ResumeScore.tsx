import { useState } from 'react';
import scoreResume from '../utils/scoreResume';

const ResumeScore = () => {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScore = async () => {
    setLoading(true);
    const generatedScore = await scoreResume();
    setScore(generatedScore);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="text-xl font-semibold text-astral-dark">Resume Score</h3>
      <p className="text-sm text-slate-600">
        Use our placeholder scoring model to estimate how ready your resume is for research opportunities.
      </p>
      <button
        type="button"
        onClick={handleScore}
        className="px-5 py-2 bg-astral-dark text-white rounded-lg shadow hover:bg-astral flex items-center gap-2"
        disabled={loading}
      >
        {loading ? 'Scoring…' : 'Generate Score'}
      </button>
      {score !== null && (
        <p className="text-lg font-semibold text-astral-dark">Your score: {score}/100</p>
      )}
    </div>
  );
};

export default ResumeScore;
