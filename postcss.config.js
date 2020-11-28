// storybook: update postcss.config.js to use an object-based format instead of an array
// https://dev.to/0xcap/nextjs-typescript-tailwindcss-storybook-project-setup-4clj

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {},
  },
}
