import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ChevronDown, MapPin, Calendar, Clock, Copy, Check, Send } from 'lucide-react'
import { useTemplateContext } from './TemplateProvider'
import { MusicPlayer, CoverOverlay, FallingPetals, CountdownTimer, GalleryLightbox } from './common'
import { useForm } from 'react-hook-form'

// Abstract background waves
const AbstractWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    <svg
      className="absolute bottom-0 left-0 w-full h-[40vh] opacity-[0.05]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    <svg
      className="absolute top-0 left-0 w-full h-[40vh] opacity-[0.05] rotate-180"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
)

// Full-screen section wrapper with snap scroll
const FullScreenSection = ({
  id,
  children,
  className = '',
  style = {},
}: {
  id: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) => (
  <section
    id={id}
    className={`min-h-screen w-full flex flex-col items-center justify-center relative snap-start overflow-hidden ${className}`}
    style={style}
  >
    <AbstractWaves />
    <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
      {children}
    </div>
  </section>
)

// Decorative corner ornaments
const CornerOrnaments = ({ color = 'currentColor' }: { color?: string }) => (
  <>
    <div className="absolute top-4 left-4 w-16 h-16 opacity-30">
      <svg viewBox="0 0 100 100" fill={color}>
        <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L100,10 Q60,10 50,50 Q40,10 0,10 Z" />
        <circle cx="50" cy="20" r="5" />
      </svg>
    </div>
    <div className="absolute top-4 right-4 w-16 h-16 opacity-30 rotate-90">
      <svg viewBox="0 0 100 100" fill={color}>
        <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L100,10 Q60,10 50,50 Q40,10 0,10 Z" />
        <circle cx="50" cy="20" r="5" />
      </svg>
    </div>
    <div className="absolute bottom-4 left-4 w-16 h-16 opacity-30 -rotate-90">
      <svg viewBox="0 0 100 100" fill={color}>
        <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L100,10 Q60,10 50,50 Q40,10 0,10 Z" />
        <circle cx="50" cy="20" r="5" />
      </svg>
    </div>
    <div className="absolute bottom-4 right-4 w-16 h-16 opacity-30 rotate-180">
      <svg viewBox="0 0 100 100" fill={color}>
        <path d="M0,0 Q50,0 50,50 Q50,0 100,0 L100,10 Q60,10 50,50 Q40,10 0,10 Z" />
        <circle cx="50" cy="20" r="5" />
      </svg>
    </div>
  </>
)

// Scroll indicator
const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <ChevronDown className="w-5 h-5" />
  </motion.div>
)

// Floating navigation dots
const FloatingDots = ({
  sections,
  activeIndex,
  onNavigate,
}: {
  sections: { id: string; label: string }[]
  activeIndex: number
  onNavigate: (index: number) => void
}) => (
  <motion.nav
    className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1 }}
  >
    {sections.map((section, index) => (
      <button
        key={section.id}
        onClick={() => onNavigate(index)}
        className="group relative flex items-center justify-end"
      >
        <span
          className="absolute right-6 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
        >
          {section.label}
        </span>
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: activeIndex === index ? 'var(--template-primary)' : 'rgba(255,255,255,0.5)',
            boxShadow: activeIndex === index ? '0 0 10px var(--template-primary)' : 'none',
          }}
          animate={{ scale: activeIndex === index ? 1.4 : 1 }}
        />
      </button>
    ))}
  </motion.nav>
)

export const TealWaveLayout = () => {
  const { config, guest } = useTemplateContext()
  const { couple, events, gallery, rsvp, giftRegistry, loveStory, guestBook, features } = config
  const [isCoverOpen, setIsCoverOpen] = useState(!features.showCoverOverlay)
  const [activeSection, setActiveSection] = useState(0)
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  // Lightbox state removed - GalleryLightbox manages its own state
  const containerRef = useRef<HTMLDivElement>(null)

  // RSVP Form
  const { register: registerRsvp, handleSubmit: handleRsvpSubmit, formState: { isSubmitting: isRsvpSubmitting } } = useForm()
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)

  // Guest book form
  const { register: registerGuestbook, handleSubmit: handleGuestbookSubmit, reset: resetGuestbook, formState: { isSubmitting: isGuestbookSubmitting } } = useForm()
  const [guestbookSubmitted, setGuestbookSubmitted] = useState(false)

  // Section definitions
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'couple', label: 'Couple' },
    { id: 'events', label: 'Events' },
    { id: 'story', label: 'Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gift', label: 'Gift' },
    { id: 'wishes', label: 'Wishes' },
  ].filter((s) => {
    if (s.id === 'hero') return features.showCover
    if (s.id === 'couple') return features.showCouple
    if (s.id === 'events') return features.showEvents
    if (s.id === 'story') return features.showLoveStory
    if (s.id === 'gallery') return features.showGallery
    if (s.id === 'rsvp') return features.showRsvp
    if (s.id === 'gift') return features.showGiftRegistry
    if (s.id === 'wishes') return features.showGuestBook
    return true
  })

  // Track active section on scroll
  useEffect(() => {
    if (!isCoverOpen) return

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      sections.forEach((section, index) => {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCoverOpen, sections])

  const navigateToSection = useCallback((index: number) => {
    const section = sections[index]
    if (section) {
      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [sections])

  const handleCoverOpen = () => setIsCoverOpen(true)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(id)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  // openLightbox removed - GalleryLightbox handles clicks internally

  const onRsvpSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000))
    setRsvpSubmitted(true)
  }

  const onGuestbookSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000))
    setGuestbookSubmitted(true)
    resetGuestbook()
    setTimeout(() => setGuestbookSubmitted(false), 3000)
  }

  // Get wedding date for countdown (as string for CountdownTimer)
  const weddingDate = events[0]?.date || new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Cover Overlay */}
      <AnimatePresence>
        {!isCoverOpen && features.showCoverOverlay && (
          <CoverOverlay onOpen={handleCoverOpen} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="snap-y snap-mandatory overflow-y-auto"
        style={{ backgroundColor: 'var(--template-background)', color: 'var(--template-text)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isCoverOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Falling Petals Animation */}
        {isCoverOpen && <FallingPetals color="var(--template-primary)" count={12} />}

        {/* Music Player */}
        {features.showMusic && isCoverOpen && <MusicPlayer />}

        {/* Floating Navigation */}
        {isCoverOpen && (
          <FloatingDots
            sections={sections}
            activeIndex={activeSection}
            onNavigate={navigateToSection}
          />
        )}

        {/* ==================== HERO SECTION ==================== */}
        {features.showCover && (
          <FullScreenSection
            id="hero"
            className="text-white text-center px-6"
            style={{
              background: `linear-gradient(135deg, var(--template-primary) 0%, var(--template-secondary) 100%)`,
            }}
          >
            <CornerOrnaments color="white" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-lg"
            >
              <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
                The Wedding Of
              </p>

              <h1
                className="text-5xl md:text-7xl mb-2"
                style={{ fontFamily: 'var(--template-font-script)' }}
              >
                {couple.groom.nickname}
              </h1>
              <p className="text-3xl my-3">&</p>
              <h1
                className="text-5xl md:text-7xl mb-8"
                style={{ fontFamily: 'var(--template-font-script)' }}
              >
                {couple.bride.nickname}
              </h1>

              {/* Guest name */}
              {guest && (
                <div className="mb-8 py-3 px-6 rounded-full bg-white/10 backdrop-blur-sm inline-block">
                  <p className="text-sm opacity-70">Dear</p>
                  <p className="text-xl font-medium">{guest.name}</p>
                </div>
              )}

              {/* Countdown */}
              {features.showCountdown && (
                <div className="mb-8">
                  <CountdownTimer targetDate={weddingDate} />
                </div>
              )}

              {couple.quote && (
                <p className="text-sm md:text-base opacity-80 italic max-w-md mx-auto">
                  "{couple.quote}"
                </p>
              )}
            </motion.div>

            <ScrollIndicator />
          </FullScreenSection>
        )}

        {/* ==================== COUPLE SECTION ==================== */}
        {features.showCouple && (
          <FullScreenSection id="couple" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-12"
                style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                We're Getting Married
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 md:gap-8">
                {/* Groom */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4"
                    style={{ borderColor: 'var(--template-primary)' }}
                  >
                    <img
                      src={couple.groom.photo}
                      alt={couple.groom.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                  >
                    {couple.groom.fullName}
                  </h3>
                  <p className="text-sm opacity-70 mb-2">{couple.groom.birthOrder}</p>
                  <p className="text-sm">{couple.groom.fatherName}</p>
                  <p className="text-sm">{couple.groom.motherName}</p>
                </motion.div>

                {/* Bride */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4"
                    style={{ borderColor: 'var(--template-primary)' }}
                  >
                    <img
                      src={couple.bride.photo}
                      alt={couple.bride.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                  >
                    {couple.bride.fullName}
                  </h3>
                  <p className="text-sm opacity-70 mb-2">{couple.bride.birthOrder}</p>
                  <p className="text-sm">{couple.bride.fatherName}</p>
                  <p className="text-sm">{couple.bride.motherName}</p>
                </motion.div>
              </div>
            </div>
          </FullScreenSection>
        )}

        {/* ==================== EVENTS SECTION ==================== */}
        {features.showEvents && (
          <FullScreenSection
            id="events"
            className="py-20 px-6"
            style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-12"
                style={{ fontFamily: 'var(--template-font-script)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Save The Date
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 opacity-70" />
                        <span>
                          {new Date(event.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 opacity-70" />
                        <span>{event.startTime} - {event.endTime || 'Selesai'}</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 opacity-70 mt-0.5" />
                        <div>
                          <p className="font-medium">{event.venue.name}</p>
                          <p className="text-sm opacity-70">{event.venue.address}</p>
                          <p className="text-sm opacity-70">{event.venue.city}</p>
                        </div>
                      </div>

                      {event.dresscode && (
                        <p className="text-sm opacity-70 pt-2 border-t border-white/20">
                          Dress Code: {event.dresscode}
                        </p>
                      )}
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${event.venue.mapCoordinates?.lat},${event.venue.mapCoordinates?.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-white text-sm font-medium rounded-full"
                      style={{ color: 'var(--template-primary)' }}
                    >
                      <MapPin className="w-4 h-4" />
                      Lihat Lokasi
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </FullScreenSection>
        )}

        {/* ==================== LOVE STORY SECTION ==================== */}
        {features.showLoveStory && loveStory.enabled && (
          <FullScreenSection id="story" className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-12"
                style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {loveStory.title || 'Our Love Story'}
              </motion.h2>

              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                  style={{ backgroundColor: 'var(--template-primary)', opacity: 0.3 }}
                />

                {loveStory.milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <p className="text-sm opacity-50 mb-1">
                        {new Date(milestone.date).toLocaleDateString('id-ID', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                      <h4
                        className="text-xl font-semibold mb-2"
                        style={{ color: 'var(--template-primary)' }}
                      >
                        {milestone.title}
                      </h4>
                      <p className="text-sm opacity-70">{milestone.description}</p>
                    </div>

                    {/* Dot */}
                    <div
                      className="w-4 h-4 rounded-full z-10 ring-4 ring-white"
                      style={{ backgroundColor: 'var(--template-primary)' }}
                    />

                    {/* Empty space or image */}
                    <div className="flex-1">
                      {milestone.image && (
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full max-w-[200px] rounded-lg shadow-lg mx-auto"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FullScreenSection>
        )}

        {/* ==================== GALLERY SECTION ==================== */}
        {features.showGallery && gallery.enabled && (
          <FullScreenSection
            id="gallery"
            className="py-20 px-6"
            style={{ backgroundColor: 'var(--template-secondary)', opacity: 0.9 }}
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-12"
                style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {gallery.title || 'Our Gallery'}
              </motion.h2>

              <GalleryLightbox photos={gallery.photos} columns={3} />
            </div>
          </FullScreenSection>
        )}

        {/* ==================== RSVP SECTION ==================== */}
        {features.showRsvp && rsvp.enabled && (
          <FullScreenSection id="rsvp" className="py-20 px-6">
            <div className="max-w-md mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {rsvp.title || 'RSVP'}
              </motion.h2>
              <p className="opacity-70 mb-8">{rsvp.subtitle}</p>

              {rsvpSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl"
                  style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
                >
                  <Check className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Terima Kasih!</h3>
                  <p className="opacity-80">Konfirmasi kehadiran Anda telah kami terima.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleRsvpSubmit(onRsvpSubmit)}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    {...registerRsvp('name', { required: true })}
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{ borderColor: 'var(--template-primary)' }}
                  />

                  <select
                    {...registerRsvp('attendance', { required: true })}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{ borderColor: 'var(--template-primary)' }}
                  >
                    <option value="">Konfirmasi Kehadiran</option>
                    <option value="hadir">Ya, Saya akan hadir</option>
                    <option value="tidak">Maaf, Saya tidak bisa hadir</option>
                  </select>

                  {rsvp.showGuestCount && (
                    <select
                      {...registerRsvp('guests')}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--template-primary)' }}
                    >
                      <option value="1">1 Orang</option>
                      {Array.from({ length: rsvp.maxGuests - 1 }, (_, i) => (
                        <option key={i + 2} value={i + 2}>{i + 2} Orang</option>
                      ))}
                    </select>
                  )}

                  <button
                    type="submit"
                    disabled={isRsvpSubmitting}
                    className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
                  >
                    {isRsvpSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
                  </button>
                </motion.form>
              )}
            </div>
          </FullScreenSection>
        )}

        {/* ==================== GIFT SECTION ==================== */}
        {features.showGiftRegistry && giftRegistry.enabled && (
          <FullScreenSection
            id="gift"
            className="py-20 px-6"
            style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
          >
            <div className="max-w-lg mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'var(--template-font-script)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {giftRegistry.title || 'Wedding Gift'}
              </motion.h2>
              <p className="opacity-80 mb-8">{giftRegistry.message}</p>

              <div className="space-y-4">
                {giftRegistry.bankAccounts.map((account, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="font-medium mb-2">{account.bankName}</p>
                    <p className="text-2xl font-mono mb-1">{account.accountNumber}</p>
                    <p className="text-sm opacity-70 mb-4">a.n. {account.accountHolder}</p>

                    <button
                      onClick={() => copyToClipboard(account.accountNumber, account.accountNumber)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium transition-all hover:scale-105"
                      style={{ color: 'var(--template-primary)' }}
                    >
                      {copiedAccount === account.accountNumber ? (
                        <>
                          <Check className="w-4 h-4" />
                          Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Salin Nomor
                        </>
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </FullScreenSection>
        )}

        {/* ==================== GUESTBOOK SECTION ==================== */}
        {features.showGuestBook && guestBook.enabled && (
          <FullScreenSection id="wishes" className="py-20 px-6">
            <div className="max-w-lg mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'var(--template-font-script)', color: 'var(--template-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {guestBook.title || 'Wishes'}
              </motion.h2>
              <p className="opacity-70 mb-8">{guestBook.subtitle}</p>

              <motion.form
                onSubmit={handleGuestbookSubmit(onGuestbookSubmit)}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <input
                  {...registerGuestbook('name', { required: true })}
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ borderColor: 'var(--template-primary)' }}
                />

                <textarea
                  {...registerGuestbook('message', { required: true })}
                  placeholder="Tulis ucapan dan doa Anda..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: 'var(--template-primary)' }}
                />

                <button
                  type="submit"
                  disabled={isGuestbookSubmitting}
                  className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
                >
                  <Send className="w-4 h-4" />
                  {isGuestbookSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
                </button>

                {guestbookSubmitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 font-medium"
                  >
                    Terima kasih atas ucapan Anda!
                  </motion.p>
                )}
              </motion.form>
            </div>
          </FullScreenSection>
        )}

        {/* ==================== FOOTER ==================== */}
        <footer
          className="py-16 text-center"
          style={{ backgroundColor: 'var(--template-primary)', color: 'white' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'var(--template-font-script)' }}
            >
              {couple.groom.nickname} & {couple.bride.nickname}
            </h3>

            {couple.hashtag && (
              <p className="opacity-80 mb-6 text-lg">{couple.hashtag}</p>
            )}

            <p className="opacity-60 text-sm mb-4">
              We can't wait to celebrate with you!
            </p>

            <div className="flex items-center justify-center gap-2 opacity-50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current text-red-400" />
              <span>by</span>
              <a href="/" className="hover:opacity-80 transition-opacity font-medium">
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
