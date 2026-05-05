import { useEffect } from 'react'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .hero-fade',
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [])
}

export default useRevealOnScroll