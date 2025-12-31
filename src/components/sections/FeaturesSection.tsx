import { Section, Icon } from '../common'
import { Card } from '../ui'
import { features, featuresContent } from '../../data'

export const FeaturesSection = () => {
  return (
    <Section id="features" background="gray">
      <div className="text-center">
        <h2 className="heading-secondary mb-4">{featuresContent.title}</h2>
        <p className="text-body mx-auto max-w-2xl">
          {featuresContent.subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.id} padding="lg" hover>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-100 p-4">
                <Icon name={feature.icon} size={32} className="text-primary-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
