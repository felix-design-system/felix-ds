import { ComponentProps } from 'react'

import { Text } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
voluptatibus deleniti blanditiis aspernatur. Accusamus consequuntur
consectetur magnam nihil minima, nostrum suscipit tempora. Aperiam,
accusantium quos. Libero voluptate odio quia nulla!`,
    size: 'md',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
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
} satisfies Meta<ComponentProps<typeof Text>>

export const Default: StoryObj<ComponentProps<typeof Text>> = {}

export const CustomTag: StoryObj<ComponentProps<typeof Text>> = {
  args: {
    asChild: true,
    children: <span>This a text using span</span>,
  },
}
