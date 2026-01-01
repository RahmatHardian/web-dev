import { Section } from '../common'
import { designPreviewContent } from '../../data'
import { DesignGallery } from '../features/DesignGallery'

export const DesignPreview = () => {
  return (
    <Section id="designs" background="white">
      <div className="text-center animate-fade-in-up">
        <h2 className="heading-secondary mb-4">{designPreviewContent.title}</h2>
        <p className="text-body text-text-gray mx-auto max-w-2xl">
          {designPreviewContent.subtitle}
        </p>
      </div>

      <div className="mt-16">
        <DesignGallery />
      </div>
    </Section>
  )
}
