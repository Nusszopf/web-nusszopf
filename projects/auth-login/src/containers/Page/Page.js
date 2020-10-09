import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'

import { seoData } from '../../assets/data'

const Page = ({ children, className }) => {
  const domain = 'https://auth.nusszopf.org'
  const featuredImage = 'https://nusszopf.org/images/og-image.png'

  return (
    <>
      <NextSeo
        title={seoData.title}
        description={truncate(seoData.description, { length: 150 })}
        canonical={domain}
        noindex={true}
        openGraph={{
          description: seoData.description,
          images: [
            {
              url: featuredImage,
              width: 1648,
              height: 863,
              alt: seoData.description,
            },
          ],
          locale: 'de_DE',
          url: domain,
          title: seoData.title,
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@handle',
          site: '@site',
        }}
      />
      <main className={classnames('flex-1', className)}>{children}</main>
      <footer className="flex justify-center">footer</footer>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Page
