import { Design } from '@types/design'

export const designs: Design[] = [
  // Elegant Designs
  {
    id: 'elegant-1',
    title: 'Golden Elegance',
    category: 'elegant',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
    tags: ['luxury', 'gold', 'classic'],
    colors: ['#d4af37', '#ffffff', '#f5f5f5'],
  },
  {
    id: 'elegant-2',
    title: 'Royal Bloom',
    category: 'elegant',
    thumbnail: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop',
    tags: ['floral', 'elegant', 'romantic'],
    colors: ['#8b7355', '#e8d5c4', '#ffffff'],
  },

  // Minimal Designs
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

  // Islami Designs
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

  // Adat Designs
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

  // Modern Designs
  {
    id: 'modern-1',
    title: 'Contemporary Love',
    category: 'modern',
    thumbnail: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=600&fit=crop',
    tags: ['modern', 'trendy', 'bold'],
    colors: ['#ff6b6b', '#4ecdc4', '#ffffff'],
  },
  {
    id: 'modern-2',
    title: 'Urban Chic',
    category: 'modern',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=600&fit=crop',
    tags: ['stylish', 'urban', 'sophisticated'],
    colors: ['#2c3e50', '#e74c3c', '#ecf0f1'],
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
