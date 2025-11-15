const normalizeScore = (value: number) => Math.min(100, Math.max(40, Math.round(value)));

type ResumeInputs = {
  skills: string;
  experiences: string;
  gpa: string;
  keywords: string;
};

export const scoreResume = ({ skills, experiences, gpa, keywords }: ResumeInputs) => {
  const skillBoost = skills ? Math.min(skills.split(',').length * 8, 25) : 0;
  const experienceBoost = experiences ? Math.min(experiences.split(',').length * 10, 30) : 0;
  const keywordBoost = keywords ? Math.min(keywords.split(',').length * 5, 15) : 0;
  const gpaValue = Number.parseFloat(gpa);
  const gpaBoost = Number.isFinite(gpaValue) ? Math.min(Math.max((gpaValue - 2.5) * 20, 0), 20) : 0;

  const baseScore = 50;
  const total = baseScore + skillBoost + experienceBoost + keywordBoost + gpaBoost;
  return normalizeScore(total);
};
