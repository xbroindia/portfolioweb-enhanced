import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  // Track mouse position directly — no parseFloat on style strings each frame
  const mouse = useRef({ x: 0, y: 0 })
  const ring  = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ringEl = ringRef.current

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      // Move dot immediately — no RAF lag for the dot itself
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
    }

    // Use transform instead of top/left — triggers compositor only, no layout
    cursor.style.left = '0'
    cursor.style.top  = '0'
    ringEl.style.left = '0'
    ringEl.style.top  = '0'

    const animate = () => {
      ring.current.x += (mouse.current.x - 18 - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - 18 - ring.current.y) * 0.12
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    // Use event delegation on document instead of attaching to every a/button
    const onEnter = (e) => {
      if (e.target.closest('a, button')) {
        ringEl.style.width  = '56px'
        ringEl.style.height = '56px'
      }
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button')) {
        ringEl.style.width  = '36px'
        ringEl.style.height = '36px'
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover',  onEnter, { passive: true })
    document.addEventListener('mouseout',   onLeave, { passive: true })

    return () => {
      cancelAnimationFrame(rafId.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onEnter)
      document.removeEventListener('mouseout',   onLeave)
    }
  }, [])

  return (
    <>
      {/* Use will-change + transform so browser keeps these on their own layer */}
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-accent2 rounded-full pointer-events-none z-[9999]"
        style={{ top: 0, left: 0, mixBlendMode: 'difference', willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-[rgba(108,99,255,0.5)] rounded-full pointer-events-none z-[9998] transition-[width,height] duration-200"
        style={{ top: 0, left: 0, willChange: 'transform' }}
      />
    </>
  )
}
