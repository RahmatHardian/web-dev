import { Feature, TrustIndicator } from '@types/feature'

export const features: Feature[] = [
  {
    id: 'personalization',
    title: 'Nama Tamu Personal',
    description: 'Setiap tamu mendapat undangan dengan namanya sendiri',
    icon: 'User',
  },
  {
    id: 'rsvp',
    title: 'RSVP Otomatis',
    description: 'Kelola konfirmasi kehadiran tamu secara real-time',
    icon: 'CheckCircle',
  },
  {
    id: 'maps',
    title: 'Lokasi Google Maps',
    description: 'Tamu mudah menemukan lokasi acara dengan navigasi',
    icon: 'MapPin',
  },
  {
    id: 'countdown',
    title: 'Countdown Hari H',
    description: 'Hitung mundur otomatis menuju hari pernikahan',
    icon: 'Clock',
  },
  {
    id: 'gallery',
    title: 'Galeri Foto & Video',
    description: 'Tampilkan momen indah perjalanan cinta Anda',
    icon: 'Image',
  },
  {
    id: 'music',
    title: 'Musik Latar',
    description: 'Tambahkan lagu favorit sebagai background',
    icon: 'Music',
  },
  {
    id: 'prayer',
    title: 'Doa & Ayat',
    description: 'Lengkapi dengan ayat Al-Quran dan doa (opsional)',
    icon: 'BookOpen',
  },
]

export const trustIndicators: TrustIndicator[] = [
  {
    id: 'fast',
    text: 'Jadi dalam 1 hari',
    icon: 'Zap',
    value: '24 jam',
  },
  {
    id: 'whatsapp',
    text: 'Dibagikan via WhatsApp',
    icon: 'MessageCircle',
    value: 'Instant',
  },
  {
    id: 'trusted',
    text: 'Dipercaya 1.000+ pasangan',
    icon: 'Users',
    value: '1.000+',
  },
]
