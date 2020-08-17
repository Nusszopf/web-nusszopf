import PropTypes from 'prop-types'
import classnames from 'classnames'
import NewsletterForm from './NewsletterForm'

const NewsletterSection = ({ className }) => {
  return (
    <div id="newsletter" className={classnames('px-6 py-12 sm:px-16 bg-blue-400', className)}>
      <div className="lg:container sm:max-w-xl sm:mx-auto">
        <h3 className="mb-4 text-3xl font-bold text-yellow-300 ">Newsletter</h3>
        <div className="h-full lg:flex">
          <div className="lg:w-1/2">
            <p className="text-2xl leading-snug text-yellow-300">
              Wir möchten dich mindestens einmal pro Monat zu allen relevaten Informationen und Neuigkeiten zum Nusszopf
              informieren. Durch die Anmeldung bekommst du die News von uns direkt in deinen Posteingang.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-16">
            <NewsletterForm />
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
