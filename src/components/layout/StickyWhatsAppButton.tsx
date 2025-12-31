import { MessageCircle } from 'lucide-react'
import { WHATSAPP_MESSAGES } from '@utils/whatsapp'
import { WhatsAppLink } from '@components/features/WhatsAppLink'
import { useWindowSize } from '@hooks'

export const StickyWhatsAppButton = () => {
  const { isMobile } = useWindowSize()

  // Only show on mobile
  if (!isMobile) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppLink
        message={WHATSAPP_MESSAGES.consultation}
        buttonSize="lg"
        className="rounded-full shadow-lg hover:shadow-xl"
        showIcon={false}
      >
        <MessageCircle className="h-6 w-6" />
      </WhatsAppLink>
    </div>
  )
}
