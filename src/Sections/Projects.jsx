import ProjectCard from "../components/ProjectCard";
import merchbyl from "../assets/images/merchbyl.png";

function Projects() {
  const projects = [
    {
      title: "Responsive Landing Page",
      category: "FRONTEND",
      description:
        "A modern responsive landing page built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
        image: merchbyl,
      title: "MerchbyLucius",
      category: "FRONTEND + BACKEND",
      description:
        "A marketplace for educational content for kids, comprising of various user roles - creators, purchasers, and affiliates.",
      technologies: ["React", "Tailwind CSS", "JavaScript, Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/clementugomaliki-cpu/MerchbyLucius",
      demo: "https://merchbylucius.com.ng/",
    },
    {
      title: "Clevis Gadgets API",
      category: "BACKEND",
      description:
        "An e-commerce marketplace backend with authentication, products, carts, orders, and REST API endpoints.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

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