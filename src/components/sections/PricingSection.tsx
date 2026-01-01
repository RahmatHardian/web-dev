import { Section } from '../common'
import { pricingPackages, pricingContent } from '../../data'
import { PricingCard } from '../features/PricingCard'

export const PricingSection = () => {
  return (
    <Section id="pricing" background="gray" className="section-light">
      <div className="text-center animate-fade-in-up">
        <h2 className="heading-secondary mb-4">{pricingContent.title}</h2>
        <p className="text-body text-text-gray mx-auto max-w-2xl">
          {pricingContent.subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 stagger-children">
        {pricingPackages.map((pkg) => (
          <PricingCard
            key={pkg.id}
            package={pkg}
            featured={pkg.isBestSeller}
          />
        ))}
      </div>

      {/* Additional info */}
      <div className="mt-12 text-center">
        <p className="text-sm text-text-gray">
          Semua paket sudah termasuk domain gratis dan hosting selama masa aktif
        </p>
      </div>
    </Section>
  )
}
