import type { TemplateConfig } from '../../../types/template'

/**
 * Template: Lavender Dreams (teal-wave style-2)
 * Style: Soft purple/lavender with dreamy romantic feel
 * Layout: TealWave (with cover overlay and auto-slide)
 */

export const lavenderDreamsConfig: TemplateConfig = {
  meta: {
    templateId: 'modern-3',
    templateName: 'Lavender Dreams',
    weddingSlug: 'demo-lavender-dreams',
    language: 'id',
  },

  theme: {
    preset: 'modern',
    colors: {
      primary: '#7c3aed', // Violet-600
      secondary: '#c4b5fd', // Violet-300
      background: '#f5f3ff', // Violet-50
      text: '#4c1d95', // Violet-900
      textMuted: '#6d28d9', // Violet-700
      accent: '#a78bfa', // Violet-400
    },
    fonts: {
      heading: 'Marcellus',
      body: 'Quicksand',
      script: 'Alex Brush',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=1920&h=1080&fit=crop',
    ornamentStyle: 'floral',
  },

  couple: {
    groom: {
      fullName: 'Fajar Setiawan',
      nickname: 'Fajar',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Hendra Setiawan',
      motherName: 'Ibu Lina Kusuma',
      birthOrder: 'Putra pertama dari',
      socialMedia: {
        instagram: '@fajarsetiawan',
      },
    },
    bride: {
      fullName: 'Violet Amelia Putri',
      nickname: 'Violet',
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Andi Putri',
      motherName: 'Ibu Melati Sari',
      birthOrder: 'Putri tunggal dari',
      socialMedia: {
        instagram: '@violetamelia',
      },
    },
    hashtag: '#FajarViolet2025',
    quote: 'Dalam mimpi indah berwarna lavender, kita menemukan cinta yang abadi.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-11-22',
      startTime: '09:00',
      endTime: '11:00',
      venue: {
        name: 'Masjid Agung At-Tin',
        address: 'Jl. Pintu I TMII',
        city: 'Jakarta Timur',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8!2d106.89!3d-6.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFzamlkIEF0LVRpbg!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.30, lng: 106.89 },
      },
      dresscode: 'Putih / Lilac',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-11-22',
      startTime: '12:00',
      endTime: '15:00',
      venue: {
        name: 'Ayana Midplaza Jakarta',
        address: 'Jl. Jend. Sudirman Kav. 10-11',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.82!3d-6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXlhbmEgTWlkcGxhemE!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.21, lng: 106.82 },
      },
      dresscode: 'Lavender / Purple Theme',
      notes: 'Dreamy garden reception',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Galeri Foto',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=800&h=800&fit=crop',
        caption: 'Dreamy Pre-Wedding',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop',
        caption: 'Engagement',
        order: 2,
      },
      {
        url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=800&fit=crop',
        order: 3,
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop',
        order: 4,
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&fit=crop',
        order: 5,
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop',
        order: 6,
      },
    ],
    layout: 'grid',
  },

  rsvp: {
    enabled: true,
    title: 'Konfirmasi Kehadiran',
    subtitle: 'Mohon konfirmasi kehadiran Anda',
    deadline: '2025-11-15',
    formspreeId: 'demo',
    showGuestCount: true,
    maxGuests: 3,
  },

  giftRegistry: {
    enabled: true,
    title: 'Hadiah Digital',
    message: 'Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.',
    bankAccounts: [
      {
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '1122445566',
        accountHolder: 'Fajar Setiawan',
      },
      {
        bankName: 'Bank Jago',
        accountNumber: '6655442211',
        accountHolder: 'Violet Amelia Putri',
      },
    ],
    giftAddress: {
      recipientName: 'Fajar & Violet',
      address: 'Jl. Lavender No. 77, Kemang, Jakarta Selatan 12730',
      phone: '081456789012',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Kisah Cinta Kami',
    milestones: [
      {
        id: '1',
        date: '2019-03-21',
        title: 'Pertemuan Pertama',
        description: 'Bertemu di taman bunga lavender saat festival musim semi.',
        image: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2020-07-07',
        title: 'Jadian',
        description: 'Di tanggal cantik 07-07, kami memulai hubungan serius.',
      },
      {
        id: '3',
        date: '2024-11-11',
        title: 'Lamaran',
        description: 'Di tanggal indah 11-11, Fajar melamar Violet dengan cincin bermata amethyst.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
      },
    ],
    layout: 'timeline',
  },

  guestBook: {
    enabled: true,
    title: 'Ucapan & Doa',
    subtitle: 'Berikan ucapan dan doa terbaik',
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
    // TealWave layout features
    showCoverOverlay: true,
    enableAutoSlide: true,
    autoSlideInterval: 6000,
  },
}

export default lavenderDreamsConfig
