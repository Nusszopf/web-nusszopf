import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string, mixed } from 'yup'
import { Button, BTN_COLORS, Input, INPUT_COLORS, Text, TEXT_TYPE, Checkbox } from '../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../stories/molecules'
import useNewsletter from './useNewsletter'

const MAX_NAME_LEN = 50

const NewsletterForm = props => {
  const { error, success, loading, handleSubmit, handleChange } = useNewsletter()

  return (
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
      onSubmit={handleSubmit}
      {...props}>
      {({ values }) => (
        <Form onChange={handleChange}>
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
            <>
              {error ? (
                <Alert
                  type={ALERT_TYPES.error}
                  text="Sorry, es ist ein Fehler aufgetreten. Bitte veruche es nochmal oder melde dich bei mail@nusszopf.org."
                />
              ) : success ? (
                <Alert type={ALERT_TYPES.success} text="ine E-Mail ist auf dem Weg zu dir." />
              ) : (
                <Alert type={ALERT_TYPES.loading} text="Deine Anmeldung wird bearbeitet." />
              )}
            </>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm
