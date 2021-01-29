<p align="center">
  <a href="https://nusszopf.org">
    <img src="../../docs/1200x630.png" alt="Nusszopf logo" height="165">
  </a>
</p>

# Nusszopf – Password Page

Environment to develop and build a custom auth0 password page.

## Current Workflow

1. Push new changes to Vercel
2. Replace dist/tt.mm.yy.html with tt.mm.yy.html from the output folder of the new vercel build
3. Replace preload stylesheets with inline stylesheets
4. Add full path to all `href`, `src` and `url` params
5. Minify via [willpeavy.com/tools/minifier/](https://www.willpeavy.com/tools/minifier/)
6. Save new html file in auth0 as custom password page

## Notes

- [Auth0 Auth App](https://community.auth0.com/t/disable-authorize-app-dialog/6939)
- [Auth0 Password Reset Page](https://github.com/auth0/auth0-custom-password-reset-hosted-page)
- [Auth0 password-reset-flow](https://auth0.com/docs/connections/database/password-change#trigger-an-interactive-password-reset-flow)
- [auth0/password-sheriff](https://github.com/auth0/password-sheriff)
