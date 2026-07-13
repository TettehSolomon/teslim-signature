import { useEffect, useState } from 'react'

/**
 * Returns true once the window has been scrolled past `threshold` pixels.
 * Reimplements the original imperative scroll listener declaratively.
 */
export default function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll() // sync initial state
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
