import type { TemplateConfig } from '../../../types/template'

/**
 * Template: Rose Garden (demo-elegant style-1)
 * Style: Romantic pink/rose tones with floral elegance
 * Layout: Default (same as Golden Elegance)
 */

export const roseGardenConfig: TemplateConfig = {
  meta: {
    templateId: 'elegant-2',
    templateName: 'Rose Garden',
    weddingSlug: 'demo-rose-garden',
    language: 'id',
  },

  theme: {
    preset: 'elegant',
    colors: {
      primary: '#be185d', // Rose-700
      secondary: '#f9a8d4', // Pink-300
      background: '#fdf2f8', // Pink-50
      text: '#831843', // Pink-900
      textMuted: '#9d174d', // Pink-800
      accent: '#ec4899', // Pink-500
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Lato',
      script: 'Great Vibes',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1920&h=1080&fit=crop',
    ornamentStyle: 'floral',
  },

  couple: {
    groom: {
      fullName: 'Reza Mahendra',
      nickname: 'Reza',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Surya Mahendra',
      motherName: 'Ibu Dewi Lestari',
      birthOrder: 'Putra pertama dari',
      socialMedia: {
        instagram: '@rezamahendra',
      },
    },
    bride: {
      fullName: 'Bunga Citra Lestari',
      nickname: 'Bunga',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Hadi Lestari',
      motherName: 'Ibu Ratna Sari',
      birthOrder: 'Putri kedua dari',
      socialMedia: {
        instagram: '@bungacitra',
      },
    },
    hashtag: '#RezaBunga2025',
    quote: 'Cinta adalah bunga yang tumbuh di taman hati, mekar indah ketika dipupuk dengan kasih dan kesetiaan.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-07-12',
      startTime: '08:00',
      endTime: '10:00',
      venue: {
        name: 'Masjid Agung Sunda Kelapa',
        address: 'Jl. Taman Sunda Kelapa No.20',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.84!3d-6.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFzamlkIFN1bmRhIEtlbGFwYQ!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.17, lng: 106.84 },
      },
      dresscode: 'Putih / Dusty Pink',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-07-12',
      startTime: '11:00',
      endTime: '14:00',
      venue: {
        name: 'The Dharmawangsa Jakarta',
        address: 'Jl. Brawijaya Raya No.26',
        city: 'Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.79!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRGhhcm1hd2FuZ3Nh!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.25, lng: 106.79 },
      },
      dresscode: 'Formal / Dusty Pink',
      notes: 'Valet parking tersedia',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Galeri Foto',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&h=800&fit=crop',
        caption: 'Pre-Wedding',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=800&fit=crop',
        caption: 'Engagement',
        order: 2,
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&fit=crop',
        order: 3,
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop',
        order: 4,
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop',
        order: 5,
      },
      {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&fit=crop',
        order: 6,
      },
    ],
    layout: 'grid',
  },

  rsvp: {
    enabled: true,
    title: 'Konfirmasi Kehadiran',
    subtitle: 'Mohon konfirmasi kehadiran Anda',
    deadline: '2025-07-05',
    formspreeId: 'demo',
    showGuestCount: true,
    maxGuests: 5,
  },

  giftRegistry: {
    enabled: true,
    title: 'Amplop Digital',
    message: 'Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.',
    bankAccounts: [
      {
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '1122334455',
        accountHolder: 'Reza Mahendra',
      },
      {
        bankName: 'Bank Mandiri',
        accountNumber: '5544332211',
        accountHolder: 'Bunga Citra Lestari',
      },
    ],
    giftAddress: {
      recipientName: 'Reza & Bunga',
      address: 'Jl. Bunga Mawar No. 10, Kemang, Jakarta Selatan 12730',
      phone: '081234567890',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Kisah Cinta Kami',
    milestones: [
      {
        id: '1',
        date: '2019-09-01',
        title: 'Pertama Bertemu',
        description: 'Pertemuan tak terduga di taman kota, saat Reza membantu Bunga yang terjatuh dari sepeda.',
        image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2020-02-14',
        title: 'Mulai Berpacaran',
        description: 'Di hari Valentine, dengan sebuket bunga mawar, Reza menyatakan cintanya.',
      },
      {
        id: '3',
        date: '2023-12-25',
        title: 'Lamaran',
        description: 'Di malam Natal yang romantis, Reza berlutut dengan cincin berlian.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
      },
    ],
    layout: 'timeline',
  },

  guestBook: {
    enabled: true,
    title: 'Ucapan & Doa',
    subtitle: 'Berikan ucapan dan doa terbaik untuk kami',
    formspreeId: 'demo',
    showExistingMessages: true,
    moderateMessages: false,
  },

  music: {
    enabled: true,
    autoplay: true,
    url: '/music/I Like You So Much, You\'ll Know It - A Love So Beautiful OST -Wang Junqi [English Cover].mp3',
    title: 'I Like You So Much, You\'ll Know It',
    artist: 'Wang Junqi',
  },

  features: {
    showCountdown: true,
    showCover: true,
    showCouple: true,
    showEvents: true,
    showGallery: true,
    showRsvp: true,
    showGiftRegistry: true,
    showLoveStory: true,
    showGuestBook: true,
    showMap: true,
    showMusic: true,
    enableAnimations: true,
    enableParallax: true,
  },
}

export default roseGardenConfig
