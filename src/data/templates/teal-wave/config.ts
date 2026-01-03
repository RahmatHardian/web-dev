import type { TemplateConfig } from '../../../types/template'

/**
 * Template Configuration for Teal Wave
 *
 * ADMIN GUIDE - How to customize for each customer:
 *
 * 1. COUPLE INFO: Update groom/bride names, photos, parents, social media
 * 2. EVENTS: Update dates, times, venues, dresscode
 * 3. GALLERY: Replace photo URLs with customer's photos (Google Drive/OneDrive)
 * 4. BANK ACCOUNTS: Update with customer's bank details
 * 5. LOVE STORY: Update milestones with customer's story
 * 6. MUSIC: Upload MP3 to public/music/ folder
 *
 * TEMPLATE FEATURES:
 * - Click-to-open cover page (CoverOverlay)
 * - Auto-slide option for sections
 * - Teal/turquoise color scheme
 * - Wavy decorative elements
 * - Modern elegant style
 */

export const tealWaveConfig: TemplateConfig = {
  meta: {
    templateId: 'modern-1',
    templateName: 'Teal Wave',
    weddingSlug: 'budi-ani',
    language: 'id',
  },

  theme: {
    preset: 'modern',
    colors: {
      primary: '#0d9488', // Teal-600
      secondary: '#5eead4', // Teal-300
      background: '#f0fdfa', // Teal-50
      text: '#134e4a', // Teal-900
      textMuted: '#5f9ea0', // Cadet blue
      accent: '#14b8a6', // Teal-500
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Lato',
      script: 'Tangerine',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop',
    ornamentStyle: 'floral',
  },

  couple: {
    groom: {
      fullName: 'Budi Santoso',
      nickname: 'Budi',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Sugiarto Santoso',
      motherName: 'Ibu Maria Dewi',
      birthOrder: 'Putra kedua dari',
      socialMedia: {
        instagram: '@budisantoso',
      },
    },
    bride: {
      fullName: 'Ani Permata Sari',
      nickname: 'Ani',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Hendra Permata',
      motherName: 'Ibu Sari Wulandari',
      birthOrder: 'Putri pertama dari',
      socialMedia: {
        instagram: '@anipermata',
      },
    },
    hashtag: '#BudiAniForever',
    quote: 'Cinta sejati adalah ketika dua jiwa yang berbeda menyatu dalam satu tujuan yang sama.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-08-20',
      startTime: '09:00',
      endTime: '11:00',
      venue: {
        name: 'Masjid Agung Al-Azhar',
        address: 'Jl. Sisingamangaraja, Kebayoran Baru',
        city: 'Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.8!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMasjid%20Al-Azhar!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.24, lng: 106.8 },
      },
      dresscode: 'Putih / Pastel',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-08-20',
      startTime: '12:00',
      endTime: '15:00',
      venue: {
        name: 'The Ritz-Carlton Pacific Place',
        address: 'Jl. Jend. Sudirman Kav. 52-53',
        city: 'Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.81!3d-6.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUml0ei1DYXJsdG9u!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.22, lng: 106.81 },
      },
      dresscode: 'Formal / Cocktail',
      notes: 'Valet parking tersedia',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Momen Bahagia',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=800&fit=crop',
        caption: 'Pre-Wedding',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=800&fit=crop',
        caption: 'Engagement',
        order: 2,
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop',
        order: 3,
      },
      {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=800&fit=crop',
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
    subtitle: 'Kami sangat mengharapkan kehadiran Anda',
    deadline: '2025-08-15',
    formspreeId: 'demo',
    showGuestCount: true,
    maxGuests: 3,
  },

  giftRegistry: {
    enabled: true,
    title: 'Hadiah Pernikahan',
    message: 'Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberikan hadiah, kami menyediakan pilihan berikut.',
    bankAccounts: [
      {
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '8765432100',
        accountHolder: 'Budi Santoso',
      },
      {
        bankName: 'Bank Mandiri',
        accountNumber: '1230098765',
        accountHolder: 'Ani Permata Sari',
      },
    ],
    giftAddress: {
      recipientName: 'Budi & Ani',
      address: 'Jl. Kebahagiaan No. 88, Kemang, Jakarta Selatan 12730',
      phone: '081298765432',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Perjalanan Cinta Kami',
    milestones: [
      {
        id: '1',
        date: '2019-06-10',
        title: 'Awal Pertemuan',
        description: 'Kami bertemu pertama kali di sebuah konferensi teknologi. Ani sebagai pembicara dan Budi sebagai peserta yang penasaran.',
        image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2020-02-14',
        title: 'Menjadi Sepasang Kekasih',
        description: 'Di hari Valentine, Budi memberanikan diri untuk menyatakan perasaannya. Dan jawabannya adalah... Ya!',
      },
      {
        id: '3',
        date: '2022-12-24',
        title: 'Bertunangan',
        description: 'Di malam Natal yang penuh kehangatan, Budi melamar Ani dengan cincin berlian di depan keluarga besar.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
      },
      {
        id: '4',
        date: '2025-08-20',
        title: 'Hari Bahagia',
        description: 'Akhirnya tiba saatnya kami mengikat janji suci untuk selamanya bersama.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      },
    ],
    layout: 'timeline',
  },

  guestBook: {
    enabled: true,
    title: 'Ucapan & Doa',
    subtitle: 'Tulis ucapan dan doa terbaik Anda untuk kami',
    formspreeId: 'demo',
    showExistingMessages: true,
    moderateMessages: false,
  },

  music: {
    enabled: true,
    autoplay: true,
    url: '/music/wedding-song.mp3',
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
    // Template #2 special features
    showCoverOverlay: true,
    enableAutoSlide: true,
    autoSlideInterval: 8000, // 8 seconds per section
  },
}

export default tealWaveConfig
