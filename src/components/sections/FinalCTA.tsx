import { Section } from '../common'
import { Button } from '../ui'
import { WhatsAppLink } from '../features/WhatsAppLink'
import { finalCTAContent } from '../../data'
import { WHATSAPP_MESSAGES } from '../../utils/whatsapp'
import { useScrollToSection } from '../../hooks'

export const FinalCTA = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <Section noPadding fullWidth>
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="heading-secondary mb-4 text-white">
              {finalCTAContent.headline}
            </h2>
            <p className="text-body mb-8 text-white/90">
              {finalCTAContent.subheadline}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('pricing')}
                className="bg-white text-primary-600 hover:bg-gray-50"
              >
                {finalCTAContent.cta}
              </Button>
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonVariant="outline"
                buttonSize="lg"
                className="border-white text-white hover:bg-white/10"
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
