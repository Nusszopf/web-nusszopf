import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Page } from '../../../containers'
import { Input, INPUT_COLORS, Button, BTN_COLORS, Text, TEXT_TYPE, ROUTE_TYPES, Route } from '../../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../../stories/molecules'
import { FrameFullCenter } from '../../../stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'
import { FOOTER_TYPE } from '../../../containers/Footer/Footer'
import { SVGNusszopfBigYellowBlue } from '../../../assets/logos'
import { newsletterData } from '../../../assets/data'

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
            title={newsletterData.unsubscribe.logo}
            ariaLabel={newsletterData.unsubscribe.logo}>
            <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
          </Route>
          <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-8 sm:text-center">
            {newsletterData.unsubscribe.heading}
          </Text>
          <Text className="mb-4 hyphens-auto">{newsletterData.unsubscribe.description}</Text>
          <Formik
            className="mx-auto"
            initialValues={{
              email: '',
            }}
            validationSchema={object({
              email: string()
                .email(newsletterData.unsubscribe.email.errorMessages[0])
                .required(newsletterData.unsubscribe.email.errorMessages[1]),
            })}
            onSubmit={unsubscribeFromNewsletter}>
            <Form onChange={handleChange}>
              <Field
                as={Input}
                autoComplete="off"
                name="email"
                type="email"
                aria-label={newsletterData.unsubscribe.email.meta}
                placeholder={newsletterData.unsubscribe.email.meta}
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
                  <Alert type={ALERT_TYPES.error} text={newsletterData.unsubscribe.alerts.error} />
                ) : success ? (
                  <Alert type={ALERT_TYPES.success} text={newsletterData.unsubscribe.alerts.success} />
                ) : loading ? (
                  <Alert type={ALERT_TYPES.loading} text={newsletterData.unsubscribe.alerts.loading} />
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
