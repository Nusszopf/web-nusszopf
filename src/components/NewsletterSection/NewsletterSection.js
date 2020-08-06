import { useState } from 'react'
import PropTypes from 'prop-types'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import classnames from 'classnames'
import { Loader, CheckCircle, XCircle } from 'react-feather'

const MAX_NAME_LEN = 100

const NewsletterSection = ({ className }) => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = values => {
    console.log(values)
    setLoading(true)
    // todo: api-call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 500)
  }

  return (
    <div id="newsletter" className={classnames(className, 'px-4 py-12 bg-blue-400')}>
      <div className="xl:container xl:mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-yellow-300">Newsletter</h3>
          <p className="mt-4 text-2xl leading-snug text-yellow-300">
            Wir möchten dich mindestens einmal pro Monat zu allen relevaten Informationen und Neuigkeiten zum Nusszopf
            informieren. Durch die Anmeldung bekommst du die News von uns direkt in deinen Posteingang.
          </p>
        </div>
        <div className="mt-8">
          <Formik
            initialValues={{
              name: '',
              email: '',
            }}
            validationSchema={object({
              name: string()
                .max(MAX_NAME_LEN, `Der Name sollte nicht länger als ${MAX_NAME_LEN} Zeichen sein`)
                .required('Bitte trage einen Namen ein.'),
              email: string()
                .email('Bitte trage eine valide E-Mail-Adresse ein.')
                .required('Bitte trage eine E-Mail-Adresse ein.'),
            })}
            onSubmit={handleSubmit}>
            <Form>
              <Field
                className="inline-block w-full px-5 py-4 text-lg text-yellow-300 placeholder-yellow-300 transition-shadow duration-150 ease-in-out bg-blue-400 border-2 border-yellow-300 rounded-full shadow-xs appearance-none hover:shadow-outline:yellow-300 focus:placeholder-blue-400 focus:outline-none focus:shadow-outline:yellow-300"
                autoComplete="off"
                name="name"
                type="text"
                aria-label="Name"
                placeholder="Name"
              />
              <ErrorMessage className="mt-2 ml-6 text-lg italic text-yellow-100" component="p" name="name" />
              <Field
                className="inline-block w-full px-5 py-4 mt-4 text-lg text-yellow-300 placeholder-yellow-300 transition-shadow duration-150 ease-in-out bg-blue-400 border-2 border-yellow-300 rounded-full shadow-xs appearance-none hover:shadow-outline:yellow-300 focus:placeholder-blue-400 focus:outline-none focus:shadow-outline:yellow-300"
                autoComplete="off"
                name="email"
                type="email"
                aria-label="E-Mail-Adresse"
                placeholder="E-Mail-Adresse"
              />
              <ErrorMessage className="mt-2 ml-6 text-lg italic text-yellow-100" component="p" name="email" />
              {!success && !error && !loading ? (
                <button
                  type="submit"
                  className="w-full px-5 py-4 mt-6 text-lg font-bold text-blue-400 transition-shadow duration-150 ease-in-out bg-yellow-300 rounded-full outline-none hover:shadow-outline:yellow-300 focus:outline-none focus:shadow-outline:yellow-300">
                  Anmelden
                </button>
              ) : (
                <div className="flex p-5 mt-6 text-lg text-blue-100 bg-blue-600 rounded-lg">
                  {error ? (
                    <>
                      <XCircle className="flex-shrink-0 " />
                      <p className="ml-3">
                        Sorry, es ist ein Fehler aufgetreten. Bitte veruche es nochmal oder melde dich bei
                        mail@nusszopf.org.
                      </p>
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle className="flex-shrink-0 " />
                      <p className="ml-3">Eine E-Mail ist auf dem Weg zu dir.</p>
                    </>
                  ) : (
                    <>
                      <Loader className="flex-shrink-0 animate-spin" />
                      <p className="ml-3">Deine Anmeldung wird bearbeitet.</p>
                    </>
                  )}
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

NewsletterSection.propTypes = {
  className: PropTypes.string,
}

export default NewsletterSection
