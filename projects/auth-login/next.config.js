// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['ui-library'])

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  target: 'serverless',
  // assetPrefix: process.env.VERCEL_ENV === 'development' ? '' : 'https://auth.login.nusszopf.org',
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_TENANT: process.env.AUTH0_TENANT,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
}

module.exports = withBundleAnalyzer(withTM(nextConfig))
