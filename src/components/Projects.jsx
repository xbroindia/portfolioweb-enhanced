import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    num:    '01',
    title:  'The Shoe Company',
    desc:   'A sleek ecommerce-style landing page showcasing a premium shoe brand with smooth UI and modern design.',
    tags:   ['HTML', 'CSS', 'JavaScript'],
    url:    'https://shoe-comp.netlify.app/',
  },
  {
    num:    '02',
    title:  'Tic Tac Toe Game',
    desc:   'An interactive browser-based game with clean UI, win detection, and reset functionality.',
    tags:   ['JavaScript', 'DOM Manipulation'],
    url:    'https://tic-tac-toe-game-proj.netlify.app/',
  },
  {
    num:    '03',
    title:  'Countries API Explorer',
    desc:   'A React app that fetches and displays country data from REST Countries API with search and filter.',
    tags:   ['React', 'REST API', 'Tailwind'],
    url:    'https://countrie-api-react.netlify.app/',
  },
  {
    num:    '04',
    title:  'Interior Guru Designer',
    desc:   'A visually rich interior design studio website with elegant layout and smooth scroll interactions.',
    tags:   ['HTML', 'CSS', 'Animations'],
    url:    'https://interiror-designing-web.netlify.app/',
  },
  {
    num:    '05',
    title:  'Valentine Greetings',
    desc:   'A fun and animated Valentine\'s Day greeting web app with interactive elements and warm design.',
    tags:   ['HTML', 'CSS Animations', 'JavaScript'],
    url:    'https://valentine-greetings-web.netlify.app/',
  },
]

function ProjectCard({ project, delay = 0 }) {
  const ref = useReveal()

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="reveal project-card relative block bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-[rgba(108,99,255,0.35)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] no-underline text-inherit"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Code peek */}
      <p className="font-mono text-[11px] text-[rgba(108,99,255,0.5)] mb-3 tracking-[0.02em]">
        {project.peek}
      </p>

      {/* Number */}
      <div className="font-syne font-extrabold text-[2.5rem] leading-none text-[rgba(108,99,255,0.15)] mb-4">
        {project.num}
      </div>

      {/* Title */}
      <div className="font-syne font-bold text-[1.15rem] text-[#f0eff8] mb-2">
        {project.title}
      </div>

      {/* Desc */}
      <p className="text-[13px] text-muted leading-[1.6] mb-5">
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-[0.05em] bg-[rgba(108,99,255,0.1)] text-[#a89eff] px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <span className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] uppercase text-accent2 transition-[gap] duration-200 hover:gap-2.5">
        Live Site →
      </span>
    </a>
  )
}

export default function Projects() {
  const titleRef = useReveal()

  return (
    <section id="projects" className="py-32 px-16 max-w-[1100px] mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
        <span className="block w-8 h-px bg-accent" />
        What I've built
      </div>

      <h2
        ref={titleRef}
        className="reveal font-syne font-extrabold leading-[1.15] mb-14"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Selected Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
