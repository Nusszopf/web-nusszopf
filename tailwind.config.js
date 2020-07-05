// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/
module.exports = {
  purge: ['./src/components/**/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    // overwrite theme sections
    extend: {
      // add styles to theme sections
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [],
}
