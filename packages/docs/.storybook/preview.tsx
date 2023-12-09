import React from 'react'

import { withThemeByDataAttribute } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import '@felix-ds/react/dist/global.css'
import '../src/styles/global.css'
import { themes } from '@storybook/theming'

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
  Story => (
    <div className="px-6 py-12 w-full flex items-center justify-center bg-white dark:bg-neutral-900">
      <Story className="h-full" />
    </div>
  ),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting started',
          ['Overview', 'Installation'],
          'Tokens',
          'Inputs',
          ['Button', 'TextInput', 'TextArea'],
          'Typography',
          ['Text', 'Heading', 'List'],
          'Data Display',
          ['Avatar'],
          'Surfaces',
          ['Box'],
          'Navigation',
          ['Avatar'],
        ],
      },
    },
    docs: {
      theme: themes.dark,
      decorators,
    },
  },
}

export default preview
