// ============================================
// Core Template Configuration
// ============================================

export interface TemplateConfig {
  meta: TemplateMeta
  theme: TemplateTheme
  couple: CoupleInfo
  events: WeddingEvent[]
  gallery: GalleryConfig
  rsvp: RSVPConfig
  giftRegistry: GiftRegistryConfig
  loveStory: LoveStoryConfig
  guestBook: GuestBookConfig
  music: MusicConfig
  features: FeatureToggles
}

// ============================================
// Meta Information
// ============================================

export interface TemplateMeta {
  templateId: string
  templateName: string
  weddingSlug: string
  language: 'id' | 'en'
  openGraphImage?: string
}

// ============================================
// Theme Configuration
// ============================================

export type ThemePreset = 'elegant' | 'minimal' | 'islami' | 'adat' | 'modern' | 'custom'
export type OrnamentStyle = 'floral' | 'geometric' | 'islamic' | 'batik' | 'minimal' | 'none'

export interface TemplateTheme {
  preset: ThemePreset
  colors: ThemeColors
  fonts: ThemeFonts
  backgroundImage?: string
  ornamentStyle?: OrnamentStyle
}

export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  text: string
  textMuted: string
  accent?: string
}

export interface ThemeFonts {
  heading: string
  body: string
  script?: string
}

// ============================================
// Couple Information
// ============================================

export interface CoupleInfo {
  groom: PersonInfo
  bride: PersonInfo
  hashtag?: string
  quote?: string
}

export interface PersonInfo {
  fullName: string
  nickname: string
  photo: string
  fatherName: string
  motherName: string
  birthOrder?: string
  socialMedia?: {
    instagram?: string
    twitter?: string
  }
}

// ============================================
// Events
// ============================================

export type EventType = 'akad' | 'resepsi' | 'pengajian' | 'unduh_mantu' | 'custom'

export interface WeddingEvent {
  id: string
  type: EventType
  title: string
  date: string
  startTime: string
  endTime?: string
  venue: EventVenue
  dresscode?: string
  notes?: string
}

export interface EventVenue {
  name: string
  address: string
  city: string
  mapUrl: string
  mapCoordinates?: {
    lat: number
    lng: number
  }
}

// ============================================
// Gallery
// ============================================

export type GalleryLayout = 'grid' | 'masonry' | 'carousel'

export interface GalleryConfig {
  enabled: boolean
  title?: string
  photos: GalleryPhoto[]
  layout: GalleryLayout
}

export interface GalleryPhoto {
  url: string
  thumbnail?: string
  caption?: string
  order: number
}

// ============================================
// RSVP
// ============================================

export interface RSVPConfig {
  enabled: boolean
  title?: string
  subtitle?: string
  deadline?: string
  formspreeId?: string
  webhookUrl?: string
  showGuestCount: boolean
  maxGuests: number
  customFields?: CustomField[]
}

export interface CustomField {
  id: string
  type: 'text' | 'select' | 'checkbox'
  label: string
  required: boolean
  options?: string[]
}

// ============================================
// Gift Registry
// ============================================

export interface GiftRegistryConfig {
  enabled: boolean
  title?: string
  subtitle?: string
  message?: string
  bankAccounts: BankAccount[]
  giftAddress?: GiftAddress
  digitalWallets?: DigitalWallet[]
}

export interface BankAccount {
  bankName: string
  accountNumber: string
  accountHolder: string
  bankLogo?: string
}

export interface GiftAddress {
  recipientName: string
  address: string
  phone: string
}

export type WalletType = 'gopay' | 'ovo' | 'dana' | 'shopeepay' | 'other'

export interface DigitalWallet {
  type: WalletType
  number: string
  name: string
}

// ============================================
// Love Story
// ============================================

export type LoveStoryLayout = 'timeline' | 'cards' | 'scroll'

export interface LoveStoryConfig {
  enabled: boolean
  title?: string
  milestones: LoveMilestone[]
  layout: LoveStoryLayout
}

export interface LoveMilestone {
  id: string
  date: string
  title: string
  description: string
  image?: string
}

// ============================================
// Guest Book
// ============================================

export interface GuestBookConfig {
  enabled: boolean
  title?: string
  subtitle?: string
  formspreeId?: string
  showExistingMessages: boolean
  moderateMessages: boolean
}

// ============================================
// Music
// ============================================

export interface MusicConfig {
  enabled: boolean
  autoplay: boolean
  url: string
  title?: string
  artist?: string
}

// ============================================
// Feature Toggles
// ============================================

export interface FeatureToggles {
  showCountdown: boolean
  showCover: boolean
  showCouple: boolean
  showEvents: boolean
  showGallery: boolean
  showRsvp: boolean
  showGiftRegistry: boolean
  showLoveStory: boolean
  showGuestBook: boolean
  showMap: boolean
  showMusic: boolean
  enableAnimations: boolean
  enableParallax: boolean
}

// ============================================
// Guest Context (for personalized invites)
// ============================================

export type GuestGreeting = 'Bapak' | 'Ibu' | 'Saudara' | 'Keluarga'

export interface GuestInfo {
  name: string
  greeting?: GuestGreeting
}

// ============================================
// Computed Theme (resolved for runtime)
// ============================================

export interface ComputedTheme {
  cssVariables: Record<string, string>
  className: string
  fonts: ThemeFonts
}
