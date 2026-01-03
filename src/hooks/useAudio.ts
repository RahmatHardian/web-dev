import { useState, useEffect, useRef, useCallback } from 'react'

export interface UseAudioReturn {
  isPlaying: boolean
  toggle: () => void
  play: () => void
  pause: () => void
  volume: number
  setVolume: (v: number) => void
  error: string | null
  isLoading: boolean
}

/**
 * Convert Google Drive sharing URL to direct audio URL
 * Supports multiple formats for better compatibility
 */
const convertToDirectUrl = (url: string): string => {
  // Check if it's a Google Drive URL
  const driveMatch = url.match(/drive\.google\.com\/(?:file\/d\/|uc\?.*id=)([a-zA-Z0-9_-]+)/)
  if (driveMatch) {
    const fileId = driveMatch[1]
    // Use the media endpoint which works better for streaming
    return `https://drive.google.com/uc?export=download&id=${fileId}`
  }
  return url
}

export const useAudio = (url: string, autoplay = true): UseAudioReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.5)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const hasInteracted = useRef(false)

  useEffect(() => {
    const directUrl = convertToDirectUrl(url)
    const audio = new Audio()

    // Set crossOrigin to anonymous for CORS
    audio.crossOrigin = 'anonymous'
    audio.loop = true
    audio.volume = volume
    audio.preload = 'auto'
    audioRef.current = audio

    const handlePlay = () => {
      setIsPlaying(true)
      setError(null)
    }
    const handlePause = () => setIsPlaying(false)
    const handleError = (e: Event) => {
      console.error('Audio error:', e)
      setError('Failed to load audio. Try a different hosting service.')
      setIsLoading(false)
    }
    const handleCanPlay = () => {
      setIsLoading(false)
      setError(null)
    }
    const handleLoadStart = () => {
      setIsLoading(true)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('loadstart', handleLoadStart)

    // Set source after adding event listeners
    audio.src = directUrl

    if (autoplay) {
      const playOnInteraction = () => {
        if (!hasInteracted.current && audioRef.current) {
          hasInteracted.current = true
          audioRef.current.play().catch((err) => {
            console.warn('Autoplay blocked:', err)
            // Don't set error for autoplay block - user can click to play
          })
        }
      }

      document.addEventListener('click', playOnInteraction, { once: true })
      document.addEventListener('touchstart', playOnInteraction, { once: true })
      document.addEventListener('scroll', playOnInteraction, { once: true })
    }

    return () => {
      audio.pause()
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('loadstart', handleLoadStart)
      audioRef.current = null
    }
  }, [url, autoplay])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {
      // Play was blocked
    })
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  const setVolume = useCallback((v: number) => {
    setVolumeState(Math.max(0, Math.min(1, v)))
  }, [])

  return { isPlaying, toggle, play, pause, volume, setVolume, error, isLoading }
}

export default useAudio
