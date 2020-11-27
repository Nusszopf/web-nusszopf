// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/

// Known issues: https://github.com/tailwindlabs/tailwindcss/discussions/2728

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
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
      warning: {
        100: '#FFEEE5',
        200: '#FDD1B9',
        300: '#F8A87C',
        400: '#EA5E12',
        500: '#D5520B',
        600: '#B84405',
        700: '#993600',
      },
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
      livid: {
        100: '#EEF5F7',
        200: '#CBE1E6',
        300: '#A9CED6',
        400: '#87BAC5',
        500: '#64A6B4',
        600: '#4B8D9B',
        700: '#34626C',
        800: '#213E45',
      },
      moss: {
        100: '#F4F4D7',
        200: '#E9E9AF',
        300: '#DEDE87',
        350: '#D8D873',
        400: '#D1D35F',
        500: '#A6A82E',
        600: '#8A8C26',
        700: '#63641B',
      },
      stone: {
        100: '#F7F7F7',
        200: '#F2F2F2',
        300: '#E0E0E0',
        400: '#C7C7C7',
        500: '#AAAAAA',
        600: '#828282',
        700: '#616161',
        800: '#404040',
      },
    },
    fontFamily: {
      sans: ['Barlow', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      // additions
      borderWidth: {
        3: '3px',
      },
      minHeight: {
        48: '12rem',
      },
      spacing: {
        18: '4.75rem',
        84: '21rem',
      },
      ringWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    // https://tailwindcss.com/docs/pseudo-class-variants#creating-custom-variants
    extend: {
      backgroundColor: ['aria-selected'],
      cursor: ['disabled'],
      ringColor: ['hover'],
      ringOpacity: ['hover'],
      opacity: ['disabled'],
    },
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
