import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { truncate } from 'lodash'
import classnames from 'classnames'

import { Link } from 'ui-library/stories/atoms'
import { NavHeader } from 'ui-library/stories/organisims'
import { pageData as cms } from '../../assets/data'
import { SVGPoweredByVercel } from '../../assets/images'

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
      <main className={classnames('flex-1 bg-white sm:bg-steel-100', className)}>{children}</main>
      <footer className="flex justify-center w-full p-6 bg-white bg-steel-100">
        <Link
          variant="svg"
          href="https://vercel.com?utm_source=nusszopf&utm_campaign=oss"
          title={cms.footer.vercel}
          ariaLabel={cms.footer.vercel}>
          <SVGPoweredByVercel className="w-32 h-full" />
        </Link>
      </footer>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Page
