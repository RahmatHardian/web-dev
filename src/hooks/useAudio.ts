import { useState, useEffect, useRef, useCallback } from 'react'

export interface UseAudioReturn {
  isPlaying: boolean
  toggle: () => void
  play: () => void
  pause: () => void
  volume: number
  setVolume: (v: number) => void
}

export const useAudio = (url: string, autoplay = true): UseAudioReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.5)
  const hasInteracted = useRef(false)

  useEffect(() => {
    const audio = new Audio(url)
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    if (autoplay) {
      const playOnInteraction = () => {
        if (!hasInteracted.current) {
          hasInteracted.current = true
          audio.play().catch(() => {
            // Autoplay was blocked, user needs to interact
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

  return { isPlaying, toggle, play, pause, volume, setVolume }
}

export default useAudio
