import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Badge = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: BadgeProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium'

  const variantStyles = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
    glass: 'badge-glass',
  }

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <span
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
