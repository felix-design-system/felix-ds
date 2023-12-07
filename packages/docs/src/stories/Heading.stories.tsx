import { ComponentProps } from 'react'

import { Heading } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'This is a Title',
    size: 'md',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<ComponentProps<typeof Heading>>

export const Default: StoryObj<ComponentProps<typeof Heading>> = {}

export const CustomTag: StoryObj<ComponentProps<typeof Heading>> = {
  args: {
    asChild: true,
    children: <h1>H1 Title</h1>,
  },
}
