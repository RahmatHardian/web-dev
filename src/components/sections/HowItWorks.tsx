import { Section, Icon } from '../common'
import { howItWorksContent } from '../../data'

export const HowItWorks = () => {
  return (
    <Section id="how-it-works" background="white">
      <div className="text-center animate-fade-in-up">
        <h2 className="heading-secondary mb-4">{howItWorksContent.title}</h2>
        <p className="text-body text-text-gray mx-auto max-w-2xl">
          {howItWorksContent.subtitle}
        </p>
      </div>

      <div className="mt-16 relative">
        {/* Connection line - MarkAgency style */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary hidden lg:block" />

        <div className="grid gap-8 md:grid-cols-3 relative stagger-children">
          {howItWorksContent.steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Step number circle - gradient style */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-button text-3xl font-bold text-white shadow-deep relative z-10">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-light p-3">
                  <Icon name={step.icon} size={32} className="text-secondary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-h5 font-semibold text-accent">
                {step.title}
              </h3>
              <p className="text-text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
