const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Astra. Empowering student researchers.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-astral-dark">
            Privacy
          </a>
          <a href="#" className="hover:text-astral-dark">
            Terms
          </a>
          <a href="#" className="hover:text-astral-dark">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
