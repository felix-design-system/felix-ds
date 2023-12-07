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
    xs: 'text-xl mt-6 mb-3',
    sm: 'text-2xl mt-8 mb-4',
    md: 'text-3xl mt-10 mb-6',
    lg: 'text-4xl mt-12 mb-8',
    xl: 'text-6xl mt-12 mb-8',
  }

  return (
    <Comp
      className={twMerge(
        'first:mt-0 last:mb-0 font-semibold dark:text-neutral-100',
        sizes[size],
        className,
      )}
    >
      {children}
    </Comp>
  )
}

Heading.displayName = 'Heading'
