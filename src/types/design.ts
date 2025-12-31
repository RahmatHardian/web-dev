export type DesignCategory = 'elegant' | 'minimal' | 'islami' | 'adat' | 'modern'

export interface Design {
  id: string
  title: string
  category: DesignCategory
  thumbnail: string
  previewUrl?: string
  tags?: string[]
  colors?: string[]
}

export interface DesignFilter {
  category: DesignCategory | 'all'
  searchTerm?: string
}
