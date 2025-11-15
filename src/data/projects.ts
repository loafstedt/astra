export interface Project {
  id: string;
  departmentId: string;
  title: string;
  professor: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
}

export const projects: Project[] = [
  {
    id: 'bio-1',
    departmentId: 'biology',
    title: 'Project 1: Microbial Genomics',
    professor: 'Dr. Elena Park',
    shortDescription: 'Analyze microbial genomes to identify antibiotic resistance patterns.',
    longDescription:
      'This project explores microbial genomic data to understand how bacteria develop resistance to antibiotics. Students will learn sequencing analysis, bioinformatics workflows, and collaborate on weekly data discussions.',
    keywords: ['genomics', 'antibiotics', 'bioinformatics'],
  },
  {
    id: 'bio-2',
    departmentId: 'biology',
    title: 'Project 2: Coral Reef Restoration',
    professor: 'Dr. Marcus Lee',
    shortDescription: 'Assist in lab-based coral growth experiments and field data analysis.',
    longDescription:
      'Work alongside marine scientists to test restoration techniques for coral reefs. Duties include lab work, data visualization, and contributing to a community impact report.',
    keywords: ['marine biology', 'conservation', 'field research'],
  },
  {
    id: 'cs-1',
    departmentId: 'computer-science',
    title: 'Project 1: AI for Education',
    professor: 'Dr. Priya Natarajan',
    shortDescription: 'Build models that personalize learning pathways for high school students.',
    longDescription:
      'Join an interdisciplinary team to design machine learning tools that adapt educational content to student needs. Expect work with TypeScript, Python, and UX researchers.',
    keywords: ['machine learning', 'education', 'UX research'],
  },
  {
    id: 'cs-2',
    departmentId: 'computer-science',
    title: 'Project 2: Cybersecurity Simulation',
    professor: 'Dr. Aaron Chen',
    shortDescription: 'Develop interactive simulations to teach core cybersecurity concepts.',
    longDescription:
      'Students will prototype browser-based simulations that demonstrate network vulnerabilities and defense strategies. Collaboration with campus IT is required.',
    keywords: ['cybersecurity', 'simulation', 'web development'],
  },
  {
    id: 'psych-1',
    departmentId: 'psychology',
    title: 'Project 1: Cognitive Flexibility Study',
    professor: 'Dr. Laila Martinez',
    shortDescription: 'Run behavioral experiments exploring adaptability in decision-making.',
    longDescription:
      'Assist with experiment design, participant recruitment, and statistical analysis to understand how students switch tasks under pressure.',
    keywords: ['cognition', 'behavioral science', 'statistics'],
  },
  {
    id: 'eng-1',
    departmentId: 'engineering',
    title: 'Project 1: Sustainable Materials Lab',
    professor: 'Dr. Omar Hussein',
    shortDescription: 'Test eco-friendly composites for civil engineering applications.',
    longDescription:
      'Help design lab experiments, document findings, and iterate on new material blends that reduce carbon footprints.',
    keywords: ['materials', 'sustainability', 'lab research'],
  },
  {
    id: 'biz-1',
    departmentId: 'business',
    title: 'Project 1: Social Impact Analytics',
    professor: 'Dr. Ava Johnson',
    shortDescription: 'Analyze startups focused on social good and produce impact dashboards.',
    longDescription:
      'Conduct market research, interview founders, and build analytics dashboards that quantify impact outcomes for investors.',
    keywords: ['social impact', 'analytics', 'startups'],
  },
];
