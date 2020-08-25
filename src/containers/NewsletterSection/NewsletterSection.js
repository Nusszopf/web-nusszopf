import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text, TEXT_TYPE } from '../../stories/atoms'
import { Frame } from '../../stories/templates'
import NewsletterForm from './NewsletterForm'

const NewsletterSection = ({ className }) => {
  return (
    <Frame id="newsletter" className={classnames('pt-12 pb-16 bg-blue-400 text-yellow-300', className)}>
      <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8">
        Nussiger Newsletter
      </Text>
      <div className="h-full lg:flex">
        <div className="mb-10 lg:w-1/2">
          <Text type={TEXT_TYPE.textLg}>
            Wir versorgen euch mit backfrischen Nusszopf&shy;neuigkeiten, inspirierenden Projekten und allem, was uns
            sonst noch so einfällt.
          </Text>
        </div>
        <div className="lg:mt-0 lg:w-1/2 lg:pl-16">
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
