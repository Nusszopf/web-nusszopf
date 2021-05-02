import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  secret: process.env.AUTH0_SESSION_COOKIE_SECRET,
  clockTolerance: 60,
  baseURL: process.env.DOMAIN,
  routes: {
    callback: '/api/callback',
    postLogoutRedirect: '/',
  },
  authorizationParams: {
    audience: process.env.AUTH0_AUDIENCE,
    scope: process.env.AUTH0_SCOPE,
  },
  session: {
    rollingDuration: 60 * 60 * 8,
  },
})
