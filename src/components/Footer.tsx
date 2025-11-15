function Footer() {
  return (
    <footer className="border-t border-astral-dark/10 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-astral-dark sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Astra. Empowering student researchers.</p>
        <p className="text-xs">Built with React, Tailwind CSS, and a love for discovery.</p>
      </div>
    </footer>
  );
}

export default Footer;
