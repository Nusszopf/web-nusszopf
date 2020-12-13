const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const fetch = require('node-fetch')

async function generateSitemap(apiUrl, domain) {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore files
  let pages = await globby([
    'src/pages/**/*.js',
    '!src/pages/_*.js',
    '!src/pages/api',
    '!src/pages/user',
    '!src/pages/projects',
    '!src/pages/newsletter',
    '!src/pages/404.js',
    '!src/pages/500.js',
  ])

  // add all project pages regarding projects/[pid]
  const projects = await getAllProjects(apiUrl)
  pages = pages.concat(projects)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page.replace('src/pages', '').replace('.js', '')
          const route = path === '/index' ? '' : path

          return `
            <url>
                <loc>${`${domain}${route}`}</loc>
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

async function getAllProjects(apiUrl) {
  const query = `
    query {
      projects {
        id
      }
    }
  `
  const graphqlReq = { query, variables: {} }
  try {
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlReq),
    }
    const res = await fetch(apiUrl, opts)
    const json = await res.json()
    const projects = json.data.projects.map(project => `src/pages/projects/${project.id}.js`)
    return projects
  } catch (error) {
    console.error(error)
    return []
  }
}

module.exports = generateSitemap
