import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string, mixed } from 'yup'
import {
  Route,
  ROUTE_TEXT_COLORS,
  Button,
  BTN_COLORS,
  Input,
  INPUT_COLORS,
  Text,
  TEXT_TYPE,
  Checkbox,
} from '../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../stories/molecules'
import useNewsletter from '../../utils/services/newsletter.service'
import { newsletterData } from '../../assets/data'

const MAX_NAME_LEN = 50

const NewsletterForm = props => {
  const { error, success, loading, subscribeToNewsletter, handleChange } = useNewsletter()

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        privacy: false,
      }}
      validationSchema={object({
        name: string()
          .max(MAX_NAME_LEN, newsletterData.subscribe.name.errorMessages[0])
          .required(newsletterData.subscribe.name.errorMessages[1]),
        email: string()
          .email(newsletterData.subscribe.email.errorMessages[0])
          .required(newsletterData.subscribe.email.errorMessages[1]),
        privacy: mixed().oneOf([true], newsletterData.subscribe.privacy.errorMessages[0]),
      })}
      onSubmit={subscribeToNewsletter}
      {...props}>
      {({ values }) => (
        <Form onChange={handleChange}>
          <Field
            as={Input}
            autoComplete="off"
            name="name"
            type="text"
            aria-label={newsletterData.subscribe.name.meta}
            placeholder={newsletterData.subscribe.name.meta}
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
            className="mt-6"
            autoComplete="off"
            name="email"
            type="email"
            aria-label={newsletterData.subscribe.email.meta}
            placeholder={newsletterData.subscribe.email.meta}
            disabled={loading}
            color={INPUT_COLORS.yellow300blue400}
          />
          <ErrorMessage
            type={TEXT_TYPE.textSm}
            className="mt-2 ml-6 italic text-yellow-100"
            component={Text}
            name="email"
          />
          <div className="mt-6">
            <Field
              as={Checkbox}
              className="text-yellow-300"
              checked={values.privacy}
              disabled={loading}
              name="privacy"
              aria-label={newsletterData.subscribe.privacy.meta}
              label={
                <>
                  {newsletterData.subscribe.privacy.label.textA}{' '}
                  <Route
                    className="italic"
                    color={ROUTE_TEXT_COLORS.yellow300}
                    href="/privacy"
                    title={newsletterData.subscribe.privacy.label.meta}
                    ariaLabel={newsletterData.subscribe.privacy.label.meta}>
                    {newsletterData.subscribe.privacy.label.textB}
                  </Route>
                </>
              }
            />
          </div>
          <ErrorMessage
            type={TEXT_TYPE.textSm}
            className="mt-2 ml-8 italic text-yellow-100"
            component={Text}
            name="privacy"
          />
          <div className="flex justify-center">
            {!success && !error && !loading ? (
              <Button color={BTN_COLORS.blue400Yellow300} className="mt-10 sm:mt-12" type="submit" label="Anmelden" />
            ) : (
              <>
                {error ? (
                  <Alert className="mt-6" type={ALERT_TYPES.error} text={newsletterData.subscribe.alerts.error} />
                ) : success ? (
                  <Alert className="mt-6" type={ALERT_TYPES.success} text={newsletterData.subscribe.alerts.success} />
                ) : (
                  <Alert className="mt-6" type={ALERT_TYPES.loading} text={newsletterData.subscribe.alerts.loading} />
                )}
              </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm
