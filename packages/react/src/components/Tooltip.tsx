'use client'

import { ReactNode } from 'react'

import * as PrimitiveTooltip from '@radix-ui/react-tooltip'

export interface TooltipProps {
  children: ReactNode
  value: string
}

export function Tooltip({ children, value }: TooltipProps) {
  return (
    <PrimitiveTooltip.Provider>
      <PrimitiveTooltip.Root>
        <PrimitiveTooltip.Trigger>{children}</PrimitiveTooltip.Trigger>
        <PrimitiveTooltip.Portal>
          <PrimitiveTooltip.Content
            className="rounded-md py-2 px-3 bg-neutral-950 bg-opacity-75 text-neutral-200 border-2 border-neutral-500 dark:border-neutral-700 max-w-xs"
            sideOffset={8}
          >
            {value}
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
