import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Input, Button, Text, Route } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import useNewsletter from '~/utils/services/newsletter.service'
import { withAuth } from '~/utils/hoc'
import { Page } from '~/components'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData as cms } from '~/assets/data'

const UnsubscribeLead = () => {
  const { loading, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page
      className="bg-white sm:bg-steel-100"
      navHeader={{ visible: true }}
      footer={{ className: 'bg-white sm:bg-steel-100' }}
      noindex={true}>
      <FramedCard className="bg-white text-steel-700">
        <Route variant="svg" href="/" title={cms.unsubscribe.logo} ariaLabel={cms.unsubscribe.logo}>
          <SVGNusszopfLogoBig className="h-full w-36" />
        </Route>
        <Text as="h1" variant="textLgSemi" className="mt-10 mb-5 sm:mt-12 sm:text-center">
          {cms.unsubscribe.heading}
        </Text>
        <Text variant="textSmMedium" className="mb-4">
          {cms.unsubscribe.description}
        </Text>
        <div className="w-full">
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={object({
              email: string()
                .email(cms.unsubscribe.email.errorMessages[0])
                .required(cms.unsubscribe.email.errorMessages[1]),
            })}
            onSubmit={unsubscribeFromNewsletter}>
            <Form>
              <Field
                as={Input}
                autoComplete="off"
                name="email"
                type="email"
                aria-label={cms.unsubscribe.email.meta}
                placeholder={cms.unsubscribe.email.meta}
              />
              <ErrorMessage
                variant="textSm"
                className="mt-2 ml-4 italic text-warning-700"
                component={Text}
                name="email"
              />
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

export default withAuth(UnsubscribeLead, { isAuthRequired: false })
