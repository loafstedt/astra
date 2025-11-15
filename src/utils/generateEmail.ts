interface GenerateEmailOptions {
  studentName?: string;
  projectName: string;
  professor: string;
  keywords: string[];
}

const generateEmail = ({ studentName = 'Your Name', projectName, professor, keywords }: GenerateEmailOptions) => {
  const keywordSentence = keywords.length
    ? `I was especially drawn to the focus on ${keywords.slice(0, -1).join(', ')}${
        keywords.length > 1 ? ' and ' : ''
      }${keywords[keywords.length - 1]}.`
    : '';

  return `Dear ${professor},

My name is ${studentName}, and I am excited about the opportunity to contribute to ${projectName}.
${keywordSentence} I would love to learn more about your current work and share how my background could support the team.

If you are available, I would appreciate the chance to meet for a brief conversation or provide additional materials.

Thank you for your time and consideration.

Best regards,
${studentName}`;
};

export default generateEmail;
