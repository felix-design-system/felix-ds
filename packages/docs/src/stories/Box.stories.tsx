import { ComponentProps } from 'react'

import { Box, Heading, Text } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: [
      <Heading size="sm">This is a Box Title</Heading>,
      <Text>This is a text</Text>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ComponentProps<typeof Box>>

export const Default: StoryObj<ComponentProps<typeof Box>> = {}
