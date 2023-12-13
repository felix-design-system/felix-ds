import { ComponentProps } from 'react'

import { Container, Text } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Container',
  component: Container,
  args: {
    maxWidth: 'sm',
    children: (
      <Text className="block bg-neutral-200 p-4 text-center dark:bg-neutral-800 h-40">
        This is a container
      </Text>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<ComponentProps<typeof Container>>

export const Default: StoryObj<ComponentProps<typeof Container>> = {}
