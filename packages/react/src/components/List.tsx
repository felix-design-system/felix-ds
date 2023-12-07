import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Text } from './Text'

type ListRootProps = {
  className: string
  children: ReactNode
}

type ListItemProps = {
  className?: string
  children: ReactNode
}

const ListRoot = ({ className, children }: ListRootProps) => {
  return <ul className={twMerge('mb-2 last:mb-0', className)}>{children}</ul>
}

ListRoot.displayName = 'List.Root'

const ListItem = ({ className, children }: ListItemProps) => {
  return (
    <li
      className={twMerge(
        'list-disc mx-8 mb-2 last:mb-0 dark:marker:text-neutral-200',
        className,
      )}
    >
      <Text>{children}</Text>
    </li>
  )
}

ListItem.displayName = 'List.Item'

export const List = {
  Root: ListRoot,
  Item: ListItem,
}
