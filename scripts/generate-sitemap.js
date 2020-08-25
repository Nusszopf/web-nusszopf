const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore files
  let pages = await globby([
    'src/pages/**/*.js',
    '!src/pages/_*.js',
    '!src/pages/newsletter/**.*.js',
    '!src/pages/api',
    '!src/pages/404.js',
    '!src/pages/500.js',
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
