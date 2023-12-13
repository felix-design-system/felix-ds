import { ComponentProps } from 'react'

import { Heading } from '@felix-ds/react'

export function SubTitle({ children }: ComponentProps<typeof Heading>) {
  return (
    <Heading
      size="xs"
      asChild
      className="border-b border-neutral-700 pb-2 mb-4 mt-6 first:mt-0"
    >
      <h3>{children}</h3>
    </Heading>
  )
}
