import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'
import * as LucideIcons from 'lucide-react'

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  size?: number
  color?: string
}

export const Icon = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
  ...props
}: IconProps) => {
  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as any)[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }

  return (
    <div className={clsx('inline-flex', className)} {...props}>
      <IconComponent size={size} color={color} />
    </div>
  )
}
