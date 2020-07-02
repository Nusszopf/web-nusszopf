const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  let pages = await globby([
    'src/pages/**/*.js',
    '!src/pages/_*.js',
    '!src/pages/api',
    '!src/pages/newsletter',
    '!src/pages/imprint.js',
    '!src/pages/privacy.js',
    '!src/pages/404.js',
  ])

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page.replace('src/pages', '').replace('.js', '')
          const route = path === '/index' ? '' : path

          return `
            <url>
                <loc>${`https://nusszopf.org${route}`}</loc>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

// Run script
generateSitemap()
