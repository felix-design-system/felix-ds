import { ComponentProps } from 'react'

import { Heading } from '@felix-ds/react'

export function SubTitle({ children }: ComponentProps<typeof Heading>) {
  return (
    <Heading size="sm" asChild className="border-b pb-2">
      <h3>{children}</h3>
    </Heading>
  )
}
