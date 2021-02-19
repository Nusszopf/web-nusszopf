<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Login Page

Environment to develop and build a custom auth0 login page.

## Current Workflow

1. Push new changes to Vercel
2. Replace dist/tt.mm.yy.html with tt.mm.yy.html from the output folder of the new vercel build
3. Replace preload stylesheets with inline stylesheets
4. Add full path to all `href`, `src` and `url` params
5. Minify via [willpeavy.com/tools/minifier/](https://www.willpeavy.com/tools/minifier/)
6. Save new html file in auth0 as custom login page

## Notes

- [Auth0 Auth App](https://community.auth0.com/t/disable-authorize-app-dialog/6939)
- [Auth0JS Custom Domains](https://auth0.com/docs/custom-domains/configure-features-to-use-custom-domains#universal-login) for auth-emails and auth-pages
- [Auth0JS SDK](https://github.com/auth0/auth0.js#auth0webauth)
- [Auth0 API](https://auth0.com/docs/api/authentication#introduction)
- Auth0 Authentication: `Requires Username` enabled
- ([auth0/rules](https://auth0.com/docs/rules))
- ([auth0/hooks](https://auth0.com/docs/hooks))
