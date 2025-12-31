/**
 * App-wide constants
 */

// WhatsApp
export const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '6281234567890'

// Form submission
export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

// Social Media Links
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_PHONE}`,
  instagram: 'https://instagram.com/nikah.in',
  facebook: 'https://facebook.com/nikah.in',
  twitter: 'https://twitter.com/nikahin',
}

// SEO Meta
export const SEO_CONFIG = {
  title: 'nikah.in - Undangan Digital Pernikahan Modern',
  description:
    'Buat undangan pernikahan digital yang simpel, elegan, dan siap dibagikan via WhatsApp. Jadi dalam 1 hari dengan harga terjangkau.',
  keywords: [
    'undangan digital',
    'undangan pernikahan',
    'undangan online',
    'undangan WhatsApp',
    'nikah.in',
    'undangan modern',
    'undangan islami',
    'undangan adat',
  ],
  url: 'https://nikah.in',
  image: '/og-image.png',
  locale: 'id_ID',
}

// Navigation Links
export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Desain', href: '#designs' },
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Testimoni', href: '#testimonials' },
]

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
}

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Design Categories
export const DESIGN_CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'elegant', label: 'Elegant' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'islami', label: 'Islami' },
  { id: 'adat', label: 'Adat' },
  { id: 'modern', label: 'Modern' },
] as const

// Success Messages
export const SUCCESS_MESSAGES = {
  rsvpSubmitted: 'Terima kasih! Konfirmasi kehadiran Anda telah diterima.',
  contactSent: 'Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.',
}

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Terjadi kesalahan. Silakan coba lagi.',
  network: 'Koneksi internet bermasalah. Periksa koneksi Anda.',
  formValidation: 'Mohon periksa kembali form Anda.',
}
