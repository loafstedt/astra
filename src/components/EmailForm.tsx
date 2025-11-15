interface EmailFormProps {
  projectName: string;
  professor: string;
  keywords: string[];
  body: string;
}

const EmailForm = ({ projectName, professor, keywords, body }: EmailFormProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-astral-light">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-700">
          Project
          <input
            value={projectName}
            readOnly
            className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700">
          Professor
          <input
            value={professor}
            readOnly
            className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 md:col-span-2">
          Keywords
          <input
            value={keywords.join(', ')}
            readOnly
            className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
          />
        </label>
      </div>
      <label className="flex flex-col text-sm font-medium text-slate-700">
        Cold Email Draft
        <textarea
          value={body}
          readOnly
          rows={8}
          className="mt-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
        />
      </label>
    </div>
  );
};

export default EmailForm;
