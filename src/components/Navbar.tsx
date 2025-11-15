import { Link, NavLink } from 'react-router-dom';

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive ? 'bg-astral-dark text-white' : 'text-astral-dark hover:bg-white/60'
  }`;

function Navbar() {
  return (
    <header className="border-b border-astral-dark/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-astral-dark">
          Astra
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/resume-tools" className={navLinkClasses}>
            Develop Skills
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            Search Research
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
