/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent))',
        'accent-light': 'rgb(var(--accent-light))',
        'accent-dark': 'rgb(var(--accent-dark))',
      },
      backgroundImage: {
        'accent-gradient': 'var(--accent-gradient)',
      },
    },
  },
  plugins: [],
}