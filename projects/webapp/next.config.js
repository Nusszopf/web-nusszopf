// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['ui-library'])

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

const nextConfig = {
  target: 'serverless',
  future: {
    webpack5: true,
  },
  env: {
    API_URL: process.env.API_URL,
    DOMAIN: process.env.DOMAIN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_URL: process.env.SANITY_URL,
    ENV: process.env.ENV,
    LOCATIONIQ_KEY: process.env.LOCATIONIQ_KEY,
    MEILI_API_KEY: process.env.MEILI_API_KEY,
    MEILI_DOMAIN: process.env.MEILI_DOMAIN,
    SPACES_CDN_ENDPOINT: process.env.SPACES_CDN_ENDPOINT,
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}

module.exports = withBundleAnalyzer(withTM(nextConfig))
