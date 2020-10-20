import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Page } from '../../../containers'
import { Input, Button, Text, Route } from 'ui-library/stories/atoms'
import { FrameFullCenter } from 'ui-library/stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'
import { FOOTER_TYPE } from '../../../containers/Footer/Footer'
import { SVGNusszopfBigYellowBlue } from '../../../assets/logos'
import { newsletterData } from '../../../assets/data'

const UnsubscribeLead = () => {
  const { loading, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary} noindex={true}>
      <FrameFullCenter fullScreen={false}>
        <div className="max-w-xl mx-auto">
          <Route
            variant="svg"
            className="block w-40 mx-auto mb-12 sm:w-48 sm:mb-16"
            href="/"
            title={newsletterData.unsubscribe.logo}
            ariaLabel={newsletterData.unsubscribe.logo}>
            <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
          </Route>
          <Text as="h1" variant="titleMd" className="mb-8 sm:text-center">
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
            <Form>
              <Field
                as={Input}
                autoComplete="off"
                size="large"
                name="email"
                type="email"
                aria-label={newsletterData.unsubscribe.email.meta}
                placeholder={newsletterData.unsubscribe.email.meta}
                disabled={loading}
                color="yellow300Blue400"
              />
              <ErrorMessage
                variant="textSm"
                className="mt-2 ml-6 italic text-yellow-100"
                component={Text}
                name="email"
              />
              <div className="mt-12">
                <div className="text-center">
                  <Button color="blue400Yellow300" type="submit" size="large" disabled={loading}>
                    Abmelden
                  </Button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </FrameFullCenter>
    </Page>
  )
}

export default UnsubscribeLead
