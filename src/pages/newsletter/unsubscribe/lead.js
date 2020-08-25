import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { ArrowRight } from 'react-feather'

import { Page, PageBrand } from '../../../containers'
import { Route, ROUTE_TYPES, Input, INPUT_COLORS, Button, BTN_COLORS, Text, TEXT_TYPE } from '../../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../../stories/molecules'
import { FrameFullCenter } from '../../../stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'
import { SVGNusszopfLogoBigYellow } from '../../../assets'

const UnsubscribeLead = () => {
  const { loading, error, success, handleChange, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page showFooter={false}>
      <FrameFullCenter
        className="text-yellow-300 bg-blue-400"
        flex="justify-center"
        footer={<PageBrand className="mt-24" color="blue" />}>
        <div className="w-full max-w-xl sm:mt-12 xl:mt-0">
          <SVGNusszopfLogoBigYellow
            className="flex-shrink-0 w-48 mx-auto mb-10 sm:mb-20 xl:mb-16"
            title="<3 Nusszopf"
            aria-label="Nusszopf"
          />
          <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-6 text-yellow-300">
            Newsletter&shy;abmeldung
          </Text>
          <Text className="mb-8">Bitte trage die E-Mail-Adresse ein, die Du abmelden möchtest:</Text>
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
              {error ? (
                <Alert
                  className="mt-6"
                  type={ALERT_TYPES.error}
                  text="Sorry, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder melde dich bei mail@nusszopf.org."
                />
              ) : success ? (
                <Alert
                  className="mt-6"
                  type={ALERT_TYPES.success}
                  text="Bitte überprüfe deinen Posteingang und bestätige deine Abmeldung."
                />
              ) : loading ? (
                <Alert className="mt-6" type={ALERT_TYPES.loading} text="Deine Abmeldung wird bearbeitet." />
              ) : null}
              {(!success && !error && !loading) || error ? (
                <div className="mt-10">
                  <Button color={BTN_COLORS.blue400Yellow300} type="submit" label="Abmelden" />
                  <Route
                    className="mt-4 sm:ml-4 sm:mt-0"
                    type={ROUTE_TYPES.buttonIconRight}
                    color={BTN_COLORS.blue400blue200}
                    icon={ArrowRight}
                    href="/"
                    title="Zum Nusszopf"
                    ariaLabel="Zum Nusszopf">
                    Zum Nusszopf
                  </Route>
                </div>
              ) : success ? (
                <Route
                  className="mt-10"
                  type={ROUTE_TYPES.buttonIconRight}
                  color={BTN_COLORS.blue400Yellow300}
                  icon={ArrowRight}
                  href="/"
                  title="Zum Nusszopf"
                  ariaLabel="Zum Nusszopf">
                  Zum Nusszopf
                </Route>
              ) : null}
            </Form>
          </Formik>
        </div>
      </FrameFullCenter>
    </Page>
  )
}

export default UnsubscribeLead
