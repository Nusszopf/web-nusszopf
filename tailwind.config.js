// cheatsheet: npx tailwind init tailwind-full.config.js --full
module.exports = {
  purge: ['./src/components/**/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    // overwrite theme sections
    extend: {
      // add variants to theme sections
    },
  },
  variants: {},
  plugins: [],
}
