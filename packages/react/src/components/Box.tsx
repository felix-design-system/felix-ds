import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BoxProps = {
  className?: string
  children: ReactNode
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        'p-6 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
        className,
      )}
    >
      {children}
    </div>
  )
}

Box.displayName = 'Box'
