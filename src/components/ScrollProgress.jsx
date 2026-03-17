import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current

    // Direct DOM update instead of setState → avoids React re-render on every scroll
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      bar.style.width = pct + '%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-0.5 z-[9999]"
      style={{
        width: '0%',
        background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
        willChange: 'width',
      }}
    />
  )
}
