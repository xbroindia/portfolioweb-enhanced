import { useEffect, useRef } from 'react'

const LINES = [
  { text: "shah@portfolio:~$ whoami",           delay: 400  },
  { text: "shah-hamdan | frontend-dev",          delay: 900,  cls: 'text-green-400' },
  { text: "shah@portfolio:~$ skills --list",     delay: 1600 },
  { text: "[ React, Tailwind, JS, HTML, CSS ]",  delay: 2100, cls: 'text-accent'   },
  { text: "shah@portfolio:~$ status",            delay: 2800 },
  { text: "✓ Available for hire",                delay: 3300, cls: 'text-green-400' },
]

export default function Terminal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let cancelled = false

    function typeLine(obj, el, cb) {
      let i = 0
      const iv = setInterval(() => {
        if (cancelled) { clearInterval(iv); return }
        el.textContent = obj.text.slice(0, ++i)
        if (i === obj.text.length) { clearInterval(iv); setTimeout(cb, 200) }
      }, 28)
    }

    function run() {
      if (cancelled) return
      container.innerHTML = ''
      let idx = 0

      const next = () => {
        if (cancelled) return
        if (idx >= LINES.length) {
          setTimeout(run, 2500)
          return
        }
        const lo = LINES[idx]
        const p  = document.createElement('p')
        p.className = 'text-[13px] leading-relaxed font-mono ' + (lo.cls || 'text-[#f0eff8]')
        container.appendChild(p)
        const prev = LINES[idx - 1]
        const wait = lo.delay - (prev ? prev.delay : 0) + 50
        idx++
        setTimeout(() => typeLine(lo, p, next), wait)
      }
      setTimeout(next, 800)
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div
      className="bg-[rgba(13,13,18,0.85)] border border-[rgba(108,99,255,0.3)] rounded-xl px-6 py-5 max-w-[460px] mx-auto text-left backdrop-blur-md animate-fadeUp2 relative z-[2]"
      style={{ animationFillMode: 'both' }}
    >
      {/* Traffic lights */}
      <div className="flex gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div ref={containerRef} />
    </div>
  )
}
