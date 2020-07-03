module.exports = {
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    DOMAIN: process.env.DOMAIN,
    ENV: process.env.ENV,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_URL: process.env.SANITY_URL,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require('./scripts/generate-sitemap')
  //   }

  //   return config
  // },
}
