import { useRef, useState } from 'react';

const ResumeUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="border border-dashed border-astral rounded-xl p-6 bg-astral-light/60 text-center space-y-4">
      <h3 className="text-xl font-semibold text-astral-dark">Upload Your Resume</h3>
      <p className="text-slate-600 text-sm">
        Drop your PDF or DOCX resume here to prepare it for scoring and feedback.
      </p>
      <button
        type="button"
        onClick={triggerUpload}
        className="px-5 py-2 bg-astral-dark text-white rounded-lg shadow hover:bg-astral"
      >
        Choose File
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
      {fileName && <p className="text-sm text-astral-dark">Selected: {fileName}</p>}
    </div>
  );
};

export default ResumeUpload;
