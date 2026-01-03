import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection, MapEmbed } from '../common'
import type { WeddingEvent } from '../../../types/template'

interface EventCardProps {
  event: WeddingEvent
  index: number
}

const EventCard = ({ event, index }: EventCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const formatTime = (time: string) => {
    return time.replace(':', '.')
  }

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.05)',
        border: '1px solid rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Event header */}
      <div
        className="px-6 py-4 text-center"
        style={{
          backgroundColor: 'var(--template-primary)',
          color: 'white',
        }}
      >
        <h3
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--template-font-heading)' }}
        >
          {event.title}
        </h3>
      </div>

      {/* Event details */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
          >
            <Calendar className="w-5 h-5" style={{ color: 'var(--template-primary)' }} />
          </div>
          <div>
            <p className="text-sm" style={{ color: 'var(--template-text-muted)' }}>
              Tanggal
            </p>
            <p className="font-medium" style={{ color: 'var(--template-text)' }}>
              {formatDate(event.date)}
            </p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
          >
            <Clock className="w-5 h-5" style={{ color: 'var(--template-primary)' }} />
          </div>
          <div>
            <p className="text-sm" style={{ color: 'var(--template-text-muted)' }}>
              Waktu
            </p>
            <p className="font-medium" style={{ color: 'var(--template-text)' }}>
              {formatTime(event.startTime)}
              {event.endTime ? ` - ${formatTime(event.endTime)} WIB` : ' WIB - Selesai'}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
          >
            <MapPin className="w-5 h-5" style={{ color: 'var(--template-primary)' }} />
          </div>
          <div>
            <p className="text-sm" style={{ color: 'var(--template-text-muted)' }}>
              Lokasi
            </p>
            <p className="font-medium" style={{ color: 'var(--template-text)' }}>
              {event.venue.name}
            </p>
            <p className="text-sm" style={{ color: 'var(--template-text-muted)' }}>
              {event.venue.address}, {event.venue.city}
            </p>
          </div>
        </div>

        {/* Dresscode */}
        {event.dresscode && (
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
            >
              <Shirt className="w-5 h-5" style={{ color: 'var(--template-primary)' }} />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--template-text-muted)' }}>
                Dresscode
              </p>
              <p className="font-medium" style={{ color: 'var(--template-text)' }}>
                {event.dresscode}
              </p>
            </div>
          </div>
        )}

        {/* Notes */}
        {event.notes && (
          <p
            className="text-sm italic pt-2 border-t"
            style={{
              color: 'var(--template-text-muted)',
              borderColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
            }}
          >
            {event.notes}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export const EventSection = () => {
  const { config } = useTemplateContext()
  const { events, features } = config

  if (!features.showEvents || events.length === 0) return null

  // Get the first event venue for the map
  const primaryVenue = events[0]?.venue

  return (
    <TemplateSection id="events" backgroundVariant="gradient" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          className="text-sm uppercase tracking-[0.3em] mb-2"
          style={{ color: 'var(--template-text-muted)' }}
        >
          Save The Date
        </p>
        <h2
          className="text-3xl md:text-4xl"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          Waktu & Tempat
        </h2>
      </motion.div>

      {/* Event cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

      {/* Map */}
      {features.showMap && primaryVenue && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MapEmbed venue={primaryVenue} height="350px" />
        </motion.div>
      )}
    </TemplateSection>
  )
}

export default EventSection
