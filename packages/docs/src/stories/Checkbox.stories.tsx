import { ComponentProps } from 'react'

import { Checkbox } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    id: 'my-checkbox',
    label: 'Remember me',
  },
} satisfies Meta<ComponentProps<typeof Checkbox>>

export const Default: StoryObj<ComponentProps<typeof Checkbox>> = {
  args: {
    disabled: false,
  },
}
