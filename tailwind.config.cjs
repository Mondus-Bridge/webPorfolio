/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a1f36',
        amber: '#ffb400',
        teal: '#38b2ac',
        gray: '#f4f6f9',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.display').join(', ') },
            p:  { fontFamily: theme('fontFamily.body').join(', ') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
