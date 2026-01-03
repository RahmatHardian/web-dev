import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Users, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection } from '../common'
import { Button, Input } from '../../ui'

interface RSVPFormData {
  name: string
  email?: string
  attendance: 'hadir' | 'tidak_hadir'
  guestCount: number
  message?: string
}

export const RSVPSection = () => {
  const { config, guest } = useTemplateContext()
  const { rsvp, features } = config
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    defaultValues: {
      name: guest?.name || '',
      attendance: 'hadir',
      guestCount: 1,
    },
  })

  const attendance = watch('attendance')

  if (!features.showRsvp || !rsvp.enabled) {
    return null
  }

  const onSubmit = async (data: RSVPFormData) => {
    setSubmitError(null)

    try {
      if (rsvp.formspreeId && rsvp.formspreeId !== 'demo') {
        const response = await fetch(`https://formspree.io/f/${rsvp.formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Failed to submit')
        }
      }

      // Demo mode or success
      setIsSubmitted(true)
    } catch {
      setSubmitError('Gagal mengirim konfirmasi. Silakan coba lagi.')
    }
  }

  const formatDeadline = (date?: string) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <TemplateSection id="rsvp" backgroundVariant="gradient" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Mail
          className="w-8 h-8 mx-auto mb-4"
          style={{ color: 'var(--template-primary)' }}
        />
        <h2
          className="text-3xl md:text-4xl mb-2"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          {rsvp.title || 'Konfirmasi Kehadiran'}
        </h2>
        {rsvp.subtitle && (
          <p style={{ color: 'var(--template-text-muted)' }}>
            {rsvp.subtitle}
          </p>
        )}
        {rsvp.deadline && (
          <p
            className="text-sm mt-2"
            style={{ color: 'var(--template-text-muted)' }}
          >
            Konfirmasi sebelum {formatDeadline(rsvp.deadline)}
          </p>
        )}
      </motion.div>

      {/* Form */}
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {isSubmitted ? (
          <motion.div
            className="text-center p-8 rounded-2xl"
            style={{
              backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <CheckCircle
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: 'var(--template-primary)' }}
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: 'var(--template-text)' }}
            >
              Terima Kasih!
            </h3>
            <p style={{ color: 'var(--template-text-muted)' }}>
              Konfirmasi kehadiran Anda telah kami terima.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
            }}
          >
            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--template-text)' }}
              >
                Nama Lengkap *
              </label>
              <Input
                {...register('name', { required: 'Nama wajib diisi' })}
                placeholder="Masukkan nama Anda"
                className="w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Attendance */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--template-text)' }}
              >
                Konfirmasi Kehadiran *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="hadir"
                    {...register('attendance')}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--template-primary)' }}
                  />
                  <span style={{ color: 'var(--template-text)' }}>Hadir</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="tidak_hadir"
                    {...register('attendance')}
                    className="w-4 h-4"
                    style={{ accentColor: 'var(--template-primary)' }}
                  />
                  <span style={{ color: 'var(--template-text)' }}>Tidak Hadir</span>
                </label>
              </div>
            </div>

            {/* Guest count */}
            {attendance === 'hadir' && rsvp.showGuestCount && (
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--template-text)' }}
                >
                  <Users className="inline w-4 h-4 mr-1" />
                  Jumlah Tamu
                </label>
                <select
                  {...register('guestCount', { valueAsNumber: true })}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.3)',
                    backgroundColor: 'white',
                  }}
                >
                  {Array.from({ length: rsvp.maxGuests }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'orang' : 'orang'}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--template-text)' }}
              >
                Pesan (Opsional)
              </label>
              <textarea
                {...register('message')}
                rows={3}
                placeholder="Tulis ucapan atau pesan..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                style={{
                  borderColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.3)',
                }}
              />
            </div>

            {/* Error message */}
            {submitError && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                {submitError}
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              style={{
                backgroundColor: 'var(--template-primary)',
                color: 'white',
              }}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
            </Button>
          </form>
        )}
      </motion.div>
    </TemplateSection>
  )
}

export default RSVPSection
