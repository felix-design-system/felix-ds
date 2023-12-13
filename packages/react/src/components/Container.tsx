import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export interface ContainerProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children?: ReactNode
  className?: string
}

const containerVariants = tv({
  base: 'block mx-auto box-border',
  variants: {
    maxWidth: {
      xs: 'max-w-[480px] w-full',
      sm: 'max-w-[640px] w-full',
      md: 'max-w-[720px] w-full',
      lg: 'max-w-[1024px] w-full',
      xl: 'max-w-[1200px] w-full',
      '2xl': 'max-w-[1536px] w-full',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
  },
})

export function Container({ maxWidth, children, className }: ContainerProps) {
  return (
    <div className={twMerge(containerVariants({ maxWidth }), className)}>
      {children}
    </div>
  )
}

Container.displayName = 'Container'
