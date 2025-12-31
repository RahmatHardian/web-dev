import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  fullWidth?: boolean
  noPadding?: boolean
  background?: 'white' | 'gray' | 'primary' | 'secondary'
}

export const Section = ({
  children,
  fullWidth = false,
  noPadding = false,
  background = 'white',
  className,
  ...props
}: SectionProps) => {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  }

  return (
    <section
      className={clsx(
        backgroundStyles[background],
        !noPadding && 'section-padding',
        className
      )}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="container-custom">{children}</div>
      )}
    </section>
  )
}
