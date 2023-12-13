import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Slot } from '@radix-ui/react-slot'

type HeadingProps = {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Heading({
  children,
  className,
  asChild,
  size = 'md',
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  const sizes = {
    xs: 'text-xl',
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-6xl',
  }

  return (
    <Comp
      className={twMerge(
        'font-semibold dark:text-neutral-300',
        sizes[size],
        className,
      )}
    >
      {children}
    </Comp>
  )
}

Heading.displayName = 'Heading'
