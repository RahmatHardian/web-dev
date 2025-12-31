import { useState } from 'react'
import { designs } from '../../data'
import type { DesignCategory } from '../../types/design'
import { DesignFilter } from './DesignFilter'
import { DesignCard } from './DesignCard'
import { WhatsAppLink } from './WhatsAppLink'
import { WHATSAPP_MESSAGES } from '../../utils/whatsapp'

export const DesignGallery = () => {
  const [activeCategory, setActiveCategory] = useState<DesignCategory | 'all'>(
    'all'
  )

  const filteredDesigns =
    activeCategory === 'all'
      ? designs
      : designs.filter((design) => design.category === activeCategory)

  const handlePreview = (designId: string) => {
    // Open WhatsApp with inquiry about the design
    window.open(
      `https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE || '6281234567890'}?text=${encodeURIComponent(WHATSAPP_MESSAGES.inquiry(designId))}`,
      '_blank'
    )
  }

  return (
    <div>
      {/* Filter */}
      <div className="mb-12">
        <DesignFilter
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredDesigns.map((design) => (
          <DesignCard
            key={design.id}
            design={design}
            onPreview={handlePreview}
          />
        ))}
      </div>

      {/* View All CTA */}
      <div className="mt-12 text-center">
        <WhatsAppLink
          message={WHATSAPP_MESSAGES.viewAll}
          buttonVariant="outline"
          buttonSize="lg"
        >
          Lihat Semua Desain
        </WhatsAppLink>
      </div>
    </div>
  )
}
