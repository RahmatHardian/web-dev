import { Section, Icon } from '@components/common'
import { trustIndicators } from '@data'

export const TrustIndicators = () => {
  return (
    <Section background="white">
      <div className="grid gap-8 md:grid-cols-3">
        {trustIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className="flex items-center justify-center gap-3 rounded-lg bg-gray-50 px-6 py-4"
          >
            <Icon name={indicator.icon} size={24} className="text-primary-600" />
            <span className="font-medium text-gray-900">{indicator.text}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
