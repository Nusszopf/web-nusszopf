// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['ui-library'])

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    DOMAIN: process.env.DOMAIN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_URL: process.env.SANITY_URL,
    ENV: process.env.ENV,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
}

module.exports = withBundleAnalyzer(withTM(nextConfig))
