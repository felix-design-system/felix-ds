import { ComponentProps } from 'react'

import { Button } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

type ButtonProps = ComponentProps<typeof Button>

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'destructive'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Sign Up',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Sign In',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
}

export const Destructive: StoryObj<ButtonProps> = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
}
