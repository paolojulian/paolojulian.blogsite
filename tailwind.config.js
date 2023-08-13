/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        sidebar: '18rem',
      },
      margin: {
        sidebar: '18rem',
      },
      fontFamily: {
        anton: ['var(--font-anton)'],
        quicksand: ['var(--font-quicksand)'],
        manrope: ['var(--font-manrope)'],
      },
      colors: {
        main: '#ECE8E1',
        light: '#fefaf3',
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
