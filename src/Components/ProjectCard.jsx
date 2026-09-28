function ProjectCard({ project }) {
  return (
    <article className=" group rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
     <div className="h-56 overflow-hidden bg-slate-100">
        <img src={project.image} alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
     </div>    
        
      <div className="p-6 flex flex-col gap-2">
        <p className="text-sm font-semibold text-slate-500">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-600 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-5">
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-950 hover:underline"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-950 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>

    </article>
  );
}

export default ProjectCard;