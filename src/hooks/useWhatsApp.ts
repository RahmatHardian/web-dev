import { useCallback } from 'react'
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp'

/**
 * Hook for WhatsApp integration
 */
export const useWhatsApp = () => {
  const sendConsultationMessage = useCallback(() => {
    openWhatsApp(WHATSAPP_MESSAGES.consultation)
  }, [])

  const sendOrderMessage = useCallback((packageName: string) => {
    openWhatsApp(WHATSAPP_MESSAGES.order(packageName))
  }, [])

  const sendCustomMessage = useCallback(
    (name: string, weddingDate: string, packageName?: string) => {
      openWhatsApp(WHATSAPP_MESSAGES.custom(name, weddingDate, packageName))
    },
    []
  )

  const sendDesignInquiry = useCallback((designId: string) => {
    openWhatsApp(WHATSAPP_MESSAGES.inquiry(designId))
  }, [])

  const sendViewAllMessage = useCallback(() => {
    openWhatsApp(WHATSAPP_MESSAGES.viewAll)
  }, [])

  return {
    sendConsultationMessage,
    sendOrderMessage,
    sendCustomMessage,
    sendDesignInquiry,
    sendViewAllMessage,
  }
}
