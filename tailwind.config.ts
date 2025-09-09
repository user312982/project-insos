import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rt: {
          dark: '#556B2F',
          medium: '#8FA31E',
          light: '#C6D870',
          lightest: '#EFF5D2'
        }
      }
    },
  },
  plugins: [],
}
export default config
