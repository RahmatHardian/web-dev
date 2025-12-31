import { PricingPackage } from '@types/pricing'

export const pricingPackages: PricingPackage[] = [
  {
    id: 'akad',
    name: 'Paket Akad',
    price: 150000,
    originalPrice: 200000,
    description: 'Paket dasar untuk acara akad nikah',
    features: [
      'Akses semua template desain',
      'Nama tamu personal',
      'Lokasi Google Maps',
      'Countdown hari H',
      '1x revisi desain',
      'Aktif 30 hari',
    ],
    revisions: 1,
    validityDays: 30,
  },
  {
    id: 'resepsi',
    name: 'Paket Resepsi',
    price: 250000,
    originalPrice: 300000,
    description: 'Paket lengkap untuk acara resepsi',
    features: [
      'Semua fitur Paket Akad',
      'RSVP otomatis',
      'Galeri foto (10 foto)',
      'Musik latar',
      '2x revisi desain',
      'Aktif 60 hari',
    ],
    revisions: 2,
    validityDays: 60,
    isPopular: true,
  },
  {
    id: 'lengkap',
    name: 'Paket Lengkap',
    price: 350000,
    originalPrice: 450000,
    description: 'Paket premium dengan semua fitur',
    features: [
      'Semua fitur Paket Resepsi',
      'Galeri foto & video unlimited',
      'Ayat Al-Quran & doa',
      'Live streaming (opsional)',
      'Revisi unlimited',
      'Aktif sampai hari H + 30 hari',
      'Support prioritas',
    ],
    revisions: -1, // unlimited
    validityDays: -1, // custom
    isBestSeller: true,
  },
]
