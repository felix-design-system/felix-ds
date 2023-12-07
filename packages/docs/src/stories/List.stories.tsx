import { ComponentProps } from 'react'

import { List } from '@felix-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/List',
  component: List.Root,
  args: {
    children: [
      <List.Item>Lorem ipsum;</List.Item>,
      <List.Item>Hello world;</List.Item>,
      <List.Item>
        Eaque excepturi maxime iure delectus tempora aut ratione perspiciatis,
        eos vitae, possimus beatae veritatis dolorum nesciunt maiores
        accusantium dicta adipisci totam qui.
      </List.Item>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ComponentProps<typeof List.Root>>

export const Default: StoryObj<ComponentProps<typeof List.Root>> = {}
