import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import SVG from 'react-inlinesvg'

import { Page, PageBrand } from '../../../containers'
import { Input, INPUT_COLORS, Button, BTN_COLORS, Text, TEXT_TYPE } from '../../../stories/atoms'
import { Alert, ALERT_TYPES } from '../../../stories/molecules'
import { FrameFullCenter } from '../../../stories/templates'
import useNewsletter from '../../../utils/services/newsletter.service'

const UnsubscribeLead = () => {
  const { loading, error, success, handleChange, unsubscribeFromNewsletter } = useNewsletter()

  return (
    <Page showFooter={false}>
      <FrameFullCenter
        className="text-yellow-300 bg-blue-400"
        flex="justify-center"
        footer={<PageBrand className="mt-24" color="pink" />}>
        <div className="w-full max-w-xl sm:mt-12">
          <SVG
            className="flex-shrink-0 w-48 mx-auto mb-10 sm:mb-20"
            src="/images/logos/nusszopf-big.svg"
            title="<3 Nusszopf"
            aria-label="Nusszopf"
          />
          <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-4 text-yellow-300">
            Abmeldung von Newsletter
          </Text>
          <Text className="mb-4">Bitte trage die E-Mail-Adresse ein, die Du abmelden möchtest:</Text>
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
              {!success && !error && !loading ? (
                <Button className="mt-6" color={BTN_COLORS.blue400Yellow300} type="submit" label="Abmelden" />
              ) : (
                <>
                  {error ? (
                    <Alert
                      type={ALERT_TYPES.error}
                      text="Sorry, es ist ein Fehler aufgetreten. Bitte veruche es nochmal oder melde dich bei mail@nusszopf.org. "
                    />
                  ) : success ? (
                    <Alert
                      type={ALERT_TYPES.success}
                      text="Bitte überprüfe deinen Posteingang und bestätige deine Abmeldung vom Nusszopf Newsletter. "
                    />
                  ) : (
                    <Alert type={ALERT_TYPES.loading} text="Deine Abmeldung wird bearbeitet." />
                  )}
                </>
              )}
            </Form>
          </Formik>
        </div>
      </FrameFullCenter>
    </Page>
  )
}

export default UnsubscribeLead
