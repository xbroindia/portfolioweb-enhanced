import { useEffect } from 'react'

const SYMBOLS = ['</', '/>', '{', '}', '()', '=>', '&&', '||', '!=', '===', 'fn()', 'var', 'const', 'return', 'import', '[]']

export default function FloatingCode() {
  useEffect(() => {
    // Reduce frequency (800ms vs 600ms) and cap active elements
    // to stop the DOM growing unboundedly and triggering layout thrash
    const MAX = 12
    let active = 0
    let interval

    const spawn = () => {
      if (active >= MAX) return   // skip if screen already has enough
      active++

      const el  = document.createElement('div')
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      const dur = 9 + Math.random() * 12

      // Use transform for the animation — GPU composited, no layout
      Object.assign(el.style, {
        position:      'fixed',
        left:          Math.random() * 100 + 'vw',
        bottom:        '-30px',
        color:         '#6c63ff',
        fontFamily:    'monospace',
        fontSize:      (10 + Math.random() * 8) + 'px',
        pointerEvents: 'none',
        zIndex:        '0',
        opacity:       '0',
        willChange:    'transform, opacity',
        animation:     `floatCode ${dur}s linear forwards`,
      })

      document.body.appendChild(el)
      const cleanup = setTimeout(() => {
        el.remove()
        active--
      }, dur * 1000 + 200)

      // Also remove immediately if animation ends early
      el.addEventListener('animationend', () => {
        clearTimeout(cleanup)
        el.remove()
        active--
      }, { once: true })
    }

    interval = setInterval(spawn, 800)
    return () => clearInterval(interval)
  }, [])

  return null
}
