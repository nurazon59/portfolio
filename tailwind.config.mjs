/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent))', // Raw value for use in gradient
        'accent-rgb': '136, 58, 234', // For direct use where rgb values are needed
        'accent-light': 'rgb(var(--accent-light))',
        'accent-light-rgb': '224, 204, 250',
        'accent-dark': 'rgb(var(--accent-dark))',
        'accent-dark-rgb': '49, 10, 101',
        'custom-bg': '#13151a', // For html background
        'card-bg': '#23262d',
      },
      fontFamily: {
        sans: ['0xproto', 'sans-serif'],
        mono: ['0xproto', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': "linear-gradient(45deg, rgb(var(--accent-rgb)), rgb(var(--accent-light-rgb)) 30%, white 60%)",
      }
    },
  },
  plugins: [],
}
