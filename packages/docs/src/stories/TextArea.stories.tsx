import { ComponentProps } from 'react'

import { TextArea } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
} satisfies Meta<ComponentProps<typeof TextArea>>

export const Default: StoryObj<ComponentProps<typeof TextArea>> = {
  args: {
    placeholder: 'Type your bio',
    fullWidth: true,
    disabled: false,
    minLength: 100,
    maxLength: 500,
  },
}

export const Disabled: StoryObj<ComponentProps<typeof TextArea>> = {
  args: {
    placeholder: 'Not allowed',
    disabled: true,
  },
}
