import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import * as PrimitiveTabs from '@radix-ui/react-tabs'

interface TabsRootProps extends ComponentProps<typeof PrimitiveTabs.Root> {
  fullWidth?: boolean
}

type TabsListProps = ComponentProps<typeof PrimitiveTabs.List>

type TabsContentProps = ComponentProps<typeof PrimitiveTabs.Content>

type TabsTriggerProps = ComponentProps<typeof PrimitiveTabs.Trigger>

const tabsVariants = (className?: string) =>
  tv({
    base: twMerge(
      'border border-neutral-200 dark:border-neutral-700 rounded-md',
      className,
    ),
    variants: {
      fullWidth: {
        true: 'w-full',
      },
    },
  })

const TabsRoot = ({
  children,
  className,
  fullWidth,
  ...rest
}: TabsRootProps) => {
  return (
    <PrimitiveTabs.Root
      className={tabsVariants(className)({
        fullWidth,
      })}
      {...rest}
    >
      {children}
    </PrimitiveTabs.Root>
  )
}

TabsRoot.displayName = 'Tabs.Root'

const TabsList = ({ children, className, ...rest }: TabsListProps) => {
  return (
    <PrimitiveTabs.List
      className={twMerge(
        'border-b border-b-neutral-200 bg-neutral-50 dark:border-b-neutral-700 dark:bg-neutral-800',
        className,
      )}
      {...rest}
    >
      {children}
    </PrimitiveTabs.List>
  )
}

TabsList.displayName = 'Tabs.List'

const TabsContent = ({ children, ...props }: TabsContentProps) => {
  return <PrimitiveTabs.Content {...props}>{children}</PrimitiveTabs.Content>
}

TabsContent.displayName = 'Tabs.Content'

const TabsTrigger = ({ children, className, ...rest }: TabsTriggerProps) => {
  return (
    <PrimitiveTabs.Trigger
      className={twMerge(
        `px-6 py-2 dark:text-neutral-200 hover:text-primary-600
        hover:dark:text-primary-600 data-[state=active]:font-semibold
        data-[state=active]:text-primary-600 dark:data-[state=active]:text-primary-600
        border-b-2 border-b-transparent data-[state=active]:border-b-primary-600
        h-full active:bg-primary-100 dark:active:bg-primary-950 transition-all`,
        className,
      )}
      {...rest}
    >
      {children}
    </PrimitiveTabs.Trigger>
  )
}

TabsTrigger.displayName = 'Tabs.Trigger'

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Content: TabsContent,
  Trigger: TabsTrigger,
}
