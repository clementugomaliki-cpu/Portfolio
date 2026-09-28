import { useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Olotu Square Tech Explorers Bootcamp',
    type: 'Frontend',
    detail: 'A landing page with a registration section for a tech summer bootcamp for kids.',
    stack: ['React', 'Tailwind CSS'],
    number: '01',
    accent: 'cobalt',
    github: 'https://github.com/clementugomaliki-cpu/tech-explorer',
    demo: 'https://tech-explorer-blush.vercel.app/',
  },
  {
    title: 'MerchbyLucius',
    type: 'Full stack',
    detail: 'A marketplace for educational content for kids, with dedicated roles for creators, purchasers, and affiliates.',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    number: '02',
    accent: 'coral',
    github: 'https://github.com/clementugomaliki-cpu/MerchbyLucius',
    demo: 'https://merchbylucius.com.ng/',
  },
]

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Node.js', 'Express.js', 'MongoDB', 'REST APIs',
  'Git', 'GitHub', 'VS Code', 'Postman',
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const filters = ['All work', 'Frontend', 'Full stack']
  const visibleProjects = activeFilter === 'All work'
    ? projects
    : projects.filter((project) => project.type === activeFilter)

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">CLEMENT<span>/DEV</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#approach">Skills</a><a href="#contact">Contact</a></div>
        <a className="status-pill" href="mailto:clementugomaliki@gmail.com"><i /> Open to opportunities</a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy"><p className="eyebrow">WEB DEVELOPER <span>///</span> PORTFOLIO</p><h1>Hi, I’m<br /><em>Clement.</em></h1><p className="hero-lede">I build modern, responsive, and practical web applications, from intuitive interfaces to the backend infrastructure that makes them work.</p><div className="hero-actions"><a className="button button-dark" href="#work">See selected work <span>↓</span></a><a className="text-link" href="mailto:clementugomaliki@gmail.com">Start a conversation <span>↗</span></a></div></div>
        <div className="system-card" aria-label="Developer system map"><div className="system-top"><span>developer_profile.exe</span><span>01 / 04</span></div><div className="orbit orbit-one"><span>API</span></div><div className="orbit orbit-two"><span>UI</span></div><div className="core-node"><b>WEB<br />DEV</b><small>Clement U. Maliki</small></div><div className="system-label label-one">01 &nbsp; Shape the interface</div><div className="system-label label-two">02 &nbsp; Build the logic</div><div className="system-label label-three">03 &nbsp; Solve real problems</div><div className="system-footer"><span>STATUS: BUILDING</span><span>PORT HARCOURT, NG</span></div></div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>RESPONSIVE WEB APPS <span>✳</span> PRACTICAL SOLUTIONS <span>✳</span> FRONTEND + BACKEND <span>✳</span> RESPONSIVE WEB APPS <span>✳</span> PRACTICAL SOLUTIONS <span>✳</span></div></section>

      <section className="content-section work-section" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Things I have<br /><em>made useful.</em></h2></div><div className="filter-tabs" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><span className="project-number">{project.number}</span><div className="visual-lines"><b>{project.type.toUpperCase()}</b><span>→</span></div><div className="visual-bars"><i /><i /><i /></div></div><div className="project-meta"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.detail}</p><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={project.demo} target="_blank" rel="noreferrer">Live demo <span>↗</span></a></div></div></article>)}</div></section>

      <section className="content-section about-section" id="about"><div><p className="eyebrow">ABOUT ME</p><h2>Ideas into<br /><em>experiences.</em></h2></div><div className="about-copy"><p>I am Clement Ugochukwu Maliki, a full-stack web developer focused on building modern, responsive, and practical web applications. I enjoy taking an idea from the initial concept through the user interface, application logic, and backend infrastructure needed to make it work.</p><p>I enjoy learning by building real projects and solving practical problems, with the goal of creating reliable applications that combine a good user experience with solid backend functionality.</p><a className="text-link" href="#contact">Let’s build something useful <span>↗</span></a></div></section>

      <section className="content-section split-section" id="approach"><div><p className="eyebrow">TECHNOLOGIES</p><h2>Tools for<br /><em>the work.</em></h2></div><div className="approach-copy"><p>These are the technologies and tools I use to build responsive interfaces, web applications, and backend services.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s build<br /><em>together.</em></h2></div><a className="contact-arrow" href="mailto:clementugomaliki@gmail.com">clementugomaliki@gmail.com <span>↗</span></a></section><footer><span>CLEMENT/DEV</span><span>Port Harcourt, Nigeria</span><span>© 2026</span></footer>
    </main>
  )
}

export default App
