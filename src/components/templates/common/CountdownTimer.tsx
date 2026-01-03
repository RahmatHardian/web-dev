import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCountdown } from '../../../hooks/useCountdown'

interface CountdownTimerProps {
  targetDate: string
  labels?: {
    days?: string
    hours?: string
    minutes?: string
    seconds?: string
  }
  onComplete?: () => void
  variant?: 'default' | 'compact' | 'elegant'
}

const defaultLabels = {
  days: 'Hari',
  hours: 'Jam',
  minutes: 'Menit',
  seconds: 'Detik',
}

export const CountdownTimer = ({
  targetDate,
  labels = {},
  onComplete,
  variant = 'default',
}: CountdownTimerProps) => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate)
  const l = { ...defaultLabels, ...labels }

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete()
    }
  }, [isComplete, onComplete])

  const timeUnits = [
    { value: days, label: l.days },
    { value: hours, label: l.hours },
    { value: minutes, label: l.minutes },
    { value: seconds, label: l.seconds },
  ]

  if (variant === 'compact') {
    return (
      <div className="flex items-center justify-center gap-2 text-lg">
        {timeUnits.map(({ value, label }, index) => (
          <span key={label} className="flex items-center">
            <span className="font-semibold" style={{ color: 'var(--template-primary)' }}>
              {String(value).padStart(2, '0')}
            </span>
            <span className="ml-1 text-sm" style={{ color: 'var(--template-text-muted)' }}>
              {label}
            </span>
            {index < timeUnits.length - 1 && (
              <span className="mx-2" style={{ color: 'var(--template-text-muted)' }}>:</span>
            )}
          </span>
        ))}
      </div>
    )
  }

  if (variant === 'elegant') {
    return (
      <div className="flex justify-center gap-6 md:gap-10">
        {timeUnits.map(({ value, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div
              className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <span
                className="text-3xl md:text-5xl font-bold"
                style={{
                  fontFamily: 'var(--template-font-heading)',
                  color: 'var(--template-primary)',
                }}
              >
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span
              className="mt-2 block text-xs md:text-sm uppercase tracking-wider"
              style={{ color: 'var(--template-text-muted)' }}
            >
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    )
  }

  // Default variant
  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timeUnits.map(({ value, label }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div
            className="text-4xl md:text-6xl font-bold"
            style={{
              fontFamily: 'var(--template-font-heading)',
              color: 'var(--template-primary)',
            }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <div
            className="text-xs md:text-sm mt-1 uppercase tracking-wide"
            style={{ color: 'var(--template-text-muted)' }}
          >
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default CountdownTimer
