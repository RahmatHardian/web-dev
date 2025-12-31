export interface RSVPFormData {
  name: string
  email: string
  phone: string
  attendance: 'hadir' | 'tidak_hadir' | 'ragu'
  guestCount: number
  message?: string
  weddingDate?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  packageInterest?: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'
