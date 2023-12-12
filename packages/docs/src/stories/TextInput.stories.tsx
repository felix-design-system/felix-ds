import { ComponentProps } from 'react'

import { Text, TextInput } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

import { UserIcon } from '../icons/UserIcon'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
} satisfies Meta<ComponentProps<typeof TextInput>>

export const Default: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    placeholder: 'Type your name',
    prefix: '',
    fullWidth: false,
    disabled: false,
  },
}

export const WithPrefix: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    prefix: 'instagram.com/',
    placeholder: 'your-username',
  },
}

export const WithIcon: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    icon: <UserIcon size={16} />,
  },
}

export const WithIconAndPrefix: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    icon: <UserIcon size={16} />,
    prefix: 'instagram.com/',
  },
}

export const WithHelperText: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    type: 'password',
    placeholder: 'Password',
    helperText: 'Minimum of 7 characters',
  },
}

export const WithErrorMessage: StoryObj<ComponentProps<typeof TextInput>> = {
  decorators: [
    Story => (
      <div>
        <Text>Email</Text>
        <Story />
      </div>
    ),
  ],
  args: {
    type: 'email',
    value: 'wrong.email.com',
    error: true,
    placeholder: 'Password',
    helperText: 'Type a valid email',
  },
}

export const Disabled: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    placeholder: 'Not allowed',
    disabled: true,
  },
}
