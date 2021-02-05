import { SitemapStream, streamToPromise } from 'sitemap'

import runMiddleware, { rateLimiter } from '../../utils/functions/runMiddleware.function'
import { handleError, getPublicProjects } from '../../utils/functions/api.function'

export default async function sitemap(req, res) {
  try {
    await runMiddleware(req, res, rateLimiter)
    const smStream = new SitemapStream({ hostname: 'https://nusszopf.org' })

    smStream.write({ url: '/' })
    smStream.write({ url: '/legalNotice' })
    smStream.write({ url: '/privacy' })
    const projects = await getPublicProjects()
    projects.forEach(project => {
      smStream.write({
        url: `/projects/${project.id}`,
        lastmod: project.updated_at,
      })
    })
    smStream.end()

    const sitemap = await streamToPromise(smStream).then(sm => sm.toString())

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()
  } catch (error) {
    handleError({ res, error })
  }
}
