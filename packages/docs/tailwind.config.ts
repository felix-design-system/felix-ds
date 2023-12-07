import { Config } from 'tailwindcss'

import { tailwindConfig } from '@felix-ds/react'

const config: Config = {
  content: [
    './index.html',
    '.storybook/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.mdx',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: tailwindConfig.theme,
}

export default config
