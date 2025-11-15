import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-astral text-white' : 'text-slate-600 hover:text-astral-dark'
    }`;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-astral-dark">
          Astra
        </Link>
        <nav className="flex items-center gap-3">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/resume-tools" className={linkClasses}>
            Develop Skills
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Search Research
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
