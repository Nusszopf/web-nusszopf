import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  // Use public mode because of caching ability for CDN
  useCdn: true, // `false` if you want to ensure fresh data
})
