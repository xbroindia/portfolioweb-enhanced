import { useEffect, useRef } from 'react'

// Single shared observer for ALL reveal elements — much cheaper than
// creating one IntersectionObserver per element
let sharedObserver = null
const callbacks = new Map()

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target)
            if (cb) {
              cb(entry.target)
              callbacks.delete(entry.target)
              sharedObserver.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
  }
  return sharedObserver
}

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = getObserver()
    callbacks.set(el, (target) => target.classList.add('visible'))
    observer.observe(el)

    return () => {
      callbacks.delete(el)
      observer.unobserve(el)
    }
  }, [])

  return ref
}
