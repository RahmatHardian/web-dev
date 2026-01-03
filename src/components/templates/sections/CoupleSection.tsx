import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection } from '../common'
import { LazyImage } from '../../common'
import type { PersonInfo } from '../../../types/template'

interface PersonCardProps {
  person: PersonInfo
  role: 'groom' | 'bride'
  delay?: number
}

const PersonCard = ({ person, role, delay = 0 }: PersonCardProps) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Photo */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '3px solid var(--template-primary)',
            transform: 'rotate(45deg)',
          }}
        />
        <div className="absolute inset-2 rounded-full overflow-hidden">
          <LazyImage
            src={person.photo}
            alt={person.fullName}
            aspectRatio="1/1"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Name */}
      <h3
        className="text-2xl md:text-3xl mb-2"
        style={{
          fontFamily: 'var(--template-font-script, var(--template-font-heading))',
          color: 'var(--template-primary)',
        }}
      >
        {person.fullName}
      </h3>

      {/* Birth order & Parents */}
      <div
        className="text-sm md:text-base space-y-1"
        style={{ color: 'var(--template-text-muted)' }}
      >
        {person.birthOrder && <p>{person.birthOrder}</p>}
        <p>{person.fatherName}</p>
        <p>&</p>
        <p>{person.motherName}</p>
      </div>

      {/* Social media */}
      {person.socialMedia?.instagram && (
        <motion.a
          href={`https://instagram.com/${person.socialMedia.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm transition-colors"
          style={{
            backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)',
            color: 'var(--template-primary)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-4 h-4" />
          {person.socialMedia.instagram}
        </motion.a>
      )}
    </motion.div>
  )
}

export const CoupleSection = () => {
  const { config } = useTemplateContext()
  const { couple, features } = config

  if (!features.showCouple) return null

  return (
    <TemplateSection id="couple" backgroundVariant="default">
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          className="text-sm uppercase tracking-[0.3em] mb-2"
          style={{ color: 'var(--template-text-muted)' }}
        >
          Bismillahirrahmanirrahim
        </p>
        <h2
          className="text-2xl md:text-3xl"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          Assalamualaikum Warahmatullahi Wabarakatuh
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: 'var(--template-text-muted)' }}
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan
          acara pernikahan putra-putri kami
        </p>
      </motion.div>

      {/* Couple cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
        <PersonCard person={couple.groom} role="groom" delay={0.2} />

        {/* Ampersand separator */}
        <motion.div
          className="text-5xl md:text-6xl"
          style={{
            fontFamily: 'var(--template-font-script, var(--template-font-heading))',
            color: 'var(--template-primary)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          &
        </motion.div>

        <PersonCard person={couple.bride} role="bride" delay={0.6} />
      </div>
    </TemplateSection>
  )
}

export default CoupleSection
