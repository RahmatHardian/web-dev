import { Section, Icon } from '../common'
import { trustIndicators } from '../../data'

export const TrustIndicators = () => {
  return (
    <Section background="white" className="section-light">
      <div className="grid gap-8 md:grid-cols-3 stagger-children">
        {trustIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-5 shadow-card card-hover"
          >
            <Icon name={indicator.icon} size={24} className="text-secondary" />
            <span className="font-semibold text-accent">{indicator.text}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
