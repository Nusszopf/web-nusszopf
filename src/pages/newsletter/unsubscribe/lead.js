import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Page } from '../../../containers'
import { Input, INPUT_COLORS, Button, BTN_COLORS, Text, TEXT_TYPE, ROUTE_TYPES, Route } from '../../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../../stories/molecules'
import { FrameFullCenter } from '../../../stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'
import { SVGNusszopfBigYellowBlue } from '../../../assets'
import { FOOTER_TYPE } from '../../../containers/Footer/Footer'

const UnsubscribeLead = () => {
  const { loading, error, success, handleChange, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary} noindex={true}>
      <FrameFullCenter fullScreen={false}>
        <div className="max-w-xl mx-auto">
          <Route
            type={ROUTE_TYPES.svg}
            className="block w-40 mx-auto mb-12 sm:w-48 sm:mb-16"
            href="/"
            title="Zum Nusszopf"
            ariaLabel="Zum Nusszopf">
            <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
          </Route>
          <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-8 sm:text-center">
            Newsletter&shy;abmeldung
          </Text>
          <Text className="mb-4 hyphens-auto">Bitte trage die E-Mail-Adresse ein, die Du abmelden möchtest:</Text>
          <Formik
            className="mx-auto"
            initialValues={{
              email: '',
            }}
            validationSchema={object({
              email: string()
                .email('Bitte trage eine valide E-Mail-Adresse ein.')
                .required('Bitte trage eine E-Mail-Adresse ein.'),
            })}
            onSubmit={unsubscribeFromNewsletter}>
            <Form onChange={handleChange}>
              <Field
                as={Input}
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
              <div className="mt-12">
                {error ? (
                  <Alert
                    type={ALERT_TYPES.error}
                    text="Sorry, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder melde dich bei mail@nusszopf.org."
                  />
                ) : success ? (
                  <Alert
                    type={ALERT_TYPES.success}
                    text="Bitte überprüfe deinen Posteingang und bestätige deine Abmeldung."
                  />
                ) : loading ? (
                  <Alert type={ALERT_TYPES.loading} text="Deine Abmeldung wird bearbeitet." />
                ) : (
                  <div className="text-center">
                    <Button color={BTN_COLORS.blue400Yellow300} type="submit" label="Abmelden" />
                  </div>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </FrameFullCenter>
    </Page>
  )
}

export default UnsubscribeLead
