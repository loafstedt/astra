import { FormEvent, useState } from 'react';

const MailingList = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Mailing list submission:', email);
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="flex-1 min-w-[200px] px-4 py-2 rounded-lg border border-astral bg-white shadow"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-astral-dark text-white rounded-lg shadow hover:bg-astral"
        >
          Join
        </button>
      </form>
      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Success! You&apos;re on the list.
        </div>
      )}
    </div>
  );
};

export default MailingList;
