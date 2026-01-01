import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  children: ReactNode
}

export const Card = ({
  variant = 'default',
  padding = 'md',
  hover = false,
  children,
  className,
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-xl'

  const variantStyles = {
    default: 'bg-white shadow-sm',
    bordered: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg shadow-gray-200/50',
    glass: 'card-glass',
  }

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : ''

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
