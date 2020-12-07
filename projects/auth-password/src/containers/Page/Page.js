import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'

import { NavHeader, Footer } from 'ui-library/stories/organisims'
import { pageData as cms } from '../../assets/data'

const Page = ({ children, className }) => {
  const domain = 'https://auth.nusszopf.org'
  const featuredImage = 'https://nusszopf.org/images/og-image.png'

  return (
    <>
      <NextSeo
        title={cms.seo.title}
        description={truncate(cms.seo.description, { length: 150 })}
        canonical={domain}
        noindex={true}
        openGraph={{
          description: cms.seo.description,
          images: [
            {
              url: featuredImage,
              width: 1648,
              height: 863,
              alt: cms.seo.description,
            },
          ],
          locale: 'de_DE',
          url: domain,
          title: cms.seo.title,
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@handle',
          site: '@site',
        }}
      />
      <NavHeader mode="external" goBackUri="https://nusszopf.org" />
      <main className={classnames('flex flex-col flex-1 bg-white sm:bg-steel-100', className)}>{children}</main>
      <Footer variant="auth0" className="bg-white sm:bg-steel-100" />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Page
