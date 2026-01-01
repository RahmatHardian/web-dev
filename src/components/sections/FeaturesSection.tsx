import { Section, Icon } from '../common'
import { Card } from '../ui'
import { features, featuresContent } from '../../data'

export const FeaturesSection = () => {
  return (
    <Section id="features" background="gray" className="section-light">
      <div className="text-center animate-fade-in-up">
        <h2 className="heading-secondary mb-4">{featuresContent.title}</h2>
        <p className="text-body text-text-gray mx-auto max-w-2xl">
          {featuresContent.subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
        {features.map((feature) => (
          <Card key={feature.id} padding="lg" hover className="shadow-card card-hover bg-white">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-light p-4">
                <Icon name={feature.icon} size={32} className="text-dark-blue" />
              </div>
              <h3 className="mb-2 text-h5 font-semibold text-accent">
                {feature.title}
              </h3>
              <p className="text-text-gray">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
