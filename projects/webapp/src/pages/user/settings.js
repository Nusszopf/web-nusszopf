import { FramedGridCard } from 'ui-library/stories/templates'
import { Text, Link, Checkbox, Route, Button } from 'ui-library/stories/atoms'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, mixed } from 'yup'
import { Page } from '../../containers'
import { useFetchUser } from '../../utils/services/user.service'
import { InfoCard } from 'ui-library/stories/molecules'
import { settingsData } from '../../assets/data'

// Todo: hasura request user+lead object

const Settings = () => {
  const { user, loading } = useFetchUser({ required: true })
  console.log(user)

  const handleSubscribe = ({ privacy }) => {
    // request to hasura
  }

  const handleUnsubscribe = () => {
    const isConfirmed = confirm(settingsData.newsletter.unsubscribe.confirm)
    if (isConfirmed) {
      // request to hasura
    }
  }

  const handleDelete = () => {
    const isConfirmed = confirm(settingsData.delete.confirm)
    if (isConfirmed) {
      // request to hasura
    }
  }

  return (
    <Page showNavHeader={true} showFooter={false} noindex={true} className="text-gray-600 bg-gray-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-gray-100"
        headerColor="bg-gray-200 lg:bg-gray-100">
        <FramedGridCard.Header className="bg-gray-200">
          <div id="header" className="flex flex-col md:flex-row md:justify-between md:flex-row-reverse md:items-center">
            <Text as="h1" variant="textLg">
              {settingsData.title}
            </Text>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
              <div className="ml-4">
                <Text variant="textSmMedium">Nickname</Text>
                <Text variant="textSm">email@email.de</Text>
              </div>
            </div>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body variant="twoCols" className="bg-white">
          <FramedGridCard.Body.Col>
            <div id="newsletter">
              <Text variant="textMd" className="mb-2">
                {settingsData.newsletter.title}
              </Text>
              {true ? (
                <Formik
                  initialValues={{ privacy: false }}
                  onSubmit={handleSubscribe}
                  validationSchema={object({
                    privacy: mixed().oneOf([true], 'Bitte bestätige die Datenschutzerklärung'),
                  })}>
                  {formikProps => (
                    <Form>
                      <Text variant="textSm" className="mb-2">
                        {settingsData.newsletter.subscribe.description}
                      </Text>
                      <Field
                        as={Checkbox}
                        name="privacy"
                        aria-label="Datenschutzerklärung"
                        disabled={loading}
                        checked={formikProps.values.privacy}
                        label={
                          <>
                            {settingsData.newsletter.subscribe.privacy[0]}{' '}
                            <Route
                              className="italic"
                              color="gray600"
                              href={settingsData.newsletter.subscribe.privacy[1].href}
                              title={settingsData.newsletter.subscribe.privacy[1].meta}
                              ariaLabel={settingsData.newsletter.subscribe.privacy[1].meta}>
                              {settingsData.newsletter.subscribe.privacy[1].text}
                            </Route>
                          </>
                        }
                      />
                      <ErrorMessage
                        name="privacy"
                        variant="textSm"
                        className="mt-1 mb-3 ml-6 italic"
                        component={Text}
                      />
                      <Button type="submit" color="whiteGray600" className="block mt-4">
                        {settingsData.newsletter.subscribe.action}
                      </Button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <>
                  <Text variant="textSm" className="mb-2">
                    {settingsData.newsletter.unsubscribe.description}
                  </Text>
                  <Button onClick={handleUnsubscribe} color="whiteGray600" className="block mt-4">
                    {settingsData.newsletter.unsubscribe.action}
                  </Button>
                </>
              )}
            </div>
            <div id="sponsoring" className="mt-12">
              <Text variant="textMd" className="mb-2">
                {settingsData.sponsoring.title}
              </Text>
              <Text variant="textSm">{settingsData.sponsoring.description}</Text>
              <Link
                variant="button"
                color="whiteGray600"
                className="block mt-4"
                title={settingsData.sponsoring.action.meta}
                ariaLabel={settingsData.sponsoring.action.meta}
                href={settingsData.sponsoring.action.href}>
                {settingsData.sponsoring.action.text}
              </Link>
            </div>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col>
            <InfoCard className="mt-12 text-gray-700 bg-gray-200 lg:ml-16 lg:mt-0">
              {settingsData.info[0]}
              <Link
                href={settingsData.info[1].href}
                textVariant="textSm"
                title={settingsData.info[1].meta}
                ariaLabel={settingsData.info[1].meta}>
                {settingsData.info[1].text}
              </Link>{' '}
              {settingsData.info[2]}
            </InfoCard>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col>
            <div id="delete" className="mt-10 text-warning">
              <Text variant="textMd" className="mb-2">
                {settingsData.delete.title}
              </Text>
              <Text variant="textSm">{settingsData.delete.description}</Text>
              <Button onClick={handleDelete} variant="outline" color="warning" className="block mt-4">
                {settingsData.delete.action}
              </Button>
            </div>
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

export default Settings
