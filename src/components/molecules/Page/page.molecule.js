import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'

import { PROD_ENV } from '../../../utils/enums'
import { Footer, ErrorBoundary, Header } from '../../organisms'
import styles from './page.module.scss'

const Page = ({
  children,
  image,
  description = 'Plattform für gemeinsame Ideenprozesse',
  title = 'Nusszopf',
  noindex = false,
  errorRef = '/',
  notFound = false,
  footer,
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
  }, [notFound])

  return (
    <>
      <NextSeo
        title={truncate(description, { length: 60 })}
        description={truncate(description, { length: 150 })}
        canonical={canonical}
        noindex={process.env.ENV !== PROD_ENV ? true : noindex}
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
      <ErrorBoundary errorRef={errorRef}>
        <>
          <Header />
          <main className={styles.container}>{children}</main>
          {footer && <Footer items={footer} />}
        </>
      </ErrorBoundary>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  keywords: PropTypes.string,
  noindex: PropTypes.bool,
  errorRef: PropTypes.string,
  notFound: PropTypes.bool,
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.instanceOf(null)]),
}

export default Page
