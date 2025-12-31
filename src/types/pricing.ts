export interface PricingPackage {
  id: string
  name: string
  price: number
  originalPrice?: number
  features: string[]
  revisions: number // -1 for unlimited
  validityDays: number // -1 for custom (until wedding day)
  isBestSeller?: boolean
  isPopular?: boolean
  description?: string
}

export interface PricingComparison {
  feature: string
  akad: boolean | string
  resepsi: boolean | string
  lengkap: boolean | string
}
