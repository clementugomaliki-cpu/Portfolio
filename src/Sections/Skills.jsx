function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 ">

        <div className="max-w-2xl flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-slate-500 mb-4">
            SKILLS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            These are the technologies and tools I'm currently using
            to build responsive interfaces, web applications, and
            backend services.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;