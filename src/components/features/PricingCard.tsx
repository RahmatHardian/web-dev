import { Check, Star } from 'lucide-react'
import { Card, Badge } from '../ui'
import { WhatsAppLink } from './WhatsAppLink'
import type { PricingPackage } from '../../types/pricing'
import { formatCurrency, calculateDiscount, WHATSAPP_MESSAGES } from '../../utils'
import { clsx } from 'clsx'

interface PricingCardProps {
  package: PricingPackage
  featured?: boolean
}

export const PricingCard = ({ package: pkg, featured = false }: PricingCardProps) => {
  const discount = pkg.originalPrice
    ? calculateDiscount(pkg.originalPrice, pkg.price)
    : 0

  return (
    <Card
      variant={featured ? 'elevated' : 'bordered'}
      padding="lg"
      className={clsx(
        'relative shadow-card card-hover',
        featured
          ? 'gradient-dark border-2 border-primary text-white'
          : 'bg-white'
      )}
    >
      {/* Best Seller Badge */}
      {pkg.isBestSeller && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="primary" size="md" className="shadow-deep bg-primary text-white">
            <Star className="mr-1 h-4 w-4 fill-current" />
            Best Seller
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 text-center">
        <h3 className={clsx(
          'mb-2 text-h4 font-bold',
          featured ? 'text-white' : 'text-accent'
        )}>
          {pkg.name}
        </h3>
        {pkg.description && (
          <p className={clsx(
            'text-sm',
            featured ? 'text-white-soft' : 'text-text-gray'
          )}>
            {pkg.description}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="mb-6 text-center">
        {pkg.originalPrice && (
          <div className="mb-1 flex items-center justify-center gap-2">
            <span className={clsx(
              'text-sm line-through',
              featured ? 'text-white-soft' : 'text-text-gray'
            )}>
              {formatCurrency(pkg.originalPrice)}
            </span>
            <Badge variant="success" size="sm" className="bg-secondary text-white">
              Hemat {discount}%
            </Badge>
          </div>
        )}
        <div className={clsx(
          'text-4xl font-bold',
          featured ? 'gradient-text-gold' : 'text-primary'
        )}>
          {formatCurrency(pkg.price)}
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className={clsx(
              'mt-0.5 h-5 w-5 flex-shrink-0',
              featured ? 'text-gold-light' : 'text-secondary'
            )} />
            <span className={clsx(
              'text-sm',
              featured ? 'text-white-soft' : 'text-text-gray'
            )}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <WhatsAppLink
        message={WHATSAPP_MESSAGES.order(pkg.name)}
        buttonVariant={featured ? 'primary' : 'outline'}
        buttonSize="lg"
        className={clsx(
          'w-full',
          featured ? 'btn-primary bg-primary hover:bg-gold-light hover:text-accent' : 'btn-ghost border border-primary'
        )}
      >
        Pesan Sekarang
      </WhatsAppLink>
    </Card>
  )
}
