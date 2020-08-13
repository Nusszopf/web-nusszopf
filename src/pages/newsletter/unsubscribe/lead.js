import { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import classnames from 'classnames'
import { object, string } from 'yup'
import { Loader, CheckCircle, XCircle } from 'react-feather'
import { Page } from '../../../components/templates'

const UnsubscribeLead = () => {
  const [hasFailed, setFailed] = useState(false)
  const [isSuccessful, setSuccessful] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(false)
    setFailed(false)
    setSuccessful(false)
  }

  const handleSubmit = async values => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.DOMAIN}/api/newsletter/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      })
      if (response.ok) {
        setSuccessful(true)
      } else {
        setFailed(true)
        // TODO: logError(`newsletter-unsubscribe: ${my-response-message}`)
      }
    } catch (error) {
      setFailed(true)
      // TODO: logError(`newsletter-unsubscribe: ${error.message}`)
    }
    setLoading(false)
  }

  // TODO: ui design
  return (
    <Page>
      <div className="h-full px-4 py-8 bg-blue-400">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold leading-tight text-yellow-300">Abmeldung von Newsletter</h1>
          <Formik
            className="mt-8"
            initialValues={{
              email: '',
            }}
            validationSchema={object({
              email: string()
                .email('Bitte trage eine valide E-Mail-Adresse ein.')
                .required('Bitte trage eine E-Mail-Adresse ein.'),
            })}
            onSubmit={handleSubmit}>
            <Form onChange={handleChange}>
              <Field
                className={classnames(
                  'inline-block w-full px-5 py-4 mt-4 text-lg text-yellow-300 placeholder-yellow-300 transition-shadow duration-150 ease-in-out bg-blue-400 border-2 border-yellow-300 rounded-full shadow-xs appearance-none hover:shadow-outline:yellow-300 focus:placeholder-blue-400 focus:outline-none focus:shadow-outline:yellow-300',
                  { 'opacity-50 cursor-not-allowed': isLoading }
                )}
                autoComplete="off"
                name="email"
                type="email"
                aria-label="E-Mail-Adresse"
                placeholder="E-Mail-Adresse"
                disabled={isLoading}
              />
              <ErrorMessage className="mt-2 ml-6 text-lg italic text-yellow-100" component="p" name="email" />
              {!isSuccessful && !hasFailed && !isLoading ? (
                <button
                  type="submit"
                  className="w-full px-5 py-4 mt-6 text-lg font-bold text-blue-400 transition-shadow duration-150 ease-in-out bg-yellow-300 rounded-full outline-none sm:px-8 sm:w-auto hover:shadow-outline:yellow-300 focus:outline-none focus:shadow-outline:yellow-300">
                  Abmelden
                </button>
              ) : (
                <div className="flex p-5 mt-6 text-lg text-blue-100 bg-blue-600 rounded-lg">
                  {hasFailed ? (
                    <>
                      <XCircle className="flex-shrink-0 " />
                      <p className="ml-3">
                        Sorry, es ist ein Fehler aufgetreten. Bitte veruche es nochmal oder melde dich bei
                        mail@nusszopf.org.
                      </p>
                    </>
                  ) : isSuccessful ? (
                    <>
                      <CheckCircle className="flex-shrink-0 " />
                      <p className="ml-3">Eine Bestätigungs-E-Mail ist auf dem Weg zu dir.</p>
                    </>
                  ) : (
                    <>
                      <Loader className="flex-shrink-0 animate-spin" />
                      <p className="ml-3">Deine Abmeldung wird bearbeitet.</p>
                    </>
                  )}
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </Page>
  )
}

export default UnsubscribeLead
