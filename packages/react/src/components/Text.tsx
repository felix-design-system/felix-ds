import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Slot } from '@radix-ui/react-slot'

type TextProps = {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  center?: boolean
}

const textVariants = tv({
  base: 'text-neutral-950 dark:text-neutral-300',
  variants: {
    size: {
      xs: 'text-xs leading-8',
      sm: 'text-sm leading-8',
      md: 'text-base leading-7',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-7',
    },
    center: {
      true: 'text-center',
    },
  },
  defaultVariants: {
    size: 'md',
    center: false,
  },
})

export function Text({
  children,
  className,
  asChild,
  center,
  size,
}: TextProps) {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp className={twMerge(textVariants({ center, size }), className)}>
      {children}
    </Comp>
  )
}

Text.displayName = 'Text'
