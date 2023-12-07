import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Slot } from '@radix-ui/react-slot'

type TextProps = {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Text({ children, className, asChild, size = 'md' }: TextProps) {
  const Comp = asChild ? Slot : 'p'
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  return (
    <Comp
      className={twMerge(
        'text-neutral-950 mb-2 last:mb-0 dark:text-neutral-100',
        sizes[size],
        className,
      )}
    >
      {children}
    </Comp>
  )
}

Text.displayName = 'Text'
