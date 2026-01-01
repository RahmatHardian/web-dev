import { Section } from '../common'
import { WhatsAppLink } from '../features/WhatsAppLink'
import { finalCTAContent } from '../../data'
import { WHATSAPP_MESSAGES } from '../../utils/whatsapp'
import { useScrollToSection } from '../../hooks'

export const FinalCTA = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <Section noPadding fullWidth>
      <div className="relative overflow-hidden gradient-dark py-20">
        {/* Background overlay - MarkAgency style */}
        <div className="absolute inset-0 gradient-dark-overlay" />

        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-h2 mb-4">
              {finalCTAContent.headline}
            </h2>
            <p className="text-body mb-8 text-white-soft">
              {finalCTAContent.subheadline}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-primary shadow-deep"
              >
                {finalCTAContent.cta}
              </button>
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonVariant="outline"
                buttonSize="lg"
                className="btn-secondary"
              >
                Konsultasi Gratis
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
