import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'

import { NavHeader, Footer } from 'ui-library/stories/organisms'
import { getUser } from '~/utils/services/auth.service'
import { seoData } from '~/assets/data'
import { useScrollTop } from '~/utils/helper'
import ErrorBoundary from './ErrorBoundary'

const Page = ({
  children,
  image,
  title = seoData.title,
  description = seoData.description,
  noindex = false,
  notFound = false,
  navHeader,
  footer,
  className,
}) => {
  useScrollTop()
  const router = useRouter()
  const user = getUser()
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
        {navHeader?.visible && <NavHeader user={user} {...navHeader} />}
        <main className={classnames('flex flex-col flex-1', className)}>{children}</main>
        <Footer {...footer} />
      </ErrorBoundary>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.object,
  noindex: PropTypes.bool,
  notFound: PropTypes.bool,
  title: PropTypes.string,
  showFooter: PropTypes.bool,
  navHeader: PropTypes.object,
  className: PropTypes.string,
  footer: PropTypes.object,
}

export default Page
