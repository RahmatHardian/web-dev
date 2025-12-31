import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: ReactNode
  children: ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus-visible:outline-primary-500 shadow-sm hover:shadow-md',
    secondary:
      'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:outline-secondary-500 shadow-sm hover:shadow-md',
    outline:
      'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:outline-gray-500',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon
      )}
      {children}
    </button>
  )
}
