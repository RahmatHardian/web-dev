import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useTemplateContext } from './TemplateProvider'
import { MusicPlayer } from './common'
import {
  CoverSection,
  CoupleSection,
  EventSection,
  LoveStorySection,
  GallerySection,
  RSVPSection,
  GiftSection,
  GuestBookSection,
} from './sections'

export const TemplateLayout = () => {
  const { config } = useTemplateContext()
  const { couple, features } = config

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--template-background)',
        color: 'var(--template-text)',
      }}
    >
      {/* Music Player */}
      {features.showMusic && <MusicPlayer />}

      {/* Sections */}
      {features.showCover && <CoverSection />}
      {features.showCouple && <CoupleSection />}
      {features.showEvents && <EventSection />}
      {features.showLoveStory && <LoveStorySection />}
      {features.showGallery && <GallerySection />}
      {features.showRsvp && <RSVPSection />}
      {features.showGiftRegistry && <GiftSection />}
      {features.showGuestBook && <GuestBookSection />}

      {/* Footer */}
      <footer
        className="py-12 text-center"
        style={{ backgroundColor: 'var(--template-primary)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'var(--template-font-script, var(--template-font-heading))' }}
          >
            {couple.groom.nickname} & {couple.bride.nickname}
          </h3>

          {couple.hashtag && (
            <p className="text-white/80 mb-6">{couple.hashtag}</p>
          )}

          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-red-400" />
            <span>by</span>
            <a
              href="/"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              akunikah.in
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}

export default TemplateLayout
