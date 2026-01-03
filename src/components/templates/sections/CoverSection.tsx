import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { CountdownTimer } from '../common'

export const CoverSection = () => {
  const { config, guest } = useTemplateContext()
  const { couple, events, features, theme } = config

  const weddingDate = events[0]?.date || ''

  const scrollToContent = () => {
    const nextSection = document.getElementById('couple')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'var(--template-background)',
      }}
    >
      {/* Background Image */}
      {theme.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${theme.backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Decorative ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-20">
        <svg viewBox="0 0 100 100" fill="currentColor" style={{ color: 'var(--template-primary)' }}>
          <path d="M0 0 Q 50 50 0 100 Q 50 50 100 100 Q 50 50 100 0 Q 50 50 0 0" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" fill="currentColor" style={{ color: 'var(--template-primary)' }}>
          <path d="M0 0 Q 50 50 0 100 Q 50 50 100 100 Q 50 50 100 0 Q 50 50 0 0" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-12">
        {/* Guest greeting */}
        {guest && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <p
              className="text-sm md:text-base uppercase tracking-widest mb-2"
              style={{ color: theme.backgroundImage ? 'rgba(255,255,255,0.8)' : 'var(--template-text-muted)' }}
            >
              Kepada Yth.
            </p>
            <p
              className="text-xl md:text-2xl font-medium"
              style={{
                fontFamily: 'var(--template-font-heading)',
                color: theme.backgroundImage ? 'white' : 'var(--template-text)',
              }}
            >
              {guest.greeting ? `${guest.greeting} ` : ''}{guest.name}
            </p>
          </motion.div>
        )}

        {/* Wedding announcement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          style={{ color: theme.backgroundImage ? 'rgba(255,255,255,0.7)' : 'var(--template-text-muted)' }}
        >
          The Wedding of
        </motion.p>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-4"
            style={{
              fontFamily: 'var(--template-font-script, var(--template-font-heading))',
              color: theme.backgroundImage ? 'white' : 'var(--template-primary)',
            }}
          >
            {couple.groom.nickname}
            <span
              className="block text-3xl md:text-4xl my-2"
              style={{ color: theme.backgroundImage ? 'rgba(255,255,255,0.7)' : 'var(--template-secondary)' }}
            >
              &
            </span>
            {couple.bride.nickname}
          </h1>
        </motion.div>

        {/* Quote */}
        {couple.quote && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-md mx-auto text-sm md:text-base italic mb-8"
            style={{ color: theme.backgroundImage ? 'rgba(255,255,255,0.8)' : 'var(--template-text-muted)' }}
          >
            "{couple.quote}"
          </motion.p>
        )}

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl mb-8"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: theme.backgroundImage ? 'white' : 'var(--template-text)',
          }}
        >
          {new Date(weddingDate).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </motion.p>

        {/* Countdown */}
        {features.showCountdown && weddingDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-8"
          >
            <CountdownTimer
              targetDate={weddingDate}
              variant={theme.backgroundImage ? 'elegant' : 'default'}
            />
          </motion.div>
        )}

        {/* Hashtag */}
        {couple.hashtag && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-sm md:text-base"
            style={{ color: 'var(--template-primary)' }}
          >
            {couple.hashtag}
          </motion.p>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 1.5, repeat: Infinity },
        }}
        aria-label="Scroll to content"
      >
        <ChevronDown
          className="w-8 h-8"
          style={{ color: theme.backgroundImage ? 'white' : 'var(--template-primary)' }}
        />
      </motion.button>
    </section>
  )
}

export default CoverSection
