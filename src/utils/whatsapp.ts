/**
 * Generate WhatsApp URL with pre-filled message
 * @param phoneNumber - WhatsApp number in international format (e.g., 6281234567890)
 * @param message - Pre-filled message text
 * @returns WhatsApp URL
 */
export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

/**
 * Get WhatsApp phone number from environment variable
 */
export const getWhatsAppPhone = (): string => {
  return import.meta.env.VITE_WHATSAPP_PHONE || '6281234567890'
}

/**
 * WhatsApp message templates
 */
export const WHATSAPP_MESSAGES = {
  consultation: 'Halo akunikah.in! Saya ingin konsultasi untuk undangan digital pernikahan.',

  order: (packageName: string) =>
    `Halo akunikah.in! Saya tertarik untuk memesan ${packageName}. Mohon informasi lebih lanjut.`,

  custom: (name: string, weddingDate: string, packageName?: string) =>
    `Halo akunikah.in! Nama saya ${name}, saya ingin membuat undangan digital untuk pernikahan pada tanggal ${weddingDate}.${packageName ? ` Saya tertarik dengan ${packageName}.` : ''}`,

  inquiry: (designId: string) =>
    `Halo akunikah.in! Saya tertarik dengan desain ${designId}. Bisa tolong jelaskan lebih detail?`,

  viewAll: 'Halo akunikah.in! Saya ingin melihat semua koleksi desain undangan yang tersedia.',
}

/**
 * Open WhatsApp with message
 */
export const openWhatsApp = (message: string) => {
  const phone = getWhatsAppPhone()
  const url = generateWhatsAppLink(phone, message)
  window.open(url, '_blank')
}
