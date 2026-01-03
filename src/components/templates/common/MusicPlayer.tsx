import { motion } from 'framer-motion'
import { VolumeX, Music } from 'lucide-react'
import { useAudio } from '../../../hooks/useAudio'
import { useTemplateContext } from '../TemplateProvider'

interface MusicPlayerProps {
  className?: string
}

export const MusicPlayer = ({ className = '' }: MusicPlayerProps) => {
  const { config } = useTemplateContext()
  const { music } = config

  const { isPlaying, toggle } = useAudio(music.url, music.autoplay)

  if (!music.enabled) return null

  return (
    <motion.button
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-colors ${className}`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <div className="relative">
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Music
              className="w-6 h-6"
              style={{ color: 'var(--template-primary)' }}
            />
          </motion.div>
        ) : (
          <VolumeX
            className="w-6 h-6"
            style={{ color: 'var(--template-text-muted)' }}
          />
        )}

        {/* Sound wave animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: 'var(--template-primary)' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </div>

      {/* Song info tooltip */}
      {music.title && (
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 pointer-events-none"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
          }}
          whileHover={{ opacity: 1 }}
        >
          <div className="font-medium">{music.title}</div>
          {music.artist && (
            <div className="text-xs opacity-75">{music.artist}</div>
          )}
        </motion.div>
      )}
    </motion.button>
  )
}

export default MusicPlayer
