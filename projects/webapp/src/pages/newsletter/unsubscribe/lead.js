import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Page } from '../../../containers'
import { Input, Button, Text, Route } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'
import { FOOTER_TYPE } from '../../../containers/Footer/Footer'
import { SVGNusszopfLogoBig } from '../../../assets/logos'
import { newsletterData } from '../../../assets/data'

const UnsubscribeLead = () => {
  const { loading, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page
      className="text-blue-400 bg-white sm:bg-blue-400"
      showFooter={true}
      footerType={FOOTER_TYPE.secondary}
      noindex={true}>
      <FramedCard className="bg-white">
        <div className="max-w-xl mx-auto">
          <Route
            variant="svg"
            className="block w-40 mx-auto"
            href="/"
            title={newsletterData.unsubscribe.logo}
            ariaLabel={newsletterData.unsubscribe.logo}>
            <SVGNusszopfLogoBig className="flex-shrink-0 w-full" />
          </Route>
          <Text as="h1" variant="textXl" className="mt-10 mb-5 sm:mt-12 sm:text-center">
            {newsletterData.unsubscribe.heading}
          </Text>
          <Text variant="textSmMedium" className="mb-4 hyphens-auto">
            {newsletterData.unsubscribe.description}
          </Text>
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
                name="email"
                type="email"
                aria-label={newsletterData.unsubscribe.email.meta}
                placeholder={newsletterData.unsubscribe.email.meta}
                disabled={loading}
                color="whiteBlue400"
              />
              <ErrorMessage variant="textSm" className="mt-2 ml-6 italic" component={Text} name="email" />
              <div className="mt-6 text-center">
                <Button color="whiteBlue400" type="submit" disabled={loading}>
                  Abmelden
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </FramedCard>
    </Page>
  )
}

export default UnsubscribeLead
