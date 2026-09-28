import { LuGithub, LuLinkedin } from "react-icons/lu";

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-18 ">
      <div className="max-w-8xl mx-auto px-6 flex flex-col gap-4">

        <div className="max-w-3xl ">
          <p className="text-sm font-semibold tracking-widest text-slate-500 mb-4">
            CONTACT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's build something together.
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Have a project, opportunity, or idea you'd like to discuss?
            I'd be happy to hear from you.
          </p>
        </div>


        <div className="mt-12 grid md:grid-cols-2 gap-8">

  {/* Contact information */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
    <h3 className="text-lg font-semibold">
      Contact Information
    </h3>

    <div className="mt-6 space-y-5 flex flex-col gap-4">

      <div>
        <p className="text-sm font-semibold text-slate-500">
          EMAIL
        </p>

        <a
          href="mailto:clementugomaliki@gmail.com"
          className="mt-2 inline-block text-slate-900 hover:underline"
        >
          clementugomaliki@gmail.com
        </a>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-500">
          LOCATION
        </p>

        <p className="mt-2 text-slate-700">
          Port Harcourt, Nigeria
        </p>
      </div>

    </div>
  </div>


        {/* Let's connect */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
            I'm open to opportunities, collaborations, and interesting
            projects. Feel free to reach out through email or connect
            with me on my professional platforms.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

            <a href="https://github.com/clementugomaliki-cpu"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            > <LuGithub/> GitHub </a>

            <a
                href="https://www.linkedin.com/in/clement-ugochukwu-maliki/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            > <LuLinkedin/> LinkedIn </a>

            </div>
        </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;