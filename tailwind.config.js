// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './src/containers/**/*.{js,jsx}',
      './src/pages/**/*.{js,jsx}',
      '../ui-library/stories/**/*.{js,jsx}',
      '../ui-library/services/**/*.{js,jsx}',
      './stories/**/*.{js,jsx}',
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    // overwrites
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      warning: '#F54636',
      gray: {
        50: '#F6F8F9',
        100: '#ECEFF1',
        200: '#CFD8DC',
        250: '#AFBEC5',
        300: '#90A4AE',
        400: '#607D8B',
        500: '#546E7A',
        600: '#37474F',
        700: '#263238',
      },
      yellow: {
        100: '#FEFFCC',
        200: '#FCFEAA',
        300: '#FAFC88',
        400: '#F4F651',
        500: '#EAD706',
        600: '#A68B03',
        700: '#574800',
      },
      red: {
        100: '#FFE9E5',
        200: '#FEC2B9',
        300: '#FCA092',
        400: '#F5624D',
        500: '#D51407',
        600: '#970702',
        700: '#570000',
      },
      turquoise: {
        100: '#E5FFF5',
        200: '#D3FDED',
        300: '#C5F7E4',
        400: '#B1EED7',
        500: '#68D9B9',
        600: '#169C7D',
        700: '#005C4C',
        800: '#00332A',
      },
      blue: {
        100: '#E5F0FF',
        200: '#CBDFFB',
        300: '#A6C6F2',
        400: '#6396DC',
        500: '#367EE2',
        600: '#1062D5',
        700: '#00398A',
      },
      pink: {
        100: '#FFF0F0',
        200: '#FFE7E5',
        300: '#FFD3D1',
        400: '#FFBDBA',
        500: '#FF8095',
        600: '#CC005C',
        700: '#990045',
      },
      lilac: {
        100: '#F4F3F5',
        200: '#EDECEF',
        300: '#E5E3E7',
        400: '#CBC6D0',
        500: '#B1AAB8',
        600: '#7D7289',
        700: '#645B6E',
        800: '#4B4452',
      },
    },
    fontFamily: {
      sans: ['Barlow', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      // additions
      boxShadow: {
        'outline:yellow-300': '0 0 0 3px rgba(250, 252, 136, 0.5)',
        'outline:yellow-700': '0 0 0 3px rgba(87, 72, 0, 0.5)',
        'outline:blue-200': '0 0 0 3px rgba(203, 223, 251, 0.5)',
        'outline:blue-400': '0 0 0 3px rgba(99, 150, 220, 0.5)',
        'outline:blue-700': '0 0 0 3px rgba(0, 57, 138, 0.5)',
        'outline:gray-600': '0 0 0 3px rgba(38, 50, 56, 0.5)',
        'outline:gray-500': '0 0 0 3px rgba(84, 110, 122, 0.5)',
        'outline:gray-200': '0 0 0 3px rgba(207, 216, 220, 0.5)',
        'outline:warning': '0 0 0 3px rgba(245, 70, 54, 0.5)',
        'outline:turquoise-600-bright': '0 0 0 3px rgba(104, 217, 185, 0.25)',
        'outline:lilac-700': '0 0 0 3px rgba(100, 91, 110, 0.5)',
        'outline:lilac-500': '0 0 0 3px rgba(203, 198, 208, 0.5)',
      },
      borderWidth: {
        3: '3px',
      },
      minHeight: {
        48: '12rem',
      },
      spacing: {
        18: '4.75rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      translate: {
        7: '1.75rem',
      },
    },
  },
  variants: {
    // https://tailwindcss.com/docs/pseudo-class-variants#creating-custom-variants
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'active', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'disabled'],
  },
  corePlugins: {},
  plugins: [
    // third-party-plugins
  ],
}
