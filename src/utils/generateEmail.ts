import type { Project } from '../data/projects';

type GenerateEmailParams = {
  project: Project;
  studentName: string;
  studentBackground: string;
};

export const generateEmail = ({ project, studentName, studentBackground }: GenerateEmailParams) => `Subject: Interest in ${project.title}

Dear ${project.professor.split(' ')[0]},

My name is ${studentName}, a ${studentBackground}. I recently discovered your project, “${project.title},” and was especially drawn to its focus on ${project.keywords.slice(0, 2).join(' and ')}.

Over the past year, I have strengthened my skills through coursework and hands-on projects that align closely with your lab’s goals. I would love to contribute to your team by supporting ongoing experiments and learning from your mentorship.

If you are open to it, I would appreciate the chance to discuss how I can support your work this semester. I have attached my resume and can share any additional materials upon request.

Thank you for your time and consideration, and I look forward to the possibility of collaborating with you.

Best regards,
${studentName}`;
