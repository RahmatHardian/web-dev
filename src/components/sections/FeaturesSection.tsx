import { Section, Icon } from '../common'
import { Card } from '../ui'
import { features, featuresContent } from '../../data'

export const FeaturesSection = () => {
  return (
    <Section id="features" background="gray" className="section-light relative overflow-hidden">
      {/* Decorative glass blobs - MarkAgency style */}
      <div className="glass-blob glass-blob-lg -top-32 -left-32 opacity-40" />
      <div className="glass-blob glass-blob-md top-1/3 -right-20 opacity-30" />
      <div className="glass-blob glass-blob-sm bottom-20 left-1/4 opacity-35" />

      <div className="text-center animate-fade-in-up relative z-10">
        <h2 className="heading-secondary mb-4">{featuresContent.title}</h2>
        <p className="text-body text-text-gray mx-auto max-w-2xl">
          {featuresContent.subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children relative z-10">
        {features.map((feature) => (
          <Card key={feature.id} variant="glass" padding="lg" hover className="card-hover">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                <Icon name={feature.icon} size={32} className="text-accent" />
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
