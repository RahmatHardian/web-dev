import type { Design } from '../types/design'

export const designs: Design[] = [
  // ============================================
  // ELEGANT DESIGNS (Default Layout)
  // Classic, timeless, and sophisticated
  // ============================================
  {
    id: 'elegant-1',
    title: 'Golden Elegance',
    category: 'elegant',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
    previewUrl: '/preview/elegant-1',
    tags: ['luxury', 'gold', 'classic'],
    colors: ['#d4af37', '#ffffff', '#f5f5f5'],
  },
  {
    id: 'elegant-2',
    title: 'Rose Garden',
    category: 'elegant',
    thumbnail: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=600&fit=crop',
    previewUrl: '/preview/elegant-2',
    tags: ['romantic', 'pink', 'floral', 'rose'],
    colors: ['#be185d', '#f9a8d4', '#fdf2f8'],
  },
  {
    id: 'elegant-3',
    title: 'Midnight Navy',
    category: 'elegant',
    thumbnail: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=600&fit=crop',
    previewUrl: '/preview/elegant-3',
    tags: ['sophisticated', 'navy', 'silver', 'formal'],
    colors: ['#1e3a5f', '#94a3b8', '#f8fafc'],
  },

  // Minimal Designs (placeholder - no preview yet)
  {
    id: 'minimal-1',
    title: 'Pure Minimal',
    category: 'minimal',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop',
    tags: ['simple', 'clean', 'modern'],
    colors: ['#ffffff', '#333333', '#f0f0f0'],
  },
  {
    id: 'minimal-2',
    title: 'Modern Lines',
    category: 'minimal',
    thumbnail: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=400&h=600&fit=crop',
    tags: ['minimalist', 'geometric', 'contemporary'],
    colors: ['#000000', '#ffffff', '#e5e5e5'],
  },

  // Islami Designs (placeholder - no preview yet)
  {
    id: 'islami-1',
    title: 'Barakah',
    category: 'islami',
    thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=600&fit=crop',
    tags: ['islamic', 'traditional', 'ornamental'],
    colors: ['#2d5f2e', '#d4af37', '#ffffff'],
  },
  {
    id: 'islami-2',
    title: 'Rahmat',
    category: 'islami',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=600&fit=crop',
    tags: ['hijau', 'calligraphy', 'elegant'],
    colors: ['#1a472a', '#c9a961', '#f8f8f8'],
  },

  // Adat Designs (placeholder - no preview yet)
  {
    id: 'adat-1',
    title: 'Nusantara',
    category: 'adat',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop',
    tags: ['traditional', 'cultural', 'batik'],
    colors: ['#8b4513', '#d4a574', '#f5e6d3'],
  },
  {
    id: 'adat-2',
    title: 'Pusaka',
    category: 'adat',
    thumbnail: 'https://images.unsplash.com/photo-1600531819787-5ee18e95b75f?w=400&h=600&fit=crop',
    tags: ['heritage', 'ornate', 'ethnic'],
    colors: ['#a0522d', '#daa520', '#fff8dc'],
  },

  // ============================================
  // MODERN DESIGNS (TealWave Layout)
  // Features: Cover overlay + Auto-slide
  // ============================================
  {
    id: 'modern-1',
    title: 'Teal Wave',
    category: 'modern',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=600&fit=crop',
    previewUrl: '/preview/modern-1',
    tags: ['modern', 'teal', 'wave', 'turquoise'],
    colors: ['#0d9488', '#5eead4', '#f0fdfa'],
  },
  {
    id: 'modern-2',
    title: 'Sunset Coral',
    category: 'modern',
    thumbnail: 'https://images.unsplash.com/photo-1495602787267-96ab76127c2a?w=400&h=600&fit=crop',
    previewUrl: '/preview/modern-2',
    tags: ['warm', 'coral', 'sunset', 'orange'],
    colors: ['#ea580c', '#fdba74', '#fff7ed'],
  },
  {
    id: 'modern-3',
    title: 'Lavender Dreams',
    category: 'modern',
    thumbnail: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=400&h=600&fit=crop',
    previewUrl: '/preview/modern-3',
    tags: ['dreamy', 'lavender', 'purple', 'romantic'],
    colors: ['#7c3aed', '#c4b5fd', '#f5f3ff'],
  },
]

export const designCategories = [
  { id: 'all', label: 'Semua', count: designs.length },
  {
    id: 'elegant',
    label: 'Elegant',
    count: designs.filter((d) => d.category === 'elegant').length,
  },
  {
    id: 'minimal',
    label: 'Minimal',
    count: designs.filter((d) => d.category === 'minimal').length,
  },
  {
    id: 'islami',
    label: 'Islami',
    count: designs.filter((d) => d.category === 'islami').length,
  },
  {
    id: 'adat',
    label: 'Adat',
    count: designs.filter((d) => d.category === 'adat').length,
  },
  {
    id: 'modern',
    label: 'Modern',
    count: designs.filter((d) => d.category === 'modern').length,
  },
]
