import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tealbrand: '#1DABBA',
        greybrand: '#868B91',
        blackbrand: '#000000',
        whitebrand: '#FFFFFF'
      },
      backgroundImage: {
        'leaf-pattern': "url('/leaf-pattern.svg')",
        'tree-watermark': "url('/tree-watermark.svg')"
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
export default config
