// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/

// Known issues: https://github.com/tailwindlabs/tailwindcss/discussions/2728

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/components/**/*.{js,jsx}',
      './src/containers/**/*.{js,jsx}',
      './src/pages/**/*.{js,jsx}',
      '../ui-library/stories/**/*.{js,jsx}',
      '../ui-library/services/**/*.{js,jsx}',
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
        700: '#B84405',
      },
      steel: {
        100: '#ECEFF1',
        200: '#CFD8DC',
        300: '#AFBEC5',
        400: '#90A4AE',
        500: '#546E7A',
        600: '#455963',
        700: '#37474F',
        800: '#263238',
      },
      stone: {
        200: '#F2F2F2',
        300: '#E0E0E0',
        400: '#C7C7C7',
        600: '#828282',
        800: '#404040',
      },
      livid: {
        100: '#EEF5F7',
        200: '#CBE1E6',
        300: '#BAD7DE',
        500: '#64A6B4',
        800: '#213E45',
      },
      lilac: {
        100: '#F4F3F5',
        150: '#F2F1F3',
        200: '#E5E2E8',
        300: '#CBC6D0',
        400: '#B1AAB8',
        500: '#897F94',
        600: '#645B6E',
        800: '#403A46',
      },
      moss: {
        200: '#E9E9AF',
        400: '#D1D35F',
        800: '#3B3C10',
      },
      yellow: {
        100: '#FFFFF0',
        200: '#FCFDB5',
        300: '#F6F151',
        400: '#EAD706',
        500: '#D6B300',
        800: '#574800',
      },
      red: {
        100: '#FFE9E5',
        200: '#FFCDC6',
        300: '#FCA99C',
        500: '#F5624D',
        600: '#D51407',
      },
      turquoise: {
        100: '#E5FFF5',
        200: '#C9F7E6',
        300: '#9BE9CB',
        500: '#4DCBAE',
        700: '#005C4C',
      },
      blue: {
        100: '#EAF3FF',
        200: '#D1E3FC',
        300: '#ABCBF8',
        400: '#87B2ED',
        500: '#6395DC',
        700: '#00378A',
      },
      pink: {
        100: '#FFEEF1',
        200: '#FFCCD5',
        300: '#FF99AA',
        500: '#F1507E',
        700: '#C20A5D',
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
        128: '32rem',
      },
      ringWidth: {
        3: '3px',
      },
      boxShadow: {
        'lg-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        opacitySlowFade: 'opacityFade 250ms cubic-bezier(0.08, 0.82, 0.17, 1)',
        opacityFade: 'opacityFade 150ms cubic-bezier(0.08, 0.82, 0.17, 1)',
        scaleFade: 'scaleFade 150ms cubic-bezier(0.08, 0.82, 0.17, 1)',
      },
      keyframes: {
        opacityFade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        scaleFade: {
          from: {
            transform: 'scale(0.8)',
            opacity: 0,
          },
          to: {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {
    // https://tailwindcss.com/docs/pseudo-class-variants#creating-custom-variants
    extend: {
      borderColor: ['active'],
      cursor: ['disabled'],
      ringColor: ['hover'],
      ringOpacity: ['hover'],
      opacity: ['disabled'],
    },
  },
  corePlugins: {},
  plugins: [
    // custom and third-party-plugins
  ],
}
