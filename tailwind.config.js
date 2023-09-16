const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        navbar: '4rem',
      },
      width: {
        sidebar: '18rem',
      },
      maxWidth: {
        phone: '420px',
        tablet: '620px',
        web: '1080px',
        large: '1268px',
      },
      padding: {
        navbar: '4rem',
        sidebar: '18rem',
      },
      margin: {
        navbar: '4rem',
        sidebar: '18rem',
      },
      fontFamily: {
        capital: ['var(--font-capital)'],
        main: ['var(--font-main)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        main: '#ECE8E1',
        light: '#fefaf3',
        primary: colors.red,
        background: colors.white,
        gray: colors.slate,
        accent: colors.cyan,
      },
      transitionTimingFunction: {
        fadeIn: 'cubic-bezier(.24,.6,.64,.65)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
