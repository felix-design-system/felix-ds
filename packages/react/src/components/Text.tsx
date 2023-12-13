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
    xs: 'text-xs leading-8',
    sm: 'text-sm leading-8',
    md: 'text-base leading-7',
    lg: 'text-lg leading-6',
    xl: 'text-xl leading-5',
  }

  return (
    <Comp
      className={twMerge(
        'text-neutral-950 dark:text-neutral-300',
        sizes[size],
        className,
      )}
    >
      {children}
    </Comp>
  )
}

Text.displayName = 'Text'
