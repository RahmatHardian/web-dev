import { Check, Star } from 'lucide-react'
import { Card, Badge } from '../ui'
import { WhatsAppLink } from './WhatsAppLink'
import type { PricingPackage } from '../../types/pricing'
import { formatCurrency, calculateDiscount, WHATSAPP_MESSAGES } from '../../utils'

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
      className={featured ? 'relative border-2 border-primary-500' : ''}
    >
      {/* Best Seller Badge */}
      {pkg.isBestSeller && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="primary" size="md" className="shadow-md">
            <Star className="mr-1 h-4 w-4 fill-current" />
            Best Seller
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
        {pkg.description && (
          <p className="text-sm text-gray-600">{pkg.description}</p>
        )}
      </div>

      {/* Price */}
      <div className="mb-6 text-center">
        {pkg.originalPrice && (
          <div className="mb-1 flex items-center justify-center gap-2">
            <span className="text-sm text-gray-400 line-through">
              {formatCurrency(pkg.originalPrice)}
            </span>
            <Badge variant="success" size="sm">
              Hemat {discount}%
            </Badge>
          </div>
        )}
        <div className="text-4xl font-bold text-primary-600">
          {formatCurrency(pkg.price)}
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <WhatsAppLink
        message={WHATSAPP_MESSAGES.order(pkg.name)}
        buttonVariant={featured ? 'primary' : 'outline'}
        buttonSize="lg"
        className="w-full"
      >
        Pesan Sekarang
      </WhatsAppLink>
    </Card>
  )
}
