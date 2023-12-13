import { ComponentProps } from 'react'

import { Heading } from '@felix-ds/react'

export function Title({ children }: ComponentProps<typeof Heading>) {
  return <Heading className="mb-6 dark:text-primary-600">{children}</Heading>
}
