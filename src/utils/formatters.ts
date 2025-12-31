/**
 * Format number as Indonesian Rupiah currency
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format number with thousand separators
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('id-ID').format(num)
}

/**
 * Format date to Indonesian locale
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj)
}

/**
 * Format phone number to Indonesian format
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')

  // Format as +62 XXX-XXXX-XXXX
  if (cleaned.length >= 10) {
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{4})(\d+)$/)
    if (match) {
      return `+${match[1]} ${match[2]}-${match[3]}-${match[4]}`
    }
  }

  return phone
}

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (
  originalPrice: number,
  currentPrice: number
): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
