import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'
import photo from '../assets/photo.js'

const SKILLS = [
  { label: 'HTML / CSS',          pct: 95 },
  { label: 'React / JavaScript',  pct: 90 },
  { label: 'Tailwind CSS',        pct: 88 },
  { label: 'Responsive Design',   pct: 92 },
]

const PILLS = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Git & GitHub']

function SkillBar({ label, pct }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = pct + '%'
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div className="mb-4">
      <div className="flex justify-between text-[12px] tracking-[0.06em] uppercase text-muted mb-1.5">
        <span>{label}</span>
        <span className="text-accent2">{pct}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{ width: '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const titleRef = useReveal()
  const imgRef   = useReveal()
  const textRef  = useReveal()

  return (
    <section id="about" className="py-32 px-16 max-w-[1100px] mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
        <span className="block w-8 h-px bg-accent" />
        Who I am
      </div>

      <h2
        ref={titleRef}
        className="reveal font-syne font-extrabold leading-[1.15] mb-4"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Passionate about<br />clean, fast interfaces.
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-16">

        {/* Image */}
        <div ref={imgRef} className="reveal relative flex justify-center animate-imgPulse">
          {/* Outer rings */}
          <span className="absolute inset-[-12px] border border-[rgba(108,99,255,0.2)] rounded-2xl pointer-events-none" />
          <span className="absolute inset-[-24px] border border-[rgba(108,99,255,0.08)] rounded-[28px] pointer-events-none" />
          <img
            src={photo}
            alt="Shah Hamdan"
            className="rounded-2xl block"
            style={{ width: '280px', height: '320px', objectFit: 'cover', objectPosition: 'top', margin: '0 auto' }}
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="reveal">
          <p className="text-[1.05rem] text-muted leading-[1.85] mb-6">
            I'm a <strong className="text-[#f0eff8] font-medium">Frontend Web Developer</strong> with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on creating clean, responsive, and high-performing user interfaces that deliver a smooth experience across all devices.
          </p>
          <p className="text-[1.05rem] text-muted leading-[1.85] mb-6">
            Whether it's bringing a design to life or building a component-based architecture, I enjoy writing <strong className="text-[#f0eff8] font-medium">efficient and maintainable code</strong>. I take pride in turning complex ideas into polished, interactive web applications.
          </p>
          <p className="text-[1.05rem] text-muted leading-[1.85] mb-8">
            My goal is to build interfaces that not only <strong className="text-[#f0eff8] font-medium">look great</strong> but also feel fast, intuitive, and reliable.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] px-4 py-1.5 rounded-full text-[13px] text-[#f0eff8] transition-all duration-200 hover:border-[rgba(108,99,255,0.5)] hover:bg-[rgba(108,99,255,0.08)]"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Skill bars */}
          <div>
            {SKILLS.map((s) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
