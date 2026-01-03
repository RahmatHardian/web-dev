import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { LazyImage } from '../../common'
import type { GalleryPhoto, GalleryLayout } from '../../../types/template'

interface GalleryLightboxProps {
  photos: GalleryPhoto[]
  layout?: GalleryLayout
  columns?: 2 | 3 | 4
}

export const GalleryLightbox = ({
  photos,
  layout = 'grid',
  columns = 3,
}: GalleryLightboxProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const sortedPhotos = [...photos].sort((a, b) => a.order - b.order)

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + sortedPhotos.length) % sortedPhotos.length : 0
    )
  }, [sortedPhotos.length])

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % sortedPhotos.length : 0
    )
  }, [sortedPhotos.length])

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
        case 'Escape':
          handleClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, handlePrevious, handleNext, handleClose])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid gap-3 md:gap-4 ${gridClasses[columns]}`}>
        {sortedPhotos.map((photo, index) => (
          <motion.div
            key={photo.url}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedIndex(index)}
          >
            <LazyImage
              src={photo.thumbnail || photo.url}
              alt={photo.caption || `Photo ${index + 1}`}
              aspectRatio="1/1"
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={handleClose}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image container */}
            <motion.div
              key={selectedIndex}
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={sortedPhotos[selectedIndex].url}
                alt={sortedPhotos[selectedIndex].caption || `Photo ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Caption */}
              {sortedPhotos[selectedIndex].caption && (
                <motion.p
                  className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {sortedPhotos[selectedIndex].caption}
                </motion.p>
              )}
            </motion.div>

            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
              {selectedIndex + 1} / {sortedPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryLightbox
