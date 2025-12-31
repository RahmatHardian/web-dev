import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

/**
 * Hook for detecting element visibility with Intersection Observer
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already visible and should freeze, don't observe
    if (freezeOnceVisible && isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible])

  return { elementRef, isVisible }
}
