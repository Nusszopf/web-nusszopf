import PropTypes from 'prop-types'
import classnames from 'classnames'

import useNewsletter from './useNewsletter'
import NewsletterForm from './NewsletterForm'
import { Text } from '../../stories/atoms'

const NewsletterSection = ({ className }) => {
  const { error, success, loading, onSubmit, onChange } = useNewsletter()
  return (
    <div id="newsletter" className={classnames('px-6 py-12 sm:px-16 bg-blue-400', className)}>
      <div className="lg:container sm:max-w-xl sm:mx-auto">
        <Text as="h3" className="mb-4 text-3xl font-bold text-yellow-300 ">
          Newsletter
        </Text>
        <div className="h-full lg:flex">
          <div className="lg:w-1/2">
            <Text className="text-2xl leading-snug text-yellow-300">
              Wir möchten dich mindestens einmal pro Monat zu allen relevaten Informationen und Neuigkeiten zum Nusszopf
              informieren. Durch die Anmeldung bekommst du die News von uns direkt in deinen Posteingang.
            </Text>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16">
            <NewsletterForm error={error} success={success} loading={loading} onSubmit={onSubmit} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

NewsletterSection.propTypes = {
  className: PropTypes.string,
}

export default NewsletterSection
