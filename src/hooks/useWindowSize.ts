import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../utils/constants'

interface WindowSize {
  width: number
  height: number
}

/**
 * Hook for tracking window size and responsive breakpoints
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call on mount

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < BREAKPOINTS.md
  const isTablet =
    windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg
  const isDesktop = windowSize.width >= BREAKPOINTS.lg

  return {
    ...windowSize,
    isMobile,
    isTablet,
    isDesktop,
  }
}
