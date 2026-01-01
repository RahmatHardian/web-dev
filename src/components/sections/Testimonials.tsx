import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Section, LazyImage } from '../common'
import { Card } from '../ui'
import { testimonials, testimonialsContent } from '../../data'

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section id="testimonials" noPadding fullWidth className="gradient-dark py-16 md:py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center animate-fade-in-up">
          <h2 className="heading-secondary mb-4 text-white">{testimonialsContent.title}</h2>
          <p className="text-body text-white-soft mx-auto max-w-2xl">
            {testimonialsContent.subtitle}
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-4xl">
          <Card padding="lg" variant="elevated" className="bg-white/5 backdrop-blur-sm border border-border-light shadow-deep">
            <div className="flex flex-col items-center text-center">
              {/* Quote icon */}
              <Quote className="mb-6 h-12 w-12 text-secondary" />

              {/* Photo */}
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-primary">
                <LazyImage
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  aspectRatio="1/1"
                />
              </div>

              {/* Quote */}
              <p className="mb-6 text-lg italic text-white-soft">
                "{currentTestimonial.quote}"
              </p>

              {/* Name & City */}
              <h4 className="font-semibold text-gold-light">
                {currentTestimonial.name}
              </h4>
              <p className="text-sm text-white-soft">{currentTestimonial.city}</p>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full bg-dark-blue p-2 text-white transition-colors hover:bg-secondary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="rounded-full bg-dark-blue p-2 text-white transition-colors hover:bg-secondary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
