import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface TemplateSectionProps {
  id: string
  className?: string
  backgroundVariant?: 'default' | 'primary' | 'secondary' | 'transparent' | 'gradient'
  showDivider?: boolean
  children: ReactNode
  fullHeight?: boolean
  centered?: boolean
}

export const TemplateSection = ({
  id,
  className = '',
  backgroundVariant = 'default',
  showDivider = false,
  children,
  fullHeight = false,
  centered = true,
}: TemplateSectionProps) => {
  const backgroundStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--template-background)',
      color: 'var(--template-text)',
    },
    primary: {
      backgroundColor: 'var(--template-primary)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--template-secondary)',
      color: 'white',
    },
    transparent: {
      backgroundColor: 'transparent',
      color: 'var(--template-text)',
    },
    gradient: {
      background: 'linear-gradient(180deg, var(--template-background) 0%, rgba(var(--template-primary-rgb, 212, 175, 55), 0.1) 100%)',
      color: 'var(--template-text)',
    },
  }

  return (
    <motion.section
      id={id}
      className={clsx(
        'relative px-4 md:px-8 py-16 md:py-24',
        fullHeight && 'min-h-screen',
        centered && 'flex flex-col items-center justify-center',
        className
      )}
      style={backgroundStyles[backgroundVariant]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Ornament divider at top */}
      {showDivider && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            width="100"
            height="20"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H40M60 10H100M50 0L45 10L50 20L55 10L50 0Z"
              stroke="currentColor"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}

export default TemplateSection
