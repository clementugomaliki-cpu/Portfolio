function About() {
  return (
    <section id="about" className="py-12 md:py-18">
      <div className="max-w-8xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold tracking-widest text-slate-500 mb-4">
                    ABOUT ME
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    I enjoy turning ideas into useful web experiences.
                </h2>

                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                    I am Clement Ugochukwu Maliki, a full-stack web developer focused on building modern,
                    responsive, and practical web applications. I enjoy taking
                    an idea from the initial concept through the user interface,
                    application logic, and backend infrastructure needed to make
                    it work.
                </p>

                {/* <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    I work with frontend technologies such as HTML, CSS, JavaScript,
                    React, and Tailwind CSS, while also building my backend experience
                    with Node.js, Express.js, MongoDB, and REST APIs.
                </p> */}

                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    I enjoy learning by building real projects and solving practical
                    problems, with the goal of creating reliable applications that
                    combine a good user experience with solid backend functionality.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
}

export default About;