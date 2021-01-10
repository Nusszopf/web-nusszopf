import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Text, Link } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import { newsletterData as cms } from '~/assets/data'
import NewsletterForm from './NewsletterForm'

const NewsletterSection = ({ className }) => {
  return (
    <Frame
      id="newsletter"
      className={classnames('pt-12 pb-16 bg-blue-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20', className)}>
      <Text as="h3" variant="titleMd" className="mb-8 xl:mb-10">
        {cms.subscribe.heading}
      </Text>
      <div className="h-full lg:flex">
        <div className="mb-10 lg:w-1/2 lg:mb-0">
          <Text variant="textLg">{cms.subscribe.description}</Text>
          <Text variant="textSm" className="mt-4">
            {cms.subscribe.contact.text}
            {': '}
            <Link
              color="current"
              textVariant="textSm"
              title={cms.subscribe.contact.link.meta}
              ariaLabel={cms.subscribe.contact.link.meta}
              href={cms.subscribe.contact.link.href}
              download>
              {cms.subscribe.contact.link.text}
            </Link>
          </Text>
        </div>
        <div className="lg:mt-0 lg:w-1/2 lg:ml-16">
          <NewsletterForm />
        </div>
      </div>
    </Frame>
  )
}

NewsletterSection.propTypes = {
  className: PropTypes.string,
}

export default NewsletterSection
