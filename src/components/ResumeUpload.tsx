import { useRef, useState } from 'react';

function ResumeUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>('No file chosen');

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    setFileName(file ? file.name : 'No file chosen');
  };

  return (
    <div className="rounded-2xl border border-astral-dark/20 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-astral-dark">Resume Upload</h3>
      <p className="mt-2 text-sm text-slate-600">
        Upload your current resume to receive instant feedback.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full cursor-pointer rounded-lg border border-dashed border-astral-dark/30 bg-astral-light/40 px-4 py-3 text-sm text-slate-600 focus:outline-none"
        />
        <span className="text-sm text-slate-500">{fileName}</span>
      </div>
    </div>
  );
}

export default ResumeUpload;
