import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
  opacity: number
}

interface FallingPetalsProps {
  color?: string
  count?: number
  enabled?: boolean
}

export const FallingPetals = ({
  color = 'currentColor',
  count = 15,
  enabled = true,
}: FallingPetalsProps) => {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    if (!enabled) return

    // Generate initial petals
    const initialPetals: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4,
    }))
    setPetals(initialPetals)

    // Regenerate petals periodically
    const interval = setInterval(() => {
      setPetals((prev) =>
        prev.map((petal) => ({
          ...petal,
          id: petal.id + count,
          x: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 6,
        }))
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [count, enabled])

  if (!enabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute"
            style={{
              left: `${petal.x}%`,
              top: -30,
            }}
            initial={{ y: -30, opacity: 0, rotate: petal.rotation }}
            animate={{
              y: '110vh',
              opacity: [0, petal.opacity, petal.opacity, 0],
              rotate: petal.rotation + 360,
              x: [0, 30, -20, 40, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: 'linear',
              x: {
                duration: petal.duration,
                ease: 'easeInOut',
              },
            }}
          >
            {/* Petal SVG */}
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill={color}
            >
              <path d="M12 2C9.5 2 7 4.5 7 7.5C7 10.5 9.5 13 12 13C14.5 13 17 10.5 17 7.5C17 4.5 14.5 2 12 2Z" />
              <path d="M12 13C9.5 13 7 15.5 7 18.5C7 21.5 9.5 22 12 22C14.5 22 17 21.5 17 18.5C17 15.5 14.5 13 12 13Z" opacity="0.6" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FallingPetals
