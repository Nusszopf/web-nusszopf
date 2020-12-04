import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, mixed } from 'yup'
import { useRouter } from 'next/router'

import { Text, Link, Checkbox, Route, Button } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'
import { InfoCard, Avatar } from 'ui-library/stories/molecules'
import { useToasts } from 'ui-library/services/Toasts.service'
import apollo from '~/utils/services/apollo.service'
import { useEntireUser } from '~/utils/services/auth.service'
import { Page } from '~/components'
import { settingsData as cms } from '~/assets/data'

const Settings = () => {
  const { loading, ...user } = useEntireUser()
  const { notify } = useToasts()
  const router = useRouter()
  const [deleteUser] = apollo.useDeleteUser()
  const [addLead] = apollo.useAddLead()
  const [deleteLead] = apollo.useDeleteLead()
  const [updateLead] = apollo.useUpdateLead(user?.data?.id)

  const handleSubscribe = async ({ privacy }) => {
    notify({ type: 'loading', message: cms.newsletter.subscribe.notify.loading })
    try {
      const res = await addLead({
        variables: {
          email: user.data.email,
          name: user.auth.nickname,
          privacy,
        },
      })
      await updateLead({ variables: { id: res.data.insert_leads_one.id } })
      notify({ type: 'success', message: cms.newsletter.subscribe.notify.success })
    } catch (error) {
      notify({ type: 'error', message: cms.newsletter.subscribe.notify.error })
    }
  }

  const handleUnsubscribe = async () => {
    const isConfirmed = confirm(cms.newsletter.unsubscribe.confirm)
    if (isConfirmed) {
      notify({ type: 'loading', message: cms.newsletter.unsubscribe.notify.loading })
      try {
        await deleteLead({
          variables: { email: user.data.email },
        })
        notify({ type: 'success', message: cms.newsletter.unsubscribe.notify.success })
      } catch (error) {
        notify({ type: 'error', message: cms.newsletter.unsubscribe.notify.error })
      }
    }
  }

  const handleDelete = async () => {
    const isConfirmed = confirm(cms.delete.confirm)
    if (isConfirmed) {
      notify({ type: 'loading', message: cms.delete.notify.loading })
      try {
        await deleteUser({
          variables: { id: user.data.id },
        })
        router.push('/api/logout')
        notify({ type: 'success', message: cms.delete.notify.success })
      } catch (error) {
        notify({ type: 'error', message: cms.delete.notify.error })
      }
    }
  }

  return (
    <Page
      navHeader={{ visible: true, fixed: true, goBackUri: 'back' }}
      footer={{ className: 'bg-white lg:bg-steel-100' }}
      noindex={true}
      className="text-steel-700 bg-steel-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-steel-100"
        headerColor="bg-steel-200 lg:bg-steel-100">
        <FramedGridCard.Header className="bg-steel-200">
          <div id="header" className="flex flex-col md:flex-row md:justify-between md:flex-row-reverse md:items-center">
            <Text as="h1" variant="textLg">
              {cms.title}
            </Text>
            <Avatar user={user} className="mt-4 md:mt-0" />
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body className="bg-white">
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div id="newsletter">
              <Text variant="textMd" className="mb-2">
                {cms.newsletter.title}
              </Text>
              {!user?.data?.lead?.hasConfirmed ? (
                <Formik
                  initialValues={{ privacy: false }}
                  onSubmit={handleSubscribe}
                  validationSchema={object({
                    privacy: mixed().oneOf([true], cms.newsletter.subscribe.field.validation),
                  })}>
                  {formikProps => (
                    <Form>
                      <Text variant="textSm" className="mb-2">
                        {cms.newsletter.subscribe.description}
                      </Text>
                      <Field
                        as={Checkbox}
                        name="privacy"
                        aria-label={cms.newsletter.subscribe.field.aria}
                        checked={formikProps.values.privacy}
                        label={
                          <>
                            {cms.newsletter.subscribe.field.label[0]}{' '}
                            <Route
                              className="italic"
                              href={cms.newsletter.subscribe.field.label[1].href}
                              title={cms.newsletter.subscribe.field.label[1].meta}
                              ariaLabel={cms.newsletter.subscribe.field.label[1].meta}>
                              {cms.newsletter.subscribe.field.label[1].text}
                            </Route>{' '}
                            {cms.newsletter.subscribe.field.label[2]}
                          </>
                        }
                      />
                      <ErrorMessage
                        name="privacy"
                        variant="textSm"
                        className="mt-1 mb-3 ml-6 italic"
                        component={Text}
                      />
                      <Button type="submit" className="block mt-4 bg-steel-100">
                        {cms.newsletter.subscribe.action}
                      </Button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <>
                  <Text variant="textSm" className="mb-2">
                    {cms.newsletter.unsubscribe.description}
                  </Text>
                  <Button onClick={handleUnsubscribe} className="block mt-4 bg-steel-100">
                    {cms.newsletter.unsubscribe.action}
                  </Button>
                </>
              )}
            </div>
            <div id="sponsoring" className="mt-12">
              <Text variant="textMd" className="mb-2">
                {cms.sponsoring.title}
              </Text>
              <Text variant="textSm">{cms.sponsoring.description}</Text>
              <Link
                variant="button"
                className="block mt-4 bg-steel-100"
                title={cms.sponsoring.action.meta}
                ariaLabel={cms.sponsoring.action.meta}
                href={cms.sponsoring.action.href}>
                {cms.sponsoring.action.text}
              </Link>
            </div>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols">
            <InfoCard className="mt-12 text-gray-700 bg-gray-200 lg:ml-16 lg:mt-0">
              {cms.info[0]}
              <Link
                color="livid"
                href={cms.info[1].href}
                textVariant="textSm"
                title={cms.info[1].meta}
                ariaLabel={cms.info[1].meta}>
                {cms.info[1].text}
              </Link>{' '}
              {cms.info[2]}
            </InfoCard>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="twoCols" className="lg:col-start-2">
            <div id="delete" className="mt-10 text-warning-700">
              <Text variant="textMd" className="mb-2">
                {cms.delete.title}
              </Text>
              <Text variant="textSm">{cms.delete.description}</Text>
              <Button onClick={handleDelete} variant="outline" color="warning" className="block mt-4">
                {cms.delete.action}
              </Button>
            </div>
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

export default Settings
