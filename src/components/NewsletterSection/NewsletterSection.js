import PropTypes from 'prop-types'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string, mixed } from 'yup'
import classnames from 'classnames'
import { Loader, CheckCircle, XCircle } from 'react-feather'
import { Button, BTN_COLORS, Input, INPUT_COLORS, Text, TEXT_TYPE, Checkbox } from '../../stories/atoms'

const MAX_NAME_LEN = 50

const NewsletterSection = ({ className, error, success, loading, onSubmit, onChange }) => {
  return (
    <div id="newsletter" className={classnames(className, 'px-6 py-12 sm:px-16 bg-blue-400')}>
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
            <Formik
              initialValues={{
                name: '',
                email: '',
                privacy: false,
              }}
              validationSchema={object({
                name: string()
                  .max(MAX_NAME_LEN, `Der Name sollte nicht länger als ${MAX_NAME_LEN} Zeichen sein`)
                  .required('Bitte trage einen Namen ein.'),
                email: string()
                  .email('Bitte trage eine valide E-Mail-Adresse ein.')
                  .required('Bitte trage eine E-Mail-Adresse ein.'),
                privacy: mixed().oneOf([true], 'Bitte bestätige die Datenschutzerklärung.'),
              })}
              onSubmit={onSubmit}>
              {({ values }) => (
                <Form onChange={onChange}>
                  <Field
                    as={Input}
                    autoComplete="off"
                    name="name"
                    type="text"
                    aria-label="Name"
                    placeholder="Name"
                    disabled={loading}
                    color={INPUT_COLORS.yellow300blue400}
                  />
                  <ErrorMessage
                    type={TEXT_TYPE.textSm}
                    className="mt-2 ml-6 italic text-yellow-100"
                    component={Text}
                    name="name"
                  />
                  <Field
                    as={Input}
                    className="mt-4"
                    autoComplete="off"
                    name="email"
                    type="email"
                    aria-label="E-Mail-Adresse"
                    placeholder="E-Mail-Adresse"
                    disabled={loading}
                    color={INPUT_COLORS.yellow300blue400}
                  />
                  <ErrorMessage
                    type={TEXT_TYPE.textSm}
                    className="mt-2 ml-6 italic text-yellow-100"
                    component={Text}
                    name="email"
                  />
                  <div className="mt-4">
                    <Field
                      as={Checkbox}
                      className="text-yellow-300"
                      checked={values.privacy}
                      disabled={loading}
                      name="privacy"
                      aria-label="Bestätigung der Datenschutzerklärung"
                      label="Bestätigung der Datenschutzerklärung"
                    />
                  </div>
                  <ErrorMessage
                    type={TEXT_TYPE.textSm}
                    className="mt-2 ml-6 italic text-yellow-100"
                    component={Text}
                    name="privacy"
                  />
                  {!success && !error && !loading ? (
                    <Button color={BTN_COLORS.blue400Yellow300} className="mt-6" type="submit" label="Anmelden" />
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
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

NewsletterSection.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

export default NewsletterSection
