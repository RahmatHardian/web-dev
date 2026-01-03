import type { TemplateConfig } from '../../../types/template'

/**
 * Template: Midnight Navy (demo-elegant style-2)
 * Style: Sophisticated dark navy with silver/white accents
 * Layout: Default (same as Golden Elegance)
 */

export const midnightNavyConfig: TemplateConfig = {
  meta: {
    templateId: 'elegant-3',
    templateName: 'Midnight Navy',
    weddingSlug: 'demo-midnight-navy',
    language: 'id',
  },

  theme: {
    preset: 'elegant',
    colors: {
      primary: '#1e3a5f', // Navy-800
      secondary: '#94a3b8', // Slate-400
      background: '#f8fafc', // Slate-50
      text: '#0f172a', // Slate-900
      textMuted: '#475569', // Slate-600
      accent: '#3b82f6', // Blue-500
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Montserrat',
      script: 'Tangerine',
    },
    backgroundImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=1080&fit=crop',
    ornamentStyle: 'geometric',
  },

  couple: {
    groom: {
      fullName: 'Aditya Nugraha',
      nickname: 'Aditya',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Teguh Nugraha',
      motherName: 'Ibu Sri Handayani',
      birthOrder: 'Putra kedua dari',
      socialMedia: {
        instagram: '@aditya.nugraha',
      },
    },
    bride: {
      fullName: 'Nadira Putri Wijaya',
      nickname: 'Nadira',
      photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face',
      fatherName: 'Bapak Eko Wijaya',
      motherName: 'Ibu Sinta Dewi',
      birthOrder: 'Putri pertama dari',
      socialMedia: {
        instagram: '@nadira.pw',
      },
    },
    hashtag: '#AdityaNadira2025',
    quote: 'Dalam keheningan malam yang indah, dua hati menyatu dalam janji cinta yang abadi.',
  },

  events: [
    {
      id: 'akad',
      type: 'akad',
      title: 'Akad Nikah',
      date: '2025-09-20',
      startTime: '09:00',
      endTime: '11:00',
      venue: {
        name: 'Masjid Cut Meutia',
        address: 'Jl. Cut Meutia No.1',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.83!3d-6.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFzamlkIEN1dCBNZXV0aWE!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.18, lng: 106.83 },
      },
      dresscode: 'Navy / Silver',
    },
    {
      id: 'resepsi',
      type: 'resepsi',
      title: 'Resepsi',
      date: '2025-09-20',
      startTime: '18:00',
      endTime: '21:00',
      venue: {
        name: 'Fairmont Jakarta',
        address: 'Jl. Asia Afrika No.8',
        city: 'Jakarta Pusat',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.82!3d-6.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRmFpcm1vbnQ!5e0!3m2!1sen!2sid!4v1234567890',
        mapCoordinates: { lat: -6.19, lng: 106.82 },
      },
      dresscode: 'Black Tie / Navy Formal',
      notes: 'Evening reception dengan dress code formal',
    },
  ],

  gallery: {
    enabled: true,
    title: 'Our Moments',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=800&fit=crop',
        caption: 'Pre-Wedding',
        order: 1,
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop',
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
        url: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=800&fit=crop',
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
    title: 'RSVP',
    subtitle: 'Kindly confirm your attendance',
    deadline: '2025-09-13',
    formspreeId: 'demo',
    showGuestCount: true,
    maxGuests: 4,
  },

  giftRegistry: {
    enabled: true,
    title: 'Wedding Gift',
    message: 'Your presence and blessings are the greatest gifts. However, if you wish to give, we have provided the following options.',
    bankAccounts: [
      {
        bankName: 'Bank Central Asia (BCA)',
        accountNumber: '9988776655',
        accountHolder: 'Aditya Nugraha',
      },
      {
        bankName: 'Bank BNI',
        accountNumber: '5566778899',
        accountHolder: 'Nadira Putri Wijaya',
      },
    ],
    giftAddress: {
      recipientName: 'Aditya & Nadira',
      address: 'Jl. Sudirman No. 88, Menteng, Jakarta Pusat 10310',
      phone: '081298765432',
    },
  },

  loveStory: {
    enabled: true,
    title: 'Our Love Story',
    milestones: [
      {
        id: '1',
        date: '2018-08-17',
        title: 'First Meeting',
        description: 'We first met at a corporate conference, where our eyes met across the room.',
        image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&h=300&fit=crop',
      },
      {
        id: '2',
        date: '2019-12-31',
        title: 'Started Dating',
        description: 'On New Year\'s Eve, under the starlit sky, we decided to start our journey together.',
      },
      {
        id: '3',
        date: '2024-09-20',
        title: 'The Proposal',
        description: 'A romantic dinner at a rooftop restaurant, where Aditya asked the big question.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
      },
    ],
    layout: 'timeline',
  },

  guestBook: {
    enabled: true,
    title: 'Wishes & Prayers',
    subtitle: 'Share your best wishes for us',
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

export default midnightNavyConfig
