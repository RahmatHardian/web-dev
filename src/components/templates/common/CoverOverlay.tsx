import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ChevronDown } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'

interface CoverOverlayProps {
  onOpen: () => void
}

export const CoverOverlay = ({ onOpen }: CoverOverlayProps) => {
  const { config, guest } = useTemplateContext()
  const { couple, theme, events } = config
  const [isOpening, setIsOpening] = useState(false)

  // Get wedding date from first event
  const weddingDate = events[0]?.date
    ? new Date(events[0].date)
    : new Date()

  const formattedDate = weddingDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const handleOpen = () => {
    setIsOpening(true)
    // Small delay for animation
    setTimeout(() => {
      onOpen()
    }, 600)
  }

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          {/* Background with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${theme.backgroundImage})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}dd 0%, ${theme.colors.secondary}aa 100%)`,
            }}
          />

          {/* Wavy decoration top */}
          <div className="absolute top-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-28">
              <path
                fill="rgba(255,255,255,0.1)"
                d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
          </div>

          {/* Wavy decoration bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-28">
              <path
                fill="rgba(255,255,255,0.1)"
                d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,90.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
            </svg>
          </div>

          {/* Floating flower petals animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full opacity-30"
                style={{
                  backgroundColor: 'white',
                  left: `${Math.random() * 100}%`,
                  top: '-20px',
                }}
                animate={{
                  y: ['0vh', '120vh'],
                  x: [0, Math.sin(i) * 100],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center px-6 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Envelope icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>

            {/* Wedding invitation text */}
            <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
              The Wedding Of
            </p>

            {/* Couple names */}
            <h1
              className="text-4xl md:text-5xl text-white mb-2"
              style={{ fontFamily: 'var(--template-font-script, var(--template-font-heading))' }}
            >
              {couple.groom.nickname}
            </h1>
            <p className="text-white text-2xl mb-2">&</p>
            <h1
              className="text-4xl md:text-5xl text-white mb-6"
              style={{ fontFamily: 'var(--template-font-script, var(--template-font-heading))' }}
            >
              {couple.bride.nickname}
            </h1>

            {/* Date */}
            <p className="text-white/90 text-lg mb-8">
              {formattedDate}
            </p>

            {/* Guest name if provided */}
            {guest && (
              <div className="mb-8 py-4 px-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <p className="text-white/70 text-sm mb-1">Kepada Yth.</p>
                <p className="text-white text-xl font-medium">
                  {guest.greeting && `${guest.greeting} `}{guest.name}
                </p>
              </div>
            )}

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              className="group inline-flex flex-col items-center gap-2 px-8 py-4 rounded-full bg-white text-center transition-all hover:shadow-xl"
              style={{ color: theme.colors.primary }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">Buka Undangan</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Bottom decoration */}
          <motion.div
            className="absolute bottom-8 text-white/50 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {couple.hashtag}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CoverOverlay
