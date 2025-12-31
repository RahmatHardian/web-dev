import { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@components/ui'
import { generateWhatsAppLink, getWhatsAppPhone } from '@utils/whatsapp'

interface WhatsAppLinkProps {
  message: string
  variant?: 'button' | 'link'
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  buttonSize?: 'sm' | 'md' | 'lg'
  children?: ReactNode
  className?: string
  showIcon?: boolean
}

export const WhatsAppLink = ({
  message,
  variant = 'button',
  buttonVariant = 'primary',
  buttonSize = 'md',
  children,
  className,
  showIcon = true,
}: WhatsAppLinkProps) => {
  const phone = getWhatsAppPhone()
  const whatsappUrl = generateWhatsAppLink(phone, message)

  if (variant === 'link') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children || 'Contact via WhatsApp'}
      </a>
    )
  }

  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      className={className}
      icon={showIcon ? <MessageCircle className="h-5 w-5" /> : undefined}
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      {children || 'Contact via WhatsApp'}
    </Button>
  )
}
