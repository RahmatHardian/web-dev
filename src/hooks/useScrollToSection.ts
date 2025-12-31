import { useCallback } from 'react'

/**
 * Hook for smooth scrolling to sections
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return { scrollToSection, scrollToTop }
}
