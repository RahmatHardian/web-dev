import { Section, Icon } from '../common'
import { howItWorksContent } from '../../data'

export const HowItWorks = () => {
  return (
    <Section id="how-it-works" background="white">
      <div className="text-center">
        <h2 className="heading-secondary mb-4">{howItWorksContent.title}</h2>
        <p className="text-body mx-auto max-w-2xl">
          {howItWorksContent.subtitle}
        </p>
      </div>

      <div className="mt-16 relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 hidden lg:block transform -translate-y-1/2" />

        <div className="grid gap-8 md:grid-cols-3 relative">
          {howItWorksContent.steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Step number circle */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-500 text-3xl font-bold text-white shadow-lg relative z-10">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-100 p-3">
                  <Icon name={step.icon} size={32} className="text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
