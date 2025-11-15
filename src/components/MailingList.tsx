import { useState } from 'react';

function MailingList() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Mailing list signup:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="rounded-2xl border border-astral-dark/20 bg-white/90 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-astral-dark">Join the Astra Mailing List</h3>
      <p className="mt-2 text-sm text-slate-600">
        Receive curated opportunities, events, and guides to keep your research journey on track.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.edu"
          className="w-full rounded-full border border-astral-dark/30 bg-astral-light/50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-astral-dark"
        />
        <button
          type="submit"
          className="rounded-full bg-astral-dark px-5 py-2 text-sm font-semibold text-white transition hover:bg-astral-dark/90"
        >
          Join
        </button>
      </form>
      {submitted && (
        <div className="mt-3 rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-700 shadow-sm">
          Successfully joined! Check the console for your submission.
        </div>
      )}
    </div>
  );
}

export default MailingList;
