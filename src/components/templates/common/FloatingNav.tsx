import { motion } from 'framer-motion'

interface FloatingNavProps {
  sections: string[]
  activeIndex: number
  onNavigate: (index: number) => void
}

export const FloatingNav = ({
  sections,
  activeIndex,
  onNavigate,
}: FloatingNavProps) => {
  return (
    <motion.nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section}`}
        >
          {/* Label tooltip */}
          <span
            className="absolute right-8 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundColor: 'var(--template-primary)',
              color: 'white',
            }}
          >
            {section}
          </span>

          {/* Dot indicator */}
          <motion.div
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                activeIndex === index
                  ? 'var(--template-primary)'
                  : 'var(--template-text-muted)',
              opacity: activeIndex === index ? 1 : 0.4,
            }}
            animate={{
              scale: activeIndex === index ? 1.3 : 1,
            }}
          />
        </button>
      ))}
    </motion.nav>
  )
}

export default FloatingNav
