import { Section } from '@components/common'
import { Button } from '@components/ui'
import { WhatsAppLink } from '@components/features/WhatsAppLink'
import { heroContent } from '@data'
import { WHATSAPP_MESSAGES } from '@utils/whatsapp'
import { useScrollToSection } from '@hooks'

export const HeroSection = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <Section id="hero" noPadding fullWidth className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-100 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary-100 opacity-20 blur-3xl" />

      <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="heading-primary mb-6">
              {heroContent.headline}
              <span className="mt-2 block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {heroContent.subheadline}
              </span>
            </h1>
            <p className="text-body mb-8 max-w-2xl">
              {heroContent.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="shadow-lg hover:shadow-xl"
              >
                {heroContent.primaryCTA}
              </Button>
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonVariant="outline"
                buttonSize="lg"
              >
                {heroContent.secondaryCTA}
              </WhatsAppLink>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Floating card mockup */}
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
                <div className="mb-4 h-64 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100" />
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-4 w-1/2 rounded bg-gray-200" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-200 opacity-50" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary-200 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
