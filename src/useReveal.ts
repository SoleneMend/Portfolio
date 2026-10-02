import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      for (const el of elements) el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])
}
