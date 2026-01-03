import { useState, useEffect } from 'react'

export interface CountdownResult {
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
  isPast: boolean
}

const calculateCountdown = (targetDate: string): CountdownResult => {
  const target = new Date(targetDate).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
      isPast: true,
    }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isComplete: false,
    isPast: false,
  }
}

export const useCountdown = (targetDate: string): CountdownResult => {
  const [countdown, setCountdown] = useState<CountdownResult>(() =>
    calculateCountdown(targetDate)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdown = calculateCountdown(targetDate)
      setCountdown(newCountdown)

      if (newCountdown.isComplete) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

export default useCountdown
