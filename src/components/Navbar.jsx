import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const NAV_ITEMS = ['home', 'about', 'projects', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 md:px-16 py-5 bg-[rgba(6,6,8,0.7)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]">

        {/* Logo */}
        <div
          className="glitch-logo font-syne font-extrabold text-xl tracking-[0.04em] gradient-text"
          data-text="xbrocoder"
        >
          xbrocoder
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="nav-link capitalize cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block rounded-full text-white text-[13px] font-medium px-5 py-2 transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
          style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
        >
          Hire Me
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] transition-colors duration-200 hover:border-[rgba(108,99,255,0.4)]"
        >
          {/* Top bar */}
          <span
            className="block w-5 h-[1.5px] bg-[#f0eff8] rounded-full transition-all duration-300 origin-center"
            style={{
              transform: open ? 'translateY(7.5px) rotate(45deg)' : 'none',
            }}
          />
          {/* Middle bar */}
          <span
            className="block w-5 h-[1.5px] bg-[#f0eff8] rounded-full transition-all duration-300"
            style={{
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          {/* Bottom bar */}
          <span
            className="block w-5 h-[1.5px] bg-[#f0eff8] rounded-full transition-all duration-300 origin-center"
            style={{
              transform: open ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-[999] md:hidden transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          background: 'rgba(6,6,8,0.6)',
          backdropFilter: 'blur(6px)',
        }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu panel — slides in from right */}
      <div
        className="fixed top-0 right-0 h-full w-[280px] z-[1001] md:hidden flex flex-col"
        style={{
          background: 'rgba(13,13,18,0.98)',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(24px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'transform',
        }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.07)]">
          <span className="font-syne font-extrabold text-lg gradient-text">xbrocoder</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.07)] text-muted hover:text-[#f0eff8] transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted text-[15px] font-medium capitalize transition-all duration-200 hover:text-[#f0eff8] hover:bg-[rgba(108,99,255,0.08)] hover:border-[rgba(108,99,255,0.2)] border border-transparent"
              style={{
                transitionDelay: open ? `${i * 50}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(16px)',
                transition: `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms, color 0.2s, background 0.2s, border-color 0.2s`,
              }}
            >
              {/* Number badge */}
              <span
                className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono"
                style={{ background: 'rgba(108,99,255,0.12)', color: '#a89eff' }}
              >
                0{i + 1}
              </span>
              {item}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center text-white text-[14px] font-medium py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
          >
            Hire Me
          </a>
          {/* Social links in panel */}
          <div className="flex justify-center gap-3 mt-5">
            {[
              { label: 'GitHub', url: 'https://github.com/xbroindia' },
              { label: 'Instagram', url: 'https://www.instagram.com/xbrocoder/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-muted hover:text-accent2 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
