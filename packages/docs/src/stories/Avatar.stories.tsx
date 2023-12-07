import { ComponentProps } from 'react'

import { Avatar } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jsfelix.png',
    alt: 'Jefferson Felix',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<ComponentProps<typeof Avatar>>

export const Default: StoryObj<ComponentProps<typeof Avatar>> = {}

export const WithFallback: StoryObj<ComponentProps<typeof Avatar>> = {
  args: {
    src: undefined,
  },
}
