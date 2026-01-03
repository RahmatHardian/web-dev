import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection } from '../common'
import { LazyImage } from '../../common'
import type { LoveMilestone } from '../../../types/template'

interface MilestoneCardProps {
  milestone: LoveMilestone
  index: number
  isLeft: boolean
}

const MilestoneCard = ({ milestone, index, isLeft }: MilestoneCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <motion.div
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm mb-2"
          style={{
            backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)',
            color: 'var(--template-primary)',
          }}
        >
          {formatDate(milestone.date)}
        </div>
        <h4
          className="text-lg md:text-xl font-semibold mb-2"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          {milestone.title}
        </h4>
        <p
          className="text-sm md:text-base"
          style={{ color: 'var(--template-text-muted)' }}
        >
          {milestone.description}
        </p>
      </div>

      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div
          className="w-4 h-4 md:w-5 md:h-5 rounded-full"
          style={{
            backgroundColor: 'var(--template-primary)',
            boxShadow: '0 0 0 4px rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
          }}
        />
      </div>

      {/* Image or spacer */}
      <div className="flex-1 hidden md:block">
        {milestone.image ? (
          <div className={`max-w-[200px] ${isLeft ? '' : 'ml-auto'}`}>
            <LazyImage
              src={milestone.image}
              alt={milestone.title}
              aspectRatio="4/3"
              className="rounded-lg"
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  )
}

export const LoveStorySection = () => {
  const { config } = useTemplateContext()
  const { loveStory, features } = config

  if (!features.showLoveStory || !loveStory.enabled || loveStory.milestones.length === 0) {
    return null
  }

  return (
    <TemplateSection id="love-story" backgroundVariant="default" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Heart
          className="w-8 h-8 mx-auto mb-4"
          style={{ color: 'var(--template-primary)' }}
        />
        <h2
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          {loveStory.title || 'Kisah Cinta Kami'}
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{
            backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.3)',
          }}
        />

        {/* Milestones */}
        <div className="space-y-8 md:space-y-12">
          {loveStory.milestones.map((milestone, index) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              index={index}
              isLeft={index % 2 === 1}
            />
          ))}
        </div>

        {/* End heart */}
        <motion.div
          className="relative mt-8 flex justify-center md:justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'var(--template-primary)',
            }}
          >
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
        </motion.div>
      </div>
    </TemplateSection>
  )
}

export default LoveStorySection
