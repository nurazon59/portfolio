/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        '0xproto': ['0xproto', 'sans-serif'],
      },
      colors: {
        'accent': 'rgb(136, 58, 234)',
        'accent-light': 'rgb(224, 204, 250)',
        'accent-dark': 'rgb(49, 10, 101)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(45deg, rgb(136, 58, 234), rgb(224, 204, 250) 30%, white 60%)',
      },
    },
  },
  plugins: [],
}