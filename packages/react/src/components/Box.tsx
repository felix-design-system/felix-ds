import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BoxProps = {
  className?: string
  children: ReactNode
}

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={twMerge(
        'p-4 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
        className,
      )}
    >
      {children}
    </div>
  )
}

Box.displayName = 'Box'
