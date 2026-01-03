import type { TemplateConfig } from '../../../types/template'

/**
 * Template: Sunset Coral (teal-wave style-1)
 * Style: Warm coral/orange sunset tones with modern vibes
 * Layout: TealWave (with cover overlay and auto-slide)
 */

export const sunsetCoralConfig: TemplateConfig = {
  meta: {
    templateId: 'modern-2',
    templateName: 'Sunset Coral',
    weddingSlug: 'demo-sunset-coral',
    language: 'id',
  },

  theme: {
    preset: 'modern',
    colors: {
      primary: '#ea580c', // Orange-600
      secondary: '#fdba74', // Orange-300
      background: '#fff7ed', // Orange-50
      text: '#7c2d12', // Orange-900
      textMuted: '#c2410c', // Orange-700
      accent: '#f97316', // Orange-500
    },
    fonts: {
      heading: 'Poppins',
      body: 'Open Sans',
      script: 'Dancing Script',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=1920&h=1080&fit=crop',
    ornamentStyle: 'floral',
  },

  couple: {
    groom: {
      fullName: 'Dimas Prasetyo',
      nickname: 'Dimas',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Bambang Prasetyo',
      motherName: 'Ibu Yuni Astuti',
      birthOrder: 'Putra tunggal dari',
      socialMedia: {
        instagram: '@dimasprasetyo',
      },
    },
    bride: {
      fullName: 'Maya Anggraini',
      nickname: 'Maya',
      photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Sutrisno Anggraini',
      motherName: 'Ibu Wati Rahayu',
      birthOrder: 'Putri kedua dari',
      socialMedia: {
        instagram: '@mayaanggraini',
      },
    },
    hashtag: '#DimasMaya2025',
    quote: 'Seperti matahari terbenam yang mewarnai langit, cinta kita mewarnai kehidupan dengan keindahan yang tak terlupakan.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-10-18',
      startTime: '08:00',
      endTime: '10:00',
      venue: {
        name: 'Masjid Raya Pondok Indah',
        address: 'Jl. Sultan Iskandar Muda',
        city: 'Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6!2d106.78!3d-6.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFzamlkIFBvbmRvayBJbmRhaA!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.27, lng: 106.78 },
      },
      dresscode: 'Putih / Coral',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-10-18',
      startTime: '17:00',
      endTime: '20:00',
      venue: {
        name: 'Plataran Menteng',
        address: 'Jl. HOS Cokroaminoto No.42',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.83!3d-6.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGxhdGFyYW4gTWVudGVuZw!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.19, lng: 106.83 },
      },
      dresscode: 'Sunset Theme / Orange Coral',
      notes: 'Sunset reception di outdoor garden',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Galeri Foto',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=800&h=800&fit=crop',
        caption: 'Sunset Pre-Wedding',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=800&fit=crop',
        caption: 'Engagement',
        order: 2,
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop',
        order: 3,
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop',
        order: 4,
      },
      {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=800&fit=crop',
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
    deadline: '2025-10-11',
    formspreeId: 'demo',
    showGuestCount: true,
    maxGuests: 4,
  },

  giftRegistry: {
    enabled: true,
    title: 'Hadiah Digital',
    message: 'Kehadiran Anda adalah hadiah terindah. Namun jika ingin memberikan hadiah, kami menyediakan opsi berikut.',
    bankAccounts: [
      {
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '4455667788',
        accountHolder: 'Dimas Prasetyo',
      },
      {
        bankName: 'Bank CIMB Niaga',
        accountNumber: '8877665544',
        accountHolder: 'Maya Anggraini',
      },
    ],
    giftAddress: {
      recipientName: 'Dimas & Maya',
      address: 'Jl. Sunset Boulevard No. 25, Pondok Indah, Jakarta Selatan 12310',
      phone: '081345678901',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Perjalanan Cinta',
    milestones: [
      {
        id: '1',
        date: '2020-01-15',
        title: 'Pertemuan Pertama',
        description: 'Bertemu di sebuah cafe saat senja, ditemani secangkir kopi dan langit yang kemerahan.',
        image: 'https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2021-06-21',
        title: 'Jadian',
        description: 'Di hari terpanjang dalam setahun, kami memutuskan untuk memulai kisah cinta bersama.',
      },
      {
        id: '3',
        date: '2024-10-18',
        title: 'Lamaran',
        description: 'Saat matahari terbenam di pantai, Dimas berlutut dengan cincin berkilau.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
      },
    ],
    layout: 'timeline',
  },

  guestBook: {
    enabled: true,
    title: 'Ucapan & Doa',
    subtitle: 'Berikan ucapan terbaik untuk kami',
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
    // TealWave layout features
    showCoverOverlay: true,
    enableAutoSlide: true,
    autoSlideInterval: 7000,
  },
}

export default sunsetCoralConfig
