import type { TemplateConfig } from '../../../types/template'

/**
 * Template Configuration for Golden Elegance
 *
 * ADMIN GUIDE - How to customize for each customer:
 *
 * 1. COUPLE INFO: Update groom/bride names, photos, parents, social media
 * 2. EVENTS: Update dates, times, venues, dresscode
 * 3. GALLERY: Replace photo URLs with customer's photos (Google Drive/OneDrive)
 * 4. BANK ACCOUNTS: Update with customer's bank details
 * 5. LOVE STORY: Update milestones with customer's story
 * 6. MUSIC: Upload MP3 to Google Drive/OneDrive, convert link (see below)
 *
 * MUSIC URL CONVERSION:
 * - Google Drive: https://drive.google.com/file/d/FILE_ID/view
 *   Convert to: https://drive.google.com/uc?export=download&id=FILE_ID
 *
 * - OneDrive: Get embed link and use download format
 *
 * PHOTO URL CONVERSION (same as music):
 * - Google Drive: https://drive.google.com/uc?export=view&id=FILE_ID
 */

export const demoElegantConfig: TemplateConfig = {
  meta: {
    templateId: 'elegant-1',
    templateName: 'Golden Elegance',
    weddingSlug: 'ahmad-fatimah',
    language: 'id',
  },

  theme: {
    preset: 'elegant',
    colors: {
      primary: '#d4af37',
      secondary: '#8b7355',
      background: '#fefefe',
      text: '#1a1a1a',
      textMuted: '#666666',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Outfit',
      script: 'Great Vibes',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop',
    ornamentStyle: 'floral',
  },

  couple: {
    groom: {
      fullName: 'Ahmad Rizki Pratama',
      nickname: 'Ahmad',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Hasan Pratama',
      motherName: 'Ibu Siti Aminah',
      birthOrder: 'Putra pertama dari',
      socialMedia: {
        instagram: '@ahmadrizki',
      },
    },
    bride: {
      fullName: 'Fatimah Azzahra',
      nickname: 'Fatimah',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Abdullah Rahman',
      motherName: 'Ibu Khadijah',
      birthOrder: 'Putri kedua dari',
      socialMedia: {
        instagram: '@fatimahazzahra',
      },
    },
    hashtag: '#AhmadFatimah2025',
    quote: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-06-15',
      startTime: '08:00',
      endTime: '10:00',
      venue: {
        name: 'Masjid Istiqlal',
        address: 'Jl. Taman Wijaya Kusuma, Pasar Baru',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664628772186!2d106.83097741536978!3d-6.170135962300955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMasjid%20Istiqlal!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.1701, lng: 106.8317 },
      },
      dresscode: 'Putih / Cream',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-06-15',
      startTime: '11:00',
      endTime: '14:00',
      venue: {
        name: 'Gedung Balai Kartini',
        address: 'Jl. Gatot Subroto Kav. 37',
        city: 'Jakarta Selatan',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.82!3d-6.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBalai%20Kartini!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.23, lng: 106.82 },
      },
      dresscode: 'Formal / Batik',
      notes: 'Parkir tersedia di basement gedung',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Galeri Foto',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop',
        caption: 'Prewedding Session',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop',
        caption: 'Engagement Day',
        order: 2,
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop',
        order: 3,
      },
      {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&fit=crop',
        order: 4,
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&fit=crop',
        order: 5,
      },
      {
        url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=800&fit=crop',
        order: 6,
      },
    ],
    layout: 'grid',
  },

  rsvp: {
    enabled: true,
    title: 'Konfirmasi Kehadiran',
    subtitle: 'Mohon konfirmasi kehadiran Anda',
    deadline: '2025-06-10',
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
        accountNumber: '1234567890',
        accountHolder: 'Ahmad Rizki Pratama',
      },
      {
        bankName: 'Bank Mandiri',
        accountNumber: '0987654321',
        accountHolder: 'Fatimah Azzahra',
      },
    ],
    giftAddress: {
      recipientName: 'Ahmad & Fatimah',
      address: 'Jl. Kebahagiaan No. 1, Menteng, Jakarta Pusat 10310',
      phone: '081234567890',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Kisah Cinta Kami',
    milestones: [
      {
        id: '1',
        date: '2020-03-15',
        title: 'Pertama Bertemu',
        description: 'Kami pertama kali bertemu di acara seminar kampus. Saat itu, Ahmad sedang menjadi pembicara dan Fatimah adalah salah satu peserta yang aktif bertanya.',
        image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2021-02-14',
        title: 'Mulai Berpacaran',
        description: 'Setelah setahun berteman dan sering bertukar pikiran, kami memutuskan untuk menjalin hubungan yang lebih serius.',
      },
      {
        id: '3',
        date: '2023-08-17',
        title: 'Bertemu Keluarga',
        description: 'Ahmad memberanikan diri untuk berkunjung ke rumah Fatimah dan bertemu dengan keluarga besarnya.',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
      },
      {
        id: '4',
        date: '2024-12-25',
        title: 'Lamaran',
        description: 'Ahmad melamar Fatimah di hadapan keluarga besar. Alhamdulillah, lamaran diterima dengan penuh sukacita.',
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
  },
}

export default demoElegantConfig
