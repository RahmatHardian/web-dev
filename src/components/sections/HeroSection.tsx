import { Section } from '../common'
import { WhatsAppLink } from '../features/WhatsAppLink'
import { heroContent } from '../../data'
import { WHATSAPP_MESSAGES } from '../../utils/whatsapp'
import { useScrollToSection } from '../../hooks'

export const HeroSection = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <Section id="hero" noPadding fullWidth className="relative overflow-hidden">
      {/* Background image with overlay - MarkAgency style */}
      <div
        className="absolute inset-0 hero-bg-image"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 gradient-dark opacity-85" />
      <div className="absolute inset-0 gradient-dark-overlay" />

      {/* Decorative glass blobs */}
      <div className="glass-blob glass-blob-lg -top-20 -left-20 opacity-50" />
      <div className="glass-blob glass-blob-md top-1/2 -right-10 opacity-40" />

      <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-h1 mb-6">
              {heroContent.headline}
              <span className="mt-2 block gradient-text">
                {heroContent.subheadline}
              </span>
            </h1>
            <p className="text-body text-white-soft mb-8 max-w-2xl">
              {heroContent.description}
            </p>

            {/* CTAs - MarkAgency button styles */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-primary shadow-deep"
              >
                {heroContent.primaryCTA}
              </button>
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonVariant="outline"
                buttonSize="lg"
                className="btn-secondary"
              >
                {heroContent.secondaryCTA}
              </WhatsAppLink>
            </div>
          </div>

          {/* Image - MarkAgency card style */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto max-w-md">
              {/* Floating card mockup with MarkAgency shadow */}
              <div className="relative rounded-lg bg-white p-8 shadow-deep">
                <div className="mb-4 h-64 rounded-lg skeleton" />
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-gray-light" />
                  <div className="h-4 w-1/2 rounded bg-gray-light" />
                </div>
              </div>
              {/* Decorative elements - gold/blue accents */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary opacity-30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
