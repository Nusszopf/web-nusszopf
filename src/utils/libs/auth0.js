import { initAuth0 } from '@auth0/nextjs-auth0'

/*
TODO
- add custom domain
- auth0-dashboard: update settings like redirect-urls, ...
*/

export default initAuth0({
  audience: process.env.AUTH0_AUDIENCE,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
    storeAccessToken: true,
    storeRefreshToken: true,
    storeIdToken: false,
  },
})
