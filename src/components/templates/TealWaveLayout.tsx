import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Play, Pause, ChevronUp, ChevronDown } from 'lucide-react'
import { useTemplateContext } from './TemplateProvider'
import { MusicPlayer, CoverOverlay } from './common'
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
import { useAutoSlide } from '../../hooks/useAutoSlide'

// Wavy SVG decoration component
const WavyDecoration = ({
  position,
  color = 'rgba(255,255,255,0.1)',
  flip = false,
}: {
  position: 'top' | 'bottom'
  color?: string
  flip?: boolean
}) => (
  <div
    className={`absolute left-0 right-0 ${position === 'top' ? 'top-0' : 'bottom-0'} pointer-events-none`}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
      <path
        fill={color}
        d={
          position === 'top'
            ? 'M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            : 'M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,90.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z'
        }
      />
    </svg>
  </div>
)

// Section IDs for auto-slide
const SECTION_IDS = [
  'cover',
  'couple',
  'events',
  'love-story',
  'gallery',
  'rsvp',
  'gift',
  'guest-book',
]

export const TealWaveLayout = () => {
  const { config } = useTemplateContext()
  const { couple, features } = config
  const [isCoverOpen, setIsCoverOpen] = useState(!features.showCoverOverlay)

  // Build active section list based on feature toggles
  const activeSectionIds = useMemo(() => {
    const ids: string[] = []
    if (features.showCover) ids.push('cover')
    if (features.showCouple) ids.push('couple')
    if (features.showEvents) ids.push('events')
    if (features.showLoveStory) ids.push('love-story')
    if (features.showGallery) ids.push('gallery')
    if (features.showRsvp) ids.push('rsvp')
    if (features.showGiftRegistry) ids.push('gift')
    if (features.showGuestBook) ids.push('guest-book')
    return ids
  }, [features])

  // Auto-slide hook
  const autoSlide = useAutoSlide({
    enabled: features.enableAutoSlide ?? false,
    interval: features.autoSlideInterval ?? 5000,
    sectionIds: activeSectionIds,
    pauseOnInteraction: true,
  })

  const handleCoverOpen = () => {
    setIsCoverOpen(true)
  }

  return (
    <>
      {/* Cover Overlay (click to open) */}
      <AnimatePresence>
        {!isCoverOpen && features.showCoverOverlay && (
          <CoverOverlay onOpen={handleCoverOpen} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        className="min-h-screen relative"
        style={{
          backgroundColor: 'var(--template-background)',
          color: 'var(--template-text)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isCoverOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Music Player */}
        {features.showMusic && isCoverOpen && <MusicPlayer />}

        {/* Auto-slide controls */}
        {features.enableAutoSlide && isCoverOpen && (
          <motion.div
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Play/Pause button */}
            <button
              onClick={autoSlide.toggle}
              className="p-3 rounded-full shadow-lg transition-all hover:scale-110"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: 'var(--template-primary)',
              }}
              aria-label={autoSlide.isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
            >
              {autoSlide.isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            {/* Navigation dots */}
            <div
              className="flex flex-col gap-1.5 py-2 px-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
            >
              {activeSectionIds.map((id, index) => (
                <button
                  key={id}
                  onClick={() => autoSlide.goToSection(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      autoSlide.currentIndex === index
                        ? 'var(--template-primary)'
                        : 'var(--template-text-muted)',
                    opacity: autoSlide.currentIndex === index ? 1 : 0.3,
                    transform: autoSlide.currentIndex === index ? 'scale(1.3)' : 'scale(1)',
                  }}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>

            {/* Up/Down buttons */}
            <button
              onClick={autoSlide.goToPrev}
              className="p-2 rounded-full shadow-lg transition-all hover:scale-110"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: 'var(--template-primary)',
              }}
              aria-label="Previous section"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={autoSlide.goToNext}
              className="p-2 rounded-full shadow-lg transition-all hover:scale-110"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: 'var(--template-primary)',
              }}
              aria-label="Next section"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Sections with wavy decorations */}
        {features.showCover && (
          <div id="cover" className="relative">
            <CoverSection />
            <WavyDecoration position="bottom" color="var(--template-background)" />
          </div>
        )}

        {features.showCouple && (
          <div id="couple" className="relative">
            <WavyDecoration position="top" color="var(--template-primary)" flip />
            <CoupleSection />
            <WavyDecoration position="bottom" color="var(--template-background)" />
          </div>
        )}

        {features.showEvents && (
          <div id="events" className="relative">
            <EventSection />
            <WavyDecoration position="bottom" color="var(--template-primary)" />
          </div>
        )}

        {features.showLoveStory && (
          <div
            id="love-story"
            className="relative py-8"
            style={{ backgroundColor: 'var(--template-primary)' }}
          >
            <LoveStorySection />
            <WavyDecoration position="bottom" color="var(--template-background)" />
          </div>
        )}

        {features.showGallery && (
          <div id="gallery" className="relative">
            <GallerySection />
          </div>
        )}

        {features.showRsvp && (
          <div id="rsvp" className="relative">
            <WavyDecoration position="top" color="var(--template-secondary)" />
            <RSVPSection />
          </div>
        )}

        {features.showGiftRegistry && (
          <div id="gift" className="relative">
            <GiftSection />
          </div>
        )}

        {features.showGuestBook && (
          <div id="guest-book" className="relative">
            <WavyDecoration position="top" color="var(--template-primary)" flip />
            <GuestBookSection />
          </div>
        )}

        {/* Footer */}
        <footer
          className="relative py-12 text-center"
          style={{ backgroundColor: 'var(--template-primary)' }}
        >
          <WavyDecoration position="top" color="var(--template-background)" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8"
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
      </motion.div>
    </>
  )
}

export default TealWaveLayout
