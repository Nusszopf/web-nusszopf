// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/

// Known issues: https://github.com/tailwindlabs/tailwindcss/discussions/2728

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
        300: '#F7F97B',
        400: '#F4F651',
        500: '#EAD706',
        600: '#A68B03',
        700: '#736000',
      },
      red: {
        100: '#FFE9E5',
        200: '#FFCDC6',
        300: '#FCA092',
        400: '#FA7061',
        500: '#D51407',
        600: '#A70600',
        700: '#6A0000',
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
        100: '#EAF3FF',
        200: '#D1E3FC',
        300: '#B9D3F8',
        400: '#8AB2F1',
        500: '#5B93E9',
        600: '#0F5CC9',
        700: '#00398A',
      },
      pink: {
        100: '#FFEEF1',
        200: '#FFCCD5',
        300: '#FFBDC8',
        400: '#FFB3BF',
        500: '#FF8095',
        600: '#B40051',
        700: '#7D0038',
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
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'aria-selected'],
    borderColor: ['responsive', 'active', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'disabled'],
  },
  corePlugins: {},
  plugins: [
    // custom and third-party-plugins
    plugin(function ({ addVariant, e }) {
      addVariant('aria-selected', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`aria-selected${separator}${className}`)}[aria-selected="true"]`
        })
      })
    }),
  ],
}
