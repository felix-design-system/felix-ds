import { ReactNode } from 'react'

type BoxProps = {
  className?: string
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return (
    <div className="p-4 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
      {children}
    </div>
  )
}

Box.displayName = 'Box'
