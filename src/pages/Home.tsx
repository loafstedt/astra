import { Link } from 'react-router-dom';
import MailingList from '../components/MailingList';

function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <section className="rounded-3xl bg-gradient-to-br from-white via-astral-light/60 to-white p-8 shadow-lg sm:p-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-astral-dark sm:text-4xl">
              Welcome to Astra
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Your launchpad for research careers. Discover faculty projects, sharpen your application materials, and connect with mentors ready to collaborate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/resume-tools"
                className="rounded-full bg-astral-dark px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-astral-dark/90"
              >
                Develop Your Research Skills
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-astral-dark px-6 py-3 text-sm font-semibold text-astral-dark transition hover:bg-white"
              >
                Search Faculty Research
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-astral-dark/20 bg-white/80 p-6 text-sm text-slate-700 shadow-inner">
            <h2 className="text-lg font-semibold text-astral-dark">Three flows to guide your research journey:</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-astral-dark text-xs font-semibold text-white">
                  1
                </span>
                <p>
                  Develop your application toolkit with resume builders, uploaders, and smart scoring suggestions.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-astral-dark text-xs font-semibold text-white">
                  2
                </span>
                <p>
                  Explore faculty research across departments and dive into detailed project briefs.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-astral-dark text-xs font-semibold text-white">
                  3
                </span>
                <p>
                  Generate polished outreach emails with Astra’s cold email assistant.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-astral-dark/20 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-astral-dark">Develop Your Research Skills</h2>
          <p className="mt-3 text-sm text-slate-700">
            Access resume builders, upload tools, and scoring insights tailored for research roles.
          </p>
          <Link
            to="/resume-tools"
            className="mt-4 inline-flex items-center text-sm font-semibold text-astral-dark hover:underline"
          >
            Open tools →
          </Link>
        </div>
        <div className="rounded-3xl border border-astral-dark/20 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-astral-dark">Search Faculty Research</h2>
          <p className="mt-3 text-sm text-slate-700">
            Browse projects by department, review descriptions, and connect with faculty mentors.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center text-sm font-semibold text-astral-dark hover:underline"
          >
            Explore projects →
          </Link>
        </div>
      </section>

      <MailingList />
    </div>
  );
}

export default Home;
