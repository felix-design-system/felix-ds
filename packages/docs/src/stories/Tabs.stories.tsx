import { ComponentProps } from 'react'

import { Tabs, Text } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Navigation/Tabs',
  component: Tabs.Root,
  args: {
    defaultValue: 'tab1',
    fullWidth: false,
    children: (
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className="p-4">
          <Text>Hello World on Tab 1</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2" className="p-4">
          <Text>Hello World on Tab 2</Text>
        </Tabs.Content>
        <Tabs.Content value="tab3" className="p-4">
          <Text>Hello World on Tab 3</Text>
        </Tabs.Content>
      </Tabs.Root>
    ),
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ComponentProps<typeof Tabs.Root>>

export const Default: StoryObj<ComponentProps<typeof Tabs.Root>> = {}
