import { LucideIcon } from 'lucide-react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: string // Lucide icon name
}

export interface TrustIndicator {
  id: string
  text: string
  icon: string
  value?: string
}
