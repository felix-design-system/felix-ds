import { ComponentProps } from 'react'

import { TextInput } from '@felix-ds/react'
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

export const Disabled: StoryObj<ComponentProps<typeof TextInput>> = {
  args: {
    placeholder: 'Not allowed',
    disabled: true,
  },
}
