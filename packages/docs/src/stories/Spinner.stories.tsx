import { ComponentProps } from 'react'

import { Spinner } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {
    variant: 'neutral',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'destructive', 'neutral'],
      control: 'inline-radio',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: 'inline-radio',
    },
  },
} satisfies Meta<ComponentProps<typeof Spinner>>

export const Default: StoryObj<ComponentProps<typeof Spinner>> = {}
