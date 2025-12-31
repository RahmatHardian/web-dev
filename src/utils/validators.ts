import { z } from 'zod'

/**
 * RSVP Form Validation Schema
 */
export const rsvpSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,12}$/, 'Nomor telepon tidak valid')
    .transform((val) => val.replace(/^0/, '62')), // Convert to international format
  attendance: z.enum(['hadir', 'tidak_hadir', 'ragu'], {
    required_error: 'Pilih kehadiran',
  }),
  guestCount: z
    .number()
    .min(1, 'Minimal 1 tamu')
    .max(10, 'Maksimal 10 tamu'),
  message: z.string().max(500, 'Pesan maksimal 500 karakter').optional(),
})

/**
 * Contact Form Validation Schema
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,12}$/, 'Nomor telepon tidak valid'),
  packageInterest: z.string().optional(),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(1000, 'Pesan maksimal 1000 karakter'),
})

/**
 * Email validation helper
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone number validation helper
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
  return phoneRegex.test(phone)
}

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}
