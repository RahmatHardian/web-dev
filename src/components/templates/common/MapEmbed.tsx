import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import type { EventVenue } from '../../../types/template'

interface MapEmbedProps {
  venue: EventVenue
  height?: string
  showDirectionsButton?: boolean
}

export const MapEmbed = ({
  venue,
  height = '300px',
  showDirectionsButton = true,
}: MapEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const getDirectionsUrl = () => {
    if (venue.mapCoordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${venue.mapCoordinates.lat},${venue.mapCoordinates.lng}`
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${venue.name}, ${venue.address}, ${venue.city}`
    )}`
  }

  const getEmbedUrl = () => {
    if (venue.mapUrl.includes('embed')) {
      return venue.mapUrl
    }
    // Convert regular Google Maps URL to embed URL
    if (venue.mapCoordinates) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966!2d${venue.mapCoordinates.lng}!3d${venue.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sid!4v1234567890`
    }
    return venue.mapUrl
  }

  return (
    <div className="rounded-xl overflow-hidden" style={{ height }}>
      {/* Map Container */}
      <div className="relative w-full h-full">
        {isLoading && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'var(--template-background)' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <MapPin
                className="w-8 h-8"
                style={{ color: 'var(--template-primary)' }}
              />
            </motion.div>
          </div>
        )}

        <iframe
          src={getEmbedUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          title={`Map location of ${venue.name}`}
        />

        {/* Overlay with venue info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-end justify-between">
            <div className="text-white">
              <h4 className="font-semibold text-lg">{venue.name}</h4>
              <p className="text-sm text-white/80">{venue.address}</p>
              <p className="text-sm text-white/60">{venue.city}</p>
            </div>

            {showDirectionsButton && (
              <motion.a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'var(--template-primary)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-4 h-4" />
                Petunjuk Arah
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MapEmbed
