import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'
import { Footer } from '../../containers'
import ErrorBoundary from './ErrorBoundary'
import { FOOTER_TYPE } from '../Footer/Footer'

const Page = ({
  children,
  image,
  title = 'Nusszopf – Netzwerk für gemeinsame Ideen und Projekte',
  description = 'Setze mehr Ideen mit passenden Mitstreiter:innen, Ressourcen und Wissen um. Mach mit bei spannenden Projekten und werde Teil der Nusszopfgemeinschaft!',
  noindex = false,
  notFound = false,
  showFooter = true,
  footerType = FOOTER_TYPE.primary,
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
        noindex={process.env.ENV !== 'production' ? true : noindex}
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
        <main className={classnames('flex-1', className)}>{children}</main>
        {showFooter && <Footer type={footerType} />}
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
  footerType: PropTypes.string,
}

export default Page
