import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Input, Button, Text, Route } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import useNewsletter from '~/utils/services/newsletter.service'
import { Page } from '~/components'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData } from '~/assets/data'

const UnsubscribeLead = () => {
  const { loading, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page
      className="bg-blue-300 text-steel-700"
      navHeader={{ visible: process.env.ENV !== 'production', goBackUri: '/' }}
      footer={{ className: 'bg-blue-300' }}
      noindex={true}>
      <FramedCard className="bg-white">
        <Route
          variant="svg"
          className="block mx-auto mt-6 w-36 sm:mt-0"
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
        <div className="w-full">
          <Formik
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
              />
              <ErrorMessage variant="textSm" className="mt-2 ml-4 italic" component={Text} name="email" />
              <div className="mt-6 text-center">
                <Button type="submit" disabled={loading} className="bg-steel-100">
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
