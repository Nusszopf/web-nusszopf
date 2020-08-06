import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'

import ErrorBoundary from '../ErrorBoundary/error-boundary.organism'

const Page = ({
  children,
  image,
  description = 'Dein Netzwerk für gemeinsame Ideen und Projekt',
  title = 'Nusszopf',
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
        <main>{children}</main>
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
