// cheatsheet: npx tailwind init tailwind-full.config.js --full
// documentation: https://tailwindcss.com/docs/configuration/
module.exports = {
  purge: ['./src/components/**/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    // overwrites
    extend: {
      // additions
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    // third-party-plugins
  ],
}
