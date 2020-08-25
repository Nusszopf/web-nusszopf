import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'
import { Footer } from '../../containers'
import ErrorBoundary from './ErrorBoundary'

const Page = ({
  children,
  image,
  title = 'Nusszopf – Netzwerk für gemeinsame Ideen und Projekte',
  description = 'Setze mehr Ideen mit passenden Mitstreiter:innen, Ressourcen und Wissen um. Mach mit bei spannenden Projekten und werde Teil der Nusszopfgemeinschaft!',
  noindex = false,
  notFound = false,
  showFooter = true,
  className,
}) => {
  const router = useRouter()
  const domain = `${process.env.DOMAIN}`
  const url = router && router.asPath ? router.asPath : undefined
  const canonical = url && url === '/' ? domain : domain + url
  const featuredImage = image?.url ?? `${domain}/images/og-image.png`

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
        // noindex={process.env.NODE_ENV !== 'production' ? true : noindex}
        noindex={true}
        openGraph={{
          description,
          images: [
            {
              url: featuredImage,
              width: image?.width ?? 1648,
              height: image?.height ?? 863,
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
        <main className={classnames('flex-auto', className)}>{children}</main>
        {showFooter && <Footer />}
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
  showFooter: PropTypes.bool,
  className: PropTypes.string,
}

export default Page
