import ProjectCard from "../Components/ProjectCard";
import merchbyl from "../assets/images/merchbyl.png";
import techExplorer from "../assets/images/techExplorer.png";

function Projects() {
  const projects = [
    {   image: techExplorer,
      title: "Olotu Square Tech Explorers Bootcamp",
      category: "FRONTEND",
      description:
        "A landing page with a registration section for a tech summer bootcamp for kids.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/clementugomaliki-cpu/tech-explorer",
      demo: "https://tech-explorer-blush.vercel.app/",
    },
    {
        image: merchbyl,
      title: "MerchbyLucius",
      category: "FRONTEND + BACKEND",
      description:
        "A marketplace for educational content for kids, comprising of various user roles - creators, purchasers, and affiliates.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/clementugomaliki-cpu/MerchbyLucius",
      demo: "https://merchbylucius.com.ng/",
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-18">
      <div className=" mx-auto px-6 flex flex-col gap-4">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-slate-500 mb-4">
            PROJECTS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Things I've built
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A selection of projects I've built while developing my
            frontend and backend skills.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;