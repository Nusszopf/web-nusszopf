import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text, TEXT_TYPE } from '../../stories/atoms'
import { Frame } from '../../stories/templates'
import NewsletterForm from './NewsletterForm'

const NewsletterSection = ({ className }) => {
  return (
    <Frame id="newsletter" className={classnames('py-12 bg-blue-400 text-yellow-300', className)}>
      <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-4 ">
        Newsletter
      </Text>
      <div className="h-full lg:flex">
        <div className="lg:w-1/2">
          <Text type={TEXT_TYPE.textLg}>
            Wir möchten dich mindestens einmal pro Monat zu allen relevaten Informationen und Neuigkeiten zum Nusszopf
            informieren. Durch die Anmeldung bekommst du die News von uns direkt in deinen Posteingang.
          </Text>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16">
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
