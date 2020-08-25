import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text, TEXT_TYPE } from '../../stories/atoms'
import { Frame } from '../../stories/templates'
import NewsletterForm from './NewsletterForm'

const NewsletterSection = ({ className }) => {
  return (
    <Frame
      id="newsletter"
      className={classnames('pt-12 pb-16 bg-blue-400 text-yellow-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20', className)}>
      <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8 xl:mb-10">
        Nussiger Newsletter
      </Text>
      <div className="h-full lg:flex">
        <div className="mb-10 lg:w-1/2 lg:mb-0">
          <Text className="xl:max-w-lg" type={TEXT_TYPE.textLg}>
            Wir versorgen euch mit backfrischen Nusszopf&shy;neuigkeiten, inspirierenden Projekten und allem, was uns
            sonst noch so einfällt.
          </Text>
        </div>
        <div className="lg:mt-0 lg:w-1/2 lg:pl-12 xl:pl-0">
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
