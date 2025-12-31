import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Textarea, Button } from '../ui'
import type { RSVPFormData } from '../../types/form'
import { rsvpSchema, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../utils'

interface RSVPFormProps {
  onSuccess?: () => void
}

export const RSVPForm = ({ onSuccess }: RSVPFormProps) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  })

  const onSubmit = async (data: RSVPFormData) => {
    setSubmitStatus('loading')

    try {
      // Send to Formspree or your backend
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'demo'}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        onSuccess?.()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <Input
        label="Nama Lengkap"
        placeholder="Masukkan nama Anda"
        error={errors.name?.message}
        required
        {...register('name')}
      />

      {/* Email */}
      <Input
        label="Email"
        type="email"
        placeholder="nama@email.com"
        error={errors.email?.message}
        required
        {...register('email')}
      />

      {/* Phone */}
      <Input
        label="Nomor Telepon"
        type="tel"
        placeholder="08123456789"
        error={errors.phone?.message}
        required
        {...register('phone')}
      />

      {/* Attendance */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Kehadiran <span className="text-red-500">*</span>
        </label>
        <select
          {...register('attendance')}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        >
          <option value="">Pilih kehadiran</option>
          <option value="hadir">Hadir</option>
          <option value="tidak_hadir">Tidak Hadir</option>
          <option value="ragu">Masih Ragu</option>
        </select>
        {errors.attendance && (
          <p className="mt-1.5 text-sm text-red-600">{errors.attendance.message}</p>
        )}
      </div>

      {/* Guest Count */}
      <Input
        label="Jumlah Tamu"
        type="number"
        min="1"
        max="10"
        placeholder="1"
        error={errors.guestCount?.message}
        required
        {...register('guestCount', { valueAsNumber: true })}
      />

      {/* Message */}
      <Textarea
        label="Pesan (Opsional)"
        placeholder="Tulis pesan atau ucapan Anda..."
        {...register('message')}
      />

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
          {SUCCESS_MESSAGES.rsvpSubmitted}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {ERROR_MESSAGES.generic}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={submitStatus === 'loading'}
        disabled={submitStatus === 'loading'}
      >
        {submitStatus === 'loading' ? 'Mengirim...' : 'Kirim RSVP'}
      </Button>
    </form>
  )
}
