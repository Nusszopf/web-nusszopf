module.exports = {
  target: 'serverless',
  env: {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_URL: process.env.SANITY_URL,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
}
