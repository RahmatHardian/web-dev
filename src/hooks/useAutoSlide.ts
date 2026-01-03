import { useState, useEffect, useCallback, useRef } from 'react'

export interface UseAutoSlideOptions {
  enabled: boolean
  interval: number // in milliseconds
  sectionIds: string[]
  pauseOnInteraction?: boolean
}

export interface UseAutoSlideReturn {
  currentIndex: number
  isPlaying: boolean
  play: () => void
  pause: () => void
  toggle: () => void
  goToSection: (index: number) => void
  goToNext: () => void
  goToPrev: () => void
}

export const useAutoSlide = ({
  enabled,
  interval,
  sectionIds,
  pauseOnInteraction = true,
}: UseAutoSlideOptions): UseAutoSlideReturn => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(enabled)
  const intervalRef = useRef<number | null>(null)
  const interactionTimeoutRef = useRef<number | null>(null)

  // Clear interval helper
  const clearAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Scroll to section
  const scrollToSection = useCallback((index: number) => {
    const sectionId = sectionIds[index]
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [sectionIds])

  // Go to next section
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % sectionIds.length
      scrollToSection(next)
      return next
    })
  }, [sectionIds.length, scrollToSection])

  // Go to previous section
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev === 0 ? sectionIds.length - 1 : prev - 1
      scrollToSection(next)
      return next
    })
  }, [sectionIds.length, scrollToSection])

  // Go to specific section
  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < sectionIds.length) {
      setCurrentIndex(index)
      scrollToSection(index)
    }
  }, [sectionIds.length, scrollToSection])

  // Play auto-slide
  const play = useCallback(() => {
    setIsPlaying(true)
  }, [])

  // Pause auto-slide
  const pause = useCallback(() => {
    setIsPlaying(false)
    clearAutoSlide()
  }, [clearAutoSlide])

  // Toggle auto-slide
  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Setup auto-slide interval
  useEffect(() => {
    if (isPlaying && enabled) {
      intervalRef.current = setInterval(goToNext, interval)
    } else {
      clearAutoSlide()
    }

    return clearAutoSlide
  }, [isPlaying, enabled, interval, goToNext, clearAutoSlide])

  // Pause on user interaction
  useEffect(() => {
    if (!pauseOnInteraction || !enabled) return

    const handleInteraction = () => {
      // Pause auto-slide
      setIsPlaying(false)
      clearAutoSlide()

      // Clear any existing timeout
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current)
      }

      // Resume after 10 seconds of no interaction
      interactionTimeoutRef.current = setTimeout(() => {
        setIsPlaying(true)
      }, 10000)
    }

    // Listen for scroll events to detect manual navigation
    window.addEventListener('wheel', handleInteraction, { passive: true })
    window.addEventListener('touchmove', handleInteraction, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleInteraction)
      window.removeEventListener('touchmove', handleInteraction)
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current)
      }
    }
  }, [pauseOnInteraction, enabled, clearAutoSlide])

  // Track current section based on scroll position
  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentIndex(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enabled, sectionIds])

  return {
    currentIndex,
    isPlaying,
    play,
    pause,
    toggle,
    goToSection,
    goToNext,
    goToPrev,
  }
}

export default useAutoSlide
