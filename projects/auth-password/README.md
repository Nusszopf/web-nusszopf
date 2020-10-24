<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Password Page

Environment to develop and build the custom auth0-nusszopf password page.

Copy and paste the current build on vercel: e.g. https://vercel.com/nusszopf/auth-password-nusszopf/9a2td8tty/source, and add to each url the domain. After each deployment, replace the new index.html file in auth0!

## Notes

- [Auth0 Auth App](https://community.auth0.com/t/disable-authorize-app-dialog/6939)
- [Auth0 Password Reset Page](https://github.com/auth0/auth0-custom-password-reset-hosted-page)
- [Auth0 password-reset-flow](https://auth0.com/docs/connections/database/password-change#trigger-an-interactive-password-reset-flow)

## Customize

1. check github code: looks like only a post-request without auth0 library! [repo](https://github.com/auth0/auth0-custom-password-reset-hosted-page).
   -> get query-params -> add new pw -> send post request `/lo/reset` should do the trick.
   -> password validation (maybe auth0 password sherif?)
