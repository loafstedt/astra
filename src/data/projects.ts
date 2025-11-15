export type Project = {
  id: string;
  departmentId: string;
  title: string;
  professor: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
};

export const projects: Project[] = [
  {
    id: 'bio-1',
    departmentId: 'biology',
    title: 'Genomics Data Integration',
    professor: 'Dr. Elena Vargas',
    shortDescription: 'Analyze multi-omics datasets to uncover genomic regulatory networks.',
    longDescription:
      'This project combines wet-lab and computational approaches to investigate regulatory elements in plant genomes. Students will work with sequencing datasets, perform bioinformatic analyses, and collaborate with graduate mentors to validate findings in the lab.',
    keywords: ['genomics', 'bioinformatics', 'plant biology'],
  },
  {
    id: 'bio-2',
    departmentId: 'biology',
    title: 'Marine Microbiome Dynamics',
    professor: 'Dr. Marcus Lee',
    shortDescription: 'Investigate how environmental changes impact microbial populations in coastal waters.',
    longDescription:
      'Students will collect field samples, culture microbial communities, and use DNA barcoding to identify key species. Data visualization and statistical modeling will be used to understand the impact of climate variables on biodiversity.',
    keywords: ['marine science', 'microbiology', 'climate'],
  },
  {
    id: 'chem-1',
    departmentId: 'chemistry',
    title: 'Sustainable Polymer Design',
    professor: 'Dr. Priya Raman',
    shortDescription: 'Design biodegradable polymers for packaging applications.',
    longDescription:
      'Work in a collaborative lab to synthesize and characterize new polymer blends. Students will learn green chemistry principles, operate analytical instrumentation, and present results in weekly group meetings.',
    keywords: ['materials science', 'sustainability', 'polymer chemistry'],
  },
  {
    id: 'cs-1',
    departmentId: 'computer-science',
    title: 'AI for Scientific Discovery',
    professor: 'Dr. Anil Sato',
    shortDescription: 'Build machine learning models that accelerate hypothesis generation in biology.',
    longDescription:
      'Students will develop machine learning pipelines that process large biological datasets. The project emphasizes model interpretability, reproducibility, and collaboration with domain experts from the biology department.',
    keywords: ['machine learning', 'data science', 'interdisciplinary'],
  },
  {
    id: 'psy-1',
    departmentId: 'psychology',
    title: 'Cognitive Resilience Lab',
    professor: 'Dr. Naomi Chen',
    shortDescription: 'Study how mindfulness training influences executive function in college students.',
    longDescription:
      'Participate in designing behavioral experiments, administering surveys, and analyzing EEG data. Students will co-author conference posters and receive mentorship on graduate school preparation.',
    keywords: ['cognition', 'neuroscience', 'mindfulness'],
  },
];

export const getProjectById = (id: string) => projects.find((project) => project.id === id);
