import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string, mixed } from 'yup'

import { Route, Button, Input, Text, Checkbox } from 'ui-library/stories/atoms'
import useNewsletter from '~/utils/services/newsletter.service'
import { newsletterData } from '~/assets/data'

const MAX_NAME_LEN = 50

const NewsletterForm = props => {
  const { loading, subscribeToNewsletter } = useNewsletter()

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
        <Form>
          <Field
            as={Input}
            size="large"
            autoComplete="off"
            name="name"
            type="text"
            aria-label={newsletterData.subscribe.name.meta}
            placeholder={newsletterData.subscribe.name.meta}
            disabled={loading}
          />
          <ErrorMessage variant="textSm" className="mt-2 ml-6 italic text-yellow-100" component={Text} name="name" />
          <Field
            as={Input}
            size="large"
            className="mt-6"
            autoComplete="off"
            name="email"
            type="email"
            aria-label={newsletterData.subscribe.email.meta}
            placeholder={newsletterData.subscribe.email.meta}
            disabled={loading}
          />
          <ErrorMessage variant="textSm" className="mt-2 ml-6 italic text-yellow-100" component={Text} name="email" />
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
                    href="/privacy"
                    title={newsletterData.subscribe.privacy.label.meta}
                    ariaLabel={newsletterData.subscribe.privacy.label.meta}>
                    {newsletterData.subscribe.privacy.label.textB}
                  </Route>
                </>
              }
            />
          </div>
          <ErrorMessage variant="textSm" className="mt-2 ml-8 italic text-yellow-100" component={Text} name="privacy" />
          <div className="flex justify-center">
            <Button className="mt-10 sm:mt-12" type="submit" size="large" disabled={loading}>
              Anmelden
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NewsletterForm
