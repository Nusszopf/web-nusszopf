<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Login Page

Environment to develop and build a custom auth0 login page.

## 101

1. Push new changes
2. Replace the dist/index.html with index.html from the output folder of the new vercel build
3. Add full path to href and src urls
4. Replace preload stylesheets with inline stylesheets
5. Save new index.html in auth0 custom login page

## Notes

- [Auth0 Auth App](https://community.auth0.com/t/disable-authorize-app-dialog/6939)
- [Auth0JS Custom Domains](https://auth0.com/docs/custom-domains/configure-features-to-use-custom-domains#universal-login) for auth-emails and auth-pages
- [Auth0JS SDK](https://github.com/auth0/auth0.js#auth0webauth)
- [Auth0 API](https://auth0.com/docs/api/authentication#introduction)
- Auth0 Authentication: `Requires Username` enabled
