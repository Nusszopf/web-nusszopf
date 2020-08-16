import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'

import { Footer } from '../../components'
import ErrorBoundary from './ErrorBoundary'

const Page = ({
  children,
  image,
  title = 'Nusszopf - Netzwerk für gemeinsame Ideen und Projekte',
  description = 'Mit dem Nusszopf findest du Mitstreiter:innen und Projekte, teilst Ressourcen, Wissen und vieles mehr, um mehr Ideen und Projekte zu verwirklichen.',
  noindex = false,
  notFound = false,
}) => {
  const router = useRouter()
  const domain = `${process.env.DOMAIN}`
  const url = router && router.asPath ? router.asPath : undefined
  const canonical = url && url === '/' ? domain : domain + url
  const featuredImage = image?.url ?? `${domain}/images/og-image.jpg`

  useEffect(() => {
    if (notFound) {
      router.push('/404')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notFound])

  return (
    <>
      <NextSeo
        title={truncate(title, { length: 60 })}
        description={truncate(description, { length: 150 })}
        canonical={canonical}
        noindex={process.env.NODE_ENV !== 'production' ? true : noindex}
        openGraph={{
          description,
          images: [
            {
              url: featuredImage,
              width: image?.width ?? 1027,
              height: image?.height ?? 538,
              alt: description,
            },
          ],
          locale: 'de_DE',
          url,
          title,
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@handle',
          site: '@site',
        }}
      />
      <ErrorBoundary>
        <main className="flex-auto">{children}</main>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.object,
  keywords: PropTypes.string,
  noindex: PropTypes.bool,
  notFound: PropTypes.bool,
  title: PropTypes.string,
}

export default Page
