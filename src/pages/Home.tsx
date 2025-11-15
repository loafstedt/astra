import { Link } from 'react-router-dom';
import MailingList from '../components/MailingList';

const Home = () => {
  return (
    <div className="px-6 py-12 lg:px-16 space-y-16">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-astral-dark">
          Discover Your Research Path with Astra
        </h1>
        <p className="text-lg text-slate-600">
          Explore faculty projects, level up your research resume, and reach out with confidence—all in one beautiful, student-friendly hub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/resume-tools"
            className="bg-astral-dark text-white px-6 py-3 rounded-lg shadow hover:bg-astral"
          >
            Develop Your Research Skills
          </Link>
          <Link
            to="/projects"
            className="bg-white border border-astral-dark text-astral-dark px-6 py-3 rounded-lg shadow hover:bg-astral-light"
          >
            Search Faculty Research
          </Link>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-xl p-8 space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-astral-dark">Search Faculty Research</h2>
            <p className="text-slate-600">
              Browse projects by department to find the perfect fit for your interests and skills.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-5 py-2 bg-astral text-white rounded-lg hover:bg-astral-dark"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h2 className="text-2xl font-semibold text-astral-dark text-center">Join the Astra Mailing List</h2>
        <MailingList />
      </section>
    </div>
  );
};

export default Home;
