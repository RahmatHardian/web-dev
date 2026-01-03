import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection, GalleryLightbox } from '../common'

export const GallerySection = () => {
  const { config } = useTemplateContext()
  const { gallery, features } = config

  if (!features.showGallery || !gallery.enabled || gallery.photos.length === 0) {
    return null
  }

  return (
    <TemplateSection id="gallery" backgroundVariant="default" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Camera
          className="w-8 h-8 mx-auto mb-4"
          style={{ color: 'var(--template-primary)' }}
        />
        <h2
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          {gallery.title || 'Galeri Foto'}
        </h2>
      </motion.div>

      {/* Gallery */}
      <GalleryLightbox
        photos={gallery.photos}
        layout={gallery.layout}
        columns={3}
      />
    </TemplateSection>
  )
}

export default GallerySection
