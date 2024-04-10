/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        orange: {
          css: {
            '--tw-prose-body': theme('colors.orange[800]'),
            '--tw-prose-headings': theme('colors.orange[900]'),
            '--tw-prose-lead': theme('colors.orange[700]'),
            '--tw-prose-links': theme('colors.orange[900]'),
            '--tw-prose-bold': theme('colors.orange[900]'),
            '--tw-prose-counters': theme('colors.orange[600]'),
            '--tw-prose-bullets': theme('colors.orange[400]'),
            '--tw-prose-hr': theme('colors.orange[300]'),
            '--tw-prose-quotes': theme('colors.orange[900]'),
            '--tw-prose-quote-borders': theme('colors.orange[300]'),
            '--tw-prose-captions': theme('colors.orange[700]'),
            '--tw-prose-code': theme('colors.orange[900]'),
            '--tw-prose-pre-code': theme('colors.orange[100]'),
            '--tw-prose-pre-bg': theme('colors.orange[900]'),
            '--tw-prose-th-borders': theme('colors.orange[300]'),
            '--tw-prose-td-borders': theme('colors.orange[200]'),
            '--tw-prose-invert-body': theme('colors.orange[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.orange[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.orange[400]'),
            '--tw-prose-invert-bullets': theme('colors.orange[600]'),
            '--tw-prose-invert-hr': theme('colors.orange[700]'),
            '--tw-prose-invert-quotes': theme('colors.orange[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.orange[700]'),
            '--tw-prose-invert-captions': theme('colors.orange[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.orange[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.orange[600]'),
            '--tw-prose-invert-td-borders': theme('colors.orange[700]'),
          },
        },
      }),
      colors: {
        black: colors.black,
        neutral: colors.neutral,
        orange: colors.orange,
        pink: colors.pink,
        red: colors.red,
        teal: colors.teal,
        transparent: colors.transparent,
        white: colors.white,
      },
      gridTemplateColumns: {
        'grid-cards': 'repeat( auto-fit, minmax(225px, 1fr))',
        footer: '200px minmax(100px, 1fr) 100px',
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|border|text)-(teal|neutral)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['dark', 'hover'],
    },
    {
      pattern: /(grid-cols|grid-rows)-(\d)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /(m|mx|my|mt|mr|mb|ml)-(\d)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  plugins: [require('@tailwindcss/typography')],
};
