function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className=" mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Clement. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Back to top
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-950 transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;