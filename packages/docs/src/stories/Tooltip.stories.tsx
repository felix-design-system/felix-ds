import { ComponentProps } from 'react'

import { Text, Tooltip } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Some text with tooltip</Text>,
    value: 'Lorem ipsum',
  },
} satisfies Meta<ComponentProps<typeof Tooltip>>

export const Default: StoryObj<ComponentProps<typeof Tooltip>> = {}
